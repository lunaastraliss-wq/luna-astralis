import type {
  HoroscopePlanetaryInfluence,
} from "./HoroscopePdfTypes";

import type {
  PremiumPlanet,
} from "@/components/PremiumPdf/PremiumPdfTypes";

import {
  MAIN_PLANETS,
  PLANET_NAMES,
  translateSign,
  getPlanetSignName,
} from "@/components/PremiumPdf/PremiumPdfUtils";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type TransitAspectName =
  | "Conjonction"
  | "Sextile"
  | "Carré"
  | "Trigone"
  | "Opposition";

type TransitAspectCategory =
  | "harmonieux"
  | "dynamique"
  | "intense";

type TransitAspectDefinition = {
  name: TransitAspectName;
  angle: number;
  orb: number;
  category: TransitAspectCategory;
};

export type HoroscopeTransitAspect = {
  transitPlanet: string;
  natalPlanet: string;

  transitPlanetLabel: string;
  natalPlanetLabel: string;

  transitSign: string;
  natalSign: string;

  aspect: TransitAspectName;
  category: TransitAspectCategory;

  exactDifference: number;
  orb: number;
  strength: number;
};

/*
|--------------------------------------------------------------------------
| Aspects utilisés pour les transits
|--------------------------------------------------------------------------
|
| Les orbes sont volontairement plus serrés que dans un thème natal.
| Un horoscope du jour doit conserver uniquement les influences les plus
| pertinentes.
|--------------------------------------------------------------------------
*/

const TRANSIT_ASPECTS: TransitAspectDefinition[] = [
  {
    name: "Conjonction",
    angle: 0,
    orb: 5,
    category: "intense",
  },

  {
    name: "Sextile",
    angle: 60,
    orb: 3,
    category: "harmonieux",
  },

  {
    name: "Carré",
    angle: 90,
    orb: 4,
    category: "dynamique",
  },

  {
    name: "Trigone",
    angle: 120,
    orb: 4,
    category: "harmonieux",
  },

  {
    name: "Opposition",
    angle: 180,
    orb: 5,
    category: "dynamique",
  },
];

/*
|--------------------------------------------------------------------------
| Priorité des planètes
|--------------------------------------------------------------------------
*/

const TRANSIT_PLANET_PRIORITY: Record<
  string,
  number
> = {
  Pluto: 10,
  Neptune: 9,
  Uranus: 8,
  Saturn: 7,
  Jupiter: 6,
  Mars: 5,
  Venus: 4,
  Mercury: 3,
  Sun: 2,
  Moon: 1,
};

const NATAL_PLANET_PRIORITY: Record<
  string,
  number
> = {
  Sun: 10,
  Moon: 10,
  Venus: 8,
  Mars: 8,
  Mercury: 7,
  Jupiter: 6,
  Saturn: 6,
  Uranus: 4,
  Neptune: 4,
  Pluto: 4,
};

/*
|--------------------------------------------------------------------------
| Textes liés aux planètes en transit
|--------------------------------------------------------------------------
*/

const TRANSIT_PLANET_MEANINGS: Record<
  string,
  string
> = {
  Sun:
    "met en lumière votre identité, votre volonté et votre manière d’occuper votre place",

  Moon:
    "active votre sensibilité, vos besoins émotionnels et vos réactions immédiates",

  Mercury:
    "stimule votre pensée, vos échanges, vos décisions et votre capacité de compréhension",

  Venus:
    "influence vos sentiments, vos relations, vos valeurs et votre recherche d’harmonie",

  Mars:
    "réveille votre énergie d’action, vos désirs, votre courage et votre capacité d’affirmation",

  Jupiter:
    "favorise l’expansion, la confiance, les possibilités et le désir de progresser",

  Saturn:
    "vous confronte aux responsabilités, aux limites, à la discipline et aux engagements durables",

  Uranus:
    "provoque un besoin de changement, de liberté, de nouveauté et d’indépendance",

  Neptune:
    "amplifie l’intuition, l’imagination, la sensibilité et parfois le manque de clarté",

  Pluto:
    "met en mouvement une transformation profonde, un besoin de vérité et une reprise de pouvoir intérieur",
};

