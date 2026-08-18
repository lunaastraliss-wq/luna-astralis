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
    "Votre signe":
      "Your sign",

    "Guidance intérieure":
      "Inner guidance",

    "Votre mantra du mois":
      "Your mantra for the month",

    "À répéter tout au long du mois":
      "Repeat throughout the month",

    "Votre pratique intérieure":
      "Your inner practice",

    "Direction du mois":
      "Direction for the month",

    "Votre intention":
      "Your intention",

    "Parole consciente":
      "Conscious words",

    "Votre affirmation":
      "Your affirmation",

    "Message de Luna Astralis":
      "Message from Luna Astralis",
  },

  es: {
    "Votre signe":
      "Su signo",

    "Guidance intérieure":
      "Guía interior",

    "Votre mantra du mois":
      "Su mantra del mes",

    "À répéter tout au long du mois":
      "Para repetir durante todo el mes",

    "Votre pratique intérieure":
      "Su práctica interior",

    "Direction du mois":
      "Dirección del mes",

    "Votre intention":
      "Su intención",

    "Parole consciente":
      "Palabra consciente",

    "Votre affirmation":
      "Su afirmación",

    "Message de Luna Astralis":
      "Mensaje de Luna Astralis",
  },

  de: {
    "Votre signe":
      "Ihr Zeichen",

    "Guidance intérieure":
      "Innere Führung",

    "Votre mantra du mois":
      "Ihr Mantra des Monats",

    "À répéter tout au long du mois":
      "Den ganzen Monat über wiederholen",

    "Votre pratique intérieure":
      "Ihre innere Praxis",

    "Direction du mois":
      "Ausrichtung des Monats",

    "Votre intention":
      "Ihre Intention",

    "Parole consciente":
      "Bewusste Worte",

    "Votre affirmation":
      "Ihre Affirmation",

    "Message de Luna Astralis":
      "Botschaft von Luna Astralis",
  },

  it: {
    "Votre signe":
      "Il tuo segno",

    "Guidance intérieure":
      "Guida interiore",

    "Votre mantra du mois":
      "Il tuo mantra del mese",

    "À répéter tout au long du mois":
      "Da ripetere durante tutto il mese",

    "Votre pratique intérieure":
      "La tua pratica interiore",

    "Direction du mois":
      "Direzione del mese",

    "Votre intention":
      "La tua intenzione",

    "Parole consciente":
      "Parola consapevole",

    "Votre affirmation":
      "La tua affermazione",

    "Message de Luna Astralis":
      "Messaggio di Luna Astralis",
  },

  pt: {
    "Votre signe":
      "Seu signo",

    "Guidance intérieure":
      "Orientação interior",

    "Votre mantra du mois":
      "Seu mantra do mês",

    "À répéter tout au long du mois":
      "Para repetir ao longo do mês",

    "Votre pratique intérieure":
      "Sua prática interior",

    "Direction du mois":
      "Direção do mês",

    "Votre intention":
      "Sua intenção",

    "Parole consciente":
      "Palavra consciente",

    "Votre affirmation":
      "Sua afirmação",

    "Message de Luna Astralis":
      "Mensagem de Luna Astralis",
  },
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
   AST SAFE REPLACEMENT
========================================================= */

function localizeSafeLiterals(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "HoroscopeMonthMantra.tsx",
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

function replaceDynamicValues(
  source: string,
): string {
  let output =
    source;

  /*
   * Badge astrologique.
   */
  output =
    output.replace(
      /\{identity\.zodiacSignLabel\}/g,
      "{__monthMantraLocalizeZodiac(identity.zodiacSignLabel)}",
    );

  /*
   * Fallback du personLabel.
   *
   * Le littéral "Votre signe" sera aussi traité
   * par l'AST, mais on garde cette partie ici
   * pour la logique dynamique du signe.
   */
  output =
    output.replace(
      /identity\.zodiacSignLabel\s*\|\|\s*"Votre signe"/,
      `__monthMantraLocalizeZodiac(
      identity.zodiacSignLabel,
    ) ||
    "Votre signe"`,
    );

  return output;
}

/* =========================================================
   GENERATED HELPERS
========================================================= */

function injectHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __monthMantraLocalizeZodiac",
    )
  ) {
    return source;
  }

  const helper = `
/* =========================================================
   MONTH MANTRA — GENERATED LOCALE HELPERS
========================================================= */

const __MONTH_MANTRA_ZODIAC:
  Record<string, string> =
  ${JSON.stringify(
    ZODIAC_LABELS[locale],
    null,
    2,
  )};

function __monthMantraLocalizeZodiac(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  return (
    __MONTH_MANTRA_ZODIAC[
      value
    ] ??
    value
  );
}

/* =========================================================
   END MONTH MANTRA — GENERATED HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeMonthMantra";

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

export function localizeHoroscopeMonthMantra(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  if (
    !source.includes(
      "HoroscopeMonthMantra",
    )
  ) {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    TRANSLATIONS[
      normalizedLocale
    ];

  if (!translations) {
    return source;
  }

  let localized =
    replaceDynamicValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
