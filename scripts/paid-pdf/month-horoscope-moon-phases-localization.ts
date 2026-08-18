import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

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
    "Nouveau départ":
      "New beginning",

    "Commencer, clarifier une priorité et définir une nouvelle direction.":
      "Begin, clarify a priority, and define a new direction.",

    "Définir une intention claire":
      "Set a clear intention",

    "Mise en action":
      "Taking action",

    "Agir, concrétiser vos projets et relancer ce qui mérite d'avancer.":
      "Act, bring your projects to life, and restart what deserves to move forward.",

    "Transformer vos intentions en actions":
      "Turn your intentions into action",

    "Révélation":
      "Revelation",

    "Observer les résultats, accueillir les révélations et prendre du recul avant d'agir.":
      "Observe the results, welcome revelations, and step back before acting.",

    "Observer ce qui arrive à maturité":
      "Observe what is reaching maturity",

    "Libération":
      "Release",

    "Terminer, faire le tri et laisser aller ce qui n'est plus utile.":
      "Finish, sort things out, and let go of what is no longer useful.",

    "Faire de la place avant le prochain cycle":
      "Make room before the next cycle",

    "Évolution":
      "Evolution",

    "Adapter vos actions au rythme émotionnel du moment.":
      "Adapt your actions to the emotional rhythm of the moment.",

    "Suivre le mouvement du cycle lunaire":
      "Follow the movement of the lunar cycle",

    "Choisissez une intention simple, précise et réaliste.":
      "Choose a simple, precise, and realistic intention.",

    "Avancez malgré les résistances, sans confondre obstacle et échec.":
      "Move forward despite resistance, without confusing an obstacle with failure.",

    "Accueillez vos émotions avant de prendre une décision importante.":
      "Acknowledge your emotions before making an important decision.",

    "Libérez-vous de ce qui vous épuise sans agir dans la précipitation.":
      "Let go of what drains you without acting hastily.",

    "Moment clé du cycle lunaire":
      "Key moment in the lunar cycle",

    "Cette phase lunaire marque une étape importante du cycle émotionnel et vous invite à adapter vos actions à l’énergie du moment.":
      "This lunar phase marks an important stage in the emotional cycle and invites you to adapt your actions to the energy of the moment.",

    "Votre rythme émotionnel":
      "Your emotional rhythm",

    "Les phases de la Lune":
      "The phases of the Moon",

    "Le cycle lunaire":
      "The lunar cycle",

    "Les principaux repères lunaires":
      "The main lunar milestones",

    "Période favorable pour":
      "Favorable period for",

    "Conseil":
      "Guidance",

    "Votre rythme du mois":
      "Your rhythm for the month",
  },

  es: {
    "Nouveau départ":
      "Nuevo comienzo",

    "Commencer, clarifier une priorité et définir une nouvelle direction.":
      "Comenzar, aclarar una prioridad y definir una nueva dirección.",

    "Définir une intention claire":
      "Definir una intención clara",

    "Mise en action":
      "Puesta en acción",

    "Agir, concrétiser vos projets et relancer ce qui mérite d'avancer.":
      "Actuar, concretar sus proyectos y reactivar lo que merece avanzar.",

    "Transformer vos intentions en actions":
      "Transformar sus intenciones en acciones",

    "Révélation":
      "Revelación",

    "Observer les résultats, accueillir les révélations et prendre du recul avant d'agir.":
      "Observar los resultados, acoger las revelaciones y tomar distancia antes de actuar.",

    "Observer ce qui arrive à maturité":
      "Observar lo que llega a su madurez",

    "Libération":
      "Liberación",

    "Terminer, faire le tri et laisser aller ce qui n'est plus utile.":
      "Terminar, ordenar y dejar ir lo que ya no es útil.",

    "Faire de la place avant le prochain cycle":
      "Hacer espacio antes del próximo ciclo",

    "Évolution":
      "Evolución",

    "Adapter vos actions au rythme émotionnel du moment.":
      "Adaptar sus acciones al ritmo emocional del momento.",

    "Suivre le mouvement du cycle lunaire":
      "Seguir el movimiento del ciclo lunar",

    "Choisissez une intention simple, précise et réaliste.":
      "Elija una intención simple, precisa y realista.",

    "Avancez malgré les résistances, sans confondre obstacle et échec.":
      "Avance a pesar de las resistencias, sin confundir un obstáculo con un fracaso.",

    "Accueillez vos émotions avant de prendre une décision importante.":
      "Acoja sus emociones antes de tomar una decisión importante.",

    "Libérez-vous de ce qui vous épuise sans agir dans la précipitation.":
      "Libérese de lo que le agota sin actuar precipitadamente.",

    "Moment clé du cycle lunaire":
      "Momento clave del ciclo lunar",

    "Cette phase lunaire marque une étape importante du cycle émotionnel et vous invite à adapter vos actions à l’énergie du moment.":
      "Esta fase lunar marca una etapa importante del ciclo emocional y le invita a adaptar sus acciones a la energía del momento.",

    "Votre rythme émotionnel":
      "Su ritmo emocional",

    "Les phases de la Lune":
      "Las fases de la Luna",

    "Le cycle lunaire":
      "El ciclo lunar",

    "Les principaux repères lunaires":
      "Los principales hitos lunares",

    "Période favorable pour":
      "Período favorable para",

    "Conseil":
      "Consejo",

    "Votre rythme du mois":
      "Su ritmo del mes",
  },

  de: {
    "Nouveau départ":
      "Neuanfang",

    "Commencer, clarifier une priorité et définir une nouvelle direction.":
      "Beginnen, eine Priorität klären und eine neue Richtung festlegen.",

    "Définir une intention claire":
      "Eine klare Absicht setzen",

    "Mise en action":
      "Umsetzung",

    "Agir, concrétiser vos projets et relancer ce qui mérite d'avancer.":
      "Handeln, Ihre Vorhaben konkretisieren und das wieder in Gang bringen, was vorankommen soll.",

    "Transformer vos intentions en actions":
      "Ihre Absichten in Handlungen umsetzen",

    "Révélation":
      "Erkenntnis",

    "Observer les résultats, accueillir les révélations et prendre du recul avant d'agir.":
      "Ergebnisse beobachten, Erkenntnisse annehmen und vor dem Handeln Abstand gewinnen.",

    "Observer ce qui arrive à maturité":
      "Beobachten, was zur Reife gelangt",

    "Libération":
      "Loslassen",

    "Terminer, faire le tri et laisser aller ce qui n'est plus utile.":
      "Abschließen, ordnen und loslassen, was nicht mehr nützlich ist.",

    "Faire de la place avant le prochain cycle":
      "Vor dem nächsten Zyklus Raum schaffen",

    "Évolution":
      "Entwicklung",

    "Adapter vos actions au rythme émotionnel du moment.":
      "Ihre Handlungen an den emotionalen Rhythmus des Augenblicks anpassen.",

    "Suivre le mouvement du cycle lunaire":
      "Dem Verlauf des Mondzyklus folgen",

    "Choisissez une intention simple, précise et réaliste.":
      "Wählen Sie eine einfache, klare und realistische Absicht.",

    "Avancez malgré les résistances, sans confondre obstacle et échec.":
      "Gehen Sie trotz Widerständen weiter, ohne Hindernisse mit Scheitern zu verwechseln.",

    "Accueillez vos émotions avant de prendre une décision importante.":
      "Nehmen Sie Ihre Gefühle wahr, bevor Sie eine wichtige Entscheidung treffen.",

    "Libérez-vous de ce qui vous épuise sans agir dans la précipitation.":
      "Lösen Sie sich von dem, was Sie erschöpft, ohne übereilt zu handeln.",

    "Moment clé du cycle lunaire":
      "Schlüsselmoment im Mondzyklus",

    "Cette phase lunaire marque une étape importante du cycle émotionnel et vous invite à adapter vos actions à l’énergie du moment.":
      "Diese Mondphase markiert eine wichtige Etappe im emotionalen Zyklus und lädt Sie ein, Ihr Handeln an die Energie des Augenblicks anzupassen.",

    "Votre rythme émotionnel":
      "Ihr emotionaler Rhythmus",

    "Les phases de la Lune":
      "Die Mondphasen",

    "Le cycle lunaire":
      "Der Mondzyklus",

    "Les principaux repères lunaires":
      "Die wichtigsten Mondphasen",

    "Période favorable pour":
      "Günstige Zeit für",

    "Conseil":
      "Rat",

    "Votre rythme du mois":
      "Ihr Rhythmus des Monats",
  },

  it: {
    "Nouveau départ":
      "Nuovo inizio",

    "Commencer, clarifier une priorité et définir une nouvelle direction.":
      "Iniziare, chiarire una priorità e definire una nuova direzione.",

    "Définir une intention claire":
      "Definire un'intenzione chiara",

    "Mise en action":
      "Passaggio all'azione",

    "Agir, concrétiser vos projets et relancer ce qui mérite d'avancer.":
      "Agire, concretizzare i tuoi progetti e rilanciare ciò che merita di avanzare.",

    "Transformer vos intentions en actions":
      "Trasformare le tue intenzioni in azioni",

    "Révélation":
      "Rivelazione",

    "Observer les résultats, accueillir les révélations et prendre du recul avant d'agir.":
      "Osservare i risultati, accogliere le rivelazioni e prendere le distanze prima di agire.",

    "Observer ce qui arrive à maturité":
      "Osservare ciò che giunge a maturazione",

    "Libération":
      "Liberazione",

    "Terminer, faire le tri et laisser aller ce qui n'est plus utile.":
      "Concludere, fare ordine e lasciare andare ciò che non è più utile.",

    "Faire de la place avant le prochain cycle":
      "Fare spazio prima del prossimo ciclo",

    "Évolution":
      "Evoluzione",

    "Adapter vos actions au rythme émotionnel du moment.":
      "Adattare le tue azioni al ritmo emotivo del momento.",

    "Suivre le mouvement du cycle lunaire":
      "Seguire il movimento del ciclo lunare",

    "Choisissez une intention simple, précise et réaliste.":
      "Scegli un'intenzione semplice, precisa e realistica.",

    "Avancez malgré les résistances, sans confondre obstacle et échec.":
      "Avanza nonostante le resistenze, senza confondere un ostacolo con un fallimento.",

    "Accueillez vos émotions avant de prendre une décision importante.":
      "Accogli le tue emozioni prima di prendere una decisione importante.",

    "Libérez-vous de ce qui vous épuise sans agir dans la précipitation.":
      "Liberati da ciò che ti esaurisce senza agire precipitosamente.",

    "Moment clé du cycle lunaire":
      "Momento chiave del ciclo lunare",

    "Cette phase lunaire marque une étape importante du cycle émotionnel et vous invite à adapter vos actions à l’énergie du moment.":
      "Questa fase lunare segna una tappa importante del ciclo emotivo e ti invita ad adattare le tue azioni all'energia del momento.",

    "Votre rythme émotionnel":
      "Il tuo ritmo emotivo",

    "Les phases de la Lune":
      "Le fasi della Luna",

    "Le cycle lunaire":
      "Il ciclo lunare",

    "Les principaux repères lunaires":
      "I principali riferimenti lunari",

    "Période favorable pour":
      "Periodo favorevole per",

    "Conseil":
      "Consiglio",

    "Votre rythme du mois":
      "Il tuo ritmo del mese",
  },

  pt: {
    "Nouveau départ":
      "Novo começo",

    "Commencer, clarifier une priorité et définir une nouvelle direction.":
      "Começar, esclarecer uma prioridade e definir uma nova direção.",

    "Définir une intention claire":
      "Definir uma intenção clara",

    "Mise en action":
      "Entrada em ação",

    "Agir, concrétiser vos projets et relancer ce qui mérite d'avancer.":
      "Agir, concretizar seus projetos e retomar o que merece avançar.",

    "Transformer vos intentions en actions":
      "Transformar suas intenções em ações",

    "Révélation":
      "Revelação",

    "Observer les résultats, accueillir les révélations et prendre du recul avant d'agir.":
      "Observar os resultados, acolher as revelações e tomar distância antes de agir.",

    "Observer ce qui arrive à maturité":
      "Observar o que está chegando à maturidade",

    "Libération":
      "Liberação",

    "Terminer, faire le tri et laisser aller ce qui n'est plus utile.":
      "Concluir, organizar e deixar ir o que não é mais útil.",

    "Faire de la place avant le prochain cycle":
      "Abrir espaço antes do próximo ciclo",

    "Évolution":
      "Evolução",

    "Adapter vos actions au rythme émotionnel du moment.":
      "Adaptar suas ações ao ritmo emocional do momento.",

    "Suivre le mouvement du cycle lunaire":
      "Acompanhar o movimento do ciclo lunar",

    "Choisissez une intention simple, précise et réaliste.":
      "Escolha uma intenção simples, precisa e realista.",

    "Avancez malgré les résistances, sans confondre obstacle et échec.":
      "Avance apesar das resistências, sem confundir obstáculo com fracasso.",

    "Accueillez vos émotions avant de prendre une décision importante.":
      "Acolha suas emoções antes de tomar uma decisão importante.",

    "Libérez-vous de ce qui vous épuise sans agir dans la précipitation.":
      "Liberte-se do que esgota você sem agir precipitadamente.",

    "Moment clé du cycle lunaire":
      "Momento-chave do ciclo lunar",

    "Cette phase lunaire marque une étape importante du cycle émotionnel et vous invite à adapter vos actions à l’énergie du moment.":
      "Esta fase lunar marca uma etapa importante do ciclo emocional e convida você a adaptar suas ações à energia do momento.",

    "Votre rythme émotionnel":
      "Seu ritmo emocional",

    "Les phases de la Lune":
      "As fases da Lua",

    "Le cycle lunaire":
      "O ciclo lunar",

    "Les principaux repères lunaires":
      "Os principais marcos lunares",

    "Période favorable pour":
      "Período favorável para",

    "Conseil":
      "Conselho",

    "Votre rythme du mois":
      "Seu ritmo do mês",
  },
};

