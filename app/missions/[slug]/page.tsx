import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import MissionPatch from "@/components/graphics/MissionPatch";
import FAQ from "@/components/FAQ";
import { RocketIcon, BookIcon, SatIcon } from "@/components/PatchIcons";
import { missions } from "@/content/site";

const patchIcons = [<RocketIcon key="r" />, <BookIcon key="b" />, <SatIcon key="s" />];

export function generateStaticParams() {
  return missions.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const mission = missions.find((m) => m.slug === slug);
  return { title: mission ? mission.name : "Mission" };
}

export default async function MissionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = missions.findIndex((m) => m.slug === slug);
  if (idx === -1) notFound();
  const m = missions[idx];

  return (
    <>
      {/* Briefing header */}
      <section className="border-b border-line pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[240px_1fr]">
          <MissionPatch name={m.name} code={m.code} accent={m.accent} className="mx-auto w-56">
            {patchIcons[idx]}
          </MissionPatch>
          <div>
            <p className="eyebrow text-saffron">Mission briefing · {m.code}</p>
            <h1 className="mt-3 text-4xl font-extrabold uppercase tracking-tight md:text-5xl">{m.name}</h1>
            <p className="mt-4 max-w-xl text-lg text-comms">{m.objective}</p>
            <dl className="mt-8 grid max-w-xl grid-cols-2 gap-x-8 gap-y-4 font-mono text-sm sm:grid-cols-2">
              <div><dt className="eyebrow !text-[10px] text-comms">Crew</dt><dd className="mt-1 text-star">{m.audience}</dd></div>
              <div><dt className="eyebrow !text-[10px] text-comms">Duration</dt><dd className="mt-1 text-star">{m.duration}</dd></div>
              <div><dt className="eyebrow !text-[10px] text-comms">Cost</dt><dd className="mt-1 text-star">{m.cost}</dd></div>
              <div><dt className="eyebrow !text-[10px] text-comms">Status</dt><dd className="mt-1 text-teal">{m.status}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1fr_380px]">
        <div className="space-y-14">
          <Reveal>
            <h2 className="text-2xl font-bold">Why this mission exists</h2>
            <p className="mt-4 text-comms">{m.description}</p>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-bold">The mission plan</h2>
            <ol className="mt-6 space-y-4">
              {m.plan.map((step, i) => (
                <li key={i} className="flex gap-4 rounded-lg border border-line bg-panel p-4">
                  <span className="font-mono text-sm text-saffron">S-{i + 1}</span>
                  <span className="text-sm text-star">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-bold">Outcomes so far</h2>
            <ul className="mt-6 space-y-3">
              {m.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-sm text-comms">
                  <span className="mt-1 text-teal" aria-hidden="true">✦</span> {o}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <Placeholder label={`PHOTO GALLERY · ${m.name} in the field · 16:9`} ratio="16/9" />
          </Reveal>
        </div>

        <aside className="h-fit space-y-4 rounded-lg border border-line bg-panel p-6 md:sticky md:top-24">
          <p className="eyebrow text-saffron">Fly this mission</p>
          <Link href="/join" className="block rounded-full bg-saffron px-6 py-3 text-center font-bold text-void transition-transform hover:scale-105">
            Apply / Nominate
          </Link>
          <Link href="/donate" className="block rounded-full border border-line px-6 py-3 text-center font-bold hover:border-teal hover:text-teal">
            Sponsor this mission
          </Link>
          <p className="text-xs text-comms">
            [Placeholder: application window dates, eligibility notes, contact for schools]
          </p>
        </aside>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <FAQ
          items={[
            { q: `Who is ${m.name} for?`, a: `[Placeholder] ${m.audience}.` },
            { q: "What does it cost?", a: `[Placeholder] ${m.cost}.` },
            { q: "How do I apply?", a: "[Placeholder] Applications open through the Join the Crew page; schools can nominate directly." },
          ]}
        />
      </section>
    </>
  );
}
