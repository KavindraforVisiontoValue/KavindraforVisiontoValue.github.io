import { motion } from 'motion/react';
import { EASE_EDITORIAL, VIEWPORT_ONCE } from '../utils/motionPresets';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.65, ease: EASE_EDITORIAL }}
      className={`${isCentered ? 'mx-auto text-center max-w-3xl' : 'max-w-3xl'} ${className}`}
    >
      <div
        className={`inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.14em] uppercase text-[#315BFF] mb-3 ${
          isCentered ? 'justify-center' : ''
        }`}
      >
        <span>{eyebrow}</span>
      </div>

      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-[#18243B] leading-[1.14] text-balance">
        {title}
      </h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.7, delay: 0.12, ease: EASE_EDITORIAL }}
        style={{ originX: isCentered ? 0.5 : 0 }}
        className={`mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#315BFF] to-[#8B9CFF] ${
          isCentered ? 'mx-auto' : ''
        }`}
      />

      {description ? (
        <p className="mt-5 text-[15px] sm:text-base leading-[1.7] text-[#53627A]">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
