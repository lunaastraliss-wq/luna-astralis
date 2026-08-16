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
    "Une énergie particulièrement favorable vous accompagne.":
      "A particularly favorable energy is with you.",

    "Le climat est positif et encourage les initiatives.":
      "The atmosphere is positive and encourages initiative.",

    "Une période équilibrée, à vivre avec attention.":
      "A balanced period to experience with awareness.",

    "La prudence et la patience seront vos meilleures alliées.":
      "Caution and patience will be your best allies.",

    "Avancez doucement et préservez votre énergie.":
      "Move forward gently and preserve your energy.",

    "Une période porteuse":
      "A promising period",

    "Votre climat général soutient l’élan, la confiance et les décisions constructives. Profitez de cette dynamique sans vous disperser.":
      "Your overall climate supports momentum, confidence, and constructive decisions. Make the most of this dynamic without spreading yourself too thin.",

    "Une période équilibrée":
      "A balanced period",

    "Les possibilités sont bien présentes, mais elles demandent de la mesure. Avancez avec régularité et restez à l’écoute de vos priorités.":
      "Opportunities are present, but they require balance. Move forward steadily and remain attentive to your priorities.",

    "Une période à apprivoiser":
      "A period to navigate carefully",

    "Le climat invite à ralentir, à protéger votre énergie et à choisir soigneusement vos actions. La patience peut devenir votre meilleure force.":
      "The climate invites you to slow down, protect your energy, and choose your actions carefully. Patience can become your greatest strength.",

    "Énergie":
      "Energy",

    "Amour":
      "Love",

    "Travail":
      "Career",

    "Finances":
      "Finances",

    "Bien-être":
      "Well-being",

    "Vie sociale":
      "Social life",

    "Votre climat astrologique":
      "Your astrological climate",

    "Cette synthèse réunit les grandes tendances qui colorent votre période et met en lumière les domaines les plus porteurs.":
      "This overview brings together the major trends shaping your period and highlights the most promising areas.",

    "Votre horoscope révèle un équilibre entre mouvement, réflexion et ajustement. Certaines sphères pourront évoluer rapidement, tandis que d’autres demanderont davantage de patience et de constance.":
      "Your horoscope reveals a balance between movement, reflection, and adjustment. Some areas may evolve quickly, while others will require more patience and consistency.",

    "Concentrez-vous sur une priorité essentielle et laissez le reste évoluer sans pression inutile.":
      "Focus on one essential priority and allow the rest to unfold without unnecessary pressure.",

    "Vue d’ensemble":
      "Overview",

    "Votre résumé astrologique":
      "Your astrological overview",

    "Synthèse personnalisée":
      "Personalized overview",

    "sur 100":
      "out of 100",

    "Équilibre général de la période":
      "Overall balance of the period",

    "Vos indicateurs":
      "Your indicators",

    "Tendance générale":
      "Overall trend",

    "Conseil principal":
      "Key advice",
  },

  es: {
    "Une énergie particulièrement favorable vous accompagne.":
      "Una energía especialmente favorable le acompaña.",

    "Le climat est positif et encourage les initiatives.":
      "El ambiente es positivo y favorece las iniciativas.",

    "Une période équilibrée, à vivre avec attention.":
      "Un período equilibrado para vivir con atención.",

    "La prudence et la patience seront vos meilleures alliées.":
      "La prudencia y la paciencia serán sus mejores aliadas.",

    "Avancez doucement et préservez votre énergie.":
      "Avance con calma y preserve su energía.",

    "Une période porteuse":
      "Un período prometedor",

    "Votre climat général soutient l’élan, la confiance et les décisions constructives. Profitez de cette dynamique sans vous disperser.":
      "Su clima general favorece el impulso, la confianza y las decisiones constructivas. Aproveche esta dinámica sin dispersarse.",

    "Une période équilibrée":
      "Un período equilibrado",

    "Les possibilités sont bien présentes, mais elles demandent de la mesure. Avancez avec régularité et restez à l’écoute de vos priorités.":
      "Las posibilidades están presentes, pero requieren equilibrio. Avance con constancia y manténgase atento a sus prioridades.",

    "Une période à apprivoiser":
      "Un período que requiere adaptación",

    "Le climat invite à ralentir, à protéger votre énergie et à choisir soigneusement vos actions. La patience peut devenir votre meilleure force.":
      "El clima invita a reducir el ritmo, proteger su energía y elegir cuidadosamente sus acciones. La paciencia puede convertirse en su mayor fortaleza.",

    "Énergie":
      "Energía",

    "Amour":
      "Amor",

    "Travail":
      "Trabajo",

    "Finances":
      "Finanzas",

    "Bien-être":
      "Bienestar",

    "Vie sociale":
      "Vida social",

    "Votre climat astrologique":
      "Su clima astrológico",

    "Cette synthèse réunit les grandes tendances qui colorent votre période et met en lumière les domaines les plus porteurs.":
      "Esta síntesis reúne las principales tendencias que marcan su período y destaca las áreas más favorables.",

    "Votre horoscope révèle un équilibre entre mouvement, réflexion et ajustement. Certaines sphères pourront évoluer rapidement, tandis que d’autres demanderont davantage de patience et de constance.":
      "Su horóscopo revela un equilibrio entre movimiento, reflexión y adaptación. Algunas áreas podrán evolucionar rápidamente, mientras que otras requerirán más paciencia y constancia.",

    "Concentrez-vous sur une priorité essentielle et laissez le reste évoluer sans pression inutile.":
      "Concéntrese en una prioridad esencial y deje que el resto evolucione sin presión innecesaria.",

    "Vue d’ensemble":
      "Visión general",

    "Votre résumé astrologique":
      "Su resumen astrológico",

    "Synthèse personnalisée":
      "Síntesis personalizada",

    "sur 100":
      "de 100",

    "Équilibre général de la période":
      "Equilibrio general del período",

    "Vos indicateurs":
      "Sus indicadores",

    "Tendance générale":
      "Tendencia general",

    "Conseil principal":
      "Consejo principal",
  },

  de: {
    "Une énergie particulièrement favorable vous accompagne.":
      "Eine besonders günstige Energie begleitet Sie.",

    "Le climat est positif et encourage les initiatives.":
      "Die Atmosphäre ist positiv und fördert Eigeninitiative.",

    "Une période équilibrée, à vivre avec attention.":
      "Eine ausgeglichene Phase, die Sie bewusst erleben sollten.",

    "La prudence et la patience seront vos meilleures alliées.":
      "Vorsicht und Geduld werden Ihre besten Verbündeten sein.",

    "Avancez doucement et préservez votre énergie.":
      "Gehen Sie behutsam vor und bewahren Sie Ihre Energie.",

    "Une période porteuse":
      "Eine vielversprechende Phase",

    "Votre climat général soutient l’élan, la confiance et les décisions constructives. Profitez de cette dynamique sans vous disperser.":
      "Ihr allgemeines Klima unterstützt Schwung, Vertrauen und konstruktive Entscheidungen. Nutzen Sie diese Dynamik, ohne sich zu verzetteln.",

    "Une période équilibrée":
      "Eine ausgeglichene Phase",

    "Les possibilités sont bien présentes, mais elles demandent de la mesure. Avancez avec régularité et restez à l’écoute de vos priorités.":
      "Die Möglichkeiten sind vorhanden, erfordern jedoch Maß und Ausgewogenheit. Gehen Sie stetig voran und behalten Sie Ihre Prioritäten im Blick.",

    "Une période à apprivoiser":
      "Eine Phase, die Fingerspitzengefühl verlangt",

    "Le climat invite à ralentir, à protéger votre énergie et à choisir soigneusement vos actions. La patience peut devenir votre meilleure force.":
      "Das Klima lädt dazu ein, langsamer zu werden, Ihre Energie zu schützen und Ihre Handlungen sorgfältig zu wählen. Geduld kann zu Ihrer größten Stärke werden.",

    "Énergie":
      "Energie",

    "Amour":
      "Liebe",

    "Travail":
      "Beruf",

    "Finances":
      "Finanzen",

    "Bien-être":
      "Wohlbefinden",

    "Vie sociale":
      "Sozialleben",

    "Votre climat astrologique":
      "Ihr astrologisches Klima",

    "Cette synthèse réunit les grandes tendances qui colorent votre période et met en lumière les domaines les plus porteurs.":
      "Diese Zusammenfassung vereint die wichtigsten Tendenzen Ihrer aktuellen Phase und hebt die vielversprechendsten Bereiche hervor.",

    "Votre horoscope révèle un équilibre entre mouvement, réflexion et ajustement. Certaines sphères pourront évoluer rapidement, tandis que d’autres demanderont davantage de patience et de constance.":
      "Ihr Horoskop zeigt ein Gleichgewicht zwischen Bewegung, Reflexion und Anpassung. Einige Bereiche können sich schnell entwickeln, während andere mehr Geduld und Beständigkeit erfordern.",

    "Concentrez-vous sur une priorité essentielle et laissez le reste évoluer sans pression inutile.":
      "Konzentrieren Sie sich auf eine wesentliche Priorität und lassen Sie den Rest ohne unnötigen Druck entstehen.",

    "Vue d’ensemble":
      "Überblick",

    "Votre résumé astrologique":
      "Ihre astrologische Übersicht",

    "Synthèse personnalisée":
      "Persönliche Zusammenfassung",

    "sur 100":
      "von 100",

    "Équilibre général de la période":
      "Gesamtbalance des Zeitraums",

    "Vos indicateurs":
      "Ihre Indikatoren",

    "Tendance générale":
      "Allgemeine Tendenz",

    "Conseil principal":
      "Wichtigster Rat",
  },

  it: {
    "Une énergie particulièrement favorable vous accompagne.":
      "Un'energia particolarmente favorevole ti accompagna.",

    "Le climat est positif et encourage les initiatives.":
      "Il clima è positivo e favorisce le iniziative.",

    "Une période équilibrée, à vivre avec attention.":
      "Un periodo equilibrato da vivere con consapevolezza.",

    "La prudence et la patience seront vos meilleures alliées.":
      "La prudenza e la pazienza saranno le tue migliori alleate.",

    "Avancez doucement et préservez votre énergie.":
      "Procedi con calma e preserva la tua energia.",

    "Une période porteuse":
      "Un periodo promettente",

    "Votre climat général soutient l’élan, la confiance et les décisions constructives. Profitez de cette dynamique sans vous disperser.":
      "Il tuo clima generale sostiene lo slancio, la fiducia e le decisioni costruttive. Approfitta di questa dinamica senza disperdere le tue energie.",

    "Une période équilibrée":
      "Un periodo equilibrato",

    "Les possibilités sont bien présentes, mais elles demandent de la mesure. Avancez avec régularité et restez à l’écoute de vos priorités.":
      "Le possibilità sono presenti, ma richiedono equilibrio. Procedi con costanza e resta attento alle tue priorità.",

    "Une période à apprivoiser":
      "Un periodo da affrontare con attenzione",

    "Le climat invite à ralentir, à protéger votre énergie et à choisir soigneusement vos actions. La patience peut devenir votre meilleure force.":
      "Il clima invita a rallentare, proteggere la tua energia e scegliere con cura le tue azioni. La pazienza può diventare la tua più grande forza.",

    "Énergie":
      "Energia",

    "Amour":
      "Amore",

    "Travail":
      "Lavoro",

    "Finances":
      "Finanze",

    "Bien-être":
      "Benessere",

    "Vie sociale":
      "Vita sociale",

    "Votre climat astrologique":
      "Il tuo clima astrologico",

    "Cette synthèse réunit les grandes tendances qui colorent votre période et met en lumière les domaines les plus porteurs.":
      "Questa sintesi riunisce le principali tendenze che caratterizzano il tuo periodo e mette in luce gli ambiti più promettenti.",

    "Votre horoscope révèle un équilibre entre mouvement, réflexion et ajustement. Certaines sphères pourront évoluer rapidement, tandis que d’autres demanderont davantage de patience et de constance.":
      "Il tuo oroscopo rivela un equilibrio tra movimento, riflessione e adattamento. Alcuni ambiti potranno evolvere rapidamente, mentre altri richiederanno maggiore pazienza e costanza.",

    "Concentrez-vous sur une priorité essentielle et laissez le reste évoluer sans pression inutile.":
      "Concentrati su una priorità essenziale e lascia che il resto evolva senza pressioni inutili.",

    "Vue d’ensemble":
      "Panoramica",

    "Votre résumé astrologique":
      "La tua sintesi astrologica",

    "Synthèse personnalisée":
      "Sintesi personalizzata",

    "sur 100":
      "su 100",

    "Équilibre général de la période":
      "Equilibrio generale del periodo",

    "Vos indicateurs":
      "I tuoi indicatori",

    "Tendance générale":
      "Tendenza generale",

    "Conseil principal":
      "Consiglio principale",
  },

  pt: {
    "Une énergie particulièrement favorable vous accompagne.":
      "Uma energia especialmente favorável acompanha você.",

    "Le climat est positif et encourage les initiatives.":
      "O clima é positivo e favorece as iniciativas.",

    "Une période équilibrée, à vivre avec attention.":
      "Um período equilibrado para viver com atenção.",

    "La prudence et la patience seront vos meilleures alliées.":
      "A prudência e a paciência serão suas melhores aliadas.",

    "Avancez doucement et préservez votre énergie.":
      "Avance com calma e preserve sua energia.",

    "Une période porteuse":
      "Um período promissor",

    "Votre climat général soutient l’élan, la confiance et les décisions constructives. Profitez de cette dynamique sans vous disperser.":
      "Seu clima geral favorece o impulso, a confiança e as decisões construtivas. Aproveite essa dinâmica sem dispersar suas energias.",

    "Une période équilibrée":
      "Um período equilibrado",

    "Les possibilités sont bien présentes, mais elles demandent de la mesure. Avancez avec régularité et restez à l’écoute de vos priorités.":
      "As possibilidades estão presentes, mas exigem equilíbrio. Avance com constância e mantenha suas prioridades em mente.",

    "Une période à apprivoiser":
      "Um período que exige adaptação",

    "Le climat invite à ralentir, à protéger votre énergie et à choisir soigneusement vos actions. La patience peut devenir votre meilleure force.":
      "O clima convida você a desacelerar, proteger sua energia e escolher cuidadosamente suas ações. A paciência pode se tornar sua maior força.",

    "Énergie":
      "Energia",

    "Amour":
      "Amor",

    "Travail":
      "Trabalho",

    "Finances":
      "Finanças",

    "Bien-être":
      "Bem-estar",

    "Vie sociale":
      "Vida social",

    "Votre climat astrologique":
      "Seu clima astrológico",

    "Cette synthèse réunit les grandes tendances qui colorent votre période et met en lumière les domaines les plus porteurs.":
      "Esta síntese reúne as principais tendências que marcam seu período e destaca as áreas mais promissoras.",

    "Votre horoscope révèle un équilibre entre mouvement, réflexion et ajustement. Certaines sphères pourront évoluer rapidement, tandis que d’autres demanderont davantage de patience et de constance.":
      "Seu horóscopo revela um equilíbrio entre movimento, reflexão e adaptação. Algumas áreas poderão evoluir rapidamente, enquanto outras exigirão mais paciência e constância.",

    "Concentrez-vous sur une priorité essentielle et laissez le reste évoluer sans pression inutile.":
      "Concentre-se em uma prioridade essencial e deixe o restante evoluir sem pressão desnecessária.",

    "Vue d’ensemble":
      "Visão geral",

    "Votre résumé astrologique":
      "Seu resumo astrológico",

    "Synthèse personnalisée":
      "Síntese personalizada",

    "sur 100":
      "de 100",

    "Équilibre général de la période":
      "Equilíbrio geral do período",

    "Vos indicateurs":
      "Seus indicadores",

    "Tendance générale":
      "Tendência geral",

    "Conseil principal":
      "Conselho principal",
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
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre",
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
      "HoroscopeSummary.tsx",
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

function replaceDynamicSummaryValues(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /const\s+periodLabel\s*=\s*formatHoroscopePeriodLabel\(\s*period\s*\);/g,
    `const periodLabel =
    __summaryLocalizedPeriodLabel(period);`,
  );

  output = output.replace(
    /\{identity\.zodiacSignLabel\}/g,
    "{__summaryLocalizeDynamicText(identity.zodiacSignLabel)}",
  );

  output = output.replace(
    /\{summaryTitle\}/g,
    "{__summaryLocalizeDynamicText(summaryTitle)}",
  );

  output = output.replace(
    /\{summaryIntroduction\}/g,
    "{__summaryLocalizeDynamicText(summaryIntroduction)}",
  );

  output = output.replace(
    /\{summaryText\}/g,
    "{__summaryLocalizeDynamicText(summaryText)}",
  );

  output = output.replace(
    /\{advice\}/g,
    "{__summaryLocalizeDynamicText(advice)}",
  );

  return output;
}

function injectSummaryHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __summaryLocalizeDynamicText",
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
   HOROSCOPE SUMMARY — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __SUMMARY_MONTHS =
  ${JSON.stringify(months, null, 2)} as const;

const __SUMMARY_FRENCH_MONTHS =
  ${JSON.stringify(FRENCH_MONTHS, null, 2)} as const;

const __SUMMARY_ZODIAC_LABELS:
  Record<string, string> =
  ${JSON.stringify(zodiac, null, 2)};

const __SUMMARY_TRANSLATIONS:
  Record<string, string> =
  ${JSON.stringify(translations, null, 2)};

function __summaryLocalizeDynamicText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  let output =
    __SUMMARY_TRANSLATIONS[value] ??
    value;

  __SUMMARY_FRENCH_MONTHS.forEach(
    (frenchMonth, index) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${frenchMonth}\\\\b\`,
          "gi",
        ),
        __SUMMARY_MONTHS[index],
      );
    },
  );

  Object.entries(
    __SUMMARY_ZODIAC_LABELS,
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

function __summaryFormatIsoDate(
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
    return __summaryLocalizeDynamicText(
      isoDate,
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  ${
    locale === "en"
      ? 'return `${__SUMMARY_MONTHS[month - 1]} ${day}, ${year}`;'
      : locale === "de"
        ? 'return `${day}. ${__SUMMARY_MONTHS[month - 1]} ${year}`;'
        : locale === "es"
          ? 'return `${day} de ${__SUMMARY_MONTHS[month - 1]} de ${year}`;'
          : locale === "pt"
            ? 'return `${day} de ${__SUMMARY_MONTHS[month - 1]} de ${year}`;'
            : 'return `${day} ${__SUMMARY_MONTHS[month - 1]} ${year}`;'
  }
}

function __summaryLocalizedPeriodLabel(
  period: HoroscopeSectionProps["period"],
): string {
  if (period.type === "day") {
    return __summaryFormatIsoDate(
      period.startDate,
    );
  }

  const match =
    period.startDate?.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __summaryLocalizeDynamicText(
      period.label ||
      period.startDate ||
      "",
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);

  if (period.type === "month") {
    return \`\${__SUMMARY_MONTHS[month - 1]} \${year}\`;
  }

  return String(year);
}

/* =========================================================
   END HOROSCOPE SUMMARY — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeSummary";

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

export function localizeHoroscopeSummary(
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
    replaceDynamicSummaryValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectSummaryHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
