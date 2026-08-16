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
    "Point de progression":
      "Progress point",

    "Travail et ambitions":
      "Career and ambitions",

    "Votre évolution professionnelle":
      "Your professional growth",

    "Lecture professionnelle":
      "Career insight",

    "sur 100":
      "out of 100",

    "Potentiel professionnel":
      "Career potential",

    "Vos axes de progression":
      "Your areas for growth",

    "Conseil professionnel":
      "Career advice",
  },

  es: {
    "Point de progression":
      "Punto de progreso",

    "Travail et ambitions":
      "Trabajo y ambiciones",

    "Votre évolution professionnelle":
      "Su evolución profesional",

    "Lecture professionnelle":
      "Análisis profesional",

    "sur 100":
      "de 100",

    "Potentiel professionnel":
      "Potencial profesional",

    "Vos axes de progression":
      "Sus áreas de progreso",

    "Conseil professionnel":
      "Consejo profesional",
  },

  de: {
    "Point de progression":
      "Entwicklungspunkt",

    "Travail et ambitions":
      "Beruf und Ambitionen",

    "Votre évolution professionnelle":
      "Ihre berufliche Entwicklung",

    "Lecture professionnelle":
      "Berufliche Deutung",

    "sur 100":
      "von 100",

    "Potentiel professionnel":
      "Berufliches Potenzial",

    "Vos axes de progression":
      "Ihre Entwicklungsbereiche",

    "Conseil professionnel":
      "Beruflicher Rat",
  },

  it: {
    "Point de progression":
      "Punto di crescita",

    "Travail et ambitions":
      "Lavoro e ambizioni",

    "Votre évolution professionnelle":
      "La tua evoluzione professionale",

    "Lecture professionnelle":
      "Lettura professionale",

    "sur 100":
      "su 100",

    "Potentiel professionnel":
      "Potenziale professionale",

    "Vos axes de progression":
      "Le tue aree di crescita",

    "Conseil professionnel":
      "Consiglio professionale",
  },

  pt: {
    "Point de progression":
      "Ponto de progresso",

    "Travail et ambitions":
      "Trabalho e ambições",

    "Votre évolution professionnelle":
      "Sua evolução profissional",

    "Lecture professionnelle":
      "Análise profissional",

    "sur 100":
      "de 100",

    "Potentiel professionnel":
      "Potencial profissional",

    "Vos axes de progression":
      "Suas áreas de progresso",

    "Conseil professionnel":
      "Conselho profissional",
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

function localizeSafeLiterals(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "HoroscopeCareer.tsx",
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

function replaceDynamicCareerValues(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /const\s+periodLabel\s*=\s*formatHoroscopePeriodLabel\(\s*period\s*\);/g,
    `const periodLabel =
    __careerLocalizedPeriodLabel(
      period,
    );`,
  );

  output = output.replace(
    /\{identity\.zodiacSignLabel\}/g,
    "{__careerLocalizeDynamicText(identity.zodiacSignLabel)}",
  );

  output = output.replace(
    /\{content\.career\.title\}/g,
    "{__careerLocalizeDynamicText(content.career.title)}",
  );

  output = output.replace(
    /\{content\.career\.introduction\}/g,
    "{__careerLocalizeDynamicText(content.career.introduction)}",
  );

  output = output.replace(
    /\{content\.career\.text\}/g,
    "{__careerLocalizeDynamicText(content.career.text)}",
  );

  /*
   * Les highlights sont passés au composant
   * CareerMilestone avec text={highlight}.
   */
  output = output.replace(
    /\btext=\{highlight\}/g,
    "text={__careerLocalizeDynamicText(highlight)}",
  );

  output = output.replace(
    /\{content\.career\.advice\}/g,
    "{__careerLocalizeDynamicText(content.career.advice)}",
  );

  return output;
}

function injectCareerHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __careerLocalizeDynamicText",
    )
  ) {
    return source;
  }

  const helper = `
/* =========================================================
   HOROSCOPE CAREER — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __CAREER_MONTHS =
  ${JSON.stringify(MONTHS[locale], null, 2)} as const;

const __CAREER_FRENCH_MONTHS =
  ${JSON.stringify(FRENCH_MONTHS, null, 2)} as const;

const __CAREER_ZODIAC_LABELS:
  Record<string, string> =
  ${JSON.stringify(ZODIAC_LABELS[locale], null, 2)};

const __CAREER_TRANSLATIONS:
  Record<string, string> =
  ${JSON.stringify(TRANSLATIONS[locale], null, 2)};

function __careerLocalizeDynamicText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  let output =
    __CAREER_TRANSLATIONS[value] ??
    value;

  __CAREER_FRENCH_MONTHS.forEach(
    (frenchMonth, index) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${frenchMonth}\\\\b\`,
          "gi",
        ),
        __CAREER_MONTHS[index],
      );
    },
  );

  Object.entries(
    __CAREER_ZODIAC_LABELS,
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

function __careerFormatIsoDate(
  isoDate?: string | null,
): string {
  if (!isoDate) {
    return "";
  }

  const match =
    isoDate.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __careerLocalizeDynamicText(
      isoDate,
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  ${
    locale === "en"
      ? 'return `${__CAREER_MONTHS[month - 1]} ${day}, ${year}`;'
      : locale === "de"
        ? 'return `${day}. ${__CAREER_MONTHS[month - 1]} ${year}`;'
        : locale === "es"
          ? 'return `${day} de ${__CAREER_MONTHS[month - 1]} de ${year}`;'
          : locale === "pt"
            ? 'return `${day} de ${__CAREER_MONTHS[month - 1]} de ${year}`;'
            : 'return `${day} ${__CAREER_MONTHS[month - 1]} ${year}`;'
  }
}

function __careerLocalizedPeriodLabel(
  period: HoroscopeSectionProps["period"],
): string {
  if (period.type === "day") {
    return __careerFormatIsoDate(
      period.startDate,
    );
  }

  const match =
    period.startDate?.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __careerLocalizeDynamicText(
      period.label ||
      period.startDate ||
      "",
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);

  if (period.type === "month") {
    return \`\${__CAREER_MONTHS[month - 1]} \${year}\`;
  }

  return String(year);
}

/* =========================================================
   END HOROSCOPE CAREER — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeCareer";

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

export function localizeHoroscopeCareer(
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

  let localized =
    replaceDynamicCareerValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectCareerHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
