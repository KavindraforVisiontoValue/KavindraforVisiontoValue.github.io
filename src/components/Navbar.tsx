import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, PROFILE_IDENTITY } from '../data/portfolioData';
import { SPRING_SNAPPY } from '../utils/motionPresets';

export function Navbar() {
  const [activeId, setActiveId] = useState<string>('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const primaryLinks = NAV_ITEMS.filter((item) => item.id !== 'contact');
  const contactItem = NAV_ITEMS.find((item) => item.id === 'contact')!;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-28% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id: string) => {
    setActiveId(id);
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={SPRING_SNAPPY}
      className="fixed top-3 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none"
    >
      <div className="mx-auto max-w-6xl pointer-events-auto">
        <div
          className={`glass-nav rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 sm:gap-8 transition-all duration-200 ${
            scrolled ? 'shadow-[0_14px_38px_rgba(24,36,59,0.09)]' : ''
          }`}
        >
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={() => handleLinkClick('home')}
            className="font-display text-sm sm:text-base lg:text-[17px] font-semibold tracking-tight text-[#18243B] whitespace-nowrap shrink-0 hover:text-[#315BFF] transition-colors"
          >
            {PROFILE_IDENTITY.name}
          </a>

          {/* Zone 2: Clean single-line navigation links */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-5"
          >
            {primaryLinks.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'text-[#315BFF]'
                      : 'text-[#53627A] hover:text-[#18243B]'
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active-underline"
                      transition={SPRING_SNAPPY}
                      className="absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full bg-[#315BFF]"
                    />
                  ) : null}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-2 shrink-0">
            <motion.a
              href={contactItem.href}
              onClick={() => handleLinkClick(contactItem.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={SPRING_SNAPPY}
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-[#315BFF] px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-[0_6px_18px_rgba(49,91,255,0.24)] hover:bg-[#244CE0] transition-colors whitespace-nowrap shrink-0"
            >
              {contactItem.label}
            </motion.a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex lg:hidden items-center justify-center rounded-xl border border-[#E1E7F0] bg-white/80 p-2.5 text-[#18243B] hover:bg-[#EEF3FF] transition-colors min-w-[44px] min-h-[44px]"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Accessible Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileOpen ? (
            <motion.nav
              id="mobile-navigation-drawer"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={SPRING_SNAPPY}
              className="mt-2 glass-nav rounded-2xl p-4 lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={() => handleLinkClick(item.id)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors min-h-[44px] ${
                        isActive
                          ? 'bg-[#EEF3FF] text-[#315BFF]'
                          : 'text-[#18243B] hover:bg-[#FAFBFF]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.id === 'contact' ? (
                        <span className="text-xs font-semibold text-[#315BFF]">
                          +94 77 555 9579
                        </span>
                      ) : null}
                    </a>
                  );
                })}
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
