import { useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface UseScrollAnimationOptions {
  inputRange?: [number, number];
  outputRange?: [number, number];
}

export function useScrollAnimation(options?: UseScrollAnimationOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const { inputRange = [0, 1], outputRange = [0, 1] } = options ?? {};

  const progress: MotionValue<number> = useTransform(
    scrollYProgress,
    inputRange,
    outputRange
  );

  return { ref, scrollYProgress, progress };
}
