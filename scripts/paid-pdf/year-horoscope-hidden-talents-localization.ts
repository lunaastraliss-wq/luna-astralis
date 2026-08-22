import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap =
  Record<string, string>;

/* =========================================================
   HIDDEN TALENTS — TRANSLATIONS
========================================================= */

const HIDDEN_TALENTS_TRANSLATIONS: Record<
  Exclude<PaidPdfLocale, "fr">,
  TranslationMap
> = {
  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    "Analyse approfondie de votre année":
      "In-depth analysis of your year",

    "Vos talents cachés":
      "Your hidden talents",

    "vos talents cachés":
      "your hidden talents",

    "Votre talent le plus puissant":
      "Your most powerful talent",

    "La lecture de l’invisible":
      "Reading the invisible",

    "sur 100":
      "out of 100",

    "Potentiel de révélation cette année":
      "Potential for revelation this year",

    "Les capacités à révéler":
      "The abilities to reveal",

    "Comment le révéler":
      "How to reveal it",

    "Activation":
      "Activation",

    "Contexte favorable":
      "Favorable context",

    "Frein intérieur":
      "Inner restraint",

    "Comment révéler votre potentiel":
      "How to reveal your potential",

    "Votre talent caché réside dans votre aptitude à accompagner une transformation profonde sans vous satisfaire d’un changement superficiel.":
      "Your hidden talent lies in your ability to support a deep transformation without settling for superficial change.",

    "Choisissez une situation dans laquelle votre profondeur peut produire une véritable amélioration.":
      "Choose a situation in which your depth can produce real improvement.",

    "Investigation":
      "Investigation",

    "Votre persévérance vous permet de découvrir des informations importantes.":
      "Your perseverance allows you to uncover important information.",

    "Rassemblez les faits avant de tirer une conclusion définitive.":
      "Gather the facts before drawing a final conclusion.",

    "Gestion de crise":
      "Crisis management",

    "Vous pouvez devenir particulièrement lucide lorsque la situation devient intense.":
      "You can become particularly clear-minded when the situation becomes intense.",

    "Utilisez votre intensité pour stabiliser plutôt que pour contrôler.":
      "Use your intensity to stabilize rather than control.",

    "Transformation psychologique":
      "Psychological transformation",

    "Votre profondeur peut aider à identifier l’origine d’un schéma répétitif.":
      "Your depth can help identify the origin of a recurring pattern.",

    "Utilisez ce talent avec respect et sans imposer votre interprétation.":
      "Use this talent respectfully and without imposing your interpretation.",

    "Reconstruction":
      "Reconstruction",

    "Vous savez repartir sur des bases entièrement nouvelles après une rupture.":
      "You know how to start again on entirely new foundations after a rupture.",

    "Conservez les leçons sans reproduire l’ancienne structure.":
      "Keep the lessons without reproducing the old structure.",

    "Les situations complexes peuvent faire apparaître des capacités que vous utilisez rarement dans les périodes calmes.":
      "Complex situations can reveal abilities that you rarely use during calm periods.",

    "L’intensité émotionnelle peut parfois déformer une perception initialement juste.":
      "Emotional intensity can sometimes distort an initially accurate perception.",
  },

  /* =======================================================
     ESPAÑOL
  ======================================================= */

  es: {
    "Analyse approfondie de votre année":
      "Análisis profundo de tu año",

    "Vos talents cachés":
      "Tus talentos ocultos",

    "vos talents cachés":
      "tus talentos ocultos",

    "Votre talent le plus puissant":
      "Tu talento más poderoso",

    "La lecture de l’invisible":
      "La lectura de lo invisible",

    "sur 100":
      "sobre 100",

    "Potentiel de révélation cette année":
      "Potencial de revelación este año",

    "Les capacités à révéler":
      "Las capacidades por revelar",

    "Comment le révéler":
      "Cómo revelarlo",

    "Activation":
      "Activación",

    "Contexte favorable":
      "Contexto favorable",

    "Frein intérieur":
      "Freno interior",

    "Comment révéler votre potentiel":
      "Cómo revelar tu potencial",

    "Votre talent caché réside dans votre aptitude à accompagner une transformation profonde sans vous satisfaire d’un changement superficiel.":
      "Tu talento oculto reside en tu capacidad para acompañar una transformación profunda sin conformarte con un cambio superficial.",

    "Choisissez une situation dans laquelle votre profondeur peut produire une véritable amélioration.":
      "Elige una situación en la que tu profundidad pueda producir una mejora real.",

    "Investigation":
      "Investigación",

    "Votre persévérance vous permet de découvrir des informations importantes.":
      "Tu perseverancia te permite descubrir información importante.",

    "Rassemblez les faits avant de tirer une conclusion définitive.":
      "Reúne los hechos antes de sacar una conclusión definitiva.",

    "Gestion de crise":
      "Gestión de crisis",

    "Vous pouvez devenir particulièrement lucide lorsque la situation devient intense.":
      "Puedes volverte especialmente lúcido cuando la situación se vuelve intensa.",

    "Utilisez votre intensité pour stabiliser plutôt que pour contrôler.":
      "Utiliza tu intensidad para estabilizar en lugar de controlar.",

    "Transformation psychologique":
      "Transformación psicológica",

    "Votre profondeur peut aider à identifier l’origine d’un schéma répétitif.":
      "Tu profundidad puede ayudarte a identificar el origen de un patrón repetitivo.",

    "Utilisez ce talent avec respect et sans imposer votre interprétation.":
      "Utiliza este talento con respeto y sin imponer tu interpretación.",

    "Reconstruction":
      "Reconstrucción",

    "Vous savez repartir sur des bases entièrement nouvelles après une rupture.":
      "Sabes volver a empezar sobre bases completamente nuevas después de una ruptura.",

    "Conservez les leçons sans reproduire l’ancienne structure.":
      "Conserva las lecciones sin reproducir la antigua estructura.",

    "Les situations complexes peuvent faire apparaître des capacités que vous utilisez rarement dans les périodes calmes.":
      "Las situaciones complejas pueden revelar capacidades que rara vez utilizas en períodos tranquilos.",

    "L’intensité émotionnelle peut parfois déformer une perception initialement juste.":
      "La intensidad emocional puede distorsionar a veces una percepción inicialmente acertada.",
  },

  /* =======================================================
     DEUTSCH
  ======================================================= */

  de: {
    "Analyse approfondie de votre année":
      "Tiefgehende Analyse Ihres Jahres",

    "Vos talents cachés":
      "Ihre verborgenen Talente",

    "vos talents cachés":
      "Ihre verborgenen Talente",

    "Votre talent le plus puissant":
      "Ihr stärkstes Talent",

    "La lecture de l’invisible":
      "Das Lesen des Unsichtbaren",

    "sur 100":
      "von 100",

    "Potentiel de révélation cette année":
      "Entfaltungspotenzial in diesem Jahr",

    "Les capacités à révéler":
      "Die Fähigkeiten, die sich entfalten können",

    "Comment le révéler":
      "Wie Sie es entfalten können",

    "Activation":
      "Aktivierung",

    "Contexte favorable":
      "Günstiger Kontext",

    "Frein intérieur":
      "Innere Hemmung",

    "Comment révéler votre potentiel":
      "Wie Sie Ihr Potenzial entfalten können",

    "Votre talent caché réside dans votre aptitude à accompagner une transformation profonde sans vous satisfaire d’un changement superficiel.":
      "Ihr verborgenes Talent liegt in Ihrer Fähigkeit, einen tiefgreifenden Wandel zu begleiten, ohne sich mit oberflächlichen Veränderungen zufriedenzugeben.",

    "Choisissez une situation dans laquelle votre profondeur peut produire une véritable amélioration.":
      "Wählen Sie eine Situation, in der Ihre Tiefe eine echte Verbesserung bewirken kann.",

    "Investigation":
      "Analyse",

    "Votre persévérance vous permet de découvrir des informations importantes.":
      "Ihre Ausdauer ermöglicht es Ihnen, wichtige Informationen aufzudecken.",

    "Rassemblez les faits avant de tirer une conclusion définitive.":
      "Sammeln Sie die Fakten, bevor Sie eine endgültige Schlussfolgerung ziehen.",

    "Gestion de crise":
      "Krisenmanagement",

    "Vous pouvez devenir particulièrement lucide lorsque la situation devient intense.":
      "Sie können besonders klar denken, wenn eine Situation intensiv wird.",

    "Utilisez votre intensité pour stabiliser plutôt que pour contrôler.":
      "Nutzen Sie Ihre Intensität, um zu stabilisieren, statt zu kontrollieren.",

    "Transformation psychologique":
      "Psychologische Transformation",

    "Votre profondeur peut aider à identifier l’origine d’un schéma répétitif.":
      "Ihre Tiefe kann helfen, den Ursprung eines wiederkehrenden Musters zu erkennen.",

    "Utilisez ce talent avec respect et sans imposer votre interprétation.":
      "Nutzen Sie dieses Talent respektvoll, ohne Ihre Interpretation aufzudrängen.",

    "Reconstruction":
      "Neubeginn",

    "Vous savez repartir sur des bases entièrement nouvelles après une rupture.":
      "Sie können nach einem Bruch auf völlig neuen Grundlagen neu beginnen.",

    "Conservez les leçons sans reproduire l’ancienne structure.":
      "Bewahren Sie die Erkenntnisse, ohne die alte Struktur zu wiederholen.",

    "Les situations complexes peuvent faire apparaître des capacités que vous utilisez rarement dans les périodes calmes.":
      "Komplexe Situationen können Fähigkeiten sichtbar machen, die Sie in ruhigen Zeiten nur selten einsetzen.",

    "L’intensité émotionnelle peut parfois déformer une perception initialement juste.":
      "Emotionale Intensität kann eine ursprünglich zutreffende Wahrnehmung manchmal verzerren.",
  },

  /* =======================================================
     ITALIANO
  ======================================================= */

  it: {
    "Analyse approfondie de votre année":
      "Analisi approfondita del tuo anno",

    "Vos talents cachés":
      "I tuoi talenti nascosti",

    "vos talents cachés":
      "i tuoi talenti nascosti",

    "Votre talent le plus puissant":
      "Il tuo talento più potente",

    "La lecture de l’invisible":
      "La lettura dell’invisibile",

    "sur 100":
      "su 100",

    "Potentiel de révélation cette année":
      "Potenziale di rivelazione quest’anno",

    "Les capacités à révéler":
      "Le capacità da rivelare",

    "Comment le révéler":
      "Come rivelarlo",

    "Activation":
      "Attivazione",

    "Contexte favorable":
      "Contesto favorevole",

    "Frein intérieur":
      "Freno interiore",

    "Comment révéler votre potentiel":
      "Come rivelare il tuo potenziale",

    "Votre talent caché réside dans votre aptitude à accompagner une transformation profonde sans vous satisfaire d’un changement superficiel.":
      "Il tuo talento nascosto risiede nella capacità di accompagnare una trasformazione profonda senza accontentarti di un cambiamento superficiale.",

    "Choisissez une situation dans laquelle votre profondeur peut produire une véritable amélioration.":
      "Scegli una situazione in cui la tua profondità possa produrre un vero miglioramento.",

    "Investigation":
      "Indagine",

    "Votre persévérance vous permet de découvrir des informations importantes.":
      "La tua perseveranza ti permette di scoprire informazioni importanti.",

    "Rassemblez les faits avant de tirer une conclusion définitive.":
      "Raccogli i fatti prima di trarre una conclusione definitiva.",

    "Gestion de crise":
      "Gestione delle crisi",

    "Vous pouvez devenir particulièrement lucide lorsque la situation devient intense.":
      "Puoi diventare particolarmente lucido quando la situazione diventa intensa.",

    "Utilisez votre intensité pour stabiliser plutôt que pour contrôler.":
      "Usa la tua intensità per stabilizzare invece che per controllare.",

    "Transformation psychologique":
      "Trasformazione psicologica",

    "Votre profondeur peut aider à identifier l’origine d’un schéma répétitif.":
      "La tua profondità può aiutarti a identificare l’origine di uno schema ripetitivo.",

    "Utilisez ce talent avec respect et sans imposer votre interprétation.":
      "Usa questo talento con rispetto e senza imporre la tua interpretazione.",

    "Reconstruction":
      "Ricostruzione",

    "Vous savez repartir sur des bases entièrement nouvelles après une rupture.":
      "Sai ripartire su basi completamente nuove dopo una rottura.",

    "Conservez les leçons sans reproduire l’ancienne structure.":
      "Conserva gli insegnamenti senza riprodurre la vecchia struttura.",

    "Les situations complexes peuvent faire apparaître des capacités que vous utilisez rarement dans les périodes calmes.":
      "Le situazioni complesse possono far emergere capacità che utilizzi raramente nei periodi tranquilli.",

    "L’intensité émotionnelle peut parfois déformer une perception initialement juste.":
      "L’intensità emotiva può talvolta deformare una percezione inizialmente corretta.",
  },

  /* =======================================================
     PORTUGUÊS — BRASIL
  ======================================================= */

  pt: {
    "Analyse approfondie de votre année":
      "Análise aprofundada do seu ano",

    "Vos talents cachés":
      "Seus talentos ocultos",

    "vos talents cachés":
      "seus talentos ocultos",

    "Votre talent le plus puissant":
      "Seu talento mais poderoso",

    "La lecture de l’invisible":
      "A leitura do invisível",

    "sur 100":
      "de 100",

    "Potentiel de révélation cette année":
      "Potencial de revelação neste ano",

    "Les capacités à révéler":
      "As capacidades a revelar",

    "Comment le révéler":
      "Como revelá-lo",

    "Activation":
      "Ativação",

    "Contexte favorable":
      "Contexto favorável",

    "Frein intérieur":
      "Bloqueio interior",

    "Comment révéler votre potentiel":
      "Como revelar seu potencial",

    "Votre talent caché réside dans votre aptitude à accompagner une transformation profonde sans vous satisfaire d’un changement superficiel.":
      "Seu talento oculto está na capacidade de acompanhar uma transformação profunda sem se contentar com uma mudança superficial.",

    "Choisissez une situation dans laquelle votre profondeur peut produire une véritable amélioration.":
      "Escolha uma situação em que sua profundidade possa produzir uma melhoria real.",

    "Investigation":
      "Investigação",

    "Votre persévérance vous permet de découvrir des informations importantes.":
      "Sua perseverança permite descobrir informações importantes.",

    "Rassemblez les faits avant de tirer une conclusion définitive.":
      "Reúna os fatos antes de chegar a uma conclusão definitiva.",

    "Gestion de crise":
      "Gestão de crises",

    "Vous pouvez devenir particulièrement lucide lorsque la situation devient intense.":
      "Você pode se tornar especialmente lúcido quando a situação fica intensa.",

    "Utilisez votre intensité pour stabiliser plutôt que pour contrôler.":
      "Use sua intensidade para estabilizar em vez de controlar.",

    "Transformation psychologique":
      "Transformação psicológica",

    "Votre profondeur peut aider à identifier l’origine d’un schéma répétitif.":
      "Sua profundidade pode ajudar a identificar a origem de um padrão repetitivo.",

    "Utilisez ce talent avec respect et sans imposer votre interprétation.":
      "Use esse talento com respeito e sem impor sua interpretação.",

    "Reconstruction":
      "Reconstrução",

    "Vous savez repartir sur des bases entièrement nouvelles après une rupture.":
      "Você sabe recomeçar sobre bases totalmente novas depois de uma ruptura.",

    "Conservez les leçons sans reproduire l’ancienne structure.":
      "Guarde os aprendizados sem reproduzir a estrutura antiga.",

    "Les situations complexes peuvent faire apparaître des capacités que vous utilisez rarement dans les périodes calmes.":
      "Situações complexas podem revelar capacidades que você raramente usa em períodos tranquilos.",

    "L’intensité émotionnelle peut parfois déformer une perception initialement juste.":
      "A intensidade emocional pode, às vezes, distorcer uma percepção inicialmente correta.",
  },
};

/* =========================================================
   APPLY TRANSLATIONS
========================================================= */

function applyTranslations(
  source: string,
  translations: TranslationMap,
): string {
  let output = source;

  const entries =
    Object.entries(
      translations,
    ).sort(
      ([first], [second]) =>
        second.length -
        first.length,
    );

  for (
    const [
      from,
      to,
    ] of entries
  ) {
    output =
      output
        .split(from)
        .join(to);
  }

  return output;
}

/* =========================================================
   HIDDEN TALENTS LOCALIZER
========================================================= */

export function localizeYearHoroscopeHiddenTalents(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const translations =
    HIDDEN_TALENTS_TRANSLATIONS[
      locale
    ];

  return applyTranslations(
    source,
    translations,
  );
}
