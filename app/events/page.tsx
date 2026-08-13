import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Satellite from "@/components/graphics/Satellite";

export const metadata: Metadata = { title: "Events" };

const events = [
  { code: "EV-01", name: "[Launch watch-party placeholder]", where: "[City / Online]", when: "[Date]" },
  { code: "EV-02", name: "[District space camp placeholder]", where: "[District]", when: "[Date]" },
  { code: "EV-03", name: "[Annual Scholars' Summit placeholder]", where: "[Venue]", when: "[Date]" },
];

export default function EventsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line pt-16">
        <div className="absolute right-8 top-16 hidden w-48 animate-float md:block" aria-hidden="true">
          <Satellite />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-saffron">Mission operations</p>
          <h1 className="mt-4 text-4xl font-extrabold uppercase tracking-tight md:text-6xl">Upcoming operations</h1>
          <p className="mt-5 max-w-xl text-comms">Watch-parties, camps, and summits — every event runs like a mission, countdown included.</p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-5 px-6 py-20">
        {events.map((e, i) => (
          <Reveal key={e.code} delay={i * 100}>
            <div className="flex flex-wrap items-center gap-6 rounded-lg border border-line bg-panel p-6">
              <span className="font-mono text-sm text-saffron">{e.code}</span>
              <div className="min-w-48 flex-1">
                <h2 className="font-bold">{e.name}</h2>
                <p className="text-sm text-comms">{e.where} · {e.when}</p>
              </div>
              <span className="font-mono text-xs tracking-widest text-teal">T-MINUS [—d —h]</span>
              <button className="rounded-full border border-line px-5 py-2 text-sm font-bold hover:border-saffron hover:text-saffron">
                Reserve a seat
              </button>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
