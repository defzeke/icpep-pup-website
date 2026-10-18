"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Contract: docs/sections/hero/README.md.
const PINNED = "500vh";

function sequence(section: HTMLElement) {
  return gsap.context(() => {
    const q = gsap.utils.selector(section);
    const [logo] = q("[data-hero=logo]") as HTMLElement[];
    const [visual] = q("[data-hero=visual]");
    const labels = q("[data-hero=label]");
    const [name] = q("[data-hero=name]");
    const [tagline] = q("[data-hero=tagline]");
    const [description] = q("[data-hero=description]");
    const wash = q("[data-hero=wash]");
    if (!logo || !visual || !name || !tagline || !description) return;

    section.dataset.animated = "true";
    gsap.set(section, { height: PINNED });

    // Measured after the animated layout applies; offset* ignores transforms.
    const parent = logo.offsetParent as HTMLElement;
    const dx = parent.clientWidth / 2 - (logo.offsetLeft + logo.offsetWidth / 2);
    const dy = parent.clientHeight / 2 - (logo.offsetTop + logo.offsetHeight / 2);

    const tl = gsap.timeline({ paused: true, defaults: { ease: "none" } });
    const blurIn = { opacity: 0, y: 24, filter: "blur(10px)" };
    const shown = { opacity: 1, y: 0, filter: "blur(0px)" };
    tl.to(visual, { scale: 1.3, duration: 0.2 }, 0)
      .to(labels, { autoAlpha: 0, duration: 0.12 }, 0.04)
      .fromTo(logo, { x: dx, y: dy }, { x: 0, y: 0, duration: 0.2 }, 0.24)
      .fromTo(wash, { opacity: 0 }, { opacity: 1, duration: 0.24, ease: "power1.inOut" }, 0.22)
      .to(visual, { scale: 1, duration: 0.2 }, 0.24)
      .fromTo(name, { opacity: 0, x: 48 }, { opacity: 1, x: 0, duration: 0.12 }, 0.34)
      .to(name, { opacity: 0, y: -24, duration: 0.08 }, 0.54)
      .fromTo(tagline, blurIn, { ...shown, duration: 0.1 }, 0.6)
      .to(tagline, { opacity: 0, y: -24, duration: 0.08 }, 0.76)
      .fromTo(description, blurIn, { ...shown, duration: 0.1 }, 0.82)
      .to({}, { duration: 0.08 }, 0.92);

    const update = () => {
      const span = section.offsetHeight - window.innerHeight;
      const top = -section.getBoundingClientRect().top;
      tl.progress(span > 0 ? gsap.utils.clamp(0, 1, top / span) : 0);
      if (top > 0) section.dataset.scrolled = "true";
      else delete section.dataset.scrolled;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      delete section.dataset.animated;
    };
  });
}

export function HeroScroll({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let ctx = sequence(section);
        let width = window.innerWidth;
        let timer = 0;
        // Width only: a mobile URL bar changing the height must not rebuild mid-scroll.
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
    <section ref={root} className="group relative isolate bg-obsidian">
      {children}
    </section>
  );
}
