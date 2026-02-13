export async function signIn(
  email: string,
  password: string
): Promise<boolean> {
  try {
    const res = await fetch('/api/auth/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function signOut(): Promise<void> {
  await fetch('/api/auth/sign-out', { method: 'POST' });
}

export async function isAuthenticated(): Promise<boolean> {
  try {
    const res = await fetch('/api/auth/me');
    return res.ok;
  } catch {
    return false;
  }
}