/* =========================================================
   PHASE DISPLAY NAMES
   IMPORTANT:
   French values remain internal keys.
========================================================= */

const PHASE_NAMES: Record<
  NonFrenchLocale,
  Record<string, string>
> = {
  en: {
    "Nouvelle Lune": "New Moon",
    "Premier quartier": "First Quarter",
    "Pleine Lune": "Full Moon",
    "Dernier quartier": "Last Quarter",
  },

  es: {
    "Nouvelle Lune": "Luna Nueva",
    "Premier quartier": "Cuarto creciente",
    "Pleine Lune": "Luna Llena",
    "Dernier quartier": "Cuarto menguante",
  },

  de: {
    "Nouvelle Lune": "Neumond",
    "Premier quartier": "Erstes Viertel",
    "Pleine Lune": "Vollmond",
    "Dernier quartier": "Letztes Viertel",
  },

  it: {
    "Nouvelle Lune": "Luna Nuova",
    "Premier quartier": "Primo quarto",
    "Pleine Lune": "Luna Piena",
    "Dernier quartier": "Ultimo quarto",
  },

  pt: {
    "Nouvelle Lune": "Lua Nova",
    "Premier quartier": "Quarto crescente",
    "Pleine Lune": "Lua Cheia",
    "Dernier quartier": "Quarto minguante",
  },
};

