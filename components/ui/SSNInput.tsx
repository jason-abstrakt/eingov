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
    const formatted = formatSSN(e.target.value);
    const syntheticEvent = {
      ...e,
      target: { ...e.target, name, value: formatted },
    } as ChangeEvent<HTMLInputElement>;
    onChange(syntheticEvent);
  };

  const displayValue = visible ? value : maskSSN(value);

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
          className="text-us-blue text-sm font-medium hover:underline flex items-center gap-1"
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
      <input
        type="text"
        id={name}
        name={name}
        value={visible ? value : displayValue}
        onChange={visible ? handleChange : undefined}
        onBlur={onBlur}
        readOnly={!visible}
        placeholder="***-**-****"
        maxLength={11}
        className={`w-full rounded-md border px-3 py-2.5 text-base transition-colors ${
          error
            ? 'border-red-500'
            : 'border-gray-300 focus:border-us-blue focus:ring-2 focus:ring-us-blue/20'
        } ${!visible ? 'bg-gray-50' : ''} outline-none`}
      />
      <FieldError message={error} />
    </div>
  );
}
