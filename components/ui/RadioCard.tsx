'use client';

import { ChangeEvent } from 'react';

interface RadioCardProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  description?: string;
  disabled?: boolean;
}

export default function RadioCard({
  name,
  value,
  checked,
  onChange,
  label,
  description,
  disabled,
}: RadioCardProps) {
  return (
    <label
      className={`flex items-center gap-3 p-4 rounded-lg border-2 min-h-[60px] transition-colors ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${
        checked
          ? 'border-us-blue bg-us-light-blue ring-1 ring-us-blue'
          : 'border-gray-200 bg-white hover:border-gray-400'
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="sr-only"
      />
      {/* Custom radio circle indicator */}
      <div
        className={`h-5 w-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
          checked ? 'border-us-blue' : 'border-gray-300'
        }`}
      >
        {checked && (
          <div className="h-2.5 w-2.5 rounded-full bg-us-blue" />
        )}
      </div>
      <div>
        <span className="font-bold text-gray-900">{label}</span>
        {description && (
          <p className="text-sm text-gray-500">{description}</p>
        )}
      </div>
    </label>
  );
}
