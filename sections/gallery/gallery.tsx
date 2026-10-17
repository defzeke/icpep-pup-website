import { Label, Marker } from "@/components/ui/devices";
import { markerOf } from "@/lib/sections";
import { GalleryGrid } from "./components/gallery-grid";

// Contract: docs/sections/gallery/README.md.
export function Gallery() {
  return (
    <section id="gallery" className="relative overflow-x-clip bg-obsidian">
      <div className="sticky top-0 flex h-svh flex-col px-4 pt-24 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4">
          <p className="flex items-baseline gap-4">
            <Marker>{markerOf("gallery")}</Marker>
            <Label>gallery/</Label>
          </p>
          <span className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
            ~/icpep-se/gallery/*.jpg
          </span>
        </div>

        <h2 className="m-auto text-center text-display font-bold leading-none tracking-tight text-white">
          The ICpEP.SE
          <br />
          <span className="text-crimson">Experience</span>
        </h2>
      </div>

      <GalleryGrid />
    </section>
  );
}
