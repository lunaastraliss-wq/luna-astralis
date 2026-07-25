import type {
  MonthlyAstroEvent,
  MonthlyPlanetName,
  MonthlyPlanetPosition,
  MonthlySkySnapshot,
} from "./types";

/*
|--------------------------------------------------------------------------
| Types internes
|--------------------------------------------------------------------------
*/

type PlanetMovement = {
  planet:
    MonthlyPlanetName;

  previous:
    MonthlyPlanetPosition;

  current:
    MonthlyPlanetPosition;
};

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const RETROGRADE_PLANETS =
  new Set<
    MonthlyPlanetName
  >([
    "Mercure",
    "Vénus",
    "Mars",
    "Jupiter",
    "Saturne",
    "Uranus",
    "Neptune",
    "Pluton",
    "Chiron",
  ]);

const PLANET_IMPORTANCE:
  Record<
    MonthlyPlanetName,
    number
  > = {
    Soleil: 72,
    Lune: 55,
    Mercure: 70,
    Vénus: 72,
    Mars: 76,
    Jupiter: 84,
    Saturne: 88,
    Uranus: 90,
    Neptune: 90,
    Pluton: 92,
    Chiron: 72,
    "Nœud Nord": 74,
    "Nœud Sud": 68,
  };

/*
|--------------------------------------------------------------------------
| Utilitaires
|--------------------------------------------------------------------------
*/

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

function getPlanetImportance(
  planet:
    MonthlyPlanetName,
  bonus = 0,
): number {
  return clamp(
    (
      PLANET_IMPORTANCE[
        planet
      ] ?? 60
    ) + bonus,
    1,
    100,
  );
}

/*
|--------------------------------------------------------------------------
| Positions par planète
|--------------------------------------------------------------------------
*/

function buildPositionMap(
  snapshot:
    MonthlySkySnapshot,
): Map<
  MonthlyPlanetName,
  MonthlyPlanetPosition
> {
  const result =
    new Map<
      MonthlyPlanetName,
      MonthlyPlanetPosition
    >();

  for (
    const position
    of snapshot.positions
  ) {
    result.set(
      position.planet,
      position,
    );
  }

  return result;
}

function buildPlanetMovements(
  previousSnapshot:
    MonthlySkySnapshot,
  currentSnapshot:
    MonthlySkySnapshot,
): PlanetMovement[] {
  const previousPositions =
    buildPositionMap(
      previousSnapshot,
    );

  const movements:
    PlanetMovement[] = [];

  for (
    const current
    of currentSnapshot.positions
  ) {
    const previous =
      previousPositions.get(
        current.planet,
      );

    if (!previous) {
      continue;
    }

    movements.push({
      planet:
        current.planet,

      previous,
      current,
    });
  }

  return movements;
}

/*
|--------------------------------------------------------------------------
| Conseils lors d’une entrée dans un signe
|--------------------------------------------------------------------------
*/

function buildIngressAdvice(
  planet:
    MonthlyPlanetName,
): string {
  switch (planet) {
    case "Soleil":
      return "Observez les objectifs et les priorités qui deviennent plus importants durant cette nouvelle étape.";

    case "Lune":
      return "Accueillez les changements émotionnels sans prendre immédiatement de décision définitive.";

    case "Mercure":
      return "Observez les changements dans votre manière de réfléchir, de communiquer et de prendre vos décisions.";

    case "Vénus":
      return "Soyez attentive à l’évolution de vos relations, de vos désirs et de vos priorités affectives.";

    case "Mars":
      return "Canalisez cette nouvelle impulsion vers un objectif précis plutôt que d’agir dans la précipitation.";

    case "Jupiter":
      return "Repérez les domaines où de nouvelles occasions d’expansion commencent à apparaître.";

    case "Saturne":
      return "Acceptez les responsabilités nouvelles et construisez vos projets sur des bases plus solides.";

    case "Uranus":
      return "Restez souple devant les changements inattendus et les besoins de liberté qui émergent.";

    case "Neptune":
      return "Faites confiance à votre intuition tout en conservant des repères concrets.";

    case "Pluton":
      return "Laissez évoluer ce qui ne peut plus rester sous sa forme actuelle.";

    case "Chiron":
      return "Accueillez les prises de conscience qui permettent une réparation intérieure.";

    case "Nœud Nord":
      return "Observez les nouvelles directions qui semblent favoriser votre évolution.";

    case "Nœud Sud":
      return "Prenez conscience des habitudes anciennes qui demandent à être dépassées.";
  }
}

/*
|--------------------------------------------------------------------------
| Conseils liés aux rétrogradations
|--------------------------------------------------------------------------
*/

