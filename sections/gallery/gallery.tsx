import { Label, Marker } from "@/components/ui/devices";
import { markerOf } from "@/lib/sections";
import { GalleryGrid } from "./components/gallery-grid";

export function Gallery() {
  return (
    <section id="gallery" className="bg-obsidian">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="flex items-baseline gap-4">
            <Marker>{markerOf("gallery")}</Marker>
            <Label>gallery/</Label>
          </p>
          <span className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
            ~/icpep-se/gallery/*.jpg
          </span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-display font-bold leading-none tracking-tight text-white">
            Campus life,
            <br />
            <span className="font-mono text-[0.82em] text-crimson">UNCOMPILED.</span>
          </h2>
          <a
            href="#gallery"
            className="inline-flex min-h-11 items-center border-b border-dashed border-light-orange font-mono text-label uppercase tracking-[0.12em] text-off-white transition-colors hover:text-light-orange"
          >
            Open full album →
          </a>
        </div>

        <GalleryGrid />
      </div>
    </section>
  );
}