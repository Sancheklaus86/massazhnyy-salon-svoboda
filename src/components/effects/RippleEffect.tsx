'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/cn';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface RippleEffectProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function RippleEffect({ children, className, color = 'rgba(255,255,255,0.3)' }: RippleEffectProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
  }, []);

  return (
    <div onClick={addRipple} className={cn('relative overflow-hidden', className)}>
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              background: color,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: 200, height: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