/* =========================================================
   DATE LOCALES
========================================================= */

const LOCALE_TAGS: Record<
  NonFrenchLocale,
  string
> = {
  en: "en-CA",
  es: "es",
  de: "de",
  it: "it",
  pt: "pt-BR",
};

/* =========================================================
   TRANSLATE STATIC SOURCE TEXT

   IMPORTANT:
   We deliberately DO NOT translate string literals
   that are object property names.

   This preserves:
   PHASE_PRESENTATIONS["Nouvelle Lune"]
   etc.

   Otherwise getPhasePresentation(phase.phase)
   would no longer find the French internal key.
========================================================= */

function localizeStaticText(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "HoroscopeMonthMoonPhases.tsx",
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

  function isPropertyName(
    node:
      | ts.StringLiteral
      | ts.NoSubstitutionTemplateLiteral,
  ): boolean {
    const parent =
      node.parent;

    if (
      ts.isPropertyAssignment(parent) &&
      parent.name === node
    ) {
      return true;
    }

    if (
      ts.isMethodDeclaration(parent) &&
      parent.name === node
    ) {
      return true;
    }

    return false;
  }

  function visit(
    node: ts.Node,
  ): void {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    ) {
      /*
       * Never translate object keys such as:
       *
       * "Nouvelle Lune": { ... }
       *
       * They are internal lookup keys.
       */
      if (!isPropertyName(node)) {
        const translated =
          translations[node.text];

        if (
          translated &&
          translated !== node.text
        ) {
          replacements.push({
            start:
              node.getStart(
                sourceFile,
              ),

            end:
              node.getEnd(),

            value:
              JSON.stringify(
                translated,
              ),
          });
        }
      }
    }

    if (
      ts.isJsxText(node)
    ) {
      const raw =
        node.getText(
          sourceFile,
        );

      const trimmed =
        raw.trim();

      const translated =
        translations[
          trimmed
        ];

      if (
        translated &&
        translated !== trimmed
      ) {
        const startIndex =
          raw.indexOf(
            trimmed,
          );

        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),

          end:
            node.getEnd(),

          value:
            raw.slice(
              0,
              startIndex,
            ) +
            translated +
            raw.slice(
              startIndex +
                trimmed.length,
            ),
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

/* =========================================================
   DATE FORMATTER
========================================================= */

function localizeDateFormatter(
  source: string,
  locale: NonFrenchLocale,
): string {
  return source.replace(
    /new Intl\.DateTimeFormat\(\s*"fr-CA",/g,
    `new Intl.DateTimeFormat(
      ${JSON.stringify(
        LOCALE_TAGS[
          locale
        ],
      )},`,
  );
}

/* =========================================================
   RUNTIME HELPERS FOR DYNAMIC MOON-PHASE DATA
========================================================= */

function injectDynamicHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __monthMoonPhaseName(",
    )
  ) {
    return source;
  }

  const phaseNames =
    PHASE_NAMES[
      locale
    ];

  const dynamicReplacements: Record<
    NonFrenchLocale,
    Array<[string, string]>
  > = {
    en: [
      [
        "Dernier quartier — Bilan et détachement en ",
        "Last Quarter — Review and release in ",
      ],
      [
        "Nouvelle Lune — Nouveau départ en ",
        "New Moon — New beginning in ",
      ],
      [
        "Premier quartier — Décision et mouvement en ",
        "First Quarter — Decision and movement in ",
      ],
      [
        "Pleine Lune — Culmination et révélation en ",
        "Full Moon — Culmination and revelation in ",
      ],

      [
        "Le dernier quartier invite à faire le bilan du cycle en cours. Il favorise les ajustements, le détachement et la préparation d’une nouvelle étape. Cette phase se produit dans le signe ",
        "The Last Quarter invites you to review the current cycle. It favors adjustments, release, and preparation for a new stage. This phase occurs in the sign ",
      ],
      [
        "La Nouvelle Lune marque le début d’un nouveau cycle émotionnel. Elle favorise les intentions, les décisions intérieures et les projets qui doivent encore prendre forme. Cette phase se produit dans le signe ",
        "The New Moon marks the beginning of a new emotional cycle. It favors intentions, inner decisions, and projects that still need to take shape. This phase occurs in the sign ",
      ],
      [
        "Le premier quartier crée une énergie de mouvement et de décision. Les intentions posées précédemment rencontrent leurs premiers défis et demandent une action concrète. Cette phase se produit dans le signe ",
        "The First Quarter creates an energy of movement and decision. Previously set intentions meet their first challenges and require concrete action. This phase occurs in the sign ",
      ],
      [
        "La Pleine Lune représente un moment de culmination, de révélation ou de prise de conscience. Les émotions peuvent devenir plus visibles et une situation peut atteindre un point décisif. Cette phase se produit dans le signe ",
        "The Full Moon represents a moment of culmination, revelation, or realization. Emotions may become more visible and a situation may reach a decisive point. This phase occurs in the sign ",
      ],

      [
        ", ce qui colore son influence selon les qualités de ce signe.",
        ", which colors its influence according to the qualities of that sign.",
      ],

      [
        "Libérez ce qui n’est plus utile et terminez ce qui doit l’être avant de commencer autre chose.",
        "Release what is no longer useful and complete what needs to be finished before beginning something else.",
      ],
      [
        "Définissez une intention claire et laissez le projet se développer progressivement.",
        "Set a clear intention and allow the project to develop gradually.",
      ],
      [
        "Passez à l’action malgré les hésitations et ajustez votre stratégie selon les premiers résultats.",
        "Take action despite hesitation and adjust your strategy according to the first results.",
      ],
      [
        "Observez ce qui devient évident avant de prendre une décision uniquement sous l’effet de l’émotion.",
        "Observe what becomes clear before making a decision based solely on emotion.",
      ],
    ],

    es: [
      [
        "Dernier quartier — Bilan et détachement en ",
        "Cuarto menguante — Balance y desapego en ",
      ],
      [
        "Nouvelle Lune — Nouveau départ en ",
        "Luna Nueva — Nuevo comienzo en ",
      ],
      [
        "Premier quartier — Décision et mouvement en ",
        "Cuarto creciente — Decisión y movimiento en ",
      ],
      [
        "Pleine Lune — Culmination et révélation en ",
        "Luna Llena — Culminación y revelación en ",
      ],

      [
        "Le dernier quartier invite à faire le bilan du cycle en cours. Il favorise les ajustements, le détachement et la préparation d’une nouvelle étape. Cette phase se produit dans le signe ",
        "El Cuarto menguante invita a hacer balance del ciclo en curso. Favorece los ajustes, el desapego y la preparación de una nueva etapa. Esta fase se produce en el signo ",
      ],
      [
        "La Nouvelle Lune marque le début d’un nouveau cycle émotionnel. Elle favorise les intentions, les décisions intérieures et les projets qui doivent encore prendre forme. Cette phase se produit dans le signe ",
        "La Luna Nueva marca el comienzo de un nuevo ciclo emocional. Favorece las intenciones, las decisiones interiores y los proyectos que todavía deben tomar forma. Esta fase se produce en el signo ",
      ],
      [
        "Le premier quartier crée une énergie de mouvement et de décision. Les intentions posées précédemment rencontrent leurs premiers défis et demandent une action concrète. Cette phase se produit dans le signe ",
        "El Cuarto creciente crea una energía de movimiento y decisión. Las intenciones planteadas anteriormente encuentran sus primeros desafíos y requieren una acción concreta. Esta fase se produce en el signo ",
      ],
      [
        "La Pleine Lune représente un moment de culmination, de révélation ou de prise de conscience. Les émotions peuvent devenir plus visibles et une situation peut atteindre un point décisif. Cette phase se produit dans le signe ",
        "La Luna Llena representa un momento de culminación, revelación o toma de conciencia. Las emociones pueden hacerse más visibles y una situación puede alcanzar un punto decisivo. Esta fase se produce en el signo ",
      ],

      [
        ", ce qui colore son influence selon les qualités de ce signe.",
        ", lo que matiza su influencia según las cualidades de ese signo.",
      ],

      [
        "Libérez ce qui n’est plus utile et terminez ce qui doit l’être avant de commencer autre chose.",
        "Libere lo que ya no es útil y termine lo que debe concluir antes de comenzar otra cosa.",
      ],
      [
        "Définissez une intention claire et laissez le projet se développer progressivement.",
        "Defina una intención clara y deje que el proyecto se desarrolle progresivamente.",
      ],
      [
        "Passez à l’action malgré les hésitations et ajustez votre stratégie selon les premiers résultats.",
        "Pase a la acción a pesar de las dudas y ajuste su estrategia según los primeros resultados.",
      ],
      [
        "Observez ce qui devient évident avant de prendre une décision uniquement sous l’effet de l’émotion.",
        "Observe lo que se vuelve evidente antes de tomar una decisión únicamente bajo el efecto de la emoción.",
      ],
    ],

    de: [
      [
        "Dernier quartier — Bilan et détachement en ",
        "Letztes Viertel — Rückblick und Loslassen in ",
      ],
      [
        "Nouvelle Lune — Nouveau départ en ",
        "Neumond — Neuanfang in ",
      ],
      [
        "Premier quartier — Décision et mouvement en ",
        "Erstes Viertel — Entscheidung und Bewegung in ",
      ],
      [
        "Pleine Lune — Culmination et révélation en ",
        "Vollmond — Höhepunkt und Erkenntnis in ",
      ],

      [
        "Le dernier quartier invite à faire le bilan du cycle en cours. Il favorise les ajustements, le détachement et la préparation d’une nouvelle étape. Cette phase se produit dans le signe ",
        "Das Letzte Viertel lädt dazu ein, den laufenden Zyklus zu überprüfen. Es unterstützt Anpassungen, Loslassen und die Vorbereitung auf eine neue Etappe. Diese Phase findet im Zeichen ",
      ],
      [
        "La Nouvelle Lune marque le début d’un nouveau cycle émotionnel. Elle favorise les intentions, les décisions intérieures et les projets qui doivent encore prendre forme. Cette phase se produit dans le signe ",
        "Der Neumond markiert den Beginn eines neuen emotionalen Zyklus. Er unterstützt Absichten, innere Entscheidungen und Projekte, die noch Gestalt annehmen müssen. Diese Phase findet im Zeichen ",
      ],
      [
        "Le premier quartier crée une énergie de mouvement et de décision. Les intentions posées précédemment rencontrent leurs premiers défis et demandent une action concrète. Cette phase se produit dans le signe ",
        "Das Erste Viertel erzeugt eine Energie von Bewegung und Entscheidung. Zuvor gesetzte Absichten treffen auf erste Herausforderungen und erfordern konkretes Handeln. Diese Phase findet im Zeichen ",
      ],
      [
        "La Pleine Lune représente un moment de culmination, de révélation ou de prise de conscience. Les émotions peuvent devenir plus visibles et une situation peut atteindre un point décisif. Cette phase se produit dans le signe ",
        "Der Vollmond steht für einen Moment des Höhepunkts, der Erkenntnis oder des Bewusstwerdens. Emotionen können deutlicher werden und eine Situation kann einen entscheidenden Punkt erreichen. Diese Phase findet im Zeichen ",
      ],

      [
        ", ce qui colore son influence selon les qualités de ce signe.",
        " statt, wodurch sein Einfluss von den Eigenschaften dieses Zeichens geprägt wird.",
      ],

      [
        "Libérez ce qui n’est plus utile et terminez ce qui doit l’être avant de commencer autre chose.",
        "Lassen Sie los, was nicht mehr nützlich ist, und beenden Sie, was abgeschlossen werden muss, bevor Sie etwas Neues beginnen.",
      ],
      [
        "Définissez une intention claire et laissez le projet se développer progressivement.",
        "Setzen Sie eine klare Absicht und lassen Sie das Projekt sich schrittweise entwickeln.",
      ],
      [
        "Passez à l’action malgré les hésitations et ajustez votre stratégie selon les premiers résultats.",
        "Handeln Sie trotz möglicher Zweifel und passen Sie Ihre Strategie an die ersten Ergebnisse an.",
      ],
      [
        "Observez ce qui devient évident avant de prendre une décision uniquement sous l’effet de l’émotion.",
        "Beobachten Sie, was deutlich wird, bevor Sie eine Entscheidung ausschließlich aus einer Emotion heraus treffen.",
      ],
    ],

    it: [
      [
        "Dernier quartier — Bilan et détachement en ",
        "Ultimo quarto — Bilancio e distacco in ",
      ],
      [
        "Nouvelle Lune — Nouveau départ en ",
        "Luna Nuova — Nuovo inizio in ",
      ],
      [
        "Premier quartier — Décision et mouvement en ",
        "Primo quarto — Decisione e movimento in ",
      ],
      [
        "Pleine Lune — Culmination et révélation en ",
        "Luna Piena — Culmine e rivelazione in ",
      ],

      [
        "Le dernier quartier invite à faire le bilan du cycle en cours. Il favorise les ajustements, le détachement et la préparation d’une nouvelle étape. Cette phase se produit dans le signe ",
        "L’Ultimo quarto invita a fare il punto sul ciclo in corso. Favorisce gli aggiustamenti, il distacco e la preparazione di una nuova fase. Questa fase si verifica nel segno ",
      ],
      [
        "La Nouvelle Lune marque le début d’un nouveau cycle émotionnel. Elle favorise les intentions, les décisions intérieures et les projets qui doivent encore prendre forme. Cette phase se produit dans le signe ",
        "La Luna Nuova segna l’inizio di un nuovo ciclo emotivo. Favorisce le intenzioni, le decisioni interiori e i progetti che devono ancora prendere forma. Questa fase si verifica nel segno ",
      ],
      [
        "Le premier quartier crée une énergie de mouvement et de décision. Les intentions posées précédemment rencontrent leurs premiers défis et demandent une action concrète. Cette phase se produit dans le signe ",
        "Il Primo quarto crea un’energia di movimento e decisione. Le intenzioni stabilite in precedenza incontrano le prime sfide e richiedono un’azione concreta. Questa fase si verifica nel segno ",
      ],
      [
        "La Pleine Lune représente un moment de culmination, de révélation ou de prise de conscience. Les émotions peuvent devenir plus visibles et une situation peut atteindre un point décisif. Cette phase se produit dans le signe ",
        "La Luna Piena rappresenta un momento di culmine, rivelazione o presa di coscienza. Le emozioni possono diventare più visibili e una situazione può raggiungere un punto decisivo. Questa fase si verifica nel segno ",
      ],

      [
        ", ce qui colore son influence selon les qualités de ce signe.",
        ", colorando la sua influenza secondo le qualità di questo segno.",
      ],

      [
        "Libérez ce qui n’est plus utile et terminez ce qui doit l’être avant de commencer autre chose.",
        "Lascia andare ciò che non è più utile e concludi ciò che deve essere terminato prima di iniziare altro.",
      ],
      [
        "Définissez une intention claire et laissez le projet se développer progressivement.",
        "Definisci un’intenzione chiara e lascia che il progetto si sviluppi gradualmente.",
      ],
      [
        "Passez à l’action malgré les hésitations et ajustez votre stratégie selon les premiers résultats.",
        "Passa all’azione nonostante le esitazioni e adatta la tua strategia in base ai primi risultati.",
      ],
      [
        "Observez ce qui devient évident avant de prendre une décision uniquement sous l’effet de l’émotion.",
        "Osserva ciò che diventa evidente prima di prendere una decisione basata esclusivamente sull’emozione.",
      ],
    ],

    pt: [
      [
        "Dernier quartier — Bilan et détachement en ",
        "Quarto minguante — Balanço e desapego em ",
      ],
      [
        "Nouvelle Lune — Nouveau départ en ",
        "Lua Nova — Novo começo em ",
      ],
      [
        "Premier quartier — Décision et mouvement en ",
        "Quarto crescente — Decisão e movimento em ",
      ],
      [
        "Pleine Lune — Culmination et révélation en ",
        "Lua Cheia — Culminação e revelação em ",
      ],

      [
        "Le dernier quartier invite à faire le bilan du cycle en cours. Il favorise les ajustements, le détachement et la préparation d’une nouvelle étape. Cette phase se produit dans le signe ",
        "O Quarto minguante convida você a fazer um balanço do ciclo atual. Ele favorece ajustes, desapego e a preparação de uma nova etapa. Esta fase ocorre no signo ",
      ],
      [
        "La Nouvelle Lune marque le début d’un nouveau cycle émotionnel. Elle favorise les intentions, les décisions intérieures et les projets qui doivent encore prendre forme. Cette phase se produit dans le signe ",
        "A Lua Nova marca o início de um novo ciclo emocional. Ela favorece intenções, decisões interiores e projetos que ainda precisam tomar forma. Esta fase ocorre no signo ",
      ],
      [
        "Le premier quartier crée une énergie de mouvement et de décision. Les intentions posées précédemment rencontrent leurs premiers défis et demandent une action concrète. Cette phase se produit dans le signe ",
        "O Quarto crescente cria uma energia de movimento e decisão. As intenções definidas anteriormente encontram seus primeiros desafios e exigem uma ação concreta. Esta fase ocorre no signo ",
      ],
      [
        "La Pleine Lune représente un moment de culmination, de révélation ou de prise de conscience. Les émotions peuvent devenir plus visibles et une situation peut atteindre un point décisif. Cette phase se produit dans le signe ",
        "A Lua Cheia representa um momento de culminação, revelação ou tomada de consciência. As emoções podem se tornar mais visíveis e uma situação pode chegar a um ponto decisivo. Esta fase ocorre no signo ",
      ],

      [
        ", ce qui colore son influence selon les qualités de ce signe.",
        ", o que colore sua influência de acordo com as qualidades desse signo.",
      ],

      [
        "Libérez ce qui n’est plus utile et terminez ce qui doit l’être avant de commencer autre chose.",
        "Libere o que não é mais útil e conclua o que precisa ser finalizado antes de começar outra coisa.",
      ],
      [
        "Définissez une intention claire et laissez le projet se développer progressivement.",
        "Defina uma intenção clara e deixe o projeto se desenvolver gradualmente.",
      ],
      [
        "Passez à l’action malgré les hésitations et ajustez votre stratégie selon les premiers résultats.",
        "Entre em ação apesar das hesitações e ajuste sua estratégia de acordo com os primeiros resultados.",
      ],
      [
        "Observez ce qui devient évident avant de prendre une décision uniquement sous l’effet de l’émotion.",
        "Observe o que se torna evidente antes de tomar uma decisão apenas sob o efeito da emoção.",
      ],
    ],
  };

  const helper = `
const __MONTH_MOON_PHASE_NAMES: Record<string, string> =
  ${JSON.stringify(
    phaseNames,
    null,
    2,
  )};

const __MONTH_MOON_PHASE_TEXT_REPLACEMENTS:
  Array<[string, string]> =
  ${JSON.stringify(
    dynamicReplacements[
      locale
    ],
    null,
    2,
  )};

function __monthMoonPhaseName(
  value: string,
): string {
  return (
    __MONTH_MOON_PHASE_NAMES[
      value
    ] ??
    value
  );
}

function __monthMoonPhaseText(
  value:
    | string
    | undefined
    | null,
): string {
  if (!value) {
    return "";
  }

  let output =
    value;

  for (
    const [
      from,
      to,
    ] of
      __MONTH_MOON_PHASE_TEXT_REPLACEMENTS
  ) {
    output =
      output
        .split(from)
        .join(to);
  }

  return output;
}

`;

  const marker =
    "function buildDisplayMoonPhase(";

  const index =
    source.indexOf(
      marker,
    );

  if (index < 0) {
    return source;
  }

  return (
    source.slice(
      0,
      index,
    ) +
    helper +
    source.slice(
      index,
    )
  );
}

/* =========================================================
   LOCALIZE DYNAMIC DISPLAY VALUES
========================================================= */

function localizeDisplayValues(
  source: string,
): string {
  let output =
    source;

  /*
   * Keep phase.phase untouched for:
   *
   * - getPhasePresentation()
   * - id
   *
   * Translate only the DISPLAY name.
   */
  output =
    output.replace(
      /name:\s*phase\.phase,/g,
      `name:
      __monthMoonPhaseName(
        phase.phase,
      ),`,
    );

  /*
   * Dynamic title coming from calculations.
   */
  output =
    output.replace(
      /title:\s*phase\.title\s*\|\|\s*presentation\.defaultTitle,/g,
      `title:
      phase.title
        ? __monthMoonPhaseText(
            phase.title,
          )
        : presentation.defaultTitle,`,
    );

  /*
   * Dynamic description.
   */
  output =
    output.replace(
      /description:\s*phase\.description\s*\|\|\s*"([^"]*)",/g,
      (
        _match,
        fallback:
          string,
      ) =>
        `description:
      phase.description
        ? __monthMoonPhaseText(
            phase.description,
          )
        : ${JSON.stringify(
          fallback,
        )},`,
    );

  /*
   * Dynamic advice.
   */
  output =
    output.replace(
      /advice:\s*phase\.advice\s*\|\|\s*getDefaultAdvice\(\s*presentation\.tone,\s*\),/g,
      `advice:
      phase.advice
        ? __monthMoonPhaseText(
            phase.advice,
          )
        : getDefaultAdvice(
            presentation.tone,
          ),`,
    );

  return output;
}

