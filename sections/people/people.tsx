import { Label, Marker } from "@/components/ui/devices";
import { markerOf } from "@/lib/sections";
import roster from "@/data/officers.json";
import { OfficerCard, type Officer } from "./components/officer-card";
import { PixieCard } from "./components/pixie-card";

const OFFICERS: Officer[] = roster;
const EXECUTIVES = OFFICERS.filter((o) => o.group === "executive");
const ADVISERS = OFFICERS.filter((o) => o.group === "adviser");

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

        <h3 className="sr-only">Executives</h3>
        <ul role="list" className="grid list-none gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {EXECUTIVES.map((officer) => (
            <li key={officer.photo}>
              <OfficerCard officer={officer} />
            </li>
          ))}
        </ul>

        {ADVISERS.length > 0 && (
          <div className="grid gap-10 border-t border-dashed border-crimson/60 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-label uppercase tracking-[0.14em] text-light-orange">
                Advisers //
              </span>
              <h3 className="text-subheader font-bold leading-tight tracking-tight text-white">
                Guiding the build.
              </h3>
            </div>
            {ADVISERS.map((officer) => (
              <OfficerCard key={officer.photo} officer={officer} />
            ))}
          </div>
        )}

        <PixieCard />
      </div>
    </section>
  );
}
