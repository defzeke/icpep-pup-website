import { PLACEHOLDER_COPY } from "@/lib/placeholders";

const STEPS = ["PLAN", "BUILD", "DEPLOY", "REPEAT"] as const;

export function ProcessSteps() {
  return (
    <ol className="grid list-none gap-0 border-t border-dashed border-crimson/60 md:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((name, index) => (
        <li
          key={name}
          className="flex flex-col gap-3 border-r-0 border-b border-dashed border-crimson/60 py-7 pr-6 last:border-b-0 md:border-r md:last:border-r-0 lg:border-b-0"
        >
          <span className="font-mono text-label text-off-white/60">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`font-mono text-subheader font-bold ${
              index === STEPS.length - 1 ? "text-crimson" : "text-white"
            }`}
          >
            {name}
          </span>
          <p className="text-body text-off-white/80">{PLACEHOLDER_COPY.processSteps[index]}</p>
        </li>
      ))}
    </ol>
  );
}