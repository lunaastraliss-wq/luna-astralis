"use client";

const SIGN_GLYPH = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

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
  Chiron: "⚷",
  "North Node": "☊",
  "South Node": "☋",
  Lilith: "⚸",
  Ceres: "⚳",
  Pallas: "⚴",
  Juno: "⚵",
  Vesta: "⚶",
};

interface WheelPlanet {
  name: string;
  longitude: number;
  isRetrograde?: boolean;
}

interface HouseCusp {
  house: number;
  longitude: number;
}

interface NatalChartWheelProps {
  planets: WheelPlanet[];
  houses?: {
    cusps?: HouseCusp[];
  };
  ascendantLongitude?: number;
  midheavenLongitude?: number;
  ascendantFormatted?: string;
  midheavenFormatted?: string;
  size?: number;
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
  houses,
  ascendantLongitude = 0,
  midheavenLongitude,
  ascendantFormatted,
  midheavenFormatted,
  size = 480,
}: NatalChartWheelProps) {
  const cx = size / 2;
  const cy = size / 2;

  const rOuter = size * 0.48;
  const rSignRing = size * 0.41;
  const rHouseRing = size * 0.34;
  const rPlanetBase = size * 0.27;
  const rPlanetAlt = size * 0.22;

  const toScreenAngle = (longitude: number) => {
    const relative = ((longitude - ascendantLongitude) % 360 + 360) % 360;
    return 180 - relative;
  };

  const validPlanets = planets.filter(
    (p) => typeof p.longitude === "number" && Number.isFinite(p.longitude)
  );

  const sortedPlanets = [...validPlanets].sort(
    (a, b) => a.longitude - b.longitude
  );

  let lastAngle: number | null = null;
  let toggle = false;

  const placedPlanets = sortedPlanets.map((p) => {
    const angle = toScreenAngle(p.longitude);

    if (lastAngle !== null) {
      let diff = Math.abs(angle - lastAngle);
      if (diff > 180) diff = 360 - diff;
      toggle = diff < 10 ? !toggle : false;
    }

    lastAngle = angle;

    return {
      ...p,
      angle,
      radius: toggle ? rPlanetAlt : rPlanetBase,
    };
  });

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
        <circle
          cx={cx}
          cy={cy}
          r={rOuter}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.3}
        />

        <circle
          cx={cx}
          cy={cy}
          r={rSignRing}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.2}
        />

        <circle
          cx={cx}
          cy={cy}
          r={rHouseRing}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.18}
        />

        {SIGN_GLYPH.map((glyph, i) => {
          const angle = toScreenAngle(i * 30);
          const labelAngle = toScreenAngle(i * 30 + 15);

          const p1 = pointOnCircle(cx, cy, rSignRing, angle);
          const p2 = pointOnCircle(cx, cy, rOuter, angle);
          const label = pointOnCircle(
            cx,
            cy,
            (rSignRing + rOuter) / 2,
            labelAngle
          );

          return (
            <g key={i}>
              <line
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke="currentColor"
                strokeOpacity={0.3}
              />

              <text
                x={label.x}
                y={label.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={size * 0.035}
                fill="currentColor"
              >
                {glyph}
              </text>
            </g>
          );
        })}

        {cusps.map((cusp) => {
          const angle = toScreenAngle(cusp.longitude);
          const p1 = pointOnCircle(cx, cy, rHouseRing, angle);
          const p2 = pointOnCircle(cx, cy, rOuter, angle);
          const label = pointOnCircle(cx, cy, rHouseRing - size * 0.035, angle);

          return (
            <g key={cusp.house}>
              <line
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke="currentColor"
                strokeOpacity={0.35}
              />

              <text
                x={label.x}
                y={label.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={size * 0.025}
                fill="currentColor"
              >
                {cusp.house}
              </text>
            </g>
          );
        })}

        {(() => {
          const asc = pointOnCircle(
            cx,
            cy,
            rOuter,
            toScreenAngle(ascendantLongitude)
          );

          const desc = pointOnCircle(
            cx,
            cy,
            rOuter,
            toScreenAngle(ascendantLongitude + 180)
          );

          return (
            <>
              <line
                x1={asc.x}
                y1={asc.y}
                x2={desc.x}
                y2={desc.y}
                stroke="currentColor"
                strokeWidth={1.8}
                strokeOpacity={0.7}
              />

              <text
                x={asc.x}
                y={asc.y}
                textAnchor="end"
                dx={-6}
                fontSize={size * 0.03}
                fill="currentColor"
                fontWeight="bold"
              >
                AC
              </text>

              <text
                x={desc.x}
                y={desc.y}
                textAnchor="start"
                dx={6}
                fontSize={size * 0.03}
                fill="currentColor"
                fontWeight="bold"
              >
                DC
              </text>
            </>
          );
        })()}

        {typeof midheavenLongitude === "number" &&
          (() => {
            const mc = pointOnCircle(
              cx,
              cy,
              rOuter,
              toScreenAngle(midheavenLongitude)
            );

            const ic = pointOnCircle(
              cx,
              cy,
              rOuter,
              toScreenAngle(midheavenLongitude + 180)
            );

            return (
              <>
                <line
                  x1={mc.x}
                  y1={mc.y}
                  x2={ic.x}
                  y2={ic.y}
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeOpacity={0.6}
                  strokeDasharray="4 3"
                />

                <text
                  x={mc.x}
                  y={mc.y}
                  textAnchor="middle"
                  dy={-8}
                  fontSize={size * 0.03}
                  fill="currentColor"
                  fontWeight="bold"
                >
                  MC
                </text>

                <text
                  x={ic.x}
                  y={ic.y}
                  textAnchor="middle"
                  dy={12}
                  fontSize={size * 0.03}
                  fill="currentColor"
                  fontWeight="bold"
                >
                  FC
                </text>
              </>
            );
          })()}

        {placedPlanets.map((p, i) => {
          const pos = pointOnCircle(cx, cy, p.radius, p.angle);
          const tickInner = pointOnCircle(cx, cy, rHouseRing, p.angle);
          const tickOuter = pointOnCircle(
            cx,
            cy,
            rHouseRing - size * 0.02,
            p.angle
          );

          return (
            <g key={`${p.name}-${i}`}>
              <line
                x1={tickInner.x}
                y1={tickInner.y}
                x2={tickOuter.x}
                y2={tickOuter.y}
                stroke="currentColor"
                strokeOpacity={0.45}
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

      {(ascendantFormatted || midheavenFormatted) && (
        <div
          style={{
            marginTop: 12,
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
            fontSize: 14,
            opacity: 0.85,
          }}
        >
          {ascendantFormatted ? (
            <span>
              <strong>Ascendant :</strong> {ascendantFormatted}
            </span>
          ) : null}

          {midheavenFormatted ? (
            <span>
              <strong>Milieu du ciel :</strong> {midheavenFormatted}
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
}
