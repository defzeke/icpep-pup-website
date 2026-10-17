import type { ReactNode } from "react";

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`font-mono text-label uppercase tracking-[0.16em] text-light-orange ${className}`}
    >
      {children}
    </span>
  );
}

export function Marker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span aria-hidden="true" className={`font-mono text-label tabular-nums text-light-orange ${className}`}>
      {children}
    </span>
  );
}

export function Rule({
  tone = "carbon",
  className = "",
}: {
  tone?: "carbon" | "burgundy";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`border-t border-dashed ${
        tone === "burgundy" ? "border-burgundy" : "border-carbon"
      } ${className}`}
    />
  );
}