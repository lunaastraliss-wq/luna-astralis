import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<
    PaidPdfLocale,
    "fr"
  >;

type SoulPathProfile = {
  title: string;
  introduction: string;
  oldPattern: string;
  evolution: string;
  innerNeed: string;
  transformation: string;
  alignment: string;
  affirmation: string;
};

type SoulPathLabels = {
  analysis: string;
  title: string;
  subtitle: string;

  evolutionAxis: string;
  oldPatternLabel: string;
  whatCanHoldYouBack: string;
  evolutionaryMovement: string;
  whatPathDevelops: string;
  evolutionQuote: string;

  innerStrengths: string;
  understandNourishment: string;
  innerStrengthsIntro: string;

  sun: string;
  moon: string;
  pluto: string;

  sunRole: string;
  moonRole: string;
  plutoRole: string;

  innerWorldNeeds: string;
  transformationProcess: string;
  alignmentNeed: string;

  consciousIntegration: string;
  experiencesAsPath: string;
  integrationIntro: string;

  transformationLabel: string;
  whatToRelease: string;
  alignmentLabel: string;
  howToKnowProgress: string;

  threeQuestions: string;
  question1: string;
  question2: string;
  question3: string;

  saturnRoleTitle: string;
  saturnIn: string;
  chartFallback: string;
  saturnText: string;

  affirmationLabel: string;

  moonFallback: string;
  plutoFallback: string;

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

  profiles: Record<
    string,
    SoulPathProfile
  >;

  moonNeeds: Record<
    string,
    string
  >;

  plutoTransformations: Record<
    string,
    string
  >;
};

const LABELS: Record<
  NonFrenchLocale,
  SoulPathLabels
