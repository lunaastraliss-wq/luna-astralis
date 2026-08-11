import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type PurposeProfile = {
  title: string;
  introduction: string;
  naturalDirection: string;
  fulfillment: string;
  contribution: string;
  challenge: string;
  key: string;
};

type LifePurposeLabels = {
  analysis: string;

  title: string;
  subtitle: string;

  fundamentalDirection: string;
  naturalMovement: string;
  fulfillmentTitle: string;
  quote: string;

  missionPillars: string;
  complementaryForces: string;
  pillarsIntro: string;

  sun: string;
  ascendant: string;
  jupiter: string;

  sunText: string;
  ascendantText: string;
  jupiterText: string;

  takeYourPlace: string;
  expansionPath: string;
  contributionTitle: string;

  consciousEvolution: string;
  potentialToDirection: string;
  evolutionIntro: string;

  masteryTitle: string;

  attentionPoint: string;
  slowFulfillment: string;

  signatureKey: string;
  innerDecision: string;

  concreteProgress: string;

  bullet1: string;
  bullet2: string;
  bullet3: string;

  guidingIntention: string;
  closingText: string;

  unspecified: string;
  defaultName: string;

  saturnFallback: string;
  jupiterFallback: string;
  ascendantFallback: string;

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

  profiles: Record<string, PurposeProfile>;
  saturnLessons: Record<string, string>;
  jupiterExpansion: Record<string, string>;
  ascendantDirection: Record<string, string>;
};

const LABELS: Record<
  NonFrenchLocale,
  LifePurposeLabels
