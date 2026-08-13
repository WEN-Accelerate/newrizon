import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import SectionHeading from "@/components/SectionHeading";
import Placeholder from "@/components/Placeholder";
import Constellation from "@/components/Constellation";
import { stats, timeline } from "@/content/site";

export const metadata: Metadata = { title: "Mission Log" };

export default function ImpactPage() {
  return (
    <>
      <section className="border-b border-line pt-16">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-saffron">Mission log</p>
          <h1 className="mt-4 text-4xl font-extrabold uppercase tracking-tight md:text-6xl">The evidence</h1>
          <p className="mt-5 max-w-xl text-comms">
            Impact, logged like telemetry: live numbers, a growing constellation, and every audited report in the open.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="rounded-lg border border-line bg-panel p-6 text-center">
                <p className="text-4xl font-extrabold text-saffron md:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-comms">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="The Constellation of Impact"
              title="A night sky over India, filling star by star"
              lede="[Placeholder — becomes an interactive map] Every partner school, funded scholar, and camp is a star; constellations form by state and mission. Filter by year and program when the data pipeline lands."
            />
          </Reveal>
          <Reveal delay={150}>
            <Constellation className="mx-auto w-full max-w-md" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Story spotlights" title="Three stories from the log" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {["Scholar spotlight", "School spotlight", "Teacher spotlight"].map((s, i) => (
            <Reveal key={s} delay={i * 120}>
              <div className="rounded-lg border border-line bg-panel p-4">
                <Placeholder label={`PHOTO · ${s} · 4:3`} ratio="4/3" />
                <h3 className="mt-4 font-bold">[{s} headline]</h3>
                <p className="mt-2 text-sm text-comms">[Story placeholder — 2–3 sentences of a real human story.]</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <SectionHeading eyebrow="Flight log" title="Milestones, year by year" />
          <ol className="mt-12 border-l border-line pl-8">
            {timeline.map((t) => (
              <li key={t.event} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-teal bg-void" aria-hidden="true" />
                <p className="font-mono text-xs text-saffron">{t.year}</p>
                <p className="mt-1 text-star">{t.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <SectionHeading
          eyebrow="Transparency locker"
          title="Every rupee, on the record"
          lede="[Placeholder — attach real PDFs] Annual reports, audited financials, and registration documents."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {["Annual Report [Year]", "Audited Financials [Year]", "80G Certificate"].map((doc) => (
            <a
              key={doc}
              href="#"
              className="rounded-lg border border-line bg-panel p-5 text-sm font-bold transition-colors hover:border-saffron"
            >
              📄 {doc}
              <span className="eyebrow mt-2 block !text-[9px] text-comms">PDF · placeholder</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
