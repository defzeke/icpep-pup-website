import { About } from "@/sections/about/about";
import { Events } from "@/sections/events/events";
import { Gallery } from "@/sections/gallery/gallery";
import { Hero } from "@/sections/hero/hero";
import { Join } from "@/sections/join/join";
import { Partners } from "@/sections/partners/partners";
import { People } from "@/sections/people/people";
import { SiteFooter } from "@/components/common/site-footer";
import { SiteHeader } from "@/components/common/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main
        id="main"
        className="relative z-10 flex-1 bg-obsidian shadow-[0_32px_64px_-16px_rgba(8,4,6,0.9)]"
      >
        <Hero />

        <About />
        <Events />
        <People />
        <Gallery />
        <Partners />
        <Join />
      </main>
      <SiteFooter />
    </>
  );
}