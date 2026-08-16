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
    "Une ouverture à saisir":
      "An opportunity to seize",

    "La période favorise les initiatives, les rencontres utiles et les occasions capables de faire évoluer un projet. Restez attentif aux signes concrets et avancez avec discernement.":
      "This period favors initiatives, useful connections, and opportunities that can move a project forward. Stay attentive to concrete signs and proceed with discernment.",

    "Un potentiel à observer":
      "Potential worth observing",

    "Des possibilités existent, mais elles demandent du tri et de la patience. Toutes les ouvertures ne méritent pas la même énergie : choisissez celles qui correspondent vraiment à vos priorités.":
      "Possibilities exist, but they require discernment and patience. Not every opportunity deserves the same energy: choose those that truly match your priorities.",

    "Une période de préparation":
      "A period of preparation",

    "Les opportunités peuvent être plus discrètes. Utilisez ce temps pour clarifier vos objectifs, consolider vos bases et préparer le terrain avant de vous engager davantage.":
      "Opportunities may be more subtle. Use this time to clarify your goals, strengthen your foundations, and prepare the ground before committing further.",

    "Repérer":
      "Notice",

    "Observez les propositions, les rencontres et les idées qui reviennent avec insistance.":
      "Notice the proposals, encounters, and ideas that keep returning.",

    "Évaluer":
      "Evaluate",

    "Vérifiez si l’occasion respecte vos priorités, votre énergie et votre véritable direction.":
      "Check whether the opportunity respects your priorities, your energy, and your true direction.",

    "Avancer":
      "Move forward",

    "Choisissez une action simple afin de transformer une possibilité en mouvement réel.":
      "Choose one simple action to turn a possibility into real movement.",

    "Vos ouvertures du moment":
      "Your current opportunities",

    "Cette période met en lumière les occasions, les rencontres et les mouvements capables de faire évoluer votre situation.":
      "This period highlights opportunities, encounters, and developments that can move your situation forward.",

    "Les opportunités les plus utiles ne sont pas toujours les plus spectaculaires. Elles peuvent apparaître sous la forme d’une conversation, d’une proposition ou d’une idée nouvelle.":
      "The most useful opportunities are not always the most spectacular. They may appear as a conversation, a proposal, or a new idea.",

    "Restez disponible aux nouvelles possibilités tout en prenant le temps de vérifier qu’elles correspondent réellement à votre chemin.":
      "Remain open to new possibilities while taking time to make sure they truly align with your path.",

    "Opportunités et ouvertures":
      "Opportunities and openings",

    "Les portes qui peuvent s’ouvrir":
      "Doors that may open",

    "Potentiel de la période":
      "Potential of the period",

    "sur 100":
      "out of 100",

    "Niveau d’ouverture de la période":
      "Opportunity level for this period",

    "Opportunités à reconnaître":
      "Opportunities to recognize",

    "Tendance générale":
      "Overall trend",

    "Conseil pour saisir l’occasion":
      "Advice for seizing the opportunity",
  },

  es: {
    "Une ouverture à saisir":
      "Una oportunidad que aprovechar",

    "La période favorise les initiatives, les rencontres utiles et les occasions capables de faire évoluer un projet. Restez attentif aux signes concrets et avancez avec discernement.":
      "El período favorece las iniciativas, los encuentros útiles y las oportunidades capaces de impulsar un proyecto. Manténgase atento a las señales concretas y avance con discernimiento.",

    "Un potentiel à observer":
      "Un potencial que observar",

    "Des possibilités existent, mais elles demandent du tri et de la patience. Toutes les ouvertures ne méritent pas la même énergie : choisissez celles qui correspondent vraiment à vos priorités.":
      "Existen posibilidades, pero requieren selección y paciencia. No todas las oportunidades merecen la misma energía: elija las que realmente correspondan a sus prioridades.",

    "Une période de préparation":
      "Un período de preparación",

    "Les opportunités peuvent être plus discrètes. Utilisez ce temps pour clarifier vos objectifs, consolider vos bases et préparer le terrain avant de vous engager davantage.":
      "Las oportunidades pueden ser más discretas. Aproveche este tiempo para aclarar sus objetivos, consolidar sus bases y preparar el terreno antes de comprometerse más.",

    "Repérer":
      "Detectar",

    "Observez les propositions, les rencontres et les idées qui reviennent avec insistance.":
      "Observe las propuestas, los encuentros y las ideas que aparecen repetidamente.",

    "Évaluer":
      "Evaluar",

    "Vérifiez si l’occasion respecte vos priorités, votre énergie et votre véritable direction.":
      "Compruebe si la oportunidad respeta sus prioridades, su energía y su verdadera dirección.",

    "Avancer":
      "Avanzar",

    "Choisissez une action simple afin de transformer une possibilité en mouvement réel.":
      "Elija una acción sencilla para transformar una posibilidad en un movimiento real.",

    "Vos ouvertures du moment":
      "Sus oportunidades actuales",

    "Cette période met en lumière les occasions, les rencontres et les mouvements capables de faire évoluer votre situation.":
      "Este período pone de relieve oportunidades, encuentros y movimientos capaces de hacer evolucionar su situación.",

    "Les opportunités les plus utiles ne sont pas toujours les plus spectaculaires. Elles peuvent apparaître sous la forme d’une conversation, d’une proposition ou d’une idée nouvelle.":
      "Las oportunidades más útiles no siempre son las más espectaculares. Pueden aparecer en forma de conversación, propuesta o nueva idea.",

    "Restez disponible aux nouvelles possibilités tout en prenant le temps de vérifier qu’elles correspondent réellement à votre chemin.":
      "Manténgase abierto a nuevas posibilidades mientras se toma el tiempo necesario para comprobar que realmente corresponden a su camino.",

    "Opportunités et ouvertures":
      "Oportunidades y aperturas",

    "Les portes qui peuvent s’ouvrir":
      "Las puertas que pueden abrirse",

    "Potentiel de la période":
      "Potencial del período",

    "sur 100":
      "de 100",

    "Niveau d’ouverture de la période":
      "Nivel de apertura del período",

    "Opportunités à reconnaître":
      "Oportunidades que reconocer",

    "Tendance générale":
      "Tendencia general",

    "Conseil pour saisir l’occasion":
      "Consejo para aprovechar la oportunidad",
  },

  de: {
    "Une ouverture à saisir":
      "Eine Chance, die Sie nutzen können",

    "La période favorise les initiatives, les rencontres utiles et les occasions capables de faire évoluer un projet. Restez attentif aux signes concrets et avancez avec discernement.":
      "Diese Phase begünstigt Initiativen, hilfreiche Begegnungen und Chancen, die ein Projekt voranbringen können. Achten Sie auf konkrete Zeichen und gehen Sie mit Bedacht vor.",

    "Un potentiel à observer":
      "Ein Potenzial, das Aufmerksamkeit verdient",

    "Des possibilités existent, mais elles demandent du tri et de la patience. Toutes les ouvertures ne méritent pas la même énergie : choisissez celles qui correspondent vraiment à vos priorités.":
      "Möglichkeiten sind vorhanden, erfordern jedoch Auswahl und Geduld. Nicht jede Chance verdient die gleiche Energie: Wählen Sie jene, die wirklich zu Ihren Prioritäten passen.",

    "Une période de préparation":
      "Eine Phase der Vorbereitung",

    "Les opportunités peuvent être plus discrètes. Utilisez ce temps pour clarifier vos objectifs, consolider vos bases et préparer le terrain avant de vous engager davantage.":
      "Chancen können sich subtiler zeigen. Nutzen Sie diese Zeit, um Ihre Ziele zu klären, Ihre Grundlagen zu festigen und den Boden vorzubereiten, bevor Sie sich stärker engagieren.",

    "Repérer":
      "Erkennen",

    "Observez les propositions, les rencontres et les idées qui reviennent avec insistance.":
      "Beobachten Sie Angebote, Begegnungen und Ideen, die wiederholt auftauchen.",

    "Évaluer":
      "Bewerten",

    "Vérifiez si l’occasion respecte vos priorités, votre énergie et votre véritable direction.":
      "Prüfen Sie, ob die Gelegenheit Ihren Prioritäten, Ihrer Energie und Ihrer tatsächlichen Richtung entspricht.",

    "Avancer":
      "Vorangehen",

    "Choisissez une action simple afin de transformer une possibilité en mouvement réel.":
      "Wählen Sie eine einfache Handlung, um aus einer Möglichkeit eine konkrete Entwicklung zu machen.",

    "Vos ouvertures du moment":
      "Ihre aktuellen Möglichkeiten",

    "Cette période met en lumière les occasions, les rencontres et les mouvements capables de faire évoluer votre situation.":
      "Diese Phase hebt Chancen, Begegnungen und Entwicklungen hervor, die Ihre Situation verändern können.",

    "Les opportunités les plus utiles ne sont pas toujours les plus spectaculaires. Elles peuvent apparaître sous la forme d’une conversation, d’une proposition ou d’une idée nouvelle.":
      "Die wertvollsten Chancen sind nicht immer die spektakulärsten. Sie können sich in Form eines Gesprächs, eines Angebots oder einer neuen Idee zeigen.",

    "Restez disponible aux nouvelles possibilités tout en prenant le temps de vérifier qu’elles correspondent réellement à votre chemin.":
      "Bleiben Sie offen für neue Möglichkeiten und nehmen Sie sich zugleich Zeit zu prüfen, ob sie wirklich zu Ihrem Weg passen.",

    "Opportunités et ouvertures":
      "Chancen und Möglichkeiten",

    "Les portes qui peuvent s’ouvrir":
      "Türen, die sich öffnen können",

    "Potentiel de la période":
      "Potenzial dieser Phase",

    "sur 100":
      "von 100",

    "Niveau d’ouverture de la période":
      "Chancenpotenzial dieser Phase",

    "Opportunités à reconnaître":
      "Chancen, die Sie erkennen sollten",

    "Tendance générale":
      "Allgemeine Tendenz",

    "Conseil pour saisir l’occasion":
      "Rat, um die Chance zu nutzen",
  },

  it: {
    "Une ouverture à saisir":
      "Un'opportunità da cogliere",

    "La période favorise les initiatives, les rencontres utiles et les occasions capables de faire évoluer un projet. Restez attentif aux signes concrets et avancez avec discernement.":
      "Il periodo favorisce le iniziative, gli incontri utili e le opportunità capaci di far evolvere un progetto. Presta attenzione ai segnali concreti e procedi con discernimento.",

    "Un potentiel à observer":
      "Un potenziale da osservare",

    "Des possibilités existent, mais elles demandent du tri et de la patience. Toutes les ouvertures ne méritent pas la même énergie : choisissez celles qui correspondent vraiment à vos priorités.":
      "Esistono delle possibilità, ma richiedono selezione e pazienza. Non tutte le opportunità meritano la stessa energia: scegli quelle che corrispondono davvero alle tue priorità.",

    "Une période de préparation":
      "Un periodo di preparazione",

    "Les opportunités peuvent être plus discrètes. Utilisez ce temps pour clarifier vos objectifs, consolider vos bases et préparer le terrain avant de vous engager davantage.":
      "Le opportunità possono essere più discrete. Usa questo tempo per chiarire i tuoi obiettivi, consolidare le tue basi e preparare il terreno prima di impegnarti maggiormente.",

    "Repérer":
      "Individuare",

    "Observez les propositions, les rencontres et les idées qui reviennent avec insistance.":
      "Osserva le proposte, gli incontri e le idee che continuano a ripresentarsi.",

    "Évaluer":
      "Valutare",

    "Vérifiez si l’occasion respecte vos priorités, votre énergie et votre véritable direction.":
      "Verifica se l'opportunità rispetta le tue priorità, la tua energia e la tua vera direzione.",

    "Avancer":
      "Avanzare",

    "Choisissez une action simple afin de transformer une possibilité en mouvement réel.":
      "Scegli un'azione semplice per trasformare una possibilità in un movimento concreto.",

    "Vos ouvertures du moment":
      "Le tue opportunità del momento",

    "Cette période met en lumière les occasions, les rencontres et les mouvements capables de faire évoluer votre situation.":
      "Questo periodo mette in luce opportunità, incontri e movimenti capaci di far evolvere la tua situazione.",

    "Les opportunités les plus utiles ne sont pas toujours les plus spectaculaires. Elles peuvent apparaître sous la forme d’une conversation, d’une proposition ou d’une idée nouvelle.":
      "Le opportunità più utili non sono sempre le più spettacolari. Possono presentarsi sotto forma di una conversazione, una proposta o una nuova idea.",

    "Restez disponible aux nouvelles possibilités tout en prenant le temps de vérifier qu’elles correspondent réellement à votre chemin.":
      "Rimani aperto alle nuove possibilità, prendendoti il tempo di verificare che corrispondano davvero al tuo cammino.",

    "Opportunités et ouvertures":
      "Opportunità e aperture",

    "Les portes qui peuvent s’ouvrir":
      "Le porte che possono aprirsi",

    "Potentiel de la période":
      "Potenziale del periodo",

    "sur 100":
      "su 100",

    "Niveau d’ouverture de la période":
      "Livello di apertura del periodo",

    "Opportunités à reconnaître":
      "Opportunità da riconoscere",

    "Tendance générale":
      "Tendenza generale",

    "Conseil pour saisir l’occasion":
      "Consiglio per cogliere l'opportunità",
  },

  pt: {
    "Une ouverture à saisir":
      "Uma oportunidade a aproveitar",

    "La période favorise les initiatives, les rencontres utiles et les occasions capables de faire évoluer un projet. Restez attentif aux signes concrets et avancez avec discernement.":
      "O período favorece iniciativas, encontros úteis e oportunidades capazes de fazer um projeto avançar. Fique atento aos sinais concretos e avance com discernimento.",

    "Un potentiel à observer":
      "Um potencial a observar",

    "Des possibilités existent, mais elles demandent du tri et de la patience. Toutes les ouvertures ne méritent pas la même énergie : choisissez celles qui correspondent vraiment à vos priorités.":
      "Existem possibilidades, mas elas exigem seleção e paciência. Nem toda oportunidade merece a mesma energia: escolha aquelas que realmente correspondem às suas prioridades.",

    "Une période de préparation":
      "Um período de preparação",

    "Les opportunités peuvent être plus discrètes. Utilisez ce temps pour clarifier vos objectifs, consolider vos bases et préparer le terrain avant de vous engager davantage.":
      "As oportunidades podem ser mais discretas. Use este tempo para esclarecer seus objetivos, fortalecer suas bases e preparar o terreno antes de assumir compromissos maiores.",

    "Repérer":
      "Identificar",

    "Observez les propositions, les rencontres et les idées qui reviennent avec insistance.":
      "Observe as propostas, os encontros e as ideias que continuam surgindo.",

    "Évaluer":
      "Avaliar",

    "Vérifiez si l’occasion respecte vos priorités, votre énergie et votre véritable direction.":
      "Verifique se a oportunidade respeita suas prioridades, sua energia e sua verdadeira direção.",

    "Avancer":
      "Avançar",

    "Choisissez une action simple afin de transformer une possibilité en mouvement réel.":
      "Escolha uma ação simples para transformar uma possibilidade em movimento real.",

    "Vos ouvertures du moment":
      "Suas oportunidades do momento",

    "Cette période met en lumière les occasions, les rencontres et les mouvements capables de faire évoluer votre situation.":
      "Este período destaca oportunidades, encontros e movimentos capazes de fazer sua situação evoluir.",

    "Les opportunités les plus utiles ne sont pas toujours les plus spectaculaires. Elles peuvent apparaître sous la forme d’une conversation, d’une proposition ou d’une idée nouvelle.":
      "As oportunidades mais úteis nem sempre são as mais espetaculares. Elas podem surgir na forma de uma conversa, uma proposta ou uma nova ideia.",

    "Restez disponible aux nouvelles possibilités tout en prenant le temps de vérifier qu’elles correspondent réellement à votre chemin.":
      "Mantenha-se aberto a novas possibilidades, reservando tempo para verificar se elas realmente correspondem ao seu caminho.",

    "Opportunités et ouvertures":
      "Oportunidades e aberturas",

    "Les portes qui peuvent s’ouvrir":
      "As portas que podem se abrir",

    "Potentiel de la période":
      "Potencial do período",

    "sur 100":
      "de 100",

    "Niveau d’ouverture de la période":
      "Nível de abertura do período",

    "Opportunités à reconnaître":
      "Oportunidades a reconhecer",

    "Tendance générale":
      "Tendência geral",

    "Conseil pour saisir l’occasion":
      "Conselho para aproveitar a oportunidade",
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
      "HoroscopeOpportunities.tsx",
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

function replaceDynamicOpportunityValues(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /const\s+periodLabel\s*=\s*formatHoroscopePeriodLabel\(\s*period\s*\);/g,
    `const periodLabel =
    __opportunitiesLocalizedPeriodLabel(
      period,
    );`,
  );

  output = output.replace(
    /\{identity\.zodiacSignLabel\}/g,
    "{__opportunitiesLocalizeDynamicText(identity.zodiacSignLabel)}",
  );

  output = output.replace(
    /\{sectionTitle\}/g,
    "{__opportunitiesLocalizeDynamicText(sectionTitle)}",
  );

  output = output.replace(
    /\{introduction\}/g,
    "{__opportunitiesLocalizeDynamicText(introduction)}",
  );

  output = output.replace(
    /\{mainText\}/g,
    "{__opportunitiesLocalizeDynamicText(mainText)}",
  );

  output = output.replace(
    /title=\{opportunity\.title\}/g,
    "title={__opportunitiesLocalizeDynamicText(opportunity.title)}",
  );

  output = output.replace(
    /theme=\{opportunity\.theme\}/g,
    "theme={__opportunitiesLocalizeDynamicText(opportunity.theme)}",
  );

  output = output.replace(
    /description=\{opportunity\.description\}/g,
    "description={__opportunitiesLocalizeDynamicText(opportunity.description)}",
  );

  output = output.replace(
    /action=\{opportunity\.action\}/g,
    "action={__opportunitiesLocalizeDynamicText(opportunity.action)}",
  );

  output = output.replace(
    /\{guidance\.title\}/g,
    "{__opportunitiesLocalizeDynamicText(guidance.title)}",
  );

  output = output.replace(
    /\{guidance\.text\}/g,
    "{__opportunitiesLocalizeDynamicText(guidance.text)}",
  );

  output = output.replace(
    /\{advice\}/g,
    "{__opportunitiesLocalizeDynamicText(advice)}",
  );

  return output;
}

function injectOpportunityHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __opportunitiesLocalizeDynamicText",
    )
  ) {
    return source;
  }

  const helper = `
/* =========================================================
   HOROSCOPE OPPORTUNITIES — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __OPPORTUNITIES_MONTHS =
  ${JSON.stringify(MONTHS[locale], null, 2)} as const;

const __OPPORTUNITIES_FRENCH_MONTHS =
  ${JSON.stringify(FRENCH_MONTHS, null, 2)} as const;

const __OPPORTUNITIES_ZODIAC_LABELS:
  Record<string, string> =
  ${JSON.stringify(ZODIAC_LABELS[locale], null, 2)};

const __OPPORTUNITIES_TRANSLATIONS:
  Record<string, string> =
  ${JSON.stringify(TRANSLATIONS[locale], null, 2)};

function __opportunitiesLocalizeDynamicText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  let output =
    __OPPORTUNITIES_TRANSLATIONS[value] ??
    value;

  __OPPORTUNITIES_FRENCH_MONTHS.forEach(
    (frenchMonth, index) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${frenchMonth}\\\\b\`,
          "gi",
        ),
        __OPPORTUNITIES_MONTHS[index],
      );
    },
  );

  Object.entries(
    __OPPORTUNITIES_ZODIAC_LABELS,
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

function __opportunitiesFormatIsoDate(
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
    return __opportunitiesLocalizeDynamicText(
      isoDate,
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  ${
    locale === "en"
      ? 'return `${__OPPORTUNITIES_MONTHS[month - 1]} ${day}, ${year}`;'
      : locale === "de"
        ? 'return `${day}. ${__OPPORTUNITIES_MONTHS[month - 1]} ${year}`;'
        : locale === "es"
          ? 'return `${day} de ${__OPPORTUNITIES_MONTHS[month - 1]} de ${year}`;'
          : locale === "pt"
            ? 'return `${day} de ${__OPPORTUNITIES_MONTHS[month - 1]} de ${year}`;'
            : 'return `${day} ${__OPPORTUNITIES_MONTHS[month - 1]} ${year}`;'
  }
}

function __opportunitiesLocalizedPeriodLabel(
  period: HoroscopeSectionProps["period"],
): string {
  if (period.type === "day") {
    return __opportunitiesFormatIsoDate(
      period.startDate,
    );
  }

  const match =
    period.startDate?.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __opportunitiesLocalizeDynamicText(
      period.label ||
      period.startDate ||
      "",
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);

  if (period.type === "month") {
    return \`\${__OPPORTUNITIES_MONTHS[month - 1]} \${year}\`;
  }

  return String(year);
}

/* =========================================================
   END HOROSCOPE OPPORTUNITIES — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeOpportunities";

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

export function localizeHoroscopeOpportunities(
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
    replaceDynamicOpportunityValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectOpportunityHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
