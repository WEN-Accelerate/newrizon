export default function Rocket({ className = "", flame = true }: { className?: string; flame?: boolean }) {
  return (
    <svg viewBox="0 0 120 280" className={className} role="img" aria-label="Illustration of a launching rocket">
      {flame && (
        <g style={{ transformOrigin: "60px 218px" }} className="animate-flicker">
          <path d="M60 272 C 44 240, 48 226, 60 214 C 72 226, 76 240, 60 272 Z" fill="#f58a2e" />
          <path d="M60 254 C 52 236, 54 228, 60 220 C 66 228, 68 236, 60 254 Z" fill="#ffd9a8" />
        </g>
      )}
      {/* fins */}
      <path d="M34 160 C 16 176, 12 200, 14 214 L 40 192 Z" fill="#b4661f" />
      <path d="M86 160 C 104 176, 108 200, 106 214 L 80 192 Z" fill="#b4661f" />
      {/* body */}
      <path d="M60 8 C 84 40, 92 84, 92 132 C 92 172, 84 200, 76 212 L 44 212 C 36 200, 28 172, 28 132 C 28 84, 36 40, 60 8 Z" fill="#eef2f9" />
      {/* nose */}
      <path d="M60 8 C 72 24, 80 44, 84 64 L 36 64 C 40 44, 48 24, 60 8 Z" fill="#f58a2e" />
      {/* window */}
      <circle cx="60" cy="102" r="18" fill="#121c30" stroke="#46a8a0" strokeWidth="4" />
      <circle cx="54" cy="96" r="5" fill="#3a4a68" />
      {/* stripes */}
      <rect x="30" y="150" width="60" height="8" fill="#f58a2e" />
      <rect x="30" y="162" width="60" height="4" fill="#46a8a0" />
      {/* engine */}
      <path d="M44 212 L 76 212 L 82 226 L 38 226 Z" fill="#26344e" />
    </svg>
  );
}
