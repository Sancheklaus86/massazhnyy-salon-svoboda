'use client';

import { useScroll, motion } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
