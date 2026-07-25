import type {
  MonthlyAspect,
  MonthlyAspectType,
  MonthlyPlanetName,
  MonthlyPlanetPosition,
  MonthlySkySnapshot,
} from "./types";

/*
|--------------------------------------------------------------------------
| Définition des aspects
|--------------------------------------------------------------------------
*/

type AspectDefinition = {
  type: MonthlyAspectType;
  label: string;
  angle: number;
  orb: number;
  weight: number;
};

const ASPECT_DEFINITIONS: AspectDefinition[] = [
  {
    type: "conjunction",
    label: "Conjonction",
    angle: 0,
    orb: 5,
    weight: 10,
  },
  {
    type: "sextile",
    label: "Sextile",
    angle: 60,
    orb: 3,
    weight: 6,
  },
  {
    type: "square",
    label: "Carré",
    angle: 90,
    orb: 4,
    weight: 9,
  },
  {
    type: "trine",
    label: "Trigone",
    angle: 120,
    orb: 4,
    weight: 7,
  },
  {
    type: "opposition",
    label: "Opposition",
    angle: 180,
    orb: 5,
    weight: 10,
  },
];

/*
|--------------------------------------------------------------------------
| Priorité des planètes
|--------------------------------------------------------------------------
*/

const PLANET_PRIORITY: Record<
  MonthlyPlanetName,
  number
> = {
  Soleil: 7,
  Lune: 2,
  Mercure: 5,
  Vénus: 6,
  Mars: 7,
  Jupiter: 8,
  Saturne: 9,
  Uranus: 9,
  Neptune: 9,
  Pluton: 10,
  Chiron: 6,
  "Nœud Nord": 5,
  "Nœud Sud": 5,
};

/*
|--------------------------------------------------------------------------
| Utilitaires mathématiques
|--------------------------------------------------------------------------
*/

function normalizeLongitude(
  longitude: number,
): number {
  return (
    ((longitude % 360) + 360) %
    360
  );
}

function getAngularDifference(
  firstLongitude: number,
  secondLongitude: number,
): number {
  const first =
    normalizeLongitude(
      firstLongitude,
    );

  const second =
    normalizeLongitude(
      secondLongitude,
    );

  const rawDifference =
    Math.abs(first - second);

  return rawDifference > 180
    ? 360 - rawDifference
    : rawDifference;
}

function roundValue(
  value: number,
  decimals = 2,
): number {
  const multiplier =
    10 ** decimals;

  return (
    Math.round(
      value * multiplier,
    ) / multiplier
  );
}

/*
|--------------------------------------------------------------------------
| Identifiants
|--------------------------------------------------------------------------
*/

function normalizePlanetPair(
  planet1: MonthlyPlanetName,
  planet2: MonthlyPlanetName,
): [
  MonthlyPlanetName,
  MonthlyPlanetName,
] {
  return [planet1, planet2].sort(
    (
      first,
      second,
    ) =>
      first.localeCompare(
        second,
        "fr",
      ),
  ) as [
    MonthlyPlanetName,
    MonthlyPlanetName,
  ];
}

function buildAspectGroupKey(
  planet1: MonthlyPlanetName,
  planet2: MonthlyPlanetName,
  type: MonthlyAspectType,
): string {
  const [
    firstPlanet,
    secondPlanet,
  ] = normalizePlanetPair(
    planet1,
    planet2,
  );

  return (
    `${firstPlanet}|` +
    `${secondPlanet}|` +
    `${type}`
  );
}

function buildAspectId({
  date,
  planet1,
  planet2,
  type,
}: {
  date: string;
  planet1: MonthlyPlanetName;
  planet2: MonthlyPlanetName;
  type: MonthlyAspectType;
}): string {
  const [
    firstPlanet,
    secondPlanet,
  ] = normalizePlanetPair(
    planet1,
    planet2,
  );

  const cleanPlanet1 =
    firstPlanet
      .normalize("NFD")
      .replace(
        /[\u0300-\u036f]/g,
        "",
      )
      .replace(/\s+/g, "-")
      .toLowerCase();

  const cleanPlanet2 =
    secondPlanet
      .normalize("NFD")
      .replace(
        /[\u0300-\u036f]/g,
        "",
      )
      .replace(/\s+/g, "-")
      .toLowerCase();

  return (
    `${date}-` +
    `${cleanPlanet1}-` +
    `${type}-` +
    `${cleanPlanet2}`
  );
}

