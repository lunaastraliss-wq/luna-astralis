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
    "Amour": "Love",
    "Carrière": "Career",
    "Finances": "Finances",
    "Évolution générale": "General outlook",
    "Énergie": "Energy",

    "Période favorable":
      "Favorable period",

    "Un climat favorable aux relations et aux rapprochements":
      "A favorable climate for relationships and connection",

    "Une fenêtre utile pour faire avancer vos projets":
      "A useful window for moving your projects forward",

    "Une période propice aux décisions financières réfléchies":
      "A favorable period for thoughtful financial decisions",

    "Une période idéale pour prendre votre élan":
      "An ideal period to build momentum",

    "Les échanges gagnent en fluidité et en chaleur. Cette période peut soutenir les rapprochements, les conversations sincères et les gestes affectueux.":
      "Interactions become smoother and warmer. This period can support connection, sincere conversations and affectionate gestures.",

    "Le climat favorise les démarches professionnelles, la visibilité et les décisions qui demandent de la confiance ou de l’organisation.":
      "The climate favors professional initiatives, visibility and decisions that require confidence or organization.",

    "Cette période peut vous aider à mieux définir vos priorités, organiser vos ressources et prendre une décision utile à long terme.":
      "This period can help you clarify your priorities, organize your resources and make a useful long-term decision.",

    "L’énergie du moment soutient les initiatives, les décisions et les actions qui demandent davantage d’assurance.":
      "The current energy supports initiatives, decisions and actions that require greater confidence.",

    "Exprimez ce que vous ressentez avec simplicité et authenticité.":
      "Express what you feel with simplicity and authenticity.",

    "Présentez vos idées clairement et restez attentif aux occasions concrètes.":
      "Present your ideas clearly and stay alert to concrete opportunities.",

    "Privilégiez les choix durables plutôt que les décisions impulsives.":
      "Favor lasting choices over impulsive decisions.",

    "Profitez de cette énergie pour avancer sur ce que vous reportez.":
      "Use this energy to move forward with what you have been postponing.",

    "Les fenêtres favorables":
      "Favorable windows",

    "Les meilleures périodes de votre mois":
      "The best periods of your month",

    "Vos points d’appui":
      "Your points of support",

    "Les périodes à privilégier":
      "Periods to prioritize",

    "Période":
      "Period",

    "Favorable":
      "Favorable",

    "À privilégier":
      "To prioritize",

    "Votre rythme du mois":
      "Your rhythm for the month",
  },

  es: {
    "Amour": "Amor",
    "Carrière": "Carrera",
    "Finances": "Finanzas",
    "Évolution générale": "Evolución general",
    "Énergie": "Energía",

    "Période favorable":
      "Período favorable",

    "Un climat favorable aux relations et aux rapprochements":
      "Un clima favorable para las relaciones y los acercamientos",

    "Une fenêtre utile pour faire avancer vos projets":
      "Un período útil para hacer avanzar sus proyectos",

    "Une période propice aux décisions financières réfléchies":
      "Un período favorable para decisiones financieras reflexivas",

    "Une période idéale pour prendre votre élan":
      "Un período ideal para tomar impulso",

    "Les échanges gagnent en fluidité et en chaleur. Cette période peut soutenir les rapprochements, les conversations sincères et les gestes affectueux.":
      "Los intercambios ganan fluidez y calidez. Este período puede favorecer los acercamientos, las conversaciones sinceras y los gestos afectuosos.",

    "Le climat favorise les démarches professionnelles, la visibilité et les décisions qui demandent de la confiance ou de l’organisation.":
      "El clima favorece las iniciativas profesionales, la visibilidad y las decisiones que requieren confianza u organización.",

    "Cette période peut vous aider à mieux définir vos priorités, organiser vos ressources et prendre une décision utile à long terme.":
      "Este período puede ayudarle a definir mejor sus prioridades, organizar sus recursos y tomar una decisión útil a largo plazo.",

    "L’énergie du moment soutient les initiatives, les décisions et les actions qui demandent davantage d’assurance.":
      "La energía del momento favorece las iniciativas, las decisiones y las acciones que requieren mayor confianza.",

    "Exprimez ce que vous ressentez avec simplicité et authenticité.":
      "Exprese lo que siente con sencillez y autenticidad.",

    "Présentez vos idées clairement et restez attentif aux occasions concrètes.":
      "Presente sus ideas con claridad y manténgase atento a las oportunidades concretas.",

    "Privilégiez les choix durables plutôt que les décisions impulsives.":
      "Priorice las decisiones duraderas frente a las impulsivas.",

    "Profitez de cette énergie pour avancer sur ce que vous reportez.":
      "Aproveche esta energía para avanzar en aquello que ha estado posponiendo.",

    "Les fenêtres favorables":
      "Ventanas favorables",

    "Les meilleures périodes de votre mois":
      "Los mejores períodos de su mes",

    "Vos points d’appui":
      "Sus puntos de apoyo",

    "Les périodes à privilégier":
      "Períodos a priorizar",

    "Période":
      "Período",

    "Favorable":
      "Favorable",

    "À privilégier":
      "A priorizar",

    "Votre rythme du mois":
      "Su ritmo del mes",
  },

  de: {
    "Amour": "Liebe",
    "Carrière": "Beruf",
    "Finances": "Finanzen",
    "Évolution générale": "Allgemeine Entwicklung",
    "Énergie": "Energie",

    "Période favorable":
      "Günstige Phase",

    "Un climat favorable aux relations et aux rapprochements":
      "Ein günstiges Klima für Beziehungen und Annäherung",

    "Une fenêtre utile pour faire avancer vos projets":
      "Eine günstige Gelegenheit, Ihre Projekte voranzubringen",

    "Une période propice aux décisions financières réfléchies":
      "Eine günstige Phase für wohlüberlegte finanzielle Entscheidungen",

    "Une période idéale pour prendre votre élan":
      "Eine ideale Phase, um neuen Schwung zu gewinnen",

    "Les échanges gagnent en fluidité et en chaleur. Cette période peut soutenir les rapprochements, les conversations sincères et les gestes affectueux.":
      "Der Austausch wird fließender und herzlicher. Diese Phase kann Annäherung, aufrichtige Gespräche und liebevolle Gesten fördern.",

    "Le climat favorise les démarches professionnelles, la visibilité et les décisions qui demandent de la confiance ou de l’organisation.":
      "Das Klima begünstigt berufliche Initiativen, Sichtbarkeit und Entscheidungen, die Vertrauen oder Organisation erfordern.",

    "Cette période peut vous aider à mieux définir vos priorités, organiser vos ressources et prendre une décision utile à long terme.":
      "Diese Phase kann Ihnen helfen, Ihre Prioritäten klarer zu definieren, Ihre Ressourcen zu organisieren und eine langfristig sinnvolle Entscheidung zu treffen.",

    "L’énergie du moment soutient les initiatives, les décisions et les actions qui demandent davantage d’assurance.":
      "Die aktuelle Energie unterstützt Initiativen, Entscheidungen und Handlungen, die mehr Selbstvertrauen erfordern.",

    "Exprimez ce que vous ressentez avec simplicité et authenticité.":
      "Drücken Sie Ihre Gefühle einfach und authentisch aus.",

    "Présentez vos idées clairement et restez attentif aux occasions concrètes.":
      "Präsentieren Sie Ihre Ideen klar und achten Sie auf konkrete Chancen.",

    "Privilégiez les choix durables plutôt que les décisions impulsives.":
      "Bevorzugen Sie nachhaltige Entscheidungen gegenüber impulsiven Entscheidungen.",

    "Profitez de cette énergie pour avancer sur ce que vous reportez.":
      "Nutzen Sie diese Energie, um Dinge voranzubringen, die Sie aufgeschoben haben.",

    "Les fenêtres favorables":
      "Günstige Zeitfenster",

    "Les meilleures périodes de votre mois":
      "Die besten Phasen Ihres Monats",

    "Vos points d’appui":
      "Ihre Stärken",

    "Les périodes à privilégier":
      "Phasen, die Sie bevorzugen sollten",

    "Période":
      "Zeitraum",

    "Favorable":
      "Günstig",

    "À privilégier":
      "Zu bevorzugen",

    "Votre rythme du mois":
      "Ihr Rhythmus des Monats",
  },

  it: {
    "Amour": "Amore",
    "Carrière": "Carriera",
    "Finances": "Finanze",
    "Évolution générale": "Evoluzione generale",
    "Énergie": "Energia",

    "Période favorable":
      "Periodo favorevole",

    "Un climat favorable aux relations et aux rapprochements":
      "Un clima favorevole alle relazioni e ai riavvicinamenti",

    "Une fenêtre utile pour faire avancer vos projets":
      "Un periodo utile per far avanzare i tuoi progetti",

    "Une période propice aux décisions financières réfléchies":
      "Un periodo favorevole per decisioni finanziarie ponderate",

    "Une période idéale pour prendre votre élan":
      "Un periodo ideale per prendere slancio",

    "Les échanges gagnent en fluidité et en chaleur. Cette période peut soutenir les rapprochements, les conversations sincères et les gestes affectueux.":
      "Gli scambi diventano più fluidi e calorosi. Questo periodo può favorire i riavvicinamenti, le conversazioni sincere e i gesti affettuosi.",

    "Le climat favorise les démarches professionnelles, la visibilité et les décisions qui demandent de la confiance ou de l’organisation.":
      "Il clima favorisce le iniziative professionali, la visibilità e le decisioni che richiedono fiducia o organizzazione.",

    "Cette période peut vous aider à mieux définir vos priorités, organiser vos ressources et prendre une décision utile à long terme.":
      "Questo periodo può aiutarti a definire meglio le tue priorità, organizzare le tue risorse e prendere una decisione utile a lungo termine.",

    "L’énergie du moment soutient les initiatives, les décisions et les actions qui demandent davantage d’assurance.":
      "L'energia del momento sostiene le iniziative, le decisioni e le azioni che richiedono maggiore sicurezza.",

    "Exprimez ce que vous ressentez avec simplicité et authenticité.":
      "Esprimi ciò che senti con semplicità e autenticità.",

    "Présentez vos idées clairement et restez attentif aux occasions concrètes.":
      "Presenta le tue idee con chiarezza e presta attenzione alle opportunità concrete.",

    "Privilégiez les choix durables plutôt que les décisions impulsives.":
      "Privilegia le scelte durature rispetto alle decisioni impulsive.",

    "Profitez de cette énergie pour avancer sur ce que vous reportez.":
      "Approfitta di questa energia per portare avanti ciò che hai rimandato.",

    "Les fenêtres favorables":
      "Finestre favorevoli",

    "Les meilleures périodes de votre mois":
      "I periodi migliori del tuo mese",

    "Vos points d’appui":
      "I tuoi punti di forza",

    "Les périodes à privilégier":
      "Periodi da privilegiare",

    "Période":
      "Periodo",

    "Favorable":
      "Favorevole",

    "À privilégier":
      "Da privilegiare",

    "Votre rythme du mois":
      "Il tuo ritmo del mese",
  },

  pt: {
    "Amour": "Amor",
    "Carrière": "Carreira",
    "Finances": "Finanças",
    "Évolution générale": "Evolução geral",
    "Énergie": "Energia",

    "Période favorable":
      "Período favorável",

    "Un climat favorable aux relations et aux rapprochements":
      "Um clima favorável aos relacionamentos e às aproximações",

    "Une fenêtre utile pour faire avancer vos projets":
      "Um período útil para fazer seus projetos avançarem",

    "Une période propice aux décisions financières réfléchies":
      "Um período favorável para decisões financeiras ponderadas",

    "Une période idéale pour prendre votre élan":
      "Um período ideal para ganhar impulso",

    "Les échanges gagnent en fluidité et en chaleur. Cette période peut soutenir les rapprochements, les conversations sincères et les gestes affectueux.":
      "As interações se tornam mais fluidas e calorosas. Este período pode favorecer aproximações, conversas sinceras e gestos de carinho.",

    "Le climat favorise les démarches professionnelles, la visibilité et les décisions qui demandent de la confiance ou de l’organisation.":
      "O clima favorece iniciativas profissionais, visibilidade e decisões que exigem confiança ou organização.",

    "Cette période peut vous aider à mieux définir vos priorités, organiser vos ressources et prendre une décision utile à long terme.":
      "Este período pode ajudar você a definir melhor suas prioridades, organizar seus recursos e tomar uma decisão útil a longo prazo.",

    "L’énergie du moment soutient les initiatives, les décisions et les actions qui demandent davantage d’assurance.":
      "A energia do momento favorece iniciativas, decisões e ações que exigem mais confiança.",

    "Exprimez ce que vous ressentez avec simplicité et authenticité.":
      "Expresse o que sente com simplicidade e autenticidade.",

    "Présentez vos idées clairement et restez attentif aux occasions concrètes.":
      "Apresente suas ideias com clareza e fique atento às oportunidades concretas.",

    "Privilégiez les choix durables plutôt que les décisions impulsives.":
      "Priorize escolhas duradouras em vez de decisões impulsivas.",

    "Profitez de cette énergie pour avancer sur ce que vous reportez.":
      "Aproveite esta energia para avançar no que você vem adiando.",

    "Les fenêtres favorables":
      "Janelas favoráveis",

    "Les meilleures périodes de votre mois":
      "Os melhores períodos do seu mês",

    "Vos points d’appui":
      "Seus pontos de apoio",

    "Les périodes à privilégier":
      "Períodos a priorizar",

    "Période":
      "Período",

    "Favorable":
      "Favorável",

    "À privilégier":
      "A priorizar",

    "Votre rythme du mois":
      "Seu ritmo do mês",
  },
};

