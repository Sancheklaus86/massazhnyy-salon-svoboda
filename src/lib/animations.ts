import type { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

export const bounceIn: Variants = {
  initial: { opacity: 0, scale: 0.3 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: '-100%' },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, x: '-100%', transition: { duration: 0.3 } },
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: '100%' },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, x: '100%', transition: { duration: 0.3 } },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const staggerSlow: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const hoverScale = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

export const hoverLift = {
  rest: { y: 0, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
  hover: { y: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)' },
};

export const tapScale = { scale: 0.95 };

export const rotateOnHover = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.5 } },
};
