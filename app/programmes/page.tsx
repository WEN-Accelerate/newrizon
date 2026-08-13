import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import MissionPatch from "@/components/graphics/MissionPatch";
import { PatchIcon } from "@/components/PatchIcons";
import { programmes } from "@/content/site";

export const metadata: Metadata = { title: "Programmes" };

export default function ProgrammesPage() {
  return (
    <>
      <section className="border-b border-line pt-16">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-saffron">Four programme verticals</p>
          <h1 className="mt-4 text-4xl font-extrabold uppercase tracking-tight md:text-6xl">
            Four missions, one Earth
          </h1>
          <p className="mt-5 max-w-2xl text-comms">
            Four interconnected pillars — each distinct, each essential — together forming a complete
            education for planetary citizenship. Each carries its own mission patch.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-20">
        {programmes.map((p) => (
          <Reveal key={p.slug}>
            <Link
              href={`/programmes/${p.slug}`}
              className="group grid items-center gap-8 overflow-hidden rounded-lg border border-line bg-panel p-8 transition-colors hover:border-saffron md:grid-cols-[190px_1fr_280px]"
            >
              <MissionPatch
                name={p.name}
                code={p.code}
                accent={p.accent}
                className="mx-auto w-40 transition-transform duration-300 group-hover:rotate-3"
              >
                <PatchIcon slug={p.slug} />
              </MissionPatch>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-teal">{p.vertical}</p>
                <h2 className="mt-2 text-2xl font-bold">{p.name}</h2>
                <p className="mt-2 max-w-xl text-comms">{p.objective}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.initiatives.map((i) => (
                    <li
                      key={i.name}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-wider text-comms"
                    >
                      {i.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative hidden aspect-[3/2] overflow-hidden rounded-md md:block">
                <Image
                  src={p.photo}
                  alt={p.photoAlt}
                  fill
                  sizes="280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