/* =========================================================
   SIGN PREPOSITION
========================================================= */

function localizeSignPreposition(
  source: string,
  locale: NonFrenchLocale,
): string {
  const inSign: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      "in ${phase.signLabel}",

    es:
      "en ${phase.signLabel}",

    de:
      "im Zeichen ${phase.signLabel}",

    it:
      "in ${phase.signLabel}",

    pt:
      "em ${phase.signLabel}",
  };

  return source.replace(
    /`en \$\{phase\.signLabel\}`/g,
    `\`${inSign[locale]}\``,
  );
}

/* =========================================================
   MILESTONE NUMBER
========================================================= */

function localizeMarker(
  source: string,
  locale: NonFrenchLocale,
): string {
  const marker: Record<
    NonFrenchLocale,
    string
  > = {
    en: "Milestone",
    es: "Hito",
    de: "Phase",
    it: "Tappa",
    pt: "Marco",
  };

  return source.replace(
    /Repère \{phase\.order\}/g,
    `${marker[locale]} {phase.order}`,
  );
}

/* =========================================================
   INTRODUCTION
========================================================= */

function localizeIntroduction(
  source: string,
  locale: NonFrenchLocale,
): string {
  const introductions: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      `The Moon accompanies emotional movements, inner needs, and the different stages of your projects. During{" "}{periodLabel}, each phase brings the sign{" "}{identity.zodiacSignLabel} a particular rhythm: begin, act, understand, then release.`,

    es:
      `La Luna acompaña los movimientos emocionales, las necesidades interiores y las diferentes etapas de sus proyectos. Durante{" "}{periodLabel}, cada fase aporta al signo{" "}{identity.zodiacSignLabel} un ritmo particular: comenzar, actuar, comprender y luego liberar.`,

    de:
      `Der Mond begleitet emotionale Bewegungen, innere Bedürfnisse und die verschiedenen Phasen Ihrer Vorhaben. Während{" "}{periodLabel} bringt jede Phase dem Zeichen{" "}{identity.zodiacSignLabel} einen besonderen Rhythmus: beginnen, handeln, verstehen und dann loslassen.`,

    it:
      `La Luna accompagna i movimenti emotivi, i bisogni interiori e le diverse fasi dei tuoi progetti. Durante{" "}{periodLabel}, ogni fase porta al segno{" "}{identity.zodiacSignLabel} un ritmo particolare: iniziare, agire, comprendere e poi lasciare andare.`,

    pt:
      `A Lua acompanha os movimentos emocionais, as necessidades interiores e as diferentes etapas dos seus projetos. Durante{" "}{periodLabel}, cada fase traz ao signo{" "}{identity.zodiacSignLabel} um ritmo particular: começar, agir, compreender e depois liberar.`,
  };

  const pattern =
    /La Lune accompagne les mouvements\s+émotionnels, les besoins intérieurs\s+et les différentes étapes de vos\s+projets\. Durant\{" "\}\s+\{periodLabel\}, chaque phase apporte\s+au signe\{" "\}\s+\{identity\.zodiacSignLabel\} un rythme\s+particulier : commencer, agir,\s+comprendre puis libérer\./g;

  return source.replace(
    pattern,
    introductions[
      locale
    ],
  );
}

