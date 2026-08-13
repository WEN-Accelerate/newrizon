"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Starfield from "@/components/Starfield";
import Rocket from "@/components/graphics/Rocket";
import Earth from "@/components/graphics/Earth";
import Astronaut from "@/components/graphics/Astronaut";
import { site } from "@/content/site";

/**
 * The scroll-to-orbit hero: the page opens at dusk on the ground in India;
 * scrolling ascends through the atmosphere into orbit — the rocket climbs,
 * stars come out, and Earth rises below. Driven by a single scroll handler
 * so every layer stays in sync.
 */
export default function HeroOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const duskRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const groundRef = useRef<SVGSVGElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const earthRef = useRef<HTMLDivElement>(null);
  const astroRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState("T-MINUS · ON THE PAD");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(prefersReduced);
    if (prefersReduced) {
      setPhase("ORBIT · THE OVERVIEW");
      return;
    }

    const lerp = (from: number, to: number, t: number) => from + (to - from) * t;
    const ramp = (v: number, a: number, b: number) => Math.min(1, Math.max(0, (v - a) / (b - a)));

    let raf = 0;
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const scrollable = el.offsetHeight - window.innerHeight;
      const v = scrollable > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / scrollable)) : 1;

      if (duskRef.current) duskRef.current.style.opacity = String(1 - ramp(v, 0, 0.55));
      if (starsRef.current) starsRef.current.style.opacity = String(lerp(0.15, 1, ramp(v, 0.2, 0.7)));
      if (groundRef.current) groundRef.current.style.transform = `translateY(${ramp(v, 0, 0.5) * 60}%)`;
      if (rocketRef.current)
        rocketRef.current.style.transform = `translate(${v * 6}vw, ${lerp(38, -130, v)}vh)`;
      if (earthRef.current) {
        earthRef.current.style.transform = `translate(-50%, ${lerp(70, 22, ramp(v, 0.55, 1))}vh)`;
        earthRef.current.style.opacity = String(ramp(v, 0.55, 0.8));
      }
      if (astroRef.current) astroRef.current.style.opacity = String(ramp(v, 0.65, 0.9));
      setPhase(v < 0.33 ? "T-MINUS · ON THE PAD" : v < 0.7 ? "ASCENT · MAX-Q" : "ORBIT · THE OVERVIEW");
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ height: reduced ? "100vh" : "260vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* deep space base */}
        <div className="absolute inset-0 bg-void" />
        <div ref={starsRef} className="absolute inset-0" style={{ opacity: reduced ? 1 : 0.15 }}>
          <Starfield className="h-full w-full" />
        </div>

        {/* dusk sky on the ground */}
        {!reduced && (
          <div
            ref={duskRef}
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(to top, #b4661f 0%, #5a3a5e 30%, #16233f 60%, #070b14 100%)",
            }}
          />
        )}

        {/* ground silhouette */}
        {!reduced && (
          <svg
            ref={groundRef}
            className="absolute inset-x-0 bottom-0 h-[26vh] w-full"
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 120 C 200 70, 380 140, 560 110 C 760 78, 900 150, 1100 118 C 1260 94, 1360 130, 1440 110 L 1440 220 L 0 220 Z"
              fill="#04070f"
            />
          </svg>
        )}

        {/* rocket ascent */}
        <div
          ref={rocketRef}
          className="absolute right-[14vw] top-0 w-[72px] md:w-[100px]"
          style={reduced ? { transform: "translateY(12vh)" } : { transform: "translateY(38vh)" }}
          aria-hidden="true"
        >
          <Rocket />
        </div>

        {/* Earth rising into view */}
        <div
          ref={earthRef}
          className="absolute left-1/2 top-0 w-[140vw] max-w-none md:w-[72vw]"
          style={
            reduced
              ? { transform: "translate(-50%, 40vh)", opacity: 0.9 }
              : { transform: "translate(-50%, 70vh)", opacity: 0 }
          }
          aria-hidden="true"
        >
          <Earth className="w-full" />
        </div>

        {/* floating astronaut appears in orbit */}
        <div
          ref={astroRef}
          className="absolute right-[6vw] top-[16vh] hidden w-[150px] md:block"
          style={{ opacity: reduced ? 1 : 0 }}
          aria-hidden="true"
        >
          <div className="animate-float-slow">
            <Astronaut />
          </div>
        </div>

        {/* pinned copy */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
          <p className="eyebrow text-saffron">{phase}</p>
          <h1
            className="mt-5 max-w-3xl text-5xl font-extrabold uppercase leading-[1.02] tracking-tight md:text-7xl"
            style={{ textWrap: "balance" }}
          >
            The ceiling is not
            <span className="text-saffron"> where they told you</span> it is.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-comms">{site.mission}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/join"
              className="rounded-full bg-saffron px-7 py-3.5 font-bold text-void transition-transform hover:scale-105"
            >
              Join the Crew
            </Link>
            <Link
              href="/story"
              className="rounded-full border border-line px-7 py-3.5 font-bold text-star transition-colors hover:border-teal hover:text-teal"
            >
              Watch the story ↗
            </Link>
          </div>
          {!reduced && (
            <p className="eyebrow absolute bottom-8 left-6 !text-[10px] text-comms/70">
              Scroll to launch ↓
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
