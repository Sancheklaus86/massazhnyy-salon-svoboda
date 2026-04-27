'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ className, children, hover = true, onClick }: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -2 } : undefined}
      className={cn(
        'bg-dark-tertiary rounded-2xl p-6',
        'border border-white/5',
        hover && 'hover:border-white/10 hover:shadow-xl transition-all duration-200',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
