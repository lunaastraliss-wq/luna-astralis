import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<
    PaidPdfLocale,
    "fr"
  >;

type TalentProfile = {
  title: string;
  introduction: string;
  naturalGift: string;
  hiddenPotential: string;
  expression: string;
  underusedStrength: string;
  development: string;
  contribution: string;
  key: string;
};

type HiddenTalentsLabels = {
  analysis: string;
  title: string;
  subtitle: string;

  mainPotential: string;

  naturalGiftLabel: string;
  naturalGiftTitle: string;

  hiddenPotentialLabel: string;
  hiddenPotentialTitle: string;

  naturalExpression: string;

  quote: string;

  complementaryResources: string;
  intelligenceExpansion: string;
  complementaryIntro: string;

  jupiter: string;
  mercury: string;
  uranus: string;
  midheaven: string;

  jupiterRole: string;
  mercuryRole: string;
  uranusRole: string;
  midheavenRole: string;

  naturalIntelligence: string;
  innovationStrength: string;
  visiblePotential: string;

  developPotential: string;
  giveMoreSpace: string;
  developmentIntro: string;

  underusedStrengthLabel: string;
  recognizeMore: string;

  developmentLabel: string;
  growPotential: string;

  threeWays: string;
  step1: string;
  step2: string;
  step3: string;

  signatureKey: string;
  talentContribution: string;
  closingText: string;

  mercuryFallback: string;
  uranusFallback: string;
  midheavenFallback: string;

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

  profiles:
    Record<
      string,
      TalentProfile
    >;

  mercuryTalents:
    Record<
      string,
      string
    >;

  uranusTalents:
    Record<
      string,
      string
    >;

  midheavenTalents:
    Record<
      string,
      string
    >;
};

const LABELS:
Record<
  NonFrenchLocale,
  HiddenTalentsLabels
