import type { EINApplicationState } from './types';

const STORAGE_KEY = 'ein_applications';

export type ApplicationStatus = 'new' | 'ein_sent';

export interface StoredApplication {
  id: string;
  createdAt: string; // ISO
  status: ApplicationStatus;
  assignedEIN: string | null;
  /** Snapshot of form state (no errors/touchedFields) */
  data: Omit<EINApplicationState, 'errors' | 'touchedFields' | 'currentStep' | 'furthestStep'>;
}

function safeParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json) as T;
  } catch {
    return fallback;
  }
}

export function getApplications(): StoredApplication[] {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? safeParse(raw, []) : [];
}

export function getApplicationById(id: string): StoredApplication | null {
  return getApplications().find((a) => a.id === id) ?? null;
}

export function saveApplication(
  data: Omit<EINApplicationState, 'errors' | 'touchedFields' | 'currentStep' | 'furthestStep'>,
  assignedEIN: string
): StoredApplication {
  const list = getApplications();
  const app: StoredApplication = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: 'new',
    assignedEIN,
    data: { ...data, assignedEIN },
  };
  list.unshift(app);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return app;
}

export function updateApplicationStatus(id: string, status: ApplicationStatus): void {
  const list = getApplications();
  const idx = list.findIndex((a) => a.id === id);
  if (idx === -1) return;
  list[idx] = { ...list[idx], status };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}
