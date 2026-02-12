'use client';

import { ChangeEvent } from 'react';
import FieldError from './FieldError';

interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

interface RadioGroupProps {
  label?: string;
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  direction?: 'vertical' | 'horizontal';
}

export default function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  required,
  error,
  direction = 'vertical',
}: RadioGroupProps) {
  return (
    <fieldset>
      {label && (
        <legend className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </legend>
      )}
      <div
        className={
          direction === 'horizontal'
            ? 'flex flex-wrap gap-4'
            : 'flex flex-col gap-3'
        }
      >
        {options.map((opt) => (
          <label key={opt.value} className="flex items-start gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={onChange}
              className="mt-0.5 h-4 w-4 text-us-blue border-gray-300 focus:ring-us-blue/20"
            />
            <div>
              <span className="text-sm text-gray-900">{opt.label}</span>
              {opt.description && (
                <p className="text-xs text-gray-500 mt-0.5">{opt.description}</p>
              )}
            </div>
          </label>
        ))}
      </div>
      <FieldError message={error} />
    </fieldset>
  );
}
