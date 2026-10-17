import { cacheLife } from "next/cache";
import { FooterReveal } from "./footer-reveal";

// Contract: docs/sections/footer/README.md.

// icpep-lockup-obsidian.png's artwork is 447 × 310 of its 710 × 355 canvas, from (118, 22).
// At 112px tall the trace wordmark is ~161px wide, clear of the 96px legibility floor.
const LOGO_H = 112;
const K = LOGO_H / 310;

async function copyrightYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

const SOCIALS = [
  {
    label: "Facebook",
    href: "#top",
    icon: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8z" strokeLinejoin="round" />,
  },
  {
    label: "Instagram",
    href: "#top",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "#top",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "Email",
    href: "mailto:icpepse.pupmanila@gmail.com",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" strokeLinejoin="round" />
      </>
    ),
  },
];

export async function SiteFooter() {
  const year = await copyrightYear();

  return (
    // Sits beneath <main> (z-10) and is uncovered as the page scrolls off it. Only on screens
    // tall enough to show all of it. Never raised above the page: keyboard focus scrolls to it.
    <footer className="bottom-0 z-0 border-t border-carbon bg-obsidian [@media(min-height:720px)]:sticky">
      <FooterReveal />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-12">
          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden" style={{ width: 447 * K, height: LOGO_H }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- cropped to its artwork by offset */}
              <img
                src="/logos/icpep-lockup-obsidian.png"
                alt="ICpEP SE – PUP Manila"
                className="absolute max-w-none"
                style={{ width: 710 * K, left: -118 * K, top: -22 * K }}
              />
            </div>
            <p className="max-w-sm text-body text-off-white/80">
              Institute of Computer Engineers of the Philippines — Student Edition, Polytechnic
              University of the Philippines Manila.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
              Connect //
            </span>
            <div className="flex gap-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center border border-off-white/20 text-off-white transition-colors duration-[var(--duration-fast)] hover:text-light-orange"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="mt-16 overflow-hidden">
          <div className="font-mono text-[clamp(2.375rem,10.6vw,9.5rem)] font-bold leading-none tracking-tight text-transparent [-webkit-text-stroke:3px_rgba(249,233,231,0.4)]">
            ICPEP SE
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-carbon pt-7 font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
          <span>© {year} ICpEP SE – PUP Manila</span>
          <span className="text-light-orange">Plan // Build // Deploy // Repeat</span>
          <a href="#top" className="text-off-white transition-colors hover:text-light-orange">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
