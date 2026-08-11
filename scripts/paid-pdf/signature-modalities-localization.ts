import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type ModalityLabels = {
  analysis: string;
  kicker: string;
  title: string;

  cardinal: string;
  fixed: string;
  mutable: string;

  planetSingular: string;
  planetPlural: string;

  dominantDynamics: string;
  undetermined: string;

  naturalStrength: string;
  balanceToDevelop: string;

  noDominant: string;
};

const LABELS: Record<
  NonFrenchLocale,
  ModalityLabels
> = {
  en: {
    analysis: "Signature Analysis",
    kicker: "Inner rhythm",
    title: "Astrological modalities",

    cardinal: "Cardinal",
    fixed: "Fixed",
    mutable: "Mutable",

    planetSingular: "planet",
    planetPlural: "planets",

    dominantDynamics:
      "Your dominant dynamic",

    undetermined:
      "Undetermined",

    naturalStrength:
      "Your natural strength",

    balanceToDevelop:
      "Your balance to develop",

    noDominant:
      "No dominant modality could be determined from the available data.",
  },

  es: {
    analysis: "Análisis Firma",
    kicker: "Ritmo interior",
    title: "Las modalidades astrológicas",

    cardinal: "Cardinal",
    fixed: "Fija",
    mutable: "Mutable",

    planetSingular: "planeta",
    planetPlural: "planetas",

    dominantDynamics:
      "Tu dinámica dominante",

    undetermined:
      "No determinada",

    naturalStrength:
      "Tu fuerza natural",

    balanceToDevelop:
      "Tu equilibrio a desarrollar",

    noDominant:
      "No se pudo determinar ninguna modalidad dominante con los datos disponibles.",
  },

  de: {
    analysis: "Signatur-Analyse",
    kicker: "Innerer Rhythmus",
    title: "Die astrologischen Modalitäten",

    cardinal: "Kardinal",
    fixed: "Fix",
    mutable: "Veränderlich",

    planetSingular: "Planet",
    planetPlural: "Planeten",

    dominantDynamics:
      "Ihre dominante Dynamik",

    undetermined:
      "Nicht bestimmt",

    naturalStrength:
      "Ihre natürliche Stärke",

    balanceToDevelop:
      "Ihr zu entwickelndes Gleichgewicht",

    noDominant:
      "Mit den verfügbaren Daten konnte keine dominante Modalität bestimmt werden.",
  },

  it: {
    analysis: "Analisi Firma",
    kicker: "Ritmo interiore",
    title: "Le modalità astrologiche",

    cardinal: "Cardinale",
    fixed: "Fissa",
    mutable: "Mutevole",

    planetSingular: "pianeta",
    planetPlural: "pianeti",

    dominantDynamics:
      "La tua dinamica dominante",

    undetermined:
      "Non determinata",

    naturalStrength:
      "La tua forza naturale",

    balanceToDevelop:
      "Il tuo equilibrio da sviluppare",

    noDominant:
      "Non è stato possibile determinare una modalità dominante con i dati disponibili.",
  },

  pt: {
    analysis: "Análise Assinatura",
    kicker: "Ritmo interior",
    title: "As modalidades astrológicas",

    cardinal: "Cardinal",
    fixed: "Fixa",
    mutable: "Mutável",

    planetSingular: "planeta",
    planetPlural: "planetas",

    dominantDynamics:
      "Sua dinâmica dominante",

    undetermined:
      "Não determinada",

    naturalStrength:
      "Sua força natural",

    balanceToDevelop:
      "Seu equilíbrio a desenvolver",

    noDominant:
      "Não foi possível determinar uma modalidade dominante com os dados disponíveis.",
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

export function localizeSignatureModalities(
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
        "Rythme intérieur",
        labels.kicker,
      ],
      [
        "Les modalités astrologiques",
        labels.title,
      ],
      [
        "Votre dynamique dominante",
        labels.dominantDynamics,
      ],
      [
        "Non déterminée",
        labels.undetermined,
      ],
      [
        "Votre force naturelle",
        labels.naturalStrength,
      ],
      [
        "Votre équilibre à développer",
        labels.balanceToDevelop,
      ],
      [
        "Aucune modalité dominante n’a pu être déterminée avec les données disponibles.",
        labels.noDominant,
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
  | Noms visibles des modalités
  |--------------------------------------------------------------------------
  |
  | Les valeurs internes Cardinal / Fixe / Mutable restent en français
  | afin de ne pas modifier les calculs.
  |--------------------------------------------------------------------------
  */

  const displayModalityMap =
    JSON.stringify({
      Cardinal:
        labels.cardinal,
      Fixe:
        labels.fixed,
      Mutable:
        labels.mutable,
    });

  if (
    !out.includes(
      "function getModalityDisplayName(",
    )
  ) {
    const marker =
      "function getModalityIcon(";

    const index =
      out.indexOf(marker);

    if (index >= 0) {
      const helper = `
function getModalityDisplayName(
  modality: ModalityName
): string {
  const names: Record<
    ModalityName,
    string
  > = ${displayModalityMap};

  return names[modality] || modality;
}

`;

      out =
        out.slice(0, index) +
        helper +
        out.slice(index);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Cartes Cardinal / Fixe / Mutable
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /\{modality\}/g,
      "{getModalityDisplayName(modality)}",
    );

  /*
  |--------------------------------------------------------------------------
  | Modalité dominante
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /\? dominantModality\s*:\s*"Non déterminée"/g,
      `? getModalityDisplayName(dominantModality)
              : ${JSON.stringify(
                labels.undetermined,
              )}`,
    );

  /*
  |--------------------------------------------------------------------------
  | Nombre de planètes
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /\{value === 1\s*\?\s*"1 planète"\s*:\s*`\$\{value\} planètes`\}/g,
      `{value === 1
                    ? \`1 ${labels.planetSingular}\`
                    : \`\${value} ${labels.planetPlural}\`}`,
    );

  return out;
}
