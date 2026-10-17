"use client";

import { useEffect, useState } from "react";
import { manilaTimeLong } from "@/lib/manila-time";

export function ManilaClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <time dateTime={now?.toISOString()} className="tabular-nums">
      {now ? manilaTimeLong(now) : "--:--:--"}
    </time>
  );
}