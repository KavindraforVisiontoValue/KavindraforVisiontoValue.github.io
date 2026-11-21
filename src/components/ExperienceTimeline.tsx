import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { EXPERIENCE_ROLES } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import { SPRING_GENTLE, VIEWPORT_ONCE } from '../utils/motionPresets';

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 75%'],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 bg-[#FAFBFF] overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="EXPERIENCE & EVOLUTION"
          title="From Understanding Requirements to Shaping Technology Delivery."
          description="My career has taken me through roles spanning enterprise software, digital products, client implementations, and technology delivery. Each stage has added a different perspective to how I approach business challenges and practical solutions."
        />

        <div ref={containerRef} className="mt-14 relative">
          {/* Background vertical track */}
          <div
            aria-hidden="true"
            className="absolute left-4 sm:left-6 top-2 bottom-2 w-[2px] bg-[#E1E7F0]"
          />
          {/* Scroll-driven animated progress line */}
          <motion.div
            aria-hidden="true"
            style={{ scaleY: lineScaleY, originY: 0 }}
            className="absolute left-4 sm:left-6 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#315BFF] via-[#8B9CFF] to-[#315BFF]"
          />

          <div className="space-y-6 sm:space-y-8">
            {EXPERIENCE_ROLES.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{ ...SPRING_GENTLE, delay: Math.min(idx * 0.06, 0.28) }}
                className="relative pl-11 sm:pl-16"
              >
                {/* Milestone node marker */}
                <div
                  aria-hidden="true"
                  className={`absolute left-[10px] sm:left-[18px] top-7 h-3.5 w-3.5 rounded-full border-2 ${
                    item.isCurrent
                      ? 'bg-[#315BFF] border-white shadow-[0_0_0_4px_rgba(49,91,255,0.18)]'
                      : 'bg-white border-[#315BFF]'
                  }`}
                />

                <GlassCard className="p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 pb-4 border-b border-[#E1E7F0]/90">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#315BFF]">
                        {item.organisation}
                      </p>
                      <h3 className="mt-1 font-display text-xl sm:text-2xl font-semibold text-[#18243B]">
                        {item.role}
                      </h3>
                    </div>

                    <p className="text-sm font-semibold text-[#53627A] tabular-nums whitespace-nowrap">
                      {item.period}
                    </p>
                  </div>

                  <p className="mt-4 text-[15px] leading-[1.7] text-[#53627A]">
                    {item.summary}
                  </p>

                  {item.secondaryNote ? (
                    <p className="mt-3 text-sm leading-[1.65] text-[#18243B] font-medium">
                      {item.secondaryNote}
                    </p>
                  ) : null}
                </GlassCard>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
