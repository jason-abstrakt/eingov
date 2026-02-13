'use client';

import { ChangeEvent, FocusEvent } from 'react';
import FieldError from './FieldError';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps {
  label?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: FocusEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  required?: boolean;
  error?: string;
  helpText?: string;
  placeholder?: string;
}

export default function SelectInput({
  label,
  name,
  value,
  onChange,
  onBlur,
  options,
  required,
  error,
  helpText,
  placeholder = 'Select...',
}: SelectInputProps) {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full rounded-md border px-3 py-2.5 text-base transition-colors ${
          error
            ? 'border-red-500'
            : 'border-gray-300 focus:border-us-blue focus:ring-2 focus:ring-us-blue/20'
        } outline-none bg-white`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {helpText && !error && (
        <p className="text-xs text-gray-500 mt-1">{helpText}</p>
      )}
      <FieldError message={error} />
    </div>
  );
}
