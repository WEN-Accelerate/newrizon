"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";

const links = [
  { href: "/story", label: "About" },
  { href: "/programmes", label: "Programmes" },
  { href: "/impact", label: "Impact" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "Transmissions" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-void/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
            <circle cx="20" cy="20" r="12" fill="#16345e" stroke="#eef2f9" strokeWidth="1.8" />
            <path d="M8 20 H32 M11 13 H29 M11 27 H29" stroke="#eef2f9" strokeWidth="1.2" opacity="0.8" />
            <ellipse cx="20" cy="20" rx="18" ry="6" fill="none" stroke="#f58a2e" strokeWidth="2" transform="rotate(-18 20 20)" />
            <circle cx="34" cy="12" r="2.5" fill="#f58a2e" />
          </svg>
          <span className="text-sm font-bold uppercase tracking-widest">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-comms transition-colors hover:text-star">
              {l.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="rounded-full bg-saffron px-5 py-2 text-sm font-bold text-void transition-transform hover:scale-105"
          >
            Join the Movement
          </Link>
        </nav>
        <button
          className="lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className="block h-0.5 w-6 bg-star" />
          <span className="mt-1.5 block h-0.5 w-6 bg-star" />
          <span className="mt-1.5 block h-0.5 w-6 bg-saffron" />
        </button>
      </div>
      {open && (
        <nav className="border-t border-line bg-void/95 px-6 py-4 lg:hidden" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2.5 text-comms hover:text-star"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="mt-3 inline-block rounded-full bg-saffron px-5 py-2 text-sm font-bold text-void"
            onClick={() => setOpen(false)}
          >
            Join the Movement
          </Link>
        </nav>
      )}
    </header>
  );
}
