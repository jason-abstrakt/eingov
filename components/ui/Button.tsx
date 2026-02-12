'use client';

import { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  disabled,
  type = 'button',
  className = '',
  fullWidth,
}: ButtonProps) {
  const baseClasses =
    'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-us-blue/30';

  const variantClasses = {
    primary: 'bg-us-blue text-white hover:bg-us-dark-blue py-3 px-6 text-base',
    secondary:
      'bg-white text-us-blue border-2 border-us-blue hover:bg-us-light-blue py-3 px-6 text-base',
    ghost: 'text-us-blue hover:underline hover:bg-us-light-blue/50 px-2',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const widthClasses = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${widthClasses} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
