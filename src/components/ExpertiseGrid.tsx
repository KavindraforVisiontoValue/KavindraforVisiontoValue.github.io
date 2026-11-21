import { motion } from 'motion/react';
import { CORE_EXPERTISE, type ExpertiseItem } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import {
  staggerContainerVariants,
  staggerItemVariants,
  VIEWPORT_ONCE,
} from '../utils/motionPresets';

function ExpertiseMotif({ motif }: { motif: ExpertiseItem['motif'] }) {
  switch (motif) {
    case 'requirements':
      return (
        <svg viewBox="0 0 80 44" className="h-9 w-16 text-[#315BFF]" fill="none" aria-hidden="true">
          <rect x="4" y="6" width="22" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.45" />
          <rect x="4" y="26" width="22" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.45" />
          <rect x="46" y="14" width="30" height="16" rx="4" fill="#EEF3FF" stroke="currentColor" strokeWidth="1.5" />
          <path d="M26 12H36V22H46M26 32H36V22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.65" />
        </svg>
      );
    case 'product':
      return (
        <svg viewBox="0 0 80 44" className="h-9 w-16 text-[#315BFF]" fill="none" aria-hidden="true">
          <rect x="6" y="8" width="68" height="6" rx="3" fill="#EEF3FF" stroke="currentColor" strokeWidth="1.3" />
          <rect x="6" y="19" width="48" height="6" rx="3" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.55" />
          <rect x="6" y="30" width="32" height="6" rx="3" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.35" />
        </svg>
      );
    case 'delivery':
      return (
        <svg viewBox="0 0 80 44" className="h-9 w-16 text-[#315BFF]" fill="none" aria-hidden="true">
          <circle cx="14" cy="22" r="6" fill="#EEF3FF" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="40" cy="22" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="66" cy="22" r="6" fill="#EEF3FF" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 22H34M46 22H60" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      );
    case 'presales':
      return (
        <svg viewBox="0 0 80 44" className="h-9 w-16 text-[#315BFF]" fill="none" aria-hidden="true">
          <rect x="10" y="6" width="60" height="32" rx="6" fill="#EEF3FF" stroke="currentColor" strokeWidth="1.4" />
          <path d="M22 28L34 18L44 24L58 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'process':
      return (
        <svg viewBox="0 0 80 44" className="h-9 w-16 text-[#315BFF]" fill="none" aria-hidden="true">
          <path d="M10 14H34L44 30H70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 30H28" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />
          <circle cx="39" cy="22" r="5" fill="#EEF3FF" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'stakeholders':
      return (
        <svg viewBox="0 0 80 44" className="h-9 w-16 text-[#315BFF]" fill="none" aria-hidden="true">
          <circle cx="28" cy="22" r="12" fill="#EEF3FF" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="52" cy="22" r="12" fill="#F2EFFF" fillOpacity="0.85" stroke="currentColor" strokeWidth="1.4" strokeOpacity="0.65" />
        </svg>
      );
  }
}

export function ExpertiseGrid() {
  return (
    <section
      id="expertise"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FFFFFF] via-[#F5F7FF] to-[#FAFBFF]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="WHAT I BRING TO THE TABLE"
          title="Different Disciplines. One Connected Perspective."
          description="My experience combines business understanding, product thinking, delivery awareness, and client-facing solution communication. Rather than treating these as separate functions, I approach them as connected capabilities that contribute to effective technology delivery."
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CORE_EXPERTISE.map((item) => (
            <motion.div key={item.index} variants={staggerItemVariants} className="flex">
              <GlassCard className="p-6 sm:p-7 flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span className="font-display text-sm font-semibold text-[#315BFF] tabular-nums">
                      {item.index}
                    </span>
                    <ExpertiseMotif motif={item.motif} />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-[#18243B] leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-[1.7] text-[#53627A]">
                    {item.description}
                  </p>
                </div>

                {/* Clean unboxed typographic capability metadata */}
                <div className="mt-6 pt-4 border-t border-[#E1E7F0]/90">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#66758f] mb-2">
                    Core Capabilities
                  </p>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#18243B] font-medium">
                    {item.capabilities.join(' · ')}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
