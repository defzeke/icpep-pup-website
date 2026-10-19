import { Label, Marker } from "@/components/ui/devices";
import { markerOf } from "@/lib/sections";
import { GMAIL_COMPOSE } from "@/lib/contact";
import partners from "@/data/partners.json";
import { PartnerLogo, type Partner } from "./components/partner-logo";

const PARTNERS: Partner[] = partners;

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
            href={GMAIL_COMPOSE}
            target="_blank"
            rel="noopener noreferrer"
            className="bracket inline-flex min-h-[52px] items-center gap-2 border border-crimson px-6 font-mono text-label uppercase tracking-[0.12em] text-off-white transition-colors hover:text-light-orange"
          >
            Partner with us
            <span aria-hidden="true">↗</span>
            <span className="sr-only">(opens Gmail in a new tab)</span>
          </a>
        </div>

        <h3 className="sr-only">Partners</h3>
        <ul role="list" className="mx-auto grid w-full max-w-6xl list-none gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((partner) => (
            <PartnerLogo key={partner.name} partner={partner} />
          ))}
        </ul>
      </div>
    </section>
  );
}