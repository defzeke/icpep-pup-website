import { Label, Marker, Rule } from "@/components/ui/devices";
import { PLACEHOLDER_COPY } from "@/lib/placeholders";
import { markerOf } from "@/lib/sections";
import { MissionVision } from "./components/mission-vision";
import { ProcessSteps } from "./components/process-steps";

const VISION =
  "To establish a definitive, high-precision visual identity that embodies the true duality of Computer Engineering—seamlessly integrating physical hardware architecture with structured software logic.";

export function About() {
  return (
    <section id="about" className="border-t border-carbon bg-carbon">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <h2 className="sr-only">About</h2>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="flex items-baseline gap-4">
            <Marker>{markerOf("about")}</Marker>
            <Label>about.md</Label>
          </p>
          <span className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
            ~/icpep-se/about.md
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-12">
          <p className="flex-[999_1_640px] text-balance text-title font-medium leading-tight tracking-tight text-white">
            We are the student edition of the Institute of Computer Engineers of the Philippines
            at PUP Manila — a chapter that treats engineering as both{" "}
            <span className="text-light-orange">circuit</span> and{" "}
            <span className="font-mono text-[0.78em] tracking-tight text-crimson">code</span>.
          </p>

          <svg
            viewBox="0 0 300 300"
            role="img"
            aria-label="Three stacked isometric layers, from deep maroon to bright orange"
            className="h-auto w-full max-w-xs flex-[1_1_240px]"
          >
            <polygon points="150,140 270,209 150,278 30,209" fill="#4F0212" />
            <polygon points="30,209 150,278 150,296 30,227" fill="#2A0109" />
            <polygon points="150,278 270,209 270,227 150,296" fill="#3A020D" />
            <polygon points="150,80 270,149 150,218 30,149" fill="#95082B" />
            <polygon points="30,149 150,218 150,236 30,167" fill="#4F0212" />
            <polygon points="150,218 270,149 270,167 150,236" fill="#7F0525" />
            <polygon points="150,20 270,89 150,158 30,89" fill="#F45A0C" />
            <polygon points="30,89 150,158 150,176 30,107" fill="#CB0E37" />
            <polygon points="150,158 270,89 270,107 150,176" fill="#E03B0A" />
            <polygon points="150,58 204,89 150,120 96,89" fill="none" stroke="#F9E9E7" strokeWidth="2" />
          </svg>
        </div>

        <MissionVision />

        <p className="max-w-[62ch] text-body text-off-white">{VISION}</p>
        <Rule tone="burgundy" className="w-full max-w-[62ch]" />
        <p className="max-w-[62ch] text-body text-off-white">{PLACEHOLDER_COPY.aboutBody}</p>

        <ProcessSteps />
      </div>
    </section>
  );
}