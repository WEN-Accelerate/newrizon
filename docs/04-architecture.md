# Technical Architecture

## Stack (recommended)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router) + TypeScript** | Multipage SSG with per-page metadata/SEO, image optimization, i18n routing, huge hiring pool in India |
| Styling | **Tailwind CSS v4** + design tokens | Fast iteration; tokens keep the mission-patch brand consistent |
| Animation | **Motion (Framer Motion)** + CSS scroll-driven animations | Scroll-to-orbit hero, counters, reveals — with `prefers-reduced-motion` fallbacks built in |
| Hero visuals | Layered canvas/SVG starfield (no WebGL dependency) | Works on low-end Android; optional Three.js upgrade later, lazy-loaded |
| Content | **MDX files in-repo** (phase 1) → **Sanity CMS** (phase 2) | Start free and git-versioned; move to CMS when non-technical editors need to publish |
| i18n | **next-intl**, `en` + `hi` locales | Bilingual from day one; URL-based (`/hi/...`) |
| Donations | **Razorpay** (INR, UPI, 80G receipts) + Stripe (international) | UPI is non-negotiable for India; Stripe covers diaspora donors |
| Forms/email | Server Actions + **Resend**; newsletter via Mailchimp/Buttondown | Boarding-pass email on signup |
| Boarding pass | `@vercel/og` (Satori) — dynamic OG-image generation | Personalized shareable pass with zero client cost |
| Hosting | **Vercel** (or Netlify) | Free tier fits; preview deploys for content review |
| Analytics | **Plausible** | Privacy-friendly, no cookie banner needed |
| Search (later) | Pagefind | Static search for news/programs when volume grows |

## Repo structure

```
/
├── docs/                    ← these planning docs
├── app/
│   ├── [locale]/            ← en / hi
│   │   ├── page.tsx         ← Home (Launchpad)
│   │   ├── story/
│   │   ├── missions/
│   │   │   └── [slug]/
│   │   ├── impact/
│   │   ├── join/
│   │   ├── donate/
│   │   ├── news/
│   │   │   └── [slug]/
│   │   ├── events/
│   │   ├── gallery/
│   │   └── contact/
│   └── api/                 ← boarding-pass OG image, form handlers, Razorpay webhook
├── components/
│   ├── ui/                  ← buttons, cards, accordion, nav, footer
│   ├── sections/            ← one component per skeleton section (HeroOrbit, StatsBar,
│   │                          PatchWall, AudienceDoors, ConstellationMap, BoardingPass…)
│   └── motion/              ← scroll/reveal primitives with reduced-motion fallbacks
├── content/                 ← MDX: missions/, news/, story beats, people, stats.json
├── lib/                     ← i18n, cms adapters, payments, analytics
└── public/                  ← patches (SVG), photography, fonts
```

**Key principle:** every section in `03-sitemap-skeleton.md` maps 1:1 to a component in `components/sections/`. Content arrives → drops into `content/` → pages assemble sections. No section is hand-built per page twice.

## Rendering & data flow

- All pages **statically generated**; news/impact use ISR (revalidate ~1h) so CMS edits go live without redeploys.
- Impact constellation reads a single `stats.json`/CMS dataset; rendered as SVG map of India (lightweight, accessible, no map-tile service).
- Donations: client → Razorpay Checkout → webhook (API route) → receipt email + thank-you page with boarding pass.

## Performance & accessibility budgets (rural-India-first)

- LCP < 2.5s on mid-range Android over 4G; JS < 200KB gzipped on landing routes.
- Hero animation: pure CSS/canvas layers, `prefers-reduced-motion` → static Earth image with fade.
- WCAG 2.1 AA: contrast-checked saffron-on-navy, full keyboard nav, alt text mandatory in CMS schema.
- All imagery via `next/image` AVIF/WebP; fonts subset (Latin + Devanagari) and self-hosted.

## Phasing

1. **Phase 1 — Launch (this repo, ~4–6 weeks once content arrives):** Home, Story, Missions (index + 2–3 programs), Join, Donate (Razorpay), Contact, legal. MDX content, EN first with HI framework in place.
2. **Phase 2 — Depth:** Impact constellation, News engine, Events, Gallery, Hindi content, boarding-pass generator.
3. **Phase 3 — Platform:** Sanity CMS handover, Postcards to Orbit submissions, member area, Stripe international.

## Open decisions (need the foundation's input)

1. Foundation's legal name, registration (Trust/Sec-8), 80G/FCRA status — affects donate page claims.
2. Donation processor account owner (Razorpay requires org KYC).
3. Domain name.
4. Photography/video assets available vs. need a shoot.
5. Languages beyond EN/HI?
