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

    "Votre première semaine":
      "Your first week",
    "Votre deuxième semaine":
      "Your second week",
    "Votre troisième semaine":
      "Your third week",
    "Votre quatrième semaine":
      "Your fourth week",

    "Semaine 1":
      "Week 1",
    "Semaine 2":
      "Week 2",
    "Semaine 3":
      "Week 3",
    "Semaine 4":
      "Week 4",

    "Thème de la semaine":
      "Theme of the week",

    "sur 100":
      "out of 100",

    "Vos indicateurs de la semaine":
      "Your indicators for the week",

    "Énergie":
      "Energy",
    "Amour":
      "Love",
    "Travail":
      "Career",
    "Finances":
      "Finances",
    "Bien-être":
      "Well-being",

    "Opportunité de la semaine":
      "Opportunity of the week",

    "Point de vigilance":
      "Point of vigilance",

    "Conseil astrologique":
      "Astrological advice",
  },

  es: {
    "Horoscope mensuel":
      "Horóscopo mensual",

    "Votre première semaine":
      "Su primera semana",
    "Votre deuxième semaine":
      "Su segunda semana",
    "Votre troisième semaine":
      "Su tercera semana",
    "Votre quatrième semaine":
      "Su cuarta semana",

    "Semaine 1":
      "Semana 1",
    "Semaine 2":
      "Semana 2",
    "Semaine 3":
      "Semana 3",
    "Semaine 4":
      "Semana 4",

    "Thème de la semaine":
      "Tema de la semana",

    "sur 100":
      "de 100",

    "Vos indicateurs de la semaine":
      "Sus indicadores de la semana",

    "Énergie":
      "Energía",
    "Amour":
      "Amor",
    "Travail":
      "Trabajo",
    "Finances":
      "Finanzas",
    "Bien-être":
      "Bienestar",

    "Opportunité de la semaine":
      "Oportunidad de la semana",

    "Point de vigilance":
      "Punto de atención",

    "Conseil astrologique":
      "Consejo astrológico",
  },

  de: {
    "Horoscope mensuel":
      "Monatshoroskop",

    "Votre première semaine":
      "Ihre erste Woche",
    "Votre deuxième semaine":
      "Ihre zweite Woche",
    "Votre troisième semaine":
      "Ihre dritte Woche",
    "Votre quatrième semaine":
      "Ihre vierte Woche",

    "Semaine 1":
      "Woche 1",
    "Semaine 2":
      "Woche 2",
    "Semaine 3":
      "Woche 3",
    "Semaine 4":
      "Woche 4",

    "Thème de la semaine":
      "Thema der Woche",

    "sur 100":
      "von 100",

    "Vos indicateurs de la semaine":
      "Ihre Indikatoren der Woche",

    "Énergie":
      "Energie",
    "Amour":
      "Liebe",
    "Travail":
      "Beruf",
    "Finances":
      "Finanzen",
    "Bien-être":
      "Wohlbefinden",

    "Opportunité de la semaine":
      "Chance der Woche",

    "Point de vigilance":
      "Worauf Sie achten sollten",

    "Conseil astrologique":
      "Astrologischer Rat",
  },

  it: {
    "Horoscope mensuel":
      "Oroscopo mensile",

    "Votre première semaine":
      "La tua prima settimana",
    "Votre deuxième semaine":
      "La tua seconda settimana",
    "Votre troisième semaine":
      "La tua terza settimana",
    "Votre quatrième semaine":
      "La tua quarta settimana",

    "Semaine 1":
      "Settimana 1",
    "Semaine 2":
      "Settimana 2",
    "Semaine 3":
      "Settimana 3",
    "Semaine 4":
      "Settimana 4",

    "Thème de la semaine":
      "Tema della settimana",

    "sur 100":
      "su 100",

    "Vos indicateurs de la semaine":
      "I tuoi indicatori della settimana",

    "Énergie":
      "Energia",
    "Amour":
      "Amore",
    "Travail":
      "Lavoro",
    "Finances":
      "Finanze",
    "Bien-être":
      "Benessere",

    "Opportunité de la semaine":
      "Opportunità della settimana",

    "Point de vigilance":
      "Punto di attenzione",

    "Conseil astrologique":
      "Consiglio astrologico",
  },

  pt: {
    "Horoscope mensuel":
      "Horóscopo mensal",

    "Votre première semaine":
      "A sua primeira semana",
    "Votre deuxième semaine":
      "A sua segunda semana",
    "Votre troisième semaine":
      "A sua terceira semana",
    "Votre quatrième semaine":
      "A sua quarta semana",

    "Semaine 1":
      "Semana 1",
    "Semaine 2":
      "Semana 2",
    "Semaine 3":
      "Semana 3",
    "Semaine 4":
      "Semana 4",

    "Thème de la semaine":
      "Tema da semana",

    "sur 100":
      "de 100",

    "Vos indicateurs de la semaine":
      "Os seus indicadores da semana",

    "Énergie":
      "Energia",
    "Amour":
      "Amor",
    "Travail":
      "Trabalho",
    "Finances":
      "Finanças",
    "Bien-être":
      "Bem-estar",

    "Opportunité de la semaine":
      "Oportunidade da semana",

    "Point de vigilance":
      "Ponto de atenção",

    "Conseil astrologique":
      "Conselho astrológico",
  },
};

