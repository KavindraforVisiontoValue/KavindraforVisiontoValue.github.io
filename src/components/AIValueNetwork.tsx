import { useState } from 'react';
import { motion } from 'motion/react';
import { AI_ERA_CAPABILITIES } from '../data/portfolioData';
import { getCapabilityByIndex } from '../utils/portfolioHelpers';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import {
  EASE_EDITORIAL,
  SPRING_GENTLE,
  SPRING_SNAPPY,
  VIEWPORT_ONCE,
} from '../utils/motionPresets';

const SVG_WIDTH = 620;
const SVG_HEIGHT = 460;
const CENTER_X = 310;
const CENTER_Y = 230;
const DESKTOP_RADIUS_X = 188;
const DESKTOP_RADIUS_Y = 158;

export function AIValueNetwork() {
  const [selectedIndex, setSelectedIndex] = useState<string>('01');
  const activeCapability = getCapabilityByIndex(AI_ERA_CAPABILITIES, selectedIndex);

  return (
    <section
      id="ai-value"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FAFBFF] via-[#EEF3FF]/60 to-[#F2EFFF]/55 overflow-hidden border-y border-[#E1E7F0]/80"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 h-[540px] w-[780px] rounded-full bg-[radial-gradient(circle,rgba(49,91,255,0.08)_0%,rgba(139,156,255,0.06)_45%,transparent_72%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="HUMAN SKILLS. TECHNOLOGY-ENABLED FUTURE."
              title="Technology Is Evolving. The Need for Good Judgement Isn't."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.65, delay: 0.14, ease: EASE_EDITORIAL }}
            className="lg:col-span-5 space-y-4 text-[15px] leading-[1.7] text-[#53627A]"
          >
            <p>
              AI is changing how quickly information can be analysed, content
              can be created, and software delivery activities can be supported.
              But speed alone does not establish that a business problem is
              understood, a solution is appropriate, stakeholders are aligned,
              or expectations have been met.
            </p>
            <p>
              My experience is grounded in the capabilities that connect
              technology possibilities with organisational needs: asking the
              right questions, understanding context, evaluating options,
              communicating clearly, and supporting informed decisions.
            </p>
          </motion.div>
        </div>

        {/* Interactive Network Stage + Selected Node Inspector */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Desktop / Tablet Orbital Glass Network */}
          <div className="lg:col-span-7">
            <div className="hidden md:block glass-panel rounded-3xl p-4 sm:p-6 relative">
              <div className="relative mx-auto w-full max-w-[620px] aspect-[620/460]">
                {/* Animated SVG Connecting Spokes */}
                <svg
                  viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
                  className="absolute inset-0 h-full w-full pointer-events-none"
                  aria-hidden="true"
                >
                  <ellipse
                    cx={CENTER_X}
                    cy={CENTER_Y}
                    rx={DESKTOP_RADIUS_X}
                    ry={DESKTOP_RADIUS_Y}
                    fill="none"
                    stroke="#8B9CFF"
                    strokeOpacity="0.24"
                    strokeDasharray="5 7"
                  />
                  {AI_ERA_CAPABILITIES.map((cap) => {
                    const rad = (cap.networkAngleDeg * Math.PI) / 180;
                    const nx = CENTER_X + Math.cos(rad) * DESKTOP_RADIUS_X;
                    const ny = CENTER_Y + Math.sin(rad) * DESKTOP_RADIUS_Y;
                    const isSelected = cap.index === selectedIndex;
                    return (
                      <line
                        key={cap.index}
                        x1={CENTER_X}
                        y1={CENTER_Y}
                        x2={nx}
                        y2={ny}
                        stroke={isSelected ? '#315BFF' : '#8B9CFF'}
                        strokeWidth={isSelected ? 2.5 : 1.35}
                        strokeOpacity={isSelected ? 0.9 : 0.38}
                      />
                    );
                  })}
                </svg>

                {/* Central Hub: BUSINESS VALUE (positioned via wrapper so Motion scale doesn't overwrite translate) */}
                <div
                  style={{
                    left: `${(CENTER_X / SVG_WIDTH) * 100}%`,
                    top: `${(CENTER_Y / SVG_HEIGHT) * 100}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={VIEWPORT_ONCE}
                    transition={SPRING_GENTLE}
                    className="flex h-32 w-32 lg:h-36 lg:w-36 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#315BFF] to-[#5E7BFF] text-white shadow-[0_18px_44px_rgba(49,91,255,0.30)] text-center px-4"
                  >
                    <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/85">
                      Core Focus
                    </span>
                    <span className="mt-1 font-display text-sm font-semibold tracking-wide leading-tight">
                      BUSINESS VALUE
                    </span>
                  </motion.div>
                </div>

                {/* Surrounding 7 Interactive Capability Nodes */}
                {AI_ERA_CAPABILITIES.map((cap, idx) => {
                  const rad = (cap.networkAngleDeg * Math.PI) / 180;
                  const nx = CENTER_X + Math.cos(rad) * DESKTOP_RADIUS_X;
                  const ny = CENTER_Y + Math.sin(rad) * DESKTOP_RADIUS_Y;
                  const isSelected = cap.index === selectedIndex;

                  return (
                    <div
                      key={cap.index}
                      style={{
                        left: `${(nx / SVG_WIDTH) * 100}%`,
                        top: `${(ny / SVG_HEIGHT) * 100}%`,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                      <motion.button
                        type="button"
                        onClick={() => setSelectedIndex(cap.index)}
                        onMouseEnter={() => setSelectedIndex(cap.index)}
                        initial={{ opacity: 0, scale: 0.88 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={VIEWPORT_ONCE}
                        transition={{ ...SPRING_GENTLE, delay: 0.06 + idx * 0.04 }}
                        whileHover={{ scale: 1.05, transition: SPRING_SNAPPY }}
                        aria-pressed={isSelected}
                        className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-150 whitespace-nowrap min-h-[40px] border ${
                          isSelected
                            ? 'bg-[#18243B] text-white border-[#18243B] shadow-[0_12px_28px_rgba(24,36,59,0.22)]'
                            : 'bg-white/95 text-[#18243B] border-[#E1E7F0] shadow-[0_6px_18px_rgba(45,65,125,0.08)] hover:border-[#315BFF]/50'
                        }`}
                      >
                        <span
                          className={`mr-1.5 tabular-nums ${
                            isSelected ? 'text-[#8B9CFF]' : 'text-[#315BFF]'
                          }`}
                        >
                          {cap.index}
                        </span>
                        {cap.networkLabel}
                      </motion.button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Vertically Connected Capability Network */}
            <div className="md:hidden glass-panel rounded-2xl p-5">
              <div className="mb-4 rounded-xl bg-gradient-to-r from-[#315BFF] to-[#5E7BFF] px-4 py-3 text-white text-center">
                <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/85">
                  Central Outcome
                </p>
                <p className="font-display text-base font-semibold">
                  BUSINESS VALUE
                </p>
              </div>
              <div className="relative pl-6 space-y-2.5 border-l border-[#8B9CFF]/50 ml-3">
                {AI_ERA_CAPABILITIES.map((cap) => {
                  const isSelected = cap.index === selectedIndex;
                  return (
                    <button
                      key={cap.index}
                      type="button"
                      onClick={() => setSelectedIndex(cap.index)}
                      aria-pressed={isSelected}
                      className={`w-full text-left rounded-xl px-4 py-3 text-sm font-semibold transition-colors min-h-[44px] border ${
                        isSelected
                          ? 'bg-[#18243B] text-white border-[#18243B]'
                          : 'bg-white/85 text-[#18243B] border-[#E1E7F0]'
                      }`}
                    >
                      <span
                        className={`mr-2 tabular-nums ${
                          isSelected ? 'text-[#8B9CFF]' : 'text-[#315BFF]'
                        }`}
                      >
                        {cap.index}
                      </span>
                      {cap.networkLabel}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Selected Node Detail + Context */}
          <div className="lg:col-span-5 space-y-5">
            <motion.div
              key={activeCapability.index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: EASE_EDITORIAL }}
            >
              <GlassCard hoverLift={false} className="p-6 sm:p-8 bg-white/85">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#315BFF]">
                    Capability {activeCapability.index} · {activeCapability.networkLabel}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-2xl font-semibold text-[#18243B] leading-snug">
                  {activeCapability.title}
                </h3>

                <p className="mt-3 text-[15px] leading-[1.7] text-[#53627A]">
                  {activeCapability.description}
                </p>

                <div className="mt-6 pt-4 border-t border-[#E1E7F0]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#66758f]">
                    Decision Focus
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#18243B]">
                    {activeCapability.focusOutcome}
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            {/* High-level iTechro AI-Assisted Delivery Note */}
            <GlassCard soft hoverLift={false} className="p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#315BFF]">
                Practical Application at iTechro
              </p>
              <p className="mt-2 text-sm leading-[1.65] text-[#53627A]">
                Alongside senior management and technical colleagues at iTechro,
                I contribute to internal AI-assisted delivery process
                improvement—supporting structured discovery worksheets, proposal
                clarity, delivery-agreement consistency, and scope and
                traceability controls.
              </p>
            </GlassCard>
          </div>
        </div>

        {/* Full 7-Capability "Where I Add Value" Grid */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <h3 className="font-display text-2xl font-semibold text-[#18243B]">
              Where I Add Value
            </h3>
            <p className="text-sm text-[#53627A]">
              Select any card or network node above to inspect each capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {AI_ERA_CAPABILITIES.map((cap) => {
              const isSelected = cap.index === selectedIndex;
              return (
                <motion.button
                  key={cap.index}
                  type="button"
                  onClick={() => setSelectedIndex(cap.index)}
                  whileHover={{ y: -3, transition: SPRING_SNAPPY }}
                  className={`text-left rounded-2xl p-5 transition-all duration-200 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#315BFF]/50 shadow-[0_14px_34px_rgba(49,91,255,0.10)]'
                      : 'glass-panel-soft hover:bg-white/90'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-xs font-semibold text-[#315BFF] tabular-nums">
                        {cap.index}
                      </span>
                      <span className="text-xs font-medium text-[#66758f]">
                        {cap.networkLabel}
                      </span>
                    </div>
                    <h4 className="font-display text-base font-semibold text-[#18243B] leading-snug">
                      {cap.title}
                    </h4>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#53627A]">
                      {cap.description}
                    </p>
                  </div>
                </motion.button>
              );
            })}

            {/* Closing Statement Card filling the 8th slot in the 4x2 grid */}
            <div className="rounded-2xl p-5 bg-gradient-to-br from-[#EEF3FF] via-white to-[#F2EFFF] border border-[#E1E7F0] flex flex-col justify-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#315BFF] mb-2">
                Core Principle
              </p>
              <p className="font-display text-base font-semibold text-[#18243B] leading-relaxed">
                AI can accelerate the work. Understanding what matters, aligning
                people, and making sound decisions remain central to delivering
                business value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
