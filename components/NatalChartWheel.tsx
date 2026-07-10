"use client";

import { useId } from "react";

const SIGNS = [
  "♈",
  "♉",
  "♊",
  "♋",
  "♌",
  "♍",
  "♎",
  "♏",
  "♐",
  "♑",
  "♒",
  "♓",
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

type PlacedPlanet = WheelPlanet & {
  angle: number;
  radius: number;
};

function normalizeLongitude(value: number) {
  return ((value % 360) + 360) % 360;
}

function point(
  cx: number,
  cy: number,
  radius: number,
  angle: number
) {
  const radians = (angle * Math.PI) / 180;

  return {
    x: cx + radius * Math.cos(radians),
    y: cy - radius * Math.sin(radians),
  };
}

function angleDiff(a: number, b: number) {
  const difference =
    Math.abs(normalizeLongitude(a) - normalizeLongitude(b)) % 360;

  return difference > 180 ? 360 - difference : difference;
}

function getAspect(difference: number) {
  const aspects = [
    {
      angle: 0,
      orb: 8,
      color: "#f4c95d",
      opacity: 0.42,
    },
    {
      angle: 60,
      orb: 5,
      color: "#4fa3ff",
      opacity: 0.42,
    },
    {
      angle: 90,
      orb: 6,
      color: "#ff5c5c",
      opacity: 0.48,
    },
    {
      angle: 120,
      orb: 6,
      color: "#4fa3ff",
      opacity: 0.48,
    },
    {
      angle: 180,
      orb: 8,
      color: "#ff5c5c",
      opacity: 0.5,
    },
  ];

  return aspects.find(
    (aspect) =>
      Math.abs(difference - aspect.angle) <= aspect.orb
  );
}

function getMiddleLongitude(
  currentLongitude: number,
  nextLongitude: number
) {
  const current = normalizeLongitude(currentLongitude);
  let next = normalizeLongitude(nextLongitude);

  if (next <= current) {
    next += 360;
  }

  return normalizeLongitude((current + next) / 2);
}

function placePlanets(
  planets: WheelPlanet[],
  toAngle: (longitude: number) => number,
  radii: number[]
): PlacedPlanet[] {
  const sortedPlanets = [...planets].sort(
    (a, b) =>
      normalizeLongitude(a.longitude) -
      normalizeLongitude(b.longitude)
  );

  const groupThreshold = 13;
  const groups: WheelPlanet[][] = [];

  sortedPlanets.forEach((planet) => {
    const currentGroup = groups[groups.length - 1];

    if (!currentGroup) {
      groups.push([planet]);
      return;
    }

    const previousPlanet =
      currentGroup[currentGroup.length - 1];

    const difference = angleDiff(
      previousPlanet.longitude,
      planet.longitude
    );

    if (difference < groupThreshold) {
      currentGroup.push(planet);
    } else {
      groups.push([planet]);
    }
  });

  if (groups.length > 1) {
    const firstGroup = groups[0];
    const lastGroup = groups[groups.length - 1];

    const firstPlanet = firstGroup[0];
    const lastPlanet = lastGroup[lastGroup.length - 1];

    if (
      angleDiff(
        firstPlanet.longitude,
        lastPlanet.longitude
      ) < groupThreshold
    ) {
      groups[0] = [...lastGroup, ...firstGroup];
      groups.pop();
    }
  }

  return groups.flatMap((group) =>
    group.map((planet, index) => ({
      ...planet,
      angle: toAngle(planet.longitude),
      radius: radii[index % radii.length],
    }))
  );
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
  const svgId = useId().replace(/:/g, "");

  const glowId = `wheel-glow-${svgId}`;
  const goldStrokeId = `gold-stroke-${svgId}`;
  const centerGlowId = `center-glow-${svgId}`;

  const cx = size / 2;
  const cy = size / 2;

  const outerRadius = size * 0.48;
  const zodiacOuterRadius = size * 0.455;
  const zodiacInnerRadius = size * 0.385;
  const houseRingRadius = size * 0.32;

  const planetRadii = [
    size * 0.255,
    size * 0.215,
    size * 0.175,
  ];

  const aspectRingRadius = size * 0.145;
  const centerRadius = size * 0.105;

  const safeAscendant = Number.isFinite(
    ascendantLongitude
  )
    ? normalizeLongitude(ascendantLongitude)
    : 0;

  const toAngle = (longitude: number) => {
    const relative = normalizeLongitude(
      longitude - safeAscendant
    );

    return 180 - relative;
  };

  const validPlanets = planets.filter(
    (planet) =>
      planet &&
      typeof planet.name === "string" &&
      Number.isFinite(planet.longitude)
  );

  const placedPlanets = placePlanets(
    validPlanets,
    toAngle,
    planetRadii
  );

  const aspects: {
    p1: WheelPlanet;
    p2: WheelPlanet;
    aspect: NonNullable<
      ReturnType<typeof getAspect>
    >;
  }[] = [];

  for (let i = 0; i < validPlanets.length; i++) {
    for (
      let j = i + 1;
      j < validPlanets.length;
      j++
    ) {
      const difference = angleDiff(
        validPlanets[i].longitude,
        validPlanets[j].longitude
      );

      const aspect = getAspect(difference);

      if (aspect) {
        aspects.push({
          p1: validPlanets[i],
          p2: validPlanets[j],
          aspect,
        });
      }
    }
  }

  const cusps = [...(houses?.cusps ?? [])]
    .filter(
      (cusp) =>
        Number.isFinite(cusp.longitude) &&
        Number.isFinite(cusp.house)
    )
    .sort((a, b) => a.house - b.house);

  const ascendantPoint = point(
    cx,
    cy,
    outerRadius,
    toAngle(safeAscendant)
  );

  const descendantPoint = point(
    cx,
    cy,
    outerRadius,
    toAngle(safeAscendant + 180)
  );

  const hasMidheaven =
    typeof midheavenLongitude === "number" &&
    Number.isFinite(midheavenLongitude);

  return (
    <div
      className="natal-wheel-wrap"
      style={{
        width: "100%",
        maxWidth: size,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
        }}
      >
        <svg
          viewBox={`0 0 ${size} ${size}`}
          width="100%"
          height="100%"
          role="img"
          aria-label="Roue astrologique de naissance"
          style={{
            display: "block",
            overflow: "visible",
          }}
        >
          <defs>
            <radialGradient
              id={glowId}
              cx="50%"
              cy="50%"
              r="50%"
            >
              <stop
                offset="0%"
                stopColor="#f4c95d"
                stopOpacity="0.12"
              />

              <stop
                offset="54%"
                stopColor="#ffffff"
                stopOpacity="0.025"
              />

              <stop
                offset="100%"
                stopColor="#000000"
                stopOpacity="0"
              />
            </radialGradient>

            <radialGradient
              id={centerGlowId}
              cx="50%"
              cy="50%"
              r="50%"
            >
              <stop
                offset="0%"
                stopColor="#f4c95d"
                stopOpacity="0.12"
              />

              <stop
                offset="100%"
                stopColor="#f4c95d"
                stopOpacity="0.015"
              />
            </radialGradient>

            <linearGradient
              id={goldStrokeId}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#fff0a8"
              />

              <stop
                offset="48%"
                stopColor="#f4c95d"
              />

              <stop
                offset="100%"
                stopColor="#b8892d"
              />
            </linearGradient>
          </defs>

          <circle
            cx={cx}
            cy={cy}
            r={outerRadius}
            fill={`url(#${glowId})`}
          />

          <circle
            cx={cx}
            cy={cy}
            r={outerRadius}
            fill="none"
            stroke={`url(#${goldStrokeId})`}
            strokeWidth={2.4}
          />

          <circle
            cx={cx}
            cy={cy}
            r={zodiacOuterRadius}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.26}
            strokeWidth={1}
          />

          <circle
            cx={cx}
            cy={cy}
            r={zodiacInnerRadius}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.21}
            strokeWidth={1}
          />

          <circle
            cx={cx}
            cy={cy}
            r={houseRingRadius}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.18}
            strokeWidth={1}
          />

          <circle
            cx={cx}
            cy={cy}
            r={centerRadius}
            fill={`url(#${centerGlowId})`}
            stroke="currentColor"
            strokeOpacity={0.14}
            strokeWidth={1}
          />

          {SIGNS.map((glyph, index) => {
            const signStartLongitude = index * 30;
            const signMiddleLongitude =
              signStartLongitude + 15;

            const boundaryAngle = toAngle(
              signStartLongitude
            );

            const labelAngle = toAngle(
              signMiddleLongitude
            );

            const boundaryStart = point(
              cx,
              cy,
              zodiacInnerRadius,
              boundaryAngle
            );

            const boundaryEnd = point(
              cx,
              cy,
              outerRadius,
              boundaryAngle
            );

            const labelPosition = point(
              cx,
              cy,
              (zodiacOuterRadius +
                zodiacInnerRadius) /
                2,
              labelAngle
            );

            return (
              <g key={`${glyph}-${index}`}>
                <line
                  x1={boundaryStart.x}
                  y1={boundaryStart.y}
                  x2={boundaryEnd.x}
                  y2={boundaryEnd.y}
                  stroke="currentColor"
                  strokeOpacity={0.28}
                  strokeWidth={1}
                />

                <text
                  x={labelPosition.x}
                  y={labelPosition.y}
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

          {cusps.map((cusp, index) => {
            const nextCusp =
              cusps[(index + 1) % cusps.length];

            const cuspAngle = toAngle(
              cusp.longitude
            );

            const labelLongitude = nextCusp
              ? getMiddleLongitude(
                  cusp.longitude,
                  nextCusp.longitude
                )
              : normalizeLongitude(
                  cusp.longitude + 15
                );

            const labelAngle = toAngle(
              labelLongitude
            );

            const lineStart = point(
              cx,
              cy,
              centerRadius,
              cuspAngle
            );

            const lineEnd = point(
              cx,
              cy,
              zodiacInnerRadius,
              cuspAngle
            );

            const labelPosition = point(
              cx,
              cy,
              houseRingRadius -
                size * 0.035,
              labelAngle
            );

            return (
              <g key={`house-${cusp.house}`}>
                <line
                  x1={lineStart.x}
                  y1={lineStart.y}
                  x2={lineEnd.x}
                  y2={lineEnd.y}
                  stroke="currentColor"
                  strokeOpacity={0.24}
                  strokeWidth={
                    cusp.house === 1 ||
                    cusp.house === 4 ||
                    cusp.house === 7 ||
                    cusp.house === 10
                      ? 1.4
                      : 1
                  }
                />

                <text
                  x={labelPosition.x}
                  y={labelPosition.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={size * 0.026}
                  fill="currentColor"
                  opacity={0.78}
                  fontWeight={700}
                >
                  {cusp.house}
                </text>
              </g>
            );
          })}

          {aspects.map(
            ({ p1, p2, aspect }, index) => {
              const firstPoint = point(
                cx,
                cy,
                aspectRingRadius,
                toAngle(p1.longitude)
              );

              const secondPoint = point(
                cx,
                cy,
                aspectRingRadius,
                toAngle(p2.longitude)
              );

              return (
                <line
                  key={`aspect-${p1.name}-${p2.name}-${index}`}
                  x1={firstPoint.x}
                  y1={firstPoint.y}
                  x2={secondPoint.x}
                  y2={secondPoint.y}
                  stroke={aspect.color}
                  strokeWidth={1.15}
                  strokeOpacity={aspect.opacity}
                  strokeLinecap="round"
                />
              );
            }
          )}

          <g>
            <line
              x1={ascendantPoint.x}
              y1={ascendantPoint.y}
              x2={descendantPoint.x}
              y2={descendantPoint.y}
              stroke="#f4c95d"
              strokeWidth={2.4}
              strokeOpacity={0.88}
            />

            <text
              x={ascendantPoint.x}
              y={ascendantPoint.y}
              dx={-10}
              textAnchor="end"
              dominantBaseline="middle"
              fontSize={size * 0.034}
              fill="#f4c95d"
              fontWeight={900}
            >
              AC
            </text>

            <text
              x={descendantPoint.x}
              y={descendantPoint.y}
              dx={10}
              textAnchor="start"
              dominantBaseline="middle"
              fontSize={size * 0.034}
              fill="#f4c95d"
              fontWeight={900}
            >
              DC
            </text>
          </g>

          {hasMidheaven &&
            (() => {
              const safeMidheaven =
                normalizeLongitude(
                  midheavenLongitude
                );

              const midheavenPoint = point(
                cx,
                cy,
                outerRadius,
                toAngle(safeMidheaven)
              );

              const imumCoeliPoint = point(
                cx,
                cy,
                outerRadius,
                toAngle(safeMidheaven + 180)
              );

              return (
                <g>
                  <line
                    x1={midheavenPoint.x}
                    y1={midheavenPoint.y}
                    x2={imumCoeliPoint.x}
                    y2={imumCoeliPoint.y}
                    stroke="#f4c95d"
                    strokeWidth={1.8}
                    strokeOpacity={0.74}
                    strokeDasharray="6 5"
                  />

                  <text
                    x={midheavenPoint.x}
                    y={midheavenPoint.y}
                    dy={-10}
                    textAnchor="middle"
                    fontSize={size * 0.032}
                    fill="#f4c95d"
                    fontWeight={900}
                  >
                    MC
                  </text>

                  <text
                    x={imumCoeliPoint.x}
                    y={imumCoeliPoint.y}
                    dy={16}
                    textAnchor="middle"
                    fontSize={size * 0.032}
                    fill="#f4c95d"
                    fontWeight={900}
                  >
                    FC
                  </text>
                </g>
              );
            })()}

          {placedPlanets.map((planet, index) => {
            const planetPosition = point(
              cx,
              cy,
              planet.radius,
              planet.angle
            );

            const tickStart = point(
              cx,
              cy,
              houseRingRadius,
              planet.angle
            );

            const tickEnd = point(
              cx,
              cy,
              zodiacInnerRadius,
              planet.angle
            );

            return (
              <g
                key={`${planet.name}-${planet.longitude}-${index}`}
              >
                <line
                  x1={tickStart.x}
                  y1={tickStart.y}
                  x2={tickEnd.x}
                  y2={tickEnd.y}
                  stroke="#f4c95d"
                  strokeOpacity={0.38}
                  strokeWidth={0.9}
                />

                <circle
                  cx={planetPosition.x}
                  cy={planetPosition.y}
                  r={size * 0.033}
                  fill="rgba(11, 17, 36, 0.9)"
                  stroke="rgba(244, 201, 93, 0.48)"
                  strokeWidth={1}
                />

                <circle
                  cx={planetPosition.x}
                  cy={planetPosition.y}
                  r={size * 0.028}
                  fill="rgba(244, 201, 93, 0.08)"
                />

                <text
                  x={planetPosition.x}
                  y={planetPosition.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={size * 0.046}
                  fill="#f4c95d"
                  fontWeight={800}
                >
                  {PLANET_GLYPH[planet.name] ||
                    planet.name.slice(0, 2)}
                </text>

                {planet.isRetrograde && (
                  <text
                    x={
                      planetPosition.x +
                      size * 0.034
                    }
                    y={
                      planetPosition.y -
                      size * 0.027
                    }
                    fontSize={size * 0.022}
                    fill="#ffb4b4"
                    fontWeight={900}
                  >
                    R
                  </text>
                )}
              </g>
            );
          })}

          <circle
            cx={cx}
            cy={cy}
            r={size * 0.012}
            fill="#f4c95d"
            opacity={0.82}
          />
        </svg>
      </div>

      {(ascendantFormatted ||
        midheavenFormatted) && (
        <div
          className="natal-wheel-caption"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px 22px",
            marginTop: 14,
            textAlign: "center",
            fontSize: 14,
            lineHeight: 1.5,
          }}
        >
          {ascendantFormatted && (
            <span>
              <strong>Ascendant :</strong>{" "}
              {ascendantFormatted}
            </span>
          )}

          {midheavenFormatted && (
            <span>
              <strong>Milieu du ciel :</strong>{" "}
              {midheavenFormatted}
            </span>
          )}
        </div>
      )}
    </div>
  );
          }
