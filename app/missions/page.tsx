import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import MissionPatch from "@/components/graphics/MissionPatch";
import { RocketIcon, BookIcon, SatIcon } from "@/components/PatchIcons";
import { missions } from "@/content/site";

export const metadata: Metadata = { title: "Missions" };

const patchIcons = [<RocketIcon key="r" />, <BookIcon key="b" />, <SatIcon key="s" />];

export default function MissionsPage() {
  return (
    <>
      <section className="border-b border-line pt-16">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-saffron">Mission board</p>
          <h1 className="mt-4 text-4xl font-extrabold uppercase tracking-tight md:text-6xl">Active missions</h1>
          <p className="mt-5 max-w-xl text-comms">
            Not programs. Missions — each with an objective, a crew, and a patch. Which one is yours?
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-20">
        {missions.map((m, i) => (
          <Reveal key={m.slug}>
            <Link
              href={`/missions/${m.slug}`}
              className="group grid items-center gap-8 rounded-lg border border-line bg-panel p-8 transition-colors hover:border-saffron md:grid-cols-[200px_1fr_auto]"
            >
              <MissionPatch
                name={m.name}
                code={m.code}
                accent={m.accent}
                className="mx-auto w-40 transition-transform duration-300 group-hover:rotate-3"
              >
                {patchIcons[i]}
              </MissionPatch>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-bold">{m.name}</h2>
                  <span className="rounded-full border border-teal px-3 py-0.5 font-mono text-[10px] tracking-widest text-teal">
                    {m.status.toUpperCase()}
                  </span>
                </div>
                <p className="mt-2 max-w-xl text-comms">{m.objective}</p>
                <p className="mt-3 font-mono text-xs text-comms/70">
                  CREW: {m.audience} · DURATION: {m.duration} · COST: {m.cost}
                </p>
              </div>
              <span className="hidden text-2xl text-saffron transition-transform group-hover:translate-x-1 md:block" aria-hidden="true">
                →
              </span>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
