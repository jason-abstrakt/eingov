import { NextRequest, NextResponse } from 'next/server';
import { getSQL } from '@/lib/db';
import { verifyAdmin } from '@/lib/auth-server';

// GET — Get a single application by ID (admin only)
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const authError = await verifyAdmin(req);
  if (authError) return authError;

  try {
    const sql = getSQL();
    const rows = await sql`
      SELECT id, created_at, status, assigned_ein, form_data
      FROM applications WHERE id = ${params.id}
    `;

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    const row = rows[0];
    return NextResponse.json({
      id: row.id,
      createdAt: row.created_at,
      status: row.status,
      assignedEIN: row.assigned_ein,
      data: row.form_data,
    });
  } catch (err) {
    console.error('Failed to fetch application:', err);
    return NextResponse.json(
      { error: 'Failed to fetch application' },
      { status: 500 }
    );
  }
}

// PATCH — Update application status (admin only)
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const authError = await verifyAdmin(req);
  if (authError) return authError;

  try {
    const { status } = await req.json();
    const sql = getSQL();

    await sql`
      UPDATE applications SET status = ${status}, updated_at = NOW()
      WHERE id = ${params.id}
    `;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Failed to update application:', err);
    return NextResponse.json(
      { error: 'Failed to update application' },
      { status: 500 }
    );
  }
}
