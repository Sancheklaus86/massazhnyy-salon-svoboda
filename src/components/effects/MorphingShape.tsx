'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface MorphingShapeProps {
  className?: string;
  color?: string;
}

export function MorphingShape({ className, color = '#6366F1' }: MorphingShapeProps) {
  return (
    <motion.div
      className={cn('absolute rounded-full blur-xl opacity-30 pointer-events-none', className)}
      style={{ background: color }}
      animate={{
        borderRadius: [
          '60% 40% 30% 70% / 60% 30% 70% 40%',
          '30% 60% 70% 40% / 50% 60% 30% 60%',
          '40% 60% 40% 70% / 40% 50% 60% 50%',
          '60% 40% 30% 70% / 60% 30% 70% 40%',
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
