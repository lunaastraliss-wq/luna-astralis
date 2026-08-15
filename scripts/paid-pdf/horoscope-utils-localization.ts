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
    "Bélier": "Aries",
    "Taureau": "Taurus",
    "Gémeaux": "Gemini",
    "Cancer": "Cancer",
    "Lion": "Leo",
    "Vierge": "Virgo",
    "Balance": "Libra",
    "Scorpion": "Scorpio",
    "Sagittaire": "Sagittarius",
    "Capricorne": "Capricorn",
    "Verseau": "Aquarius",
    "Poissons": "Pisces",

    "Horoscope du jour": "Daily Horoscope",
    "Horoscope du mois": "Monthly Horoscope",
    "Horoscope de l’année": "Yearly Horoscope",

    "janvier": "January",
    "février": "February",
    "mars": "March",
    "avril": "April",
    "mai": "May",
    "juin": "June",
    "juillet": "July",
    "août": "August",
    "septembre": "September",
    "octobre": "October",
    "novembre": "November",
    "décembre": "December",

    "Vous": "You",
  },

  es: {
    "Bélier": "Aries",
    "Taureau": "Tauro",
    "Gémeaux": "Géminis",
    "Cancer": "Cáncer",
    "Lion": "Leo",
    "Vierge": "Virgo",
    "Balance": "Libra",
    "Scorpion": "Escorpio",
    "Sagittaire": "Sagitario",
    "Capricorne": "Capricornio",
    "Verseau": "Acuario",
    "Poissons": "Piscis",

    "Horoscope du jour": "Horóscopo del día",
    "Horoscope du mois": "Horóscopo del mes",
    "Horoscope de l’année": "Horóscopo del año",

    "janvier": "enero",
    "février": "febrero",
    "mars": "marzo",
    "avril": "abril",
    "mai": "mayo",
    "juin": "junio",
    "juillet": "julio",
    "août": "agosto",
    "septembre": "septiembre",
    "octobre": "octubre",
    "novembre": "noviembre",
    "décembre": "diciembre",

    "Vous": "Usted",
  },

  de: {
    "Bélier": "Widder",
    "Taureau": "Stier",
    "Gémeaux": "Zwillinge",
    "Cancer": "Krebs",
    "Lion": "Löwe",
    "Vierge": "Jungfrau",
    "Balance": "Waage",
    "Scorpion": "Skorpion",
    "Sagittaire": "Schütze",
    "Capricorne": "Steinbock",
    "Verseau": "Wassermann",
    "Poissons": "Fische",

    "Horoscope du jour": "Tageshoroskop",
    "Horoscope du mois": "Monatshoroskop",
    "Horoscope de l’année": "Jahreshoroskop",

    "janvier": "Januar",
    "février": "Februar",
    "mars": "März",
    "avril": "April",
    "mai": "Mai",
    "juin": "Juni",
    "juillet": "Juli",
    "août": "August",
    "septembre": "September",
    "octobre": "Oktober",
    "novembre": "November",
    "décembre": "Dezember",

    "Vous": "Sie",
  },

  it: {
    "Bélier": "Ariete",
    "Taureau": "Toro",
    "Gémeaux": "Gemelli",
    "Cancer": "Cancro",
    "Lion": "Leone",
    "Vierge": "Vergine",
    "Balance": "Bilancia",
    "Scorpion": "Scorpione",
    "Sagittaire": "Sagittario",
    "Capricorne": "Capricorno",
    "Verseau": "Acquario",
    "Poissons": "Pesci",

    "Horoscope du jour": "Oroscopo del giorno",
    "Horoscope du mois": "Oroscopo del mese",
    "Horoscope de l’année": "Oroscopo dell’anno",

    "janvier": "gennaio",
    "février": "febbraio",
    "mars": "marzo",
    "avril": "aprile",
    "mai": "maggio",
    "juin": "giugno",
    "juillet": "luglio",
    "août": "agosto",
    "septembre": "settembre",
    "octobre": "ottobre",
    "novembre": "novembre",
    "décembre": "dicembre",

    "Vous": "Tu",
  },

  pt: {
    "Bélier": "Áries",
    "Taureau": "Touro",
    "Gémeaux": "Gêmeos",
    "Cancer": "Câncer",
    "Lion": "Leão",
    "Vierge": "Virgem",
    "Balance": "Libra",
    "Scorpion": "Escorpião",
    "Sagittaire": "Sagitário",
    "Capricorne": "Capricórnio",
    "Verseau": "Aquário",
    "Poissons": "Peixes",

    "Horoscope du jour": "Horóscopo do dia",
    "Horoscope du mois": "Horóscopo do mês",
    "Horoscope de l’année": "Horóscopo do ano",

    "janvier": "janeiro",
    "février": "fevereiro",
    "mars": "março",
    "avril": "abril",
    "mai": "maio",
    "juin": "junho",
    "juillet": "julho",
    "août": "agosto",
    "septembre": "setembro",
    "octobre": "outubro",
    "novembre": "novembro",
    "décembre": "dezembro",

    "Vous": "Você",
  },
};

const DISPLAY_OBJECTS =
  new Set([
    "ZODIAC_LABELS",
    "PERIOD_LABELS",
    "MONTHS_FR",
  ]);

function getNearestVariableName(
  node: ts.Node,
): string | null {
  let current: ts.Node | undefined =
    node.parent;

  while (current) {
    if (
      ts.isVariableDeclaration(
        current,
      ) &&
      ts.isIdentifier(
        current.name,
      )
    ) {
      return current.name.text;
    }

    if (
      ts.isFunctionLike(current) ||
      ts.isSourceFile(current)
    ) {
      break;
    }

    current = current.parent;
  }

  return null;
}

function isSafeDisplayLiteral(
  node: ts.StringLiteralLike,
): boolean {
  const variableName =
    getNearestVariableName(node);

  if (
    variableName &&
    DISPLAY_OBJECTS.has(variableName)
  ) {
    /*
     * Pour ZODIAC_LABELS et PERIOD_LABELS :
     * on ne traduit que les VALEURS, jamais les clés.
     */
    if (
      ts.isPropertyAssignment(
        node.parent,
      ) &&
      node.parent.name === node
    ) {
      return false;
    }

    return true;
  }

  /*
   * Le fallback visible "Vous".
   */
  if (
    node.text === "Vous"
  ) {
    return true;
  }

  return false;
}

function localizeSafeLiterals(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "HoroscopePdfUtils.ts",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS,
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
      (
        ts.isStringLiteral(node) ||
        ts.isNoSubstitutionTemplateLiteral(
          node,
        )
      ) &&
      isSafeDisplayLiteral(node)
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

export function localizeHoroscopePdfUtils(
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
