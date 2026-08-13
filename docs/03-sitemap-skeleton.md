# Sitemap & Page Skeletons

Multipage structure. Every page lists its sections in order — this is the wireframe in text form. Content slots marked `[CONTENT]` are what we need from the foundation.

```
/                       Home — "Launchpad"
/story                  Our Story — "The Ascent"
/missions               Programs index — "Missions"
/missions/[slug]        Program detail (one per program)
/impact                 Impact — "Mission Log"
/join                   Get Involved — "Join the Crew"
/join/[audience]        Optional deep pages: students · educators · volunteers · partners
/donate                 Donate — "Fuel the Mission"
/news                   Transmissions index (blog + press)
/news/[slug]            Article page
/events                 Events & watch-parties
/gallery                Photo/video gallery
/contact                Contact
/privacy · /terms       Legal
```

Global elements: sticky translucent nav (logo, 5 links, language toggle EN/हिं, saffron **Join the Crew** button) · footer (mission line, quick links, newsletter capture "Get transmissions", social, 80G/registration details) · persistent but polite Donate affordance.

---

## `/` Home — Launchpad

1. **Scroll-to-orbit hero** — ground-to-orbit ascent animation; ends on Earth + one-line mission `[CONTENT: mission line]` + primary CTA "Join the Crew", secondary "Watch the story".
2. **Numbers bar** — 4 live stats (students reached, scholars funded, schools, states) `[CONTENT: stats]`.
3. **The founder, in one breath** — portrait + 2-sentence hook `[CONTENT]` → link to /story.
4. **Mission patch wall (teaser)** — 3–4 flagship program patches → /missions.
5. **Who's aboard** — four audience doors (Student / Educator / Volunteer / Partner) → /join.
6. **Constellation teaser** — small live impact map → /impact.
7. **Latest transmissions** — 3 recent news cards.
8. **Final CTA band** — "Every mission needs a crew." Join + Donate.

## `/story` — The Ascent

1. Opening image: the founder's hometown sky `[CONTENT: childhood photo/place]`.
2. **Split-screen scroll story** (Obama-style): fixed narrative text left, imagery right — childhood → training → launch → the overview effect `[CONTENT: 6–8 story beats + photos]`.
3. **The moment** — full-bleed Earth-from-orbit quote from the founder `[CONTENT: quote]`.
4. Why the foundation exists — from that moment to this mission `[CONTENT]`.
5. **The crew roster** — team & board, styled as a mission crew manifest `[CONTENT: people]`.
6. Governance & registration (trust signals) `[CONTENT: legal details]`.

## `/missions` — Programs index

1. Intro line: "Active missions."
2. **Patch wall** — one patch card per program: patch, name, one-line objective, status (Active / Enrolling / Completed), CTA.
3. Comparison strip: "Which mission is yours?" — by age/role. `[CONTENT: program list — e.g. scholarship, school STEM labs, space camps, teacher training, astronaut school visits]`

## `/missions/[slug]` — Program detail (template)

1. **Mission briefing header** — patch, name, objective, key facts sidebar (who it's for, duration, cost: free/₹, locations, next intake).
2. The problem it solves `[CONTENT]`.
3. **Mission plan** — how it works, step by step.
4. Outcomes & proof — stats + testimonial `[CONTENT]`.
5. Faces — beneficiaries/alumni carousel.
6. **Apply / Nominate / Sponsor this mission** CTAs.
7. FAQ accordion.

## `/impact` — Mission Log

1. Headline stats (animated counters).
2. **Constellation of Impact** — interactive map of India; each dot a school/scholar; filter by program/year.
3. Story spotlights — 3 deep human stories `[CONTENT]`.
4. Flight log timeline — year-by-year milestones.
5. **Transparency locker** — annual reports, audited financials, 80G docs `[CONTENT: PDFs]`.

## `/join` — Join the Crew

1. "Every mission needs a crew." + four doors:
   - **Students** → programs for you, Postcards to Orbit, apply.
   - **Educators** → bring a mission to your school, teacher training.
   - **Volunteers/Professionals** → mentor, run events, skills-based volunteering.
   - **Partners/CSR** → sponsor a mission, co-brand a patch, CSR compliance info.
2. Each door: 3 bullets of value + one form/CTA.
3. **Boarding pass moment** — on any signup, generate personalized crew boarding pass (name, crew #, role) with share buttons.
4. Testimonials from existing crew.

## `/donate` — Fuel the Mission

1. Framing: "Fuel." One line on why `[CONTENT]`.
2. **Impact-priced tiers** — ₹500 = X, ₹2,500 = Y, ₹10,000 = Z `[CONTENT: unit economics]` + custom amount; one-time / monthly toggle.
3. Payment: Razorpay (India) + international option; 80G receipt note.
4. **Where the fuel goes** — simple allocation chart.
5. CSR / large gifts / in-kind → contact.
6. FAQ (tax, receipts, refunds).

## `/news`, `/events`, `/gallery`, `/contact`

Standard patterns, mission-flavored: news = "Transmissions" with category filters (Press · Field Notes · Announcements); events with countdown clocks; gallery filterable by mission; contact with "Open a channel" form ("Transmission received" success state).
