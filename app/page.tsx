import Link from "next/link";
import Image from "next/image";
import HeroOrbit from "@/components/HeroOrbit";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import SectionHeading from "@/components/SectionHeading";
import MissionPatch from "@/components/graphics/MissionPatch";
import Satellite from "@/components/graphics/Satellite";
import Constellation from "@/components/Constellation";
import FAQ from "@/components/FAQ";
import { PatchIcon } from "@/components/PatchIcons";
import { site, values, programmes, targets, roadmap, stories, faqs } from "@/content/site";
import { asset } from "@/lib/asset";

export default function Home() {
  return (
    <>
      <HeroOrbit />

      {/* Vision & Mission */}
      <section className="border-b border-line bg-panel">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-lg border border-line bg-panel2 p-8">
              <p className="eyebrow text-saffron">Vision</p>
              <p className="mt-4 text-lg leading-relaxed">{site.vision}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-lg border border-line bg-panel2 p-8">
              <p className="eyebrow text-teal">Mission</p>
              <p className="mt-4 text-lg leading-relaxed">{site.mission}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5 Core Values */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Transmission 01 · Core values"
          title="Five values, one identity: Earthizen"
          lede={`“${site.heroQuote}”`}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => (
            <Reveal key={v.name} delay={i * 80}>
              <div className="h-full rounded-lg border border-line bg-panel p-5 transition-colors hover:border-saffron">
                <p className="font-mono text-xs text-saffron">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-bold">{v.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-comms">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line">
              <Image
                src={asset("/photos/podium-address.jpg")}
                alt="Group Captain Shubhanshu Shukla addressing students at a space-education event"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow text-saffron">The spark behind Earthizen</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl" style={{ textWrap: "balance" }}>
              {site.founder}
            </h2>
            <blockquote className="mt-5 border-l-2 border-saffron pl-5 text-lg italic leading-relaxed text-star">
              “{site.founderQuote}”
            </blockquote>
            <p className="mt-5 text-comms">
              An Indian Air Force test pilot who became one of India&apos;s astronauts — and came back
              from orbit carrying one conviction: the next generation must learn to think like citizens
              of Earth.
            </p>
            <Link href="/story" className="mt-8 inline-block font-bold text-teal hover:underline">
              Read the full story →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Programme patch wall */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Transmission 02 · Programme verticals"
          title="Four missions. Four patches. One Earth."
          lede="Empowering youth through education, technology, community engagement, and future-focused innovation — each vertical carries its own mission patch in the ISRO tradition."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programmes.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <Link
                href={`/programmes/${p.slug}`}
                className="group block h-full rounded-lg border border-line bg-panel p-6 text-center transition-colors hover:border-saffron"
              >
                <MissionPatch
                  name={p.name}
                  code={p.code}
                  accent={p.accent}
                  className="mx-auto w-36 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
                >
                  <PatchIcon slug={p.slug} />
                </MissionPatch>
                <h3 className="mt-5 text-lg font-bold">{p.name}</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-teal">{p.vertical}</p>
                <p className="mt-3 text-sm text-comms">{p.objective}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Overview effect statement */}
      <section className="relative overflow-hidden border-y border-line bg-panel2">
        <div className="absolute right-8 top-10 hidden w-52 animate-float md:block" aria-hidden="true">
          <Satellite />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <Reveal>
            <p className="eyebrow text-saffron">The overview effect</p>
            <blockquote
              className="mt-6 text-3xl font-bold leading-snug md:text-5xl"
              style={{ textWrap: "balance" }}
            >
              “I looked down at Earth. I could not see any borders.{" "}
              <span className="text-saffron">Only one planet. Only one home.</span>”
            </blockquote>
            <p className="mt-6 font-mono text-sm text-comms">— {site.founder}, Founder</p>
          </Reveal>
        </div>
      </section>

      {/* Five-year targets */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Transmission 03 · Five-year targets"
          title="Ambitious goals. Measurable impact. One Earth at a time."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {targets.map((t, i) => (
            <Reveal key={t.label} delay={(i % 3) * 100}>
              <div className="h-full rounded-lg border border-line bg-panel p-6">
                <p className="text-4xl font-extrabold text-saffron">
                  <Counter to={t.value} suffix={t.suffix} />
                </p>
                <p className="mt-1 font-bold">{t.label}</p>
                <p className="mt-2 text-sm text-comms">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading eyebrow="Transmission 04 · Expansion roadmap" title="From Indian metros to a global movement" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {roadmap.map((r, i) => (
              <Reveal key={r.phase} delay={i * 120}>
                <div className="h-full rounded-lg border border-line bg-panel2 p-7">
                  <p className="eyebrow text-saffron">{r.phase}</p>
                  <p className="mt-2 font-mono text-xs text-teal">{r.when}</p>
                  <ul className="mt-5 space-y-2.5">
                    {r.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-comms">
                        <span className="mt-0.5 text-teal" aria-hidden="true">▸</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stories of change teaser */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Transmission 05 · Stories of change" title="Impact from the field" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.slice(0, 3).map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-lg border border-line bg-panel p-6">
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
        <Reveal>
          <Link href="/impact" className="mt-10 inline-block font-bold text-teal hover:underline">
            All stories in the Mission Log →
          </Link>
        </Reveal>
      </section>

      {/* Constellation teaser */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <Reveal>
            <Constellation className="mx-auto w-full max-w-md" />
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow text-saffron">The Constellation of Impact</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl" style={{ textWrap: "balance" }}>
              Every star is a school. Every line crosses a border.
            </h2>
            <p className="mt-5 text-comms">
              Every partner school, Community Lab, and Borderless Classroom becomes a star in a night
              sky over Earth — 1,000 schools by Year 3, and the sky keeps filling.
            </p>
            <Link href="/impact" className="mt-8 inline-block font-bold text-teal hover:underline">
              Open the Mission Log →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <SectionHeading eyebrow="Transmission 06 · Pre-flight checks" title="Frequently asked questions" />
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-line bg-panel2">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <Reveal>
            <p className="mx-auto max-w-2xl text-lg italic leading-relaxed text-comms">“{site.closingQuote}”</p>
            <h2 className="mt-10 text-4xl font-extrabold uppercase tracking-tight md:text-5xl" style={{ textWrap: "balance" }}>
              Become an <span className="text-saffron">Earthizen.</span>
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/join" className="rounded-full bg-saffron px-8 py-4 font-bold text-void transition-transform hover:scale-105">
                Join as Earthizen
              </Link>
              <Link href="/join" className="rounded-full border border-line px-8 py-4 font-bold hover:border-teal hover:text-teal">
                Partner a School
              </Link>
              <Link href="/donate" className="rounded-full border border-line px-8 py-4 font-bold hover:border-teal hover:text-teal">
                CSR &amp; Funding
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
