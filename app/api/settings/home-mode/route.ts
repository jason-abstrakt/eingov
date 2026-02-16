import { NextResponse } from 'next/server';
import type { HomeMode } from '@/lib/homeMode';

// In-memory default; for site-wide persistence add app_settings table and use lib/db
let serverMode: HomeMode = 'ein';

export async function GET() {
  try {
    const { getSQL } = await import('@/lib/db');
    const sql = getSQL();
    const rows = await sql`SELECT value FROM app_settings WHERE key = 'home_mode' LIMIT 1`;
    const mode = rows[0]?.value === 'business' ? 'business' : 'ein';
    return NextResponse.json({ mode });
  } catch {
    return NextResponse.json({ mode: serverMode });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const mode = body.mode === 'business' ? 'business' : 'ein';
    serverMode = mode;
    try {
      const { getSQL } = await import('@/lib/db');
      const sql = getSQL();
      await sql`
        INSERT INTO app_settings (key, value) VALUES ('home_mode', ${mode})
        ON CONFLICT (key) DO UPDATE SET value = ${mode}
      `;
    } catch {
      // no table or DB; server memory only (resets on cold start)
    }
    return NextResponse.json({ mode });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
