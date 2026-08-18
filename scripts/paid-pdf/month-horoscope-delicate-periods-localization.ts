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
    "Communication": "Communication",
    "Relations": "Relationships",
    "Carrière": "Career",
    "Bien-être": "Well-being",
    "Évolution générale": "General outlook",
    "Énergie": "Energy",

    "Période à surveiller":
      "Period to watch",

    "Des échanges qui demandent davantage de précision":
      "Conversations that require greater clarity",

    "Une sensibilité relationnelle plus marquée":
      "Heightened sensitivity in relationships",

    "Des ralentissements à utiliser intelligemment":
      "Slowdowns to use wisely",

    "Un besoin de ralentir et de récupérer":
      "A need to slow down and recharge",

    "Les messages, décisions ou informations peuvent manquer de clarté. Une réaction trop rapide pourrait accentuer une tension évitable.":
      "Messages, decisions or information may lack clarity. Reacting too quickly could intensify avoidable tension.",

    "Les émotions peuvent être plus intenses. Une frustration ancienne ou un besoin retenu pourrait refaire surface dans une relation importante.":
      "Emotions may feel more intense. An old frustration or an unexpressed need could resurface in an important relationship.",

    "Un délai, une réponse tardive ou une responsabilité imprévue peut modifier votre organisation et demander davantage de structure.":
      "A delay, a late response or an unexpected responsibility may disrupt your plans and require greater structure.",

    "Votre énergie peut être moins constante. Une accumulation de responsabilités pourrait réduire votre patience ou votre concentration.":
      "Your energy may be less consistent. An accumulation of responsibilities could reduce your patience or concentration.",

    "Relisez, vérifiez les informations et demandez des précisions avant de conclure.":
      "Review everything, verify the information and ask for clarification before drawing conclusions.",

    "Exprimez vos besoins calmement et évitez les décisions définitives sous le coup de l’émotion.":
      "Express your needs calmly and avoid making final decisions in the heat of the moment.",

    "Concentrez-vous sur ce qui dépend de vous et utilisez les délais pour renforcer votre préparation.":
      "Focus on what is within your control and use delays to strengthen your preparation.",

    "Allégez votre horaire lorsque cela est possible et accordez davantage de place au repos.":
      "Lighten your schedule when possible and make more room for rest.",

    "Les moments de vigilance":
      "Moments of vigilance",

    "Les périodes plus délicates de votre mois":
      "The more delicate periods of your month",

    "Anticiper sans craindre":
      "Anticipate without fear",

    "Une période délicate peut devenir constructive lorsqu’elle vous aide à ralentir, à revoir une décision ou à mieux comprendre ce qui demande votre attention.":
      "A delicate period can become constructive when it helps you slow down, reconsider a decision or better understand what requires your attention.",

    "Les périodes à surveiller":
      "Periods to watch",

    "Vigilance":
      "Vigilance",

    "À surveiller":
      "Watch closely",

    "La meilleure approche":
      "The best approach",

    "Gardez votre pouvoir de décision":
      "Keep your power of choice",
  },

  es: {
    "Communication": "Comunicación",
    "Relations": "Relaciones",
    "Carrière": "Carrera",
    "Bien-être": "Bienestar",
    "Évolution générale": "Evolución general",
    "Énergie": "Energía",

    "Période à surveiller":
      "Período a vigilar",

    "Des échanges qui demandent davantage de précision":
      "Intercambios que requieren mayor claridad",

    "Une sensibilité relationnelle plus marquée":
      "Una mayor sensibilidad en las relaciones",

    "Des ralentissements à utiliser intelligemment":
      "Ralentizaciones que conviene aprovechar con inteligencia",

    "Un besoin de ralentir et de récupérer":
      "La necesidad de bajar el ritmo y recuperarse",

    "Les messages, décisions ou informations peuvent manquer de clarté. Une réaction trop rapide pourrait accentuer une tension évitable.":
      "Los mensajes, las decisiones o la información pueden carecer de claridad. Una reacción demasiado rápida podría aumentar una tensión evitable.",

    "Les émotions peuvent être plus intenses. Une frustration ancienne ou un besoin retenu pourrait refaire surface dans une relation importante.":
      "Las emociones pueden ser más intensas. Una antigua frustración o una necesidad contenida podría resurgir en una relación importante.",

    "Un délai, une réponse tardive ou une responsabilité imprévue peut modifier votre organisation et demander davantage de structure.":
      "Un retraso, una respuesta tardía o una responsabilidad imprevista puede alterar su organización y exigir mayor estructura.",

    "Votre énergie peut être moins constante. Une accumulation de responsabilités pourrait réduire votre patience ou votre concentration.":
      "Su energía puede ser menos constante. Una acumulación de responsabilidades podría reducir su paciencia o concentración.",

    "Relisez, vérifiez les informations et demandez des précisions avant de conclure.":
      "Revise, verifique la información y pida aclaraciones antes de sacar conclusiones.",

    "Exprimez vos besoins calmement et évitez les décisions définitives sous le coup de l’émotion.":
      "Exprese sus necesidades con calma y evite tomar decisiones definitivas bajo el efecto de la emoción.",

    "Concentrez-vous sur ce qui dépend de vous et utilisez les délais pour renforcer votre préparation.":
      "Concéntrese en lo que depende de usted y aproveche los retrasos para reforzar su preparación.",

    "Allégez votre horaire lorsque cela est possible et accordez davantage de place au repos.":
      "Aligere su agenda cuando sea posible y conceda más espacio al descanso.",

    "Les moments de vigilance":
      "Momentos de vigilancia",

    "Les périodes plus délicates de votre mois":
      "Los períodos más delicados de su mes",

    "Anticiper sans craindre":
      "Anticipar sin temor",

    "Une période délicate peut devenir constructive lorsqu’elle vous aide à ralentir, à revoir une décision ou à mieux comprendre ce qui demande votre attention.":
      "Un período delicado puede ser constructivo cuando le ayuda a bajar el ritmo, reconsiderar una decisión o comprender mejor lo que requiere su atención.",

    "Les périodes à surveiller":
      "Períodos a vigilar",

    "Vigilance":
      "Vigilancia",

    "À surveiller":
      "A vigilar",

    "La meilleure approche":
      "El mejor enfoque",

    "Gardez votre pouvoir de décision":
      "Conserve su poder de decisión",
  },

  de: {
    "Communication": "Kommunikation",
    "Relations": "Beziehungen",
    "Carrière": "Beruf",
    "Bien-être": "Wohlbefinden",
    "Évolution générale": "Allgemeine Entwicklung",
    "Énergie": "Energie",

    "Période à surveiller":
      "Zeitraum, den Sie beachten sollten",

    "Des échanges qui demandent davantage de précision":
      "Gespräche, die mehr Klarheit erfordern",

    "Une sensibilité relationnelle plus marquée":
      "Eine erhöhte Sensibilität in Beziehungen",

    "Des ralentissements à utiliser intelligemment":
      "Verzögerungen, die Sie sinnvoll nutzen können",

    "Un besoin de ralentir et de récupérer":
      "Das Bedürfnis, langsamer zu werden und neue Kraft zu schöpfen",

    "Les messages, décisions ou informations peuvent manquer de clarté. Une réaction trop rapide pourrait accentuer une tension évitable.":
      "Nachrichten, Entscheidungen oder Informationen können unklar sein. Eine zu schnelle Reaktion könnte vermeidbare Spannungen verstärken.",

    "Les émotions peuvent être plus intenses. Une frustration ancienne ou un besoin retenu pourrait refaire surface dans une relation importante.":
      "Emotionen können intensiver sein. Eine alte Frustration oder ein zurückgehaltenes Bedürfnis könnte in einer wichtigen Beziehung wieder auftauchen.",

    "Un délai, une réponse tardive ou une responsabilité imprévue peut modifier votre organisation et demander davantage de structure.":
      "Eine Verzögerung, eine verspätete Antwort oder eine unerwartete Verantwortung kann Ihre Planung verändern und mehr Struktur erfordern.",

    "Votre énergie peut être moins constante. Une accumulation de responsabilités pourrait réduire votre patience ou votre concentration.":
      "Ihre Energie kann weniger konstant sein. Eine Häufung von Verpflichtungen könnte Ihre Geduld oder Konzentration beeinträchtigen.",

    "Relisez, vérifiez les informations et demandez des précisions avant de conclure.":
      "Lesen Sie alles erneut, überprüfen Sie die Informationen und bitten Sie um Klarstellung, bevor Sie Schlussfolgerungen ziehen.",

    "Exprimez vos besoins calmement et évitez les décisions définitives sous le coup de l’émotion.":
      "Äußern Sie Ihre Bedürfnisse ruhig und vermeiden Sie endgültige Entscheidungen unter dem Einfluss starker Emotionen.",

    "Concentrez-vous sur ce qui dépend de vous et utilisez les délais pour renforcer votre préparation.":
      "Konzentrieren Sie sich auf das, was Sie beeinflussen können, und nutzen Sie Verzögerungen, um Ihre Vorbereitung zu verbessern.",

    "Allégez votre horaire lorsque cela est possible et accordez davantage de place au repos.":
      "Entlasten Sie Ihren Zeitplan, wenn möglich, und schaffen Sie mehr Raum für Erholung.",

    "Les moments de vigilance":
      "Momente erhöhter Aufmerksamkeit",

    "Les périodes plus délicates de votre mois":
      "Die sensibleren Phasen Ihres Monats",

    "Anticiper sans craindre":
      "Vorausschauend handeln, ohne Angst",

    "Une période délicate peut devenir constructive lorsqu’elle vous aide à ralentir, à revoir une décision ou à mieux comprendre ce qui demande votre attention.":
      "Eine sensible Phase kann konstruktiv werden, wenn sie Ihnen hilft, langsamer zu werden, eine Entscheidung zu überdenken oder besser zu verstehen, was Ihre Aufmerksamkeit erfordert.",

    "Les périodes à surveiller":
      "Phasen, die Sie beachten sollten",

    "Vigilance":
      "Achtsamkeit",

    "À surveiller":
      "Im Blick behalten",

    "La meilleure approche":
      "Der beste Ansatz",

    "Gardez votre pouvoir de décision":
      "Bewahren Sie Ihre Entscheidungsfreiheit",
  },

  it: {
    "Communication": "Comunicazione",
    "Relations": "Relazioni",
    "Carrière": "Carriera",
    "Bien-être": "Benessere",
    "Évolution générale": "Evoluzione generale",
    "Énergie": "Energia",

    "Période à surveiller":
      "Periodo da tenere sotto controllo",

    "Des échanges qui demandent davantage de précision":
      "Scambi che richiedono maggiore chiarezza",

    "Une sensibilité relationnelle plus marquée":
      "Una maggiore sensibilità nelle relazioni",

    "Des ralentissements à utiliser intelligemment":
      "Rallentamenti da utilizzare con intelligenza",

    "Un besoin de ralentir et de récupérer":
      "Il bisogno di rallentare e recuperare",

    "Les messages, décisions ou informations peuvent manquer de clarté. Une réaction trop rapide pourrait accentuer une tension évitable.":
      "Messaggi, decisioni o informazioni possono essere poco chiari. Una reazione troppo rapida potrebbe accentuare una tensione evitabile.",

    "Les émotions peuvent être plus intenses. Une frustration ancienne ou un besoin retenu pourrait refaire surface dans une relation importante.":
      "Le emozioni possono essere più intense. Una vecchia frustrazione o un bisogno trattenuto potrebbe riemergere in una relazione importante.",

    "Un délai, une réponse tardive ou une responsabilité imprévue peut modifier votre organisation et demander davantage de structure.":
      "Un ritardo, una risposta tardiva o una responsabilità imprevista può modificare la tua organizzazione e richiedere maggiore struttura.",

    "Votre énergie peut être moins constante. Une accumulation de responsabilités pourrait réduire votre patience ou votre concentration.":
      "La tua energia può essere meno costante. Un accumulo di responsabilità potrebbe ridurre la pazienza o la concentrazione.",

    "Relisez, vérifiez les informations et demandez des précisions avant de conclure.":
      "Rileggi, verifica le informazioni e chiedi chiarimenti prima di trarre conclusioni.",

    "Exprimez vos besoins calmement et évitez les décisions définitives sous le coup de l’émotion.":
      "Esprimi i tuoi bisogni con calma ed evita decisioni definitive sotto l'effetto dell'emozione.",

    "Concentrez-vous sur ce qui dépend de vous et utilisez les délais pour renforcer votre préparation.":
      "Concentrati su ciò che dipende da te e usa i ritardi per rafforzare la tua preparazione.",

    "Allégez votre horaire lorsque cela est possible et accordez davantage de place au repos.":
      "Alleggerisci i tuoi impegni quando possibile e lascia più spazio al riposo.",

    "Les moments de vigilance":
      "Momenti di attenzione",

    "Les périodes plus délicates de votre mois":
      "I periodi più delicati del tuo mese",

    "Anticiper sans craindre":
      "Anticipare senza paura",

    "Une période délicate peut devenir constructive lorsqu’elle vous aide à ralentir, à revoir une décision ou à mieux comprendre ce qui demande votre attention.":
      "Un periodo delicato può diventare costruttivo quando ti aiuta a rallentare, rivedere una decisione o comprendere meglio ciò che richiede la tua attenzione.",

    "Les périodes à surveiller":
      "Periodi da tenere sotto controllo",

    "Vigilance":
      "Attenzione",

    "À surveiller":
      "Da monitorare",

    "La meilleure approche":
      "L'approccio migliore",

    "Gardez votre pouvoir de décision":
      "Mantieni il tuo potere decisionale",
  },

  pt: {
    "Communication": "Comunicação",
    "Relations": "Relacionamentos",
    "Carrière": "Carreira",
    "Bien-être": "Bem-estar",
    "Évolution générale": "Evolução geral",
    "Énergie": "Energia",

    "Période à surveiller":
      "Período a observar",

    "Des échanges qui demandent davantage de précision":
      "Conversas que exigem mais clareza",

    "Une sensibilité relationnelle plus marquée":
      "Uma sensibilidade maior nos relacionamentos",

    "Des ralentissements à utiliser intelligemment":
      "Desacelerações que podem ser usadas com inteligência",

    "Un besoin de ralentir et de récupérer":
      "A necessidade de desacelerar e recuperar as energias",

    "Les messages, décisions ou informations peuvent manquer de clarté. Une réaction trop rapide pourrait accentuer une tension évitable.":
      "Mensagens, decisões ou informações podem não estar claras. Uma reação rápida demais pode aumentar uma tensão que poderia ser evitada.",

    "Les émotions peuvent être plus intenses. Une frustration ancienne ou un besoin retenu pourrait refaire surface dans une relation importante.":
      "As emoções podem ficar mais intensas. Uma frustração antiga ou uma necessidade reprimida pode ressurgir em um relacionamento importante.",

    "Un délai, une réponse tardive ou une responsabilité imprévue peut modifier votre organisation et demander davantage de structure.":
      "Um atraso, uma resposta tardia ou uma responsabilidade inesperada pode alterar sua organização e exigir mais estrutura.",

    "Votre énergie peut être moins constante. Une accumulation de responsabilités pourrait réduire votre patience ou votre concentration.":
      "Sua energia pode ficar menos constante. Um acúmulo de responsabilidades pode reduzir sua paciência ou concentração.",

    "Relisez, vérifiez les informations et demandez des précisions avant de conclure.":
      "Revise, verifique as informações e peça esclarecimentos antes de tirar conclusões.",

    "Exprimez vos besoins calmement et évitez les décisions définitives sous le coup de l’émotion.":
      "Expresse suas necessidades com calma e evite decisões definitivas sob o efeito da emoção.",

    "Concentrez-vous sur ce qui dépend de vous et utilisez les délais pour renforcer votre préparation.":
      "Concentre-se no que depende de você e use os atrasos para fortalecer sua preparação.",

    "Allégez votre horaire lorsque cela est possible et accordez davantage de place au repos.":
      "Reduza seus compromissos quando possível e reserve mais espaço para o descanso.",

    "Les moments de vigilance":
      "Momentos de atenção",

    "Les périodes plus délicates de votre mois":
      "Os períodos mais delicados do seu mês",

    "Anticiper sans craindre":
      "Antecipar sem medo",

    "Une période délicate peut devenir constructive lorsqu’elle vous aide à ralentir, à revoir une décision ou à mieux comprendre ce qui demande votre attention.":
      "Um período delicado pode se tornar construtivo quando ajuda você a desacelerar, reconsiderar uma decisão ou compreender melhor o que exige sua atenção.",

    "Les périodes à surveiller":
      "Períodos a observar",

    "Vigilance":
      "Atenção",

    "À surveiller":
      "A observar",

    "La meilleure approche":
      "A melhor abordagem",

    "Gardez votre pouvoir de décision":
      "Mantenha seu poder de decisão",
  },
};

