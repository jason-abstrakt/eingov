import { NextRequest, NextResponse } from 'next/server';
import { getSQL } from '@/lib/db';
import { verifyAdmin } from '@/lib/auth-server';

export async function GET(req: NextRequest) {
  const authError = await verifyAdmin(req);
  if (authError) return authError;

  try {
    const sql = getSQL();

    const entityTypes = await sql`
      SELECT entity_type as value, COUNT(*)::int as count
      FROM applications
      WHERE entity_type IS NOT NULL
      GROUP BY entity_type
      ORDER BY count DESC
    `;

    const reasons = await sql`
      SELECT form_data->>'reasonForApplying' as value, COUNT(*)::int as count
      FROM applications
      WHERE form_data->>'reasonForApplying' IS NOT NULL
      GROUP BY form_data->>'reasonForApplying'
      ORDER BY count DESC
    `;

    const processingOptions = await sql`
      SELECT form_data->>'processingOption' as value, COUNT(*)::int as count
      FROM applications
      WHERE form_data->>'processingOption' IS NOT NULL
      GROUP BY form_data->>'processingOption'
      ORDER BY count DESC
    `;

    const states = await sql`
      SELECT form_data->'mailingAddress'->>'state' as value, COUNT(*)::int as count
      FROM applications
      WHERE form_data->'mailingAddress'->>'state' IS NOT NULL
        AND form_data->'mailingAddress'->>'state' != ''
      GROUP BY form_data->'mailingAddress'->>'state'
      ORDER BY count DESC
      LIMIT 15
    `;

    const businessActivities = await sql`
      SELECT form_data->>'businessActivity' as value, COUNT(*)::int as count
      FROM applications
      WHERE form_data->>'businessActivity' IS NOT NULL
      GROUP BY form_data->>'businessActivity'
      ORDER BY count DESC
    `;

    const hasEmployees = await sql`
      SELECT
        CASE WHEN form_data->>'hasEmployees' = 'true' THEN 'Yes' ELSE 'No' END as value,
        COUNT(*)::int as count
      FROM applications
      WHERE form_data->>'hasEmployees' IS NOT NULL
      GROUP BY form_data->>'hasEmployees'
    `;

    const applicantRoles = await sql`
      SELECT form_data->>'applicantRole' as value, COUNT(*)::int as count
      FROM applications
      WHERE form_data->>'applicantRole' IS NOT NULL
      GROUP BY form_data->>'applicantRole'
      ORDER BY count DESC
    `;

    return NextResponse.json({
      entityTypes,
      reasons,
      processingOptions,
      states,
      businessActivities,
      hasEmployees,
      applicantRoles,
    });
  } catch (err) {
    console.error('Answer analytics error:', err);
    return NextResponse.json({ error: 'Failed to fetch answer data' }, { status: 500 });
  }
}
