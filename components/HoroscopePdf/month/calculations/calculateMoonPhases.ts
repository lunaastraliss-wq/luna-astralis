import type {
  MonthlyMoonPhase,
  MonthlyPlanetPosition,
  MonthlySkySnapshot,
} from "./types";

/*
|--------------------------------------------------------------------------
| Définition des phases lunaires
|--------------------------------------------------------------------------
*/

type MoonPhaseDefinition = {
  type:
    | "new-moon"
    | "first-quarter"
    | "full-moon"
    | "last-quarter";

  label: string;

  angle: number;

  interpretation: string;

  advice: string;
};

const MOON_PHASE_DEFINITIONS:
  MoonPhaseDefinition[] = [
    {
      type: "new-moon",
      label:
        "Nouvelle Lune",
      angle: 0,

      interpretation:
        "La Nouvelle Lune marque le début d’un nouveau cycle émotionnel. Elle favorise les intentions, les décisions intérieures et les projets qui doivent encore prendre forme.",

      advice:
        "Définissez une intention claire et laissez le projet se développer progressivement.",
    },

    {
      type:
        "first-quarter",
      label:
        "Premier quartier",
      angle: 90,

      interpretation:
        "Le premier quartier crée une énergie de mouvement et de décision. Les intentions posées précédemment rencontrent leurs premiers défis et demandent une action concrète.",

      advice:
        "Passez à l’action malgré les hésitations et ajustez votre stratégie selon les premiers résultats.",
    },

    {
      type: "full-moon",
      label:
        "Pleine Lune",
      angle: 180,

      interpretation:
        "La Pleine Lune représente un moment de culmination, de révélation ou de prise de conscience. Les émotions peuvent devenir plus visibles et une situation peut atteindre un point décisif.",

      advice:
        "Observez ce qui devient évident avant de prendre une décision uniquement sous l’effet de l’émotion.",
    },

    {
      type:
        "last-quarter",
      label:
        "Dernier quartier",
      angle: 270,

      interpretation:
        "Le dernier quartier invite à faire le bilan du cycle en cours. Il favorise les ajustements, le détachement et la préparation d’une nouvelle étape.",

      advice:
        "Libérez ce qui n’est plus utile et terminez ce qui doit l’être avant de commencer autre chose.",
    },
  ];

/*
|--------------------------------------------------------------------------
| Types internes
|--------------------------------------------------------------------------
*/

type DailyLunarData = {
  date: string;

  sun:
    MonthlyPlanetPosition;

  moon:
    MonthlyPlanetPosition;

  phaseAngle: number;

  illumination: number;
};

type PhaseCandidate = {
  definition:
    MoonPhaseDefinition;

  data:
    DailyLunarData;

  distance:
    number;
};

/*
|--------------------------------------------------------------------------
| Utilitaires mathématiques
|--------------------------------------------------------------------------
*/

