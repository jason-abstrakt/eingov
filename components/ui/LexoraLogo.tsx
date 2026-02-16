'use client';

import Link from 'next/link';

type LexoraLogoProps = {
  href?: string;
  /** Light text for dark headers (e.g. navy) */
  variant?: 'default' | 'light';
  className?: string;
  /** Compact for smaller headers */
  size?: 'default' | 'compact';
  /** Tagline below "Lexora"; default: "Online e-Tax Filing" */
  tagline?: string;
};

export default function LexoraLogo({
  href = '/',
  variant = 'default',
  className = '',
  size = 'default',
  tagline = 'Online e-Tax Filing',
}: LexoraLogoProps) {
  const isLight = variant === 'light';
  const isCompact = size === 'compact';

  const textBase = isLight ? 'text-white' : 'text-gray-900';
  const taglineColor = isLight ? 'text-white/90' : 'text-gray-600';
  const footnoteColor = isLight ? 'text-white/80' : 'text-gray-500';

  const content = (
    <div className={`flex flex-col leading-tight ${className}`}>
      <span
        className={`font-sans font-bold tracking-tight ${textBase} ${
          isCompact ? 'text-xl' : 'text-2xl sm:text-3xl'
        }`}
      >
        Lexora
      </span>
      <span
        className={`font-medium ${taglineColor} ${
          isCompact ? 'text-[10px] mt-0.5' : 'text-xs sm:text-sm mt-1'
        } tracking-wide`}
      >
        {tagline}
      </span>
      <span
        className={`font-cursive ${footnoteColor} ${isCompact ? 'text-[10px] mt-0.5' : 'text-xs mt-0.5'}`}
      >
        By EIN Gov
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 rounded">
        {content}
      </Link>
    );
  }

  return content;
}
