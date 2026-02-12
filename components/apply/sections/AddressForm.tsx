'use client';

import TextInput from '@/components/ui/TextInput';
import SelectInput from '@/components/ui/SelectInput';
import { US_STATES } from '@/lib/constants';
import type { Address } from '@/lib/types';

interface AddressFormProps {
  prefix: string;
  address: Address;
  onFieldChange: (field: keyof Address, value: string) => void;
  onBlur?: (field: string) => void;
  errors: Record<string, string>;
  disabled?: boolean;
}

export default function AddressForm({
  prefix,
  address,
  onFieldChange,
  onBlur,
  errors,
  disabled,
}: AddressFormProps) {
  return (
    <div className="space-y-4">
      <TextInput
        label="Street Address"
        name={`${prefix}.street1`}
        value={address.street1}
        onChange={(e) => onFieldChange('street1', e.target.value)}
        onBlur={() => onBlur?.(`${prefix}.street1`)}
        required
        error={errors[`${prefix}.street1`]}
        placeholder="123 Main Street"
        disabled={disabled}
      />
      <TextInput
        label="Street Address Line 2"
        name={`${prefix}.street2`}
        value={address.street2}
        onChange={(e) => onFieldChange('street2', e.target.value)}
        placeholder="Apt, Suite, Unit, etc. (optional)"
        disabled={disabled}
      />
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <div className="sm:col-span-3">
          <TextInput
            label="City"
            name={`${prefix}.city`}
            value={address.city}
            onChange={(e) => onFieldChange('city', e.target.value)}
            onBlur={() => onBlur?.(`${prefix}.city`)}
            required
            error={errors[`${prefix}.city`]}
            disabled={disabled}
          />
        </div>
        <div className="sm:col-span-1">
          <SelectInput
            label="State"
            name={`${prefix}.state`}
            value={address.state}
            onChange={(e) => onFieldChange('state', e.target.value)}
            onBlur={() => onBlur?.(`${prefix}.state`)}
            options={US_STATES}
            required
            error={errors[`${prefix}.state`]}
            placeholder="State"
          />
        </div>
        <div className="sm:col-span-2">
          <TextInput
            label="ZIP Code"
            name={`${prefix}.zip`}
            value={address.zip}
            onChange={(e) => onFieldChange('zip', e.target.value)}
            onBlur={() => onBlur?.(`${prefix}.zip`)}
            required
            error={errors[`${prefix}.zip`]}
            placeholder="12345"
            maxLength={10}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
}
