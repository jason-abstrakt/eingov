'use client';

import { useEIN } from '@/context/EINContext';
import FormSection from '@/components/ui/FormSection';
import RadioCard from '@/components/ui/RadioCard';
import FieldError from '@/components/ui/FieldError';
import AddressForm from '@/components/apply/sections/AddressForm';

export default function AddressStep() {
  const { state, dispatch } = useEIN();

  const handleMailingFieldChange = (field: 'street1' | 'street2' | 'city' | 'state' | 'zip', value: string) => {
    dispatch({ type: 'SET_ADDRESS_FIELD', addressType: 'mailing', field, value });
  };

  const handlePhysicalFieldChange = (field: 'street1' | 'street2' | 'city' | 'state' | 'zip', value: string) => {
    dispatch({ type: 'SET_ADDRESS_FIELD', addressType: 'physical', field, value });
  };

  const handleBlur = (field: string) => {
    dispatch({ type: 'TOUCH_FIELD', field });
  };

  return (
    <div>
      <FormSection
        title="Mailing Address"
        description="Where should the IRS send correspondence and your EIN confirmation letter (CP 575)?"
      >
        <AddressForm
          prefix="mailing"
          address={state.mailingAddress}
          onFieldChange={handleMailingFieldChange}
          onBlur={handleBlur}
          errors={state.errors}
        />
      </FormSection>

      <FormSection
        title="Physical Location"
        description="Where is your business or organization physically located?"
      >
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Is your physical location the same as your mailing address? <span className="text-red-500">*</span>
        </h3>
        <div className="space-y-3">
          <RadioCard
            name="physicalSameAsMailing"
            value="true"
            checked={state.physicalSameAsMailing === true}
            onChange={() => dispatch({ type: 'SET_FIELD', field: 'physicalSameAsMailing', value: true })}
            label="Yes, same as mailing address"
            description="My business operates from the same address listed above."
          />
          <RadioCard
            name="physicalSameAsMailing"
            value="false"
            checked={state.physicalSameAsMailing === false}
            onChange={() => dispatch({ type: 'SET_FIELD', field: 'physicalSameAsMailing', value: false })}
            label="No, different address"
            description="My business is located at a different address."
          />
        </div>
        <FieldError message={state.errors.physicalSameAsMailing} />

        {state.physicalSameAsMailing === false && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Physical Address</h3>
            <AddressForm
              prefix="physical"
              address={state.physicalAddress}
              onFieldChange={handlePhysicalFieldChange}
              onBlur={handleBlur}
              errors={state.errors}
            />
          </div>
        )}
      </FormSection>
    </div>
  );
}
