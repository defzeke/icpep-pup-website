import { Label, Marker } from "@/components/ui/devices";
import { markerOf } from "@/lib/sections";
import { EventCard } from "./components/event-card";

export function Events() {
  return (
    <section id="events" className="border-y border-carbon bg-carbon">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="flex items-baseline gap-4">
            <Marker>{markerOf("events")}</Marker>
            <Label>events.log</Label>
          </p>
          <span className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
            ~/icpep-se/events.log
          </span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-display font-bold leading-none tracking-tight text-white">
            Show up.
            <br />
            Plug in.
          </h2>
          <a
            href="#events"
            className="inline-flex min-h-11 items-center border-b border-dashed border-light-orange font-mono text-label uppercase tracking-[0.12em] text-off-white transition-colors hover:text-light-orange"
          >
            Full calendar →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <EventCard key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}