"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Contract: docs/brand/motion.md — the viewport reveal. Marks [data-reveal] descendants.
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", (ctx) => {
        // Only what is still below the fold: hiding anything already on screen would flash it.
        const pending = gsap.utils
          .toArray<HTMLElement>("[data-reveal]", el)
          .filter((item) => item.getBoundingClientRect().top > window.innerHeight);
        if (!pending.length) return;

        gsap.set(pending, { autoAlpha: 0, y: 24, filter: "blur(10px)" });
        const io = new IntersectionObserver(
          (entries) => {
            const shown = entries.filter((e) => e.isIntersecting).map((e) => e.target);
            if (!shown.length) return;
            for (const target of shown) io.unobserve(target);
            ctx.add(() =>
              gsap.to(shown, {
                autoAlpha: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.6,
                stagger: 0.12,
                ease: "power2.out",
              })
            );
          },
          { rootMargin: "0px 0px -15% 0px" }
        );
        for (const item of pending) io.observe(item);
        return () => io.disconnect();
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
