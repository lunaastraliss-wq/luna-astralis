import type {
  PaidPdfLocale,
} from "./premium-localization";

type TranslationMap =
  Record<string, string>;

function escapeRegExp(
  value: string,
): string {
  return value.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );
}

function replaceLiteral(
  source: string,
  french: string,
  translated: string,
): string {
  if (
    !translated ||
    translated === french
  ) {
    return source;
  }

  const escaped =
    escapeRegExp(french);

  return source.replace(
    new RegExp(
      `(["'\`])${escaped}\\1`,
      "g",
    ),
    (
      _full,
      quote: string,
    ) =>
      `${quote}${translated}${quote}`,
  );
}

function applyTranslations(
  source: string,
  translations: TranslationMap,
): string {
  let output = source;

  /*
   * On traite les textes les plus longs
   * en premier pour éviter qu'un petit
   * remplacement modifie une grande phrase
   * avant son traitement.
   */
  const entries =
    Object.entries(
      translations,
    ).sort(
      (
        [first],
        [second],
      ) =>
        second.length -
        first.length,
    );

  for (
    const [
      french,
      translated,
    ] of entries
  ) {
    output =
      replaceLiteral(
        output,
        french,
        translated,
      );
  }

  return output;
}

const EN: TranslationMap = {
  /*
   * Nature visible des aspects.
   */
  "Fusion et intensification":
    "Fusion and intensification",

  "Possibilité et coopération":
    "Possibility and cooperation",

  "Tension et évolution":
    "Tension and evolution",

  "Fluidité et talent naturel":
    "Fluidity and natural talent",

  "Polarité et recherche d’équilibre":
    "Polarity and the search for balance",

  /*
   * Force de l'aspect.
   */
  "Très puissant":
    "Very powerful",

  "Puissant":
    "Powerful",

  "Modéré":
    "Moderate",

  "Subtil":
    "Subtle",

  /*
   * Énergies planétaires visibles.
   */
  "votre identité, votre volonté et votre besoin de rayonner":
    "your identity, your will, and your need to shine",

  "vos émotions, vos besoins affectifs et votre sécurité intérieure":
    "your emotions, your emotional needs, and your inner security",

  "votre pensée, votre communication et votre manière de comprendre":
    "your thinking, your communication, and your way of understanding",

  "votre façon d’aimer, vos valeurs et votre sensibilité relationnelle":
    "your way of loving, your values, and your relational sensitivity",

  "votre énergie d’action, votre désir et votre capacité d’affirmation":
    "your drive to act, your desire, and your capacity for self-assertion",

  "votre confiance, votre expansion et votre manière de saisir les possibilités":
    "your confidence, your expansion, and your way of seizing opportunities",

  "votre sens des responsabilités, vos limites et votre maturité":
    "your sense of responsibility, your limits, and your maturity",

  "votre besoin de liberté, votre originalité et votre rapport au changement":
    "your need for freedom, your originality, and your relationship with change",

  "votre imagination, votre intuition et votre réceptivité":
    "your imagination, your intuition, and your receptivity",

  "votre pouvoir de transformation, votre intensité et votre capacité de régénération":
    "your power of transformation, your intensity, and your capacity for regeneration",

  /*
   * Manifestations visibles.
   */
  "dans votre sentiment d’identité, vos choix personnels et votre manière d’occuper votre place":
    "in your sense of identity, your personal choices, and the way you take your place",

  "dans vos réactions émotionnelles, votre intimité et votre manière de rechercher la sécurité":
    "in your emotional reactions, your intimacy, and your way of seeking security",

  "dans vos idées, vos échanges, vos apprentissages et vos prises de décision":
    "in your ideas, your exchanges, your learning, and your decision-making",

  "dans votre vie affective, vos attirances, votre estime personnelle et vos valeurs":
    "in your emotional life, your attractions, your self-esteem, and your values",

  "dans vos initiatives, vos conflits, vos désirs et votre manière de poursuivre un objectif":
    "in your initiatives, your conflicts, your desires, and the way you pursue a goal",

  "dans votre confiance, vos ambitions, vos convictions et votre recherche d’évolution":
    "in your confidence, your ambitions, your convictions, and your search for growth",

  "dans vos responsabilités, votre discipline, vos peurs et vos constructions à long terme":
    "in your responsibilities, your discipline, your fears, and your long-term goals",

  "dans votre besoin d’indépendance, vos changements et votre manière de sortir des cadres":
    "in your need for independence, your changes, and your way of breaking free from constraints",

  "dans votre intuition, vos idéaux, votre imagination et votre sensibilité aux ambiances":
    "in your intuition, your ideals, your imagination, and your sensitivity to atmospheres",

  "dans vos périodes de transformation, vos rapports de force et votre besoin de profondeur":
    "in periods of transformation, power dynamics, and your need for depth",

  /*
   * Valeurs de repli.
   */
  "une dimension importante de votre personnalité":
    "an important dimension of your personality",

  "une autre dimension de votre personnalité":
    "another dimension of your personality",

  "dans plusieurs domaines de votre existence":
    "in several areas of your life",

  "dans votre manière de vivre les situations importantes":
    "in the way you experience important situations",

  /*
   * Titres et libellés.
   */
  "Analyse Premium":
    "Premium Analysis",

  "Vos aspects planétaires":
    "Your planetary aspects",

  "Vos aspects planétaires — suite":
    "Your planetary aspects — continued",

  "Partie":
    "Part",

  "Signification de l’aspect":
    "Meaning of the aspect",

  "Manifestation dans votre vie":
    "Manifestation in your life",

  "Votre clé d’évolution":
    "Your key to growth",

  "Synthèse Premium":
    "Premium Synthesis",

  "Synthèse de vos aspects":
    "Synthesis of your aspects",

  "Aspects analysés":
    "Analyzed aspects",

  "Aspects harmonieux":
    "Harmonious aspects",

  "Aspects dynamiques":
    "Dynamic aspects",

  "Votre dynamique générale":
    "Your overall dynamic",

  "Votre point d’attention principal":
    "Your main focus point",

  "Ce que révèlent ensemble vos aspects planétaires":
    "What your planetary aspects reveal together",

  "Comment utiliser cette analyse":
    "How to use this analysis",

  "Analyse indisponible":
    "Analysis unavailable",
};

