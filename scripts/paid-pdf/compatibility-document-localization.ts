import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type DocumentTranslations = {
  firstPerson: string;
  secondPerson: string;
  title: string;
  and: string;
  subject: string;
  language: string;
  keywords: string[];
};

const TRANSLATIONS: Record<
  NonFrenchLocale,
  DocumentTranslations
> = {
  en: {
    firstPerson: "First person",
    secondPerson: "Second person",
    title:
      "Premium Astrological Compatibility",
    and: "and",
    subject:
      "Personalized Premium astrological compatibility and synastry report",
    language: "en-US",
    keywords: [
      "astrology",
      "astrological compatibility",
      "synastry",
      "love compatibility",
      "relationship",
      "Premium report",
      "Luna Astralis",
    ],
  },

  es: {
    firstPerson: "Primera persona",
    secondPerson: "Segunda persona",
    title:
      "Compatibilidad astrológica Premium",
    and: "y",
    subject:
      "Informe Premium personalizado de compatibilidad astrológica y sinastría",
    language: "es-ES",
    keywords: [
      "astrología",
      "compatibilidad astrológica",
      "sinastría",
      "compatibilidad amorosa",
      "pareja",
      "informe Premium",
      "Luna Astralis",
    ],
  },

  de: {
    firstPerson: "Erste Person",
    secondPerson: "Zweite Person",
    title:
      "Premium astrologische Kompatibilität",
    and: "und",
    subject:
      "Personalisierter Premium-Bericht über astrologische Kompatibilität und Synastrie",
    language: "de-DE",
    keywords: [
      "Astrologie",
      "astrologische Kompatibilität",
      "Synastrie",
      "Liebeskompatibilität",
      "Partnerschaft",
      "Premium-Bericht",
      "Luna Astralis",
    ],
  },

  it: {
    firstPerson: "Prima persona",
    secondPerson: "Seconda persona",
    title:
      "Compatibilità astrologica Premium",
    and: "e",
    subject:
      "Rapporto Premium personalizzato di compatibilità astrologica e sinastria",
    language: "it-IT",
    keywords: [
      "astrologia",
      "compatibilità astrologica",
      "sinastria",
      "compatibilità amorosa",
      "coppia",
      "rapporto Premium",
      "Luna Astralis",
    ],
  },

  pt: {
    firstPerson: "Primeira pessoa",
    secondPerson: "Segunda pessoa",
    title:
      "Compatibilidade astrológica Premium",
    and: "e",
    subject:
      "Relatório Premium personalizado de compatibilidade astrológica e sinastria",
    language: "pt-PT",
    keywords: [
      "astrologia",
      "compatibilidade astrológica",
      "sinastria",
      "compatibilidade amorosa",
      "casal",
      "relatório Premium",
      "Luna Astralis",
    ],
  },
};

function replaceAllLiteral(
  source: string,
  from: string,
  to: string,
): string {
  return source.split(from).join(to);
}

export function localizeCompatibilityDocument(
  source: string,
  locale: PaidPdfLocale,
): string {
  /*
   * Le français reste exactement
   * le fichier source original.
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
   * Valeurs de remplacement
   * pour les noms par défaut.
   */
  localized = replaceAllLiteral(
    localized,
    `"Première personne"`,
    JSON.stringify(
      translations.firstPerson,
    ),
  );

  localized = replaceAllLiteral(
    localized,
    `"Deuxième personne"`,
    JSON.stringify(
      translations.secondPerson,
    ),
  );

  /*
   * Titre dynamique du document.
   *
   * FR :
   * Compatibilité astrologique Premium -
   * Personne 1 et Personne 2
   */
  localized = replaceAllLiteral(
    localized,
    `"Compatibilité astrologique Premium - " +`,
    `${JSON.stringify(
      `${translations.title} - `,
    )} +`,
  );

  /*
   * Le mot "et" du titre est dans
   * le template literal suivant.
   */
  localized = replaceAllLiteral(
    localized,
    "`${person1Name} et ${person2Name}`",
    `\`\${person1Name} ${translations.and} \${person2Name}\``,
  );

  /*
   * Métadonnées PDF.
   */
  localized = replaceAllLiteral(
    localized,
    `subject="Rapport Premium personnalisé de compatibilité astrologique et de synastrie"`,
    `subject=${JSON.stringify(
      translations.subject,
    )}`,
  );

  localized = replaceAllLiteral(
    localized,
    `language="fr-CA"`,
    `language=${JSON.stringify(
      translations.language,
    )}`,
  );

  /*
   * Keywords.
   *
   * On remplace le tableau complet afin
   * d'éviter de traduire accidentellement
   * d'autres chaînes du composant.
   */
  const frenchKeywords = `[
        "astrologie",
        "compatibilité astrologique",
        "synastrie",
        "compatibilité amoureuse",
        "couple",
        "rapport Premium",
        "Luna Astralis",
      ].join(", ")}`;

  const localizedKeywords = `[
        ${translations.keywords
          .map(
            (keyword) =>
              JSON.stringify(keyword),
          )
          .join(",\n        ")}
      ].join(", ")}`;

  localized = replaceAllLiteral(
    localized,
    frenchKeywords,
    localizedKeywords,
  );

  return localized;
}
