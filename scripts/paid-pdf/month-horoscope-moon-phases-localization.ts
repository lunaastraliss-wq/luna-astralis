import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type TranslationMap =
  Record<string, string>;

const TRANSLATIONS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Nouvelle Lune": "New Moon",
    "Nouveau départ": "New beginning",
    "Commencer, clarifier une priorité et définir une nouvelle direction.": "Begin, clarify a priority, and define a new direction.",
    "Définir une intention claire": "Set a clear intention",
    "Premier quartier": "First Quarter",
    "Mise en action": "Taking action",
    "Agir, concrétiser vos projets et relancer ce qui mérite d'avancer.": "Act, bring your projects to life, and restart what deserves to move forward.",
    "Transformer vos intentions en actions": "Turn your intentions into action",
    "Pleine Lune": "Full Moon",
    "Révélation": "Revelation",
    "Observer les résultats, accueillir les révélations et prendre du recul avant d'agir.": "Observe the results, welcome revelations, and step back before acting.",
    "Observer ce qui arrive à maturité": "Observe what is reaching maturity",
    "Dernier quartier": "Last Quarter",
    "Libération": "Release",
    "Terminer, faire le tri et laisser aller ce qui n'est plus utile.": "Finish, sort things out, and let go of what is no longer useful.",
    "Faire de la place avant le prochain cycle": "Make room before the next cycle",
    "Évolution": "Evolution",
    "Adapter vos actions au rythme émotionnel du moment.": "Adapt your actions to the emotional rhythm of the moment.",
    "Suivre le mouvement du cycle lunaire": "Follow the movement of the lunar cycle",
    "Choisissez une intention simple, précise et réaliste.": "Choose a simple, precise, and realistic intention.",
    "Avancez malgré les résistances, sans confondre obstacle et échec.": "Move forward despite resistance, without confusing an obstacle with failure.",
    "Accueillez vos émotions avant de prendre une décision importante.": "Acknowledge your emotions before making an important decision.",
    "Libérez-vous de ce qui vous épuise sans agir dans la précipitation.": "Let go of what drains you without acting hastily.",
    "Moment clé du cycle lunaire": "Key moment in the lunar cycle",
    "Cette phase lunaire marque une étape importante du cycle émotionnel et vous invite à adapter vos actions à l’énergie du moment.": "This lunar phase marks an important stage in the emotional cycle and invites you to adapt your actions to the energy of the moment.",
    "Votre rythme émotionnel": "Your emotional rhythm",
    "Les phases de la Lune": "The phases of the Moon",
    "Le cycle lunaire": "The lunar cycle",
    "Les principaux repères lunaires": "The main lunar milestones",
    "Période favorable pour": "Favorable period for",
    "Conseil": "Guidance",
    "Votre rythme du mois": "Your rhythm for the month",
  },
  es: {
    "Nouvelle Lune": "Luna Nueva",
    "Nouveau départ": "Nuevo comienzo",
    "Commencer, clarifier une priorité et définir une nouvelle direction.": "Comenzar, aclarar una prioridad y definir una nueva dirección.",
    "Définir une intention claire": "Definir una intención clara",
    "Premier quartier": "Cuarto creciente",
    "Mise en action": "Puesta en acción",
    "Agir, concrétiser vos projets et relancer ce qui mérite d'avancer.": "Actuar, concretar sus proyectos y reactivar lo que merece avanzar.",
    "Transformer vos intentions en actions": "Transformar sus intenciones en acciones",
    "Pleine Lune": "Luna Llena",
    "Révélation": "Revelación",
    "Observer les résultats, accueillir les révélations et prendre du recul avant d'agir.": "Observar los resultados, acoger las revelaciones y tomar distancia antes de actuar.",
    "Observer ce qui arrive à maturité": "Observar lo que llega a su madurez",
    "Dernier quartier": "Cuarto menguante",
    "Libération": "Liberación",
    "Terminer, faire le tri et laisser aller ce qui n'est plus utile.": "Terminar, ordenar y dejar ir lo que ya no es útil.",
    "Faire de la place avant le prochain cycle": "Hacer espacio antes del próximo ciclo",
    "Évolution": "Evolución",
    "Adapter vos actions au rythme émotionnel du moment.": "Adaptar sus acciones al ritmo emocional del momento.",
    "Suivre le mouvement du cycle lunaire": "Seguir el movimiento del ciclo lunar",
    "Choisissez une intention simple, précise et réaliste.": "Elija una intención simple, precisa y realista.",
    "Avancez malgré les résistances, sans confondre obstacle et échec.": "Avance a pesar de las resistencias, sin confundir un obstáculo con un fracaso.",
    "Accueillez vos émotions avant de prendre une décision importante.": "Acoja sus emociones antes de tomar una decisión importante.",
    "Libérez-vous de ce qui vous épuise sans agir dans la précipitation.": "Libérese de lo que le agota sin actuar precipitadamente.",
    "Moment clé du cycle lunaire": "Momento clave del ciclo lunar",
    "Cette phase lunaire marque une étape importante du cycle émotionnel et vous invite à adapter vos actions à l’énergie du moment.": "Esta fase lunar marca una etapa importante del ciclo emocional y le invita a adaptar sus acciones a la energía del momento.",
    "Votre rythme émotionnel": "Su ritmo emocional",
    "Les phases de la Lune": "Las fases de la Luna",
    "Le cycle lunaire": "El ciclo lunar",
    "Les principaux repères lunaires": "Los principales hitos lunares",
    "Période favorable pour": "Período favorable para",
    "Conseil": "Consejo",
    "Votre rythme du mois": "Su ritmo del mes",
  },
  de: {
    "Nouvelle Lune": "Neumond",
    "Nouveau départ": "Neuanfang",
    "Commencer, clarifier une priorité et définir une nouvelle direction.": "Beginnen, eine Priorität klären und eine neue Richtung festlegen.",
    "Définir une intention claire": "Eine klare Absicht setzen",
    "Premier quartier": "Erstes Viertel",
    "Mise en action": "Umsetzung",
    "Agir, concrétiser vos projets et relancer ce qui mérite d'avancer.": "Handeln, Ihre Vorhaben konkretisieren und das wieder in Gang bringen, was vorankommen soll.",
    "Transformer vos intentions en actions": "Ihre Absichten in Handlungen umsetzen",
    "Pleine Lune": "Vollmond",
    "Révélation": "Erkenntnis",
    "Observer les résultats, accueillir les révélations et prendre du recul avant d'agir.": "Ergebnisse beobachten, Erkenntnisse annehmen und vor dem Handeln Abstand gewinnen.",
    "Observer ce qui arrive à maturité": "Beobachten, was zur Reife gelangt",
    "Dernier quartier": "Letztes Viertel",
    "Libération": "Loslassen",
    "Terminer, faire le tri et laisser aller ce qui n'est plus utile.": "Abschließen, ordnen und loslassen, was nicht mehr nützlich ist.",
    "Faire de la place avant le prochain cycle": "Vor dem nächsten Zyklus Raum schaffen",
    "Évolution": "Entwicklung",
    "Adapter vos actions au rythme émotionnel du moment.": "Ihre Handlungen an den emotionalen Rhythmus des Augenblicks anpassen.",
    "Suivre le mouvement du cycle lunaire": "Dem Verlauf des Mondzyklus folgen",
    "Choisissez une intention simple, précise et réaliste.": "Wählen Sie eine einfache, klare und realistische Absicht.",
    "Avancez malgré les résistances, sans confondre obstacle et échec.": "Gehen Sie trotz Widerständen weiter, ohne Hindernisse mit Scheitern zu verwechseln.",
    "Accueillez vos émotions avant de prendre une décision importante.": "Nehmen Sie Ihre Gefühle wahr, bevor Sie eine wichtige Entscheidung treffen.",
    "Libérez-vous de ce qui vous épuise sans agir dans la précipitation.": "Lösen Sie sich von dem, was Sie erschöpft, ohne übereilt zu handeln.",
    "Moment clé du cycle lunaire": "Schlüsselmoment im Mondzyklus",
    "Cette phase lunaire marque une étape importante du cycle émotionnel et vous invite à adapter vos actions à l’énergie du moment.": "Diese Mondphase markiert eine wichtige Etappe im emotionalen Zyklus und lädt Sie ein, Ihr Handeln an die Energie des Augenblicks anzupassen.",
    "Votre rythme émotionnel": "Ihr emotionaler Rhythmus",
    "Les phases de la Lune": "Die Mondphasen",
    "Le cycle lunaire": "Der Mondzyklus",
    "Les principaux repères lunaires": "Die wichtigsten Mondphasen",
    "Période favorable pour": "Günstige Zeit für",
    "Conseil": "Rat",
    "Votre rythme du mois": "Ihr Rhythmus des Monats",
  },
  it: {
    "Nouvelle Lune": "Luna Nuova",
    "Nouveau départ": "Nuovo inizio",
    "Commencer, clarifier une priorité et définir une nouvelle direction.": "Iniziare, chiarire una priorità e definire una nuova direzione.",
    "Définir une intention claire": "Definire un'intenzione chiara",
    "Premier quartier": "Primo quarto",
    "Mise en action": "Passaggio all'azione",
    "Agir, concrétiser vos projets et relancer ce qui mérite d'avancer.": "Agire, concretizzare i tuoi progetti e rilanciare ciò che merita di avanzare.",
    "Transformer vos intentions en actions": "Trasformare le tue intenzioni in azioni",
    "Pleine Lune": "Luna Piena",
    "Révélation": "Rivelazione",
    "Observer les résultats, accueillir les révélations et prendre du recul avant d'agir.": "Osservare i risultati, accogliere le rivelazioni e prendere le distanze prima di agire.",
    "Observer ce qui arrive à maturité": "Osservare ciò che giunge a maturazione",
    "Dernier quartier": "Ultimo quarto",
    "Libération": "Liberazione",
    "Terminer, faire le tri et laisser aller ce qui n'est plus utile.": "Concludere, fare ordine e lasciare andare ciò che non è più utile.",
    "Faire de la place avant le prochain cycle": "Fare spazio prima del prossimo ciclo",
    "Évolution": "Evoluzione",
    "Adapter vos actions au rythme émotionnel du moment.": "Adattare le tue azioni al ritmo emotivo del momento.",
    "Suivre le mouvement du cycle lunaire": "Seguire il movimento del ciclo lunare",
    "Choisissez une intention simple, précise et réaliste.": "Scegli un'intenzione semplice, precisa e realistica.",
    "Avancez malgré les résistances, sans confondre obstacle et échec.": "Avanza nonostante le resistenze, senza confondere un ostacolo con un fallimento.",
    "Accueillez vos émotions avant de prendre une décision importante.": "Accogli le tue emozioni prima di prendere una decisione importante.",
    "Libérez-vous de ce qui vous épuise sans agir dans la précipitation.": "Liberati da ciò che ti esaurisce senza agire precipitosamente.",
    "Moment clé du cycle lunaire": "Momento chiave del ciclo lunare",
    "Cette phase lunaire marque une étape importante du cycle émotionnel et vous invite à adapter vos actions à l’énergie du moment.": "Questa fase lunare segna una tappa importante del ciclo emotivo e ti invita ad adattare le tue azioni all'energia del momento.",
    "Votre rythme émotionnel": "Il tuo ritmo emotivo",
    "Les phases de la Lune": "Le fasi della Luna",
    "Le cycle lunaire": "Il ciclo lunare",
    "Les principaux repères lunaires": "I principali riferimenti lunari",
    "Période favorable pour": "Periodo favorevole per",
    "Conseil": "Consiglio",
    "Votre rythme du mois": "Il tuo ritmo del mese",
  },
  pt: {
    "Nouvelle Lune": "Lua Nova",
    "Nouveau départ": "Novo começo",
    "Commencer, clarifier une priorité et définir une nouvelle direction.": "Começar, esclarecer uma prioridade e definir uma nova direção.",
    "Définir une intention claire": "Definir uma intenção clara",
    "Premier quartier": "Quarto crescente",
    "Mise en action": "Entrada em ação",
    "Agir, concrétiser vos projets et relancer ce qui mérite d'avancer.": "Agir, concretizar seus projetos e retomar o que merece avançar.",
    "Transformer vos intentions en actions": "Transformar suas intenções em ações",
    "Pleine Lune": "Lua Cheia",
    "Révélation": "Revelação",
    "Observer les résultats, accueillir les révélations et prendre du recul avant d'agir.": "Observar os resultados, acolher as revelações e tomar distância antes de agir.",
    "Observer ce qui arrive à maturité": "Observar o que está chegando à maturidade",
    "Dernier quartier": "Quarto minguante",
    "Libération": "Liberação",
    "Terminer, faire le tri et laisser aller ce qui n'est plus utile.": "Concluir, organizar e deixar ir o que não é mais útil.",
    "Faire de la place avant le prochain cycle": "Abrir espaço antes do próximo ciclo",
    "Évolution": "Evolução",
    "Adapter vos actions au rythme émotionnel du moment.": "Adaptar suas ações ao ritmo emocional do momento.",
    "Suivre le mouvement du cycle lunaire": "Acompanhar o movimento do ciclo lunar",
    "Choisissez une intention simple, précise et réaliste.": "Escolha uma intenção simples, precisa e realista.",
    "Avancez malgré les résistances, sans confondre obstacle et échec.": "Avance apesar das resistências, sem confundir obstáculo com fracasso.",
    "Accueillez vos émotions avant de prendre une décision importante.": "Acolha suas emoções antes de tomar uma decisão importante.",
    "Libérez-vous de ce qui vous épuise sans agir dans la précipitation.": "Liberte-se do que esgota você sem agir precipitadamente.",
    "Moment clé du cycle lunaire": "Momento-chave do ciclo lunar",
    "Cette phase lunaire marque une étape importante du cycle émotionnel et vous invite à adapter vos actions à l’énergie du moment.": "Esta fase lunar marca uma etapa importante do ciclo emocional e convida você a adaptar suas ações à energia do momento.",
    "Votre rythme émotionnel": "Seu ritmo emocional",
    "Les phases de la Lune": "As fases da Lua",
    "Le cycle lunaire": "O ciclo lunar",
    "Les principaux repères lunaires": "Os principais marcos lunares",
    "Période favorable pour": "Período favorável para",
    "Conseil": "Conselho",
    "Votre rythme du mois": "Seu ritmo do mês",
  },
};

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

  function visit(node: ts.Node): void {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    ) {
      const translated =
        translations[node.text];

      if (
        translated &&
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

      const trimmed =
        raw.trim();

      const translated =
        translations[trimmed];

      if (translated) {
        replacements.push({
          start:
            node.getStart(sourceFile),
          end:
            node.getEnd(),
          value:
            raw.replace(
              trimmed,
              translated,
            ),
        });
      }
    }

    ts.forEachChild(node, visit);
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

function localizeDateFormatter(
  source: string,
  locale: NonFrenchLocale,
): string {
  return source.replace(
    /new Intl\.DateTimeFormat\(\s*"fr-CA",/g,
    `new Intl.DateTimeFormat(\n    ${JSON.stringify(
      LOCALE_TAGS[locale],
    )},`,
  );
}

function localizeDynamicText(
  source: string,
  locale: NonFrenchLocale,
): string {
  const inSign: Record<
    NonFrenchLocale,
    string
  > = {
    en: "in ${phase.signLabel}",
    es: "en ${phase.signLabel}",
    de: "im Zeichen ${phase.signLabel}",
    it: "in ${phase.signLabel}",
    pt: "em ${phase.signLabel}",
  };

  const marker: Record<
    NonFrenchLocale,
    string
  > = {
    en: "Milestone ${phase.order}",
    es: "Hito ${phase.order}",
    de: "Phase ${phase.order}",
    it: "Tappa ${phase.order}",
    pt: "Marco ${phase.order}",
  };

  const summaryWithDates: Record<
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

  const summaryWithoutDates: Record<
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

  let output = source;

  output = output.replace(
    /`en \$\{phase\.signLabel\}`/g,
    `\`${inSign[locale]}\``,
  );

  output = output.replace(
    /Repère \{phase\.order\}/g,
    `{${JSON.stringify(
      marker[locale],
    )}.replace("${"${phase.order}"}", String(phase.order))}`,
  );

  output = output.replace(
    /`Les principaux repères lunaires de \$\{periodLabel\} sont \$\{phaseDates\}\. Utilisez ces dates pour distinguer les moments propices aux commencements, à l’action, aux prises de conscience et au détachement\.`/g,
    `\`${summaryWithDates[locale]}\``,
  );

  output = output.replace(
    /`Les phases lunaires de \$\{periodLabel\} vous invitent à respecter une progression naturelle : commencer, agir, comprendre puis libérer\. Tout ne doit pas évoluer au même moment\.`/g,
    `\`${summaryWithoutDates[locale]}\``,
  );

  return output;
}

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
    introductions[locale],
  );
}

export function localizeHoroscopeMonthMoonPhases(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
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
    localizeDynamicText(
      source,
      normalizedLocale,
    );

  localized =
    localizeIntroduction(
      localized,
      normalizedLocale,
    );

  localized =
    localizeDateFormatter(
      localized,
      normalizedLocale,
    );

  localized =
    localizeStaticText(
      localized,
      translations,
    );

  return localized;
}
