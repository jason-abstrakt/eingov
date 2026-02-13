import { NextRequest, NextResponse } from 'next/server';
import { getSQL } from '@/lib/db';
import { verifyAdmin } from '@/lib/auth-server';
import { decryptSSN } from '@/lib/crypto';
import { formatSSN } from '@/lib/utils';

// GET — Decrypt and return full SSN (admin only)
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const authError = await verifyAdmin(req);
  if (authError) return authError;

  try {
    const sql = getSQL();
    const rows = await sql`
      SELECT ssn_encrypted, decedent_ssn_encrypted
      FROM applications WHERE id = ${params.id}
    `;

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    const row = rows[0];
    const result: { ssn?: string; decedentSSN?: string } = {};

    if (row.ssn_encrypted) {
      const raw = decryptSSN(row.ssn_encrypted);
      result.ssn = formatSSN(raw);
    }

    if (row.decedent_ssn_encrypted) {
      const raw = decryptSSN(row.decedent_ssn_encrypted);
      result.decedentSSN = formatSSN(raw);
    }

    return NextResponse.json(result);
  } catch (err) {
    console.error('Failed to decrypt SSN:', err);
    return NextResponse.json(
      { error: 'Failed to retrieve SSN' },
      { status: 500 }
    );
  }
}
