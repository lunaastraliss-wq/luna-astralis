"use client";

const SIGN_ORDER = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
];

const SIGN_GLYPH: Record<string, string> = {
  Aries: "♈", Taurus: "♉", Gemini: "♊", Cancer: "♋",
  Leo: "♌", Virgo: "♍", Libra: "♎", Scorpio: "♏",
  Sagittarius: "♐", Capricorn: "♑", Aquarius: "♒", Pisces: "♓",
};

const PLANET_GLYPH: Record<string, string> = {
  Sun: "☉", Moon: "☽", Mercury: "☿", Venus: "♀", Mars: "♂",
  Jupiter: "♃", Saturn: "♄", Uranus: "♅", Neptune: "♆", Pluto: "♇",
  Chiron: "⚷", "North Node": "☊", "South Node": "☋", Lilith: "⚸",
};

interface WheelPlanet {
  name: string;
  formatted: string;
  isRetrograde?: boolean;
}

interface NatalChartWheelProps {
  planets: WheelPlanet[];
  ascendantFormatted?: string;
  midheavenFormatted?: string;
  size?: number;
}

function parseLongitude(formatted?: string): number | null {
  if (!formatted) return null;
  const signIndex = SIGN_ORDER.findIndex((s) => formatted.includes(s));
  if (signIndex === -1) return null;
  const nums = formatted.match(/\d+/g);
  if (!nums) return null;
  const deg = parseInt(nums[0], 10) || 0;
  const min = nums[1] ? parseInt(nums[1], 10) : 0;
  return signIndex * 30 + deg + min / 60;
}

function pointOnCircle(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy - r * Math.sin(rad),
  };
}

export default function NatalChartWheel({
  planets,
  ascendantFormatted,
  midheavenFormatted,
  size = 480,
}: NatalChartWheelProps) {
  const cx = size / 2;
  const cy = size / 2;
  const rOuter = size * 0.48;
  const rSignRing = size * 0.41;
  const rHouseLine = size * 0.4;
  const rPlanetBase = size * 0.3;
  const rPlanetAlt = size * 0.24;

  const ascLongitude = parseLongitude(ascendantFormatted) ?? 0;
  const mcLongitude = parseLongitude(midheavenFormatted);

  const toScreenAngle = (longitude: number) => {
    const relative = ((longitude - ascLongitude) % 360 + 360) % 360;
    return 180 - relative;
  };

  // Prépare les planètes avec longitude + gestion des chevauchements
  const parsedPlanets = planets
    .map((p) => ({ ...p, longitude: parseLongitude(p.formatted) }))
    .filter((p) => p.longitude !== null) as (WheelPlanet & { longitude: number })[];

  const sorted = [...parsedPlanets].sort((a, b) => a.longitude - b.longitude);
  let lastAngle: number | null = null;
  let toggle = false;
  const placedPlanets = sorted.map((p) => {
    const angle = toScreenAngle(p.longitude);
    if (lastAngle !== null) {
      let diff = Math.abs(angle - lastAngle);
      if (diff > 180) diff = 360 - diff;
      if (diff < 10) {
        toggle = !toggle;
      } else {
        toggle = false;
      }
    }
    lastAngle = angle;
    return { ...p, angle, radius: toggle ? rPlanetAlt : rPlanetBase };
  });

  return (
    <div className="natal-wheel-wrap" style={{ width: "100%", maxWidth: size, margin: "0 auto" }}>
      <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%">
        {/* Cercle extérieur */}
        <circle cx={cx} cy={cy} r={rOuter} fill="none" stroke="currentColor" strokeOpacity={0.3} />
        <circle cx={cx} cy={cy} r={rSignRing} fill="none" stroke="currentColor" strokeOpacity={0.2} />
        <circle cx={cx} cy={cy} r={rHouseLine} fill="none" stroke="currentColor" strokeOpacity={0.15} />

        {/* Séparations des 12 signes */}
        {SIGN_ORDER.map((sign, i) => {
          const boundaryAngle = toScreenAngle(i * 30);
          const p1 = pointOnCircle(cx, cy, rSignRing, boundaryAngle);
          const p2 = pointOnCircle(cx, cy, rOuter, boundaryAngle);
          const labelPos = pointOnCircle(cx, cy, (rSignRing + rOuter) / 2, toScreenAngle(i * 30 + 15));
          return (
            <g key={sign}>
              <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="currentColor" strokeOpacity={0.3} />
              <text
                x={labelPos.x}
                y={labelPos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={size * 0.035}
                fill="currentColor"
              >
                {SIGN_GLYPH[sign]}
              </text>
            </g>
          );
        })}

        {/* Axe Ascendant / Descendant */}
        {(() => {
          const asc = pointOnCircle(cx, cy, rOuter, toScreenAngle(ascLongitude));
          const desc = pointOnCircle(cx, cy, rOuter, toScreenAngle(ascLongitude + 180));
          return (
            <>
              <line x1={asc.x} y1={asc.y} x2={desc.x} y2={desc.y} stroke="currentColor" strokeWidth={1.5} strokeOpacity={0.6} />
              <text x={asc.x} y={asc.y} textAnchor="end" dx={-6} fontSize={size * 0.03} fill="currentColor" fontWeight="bold">AC</text>
              <text x={desc.x} y={desc.y} textAnchor="start" dx={6} fontSize={size * 0.03} fill="currentColor" fontWeight="bold">DC</text>
            </>
          );
        })()}

        {/* Axe Milieu du ciel / Fond du ciel */}
        {mcLongitude !== null && (() => {
          const mc = pointOnCircle(cx, cy, rOuter, toScreenAngle(mcLongitude));
          const ic = pointOnCircle(cx, cy, rOuter, toScreenAngle(mcLongitude + 180));
          return (
            <>
              <line x1={mc.x} y1={mc.y} x2={ic.x} y2={ic.y} stroke="currentColor" strokeWidth={1.5} strokeOpacity={0.6} strokeDasharray="4 3" />
              <text x={mc.x} y={mc.y} textAnchor="middle" dy={-8} fontSize={size * 0.03} fill="currentColor" fontWeight="bold">MC</text>
              <text x={ic.x} y={ic.y} textAnchor="middle" dy={12} fontSize={size * 0.03} fill="currentColor" fontWeight="bold">FC</text>
            </>
          );
        })()}

        {/* Planètes */}
        {placedPlanets.map((p, i) => {
          const pos = pointOnCircle(cx, cy, p.radius, p.angle);
          const tickInner = pointOnCircle(cx, cy, rHouseLine, p.angle);
          const tickOuter = pointOnCircle(cx, cy, rHouseLine - size * 0.02, p.angle);
          return (
            <g key={i}>
              <line
                x1={tickInner.x}
                y1={tickInner.y}
                x2={tickOuter.x}
                y2={tickOuter.y}
                stroke="currentColor"
                strokeOpacity={0.4}
              />
              <text
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={size * 0.045}
                fill="currentColor"
              >
                {PLANET_GLYPH[p.name] || p.name.slice(0, 2)}
              </text>
              {p.isRetrograde ? (
                <text
                  x={pos.x + size * 0.03}
                  y={pos.y - size * 0.02}
                  fontSize={size * 0.02}
                  fill="currentColor"
                >
                  R
                </text>
              ) : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
