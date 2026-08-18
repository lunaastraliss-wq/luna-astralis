import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type TranslationMap =
  Record<string, string>;

/* =========================================================
   STATIC TRANSLATIONS
========================================================= */

const TRANSLATIONS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Horoscope mensuel":
      "Monthly Horoscope",

    "Les grandes énergies du mois":
      "The major energies of the month",

    "Votre climat astrologique":
      "Your astrological climate",

    "Votre conseil":
      "Your guidance",

    "Comment ces énergies se combinent":
      "How these energies combine",

    "Conseil astrologique":
      "Astrological guidance",

    Transformation:
      "Transformation",

    Intuition:
      "Intuition",

    Récupération:
      "Recovery",

    Patience:
      "Patience",
  },

  es: {
    "Horoscope mensuel":
      "Horóscopo mensual",

    "Les grandes énergies du mois":
      "Las grandes energías del mes",

    "Votre climat astrologique":
      "Su clima astrológico",

    "Votre conseil":
      "Su consejo",

    "Comment ces énergies se combinent":
      "Cómo se combinan estas energías",

    "Conseil astrologique":
      "Consejo astrológico",

    Transformation:
      "Transformación",

    Intuition:
      "Intuición",

    Récupération:
      "Recuperación",

    Patience:
      "Paciencia",
  },

  de: {
    "Horoscope mensuel":
      "Monatshoroskop",

    "Les grandes énergies du mois":
      "Die wichtigsten Energien des Monats",

    "Votre climat astrologique":
      "Ihr astrologisches Klima",

    "Votre conseil":
      "Ihr Rat",

    "Comment ces énergies se combinent":
      "Wie diese Energien zusammenwirken",

    "Conseil astrologique":
      "Astrologischer Rat",

    Transformation:
      "Transformation",

    Intuition:
      "Intuition",

    Récupération:
      "Erholung",

    Patience:
      "Geduld",
  },

  it: {
    "Horoscope mensuel":
      "Oroscopo mensile",

    "Les grandes énergies du mois":
      "Le principali energie del mese",

    "Votre climat astrologique":
      "Il tuo clima astrologico",

    "Votre conseil":
      "Il tuo consiglio",

    "Comment ces énergies se combinent":
      "Come si combinano queste energie",

    "Conseil astrologique":
      "Consiglio astrologico",

    Transformation:
      "Trasformazione",

    Intuition:
      "Intuizione",

    Récupération:
      "Recupero",

    Patience:
      "Pazienza",
  },

  pt: {
    "Horoscope mensuel":
      "Horóscopo mensal",

    "Les grandes énergies du mois":
      "As principais energias do mês",

    "Votre climat astrologique":
      "Seu clima astrológico",

    "Votre conseil":
      "Seu conselho",

    "Comment ces énergies se combinent":
      "Como essas energias se combinam",

    "Conseil astrologique":
      "Conselho astrológico",

    Transformation:
      "Transformação",

    Intuition:
      "Intuição",

    Récupération:
      "Recuperação",

    Patience:
      "Paciência",
  },
};

/* =========================================================
   DATE LOCALES
========================================================= */

const LOCALE_TAGS: Record<
  NonFrenchLocale,
  string
> = {
  en: "en-CA",
  es: "es",
  de: "de",
  it: "it",
  pt: "pt-BR",
};

/* =========================================================
   ZODIAC
========================================================= */

const ZODIAC_LABELS: Record<
  NonFrenchLocale,
  Record<string, string>
