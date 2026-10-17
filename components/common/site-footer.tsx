import Image from "next/image";
import { cacheLife } from "next/cache";

import { SECTIONS } from "@/lib/sections";
import { ManilaClock } from "@/components/ui/manila-clock";

const LISTED = SECTIONS.filter((section) => section.built);

async function copyrightYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const year = await copyrightYear();

  return (
    <footer className="border-t border-carbon bg-obsidian">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-12">
          <div className="flex flex-[2_1_320px] flex-col gap-5">
            <Image
              src="/logos/icpep-mono.png"
              alt="ICpEP SE – PUP Manila"
              width={753}
              height={753}
              className="h-10 w-auto"
            />
            <p className="max-w-sm text-body text-off-white/80">
              Institute of Computer Engineers of the Philippines — Student Edition, Polytechnic
              University of the Philippines Manila.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-1 basis-[160px] flex-col gap-1">
            <span className="mb-2 font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
              Navigate //
            </span>
            {LISTED.map((section) => (
              <a
                key={section.slug}
                href={`#${section.slug}`}
                aria-label={`${section.label} (${section.filename})`}
                className="font-mono text-label text-light-orange transition-colors duration-[var(--duration-fast)] ease-out hover:text-off-white"
              >
                {section.filename}
              </a>
            ))}
          </nav>

          <div className="flex flex-1 basis-[220px] flex-col gap-3">
            <span className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
              Connect //
            </span>
            <div className="flex gap-2">
              <a
                href="#top"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center border border-off-white/20 text-off-white transition-colors hover:text-light-orange"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8z" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#top"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center border border-off-white/20 text-off-white transition-colors hover:text-light-orange"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#top"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center border border-off-white/20 text-off-white transition-colors hover:text-light-orange"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
                </svg>
              </a>
              <a
                href="mailto:icpepse.pupmanila@gmail.com"
                aria-label="Email"
                className="inline-flex h-11 w-11 items-center justify-center border border-off-white/20 text-off-white transition-colors hover:text-light-orange"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </a>
            </div>
            <a
              href="mailto:icpepse.pupmanila@gmail.com"
              className="border-b border-dashed border-light-orange font-mono text-label text-off-white transition-colors hover:text-light-orange"
            >
              icpepse.pupmanila@gmail.com
            </a>
          </div>

          <div className="flex flex-1 basis-[180px] flex-col gap-2">
            <span className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
              Local //
            </span>
            <span className="font-mono text-subheader font-bold text-off-white">
              <ManilaClock />
            </span>
            <span className="font-mono text-label uppercase tracking-[0.12em] text-off-white/80">
              PHT · Sta. Mesa, Manila
            </span>
          </div>
        </div>

        <div aria-hidden="true" className="mt-16 overflow-hidden">
          <div className="font-mono text-[clamp(2.375rem,10.6vw,9.5rem)] font-bold leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(249,233,231,0.4)]">
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