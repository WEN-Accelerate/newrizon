# Astronaut Foundation Website — Concept & Architecture

Website for a foundation started by a famous astronaut of Indian origin. Concept: **the website is a mission** — every page is a mission stage and the visitor joins as crew.

## Planning docs

1. [`docs/01-benchmark-review.md`](docs/01-benchmark-review.md) — review of the reference site (d2cx.co) and 6 category benchmarks; what we borrow and reject.
2. [`docs/02-concept.md`](docs/02-concept.md) — the big idea, narrative spine, signature elements, brand direction.
3. [`docs/03-sitemap-skeleton.md`](docs/03-sitemap-skeleton.md) — multipage sitemap with section-by-section page skeletons and `[CONTENT]` slots.
4. [`docs/04-architecture.md`](docs/04-architecture.md) — stack, repo structure, performance budgets, phasing, open decisions.

## Status

- [x] Benchmarking, concept, skeleton, architecture
- [x] Next.js scaffold + design system (mission patches, tokens)
- [x] Page builds with placeholder content, custom SVG graphics, and animations
- [ ] Content from the foundation (see `[CONTENT]` slots and `content/site.ts`)
- [ ] Real photography swapped into `Placeholder` components
- [ ] Razorpay checkout, forms backend, Hindi locale

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (all pages static)
```

## Where things live

- `content/site.ts` — every placeholder string, stat, program, and FAQ; swap real content here first
- `components/graphics/` — astronaut, rocket, Earth, satellite, and generative mission-patch SVGs
- `components/` — sections, scroll-to-orbit hero, starfield, counters, boarding pass
- `app/` — one folder per page, matching `docs/03-sitemap-skeleton.md`
