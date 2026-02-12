'use client';

import { AlertCircle } from 'lucide-react';

interface FieldErrorProps {
  message?: string;
}

export default function FieldError({ message }: FieldErrorProps) {
  if (!message) return null;

  return (
    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
      <AlertCircle className="h-4 w-4 flex-shrink-0" />
      {message}
    </p>
  );
}