/*
|--------------------------------------------------------------------------
| Importance
|--------------------------------------------------------------------------
*/

function calculateImportance({
  planet1,
  planet2,
  definition,
  orb,
}: {
  planet1: MonthlyPlanetName;
  planet2: MonthlyPlanetName;
  definition: AspectDefinition;
  orb: number;
}): number {
  const planetScore =
    (
      PLANET_PRIORITY[planet1] +
      PLANET_PRIORITY[planet2]
    ) / 2;

  const precisionRatio =
    Math.max(
      0,
      1 - orb / definition.orb,
    );

  const precisionScore =
    precisionRatio * 45;

  const aspectScore =
    definition.weight * 3;

  const score =
    planetScore * 3 +
    precisionScore +
    aspectScore;

  return Math.max(
    1,
    Math.min(
      100,
      Math.round(score),
    ),
  );
}

/*
|--------------------------------------------------------------------------
| Interprétation
|--------------------------------------------------------------------------
*/

function buildAspectInterpretation({
  planet1,
  planet2,
  type,
}: {
  planet1: MonthlyPlanetName;
  planet2: MonthlyPlanetName;
  type: MonthlyAspectType;
}): string {
  switch (type) {
    case "conjunction":
      return (
        `${planet1} et ${planet2} unissent leurs influences. ` +
        "Cette concentration d’énergie accentue les thèmes associés à ces deux planètes et peut marquer un moment important du mois."
      );

    case "sextile":
      return (
        `${planet1} et ${planet2} créent une ouverture favorable. ` +
        "Cette configuration soutient les initiatives, les échanges et les occasions qui demandent une participation consciente."
      );

    case "square":
      return (
        `${planet1} et ${planet2} forment une tension dynamique. ` +
        "Cette configuration peut révéler un déséquilibre, mais elle encourage aussi une décision, une adaptation ou une action constructive."
      );

    case "trine":
      return (
        `${planet1} et ${planet2} circulent dans une harmonie naturelle. ` +
        "Cette influence facilite l’expression des qualités associées à ces planètes et favorise une progression plus fluide."
      );

    case "opposition":
      return (
        `${planet1} et ${planet2} se placent face à face. ` +
        "Cette configuration met en lumière deux besoins différents et invite à trouver un équilibre plutôt qu’à choisir un seul extrême."
      );

    default:
      return "";
  }
}

/*
|--------------------------------------------------------------------------
| Détection de l’aspect le plus proche
|--------------------------------------------------------------------------
*/

function findClosestAspect(
  actualAngle: number,
): {
  definition: AspectDefinition;
  orb: number;
} | null {
  let closest:
    | {
        definition: AspectDefinition;
        orb: number;
      }
    | null = null;

  for (
    const definition
    of ASPECT_DEFINITIONS
  ) {
    const orb =
      Math.abs(
        actualAngle -
          definition.angle,
      );

    if (
      orb >
      definition.orb
    ) {
      continue;
    }

    if (
      !closest ||
      orb < closest.orb
    ) {
      closest = {
        definition,
        orb,
      };
    }
  }

  return closest;
}

/*
|--------------------------------------------------------------------------
| Calcul des aspects d’une journée
|--------------------------------------------------------------------------
*/

function calculateSnapshotAspects(
  snapshot: MonthlySkySnapshot,
): MonthlyAspect[] {
  const positions =
    Array.isArray(
      snapshot.positions,
    )
      ? snapshot.positions
      : [];

  const aspects:
    MonthlyAspect[] = [];

  for (
    let firstIndex = 0;
    firstIndex <
    positions.length;
    firstIndex += 1
  ) {
    const firstPosition =
      positions[firstIndex];

    if (!firstPosition) {
      continue;
    }

    for (
      let secondIndex =
        firstIndex + 1;
      secondIndex <
      positions.length;
      secondIndex += 1
    ) {
      const secondPosition =
        positions[secondIndex];

      if (!secondPosition) {
        continue;
      }

      const actualAngle =
        getAngularDifference(
          firstPosition.longitude,
          secondPosition.longitude,
        );

      const closestAspect =
        findClosestAspect(
          actualAngle,
        );

      if (!closestAspect) {
        continue;
      }

      const {
        definition,
        orb,
      } = closestAspect;

      const [
        planet1,
        planet2,
      ] = normalizePlanetPair(
        firstPosition.planet,
        secondPosition.planet,
      );

      aspects.push({
        id: buildAspectId({
          date: snapshot.date,
          planet1,
          planet2,
          type: definition.type,
        }),

        date: snapshot.date,

        planet1,
        planet2,

        type: definition.type,
        label: definition.label,

        exactAngle:
          definition.angle,

        actualAngle:
          roundValue(
            actualAngle,
          ),

        orb:
          roundValue(orb),

        importance:
          calculateImportance({
            planet1,
            planet2,
            definition,
            orb,
          }),

        interpretation:
          buildAspectInterpretation({
            planet1,
            planet2,
            type:
              definition.type,
          }),
      });
    }
  }

  return aspects;
}

