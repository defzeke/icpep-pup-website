import { PLACEHOLDER_COPY } from "@/lib/placeholders";

const E = PLACEHOLDER_COPY.event;

export function EventCard({ index }: { index: number }) {
  return (
    <article className="flex flex-col border border-carbon bg-obsidian">
      <div className="flex flex-1 flex-col gap-5 p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-label tracking-[0.14em] text-light-orange">
            ICPEP/EVT.0{index + 1}
          </span>
          <span className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
            {E.type}
          </span>
        </div>
        <h3 className="text-subheader font-bold leading-tight tracking-tight text-white">
          {E.name}
        </h3>
        <p className="text-body text-off-white/80">{E.blurb}</p>
        <dl className="grid grid-cols-2 gap-4">
          <div>
            <dt className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
              Time
            </dt>
            <dd className="mt-1 text-body text-off-white">{E.time}</dd>
          </div>
          <div>
            <dt className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
              Venue
            </dt>
            <dd className="mt-1 text-body text-off-white">{E.venue}</dd>
          </div>
        </dl>
      </div>

      <div aria-hidden="true" className="relative flex h-7 items-center gap-2 px-6">
        <span className="absolute -left-[14px] top-0 h-7 w-7 rounded-full border border-carbon bg-carbon" />
        <span className="flex-1 border-t-2 border-dashed border-off-white/20" />
        <span className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
          tear along line
        </span>
        <span className="flex-1 border-t-2 border-dashed border-off-white/20" />
        <span className="absolute -right-[14px] top-0 h-7 w-7 rounded-full border border-carbon bg-carbon" />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-7">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-subheader font-bold text-white">[DD]</span>
          <span className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
            [MON] 2026 · Admit one
          </span>
        </div>
        <a
          href="#events"
          className="inline-flex min-h-12 items-center bg-crimson px-5 font-mono text-label font-medium uppercase tracking-[0.12em] text-white transition hover:brightness-110"
        >
          Reserve seat →
        </a>
      </div>
    </article>
  );
}