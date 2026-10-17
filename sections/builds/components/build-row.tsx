import { PLACEHOLDER_COPY } from "@/lib/placeholders";

const B = PLACEHOLDER_COPY.build;

export function BuildRow({ index }: { index: number }) {
  return (
    <a
      href="#projects"
      className="row flex flex-wrap items-center gap-3 py-7 pl-2 transition-[background,padding] duration-200 hover:bg-crimson/10 hover:pl-5"
    >
      <span className="w-10 font-mono text-label text-off-white/60">
        {String(index).padStart(2, "0")}
      </span>
      <span className="flex-[1_1_300px] text-subheader font-bold tracking-tight text-white">
        {B.name}
      </span>
      <span className="flex-[0_1_180px] font-mono text-label uppercase tracking-[0.12em] text-off-white/80">
        {B.category}
      </span>
      <span className="flex-[0_1_200px] font-mono text-label uppercase tracking-[0.12em] text-off-white/80">
        {B.team}
      </span>
      <svg
        width="28"
        height="14"
        viewBox="0 0 28 14"
        aria-hidden="true"
        className="text-light-orange"
      >
        <path d="M0 7 H26 M20 1 L26 7 L20 13" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    </a>
  );
}