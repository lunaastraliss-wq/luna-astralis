import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<
    PaidPdfLocale,
    "fr"
  >;

type DominantLabels = {
  analysis: string;

  title: string;
  centralForcesTitle: string;

  dominantElement: string;
  dominantModality: string;

  elementDistribution: string;
  modalityDistribution: string;

  analyzedPlanets: string;

  dominantPlanet: string;
  centralForce: string;

  dominantHouse: string;
  house: string;

  undetermined: string;

  naturalFunctioning: string;
  globalSignature: string;

  synthesisTitle: string;

  fire: string;
  earth: string;
  air: string;
  water: string;

  cardinal: string;
  fixed: string;
  mutable: string;

  planetSingular: string;
  planetPlural: string;

  sun: string;
  moon: string;
  mercury: string;
  venus: string;
  mars: string;
  jupiter: string;
  saturn: string;
  uranus: string;
  neptune: string;
  pluto: string;

  fallbackPlanetEnergy: string;
  fallbackDominantPlanetText: string;
  noDominantPlanet: string;
  noDominantHouse: string;
};

const LABELS: Record<
  NonFrenchLocale,
  DominantLabels
> = {
  en: {
    analysis:
      "Signature Analysis",

    title:
      "Your astrological dominants",

    centralForcesTitle:
      "The central forces of your chart",

    dominantElement:
      "Dominant element",

    dominantModality:
      "Dominant modality",

    elementDistribution:
      "Element distribution",

    modalityDistribution:
      "Modality distribution",

    analyzedPlanets:
      "of the planets analyzed",

    dominantPlanet:
      "Dominant planet",

    centralForce:
      "Central force",

    dominantHouse:
      "Dominant house",

    house:
      "house",

    undetermined:
      "Undetermined",

    naturalFunctioning:
      "Your natural functioning",

    globalSignature:
      "Overall signature",

    synthesisTitle:
      "Synthesis of your dominants",

    fire:
      "Fire",

    earth:
      "Earth",

    air:
      "Air",

    water:
      "Water",

    cardinal:
      "Cardinal",

    fixed:
      "Fixed",

    mutable:
      "Mutable",

    planetSingular:
      "planet",

    planetPlural:
      "planets",

    sun:
      "Sun",

    moon:
      "Moon",

    mercury:
      "Mercury",

    venus:
      "Venus",

    mars:
      "Mars",

    jupiter:
      "Jupiter",

    saturn:
      "Saturn",

    uranus:
      "Uranus",

    neptune:
      "Neptune",

    pluto:
      "Pluto",

    fallbackPlanetEnergy:
      "a particular planetary energy",

    fallbackDominantPlanetText:
      "This planet occupies an important place in your natal chart.",

    noDominantPlanet:
      "The available data does not allow a dominant planet to be identified.",

    noDominantHouse:
      "The available data does not allow a dominant house to be identified with sufficient precision.",
  },

  es: {
    analysis:
      "Análisis Firma",

    title:
      "Tus dominantes astrológicas",

    centralForcesTitle:
      "Las fuerzas centrales de tu carta",

    dominantElement:
      "Elemento dominante",

    dominantModality:
      "Modalidad dominante",

    elementDistribution:
      "Distribución de los elementos",

    modalityDistribution:
      "Distribución de las modalidades",

    analyzedPlanets:
      "de los planetas analizados",

    dominantPlanet:
      "Planeta dominante",

    centralForce:
      "Fuerza central",

    dominantHouse:
      "Casa dominante",

    house:
      "casa",

    undetermined:
      "No determinada",

    naturalFunctioning:
      "Tu funcionamiento natural",

    globalSignature:
      "Firma global",

    synthesisTitle:
      "Síntesis de tus dominantes",

    fire:
      "Fuego",

    earth:
      "Tierra",

    air:
      "Aire",

    water:
      "Agua",

    cardinal:
      "Cardinal",

    fixed:
      "Fija",

    mutable:
      "Mutable",

    planetSingular:
      "planeta",

    planetPlural:
      "planetas",

    sun:
      "Sol",

    moon:
      "Luna",

    mercury:
      "Mercurio",

    venus:
      "Venus",

    mars:
      "Marte",

    jupiter:
      "Júpiter",

    saturn:
      "Saturno",

    uranus:
      "Urano",

    neptune:
      "Neptuno",

    pluto:
      "Plutón",

    fallbackPlanetEnergy:
      "una energía planetaria particular",

    fallbackDominantPlanetText:
      "Este planeta ocupa un lugar importante en tu carta natal.",

    noDominantPlanet:
      "Los datos disponibles no permiten identificar un planeta dominante.",

    noDominantHouse:
      "Los datos disponibles no permiten identificar una casa dominante con suficiente precisión.",
  },

  de: {
    analysis:
      "Signatur-Analyse",

    title:
      "Ihre astrologischen Dominanten",

    centralForcesTitle:
      "Die zentralen Kräfte Ihres Horoskops",

    dominantElement:
      "Dominantes Element",

    dominantModality:
      "Dominante Modalität",

    elementDistribution:
      "Verteilung der Elemente",

    modalityDistribution:
      "Verteilung der Modalitäten",

    analyzedPlanets:
      "der analysierten Planeten",

    dominantPlanet:
      "Dominanter Planet",

    centralForce:
      "Zentrale Kraft",

    dominantHouse:
      "Dominantes Haus",

    house:
      "Haus",

    undetermined:
      "Nicht bestimmt",

    naturalFunctioning:
      "Ihre natürliche Funktionsweise",

    globalSignature:
      "Gesamtsignatur",

    synthesisTitle:
      "Synthese Ihrer Dominanten",

    fire:
      "Feuer",

    earth:
      "Erde",

    air:
      "Luft",

    water:
      "Wasser",

    cardinal:
      "Kardinal",

    fixed:
      "Fix",

    mutable:
      "Veränderlich",

    planetSingular:
      "Planet",

    planetPlural:
      "Planeten",

    sun:
      "Sonne",

    moon:
      "Mond",

    mercury:
      "Merkur",

    venus:
      "Venus",

    mars:
      "Mars",

    jupiter:
      "Jupiter",

    saturn:
      "Saturn",

    uranus:
      "Uranus",

    neptune:
      "Neptun",

    pluto:
      "Pluto",

    fallbackPlanetEnergy:
      "eine besondere planetarische Energie",

    fallbackDominantPlanetText:
      "Dieser Planet nimmt in Ihrem Geburtshoroskop eine wichtige Stellung ein.",

    noDominantPlanet:
      "Die verfügbaren Daten erlauben keine eindeutige Bestimmung eines dominanten Planeten.",

    noDominantHouse:
      "Die verfügbaren Daten erlauben keine ausreichend genaue Bestimmung eines dominanten Hauses.",
  },

  it: {
    analysis:
      "Analisi Firma",

    title:
      "Le tue dominanti astrologiche",

    centralForcesTitle:
      "Le forze centrali del tuo tema",

    dominantElement:
      "Elemento dominante",

    dominantModality:
      "Modalità dominante",

    elementDistribution:
      "Distribuzione degli elementi",

    modalityDistribution:
      "Distribuzione delle modalità",

    analyzedPlanets:
      "dei pianeti analizzati",

    dominantPlanet:
      "Pianeta dominante",

    centralForce:
      "Forza centrale",

    dominantHouse:
      "Casa dominante",

    house:
      "casa",

    undetermined:
      "Non determinata",

    naturalFunctioning:
      "Il tuo funzionamento naturale",

    globalSignature:
      "Firma globale",

    synthesisTitle:
      "Sintesi delle tue dominanti",

    fire:
      "Fuoco",

    earth:
      "Terra",

    air:
      "Aria",

    water:
      "Acqua",

    cardinal:
      "Cardinale",

    fixed:
      "Fissa",

    mutable:
      "Mutevole",

    planetSingular:
      "pianeta",

    planetPlural:
      "pianeti",

    sun:
      "Sole",

    moon:
      "Luna",

    mercury:
      "Mercurio",

    venus:
      "Venere",

    mars:
      "Marte",

    jupiter:
      "Giove",

    saturn:
      "Saturno",

    uranus:
      "Urano",

    neptune:
      "Nettuno",

    pluto:
      "Plutone",

    fallbackPlanetEnergy:
      "un’energia planetaria particolare",

    fallbackDominantPlanetText:
      "Questo pianeta occupa un posto importante nel tuo tema natale.",

    noDominantPlanet:
      "I dati disponibili non permettono di identificare un pianeta dominante.",

    noDominantHouse:
      "I dati disponibili non permettono di identificare una casa dominante con sufficiente precisione.",
  },

  pt: {
    analysis:
      "Análise Assinatura",

    title:
      "Suas dominantes astrológicas",

    centralForcesTitle:
      "As forças centrais do seu mapa",

    dominantElement:
      "Elemento dominante",

    dominantModality:
      "Modalidade dominante",

    elementDistribution:
      "Distribuição dos elementos",

    modalityDistribution:
      "Distribuição das modalidades",

    analyzedPlanets:
      "dos planetas analisados",

    dominantPlanet:
      "Planeta dominante",

    centralForce:
      "Força central",

    dominantHouse:
      "Casa dominante",

    house:
      "casa",

    undetermined:
      "Não determinada",

    naturalFunctioning:
      "Seu funcionamento natural",

    globalSignature:
      "Assinatura global",

    synthesisTitle:
      "Síntese das suas dominantes",

    fire:
      "Fogo",

    earth:
      "Terra",

    air:
      "Ar",

    water:
      "Água",

    cardinal:
      "Cardinal",

    fixed:
      "Fixa",

    mutable:
      "Mutável",

    planetSingular:
      "planeta",

    planetPlural:
      "planetas",

    sun:
      "Sol",

    moon:
      "Lua",

    mercury:
      "Mercúrio",

    venus:
      "Vênus",

    mars:
      "Marte",

    jupiter:
      "Júpiter",

    saturn:
      "Saturno",

    uranus:
      "Urano",

    neptune:
      "Netuno",

    pluto:
      "Plutão",

    fallbackPlanetEnergy:
      "uma energia planetária particular",

    fallbackDominantPlanetText:
      "Este planeta ocupa um lugar importante no seu mapa natal.",

    noDominantPlanet:
      "Os dados disponíveis não permitem identificar um planeta dominante.",

    noDominantHouse:
      "Os dados disponíveis não permitem identificar uma casa dominante com precisão suficiente.",
  },
};

