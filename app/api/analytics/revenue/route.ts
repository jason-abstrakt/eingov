import { NextRequest, NextResponse } from 'next/server';
import { getSQL } from '@/lib/db';
import { verifyAdmin } from '@/lib/auth-server';

function getDateThreshold(range: string): Date | null {
  const now = new Date();
  switch (range) {
    case '7d': return new Date(now.getTime() - 7 * 86400000);
    case '30d': return new Date(now.getTime() - 30 * 86400000);
    case '90d': return new Date(now.getTime() - 90 * 86400000);
    default: return null;
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

    // Revenue summary
    const revenueRows = threshold
      ? await sql`
          SELECT
            COUNT(*)::int as total_orders,
            COALESCE(SUM(CASE WHEN form_data->>'processingOption' = 'rush' THEN 319 ELSE 279 END), 0)::int as total_revenue,
            COALESCE(SUM(CASE WHEN form_data->>'processingOption' = 'rush' THEN 1 ELSE 0 END), 0)::int as rush_count,
            COALESCE(SUM(CASE WHEN form_data->>'processingOption' = 'standard' THEN 1 ELSE 0 END), 0)::int as standard_count,
            COALESCE(SUM(CASE WHEN form_data->>'processingOption' = 'rush' THEN 319 ELSE 0 END), 0)::int as rush_revenue,
            COALESCE(SUM(CASE WHEN form_data->>'processingOption' = 'standard' THEN 279 ELSE 0 END), 0)::int as standard_revenue
          FROM applications
          WHERE created_at >= ${threshold.toISOString()}
        `
      : await sql`
          SELECT
            COUNT(*)::int as total_orders,
            COALESCE(SUM(CASE WHEN form_data->>'processingOption' = 'rush' THEN 319 ELSE 279 END), 0)::int as total_revenue,
            COALESCE(SUM(CASE WHEN form_data->>'processingOption' = 'rush' THEN 1 ELSE 0 END), 0)::int as rush_count,
            COALESCE(SUM(CASE WHEN form_data->>'processingOption' = 'standard' THEN 1 ELSE 0 END), 0)::int as standard_count,
            COALESCE(SUM(CASE WHEN form_data->>'processingOption' = 'rush' THEN 319 ELSE 0 END), 0)::int as rush_revenue,
            COALESCE(SUM(CASE WHEN form_data->>'processingOption' = 'standard' THEN 279 ELSE 0 END), 0)::int as standard_revenue
          FROM applications
        `;

    // Funnel starts for conversion rate
    const funnelStartRows = threshold
      ? await sql`
          SELECT COUNT(DISTINCT session_id)::int as count
          FROM analytics_events
          WHERE event_type = 'funnel_start'
            AND created_at >= ${threshold.toISOString()}
        `
      : await sql`
          SELECT COUNT(DISTINCT session_id)::int as count
          FROM analytics_events
          WHERE event_type = 'funnel_start'
        `;

    // Revenue over time (daily)
    const timeSeriesRows = threshold
      ? await sql`
          SELECT
            DATE(created_at) as date,
            COUNT(*)::int as orders,
            COALESCE(SUM(CASE WHEN form_data->>'processingOption' = 'rush' THEN 319 ELSE 279 END), 0)::int as revenue
          FROM applications
          WHERE created_at >= ${threshold.toISOString()}
          GROUP BY DATE(created_at)
          ORDER BY date
        `
      : await sql`
          SELECT
            DATE(created_at) as date,
            COUNT(*)::int as orders,
            COALESCE(SUM(CASE WHEN form_data->>'processingOption' = 'rush' THEN 319 ELSE 279 END), 0)::int as revenue
          FROM applications
          GROUP BY DATE(created_at)
          ORDER BY date
        `;

    const rev = revenueRows[0];
    const totalOrders = Number(rev.total_orders) || 0;
    const totalRevenue = Number(rev.total_revenue) || 0;
    const funnelStarts = Number(funnelStartRows[0]?.count) || 0;

    return NextResponse.json({
      totalRevenue,
      totalOrders,
      funnelStarts,
      revenuePerLanding: funnelStarts > 0 ? Math.round((totalRevenue / funnelStarts) * 100) / 100 : 0,
      averageOrderValue: totalOrders > 0 ? Math.round((totalRevenue / totalOrders) * 100) / 100 : 0,
      conversionRate: funnelStarts > 0 ? Math.round((totalOrders / funnelStarts) * 10000) / 100 : 0,
      rushCount: Number(rev.rush_count) || 0,
      standardCount: Number(rev.standard_count) || 0,
      rushRevenue: Number(rev.rush_revenue) || 0,
      standardRevenue: Number(rev.standard_revenue) || 0,
      timeSeries: timeSeriesRows.map((r: Record<string, unknown>) => ({
        date: r.date,
        orders: Number(r.orders),
        revenue: Number(r.revenue),
      })),
    });
  } catch (err) {
    console.error('Revenue analytics error:', err);
    return NextResponse.json({ error: 'Failed to fetch revenue data' }, { status: 500 });
  }
}
