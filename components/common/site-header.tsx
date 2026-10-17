"use client";

import { useEffect, useRef, useState } from "react";

// Contract: docs/sections/header-nav/README.md.

const WORDMARK = "ICPEP.SE PUP MANILA";
const FILL = "calc(100cqw / 10.421)";
const LEADING = 0.8;
const BAR = 88;
const SMALL = 24;
const INSET = (BAR - SMALL * LEADING) / 2;

export function SiteHeader() {
  const wordmark = useRef<HTMLAnchorElement>(null);
  const [mounted, setMounted] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const el = wordmark.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let range = 0;
    let min = 1;
    let frame = 0;

    const measure = () => {
      // offsetHeight is the layout size, unaffected by the scale applied below.
      const big = el.offsetHeight;
      const small = SMALL * LEADING;
      min = Math.min(1, small / big);
      range = Math.max(0, big - small);
    };
    const update = () => {
      frame = 0;
      const p = range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 1;
      const t = reduced.matches ? (p > 0 ? 1 : 0) : p;
      el.style.transform = `scale(${1 - t * (1 - min)})`;
      setCompact(t >= 1);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    setMounted(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    reduced.addEventListener("change", onScroll);
    // The size is set before the web font swaps in; re-measure once it has.
    document.fonts.ready.then(onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      reduced.removeEventListener("change", onScroll);
    };
  }, []);

  // shortcut: topbar hidden for now; remove this line to restore.
  return null;

  return (
    <>
      <div
        id="top"
        aria-hidden="true"
        className="w-full px-[2px]"
        style={{ paddingBlock: INSET }}
      >
        <div className="@container">
          <div style={{ height: `calc(${FILL} * ${LEADING})` }} />
        </div>
      </div>

      <header
        data-compact={compact}
        data-intro-reveal="true"
        className={`${mounted ? "fixed" : "absolute"} group inset-x-0 top-0 z-50 border-b border-transparent transition-[background-color,border-color,backdrop-filter] duration-[var(--duration-base)] ease-out motion-reduce:transition-none data-[compact=true]:border-carbon data-[compact=true]:bg-obsidian/80 data-[compact=true]:backdrop-blur-md`}
        style={{ height: BAR }}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-10 focus:bg-light-orange focus:px-4 focus:py-2 focus:font-medium focus:text-label focus:uppercase focus:tracking-[0.16em] focus:text-obsidian"
        >
          Skip to content
        </a>

        <div className="relative w-full px-[2px]" style={{ paddingTop: INSET }}>
          <div className="@container">
            <a
              ref={wordmark}
              href="#top"
              className="invisible block w-fit origin-top-left font-sans font-bold whitespace-nowrap tracking-tight text-off-white [font-kerning:none] transition-[opacity,filter,visibility] duration-[var(--duration-slow)] ease-out motion-reduce:transition-none group-data-[compact=true]:invisible group-data-[compact=true]:opacity-0 group-data-[compact=true]:blur-md"
              style={{ fontSize: FILL, lineHeight: LEADING }}
            >
              {WORDMARK}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
