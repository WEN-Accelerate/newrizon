/** Icons rendered at the centre of programme mission patches (drawn around origin). */

export function GlobeIcon() {
  return (
    <g>
      <circle r="22" fill="#16345e" stroke="#eef2f9" strokeWidth="2.5" />
      <ellipse rx="10" ry="22" fill="none" stroke="#eef2f9" strokeWidth="1.6" opacity="0.85" />
      <path d="M-22 0 H22 M-19 -11 H19 M-19 11 H19" stroke="#eef2f9" strokeWidth="1.6" opacity="0.85" fill="none" />
      <ellipse rx="30" ry="9" fill="none" stroke="#f58a2e" strokeWidth="2" transform="rotate(-18)" />
      <circle cx="27" cy="-11" r="3" fill="#f58a2e" />
    </g>
  );
}

export function ChipIcon() {
  return (
    <g>
      <rect x="-16" y="-16" width="32" height="32" rx="5" fill="#1b3a63" stroke="#eef2f9" strokeWidth="2.5" />
      <rect x="-7" y="-7" width="14" height="14" rx="2" fill="#46a8a0" />
      {[-10, 0, 10].map((p) => (
        <g key={p} stroke="#eef2f9" strokeWidth="2.5" strokeLinecap="round">
          <line x1={p} y1="-16" x2={p} y2="-24" />
          <line x1={p} y1="16" x2={p} y2="24" />
          <line x1="-16" y1={p} x2="-24" y2={p} />
          <line x1="16" y1={p} x2="24" y2={p} />
        </g>
      ))}
    </g>
  );
}

export function BridgeIcon() {
  return (
    <g>
      <path d="M-28 12 H28" stroke="#eef2f9" strokeWidth="3" strokeLinecap="round" />
      <path d="M-28 12 C -14 -14, 14 -14, 28 12" fill="none" stroke="#c9a26a" strokeWidth="3" strokeLinecap="round" />
      {[-18, -9, 0, 9, 18].map((x) => (
        <line key={x} x1={x} y1={12} x2={x} y2={x === 0 ? -8 : Math.abs(x) === 9 ? -5 : 2} stroke="#eef2f9" strokeWidth="2" strokeLinecap="round" />
      ))}
      <circle cx="0" cy="-14" r="3" fill="#f58a2e" />
    </g>
  );
}

export function RocketIcon() {
  return (
    <g>
      <path d="M0 -30 C 10 -16, 13 0, 13 14 L -13 14 C -13 0, -10 -16, 0 -30 Z" fill="#eef2f9" />
      <path d="M0 -30 C 5 -23, 8 -16, 10 -8 L -10 -8 C -8 -16, -5 -23, 0 -30 Z" fill="#3d7fd9" />
      <circle cx="0" cy="0" r="6" fill="#121c30" stroke="#46a8a0" strokeWidth="2" />
      <path d="M-13 8 L -22 22 L -12 18 Z" fill="#b4661f" />
      <path d="M13 8 L 22 22 L 12 18 Z" fill="#b4661f" />
      <path d="M-5 16 L 5 16 L 0 28 Z" fill="#f58a2e" />
    </g>
  );
}

const bySlug: Record<string, () => React.ReactNode> = {
  orbit: GlobeIcon,
  nexus: ChipIcon,
  bridge: BridgeIcon,
  cosmos: RocketIcon,
};

export function PatchIcon({ slug }: { slug: string }) {
  const Icon = bySlug[slug] ?? GlobeIcon;
  return <>{Icon()}</>;
}
