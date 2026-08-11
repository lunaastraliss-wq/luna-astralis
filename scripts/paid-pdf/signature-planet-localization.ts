import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<
    PaidPdfLocale,
    "fr"
  >;

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

const LABELS: Record<
  NonFrenchLocale,
  PlanetLabels
> = {
  en: {
    analysis:
      "Signature Analysis",
    natalPlanet:
      "Natal planet",
    inNatalChart:
      "In your natal chart",
    essentialEnergy:
      "Your essential energy",
    houseInfluence:
      "The influence of the house",
    strengths:
      "Your natural strengths",
    challenges:
      "Your points of caution",
    evolution:
      "Your potential for growth",
    quote:
      "Signature Quote",
    connector:
      "in",
    fallbackMeaning:
      "Personal astrological energy",
    fallbackEnergy:
      "This position reveals an important dimension of your personality and your growth.",
    fallbackHouseUnavailable:
      "The astrological house of this planet is not available in the chart data. The interpretation therefore relies mainly on the planet and its sign.",
    fallbackHouse:
      "The astrological house indicates the area of life in which this energy seeks to express itself.",
  },

  es: {
    analysis:
      "Análisis Firma",
    natalPlanet:
      "Planeta natal",
    inNatalChart:
      "En tu carta natal",
    essentialEnergy:
      "Tu energía esencial",
    houseInfluence:
      "La influencia de la casa",
    strengths:
      "Tus fortalezas naturales",
    challenges:
      "Tus puntos de atención",
    evolution:
      "Tu potencial de evolución",
    quote:
      "Cita Firma",
    connector:
      "en",
    fallbackMeaning:
      "Energía astrológica personal",
    fallbackEnergy:
      "Esta posición revela una dimensión importante de tu personalidad y de tu evolución.",
    fallbackHouseUnavailable:
      "La casa astrológica de este planeta no está disponible en los datos de la carta. Por lo tanto, la interpretación se basa principalmente en el planeta y su signo.",
    fallbackHouse:
      "La casa astrológica indica el ámbito de vida en el que esta energía busca expresarse.",
  },

  de: {
    analysis:
      "Signatur-Analyse",
    natalPlanet:
      "Geburtsplanet",
    inNatalChart:
      "In Ihrem Geburtshoroskop",
    essentialEnergy:
      "Ihre wesentliche Energie",
    houseInfluence:
      "Der Einfluss des Hauses",
    strengths:
      "Ihre natürlichen Stärken",
    challenges:
      "Ihre Aufmerksamkeitspunkte",
    evolution:
      "Ihr Entwicklungspotenzial",
    quote:
      "Signatur-Zitat",
    connector:
      "im",
    fallbackMeaning:
      "Persönliche astrologische Energie",
    fallbackEnergy:
      "Diese Position zeigt eine wichtige Dimension Ihrer Persönlichkeit und Ihrer Entwicklung.",
    fallbackHouseUnavailable:
      "Das astrologische Haus dieses Planeten ist in den Horoskopdaten nicht verfügbar. Die Deutung stützt sich daher hauptsächlich auf den Planeten und sein Zeichen.",
    fallbackHouse:
      "Das astrologische Haus zeigt den Lebensbereich, in dem sich diese Energie ausdrücken möchte.",
  },

  it: {
    analysis:
      "Analisi Firma",
    natalPlanet:
      "Pianeta natale",
    inNatalChart:
      "Nel tuo tema natale",
    essentialEnergy:
      "La tua energia essenziale",
    houseInfluence:
      "L’influenza della casa",
    strengths:
      "I tuoi punti di forza naturali",
    challenges:
      "I tuoi punti di attenzione",
    evolution:
      "Il tuo potenziale di evoluzione",
    quote:
      "Citazione Firma",
    connector:
      "in",
    fallbackMeaning:
      "Energia astrologica personale",
    fallbackEnergy:
      "Questa posizione rivela una dimensione importante della tua personalità e della tua evoluzione.",
    fallbackHouseUnavailable:
      "La casa astrologica di questo pianeta non è disponibile nei dati del tema. L’interpretazione si basa quindi principalmente sul pianeta e sul suo segno.",
    fallbackHouse:
      "La casa astrologica indica l’ambito della vita in cui questa energia cerca di esprimersi.",
  },

  pt: {
    analysis:
      "Análise Assinatura",
    natalPlanet:
      "Planeta natal",
    inNatalChart:
      "No seu mapa natal",
    essentialEnergy:
      "Sua energia essencial",
    houseInfluence:
      "A influência da casa",
    strengths:
      "Suas forças naturais",
    challenges:
      "Seus pontos de atenção",
    evolution:
      "Seu potencial de evolução",
    quote:
      "Citação Assinatura",
    connector:
      "em",
    fallbackMeaning:
      "Energia astrológica pessoal",
    fallbackEnergy:
      "Esta posição revela uma dimensão importante da sua personalidade e da sua evolução.",
    fallbackHouseUnavailable:
      "A casa astrológica deste planeta não está disponível nos dados do mapa. A interpretação se baseia, portanto, principalmente no planeta e no seu signo.",
    fallbackHouse:
      "A casa astrológica indica a área da vida em que essa energia busca se expressar.",
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

export function localizeSignaturePlanet(
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
  Array<
    [string, string]
  > = [
    [
      "Analyse Signature",
      labels.analysis,
    ],
    [
      "Planète natale",
      labels.natalPlanet,
    ],
    [
      "Dans votre thème natal",
      labels.inNatalChart,
    ],
    [
      "Votre énergie essentielle",
      labels.essentialEnergy,
    ],
    [
      "L’influence de la maison",
      labels.houseInfluence,
    ],
    [
      "Vos forces naturelles",
      labels.strengths,
    ],
    [
      "Vos points de vigilance",
      labels.challenges,
    ],
    [
      "Votre potentiel d’évolution",
      labels.evolution,
    ],
    [
      "Citation Signature",
      labels.quote,
    ],
    [
      "Énergie astrologique personnelle",
      labels.fallbackMeaning,
    ],
    [
      "Cette position révèle une dimension importante de votre personnalité et de votre évolution.",
      labels.fallbackEnergy,
    ],
    [
      "La maison astrologique indique le domaine de vie dans lequel cette énergie cherche à s’exprimer.",
      labels.fallbackHouse,
    ],
  ];

  for (
    const [
      from,
      to,
    ] of staticPairs
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
  | Fallback maison absent
  |--------------------------------------------------------------------------
  |
  | Le texte français est construit avec plusieurs chaînes concaténées
  | dans getHouseText(). On remplace donc le bloc complet.
  |
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /"La maison astrologique de cette planète n’est pas disponible "\s*\+\s*"dans les données du thème\. L’interprétation repose donc "\s*\+\s*"principalement sur la planète et son signe\."/g,
      JSON.stringify(
        labels.fallbackHouseUnavailable,
      ),
    );

  /*
  |--------------------------------------------------------------------------
  | Connecteur planète + signe
  |--------------------------------------------------------------------------
  |
  | Source :
  |
  | {planetName} en{" "}
  | {translatedSign}
  |
  | Exemples :
  | Sun in Scorpio
  | Sonne im Skorpion
  | Sol em Escorpião
  |
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /(\{planetName\})\s*en\s*(\{\s*["']\s*["']\s*\})\s*(<Text[\s\S]*?>[\s\S]*?\{translatedSign\}[\s\S]*?<\/Text>)/g,
      `$1 ${labels.connector}$2$3`,
    );

  /*
  |--------------------------------------------------------------------------
  | Variante plus simple
  |--------------------------------------------------------------------------
  |
  | Permet également de couvrir une version du composant où
  | translatedSign n’est plus entouré d’un Text imbriqué.
  |
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /(\{planetName\})\s*en\s*(\{\s*["']\s*["']\s*\})\s*(\{translatedSign\})/g,
      `$1 ${labels.connector}$2$3`,
    );

  return out;
}
