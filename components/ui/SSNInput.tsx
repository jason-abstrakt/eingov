'use client';

import { ChangeEvent, FocusEvent } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { formatSSN, maskSSN } from '@/lib/utils';
import FieldError from './FieldError';

interface SSNInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  visible: boolean;
  onToggleVisibility: () => void;
  required?: boolean;
  error?: string;
}

export default function SSNInput({
  label,
  name,
  value,
  onChange,
  onBlur,
  visible,
  onToggleVisibility,
  required,
  error,
}: SSNInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // When typing, we want to maintain the dashes if possible, but input type="password" hides everything.
    // If it's type="password", we can't easily format with dashes visible inside the input.
    // However, the prompt asks to allow typing when in hidden mode.
    // The previous implementation used a readOnly text input with asterisks, which prevented typing.
    
    // Simplest fix: Just allow typing in both modes.
    // When visible: type="text", value shows numbers and dashes.
    // When hidden: type="password", value shows dots (browser default).
    // The formatSSN utility handles adding dashes to the raw value.
    
    const formatted = formatSSN(e.target.value);
    
    // Create synthetic event with the formatted value
    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        name,
        value: formatted
      }
    } as ChangeEvent<HTMLInputElement>;
    
    onChange(syntheticEvent);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        <button
          type="button"
          onClick={onToggleVisibility}
          className="text-us-blue text-sm font-medium hover:underline flex items-center gap-1 focus:outline-none"
        >
          {visible ? (
            <>
              <EyeOff className="h-4 w-4" />
              Hide
            </>
          ) : (
            <>
              <Eye className="h-4 w-4" />
              Show
            </>
          )}
        </button>
      </div>
      
      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder="000-00-0000"
          maxLength={11}
          autoComplete="off"
          className={`w-full rounded-md border px-3 py-2.5 text-base transition-colors ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
              : 'border-gray-300 focus:border-us-blue focus:ring-2 focus:ring-us-blue/20'
          } outline-none shadow-sm`}
        />
      </div>
      <FieldError message={error} />
    </div>
  );
}