> = {
  en: {
    analysis:
      "Signature Analysis",

    title:
      "The path of your soul",

    subtitle:
      "The inner movements that invite you to move beyond old reflexes and become more fully yourself.",

    evolutionAxis:
      "Your axis of evolution",

    oldPatternLabel:
      "Old pattern",

    whatCanHoldYouBack:
      "What can hold you back",

    evolutionaryMovement:
      "Evolutionary movement",

    whatPathDevelops:
      "What your path seeks to develop",

    evolutionQuote:
      "“Your evolution does not require you to reject who you have been. It invites you to use your experiences as a passage toward a freer and more conscious expression of yourself.”",

    innerStrengths:
      "Your inner strengths",

    understandNourishment:
      "Understanding what nourishes and transforms you",

    innerStrengthsIntro:
      "The Sun shows the consciousness you are invited to develop. The Moon reveals the emotional needs that must be respected so that this evolution remains sustainable. Pluto indicates the areas where your path requires deep transformation, while Saturn represents lessons that require time and maturity.",

    sun:
      "Sun",

    moon:
      "Moon",

    pluto:
      "Pluto",

    sunRole:
      "The consciousness you are called to develop and express more fully.",

    moonRole:
      "Your emotional, protective, and instinctive needs.",

    plutoRole:
      "Your capacity to move through losses, crises, and rebirths.",

    innerWorldNeeds:
      "What your inner world needs",

    transformationProcess:
      "Your transformation process",

    alignmentNeed:
      "Your deep need for alignment",

    consciousIntegration:
      "Conscious integration",

    experiencesAsPath:
      "Turning your experiences into a true path of evolution",

    integrationIntro:
      "Your inner path does not follow a perfectly straight line. Some situations may return until you can respond to them from a different level of awareness. Evolution appears when your choices no longer automatically reproduce old protective mechanisms.",

    transformationLabel:
      "Transformation",

    whatToRelease:
      "What you are invited to release",

    alignmentLabel:
      "Alignment",

    howToKnowProgress:
      "How to recognize that you are moving forward",

    threeQuestions:
      "Three questions to ask yourself",

    question1:
      "Does this decision correspond to what I genuinely feel today, or does it reproduce an old way of protecting myself?",

    question2:
      "What emotion or fear is trying to influence my choice, and what do I need in order to listen to it without giving it complete control?",

    question3:
      "What more conscious version of myself could respond differently to this situation?",

    saturnRoleTitle:
      "The role of Saturn in your evolution",

    saturnIn:
      "Saturn in",

    chartFallback:
      "your chart",

    saturnText:
      "reminds you that certain qualities only reveal themselves with time. What first appears to be a limitation can become deep mastery when you accept progressing with patience, consistency, and realism.",

    affirmationLabel:
      "Your Signature affirmation",

    moonFallback:
      "Your Moon reveals the emotional conditions you need in order to remain connected to yourself and move through periods of transformation with greater stability.",

    plutoFallback:
      "Pluto describes the deep transformations that invite you to release old protective mechanisms and rebuild from a more inner truth.",

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
          "Learn to choose your own direction",
        introduction:
          "Your inner path invites you to develop a conscious relationship with courage, initiative, and personal assertion. Your soul seeks to experience life directly, make decisions, and discover what becomes possible when you stop waiting for external permission.",
        oldPattern:
          "You may sometimes react very quickly, confuse movement with genuine progress, or believe that your strength depends on never hesitating.",
        evolution:
          "Your evolution consists of transforming impulse into conscious will. You progress when you choose your battles, own your desires, and learn to act without crushing your sensitivity or that of others.",
        innerNeed:
          "Your soul needs to feel free to initiate, explore, and define itself.",
        transformation:
          "Your transformation occurs when your courage becomes a creative force rather than a defensive reaction.",
        alignment:
          "You are aligned when your decisions are direct, responsible, and thoughtful enough to support a lasting direction.",
        affirmation:
          "I move forward with courage without losing awareness of what I am building.",
      },

      Taurus: {
        title:
          "Transform security into genuine inner stability",
        introduction:
          "Your inner path invites you to develop patience, grounding, and a more conscious relationship with your values. Your soul seeks to build, protect, and give lasting form to what it considers essential.",
        oldPattern:
          "You may sometimes maintain a situation simply because it is familiar, resist change, or associate security with what you possess and control.",
        evolution:
          "Your evolution consists of understanding that true stability does not depend on immobility. It grows from your ability to adapt without denying what matters deeply to you.",
        innerNeed:
          "Your soul needs continuity, simplicity, beauty, and concrete reference points.",
        transformation:
          "Your transformation occurs when you agree to renew your foundations instead of protecting structures that have become limiting.",
        alignment:
          "You are aligned when your choices respect your rhythm while leaving genuine room for evolution.",
        affirmation:
          "I can evolve without losing what gives deep meaning to my life.",
      },

      Gemini: {
        title:
          "Move from curiosity toward living understanding",
        introduction:
          "Your inner path invites you to explore ideas, words, and connections that help you understand the world more deeply. Your soul seeks to learn, transmit, and create bridges between different perspectives.",
        oldPattern:
          "You may sometimes multiply information, change direction quickly, or remain in analysis in order to avoid deeper commitment.",
        evolution:
          "Your evolution consists of choosing certain ideas, deepening them, and giving them real continuity. Your intelligence becomes more powerful when it connects curiosity with experience.",
        innerNeed:
          "Your soul needs exchange, mental movement, and freedom in the way it thinks.",
        transformation:
          "Your transformation occurs when you stop seeking every answer at once and agree to fully inhabit one important question.",
        alignment:
          "You are aligned when your communication becomes clear, sincere, and capable of transmitting genuinely integrated understanding.",
        affirmation:
          "I transform my ideas into living and useful knowledge.",
      },

      Cancer: {
        title:
          "Create emotional security that truly belongs to you",
        introduction:
          "Your inner path invites you to recognize the depth of your sensitivity, memories, and emotional needs. Your soul seeks to understand what genuinely nourishes a sense of belonging.",
        oldPattern:
          "You may sometimes remain attached to the past, carry the emotions of those around you, or believe that your value depends on the protective role you play.",
        evolution:
          "Your evolution consists of caring for yourself with the same presence you offer others. You progress when your emotions become information rather than prisons.",
        innerNeed:
          "Your soul needs gentleness, security, intimacy, and relationships in which it can remain authentic.",
        transformation:
          "Your transformation occurs when you release memories that no longer correspond to your present.",
        alignment:
          "You are aligned when you protect what is precious without closing yourself off or forgetting yourself.",
        affirmation:
          "I create within myself the security I once searched for around me.",
      },

      Leo: {
        title:
          "Move from the need for recognition to the courage to shine",
        introduction:
          "Your inner path invites you to develop a lively, creative, and sincere personal expression. Your soul seeks to recognize its own value and share a light that does not depend entirely on outside attention.",
        oldPattern:
          "You may sometimes measure your value through the attention you receive, hide vulnerability behind pride, or fear that your expression will not be sufficiently recognized.",
        evolution:
          "Your evolution consists of creating from your center. You progress when you embrace what makes you unique, even when the result is not immediately applauded.",
        innerNeed:
          "Your soul needs joy, creation, warmth, and the freedom to express what it carries.",
        transformation:
          "Your transformation occurs when your radiance becomes something you share rather than proof of your value.",
        alignment:
          "You are aligned when you take your place with generosity, dignity, and simplicity.",
        affirmation:
          "My light has value even when it is not immediately recognized.",
      },

      Virgo: {
        title:
          "Transform high standards into compassionate mastery",
        introduction:
          "Your inner path invites you to develop discernment, precision, and a more conscious relationship with service. Your soul seeks to improve, understand, and become useful without reducing itself to performance.",
        oldPattern:
          "You may sometimes focus on what is missing, delay action because of fear of imperfection, or associate your value with being beyond reproach.",
        evolution:
          "Your evolution consists of recognizing that competence grows through experience. You progress when you replace constant criticism with concrete and realistic improvement.",
        innerNeed:
          "Your soul needs clarity, order, usefulness, and the feeling that its efforts produce a tangible effect.",
        transformation:
          "Your transformation occurs when you use your intelligence to support life rather than monitor every mistake.",
        alignment:
          "You are aligned when your high standards become a resource without becoming a permanent judgment.",
        affirmation:
          "I can progress without demanding impossible perfection from myself.",
      },

      Libra: {
        title:
          "Build harmony without abandoning your truth",
        introduction:
          "Your inner path invites you to understand relationships, cooperation, and the balance between yourself and others. Your soul seeks to create fairer bonds without losing its own center.",
        oldPattern:
          "You may sometimes avoid disagreement, delay decisions, or adapt your position excessively in order to preserve fragile peace.",
        evolution:
          "Your evolution consists of developing diplomacy that includes your own truth. You progress when you understand that a healthy relationship can tolerate difference, boundaries, and a clear decision.",
        innerNeed:
          "Your soul needs beauty, respect, exchange, and relationships based on genuine reciprocity.",
        transformation:
          "Your transformation occurs when you stop associating love with self-erasure.",
        alignment:
          "You are aligned when you create harmony from a stable inner center.",
        affirmation:
          "I can love, cooperate, and remain faithful to myself.",
      },

      Scorpio: {
        title:
          "Transform the fear of loss into the power of rebirth",
        introduction:
          "Your inner path invites you to explore the deeper areas of human experience: attachment, trust, vulnerability, loss, and transformation. Your soul seeks to understand what remains when old structures disappear.",
        oldPattern:
          "You may sometimes hold on, control, test, or hide your vulnerability in order to reduce the risk of being hurt or betrayed.",
        evolution:
          "Your evolution consists of recognizing that your power does not depend on controlling everything. You progress when you allow what has lost its truth to end and agree to rebuild from a more authentic place.",
        innerNeed:
          "Your soul needs depth, loyalty, intensity, and relationships capable of supporting genuine transformation.",
        transformation:
          "Your transformation occurs when you choose lucidity without locking yourself into mistrust.",
        alignment:
          "You are aligned when your intensity becomes a force for healing, creation, and renewal.",
        affirmation:
          "I can move through change without losing my inner power.",
      },

      Sagittarius: {
        title:
          "Transform the search for freedom into a quest for truth",
        introduction:
          "Your inner path invites you to explore, learn, and broaden your understanding of life. Your soul seeks a meaningful direction and a truth wide enough to support its need for evolution.",
        oldPattern:
          "You may sometimes flee limitations, multiply experiences, or defend a belief before fully exploring its complexity.",
        evolution:
          "Your evolution consists of uniting freedom with responsibility. You progress when your discoveries become lived wisdom rather than a succession of possibilities.",
        innerNeed:
          "Your soul needs space, hope, movement, and a vision that gives meaning to its experiences.",
        transformation:
          "Your transformation occurs when you stop searching elsewhere for what your present experience is already trying to teach you.",
        alignment:
          "You are aligned when your freedom nourishes your awareness and your ability to transmit what you have learned.",
        affirmation:
          "I broaden my horizons without fleeing the responsibilities that give meaning to my path.",
      },

      Capricorn: {
        title:
          "Transform duty into inner authority",
        introduction:
          "Your inner path invites you to develop patience, responsibility, and a genuine capacity to build over time. Your soul seeks to create a body of work, structure, or mastery capable of enduring challenges.",
        oldPattern:
          "You may sometimes impose excessive responsibility on yourself, believe that your value depends only on results, or fear losing control if you slow down.",
        evolution:
          "Your evolution consists of recognizing that true authority does not rest on effort alone. It also comes from coherence, experience, and respect for your own limits.",
        innerNeed:
          "Your soul needs direction, solidity, respect, and the feeling that its efforts contribute to something lasting.",
        transformation:
          "Your transformation occurs when you stop making difficulty a mandatory proof of merit.",
        alignment:
          "You are aligned when your ambition supports your integrity rather than your exhaustion.",
        affirmation:
          "I build patiently without sacrificing my humanity to my goals.",
      },

      Aquarius: {
        title:
          "Transform difference into conscious contribution",
        introduction:
          "Your inner path invites you to preserve your freedom of thought, question models that have become too narrow, and participate in a more collective evolution. Your soul seeks to understand how its originality can become useful.",
        oldPattern:
          "You may sometimes detach emotionally, reject a structure simply because it appears conventional, or protect yourself behind the position of an observer.",
        evolution:
          "Your evolution consists of connecting independence with participation. You progress when your new ideas take concrete form while remaining connected to human needs.",
        innerNeed:
          "Your soul needs autonomy, vision, friendship, and the freedom to imagine another way of living.",
        transformation:
          "Your transformation occurs when you accept that belonging does not require the disappearance of your individuality.",
        alignment:
          "You are aligned when your difference creates openness rather than permanent distance.",
        affirmation:
          "My uniqueness becomes a strength when I connect it to a concrete contribution.",
      },

      Pisces: {
        title:
          "Transform hypersensitivity into inspired presence",
        introduction:
          "Your inner path invites you to develop compassion, intuition, and a conscious relationship with the invisible world of emotions, symbols, and imagination. Your soul seeks to reconnect what appears separate.",
        oldPattern:
          "You may sometimes absorb surrounding emotions, idealize, avoid difficult reality, or lose your reference points in the needs of others.",
        evolution:
          "Your evolution consists of giving concrete form to your sensitivity. You progress when intuition is accompanied by clear enough boundaries, habits, and choices.",
        innerNeed:
          "Your soul needs silence, inspiration, compassion, and spaces where it can reconnect with its own inner frequency.",
        transformation:
          "Your transformation occurs when you stop confusing an open heart with the absence of protection.",
        alignment:
          "You are aligned when your sensitivity becomes creation, presence, or conscious support.",
        affirmation:
          "I protect my sensitivity so that it can become a true strength.",
      },
    },

    moonNeeds: {
      Aries:
        "Your Moon in Aries needs movement, honesty, and the feeling that it can react freely. Your emotional balance improves when you express what you feel quickly without allowing impulse alone to determine what follows.",
      Taurus:
        "Your Moon in Taurus needs stability, calm, and sensory reference points. Your emotional balance rebuilds when you slow down, return to your body, and reconnect with a reassuring environment.",
      Gemini:
        "Your Moon in Gemini needs to speak, understand, and put words to what it is experiencing. Your emotional balance often depends on your ability to create movement in your thoughts.",
      Cancer:
        "Your Moon in Cancer needs intimacy, continuity, and protective bonds. Your emotional balance depends on acknowledging your needs rather than hiding them.",
      Leo:
        "Your Moon in Leo needs warmth, recognition, and generous emotional expression. Your emotional balance grows when you allow yourself the right to create and be visible.",
      Virgo:
        "Your Moon in Virgo needs order, clarity, and the feeling that it can improve a situation. Your emotional balance is supported by simple, useful, and concrete actions.",
      Libra:
        "Your Moon in Libra needs harmony, respect, and balanced relationships. Your inner peace becomes more stable when you do not sacrifice your truth in order to avoid disagreement.",
      Scorpio:
        "Your Moon in Scorpio needs depth, trust, and genuine loyalty. Your emotional balance depends on being able to feel intensely without having to control every consequence.",
      Sagittarius:
        "Your Moon in Sagittarius needs space, movement, and a hopeful perspective. Your emotional balance returns when you can restore meaning to what you are experiencing.",
      Capricorn:
        "Your Moon in Capricorn needs solidity, mastery, and the feeling that it remains capable of coping. Your emotional balance deepens when you also allow yourself to receive support.",
      Aquarius:
        "Your Moon in Aquarius needs freedom, perspective, and an environment where its difference is respected. Your emotional balance grows when you remain connected to your emotions without feeling trapped by them.",
      Pisces:
        "Your Moon in Pisces needs gentleness, silence, and space to withdraw from external influences. Your emotional balance depends on clear boundaries and creative or intuitive expression.",
    },

    plutoTransformations: {
      Aries:
        "Pluto in Aries intensifies transformations related to autonomy, courage, and the way you exercise your will.",
      Taurus:
        "Pluto in Taurus deeply transforms your relationship with security, resources, and what you consider lasting.",
      Gemini:
        "Pluto in Gemini pushes your thinking beyond superficial answers and transforms your relationship with words, ideas, and information.",
      Cancer:
        "Pluto in Cancer transforms your relationship with roots, family, memory, and emotional security.",
      Leo:
        "Pluto in Leo intensifies your need to create, shine, and discover more authentic personal power.",
      Virgo:
        "Pluto in Virgo transforms your relationship with control, perfection, service, and mastery of daily life.",
      Libra:
        "Pluto in Libra transforms the way you experience commitment, dependence, justice, and power dynamics in relationships.",
      Scorpio:
        "Pluto in Scorpio amplifies your capacity for regeneration and invites you to consciously move through processes of loss, truth, and rebirth.",
      Sagittarius:
        "Pluto in Sagittarius transforms your beliefs, your worldview, and your relationship with truth.",
      Capricorn:
        "Pluto in Capricorn transforms your relationship with authority, structures, ambition, and success.",
      Aquarius:
        "Pluto in Aquarius transforms your relationship with freedom, collective life, technology, and social models.",
      Pisces:
        "Pluto in Pisces transforms your relationship with compassion, emotional boundaries, intuition, and surrender.",
    },
  },

  es: {
    analysis: "Análisis Firma",
    title: "El camino de tu alma",
    subtitle:
      "Los movimientos interiores que te invitan a superar antiguos reflejos y a convertirte más plenamente en ti mismo.",
    evolutionAxis: "Tu eje de evolución",
    oldPatternLabel: "Antiguo reflejo",
    whatCanHoldYouBack: "Lo que puede frenarte",
    evolutionaryMovement: "Movimiento evolutivo",
    whatPathDevelops:
      "Lo que tu recorrido busca desarrollar",
    evolutionQuote:
      "«Tu evolución no consiste en rechazar lo que has sido. Consiste en utilizar tus experiencias como un paso hacia una expresión más libre y consciente de ti mismo.»",
    innerStrengths: "Tus fuerzas interiores",
    understandNourishment:
      "Comprender lo que te nutre y lo que te transforma",
    innerStrengthsIntro:
      "El Sol muestra la conciencia que estás invitado a desarrollar. La Luna revela las necesidades emocionales que deben ser respetadas para que esta evolución siga siendo sostenible. Plutón indica las zonas donde tu recorrido exige una transformación profunda, mientras que Saturno representa los aprendizajes que requieren tiempo y madurez.",
    sun: "Sol",
    moon: "Luna",
    pluto: "Plutón",
    sunRole:
      "La conciencia que estás llamado a desarrollar y expresar con mayor plenitud.",
    moonRole:
      "Tus necesidades afectivas, protectoras e instintivas.",
    plutoRole:
      "Tu capacidad para atravesar pérdidas, crisis y renacimientos.",
    innerWorldNeeds:
      "Lo que necesita tu mundo interior",
    transformationProcess:
      "Tu proceso de transformación",
    alignmentNeed:
      "Tu necesidad profunda de alineación",
    consciousIntegration:
      "Integración consciente",
    experiencesAsPath:
      "Convertir tus experiencias en un verdadero camino de evolución",
    integrationIntro:
      "Tu camino interior no sigue una línea perfectamente recta. Algunas situaciones pueden regresar hasta que puedas responder desde una conciencia diferente. La evolución aparece cuando tus elecciones dejan de reproducir automáticamente los antiguos mecanismos de protección.",
    transformationLabel: "Transformación",
    whatToRelease:
      "Lo que estás invitado a liberar",
    alignmentLabel: "Alineación",
    howToKnowProgress:
      "Cómo reconocer que estás avanzando",
    threeQuestions:
      "Tres preguntas para hacerte",
    question1:
      "¿Esta decisión corresponde a lo que realmente siento hoy o reproduce una antigua manera de protegerme?",
    question2:
      "¿Qué emoción o qué miedo intenta influir en mi elección y qué necesito para escucharlo sin entregarle toda la dirección?",
    question3:
      "¿Qué versión más consciente de mí mismo podría responder de otra manera a esta situación?",
    saturnRoleTitle:
      "El papel de Saturno en tu evolución",
    saturnIn: "Saturno en",
    chartFallback: "tu carta",
    saturnText:
      "recuerda que algunas cualidades solo se revelan con el tiempo. Lo que al principio parece una limitación puede convertirse en un dominio profundo cuando aceptas progresar con paciencia, constancia y realismo.",
    affirmationLabel:
      "Tu afirmación Firma",
    moonFallback:
      "Tu Luna revela las condiciones emocionales que necesitas para permanecer conectado contigo mismo y atravesar los períodos de transformación con mayor estabilidad.",
    plutoFallback:
      "Plutón describe las transformaciones profundas que te invitan a abandonar antiguos mecanismos de protección y reconstruirte desde una verdad más interior.",

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
          "Aprender a elegir tu propia dirección",
        introduction:
          "Tu camino interior te invita a desarrollar una relación consciente con el valor, la iniciativa y la afirmación personal. Tu alma busca experimentar la vida directamente, tomar decisiones y descubrir lo que se vuelve posible cuando dejas de esperar un permiso exterior.",
        oldPattern:
          "A veces puedes reaccionar muy rápidamente, confundir movimiento con verdadero progreso o creer que tu fuerza depende de no dudar nunca.",
        evolution:
          "Tu evolución consiste en transformar el impulso en voluntad consciente. Progresas cuando eliges tus luchas, asumes tus deseos y aprendes a actuar sin aplastar tu sensibilidad ni la de los demás.",
        innerNeed:
          "Tu alma necesita sentir que sigue siendo libre de iniciar, explorar y definirse por sí misma.",
        transformation:
          "Tu transformación se realiza cuando tu valor se convierte en una fuerza creadora en lugar de una reacción defensiva.",
        alignment:
          "Estás alineado cuando tus decisiones son francas, responsables y suficientemente reflexionadas para sostener una dirección duradera.",
        affirmation:
          "Avanzo con valentía sin perder la conciencia de lo que estoy construyendo.",
      },

      Taurus: {
        title:
          "Transformar la seguridad en verdadera estabilidad interior",
        introduction:
          "Tu camino interior te invita a desarrollar paciencia, arraigo y una relación más consciente con tus valores. Tu alma busca construir, proteger y dar una forma duradera a aquello que considera esencial.",
        oldPattern:
          "A veces puedes mantener una situación únicamente porque es conocida, resistirte al cambio o asociar la seguridad con lo que posees y controlas.",
        evolution:
          "Tu evolución consiste en comprender que la verdadera estabilidad no depende de la inmovilidad. Nace de tu capacidad de adaptarte sin negar lo que realmente importa para ti.",
        innerNeed:
          "Tu alma necesita continuidad, sencillez, belleza y referencias concretas.",
        transformation:
          "Tu transformación se realiza cuando aceptas renovar tus fundamentos en lugar de proteger estructuras que se han vuelto limitantes.",
        alignment:
          "Estás alineado cuando tus elecciones respetan tu ritmo dejando un espacio real para la evolución.",
        affirmation:
          "Puedo evolucionar sin perder lo que da un sentido profundo a mi vida.",
      },

      Gemini: {
        title:
          "Pasar de la curiosidad a una comprensión viva",
        introduction:
          "Tu camino interior te invita a explorar ideas, palabras y vínculos que permiten comprender mejor el mundo. Tu alma busca aprender, transmitir y crear puentes entre diferentes perspectivas.",
        oldPattern:
          "A veces puedes multiplicar la información, cambiar rápidamente de dirección o permanecer en el análisis para evitar un compromiso más profundo.",
        evolution:
          "Tu evolución consiste en elegir algunas ideas, profundizarlas y darles verdadera continuidad. Tu inteligencia se vuelve más poderosa cuando une curiosidad y experiencia.",
        innerNeed:
          "Tu alma necesita intercambios, movimiento mental y libertad en su manera de pensar.",
        transformation:
          "Tu transformación se realiza cuando dejas de buscar todas las respuestas al mismo tiempo y aceptas habitar plenamente una pregunta importante.",
        alignment:
          "Estás alineado cuando tu comunicación se vuelve clara, sincera y capaz de transmitir una comprensión realmente integrada.",
        affirmation:
          "Transformo mis ideas en conocimientos vivos y útiles.",
      },

      Cancer: {
        title:
          "Crear una seguridad emocional que te pertenezca",
        introduction:
          "Tu camino interior te invita a reconocer la profundidad de tu sensibilidad, tu memoria y tus necesidades afectivas. Tu alma busca comprender lo que nutre verdaderamente el sentimiento de pertenencia.",
        oldPattern:
          "A veces puedes permanecer unido al pasado, cargar las emociones de tu entorno o creer que tu valor depende del papel protector que desempeñas.",
        evolution:
          "Tu evolución consiste en cuidarte con la misma presencia que ofreces a los demás. Progresas cuando tus emociones se convierten en información y dejan de ser prisiones.",
        innerNeed:
          "Tu alma necesita dulzura, seguridad, intimidad y vínculos en los que pueda permanecer auténtica.",
        transformation:
          "Tu transformación se realiza cuando liberas las memorias que ya no corresponden a tu presente.",
        alignment:
          "Estás alineado cuando proteges lo que es valioso sin encerrarte ni olvidarte.",
        affirmation:
          "Creo dentro de mí la seguridad que durante mucho tiempo busqué a mi alrededor.",
      },

      Leo: {
        title:
          "Pasar de la necesidad de reconocimiento al valor de brillar",
        introduction:
          "Tu camino interior te invita a desarrollar una expresión personal viva, creativa y sincera. Tu alma busca reconocer su valor y compartir una luz que no dependa completamente de la mirada exterior.",
        oldPattern:
          "A veces puedes medir tu valor por la atención recibida, esconder tu vulnerabilidad detrás del orgullo o temer que tu expresión no sea suficientemente reconocida.",
        evolution:
          "Tu evolución consiste en crear desde tu centro. Progresas cuando asumes aquello que te hace único, incluso cuando el resultado no recibe aplausos inmediatos.",
        innerNeed:
          "Tu alma necesita alegría, creación, calor y libertad para expresar lo que lleva dentro.",
        transformation:
          "Tu transformación se realiza cuando tu brillo se convierte en algo que compartes en lugar de una prueba de tu valor.",
        alignment:
          "Estás alineado cuando ocupas tu lugar con generosidad, dignidad y sencillez.",
        affirmation:
          "Mi luz tiene valor incluso cuando no es reconocida inmediatamente.",
      },

      Virgo: {
        title:
          "Transformar la exigencia en dominio benevolente",
        introduction:
          "Tu camino interior te invita a desarrollar discernimiento, precisión y una relación más consciente con el servicio. Tu alma busca mejorar, comprender y ser útil sin reducirse a su rendimiento.",
        oldPattern:
          "A veces puedes concentrarte en lo que falta, retrasar una acción por miedo a la imperfección o asociar tu valor con ser irreprochable.",
        evolution:
          "Tu evolución consiste en reconocer que tu competencia crece gracias a la experiencia. Progresas cuando sustituyes la crítica constante por una mejora concreta y realista.",
        innerNeed:
          "Tu alma necesita claridad, orden, utilidad y sentir que sus esfuerzos producen un efecto tangible.",
        transformation:
          "Tu transformación se realiza cuando utilizas tu inteligencia para apoyar la vida en lugar de vigilar cada error.",
        alignment:
          "Estás alineado cuando tu exigencia se convierte en un recurso sin transformarse en una condena permanente.",
        affirmation:
          "Puedo progresar sin exigirme una perfección imposible.",
      },

      Libra: {
        title:
          "Construir la armonía sin abandonar tu verdad",
        introduction:
          "Tu camino interior te invita a comprender las relaciones, la cooperación y el equilibrio entre tú y los demás. Tu alma busca crear vínculos más justos sin perder su propio centro.",
        oldPattern:
          "A veces puedes evitar desacuerdos, retrasar decisiones o adaptar excesivamente tu posición para preservar una paz frágil.",
        evolution:
          "Tu evolución consiste en desarrollar una diplomacia que incluya tu propia verdad. Progresas cuando comprendes que una relación sana puede soportar una diferencia, un límite y una decisión clara.",
        innerNeed:
          "Tu alma necesita belleza, respeto, intercambio y relaciones basadas en verdadera reciprocidad.",
        transformation:
          "Tu transformación se realiza cuando dejas de asociar el amor con borrarte a ti mismo.",
        alignment:
          "Estás alineado cuando creas armonía desde un centro interior estable.",
        affirmation:
          "Puedo amar, colaborar y permanecer fiel a mí mismo.",
      },

      Scorpio: {
        title:
          "Transformar el miedo a perder en poder de renacimiento",
        introduction:
          "Tu camino interior te invita a explorar las zonas profundas de la experiencia humana: apego, confianza, vulnerabilidad, pérdida y transformación. Tu alma busca comprender qué permanece cuando desaparecen las antiguas estructuras.",
        oldPattern:
          "A veces puedes retener, controlar, poner a prueba u ocultar tu vulnerabilidad para reducir el riesgo de ser herido o traicionado.",
        evolution:
          "Tu evolución consiste en reconocer que tu poder no depende de tu capacidad para controlarlo todo. Progresas cuando dejas morir aquello que ya no posee verdad y aceptas reconstruir desde un espacio más auténtico.",
        innerNeed:
          "Tu alma necesita profundidad, lealtad, intensidad y relaciones capaces de sostener una verdadera transformación.",
        transformation:
          "Tu transformación se realiza cuando eliges la lucidez sin encerrarte en la desconfianza.",
        alignment:
          "Estás alineado cuando tu intensidad se convierte en una fuerza de sanación, creación y renovación.",
        affirmation:
          "Puedo atravesar el cambio sin perder mi poder interior.",
      },

      Sagittarius: {
        title:
          "Transformar la búsqueda de libertad en búsqueda de verdad",
        introduction:
          "Tu camino interior te invita a explorar, aprender y ampliar tu comprensión de la vida. Tu alma busca una dirección llena de sentido y una verdad suficientemente amplia para sostener su necesidad de evolución.",
        oldPattern:
          "A veces puedes huir de los límites, multiplicar experiencias o defender una convicción antes de haber explorado realmente toda su complejidad.",
        evolution:
          "Tu evolución consiste en unir libertad y responsabilidad. Progresas cuando tus descubrimientos se convierten en sabiduría vivida y dejan de ser una sucesión de posibilidades.",
        innerNeed:
          "Tu alma necesita espacio, esperanza, movimiento y una visión que dé sentido a sus experiencias.",
        transformation:
          "Tu transformación se realiza cuando dejas de buscar en otra parte aquello que la experiencia presente ya intenta enseñarte.",
        alignment:
          "Estás alineado cuando tu libertad alimenta tu conciencia y tu capacidad de transmisión.",
        affirmation:
          "Amplío mis horizontes sin huir de las responsabilidades que dan sentido a mi camino.",
      },

      Capricorn: {
        title:
          "Transformar el deber en autoridad interior",
        introduction:
          "Tu camino interior te invita a desarrollar paciencia, responsabilidad y una capacidad real de construir con el tiempo. Tu alma busca crear una obra, una estructura o un dominio capaz de resistir las pruebas.",
        oldPattern:
          "A veces puedes imponerte demasiada responsabilidad, creer que tu valor depende únicamente de tus resultados o temer perder el control si disminuyes el ritmo.",
        evolution:
          "Tu evolución consiste en reconocer que la verdadera autoridad no se apoya solamente en el esfuerzo. También nace de la coherencia, la experiencia y el respeto de tus propios límites.",
        innerNeed:
          "Tu alma necesita dirección, solidez, respeto y sentir que sus esfuerzos contribuyen a una construcción duradera.",
        transformation:
          "Tu transformación se realiza cuando dejas de convertir la dificultad en una prueba obligatoria de mérito.",
        alignment:
          "Estás alineado cuando tu ambición sostiene tu integridad y no tu agotamiento.",
        affirmation:
          "Construyo con paciencia sin sacrificar mi humanidad a mis objetivos.",
      },

      Aquarius: {
        title:
          "Transformar la diferencia en contribución consciente",
        introduction:
          "Tu camino interior te invita a preservar tu libertad de pensamiento, cuestionar modelos demasiado estrechos y participar en una evolución más colectiva. Tu alma busca comprender cómo su originalidad puede convertirse en algo útil.",
        oldPattern:
          "A veces puedes distanciarte emocionalmente, rechazar una estructura únicamente porque parece convencional o protegerte detrás de una posición de observador.",
        evolution:
          "Tu evolución consiste en unir independencia y participación. Progresas cuando tus ideas nuevas toman una forma concreta y permanecen conectadas con las necesidades humanas.",
        innerNeed:
          "Tu alma necesita autonomía, visión, amistad y libertad para imaginar otra manera de vivir.",
        transformation:
          "Tu transformación se realiza cuando aceptas que pertenecer no exige la desaparición de tu individualidad.",
        alignment:
          "Estás alineado cuando tu diferencia crea un espacio de apertura en lugar de una distancia permanente.",
        affirmation:
          "Mi singularidad se convierte en una fuerza cuando la conecto con una contribución concreta.",
      },

      Pisces: {
        title:
          "Transformar la hipersensibilidad en presencia inspirada",
        introduction:
          "Tu camino interior te invita a desarrollar compasión, intuición y una relación consciente con el mundo invisible de emociones, símbolos e imaginación. Tu alma busca unir aquello que parece separado.",
        oldPattern:
          "A veces puedes absorber las emociones de tu entorno, idealizar, evitar una realidad difícil o perder tus referencias en las necesidades de los demás.",
        evolution:
          "Tu evolución consiste en dar una forma concreta a tu sensibilidad. Progresas cuando tu intuición está acompañada de límites, hábitos y elecciones suficientemente claras.",
        innerNeed:
          "Tu alma necesita silencio, inspiración, compasión y espacios donde pueda recuperar su propia frecuencia interior.",
        transformation:
          "Tu transformación se realiza cuando dejas de confundir apertura del corazón con ausencia de protección.",
        alignment:
          "Estás alineado cuando tu sensibilidad se convierte en creación, presencia o ayuda consciente.",
        affirmation:
          "Protejo mi sensibilidad para que pueda convertirse en una verdadera fuerza.",
      },
    },

    moonNeeds: {
      Aries:
        "Tu Luna en Aries necesita movimiento, franqueza y sentir que puede reaccionar libremente. Tu equilibrio emocional mejora cuando expresas rápidamente lo que sientes sin dejar que el impulso decida por sí solo lo que sigue.",
      Taurus:
        "Tu Luna en Tauro necesita estabilidad, calma y referencias sensoriales. Tu equilibrio emocional se reconstruye cuando disminuyes el ritmo, vuelves al cuerpo y recuperas un entorno seguro.",
      Gemini:
        "Tu Luna en Géminis necesita hablar, comprender y poner palabras a lo que atraviesa. Tu equilibrio emocional depende a menudo de tu capacidad de crear movimiento en tus pensamientos.",
      Cancer:
        "Tu Luna en Cáncer necesita intimidad, continuidad y vínculos protectores. Tu equilibrio emocional pasa por reconocer tus necesidades en lugar de ocultarlas.",
      Leo:
        "Tu Luna en Leo necesita calidez, reconocimiento y una expresión afectiva generosa. Tu equilibrio emocional crece cuando te permites crear y ser visible.",
      Virgo:
        "Tu Luna en Virgo necesita orden, claridad y sentir que puede mejorar una situación. Tu equilibrio emocional pasa por gestos sencillos, útiles y concretos.",
      Libra:
        "Tu Luna en Libra necesita armonía, respeto y relaciones equilibradas. Tu paz interior se vuelve más estable cuando no sacrificas tu verdad para evitar un desacuerdo.",
      Scorpio:
        "Tu Luna en Escorpio necesita profundidad, confianza y verdadera lealtad. Tu equilibrio emocional pasa por poder sentir intensamente sin tener que controlar todas las consecuencias.",
      Sagittarius:
        "Tu Luna en Sagitario necesita espacio, movimiento y una perspectiva llena de esperanza. Tu equilibrio emocional regresa cuando puedes devolver sentido a lo que estás atravesando.",
      Capricorn:
        "Tu Luna en Capricornio necesita solidez, dominio y sentir que sigue siendo capaz de afrontar las situaciones. Tu equilibrio emocional se profundiza cuando también te permites recibir apoyo.",
      Aquarius:
        "Tu Luna en Acuario necesita libertad, distancia y un entorno donde su diferencia pueda ser respetada. Tu equilibrio emocional crece cuando permaneces conectado con tus emociones sin sentirte encerrado en ellas.",
      Pisces:
        "Tu Luna en Piscis necesita dulzura, silencio y un espacio para retirarse de las influencias exteriores. Tu equilibrio emocional depende de límites claros y de una expresión creativa o intuitiva.",
    },

    plutoTransformations: {
      Aries:
        "Plutón en Aries intensifica las transformaciones relacionadas con la autonomía, el valor y la manera de ejercer tu voluntad.",
      Taurus:
        "Plutón en Tauro transforma profundamente tu relación con la seguridad, los recursos y aquello que consideras duradero.",
      Gemini:
        "Plutón en Géminis lleva tu pensamiento más allá de las respuestas superficiales y transforma tu relación con las palabras, las ideas y la información.",
      Cancer:
        "Plutón en Cáncer transforma tu relación con las raíces, la familia, la memoria y la seguridad emocional.",
      Leo:
        "Plutón en Leo intensifica tu necesidad de crear, brillar y descubrir un poder personal más auténtico.",
      Virgo:
        "Plutón en Virgo transforma tu relación con el control, la perfección, el servicio y el dominio de la vida cotidiana.",
      Libra:
        "Plutón en Libra transforma tu manera de vivir el compromiso, la dependencia, la justicia y las relaciones de poder.",
      Scorpio:
        "Plutón en Escorpio amplifica tu capacidad de regeneración y te invita a atravesar conscientemente procesos de pérdida, verdad y renacimiento.",
      Sagittarius:
        "Plutón en Sagitario transforma tus creencias, tu visión del mundo y tu relación con la verdad.",
      Capricorn:
        "Plutón en Capricornio transforma tu relación con la autoridad, las estructuras, la ambición y el éxito.",
      Aquarius:
        "Plutón en Acuario transforma tu relación con la libertad, lo colectivo, la tecnología y los modelos sociales.",
      Pisces:
        "Plutón en Piscis transforma tu relación con la compasión, los límites emocionales, la intuición y el soltar.",
    },
  },

  de: {
    analysis: "Signatur-Analyse",
    title: "Der Weg Ihrer Seele",
    subtitle:
      "Die inneren Bewegungen, die Sie dazu einladen, alte Reflexe zu überwinden und immer mehr Sie selbst zu werden.",
    evolutionAxis: "Ihre Entwicklungsachse",
    oldPatternLabel: "Alter Reflex",
    whatCanHoldYouBack:
      "Was Sie zurückhalten kann",
    evolutionaryMovement:
      "Entwicklungsbewegung",
    whatPathDevelops:
      "Was Ihr Weg entwickeln möchte",
    evolutionQuote:
      "„Ihre Entwicklung bedeutet nicht, abzulehnen, wer Sie gewesen sind. Sie bedeutet, Ihre Erfahrungen als Übergang zu einem freieren und bewussteren Ausdruck Ihrer selbst zu nutzen.“",
    innerStrengths: "Ihre inneren Kräfte",
    understandNourishment:
      "Verstehen, was Sie nährt und was Sie verwandelt",
    innerStrengthsIntro:
      "Die Sonne zeigt das Bewusstsein, das Sie entwickeln sollen. Der Mond offenbart emotionale Bedürfnisse, die respektiert werden müssen, damit diese Entwicklung tragfähig bleibt. Pluto zeigt die Bereiche, in denen Ihr Weg tiefe Transformation verlangt, während Saturn Lernprozesse beschreibt, die Zeit und Reife benötigen.",
    sun: "Sonne",
    moon: "Mond",
    pluto: "Pluto",
    sunRole:
      "Das Bewusstsein, das Sie entwickeln und stärker ausdrücken sollen.",
    moonRole:
      "Ihre emotionalen, schützenden und instinktiven Bedürfnisse.",
    plutoRole:
      "Ihre Fähigkeit, Verluste, Krisen und Neuanfänge zu durchlaufen.",
    innerWorldNeeds:
      "Was Ihre innere Welt braucht",
    transformationProcess:
      "Ihr Transformationsprozess",
    alignmentNeed:
      "Ihr tiefes Bedürfnis nach Ausrichtung",
    consciousIntegration:
      "Bewusste Integration",
    experiencesAsPath:
      "Ihre Erfahrungen zu einem echten Entwicklungsweg machen",
    integrationIntro:
      "Ihr innerer Weg verläuft nicht vollkommen geradlinig. Manche Situationen können wiederkehren, bis Sie ihnen aus einem anderen Bewusstsein heraus begegnen können. Entwicklung entsteht, wenn Ihre Entscheidungen nicht länger automatisch alte Schutzmechanismen wiederholen.",
    transformationLabel: "Transformation",
    whatToRelease:
      "Was Sie loslassen sollen",
    alignmentLabel: "Ausrichtung",
    howToKnowProgress:
      "Woran Sie erkennen, dass Sie vorankommen",
    threeQuestions:
      "Drei Fragen an sich selbst",
    question1:
      "Entspricht diese Entscheidung dem, was ich heute wirklich empfinde, oder wiederholt sie eine alte Art, mich zu schützen?",
    question2:
      "Welche Emotion oder Angst versucht meine Entscheidung zu beeinflussen, und was brauche ich, um ihr zuzuhören, ohne ihr die gesamte Führung zu überlassen?",
    question3:
      "Welche bewusstere Version meiner selbst könnte auf diese Situation anders reagieren?",
    saturnRoleTitle:
      "Die Rolle Saturns in Ihrer Entwicklung",
    saturnIn: "Saturn in",
    chartFallback: "Ihrem Horoskop",
    saturnText:
      "erinnert daran, dass manche Qualitäten sich erst mit der Zeit zeigen. Was zunächst wie eine Begrenzung wirkt, kann zu tiefer Meisterschaft werden, wenn Sie akzeptieren, mit Geduld, Beständigkeit und Realismus voranzugehen.",
    affirmationLabel:
      "Ihre Signatur-Affirmation",
    moonFallback:
      "Ihr Mond zeigt die emotionalen Bedingungen, die Sie benötigen, um mit sich selbst verbunden zu bleiben und Transformationsphasen mit größerer Stabilität zu durchlaufen.",
    plutoFallback:
      "Pluto beschreibt tiefe Veränderungen, die Sie dazu einladen, alte Schutzmechanismen loszulassen und aus einer innereren Wahrheit heraus neu aufzubauen.",

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
          "Lernen, Ihre eigene Richtung zu wählen",
        introduction:
          "Ihr innerer Weg lädt Sie ein, eine bewusste Beziehung zu Mut, Initiative und Selbstbehauptung zu entwickeln. Ihre Seele möchte das Leben unmittelbar erfahren, Entscheidungen treffen und entdecken, was möglich wird, wenn Sie aufhören, auf äußere Erlaubnis zu warten.",
        oldPattern:
          "Sie können manchmal sehr schnell reagieren, Bewegung mit echtem Fortschritt verwechseln oder glauben, dass Ihre Stärke davon abhängt, niemals zu zögern.",
        evolution:
          "Ihre Entwicklung besteht darin, Impuls in bewussten Willen zu verwandeln. Sie kommen voran, wenn Sie Ihre Kämpfe wählen, Ihre Wünsche annehmen und handeln lernen, ohne Ihre eigene Sensibilität oder die anderer zu übergehen.",
        innerNeed:
          "Ihre Seele muss spüren, dass sie frei bleibt, zu beginnen, zu erforschen und sich selbst zu definieren.",
        transformation:
          "Ihre Transformation vollzieht sich, wenn Ihr Mut zu einer schöpferischen Kraft statt zu einer defensiven Reaktion wird.",
        alignment:
          "Sie sind ausgerichtet, wenn Ihre Entscheidungen klar, verantwortlich und ausreichend durchdacht sind, um eine dauerhafte Richtung zu tragen.",
        affirmation:
          "Ich gehe mutig voran, ohne das Bewusstsein dafür zu verlieren, was ich aufbaue.",
      },

      Taurus: {
        title:
          "Sicherheit in echte innere Stabilität verwandeln",
        introduction:
          "Ihr innerer Weg lädt Sie ein, Geduld, Verwurzelung und einen bewussteren Umgang mit Ihren Werten zu entwickeln. Ihre Seele möchte aufbauen, schützen und dem, was sie für wesentlich hält, dauerhafte Form geben.",
        oldPattern:
          "Sie können manchmal eine Situation nur deshalb aufrechterhalten, weil sie vertraut ist, sich Veränderungen widersetzen oder Sicherheit mit dem verbinden, was Sie besitzen und kontrollieren.",
        evolution:
          "Ihre Entwicklung besteht darin zu verstehen, dass wahre Stabilität nicht von Stillstand abhängt. Sie entsteht aus Ihrer Fähigkeit, sich anzupassen, ohne zu verleugnen, was Ihnen tief wichtig ist.",
        innerNeed:
          "Ihre Seele braucht Kontinuität, Einfachheit, Schönheit und konkrete Orientierungspunkte.",
        transformation:
          "Ihre Transformation vollzieht sich, wenn Sie bereit sind, Ihre Grundlagen zu erneuern, statt zu eng gewordene Strukturen zu schützen.",
        alignment:
          "Sie sind ausgerichtet, wenn Ihre Entscheidungen Ihren Rhythmus respektieren und gleichzeitig echten Raum für Entwicklung lassen.",
        affirmation:
          "Ich kann mich entwickeln, ohne zu verlieren, was meinem Leben tiefen Sinn gibt.",
      },

      Gemini: {
        title:
          "Von Neugier zu lebendigem Verständnis gelangen",
        introduction:
          "Ihr innerer Weg lädt Sie ein, Ideen, Worte und Verbindungen zu erforschen, die helfen, die Welt besser zu verstehen. Ihre Seele möchte lernen, vermitteln und Brücken zwischen verschiedenen Perspektiven schaffen.",
        oldPattern:
          "Sie können manchmal Informationen anhäufen, schnell die Richtung wechseln oder in der Analyse bleiben, um tieferes Engagement zu vermeiden.",
        evolution:
          "Ihre Entwicklung besteht darin, einige Ideen auszuwählen, sie zu vertiefen und ihnen echte Kontinuität zu geben. Ihre Intelligenz wird stärker, wenn sie Neugier mit Erfahrung verbindet.",
        innerNeed:
          "Ihre Seele braucht Austausch, geistige Bewegung und Freiheit in ihrer Art zu denken.",
        transformation:
          "Ihre Transformation vollzieht sich, wenn Sie aufhören, alle Antworten gleichzeitig zu suchen, und bereit sind, eine wichtige Frage wirklich zu durchleben.",
        alignment:
          "Sie sind ausgerichtet, wenn Ihre Kommunikation klar, ehrlich und in der Lage ist, tatsächlich integriertes Verständnis zu vermitteln.",
        affirmation:
          "Ich verwandle meine Ideen in lebendiges und nützliches Wissen.",
      },

      Cancer: {
        title:
          "Eine emotionale Sicherheit schaffen, die Ihnen gehört",
        introduction:
          "Ihr innerer Weg lädt Sie ein, die Tiefe Ihrer Sensibilität, Ihrer Erinnerungen und emotionalen Bedürfnisse anzuerkennen. Ihre Seele möchte verstehen, was echtes Zugehörigkeitsgefühl nährt.",
        oldPattern:
          "Sie können manchmal an der Vergangenheit festhalten, die Gefühle Ihrer Umgebung tragen oder glauben, dass Ihr Wert von Ihrer schützenden Rolle abhängt.",
        evolution:
          "Ihre Entwicklung besteht darin, sich selbst mit derselben Präsenz zu begegnen, die Sie anderen schenken. Sie kommen voran, wenn Ihre Gefühle zu Informationen statt zu Gefängnissen werden.",
        innerNeed:
          "Ihre Seele braucht Sanftheit, Sicherheit, Intimität und Beziehungen, in denen sie authentisch bleiben kann.",
        transformation:
          "Ihre Transformation vollzieht sich, wenn Sie Erinnerungen loslassen, die nicht mehr zu Ihrer Gegenwart gehören.",
        alignment:
          "Sie sind ausgerichtet, wenn Sie Wertvolles schützen, ohne sich einzuschließen oder sich selbst zu vergessen.",
        affirmation:
          "Ich erschaffe in mir die Sicherheit, die ich lange im Außen gesucht habe.",
      },

      Leo: {
        title:
          "Vom Bedürfnis nach Anerkennung zum Mut zu strahlen",
        introduction:
          "Ihr innerer Weg lädt Sie ein, einen lebendigen, kreativen und ehrlichen persönlichen Ausdruck zu entwickeln. Ihre Seele möchte ihren eigenen Wert erkennen und ein Licht teilen, das nicht vollständig vom Blick anderer abhängt.",
        oldPattern:
          "Sie können manchmal Ihren Wert an erhaltener Aufmerksamkeit messen, Verletzlichkeit hinter Stolz verstecken oder fürchten, dass Ihr Ausdruck nicht ausreichend anerkannt wird.",
        evolution:
          "Ihre Entwicklung besteht darin, aus Ihrem Zentrum heraus zu erschaffen. Sie kommen voran, wenn Sie das annehmen, was Sie einzigartig macht, auch wenn das Ergebnis nicht sofort gefeiert wird.",
        innerNeed:
          "Ihre Seele braucht Freude, Schöpfung, Wärme und die Freiheit, das auszudrücken, was sie in sich trägt.",
        transformation:
          "Ihre Transformation vollzieht sich, wenn Ihre Ausstrahlung zu einem Teilen statt zu einem Beweis Ihres Wertes wird.",
        alignment:
          "Sie sind ausgerichtet, wenn Sie Ihren Platz mit Großzügigkeit, Würde und Einfachheit einnehmen.",
        affirmation:
          "Mein Licht besitzt Wert, auch wenn es nicht sofort erkannt wird.",
      },

      Virgo: {
        title:
          "Anspruch in wohlwollende Meisterschaft verwandeln",
        introduction:
          "Ihr innerer Weg lädt Sie ein, Urteilsvermögen, Präzision und einen bewussteren Umgang mit Dienst und Nützlichkeit zu entwickeln. Ihre Seele möchte verbessern, verstehen und hilfreich sein, ohne sich auf Leistung zu reduzieren.",
        oldPattern:
          "Sie können manchmal auf das Fehlende fokussieren, Handlungen aus Angst vor Unvollkommenheit aufschieben oder Ihren Wert damit verbinden, fehlerfrei zu sein.",
        evolution:
          "Ihre Entwicklung besteht darin, zu erkennen, dass Kompetenz durch Erfahrung wächst. Sie kommen voran, wenn Sie ständige Kritik durch konkrete und realistische Verbesserung ersetzen.",
        innerNeed:
          "Ihre Seele braucht Klarheit, Ordnung, Nützlichkeit und das Gefühl, dass ihre Anstrengungen konkrete Wirkung haben.",
        transformation:
          "Ihre Transformation vollzieht sich, wenn Sie Ihre Intelligenz einsetzen, um das Leben zu unterstützen, statt jeden Fehler zu überwachen.",
        alignment:
          "Sie sind ausgerichtet, wenn Ihr Anspruch zu einer Ressource wird, ohne zu einem permanenten Urteil zu werden.",
        affirmation:
          "Ich kann vorankommen, ohne unmögliche Perfektion von mir zu verlangen.",
      },

      Libra: {
        title:
          "Harmonie schaffen, ohne Ihre Wahrheit aufzugeben",
        introduction:
          "Ihr innerer Weg lädt Sie ein, Beziehungen, Zusammenarbeit und das Gleichgewicht zwischen Ihnen und anderen zu verstehen. Ihre Seele möchte gerechtere Verbindungen schaffen, ohne ihr eigenes Zentrum zu verlieren.",
        oldPattern:
          "Sie können manchmal Meinungsverschiedenheiten vermeiden, Entscheidungen verzögern oder Ihre Position übermäßig anpassen, um fragilen Frieden zu bewahren.",
        evolution:
          "Ihre Entwicklung besteht darin, Diplomatie zu entwickeln, die Ihre eigene Wahrheit einschließt. Sie kommen voran, wenn Sie verstehen, dass eine gesunde Beziehung Unterschied, Grenzen und klare Entscheidungen aushalten kann.",
        innerNeed:
          "Ihre Seele braucht Schönheit, Respekt, Austausch und Beziehungen, die auf echter Gegenseitigkeit beruhen.",
        transformation:
          "Ihre Transformation vollzieht sich, wenn Sie aufhören, Liebe mit Selbstaufgabe gleichzusetzen.",
        alignment:
          "Sie sind ausgerichtet, wenn Sie Harmonie aus einem stabilen inneren Zentrum schaffen.",
        affirmation:
          "Ich kann lieben, zusammenarbeiten und mir selbst treu bleiben.",
      },

      Scorpio: {
        title:
          "Verlustangst in die Kraft der Erneuerung verwandeln",
        introduction:
          "Ihr innerer Weg lädt Sie ein, die tiefen Bereiche menschlicher Erfahrung zu erforschen: Bindung, Vertrauen, Verletzlichkeit, Verlust und Transformation. Ihre Seele möchte verstehen, was bleibt, wenn alte Strukturen verschwinden.",
        oldPattern:
          "Sie können manchmal festhalten, kontrollieren, testen oder Ihre Verletzlichkeit verbergen, um das Risiko von Verletzung oder Verrat zu verringern.",
        evolution:
          "Ihre Entwicklung besteht darin, zu erkennen, dass Ihre Macht nicht davon abhängt, alles zu kontrollieren. Sie kommen voran, wenn Sie sterben lassen, was keine Wahrheit mehr besitzt, und bereit sind, aus einem authentischeren Raum neu aufzubauen.",
        innerNeed:
          "Ihre Seele braucht Tiefe, Loyalität, Intensität und Beziehungen, die echte Transformation tragen können.",
        transformation:
          "Ihre Transformation vollzieht sich, wenn Sie Klarheit wählen, ohne sich im Misstrauen einzuschließen.",
        alignment:
          "Sie sind ausgerichtet, wenn Ihre Intensität zu einer Kraft für Heilung, Schöpfung und Erneuerung wird.",
        affirmation:
          "Ich kann Veränderungen durchlaufen, ohne meine innere Kraft zu verlieren.",
      },

      Sagittarius: {
        title:
          "Die Suche nach Freiheit in eine Suche nach Wahrheit verwandeln",
        introduction:
          "Ihr innerer Weg lädt Sie ein, zu erforschen, zu lernen und Ihr Verständnis des Lebens zu erweitern. Ihre Seele sucht eine sinnvolle Richtung und eine Wahrheit, die weit genug ist, um ihr Entwicklungsbedürfnis zu tragen.",
        oldPattern:
          "Sie können manchmal Grenzen entfliehen, Erfahrungen vervielfachen oder eine Überzeugung verteidigen, bevor Sie ihre ganze Komplexität wirklich erforscht haben.",
        evolution:
          "Ihre Entwicklung besteht darin, Freiheit und Verantwortung zu verbinden. Sie kommen voran, wenn Ihre Entdeckungen zu gelebter Weisheit statt zu einer Folge von Möglichkeiten werden.",
        innerNeed:
          "Ihre Seele braucht Raum, Hoffnung, Bewegung und eine Vision, die ihren Erfahrungen Sinn gibt.",
        transformation:
          "Ihre Transformation vollzieht sich, wenn Sie aufhören, anderswo nach dem zu suchen, was die gegenwärtige Erfahrung Ihnen bereits beibringen möchte.",
        alignment:
          "Sie sind ausgerichtet, wenn Ihre Freiheit Ihr Bewusstsein und Ihre Fähigkeit zur Weitergabe nährt.",
        affirmation:
          "Ich erweitere meinen Horizont, ohne vor den Verantwortungen zu fliehen, die meinem Weg Sinn geben.",
      },

      Capricorn: {
        title:
          "Pflicht in innere Autorität verwandeln",
        introduction:
          "Ihr innerer Weg lädt Sie ein, Geduld, Verantwortung und die Fähigkeit zu entwickeln, langfristig aufzubauen. Ihre Seele möchte ein Werk, eine Struktur oder Meisterschaft schaffen, die Prüfungen standhalten kann.",
        oldPattern:
          "Sie können sich manchmal übermäßige Verantwortung auferlegen, glauben, Ihr Wert hänge ausschließlich von Ergebnissen ab, oder fürchten, Kontrolle zu verlieren, wenn Sie langsamer werden.",
        evolution:
          "Ihre Entwicklung besteht darin, zu erkennen, dass wahre Autorität nicht nur auf Anstrengung beruht. Sie entsteht auch aus Kohärenz, Erfahrung und dem Respekt Ihrer eigenen Grenzen.",
        innerNeed:
          "Ihre Seele braucht Richtung, Stabilität, Respekt und das Gefühl, dass ihre Anstrengungen zu etwas Dauerhaftem beitragen.",
        transformation:
          "Ihre Transformation vollzieht sich, wenn Sie aufhören, Schwierigkeit zu einem zwingenden Beweis von Verdienst zu machen.",
        alignment:
          "Sie sind ausgerichtet, wenn Ihr Ehrgeiz Ihre Integrität statt Ihre Erschöpfung unterstützt.",
        affirmation:
          "Ich baue geduldig auf, ohne meine Menschlichkeit meinen Zielen zu opfern.",
      },

      Aquarius: {
        title:
          "Unterschiedlichkeit in bewussten Beitrag verwandeln",
        introduction:
          "Ihr innerer Weg lädt Sie ein, Ihre Gedankenfreiheit zu bewahren, zu enge Modelle infrage zu stellen und an einer kollektiveren Entwicklung mitzuwirken. Ihre Seele möchte verstehen, wie ihre Originalität nützlich werden kann.",
        oldPattern:
          "Sie können sich manchmal emotional distanzieren, eine Struktur nur deshalb ablehnen, weil sie konventionell erscheint, oder sich hinter der Position eines Beobachters schützen.",
        evolution:
          "Ihre Entwicklung besteht darin, Unabhängigkeit mit Beteiligung zu verbinden. Sie kommen voran, wenn Ihre neuen Ideen konkrete Form annehmen und mit menschlichen Bedürfnissen verbunden bleiben.",
        innerNeed:
          "Ihre Seele braucht Autonomie, Vision, Freundschaft und die Freiheit, sich eine andere Lebensweise vorzustellen.",
        transformation:
          "Ihre Transformation vollzieht sich, wenn Sie akzeptieren, dass Zugehörigkeit nicht den Verlust Ihrer Individualität verlangt.",
        alignment:
          "Sie sind ausgerichtet, wenn Ihre Andersartigkeit Offenheit statt dauerhafte Distanz schafft.",
        affirmation:
          "Meine Einzigartigkeit wird zur Stärke, wenn ich sie mit einem konkreten Beitrag verbinde.",
      },

      Pisces: {
        title:
          "Hochsensibilität in inspirierte Präsenz verwandeln",
        introduction:
          "Ihr innerer Weg lädt Sie ein, Mitgefühl, Intuition und einen bewussten Umgang mit der unsichtbaren Welt der Gefühle, Symbole und Vorstellungskraft zu entwickeln. Ihre Seele möchte verbinden, was getrennt erscheint.",
        oldPattern:
          "Sie können manchmal Gefühle aus Ihrer Umgebung aufnehmen, idealisieren, schwieriger Realität ausweichen oder Ihre Orientierung in den Bedürfnissen anderer verlieren.",
        evolution:
          "Ihre Entwicklung besteht darin, Ihrer Sensibilität konkrete Form zu geben. Sie kommen voran, wenn Ihre Intuition von ausreichend klaren Grenzen, Gewohnheiten und Entscheidungen begleitet wird.",
        innerNeed:
          "Ihre Seele braucht Stille, Inspiration, Mitgefühl und Räume, in denen sie ihre eigene innere Frequenz wiederfinden kann.",
        transformation:
          "Ihre Transformation vollzieht sich, wenn Sie aufhören, Offenheit des Herzens mit fehlendem Schutz zu verwechseln.",
        alignment:
          "Sie sind ausgerichtet, wenn Ihre Sensibilität zu Schöpfung, Präsenz oder bewusster Hilfe wird.",
        affirmation:
          "Ich schütze meine Sensibilität, damit sie zu einer echten Stärke werden kann.",
      },
    },

    moonNeeds: {
      Aries:
        "Ihr Mond im Widder braucht Bewegung, Offenheit und das Gefühl, frei reagieren zu können. Ihr emotionales Gleichgewicht verbessert sich, wenn Sie schnell ausdrücken, was Sie fühlen, ohne den Impuls allein über das Weitere entscheiden zu lassen.",
      Taurus:
        "Ihr Mond im Stier braucht Stabilität, Ruhe und sinnliche Orientierungspunkte. Ihr emotionales Gleichgewicht stellt sich wieder her, wenn Sie langsamer werden, in den Körper zurückkehren und eine sichere Umgebung wiederfinden.",
      Gemini:
        "Ihr Mond in den Zwillingen braucht Gespräch, Verständnis und Worte für das Erlebte. Ihr emotionales Gleichgewicht hängt häufig davon ab, Bewegung in Ihre Gedanken zu bringen.",
      Cancer:
        "Ihr Mond im Krebs braucht Intimität, Kontinuität und schützende Bindungen. Ihr emotionales Gleichgewicht entsteht durch die Anerkennung Ihrer Bedürfnisse statt durch deren Verbergen.",
      Leo:
        "Ihr Mond im Löwen braucht Wärme, Anerkennung und großzügigen emotionalen Ausdruck. Ihr emotionales Gleichgewicht wächst, wenn Sie sich erlauben zu erschaffen und sichtbar zu sein.",
      Virgo:
        "Ihr Mond in der Jungfrau braucht Ordnung, Klarheit und das Gefühl, eine Situation verbessern zu können. Ihr emotionales Gleichgewicht entsteht durch einfache, nützliche und konkrete Handlungen.",
      Libra:
        "Ihr Mond in der Waage braucht Harmonie, Respekt und ausgeglichene Beziehungen. Ihr innerer Frieden wird stabiler, wenn Sie Ihre Wahrheit nicht opfern, um Meinungsverschiedenheiten zu vermeiden.",
      Scorpio:
        "Ihr Mond im Skorpion braucht Tiefe, Vertrauen und echte Loyalität. Ihr emotionales Gleichgewicht entsteht, wenn Sie intensiv fühlen können, ohne jede Konsequenz kontrollieren zu müssen.",
      Sagittarius:
        "Ihr Mond im Schützen braucht Raum, Bewegung und eine hoffnungsvolle Perspektive. Ihr emotionales Gleichgewicht kehrt zurück, wenn Sie dem Erlebten wieder Sinn geben können.",
      Capricorn:
        "Ihr Mond im Steinbock braucht Stabilität, Beherrschung und das Gefühl, weiterhin zurechtkommen zu können. Ihr emotionales Gleichgewicht vertieft sich, wenn Sie sich auch erlauben, Unterstützung anzunehmen.",
      Aquarius:
        "Ihr Mond im Wassermann braucht Freiheit, Abstand und ein Umfeld, in dem seine Besonderheit respektiert wird. Ihr emotionales Gleichgewicht wächst, wenn Sie mit Ihren Gefühlen verbunden bleiben, ohne sich von ihnen eingeschlossen zu fühlen.",
      Pisces:
        "Ihr Mond in den Fischen braucht Sanftheit, Stille und Raum, um sich äußeren Einflüssen entziehen zu können. Ihr emotionales Gleichgewicht hängt von klaren Grenzen und kreativem oder intuitivem Ausdruck ab.",
    },

    plutoTransformations: {
      Aries:
        "Pluto im Widder verstärkt Transformationen rund um Autonomie, Mut und die Art, Ihren Willen einzusetzen.",
      Taurus:
        "Pluto im Stier verändert tiefgreifend Ihre Beziehung zu Sicherheit, Ressourcen und dem, was Sie für dauerhaft halten.",
      Gemini:
        "Pluto in den Zwillingen drängt Ihr Denken über oberflächliche Antworten hinaus und verändert Ihre Beziehung zu Worten, Ideen und Informationen.",
      Cancer:
        "Pluto im Krebs verändert Ihre Beziehung zu Wurzeln, Familie, Erinnerung und emotionaler Sicherheit.",
      Leo:
        "Pluto im Löwen verstärkt Ihr Bedürfnis zu erschaffen, zu strahlen und authentischere persönliche Kraft zu entdecken.",
      Virgo:
        "Pluto in der Jungfrau verändert Ihre Beziehung zu Kontrolle, Perfektion, Dienst und Beherrschung des Alltags.",
      Libra:
        "Pluto in der Waage verändert Ihre Art, Bindung, Abhängigkeit, Gerechtigkeit und Machtverhältnisse in Beziehungen zu erleben.",
      Scorpio:
        "Pluto im Skorpion verstärkt Ihre Regenerationsfähigkeit und lädt Sie ein, Prozesse von Verlust, Wahrheit und Wiedergeburt bewusst zu durchlaufen.",
      Sagittarius:
        "Pluto im Schützen verändert Ihre Überzeugungen, Ihre Weltsicht und Ihre Beziehung zur Wahrheit.",
      Capricorn:
        "Pluto im Steinbock verändert Ihre Beziehung zu Autorität, Strukturen, Ehrgeiz und Erfolg.",
      Aquarius:
        "Pluto im Wassermann verändert Ihre Beziehung zu Freiheit, Gemeinschaft, Technologie und gesellschaftlichen Modellen.",
      Pisces:
        "Pluto in den Fischen verändert Ihre Beziehung zu Mitgefühl, emotionalen Grenzen, Intuition und Loslassen.",
    },
  },

  it: {
    analysis: "Analisi Firma",
    title: "Il cammino della tua anima",
    subtitle:
      "I movimenti interiori che ti invitano a superare i vecchi riflessi e diventare più pienamente te stesso.",
    evolutionAxis: "Il tuo asse di evoluzione",
    oldPatternLabel: "Vecchio riflesso",
    whatCanHoldYouBack:
      "Ciò che può trattenerti",
    evolutionaryMovement:
      "Movimento evolutivo",
    whatPathDevelops:
      "Ciò che il tuo percorso cerca di sviluppare",
    evolutionQuote:
      "«La tua evoluzione non consiste nel rifiutare ciò che sei stato. Consiste nell’utilizzare le tue esperienze come un passaggio verso un’espressione più libera e consapevole di te stesso.»",
    innerStrengths: "Le tue forze interiori",
    understandNourishment:
      "Comprendere ciò che ti nutre e ciò che ti trasforma",
    innerStrengthsIntro:
      "Il Sole mostra la consapevolezza che sei invitato a sviluppare. La Luna rivela i bisogni emotivi che devono essere rispettati affinché questa evoluzione rimanga sostenibile. Plutone indica le zone nelle quali il tuo percorso richiede una trasformazione profonda, mentre Saturno rappresenta gli apprendimenti che richiedono tempo e maturità.",
    sun: "Sole",
    moon: "Luna",
    pluto: "Plutone",
    sunRole:
      "La consapevolezza che sei chiamato a sviluppare ed esprimere maggiormente.",
    moonRole:
      "I tuoi bisogni affettivi, protettivi e istintivi.",
    plutoRole:
      "La tua capacità di attraversare perdite, crisi e rinascite.",
    innerWorldNeeds:
      "Ciò di cui ha bisogno il tuo mondo interiore",
    transformationProcess:
      "Il tuo processo di trasformazione",
    alignmentNeed:
      "Il tuo profondo bisogno di allineamento",
    consciousIntegration:
      "Integrazione consapevole",
    experiencesAsPath:
      "Fare delle tue esperienze un vero percorso di evoluzione",
    integrationIntro:
      "Il tuo cammino interiore non segue una linea perfettamente retta. Alcune situazioni possono ritornare finché non riesci a rispondere da una consapevolezza diversa. L’evoluzione appare quando le tue scelte smettono di riprodurre automaticamente i vecchi meccanismi di protezione.",
    transformationLabel: "Trasformazione",
    whatToRelease:
      "Ciò che sei invitato a liberare",
    alignmentLabel: "Allineamento",
    howToKnowProgress:
      "Come riconoscere che stai avanzando",
    threeQuestions:
      "Tre domande da porti",
    question1:
      "Questa decisione corrisponde a ciò che sento realmente oggi oppure riproduce un vecchio modo di proteggermi?",
    question2:
      "Quale emozione o paura cerca di influenzare la mia scelta e di cosa ho bisogno per ascoltarla senza affidarle tutta la direzione?",
    question3:
      "Quale versione più consapevole di me stesso potrebbe rispondere diversamente a questa situazione?",
    saturnRoleTitle:
      "Il ruolo di Saturno nella tua evoluzione",
    saturnIn: "Saturno in",
    chartFallback: "nel tuo tema",
    saturnText:
      "ricorda che alcune qualità si rivelano soltanto con il tempo. Ciò che inizialmente sembra un limite può diventare una profonda padronanza quando accetti di avanzare con pazienza, costanza e realismo.",
    affirmationLabel:
      "La tua affermazione Firma",
    moonFallback:
      "La tua Luna rivela le condizioni emotive di cui hai bisogno per rimanere connesso a te stesso e attraversare i periodi di trasformazione con maggiore stabilità.",
    plutoFallback:
      "Plutone descrive le trasformazioni profonde che ti invitano ad abbandonare i vecchi meccanismi di protezione e ricostruire partendo da una verità più interiore.",

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
          "Imparare a scegliere la tua direzione",
        introduction:
          "Il tuo cammino interiore ti invita a sviluppare un rapporto consapevole con coraggio, iniziativa e affermazione personale. La tua anima cerca di vivere direttamente l’esperienza, prendere decisioni e scoprire ciò che diventa possibile quando smetti di aspettare un permesso esterno.",
        oldPattern:
          "A volte puoi reagire molto rapidamente, confondere il movimento con il vero progresso o credere che la tua forza dipenda dal non esitare mai.",
        evolution:
          "La tua evoluzione consiste nel trasformare l’impulso in volontà consapevole. Progredisci quando scegli le tue battaglie, assumi i tuoi desideri e impari ad agire senza schiacciare la tua sensibilità né quella degli altri.",
        innerNeed:
          "La tua anima ha bisogno di sentirsi libera di iniziare, esplorare e definirsi da sola.",
        transformation:
          "La tua trasformazione avviene quando il tuo coraggio diventa una forza creativa invece che una reazione difensiva.",
        alignment:
          "Sei allineato quando le tue decisioni sono franche, responsabili e sufficientemente ponderate da sostenere una direzione duratura.",
        affirmation:
          "Avanzo con coraggio senza perdere la consapevolezza di ciò che sto costruendo.",
      },

      Taurus: {
        title:
          "Trasformare la sicurezza in vera stabilità interiore",
        introduction:
          "Il tuo cammino interiore ti invita a sviluppare pazienza, radicamento e un rapporto più consapevole con i tuoi valori. La tua anima cerca di costruire, proteggere e dare forma duratura a ciò che considera essenziale.",
        oldPattern:
          "A volte puoi mantenere una situazione solo perché è conosciuta, resistere al cambiamento o associare la sicurezza a ciò che possiedi e controlli.",
        evolution:
          "La tua evoluzione consiste nel comprendere che la vera stabilità non dipende dall’immobilità. Nasce dalla capacità di adattarti senza rinnegare ciò che conta profondamente per te.",
        innerNeed:
          "La tua anima ha bisogno di continuità, semplicità, bellezza e riferimenti concreti.",
        transformation:
          "La tua trasformazione avviene quando accetti di rinnovare le tue fondamenta invece di proteggere strutture diventate limitanti.",
        alignment:
          "Sei allineato quando le tue scelte rispettano il tuo ritmo lasciando un vero spazio all’evoluzione.",
        affirmation:
          "Posso evolvere senza perdere ciò che dà un significato profondo alla mia vita.",
      },

      Gemini: {
        title:
          "Passare dalla curiosità a una comprensione viva",
        introduction:
          "Il tuo cammino interiore ti invita a esplorare idee, parole e legami che permettono di comprendere meglio il mondo. La tua anima cerca di imparare, trasmettere e creare ponti tra prospettive differenti.",
        oldPattern:
          "A volte puoi moltiplicare le informazioni, cambiare rapidamente direzione o rimanere nell’analisi per evitare un impegno più profondo.",
        evolution:
          "La tua evoluzione consiste nello scegliere alcune idee, approfondirle e dare loro vera continuità. La tua intelligenza diventa più potente quando collega curiosità ed esperienza.",
        innerNeed:
          "La tua anima ha bisogno di scambi, movimento mentale e libertà nel modo di pensare.",
        transformation:
          "La tua trasformazione avviene quando smetti di cercare tutte le risposte nello stesso momento e accetti di vivere pienamente una domanda importante.",
        alignment:
          "Sei allineato quando la tua comunicazione diventa chiara, sincera e capace di trasmettere una comprensione realmente integrata.",
        affirmation:
          "Trasformo le mie idee in conoscenze vive e utili.",
      },

      Cancer: {
        title:
          "Creare una sicurezza emotiva che ti appartenga",
        introduction:
          "Il tuo cammino interiore ti invita a riconoscere la profondità della tua sensibilità, della memoria e dei bisogni affettivi. La tua anima cerca di comprendere ciò che nutre davvero il senso di appartenenza.",
        oldPattern:
          "A volte puoi rimanere legato al passato, portare le emozioni di chi ti circonda o credere che il tuo valore dipenda dal ruolo protettivo che svolgi.",
        evolution:
          "La tua evoluzione consiste nel prenderti cura di te con la stessa presenza che offri agli altri. Progredisci quando le emozioni diventano informazioni invece che prigioni.",
        innerNeed:
          "La tua anima ha bisogno di dolcezza, sicurezza, intimità e legami nei quali possa rimanere autentica.",
        transformation:
          "La tua trasformazione avviene quando liberi i ricordi che non corrispondono più al tuo presente.",
        alignment:
          "Sei allineato quando proteggi ciò che è prezioso senza chiuderti né dimenticarti.",
        affirmation:
          "Creo dentro di me la sicurezza che per molto tempo ho cercato intorno a me.",
      },

      Leo: {
        title:
          "Passare dal bisogno di riconoscimento al coraggio di risplendere",
        introduction:
          "Il tuo cammino interiore ti invita a sviluppare un’espressione personale viva, creativa e sincera. La tua anima cerca di riconoscere il proprio valore e condividere una luce che non dipenda completamente dallo sguardo esterno.",
        oldPattern:
          "A volte puoi misurare il tuo valore attraverso l’attenzione ricevuta, nascondere la vulnerabilità dietro l’orgoglio o temere che la tua espressione non venga sufficientemente riconosciuta.",
        evolution:
          "La tua evoluzione consiste nel creare dal tuo centro. Progredisci quando assumi ciò che ti rende unico, anche quando il risultato non viene applaudito immediatamente.",
        innerNeed:
          "La tua anima ha bisogno di gioia, creazione, calore e libertà di esprimere ciò che porta dentro.",
        transformation:
          "La tua trasformazione avviene quando il tuo splendore diventa condivisione invece che prova del tuo valore.",
        alignment:
          "Sei allineato quando prendi il tuo posto con generosità, dignità e semplicità.",
        affirmation:
          "La mia luce ha valore anche quando non viene riconosciuta immediatamente.",
      },

      Virgo: {
        title:
          "Trasformare l’esigenza in padronanza benevola",
        introduction:
          "Il tuo cammino interiore ti invita a sviluppare discernimento, precisione e un rapporto più consapevole con il servizio. La tua anima cerca di migliorare, comprendere ed essere utile senza ridursi alla performance.",
        oldPattern:
          "A volte puoi concentrarti su ciò che manca, rimandare un’azione per paura dell’imperfezione o associare il tuo valore all’essere irreprensibile.",
        evolution:
          "La tua evoluzione consiste nel riconoscere che la competenza cresce grazie all’esperienza. Progredisci quando sostituisci la critica costante con un miglioramento concreto e realistico.",
        innerNeed:
          "La tua anima ha bisogno di chiarezza, ordine, utilità e della sensazione che i suoi sforzi producano un effetto tangibile.",
        transformation:
          "La tua trasformazione avviene quando utilizzi la tua intelligenza per sostenere la vita invece di controllare ogni errore.",
        alignment:
          "Sei allineato quando la tua esigenza diventa una risorsa senza trasformarsi in una condanna permanente.",
        affirmation:
          "Posso progredire senza pretendere da me una perfezione impossibile.",
      },

      Libra: {
        title:
          "Costruire armonia senza abbandonare la tua verità",
        introduction:
          "Il tuo cammino interiore ti invita a comprendere la relazione, la cooperazione e l’equilibrio tra te e gli altri. La tua anima cerca di creare legami più giusti senza perdere il proprio centro.",
        oldPattern:
          "A volte puoi evitare i disaccordi, rimandare le decisioni o adattare eccessivamente la tua posizione per preservare una pace fragile.",
        evolution:
          "La tua evoluzione consiste nello sviluppare una diplomazia che includa la tua verità. Progredisci quando comprendi che una relazione sana può sostenere una differenza, un limite e una decisione chiara.",
        innerNeed:
          "La tua anima ha bisogno di bellezza, rispetto, scambio e relazioni fondate su vera reciprocità.",
        transformation:
          "La tua trasformazione avviene quando smetti di associare l’amore alla cancellazione personale.",
        alignment:
          "Sei allineato quando crei armonia partendo da un centro interiore stabile.",
        affirmation:
          "Posso amare, collaborare e rimanere fedele a me stesso.",
      },

      Scorpio: {
        title:
          "Trasformare la paura di perdere in potere di rinascita",
        introduction:
          "Il tuo cammino interiore ti invita a esplorare le zone profonde dell’esperienza umana: attaccamento, fiducia, vulnerabilità, perdita e trasformazione. La tua anima cerca di comprendere ciò che rimane quando le vecchie strutture scompaiono.",
        oldPattern:
          "A volte puoi trattenere, controllare, mettere alla prova o nascondere la tua vulnerabilità per ridurre il rischio di essere ferito o tradito.",
        evolution:
          "La tua evoluzione consiste nel riconoscere che il tuo potere non dipende dalla capacità di controllare tutto. Progredisci quando lasci morire ciò che non possiede più verità e accetti di ricostruire da uno spazio più autentico.",
        innerNeed:
          "La tua anima ha bisogno di profondità, lealtà, intensità e relazioni capaci di sostenere una vera trasformazione.",
        transformation:
          "La tua trasformazione avviene quando scegli lucidità senza rinchiuderti nella diffidenza.",
        alignment:
          "Sei allineato quando la tua intensità diventa una forza di guarigione, creazione e rinnovamento.",
        affirmation:
          "Posso attraversare il cambiamento senza perdere il mio potere interiore.",
      },

      Sagittarius: {
        title:
          "Trasformare la ricerca di libertà in ricerca di verità",
        introduction:
          "Il tuo cammino interiore ti invita a esplorare, imparare e ampliare la tua comprensione della vita. La tua anima cerca una direzione ricca di significato e una verità sufficientemente ampia da sostenere il suo bisogno di evoluzione.",
        oldPattern:
          "A volte puoi fuggire dai limiti, moltiplicare le esperienze o difendere una convinzione prima di averne davvero esplorato tutta la complessità.",
        evolution:
          "La tua evoluzione consiste nell’unire libertà e responsabilità. Progredisci quando le tue scoperte diventano saggezza vissuta invece che una successione di possibilità.",
        innerNeed:
          "La tua anima ha bisogno di spazio, speranza, movimento e una visione che dia significato alle sue esperienze.",
        transformation:
          "La tua trasformazione avviene quando smetti di cercare altrove ciò che l’esperienza presente sta già cercando di insegnarti.",
        alignment:
          "Sei allineato quando la tua libertà nutre la tua consapevolezza e capacità di trasmissione.",
        affirmation:
          "Amplio i miei orizzonti senza fuggire dalle responsabilità che danno significato al mio cammino.",
      },

      Capricorn: {
        title:
          "Trasformare il dovere in autorità interiore",
        introduction:
          "Il tuo cammino interiore ti invita a sviluppare pazienza, responsabilità e una reale capacità di costruire nel tempo. La tua anima cerca di creare un’opera, una struttura o una padronanza capace di resistere alle prove.",
        oldPattern:
          "A volte puoi imporre a te stesso responsabilità eccessive, credere che il tuo valore dipenda soltanto dai risultati o temere di perdere il controllo se rallenti.",
        evolution:
          "La tua evoluzione consiste nel riconoscere che la vera autorità non si basa soltanto sullo sforzo. Nasce anche da coerenza, esperienza e rispetto dei tuoi limiti.",
        innerNeed:
          "La tua anima ha bisogno di direzione, solidità, rispetto e della sensazione che i suoi sforzi contribuiscano a una costruzione duratura.",
        transformation:
          "La tua trasformazione avviene quando smetti di fare della difficoltà una prova obbligatoria di merito.",
        alignment:
          "Sei allineato quando la tua ambizione sostiene la tua integrità e non il tuo esaurimento.",
        affirmation:
          "Costruisco con pazienza senza sacrificare la mia umanità ai miei obiettivi.",
      },

      Aquarius: {
        title:
          "Trasformare la differenza in contributo consapevole",
        introduction:
          "Il tuo cammino interiore ti invita a preservare la libertà di pensiero, mettere in discussione modelli troppo stretti e partecipare a un’evoluzione più collettiva. La tua anima cerca di comprendere come la propria originalità possa diventare utile.",
        oldPattern:
          "A volte puoi distaccarti emotivamente, rifiutare una struttura soltanto perché sembra convenzionale o proteggerti dietro una posizione di osservatore.",
        evolution:
          "La tua evoluzione consiste nel collegare indipendenza e partecipazione. Progredisci quando le tue nuove idee prendono forma concreta e rimangono collegate ai bisogni umani.",
        innerNeed:
          "La tua anima ha bisogno di autonomia, visione, amicizia e libertà di immaginare un altro modo di vivere.",
        transformation:
          "La tua trasformazione avviene quando accetti che l’appartenenza non richiede la scomparsa della tua individualità.",
        alignment:
          "Sei allineato quando la tua differenza crea uno spazio di apertura invece che una distanza permanente.",
        affirmation:
          "La mia unicità diventa una forza quando la collego a un contributo concreto.",
      },

      Pisces: {
        title:
          "Trasformare l’ipersensibilità in presenza ispirata",
        introduction:
          "Il tuo cammino interiore ti invita a sviluppare compassione, intuizione e un rapporto consapevole con il mondo invisibile delle emozioni, dei simboli e dell’immaginazione. La tua anima cerca di collegare ciò che sembra separato.",
        oldPattern:
          "A volte puoi assorbire le emozioni dell’ambiente, idealizzare, evitare una realtà difficile o perdere i tuoi riferimenti nei bisogni degli altri.",
        evolution:
          "La tua evoluzione consiste nel dare forma concreta alla tua sensibilità. Progredisci quando la tua intuizione è accompagnata da limiti, abitudini e scelte sufficientemente chiare.",
        innerNeed:
          "La tua anima ha bisogno di silenzio, ispirazione, compassione e spazi nei quali ritrovare la propria frequenza interiore.",
        transformation:
          "La tua trasformazione avviene quando smetti di confondere apertura del cuore e assenza di protezione.",
        alignment:
          "Sei allineato quando la tua sensibilità diventa creazione, presenza o aiuto consapevole.",
        affirmation:
          "Proteggo la mia sensibilità affinché possa diventare una vera forza.",
      },
    },

    moonNeeds: {
      Aries:
        "La tua Luna in Ariete ha bisogno di movimento, franchezza e di sentirsi libera di reagire. Il tuo equilibrio emotivo migliora quando esprimi rapidamente ciò che senti senza lasciare che l’impulso decida da solo il seguito.",
      Taurus:
        "La tua Luna in Toro ha bisogno di stabilità, calma e riferimenti sensoriali. Il tuo equilibrio emotivo si ricostruisce quando rallenti, ritorni al corpo e ritrovi un ambiente rassicurante.",
      Gemini:
        "La tua Luna in Gemelli ha bisogno di parlare, comprendere e mettere parole su ciò che vive. Il tuo equilibrio emotivo dipende spesso dalla capacità di creare movimento nei tuoi pensieri.",
      Cancer:
        "La tua Luna in Cancro ha bisogno di intimità, continuità e legami protettivi. Il tuo equilibrio emotivo passa attraverso il riconoscimento dei tuoi bisogni invece della loro dissimulazione.",
      Leo:
        "La tua Luna in Leone ha bisogno di calore, riconoscimento e di un’espressione affettiva generosa. Il tuo equilibrio emotivo cresce quando ti concedi il diritto di creare ed essere visibile.",
      Virgo:
        "La tua Luna in Vergine ha bisogno di ordine, chiarezza e della sensazione di poter migliorare una situazione. Il tuo equilibrio emotivo passa attraverso gesti semplici, utili e concreti.",
      Libra:
        "La tua Luna in Bilancia ha bisogno di armonia, rispetto e relazioni equilibrate. La tua pace interiore diventa più stabile quando non sacrifichi la tua verità per evitare un disaccordo.",
      Scorpio:
        "La tua Luna in Scorpione ha bisogno di profondità, fiducia e vera lealtà. Il tuo equilibrio emotivo passa attraverso la possibilità di sentire intensamente senza dover controllare ogni conseguenza.",
      Sagittarius:
        "La tua Luna in Sagittario ha bisogno di spazio, movimento e di una prospettiva piena di speranza. Il tuo equilibrio emotivo ritorna quando riesci a ridare significato a ciò che stai vivendo.",
      Capricorn:
        "La tua Luna in Capricorno ha bisogno di solidità, padronanza e della sensazione di essere ancora capace di affrontare le situazioni. Il tuo equilibrio emotivo si approfondisce quando ti permetti anche di ricevere sostegno.",
      Aquarius:
        "La tua Luna in Acquario ha bisogno di libertà, distanza e di un ambiente nel quale la sua differenza sia rispettata. Il tuo equilibrio emotivo cresce quando rimani connesso alle tue emozioni senza sentirti imprigionato in esse.",
      Pisces:
        "La tua Luna in Pesci ha bisogno di dolcezza, silenzio e di uno spazio per ritirarsi dalle influenze esterne. Il tuo equilibrio emotivo dipende da limiti chiari e da un’espressione creativa o intuitiva.",
    },

    plutoTransformations: {
      Aries:
        "Plutone in Ariete intensifica le trasformazioni legate all’autonomia, al coraggio e al modo di esercitare la tua volontà.",
      Taurus:
        "Plutone in Toro trasforma profondamente il tuo rapporto con sicurezza, risorse e ciò che consideri duraturo.",
      Gemini:
        "Plutone in Gemelli spinge il tuo pensiero oltre le risposte superficiali e trasforma il tuo rapporto con parole, idee e informazioni.",
      Cancer:
        "Plutone in Cancro trasforma il tuo rapporto con radici, famiglia, memoria e sicurezza emotiva.",
      Leo:
        "Plutone in Leone intensifica il tuo bisogno di creare, risplendere e scoprire un potere personale più autentico.",
      Virgo:
        "Plutone in Vergine trasforma il tuo rapporto con controllo, perfezione, servizio e padronanza della vita quotidiana.",
      Libra:
        "Plutone in Bilancia trasforma il modo in cui vivi impegno, dipendenza, giustizia e rapporti di potere nelle relazioni.",
      Scorpio:
        "Plutone in Scorpione amplifica la tua capacità di rigenerazione e ti invita ad attraversare consapevolmente processi di perdita, verità e rinascita.",
      Sagittarius:
        "Plutone in Sagittario trasforma le tue convinzioni, la tua visione del mondo e il tuo rapporto con la verità.",
      Capricorn:
        "Plutone in Capricorno trasforma il tuo rapporto con autorità, strutture, ambizione e successo.",
      Aquarius:
        "Plutone in Acquario trasforma il tuo rapporto con libertà, collettività, tecnologia e modelli sociali.",
      Pisces:
        "Plutone in Pesci trasforma il tuo rapporto con compassione, limiti emotivi, intuizione e capacità di lasciare andare.",
    },
  },

  pt: {
    analysis: "Análise Assinatura",
    title: "O caminho da sua alma",
    subtitle:
      "Os movimentos interiores que convidam você a superar antigos reflexos e se tornar mais plenamente você mesmo.",
    evolutionAxis: "Seu eixo de evolução",
    oldPatternLabel: "Antigo reflexo",
    whatCanHoldYouBack:
      "O que pode prender você",
    evolutionaryMovement:
      "Movimento evolutivo",
    whatPathDevelops:
      "O que seu caminho procura desenvolver",
    evolutionQuote:
      "“Sua evolução não consiste em rejeitar aquilo que você foi. Ela consiste em utilizar suas experiências como uma passagem para uma expressão mais livre e consciente de si mesmo.”",
    innerStrengths: "Suas forças interiores",
    understandNourishment:
      "Compreender aquilo que nutre e transforma você",
    innerStrengthsIntro:
      "O Sol mostra a consciência que você é convidado a desenvolver. A Lua revela as necessidades emocionais que precisam ser respeitadas para que essa evolução permaneça sustentável. Plutão indica as áreas nas quais seu caminho exige uma transformação profunda, enquanto Saturno representa os aprendizados que exigem tempo e maturidade.",
    sun: "Sol",
    moon: "Lua",
    pluto: "Plutão",
    sunRole:
      "A consciência que você é chamado a desenvolver e expressar mais plenamente.",
    moonRole:
      "Suas necessidades afetivas, protetoras e instintivas.",
    plutoRole:
      "Sua capacidade de atravessar perdas, crises e renascimentos.",
    innerWorldNeeds:
      "O que seu mundo interior precisa",
    transformationProcess:
      "Seu processo de transformação",
    alignmentNeed:
      "Sua necessidade profunda de alinhamento",
    consciousIntegration:
      "Integração consciente",
    experiencesAsPath:
      "Transformar suas experiências em um verdadeiro caminho de evolução",
    integrationIntro:
      "Seu caminho interior não segue uma linha perfeitamente reta. Algumas situações podem retornar até que você consiga responder a elas a partir de uma consciência diferente. A evolução aparece quando suas escolhas deixam de reproduzir automaticamente antigos mecanismos de proteção.",
    transformationLabel: "Transformação",
    whatToRelease:
      "O que você é convidado a liberar",
    alignmentLabel: "Alinhamento",
    howToKnowProgress:
      "Como reconhecer que você está avançando",
    threeQuestions:
      "Três perguntas para fazer a si mesmo",
    question1:
      "Esta decisão corresponde ao que realmente sinto hoje ou reproduz uma antiga maneira de me proteger?",
    question2:
      "Que emoção ou medo procura influenciar minha escolha e do que preciso para ouvi-lo sem entregar a ele toda a direção?",
    question3:
      "Que versão mais consciente de mim mesmo poderia responder de outra maneira a esta situação?",
    saturnRoleTitle:
      "O papel de Saturno na sua evolução",
    saturnIn: "Saturno em",
    chartFallback: "seu mapa",
    saturnText:
      "lembra que algumas qualidades só se revelam com o tempo. Aquilo que primeiro parece um limite pode se tornar um domínio profundo quando você aceita progredir com paciência, constância e realismo.",
    affirmationLabel:
      "Sua afirmação Assinatura",
    moonFallback:
      "Sua Lua revela as condições emocionais de que você precisa para permanecer conectado consigo mesmo e atravessar períodos de transformação com maior estabilidade.",
    plutoFallback:
      "Plutão descreve as transformações profundas que convidam você a abandonar antigos mecanismos de proteção e reconstruir a partir de uma verdade mais interior.",

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
          "Aprender a escolher sua própria direção",
        introduction:
          "Seu caminho interior convida você a desenvolver uma relação consciente com coragem, iniciativa e afirmação pessoal. Sua alma procura experimentar a vida diretamente, tomar decisões e descobrir aquilo que se torna possível quando você deixa de esperar uma autorização exterior.",
        oldPattern:
          "Às vezes você pode reagir muito rapidamente, confundir movimento com verdadeiro progresso ou acreditar que sua força depende de nunca hesitar.",
        evolution:
          "Sua evolução consiste em transformar impulso em vontade consciente. Você progride quando escolhe suas batalhas, assume seus desejos e aprende a agir sem esmagar sua sensibilidade nem a dos outros.",
        innerNeed:
          "Sua alma precisa sentir que permanece livre para iniciar, explorar e se definir por si mesma.",
        transformation:
          "Sua transformação acontece quando sua coragem se torna uma força criadora em vez de uma reação defensiva.",
        alignment:
          "Você está alinhado quando suas decisões são francas, responsáveis e suficientemente refletidas para sustentar uma direção duradoura.",
        affirmation:
          "Avanço com coragem sem perder a consciência daquilo que estou construindo.",
      },

      Taurus: {
        title:
          "Transformar segurança em verdadeira estabilidade interior",
        introduction:
          "Seu caminho interior convida você a desenvolver paciência, enraizamento e uma relação mais consciente com seus valores. Sua alma procura construir, proteger e dar uma forma duradoura àquilo que considera essencial.",
        oldPattern:
          "Às vezes você pode manter uma situação apenas porque ela é conhecida, resistir à mudança ou associar segurança àquilo que possui e controla.",
        evolution:
          "Sua evolução consiste em compreender que a verdadeira estabilidade não depende da imobilidade. Ela nasce da sua capacidade de se adaptar sem negar aquilo que é profundamente importante para você.",
        innerNeed:
          "Sua alma precisa de continuidade, simplicidade, beleza e referências concretas.",
        transformation:
          "Sua transformação acontece quando você aceita renovar suas bases em vez de proteger estruturas que se tornaram limitantes.",
        alignment:
          "Você está alinhado quando suas escolhas respeitam seu ritmo deixando espaço real para a evolução.",
        affirmation:
          "Posso evoluir sem perder aquilo que dá um sentido profundo à minha vida.",
      },

      Gemini: {
        title:
          "Passar da curiosidade para uma compreensão viva",
        introduction:
          "Seu caminho interior convida você a explorar ideias, palavras e vínculos que permitem compreender melhor o mundo. Sua alma procura aprender, transmitir e criar pontes entre diferentes perspectivas.",
        oldPattern:
          "Às vezes você pode multiplicar informações, mudar rapidamente de direção ou permanecer na análise para evitar um compromisso mais profundo.",
        evolution:
          "Sua evolução consiste em escolher algumas ideias, aprofundá-las e dar a elas verdadeira continuidade. Sua inteligência se torna mais poderosa quando conecta curiosidade e experiência.",
        innerNeed:
          "Sua alma precisa de trocas, movimento mental e liberdade na maneira de pensar.",
        transformation:
          "Sua transformação acontece quando você deixa de buscar todas as respostas ao mesmo tempo e aceita habitar plenamente uma pergunta importante.",
        alignment:
          "Você está alinhado quando sua comunicação se torna clara, sincera e capaz de transmitir uma compreensão realmente integrada.",
        affirmation:
          "Transformo minhas ideias em conhecimentos vivos e úteis.",
      },

      Cancer: {
        title:
          "Criar uma segurança emocional que pertença a você",
        introduction:
          "Seu caminho interior convida você a reconhecer a profundidade da sua sensibilidade, memória e necessidades afetivas. Sua alma procura compreender aquilo que realmente nutre o sentimento de pertencimento.",
        oldPattern:
          "Às vezes você pode permanecer preso ao passado, carregar as emoções das pessoas ao seu redor ou acreditar que seu valor depende do papel protetor que desempenha.",
        evolution:
          "Sua evolução consiste em cuidar de si mesmo com a mesma presença que oferece aos outros. Você progride quando suas emoções se tornam informações em vez de prisões.",
        innerNeed:
          "Sua alma precisa de suavidade, segurança, intimidade e vínculos nos quais possa permanecer autêntica.",
        transformation:
          "Sua transformação acontece quando você libera memórias que já não correspondem ao seu presente.",
        alignment:
          "Você está alinhado quando protege aquilo que é precioso sem se fechar nem esquecer de si mesmo.",
        affirmation:
          "Crio dentro de mim a segurança que por muito tempo procurei ao meu redor.",
      },

      Leo: {
        title:
          "Passar da necessidade de reconhecimento para a coragem de brilhar",
        introduction:
          "Seu caminho interior convida você a desenvolver uma expressão pessoal viva, criativa e sincera. Sua alma procura reconhecer seu próprio valor e compartilhar uma luz que não dependa inteiramente do olhar externo.",
        oldPattern:
          "Às vezes você pode medir seu valor pela atenção recebida, esconder vulnerabilidade atrás do orgulho ou temer que sua expressão não seja suficientemente reconhecida.",
        evolution:
          "Sua evolução consiste em criar a partir do seu centro. Você progride quando assume aquilo que o torna único, mesmo quando o resultado não recebe aplausos imediatos.",
        innerNeed:
          "Sua alma precisa de alegria, criação, calor e liberdade para expressar aquilo que carrega.",
        transformation:
          "Sua transformação acontece quando seu brilho se torna uma partilha em vez de uma prova do seu valor.",
        alignment:
          "Você está alinhado quando ocupa seu lugar com generosidade, dignidade e simplicidade.",
        affirmation:
          "Minha luz tem valor mesmo quando não é imediatamente reconhecida.",
      },

      Virgo: {
        title:
          "Transformar exigência em domínio benevolente",
        introduction:
          "Seu caminho interior convida você a desenvolver discernimento, precisão e uma relação mais consciente com o serviço. Sua alma procura melhorar, compreender e tornar-se útil sem se reduzir ao desempenho.",
        oldPattern:
          "Às vezes você pode se concentrar no que falta, adiar uma ação por medo da imperfeição ou associar seu valor ao fato de ser irrepreensível.",
        evolution:
          "Sua evolução consiste em reconhecer que sua competência cresce com a experiência. Você progride quando substitui a crítica constante por uma melhoria concreta e realista.",
        innerNeed:
          "Sua alma precisa de clareza, ordem, utilidade e sentir que seus esforços produzem um efeito tangível.",
        transformation:
          "Sua transformação acontece quando utiliza sua inteligência para apoiar a vida em vez de vigiar cada erro.",
        alignment:
          "Você está alinhado quando sua exigência se torna um recurso sem se transformar em uma condenação permanente.",
        affirmation:
          "Posso progredir sem exigir de mim uma perfeição impossível.",
      },

      Libra: {
        title:
          "Construir harmonia sem abandonar sua verdade",
        introduction:
          "Seu caminho interior convida você a compreender os relacionamentos, a cooperação e o equilíbrio entre você e os outros. Sua alma procura criar vínculos mais justos sem perder seu próprio centro.",
        oldPattern:
          "Às vezes você pode evitar desacordos, adiar decisões ou adaptar excessivamente sua posição para preservar uma paz frágil.",
        evolution:
          "Sua evolução consiste em desenvolver uma diplomacia que inclua sua própria verdade. Você progride quando compreende que uma relação saudável pode suportar uma diferença, um limite e uma decisão clara.",
        innerNeed:
          "Sua alma precisa de beleza, respeito, troca e relações baseadas em verdadeira reciprocidade.",
        transformation:
          "Sua transformação acontece quando você deixa de associar amor ao apagamento de si mesmo.",
        alignment:
          "Você está alinhado quando cria harmonia a partir de um centro interior estável.",
        affirmation:
          "Posso amar, colaborar e permanecer fiel a mim mesmo.",
      },

      Scorpio: {
        title:
          "Transformar o medo de perder em poder de renascimento",
        introduction:
          "Seu caminho interior convida você a explorar as áreas profundas da experiência humana: apego, confiança, vulnerabilidade, perda e transformação. Sua alma procura compreender aquilo que permanece quando as antigas estruturas desaparecem.",
        oldPattern:
          "Às vezes você pode reter, controlar, testar ou esconder sua vulnerabilidade para reduzir o risco de ser ferido ou traído.",
        evolution:
          "Sua evolução consiste em reconhecer que seu poder não depende da capacidade de controlar tudo. Você progride quando deixa morrer aquilo que já não possui verdade e aceita reconstruir a partir de um espaço mais autêntico.",
        innerNeed:
          "Sua alma precisa de profundidade, lealdade, intensidade e relações capazes de sustentar uma verdadeira transformação.",
        transformation:
          "Sua transformação acontece quando escolhe lucidez sem se fechar na desconfiança.",
        alignment:
          "Você está alinhado quando sua intensidade se torna uma força de cura, criação e renovação.",
        affirmation:
          "Posso atravessar a mudança sem perder meu poder interior.",
      },

      Sagittarius: {
        title:
          "Transformar a busca pela liberdade em busca pela verdade",
        introduction:
          "Seu caminho interior convida você a explorar, aprender e ampliar sua compreensão da vida. Sua alma procura uma direção cheia de sentido e uma verdade ampla o suficiente para sustentar sua necessidade de evolução.",
        oldPattern:
          "Às vezes você pode fugir dos limites, multiplicar experiências ou defender uma convicção antes de realmente explorar toda a sua complexidade.",
        evolution:
          "Sua evolução consiste em unir liberdade e responsabilidade. Você progride quando suas descobertas se tornam sabedoria vivida em vez de uma sucessão de possibilidades.",
        innerNeed:
          "Sua alma precisa de espaço, esperança, movimento e uma visão que dê sentido às suas experiências.",
        transformation:
          "Sua transformação acontece quando você deixa de procurar em outro lugar aquilo que a experiência presente já tenta ensinar.",
        alignment:
          "Você está alinhado quando sua liberdade nutre sua consciência e sua capacidade de transmissão.",
        affirmation:
          "Amplio meus horizontes sem fugir das responsabilidades que dão sentido ao meu caminho.",
      },

      Capricorn: {
        title:
          "Transformar dever em autoridade interior",
        introduction:
          "Seu caminho interior convida você a desenvolver paciência, responsabilidade e uma capacidade real de construir com o tempo. Sua alma procura criar uma obra, estrutura ou domínio capaz de resistir às provas.",
        oldPattern:
          "Às vezes você pode impor responsabilidades excessivas a si mesmo, acreditar que seu valor depende apenas dos resultados ou temer perder o controle se diminuir o ritmo.",
        evolution:
          "Sua evolução consiste em reconhecer que a verdadeira autoridade não se apoia apenas no esforço. Ela também nasce da coerência, da experiência e do respeito pelos seus próprios limites.",
        innerNeed:
          "Sua alma precisa de direção, solidez, respeito e sentir que seus esforços contribuem para uma construção duradoura.",
        transformation:
          "Sua transformação acontece quando você deixa de transformar dificuldade em prova obrigatória de mérito.",
        alignment:
          "Você está alinhado quando sua ambição sustenta sua integridade e não seu esgotamento.",
        affirmation:
          "Construo com paciência sem sacrificar minha humanidade aos meus objetivos.",
      },

      Aquarius: {
        title:
          "Transformar diferença em contribuição consciente",
        introduction:
          "Seu caminho interior convida você a preservar sua liberdade de pensamento, questionar modelos estreitos demais e participar de uma evolução mais coletiva. Sua alma procura compreender como sua originalidade pode se tornar útil.",
        oldPattern:
          "Às vezes você pode se distanciar emocionalmente, rejeitar uma estrutura apenas porque parece convencional ou se proteger atrás de uma posição de observador.",
        evolution:
          "Sua evolução consiste em conectar independência e participação. Você progride quando suas novas ideias ganham forma concreta e permanecem conectadas às necessidades humanas.",
        innerNeed:
          "Sua alma precisa de autonomia, visão, amizade e liberdade para imaginar outra maneira de viver.",
        transformation:
          "Sua transformação acontece quando aceita que pertencer não exige o desaparecimento da sua individualidade.",
        alignment:
          "Você está alinhado quando sua diferença cria abertura em vez de distância permanente.",
        affirmation:
          "Minha singularidade se torna uma força quando a conecto a uma contribuição concreta.",
      },

      Pisces: {
        title:
          "Transformar hipersensibilidade em presença inspirada",
        introduction:
          "Seu caminho interior convida você a desenvolver compaixão, intuição e uma relação consciente com o mundo invisível das emoções, símbolos e imaginação. Sua alma procura reconectar aquilo que parece separado.",
        oldPattern:
          "Às vezes você pode absorver emoções do ambiente, idealizar, evitar uma realidade difícil ou perder suas referências nas necessidades dos outros.",
        evolution:
          "Sua evolução consiste em dar forma concreta à sua sensibilidade. Você progride quando sua intuição é acompanhada por limites, hábitos e escolhas suficientemente claros.",
        innerNeed:
          "Sua alma precisa de silêncio, inspiração, compaixão e espaços nos quais possa reencontrar sua própria frequência interior.",
        transformation:
          "Sua transformação acontece quando você deixa de confundir abertura do coração com ausência de proteção.",
        alignment:
          "Você está alinhado quando sua sensibilidade se torna criação, presença ou ajuda consciente.",
        affirmation:
          "Protejo minha sensibilidade para que ela possa se tornar uma verdadeira força.",
      },
    },

    moonNeeds: {
      Aries:
        "Sua Lua em Áries precisa de movimento, franqueza e sentir que pode reagir livremente. Seu equilíbrio emocional melhora quando você expressa rapidamente aquilo que sente sem deixar que o impulso decida sozinho o que vem depois.",
      Taurus:
        "Sua Lua em Touro precisa de estabilidade, calma e referências sensoriais. Seu equilíbrio emocional se reconstrói quando você diminui o ritmo, retorna ao corpo e reencontra um ambiente seguro.",
      Gemini:
        "Sua Lua em Gêmeos precisa falar, compreender e colocar em palavras aquilo que atravessa. Seu equilíbrio emocional frequentemente depende da sua capacidade de criar movimento nos pensamentos.",
      Cancer:
        "Sua Lua em Câncer precisa de intimidade, continuidade e vínculos protetores. Seu equilíbrio emocional passa pelo reconhecimento das suas necessidades em vez de escondê-las.",
      Leo:
        "Sua Lua em Leão precisa de calor, reconhecimento e expressão afetiva generosa. Seu equilíbrio emocional cresce quando você se permite criar e ser visível.",
      Virgo:
        "Sua Lua em Virgem precisa de ordem, clareza e sentir que pode melhorar uma situação. Seu equilíbrio emocional passa por gestos simples, úteis e concretos.",
      Libra:
        "Sua Lua em Libra precisa de harmonia, respeito e relações equilibradas. Sua paz interior se torna mais estável quando você não sacrifica sua verdade para evitar um desacordo.",
      Scorpio:
        "Sua Lua em Escorpião precisa de profundidade, confiança e verdadeira lealdade. Seu equilíbrio emocional passa pela possibilidade de sentir intensamente sem precisar controlar todas as consequências.",
      Sagittarius:
        "Sua Lua em Sagitário precisa de espaço, movimento e uma perspectiva cheia de esperança. Seu equilíbrio emocional retorna quando você consegue devolver sentido àquilo que está vivendo.",
      Capricorn:
        "Sua Lua em Capricórnio precisa de solidez, domínio e sentir que continua capaz de enfrentar as situações. Seu equilíbrio emocional se aprofunda quando você também se permite receber apoio.",
      Aquarius:
        "Sua Lua em Aquário precisa de liberdade, distância e um ambiente no qual sua diferença possa ser respeitada. Seu equilíbrio emocional cresce quando você permanece conectado às emoções sem se sentir preso a elas.",
      Pisces:
        "Sua Lua em Peixes precisa de suavidade, silêncio e espaço para se retirar das influências exteriores. Seu equilíbrio emocional depende de limites claros e de expressão criativa ou intuitiva.",
    },

    plutoTransformations: {
      Aries:
        "Plutão em Áries intensifica transformações ligadas à autonomia, à coragem e à maneira de exercer sua vontade.",
      Taurus:
        "Plutão em Touro transforma profundamente sua relação com segurança, recursos e aquilo que considera duradouro.",
      Gemini:
        "Plutão em Gêmeos leva seu pensamento além das respostas superficiais e transforma sua relação com palavras, ideias e informação.",
      Cancer:
        "Plutão em Câncer transforma sua relação com raízes, família, memória e segurança emocional.",
      Leo:
        "Plutão em Leão intensifica sua necessidade de criar, brilhar e descobrir um poder pessoal mais autêntico.",
      Virgo:
        "Plutão em Virgem transforma sua relação com controle, perfeição, serviço e domínio da vida cotidiana.",
      Libra:
        "Plutão em Libra transforma sua maneira de viver compromisso, dependência, justiça e relações de poder.",
      Scorpio:
        "Plutão em Escorpião amplia sua capacidade de regeneração e convida você a atravessar conscientemente processos de perda, verdade e renascimento.",
      Sagittarius:
        "Plutão em Sagitário transforma suas crenças, sua visão do mundo e sua relação com a verdade.",
      Capricorn:
        "Plutão em Capricórnio transforma sua relação com autoridade, estruturas, ambição e sucesso.",
      Aquarius:
        "Plutão em Aquário transforma sua relação com liberdade, coletivo, tecnologia e modelos sociais.",
      Pisces:
        "Plutão em Peixes transforma sua relação com compaixão, limites emocionais, intuição e capacidade de soltar.",
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

export function localizeSignatureSoulPath(
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
    /const SIGN_NAMES:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\};/,
    `const SIGN_NAMES: Record<string, string> = ${JSON.stringify(
      signNames,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | 12 profils du chemin de l’âme
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const SOUL_PATH_BY_SIGN:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\n\};(?=\n\n\/\*\n\|-+\n\| Influence de la Lune)/,
    `const SOUL_PATH_BY_SIGN: Record<
  string,
  SoulPathProfile
> = ${JSON.stringify(
      labels.profiles,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Besoins de la Lune
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const MOON_INNER_NEEDS:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\n\};(?=\n\n\/\*\n\|-+\n\| Influence de Pluton)/,
    `const MOON_INNER_NEEDS: Record<
  string,
  string
> = ${JSON.stringify(
      labels.moonNeeds,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Transformations de Pluton
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const PLUTO_TRANSFORMATION:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\n\};(?=\n\n\/\*\n\|-+\n\| Utilitaires)/,
    `const PLUTO_TRANSFORMATION: Record<
  string,
  string
> = ${JSON.stringify(
      labels.plutoTransformations,
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
    "Votre Lune révèle les conditions émotionnelles dont vous avez besoin pour rester relié à vous-même et traverser les périodes de transformation avec davantage de stabilité.",
    labels.moonFallback,
  );

  out = replaceFlexibleText(
    out,
    "Pluton décrit les transformations profondes qui vous invitent à abandonner les anciens mécanismes de protection et à reconstruire depuis une vérité plus intérieure.",
    labels.plutoFallback,
  );

  /*
  |--------------------------------------------------------------------------
  | Page 1
  |--------------------------------------------------------------------------
  */

  const replacements:
    Array<[string, string]> = [
      [
        "Analyse Signature",
        labels.analysis,
      ],
      [
        "Le chemin de votre âme",
        labels.title,
      ],
      [
        "Les mouvements intérieurs qui vous invitent à dépasser vos anciens réflexes et à devenir plus pleinement vous-même.",
        labels.subtitle,
      ],
      [
        "Votre axe d’évolution",
        labels.evolutionAxis,
      ],
      [
        "Ancien réflexe",
        labels.oldPatternLabel,
      ],
      [
        "Ce qui peut vous retenir",
        labels.whatCanHoldYouBack,
      ],
      [
        "Mouvement évolutif",
        labels.evolutionaryMovement,
      ],
      [
        "Ce que votre parcours cherche à développer",
        labels.whatPathDevelops,
      ],
      [
        "« Votre évolution ne consiste pas à rejeter ce que vous avez été. Elle consiste à utiliser vos expériences comme un passage vers une expression plus libre et plus consciente de vous-même. »",
        labels.evolutionQuote,
      ],

      /*
      |--------------------------------------------------------------------------
      | Page 2
      |--------------------------------------------------------------------------
      */

      [
        "Vos forces intérieures",
        labels.innerStrengths,
      ],
      [
        "Comprendre ce qui vous nourrit et ce qui vous transforme",
        labels.understandNourishment,
      ],
      [
        "Le Soleil montre la conscience que vous êtes invité à développer. La Lune révèle les besoins émotionnels qui doivent être respectés pour que cette évolution demeure vivable. Pluton indique les zones où votre parcours exige une transformation profonde, tandis que Saturne représente les apprentissages qui demandent du temps et de la maturité.",
        labels.innerStrengthsIntro,
      ],
      [
        "La conscience que vous êtes appelé à développer et à exprimer davantage.",
        labels.sunRole,
      ],
      [
        "Vos besoins affectifs, protecteurs et instinctifs.",
        labels.moonRole,
      ],
      [
        "Votre capacité à traverser les pertes, les crises et les renaissances.",
        labels.plutoRole,
      ],
      [
        "Ce dont votre monde intérieur a besoin",
        labels.innerWorldNeeds,
      ],
      [
        "Votre processus de transformation",
        labels.transformationProcess,
      ],
      [
        "Votre besoin profond d’alignement",
        labels.alignmentNeed,
      ],

      /*
      |--------------------------------------------------------------------------
      | Page 3
      |--------------------------------------------------------------------------
      */

      [
        "Intégration consciente",
        labels.consciousIntegration,
      ],
      [
        "Faire de vos expériences un véritable chemin d’évolution",
        labels.experiencesAsPath,
      ],
      [
        "Votre chemin intérieur ne suit pas une ligne parfaitement droite. Certaines situations peuvent revenir jusqu’à ce que vous puissiez y répondre depuis une conscience différente. L’évolution apparaît lorsque vos choix ne reproduisent plus automatiquement les anciens mécanismes de protection.",
        labels.integrationIntro,
      ],
      [
        "Transformation",
        labels.transformationLabel,
      ],
      [
        "Ce que vous êtes invité à libérer",
        labels.whatToRelease,
      ],
      [
        "Alignement",
        labels.alignmentLabel,
      ],
      [
        "Comment reconnaître que vous avancez",
        labels.howToKnowProgress,
      ],
      [
        "Trois questions à vous poser",
        labels.threeQuestions,
      ],
      [
        "Est-ce que cette décision correspond à ce que je ressens réellement aujourd’hui, ou reproduit-elle une ancienne manière de me protéger ?",
        labels.question1,
      ],
      [
        "Quelle émotion ou quelle peur cherche à influencer mon choix, et de quoi ai-je besoin pour l’écouter sans lui céder toute la direction ?",
        labels.question2,
      ],
      [
        "Quelle version plus consciente de moi-même pourrait répondre différemment à cette situation ?",
        labels.question3,
      ],
      [
        "Le rôle de Saturne dans votre évolution",
        labels.saturnRoleTitle,
      ],
      [
        "Votre affirmation Signature",
        labels.affirmationLabel,
      ],
    ];

  for (
    const [from, to] of
    replacements
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
  | Noms visibles des trois planètes
  |--------------------------------------------------------------------------
  |
  | Les clés techniques Sun / Moon / Pluto ne sont pas touchées.
  |--------------------------------------------------------------------------
  */

  out = replaceFlexibleText(
    out,
    "Soleil",
    labels.sun,
  );

  out = replaceFlexibleText(
    out,
    "Lune",
    labels.moon,
  );

  out = replaceFlexibleText(
    out,
    "Pluton",
    labels.pluto,
  );

  /*
  |--------------------------------------------------------------------------
  | Saturne — phrase dynamique de la page 3
  |--------------------------------------------------------------------------
  */

  out = replaceFlexibleText(
    out,
    "Saturne en",
    labels.saturnIn,
  );

  out = out.replace(
    /\|\|\s*"votre thème"/g,
    `|| ${JSON.stringify(
      labels.chartFallback,
    )}`,
  );

  out = replaceFlexibleText(
    out,
    "rappelle que certaines qualités ne se révèlent qu’avec le temps. Ce qui semble d’abord représenter une limite peut devenir une maîtrise profonde lorsque vous acceptez de progresser avec patience, constance et réalisme.",
    labels.saturnText,
  );

  return out;
}
