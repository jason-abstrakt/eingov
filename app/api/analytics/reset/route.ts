import { NextResponse } from 'next/server';
import { getSQL } from '@/lib/db';

export async function GET() {
  try {
    const sql = getSQL();

    await sql`DELETE FROM analytics_events`;
    await sql`DELETE FROM applications`;

    return NextResponse.json({
      done: true,
      message: 'All analytics events and applications have been cleared. You can now delete this route.',
    });
  } catch (err) {
    console.error('Reset failed:', err);
    return NextResponse.json(
      { error: 'Reset failed', details: String(err) },
      { status: 500 }
    );
  }
}