/* =========================================================
   DYNAMIC HELPERS
========================================================= */

const DYNAMIC: Record<
  NonFrenchLocale,
  {
    dateLocale: string;
    from: string;
    to: string;
    intro: (
      period: string,
      sign: string,
    ) => string;
    closingWithPeriods: (
      period: string,
      windows: string,
    ) => string;
    closingWithoutPeriods: (
      period: string,
    ) => string;
  }
> = {
  en: {
    dateLocale: "en-CA",
    from: "From",
    to: "to",

    intro: (period, sign) =>
      `Certain periods of ${period} may require more patience from ${sign}. They do not represent inevitable negative events, but rather moments when a thoughtful response can make a real difference.`,

    closingWithPeriods: (period, windows) =>
      `The main periods of vigilance for ${period} are ${windows}. The goal is not to avoid every difficulty, but to slow down when tension increases and choose a more conscious response.`,

    closingWithoutPeriods: (period) =>
      `No particularly delicate period has been identified for ${period}. Nevertheless, keep your power of choice and take a step back before any important reaction when tension increases.`,
  },

  es: {
    dateLocale: "es",
    from: "Del",
    to: "al",

    intro: (period, sign) =>
      `Algunos períodos de ${period} podrían exigir más paciencia a ${sign}. No representan acontecimientos negativos inevitables, sino momentos en los que una respuesta reflexiva puede marcar una verdadera diferencia.`,

    closingWithPeriods: (period, windows) =>
      `Los principales períodos de vigilancia de ${period} son ${windows}. El objetivo no es evitar toda dificultad, sino bajar el ritmo cuando aumenta la tensión y elegir una respuesta más consciente.`,

    closingWithoutPeriods: (period) =>
      `No se ha identificado ningún período especialmente delicado para ${period}. Aun así, conserve su poder de decisión y tome distancia antes de cualquier reacción importante cuando aumente la tensión.`,
  },

  de: {
    dateLocale: "de",
    from: "Vom",
    to: "bis",

    intro: (period, sign) =>
      `Bestimmte Phasen im ${period} könnten von ${sign} mehr Geduld verlangen. Sie stehen nicht für unvermeidbare negative Ereignisse, sondern für Momente, in denen eine überlegte Reaktion einen echten Unterschied machen kann.`,

    closingWithPeriods: (period, windows) =>
      `Die wichtigsten Phasen erhöhter Aufmerksamkeit im ${period} sind ${windows}. Es geht nicht darum, jede Schwierigkeit zu vermeiden, sondern bei zunehmender Spannung langsamer zu werden und bewusster zu reagieren.`,

    closingWithoutPeriods: (period) =>
      `Für ${period} wurde keine besonders sensible Phase festgestellt. Bewahren Sie dennoch Ihre Entscheidungsfreiheit und nehmen Sie Abstand, bevor Sie bei zunehmender Spannung wichtig reagieren.`,
  },

  it: {
    dateLocale: "it",
    from: "Dal",
    to: "al",

    intro: (period, sign) =>
      `Alcuni periodi di ${period} potrebbero richiedere maggiore pazienza al segno ${sign}. Non rappresentano eventi negativi inevitabili, ma momenti in cui una risposta ponderata può fare una reale differenza.`,

    closingWithPeriods: (period, windows) =>
      `I principali periodi di attenzione di ${period} sono ${windows}. L'obiettivo non è evitare ogni difficoltà, ma rallentare quando aumenta la tensione e scegliere una risposta più consapevole.`,

    closingWithoutPeriods: (period) =>
      `Non è stato individuato alcun periodo particolarmente delicato per ${period}. Mantieni comunque il tuo potere decisionale e prenditi un momento di distanza prima di qualsiasi reazione importante quando aumenta la tensione.`,
  },

  pt: {
    dateLocale: "pt-BR",
    from: "De",
    to: "a",

    intro: (period, sign) =>
      `Alguns períodos de ${period} podem exigir mais paciência de ${sign}. Eles não representam acontecimentos negativos inevitáveis, mas momentos em que uma resposta ponderada pode fazer uma diferença real.`,

    closingWithPeriods: (period, windows) =>
      `Os principais períodos de atenção de ${period} são ${windows}. O objetivo não é evitar todas as dificuldades, mas desacelerar quando a tensão aumenta e escolher uma resposta mais consciente.`,

    closingWithoutPeriods: (period) =>
      `Nenhum período particularmente delicado foi identificado para ${period}. Ainda assim, mantenha seu poder de decisão e reflita antes de qualquer reação importante quando a tensão aumentar.`,
  },
};

