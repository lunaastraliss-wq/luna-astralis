import type {
  PremiumPlanet,
} from "@/components/PremiumPdf/PremiumPdfTypes";

import {
  getPlanet,
} from "@/components/PremiumPdf/PremiumPdfUtils";

import type {
  HoroscopeZodiacSign,
} from "../../HoroscopePdfTypes";

import {
  getHoroscopeZodiacFromLongitude,
  getHoroscopeZodiacLabel,
} from "../../HoroscopePdfUtils";

import type {
  MonthlyAspectType,
  MonthlyAstrologyIdentity,
  MonthlyPlanetName,
  MonthlySkySnapshot,
  MonthlyTransit,
} from "./types";

import {
  calculateNatalPlanets,
} from "./monthlyCelestineUtils";

/*
|--------------------------------------------------------------------------
| Planètes
|--------------------------------------------------------------------------
*/

const PLANET_NAME_TO_ENGLISH: Record<
  MonthlyPlanetName,
  string
> = {
  Soleil: "Sun",
  Lune: "Moon",
  Mercure: "Mercury",
  Vénus: "Venus",
  Mars: "Mars",
  Jupiter: "Jupiter",
  Saturne: "Saturn",
  Uranus: "Uranus",
  Neptune: "Neptune",
  Pluton: "Pluto",
  Chiron: "Chiron",
  "Nœud Nord": "North Node",
  "Nœud Sud": "South Node",
};

const TRANSIT_PLANET_PRIORITY:
  Record<MonthlyPlanetName, number> = {
    Soleil: 5,
    Lune: 2,
    Mercure: 4,
    Vénus: 5,
    Mars: 7,
    Jupiter: 8,
    Saturne: 9,
    Uranus: 9,
    Neptune: 9,
    Pluton: 10,
    Chiron: 7,
    "Nœud Nord": 6,
    "Nœud Sud": 5,
  };

const NATAL_PLANET_PRIORITY:
  Record<MonthlyPlanetName, number> = {
    Soleil: 10,
    Lune: 10,
    Mercure: 7,
    Vénus: 8,
    Mars: 8,
    Jupiter: 6,
    Saturne: 7,
    Uranus: 4,
    Neptune: 4,
    Pluton: 5,
    Chiron: 6,
    "Nœud Nord": 5,
    "Nœud Sud": 4,
  };

/*
|--------------------------------------------------------------------------
| Aspects
|--------------------------------------------------------------------------
*/

type TransitAspectDefinition = {
  type: MonthlyAspectType;
  label: string;
  angle: number;
  orb: number;
};

const TRANSIT_ASPECTS:
  TransitAspectDefinition[] = [
    {
      type: "conjunction",
      label: "Conjonction",
      angle: 0,
      orb: 5,
    },
    {
      type: "sextile",
      label: "Sextile",
      angle: 60,
      orb: 3,
    },
    {
      type: "square",
      label: "Carré",
      angle: 90,
      orb: 4,
    },
    {
      type: "trine",
      label: "Trigone",
      angle: 120,
      orb: 4,
    },
    {
      type: "opposition",
      label: "Opposition",
      angle: 180,
      orb: 5,
    },
  ];

/*
|--------------------------------------------------------------------------
| Utilitaires
|--------------------------------------------------------------------------
*/

function normalizeLongitude(
  value: number,
): number {
  return (
    ((value % 360) + 360) %
    360
  );
}