/*
|--------------------------------------------------------------------------
| Détermination appliquant / séparant
|--------------------------------------------------------------------------
*/

function addApplyingInformation(
  aspects: MonthlyAspect[],
): MonthlyAspect[] {
  const groupedAspects =
    new Map<
      string,
      MonthlyAspect[]
    >();

  for (const aspect of aspects) {
    const key =
      buildAspectGroupKey(
        aspect.planet1,
        aspect.planet2,
        aspect.type,
      );

    const currentGroup =
      groupedAspects.get(key) ??
      [];

    currentGroup.push(aspect);

    groupedAspects.set(
      key,
      currentGroup,
    );
  }

  const completedAspects:
    MonthlyAspect[] = [];

  for (
    const group
    of groupedAspects.values()
  ) {
    const sortedGroup =
      [...group].sort(
        (
          first,
          second,
        ) =>
          first.date.localeCompare(
            second.date,
          ),
      );

    for (
      let index = 0;
      index <
      sortedGroup.length;
      index += 1
    ) {
      const current =
        sortedGroup[index];

      const previous =
        sortedGroup[index - 1];

      const next =
        sortedGroup[index + 1];

      let applying:
        | boolean
        | undefined;

      if (next) {
        applying =
          next.orb <
          current.orb;
      } else if (previous) {
        applying =
          current.orb <
          previous.orb;
      }

      completedAspects.push({
        ...current,
        applying,
      });
    }
  }

  return completedAspects;
}

/*
|--------------------------------------------------------------------------
| Sélection de la date exacte de chaque aspect
|--------------------------------------------------------------------------
|
| Un même aspect peut rester actif plusieurs jours.
| On conserve la journée où son orbe est le plus petit.
|
*/

function selectExactMonthlyAspects(
  aspects: MonthlyAspect[],
): MonthlyAspect[] {
  const exactAspects =
    new Map<
      string,
      MonthlyAspect
    >();

  for (const aspect of aspects) {
    const key =
      buildAspectGroupKey(
        aspect.planet1,
        aspect.planet2,
        aspect.type,
      );

    const current =
      exactAspects.get(key);

    if (
      !current ||
      aspect.orb <
        current.orb ||
      (
        aspect.orb ===
          current.orb &&
        aspect.importance >
          current.importance
      )
    ) {
      exactAspects.set(
        key,
        aspect,
      );
    }
  }

  return Array.from(
    exactAspects.values(),
  );
}

/*
|--------------------------------------------------------------------------
| Fonction principale
|--------------------------------------------------------------------------
*/

export function calculateMonthlyAspects(
  skySnapshots: MonthlySkySnapshot[],
): MonthlyAspect[] {
  const safeSnapshots =
    Array.isArray(
      skySnapshots,
    )
      ? skySnapshots
      : [];

  const dailyAspects =
    safeSnapshots.flatMap(
      calculateSnapshotAspects,
    );

  const completedAspects =
    addApplyingInformation(
      dailyAspects,
    );

  const exactAspects =
    selectExactMonthlyAspects(
      completedAspects,
    );

  return exactAspects.sort(
    (
      first,
      second,
    ) => {
      const importanceDifference =
        second.importance -
        first.importance;

      if (
        importanceDifference !==
        0
      ) {
        return importanceDifference;
      }

      const orbDifference =
        first.orb -
        second.orb;

      if (
        orbDifference !== 0
      ) {
        return orbDifference;
      }

      return first.date.localeCompare(
        second.date,
      );
    },
  );
}