function buildRetrogradeAdvice({
  planet,
  starts,
}: {
  planet:
    MonthlyPlanetName;

  starts: boolean;
}): string {
  if (!starts) {
    return "Reprenez progressivement les démarches mises en attente et appliquez ce que vous avez compris durant cette période de révision.";
  }

  switch (planet) {
    case "Mercure":
      return "Relisez les détails, confirmez les informations et évitez de vous précipiter dans les communications importantes.";

    case "Vénus":
      return "Prenez le temps de réévaluer vos sentiments, vos relations et votre rapport à l’argent.";

    case "Mars":
      return "Révisez votre stratégie avant de forcer une situation qui manque encore de clarté.";

    case "Jupiter":
      return "Réexaminez vos projets d’expansion et vérifiez qu’ils correspondent toujours à vos véritables objectifs.";

    case "Saturne":
      return "Reprenez les responsabilités ou les structures qui ont besoin d’être consolidées.";

    case "Uranus":
      return "Observez les changements intérieurs avant de rompre brusquement avec une situation.";

    case "Neptune":
      return "Distinguez l’intuition réelle des attentes, des projections ou des illusions.";

    case "Pluton":
      return "Acceptez de revoir en profondeur une situation avant d’en provoquer la transformation extérieure.";

    case "Chiron":
      return "Revenez sur une blessure ancienne avec davantage de compréhension et de douceur.";

    default:
      return "Utilisez cette période pour réviser, comprendre et corriger avant d’avancer.";
  }
}

/*
|--------------------------------------------------------------------------
| Entrée d’une planète dans un signe
|--------------------------------------------------------------------------
*/

function detectSignIngress(
  movement:
    PlanetMovement,
): MonthlyAstroEvent | null {
  if (
    movement.previous.sign ===
    movement.current.sign
  ) {
    return null;
  }

  const {
    planet,
    current,
  } = movement;

  return {
    id:
      `${current.date}-` +
      `${cleanIdPart(
        planet,
      )}-entree-` +
      `${cleanIdPart(
        current.signLabel,
      )}`,

    date:
      current.date,

    type:
      "sign-ingress",

    title:
      `${planet} entre en ${current.signLabel}`,

    description:
      `${planet} quitte le signe précédent et entre en ${current.signLabel}. ` +
      "Ce changement modifie progressivement la manière dont son énergie s’exprime et ouvre une nouvelle étape astrologique.",

    planets: [
      planet,
    ],

    sign:
      current.sign,

    signLabel:
      current.signLabel,

    importance:
      getPlanetImportance(
        planet,
        6,
      ),

    advice:
      buildIngressAdvice(
        planet,
      ),
  };
}

/*
|--------------------------------------------------------------------------
| Début ou fin d’une rétrogradation
|--------------------------------------------------------------------------
*/

function detectRetrogradeChange(
  movement:
    PlanetMovement,
): MonthlyAstroEvent | null {
  const {
    planet,
    previous,
    current,
  } = movement;

  if (
    !RETROGRADE_PLANETS.has(
      planet,
    )
  ) {
    return null;
  }

  if (
    previous.retrograde ===
    current.retrograde
  ) {
    return null;
  }

  const starts =
    current.retrograde;

  return {
    id:
      `${current.date}-` +
      `${cleanIdPart(
        planet,
      )}-` +
      (
        starts
          ? "retrograde"
          : "direct"
      ),

    date:
      current.date,

    type:
      starts
        ? "retrograde-start"
        : "retrograde-end",

    title:
      starts
        ? `${planet} devient rétrograde`
        : `${planet} reprend sa marche directe`,

    description:
      starts
        ? `${planet} commence sa rétrogradation en ${current.signLabel}. Son influence devient plus intérieure et invite à revoir certaines décisions, habitudes ou situations avant de poursuivre.`
        : `${planet} reprend sa marche directe en ${current.signLabel}. Les situations ralenties ou réévaluées peuvent progressivement retrouver de la clarté et du mouvement.`,

    planets: [
      planet,
    ],

    sign:
      current.sign,

    signLabel:
      current.signLabel,

    importance:
      getPlanetImportance(
        planet,
        starts
          ? 10
          : 8,
      ),

    advice:
      buildRetrogradeAdvice({
        planet,
        starts,
      }),
  };
}

/*
|--------------------------------------------------------------------------
| Station planétaire
|--------------------------------------------------------------------------
|
| Une station est détectée lorsqu’une planète devient très lente.
| On évite toutefois de créer une station le même jour qu’un changement
| officiel du statut rétrograde.
|
*/

