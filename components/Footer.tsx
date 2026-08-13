"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";

export default function Footer() {
  const [sent, setSent] = useState(false);
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto border-b border-line px-6 py-10">
        <p className="mx-auto max-w-3xl text-center text-sm italic leading-relaxed text-comms">
          “{site.footerLine}”
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-comms">{site.mission}</p>
          <p className="eyebrow mt-6 !text-[10px] text-comms">{site.legal}</p>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm" aria-label="Footer">
          {[
            ["/story", "About"],
            ["/programmes", "Programmes"],
            ["/impact", "Impact"],
            ["/gallery", "Gallery"],
            ["/join", "Join the Movement"],
            ["/donate", "CSR & Funding"],
            ["/news", "Transmissions"],
            ["/contact", "Contact"],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="py-1 text-comms hover:text-star">
              {label}
            </Link>
          ))}
        </nav>
        <div>
          <p className="eyebrow text-saffron">Get transmissions</p>
          {sent ? (
            <p className="mt-4 font-mono text-sm text-teal">▸ Transmission received. Welcome aboard, Earthizen.</p>
          ) : (
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input
                type="email"
                required
                placeholder="you@earth.in"
                aria-label="Email address"
                className="w-full rounded-md border border-line bg-void px-4 py-2.5 text-sm placeholder:text-comms/60 focus:border-teal focus:outline-none"
              />
              <button className="shrink-0 rounded-md bg-saffron px-4 py-2.5 text-sm font-bold text-void">
                Join
              </button>
            </form>
          )}
          <p className="mt-6 font-mono text-[11px] tracking-wider text-comms/70">
            — TRANSMISSION ENDS —
          </p>
        </div>
      </div>
    </footer>
  );
}
