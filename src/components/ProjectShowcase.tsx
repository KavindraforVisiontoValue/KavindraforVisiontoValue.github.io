import { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS, type ProjectItem } from '../data/portfolioData';
import {
  filterProjectsByDiscipline,
  getProjectDisciplineCount,
} from '../utils/portfolioHelpers';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import {
  SPRING_GENTLE,
  SPRING_SNAPPY,
  VIEWPORT_ONCE,
} from '../utils/motionPresets';

type DisciplineFilter = 'All' | ProjectItem['discipline'];

const FILTER_OPTIONS: DisciplineFilter[] = [
  'All',
  'Product Ownership',
  'Business Analysis',
  'Project Delivery',
];

function ProjectAbstractGraphic({ index }: { index: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative h-28 w-full overflow-hidden rounded-xl border border-white/80 bg-white/55 p-4 flex items-center justify-between"
    >
      <div className="space-y-2 w-2/3">
        <div className="h-2 w-20 rounded-full bg-[#315BFF]/25" />
        <div className="h-2 w-full rounded-full bg-[#8B9CFF]/25" />
        <div className="h-2 w-4/5 rounded-full bg-[#E1E7F0]" />
      </div>
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EEF3FF] to-[#F2EFFF] border border-[#315BFF]/20 shadow-inner">
        <span className="font-display text-sm font-semibold text-[#315BFF] tabular-nums">
          {index}
        </span>
      </div>
    </div>
  );
}

export function ProjectShowcase() {
  const [selectedDiscipline, setSelectedDiscipline] =
    useState<DisciplineFilter>('All');

  const visibleProjects = filterProjectsByDiscipline(PROJECTS, selectedDiscipline);
  const counts = getProjectDisciplineCount(PROJECTS);

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FFFFFF] via-[#F4F7FF] to-[#FAFBFF] border-t border-[#E1E7F0]/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <SectionHeading
            eyebrow="WORK I'VE BEEN PART OF"
            title="Products, Platforms, and Problems Worth Solving."
            description="Across my career, I've worked with enterprise software products, client implementations, and digital platforms serving different organisational needs. My involvement has ranged from requirements analysis and solution configuration to product ownership, stakeholder engagement, presentations, and delivery coordination."
          />

          {/* Interactive Segmented Filter Control */}
          <div
            role="group"
            aria-label="Filter projects by primary discipline"
            className="inline-flex flex-wrap items-center gap-1 p-1.5 rounded-xl bg-[#EEF3FF]/90 border border-[#E1E7F0] shrink-0 self-start lg:self-end"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = selectedDiscipline === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedDiscipline(option)}
                  aria-pressed={isActive}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 min-h-[36px] ${
                    isActive
                      ? 'bg-white text-[#18243B] shadow-sm'
                      : 'text-[#53627A] hover:text-[#18243B]'
                  }`}
                >
                  {option}{' '}
                  <span className="ml-1 text-[#315BFF] tabular-nums">
                    ({counts[option]})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Bento Project Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, idx) => {
            const spanFeatured =
              selectedDiscipline === 'All' && project.featured && idx < 2;
            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{ ...SPRING_GENTLE, delay: Math.min(idx * 0.05, 0.25) }}
                className={`flex ${spanFeatured ? 'lg:col-span-1' : ''}`}
              >
                <GlassCard
                  className={`p-6 sm:p-7 flex flex-col justify-between w-full bg-gradient-to-br ${project.accentGradient}`}
                >
                  <div>
                    <ProjectAbstractGraphic index={project.index} />

                    {/* Unboxed clean metadata */}
                    <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#53627A]">
                      <span className="font-semibold text-[#315BFF]">
                        {project.role}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.organisation}</span>
                    </div>

                    <h3 className="mt-2 font-display text-xl sm:text-2xl font-semibold text-[#18243B] leading-snug">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#315BFF]">
                      {project.subtitle}
                    </p>

                    <p className="mt-3 text-sm leading-[1.7] text-[#53627A]">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E1E7F0]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#66758f] mb-1.5">
                      Capabilities Demonstrated
                    </p>
                    <p className="text-xs sm:text-[13px] font-medium text-[#18243B] leading-relaxed">
                      {project.capabilities.join(' · ')}
                    </p>
                  </div>
                </GlassCard>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
