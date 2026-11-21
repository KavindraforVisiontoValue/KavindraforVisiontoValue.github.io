import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { VALUE_FLOW_NODES } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import {
  EASE_EDITORIAL,
  SPRING_GENTLE,
  SPRING_SNAPPY,
  VIEWPORT_ONCE,
} from '../utils/motionPresets';

export function ValueFlowSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      aria-labelledby="value-flow-heading"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FFFFFF] via-[#F7F9FF] to-[#FAFBFF] border-y border-[#E1E7F0]/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="CONNECTING BUSINESS & TECHNOLOGY"
              title="Great Technology Solutions Start with Understanding the Right Problem."
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE_EDITORIAL }}
            className="lg:col-span-5 space-y-4 text-[15px] leading-[1.7] text-[#53627A]"
          >
            <p>
              Technology delivers meaningful value when business needs are
              understood, people are aligned, and solutions are shaped around
              clear objectives.
            </p>
            <p>
              Throughout my career, I&apos;ve worked across different stages of
              that journey—from discovering requirements and analysing processes
              to supporting product decisions, defining solutions, coordinating
              delivery, and validating outcomes.
            </p>
            <p className="font-medium text-[#18243B]">
              Understand the context, create clarity, communicate effectively,
              and keep business objectives connected to delivery.
            </p>
          </motion.div>
        </div>

        {/* Signature Animated Business-to-Technology Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_EDITORIAL }}
          className="mt-14 glass-panel rounded-3xl p-5 sm:p-8 lg:p-10 relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#EEF3FF]/60 via-transparent to-[#F2EFFF]/60"
          />

          {/* Progress Line (Desktop) */}
          <div className="relative hidden lg:block mb-6 px-12">
            <div className="h-[2px] w-full bg-[#E1E7F0] rounded-full overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={VIEWPORT_ONCE}
                transition={{ duration: 1.1, delay: 0.2, ease: EASE_EDITORIAL }}
                style={{ originX: 0 }}
                className="h-full w-full bg-gradient-to-r from-[#315BFF] via-[#8B9CFF] to-[#315BFF]"
              />
            </div>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {VALUE_FLOW_NODES.map((node, idx) => {
              const isActive = activeIndex === idx;
              return (
                <motion.button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_ONCE}
                  transition={{ ...SPRING_GENTLE, delay: 0.12 + idx * 0.08 }}
                  whileHover={{ y: -4, transition: SPRING_SNAPPY }}
                  aria-pressed={isActive}
                  className={`group text-left rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between min-h-[176px] border ${
                    isActive
                      ? 'bg-white border-[#315BFF]/45 shadow-[0_14px_34px_rgba(49,91,255,0.12)]'
                      : 'bg-white/65 border-[#E1E7F0] hover:bg-white/95'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`text-xs font-semibold tabular-nums ${
                          isActive ? 'text-[#315BFF]' : 'text-[#66758f]'
                        }`}
                      >
                        {node.step}
                      </span>
                      {idx < VALUE_FLOW_NODES.length - 1 ? (
                        <ArrowRight
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isActive
                              ? 'text-[#315BFF] translate-x-0.5'
                              : 'text-[#8B9CFF]'
                          }`}
                          aria-hidden="true"
                        />
                      ) : null}
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-semibold text-[#18243B] leading-snug">
                      {node.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-[#53627A]">
                    {node.summary}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
