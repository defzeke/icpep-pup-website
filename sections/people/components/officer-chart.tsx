import { OfficerCard, type Officer } from "./officer-card";

// Contract: docs/sections/executives-advisers/README.md. A family-tree feel without a strict
// hierarchy: the roster's first two entries stand alone, joined by a dashed drop, and everyone
// else fills centred rows beneath a dashed rule — all in the order of data/officers.json.
const Drop = () => (
  <span aria-hidden="true" className="mx-auto block h-10 w-0 border-l border-dashed border-crimson/60" />
);

const CARD = "w-[calc(50%-0.75rem)] sm:w-52";

export function OfficerChart({ officers }: { officers: readonly Officer[] }) {
  const [first, second, ...rest] = officers;

  return (
    <div className="flex flex-col items-center">
      {first && (
        <div className={CARD}>
          <OfficerCard officer={first} />
        </div>
      )}
      {second && (
        <>
          <Drop />
          <div className={CARD}>
            <OfficerCard officer={second} />
          </div>
        </>
      )}
      {rest.length > 0 && (
        <>
          <Drop />
          <ul
            role="list"
            className="flex w-full list-none flex-wrap justify-center gap-x-6 gap-y-12 border-t border-dashed border-crimson/60 pt-10"
          >
            {rest.map((officer) => (
              <li key={officer.photo} className={CARD}>
                <OfficerCard officer={officer} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
