/** Small icons rendered at the centre of mission patches (drawn around origin). */

export function RocketIcon() {
  return (
    <g>
      <path d="M0 -30 C 10 -16, 13 0, 13 14 L -13 14 C -13 0, -10 -16, 0 -30 Z" fill="#eef2f9" />
      <path d="M0 -30 C 5 -23, 8 -16, 10 -8 L -10 -8 C -8 -16, -5 -23, 0 -30 Z" fill="#f58a2e" />
      <circle cx="0" cy="0" r="6" fill="#121c30" stroke="#46a8a0" strokeWidth="2" />
      <path d="M-13 8 L -22 22 L -12 18 Z" fill="#b4661f" />
      <path d="M13 8 L 22 22 L 12 18 Z" fill="#b4661f" />
      <path d="M-5 16 L 5 16 L 0 28 Z" fill="#f58a2e" />
    </g>
  );
}

export function BookIcon() {
  return (
    <g>
      <path d="M-24 -14 C -12 -20, -2 -18, 0 -12 L 0 18 C -2 12, -12 10, -24 16 Z" fill="#eef2f9" />
      <path d="M24 -14 C 12 -20, 2 -18, 0 -12 L 0 18 C 2 12, 12 10, 24 16 Z" fill="#dfe6f2" />
      <path d="M-18 -8 C -10 -11, -6 -10, -4 -8 M-18 -2 C -10 -5, -6 -4, -4 -2 M-18 4 C -10 1, -6 2, -4 4"
        stroke="#46a8a0" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <circle cx="12" cy="-2" r="5" fill="#f58a2e" />
    </g>
  );
}

export function SatIcon() {
  return (
    <g>
      <rect x="-9" y="-10" width="18" height="20" rx="3" fill="#c9a26a" />
      <rect x="-26" y="-6" width="13" height="12" rx="2" fill="#1b3a63" stroke="#46a8a0" strokeWidth="1.2" />
      <rect x="13" y="-6" width="13" height="12" rx="2" fill="#1b3a63" stroke="#46a8a0" strokeWidth="1.2" />
      <line x1="0" y1="-10" x2="0" y2="-18" stroke="#eef2f9" strokeWidth="2" />
      <circle cx="0" cy="-20" r="2.5" fill="#f58a2e" />
    </g>
  );
}
