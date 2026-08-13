import type { ReactNode } from "react";

/**
 * Embroidered-style circular mission patch in the NASA/ISRO tradition.
 * Each program gets one; `accent` distinguishes missions.
 */
export default function MissionPatch({
  name,
  code,
  accent = "#f58a2e",
  className = "",
  children,
}: {
  name: string;
  code: string;
  accent?: string;
  className?: string;
  children?: ReactNode;
}) {
  const pathId = `patch-ring-${code}`;
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label={`Mission patch: ${name}`}>
      <defs>
        <path id={pathId} d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
      </defs>
      {/* stitched border */}
      <circle cx="100" cy="100" r="96" fill="#0e1626" stroke={accent} strokeWidth="5" />
      <circle cx="100" cy="100" r="88" fill="none" stroke={accent} strokeWidth="1.5" strokeDasharray="3 4" opacity="0.8" />
      {/* inner sky */}
      <circle cx="100" cy="100" r="60" fill="#121c30" stroke="#22304c" strokeWidth="2" />
      {/* stars */}
      <circle cx="72" cy="72" r="2" fill="#e9edf5" />
      <circle cx="132" cy="64" r="1.5" fill="#e9edf5" />
      <circle cx="142" cy="112" r="2" fill="#e9edf5" />
      <circle cx="64" cy="118" r="1.5" fill="#e9edf5" />
      <circle cx="104" cy="52" r="1.5" fill="#e9edf5" />
      {/* icon slot */}
      <g transform="translate(100 104)">{children}</g>
      {/* ring text */}
      <text
        fill="#e9edf5"
        fontSize="13.5"
        fontFamily="ui-monospace, Menlo, Consolas, monospace"
        letterSpacing="3"
      >
        <textPath href={`#${pathId}`} startOffset="0%">
          {name.toUpperCase()} · {code} ·
        </textPath>
      </text>
    </svg>
  );
}
