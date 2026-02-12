'use client';

import { ReactNode, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ShowMoreToggleProps {
  label: string;
  expandedLabel?: string;
  children: ReactNode;
  defaultExpanded?: boolean;
}

export default function ShowMoreToggle({
  label,
  expandedLabel,
  children,
  defaultExpanded = false,
}: ShowMoreToggleProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="text-us-blue text-sm font-medium hover:underline flex items-center gap-1"
      >
        {isExpanded ? (expandedLabel ?? 'Show less') : label}
        {isExpanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[2000px]' : 'max-h-0 overflow-hidden'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
