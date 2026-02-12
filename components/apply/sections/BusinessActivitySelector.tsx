'use client';

import { useEIN } from '@/context/EINContext';
import SelectInput from '@/components/ui/SelectInput';
import TextInput from '@/components/ui/TextInput';
import { BUSINESS_ACTIVITIES } from '@/lib/constants';

export default function BusinessActivitySelector() {
  const { state, dispatch } = useEIN();

  return (
    <div className="space-y-4">
      <SelectInput
        label="Primary Business Activity"
        name="businessActivity"
        value={state.businessActivity ?? ''}
        onChange={(e) =>
          dispatch({ type: 'SET_FIELD', field: 'businessActivity', value: e.target.value || null })
        }
        onBlur={() => dispatch({ type: 'TOUCH_FIELD', field: 'businessActivity' })}
        options={BUSINESS_ACTIVITIES}
        required
        error={state.errors.businessActivity}
        placeholder="Select activity..."
        helpText="Choose the category that best describes what your business does."
      />

      <TextInput
        label="Describe Your Products or Services"
        name="specificProducts"
        value={state.specificProducts}
        onChange={(e) =>
          dispatch({ type: 'SET_FIELD', field: 'specificProducts', value: e.target.value })
        }
        onBlur={() => dispatch({ type: 'TOUCH_FIELD', field: 'specificProducts' })}
        required
        error={state.errors.specificProducts}
        placeholder="e.g., Web design services, Italian restaurant, Residential plumbing"
        helpText="Briefly describe the main products or services your business provides."
      />
    </div>
  );
}
