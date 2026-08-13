import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

const TRANSLATIONS: Record<
  NonFrenchLocale,
  Record<string, string>
> = {
  en: {
    "Non précisé":
      "Not specified",

    "Carte du ciel personnalisée":
      "Personalized birth chart",

    "Naissance":
      "Birth date",

    "Heure":
      "Time",

    "Lieu":
      "Place",

    "Première personne":
      "First person",

    "Deuxième personne":
      "Second person",

    "Compatibilité Premium":
      "Premium Compatibility",

    "Rapport astrologique personnalisé":
      "Personalized Astrological Report",

    "Votre rapport de":
      "Your report of",

    "Synastrie":
      "Synastry",

    "Une exploration approfondie de la rencontre entre vos deux thèmes natals, de vos affinités naturelles, de vos défis et de votre potentiel d’évolution.":
      "An in-depth exploration of the meeting between your two birth charts, your natural affinities, your challenges, and your potential for growth.",

    "Lien émotionnel":
      "Emotional Bond",

    "Communication":
      "Communication",

    "Attirance":
      "Attraction",

    "Potentiel durable":
      "Long-Term Potential",

    "Votre voyage astrologique":
      "Your Astrological Journey",

    "Une relation ne se résume jamais à un seul signe":
      "A relationship is never just about one sign",

    "Ce rapport explore les interactions entre vos planètes, vos émotions, votre manière de communiquer, vos forces naturelles et les défis qui peuvent transformer votre relation. Chaque section vous aidera à comprendre pourquoi certaines énergies s’harmonisent spontanément, tandis que d’autres invitent à la conscience, à l’adaptation et à l’évolution commune.":
      "This report explores the interactions between your planets, your emotions, your way of communicating, your natural strengths, and the challenges that can transform your relationship. Each section will help you understand why certain energies harmonize spontaneously, while others invite awareness, adaptation, and mutual growth.",

    "Deux thèmes natals ne racontent jamais deux histoires séparées. Leur rencontre révèle la manière dont deux univers s’attirent, s’influencent et évoluent ensemble.":
      "Two birth charts never tell two separate stories. Their meeting reveals how two universes attract, influence, and evolve together.",
  },

  es: {
    "Non précisé":
      "No especificado",

    "Carte du ciel personnalisée":
      "Carta natal personalizada",

    "Naissance":
      "Nacimiento",

    "Heure":
      "Hora",

    "Lieu":
      "Lugar",

    "Première personne":
      "Primera persona",

    "Deuxième personne":
      "Segunda persona",

    "Compatibilité Premium":
      "Compatibilidad Premium",

    "Rapport astrologique personnalisé":
      "Informe astrológico personalizado",

    "Votre rapport de":
      "Su informe de",

    "Synastrie":
      "Sinastría",

    "Une exploration approfondie de la rencontre entre vos deux thèmes natals, de vos affinités naturelles, de vos défis et de votre potentiel d’évolution.":
      "Una exploración profunda del encuentro entre sus dos cartas natales, sus afinidades naturales, sus desafíos y su potencial de evolución.",

    "Lien émotionnel":
      "Vínculo emocional",

    "Communication":
      "Comunicación",

    "Attirance":
      "Atracción",

    "Potentiel durable":
      "Potencial duradero",

    "Votre voyage astrologique":
      "Su viaje astrológico",

    "Une relation ne se résume jamais à un seul signe":
      "Una relación nunca se resume en un solo signo",

    "Ce rapport explore les interactions entre vos planètes, vos émotions, votre manière de communiquer, vos forces naturelles et les défis qui peuvent transformer votre relation. Chaque section vous aidera à comprendre pourquoi certaines énergies s’harmonisent spontanément, tandis que d’autres invitent à la conscience, à l’adaptation et à l’évolution commune.":
      "Este informe explora las interacciones entre sus planetas, sus emociones, su manera de comunicarse, sus fortalezas naturales y los desafíos que pueden transformar su relación. Cada sección les ayudará a comprender por qué ciertas energías armonizan espontáneamente, mientras que otras invitan a la conciencia, la adaptación y la evolución conjunta.",

    "Deux thèmes natals ne racontent jamais deux histoires séparées. Leur rencontre révèle la manière dont deux univers s’attirent, s’influencent et évoluent ensemble.":
      "Dos cartas natales nunca cuentan dos historias separadas. Su encuentro revela cómo dos universos se atraen, se influyen y evolucionan juntos.",
  },

  de: {
    "Non précisé":
      "Nicht angegeben",

    "Carte du ciel personnalisée":
      "Persönliches Geburtshoroskop",

    "Naissance":
      "Geburtsdatum",

    "Heure":
      "Uhrzeit",

    "Lieu":
      "Ort",

    "Première personne":
      "Erste Person",

    "Deuxième personne":
      "Zweite Person",

    "Compatibilité Premium":
      "Premium-Kompatibilität",

    "Rapport astrologique personnalisé":
      "Persönlicher astrologischer Bericht",

    "Votre rapport de":
      "Ihr Bericht über",

    "Synastrie":
      "Synastrie",

    "Une exploration approfondie de la rencontre entre vos deux thèmes natals, de vos affinités naturelles, de vos défis et de votre potentiel d’évolution.":
      "Eine tiefgehende Erkundung der Verbindung zwischen Ihren beiden Geburtshoroskopen, Ihrer natürlichen Gemeinsamkeiten, Ihrer Herausforderungen und Ihres Entwicklungspotenzials.",

    "Lien émotionnel":
      "Emotionale Verbindung",

    "Communication":
      "Kommunikation",

    "Attirance":
      "Anziehung",

    "Potentiel durable":
      "Langfristiges Potenzial",

    "Votre voyage astrologique":
      "Ihre astrologische Reise",

    "Une relation ne se résume jamais à un seul signe":
      "Eine Beziehung lässt sich niemals auf ein einziges Zeichen reduzieren",

    "Ce rapport explore les interactions entre vos planètes, vos émotions, votre manière de communiquer, vos forces naturelles et les défis qui peuvent transformer votre relation. Chaque section vous aidera à comprendre pourquoi certaines énergies s’harmonisent spontanément, tandis que d’autres invitent à la conscience, à l’adaptation et à l’évolution commune.":
      "Dieser Bericht untersucht die Wechselwirkungen zwischen Ihren Planeten, Ihren Emotionen, Ihrer Art zu kommunizieren, Ihren natürlichen Stärken und den Herausforderungen, die Ihre Beziehung verändern können. Jeder Abschnitt hilft Ihnen zu verstehen, warum manche Energien sich spontan harmonisieren, während andere zu Bewusstsein, Anpassung und gemeinsamer Entwicklung einladen.",

    "Deux thèmes natals ne racontent jamais deux histoires séparées. Leur rencontre révèle la manière dont deux univers s’attirent, s’influencent et évoluent ensemble.":
      "Zwei Geburtshoroskope erzählen niemals zwei getrennte Geschichten. Ihre Begegnung zeigt, wie sich zwei Welten anziehen, beeinflussen und gemeinsam entwickeln.",
  },

  it: {
    "Non précisé":
      "Non specificato",

    "Carte du ciel personnalisée":
      "Tema natale personalizzato",

    "Naissance":
      "Data di nascita",

    "Heure":
      "Ora",

    "Lieu":
      "Luogo",

    "Première personne":
      "Prima persona",

    "Deuxième personne":
      "Seconda persona",

    "Compatibilité Premium":
      "Compatibilità Premium",

    "Rapport astrologique personnalisé":
      "Rapporto astrologico personalizzato",

    "Votre rapport de":
      "Il vostro rapporto di",

    "Synastrie":
      "Sinastria",

    "Une exploration approfondie de la rencontre entre vos deux thèmes natals, de vos affinités naturelles, de vos défis et de votre potentiel d’évolution.":
      "Un'esplorazione approfondita dell'incontro tra i vostri due temi natali, delle vostre affinità naturali, delle vostre sfide e del vostro potenziale di evoluzione.",

    "Lien émotionnel":
      "Legame emotivo",

    "Communication":
      "Comunicazione",

    "Attirance":
      "Attrazione",

    "Potentiel durable":
      "Potenziale duraturo",

    "Votre voyage astrologique":
      "Il vostro viaggio astrologico",

    "Une relation ne se résume jamais à un seul signe":
      "Una relazione non si riduce mai a un solo segno",

    "Ce rapport explore les interactions entre vos planètes, vos émotions, votre manière de communiquer, vos forces naturelles et les défis qui peuvent transformer votre relation. Chaque section vous aidera à comprendre pourquoi certaines énergies s’harmonisent spontanément, tandis que d’autres invitent à la conscience, à l’adaptation et à l’évolution commune.":
      "Questo rapporto esplora le interazioni tra i vostri pianeti, le vostre emozioni, il vostro modo di comunicare, i vostri punti di forza naturali e le sfide che possono trasformare la vostra relazione. Ogni sezione vi aiuterà a comprendere perché alcune energie si armonizzano spontaneamente, mentre altre invitano alla consapevolezza, all'adattamento e all'evoluzione comune.",

    "Deux thèmes natals ne racontent jamais deux histoires séparées. Leur rencontre révèle la manière dont deux univers s’attirent, s’influencent et évoluent ensemble.":
      "Due temi natali non raccontano mai due storie separate. Il loro incontro rivela come due universi si attraggono, si influenzano ed evolvono insieme.",
  },

  pt: {
    "Non précisé":
      "Não especificado",

    "Carte du ciel personnalisée":
      "Mapa astral personalizado",

    "Naissance":
      "Nascimento",

    "Heure":
      "Hora",

    "Lieu":
      "Local",

    "Première personne":
      "Primeira pessoa",

    "Deuxième personne":
      "Segunda pessoa",

    "Compatibilité Premium":
      "Compatibilidade Premium",

    "Rapport astrologique personnalisé":
      "Relatório astrológico personalizado",

    "Votre rapport de":
      "Seu relatório de",

    "Synastrie":
      "Sinastria",

    "Une exploration approfondie de la rencontre entre vos deux thèmes natals, de vos affinités naturelles, de vos défis et de votre potentiel d’évolution.":
      "Uma exploração aprofundada do encontro entre os seus dois mapas astrais, das suas afinidades naturais, dos seus desafios e do seu potencial de evolução.",

    "Lien émotionnel":
      "Vínculo emocional",

    "Communication":
      "Comunicação",

    "Attirance":
      "Atração",

    "Potentiel durable":
      "Potencial duradouro",

    "Votre voyage astrologique":
      "Sua jornada astrológica",

    "Une relation ne se résume jamais à un seul signe":
      "Uma relação nunca se resume a um único signo",

    "Ce rapport explore les interactions entre vos planètes, vos émotions, votre manière de communiquer, vos forces naturelles et les défis qui peuvent transformer votre relation. Chaque section vous aidera à comprendre pourquoi certaines énergies s’harmonisent spontanément, tandis que d’autres invitent à la conscience, à l’adaptation et à l’évolution commune.":
      "Este relatório explora as interações entre os seus planetas, as suas emoções, a sua maneira de comunicar, os seus pontos fortes naturais e os desafios que podem transformar a sua relação. Cada seção ajudará a compreender por que certas energias se harmonizam espontaneamente, enquanto outras convidam à consciência, à adaptação e à evolução conjunta.",

    "Deux thèmes natals ne racontent jamais deux histoires séparées. Leur rencontre révèle la manière dont deux univers s’attirent, s’influencent et évoluent ensemble.":
      "Dois mapas astrais nunca contam duas histórias separadas. O encontro entre eles revela como dois universos se atraem, se influenciam e evoluem juntos.",
  },
};

