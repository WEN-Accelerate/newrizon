import { partners } from "@/content/site";

export default function Marquee() {
  const row = [...partners, ...partners];
  return (
    <div className="overflow-hidden border-y border-line bg-panel py-5" aria-label="Partner logos (placeholders)">
      <div className="flex w-max animate-marquee gap-14">
        {row.map((p, i) => (
          <span key={i} className="eyebrow whitespace-nowrap !text-[13px] text-comms/80">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
