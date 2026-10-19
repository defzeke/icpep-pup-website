import Image from "next/image";

const LABEL =
  "absolute font-mono text-label uppercase tracking-[0.14em] text-off-white/80 border-light-orange";

export function HeroVisual() {
  return (
    <div
      data-hero="visual"
      className="relative flex min-h-80 w-full max-w-160 items-center justify-center lg:min-h-[480px]"
    >
      <div data-intro-target className="relative flex w-full items-center justify-center">
        <div className="glow absolute inset-[6%_4%]" aria-hidden="true" />
        <Image
          src="/logos/icpep-hero-glow.png"
          alt=""
          width={658}
          height={607}
          priority
          className="float-logo relative h-auto w-full max-w-[540px]"
        />
        <span data-hero="label" className={`float-layer-a left-0 top-[8%] border-l pl-2.5 ${LABEL}`}>
          Layer 01 // Silicon
        </span>
        <span data-hero="label" className={`float-layer-a right-0 -bottom-6 border-r pr-2.5 ${LABEL}`}>
          Layer 02 // Syntax
        </span>
        <span data-hero="label" className={`float-layer-b right-0 top-[18%] border-r pr-2.5 ${LABEL}`}>
          Layer 03 // Networks
        </span>
        <span data-hero="label" className={`float-layer-b left-0 -bottom-14 border-l pl-2.5 sm:-bottom-6 ${LABEL}`}>
          Layer 04 // Security
        </span>
      </div>
    </div>
  );
}
