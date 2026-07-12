export const MAIN_PLANETS = [
  "Sun",
  "Moon",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
] as const;

export const PLANET_NAMES: Record<string, string> = {
  Sun: "Soleil",
  Moon: "Lune",
  Mercury: "Mercure",
  Venus: "Vénus",
  Mars: "Mars",
  Jupiter: "Jupiter",
  Saturn: "Saturne",
  Uranus: "Uranus",
  Neptune: "Neptune",
  Pluto: "Pluton",
};

export function getPlanet(
  planets: any[],
  name: string
) {
  return (
    planets.find(
      (planet) => planet?.name === name
    ) || null
  );
}

export function formatDegree(
  value?: number
): string {
  if (
    typeof value !== "number" ||
    Number.isNaN(value)
  ) {
    return "--";
  }

  return `${value.toFixed(1)}°`;
}

export function displayValue(
  value?: string
): string {
  const clean = value?.trim();

  return clean || "Non précisé";
}
