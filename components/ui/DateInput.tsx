'use client';

import { ChangeEvent, FocusEvent } from 'react';
import { formatDateInput } from '@/lib/utils';
import FieldError from './FieldError';

interface DateInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  helpText?: string;
}

export default function DateInput({
  label,
  name,
  value,
  onChange,
  onBlur,
  required,
  error,
  helpText,
}: DateInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDateInput(e.target.value);
    const syntheticEvent = {
      ...e,
      target: { ...e.target, name, value: formatted },
    } as ChangeEvent<HTMLInputElement>;
    onChange(syntheticEvent);
  };

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        placeholder="MM/DD/YYYY"
        maxLength={10}
        className={`w-full rounded-md border px-3 py-2.5 text-base transition-colors ${
          error
            ? 'border-red-500'
            : 'border-gray-300 focus:border-us-blue focus:ring-2 focus:ring-us-blue/20'
        } outline-none`}
      />
      {helpText && !error && (
        <p className="text-xs text-gray-500 mt-1">{helpText}</p>
      )}
      <FieldError message={error} />
    </div>
  );
}
