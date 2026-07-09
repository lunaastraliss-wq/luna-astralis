"use client";

const SIGNS = [
  "♈", "♉", "♊", "♋", "♌", "♍",
  "♎", "♏", "♐", "♑", "♒", "♓",
];

const PLANET_GLYPH: Record<string, string> = {
  Sun: "☉",
  Moon: "☽",
  Mercury: "☿",
  Venus: "♀",
  Mars: "♂",
  Jupiter: "♃",
  Saturn: "♄",
  Uranus: "♅",
  Neptune: "♆",
  Pluto: "♇",
};

type WheelPlanet = {
  name: string;
  longitude: number;
  isRetrograde?: boolean;
};

type HouseCusp = {
  house: number;
  longitude: number;
};

type Props = {
  planets: WheelPlanet[];
  houses?: {
    cusps?: HouseCusp[];
  };
  ascendantLongitude?: number;
  midheavenLongitude?: number;
  ascendantFormatted?: string;
  midheavenFormatted?: string;
  size?: number;
};

function point(cx: number, cy: number, r: number, angle: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy - r * Math.sin(rad),
  };
}

function angleDiff(a: number, b: number) {
  const diff = Math.abs(a - b) % 360;
  return diff > 180 ? 360 - diff : diff;
}

function getAspect(diff: number) {
  const aspects = [
    { angle: 0, orb: 8, color: "#f4c95d", opacity: 0.42 },
    { angle: 60, orb: 5, color: "#4fa3ff", opacity: 0.42 },
    { angle: 90, orb: 6, color: "#ff5c5c", opacity: 0.48 },
    { angle: 120, orb: 6, color: "#4fa3ff", opacity: 0.48 },
    { angle: 180, orb: 8, color: "#ff5c5c", opacity: 0.5 },
  ];

  return aspects.find((a) => Math.abs(diff - a.angle) <= a.orb);
}

