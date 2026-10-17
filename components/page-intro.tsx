"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Page intro. Contract, timeline and failure modes: docs/intro.md.

const VARIANTS = [
  "/intro/mono.webp",
  "/intro/mark.webp",
  "/intro/primary.webp",
  "/intro/glow.webp",
] as const;

// glow is excluded from the shuffle so it can only ever be the landing.
const POOL = VARIANTS.length - 1;
const LAST = VARIANTS.length - 1;

// Timings in seconds. A first visit runs ~3.1s end to end.
const T = {
  fadeIn: 0.35,
  // 14 swaps, decelerating 55ms -> 165ms.
  shuffle: { swaps: 14, from: 0.055, to: 0.165, curve: 2, crossfade: 0.045 },
  shuffleOpacity: 0.55,
  ignition: 0.35,
  hold: 0.11,
  exit: 0.5,
  gap: 0.1,
  curtain: 0.85,
  repeatFadeOut: 0.85,
};

const STORAGE_KEY = "icpep:intro";

// Interval before each swap, so the last swap is the slowest.
function shuffleIntervals({ swaps, from, to, curve }: typeof T.shuffle) {
  const span = swaps > 1 ? swaps - 1 : 1;
  return Array.from({ length: swaps }, (_, i) => from + (to - from) * Math.pow(i / span, curve));
}

function shuffleOrder(swaps: number, pool: number, showing: number) {
  const order: number[] = [];
  let prev = showing;
  for (let i = 0; i < swaps; i++) {
    const choices = Array.from({ length: pool }, (_, n) => n).filter((n) => n !== prev);
    prev = choices[Math.floor(Math.random() * choices.length)];
    order.push(prev);
  }
  return order;
}

export function PageIntro() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mode = document.documentElement.dataset.intro;
      if (mode !== "play" && mode !== "repeat") return;

      const q = gsap.utils.selector(root);
      const items = gsap.utils.toArray<HTMLImageElement>(q(".intro__item"));
      const content = q(".intro__content");
      const panel = q(".intro__panel");
      const stack = q(".intro__stack");
      if (!items.length) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const isRepeat = mode === "repeat";

        // Disarm the CSS bailout; see docs/intro.md.
        const bailout = root.current?.querySelector<HTMLElement>(".intro__bailout");
        if (bailout) bailout.style.animation = "none";

        // Warm the decode cache; the first swap is only ~0.35s away.
        for (const img of items) img.decode().catch(() => {});

        gsap.set(items, { autoAlpha: 0 });
        gsap.set(isRepeat ? items[LAST] : items[0], { autoAlpha: 1 });

        const finish = () => {
          document.documentElement.dataset.intro = "done";
          try {
            sessionStorage.setItem(STORAGE_KEY, "1");
          } catch {}
        };

        const tl = gsap.timeline({ onComplete: finish });

        if (isRepeat) {
          tl.to(content, { autoAlpha: 1, duration: 0.2, ease: "power1.out" }, 0)
            .to(items, { autoAlpha: 0, yPercent: -20, duration: 0.3, ease: "power2.in" }, "+=0.2")
            .to(panel, { autoAlpha: 0, duration: T.repeatFadeOut, ease: "power2.out" }, "<");
          return;
        }

        gsap.set(stack, { autoAlpha: T.shuffleOpacity });
        tl.to(content, { autoAlpha: 1, duration: T.fadeIn, ease: "power1.out" }, 0);

        const gaps = shuffleIntervals(T.shuffle);
        const order = shuffleOrder(gaps.length, POOL, 0);
        let at = T.fadeIn;
        let showing = 0;
        for (let i = 0; i < order.length; i++) {
          at += gaps[i];
          const next = order[i];
          tl.to(items[showing], { autoAlpha: 0, duration: T.shuffle.crossfade, ease: "none" }, at);
          tl.to(items[next], { autoAlpha: 1, duration: T.shuffle.crossfade, ease: "none" }, at);
          showing = next;
        }

        // Clear the final swap before the ignition reuses that same element.
        at += T.shuffle.crossfade;

        tl.to(items[showing], { autoAlpha: 0, duration: T.ignition, ease: "power2.inOut" }, at);
        tl.to(items[LAST], { autoAlpha: 1, duration: T.ignition, ease: "power2.out" }, at);
        tl.to(stack, { autoAlpha: 1, duration: T.ignition, ease: "power2.out" }, at);

        const exitAt = at + T.ignition + T.hold;
        tl.to(content, { autoAlpha: 0, yPercent: -8, duration: T.exit, ease: "power2.in" }, exitAt);

        const curtainAt = exitAt + T.gap;
        tl.to(panel, { scaleY: 0, duration: T.curtain, ease: "power2.inOut" }, curtainAt);

        // Hand-off: sections mark themselves [data-intro-reveal] to rise with the curtain.
        const reveal = gsap.utils.toArray<HTMLElement>("[data-intro-reveal]");
        if (reveal.length) {
          tl.from(
            reveal,
            { autoAlpha: 0, y: 24, duration: 0.6, stagger: 0.06, ease: "power2.out" },
            curtainAt + T.curtain * 0.35
          );
        }
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root} className="intro" aria-hidden="true">
      <div className="intro__bailout">
        <div className="intro__panel" />
        <div className="intro__content">
          <div className="intro__stack">
            {VARIANTS.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                className="intro__item"
                src={src}
                alt=""
                width={576}
                height={576}
                draggable={false}
                fetchPriority={i === 0 ? "high" : "low"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
