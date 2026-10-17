import { PLACEHOLDER_COPY } from "@/lib/placeholders";

const C = PLACEHOLDER_COPY.galleryCaption;

const ITEMS = [
  { cls: "g-big", code: "IMG_001" },
  { cls: "", code: "IMG_002" },
  { cls: "g-tall", code: "IMG_003" },
  { cls: "", code: "IMG_004" },
  { cls: "", code: "IMG_005" },
  { cls: "g-wide", code: "IMG_006" },
  { cls: "", code: "IMG_007" },
];

export function GalleryGrid() {
  return (
    <div className="gal">
      {ITEMS.map((it) => (
        <figure
          key={it.code}
          className={`hatch ${it.cls} flex items-end border border-carbon p-4`}
        >
          <figcaption className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
            {`${it.code} // ${C}`}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}