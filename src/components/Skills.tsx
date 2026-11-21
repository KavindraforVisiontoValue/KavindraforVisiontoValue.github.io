import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import {
  staggerContainerVariants,
  staggerItemVariants,
  VIEWPORT_ONCE,
} from '../utils/motionPresets';

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FAFBFF] via-[#F2EFFF]/45 to-[#FFFFFF] border-t border-[#E1E7F0]/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="CAPABILITIES & TOOLKIT"
          title="The Skills Behind the Work."
          description="Core analytical, product, delivery, and consulting capabilities developed across enterprise software implementations and product environments."
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div key={category.id} variants={staggerItemVariants} className="flex">
              <GlassCard className="p-6 sm:p-7 flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#E1E7F0]">
                    <h3 className="font-display text-lg font-semibold text-[#18243B]">
                      {category.title}
                    </h3>
                    <span className="text-xs font-semibold text-[#315BFF] tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  {category.note ? (
                    <p className="mt-3 text-xs leading-relaxed text-[#66758f]">
                      {category.note}
                    </p>
                  ) : null}

                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {category.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-[13px] sm:text-sm text-[#53627A] leading-snug py-0.5"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
