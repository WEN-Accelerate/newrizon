import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <Reveal>
      <p className="eyebrow flex items-center gap-4 text-teal">
        {eyebrow}
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </p>
      <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl" style={{ textWrap: "balance" }}>
        {title}
      </h2>
      {lede && <p className="mt-4 max-w-2xl text-comms">{lede}</p>}
    </Reveal>
  );
}
