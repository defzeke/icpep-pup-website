"use client";

import { useId, useRef, type ReactNode } from "react";
import { gsap } from "gsap";

// Contract: docs/sections/events/README.md. Registration is not open for any event yet, so the
// reserve action explains that in a modal — styled as a voided ticket — rather than linking nowhere.
export function ReserveButton({
  name,
  type,
  code,
  children,
}: {
  name: string;
  type: string;
  code: string;
  children: ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const veil = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const closing = useRef(false);
  const title = useId();

  const still = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const open = () => {
    const d = dialog.current;
    if (!d || d.open) return;
    d.showModal();
    gsap.killTweensOf([veil.current, panel.current]);
    closing.current = false;
    if (still()) {
      gsap.set([veil.current, panel.current], { clearProps: "all" });
      return;
    }
    gsap.fromTo(veil.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power1.out" });
    gsap.fromTo(
      panel.current,
      { opacity: 0, y: 48, rotation: -4, scale: 0.94 },
      { opacity: 1, y: 0, rotation: 0, scale: 1, duration: 0.55, ease: "back.out(1.4)" }
    );
  };

  const close = () => {
    const d = dialog.current;
    if (!d?.open || closing.current) return;
    if (still()) {
      d.close();
      return;
    }
    closing.current = true;
    gsap.to(panel.current, { opacity: 0, y: 32, rotation: 3, scale: 0.96, duration: 0.25, ease: "power2.in" });
    gsap.to(veil.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.05,
      ease: "power1.in",
      onComplete: () => {
        closing.current = false;
        d.close();
      },
    });
  };

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-label={`Reserve a seat: ${name}`}
        onClick={open}
        className="relative block w-full cursor-pointer"
      >
        {children}
      </button>

      <dialog
        ref={dialog}
        aria-labelledby={title}
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-transparent"
      >
        <div ref={veil} aria-hidden="true" onClick={close} className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm" />

        <div className="pointer-events-none relative flex h-full items-center justify-center p-4">
          <div
            ref={panel}
            className="pointer-events-auto w-full max-w-md overflow-hidden rounded-2xl bg-off-white text-maroon shadow-[0_32px_80px_-24px_rgba(8,4,6,0.95)]"
          >
            <div className="flex items-center justify-between gap-4 bg-crimson px-7 py-4 font-mono text-label uppercase tracking-[0.14em] text-white">
              <span>{code}</span>
              <span>{type}</span>
            </div>

            <div className="relative flex flex-col gap-4 p-7">
              <span
                aria-hidden="true"
                className="absolute right-6 top-6 rotate-[-8deg] border-2 border-crimson px-3 py-1 font-mono text-label font-bold uppercase tracking-[0.16em] text-crimson"
              >
                Not yet open
              </span>
              <p className="font-mono text-label uppercase tracking-[0.14em] text-crimson">{name}</p>
              <h2 id={title} className="max-w-[13ch] text-subheader font-bold leading-tight tracking-tight text-crimson">
                Registration isn&rsquo;t open yet
              </h2>
              <p className="text-body">
                {name} is not yet available or open for registration. Its date, time and venue will be
                announced soon — check back here.
              </p>
            </div>

            <div className="flex items-center justify-between gap-4 border-t-2 border-dashed border-crimson/35 px-7 py-5">
              <span className="font-mono text-label uppercase tracking-[0.14em] text-crimson">
                {"Status // TBA"}
              </span>
              <button
                type="button"
                autoFocus
                onClick={close}
                className="bracket inline-flex min-h-11 cursor-pointer items-center bg-crimson px-6 font-mono text-label font-medium uppercase tracking-[0.12em] text-white transition-colors duration-[var(--duration-fast)] hover:bg-maroon"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
