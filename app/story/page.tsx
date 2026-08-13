import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Placeholder from "@/components/Placeholder";
import Astronaut from "@/components/graphics/Astronaut";
import { site, values, team, legalCards } from "@/content/site";

export const metadata: Metadata = { title: "About — The Spark Behind Earthizen" };

const beats = [
  {
    phase: "T-MINUS YEARS",
    title: "Lucknow, India",
    body: "[Story beat placeholder — childhood detail to confirm] Long before the flight suit: a boy in Uttar Pradesh looking up at a sky that seemed to belong to other countries.",
    media: { placeholder: "PHOTO · Childhood / hometown · 3:2" },
  },
  {
    phase: "SELECTION",
    title: "The Indian Air Force years",
    body: "Test pilot. Group Captain. A career of discipline measured in flight hours — and the selection that put an Indian back on the road to space.",
    media: { photo: "/photos/press-interaction.jpg", alt: "Group Captain Shubhanshu Shukla speaking with national media" },
  },
  {
    phase: "ORBIT",
    title: "The mission",
    body: "From the launch pad to the space station: India watching one of its own live and work in orbit.",
    media: { photo: "/photos/orbit-earth.jpg", alt: "Earth's limb and station solar arrays photographed from orbit" },
  },
  {
    phase: "THE OVERVIEW",
    title: "No borders. Only one home.",
    body: `“${site.founderQuote}” The overview effect is not a metaphor — it is the founding moment of this foundation.`,
    media: { photo: "/photos/podium-address.jpg", alt: "The founder addressing students at a space-education event" },
  },
  {
    phase: "RETURN",
    title: "Bringing the view back down",
    body: "Re-entry was not the end of the mission. In classrooms, village squares, and school courtyards across India, the next one began: raising a generation of Earthizens.",
    media: { photo: "/photos/school-visit.jpg", alt: "The founder with students during a school visit" },
  },
];

export default function StoryPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow text-saffron">About us · The spark behind Earthizen</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold uppercase tracking-tight md:text-6xl" style={{ textWrap: "balance" }}>
              One view changed everything
            </h1>
            <p className="mt-5 max-w-xl text-comms">
              Every number, programme, and partnership here traces back to one moment in orbit — and
              one decision about what to do with it.
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
              {"photo" in b.media ? (
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-line">
                  <Image src={b.media.photo!} alt={b.media.alt!} fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover" />
                </div>
              ) : (
                <Placeholder label={b.media.placeholder!} ratio="3/2" />
              )}
            </div>
          </Reveal>
        ))}
      </section>

      {/* Vision & Mission full */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading eyebrow="Vision & Mission" title="What we are building" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-lg border border-line bg-panel2 p-8">
                <p className="eyebrow text-saffron">Vision</p>
                <p className="mt-4 leading-relaxed text-star">{site.visionFull}</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-lg border border-line bg-panel2 p-8">
                <p className="eyebrow text-teal">Mission</p>
                <p className="mt-4 leading-relaxed text-star">{site.missionFull}</p>
              </div>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <Reveal key={v.name} delay={i * 60}>
                <div className="h-full rounded-lg border border-line bg-panel2 p-4">
                  <p className="font-mono text-[10px] text-saffron">{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-1 text-sm font-bold">{v.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The people */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="The people behind it" title="Team & leadership" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {team.governance.map((g) => (
            <Reveal key={g.name}>
              <div className="rounded-lg border border-line bg-panel p-6">
                <p className="eyebrow !text-[10px] text-saffron">Governance</p>
                <h3 className="mt-2 text-lg font-bold">{g.name}</h3>
                <p className="mt-1 text-sm text-comms">{g.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {team.executive.map((e, i) => (
            <Reveal key={e.role} delay={i * 80}>
              <div className="rounded-lg border border-line bg-panel p-6">
                <p className="eyebrow !text-[10px] text-teal">Executive management</p>
                <h3 className="mt-2 font-bold">{e.name}</h3>
                <p className="mt-1 text-sm text-comms">{e.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Legal & registration */}
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading eyebrow="Legal & registration" title="Registered & compliant" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {legalCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="h-full rounded-lg border border-line bg-panel2 p-7">
                  <h3 className="font-bold">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-comms">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
