import Image from "next/image";
import { Label, Marker } from "@/components/ui/devices";
import { PLACEHOLDER_COPY } from "@/lib/placeholders";
import { markerOf } from "@/lib/sections";
import { TerminalBlock } from "./components/terminal-block";

const J = PLACEHOLDER_COPY.join;

export function Join() {
  return (
    <section id="join" className="bg-obsidian">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="relative grid items-center gap-10 overflow-hidden border border-carbon bg-carbon p-6 sm:p-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:p-16">
          <div className="iso-grid absolute inset-0" aria-hidden="true" />
          <div className="glow absolute -bottom-64 -right-32 h-[700px] w-[700px]" aria-hidden="true" />

          <div className="relative flex min-w-0 flex-col gap-7">
            <div className="flex items-center gap-4">
              <Marker>{markerOf("join")}</Marker>
              <Label>join.sh</Label>
            </div>

            <h2 className="text-display font-bold leading-none tracking-tight text-white">
              {J.headline}
              <br />
              <span className="font-mono text-[0.8em] tracking-tight text-crimson">
                {J.headlineAccent}
              </span>
            </h2>

            <p className="max-w-xl text-body text-off-white/80">{J.body}</p>

            <TerminalBlock />

            <div className="flex flex-wrap items-center gap-4 sm:gap-7">
              <a
                href="#join"
                className="inline-flex min-h-14 items-center bg-crimson px-7 font-mono text-label font-medium uppercase tracking-[0.12em] text-white transition hover:brightness-110"
              >
                [[ Join the Discord ]]
              </a>
              <a
                href="#join"
                className="inline-flex min-h-11 items-center border-b border-dashed border-light-orange font-mono text-label uppercase tracking-[0.12em] text-off-white transition-colors hover:text-light-orange"
              >
                Sign up as a member →
              </a>
            </div>
          </div>

          <Image
            src="/mascot/pixie-illustration.png"
            alt="Pixie the mascot leaping toward the join buttons"
            width={1229}
            height={1229}
            className="relative mx-auto h-auto w-full max-w-72 sm:max-w-sm lg:max-w-[460px]"
          />
        </div>
      </div>
    </section>
  );
}