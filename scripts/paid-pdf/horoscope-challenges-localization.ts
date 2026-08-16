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
    "Défi astrologique":
      "Astrological challenge",

    "Comment avancer":
      "How to move forward",

    "Défis de la période":
      "Challenges of the period",

    "Ce qui demande votre attention":
      "What needs your attention",

    "Regard sur la période":
      "A look at this period",

    "Cette période vous invite à observer les zones de tension avec lucidité. Chaque défi peut révéler une force cachée, une limite à respecter ou une nouvelle manière d’avancer.":
      "This period invites you to look clearly at areas of tension. Each challenge can reveal a hidden strength, a boundary to respect, or a new way forward.",

    "Les défis de cette journée vous invitent à agir avec davantage de discernement.":
      "The challenges of this day invite you to act with greater discernment.",

    "Vos principaux défis":
      "Your main challenges",

    "Une période plutôt fluide":
      "A relatively smooth period",

    "Aucun défi majeur n’est mis en évidence pour cette période. Restez toutefois attentive aux petits signaux qui pourraient vous inviter à ajuster votre rythme.":
      "No major challenge stands out during this period. However, remain attentive to subtle signs that may invite you to adjust your pace.",

    "Discernement":
      "Discernment",

    "DISCERNEMENT":
      "DISCERNMENT",

    "Balance":
      "Balance",

    "Transformer le défi":
      "Transforming the challenge",

    "Un défi astrologique n’annonce pas un échec. Il révèle plutôt un domaine dans lequel votre patience, votre conscience et votre capacité d’adaptation peuvent devenir de véritables forces.":
      "An astrological challenge does not predict failure. Instead, it reveals an area where your patience, awareness, and ability to adapt can become genuine strengths.",
  },

  es: {
    "Défi astrologique":
      "Desafío astrológico",

    "Comment avancer":
      "Cómo avanzar",

    "Défis de la période":
      "Desafíos del período",

    "Ce qui demande votre attention":
      "Lo que requiere su atención",

    "Regard sur la période":
      "Una mirada al período",

    "Cette période vous invite à observer les zones de tension avec lucidité. Chaque défi peut révéler une force cachée, une limite à respecter ou une nouvelle manière d’avancer.":
      "Este período le invita a observar con claridad las áreas de tensión. Cada desafío puede revelar una fortaleza oculta, un límite que respetar o una nueva manera de avanzar.",

    "Les défis de cette journée vous invitent à agir avec davantage de discernement.":
      "Los desafíos de este día le invitan a actuar con mayor discernimiento.",

    "Vos principaux défis":
      "Sus principales desafíos",

    "Une période plutôt fluide":
      "Un período bastante fluido",

    "Aucun défi majeur n’est mis en évidence pour cette période. Restez toutefois attentive aux petits signaux qui pourraient vous inviter à ajuster votre rythme.":
      "No se destaca ningún desafío importante durante este período. Sin embargo, permanezca atento a las pequeñas señales que podrían invitarle a ajustar su ritmo.",

    "Discernement":
      "Discernimiento",

    "DISCERNEMENT":
      "DISCERNIMIENTO",

    "Balance":
      "Equilibrio",

    "Transformer le défi":
      "Transformar el desafío",

    "Un défi astrologique n’annonce pas un échec. Il révèle plutôt un domaine dans lequel votre patience, votre conscience et votre capacité d’adaptation peuvent devenir de véritables forces.":
      "Un desafío astrológico no anuncia un fracaso. Más bien revela un ámbito en el que su paciencia, su conciencia y su capacidad de adaptación pueden convertirse en verdaderas fortalezas.",
  },

  de: {
    "Défi astrologique":
      "Astrologische Herausforderung",

    "Comment avancer":
      "Wie Sie vorankommen",

    "Défis de la période":
      "Herausforderungen dieser Phase",

    "Ce qui demande votre attention":
      "Was Ihre Aufmerksamkeit erfordert",

    "Regard sur la période":
      "Blick auf diese Phase",

    "Cette période vous invite à observer les zones de tension avec lucidité. Chaque défi peut révéler une force cachée, une limite à respecter ou une nouvelle manière d’avancer.":
      "Diese Phase lädt Sie dazu ein, Spannungsfelder bewusst und klar zu betrachten. Jede Herausforderung kann eine verborgene Stärke, eine zu respektierende Grenze oder einen neuen Weg nach vorn aufzeigen.",

    "Les défis de cette journée vous invitent à agir avec davantage de discernement.":
      "Die Herausforderungen dieses Tages laden Sie dazu ein, mit mehr Urteilsvermögen zu handeln.",

    "Vos principaux défis":
      "Ihre wichtigsten Herausforderungen",

    "Une période plutôt fluide":
      "Eine eher harmonische Phase",

    "Aucun défi majeur n’est mis en évidence pour cette période. Restez toutefois attentive aux petits signaux qui pourraient vous inviter à ajuster votre rythme.":
      "Für diese Phase zeichnet sich keine größere Herausforderung ab. Achten Sie dennoch auf kleine Signale, die Sie dazu anregen könnten, Ihren Rhythmus anzupassen.",

    "Discernement":
      "Urteilsvermögen",

    "DISCERNEMENT":
      "URTEILSVERMÖGEN",

    "Balance":
      "Gleichgewicht",

    "Transformer le défi":
      "Die Herausforderung verwandeln",

    "Un défi astrologique n’annonce pas un échec. Il révèle plutôt un domaine dans lequel votre patience, votre conscience et votre capacité d’adaptation peuvent devenir de véritables forces.":
      "Eine astrologische Herausforderung kündigt kein Scheitern an. Sie zeigt vielmehr einen Bereich, in dem Ihre Geduld, Ihr Bewusstsein und Ihre Anpassungsfähigkeit zu echten Stärken werden können.",
  },

  it: {
    "Défi astrologique":
      "Sfida astrologica",

    "Comment avancer":
      "Come andare avanti",

    "Défis de la période":
      "Sfide del periodo",

    "Ce qui demande votre attention":
      "Ciò che richiede la tua attenzione",

    "Regard sur la période":
      "Uno sguardo al periodo",

    "Cette période vous invite à observer les zones de tension avec lucidité. Chaque défi peut révéler une force cachée, une limite à respecter ou une nouvelle manière d’avancer.":
      "Questo periodo ti invita a osservare con lucidità le aree di tensione. Ogni sfida può rivelare una forza nascosta, un limite da rispettare o un nuovo modo di andare avanti.",

    "Les défis de cette journée vous invitent à agir avec davantage de discernement.":
      "Le sfide di questa giornata ti invitano ad agire con maggiore discernimento.",

    "Vos principaux défis":
      "Le tue sfide principali",

    "Une période plutôt fluide":
      "Un periodo piuttosto fluido",

    "Aucun défi majeur n’est mis en évidence pour cette période. Restez toutefois attentive aux petits signaux qui pourraient vous inviter à ajuster votre rythme.":
      "In questo periodo non emerge alcuna sfida importante. Rimani comunque attento ai piccoli segnali che potrebbero invitarti ad adattare il tuo ritmo.",

    "Discernement":
      "Discernimento",

    "DISCERNEMENT":
      "DISCERNIMENTO",

    "Balance":
      "Equilibrio",

    "Transformer le défi":
      "Trasformare la sfida",

    "Un défi astrologique n’annonce pas un échec. Il révèle plutôt un domaine dans lequel votre patience, votre conscience et votre capacité d’adaptation peuvent devenir de véritables forces.":
      "Una sfida astrologica non annuncia un fallimento. Rivela piuttosto un ambito in cui la tua pazienza, la tua consapevolezza e la tua capacità di adattamento possono diventare autentici punti di forza.",
  },

  pt: {
    "Défi astrologique":
      "Desafio astrológico",

    "Comment avancer":
      "Como avançar",

    "Défis de la période":
      "Desafios do período",

    "Ce qui demande votre attention":
      "O que requer sua atenção",

    "Regard sur la période":
      "Um olhar sobre o período",

    "Cette période vous invite à observer les zones de tension avec lucidité. Chaque défi peut révéler une force cachée, une limite à respecter ou une nouvelle manière d’avancer.":
      "Este período convida você a observar com clareza as áreas de tensão. Cada desafio pode revelar uma força oculta, um limite a respeitar ou uma nova maneira de avançar.",

    "Les défis de cette journée vous invitent à agir avec davantage de discernement.":
      "Os desafios deste dia convidam você a agir com mais discernimento.",

    "Vos principaux défis":
      "Seus principais desafios",

    "Une période plutôt fluide":
      "Um período relativamente tranquilo",

    "Aucun défi majeur n’est mis en évidence pour cette période. Restez toutefois attentive aux petits signaux qui pourraient vous inviter à ajuster votre rythme.":
      "Nenhum grande desafio se destaca neste período. Ainda assim, fique atento aos pequenos sinais que podem indicar a necessidade de ajustar seu ritmo.",

    "Discernement":
      "Discernimento",

    "DISCERNEMENT":
      "DISCERNIMENTO",

    "Balance":
      "Equilíbrio",

    "Transformer le défi":
      "Transformar o desafio",

    "Un défi astrologique n’annonce pas un échec. Il révèle plutôt un domaine dans lequel votre patience, votre conscience et votre capacité d’adaptation peuvent devenir de véritables forces.":
      "Um desafio astrológico não anuncia um fracasso. Ele revela uma área em que sua paciência, sua consciência e sua capacidade de adaptação podem se transformar em verdadeiras forças.",
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
      "HoroscopeChallenges.tsx",
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

function replaceDynamicChallengeValues(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /const\s+periodLabel\s*=\s*formatHoroscopePeriodLabel\(\s*period\s*\);/g,
    `const periodLabel =
    __challengesLocalizedPeriodLabel(
      period,
    );`,
  );

  /*
   * IMPORTANT :
   * Le signe astrologique est traité séparément.
   * On ne doit pas appliquer ZODIAC_LABELS aux thèmes,
   * sinon "Balance" devient "Libra".
   */
  output = output.replace(
    /\{identity\.zodiacSignLabel\}/g,
    "{__challengesLocalizeZodiacSign(identity.zodiacSignLabel)}",
  );

  output = output.replace(
    /\{challenge\.title\}/g,
    "{__challengesLocalizeDynamicText(challenge.title)}",
  );

  output = output.replace(
    /\{challenge\.theme\}/g,
    "{__challengesLocalizeDynamicText(challenge.theme)}",
  );

  output = output.replace(
    /\{challenge\.description\}/g,
    "{__challengesLocalizeDynamicText(challenge.description)}",
  );

  output = output.replace(
    /\{challenge\.advice\}/g,
    "{__challengesLocalizeDynamicText(challenge.advice)}",
  );

  output = output.replace(
    /\{content\.challengesIntroduction\s*\|\|/g,
    "{__challengesLocalizeDynamicText(content.challengesIntroduction) ||",
  );

  return output;
}

function injectChallengeHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __challengesLocalizeDynamicText",
    )
  ) {
    return source;
  }

  const helper = `
/* =========================================================
   HOROSCOPE CHALLENGES — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __CHALLENGES_MONTHS =
  ${JSON.stringify(MONTHS[locale], null, 2)} as const;

const __CHALLENGES_FRENCH_MONTHS =
  ${JSON.stringify(FRENCH_MONTHS, null, 2)} as const;

const __CHALLENGES_ZODIAC_LABELS:
  Record<string, string> =
  ${JSON.stringify(ZODIAC_LABELS[locale], null, 2)};

const __CHALLENGES_TRANSLATIONS:
  Record<string, string> =
  ${JSON.stringify(TRANSLATIONS[locale], null, 2)};

function __challengesLocalizeZodiacSign(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  return (
    __CHALLENGES_ZODIAC_LABELS[value] ??
    value
  );
}

function __challengesLocalizeDynamicText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  let output =
    __CHALLENGES_TRANSLATIONS[value] ??
    value;

  /*
   * On traduit les mois si une valeur dynamique
   * en contient un.
   *
   * IMPORTANT :
   * On ne traduit PAS les signes astrologiques ici.
   * Cela évite de transformer le thème "Balance"
   * en "Libra".
   */
  __CHALLENGES_FRENCH_MONTHS.forEach(
    (frenchMonth, index) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${frenchMonth}\\\\b\`,
          "gi",
        ),
        __CHALLENGES_MONTHS[index],
      );
    },
  );

  return output;
}

function __challengesFormatIsoDate(
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
    return __challengesLocalizeDynamicText(
      isoDate,
    );
  }

  const year =
    Number(match[1]);

  const month =
    Number(match[2]);

  const day =
    Number(match[3]);

  ${
    locale === "en"
      ? 'return `${__CHALLENGES_MONTHS[month - 1]} ${day}, ${year}`;'
      : locale === "de"
        ? 'return `${day}. ${__CHALLENGES_MONTHS[month - 1]} ${year}`;'
        : locale === "es"
          ? 'return `${day} de ${__CHALLENGES_MONTHS[month - 1]} de ${year}`;'
          : locale === "pt"
            ? 'return `${day} de ${__CHALLENGES_MONTHS[month - 1]} de ${year}`;'
            : 'return `${day} ${__CHALLENGES_MONTHS[month - 1]} ${year}`;'
  }
}

function __challengesLocalizedPeriodLabel(
  period: HoroscopeSectionProps["period"],
): string {
  if (period.type === "day") {
    return __challengesFormatIsoDate(
      period.startDate,
    );
  }

  const match =
    period.startDate?.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __challengesLocalizeDynamicText(
      period.label ||
      period.startDate ||
      "",
    );
  }

  const year =
    Number(match[1]);

  const month =
    Number(match[2]);

  if (period.type === "month") {
    return \`\${__CHALLENGES_MONTHS[
      month - 1
    ]} \${year}\`;
  }

  return String(year);
}

/* =========================================================
   END HOROSCOPE CHALLENGES — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeChallenges";

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

export function localizeHoroscopeChallenges(
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
    replaceDynamicChallengeValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectChallengeHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
