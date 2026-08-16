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
    "Votre horoscope personnalisé":
      "Your personalized horoscope",

    "Bienvenue dans votre guidance astrologique":
      "Welcome to your astrological guidance",

    "Ce rapport a été préparé pour vous accompagner durant cette période et vous aider à mieux comprendre les énergies qui vous entourent.":
      "This report has been prepared to guide you through this period and help you better understand the energies around you.",

    "Cette lecture approfondie présente les principales énergies qui pourraient influencer votre journée.":
      "This in-depth reading presents the main energies that may influence your day.",

    "Votre horoscope personnalisé vous présente les grandes tendances de cette période. Chaque section vous aidera à reconnaître les énergies les plus présentes, à mieux comprendre vos ressentis et à avancer avec davantage de clarté.":
      "Your personalized horoscope presents the main trends of this period. Each section will help you recognize the most present energies, better understand your feelings, and move forward with greater clarity.",

    "Les astres éclairent le chemin, mais votre volonté choisit la direction.":
      "The stars illuminate the path, but your will chooses the direction.",

    "Chaque journée révèle une direction lorsque vous prenez le temps de l’observer.":
      "Each day reveals a direction when you take the time to observe it.",

    "Horoscope personnalisé":
      "Personalized horoscope",

    "Votre horoscope Premium du jour":
      "Your Premium daily horoscope",

    "Énergie":
      "Energy",

    "Comprendre votre rythme, votre vitalité et les moments les plus porteurs.":
      "Understand your rhythm, your vitality, and the most favorable moments.",

    "Amour":
      "Love",

    "Décoder les émotions, les échanges et les mouvements de votre vie affective.":
      "Decode the emotions, exchanges, and movements of your emotional life.",

    "Finances":
      "Finances",

    "Identifier les décisions, les occasions et les points de vigilance matériels.":
      "Identify decisions, opportunities, and points of material caution.",

    "Carrière":
      "Career",

    "Éclairer vos ambitions, vos choix professionnels et votre progression.":
      "Illuminate your ambitions, professional choices, and progression.",

    "Votre point de départ":
      "Your starting point",

    "Une lecture conçue pour vous orienter avec clarté":
      "A reading designed to guide you with clarity",

    "Ce que vous allez découvrir":
      "What you will discover",

    "Comment le lire":
      "How to read it",

    "Une boussole, jamais une obligation":
      "A compass, never an obligation",

    "Les tendances décrites vous invitent à observer, réfléchir et choisir. Elles ne remplacent jamais votre intuition, votre jugement ni votre libre arbitre.":
      "The described trends invite you to observe, reflect, and choose. They never replace your intuition, your judgment, or your free will.",

    "Votre rapport":
      "Your report",

    "Une lecture personnalisée":
      "A personalized reading",

    "Signe :":
      "Sign:",

    "Période :":
      "Period:",

    "Rapport :":
      "Report:",
  },

  es: {
    "Votre horoscope personnalisé":
      "Su horóscopo personalizado",

    "Bienvenue dans votre guidance astrologique":
      "Bienvenido a su guía astrológica",

    "Ce rapport a été préparé pour vous accompagner durant cette période et vous aider à mieux comprendre les énergies qui vous entourent.":
      "Este informe ha sido preparado para acompañarle durante este período y ayudarle a comprender mejor las energías que le rodean.",

    "Cette lecture approfondie présente les principales énergies qui pourraient influencer votre journée.":
      "Esta lectura detallada presenta las principales energías que podrían influir en su día.",

    "Votre horoscope personnalisé vous présente les grandes tendances de cette période. Chaque section vous aidera à reconnaître les énergies les plus présentes, à mieux comprendre vos ressentis et à avancer avec davantage de clarté.":
      "Su horóscopo personalizado presenta las principales tendencias de este período. Cada sección le ayudará a reconocer las energías más presentes, comprender mejor sus emociones y avanzar con mayor claridad.",

    "Les astres éclairent le chemin, mais votre volonté choisit la direction.":
      "Los astros iluminan el camino, pero su voluntad elige la dirección.",

    "Chaque journée révèle une direction lorsque vous prenez le temps de l’observer.":
      "Cada día revela una dirección cuando se toma el tiempo de observarlo.",

    "Horoscope personnalisé":
      "Horóscopo personalizado",

    "Votre horoscope Premium du jour":
      "Su horóscopo Premium del día",

    "Énergie":
      "Energía",

    "Comprendre votre rythme, votre vitalité et les moments les plus porteurs.":
      "Comprenda su ritmo, su vitalidad y los momentos más favorables.",

    "Amour":
      "Amor",

    "Décoder les émotions, les échanges et les mouvements de votre vie affective.":
      "Descifre las emociones, los intercambios y los movimientos de su vida afectiva.",

    "Finances":
      "Finanzas",

    "Identifier les décisions, les occasions et les points de vigilance matériels.":
      "Identifique las decisiones, oportunidades y puntos de atención material.",

    "Carrière":
      "Carrera",

    "Éclairer vos ambitions, vos choix professionnels et votre progression.":
      "Aclare sus ambiciones, sus decisiones profesionales y su progreso.",

    "Votre point de départ":
      "Su punto de partida",

    "Une lecture conçue pour vous orienter avec clarté":
      "Una lectura diseñada para orientarle con claridad",

    "Ce que vous allez découvrir":
      "Lo que descubrirá",

    "Comment le lire":
      "Cómo leerlo",

    "Une boussole, jamais une obligation":
      "Una brújula, nunca una obligación",

    "Les tendances décrites vous invitent à observer, réfléchir et choisir. Elles ne remplacent jamais votre intuition, votre jugement ni votre libre arbitre.":
      "Las tendencias descritas le invitan a observar, reflexionar y elegir. Nunca sustituyen su intuición, su criterio ni su libre albedrío.",

    "Votre rapport":
      "Su informe",

    "Une lecture personnalisée":
      "Una lectura personalizada",

    "Signe :":
      "Signo:",

    "Période :":
      "Período:",

    "Rapport :":
      "Informe:",
  },

  de: {
    "Votre horoscope personnalisé":
      "Ihr persönliches Horoskop",

    "Bienvenue dans votre guidance astrologique":
      "Willkommen zu Ihrer astrologischen Begleitung",

    "Ce rapport a été préparé pour vous accompagner durant cette période et vous aider à mieux comprendre les énergies qui vous entourent.":
      "Dieser Bericht wurde erstellt, um Sie durch diesen Zeitraum zu begleiten und Ihnen zu helfen, die Energien um Sie herum besser zu verstehen.",

    "Cette lecture approfondie présente les principales énergies qui pourraient influencer votre journée.":
      "Diese ausführliche Deutung zeigt die wichtigsten Energien, die Ihren Tag beeinflussen könnten.",

    "Votre horoscope personnalisé vous présente les grandes tendances de cette période. Chaque section vous aidera à reconnaître les énergies les plus présentes, à mieux comprendre vos ressentis et à avancer avec davantage de clarté.":
      "Ihr persönliches Horoskop zeigt Ihnen die wichtigsten Tendenzen dieses Zeitraums. Jeder Abschnitt hilft Ihnen, die vorherrschenden Energien zu erkennen, Ihre Gefühle besser zu verstehen und mit größerer Klarheit voranzugehen.",

    "Les astres éclairent le chemin, mais votre volonté choisit la direction.":
      "Die Sterne erhellen den Weg, doch Ihr Wille bestimmt die Richtung.",

    "Chaque journée révèle une direction lorsque vous prenez le temps de l’observer.":
      "Jeder Tag zeigt eine Richtung, wenn Sie sich die Zeit nehmen, ihn bewusst zu beobachten.",

    "Horoscope personnalisé":
      "Persönliches Horoskop",

    "Votre horoscope Premium du jour":
      "Ihr Premium-Tageshoroskop",

    "Énergie":
      "Energie",

    "Comprendre votre rythme, votre vitalité et les moments les plus porteurs.":
      "Verstehen Sie Ihren Rhythmus, Ihre Vitalität und die günstigsten Momente.",

    "Amour":
      "Liebe",

    "Décoder les émotions, les échanges et les mouvements de votre vie affective.":
      "Entschlüsseln Sie die Emotionen, den Austausch und die Bewegungen Ihres Gefühlslebens.",

    "Finances":
      "Finanzen",

    "Identifier les décisions, les occasions et les points de vigilance matériels.":
      "Erkennen Sie Entscheidungen, Chancen und materielle Punkte, die Aufmerksamkeit erfordern.",

    "Carrière":
      "Karriere",

    "Éclairer vos ambitions, vos choix professionnels et votre progression.":
      "Beleuchten Sie Ihre Ambitionen, beruflichen Entscheidungen und Ihre Entwicklung.",

    "Votre point de départ":
      "Ihr Ausgangspunkt",

    "Une lecture conçue pour vous orienter avec clarté":
      "Eine Deutung, die Ihnen klare Orientierung geben soll",

    "Ce que vous allez découvrir":
      "Was Sie entdecken werden",

    "Comment le lire":
      "Wie Sie es lesen",

    "Une boussole, jamais une obligation":
      "Ein Kompass, niemals eine Verpflichtung",

    "Les tendances décrites vous invitent à observer, réfléchir et choisir. Elles ne remplacent jamais votre intuition, votre jugement ni votre libre arbitre.":
      "Die beschriebenen Tendenzen laden Sie dazu ein, zu beobachten, nachzudenken und zu wählen. Sie ersetzen niemals Ihre Intuition, Ihr Urteilsvermögen oder Ihren freien Willen.",

    "Votre rapport":
      "Ihr Bericht",

    "Une lecture personnalisée":
      "Eine persönliche Deutung",

    "Signe :":
      "Zeichen:",

    "Période :":
      "Zeitraum:",

    "Rapport :":
      "Bericht:",
  },

  it: {
    "Votre horoscope personnalisé":
      "Il tuo oroscopo personalizzato",

    "Bienvenue dans votre guidance astrologique":
      "Benvenuto nella tua guida astrologica",

    "Ce rapport a été préparé pour vous accompagner durant cette période et vous aider à mieux comprendre les énergies qui vous entourent.":
      "Questo rapporto è stato preparato per accompagnarti durante questo periodo e aiutarti a comprendere meglio le energie che ti circondano.",

    "Cette lecture approfondie présente les principales énergies qui pourraient influencer votre journée.":
      "Questa lettura approfondita presenta le principali energie che potrebbero influenzare la tua giornata.",

    "Votre horoscope personnalisé vous présente les grandes tendances de cette période. Chaque section vous aidera à reconnaître les énergies les plus présentes, à mieux comprendre vos ressentis et à avancer avec davantage de clarté.":
      "Il tuo oroscopo personalizzato presenta le principali tendenze di questo periodo. Ogni sezione ti aiuterà a riconoscere le energie più presenti, comprendere meglio le tue sensazioni e procedere con maggiore chiarezza.",

    "Les astres éclairent le chemin, mais votre volonté choisit la direction.":
      "Gli astri illuminano il cammino, ma la tua volontà sceglie la direzione.",

    "Chaque journée révèle une direction lorsque vous prenez le temps de l’observer.":
      "Ogni giornata rivela una direzione quando ti prendi il tempo di osservarla.",

    "Horoscope personnalisé":
      "Oroscopo personalizzato",

    "Votre horoscope Premium du jour":
      "Il tuo oroscopo Premium del giorno",

    "Énergie":
      "Energia",

    "Comprendre votre rythme, votre vitalité et les moments les plus porteurs.":
      "Comprendi il tuo ritmo, la tua vitalità e i momenti più favorevoli.",

    "Amour":
      "Amore",

    "Décoder les émotions, les échanges et les mouvements de votre vie affective.":
      "Decodifica le emozioni, gli scambi e i movimenti della tua vita affettiva.",

    "Finances":
      "Finanze",

    "Identifier les décisions, les occasions et les points de vigilance matériels.":
      "Individua le decisioni, le opportunità e i punti materiali che richiedono attenzione.",

    "Carrière":
      "Carriera",

    "Éclairer vos ambitions, vos choix professionnels et votre progression.":
      "Fai luce sulle tue ambizioni, sulle scelte professionali e sui tuoi progressi.",

    "Votre point de départ":
      "Il tuo punto di partenza",

    "Une lecture conçue pour vous orienter avec clarté":
      "Una lettura pensata per guidarti con chiarezza",

    "Ce que vous allez découvrir":
      "Cosa scoprirai",

    "Comment le lire":
      "Come leggerlo",

    "Une boussole, jamais une obligation":
      "Una bussola, mai un obbligo",

    "Les tendances décrites vous invitent à observer, réfléchir et choisir. Elles ne remplacent jamais votre intuition, votre jugement ni votre libre arbitre.":
      "Le tendenze descritte ti invitano a osservare, riflettere e scegliere. Non sostituiscono mai la tua intuizione, il tuo giudizio o il tuo libero arbitrio.",

    "Votre rapport":
      "Il tuo rapporto",

    "Une lecture personnalisée":
      "Una lettura personalizzata",

    "Signe :":
      "Segno:",

    "Période :":
      "Periodo:",

    "Rapport :":
      "Rapporto:",
  },

  pt: {
    "Votre horoscope personnalisé":
      "Seu horóscopo personalizado",

    "Bienvenue dans votre guidance astrologique":
      "Bem-vindo à sua orientação astrológica",

    "Ce rapport a été préparé pour vous accompagner durant cette période et vous aider à mieux comprendre les énergies qui vous entourent.":
      "Este relatório foi preparado para acompanhá-lo durante este período e ajudá-lo a compreender melhor as energias ao seu redor.",

    "Cette lecture approfondie présente les principales énergies qui pourraient influencer votre journée.":
      "Esta leitura aprofundada apresenta as principais energias que podem influenciar o seu dia.",

    "Votre horoscope personnalisé vous présente les grandes tendances de cette période. Chaque section vous aidera à reconnaître les énergies les plus présentes, à mieux comprendre vos ressentis et à avancer avec davantage de clarté.":
      "Seu horóscopo personalizado apresenta as principais tendências deste período. Cada seção ajudará você a reconhecer as energias mais presentes, compreender melhor seus sentimentos e avançar com mais clareza.",

    "Les astres éclairent le chemin, mais votre volonté choisit la direction.":
      "Os astros iluminam o caminho, mas sua vontade escolhe a direção.",

    "Chaque journée révèle une direction lorsque vous prenez le temps de l’observer.":
      "Cada dia revela uma direção quando você reserva um tempo para observá-lo.",

    "Horoscope personnalisé":
      "Horóscopo personalizado",

    "Votre horoscope Premium du jour":
      "Seu horóscopo Premium do dia",

    "Énergie":
      "Energia",

    "Comprendre votre rythme, votre vitalité et les moments les plus porteurs.":
      "Compreenda seu ritmo, sua vitalidade e os momentos mais favoráveis.",

    "Amour":
      "Amor",

    "Décoder les émotions, les échanges et les mouvements de votre vie affective.":
      "Decifre as emoções, as trocas e os movimentos de sua vida afetiva.",

    "Finances":
      "Finanças",

    "Identifier les décisions, les occasions et les points de vigilance matériels.":
      "Identifique decisões, oportunidades e pontos materiais que exigem atenção.",

    "Carrière":
      "Carreira",

    "Éclairer vos ambitions, vos choix professionnels et votre progression.":
      "Esclareça suas ambições, suas escolhas profissionais e sua evolução.",

    "Votre point de départ":
      "Seu ponto de partida",

    "Une lecture conçue pour vous orienter avec clarté":
      "Uma leitura criada para orientar você com clareza",

    "Ce que vous allez découvrir":
      "O que você vai descobrir",

    "Comment le lire":
      "Como ler",

    "Une boussole, jamais une obligation":
      "Uma bússola, nunca uma obrigação",

    "Les tendances décrites vous invitent à observer, réfléchir et choisir. Elles ne remplacent jamais votre intuition, votre jugement ni votre libre arbitre.":
      "As tendências descritas convidam você a observar, refletir e escolher. Elas nunca substituem sua intuição, seu julgamento ou seu livre-arbítrio.",

    "Votre rapport":
      "Seu relatório",

    "Une lecture personnalisée":
      "Uma leitura personalizada",

    "Signe :":
      "Signo:",

    "Période :":
      "Período:",

    "Rapport :":
      "Relatório:",
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

function escapeRegExp(
  value: string,
): string {
  return value.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );
}

