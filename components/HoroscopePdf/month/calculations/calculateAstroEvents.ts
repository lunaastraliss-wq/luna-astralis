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
  planet: MonthlyPlanetName;

  previous:
    MonthlyPlanetPosition;

  current:
    MonthlyPlanetPosition;
};

/*
|--------------------------------------------------------------------------
| Configuration des planètes
|--------------------------------------------------------------------------
*/

const PLANET_PRIORITY:
  Record<
    MonthlyPlanetName,
    number
  > = {
    Soleil: 7,
    Lune: 4,
    Mercure: 7,
    Vénus: 7,
    Mars: 8,
    Jupiter: 9,
    Saturne: 10,
    Uranus: 10,
    Neptune: 10,
    Pluton: 10,
    Chiron: 7,
    "Nœud Nord": 7,
    "Nœud Sud": 6,
  };

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

/*
|--------------------------------------------------------------------------
| Utilitaires généraux
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

function normalizeLongitude(
  value: number,
): number {
  return (
    ((value % 360) + 360) %
    360
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

function getSignedMovement(
  previousLongitude: number,
  currentLongitude: number,
): number {
  let difference =
    normalizeLongitude(
      currentLongitude,
    ) -
    normalizeLongitude(
      previousLongitude,
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

/*
|--------------------------------------------------------------------------
| Recherche des positions
|--------------------------------------------------------------------------
*/

function buildPositionMap(
  snapshot:
    MonthlySkySnapshot,
): Map<
  MonthlyPlanetName,
  MonthlyPlanetPosition
