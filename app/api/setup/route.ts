import { NextResponse } from 'next/server';
import { getSQL } from '@/lib/db';

// GET /api/setup — One-time database table creation
// DELETE THIS ROUTE AFTER RUNNING IT ONCE
export async function GET() {
  try {
    const sql = getSQL();

    await sql`
      CREATE TABLE IF NOT EXISTS applications (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        status VARCHAR(20) NOT NULL DEFAULT 'new',
        assigned_ein VARCHAR(20),
        entity_type VARCHAR(50),
        legal_name VARCHAR(255),
        applicant_email VARCHAR(255),
        form_data JSONB NOT NULL,
        ssn_last4 VARCHAR(4),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;

    await sql`CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_applications_entity_type ON applications(entity_type)`;

    return NextResponse.json({ done: true, message: 'Tables and indexes created successfully. You can now delete this route.' });
  } catch (err) {
    console.error('Setup failed:', err);
    return NextResponse.json(
      { error: 'Setup failed', details: String(err) },
      { status: 500 }
    );
  }
}
