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

const TRANSLATIONS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Votre guidance astrologique personnalisée":
      "Your personalized astrological guidance",
    "Période astrologique":
      "Astrological period",
    "Préparé spécialement pour":
      "Prepared especially for",
    "Horoscope personnalisé":
      "Personalized horoscope",
  },

  es: {
    "Votre guidance astrologique personnalisée":
      "Su guía astrológica personalizada",
    "Période astrologique":
      "Período astrológico",
    "Préparé spécialement pour":
      "Preparado especialmente para",
    "Horoscope personnalisé":
      "Horóscopo personalizado",
  },

  de: {
    "Votre guidance astrologique personnalisée":
      "Ihre persönliche astrologische Begleitung",
    "Période astrologique":
      "Astrologischer Zeitraum",
    "Préparé spécialement pour":
      "Speziell erstellt für",
    "Horoscope personnalisé":
      "Persönliches Horoskop",
  },

  it: {
    "Votre guidance astrologique personnalisée":
      "La tua guida astrologica personalizzata",
    "Période astrologique":
      "Periodo astrologico",
    "Préparé spécialement pour":
      "Preparato appositamente per",
    "Horoscope personnalisé":
      "Oroscopo personalizzato",
  },

  pt: {
    "Votre guidance astrologique personnalisée":
      "Sua orientação astrológica personalizada",
    "Période astrologique":
      "Período astrológico",
    "Préparé spécialement pour":
      "Preparado especialmente para",
    "Horoscope personnalisé":
      "Horóscopo personalizado",
  },
};

const MONTHS: Record<
  NonFrenchLocale,
  string[]
> = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],

  es: [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ],

  de: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ],

  it: [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre",
  ],

  pt: [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ],
};

const FRENCH_MONTHS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
] as const;

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
  },
};

const PREMIUM_REPORT_TITLES: Record<
  NonFrenchLocale,
  {
    day: string;
    month: string;
    year: string;
  }
> = {
  en: {
    day: "Your Premium daily horoscope",
    month: "Your Premium monthly horoscope",
    year: "Your Premium yearly horoscope",
  },
  es: {
    day: "Su horóscopo Premium del día",
    month: "Su horóscopo Premium del mes",
    year: "Su horóscopo Premium del año",
  },
  de: {
    day: "Ihr Premium-Tageshoroskop",
    month: "Ihr Premium-Monatshoroskop",
    year: "Ihr Premium-Jahreshoroskop",
  },
  it: {
    day: "Il tuo oroscopo Premium del giorno",
    month: "Il tuo oroscopo Premium del mese",
    year: "Il tuo oroscopo Premium dell’anno",
  },
  pt: {
    day: "Seu horóscopo Premium do dia",
    month: "Seu horóscopo Premium do mês",
    year: "Seu horóscopo Premium do ano",
  },
};

