import { motion } from 'motion/react';
import { PROFILE_IDENTITY } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { ResilientImage } from './ResilientImage';
import { EASE_EDITORIAL, imageMaskRevealVariants, VIEWPORT_ONCE } from '../utils/motionPresets';

export function PersonBehindWork() {
  return (
    <section
      id="person"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FAFBFF] via-[#F8F7F4] to-[#FAFBFF] border-t border-[#E1E7F0]/70 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Editorial Copy */}
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="BEYOND THE PROFESSIONAL PROFILE"
              title="Analytical in Approach. Human in Collaboration."
            />

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.65, delay: 0.14, ease: EASE_EDITORIAL }}
              className="mt-7 space-y-5 text-[15px] sm:text-base leading-[1.75] text-[#53627A]"
            >
              <p>
                My professional experience has reinforced the importance of
                clear communication, thoughtful analysis, and working with
                people who bring different perspectives to the same challenge.
              </p>

              <p>
                I value understanding the detail without losing sight of the
                bigger picture, being realistic about commitments, and creating
                clarity when situations are complex.
              </p>

              <p>
                I&apos;ve also valued opportunities to present ideas, share
                knowledge, and engage with audiences beyond day-to-day project
                discussions. For me, professional growth is an ongoing process
                of learning, adapting, and developing a better understanding of
                how business and technology work together.
              </p>
            </motion.div>
          </div>

          {/* Editorial Photography Pairing */}
          <div className="lg:col-span-6">
            <motion.div
              variants={imageMaskRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="grid grid-cols-12 gap-4 items-stretch"
            >
              <div className="col-span-7 glass-panel rounded-2xl p-2.5">
                <div className="h-full min-h-[300px] sm:min-h-[360px] overflow-hidden rounded-xl bg-[#EEF3FF]">
                  <ResilientImage
                    src={PROFILE_IDENTITY.aboutPortrait}
                    alt="Kavindra Jayamal Diyagaha full-length editorial portrait"
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                    fallbackTitle="Editorial Portrait"
                  />
                </div>
              </div>

              <div className="col-span-5 flex flex-col gap-4">
                <div className="glass-panel rounded-2xl p-2.5 flex-1">
                  <div className="h-full min-h-[180px] overflow-hidden rounded-xl bg-[#F2EFFF]">
                    <ResilientImage
                      src={PROFILE_IDENTITY.storyMomentPhoto}
                      alt="Kavindra representing Enadoc Pvt Ltd at ICSDB 2023"
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                      fallbackTitle="ICSDB 2023 Moment"
                    />
                  </div>
                </div>

                <div className="glass-panel rounded-2xl p-4 bg-white/85">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#315BFF]">
                    Perspective
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-[#18243B] leading-snug">
                    Clarity in analysis, realism in delivery, openness in
                    collaboration.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
