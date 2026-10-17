import { About } from "@/sections/about/about";
import { Builds } from "@/sections/builds/builds";
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
      <main id="main" className="flex-1">
        <Hero />

        <About />
        <Events />
        <Builds />
        <People />
        <Gallery />
        <Partners />
        <Join />
      </main>
      <SiteFooter />
    </>
  );
}