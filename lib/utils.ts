import {
  ENTITY_TYPES,
  SOLE_PROP_SUB_TYPES,
  PARTNERSHIP_SUB_TYPES,
  CORPORATION_SUB_TYPES,
  TRUST_SUB_TYPES,
  ADDITIONAL_SUB_TYPES,
  REASONS,
  US_STATES,
  BUSINESS_ACTIVITIES,
  MONTHS,
  SUFFIX_OPTIONS,
} from './constants';
import type { RadioOption, SelectOption } from './types';

// ===== SSN FORMATTING =====

export function formatSSN(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 9);
  if (digits.length <= 3) return digits;
  if (digits.length <= 5) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5)}`;
}

export function maskSSN(value: string): string {
  const digits = value.replace(/\D/g, '');
  if (digits.length < 5) return '***-**-****';
  return `***-**-${digits.slice(5)}`;
}

// ===== EIN FORMATTING =====

export function formatEIN(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 9);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}-${digits.slice(2)}`;
}

export function generateMockEIN(): string {
  const prefix = Math.floor(10 + Math.random() * 90).toString();
  const suffix = Math.floor(1000000 + Math.random() * 9000000).toString();
  return `${prefix}-${suffix}`;
}

// ===== PHONE FORMATTING =====

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

// ===== DATE FORMATTING =====

export function formatDateInput(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

// ===== LABEL LOOKUPS =====

function findLabel(list: (RadioOption | SelectOption)[], value: string | null): string {
  if (!value) return '—';
  const item = list.find((o) => o.value === value);
  return item?.label ?? value;
}

export function getEntityLabel(value: string | null): string {
  return findLabel(ENTITY_TYPES, value);
}

export function getSubTypeLabel(entityType: string | null, subType: string | null): string {
  if (!subType) return '—';
  const lists: Record<string, RadioOption[]> = {
    sole_proprietor: SOLE_PROP_SUB_TYPES,
    partnership: PARTNERSHIP_SUB_TYPES,
    corporation: CORPORATION_SUB_TYPES,
    trust: TRUST_SUB_TYPES,
    additional: ADDITIONAL_SUB_TYPES,
  };
  const list = entityType ? lists[entityType] : undefined;
  if (!list) return subType;
  return findLabel(list, subType);
}

export function getReasonLabel(value: string | null): string {
  return findLabel(REASONS, value);
}

export function getStateLabel(value: string | null): string {
  return findLabel(US_STATES, value);
}

export function getActivityLabel(value: string | null): string {
  return findLabel(BUSINESS_ACTIVITIES, value);
}

export function getMonthLabel(value: string | null): string {
  return findLabel(MONTHS, value);
}

export function getSuffixLabel(value: string | null): string {
  if (!value) return '';
  return findLabel(SUFFIX_OPTIONS, value);
}

// ===== ADDRESS FORMATTING =====

export function formatAddress(addr: { street1: string; street2: string; city: string; state: string; zip: string }): string {
  const parts = [addr.street1];
  if (addr.street2) parts.push(addr.street2);
  parts.push(`${addr.city}, ${addr.state} ${addr.zip}`);
  return parts.join(', ');
}
