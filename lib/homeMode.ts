export type HomeMode = 'ein' | 'business';

const HOME_MODE_KEY = 'site_home_mode';

export function getHomeMode(): HomeMode {
  if (typeof window === 'undefined') return 'business';
  const raw = localStorage.getItem(HOME_MODE_KEY);
  if (raw === 'business' || raw === 'ein') return raw;
  return 'business';
}

export function setHomeMode(mode: HomeMode): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(HOME_MODE_KEY, mode);
}

export async function fetchHomeMode(): Promise<HomeMode> {
  try {
    const res = await fetch('/api/settings/home-mode');
    if (res.ok) {
      const data = await res.json();
      if (data.mode === 'business' || data.mode === 'ein') return data.mode;
    }
  } catch {
    // ignore
  }
  return getHomeMode();
}

export async function saveHomeMode(mode: HomeMode): Promise<void> {
  setHomeMode(mode);
  try {
    await fetch('/api/settings/home-mode', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mode }),
    });
  } catch {
    // localStorage already set; API is optional for site-wide
  }
}
