import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

/**
 * Verify that the incoming request has a valid admin JWT token.
 * Returns null if authorized, or a 401 NextResponse if not.
 */
export async function verifyAdmin(
  req: NextRequest
): Promise<NextResponse | null> {
  const token = req.cookies.get('admin_token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);
    return null; // authorized
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