> = {
  en: {
    analysis:
      "Signature Analysis",

    title:
      "Your life purpose",

    subtitle:
      "The deeper direction that gives meaning to your choices, experiences, and evolution.",

    fundamentalDirection:
      "Your fundamental direction",

    naturalMovement:
      "Your natural movement",

    fulfillmentTitle:
      "What nourishes your fulfillment",

    quote:
      "“Your purpose does not ask you to become someone else. It invites you to express more consciously what is already seeking to come alive within you.”",

    missionPillars:
      "The pillars of your purpose",

    complementaryForces:
      "A direction built through several complementary forces",

    pillarsIntro:
      "The Sun indicates what you are called to develop consciously. The Ascendant describes how this direction gradually takes shape. Jupiter reveals the experiences that expand your confidence, while Saturn shows the mastery you are invited to build over time.",

    sun:
      "Sun",

    ascendant:
      "Ascendant",

    jupiter:
      "Jupiter",

    sunText:
      "Your center of will, identity, and personal fulfillment.",

    ascendantText:
      "The way you learn to present yourself, act, and take your place.",

    jupiterText:
      "Your path of expansion, confidence, and openness.",

    takeYourPlace:
      "Your way of taking your place",

    expansionPath:
      "Your path of expansion",

    contributionTitle:
      "The contribution you can offer",

    consciousEvolution:
      "Your conscious evolution",

    potentialToDirection:
      "Transforming your potential into a lived direction",

    evolutionIntro:
      "A life purpose does not appear as a single profession or as a completely fixed destiny. It emerges through the way you choose, learn, create, move through challenges, and bring deeper coherence to your experiences.",

    masteryTitle:
      "The mastery your path asks you to develop",

    attentionPoint:
      "Your point of attention",

    slowFulfillment:
      "What can slow down your fulfillment",

    signatureKey:
      "Your Signature key",

    innerDecision:
      "The inner decision to cultivate",

    concreteProgress:
      "How to move forward concretely",

    bullet1:
      "Identify the activities that simultaneously give you energy, meaning, and the feeling of using an essential quality of your personality.",

    bullet2:
      "Observe the situations that return regularly. They often indicate a skill, a boundary, or a responsibility that your path invites you to develop.",

    bullet3:
      "Do not look for one final and definitive answer. Your purpose becomes clearer as you act, experiment, and recognize what remains deeply coherent for you.",

    guidingIntention:
      "Your guiding intention",

    closingText:
      "Your fulfillment is built when you stop separating who you are, what you learn, and what you bring to the world. The more your choices reflect your deepest values, the more your path naturally gains direction, coherence, and meaning.",

    unspecified:
      "Unspecified",

    defaultName:
      "you",

    saturnFallback:
      "Saturn shows that your fulfillment requires time, perseverance, and a more conscious relationship with your responsibilities.",

    jupiterFallback:
      "Your expansion develops through confidence, experience, and the ability to recognize the opportunities that truly correspond to your evolution.",

    ascendantFallback:
      "Your Ascendant describes the way your inner direction gradually seeks to take form in your life.",

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
          "Open the way and develop your power of initiative",
        introduction:
          "Your deeper direction invites you to move forward with courage, create your own momentum, and avoid waiting for circumstances to decide in your place. Your presence becomes especially meaningful when you dare to begin, propose, and defend what feels essential to you.",
        naturalDirection:
          "You are naturally called to experiment, act, and turn an inner impulse into a concrete decision. Your path is not only about moving quickly, but about learning to recognize the battles that truly deserve your energy.",
        fulfillment:
          "You feel fully alive when you can take initiative, face a challenge, or feel that an action depends directly on your will.",
        contribution:
          "Your contribution is to awaken courage, autonomy, and the desire to move forward in the people around you.",
        challenge:
          "Your challenge is to unite spontaneity with patience so that your strength is not exhausted in temporary reactions.",
        key:
          "Consciously choose your direction before committing all of your energy.",
      },

      Taurus: {
        title:
          "Build a stable, fruitful, and deeply aligned life",
        introduction:
          "Your deeper direction invites you to create something lasting. You are called to give concrete form to your values, protect what truly matters, and develop a more conscious relationship with security, matter, and time.",
        naturalDirection:
          "Your progress depends on your ability to build slowly without losing sight of your evolution. Your consistency is a major strength when you use it to grow a project rather than maintain a situation that has become too narrow.",
        fulfillment:
          "You feel fulfilled when your efforts produce a tangible, useful, and lasting result.",
        contribution:
          "Your contribution is to bring stability, realism, reliability, and depth to a world that is often in a hurry.",
        challenge:
          "Your challenge is to distinguish perseverance from attachment and accept that some transformations protect precisely what you are trying to build.",
        key:
          "Allow your foundations to evolve without denying the essential values that define you.",
      },

      Gemini: {
        title:
          "Connect ideas, transmit knowledge, and open new perspectives",
        introduction:
          "Your deeper direction invites you to understand, communicate, and build bridges between people, ideas, or different worlds. Your curiosity becomes a true purpose when it helps others understand what once seemed complex or inaccessible.",
        naturalDirection:
          "You are called to keep learning, but also to transform knowledge into clear messages. Your mental mobility allows you to adapt, translate, and circulate information.",
        fulfillment:
          "You feel fulfilled when you can exchange ideas, write, teach, explain, or discover new ways of thinking.",
        contribution:
          "Your contribution is to make ideas lively, accessible, and capable of creating movement.",
        challenge:
          "Your challenge is to move beyond dispersion so that your many interests gain depth and real continuity.",
        key:
          "Choose the ideas you truly want to deepen and transmit.",
      },

      Cancer: {
        title:
          "Create a space of security, memory, and belonging",
        introduction:
          "Your deeper direction invites you to understand the emotional world, protect what is vulnerable, and create bonds that provide a true sense of belonging. Your sensitivity becomes a strength when you give it conscious form.",
        naturalDirection:
          "You are called to recognize your emotional needs rather than hide them behind caring for others. Your path involves transforming your ability to feel into presence, intuition, and appropriate support.",
        fulfillment:
          "You feel fulfilled when you can care for others, transmit a memory, create a home, or offer a space where people feel understood.",
        contribution:
          "Your contribution is to remind others of the importance of roots, emotions, and inner security.",
        challenge:
          "Your challenge is not to remain trapped in the past or in relationships based only on the need to be indispensable.",
        key:
          "Protect without forgetting yourself, and welcome your emotions without allowing them to make every decision for you.",
      },

      Leo: {
        title:
          "Shine, create, and inspire through authentic expression",
        introduction:
          "Your deeper direction invites you to take your place with heart, creativity, and dignity. Your purpose is not simply to be seen, but to let your personal light circulate in a way that encourages others to recognize their own.",
        naturalDirection:
          "You are called to develop an expression that truly reflects who you are. The more you create from your center rather than seeking external validation, the more naturally inspiring your presence becomes.",
        fulfillment:
          "You feel fulfilled when you can create, lead, transmit enthusiasm, or give visible form to what lives within you.",
        contribution:
          "Your contribution is to bring warmth, confidence, generosity, and creative power.",
        challenge:
          "Your challenge is not to measure your value only through the recognition you receive.",
        key:
          "Create because it reflects who you are, not only to receive applause.",
      },

      Virgo: {
        title:
          "Improve, organize, and place your skills at the service of reality",
        introduction:
          "Your deeper direction invites you to make things clearer, more efficient, and more useful. Your observational ability becomes a true purpose when it produces concrete solutions rather than permanent dissatisfaction.",
        naturalDirection:
          "You are called to develop mastery through experience, precision, and attention to detail. Your progress also involves recognizing that usefulness does not require perfection.",
        fulfillment:
          "You feel fulfilled when your skills concretely improve a situation, a method, or someone’s daily life.",
        contribution:
          "Your contribution is to bring discernment, reliability, method, and practical sense.",
        challenge:
          "Your challenge is not to turn your analytical ability into constant criticism of yourself or others.",
        key:
          "Put your high standards at the service of realistic and compassionate improvement.",
      },

      Libra: {
        title:
          "Create greater balance, beauty, and cooperation",
        introduction:
          "Your deeper direction invites you to understand relationships, bring viewpoints closer together, and seek a form of balance that respects each person. Your ability to perceive several perspectives becomes a strength when you also dare to define your own.",
        naturalDirection:
          "You are called to support cooperation, fairness, and harmony without sacrificing your personal truth. Your path teaches you that lasting peace does not depend on avoiding disagreement.",
        fulfillment:
          "You feel fulfilled when you can unite, negotiate, beautify, or restore a fairer relationship.",
        contribution:
          "Your contribution is to remind others that relational elegance and respect can deeply transform exchanges.",
        challenge:
          "Your challenge is to make decisions without waiting for everyone involved to approve.",
        key:
          "Build harmony from a clear inner position.",
      },

      Scorpio: {
        title:
          "Transform, deepen, and reveal what needs to evolve",
        introduction:
          "Your deeper direction invites you to go beyond appearances. You are called to understand invisible movements, move through periods of transformation, and use your intensity to regenerate rather than control.",
        naturalDirection:
          "Your path develops when you honestly face what is happening beneath the surface. You naturally perceive deep issues, contradictions, and truths that others may prefer to avoid.",
        fulfillment:
          "You feel fulfilled when you can transform an ordeal, understand a complex mechanism, or support a profound evolution.",
        contribution:
          "Your contribution is to bring lucidity, emotional courage, depth, and the capacity for renewal.",
        challenge:
          "Your challenge is not to allow the fear of loss to push you into holding on, monitoring, or closing your inner world.",
        key:
          "Use your power to transform rather than to protect yourself from all vulnerability.",
      },

      Sagittarius: {
        title:
          "Explore, understand, and transmit a broader vision",
        introduction:
          "Your deeper direction invites you to broaden horizons, search for meaning, and share a vision capable of restoring momentum. Your need for freedom becomes purposeful when it leads you toward deeper understanding rather than constant escape.",
        naturalDirection:
          "You are called to learn through experience, confront your beliefs with reality, and transmit what your explorations have allowed you to understand.",
        fulfillment:
          "You feel fulfilled when you can travel, teach, discover, undertake, or defend a hopeful vision.",
        contribution:
          "Your contribution is to restore meaning, perspective, and confidence in future possibilities.",
        challenge:
          "Your challenge is not to confuse conviction with absolute certainty.",
        key:
          "Make your freedom a space for learning, responsibility, and transmission.",
      },

      Capricorn: {
        title:
          "Build something solid and gradually assume your authority",
        introduction:
          "Your deeper direction invites you to develop mastery, build for the long term, and assume a responsibility that reflects who you are. Your ambition becomes meaningful when it is based on an inner vision rather than only on the need to prove your worth.",
        naturalDirection:
          "You are called to move forward with patience, strategy, and commitment. Your path also involves recognizing that external success cannot replace the inner feeling of having built something right.",
        fulfillment:
          "You feel fulfilled when you can structure, lead, consolidate, or leave behind a lasting achievement.",
        contribution:
          "Your contribution is to bring maturity, reliability, continuity, and a sense of responsibility.",
        challenge:
          "Your challenge is not to make effort, control, or performance the only proof of your legitimacy.",
        key:
          "Build success that respects your humanity as much as your goals.",
      },

      Aquarius: {
        title:
          "Innovate, liberate, and contribute to a more collective vision",
        introduction:
          "Your deeper direction invites you to think differently, question models that have become too limiting, and participate in collective evolution. Your originality becomes fully meaningful when it becomes useful and accessible.",
        naturalDirection:
          "You are called to preserve your intellectual independence while developing your ability to collaborate. Your different perspective can open new possibilities when you accept the need to build a bridge between ideas and reality.",
        fulfillment:
          "You feel fulfilled when you can invent, modernize, unite people, or defend a cause that goes beyond your personal interest.",
        contribution:
          "Your contribution is to bring innovation, freedom of thought, vision, and openness toward the future.",
        challenge:
          "Your challenge is not to disconnect from your emotions or from others in order to preserve your autonomy.",
        key:
          "Put your difference at the service of concrete and human transformation.",
      },

      Pisces: {
        title:
          "Connect, inspire, and give sensitive form to the invisible",
        introduction:
          "Your deeper direction invites you to develop compassion, imagination, and the ability to perceive what cannot always be expressed in words. Your sensitivity becomes purposeful when it nourishes creation, presence, or genuine support.",
        naturalDirection:
          "You are called to listen to your intuition while developing boundaries clear enough that you do not absorb every emotion around you.",
        fulfillment:
          "You feel fulfilled when you can create, soothe, inspire, support, or give meaning to an inner experience.",
        contribution:
          "Your contribution is to remind others of the value of sensitivity, imagination, and compassion.",
        challenge:
          "Your challenge is not to lose yourself in the expectations, emotions, or needs of others.",
        key:
          "Give concrete form to your intuition without abandoning your own reference points.",
      },
    },

    saturnLessons: {
      Aries:
        "Saturn in Aries teaches you to develop personal authority that depends neither on haste nor confrontation. Your self-assertion becomes more powerful when it rests on a considered decision and confidence built over time.",
      Taurus:
        "Saturn in Taurus invites you to build security on inner and realistic foundations. Your evolution requires balancing caution, attachment, and adaptability.",
      Gemini:
        "Saturn in Gemini teaches you to structure your thinking, clarify your messages, and place greater value on your own intelligence. Mastery develops when you accept the need to go deeper rather than understand everything immediately.",
      Cancer:
        "Saturn in Cancer invites you to develop emotional security that does not depend entirely on your family, your past, or the role you play for others.",
      Leo:
        "Saturn in Leo teaches you to express your creativity without requiring constant validation. Your radiance becomes stronger when you continue forward even when applause is not immediate.",
      Virgo:
        "Saturn in Virgo invites you to transform high standards into competence and worry into method. Your progress accelerates when you accept that imperfect action can be more useful than endless preparation.",
      Libra:
        "Saturn in Libra teaches you to build relationships based on responsibility, reciprocity, and clear boundaries. Your balance should not depend on maintaining peace at any cost.",
      Scorpio:
        "Saturn in Scorpio invites you to become more comfortable with vulnerability, trust, and transformations you cannot fully control. Your true power develops when you stop confusing protection with emotional closure.",
      Sagittarius:
        "Saturn in Sagittarius teaches you to test your beliefs through experience. Your vision becomes more credible when it rests on deep understanding and real discipline.",
      Capricorn:
        "Saturn in Capricorn reinforces your need to build and master. Your lesson is to embrace ambition without trapping yourself in excessive responsibility or the fear of never doing enough.",
      Aquarius:
        "Saturn in Aquarius invites you to give concrete structure to your innovative ideas. Your difference becomes a true contribution when you accept the effort required to make it lasting.",
      Pisces:
        "Saturn in Pisces teaches you to give clear form to your sensitivity. Boundaries, habits, and concrete commitments can support your intuition rather than suppress it.",
    },

    jupiterExpansion: {
      Aries:
        "Your expansion comes through initiative, courage, and the ability to believe in your own decisions.",
      Taurus:
        "Your expansion comes through patience, stability, and the creation of lasting resources.",
      Gemini:
        "Your expansion comes through learning, exchange, and the circulation of ideas.",
      Cancer:
        "Your expansion comes through inner security, transmission, and the creation of nurturing bonds.",
      Leo:
        "Your expansion comes through creativity, generosity, and confident self-expression.",
      Virgo:
        "Your expansion comes through the development of useful skills and the search for practical solutions.",
      Libra:
        "Your expansion comes through alliances, cooperation, and the search for greater fairness.",
      Scorpio:
        "Your expansion comes through transformation, emotional depth, and the ability to renew your resources.",
      Sagittarius:
        "Your expansion comes through exploration, knowledge, and the transmission of a broader vision.",
      Capricorn:
        "Your expansion comes through gradually building authority, a body of work, or expertise.",
      Aquarius:
        "Your expansion comes through innovation, networks, and projects oriented toward the collective.",
      Pisces:
        "Your expansion comes through intuition, creation, and the ability to give meaning to your sensitivity.",
    },

    ascendantDirection: {
      Aries:
        "Your Aries Ascendant asks you to move forward with greater boldness, autonomy, and spontaneity.",
      Taurus:
        "Your Taurus Ascendant asks you to build your life with consistency, simplicity, and loyalty to your values.",
      Gemini:
        "Your Gemini Ascendant asks you to remain curious, flexible, and open to exchanges that renew your understanding.",
      Cancer:
        "Your Cancer Ascendant asks you to recognize your sensitivity and build emotional security that belongs to you.",
      Leo:
        "Your Leo Ascendant asks you to embrace your presence, creativity, and right to take a visible place.",
      Virgo:
        "Your Virgo Ascendant asks you to develop discernment, skills, and your ability to improve reality.",
      Libra:
        "Your Libra Ascendant asks you to learn to collaborate while remaining faithful to your own position.",
      Scorpio:
        "Your Scorpio Ascendant asks you to live with intensity, lucidity, and courage in the face of necessary transformations.",
      Sagittarius:
        "Your Sagittarius Ascendant asks you to broaden your horizons and follow a direction that carries meaning.",
      Capricorn:
        "Your Capricorn Ascendant asks you to build with patience, responsibility, and long-term vision.",
      Aquarius:
        "Your Aquarius Ascendant asks you to preserve your inner freedom and bring a different perspective.",
      Pisces:
        "Your Pisces Ascendant asks you to listen to your intuition while developing protective boundaries.",
    },
  },

  es: {
    analysis:
      "Análisis Firma",

    title:
      "Tu misión de vida",

    subtitle:
      "La dirección profunda que da sentido a tus elecciones, experiencias y evolución.",

    fundamentalDirection:
      "Tu dirección fundamental",

    naturalMovement:
      "Tu movimiento natural",

    fulfillmentTitle:
      "Lo que nutre tu realización",

    quote:
      "«Tu misión no te pide que te conviertas en otra persona. Te invita a expresar de manera más consciente lo que ya busca cobrar vida en ti.»",

    missionPillars:
      "Los pilares de tu misión",

    complementaryForces:
      "Una dirección construida por varias fuerzas complementarias",

    pillarsIntro:
      "El Sol indica lo que estás llamado a desarrollar conscientemente. El Ascendente describe cómo esta dirección toma forma progresivamente. Júpiter revela las experiencias que amplían tu confianza, mientras Saturno muestra el dominio que estás invitado a construir con el tiempo.",

    sun:
      "Sol",

    ascendant:
      "Ascendente",

    jupiter:
      "Júpiter",

    sunText:
      "Tu centro de voluntad, identidad y realización personal.",

    ascendantText:
      "La manera en que aprendes a presentarte, actuar y ocupar tu lugar.",

    jupiterText:
      "Tu vía de expansión, confianza y apertura.",

    takeYourPlace:
      "Tu manera de ocupar tu lugar",

    expansionPath:
      "Tu vía de expansión",

    contributionTitle:
      "La contribución que puedes ofrecer",

    consciousEvolution:
      "Tu evolución consciente",

    potentialToDirection:
      "Transformar tu potencial en una dirección vivida",

    evolutionIntro:
      "Una misión de vida no se manifiesta como una sola profesión ni como un destino completamente fijado. Aparece en la manera en que eliges, aprendes, creas, atraviesas desafíos y das una coherencia más profunda a tus experiencias.",

    masteryTitle:
      "El dominio que tu recorrido te pide desarrollar",

    attentionPoint:
      "Tu punto de atención",

    slowFulfillment:
      "Lo que puede ralentizar tu realización",

    signatureKey:
      "Tu clave Firma",

    innerDecision:
      "La decisión interior que debes cultivar",

    concreteProgress:
      "Cómo avanzar concretamente",

    bullet1:
      "Identifica las actividades que te aportan simultáneamente energía, sentido y la sensación de utilizar una cualidad esencial de tu personalidad.",

    bullet2:
      "Observa las situaciones que regresan regularmente. Suelen señalar una capacidad, un límite o una responsabilidad que tu recorrido te invita a desarrollar.",

    bullet3:
      "No busques una respuesta única y definitiva. Tu misión se vuelve más clara a medida que actúas, experimentas y reconoces lo que permanece profundamente coherente para ti.",

    guidingIntention:
      "Tu intención directriz",

    closingText:
      "Tu realización se construye cuando dejas de separar lo que eres, lo que aprendes y lo que aportas al mundo. Cuanto más reflejan tus elecciones tus valores profundos, más gana naturalmente tu recorrido en dirección, coherencia y significado.",

    unspecified:
      "No especificado",

    defaultName:
      "tú",

    saturnFallback:
      "Saturno muestra que tu realización requiere tiempo, perseverancia y una relación más consciente con tus responsabilidades.",

    jupiterFallback:
      "Tu expansión pasa por la confianza, la experiencia y la capacidad de reconocer las posibilidades que realmente corresponden a tu evolución.",

    ascendantFallback:
      "Tu Ascendente describe la manera en que tu dirección interior busca progresivamente tomar forma en tu vida.",

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
          "Abrir el camino y desarrollar tu poder de iniciativa",
        introduction:
          "Tu dirección profunda te invita a avanzar con valentía, crear tu propio movimiento y no esperar que las circunstancias decidan por ti. Tu presencia se vuelve especialmente significativa cuando te atreves a comenzar, proponer y defender lo que te parece esencial.",
        naturalDirection:
          "Estás llamado naturalmente a experimentar, actuar y transformar un impulso interior en una decisión concreta. Tu camino no consiste solamente en avanzar rápido, sino en aprender a reconocer las luchas que realmente merecen tu energía.",
        fulfillment:
          "Te sientes plenamente realizado cuando puedes tomar iniciativas, afrontar un desafío o sentir que una acción depende directamente de tu voluntad.",
        contribution:
          "Tu contribución consiste en despertar el valor, la autonomía y el deseo de avanzar en las personas que te rodean.",
        challenge:
          "Tu desafío es unir espontaneidad y paciencia para que tu fuerza no se agote en reacciones momentáneas.",
        key:
          "Elegir conscientemente tu dirección antes de comprometer toda tu energía.",
      },

      Taurus: {
        title:
          "Construir una vida estable, fecunda y profundamente alineada",
        introduction:
          "Tu dirección profunda te invita a crear algo duradero. Estás llamado a dar una forma concreta a tus valores, proteger lo que realmente importa y desarrollar una relación más consciente con la seguridad, la materia y el tiempo.",
        naturalDirection:
          "Tu progreso pasa por la capacidad de construir lentamente sin perder de vista tu evolución. Tu constancia constituye una gran fuerza cuando la utilizas para hacer crecer un proyecto en lugar de mantener una situación que se ha vuelto demasiado estrecha.",
        fulfillment:
          "Te realizas cuando tus esfuerzos producen un resultado tangible, útil y duradero.",
        contribution:
          "Tu contribución consiste en aportar estabilidad, realismo, fiabilidad y profundidad en un mundo que suele ir demasiado rápido.",
        challenge:
          "Tu desafío es diferenciar la perseverancia del apego y aceptar que ciertas transformaciones protegen precisamente aquello que quieres construir.",
        key:
          "Hacer evolucionar tus bases sin renunciar a los valores esenciales que te definen.",
      },

      Gemini: {
        title:
          "Conectar ideas, transmitir y abrir nuevas perspectivas",
        introduction:
          "Tu dirección profunda te invita a comprender, comunicar y crear puentes entre personas, ideas o universos diferentes. Tu curiosidad se convierte en una verdadera misión cuando permite a los demás comprender mejor lo que parecía complejo o inaccesible.",
        naturalDirection:
          "Estás llamado a aprender continuamente, pero también a transformar tus conocimientos en mensajes claros. Tu movilidad mental te permite adaptarte, traducir y hacer circular la información.",
        fulfillment:
          "Te realizas cuando puedes intercambiar, escribir, enseñar, explicar o descubrir nuevas maneras de pensar.",
        contribution:
          "Tu contribución consiste en hacer que las ideas sean vivas, accesibles y capaces de generar movimiento.",
        challenge:
          "Tu desafío es superar la dispersión para dar profundidad y verdadera continuidad a tus múltiples intereses.",
        key:
          "Elegir las ideas que realmente deseas profundizar y transmitir.",
      },

      Cancer: {
        title:
          "Crear un espacio de seguridad, memoria y pertenencia",
        introduction:
          "Tu dirección profunda te invita a comprender el mundo emocional, proteger lo vulnerable y crear vínculos que aporten un verdadero sentimiento de pertenencia. Tu sensibilidad se convierte en una fuerza cuando le das una forma consciente.",
        naturalDirection:
          "Estás llamado a reconocer tus necesidades emocionales en lugar de ocultarlas detrás de la protección de los demás. Tu camino consiste en transformar tu capacidad de sentir en presencia, intuición y apoyo justo.",
        fulfillment:
          "Te realizas cuando puedes cuidar, transmitir una memoria, crear un hogar u ofrecer un espacio donde los demás se sientan comprendidos.",
        contribution:
          "Tu contribución consiste en recordar la importancia de las raíces, las emociones y la seguridad interior.",
        challenge:
          "Tu desafío es no quedar prisionero del pasado ni de relaciones basadas únicamente en la necesidad de ser indispensable.",
        key:
          "Proteger sin olvidarte y acoger tus emociones sin entregarles todas tus decisiones.",
      },

      Leo: {
        title:
          "Brillar, crear e inspirar mediante una expresión auténtica",
        introduction:
          "Tu dirección profunda te invita a ocupar tu lugar con corazón, creatividad y dignidad. Tu misión no consiste solamente en ser visto, sino en dejar circular una luz personal capaz de animar a los demás a reconocer la suya.",
        naturalDirection:
          "Estás llamado a desarrollar una expresión que se parezca verdaderamente a ti. Cuanto más creas desde tu centro y no para obtener validación externa, más naturalmente inspiradora se vuelve tu presencia.",
        fulfillment:
          "Te realizas cuando puedes crear, dirigir, transmitir entusiasmo o dar una forma visible a lo que llevas dentro.",
        contribution:
          "Tu contribución consiste en aportar calidez, confianza, generosidad y poder creativo.",
        challenge:
          "Tu desafío es no medir tu valor únicamente por el reconocimiento que recibes.",
        key:
          "Crear porque te representa, y no solamente para recibir aplausos.",
      },

      Virgo: {
        title:
          "Mejorar, organizar y poner tus capacidades al servicio de lo real",
        introduction:
          "Tu dirección profunda te invita a hacer las cosas más claras, eficaces y útiles. Tu sentido de la observación se convierte en una verdadera misión cuando permite aportar soluciones concretas en lugar de alimentar una insatisfacción permanente.",
        naturalDirection:
          "Estás llamado a desarrollar un dominio basado en la experiencia, la precisión y la atención a los detalles. Tu progreso también consiste en reconocer que la utilidad no exige perfección.",
        fulfillment:
          "Te realizas cuando tus capacidades mejoran concretamente una situación, un método o la vida cotidiana de una persona.",
        contribution:
          "Tu contribución consiste en aportar discernimiento, fiabilidad, método y sentido práctico.",
        challenge:
          "Tu desafío es no transformar tu capacidad de análisis en una crítica constante hacia ti mismo o hacia los demás.",
        key:
          "Poner tu exigencia al servicio de una mejora realista y benevolente.",
      },

      Libra: {
        title:
          "Crear más equilibrio, belleza y cooperación",
        introduction:
          "Tu dirección profunda te invita a comprender las relaciones, acercar distintos puntos de vista y buscar una forma de equilibrio que respete a cada persona. Tu talento para percibir varias perspectivas se convierte en una fuerza cuando también te atreves a definir la tuya.",
        naturalDirection:
          "Estás llamado a favorecer la cooperación, la justicia y la armonía sin sacrificar tu verdad personal. Tu camino te enseña que la paz duradera no se basa en evitar los desacuerdos.",
        fulfillment:
          "Te realizas cuando puedes unir, negociar, embellecer o restaurar una relación más equitativa.",
        contribution:
          "Tu contribución consiste en recordar que la elegancia relacional y el respeto pueden transformar profundamente los intercambios.",
        challenge:
          "Tu desafío es tomar decisiones sin esperar la aprobación de todas las personas implicadas.",
        key:
          "Construir la armonía desde una posición interior clara.",
      },

      Scorpio: {
        title:
          "Transformar, profundizar y revelar lo que necesita evolucionar",
        introduction:
          "Tu dirección profunda te invita a ir más allá de las apariencias. Estás llamado a comprender los movimientos invisibles, atravesar períodos de transformación y utilizar tu intensidad para regenerar en lugar de controlar.",
        naturalDirection:
          "Tu camino se desarrolla cuando aceptas mirar con honestidad lo que ocurre bajo la superficie. Posees una capacidad natural para percibir los asuntos profundos, las contradicciones y las verdades que los demás a veces prefieren evitar.",
        fulfillment:
          "Te realizas cuando puedes transformar una prueba, comprender un mecanismo complejo o acompañar una evolución profunda.",
        contribution:
          "Tu contribución consiste en aportar lucidez, valentía emocional, profundidad y capacidad de renacimiento.",
        challenge:
          "Tu desafío es no dejar que el miedo a perder te empuje a retener, vigilar o cerrar tu mundo interior.",
        key:
          "Utilizar tu poder para transformar y no para protegerte de toda vulnerabilidad.",
      },

      Sagittarius: {
        title:
          "Explorar, comprender y transmitir una visión más amplia",
        introduction:
          "Tu dirección profunda te invita a ampliar horizontes, buscar sentido y compartir una visión capaz de devolver impulso. Tu necesidad de libertad se convierte en una misión cuando te lleva hacia una comprensión más profunda en lugar de una huida constante.",
        naturalDirection:
          "Estás llamado a aprender mediante la experiencia, confrontar tus convicciones con la realidad y transmitir lo que tus exploraciones te han permitido comprender.",
        fulfillment:
          "Te realizas cuando puedes viajar, enseñar, descubrir, emprender o defender una visión portadora de esperanza.",
        contribution:
          "Tu contribución consiste en devolver sentido, perspectiva y confianza en las posibilidades futuras.",
        challenge:
          "Tu desafío es no confundir convicción con certeza absoluta.",
        key:
          "Hacer de tu libertad un espacio de aprendizaje, responsabilidad y transmisión.",
      },

      Capricorn: {
        title:
          "Construir una obra sólida y asumir progresivamente tu autoridad",
        introduction:
          "Tu dirección profunda te invita a desarrollar dominio, construir a largo plazo y asumir una responsabilidad que se parezca a ti. Tu ambición se vuelve significativa cuando se apoya en una visión interior y no solamente en la necesidad de demostrar tu valor.",
        naturalDirection:
          "Estás llamado a avanzar con paciencia, estrategia y compromiso. Tu camino también consiste en reconocer que el éxito exterior no sustituye el sentimiento interior de haber construido algo justo.",
        fulfillment:
          "Te realizas cuando puedes estructurar, dirigir, consolidar o dejar una realización duradera.",
        contribution:
          "Tu contribución consiste en aportar madurez, fiabilidad, continuidad y sentido de la responsabilidad.",
        challenge:
          "Tu desafío es no convertir el esfuerzo, el control o el rendimiento en las únicas pruebas de tu legitimidad.",
        key:
          "Construir un éxito que respete tanto tu humanidad como tus objetivos.",
      },

      Aquarius: {
        title:
          "Innovar, liberar y contribuir a una visión más colectiva",
        introduction:
          "Tu dirección profunda te invita a pensar de otra manera, cuestionar modelos que se han vuelto demasiado limitantes y participar en una evolución colectiva. Tu originalidad adquiere todo su sentido cuando se vuelve útil y accesible.",
        naturalDirection:
          "Estás llamado a preservar tu independencia intelectual mientras desarrollas tu capacidad de colaborar. Tu mirada diferente puede abrir nuevas posibilidades cuando aceptas crear un puente entre la idea y la realidad.",
        fulfillment:
          "Te realizas cuando puedes inventar, modernizar, reunir o defender una causa que supera tu interés personal.",
        contribution:
          "Tu contribución consiste en aportar innovación, libertad de pensamiento, visión y apertura hacia el futuro.",
        challenge:
          "Tu desafío es no aislarte de tus emociones ni de los demás para preservar tu autonomía.",
        key:
          "Poner tu diferencia al servicio de una transformación concreta y humana.",
      },

      Pisces: {
        title:
          "Conectar, inspirar y dar una forma sensible a lo invisible",
        introduction:
          "Tu dirección profunda te invita a desarrollar la compasión, la imaginación y la capacidad de percibir lo que no siempre puede expresarse con palabras. Tu sensibilidad se convierte en una misión cuando alimenta una creación, una presencia o una ayuda verdadera.",
        naturalDirection:
          "Estás llamado a escuchar tu intuición mientras desarrollas límites suficientemente claros para no absorber todas las emociones que te rodean.",
        fulfillment:
          "Te realizas cuando puedes crear, aliviar, inspirar, acompañar o dar sentido a una experiencia interior.",
        contribution:
          "Tu contribución consiste en recordar el valor de la sensibilidad, la imaginación y la compasión.",
        challenge:
          "Tu desafío es no perderte en las expectativas, emociones o necesidades de los demás.",
        key:
          "Dar una forma concreta a tu intuición sin abandonar tus propios puntos de referencia.",
      },
    },

    saturnLessons: {
      Aries:
        "Saturno en Aries te enseña a desarrollar una autoridad personal que no dependa ni de la precipitación ni de la confrontación. Tu afirmación se vuelve más poderosa cuando se apoya en una decisión reflexionada y una confianza construida con el tiempo.",
      Taurus:
        "Saturno en Tauro te invita a construir tu seguridad sobre bases interiores y realistas. Tu evolución exige encontrar un equilibrio entre prudencia, apego y capacidad de adaptación.",
      Gemini:
        "Saturno en Géminis te enseña a estructurar tu pensamiento, precisar tus mensajes y dar más valor a tu propia inteligencia. El dominio llega cuando aceptas profundizar en lugar de querer comprenderlo todo inmediatamente.",
      Cancer:
        "Saturno en Cáncer te invita a desarrollar una seguridad emocional que no dependa completamente de tu familia, tu pasado o el papel que desempeñas para los demás.",
      Leo:
        "Saturno en Leo te enseña a expresar tu creatividad sin exigir validación constante. Tu brillo se vuelve más sólido cuando aceptas avanzar aunque los aplausos no sean inmediatos.",
      Virgo:
        "Saturno en Virgo te invita a transformar tu exigencia en competencia y tu inquietud en método. Tu progreso se acelera cuando aceptas que una acción imperfecta puede ser más útil que una preparación interminable.",
      Libra:
        "Saturno en Libra te enseña a construir relaciones basadas en responsabilidad, reciprocidad y límites claros. Tu equilibrio no debe depender de mantener la paz a cualquier precio.",
      Scorpio:
        "Saturno en Escorpio te invita a familiarizarte con la vulnerabilidad, la confianza y las transformaciones que no puedes controlar completamente. Tu verdadero poder se desarrolla cuando dejas de confundir protección con cierre.",
      Sagittarius:
        "Saturno en Sagitario te enseña a confrontar tus convicciones con la experiencia. Tu visión gana credibilidad cuando se apoya en una comprensión profunda y una disciplina real.",
      Capricorn:
        "Saturno en Capricornio refuerza tu necesidad de construir y dominar. Tu lección consiste en asumir tu ambición sin encerrarte en una responsabilidad excesiva ni en el miedo de no hacer nunca lo suficiente.",
      Aquarius:
        "Saturno en Acuario te invita a dar una estructura concreta a tus ideas innovadoras. Tu diferencia se convierte en una verdadera contribución cuando aceptas los esfuerzos necesarios para hacerla duradera.",
      Pisces:
        "Saturno en Piscis te enseña a dar una forma clara a tu sensibilidad. Los límites, hábitos y compromisos concretos pueden apoyar tu intuición en lugar de ahogarla.",
    },

    jupiterExpansion: {
      Aries:
        "Tu expansión pasa por la iniciativa, el valor y la capacidad de creer en tus propias decisiones.",
      Taurus:
        "Tu expansión pasa por la paciencia, la estabilidad y la creación de recursos duraderos.",
      Gemini:
        "Tu expansión pasa por el aprendizaje, los intercambios y la circulación de ideas.",
      Cancer:
        "Tu expansión pasa por la seguridad interior, la transmisión y la creación de vínculos nutritivos.",
      Leo:
        "Tu expansión pasa por la creatividad, la generosidad y la expresión confiada de tu personalidad.",
      Virgo:
        "Tu expansión pasa por el desarrollo de capacidades útiles y la búsqueda de soluciones concretas.",
      Libra:
        "Tu expansión pasa por las alianzas, la cooperación y la búsqueda de una mayor equidad.",
      Scorpio:
        "Tu expansión pasa por la transformación, la profundidad emocional y la capacidad de renovar tus recursos.",
      Sagittarius:
        "Tu expansión pasa por la exploración, el conocimiento y la transmisión de una visión más amplia.",
      Capricorn:
        "Tu expansión pasa por la construcción progresiva de una autoridad, una obra o una especialización.",
      Aquarius:
        "Tu expansión pasa por la innovación, las redes y los proyectos orientados hacia lo colectivo.",
      Pisces:
        "Tu expansión pasa por la intuición, la creación y la capacidad de dar sentido a tu sensibilidad.",
    },

    ascendantDirection: {
      Aries:
        "Tu Ascendente Aries te pide avanzar con mayor audacia, autonomía y espontaneidad.",
      Taurus:
        "Tu Ascendente Tauro te pide construir tu vida con constancia, sencillez y fidelidad a tus valores.",
      Gemini:
        "Tu Ascendente Géminis te pide permanecer curioso, flexible y abierto a los intercambios que renuevan tu comprensión.",
      Cancer:
        "Tu Ascendente Cáncer te pide reconocer tu sensibilidad y construir una seguridad emocional que te pertenezca.",
      Leo:
        "Tu Ascendente Leo te pide asumir tu presencia, tu creatividad y tu derecho a ocupar un lugar visible.",
      Virgo:
        "Tu Ascendente Virgo te pide desarrollar tu discernimiento, tus capacidades y tu capacidad de mejorar la realidad.",
      Libra:
        "Tu Ascendente Libra te pide aprender a colaborar sin dejar de ser fiel a tu propia posición.",
      Scorpio:
        "Tu Ascendente Escorpio te pide vivir con intensidad, lucidez y valentía frente a las transformaciones necesarias.",
      Sagittarius:
        "Tu Ascendente Sagitario te pide ampliar tus horizontes y seguir una dirección portadora de sentido.",
      Capricorn:
        "Tu Ascendente Capricornio te pide construir con paciencia, responsabilidad y visión a largo plazo.",
      Aquarius:
        "Tu Ascendente Acuario te pide preservar tu libertad interior y aportar una perspectiva diferente.",
      Pisces:
        "Tu Ascendente Piscis te pide escuchar tu intuición mientras desarrollas límites protectores.",
    },
  },

  de: {
    analysis:
      "Signatur-Analyse",

    title:
      "Ihre Lebensaufgabe",

    subtitle:
      "Die tiefere Richtung, die Ihren Entscheidungen, Erfahrungen und Ihrer Entwicklung Sinn verleiht.",

    fundamentalDirection:
      "Ihre grundlegende Richtung",

    naturalMovement:
      "Ihre natürliche Bewegung",

    fulfillmentTitle:
      "Was Ihre Entfaltung nährt",

    quote:
      "„Ihre Lebensaufgabe verlangt nicht, dass Sie ein anderer Mensch werden. Sie lädt Sie dazu ein, bewusster auszudrücken, was bereits in Ihnen lebendig werden möchte.“",

    missionPillars:
      "Die Säulen Ihrer Lebensaufgabe",

    complementaryForces:
      "Eine Richtung, die aus mehreren ergänzenden Kräften entsteht",

    pillarsIntro:
      "Die Sonne zeigt, was Sie bewusst entwickeln sollen. Der Aszendent beschreibt, wie diese Richtung allmählich Form annimmt. Jupiter zeigt die Erfahrungen, die Ihr Vertrauen erweitern, während Saturn die Meisterschaft beschreibt, die Sie mit der Zeit aufbauen sollen.",

    sun:
      "Sonne",

    ascendant:
      "Aszendent",

    jupiter:
      "Jupiter",

    sunText:
      "Ihr Zentrum von Wille, Identität und persönlicher Entfaltung.",

    ascendantText:
      "Die Art, wie Sie lernen, sich zu zeigen, zu handeln und Ihren Platz einzunehmen.",

    jupiterText:
      "Ihr Weg zu Wachstum, Vertrauen und Offenheit.",

    takeYourPlace:
      "Ihre Art, Ihren Platz einzunehmen",

    expansionPath:
      "Ihr Weg der Expansion",

    contributionTitle:
      "Der Beitrag, den Sie leisten können",

    consciousEvolution:
      "Ihre bewusste Entwicklung",

    potentialToDirection:
      "Ihr Potenzial in eine gelebte Richtung verwandeln",

    evolutionIntro:
      "Eine Lebensaufgabe zeigt sich nicht als ein einziger Beruf oder als vollständig festgelegtes Schicksal. Sie entsteht durch die Art, wie Sie wählen, lernen, erschaffen, Herausforderungen durchlaufen und Ihren Erfahrungen tiefere Kohärenz geben.",

    masteryTitle:
      "Die Meisterschaft, die Ihr Weg von Ihnen verlangt",

    attentionPoint:
      "Ihr Aufmerksamkeitspunkt",

    slowFulfillment:
      "Was Ihre Entfaltung verlangsamen kann",

    signatureKey:
      "Ihr Signatur-Schlüssel",

    innerDecision:
      "Die innere Entscheidung, die Sie entwickeln sollen",

    concreteProgress:
      "Wie Sie konkret vorankommen",

    bullet1:
      "Identifizieren Sie Tätigkeiten, die Ihnen gleichzeitig Energie, Sinn und das Gefühl geben, eine wesentliche Qualität Ihrer Persönlichkeit einzusetzen.",

    bullet2:
      "Beobachten Sie Situationen, die regelmäßig wiederkehren. Sie weisen häufig auf eine Fähigkeit, eine Grenze oder eine Verantwortung hin, die Ihr Weg von Ihnen entwickeln lässt.",

    bullet3:
      "Suchen Sie nicht nach einer einzigen endgültigen Antwort. Ihre Lebensaufgabe wird klarer, während Sie handeln, Erfahrungen sammeln und erkennen, was für Sie dauerhaft tief stimmig bleibt.",

    guidingIntention:
      "Ihre leitende Absicht",

    closingText:
      "Ihre Entfaltung entsteht, wenn Sie aufhören, das, was Sie sind, das, was Sie lernen, und das, was Sie der Welt geben, voneinander zu trennen. Je stärker Ihre Entscheidungen Ihre tiefsten Werte widerspiegeln, desto natürlicher gewinnt Ihr Weg an Richtung, Kohärenz und Bedeutung.",

    unspecified:
      "Nicht angegeben",

    defaultName:
      "Sie",

    saturnFallback:
      "Saturn zeigt, dass Ihre Entfaltung Zeit, Ausdauer und einen bewussteren Umgang mit Verantwortung verlangt.",

    jupiterFallback:
      "Ihre Expansion entsteht durch Vertrauen, Erfahrung und die Fähigkeit, Möglichkeiten zu erkennen, die wirklich zu Ihrer Entwicklung passen.",

    ascendantFallback:
      "Ihr Aszendent beschreibt, wie Ihre innere Richtung allmählich Form in Ihrem Leben annehmen möchte.",

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
          "Den Weg öffnen und Ihre Initiativekraft entwickeln",
        introduction:
          "Ihre tiefere Richtung lädt Sie ein, mutig voranzugehen, eigene Bewegung zu erzeugen und nicht darauf zu warten, dass die Umstände an Ihrer Stelle entscheiden. Ihre Präsenz wird besonders bedeutungsvoll, wenn Sie es wagen zu beginnen, Vorschläge zu machen und das zu vertreten, was Ihnen wesentlich erscheint.",
        naturalDirection:
          "Sie sind von Natur aus dazu aufgerufen, zu experimentieren, zu handeln und einen inneren Impuls in eine konkrete Entscheidung umzusetzen. Ihr Weg besteht nicht nur darin, schnell voranzugehen, sondern darin, zu erkennen, welche Kämpfe Ihre Energie wirklich verdienen.",
        fulfillment:
          "Sie fühlen sich erfüllt, wenn Sie Initiative ergreifen, eine Herausforderung annehmen oder spüren können, dass eine Handlung direkt von Ihrem Willen abhängt.",
        contribution:
          "Ihr Beitrag besteht darin, Mut, Autonomie und den Wunsch voranzugehen in anderen Menschen zu wecken.",
        challenge:
          "Ihre Herausforderung besteht darin, Spontaneität mit Geduld zu verbinden, damit Ihre Kraft sich nicht in momentanen Reaktionen erschöpft.",
        key:
          "Wählen Sie bewusst Ihre Richtung, bevor Sie Ihre gesamte Energie einsetzen.",
      },

      Taurus: {
        title:
          "Ein stabiles, fruchtbares und tief stimmiges Leben aufbauen",
        introduction:
          "Ihre tiefere Richtung lädt Sie ein, etwas Dauerhaftes zu erschaffen. Sie sollen Ihren Werten konkrete Form geben, schützen, was wirklich wichtig ist, und eine bewusstere Beziehung zu Sicherheit, Materie und Zeit entwickeln.",
        naturalDirection:
          "Ihre Entwicklung hängt davon ab, langsam aufzubauen, ohne Ihre Weiterentwicklung aus den Augen zu verlieren. Ihre Beständigkeit ist eine große Stärke, wenn Sie sie nutzen, um ein Projekt wachsen zu lassen, statt eine zu eng gewordene Situation festzuhalten.",
        fulfillment:
          "Sie fühlen sich erfüllt, wenn Ihre Anstrengungen ein greifbares, nützliches und dauerhaftes Ergebnis hervorbringen.",
        contribution:
          "Ihr Beitrag besteht darin, Stabilität, Realismus, Zuverlässigkeit und Tiefe in eine oft hektische Welt zu bringen.",
        challenge:
          "Ihre Herausforderung besteht darin, Ausdauer von Festhalten zu unterscheiden und anzunehmen, dass bestimmte Veränderungen genau das schützen können, was Sie aufbauen möchten.",
        key:
          "Lassen Sie Ihre Grundlagen wachsen, ohne die wesentlichen Werte zu verleugnen, die Sie ausmachen.",
      },

      Gemini: {
        title:
          "Ideen verbinden, Wissen weitergeben und neue Perspektiven öffnen",
        introduction:
          "Ihre tiefere Richtung lädt Sie ein, zu verstehen, zu kommunizieren und Brücken zwischen Menschen, Ideen oder verschiedenen Welten zu bauen. Ihre Neugier wird zu einer echten Aufgabe, wenn sie anderen hilft, etwas zuvor Komplexes oder Unzugängliches besser zu verstehen.",
        naturalDirection:
          "Sie sind dazu aufgerufen, ständig zu lernen und gleichzeitig Wissen in klare Botschaften zu verwandeln. Ihre geistige Beweglichkeit erlaubt Ihnen, sich anzupassen, zu übersetzen und Informationen weiterzugeben.",
        fulfillment:
          "Sie fühlen sich erfüllt, wenn Sie sich austauschen, schreiben, lehren, erklären oder neue Denkweisen entdecken können.",
        contribution:
          "Ihr Beitrag besteht darin, Ideen lebendig, zugänglich und bewegend zu machen.",
        challenge:
          "Ihre Herausforderung besteht darin, Zerstreuung zu überwinden und Ihren vielen Interessen Tiefe und echte Kontinuität zu geben.",
        key:
          "Wählen Sie die Ideen, die Sie wirklich vertiefen und weitergeben möchten.",
      },

      Cancer: {
        title:
          "Einen Raum für Sicherheit, Erinnerung und Zugehörigkeit schaffen",
        introduction:
          "Ihre tiefere Richtung lädt Sie ein, die emotionale Welt zu verstehen, Verletzliches zu schützen und Verbindungen zu schaffen, die echtes Zugehörigkeitsgefühl geben. Ihre Sensibilität wird zur Stärke, wenn Sie ihr bewusst Form geben.",
        naturalDirection:
          "Sie sind dazu aufgerufen, Ihre emotionalen Bedürfnisse anzuerkennen, statt sie hinter der Fürsorge für andere zu verstecken. Ihr Weg besteht darin, Ihre Fähigkeit zu fühlen in Präsenz, Intuition und passende Unterstützung zu verwandeln.",
        fulfillment:
          "Sie fühlen sich erfüllt, wenn Sie sich kümmern, Erinnerungen weitergeben, ein Zuhause schaffen oder einen Raum bieten können, in dem andere sich verstanden fühlen.",
        contribution:
          "Ihr Beitrag besteht darin, an die Bedeutung von Wurzeln, Emotionen und innerer Sicherheit zu erinnern.",
        challenge:
          "Ihre Herausforderung besteht darin, nicht in der Vergangenheit oder in Beziehungen gefangen zu bleiben, die nur auf dem Bedürfnis beruhen, unverzichtbar zu sein.",
        key:
          "Schützen Sie, ohne sich selbst zu vergessen, und nehmen Sie Ihre Gefühle an, ohne ihnen alle Entscheidungen zu überlassen.",
      },

      Leo: {
        title:
          "Strahlen, erschaffen und durch authentischen Ausdruck inspirieren",
        introduction:
          "Ihre tiefere Richtung lädt Sie ein, Ihren Platz mit Herz, Kreativität und Würde einzunehmen. Ihre Aufgabe besteht nicht nur darin, gesehen zu werden, sondern Ihr persönliches Licht so auszudrücken, dass es andere ermutigt, ihr eigenes zu erkennen.",
        naturalDirection:
          "Sie sind dazu aufgerufen, einen Ausdruck zu entwickeln, der Ihnen wirklich entspricht. Je mehr Sie aus Ihrem inneren Zentrum heraus erschaffen und nicht für äußere Bestätigung, desto natürlicher wird Ihre Präsenz inspirierend.",
        fulfillment:
          "Sie fühlen sich erfüllt, wenn Sie erschaffen, führen, Begeisterung vermitteln oder dem, was in Ihnen lebt, sichtbare Form geben können.",
        contribution:
          "Ihr Beitrag besteht darin, Wärme, Vertrauen, Großzügigkeit und schöpferische Kraft zu bringen.",
        challenge:
          "Ihre Herausforderung besteht darin, Ihren Wert nicht ausschließlich an der Anerkennung zu messen, die Sie erhalten.",
        key:
          "Erschaffen Sie, weil es Ihnen entspricht, und nicht nur, um Applaus zu bekommen.",
      },

      Virgo: {
        title:
          "Verbessern, organisieren und Ihre Fähigkeiten in den Dienst des Realen stellen",
        introduction:
          "Ihre tiefere Richtung lädt Sie ein, Dinge klarer, effizienter und nützlicher zu machen. Ihre Beobachtungsgabe wird zu einer echten Aufgabe, wenn daraus konkrete Lösungen entstehen statt dauerhafte Unzufriedenheit.",
        naturalDirection:
          "Sie sind dazu aufgerufen, Meisterschaft durch Erfahrung, Präzision und Aufmerksamkeit für Details zu entwickeln. Ihre Entwicklung besteht auch darin, zu erkennen, dass Nützlichkeit keine Perfektion verlangt.",
        fulfillment:
          "Sie fühlen sich erfüllt, wenn Ihre Fähigkeiten eine Situation, eine Methode oder den Alltag eines Menschen konkret verbessern.",
        contribution:
          "Ihr Beitrag besteht darin, Urteilsvermögen, Zuverlässigkeit, Methode und praktischen Sinn einzubringen.",
        challenge:
          "Ihre Herausforderung besteht darin, Ihre Analysefähigkeit nicht in permanente Kritik an sich selbst oder anderen zu verwandeln.",
        key:
          "Stellen Sie Ihre hohen Ansprüche in den Dienst realistischer und wohlwollender Verbesserung.",
      },

      Libra: {
        title:
          "Mehr Gleichgewicht, Schönheit und Zusammenarbeit schaffen",
        introduction:
          "Ihre tiefere Richtung lädt Sie ein, Beziehungen zu verstehen, unterschiedliche Perspektiven zusammenzuführen und ein Gleichgewicht zu suchen, das jeden Menschen respektiert. Ihre Fähigkeit, mehrere Sichtweisen wahrzunehmen, wird zur Stärke, wenn Sie auch Ihre eigene klar definieren.",
        naturalDirection:
          "Sie sind dazu aufgerufen, Zusammenarbeit, Gerechtigkeit und Harmonie zu fördern, ohne Ihre persönliche Wahrheit zu opfern. Ihr Weg lehrt Sie, dass dauerhafter Frieden nicht auf der Vermeidung von Meinungsverschiedenheiten beruht.",
        fulfillment:
          "Sie fühlen sich erfüllt, wenn Sie verbinden, verhandeln, verschönern oder eine gerechtere Beziehung wiederherstellen können.",
        contribution:
          "Ihr Beitrag besteht darin, daran zu erinnern, dass Beziehungsqualität und Respekt Austausch tiefgreifend verändern können.",
        challenge:
          "Ihre Herausforderung besteht darin, Entscheidungen zu treffen, ohne auf die Zustimmung aller Beteiligten zu warten.",
        key:
          "Schaffen Sie Harmonie aus einer klaren inneren Position heraus.",
      },

      Scorpio: {
        title:
          "Verwandeln, vertiefen und sichtbar machen, was sich entwickeln muss",
        introduction:
          "Ihre tiefere Richtung lädt Sie ein, hinter die Oberfläche zu schauen. Sie sind dazu aufgerufen, unsichtbare Bewegungen zu verstehen, Transformationsphasen zu durchlaufen und Ihre Intensität zur Erneuerung statt zur Kontrolle einzusetzen.",
        naturalDirection:
          "Ihr Weg entwickelt sich, wenn Sie ehrlich anschauen, was unter der Oberfläche geschieht. Sie besitzen eine natürliche Fähigkeit, tiefe Themen, Widersprüche und Wahrheiten wahrzunehmen, denen andere manchmal lieber ausweichen.",
        fulfillment:
          "Sie fühlen sich erfüllt, wenn Sie eine Prüfung verwandeln, einen komplexen Mechanismus verstehen oder eine tiefgreifende Entwicklung begleiten können.",
        contribution:
          "Ihr Beitrag besteht darin, Klarheit, emotionalen Mut, Tiefe und Erneuerungsfähigkeit einzubringen.",
        challenge:
          "Ihre Herausforderung besteht darin, nicht zuzulassen, dass Verlustangst Sie zum Festhalten, Kontrollieren oder Verschließen Ihrer inneren Welt treibt.",
        key:
          "Nutzen Sie Ihre Kraft zur Transformation und nicht zum Schutz vor jeder Verletzlichkeit.",
      },

      Sagittarius: {
        title:
          "Erforschen, verstehen und eine größere Vision weitergeben",
        introduction:
          "Ihre tiefere Richtung lädt Sie ein, Horizonte zu erweitern, Sinn zu suchen und eine Vision zu teilen, die neue Bewegung erzeugt. Ihr Freiheitsbedürfnis wird zur Aufgabe, wenn es Sie zu tieferem Verständnis führt statt zu ständiger Flucht.",
        naturalDirection:
          "Sie sind dazu aufgerufen, durch Erfahrung zu lernen, Ihre Überzeugungen an der Realität zu prüfen und weiterzugeben, was Ihre Erkundungen Sie verstehen ließen.",
        fulfillment:
          "Sie fühlen sich erfüllt, wenn Sie reisen, lehren, entdecken, unternehmen oder eine hoffnungsvolle Vision vertreten können.",
        contribution:
          "Ihr Beitrag besteht darin, Sinn, Perspektive und Vertrauen in zukünftige Möglichkeiten zurückzubringen.",
        challenge:
          "Ihre Herausforderung besteht darin, Überzeugung nicht mit absoluter Gewissheit zu verwechseln.",
        key:
          "Machen Sie Ihre Freiheit zu einem Raum für Lernen, Verantwortung und Weitergabe.",
      },

      Capricorn: {
        title:
          "Etwas Dauerhaftes aufbauen und schrittweise Ihre Autorität übernehmen",
        introduction:
          "Ihre tiefere Richtung lädt Sie ein, Meisterschaft zu entwickeln, langfristig aufzubauen und Verantwortung zu übernehmen, die Ihnen entspricht. Ihr Ehrgeiz wird sinnvoll, wenn er auf einer inneren Vision beruht und nicht nur auf dem Bedürfnis, Ihren Wert zu beweisen.",
        naturalDirection:
          "Sie sind dazu aufgerufen, mit Geduld, Strategie und Engagement voranzugehen. Ihr Weg besteht auch darin, zu erkennen, dass äußerer Erfolg nicht das innere Gefühl ersetzen kann, etwas Richtiges aufgebaut zu haben.",
        fulfillment:
          "Sie fühlen sich erfüllt, wenn Sie strukturieren, führen, festigen oder eine dauerhafte Leistung hinterlassen können.",
        contribution:
          "Ihr Beitrag besteht darin, Reife, Zuverlässigkeit, Kontinuität und Verantwortungsbewusstsein einzubringen.",
        challenge:
          "Ihre Herausforderung besteht darin, Anstrengung, Kontrolle oder Leistung nicht zu den einzigen Beweisen Ihrer Berechtigung zu machen.",
        key:
          "Bauen Sie einen Erfolg auf, der Ihre Menschlichkeit ebenso respektiert wie Ihre Ziele.",
      },

      Aquarius: {
        title:
          "Innovieren, befreien und zu einer kollektiveren Vision beitragen",
        introduction:
          "Ihre tiefere Richtung lädt Sie ein, anders zu denken, zu eng gewordene Modelle zu hinterfragen und an kollektiver Entwicklung mitzuwirken. Ihre Originalität erhält ihren vollen Sinn, wenn sie nützlich und zugänglich wird.",
        naturalDirection:
          "Sie sind dazu aufgerufen, Ihre geistige Unabhängigkeit zu bewahren und gleichzeitig Ihre Fähigkeit zur Zusammenarbeit zu entwickeln. Ihre andere Sichtweise kann neue Möglichkeiten eröffnen, wenn Sie bereit sind, eine Brücke zwischen Idee und Realität zu bauen.",
        fulfillment:
          "Sie fühlen sich erfüllt, wenn Sie erfinden, modernisieren, Menschen verbinden oder eine Sache vertreten können, die über Ihr persönliches Interesse hinausgeht.",
        contribution:
          "Ihr Beitrag besteht darin, Innovation, Gedankenfreiheit, Vision und Zukunftsoffenheit einzubringen.",
        challenge:
          "Ihre Herausforderung besteht darin, sich nicht von Ihren Gefühlen oder anderen Menschen abzuschneiden, um Ihre Autonomie zu bewahren.",
        key:
          "Stellen Sie Ihre Besonderheit in den Dienst einer konkreten und menschlichen Veränderung.",
      },

      Pisces: {
        title:
          "Verbinden, inspirieren und dem Unsichtbaren eine sensible Form geben",
        introduction:
          "Ihre tiefere Richtung lädt Sie ein, Mitgefühl, Vorstellungskraft und die Fähigkeit zu entwickeln, das wahrzunehmen, was sich nicht immer in Worte fassen lässt. Ihre Sensibilität wird zur Aufgabe, wenn sie Schöpfung, Präsenz oder echte Hilfe nährt.",
        naturalDirection:
          "Sie sind dazu aufgerufen, Ihrer Intuition zuzuhören und gleichzeitig klare Grenzen zu entwickeln, damit Sie nicht alle Emotionen Ihrer Umgebung aufnehmen.",
        fulfillment:
          "Sie fühlen sich erfüllt, wenn Sie erschaffen, lindern, inspirieren, begleiten oder einer inneren Erfahrung Sinn geben können.",
        contribution:
          "Ihr Beitrag besteht darin, an den Wert von Sensibilität, Vorstellungskraft und Mitgefühl zu erinnern.",
        challenge:
          "Ihre Herausforderung besteht darin, sich nicht in den Erwartungen, Gefühlen oder Bedürfnissen anderer zu verlieren.",
        key:
          "Geben Sie Ihrer Intuition konkrete Form, ohne Ihre eigenen Orientierungspunkte aufzugeben.",
      },
    },

    saturnLessons: {
      Aries:
        "Saturn im Widder lehrt Sie, persönliche Autorität zu entwickeln, die weder auf Hast noch auf Konfrontation beruht. Ihre Selbstbehauptung wird stärker, wenn sie auf einer durchdachten Entscheidung und langfristig aufgebautem Vertrauen basiert.",
      Taurus:
        "Saturn im Stier lädt Sie ein, Sicherheit auf inneren und realistischen Grundlagen aufzubauen. Ihre Entwicklung verlangt ein Gleichgewicht zwischen Vorsicht, Festhalten und Anpassungsfähigkeit.",
      Gemini:
        "Saturn in den Zwillingen lehrt Sie, Ihr Denken zu strukturieren, Botschaften zu präzisieren und Ihrer eigenen Intelligenz mehr Wert beizumessen. Meisterschaft entsteht, wenn Sie bereit sind, tiefer zu gehen statt alles sofort verstehen zu wollen.",
      Cancer:
        "Saturn im Krebs lädt Sie ein, emotionale Sicherheit zu entwickeln, die nicht vollständig von Familie, Vergangenheit oder Ihrer Rolle für andere abhängt.",
      Leo:
        "Saturn im Löwen lehrt Sie, Kreativität auszudrücken, ohne permanente Bestätigung zu verlangen. Ihre Ausstrahlung wird stabiler, wenn Sie weitergehen, auch wenn der Applaus nicht sofort kommt.",
      Virgo:
        "Saturn in der Jungfrau lädt Sie ein, hohe Ansprüche in Kompetenz und Sorge in Methode zu verwandeln. Ihre Entwicklung beschleunigt sich, wenn Sie akzeptieren, dass unvollkommenes Handeln nützlicher sein kann als endlose Vorbereitung.",
      Libra:
        "Saturn in der Waage lehrt Sie, Beziehungen auf Verantwortung, Gegenseitigkeit und klaren Grenzen aufzubauen. Ihr Gleichgewicht sollte nicht davon abhängen, Frieden um jeden Preis zu erhalten.",
      Scorpio:
        "Saturn im Skorpion lädt Sie ein, Verletzlichkeit, Vertrauen und nicht vollständig kontrollierbare Veränderungen anzunehmen. Ihre wahre Kraft wächst, wenn Sie aufhören, Schutz mit Verschlossenheit zu verwechseln.",
      Sagittarius:
        "Saturn im Schützen lehrt Sie, Ihre Überzeugungen mit Erfahrung zu konfrontieren. Ihre Vision gewinnt an Glaubwürdigkeit, wenn sie auf tiefem Verständnis und echter Disziplin beruht.",
      Capricorn:
        "Saturn im Steinbock verstärkt Ihr Bedürfnis nach Aufbau und Meisterschaft. Ihre Lektion besteht darin, Ehrgeiz anzunehmen, ohne sich in übermäßiger Verantwortung oder der Angst zu verfangen, niemals genug zu tun.",
      Aquarius:
        "Saturn im Wassermann lädt Sie ein, Ihren innovativen Ideen konkrete Struktur zu geben. Ihre Besonderheit wird zu einem echten Beitrag, wenn Sie die nötige Arbeit akzeptieren, um sie dauerhaft zu machen.",
      Pisces:
        "Saturn in den Fischen lehrt Sie, Ihrer Sensibilität klare Form zu geben. Grenzen, Gewohnheiten und konkrete Verpflichtungen können Ihre Intuition unterstützen statt sie zu unterdrücken.",
    },

    jupiterExpansion: {
      Aries:
        "Ihre Expansion entsteht durch Initiative, Mut und Vertrauen in Ihre eigenen Entscheidungen.",
      Taurus:
        "Ihre Expansion entsteht durch Geduld, Stabilität und den Aufbau dauerhafter Ressourcen.",
      Gemini:
        "Ihre Expansion entsteht durch Lernen, Austausch und die Weitergabe von Ideen.",
      Cancer:
        "Ihre Expansion entsteht durch innere Sicherheit, Weitergabe und nährende Verbindungen.",
      Leo:
        "Ihre Expansion entsteht durch Kreativität, Großzügigkeit und selbstbewussten persönlichen Ausdruck.",
      Virgo:
        "Ihre Expansion entsteht durch die Entwicklung nützlicher Fähigkeiten und konkrete Lösungen.",
      Libra:
        "Ihre Expansion entsteht durch Allianzen, Zusammenarbeit und das Streben nach mehr Gerechtigkeit.",
      Scorpio:
        "Ihre Expansion entsteht durch Transformation, emotionale Tiefe und die Fähigkeit, Ressourcen zu erneuern.",
      Sagittarius:
        "Ihre Expansion entsteht durch Erkundung, Wissen und die Weitergabe einer größeren Vision.",
      Capricorn:
        "Ihre Expansion entsteht durch den schrittweisen Aufbau von Autorität, einem Werk oder Expertise.",
      Aquarius:
        "Ihre Expansion entsteht durch Innovation, Netzwerke und kollektiv ausgerichtete Projekte.",
      Pisces:
        "Ihre Expansion entsteht durch Intuition, Schöpfung und die Fähigkeit, Ihrer Sensibilität Sinn zu geben.",
    },

    ascendantDirection: {
      Aries:
        "Ihr Widder-Aszendent fordert Sie auf, mit mehr Mut, Autonomie und Spontaneität voranzugehen.",
      Taurus:
        "Ihr Stier-Aszendent fordert Sie auf, Ihr Leben mit Beständigkeit, Einfachheit und Treue zu Ihren Werten aufzubauen.",
      Gemini:
        "Ihr Zwillinge-Aszendent fordert Sie auf, neugierig, beweglich und offen für Austausch zu bleiben, der Ihr Verständnis erneuert.",
      Cancer:
        "Ihr Krebs-Aszendent fordert Sie auf, Ihre Sensibilität anzuerkennen und emotionale Sicherheit aufzubauen, die Ihnen selbst gehört.",
      Leo:
        "Ihr Löwe-Aszendent fordert Sie auf, Ihre Präsenz, Kreativität und Ihr Recht auf einen sichtbaren Platz anzunehmen.",
      Virgo:
        "Ihr Jungfrau-Aszendent fordert Sie auf, Urteilsvermögen, Fähigkeiten und Ihre Fähigkeit zur Verbesserung des Realen zu entwickeln.",
      Libra:
        "Ihr Waage-Aszendent fordert Sie auf, Zusammenarbeit zu lernen und gleichzeitig Ihrer eigenen Position treu zu bleiben.",
      Scorpio:
        "Ihr Skorpion-Aszendent fordert Sie auf, notwendigen Veränderungen mit Intensität, Klarheit und Mut zu begegnen.",
      Sagittarius:
        "Ihr Schütze-Aszendent fordert Sie auf, Ihren Horizont zu erweitern und einer sinnvollen Richtung zu folgen.",
      Capricorn:
        "Ihr Steinbock-Aszendent fordert Sie auf, mit Geduld, Verantwortung und langfristiger Vision aufzubauen.",
      Aquarius:
        "Ihr Wassermann-Aszendent fordert Sie auf, Ihre innere Freiheit zu bewahren und eine andere Perspektive einzubringen.",
      Pisces:
        "Ihr Fische-Aszendent fordert Sie auf, Ihrer Intuition zuzuhören und gleichzeitig schützende Grenzen zu entwickeln.",
    },
  },

  it: {
    analysis:
      "Analisi Firma",

    title:
      "La tua missione di vita",

    subtitle:
      "La direzione profonda che dà significato alle tue scelte, alle tue esperienze e alla tua evoluzione.",

    fundamentalDirection:
      "La tua direzione fondamentale",

    naturalMovement:
      "Il tuo movimento naturale",

    fulfillmentTitle:
      "Ciò che nutre la tua realizzazione",

    quote:
      "«La tua missione non ti chiede di diventare un’altra persona. Ti invita a esprimere con maggiore consapevolezza ciò che sta già cercando di prendere vita dentro di te.»",

    missionPillars:
      "I pilastri della tua missione",

    complementaryForces:
      "Una direzione costruita da diverse forze complementari",

    pillarsIntro:
      "Il Sole indica ciò che sei chiamato a sviluppare consapevolmente. L’Ascendente descrive il modo in cui questa direzione prende progressivamente forma. Giove rivela le esperienze che ampliano la tua fiducia, mentre Saturno mostra la padronanza che sei invitato a costruire nel tempo.",

    sun:
      "Sole",

    ascendant:
      "Ascendente",

    jupiter:
      "Giove",

    sunText:
      "Il tuo centro di volontà, identità e realizzazione personale.",

    ascendantText:
      "Il modo in cui impari a presentarti, agire e prendere il tuo posto.",

    jupiterText:
      "La tua via di espansione, fiducia e apertura.",

    takeYourPlace:
      "Il tuo modo di prendere il tuo posto",

    expansionPath:
      "La tua via di espansione",

    contributionTitle:
      "Il contributo che puoi offrire",

    consciousEvolution:
      "La tua evoluzione consapevole",

    potentialToDirection:
      "Trasformare il tuo potenziale in una direzione vissuta",

    evolutionIntro:
      "Una missione di vita non si manifesta come una sola professione né come un destino completamente fissato. Appare nel modo in cui scegli, impari, crei, attraversi le sfide e dai una coerenza più profonda alle tue esperienze.",

    masteryTitle:
      "La padronanza che il tuo percorso ti chiede",

    attentionPoint:
      "Il tuo punto di attenzione",

    slowFulfillment:
      "Ciò che può rallentare la tua realizzazione",

    signatureKey:
      "La tua chiave Firma",

    innerDecision:
      "La decisione interiore da coltivare",

    concreteProgress:
      "Come avanzare concretamente",

    bullet1:
      "Identifica le attività che ti danno contemporaneamente energia, significato e la sensazione di utilizzare una qualità essenziale della tua personalità.",

    bullet2:
      "Osserva le situazioni che ritornano regolarmente. Spesso indicano una competenza, un limite o una responsabilità che il tuo percorso ti invita a sviluppare.",

    bullet3:
      "Non cercare una risposta unica e definitiva. La tua missione si definisce man mano che agisci, sperimenti e riconosci ciò che rimane profondamente coerente per te.",

    guidingIntention:
      "La tua intenzione guida",

    closingText:
      "La tua realizzazione si costruisce quando smetti di separare ciò che sei, ciò che impari e ciò che porti nel mondo. Più le tue scelte riflettono i tuoi valori profondi, più il tuo percorso acquista naturalmente direzione, coerenza e significato.",

    unspecified:
      "Non specificato",

    defaultName:
      "tu",

    saturnFallback:
      "Saturno mostra che la tua realizzazione richiede tempo, perseveranza e un rapporto più consapevole con le tue responsabilità.",

    jupiterFallback:
      "La tua espansione passa attraverso la fiducia, l’esperienza e la capacità di riconoscere le possibilità che corrispondono realmente alla tua evoluzione.",

    ascendantFallback:
      "Il tuo Ascendente descrive il modo in cui la tua direzione interiore cerca progressivamente di prendere forma nella tua vita.",

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
          "Aprire la strada e sviluppare il tuo potere d’iniziativa",
        introduction:
          "La tua direzione profonda ti invita ad avanzare con coraggio, creare il tuo movimento e non aspettare che siano le circostanze a decidere al tuo posto. La tua presenza diventa particolarmente significativa quando osi iniziare, proporre e difendere ciò che senti essenziale.",
        naturalDirection:
          "Sei naturalmente chiamato a sperimentare, agire e trasformare un impulso interiore in una decisione concreta. Il tuo cammino non consiste soltanto nell’andare veloce, ma nell’imparare a riconoscere le battaglie che meritano davvero la tua energia.",
        fulfillment:
          "Ti senti pienamente realizzato quando puoi prendere iniziative, affrontare una sfida o sentire che un’azione dipende direttamente dalla tua volontà.",
        contribution:
          "Il tuo contributo consiste nel risvegliare coraggio, autonomia e desiderio di avanzare nelle persone che ti circondano.",
        challenge:
          "La tua sfida è unire spontaneità e pazienza affinché la tua forza non si esaurisca in reazioni momentanee.",
        key:
          "Scegli consapevolmente la tua direzione prima di impegnare tutta la tua energia.",
      },

      Taurus: {
        title:
          "Costruire una vita stabile, feconda e profondamente allineata",
        introduction:
          "La tua direzione profonda ti invita a creare qualcosa di duraturo. Sei chiamato a dare una forma concreta ai tuoi valori, proteggere ciò che conta davvero e sviluppare un rapporto più consapevole con sicurezza, materia e tempo.",
        naturalDirection:
          "La tua crescita passa dalla capacità di costruire lentamente senza perdere di vista la tua evoluzione. La tua costanza è una grande forza quando la utilizzi per far crescere un progetto invece di mantenere una situazione diventata troppo stretta.",
        fulfillment:
          "Ti realizzi quando i tuoi sforzi producono un risultato tangibile, utile e duraturo.",
        contribution:
          "Il tuo contributo consiste nel portare stabilità, realismo, affidabilità e profondità in un mondo spesso troppo veloce.",
        challenge:
          "La tua sfida è distinguere la perseveranza dall’attaccamento e accettare che alcune trasformazioni proteggono proprio ciò che vuoi costruire.",
        key:
          "Fai evolvere le tue fondamenta senza rinnegare i valori essenziali che ti definiscono.",
      },

      Gemini: {
        title:
          "Collegare le idee, trasmettere e aprire nuove prospettive",
        introduction:
          "La tua direzione profonda ti invita a comprendere, comunicare e creare ponti tra persone, idee o mondi diversi. La tua curiosità diventa una vera missione quando permette agli altri di comprendere meglio ciò che sembrava complesso o inaccessibile.",
        naturalDirection:
          "Sei chiamato a imparare continuamente, ma anche a trasformare le conoscenze in messaggi chiari. La tua mobilità mentale ti permette di adattarti, tradurre e far circolare le informazioni.",
        fulfillment:
          "Ti realizzi quando puoi scambiare, scrivere, insegnare, spiegare o scoprire nuovi modi di pensare.",
        contribution:
          "Il tuo contributo consiste nel rendere le idee vive, accessibili e capaci di creare movimento.",
        challenge:
          "La tua sfida è superare la dispersione per dare profondità e vera continuità ai tuoi molteplici interessi.",
        key:
          "Scegli le idee che desideri davvero approfondire e trasmettere.",
      },

      Cancer: {
        title:
          "Creare uno spazio di sicurezza, memoria e appartenenza",
        introduction:
          "La tua direzione profonda ti invita a comprendere il mondo emotivo, proteggere ciò che è vulnerabile e creare legami capaci di dare un vero senso di appartenenza. La tua sensibilità diventa una forza quando le dai una forma consapevole.",
        naturalDirection:
          "Sei chiamato a riconoscere i tuoi bisogni emotivi invece di nasconderli dietro la protezione degli altri. Il tuo cammino consiste nel trasformare la capacità di sentire in presenza, intuizione e sostegno equilibrato.",
        fulfillment:
          "Ti realizzi quando puoi prenderti cura, trasmettere una memoria, creare una casa o offrire uno spazio nel quale gli altri si sentono compresi.",
        contribution:
          "Il tuo contributo consiste nel ricordare l’importanza delle radici, delle emozioni e della sicurezza interiore.",
        challenge:
          "La tua sfida è non rimanere prigioniero del passato o di relazioni fondate soltanto sul bisogno di essere indispensabile.",
        key:
          "Proteggi senza dimenticarti e accogli le tue emozioni senza affidare loro tutte le tue decisioni.",
      },

      Leo: {
        title:
          "Risplendere, creare e ispirare attraverso un’espressione autentica",
        introduction:
          "La tua direzione profonda ti invita a prendere il tuo posto con cuore, creatività e dignità. La tua missione non consiste soltanto nell’essere visto, ma nel lasciare fluire una luce personale capace di incoraggiare gli altri a riconoscere la propria.",
        naturalDirection:
          "Sei chiamato a sviluppare un’espressione che ti rappresenti davvero. Più crei dal tuo centro invece che per ottenere una convalida esterna, più la tua presenza diventa naturalmente ispirante.",
        fulfillment:
          "Ti realizzi quando puoi creare, guidare, trasmettere entusiasmo o dare forma visibile a ciò che vive dentro di te.",
        contribution:
          "Il tuo contributo consiste nel portare calore, fiducia, generosità e potere creativo.",
        challenge:
          "La tua sfida è non misurare il tuo valore soltanto attraverso il riconoscimento che ricevi.",
        key:
          "Crea perché ti rappresenta, non soltanto per essere applaudito.",
      },

      Virgo: {
        title:
          "Migliorare, organizzare e mettere le tue competenze al servizio della realtà",
        introduction:
          "La tua direzione profonda ti invita a rendere le cose più chiare, efficaci e utili. Il tuo senso dell’osservazione diventa una vera missione quando porta soluzioni concrete invece di alimentare un’insoddisfazione permanente.",
        naturalDirection:
          "Sei chiamato a sviluppare padronanza attraverso esperienza, precisione e attenzione ai dettagli. La tua crescita consiste anche nel riconoscere che l’utilità non richiede perfezione.",
        fulfillment:
          "Ti realizzi quando le tue competenze migliorano concretamente una situazione, un metodo o la vita quotidiana di qualcuno.",
        contribution:
          "Il tuo contributo consiste nel portare discernimento, affidabilità, metodo e senso pratico.",
        challenge:
          "La tua sfida è non trasformare la tua capacità di analisi in una critica costante verso te stesso o gli altri.",
        key:
          "Metti la tua esigenza al servizio di un miglioramento realistico e benevolo.",
      },

      Libra: {
        title:
          "Creare più equilibrio, bellezza e cooperazione",
        introduction:
          "La tua direzione profonda ti invita a comprendere le relazioni, avvicinare punti di vista diversi e cercare una forma di equilibrio che rispetti ogni persona. Il tuo talento nel percepire più prospettive diventa una forza quando osi anche definire la tua.",
        naturalDirection:
          "Sei chiamato a favorire cooperazione, giustizia e armonia senza sacrificare la tua verità personale. Il tuo cammino ti insegna che la pace duratura non dipende dall’evitare i disaccordi.",
        fulfillment:
          "Ti realizzi quando puoi riunire, negoziare, abbellire o ristabilire una relazione più equa.",
        contribution:
          "Il tuo contributo consiste nel ricordare che l’eleganza relazionale e il rispetto possono trasformare profondamente gli scambi.",
        challenge:
          "La tua sfida è prendere decisioni senza aspettare l’approvazione di tutte le persone coinvolte.",
        key:
          "Costruisci l’armonia a partire da una posizione interiore chiara.",
      },

      Scorpio: {
        title:
          "Trasformare, approfondire e rivelare ciò che deve evolvere",
        introduction:
          "La tua direzione profonda ti invita ad andare oltre le apparenze. Sei chiamato a comprendere i movimenti invisibili, attraversare periodi di trasformazione e utilizzare la tua intensità per rigenerare invece che controllare.",
        naturalDirection:
          "Il tuo cammino si sviluppa quando accetti di osservare con onestà ciò che accade sotto la superficie. Possiedi una capacità naturale di percepire questioni profonde, contraddizioni e verità che altri preferiscono a volte evitare.",
        fulfillment:
          "Ti realizzi quando puoi trasformare una prova, comprendere un meccanismo complesso o accompagnare un’evoluzione profonda.",
        contribution:
          "Il tuo contributo consiste nel portare lucidità, coraggio emotivo, profondità e capacità di rinascita.",
        challenge:
          "La tua sfida è non lasciare che la paura di perdere ti spinga a trattenere, controllare o chiudere il tuo mondo interiore.",
        key:
          "Utilizza il tuo potere per trasformare e non per proteggerti da ogni vulnerabilità.",
      },

      Sagittarius: {
        title:
          "Esplorare, comprendere e trasmettere una visione più ampia",
        introduction:
          "La tua direzione profonda ti invita ad ampliare gli orizzonti, cercare significato e condividere una visione capace di restituire slancio. Il tuo bisogno di libertà diventa una missione quando ti conduce verso una comprensione più profonda invece che verso una fuga costante.",
        naturalDirection:
          "Sei chiamato a imparare attraverso l’esperienza, confrontare le tue convinzioni con la realtà e trasmettere ciò che le tue esplorazioni ti hanno permesso di comprendere.",
        fulfillment:
          "Ti realizzi quando puoi viaggiare, insegnare, scoprire, intraprendere o difendere una visione portatrice di speranza.",
        contribution:
          "Il tuo contributo consiste nel restituire significato, prospettiva e fiducia nelle possibilità future.",
        challenge:
          "La tua sfida è non confondere convinzione con certezza assoluta.",
        key:
          "Fai della tua libertà uno spazio di apprendimento, responsabilità e trasmissione.",
      },

      Capricorn: {
        title:
          "Costruire un’opera solida e assumere progressivamente la tua autorità",
        introduction:
          "La tua direzione profonda ti invita a sviluppare padronanza, costruire nel lungo termine e assumere una responsabilità che ti rappresenti. La tua ambizione diventa significativa quando si basa su una visione interiore invece che soltanto sul bisogno di dimostrare il tuo valore.",
        naturalDirection:
          "Sei chiamato ad avanzare con pazienza, strategia e impegno. Il tuo cammino consiste anche nel riconoscere che il successo esteriore non sostituisce la sensazione interiore di aver costruito qualcosa di giusto.",
        fulfillment:
          "Ti realizzi quando puoi strutturare, dirigere, consolidare o lasciare una realizzazione duratura.",
        contribution:
          "Il tuo contributo consiste nel portare maturità, affidabilità, continuità e senso di responsabilità.",
        challenge:
          "La tua sfida è non fare dello sforzo, del controllo o della performance le sole prove della tua legittimità.",
        key:
          "Costruisci un successo che rispetti tanto la tua umanità quanto i tuoi obiettivi.",
      },

      Aquarius: {
        title:
          "Innovare, liberare e contribuire a una visione più collettiva",
        introduction:
          "La tua direzione profonda ti invita a pensare diversamente, mettere in discussione modelli diventati troppo limitanti e partecipare a un’evoluzione collettiva. La tua originalità acquista pieno significato quando diventa utile e accessibile.",
        naturalDirection:
          "Sei chiamato a preservare la tua indipendenza intellettuale sviluppando allo stesso tempo la capacità di collaborare. Il tuo sguardo diverso può aprire nuove possibilità quando accetti di creare un ponte tra idea e realtà.",
        fulfillment:
          "Ti realizzi quando puoi inventare, modernizzare, riunire o difendere una causa che supera il tuo interesse personale.",
        contribution:
          "Il tuo contributo consiste nel portare innovazione, libertà di pensiero, visione e apertura verso il futuro.",
        challenge:
          "La tua sfida è non isolarti dalle tue emozioni o dagli altri per preservare la tua autonomia.",
        key:
          "Metti la tua differenza al servizio di una trasformazione concreta e umana.",
      },

      Pisces: {
        title:
          "Collegare, ispirare e dare una forma sensibile all’invisibile",
        introduction:
          "La tua direzione profonda ti invita a sviluppare compassione, immaginazione e la capacità di percepire ciò che non sempre può essere espresso con parole. La tua sensibilità diventa una missione quando alimenta una creazione, una presenza o un aiuto autentico.",
        naturalDirection:
          "Sei chiamato ad ascoltare la tua intuizione sviluppando al tempo stesso limiti sufficientemente chiari da non assorbire tutte le emozioni che ti circondano.",
        fulfillment:
          "Ti realizzi quando puoi creare, alleviare, ispirare, accompagnare o dare significato a un’esperienza interiore.",
        contribution:
          "Il tuo contributo consiste nel ricordare il valore della sensibilità, dell’immaginazione e della compassione.",
        challenge:
          "La tua sfida è non perderti nelle aspettative, nelle emozioni o nei bisogni degli altri.",
        key:
          "Dai una forma concreta alla tua intuizione senza abbandonare i tuoi punti di riferimento.",
      },
    },

    saturnLessons: {
      Aries:
        "Saturno in Ariete ti insegna a sviluppare un’autorità personale che non dipenda né dalla precipitazione né dal confronto. La tua affermazione diventa più potente quando si basa su una decisione ponderata e su una fiducia costruita nel tempo.",
      Taurus:
        "Saturno in Toro ti invita a costruire la tua sicurezza su fondamenta interiori e realistiche. La tua evoluzione richiede equilibrio tra prudenza, attaccamento e capacità di adattamento.",
      Gemini:
        "Saturno in Gemelli ti insegna a strutturare il pensiero, precisare i messaggi e dare maggiore valore alla tua intelligenza. La padronanza arriva quando accetti di approfondire invece di voler comprendere tutto immediatamente.",
      Cancer:
        "Saturno in Cancro ti invita a sviluppare una sicurezza emotiva che non dipenda completamente dalla famiglia, dal passato o dal ruolo che svolgi per gli altri.",
      Leo:
        "Saturno in Leone ti insegna a esprimere la creatività senza pretendere una validazione costante. Il tuo splendore diventa più solido quando accetti di avanzare anche quando gli applausi non arrivano subito.",
      Virgo:
        "Saturno in Vergine ti invita a trasformare l’esigenza in competenza e la preoccupazione in metodo. La tua crescita accelera quando accetti che un’azione imperfetta possa essere più utile di una preparazione infinita.",
      Libra:
        "Saturno in Bilancia ti insegna a costruire relazioni fondate su responsabilità, reciprocità e limiti chiari. Il tuo equilibrio non deve dipendere dal mantenimento della pace a qualsiasi costo.",
      Scorpio:
        "Saturno in Scorpione ti invita ad accogliere vulnerabilità, fiducia e trasformazioni che non puoi controllare completamente. Il tuo vero potere si sviluppa quando smetti di confondere protezione e chiusura.",
      Sagittarius:
        "Saturno in Sagittario ti insegna a confrontare le tue convinzioni con l’esperienza. La tua visione acquista credibilità quando si basa su una comprensione profonda e una disciplina reale.",
      Capricorn:
        "Saturno in Capricorno rafforza il tuo bisogno di costruire e padroneggiare. La tua lezione consiste nell’assumere l’ambizione senza rinchiuderti in una responsabilità eccessiva o nella paura di non fare mai abbastanza.",
      Aquarius:
        "Saturno in Acquario ti invita a dare una struttura concreta alle tue idee innovative. La tua differenza diventa un vero contributo quando accetti gli sforzi necessari per renderla duratura.",
      Pisces:
        "Saturno in Pesci ti insegna a dare una forma chiara alla tua sensibilità. Limiti, abitudini e impegni concreti possono sostenere la tua intuizione invece di soffocarla.",
    },

    jupiterExpansion: {
      Aries:
        "La tua espansione passa attraverso iniziativa, coraggio e capacità di credere nelle tue decisioni.",
      Taurus:
        "La tua espansione passa attraverso pazienza, stabilità e creazione di risorse durature.",
      Gemini:
        "La tua espansione passa attraverso apprendimento, scambi e circolazione delle idee.",
      Cancer:
        "La tua espansione passa attraverso sicurezza interiore, trasmissione e creazione di legami nutrienti.",
      Leo:
        "La tua espansione passa attraverso creatività, generosità ed espressione sicura della tua personalità.",
      Virgo:
        "La tua espansione passa attraverso lo sviluppo di competenze utili e la ricerca di soluzioni concrete.",
      Libra:
        "La tua espansione passa attraverso alleanze, cooperazione e ricerca di maggiore equità.",
      Scorpio:
        "La tua espansione passa attraverso trasformazione, profondità emotiva e capacità di rinnovare le tue risorse.",
      Sagittarius:
        "La tua espansione passa attraverso esplorazione, conoscenza e trasmissione di una visione più ampia.",
      Capricorn:
        "La tua espansione passa attraverso la costruzione progressiva di autorità, un’opera o una competenza.",
      Aquarius:
        "La tua espansione passa attraverso innovazione, reti e progetti orientati al collettivo.",
      Pisces:
        "La tua espansione passa attraverso intuizione, creazione e capacità di dare significato alla tua sensibilità.",
    },

    ascendantDirection: {
      Aries:
        "Il tuo Ascendente Ariete ti chiede di avanzare con maggiore audacia, autonomia e spontaneità.",
      Taurus:
        "Il tuo Ascendente Toro ti chiede di costruire la tua vita con costanza, semplicità e fedeltà ai tuoi valori.",
      Gemini:
        "Il tuo Ascendente Gemelli ti chiede di rimanere curioso, mobile e aperto agli scambi che rinnovano la tua comprensione.",
      Cancer:
        "Il tuo Ascendente Cancro ti chiede di riconoscere la tua sensibilità e costruire una sicurezza emotiva che ti appartenga.",
      Leo:
        "Il tuo Ascendente Leone ti chiede di assumere la tua presenza, creatività e il diritto di occupare un posto visibile.",
      Virgo:
        "Il tuo Ascendente Vergine ti chiede di sviluppare discernimento, competenze e capacità di migliorare la realtà.",
      Libra:
        "Il tuo Ascendente Bilancia ti chiede di imparare a collaborare rimanendo fedele alla tua posizione.",
      Scorpio:
        "Il tuo Ascendente Scorpione ti chiede di vivere con intensità, lucidità e coraggio davanti alle trasformazioni necessarie.",
      Sagittarius:
        "Il tuo Ascendente Sagittario ti chiede di ampliare i tuoi orizzonti e seguire una direzione ricca di significato.",
      Capricorn:
        "Il tuo Ascendente Capricorno ti chiede di costruire con pazienza, responsabilità e visione a lungo termine.",
      Aquarius:
        "Il tuo Ascendente Acquario ti chiede di preservare la tua libertà interiore e portare una prospettiva diversa.",
      Pisces:
        "Il tuo Ascendente Pesci ti chiede di ascoltare la tua intuizione sviluppando allo stesso tempo limiti protettivi.",
    },
  },

  pt: {
    analysis:
      "Análise Assinatura",

    title:
      "Sua missão de vida",

    subtitle:
      "A direção profunda que dá sentido às suas escolhas, experiências e evolução.",

    fundamentalDirection:
      "Sua direção fundamental",

    naturalMovement:
      "Seu movimento natural",

    fulfillmentTitle:
      "O que nutre sua realização",

    quote:
      "“Sua missão não pede que você se torne outra pessoa. Ela convida você a expressar com mais consciência aquilo que já procura ganhar vida dentro de você.”",

    missionPillars:
      "Os pilares da sua missão",

    complementaryForces:
      "Uma direção construída por várias forças complementares",

    pillarsIntro:
      "O Sol indica aquilo que você é chamado a desenvolver conscientemente. O Ascendente descreve como essa direção ganha forma progressivamente. Júpiter revela as experiências que ampliam sua confiança, enquanto Saturno mostra o domínio que você é convidado a construir com o tempo.",

    sun:
      "Sol",

    ascendant:
      "Ascendente",

    jupiter:
      "Júpiter",

    sunText:
      "Seu centro de vontade, identidade e realização pessoal.",

    ascendantText:
      "A maneira como você aprende a se apresentar, agir e ocupar seu lugar.",

    jupiterText:
      "Seu caminho de expansão, confiança e abertura.",

    takeYourPlace:
      "Sua maneira de ocupar seu lugar",

    expansionPath:
      "Seu caminho de expansão",

    contributionTitle:
      "A contribuição que você pode oferecer",

    consciousEvolution:
      "Sua evolução consciente",

    potentialToDirection:
      "Transformar seu potencial em uma direção vivida",

    evolutionIntro:
      "Uma missão de vida não se manifesta como uma única profissão nem como um destino completamente fixado. Ela aparece na maneira como você escolhe, aprende, cria, atravessa desafios e dá uma coerência mais profunda às suas experiências.",

    masteryTitle:
      "O domínio que seu caminho pede que você desenvolva",

    attentionPoint:
      "Seu ponto de atenção",

    slowFulfillment:
      "O que pode desacelerar sua realização",

    signatureKey:
      "Sua chave Assinatura",

    innerDecision:
      "A decisão interior a cultivar",

    concreteProgress:
      "Como avançar concretamente",

    bullet1:
      "Identifique as atividades que lhe dão ao mesmo tempo energia, sentido e a sensação de utilizar uma qualidade essencial da sua personalidade.",

    bullet2:
      "Observe as situações que retornam regularmente. Elas frequentemente indicam uma competência, um limite ou uma responsabilidade que seu caminho convida você a desenvolver.",

    bullet3:
      "Não procure uma resposta única e definitiva. Sua missão se torna mais clara à medida que você age, experimenta e reconhece aquilo que permanece profundamente coerente para você.",

    guidingIntention:
      "Sua intenção orientadora",

    closingText:
      "Sua realização se constrói quando você deixa de separar aquilo que é, aquilo que aprende e aquilo que oferece ao mundo. Quanto mais suas escolhas refletem seus valores profundos, mais seu caminho ganha naturalmente direção, coerência e significado.",

    unspecified:
      "Não especificado",

    defaultName:
      "você",

    saturnFallback:
      "Saturno mostra que sua realização exige tempo, perseverança e uma relação mais consciente com suas responsabilidades.",

    jupiterFallback:
      "Sua expansão passa pela confiança, pela experiência e pela capacidade de reconhecer as possibilidades que realmente correspondem à sua evolução.",

    ascendantFallback:
      "Seu Ascendente descreve a maneira como sua direção interior procura progressivamente ganhar forma em sua vida.",

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
          "Abrir o caminho e desenvolver seu poder de iniciativa",
        introduction:
          "Sua direção profunda convida você a avançar com coragem, criar seu próprio movimento e não esperar que as circunstâncias decidam por você. Sua presença se torna especialmente significativa quando você ousa começar, propor e defender aquilo que considera essencial.",
        naturalDirection:
          "Você é naturalmente chamado a experimentar, agir e transformar um impulso interior em uma decisão concreta. Seu caminho não consiste apenas em avançar rapidamente, mas em aprender a reconhecer as batalhas que realmente merecem sua energia.",
        fulfillment:
          "Você se sente plenamente realizado quando pode tomar iniciativas, enfrentar um desafio ou sentir que uma ação depende diretamente da sua vontade.",
        contribution:
          "Sua contribuição consiste em despertar coragem, autonomia e vontade de avançar nas pessoas ao seu redor.",
        challenge:
          "Seu desafio é unir espontaneidade e paciência para que sua força não se esgote em reações momentâneas.",
        key:
          "Escolha conscientemente sua direção antes de comprometer toda a sua energia.",
      },

      Taurus: {
        title:
          "Construir uma vida estável, fecunda e profundamente alinhada",
        introduction:
          "Sua direção profunda convida você a criar algo duradouro. Você é chamado a dar forma concreta aos seus valores, proteger aquilo que realmente importa e desenvolver uma relação mais consciente com segurança, matéria e tempo.",
        naturalDirection:
          "Seu progresso passa pela capacidade de construir lentamente sem perder de vista sua evolução. Sua constância é uma grande força quando usada para fazer um projeto crescer, e não para manter uma situação que se tornou estreita demais.",
        fulfillment:
          "Você se realiza quando seus esforços produzem um resultado tangível, útil e duradouro.",
        contribution:
          "Sua contribuição consiste em trazer estabilidade, realismo, confiabilidade e profundidade para um mundo muitas vezes apressado.",
        challenge:
          "Seu desafio é diferenciar perseverança de apego e aceitar que algumas transformações protegem justamente aquilo que você deseja construir.",
        key:
          "Faça suas bases evoluírem sem renunciar aos valores essenciais que definem você.",
      },

      Gemini: {
        title:
          "Conectar ideias, transmitir e abrir novas perspectivas",
        introduction:
          "Sua direção profunda convida você a compreender, comunicar e criar pontes entre pessoas, ideias ou universos diferentes. Sua curiosidade se torna uma verdadeira missão quando ajuda os outros a compreender aquilo que antes parecia complexo ou inacessível.",
        naturalDirection:
          "Você é chamado a aprender continuamente, mas também a transformar conhecimentos em mensagens claras. Sua mobilidade mental permite que você se adapte, traduza e faça a informação circular.",
        fulfillment:
          "Você se realiza quando pode trocar ideias, escrever, ensinar, explicar ou descobrir novas maneiras de pensar.",
        contribution:
          "Sua contribuição consiste em tornar as ideias vivas, acessíveis e capazes de gerar movimento.",
        challenge:
          "Seu desafio é superar a dispersão para dar profundidade e verdadeira continuidade aos seus vários interesses.",
        key:
          "Escolha as ideias que você realmente deseja aprofundar e transmitir.",
      },

      Cancer: {
        title:
          "Criar um espaço de segurança, memória e pertencimento",
        introduction:
          "Sua direção profunda convida você a compreender o mundo emocional, proteger o que é vulnerável e criar vínculos que proporcionem um verdadeiro sentimento de pertencimento. Sua sensibilidade se torna uma força quando você lhe dá uma forma consciente.",
        naturalDirection:
          "Você é chamado a reconhecer suas necessidades emocionais em vez de escondê-las atrás da proteção dos outros. Seu caminho consiste em transformar sua capacidade de sentir em presença, intuição e apoio adequado.",
        fulfillment:
          "Você se realiza quando pode cuidar, transmitir uma memória, criar um lar ou oferecer um espaço no qual os outros se sintam compreendidos.",
        contribution:
          "Sua contribuição consiste em lembrar a importância das raízes, das emoções e da segurança interior.",
        challenge:
          "Seu desafio é não permanecer preso ao passado ou a relações baseadas apenas na necessidade de ser indispensável.",
        key:
          "Proteja sem esquecer de si mesmo e acolha suas emoções sem entregar a elas todas as suas decisões.",
      },

      Leo: {
        title:
          "Brilhar, criar e inspirar através de uma expressão autêntica",
        introduction:
          "Sua direção profunda convida você a ocupar seu lugar com coração, criatividade e dignidade. Sua missão não consiste apenas em ser visto, mas em deixar fluir uma luz pessoal capaz de incentivar os outros a reconhecer a própria luz.",
        naturalDirection:
          "Você é chamado a desenvolver uma expressão que realmente corresponda a quem você é. Quanto mais você cria a partir do seu centro em vez de buscar validação externa, mais sua presença se torna naturalmente inspiradora.",
        fulfillment:
          "Você se realiza quando pode criar, liderar, transmitir entusiasmo ou dar uma forma visível àquilo que vive dentro de você.",
        contribution:
          "Sua contribuição consiste em trazer calor, confiança, generosidade e poder criativo.",
        challenge:
          "Seu desafio é não medir seu valor apenas pelo reconhecimento que recebe.",
        key:
          "Crie porque isso corresponde a quem você é, e não apenas para receber aplausos.",
      },

      Virgo: {
        title:
          "Melhorar, organizar e colocar suas competências a serviço da realidade",
        introduction:
          "Sua direção profunda convida você a tornar as coisas mais claras, eficientes e úteis. Seu senso de observação se torna uma verdadeira missão quando permite oferecer soluções concretas em vez de alimentar uma insatisfação permanente.",
        naturalDirection:
          "Você é chamado a desenvolver domínio baseado em experiência, precisão e atenção aos detalhes. Seu progresso também consiste em reconhecer que utilidade não exige perfeição.",
        fulfillment:
          "Você se realiza quando suas competências melhoram concretamente uma situação, um método ou o cotidiano de uma pessoa.",
        contribution:
          "Sua contribuição consiste em trazer discernimento, confiabilidade, método e senso prático.",
        challenge:
          "Seu desafio é não transformar sua capacidade de análise em crítica constante de si mesmo ou dos outros.",
        key:
          "Coloque sua exigência a serviço de uma melhoria realista e benevolente.",
      },

      Libra: {
        title:
          "Criar mais equilíbrio, beleza e cooperação",
        introduction:
          "Sua direção profunda convida você a compreender as relações, aproximar diferentes pontos de vista e buscar uma forma de equilíbrio que respeite cada pessoa. Seu talento para perceber várias perspectivas se torna uma força quando você também ousa definir a sua.",
        naturalDirection:
          "Você é chamado a favorecer cooperação, justiça e harmonia sem sacrificar sua verdade pessoal. Seu caminho ensina que a paz duradoura não depende de evitar desacordos.",
        fulfillment:
          "Você se realiza quando pode unir, negociar, embelezar ou restaurar uma relação mais justa.",
        contribution:
          "Sua contribuição consiste em lembrar que elegância relacional e respeito podem transformar profundamente as trocas.",
        challenge:
          "Seu desafio é tomar decisões sem esperar a aprovação de todas as pessoas envolvidas.",
        key:
          "Construa harmonia a partir de uma posição interior clara.",
      },

      Scorpio: {
        title:
          "Transformar, aprofundar e revelar aquilo que precisa evoluir",
        introduction:
          "Sua direção profunda convida você a ir além das aparências. Você é chamado a compreender movimentos invisíveis, atravessar períodos de transformação e utilizar sua intensidade para regenerar em vez de controlar.",
        naturalDirection:
          "Seu caminho se desenvolve quando você aceita observar honestamente aquilo que acontece sob a superfície. Você possui uma capacidade natural de perceber questões profundas, contradições e verdades que os outros às vezes preferem evitar.",
        fulfillment:
          "Você se realiza quando pode transformar uma prova, compreender um mecanismo complexo ou acompanhar uma evolução profunda.",
        contribution:
          "Sua contribuição consiste em trazer lucidez, coragem emocional, profundidade e capacidade de renascimento.",
        challenge:
          "Seu desafio é não deixar que o medo da perda leve você a reter, controlar ou fechar seu mundo interior.",
        key:
          "Use seu poder para transformar, e não para se proteger de toda vulnerabilidade.",
      },

      Sagittarius: {
        title:
          "Explorar, compreender e transmitir uma visão mais ampla",
        introduction:
          "Sua direção profunda convida você a ampliar horizontes, buscar sentido e compartilhar uma visão capaz de devolver impulso. Sua necessidade de liberdade se torna uma missão quando conduz você a uma compreensão mais profunda em vez de uma fuga constante.",
        naturalDirection:
          "Você é chamado a aprender pela experiência, confrontar suas convicções com a realidade e transmitir aquilo que suas explorações permitiram compreender.",
        fulfillment:
          "Você se realiza quando pode viajar, ensinar, descobrir, empreender ou defender uma visão cheia de esperança.",
        contribution:
          "Sua contribuição consiste em devolver sentido, perspectiva e confiança nas possibilidades futuras.",
        challenge:
          "Seu desafio é não confundir convicção com certeza absoluta.",
        key:
          "Faça da sua liberdade um espaço de aprendizagem, responsabilidade e transmissão.",
      },

      Capricorn: {
        title:
          "Construir uma obra sólida e assumir progressivamente sua autoridade",
        introduction:
          "Sua direção profunda convida você a desenvolver domínio, construir a longo prazo e assumir uma responsabilidade que corresponda a quem você é. Sua ambição se torna significativa quando se apoia em uma visão interior e não apenas na necessidade de provar seu valor.",
        naturalDirection:
          "Você é chamado a avançar com paciência, estratégia e compromisso. Seu caminho também consiste em reconhecer que o sucesso exterior não substitui o sentimento interior de ter construído algo justo.",
        fulfillment:
          "Você se realiza quando pode estruturar, liderar, consolidar ou deixar uma realização duradoura.",
        contribution:
          "Sua contribuição consiste em trazer maturidade, confiabilidade, continuidade e senso de responsabilidade.",
        challenge:
          "Seu desafio é não transformar esforço, controle ou desempenho nas únicas provas da sua legitimidade.",
        key:
          "Construa um sucesso que respeite tanto sua humanidade quanto seus objetivos.",
      },

      Aquarius: {
        title:
          "Inovar, libertar e contribuir para uma visão mais coletiva",
        introduction:
          "Sua direção profunda convida você a pensar de maneira diferente, questionar modelos que se tornaram limitantes demais e participar de uma evolução coletiva. Sua originalidade ganha pleno sentido quando se torna útil e acessível.",
        naturalDirection:
          "Você é chamado a preservar sua independência intelectual enquanto desenvolve sua capacidade de colaborar. Seu olhar diferente pode abrir novas possibilidades quando você aceita criar uma ponte entre ideia e realidade.",
        fulfillment:
          "Você se realiza quando pode inventar, modernizar, reunir ou defender uma causa que ultrapassa seu interesse pessoal.",
        contribution:
          "Sua contribuição consiste em trazer inovação, liberdade de pensamento, visão e abertura para o futuro.",
        challenge:
          "Seu desafio é não se afastar das suas emoções ou dos outros para preservar sua autonomia.",
        key:
          "Coloque sua diferença a serviço de uma transformação concreta e humana.",
      },

      Pisces: {
        title:
          "Conectar, inspirar e dar uma forma sensível ao invisível",
        introduction:
          "Sua direção profunda convida você a desenvolver compaixão, imaginação e capacidade de perceber aquilo que nem sempre pode ser expresso em palavras. Sua sensibilidade se torna uma missão quando alimenta uma criação, uma presença ou uma ajuda verdadeira.",
        naturalDirection:
          "Você é chamado a ouvir sua intuição enquanto desenvolve limites claros o suficiente para não absorver todas as emoções ao seu redor.",
        fulfillment:
          "Você se realiza quando pode criar, aliviar, inspirar, acompanhar ou dar sentido a uma experiência interior.",
        contribution:
          "Sua contribuição consiste em lembrar o valor da sensibilidade, da imaginação e da compaixão.",
        challenge:
          "Seu desafio é não se perder nas expectativas, emoções ou necessidades dos outros.",
        key:
          "Dê uma forma concreta à sua intuição sem abandonar seus próprios pontos de referência.",
      },
    },

    saturnLessons: {
      Aries:
        "Saturno em Áries ensina você a desenvolver uma autoridade pessoal que não dependa nem da pressa nem do confronto. Sua afirmação se torna mais poderosa quando se apoia em uma decisão amadurecida e em uma confiança construída com o tempo.",
      Taurus:
        "Saturno em Touro convida você a construir sua segurança sobre bases interiores e realistas. Sua evolução exige encontrar equilíbrio entre prudência, apego e capacidade de adaptação.",
      Gemini:
        "Saturno em Gêmeos ensina você a estruturar seu pensamento, tornar suas mensagens mais precisas e dar mais valor à sua própria inteligência. O domínio vem quando você aceita aprofundar em vez de querer compreender tudo imediatamente.",
      Cancer:
        "Saturno em Câncer convida você a desenvolver uma segurança emocional que não dependa inteiramente da família, do passado ou do papel que desempenha para os outros.",
      Leo:
        "Saturno em Leão ensina você a expressar sua criatividade sem exigir validação constante. Seu brilho se torna mais sólido quando você aceita avançar mesmo quando os aplausos não chegam imediatamente.",
      Virgo:
        "Saturno em Virgem convida você a transformar exigência em competência e preocupação em método. Seu progresso acelera quando você aceita que uma ação imperfeita pode ser mais útil do que uma preparação interminável.",
      Libra:
        "Saturno em Libra ensina você a construir relações baseadas em responsabilidade, reciprocidade e limites claros. Seu equilíbrio não deve depender da manutenção da paz a qualquer preço.",
      Scorpio:
        "Saturno em Escorpião convida você a acolher vulnerabilidade, confiança e transformações que não pode controlar completamente. Seu verdadeiro poder se desenvolve quando você deixa de confundir proteção com fechamento.",
      Sagittarius:
        "Saturno em Sagitário ensina você a confrontar suas convicções com a experiência. Sua visão ganha credibilidade quando se apoia em uma compreensão profunda e em disciplina real.",
      Capricorn:
        "Saturno em Capricórnio reforça sua necessidade de construir e dominar. Sua lição consiste em assumir sua ambição sem se prender a responsabilidade excessiva ou ao medo de nunca fazer o suficiente.",
      Aquarius:
        "Saturno em Aquário convida você a dar uma estrutura concreta às suas ideias inovadoras. Sua diferença se torna uma verdadeira contribuição quando você aceita os esforços necessários para torná-la duradoura.",
      Pisces:
        "Saturno em Peixes ensina você a dar forma clara à sua sensibilidade. Limites, hábitos e compromissos concretos podem apoiar sua intuição em vez de sufocá-la.",
    },

    jupiterExpansion: {
      Aries:
        "Sua expansão passa pela iniciativa, coragem e capacidade de acreditar em suas próprias decisões.",
      Taurus:
        "Sua expansão passa pela paciência, estabilidade e criação de recursos duradouros.",
      Gemini:
        "Sua expansão passa pela aprendizagem, pelas trocas e pela circulação das ideias.",
      Cancer:
        "Sua expansão passa pela segurança interior, transmissão e criação de vínculos nutritivos.",
      Leo:
        "Sua expansão passa pela criatividade, generosidade e expressão confiante da sua personalidade.",
      Virgo:
        "Sua expansão passa pelo desenvolvimento de competências úteis e pela busca de soluções concretas.",
      Libra:
        "Sua expansão passa pelas alianças, cooperação e busca de maior equidade.",
      Scorpio:
        "Sua expansão passa pela transformação, profundidade emocional e capacidade de renovar seus recursos.",
      Sagittarius:
        "Sua expansão passa pela exploração, conhecimento e transmissão de uma visão mais ampla.",
      Capricorn:
        "Sua expansão passa pela construção progressiva de autoridade, uma obra ou uma especialização.",
      Aquarius:
        "Sua expansão passa pela inovação, redes e projetos voltados para o coletivo.",
      Pisces:
        "Sua expansão passa pela intuição, criação e capacidade de dar sentido à sua sensibilidade.",
    },

    ascendantDirection: {
      Aries:
        "Seu Ascendente Áries pede que você avance com mais ousadia, autonomia e espontaneidade.",
      Taurus:
        "Seu Ascendente Touro pede que você construa sua vida com constância, simplicidade e fidelidade aos seus valores.",
      Gemini:
        "Seu Ascendente Gêmeos pede que você permaneça curioso, flexível e aberto às trocas que renovam sua compreensão.",
      Cancer:
        "Seu Ascendente Câncer pede que você reconheça sua sensibilidade e construa uma segurança emocional que lhe pertença.",
      Leo:
        "Seu Ascendente Leão pede que você assuma sua presença, criatividade e direito de ocupar um lugar visível.",
      Virgo:
        "Seu Ascendente Virgem pede que você desenvolva discernimento, competências e capacidade de melhorar a realidade.",
      Libra:
        "Seu Ascendente Libra pede que você aprenda a colaborar sem deixar de permanecer fiel à sua própria posição.",
      Scorpio:
        "Seu Ascendente Escorpião pede que você viva com intensidade, lucidez e coragem diante das transformações necessárias.",
      Sagittarius:
        "Seu Ascendente Sagitário pede que você amplie seus horizontes e siga uma direção cheia de significado.",
      Capricorn:
        "Seu Ascendente Capricórnio pede que você construa com paciência, responsabilidade e visão de longo prazo.",
      Aquarius:
        "Seu Ascendente Aquário pede que você preserve sua liberdade interior e traga uma perspectiva diferente.",
      Pisces:
        "Seu Ascendente Peixes pede que você ouça sua intuição enquanto desenvolve limites protetores.",
    },
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

