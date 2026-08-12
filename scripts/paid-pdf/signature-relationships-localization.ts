import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type RelationshipLabels = {
  analysis: string;

  relationshipLife: string;
  relationshipLifeIntro: string;

  descendant: string;

  loveNeeds: string;
  loveNeedsIntro: string;

  relationshipStrength: string;
  relationshipChallenge: string;

  communicationLimits: string;
  balance: string;
  communicationText: string;

  emotionalReciprocity: string;
  essentialNeed: string;
  reciprocityText: string;

  relationshipSynthesis: string;

  unavailableData: string;
  unavailableAnalysis: string;
  unspecified: string;

  housePositionPrefix: string;

  descendantUnavailable: string;
  descendantIn: string;
  descendantEnding: string;

  strengthPrefixMoon: string;
  strengthMiddleVenus: string;
  strengthEnding: string;

  challengeVenus: string;
  challengeMars: string;
  challengeEnding: string;

  synthesisStart: string;
  synthesisVenus: string;
  synthesisMars: string;
  synthesisCore: string;
  synthesisDescendantStart: string;
  synthesisDescendantEnd: string;
  synthesisEnding: string;

  genericPosition: string;

  moonRole: string;
  venusRole: string;
  marsRole: string;

  sun: string;
  moon: string;
  mercury: string;
  venus: string;
  mars: string;
  jupiter: string;
  saturn: string;
  uranus: string;
  neptune: string;
  pluto: string;

  aries: string;
  taurus: string;
  gemini: string;
  cancer: string;
  leo: string;
  virgo: string;
  libra: string;
  scorpio: string;
  sagittarius: string;
  capricorn: string;
  aquarius: string;
  pisces: string;

  signTexts: string[];
  houseTexts: string[];
};

const LABELS: Record<
  NonFrenchLocale,
  RelationshipLabels
