import Image from "next/image";

export function HeroVisual() {
  return (
    <div
      data-hero="visual"
      className="relative flex min-h-80 w-full max-w-160 items-center justify-center lg:min-h-[480px]"
    >
      <div className="glow absolute inset-[6%_4%]" aria-hidden="true" />
      <Image
        src="/logos/icpep-hero-glow.png"
        alt=""
        width={1024}
        height={1024}
        priority
        className="relative h-auto w-full max-w-[540px]"
      />
      <span
        data-hero="label"
        className="absolute left-0 top-[8%] border-l border-light-orange pl-2.5 font-mono text-label uppercase tracking-[0.14em] text-off-white/80"
      >
        Layer 01 // Silicon
      </span>
      <span
        data-hero="label"
        className="absolute bottom-[10%] right-0 border-r border-light-orange pr-2.5 font-mono text-label uppercase tracking-[0.14em] text-off-white/80"
      >
        Layer 02 // Syntax
      </span>
    </div>
  );
}
