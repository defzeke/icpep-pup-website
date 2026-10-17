import { PLACEHOLDER_COPY } from "@/lib/placeholders";

const C = PLACEHOLDER_COPY.galleryCaption;

// Read left, centre, right in turn; each frame's tilt and drop break the grid up.
const FRAMES = [
  { rotate: -7, drop: "0svh" },
  { rotate: 5, drop: "24svh" },
  { rotate: -3, drop: "8svh" },
  { rotate: 4, drop: "6svh" },
  { rotate: -6, drop: "30svh" },
  { rotate: 8, drop: "0svh" },
  { rotate: -4, drop: "16svh" },
  { rotate: 6, drop: "4svh" },
  { rotate: -8, drop: "22svh" },
];

const ALIGN = ["md:justify-self-start", "md:justify-self-center", "md:justify-self-end"] as const;

export function GalleryGrid() {
  return (
    <ul
      role="list"
      className="pointer-events-none relative z-10 -mt-[100svh] grid list-none grid-cols-2 gap-x-4 gap-y-[12svh] px-4 pt-[75svh] pb-[45svh] sm:px-6 md:grid-cols-3 lg:px-10"
    >
      {FRAMES.map((frame, i) => {
        const code = `IMG_${String(i + 1).padStart(3, "0")}`;
        return (
          <li
            key={code}
            className={`justify-self-center ${ALIGN[i % 3]}`}
            style={{ marginTop: frame.drop }}
          >
            <figure
              className="pointer-events-auto flex w-full max-w-72 flex-col gap-4 bg-off-white p-3 pb-5 shadow-[0_24px_60px_-20px_rgba(8,4,6,0.9)] lg:max-w-80"
              style={{ rotate: `${frame.rotate}deg` }}
            >
              <div aria-hidden="true" className="hatch flex aspect-[4/5] items-center justify-center">
                <span className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
                  [ photo ]
                </span>
              </div>
              <figcaption className="px-1 font-mono text-label uppercase tracking-[0.14em] text-maroon">
                {`${code} // ${C}`}
              </figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}
