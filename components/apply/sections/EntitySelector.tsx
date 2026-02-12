'use client';

import { useEIN } from '@/context/EINContext';
import { ENTITY_TYPES } from '@/lib/constants';
import RadioCard from '@/components/ui/RadioCard';
import ShowMoreToggle from '@/components/ui/ShowMoreToggle';
import FieldError from '@/components/ui/FieldError';
import type { PrimaryEntityType } from '@/lib/types';

export default function EntitySelector() {
  const { state, dispatch } = useEIN();

  const primaryTypes = ENTITY_TYPES.filter((t) => t.primary);
  const secondaryTypes = ENTITY_TYPES.filter((t) => !t.primary);

  const handleSelect = (value: string) => {
    dispatch({ type: 'SET_ENTITY_TYPE', entityType: value as PrimaryEntityType });
  };

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-700 mb-3">
        What type of entity are you forming? <span className="text-red-500">*</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {primaryTypes.map((t) => (
          <RadioCard
            key={t.value}
            name="entityType"
            value={t.value}
            checked={state.entityType === t.value}
            onChange={() => handleSelect(t.value)}
            label={t.label}
            description={t.description}
          />
        ))}
      </div>

      <div className="mt-4">
        <ShowMoreToggle
          label="Show more entity types"
          expandedLabel="Show fewer entity types"
          defaultExpanded={
            state.entityType !== null &&
            secondaryTypes.some((t) => t.value === state.entityType)
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {secondaryTypes.map((t) => (
              <RadioCard
                key={t.value}
                name="entityType"
                value={t.value}
                checked={state.entityType === t.value}
                onChange={() => handleSelect(t.value)}
                label={t.label}
                description={t.description}
              />
            ))}
          </div>
        </ShowMoreToggle>
      </div>

      <FieldError message={state.errors.entityType} />
    </div>
  );
}
