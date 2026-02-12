'use client';

import { useEIN } from '@/context/EINContext';
import SSNInput from '@/components/ui/SSNInput';
import TextInput from '@/components/ui/TextInput';
import DateInput from '@/components/ui/DateInput';
import SelectInput from '@/components/ui/SelectInput';
import { US_STATES } from '@/lib/constants';
import { formatSSN } from '@/lib/utils';

export default function EstateFields() {
  const { state, dispatch } = useEIN();

  if (state.entityType !== 'estate') return null;

  const handleBlur = (field: string) => {
    dispatch({ type: 'TOUCH_FIELD', field });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-gray-900">Decedent Information</h3>
      <p className="text-sm text-gray-500 -mt-2">
        Provide the Social Security Number and name of the deceased individual.
      </p>

      <SSNInput
        label="Decedent's SSN"
        name="decedentSSN"
        value={state.decedentSSN}
        onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'decedentSSN', value: e.target.value })}
        onBlur={() => handleBlur('decedentSSN')}
        visible={true}
        onToggleVisibility={() => {}}
        required
        error={state.errors.decedentSSN}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextInput
          label="Decedent's First Name"
          name="decedentFirstName"
          value={state.decedentFirstName}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'decedentFirstName', value: e.target.value })}
          onBlur={() => handleBlur('decedentFirstName')}
          required
          error={state.errors.decedentFirstName}
        />
        <TextInput
          label="Decedent's Last Name"
          name="decedentLastName"
          value={state.decedentLastName}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'decedentLastName', value: e.target.value })}
          onBlur={() => handleBlur('decedentLastName')}
          required
          error={state.errors.decedentLastName}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <DateInput
          label="Date of Death"
          name="dateOfDeath"
          value={state.dateOfDeath}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'dateOfDeath', value: e.target.value })}
          onBlur={() => handleBlur('dateOfDeath')}
          required
          error={state.errors.dateOfDeath}
        />
        <SelectInput
          label="Decedent's State of Legal Residence"
          name="decedentState"
          value={state.decedentState}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'decedentState', value: e.target.value })}
          onBlur={() => handleBlur('decedentState')}
          options={US_STATES}
          required
          error={state.errors.decedentState}
          placeholder="Select state..."
        />
      </div>
    </div>
  );
}
