'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export function GlassCard({ className, children, hover = true, glow = false, onClick }: GlassCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={cn(
        'bg-glass rounded-2xl p-6',
        'border border-white/10',
        'transition-shadow duration-300',
        hover && 'hover:shadow-xl hover:border-white/20 cursor-default',
        glow && 'shadow-glow',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
