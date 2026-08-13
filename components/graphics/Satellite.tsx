export default function Satellite({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 160" className={className} role="img" aria-label="Illustration of a small satellite">
      {/* solar wings */}
      <g>
        <rect x="6" y="52" width="78" height="56" rx="6" fill="#1b3a63" stroke="#46a8a0" strokeWidth="2" />
        <path d="M32 52 V108 M58 52 V108 M6 80 H84" stroke="#46a8a0" strokeWidth="1.5" opacity="0.7" />
        <rect x="176" y="52" width="78" height="56" rx="6" fill="#1b3a63" stroke="#46a8a0" strokeWidth="2" />
        <path d="M202 52 V108 M228 52 V108 M176 80 H254" stroke="#46a8a0" strokeWidth="1.5" opacity="0.7" />
      </g>
      <rect x="84" y="72" width="18" height="16" fill="#3a4a68" />
      <rect x="158" y="72" width="18" height="16" fill="#3a4a68" />
      {/* body */}
      <rect x="100" y="48" width="60" height="64" rx="10" fill="#c9a26a" />
      <rect x="108" y="56" width="44" height="48" rx="6" fill="#a67f4e" />
      <rect x="116" y="64" width="28" height="10" rx="3" fill="#f58a2e" />
      {/* dish */}
      <ellipse cx="130" cy="36" rx="22" ry="10" fill="#eef2f9" />
      <line x1="130" y1="36" x2="130" y2="48" stroke="#eef2f9" strokeWidth="3" />
      <circle cx="130" cy="24" r="4" fill="#f58a2e" />
      {/* signal */}
      <path d="M140 18 A 16 16 0 0 1 152 30" fill="none" stroke="#46a8a0" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <path d="M146 10 A 26 26 0 0 1 162 28" fill="none" stroke="#46a8a0" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
