import Image from "next/image";

export function PixieCard() {
  return (
    <article className="relative flex flex-wrap items-center gap-6 overflow-hidden border border-carbon bg-obsidian p-8 sm:p-12">
      <div className="glow absolute -right-16 -top-20 h-[520px] w-[520px] opacity-60" />
      <div className="relative flex flex-1 basis-[360px] flex-col gap-4">
        <span className="font-mono text-subheader font-bold text-white">ID // PIXIE</span>
        <span className="font-mono text-label uppercase tracking-[0.12em] text-light-orange">
          ROLE // OFFICIAL MASCOT
        </span>
        <p className="max-w-md text-body text-off-white/80">
          Headphones on, star badge up. Pixie shows up wherever the chapter does — posts, merch, and the occasional event booth.
        </p>
      </div>
      <Image
        src="/mascot/pixie-illustration.png"
        alt="Pixie, the official mascot of ICpEP SE – PUP Manila"
        width={1229}
        height={1229}
        className="relative h-auto w-full max-w-[360px]"
      />
    </article>
  );
}