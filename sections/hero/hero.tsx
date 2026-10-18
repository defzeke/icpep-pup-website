import { HeroScroll } from "./components/hero-scroll";
import { HeroVisual } from "./components/hero-visual";

export function Hero() {
  return (
    <HeroScroll>
      <div className="sticky top-0 min-h-svh overflow-hidden group-data-[animated=true]:h-svh">
        <div data-hero="wash" className="hero-wash absolute inset-0" aria-hidden="true" />
        <div className="iso-grid absolute inset-0" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[35svh] bg-linear-to-b from-transparent to-carbon"
        />

        <div className="relative z-1 mx-auto grid min-h-svh w-full max-w-7xl content-center items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-0 lg:px-8">
          <h1 className="sr-only">ICPEP.SE PUP MANILA</h1>

          <div data-hero="logo" className="flex justify-center">
            <HeroVisual />
          </div>

          <div className="grid gap-6 lg:pl-12">
            <p
              data-hero="name"
              aria-hidden="true"
              className="text-title font-bold tracking-tight text-white group-data-[animated=true]:[grid-area:1/1]"
            >
              ICPEP.SE PUP MANILA
            </p>
            <p
              data-hero="tagline"
              className="max-w-[18ch] self-center text-statement font-medium tracking-tight text-white group-data-[animated=true]:[grid-area:1/1]"
            >
              Connecting Passion, <span className="text-light-orange">Empowering Innovation</span>
            </p>
            <p
              data-hero="description"
              className="max-w-[34ch] self-center text-subheader text-off-white group-data-[animated=true]:[grid-area:1/1]"
            >
              A student-led organization dedicated to nurturing the skills, knowledge, and leadership
              of Computer Engineering students.
            </p>
          </div>
        </div>
      </div>
    </HeroScroll>
  );
}
