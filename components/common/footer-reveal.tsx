"use client";

import { useEffect, useRef } from "react";

// Contract: docs/sections/footer/README.md. The footer waits beneath <main>; a keyboard user
// tabbing into it would land on a covered link, so focus scrolls the page fully off it.
export function FooterReveal() {
  const marker = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const footer = marker.current?.closest("footer");
    if (!footer) return;
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element) || !event.target.matches(":focus-visible")) return;
      const end = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY < end - 1) window.scrollTo({ top: end });
    };
    footer.addEventListener("focusin", onFocus);
    return () => footer.removeEventListener("focusin", onFocus);
  }, []);

  return <span ref={marker} hidden />;
}
