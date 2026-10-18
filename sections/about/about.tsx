import { Label, Marker } from "@/components/ui/devices";
import { markerOf } from "@/lib/sections";
import { MissionVision } from "./components/mission-vision";
import { ProcessSteps } from "./components/process-steps";

export function About() {
  return (
    <section id="about" className="border-t border-carbon bg-carbon">
      <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8 lg:pt-32">
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
      </div>

      <MissionVision />

      <div className="px-4 pt-16 pb-24 sm:px-6 lg:pt-24 lg:pb-32">
        <ProcessSteps />
      </div>
    </section>
  );
}
