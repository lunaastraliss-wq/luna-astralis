import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type HouseLabels = {
  analysis: string;
  kicker: string;
  title: string;

  house: string;

  noMainPlanet: string;
  oneMainPlanet: string;
  mainPlanets: string;

  dominantHouse: string;
  undetermined: string;
  noDominant: string;

  planetsPresent: string;
  signatureInsight: string;

  planetFallback: string;

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
};

const LABELS: Record<
  NonFrenchLocale,
  HouseLabels
> = {
  en: {
    analysis: "Signature Analysis",
    kicker: "Areas of life",
    title: "Your twelve astrological houses",

    house: "House",

    noMainPlanet: "No main planet",
    oneMainPlanet: "1 main planet",
    mainPlanets: "main planets",

    dominantHouse: "Your most occupied house",
    undetermined: "Undetermined",
    noDominant:
      "No dominant house could be determined from the available planetary data.",

    planetsPresent: "Planets present:",
    signatureInsight: "Signature Insight",

    planetFallback: "Planet",

    sun: "Sun",
    moon: "Moon",
    mercury: "Mercury",
    venus: "Venus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturn",
    uranus: "Uranus",
    neptune: "Neptune",
    pluto: "Pluto",
  },

  es: {
    analysis: "Análisis Firma",
    kicker: "Ámbitos de vida",
    title: "Tus doce casas astrológicas",

    house: "Casa",

    noMainPlanet: "Ningún planeta principal",
    oneMainPlanet: "1 planeta principal",
    mainPlanets: "planetas principales",

    dominantHouse: "Tu casa más ocupada",
    undetermined: "No determinada",
    noDominant:
      "No se pudo determinar ninguna casa dominante a partir de los datos planetarios disponibles.",

    planetsPresent: "Planetas presentes:",
    signatureInsight: "Mirada Firma",

    planetFallback: "Planeta",

    sun: "Sol",
    moon: "Luna",
    mercury: "Mercurio",
    venus: "Venus",
    mars: "Marte",
    jupiter: "Júpiter",
    saturn: "Saturno",
    uranus: "Urano",
    neptune: "Neptuno",
    pluto: "Plutón",
  },

  de: {
    analysis: "Signatur-Analyse",
    kicker: "Lebensbereiche",
    title: "Ihre zwölf astrologischen Häuser",

    house: "Haus",

    noMainPlanet: "Kein Hauptplanet",
    oneMainPlanet: "1 Hauptplanet",
    mainPlanets: "Hauptplaneten",

    dominantHouse: "Ihr am stärksten besetztes Haus",
    undetermined: "Nicht bestimmt",
    noDominant:
      "Aus den verfügbaren Planetendaten konnte kein dominantes Haus bestimmt werden.",

    planetsPresent: "Vorhandene Planeten:",
    signatureInsight: "Signatur-Blick",

    planetFallback: "Planet",

    sun: "Sonne",
    moon: "Mond",
    mercury: "Merkur",
    venus: "Venus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturn",
    uranus: "Uranus",
    neptune: "Neptun",
    pluto: "Pluto",
  },

  it: {
    analysis: "Analisi Firma",
    kicker: "Ambiti della vita",
    title: "Le tue dodici case astrologiche",

    house: "Casa",

    noMainPlanet: "Nessun pianeta principale",
    oneMainPlanet: "1 pianeta principale",
    mainPlanets: "pianeti principali",

    dominantHouse: "La tua casa più occupata",
    undetermined: "Non determinata",
    noDominant:
      "Non è stato possibile determinare una casa dominante dai dati planetari disponibili.",

    planetsPresent: "Pianeti presenti:",
    signatureInsight: "Sguardo Firma",

    planetFallback: "Pianeta",

    sun: "Sole",
    moon: "Luna",
    mercury: "Mercurio",
    venus: "Venere",
    mars: "Marte",
    jupiter: "Giove",
    saturn: "Saturno",
    uranus: "Urano",
    neptune: "Nettuno",
    pluto: "Plutone",
  },

  pt: {
    analysis: "Análise Assinatura",
    kicker: "Áreas da vida",
    title: "Suas doze casas astrológicas",

    house: "Casa",

    noMainPlanet: "Nenhum planeta principal",
    oneMainPlanet: "1 planeta principal",
    mainPlanets: "planetas principais",

    dominantHouse: "Sua casa mais ocupada",
    undetermined: "Não determinada",
    noDominant:
      "Não foi possível determinar uma casa dominante a partir dos dados planetários disponíveis.",

    planetsPresent: "Planetas presentes:",
    signatureInsight: "Olhar Assinatura",

    planetFallback: "Planeta",

    sun: "Sol",
    moon: "Lua",
    mercury: "Mercúrio",
    venus: "Vênus",
    mars: "Marte",
    jupiter: "Júpiter",
    saturn: "Saturno",
    uranus: "Urano",
    neptune: "Netuno",
    pluto: "Plutão",
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

export function localizeSignatureHouses(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const lang =
    locale as NonFrenchLocale;

  const labels =
    LABELS[lang];

  let out =
    source.replace(/\r\n/g, "\n");

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
        "Domaines de vie",
        labels.kicker,
      ],
      [
        "Vos douze maisons astrologiques",
        labels.title,
      ],
      [
        "Votre maison la plus occupée",
        labels.dominantHouse,
      ],
      [
        "Non déterminée",
        labels.undetermined,
      ],
      [
        "Aucune maison dominante n’a pu être déterminée à partir des données planétaires disponibles.",
        labels.noDominant,
      ],
      [
        "Planètes présentes :",
        labels.planetsPresent,
      ],
      [
        "Regard Signature",
        labels.signatureInsight,
      ],
      [
        "Aucune planète principale",
        labels.noMainPlanet,
      ],
      [
        "Planète",
        labels.planetFallback,
      ],
    ];

  for (
    const [from, to] of staticPairs
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
  | MAIN_PLANETS reste en anglais.
  | On traduit uniquement PLANET_NAMES_FR.
  |--------------------------------------------------------------------------
  */

  const planetNames = {
    Sun: labels.sun,
    Moon: labels.moon,
    Mercury: labels.mercury,
    Venus: labels.venus,
    Mars: labels.mars,
    Jupiter: labels.jupiter,
    Saturn: labels.saturn,
    Uranus: labels.uranus,
    Neptune: labels.neptune,
    Pluto: labels.pluto,
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
  | Maison {house}
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /Maison \{house\}/g,
      `${labels.house} {house}`,
    );

  /*
  |--------------------------------------------------------------------------
  | Maison dominante dynamique
  |--------------------------------------------------------------------------
  |
  | Maison ${dominantHouse} — ...
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /`Maison \$\{dominantHouse\} — \$\{HOUSE_TITLES\[dominantHouse\]\}`/g,
      `\`${labels.house} \${dominantHouse} — \${HOUSE_TITLES[dominantHouse]}\``,
    );

  /*
  |--------------------------------------------------------------------------
  | Nombre de planètes principales
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /"1 planète principale"/g,
      JSON.stringify(
        labels.oneMainPlanet,
      ),
    );

  out =
    out.replace(
      /`\$\{housePlanets\.length\} planètes principales`/g,
      `\`\${housePlanets.length} ${labels.mainPlanets}\``,
    );

  return out;
}
