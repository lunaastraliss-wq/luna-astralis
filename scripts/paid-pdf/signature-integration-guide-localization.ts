import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<
    PaidPdfLocale,
    "fr"
  >;

type IntegrationProfile = {
  title: string;
  introduction: string;
  observe: string;
  nourish: string;
  balance: string;
  release: string;
  dailyAction: string;
  relationshipAction: string;
  professionalAction: string;
  innerAction: string;
  affirmation: string;
};

type IntegrationLabels = {
  analysis: string;
  guideTitle: string;
  guideSubtitle: string;

  integrationDirection: string;

  observeLabel: string;
  observeTitle: string;

  nourishLabel: string;
  nourishTitle: string;

  balanceLabel: string;
  balanceTitle: string;

  releaseLabel: string;
  releaseTitle: string;

  quote: string;

  actionPlan: string;
  integrateLife: string;
  actionIntro: string;

  daily: string;
  relationships: string;
  professionalLife: string;
  innerWorld: string;

  astrologicalMarkers: string;
  fourForces: string;
  fourForcesIntro: string;

  sun: string;
  moon: string;
  jupiter: string;
  saturn: string;

  sunRole: string;
  moonRole: string;
  jupiterRole: string;
  saturnRole: string;

  protectBalance: string;
  buildMastery: string;

  threeCommitments: string;

  commitment1: string;
  commitment2: string;
  commitment3: string;

  signatureAffirmation: string;

  moonFallback: string;
  saturnFallback: string;

  unspecified: string;
  different: string;

  fire: string;
  earth: string;
  air: string;
  water: string;

  cardinal: string;
  fixed: string;
  mutable: string;

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
      IntegrationProfile
    >;

  moonGuidance:
    Record<
      string,
      string
    >;

  saturnGuidance:
    Record<
      string,
      string
    >;
};

const LABELS:
Record<
  NonFrenchLocale,
  IntegrationLabels
