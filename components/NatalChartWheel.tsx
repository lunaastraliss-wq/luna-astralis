"use client";





import __i18n from "../i18n/migrated/fr/components/natalchartwheel.json";
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
  Chiron: "⚷",
  NorthNode: "☊",
  SouthNode: "☋",
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
  showLegend?: boolean;
};

type AspectDefinition = {
  name: string;
  symbol: string;
  angle: number;
  orb: number;
  color: string;
  opacity: number;
  dash?: string;
};

type PlacedPlanet = WheelPlanet & {
  angle: number;
  radius: number;
  level: number;
};

const ASPECTS: AspectDefinition[] = [
  {
    name: "Conjonction",
    symbol: "☌",
    angle: 0,
    orb: 8,
    color: "#f4c95d",
    opacity: 0.7,
  },
  {
    name: "Sextile",
    symbol: "⚹",
    angle: 60,
    orb: 5,
    color: "#4fa3ff",
    opacity: 0.68,
  },
  {
    name: "Carré",
    symbol: "□",
    angle: 90,
    orb: 6,
    color: "#ff5c5c",
    opacity: 0.72,
  },
  {
    name: "Trigone",
    symbol: "△",
    angle: 120,
    orb: 6,
    color: "#4fa3ff",
    opacity: 0.72,
  },
  {
    name: "Opposition",
    symbol: "☍",
    angle: 180,
    orb: 8,
    color: "#ff5c5c",
    opacity: 0.76,
  },
];

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
    Math.abs(
      normalizeLongitude(a) -
        normalizeLongitude(b)
    ) % 360;

  return difference > 180
    ? 360 - difference
    : difference;
}

function getAspect(difference: number) {
  return ASPECTS.find(
    (aspect) =>
      Math.abs(difference - aspect.angle) <=
      aspect.orb
  );
}

function getMiddleLongitude(
  currentLongitude: number,
  nextLongitude: number
) {
  const current = normalizeLongitude(
    currentLongitude
  );

  let next = normalizeLongitude(nextLongitude);

  if (next <= current) {
    next += 360;
  }

  return normalizeLongitude(
    (current + next) / 2
  );
}

function getDegreeInSign(longitude: number) {
  return normalizeLongitude(longitude) % 30;
}

