import { PLACEHOLDER_COPY } from "@/lib/placeholders";
import { ManilaClock } from "@/components/ui/manila-clock";

const P = PLACEHOLDER_COPY;

export function HeroMetadata() {
  return (
    <dl className="grid gap-5 border-t border-dashed border-crimson/60 pt-6 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <dt className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
          Location //
        </dt>
        <dd className="mt-1.5 font-mono text-body text-off-white">Sta. Mesa, Manila</dd>
      </div>
      <div>
        <dt className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
          Local time //
        </dt>
        <dd className="mt-1.5 font-mono text-body text-off-white">
          <ManilaClock /> PHT
        </dd>
      </div>
      <div>
        <dt className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
          Cycle //
        </dt>
        <dd className="mt-1.5 font-mono text-body text-off-white">
          Plan → Build → Deploy → Repeat
        </dd>
      </div>
      <div>
        <dt className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
          Status //
        </dt>
        <dd className="mt-1.5 flex items-center gap-2 font-mono text-body text-off-white">
          <span className="inline-block h-2 w-2 rounded-full bg-light-orange" aria-hidden="true" />
          {P.heroStatus}
        </dd>
      </div>
    </dl>
  );
}