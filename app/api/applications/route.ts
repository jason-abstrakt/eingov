import { NextRequest, NextResponse } from 'next/server';
import { getSQL } from '@/lib/db';
import { verifyAdmin } from '@/lib/auth-server';
import { maskSSN, generateMockEIN } from '@/lib/utils';

// POST — Submit a new application (public, no auth required)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const sql = getSQL();

    // Generate EIN server-side
    const assignedEIN = generateMockEIN();

    // Strip sensitive payment data before storing
    const {
      cardNumber: _cn,
      cardCVC: _cc,
      cardMonth: _cm,
      cardYear: _cy,
      ...safeData
    } = body;

    // Mask SSN before storing
    const ssnLast4 = (safeData.ssn || '').replace(/\D/g, '').slice(-4);
    safeData.ssn = maskSSN(safeData.ssn || '');

    // Also mask decedent SSN if present
    if (safeData.decedentSSN) {
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
        form_data, ssn_last4
      ) VALUES (
        'new', ${assignedEIN}, ${safeData.entityType || null}, ${legalName},
        ${safeData.email || null}, ${formDataJson}::jsonb, ${ssnLast4}
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