function angularDifference(
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
    Math.abs(
      first - second,
    );

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

function getPlanetSign(
  longitude: number,
): {
  sign: HoroscopeZodiacSign;
  signLabel: string;
} | null {
  const sign =
    getHoroscopeZodiacFromLongitude(
      longitude,
    );

  if (!sign) {
    return null;
  }

  return {
    sign,
    signLabel:
      getHoroscopeZodiacLabel(
        sign,
      ),
  };
}

function findClosestAspect(
  angle: number,
): {
  definition: TransitAspectDefinition;
  orb: number;
} | null {
  let closest:
    | {
        definition:
          TransitAspectDefinition;
        orb: number;
      }
    | null = null;

  for (
    const definition
    of TRANSIT_ASPECTS
  ) {
    const orb =
      Math.abs(
        angle -
          definition.angle,
      );

    if (
      orb > definition.orb
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
| Textes
|--------------------------------------------------------------------------
*/

function buildTitle({
  transitPlanet,
  aspectLabel,
  natalPlanet,
}: {
  transitPlanet: MonthlyPlanetName;
  aspectLabel: string;
  natalPlanet: MonthlyPlanetName;
}): string {
  return (
    `${transitPlanet} ` +
    `${aspectLabel.toLowerCase()} ` +
    `${natalPlanet} natal`
  );
}

function buildDescription({
  transitPlanet,
  natalPlanet,
  aspect,
}: {
  transitPlanet: MonthlyPlanetName;
  natalPlanet: MonthlyPlanetName;
  aspect: MonthlyAspectType;
}): string {
  switch (aspect) {
    case "conjunction":
      return (
        `${transitPlanet} concentre son influence sur votre ${natalPlanet} natal. ` +
        "Cette rencontre intensifie les thèmes associés à ces deux planètes et peut marquer un moment important du mois."
      );

    case "sextile":
      return (
        `${transitPlanet} crée une ouverture favorable avec votre ${natalPlanet} natal. ` +
        "Cette énergie facilite les initiatives, mais elle demande un geste concret pour être pleinement utilisée."
      );

    case "square":
      return (
        `${transitPlanet} forme une tension avec votre ${natalPlanet} natal. ` +
        "Une situation peut demander une adaptation, une décision ou une nouvelle manière d’agir."
      );

    case "trine":
      return (
        `${transitPlanet} soutient harmonieusement votre ${natalPlanet} natal. ` +
        "Cette influence favorise une expression plus fluide de vos qualités et de vos ressources personnelles."
      );

    case "opposition":
      return (
        `${transitPlanet} s’oppose à votre ${natalPlanet} natal. ` +
        "Deux besoins peuvent sembler difficiles à concilier et vous inviter à rechercher un meilleur équilibre."
      );
  }
}

function buildAdvice(
  aspect: MonthlyAspectType,
): string {
  switch (aspect) {
    case "conjunction":
      return "Canalisez cette intensité vers un objectif clair et évitez de disperser votre énergie.";

    case "sextile":
      return "Profitez de cette ouverture en posant une action concrète au bon moment.";

    case "square":
      return "Évitez les réactions impulsives et utilisez cette tension pour corriger ce qui doit l’être.";

    case "trine":
      return "Utilisez consciemment cette facilité plutôt que d’attendre que les choses se produisent seules.";

    case "opposition":
      return "Cherchez un compromis entre vos besoins personnels et les exigences de la situation.";
  }
}

/*
|--------------------------------------------------------------------------
| Importance
|--------------------------------------------------------------------------
*/

function calculateImportance({
  transitPlanet,
  natalPlanet,
  orb,
  maximumOrb,
}: {
  transitPlanet: MonthlyPlanetName;
  natalPlanet: MonthlyPlanetName;
  orb: number;
  maximumOrb: number;
}): number {
  const precision =
    Math.max(
      0,
      1 -
        orb /
          maximumOrb,
    );

  const score =
    20 +
    precision * 45 +
    TRANSIT_PLANET_PRIORITY[
      transitPlanet
    ] * 2 +
    NATAL_PLANET_PRIORITY[
      natalPlanet
    ];

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
| Maisons natales
|--------------------------------------------------------------------------
*/

function getNatalHouse(
  natalPlanet: PremiumPlanet,
): number | undefined {
  if (
    typeof natalPlanet.house !==
      "number" ||
    !Number.isFinite(
      natalPlanet.house,
    )
  ) {
    return undefined;
  }

  const rounded =
    Math.round(
      natalPlanet.house,
    );

  if (
    rounded < 1 ||
    rounded > 12
  ) {
    return undefined;
  }

  return rounded;
}

/*
|--------------------------------------------------------------------------
| Calcul des transits quotidiens
|--------------------------------------------------------------------------
*/

function calculateSnapshotTransits({
  snapshot,
  natalPlanets,
}: {
  snapshot: MonthlySkySnapshot;
  natalPlanets: PremiumPlanet[];
}): MonthlyTransit[] {
  const transits:
    MonthlyTransit[] = [];

  for (
    const transitPosition
    of snapshot.positions
  ) {
    const englishTransitName =
      PLANET_NAME_TO_ENGLISH[
        transitPosition.planet
      ];

    if (!englishTransitName) {
      continue;
    }

    for (
      const natalPlanetName
      of Object.keys(
        PLANET_NAME_TO_ENGLISH,
      ) as MonthlyPlanetName[]
    ) {
      const englishNatalName =
        PLANET_NAME_TO_ENGLISH[
          natalPlanetName
        ];

      const natalPlanet =
        getPlanet(
          natalPlanets,
          englishNatalName,
        );

      if (
        !natalPlanet ||
        typeof natalPlanet.longitude !==
          "number" ||
        !Number.isFinite(
          natalPlanet.longitude,
        )
      ) {
        continue;
      }

      const angle =
        angularDifference(
          transitPosition.longitude,
          natalPlanet.longitude,
        );

      const closest =
        findClosestAspect(
          angle,
        );

      if (!closest) {
        continue;
      }

      const signData =
        getPlanetSign(
          transitPosition.longitude,
        );

      if (!signData) {
        continue;
      }

      const importance =
        calculateImportance({
          transitPlanet:
            transitPosition.planet,
          natalPlanet:
            natalPlanetName,
          orb:
            closest.orb,
          maximumOrb:
            closest.definition.orb,
        });

      transits.push({
        id:
          `${snapshot.date}-` +
          `${cleanIdPart(
            transitPosition.planet,
          )}-` +
          `${closest.definition.type}-` +
          `${cleanIdPart(
            natalPlanetName,
          )}`,

        date:
          snapshot.date,

        transitPlanet:
          transitPosition.planet,

        natalPlanet:
          natalPlanetName,

        transitSign:
          signData.sign,

        transitSignLabel:
          signData.signLabel,

        aspect:
          closest.definition.type,

        aspectLabel:
          closest.definition.label,

        orb:
          roundValue(
            closest.orb,
          ),

        natalHouse:
          getNatalHouse(
            natalPlanet,
          ),

        importance,

        title:
          buildTitle({
            transitPlanet:
              transitPosition.planet,
            aspectLabel:
              closest.definition.label,
            natalPlanet:
              natalPlanetName,
          }),

        description:
          buildDescription({
            transitPlanet:
              transitPosition.planet,
            natalPlanet:
              natalPlanetName,
            aspect:
              closest.definition.type,
          }),

        advice:
          buildAdvice(
            closest.definition.type,
          ),
      });
    }
  }

  return transits;
}

/*
|--------------------------------------------------------------------------
| Sélection de la date la plus exacte
|--------------------------------------------------------------------------
*/

function buildTransitGroupKey(
  transit: MonthlyTransit,
): string {
  return [
    transit.transitPlanet,
    transit.natalPlanet ?? "",
    transit.aspect ?? "",
  ].join("|");
}

function selectExactTransits(
  transits: MonthlyTransit[],
): MonthlyTransit[] {
  const selected =
    new Map<
      string,
      MonthlyTransit
    >();

  for (const transit of transits) {
    const key =
      buildTransitGroupKey(
        transit,
      );

    const current =
      selected.get(key);

    const transitOrb =
      transit.orb ??
      Number.POSITIVE_INFINITY;

    const currentOrb =
      current?.orb ??
      Number.POSITIVE_INFINITY;

    if (
      !current ||
      transitOrb <
        currentOrb ||
      (
        transitOrb ===
          currentOrb &&
        transit.importance >
          current.importance
      )
    ) {
      selected.set(
        key,
        transit,
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

export function calculateMonthlyTransits({
  identity,
  skySnapshots,
}: {
  identity: MonthlyAstrologyIdentity;
  skySnapshots: MonthlySkySnapshot[];
}): MonthlyTransit[] {
  const natalPlanets =
    calculateNatalPlanets(
      identity,
    );

  /*
   * Sans date de naissance ou coordonnées,
   * on conserve le rapport fonctionnel,
   * mais aucun transit personnalisé ne peut
   * être calculé correctement.
   */
  if (
    natalPlanets.length === 0
  ) {
    return [];
  }

  const allTransits =
    skySnapshots.flatMap(
      (snapshot) =>
        calculateSnapshotTransits({
          snapshot,
          natalPlanets,
        }),
    );

  const exactTransits =
    selectExactTransits(
      allTransits,
    );

  return exactTransits.sort(
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

      const firstOrb =
        first.orb ??
        Number.POSITIVE_INFINITY;

      const secondOrb =
        second.orb ??
        Number.POSITIVE_INFINITY;

      if (
        firstOrb !==
        secondOrb
      ) {
        return (
          firstOrb -
          secondOrb
        );
      }

      return first.date.localeCompare(
        second.date,
      );
    },
  );
}
