'use client';

import { useEIN } from '@/context/EINContext';
import { REASONS } from '@/lib/constants';
import RadioCard from '@/components/ui/RadioCard';
import FieldError from '@/components/ui/FieldError';
import type { ReasonForApplying } from '@/lib/types';

export default function ReasonSelector() {
  const { state, dispatch } = useEIN();

  // Estate does not require a reason
  if (!state.entityType || state.entityType === 'estate') return null;

  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-gray-700 mb-3">
        Why are you applying for an EIN? <span className="text-red-500">*</span>
      </h3>
      <div className="grid grid-cols-1 gap-3">
        {REASONS.map((r) => (
          <RadioCard
            key={r.value}
            name="reasonForApplying"
            value={r.value}
            checked={state.reasonForApplying === r.value}
            onChange={() => dispatch({ type: 'SET_REASON', reason: r.value as ReasonForApplying })}
            label={r.label}
            description={r.description}
          />
        ))}
      </div>
      <FieldError message={state.errors.reasonForApplying} />
    </div>
  );
}
