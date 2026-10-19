import Image from "next/image";

export type Partner = {
  name: string;
  logo: string;
  width: number;
  height: number;
  tier: string;
};

// Logos sit on an Off-white tile in their own colours — recolouring a partner's mark needs their
// permission (docs/sections/partners-sponsors/README.md §5), and a dark mark vanishes on Obsidian.
// Width grows with the square root of the aspect ratio, so a tall mark and a long wordmark cover
// a similar area instead of the wordmark shrinking to a sliver; 80% is the widest any may go.
export function PartnerLogo({ partner }: { partner: Partner }) {
  const width = Math.min(80, 38 * Math.sqrt(partner.width / partner.height));

  return (
    <li className="flex flex-col gap-3">
      <div className="flex aspect-[3/2] items-center justify-center rounded-2xl bg-off-white">
        <Image
          src={`/logos/${partner.logo}`}
          alt=""
          width={partner.width}
          height={partner.height}
          sizes="(min-width: 768px) 20rem, 80vw"
          className="h-auto"
          style={{ width: `${width}%` }}
        />
      </div>
      <p className="flex items-baseline justify-between gap-4 font-mono text-label uppercase tracking-[0.14em]">
        <span className="font-bold text-white">{partner.name}</span>
        <span className="text-light-orange">{partner.tier}</span>
      </p>
    </li>
  );
}