/* =========================================================
   SAFE TEXT REPLACEMENT
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

  for (
    const [from, to]
    of entries
  ) {
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
      "const __MONTH_DELICATE_LOCALE",
    )
  ) {
    return source;
  }

  const dynamic =
    DYNAMIC[locale];

  const helper = `
/* =========================================================
   MONTH DELICATE PERIODS — GENERATED LOCALE HELPERS
========================================================= */

const __MONTH_DELICATE_LOCALE =
  ${JSON.stringify(dynamic.dateLocale)};

const __MONTH_DELICATE_FROM =
  ${JSON.stringify(dynamic.from)};

const __MONTH_DELICATE_TO =
  ${JSON.stringify(dynamic.to)};

function __monthDelicateIntro(
  period: string,
  sign: string,
): string {
  ${
    locale === "en"
      ? 'return `Certain periods of ${period} may require more patience from ${sign}. They do not represent inevitable negative events, but rather moments when a thoughtful response can make a real difference.`;'
      : locale === "es"
        ? 'return `Algunos períodos de ${period} podrían exigir más paciencia a ${sign}. No representan acontecimientos negativos inevitables, sino momentos en los que una respuesta reflexiva puede marcar una verdadera diferencia.`;'
        : locale === "de"
          ? 'return `Bestimmte Phasen im ${period} könnten von ${sign} mehr Geduld verlangen. Sie stehen nicht für unvermeidbare negative Ereignisse, sondern für Momente, in denen eine überlegte Reaktion einen echten Unterschied machen kann.`;'
          : locale === "it"
            ? 'return `Alcuni periodi di ${period} potrebbero richiedere maggiore pazienza al segno ${sign}. Non rappresentano eventi negativi inevitabili, ma momenti in cui una risposta ponderata può fare una reale differenza.`;'
            : 'return `Alguns períodos de ${period} podem exigir mais paciência de ${sign}. Eles não representam acontecimentos negativos inevitáveis, mas momentos em que uma resposta ponderada pode fazer uma diferença real.`;'
  }
}

