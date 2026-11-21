import type { Transition, Variants } from 'motion/react';

export const SPRING_GENTLE: Transition = {
  type: 'spring',
  stiffness: 220,
  damping: 26,
  mass: 0.9,
};

export const SPRING_SNAPPY: Transition = {
  type: 'spring',
  stiffness: 340,
  damping: 28,
};

export const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

export const VIEWPORT_ONCE = {
  once: true,
  amount: 0.16,
} as const;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_EDITORIAL,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 240,
      damping: 26,
    },
  },
};

export const imageMaskRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: EASE_EDITORIAL,
    },
  },
};
