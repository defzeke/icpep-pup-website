"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Contract: docs/sections/events/README.md.
const PINNED = "350vh";
const TILT = [-8, 6, 10];
const REST = [0, 0, 0];

function sequence(section: HTMLElement) {
  return gsap.context(() => {
    const q = gsap.utils.selector(section);
    const tickets = q("[data-events=ticket]");
    const flips = q("[data-events=flip]");
    if (!tickets.length) return;

    section.dataset.animated = "true";
    gsap.set(section, { height: PINNED });
    gsap.set(flips, { transformPerspective: 1600 });

    const tl = gsap.timeline({ paused: true, defaults: { ease: "none" } });
    tl.fromTo(q("[data-events=wash]"), { opacity: 0 }, { opacity: 1, duration: 0.25 }, 0)
      .fromTo(
        q("[data-events=fade]"),
        { opacity: 1, filter: "blur(0px)" },
        { opacity: 0.45, filter: "blur(8px)", duration: 0.2 },
        0.2
      )
      .fromTo(
        tickets,
        { y: () => window.innerHeight * 1.1, rotation: (i: number) => TILT[i % 3] },
        { y: 0, rotation: (i: number) => REST[i % 3], duration: 0.3, stagger: 0.06, ease: "power2.out" },
        0.12
      )
      .fromTo(flips, { rotationY: 180 }, { rotationY: 0, duration: 0.2, stagger: 0.06, ease: "power1.inOut" }, 0.5)
      .to({}, { duration: 0.15 }, 0.85);

    const update = () => {
      const span = section.offsetHeight - window.innerHeight;
      tl.progress(span > 0 ? gsap.utils.clamp(0, 1, -section.getBoundingClientRect().top / span) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      delete section.dataset.animated;
    };
  });
}

export function EventsScroll({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        let ctx = sequence(section);
        let width = window.innerWidth;
        let timer = 0;
        const onResize = () => {
          if (window.innerWidth === width) return;
          width = window.innerWidth;
          clearTimeout(timer);
          timer = window.setTimeout(() => {
            ctx.revert();
            ctx = sequence(section);
          }, 150);
        };
        window.addEventListener("resize", onResize);
        return () => {
          clearTimeout(timer);
          window.removeEventListener("resize", onResize);
          ctx.revert();
        };
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} id="events" className="group relative bg-carbon">
      {children}
    </section>
  );
}