/* =========================================================
   SUMMARY
========================================================= */

function localizeSummary(
  source: string,
  locale: NonFrenchLocale,
): string {
  const withDates: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      "The main lunar milestones of ${periodLabel} are ${phaseDates}. Use these dates to distinguish the moments favorable for beginnings, action, realizations, and letting go.",

    es:
      "Los principales hitos lunares de ${periodLabel} son ${phaseDates}. Utilice estas fechas para distinguir los momentos favorables para los comienzos, la acción, las tomas de conciencia y el desapego.",

    de:
      "Die wichtigsten Mondphasen von ${periodLabel} sind ${phaseDates}. Nutzen Sie diese Daten, um günstige Momente für Neuanfänge, Handlungen, Erkenntnisse und das Loslassen zu unterscheiden.",

    it:
      "I principali riferimenti lunari di ${periodLabel} sono ${phaseDates}. Usa queste date per distinguere i momenti favorevoli agli inizi, all'azione, alle prese di coscienza e al distacco.",

    pt:
      "Os principais marcos lunares de ${periodLabel} são ${phaseDates}. Use essas datas para distinguir os momentos favoráveis a começos, ação, tomadas de consciência e desapego.",
  };

  const withoutDates: Record<
    NonFrenchLocale,
    string
  > = {
    en:
      "The lunar phases of ${periodLabel} invite you to respect a natural progression: begin, act, understand, then release. Not everything needs to evolve at the same time.",

    es:
      "Las fases lunares de ${periodLabel} le invitan a respetar una progresión natural: comenzar, actuar, comprender y luego liberar. No todo tiene que evolucionar al mismo tiempo.",

    de:
      "Die Mondphasen von ${periodLabel} laden Sie dazu ein, einem natürlichen Ablauf zu folgen: beginnen, handeln, verstehen und dann loslassen. Nicht alles muss sich gleichzeitig entwickeln.",

    it:
      "Le fasi lunari di ${periodLabel} ti invitano a rispettare una progressione naturale: iniziare, agire, comprendere e poi lasciare andare. Non tutto deve evolvere nello stesso momento.",

    pt:
      "As fases lunares de ${periodLabel} convidam você a respeitar uma progressão natural: começar, agir, compreender e depois liberar. Nem tudo precisa evoluir ao mesmo tempo.",
  };

  let output =
    source;

  output =
    output.replace(
      /`Les principaux repères lunaires de \$\{periodLabel\} sont \$\{phaseDates\}\. Utilisez ces dates pour distinguer les moments propices aux commencements, à l’action, aux prises de conscience et au détachement\.`/g,
      `\`${withDates[
        locale
      ]}\``,
    );

  output =
    output.replace(
      /`Les phases lunaires de \$\{periodLabel\} vous invitent à respecter une progression naturelle : commencer, agir, comprendre puis libérer\. Tout ne doit pas évoluer au même moment\.`/g,
      `\`${withoutDates[
        locale
      ]}\``,
    );

  return output;
}

