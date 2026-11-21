import { motion } from 'motion/react';
import { ExternalLink, Play } from 'lucide-react';
import { PROFILE_IDENTITY } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import { EASE_EDITORIAL, SPRING_SNAPPY, VIEWPORT_ONCE } from '../utils/motionPresets';

export function VideoShowcase() {
  return (
    <section
      id="in-action"
      className="relative pt-20 pb-14 sm:pt-28 sm:pb-16 bg-gradient-to-b from-[#FFFFFF] via-[#F5F7FF] to-[#FAFBFF] overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 right-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(139,156,255,0.14)_0%,transparent_70%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="BEYOND DOCUMENTATION"
          title="Making Technology Understandable."
          description="An important part of working between business and technology is being able to communicate ideas clearly. Throughout my career, I've participated in product presentations, demonstrations, client discussions, training, and knowledge-sharing activities. These experiences reflect my interest in making technology understandable to different audiences."
        />

        {/* Featured Video Glass Frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_EDITORIAL }}
          className="mt-12"
        >
          <GlassCard hoverLift={false} className="p-4 sm:p-7 lg:p-8 bg-white/85">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Responsive 16:9 YouTube No-Cookie Player */}
              <div className="lg:col-span-8">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#E1E7F0] bg-[#EEF3FF] shadow-[0_14px_34px_rgba(24,36,59,0.08)]">
                  <iframe
                    src={PROFILE_IDENTITY.youtubeEmbedUrl}
                    title="Kavindra Jayamal Diyagaha — Product Conversations, On Camera (YouTube Video)"
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
              </div>

              {/* Video Editorial Context & YouTube CTA */}
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#315BFF]">
                    <Play className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Featured Video</span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl sm:text-[1.75rem] font-semibold text-[#18243B] leading-tight text-balance">
                    Product Conversations, On Camera.
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.7] text-[#53627A]">
                    A product-focused video featuring me alongside our
                    marketing manager, communicating the value of a software
                    solution. This is an example of my experience presenting
                    technology capabilities to a wider audience.
                  </p>
                </div>

                <div className="mt-7 pt-5 border-t border-[#E1E7F0]">
                  <motion.a
                    href={PROFILE_IDENTITY.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={SPRING_SNAPPY}
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#315BFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(49,91,255,0.22)] hover:bg-[#244CE0] transition-colors w-full sm:w-auto min-h-[44px]"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </motion.a>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