function localizeSafeLiterals(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "HoroscopeWelcome.tsx",
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

function replaceDynamicWelcomeValues(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /const\s+periodLabel\s*=\s*formatHoroscopePeriodLabel\(\s*period\s*\);/g,
    `const periodLabel =
    __welcomeLocalizedPeriodLabel(
      period,
    );`,
  );

  output = output.replace(
    /\{identity\.zodiacSignLabel\}/g,
    "{__welcomeLocalizeDynamicText(identity.zodiacSignLabel)}",
  );

  output = output.replace(
    /\{welcomeText\}/g,
    "{__welcomeLocalizeDynamicText(welcomeText)}",
  );

  output = output.replace(
    /\{openingQuote\}/g,
    "{__welcomeLocalizeDynamicText(openingQuote)}",
  );

  output = output.replace(
    /\{reportTitle\}/g,
    "{__welcomeLocalizeDynamicText(reportTitle)}",
  );

  output = output.replace(
    /\{welcomeIntroduction\}/g,
    "{__welcomeLocalizeDynamicText(welcomeIntroduction)}",
  );

  return output;
}

function injectWelcomeHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __welcomeLocalizeDynamicText",
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
   HOROSCOPE WELCOME — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __WELCOME_MONTHS =
  ${JSON.stringify(months, null, 2)} as const;

