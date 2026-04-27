'use client';

import { motion } from 'framer-motion';

const elements = [
  { x: '10%', y: '20%', size: 40, delay: 0, duration: 6 },
  { x: '80%', y: '15%', size: 24, delay: 1, duration: 7 },
  { x: '60%', y: '70%', size: 32, delay: 2, duration: 8 },
  { x: '25%', y: '80%', size: 20, delay: 0.5, duration: 5 },
  { x: '90%', y: '50%', size: 28, delay: 1.5, duration: 9 },
  { x: '5%', y: '60%', size: 36, delay: 3, duration: 6.5 },
];

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 backdrop-blur-sm border border-white/10"
          style={{
            left: el.x,
            top: el.y,
            width: el.size,
            height: el.size,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
