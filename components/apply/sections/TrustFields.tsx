'use client';

import { useEIN } from '@/context/EINContext';
import TextInput from '@/components/ui/TextInput';
import DateInput from '@/components/ui/DateInput';

export default function TrustFields() {
  const { state, dispatch } = useEIN();

  if (state.entityType !== 'trust') return null;

  const handleBlur = (field: string) => {
    dispatch({ type: 'TOUCH_FIELD', field });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-gray-900">Trust Information</h3>
      <p className="text-sm text-gray-500 -mt-2">
        Provide the name and funding date of the trust.
      </p>

      <TextInput
        label="Name of the Trust"
        name="trustName"
        value={state.trustName}
        onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'trustName', value: e.target.value })}
        onBlur={() => handleBlur('trustName')}
        required
        error={state.errors.trustName}
        placeholder="e.g., The Smith Family Trust"
      />

      <DateInput
        label="Date Trust Was Funded"
        name="dateFunded"
        value={state.dateFunded}
        onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'dateFunded', value: e.target.value })}
        onBlur={() => handleBlur('dateFunded')}
        required
        error={state.errors.dateFunded}
        helpText="The date assets were first transferred into the trust."
      />
    </div>
  );
}
