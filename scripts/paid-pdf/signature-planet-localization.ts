import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type PlanetLabels = {
  analysis: string;
  natalPlanet: string;
  inNatalChart: string;
  essentialEnergy: string;
  houseInfluence: string;
  strengths: string;
  challenges: string;
  evolution: string;
  quote: string;
  connector: string;
  fallbackMeaning: string;
  fallbackEnergy: string;
  fallbackHouseUnavailable: string;
  fallbackHouse: string;
};

type PlanetDisplayCopy = {
  planets: Record<string, string>;
  signs: Record<string, string>;
};

const LABELS: Record<
  NonFrenchLocale,
  PlanetLabels
> = {
  en: {
    analysis: "Signature Analysis",
    natalPlanet: "Natal planet",
    inNatalChart: "In your natal chart",
    essentialEnergy: "Your essential energy",
    houseInfluence: "The influence of the house",
    strengths: "Your natural strengths",
    challenges: "Your points of caution",
    evolution: "Your potential for growth",
    quote: "Signature Quote",
    connector: "in",
    fallbackMeaning: "Personal astrological energy",
    fallbackEnergy:
      "This position reveals an important dimension of your personality and your growth.",
    fallbackHouseUnavailable:
      "The astrological house of this planet is not available in the chart data. The interpretation therefore relies mainly on the planet and its sign.",
    fallbackHouse:
      "The astrological house indicates the area of life in which this energy seeks to express itself.",
  },

  es: {
    analysis: "Análisis Firma",
    natalPlanet: "Planeta natal",
    inNatalChart: "En tu carta natal",
    essentialEnergy: "Tu energía esencial",
    houseInfluence: "La influencia de la casa",
    strengths: "Tus fortalezas naturales",
    challenges: "Tus puntos de atención",
    evolution: "Tu potencial de evolución",
    quote: "Cita Firma",
    connector: "en",
    fallbackMeaning: "Energía astrológica personal",
    fallbackEnergy:
      "Esta posición revela una dimensión importante de tu personalidad y de tu evolución.",
    fallbackHouseUnavailable:
      "La casa astrológica de este planeta no está disponible en los datos de la carta. Por lo tanto, la interpretación se basa principalmente en el planeta y su signo.",
    fallbackHouse:
      "La casa astrológica indica el ámbito de vida en el que esta energía busca expresarse.",
  },

  de: {
    analysis: "Signatur-Analyse",
    natalPlanet: "Geburtsplanet",
    inNatalChart: "In Ihrem Geburtshoroskop",
    essentialEnergy: "Ihre wesentliche Energie",
    houseInfluence: "Der Einfluss des Hauses",
    strengths: "Ihre natürlichen Stärken",
    challenges: "Ihre Aufmerksamkeitspunkte",
    evolution: "Ihr Entwicklungspotenzial",
    quote: "Signatur-Zitat",
    connector: "im",
    fallbackMeaning: "Persönliche astrologische Energie",
    fallbackEnergy:
      "Diese Position zeigt eine wichtige Dimension Ihrer Persönlichkeit und Ihrer Entwicklung.",
    fallbackHouseUnavailable:
      "Das astrologische Haus dieses Planeten ist in den Horoskopdaten nicht verfügbar. Die Deutung stützt sich daher hauptsächlich auf den Planeten und sein Zeichen.",
    fallbackHouse:
      "Das astrologische Haus zeigt den Lebensbereich, in dem sich diese Energie ausdrücken möchte.",
  },

  it: {
    analysis: "Analisi Firma",
    natalPlanet: "Pianeta natale",
    inNatalChart: "Nel tuo tema natale",
    essentialEnergy: "La tua energia essenziale",
    houseInfluence: "L’influenza della casa",
    strengths: "I tuoi punti di forza naturali",
    challenges: "I tuoi punti di attenzione",
    evolution: "Il tuo potenziale di evoluzione",
    quote: "Citazione Firma",
    connector: "in",
    fallbackMeaning: "Energia astrologica personale",
    fallbackEnergy:
      "Questa posizione rivela una dimensione importante della tua personalità e della tua evoluzione.",
    fallbackHouseUnavailable:
      "La casa astrologica di questo pianeta non è disponibile nei dati del tema. L’interpretazione si basa quindi principalmente sul pianeta e sul suo segno.",
    fallbackHouse:
      "La casa astrologica indica l’ambito della vita in cui questa energia cerca di esprimersi.",
  },

  pt: {
    analysis: "Análise Assinatura",
    natalPlanet: "Planeta natal",
    inNatalChart: "No seu mapa natal",
    essentialEnergy: "Sua energia essencial",
    houseInfluence: "A influência da casa",
    strengths: "Suas forças naturais",
    challenges: "Seus pontos de atenção",
    evolution: "Seu potencial de evolução",
    quote: "Citação Assinatura",
    connector: "em",
    fallbackMeaning: "Energia astrológica pessoal",
    fallbackEnergy:
      "Esta posição revela uma dimensão importante da sua personalidade e da sua evolução.",
    fallbackHouseUnavailable:
      "A casa astrológica deste planeta não está disponível nos dados do mapa. A interpretação se baseia, portanto, principalmente no planeta e no seu signo.",
    fallbackHouse:
      "A casa astrológica indica a área da vida em que essa energia busca se expressar.",
  },
};