const NATAL_PLANET_AREAS: Record<
  string,
  string
> = {
  Sun:
    "votre identité, votre confiance personnelle et vos objectifs essentiels",

  Moon:
    "votre sécurité émotionnelle, vos habitudes et votre monde intérieur",

  Mercury:
    "votre manière de penser, de communiquer et de prendre des décisions",

  Venus:
    "votre vie affective, vos relations, vos valeurs et votre estime personnelle",

  Mars:
    "votre désir, votre énergie, votre volonté et votre manière d’agir",

  Jupiter:
    "votre confiance, vos ambitions et votre capacité à reconnaître les possibilités",

  Saturn:
    "vos responsabilités, vos limites et vos constructions à long terme",

  Uranus:
    "votre besoin d’indépendance, de changement et d’authenticité",

  Neptune:
    "votre intuition, vos idéaux, votre imagination et votre sensibilité",

  Pluto:
    "votre pouvoir intérieur, vos transformations et votre rapport à l’intensité",
};

/*
|--------------------------------------------------------------------------
| Fonctions utilitaires
|--------------------------------------------------------------------------
*/

function normalizeLongitude(
  value: number,
): number {
  return ((value % 360) + 360) % 360;
}

function angularDifference(
  firstLongitude: number,
  secondLongitude: number,
): number {
  const first =
    normalizeLongitude(firstLongitude);

  const second =
    normalizeLongitude(secondLongitude);

  const rawDifference =
    Math.abs(first - second);

  return rawDifference > 180
    ? 360 - rawDifference
    : rawDifference;
}

function getValidPlanet(
  planets: PremiumPlanet[],
  name: string,
): PremiumPlanet | null {
  const normalizedName =
    name.trim().toLowerCase();

  return (
    planets.find((planet) => {
      const planetName =
        typeof planet?.name === "string"
          ? planet.name
              .trim()
              .toLowerCase()
          : "";

      return (
        planetName === normalizedName &&
        typeof planet.longitude ===
          "number" &&
        Number.isFinite(
          planet.longitude,
        )
      );
    }) ?? null
  );
}

function getStrengthLabel(
  strength: number,
): string {
  if (strength >= 90) {
    return "Très puissante";
  }

  if (strength >= 75) {
    return "Puissante";
  }

  if (strength >= 55) {
    return "Modérée";
  }

  return "Subtile";
}

function getTransitPlanetWithSign(
  transit: HoroscopeTransitAspect,
): string {
  const sign =
    typeof transit.transitSign === "string"
      ? transit.transitSign.trim()
      : "";

  return sign
    ? `${transit.transitPlanetLabel} en ${sign}`
    : transit.transitPlanetLabel;
}

function calculateStrength(
  orb: number,
  maximumOrb: number,
): number {
  const ratio =
    Math.max(
      0,
      1 - orb / maximumOrb,
    );

  return Math.round(
    40 + ratio * 60,
  );
}

function getTransitScore(
  transit: HoroscopeTransitAspect,
): number {
  const transitPriority =
    TRANSIT_PLANET_PRIORITY[
      transit.transitPlanet
    ] ?? 1;

  const natalPriority =
    NATAL_PLANET_PRIORITY[
      transit.natalPlanet
    ] ?? 1;

  return (
    transit.strength +
    transitPriority * 3 +
    natalPriority * 2
  );
}

/*
|--------------------------------------------------------------------------
| Calcul des transits
|--------------------------------------------------------------------------
*/