> = {
  en: {
    analysis:
      "Signature Analysis",

    title:
      "Your hidden talents",

    subtitle:
      "Your natural abilities, untapped resources, and strengths that can take a greater place in your life.",

    mainPotential:
      "Your main potential",

    naturalGiftLabel:
      "Natural gift",

    naturalGiftTitle:
      "What you instinctively do well",

    hiddenPotentialLabel:
      "Hidden potential",

    hiddenPotentialTitle:
      "What can still grow further",

    naturalExpression:
      "Your natural way of expressing this talent",

    quote:
      "“A hidden talent is not always an unknown ability. It may be a quality you have used for a long time without recognizing its true value.”",

    complementaryResources:
      "Your complementary resources",

    intelligenceExpansion:
      "Intelligence, expansion, originality, and achievement",

    complementaryIntro:
      "Jupiter shows the areas where your confidence can expand. Mercury describes your intelligence and your way of learning. Uranus reveals your originality, while the Midheaven indicates qualities that can become visible in your professional path.",

    jupiter:
      "Jupiter",

    mercury:
      "Mercury",

    uranus:
      "Uranus",

    midheaven:
      "Midheaven",

    jupiterRole:
      "Your capacity for expansion, confidence, and growth.",

    mercuryRole:
      "Your intelligence, communication, and learning method.",

    uranusRole:
      "Your originality and your ability to innovate.",

    midheavenRole:
      "The qualities that can become visible in your vocation.",

    naturalIntelligence:
      "Your natural intelligence",

    innovationStrength:
      "Your power of innovation",

    visiblePotential:
      "Your visible potential",

    developPotential:
      "Developing your potential",

    giveMoreSpace:
      "Giving more space to what already exists within you",

    developmentIntro:
      "A potential becomes a fully available talent when it is recognized, practiced, and integrated into concrete situations. You do not need to change everything. Often, it is enough to give more space to a quality that is already present.",

    underusedStrengthLabel:
      "Underused strength",

    recognizeMore:
      "What you could recognize more fully",

    developmentLabel:
      "Development",

    growPotential:
      "How to develop this potential",

    threeWays:
      "Three ways to develop your talents",

    step1:
      "Observe the situations in which other people naturally come to you for help, your opinion, or your presence.",

    step2:
      "Identify the tasks that seem simple to you but represent a real difficulty for other people.",

    step3:
      "Choose a concrete project in which you can practice this ability regularly and visibly.",

    signatureKey:
      "Your Signature key",

    talentContribution:
      "A talent becomes a contribution",

    closingText:
      "The more you recognize the value of your natural abilities, the more consciously you can use them instead of considering them ordinary.",

    mercuryFallback:
      "Mercury reveals the way you learn, understand, communicate, and transform your ideas into skills.",

    uranusFallback:
      "Uranus reveals your ability to innovate, think differently, and bring an unexpected solution.",

    midheavenFallback:
      "Your Midheaven shows the talents that can take a visible place in your professional path.",

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

    profiles: {
      Aries: {
        title:
          "The talent to initiate, mobilize, and create new momentum",

        introduction:
          "Jupiter in Aries amplifies your ability to act courageously and create movement when others hesitate. Your potential is revealed when you trust your instinct for initiative.",

        naturalGift:
          "You quickly recognize what needs to be started, defended, or relaunched.",

        hiddenPotential:
          "You can become someone capable of opening a new path and encouraging others to act.",

        expression:
          "Your talent is expressed in projects that require boldness, speed, autonomy, and leadership.",

        underusedStrength:
          "Your ability to decide without waiting for outside validation may be greater than you think.",

        development:
          "Your talent grows when you learn to support your impulse with strategy and continuity.",

        contribution:
          "You bring courage, momentum, and energy capable of moving a situation out of stagnation.",

        key:
          "Begin boldly, then stay long enough to build.",
      },

      Taurus: {
        title:
          "The talent to build, stabilize, and make things grow",

        introduction:
          "Jupiter in Taurus develops practical, patient intelligence focused on sustainable growth. You have a natural potential to transform a simple resource into something solid.",

        naturalGift:
          "You know how to recognize what can last, be developed, or become genuinely useful.",

        hiddenPotential:
          "You can create security, a body of work, or an activity that grows gradually over time.",

        expression:
          "Your talent is expressed through management, creation, resources, material matters, beauty, and long-term projects.",

        underusedStrength:
          "Your patience and consistency can produce more than quick and scattered actions.",

        development:
          "Your talent grows when you accept adapting your methods without abandoning your values.",

        contribution:
          "You bring stability, realism, reliability, and the ability to make things concrete.",

        key:
          "Trust the power of steady progress.",
      },

      Gemini: {
        title:
          "The talent to understand, connect, and transmit ideas",

        introduction:
          "Jupiter in Gemini amplifies your curiosity, mental mobility, and ability to create links between several subjects. You have a natural potential for making information clearer and more alive.",

        naturalGift:
          "You quickly notice connections, nuances, and different ways of explaining an idea.",

        hiddenPotential:
          "You can become an effective communicator, educator, teacher, or content creator.",

        expression:
          "Your talent is expressed through writing, communication, teaching, languages, commerce, or networks.",

        underusedStrength:
          "Your ability to make complex things accessible can become a genuine expertise.",

        development:
          "Your talent grows when you choose certain subjects to explore deeply instead of constantly multiplying directions.",

        contribution:
          "You bring understanding, movement, curiosity, and circulation of knowledge.",

        key:
          "Transform curiosity into truly mastered knowledge.",
      },

      Cancer: {
        title:
          "The talent to protect, nurture, and create a sense of belonging",

        introduction:
          "Jupiter in Cancer amplifies your sensitivity, intuition, and ability to understand emotional needs. You have a natural potential to create a safe and human environment.",

        naturalGift:
          "You know how to perceive what a person or group needs in order to feel welcomed and supported.",

        hiddenPotential:
          "You can become a reference in areas connected with support, teaching, family, or hospitality.",

        expression:
          "Your talent is expressed when you care, bring people together, teach, or protect what has emotional value.",

        underusedStrength:
          "Your memory, intuition, and sense of connection can become powerful professional or creative tools.",

        development:
          "Your talent grows when you help without making yourself responsible for everything.",

        contribution:
          "You bring warmth, security, listening, and human depth.",

        key:
          "Care without forgetting yourself.",
      },

      Leo: {
        title:
          "The talent to create, inspire, and build confidence",

        introduction:
          "Jupiter in Leo amplifies your creativity, generosity, and ability to transmit enthusiasm. Your potential is revealed when you fully embrace your personal expression.",

        naturalGift:
          "You naturally know how to attract attention, encourage others, and give value to an idea or person.",

        hiddenPotential:
          "You can become an inspiring creative or leadership figure capable of mobilizing others through warmth and vision.",

        expression:
          "Your talent is expressed in creation, performance, leadership, teaching, or projects where your personality becomes a strength.",

        underusedStrength:
          "Your ability to value others can be just as important as your own radiance.",

        development:
          "Your talent grows when you create in order to share rather than only to receive recognition.",

        contribution:
          "You bring joy, confidence, creativity, and expressive power.",

        key:
          "Shine generously without making approval a requirement.",
      },

      Virgo: {
        title:
          "The talent to improve, structure, and make things useful",

        introduction:
          "Jupiter in Virgo amplifies your observational skills, method, and ability to develop precise expertise. Your potential appears in the details others overlook.",

        naturalGift:
          "You know how to identify what can be corrected, simplified, or made more effective.",

        hiddenPotential:
          "You can become a true reference thanks to your precision, reliability, and ability to create methods.",

        expression:
          "Your talent is expressed through analysis, health, organization, service, management, or technical fields.",

        underusedStrength:
          "Your ability to transform a difficulty into a clear procedure can have great value.",

        development:
          "Your talent grows when you accept that effectiveness does not always require perfection.",

        contribution:
          "You bring method, discernment, usefulness, and concrete improvement.",

        key:
          "Seek progress rather than flawlessness.",
      },

      Libra: {
        title:
          "The talent to connect, balance, and create alliances",

        introduction:
          "Jupiter in Libra amplifies your sense of relationships, fairness, and cooperation. You have a natural potential for understanding several points of view and restoring balance.",

        naturalGift:
          "You know how to create an atmosphere favorable to exchange, negotiation, and collaboration.",

        hiddenPotential:
          "You can become an effective mediator, adviser, creator, or strategic partner.",

        expression:
          "Your talent is expressed through relationships, law, aesthetics, diplomacy, partnerships, and consulting.",

        underusedStrength:
          "Your ability to perceive what is fair for several people can become a rare skill.",

        development:
          "Your talent grows when you develop a clear personal position before seeking agreement.",

        contribution:
          "You bring harmony, justice, elegance, and a sense of cooperation.",

        key:
          "Create balance without erasing yourself.",
      },

      Scorpio: {
        title:
          "The talent to understand, transform, and regenerate",

        introduction:
          "Jupiter in Scorpio amplifies your depth, intuition, and ability to perceive hidden mechanisms. You have a natural potential for moving through complex situations and extracting powerful understanding from them.",

        naturalGift:
          "You know how to read between the lines, understand motivations, and detect the real issues.",

        hiddenPotential:
          "You can become an excellent strategist, researcher, therapist, analyst, or transformation guide.",

        expression:
          "Your talent is expressed in areas requiring depth, discretion, psychology, investigation, or crisis management.",

        underusedStrength:
          "Your ability to remain present in intense situations can reassure and guide others.",

        development:
          "Your talent grows when you use your lucidity to transform rather than control.",

        contribution:
          "You bring truth, emotional courage, strategy, and the ability to regenerate.",

        key:
          "Make your intensity a tool for conscious transformation.",
      },

      Sagittarius: {
        title:
          "The talent to expand, teach, and transmit a vision",

        introduction:
          "Jupiter in Sagittarius amplifies your need to understand the broader meaning of experiences. You have a natural potential to inspire, teach, and open new perspectives.",

        naturalGift:
          "You know how to restore hope and place a situation within a broader context.",

        hiddenPotential:
          "You can become a teacher, guide, author, or explorer capable of transmitting a powerful vision.",

        expression:
          "Your talent is expressed through teaching, travel, languages, philosophy, law, or inspiring communication.",

        underusedStrength:
          "Your ability to transmit conviction and mobilize people around a vision can be considerable.",

        development:
          "Your talent grows when your convictions are based on deep experience.",

        contribution:
          "You bring meaning, expansion, confidence, and openness.",

        key:
          "Transform your vision into lived and shareable knowledge.",
      },

      Capricorn: {
        title:
          "The talent to structure, lead, and build for the long term",

        introduction:
          "Jupiter in Capricorn amplifies your ability to plan, organize, and take on significant responsibility. You have a natural potential to build something lasting.",

        naturalGift:
          "You know how to transform an ambitious goal into realistic and progressive steps.",

        hiddenPotential:
          "You can become a reference person, leader, or expert known for solidity.",

        expression:
          "Your talent is expressed through management, entrepreneurship, strategy, administration, and long-term projects.",

        underusedStrength:
          "Your strategic patience can help you achieve goals that others abandon too soon.",

        development:
          "Your talent grows when you combine ambition, flexibility, and respect for your limits.",

        contribution:
          "You bring structure, maturity, endurance, and responsibility.",

        key:
          "Build ambitiously without turning every step into a test.",
      },

      Aquarius: {
        title:
          "The talent to innovate, connect, and imagine differently",

        introduction:
          "Jupiter in Aquarius amplifies your originality, intellectual independence, and ability to understand collective movements. You have a natural potential to propose new solutions.",

        naturalGift:
          "You know how to see future possibilities and question models that have become too limiting.",

        hiddenPotential:
          "You can become an innovator, network builder, or person capable of bringing people together around a new idea.",

        expression:
          "Your talent is expressed through technology, groups, collective projects, innovation, and social causes.",

        underusedStrength:
          "Your ability to think differently can solve problems that traditional methods cannot overcome.",

        development:
          "Your talent grows when your ideas take concrete and accessible form.",

        contribution:
          "You bring innovation, freedom of thought, vision, and openness.",

        key:
          "Connect your difference with a real need.",
      },

      Pisces: {
        title:
          "The talent to inspire, feel, and create through intuition",

        introduction:
          "Jupiter in Pisces amplifies your imagination, compassion, and sensitivity to the invisible dimensions of experience. You have a natural potential to create meaning from feeling.",

        naturalGift:
          "You know how to perceive emotions, symbols, and atmospheres with great subtlety.",

        hiddenPotential:
          "You can become a creator, guide, artist, or deeply inspiring presence.",

        expression:
          "Your talent is expressed through art, intuition, healing, spirituality, music, or humanitarian projects.",

        underusedStrength:
          "Your sensitivity can become a genuine instrument of understanding when protected by clear boundaries.",

        development:
          "Your talent grows when you give concrete form to your intuitions.",

        contribution:
          "You bring compassion, imagination, inspiration, and emotional depth.",

        key:
          "Transform intuition into creation, presence, or action.",
      },
    },

    mercuryTalents: {
      Aries:
        "Mercury in Aries gives you a lively, direct mind capable of deciding quickly.",

      Taurus:
        "Mercury in Taurus gives you concrete, methodical thinking and a strong capacity to retain information over time.",

      Gemini:
        "Mercury in Gemini strengthens your curiosity, mental flexibility, and ease of communication.",

      Cancer:
        "Mercury in Cancer gives you intuitive intelligence that is sensitive to emotions, memories, and atmospheres.",

      Leo:
        "Mercury in Leo favors expressive, creative, and persuasive communication.",

      Virgo:
        "Mercury in Virgo strengthens analysis, precision, and the ability to organize details.",

      Libra:
        "Mercury in Libra allows you to understand several perspectives and communicate diplomatically.",

      Scorpio:
        "Mercury in Scorpio gives you deep, strategic thinking that is attentive to what remains unspoken.",

      Sagittarius:
        "Mercury in Sagittarius favors broad vision, teaching, and the transmission of ideas.",

      Capricorn:
        "Mercury in Capricorn strengthens logic, structure, and planning ability.",

      Aquarius:
        "Mercury in Aquarius develops original, independent thinking oriented toward innovation.",

      Pisces:
        "Mercury in Pisces favors imagination, intuition, and symbolic understanding of situations.",
    },

    uranusTalents: {
      Aries:
        "Uranus in Aries strengthens your ability to act differently and initiate rapid change.",

      Taurus:
        "Uranus in Taurus allows you to innovate in material, financial, or creative areas.",

      Gemini:
        "Uranus in Gemini develops a quick, inventive intelligence capable of connecting unexpected ideas.",

      Cancer:
        "Uranus in Cancer renews your way of creating security, family, and belonging.",

      Leo:
        "Uranus in Leo strengthens your creative originality and your need for personal expression.",

      Virgo:
        "Uranus in Virgo allows you to invent new methods and improve existing systems.",

      Libra:
        "Uranus in Libra renews your way of thinking about relationships, alliances, and cooperation.",

      Scorpio:
        "Uranus in Scorpio develops a powerful ability to transform deep structures and complex situations.",

      Sagittarius:
        "Uranus in Sagittarius amplifies your freedom of thought and your ability to explore new visions.",

      Capricorn:
        "Uranus in Capricorn allows you to modernize structures and build differently.",

      Aquarius:
        "Uranus in Aquarius strongly amplifies innovation, future vision, and intellectual independence.",

      Pisces:
        "Uranus in Pisces develops original intuition and creativity sensitive to invisible dimensions.",
    },

    midheavenTalents: {
      Aries:
        "Your Midheaven in Aries favors autonomous roles, new projects, and environments where you can decide quickly.",

      Taurus:
        "Your Midheaven in Taurus favors stable, practical, creative activities or work connected with resources.",

      Gemini:
        "Your Midheaven in Gemini favors communication, writing, teaching, commerce, and varied activities.",

      Cancer:
        "Your Midheaven in Cancer favors areas connected with support, care, hospitality, family, or real estate.",

      Leo:
        "Your Midheaven in Leo favors creation, leadership, visibility, and roles where your personality becomes a strength.",

      Virgo:
        "Your Midheaven in Virgo favors analysis, health, service, management, and professions requiring precision.",

      Libra:
        "Your Midheaven in Libra favors consulting, partnerships, law, aesthetics, and mediation.",

      Scorpio:
        "Your Midheaven in Scorpio favors psychology, research, strategy, finance, and deep transformation.",

      Sagittarius:
        "Your Midheaven in Sagittarius favors teaching, travel, publishing, law, and the transmission of a vision.",

      Capricorn:
        "Your Midheaven in Capricorn favors management, entrepreneurship, administration, and major responsibilities.",

      Aquarius:
        "Your Midheaven in Aquarius favors innovation, technology, networks, and collective projects.",

      Pisces:
        "Your Midheaven in Pisces favors art, support, intuition, creation, and humanitarian activities.",
    },
  },

  es: {
    analysis:
      "Análisis Firma",

    title:
      "Tus talentos ocultos",

    subtitle:
      "Tus competencias naturales, tus recursos aún poco utilizados y las fuerzas que pueden ocupar un lugar mayor en tu vida.",

    mainPotential:
      "Tu potencial principal",

    naturalGiftLabel:
      "Don natural",

    naturalGiftTitle:
      "Lo que haces instintivamente bien",

    hiddenPotentialLabel:
      "Potencial oculto",

    hiddenPotentialTitle:
      "Lo que todavía puede desarrollarse más",

    naturalExpression:
      "Tu manera natural de expresar este talento",

    quote:
      "«Un talento oculto no siempre es una capacidad desconocida. Puede ser una cualidad que utilizas desde hace mucho tiempo sin reconocer su verdadero valor.»",

    complementaryResources:
      "Tus recursos complementarios",

    intelligenceExpansion:
      "Inteligencia, expansión, originalidad y realización",

    complementaryIntro:
      "Júpiter muestra los ámbitos donde tu confianza puede ampliarse. Mercurio describe tu inteligencia y tu manera de aprender. Urano revela tu originalidad, mientras que el Medio Cielo indica las cualidades que pueden hacerse visibles en tu recorrido profesional.",

    jupiter:
      "Júpiter",

    mercury:
      "Mercurio",

    uranus:
      "Urano",

    midheaven:
      "Medio Cielo",

    jupiterRole:
      "Tu capacidad de expansión, confianza y crecimiento.",

    mercuryRole:
      "Tu inteligencia, tu comunicación y tu método de aprendizaje.",

    uranusRole:
      "Tu originalidad y tu capacidad de innovar.",

    midheavenRole:
      "Las cualidades que pueden ocupar un lugar visible en tu vocación.",

    naturalIntelligence:
      "Tu inteligencia natural",

    innovationStrength:
      "Tu fuerza de innovación",

    visiblePotential:
      "Tu potencial visible",

    developPotential:
      "Desplegar tu potencial",

    giveMoreSpace:
      "Dar más espacio a aquello que ya existe en ti",

    developmentIntro:
      "Un potencial se convierte en un talento plenamente disponible cuando es reconocido, practicado e integrado en situaciones concretas. No necesitas cambiarlo todo. A menudo basta con dar más espacio a una cualidad que ya está presente.",

    underusedStrengthLabel:
      "Fuerza poco utilizada",

    recognizeMore:
      "Lo que podrías reconocer más",

    developmentLabel:
      "Desarrollo",

    growPotential:
      "Cómo hacer crecer este potencial",

    threeWays:
      "Tres maneras de desarrollar tus talentos",

    step1:
      "Observa las situaciones en las que otras personas vienen naturalmente a buscar tu ayuda, tu opinión o tu presencia.",

    step2:
      "Identifica las tareas que te parecen sencillas, pero que representan una dificultad real para otras personas.",

    step3:
      "Elige un proyecto concreto en el que puedas practicar esta capacidad de manera regular y visible.",

    signatureKey:
      "Tu clave Firma",

    talentContribution:
      "Un talento se convierte en una contribución",

    closingText:
      "Cuanto más reconoces el valor de tus capacidades naturales, más puedes utilizarlas conscientemente en lugar de considerarlas ordinarias.",

    mercuryFallback:
      "Mercurio revela tu manera de aprender, comprender, comunicar y transformar tus ideas en competencias.",

    uranusFallback:
      "Urano revela tu capacidad para innovar, pensar de manera diferente y aportar una solución inesperada.",

    midheavenFallback:
      "Tu Medio Cielo muestra los talentos que pueden ocupar un lugar visible en tu recorrido profesional.",

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

    profiles: {
      Aries: {
        title:
          "El talento de iniciar, movilizar y crear un nuevo impulso",
        introduction:
          "Júpiter en Aries amplifica tu capacidad de actuar con valor y provocar movimiento cuando los demás dudan. Tu potencial se revela cuando confías en tu instinto de iniciativa.",
        naturalGift:
          "Sabes detectar rápidamente aquello que debe comenzar, defenderse o relanzarse.",
        hiddenPotential:
          "Puedes convertirte en una persona capaz de abrir un nuevo camino y animar a los demás a actuar.",
        expression:
          "Tu talento se expresa en proyectos que exigen audacia, rapidez, autonomía y liderazgo.",
        underusedStrength:
          "Tu capacidad de decidir sin esperar validación exterior puede ser mayor de lo que imaginas.",
        development:
          "Tu talento crece cuando aprendes a sostener tu impulso con estrategia y continuidad.",
        contribution:
          "Aportas valor, impulso y una energía capaz de sacar una situación de la inmovilidad.",
        key:
          "Comenzar con audacia y permanecer el tiempo suficiente para construir.",
      },

      Taurus: {
        title:
          "El talento de construir, estabilizar y hacer crecer",
        introduction:
          "Júpiter en Tauro desarrolla una inteligencia concreta, paciente y orientada al crecimiento sostenible. Posees un potencial natural para transformar un recurso sencillo en algo sólido.",
        naturalGift:
          "Sabes reconocer aquello que puede durar, desarrollarse o convertirse en algo realmente útil.",
        hiddenPotential:
          "Puedes crear una seguridad, una obra o una actividad que crece progresivamente con el tiempo.",
        expression:
          "Tu talento se expresa en la gestión, la creación, los recursos, la materia, la belleza y los proyectos a largo plazo.",
        underusedStrength:
          "Tu paciencia y constancia pueden producir más que acciones rápidas y dispersas.",
        development:
          "Tu talento crece cuando aceptas adaptar tus métodos sin abandonar tus valores.",
        contribution:
          "Aportas estabilidad, realismo, fiabilidad y capacidad de concretar.",
        key:
          "Confiar en el poder de los progresos regulares.",
      },

      Gemini: {
        title:
          "El talento de comprender, relacionar y transmitir ideas",
        introduction:
          "Júpiter en Géminis amplifica tu curiosidad, movilidad mental y capacidad de crear vínculos entre varios temas. Posees un potencial natural para hacer que una información sea más clara y viva.",
        naturalGift:
          "Sabes detectar rápidamente conexiones, matices y distintas maneras de explicar una idea.",
        hiddenPotential:
          "Puedes convertirte en un comunicador, divulgador, profesor o creador de contenido especialmente eficaz.",
        expression:
          "Tu talento se expresa mediante la escritura, la comunicación, la enseñanza, los idiomas, el comercio o las redes.",
        underusedStrength:
          "Tu capacidad de hacer accesible aquello que parece complejo puede convertirse en una verdadera especialización.",
        development:
          "Tu talento crece cuando eliges ciertos temas para profundizarlos en lugar de multiplicar constantemente las direcciones.",
        contribution:
          "Aportas comprensión, movimiento, curiosidad y circulación de conocimientos.",
        key:
          "Transformar la curiosidad en un conocimiento verdaderamente dominado.",
      },

      Cancer: {
        title:
          "El talento de proteger, nutrir y crear un sentimiento de pertenencia",
        introduction:
          "Júpiter en Cáncer amplifica tu sensibilidad, intuición y capacidad de comprender las necesidades emocionales. Posees un potencial natural para crear un espacio seguro y humano.",
        naturalGift:
          "Sabes percibir lo que una persona o un grupo necesita para sentirse acogido y apoyado.",
        hiddenPotential:
          "Puedes convertirte en una referencia en ámbitos relacionados con el acompañamiento, la transmisión, la familia o la hospitalidad.",
        expression:
          "Tu talento se expresa cuando cuidas, reúnes, enseñas o proteges aquello que posee valor emocional.",
        underusedStrength:
          "Tu memoria, intuición y sentido del vínculo pueden convertirse en poderosas herramientas profesionales o creativas.",
        development:
          "Tu talento crece cuando ayudas sin hacerte responsable de todo.",
        contribution:
          "Aportas calidez, seguridad, escucha y profundidad humana.",
        key:
          "Cuidar sin olvidarte de ti mismo.",
      },

      Leo: {
        title:
          "El talento de crear, inspirar y dar confianza",
        introduction:
          "Júpiter en Leo amplifica tu creatividad, generosidad y capacidad para transmitir entusiasmo. Tu potencial se revela cuando asumes plenamente tu expresión personal.",
        naturalGift:
          "Sabes naturalmente atraer la atención, animar y dar valor a una idea o una persona.",
        hiddenPotential:
          "Puedes convertirte en una figura inspiradora, creativa o dirigente capaz de movilizar mediante calidez y visión.",
        expression:
          "Tu talento se expresa en la creación, la escena, la dirección, la enseñanza o los proyectos donde tu personalidad se convierte en una fuerza.",
        underusedStrength:
          "Tu capacidad para valorar a los demás puede ser tan importante como tu propio brillo.",
        development:
          "Tu talento crece cuando creas para compartir y no únicamente para recibir reconocimiento.",
        contribution:
          "Aportas alegría, confianza, creatividad y poder de expresión.",
        key:
          "Brillar con generosidad sin convertir la aprobación en una condición.",
      },

      Virgo: {
        title:
          "El talento de mejorar, estructurar y hacer útiles las cosas",
        introduction:
          "Júpiter en Virgo amplifica tu sentido de observación, tu método y tu capacidad para desarrollar una competencia precisa. Tu potencial aparece en los detalles que los demás descuidan.",
        naturalGift:
          "Sabes detectar lo que puede corregirse, simplificarse o hacerse más eficaz.",
        hiddenPotential:
          "Puedes convertirte en una verdadera referencia gracias a tu precisión, fiabilidad y capacidad para crear métodos.",
        expression:
          "Tu talento se expresa en el análisis, la salud, la organización, el servicio, la gestión o los oficios técnicos.",
        underusedStrength:
          "Tu capacidad de transformar una dificultad en un procedimiento claro puede tener un gran valor.",
        development:
          "Tu talento crece cuando aceptas que la eficacia no siempre exige perfección.",
        contribution:
          "Aportas método, discernimiento, utilidad y mejora concreta.",
        key:
          "Buscar el progreso en lugar de lo impecable.",
      },

      Libra: {
        title:
          "El talento de acercar, equilibrar y crear alianzas",
        introduction:
          "Júpiter en Libra amplifica tu sentido de la relación, la equidad y la cooperación. Posees un potencial natural para comprender varios puntos de vista y restaurar un equilibrio.",
        naturalGift:
          "Sabes crear un clima favorable al intercambio, la negociación y la colaboración.",
        hiddenPotential:
          "Puedes convertirte en un mediador, consejero, creador o socio estratégico muy eficaz.",
        expression:
          "Tu talento se expresa en las relaciones, el derecho, la estética, la diplomacia, las asociaciones y el asesoramiento.",
        underusedStrength:
          "Tu capacidad de percibir lo que es justo para varias personas puede convertirse en una competencia poco común.",
        development:
          "Tu talento crece cuando desarrollas una posición personal clara antes de buscar el acuerdo.",
        contribution:
          "Aportas armonía, justicia, elegancia y sentido de cooperación.",
        key:
          "Crear equilibrio sin borrarte.",
      },

      Scorpio: {
        title:
          "El talento de comprender, transformar y regenerar",
        introduction:
          "Júpiter en Escorpio amplifica tu profundidad, intuición y capacidad de percibir mecanismos ocultos. Posees un potencial natural para atravesar situaciones complejas y extraer de ellas una comprensión poderosa.",
        naturalGift:
          "Sabes leer entre líneas, comprender las motivaciones y detectar los verdaderos desafíos.",
        hiddenPotential:
          "Puedes convertirte en un excelente estratega, investigador, terapeuta, analista o acompañante de transformación.",
        expression:
          "Tu talento se expresa en ámbitos que exigen profundidad, discreción, psicología, investigación o gestión de crisis.",
        underusedStrength:
          "Tu capacidad para permanecer presente en situaciones intensas puede tranquilizar y guiar a los demás.",
        development:
          "Tu talento crece cuando utilizas tu lucidez para transformar en lugar de controlar.",
        contribution:
          "Aportas verdad, valor emocional, estrategia y capacidad de renacimiento.",
        key:
          "Convertir tu intensidad en una herramienta de transformación consciente.",
      },

      Sagittarius: {
        title:
          "El talento de ampliar, enseñar y transmitir una visión",
        introduction:
          "Júpiter en Sagitario amplifica tu necesidad de comprender el sentido global de las experiencias. Posees un potencial natural para inspirar, enseñar y abrir nuevas perspectivas.",
        naturalGift:
          "Sabes devolver esperanza y colocar una situación dentro de un contexto más amplio.",
        hiddenPotential:
          "Puedes convertirte en profesor, guía, autor o explorador capaz de transmitir una visión fuerte.",
        expression:
          "Tu talento se expresa en la enseñanza, los viajes, los idiomas, la filosofía, el derecho o la comunicación inspiradora.",
        underusedStrength:
          "Tu capacidad de transmitir una convicción y movilizar alrededor de una visión puede ser considerable.",
        development:
          "Tu talento crece cuando tus convicciones se apoyan en una experiencia profunda.",
        contribution:
          "Aportas sentido, expansión, confianza y apertura.",
        key:
          "Transformar tu visión en un conocimiento vivido y transmisible.",
      },

      Capricorn: {
        title:
          "El talento de estructurar, dirigir y construir a largo plazo",
        introduction:
          "Júpiter en Capricornio amplifica tu capacidad de planificar, organizar y asumir responsabilidades importantes. Posees un potencial natural para construir algo duradero.",
        naturalGift:
          "Sabes transformar un objetivo ambicioso en etapas realistas y progresivas.",
        hiddenPotential:
          "Puedes convertirte en una persona de referencia, dirigente o experto reconocido por su solidez.",
        expression:
          "Tu talento se expresa en la gestión, el emprendimiento, la estrategia, la administración y los proyectos de larga duración.",
        underusedStrength:
          "Tu paciencia estratégica puede permitirte alcanzar objetivos que otros abandonan demasiado pronto.",
        development:
          "Tu talento crece cuando combinas ambición, flexibilidad y respeto por tus límites.",
        contribution:
          "Aportas estructura, madurez, resistencia y sentido de responsabilidad.",
        key:
          "Construir con ambición sin transformar cada etapa en una prueba.",
      },

      Aquarius: {
        title:
          "El talento de innovar, conectar e imaginar de otra manera",
        introduction:
          "Júpiter en Acuario amplifica tu originalidad, independencia intelectual y capacidad de comprender los movimientos colectivos. Posees un potencial natural para proponer nuevas soluciones.",
        naturalGift:
          "Sabes ver las posibilidades futuras y cuestionar los modelos que se han vuelto demasiado limitantes.",
        hiddenPotential:
          "Puedes convertirte en innovador, creador de redes o persona capaz de reunir a otros alrededor de una nueva idea.",
        expression:
          "Tu talento se expresa en la tecnología, los grupos, los proyectos colectivos, la innovación y las causas sociales.",
        underusedStrength:
          "Tu capacidad de pensar de manera diferente puede resolver problemas que los métodos tradicionales no consiguen superar.",
        development:
          "Tu talento crece cuando tus ideas adoptan una forma concreta y accesible.",
        contribution:
          "Aportas innovación, libertad de pensamiento, visión y apertura.",
        key:
          "Relacionar tu diferencia con una necesidad real.",
      },

      Pisces: {
        title:
          "El talento de inspirar, sentir y crear desde la intuición",
        introduction:
          "Júpiter en Piscis amplifica tu imaginación, compasión y sensibilidad a las dimensiones invisibles de la experiencia. Posees un potencial natural para crear sentido a partir de lo que sientes.",
        naturalGift:
          "Sabes percibir emociones, símbolos y ambientes con gran sutileza.",
        hiddenPotential:
          "Puedes convertirte en creador, acompañante, artista o presencia profundamente inspiradora.",
        expression:
          "Tu talento se expresa en el arte, la intuición, el cuidado, la espiritualidad, la música o los proyectos humanitarios.",
        underusedStrength:
          "Tu sensibilidad puede convertirse en una verdadera herramienta de comprensión cuando está protegida por límites claros.",
        development:
          "Tu talento crece cuando das una forma concreta a tus intuiciones.",
        contribution:
          "Aportas compasión, imaginación, inspiración y profundidad sensible.",
        key:
          "Transformar la intuición en creación, presencia o acción.",
      },
    },

    mercuryTalents: {
      Aries:
        "Mercurio en Aries te da un pensamiento vivo, directo y capaz de decidir rápidamente.",
      Taurus:
        "Mercurio en Tauro te da un pensamiento concreto, metódico y capaz de retener la información de manera duradera.",
      Gemini:
        "Mercurio en Géminis refuerza tu curiosidad, tu flexibilidad mental y tu facilidad para comunicar.",
      Cancer:
        "Mercurio en Cáncer te da una inteligencia intuitiva, sensible a las emociones, los recuerdos y los ambientes.",
      Leo:
        "Mercurio en Leo favorece una comunicación expresiva, creativa y capaz de convencer.",
      Virgo:
        "Mercurio en Virgo refuerza el análisis, la precisión y la capacidad de organizar los detalles.",
      Libra:
        "Mercurio en Libra te permite comprender varias perspectivas y comunicar con diplomacia.",
      Scorpio:
        "Mercurio en Escorpio te da un pensamiento profundo, estratégico y atento a lo no dicho.",
      Sagittarius:
        "Mercurio en Sagitario favorece la visión global, la enseñanza y la transmisión de ideas.",
      Capricorn:
        "Mercurio en Capricornio refuerza la lógica, la estructura y la capacidad de planificación.",
      Aquarius:
        "Mercurio en Acuario desarrolla un pensamiento original, independiente y orientado hacia la innovación.",
      Pisces:
        "Mercurio en Piscis favorece la imaginación, la intuición y una comprensión simbólica de las situaciones.",
    },

    uranusTalents: {
      Aries:
        "Urano en Aries refuerza tu capacidad para actuar de otra manera e iniciar cambios rápidos.",
      Taurus:
        "Urano en Tauro te permite innovar en los ámbitos materiales, financieros o creativos.",
      Gemini:
        "Urano en Géminis desarrolla una inteligencia rápida, inventiva y capaz de relacionar ideas inesperadas.",
      Cancer:
        "Urano en Cáncer renueva tu manera de crear seguridad, familia y pertenencia.",
      Leo:
        "Urano en Leo refuerza tu originalidad creativa y tu necesidad de expresión personal.",
      Virgo:
        "Urano en Virgo te permite inventar nuevos métodos y mejorar los sistemas existentes.",
      Libra:
        "Urano en Libra renueva tu manera de pensar las relaciones, las alianzas y la cooperación.",
      Scorpio:
        "Urano en Escorpio desarrolla una gran capacidad para transformar estructuras profundas y situaciones complejas.",
      Sagittarius:
        "Urano en Sagitario amplifica tu libertad de pensamiento y tu capacidad de explorar nuevas visiones.",
      Capricorn:
        "Urano en Capricornio te permite modernizar estructuras y construir de otra manera.",
      Aquarius:
        "Urano en Acuario amplifica fuertemente tu innovación, tu visión de futuro y tu independencia intelectual.",
      Pisces:
        "Urano en Piscis desarrolla una intuición original y una creatividad sensible a las dimensiones invisibles.",
    },

    midheavenTalents: {
      Aries:
        "Tu Medio Cielo en Aries favorece los roles autónomos, los nuevos proyectos y los entornos donde puedes decidir rápidamente.",
      Taurus:
        "Tu Medio Cielo en Tauro favorece las actividades estables, concretas, creativas o relacionadas con los recursos.",
      Gemini:
        "Tu Medio Cielo en Géminis favorece la comunicación, la escritura, la transmisión, el comercio y las actividades múltiples.",
      Cancer:
        "Tu Medio Cielo en Cáncer favorece los ámbitos relacionados con el acompañamiento, el cuidado, la acogida, la familia o los bienes raíces.",
      Leo:
        "Tu Medio Cielo en Leo favorece la creación, la dirección, la visibilidad y los roles donde tu personalidad se convierte en una fuerza.",
      Virgo:
        "Tu Medio Cielo en Virgo favorece el análisis, la salud, el servicio, la gestión y los oficios que exigen precisión.",
      Libra:
        "Tu Medio Cielo en Libra favorece el asesoramiento, las asociaciones, el derecho, la estética y la mediación.",
      Scorpio:
        "Tu Medio Cielo en Escorpio favorece la psicología, la investigación, la estrategia, las finanzas y las transformaciones profundas.",
      Sagittarius:
        "Tu Medio Cielo en Sagitario favorece la enseñanza, los viajes, la edición, el derecho y la transmisión de una visión.",
      Capricorn:
        "Tu Medio Cielo en Capricornio favorece la gestión, el emprendimiento, la administración y las responsabilidades importantes.",
      Aquarius:
        "Tu Medio Cielo en Acuario favorece la innovación, la tecnología, las redes y los proyectos colectivos.",
      Pisces:
        "Tu Medio Cielo en Piscis favorece el arte, el acompañamiento, la intuición, la creación y las actividades humanitarias.",
    },
  },

  de: {
    analysis:
      "Signatur-Analyse",

    title:
      "Ihre verborgenen Talente",

    subtitle:
      "Ihre natürlichen Fähigkeiten, ungenutzten Ressourcen und Stärken, die mehr Raum in Ihrem Leben einnehmen können.",

    mainPotential:
      "Ihr Hauptpotenzial",

    naturalGiftLabel:
      "Natürliches Talent",

    naturalGiftTitle:
      "Was Sie instinktiv gut können",

    hiddenPotentialLabel:
      "Verborgenes Potenzial",

    hiddenPotentialTitle:
      "Was sich noch weiter entfalten kann",

    naturalExpression:
      "Ihre natürliche Art, dieses Talent auszudrücken",

    quote:
      "„Ein verborgenes Talent ist nicht immer eine unbekannte Fähigkeit. Es kann eine Qualität sein, die Sie seit Langem nutzen, ohne ihren wahren Wert zu erkennen.“",

    complementaryResources:
      "Ihre ergänzenden Ressourcen",

    intelligenceExpansion:
      "Intelligenz, Expansion, Originalität und Verwirklichung",

    complementaryIntro:
      "Jupiter zeigt die Bereiche, in denen Ihr Vertrauen wachsen kann. Merkur beschreibt Ihre Intelligenz und Ihre Art zu lernen. Uranus zeigt Ihre Originalität, während das Medium Coeli die Qualitäten beschreibt, die in Ihrem beruflichen Weg sichtbar werden können.",

    jupiter:
      "Jupiter",

    mercury:
      "Merkur",

    uranus:
      "Uranus",

    midheaven:
      "Medium Coeli",

    jupiterRole:
      "Ihre Fähigkeit zu Expansion, Vertrauen und Wachstum.",

    mercuryRole:
      "Ihre Intelligenz, Kommunikation und Lernmethode.",

    uranusRole:
      "Ihre Originalität und Ihre Fähigkeit zu Innovation.",

    midheavenRole:
      "Die Qualitäten, die in Ihrer Berufung sichtbar werden können.",

    naturalIntelligence:
      "Ihre natürliche Intelligenz",

    innovationStrength:
      "Ihre Innovationskraft",

    visiblePotential:
      "Ihr sichtbares Potenzial",

    developPotential:
      "Ihr Potenzial entfalten",

    giveMoreSpace:
      "Dem mehr Raum geben, was bereits in Ihnen vorhanden ist",

    developmentIntro:
      "Ein Potenzial wird zu einem vollständig verfügbaren Talent, wenn es erkannt, geübt und in konkrete Situationen integriert wird. Sie müssen nicht alles verändern. Oft reicht es aus, einer bereits vorhandenen Qualität mehr Raum zu geben.",

    underusedStrengthLabel:
      "Zu wenig genutzte Stärke",

    recognizeMore:
      "Was Sie stärker anerkennen könnten",

    developmentLabel:
      "Entwicklung",

    growPotential:
      "Wie Sie dieses Potenzial entwickeln können",

    threeWays:
      "Drei Wege, Ihre Talente zu entwickeln",

    step1:
      "Beobachten Sie Situationen, in denen andere ganz selbstverständlich Ihre Hilfe, Ihre Meinung oder Ihre Präsenz suchen.",

    step2:
      "Erkennen Sie Aufgaben, die Ihnen einfach erscheinen, für andere Menschen jedoch eine echte Schwierigkeit darstellen.",

    step3:
      "Wählen Sie ein konkretes Projekt, in dem Sie diese Fähigkeit regelmäßig und sichtbar einsetzen können.",

    signatureKey:
      "Ihr Signatur-Schlüssel",

    talentContribution:
      "Ein Talent wird zu einem Beitrag",

    closingText:
      "Je mehr Sie den Wert Ihrer natürlichen Fähigkeiten anerkennen, desto bewusster können Sie sie einsetzen, statt sie für gewöhnlich zu halten.",

    mercuryFallback:
      "Merkur zeigt Ihre Art zu lernen, zu verstehen, zu kommunizieren und Ideen in Fähigkeiten umzuwandeln.",

    uranusFallback:
      "Uranus zeigt Ihre Fähigkeit, innovativ zu denken, anders zu handeln und unerwartete Lösungen zu finden.",

    midheavenFallback:
      "Ihr Medium Coeli zeigt die Talente, die in Ihrem beruflichen Weg sichtbar werden können.",

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

    profiles: {
      Aries: {
        title:
          "Das Talent, zu beginnen, zu mobilisieren und neuen Schwung zu erzeugen",
        introduction:
          "Jupiter im Widder verstärkt Ihre Fähigkeit, mutig zu handeln und Bewegung zu erzeugen, wenn andere zögern. Ihr Potenzial zeigt sich, wenn Sie Ihrem Initiativinstinkt vertrauen.",
        naturalGift:
          "Sie erkennen schnell, was begonnen, verteidigt oder neu angestoßen werden muss.",
        hiddenPotential:
          "Sie können zu einer Person werden, die neue Wege eröffnet und andere zum Handeln ermutigt.",
        expression:
          "Ihr Talent zeigt sich in Projekten, die Mut, Schnelligkeit, Autonomie und Führung verlangen.",
        underusedStrength:
          "Ihre Fähigkeit, ohne äußere Bestätigung zu entscheiden, kann größer sein, als Sie denken.",
        development:
          "Ihr Talent wächst, wenn Sie Ihren Impuls durch Strategie und Kontinuität unterstützen.",
        contribution:
          "Sie bringen Mut, Dynamik und Energie, die eine festgefahrene Situation wieder in Bewegung bringen kann.",
        key:
          "Mutig beginnen und lange genug bleiben, um etwas aufzubauen.",
      },

      Taurus: {
        title:
          "Das Talent, aufzubauen, zu stabilisieren und wachsen zu lassen",
        introduction:
          "Jupiter im Stier entwickelt praktische, geduldige Intelligenz mit Blick auf nachhaltiges Wachstum. Sie besitzen ein natürliches Potenzial, eine einfache Ressource in etwas Solides zu verwandeln.",
        naturalGift:
          "Sie erkennen, was Bestand haben, entwickelt oder wirklich nützlich werden kann.",
        hiddenPotential:
          "Sie können Sicherheit, ein Werk oder eine Tätigkeit schaffen, die mit der Zeit stetig wächst.",
        expression:
          "Ihr Talent zeigt sich in Management, Gestaltung, Ressourcen, materiellen Themen, Schönheit und langfristigen Projekten.",
        underusedStrength:
          "Ihre Geduld und Beständigkeit können mehr bewirken als schnelle und verstreute Handlungen.",
        development:
          "Ihr Talent wächst, wenn Sie Ihre Methoden anpassen, ohne Ihre Werte aufzugeben.",
        contribution:
          "Sie bringen Stabilität, Realismus, Zuverlässigkeit und konkrete Umsetzungskraft.",
        key:
          "Der Kraft regelmäßigen Fortschritts vertrauen.",
      },

      Gemini: {
        title:
          "Das Talent, Ideen zu verstehen, zu verbinden und weiterzugeben",
        introduction:
          "Jupiter in den Zwillingen verstärkt Ihre Neugier, geistige Beweglichkeit und Fähigkeit, verschiedene Themen miteinander zu verbinden. Sie besitzen ein natürliches Potenzial, Informationen klarer und lebendiger zu machen.",
        naturalGift:
          "Sie erkennen schnell Verbindungen, Nuancen und verschiedene Möglichkeiten, eine Idee zu erklären.",
        hiddenPotential:
          "Sie können ein besonders wirkungsvoller Vermittler, Lehrer oder Content-Ersteller werden.",
        expression:
          "Ihr Talent zeigt sich im Schreiben, in Kommunikation, Unterricht, Sprachen, Handel oder Netzwerken.",
        underusedStrength:
          "Ihre Fähigkeit, Komplexes verständlich zu machen, kann zu echter Expertise werden.",
        development:
          "Ihr Talent wächst, wenn Sie bestimmte Themen vertiefen, statt ständig neue Richtungen zu verfolgen.",
        contribution:
          "Sie bringen Verständnis, Bewegung, Neugier und Wissensaustausch.",
        key:
          "Neugier in wirklich beherrschtes Wissen verwandeln.",
      },

      Cancer: {
        title:
          "Das Talent, zu schützen, zu nähren und Zugehörigkeit zu schaffen",
        introduction:
          "Jupiter im Krebs verstärkt Ihre Sensibilität, Intuition und Fähigkeit, emotionale Bedürfnisse zu verstehen. Sie besitzen ein natürliches Potenzial, einen sicheren und menschlichen Raum zu schaffen.",
        naturalGift:
          "Sie erkennen, was eine Person oder Gruppe braucht, um sich willkommen und unterstützt zu fühlen.",
        hiddenPotential:
          "Sie können in Bereichen rund um Begleitung, Vermittlung, Familie oder Gastfreundschaft zu einer wichtigen Bezugsperson werden.",
        expression:
          "Ihr Talent zeigt sich, wenn Sie Fürsorge übernehmen, Menschen zusammenbringen, lehren oder emotional Wertvolles schützen.",
        underusedStrength:
          "Ihr Gedächtnis, Ihre Intuition und Ihr Gespür für Verbindung können starke berufliche oder kreative Werkzeuge werden.",
        development:
          "Ihr Talent wächst, wenn Sie helfen, ohne sich für alles verantwortlich zu machen.",
        contribution:
          "Sie bringen Wärme, Sicherheit, Zuhören und menschliche Tiefe.",
        key:
          "Für andere sorgen, ohne sich selbst zu vergessen.",
      },

      Leo: {
        title:
          "Das Talent, zu erschaffen, zu inspirieren und Vertrauen zu geben",
        introduction:
          "Jupiter im Löwen verstärkt Ihre Kreativität, Großzügigkeit und Fähigkeit, Begeisterung zu vermitteln. Ihr Potenzial zeigt sich, wenn Sie Ihren persönlichen Ausdruck vollständig annehmen.",
        naturalGift:
          "Sie können Aufmerksamkeit auf natürliche Weise gewinnen, ermutigen und einer Idee oder Person Wert verleihen.",
        hiddenPotential:
          "Sie können zu einer inspirierenden, kreativen oder führenden Persönlichkeit werden, die durch Wärme und Vision mobilisiert.",
        expression:
          "Ihr Talent zeigt sich in Kreativität, Bühne, Führung, Unterricht oder Projekten, in denen Ihre Persönlichkeit zur Stärke wird.",
        underusedStrength:
          "Ihre Fähigkeit, andere aufzuwerten, kann ebenso wichtig sein wie Ihre eigene Ausstrahlung.",
        development:
          "Ihr Talent wächst, wenn Sie erschaffen, um zu teilen, statt nur Anerkennung zu erhalten.",
        contribution:
          "Sie bringen Freude, Vertrauen, Kreativität und Ausdruckskraft.",
        key:
          "Großzügig strahlen, ohne Anerkennung zur Voraussetzung zu machen.",
      },

      Virgo: {
        title:
          "Das Talent, zu verbessern, zu strukturieren und Dinge nützlich zu machen",
        introduction:
          "Jupiter in der Jungfrau verstärkt Beobachtungsgabe, Methode und die Fähigkeit, präzise Fachkompetenz aufzubauen. Ihr Potenzial zeigt sich in Details, die andere übersehen.",
        naturalGift:
          "Sie erkennen, was korrigiert, vereinfacht oder effizienter gemacht werden kann.",
        hiddenPotential:
          "Sie können durch Präzision, Zuverlässigkeit und die Fähigkeit, Methoden zu entwickeln, zu einer echten Referenz werden.",
        expression:
          "Ihr Talent zeigt sich in Analyse, Gesundheit, Organisation, Dienstleistung, Management oder technischen Berufen.",
        underusedStrength:
          "Ihre Fähigkeit, Schwierigkeiten in klare Abläufe umzuwandeln, kann sehr wertvoll sein.",
        development:
          "Ihr Talent wächst, wenn Sie akzeptieren, dass Wirksamkeit nicht immer Perfektion verlangt.",
        contribution:
          "Sie bringen Methode, Urteilsvermögen, Nützlichkeit und konkrete Verbesserung.",
        key:
          "Fortschritt statt Fehlerlosigkeit anstreben.",
      },

      Libra: {
        title:
          "Das Talent, Menschen zu verbinden, auszugleichen und Allianzen zu schaffen",
        introduction:
          "Jupiter in der Waage verstärkt Ihr Gespür für Beziehungen, Fairness und Zusammenarbeit. Sie besitzen ein natürliches Potenzial, mehrere Perspektiven zu verstehen und Gleichgewicht wiederherzustellen.",
        naturalGift:
          "Sie können ein Klima schaffen, das Austausch, Verhandlung und Zusammenarbeit fördert.",
        hiddenPotential:
          "Sie können ein sehr wirkungsvoller Vermittler, Berater, Gestalter oder strategischer Partner werden.",
        expression:
          "Ihr Talent zeigt sich in Beziehungen, Recht, Ästhetik, Diplomatie, Partnerschaften und Beratung.",
        underusedStrength:
          "Ihre Fähigkeit zu erkennen, was für mehrere Menschen fair ist, kann zu einer seltenen Kompetenz werden.",
        development:
          "Ihr Talent wächst, wenn Sie zunächst eine klare eigene Position entwickeln und erst danach nach Einigung suchen.",
        contribution:
          "Sie bringen Harmonie, Gerechtigkeit, Eleganz und Kooperationsfähigkeit.",
        key:
          "Gleichgewicht schaffen, ohne sich selbst zurückzunehmen.",
      },

      Scorpio: {
        title:
          "Das Talent, zu verstehen, zu transformieren und zu regenerieren",
        introduction:
          "Jupiter im Skorpion verstärkt Ihre Tiefe, Intuition und Fähigkeit, verborgene Mechanismen zu erkennen. Sie besitzen ein natürliches Potenzial, komplexe Situationen zu durchdringen und daraus kraftvolle Erkenntnisse zu gewinnen.",
        naturalGift:
          "Sie können zwischen den Zeilen lesen, Motivationen verstehen und die wirklichen Themen erkennen.",
        hiddenPotential:
          "Sie können ein hervorragender Stratege, Forscher, Therapeut, Analyst oder Begleiter von Veränderungsprozessen werden.",
        expression:
          "Ihr Talent zeigt sich in Bereichen, die Tiefe, Diskretion, Psychologie, Untersuchung oder Krisenmanagement verlangen.",
        underusedStrength:
          "Ihre Fähigkeit, in intensiven Situationen präsent zu bleiben, kann anderen Sicherheit geben und Orientierung bieten.",
        development:
          "Ihr Talent wächst, wenn Sie Ihre Klarheit für Transformation statt für Kontrolle einsetzen.",
        contribution:
          "Sie bringen Wahrheit, emotionalen Mut, Strategie und Regenerationskraft.",
        key:
          "Ihre Intensität zu einem Werkzeug bewusster Transformation machen.",
      },

      Sagittarius: {
        title:
          "Das Talent, Horizonte zu erweitern, zu lehren und eine Vision zu vermitteln",
        introduction:
          "Jupiter im Schützen verstärkt Ihr Bedürfnis, den übergeordneten Sinn von Erfahrungen zu verstehen. Sie besitzen ein natürliches Potenzial, zu inspirieren, zu lehren und neue Perspektiven zu eröffnen.",
        naturalGift:
          "Sie können Hoffnung zurückgeben und eine Situation in einen größeren Zusammenhang stellen.",
        hiddenPotential:
          "Sie können Lehrer, Mentor, Autor oder Entdecker werden und eine kraftvolle Vision vermitteln.",
        expression:
          "Ihr Talent zeigt sich in Unterricht, Reisen, Sprachen, Philosophie, Recht oder inspirierender Kommunikation.",
        underusedStrength:
          "Ihre Fähigkeit, Überzeugung zu vermitteln und Menschen um eine Vision zu sammeln, kann beträchtlich sein.",
        development:
          "Ihr Talent wächst, wenn Ihre Überzeugungen auf tiefer Erfahrung beruhen.",
        contribution:
          "Sie bringen Sinn, Expansion, Vertrauen und Offenheit.",
        key:
          "Ihre Vision in gelebtes und vermittelbares Wissen verwandeln.",
      },

      Capricorn: {
        title:
          "Das Talent, zu strukturieren, zu führen und langfristig aufzubauen",
        introduction:
          "Jupiter im Steinbock verstärkt Ihre Fähigkeit zu planen, zu organisieren und wichtige Verantwortung zu übernehmen. Sie besitzen ein natürliches Potenzial, etwas Dauerhaftes aufzubauen.",
        naturalGift:
          "Sie können ein ehrgeiziges Ziel in realistische und schrittweise Etappen übersetzen.",
        hiddenPotential:
          "Sie können zu einer anerkannten Bezugsperson, Führungskraft oder Fachperson werden.",
        expression:
          "Ihr Talent zeigt sich in Management, Unternehmertum, Strategie, Verwaltung und langfristigen Projekten.",
        underusedStrength:
          "Ihre strategische Geduld kann Ihnen ermöglichen, Ziele zu erreichen, die andere zu früh aufgeben.",
        development:
          "Ihr Talent wächst, wenn Sie Ehrgeiz, Flexibilität und Respekt für Ihre Grenzen verbinden.",
        contribution:
          "Sie bringen Struktur, Reife, Ausdauer und Verantwortungsbewusstsein.",
        key:
          "Mit Ehrgeiz aufbauen, ohne jede Etappe zur Prüfung zu machen.",
      },

      Aquarius: {
        title:
          "Das Talent, zu innovieren, zu verbinden und anders zu denken",
        introduction:
          "Jupiter im Wassermann verstärkt Ihre Originalität, intellektuelle Unabhängigkeit und Fähigkeit, kollektive Bewegungen zu verstehen. Sie besitzen ein natürliches Potenzial für neue Lösungen.",
        naturalGift:
          "Sie erkennen zukünftige Möglichkeiten und stellen Modelle infrage, die zu eng geworden sind.",
        hiddenPotential:
          "Sie können Innovator, Netzwerkgestalter oder eine Person werden, die Menschen um eine neue Idee versammelt.",
        expression:
          "Ihr Talent zeigt sich in Technologie, Gruppen, kollektiven Projekten, Innovation und sozialen Anliegen.",
        underusedStrength:
          "Ihre Fähigkeit, anders zu denken, kann Probleme lösen, an denen traditionelle Methoden scheitern.",
        development:
          "Ihr Talent wächst, wenn Ihre Ideen eine konkrete und zugängliche Form erhalten.",
        contribution:
          "Sie bringen Innovation, Gedankenfreiheit, Vision und Offenheit.",
        key:
          "Ihre Besonderheit mit einem wirklichen Bedürfnis verbinden.",
      },

      Pisces: {
        title:
          "Das Talent, zu inspirieren, zu fühlen und aus Intuition zu erschaffen",
        introduction:
          "Jupiter in den Fischen verstärkt Ihre Vorstellungskraft, Ihr Mitgefühl und Ihre Sensibilität für unsichtbare Ebenen der Erfahrung. Sie besitzen ein natürliches Potenzial, aus Empfindung Sinn zu erschaffen.",
        naturalGift:
          "Sie nehmen Gefühle, Symbole und Stimmungen sehr fein wahr.",
        hiddenPotential:
          "Sie können zu einem kreativen Menschen, Begleiter, Künstler oder einer tief inspirierenden Präsenz werden.",
        expression:
          "Ihr Talent zeigt sich in Kunst, Intuition, Heilung, Spiritualität, Musik oder humanitären Projekten.",
        underusedStrength:
          "Ihre Sensibilität kann zu einem echten Instrument des Verstehens werden, wenn sie durch klare Grenzen geschützt ist.",
        development:
          "Ihr Talent wächst, wenn Sie Ihren Intuitionen konkrete Form geben.",
        contribution:
          "Sie bringen Mitgefühl, Vorstellungskraft, Inspiration und emotionale Tiefe.",
        key:
          "Intuition in Schöpfung, Präsenz oder Handlung verwandeln.",
      },
    },

    mercuryTalents: {
      Aries:
        "Merkur im Widder gibt Ihnen ein lebendiges, direktes Denken und die Fähigkeit, schnell zu entscheiden.",
      Taurus:
        "Merkur im Stier gibt Ihnen konkretes, methodisches Denken und die Fähigkeit, Informationen langfristig zu behalten.",
      Gemini:
        "Merkur in den Zwillingen verstärkt Ihre Neugier, geistige Flexibilität und Kommunikationsfähigkeit.",
      Cancer:
        "Merkur im Krebs gibt Ihnen intuitive Intelligenz, die sensibel auf Gefühle, Erinnerungen und Stimmungen reagiert.",
      Leo:
        "Merkur im Löwen fördert ausdrucksstarke, kreative und überzeugende Kommunikation.",
      Virgo:
        "Merkur in der Jungfrau verstärkt Analyse, Präzision und die Fähigkeit, Details zu organisieren.",
      Libra:
        "Merkur in der Waage ermöglicht Ihnen, mehrere Perspektiven zu verstehen und diplomatisch zu kommunizieren.",
      Scorpio:
        "Merkur im Skorpion gibt Ihnen tiefes, strategisches Denken mit einem Gespür für Unausgesprochenes.",
      Sagittarius:
        "Merkur im Schützen fördert Gesamtüberblick, Lehre und die Weitergabe von Ideen.",
      Capricorn:
        "Merkur im Steinbock stärkt Logik, Struktur und Planungsfähigkeit.",
      Aquarius:
        "Merkur im Wassermann entwickelt originelles, unabhängiges und innovationsorientiertes Denken.",
      Pisces:
        "Merkur in den Fischen fördert Vorstellungskraft, Intuition und symbolisches Verständnis.",
    },

    uranusTalents: {
      Aries:
        "Uranus im Widder stärkt Ihre Fähigkeit, anders zu handeln und schnelle Veränderungen einzuleiten.",
      Taurus:
        "Uranus im Stier ermöglicht Innovation in materiellen, finanziellen oder kreativen Bereichen.",
      Gemini:
        "Uranus in den Zwillingen entwickelt schnelle, erfinderische Intelligenz und die Fähigkeit, unerwartete Ideen zu verbinden.",
      Cancer:
        "Uranus im Krebs erneuert Ihre Art, Sicherheit, Familie und Zugehörigkeit zu gestalten.",
      Leo:
        "Uranus im Löwen stärkt Ihre kreative Originalität und Ihren persönlichen Ausdruck.",
      Virgo:
        "Uranus in der Jungfrau ermöglicht Ihnen, neue Methoden zu erfinden und bestehende Systeme zu verbessern.",
      Libra:
        "Uranus in der Waage erneuert Ihre Sicht auf Beziehungen, Allianzen und Zusammenarbeit.",
      Scorpio:
        "Uranus im Skorpion entwickelt eine starke Fähigkeit, tiefe Strukturen und komplexe Situationen zu verändern.",
      Sagittarius:
        "Uranus im Schützen verstärkt Ihre Gedankenfreiheit und die Fähigkeit, neue Visionen zu erforschen.",
      Capricorn:
        "Uranus im Steinbock ermöglicht Ihnen, Strukturen zu modernisieren und anders aufzubauen.",
      Aquarius:
        "Uranus im Wassermann verstärkt Innovation, Zukunftsvision und intellektuelle Unabhängigkeit besonders stark.",
      Pisces:
        "Uranus in den Fischen entwickelt originelle Intuition und Kreativität mit Sensibilität für unsichtbare Ebenen.",
    },

    midheavenTalents: {
      Aries:
        "Ihr Medium Coeli im Widder begünstigt selbstständige Rollen, neue Projekte und Umfelder, in denen Sie schnell entscheiden können.",
      Taurus:
        "Ihr Medium Coeli im Stier begünstigt stabile, konkrete, kreative oder ressourcenbezogene Tätigkeiten.",
      Gemini:
        "Ihr Medium Coeli in den Zwillingen begünstigt Kommunikation, Schreiben, Vermittlung, Handel und vielseitige Tätigkeiten.",
      Cancer:
        "Ihr Medium Coeli im Krebs begünstigt Begleitung, Pflege, Gastfreundschaft, Familie oder Immobilien.",
      Leo:
        "Ihr Medium Coeli im Löwen begünstigt Kreativität, Führung, Sichtbarkeit und Rollen, in denen Ihre Persönlichkeit zur Stärke wird.",
      Virgo:
        "Ihr Medium Coeli in der Jungfrau begünstigt Analyse, Gesundheit, Dienstleistung, Management und präzisionsorientierte Berufe.",
      Libra:
        "Ihr Medium Coeli in der Waage begünstigt Beratung, Partnerschaften, Recht, Ästhetik und Vermittlung.",
      Scorpio:
        "Ihr Medium Coeli im Skorpion begünstigt Psychologie, Forschung, Strategie, Finanzen und tiefgreifende Veränderungsprozesse.",
      Sagittarius:
        "Ihr Medium Coeli im Schützen begünstigt Unterricht, Reisen, Verlagswesen, Recht und die Vermittlung einer Vision.",
      Capricorn:
        "Ihr Medium Coeli im Steinbock begünstigt Management, Unternehmertum, Verwaltung und wichtige Verantwortungsbereiche.",
      Aquarius:
        "Ihr Medium Coeli im Wassermann begünstigt Innovation, Technologie, Netzwerke und kollektive Projekte.",
      Pisces:
        "Ihr Medium Coeli in den Fischen begünstigt Kunst, Begleitung, Intuition, Kreativität und humanitäre Tätigkeiten.",
    },
  },

  it: {
    analysis:
      "Analisi Firma",

    title:
      "I tuoi talenti nascosti",

    subtitle:
      "Le tue competenze naturali, le risorse ancora poco utilizzate e le forze che possono occupare più spazio nella tua vita.",

    mainPotential:
      "Il tuo potenziale principale",

    naturalGiftLabel:
      "Dono naturale",

    naturalGiftTitle:
      "Ciò che fai istintivamente bene",

    hiddenPotentialLabel:
      "Potenziale nascosto",

    hiddenPotentialTitle:
      "Ciò che può ancora svilupparsi maggiormente",

    naturalExpression:
      "Il tuo modo naturale di esprimere questo talento",

    quote:
      "«Un talento nascosto non è sempre una capacità sconosciuta. Può essere una qualità che utilizzi da molto tempo senza riconoscerne il vero valore.»",

    complementaryResources:
      "Le tue risorse complementari",

    intelligenceExpansion:
      "Intelligenza, espansione, originalità e realizzazione",

    complementaryIntro:
      "Giove mostra gli ambiti nei quali la tua fiducia può espandersi. Mercurio descrive la tua intelligenza e il tuo modo di apprendere. Urano rivela la tua originalità, mentre il Medio Cielo indica le qualità che possono diventare visibili nel tuo percorso professionale.",

    jupiter:
      "Giove",

    mercury:
      "Mercurio",

    uranus:
      "Urano",

    midheaven:
      "Medio Cielo",

    jupiterRole:
      "La tua capacità di espansione, fiducia e crescita.",

    mercuryRole:
      "La tua intelligenza, comunicazione e metodo di apprendimento.",

    uranusRole:
      "La tua originalità e capacità di innovare.",

    midheavenRole:
      "Le qualità che possono diventare visibili nella tua vocazione.",

    naturalIntelligence:
      "La tua intelligenza naturale",

    innovationStrength:
      "La tua forza d’innovazione",

    visiblePotential:
      "Il tuo potenziale visibile",

    developPotential:
      "Sviluppare il tuo potenziale",

    giveMoreSpace:
      "Dare più spazio a ciò che esiste già dentro di te",

    developmentIntro:
      "Un potenziale diventa un talento pienamente disponibile quando viene riconosciuto, praticato e integrato in situazioni concrete. Non hai bisogno di cambiare tutto. Spesso basta dare più spazio a una qualità già presente.",

    underusedStrengthLabel:
      "Forza poco utilizzata",

    recognizeMore:
      "Ciò che potresti riconoscere maggiormente",

    developmentLabel:
      "Sviluppo",

    growPotential:
      "Come far crescere questo potenziale",

    threeWays:
      "Tre modi per sviluppare i tuoi talenti",

    step1:
      "Osserva le situazioni nelle quali gli altri vengono naturalmente da te per cercare il tuo aiuto, la tua opinione o la tua presenza.",

    step2:
      "Identifica le attività che ti sembrano semplici ma rappresentano una vera difficoltà per altre persone.",

    step3:
      "Scegli un progetto concreto nel quale puoi praticare questa capacità in modo regolare e visibile.",

    signatureKey:
      "La tua chiave Firma",

    talentContribution:
      "Un talento diventa un contributo",

    closingText:
      "Più riconosci il valore delle tue capacità naturali, più puoi utilizzarle consapevolmente invece di considerarle ordinarie.",

    mercuryFallback:
      "Mercurio rivela il tuo modo di imparare, comprendere, comunicare e trasformare le tue idee in competenze.",

    uranusFallback:
      "Urano rivela la tua capacità di innovare, pensare diversamente e portare una soluzione inattesa.",

    midheavenFallback:
      "Il tuo Medio Cielo mostra i talenti che possono occupare un posto visibile nel tuo percorso professionale.",

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

    profiles: {
      Aries: {
        title:
          "Il talento di iniziare, mobilitare e creare un nuovo slancio",
        introduction:
          "Giove in Ariete amplifica la tua capacità di agire con coraggio e creare movimento quando gli altri esitano. Il tuo potenziale si rivela quando ti fidi del tuo istinto d’iniziativa.",
        naturalGift:
          "Sai individuare rapidamente ciò che deve essere iniziato, difeso o rilanciato.",
        hiddenPotential:
          "Puoi diventare una persona capace di aprire una nuova strada e incoraggiare gli altri ad agire.",
        expression:
          "Il tuo talento si esprime nei progetti che richiedono audacia, rapidità, autonomia e leadership.",
        underusedStrength:
          "La tua capacità di decidere senza aspettare una convalida esterna può essere maggiore di quanto immagini.",
        development:
          "Il tuo talento cresce quando impari a sostenere il tuo impulso con strategia e continuità.",
        contribution:
          "Porti coraggio, slancio ed energia capace di far uscire una situazione dall’immobilità.",
        key:
          "Iniziare con audacia e rimanere abbastanza a lungo da costruire.",
      },

      Taurus: {
        title:
          "Il talento di costruire, stabilizzare e far crescere",
        introduction:
          "Giove in Toro sviluppa un’intelligenza concreta, paziente e orientata alla crescita duratura. Possiedi un potenziale naturale per trasformare una risorsa semplice in qualcosa di solido.",
        naturalGift:
          "Sai riconoscere ciò che può durare, essere sviluppato o diventare realmente utile.",
        hiddenPotential:
          "Puoi creare una sicurezza, un’opera o un’attività che cresce progressivamente nel tempo.",
        expression:
          "Il tuo talento si esprime nella gestione, nella creazione, nelle risorse, nella materia, nella bellezza e nei progetti a lungo termine.",
        underusedStrength:
          "La tua pazienza e costanza possono produrre più di azioni rapide e disperse.",
        development:
          "Il tuo talento cresce quando accetti di adattare i tuoi metodi senza abbandonare i tuoi valori.",
        contribution:
          "Porti stabilità, realismo, affidabilità e capacità di concretizzare.",
        key:
          "Fidarti della forza dei progressi regolari.",
      },

      Gemini: {
        title:
          "Il talento di comprendere, collegare e trasmettere le idee",
        introduction:
          "Giove in Gemelli amplifica curiosità, mobilità mentale e capacità di creare collegamenti tra diversi argomenti. Possiedi un potenziale naturale per rendere un’informazione più chiara e viva.",
        naturalGift:
          "Sai individuare rapidamente collegamenti, sfumature e diversi modi di spiegare un’idea.",
        hiddenPotential:
          "Puoi diventare un comunicatore, divulgatore, insegnante o creatore di contenuti particolarmente efficace.",
        expression:
          "Il tuo talento si esprime attraverso scrittura, comunicazione, insegnamento, lingue, commercio o reti.",
        underusedStrength:
          "La tua capacità di rendere accessibile ciò che sembra complesso può diventare una vera competenza.",
        development:
          "Il tuo talento cresce quando scegli alcuni argomenti da approfondire invece di moltiplicare continuamente le direzioni.",
        contribution:
          "Porti comprensione, movimento, curiosità e circolazione della conoscenza.",
        key:
          "Trasformare la curiosità in conoscenza realmente padroneggiata.",
      },

      Cancer: {
        title:
          "Il talento di proteggere, nutrire e creare un senso di appartenenza",
        introduction:
          "Giove in Cancro amplifica la tua sensibilità, intuizione e capacità di comprendere i bisogni emotivi. Possiedi un potenziale naturale per creare uno spazio rassicurante e umano.",
        naturalGift:
          "Sai percepire ciò di cui una persona o un gruppo ha bisogno per sentirsi accolto e sostenuto.",
        hiddenPotential:
          "Puoi diventare un punto di riferimento negli ambiti legati all’accompagnamento, alla trasmissione, alla famiglia o all’ospitalità.",
        expression:
          "Il tuo talento si esprime quando ti prendi cura, riunisci, insegni o proteggi ciò che possiede valore emotivo.",
        underusedStrength:
          "La tua memoria, intuizione e senso del legame possono diventare potenti strumenti professionali o creativi.",
        development:
          "Il tuo talento cresce quando aiuti senza renderti responsabile di tutto.",
        contribution:
          "Porti calore, sicurezza, ascolto e profondità umana.",
        key:
          "Prenderti cura senza dimenticarti.",
      },

      Leo: {
        title:
          "Il talento di creare, ispirare e dare fiducia",
        introduction:
          "Giove in Leone amplifica la tua creatività, generosità e capacità di trasmettere entusiasmo. Il tuo potenziale si rivela quando assumi pienamente la tua espressione personale.",
        naturalGift:
          "Sai naturalmente attirare l’attenzione, incoraggiare e dare valore a un’idea o a una persona.",
        hiddenPotential:
          "Puoi diventare una figura ispiratrice, creativa o dirigente capace di mobilitare attraverso calore e visione.",
        expression:
          "Il tuo talento si esprime nella creazione, nella scena, nella direzione, nell’insegnamento o nei progetti in cui la tua personalità diventa una forza.",
        underusedStrength:
          "La tua capacità di valorizzare gli altri può essere importante quanto il tuo stesso splendore.",
        development:
          "Il tuo talento cresce quando crei per condividere invece che soltanto per ricevere riconoscimento.",
        contribution:
          "Porti gioia, fiducia, creatività e potenza espressiva.",
        key:
          "Risplendere con generosità senza fare dell’approvazione una condizione.",
      },

      Virgo: {
        title:
          "Il talento di migliorare, strutturare e rendere le cose utili",
        introduction:
          "Giove in Vergine amplifica il tuo senso dell’osservazione, il metodo e la capacità di sviluppare una competenza precisa. Il tuo potenziale appare nei dettagli che gli altri trascurano.",
        naturalGift:
          "Sai individuare ciò che può essere corretto, semplificato o reso più efficace.",
        hiddenPotential:
          "Puoi diventare un vero punto di riferimento grazie a precisione, affidabilità e capacità di creare metodi.",
        expression:
          "Il tuo talento si esprime nell’analisi, nella salute, nell’organizzazione, nel servizio, nella gestione o nei mestieri tecnici.",
        underusedStrength:
          "La tua capacità di trasformare una difficoltà in una procedura chiara può avere grande valore.",
        development:
          "Il tuo talento cresce quando accetti che l’efficacia non richiede sempre perfezione.",
        contribution:
          "Porti metodo, discernimento, utilità e miglioramento concreto.",
        key:
          "Cercare il progresso invece dell’impeccabilità.",
      },

      Libra: {
        title:
          "Il talento di avvicinare, equilibrare e creare alleanze",
        introduction:
          "Giove in Bilancia amplifica il tuo senso della relazione, dell’equità e della cooperazione. Possiedi un potenziale naturale per comprendere più punti di vista e ristabilire equilibrio.",
        naturalGift:
          "Sai creare un clima favorevole allo scambio, alla negoziazione e alla collaborazione.",
        hiddenPotential:
          "Puoi diventare un mediatore, consulente, creatore o partner strategico molto efficace.",
        expression:
          "Il tuo talento si esprime nelle relazioni, nel diritto, nell’estetica, nella diplomazia, nelle partnership e nella consulenza.",
        underusedStrength:
          "La tua capacità di percepire ciò che è giusto per più persone può diventare una competenza rara.",
        development:
          "Il tuo talento cresce quando sviluppi una posizione personale chiara prima di cercare l’accordo.",
        contribution:
          "Porti armonia, giustizia, eleganza e senso della cooperazione.",
        key:
          "Creare equilibrio senza cancellarti.",
      },

      Scorpio: {
        title:
          "Il talento di comprendere, trasformare e rigenerare",
        introduction:
          "Giove in Scorpione amplifica la tua profondità, intuizione e capacità di percepire i meccanismi nascosti. Possiedi un potenziale naturale per attraversare situazioni complesse e ricavarne una comprensione potente.",
        naturalGift:
          "Sai leggere tra le righe, comprendere le motivazioni e individuare le vere questioni.",
        hiddenPotential:
          "Puoi diventare un eccellente stratega, ricercatore, terapeuta, analista o accompagnatore di trasformazione.",
        expression:
          "Il tuo talento si esprime negli ambiti che richiedono profondità, discrezione, psicologia, ricerca o gestione delle crisi.",
        underusedStrength:
          "La tua capacità di rimanere presente nelle situazioni intense può rassicurare e guidare gli altri.",
        development:
          "Il tuo talento cresce quando utilizzi la tua lucidità per trasformare invece che controllare.",
        contribution:
          "Porti verità, coraggio emotivo, strategia e capacità di rinascita.",
        key:
          "Fare della tua intensità uno strumento di trasformazione consapevole.",
      },

      Sagittarius: {
        title:
          "Il talento di ampliare, insegnare e trasmettere una visione",
        introduction:
          "Giove in Sagittario amplifica il tuo bisogno di comprendere il significato globale delle esperienze. Possiedi un potenziale naturale per ispirare, insegnare e aprire nuove prospettive.",
        naturalGift:
          "Sai restituire speranza e collocare una situazione in un contesto più ampio.",
        hiddenPotential:
          "Puoi diventare un insegnante, guida, autore o esploratore capace di trasmettere una visione forte.",
        expression:
          "Il tuo talento si esprime nell’insegnamento, nei viaggi, nelle lingue, nella filosofia, nel diritto o nella comunicazione ispiratrice.",
        underusedStrength:
          "La tua capacità di trasmettere convinzione e mobilitare intorno a una visione può essere considerevole.",
        development:
          "Il tuo talento cresce quando le tue convinzioni poggiano su un’esperienza approfondita.",
        contribution:
          "Porti significato, espansione, fiducia e apertura.",
        key:
          "Trasformare la tua visione in conoscenza vissuta e trasmissibile.",
      },

      Capricorn: {
        title:
          "Il talento di strutturare, dirigere e costruire nel lungo periodo",
        introduction:
          "Giove in Capricorno amplifica la tua capacità di pianificare, organizzare e assumere responsabilità importanti. Possiedi un potenziale naturale per costruire qualcosa di duraturo.",
        naturalGift:
          "Sai trasformare un obiettivo ambizioso in tappe realistiche e progressive.",
        hiddenPotential:
          "Puoi diventare una persona di riferimento, un dirigente o un esperto riconosciuto per la sua solidità.",
        expression:
          "Il tuo talento si esprime nella gestione, nell’imprenditoria, nella strategia, nell’amministrazione e nei progetti di lunga durata.",
        underusedStrength:
          "La tua pazienza strategica può permetterti di raggiungere obiettivi che altri abbandonano troppo presto.",
        development:
          "Il tuo talento cresce quando associ ambizione, flessibilità e rispetto dei tuoi limiti.",
        contribution:
          "Porti struttura, maturità, resistenza e senso di responsabilità.",
        key:
          "Costruire con ambizione senza trasformare ogni tappa in una prova.",
      },

      Aquarius: {
        title:
          "Il talento di innovare, collegare e immaginare diversamente",
        introduction:
          "Giove in Acquario amplifica la tua originalità, indipendenza intellettuale e capacità di comprendere i movimenti collettivi. Possiedi un potenziale naturale per proporre nuove soluzioni.",
        naturalGift:
          "Sai vedere le possibilità future e mettere in discussione i modelli diventati troppo limitanti.",
        hiddenPotential:
          "Puoi diventare un innovatore, creatore di reti o una persona capace di riunire gli altri intorno a una nuova idea.",
        expression:
          "Il tuo talento si esprime nella tecnologia, nei gruppi, nei progetti collettivi, nell’innovazione e nelle cause sociali.",
        underusedStrength:
          "La tua capacità di pensare diversamente può risolvere problemi che i metodi tradizionali non riescono a superare.",
        development:
          "Il tuo talento cresce quando le tue idee assumono una forma concreta e accessibile.",
        contribution:
          "Porti innovazione, libertà di pensiero, visione e apertura.",
        key:
          "Collegare la tua differenza a un bisogno reale.",
      },

      Pisces: {
        title:
          "Il talento di ispirare, sentire e creare attraverso l’intuizione",
        introduction:
          "Giove in Pesci amplifica la tua immaginazione, compassione e sensibilità alle dimensioni invisibili dell’esperienza. Possiedi un potenziale naturale per creare significato a partire dal sentire.",
        naturalGift:
          "Sai percepire emozioni, simboli e atmosfere con grande finezza.",
        hiddenPotential:
          "Puoi diventare un creatore, accompagnatore, artista o presenza profondamente ispiratrice.",
        expression:
          "Il tuo talento si esprime nell’arte, nell’intuizione, nella cura, nella spiritualità, nella musica o nei progetti umanitari.",
        underusedStrength:
          "La tua sensibilità può diventare un vero strumento di comprensione quando è protetta da limiti chiari.",
        development:
          "Il tuo talento cresce quando dai forma concreta alle tue intuizioni.",
        contribution:
          "Porti compassione, immaginazione, ispirazione e profondità sensibile.",
        key:
          "Trasformare l’intuizione in creazione, presenza o azione.",
      },
    },

    mercuryTalents: {
      Aries:
        "Mercurio in Ariete ti dona un pensiero vivo, diretto e capace di decidere rapidamente.",
      Taurus:
        "Mercurio in Toro ti dona un pensiero concreto, metodico e capace di conservare le informazioni nel tempo.",
      Gemini:
        "Mercurio in Gemelli rafforza curiosità, flessibilità mentale e facilità di comunicazione.",
      Cancer:
        "Mercurio in Cancro ti dona un’intelligenza intuitiva, sensibile alle emozioni, ai ricordi e alle atmosfere.",
      Leo:
        "Mercurio in Leone favorisce una comunicazione espressiva, creativa e convincente.",
      Virgo:
        "Mercurio in Vergine rafforza analisi, precisione e capacità di organizzare i dettagli.",
      Libra:
        "Mercurio in Bilancia ti permette di comprendere diverse prospettive e comunicare con diplomazia.",
      Scorpio:
        "Mercurio in Scorpione ti dona un pensiero profondo, strategico e attento ai non detti.",
      Sagittarius:
        "Mercurio in Sagittario favorisce la visione globale, l’insegnamento e la trasmissione delle idee.",
      Capricorn:
        "Mercurio in Capricorno rafforza logica, struttura e capacità di pianificazione.",
      Aquarius:
        "Mercurio in Acquario sviluppa un pensiero originale, indipendente e orientato all’innovazione.",
      Pisces:
        "Mercurio in Pesci favorisce immaginazione, intuizione e comprensione simbolica delle situazioni.",
    },

    uranusTalents: {
      Aries:
        "Urano in Ariete rafforza la tua capacità di agire diversamente e avviare cambiamenti rapidi.",
      Taurus:
        "Urano in Toro ti permette di innovare negli ambiti materiali, finanziari o creativi.",
      Gemini:
        "Urano in Gemelli sviluppa un’intelligenza rapida, inventiva e capace di collegare idee inattese.",
      Cancer:
        "Urano in Cancro rinnova il tuo modo di creare sicurezza, famiglia e appartenenza.",
      Leo:
        "Urano in Leone rafforza la tua originalità creativa e il bisogno di espressione personale.",
      Virgo:
        "Urano in Vergine ti permette di inventare nuovi metodi e migliorare i sistemi esistenti.",
      Libra:
        "Urano in Bilancia rinnova il tuo modo di pensare le relazioni, le alleanze e la cooperazione.",
      Scorpio:
        "Urano in Scorpione sviluppa una potente capacità di trasformare strutture profonde e situazioni complesse.",
      Sagittarius:
        "Urano in Sagittario amplifica la tua libertà di pensiero e la capacità di esplorare nuove visioni.",
      Capricorn:
        "Urano in Capricorno ti permette di modernizzare le strutture e costruire diversamente.",
      Aquarius:
        "Urano in Acquario amplifica fortemente innovazione, visione del futuro e indipendenza intellettuale.",
      Pisces:
        "Urano in Pesci sviluppa un’intuizione originale e una creatività sensibile alle dimensioni invisibili.",
    },

    midheavenTalents: {
      Aries:
        "Il tuo Medio Cielo in Ariete favorisce ruoli autonomi, nuovi progetti e ambienti nei quali puoi decidere rapidamente.",
      Taurus:
        "Il tuo Medio Cielo in Toro favorisce attività stabili, concrete, creative o legate alle risorse.",
      Gemini:
        "Il tuo Medio Cielo in Gemelli favorisce comunicazione, scrittura, trasmissione, commercio e attività multiple.",
      Cancer:
        "Il tuo Medio Cielo in Cancro favorisce gli ambiti legati all’accompagnamento, alla cura, all’accoglienza, alla famiglia o agli immobili.",
      Leo:
        "Il tuo Medio Cielo in Leone favorisce creazione, direzione, visibilità e ruoli nei quali la tua personalità diventa una forza.",
      Virgo:
        "Il tuo Medio Cielo in Vergine favorisce analisi, salute, servizio, gestione e professioni che richiedono precisione.",
      Libra:
        "Il tuo Medio Cielo in Bilancia favorisce consulenza, partnership, diritto, estetica e mediazione.",
      Scorpio:
        "Il tuo Medio Cielo in Scorpione favorisce psicologia, ricerca, strategia, finanza e trasformazioni profonde.",
      Sagittarius:
        "Il tuo Medio Cielo in Sagittario favorisce insegnamento, viaggi, editoria, diritto e trasmissione di una visione.",
      Capricorn:
        "Il tuo Medio Cielo in Capricorno favorisce gestione, imprenditoria, amministrazione e responsabilità importanti.",
      Aquarius:
        "Il tuo Medio Cielo in Acquario favorisce innovazione, tecnologia, reti e progetti collettivi.",
      Pisces:
        "Il tuo Medio Cielo in Pesci favorisce arte, accompagnamento, intuizione, creazione e attività umanitarie.",
    },
  },

  pt: {
    analysis:
      "Análise Assinatura",

    title:
      "Seus talentos ocultos",

    subtitle:
      "Suas competências naturais, seus recursos ainda pouco explorados e as forças que podem ocupar mais espaço na sua vida.",

    mainPotential:
      "Seu potencial principal",

    naturalGiftLabel:
      "Dom natural",

    naturalGiftTitle:
      "Aquilo que você faz instintivamente bem",

    hiddenPotentialLabel:
      "Potencial oculto",

    hiddenPotentialTitle:
      "Aquilo que ainda pode crescer mais",

    naturalExpression:
      "Sua maneira natural de expressar esse talento",

    quote:
      "“Um talento oculto nem sempre é uma capacidade desconhecida. Pode ser uma qualidade que você utiliza há muito tempo sem reconhecer seu verdadeiro valor.”",

    complementaryResources:
      "Seus recursos complementares",

    intelligenceExpansion:
      "Inteligência, expansão, originalidade e realização",

    complementaryIntro:
      "Júpiter mostra as áreas em que sua confiança pode crescer. Mercúrio descreve sua inteligência e sua maneira de aprender. Urano revela sua originalidade, enquanto o Meio do Céu indica qualidades que podem se tornar visíveis no seu percurso profissional.",

    jupiter:
      "Júpiter",

    mercury:
      "Mercúrio",

    uranus:
      "Urano",

    midheaven:
      "Meio do Céu",

    jupiterRole:
      "Sua capacidade de expansão, confiança e crescimento.",

    mercuryRole:
      "Sua inteligência, comunicação e método de aprendizagem.",

    uranusRole:
      "Sua originalidade e sua capacidade de inovar.",

    midheavenRole:
      "As qualidades que podem ocupar um lugar visível na sua vocação.",

    naturalIntelligence:
      "Sua inteligência natural",

    innovationStrength:
      "Sua força de inovação",

    visiblePotential:
      "Seu potencial visível",

    developPotential:
      "Desenvolver seu potencial",

    giveMoreSpace:
      "Dar mais espaço àquilo que já existe dentro de você",

    developmentIntro:
      "Um potencial se torna um talento plenamente disponível quando é reconhecido, praticado e integrado em situações concretas. Você não precisa mudar tudo. Muitas vezes basta dar mais espaço a uma qualidade que já está presente.",

    underusedStrengthLabel:
      "Força pouco utilizada",

    recognizeMore:
      "Aquilo que você poderia reconhecer mais",

    developmentLabel:
      "Desenvolvimento",

    growPotential:
      "Como desenvolver esse potencial",

    threeWays:
      "Três maneiras de desenvolver seus talentos",

    step1:
      "Observe as situações em que outras pessoas naturalmente procuram sua ajuda, sua opinião ou sua presença.",

    step2:
      "Identifique as tarefas que parecem simples para você, mas representam uma dificuldade real para outras pessoas.",

    step3:
      "Escolha um projeto concreto no qual você possa praticar essa capacidade de forma regular e visível.",

    signatureKey:
      "Sua chave Assinatura",

    talentContribution:
      "Um talento se torna uma contribuição",

    closingText:
      "Quanto mais você reconhece o valor das suas capacidades naturais, mais pode utilizá-las conscientemente em vez de considerá-las comuns.",

    mercuryFallback:
      "Mercúrio revela sua maneira de aprender, compreender, comunicar e transformar suas ideias em competências.",

    uranusFallback:
      "Urano revela sua capacidade de inovar, pensar de maneira diferente e oferecer uma solução inesperada.",

    midheavenFallback:
      "Seu Meio do Céu mostra os talentos que podem ocupar um lugar visível no seu percurso profissional.",

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

    profiles: {
      Aries: {
        title:
          "O talento de iniciar, mobilizar e criar um novo impulso",
        introduction:
          "Júpiter em Áries amplia sua capacidade de agir com coragem e provocar movimento quando os outros hesitam. Seu potencial se revela quando você confia no seu instinto de iniciativa.",
        naturalGift:
          "Você sabe identificar rapidamente aquilo que precisa ser iniciado, defendido ou relançado.",
        hiddenPotential:
          "Você pode se tornar uma pessoa capaz de abrir um novo caminho e incentivar os outros a agir.",
        expression:
          "Seu talento se expressa em projetos que exigem ousadia, rapidez, autonomia e liderança.",
        underusedStrength:
          "Sua capacidade de decidir sem esperar validação externa pode ser maior do que imagina.",
        development:
          "Seu talento cresce quando aprende a sustentar seu impulso com estratégia e continuidade.",
        contribution:
          "Você traz coragem, impulso e uma energia capaz de tirar uma situação da imobilidade.",
        key:
          "Começar com ousadia e permanecer tempo suficiente para construir.",
      },

      Taurus: {
        title:
          "O talento de construir, estabilizar e fazer crescer",
        introduction:
          "Júpiter em Touro desenvolve uma inteligência concreta, paciente e voltada para o crescimento sustentável. Você possui um potencial natural para transformar um recurso simples em algo sólido.",
        naturalGift:
          "Você sabe reconhecer aquilo que pode durar, ser desenvolvido ou se tornar realmente útil.",
        hiddenPotential:
          "Você pode criar segurança, uma obra ou uma atividade que cresce progressivamente com o tempo.",
        expression:
          "Seu talento se expressa na gestão, criação, recursos, matéria, beleza e projetos de longo prazo.",
        underusedStrength:
          "Sua paciência e constância podem produzir mais do que ações rápidas e dispersas.",
        development:
          "Seu talento cresce quando aceita adaptar seus métodos sem abandonar seus valores.",
        contribution:
          "Você traz estabilidade, realismo, confiabilidade e capacidade de concretização.",
        key:
          "Confiar na força dos progressos regulares.",
      },

      Gemini: {
        title:
          "O talento de compreender, conectar e transmitir ideias",
        introduction:
          "Júpiter em Gêmeos amplia sua curiosidade, mobilidade mental e capacidade de criar conexões entre vários assuntos. Você possui um potencial natural para tornar uma informação mais clara e viva.",
        naturalGift:
          "Você sabe identificar rapidamente conexões, nuances e diferentes maneiras de explicar uma ideia.",
        hiddenPotential:
          "Você pode se tornar um comunicador, divulgador, professor ou criador de conteúdo particularmente eficaz.",
        expression:
          "Seu talento se expressa através da escrita, comunicação, ensino, idiomas, comércio ou redes.",
        underusedStrength:
          "Sua capacidade de tornar acessível aquilo que parece complexo pode se tornar uma verdadeira especialização.",
        development:
          "Seu talento cresce quando escolhe alguns assuntos para aprofundar em vez de multiplicar constantemente as direções.",
        contribution:
          "Você traz compreensão, movimento, curiosidade e circulação do conhecimento.",
        key:
          "Transformar curiosidade em conhecimento realmente dominado.",
      },

      Cancer: {
        title:
          "O talento de proteger, nutrir e criar um sentimento de pertencimento",
        introduction:
          "Júpiter em Câncer amplia sua sensibilidade, intuição e capacidade de compreender necessidades emocionais. Você possui um potencial natural para criar um espaço seguro e humano.",
        naturalGift:
          "Você sabe perceber aquilo de que uma pessoa ou grupo precisa para se sentir acolhido e apoiado.",
        hiddenPotential:
          "Você pode se tornar uma referência em áreas ligadas ao acompanhamento, à transmissão, à família ou à hospitalidade.",
        expression:
          "Seu talento se expressa quando cuida, reúne pessoas, ensina ou protege aquilo que possui valor emocional.",
        underusedStrength:
          "Sua memória, intuição e senso de conexão podem se tornar poderosas ferramentas profissionais ou criativas.",
        development:
          "Seu talento cresce quando ajuda sem se tornar responsável por tudo.",
        contribution:
          "Você traz calor, segurança, escuta e profundidade humana.",
        key:
          "Cuidar sem se esquecer de si mesmo.",
      },

      Leo: {
        title:
          "O talento de criar, inspirar e transmitir confiança",
        introduction:
          "Júpiter em Leão amplia sua criatividade, generosidade e capacidade de transmitir entusiasmo. Seu potencial se revela quando assume plenamente sua expressão pessoal.",
        naturalGift:
          "Você sabe naturalmente atrair atenção, incentivar e valorizar uma ideia ou pessoa.",
        hiddenPotential:
          "Você pode se tornar uma figura inspiradora, criativa ou líder capaz de mobilizar através do calor e da visão.",
        expression:
          "Seu talento se expressa na criação, palco, liderança, ensino ou projetos nos quais sua personalidade se torna uma força.",
        underusedStrength:
          "Sua capacidade de valorizar os outros pode ser tão importante quanto seu próprio brilho.",
        development:
          "Seu talento cresce quando cria para compartilhar, e não apenas para receber reconhecimento.",
        contribution:
          "Você traz alegria, confiança, criatividade e poder de expressão.",
        key:
          "Brilhar com generosidade sem transformar aprovação em condição.",
      },

      Virgo: {
        title:
          "O talento de melhorar, estruturar e tornar as coisas úteis",
        introduction:
          "Júpiter em Virgem amplia seu senso de observação, método e capacidade de desenvolver uma competência precisa. Seu potencial aparece nos detalhes que os outros negligenciam.",
        naturalGift:
          "Você sabe identificar aquilo que pode ser corrigido, simplificado ou tornado mais eficaz.",
        hiddenPotential:
          "Você pode se tornar uma verdadeira referência graças à sua precisão, confiabilidade e capacidade de criar métodos.",
        expression:
          "Seu talento se expressa na análise, saúde, organização, serviço, gestão ou profissões técnicas.",
        underusedStrength:
          "Sua capacidade de transformar uma dificuldade em procedimento claro pode ter grande valor.",
        development:
          "Seu talento cresce quando aceita que eficiência nem sempre exige perfeição.",
        contribution:
          "Você traz método, discernimento, utilidade e melhoria concreta.",
        key:
          "Buscar progresso em vez de perfeição absoluta.",
      },

      Libra: {
        title:
          "O talento de aproximar, equilibrar e criar alianças",
        introduction:
          "Júpiter em Libra amplia seu senso de relacionamento, equidade e cooperação. Você possui um potencial natural para compreender vários pontos de vista e restaurar equilíbrio.",
        naturalGift:
          "Você sabe criar um clima favorável à troca, negociação e colaboração.",
        hiddenPotential:
          "Você pode se tornar um mediador, consultor, criador ou parceiro estratégico muito eficaz.",
        expression:
          "Seu talento se expressa nos relacionamentos, direito, estética, diplomacia, parcerias e consultoria.",
        underusedStrength:
          "Sua capacidade de perceber aquilo que é justo para várias pessoas pode se tornar uma competência rara.",
        development:
          "Seu talento cresce quando desenvolve uma posição pessoal clara antes de buscar acordo.",
        contribution:
          "Você traz harmonia, justiça, elegância e senso de cooperação.",
        key:
          "Criar equilíbrio sem se apagar.",
      },

      Scorpio: {
        title:
          "O talento de compreender, transformar e regenerar",
        introduction:
          "Júpiter em Escorpião amplia sua profundidade, intuição e capacidade de perceber mecanismos ocultos. Você possui um potencial natural para atravessar situações complexas e extrair delas uma compreensão poderosa.",
        naturalGift:
          "Você sabe ler nas entrelinhas, compreender motivações e detectar os verdadeiros desafios.",
        hiddenPotential:
          "Você pode se tornar um excelente estrategista, pesquisador, terapeuta, analista ou facilitador de transformação.",
        expression:
          "Seu talento se expressa em áreas que exigem profundidade, discrição, psicologia, investigação ou gestão de crises.",
        underusedStrength:
          "Sua capacidade de permanecer presente em situações intensas pode tranquilizar e orientar os outros.",
        development:
          "Seu talento cresce quando utiliza sua lucidez para transformar em vez de controlar.",
        contribution:
          "Você traz verdade, coragem emocional, estratégia e capacidade de renascimento.",
        key:
          "Transformar sua intensidade em ferramenta de transformação consciente.",
      },

      Sagittarius: {
        title:
          "O talento de ampliar, ensinar e transmitir uma visão",
        introduction:
          "Júpiter em Sagitário amplia sua necessidade de compreender o sentido global das experiências. Você possui um potencial natural para inspirar, ensinar e abrir novas perspectivas.",
        naturalGift:
          "Você sabe devolver esperança e colocar uma situação dentro de um contexto mais amplo.",
        hiddenPotential:
          "Você pode se tornar professor, guia, autor ou explorador capaz de transmitir uma visão forte.",
        expression:
          "Seu talento se expressa no ensino, viagens, idiomas, filosofia, direito ou comunicação inspiradora.",
        underusedStrength:
          "Sua capacidade de transmitir convicção e mobilizar pessoas em torno de uma visão pode ser considerável.",
        development:
          "Seu talento cresce quando suas convicções se apoiam em experiência profunda.",
        contribution:
          "Você traz sentido, expansão, confiança e abertura.",
        key:
          "Transformar sua visão em conhecimento vivido e transmissível.",
      },

      Capricorn: {
        title:
          "O talento de estruturar, liderar e construir a longo prazo",
        introduction:
          "Júpiter em Capricórnio amplia sua capacidade de planejar, organizar e assumir responsabilidades importantes. Você possui um potencial natural para construir algo duradouro.",
        naturalGift:
          "Você sabe transformar um objetivo ambicioso em etapas realistas e progressivas.",
        hiddenPotential:
          "Você pode se tornar uma pessoa de referência, líder ou especialista reconhecido pela solidez.",
        expression:
          "Seu talento se expressa na gestão, empreendedorismo, estratégia, administração e projetos de longa duração.",
        underusedStrength:
          "Sua paciência estratégica pode permitir alcançar objetivos que outros abandonam cedo demais.",
        development:
          "Seu talento cresce quando combina ambição, flexibilidade e respeito pelos seus limites.",
        contribution:
          "Você traz estrutura, maturidade, resistência e senso de responsabilidade.",
        key:
          "Construir com ambição sem transformar cada etapa em uma prova.",
      },

      Aquarius: {
        title:
          "O talento de inovar, conectar e imaginar de outra forma",
        introduction:
          "Júpiter em Aquário amplia sua originalidade, independência intelectual e capacidade de compreender movimentos coletivos. Você possui um potencial natural para propor novas soluções.",
        naturalGift:
          "Você sabe enxergar possibilidades futuras e questionar modelos que se tornaram limitantes demais.",
        hiddenPotential:
          "Você pode se tornar inovador, criador de redes ou pessoa capaz de reunir outros em torno de uma nova ideia.",
        expression:
          "Seu talento se expressa na tecnologia, grupos, projetos coletivos, inovação e causas sociais.",
        underusedStrength:
          "Sua capacidade de pensar diferente pode resolver problemas que os métodos tradicionais não conseguem superar.",
        development:
          "Seu talento cresce quando suas ideias assumem uma forma concreta e acessível.",
        contribution:
          "Você traz inovação, liberdade de pensamento, visão e abertura.",
        key:
          "Conectar sua diferença a uma necessidade real.",
      },

      Pisces: {
        title:
          "O talento de inspirar, sentir e criar a partir da intuição",
        introduction:
          "Júpiter em Peixes amplia sua imaginação, compaixão e sensibilidade às dimensões invisíveis da experiência. Você possui um potencial natural para criar sentido a partir daquilo que sente.",
        naturalGift:
          "Você sabe perceber emoções, símbolos e ambientes com grande sutileza.",
        hiddenPotential:
          "Você pode se tornar criador, orientador, artista ou uma presença profundamente inspiradora.",
        expression:
          "Seu talento se expressa na arte, intuição, cuidado, espiritualidade, música ou projetos humanitários.",
        underusedStrength:
          "Sua sensibilidade pode se tornar um verdadeiro instrumento de compreensão quando protegida por limites claros.",
        development:
          "Seu talento cresce quando dá forma concreta às suas intuições.",
        contribution:
          "Você traz compaixão, imaginação, inspiração e profundidade sensível.",
        key:
          "Transformar intuição em criação, presença ou ação.",
      },
    },

    mercuryTalents: {
      Aries:
        "Mercúrio em Áries oferece um pensamento vivo, direto e capaz de decidir rapidamente.",
      Taurus:
        "Mercúrio em Touro oferece um pensamento concreto, metódico e capaz de reter informações por muito tempo.",
      Gemini:
        "Mercúrio em Gêmeos reforça sua curiosidade, flexibilidade mental e facilidade de comunicação.",
      Cancer:
        "Mercúrio em Câncer oferece uma inteligência intuitiva, sensível às emoções, lembranças e ambientes.",
      Leo:
        "Mercúrio em Leão favorece uma comunicação expressiva, criativa e convincente.",
      Virgo:
        "Mercúrio em Virgem reforça análise, precisão e capacidade de organizar detalhes.",
      Libra:
        "Mercúrio em Libra permite compreender várias perspectivas e comunicar com diplomacia.",
      Scorpio:
        "Mercúrio em Escorpião oferece um pensamento profundo, estratégico e atento ao não dito.",
      Sagittarius:
        "Mercúrio em Sagitário favorece visão global, ensino e transmissão de ideias.",
      Capricorn:
        "Mercúrio em Capricórnio reforça lógica, estrutura e capacidade de planejamento.",
      Aquarius:
        "Mercúrio em Aquário desenvolve pensamento original, independente e voltado para inovação.",
      Pisces:
        "Mercúrio em Peixes favorece imaginação, intuição e compreensão simbólica das situações.",
    },

    uranusTalents: {
      Aries:
        "Urano em Áries reforça sua capacidade de agir de outra maneira e iniciar mudanças rápidas.",
      Taurus:
        "Urano em Touro permite inovar em áreas materiais, financeiras ou criativas.",
      Gemini:
        "Urano em Gêmeos desenvolve inteligência rápida, inventiva e capaz de conectar ideias inesperadas.",
      Cancer:
        "Urano em Câncer renova sua maneira de criar segurança, família e pertencimento.",
      Leo:
        "Urano em Leão reforça sua originalidade criativa e necessidade de expressão pessoal.",
      Virgo:
        "Urano em Virgem permite inventar novos métodos e melhorar sistemas existentes.",
      Libra:
        "Urano em Libra renova sua maneira de pensar relacionamentos, alianças e cooperação.",
      Scorpio:
        "Urano em Escorpião desenvolve forte capacidade de transformar estruturas profundas e situações complexas.",
      Sagittarius:
        "Urano em Sagitário amplia sua liberdade de pensamento e capacidade de explorar novas visões.",
      Capricorn:
        "Urano em Capricórnio permite modernizar estruturas e construir de outra maneira.",
      Aquarius:
        "Urano em Aquário amplia fortemente inovação, visão de futuro e independência intelectual.",
      Pisces:
        "Urano em Peixes desenvolve uma intuição original e criatividade sensível às dimensões invisíveis.",
    },

    midheavenTalents: {
      Aries:
        "Seu Meio do Céu em Áries favorece funções autônomas, novos projetos e ambientes nos quais você pode decidir rapidamente.",
      Taurus:
        "Seu Meio do Céu em Touro favorece atividades estáveis, concretas, criativas ou ligadas aos recursos.",
      Gemini:
        "Seu Meio do Céu em Gêmeos favorece comunicação, escrita, transmissão, comércio e atividades variadas.",
      Cancer:
        "Seu Meio do Céu em Câncer favorece áreas ligadas ao acompanhamento, cuidado, acolhimento, família ou imóveis.",
      Leo:
        "Seu Meio do Céu em Leão favorece criação, liderança, visibilidade e funções nas quais sua personalidade se torna uma força.",
      Virgo:
        "Seu Meio do Céu em Virgem favorece análise, saúde, serviço, gestão e profissões que exigem precisão.",
      Libra:
        "Seu Meio do Céu em Libra favorece consultoria, parcerias, direito, estética e mediação.",
      Scorpio:
        "Seu Meio do Céu em Escorpião favorece psicologia, pesquisa, estratégia, finanças e transformações profundas.",
      Sagittarius:
        "Seu Meio do Céu em Sagitário favorece ensino, viagens, edição, direito e transmissão de uma visão.",
      Capricorn:
        "Seu Meio do Céu em Capricórnio favorece gestão, empreendedorismo, administração e responsabilidades importantes.",
      Aquarius:
        "Seu Meio do Céu em Aquário favorece inovação, tecnologia, redes e projetos coletivos.",
      Pisces:
        "Seu Meio do Céu em Peixes favorece arte, acompanhamento, intuição, criação e atividades humanitárias.",
    },
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

function replaceFlexibleText(
  source: string,
  from: string,
  to: string,
): string {
  const pattern =
    from
      .trim()
      .split(/\s+/)
      .map(escapeRegExp)
      .join("\\s+");

  return source.replace(
    new RegExp(
      pattern,
      "g",
    ),
    to,
  );
}

export function localizeSignatureHiddenTalents(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const labels =
    LABELS[
      locale as NonFrenchLocale
    ];

  let out =
    source.replace(
      /\r\n/g,
      "\n",
    );

  /*
  |--------------------------------------------------------------------------
  | Noms visibles des signes
  |--------------------------------------------------------------------------
  |
  | Les clés techniques Aries / Taurus / etc.
  | restent intactes.
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
    Sagittarius:
      labels.sagittarius,
    Capricorn:
      labels.capricorn,
    Aquarius:
      labels.aquarius,
    Pisces:
      labels.pisces,

    Bélier: labels.aries,
    Taureau: labels.taurus,
    Gémeaux: labels.gemini,
    Lion: labels.leo,
    Vierge: labels.virgo,
    Balance: labels.libra,
    Scorpion: labels.scorpio,
    Sagittaire:
      labels.sagittarius,
    Capricorne:
      labels.capricorn,
    Verseau:
      labels.aquarius,
    Poissons:
      labels.pisces,
  };

  out = out.replace(
    /const SIGN_NAMES:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\};/,
    `const SIGN_NAMES: Record<string, string> = ${JSON.stringify(
      signNames,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | 12 profils de talents selon Jupiter
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const TALENTS_BY_JUPITER_SIGN:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\n\};(?=\n\n\/\*\n\|-+\n\| Intelligence selon Mercure)/,
    `const TALENTS_BY_JUPITER_SIGN: Record<
  string,
  TalentProfile
> = ${JSON.stringify(
      labels.profiles,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Mercure
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const MERCURY_TALENTS:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\n\};(?=\n\n\/\*\n\|-+\n\| Originalité selon Uranus)/,
    `const MERCURY_TALENTS: Record<string, string> = ${JSON.stringify(
      labels.mercuryTalents,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Uranus
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const URANUS_TALENTS:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\n\};(?=\n\n\/\*\n\|-+\n\| Direction professionnelle selon le Milieu du Ciel)/,
    `const URANUS_TALENTS: Record<string, string> = ${JSON.stringify(
      labels.uranusTalents,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Milieu du Ciel
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const MIDHEAVEN_TALENTS:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\n\};(?=\n\n\/\*\n\|-+\n\| Utilitaires)/,
    `const MIDHEAVEN_TALENTS: Record<string, string> = ${JSON.stringify(
      labels.midheavenTalents,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Fallbacks
  |--------------------------------------------------------------------------
  */

  out = replaceFlexibleText(
    out,
    "Mercure révèle votre manière d’apprendre, de comprendre, de communiquer et de transformer vos idées en compétence.",
    labels.mercuryFallback,
  );

  out = replaceFlexibleText(
    out,
    "Uranus révèle votre capacité à innover, à penser différemment et à apporter une solution inattendue.",
    labels.uranusFallback,
  );

  out = replaceFlexibleText(
    out,
    "Votre Milieu du Ciel montre les talents qui peuvent prendre une place visible dans votre parcours professionnel.",
    labels.midheavenFallback,
  );

  /*
  |--------------------------------------------------------------------------
  | Textes fixes — Page 1
  |--------------------------------------------------------------------------
  */

  const replacements:
    Array<[string, string]> = [
      [
        "Analyse Signature",
        labels.analysis,
      ],

      [
        "Vos talents cachés",
        labels.title,
      ],

      [
        "Les compétences naturelles, les ressources inexploitées et les forces qui peuvent prendre davantage de place dans votre vie.",
        labels.subtitle,
      ],

      [
        "Votre potentiel principal",
        labels.mainPotential,
      ],

      [
        "Don naturel",
        labels.naturalGiftLabel,
      ],

      [
        "Ce que vous faites instinctivement bien",
        labels.naturalGiftTitle,
      ],

      [
        "Potentiel caché",
        labels.hiddenPotentialLabel,
      ],

      [
        "Ce qui peut encore prendre de l’ampleur",
        labels.hiddenPotentialTitle,
      ],

      [
        "Votre manière naturelle d’exprimer ce talent",
        labels.naturalExpression,
      ],

      [
        "« Un talent caché n’est pas toujours une capacité inconnue. Il peut être une qualité que vous utilisez depuis longtemps sans reconnaître sa véritable valeur. »",
        labels.quote,
      ],

      /*
      |--------------------------------------------------------------------------
      | Page 2
      |--------------------------------------------------------------------------
      */

      [
        "Vos ressources complémentaires",
        labels.complementaryResources,
      ],

      [
        "Intelligence, expansion, originalité et réalisation",
        labels.intelligenceExpansion,
      ],

      [
        "Jupiter montre les domaines où votre confiance peut s’élargir. Mercure décrit votre intelligence et votre manière d’apprendre. Uranus révèle votre originalité, tandis que le Milieu du Ciel indique les qualités qui peuvent devenir visibles dans votre parcours professionnel.",
        labels.complementaryIntro,
      ],

      [
        "Votre capacité d’expansion, de confiance et de croissance.",
        labels.jupiterRole,
      ],

      [
        "Votre intelligence, votre communication et votre méthode d’apprentissage.",
        labels.mercuryRole,
      ],

      [
        "Votre originalité et votre capacité à innover.",
        labels.uranusRole,
      ],

      [
        "Les qualités qui peuvent prendre une place visible dans votre vocation.",
        labels.midheavenRole,
      ],

      [
        "Votre intelligence naturelle",
        labels.naturalIntelligence,
      ],

      [
        "Votre force d’innovation",
        labels.innovationStrength,
      ],

      [
        "Votre potentiel visible",
        labels.visiblePotential,
      ],

      /*
      |--------------------------------------------------------------------------
      | Page 3
      |--------------------------------------------------------------------------
      */

      [
        "Déployer votre potentiel",
        labels.developPotential,
      ],

      [
        "Donner davantage de place à ce qui existe déjà en vous",
        labels.giveMoreSpace,
      ],

      [
        "Un potentiel devient un talent pleinement disponible lorsqu’il est reconnu, pratiqué et intégré dans des situations concrètes. Vous n’avez pas besoin de tout changer. Il suffit souvent de donner plus de place à une qualité déjà présente.",
        labels.developmentIntro,
      ],

      [
        "Force sous-utilisée",
        labels.underusedStrengthLabel,
      ],

      [
        "Ce que vous pourriez davantage reconnaître",
        labels.recognizeMore,
      ],

      [
        "Développement",
        labels.developmentLabel,
      ],

      [
        "Comment faire grandir ce potentiel",
        labels.growPotential,
      ],

      [
        "Trois manières de développer vos talents",
        labels.threeWays,
      ],

      [
        "Observez les situations dans lesquelles les autres viennent naturellement chercher votre aide, votre opinion ou votre présence.",
        labels.step1,
      ],

      [
        "Identifiez les tâches qui vous semblent simples, mais qui représentent une difficulté réelle pour d’autres personnes.",
        labels.step2,
      ],

      [
        "Choisissez un projet concret dans lequel vous pourrez pratiquer cette capacité de manière régulière et visible.",
        labels.step3,
      ],

      [
        "Votre clé Signature",
        labels.signatureKey,
      ],

      [
        "Un talent devient une contribution",
        labels.talentContribution,
      ],

      [
        "Plus vous reconnaissez la valeur de vos capacités naturelles, plus vous pouvez les utiliser consciemment au lieu de les considérer comme ordinaires.",
        labels.closingText,
      ],
    ];

  for (
    const [from, to] of replacements
  ) {
    out =
      replaceFlexibleText(
        out,
        from,
        to,
      );
  }

  /*
  |--------------------------------------------------------------------------
  | Noms visibles des points / planètes
  |--------------------------------------------------------------------------
  |
  | IMPORTANT :
  | on ne touche pas aux clés techniques :
  |
  | "Jupiter"
  | "Mercury"
  | "Uranus"
  | "Sun"
  |
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    />\s*Jupiter\s*</g,
    `>${labels.jupiter}<`,
  );

  out = out.replace(
    />\s*Mercure\s*</g,
    `>${labels.mercury}<`,
  );

  out = out.replace(
    />\s*Uranus\s*</g,
    `>${labels.uranus}<`,
  );

  out = out.replace(
    />\s*Milieu du Ciel\s*</g,
    `>${labels.midheaven}<`,
  );

  return out;
}
