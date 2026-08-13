"use client";

export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line rounded-lg border border-line bg-panel">
      {items.map((item) => (
        <details key={item.q} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="text-saffron transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-comms">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
