'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface InteractiveButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'glow' | 'neon' | 'ripple';
}

export function InteractiveButton({
  children,
  className,
  onClick,
  variant = 'glow',
}: InteractiveButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'relative px-6 py-3 rounded-xl font-semibold overflow-hidden',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary',
        variant === 'glow' && [
          'bg-accent-primary text-white',
          'shadow-glow hover:shadow-glow-lg transition-shadow',
        ],
        variant === 'neon' && [
          'border-2 border-accent-primary text-accent-primary',
          'hover:bg-accent-primary hover:text-white transition-colors',
          'neon-text',
        ],
        variant === 'ripple' && [
          'bg-gradient-to-r from-accent-primary to-accent-secondary text-white',
        ],
        className
      )}
    >
      {children}
    </motion.button>
  );
}
