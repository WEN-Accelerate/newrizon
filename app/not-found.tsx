import Link from "next/link";
import Astronaut from "@/components/graphics/Astronaut";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="w-40 animate-float" aria-hidden="true">
        <Astronaut />
      </div>
      <p className="eyebrow mt-8 text-saffron">Error 404 · Signal lost</p>
      <h1 className="mt-4 text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
        You&apos;ve drifted off course
      </h1>
      <p className="mt-4 max-w-md text-comms">This page isn&apos;t in our flight plan. Let&apos;s get you back to the ship.</p>
      <Link href="/" className="mt-8 rounded-full bg-saffron px-7 py-3.5 font-bold text-void transition-transform hover:scale-105">
        Return to Launchpad
      </Link>
    </section>
  );
}
