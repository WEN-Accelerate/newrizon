"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="border-b border-line pt-16">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-saffron">Comms</p>
          <h1 className="mt-4 text-4xl font-extrabold uppercase tracking-tight md:text-6xl">Open a channel</h1>
          <p className="mt-5 max-w-xl text-comms">Schools, press, CSR partners, future Earthizens — all frequencies monitored.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1fr_320px]">
        {sent ? (
          <div className="rounded-lg border border-teal bg-panel p-10 text-center">
            <p className="font-mono text-lg text-teal">▸ TRANSMISSION RECEIVED.</p>
            <p className="mt-3 text-comms">We&apos;ll respond within [X] working days. Keep watching the sky.</p>
          </div>
        ) : (
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="eyebrow !text-[10px] text-comms">Name</span>
                <input required className="mt-2 w-full rounded-md border border-line bg-panel px-4 py-3 text-sm focus:border-teal focus:outline-none" />
              </label>
              <label className="block">
                <span className="eyebrow !text-[10px] text-comms">Email</span>
                <input type="email" required className="mt-2 w-full rounded-md border border-line bg-panel px-4 py-3 text-sm focus:border-teal focus:outline-none" />
              </label>
            </div>
            <label className="block">
              <span className="eyebrow !text-[10px] text-comms">I am a…</span>
              <select className="mt-2 w-full rounded-md border border-line bg-panel px-4 py-3 text-sm focus:border-teal focus:outline-none">
                <option>Student</option>
                <option>Educator / School</option>
                <option>Volunteer</option>
                <option>Partner / CSR</option>
                <option>Press</option>
              </select>
            </label>
            <label className="block">
              <span className="eyebrow !text-[10px] text-comms">Message</span>
              <textarea required rows={5} className="mt-2 w-full rounded-md border border-line bg-panel px-4 py-3 text-sm focus:border-teal focus:outline-none" />
            </label>
            <button className="rounded-full bg-saffron px-8 py-3.5 font-bold text-void transition-transform hover:scale-105">
              Transmit →
            </button>
          </form>
        )}
        <aside className="space-y-6 text-sm">
          <div>
            <p className="eyebrow text-saffron">National HQ</p>
            <p className="mt-2 text-comms">New Delhi, India<br />[Street address placeholder]</p>
          </div>
          <div>
            <p className="eyebrow text-saffron">Phase 1 operations</p>
            <p className="mt-2 text-comms">Mumbai · Bengaluru · Pune</p>
          </div>
          <div>
            <p className="eyebrow text-saffron">Direct frequencies</p>
            <p className="mt-2 text-comms">[hello@earthizen.org]<br />[+91 — phone placeholder]</p>
          </div>
          <div>
            <p className="eyebrow text-saffron">Social</p>
            <p className="mt-2 text-comms">[Instagram · X · YouTube · LinkedIn]</p>
          </div>
        </aside>
      </section>
    </>
  );
}
