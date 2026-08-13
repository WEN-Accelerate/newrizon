"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Rocket from "@/components/graphics/Rocket";
import FAQ from "@/components/FAQ";

const tiers = [
  { amount: "₹[X]", monthly: "₹[X]/mo", impact: "[Impact placeholder] Fund a Future Earth Explorers Club at one school for a term" },
  { amount: "₹[X]", monthly: "₹[X]/mo", impact: "[Impact placeholder] Put one student through a six-week Code the Future bootcamp" },
  { amount: "₹[X]", monthly: "₹[X]/mo", impact: "[Impact placeholder] Launch a Community Lab that takes on one real local problem" },
];

const allocation = [
  { label: "Programmes & schools", pct: 78 },
  { label: "Operations", pct: 14 },
  { label: "Fundraising", pct: 8 },
];

export default function DonatePage() {
  const [mode, setMode] = useState<"once" | "monthly">("once");
  return (
    <>
      <section className="relative overflow-hidden border-b border-line pt-16">
        <div className="absolute -right-4 top-8 hidden w-24 opacity-80 md:block" aria-hidden="true">
          <Rocket />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-saffron">CSR &amp; Funding</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold uppercase tracking-tight md:text-6xl" style={{ textWrap: "balance" }}>
            Fund the next 1,000 schools
          </h1>
          <p className="mt-5 max-w-xl text-comms">
            Every rupee is fuel for a classroom. All contributions are CSR-eligible under Schedule VII
            of the Companies Act, 2013 — education, skill development, and environmental sustainability.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 inline-flex rounded-full border border-line bg-panel p-1" role="tablist" aria-label="Donation frequency">
          {(["once", "monthly"] as const).map((m) => (
            <button
              key={m}
              role="tab"
              aria-selected={mode === m}
              onClick={() => setMode(m)}
              className={`rounded-full px-6 py-2 text-sm font-bold transition-colors ${
                mode === m ? "bg-saffron text-void" : "text-comms hover:text-star"
              }`}
            >
              {m === "once" ? "One-time" : "Monthly"}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="flex h-full flex-col rounded-lg border border-line bg-panel p-8 transition-colors hover:border-saffron">
                <p className="text-4xl font-extrabold text-saffron">{mode === "once" ? t.amount : t.monthly}</p>
                <p className="mt-4 flex-1 text-sm text-comms">{t.impact}</p>
                <button className="mt-7 rounded-full bg-saffron px-6 py-3 font-bold text-void transition-transform hover:scale-105">
                  Contribute {mode === "once" ? "once" : "monthly"}
                </button>
                <p className="eyebrow mt-3 !text-[9px] text-comms/60">[Razorpay checkout when connected]</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-comms">
          CSR partnerships, chapter sponsorships, and in-kind support:{" "}
          <a href="/contact" className="text-teal hover:underline">open a channel</a>.
        </p>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <SectionHeading
            eyebrow="Where the fuel goes"
            title="Transparent burn"
            lede="[Placeholder split — replaced by audited numbers from the first reporting cycle]"
          />
          <div className="mt-12 space-y-6">
            {allocation.map((a) => (
              <div key={a.label}>
                <div className="mb-2 flex justify-between text-sm">
                  <span>{a.label}</span>
                  <span className="font-mono text-saffron">{a.pct}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-void">
                  <div className="h-full rounded-full bg-gradient-to-r from-saffron-deep to-saffron" style={{ width: `${a.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <SectionHeading eyebrow="Pre-flight checks" title="Funding questions" />
        <div className="mt-10">
          <FAQ
            items={[
              { q: "Are contributions CSR-eligible?", a: "Yes — the foundation is a Section 8 company, and contributions fall under Schedule VII of the Companies Act, 2013: education, skill development, and environmental sustainability." },
              { q: "Is there 80G tax benefit for individuals?", a: "[Placeholder — confirm 80G registration status before publishing this answer.]" },
              { q: "Can my company sponsor a specific programme or city?", a: "Yes — verticals (Orbit, Nexus, Bridge, Cosmos) and city chapters can be sponsored individually, with co-branded reporting and quarterly partner briefings." },
              { q: "How do I see what my contribution achieved?", a: "Annual impact reports, audited financials, and quarterly partner briefings — full transparency on how every rupee is deployed." },
            ]}
          />
        </div>
      </section>
    </>
  );
}
