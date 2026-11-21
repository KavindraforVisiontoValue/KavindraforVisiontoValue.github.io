import { motion } from 'motion/react';
import { Award, GraduationCap } from 'lucide-react';
import { EDUCATION_ITEMS } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import {
  staggerContainerVariants,
  staggerItemVariants,
  VIEWPORT_ONCE,
} from '../utils/motionPresets';

export function Education() {
  return (
    <section
      id="education"
      className="relative py-20 sm:py-28 bg-[#FFFFFF]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="ACADEMIC & PROFESSIONAL FOUNDATION"
          title="A Foundation in Technology and Business."
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {EDUCATION_ITEMS.map((item) => (
            <motion.div key={item.id} variants={staggerItemVariants} className="flex">
              <GlassCard
                className={`p-6 sm:p-8 flex flex-col justify-between w-full ${
                  item.distinction
                    ? 'bg-gradient-to-br from-[#EEF3FF]/85 via-white to-[#F2EFFF]/75 border-[#315BFF]/25'
                    : ''
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF3FF] text-[#315BFF] shrink-0">
                      {item.distinction ? (
                        <Award className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <GraduationCap className="h-5 w-5" aria-hidden="true" />
                      )}
                    </div>

                    {item.distinction ? (
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#315BFF]">
                        {item.distinction}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-[#18243B] leading-snug">
                    {item.qualification}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#53627A]">
                    {item.institution}
                  </p>
                </div>

                {item.verificationNote ? (
                  <p className="mt-4 pt-3 border-t border-[#E1E7F0] text-xs text-[#66758f]">
                    {item.verificationNote}
                  </p>
                ) : null}
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