const DISPLAY: Record<
  NonFrenchLocale,
  PlanetDisplayCopy
> = {
  en: {
    planets: {
      Sun: "Sun",
      Moon: "Moon",
      Mercury: "Mercury",
      Venus: "Venus",
      Mars: "Mars",
      Jupiter: "Jupiter",
      Saturn: "Saturn",
      Uranus: "Uranus",
      Neptune: "Neptune",
      Pluto: "Pluto",
    },
    signs: {
      Aries: "Aries",
      Taurus: "Taurus",
      Gemini: "Gemini",
      Cancer: "Cancer",
      Leo: "Leo",
      Virgo: "Virgo",
      Libra: "Libra",
      Scorpio: "Scorpio",
      Sagittarius: "Sagittarius",
      Capricorn: "Capricorn",
      Aquarius: "Aquarius",
      Pisces: "Pisces",
    },
  },

  es: {
    planets: {
      Sun: "Sol",
      Moon: "Luna",
      Mercury: "Mercurio",
      Venus: "Venus",
      Mars: "Marte",
      Jupiter: "Júpiter",
      Saturn: "Saturno",
      Uranus: "Urano",
      Neptune: "Neptuno",
      Pluto: "Plutón",
    },
    signs: {
      Aries: "Aries",
      Taurus: "Tauro",
      Gemini: "Géminis",
      Cancer: "Cáncer",
      Leo: "Leo",
      Virgo: "Virgo",
      Libra: "Libra",
      Scorpio: "Escorpio",
      Sagittarius: "Sagitario",
      Capricorn: "Capricornio",
      Aquarius: "Acuario",
      Pisces: "Piscis",
    },
  },

  de: {
    planets: {
      Sun: "Sonne",
      Moon: "Mond",
      Mercury: "Merkur",
      Venus: "Venus",
      Mars: "Mars",
      Jupiter: "Jupiter",
      Saturn: "Saturn",
      Uranus: "Uranus",
      Neptune: "Neptun",
      Pluto: "Pluto",
    },
    signs: {
      Aries: "Widder",
      Taurus: "Stier",
      Gemini: "Zwillinge",
      Cancer: "Krebs",
      Leo: "Löwe",
      Virgo: "Jungfrau",
      Libra: "Waage",
      Scorpio: "Skorpion",
      Sagittarius: "Schütze",
      Capricorn: "Steinbock",
      Aquarius: "Wassermann",
      Pisces: "Fische",
    },
  },

  it: {
    planets: {
      Sun: "Sole",
      Moon: "Luna",
      Mercury: "Mercurio",
      Venus: "Venere",
      Mars: "Marte",
      Jupiter: "Giove",
      Saturn: "Saturno",
      Uranus: "Urano",
      Neptune: "Nettuno",
      Pluto: "Plutone",
    },
    signs: {
      Aries: "Ariete",
      Taurus: "Toro",
      Gemini: "Gemelli",
      Cancer: "Cancro",
      Leo: "Leone",
      Virgo: "Vergine",
      Libra: "Bilancia",
      Scorpio: "Scorpione",
      Sagittarius: "Sagittario",
      Capricorn: "Capricorno",
      Aquarius: "Acquario",
      Pisces: "Pesci",
    },
  },

  pt: {
    planets: {
      Sun: "Sol",
      Moon: "Lua",
      Mercury: "Mercúrio",
      Venus: "Vênus",
      Mars: "Marte",
      Jupiter: "Júpiter",
      Saturn: "Saturno",
      Uranus: "Urano",
      Neptune: "Netuno",
      Pluto: "Plutão",
    },
    signs: {
      Aries: "Áries",
      Taurus: "Touro",
      Gemini: "Gêmeos",
      Cancer: "Câncer",
      Leo: "Leão",
      Virgo: "Virgem",
      Libra: "Libra",
      Scorpio: "Escorpião",
      Sagittarius: "Sagitário",
      Capricorn: "Capricórnio",
      Aquarius: "Aquário",
      Pisces: "Peixes",
    },
  },
};

