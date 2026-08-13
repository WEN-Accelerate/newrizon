import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { gallery } from "@/content/site";

export const metadata: Metadata = { title: "Gallery — Moments from the Movement" };

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-line pt-16">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-saffron">Gallery</p>
          <h1 className="mt-4 text-4xl font-extrabold uppercase tracking-tight md:text-6xl">
            Moments from the movement
          </h1>
          <p className="mt-5 max-w-xl text-comms">
            From school courtyards to village squares to orbit itself — every photograph is a step
            toward a borderless world.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {gallery.map((g, i) => (
            <Reveal key={g.photo} delay={(i % 3) * 80}>
              <figure className="break-inside-avoid overflow-hidden rounded-lg border border-line bg-panel">
                <div className="relative w-full" style={{ aspectRatio: g.ratio }}>
                  <Image
                    src={g.photo}
                    alt={g.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <figcaption className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-saffron">{g.tag}</p>
                  <p className="mt-2 text-xs leading-relaxed text-comms">{g.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
