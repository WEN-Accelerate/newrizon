# Earthizen Foundation — Website

**No Borders. One Earth. Infinite Futures.**

Website for the Earthizen Foundation, founded by Group Captain Shubhanshu Shukla — built on the
"website is a mission" concept: the visitor launches from the ground into orbit, programmes are
missions with their own patches, and joining makes you an Earthizen.

## Planning docs

1. [`docs/01-benchmark-review.md`](docs/01-benchmark-review.md) — reference-site and category benchmarks
2. [`docs/02-concept.md`](docs/02-concept.md) — the mission concept, signature elements, brand direction
3. [`docs/03-sitemap-skeleton.md`](docs/03-sitemap-skeleton.md) — page-by-page skeletons
4. [`docs/04-architecture.md`](docs/04-architecture.md) — stack, budgets, phasing

## Status

- [x] Benchmarking, concept, skeleton, architecture
- [x] Next.js scaffold, design system, custom SVG graphics, animations
- [x] Real Earthizen content: vision/mission, 5 values, 4 programme verticals (Orbit · Nexus ·
      Bridge · Cosmos), five-year targets, expansion roadmap, 6 stories of change, governance &
      Section 8 legal details, real photography
- [ ] Remaining `[placeholder]` items: founder childhood photo, team names, donation amounts,
      80G confirmation, contact details, application form links
- [ ] Razorpay checkout, forms backend, Hindi locale

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (all pages static)
```

## Where things live

- `content/site.ts` — all site content (vision, values, programmes, targets, stories, gallery, FAQs)
- `public/photos/` — photography extracted from the foundation's brief
- `components/graphics/` — astronaut, rocket, Earth, satellite, generative mission patches
- `components/` — scroll-to-orbit hero, starfield, counters, Earthizen Pass, section library
- `app/` — one folder per page (home, story/about, programmes, impact, gallery, join, donate, news, events, contact)