/* =========================================================
   DYNAMIC CONFIG
========================================================= */

const DATE_LOCALES: Record<
  NonFrenchLocale,
  string
> = {
  en: "en-CA",
  es: "es",
  de: "de",
  it: "it",
  pt: "pt-BR",
};

const DATE_FROM: Record<
  NonFrenchLocale,
  string
> = {
  en: "From",
  es: "Del",
  de: "Vom",
  it: "Dal",
  pt: "De",
};

const DATE_TO: Record<
  NonFrenchLocale,
  string
> = {
  en: "to",
  es: "al",
  de: "bis",
  it: "al",
  pt: "a",
};

/* =========================================================
   STATIC REPLACEMENT
========================================================= */

function replaceStaticTexts(
  source: string,
  translations: TranslationMap,
): string {
  let output = source;

  const entries =
    Object.entries(
      translations,
    ).sort(
      ([a], [b]) =>
        b.length - a.length,
    );

  for (const [from, to] of entries) {
    output =
      output.split(from).join(to);
  }

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
      "const __MONTH_BEST_DATE_LOCALE",
    )
  ) {
    return source;
  }

  const helper = `
/* =========================================================
   MONTH BEST PERIODS — GENERATED LOCALE HELPERS
========================================================= */

const __MONTH_BEST_DATE_LOCALE =
  ${JSON.stringify(DATE_LOCALES[locale])};

const __MONTH_BEST_DATE_FROM =
  ${JSON.stringify(DATE_FROM[locale])};

const __MONTH_BEST_DATE_TO =
  ${JSON.stringify(DATE_TO[locale])};

function __monthBestIntro(
  period: string,
  sign: string,
): string {
  ${
    locale === "en"
      ? 'return `Certain periods of ${period} offer a particularly favorable climate for ${sign}. They can support your initiatives, relationships, projects or organization. Use these moments as points of support, while remembering that your judgment remains essential.`;'
      : locale === "es"
        ? 'return `Algunos períodos de ${period} ofrecen un clima especialmente favorable para ${sign}. Pueden favorecer sus iniciativas, relaciones, proyectos u organización. Utilice estos momentos como puntos de apoyo, sin olvidar que su criterio sigue siendo esencial.`;'
        : locale === "de"
          ? 'return `Bestimmte Phasen im ${period} bieten ein besonders günstiges Klima für ${sign}. Sie können Ihre Initiativen, Beziehungen, Projekte oder Ihre Organisation unterstützen. Nutzen Sie diese Momente als Unterstützung und vergessen Sie nicht, dass Ihr eigenes Urteilsvermögen entscheidend bleibt.`;'
          : locale === "it"
            ? 'return `Alcuni periodi di ${period} offrono un clima particolarmente favorevole per ${sign}. Possono sostenere le tue iniziative, relazioni, progetti o la tua organizzazione. Usa questi momenti come punti di appoggio, senza dimenticare che il tuo discernimento rimane essenziale.`;'
            : 'return `Alguns períodos de ${period} oferecem um clima particularmente favorável para ${sign}. Eles podem favorecer suas iniciativas, relacionamentos, projetos ou organização. Use esses momentos como pontos de apoio, sem esquecer que seu discernimento continua essencial.`;'
  }
}

function __monthBestClosingWithPeriods(
  period: string,
  windows: string,
): string {
  ${
    locale === "en"
      ? 'return `The main favorable windows for ${period} are ${windows}. Focus your efforts on these moments, then use the other periods to reflect, adjust and prepare for what comes next.`;'
      : locale === "es"
        ? 'return `Las principales ventanas favorables de ${period} son ${windows}. Concentre sus esfuerzos en estos momentos y utilice los demás períodos para reflexionar, ajustar y preparar lo que sigue.`;'
        : locale === "de"
          ? 'return `Die wichtigsten günstigen Zeitfenster im ${period} sind ${windows}. Konzentrieren Sie Ihre Bemühungen auf diese Momente und nutzen Sie die übrigen Phasen, um nachzudenken, anzupassen und die nächsten Schritte vorzubereiten.`;'
          : locale === "it"
            ? 'return `Le principali finestre favorevoli di ${period} sono ${windows}. Concentra i tuoi sforzi su questi momenti e utilizza gli altri periodi per riflettere, adattarti e preparare ciò che verrà.`;'
            : 'return `As principais janelas favoráveis de ${period} são ${windows}. Concentre seus esforços nesses momentos e use os outros períodos para refletir, ajustar e preparar os próximos passos.`;'
  }
}

function __monthBestClosingWithoutPeriods(
  period: string,
): string {
  ${
    locale === "en"
      ? 'return `No clearly favorable window has been identified for ${period}. Move forward with discernment and use quieter moments to prepare your next steps.`;'
      : locale === "es"
        ? 'return `No se ha identificado ninguna ventana claramente favorable para ${period}. Avance con discernimiento y utilice los momentos más tranquilos para preparar sus próximos pasos.`;'
        : locale === "de"
          ? 'return `Für ${period} wurde kein eindeutig günstiges Zeitfenster festgestellt. Gehen Sie mit Bedacht vor und nutzen Sie ruhigere Momente, um Ihre nächsten Schritte vorzubereiten.`;'
          : locale === "it"
            ? 'return `Non è stata individuata alcuna finestra chiaramente favorevole per ${period}. Procedi con discernimento e usa i momenti più tranquilli per preparare i prossimi passi.`;'
            : 'return `Nenhuma janela claramente favorável foi identificada para ${period}. Avance com discernimento e use os momentos mais tranquilos para preparar seus próximos passos.`;'
  }
}

/* =========================================================
   END GENERATED HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeMonthBestPeriods";

  const index =
    source.indexOf(marker);

  if (index === -1) {
    return source;
  }

  return (
    source.slice(0, index) +
    helper +
    source.slice(index)
  );
}

/* =========================================================
   DYNAMIC CODE
========================================================= */

function replaceDynamicCode(
  source: string,
): string {
  let output = source;

  /*
   * Date locale.
   */
  output =
    output.replace(
      /new Intl\.DateTimeFormat\(\s*"fr-CA",/,
      `new Intl.DateTimeFormat(
    __MONTH_BEST_DATE_LOCALE,`,
    );

  /*
   * Du X au Y.
   */
  output =
    output.replace(
      /return `Du \$\{startDate\} au \$\{endDate\}`;/,
      "return `${__MONTH_BEST_DATE_FROM} ${startDate} ${__MONTH_BEST_DATE_TO} ${endDate}`;",
    );

  /*
   * Introduction dynamique.
   */
  output =
    output.replace(
      /Certaines périodes de\{" "\}[\s\S]*?demeure essentiel\./,
      "{__monthBestIntro(period.label, identity.zodiacSignLabel)}",
    );

  /*
   * Conclusion avec périodes.
   */
  output =
    output.replace(
      /`Les principales fenêtres favorables de \$\{period\.label\} sont \$\{favorableWindows\}\. Concentrez vos efforts sur ces moments, puis utilisez les autres périodes pour réfléchir, ajuster et préparer la suite\.`/,
      "__monthBestClosingWithPeriods(period.label, favorableWindows)",
    );

  /*
   * Conclusion sans période.
   */
  output =
    output.replace(
      /`Aucune fenêtre nettement favorable n’a été retenue pour \$\{period\.label\}\. Avancez avec discernement et utilisez les moments plus calmes pour préparer vos prochaines démarches\.`/,
      "__monthBestClosingWithoutPeriods(period.label)",
    );

  return output;
}

/* =========================================================
   MAIN LOCALIZER
========================================================= */

export function localizeHoroscopeMonthBestPeriods(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  if (
    !source.includes(
      "HoroscopeMonthBestPeriods",
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
    replaceDynamicCode(
      source,
    );

  localized =
    replaceStaticTexts(
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
