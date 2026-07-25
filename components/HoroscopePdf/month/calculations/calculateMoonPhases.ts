import type {
  MonthlyMoonPhase,
  MonthlyMoonPhaseName,
  MonthlyPlanetPosition,
  MonthlySkySnapshot,
} from "./types";

/*
|--------------------------------------------------------------------------
| Définition des phases lunaires
|--------------------------------------------------------------------------
*/

type MoonPhaseDefinition = {
  phase:
    MonthlyMoonPhaseName;

  angle: number;

  title: string;

  description: string;

  advice: string;
};

const MOON_PHASE_DEFINITIONS:
  MoonPhaseDefinition[] = [
    {
      phase:
        "Nouvelle Lune",

      angle: 0,

      title:
        "Nouvelle Lune — Nouveau départ",

      description:
        "La Nouvelle Lune marque le début d’un nouveau cycle émotionnel. Elle favorise les intentions, les décisions intérieures et les projets qui doivent encore prendre forme.",

      advice:
        "Définissez une intention claire et laissez le projet se développer progressivement.",
    },

    {
      phase:
        "Premier quartier",

      angle: 90,

      title:
        "Premier quartier — Décision et mouvement",

      description:
        "Le premier quartier crée une énergie de mouvement et de décision. Les intentions posées précédemment rencontrent leurs premiers défis et demandent une action concrète.",

      advice:
        "Passez à l’action malgré les hésitations et ajustez votre stratégie selon les premiers résultats.",
    },

    {
      phase:
        "Pleine Lune",

      angle: 180,

      title:
        "Pleine Lune — Culmination et révélation",

      description:
        "La Pleine Lune représente un moment de culmination, de révélation ou de prise de conscience. Les émotions peuvent devenir plus visibles et une situation peut atteindre un point décisif.",

      advice:
        "Observez ce qui devient évident avant de prendre une décision uniquement sous l’effet de l’émotion.",
    },

    {
      phase:
        "Dernier quartier",

      angle: 270,

      title:
        "Dernier quartier — Bilan et détachement",

      description:
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
};

type PhaseCandidate = {
  definition:
    MoonPhaseDefinition;

  data:
    DailyLunarData;

  distance: number;
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

function getCircularDistance(
  angle: number,
  targetAngle: number,
): number {
  const difference =
    Math.abs(
      normalizeAngle(
        angle,
      ) -
        normalizeAngle(
          targetAngle,
        ),
    );

  return Math.min(
    difference,
    360 - difference,
  );
}

/*
|--------------------------------------------------------------------------
| Angle de phase lunaire
|--------------------------------------------------------------------------
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
| Recherche des planètes
|--------------------------------------------------------------------------
*/

function findPlanet(
  snapshot:
    MonthlySkySnapshot,

  planet:
    "Soleil" | "Lune",
): MonthlyPlanetPosition | null {
  return (
    snapshot.positions.find(
      (position) =>
        position.planet ===
        planet,
    ) ?? null
  );
}

/*
|--------------------------------------------------------------------------
| Construction des données lunaires quotidiennes
|--------------------------------------------------------------------------
*/

function buildDailyLunarData(
  skySnapshots:
    MonthlySkySnapshot[],
): DailyLunarData[] {
  const results:
    DailyLunarData[] = [];

  const sortedSnapshots =
    [...skySnapshots].sort(
      (
        first,
        second,
      ) =>
        first.date.localeCompare(
          second.date,
        ),
    );

  for (
    const snapshot
    of sortedSnapshots
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

    results.push({
      date:
        snapshot.date,

      sun,
      moon,

      phaseAngle:
        calculatePhaseAngle({
          sunLongitude:
            sun.longitude,

          moonLongitude:
            moon.longitude,
        }),
    });
  }

  return results;
}

/*
|--------------------------------------------------------------------------
| Passage autour de l’angle exact
|--------------------------------------------------------------------------
*/

function unwrapAngleAroundTarget(
  angle: number,
  targetAngle: number,
): number {
  let difference =
    normalizeAngle(
      angle,
    ) -
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
| Sélection des journées candidates
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
      dailyData[
        index - 1
      ];

    const next =
      dailyData[
        index + 1
      ];

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

    const previousDistance =
      previous
        ? getCircularDistance(
            previous.phaseAngle,
            definition.angle,
          )
        : Number.POSITIVE_INFINITY;

    const nextDistance =
      next
        ? getCircularDistance(
            next.phaseAngle,
            definition.angle,
          )
        : Number.POSITIVE_INFINITY;

    const isLocalMinimum =
      distance <=
        previousDistance &&
      distance <=
        nextDistance;

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
| Différence entre deux dates
|--------------------------------------------------------------------------
*/

function getDayDifference(
  firstDate: string,
  secondDate: string,
): number {
  const first =
    new Date(
      `${firstDate}T12:00:00Z`,
    );

  const second =
    new Date(
      `${secondDate}T12:00:00Z`,
    );

  return Math.abs(
    second.getTime() -
      first.getTime(),
  ) / 86_400_000;
}

/*
|--------------------------------------------------------------------------
| Suppression des doublons
|--------------------------------------------------------------------------
|
| Une même phase peut être détectée sur deux journées voisines.
| On conserve la journée la plus proche de l’angle exact.
|
*/

function removeDuplicateCandidates(
  candidates:
    PhaseCandidate[],
): PhaseCandidate[] {
  const sorted =
    [...candidates].sort(
      (
        first,
        second,
      ) => {
        const phaseDifference =
          first.definition.phase.localeCompare(
            second.definition.phase,
          );

        if (
          phaseDifference !== 0
        ) {
          return phaseDifference;
        }

        return first.data.date.localeCompare(
          second.data.date,
        );
      },
    );

  const selected:
    PhaseCandidate[] = [];

  for (
    const candidate
    of sorted
  ) {
    const previous =
      selected[
        selected.length - 1
      ];

    if (!previous) {
      selected.push(
        candidate,
      );

      continue;
    }

    const samePhase =
      previous.definition
        .phase ===
      candidate.definition
        .phase;

    const nearby =
      getDayDifference(
        previous.data.date,
        candidate.data.date,
      ) <= 2;

    if (
      samePhase &&
      nearby
    ) {
      if (
        candidate.distance <
        previous.distance
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
| Conversion vers MonthlyMoonPhase
|--------------------------------------------------------------------------
*/

function convertCandidateToPhase(
  candidate:
    PhaseCandidate,
): MonthlyMoonPhase {
  const {
    definition,
    data,
  } = candidate;

  return {
    phase:
      definition.phase,

    date:
      data.date,

    sign:
      data.moon.sign,

    signLabel:
      data.moon
        .signLabel,

    longitude:
      data.moon
        .longitude,

    title:
      `${definition.title} en ${data.moon.signLabel}`,

    description:
      `${definition.description} ` +
      `Cette phase se produit dans le signe ${data.moon.signLabel}, ce qui colore son influence selon les qualités de ce signe.`,

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
  if (
    !Array.isArray(
      skySnapshots,
    ) ||
    skySnapshots.length === 0
  ) {
    return [];
  }

  const dailyData =
    buildDailyLunarData(
      skySnapshots,
    );

  if (
    dailyData.length === 0
  ) {
    return [];
  }

  const candidates =
    MOON_PHASE_DEFINITIONS.flatMap(
      (definition) =>
        selectPhaseCandidates({
          dailyData,
          definition,
        }),
    );

  return removeDuplicateCandidates(
    candidates,
  )
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
