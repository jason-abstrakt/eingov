const ADMIN_SESSION_KEY = 'ein_admin_session';

// Fixed admin credentials (change in production / use env)
export const ADMIN_EMAIL = 'admin@eingov.com';
export const ADMIN_PASSWORD = '.sP^hZP3jXqc3b?M{23';

export function signIn(email: string, password: string): boolean {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(ADMIN_SESSION_KEY, '1');
    }
    return true;
  }
  return false;
}

export function signOut(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
  }
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === '1';
}
