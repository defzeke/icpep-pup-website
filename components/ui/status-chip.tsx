"use client";

import { useEffect, useState } from "react";
import { manilaTime } from "@/lib/manila-time";

const TICK_MS = 30_000;

export function StatusChip() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, TICK_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      aria-hidden="true"
      className="hidden items-center gap-2 font-mono text-label uppercase tracking-[0.16em] sm:flex"
    >
      <span className="text-light-orange">Manila</span>
      <time
        className="before:mr-2 before:text-off-white before:content-['//']"
        dateTime={now?.toISOString()}
      >
        <span className="inline-block min-w-[5ch] tabular-nums text-off-white">
          {now ? manilaTime(now) : "--:--"}
        </span>
      </time>
    </span>
  );
}