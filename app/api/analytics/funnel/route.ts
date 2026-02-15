import { NextRequest, NextResponse } from 'next/server';
import { getSQL } from '@/lib/db';
import { verifyAdmin } from '@/lib/auth-server';

function getDateThreshold(range: string): Date | null {
  const now = new Date();
  switch (range) {
    case '7d': return new Date(now.getTime() - 7 * 86400000);
    case '30d': return new Date(now.getTime() - 30 * 86400000);
    case '90d': return new Date(now.getTime() - 90 * 86400000);
    default: return null; // 'all'
  }
}

export async function GET(req: NextRequest) {
  const authError = await verifyAdmin(req);
  if (authError) return authError;

  const { searchParams } = new URL(req.url);
  const range = searchParams.get('range') || '30d';
  const threshold = getDateThreshold(range);

  try {
    const sql = getSQL();

    // Funnel step counts — count distinct sessions per event type + step
    const rows = threshold
      ? await sql`
          SELECT event_type, step_number, COUNT(DISTINCT session_id) as count
          FROM analytics_events
          WHERE created_at >= ${threshold.toISOString()}
          GROUP BY event_type, step_number
        `
      : await sql`
          SELECT event_type, step_number, COUNT(DISTINCT session_id) as count
          FROM analytics_events
          GROUP BY event_type, step_number
        `;

    // Build funnel data
    const funnel = [
      { step: 1, label: 'Landing', count: 0 },
      { step: 2, label: 'Responsible Party', count: 0 },
      { step: 3, label: 'Addresses', count: 0 },
      { step: 4, label: 'Business Details', count: 0 },
      { step: 5, label: 'Review', count: 0 },
      { step: 6, label: 'Payment', count: 0 },
      { step: 7, label: 'Successful Payment', count: 0 },
    ];

    for (const row of rows) {
      if (row.event_type === 'funnel_start') {
        funnel[0].count = Number(row.count);
      } else if (row.event_type === 'step_advance' && row.step_number >= 2 && row.step_number <= 6) {
        funnel[row.step_number - 1].count = Number(row.count);
      } else if (row.event_type === 'payment_success') {
        funnel[6].count = Number(row.count);
      }
    }

    // Payment abandonment breakdown
    const abandonRows = threshold
      ? await sql`
          SELECT metadata->>'abandonReason' as reason, COUNT(*) as count
          FROM analytics_events
          WHERE event_type = 'payment_abandoned'
            AND created_at >= ${threshold.toISOString()}
          GROUP BY metadata->>'abandonReason'
        `
      : await sql`
          SELECT metadata->>'abandonReason' as reason, COUNT(*) as count
          FROM analytics_events
          WHERE event_type = 'payment_abandoned'
          GROUP BY metadata->>'abandonReason'
        `;

    const paymentBreakdown = {
      no_action: 0,
      declined_then_abandoned: 0,
      error_then_abandoned: 0,
      after_terms_before_submit: 0,
    };

    for (const row of abandonRows) {
      if (row.reason && row.reason in paymentBreakdown) {
        paymentBreakdown[row.reason as keyof typeof paymentBreakdown] = Number(row.count);
      }
    }

    // Payment success count for the breakdown section
    const successCount = funnel[6].count;

    return NextResponse.json({ funnel, paymentBreakdown, successCount });
  } catch (err) {
    console.error('Funnel analytics error:', err);
    return NextResponse.json({ error: 'Failed to fetch funnel data' }, { status: 500 });
  }
}
