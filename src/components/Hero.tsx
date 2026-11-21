import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight, ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { useRef } from 'react';
import {
  HERO_FLOATING_DISCIPLINES,
  PROFILE_IDENTITY,
} from '../data/portfolioData';
import { AnimatedText } from './AnimatedText';
import { ResilientImage } from './ResilientImage';
import { EASE_EDITORIAL, SPRING_GENTLE, SPRING_SNAPPY } from '../utils/motionPresets';

const FLOATING_POSITIONS = [
  { top: '6%', left: '-8%', delay: 0.35 },
  { top: '16%', right: '-8%', delay: 0.43 },
  { top: '40%', left: '-12%', delay: 0.51 },
  { top: '52%', right: '-10%', delay: 0.59 },
  { bottom: '24%', left: '-8%', delay: 0.67 },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 28]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#F4F7FF] via-[#FAFBFF] to-[#FFFFFF]"
    >
      {/* Ambient soft light gradients */}
      <motion.div
        style={{ y: orbY }}
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-24 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(49,91,255,0.12)_0%,rgba(238,243,255,0)_70%)] blur-2xl"
      />
      <motion.div
        style={{ y: orbY }}
        aria-hidden="true"
        className="pointer-events-none absolute top-16 -right-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(139,156,255,0.18)_0%,rgba(242,239,255,0)_70%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typography & Identity */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
              className="text-xs sm:text-[13px] font-semibold tracking-[0.16em] uppercase text-[#315BFF] mb-4"
            >
              BUSINESS × TECHNOLOGY × DELIVERY
            </motion.p>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.65rem] font-semibold tracking-tight text-[#18243B] leading-[1.08] text-balance">
              <AnimatedText
                immediate
                lines={[
                  'Turning Business Complexity',
                  'into Technology Clarity.',
                ]}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE_EDITORIAL }}
              className="mt-5 sm:mt-6 text-base sm:text-lg font-medium text-[#18243B] leading-[1.6] max-w-2xl"
            >
              {PROFILE_IDENTITY.positioning}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34, ease: EASE_EDITORIAL }}
              className="mt-4 text-[15px] sm:text-base text-[#53627A] leading-[1.7] max-w-xl"
            >
              I&apos;m Kavindra Jayamal Diyagaha, a Senior Business Analyst with
              experience spanning business analysis, product ownership, project
              delivery, and solution consulting. I work at the intersection of
              business needs, stakeholder expectations, product decisions, and
              technology delivery—helping translate complex challenges into
              structured requirements, practical solutions, and coordinated
              execution.
            </motion.p>

            {/* Clean unboxed position & location metadata */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42, ease: EASE_EDITORIAL }}
              className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#53627A] border-t border-[#E1E7F0] pt-5 w-full max-w-xl"
            >
              <span className="inline-flex items-center gap-2 font-medium text-[#18243B]">
                <Briefcase className="h-4 w-4 text-[#315BFF]" aria-hidden="true" />
                {PROFILE_IDENTITY.currentRole} at {PROFILE_IDENTITY.currentOrganisation}
              </span>
              <span aria-hidden="true" className="hidden sm:inline text-[#8B9CFF]">
                ·
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[#315BFF]" aria-hidden="true" />
                {PROFILE_IDENTITY.location}
              </span>
            </motion.div>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5, ease: EASE_EDITORIAL }}
              className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={SPRING_SNAPPY}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#315BFF] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(49,91,255,0.28)] hover:bg-[#244CE0] transition-colors min-h-[46px]"
              >
                <span>Explore My Work</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={SPRING_SNAPPY}
                className="group inline-flex items-center gap-2 rounded-xl glass-panel px-6 py-3.5 text-sm font-semibold text-[#18243B] hover:border-[#315BFF]/40 transition-colors min-h-[46px]"
              >
                <span>Get to Know Me</span>
                <ArrowDownRight
                  className="h-4 w-4 text-[#315BFF] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Main Formal Headshot Composition (Prominent first on mobile too) */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <motion.div
              style={{ y: portraitY }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.18, ease: EASE_EDITORIAL }}
              className="relative w-full max-w-[320px] sm:max-w-[390px] lg:max-w-[430px]"
            >
              {/* Geometric architectural ring behind portrait */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 sm:-inset-4 rounded-[2rem] bg-gradient-to-tr from-[#EEF3FF] via-white/40 to-[#F2EFFF] border border-white/90 shadow-[0_24px_60px_rgba(49,91,255,0.10)]"
              />

              {/* Subtle animated geometric lines */}
              <svg
                aria-hidden="true"
                className="hidden sm:block absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] pointer-events-none opacity-65"
                viewBox="0 0 460 520"
                fill="none"
              >
                <rect
                  x="14"
                  y="14"
                  width="432"
                  height="492"
                  rx="36"
                  stroke="url(#heroRingGrad)"
                  strokeWidth="1"
                  strokeDasharray="6 8"
                />
                <defs>
                  <linearGradient id="heroRingGrad" x1="0" y1="0" x2="460" y2="520">
                    <stop stopColor="#315BFF" stopOpacity="0.35" />
                    <stop offset="0.5" stopColor="#8B9CFF" stopOpacity="0.2" />
                    <stop offset="1" stopColor="#315BFF" stopOpacity="0.35" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Main Glass Portrait Frame */}
              <div className="relative overflow-hidden rounded-[1.75rem] glass-panel bg-gradient-to-b from-[#EEF3FF]/85 via-[#F7F9FF]/90 to-[#E9EEFF]/85 pt-5 px-4 pb-0">
                <div className="relative aspect-[4/4.2] w-full flex items-end justify-center overflow-hidden rounded-t-[1.25rem]">
                  <ResilientImage
                    src={PROFILE_IDENTITY.heroPortrait}
                    alt="Kavindra Jayamal Diyagaha — Formal professional portrait in dark grey suit and tie"
                    loading="eager"
                    fetchPriority="high"
                    className="h-full w-full object-contain object-bottom drop-shadow-[0_12px_28px_rgba(24,36,59,0.12)]"
                    fallbackTitle="Kavindra Jayamal Diyagaha"
                  />
                </div>

                {/* Bottom frosted caption bar inside portrait card */}
                <div className="relative z-10 -mx-4 mt-0 border-t border-white/80 bg-white/85 backdrop-blur-md px-5 py-3.5 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-sm font-semibold text-[#18243B]">
                      {PROFILE_IDENTITY.name}
                    </p>
                    <p className="text-xs text-[#53627A]">
                      {PROFILE_IDENTITY.currentRole} · {PROFILE_IDENTITY.currentOrganisation}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#315BFF] tabular-nums whitespace-nowrap">
                    {PROFILE_IDENTITY.location}
                  </span>
                </div>
              </div>

              {/* Floating Frosted-Glass Discipline Labels (Desktop md+) */}
              <div className="hidden md:block">
                {HERO_FLOATING_DISCIPLINES.map((label, idx) => {
                  const pos = FLOATING_POSITIONS[idx];
                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, scale: 0.88, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        ...SPRING_GENTLE,
                        delay: pos.delay,
                      }}
                      whileHover={{ y: -3, scale: 1.03, transition: SPRING_SNAPPY }}
                      style={{
                        top: pos.top,
                        left: pos.left,
                        right: pos.right,
                        bottom: pos.bottom,
                      }}
                      className="absolute z-20 glass-panel rounded-xl px-3.5 py-2 text-xs font-semibold text-[#18243B] shadow-[0_10px_28px_rgba(45,65,125,0.10)] whitespace-nowrap animate-float-slow"
                    >
                      {label}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Full-width Discipline Strip below Hero Split */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.56, ease: EASE_EDITORIAL }}
          className="mt-12 lg:mt-14 glass-panel-soft rounded-2xl px-5 py-4 sm:px-8 sm:py-5"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center">
            {HERO_FLOATING_DISCIPLINES.map((discipline, idx) => (
              <div
                key={discipline}
                className={`flex items-baseline gap-2.5 ${
                  idx === 4 ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <span className="text-xs font-semibold text-[#315BFF] tabular-nums">
                  0{idx + 1}
                </span>
                <span className="text-sm font-medium text-[#18243B]">
                  {discipline}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
