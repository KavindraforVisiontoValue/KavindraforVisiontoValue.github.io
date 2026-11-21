import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { SPRING_GENTLE } from '../utils/motionPresets';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverLift?: boolean;
  soft?: boolean;
}

export function GlassCard({
  children,
  className = '',
  hoverLift = true,
  soft = false,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hoverLift
          ? {
              y: -4,
              transition: SPRING_GENTLE,
            }
          : undefined
      }
      className={`${soft ? 'glass-panel-soft' : 'glass-panel'} rounded-2xl transition-shadow duration-200 hover:shadow-[0_18px_46px_rgba(49,91,255,0.10)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
