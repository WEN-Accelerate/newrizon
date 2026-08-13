"use client";

import { useEffect, useRef } from "react";

/** Ambient canvas starfield with gentle twinkle; static when reduced motion is preferred. */
export default function Starfield({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars: { x: number; y: number; r: number; p: number; s: number }[] = [];
    let raf = 0;
    let W = 0;
    let H = 0;

    const size = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      W = canvas.width = rect.width * dpr;
      H = canvas.height = rect.height * dpr;
      stars = [];
      const count = Math.min(240, Math.floor((W * H) / 9000));
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.4 + 0.3,
          p: Math.random() * Math.PI * 2,
          s: 0.4 + Math.random() * 1.2,
        });
      }
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      const dpr = window.devicePixelRatio || 1;
      stars.forEach((star, i) => {
        const a = reduced ? 0.7 : 0.3 + 0.6 * Math.abs(Math.sin(star.p + t * 0.0006 * star.s));
        ctx.globalAlpha = a;
        ctx.fillStyle = i % 9 === 0 ? "#f5b27a" : "#dce6f5";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r * dpr, 0, 7);
        ctx.fill();
      });
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    size();
    if (reduced) draw(0);
    else raf = requestAnimationFrame(draw);
    window.addEventListener("resize", size);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
