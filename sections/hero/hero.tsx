import { PLACEHOLDER_COPY } from "@/lib/placeholders";
import { HeroVisual } from "./components/hero-visual";
import { HeroMetadata } from "./components/hero-metadata";

const P = PLACEHOLDER_COPY;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-obsidian">
      <div className="iso-grid absolute inset-0" aria-hidden="true" />

      <div
        aria-hidden="true"
        className="absolute right-0 top-0 z-5"
        style={{ width: 0, height: 0, borderTop: "64px solid var(--color-crimson)", borderLeft: "64px solid transparent" }}
      />

      <div className="relative z-1 mx-auto grid min-h-[85vh] w-full max-w-7xl items-center gap-12 px-4 pt-12 pb-24 sm:px-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-20 lg:px-8">
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-block h-2.5 w-2.5 bg-light-orange" aria-hidden="true" />
            <span className="font-mono text-label uppercase tracking-[0.14em] text-light-orange">
              Student Edition · A.Y. 2026–2027
            </span>
          </div>

          <h1 className="max-w-[14ch] text-display font-bold leading-none tracking-tight text-white">
            <span className="block">{P.heroHeadline}</span>
            <span className="mt-2 block font-mono text-[0.86em] tracking-tight text-crimson">
              {P.heroHeadlineAccent}
            </span>
          </h1>

          <p className="max-w-[54ch] text-body text-off-white/80">{P.heroSubhead}</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-7">
            <a
              href="#join"
              className="inline-flex min-h-14 items-center bg-crimson px-7 font-mono text-label font-medium uppercase tracking-[0.12em] text-white transition hover:brightness-110"
            >
              [[ Join the Discord ]]
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center border-b border-dashed border-light-orange font-mono text-label uppercase tracking-[0.12em] text-off-white transition-colors hover:text-light-orange"
            >
              See what we build →
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>

      <div className="relative z-1 mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <HeroMetadata />
      </div>
    </section>
  );
}