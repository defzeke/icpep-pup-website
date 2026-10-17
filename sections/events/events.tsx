import { Label, Marker } from "@/components/ui/devices";
import { markerOf } from "@/lib/sections";
import { EventBack } from "./components/event-back";
import { EventCard } from "./components/event-card";
import { EventsScroll } from "./components/events-scroll";

export function Events() {
  return (
    <EventsScroll>
      <div className="sticky top-0 min-h-svh overflow-hidden group-data-[animated=true]:h-svh">
        <div data-events="wash" aria-hidden="true" className="events-wash absolute inset-0" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[20svh] bg-linear-to-b from-carbon to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[35svh] bg-linear-to-b from-transparent to-carbon"
        />

        <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col gap-12 px-4 py-24 sm:px-6 lg:px-8 group-data-[animated=true]:h-full group-data-[animated=true]:min-h-0 group-data-[animated=true]:justify-center group-data-[animated=true]:gap-8 group-data-[animated=true]:py-8">
          <div className="flex flex-wrap items-center justify-between gap-4 group-data-[animated=true]:absolute group-data-[animated=true]:inset-x-4 group-data-[animated=true]:top-8 sm:group-data-[animated=true]:inset-x-6 lg:group-data-[animated=true]:inset-x-8">
            <p className="flex items-baseline gap-4">
              <Marker>{markerOf("events")}</Marker>
              <Label>events.log</Label>
            </p>
            <span className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
              ~/icpep-se/events.log
            </span>
          </div>

          <h2 className="text-center text-display font-bold leading-none tracking-tight text-white group-data-[animated=true]:absolute group-data-[animated=true]:inset-0 group-data-[animated=true]:grid group-data-[animated=true]:place-content-center">
            <span data-events="fade" className="block">
              Show up.
            </span>
            <span className="block text-light-orange">Plug in.</span>
          </h2>

          <ul role="list" className="relative grid list-none gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <li key={i} data-events="ticket">
                <div data-events="flip" className="relative [transform-style:preserve-3d]">
                  <EventCard index={i} />
                  <EventBack index={i} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </EventsScroll>
  );
}