function __monthDelicateClosingWithPeriods(
  period: string,
  windows: string,
): string {
  ${
    locale === "en"
      ? 'return `The main periods of vigilance for ${period} are ${windows}. The goal is not to avoid every difficulty, but to slow down when tension increases and choose a more conscious response.`;'
      : locale === "es"
        ? 'return `Los principales períodos de vigilancia de ${period} son ${windows}. El objetivo no es evitar toda dificultad, sino bajar el ritmo cuando aumenta la tensión y elegir una respuesta más consciente.`;'
        : locale === "de"
          ? 'return `Die wichtigsten Phasen erhöhter Aufmerksamkeit im ${period} sind ${windows}. Es geht nicht darum, jede Schwierigkeit zu vermeiden, sondern bei zunehmender Spannung langsamer zu werden und bewusster zu reagieren.`;'
          : locale === "it"
            ? "return `I principali periodi di attenzione di ${period} sono ${windows}. L'obiettivo non è evitare ogni difficoltà, ma rallentare quando aumenta la tensione e scegliere una risposta più consapevole.`;"
            : 'return `Os principais períodos de atenção de ${period} são ${windows}. O objetivo não é evitar todas as dificuldades, mas desacelerar quando a tensão aumenta e escolher uma resposta mais consciente.`;'
  }
}

