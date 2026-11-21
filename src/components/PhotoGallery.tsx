import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import {
  GALLERY_CATEGORIES,
  GALLERY_PHOTOS,
  type GalleryCategory,
  type GalleryPhoto,
} from '../data/portfolioData';
import {
  filterGalleryPhotos,
  getAdjacentGalleryIndex,
  getGalleryCategoryCount,
} from '../utils/portfolioHelpers';
import { ResilientImage } from './ResilientImage';
import {
  SPRING_GENTLE,
  SPRING_SNAPPY,
  VIEWPORT_ONCE,
} from '../utils/motionPresets';

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = filterGalleryPhotos(GALLERY_PHOTOS, selectedCategory);
  const counts = getGalleryCategoryCount(GALLERY_PHOTOS);
  const activePhoto: GalleryPhoto | null =
    lightboxIndex !== null && filteredPhotos[lightboxIndex]
      ? filteredPhotos[lightboxIndex]
      : null;

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const stepLightbox = useCallback(
    (direction: 'next' | 'prev') => {
      setLightboxIndex((current) => {
        if (current === null) return null;
        return getAdjacentGalleryIndex(current, direction, filteredPhotos.length);
      });
    },
    [filteredPhotos.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') stepLightbox('next');
      if (e.key === 'ArrowLeft') stepLightbox('prev');
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, closeLightbox, stepLightbox]);

  return (
    <section
      aria-labelledby="gallery-heading"
      className="relative pb-20 sm:pb-28 pt-6 bg-[#FAFBFF]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E1E7F0]">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#315BFF]">
              PROFESSIONAL PHOTOGRAPHY GALLERY
            </p>
            <h3
              id="gallery-heading"
              className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-[#18243B]"
            >
              Presentations, Workshops &amp; Professional Moments
            </h3>
          </div>

          {/* Interactive Category Filter Control */}
          <div
            role="group"
            aria-label="Filter gallery photos by category"
            className="flex flex-wrap items-center gap-1 p-1.5 rounded-xl bg-[#EEF3FF]/90 border border-[#E1E7F0]"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    setLightboxIndex(null);
                  }}
                  aria-pressed={isActive}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 min-h-[36px] ${
                    isActive
                      ? 'bg-white text-[#18243B] shadow-sm'
                      : 'text-[#53627A] hover:text-[#18243B]'
                  }`}
                >
                  {category}{' '}
                  <span className="ml-1 text-[#315BFF] tabular-nums">
                    ({counts[category]})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Masonry / Editorial Grid */}
        <div
          data-testid="gallery-grid"
          className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {filteredPhotos.map((photo, idx) => (
            <motion.figure
              key={photo.id}
              layout
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ ...SPRING_GENTLE, delay: Math.min(idx * 0.05, 0.25) }}
              className="break-inside-avoid glass-panel rounded-2xl p-3 group overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(idx)}
                aria-label={`Open full view of ${photo.alt}`}
                className="relative block w-full overflow-hidden rounded-xl bg-[#EEF3FF] text-left focus-visible:outline-2 focus-visible:outline-[#315BFF]"
              >
                <div className={`w-full ${photo.aspectClass} overflow-hidden`}>
                  <ResilientImage
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    fallbackTitle={photo.caption}
                  />
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/85 backdrop-blur-md text-[#18243B] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm"
                >
                  <Maximize2 className="h-4 w-4" />
                </div>
              </button>

              <figcaption className="px-2 pt-3.5 pb-1.5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#315BFF]">
                  {photo.category}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#18243B] font-medium">
                  {photo.caption}
                </p>
                {photo.permissionNote ? (
                  <p className="mt-2 text-xs text-[#66758f] border-t border-[#E1E7F0] pt-2">
                    {photo.permissionNote}
                  </p>
                ) : null}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      <AnimatePresence>
        {activePhoto ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAFBFF]/92 backdrop-blur-xl p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={SPRING_SNAPPY}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl glass-panel rounded-3xl p-4 sm:p-6 bg-white/95 shadow-[0_24px_70px_rgba(24,36,59,0.14)]"
            >
              <div className="flex items-center justify-between gap-4 pb-3 border-b border-[#E1E7F0]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#315BFF]">
                    {activePhoto.category}
                  </p>
                  <p className="text-sm font-semibold text-[#18243B] mt-0.5">
                    {activePhoto.caption}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close image preview"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E1E7F0] bg-white text-[#18243B] hover:bg-[#EEF3FF] transition-colors shrink-0"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-4 relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#F4F7FF] max-h-[68vh]">
                <ResilientImage
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  loading="eager"
                  className="max-h-[68vh] w-auto object-contain"
                  fallbackTitle={activePhoto.caption}
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="text-xs font-medium text-[#53627A] tabular-nums">
                  Photo {(lightboxIndex ?? 0) + 1} of {filteredPhotos.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => stepLightbox('prev')}
                    aria-label="Previous photo"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[#E1E7F0] bg-white px-4 py-2 text-xs font-semibold text-[#18243B] hover:bg-[#EEF3FF] transition-colors min-h-[40px]"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => stepLightbox('next')}
                    aria-label="Next photo"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#315BFF] px-4 py-2 text-xs font-semibold text-white hover:bg-[#244CE0] transition-colors min-h-[40px]"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
