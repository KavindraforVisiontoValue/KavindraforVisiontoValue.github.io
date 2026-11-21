import { motion } from 'motion/react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { PROFILE_IDENTITY } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { EASE_EDITORIAL, SPRING_SNAPPY, VIEWPORT_ONCE } from '../utils/motionPresets';

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FAFBFF] via-[#EEF3FF]/80 to-[#F2EFFF]/75 overflow-hidden border-t border-[#E1E7F0]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-[420px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(49,91,255,0.14)_0%,rgba(139,156,255,0.10)_45%,transparent_72%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.7, ease: EASE_EDITORIAL }}
        >
          <GlassCard
            hoverLift={false}
            className="p-8 sm:p-12 lg:p-16 bg-white/80 shadow-[0_24px_60px_rgba(45,65,125,0.10)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#315BFF]">
                  LET&apos;S CONNECT
                </p>

                <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#18243B] leading-[1.1] text-balance">
                  Good Conversations Can Lead to Great Solutions.
                </h2>

                <p className="mt-5 text-[15px] sm:text-base leading-[1.7] text-[#53627A] max-w-xl">
                  Whether you&apos;re interested in business analysis, digital
                  transformation, product ownership, project delivery, or
                  solution consulting, I&apos;m always open to meaningful
                  professional conversations. Let&apos;s connect, exchange
                  perspectives, and explore ideas.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#18243B]">
                  <MapPin className="h-4 w-4 text-[#315BFF]" aria-hidden="true" />
                  <span>I&apos;m from {PROFILE_IDENTITY.location}</span>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col gap-4">
                {/* Clickable Phone Card */}
                <motion.a
                  href={PROFILE_IDENTITY.phoneHref}
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={SPRING_SNAPPY}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-[#E1E7F0] bg-white/95 p-5 shadow-[0_8px_24px_rgba(45,65,125,0.06)] hover:border-[#315BFF]/50 transition-all min-h-[72px]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF3FF] text-[#315BFF] shrink-0">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#66758f]">
                        Direct Phone
                      </p>
                      <p className="font-display text-lg font-semibold text-[#18243B] tabular-nums">
                        {PROFILE_IDENTITY.phoneDisplay}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 text-[#315BFF] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                    aria-hidden="true"
                  />
                </motion.a>

                {/* Email Contact Details Card */}
                <div className="rounded-2xl border border-[#E1E7F0] bg-white/95 p-5 shadow-[0_8px_24px_rgba(45,65,125,0.06)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF3FF] text-[#315BFF] shrink-0">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#66758f]">
                        Email
                      </p>
                      <div className="mt-1.5 flex flex-col gap-1.5">
                        {PROFILE_IDENTITY.emails.map((email) => (
                          <a
                            key={email}
                            href={`mailto:${email}`}
                            className="inline-flex items-center justify-between gap-2 font-display text-sm sm:text-base font-semibold text-[#18243B] hover:text-[#315BFF] transition-colors break-all"
                          >
                            <span>{email}</span>
                            <ArrowUpRight className="h-4 w-4 text-[#315BFF] shrink-0" aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary LinkedIn CTA */}
                <motion.a
                  href={PROFILE_IDENTITY.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={SPRING_SNAPPY}
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-[#315BFF] p-5 text-white shadow-[0_14px_32px_rgba(49,91,255,0.28)] hover:bg-[#244CE0] transition-colors min-h-[72px]"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/80">
                      LinkedIn Profile
                    </p>
                    <p className="font-display text-lg font-semibold">
                      Connect on LinkedIn
                    </p>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                    aria-hidden="true"
                  />
                </motion.a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