function detectStation(
  movement:
    PlanetMovement,
): MonthlyAstroEvent | null {
  const {
    planet,
    previous,
    current,
  } = movement;

  if (
    !RETROGRADE_PLANETS.has(
      planet,
    )
  ) {
    return null;
  }

  if (
    previous.retrograde !==
    current.retrograde
  ) {
    return null;
  }

  if (
    typeof previous.speed !==
      "number" ||
    !Number.isFinite(
      previous.speed,
    ) ||
    typeof current.speed !==
      "number" ||
    !Number.isFinite(
      current.speed,
    )
  ) {
    return null;
  }

  const previousSpeed =
    Math.abs(
      previous.speed,
    );

  const currentSpeed =
    Math.abs(
      current.speed,
    );

  const verySlow =
    currentSpeed <= 0.05;

  const slowingDown =
    currentSpeed <
    previousSpeed;

  if (
    !verySlow ||
    !slowingDown
  ) {
    return null;
  }

  return {
    id:
      `${current.date}-` +
      `${cleanIdPart(
        planet,
      )}-station`,

    date:
      current.date,

    type:
      "station",

    title:
      `${planet} atteint une station`,

    description:
      `${planet} ralentit fortement en ${current.signLabel}. ` +
      "Son influence devient plus concentrée et peut rendre les thèmes associés à cette planète particulièrement visibles.",

    planets: [
      planet,
    ],

    sign:
      current.sign,

    signLabel:
      current.signLabel,

    importance:
      getPlanetImportance(
        planet,
        7,
      ),

    advice:
      "Évitez de forcer les événements et observez ce qui demande une décision plus consciente.",
  };
}

/*
|--------------------------------------------------------------------------
| Événements créés par un mouvement planétaire
|--------------------------------------------------------------------------
*/

function detectMovementEvents(
  movement:
    PlanetMovement,
): MonthlyAstroEvent[] {
  const events:
    MonthlyAstroEvent[] = [];

  const ingress =
    detectSignIngress(
      movement,
    );

  if (ingress) {
    events.push(
      ingress,
    );
  }

  const retrogradeChange =
    detectRetrogradeChange(
      movement,
    );

  if (retrogradeChange) {
    events.push(
      retrogradeChange,
    );
  }

  const station =
    detectStation(
      movement,
    );

  if (station) {
    events.push(
      station,
    );
  }

  return events;
}

/*
|--------------------------------------------------------------------------
| Suppression des doublons
|--------------------------------------------------------------------------
*/

function buildEventKey(
  event:
    MonthlyAstroEvent,
): string {
  return [
    event.date,
    event.type,
    event.planets.join(","),
    event.sign ?? "",
  ].join("|");
}

function removeDuplicateEvents(
  events:
    MonthlyAstroEvent[],
): MonthlyAstroEvent[] {
  const selected =
    new Map<
      string,
      MonthlyAstroEvent
    >();

  for (
    const event
    of events
  ) {
    const key =
      buildEventKey(
        event,
      );

    const existing =
      selected.get(key);

    if (
      !existing ||
      event.importance >
        existing.importance
    ) {
      selected.set(
        key,
        event,
      );
    }
  }

  return Array.from(
    selected.values(),
  );
}

/*
|--------------------------------------------------------------------------
| Fonction principale
|--------------------------------------------------------------------------
*/

export function calculateAstroEvents(
  skySnapshots:
    MonthlySkySnapshot[],
): MonthlyAstroEvent[] {
  if (
    !Array.isArray(
      skySnapshots,
    ) ||
    skySnapshots.length < 2
  ) {
    return [];
  }

  const snapshots =
    [...skySnapshots].sort(
      (
        first,
        second,
      ) =>
        first.date.localeCompare(
          second.date,
        ),
    );

  const events:
    MonthlyAstroEvent[] = [];

  for (
    let index = 1;
    index <
    snapshots.length;
    index += 1
  ) {
    const previousSnapshot =
      snapshots[index - 1];

    const currentSnapshot =
      snapshots[index];

    const movements =
      buildPlanetMovements(
        previousSnapshot,
        currentSnapshot,
      );

    for (
      const movement
      of movements
    ) {
      events.push(
        ...detectMovementEvents(
          movement,
        ),
      );
    }
  }

  return removeDuplicateEvents(
    events,
  ).sort(
    (
      first,
      second,
    ) => {
      const dateDifference =
        first.date.localeCompare(
          second.date,
        );

      if (
        dateDifference !== 0
      ) {
        return dateDifference;
      }

      return (
        second.importance -
        first.importance
      );
    },
  );
}
