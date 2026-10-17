import { Label, Marker } from "@/components/ui/devices";
import { markerOf } from "@/lib/sections";
import { PartnerLogo } from "./components/partner-logo";

export function Partners() {
  return (
    <section id="partners" className="border-t border-carbon bg-carbon">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="flex items-baseline gap-4">
            <Marker>{markerOf("partners")}</Marker>
            <Label>partners.json</Label>
          </p>
          <span className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
            ~/icpep-se/partners.cfg
          </span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-display font-bold leading-none tracking-tight text-white">
            Backed by people
            <br />
            who back builders.
          </h2>
          <a
            href="mailto:icpepse.pupmanila@gmail.com"
            className="bracket inline-flex min-h-[52px] items-center border border-crimson px-6 font-mono text-label uppercase tracking-[0.12em] text-off-white transition-colors hover:text-light-orange"
          >
            Partner with us
          </a>
        </div>

        <ul className="grid grid-cols-2 gap-px border border-carbon bg-carbon sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <PartnerLogo key={i} sponsor={i >= 3} />
          ))}
        </ul>
      </div>
    </section>
  );
}