function __monthDelicateClosingWithoutPeriods(
  period: string,
): string {
  ${
    locale === "en"
      ? 'return `No particularly delicate period has been identified for ${period}. Nevertheless, keep your power of choice and take a step back before any important reaction when tension increases.`;'
      : locale === "es"
        ? 'return `No se ha identificado ningún período especialmente delicado para ${period}. Aun así, conserve su poder de decisión y tome distancia antes de cualquier reacción importante cuando aumente la tensión.`;'
        : locale === "de"
          ? 'return `Für ${period} wurde keine besonders sensible Phase festgestellt. Bewahren Sie dennoch Ihre Entscheidungsfreiheit und nehmen Sie Abstand, bevor Sie bei zunehmender Spannung wichtig reagieren.`;'
          : locale === "it"
            ? 'return `Non è stato individuato alcun periodo particolarmente delicato per ${period}. Mantieni comunque il tuo potere decisionale e prenditi un momento di distanza prima di qualsiasi reazione importante quando aumenta la tensione.`;'
            : 'return `Nenhum período particularmente delicado foi identificado para ${period}. Ainda assim, mantenha seu poder de decisão e reflita antes de qualquer reação importante quando a tensão aumentar.`;'
  }
}

/* =========================================================
   END GENERATED HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeMonthDelicatePeriods";

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
   DYNAMIC CODE REPLACEMENTS
========================================================= */

