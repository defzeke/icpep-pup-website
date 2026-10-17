import Image from "next/image";
import { PLACEHOLDER_COPY } from "@/lib/placeholders";

const B = PLACEHOLDER_COPY.build;

export function FeaturedBuild() {
  return (
    <article className="flex flex-wrap border border-carbon">
      <div className="hatch relative flex min-h-[420px] flex-[3_1_480px] items-center justify-center overflow-hidden">
        <Image
          src="/logos/icpep-mark.png"
          alt=""
          width={1024}
          height={1024}
          className="w-[46%] max-w-xs opacity-20"
        />
        <span className="absolute bottom-4 left-5 font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
          [Project photo / demo loop]
        </span>
      </div>
      <div className="flex flex-[2_1_340px] flex-col justify-between gap-6 box-border p-10">
        <div className="flex flex-col gap-5">
          <span className="font-mono text-label uppercase tracking-[0.14em] text-light-orange">
            Featured build · 01
          </span>
          <h3 className="text-subheader font-bold leading-tight tracking-tight text-white">
            {B.name}
          </h3>
          <p className="text-body text-off-white/80">{B.blurb}</p>
          <div className="flex flex-wrap gap-2">
            <span className="border border-off-white/20 px-3 py-2 font-mono text-label uppercase tracking-[0.12em] text-off-white">
              {B.category}
            </span>
            <span className="border border-off-white/20 px-3 py-2 font-mono text-label uppercase tracking-[0.12em] text-off-white">
              {B.stack}
            </span>
            <span className="border border-off-white/20 px-3 py-2 font-mono text-label uppercase tracking-[0.12em] text-off-white">
              {B.team}
            </span>
          </div>
        </div>
        <a
          href="#projects"
          className="inline-flex min-h-11 self-start border-b border-dashed border-light-orange font-mono text-label uppercase tracking-[0.12em] text-off-white transition-colors hover:text-light-orange"
        >
          View the build →
        </a>
      </div>
    </article>
  );
}