const __WELCOME_FRENCH_MONTHS =
  ${JSON.stringify(FRENCH_MONTHS, null, 2)} as const;

const __WELCOME_ZODIAC_LABELS:
  Record<string, string> =
  ${JSON.stringify(zodiac, null, 2)};

const __WELCOME_TRANSLATIONS:
  Record<string, string> =
  ${JSON.stringify(translations, null, 2)};

function __welcomeEscapeRegExp(
  value: string,
): string {
  return value.replace(
    /[.*+?^\\${}()|[\\]\\\\]/g,
    "\\\\$&",
  );
}

function __welcomeLocalizeDynamicText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  let output = value;

  /*
   * 1 — Correspondance exacte.
   */
  const exact =
    __WELCOME_TRANSLATIONS[output];

  if (exact) {
    output = exact;
  } else {
    /*
     * 2 — Correspondance à l'intérieur
     * d'un texte dynamique plus long.
     *
     * Exemple :
     * "Martine, ce rapport..."
     *
     * Le prénom reste intact et seule
     * la phrase française est traduite.
     */
    const entries =
      Object.entries(
        __WELCOME_TRANSLATIONS,
      ).sort(
        ([a], [b]) =>
          b.length - a.length,
      );

    entries.forEach(
      ([frenchText, localizedText]) => {
        const expression =
          new RegExp(
            __welcomeEscapeRegExp(
              frenchText,
            ),
            "gi",
          );

        output =
          output.replace(
            expression,
            localizedText,
          );
      },
    );
  }

  /*
   * 3 — Mois français éventuellement
   * présents dans un contenu dynamique.
   */
  __WELCOME_FRENCH_MONTHS.forEach(
    (frenchMonth, index) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${__welcomeEscapeRegExp(
            frenchMonth,
          )}\\\\b\`,
          "gi",
        ),
        __WELCOME_MONTHS[index],
      );
    },
  );

  /*
   * 4 — Signes astrologiques.
   */
  Object.entries(
    __WELCOME_ZODIAC_LABELS,
  ).forEach(
    ([frenchSign, localizedSign]) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${__welcomeEscapeRegExp(
            frenchSign,
          )}\\\\b\`,
          "gi",
        ),
        localizedSign,
      );
    },
  );

  return output;
}

function __welcomeFormatIsoDate(
  isoDate?: string | null,
): string {
  if (!isoDate) {
    return "";
  }

  const match =
    isoDate.match(
      /^(\\\\d{4})-(\\\\d{2})-(\\\\d{2})$/,
    );

  if (!match) {
    return __welcomeLocalizeDynamicText(
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
      ? 'return `${__WELCOME_MONTHS[month - 1]} ${day}, ${year}`;'
      : locale === "de"
        ? 'return `${day}. ${__WELCOME_MONTHS[month - 1]} ${year}`;'
        : locale === "es"
          ? 'return `${day} de ${__WELCOME_MONTHS[month - 1]} de ${year}`;'
          : locale === "pt"
            ? 'return `${day} de ${__WELCOME_MONTHS[month - 1]} de ${year}`;'
            : 'return `${day} ${__WELCOME_MONTHS[month - 1]} ${year}`;'
  }
}

function __welcomeLocalizedPeriodLabel(
  period: HoroscopeSectionProps["period"],
): string {
  if (period.type === "day") {
    return __welcomeFormatIsoDate(
      period.startDate,
    );
  }

  const match =
    period.startDate?.match(
      /^(\\\\d{4})-(\\\\d{2})-(\\\\d{2})$/,
    );

  if (!match) {
    return __welcomeLocalizeDynamicText(
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
    return \`\${__WELCOME_MONTHS[
      month - 1
    ]} \${year}\`;
  }

  return String(year);
}

/* =========================================================
   END HOROSCOPE WELCOME — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeWelcome";

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

export function localizeHoroscopeWelcome(
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
    replaceDynamicWelcomeValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectWelcomeHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
