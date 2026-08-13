import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Placeholder from "@/components/Placeholder";
import Astronaut from "@/components/graphics/Astronaut";
import { timeline } from "@/content/site";

export const metadata: Metadata = { title: "The Ascent" };

const beats = [
  { phase: "T-MINUS YEARS", title: "[Hometown, India]", body: "[Story beat placeholder] A childhood of paper planes and night skies — and a school with no science lab.", media: "PHOTO · Childhood / hometown · 3:2" },
  { phase: "SELECTION", title: "The years of discipline", body: "[Story beat placeholder] Exams, flight school, a thousand small sacrifices nobody saw.", media: "PHOTO · Training years · 3:2" },
  { phase: "LAUNCH", title: "Ignition", body: "[Story beat placeholder] The morning the whole country looked up at once.", media: "PHOTO / VIDEO · Launch day · 16:9" },
  { phase: "ORBIT", title: "The overview effect", body: "[Story beat placeholder] From orbit, borders disappear and the atmosphere looks paper-thin. That view is where this foundation was born.", media: "PHOTO · Earth from orbit · 16:9" },
  { phase: "RETURN", title: "Bringing the stars home", body: "[Story beat placeholder] Re-entry is not the end of a mission. It is the start of the next one.", media: "PHOTO · Return / foundation launch event · 3:2" },
];

const crew = [
  ["[Founder name]", "Founder & Chief Explorer"],
  ["[Name]", "Executive Director"],
  ["[Name]", "Head of Missions"],
  ["[Name]", "Head of Partnerships"],
  ["[Name]", "Board Member"],
  ["[Name]", "Board Member"],
];

export default function StoryPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow text-saffron">Flight log · The founder&apos;s story</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold uppercase tracking-tight md:text-6xl" style={{ textWrap: "balance" }}>
              The Ascent
            </h1>
            <p className="mt-5 max-w-xl text-comms">
              [Intro placeholder] Every scholarship, lab, and launch day traces back to one journey —
              from a small town in India to orbit, and back with a promise.
            </p>
          </div>
          <div className="hidden w-44 animate-float md:block" aria-hidden="true">
            <Astronaut />
          </div>
        </div>
      </section>

      {/* Story beats */}
      <section className="mx-auto max-w-6xl space-y-20 px-6 py-24">
        {beats.map((b, i) => (
          <Reveal key={b.phase}>
            <div className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <p className="font-mono text-xs tracking-widest text-saffron">{b.phase}</p>
                <h2 className="mt-3 text-2xl font-bold md:text-3xl">{b.title}</h2>
                <p className="mt-4 max-w-md text-comms">{b.body}</p>
              </div>
              <Placeholder label={b.media} ratio={b.media.includes("16:9") ? "16/9" : "3/2"} />
            </div>
          </Reveal>
        ))}
      </section>

      {/* Timeline */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <SectionHeading eyebrow="Mission timeline" title="The flight log" />
          <ol className="mt-12 space-y-0 border-l border-line pl-8">
            {timeline.map((t) => (
              <li key={t.event} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-saffron bg-void" aria-hidden="true" />
                <p className="font-mono text-xs text-saffron">{t.year}</p>
                <p className="mt-1 text-star">{t.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Crew manifest */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Crew manifest" title="The people flying this thing" />
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
          {crew.map(([name, role], i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="rounded-lg border border-line bg-panel p-4">
                <Placeholder label={`PHOTO · ${role} · 1:1`} ratio="1/1" />
                <p className="mt-4 font-bold">{name}</p>
                <p className="text-sm text-comms">{role}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="eyebrow mt-10 !text-[10px] text-comms">
          [Governance placeholder — registration type, trustees, annual report links]
        </p>
      </section>
    </>
  );
}
