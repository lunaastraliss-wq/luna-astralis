import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<
    PaidPdfLocale,
    "fr"
  >;

type ElementLabels = {
  analysis: string;
  kicker: string;
  title: string;
  lead: string;

  fire: string;
  earth: string;
  air: string;
  water: string;

  planetSingular: string;
  planetPlural: string;

  dominantEnergy: string;
  undetermined: string;

  naturalStrength: string;
  balanceToDevelop: string;

  noDominant: string;

  note: string;
};

const LABELS: Record<
  NonFrenchLocale,
  ElementLabels
> = {
  en: {
    analysis:
      "Signature Analysis",
    kicker:
      "Energy balance",
    title:
      "The four elements",
    lead:
      "The four elements reveal how your energy naturally flows. Their balance helps you better understand your spontaneous reactions, your dominant resources, and the qualities your growth invites you to develop.",

    fire:
      "Fire",
    earth:
      "Earth",
    air:
      "Air",
    water:
      "Water",

    planetSingular:
      "planet",
    planetPlural:
      "planets",

    dominantEnergy:
      "Your dominant energy",
    undetermined:
      "Undetermined",

    naturalStrength:
      "Your natural strength",
    balanceToDevelop:
      "Your balance to develop",

    noDominant:
      "No dominant element could be determined from the available data.",

    note:
      "A strongly represented element reflects an energy you express spontaneously. A less represented element is not a weakness: it often corresponds to a quality you develop through experiences, relationships, and the choices along your path.",
  },

  es: {
    analysis:
      "Análisis Firma",
    kicker:
      "Equilibrio energético",
    title:
      "Los cuatro elementos",
    lead:
      "Los cuatro elementos revelan cómo circula naturalmente tu energía. Su equilibrio permite comprender mejor tus reacciones espontáneas, tus recursos dominantes y las cualidades que tu evolución te invita a desarrollar.",

    fire:
      "Fuego",
    earth:
      "Tierra",
    air:
      "Aire",
    water:
      "Agua",

    planetSingular:
      "planeta",
    planetPlural:
      "planetas",

    dominantEnergy:
      "Tu energía dominante",
    undetermined:
      "No determinada",

    naturalStrength:
      "Tu fuerza natural",
    balanceToDevelop:
      "Tu equilibrio a desarrollar",

    noDominant:
      "No se pudo determinar ningún elemento dominante con los datos disponibles.",

    note:
      "Un elemento muy presente representa una energía que expresas espontáneamente. Un elemento menos representado no es una debilidad: suele corresponder a una cualidad que desarrollas a través de las experiencias, las relaciones y las decisiones de tu recorrido.",
  },

  de: {
    analysis:
      "Signatur-Analyse",
    kicker:
      "Energetisches Gleichgewicht",
    title:
      "Die vier Elemente",
    lead:
      "Die vier Elemente zeigen, wie Ihre Energie auf natürliche Weise fließt. Ihr Gleichgewicht hilft Ihnen, Ihre spontanen Reaktionen, Ihre dominanten Ressourcen und die Qualitäten besser zu verstehen, die Sie im Laufe Ihrer Entwicklung entfalten sollen.",

    fire:
      "Feuer",
    earth:
      "Erde",
    air:
      "Luft",
    water:
      "Wasser",

    planetSingular:
      "Planet",
    planetPlural:
      "Planeten",

    dominantEnergy:
      "Ihre dominante Energie",
    undetermined:
      "Nicht bestimmt",

    naturalStrength:
      "Ihre natürliche Stärke",
    balanceToDevelop:
      "Ihr zu entwickelndes Gleichgewicht",

    noDominant:
      "Mit den verfügbaren Daten konnte kein dominantes Element bestimmt werden.",

    note:
      "Ein stark vertretenes Element steht für eine Energie, die Sie spontan ausdrücken. Ein weniger vertretenes Element ist keine Schwäche: Es entspricht oft einer Qualität, die Sie durch Erfahrungen, Beziehungen und die Entscheidungen Ihres Lebenswegs entwickeln.",
  },

  it: {
    analysis:
      "Analisi Firma",
    kicker:
      "Equilibrio energetico",
    title:
      "I quattro elementi",
    lead:
      "I quattro elementi rivelano come la tua energia fluisce naturalmente. Il loro equilibrio aiuta a comprendere meglio le tue reazioni spontanee, le tue risorse dominanti e le qualità che la tua evoluzione ti invita a sviluppare.",

    fire:
      "Fuoco",
    earth:
      "Terra",
    air:
      "Aria",
    water:
      "Acqua",

    planetSingular:
      "pianeta",
    planetPlural:
      "pianeti",

    dominantEnergy:
      "La tua energia dominante",
    undetermined:
      "Non determinata",

    naturalStrength:
      "La tua forza naturale",
    balanceToDevelop:
      "Il tuo equilibrio da sviluppare",

    noDominant:
      "Non è stato possibile determinare alcun elemento dominante con i dati disponibili.",

    note:
      "Un elemento molto presente rappresenta un’energia che esprimi spontaneamente. Un elemento meno rappresentato non è una debolezza: spesso corrisponde a una qualità che sviluppi attraverso le esperienze, le relazioni e le scelte del tuo percorso.",
  },

  pt: {
    analysis:
      "Análise Assinatura",
    kicker:
      "Equilíbrio energético",
    title:
      "Os quatro elementos",
    lead:
      "Os quatro elementos revelam como sua energia circula naturalmente. O equilíbrio entre eles permite compreender melhor suas reações espontâneas, seus recursos dominantes e as qualidades que sua evolução convida você a desenvolver.",

    fire:
      "Fogo",
    earth:
      "Terra",
    air:
      "Ar",
    water:
      "Água",

    planetSingular:
      "planeta",
    planetPlural:
      "planetas",

    dominantEnergy:
      "Sua energia dominante",
    undetermined:
      "Não determinada",

    naturalStrength:
      "Sua força natural",
    balanceToDevelop:
      "Seu equilíbrio a desenvolver",

    noDominant:
      "Não foi possível determinar um elemento dominante com os dados disponíveis.",

    note:
      "Um elemento muito presente representa uma energia que você expressa espontaneamente. Um elemento menos representado não é uma fraqueza: geralmente corresponde a uma qualidade que você desenvolve por meio das experiências, das relações e das escolhas do seu percurso.",
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

export function localizeSignatureElements(
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
      "Équilibre énergétique",
      labels.kicker,
    ],
    [
      "Les quatre éléments",
      labels.title,
    ],
    [
      "Votre énergie dominante",
      labels.dominantEnergy,
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
      "Aucun élément dominant n’a pu être déterminé avec les données disponibles.",
      labels.noDominant,
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
  | Texte d’introduction multi-lignes
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /Les quatre éléments révèlent la manière dont votre\s+énergie circule naturellement\. Leur équilibre permet de\s+mieux comprendre vos réactions spontanées, vos\s+ressources dominantes et les qualités que votre\s+évolution vous invite à développer\./g,
      labels.lead,
    );

  /*
  |--------------------------------------------------------------------------
  | Note finale multi-lignes
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /Un élément très présent représente une énergie que vous\s+exprimez spontanément\. Un élément moins représenté n’est\s+pas une faiblesse : il correspond souvent à une qualité\s+que vous développez grâce aux expériences, aux relations\s+et aux choix de votre parcours\./g,
      labels.note,
    );

  /*
  |--------------------------------------------------------------------------
  | Noms VISIBLES des éléments
  |--------------------------------------------------------------------------
  |
  | IMPORTANT :
  | on ne remplace PAS les clés techniques Feu / Terre / Air / Eau
  | utilisées dans ELEMENTS, SIGN_ELEMENT, switch, etc.
  |
  | On transforme uniquement l’affichage :
  |
  | {element}
  |
  |--------------------------------------------------------------------------
  */

  const displayElementMap =
    JSON.stringify({
      Feu:
        labels.fire,
      Terre:
        labels.earth,
      Air:
        labels.air,
      Eau:
        labels.water,
    });

  /*
  | Ajoute une fonction d'affichage locale avant getElementIcon.
  */

  if (
    !out.includes(
      "function getElementDisplayName(",
    )
  ) {
    const marker =
      "function getElementIcon(";

    const index =
      out.indexOf(marker);

    if (
      index >= 0
    ) {
      const helper = `
function getElementDisplayName(
  element: ElementName
): string {
  const names: Record<
    ElementName,
    string
  > = ${displayElementMap};

  return names[element] || element;
}

`;

      out =
        out.slice(
          0,
          index,
        ) +
        helper +
        out.slice(index);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Carte des éléments
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /\{element\}/g,
      "{getElementDisplayName(element)}",
    );

  /*
  |--------------------------------------------------------------------------
  | Élément dominant
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /\? dominantElement\s*:\s*"Non déterminée"/g,
      `? getElementDisplayName(dominantElement)\n              : ${JSON.stringify(
        labels.undetermined,
      )}`,
    );

  /*
  |--------------------------------------------------------------------------
  | Nombre de planètes
  |--------------------------------------------------------------------------
  |
  | Source :
  |
  | value === 1
  | ? "1 planète"
  | : `${value} planètes`
  |
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