> = {
  en: {
    analysis:
      "Signature Analysis",

    relationshipLife:
      "Your relationship life",

    relationshipLifeIntro:
      "The way you love does not depend only on your Sun sign. The Moon, Venus, Mars, and the Descendant describe your emotional needs, attractions, desire, and the lessons you experience through relationships.",

    descendant:
      "Your Descendant",

    loveNeeds:
      "Your romantic needs",

    loveNeedsIntro:
      "A fulfilling relationship respects your emotional security, your affective values, your desire, and your need to remain true to yourself.",

    relationshipStrength:
      "Your relationship strength",

    relationshipChallenge:
      "Your relationship challenge",

    communicationLimits:
      "Communication and boundaries",

    balance:
      "Balance",

    communicationText:
      "The quality of your relationships depends on your ability to express your needs before dissatisfaction accumulates. A clear boundary is not a rejection: it allows the relationship to remain honest, balanced, and respectful.",

    emotionalReciprocity:
      "Emotional reciprocity",

    essentialNeed:
      "Essential need",

    reciprocityText:
      "You need a relationship in which attention, commitment, and effort flow in both directions. Giving a great deal should not require you to ignore your own needs or carry the stability of the relationship alone.",

    relationshipSynthesis:
      "Relationship synthesis",

    unavailableData:
      "Data unavailable",

    unavailableAnalysis:
      "The available data does not allow a precise analysis of",

    unspecified:
      "unspecified",

    housePositionPrefix:
      " Its position in house",

    descendantUnavailable:
      "The sign of the Descendant cannot be determined from the available data. The Descendant nevertheless describes the qualities you often seek in others and the lessons learned through partnership.",

    descendantIn:
      "Your Descendant is in",

    descendantEnding:
      "This energy may appear in the partners who attract you or in the qualities you develop through relationships.",

    strengthPrefixMoon:
      "Your emotional strength is based on the interaction between your Moon in",

    strengthMiddleVenus:
      "and your Venus in",

    strengthEnding:
      "When your emotional needs and your way of loving are respected simultaneously, you can build deep, sincere, and lasting bonds.",

    challengeVenus:
      "Venus in",

    challengeMars:
      "describes what you seek in love, while Mars in",

    challengeEnding:
      "shows how you act and react. Your challenge is to reconcile the need for harmony with the clear expression of your desires, boundaries, and frustrations.",

    synthesisStart:
      "Your relationship dynamics combine a Moon in",

    synthesisVenus:
      "a Venus in",

    synthesisMars:
      "and a Mars in",

    synthesisCore:
      "The Moon shows what you need to feel secure, Venus reveals your emotional language, and Mars describes how you pursue your desires or defend your boundaries.",

    synthesisDescendantStart:
      "Your Descendant in",

    synthesisDescendantEnd:
      "completes this dynamic by revealing the relationship qualities you are called to encounter or develop.",

    synthesisEnding:
      "A balanced relationship allows you to be loved without giving up your identity, to communicate your needs honestly, and to preserve genuine reciprocity.",

    genericPosition:
      "This position describes a personal way of relating to others and expressing your emotional needs.",

    moonRole:
      "The Moon describes your emotional needs, your instinctive reactions, and what allows you to feel secure in a relationship.",

    venusRole:
      "Venus describes the way you love, your emotional values, what attracts you, and how you create harmony.",

    marsRole:
      "Mars describes your desire, your way of acting, how you assert yourself, and the dynamics of your relationship energy.",

    sun: "Sun",
    moon: "Moon",
    mercury: "Mercury",
    venus: "Venus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturn",
    uranus: "Uranus",
    neptune: "Neptune",
    pluto: "Pluto",

    aries: "Aries",
    taurus: "Taurus",
    gemini: "Gemini",
    cancer: "Cancer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Scorpio",
    sagittarius: "Sagittarius",
    capricorn: "Capricorn",
    aquarius: "Aquarius",
    pisces: "Pisces",

    signTexts: [
      "You seek a lively, direct, and authentic relationship. You appreciate people who can clearly express their intentions and respect your need for initiative.",
      "You need stability, consistency, and tangible expressions of affection. Trust develops gradually through reliability, sensuality, and everyday presence.",
      "Communication plays an essential role in your relationships. You need stimulating exchanges, curiosity, and a certain lightness to maintain your interest.",
      "You seek a reassuring, protective, and deeply emotional relationship. A sense of trust and belonging strongly influences your emotional openness.",
      "You need warmth, loyalty, and recognition. You give generously when you feel appreciated and when the relationship allows you to express your heart fully.",
      "You often express affection through helpful gestures, attention, and reliability. You seek a sincere, structured relationship that respects everyday needs.",
      "You seek harmony, dialogue, and reciprocity. The quality of communication, balance, and mutual respect are essential to your romantic well-being.",
      "You need intensity, depth, and loyalty. You rarely commit halfway and place great importance on emotional trust.",
      "You need freedom, enthusiasm, and growth in your relationships. A relationship must allow you to evolve without making you feel confined.",
      "You seek a solid, mature, and lasting relationship. You place great value on commitment, responsibility, and the ability to build together.",
      "You need space, authenticity, and intellectual connection. You appreciate relationships that respect individuality and are based on genuine friendship.",
      "You seek a sensitive, intuitive, and inspiring connection. You can deeply sense the needs of others and need to maintain clear emotional boundaries.",
    ],

    houseTexts: [
      "Your relationship life is closely connected to your identity. You need to remain yourself and maintain a strong presence within the relationship.",
      "Trust, security, and shared values play a major role. Material matters and stability may influence your emotional choices.",
      "Daily communication is essential. You need to exchange, understand, and speak freely about what you are experiencing.",
      "Partnership is connected to home, roots, and a sense of belonging. You often seek a relationship that creates a genuine feeling of family.",
      "Love, seduction, creativity, and pleasure play an important role. You need spontaneity and emotional expression.",
      "You place great importance on everyday gestures, mutual support, and sharing responsibilities.",
      "Relationships are a central axis of your life. You learn a great deal about yourself through partnership and the search for balance.",
      "You seek a deep, transformative, and intimate relationship. Trust, vulnerability, and emotional sharing are essential.",
      "You need a relationship that broadens your horizons. Travel, beliefs, projects, and shared growth can bring you closer together.",
      "Your emotional life may be connected to your ambitions, public image, or long-term goals.",
      "Friendship, shared projects, and freedom are essential. You need to share a vision of the future with your partner.",
      "Your relationship life can be highly intuitive and inward. You need clarity to avoid unspoken issues, projections, or excessive sacrifice.",
    ],
  },

  es: {
    analysis: "Análisis Firma",
    relationshipLife: "Tu vida relacional",
    relationshipLifeIntro:
      "Tu manera de amar no depende únicamente de tu signo solar. La Luna, Venus, Marte y el Descendente describen tus necesidades afectivas, tus atracciones, tu deseo y los aprendizajes que realizas a través de las relaciones.",
    descendant: "Tu Descendente",
    loveNeeds: "Tus necesidades amorosas",
    loveNeedsIntro:
      "Una relación satisfactoria respeta a la vez tu seguridad emocional, tus valores afectivos, tu deseo y tu necesidad de permanecer fiel a ti mismo.",
    relationshipStrength: "Tu fortaleza relacional",
    relationshipChallenge: "Tu desafío relacional",
    communicationLimits: "Comunicación y límites",
    balance: "Equilibrio",
    communicationText:
      "La calidad de tus relaciones depende de tu capacidad para expresar tus necesidades antes de que se acumule la insatisfacción. Un límite claro no es un rechazo: permite que la relación siga siendo honesta, equilibrada y respetuosa.",
    emotionalReciprocity: "Reciprocidad afectiva",
    essentialNeed: "Necesidad esencial",
    reciprocityText:
      "Necesitas una relación en la que la atención, el compromiso y los esfuerzos circulen en ambos sentidos. Dar mucho no debe obligarte a ignorar tus propias necesidades ni a sostener por tu cuenta la estabilidad del vínculo.",
    relationshipSynthesis: "Síntesis relacional",
    unavailableData: "Dato no disponible",
    unavailableAnalysis:
      "Los datos disponibles no permiten analizar con precisión",
    unspecified: "no especificado",
    housePositionPrefix: " Su posición en la casa",
    descendantUnavailable:
      "El signo del Descendente no puede determinarse con los datos disponibles. Sin embargo, el Descendente describe las cualidades que buscas a menudo en los demás y los aprendizajes realizados en pareja.",
    descendantIn: "Tu Descendente se encuentra en",
    descendantEnding:
      "Esta energía puede aparecer en las parejas que te atraen o en las cualidades que desarrollas a través de las relaciones.",
    strengthPrefixMoon:
      "Tu fortaleza afectiva se basa en el encuentro entre tu Luna en",
    strengthMiddleVenus: "y tu Venus en",
    strengthEnding:
      "Cuando tus necesidades emocionales y tu manera de amar son respetadas simultáneamente, puedes construir vínculos profundos, sinceros y duraderos.",
    challengeVenus: "Venus en",
    challengeMars:
      "describe lo que buscas en el amor, mientras que Marte en",
    challengeEnding:
      "muestra tu manera de actuar y reaccionar. Tu desafío consiste en conciliar la necesidad de armonía con la expresión clara de tus deseos, límites y frustraciones.",
    synthesisStart:
      "Tu funcionamiento relacional combina una Luna en",
    synthesisVenus: "una Venus en",
    synthesisMars: "y un Marte en",
    synthesisCore:
      "La Luna muestra lo que necesitas para sentirte seguro, Venus revela tu lenguaje afectivo y Marte describe tu manera de perseguir tus deseos o defender tus límites.",
    synthesisDescendantStart: "Tu Descendente en",
    synthesisDescendantEnd:
      "completa esta dinámica revelando las cualidades relacionales que estás llamado a encontrar o desarrollar.",
    synthesisEnding:
      "Una relación equilibrada te permite ser amado sin renunciar a tu identidad, comunicar tus necesidades con honestidad y preservar una reciprocidad real.",
    genericPosition:
      "Esta posición describe una manera personal de relacionarte y expresar tus necesidades afectivas.",
    moonRole:
      "La Luna describe tus necesidades emocionales, tus reacciones instintivas y lo que te permite sentirte seguro en una relación.",
    venusRole:
      "Venus describe tu manera de amar, tus valores afectivos, lo que te atrae y tu forma de crear armonía.",
    marsRole:
      "Marte describe tu deseo, tu manera de actuar, tu forma de afirmarte y la dinámica de tu energía relacional.",

    sun: "Sol",
    moon: "Luna",
    mercury: "Mercurio",
    venus: "Venus",
    mars: "Marte",
    jupiter: "Júpiter",
    saturn: "Saturno",
    uranus: "Urano",
    neptune: "Neptuno",
    pluto: "Plutón",

    aries: "Aries",
    taurus: "Tauro",
    gemini: "Géminis",
    cancer: "Cáncer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Escorpio",
    sagittarius: "Sagitario",
    capricorn: "Capricornio",
    aquarius: "Acuario",
    pisces: "Piscis",

    signTexts: [
      "Buscas una relación viva, directa y auténtica. Aprecias a las personas capaces de expresar claramente sus intenciones y respetar tu necesidad de iniciativa.",
      "Necesitas estabilidad, constancia y muestras concretas de afecto. La confianza se construye progresivamente mediante la fiabilidad, la sensualidad y la presencia cotidiana.",
      "La comunicación ocupa un lugar esencial en tus relaciones. Necesitas intercambios estimulantes, curiosidad y cierta ligereza para mantener tu interés.",
      "Buscas una relación segura, protectora y profundamente emocional. El sentimiento de confianza y pertenencia influye fuertemente en tu apertura afectiva.",
      "Necesitas calidez, lealtad y reconocimiento. Das mucho cuando te sientes apreciado y cuando la relación te permite expresar plenamente tu corazón.",
      "Sueles expresar tu afecto mediante gestos útiles, atención y fiabilidad. Buscas una relación sincera, estructurada y respetuosa con las necesidades cotidianas.",
      "Buscas armonía, diálogo y reciprocidad. La calidad de los intercambios, el equilibrio y el respeto mutuo son esenciales para tu bienestar amoroso.",
      "Necesitas intensidad, profundidad y lealtad. Rara vez te comprometes a medias y das gran importancia a la confianza emocional.",
      "Necesitas libertad, entusiasmo y crecimiento en tus relaciones. Una relación debe permitirte evolucionar sin hacerte sentir encerrado.",
      "Buscas una relación sólida, madura y duradera. Das mucho valor al compromiso, la responsabilidad y la capacidad de construir juntos.",
      "Necesitas espacio, autenticidad y complicidad intelectual. Aprecias las relaciones que respetan la individualidad y se basan en una verdadera amistad.",
      "Buscas una conexión sensible, intuitiva e inspiradora. Puedes percibir profundamente las necesidades del otro y necesitas preservar límites emocionales claros.",
    ],

    houseTexts: [
      "Tu vida relacional está estrechamente vinculada a tu identidad. Necesitas seguir siendo tú mismo y conservar una presencia fuerte en la pareja.",
      "La confianza, la seguridad y los valores compartidos ocupan un lugar importante. Las cuestiones materiales y la estabilidad pueden influir en tus elecciones afectivas.",
      "La comunicación cotidiana es esencial. Necesitas intercambiar, comprender y poder hablar libremente de lo que vives.",
      "La pareja está vinculada al hogar, las raíces y el sentimiento de pertenencia. Sueles buscar una relación que proporcione una verdadera sensación de familia.",
      "El amor, la seducción, la creatividad y el placer ocupan un lugar importante. Necesitas espontaneidad y expresión afectiva.",
      "Das mucha importancia a los gestos cotidianos, al apoyo mutuo y al reparto de responsabilidades.",
      "Las relaciones constituyen un eje central de tu vida. Aprendes mucho sobre ti mismo a través de la pareja, las asociaciones y la búsqueda de equilibrio.",
      "Buscas una relación profunda, transformadora e íntima. La confianza, la vulnerabilidad y el intercambio emocional son determinantes.",
      "Necesitas una relación que amplíe tus horizontes. Los viajes, las creencias, los proyectos y el crecimiento común pueden acercar a la pareja.",
      "Tu vida afectiva puede estar vinculada a tus ambiciones, tu imagen pública o tus objetivos a largo plazo.",
      "La amistad, los proyectos comunes y la libertad son esenciales. Necesitas compartir una visión del futuro con tu pareja.",
      "Tu vida relacional puede ser muy intuitiva e interior. Necesitas claridad para evitar lo no dicho, las proyecciones o los sacrificios excesivos.",
    ],
  },

  de: {
    analysis: "Signatur-Analyse",
    relationshipLife: "Ihr Beziehungsleben",
    relationshipLifeIntro:
      "Ihre Art zu lieben hängt nicht nur von Ihrem Sonnenzeichen ab. Mond, Venus, Mars und Deszendent beschreiben Ihre emotionalen Bedürfnisse, Anziehungskräfte, Wünsche und die Erfahrungen, die Sie durch Beziehungen machen.",
    descendant: "Ihr Deszendent",
    loveNeeds: "Ihre Bedürfnisse in der Liebe",
    loveNeedsIntro:
      "Eine erfüllende Beziehung respektiert Ihre emotionale Sicherheit, Ihre Gefühlswerte, Ihre Wünsche und Ihr Bedürfnis, sich selbst treu zu bleiben.",
    relationshipStrength: "Ihre Beziehungsstärke",
    relationshipChallenge: "Ihre Beziehungsherausforderung",
    communicationLimits: "Kommunikation und Grenzen",
    balance: "Gleichgewicht",
    communicationText:
      "Die Qualität Ihrer Beziehungen hängt von Ihrer Fähigkeit ab, Ihre Bedürfnisse auszudrücken, bevor sich Unzufriedenheit ansammelt. Eine klare Grenze ist keine Zurückweisung: Sie ermöglicht es der Beziehung, ehrlich, ausgewogen und respektvoll zu bleiben.",
    emotionalReciprocity: "Emotionale Gegenseitigkeit",
    essentialNeed: "Wesentliches Bedürfnis",
    reciprocityText:
      "Sie brauchen eine Beziehung, in der Aufmerksamkeit, Engagement und Bemühungen in beide Richtungen fließen. Viel zu geben sollte Sie nicht dazu zwingen, Ihre eigenen Bedürfnisse zu ignorieren oder allein die Stabilität der Beziehung zu tragen.",
    relationshipSynthesis: "Beziehungssynthese",
    unavailableData: "Daten nicht verfügbar",
    unavailableAnalysis:
      "Die verfügbaren Daten ermöglichen keine genaue Analyse von",
    unspecified: "nicht angegeben",
    housePositionPrefix: " Seine Position im Haus",
    descendantUnavailable:
      "Das Zeichen des Deszendenten kann anhand der verfügbaren Daten nicht bestimmt werden. Der Deszendent beschreibt jedoch die Eigenschaften, die Sie häufig bei anderen suchen, sowie die Erfahrungen, die Sie in Partnerschaften machen.",
    descendantIn: "Ihr Deszendent befindet sich in",
    descendantEnding:
      "Diese Energie kann bei Partnern auftreten, die Sie anziehen, oder in Eigenschaften, die Sie durch Beziehungen entwickeln.",
    strengthPrefixMoon:
      "Ihre emotionale Stärke beruht auf dem Zusammenspiel zwischen Ihrem Mond in",
    strengthMiddleVenus: "und Ihrer Venus in",
    strengthEnding:
      "Wenn Ihre emotionalen Bedürfnisse und Ihre Art zu lieben gleichzeitig respektiert werden, können Sie tiefe, aufrichtige und dauerhafte Bindungen aufbauen.",
    challengeVenus: "Venus in",
    challengeMars:
      "beschreibt, was Sie in der Liebe suchen, während Mars in",
    challengeEnding:
      "Ihre Art zu handeln und zu reagieren zeigt. Ihre Herausforderung besteht darin, das Bedürfnis nach Harmonie mit dem klaren Ausdruck Ihrer Wünsche, Grenzen und Frustrationen in Einklang zu bringen.",
    synthesisStart:
      "Ihre Beziehungsdynamik verbindet einen Mond in",
    synthesisVenus: "eine Venus in",
    synthesisMars: "und einen Mars in",
    synthesisCore:
      "Der Mond zeigt, was Sie brauchen, um sich sicher zu fühlen, Venus offenbart Ihre emotionale Sprache und Mars beschreibt, wie Sie Ihre Wünsche verfolgen oder Ihre Grenzen verteidigen.",
    synthesisDescendantStart: "Ihr Deszendent in",
    synthesisDescendantEnd:
      "ergänzt diese Dynamik, indem er die Beziehungsqualitäten offenbart, denen Sie begegnen oder die Sie entwickeln sollen.",
    synthesisEnding:
      "Eine ausgewogene Beziehung ermöglicht es Ihnen, geliebt zu werden, ohne Ihre Identität aufzugeben, Ihre Bedürfnisse ehrlich mitzuteilen und echte Gegenseitigkeit zu bewahren.",
    genericPosition:
      "Diese Position beschreibt eine persönliche Art, Beziehungen einzugehen und emotionale Bedürfnisse auszudrücken.",
    moonRole:
      "Der Mond beschreibt Ihre emotionalen Bedürfnisse, Ihre instinktiven Reaktionen und das, was Ihnen in einer Beziehung Sicherheit gibt.",
    venusRole:
      "Venus beschreibt Ihre Art zu lieben, Ihre Gefühlswerte, das, was Sie anzieht, und wie Sie Harmonie schaffen.",
    marsRole:
      "Mars beschreibt Ihr Verlangen, Ihre Handlungsweise, Ihre Selbstbehauptung und die Dynamik Ihrer Beziehungsenergie.",

    sun: "Sonne",
    moon: "Mond",
    mercury: "Merkur",
    venus: "Venus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturn",
    uranus: "Uranus",
    neptune: "Neptun",
    pluto: "Pluto",

    aries: "Widder",
    taurus: "Stier",
    gemini: "Zwillinge",
    cancer: "Krebs",
    leo: "Löwe",
    virgo: "Jungfrau",
    libra: "Waage",
    scorpio: "Skorpion",
    sagittarius: "Schütze",
    capricorn: "Steinbock",
    aquarius: "Wassermann",
    pisces: "Fische",

    signTexts: [
      "Sie suchen eine lebendige, direkte und authentische Beziehung. Sie schätzen Menschen, die ihre Absichten klar ausdrücken und Ihr Bedürfnis nach Eigeninitiative respektieren.",
      "Sie brauchen Stabilität, Beständigkeit und konkrete Zeichen der Zuneigung. Vertrauen entsteht allmählich durch Zuverlässigkeit, Sinnlichkeit und tägliche Präsenz.",
      "Kommunikation spielt in Ihren Beziehungen eine wesentliche Rolle. Sie brauchen anregenden Austausch, Neugier und eine gewisse Leichtigkeit, um Ihr Interesse aufrechtzuerhalten.",
      "Sie suchen eine sichere, beschützende und tief emotionale Beziehung. Vertrauen und Zugehörigkeit beeinflussen Ihre emotionale Offenheit stark.",
      "Sie brauchen Wärme, Loyalität und Anerkennung. Sie geben viel, wenn Sie sich wertgeschätzt fühlen und die Beziehung Ihnen erlaubt, Ihr Herz vollständig auszudrücken.",
      "Sie zeigen Ihre Zuneigung häufig durch hilfreiche Gesten, Aufmerksamkeit und Zuverlässigkeit. Sie suchen eine aufrichtige, strukturierte Beziehung, die alltägliche Bedürfnisse respektiert.",
      "Sie suchen Harmonie, Dialog und Gegenseitigkeit. Die Qualität des Austauschs, Ausgewogenheit und gegenseitiger Respekt sind für Ihr Liebesleben wesentlich.",
      "Sie brauchen Intensität, Tiefe und Loyalität. Sie engagieren sich selten halbherzig und legen großen Wert auf emotionales Vertrauen.",
      "Sie brauchen Freiheit, Begeisterung und Wachstum in Ihren Beziehungen. Eine Beziehung muss Ihnen ermöglichen, sich weiterzuentwickeln, ohne sich eingeengt zu fühlen.",
      "Sie suchen eine solide, reife und dauerhafte Beziehung. Engagement, Verantwortung und die Fähigkeit, gemeinsam etwas aufzubauen, sind Ihnen sehr wichtig.",
      "Sie brauchen Freiraum, Authentizität und intellektuelle Verbundenheit. Sie schätzen Beziehungen, die Individualität respektieren und auf echter Freundschaft beruhen.",
      "Sie suchen eine sensible, intuitive und inspirierende Verbindung. Sie können die Bedürfnisse anderer tief wahrnehmen und brauchen klare emotionale Grenzen.",
    ],

    houseTexts: [
      "Ihr Beziehungsleben ist eng mit Ihrer Identität verbunden. Sie müssen Sie selbst bleiben und eine starke Präsenz in der Partnerschaft bewahren.",
      "Vertrauen, Sicherheit und gemeinsame Werte spielen eine wichtige Rolle. Materielle Fragen und Stabilität können Ihre emotionalen Entscheidungen beeinflussen.",
      "Die tägliche Kommunikation ist wesentlich. Sie müssen sich austauschen, verstehen und frei über Ihre Erfahrungen sprechen können.",
      "Partnerschaft ist mit Zuhause, Wurzeln und Zugehörigkeit verbunden. Sie suchen häufig eine Beziehung, die ein echtes Familiengefühl vermittelt.",
      "Liebe, Verführung, Kreativität und Freude spielen eine wichtige Rolle. Sie brauchen Spontaneität und emotionalen Ausdruck.",
      "Sie legen großen Wert auf alltägliche Gesten, gegenseitige Unterstützung und die gemeinsame Übernahme von Verantwortung.",
      "Beziehungen bilden eine zentrale Achse Ihres Lebens. Durch Partnerschaften und die Suche nach Gleichgewicht lernen Sie viel über sich selbst.",
      "Sie suchen eine tiefe, transformative und intime Beziehung. Vertrauen, Verletzlichkeit und emotionaler Austausch sind entscheidend.",
      "Sie brauchen eine Beziehung, die Ihren Horizont erweitert. Reisen, Überzeugungen, Projekte und gemeinsames Wachstum können die Partnerschaft stärken.",
      "Ihr Gefühlsleben kann mit Ihren Ambitionen, Ihrem öffentlichen Bild oder Ihren langfristigen Zielen verbunden sein.",
      "Freundschaft, gemeinsame Projekte und Freiheit sind wesentlich. Sie müssen mit Ihrem Partner eine gemeinsame Zukunftsvision teilen.",
      "Ihr Beziehungsleben kann sehr intuitiv und nach innen gerichtet sein. Sie brauchen Klarheit, um Unausgesprochenes, Projektionen oder übermäßige Opfer zu vermeiden.",
    ],
  },

  it: {
    analysis: "Analisi Firma",
    relationshipLife: "La tua vita relazionale",
    relationshipLifeIntro:
      "Il tuo modo di amare non dipende soltanto dal tuo segno solare. La Luna, Venere, Marte e il Discendente descrivono i tuoi bisogni affettivi, le tue attrazioni, il tuo desiderio e gli apprendimenti che vivi attraverso le relazioni.",
    descendant: "Il tuo Discendente",
    loveNeeds: "I tuoi bisogni amorosi",
    loveNeedsIntro:
      "Una relazione soddisfacente rispetta allo stesso tempo la tua sicurezza emotiva, i tuoi valori affettivi, il tuo desiderio e il bisogno di rimanere fedele a te stesso.",
    relationshipStrength: "La tua forza relazionale",
    relationshipChallenge: "La tua sfida relazionale",
    communicationLimits: "Comunicazione e limiti",
    balance: "Equilibrio",
    communicationText:
      "La qualità delle tue relazioni dipende dalla capacità di esprimere i tuoi bisogni prima che l’insoddisfazione si accumuli. Un limite chiaro non è un rifiuto: permette alla relazione di rimanere onesta, equilibrata e rispettosa.",
    emotionalReciprocity: "Reciprocità affettiva",
    essentialNeed: "Bisogno essenziale",
    reciprocityText:
      "Hai bisogno di una relazione nella quale attenzione, impegno e sforzi circolino in entrambe le direzioni. Dare molto non deve obbligarti a ignorare i tuoi bisogni o a sostenere da solo la stabilità del legame.",
    relationshipSynthesis: "Sintesi relazionale",
    unavailableData: "Dato non disponibile",
    unavailableAnalysis:
      "I dati disponibili non permettono di analizzare con precisione",
    unspecified: "non specificato",
    housePositionPrefix: " La sua posizione nella casa",
    descendantUnavailable:
      "Il segno del Discendente non può essere determinato con i dati disponibili. Il Discendente descrive tuttavia le qualità che cerchi spesso negli altri e gli apprendimenti vissuti nella coppia.",
    descendantIn: "Il tuo Discendente si trova in",
    descendantEnding:
      "Questa energia può apparire nei partner che ti attraggono o nelle qualità che sviluppi attraverso le relazioni.",
    strengthPrefixMoon:
      "La tua forza affettiva si basa sull’incontro tra la tua Luna in",
    strengthMiddleVenus: "e la tua Venere in",
    strengthEnding:
      "Quando i tuoi bisogni emotivi e il tuo modo di amare vengono rispettati contemporaneamente, puoi costruire legami profondi, sinceri e duraturi.",
    challengeVenus: "Venere in",
    challengeMars:
      "descrive ciò che cerchi nell’amore, mentre Marte in",
    challengeEnding:
      "mostra il tuo modo di agire e reagire. La tua sfida consiste nell’accordare il bisogno di armonia con l’espressione chiara dei tuoi desideri, limiti e frustrazioni.",
    synthesisStart:
      "Il tuo funzionamento relazionale associa una Luna in",
    synthesisVenus: "una Venere in",
    synthesisMars: "e un Marte in",
    synthesisCore:
      "La Luna mostra ciò di cui hai bisogno per sentirti al sicuro, Venere rivela il tuo linguaggio affettivo e Marte descrive il modo in cui persegui i tuoi desideri o difendi i tuoi limiti.",
    synthesisDescendantStart: "Il tuo Discendente in",
    synthesisDescendantEnd:
      "completa questa dinamica rivelando le qualità relazionali che sei chiamato a incontrare o sviluppare.",
    synthesisEnding:
      "Una relazione equilibrata ti permette di essere amato senza rinunciare alla tua identità, di comunicare i tuoi bisogni con onestà e di preservare una reale reciprocità.",
    genericPosition:
      "Questa posizione descrive un modo personale di entrare in relazione e di esprimere i tuoi bisogni affettivi.",
    moonRole:
      "La Luna descrive i tuoi bisogni emotivi, le tue reazioni istintive e ciò che ti permette di sentirti al sicuro in una relazione.",
    venusRole:
      "Venere descrive il tuo modo di amare, i tuoi valori affettivi, ciò che ti attrae e il tuo modo di creare armonia.",
    marsRole:
      "Marte descrive il tuo desiderio, il tuo modo di agire, di affermarti e la dinamica della tua energia relazionale.",

    sun: "Sole",
    moon: "Luna",
    mercury: "Mercurio",
    venus: "Venere",
    mars: "Marte",
    jupiter: "Giove",
    saturn: "Saturno",
    uranus: "Urano",
    neptune: "Nettuno",
    pluto: "Plutone",

    aries: "Ariete",
    taurus: "Toro",
    gemini: "Gemelli",
    cancer: "Cancro",
    leo: "Leone",
    virgo: "Vergine",
    libra: "Bilancia",
    scorpio: "Scorpione",
    sagittarius: "Sagittario",
    capricorn: "Capricorno",
    aquarius: "Acquario",
    pisces: "Pesci",

    signTexts: [
      "Cerchi una relazione viva, diretta e autentica. Apprezzi le persone capaci di esprimere chiaramente le proprie intenzioni e rispettare il tuo bisogno di iniziativa.",
      "Hai bisogno di stabilità, costanza e prove concrete di affetto. La fiducia si costruisce progressivamente attraverso affidabilità, sensualità e presenza quotidiana.",
      "La comunicazione occupa un posto essenziale nelle tue relazioni. Hai bisogno di scambi stimolanti, curiosità e una certa leggerezza per mantenere vivo il tuo interesse.",
      "Cerchi una relazione rassicurante, protettiva e profondamente emotiva. Il sentimento di fiducia e appartenenza influenza fortemente la tua apertura affettiva.",
      "Hai bisogno di calore, lealtà e riconoscimento. Dai molto quando ti senti apprezzato e quando la relazione ti permette di esprimere pienamente il tuo cuore.",
      "Esprimi spesso il tuo affetto attraverso gesti utili, attenzione e affidabilità. Cerchi una relazione sincera, strutturata e rispettosa dei bisogni quotidiani.",
      "Cerchi armonia, dialogo e reciprocità. La qualità degli scambi, l’equilibrio e il rispetto reciproco sono essenziali per il tuo benessere amoroso.",
      "Hai bisogno di intensità, profondità e lealtà. Raramente ti impegni a metà e attribuisci grande importanza alla fiducia emotiva.",
      "Hai bisogno di libertà, entusiasmo e crescita nelle relazioni. Una relazione deve permetterti di evolvere senza farti sentire imprigionato.",
      "Cerchi una relazione solida, matura e duratura. Dai grande valore all’impegno, alla responsabilità e alla capacità di costruire insieme.",
      "Hai bisogno di spazio, autenticità e complicità intellettuale. Apprezzi le relazioni che rispettano l’individualità e si basano su una vera amicizia.",
      "Cerchi una connessione sensibile, intuitiva e ispirante. Puoi percepire profondamente i bisogni dell’altro e hai bisogno di mantenere limiti emotivi chiari.",
    ],

    houseTexts: [
      "La tua vita relazionale è strettamente legata alla tua identità. Hai bisogno di rimanere te stesso e mantenere una presenza forte nella coppia.",
      "Fiducia, sicurezza e valori condivisi occupano un posto importante. Le questioni materiali e la stabilità possono influenzare le tue scelte affettive.",
      "La comunicazione quotidiana è essenziale. Hai bisogno di scambiare, comprendere e poter parlare liberamente di ciò che vivi.",
      "La coppia è legata alla casa, alle radici e al senso di appartenenza. Cerchi spesso una relazione che dia una vera sensazione di famiglia.",
      "Amore, seduzione, creatività e piacere occupano un posto importante. Hai bisogno di spontaneità ed espressione affettiva.",
      "Attribuisci grande importanza ai gesti quotidiani, al sostegno reciproco e alla condivisione delle responsabilità.",
      "Le relazioni costituiscono un asse centrale della tua vita. Impari molto su te stesso attraverso la coppia, le collaborazioni e la ricerca di equilibrio.",
      "Cerchi una relazione profonda, trasformativa e intima. Fiducia, vulnerabilità e condivisione emotiva sono determinanti.",
      "Hai bisogno di una relazione che allarghi i tuoi orizzonti. Viaggi, convinzioni, progetti e crescita comune possono avvicinare la coppia.",
      "La tua vita affettiva può essere legata alle tue ambizioni, alla tua immagine pubblica o ai tuoi obiettivi a lungo termine.",
      "Amicizia, progetti comuni e libertà sono essenziali. Hai bisogno di condividere una visione del futuro con il tuo partner.",
      "La tua vita relazionale può essere molto intuitiva e interiore. Hai bisogno di chiarezza per evitare non detti, proiezioni o sacrifici eccessivi.",
    ],
  },

  pt: {
    analysis: "Análise Assinatura",
    relationshipLife: "Sua vida relacional",
    relationshipLifeIntro:
      "Sua maneira de amar não depende apenas do seu signo solar. A Lua, Vênus, Marte e o Descendente descrevem suas necessidades afetivas, suas atrações, seu desejo e os aprendizados que você vivencia através dos relacionamentos.",
    descendant: "Seu Descendente",
    loveNeeds: "Suas necessidades amorosas",
    loveNeedsIntro:
      "Um relacionamento satisfatório respeita ao mesmo tempo sua segurança emocional, seus valores afetivos, seu desejo e sua necessidade de permanecer fiel a si mesmo.",
    relationshipStrength: "Sua força relacional",
    relationshipChallenge: "Seu desafio relacional",
    communicationLimits: "Comunicação e limites",
    balance: "Equilíbrio",
    communicationText:
      "A qualidade dos seus relacionamentos depende da sua capacidade de expressar suas necessidades antes que a insatisfação se acumule. Um limite claro não é uma rejeição: ele permite que a relação permaneça honesta, equilibrada e respeitosa.",
    emotionalReciprocity: "Reciprocidade afetiva",
    essentialNeed: "Necessidade essencial",
    reciprocityText:
      "Você precisa de um relacionamento no qual atenção, compromisso e esforços circulem nos dois sentidos. Dar muito não deve obrigá-lo a ignorar suas próprias necessidades nem a sustentar sozinho a estabilidade do vínculo.",
    relationshipSynthesis: "Síntese relacional",
    unavailableData: "Dado indisponível",
    unavailableAnalysis:
      "Os dados disponíveis não permitem analisar com precisão",
    unspecified: "não especificado",
    housePositionPrefix: " Sua posição na casa",
    descendantUnavailable:
      "O signo do Descendente não pode ser determinado com os dados disponíveis. O Descendente descreve, porém, as qualidades que você costuma buscar nos outros e os aprendizados realizados no relacionamento.",
    descendantIn: "Seu Descendente está em",
    descendantEnding:
      "Essa energia pode aparecer nos parceiros que atraem você ou nas qualidades que você desenvolve através dos relacionamentos.",
    strengthPrefixMoon:
      "Sua força afetiva se apoia no encontro entre sua Lua em",
    strengthMiddleVenus: "e sua Vênus em",
    strengthEnding:
      "Quando suas necessidades emocionais e sua maneira de amar são respeitadas simultaneamente, você pode construir vínculos profundos, sinceros e duradouros.",
    challengeVenus: "Vênus em",
    challengeMars:
      "descreve o que você procura no amor, enquanto Marte em",
    challengeEnding:
      "mostra sua maneira de agir e reagir. Seu desafio consiste em conciliar a necessidade de harmonia com a expressão clara dos seus desejos, limites e frustrações.",
    synthesisStart:
      "Seu funcionamento relacional associa uma Lua em",
    synthesisVenus: "uma Vênus em",
    synthesisMars: "e um Marte em",
    synthesisCore:
      "A Lua mostra o que você precisa para se sentir seguro, Vênus revela sua linguagem afetiva e Marte descreve sua maneira de perseguir seus desejos ou defender seus limites.",
    synthesisDescendantStart: "Seu Descendente em",
    synthesisDescendantEnd:
      "completa essa dinâmica revelando as qualidades relacionais que você é chamado a encontrar ou desenvolver.",
    synthesisEnding:
      "Um relacionamento equilibrado permite que você seja amado sem renunciar à sua identidade, comunique suas necessidades com honestidade e preserve uma reciprocidade real.",
    genericPosition:
      "Esta posição descreve uma maneira pessoal de se relacionar e expressar suas necessidades afetivas.",
    moonRole:
      "A Lua descreve suas necessidades emocionais, suas reações instintivas e o que permite que você se sinta seguro em um relacionamento.",
    venusRole:
      "Vênus descreve sua maneira de amar, seus valores afetivos, o que atrai você e sua forma de criar harmonia.",
    marsRole:
      "Marte descreve seu desejo, sua maneira de agir, de se afirmar e a dinâmica da sua energia relacional.",

    sun: "Sol",
    moon: "Lua",
    mercury: "Mercúrio",
    venus: "Vênus",
    mars: "Marte",
    jupiter: "Júpiter",
    saturn: "Saturno",
    uranus: "Urano",
    neptune: "Netuno",
    pluto: "Plutão",

    aries: "Áries",
    taurus: "Touro",
    gemini: "Gêmeos",
    cancer: "Câncer",
    leo: "Leão",
    virgo: "Virgem",
    libra: "Libra",
    scorpio: "Escorpião",
    sagittarius: "Sagitário",
    capricorn: "Capricórnio",
    aquarius: "Aquário",
    pisces: "Peixes",

    signTexts: [
      "Você busca um relacionamento vivo, direto e autêntico. Aprecia pessoas capazes de expressar claramente suas intenções e respeitar sua necessidade de iniciativa.",
      "Você precisa de estabilidade, constância e demonstrações concretas de afeto. A confiança se constrói progressivamente através da confiabilidade, da sensualidade e da presença cotidiana.",
      "A comunicação ocupa um lugar essencial nos seus relacionamentos. Você precisa de trocas estimulantes, curiosidade e certa leveza para manter seu interesse.",
      "Você busca um relacionamento seguro, protetor e profundamente emocional. O sentimento de confiança e pertencimento influencia fortemente sua abertura afetiva.",
      "Você precisa de calor, lealdade e reconhecimento. Dá muito quando se sente valorizado e quando o relacionamento permite que expresse plenamente seu coração.",
      "Você costuma expressar afeto através de gestos úteis, atenção e confiabilidade. Busca um relacionamento sincero, estruturado e respeitoso com as necessidades cotidianas.",
      "Você busca harmonia, diálogo e reciprocidade. A qualidade das trocas, o equilíbrio e o respeito mútuo são essenciais para seu bem-estar amoroso.",
      "Você precisa de intensidade, profundidade e lealdade. Raramente se compromete pela metade e dá grande importância à confiança emocional.",
      "Você precisa de liberdade, entusiasmo e crescimento nos relacionamentos. Uma relação deve permitir que você evolua sem fazê-lo sentir-se preso.",
      "Você busca um relacionamento sólido, maduro e duradouro. Valoriza muito o compromisso, a responsabilidade e a capacidade de construir juntos.",
      "Você precisa de espaço, autenticidade e cumplicidade intelectual. Aprecia relacionamentos que respeitam a individualidade e se baseiam em verdadeira amizade.",
      "Você busca uma conexão sensível, intuitiva e inspiradora. Pode perceber profundamente as necessidades do outro e precisa preservar limites emocionais claros.",
    ],

    houseTexts: [
      "Sua vida relacional está intimamente ligada à sua identidade. Você precisa continuar sendo você mesmo e manter uma presença forte no relacionamento.",
      "Confiança, segurança e valores compartilhados ocupam um lugar importante. Questões materiais e estabilidade podem influenciar suas escolhas afetivas.",
      "A comunicação cotidiana é essencial. Você precisa trocar ideias, compreender e poder falar livremente sobre o que vive.",
      "O relacionamento está ligado ao lar, às raízes e ao sentimento de pertencimento. Você costuma buscar uma relação que proporcione uma verdadeira sensação de família.",
      "Amor, sedução, criatividade e prazer ocupam um lugar importante. Você precisa de espontaneidade e expressão afetiva.",
      "Você dá muita importância aos gestos cotidianos, ao apoio mútuo e à divisão das responsabilidades.",
      "Os relacionamentos constituem um eixo central da sua vida. Você aprende muito sobre si mesmo através da parceria e da busca por equilíbrio.",
      "Você busca um relacionamento profundo, transformador e íntimo. Confiança, vulnerabilidade e compartilhamento emocional são determinantes.",
      "Você precisa de um relacionamento que amplie seus horizontes. Viagens, crenças, projetos e crescimento conjunto podem aproximar o casal.",
      "Sua vida afetiva pode estar ligada às suas ambições, à sua imagem pública ou aos seus objetivos de longo prazo.",
      "Amizade, projetos em comum e liberdade são essenciais. Você precisa compartilhar uma visão de futuro com seu parceiro.",
      "Sua vida relacional pode ser muito intuitiva e interior. Você precisa de clareza para evitar não ditos, projeções ou sacrifícios excessivos.",
    ],
  },
};

