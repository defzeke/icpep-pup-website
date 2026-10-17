"use client";

// Contract: docs/intro.md
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { T, shuffleIntervals, shuffleOrder } from "@/lib/intro-timeline";

const VARIANTS = [
  "/intro/mono.webp",
  "/intro/mark.webp",
  "/intro/primary.webp",
  "/intro/glow.webp",
] as const;

const POOL = VARIANTS.length - 1;
const LAST = VARIANTS.length - 1;
const STORAGE_KEY = "icpep:intro";

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

        const bailout = root.current?.querySelector<HTMLElement>(".intro__bailout");
        if (bailout) bailout.style.animation = "none";

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

        const reveal = gsap.utils.toArray<HTMLElement>("[data-intro-reveal]");

        // Outro: the mark fades out in place, then the panel dissolves. `land` cues the hero's
        // [data-intro-target] to arrive — in CSS only, so nothing here writes to the page beneath.
        const handOff = (at: number) => {
          const dissolve = at + T.outro * 0.4;
          tl.to(content, { autoAlpha: 0, duration: T.outro * 0.5, ease: "power1.inOut" }, at);
          tl.call(
            () => {
              document.documentElement.dataset.intro = "land";
            },
            undefined,
            dissolve
          );
          tl.to(panel, { autoAlpha: 0, duration: T.outro * 0.6, ease: "power1.inOut" }, dissolve);
          if (reveal.length) {
            tl.from(reveal, { autoAlpha: 0, y: 24, duration: 0.6, stagger: 0.06, ease: "power2.out" }, dissolve);
          }
        };

        if (isRepeat) {
          tl.to(content, { autoAlpha: 1, duration: 0.2, ease: "power1.out" }, 0);
          handOff(0.4);
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

        at += T.shuffle.crossfade;

        tl.to(items[showing], { autoAlpha: 0, duration: T.ignition, ease: "power2.inOut" }, at);
        tl.to(items[LAST], { autoAlpha: 1, duration: T.ignition, ease: "power2.out" }, at);
        tl.to(stack, { autoAlpha: 1, duration: T.ignition, ease: "power2.out" }, at);

        handOff(at + T.ignition + T.hold);
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