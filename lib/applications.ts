import type { EINApplicationState } from './types';

export type ApplicationStatus = 'new' | 'ein_sent';

export interface StoredApplication {
  id: string;
  createdAt: string; // ISO
  status: ApplicationStatus;
  assignedEIN: string | null;
  /** Snapshot of form state (no errors/touchedFields) */
  data: Omit<EINApplicationState, 'errors' | 'touchedFields' | 'currentStep' | 'furthestStep'>;
}

export async function getApplications(): Promise<StoredApplication[]> {
  try {
    const res = await fetch('/api/applications');
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getApplicationById(id: string): Promise<StoredApplication | null> {
  try {
    const res = await fetch(`/api/applications/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function saveApplication(
  data: Omit<EINApplicationState, 'errors' | 'touchedFields' | 'currentStep' | 'furthestStep'>
): Promise<{ id: string; assignedEIN: string }> {
  const res = await fetch('/api/applications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to save application');
  return res.json();
}

export async function revealSSN(
  applicationId: string
): Promise<{ ssn?: string; decedentSSN?: string } | null> {
  try {
    const res = await fetch(`/api/applications/${applicationId}/ssn`);
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function updateApplicationStatus(id: string, status: ApplicationStatus): Promise<void> {
  await fetch(`/api/applications/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
}
