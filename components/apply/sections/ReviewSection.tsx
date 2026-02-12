'use client';

import { ReactNode } from 'react';
import Button from '@/components/ui/Button';
import { Pencil } from 'lucide-react';

interface ReviewSectionProps {
  title: string;
  onEdit: () => void;
  children: ReactNode;
}

interface ReviewRowProps {
  label: string;
  value: string | ReactNode;
}

export function ReviewRow({ label, value }: ReviewRowProps) {
  if (!value || value === '—' || value === '') return null;

  return (
    <div className="flex justify-between py-2 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-900 text-right max-w-[60%]">{value}</span>
    </div>
  );
}

export default function ReviewSection({ title, onEdit, children }: ReviewSectionProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <Button variant="ghost" onClick={onEdit} className="text-sm">
          <span className="flex items-center gap-1">
            <Pencil className="h-3.5 w-3.5" />
            Edit
          </span>
        </Button>
      </div>
      <div>{children}</div>
    </div>
  );
}