const ES: TranslationMap = {
  "Fusion et intensification":
    "Fusión e intensificación",

  "Possibilité et coopération":
    "Posibilidad y cooperación",

  "Tension et évolution":
    "Tensión y evolución",

  "Fluidité et talent naturel":
    "Fluidez y talento natural",

  "Polarité et recherche d’équilibre":
    "Polaridad y búsqueda de equilibrio",

  "Très puissant":
    "Muy poderoso",

  "Puissant":
    "Poderoso",

  "Modéré":
    "Moderado",

  "Subtil":
    "Sutil",

  "Analyse Premium":
    "Análisis Premium",

  "Vos aspects planétaires":
    "Tus aspectos planetarios",

  "Vos aspects planétaires — suite":
    "Tus aspectos planetarios — continuación",

  "Partie":
    "Parte",

  "Signification de l’aspect":
    "Significado del aspecto",

  "Manifestation dans votre vie":
    "Manifestación en tu vida",

  "Votre clé d’évolution":
    "Tu clave de evolución",

  "Synthèse Premium":
    "Síntesis Premium",

  "Synthèse de vos aspects":
    "Síntesis de tus aspectos",

  "Aspects analysés":
    "Aspectos analizados",

  "Aspects harmonieux":
    "Aspectos armoniosos",

  "Aspects dynamiques":
    "Aspectos dinámicos",

  "Votre dynamique générale":
    "Tu dinámica general",

  "Votre point d’attention principal":
    "Tu principal punto de atención",

  "Ce que révèlent ensemble vos aspects planétaires":
    "Lo que revelan en conjunto tus aspectos planetarios",

  "Comment utiliser cette analyse":
    "Cómo utilizar este análisis",

  "Analyse indisponible":
    "Análisis no disponible",
};

const DE: TranslationMap = {
  "Fusion et intensification":
    "Verschmelzung und Intensivierung",

  "Possibilité et coopération":
    "Möglichkeit und Zusammenarbeit",

  "Tension et évolution":
    "Spannung und Entwicklung",

  "Fluidité et talent naturel":
    "Leichtigkeit und natürliches Talent",

  "Polarité et recherche d’équilibre":
    "Polarität und Suche nach Gleichgewicht",

  "Très puissant":
    "Sehr stark",

  "Puissant":
    "Stark",

  "Modéré":
    "Mäßig",

  "Subtil":
    "Subtil",

  "Analyse Premium":
    "Premium-Analyse",

  "Vos aspects planétaires":
    "Ihre planetarischen Aspekte",

  "Vos aspects planétaires — suite":
    "Ihre planetarischen Aspekte — Fortsetzung",

  "Partie":
    "Teil",

  "Signification de l’aspect":
    "Bedeutung des Aspekts",

  "Manifestation dans votre vie":
    "Auswirkung in Ihrem Leben",

  "Votre clé d’évolution":
    "Ihr Entwicklungsschlüssel",

  "Synthèse Premium":
    "Premium-Synthese",

  "Synthèse de vos aspects":
    "Synthese Ihrer Aspekte",

  "Aspects analysés":
    "Analysierte Aspekte",

  "Aspects harmonieux":
    "Harmonische Aspekte",

  "Aspects dynamiques":
    "Dynamische Aspekte",

  "Votre dynamique générale":
    "Ihre Gesamtdynamik",

  "Votre point d’attention principal":
    "Ihr wichtigster Schwerpunkt",

  "Ce que révèlent ensemble vos aspects planétaires":
    "Was Ihre planetarischen Aspekte gemeinsam zeigen",

  "Comment utiliser cette analyse":
    "So nutzen Sie diese Analyse",

  "Analyse indisponible":
    "Analyse nicht verfügbar",
};

