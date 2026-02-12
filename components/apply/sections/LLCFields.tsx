'use client';

import { useEIN } from '@/context/EINContext';
import TextInput from '@/components/ui/TextInput';
import SelectInput from '@/components/ui/SelectInput';
import { US_STATES } from '@/lib/constants';

export default function LLCFields() {
  const { state, dispatch } = useEIN();

  if (state.entityType !== 'llc') return null;

  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-sm font-medium text-gray-700">LLC Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextInput
          label="Number of LLC Members"
          name="llcMemberCount"
          value={state.llcMemberCount}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'llcMemberCount', value: e.target.value.replace(/\D/g, '') })}
          onBlur={() => dispatch({ type: 'TOUCH_FIELD', field: 'llcMemberCount' })}
          required
          error={state.errors.llcMemberCount}
          placeholder="1"
          helpText="How many members does this LLC have?"
        />
        <SelectInput
          label="State of Organization"
          name="llcState"
          value={state.llcState}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'llcState', value: e.target.value })}
          onBlur={() => dispatch({ type: 'TOUCH_FIELD', field: 'llcState' })}
          options={US_STATES}
          required
          error={state.errors.llcState}
          placeholder="Select state..."
          helpText="Where was the LLC organized?"
        />
      </div>
    </div>
  );
}
