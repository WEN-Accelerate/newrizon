import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = { title: "Transmissions" };

const posts = [
  { tag: "Announcement", title: "[News headline placeholder — first cohort announced]", date: "[Date]" },
  { tag: "Field notes", title: "[News headline placeholder — Prithvi lab #100 goes live]", date: "[Date]" },
  { tag: "Press", title: "[News headline placeholder — founder addresses the UN]", date: "[Date]" },
  { tag: "Field notes", title: "[News headline placeholder — watch-party in 12 districts]", date: "[Date]" },
  { tag: "Announcement", title: "[News headline placeholder — Postcards to Orbit opens]", date: "[Date]" },
  { tag: "Press", title: "[News headline placeholder — media coverage roundup]", date: "[Date]" },
];

export default function NewsPage() {
  return (
    <>
      <section className="border-b border-line pt-16">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-saffron">Comms channel</p>
          <h1 className="mt-4 text-4xl font-extrabold uppercase tracking-tight md:text-6xl">Transmissions</h1>
          <p className="mt-5 max-w-xl text-comms">Dispatches from orbit and the ground: announcements, field notes, and press.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <article className="group cursor-pointer rounded-lg border border-line bg-panel p-4 transition-colors hover:border-teal">
                <Placeholder label="PHOTO · Article cover · 16:9" ratio="16/9" />
                <p className="eyebrow mt-4 !text-[10px] text-saffron">{p.tag} · {p.date}</p>
                <h2 className="mt-2 font-bold group-hover:text-teal">{p.title}</h2>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
