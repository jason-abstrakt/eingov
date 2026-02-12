'use client';

import { ChangeEvent, FocusEvent } from 'react';
import FieldError from './FieldError';

interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  helpText?: string;
  maxLength?: number;
  disabled?: boolean;
  className?: string;
}

export default function TextInput({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  required,
  error,
  helpText,
  maxLength,
  disabled,
  className,
}: TextInputProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        className={`w-full rounded-md border px-3 py-2.5 text-base transition-colors ${
          error
            ? 'border-red-500'
            : 'border-gray-300 focus:border-us-blue focus:ring-2 focus:ring-us-blue/20'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''} outline-none`}
      />
      {helpText && !error && (
        <p className="text-xs text-gray-500 mt-1">{helpText}</p>
      )}
      <FieldError message={error} />
    </div>
  );
}