/* =========================================================
   MAIN LOCALIZER
========================================================= */

export function localizeHoroscopeMonthMoonPhases(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (
    locale === "fr"
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

  /*
   * 1.
   * Translate static values while preserving
   * French object lookup keys.
   */
  let localized =
    localizeStaticText(
      source,
      translations,
    );

  /*
   * 2.
   * Correct month/day date locale.
   */
  localized =
    localizeDateFormatter(
      localized,
      normalizedLocale,
    );

  /*
   * 3.
   * Add helpers for dynamic data produced
   * by calculateMoonPhases.
   */
  localized =
    injectDynamicHelpers(
      localized,
      normalizedLocale,
    );

  /*
   * 4.
   * Translate only the dynamic DISPLAY values.
   */
  localized =
    localizeDisplayValues(
      localized,
    );

  /*
   * 5.
   * "en Aries" -> "in Aries", etc.
   */
  localized =
    localizeSignPreposition(
      localized,
      normalizedLocale,
    );

  /*
   * 6.
   * Repère 1 -> Milestone 1 etc.
   */
  localized =
    localizeMarker(
      localized,
      normalizedLocale,
    );

  /*
   * 7.
   * Intro.
   */
  localized =
    localizeIntroduction(
      localized,
      normalizedLocale,
    );

  /*
   * 8.
   * Final summary.
   */
  localized =
    localizeSummary(
      localized,
      normalizedLocale,
    );

  return localized;
}
