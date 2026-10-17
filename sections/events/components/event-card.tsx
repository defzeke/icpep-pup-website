import { barcode } from "@/lib/barcode";
import { PLACEHOLDER_COPY } from "@/lib/placeholders";

const E = PLACEHOLDER_COPY.event;

function Barcode({ seed }: { seed: string }) {
  const widths = barcode(seed);
  const bars: { at: number; w: number }[] = [];
  let total = 0;
  for (let i = 0; i < widths.length; i++) {
    if (i % 2 === 0) bars.push({ at: total, w: widths[i] });
    total += widths[i];
  }

  return (
    <svg viewBox={`0 0 ${total} 20`} preserveAspectRatio="none" aria-hidden="true" className="h-14 w-full">
      {bars.map(({ at, w }, i) => (
        <rect
          key={i}
          x={at}
          width={w}
          height={20}
          className="origin-bottom fill-crimson transition-transform duration-[var(--duration-base)] ease-out [transform-box:fill-box] group-hover/ticket:scale-y-0 group-focus-within/ticket:scale-y-0 motion-reduce:transition-none [@media(hover:none)]:scale-y-0"
          style={{ transitionDelay: `${i * 6}ms` }}
        />
      ))}
    </svg>
  );
}

export function EventCard({ index }: { index: number }) {
  const code = `ICPEP/EVT.0${index + 1}`;

  return (
    <article className="group/ticket flex flex-col text-maroon [backface-visibility:hidden]">
      <div className="flex flex-1 flex-col gap-8 rounded-t-2xl bg-off-white p-7">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-label uppercase tracking-[0.14em] text-crimson">{E.type}</span>
          <h3 className="text-subheader font-bold leading-tight tracking-tight text-crimson">{E.name}</h3>
          <p className="text-body">{E.blurb}</p>
        </div>
        <ul className="mt-auto flex flex-col gap-1.5 text-body">
          <li className="flex items-center gap-2.5">
            <span aria-hidden="true" className="size-2 rotate-45 bg-crimson" />
            {E.time}
          </li>
          <li className="flex items-center gap-2.5">
            <span aria-hidden="true" className="size-2 rounded-full bg-crimson" />
            {E.venue}
          </li>
        </ul>
      </div>

      {/* The stub: joined along a printed perforation, it tears away on hover or focus. */}
      <div className="flex origin-top-left flex-col gap-4 rounded-b-2xl border-t-2 border-dashed border-crimson/35 bg-off-white p-7 transition-[translate,rotate] duration-[var(--duration-base)] ease-out group-hover/ticket:translate-y-3 group-hover/ticket:rotate-[4deg] group-focus-within/ticket:translate-y-3 group-focus-within/ticket:rotate-[4deg] motion-reduce:transition-none">
        <div className="flex items-baseline justify-between gap-4 font-mono text-label uppercase tracking-[0.14em] text-crimson">
          <span>Date:</span>
          <span className="tabular-nums">[DD MON 2026]</span>
        </div>
        <a href="#events" aria-label={`Reserve a seat: ${E.name}`} className="relative block">
          <Barcode seed={code} />
          <span className="absolute inset-0 flex items-center justify-center font-mono text-subheader font-bold uppercase tracking-[0.08em] text-crimson opacity-0 transition-opacity delay-150 duration-[var(--duration-base)] group-hover/ticket:opacity-100 group-focus-within/ticket:opacity-100 motion-reduce:transition-none [@media(hover:none)]:opacity-100">
            Reserve seat →
          </span>
        </a>
        <span className="font-mono text-label uppercase tracking-[0.14em] text-crimson">
          Admit one · {code}
        </span>
      </div>
    </article>
  );
}
