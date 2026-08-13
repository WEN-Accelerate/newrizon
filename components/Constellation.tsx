/**
 * The Constellation of Impact (teaser): every point is a school, scholar, or
 * event; lines join them into constellations by state. Data-driven later.
 */
const points = [
  [60, 40], [110, 70], [150, 45], [200, 90], [250, 60], [300, 100],
  [90, 130], [160, 150], [230, 140], [310, 170], [70, 200], [140, 220],
  [210, 210], [280, 230], [350, 200], [120, 280], [190, 300], [260, 280],
  [330, 300], [90, 330], [230, 340], [300, 350],
];

const links = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [1, 6], [6, 7], [7, 8], [8, 9],
  [6, 10], [10, 11], [11, 12], [12, 13], [13, 14], [11, 15], [15, 16],
  [16, 17], [17, 18], [15, 19], [16, 20], [20, 21],
];

export default function Constellation({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="Constellation of impact — each star is a school or scholar">
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={points[a][0]}
          y1={points[a][1]}
          x2={points[b][0]}
          y2={points[b][1]}
          stroke="#46a8a0"
          strokeWidth="1"
          opacity="0.35"
        />
      ))}
      {points.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 5 === 0 ? 4 : 2.5}
          fill={i % 5 === 0 ? "#f58a2e" : "#e9edf5"}
          className="animate-twinkle"
          style={{ animationDelay: `${(i * 0.37) % 3}s` }}
        />
      ))}
    </svg>
  );
}