function replaceAll(
  source: string,
  from: string,
  to: string,
): string {
  return source.split(from).join(to);
}

function replaceVisibleLabels(
  source: string,
  locale: NonFrenchLocale,
): string {
  const labels = LABELS[locale];

  const pairs: Array<[string, string]> = [
    ["Analyse Signature", labels.analysis],
    ["Planète natale", labels.natalPlanet],
    ["Dans votre thème natal", labels.inNatalChart],
    ["Votre énergie essentielle", labels.essentialEnergy],
    ["L’influence de la maison", labels.houseInfluence],
    ["Vos forces naturelles", labels.strengths],
    ["Vos points de vigilance", labels.challenges],
    ["Votre potentiel d’évolution", labels.evolution],
    ["Citation Signature", labels.quote],
    ["Énergie astrologique personnelle", labels.fallbackMeaning],
    [
      "Cette position révèle une dimension importante de votre personnalité et de votre évolution.",
      labels.fallbackEnergy,
    ],
    [
      "La maison astrologique indique le domaine de vie dans lequel cette énergie cherche à s’exprimer.",
      labels.fallbackHouse,
    ],
  ];

  let output = source;

  for (const [from, to] of pairs) {
    output = replaceAll(output, from, to);
  }

  output = output.replace(
    /"La maison astrologique de cette planète n’est pas disponible "\s*\+\s*"dans les données du thème\. L’interprétation repose donc "\s*\+\s*"principalement sur la planète et son signe\."/g,
    JSON.stringify(labels.fallbackHouseUnavailable),
  );

  return output;
}

function injectDisplayMaps(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "const SIGNATURE_PLANET_DISPLAY_NAMES",
    )
  ) {
    return source;
  }

  const marker =
    "const styles = StyleSheet.create({";

  if (!source.includes(marker)) {
    return source;
  }

  const display = DISPLAY[locale];

  const helper = `
const SIGNATURE_PLANET_DISPLAY_NAMES: Record<
  string,
  string
> = ${JSON.stringify(
    display.planets,
    null,
    2,
  )};

const SIGNATURE_PLANET_SIGN_NAMES: Record<
  string,
  string
> = ${JSON.stringify(
    display.signs,
    null,
    2,
  )};

`;

  return source.replace(
    marker,
    `${helper}${marker}`,
  );
}

function localizePlanetAndSignValues(
  source: string,
): string {
  let output = source;

  /*
  |--------------------------------------------------------------------------
  | Planet name
  |--------------------------------------------------------------------------
  |
  | Original:
  | const planetName = PLANET_FR[planet] || planet;
  |
  | We keep PLANET_FR untouched for internal/source compatibility and only
  | change the visible value in the generated non-French component.
  |--------------------------------------------------------------------------
  */

  output = output.replace(
    /const planetName\s*=\s*PLANET_FR\[planet\]\s*\|\|\s*planet;/g,
    `const planetName =
    SIGNATURE_PLANET_DISPLAY_NAMES[planet] ||
    planet;`,
  );

  /*
  |--------------------------------------------------------------------------
  | Sign name
  |--------------------------------------------------------------------------
  |
  | signKey is already the English canonical key returned by
  | getEnglishSignKey(). We use that stable key for visible localization.
  | This also fixes positionLine because positionLine receives translatedSign.
  |--------------------------------------------------------------------------
  */

  output = output.replace(
    /const translatedSign\s*=\s*translateSign\(\s*rawSign\s*\);/g,
    `const translatedSign =
    SIGNATURE_PLANET_SIGN_NAMES[signKey] ||
    signKey ||
    translateSign(rawSign);`,
  );

  return output;
}

function localizePlanetSignConnector(
  source: string,
  locale: NonFrenchLocale,
): string {
  const connector =
    LABELS[locale].connector;

  let output = source;

  output = output.replace(
    /\{planetName\}\s*en\{" "\}/g,
    `{planetName} ${connector}{" "}`,
  );

  output = output.replace(
    /\{planetName\}\s*en\s*\{" "\}/g,
    `{planetName} ${connector}{" "}`,
  );

  return output;
}

export function localizeSignaturePlanet(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const safeLocale =
    locale as NonFrenchLocale;

  let output =
    source.replace(/\r\n/g, "\n");

  output = replaceVisibleLabels(
    output,
    safeLocale,
  );

  output = injectDisplayMaps(
    output,
    safeLocale,
  );

  output = localizePlanetAndSignValues(
    output,
  );

  output = localizePlanetSignConnector(
    output,
    safeLocale,
  );

  return output;
}
