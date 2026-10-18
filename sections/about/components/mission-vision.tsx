import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

// Deck page 2, verbatim.
const LEAD =
  "To establish a definitive, high-precision visual identity that embodies the true duality of Computer Engineering—";
const ACCENT =
  "seamlessly integrating physical hardware architecture with structured software logic.";

export function MissionVision() {
  return (
    // overflow-clip, not -hidden: it must not become a scroll container for sticky children.
    <div className="relative isolate overflow-clip">
      <div aria-hidden="true" className="iso-grid about-grid absolute inset-0 -z-10" />

      <Reveal className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-20 lg:px-8">
        <div data-reveal className="relative mx-auto w-full max-w-64 lg:max-w-md">
          <div aria-hidden="true" className="glow absolute inset-[10%] opacity-70" />
          <Image
            src="/logos/icpep-mark.png"
            alt=""
            width={1024}
            height={1024}
            className="relative h-auto w-full"
          />
        </div>

        <article className="flex flex-col gap-5">
          <h3 data-reveal className="font-mono text-label uppercase tracking-[0.16em] text-light-orange">
            {"Vision //"}
          </h3>
          <p data-reveal className="text-statement font-medium tracking-tight text-white">
            {LEAD}
            <span className="font-normal text-light-orange">{ACCENT}</span>
          </p>
        </article>
      </Reveal>
    </div>
  );
}
