import { NextRequest, NextResponse } from 'next/server';
import { getSQL } from '@/lib/db';
import { verifyAdmin } from '@/lib/auth-server';
import { maskSSN, generateMockEIN } from '@/lib/utils';
import { encryptSSN } from '@/lib/crypto';
import { getStripe } from '@/lib/stripe';

// POST — Submit a new application (public, no auth required)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const sql = getSQL();

    // Verify Stripe payment
    const { paymentIntentId } = body;
    if (!paymentIntentId) {
      return NextResponse.json({ error: 'Payment is required' }, { status: 400 });
    }

    const stripe = getStripe();
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.status !== 'succeeded') {
      return NextResponse.json({ error: 'Payment has not been completed' }, { status: 400 });
    }

    // Generate EIN server-side
    const assignedEIN = generateMockEIN();

    // Strip payment-related fields before storing
    const {
      cardNumber: _cn,
      cardCVC: _cc,
      cardMonth: _cm,
      cardYear: _cy,
      paymentIntentId: _pi,
      ...safeData
    } = body;

    // Extract raw SSN digits and encrypt before masking
    const rawSSNDigits = (safeData.ssn || '').replace(/\D/g, '');
    const ssnLast4 = rawSSNDigits.slice(-4);
    const ssnEncrypted = rawSSNDigits.length === 9
      ? encryptSSN(rawSSNDigits)
      : null;

    // Mask SSN in form_data for normal display
    safeData.ssn = maskSSN(safeData.ssn || '');

    // Handle decedent SSN (encrypt then mask)
    let decedentSsnEncrypted: string | null = null;
    if (safeData.decedentSSN) {
      const rawDecedentDigits = safeData.decedentSSN.replace(/\D/g, '');
      decedentSsnEncrypted = rawDecedentDigits.length === 9
        ? encryptSSN(rawDecedentDigits)
        : null;
      safeData.decedentSSN = maskSSN(safeData.decedentSSN);
    }

    // Add the assigned EIN to form data
    safeData.assignedEIN = assignedEIN;

    // Determine display name for searchability
    let legalName = safeData.legalName || '';
    if (safeData.entityType === 'estate') {
      legalName = `${safeData.decedentFirstName || ''} ${safeData.decedentLastName || ''} (Estate)`.trim();
    } else if (safeData.entityType === 'trust') {
      legalName = safeData.trustName || '';
    }

    const formDataJson = JSON.stringify(safeData);

    const result = await sql`
      INSERT INTO applications (
        status, assigned_ein, entity_type, legal_name, applicant_email,
        form_data, ssn_last4, ssn_encrypted, decedent_ssn_encrypted
      ) VALUES (
        'new', ${assignedEIN}, ${safeData.entityType || null}, ${legalName},
        ${safeData.email || null}, ${formDataJson}::jsonb, ${ssnLast4},
        ${ssnEncrypted}, ${decedentSsnEncrypted}
      ) RETURNING id, assigned_ein
    `;

    return NextResponse.json({
      id: result[0].id,
      assignedEIN: result[0].assigned_ein,
    });
  } catch (err) {
    console.error('Failed to save application:', err);
    return NextResponse.json(
      { error: 'Failed to save application' },
      { status: 500 }
    );
  }
}

// GET — List all applications (admin only)
export async function GET(req: NextRequest) {
  const authError = await verifyAdmin(req);
  if (authError) return authError;

  try {
    const sql = getSQL();
    const rows = await sql`
      SELECT id, created_at, status, assigned_ein, entity_type,
             legal_name, applicant_email, form_data
      FROM applications
      ORDER BY created_at DESC
    `;

    // Map to the StoredApplication shape the frontend expects
    const applications = rows.map((row) => ({
      id: row.id,
      createdAt: row.created_at,
      status: row.status,
      assignedEIN: row.assigned_ein,
      data: row.form_data,
    }));

    return NextResponse.json(applications);
  } catch (err) {
    console.error('Failed to fetch applications:', err);
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}
