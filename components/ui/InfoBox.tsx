'use client';

import { ReactNode } from 'react';
import { Info, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface InfoBoxProps {
  variant: 'info' | 'warning' | 'success';
  children: ReactNode;
  className?: string;
}

const variantConfig = {
  info: {
    classes: 'bg-blue-50 border-l-4 border-us-blue text-gray-700',
    Icon: Info,
  },
  warning: {
    classes: 'bg-amber-50 border-l-4 border-amber-400 text-gray-700',
    Icon: AlertTriangle,
  },
  success: {
    classes: 'bg-emerald-50 border-l-4 border-emerald-600 text-gray-700',
    Icon: CheckCircle2,
  },
};

export default function InfoBox({ variant, children, className = '' }: InfoBoxProps) {
  const { classes, Icon } = variantConfig[variant];

  return (
    <div className={`${classes} p-4 rounded-r-lg mb-4 ${className}`.trim()}>
      <div className="flex gap-3">
        <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}
