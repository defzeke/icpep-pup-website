import { Label, Marker } from "@/components/ui/devices";
import { markerOf } from "@/lib/sections";
import { FeaturedBuild } from "./components/featured-build";
import { BuildRow } from "./components/build-row";

export function Builds() {
  return (
    <section id="projects" className="bg-obsidian">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="flex items-baseline gap-4">
            <Marker>{markerOf("projects")}</Marker>
            <Label>projects/</Label>
          </p>
          <span className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
            ~/icpep-se/builds.git
          </span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-display font-bold leading-none tracking-tight text-white">
            Proof,
            <br />
            not <span className="font-mono text-[0.82em] text-crimson">PROMISES.</span>
          </h2>
          <p className="max-w-md text-body text-off-white/80">
            Hardware, firmware and software — designed, built and shipped by members.
          </p>
        </div>

        <FeaturedBuild />

        <div className="flex flex-col border-b border-dashed border-crimson/60">
          {[2, 3, 4, 5].map((n) => (
            <BuildRow key={n} index={n} />
          ))}
        </div>
      </div>
    </section>
  );
}