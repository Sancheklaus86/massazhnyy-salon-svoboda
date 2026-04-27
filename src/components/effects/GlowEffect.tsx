'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface GlowEffectProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const intensityMap = {
  low: 'hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]',
  medium: 'hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]',
  high: 'hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]',
};

export function GlowEffect({
  children,
  className,
  intensity = 'medium',
}: GlowEffectProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn('transition-shadow duration-300', intensityMap[intensity], className)}
    >
      {children}
    </motion.div>
  );
}
