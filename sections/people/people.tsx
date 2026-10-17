import { Label, Marker } from "@/components/ui/devices";
import { markerOf } from "@/lib/sections";
import { OfficerCard } from "./components/officer-card";
import { AdviserCard } from "./components/adviser-card";
import { PixieCard } from "./components/pixie-card";

export function People() {
  return (
    <section id="officers" className="border-y border-carbon bg-carbon">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="flex items-baseline gap-4">
            <Marker>{markerOf("officers")}</Marker>
            <Label>officers.ts</Label>
          </p>
          <span className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
            ~/icpep-se/team.json
          </span>
        </div>

        <h2 className="text-display font-bold leading-none tracking-tight text-white">
          The people
          <br />
          running the stack.
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <OfficerCard key={i} index={i} />
          ))}
        </div>

        <div className="flex flex-wrap gap-10 border-t border-dashed border-crimson/60 pt-10">
          <div className="flex flex-1 basis-[250px] flex-col gap-3">
            <span className="font-mono text-label uppercase tracking-[0.14em] text-light-orange">
              Advisers //
            </span>
            <h3 className="text-subheader font-bold leading-tight tracking-tight text-white">
              Guiding the build.
            </h3>
          </div>
          <AdviserCard code="ADV.01" role="Role // Faculty Adviser" />
          <AdviserCard code="ADV.02" role="Role // [Adviser title]" />
        </div>

        <PixieCard />
      </div>
    </section>
  );
}