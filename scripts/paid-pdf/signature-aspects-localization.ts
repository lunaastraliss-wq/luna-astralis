import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<
    PaidPdfLocale,
    "fr"
  >;

type AspectLabels = {
  analysis: string;
  synthesisBadge: string;
  guideBadge: string;

  title: string;
  titleContinuation: string;

  analysisUnavailable: string;

  part: string;
  of: string;

  orb: string;

  meaning: string;
  manifestation: string;
  evolutionKey: string;

  synthesisTitle: string;

  detectedAspects: string;
  harmoniousAspects: string;
  dynamicAspects: string;
  conjunctions: string;

  globalDynamics: string;
  mainAttention: string;
  togetherReveal: string;

  integrateTitle: string;
  useAnalysis: string;
  aspectsTeach: string;
  currentPriority: string;
  threeMarkers: string;

  veryPowerful: string;
  powerful: string;
  moderate: string;
  subtle: string;

  conjunction: string;
  sextile: string;
  square: string;
  trine: string;
  opposition: string;

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
  AspectLabels
> = {
  en: {
    analysis:
      "Signature Analysis",

    synthesisBadge:
      "Signature Synthesis",

    guideBadge:
      "Signature Guide",

    title:
      "Your planetary aspects",

    titleContinuation:
      "Your planetary aspects — continued",

    analysisUnavailable:
      "Analysis unavailable",

    part:
      "Part",

    of:
      "of",

    orb:
      "Orb",

    meaning:
      "Meaning of the aspect",

    manifestation:
      "Manifestation in your life",

    evolutionKey:
      "Your key to growth",

    synthesisTitle:
      "Synthesis of your aspects",

    detectedAspects:
      "Aspects detected",

    harmoniousAspects:
      "Harmonious aspects",

    dynamicAspects:
      "Dynamic aspects",

    conjunctions:
      "Conjunctions",

    globalDynamics:
      "Your overall dynamics",

    mainAttention:
      "Your main point of attention",

    togetherReveal:
      "What your planetary aspects reveal together",

    integrateTitle:
      "How to integrate your aspects",

    useAnalysis:
      "How to use this analysis",

    aspectsTeach:
      "What your aspects teach you",

    currentPriority:
      "Your current priority",

    threeMarkers:
      "Three points to remember",

    veryPowerful:
      "Very powerful",

    powerful:
      "Powerful",

    moderate:
      "Moderate",

    subtle:
      "Subtle",

    conjunction:
      "Conjunction",

    sextile:
      "Sextile",

    square:
      "Square",

    trine:
      "Trine",

    opposition:
      "Opposition",

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
  },

  es: {
    analysis:
      "Análisis Firma",

    synthesisBadge:
      "Síntesis Firma",

    guideBadge:
      "Guía Firma",

    title:
      "Tus aspectos planetarios",

    titleContinuation:
      "Tus aspectos planetarios — continuación",

    analysisUnavailable:
      "Análisis no disponible",

    part:
      "Parte",

    of:
      "de",

    orb:
      "Orbe",

    meaning:
      "Significado del aspecto",

    manifestation:
      "Manifestación en tu vida",

    evolutionKey:
      "Tu clave de evolución",

    synthesisTitle:
      "Síntesis de tus aspectos",

    detectedAspects:
      "Aspectos detectados",

    harmoniousAspects:
      "Aspectos armoniosos",

    dynamicAspects:
      "Aspectos dinámicos",

    conjunctions:
      "Conjunciones",

    globalDynamics:
      "Tu dinámica general",

    mainAttention:
      "Tu principal punto de atención",

    togetherReveal:
      "Lo que revelan juntos tus aspectos planetarios",

    integrateTitle:
      "Cómo integrar tus aspectos",

    useAnalysis:
      "Cómo utilizar este análisis",

    aspectsTeach:
      "Lo que tus aspectos te enseñan",

    currentPriority:
      "Tu prioridad actual",

    threeMarkers:
      "Tres puntos para recordar",

    veryPowerful:
      "Muy poderoso",

    powerful:
      "Poderoso",

    moderate:
      "Moderado",

    subtle:
      "Sutil",

    conjunction:
      "Conjunción",

    sextile:
      "Sextil",

    square:
      "Cuadratura",

    trine:
      "Trígono",

    opposition:
      "Oposición",

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
  },

  de: {
    analysis:
      "Signatur-Analyse",

    synthesisBadge:
      "Signatur-Synthese",

    guideBadge:
      "Signatur-Leitfaden",

    title:
      "Ihre planetaren Aspekte",

    titleContinuation:
      "Ihre planetaren Aspekte — Fortsetzung",

    analysisUnavailable:
      "Analyse nicht verfügbar",

    part:
      "Teil",

    of:
      "von",

    orb:
      "Orbis",

    meaning:
      "Bedeutung des Aspekts",

    manifestation:
      "Ausdruck in Ihrem Leben",

    evolutionKey:
      "Ihr Entwicklungsschlüssel",

    synthesisTitle:
      "Synthese Ihrer Aspekte",

    detectedAspects:
      "Erkannte Aspekte",

    harmoniousAspects:
      "Harmonische Aspekte",

    dynamicAspects:
      "Dynamische Aspekte",

    conjunctions:
      "Konjunktionen",

    globalDynamics:
      "Ihre Gesamtdynamik",

    mainAttention:
      "Ihr wichtigster Aufmerksamkeitspunkt",

    togetherReveal:
      "Was Ihre planetaren Aspekte gemeinsam offenbaren",

    integrateTitle:
      "Wie Sie Ihre Aspekte integrieren",

    useAnalysis:
      "So nutzen Sie diese Analyse",

    aspectsTeach:
      "Was Ihre Aspekte Sie lehren",

    currentPriority:
      "Ihre aktuelle Priorität",

    threeMarkers:
      "Drei Punkte zum Merken",

    veryPowerful:
      "Sehr stark",

    powerful:
      "Stark",

    moderate:
      "Mäßig",

    subtle:
      "Subtil",

    conjunction:
      "Konjunktion",

    sextile:
      "Sextil",

    square:
      "Quadrat",

    trine:
      "Trigon",

    opposition:
      "Opposition",

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
  },

  it: {
    analysis:
      "Analisi Firma",

    synthesisBadge:
      "Sintesi Firma",

    guideBadge:
      "Guida Firma",

    title:
      "I tuoi aspetti planetari",

    titleContinuation:
      "I tuoi aspetti planetari — continuazione",

    analysisUnavailable:
      "Analisi non disponibile",

    part:
      "Parte",

    of:
      "di",

    orb:
      "Orbite",

    meaning:
      "Significato dell’aspetto",

    manifestation:
      "Manifestazione nella tua vita",

    evolutionKey:
      "La tua chiave di evoluzione",

    synthesisTitle:
      "Sintesi dei tuoi aspetti",

    detectedAspects:
      "Aspetti rilevati",

    harmoniousAspects:
      "Aspetti armoniosi",

    dynamicAspects:
      "Aspetti dinamici",

    conjunctions:
      "Congiunzioni",

    globalDynamics:
      "La tua dinamica generale",

    mainAttention:
      "Il tuo principale punto di attenzione",

    togetherReveal:
      "Cosa rivelano insieme i tuoi aspetti planetari",

    integrateTitle:
      "Come integrare i tuoi aspetti",

    useAnalysis:
      "Come utilizzare questa analisi",

    aspectsTeach:
      "Cosa ti insegnano i tuoi aspetti",

    currentPriority:
      "La tua priorità attuale",

    threeMarkers:
      "Tre punti da ricordare",

    veryPowerful:
      "Molto potente",

    powerful:
      "Potente",

    moderate:
      "Moderato",

    subtle:
      "Sottile",

    conjunction:
      "Congiunzione",

    sextile:
      "Sestile",

    square:
      "Quadratura",

    trine:
      "Trigono",

    opposition:
      "Opposizione",

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
  },

  pt: {
    analysis:
      "Análise Assinatura",

    synthesisBadge:
      "Síntese Assinatura",

    guideBadge:
      "Guia Assinatura",

    title:
      "Seus aspectos planetários",

    titleContinuation:
      "Seus aspectos planetários — continuação",

    analysisUnavailable:
      "Análise indisponível",

    part:
      "Parte",

    of:
      "de",

    orb:
      "Orbe",

    meaning:
      "Significado do aspecto",

    manifestation:
      "Manifestação em sua vida",

    evolutionKey:
      "Sua chave de evolução",

    synthesisTitle:
      "Síntese dos seus aspectos",

    detectedAspects:
      "Aspectos detectados",

    harmoniousAspects:
      "Aspectos harmoniosos",

    dynamicAspects:
      "Aspectos dinâmicos",

    conjunctions:
      "Conjunções",

    globalDynamics:
      "Sua dinâmica geral",

    mainAttention:
      "Seu principal ponto de atenção",

    togetherReveal:
      "O que seus aspectos planetários revelam em conjunto",

    integrateTitle:
      "Como integrar seus aspectos",

    useAnalysis:
      "Como utilizar esta análise",

    aspectsTeach:
      "O que seus aspectos ensinam",

    currentPriority:
      "Sua prioridade atual",

    threeMarkers:
      "Três pontos para lembrar",

    veryPowerful:
      "Muito poderoso",

    powerful:
      "Poderoso",

    moderate:
      "Moderado",

    subtle:
      "Sutil",

    conjunction:
      "Conjunção",

    sextile:
      "Sextil",

    square:
      "Quadratura",

    trine:
      "Trígono",

    opposition:
      "Oposição",

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

export function localizeSignatureAspects(
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
        "Synthèse Signature",
        labels.synthesisBadge,
      ],

      [
        "Guide Signature",
        labels.guideBadge,
      ],

      [
        "Vos aspects planétaires — suite",
        labels.titleContinuation,
      ],

      [
        "Vos aspects planétaires",
        labels.title,
      ],

      [
        "Analyse indisponible",
        labels.analysisUnavailable,
      ],

      [
        "Orbe",
        labels.orb,
      ],

      [
        "Signification de l’aspect",
        labels.meaning,
      ],

      [
        "Manifestation dans votre vie",
        labels.manifestation,
      ],

      [
        "Votre clé d’évolution",
        labels.evolutionKey,
      ],

      [
        "Synthèse de vos aspects",
        labels.synthesisTitle,
      ],

      [
        "Aspects détectés",
        labels.detectedAspects,
      ],

      [
        "Aspects harmonieux",
        labels.harmoniousAspects,
      ],

      [
        "Aspects dynamiques",
        labels.dynamicAspects,
      ],

      [
        "Conjonctions",
        labels.conjunctions,
      ],

      [
        "Votre dynamique générale",
        labels.globalDynamics,
      ],

      [
        "Votre point d’attention principal",
        labels.mainAttention,
      ],

      [
        "Ce que révèlent ensemble vos aspects planétaires",
        labels.togetherReveal,
      ],

      [
        "Comment intégrer vos aspects",
        labels.integrateTitle,
      ],

      [
        "Comment utiliser cette analyse",
        labels.useAnalysis,
      ],

      [
        "Ce que vos aspects vous enseignent",
        labels.aspectsTeach,
      ],

      [
        "Votre priorité actuelle",
        labels.currentPriority,
      ],

      [
        "Trois repères à conserver",
        labels.threeMarkers,
      ],

      [
        "Très puissant",
        labels.veryPowerful,
      ],

      [
        "Puissant",
        labels.powerful,
      ],

      [
        "Modéré",
        labels.moderate,
      ],

      [
        "Subtil",
        labels.subtle,
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
  | MAIN_PLANETS reste en anglais pour les calculs.
  | Seul PLANET_NAMES_FR devient localisé dans la copie générée.
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
      /const PLANET_NAMES_FR:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\};/,
      `const PLANET_NAMES_FR: Record<
  string,
  string
> = ${JSON.stringify(
        planetNames,
        null,
        2,
      )};`,
    );

  /*
  |--------------------------------------------------------------------------
  | Affichage localisé des aspects
  |--------------------------------------------------------------------------
  |
  | IMPORTANT :
  |
  | Les valeurs internes :
  |
  | Conjonction
  | Sextile
  | Carré
  | Trigone
  | Opposition
  |
  | restent inchangées.
  |
  | Elles sont utilisées dans :
  | - calculateAspects()
  | - getAspectInterpretation()
  | - getAspectStatistics()
  | - getDominantAspectName()
  |
  |--------------------------------------------------------------------------
  */

  const aspectNames =
    JSON.stringify(
      {
        Conjonction:
          labels.conjunction,

        Sextile:
          labels.sextile,

        Carré:
          labels.square,

        Trigone:
          labels.trine,

        Opposition:
          labels.opposition,
      },
      null,
      2,
    );

  /*
  |--------------------------------------------------------------------------
  | Ajout du helper
  |--------------------------------------------------------------------------
  */

  if (
    !out.includes(
      "function getAspectDisplayName(",
    )
  ) {
    const marker =
      "function normalizeLongitude(";

    const index =
      out.indexOf(
        marker,
      );

    if (
      index >= 0
    ) {
      const helper = `
function getAspectDisplayName(
  aspect: AspectName
): string {
  const names: Record<
    AspectName,
    string
  > = ${aspectNames};

  return (
    names[aspect] ||
    aspect
  );
}

`;

      out =
        out.slice(
          0,
          index,
        ) +
        helper +
        out.slice(
          index,
        );
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Nom d’aspect dans les cartes
  |--------------------------------------------------------------------------
  |
  | Source :
  |
  | calculatedAspect.aspect.name
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /\{\s*calculatedAspect\s*\.aspect\.name\s*\}/g,
      "{getAspectDisplayName(calculatedAspect.aspect.name)}",
    );

  /*
  |--------------------------------------------------------------------------
  | Aspect dynamique dans getGlobalGuidance()
  |--------------------------------------------------------------------------
  |
  | Source :
  |
  | strongestAspect.aspect.name.toLowerCase()
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /strongestAspect\.aspect\.name\.toLowerCase\(\)/g,
      "getAspectDisplayName(strongestAspect.aspect.name).toLowerCase()",
    );

  /*
  |--------------------------------------------------------------------------
  | Pagination
  |--------------------------------------------------------------------------
  |
  | Partie X sur Y
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /Partie\{" "\}/g,
      `${labels.part}{" "}`,
    );

  out =
    out.replace(
      /sur\{" "\}/g,
      `${labels.of}{" "}`,
    );

  /*
  |--------------------------------------------------------------------------
  | Variante lorsque Partie / sur sont écrits sans JSX {" "}
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      />\s*Partie\{" "\}/g,
      `>
                  ${labels.part}{" "}`,
    );

  out =
    out.replace(
      /\{" "\}\s*sur\{" "\}/g,
      `{" "}
                  ${labels.of}{" "}`,
    );

  return out;
}
