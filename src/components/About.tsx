import { motion } from 'motion/react';
import { PROFILE_IDENTITY } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { ResilientImage } from './ResilientImage';
import { GlassCard } from './GlassCard';
import {
  EASE_EDITORIAL,
  imageMaskRevealVariants,
  VIEWPORT_ONCE,
} from '../utils/motionPresets';

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-[#FAFBFF] overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Left Column: Full-length Professional Portrait Composition */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              variants={imageMaskRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="relative flex-1 min-h-[440px] sm:min-h-[540px] rounded-3xl glass-panel p-3.5"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#EEF3FF] to-[#F2EFFF]">
                <ResilientImage
                  src={PROFILE_IDENTITY.aboutPortrait}
                  alt="Full-length professional portrait of Kavindra Jayamal Diyagaha"
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  fallbackTitle="Kavindra Jayamal Diyagaha"
                />

                {/* Measured gradient scrim for bottom editorial caption */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#18243B]/75 via-[#18243B]/25 to-transparent"
                />

                <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/85 backdrop-blur-md border border-white/90 px-4 py-3 shadow-sm">
                  <p className="font-display text-sm font-semibold text-[#18243B]">
                    Connecting People, Problems &amp; Practical Delivery
                  </p>
                  <p className="text-xs text-[#53627A] mt-0.5">
                    Business Analysis · Product Ownership · Solution Consulting
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionHeading
              eyebrow="BEYOND THE JOB TITLE"
              title="A Career Built Around Connecting People, Problems, and Solutions."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.65, delay: 0.15, ease: EASE_EDITORIAL }}
              className="mt-7 space-y-5 text-[15px] sm:text-base leading-[1.75] text-[#53627A]"
            >
              <p>
                My professional journey began in business analysis, working on
                enterprise software and digitalisation projects where
                understanding business processes, gathering requirements, and
                communicating with stakeholders were essential parts of
                delivery. These experiences gave me a foundation in analytical
                thinking, requirements engineering, solution validation, and
                collaboration across business and technical teams.
              </p>

              <p>
                As my career progressed, I expanded into product-focused
                responsibilities, project coordination, implementation delivery,
                and solution consulting. I&apos;ve worked with enterprise
                content management, workflow automation, customer data
                platforms, marketing technology, e-commerce, and public-sector
                systems. These experiences have helped me develop a broader
                perspective on how technology solutions are identified, shaped,
                communicated, prioritised, and delivered.
              </p>

              <p>
                Today, my work continues to combine business discovery, solution
                definition, stakeholder collaboration, and delivery preparation.
                I enjoy roles that require both structured analysis and
                practical communication—where understanding people and business
                priorities is just as important as understanding technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.65, delay: 0.25, ease: EASE_EDITORIAL }}
              className="mt-8"
            >
              <GlassCard className="p-6 bg-gradient-to-r from-[#EEF3FF]/80 via-white/85 to-[#F2EFFF]/80">
                <p className="font-display text-lg sm:text-xl font-semibold text-[#18243B] leading-snug text-balance">
                  Understand the problem. Create clarity. Collaborate
                  effectively. Move the solution forward.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