function normalizeAngle(
  value: number,
): number {
  return (
    ((value % 360) + 360) %
    360
  );
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

function clamp(
  value: number,
  minimum: number,
  maximum: number,
): number {
  return Math.max(
    minimum,
    Math.min(
      maximum,
      value,
    ),
  );
}

/*
|--------------------------------------------------------------------------
| Angle de phase
|--------------------------------------------------------------------------
|
| L’angle est calculé de manière directionnelle :
|
| 0°   = Nouvelle Lune
| 90°  = Premier quartier
| 180° = Pleine Lune
| 270° = Dernier quartier
|
*/

function calculatePhaseAngle({
  sunLongitude,
  moonLongitude,
}: {
  sunLongitude: number;
  moonLongitude: number;
}): number {
  return normalizeAngle(
    moonLongitude -
      sunLongitude,
  );
}

/*
|--------------------------------------------------------------------------
| Illumination approximative
|--------------------------------------------------------------------------
|
| 0 %   = Nouvelle Lune
| 100 % = Pleine Lune
|
*/

function calculateIllumination(
  phaseAngle: number,
): number {
  const radians =
    (
      phaseAngle *
      Math.PI
    ) / 180;

  const illuminatedFraction =
    (
      1 -
      Math.cos(radians)
    ) / 2;

  return roundValue(
    clamp(
      illuminatedFraction *
        100,
      0,
      100,
    ),
    1,
  );
}

/*
|--------------------------------------------------------------------------
| Recherche des planètes
|--------------------------------------------------------------------------
*/

function findPlanet(
  snapshot:
    MonthlySkySnapshot,
  planetName:
    "Soleil" | "Lune",
): MonthlyPlanetPosition | null {
  return (
    snapshot.positions.find(
      (position) =>
        position.planet ===
        planetName,
    ) ?? null
  );
}

/*
|--------------------------------------------------------------------------
| Données lunaires quotidiennes
|--------------------------------------------------------------------------
*/

function buildDailyLunarData(
  snapshots:
    MonthlySkySnapshot[],
): DailyLunarData[] {
  const results:
    DailyLunarData[] = [];

  for (
    const snapshot
    of snapshots
  ) {
    const sun =
      findPlanet(
        snapshot,
        "Soleil",
      );

    const moon =
      findPlanet(
        snapshot,
        "Lune",
      );

    if (
      !sun ||
      !moon
    ) {
      continue;
    }

    const phaseAngle =
      calculatePhaseAngle({
        sunLongitude:
          sun.longitude,

        moonLongitude:
          moon.longitude,
      });

    results.push({
      date:
        snapshot.date,

      sun,
      moon,

      phaseAngle,

      illumination:
        calculateIllumination(
          phaseAngle,
        ),
    });
  }

  return results.sort(
    (
      first,
      second,
    ) =>
      first.date.localeCompare(
        second.date,
      ),
  );
}

/*
|--------------------------------------------------------------------------
| Distance circulaire
|--------------------------------------------------------------------------
*/

function getCircularDistance(
  angle: number,
  targetAngle: number,
): number {
  const rawDifference =
    Math.abs(
      normalizeAngle(angle) -
        normalizeAngle(
          targetAngle,
        ),
    );

  return Math.min(
    rawDifference,
    360 - rawDifference,
  );
}

/*
|--------------------------------------------------------------------------
| Détection du passage exact
|--------------------------------------------------------------------------
*/

function unwrapAngleAroundTarget(
  angle: number,
  targetAngle: number,
): number {
  let difference =
    normalizeAngle(angle) -
    normalizeAngle(
      targetAngle,
    );

  if (
    difference > 180
  ) {
    difference -= 360;
  }

  if (
    difference < -180
  ) {
    difference += 360;
  }

  return difference;
}

function crossesTarget({
  previousAngle,
  currentAngle,
  targetAngle,
}: {
  previousAngle: number;
  currentAngle: number;
  targetAngle: number;
}): boolean {
  const previousDifference =
    unwrapAngleAroundTarget(
      previousAngle,
      targetAngle,
    );

  const currentDifference =
    unwrapAngleAroundTarget(
      currentAngle,
      targetAngle,
    );

  if (
    previousDifference === 0 ||
    currentDifference === 0
  ) {
    return true;
  }

  return (
    (
      previousDifference < 0 &&
      currentDifference > 0
    ) ||
    (
      previousDifference > 0 &&
      currentDifference < 0
    )
  );
}

/*
|--------------------------------------------------------------------------
| Sélection de la meilleure journée
|--------------------------------------------------------------------------
*/

function selectPhaseCandidates({
  dailyData,
  definition,
}: {
  dailyData:
    DailyLunarData[];

  definition:
    MoonPhaseDefinition;
}): PhaseCandidate[] {
  const candidates:
    PhaseCandidate[] = [];

  for (
    let index = 0;
    index <
    dailyData.length;
    index += 1
  ) {
    const current =
      dailyData[index];

    const previous =
      dailyData[index - 1];

    const next =
      dailyData[index + 1];

    const distance =
      getCircularDistance(
        current.phaseAngle,
        definition.angle,
      );

    const crossedFromPrevious =
      previous
        ? crossesTarget({
            previousAngle:
              previous.phaseAngle,

            currentAngle:
              current.phaseAngle,

            targetAngle:
              definition.angle,
          })
        : false;

    const crossesTowardNext =
      next
        ? crossesTarget({
            previousAngle:
              current.phaseAngle,

            currentAngle:
              next.phaseAngle,

            targetAngle:
              definition.angle,
          })
        : false;

    const isLocalMinimum =
      (
        !previous ||
        distance <=
          getCircularDistance(
            previous.phaseAngle,
            definition.angle,
          )
      ) &&
      (
        !next ||
        distance <=
          getCircularDistance(
            next.phaseAngle,
            definition.angle,
          )
      );

    if (
      crossedFromPrevious ||
      crossesTowardNext ||
      isLocalMinimum
    ) {
      candidates.push({
        definition,
        data: current,
        distance,
      });
    }
  }

  return candidates;
}

/*
|--------------------------------------------------------------------------
| Suppression des doublons
|--------------------------------------------------------------------------
|
| Une phase peut être détectée sur deux journées voisines.
| On conserve uniquement la journée la plus proche de l’angle exact.
|
*/

function removeDuplicateCandidates(
  candidates:
    PhaseCandidate[],
): PhaseCandidate[] {
  const sortedCandidates =
    [...candidates].sort(
      (
        first,
        second,
      ) =>
        first.data.date.localeCompare(
          second.data.date,
        ),
    );

  const selected:
    PhaseCandidate[] = [];

  for (
    const candidate
    of sortedCandidates
  ) {
    const previousSelected =
      selected[
        selected.length - 1
      ];

    if (
      !previousSelected
    ) {
      selected.push(
        candidate,
      );

      continue;
    }

    const previousDate =
      new Date(
        `${previousSelected.data.date}T12:00:00Z`,
      );

    const currentDate =
      new Date(
        `${candidate.data.date}T12:00:00Z`,
      );

    const differenceInDays =
      Math.abs(
        currentDate.getTime() -
          previousDate.getTime(),
      ) /
      86_400_000;

    const samePhase =
      previousSelected
        .definition.type ===
      candidate.definition.type;

    if (
      samePhase &&
      differenceInDays <= 2
    ) {
      if (
        candidate.distance <
        previousSelected.distance
      ) {
        selected[
          selected.length - 1
        ] = candidate;
      }

      continue;
    }

    selected.push(
      candidate,
    );
  }

  return selected;
}

/*
|--------------------------------------------------------------------------
| Construction de l’identifiant
|--------------------------------------------------------------------------
*/

function cleanIdPart(
  value: string,
): string {
  return value
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      "",
    )
    .replace(
      /[^a-zA-Z0-9]+/g,
      "-",
    )
    .replace(
      /^-+|-+$/g,
      "",
    )
    .toLowerCase();
}

