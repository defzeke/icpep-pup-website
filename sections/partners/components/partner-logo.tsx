export function PartnerLogo({ sponsor }: { sponsor: boolean }) {
  return (
    <li className="flex aspect-[3/2] items-center justify-center bg-obsidian font-mono text-label uppercase tracking-[0.14em] text-off-white/60">
      {sponsor ? "[Sponsor logo]" : "[Partner logo]"}
    </li>
  );
}