export function calculateHoroscopeTransits(
  transitPlanets: PremiumPlanet[],
  natalPlanets: PremiumPlanet[],
): HoroscopeTransitAspect[] {
  const safeTransitPlanets =
    Array.isArray(transitPlanets)
      ? transitPlanets
      : [];

  const safeNatalPlanets =
    Array.isArray(natalPlanets)
      ? natalPlanets
      : [];

  const calculatedTransits:
    HoroscopeTransitAspect[] = [];

  for (const transitPlanetName of MAIN_PLANETS) {
    const transitPlanet =
      getValidPlanet(
        safeTransitPlanets,
        transitPlanetName,
      );

    if (!transitPlanet) {
      continue;
    }

    for (const natalPlanetName of MAIN_PLANETS) {
      const natalPlanet =
        getValidPlanet(
          safeNatalPlanets,
          natalPlanetName,
        );

      if (!natalPlanet) {
        continue;
      }

      const difference =
        angularDifference(
          transitPlanet.longitude as number,
          natalPlanet.longitude as number,
        );

      let closestAspect:
        | {
            definition: TransitAspectDefinition;
            orb: number;
          }
        | null = null;

      for (const definition of TRANSIT_ASPECTS) {
        const orb =
          Math.abs(
            difference -
              definition.angle,
          );

        if (orb > definition.orb) {
          continue;
        }

        if (
          !closestAspect ||
          orb < closestAspect.orb
        ) {
          closestAspect = {
            definition,
            orb,
          };
        }
      }

      if (!closestAspect) {
        continue;
      }

      const transitSign =
        translateSign(
          getPlanetSignName(
            transitPlanet,
          ),
        );

      const natalSign =
        translateSign(
          getPlanetSignName(
            natalPlanet,
          ),
        );

      calculatedTransits.push({
        transitPlanet:
          transitPlanetName,

        natalPlanet:
          natalPlanetName,

        transitPlanetLabel:
          PLANET_NAMES[
            transitPlanetName
          ] ?? transitPlanetName,

        natalPlanetLabel:
          PLANET_NAMES[
            natalPlanetName
          ] ?? natalPlanetName,

        transitSign,
        natalSign,

        aspect:
          closestAspect.definition
            .name,

        category:
          closestAspect.definition
            .category,

        exactDifference:
          difference,

        orb:
          closestAspect.orb,

        strength:
          calculateStrength(
            closestAspect.orb,
            closestAspect.definition
              .orb,
          ),
      });
    }
  }

  return calculatedTransits.sort(
    (firstTransit, secondTransit) =>
      getTransitScore(
        secondTransit,
      ) -
      getTransitScore(
        firstTransit,
      ),
  );
}

/*
|--------------------------------------------------------------------------
| Interprétation d’un transit
|--------------------------------------------------------------------------
*/

function buildTransitTitle(
  transit: HoroscopeTransitAspect,
): string {
  return (
    `${transit.transitPlanetLabel} ` +
    `${transit.aspect.toLowerCase()} ` +
    `${transit.natalPlanetLabel} natal`
  );
}

function buildTransitDescription(
  transit: HoroscopeTransitAspect,
): string {
  const transitMeaning =
    TRANSIT_PLANET_MEANINGS[
      transit.transitPlanet
    ] ??
    "active une énergie importante";

  const natalArea =
    NATAL_PLANET_AREAS[
      transit.natalPlanet
    ] ??
    "une dimension importante de votre personnalité";

  switch (transit.aspect) {
    case "Conjonction":
      return (
        `${getTransitPlanetWithSign(transit)} ${transitMeaning}. ` +
        `Sa conjonction avec votre ${transit.natalPlanetLabel} natal concentre cette influence sur ${natalArea}. ` +
        `Cette énergie peut être particulièrement visible aujourd’hui et mérite d’être utilisée consciemment.`
      );

    case "Sextile":
      return (
        `${getTransitPlanetWithSign(transit)} crée une ouverture favorable avec votre ${transit.natalPlanetLabel} natal. ` +
        `Cette influence soutient ${natalArea}, mais elle demande généralement une initiative de votre part pour produire un résultat concret.`
      );

    case "Carré":
      return (
        `${getTransitPlanetWithSign(transit)} forme un carré avec votre ${transit.natalPlanetLabel} natal. ` +
        `Une tension peut apparaître autour de ${natalArea}. ` +
        `Cette configuration ne représente pas un échec : elle vous pousse à corriger une situation ou à agir autrement.`
      );

    case "Trigone":
      return (
        `${getTransitPlanetWithSign(transit)} forme un trigone harmonieux avec votre ${transit.natalPlanetLabel} natal. ` +
        `Cette influence facilite ${natalArea} et vous permet d’utiliser plus naturellement vos qualités, vos idées ou vos ressources.`
      );

    case "Opposition":
      return (
        `${getTransitPlanetWithSign(transit)} s’oppose à votre ${transit.natalPlanetLabel} natal. ` +
        `Deux besoins peuvent sembler difficiles à concilier autour de ${natalArea}. ` +
        `La journée vous invite à rechercher un équilibre plutôt qu’à choisir un seul extrême.`
      );

    default:
      return (
        `${transit.transitPlanetLabel} influence actuellement votre ${transit.natalPlanetLabel} natal et active ${natalArea}.`
      );
  }
}

