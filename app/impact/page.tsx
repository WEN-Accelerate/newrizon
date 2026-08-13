import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import SectionHeading from "@/components/SectionHeading";
import Constellation from "@/components/Constellation";
import { targets, stories, roadmap } from "@/content/site";

export const metadata: Metadata = { title: "Impact — Mission Log" };

export default function ImpactPage() {
  return (
    <>
      <section className="border-b border-line pt-16">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-saffron">Mission log</p>
          <h1 className="mt-4 text-4xl font-extrabold uppercase tracking-tight md:text-6xl">
            Learning that changes things
          </h1>
          <p className="mt-5 max-w-xl text-comms">
            Every number here is a student who thought differently, a community that changed, a border
            that dissolved a little.
          </p>
        </div>
      </section>

      {/* Five-year targets */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Five-year targets" title="The scale we're building" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {targets.map((t, i) => (
            <Reveal key={t.label} delay={(i % 3) * 100}>
              <div className="h-full rounded-lg border border-line bg-panel p-6">
                <p className="text-4xl font-extrabold text-saffron md:text-5xl">
                  <Counter to={t.value} suffix={t.suffix} />
                </p>
                <p className="mt-1 font-bold">{t.label}</p>
                <p className="mt-2 text-sm text-comms">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Constellation */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="The Constellation of Impact"
              title="A night sky filling star by star"
              lede="[Becomes an interactive map as data lands] Every partner school, Community Lab, and Borderless Classroom is a star; constellations form by region and programme."
            />
          </Reveal>
          <Reveal delay={150}>
            <Constellation className="mx-auto w-full max-w-md" />
          </Reveal>
        </div>
      </section>

      {/* Stories of change */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Stories of change" title="Impact from the field" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <figure className="flex h-full flex-col rounded-lg border border-line bg-panel p-6 transition-colors hover:border-teal">
                <p className="font-mono text-[10px] uppercase tracking-widest text-saffron">{s.programme}</p>
                <blockquote className="mt-3 flex-1">
                  <p className="font-bold">{s.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-comms">{s.body}</p>
                </blockquote>
                <figcaption className="mt-4 border-t border-line pt-3 font-mono text-xs text-teal">
                  {s.where}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Roadmap as flight log */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <SectionHeading eyebrow="Flight plan" title="The expansion roadmap" />
          <ol className="mt-12 border-l border-line pl-8">
            {roadmap.map((r) => (
              <li key={r.phase} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-saffron bg-void" aria-hidden="true" />
                <p className="font-mono text-xs text-saffron">{r.phase} · {r.when}</p>
                <ul className="mt-3 space-y-1.5">
                  {r.items.map((item) => (
                    <li key={item} className="text-sm text-comms">▸ {item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Transparency locker */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <SectionHeading
          eyebrow="Transparency & reporting"
          title="Every rupee, on the record"
          lede="Annual impact reports, audited financials, and quarterly partner briefings — full transparency on how every rupee is deployed. [Documents attach here as they are published.]"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {["Annual Impact Report", "Audited Financials", "Registration Documents"].map((doc) => (
            <a
              key={doc}
              href="#"
              className="rounded-lg border border-line bg-panel p-5 text-sm font-bold transition-colors hover:border-saffron"
            >
              📄 {doc}
              <span className="eyebrow mt-2 block !text-[9px] text-comms">PDF · publishes with first reporting cycle</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
