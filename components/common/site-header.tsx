"use client";

import { useScrolled } from "@/hooks/use-scrolled";

export function SiteHeader() {
  const scrolled = useScrolled(48);

  return (
    <header
      id="top"
      data-scrolled={scrolled}
      data-intro-reveal="true"
      className="group fixed inset-x-0 top-0 z-50 h-[120px] transition-[height,background-color,border-color,backdrop-filter] duration-[var(--duration-base)] ease-out motion-reduce:transition-none data-[scrolled=true]:h-16 data-[scrolled=true]:border-b data-[scrolled=true]:border-carbon data-[scrolled=true]:bg-obsidian/80 data-[scrolled=true]:backdrop-blur-md"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-10 focus:bg-light-orange focus:px-4 focus:py-2 focus:font-medium focus:text-label focus:uppercase focus:tracking-[0.16em] focus:text-obsidian"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-mono text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-none tracking-tight text-off-white transition-[font-size] duration-[var(--duration-base)] ease-out motion-reduce:transition-none group-data-[scrolled=true]:text-lg"
        >
          ICPEP.SE PUP
        </a>
      </div>
    </header>
  );
}