function formatDegree(
  longitude: number,
  includeMinutes = false
) {
  const degreeInSign =
    getDegreeInSign(longitude);

  const degree = Math.floor(degreeInSign);

  if (!includeMinutes) {
    return `${degree}°`;
  }

  const minutes = Math.floor(
    (degreeInSign - degree) * 60
  );

  return `${degree}°${String(minutes).padStart(
    2,
    "0"
  )}′`;
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

  const threshold = 11;
  const groups: WheelPlanet[][] = [];

  sortedPlanets.forEach((planet) => {
    const lastGroup =
      groups[groups.length - 1];

    if (!lastGroup) {
      groups.push([planet]);
      return;
    }

    const previous =
      lastGroup[lastGroup.length - 1];

    if (
      angleDiff(
        previous.longitude,
        planet.longitude
      ) < threshold
    ) {
      lastGroup.push(planet);
    } else {
      groups.push([planet]);
    }
  });

  if (groups.length > 1) {
    const firstGroup = groups[0];
    const lastGroup =
      groups[groups.length - 1];

    const firstPlanet = firstGroup[0];
    const lastPlanet =
      lastGroup[lastGroup.length - 1];

    if (
      angleDiff(
        firstPlanet.longitude,
        lastPlanet.longitude
      ) < threshold
    ) {
      groups[0] = [
        ...lastGroup,
        ...firstGroup,
      ];

      groups.pop();
    }
  }

  return groups.flatMap((group) =>
    group.map((planet, index) => ({
      ...planet,
      angle: toAngle(planet.longitude),
      radius: radii[index % radii.length],
      level: index % radii.length,
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
  size = 620,
  showLegend = true,
}: Props) {
  const uniqueId = useId().replace(
    /:/g,
    ""
  );

  const backgroundId = `wheel-background-${uniqueId}`;
  const goldId = `wheel-gold-${uniqueId}`;
  const centerGlowId = `wheel-center-${uniqueId}`;
  const planetGlowId = `planet-glow-${uniqueId}`;

  const cx = size / 2;
  const cy = size / 2;

  const outerRadius = size * 0.475;
  const graduationOuterRadius =
    size * 0.462;
  const graduationInnerRadius =
    size * 0.44;

  const zodiacOuterRadius = size * 0.425;
  const zodiacInnerRadius = size * 0.355;

  const houseOuterRadius = size * 0.35;
  const planetConnectionRadius =
    size * 0.315;

  const planetRadii = [
    size * 0.285,
    size * 0.245,
    size * 0.205,
    size * 0.17,
  ];

  const aspectRadius = size * 0.15;
  const centerRadius = size * 0.07;

  const safeAscendant = Number.isFinite(
    ascendantLongitude
  )
    ? normalizeLongitude(
        ascendantLongitude
      )
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

  const cusps = [
    ...(houses?.cusps ?? []),
  ]
    .filter(
      (cusp) =>
        Number.isFinite(cusp.house) &&
        Number.isFinite(cusp.longitude)
    )
    .sort(
      (a, b) => a.house - b.house
    );

  const aspects: {
    p1: WheelPlanet;
    p2: WheelPlanet;
    aspect: AspectDefinition;
  }[] = [];

  for (
    let i = 0;
    i < validPlanets.length;
    i++
  ) {
    for (
      let j = i + 1;
      j < validPlanets.length;
      j++
    ) {
      const difference = angleDiff(
        validPlanets[i].longitude,
        validPlanets[j].longitude
      );

      const aspect =
        getAspect(difference);

      if (aspect) {
        aspects.push({
          p1: validPlanets[i],
          p2: validPlanets[j],
          aspect,
        });
      }
    }
  }

 const axisRadius = outerRadius - size * 0.05;

const ascendantPoint = point(
  cx,
  cy,
  axisRadius,
  toAngle(safeAscendant)
);

const descendantPoint = point(
  cx,
  cy,
  axisRadius,
  toAngle(safeAscendant + 180)
);

  const ascendantDegree =
    formatDegree(
      safeAscendant,
      true
    );

  const descendantDegree =
    formatDegree(
      safeAscendant + 180,
      true
    );

  const hasMidheaven =
    typeof midheavenLongitude ===
      "number" &&
    Number.isFinite(
      midheavenLongitude
    );

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
          aria-label={__i18n["carte_du_ciel_astrologique"]}
          style={{
            display: "block",
            overflow: "visible",
          }}
        >
          <defs>
            <radialGradient
              id={backgroundId}
              cx="50%"
              cy="50%"
              r="50%"
            >
              <stop
                offset="0%"
                stopColor="#21345c"
                stopOpacity="0.52"
              />

              <stop
                offset="58%"
                stopColor="#17233f"
                stopOpacity="0.38"
              />

              <stop
                offset="100%"
                stopColor="#070d1d"
                stopOpacity="0.18"
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
                stopColor="#fff5b8"
                stopOpacity="0.95"
              />

              <stop
                offset="15%"
                stopColor="#f4c95d"
                stopOpacity="0.75"
              />

              <stop
                offset="55%"
                stopColor="#f4c95d"
                stopOpacity="0.13"
              />

              <stop
                offset="100%"
                stopColor="#f4c95d"
                stopOpacity="0"
              />
            </radialGradient>

            <radialGradient
              id={planetGlowId}
              cx="50%"
              cy="40%"
              r="60%"
            >
              <stop
                offset="0%"
                stopColor="#253759"
                stopOpacity="0.96"
              />

              <stop
                offset="100%"
                stopColor="#070d1d"
                stopOpacity="0.98"
              />
            </radialGradient>

            <linearGradient
              id={goldId}
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
                offset="46%"
                stopColor="#f4c95d"
              />

              <stop
                offset="100%"
                stopColor="#b8892d"
              />
            </linearGradient>

            <filter
              id={`shadow-${uniqueId}`}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="3"
                floodColor="#000000"
                floodOpacity="0.55"
              />
            </filter>
          </defs>

          <circle
            cx={cx}
            cy={cy}
            r={outerRadius}
            fill={`url(#${backgroundId})`}
          />

          <circle
            cx={cx}
            cy={cy}
            r={outerRadius}
            fill="none"
            stroke={`url(#${goldId})`}
            strokeWidth={3}
          />

          <circle
            cx={cx}
            cy={cy}
            r={
              outerRadius -
              size * 0.012
            }
            fill="none"
            stroke="#f4c95d"
            strokeOpacity={0.32}
            strokeWidth={1}
          />

          {/* Graduations astrologiques */}
          {Array.from(
            { length: 360 },
            (_, degree) => {
              const angle =
                toAngle(degree);

              const isSignBoundary =
                degree % 30 === 0;

              const isTenDegree =
                degree % 10 === 0;

              const isFiveDegree =
                degree % 5 === 0;

              const innerRadius =
                isSignBoundary
                  ? graduationInnerRadius -
                    size * 0.014
                  : isTenDegree
                    ? graduationInnerRadius
                    : isFiveDegree
                      ? graduationInnerRadius +
                        size * 0.006
                      : graduationInnerRadius +
                        size * 0.012;

              const start = point(
                cx,
                cy,
                innerRadius,
                angle
              );

              const end = point(
                cx,
                cy,
                graduationOuterRadius,
                angle
              );

              return (
                <line
                  key={`degree-${degree}`}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke={
                    isSignBoundary
                      ? "#f4c95d"
                      : "currentColor"
                  }
                  strokeOpacity={
                    isSignBoundary
                      ? 0.78
                      : isTenDegree
                        ? 0.55
                        : isFiveDegree
                          ? 0.38
                          : 0.2
                  }
                  strokeWidth={
                    isSignBoundary
                      ? 1.5
                      : isTenDegree
                        ? 1
                        : 0.65
                  }
                />
              );
            }
          )}

          <circle
            cx={cx}
            cy={cy}
            r={zodiacOuterRadius}
            fill="none"
            stroke="#f4c95d"
            strokeOpacity={0.5}
            strokeWidth={1.2}
          />

          <circle
            cx={cx}
            cy={cy}
            r={zodiacInnerRadius}
            fill="none"
            stroke="#f4c95d"
            strokeOpacity={0.38}
            strokeWidth={1}
          />

          <circle
            cx={cx}
            cy={cy}
            r={houseOuterRadius}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.18}
            strokeWidth={1}
          />

          <circle
            cx={cx}
            cy={cy}
            r={aspectRadius}
            fill="none"
            stroke="#f4c95d"
            strokeOpacity={0.3}
            strokeWidth={1}
          />

          {/* Signes du zodiaque */}
          {SIGNS.map(
            (glyph, index) => {
              const startLongitude =
                index * 30;

              const middleLongitude =
                startLongitude + 15;

              const boundaryAngle =
                toAngle(
                  startLongitude
                );

              const labelAngle =
                toAngle(
                  middleLongitude
                );

              const boundaryStart =
                point(
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

              const labelPosition =
                point(
                  cx,
                  cy,
                  (zodiacOuterRadius +
                    zodiacInnerRadius) /
                    2,
                  labelAngle
                );

              return (
                <g
                  key={`${glyph}-${index}`}
                >
                  <line
                    x1={
                      boundaryStart.x
                    }
                    y1={
                      boundaryStart.y
                    }
                    x2={boundaryEnd.x}
                    y2={boundaryEnd.y}
                    stroke="#f4c95d"
                    strokeOpacity={0.38}
                    strokeWidth={1}
                  />

                  <text
                    x={labelPosition.x}
                    y={labelPosition.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={
                      size * 0.045
                    }
                    fill="#b784ff"
                    fontWeight={800}
                    filter={`url(#shadow-${uniqueId})`}
                  >
                    {glyph}
                  </text>
                </g>
              );
            }
          )}

          {/* Degrés 10° et 20° dans chaque signe */}
          {Array.from(
            { length: 12 },
            (_, signIndex) => {
              return [10, 20].map(
                (degree) => {
                  const longitude =
                    signIndex * 30 +
                    degree;

                  const angle =
                    toAngle(longitude);

                  const position =
                    point(
                      cx,
                      cy,
                      zodiacOuterRadius +
                        size * 0.022,
                      angle
                    );

                  return (
                    <text
                      key={`sign-degree-${longitude}`}
                      x={position.x}
                      y={position.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={
                        size * 0.018
                      }
                      fill="currentColor"
                      opacity={0.72}
                      fontWeight={600}
                    >
                      {degree}°
                    </text>
                  );
                }
              );
            }
          )}

          {/* Maisons */}
          {cusps.map(
            (cusp, index) => {
              const nextCusp =
                cusps[
                  (index + 1) %
                    cusps.length
                ];

              const cuspAngle =
                toAngle(
                  cusp.longitude
                );

              const middleLongitude =
                nextCusp
                  ? getMiddleLongitude(
                      cusp.longitude,
                      nextCusp.longitude
                    )
                  : normalizeLongitude(
                      cusp.longitude + 15
                    );

              const middleAngle =
                toAngle(
                  middleLongitude
                );

              const lineStart =
                point(
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

              const houseNumberPosition =
                point(
                  cx,
                  cy,
                  houseOuterRadius -
                    size * 0.035,
                  middleAngle
                );

              const cuspDegreePosition =
                point(
                  cx,
                  cy,
                  zodiacInnerRadius -
                    size * 0.023,
                  cuspAngle
                );

              const isAngular =
                cusp.house === 1 ||
                cusp.house === 4 ||
                cusp.house === 7 ||
                cusp.house === 10;

              return (
                <g
                  key={`house-${cusp.house}`}
                >
                  <line
                    x1={lineStart.x}
                    y1={lineStart.y}
                    x2={lineEnd.x}
                    y2={lineEnd.y}
                    stroke={
                      isAngular
                        ? "#f4c95d"
                        : "currentColor"
                    }
                    strokeOpacity={
                      isAngular
                        ? 0.62
                        : 0.24
                    }
                    strokeWidth={
                      isAngular
                        ? 1.5
                        : 1
                    }
                  />

                  <text
                    x={
                      houseNumberPosition.x
                    }
                    y={
                      houseNumberPosition.y
                    }
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={
                      size * 0.023
                    }
                    fill={
                      isAngular
                        ? "#f4c95d"
                        : "currentColor"
                    }
                    opacity={
                      isAngular
                        ? 0.96
                        : 0.8
                    }
                    fontWeight={800}
                  >
                    {cusp.house}
                  </text>

                  <text
                    x={
                      cuspDegreePosition.x
                    }
                    y={
                      cuspDegreePosition.y
                    }
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={
                      size * 0.014
                    }
                    fill="#f4c95d"
                    opacity={0.85}
                    fontWeight={700}
                  >
                    {formatDegree(
                      cusp.longitude,
                      true
                    )}
                  </text>
                </g>
              );
            }
          )}

          {/* Aspects */}
          {aspects.map(
            (
              {
                p1,
                p2,
                aspect,
              },
              index
            ) => {
              const firstPoint =
                point(
                  cx,
                  cy,
                  aspectRadius,
                  toAngle(
                    p1.longitude
                  )
                );

              const secondPoint =
                point(
                  cx,
                  cy,
                  aspectRadius,
                  toAngle(
                    p2.longitude
                  )
                );

              return (
                <line
                  key={`aspect-${p1.name}-${p2.name}-${index}`}
                  x1={firstPoint.x}
                  y1={firstPoint.y}
                  x2={secondPoint.x}
                  y2={secondPoint.y}
                  stroke={
                    aspect.color
                  }
                  strokeWidth={1.25}
                  strokeOpacity={
                    aspect.opacity
                  }
                  strokeDasharray={
                    aspect.dash
                  }
                  strokeLinecap="round"
                />
              );
            }
          )}

          {/* Axe Ascendant / Descendant */}
          <g>
            <line
              x1={ascendantPoint.x}
              y1={ascendantPoint.y}
              x2={descendantPoint.x}
              y2={descendantPoint.y}
              stroke="#f4c95d"
              strokeWidth={2.6}
              strokeOpacity={0.95}
            />

            <text
              x={ascendantPoint.x}
              y={ascendantPoint.y}
              dx={-12}
              dy={-4}
              textAnchor="end"
              dominantBaseline="middle"
              fontSize={size * 0.031}
              fill="#f4c95d"
              fontWeight={900}
            >
              AC
            </text>

            <text
              x={ascendantPoint.x}
              y={ascendantPoint.y}
              dx={-12}
              dy={size * 0.026}
              textAnchor="end"
              dominantBaseline="middle"
              fontSize={size * 0.016}
              fill="#f4c95d"
              fontWeight={700}
            >
              {ascendantDegree}
            </text>

            <text
              x={descendantPoint.x}
              y={descendantPoint.y}
              dx={12}
              dy={-4}
              textAnchor="start"
              dominantBaseline="middle"
              fontSize={size * 0.031}
              fill="#f4c95d"
              fontWeight={900}
            >
              DC
            </text>

            <text
              x={descendantPoint.x}
              y={descendantPoint.y}
              dx={12}
              dy={size * 0.026}
              textAnchor="start"
              dominantBaseline="middle"
              fontSize={size * 0.016}
              fill="#f4c95d"
              fontWeight={700}
            >
              {descendantDegree}
            </text>
          </g>

          {/* Axe MC / FC */}
          {hasMidheaven &&
            (() => {
              const safeMidheaven =
                normalizeLongitude(
                  midheavenLongitude
                );

              const mcPoint =
                point(
                  cx,
                  cy,
                  axisRadius,
                  toAngle(
                    safeMidheaven
                  )
                );

              const fcPoint =
                point(
                  cx,
                  cy,
                  axisRadius,
                  toAngle(
                    safeMidheaven +
                      180
                  )
                );

              return (
                <g>
                  <line
                    x1={mcPoint.x}
                    y1={mcPoint.y}
                    x2={fcPoint.x}
                    y2={fcPoint.y}
                    stroke="#f4c95d"
                    strokeWidth={1.8}
                    strokeOpacity={0.72}
                    strokeDasharray="7 5"
                  />

                  <text
                    x={mcPoint.x}
                    y={mcPoint.y}
                    dy={-12}
                    textAnchor="middle"
                    fontSize={
                      size * 0.029
                    }
                    fill="#f4c95d"
                    fontWeight={900}
                  >
                    MC
                  </text>

                  <text
                    x={mcPoint.x}
                    y={mcPoint.y}
                    dy={size * 0.012}
                    textAnchor="middle"
                    fontSize={
                      size * 0.015
                    }
                    fill="#f4c95d"
                    fontWeight={700}
                  >
                    {formatDegree(
                      safeMidheaven,
                      true
                    )}
                  </text>

                  <text
                    x={fcPoint.x}
                    y={fcPoint.y}
                    dy={size * 0.034}
                    textAnchor="middle"
                    fontSize={
                      size * 0.029
                    }
                    fill="#f4c95d"
                    fontWeight={900}
                  >
                    FC
                  </text>

                  <text
                    x={fcPoint.x}
                    y={fcPoint.y}
                    dy={size * 0.058}
                    textAnchor="middle"
                    fontSize={
                      size * 0.015
                    }
                    fill="#f4c95d"
                    fontWeight={700}
                  >
                    {formatDegree(
                      safeMidheaven +
                        180,
                      true
                    )}
                  </text>
                </g>
              );
            })()}

          {/* Planètes */}
          {placedPlanets.map(
            (planet, index) => {
              const position = point(
                cx,
                cy,
                planet.radius,
                planet.angle
              );

              const connectionStart =
                point(
                  cx,
                  cy,
                  planetConnectionRadius,
                  planet.angle
                );

              const connectionEnd =
                point(
                  cx,
                  cy,
                  planet.radius +
                    size * 0.036,
                  planet.angle
                );

              const degreePosition =
                point(
                  cx,
                  cy,
                  planet.radius -
                    size * 0.045,
                  planet.angle
                );

              return (
                <g
                  key={`${planet.name}-${planet.longitude}-${index}`}
                >
                  <line
                    x1={
                      connectionStart.x
                    }
                    y1={
                      connectionStart.y
                    }
                    x2={
                      connectionEnd.x
                    }
                    y2={
                      connectionEnd.y
                    }
                    stroke="#f4c95d"
                    strokeOpacity={0.3}
                    strokeWidth={0.8}
                  />

                  <circle
                    cx={position.x}
                    cy={position.y}
                    r={size * 0.034}
                    fill={`url(#${planetGlowId})`}
                    stroke="#f4c95d"
                    strokeOpacity={0.72}
                    strokeWidth={1}
                    filter={`url(#shadow-${uniqueId})`}
                  />

                  <text
                    x={position.x}
                    y={position.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={
                      size * 0.042
                    }
                    fill="#f4c95d"
                    fontWeight={800}
                  >
                    {PLANET_GLYPH[
                      planet.name
                    ] ||
                      planet.name.slice(
                        0,
                        2
                      )}
                  </text>

                  <text
                    x={
                      degreePosition.x
                    }
                    y={
                      degreePosition.y
                    }
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={
                      size * 0.016
                    }
                    fill="#f4c95d"
                    fontWeight={700}
                  >
                    {formatDegree(
                      planet.longitude,
                      true
                    )}
                  </text>

                  {planet.isRetrograde && (
                    <text
                      x={
                        position.x +
                        size * 0.036
                      }
                      y={
                        position.y -
                        size * 0.027
                      }
                      fontSize={
                        size * 0.019
                      }
                      fill="#ffb4b4"
                      fontWeight={900}
                    >
                      R
                    </text>
                  )}
                </g>
              );
            }
          )}

          {/* Étoile centrale */}
          <circle
            cx={cx}
            cy={cy}
            r={size * 0.055}
            fill={`url(#${centerGlowId})`}
          />

          <circle
            cx={cx}
            cy={cy}
            r={size * 0.009}
            fill="#fff4b0"
          />

          {Array.from(
            { length: 8 },
            (_, index) => {
              const angle =
                index * 45;

              const start = point(
                cx,
                cy,
                size * 0.01,
                angle
              );

              const end = point(
                cx,
                cy,
                index % 2 === 0
                  ? size * 0.035
                  : size * 0.023,
                angle
              );

              return (
                <line
                  key={`star-${index}`}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke="#fff4b0"
                  strokeWidth={
                    index % 2 === 0
                      ? 1.6
                      : 1
                  }
                  strokeOpacity={0.9}
                />
              );
            }
          )}
        </svg>
      </div>

      {showLegend && (
        <div
          className="natal-aspect-legend"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(5, minmax(0, 1fr))",
            gap: 10,
            padding: "14px 16px",
            marginTop: 16,
            border:
              "1px solid rgba(244, 201, 93, 0.4)",
            borderRadius: 18,
            background:
              "rgba(7, 13, 29, 0.62)",
            backdropFilter: "blur(8px)",
          }}
        >
          {ASPECTS.map((aspect) => (
            <div
              key={aspect.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent:
                  "center",
                gap: 7,
                minWidth: 0,
                fontSize: 12,
                lineHeight: 1.2,
                textAlign: "center",
              }}
            >
              <span
                style={{
                  color: aspect.color,
                  fontSize: 18,
                  fontWeight: 800,
                }}
              >
                {aspect.symbol}
              </span>
        
              <span>
                <strong
                  style={{
                    display: "block",
                  }}
                >
                  {aspect.name}
                </strong>
        
                <span
                  style={{
                    opacity: 0.72,
                  }}
                >
                  {aspect.angle}°
                </span>
              </span>
            </div>
          ))}
        </div>
        
      )}

      {(ascendantFormatted ||
        midheavenFormatted) && (
        <div
          className="natal-wheel-caption"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px 22px",
            marginTop: 16,
            textAlign: "center",
            fontSize: 14,
            lineHeight: 1.5,
          }}
        >
          {ascendantFormatted && (
            <span>
              <strong
                style={{
                  color: "#f4c95d",
                }}
              >
                {__i18n["ascendant"]}</strong>{" "}
              {ascendantFormatted}
            </span>
          )}

          {midheavenFormatted && (
            <span>
              <strong
                style={{
                  color: "#f4c95d",
                }}
              >
                {__i18n["milieu_du_ciel"]}</strong>{" "}
              {midheavenFormatted}
            </span>
          )}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 620px) {
          .natal-aspect-legend {
            grid-template-columns: repeat(
              2,
              minmax(0, 1fr)
            ) !important;
          }

          .natal-aspect-legend > div:last-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </div>
  );
}
