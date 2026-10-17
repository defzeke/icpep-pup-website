export function AdviserCard({ code, role }: { code: string; role: string }) {
  return (
    <article className="flex flex-1 basis-[250px] flex-col gap-4">
      <div className="hatch relative aspect-[4/5] border border-carbon p-3.5">
        <span className="font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
          [Portrait]
        </span>
        <span className="absolute bottom-3.5 right-3.5 font-mono text-label tracking-[0.14em] text-light-orange">
          {code}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="font-mono text-label font-bold text-white">ID // [Name]</span>
        <span className="font-mono text-label uppercase tracking-[0.12em] text-light-orange">
          {role}
        </span>
      </div>
    </article>
  );
}