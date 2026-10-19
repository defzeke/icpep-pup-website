import Image from "next/image";

export type Officer = {
  photo: string;
  name: string;
  position: string;
  group: string;
  bio?: string;
};

export function OfficerCard({ officer }: { officer: Officer }) {
  const name = officer.name || "[Name]";
  const position = officer.position || "[Position]";

  return (
    <article className="flex flex-col gap-4">
      <div className="relative aspect-[4/5] overflow-hidden border border-carbon bg-obsidian">
        <Image
          src={`/officers/${officer.photo}`}
          alt={officer.name ? `${officer.name}, ${officer.position}` : ""}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="font-mono text-label font-bold text-white">{`ID // ${name}`}</span>
        <span className="font-mono text-label uppercase tracking-[0.12em] text-light-orange">
          {`Role // ${position}`}
        </span>
      </div>
    </article>
  );
}