> = {
  en: {
    analysis:
      "Signature Analysis",

    guideTitle:
      "Your integration guide",

    guideSubtitle:
      "Concrete reference points to use your chart in your choices, relationships, and daily evolution.",

    integrationDirection:
      "Your integration direction",

    observeLabel:
      "To observe",

    observeTitle:
      "The reflex that deserves your attention",

    nourishLabel:
      "To nourish",

    nourishTitle:
      "The quality that supports your evolution",

    balanceLabel:
      "To balance",

    balanceTitle:
      "The polarity to develop",

    releaseLabel:
      "To release",

    releaseTitle:
      "What should no longer direct your choices",

    quote:
      "“Your chart becomes truly useful when it helps you recognize your automatic patterns, better understand your needs, and choose a more conscious response.”",

    actionPlan:
      "Your personal action plan",

    integrateLife:
      "Integrating your chart into the essential areas of your life",

    actionIntro:
      "Integration does not require changing your entire life all at once. It is built through repeated decisions, simple habits, and different responses that you choose when facing familiar situations.",

    daily:
      "In your daily life",

    relationships:
      "In your relationships",

    professionalLife:
      "In your professional life",

    innerWorld:
      "In your inner world",

    astrologicalMarkers:
      "Your astrological reference points",

    fourForces:
      "Four forces to use together",

    fourForcesIntro:
      "The Sun gives direction, the Moon protects your emotional balance, the Ascendant describes your first response to the world, Jupiter opens possibilities, and Saturn builds mastery.",

    sun:
      "Sun",

    moon:
      "Moon",

    jupiter:
      "Jupiter",

    saturn:
      "Saturn",

    sunRole:
      "The direction you are consciously seeking to develop.",

    moonRole:
      "Your emotional needs and your inner security.",

    jupiterRole:
      "Your confidence, expansion, and possibilities.",

    saturnRole:
      "Your mastery, limits, and lasting learning.",

    protectBalance:
      "To protect your emotional balance",

    buildMastery:
      "To build your mastery",

    threeCommitments:
      "Three personal commitments",

    commitment1:
      "Recognize your needs before they become fatigue, frustration, or withdrawal.",

    commitment2:
      "Choose a realistic action instead of waiting for a perfect transformation.",

    commitment3:
      "Read this guide again when you are going through a period of doubt, change, or decision.",

    signatureAffirmation:
      "Your Signature affirmation",

    moonFallback:
      "Your Moon shows the way your emotional world naturally regains a sense of security.",

    saturnFallback:
      "Saturn shows the quality you gradually develop through patience, limits, and experience.",

    unspecified:
      "unspecified",

    different:
      "different",

    fire:
      "Fire",

    earth:
      "Earth",

    air:
      "Air",

    water:
      "Water",

    cardinal:
      "Cardinal",

    fixed:
      "Fixed",

    mutable:
      "Mutable",

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
          "Transform your energy into conscious direction",

        introduction:
          "Your integration requires a more conscious use of your power of initiative. You move quickly when your energy meets a clear goal, but you benefit from slowing down enough to distinguish genuine urgency from impulse.",

        observe:
          "Observe the moments when you react before identifying what you truly want to defend or build.",

        nourish:
          "Nourish your courage, autonomy, and ability to begin.",

        balance:
          "Balance your spontaneity with more patience, listening, and continuity.",

        release:
          "Release the need to constantly prove your strength through immediate action.",

        dailyAction:
          "Choose one main priority each day and commit your energy to it until you reach a concrete step.",

        relationshipAction:
          "Express your need clearly before frustration turns into reaction.",

        professionalAction:
          "Prioritize projects in which you can initiate, decide, and quickly see a result.",

        innerAction:
          "Give yourself a few minutes before making any decision under the influence of a strong emotion.",

        affirmation:
          "I direct my energy with courage, awareness, and consistency.",
      },

      Taurus: {
        title:
          "Evolve your foundations without losing your stability",

        introduction:
          "Your integration requires the ability to preserve what is essential while accepting necessary transformations. Your consistency is an immense strength when it supports growth rather than immobility.",

        observe:
          "Observe the situations you maintain only because they are familiar or reassuring.",

        nourish:
          "Nourish your stability, patience, and connection with simple pleasures.",

        balance:
          "Balance your need for security with a gradual openness to change.",

        release:
          "Release the idea that every transformation threatens what you have built.",

        dailyAction:
          "Introduce one small concrete change into a habit that has become too rigid.",

        relationshipAction:
          "Express your need for stability without waiting for the other person to guess it.",

        professionalAction:
          "Build your projects through regular and measurable steps.",

        innerAction:
          "Return to your body, breathing, and sensations when anxiety increases.",

        affirmation:
          "I can evolve while remaining firmly rooted.",
      },

      Gemini: {
        title:
          "Transform your ideas into deep understanding",

        introduction:
          "Your integration requires the ability to choose, deepen, and transmit. Your curiosity is a great resource, but it becomes even more powerful when organized around a few essential directions.",

        observe:
          "Observe the moments when you change subject or direction before truly going deeper.",

        nourish:
          "Nourish your curiosity, communication, and desire to learn.",

        balance:
          "Balance variety with greater concentration and continuity.",

        release:
          "Release the need to understand everything at the same time.",

        dailyAction:
          "Devote a defined period to one subject or project without opening a new direction.",

        relationshipAction:
          "Say what you feel without immediately transforming the emotion into analysis.",

        professionalAction:
          "Use your ability to explain, connect, and simplify information.",

        innerAction:
          "Write down your thoughts in order to identify the central idea or emotion.",

        affirmation:
          "I give depth and direction to my intelligence.",
      },

      Cancer: {
        title:
          "Create inner security capable of supporting your sensitivity",

        introduction:
          "Your integration requires recognizing your emotional needs and creating protective boundaries. Your sensitivity becomes a strength when you stop experiencing it only through the needs of others.",

        observe:
          "Observe the moments when you care for everyone without recognizing your own fatigue.",

        nourish:
          "Nourish your need for intimacy, security, and sincere connections.",

        balance:
          "Balance your protective instinct with greater attention to your own needs.",

        release:
          "Release emotional responsibilities that do not belong to you.",

        dailyAction:
          "Create a moment each day when you can withdraw, breathe, and reconnect with your own inner state.",

        relationshipAction:
          "Express a need before it turns into resentment.",

        professionalAction:
          "Use your ability to understand, welcome, and create a humane atmosphere.",

        innerAction:
          "Distinguish what you are feeling from what others around you are feeling.",

        affirmation:
          "I care for myself with the same presence I offer others.",
      },

      Leo: {
        title:
          "Shine from your truth rather than from the need for approval",

        introduction:
          "Your integration requires freer and more creative self-expression that depends less on outside judgment. Your light becomes natural when you create because it genuinely reflects who you are.",

        observe:
          "Observe the moments when your confidence depends entirely on the reaction you receive.",

        nourish:
          "Nourish your creativity, generosity, and ability to inspire.",

        balance:
          "Balance your need for recognition with more stable inner validation.",

        release:
          "Release the fear of not being remarkable enough.",

        dailyAction:
          "Create or express something every day without immediately trying to evaluate it.",

        relationshipAction:
          "Show your vulnerability instead of automatically protecting your pride.",

        professionalAction:
          "Take a visible role in projects where your personality and creativity bring genuine value.",

        innerAction:
          "Recognize one personal quality without waiting for someone else to confirm it.",

        affirmation:
          "My light remains real even when it is not applauded.",
      },

      Virgo: {
        title:
          "Transform your high standards into useful and compassionate competence",

        introduction:
          "Your integration requires a more flexible relationship with imperfection. Your precision and discernment become strengths when you use them to improve rather than condemn.",

        observe:
          "Observe the moments when fear of error delays an action that is already achievable.",

        nourish:
          "Nourish your sense of organization, competence, and ability to help concretely.",

        balance:
          "Balance your high standards with more tolerance and realism.",

        release:
          "Release the idea that your value depends on your ability to do everything correctly.",

        dailyAction:
          "Define what is good enough before beginning a task.",

        relationshipAction:
          "Express your affection without translating it only into help or corrections.",

        professionalAction:
          "Value your ability to create methods, solve problems, and improve systems.",

        innerAction:
          "Replace one inner criticism with a simple and constructive action.",

        affirmation:
          "I progress with precision without demanding perfection.",
      },

      Libra: {
        title:
          "Create harmony without moving away from your own truth",

        introduction:
          "Your integration requires the ability to cooperate without disappearing. Your sense of balance becomes stronger when your own position is also part of the relationship.",

        observe:
          "Observe the moments when you delay a choice in order to avoid displeasing someone.",

        nourish:
          "Nourish your sense of justice, beauty, and cooperation.",

        balance:
          "Balance your attention to others with clearer listening to your own needs.",

        release:
          "Release the belief that disagreement necessarily destroys a relationship.",

        dailyAction:
          "Make one small decision without seeking several forms of outside validation.",

        relationshipAction:
          "Express your position before looking for a compromise.",

        professionalAction:
          "Use your ability to negotiate, connect, and create a collaborative atmosphere.",

        innerAction:
          "Ask yourself what you would choose if you were not afraid of disappointing someone.",

        affirmation:
          "I can create harmony without abandoning my truth.",
      },

      Scorpio: {
        title:
          "Transform your intensity into conscious power",

        introduction:
          "Your integration requires a freer relationship with vulnerability, control, and transformation. Your depth becomes a strength when you use it to understand and regenerate rather than protect yourself from every possible loss.",

        observe:
          "Observe the moments when distrust or the need to understand every detail prevents you from moving forward.",

        nourish:
          "Nourish your depth, intuition, and capacity for transformation.",

        balance:
          "Balance your intensity with more trust, flexibility, and gradual openness.",

        release:
          "Release the need to control everything before committing yourself.",

        dailyAction:
          "Choose one situation in which you can release a small part of your control.",

        relationshipAction:
          "Share an emotional truth before it turns into silence or distance.",

        professionalAction:
          "Use your ability to analyze deep issues, manage crises, and understand hidden mechanisms.",

        innerAction:
          "Ask yourself whether your vigilance belongs to the present or to an old wound.",

        affirmation:
          "My vulnerability and my power can exist together.",
      },

      Sagittarius: {
        title:
          "Give real structure to your need for freedom and meaning",

        introduction:
          "Your integration requires the union of exploration and commitment. Your vision becomes more powerful when you accept giving it a concrete and lasting form.",

        observe:
          "Observe the moments when you seek a new horizon in order to avoid a present constraint or responsibility.",

        nourish:
          "Nourish your need for meaning, learning, and openness.",

        balance:
          "Balance your freedom with greater continuity in your choices.",

        release:
          "Release the idea that commitment automatically closes every possibility.",

        dailyAction:
          "Choose one direction and move forward in it before opening another.",

        relationshipAction:
          "Remain present during difficult conversations instead of immediately taking distance.",

        professionalAction:
          "Use your ability to transmit a vision, teach, and inspire.",

        innerAction:
          "Connect each major ideal with one concrete action you can take this week.",

        affirmation:
          "I give lasting form to the freedom that inspires me.",
      },

      Capricorn: {
        title:
          "Build without making effort the only proof of your value",

        introduction:
          "Your integration requires a more human definition of success. Your discipline and ambition are great strengths, but they must support your life rather than exhaust it.",

        observe:
          "Observe the moments when you increase your effort even though what you really need is rest or support.",

        nourish:
          "Nourish your sense of responsibility, patience, and ability to build.",

        balance:
          "Balance your ambition with better awareness of your limits.",

        release:
          "Release the idea that everything valuable must be difficult.",

        dailyAction:
          "Define three realistic priorities instead of an impossible list to complete.",

        relationshipAction:
          "Allow others to support you without believing that it diminishes your autonomy.",

        professionalAction:
          "Use your ability to organize, structure, and build for the long term.",

        innerAction:
          "Measure your progress through coherence rather than performance alone.",

        affirmation:
          "I build with ambition without sacrificing my balance.",
      },

      Aquarius: {
        title:
          "Turn your difference into a concrete and human contribution",

        introduction:
          "Your integration requires connecting your independence with genuine participation. Your originality becomes a collective strength when you agree to give it an accessible form.",

        observe:
          "Observe the moments when you distance yourself only to avoid feeling limited or vulnerable.",

        nourish:
          "Nourish your freedom of thought, originality, and vision of the future.",

        balance:
          "Balance your independence with greater emotional presence and collaboration.",

        release:
          "Release the belief that belonging requires losing your individuality.",

        dailyAction:
          "Transform one original idea into a small concrete experiment.",

        relationshipAction:
          "Explain your need for space without emotionally disappearing.",

        professionalAction:
          "Use your ability to innovate, modernize, and understand collective movements.",

        innerAction:
          "Identify one way to contribute without giving up your autonomy.",

        affirmation:
          "My difference becomes a strength when I share it consciously.",
      },

      Pisces: {
        title:
          "Protect your sensitivity so that it can take concrete form",

        introduction:
          "Your integration requires a clearer distinction between intuition, compassion, and emotional absorption. Your sensitivity becomes a lasting strength when supported by clear boundaries and habits.",

        observe:
          "Observe the moments when you carry an emotion, responsibility, or expectation that does not belong to you.",

        nourish:
          "Nourish your intuition, imagination, and compassion.",

        balance:
          "Balance your openness with concrete boundaries and better protection of your energy.",

        release:
          "Release the need to save, repair, or absorb other people's difficulties.",

        dailyAction:
          "Create a moment of silence, creativity, or withdrawal to reconnect with your own inner state.",

        relationshipAction:
          "Set a boundary before your availability turns into exhaustion.",

        professionalAction:
          "Give concrete structure to your intuitions, creations, or ability to support others.",

        innerAction:
          "Regularly ask yourself: does this emotion really belong to me?",

        affirmation:
          "My boundaries allow my sensitivity to become a strength.",
      },
    },

    moonGuidance: {
      Aries:
        "Your Moon in Aries regulates itself through movement, honesty, and simple action.",

      Taurus:
        "Your Moon in Taurus regains balance through stability, rest, and returning to the body.",

      Gemini:
        "Your Moon in Gemini finds calm through words, writing, and clear communication.",

      Cancer:
        "Your Moon in Cancer regulates itself in an intimate, secure, and emotionally reliable environment.",

      Leo:
        "Your Moon in Leo regains balance through creativity, warmth, and sincere expression.",

      Virgo:
        "Your Moon in Virgo finds calm through a simple routine, useful action, and an organized environment.",

      Libra:
        "Your Moon in Libra regains balance through respectful dialogue and a more harmonious relationship.",

      Scorpio:
        "Your Moon in Scorpio regulates itself through emotional truth, trust, and conscious transformation.",

      Sagittarius:
        "Your Moon in Sagittarius finds calm through space, movement, and a meaningful perspective.",

      Capricorn:
        "Your Moon in Capricorn regains balance through structure, rest, and permission to receive support.",

      Aquarius:
        "Your Moon in Aquarius regulates itself through perspective, freedom, and a space where your difference is respected.",

      Pisces:
        "Your Moon in Pisces finds calm through silence, creativity, and protective boundaries.",
    },

    saturnGuidance: {
      Aries:
        "Your mastery grows when you act without immediately trying to prove your strength.",

      Taurus:
        "Your mastery grows when you gradually adapt your foundations.",

      Gemini:
        "Your mastery grows when you express your ideas before they are perfect.",

      Cancer:
        "Your mastery grows when you recognize and express your emotional needs.",

      Leo:
        "Your mastery grows when you create without making approval a condition.",

      Virgo:
        "Your mastery grows when you accept imperfect but steady progress.",

      Libra:
        "Your mastery grows when you take a position without fearing every disagreement.",

      Scorpio:
        "Your mastery grows when you develop gradual trust without abandoning your discernment.",

      Sagittarius:
        "Your mastery grows when you give concrete continuity to your vision.",

      Capricorn:
        "Your mastery grows when your discipline also respects your humanity.",

      Aquarius:
        "Your mastery grows when your originality becomes part of genuine commitment.",

      Pisces:
        "Your mastery grows when your sensitivity is supported by simple and stable boundaries.",
    },
  },

  es: {
    analysis: "Análisis Firma",
    guideTitle: "Tu guía de integración",
    guideSubtitle:
      "Referencias concretas para utilizar tu carta en tus elecciones, tus relaciones y tu evolución cotidiana.",
    integrationDirection:
      "Tu dirección de integración",

    observeLabel: "A observar",
    observeTitle:
      "El reflejo que merece tu atención",

    nourishLabel: "A nutrir",
    nourishTitle:
      "La cualidad que sostiene tu evolución",

    balanceLabel: "A equilibrar",
    balanceTitle:
      "La polaridad que debes desarrollar",

    releaseLabel: "A liberar",
    releaseTitle:
      "Aquello que ya no debe dirigir tus elecciones",

    quote:
      "«Tu carta se vuelve realmente útil cuando te ayuda a reconocer tus automatismos, comprender mejor tus necesidades y elegir una respuesta más consciente.»",

    actionPlan:
      "Tu plan de acción personal",

    integrateLife:
      "Integrar tu carta en los ámbitos esenciales de tu vida",

    actionIntro:
      "La integración no requiere modificar toda tu vida de una sola vez. Se construye mediante decisiones repetidas, hábitos sencillos y respuestas diferentes que eliges frente a situaciones familiares.",

    daily:
      "En tu vida cotidiana",

    relationships:
      "En tus relaciones",

    professionalLife:
      "En tu vida profesional",

    innerWorld:
      "En tu mundo interior",

    astrologicalMarkers:
      "Tus referencias astrológicas",

    fourForces:
      "Cuatro fuerzas para utilizar juntas",

    fourForcesIntro:
      "El Sol da la dirección, la Luna protege tu equilibrio emocional, el Ascendente describe tu primera respuesta al mundo, Júpiter abre las posibilidades y Saturno construye el dominio.",

    sun: "Sol",
    moon: "Luna",
    jupiter: "Júpiter",
    saturn: "Saturno",

    sunRole:
      "La dirección que buscas desarrollar conscientemente.",

    moonRole:
      "Tus necesidades emocionales y tu seguridad interior.",

    jupiterRole:
      "Tu confianza, tu expansión y tus posibilidades.",

    saturnRole:
      "Tu dominio, tus límites y tus aprendizajes duraderos.",

    protectBalance:
      "Para proteger tu equilibrio emocional",

    buildMastery:
      "Para construir tu dominio",

    threeCommitments:
      "Tres compromisos personales",

    commitment1:
      "Reconocer tus necesidades antes de que se conviertan en cansancio, frustración o retirada.",

    commitment2:
      "Elegir una acción realista en lugar de esperar una transformación perfecta.",

    commitment3:
      "Volver a leer esta guía cuando atravieses un período de duda, cambio o decisión.",

    signatureAffirmation:
      "Tu afirmación Firma",

    moonFallback:
      "Tu Luna muestra la manera en que tu mundo emocional recupera naturalmente una sensación de seguridad.",

    saturnFallback:
      "Saturno muestra la cualidad que desarrollas progresivamente gracias a la paciencia, los límites y la experiencia.",

    unspecified: "no especificado",
    different: "diferente",

    fire: "Fuego",
    earth: "Tierra",
    air: "Aire",
    water: "Agua",

    cardinal: "Cardinal",
    fixed: "Fijo",
    mutable: "Mutable",

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
          "Transformar tu energía en una dirección consciente",
        introduction:
          "Tu integración pasa por un uso más consciente de tu fuerza de iniciativa. Avanzas rápidamente cuando tu energía encuentra un objetivo claro, pero ganas al disminuir el ritmo lo suficiente para distinguir la verdadera urgencia del impulso.",
        observe:
          "Observa los momentos en que reaccionas antes de identificar aquello que realmente quieres defender o construir.",
        nourish:
          "Nutre tu valor, tu autonomía y tu capacidad para comenzar.",
        balance:
          "Equilibra tu espontaneidad con mayor paciencia, escucha y continuidad.",
        release:
          "Libera la necesidad de demostrar constantemente tu fuerza mediante la acción inmediata.",
        dailyAction:
          "Elige cada día una prioridad principal y compromete tu energía hasta alcanzar una etapa concreta.",
        relationshipAction:
          "Expresa claramente tu necesidad antes de que la frustración se convierta en reacción.",
        professionalAction:
          "Prioriza los proyectos donde puedas iniciar, decidir y ver rápidamente un resultado.",
        innerAction:
          "Concédete unos minutos antes de cualquier decisión tomada bajo una emoción fuerte.",
        affirmation:
          "Dirijo mi energía con valor, conciencia y constancia.",
      },

      Taurus: {
        title:
          "Hacer evolucionar tus bases sin perder tu estabilidad",
        introduction:
          "Tu integración pasa por conservar aquello que es esencial aceptando al mismo tiempo las transformaciones necesarias. Tu constancia es una fuerza inmensa cuando sostiene el crecimiento en lugar de la inmovilidad.",
        observe:
          "Observa las situaciones que mantienes únicamente porque son conocidas o tranquilizadoras.",
        nourish:
          "Nutre tu estabilidad, tu paciencia y tu relación con los placeres sencillos.",
        balance:
          "Equilibra tu necesidad de seguridad con una apertura progresiva al cambio.",
        release:
          "Libera la idea de que toda transformación amenaza aquello que has construido.",
        dailyAction:
          "Introduce un pequeño cambio concreto en un hábito que se ha vuelto demasiado rígido.",
        relationshipAction:
          "Expresa tus necesidades de estabilidad sin esperar que la otra persona las adivine.",
        professionalAction:
          "Construye tus proyectos mediante etapas regulares y medibles.",
        innerAction:
          "Regresa al cuerpo, la respiración y las sensaciones cuando aumenta la inquietud.",
        affirmation:
          "Puedo evolucionar permaneciendo sólidamente arraigado.",
      },

      Gemini: {
        title:
          "Transformar tus ideas en comprensión profunda",
        introduction:
          "Tu integración pasa por la capacidad de elegir, profundizar y transmitir. Tu curiosidad es una riqueza, pero se vuelve aún más poderosa cuando se organiza alrededor de algunas direcciones esenciales.",
        observe:
          "Observa los momentos en que cambias de tema o dirección antes de haber profundizado realmente.",
        nourish:
          "Nutre tu curiosidad, tu comunicación y tu necesidad de aprender.",
        balance:
          "Equilibra la variedad con una mayor concentración y continuidad.",
        release:
          "Libera la necesidad de comprenderlo todo al mismo tiempo.",
        dailyAction:
          "Dedica un tiempo definido a un solo tema o proyecto sin abrir una nueva dirección.",
        relationshipAction:
          "Expresa lo que sientes sin transformar inmediatamente la emoción en análisis.",
        professionalAction:
          "Utiliza tu capacidad para explicar, relacionar y simplificar información.",
        innerAction:
          "Escribe tus pensamientos para identificar la idea o emoción central.",
        affirmation:
          "Doy profundidad y dirección a mi inteligencia.",
      },

      Cancer: {
        title:
          "Crear una seguridad interior capaz de sostener tu sensibilidad",
        introduction:
          "Tu integración pasa por reconocer tus necesidades emocionales y crear límites protectores. Tu sensibilidad se convierte en una fuerza cuando dejas de vivirla únicamente a través de las necesidades de los demás.",
        observe:
          "Observa los momentos en que cuidas de todos sin reconocer tu propio cansancio.",
        nourish:
          "Nutre tu necesidad de intimidad, seguridad y vínculos sinceros.",
        balance:
          "Equilibra tu instinto protector con una mayor atención a tus propias necesidades.",
        release:
          "Libera las responsabilidades emocionales que no te pertenecen.",
        dailyAction:
          "Crea cada día un momento para retirarte, respirar y recuperar tu propio estado interior.",
        relationshipAction:
          "Expresa una necesidad antes de que se convierta en resentimiento.",
        professionalAction:
          "Utiliza tu capacidad para comprender, acoger y crear un clima humano.",
        innerAction:
          "Distingue aquello que sientes de aquello que sienten los demás a tu alrededor.",
        affirmation:
          "Cuido de mí con la misma presencia que ofrezco a los demás.",
      },

      Leo: {
        title:
          "Brillar desde tu verdad y no desde la necesidad de aprobación",
        introduction:
          "Tu integración pasa por una expresión personal más libre, creativa y menos dependiente de la mirada exterior. Tu luz se vuelve natural cuando creas porque aquello te representa.",
        observe:
          "Observa los momentos en que tu confianza depende completamente de la reacción recibida.",
        nourish:
          "Nutre tu creatividad, tu generosidad y tu capacidad de inspirar.",
        balance:
          "Equilibra tu necesidad de reconocimiento con una validación interior más estable.",
        release:
          "Libera el miedo a no ser suficientemente notable.",
        dailyAction:
          "Crea o expresa algo cada día sin intentar evaluarlo inmediatamente.",
        relationshipAction:
          "Muestra tu vulnerabilidad en lugar de proteger sistemáticamente tu orgullo.",
        professionalAction:
          "Ocupa un lugar visible en los proyectos donde tu personalidad y creatividad aportan un valor real.",
        innerAction:
          "Reconoce una cualidad personal sin esperar que otra persona la confirme.",
        affirmation:
          "Mi luz sigue siendo real incluso cuando no recibe aplausos.",
      },

      Virgo: {
        title:
          "Transformar tu exigencia en una competencia útil y amable",
        introduction:
          "Tu integración pasa por una relación más flexible con la imperfección. Tu precisión y discernimiento se convierten en fuerzas cuando los utilizas para mejorar y no para condenar.",
        observe:
          "Observa los momentos en que el miedo al error retrasa una acción que ya es realizable.",
        nourish:
          "Nutre tu sentido de la organización, tu competencia y tu capacidad para ayudar concretamente.",
        balance:
          "Equilibra tu exigencia con más tolerancia y realismo.",
        release:
          "Libera la idea de que tu valor depende de tu capacidad para hacerlo todo correctamente.",
        dailyAction:
          "Define una versión suficientemente buena antes de comenzar una tarea.",
        relationshipAction:
          "Expresa tu afecto sin traducirlo únicamente en ayuda o correcciones.",
        professionalAction:
          "Valora tu capacidad para crear métodos, resolver problemas y mejorar.",
        innerAction:
          "Sustituye una crítica interior por una acción sencilla y constructiva.",
        affirmation:
          "Progreso con precisión sin exigirme perfección.",
      },

      Libra: {
        title:
          "Crear armonía sin alejarte de tu propia verdad",
        introduction:
          "Tu integración pasa por cooperar sin borrarte. Tu sentido del equilibrio se vuelve más sólido cuando tu propia posición forma parte de la relación.",
        observe:
          "Observa los momentos en que retrasas una elección para evitar desagradar.",
        nourish:
          "Nutre tu sentido de la justicia, la belleza y la cooperación.",
        balance:
          "Equilibra tu atención hacia los demás con una escucha más clara de tus propias necesidades.",
        release:
          "Libera la creencia de que un desacuerdo destruye necesariamente una relación.",
        dailyAction:
          "Toma una pequeña decisión sin pedir varias validaciones exteriores.",
        relationshipAction:
          "Expresa tu posición antes de buscar un compromiso.",
        professionalAction:
          "Utiliza tu capacidad para negociar, relacionar y crear un clima de colaboración.",
        innerAction:
          "Pregúntate qué elegirías si no tuvieras miedo de decepcionar.",
        affirmation:
          "Puedo crear armonía sin abandonar mi verdad.",
      },

      Scorpio: {
        title:
          "Transformar tu intensidad en poder consciente",
        introduction:
          "Tu integración pasa por una relación más libre con la vulnerabilidad, el control y la transformación. Tu profundidad se convierte en una fuerza cuando la utilizas para comprender y regenerar en lugar de protegerte de toda pérdida.",
        observe:
          "Observa los momentos en que la desconfianza o la necesidad de comprender cada detalle te impiden avanzar.",
        nourish:
          "Nutre tu profundidad, tu intuición y tu capacidad de transformación.",
        balance:
          "Equilibra tu intensidad con más confianza, flexibilidad y apertura progresiva.",
        release:
          "Libera la necesidad de controlarlo todo antes de comprometerte.",
        dailyAction:
          "Elige una situación en la que puedas soltar una pequeña parte del control.",
        relationshipAction:
          "Comparte una verdad emocional antes de que se transforme en silencio o distancia.",
        professionalAction:
          "Utiliza tu capacidad para analizar cuestiones profundas, gestionar crisis y comprender mecanismos ocultos.",
        innerAction:
          "Pregúntate si tu vigilancia corresponde al presente o a una antigua herida.",
        affirmation:
          "Mi vulnerabilidad y mi poder pueden existir juntos.",
      },

      Sagittarius: {
        title:
          "Dar una estructura real a tu necesidad de libertad y sentido",
        introduction:
          "Tu integración pasa por unir exploración y compromiso. Tu visión se vuelve más poderosa cuando aceptas darle una forma concreta y duradera.",
        observe:
          "Observa los momentos en que buscas un nuevo horizonte para evitar una limitación o responsabilidad presente.",
        nourish:
          "Nutre tu necesidad de sentido, aprendizaje y apertura.",
        balance:
          "Equilibra tu libertad con una mayor continuidad en tus elecciones.",
        release:
          "Libera la idea de que un compromiso cierra necesariamente todas las posibilidades.",
        dailyAction:
          "Elige una dirección y avanza en ella antes de abrir una nueva.",
        relationshipAction:
          "Permanece presente en las conversaciones difíciles en lugar de tomar distancia inmediatamente.",
        professionalAction:
          "Utiliza tu capacidad para transmitir una visión, enseñar e inspirar.",
        innerAction:
          "Relaciona cada gran ideal con una acción concreta realizable esta semana.",
        affirmation:
          "Doy una forma duradera a la libertad que me inspira.",
      },

      Capricorn: {
        title:
          "Construir sin hacer del esfuerzo la única prueba de tu valor",
        introduction:
          "Tu integración pasa por una definición más humana del éxito. Tu disciplina y ambición son grandes fuerzas, pero deben sostener tu vida y no agotarla.",
        observe:
          "Observa los momentos en que aumentas tus esfuerzos cuando en realidad necesitas descanso o apoyo.",
        nourish:
          "Nutre tu sentido de responsabilidad, tu paciencia y tu capacidad para construir.",
        balance:
          "Equilibra tu ambición con una mejor escucha de tus límites.",
        release:
          "Libera la idea de que todo aquello que tiene valor debe ser difícil.",
        dailyAction:
          "Define tres prioridades realistas en lugar de una lista imposible de terminar.",
        relationshipAction:
          "Permite que los demás te apoyen sin pensar que eso disminuye tu autonomía.",
        professionalAction:
          "Utiliza tu capacidad para organizar, estructurar y construir a largo plazo.",
        innerAction:
          "Mide tu progreso por la coherencia y no únicamente por el rendimiento.",
        affirmation:
          "Construyo con ambición sin sacrificar mi equilibrio.",
      },

      Aquarius: {
        title:
          "Convertir tu diferencia en una contribución concreta y humana",
        introduction:
          "Tu integración pasa por relacionar tu independencia con una verdadera participación. Tu originalidad se convierte en una fuerza colectiva cuando aceptas darle una forma accesible.",
        observe:
          "Observa los momentos en que tomas distancia únicamente para evitar sentirte limitado o vulnerable.",
        nourish:
          "Nutre tu libertad de pensamiento, tu originalidad y tu visión del futuro.",
        balance:
          "Equilibra tu independencia con mayor presencia emocional y colaboración.",
        release:
          "Libera la creencia de que pertenecer exige perder tu singularidad.",
        dailyAction:
          "Transforma una idea original en una pequeña experimentación concreta.",
        relationshipAction:
          "Explica tu necesidad de espacio sin desaparecer emocionalmente.",
        professionalAction:
          "Utiliza tu capacidad para innovar, modernizar y comprender los movimientos colectivos.",
        innerAction:
          "Identifica una manera de contribuir sin renunciar a tu autonomía.",
        affirmation:
          "Mi diferencia se convierte en una fuerza cuando la comparto conscientemente.",
      },

      Pisces: {
        title:
          "Proteger tu sensibilidad para darle una forma concreta",
        introduction:
          "Tu integración pasa por distinguir mejor entre intuición, compasión y absorción emocional. Tu sensibilidad se convierte en una fuerza duradera cuando está sostenida por límites y hábitos claros.",
        observe:
          "Observa los momentos en que cargas una emoción, responsabilidad o expectativa que no te pertenece.",
        nourish:
          "Nutre tu intuición, tu imaginación y tu compasión.",
        balance:
          "Equilibra tu apertura con límites concretos y una mejor protección de tu energía.",
        release:
          "Libera la necesidad de salvar, reparar o absorber las dificultades de los demás.",
        dailyAction:
          "Crea un momento de silencio, creación o retiro para recuperar tu propio estado interior.",
        relationshipAction:
          "Pon un límite antes de que tu disponibilidad se convierta en agotamiento.",
        professionalAction:
          "Da una estructura concreta a tus intuiciones, creaciones o capacidad de acompañamiento.",
        innerAction:
          "Pregúntate regularmente: ¿esta emoción realmente me pertenece?",
        affirmation:
          "Mis límites permiten que mi sensibilidad se convierta en una fuerza.",
      },
    },

    moonGuidance: {
      Aries:
        "Tu Luna en Aries se regula mediante el movimiento, la franqueza y una acción sencilla.",
      Taurus:
        "Tu Luna en Tauro recupera su equilibrio mediante la estabilidad, el descanso y el regreso al cuerpo.",
      Gemini:
        "Tu Luna en Géminis se calma mediante las palabras, la escritura y un intercambio claro.",
      Cancer:
        "Tu Luna en Cáncer se regula en un entorno íntimo, seguro y emocionalmente fiable.",
      Leo:
        "Tu Luna en Leo recupera su equilibrio mediante la creación, el calor y una expresión sincera.",
      Virgo:
        "Tu Luna en Virgo se calma mediante una rutina sencilla, una acción útil y un entorno organizado.",
      Libra:
        "Tu Luna en Libra recupera su equilibrio mediante un diálogo respetuoso y una relación más armoniosa.",
      Scorpio:
        "Tu Luna en Escorpio se regula mediante la verdad emocional, la confianza y la transformación consciente.",
      Sagittarius:
        "Tu Luna en Sagitario se calma mediante el espacio, el movimiento y una perspectiva con sentido.",
      Capricorn:
        "Tu Luna en Capricornio recupera su equilibrio mediante la estructura, el descanso y el permiso para recibir apoyo.",
      Aquarius:
        "Tu Luna en Acuario se regula mediante la distancia, la libertad y un espacio donde se respete tu diferencia.",
      Pisces:
        "Tu Luna en Piscis se calma mediante el silencio, la creación y límites protectores.",
    },

    saturnGuidance: {
      Aries:
        "Tu dominio crece cuando actúas sin intentar demostrar inmediatamente tu fuerza.",
      Taurus:
        "Tu dominio crece cuando adaptas progresivamente tus bases.",
      Gemini:
        "Tu dominio crece cuando expresas tus ideas antes de que sean perfectas.",
      Cancer:
        "Tu dominio crece cuando reconoces y expresas tus necesidades emocionales.",
      Leo:
        "Tu dominio crece cuando creas sin convertir la aprobación en una condición.",
      Virgo:
        "Tu dominio crece cuando aceptas un progreso imperfecto pero constante.",
      Libra:
        "Tu dominio crece cuando tomas posición sin temer cada desacuerdo.",
      Scorpio:
        "Tu dominio crece cuando desarrollas una confianza progresiva sin renunciar a tu discernimiento.",
      Sagittarius:
        "Tu dominio crece cuando das continuidad concreta a tu visión.",
      Capricorn:
        "Tu dominio crece cuando tu disciplina también respeta tu humanidad.",
      Aquarius:
        "Tu dominio crece cuando tu originalidad forma parte de un compromiso real.",
      Pisces:
        "Tu dominio crece cuando tu sensibilidad está sostenida por límites sencillos y estables.",
    },
  },

  de: {
    analysis: "Signatur-Analyse",
    guideTitle:
      "Ihr Integrationsleitfaden",
    guideSubtitle:
      "Konkrete Orientierungspunkte, um Ihr Horoskop in Entscheidungen, Beziehungen und Ihrer täglichen Entwicklung zu nutzen.",
    integrationDirection:
      "Ihre Integrationsrichtung",

    observeLabel:
      "Zu beobachten",
    observeTitle:
      "Der Reflex, der Ihre Aufmerksamkeit verdient",

    nourishLabel:
      "Zu stärken",
    nourishTitle:
      "Die Qualität, die Ihre Entwicklung unterstützt",

    balanceLabel:
      "Auszugleichen",
    balanceTitle:
      "Die Polarität, die Sie entwickeln können",

    releaseLabel:
      "Loszulassen",
    releaseTitle:
      "Was Ihre Entscheidungen nicht länger bestimmen sollte",

    quote:
      "„Ihr Horoskop wird wirklich nützlich, wenn es Ihnen hilft, automatische Muster zu erkennen, Ihre Bedürfnisse besser zu verstehen und bewusster zu reagieren.“",

    actionPlan:
      "Ihr persönlicher Aktionsplan",

    integrateLife:
      "Ihr Horoskop in die wesentlichen Bereiche Ihres Lebens integrieren",

    actionIntro:
      "Integration verlangt nicht, Ihr gesamtes Leben auf einmal zu verändern. Sie entsteht durch wiederholte Entscheidungen, einfache Gewohnheiten und neue Reaktionen auf vertraute Situationen.",

    daily:
      "In Ihrem Alltag",

    relationships:
      "In Ihren Beziehungen",

    professionalLife:
      "In Ihrem Berufsleben",

    innerWorld:
      "In Ihrer inneren Welt",

    astrologicalMarkers:
      "Ihre astrologischen Orientierungspunkte",

    fourForces:
      "Vier Kräfte gemeinsam nutzen",

    fourForcesIntro:
      "Die Sonne gibt die Richtung vor, der Mond schützt Ihr emotionales Gleichgewicht, der Aszendent beschreibt Ihre erste Reaktion auf die Welt, Jupiter öffnet Möglichkeiten und Saturn entwickelt Meisterschaft.",

    sun: "Sonne",
    moon: "Mond",
    jupiter: "Jupiter",
    saturn: "Saturn",

    sunRole:
      "Die Richtung, die Sie bewusst entwickeln möchten.",

    moonRole:
      "Ihre emotionalen Bedürfnisse und Ihre innere Sicherheit.",

    jupiterRole:
      "Ihr Vertrauen, Ihre Expansion und Ihre Möglichkeiten.",

    saturnRole:
      "Ihre Meisterschaft, Ihre Grenzen und Ihre nachhaltigen Lernprozesse.",

    protectBalance:
      "Zum Schutz Ihres emotionalen Gleichgewichts",

    buildMastery:
      "Zum Aufbau Ihrer Meisterschaft",

    threeCommitments:
      "Drei persönliche Verpflichtungen",

    commitment1:
      "Erkennen Sie Ihre Bedürfnisse, bevor sie zu Müdigkeit, Frustration oder Rückzug werden.",

    commitment2:
      "Wählen Sie eine realistische Handlung, statt auf eine perfekte Veränderung zu warten.",

    commitment3:
      "Lesen Sie diesen Leitfaden erneut, wenn Sie eine Phase von Zweifel, Veränderung oder Entscheidung durchlaufen.",

    signatureAffirmation:
      "Ihre Signatur-Affirmation",

    moonFallback:
      "Ihr Mond zeigt, wie Ihre emotionale Welt auf natürliche Weise wieder ein Gefühl von Sicherheit findet.",

    saturnFallback:
      "Saturn zeigt die Qualität, die Sie durch Geduld, Grenzen und Erfahrung schrittweise entwickeln.",

    unspecified:
      "nicht angegeben",

    different:
      "anders",

    fire: "Feuer",
    earth: "Erde",
    air: "Luft",
    water: "Wasser",

    cardinal:
      "Kardinal",
    fixed:
      "Fix",
    mutable:
      "Veränderlich",

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
          "Ihre Energie in eine bewusste Richtung lenken",
        introduction:
          "Ihre Integration erfordert einen bewussteren Umgang mit Ihrer Initiativkraft. Sie kommen schnell voran, wenn Ihre Energie auf ein klares Ziel trifft, profitieren jedoch davon, ausreichend zu verlangsamen, um echte Dringlichkeit von Impulsivität zu unterscheiden.",
        observe:
          "Beobachten Sie Momente, in denen Sie reagieren, bevor Sie erkannt haben, was Sie tatsächlich verteidigen oder aufbauen möchten.",
        nourish:
          "Stärken Sie Ihren Mut, Ihre Autonomie und Ihre Fähigkeit, Dinge zu beginnen.",
        balance:
          "Gleichen Sie Ihre Spontaneität durch mehr Geduld, Zuhören und Kontinuität aus.",
        release:
          "Lassen Sie das Bedürfnis los, Ihre Stärke ständig durch sofortiges Handeln beweisen zu müssen.",
        dailyAction:
          "Wählen Sie jeden Tag eine Hauptpriorität und investieren Sie Ihre Energie bis zu einem konkreten Schritt.",
        relationshipAction:
          "Äußern Sie Ihr Bedürfnis klar, bevor Frustration zu einer Reaktion wird.",
        professionalAction:
          "Bevorzugen Sie Projekte, in denen Sie initiieren, entscheiden und schnell ein Ergebnis sehen können.",
        innerAction:
          "Geben Sie sich vor Entscheidungen unter starken Emotionen einige Minuten Zeit.",
        affirmation:
          "Ich lenke meine Energie mit Mut, Bewusstsein und Beständigkeit.",
      },

      Taurus: {
        title:
          "Ihre Grundlagen weiterentwickeln, ohne Stabilität zu verlieren",
        introduction:
          "Ihre Integration bedeutet, Wesentliches zu bewahren und gleichzeitig notwendige Veränderungen anzunehmen. Ihre Beständigkeit ist eine große Stärke, wenn sie Wachstum statt Stillstand unterstützt.",
        observe:
          "Beobachten Sie Situationen, die Sie nur aufrechterhalten, weil sie vertraut oder beruhigend sind.",
        nourish:
          "Stärken Sie Ihre Stabilität, Geduld und Verbindung zu einfachen Freuden.",
        balance:
          "Gleichen Sie Ihr Sicherheitsbedürfnis durch eine schrittweise Offenheit für Veränderung aus.",
        release:
          "Lassen Sie die Vorstellung los, dass jede Veränderung das bedroht, was Sie aufgebaut haben.",
        dailyAction:
          "Führen Sie eine kleine konkrete Veränderung in eine zu starre Gewohnheit ein.",
        relationshipAction:
          "Äußern Sie Ihr Bedürfnis nach Stabilität, ohne darauf zu warten, dass andere es erraten.",
        professionalAction:
          "Bauen Sie Ihre Projekte in regelmäßigen und messbaren Schritten auf.",
        innerAction:
          "Kehren Sie zu Körper, Atem und Empfindungen zurück, wenn Unruhe zunimmt.",
        affirmation:
          "Ich kann mich entwickeln und gleichzeitig fest verwurzelt bleiben.",
      },

      Gemini: {
        title:
          "Ihre Ideen in tiefes Verständnis verwandeln",
        introduction:
          "Ihre Integration verlangt die Fähigkeit zu wählen, zu vertiefen und weiterzugeben. Ihre Neugier ist ein großer Reichtum und wird noch kraftvoller, wenn sie sich um einige wesentliche Richtungen organisiert.",
        observe:
          "Beobachten Sie Momente, in denen Sie Thema oder Richtung wechseln, bevor Sie wirklich in die Tiefe gegangen sind.",
        nourish:
          "Stärken Sie Ihre Neugier, Kommunikation und Freude am Lernen.",
        balance:
          "Gleichen Sie Vielfalt durch stärkere Konzentration und Kontinuität aus.",
        release:
          "Lassen Sie das Bedürfnis los, alles gleichzeitig verstehen zu müssen.",
        dailyAction:
          "Widmen Sie einem einzigen Thema oder Projekt eine festgelegte Zeit, ohne eine neue Richtung zu öffnen.",
        relationshipAction:
          "Sagen Sie, was Sie fühlen, ohne die Emotion sofort in Analyse zu verwandeln.",
        professionalAction:
          "Nutzen Sie Ihre Fähigkeit, Informationen zu erklären, zu verbinden und zu vereinfachen.",
        innerAction:
          "Schreiben Sie Ihre Gedanken auf, um die zentrale Idee oder Emotion zu erkennen.",
        affirmation:
          "Ich gebe meiner Intelligenz Tiefe und Richtung.",
      },

      Cancer: {
        title:
          "Innere Sicherheit schaffen, die Ihre Sensibilität trägt",
        introduction:
          "Ihre Integration verlangt die Anerkennung Ihrer emotionalen Bedürfnisse und schützende Grenzen. Ihre Sensibilität wird zur Stärke, wenn Sie sie nicht nur über die Bedürfnisse anderer erleben.",
        observe:
          "Beobachten Sie Momente, in denen Sie sich um alle kümmern und dabei Ihre eigene Erschöpfung übersehen.",
        nourish:
          "Stärken Sie Ihr Bedürfnis nach Intimität, Sicherheit und ehrlichen Verbindungen.",
        balance:
          "Gleichen Sie Ihren Schutzinstinkt durch mehr Aufmerksamkeit für Ihre eigenen Bedürfnisse aus.",
        release:
          "Lassen Sie emotionale Verantwortungen los, die nicht Ihnen gehören.",
        dailyAction:
          "Schaffen Sie täglich einen Moment, um sich zurückzuziehen, zu atmen und Ihren eigenen inneren Zustand wiederzufinden.",
        relationshipAction:
          "Äußern Sie ein Bedürfnis, bevor es zu Groll wird.",
        professionalAction:
          "Nutzen Sie Ihre Fähigkeit zu verstehen, aufzunehmen und eine menschliche Atmosphäre zu schaffen.",
        innerAction:
          "Unterscheiden Sie zwischen Ihren eigenen Gefühlen und denen der Menschen um Sie herum.",
        affirmation:
          "Ich kümmere mich um mich selbst mit derselben Präsenz, die ich anderen schenke.",
      },

      Leo: {
        title:
          "Aus Ihrer Wahrheit strahlen statt aus dem Wunsch nach Anerkennung",
        introduction:
          "Ihre Integration verlangt freieren, kreativeren Selbstausdruck mit weniger Abhängigkeit von äußerer Bewertung. Ihr Licht wird natürlich, wenn Sie erschaffen, weil es wirklich zu Ihnen passt.",
        observe:
          "Beobachten Sie Momente, in denen Ihr Selbstvertrauen vollständig von der Reaktion anderer abhängt.",
        nourish:
          "Stärken Sie Ihre Kreativität, Großzügigkeit und Inspirationskraft.",
        balance:
          "Gleichen Sie Ihr Anerkennungsbedürfnis durch stabilere innere Bestätigung aus.",
        release:
          "Lassen Sie die Angst los, nicht bemerkenswert genug zu sein.",
        dailyAction:
          "Erschaffen oder äußern Sie täglich etwas, ohne es sofort bewerten zu wollen.",
        relationshipAction:
          "Zeigen Sie Ihre Verletzlichkeit, statt Ihren Stolz automatisch zu schützen.",
        professionalAction:
          "Nehmen Sie eine sichtbare Rolle in Projekten ein, in denen Ihre Persönlichkeit und Kreativität echten Wert bringen.",
        innerAction:
          "Erkennen Sie eine persönliche Qualität an, ohne auf Bestätigung von außen zu warten.",
        affirmation:
          "Mein Licht bleibt real, auch wenn es keinen Applaus erhält.",
      },

      Virgo: {
        title:
          "Ihre Ansprüche in nützliche und wohlwollende Kompetenz verwandeln",
        introduction:
          "Ihre Integration verlangt einen flexibleren Umgang mit Unvollkommenheit. Ihre Präzision und Ihr Urteilsvermögen werden zu Stärken, wenn Sie damit verbessern statt verurteilen.",
        observe:
          "Beobachten Sie Momente, in denen Fehlerangst eine eigentlich machbare Handlung verzögert.",
        nourish:
          "Stärken Sie Ihren Organisationssinn, Ihre Kompetenz und Ihre Fähigkeit, konkret zu helfen.",
        balance:
          "Gleichen Sie Ihre hohen Ansprüche durch mehr Toleranz und Realismus aus.",
        release:
          "Lassen Sie die Vorstellung los, dass Ihr Wert davon abhängt, alles richtig zu machen.",
        dailyAction:
          "Definieren Sie eine ausreichend gute Version, bevor Sie eine Aufgabe beginnen.",
        relationshipAction:
          "Zeigen Sie Zuneigung, ohne sie ausschließlich in Hilfe oder Korrekturen auszudrücken.",
        professionalAction:
          "Würdigen Sie Ihre Fähigkeit, Methoden zu entwickeln, Probleme zu lösen und Dinge zu verbessern.",
        innerAction:
          "Ersetzen Sie eine innere Kritik durch eine einfache konstruktive Handlung.",
        affirmation:
          "Ich entwickle mich präzise weiter, ohne Perfektion zu verlangen.",
      },

      Libra: {
        title:
          "Harmonie schaffen, ohne Ihre eigene Wahrheit zu verlassen",
        introduction:
          "Ihre Integration verlangt Zusammenarbeit, ohne sich selbst zurückzunehmen. Ihr Gleichgewicht wird stabiler, wenn auch Ihre eigene Position Teil der Beziehung ist.",
        observe:
          "Beobachten Sie Momente, in denen Sie eine Entscheidung hinauszögern, um niemanden zu enttäuschen.",
        nourish:
          "Stärken Sie Ihren Sinn für Gerechtigkeit, Schönheit und Zusammenarbeit.",
        balance:
          "Gleichen Sie Ihre Aufmerksamkeit für andere durch klareres Zuhören auf Ihre eigenen Bedürfnisse aus.",
        release:
          "Lassen Sie die Überzeugung los, dass Meinungsverschiedenheiten zwangsläufig Beziehungen zerstören.",
        dailyAction:
          "Treffen Sie eine kleine Entscheidung, ohne mehrere Bestätigungen von außen einzuholen.",
        relationshipAction:
          "Äußern Sie Ihre Position, bevor Sie nach einem Kompromiss suchen.",
        professionalAction:
          "Nutzen Sie Ihre Fähigkeit zu verhandeln, zu verbinden und ein kooperatives Klima zu schaffen.",
        innerAction:
          "Fragen Sie sich, was Sie wählen würden, wenn Sie keine Angst hätten, jemanden zu enttäuschen.",
        affirmation:
          "Ich kann Harmonie schaffen, ohne meine Wahrheit aufzugeben.",
      },

      Scorpio: {
        title:
          "Ihre Intensität in bewusste Kraft verwandeln",
        introduction:
          "Ihre Integration verlangt einen freieren Umgang mit Verletzlichkeit, Kontrolle und Transformation. Ihre Tiefe wird zur Stärke, wenn Sie sie zum Verstehen und Erneuern nutzen, statt sich vor jedem möglichen Verlust zu schützen.",
        observe:
          "Beobachten Sie Momente, in denen Misstrauen oder das Bedürfnis, jedes Detail zu verstehen, Sie am Vorankommen hindert.",
        nourish:
          "Stärken Sie Ihre Tiefe, Intuition und Transformationsfähigkeit.",
        balance:
          "Gleichen Sie Ihre Intensität durch mehr Vertrauen, Flexibilität und schrittweise Offenheit aus.",
        release:
          "Lassen Sie das Bedürfnis los, alles kontrollieren zu müssen, bevor Sie sich einlassen.",
        dailyAction:
          "Wählen Sie eine Situation, in der Sie einen kleinen Teil der Kontrolle loslassen können.",
        relationshipAction:
          "Teilen Sie eine emotionale Wahrheit, bevor sie zu Schweigen oder Distanz wird.",
        professionalAction:
          "Nutzen Sie Ihre Fähigkeit, tiefe Themen zu analysieren, Krisen zu bewältigen und verborgene Mechanismen zu verstehen.",
        innerAction:
          "Fragen Sie sich, ob Ihre Wachsamkeit zur Gegenwart oder zu einer alten Verletzung gehört.",
        affirmation:
          "Meine Verletzlichkeit und meine Kraft können gleichzeitig bestehen.",
      },

      Sagittarius: {
        title:
          "Ihrem Bedürfnis nach Freiheit und Sinn eine reale Struktur geben",
        introduction:
          "Ihre Integration verlangt die Verbindung von Entdeckung und Verpflichtung. Ihre Vision wird kraftvoller, wenn Sie ihr eine konkrete und dauerhafte Form geben.",
        observe:
          "Beobachten Sie Momente, in denen Sie nach einem neuen Horizont suchen, um einer aktuellen Einschränkung oder Verantwortung auszuweichen.",
        nourish:
          "Stärken Sie Ihr Bedürfnis nach Sinn, Lernen und Offenheit.",
        balance:
          "Gleichen Sie Ihre Freiheit durch mehr Kontinuität in Ihren Entscheidungen aus.",
        release:
          "Lassen Sie die Vorstellung los, dass Verpflichtung automatisch alle Möglichkeiten schließt.",
        dailyAction:
          "Wählen Sie eine Richtung und gehen Sie darin weiter, bevor Sie eine neue öffnen.",
        relationshipAction:
          "Bleiben Sie in schwierigen Gesprächen präsent, statt sofort Abstand zu nehmen.",
        professionalAction:
          "Nutzen Sie Ihre Fähigkeit, Visionen zu vermitteln, zu lehren und zu inspirieren.",
        innerAction:
          "Verbinden Sie jedes große Ideal mit einer konkreten Handlung, die Sie diese Woche umsetzen können.",
        affirmation:
          "Ich gebe der Freiheit, die mich inspiriert, eine dauerhafte Form.",
      },

      Capricorn: {
        title:
          "Aufbauen, ohne Anstrengung zum einzigen Beweis Ihres Wertes zu machen",
        introduction:
          "Ihre Integration verlangt eine menschlichere Definition von Erfolg. Ihre Disziplin und Ihr Ehrgeiz sind große Stärken, müssen jedoch Ihr Leben unterstützen und nicht erschöpfen.",
        observe:
          "Beobachten Sie Momente, in denen Sie Ihre Anstrengung erhöhen, obwohl Sie vor allem Ruhe oder Unterstützung benötigen.",
        nourish:
          "Stärken Sie Ihr Verantwortungsgefühl, Ihre Geduld und Ihre Aufbaukraft.",
        balance:
          "Gleichen Sie Ihren Ehrgeiz durch bessere Wahrnehmung Ihrer Grenzen aus.",
        release:
          "Lassen Sie die Vorstellung los, dass alles Wertvolle schwierig sein muss.",
        dailyAction:
          "Definieren Sie drei realistische Prioritäten statt einer unmöglich langen Liste.",
        relationshipAction:
          "Erlauben Sie anderen, Sie zu unterstützen, ohne zu glauben, dass dies Ihre Autonomie mindert.",
        professionalAction:
          "Nutzen Sie Ihre Fähigkeit zu organisieren, zu strukturieren und langfristig aufzubauen.",
        innerAction:
          "Messen Sie Ihren Fortschritt an Kohärenz und nicht nur an Leistung.",
        affirmation:
          "Ich baue mit Ehrgeiz auf, ohne mein Gleichgewicht zu opfern.",
      },

      Aquarius: {
        title:
          "Ihre Besonderheit zu einem konkreten und menschlichen Beitrag machen",
        introduction:
          "Ihre Integration verlangt, Ihre Unabhängigkeit mit echter Beteiligung zu verbinden. Ihre Originalität wird zur kollektiven Stärke, wenn Sie ihr eine zugängliche Form geben.",
        observe:
          "Beobachten Sie Momente, in denen Sie nur Abstand nehmen, um sich nicht eingeschränkt oder verletzlich zu fühlen.",
        nourish:
          "Stärken Sie Ihre Gedankenfreiheit, Originalität und Zukunftsvision.",
        balance:
          "Gleichen Sie Ihre Unabhängigkeit durch mehr emotionale Präsenz und Zusammenarbeit aus.",
        release:
          "Lassen Sie die Überzeugung los, dass Zugehörigkeit den Verlust Ihrer Einzigartigkeit verlangt.",
        dailyAction:
          "Verwandeln Sie eine originelle Idee in ein kleines konkretes Experiment.",
        relationshipAction:
          "Erklären Sie Ihr Bedürfnis nach Raum, ohne emotional zu verschwinden.",
        professionalAction:
          "Nutzen Sie Ihre Fähigkeit zu innovieren, zu modernisieren und kollektive Bewegungen zu verstehen.",
        innerAction:
          "Finden Sie einen Weg, etwas beizutragen, ohne Ihre Autonomie aufzugeben.",
        affirmation:
          "Meine Besonderheit wird zur Stärke, wenn ich sie bewusst teile.",
      },

      Pisces: {
        title:
          "Ihre Sensibilität schützen, damit sie konkrete Form annehmen kann",
        introduction:
          "Ihre Integration verlangt eine klarere Unterscheidung zwischen Intuition, Mitgefühl und emotionaler Aufnahme. Ihre Sensibilität wird zu einer dauerhaften Stärke, wenn sie durch klare Grenzen und Gewohnheiten unterstützt wird.",
        observe:
          "Beobachten Sie Momente, in denen Sie eine Emotion, Verantwortung oder Erwartung tragen, die nicht Ihnen gehört.",
        nourish:
          "Stärken Sie Ihre Intuition, Vorstellungskraft und Ihr Mitgefühl.",
        balance:
          "Gleichen Sie Ihre Offenheit durch konkrete Grenzen und besseren Schutz Ihrer Energie aus.",
        release:
          "Lassen Sie das Bedürfnis los, Schwierigkeiten anderer retten, reparieren oder aufnehmen zu müssen.",
        dailyAction:
          "Schaffen Sie einen Moment der Stille, Kreativität oder des Rückzugs, um Ihren eigenen inneren Zustand wiederzufinden.",
        relationshipAction:
          "Setzen Sie eine Grenze, bevor Ihre Verfügbarkeit zu Erschöpfung wird.",
        professionalAction:
          "Geben Sie Ihren Intuitionen, kreativen Fähigkeiten oder Ihrer Begleitungskompetenz eine konkrete Struktur.",
        innerAction:
          "Fragen Sie sich regelmäßig: Gehört diese Emotion wirklich zu mir?",
        affirmation:
          "Meine Grenzen ermöglichen meiner Sensibilität, zu einer Stärke zu werden.",
      },
    },

    moonGuidance: {
      Aries:
        "Ihr Mond im Widder reguliert sich durch Bewegung, Offenheit und eine einfache Handlung.",
      Taurus:
        "Ihr Mond im Stier findet durch Stabilität, Ruhe und Körperwahrnehmung wieder ins Gleichgewicht.",
      Gemini:
        "Ihr Mond in den Zwillingen findet Ruhe durch Worte, Schreiben und klaren Austausch.",
      Cancer:
        "Ihr Mond im Krebs reguliert sich in einem vertrauten, sicheren und emotional verlässlichen Umfeld.",
      Leo:
        "Ihr Mond im Löwen findet durch Kreativität, Wärme und ehrlichen Ausdruck wieder ins Gleichgewicht.",
      Virgo:
        "Ihr Mond in der Jungfrau findet Ruhe durch eine einfache Routine, sinnvolle Handlung und ein geordnetes Umfeld.",
      Libra:
        "Ihr Mond in der Waage findet durch respektvollen Dialog und harmonischere Beziehungen wieder ins Gleichgewicht.",
      Scorpio:
        "Ihr Mond im Skorpion reguliert sich durch emotionale Wahrheit, Vertrauen und bewusste Transformation.",
      Sagittarius:
        "Ihr Mond im Schützen findet Ruhe durch Raum, Bewegung und eine sinnvolle Perspektive.",
      Capricorn:
        "Ihr Mond im Steinbock findet durch Struktur, Ruhe und die Erlaubnis, Unterstützung anzunehmen, wieder ins Gleichgewicht.",
      Aquarius:
        "Ihr Mond im Wassermann reguliert sich durch Abstand, Freiheit und einen Raum, in dem Ihre Besonderheit respektiert wird.",
      Pisces:
        "Ihr Mond in den Fischen findet Ruhe durch Stille, Kreativität und schützende Grenzen.",
    },

    saturnGuidance: {
      Aries:
        "Ihre Meisterschaft wächst, wenn Sie handeln, ohne sofort Ihre Stärke beweisen zu wollen.",
      Taurus:
        "Ihre Meisterschaft wächst, wenn Sie Ihre Grundlagen schrittweise anpassen.",
      Gemini:
        "Ihre Meisterschaft wächst, wenn Sie Ihre Ideen äußern, bevor sie perfekt sind.",
      Cancer:
        "Ihre Meisterschaft wächst, wenn Sie Ihre emotionalen Bedürfnisse erkennen und ausdrücken.",
      Leo:
        "Ihre Meisterschaft wächst, wenn Sie erschaffen, ohne Anerkennung zur Voraussetzung zu machen.",
      Virgo:
        "Ihre Meisterschaft wächst, wenn Sie unvollkommenen, aber beständigen Fortschritt akzeptieren.",
      Libra:
        "Ihre Meisterschaft wächst, wenn Sie Stellung beziehen, ohne jede Meinungsverschiedenheit zu fürchten.",
      Scorpio:
        "Ihre Meisterschaft wächst, wenn Sie schrittweise Vertrauen entwickeln, ohne Ihr Urteilsvermögen aufzugeben.",
      Sagittarius:
        "Ihre Meisterschaft wächst, wenn Sie Ihrer Vision konkrete Kontinuität geben.",
      Capricorn:
        "Ihre Meisterschaft wächst, wenn Ihre Disziplin auch Ihre Menschlichkeit respektiert.",
      Aquarius:
        "Ihre Meisterschaft wächst, wenn Ihre Originalität Teil eines echten Engagements wird.",
      Pisces:
        "Ihre Meisterschaft wächst, wenn Ihre Sensibilität durch einfache und stabile Grenzen unterstützt wird.",
    },
  },

  it: {
    analysis: "Analisi Firma",
    guideTitle:
      "La tua guida d’integrazione",
    guideSubtitle:
      "Riferimenti concreti per utilizzare il tuo tema nelle scelte, nelle relazioni e nella tua evoluzione quotidiana.",
    integrationDirection:
      "La tua direzione d’integrazione",

    observeLabel:
      "Da osservare",
    observeTitle:
      "Il riflesso che merita la tua attenzione",

    nourishLabel:
      "Da nutrire",
    nourishTitle:
      "La qualità che sostiene la tua evoluzione",

    balanceLabel:
      "Da equilibrare",
    balanceTitle:
      "La polarità da sviluppare",

    releaseLabel:
      "Da liberare",
    releaseTitle:
      "Ciò che non deve più dirigere le tue scelte",

    quote:
      "«Il tuo tema diventa realmente utile quando ti aiuta a riconoscere i tuoi automatismi, comprendere meglio i tuoi bisogni e scegliere una risposta più consapevole.»",

    actionPlan:
      "Il tuo piano d’azione personale",

    integrateLife:
      "Integrare il tuo tema negli ambiti essenziali della tua vita",

    actionIntro:
      "L’integrazione non richiede di modificare tutta la tua vita in una sola volta. Si costruisce attraverso decisioni ripetute, abitudini semplici e risposte diverse che scegli di fronte alle situazioni familiari.",

    daily:
      "Nella tua quotidianità",

    relationships:
      "Nelle tue relazioni",

    professionalLife:
      "Nella tua vita professionale",

    innerWorld:
      "Nel tuo mondo interiore",

    astrologicalMarkers:
      "I tuoi riferimenti astrologici",

    fourForces:
      "Quattro forze da utilizzare insieme",

    fourForcesIntro:
      "Il Sole dà la direzione, la Luna protegge il tuo equilibrio emotivo, l’Ascendente descrive la tua prima risposta al mondo, Giove apre le possibilità e Saturno costruisce la padronanza.",

    sun: "Sole",
    moon: "Luna",
    jupiter: "Giove",
    saturn: "Saturno",

    sunRole:
      "La direzione che cerchi di sviluppare consapevolmente.",

    moonRole:
      "I tuoi bisogni emotivi e la tua sicurezza interiore.",

    jupiterRole:
      "La tua fiducia, la tua espansione e le tue possibilità.",

    saturnRole:
      "La tua padronanza, i tuoi limiti e i tuoi apprendimenti duraturi.",

    protectBalance:
      "Per proteggere il tuo equilibrio emotivo",

    buildMastery:
      "Per costruire la tua padronanza",

    threeCommitments:
      "Tre impegni personali",

    commitment1:
      "Riconoscere i tuoi bisogni prima che diventino stanchezza, frustrazione o ritiro.",

    commitment2:
      "Scegliere un’azione realistica invece di aspettare una trasformazione perfetta.",

    commitment3:
      "Rileggere questa guida quando attraversi un periodo di dubbio, cambiamento o decisione.",

    signatureAffirmation:
      "La tua affermazione Firma",

    moonFallback:
      "La tua Luna mostra il modo in cui il tuo mondo emotivo ritrova naturalmente un senso di sicurezza.",

    saturnFallback:
      "Saturno mostra la qualità che sviluppi progressivamente attraverso pazienza, limiti ed esperienza.",

    unspecified:
      "non specificato",

    different:
      "diverso",

    fire: "Fuoco",
    earth: "Terra",
    air: "Aria",
    water: "Acqua",

    cardinal:
      "Cardinale",
    fixed:
      "Fisso",
    mutable:
      "Mutevole",

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
          "Trasformare la tua energia in una direzione consapevole",
        introduction:
          "La tua integrazione passa attraverso un uso più consapevole della tua forza d’iniziativa. Avanzi rapidamente quando la tua energia incontra un obiettivo chiaro, ma trai beneficio dal rallentare abbastanza da distinguere l’urgenza reale dall’impulso.",
        observe:
          "Osserva i momenti in cui reagisci prima di aver identificato ciò che desideri realmente difendere o costruire.",
        nourish:
          "Nutri il tuo coraggio, la tua autonomia e la tua capacità di iniziare.",
        balance:
          "Equilibra la tua spontaneità con maggiore pazienza, ascolto e continuità.",
        release:
          "Libera il bisogno di dimostrare costantemente la tua forza attraverso un’azione immediata.",
        dailyAction:
          "Scegli ogni giorno una priorità principale e impegnaci la tua energia fino a raggiungere una tappa concreta.",
        relationshipAction:
          "Esprimi chiaramente il tuo bisogno prima che la frustrazione diventi reazione.",
        professionalAction:
          "Privilegia i progetti nei quali puoi iniziare, decidere e vedere rapidamente un risultato.",
        innerAction:
          "Concediti qualche minuto prima di prendere una decisione sotto l’effetto di una forte emozione.",
        affirmation:
          "Dirigo la mia energia con coraggio, consapevolezza e costanza.",
      },

      Taurus: {
        title:
          "Far evolvere le tue fondamenta senza perdere stabilità",
        introduction:
          "La tua integrazione passa dalla capacità di preservare ciò che è essenziale accettando al tempo stesso le trasformazioni necessarie. La tua costanza è una forza immensa quando sostiene la crescita invece dell’immobilità.",
        observe:
          "Osserva le situazioni che mantieni soltanto perché sono conosciute o rassicuranti.",
        nourish:
          "Nutri la tua stabilità, la tua pazienza e il tuo rapporto con i piaceri semplici.",
        balance:
          "Equilibra il tuo bisogno di sicurezza con un’apertura progressiva al cambiamento.",
        release:
          "Libera l’idea che ogni trasformazione minacci ciò che hai costruito.",
        dailyAction:
          "Introduci un piccolo cambiamento concreto in un’abitudine diventata troppo rigida.",
        relationshipAction:
          "Esprimi il tuo bisogno di stabilità senza aspettare che l’altra persona lo intuisca.",
        professionalAction:
          "Costruisci i tuoi progetti attraverso tappe regolari e misurabili.",
        innerAction:
          "Ritorna al corpo, al respiro e alle sensazioni quando aumenta l’inquietudine.",
        affirmation:
          "Posso evolvere rimanendo solidamente radicato.",
      },

      Gemini: {
        title:
          "Trasformare le tue idee in comprensione profonda",
        introduction:
          "La tua integrazione passa dalla capacità di scegliere, approfondire e trasmettere. La tua curiosità è una ricchezza, ma diventa ancora più potente quando si organizza attorno ad alcune direzioni essenziali.",
        observe:
          "Osserva i momenti in cui cambi argomento o direzione prima di aver realmente approfondito.",
        nourish:
          "Nutri la tua curiosità, la comunicazione e il bisogno di imparare.",
        balance:
          "Equilibra la varietà con maggiore concentrazione e continuità.",
        release:
          "Libera il bisogno di comprendere tutto nello stesso momento.",
        dailyAction:
          "Dedica un tempo definito a un solo argomento o progetto senza aprire una nuova direzione.",
        relationshipAction:
          "Esprimi ciò che senti senza trasformare immediatamente l’emozione in analisi.",
        professionalAction:
          "Utilizza la tua capacità di spiegare, collegare e semplificare le informazioni.",
        innerAction:
          "Scrivi i tuoi pensieri per identificare l’idea o l’emozione centrale.",
        affirmation:
          "Do profondità e direzione alla mia intelligenza.",
      },

      Cancer: {
        title:
          "Creare una sicurezza interiore capace di sostenere la tua sensibilità",
        introduction:
          "La tua integrazione passa dal riconoscimento dei tuoi bisogni emotivi e dalla creazione di limiti protettivi. La tua sensibilità diventa una forza quando smetti di viverla soltanto attraverso i bisogni degli altri.",
        observe:
          "Osserva i momenti in cui ti prendi cura di tutti senza riconoscere la tua stanchezza.",
        nourish:
          "Nutri il tuo bisogno di intimità, sicurezza e legami sinceri.",
        balance:
          "Equilibra il tuo istinto protettivo con maggiore attenzione ai tuoi bisogni.",
        release:
          "Libera le responsabilità emotive che non ti appartengono.",
        dailyAction:
          "Crea ogni giorno un momento nel quale puoi ritirarti, respirare e ritrovare il tuo stato interiore.",
        relationshipAction:
          "Esprimi un bisogno prima che diventi risentimento.",
        professionalAction:
          "Utilizza la tua capacità di comprendere, accogliere e creare un clima umano.",
        innerAction:
          "Distingui ciò che senti da ciò che sentono gli altri intorno a te.",
        affirmation:
          "Mi prendo cura di me con la stessa presenza che offro agli altri.",
      },

      Leo: {
        title:
          "Risplendere dalla tua verità invece che dal bisogno di approvazione",
        introduction:
          "La tua integrazione passa da un’espressione personale più libera, creativa e meno dipendente dallo sguardo esterno. La tua luce diventa naturale quando crei perché ciò ti rappresenta davvero.",
        observe:
          "Osserva i momenti in cui la tua fiducia dipende interamente dalla reazione ricevuta.",
        nourish:
          "Nutri la tua creatività, generosità e capacità di ispirare.",
        balance:
          "Equilibra il tuo bisogno di riconoscimento con una validazione interiore più stabile.",
        release:
          "Libera la paura di non essere abbastanza notevole.",
        dailyAction:
          "Crea o esprimi qualcosa ogni giorno senza cercare immediatamente di valutarla.",
        relationshipAction:
          "Mostra la tua vulnerabilità invece di proteggere sistematicamente il tuo orgoglio.",
        professionalAction:
          "Occupa uno spazio visibile nei progetti in cui personalità e creatività apportano valore reale.",
        innerAction:
          "Riconosci una qualità personale senza aspettare che un’altra persona la confermi.",
        affirmation:
          "La mia luce rimane reale anche quando non viene applaudita.",
      },

      Virgo: {
        title:
          "Trasformare la tua esigenza in competenza utile e benevola",
        introduction:
          "La tua integrazione passa da un rapporto più flessibile con l’imperfezione. Precisione e discernimento diventano forze quando li utilizzi per migliorare e non per condannare.",
        observe:
          "Osserva i momenti in cui la paura dell’errore ritarda un’azione già realizzabile.",
        nourish:
          "Nutri il tuo senso dell’organizzazione, la competenza e la capacità di aiutare concretamente.",
        balance:
          "Equilibra la tua esigenza con maggiore tolleranza e realismo.",
        release:
          "Libera l’idea che il tuo valore dipenda dalla capacità di fare tutto correttamente.",
        dailyAction:
          "Definisci una versione sufficientemente buona prima di iniziare un’attività.",
        relationshipAction:
          "Esprimi il tuo affetto senza tradurlo soltanto in aiuto o correzioni.",
        professionalAction:
          "Valorizza la tua capacità di creare metodi, risolvere problemi e migliorare.",
        innerAction:
          "Sostituisci una critica interiore con un’azione semplice e costruttiva.",
        affirmation:
          "Progredisco con precisione senza pretendere la perfezione.",
      },

      Libra: {
        title:
          "Creare armonia senza allontanarti dalla tua verità",
        introduction:
          "La tua integrazione passa dalla capacità di collaborare senza cancellarti. Il tuo senso dell’equilibrio diventa più solido quando anche la tua posizione personale fa parte della relazione.",
        observe:
          "Osserva i momenti in cui ritardi una scelta per evitare di dispiacere.",
        nourish:
          "Nutri il tuo senso di giustizia, bellezza e cooperazione.",
        balance:
          "Equilibra l’attenzione verso gli altri con un ascolto più chiaro dei tuoi bisogni.",
        release:
          "Libera la convinzione che un disaccordo distrugga necessariamente una relazione.",
        dailyAction:
          "Prendi una piccola decisione senza cercare diverse convalide esterne.",
        relationshipAction:
          "Esprimi la tua posizione prima di cercare un compromesso.",
        professionalAction:
          "Utilizza la tua capacità di negoziare, collegare e creare un clima di collaborazione.",
        innerAction:
          "Chiediti cosa sceglieresti se non avessi paura di deludere.",
        affirmation:
          "Posso creare armonia senza abbandonare la mia verità.",
      },

      Scorpio: {
        title:
          "Trasformare la tua intensità in potere consapevole",
        introduction:
          "La tua integrazione passa da un rapporto più libero con vulnerabilità, controllo e trasformazione. La tua profondità diventa una forza quando la utilizzi per comprendere e rigenerare invece che per proteggerti da ogni perdita.",
        observe:
          "Osserva i momenti in cui diffidenza o bisogno di comprendere ogni dettaglio ti impediscono di avanzare.",
        nourish:
          "Nutri la tua profondità, intuizione e capacità di trasformazione.",
        balance:
          "Equilibra la tua intensità con maggiore fiducia, flessibilità e apertura progressiva.",
        release:
          "Libera il bisogno di controllare tutto prima di impegnarti.",
        dailyAction:
          "Scegli una situazione nella quale puoi lasciare andare una piccola parte del controllo.",
        relationshipAction:
          "Condividi una verità emotiva prima che diventi silenzio o distanza.",
        professionalAction:
          "Utilizza la tua capacità di analizzare questioni profonde, gestire crisi e comprendere meccanismi nascosti.",
        innerAction:
          "Chiediti se la tua vigilanza appartiene al presente o a una vecchia ferita.",
        affirmation:
          "La mia vulnerabilità e il mio potere possono esistere insieme.",
      },

      Sagittarius: {
        title:
          "Dare una struttura reale al tuo bisogno di libertà e significato",
        introduction:
          "La tua integrazione passa dall’unione tra esplorazione e impegno. La tua visione diventa più potente quando accetti di darle una forma concreta e duratura.",
        observe:
          "Osserva i momenti in cui cerchi un nuovo orizzonte per evitare una limitazione o responsabilità presente.",
        nourish:
          "Nutri il tuo bisogno di significato, apprendimento e apertura.",
        balance:
          "Equilibra la tua libertà con maggiore continuità nelle tue scelte.",
        release:
          "Libera l’idea che un impegno chiuda necessariamente tutte le possibilità.",
        dailyAction:
          "Scegli una direzione e avanzaci prima di aprirne una nuova.",
        relationshipAction:
          "Rimani presente nelle conversazioni difficili invece di prendere immediatamente le distanze.",
        professionalAction:
          "Utilizza la tua capacità di trasmettere una visione, insegnare e ispirare.",
        innerAction:
          "Collega ogni grande ideale a un’azione concreta realizzabile questa settimana.",
        affirmation:
          "Do una forma duratura alla libertà che mi ispira.",
      },

      Capricorn: {
        title:
          "Costruire senza fare dello sforzo l’unica prova del tuo valore",
        introduction:
          "La tua integrazione passa da una definizione più umana del successo. Disciplina e ambizione sono grandi forze, ma devono sostenere la tua vita invece di esaurirla.",
        observe:
          "Osserva i momenti in cui aumenti gli sforzi quando avresti soprattutto bisogno di riposo o sostegno.",
        nourish:
          "Nutri il tuo senso di responsabilità, pazienza e capacità di costruire.",
        balance:
          "Equilibra la tua ambizione con un ascolto migliore dei tuoi limiti.",
        release:
          "Libera l’idea che tutto ciò che possiede valore debba essere difficile.",
        dailyAction:
          "Definisci tre priorità realistiche invece di una lista impossibile da terminare.",
        relationshipAction:
          "Permetti agli altri di sostenerti senza credere che ciò diminuisca la tua autonomia.",
        professionalAction:
          "Utilizza la tua capacità di organizzare, strutturare e costruire nel lungo periodo.",
        innerAction:
          "Misura il tuo progresso attraverso la coerenza e non soltanto attraverso la performance.",
        affirmation:
          "Costruisco con ambizione senza sacrificare il mio equilibrio.",
      },

      Aquarius: {
        title:
          "Fare della tua differenza un contributo concreto e umano",
        introduction:
          "La tua integrazione passa dalla capacità di collegare la tua indipendenza a una vera partecipazione. La tua originalità diventa una forza collettiva quando accetti di darle una forma accessibile.",
        observe:
          "Osserva i momenti in cui prendi le distanze soltanto per evitare di sentirti limitato o vulnerabile.",
        nourish:
          "Nutri la tua libertà di pensiero, originalità e visione del futuro.",
        balance:
          "Equilibra la tua indipendenza con maggiore presenza emotiva e collaborazione.",
        release:
          "Libera la convinzione che appartenere richieda di perdere la tua unicità.",
        dailyAction:
          "Trasforma un’idea originale in una piccola sperimentazione concreta.",
        relationshipAction:
          "Spiega il tuo bisogno di spazio senza scomparire emotivamente.",
        professionalAction:
          "Utilizza la tua capacità di innovare, modernizzare e comprendere i movimenti collettivi.",
        innerAction:
          "Identifica un modo per contribuire senza rinunciare alla tua autonomia.",
        affirmation:
          "La mia differenza diventa una forza quando la condivido consapevolmente.",
      },

      Pisces: {
        title:
          "Proteggere la tua sensibilità per darle una forma concreta",
        introduction:
          "La tua integrazione passa da una migliore distinzione tra intuizione, compassione e assorbimento emotivo. La tua sensibilità diventa una forza duratura quando è sostenuta da limiti e abitudini chiare.",
        observe:
          "Osserva i momenti in cui porti un’emozione, responsabilità o aspettativa che non ti appartiene.",
        nourish:
          "Nutri la tua intuizione, immaginazione e compassione.",
        balance:
          "Equilibra la tua apertura con limiti concreti e una migliore protezione della tua energia.",
        release:
          "Libera il bisogno di salvare, riparare o assorbire le difficoltà degli altri.",
        dailyAction:
          "Crea un momento di silenzio, creatività o ritiro per ritrovare il tuo stato interiore.",
        relationshipAction:
          "Poni un limite prima che la tua disponibilità diventi esaurimento.",
        professionalAction:
          "Dai una struttura concreta alle tue intuizioni, creazioni o capacità di accompagnamento.",
        innerAction:
          "Chiediti regolarmente: questa emozione mi appartiene davvero?",
        affirmation:
          "I miei limiti permettono alla mia sensibilità di diventare una forza.",
      },
    },

    moonGuidance: {
      Aries:
        "La tua Luna in Ariete si regola attraverso movimento, franchezza e un’azione semplice.",
      Taurus:
        "La tua Luna in Toro ritrova equilibrio attraverso stabilità, riposo e ritorno al corpo.",
      Gemini:
        "La tua Luna in Gemelli si calma attraverso parole, scrittura e uno scambio chiaro.",
      Cancer:
        "La tua Luna in Cancro si regola in un ambiente intimo, sicuro ed emotivamente affidabile.",
      Leo:
        "La tua Luna in Leone ritrova equilibrio attraverso creatività, calore ed espressione sincera.",
      Virgo:
        "La tua Luna in Vergine si calma attraverso una routine semplice, un’azione utile e un ambiente organizzato.",
      Libra:
        "La tua Luna in Bilancia ritrova equilibrio attraverso dialogo rispettoso e una relazione più armoniosa.",
      Scorpio:
        "La tua Luna in Scorpione si regola attraverso verità emotiva, fiducia e trasformazione consapevole.",
      Sagittarius:
        "La tua Luna in Sagittario si calma attraverso spazio, movimento e una prospettiva significativa.",
      Capricorn:
        "La tua Luna in Capricorno ritrova equilibrio attraverso struttura, riposo e il permesso di ricevere sostegno.",
      Aquarius:
        "La tua Luna in Acquario si regola attraverso distanza, libertà e uno spazio nel quale la tua differenza è rispettata.",
      Pisces:
        "La tua Luna in Pesci si calma attraverso silenzio, creatività e limiti protettivi.",
    },

    saturnGuidance: {
      Aries:
        "La tua padronanza cresce quando agisci senza cercare immediatamente di dimostrare la tua forza.",
      Taurus:
        "La tua padronanza cresce quando adatti progressivamente le tue fondamenta.",
      Gemini:
        "La tua padronanza cresce quando esprimi le tue idee prima che siano perfette.",
      Cancer:
        "La tua padronanza cresce quando riconosci ed esprimi i tuoi bisogni emotivi.",
      Leo:
        "La tua padronanza cresce quando crei senza rendere l’approvazione una condizione.",
      Virgo:
        "La tua padronanza cresce quando accetti un progresso imperfetto ma costante.",
      Libra:
        "La tua padronanza cresce quando prendi posizione senza temere ogni disaccordo.",
      Scorpio:
        "La tua padronanza cresce quando sviluppi fiducia progressiva senza rinunciare al discernimento.",
      Sagittarius:
        "La tua padronanza cresce quando dai continuità concreta alla tua visione.",
      Capricorn:
        "La tua padronanza cresce quando la tua disciplina rispetta anche la tua umanità.",
      Aquarius:
        "La tua padronanza cresce quando la tua originalità si inserisce in un impegno reale.",
      Pisces:
        "La tua padronanza cresce quando la tua sensibilità è sostenuta da limiti semplici e stabili.",
    },
  },

  pt: {
    analysis:
      "Análise Assinatura",

    guideTitle:
      "Seu guia de integração",

    guideSubtitle:
      "Referências concretas para utilizar seu mapa em suas escolhas, relacionamentos e evolução cotidiana.",

    integrationDirection:
      "Sua direção de integração",

    observeLabel:
      "A observar",

    observeTitle:
      "O reflexo que merece sua atenção",

    nourishLabel:
      "A nutrir",

    nourishTitle:
      "A qualidade que sustenta sua evolução",

    balanceLabel:
      "A equilibrar",

    balanceTitle:
      "A polaridade a desenvolver",

    releaseLabel:
      "A liberar",

    releaseTitle:
      "Aquilo que não deve mais dirigir suas escolhas",

    quote:
      "“Seu mapa se torna realmente útil quando ajuda você a reconhecer seus automatismos, compreender melhor suas necessidades e escolher uma resposta mais consciente.”",

    actionPlan:
      "Seu plano de ação pessoal",

    integrateLife:
      "Integrar seu mapa aos campos essenciais da sua vida",

    actionIntro:
      "A integração não exige modificar toda a sua vida de uma só vez. Ela se constrói através de decisões repetidas, hábitos simples e respostas diferentes que você escolhe diante de situações familiares.",

    daily:
      "No seu cotidiano",

    relationships:
      "Nos seus relacionamentos",

    professionalLife:
      "Na sua vida profissional",

    innerWorld:
      "No seu mundo interior",

    astrologicalMarkers:
      "Suas referências astrológicas",

    fourForces:
      "Quatro forças para utilizar juntas",

    fourForcesIntro:
      "O Sol dá a direção, a Lua protege seu equilíbrio emocional, o Ascendente descreve sua primeira resposta ao mundo, Júpiter abre possibilidades e Saturno constrói domínio.",

    sun: "Sol",
    moon: "Lua",
    jupiter: "Júpiter",
    saturn: "Saturno",

    sunRole:
      "A direção que você procura desenvolver conscientemente.",

    moonRole:
      "Suas necessidades emocionais e sua segurança interior.",

    jupiterRole:
      "Sua confiança, sua expansão e suas possibilidades.",

    saturnRole:
      "Seu domínio, seus limites e seus aprendizados duradouros.",

    protectBalance:
      "Para proteger seu equilíbrio emocional",

    buildMastery:
      "Para construir seu domínio",

    threeCommitments:
      "Três compromissos pessoais",

    commitment1:
      "Reconhecer suas necessidades antes que se transformem em cansaço, frustração ou afastamento.",

    commitment2:
      "Escolher uma ação realista em vez de esperar uma transformação perfeita.",

    commitment3:
      "Reler este guia quando atravessar um período de dúvida, mudança ou decisão.",

    signatureAffirmation:
      "Sua afirmação Assinatura",

    moonFallback:
      "Sua Lua mostra a maneira como seu mundo emocional recupera naturalmente uma sensação de segurança.",

    saturnFallback:
      "Saturno mostra a qualidade que você desenvolve progressivamente através de paciência, limites e experiência.",

    unspecified:
      "não especificado",

    different:
      "diferente",

    fire: "Fogo",
    earth: "Terra",
    air: "Ar",
    water: "Água",

    cardinal:
      "Cardinal",
    fixed:
      "Fixo",
    mutable:
      "Mutável",

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
          "Transformar sua energia em uma direção consciente",
        introduction:
          "Sua integração passa por uma utilização mais consciente da sua força de iniciativa. Você avança rapidamente quando sua energia encontra um objetivo claro, mas ganha ao diminuir o ritmo o suficiente para distinguir urgência real de impulso.",
        observe:
          "Observe os momentos em que reage antes de identificar aquilo que realmente deseja defender ou construir.",
        nourish:
          "Nutra sua coragem, autonomia e capacidade de começar.",
        balance:
          "Equilibre sua espontaneidade com mais paciência, escuta e continuidade.",
        release:
          "Libere a necessidade de provar constantemente sua força através da ação imediata.",
        dailyAction:
          "Escolha todos os dias uma prioridade principal e comprometa sua energia até alcançar uma etapa concreta.",
        relationshipAction:
          "Expresse claramente sua necessidade antes que a frustração se transforme em reação.",
        professionalAction:
          "Priorize projetos nos quais possa iniciar, decidir e ver rapidamente um resultado.",
        innerAction:
          "Dê a si mesmo alguns minutos antes de qualquer decisão tomada sob forte emoção.",
        affirmation:
          "Dirijo minha energia com coragem, consciência e constância.",
      },

      Taurus: {
        title:
          "Fazer suas bases evoluírem sem perder estabilidade",
        introduction:
          "Sua integração passa pela capacidade de preservar aquilo que é essencial enquanto aceita as transformações necessárias. Sua constância é uma força imensa quando sustenta crescimento em vez de imobilidade.",
        observe:
          "Observe situações que mantém apenas porque são conhecidas ou tranquilizadoras.",
        nourish:
          "Nutra sua estabilidade, paciência e conexão com prazeres simples.",
        balance:
          "Equilibre sua necessidade de segurança com uma abertura gradual à mudança.",
        release:
          "Libere a ideia de que toda transformação ameaça aquilo que você construiu.",
        dailyAction:
          "Introduza uma pequena mudança concreta em um hábito que se tornou rígido demais.",
        relationshipAction:
          "Expresse sua necessidade de estabilidade sem esperar que a outra pessoa adivinhe.",
        professionalAction:
          "Construa seus projetos através de etapas regulares e mensuráveis.",
        innerAction:
          "Retorne ao corpo, à respiração e às sensações quando a inquietação aumentar.",
        affirmation:
          "Posso evoluir permanecendo solidamente enraizado.",
      },

      Gemini: {
        title:
          "Transformar suas ideias em compreensão profunda",
        introduction:
          "Sua integração passa pela capacidade de escolher, aprofundar e transmitir. Sua curiosidade é uma riqueza, mas se torna ainda mais poderosa quando se organiza ao redor de algumas direções essenciais.",
        observe:
          "Observe os momentos em que muda de assunto ou direção antes de realmente aprofundar.",
        nourish:
          "Nutra sua curiosidade, comunicação e necessidade de aprender.",
        balance:
          "Equilibre variedade com maior concentração e continuidade.",
        release:
          "Libere a necessidade de compreender tudo ao mesmo tempo.",
        dailyAction:
          "Dedique um período definido a um único assunto ou projeto sem abrir uma nova direção.",
        relationshipAction:
          "Diga aquilo que sente sem transformar imediatamente a emoção em análise.",
        professionalAction:
          "Utilize sua capacidade de explicar, conectar e simplificar informações.",
        innerAction:
          "Escreva seus pensamentos para identificar a ideia ou emoção central.",
        affirmation:
          "Dou profundidade e direção à minha inteligência.",
      },

      Cancer: {
        title:
          "Criar segurança interior capaz de sustentar sua sensibilidade",
        introduction:
          "Sua integração passa pelo reconhecimento das suas necessidades emocionais e pela criação de limites protetores. Sua sensibilidade se torna uma força quando deixa de vivê-la apenas através das necessidades dos outros.",
        observe:
          "Observe os momentos em que cuida de todos sem reconhecer seu próprio cansaço.",
        nourish:
          "Nutra sua necessidade de intimidade, segurança e vínculos sinceros.",
        balance:
          "Equilibre seu instinto protetor com maior atenção às suas próprias necessidades.",
        release:
          "Libere responsabilidades emocionais que não pertencem a você.",
        dailyAction:
          "Crie todos os dias um momento para se retirar, respirar e recuperar seu próprio estado interior.",
        relationshipAction:
          "Expresse uma necessidade antes que ela se transforme em ressentimento.",
        professionalAction:
          "Utilize sua capacidade de compreender, acolher e criar um ambiente humano.",
        innerAction:
          "Distinga aquilo que você sente daquilo que os outros ao seu redor sentem.",
        affirmation:
          "Cuido de mim com a mesma presença que ofereço aos outros.",
      },

      Leo: {
        title:
          "Brilhar a partir da sua verdade e não da necessidade de aprovação",
        introduction:
          "Sua integração passa por uma expressão pessoal mais livre, criativa e menos dependente do olhar externo. Sua luz se torna natural quando cria porque aquilo realmente combina com você.",
        observe:
          "Observe os momentos em que sua confiança depende inteiramente da reação recebida.",
        nourish:
          "Nutra sua criatividade, generosidade e capacidade de inspirar.",
        balance:
          "Equilibre sua necessidade de reconhecimento com uma validação interior mais estável.",
        release:
          "Libere o medo de não ser notável o suficiente.",
        dailyAction:
          "Crie ou expresse algo todos os dias sem tentar avaliá-lo imediatamente.",
        relationshipAction:
          "Mostre sua vulnerabilidade em vez de proteger sistematicamente seu orgulho.",
        professionalAction:
          "Ocupe um espaço visível em projetos nos quais sua personalidade e criatividade ofereçam valor real.",
        innerAction:
          "Reconheça uma qualidade pessoal sem esperar que outra pessoa a confirme.",
        affirmation:
          "Minha luz permanece real mesmo quando não é aplaudida.",
      },

      Virgo: {
        title:
          "Transformar sua exigência em competência útil e gentil",
        introduction:
          "Sua integração passa por uma relação mais flexível com a imperfeição. Sua precisão e discernimento se tornam forças quando são utilizados para melhorar em vez de condenar.",
        observe:
          "Observe os momentos em que o medo de errar adia uma ação que já é possível.",
        nourish:
          "Nutra seu senso de organização, competência e capacidade de ajudar concretamente.",
        balance:
          "Equilibre sua exigência com mais tolerância e realismo.",
        release:
          "Libere a ideia de que seu valor depende da capacidade de fazer tudo corretamente.",
        dailyAction:
          "Defina uma versão suficientemente boa antes de iniciar uma tarefa.",
        relationshipAction:
          "Expresse seu afeto sem traduzi-lo apenas em ajuda ou correções.",
        professionalAction:
          "Valorize sua capacidade de criar métodos, resolver problemas e melhorar.",
        innerAction:
          "Substitua uma crítica interior por uma ação simples e construtiva.",
        affirmation:
          "Progresso com precisão sem exigir perfeição.",
      },

      Libra: {
        title:
          "Criar harmonia sem se afastar da sua própria verdade",
        introduction:
          "Sua integração passa pela capacidade de cooperar sem se apagar. Seu senso de equilíbrio se torna mais sólido quando sua própria posição também faz parte da relação.",
        observe:
          "Observe os momentos em que adia uma escolha para evitar desagradar.",
        nourish:
          "Nutra seu senso de justiça, beleza e cooperação.",
        balance:
          "Equilibre sua atenção aos outros com uma escuta mais clara das suas próprias necessidades.",
        release:
          "Libere a crença de que uma discordância necessariamente destrói uma relação.",
        dailyAction:
          "Tome uma pequena decisão sem buscar várias validações externas.",
        relationshipAction:
          "Expresse sua posição antes de buscar um compromisso.",
        professionalAction:
          "Utilize sua capacidade de negociar, conectar e criar um clima de colaboração.",
        innerAction:
          "Pergunte a si mesmo o que escolheria se não tivesse medo de decepcionar.",
        affirmation:
          "Posso criar harmonia sem abandonar minha verdade.",
      },

      Scorpio: {
        title:
          "Transformar sua intensidade em poder consciente",
        introduction:
          "Sua integração passa por uma relação mais livre com vulnerabilidade, controle e transformação. Sua profundidade se torna uma força quando é utilizada para compreender e regenerar, e não para se proteger de toda perda.",
        observe:
          "Observe os momentos em que desconfiança ou necessidade de compreender cada detalhe impedem você de avançar.",
        nourish:
          "Nutra sua profundidade, intuição e capacidade de transformação.",
        balance:
          "Equilibre sua intensidade com mais confiança, flexibilidade e abertura gradual.",
        release:
          "Libere a necessidade de controlar tudo antes de se envolver.",
        dailyAction:
          "Escolha uma situação na qual possa soltar uma pequena parte do controle.",
        relationshipAction:
          "Compartilhe uma verdade emocional antes que ela se transforme em silêncio ou distância.",
        professionalAction:
          "Utilize sua capacidade de analisar questões profundas, administrar crises e compreender mecanismos ocultos.",
        innerAction:
          "Pergunte a si mesmo se sua vigilância pertence ao presente ou a uma antiga ferida.",
        affirmation:
          "Minha vulnerabilidade e meu poder podem existir juntos.",
      },

      Sagittarius: {
        title:
          "Dar estrutura real à sua necessidade de liberdade e sentido",
        introduction:
          "Sua integração passa pela união entre exploração e compromisso. Sua visão se torna mais poderosa quando você aceita dar a ela uma forma concreta e duradoura.",
        observe:
          "Observe os momentos em que procura um novo horizonte para evitar uma limitação ou responsabilidade presente.",
        nourish:
          "Nutra sua necessidade de sentido, aprendizado e abertura.",
        balance:
          "Equilibre sua liberdade com maior continuidade nas suas escolhas.",
        release:
          "Libere a ideia de que um compromisso fecha necessariamente todas as possibilidades.",
        dailyAction:
          "Escolha uma direção e avance nela antes de abrir uma nova.",
        relationshipAction:
          "Permaneça presente nas conversas difíceis em vez de imediatamente tomar distância.",
        professionalAction:
          "Utilize sua capacidade de transmitir uma visão, ensinar e inspirar.",
        innerAction:
          "Relacione cada grande ideal com uma ação concreta realizável nesta semana.",
        affirmation:
          "Dou uma forma duradoura à liberdade que me inspira.",
      },

      Capricorn: {
        title:
          "Construir sem transformar esforço na única prova do seu valor",
        introduction:
          "Sua integração passa por uma definição mais humana de sucesso. Sua disciplina e ambição são grandes forças, mas precisam sustentar sua vida e não esgotá-la.",
        observe:
          "Observe os momentos em que aumenta seus esforços quando na verdade precisa de descanso ou apoio.",
        nourish:
          "Nutra seu senso de responsabilidade, paciência e capacidade de construir.",
        balance:
          "Equilibre sua ambição com uma melhor escuta dos seus limites.",
        release:
          "Libere a ideia de que tudo aquilo que possui valor precisa ser difícil.",
        dailyAction:
          "Defina três prioridades realistas em vez de uma lista impossível de terminar.",
        relationshipAction:
          "Permita que os outros apoiem você sem acreditar que isso diminui sua autonomia.",
        professionalAction:
          "Utilize sua capacidade de organizar, estruturar e construir a longo prazo.",
        innerAction:
          "Meça seu progresso pela coerência e não apenas pelo desempenho.",
        affirmation:
          "Construo com ambição sem sacrificar meu equilíbrio.",
      },

      Aquarius: {
        title:
          "Transformar sua diferença em contribuição concreta e humana",
        introduction:
          "Sua integração passa pela capacidade de conectar sua independência a uma participação real. Sua originalidade se torna força coletiva quando você aceita dar a ela uma forma acessível.",
        observe:
          "Observe os momentos em que se distancia apenas para evitar sentir-se limitado ou vulnerável.",
        nourish:
          "Nutra sua liberdade de pensamento, originalidade e visão do futuro.",
        balance:
          "Equilibre sua independência com maior presença emocional e colaboração.",
        release:
          "Libere a crença de que pertencer exige perder sua singularidade.",
        dailyAction:
          "Transforme uma ideia original em uma pequena experimentação concreta.",
        relationshipAction:
          "Explique sua necessidade de espaço sem desaparecer emocionalmente.",
        professionalAction:
          "Utilize sua capacidade de inovar, modernizar e compreender movimentos coletivos.",
        innerAction:
          "Identifique uma maneira de contribuir sem renunciar à sua autonomia.",
        affirmation:
          "Minha diferença se torna uma força quando a compartilho conscientemente.",
      },

      Pisces: {
        title:
          "Proteger sua sensibilidade para dar a ela uma forma concreta",
        introduction:
          "Sua integração passa por uma melhor distinção entre intuição, compaixão e absorção emocional. Sua sensibilidade se torna uma força duradoura quando é sustentada por limites e hábitos claros.",
        observe:
          "Observe os momentos em que carrega uma emoção, responsabilidade ou expectativa que não pertence a você.",
        nourish:
          "Nutra sua intuição, imaginação e compaixão.",
        balance:
          "Equilibre sua abertura com limites concretos e uma melhor proteção da sua energia.",
        release:
          "Libere a necessidade de salvar, reparar ou absorver as dificuldades dos outros.",
        dailyAction:
          "Crie um momento de silêncio, criatividade ou recolhimento para recuperar seu próprio estado interior.",
        relationshipAction:
          "Estabeleça um limite antes que sua disponibilidade se transforme em esgotamento.",
        professionalAction:
          "Dê estrutura concreta às suas intuições, criações ou capacidade de acompanhamento.",
        innerAction:
          "Pergunte regularmente a si mesmo: esta emoção realmente pertence a mim?",
        affirmation:
          "Meus limites permitem que minha sensibilidade se torne uma força.",
      },
    },

    moonGuidance: {
      Aries:
        "Sua Lua em Áries se regula através do movimento, da franqueza e de uma ação simples.",
      Taurus:
        "Sua Lua em Touro recupera equilíbrio através da estabilidade, do descanso e do retorno ao corpo.",
      Gemini:
        "Sua Lua em Gêmeos se acalma através das palavras, da escrita e de uma troca clara.",
      Cancer:
        "Sua Lua em Câncer se regula em um ambiente íntimo, seguro e emocionalmente confiável.",
      Leo:
        "Sua Lua em Leão recupera equilíbrio através da criatividade, calor e expressão sincera.",
      Virgo:
        "Sua Lua em Virgem se acalma através de uma rotina simples, ação útil e ambiente organizado.",
      Libra:
        "Sua Lua em Libra recupera equilíbrio através de diálogo respeitoso e uma relação mais harmoniosa.",
      Scorpio:
        "Sua Lua em Escorpião se regula através de verdade emocional, confiança e transformação consciente.",
      Sagittarius:
        "Sua Lua em Sagitário se acalma através de espaço, movimento e uma perspectiva significativa.",
      Capricorn:
        "Sua Lua em Capricórnio recupera equilíbrio através de estrutura, descanso e permissão para receber apoio.",
      Aquarius:
        "Sua Lua em Aquário se regula através de distância, liberdade e um espaço no qual sua diferença seja respeitada.",
      Pisces:
        "Sua Lua em Peixes se acalma através de silêncio, criatividade e limites protetores.",
    },

    saturnGuidance: {
      Aries:
        "Seu domínio cresce quando você age sem procurar provar imediatamente sua força.",
      Taurus:
        "Seu domínio cresce quando adapta progressivamente suas bases.",
      Gemini:
        "Seu domínio cresce quando expressa suas ideias antes que estejam perfeitas.",
      Cancer:
        "Seu domínio cresce quando reconhece e expressa suas necessidades emocionais.",
      Leo:
        "Seu domínio cresce quando cria sem transformar aprovação em condição.",
      Virgo:
        "Seu domínio cresce quando aceita progresso imperfeito, porém constante.",
      Libra:
        "Seu domínio cresce quando toma posição sem temer toda discordância.",
      Scorpio:
        "Seu domínio cresce quando desenvolve confiança progressiva sem abandonar seu discernimento.",
      Sagittarius:
        "Seu domínio cresce quando dá continuidade concreta à sua visão.",
      Capricorn:
        "Seu domínio cresce quando sua disciplina também respeita sua humanidade.",
      Aquarius:
        "Seu domínio cresce quando sua originalidade faz parte de um compromisso real.",
      Pisces:
        "Seu domínio cresce quando sua sensibilidade é sustentada por limites simples e estáveis.",
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

export function localizeSignatureIntegrationGuide(
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
  | Profils des 12 signes
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const INTEGRATION_BY_SIGN:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\n\};(?=\n\n\/\*\n\|-+\n\| Conseils complémentaires)/,
    `const INTEGRATION_BY_SIGN: Record<
  string,
  IntegrationProfile
> = ${JSON.stringify(
      labels.profiles,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Conseils Lune
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const MOON_GUIDANCE:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\n\};(?=\n\nconst SATURN_GUIDANCE)/,
    `const MOON_GUIDANCE: Record<string, string> = ${JSON.stringify(
      labels.moonGuidance,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Conseils Saturne
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const SATURN_GUIDANCE:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\n\};/,
    `const SATURN_GUIDANCE: Record<string, string> = ${JSON.stringify(
      labels.saturnGuidance,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Éléments visibles
  |--------------------------------------------------------------------------
  */

  const elementMap = {
    Aries: labels.fire,
    Leo: labels.fire,
    Sagittarius: labels.fire,

    Taurus: labels.earth,
    Virgo: labels.earth,
    Capricorn: labels.earth,

    Gemini: labels.air,
    Libra: labels.air,
    Aquarius: labels.air,

    Cancer: labels.water,
    Scorpio: labels.water,
    Pisces: labels.water,
  };

  out = out.replace(
    /const ELEMENT_BY_SIGN:\s*Record<string,\s*"Feu"\s*\|\s*"Terre"\s*\|\s*"Air"\s*\|\s*"Eau">\s*=\s*\{[\s\S]*?\};/,
    `const ELEMENT_BY_SIGN: Record<string, string> = ${JSON.stringify(
      elementMap,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Modalités visibles
  |--------------------------------------------------------------------------
  */

  const modalityMap = {
    Aries: labels.cardinal,
    Cancer: labels.cardinal,
    Libra: labels.cardinal,
    Capricorn: labels.cardinal,

    Taurus: labels.fixed,
    Leo: labels.fixed,
    Scorpio: labels.fixed,
    Aquarius: labels.fixed,

    Gemini: labels.mutable,
    Virgo: labels.mutable,
    Sagittarius: labels.mutable,
    Pisces: labels.mutable,
  };

  out = out.replace(
    /const MODALITY_BY_SIGN:\s*Record<string,\s*"Cardinal"\s*\|\s*"Fixe"\s*\|\s*"Mutable">\s*=\s*\{[\s\S]*?\};/,
    `const MODALITY_BY_SIGN: Record<string, string> = ${JSON.stringify(
      modalityMap,
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
    "Votre Lune montre la manière dont votre monde émotionnel retrouve naturellement un sentiment de sécurité.",
    labels.moonFallback,
  );

  out = replaceFlexibleText(
    out,
    "Saturne montre la qualité que vous développez progressivement grâce à la patience, aux limites et à l’expérience.",
    labels.saturnFallback,
  );

  /*
  |--------------------------------------------------------------------------
  | Valeurs dynamiques générales
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /"non précisé"/g,
    JSON.stringify(
      labels.unspecified,
    ),
  );

  out = out.replace(
    /"différent"/g,
    JSON.stringify(
      labels.different,
    ),
  );

  /*
  |--------------------------------------------------------------------------
  | Synthèse noyau Soleil / Lune / Ascendant
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /function buildCoreIntegration\([\s\S]*?\n\}/,
    `function buildCoreIntegration(
  sun?: PlanetData,
  moon?: PlanetData,
  ascendantSign?: string
): string {
  const sunSign = sun?.sign ?? "";
  const moonSign = moon?.sign ?? "";
  const ascSign = ascendantSign ?? "";

  const sunFr = getFrenchSign(sunSign) || ${JSON.stringify(labels.unspecified)};
  const moonFr = getFrenchSign(moonSign) || ${JSON.stringify(labels.unspecified)};
  const ascFr = getFrenchSign(ascSign) || ${JSON.stringify(labels.unspecified)};

  const sunElement = getElement(sunSign);
  const moonElement = getElement(moonSign);
  const ascElement = getElement(ascSign);

  if (
    sunElement &&
    sunElement === moonElement &&
    sunElement === ascElement
  ) {
    return ${JSON.stringify(
      locale === "en"
        ? "Your Sun in "
        : locale === "es"
          ? "Tu Sol en "
          : locale === "de"
            ? "Ihre Sonne in "
            : locale === "it"
              ? "Il tuo Sole in "
              : "Seu Sol em ",
    )} +
      sunFr +
      ${JSON.stringify(
        locale === "en"
          ? ", your Moon in "
          : locale === "es"
            ? ", tu Luna en "
            : locale === "de"
              ? ", Ihr Mond in "
              : locale === "it"
                ? ", la tua Luna in "
                : ", sua Lua em ",
      )} +
      moonFr +
      ${JSON.stringify(
        locale === "en"
          ? ", and your Ascendant "
          : locale === "es"
            ? " y tu Ascendente "
            : locale === "de"
              ? " und Ihr Aszendent "
              : locale === "it"
                ? " e il tuo Ascendente "
                : " e seu Ascendente ",
      )} +
      ascFr +
      ${JSON.stringify(
        locale === "en"
          ? " all belong to the "
          : locale === "es"
            ? " pertenecen todos al elemento "
            : locale === "de"
              ? " gehören alle zum Element "
              : locale === "it"
                ? " appartengono tutti all’elemento "
                : " pertencem todos ao elemento ",
      )} +
      sunElement +
      ${JSON.stringify(
        locale === "en"
          ? " element. Your identity, emotional needs, and way of approaching the world therefore speak a similar language. This coherence strengthens your authenticity, but it can also intensify the reflexes associated with this element when you are under pressure."
          : locale === "es"
            ? ". Tu identidad, tus necesidades emocionales y tu manera de abordar el mundo hablan por tanto un lenguaje parecido. Esta coherencia refuerza tu autenticidad, pero también puede acentuar los reflejos propios de este elemento cuando estás bajo presión."
            : locale === "de"
              ? ". Ihre Identität, emotionalen Bedürfnisse und Ihre Art, der Welt zu begegnen, sprechen daher eine ähnliche Sprache. Diese Kohärenz stärkt Ihre Authentizität, kann unter Druck jedoch auch die typischen Reaktionsmuster dieses Elements verstärken."
              : locale === "it"
                ? ". La tua identità, i tuoi bisogni emotivi e il tuo modo di affrontare il mondo parlano quindi un linguaggio simile. Questa coerenza rafforza la tua autenticità, ma può anche accentuare i riflessi tipici di questo elemento sotto pressione."
                : ". Sua identidade, suas necessidades emocionais e sua maneira de abordar o mundo falam, portanto, uma linguagem semelhante. Essa coerência reforça sua autenticidade, mas também pode acentuar os reflexos próprios desse elemento quando você está sob pressão.",
      )};
  }

  if (sunElement && sunElement === moonElement) {
    return ${JSON.stringify(
      locale === "en"
        ? "Your Sun in "
        : locale === "es"
          ? "Tu Sol en "
          : locale === "de"
            ? "Ihre Sonne in "
            : locale === "it"
              ? "Il tuo Sole in "
              : "Seu Sol em ",
    )} +
      sunFr +
      ${JSON.stringify(
        locale === "en"
          ? " and your Moon in "
          : locale === "es"
            ? " y tu Luna en "
            : locale === "de"
              ? " und Ihr Mond in "
              : locale === "it"
                ? " e la tua Luna in "
                : " e sua Lua em ",
      )} +
      moonFr +
      ${JSON.stringify(
        locale === "en"
          ? " share the "
          : locale === "es"
            ? " comparten el elemento "
            : locale === "de"
              ? " teilen das Element "
              : locale === "it"
                ? " condividono l’elemento "
                : " compartilham o elemento ",
      )} +
      sunElement +
      ${JSON.stringify(
        locale === "en"
          ? " element. Your conscious will and emotional world can therefore naturally support each other. Your Ascendant "
          : locale === "es"
            ? ". Tu voluntad consciente y tu mundo emocional pueden apoyarse naturalmente. Tu Ascendente "
            : locale === "de"
              ? ". Ihr bewusster Wille und Ihre emotionale Welt können sich daher natürlich unterstützen. Ihr Aszendent "
              : locale === "it"
                ? ". La tua volontà consapevole e il tuo mondo emotivo possono quindi sostenersi naturalmente. Il tuo Ascendente "
                : ". Sua vontade consciente e seu mundo emocional podem, assim, apoiar-se naturalmente. Seu Ascendente ",
      )} +
      ascFr +
      ${JSON.stringify(
        locale === "en"
          ? ", connected with the "
          : locale === "es"
            ? ", ligado al elemento "
            : locale === "de"
              ? ", verbunden mit dem Element "
              : locale === "it"
                ? ", legato all’elemento "
                : ", ligado ao elemento ",
      )} +
      (ascElement || ${JSON.stringify(labels.different)}) +
      ${JSON.stringify(
        locale === "en"
          ? ", nevertheless adds a different way of presenting yourself and entering action."
          : locale === "es"
            ? ", añade sin embargo una manera diferente de presentarte y entrar en acción."
            : locale === "de"
              ? ", fügt jedoch eine andere Art hinzu, sich zu zeigen und ins Handeln zu kommen."
              : locale === "it"
                ? ", aggiunge tuttavia un modo diverso di presentarti e passare all’azione."
                : ", acrescenta, porém, uma maneira diferente de se apresentar e entrar em ação.",
      )};
  }

  if (sunElement && sunElement === ascElement) {
    return ${JSON.stringify(
      locale === "en"
        ? "Your Sun in "
        : locale === "es"
          ? "Tu Sol en "
          : locale === "de"
            ? "Ihre Sonne in "
            : locale === "it"
              ? "Il tuo Sole in "
              : "Seu Sol em ",
    )} +
      sunFr +
      ${JSON.stringify(
        locale === "en"
          ? " and your Ascendant "
          : locale === "es"
            ? " y tu Ascendente "
            : locale === "de"
              ? " und Ihr Aszendent "
              : locale === "it"
                ? " e il tuo Ascendente "
                : " e seu Ascendente ",
      )} +
      ascFr +
      ${JSON.stringify(
        locale === "en"
          ? " share the "
          : locale === "es"
            ? " comparten el elemento "
            : locale === "de"
              ? " teilen das Element "
              : locale === "it"
                ? " condividono l’elemento "
                : " compartilham o elemento ",
      )} +
      sunElement +
      ${JSON.stringify(
        locale === "en"
          ? " element. What you seek to become and what you spontaneously show can therefore appear fairly coherent. Your Moon in "
          : locale === "es"
            ? ". Aquello que buscas llegar a ser y lo que muestras espontáneamente pueden parecer bastante coherentes. Tu Luna en "
            : locale === "de"
              ? ". Was Sie werden möchten und was Sie spontan zeigen, kann daher recht stimmig wirken. Ihr Mond in "
              : locale === "it"
                ? ". Ciò che cerchi di diventare e ciò che mostri spontaneamente possono quindi apparire abbastanza coerenti. La tua Luna in "
                : ". Aquilo que você procura se tornar e aquilo que mostra espontaneamente podem parecer bastante coerentes. Sua Lua em ",
      )} +
      moonFr +
      ${JSON.stringify(
        locale === "en"
          ? ", connected with the "
          : locale === "es"
            ? ", ligada al elemento "
            : locale === "de"
              ? ", verbunden mit dem Element "
              : locale === "it"
                ? ", legata all’elemento "
                : ", ligada ao elemento ",
      )} +
      (moonElement || ${JSON.stringify(labels.different)}) +
      ${JSON.stringify(
        locale === "en"
          ? ", reveals more nuanced inner needs that need to be recognized."
          : locale === "es"
            ? ", revela necesidades interiores más matizadas que necesitan ser reconocidas."
            : locale === "de"
              ? ", zeigt differenziertere innere Bedürfnisse, die anerkannt werden möchten."
              : locale === "it"
                ? ", rivela bisogni interiori più sfumati che devono essere riconosciuti."
                : ", revela necessidades interiores mais sutis que precisam ser reconhecidas.",
      )};
  }

  if (moonElement && moonElement === ascElement) {
    return ${JSON.stringify(
      locale === "en"
        ? "Your Moon in "
        : locale === "es"
          ? "Tu Luna en "
          : locale === "de"
            ? "Ihr Mond in "
            : locale === "it"
              ? "La tua Luna in "
              : "Sua Lua em ",
    )} +
      moonFr +
      ${JSON.stringify(
        locale === "en"
          ? " and your Ascendant "
          : locale === "es"
            ? " y tu Ascendente "
            : locale === "de"
              ? " und Ihr Aszendent "
              : locale === "it"
                ? " e il tuo Ascendente "
                : " e seu Ascendente ",
      )} +
      ascFr +
      ${JSON.stringify(
        locale === "en"
          ? " share the "
          : locale === "es"
            ? " comparten el elemento "
            : locale === "de"
              ? " teilen das Element "
              : locale === "it"
                ? " condividono l’elemento "
                : " compartilham o elemento ",
      )} +
      moonElement +
      ${JSON.stringify(
        locale === "en"
          ? " element. Your emotional reactions can therefore become quickly visible in the way you approach situations. Your Sun in "
          : locale === "es"
            ? ". Tus reacciones emocionales pueden volverse rápidamente visibles en tu manera de abordar las situaciones. Tu Sol en "
            : locale === "de"
              ? ". Ihre emotionalen Reaktionen können daher schnell sichtbar werden, wenn Sie Situationen begegnen. Ihre Sonne in "
              : locale === "it"
                ? ". Le tue reazioni emotive possono quindi diventare rapidamente visibili nel modo in cui affronti le situazioni. Il tuo Sole in "
                : ". Suas reações emocionais podem se tornar rapidamente visíveis na maneira como você aborda as situações. Seu Sol em ",
      )} +
      sunFr +
      ${JSON.stringify(
        locale === "en"
          ? ", connected with the "
          : locale === "es"
            ? ", ligado al elemento "
            : locale === "de"
              ? ", verbunden mit dem Element "
              : locale === "it"
                ? ", legato all’elemento "
                : ", ligado ao elemento ",
      )} +
      (sunElement || ${JSON.stringify(labels.different)}) +
      ${JSON.stringify(
        locale === "en"
          ? ", invites you to build a conscious direction that does not depend only on your first reflex."
          : locale === "es"
            ? ", te invita a construir una dirección consciente que no dependa únicamente de tu primer reflejo."
            : locale === "de"
              ? ", lädt Sie ein, eine bewusste Richtung aufzubauen, die nicht nur von Ihrem ersten Reflex abhängt."
              : locale === "it"
                ? ", ti invita a costruire una direzione consapevole che non dipenda soltanto dal tuo primo riflesso."
                : ", convida você a construir uma direção consciente que não dependa apenas do seu primeiro reflexo.",
      )};
  }

  return ${JSON.stringify(
    locale === "en"
      ? "Your Sun in "
      : locale === "es"
        ? "Tu Sol en "
        : locale === "de"
          ? "Ihre Sonne in "
          : locale === "it"
            ? "Il tuo Sole in "
            : "Seu Sol em ",
  )} +
    sunFr +
    ${JSON.stringify(
      locale === "en"
        ? ", your Moon in "
        : locale === "es"
          ? ", tu Luna en "
          : locale === "de"
            ? ", Ihr Mond in "
            : locale === "it"
              ? ", la tua Luna in "
              : ", sua Lua em ",
    )} +
    moonFr +
    ${JSON.stringify(
      locale === "en"
        ? ", and your Ascendant "
        : locale === "es"
          ? " y tu Ascendente "
          : locale === "de"
            ? " und Ihr Aszendent "
            : locale === "it"
              ? " e il tuo Ascendente "
              : " e seu Ascendente ",
    )} +
    ascFr +
    ${JSON.stringify(
      locale === "en"
        ? " belong to different registers. This diversity enriches your personality, but it can also create needs that do not always progress at the same pace. Your integration consists in allowing your identity, sensitivity, and way of acting to participate together in your decisions."
        : locale === "es"
          ? " pertenecen a registros diferentes. Esta diversidad enriquece tu personalidad, pero también puede crear necesidades que no siempre avanzan al mismo ritmo. Tu integración consiste en permitir que tu identidad, sensibilidad y manera de actuar participen juntas en tus decisiones."
          : locale === "de"
            ? " gehören zu unterschiedlichen Ausdrucksebenen. Diese Vielfalt bereichert Ihre Persönlichkeit, kann jedoch auch Bedürfnisse schaffen, die sich nicht immer im gleichen Tempo entwickeln. Integration bedeutet, Identität, Sensibilität und Handlungsweise gemeinsam an Ihren Entscheidungen zu beteiligen."
            : locale === "it"
              ? " appartengono a registri differenti. Questa diversità arricchisce la tua personalità, ma può anche creare bisogni che non procedono sempre allo stesso ritmo. La tua integrazione consiste nel lasciare che identità, sensibilità e modo di agire partecipino insieme alle tue decisioni."
              : " pertencem a registros diferentes. Essa diversidade enriquece sua personalidade, mas também pode criar necessidades que nem sempre avançam no mesmo ritmo. Sua integração consiste em permitir que identidade, sensibilidade e maneira de agir participem juntas das suas decisões.",
    )};
}`,
  );

  /*
  |--------------------------------------------------------------------------
  | Synthèse décision
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /function buildDecisionGuidance\([\s\S]*?\n\}/,
    `function buildDecisionGuidance(
  mercury?: PlanetData,
  mars?: PlanetData,
  saturn?: PlanetData
): string {
  const mercuryFr =
    getFrenchSign(mercury?.sign) || ${JSON.stringify(labels.unspecified)};
  const marsFr =
    getFrenchSign(mars?.sign) || ${JSON.stringify(labels.unspecified)};
  const saturnFr =
    getFrenchSign(saturn?.sign) || ${JSON.stringify(labels.unspecified)};

  const mercuryModality = getModality(mercury?.sign);
  const marsModality = getModality(mars?.sign);

  const pace =
    mercuryModality === ${JSON.stringify(labels.cardinal)} ||
    marsModality === ${JSON.stringify(labels.cardinal)}
      ? ${JSON.stringify(
          locale === "en"
            ? "You may feel the need to decide or act quickly."
            : locale === "es"
              ? "Puedes sentir la necesidad de decidir o actuar rápidamente."
              : locale === "de"
                ? "Sie können das Bedürfnis verspüren, schnell zu entscheiden oder zu handeln."
                : locale === "it"
                  ? "Puoi sentire il bisogno di decidere o agire rapidamente."
                  : "Você pode sentir necessidade de decidir ou agir rapidamente.",
        )}
      : mercuryModality === ${JSON.stringify(labels.fixed)} ||
        marsModality === ${JSON.stringify(labels.fixed)}
        ? ${JSON.stringify(
            locale === "en"
              ? "You tend to deepen or maintain a position before changing direction."
              : locale === "es"
                ? "Tiendes a profundizar o mantener una posición antes de cambiar de dirección."
                : locale === "de"
                  ? "Sie neigen dazu, eine Position zu vertiefen oder beizubehalten, bevor Sie die Richtung ändern."
                  : locale === "it"
                    ? "Tendi ad approfondire o mantenere una posizione prima di cambiare direzione."
                    : "Você tende a aprofundar ou manter uma posição antes de mudar de direção.",
          )}
        : ${JSON.stringify(
            locale === "en"
              ? "You can quickly adapt your thinking and action according to the available information."
              : locale === "es"
                ? "Puedes adaptar rápidamente tu pensamiento y tu acción según la información disponible."
                : locale === "de"
                  ? "Sie können Denken und Handeln schnell an die verfügbaren Informationen anpassen."
                  : locale === "it"
                    ? "Puoi adattare rapidamente pensiero e azione in base alle informazioni disponibili."
                    : "Você pode adaptar rapidamente pensamento e ação de acordo com as informações disponíveis.",
          )};

  return ${JSON.stringify(
    locale === "en"
      ? "Mercury in "
      : locale === "es"
        ? "Mercurio en "
        : locale === "de"
          ? "Merkur in "
          : locale === "it"
            ? "Mercurio in "
            : "Mercúrio em ",
  )} +
    mercuryFr +
    ${JSON.stringify(
      locale === "en"
        ? " describes the way you think, Mars in "
        : locale === "es"
          ? " describe tu manera de pensar, Marte en "
          : locale === "de"
            ? " beschreibt Ihre Denkweise, Mars in "
            : locale === "it"
              ? " descrive il tuo modo di pensare, Marte in "
              : " descreve sua maneira de pensar, Marte em ",
    )} +
    marsFr +
    ${JSON.stringify(
      locale === "en"
        ? " your passage into action, and Saturn in "
        : locale === "es"
          ? " tu paso a la acción y Saturno en "
          : locale === "de"
            ? " Ihren Übergang zum Handeln und Saturn in "
            : locale === "it"
              ? " il tuo passaggio all’azione e Saturno in "
              : " sua passagem à ação e Saturno em ",
    )} +
    saturnFr +
    ${JSON.stringify(
      locale === "en"
        ? " your filter of caution. "
        : locale === "es"
          ? " tu filtro de prudencia. "
          : locale === "de"
            ? " Ihren Vorsichtsfilter. "
            : locale === "it"
              ? " il tuo filtro di prudenza. "
              : " seu filtro de prudência. ",
    )} +
    pace +
    ${JSON.stringify(
      locale === "en"
        ? " Your best decision appears when you let Mercury clarify the facts, Mars name what you truly want, and Saturn verify what can be sustained over time."
        : locale === "es"
          ? " Tu mejor decisión aparece cuando dejas que Mercurio aclare los hechos, Marte nombre aquello que realmente deseas y Saturno verifique lo que puede sostenerse en el tiempo."
          : locale === "de"
            ? " Ihre beste Entscheidung entsteht, wenn Merkur die Fakten klärt, Mars benennt, was Sie wirklich möchten, und Saturn prüft, was langfristig getragen werden kann."
            : locale === "it"
              ? " La tua decisione migliore emerge quando lasci che Mercurio chiarisca i fatti, Marte definisca ciò che desideri davvero e Saturno verifichi ciò che può essere sostenuto nel tempo."
              : " Sua melhor decisão surge quando Mercúrio esclarece os fatos, Marte identifica aquilo que você realmente deseja e Saturno verifica o que pode ser sustentado ao longo do tempo.",
    )};
}`,
  );

  /*
  |--------------------------------------------------------------------------
  | Synthèse relationnelle
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /function buildRelationshipSynthesis\([\s\S]*?\n\}/,
    `function buildRelationshipSynthesis(
  moon?: PlanetData,
  venus?: PlanetData,
  mars?: PlanetData
): string {
  const moonFr =
    getFrenchSign(moon?.sign) || ${JSON.stringify(labels.unspecified)};
  const venusFr =
    getFrenchSign(venus?.sign) || ${JSON.stringify(labels.unspecified)};
  const marsFr =
    getFrenchSign(mars?.sign) || ${JSON.stringify(labels.unspecified)};

  const moonElement = getElement(moon?.sign);
  const venusElement = getElement(venus?.sign);

  const harmony =
    moonElement &&
    venusElement &&
    moonElement === venusElement
      ? ${JSON.stringify(
          locale === "en"
            ? "Your emotional needs and your way of loving use a fairly similar language."
            : locale === "es"
              ? "Tus necesidades emocionales y tu manera de amar utilizan un lenguaje bastante parecido."
              : locale === "de"
                ? "Ihre emotionalen Bedürfnisse und Ihre Art zu lieben sprechen eine recht ähnliche Sprache."
                : locale === "it"
                  ? "I tuoi bisogni emotivi e il tuo modo di amare utilizzano un linguaggio abbastanza simile."
                  : "Suas necessidades emocionais e sua maneira de amar utilizam uma linguagem bastante semelhante.",
        )}
      : ${JSON.stringify(
          locale === "en"
            ? "Your emotional needs and your way of loving do not necessarily express themselves in the same way."
            : locale === "es"
              ? "Tus necesidades emocionales y tu manera de amar no se expresan necesariamente de la misma manera."
              : locale === "de"
                ? "Ihre emotionalen Bedürfnisse und Ihre Art zu lieben drücken sich nicht zwangsläufig auf dieselbe Weise aus."
                : locale === "it"
                  ? "I tuoi bisogni emotivi e il tuo modo di amare non si esprimono necessariamente nello stesso modo."
                  : "Suas necessidades emocionais e sua maneira de amar não se expressam necessariamente da mesma forma.",
        )};

  return ${JSON.stringify(
    locale === "en"
      ? "Your Moon in "
      : locale === "es"
        ? "Tu Luna en "
        : locale === "de"
          ? "Ihr Mond in "
          : locale === "it"
            ? "La tua Luna in "
            : "Sua Lua em ",
  )} +
    moonFr +
    ${JSON.stringify(
      locale === "en"
        ? " shows what reassures you, Venus in "
        : locale === "es"
          ? " muestra lo que te tranquiliza, Venus en "
          : locale === "de"
            ? " zeigt, was Ihnen Sicherheit gibt, Venus in "
            : locale === "it"
              ? " mostra ciò che ti rassicura, Venere in "
              : " mostra aquilo que tranquiliza você, Vênus em ",
    )} +
    venusFr +
    ${JSON.stringify(
      locale === "en"
        ? " what you value in a relationship, and Mars in "
        : locale === "es"
          ? " aquello que valoras en una relación y Marte en "
          : locale === "de"
            ? " was Sie in einer Beziehung wertschätzen, und Mars in "
            : locale === "it"
              ? " ciò che valorizzi in una relazione e Marte in "
              : " aquilo que você valoriza em uma relação e Marte em ",
    )} +
    marsFr +
    ${JSON.stringify(
      locale === "en"
        ? " the way you express desire or disagreement. "
        : locale === "es"
          ? " la manera en que expresas el deseo o el desacuerdo. "
          : locale === "de"
            ? " die Art, wie Sie Verlangen oder Widerspruch ausdrücken. "
            : locale === "it"
              ? " il modo in cui esprimi desiderio o disaccordo. "
              : " a maneira como expressa desejo ou discordância. ",
    )} +
    harmony +
    ${JSON.stringify(
      locale === "en"
        ? " In your relationships, your balance grows when you clearly express your needs before Mars transforms silent frustration into reaction."
        : locale === "es"
          ? " En tus vínculos, tu equilibrio crece cuando expresas claramente tus necesidades antes de que Marte transforme una frustración silenciosa en reacción."
          : locale === "de"
            ? " In Ihren Beziehungen wächst Ihr Gleichgewicht, wenn Sie Bedürfnisse klar ausdrücken, bevor Mars stille Frustration in eine Reaktion verwandelt."
            : locale === "it"
              ? " Nelle tue relazioni, il tuo equilibrio cresce quando esprimi chiaramente i bisogni prima che Marte trasformi una frustrazione silenziosa in reazione."
              : " Nos seus vínculos, seu equilíbrio cresce quando você expressa claramente suas necessidades antes que Marte transforme uma frustração silenciosa em reação.",
    )};
}`,
  );

  /*
  |--------------------------------------------------------------------------
  | Synthèse professionnelle
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /function buildProfessionalSynthesis\([\s\S]*?\n\}/,
    `function buildProfessionalSynthesis(
  sun?: PlanetData,
  jupiter?: PlanetData,
  saturn?: PlanetData,
  midheavenSign?: string
): string {
  const sunFr =
    getFrenchSign(sun?.sign) || ${JSON.stringify(labels.unspecified)};
  const jupiterFr =
    getFrenchSign(jupiter?.sign) || ${JSON.stringify(labels.unspecified)};
  const saturnFr =
    getFrenchSign(saturn?.sign) || ${JSON.stringify(labels.unspecified)};
  const mcFr =
    getFrenchSign(midheavenSign) || ${JSON.stringify(labels.unspecified)};

  return ${JSON.stringify(
    locale === "en"
      ? "Your Sun in "
      : locale === "es"
        ? "Tu Sol en "
        : locale === "de"
          ? "Ihre Sonne in "
          : locale === "it"
            ? "Il tuo Sole in "
            : "Seu Sol em ",
  )} +
    sunFr +
    ${JSON.stringify(
      locale === "en"
        ? " indicates the quality you seek to embody, Jupiter in "
        : locale === "es"
          ? " indica la cualidad que buscas encarnar, Júpiter en "
          : locale === "de"
            ? " zeigt die Qualität, die Sie verkörpern möchten, Jupiter in "
            : locale === "it"
              ? " indica la qualità che cerchi di incarnare, Giove in "
              : " indica a qualidade que você procura incorporar, Júpiter em ",
    )} +
    jupiterFr +
    ${JSON.stringify(
      locale === "en"
        ? " the way you expand your possibilities, Saturn in "
        : locale === "es"
          ? " la manera en que amplías tus posibilidades, Saturno en "
          : locale === "de"
            ? " die Art, wie Sie Ihre Möglichkeiten erweitern, Saturn in "
            : locale === "it"
              ? " il modo in cui ampli le tue possibilità, Saturno in "
              : " a maneira como amplia suas possibilidades, Saturno em ",
    )} +
    saturnFr +
    ${JSON.stringify(
      locale === "en"
        ? " what you build patiently, and the Midheaven in "
        : locale === "es"
          ? " aquello que construyes con paciencia y el Medio Cielo en "
          : locale === "de"
            ? " das, was Sie geduldig aufbauen, und das Medium Coeli in "
            : locale === "it"
              ? " ciò che costruisci con pazienza e il Medio Cielo in "
              : " aquilo que constrói com paciência e o Meio do Céu em ",
    )} +
    mcFr +
    ${JSON.stringify(
      locale === "en"
        ? " your social direction. Your professional progress becomes stronger when Jupiter's ambition remains aligned with your solar identity and can be organized by Saturn into realistic steps."
        : locale === "es"
          ? " tu dirección social. Tu progreso profesional se vuelve más sólido cuando la ambición de Júpiter permanece alineada con tu identidad solar y puede ser organizada por Saturno en etapas realistas."
          : locale === "de"
            ? " Ihre gesellschaftliche Richtung. Ihre berufliche Entwicklung wird stabiler, wenn Jupiters Ehrgeiz mit Ihrer Sonnenidentität übereinstimmt und von Saturn in realistische Schritte gegliedert werden kann."
            : locale === "it"
              ? " la tua direzione sociale. La tua crescita professionale diventa più solida quando l’ambizione di Giove rimane allineata con la tua identità solare e può essere organizzata da Saturno in tappe realistiche."
              : " sua direção social. Seu progresso profissional se torna mais sólido quando a ambição de Júpiter permanece alinhada à sua identidade solar e pode ser organizada por Saturno em etapas realistas.",
    )};
}`,
  );

  /*
  |--------------------------------------------------------------------------
  | Textes fixes
  |--------------------------------------------------------------------------
  */

  const replacements:
    Array<[string, string]> = [
      [
        "Analyse Signature",
        labels.analysis,
      ],

      [
        "Votre guide d’intégration",
        labels.guideTitle,
      ],

      [
        "Des repères concrets pour utiliser votre thème dans vos choix, vos relations et votre évolution quotidienne.",
        labels.guideSubtitle,
      ],

      [
        "Votre direction d’intégration",
        labels.integrationDirection,
      ],

      [
        "À observer",
        labels.observeLabel,
      ],

      [
        "Le réflexe qui mérite votre attention",
        labels.observeTitle,
      ],

      [
        "À nourrir",
        labels.nourishLabel,
      ],

      [
        "La qualité qui soutient votre évolution",
        labels.nourishTitle,
      ],

      [
        "À équilibrer",
        labels.balanceLabel,
      ],

      [
        "La polarité à développer",
        labels.balanceTitle,
      ],

      [
        "À libérer",
        labels.releaseLabel,
      ],

      [
        "Ce qui ne doit plus diriger vos choix",
        labels.releaseTitle,
      ],

      [
        "« Votre thème devient réellement utile lorsqu’il vous aide à reconnaître vos automatismes, à mieux comprendre vos besoins et à choisir une réponse plus consciente. »",
        labels.quote,
      ],

      [
        "Votre plan d’action personnel",
        labels.actionPlan,
      ],

      [
        "Intégrer votre thème dans les domaines essentiels de votre vie",
        labels.integrateLife,
      ],

      [
        "L’intégration ne demande pas de modifier toute votre vie en une seule fois. Elle se construit dans les décisions répétées, les habitudes simples et les réponses différentes que vous choisissez face aux situations familières.",
        labels.actionIntro,
      ],

      [
        "Dans votre quotidien",
        labels.daily,
      ],

      [
        "Dans vos relations",
        labels.relationships,
      ],

      [
        "Dans votre vie professionnelle",
        labels.professionalLife,
      ],

      [
        "Dans votre monde intérieur",
        labels.innerWorld,
      ],

      [
        "Vos repères astrologiques",
        labels.astrologicalMarkers,
      ],

      [
        "Quatre forces à utiliser ensemble",
        labels.fourForces,
      ],

      [
        "Le Soleil donne la direction, la Lune protège votre équilibre émotionnel, l’Ascendant décrit votre première réponse au monde, Jupiter ouvre les possibilités et Saturne construit la maîtrise.",
        labels.fourForcesIntro,
      ],

      [
        "La direction que vous cherchez à développer consciemment.",
        labels.sunRole,
      ],

      [
        "Vos besoins émotionnels et votre sécurité intérieure.",
        labels.moonRole,
      ],

      [
        "Votre confiance, votre expansion et vos possibilités.",
        labels.jupiterRole,
      ],

      [
        "Votre maîtrise, vos limites et vos apprentissages durables.",
        labels.saturnRole,
      ],

      [
        "Pour protéger votre équilibre émotionnel",
        labels.protectBalance,
      ],

      [
        "Pour construire votre maîtrise",
        labels.buildMastery,
      ],

      [
        "Trois engagements personnels",
        labels.threeCommitments,
      ],

      [
        "Reconnaître vos besoins avant qu’ils ne deviennent de la fatigue, de la frustration ou un retrait.",
        labels.commitment1,
      ],

      [
        "Choisir une action réaliste plutôt que d’attendre une transformation parfaite.",
        labels.commitment2,
      ],

      [
        "Relire ce guide lorsque vous traversez une période de doute, de changement ou de décision.",
        labels.commitment3,
      ],

      [
        "Votre affirmation Signature",
        labels.signatureAffirmation,
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
  | Noms visibles des planètes
  |--------------------------------------------------------------------------
  |
  | Les clés techniques restent :
  |
  | Sun
  | Moon
  | Mercury
  | Venus
  | Mars
  | Saturn
  | Jupiter
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    />\s*Soleil\s*</g,
    `>${labels.sun}<`,
  );

  out = out.replace(
    />\s*Lune\s*</g,
    `>${labels.moon}<`,
  );

  out = out.replace(
    />\s*Jupiter\s*</g,
    `>${labels.jupiter}<`,
  );

  out = out.replace(
    />\s*Saturne\s*</g,
    `>${labels.saturn}<`,
  );

  return out;
}
