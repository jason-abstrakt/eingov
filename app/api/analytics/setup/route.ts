import { NextResponse } from 'next/server';
import { getSQL } from '@/lib/db';

export async function GET() {
  try {
    const sql = getSQL();

    await sql`
      CREATE TABLE IF NOT EXISTS analytics_events (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        session_id VARCHAR(64) NOT NULL,
        event_type VARCHAR(50) NOT NULL,
        step_number SMALLINT,
        metadata JSONB DEFAULT '{}',
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    await sql`
      CREATE INDEX IF NOT EXISTS idx_analytics_session
      ON analytics_events (session_id)
    `;

    await sql`
      CREATE INDEX IF NOT EXISTS idx_analytics_type_created
      ON analytics_events (event_type, created_at)
    `;

    return NextResponse.json({
      done: true,
      message: 'Analytics table and indexes created successfully. You can now delete this route.',
    });
  } catch (err) {
    console.error('Analytics setup failed:', err);
    return NextResponse.json(
      { error: 'Setup failed', details: String(err) },
      { status: 500 }
    );
  }
}
