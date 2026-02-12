'use client';

import { useEIN } from '@/context/EINContext';
import {
  SOLE_PROP_SUB_TYPES,
  PARTNERSHIP_SUB_TYPES,
  CORPORATION_SUB_TYPES,
  TRUST_SUB_TYPES,
  TRUST_PRIMARY_COUNT,
  ADDITIONAL_SUB_TYPES,
  ADDITIONAL_PRIMARY_COUNT,
} from '@/lib/constants';
import RadioCard from '@/components/ui/RadioCard';
import ShowMoreToggle from '@/components/ui/ShowMoreToggle';
import FieldError from '@/components/ui/FieldError';
import type { EntitySubType } from '@/lib/types';

export default function SubTypeSelector() {
  const { state, dispatch } = useEIN();

  const entityType = state.entityType;

  // No sub-type for LLC or Estate
  if (!entityType || entityType === 'llc' || entityType === 'estate') return null;

  const subTypesMap: Record<string, { options: typeof SOLE_PROP_SUB_TYPES; primaryCount?: number }> = {
    sole_proprietor: { options: SOLE_PROP_SUB_TYPES },
    partnership: { options: PARTNERSHIP_SUB_TYPES },
    corporation: { options: CORPORATION_SUB_TYPES },
    trust: { options: TRUST_SUB_TYPES, primaryCount: TRUST_PRIMARY_COUNT },
    additional: { options: ADDITIONAL_SUB_TYPES, primaryCount: ADDITIONAL_PRIMARY_COUNT },
  };

  const config = subTypesMap[entityType];
  if (!config) return null;

  const { options, primaryCount } = config;
  const hasSplit = primaryCount !== undefined && primaryCount < options.length;
  const primaryOptions = hasSplit ? options.slice(0, primaryCount) : options;
  const secondaryOptions = hasSplit ? options.slice(primaryCount) : [];

  const handleSelect = (value: string) => {
    dispatch({ type: 'SET_ENTITY_SUB_TYPE', subType: value as EntitySubType });
  };

  const label =
    entityType === 'trust'
      ? 'What type of trust?'
      : entityType === 'additional'
      ? 'What type of organization?'
      : entityType === 'corporation'
      ? 'What type of corporation?'
      : entityType === 'partnership'
      ? 'What type of partnership?'
      : 'What type of sole proprietorship?';

  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-gray-700 mb-3">
        {label} <span className="text-red-500">*</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {primaryOptions.map((t) => (
          <RadioCard
            key={t.value}
            name="entitySubType"
            value={t.value}
            checked={state.entitySubType === t.value}
            onChange={() => handleSelect(t.value)}
            label={t.label}
            description={t.description}
          />
        ))}
      </div>

      {hasSplit && (
        <div className="mt-4">
          <ShowMoreToggle
            label={`Show all ${options.length} types`}
            expandedLabel="Show fewer types"
            defaultExpanded={secondaryOptions.some((t) => t.value === state.entitySubType)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {secondaryOptions.map((t) => (
                <RadioCard
                  key={t.value}
                  name="entitySubType"
                  value={t.value}
                  checked={state.entitySubType === t.value}
                  onChange={() => handleSelect(t.value)}
                  label={t.label}
                  description={t.description}
                />
              ))}
            </div>
          </ShowMoreToggle>
        </div>
      )}

      <FieldError message={state.errors.entitySubType} />
    </div>
  );
}