/*
 * ---------------------------------------------------------
 * OUTILS DE REMPLACEMENT
 * ---------------------------------------------------------
 */

function escapeRegExp(
  value: string,
): string {
  return value.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );
}

/*
 * Transforme les espaces de la chaîne française
 * en espaces flexibles.
 *
 * Cela permet de reconnaître :
 *
 * Une exploration approfondie de la
 * rencontre entre...
 *
 * comme :
 *
 * Une exploration approfondie de la rencontre entre...
 */
function createFlexiblePattern(
  value: string,
): string {
  return escapeRegExp(value).replace(
    /\s+/g,
    "\\s+",
  );
}

/*
 * Remplacement général.
 *
 * Fonctionne pour les paragraphes et
 * les textes répartis sur plusieurs lignes.
 */
function replaceFlexibleText(
  source: string,
  from: string,
  to: string,
): string {
  const pattern =
    createFlexiblePattern(from);

  return source.replace(
    new RegExp(pattern, "g"),
    to,
  );
}

/*
 * Remplacement spécifique des chaînes
 * utilisées dans des props :
 *
 * label="Première personne"
 * fallbackName="Première personne"
 */
function replaceDoubleQuotedText(
  source: string,
  from: string,
  to: string,
): string {
  const pattern =
    createFlexiblePattern(from);

  return source.replace(
    new RegExp(
      `"${pattern}"`,
      "g",
    ),
    `"${to}"`,
  );
}