> {
  const map =
    new Map<
      MonthlyPlanetName,
      MonthlyPlanetPosition
    >();

  for (
    const position
    of snapshot.positions
  ) {
    map.set(
      position.planet,
      position,
    );
  }

  return map;
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
| Importance
|--------------------------------------------------------------------------
*/

function calculateImportance({
  planet,
  bonus = 0,
}: {
  planet:
    MonthlyPlanetName;

  bonus?: number;
}): number {
  const planetPriority =
    PLANET_PRIORITY[
      planet
    ] ?? 5;

  return clamp(
    35 +
      planetPriority * 5 +
      bonus,
    1,
    100,
  );
}

/*
|--------------------------------------------------------------------------
| Textes — entrée dans un signe
|--------------------------------------------------------------------------
*/

function buildSignIngressDescription({
  planet,
  signLabel,
}: {
  planet:
    MonthlyPlanetName;

  signLabel: string;
}): string {
  return (
    `${planet} entre en ${signLabel}. ` +
    "Ce changement modifie la manière dont cette énergie s’exprime et ouvre une nouvelle étape astrologique."
  );
}

function buildSignIngressAdvice(
  planet:
    MonthlyPlanetName,
): string {
  switch (planet) {
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

    default:
      return "Observez comment cette nouvelle énergie se manifeste avant de prendre une décision importante.";
  }
}

/*
|--------------------------------------------------------------------------
| Textes — rétrogradation
|--------------------------------------------------------------------------
*/

function buildRetrogradeStartDescription(
  planet:
    MonthlyPlanetName,
): string {
  return (
    `${planet} commence sa rétrogradation. ` +
    "Son énergie devient plus intérieure et invite à revoir certaines décisions, habitudes ou situations avant de poursuivre."
  );
}

function buildRetrogradeEndDescription(
  planet:
    MonthlyPlanetName,
): string {
  return (
    `${planet} reprend sa marche directe. ` +
    "Les situations ralenties ou réévaluées peuvent progressivement retrouver de la clarté et du mouvement."
  );
}

function buildRetrogradeAdvice({
  planet,
  starts,
}: {
  planet:
    MonthlyPlanetName;

  starts: boolean;
}): string {
  if (!starts) {
    return "Reprenez progressivement les démarches mises en attente et appliquez ce que vous avez compris durant la rétrogradation.";
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
| Détection — changement de signe
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

  return {
    id:
      `${movement.current.date}-` +
      `${cleanIdPart(
        movement.planet,
      )}-entree-` +
      `${cleanIdPart(
        movement.current
          .signLabel,
      )}`,

    date:
      movement.current.date,

    type:
      "sign-ingress",

    label:
      `${movement.planet} entre en ${movement.current.signLabel}`,

    planet:
      movement.planet,

    sign:
      movement.current.sign,

    signLabel:
      movement.current
        .signLabel,

    degree:
      roundValue(
        movement.current
          .degree,
      ),

    importance:
      calculateImportance({
        planet:
          movement.planet,

        bonus: 8,
      }),

    tone:
      "transition",

    theme:
      "Changement d’énergie",

    description:
      buildSignIngressDescription({
        planet:
          movement.planet,

        signLabel:
          movement.current
            .signLabel,
      }),

    advice:
      buildSignIngressAdvice(
        movement.planet,
      ),
  };
}

/*
|--------------------------------------------------------------------------
| Détection — début ou fin de rétrogradation
|--------------------------------------------------------------------------
*/

function detectRetrogradeChange(
  movement:
    PlanetMovement,
): MonthlyAstroEvent | null {
  if (
    !RETROGRADE_PLANETS.has(
      movement.planet,
    )
  ) {
    return null;
  }

  const wasRetrograde =
    movement.previous
      .retrograde === true;

  const isRetrograde =
    movement.current
      .retrograde === true;

  if (
    wasRetrograde ===
    isRetrograde
  ) {
    return null;
  }

  const starts =
    !wasRetrograde &&
    isRetrograde;

  const eventType =
    starts
      ? "retrograde-start"
      : "retrograde-end";

  return {
    id:
      `${movement.current.date}-` +
      `${cleanIdPart(
        movement.planet,
      )}-` +
      eventType,

    date:
      movement.current.date,

    type:
      eventType,

    label:
      starts
        ? `${movement.planet} devient rétrograde`
        : `${movement.planet} reprend sa marche directe`,

    planet:
      movement.planet,

    sign:
      movement.current.sign,

    signLabel:
      movement.current
        .signLabel,

    degree:
      roundValue(
        movement.current
          .degree,
      ),

    importance:
      calculateImportance({
        planet:
          movement.planet,

        bonus:
          starts
            ? 12
            : 10,
      }),

    tone:
      starts
        ? "introspective"
        : "progressive",

    theme:
      starts
        ? "Révision et recul"
        : "Reprise et clarification",

    description:
      starts
        ? buildRetrogradeStartDescription(
            movement.planet,
          )
        : buildRetrogradeEndDescription(
            movement.planet,
          ),

    advice:
      buildRetrogradeAdvice({
        planet:
          movement.planet,

        starts,
      }),
  };
}

/*
|--------------------------------------------------------------------------
| Détection — station planétaire
|--------------------------------------------------------------------------
|
| Cette détection fonctionne seulement lorsque Celestine fournit une vitesse.
|
*/

function detectStation(
  movement:
    PlanetMovement,
): MonthlyAstroEvent | null {
  if (
    !RETROGRADE_PLANETS.has(
      movement.planet,
    )
  ) {
    return null;
  }

  const previousSpeed =
    movement.previous.speed;

  const currentSpeed =
    movement.current.speed;

  if (
    typeof previousSpeed !==
      "number" ||
    !Number.isFinite(
      previousSpeed,
    ) ||
    typeof currentSpeed !==
      "number" ||
    !Number.isFinite(
      currentSpeed,
    )
  ) {
    return null;
  }

  const currentAbsoluteSpeed =
    Math.abs(
      currentSpeed,
    );

  const previousAbsoluteSpeed =
    Math.abs(
      previousSpeed,
    );

  const isVerySlow =
    currentAbsoluteSpeed <=
    0.05;

  const slowedDown =
    currentAbsoluteSpeed <
    previousAbsoluteSpeed;

  if (
    !isVerySlow ||
    !slowedDown
  ) {
    return null;
  }

  return {
    id:
      `${movement.current.date}-` +
      `${cleanIdPart(
        movement.planet,
      )}-station`,

    date:
      movement.current.date,

    type:
      "station",

    label:
      `${movement.planet} atteint une station`,

    planet:
      movement.planet,

    sign:
      movement.current.sign,

    signLabel:
      movement.current
        .signLabel,

    degree:
      roundValue(
        movement.current
          .degree,
      ),

    importance:
      calculateImportance({
        planet:
          movement.planet,

        bonus: 9,
      }),

    tone:
      "intense",

    theme:
      "Point de bascule",

    description:
      `${movement.planet} ralentit fortement avant un changement de direction. ` +
      "Son influence devient plus concentrée et peut rendre les thèmes associés à cette planète particulièrement visibles.",

    advice:
      "Évitez de forcer les événements et observez ce qui demande une décision plus consciente.",
  };
}

/*
|--------------------------------------------------------------------------
| Détection — changement de direction par longitude
|--------------------------------------------------------------------------
|
| Cette sécurité est utilisée lorsque le statut rétrograde n’est pas fourni.
|
*/

function detectDirectionChangeFromLongitude({
  previousPrevious,
  previous,
  current,
}: {
  previousPrevious:
    MonthlyPlanetPosition;

  previous:
    MonthlyPlanetPosition;

  current:
    MonthlyPlanetPosition;
}): MonthlyAstroEvent | null {
  if (
    !RETROGRADE_PLANETS.has(
      current.planet,
    )
  ) {
    return null;
  }

  const firstMovement =
    getSignedMovement(
      previousPrevious.longitude,
      previous.longitude,
    );

  const secondMovement =
    getSignedMovement(
      previous.longitude,
      current.longitude,
    );

  const changedDirection =
    (
      firstMovement > 0 &&
      secondMovement < 0
    ) ||
    (
      firstMovement < 0 &&
      secondMovement > 0
    );

  if (!changedDirection) {
    return null;
  }

  const movementSize =
    Math.max(
      Math.abs(
        firstMovement,
      ),
      Math.abs(
        secondMovement,
      ),
    );

  /*
   * Évite les faux changements provoqués
   * par un déplacement quotidien trop grand.
   */
  if (
    movementSize > 2
  ) {
    return null;
  }

  const startsRetrograde =
    secondMovement < 0;

  const eventType =
    startsRetrograde
      ? "retrograde-start"
      : "retrograde-end";

  return {
    id:
      `${current.date}-` +
      `${cleanIdPart(
        current.planet,
      )}-direction-` +
      eventType,

    date:
      current.date,

    type:
      eventType,

    label:
      startsRetrograde
        ? `${current.planet} devient rétrograde`
        : `${current.planet} reprend sa marche directe`,

    planet:
      current.planet,

    sign:
      current.sign,

    signLabel:
      current.signLabel,

    degree:
      roundValue(
        current.degree,
      ),

    importance:
      calculateImportance({
        planet:
          current.planet,

        bonus: 10,
      }),

    tone:
      startsRetrograde
        ? "introspective"
        : "progressive",

    theme:
      startsRetrograde
        ? "Révision et recul"
        : "Reprise et clarification",

    description:
      startsRetrograde
        ? buildRetrogradeStartDescription(
            current.planet,
          )
        : buildRetrogradeEndDescription(
            current.planet,
          ),

    advice:
      buildRetrogradeAdvice({
        planet:
          current.planet,

        starts:
          startsRetrograde,
      }),
  };
}

/*
|--------------------------------------------------------------------------
| Détection des événements sur deux journées
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
| Détection complémentaire sur trois journées
|--------------------------------------------------------------------------
*/

function detectThreeDayDirectionChanges(
  snapshots:
    MonthlySkySnapshot[],
): MonthlyAstroEvent[] {
  const events:
    MonthlyAstroEvent[] = [];

  for (
    let index = 2;
    index <
    snapshots.length;
    index += 1
  ) {
    const previousPreviousSnapshot =
      snapshots[index - 2];

    const previousSnapshot =
      snapshots[index - 1];

    const currentSnapshot =
      snapshots[index];

    const previousPreviousMap =
      buildPositionMap(
        previousPreviousSnapshot,
      );

    const previousMap =
      buildPositionMap(
        previousSnapshot,
      );

    for (
      const current
      of currentSnapshot.positions
    ) {
      if (
        !RETROGRADE_PLANETS.has(
          current.planet,
        )
      ) {
        continue;
      }

      const previous =
        previousMap.get(
          current.planet,
        );

      const previousPrevious =
        previousPreviousMap.get(
          current.planet,
        );

      if (
        !previous ||
        !previousPrevious
      ) {
        continue;
      }

      /*
       * Lorsque Celestine fournit déjà clairement
       * le statut rétrograde, la détection sur deux
       * jours est plus fiable.
       */
      if (
        typeof previous.retrograde ===
          "boolean" &&
        typeof current.retrograde ===
          "boolean"
      ) {
        continue;
      }

      const event =
        detectDirectionChangeFromLongitude({
          previousPrevious,
          previous,
          current,
        });

      if (event) {
        events.push(
          event,
        );
      }
    }
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
    event.planet ?? "",
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

  for (const event of events) {
    const key =
      buildEventKey(
        event,
      );

    const current =
      selected.get(key);

    if (
      !current ||
      event.importance >
        current.importance
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
  const snapshots =
    Array.isArray(
      skySnapshots,
    )
      ? [...skySnapshots].sort(
          (
            first,
            second,
          ) =>
            first.date.localeCompare(
              second.date,
            ),
        )
      : [];

  if (
    snapshots.length < 2
  ) {
    return [];
  }

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

  events.push(
    ...detectThreeDayDirectionChanges(
      snapshots,
    ),
  );

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
