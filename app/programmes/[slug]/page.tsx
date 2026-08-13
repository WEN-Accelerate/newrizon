import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import MissionPatch from "@/components/graphics/MissionPatch";
import { PatchIcon } from "@/components/PatchIcons";
import FAQ from "@/components/FAQ";
import { programmes } from "@/content/site";
import { asset } from "@/lib/asset";

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = programmes.find((m) => m.slug === slug);
  return { title: p ? p.name : "Programme" };
}

export default async function ProgrammePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = programmes.find((m) => m.slug === slug);
  if (!p) notFound();

  return (
    <>
      {/* Mission briefing header */}
      <section className="border-b border-line pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[240px_1fr]">
          <MissionPatch name={p.name} code={p.code} accent={p.accent} className="mx-auto w-56">
            <PatchIcon slug={p.slug} />
          </MissionPatch>
          <div>
            <p className="eyebrow text-saffron">Mission briefing · {p.code}</p>
            <h1 className="mt-3 text-4xl font-extrabold uppercase tracking-tight md:text-5xl">{p.name}</h1>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-teal">{p.vertical}</p>
            <p className="mt-4 max-w-xl text-lg text-comms">{p.objective}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1fr_360px]">
        <div className="space-y-14">
          <Reveal>
            <h2 className="text-2xl font-bold">The mission</h2>
            <p className="mt-4 text-comms">{p.description}</p>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-bold">Key initiatives</h2>
            <div className="mt-6 space-y-4">
              {p.initiatives.map((i, n) => (
                <div key={i.name} className="flex gap-4 rounded-lg border border-line bg-panel p-5">
                  <span className="font-mono text-sm text-saffron">{String(n + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-bold">{i.name}</h3>
                    <p className="mt-1 text-sm text-comms">{i.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-bold">From the field</h2>
            <blockquote className="mt-6 rounded-lg border-l-4 bg-panel p-6" style={{ borderColor: p.accent }}>
              <p className="font-bold">{p.story.title}</p>
              <p className="mt-2 text-sm text-comms">{p.story.body}</p>
              <footer className="mt-3 font-mono text-xs text-teal">{p.story.where}</footer>
            </blockquote>
          </Reveal>
          <Reveal>
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-line">
              <Image src={asset(p.photo)} alt={p.photoAlt} fill sizes="(max-width: 768px) 100vw, 640px" className="object-cover" />
            </div>
          </Reveal>
        </div>

        <aside className="h-fit space-y-4 rounded-lg border border-line bg-panel p-6 md:sticky md:top-24">
          <p className="eyebrow text-saffron">Fly this mission</p>
          <Link href="/join" className="block rounded-full bg-saffron px-6 py-3 text-center font-bold text-void transition-transform hover:scale-105">
            Join as Earthizen
          </Link>
          <Link href="/join" className="block rounded-full border border-line px-6 py-3 text-center font-bold hover:border-teal hover:text-teal">
            Partner a School
          </Link>
          <Link href="/donate" className="block rounded-full border border-line px-6 py-3 text-center font-bold hover:border-teal hover:text-teal">
            Sponsor via CSR
          </Link>
          <p className="text-xs text-comms">
            [Placeholder: intake dates and application forms go live with the programme calendar.]
          </p>
        </aside>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <FAQ
          items={[
            { q: `Who is ${p.name} for?`, a: `${p.vertical}. See Join the Movement for entry points for students, schools, and partners.` },
            { q: "What does it cost?", a: "Programmes are free for participating students and partner schools; delivery is funded by CSR partners and grants." },
            { q: "How do I bring it to my school?", a: "Use Partner a School on the Join page — the programmes team responds with an onboarding call. [Placeholder: confirm process.]" },
          ]}
        />
      </section>
    </>
  );
}
