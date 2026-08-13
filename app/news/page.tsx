import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import { asset } from "@/lib/asset";

export const metadata: Metadata = { title: "Transmissions" };

const posts: { tag: string; title: string; date: string; photo?: string; alt?: string }[] = [
  {
    tag: "Announcement",
    title: "Earthizen Foundation launches: No Borders. One Earth. Infinite Futures.",
    date: "2026",
    photo: "/photos/press-interaction.jpg",
    alt: "Group Captain Shubhanshu Shukla speaking with national media",
  },
  {
    tag: "Field notes",
    title: "School outreach: bringing the Overview Effect to classrooms across India",
    date: "2026",
    photo: "/photos/school-visit.jpg",
    alt: "Students with the founder during a school visit",
  },
  {
    tag: "Field notes",
    title: "Community visits ground the Bridge programme in real village life",
    date: "2026",
    photo: "/photos/community-walk.jpg",
    alt: "A community welcome during a village visit",
  },
  { tag: "Announcement", title: "[Placeholder — Borderless Classroom Network pilot schools announced]", date: "[Date]" },
  { tag: "Press", title: "[Placeholder — media coverage roundup]", date: "[Date]" },
  { tag: "Announcement", title: "[Placeholder — One Earth Summit dates]", date: "[Date]" },
];

export default function NewsPage() {
  return (
    <>
      <section className="border-b border-line pt-16">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-saffron">Comms channel</p>
          <h1 className="mt-4 text-4xl font-extrabold uppercase tracking-tight md:text-6xl">Transmissions</h1>
          <p className="mt-5 max-w-xl text-comms">Dispatches from the movement: announcements, field notes, and press.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <article className="group cursor-pointer overflow-hidden rounded-lg border border-line bg-panel transition-colors hover:border-teal">
                {p.photo ? (
                  <div className="relative aspect-[16/9]">
                    <Image src={asset(p.photo)} alt={p.alt ?? p.title} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                ) : (
                  <div className="p-4 pb-0">
                    <Placeholder label="PHOTO · Article cover · 16:9" ratio="16/9" />
                  </div>
                )}
                <div className="p-4">
                  <p className="eyebrow !text-[10px] text-saffron">{p.tag} · {p.date}</p>
                  <h2 className="mt-2 font-bold group-hover:text-teal">{p.title}</h2>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
