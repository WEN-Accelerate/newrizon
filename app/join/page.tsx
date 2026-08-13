import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import BoardingPass from "@/components/BoardingPass";
import Astronaut from "@/components/graphics/Astronaut";
import { audiences } from "@/content/site";

export const metadata: Metadata = { title: "Join the Movement" };

export default function JoinPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow text-saffron">Crew recruitment · Open</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold uppercase tracking-tight md:text-6xl" style={{ textWrap: "balance" }}>
              Join the movement
            </h1>
            <p className="mt-5 max-w-xl text-comms">
              Pick your door — student, school, mentor, or partner. Whichever you walk through, you
              board the same ship: one Earth, one crew.
            </p>
          </div>
          <div className="hidden w-44 animate-float md:block" aria-hidden="true">
            <Astronaut />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {audiences.map((a, i) => (
            <Reveal key={a.key} delay={i * 100}>
              <div className="flex h-full flex-col rounded-lg border border-line bg-panel p-8 transition-colors hover:border-teal">
                <p className="font-mono text-xs text-saffron">DOOR {String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 text-2xl font-bold">{a.title}</h2>
                <p className="mt-2 text-sm text-comms">{a.line}</p>
                <ul className="mt-5 flex-1 space-y-3">
                  {a.points.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-comms">
                      <span className="mt-0.5 text-teal" aria-hidden="true">✦</span> {d}
                    </li>
                  ))}
                </ul>
                <button className="mt-7 w-fit rounded-full bg-saffron px-6 py-3 text-sm font-bold text-void transition-transform hover:scale-105">
                  {a.action} →
                </button>
                <p className="eyebrow mt-3 !text-[9px] text-comms/60">[links to application form when live]</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Welcome aboard"
              title="Join anything, get your Earthizen Pass"
              lede="Sign up in any role — student, educator, mentor, partner — and receive a personalized boarding pass with your own crew number. Share it; every pass someone sees is another child who looks up."
            />
          </Reveal>
          <Reveal delay={150}>
            <BoardingPass className="rotate-1 transition-transform hover:rotate-0" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <p className="eyebrow text-saffron">One movement, many doors</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg italic leading-relaxed text-comms">
            “Every impact story begins with one school, one classroom, one child who decides to think
            like a planetary citizen.”
          </p>
        </Reveal>
      </section>
    </>
  );
}
