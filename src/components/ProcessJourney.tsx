import { useState } from 'react';
import { motion } from 'motion/react';
import { WORKING_APPROACH } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import {
  EASE_EDITORIAL,
  SPRING_GENTLE,
  SPRING_SNAPPY,
  VIEWPORT_ONCE,
} from '../utils/motionPresets';

export function ProcessJourney() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = WORKING_APPROACH[activeStep];

  return (
    <section
      id="approach"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FAFBFF] via-[#EEF3FF]/45 to-[#FFFFFF]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="HOW I APPROACH THE WORK"
              title="From the First Conversation to Delivery Clarity."
              description="Effective technology work requires a connected approach that brings together business understanding, analytical thinking, solution definition, stakeholder collaboration, delivery awareness, and validation."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE_EDITORIAL }}
            className="lg:col-span-5"
          >
            <GlassCard hoverLift={false} className="p-5 sm:p-6 bg-white/85">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#315BFF]">
                Stage {current.step} · {current.title}
              </p>
              <p className="mt-2 font-display text-base sm:text-lg font-semibold text-[#18243B]">
                {current.keyQuestion}
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* 6 Connected Glass Panels */}
        <div className="mt-12 relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-11 left-12 right-12 h-[2px] bg-[#E1E7F0]"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 1.0, delay: 0.2, ease: EASE_EDITORIAL }}
              style={{ originX: 0 }}
              className="h-full w-full bg-gradient-to-r from-[#315BFF] via-[#8B9CFF] to-[#315BFF]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
            {WORKING_APPROACH.map((item, idx) => {
              const isSelected = idx === activeStep;
              return (
                <motion.button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_ONCE}
                  transition={{ ...SPRING_GENTLE, delay: idx * 0.06 }}
                  whileHover={{ y: -4, transition: SPRING_SNAPPY }}
                  aria-pressed={isSelected}
                  className={`text-left rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between min-h-[210px] ${
                    isSelected
                      ? 'bg-white border-[#315BFF]/50 shadow-[0_14px_34px_rgba(49,91,255,0.12)]'
                      : 'glass-panel-soft hover:bg-white/90'
                  }`}
                >
                  <div>
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl font-display text-sm font-semibold tabular-nums mb-4 transition-colors ${
                        isSelected
                          ? 'bg-[#315BFF] text-white'
                          : 'bg-[#EEF3FF] text-[#315BFF]'
                      }`}
                    >
                      {item.step}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#18243B]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-[#53627A]">
                      {item.description}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        <p className="mt-6 text-xs text-[#66758f]">
          Summary of professional working approach across business discovery,
          analysis, and delivery coordination.
        </p>
      </div>
    </section>
  );
}
