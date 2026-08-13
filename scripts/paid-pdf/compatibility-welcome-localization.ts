import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

const TRANSLATIONS: Record<
  NonFrenchLocale,
  Record<string, string>
> = {
  en: {
    "Introduction":
      "Introduction",

    "Bienvenue dans votre synastrie":
      "Welcome to Your Synastry",

    "Ce rapport explore la manière dont vos personnalités, vos émotions et vos besoins relationnels se rencontrent.":
      "This report explores how your personalities, emotions, and relationship needs come together.",

    "Premier thème":
      "First Chart",

    "Première personne":
      "First person",

    "Synastrie":
      "Synastry",

    "Deuxième thème":
      "Second Chart",

    "Deuxième personne":
      "Second person",

    "Quand deux cartes du ciel se rencontrent":
      "When Two Birth Charts Meet",

    "La synastrie est l’étude astrologique de la relation entre deux thèmes natals. Elle compare la position des planètes de chaque personne afin de mettre en lumière les affinités, les attirances, les complémentarités et les zones de tension qui peuvent influencer la relation.":
      "Synastry is the astrological study of the relationship between two birth charts. It compares the position of each person's planets to reveal affinities, attractions, complementary dynamics, and areas of tension that may influence the relationship.",

    "Chaque interaction astrologique raconte une partie différente de votre dynamique. Certaines connexions facilitent naturellement la compréhension et la proximité, tandis que d’autres demandent davantage d’écoute, de patience ou d’adaptation.":
      "Each astrological interaction reveals a different part of your dynamic. Some connections naturally encourage understanding and closeness, while others require more listening, patience, or adaptation.",

    "Ce rapport ne cherche pas à décider si une relation est bonne ou mauvaise. Il révèle plutôt son fonctionnement profond, son potentiel d’évolution et les clés qui peuvent aider les deux personnes à mieux se comprendre.":
      "This report does not attempt to determine whether a relationship is good or bad. Instead, it reveals its deeper dynamics, its potential for growth, and the keys that can help both people understand each other more fully.",

    "Les trois niveaux de lecture":
      "The Three Levels of Interpretation",

    "L’identité":
      "Identity",

    "Le Soleil révèle la personnalité, la vitalité et la manière dont chacun affirme son individualité.":
      "The Sun reveals personality, vitality, and the way each person expresses their individuality.",

    "Les émotions":
      "Emotions",

    "La Lune décrit les besoins affectifs, les réactions instinctives et la sécurité émotionnelle.":
      "The Moon describes emotional needs, instinctive reactions, and emotional security.",

    "La rencontre":
      "The Connection",

    "L’Ascendant montre la manière de se présenter, de réagir et d’entrer naturellement en relation.":
      "The Ascendant shows how each person presents themselves, reacts, and naturally enters into relationships.",

    "Comment lire ce rapport":
      "How to Read This Report",

    "Les sections suivantes abordent votre compatibilité globale, votre communication, votre lien émotionnel, votre attirance, vos forces et vos défis. Chaque élément doit être lu comme une pièce d’un ensemble : une relation ne se résume jamais à un seul signe ou à un seul aspect astrologique.":
      "The following sections explore your overall compatibility, communication, emotional bond, attraction, strengths, and challenges. Each element should be understood as one part of a greater whole: a relationship can never be reduced to a single sign or astrological aspect.",

    "Une lecture symbolique et personnalisée":
      "A Symbolic and Personalized Interpretation",

    "L’astrologie propose un langage symbolique destiné à favoriser la réflexion et la connaissance de soi. Ce rapport accompagne votre compréhension de la relation sans remplacer votre libre arbitre ni votre expérience personnelle.":
      "Astrology offers a symbolic language designed to encourage reflection and self-knowledge. This report supports your understanding of the relationship without replacing your free will or personal experience.",

    "Luna Astralis • Rapport de synastrie":
      "Luna Astralis • Synastry Report",
  },

  es: {
    "Introduction":
      "Introducción",

    "Bienvenue dans votre synastrie":
      "Bienvenidos a su sinastría",

    "Ce rapport explore la manière dont vos personnalités, vos émotions et vos besoins relationnels se rencontrent.":
      "Este informe explora cómo se encuentran sus personalidades, sus emociones y sus necesidades relacionales.",

    "Premier thème":
      "Primera carta",

    "Première personne":
      "Primera persona",

    "Synastrie":
      "Sinastría",

    "Deuxième thème":
      "Segunda carta",

    "Deuxième personne":
      "Segunda persona",

    "Quand deux cartes du ciel se rencontrent":
      "Cuando dos cartas natales se encuentran",

    "La synastrie est l’étude astrologique de la relation entre deux thèmes natals. Elle compare la position des planètes de chaque personne afin de mettre en lumière les affinités, les attirances, les complémentarités et les zones de tension qui peuvent influencer la relation.":
      "La sinastría es el estudio astrológico de la relación entre dos cartas natales. Compara la posición de los planetas de cada persona para revelar las afinidades, las atracciones, las complementariedades y las zonas de tensión que pueden influir en la relación.",

    "Chaque interaction astrologique raconte une partie différente de votre dynamique. Certaines connexions facilitent naturellement la compréhension et la proximité, tandis que d’autres demandent davantage d’écoute, de patience ou d’adaptation.":
      "Cada interacción astrológica revela una parte diferente de su dinámica. Algunas conexiones facilitan naturalmente la comprensión y la cercanía, mientras que otras requieren más escucha, paciencia o adaptación.",

    "Ce rapport ne cherche pas à décider si une relation est bonne ou mauvaise. Il révèle plutôt son fonctionnement profond, son potentiel d’évolution et les clés qui peuvent aider les deux personnes à mieux se comprendre.":
      "Este informe no pretende decidir si una relación es buena o mala. Revela más bien su funcionamiento profundo, su potencial de evolución y las claves que pueden ayudar a ambas personas a comprenderse mejor.",

    "Les trois niveaux de lecture":
      "Los tres niveles de interpretación",

    "L’identité":
      "La identidad",

    "Le Soleil révèle la personnalité, la vitalité et la manière dont chacun affirme son individualité.":
      "El Sol revela la personalidad, la vitalidad y la manera en que cada persona afirma su individualidad.",

    "Les émotions":
      "Las emociones",

    "La Lune décrit les besoins affectifs, les réactions instinctives et la sécurité émotionnelle.":
      "La Luna describe las necesidades afectivas, las reacciones instintivas y la seguridad emocional.",

    "La rencontre":
      "El encuentro",

    "L’Ascendant montre la manière de se présenter, de réagir et d’entrer naturellement en relation.":
      "El Ascendente muestra la manera de presentarse, reaccionar y entrar naturalmente en relación.",

    "Comment lire ce rapport":
      "Cómo leer este informe",

    "Les sections suivantes abordent votre compatibilité globale, votre communication, votre lien émotionnel, votre attirance, vos forces et vos défis. Chaque élément doit être lu comme une pièce d’un ensemble : une relation ne se résume jamais à un seul signe ou à un seul aspect astrologique.":
      "Las siguientes secciones abordan su compatibilidad global, su comunicación, su vínculo emocional, su atracción, sus fortalezas y sus desafíos. Cada elemento debe interpretarse como una pieza de un conjunto: una relación nunca se resume en un solo signo ni en un solo aspecto astrológico.",

    "Une lecture symbolique et personnalisée":
      "Una interpretación simbólica y personalizada",

    "L’astrologie propose un langage symbolique destiné à favoriser la réflexion et la connaissance de soi. Ce rapport accompagne votre compréhension de la relation sans remplacer votre libre arbitre ni votre expérience personnelle.":
      "La astrología propone un lenguaje simbólico destinado a favorecer la reflexión y el autoconocimiento. Este informe acompaña su comprensión de la relación sin sustituir su libre albedrío ni su experiencia personal.",

    "Luna Astralis • Rapport de synastrie":
      "Luna Astralis • Informe de sinastría",
  },

  de: {
    "Introduction":
      "Einleitung",

    "Bienvenue dans votre synastrie":
      "Willkommen zu Ihrer Synastrie",

    "Ce rapport explore la manière dont vos personnalités, vos émotions et vos besoins relationnels se rencontrent.":
      "Dieser Bericht untersucht, wie Ihre Persönlichkeiten, Emotionen und Beziehungsbedürfnisse aufeinandertreffen.",

    "Premier thème":
      "Erstes Horoskop",

    "Première personne":
      "Erste Person",

    "Synastrie":
      "Synastrie",

    "Deuxième thème":
      "Zweites Horoskop",

    "Deuxième personne":
      "Zweite Person",

    "Quand deux cartes du ciel se rencontrent":
      "Wenn zwei Geburtshoroskope aufeinandertreffen",

    "La synastrie est l’étude astrologique de la relation entre deux thèmes natals. Elle compare la position des planètes de chaque personne afin de mettre en lumière les affinités, les attirances, les complémentarités et les zones de tension qui peuvent influencer la relation.":
      "Die Synastrie ist die astrologische Untersuchung der Beziehung zwischen zwei Geburtshoroskopen. Sie vergleicht die Positionen der Planeten beider Personen, um Gemeinsamkeiten, Anziehung, ergänzende Dynamiken und Spannungsbereiche sichtbar zu machen, die die Beziehung beeinflussen können.",

    "Chaque interaction astrologique raconte une partie différente de votre dynamique. Certaines connexions facilitent naturellement la compréhension et la proximité, tandis que d’autres demandent davantage d’écoute, de patience ou d’adaptation.":
      "Jede astrologische Wechselwirkung zeigt einen anderen Teil Ihrer Dynamik. Manche Verbindungen fördern auf natürliche Weise Verständnis und Nähe, während andere mehr Zuhören, Geduld oder Anpassung erfordern.",

    "Ce rapport ne cherche pas à décider si une relation est bonne ou mauvaise. Il révèle plutôt son fonctionnement profond, son potentiel d’évolution et les clés qui peuvent aider les deux personnes à mieux se comprendre.":
      "Dieser Bericht versucht nicht zu entscheiden, ob eine Beziehung gut oder schlecht ist. Vielmehr zeigt er ihre tieferen Dynamiken, ihr Entwicklungspotenzial und die Schlüssel, die beiden Personen helfen können, einander besser zu verstehen.",

    "Les trois niveaux de lecture":
      "Die drei Interpretationsebenen",

    "L’identité":
      "Identität",

    "Le Soleil révèle la personnalité, la vitalité et la manière dont chacun affirme son individualité.":
      "Die Sonne zeigt Persönlichkeit, Vitalität und die Art, wie jeder seine Individualität zum Ausdruck bringt.",

    "Les émotions":
      "Emotionen",

    "La Lune décrit les besoins affectifs, les réactions instinctives et la sécurité émotionnelle.":
      "Der Mond beschreibt emotionale Bedürfnisse, instinktive Reaktionen und emotionale Sicherheit.",

    "La rencontre":
      "Die Begegnung",

    "L’Ascendant montre la manière de se présenter, de réagir et d’entrer naturellement en relation.":
      "Der Aszendent zeigt, wie man sich präsentiert, reagiert und auf natürliche Weise mit anderen in Beziehung tritt.",

    "Comment lire ce rapport":
      "So lesen Sie diesen Bericht",

    "Les sections suivantes abordent votre compatibilité globale, votre communication, votre lien émotionnel, votre attirance, vos forces et vos défis. Chaque élément doit être lu comme une pièce d’un ensemble : une relation ne se résume jamais à un seul signe ou à un seul aspect astrologique.":
      "Die folgenden Abschnitte behandeln Ihre allgemeine Kompatibilität, Kommunikation, emotionale Verbindung, Anziehung, Stärken und Herausforderungen. Jedes Element sollte als Teil eines größeren Ganzen verstanden werden: Eine Beziehung lässt sich niemals auf ein einziges Zeichen oder einen einzigen astrologischen Aspekt reduzieren.",

    "Une lecture symbolique et personnalisée":
      "Eine symbolische und persönliche Interpretation",

    "L’astrologie propose un langage symbolique destiné à favoriser la réflexion et la connaissance de soi. Ce rapport accompagne votre compréhension de la relation sans remplacer votre libre arbitre ni votre expérience personnelle.":
      "Die Astrologie bietet eine symbolische Sprache, die Reflexion und Selbsterkenntnis fördern soll. Dieser Bericht unterstützt Ihr Verständnis der Beziehung, ohne Ihren freien Willen oder Ihre persönliche Erfahrung zu ersetzen.",

    "Luna Astralis • Rapport de synastrie":
      "Luna Astralis • Synastrie-Bericht",
  },

  it: {
    "Introduction":
      "Introduzione",

    "Bienvenue dans votre synastrie":
      "Benvenuti nella vostra sinastria",

    "Ce rapport explore la manière dont vos personnalités, vos émotions et vos besoins relationnels se rencontrent.":
      "Questo rapporto esplora il modo in cui le vostre personalità, emozioni ed esigenze relazionali si incontrano.",

    "Premier thème":
      "Primo tema",

    "Première personne":
      "Prima persona",

    "Synastrie":
      "Sinastria",

    "Deuxième thème":
      "Secondo tema",

    "Deuxième personne":
      "Seconda persona",

    "Quand deux cartes du ciel se rencontrent":
      "Quando due temi natali si incontrano",

    "La synastrie est l’étude astrologique de la relation entre deux thèmes natals. Elle compare la position des planètes de chaque personne afin de mettre en lumière les affinités, les attirances, les complémentarités et les zones de tension qui peuvent influencer la relation.":
      "La sinastria è lo studio astrologico della relazione tra due temi natali. Confronta la posizione dei pianeti di ogni persona per mettere in luce affinità, attrazioni, complementarità e aree di tensione che possono influenzare la relazione.",

    "Chaque interaction astrologique raconte une partie différente de votre dynamique. Certaines connexions facilitent naturellement la compréhension et la proximité, tandis que d’autres demandent davantage d’écoute, de patience ou d’adaptation.":
      "Ogni interazione astrologica racconta una parte diversa della vostra dinamica. Alcune connessioni facilitano naturalmente la comprensione e la vicinanza, mentre altre richiedono maggiore ascolto, pazienza o adattamento.",

    "Ce rapport ne cherche pas à décider si une relation est bonne ou mauvaise. Il révèle plutôt son fonctionnement profond, son potentiel d’évolution et les clés qui peuvent aider les deux personnes à mieux se comprendre.":
      "Questo rapporto non cerca di stabilire se una relazione sia buona o cattiva. Rivela piuttosto il suo funzionamento profondo, il suo potenziale di evoluzione e le chiavi che possono aiutare entrambe le persone a comprendersi meglio.",

    "Les trois niveaux de lecture":
      "I tre livelli di interpretazione",

    "L’identité":
      "L'identità",

    "Le Soleil révèle la personnalité, la vitalité et la manière dont chacun affirme son individualité.":
      "Il Sole rivela la personalità, la vitalità e il modo in cui ciascuno afferma la propria individualità.",

    "Les émotions":
      "Le emozioni",

    "La Lune décrit les besoins affectifs, les réactions instinctive et la sécurité émotionnelle.":
      "La Luna descrive i bisogni affettivi, le reazioni istintive e la sicurezza emotiva.",

    "La rencontre":
      "L'incontro",

    "L’Ascendant montre la manière de se présenter, de réagir et d’entrer naturellement en relation.":
      "L'Ascendente mostra il modo di presentarsi, reagire ed entrare naturalmente in relazione.",

    "Comment lire ce rapport":
      "Come leggere questo rapporto",

    "Les sections suivantes abordent votre compatibilité globale, votre communication, votre lien émotionnel, votre attirance, vos forces et vos défis. Chaque élément doit être lu comme une pièce d’un ensemble : une relation ne se résume jamais à un seul signe ou à un seul aspect astrologique.":
      "Le sezioni seguenti affrontano la vostra compatibilità generale, la comunicazione, il legame emotivo, l'attrazione, i punti di forza e le sfide. Ogni elemento deve essere letto come una parte di un insieme: una relazione non si riduce mai a un solo segno o a un solo aspetto astrologico.",

    "Une lecture symbolique et personnalisée":
      "Una lettura simbolica e personalizzata",

    "L’astrologie propose un langage symbolique destiné à favoriser la réflexion et la connaissance de soi. Ce rapport accompagne votre compréhension de la relation sans remplacer votre libre arbitre ni votre expérience personnelle.":
      "L'astrologia propone un linguaggio simbolico destinato a favorire la riflessione e la conoscenza di sé. Questo rapporto accompagna la comprensione della relazione senza sostituire il libero arbitrio né l'esperienza personale.",

    "Luna Astralis • Rapport de synastrie":
      "Luna Astralis • Rapporto di sinastria",
  },

  pt: {
    "Introduction":
      "Introdução",

    "Bienvenue dans votre synastrie":
      "Bem-vindos à sua sinastria",

    "Ce rapport explore la manière dont vos personnalités, vos émotions et vos besoins relationnels se rencontrent.":
      "Este relatório explora como as suas personalidades, emoções e necessidades relacionais se encontram.",

    "Premier thème":
      "Primeiro mapa",

    "Première personne":
      "Primeira pessoa",

    "Synastrie":
      "Sinastria",

    "Deuxième thème":
      "Segundo mapa",

    "Deuxième personne":
      "Segunda pessoa",

    "Quand deux cartes du ciel se rencontrent":
      "Quando dois mapas astrais se encontram",

    "La synastrie est l’étude astrologique de la relation entre deux thèmes natals. Elle compare la position des planètes de chaque personne afin de mettre en lumière les affinités, les attirances, les complémentarités et les zones de tension qui peuvent influencer la relation.":
      "A sinastria é o estudo astrológico da relação entre dois mapas astrais. Ela compara a posição dos planetas de cada pessoa para revelar afinidades, atrações, complementaridades e áreas de tensão que podem influenciar a relação.",

    "Chaque interaction astrologique raconte une partie différente de votre dynamique. Certaines connexions facilitent naturellement la compréhension et la proximité, tandis que d’autres demandent davantage d’écoute, de patience ou d’adaptation.":
      "Cada interação astrológica revela uma parte diferente da sua dinâmica. Algumas conexões facilitam naturalmente a compreensão e a proximidade, enquanto outras exigem mais escuta, paciência ou adaptação.",

    "Ce rapport ne cherche pas à décider si une relation est bonne ou mauvaise. Il révèle plutôt son fonctionnement profond, son potentiel d’évolution et les clés qui peuvent aider les deux personnes à mieux se comprendre.":
      "Este relatório não procura decidir se uma relação é boa ou má. Em vez disso, revela o seu funcionamento profundo, o seu potencial de evolução e as chaves que podem ajudar ambas as pessoas a compreenderem-se melhor.",

    "Les trois niveaux de lecture":
      "Os três níveis de interpretação",

    "L’identité":
      "A identidade",

    "Le Soleil révèle la personnalité, la vitalité et la manière dont chacun affirme son individualité.":
      "O Sol revela a personalidade, a vitalidade e a forma como cada pessoa afirma a sua individualidade.",

    "Les émotions":
      "As emoções",

    "La Lune décrit les besoins affectifs, les réactions instinctives et la sécurité émotionnelle.":
      "A Lua descreve as necessidades afetivas, as reações instintivas e a segurança emocional.",

    "La rencontre":
      "O encontro",

    "L’Ascendant montre la manière de se présenter, de réagir et d’entrer naturellement en relation.":
      "O Ascendente mostra a forma de se apresentar, reagir e entrar naturalmente em relação.",

    "Comment lire ce rapport":
      "Como ler este relatório",

    "Les sections suivantes abordent votre compatibilité globale, votre communication, votre lien émotionnel, votre attirance, vos forces et vos défis. Chaque élément doit être lu comme une pièce d’un ensemble : une relation ne se résume jamais à un seul signe ou à un seul aspect astrologique.":
      "As seções seguintes abordam a sua compatibilidade geral, comunicação, vínculo emocional, atração, pontos fortes e desafios. Cada elemento deve ser interpretado como uma parte de um conjunto: uma relação nunca se resume a um único signo ou a um único aspecto astrológico.",

    "Une lecture symbolique et personnalisée":
      "Uma leitura simbólica e personalizada",

    "L’astrologie propose un langage symbolique destiné à favoriser la réflexion et l’autoconhecimento. Ce rapport accompagne votre compréhension de la relation sans remplacer votre libre arbitre ni votre expérience personnelle.":
      "A astrologia propõe uma linguagem simbólica destinada a favorecer a reflexão e o autoconhecimento. Este relatório apoia a compreensão da relação sem substituir o livre-arbítrio nem a experiência pessoal.",

    "Luna Astralis • Rapport de synastrie":
      "Luna Astralis • Relatório de sinastria",
  },
};

