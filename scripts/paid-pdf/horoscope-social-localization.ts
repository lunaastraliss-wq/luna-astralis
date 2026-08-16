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
    "Repère relationnel":
      "Relationship insight",

    "Écouter":
      "Listen",

    "Accueillez les paroles importantes avec attention avant de chercher à répondre ou à expliquer.":
      "Listen carefully to important words before trying to respond or explain.",

    "Clarifier":
      "Clarify",

    "Exprimez vos attentes simplement afin de limiter les malentendus et les interprétations inutiles.":
      "Express your expectations simply to reduce misunderstandings and unnecessary interpretations.",

    "Préserver":
      "Protect",

    "Gardez de l’espace pour vous lorsque les échanges deviennent trop exigeants ou dispersants.":
      "Keep some space for yourself when interactions become too demanding or distracting.",

    "Votre dynamique relationnelle":
      "Your relationship dynamics",

    "Cette période met en lumière votre manière d’entrer en relation, de communiquer et de trouver votre place auprès des autres.":
      "This period highlights the way you connect, communicate, and find your place among others.",

    "Votre vie sociale évolue selon la qualité de votre présence et la clarté de vos échanges. Les relations les plus constructives seront celles qui respectent vos besoins tout en laissant de la place à l’autre.":
      "Your social life evolves according to the quality of your presence and the clarity of your interactions. The most constructive relationships will respect your needs while leaving room for others.",

    "Choisissez un échange important à aborder avec calme, sincérité et ouverture.":
      "Choose one important conversation to approach with calm, sincerity, and openness.",

    "Vie sociale et entourage":
      "Social life and connections",

    "Vos relations et vos échanges":
      "Your relationships and interactions",

    "Climat relationnel de la période":
      "Relationship climate for this period",

    "sur 100":
      "out of 100",

    "Fluidité relationnelle":
      "Relationship flow",

    "Présence et ouverture":
      "Presence and openness",

    "Restez disponible aux échanges sans vous forcer. Une présence sincère vaut davantage qu’une disponibilité constante.":
      "Remain open to interactions without forcing yourself. Genuine presence matters more than constant availability.",

    "Limites et réciprocité":
      "Boundaries and reciprocity",

    "Préservez vos limites et observez si les efforts, l’écoute et l’attention circulent réellement dans les deux sens.":
      "Protect your boundaries and observe whether effort, listening, and attention truly flow both ways.",

    "Vos repères relationnels":
      "Your relationship insights",

    "Présence":
      "Presence",

    "Confiance":
      "Confidence",

    "Conseil relationnel":
      "Relationship advice",

    "Cette section présente une lecture astrologique de vos relations et ne remplace jamais votre jugement ni votre libre arbitre.":
      "This section provides an astrological perspective on your relationships and never replaces your judgment or free will.",
  },

  es: {
    "Repère relationnel":
      "Referencia relacional",

    "Écouter":
      "Escuchar",

    "Accueillez les paroles importantes avec attention avant de chercher à répondre ou à expliquer.":
      "Escuche con atención las palabras importantes antes de intentar responder o explicar.",

    "Clarifier":
      "Aclarar",

    "Exprimez vos attentes simplement afin de limiter les malentendus et les interprétations inutiles.":
      "Exprese sus expectativas de forma sencilla para limitar los malentendidos y las interpretaciones innecesarias.",

    "Préserver":
      "Preservar",

    "Gardez de l’espace pour vous lorsque les échanges deviennent trop exigeants ou dispersants.":
      "Reserve espacio para usted cuando los intercambios se vuelvan demasiado exigentes o dispersos.",

    "Votre dynamique relationnelle":
      "Su dinámica relacional",

    "Cette période met en lumière votre manière d’entrer en relation, de communiquer et de trouver votre place auprès des autres.":
      "Este período pone de relieve su manera de relacionarse, comunicarse y encontrar su lugar entre los demás.",

    "Votre vie sociale évolue selon la qualité de votre présence et la clarté de vos échanges. Les relations les plus constructives seront celles qui respectent vos besoins tout en laissant de la place à l’autre.":
      "Su vida social evoluciona según la calidad de su presencia y la claridad de sus intercambios. Las relaciones más constructivas serán aquellas que respeten sus necesidades y dejen espacio a los demás.",

    "Choisissez un échange important à aborder avec calme, sincérité et ouverture.":
      "Elija una conversación importante para abordar con calma, sinceridad y apertura.",

    "Vie sociale et entourage":
      "Vida social y entorno",

    "Vos relations et vos échanges":
      "Sus relaciones e intercambios",

    "Climat relationnel de la période":
      "Clima relacional del período",

    "sur 100":
      "de 100",

    "Fluidité relationnelle":
      "Fluidez relacional",

    "Présence et ouverture":
      "Presencia y apertura",

    "Restez disponible aux échanges sans vous forcer. Une présence sincère vaut davantage qu’une disponibilité constante.":
      "Manténgase abierto a los intercambios sin forzarse. Una presencia sincera vale más que una disponibilidad constante.",

    "Limites et réciprocité":
      "Límites y reciprocidad",

    "Préservez vos limites et observez si les efforts, l’écoute et l’attention circulent réellement dans les deux sens.":
      "Proteja sus límites y observe si el esfuerzo, la escucha y la atención fluyen realmente en ambos sentidos.",

    "Vos repères relationnels":
      "Sus referencias relacionales",

    "Présence":
      "Presencia",

    "Confiance":
      "Confianza",

    "Conseil relationnel":
      "Consejo relacional",

    "Cette section présente une lecture astrologique de vos relations et ne remplace jamais votre jugement ni votre libre arbitre.":
      "Esta sección ofrece una interpretación astrológica de sus relaciones y nunca sustituye su criterio ni su libre albedrío.",
  },

  de: {
    "Repère relationnel":
      "Beziehungsimpuls",

    "Écouter":
      "Zuhören",

    "Accueillez les paroles importantes avec attention avant de chercher à répondre ou à expliquer.":
      "Hören Sie wichtigen Worten aufmerksam zu, bevor Sie antworten oder erklären.",

    "Clarifier":
      "Klären",

    "Exprimez vos attentes simplement afin de limiter les malentendus et les interprétations inutiles.":
      "Drücken Sie Ihre Erwartungen einfach aus, um Missverständnisse und unnötige Interpretationen zu vermeiden.",

    "Préserver":
      "Bewahren",

    "Gardez de l’espace pour vous lorsque les échanges deviennent trop exigeants ou dispersants.":
      "Bewahren Sie Raum für sich, wenn Begegnungen zu fordernd oder zerstreuend werden.",

    "Votre dynamique relationnelle":
      "Ihre Beziehungsdynamik",

    "Cette période met en lumière votre manière d’entrer en relation, de communiquer et de trouver votre place auprès des autres.":
      "Diese Phase beleuchtet, wie Sie Beziehungen eingehen, kommunizieren und Ihren Platz im Umfeld anderer finden.",

    "Votre vie sociale évolue selon la qualité de votre présence et la clarté de vos échanges. Les relations les plus constructives seront celles qui respectent vos besoins tout en laissant de la place à l’autre.":
      "Ihr Sozialleben entwickelt sich entsprechend der Qualität Ihrer Präsenz und der Klarheit Ihrer Kommunikation. Die konstruktivsten Beziehungen respektieren Ihre Bedürfnisse und lassen zugleich Raum für andere.",

    "Choisissez un échange important à aborder avec calme, sincérité et ouverture.":
      "Wählen Sie ein wichtiges Gespräch, das Sie ruhig, aufrichtig und offen führen möchten.",

    "Vie sociale et entourage":
      "Sozialleben und Umfeld",

    "Vos relations et vos échanges":
      "Ihre Beziehungen und Begegnungen",

    "Climat relationnel de la période":
      "Beziehungsklima dieser Phase",

    "sur 100":
      "von 100",

    "Fluidité relationnelle":
      "Beziehungsfluss",

    "Présence et ouverture":
      "Präsenz und Offenheit",

    "Restez disponible aux échanges sans vous forcer. Une présence sincère vaut davantage qu’une disponibilité constante.":
      "Bleiben Sie offen für Begegnungen, ohne sich zu zwingen. Aufrichtige Präsenz ist wertvoller als ständige Verfügbarkeit.",

    "Limites et réciprocité":
      "Grenzen und Gegenseitigkeit",

    "Préservez vos limites et observez si les efforts, l’écoute et l’attention circulent réellement dans les deux sens.":
      "Wahren Sie Ihre Grenzen und beobachten Sie, ob Einsatz, Zuhören und Aufmerksamkeit tatsächlich in beide Richtungen fließen.",

    "Vos repères relationnels":
      "Ihre Beziehungsorientierung",

    "Présence":
      "Präsenz",

    "Confiance":
      "Vertrauen",

    "Conseil relationnel":
      "Beziehungsrat",

    "Cette section présente une lecture astrologique de vos relations et ne remplace jamais votre jugement ni votre libre arbitre.":
      "Dieser Abschnitt bietet eine astrologische Betrachtung Ihrer Beziehungen und ersetzt niemals Ihr Urteilsvermögen oder Ihren freien Willen.",
  },

  it: {
    "Repère relationnel":
      "Riferimento relazionale",

    "Écouter":
      "Ascoltare",

    "Accueillez les paroles importantes avec attention avant de chercher à répondre ou à expliquer.":
      "Ascolta con attenzione le parole importanti prima di cercare di rispondere o spiegare.",

    "Clarifier":
      "Chiarire",

    "Exprimez vos attentes simplement afin de limiter les malentendus et les interprétations inutiles.":
      "Esprimi le tue aspettative in modo semplice per limitare incomprensioni e interpretazioni inutili.",

    "Préserver":
      "Preservare",

    "Gardez de l’espace pour vous lorsque les échanges deviennent trop exigeants ou dispersants.":
      "Mantieni uno spazio per te quando gli scambi diventano troppo impegnativi o dispersivi.",

    "Votre dynamique relationnelle":
      "La tua dinamica relazionale",

    "Cette période met en lumière votre manière d’entrer en relation, de communiquer et de trouver votre place auprès des autres.":
      "Questo periodo mette in luce il tuo modo di relazionarti, comunicare e trovare il tuo posto tra gli altri.",

    "Votre vie sociale évolue selon la qualité de votre présence et la clarté de vos échanges. Les relations les plus constructives seront celles qui respectent vos besoins tout en laissant de la place à l’autre.":
      "La tua vita sociale evolve in base alla qualità della tua presenza e alla chiarezza degli scambi. Le relazioni più costruttive saranno quelle che rispettano i tuoi bisogni lasciando spazio anche agli altri.",

    "Choisissez un échange important à aborder avec calme, sincérité et ouverture.":
      "Scegli un confronto importante da affrontare con calma, sincerità e apertura.",

    "Vie sociale et entourage":
      "Vita sociale e ambiente",

    "Vos relations et vos échanges":
      "Le tue relazioni e i tuoi scambi",

    "Climat relationnel de la période":
      "Clima relazionale del periodo",

    "sur 100":
      "su 100",

    "Fluidité relationnelle":
      "Fluidità relazionale",

    "Présence et ouverture":
      "Presenza e apertura",

    "Restez disponible aux échanges sans vous forcer. Une présence sincère vaut davantage qu’une disponibilité constante.":
      "Rimani disponibile agli scambi senza forzarti. Una presenza sincera vale più di una disponibilità costante.",

    "Limites et réciprocité":
      "Limiti e reciprocità",

    "Préservez vos limites et observez si les efforts, l’écoute et l’attention circulent réellement dans les deux sens.":
      "Proteggi i tuoi limiti e osserva se impegno, ascolto e attenzione circolano davvero in entrambe le direzioni.",

    "Vos repères relationnels":
      "I tuoi riferimenti relazionali",

    "Présence":
      "Presenza",

    "Confiance":
      "Fiducia",

    "Conseil relationnel":
      "Consiglio relazionale",

    "Cette section présente une lecture astrologique de vos relations et ne remplace jamais votre jugement ni votre libre arbitre.":
      "Questa sezione offre una lettura astrologica delle tue relazioni e non sostituisce mai il tuo giudizio né il tuo libero arbitrio.",
  },

  pt: {
    "Repère relationnel":
      "Referência relacional",

    "Écouter":
      "Escutar",

    "Accueillez les paroles importantes avec attention avant de chercher à répondre ou à expliquer.":
      "Escute com atenção as palavras importantes antes de tentar responder ou explicar.",

    "Clarifier":
      "Esclarecer",

    "Exprimez vos attentes simplement afin de limiter les malentendus et les interprétations inutiles.":
      "Expresse suas expectativas de forma simples para reduzir mal-entendidos e interpretações desnecessárias.",

    "Préserver":
      "Preservar",

    "Gardez de l’espace pour vous lorsque les échanges deviennent trop exigeants ou dispersants.":
      "Reserve espaço para você quando as interações se tornarem exigentes ou dispersivas demais.",

    "Votre dynamique relationnelle":
      "Sua dinâmica relacional",

    "Cette période met en lumière votre manière d’entrer en relation, de communiquer et de trouver votre place auprès des autres.":
      "Este período destaca sua maneira de se relacionar, se comunicar e encontrar seu lugar entre os outros.",

    "Votre vie sociale évolue selon la qualité de votre présence et la clarté de vos échanges. Les relations les plus constructives seront celles qui respectent vos besoins tout en laissant de la place à l’autre.":
      "Sua vida social evolui conforme a qualidade da sua presença e a clareza das interações. Os relacionamentos mais construtivos serão aqueles que respeitam suas necessidades e também deixam espaço para o outro.",

    "Choisissez un échange important à aborder avec calme, sincérité et ouverture.":
      "Escolha uma conversa importante para abordar com calma, sinceridade e abertura.",

    "Vie sociale et entourage":
      "Vida social e círculo próximo",

    "Vos relations et vos échanges":
      "Seus relacionamentos e interações",

    "Climat relationnel de la période":
      "Clima relacional do período",

    "sur 100":
      "de 100",

    "Fluidité relationnelle":
      "Fluidez relacional",

    "Présence et ouverture":
      "Presença e abertura",

    "Restez disponible aux échanges sans vous forcer. Une présence sincère vaut davantage qu’une disponibilité constante.":
      "Mantenha-se aberto às interações sem se forçar. Uma presença sincera vale mais do que disponibilidade constante.",

    "Limites et réciprocité":
      "Limites e reciprocidade",

    "Préservez vos limites et observez si les efforts, l’écoute et l’attention circulent réellement dans les deux sens.":
      "Proteja seus limites e observe se esforço, escuta e atenção realmente circulam nos dois sentidos.",

    "Vos repères relationnels":
      "Suas referências relacionais",

    "Présence":
      "Presença",

    "Confiance":
      "Confiança",

    "Conseil relationnel":
      "Conselho relacional",

    "Cette section présente une lecture astrologique de vos relations et ne remplace jamais votre jugement ni votre libre arbitre.":
      "Esta seção apresenta uma interpretação astrológica dos seus relacionamentos e nunca substitui seu julgamento nem seu livre-arbítrio.",
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
      "HoroscopeSocial.tsx",
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

function replaceDynamicSocialValues(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /const\s+periodLabel\s*=\s*formatHoroscopePeriodLabel\(\s*period\s*\);/g,
    `const periodLabel =
    __socialLocalizedPeriodLabel(
      period,
    );`,
  );

  output = output.replace(
    /\{identity\.zodiacSignLabel\}/g,
    "{__socialLocalizeDynamicText(identity.zodiacSignLabel)}",
  );

  output = output.replace(
    /\{sectionTitle\}/g,
    "{__socialLocalizeDynamicText(sectionTitle)}",
  );

  output = output.replace(
    /\{introduction\}/g,
    "{__socialLocalizeDynamicText(introduction)}",
  );

  output = output.replace(
    /\{mainText\}/g,
    "{__socialLocalizeDynamicText(mainText)}",
  );

  output = output.replace(
    /\btext=\{highlight\}/g,
    "text={__socialLocalizeDynamicText(highlight)}",
  );

  output = output.replace(
    /\{advice\}/g,
    "{__socialLocalizeDynamicText(advice)}",
  );

  return output;
}

function injectSocialHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __socialLocalizeDynamicText",
    )
  ) {
    return source;
  }

  const helper = `
/* =========================================================
   HOROSCOPE SOCIAL — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __SOCIAL_MONTHS =
  ${JSON.stringify(MONTHS[locale], null, 2)} as const;

const __SOCIAL_FRENCH_MONTHS =
  ${JSON.stringify(FRENCH_MONTHS, null, 2)} as const;

const __SOCIAL_ZODIAC_LABELS:
  Record<string, string> =
  ${JSON.stringify(ZODIAC_LABELS[locale], null, 2)};

const __SOCIAL_TRANSLATIONS:
  Record<string, string> =
  ${JSON.stringify(TRANSLATIONS[locale], null, 2)};

function __socialLocalizeDynamicText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  let output =
    __SOCIAL_TRANSLATIONS[value] ??
    value;

  __SOCIAL_FRENCH_MONTHS.forEach(
    (frenchMonth, index) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${frenchMonth}\\\\b\`,
          "gi",
        ),
        __SOCIAL_MONTHS[index],
      );
    },
  );

  Object.entries(
    __SOCIAL_ZODIAC_LABELS,
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

function __socialFormatIsoDate(
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
    return __socialLocalizeDynamicText(
      isoDate,
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  ${
    locale === "en"
      ? 'return `${__SOCIAL_MONTHS[month - 1]} ${day}, ${year}`;'
      : locale === "de"
        ? 'return `${day}. ${__SOCIAL_MONTHS[month - 1]} ${year}`;'
        : locale === "es"
          ? 'return `${day} de ${__SOCIAL_MONTHS[month - 1]} de ${year}`;'
          : locale === "pt"
            ? 'return `${day} de ${__SOCIAL_MONTHS[month - 1]} de ${year}`;'
            : 'return `${day} ${__SOCIAL_MONTHS[month - 1]} ${year}`;'
  }
}

function __socialLocalizedPeriodLabel(
  period: HoroscopeSectionProps["period"],
): string {
  if (period.type === "day") {
    return __socialFormatIsoDate(
      period.startDate,
    );
  }

  const match =
    period.startDate?.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __socialLocalizeDynamicText(
      period.label ||
      period.startDate ||
      "",
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);

  if (period.type === "month") {
    return \`\${__SOCIAL_MONTHS[month - 1]} \${year}\`;
  }

  return String(year);
}

/* =========================================================
   END HOROSCOPE SOCIAL — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeSocial";

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

export function localizeHoroscopeSocial(
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
    replaceDynamicSocialValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectSocialHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
