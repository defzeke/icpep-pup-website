import Image from "next/image";
import photos from "@/data/gallery.json";

type Photo = {
  src: string;
  width: number;
  height: number;
  fit?: string;
  caption: string;
  alt: string;
};

const PHOTOS: Photo[] = photos;

// Read left, centre, right in turn; each frame's tilt and drop break the grid up. The pattern
// repeats, so any number of photos keeps the scatter.
const TILT = [-7, 5, -3, 4, -6, 8, -4, 6, -8];
const DROP = ["0svh", "24svh", "8svh", "6svh", "30svh", "0svh", "16svh", "4svh", "22svh"];
const ALIGN = ["md:justify-self-start", "md:justify-self-center", "md:justify-self-end"] as const;

export function GalleryGrid() {
  return (
    <ul
      role="list"
      className="pointer-events-none relative z-10 -mt-[100svh] grid list-none grid-cols-2 gap-x-4 gap-y-[12svh] px-4 pt-[75svh] pb-[45svh] sm:px-6 md:grid-cols-3 lg:px-10"
    >
      {PHOTOS.map((photo, i) => (
        <li
          key={photo.src}
          className={`justify-self-center ${ALIGN[i % 3]}`}
          style={{ marginTop: DROP[i % DROP.length] }}
        >
          <figure
            className="pointer-events-auto flex w-full max-w-72 flex-col gap-4 bg-off-white p-3 pb-5 shadow-[0_24px_60px_-20px_rgba(8,4,6,0.9)] lg:max-w-80"
            style={{ rotate: `${TILT[i % TILT.length]}deg` }}
          >
            <div className="relative aspect-square overflow-hidden bg-obsidian">
              <Image
                src={`/gallery/${photo.src}`}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1024px) 20rem, (min-width: 768px) 30vw, 45vw"
                className={`h-full w-full ${photo.fit === "contain" ? "object-contain" : "object-cover"}`}
              />
            </div>
            <figcaption className="px-1 font-mono text-label uppercase tracking-[0.14em] text-maroon">
              {photo.caption}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
