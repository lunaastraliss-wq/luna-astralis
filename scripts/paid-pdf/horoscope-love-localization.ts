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
    "Point affectif":
      "Emotional insight",

    "Amour et relations":
      "Love and relationships",

    "Votre climat affectif":
      "Your emotional climate",

    "Tendance sentimentale":
      "Romantic trend",

    "sur 100":
      "out of 100",

    "Potentiel affectif":
      "Emotional potential",

    "Les mouvements du cœur":
      "Movements of the heart",

    "Écouter vos émotions":
      "Listen to your emotions",

    "Prenez le temps de reconnaître ce que vous ressentez avant de réagir ou de prendre une décision importante.":
      "Take time to recognize what you are feeling before reacting or making an important decision.",

    "Faire vivre le lien":
      "Nurture the connection",

    "Une parole claire, une attention sincère ou un geste simple peut réchauffer une relation et rétablir la confiance.":
      "Clear words, sincere attention, or a simple gesture can warm a relationship and restore trust.",

    "Conseil du cœur":
      "Guidance from the heart",
  },

  es: {
    "Point affectif":
      "Clave afectiva",

    "Amour et relations":
      "Amor y relaciones",

    "Votre climat affectif":
      "Su clima afectivo",

    "Tendance sentimentale":
      "Tendencia sentimental",

    "sur 100":
      "de 100",

    "Potentiel affectif":
      "Potencial afectivo",

    "Les mouvements du cœur":
      "Los movimientos del corazón",

    "Écouter vos émotions":
      "Escuche sus emociones",

    "Prenez le temps de reconnaître ce que vous ressentez avant de réagir ou de prendre une décision importante.":
      "Tómese el tiempo para reconocer lo que siente antes de reaccionar o tomar una decisión importante.",

    "Faire vivre le lien":
      "Cultivar el vínculo",

    "Une parole claire, une attention sincère ou un geste simple peut réchauffer une relation et rétablir la confiance.":
      "Unas palabras claras, una atención sincera o un gesto sencillo pueden fortalecer una relación y restablecer la confianza.",

    "Conseil du cœur":
      "Consejo del corazón",
  },

  de: {
    "Point affectif":
      "Emotionaler Impuls",

    "Amour et relations":
      "Liebe und Beziehungen",

    "Votre climat affectif":
      "Ihr emotionales Klima",

    "Tendance sentimentale":
      "Emotionale Tendenz",

    "sur 100":
      "von 100",

    "Potentiel affectif":
      "Emotionales Potenzial",

    "Les mouvements du cœur":
      "Bewegungen des Herzens",

    "Écouter vos émotions":
      "Hören Sie auf Ihre Gefühle",

    "Prenez le temps de reconnaître ce que vous ressentez avant de réagir ou de prendre une décision importante.":
      "Nehmen Sie sich Zeit, Ihre Gefühle wahrzunehmen, bevor Sie reagieren oder eine wichtige Entscheidung treffen.",

    "Faire vivre le lien":
      "Die Verbindung pflegen",

    "Une parole claire, une attention sincère ou un geste simple peut réchauffer une relation et rétablir la confiance.":
      "Klare Worte, aufrichtige Aufmerksamkeit oder eine einfache Geste können eine Beziehung stärken und Vertrauen wiederherstellen.",

    "Conseil du cœur":
      "Rat des Herzens",
  },

  it: {
    "Point affectif":
      "Punto affettivo",

    "Amour et relations":
      "Amore e relazioni",

    "Votre climat affectif":
      "Il tuo clima affettivo",

    "Tendance sentimentale":
      "Tendenza sentimentale",

    "sur 100":
      "su 100",

    "Potentiel affectif":
      "Potenziale affettivo",

    "Les mouvements du cœur":
      "I movimenti del cuore",

    "Écouter vos émotions":
      "Ascolta le tue emozioni",

    "Prenez le temps de reconnaître ce que vous ressentez avant de réagir ou de prendre une décision importante.":
      "Prenditi il tempo di riconoscere ciò che provi prima di reagire o prendere una decisione importante.",

    "Faire vivre le lien":
      "Coltiva il legame",

    "Une parole claire, une attention sincère ou un geste simple peut réchauffer une relation et rétablir la confiance.":
      "Parole chiare, un'attenzione sincera o un semplice gesto possono rafforzare una relazione e ristabilire la fiducia.",

    "Conseil du cœur":
      "Consiglio del cuore",
  },

  pt: {
    "Point affectif":
      "Ponto afetivo",

    "Amour et relations":
      "Amor e relacionamentos",

    "Votre climat affectif":
      "Seu clima afetivo",

    "Tendance sentimentale":
      "Tendência sentimental",

    "sur 100":
      "de 100",

    "Potentiel affectif":
      "Potencial afetivo",

    "Les mouvements du cœur":
      "Os movimentos do coração",

    "Écouter vos émotions":
      "Escute suas emoções",

    "Prenez le temps de reconnaître ce que vous ressentez avant de réagir ou de prendre une décision importante.":
      "Reserve um tempo para reconhecer o que você sente antes de reagir ou tomar uma decisão importante.",

    "Faire vivre le lien":
      "Cultive o vínculo",

    "Une parole claire, une attention sincère ou un geste simple peut réchauffer une relation et rétablir la confiance.":
      "Palavras claras, atenção sincera ou um gesto simples podem fortalecer um relacionamento e restabelecer a confiança.",

    "Conseil du cœur":
      "Conselho do coração",
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
      "HoroscopeLove.tsx",
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

function replaceDynamicLoveValues(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /const\s+periodLabel\s*=\s*formatHoroscopePeriodLabel\(\s*period\s*\);/g,
    `const periodLabel =
    __loveLocalizedPeriodLabel(
      period,
    );`,
  );

  output = output.replace(
    /\{identity\.zodiacSignLabel\}/g,
    "{__loveLocalizeDynamicText(identity.zodiacSignLabel)}",
  );

  output = output.replace(
    /\{content\.love\.title\}/g,
    "{__loveLocalizeDynamicText(content.love.title)}",
  );

  output = output.replace(
    /\{content\.love\.introduction\}/g,
    "{__loveLocalizeDynamicText(content.love.introduction)}",
  );

  output = output.replace(
    /\{content\.love\.text\}/g,
    "{__loveLocalizeDynamicText(content.love.text)}",
  );

  output = output.replace(
    /\btext=\{highlight\}/g,
    "text={__loveLocalizeDynamicText(highlight)}",
  );

  output = output.replace(
    /\{content\.love\.advice\}/g,
    "{__loveLocalizeDynamicText(content.love.advice)}",
  );

  return output;
}

function injectLoveHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __loveLocalizeDynamicText",
    )
  ) {
    return source;
  }

  const helper = `
/* =========================================================
   HOROSCOPE LOVE — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __LOVE_MONTHS =
  ${JSON.stringify(MONTHS[locale], null, 2)} as const;

const __LOVE_FRENCH_MONTHS =
  ${JSON.stringify(FRENCH_MONTHS, null, 2)} as const;

const __LOVE_ZODIAC_LABELS:
  Record<string, string> =
  ${JSON.stringify(ZODIAC_LABELS[locale], null, 2)};

const __LOVE_TRANSLATIONS:
  Record<string, string> =
  ${JSON.stringify(TRANSLATIONS[locale], null, 2)};

function __loveLocalizeDynamicText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  let output =
    __LOVE_TRANSLATIONS[value] ??
    value;

  __LOVE_FRENCH_MONTHS.forEach(
    (frenchMonth, index) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${frenchMonth}\\\\b\`,
          "gi",
        ),
        __LOVE_MONTHS[index],
      );
    },
  );

  Object.entries(
    __LOVE_ZODIAC_LABELS,
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

function __loveFormatIsoDate(
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
    return __loveLocalizeDynamicText(
      isoDate,
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  ${
    locale === "en"
      ? 'return `${__LOVE_MONTHS[month - 1]} ${day}, ${year}`;'
      : locale === "de"
        ? 'return `${day}. ${__LOVE_MONTHS[month - 1]} ${year}`;'
        : locale === "es"
          ? 'return `${day} de ${__LOVE_MONTHS[month - 1]} de ${year}`;'
          : locale === "pt"
            ? 'return `${day} de ${__LOVE_MONTHS[month - 1]} de ${year}`;'
            : 'return `${day} ${__LOVE_MONTHS[month - 1]} ${year}`;'
  }
}

function __loveLocalizedPeriodLabel(
  period: HoroscopeSectionProps["period"],
): string {
  if (period.type === "day") {
    return __loveFormatIsoDate(
      period.startDate,
    );
  }

  const match =
    period.startDate?.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __loveLocalizeDynamicText(
      period.label ||
      period.startDate ||
      "",
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);

  if (period.type === "month") {
    return \`\${__LOVE_MONTHS[month - 1]} \${year}\`;
  }

  return String(year);
}

/* =========================================================
   END HOROSCOPE LOVE — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeLove";

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

export function localizeHoroscopeLove(
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
    replaceDynamicLoveValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectLoveHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
