import { motion } from 'motion/react';
import { EASE_EDITORIAL, VIEWPORT_ONCE } from '../utils/motionPresets';

interface AnimatedTextProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  immediate?: boolean;
  delayStart?: number;
}

export function AnimatedText({
  lines,
  className = '',
  lineClassName = '',
  immediate = false,
  delayStart = 0.08,
}: AnimatedTextProps) {
  return (
    <span className={`block ${className}`}>
      {lines.map((line, idx) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            initial={{ opacity: 0, y: '100%' }}
            animate={immediate ? { opacity: 1, y: 0 } : undefined}
            whileInView={!immediate ? { opacity: 1, y: 0 } : undefined}
            viewport={!immediate ? VIEWPORT_ONCE : undefined}
            transition={{
              duration: 0.65,
              delay: delayStart + idx * 0.09,
              ease: EASE_EDITORIAL,
            }}
            className={`block ${lineClassName}`}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
