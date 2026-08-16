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
    "Horoscope mensuel": "Monthly horoscope",
    "Les grandes énergies du mois": "The major energies of the month",
    "Votre climat astrologique": "Your astrological climate",
    "Votre conseil": "Your guidance",
    "Comment ces énergies se combinent": "How these energies combine",
    "Conseil astrologique": "Astrological guidance",
  },
  es: {
    "Horoscope mensuel": "Horóscopo mensual",
    "Les grandes énergies du mois": "Las grandes energías del mes",
    "Votre climat astrologique": "Su clima astrológico",
    "Votre conseil": "Su consejo",
    "Comment ces énergies se combinent": "Cómo se combinan estas energías",
    "Conseil astrologique": "Consejo astrológico",
  },
  de: {
    "Horoscope mensuel": "Monatshoroskop",
    "Les grandes énergies du mois": "Die wichtigsten Energien des Monats",
    "Votre climat astrologique": "Ihr astrologisches Klima",
    "Votre conseil": "Ihr Rat",
    "Comment ces énergies se combinent": "Wie diese Energien zusammenwirken",
    "Conseil astrologique": "Astrologischer Rat",
  },
  it: {
    "Horoscope mensuel": "Oroscopo mensile",
    "Les grandes énergies du mois": "Le grandi energie del mese",
    "Votre climat astrologique": "Il tuo clima astrologico",
    "Votre conseil": "Il tuo consiglio",
    "Comment ces énergies se combinent": "Come si combinano queste energie",
    "Conseil astrologique": "Consiglio astrologico",
  },
  pt: {
    "Horoscope mensuel": "Horóscopo mensal",
    "Les grandes énergies du mois": "As grandes energias do mês",
    "Votre climat astrologique": "Seu clima astrológico",
    "Votre conseil": "Seu conselho",
    "Comment ces énergies se combinent": "Como essas energias se combinam",
    "Conseil astrologique": "Conselho astrológico",
  },
};

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

  function visit(node: ts.Node): void {
    if (ts.isJsxText(node)) {
      const raw =
        node.getText(sourceFile);

      const trimmed =
        raw.trim();

      const translated =
        translations[trimmed];

      if (
        translated &&
        translated !== trimmed
      ) {
        const startIndex =
          raw.indexOf(trimmed);

        replacements.push({
          start:
            node.getStart(sourceFile),
          end:
            node.getEnd(),
          value:
            raw.slice(0, startIndex) +
            translated +
            raw.slice(
              startIndex +
                trimmed.length,
            ),
        });
      }
    }

    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    ) {
      const translated =
        translations[node.text];

      if (
        translated &&
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

    ts.forEachChild(node, visit);
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

function localizeMonthFormatter(
  source: string,
  locale: NonFrenchLocale,
): string {
  const localeTag =
    LOCALE_TAGS[locale];

  let output = source;

  output = output.replace(
    /function formatFrenchMonthReferences\(/g,
    "function formatLocalizedMonthReferences(",
  );

  output = output.replace(
    /new Intl\.DateTimeFormat\(\s*"fr-CA",/g,
    `new Intl.DateTimeFormat(\n          ${JSON.stringify(localeTag)},`,
  );

  output = output.replace(
    /formatFrenchMonthReferences\(/g,
    "formatLocalizedMonthReferences(",
  );

  return output;
}

export function localizeHoroscopeMonthMajorEnergies(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
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
    localizeMonthFormatter(
      source,
      normalizedLocale,
    );

  localized =
    localizeStaticText(
      localized,
      translations,
    );

  return localized;
}
