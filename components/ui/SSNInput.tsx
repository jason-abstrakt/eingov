'use client';

import { ChangeEvent, FocusEvent, useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { formatSSN } from '@/lib/utils';
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
  // We use a local mask that matches the formatted length
  const MASK = 'XXX-XX-XXXX';
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatSSN(e.target.value);
    
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

  // Calculate remaining digits for helper text
  const digitsOnly = value.replace(/\D/g, '');
  const remaining = 9 - digitsOnly.length;
  const isComplete = digitsOnly.length === 9;

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
      
      <div className="relative group">
        {/* Ghost Mask Overlay */}
        <div 
          className="absolute inset-0 px-3 py-2.5 font-mono text-base pointer-events-none z-0 flex items-center overflow-hidden whitespace-nowrap"
          aria-hidden="true"
        >
          {/* 
            Invisible text to push the mask to the right. 
            We use opacity-0 to hide it but keep its width.
            For password fields, this is tricky because characters are dots.
            But since we are using font-mono, characters might align with dots if the browser uses standard bullets.
            If not, this might look slightly off in password mode, but it's a good attempt.
          */}
          <span className="opacity-0 text-transparent select-none">
            {value}
          </span>
          <span className="text-gray-300 select-none">
            {MASK.slice(value.length)}
          </span>
        </div>

        <input
          type={visible ? "text" : "password"}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder="" 
          maxLength={11}
          autoComplete="off"
          className={`w-full rounded-md border px-3 py-2.5 text-base font-mono bg-transparent relative z-10 transition-colors ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
              : 'border-gray-300 focus:border-us-blue focus:ring-2 focus:ring-us-blue/20'
          } outline-none shadow-sm`}
        />
      </div>

      <div className="flex justify-between items-start mt-1">
        <FieldError message={error} className="mt-0" />
        
        {!error && !isComplete && (
           <p className="text-xs text-gray-400">
             {remaining} digit{remaining !== 1 ? 's' : ''} remaining
           </p>
        )}
      </div>
    </div>
  );
}