function buildTransitAdvice(
  transit: HoroscopeTransitAspect,
): string {
  switch (transit.aspect) {
    case "Conjonction":
      return (
        "Canalisez cette intensité vers une action précise plutôt que de la laisser se disperser."
      );

    case "Sextile":
      return (
        "Saisissez l’occasion qui se présente et posez un geste concret pour activer cette influence favorable."
      );

    case "Carré":
      return (
        "Évitez les réactions impulsives. Identifiez la tension réelle, puis transformez-la en décision constructive."
      );

    case "Trigone":
      return (
        "Utilisez cette facilité consciemment plutôt que de considérer qu’elle agira seule."
      );

    case "Opposition":
      return (
        "Cherchez un compromis entre vos besoins personnels et les demandes de la situation."
      );

    default:
      return (
        "Observez la manière dont cette influence se manifeste avant de prendre une décision importante."
      );
  }
}

/*
|--------------------------------------------------------------------------
| Conversion pour le PDF Horoscope
|--------------------------------------------------------------------------
*/

export function buildPlanetaryInfluencesFromTransits(
  transits: HoroscopeTransitAspect[],
  maximumInfluences = 8,
): HoroscopePlanetaryInfluence[] {
  const safeTransits =
    Array.isArray(transits)
      ? transits
      : [];

  const safeMaximum =
    Number.isFinite(maximumInfluences)
      ? Math.max(
          0,
          Math.floor(maximumInfluences),
        )
      : 0;

  if (
    safeMaximum === 0 ||
    safeTransits.length === 0
  ) {
    return [];
  }

  const selectedTransits:
    HoroscopeTransitAspect[] = [];

  const transitPlanetCounts =
    new Map<string, number>();

  for (const transit of safeTransits) {
    const currentCount =
      transitPlanetCounts.get(
        transit.transitPlanet,
      ) ?? 0;

    if (currentCount >= 2) {
      continue;
    }

    selectedTransits.push(
      transit,
    );

    transitPlanetCounts.set(
      transit.transitPlanet,
      currentCount + 1,
    );

    if (
      selectedTransits.length >=
      safeMaximum
    ) {
      break;
    }
  }

  return selectedTransits.map(
    (transit) => ({
      planet:
        transit.transitPlanetLabel,

      sign:
        transit.transitSign,

      aspect:
        `${transit.aspect} ${transit.natalPlanetLabel} natal`,

      title:
        buildTransitTitle(
          transit,
        ),

      description:
        buildTransitDescription(
          transit,
        ),

      advice:
        `${buildTransitAdvice(
          transit,
        )} Cette influence est ${getStrengthLabel(
          transit.strength,
        ).toLowerCase()}.`,
    }),
  );
}

/*
|--------------------------------------------------------------------------
| Fonction complète
|--------------------------------------------------------------------------
*/

export function createDailyPlanetaryInfluences(
  transitPlanets: PremiumPlanet[],
  natalPlanets: PremiumPlanet[],
  maximumInfluences = 8,
): HoroscopePlanetaryInfluence[] {
  const transits =
    calculateHoroscopeTransits(
      transitPlanets,
      natalPlanets,
    );

  return buildPlanetaryInfluencesFromTransits(
    transits,
    maximumInfluences,
  );
}
