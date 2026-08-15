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
    /*
     * Chaînes JS / TS normales.
     */
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

    /*
     * Texte JSX direct :
     *
     * <Text>
     *   Période astrologique
     * </Text>
     */
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

export function localizeHoroscopeCover(
  source: string,
  locale: PaidPdfLocale,
): string {
  /*
   * Le français reste exactement
   * le fichier source.
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

  return localizeSafeLiterals(
    source,
    translations,
  );
}