function localizeSafeLiterals(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "HoroscopeCover.tsx",
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
            JSON.stringify(translated),
        });
      }
    }

    if (ts.isJsxText(node)) {
      const raw =
        node.getText(sourceFile);

      const normalized =
        raw.replace(/\s+/g, " ").trim();

      const translated =
        translations[normalized];

      if (
        normalized &&
        typeof translated === "string"
      ) {
        const leading =
          raw.match(/^\s*/)?.[0] ?? "";

        const trailing =
          raw.match(/\s*$/)?.[0] ?? "";

        replacements.push({
          start:
            node.getStart(sourceFile),
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
        b.start - a.start,
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

function replaceDynamicCoverValues(
  source: string,
): string {
  let output = source;

  /*
   * Le period.label reçu du builder peut déjà contenir
   * une date française. On ne doit donc pas appeler
   * directement formatHoroscopePeriodLabel(period).
   */
  output = output.replace(
    /const\s+periodLabel\s*=\s*formatHoroscopePeriodLabel\(\s*period\s*\);/g,
    `const periodLabel =
    __coverLocalizedPeriodLabel(period);`,
  );

  /*
   * reportTitle arrive comme prop dynamique.
   */
  output = output.replace(
    /\{reportTitle\}/g,
    "{__coverLocalizeDynamicText(reportTitle)}",
  );

  /*
   * reportSubtitle arrive aussi comme prop dynamique.
   */
  output = output.replace(
    /\{reportSubtitle\s*\|\|\s*"Votre guidance astrologique personnalisée"\}/g,
    `{reportSubtitle
              ? __coverLocalizeDynamicText(reportSubtitle)
              : "Votre guidance astrologique personnalisée"}`,
  );

  /*
   * Le nom visible du signe peut encore arriver en français
   * selon la source qui a construit identity.
   */
  output = output.replace(
    /\{identity\.zodiacSignLabel\}/g,
    "{__coverLocalizeDynamicText(identity.zodiacSignLabel)}",
  );

  return output;
}

function injectCoverHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __coverLocalizeDynamicText",
    )
  ) {
    return source;
  }

  const months =
    MONTHS[locale];

  const zodiac =
    ZODIAC_LABELS[locale];

  const reportTitles =
    PREMIUM_REPORT_TITLES[locale];

  const dateFormatter = (() => {
    switch (locale) {
      case "en":
        return `
function __coverFormatIsoDate(
  isoDate?: string | null,
): string {
  if (!isoDate) return "";

  const match =
    isoDate.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __coverLocalizeDynamicText(
      isoDate,
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  return \`\${__COVER_MONTHS[month - 1]} \${day}, \${year}\`;
}`;
      case "de":
        return `
function __coverFormatIsoDate(
  isoDate?: string | null,
): string {
  if (!isoDate) return "";

  const match =
    isoDate.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __coverLocalizeDynamicText(
      isoDate,
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  return \`\${day}. \${__COVER_MONTHS[month - 1]} \${year}\`;
}`;
      case "es":
        return `
function __coverFormatIsoDate(
  isoDate?: string | null,
): string {
  if (!isoDate) return "";

  const match =
    isoDate.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __coverLocalizeDynamicText(
      isoDate,
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  return \`\${day} de \${__COVER_MONTHS[month - 1]} de \${year}\`;
}`;
      case "it":
        return `
function __coverFormatIsoDate(
  isoDate?: string | null,
): string {
  if (!isoDate) return "";

  const match =
    isoDate.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __coverLocalizeDynamicText(
      isoDate,
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  return \`\${day} \${__COVER_MONTHS[month - 1]} \${year}\`;
}`;
      case "pt":
        return `
function __coverFormatIsoDate(
  isoDate?: string | null,
): string {
  if (!isoDate) return "";

  const match =
    isoDate.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __coverLocalizeDynamicText(
      isoDate,
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  return \`\${day} de \${__COVER_MONTHS[month - 1]} de \${year}\`;
}`;
    }
  })();

  const helper = `
/* =========================================================
   HOROSCOPE COVER — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __COVER_MONTHS =
  ${JSON.stringify(months, null, 2)} as const;

const __COVER_FRENCH_MONTHS =
  ${JSON.stringify(FRENCH_MONTHS, null, 2)} as const;

const __COVER_ZODIAC_LABELS:
  Record<string, string> =
  ${JSON.stringify(zodiac, null, 2)};

const __COVER_REPORT_TITLES =
  ${JSON.stringify(reportTitles, null, 2)} as const;

function __coverLocalizeDynamicText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  let output = value;

  /*
   * Titres Premium dynamiques.
   */
  output = output
    .replace(
      /Votre horoscope Premium du jour/g,
      __COVER_REPORT_TITLES.day,
    )
    .replace(
      /Votre horoscope Premium du mois/g,
      __COVER_REPORT_TITLES.month,
    )
    .replace(
      /Votre horoscope Premium de l[’']année/g,
      __COVER_REPORT_TITLES.year,
    );

  /*
   * Mois français à l'intérieur d'une chaîne dynamique :
   * "Scorpio — 21 juillet 2026"
   * devient par exemple
   * "Scorpio — 21 July 2026".
   *
   * La date complète est formatée plus bas quand on dispose
   * de startDate au format ISO.
   */
  __COVER_FRENCH_MONTHS.forEach(
    (frenchMonth, index) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${frenchMonth}\\\\b\`,
          "gi",
        ),
        __COVER_MONTHS[index],
      );
    },
  );

  /*
   * Signes français éventuellement présents
   * dans reportSubtitle ou identity.
   */
  Object.entries(
    __COVER_ZODIAC_LABELS,
  ).forEach(
    ([frenchSign, localizedSign]) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${frenchSign}\\\\b\`,
          "gi",
        ),
        localizedSign,
      );
    },
  );

  return output;
}

${dateFormatter}

function __coverLocalizedPeriodLabel(
  period: HoroscopeCoverProps["period"],
): string {
  if (period.type === "day") {
    return __coverFormatIsoDate(
      period.startDate,
    );
  }

  const match =
    period.startDate?.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __coverLocalizeDynamicText(
      period.label ||
      period.startDate ||
      "",
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);

  if (period.type === "month") {
    return \`\${__COVER_MONTHS[month - 1]} \${year}\`;
  }

  return String(year);
}

/* =========================================================
   END HOROSCOPE COVER — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeCover";

  const index =
    source.indexOf(marker);

  if (index < 0) {
    return source;
  }

  return (
    source.slice(0, index) +
    helper +
    source.slice(index)
  );
}

export function localizeHoroscopeCover(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    TRANSLATIONS[normalizedLocale];

  if (!translations) {
    return source;
  }

  /*
   * 1. Corriger les valeurs dynamiques du cover.
   */
  let localized =
    replaceDynamicCoverValues(
      source,
    );

  /*
   * 2. Traduire les textes fixes.
   */
  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  /*
   * 3. Injecter les helpers pour titre, sous-titre,
   *    signe et date/période.
   */
  localized =
    injectCoverHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
