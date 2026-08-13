export default function Astronaut({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 260" className={className} role="img" aria-label="Illustration of a floating astronaut">
      {/* tether */}
      <path
        d="M30 250 C 60 210, 40 160, 82 140"
        fill="none"
        stroke="#46a8a0"
        strokeWidth="2.5"
        strokeDasharray="6 8"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* backpack */}
      <rect x="58" y="78" width="104" height="104" rx="18" fill="#26344e" />
      <rect x="66" y="88" width="16" height="40" rx="8" fill="#3a4a68" />
      <rect x="138" y="88" width="16" height="40" rx="8" fill="#3a4a68" />
      {/* legs */}
      <rect x="78" y="160" width="26" height="62" rx="13" fill="#dfe6f2" transform="rotate(8 91 191)" />
      <rect x="116" y="160" width="26" height="62" rx="13" fill="#eef2f9" transform="rotate(-14 129 191)" />
      <rect x="72" y="206" width="30" height="18" rx="9" fill="#f58a2e" transform="rotate(8 87 215)" />
      <rect x="122" y="204" width="30" height="18" rx="9" fill="#f58a2e" transform="rotate(-14 137 213)" />
      {/* arms */}
      <rect x="42" y="98" width="26" height="58" rx="13" fill="#dfe6f2" transform="rotate(24 55 127)" />
      <rect x="152" y="96" width="26" height="58" rx="13" fill="#eef2f9" transform="rotate(-30 165 125)" />
      <circle cx="45" cy="152" r="12" fill="#f58a2e" />
      <circle cx="180" cy="146" r="12" fill="#f58a2e" />
      {/* torso */}
      <rect x="74" y="92" width="72" height="84" rx="26" fill="#eef2f9" />
      {/* chest panel */}
      <rect x="90" y="118" width="40" height="28" rx="6" fill="#121c30" />
      <circle cx="99" cy="128" r="4" fill="#f58a2e" />
      <circle cx="111" cy="128" r="4" fill="#46a8a0" />
      <rect x="94" y="136" width="32" height="4" rx="2" fill="#3a4a68" />
      {/* helmet */}
      <circle cx="110" cy="62" r="40" fill="#eef2f9" />
      <ellipse cx="110" cy="64" rx="27" ry="23" fill="#0e1626" />
      <path d="M92 56 Q 100 46, 116 48" fill="none" stroke="#46a8a0" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
      {/* tricolour shoulder patch */}
      <rect x="78" y="100" width="14" height="4" fill="#f58a2e" />
      <rect x="78" y="104" width="14" height="4" fill="#eef2f9" stroke="#22304c" strokeWidth="0.5" />
      <rect x="78" y="108" width="14" height="4" fill="#2e7d5b" />
    </svg>
  );
}
