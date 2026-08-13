/**
 * Labeled placeholder for photography/video that arrives with real content.
 * Swap each instance for a real asset; the label says exactly what goes there.
 */
export default function Placeholder({
  label,
  ratio = "4/3",
  className = "",
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-line bg-panel ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(135deg, #121c30 0%, #0e1626 45%, #1a2036 100%)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#46a8a0" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#46a8a0" strokeWidth="1" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 border-t border-line bg-void/70 px-3 py-2 backdrop-blur-sm">
        <span className="h-2 w-2 shrink-0 rounded-full bg-saffron" aria-hidden="true" />
        <span className="eyebrow !text-[10px] text-comms">{label}</span>
      </div>
    </div>
  );
}
