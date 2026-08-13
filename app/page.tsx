import Link from "next/link";
import HeroOrbit from "@/components/HeroOrbit";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import SectionHeading from "@/components/SectionHeading";
import Placeholder from "@/components/Placeholder";
import MissionPatch from "@/components/graphics/MissionPatch";
import Satellite from "@/components/graphics/Satellite";
import Constellation from "@/components/Constellation";
import FAQ from "@/components/FAQ";
import { RocketIcon, BookIcon, SatIcon } from "@/components/PatchIcons";
import { missions, stats, audiences, testimonials, faqs } from "@/content/site";

const patchIcons = [<RocketIcon key="r" />, <BookIcon key="b" />, <SatIcon key="s" />];

export default function Home() {
  return (
    <>
      <HeroOrbit />
      <Marquee />

      {/* Foundation in numbers */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Transmission 01 · In numbers" title="A constellation, growing" />
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="rounded-lg border border-line bg-panel p-6">
                <p className="text-4xl font-extrabold text-saffron md:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-comms">{s.label}</p>
                <p className="eyebrow mt-1 !text-[9px] text-comms/50">[placeholder figure]</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <Reveal>
            <Placeholder label="PHOTO · Founder portrait in flight suit · 4:5" ratio="4/5" />
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow text-saffron">The founder</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl" style={{ textWrap: "balance" }}>
              From a small town in India to the top of a rocket.
            </h2>
            <p className="mt-5 text-comms">
              [Founder hook placeholder — two sentences.] An ordinary childhood, years of discipline,
              and one launch that changed what a generation believes is possible. Then, from orbit,
              a promise: bring the stars home.
            </p>
            <Link href="/story" className="mt-8 inline-block font-bold text-teal hover:underline">
              Read the Ascent →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Patch wall teaser */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Transmission 02 · Active missions"
          title="Programs are missions. Missions have patches."
          lede="In the NASA/ISRO tradition, every program carries its own embroidered patch. Pick yours."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {missions.map((m, i) => (
            <Reveal key={m.slug} delay={i * 120}>
              <Link
                href={`/missions/${m.slug}`}
                className="group block rounded-lg border border-line bg-panel p-8 text-center transition-colors hover:border-saffron"
              >
                <MissionPatch
                  name={m.name}
                  code={m.code}
                  accent={m.accent}
                  className="mx-auto w-44 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
                >
                  {patchIcons[i]}
                </MissionPatch>
                <h3 className="mt-6 text-lg font-bold">{m.name}</h3>
                <p className="mt-2 text-sm text-comms">{m.objective}</p>
                <p className="eyebrow mt-4 !text-[10px] text-teal">{m.status}</p>
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
              “From up there, you can’t see borders.{" "}
              <span className="text-saffron">You can only see how much there is to do.</span>”
            </blockquote>
            <p className="mt-6 font-mono text-sm text-comms">— [Founder name] · [placeholder quote]</p>
          </Reveal>
        </div>
      </section>

      {/* Who's aboard */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Transmission 03 · Who's aboard"
          title="Every mission needs a crew. Which seat is yours?"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <Reveal key={a.key} delay={i * 100}>
              <Link
                href="/join"
                className="group flex h-full flex-col rounded-lg border border-line bg-panel p-6 transition-colors hover:border-teal"
              >
                <p className="font-mono text-xs text-saffron">SEAT {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg font-bold">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm text-comms">{a.line}</p>
                <p className="mt-5 text-sm font-bold text-teal group-hover:underline">{a.action} →</p>
              </Link>
            </Reveal>
          ))}
        </div>
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
              Every star is a school. Every line is a story.
            </h2>
            <p className="mt-5 text-comms">
              Each school reached, scholar funded, and camp launched becomes a star in a night sky
              over India — and the sky keeps filling. Watch it grow in the Mission Log.
            </p>
            <Link href="/impact" className="mt-8 inline-block font-bold text-teal hover:underline">
              Open the Mission Log →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Transmission 04 · Crew reports" title="Voices from the ground" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-lg border border-line bg-panel p-6">
                <blockquote className="flex-1 text-sm leading-relaxed text-star">“{t.quote}”</blockquote>
                <figcaption className="mt-5 border-t border-line pt-4">
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-comms">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <SectionHeading eyebrow="Transmission 05 · Pre-flight checks" title="Frequently asked questions" />
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-line bg-panel2">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="text-4xl font-extrabold uppercase tracking-tight md:text-5xl" style={{ textWrap: "balance" }}>
              Every mission needs <span className="text-saffron">a crew.</span>
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/join" className="rounded-full bg-saffron px-8 py-4 font-bold text-void transition-transform hover:scale-105">
                Join the Crew
              </Link>
              <Link href="/donate" className="rounded-full border border-line px-8 py-4 font-bold hover:border-teal hover:text-teal">
                Fuel the Mission
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
