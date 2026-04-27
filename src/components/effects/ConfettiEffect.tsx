'use client';

import { useCallback } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiEffectProps {
  children: (trigger: () => void) => React.ReactNode;
}

export function ConfettiEffect({ children }: ConfettiEffectProps) {
  const trigger = useCallback(() => {
    void confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#6366F1', '#8B5CF6', '#EC4899', '#06B6D4', '#10B981'],
    });
  }, []);

  return <>{children(trigger)}</>;
}