const IT: TranslationMap = {
  "Fusion et intensification":
    "Fusione e intensificazione",

  "Possibilité et coopération":
    "Possibilità e cooperazione",

  "Tension et évolution":
    "Tensione ed evoluzione",

  "Fluidité et talent naturel":
    "Fluidità e talento naturale",

  "Polarité et recherche d’équilibre":
    "Polarità e ricerca dell’equilibrio",

  "Très puissant":
    "Molto potente",

  "Puissant":
    "Potente",

  "Modéré":
    "Moderato",

  "Subtil":
    "Sottile",

  "Analyse Premium":
    "Analisi Premium",

  "Vos aspects planétaires":
    "I tuoi aspetti planetari",

  "Vos aspects planétaires — suite":
    "I tuoi aspetti planetari — seguito",

  "Partie":
    "Parte",

  "Signification de l’aspect":
    "Significato dell’aspetto",

  "Manifestation dans votre vie":
    "Manifestazione nella tua vita",

  "Votre clé d’évolution":
    "La tua chiave di evoluzione",

  "Synthèse Premium":
    "Sintesi Premium",

  "Synthèse de vos aspects":
    "Sintesi dei tuoi aspetti",

  "Aspects analysés":
    "Aspetti analizzati",

  "Aspects harmonieux":
    "Aspetti armoniosi",

  "Aspects dynamiques":
    "Aspetti dinamici",

  "Votre dynamique générale":
    "La tua dinamica generale",

  "Votre point d’attention principal":
    "Il tuo principale punto di attenzione",

  "Ce que révèlent ensemble vos aspects planétaires":
    "Cosa rivelano insieme i tuoi aspetti planetari",

  "Comment utiliser cette analyse":
    "Come utilizzare questa analisi",

  "Analyse indisponible":
    "Analisi non disponibile",
};

const PT: TranslationMap = {
  "Fusion et intensification":
    "Fusão e intensificação",

  "Possibilité et coopération":
    "Possibilidade e cooperação",

  "Tension et évolution":
    "Tensão e evolução",

  "Fluidité et talent naturel":
    "Fluidez e talento natural",

  "Polarité et recherche d’équilibre":
    "Polaridade e busca de equilíbrio",

  "Très puissant":
    "Muito poderoso",

  "Puissant":
    "Poderoso",

  "Modéré":
    "Moderado",

  "Subtil":
    "Sutil",

  "Analyse Premium":
    "Análise Premium",

  "Vos aspects planétaires":
    "Seus aspectos planetários",

  "Vos aspects planétaires — suite":
    "Seus aspectos planetários — continuação",

  "Partie":
    "Parte",

  "Signification de l’aspect":
    "Significado do aspecto",

  "Manifestation dans votre vie":
    "Manifestação em sua vida",

  "Votre clé d’évolution":
    "Sua chave de evolução",

  "Synthèse Premium":
    "Síntese Premium",

  "Synthèse de vos aspects":
    "Síntese dos seus aspectos",

  "Aspects analysés":
    "Aspectos analisados",

  "Aspects harmonieux":
    "Aspectos harmoniosos",

  "Aspects dynamiques":
    "Aspectos dinâmicos",

  "Votre dynamique générale":
    "Sua dinâmica geral",

  "Votre point d’attention principal":
    "Seu principal ponto de atenção",

  "Ce que révèlent ensemble vos aspects planétaires":
    "O que seus aspectos planetários revelam em conjunto",

  "Comment utiliser cette analyse":
    "Como utilizar esta análise",

  "Analyse indisponible":
    "Análise indisponível",
};

const TRANSLATIONS:
Record<
  Exclude<
    PaidPdfLocale,
    "fr"
  >,
  TranslationMap
