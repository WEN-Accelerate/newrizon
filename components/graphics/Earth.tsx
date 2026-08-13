export default function Earth({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="Illustration of Earth from orbit">
      <defs>
        <radialGradient id="earth-sea" cx="38%" cy="32%" r="80%">
          <stop offset="0%" stopColor="#3d7fd9" />
          <stop offset="55%" stopColor="#16345e" />
          <stop offset="100%" stopColor="#0a1a33" />
        </radialGradient>
        <clipPath id="earth-clip">
          <circle cx="200" cy="200" r="150" />
        </clipPath>
      </defs>
      {/* atmosphere glow */}
      <circle cx="200" cy="200" r="164" fill="none" stroke="#7ec3ff" strokeWidth="10" opacity="0.18" />
      <circle cx="200" cy="200" r="156" fill="none" stroke="#7ec3ff" strokeWidth="4" opacity="0.35" />
      <circle cx="200" cy="200" r="150" fill="url(#earth-sea)" />
      <g clipPath="url(#earth-clip)" fill="#2e7d5b" opacity="0.9">
        {/* abstract landmasses; the peninsula echoes India */}
        <path d="M226 96 C 258 92, 284 108, 288 134 C 292 158, 276 168, 262 186 C 252 200, 246 224, 232 224 C 218 224, 210 198, 208 176 C 206 150, 202 100, 226 96 Z" />
        <ellipse cx="120" cy="140" rx="52" ry="30" transform="rotate(-18 120 140)" />
        <ellipse cx="150" cy="272" rx="60" ry="34" transform="rotate(12 150 272)" />
        <ellipse cx="292" cy="262" rx="34" ry="22" transform="rotate(-8 292 262)" />
      </g>
      <g clipPath="url(#earth-clip)" fill="#ffffff" opacity="0.16">
        <ellipse cx="160" cy="110" rx="70" ry="12" transform="rotate(-12 160 110)" />
        <ellipse cx="250" cy="210" rx="80" ry="10" transform="rotate(8 250 210)" />
        <ellipse cx="140" cy="310" rx="60" ry="10" transform="rotate(-6 140 310)" />
      </g>
      {/* day-night terminator */}
      <path d="M200 50 A 150 150 0 0 1 200 350 A 210 150 0 0 0 200 50 Z" fill="#04070f" opacity="0.45" />
    </svg>
  );
}