> = {
  en: {
    Bélier: "Aries",
    Taureau: "Taurus",
    Gémeaux: "Gemini",
    Cancer: "Cancer",
    Lion: "Leo",
    Vierge: "Virgo",
    Balance: "Libra",
    Scorpion: "Scorpio",
    Sagittaire: "Sagittarius",
    Capricorne: "Capricorn",
    Verseau: "Aquarius",
    Poissons: "Pisces",

    Aries: "Aries",
    Taurus: "Taurus",
    Gemini: "Gemini",
    Leo: "Leo",
    Virgo: "Virgo",
    Libra: "Libra",
    Scorpio: "Scorpio",
    Sagittarius: "Sagittarius",
    Capricorn: "Capricorn",
    Aquarius: "Aquarius",
    Pisces: "Pisces",
  },

  es: {
    Bélier: "Aries",
    Taureau: "Tauro",
    Gémeaux: "Géminis",
    Cancer: "Cáncer",
    Lion: "Leo",
    Vierge: "Virgo",
    Balance: "Libra",
    Scorpion: "Escorpio",
    Sagittaire: "Sagitario",
    Capricorne: "Capricornio",
    Verseau: "Acuario",
    Poissons: "Piscis",

    Aries: "Aries",
    Taurus: "Tauro",
    Gemini: "Géminis",
    Leo: "Leo",
    Virgo: "Virgo",
    Libra: "Libra",
    Scorpio: "Escorpio",
    Sagittarius: "Sagitario",
    Capricorn: "Capricornio",
    Aquarius: "Acuario",
    Pisces: "Piscis",
  },

  de: {
    Bélier: "Widder",
    Taureau: "Stier",
    Gémeaux: "Zwillinge",
    Cancer: "Krebs",
    Lion: "Löwe",
    Vierge: "Jungfrau",
    Balance: "Waage",
    Scorpion: "Skorpion",
    Sagittaire: "Schütze",
    Capricorne: "Steinbock",
    Verseau: "Wassermann",
    Poissons: "Fische",

    Aries: "Widder",
    Taurus: "Stier",
    Gemini: "Zwillinge",
    Leo: "Löwe",
    Virgo: "Jungfrau",
    Libra: "Waage",
    Scorpio: "Skorpion",
    Sagittarius: "Schütze",
    Capricorn: "Steinbock",
    Aquarius: "Wassermann",
    Pisces: "Fische",
  },

  it: {
    Bélier: "Ariete",
    Taureau: "Toro",
    Gémeaux: "Gemelli",
    Cancer: "Cancro",
    Lion: "Leone",
    Vierge: "Vergine",
    Balance: "Bilancia",
    Scorpion: "Scorpione",
    Sagittaire: "Sagittario",
    Capricorne: "Capricorno",
    Verseau: "Acquario",
    Poissons: "Pesci",

    Aries: "Ariete",
    Taurus: "Toro",
    Gemini: "Gemelli",
    Leo: "Leone",
    Virgo: "Vergine",
    Libra: "Bilancia",
    Scorpio: "Scorpione",
    Sagittarius: "Sagittario",
    Capricorn: "Capricorno",
    Aquarius: "Acquario",
    Pisces: "Pesci",
  },

  pt: {
    Bélier: "Áries",
    Taureau: "Touro",
    Gémeaux: "Gêmeos",
    Cancer: "Câncer",
    Lion: "Leão",
    Vierge: "Virgem",
    Balance: "Libra",
    Scorpion: "Escorpião",
    Sagittaire: "Sagitário",
    Capricorne: "Capricórnio",
    Verseau: "Aquário",
    Poissons: "Peixes",

    Aries: "Áries",
    Taurus: "Touro",
    Gemini: "Gêmeos",
    Leo: "Leão",
    Virgo: "Virgem",
    Libra: "Libra",
    Scorpio: "Escorpião",
    Sagittarius: "Sagitário",
    Capricorn: "Capricórnio",
    Aquarius: "Aquário",
    Pisces: "Peixes",
  },
};

/* =========================================================
   SAFE STATIC TEXT
========================================================= */

function localizeStaticText(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "HoroscopeMonthMajorEnergies.tsx",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );

  const replacements: Array<{
    start: number;
    end: number;
    value: string;
  }> = [];

  function visit(
    node: ts.Node,
  ): void {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    ) {
      const translated =
        translations[node.text];

      if (
        typeof translated === "string" &&
        translated !== node.text
      ) {
        replacements.push({
          start:
            node.getStart(sourceFile),

          end:
            node.getEnd(),

          value:
            JSON.stringify(
              translated,
            ),
        });
      }
    }

    if (ts.isJsxText(node)) {
      const raw =
        node.getText(
          sourceFile,
        );

      const normalized =
        raw
          .replace(
            /\s+/g,
            " ",
          )
          .trim();

      const translated =
        translations[
          normalized
        ];

      if (
        normalized &&
        typeof translated ===
          "string"
      ) {
        const leading =
          raw.match(
            /^\s*/,
          )?.[0] ?? "";

        const trailing =
          raw.match(
            /\s*$/,
          )?.[0] ?? "";

        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),

          end:
            node.getEnd(),

          value:
            `${leading}${translated}${trailing}`,
        });
      }
    }

    ts.forEachChild(
      node,
      visit,
    );
  }

  visit(sourceFile);

  return replacements
    .sort(
      (a, b) =>
        b.start -
        a.start,
    )
    .reduce(
      (
        output,
        replacement,
      ) =>
        output.slice(
          0,
          replacement.start,
        ) +
        replacement.value +
        output.slice(
          replacement.end,
        ),
      source,
    );
}

