import { PLACEHOLDER_COPY } from "@/lib/placeholders";

export function MissionVision() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <article className="hatch flex flex-col gap-4 border border-carbon p-9">
        <span className="font-mono text-label uppercase tracking-[0.14em] text-light-orange">
          mission.md
        </span>
        <h3 className="text-subheader font-bold tracking-tight text-white">Mission</h3>
        <p className="text-body text-off-white/80">{PLACEHOLDER_COPY.mission}</p>
      </article>
      <article className="hatch flex flex-col gap-4 border border-carbon p-9">
        <span className="font-mono text-label uppercase tracking-[0.14em] text-light-orange">
          vision.md
        </span>
        <h3 className="text-subheader font-bold tracking-tight text-white">Vision</h3>
        <p className="text-body text-off-white/80">{PLACEHOLDER_COPY.vision}</p>
      </article>
    </div>
  );
}