function replaceDynamicCode(
  source: string,
): string {
  let output =
    source;

  /*
   * Locale utilisée par Intl.DateTimeFormat.
   */
  output =
    output.replace(
      /new Intl\.DateTimeFormat\(\s*"fr-CA",/,
      `new Intl.DateTimeFormat(
    __MONTH_DELICATE_LOCALE,`,
    );

  /*
   * Intervalle de dates.
   */
  output =
    output.replace(
      /return `Du \$\{startDate\} au \$\{endDate\}`;/,
      "return `${__MONTH_DELICATE_FROM} ${startDate} ${__MONTH_DELICATE_TO} ${endDate}`;",
    );

  /*
   * Introduction dynamique.
   */
  output =
    output.replace(
      /Certaines périodes de\{" "\}[\s\S]*?peut faire une réelle différence\./,
      "{__monthDelicateIntro(period.label, identity.zodiacSignLabel)}",
    );

  /*
   * Conclusion dynamique.
   */
  output =
    output.replace(
      /`Les principales périodes de vigilance de \$\{period\.label\} sont \$\{vigilanceWindows\}\. L’objectif n’est pas d’éviter toute difficulté, mais de ralentir lorsque la tension augmente et de choisir une réponse plus consciente\.`/,
      "__monthDelicateClosingWithPeriods(period.label, vigilanceWindows)",
    );

  output =
    output.replace(
      /`Aucune période particulièrement délicate n’a été retenue pour \$\{period\.label\}\. Gardez néanmoins votre pouvoir de décision et prenez du recul avant toute réaction importante lorsque la tension augmente\.`/,
      "__monthDelicateClosingWithoutPeriods(period.label)",
    );

  return output;
}

/* =========================================================
   MAIN LOCALIZER
========================================================= */

export function localizeHoroscopeMonthDelicatePeriods(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  if (
    !source.includes(
      "HoroscopeMonthDelicatePeriods",
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