function replaceAll(
  source: string,
  from: string,
  to: string,
): string {
  return source
    .split(from)
    .join(to);
}

export function localizeSignatureRelationships(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const lang =
    locale as NonFrenchLocale;

  const labels =
    LABELS[lang];

  const planetSignConnector:
    Record<NonFrenchLocale, string> = {
      en: "in",
      es: "en",
      de: "im",
      it: "in",
      pt: "em",
    };

  let out =
    source.replace(/\r\n/g, "\n");

  /*
  |--------------------------------------------------------------------------
  | Noms visibles des planètes
  |--------------------------------------------------------------------------
  */

  const planetNames = {
    Sun: labels.sun,
    Moon: labels.moon,
    Mercury: labels.mercury,
    Venus: labels.venus,
    Mars: labels.mars,
    Jupiter: labels.jupiter,
    Saturn: labels.saturn,
    Uranus: labels.uranus,
    Neptune: labels.neptune,
    Pluto: labels.pluto,
  };

  out = out.replace(
    /const PLANET_NAMES_FR:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\};/,
    `const PLANET_NAMES_FR: Record<string, string> = ${JSON.stringify(
      planetNames,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Signes visibles
  |--------------------------------------------------------------------------
  */

  const signNames = {
    Aries: labels.aries,
    Taurus: labels.taurus,
    Gemini: labels.gemini,
    Cancer: labels.cancer,
    Leo: labels.leo,
    Virgo: labels.virgo,
    Libra: labels.libra,
    Scorpio: labels.scorpio,
    Sagittarius: labels.sagittarius,
    Capricorn: labels.capricorn,
    Aquarius: labels.aquarius,
    Pisces: labels.pisces,

    Bélier: labels.aries,
    Taureau: labels.taurus,
    Gémeaux: labels.gemini,
    Lion: labels.leo,
    Vierge: labels.virgo,
    Balance: labels.libra,
    Scorpion: labels.scorpio,
    Sagittaire: labels.sagittarius,
    Capricorne: labels.capricorn,
    Verseau: labels.aquarius,
    Poissons: labels.pisces,
  };

  out = out.replace(
    /const SIGN_NAMES_FR:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\};/,
    `const SIGN_NAMES_FR: Record<string, string> = ${JSON.stringify(
      signNames,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Signes calculés du Descendant
  |--------------------------------------------------------------------------
  |
  | longitudeToSign() contient aussi un tableau français dans le composant.
  | On le remplace afin que descendantSign soit déjà localisé.
  |--------------------------------------------------------------------------
  */

  const longitudeSigns = [
    labels.aries,
    labels.taurus,
    labels.gemini,
    labels.cancer,
    labels.leo,
    labels.virgo,
    labels.libra,
    labels.scorpio,
    labels.sagittarius,
    labels.capricorn,
    labels.aquarius,
    labels.pisces,
  ];

  out = out.replace(
    /const signs = \[\s*"Bélier",\s*"Taureau",\s*"Gémeaux",\s*"Cancer",\s*"Lion",\s*"Vierge",\s*"Balance",\s*"Scorpion",\s*"Sagittaire",\s*"Capricorne",\s*"Verseau",\s*"Poissons",?\s*\];/,
    `const signs = ${JSON.stringify(
      longitudeSigns,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Textes relationnels par signe
  |--------------------------------------------------------------------------
  */

  const frenchSigns = [
    "Bélier",
    "Taureau",
    "Gémeaux",
    "Cancer",
    "Lion",
    "Vierge",
    "Balance",
    "Scorpion",
    "Sagittaire",
    "Capricorne",
    "Verseau",
    "Poissons",
  ];

  const relationshipTexts =
    Object.fromEntries(
      frenchSigns.map(
        (sign, index) => [
          signNames[
            sign as keyof typeof signNames
          ],
          labels.signTexts[index],
        ],
      ),
    );

  out = out.replace(
    /const SIGN_RELATIONSHIP_TEXTS:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\};/,
    `const SIGN_RELATIONSHIP_TEXTS: Record<string, string> = ${JSON.stringify(
      relationshipTexts,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Rôle des planètes
  |--------------------------------------------------------------------------
  |
  | Les clés Moon / Venus / Mars restent techniques.
  |--------------------------------------------------------------------------
  */

  const roleTexts = {
    Moon: labels.moonRole,
    Venus: labels.venusRole,
    Mars: labels.marsRole,
  };

  out = out.replace(
    /const PLANET_ROLE_TEXTS:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\};/,
    `const PLANET_ROLE_TEXTS: Record<RelationshipPlanetName, string> = ${JSON.stringify(
      roleTexts,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Textes des 12 maisons
  |--------------------------------------------------------------------------
  */

  const houseTexts =
    Object.fromEntries(
      labels.houseTexts.map(
        (text, index) => [
          index + 1,
          text,
        ],
      ),
    );

  out = out.replace(
    /const HOUSE_RELATIONSHIP_TEXTS:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\};/,
    `const HOUSE_RELATIONSHIP_TEXTS: Record<number, string> = ${JSON.stringify(
      houseTexts,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Textes fixes des pages
  |--------------------------------------------------------------------------
  */

  const replacements:
    Array<[string, string]> = [
      [
        "Analyse Signature",
        labels.analysis,
      ],
      [
        "Votre vie relationnelle",
        labels.relationshipLife,
      ],
      [
        `Votre manière d’aimer ne dépend pas
            seulement de votre signe solaire. La Lune,
            Vénus, Mars et le Descendant décrivent vos
            besoins affectifs, vos attirances, votre
            désir et les apprentissages que vous faites
            à travers les relations.`,
        labels.relationshipLifeIntro,
      ],
      [
        "Votre Descendant",
        labels.descendant,
      ],
      [
        "Vos besoins amoureux",
        labels.loveNeeds,
      ],
      [
        `Une relation satisfaisante respecte à la
            fois votre sécurité émotionnelle, vos
            valeurs affectives, votre désir et votre
            besoin de rester fidèle à vous-même.`,
        labels.loveNeedsIntro,
      ],
      [
        "Votre force relationnelle",
        labels.relationshipStrength,
      ],
      [
        "Votre défi relationnel",
        labels.relationshipChallenge,
      ],
      [
        "Communication et limites",
        labels.communicationLimits,
      ],
      [
        "Équilibre",
        labels.balance,
      ],
      [
        `La qualité de vos relations dépend de
              votre capacité à exprimer vos besoins
              avant que l’insatisfaction ne s’accumule.
              Une limite claire n’est pas un rejet :
              elle permet à la relation de rester
              honnête, équilibrée et respectueuse.`,
        labels.communicationText,
      ],
      [
        "Réciprocité affective",
        labels.emotionalReciprocity,
      ],
      [
        "Besoin essentiel",
        labels.essentialNeed,
      ],
      [
        `Vous avez besoin d’une relation dans
              laquelle l’attention, l’engagement et les
              efforts circulent dans les deux sens.
              Donner beaucoup ne doit pas vous obliger
              à ignorer vos propres besoins ou à porter
              seule la stabilité du lien.`,
        labels.reciprocityText,
      ],
      [
        "Synthèse relationnelle",
        labels.relationshipSynthesis,
      ],
      [
        "Donnée indisponible",
        labels.unavailableData,
      ],
      [
        "non précisé",
        labels.unspecified,
      ],
      [
        "Cette position décrit une manière personnelle d’entrer en relation et d’exprimer vos besoins affectifs.",
        labels.genericPosition,
      ],
    ];

  for (
    const [from, to] of replacements
  ) {
    out =
      replaceAll(
        out,
        from,
        to,
      );
  }

  /*
  |--------------------------------------------------------------------------
  | Titres dynamiques planète + signe
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /`\$\{translatedName\} en \$\{frenchSign\}`/g,
    `\`\${translatedName} ${planetSignConnector[lang]} \${frenchSign}\``,
  );

  /*
  |--------------------------------------------------------------------------
  | Phrases dynamiques
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /`Les données disponibles ne permettent pas d’analyser précisément \$\{translatedName\}\.`/,
    `\`${labels.unavailableAnalysis} \${translatedName}.\``,
  );

  out = out.replace(
    /` Sa position en maison \$\{house\} ajoute une importance particulière : `/,
    `\`${labels.housePositionPrefix} \${house} : \``,
  );

  out = out.replace(
    /`Votre Descendant se trouve en \$\{sign\}\. `/,
    `\`${labels.descendantIn} \${sign}. \``,
  );

  out = replaceAll(
    out,
    "Le signe du Descendant ne peut pas être déterminé avec les données disponibles. ",
    labels.descendantUnavailable + " ",
  );

  out = replaceAll(
    out,
    "Le Descendant décrit pourtant les qualités que vous recherchez souvent chez les autres et les apprentissages réalisés dans le couple.",
    "",
  );

  out = replaceAll(
    out,
    "Cette énergie peut apparaître chez les partenaires qui vous attirent ou dans les qualités que vous développez à travers les relations.",
    labels.descendantEnding,
  );


  const localizedDescendantFunction = `
function getDescendantText(
  sign: string | null
): string {
  if (!sign) {
    return ${JSON.stringify(labels.descendantUnavailable)};
  }

  const signText =
    SIGN_RELATIONSHIP_TEXTS[
      sign
    ] || "";

  return (
    ${JSON.stringify(labels.descendantIn)} +
    " " +
    sign +
    ". " +
    signText +
    " " +
    ${JSON.stringify(labels.descendantEnding)}
  ).trim();
}
`;

  out = out.replace(
    /function getDescendantText\([\s\S]*?\n\}\n\nfunction getRelationshipStrength\(/m,
    `${localizedDescendantFunction}\nfunction getRelationshipStrength(`,
  );

  /*
  |--------------------------------------------------------------------------
  | Force relationnelle dynamique
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /`Votre force affective repose sur la rencontre entre votre Lune en \$\{moonSign\} et votre Vénus en \$\{venusSign\}\. `/,
    `\`${labels.strengthPrefixMoon} \${moonSign} ${labels.strengthMiddleVenus} \${venusSign}. \``,
  );

  out = replaceAll(
    out,
    "Lorsque vos besoins émotionnels et votre manière d’aimer sont respectés simultanément, vous pouvez construire des liens profonds, sincères et durables.",
    labels.strengthEnding,
  );

  /*
  |--------------------------------------------------------------------------
  | Défi relationnel dynamique
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /`Vénus en \$\{venusSign\} décrit ce que vous recherchez dans l’amour, tandis que Mars en \$\{marsSign\} montre votre manière d’agir et de réagir\. `/,
    `\`${labels.challengeVenus} \${venusSign} ${labels.challengeMars} \${marsSign} ${labels.challengeEnding} \``,
  );

  out = replaceAll(
    out,
    "Votre défi consiste à accorder le besoin d’harmonie avec l’expression claire de vos désirs, de vos limites et de vos frustrations.",
    "",
  );


  const localizedRelationshipSynthesisFunction = `
function createRelationshipSynthesis(
  moon: SignatureRelationshipPlanet | null,
  venus: SignatureRelationshipPlanet | null,
  mars: SignatureRelationshipPlanet | null,
  descendantSign: string | null
): string {
  const moonSign =
    getFrenchSign(
      moon?.sign
    );

  const venusSign =
    getFrenchSign(
      venus?.sign
    );

  const marsSign =
    getFrenchSign(
      mars?.sign
    );

  const descendantText =
    descendantSign
      ? ${JSON.stringify(labels.synthesisDescendantStart)} +
        " " +
        descendantSign +
        " " +
        ${JSON.stringify(labels.synthesisDescendantEnd)}
      : "";

  return (
    ${JSON.stringify(labels.synthesisStart)} +
    " " +
    moonSign +
    ", " +
    ${JSON.stringify(labels.synthesisVenus)} +
    " " +
    venusSign +
    " " +
    ${JSON.stringify(labels.synthesisMars)} +
    " " +
    marsSign +
    ". " +
    ${JSON.stringify(labels.synthesisCore)} +
    " " +
    descendantText +
    " " +
    ${JSON.stringify(labels.synthesisEnding)}
  ).trim();
}
`;

  out = out.replace(
    /function createRelationshipSynthesis\([\s\S]*?\n\}\n\nexport default function PdfSignatureRelationships\(/m,
    `${localizedRelationshipSynthesisFunction}\nexport default function PdfSignatureRelationships(`,
  );

  /*
  |--------------------------------------------------------------------------
  | Synthèse relationnelle dynamique
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /`Votre fonctionnement relationnel associe une Lune en \$\{moonSign\}, une Vénus en \$\{venusSign\} et un Mars en \$\{marsSign\}\. `/,
    `\`${labels.synthesisStart} \${moonSign}, ${labels.synthesisVenus} \${venusSign} ${labels.synthesisMars} \${marsSign}. \``,
  );

  out = replaceAll(
    out,
    "La Lune montre ce dont vous avez besoin pour vous sentir en sécurité, Vénus révèle votre langage affectif et Mars décrit votre manière de poursuivre vos désirs ou de défendre vos limites. ",
    labels.synthesisCore + " ",
  );

  out = out.replace(
    /`Votre Descendant en \$\{descendantSign\} complète cette dynamique en révélant les qualités relationnelles que vous êtes appelée à rencontrer ou à développer\.`/,
    `\`${labels.synthesisDescendantStart} \${descendantSign} ${labels.synthesisDescendantEnd}\``,
  );

  out = replaceAll(
    out,
    "Une relation équilibrée vous permet d’être aimée sans renoncer à votre identité, de communiquer vos besoins avec honnêteté et de préserver une réciprocité réelle.",
    labels.synthesisEnding,
  );

  return out;
}
