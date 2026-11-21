import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { NAV_ITEMS, PROFILE_IDENTITY } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E1E7F0] text-[#18243B]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <p className="font-display text-xl font-semibold text-[#18243B]">
              {PROFILE_IDENTITY.name}
            </p>
            <p className="mt-1 text-sm font-medium text-[#315BFF]">
              Business-to-Technology Transformation Professional
            </p>
            <p className="mt-3 text-sm text-[#53627A] max-w-md">
              Connecting Business Understanding with Technology Delivery.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#66758f]">
              Navigation
            </p>
            <ul className="space-y-1.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-[#53627A] hover:text-[#315BFF] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#66758f]">
              Direct Contact
            </p>
            <div className="space-y-2.5 text-sm">
              <a
                href={PROFILE_IDENTITY.phoneHref}
                className="flex items-center gap-2 font-medium text-[#18243B] hover:text-[#315BFF] transition-colors tabular-nums"
              >
                <Phone className="h-4 w-4 text-[#315BFF] shrink-0" aria-hidden="true" />
                <span>Phone: {PROFILE_IDENTITY.phoneDisplay}</span>
              </a>

              {PROFILE_IDENTITY.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 font-medium text-[#18243B] hover:text-[#315BFF] transition-colors break-all"
                >
                  <Mail className="h-4 w-4 text-[#315BFF] shrink-0" aria-hidden="true" />
                  <span>{email}</span>
                </a>
              ))}

              <p className="flex items-center gap-2 text-[#53627A]">
                <MapPin className="h-4 w-4 text-[#315BFF] shrink-0" aria-hidden="true" />
                <span>From {PROFILE_IDENTITY.location}</span>
              </p>

              <a
                href={PROFILE_IDENTITY.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[#18243B] hover:text-[#315BFF] transition-colors pt-1"
              >
                <span>LinkedIn profile</span>
                <ArrowUpRight className="h-4 w-4 text-[#315BFF]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E1E7F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#66758f]">
          <p>
            © {new Date().getFullYear()} {PROFILE_IDENTITY.name} ·{' '}
            {PROFILE_IDENTITY.location}
          </p>
          <p>
            {PROFILE_IDENTITY.currentRole} at {PROFILE_IDENTITY.currentOrganisation}
          </p>
        </div>
      </div>
    </footer>
  );
}
