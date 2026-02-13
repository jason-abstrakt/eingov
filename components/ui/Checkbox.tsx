'use client';

import { ReactNode, ChangeEvent } from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  label: ReactNode;
  name?: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  description?: string;
  error?: string;
}

export default function Checkbox({
  label,
  name,
  checked,
  onChange,
  description,
  error,
}: CheckboxProps) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <div className="relative flex-shrink-0 mt-0.5">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`h-5 w-5 rounded border-2 flex items-center justify-center transition-colors ${
            checked
              ? 'bg-us-blue border-us-blue'
              : 'bg-white border-gray-300 hover:border-gray-400'
          }`}
        >
          {checked && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
        </div>
      </div>
      <div>
        <div className="text-sm font-medium text-gray-900">{label}</div>
        {description && (
          <p className="text-sm text-gray-500 mt-0.5">{description}</p>
        )}
        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
      </div>
    </label>
  );
}
