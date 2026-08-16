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
    "Énergie générale":
      "Overall energy",

    "Votre climat énergétique":
      "Your energy climate",

    "Tendance dominante":
      "Dominant trend",

    "sur 100":
      "out of 100",

    "Niveau d’énergie":
      "Energy level",

    "Points à retenir":
      "Key points",

    "Conseil énergétique":
      "Energy advice",
  },

  es: {
    "Énergie générale":
      "Energía general",

    "Votre climat énergétique":
      "Su clima energético",

    "Tendance dominante":
      "Tendencia dominante",

    "sur 100":
      "de 100",

    "Niveau d’énergie":
      "Nivel de energía",

    "Points à retenir":
      "Puntos clave",

    "Conseil énergétique":
      "Consejo energético",
  },

  de: {
    "Énergie générale":
      "Allgemeine Energie",

    "Votre climat énergétique":
      "Ihr energetisches Klima",

    "Tendance dominante":
      "Vorherrschende Tendenz",

    "sur 100":
      "von 100",

    "Niveau d’énergie":
      "Energieniveau",

    "Points à retenir":
      "Wichtige Punkte",

    "Conseil énergétique":
      "Energetischer Rat",
  },

  it: {
    "Énergie générale":
      "Energia generale",

    "Votre climat énergétique":
      "Il tuo clima energetico",

    "Tendance dominante":
      "Tendenza dominante",

    "sur 100":
      "su 100",

    "Niveau d’énergie":
      "Livello di energia",

    "Points à retenir":
      "Punti chiave",

    "Conseil énergétique":
      "Consiglio energetico",
  },

  pt: {
    "Énergie générale":
      "Energia geral",

    "Votre climat énergétique":
      "Seu clima energético",

    "Tendance dominante":
      "Tendência dominante",

    "sur 100":
      "de 100",

    "Niveau d’énergie":
      "Nível de energia",

    "Points à retenir":
      "Pontos principais",

    "Conseil énergétique":
      "Conselho energético",
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
      "HoroscopeEnergy.tsx",
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

function replaceDynamicEnergyValues(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /const\s+periodLabel\s*=\s*formatHoroscopePeriodLabel\(\s*period\s*\);/g,
    `const periodLabel =
    __energyLocalizedPeriodLabel(period);`,
  );

  output = output.replace(
    /\{identity\.zodiacSignLabel\}/g,
    "{__energyLocalizeDynamicText(identity.zodiacSignLabel)}",
  );

  output = output.replace(
    /\{content\.energy\.title\}/g,
    "{__energyLocalizeDynamicText(content.energy.title)}",
  );

  output = output.replace(
    /\{content\.energy\.introduction\}/g,
    "{__energyLocalizeDynamicText(content.energy.introduction)}",
  );

  output = output.replace(
    /\{content\.energy\.text\}/g,
    "{__energyLocalizeDynamicText(content.energy.text)}",
  );

  output = output.replace(
    /\{highlight\}/g,
    "{__energyLocalizeDynamicText(highlight)}",
  );

  output = output.replace(
    /\{content\.energy\.advice\}/g,
    "{__energyLocalizeDynamicText(content.energy.advice)}",
  );

  return output;
}

function injectEnergyHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __energyLocalizeDynamicText",
    )
  ) {
    return source;
  }

  const months =
    MONTHS[locale];

  const zodiac =
    ZODIAC_LABELS[locale];

  const translations =
    TRANSLATIONS[locale];

  const helper = `
/* =========================================================
   HOROSCOPE ENERGY — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __ENERGY_MONTHS =
  ${JSON.stringify(months, null, 2)} as const;

const __ENERGY_FRENCH_MONTHS =
  ${JSON.stringify(FRENCH_MONTHS, null, 2)} as const;

const __ENERGY_ZODIAC_LABELS:
  Record<string, string> =
  ${JSON.stringify(zodiac, null, 2)};

const __ENERGY_TRANSLATIONS:
  Record<string, string> =
  ${JSON.stringify(translations, null, 2)};

function __energyLocalizeDynamicText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  let output =
    __ENERGY_TRANSLATIONS[value] ??
    value;

  __ENERGY_FRENCH_MONTHS.forEach(
    (frenchMonth, index) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${frenchMonth}\\\\b\`,
          "gi",
        ),
        __ENERGY_MONTHS[index],
      );
    },
  );

  Object.entries(
    __ENERGY_ZODIAC_LABELS,
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

function __energyFormatIsoDate(
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
    return __energyLocalizeDynamicText(
      isoDate,
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  ${
    locale === "en"
      ? 'return `${__ENERGY_MONTHS[month - 1]} ${day}, ${year}`;'
      : locale === "de"
        ? 'return `${day}. ${__ENERGY_MONTHS[month - 1]} ${year}`;'
        : locale === "es"
          ? 'return `${day} de ${__ENERGY_MONTHS[month - 1]} de ${year}`;'
          : locale === "pt"
            ? 'return `${day} de ${__ENERGY_MONTHS[month - 1]} de ${year}`;'
            : 'return `${day} ${__ENERGY_MONTHS[month - 1]} ${year}`;'
  }
}

function __energyLocalizedPeriodLabel(
  period: HoroscopeSectionProps["period"],
): string {
  if (period.type === "day") {
    return __energyFormatIsoDate(
      period.startDate,
    );
  }

  const match =
    period.startDate?.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __energyLocalizeDynamicText(
      period.label ||
      period.startDate ||
      "",
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);

  if (period.type === "month") {
    return \`\${__ENERGY_MONTHS[month - 1]} \${year}\`;
  }

  return String(year);
}

/* =========================================================
   END HOROSCOPE ENERGY — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeEnergy";

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

export function localizeHoroscopeEnergy(
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
    replaceDynamicEnergyValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectEnergyHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
