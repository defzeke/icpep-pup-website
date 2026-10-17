// icpep-mono.png's artwork is 648 × 466 of its 753px canvas, from (46, 127). At 70px tall the
// trace wordmark is 97px wide, just over the 96px legibility floor.
const LOGO_H = 70;
const K = LOGO_H / 466;

// The ticket's reverse: a crimson "packaging" face, seen as the card rises and before it flips.
export function EventBack({ index }: { index: number }) {
  const code = `ICPEP/EVT.0${index + 1}`;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-crimson p-7 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]"
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-3">
          <div className="relative overflow-hidden" style={{ width: 648 * K, height: LOGO_H }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- cropped to its artwork by offset */}
            <img
              src="/logos/icpep-mono.png"
              alt=""
              className="absolute max-w-none"
              style={{ width: 753 * K, left: -46 * K, top: -127 * K }}
            />
          </div>
          <span className="font-mono text-label tracking-[0.14em]">{code}</span>
        </div>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="11" cy="11" r="6" />
          <path d="M11 1v20M1 11h20" />
        </svg>
      </div>

      <div className="flex items-end justify-between">
        <span className="text-display font-bold leading-none tracking-tight">EVT</span>
        <span className="mb-3 flex size-10 rotate-45 items-center justify-center border border-white">
          <span className="-rotate-45 font-mono text-label">{index + 1}</span>
        </span>
      </div>

      <div className="flex items-center justify-between border-t-2 border-dashed border-white/60 pt-4 font-mono text-label uppercase tracking-[0.14em]">
        <span>›››</span>
        <span>Tear along line</span>
        <span>›››</span>
      </div>
    </div>
  );
}
