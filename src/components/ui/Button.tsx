'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/cn';
import type { ButtonVariant, ButtonSize } from '@/types/components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-glow hover:shadow-glow-lg',
  secondary: 'bg-dark-tertiary text-white border border-white/10 hover:border-white/20',
  outline:
    'bg-transparent border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white',
  ghost: 'bg-transparent text-text-secondary hover:text-white hover:bg-white/5',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled ?? isLoading}
        whileHover={{ scale: disabled ?? isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled ?? isLoading ? 1 : 0.98 }}
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