/*
 * Échappe les caractères spéciaux afin
 * d'utiliser une chaîne dans une RegExp.
 */
function escapeRegExp(
  value: string,
): string {
  return value.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );
}

/*
 * Permet de reconnaître les textes même
 * lorsqu'ils sont répartis sur plusieurs
 * lignes dans CompatibilityWelcome.tsx.
 */
function replaceFlexibleText(
  source: string,
  from: string,
  to: string,
): string {
  const pattern =
    escapeRegExp(from).replace(
      /\s+/g,
      "\\s+",
    );

  return source.replace(
    new RegExp(pattern, "g"),
    to,
  );
}

export function localizeCompatibilityWelcome(
  source: string,
  locale: PaidPdfLocale,
): string {
  /*
   * Le français reste le fichier source.
   */
  if (locale === "fr") {
    return source;
  }

  const translations =
    TRANSLATIONS[
      locale as NonFrenchLocale
    ];

  if (!translations) {
    return source;
  }

  let localized = source;

  /*
   * Les longues phrases sont remplacées
   * avant les textes courts.
   */
  const entries =
    Object.entries(
      translations,
    ).sort(
      ([a], [b]) =>
        b.length - a.length,
    );

  for (
    const [from, to] of entries
  ) {
    localized =
      replaceFlexibleText(
        localized,
        from,
        to,
      );
  }

  return localized;
}
