"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { PLACEHOLDER_COPY } from "@/lib/placeholders";
import { roadDepth, rotation } from "@/lib/roller";

// Contract: docs/sections/process/README.md.
const STEPS = ["PLAN", "BUILD", "DEPLOY", "REPEAT"] as const;
// The palette's mass gradient, maroon → crimson → bright orange, one stop per step.
const SURFACES = [
  "bg-maroon text-white",
  "bg-burgundy text-white",
  "bg-crimson text-white",
  "bg-bright-orange text-obsidian",
] as const;
const PINNED = "300vh";
const LEAD = 0.6; // of a viewport: how far below the top the sequence begins
const SIDES = 4;
const INK = "#F9E9E7"; // --color-off-white; canvas strokes cannot read a CSS variable

const smooth = (t: number) => t * t * (3 - 2 * t);

function draw(canvas: HTMLCanvasElement, cards: HTMLElement[], t: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  const r = Math.min(w, h) * 0.13;
  const axle = h * 0.42;
  const x = r + t * (w - 2 * r);
  const c = smooth(gsap.utils.clamp(0, 1, (t - 0.35) / 0.5));

  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = INK;
  ctx.fillStyle = INK;
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";

  ctx.beginPath();
  for (let px = 0; px <= w; px += 2) {
    const y = axle + roadDepth(px, SIDES, r) * (1 - c) + r * c;
    if (px === 0) ctx.moveTo(px, y);
    else ctx.lineTo(px, y);
  }
  ctx.stroke();

  const turn = rotation(x, SIDES, r);
  const step = (2 * Math.PI) / SIDES;
  const vertex = (k: number) => {
    const angle = Math.PI / 2 + Math.PI / SIDES + k * step + turn;
    return [Math.cos(angle) * r, Math.sin(angle) * r];
  };
  ctx.beginPath();
  for (let k = 0; k < SIDES; k++) {
    const [ax, ay] = vertex(k);
    const [bx, by] = vertex(k + 1);
    for (let s = 0; s < 24; s++) {
      const px = ax + ((bx - ax) * s) / 24;
      const py = ay + ((by - ay) * s) / 24;
      const scale = (Math.hypot(px, py) * (1 - c) + r * c) / Math.hypot(px, py);
      if (k === 0 && s === 0) ctx.moveTo(x + px * scale, axle + py * scale);
      else ctx.lineTo(x + px * scale, axle + py * scale);
    }
  }
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, axle, 3, 0, 2 * Math.PI);
  ctx.fill();

  ctx.save();
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 10]);
  ctx.beginPath();
  ctx.moveTo(0, axle);
  ctx.lineTo(w, axle);
  ctx.stroke();
  ctx.restore();

  // Keep only what lies on a card's risen part, so nothing is drawn on the empty band.
  ctx.save();
  ctx.globalCompositeOperation = "destination-in";
  ctx.beginPath();
  for (const card of cards) {
    const inset = parseFloat(card.style.clipPath.replace("inset(", "")) || 0;
    const top = card.offsetTop + (card.offsetHeight * inset) / 100;
    ctx.rect(card.offsetLeft, top, card.offsetWidth, card.offsetTop + card.offsetHeight - top);
  }
  ctx.fill();
  ctx.restore();
}

function sequence(root: HTMLElement) {
  return gsap.context(() => {
    const q = gsap.utils.selector(root);
    const cards = q("[data-step]") as HTMLElement[];
    const [canvas] = q("canvas") as HTMLCanvasElement[];
    if (!cards.length || !canvas) return;

    root.dataset.animated = "true";
    gsap.set(root, { height: PINNED });

    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(canvas.clientWidth * dpr);
    canvas.height = Math.round(canvas.clientHeight * dpr);
    canvas.getContext("2d")?.setTransform(dpr, 0, 0, dpr, 0, 0);

    const tl = gsap.timeline({ paused: true, defaults: { ease: "none" } });
    cards.forEach((card, i) => {
      tl.fromTo(
        card,
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.15 },
        0.05 + i * 0.15
      );
    });
    tl.to({}, { duration: 1 - tl.duration() }, tl.duration());

    const update = () => {
      // Starts before the pin, while the block is still scrolling into view.
      const lead = window.innerHeight * LEAD;
      const span = root.offsetHeight - window.innerHeight + lead;
      const p = gsap.utils.clamp(0, 1, (lead - root.getBoundingClientRect().top) / span);
      tl.progress(p);
      draw(canvas, cards, gsap.utils.clamp(0, 1, (p - 0.1) / 0.85));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
      delete root.dataset.animated;
    };
  });
}

export function ProcessSteps() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        let ctx = sequence(el);
        let width = window.innerWidth;
        let timer = 0;
        const onResize = () => {
          if (window.innerWidth === width) return;
          width = window.innerWidth;
          clearTimeout(timer);
          timer = window.setTimeout(() => {
            ctx.revert();
            ctx = sequence(el);
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
    <div ref={root} id="process" className="group relative">
      <div className="sticky top-0 flex flex-col gap-8 group-data-[animated=true]:h-svh group-data-[animated=true]:justify-center">
        <h3 className="sr-only">Our process</h3>
        <p className="max-w-[40ch] text-body text-off-white/80">{PLACEHOLDER_COPY.processIntro}</p>

        <div className="relative">
          <ol role="list" className="grid list-none gap-3 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((name, index) => {
              const loop = index === STEPS.length - 1;
              return (
                <li
                  key={name}
                  data-step
                  className={`flex min-h-[28rem] flex-col justify-between gap-10 p-6 lg:p-8 group-data-[animated=true]:h-[78svh] ${SURFACES[index]}`}
                >
                  <span className="font-mono text-label">{String(index + 1).padStart(2, "0")}</span>
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-subheader font-bold">
                      {name}
                      {loop && <span aria-hidden="true"> ↺</span>}
                    </span>
                    <p className="text-body">{PLACEHOLDER_COPY.processSteps[index]}</p>
                  </div>
                </li>
              );
            })}
          </ol>
          <canvas
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          />
        </div>
      </div>
    </div>
  );
}
