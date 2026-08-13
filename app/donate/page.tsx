"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Rocket from "@/components/graphics/Rocket";
import FAQ from "@/components/FAQ";

const tiers = [
  { amount: "₹500", monthly: "₹500/mo", impact: "[Impact placeholder] A month of lab consumables for one Prithvi classroom" },
  { amount: "₹2,500", monthly: "₹2,500/mo", impact: "[Impact placeholder] One student's full space-camp day, travel included" },
  { amount: "₹10,000", monthly: "₹10,000/mo", impact: "[Impact placeholder] A month of an Antariksh Scholar's stipend" },
];

const allocation = [
  { label: "Missions & programs", pct: 78 },
  { label: "Mission operations", pct: 14 },
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
          <p className="eyebrow text-saffron">Fuel the mission</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold uppercase tracking-tight md:text-6xl" style={{ textWrap: "balance" }}>
            Rockets don&apos;t run on hope
          </h1>
          <p className="mt-5 max-w-xl text-comms">
            [Placeholder framing line] Every rupee is fuel — priced in real impact, burned in the open, receipted for 80G.
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
              {m === "once" ? "One-time" : "Monthly crew"}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.amount} delay={i * 100}>
              <div className="flex h-full flex-col rounded-lg border border-line bg-panel p-8 transition-colors hover:border-saffron">
                <p className="text-4xl font-extrabold text-saffron">{mode === "once" ? t.amount : t.monthly}</p>
                <p className="mt-4 flex-1 text-sm text-comms">{t.impact}</p>
                <button className="mt-7 rounded-full bg-saffron px-6 py-3 font-bold text-void transition-transform hover:scale-105">
                  Fuel {mode === "once" ? "once" : "monthly"}
                </button>
                <p className="eyebrow mt-3 !text-[9px] text-comms/60">[Razorpay checkout when connected]</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-comms">
          Custom amount, CSR partnerships and in-kind support: <a href="/contact" className="text-teal hover:underline">open a channel</a>.
        </p>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <SectionHeading eyebrow="Where the fuel goes" title="Transparent burn" lede="[Placeholder split — replace with audited numbers]" />
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
        <SectionHeading eyebrow="Pre-flight checks" title="Donation questions" />
        <div className="mt-10">
          <FAQ
            items={[
              { q: "Is my donation tax-deductible?", a: "[Placeholder — confirm 80G] Yes, under Section 80G; receipts are emailed instantly." },
              { q: "Can I donate from outside India?", a: "[Placeholder — confirm FCRA status] International giving opens once FCRA registration is complete." },
              { q: "Can my company sponsor a specific mission?", a: "[Placeholder] Yes — missions can be sponsored individually, with co-branded patches and quarterly impact reporting." },
            ]}
          />
        </div>
      </section>
    </>
  );
}
