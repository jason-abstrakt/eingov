import { NextRequest, NextResponse } from 'next/server';
import { getSQL } from '@/lib/db';

const VALID_EVENT_TYPES = [
  'funnel_start',
  'step_advance',
  'step_abandon',
  'payment_attempt',
  'payment_success',
  'payment_failed',
  'payment_abandoned',
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { sessionId, eventType, stepNumber, metadata } = body;

    // Basic validation
    if (!sessionId || typeof sessionId !== 'string' || sessionId.length > 64) {
      return NextResponse.json({ error: 'Invalid session' }, { status: 400 });
    }
    if (!VALID_EVENT_TYPES.includes(eventType)) {
      return NextResponse.json({ error: 'Invalid event type' }, { status: 400 });
    }

    const sql = getSQL();
    const metadataJson = JSON.stringify(metadata || {});

    await sql`
      INSERT INTO analytics_events (session_id, event_type, step_number, metadata)
      VALUES (${sessionId}, ${eventType}, ${stepNumber ?? null}, ${metadataJson}::jsonb)
    `;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Analytics event error:', err);
    // Return 200 even on error to avoid client-side noise
    return NextResponse.json({ ok: true });
  }
}