/*
 * Même sécurité pour les chaînes entourées
 * d'apostrophes simples.
 */
function replaceSingleQuotedText(
  source: string,
  from: string,
  to: string,
): string {
  /*
   * On évite cette méthode lorsque le texte
   * contient lui-même une apostrophe.
   */
  if (
    from.includes("'") ||
    from.includes("’")
  ) {
    return source;
  }

  const pattern =
    createFlexiblePattern(from);

  return source.replace(
    new RegExp(
      `'${pattern}'`,
      "g",
    ),
    `'${to}'`,
  );
}

/*
 * Remplacement ciblé des textes placés
 * directement entre des balises JSX.
 *
 * Exemple :
 *
 * <Text>
 *   Naissance
 * </Text>
 */
function replaceJsxText(
  source: string,
  from: string,
  to: string,
): string {
  const pattern =
    createFlexiblePattern(from);

  return source.replace(
    new RegExp(
      `(>\\s*)${pattern}(\\s*<)`,
      "g",
    ),
    `$1${to}$2`,
  );
}

/*
 * ---------------------------------------------------------
 * LOCALISATION DE LA COUVERTURE
 * ---------------------------------------------------------
 */

export function localizeCompatibilityCover(
  source: string,
  locale: PaidPdfLocale,
): string {
  /*
   * Le français demeure toujours
   * le fichier original.
   */
  if (locale === "fr") {
    return source;
  }

  const translations =
    TRANSLATIONS[
      locale as NonFrenchLocale
    ];

  if (!translations) {
    return source;
  }

  let localized = source;

  /*
   * Les phrases les plus longues sont toujours
   * traitées en premier afin qu'un petit mot
   * contenu dans une phrase ne soit pas remplacé
   * avant la phrase complète.
   */
  const entries =
    Object.entries(
      translations,
    ).sort(
      ([a], [b]) =>
        b.length - a.length,
    );

  for (
    const [from, to] of entries
  ) {
    /*
     * 1. Props et chaînes TypeScript.
     */
    localized =
      replaceDoubleQuotedText(
        localized,
        from,
        to,
      );

    localized =
      replaceSingleQuotedText(
        localized,
        from,
        to,
      );

    /*
     * 2. Texte directement dans le JSX.
     */
    localized =
      replaceJsxText(
        localized,
        from,
        to,
      );

    /*
     * 3. Sécurité générale pour les paragraphes,
     *    valeurs de retour et textes multilignes.
     */
    localized =
      replaceFlexibleText(
        localized,
        from,
        to,
      );
  }

  /*
   * -------------------------------------------------------
   * SÉCURITÉS EXPLICITES POUR LES PETITS LABELS DE COVER
   * -------------------------------------------------------
   *
   * Ils étaient encore visibles en français dans
   * le PDF anglais malgré leur présence dans le
   * dictionnaire.
   */

  const forcedLabels: Record<
    NonFrenchLocale,
    Record<string, string>
  > = {
    en: {
      "Première personne":
        "First person",
      "Deuxième personne":
        "Second person",
      "Naissance":
        "Birth date",
      "Heure":
        "Time",
      "Lieu":
        "Place",
      "Synastrie":
        "Synastry",
      "Attirance":
        "Attraction",
    },

    es: {
      "Première personne":
        "Primera persona",
      "Deuxième personne":
        "Segunda persona",
      "Naissance":
        "Nacimiento",
      "Heure":
        "Hora",
      "Lieu":
        "Lugar",
      "Synastrie":
        "Sinastría",
      "Attirance":
        "Atracción",
    },

    de: {
      "Première personne":
        "Erste Person",
      "Deuxième personne":
        "Zweite Person",
      "Naissance":
        "Geburtsdatum",
      "Heure":
        "Uhrzeit",
      "Lieu":
        "Ort",
      "Synastrie":
        "Synastrie",
      "Attirance":
        "Anziehung",
    },

    it: {
      "Première personne":
        "Prima persona",
      "Deuxième personne":
        "Seconda persona",
      "Naissance":
        "Data di nascita",
      "Heure":
        "Ora",
      "Lieu":
        "Luogo",
      "Synastrie":
        "Sinastria",
      "Attirance":
        "Attrazione",
    },

    pt: {
      "Première personne":
        "Primeira pessoa",
      "Deuxième personne":
        "Segunda pessoa",
      "Naissance":
        "Nascimento",
      "Heure":
        "Hora",
      "Lieu":
        "Local",
      "Synastrie":
        "Sinastria",
      "Attirance":
        "Atração",
    },
  };

  for (
    const [from, to] of Object.entries(
      forcedLabels[
        locale as NonFrenchLocale
      ],
    )
  ) {
    localized =
      replaceFlexibleText(
        localized,
        from,
        to,
      );
  }

  return localized;
}