/* =========================================================
   ZODIAC SIGNS
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
   AST SAFE REPLACEMENT
========================================================= */

function localizeSafeLiterals(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "HoroscopeMonthWeek.tsx",
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
      ts.isNoSubstitutionTemplateLiteral(node)
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

    if (
      ts.isJsxText(node)
    ) {
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
        typeof translated === "string"
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

  visit(
    sourceFile,
  );

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
   DYNAMIC VALUES
========================================================= */

function replaceDynamicWeekValues(
  source: string,
): string {
  let output =
    source;

  /*
   * Signe astrologique affiché dans le badge.
   */

  output =
    output.replace(
      /\{identity\.zodiacSignLabel\}/g,
      "{__monthWeekLocalizeZodiac(identity.zodiacSignLabel)}",
    );

  return output;
}

/* =========================================================
   GENERATED HELPER
========================================================= */

function injectWeekHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __monthWeekLocalizeZodiac",
    )
  ) {
    return source;
  }

  const helper = `
/* =========================================================
   MONTH HOROSCOPE WEEKS — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __MONTH_WEEK_ZODIAC:
  Record<string, string> =
  ${JSON.stringify(
    ZODIAC_LABELS[locale],
    null,
    2,
  )};

function __monthWeekLocalizeZodiac(
  value: string,
): string {
  return (
    __MONTH_WEEK_ZODIAC[
      value
    ] ??
    value
  );
}

/* =========================================================
   END MONTH HOROSCOPE WEEKS — GENERATED HELPERS
========================================================= */

`;

  const marker =
    /export default function HoroscopeMonthWeek[1-4]/;

  const match =
    source.match(
      marker,
    );

  if (
    !match ||
    match.index === undefined
  ) {
    return source;
  }

  const index =
    match.index;

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

export function localizeHoroscopeMonthWeeks(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (
    locale === "fr"
  ) {
    return source;
  }

  /*
   * Sécurité :
   * ce localizer ne doit toucher
   * qu'aux quatre pages Week.
   */

  if (
    !source.includes(
      "HoroscopeMonthWeek1",
    ) &&
    !source.includes(
      "HoroscopeMonthWeek2",
    ) &&
    !source.includes(
      "HoroscopeMonthWeek3",
    ) &&
    !source.includes(
      "HoroscopeMonthWeek4",
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

  if (
    !translations
  ) {
    return source;
  }

  let localized =
    replaceDynamicWeekValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectWeekHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