export function localizeSignatureLifePurpose(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const labels =
    LABELS[locale as NonFrenchLocale];

  let out =
    source.replace(/\r\n/g, "\n");

  /*
  |--------------------------------------------------------------------------
  | Noms visibles des signes
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
  | 12 profils de mission
  |--------------------------------------------------------------------------
  |
  | Les clés Aries / Taurus / ... restent techniques.
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const PURPOSE_BY_SIGN:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\n\};\n\n\/\*\n\|-+\n\| Influence de Saturne/,
    `const PURPOSE_BY_SIGN: Record<
  string,
  PurposeProfile
> = ${JSON.stringify(
      labels.profiles,
      null,
      2,
    )};

/*
|--------------------------------------------------------------------------
| Influence de Saturne`,
  );

  /*
  |--------------------------------------------------------------------------
  | Saturne
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const SATURN_LESSONS:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\};/,
    `const SATURN_LESSONS: Record<string, string> = ${JSON.stringify(
      labels.saturnLessons,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Jupiter
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const JUPITER_EXPANSION:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\};/,
    `const JUPITER_EXPANSION: Record<string, string> = ${JSON.stringify(
      labels.jupiterExpansion,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Ascendant
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const ASCENDANT_DIRECTION:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\};/,
    `const ASCENDANT_DIRECTION: Record<string, string> = ${JSON.stringify(
      labels.ascendantDirection,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Fallbacks dynamiques
  |--------------------------------------------------------------------------
  */

  out =
    replaceAll(
      out,
      "Saturne montre que votre accomplissement demande du temps, de la persévérance et une relation plus consciente avec vos responsabilités.",
      labels.saturnFallback,
    );

  out =
    replaceAll(
      out,
      "Votre expansion passe par la confiance, l’expérience et la capacité à reconnaître les possibilités qui correspondent réellement à votre évolution.",
      labels.jupiterFallback,
    );

  out =
    replaceAll(
      out,
      "Votre Ascendant décrit la manière dont votre direction intérieure cherche progressivement à prendre forme dans votre vie.",
      labels.ascendantFallback,
    );

  /*
  |--------------------------------------------------------------------------
  | Nom par défaut
  |--------------------------------------------------------------------------
  */

  out =
    out.replace(
      /return normalized \|\| "vous";/,
      `return normalized || ${JSON.stringify(
        labels.defaultName,
      )};`,
    );

  out =
    out.replace(
      /displayName !== "vous"/g,
      `displayName !== ${JSON.stringify(
        labels.defaultName,
      )}`,
    );

  /*
  |--------------------------------------------------------------------------
  | Textes visibles des trois pages
  |--------------------------------------------------------------------------
  */

  const replacements:
    Array<[string, string]> = [
      [
        "Analyse Signature",
        labels.analysis,
      ],

      [
        "Votre mission de vie",
        labels.title,
      ],

      [
        `La direction profonde qui
                donne du sens à vos choix,
                à vos expériences et à votre
                évolution.`,
        labels.subtitle,
      ],

      [
        "Votre direction fondamentale",
        labels.fundamentalDirection,
      ],

      [
        "Votre mouvement naturel",
        labels.naturalMovement,
      ],

      [
        `Ce qui nourrit votre
                accomplissement`,
        labels.fulfillmentTitle,
      ],

      [
        `« Votre mission ne vous
                demande pas de devenir une
                autre personne. Elle vous
                invite à exprimer plus
                consciemment ce qui cherche
                déjà à prendre vie en vous. »`,
        labels.quote,
      ],

      [
        "Les piliers de votre mission",
        labels.missionPillars,
      ],

      [
        `Une direction construite par
                plusieurs forces complémentaires`,
        labels.complementaryForces,
      ],

      [
        `Le Soleil indique ce que vous
                êtes appelé à développer
                consciemment. L’Ascendant
                décrit la manière dont cette
                direction prend progressivement
                forme. Jupiter révèle les
                expériences qui agrandissent
                votre confiance, tandis que
                Saturne montre la maîtrise que
                vous êtes invité à construire
                avec le temps.`,
        labels.pillarsIntro,
      ],

      [
        "Soleil",
        labels.sun,
      ],

      [
        "Ascendant",
        labels.ascendant,
      ],

      [
        "Jupiter",
        labels.jupiter,
      ],

      [
        `Votre centre de volonté,
                d’identité et de réalisation
                personnelle.`,
        labels.sunText,
      ],

      [
        `La manière dont vous apprenez
                à vous présenter, à agir et à
                prendre votre place.`,
        labels.ascendantText,
      ],

      [
        `Votre voie d’expansion, de
                confiance et d’ouverture.`,
        labels.jupiterText,
      ],

      [
        `Votre manière de prendre votre
              place`,
        labels.takeYourPlace,
      ],

      [
        "Votre voie d’expansion",
        labels.expansionPath,
      ],

      [
        `La contribution que vous pouvez
              offrir`,
        labels.contributionTitle,
      ],

      [
        "Votre évolution consciente",
        labels.consciousEvolution,
      ],

      [
        `Transformer votre potentiel en
                direction vécue`,
        labels.potentialToDirection,
      ],

      [
        `Une mission de vie ne se
                manifeste pas comme une seule
                profession ou comme un destin
                entièrement fixé. Elle apparaît
                dans la manière dont vous
                choisissez, apprenez, créez,
                traversez les défis et donnez
                une cohérence plus profonde à
                vos expériences.`,
        labels.evolutionIntro,
      ],

      [
        `La maîtrise que votre parcours
              vous demande`,
        labels.masteryTitle,
      ],

      [
        "Votre point d’attention",
        labels.attentionPoint,
      ],

      [
        `Ce qui peut ralentir votre
                accomplissement`,
        labels.slowFulfillment,
      ],

      [
        "Votre clé Signature",
        labels.signatureKey,
      ],

      [
        `La décision intérieure à
                cultiver`,
        labels.innerDecision,
      ],

      [
        "Comment avancer concrètement",
        labels.concreteProgress,
      ],

      [
        `Identifiez les activités qui
                vous donnent simultanément
                de l’énergie, du sens et le
                sentiment d’utiliser une
                qualité essentielle de votre
                personnalité.`,
        labels.bullet1,
      ],

      [
        `Observez les situations qui
                reviennent régulièrement.
                Elles indiquent souvent une
                compétence, une limite ou une
                responsabilité que votre
                parcours vous invite à
                développer.`,
        labels.bullet2,
      ],

      [
        `Ne cherchez pas une réponse
                unique et définitive. Votre
                mission s’affine à mesure que
                vous agissez, expérimentez et
                reconnaissez ce qui demeure
                profondément cohérent pour
                vous.`,
        labels.bullet3,
      ],

      [
        "Votre intention directrice",
        labels.guidingIntention,
      ],

      [
        `Votre accomplissement se
                construit lorsque vous cessez
                de séparer ce que vous êtes,
                ce que vous apprenez et ce que
                vous apportez au monde. Plus
                vos choix reflètent vos valeurs
                profondes, plus votre parcours
                gagne naturellement en
                direction, en cohérence et en
                signification.`,
        labels.closingText,
      ],

      [
        "Non précisé",
        labels.unspecified,
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

  return out;
}