/*
|--------------------------------------------------------------------------
| Ton énergétique
|--------------------------------------------------------------------------
*/

function getPhaseTone(
  phaseType:
    MoonPhaseDefinition["type"],
): string {
  switch (phaseType) {
    case "new-moon":
      return "introspective";

    case "first-quarter":
      return "dynamique";

    case "full-moon":
      return "intense";

    case "last-quarter":
      return "libératrice";
  }
}

/*
|--------------------------------------------------------------------------
| Thème principal
|--------------------------------------------------------------------------
*/

function getPhaseTheme(
  phaseType:
    MoonPhaseDefinition["type"],
): string {
  switch (phaseType) {
    case "new-moon":
      return "Nouveau départ";

    case "first-quarter":
      return "Décision et mouvement";

    case "full-moon":
      return "Culmination et révélation";

    case "last-quarter":
      return "Bilan et détachement";
  }
}

/*
|--------------------------------------------------------------------------
| Conversion vers le résultat
|--------------------------------------------------------------------------
*/

function convertCandidateToPhase(
  candidate:
    PhaseCandidate,
): MonthlyMoonPhase {
  const {
    definition,
    data,
    distance,
  } = candidate;

  return {
    id:
      `${data.date}-` +
      `${cleanIdPart(
        definition.type,
      )}`,

    date:
      data.date,

    type:
      definition.type,

    label:
      definition.label,

    phaseAngle:
      roundValue(
        data.phaseAngle,
      ),

    exactAngle:
      definition.angle,

    orb:
      roundValue(
        distance,
      ),

    illumination:
      data.illumination,

    moonSign:
      data.moon.sign,

    moonSignLabel:
      data.moon.signLabel,

    moonDegree:
      roundValue(
        data.moon.degree,
      ),

    tone:
      getPhaseTone(
        definition.type,
      ),

    theme:
      getPhaseTheme(
        definition.type,
      ),

    interpretation:
      definition.interpretation,

    advice:
      definition.advice,
  };
}

/*
|--------------------------------------------------------------------------
| Fonction principale
|--------------------------------------------------------------------------
*/

export function calculateMoonPhases(
  skySnapshots:
    MonthlySkySnapshot[],
): MonthlyMoonPhase[] {
  const safeSnapshots =
    Array.isArray(
      skySnapshots,
    )
      ? skySnapshots
      : [];

  const dailyData =
    buildDailyLunarData(
      safeSnapshots,
    );

  if (
    dailyData.length === 0
  ) {
    return [];
  }

  const allCandidates =
    MOON_PHASE_DEFINITIONS.flatMap(
      (definition) =>
        selectPhaseCandidates({
          dailyData,
          definition,
        }),
    );

  const selectedCandidates =
    removeDuplicateCandidates(
      allCandidates,
    );

  return selectedCandidates
    .map(
      convertCandidateToPhase,
    )
    .sort(
      (
        first,
        second,
      ) =>
        first.date.localeCompare(
          second.date,
        ),
    );
}