export default function NatalChartWheel({
  planets,
  houses,
  ascendantLongitude = 0,
  midheavenLongitude,
  ascendantFormatted,
  midheavenFormatted,
  size = 520,
}: Props) {
  const cx = size / 2;
  const cy = size / 2;

  const outer = size * 0.48;
  const zodiacOuter = size * 0.455;
  const zodiacInner = size * 0.385;
  const houseRing = size * 0.32;
  const planetRing = size * 0.245;
  const planetRingAlt = size * 0.195;
  const aspectRing = size * 0.205;

  const toAngle = (longitude: number) => {
    const relative = ((longitude - ascendantLongitude) % 360 + 360) % 360;
    return 180 - relative;
  };

  const validPlanets = planets
    .filter((p) => Number.isFinite(p.longitude))
    .sort((a, b) => a.longitude - b.longitude);

  let lastAngle: number | null = null;
  let alternate = false;

  const placedPlanets = validPlanets.map((p) => {
    const angle = toAngle(p.longitude);

    if (lastAngle !== null) {
      let diff = Math.abs(angle - lastAngle);
      if (diff > 180) diff = 360 - diff;
      alternate = diff < 12 ? !alternate : false;
    }

    lastAngle = angle;

    return {
      ...p,
      angle,
      radius: alternate ? planetRingAlt : planetRing,
    };
  });

  const aspects = [];

  for (let i = 0; i < validPlanets.length; i++) {
    for (let j = i + 1; j < validPlanets.length; j++) {
      const diff = angleDiff(validPlanets[i].longitude, validPlanets[j].longitude);
      const aspect = getAspect(diff);

      if (aspect) {
        aspects.push({
          p1: validPlanets[i],
          p2: validPlanets[j],
          aspect,
        });
      }
    }
  }

  const cusps = houses?.cusps || [];

  return (
    <div
      className="natal-wheel-wrap"
      style={{
        width: "100%",
        maxWidth: size,
        margin: "0 auto",
        aspectRatio: "1 / 1",
      }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width="100%"
        height="auto"
        style={{ display: "block" }}
      >
        <defs>
          <radialGradient id="wheelGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f4c95d" stopOpacity="0.11" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.025" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="goldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff0a8" />
            <stop offset="50%" stopColor="#f4c95d" />
            <stop offset="100%" stopColor="#b8892d" />
          </linearGradient>
        </defs>

        <circle cx={cx} cy={cy} r={outer} fill="url(#wheelGlow)" />

        <circle
          cx={cx}
          cy={cy}
          r={outer}
          fill="none"
          stroke="url(#goldStroke)"
          strokeWidth={2.2}
        />

        <circle cx={cx} cy={cy} r={zodiacOuter} fill="none" stroke="currentColor" strokeOpacity={0.24} />
        <circle cx={cx} cy={cy} r={zodiacInner} fill="none" stroke="currentColor" strokeOpacity={0.2} />
        <circle cx={cx} cy={cy} r={houseRing} fill="none" stroke="currentColor" strokeOpacity={0.18} />
        <circle cx={cx} cy={cy} r={size * 0.12} fill="none" stroke="currentColor" strokeOpacity={0.12} />

        {SIGNS.map((glyph, i) => {
          const startAngle = toAngle(i * 30);
          const labelAngle = toAngle(i * 30 + 15);

          const lineA = point(cx, cy, zodiacInner, startAngle);
          const lineB = point(cx, cy, outer, startAngle);
          const label = point(cx, cy, (zodiacOuter + zodiacInner) / 2, labelAngle);

          return (
            <g key={glyph}>
              <line x1={lineA.x} y1={lineA.y} x2={lineB.x} y2={lineB.y} stroke="currentColor" strokeOpacity={0.26} />

              <text
                x={label.x}
                y={label.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={size * 0.045}
                fill="#f4c95d"
                fontWeight={700}
              >
                {glyph}
              </text>
            </g>
          );
        })}

        {cusps.map((cusp) => {
          const angle = toAngle(cusp.longitude);
          const a = point(cx, cy, size * 0.12, angle);
          const b = point(cx, cy, zodiacInner, angle);
          const label = point(cx, cy, houseRing - size * 0.035, angle);

          return (
            <g key={cusp.house}>
              <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="currentColor" strokeOpacity={0.22} />

              <text
                x={label.x}
                y={label.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={size * 0.026}
                fill="currentColor"
                opacity={0.75}
                fontWeight={700}
              >
                {cusp.house}
              </text>
            </g>
          );
        })}

        {aspects.map((a, i) => {
          const p1 = point(cx, cy, aspectRing, toAngle(a.p1.longitude));
          const p2 = point(cx, cy, aspectRing, toAngle(a.p2.longitude));

          return (
            <line
              key={`aspect-${i}`}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke={a.aspect.color}
              strokeWidth={1.15}
              strokeOpacity={a.aspect.opacity}
            />
          );
        })}

        {(() => {
          const asc = point(cx, cy, outer, toAngle(ascendantLongitude));
          const desc = point(cx, cy, outer, toAngle(ascendantLongitude + 180));

          return (
            <g>
              <line x1={asc.x} y1={asc.y} x2={desc.x} y2={desc.y} stroke="#f4c95d" strokeWidth={2.2} strokeOpacity={0.85} />

              <text x={asc.x} y={asc.y} dx={-10} textAnchor="end" dominantBaseline="middle" fontSize={size * 0.034} fill="#f4c95d" fontWeight={900}>
                AC
              </text>

              <text x={desc.x} y={desc.y} dx={10} textAnchor="start" dominantBaseline="middle" fontSize={size * 0.034} fill="#f4c95d" fontWeight={900}>
                DC
              </text>
            </g>
          );
        })()}

        {typeof midheavenLongitude === "number" &&
          (() => {
            const mc = point(cx, cy, outer, toAngle(midheavenLongitude));
            const fc = point(cx, cy, outer, toAngle(midheavenLongitude + 180));

            return (
              <g>
                <line x1={mc.x} y1={mc.y} x2={fc.x} y2={fc.y} stroke="#f4c95d" strokeWidth={1.8} strokeOpacity={0.72} strokeDasharray="6 5" />

                <text x={mc.x} y={mc.y} dy={-10} textAnchor="middle" fontSize={size * 0.032} fill="#f4c95d" fontWeight={900}>
                  MC
                </text>

                <text x={fc.x} y={fc.y} dy={16} textAnchor="middle" fontSize={size * 0.032} fill="#f4c95d" fontWeight={900}>
                  FC
                </text>
              </g>
            );
          })()}

        {placedPlanets.map((p, i) => {
          const pos = point(cx, cy, p.radius, p.angle);
          const tickA = point(cx, cy, houseRing, p.angle);
          const tickB = point(cx, cy, zodiacInner, p.angle);

          return (
            <g key={`${p.name}-${i}`}>
              <line x1={tickA.x} y1={tickA.y} x2={tickB.x} y2={tickB.y} stroke="#f4c95d" strokeOpacity={0.4} />

              <circle
                cx={pos.x}
                cy={pos.y}
                r={size * 0.032}
                fill="rgba(244, 201, 93, 0.12)"
                stroke="rgba(244, 201, 93, 0.35)"
              />

              <text
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={size * 0.047}
                fill="#f4c95d"
                fontWeight={800}
              >
                {PLANET_GLYPH[p.name] || p.name.slice(0, 2)}
              </text>

              {p.isRetrograde && (
                <text
                  x={pos.x + size * 0.034}
                  y={pos.y - size * 0.026}
                  fontSize={size * 0.023}
                  fill="#ffb4b4"
                  fontWeight={900}
                >
                  R
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {(ascendantFormatted || midheavenFormatted) && (
        <div className="natal-wheel-caption">
          {ascendantFormatted && (
            <span>
              <strong>Ascendant :</strong> {ascendantFormatted}
            </span>
          )}

          {midheavenFormatted && (
            <span>
              <strong>Milieu du ciel :</strong> {midheavenFormatted}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