/* =========================================================
   MONTH FORMATTER
========================================================= */

function localizeMonthFormatter(
  source: string,
  locale: NonFrenchLocale,
): string {
  const localeTag =
    LOCALE_TAGS[locale];

  let output =
    source;

  /*
   * Renomme le formatter français.
   */
  output =
    output.replace(
      /function formatFrenchMonthReferences\(/g,
      "function formatLocalizedMonthReferences(",
    );

  /*
   * Remplace fr-CA.
   */
  output =
    output.replace(
      /new Intl\.DateTimeFormat\(\s*"fr-CA",/g,
      `new Intl.DateTimeFormat(
          ${JSON.stringify(
            localeTag,
          )},`,
    );

  /*
   * Remplace tous les appels.
   */
  output =
    output.replace(
      /formatFrenchMonthReferences\(/g,
      "formatLocalizedMonthReferences(",
    );

  return output;
}

/* =========================================================
   DYNAMIC OUTPUTS
========================================================= */

function replaceDynamicOutputs(
  source: string,
): string {
  let output =
    source;

  /*
   * Badge du signe.
   */
  output =
    output.replace(
      /\{zodiacSignLabel\}/g,
      "{__monthMajorEnergiesLocalizeText(zodiacSignLabel)}",
    );

  /*
   * Introduction.
   */
  output =
    output.replace(
      /\{formatLocalizedMonthReferences\(majorEnergies\.introduction\)\}/g,
      "{__monthMajorEnergiesLocalizeText(formatLocalizedMonthReferences(majorEnergies.introduction))}",
    );

  /*
   * Titre de chaque énergie.
   */
  output =
    output.replace(
      /\{energy\.title\}/g,
      "{__monthMajorEnergiesLocalizeText(energy.title)}",
    );

  /*
   * Description.
   */
  output =
    output.replace(
      /\{formatLocalizedMonthReferences\(energy\.description\)\}/g,
      "{__monthMajorEnergiesLocalizeText(formatLocalizedMonthReferences(energy.description))}",
    );

  /*
   * Conseil.
   */
  output =
    output.replace(
      /\{formatLocalizedMonthReferences\(energy\.advice\)\}/g,
      "{__monthMajorEnergiesLocalizeText(formatLocalizedMonthReferences(energy.advice))}",
    );

  /*
   * Synthèse.
   */
  output =
    output.replace(
      /\{formatLocalizedMonthReferences\(majorEnergies\.synthesis\)\}/g,
      "{__monthMajorEnergiesLocalizeText(formatLocalizedMonthReferences(majorEnergies.synthesis))}",
    );

  /*
   * Conseil final.
   */
  output =
    output.replace(
      /\{formatLocalizedMonthReferences\(majorEnergies\.finalAdvice\)\}/g,
      "{__monthMajorEnergiesLocalizeText(formatLocalizedMonthReferences(majorEnergies.finalAdvice))}",
    );

  return output;
}

/* =========================================================
   GENERATED RUNTIME HELPERS
========================================================= */

function injectDynamicHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __monthMajorEnergiesLocalizeText",
    )
  ) {
    return source;
  }

  const helper = `
/* =========================================================
   MONTH MAJOR ENERGIES — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __MONTH_MAJOR_ENERGIES_TRANSLATIONS:
  Record<string, string> =
  ${JSON.stringify(
    TRANSLATIONS[locale],
    null,
    2,
  )};

const __MONTH_MAJOR_ENERGIES_ZODIAC:
  Record<string, string> =
  ${JSON.stringify(
    ZODIAC_LABELS[locale],
    null,
    2,
  )};

function __monthMajorEnergiesLocalizeZodiac(
  value: string,
): string {
  return (
    __MONTH_MAJOR_ENERGIES_ZODIAC[
      value
    ] ??
    value
  );
}

function __monthMajorEnergiesLocalizeText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  const exact =
    __MONTH_MAJOR_ENERGIES_TRANSLATIONS[
      value
    ];

  if (exact) {
    return exact;
  }

  /*
   * -------------------------------------------------------
   * INTRODUCTION
   * -------------------------------------------------------
   *
   * Exemple :
   *
   * Pour Scorpio, les grandes énergies de July 2026
   * mettent en lumière quatre mouvements symboliques...
   */

  const introductionMatch =
    value.match(
      /^Pour (.+?), les grandes énergies de (.+?) mettent en lumière quatre mouvements symboliques principaux\\. Leur intensité indique les thèmes susceptibles d’occuper une place plus importante dans vos décisions, vos relations et votre évolution personnelle\\.$/,
    );

  if (introductionMatch) {
    const sign =
      __monthMajorEnergiesLocalizeZodiac(
        introductionMatch[1],
      );

    const period =
      introductionMatch[2];

    ${
      locale === "en"
        ? 'return `For ${sign}, the major energies of ${period} highlight four main symbolic movements. Their intensity indicates the themes likely to play a more important role in your decisions, relationships, and personal growth.`;'
        : locale === "es"
          ? 'return `Para ${sign}, las principales energías de ${period} destacan cuatro movimientos simbólicos principales. Su intensidad indica los temas que probablemente ocuparán un lugar más importante en sus decisiones, relaciones y evolución personal.`;'
          : locale === "de"
            ? 'return `Für ${sign} heben die wichtigsten Energien im ${period} vier zentrale symbolische Bewegungen hervor. Ihre Intensität zeigt die Themen an, die in Ihren Entscheidungen, Beziehungen und Ihrer persönlichen Entwicklung eine größere Rolle spielen können.`;'
            : locale === "it"
              ? 'return `Per ${sign}, le principali energie di ${period} mettono in evidenza quattro movimenti simbolici principali. La loro intensità indica i temi che potrebbero assumere maggiore importanza nelle tue decisioni, relazioni e nella tua evoluzione personale.`;'
              : 'return `Para ${sign}, as principais energias de ${period} destacam quatro movimentos simbólicos principais. A intensidade delas indica os temas que podem assumir maior importância em suas decisões, relacionamentos e evolução pessoal.`;'
    }
  }

  /*
   * -------------------------------------------------------
   * SYNTHÈSE
   * -------------------------------------------------------
   *
   * Exemple :
   *
   * Intuition constitue l’énergie dominante de votre mois.
   * Elle interagit avec transformation, recovery, patience.
   * Ces tendances se complètent...
   */

  const synthesisMatch =
    value.match(
      /^(.+?) constitue l’énergie dominante de votre mois\\. Elle interagit avec (.+?)\\. Ces tendances se complètent et vous invitent à avancer avec davantage de conscience plutôt qu’à réagir automatiquement aux événements\\.$/,
    );

  if (synthesisMatch) {
    const dominant =
      __monthMajorEnergiesLocalizeText(
        synthesisMatch[1],
      );

    const related =
      synthesisMatch[2]
        .split(",")
        .map(
          (item) =>
            __monthMajorEnergiesLocalizeText(
              item.trim(),
            ),
        )
        .join(", ");

    ${
      locale === "en"
        ? 'return `${dominant} is the dominant energy of your month. It interacts with ${related}. These trends complement one another and invite you to move forward with greater awareness rather than reacting automatically to events.`;'
        : locale === "es"
          ? 'return `${dominant} es la energía dominante de su mes. Interactúa con ${related}. Estas tendencias se complementan y le invitan a avanzar con mayor conciencia en lugar de reaccionar automáticamente a los acontecimientos.`;'
          : locale === "de"
            ? 'return `${dominant} ist die vorherrschende Energie Ihres Monats. Sie wirkt mit ${related} zusammen. Diese Tendenzen ergänzen sich und laden Sie dazu ein, bewusster voranzugehen, anstatt automatisch auf Ereignisse zu reagieren.`;'
            : locale === "it"
              ? 'return `${dominant} è l’energia dominante del tuo mese. Interagisce con ${related}. Queste tendenze si completano e ti invitano ad avanzare con maggiore consapevolezza invece di reagire automaticamente agli eventi.`;'
              : 'return `${dominant} é a energia dominante do seu mês. Ela interage com ${related}. Essas tendências se complementam e convidam você a avançar com mais consciência, em vez de reagir automaticamente aos acontecimentos.`;'
    }
  }

  /*
   * -------------------------------------------------------
   * CONSEIL FINAL
   * -------------------------------------------------------
   */

  if (
    value ===
    "Utilisez ces énergies comme des repères. Concentrez-vous d’abord sur le thème qui semble le plus présent dans votre réalité, puis ajustez progressivement vos décisions au fil du mois."
  ) {
    ${
      locale === "en"
        ? 'return "Use these energies as reference points. Focus first on the theme that feels most present in your reality, then gradually adjust your decisions throughout the month.";'
        : locale === "es"
          ? 'return "Utilice estas energías como puntos de referencia. Concéntrese primero en el tema que parece más presente en su realidad y luego ajuste progresivamente sus decisiones a lo largo del mes.";'
          : locale === "de"
            ? 'return "Nutzen Sie diese Energien als Orientierungspunkte. Konzentrieren Sie sich zunächst auf das Thema, das in Ihrer Realität am stärksten präsent ist, und passen Sie Ihre Entscheidungen im Laufe des Monats schrittweise an.";'
            : locale === "it"
              ? 'return "Usa queste energie come punti di riferimento. Concentrati prima sul tema che sembra più presente nella tua realtà, poi adatta gradualmente le tue decisioni nel corso del mese.";'
              : 'return "Use essas energias como pontos de referência. Concentre-se primeiro no tema que parece mais presente em sua realidade e, em seguida, ajuste gradualmente suas decisões ao longo do mês.";'
    }
  }

  /*
   * -------------------------------------------------------
   * ÉNERGIES COURANTES
   * -------------------------------------------------------
   */

  const commonTranslations:
    Record<string, string> =
    ${
      locale === "en"
        ? JSON.stringify(
            {
              transformation:
                "Transformation",
              intuition:
                "Intuition",
              récupération:
                "Recovery",
              recuperation:
                "Recovery",
              recovery:
                "Recovery",
              patience:
                "Patience",
            },
            null,
            2,
          )
        : locale === "es"
          ? JSON.stringify(
              {
                transformation:
                  "Transformación",
                intuition:
                  "Intuición",
                recuperación:
                  "Recuperación",
                recuperation:
                  "Recuperación",
                recovery:
                  "Recuperación",
                patience:
                  "Paciencia",
              },
              null,
              2,
            )
          : locale === "de"
            ? JSON.stringify(
                {
                  transformation:
                    "Transformation",
                  intuition:
                    "Intuition",
                  récupération:
                    "Erholung",
                  recuperation:
                    "Erholung",
                  recovery:
                    "Erholung",
                  patience:
                    "Geduld",
                },
                null,
                2,
              )
            : locale === "it"
              ? JSON.stringify(
                  {
                    transformation:
                      "Trasformazione",
                    intuition:
                      "Intuizione",
                    récupération:
                      "Recupero",
                    recuperation:
                      "Recupero",
                    recovery:
                      "Recupero",
                    patience:
                      "Pazienza",
                  },
                  null,
                  2,
                )
              : JSON.stringify(
                  {
                    transformation:
                      "Transformação",
                    intuition:
                      "Intuição",
                    récupération:
                      "Recuperação",
                    recuperation:
                      "Recuperação",
                    recovery:
                      "Recuperação",
                    patience:
                      "Paciência",
                  },
                  null,
                  2,
                )
    };

  const normalized =
    value
      .trim()
      .toLowerCase();

  if (
    commonTranslations[
      normalized
    ]
  ) {
    return commonTranslations[
      normalized
    ];
  }

  /*
   * Dernier passage :
   * traduire uniquement le signe
   * s'il est présent comme valeur isolée.
   */

  return (
    __MONTH_MAJOR_ENERGIES_ZODIAC[
      value
    ] ??
    value
  );
}

/* =========================================================
   END MONTH MAJOR ENERGIES — GENERATED HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeMonthMajorEnergies";

  const index =
    source.indexOf(
      marker,
    );

  if (index < 0) {
    return source;
  }

  return (
    source.slice(
      0,
      index,
    ) +
    helper +
    source.slice(
      index,
    )
  );
}

/* =========================================================
   MAIN LOCALIZER
========================================================= */

export function localizeHoroscopeMonthMajorEnergies(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (
    locale === "fr"
  ) {
    return source;
  }

  if (
    !source.includes(
      "HoroscopeMonthMajorEnergies",
    )
  ) {
    return source;
  }

  const normalizedLocale =
    locale as
      NonFrenchLocale;

  const translations =
    TRANSLATIONS[
      normalizedLocale
    ];

  if (!translations) {
    return source;
  }

  /*
   * 1. Corrige le formatter du mois.
   */
  let localized =
    localizeMonthFormatter(
      source,
      normalizedLocale,
    );

  /*
   * 2. Branche les valeurs dynamiques
   *    sur le helper de traduction.
   */
  localized =
    replaceDynamicOutputs(
      localized,
    );

  /*
   * 3. Traduit les textes fixes JSX.
   */
  localized =
    localizeStaticText(
      localized,
      translations,
    );

  /*
   * 4. Injecte les helpers nécessaires
   *    aux contenus générés.
   */
  localized =
    injectDynamicHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