> = {
  en: EN,
  es: ES,
  de: DE,
  it: IT,
  pt: PT,
};

/*
 * IMPORTANT
 *
 * Les noms techniques suivants restent
 * volontairement intacts dans le code :
 *
 * Conjonction
 * Sextile
 * Carré
 * Trigone
 * Opposition
 *
 * Ils sont utilisés dans :
 * - AspectName
 * - ASPECTS
 * - switch
 * - comparaisons
 *
 * On traduira leur AFFICHAGE séparément.
 */

const DISPLAY_ASPECT_NAMES:
Record<
  Exclude<
    PaidPdfLocale,
    "fr"
  >,
  Record<string, string>
> = {
  en: {
    Conjonction: "Conjunction",
    Sextile: "Sextile",
    Carré: "Square",
    Trigone: "Trine",
    Opposition: "Opposition",
  },

  es: {
    Conjonction: "Conjunción",
    Sextile: "Sextil",
    Carré: "Cuadratura",
    Trigone: "Trígono",
    Opposition: "Oposición",
  },

  de: {
    Conjonction: "Konjunktion",
    Sextile: "Sextil",
    Carré: "Quadrat",
    Trigone: "Trigon",
    Opposition: "Opposition",
  },

  it: {
    Conjonction: "Congiunzione",
    Sextile: "Sestile",
    Carré: "Quadratura",
    Trigone: "Trigono",
    Opposition: "Opposizione",
  },

  pt: {
    Conjonction: "Conjunção",
    Sextile: "Sextil",
    Carré: "Quadratura",
    Trigone: "Trígono",
    Opposition: "Oposição",
  },
};

const DISPLAY_CATEGORIES:
Record<
  Exclude<
    PaidPdfLocale,
    "fr"
  >,
  Record<string, string>
> = {
  en: {
    harmonieux: "harmonious",
    dynamique: "dynamic",
    intense: "intense",
  },

  es: {
    harmonieux: "armonioso",
    dynamique: "dinámico",
    intense: "intenso",
  },

  de: {
    harmonieux: "harmonisch",
    dynamique: "dynamisch",
    intense: "intensiv",
  },

  it: {
    harmonieux: "armonioso",
    dynamique: "dinamico",
    intense: "intenso",
  },

  pt: {
    harmonieux: "harmonioso",
    dynamique: "dinâmico",
    intense: "intenso",
  },
};

function injectDisplayHelpers(
  source: string,
  locale: Exclude<
    PaidPdfLocale,
    "fr"
  >,
): string {
  if (
    source.includes(
      "function getLocalizedAspectName(",
    )
  ) {
    return source;
  }

  const names =
    JSON.stringify(
      DISPLAY_ASPECT_NAMES[
        locale
      ],
      null,
      2,
    );

  const categories =
    JSON.stringify(
      DISPLAY_CATEGORIES[
        locale
      ],
      null,
      2,
    );

  const helper = `
const LOCALIZED_ASPECT_NAMES: Record<string, string> = ${names};

const LOCALIZED_ASPECT_CATEGORIES: Record<string, string> = ${categories};

function getLocalizedAspectName(
  value: string,
): string {
  return (
    LOCALIZED_ASPECT_NAMES[value] ||
    value
  );
}

function getLocalizedAspectCategory(
  value: string,
): string {
  return (
    LOCALIZED_ASPECT_CATEGORIES[value] ||
    value
  );
}

`;

  return source.replace(
    "const styles = StyleSheet.create({",
    `${helper}const styles = StyleSheet.create({`,
  );
}

function localizeAspectDisplayValues(
  source: string,
): string {
  let output = source;

  /*
   * Seulement l'AFFICHAGE du nom.
   * Les valeurs dans ASPECTS et switch
   * restent françaises.
   */
  output = output.replace(
    /\{\s*calculatedAspect\s*\.aspect\s*\.name\s*\}/g,
    `{getLocalizedAspectName(
      calculatedAspect.aspect.name
    )}`,
  );

  /*
   * Seulement l'affichage de la catégorie.
   */
  output = output.replace(
    /\{\s*calculatedAspect\s*\.aspect\s*\.category\s*\}/g,
    `{getLocalizedAspectCategory(
      calculatedAspect.aspect.category
    )}`,
  );

  return output;
}

export function localizePremiumAspects(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let output = source;

  output =
    applyTranslations(
      output,
      TRANSLATIONS[locale],
    );

  output =
    injectDisplayHelpers(
      output,
      locale,
    );

  output =
    localizeAspectDisplayValues(
      output,
    );

  return output;
}
