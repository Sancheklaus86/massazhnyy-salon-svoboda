'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface AnimatedTextProps {
  text: string;
  className?: string;
  gradient?: boolean;
  stagger?: number;
  as?: keyof JSX.IntrinsicElements;
}

export function AnimatedText({
  text,
  className,
  gradient = false,
  stagger = 0.05,
  as: Tag = 'span',
}: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <Tag className={cn('inline-flex flex-wrap gap-x-2', className)}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * stagger, ease: 'easeOut' }}
          className={cn(gradient && 'text-gradient')}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
