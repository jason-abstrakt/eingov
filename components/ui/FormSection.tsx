'use client';

import { ReactNode } from 'react';

interface FormSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function FormSection({
  title,
  description,
  children,
  className = '',
}: FormSectionProps) {
  return (
    <section
      className={`bg-white border border-gray-200 rounded-xl p-6 md:p-8 mb-6 shadow-sm ${className}`.trim()}
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-1">{title}</h2>
      {description && (
        <p className="text-sm text-gray-500 mb-6">{description}</p>
      )}
      {!description && <div className="mb-6" />}
      {children}
    </section>
  );
}
