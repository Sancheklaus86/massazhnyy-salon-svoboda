'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface GradientBlobProps {
  className?: string;
  color?: 'indigo' | 'purple' | 'pink' | 'blue';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

const colorClasses = {
  indigo: 'bg-indigo-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
  blue: 'bg-blue-500',
};

const sizeClasses = {
  sm: 'w-48 h-48',
  md: 'w-72 h-72',
  lg: 'w-96 h-96',
  xl: 'w-[600px] h-[600px]',
};

export function GradientBlob({
  className,
  color = 'indigo',
  size = 'lg',
  animate = true,
}: GradientBlobProps) {
  return (
    <motion.div
      className={cn(
        'rounded-full blur-3xl opacity-20 pointer-events-none',
        colorClasses[color],
        sizeClasses[size],
        className
      )}
      animate={
        animate
          ? {
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15],
            }
          : undefined
      }
      transition={
        animate
          ? {
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }
          : undefined
      }
    />
  );
}