function replaceAll(
  source: string,
  from: string,
  to: string,
): string {
  return source
    .split(from)
    .join(to);
}

export function localizeSignatureDominants(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (
    locale === "fr"
  ) {
    return source;
  }

  const lang =
    locale as NonFrenchLocale;

  const labels =
    LABELS[lang];

  let out =
    source.replace(
      /\r\n/g,
      "\n",
    );

  /*
  |--------------------------------------------------------------------------
  | Libellés visibles
  |--------------------------------------------------------------------------
  */

  const staticPairs:
    Array<[string, string]> = [
      [
        "Analyse Signature",
        labels.analysis,
      ],

      [
        "Vos dominantes astrologiques",
        labels.title,
      ],

      [
        "Les forces centrales du thème",
        labels.centralForcesTitle,
      ],

      [
        "Élément dominant",
        labels.dominantElement,
      ],

      [
        "Modalité dominante",
        labels.dominantModality,
      ],

      [
        "Répartition des éléments",
        labels.elementDistribution,
      ],

      [
        "Répartition des modalités",
        labels.modalityDistribution,
      ],

      [
        "% des planètes analysées",
        `% ${labels.analyzedPlanets}`,
      ],

      [
        "Planète dominante :",
        `${labels.dominantPlanet} :`,
      ],

      [
        "Force centrale",
        labels.centralForce,
      ],

      [
        "Maison dominante",
        labels.dominantHouse,
      ],

      [
        "Votre fonctionnement naturel",
        labels.naturalFunctioning,
      ],

      [
        "Signature globale",
        labels.globalSignature,
      ],

      [
        "Synthèse de vos dominantes",
        labels.synthesisTitle,
      ],

      [
        "Non déterminée",
        labels.undetermined,
      ],

      [
        "une énergie planétaire particulière",
        labels.fallbackPlanetEnergy,
      ],

      [
        "Cette planète occupe une place importante dans votre thème natal.",
        labels.fallbackDominantPlanetText,
      ],

      [
        "Les données disponibles ne permettent pas d’identifier une planète dominante.",
        labels.noDominantPlanet,
      ],

      [
        "Les données disponibles ne permettent pas d’identifier une maison dominante avec suffisamment de précision.",
        labels.noDominantHouse,
      ],
    ];

  for (
    const [from, to] of
    staticPairs
  ) {
    out =
      replaceAll(
        out,
        from,
        to,
      );
  }

  /*
  |--------------------------------------------------------------------------
  | Noms visibles des planètes
  |--------------------------------------------------------------------------
  |
  | MAIN_PLANETS reste inchangé.
  |--------------------------------------------------------------------------
  */

  const planetNames = {
    Sun:
      labels.sun,

    Moon:
      labels.moon,

    Mercury:
      labels.mercury,

    Venus:
      labels.venus,

    Mars:
      labels.mars,

    Jupiter:
      labels.jupiter,

    Saturn:
      labels.saturn,

    Uranus:
      labels.uranus,

    Neptune:
      labels.neptune,

    Pluto:
      labels.pluto,
  };

  out =
    out.replace(
      /const PLANET_NAMES_FR:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\};/,
      `const PLANET_NAMES_FR: Record<string, string> = ${JSON.stringify(
        planetNames,
        null,
        2,
      )};`,
    );

  /*
  |--------------------------------------------------------------------------
  | Noms visibles des éléments
  |--------------------------------------------------------------------------
  |
  | Feu / Terre / Air / Eau restent les valeurs techniques internes.
  |--------------------------------------------------------------------------
  */

  const elementNames =
    JSON.stringify(
      {
        Feu:
          labels.fire,

        Terre:
          labels.earth,

        Air:
          labels.air,

        Eau:
          labels.water,
      },
      null,
      2,
    );

  /*
  |--------------------------------------------------------------------------
  | Noms visibles des modalités
  |--------------------------------------------------------------------------
  |
  | Cardinal / Fixe / Mutable restent les valeurs techniques internes.
  |--------------------------------------------------------------------------
  */

  const modalityNames =
    JSON.stringify(
      {
        Cardinal:
          labels.cardinal,

        Fixe:
          labels.fixed,

        Mutable:
          labels.mutable,
      },
      null,
      2,
    );

  /*
  |--------------------------------------------------------------------------
  | Helpers d’affichage
  |--------------------------------------------------------------------------
  */

  if (
    !out.includes(
      "function getDominantElementDisplayName(",
    )
  ) {
    const marker =
      "function normalizeHouse(";

    const index =
      out.indexOf(
        marker,
      );

    if (
      index >= 0
    ) {
      const helpers = `
function getDominantElementDisplayName(
  element: ElementName
): string {
  const names: Record<
    ElementName,
    string
  > = ${elementNames};

  return (
    names[element] ||
    element
  );
}

function getDominantModalityDisplayName(
  modality: ModalityName
): string {
  const names: Record<
    ModalityName,
    string
  > = ${modalityNames};

  return (
    names[modality] ||
    modality
  );
}

`;

      out =
        out.slice(
          0,
          index,
        ) +
        helpers +
        out.slice(
          index,
        );
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Élément dominant affiché
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /\{\s*dominantElement\.name\s*\}/g,
      "{getDominantElementDisplayName(dominantElement.name)}",
    );

  /*
  |--------------------------------------------------------------------------
  | Modalité dominante affichée
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /\{\s*dominantModality\.name\s*\}/g,
      "{getDominantModalityDisplayName(dominantModality.name)}",
    );

  /*
  |--------------------------------------------------------------------------
  | Répartition des éléments
  |--------------------------------------------------------------------------
  |
  | label={element}
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /label=\{element\}/g,
      "label={getDominantElementDisplayName(element)}",
    );

  /*
  |--------------------------------------------------------------------------
  | Répartition des modalités
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /label=\{modality\}/g,
      "label={getDominantModalityDisplayName(modality)}",
    );

  /*
  |--------------------------------------------------------------------------
  | Maison dominante
  |--------------------------------------------------------------------------
  |
  | Source :
  |
  | `Maison dominante : maison ${dominantHouse.house}`
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /`Maison dominante : maison \$\{dominantHouse\.house\}`/g,
      `\`${labels.dominantHouse} : ${labels.house} \${dominantHouse.house}\``,
    );

  /*
  |--------------------------------------------------------------------------
  | Nombre de planètes dans la maison dominante
  |--------------------------------------------------------------------------
  |
  | Le composant construit :
  |
  | ${count} planète + "s"
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /`\$\{\s*dominantHouse\.count\s*\}\s*planète\$\{\s*dominantHouse\.count\s*>\s*1\s*\?\s*"s"\s*:\s*""\s*\}`/g,
      `\`\${dominantHouse.count} \${
        dominantHouse.count > 1
          ? ${JSON.stringify(
              labels.planetPlural,
            )}
          : ${JSON.stringify(
              labels.planetSingular,
            )}
      }\``,
    );

  /*
  |--------------------------------------------------------------------------
  | Synthèse dynamique
  |--------------------------------------------------------------------------
  |
  | On ne modifie pas element.name / modality.name comme données internes.
  | On change uniquement leur affichage dans la phrase construite.
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /\$\{element\.name\}/g,
      "${getDominantElementDisplayName(element.name)}",
    );

  out =
    out.replace(
      /\$\{modality\.name\.toLowerCase\(\)\}/g,
      "${getDominantModalityDisplayName(modality.name).toLowerCase()}",
    );

  /*
  |--------------------------------------------------------------------------
  | "La maison X"
  |--------------------------------------------------------------------------
  |
  | Plusieurs phrases dynamiques utilisent ce préfixe.
  |--------------------------------------------------------------------------
  */

  if (
    labels.house !== "maison"
  ) {
    out =
      out.replace(
        /`La maison \$\{dominantHouse\}/g,
        `\`${labels.house} \${dominantHouse}`,
      );

    out =
      out.replace(
        /`La maison \$\{dominantHouse\.house\}/g,
        `\`${labels.house} \${dominantHouse.house}`,
      );
  }

  return out;
}
