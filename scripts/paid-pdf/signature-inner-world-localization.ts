import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type EmotionalProfile = {
  title: string;
  introduction: string;
  instinctiveReaction: string;
  emotionalNeed: string;
  protection: string;
  underPressure: string;
  healing: string;
  relationshipNeed: string;
  balanceKey: string;
};

type InnerWorldLabels = {
  analysis: string;
  innerWorld: string;
  subtitle: string;

  emotionalPortrait: string;
  instinctiveReaction: string;
  firstEmotionalMovement: string;
  fundamentalNeed: string;
  innerSecurity: string;
  protectionMechanism: string;
  emotionQuote: string;

  fourDimensions: string;
  feelLoveReactPerceive: string;
  fourDimensionsIntro: string;

  moon: string;
  venus: string;
  mars: string;
  neptune: string;

  moonShort: string;
  venusShort: string;
  marsShort: string;
  neptuneShort: string;

  affectiveLanguage: string;
  reactionStyle: string;
  intuitiveSensitivity: string;

  emotionalRegulation: string;
  pressureTitle: string;
  pressureIntro: string;

  underPressure: string;
  moreDifficult: string;
  soothing: string;
  returnToCenter: string;

  relationshipNeeds: string;

  threeGestures: string;
  gesture1: string;
  gesture2: string;
  gesture3: string;

  balanceKeyLabel: string;
  sensitivityStrength: string;
  closingSuffix: string;

  venusFallback: string;
  marsFallback: string;
  neptuneFallback: string;

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
    Record<string, EmotionalProfile>;

  venusStyles:
    Record<string, string>;

  marsStyles:
    Record<string, string>;

  neptuneStyles:
    Record<string, string>;
};

const LABELS:
Record<
  NonFrenchLocale,
  InnerWorldLabels
> = {
  en: {
    analysis:
      "Signature Analysis",

    innerWorld:
      "Your inner world",

    subtitle:
      "Your emotional needs, your protective mechanisms, and the way you restore your balance.",

    emotionalPortrait:
      "Emotional portrait",

    instinctiveReaction:
      "Instinctive reaction",

    firstEmotionalMovement:
      "Your first emotional movement",

    fundamentalNeed:
      "Fundamental need",

    innerSecurity:
      "What nourishes your inner security",

    protectionMechanism:
      "Your protective mechanism",

    emotionQuote:
      "“Understanding your emotions does not mean having to control them perfectly. It means learning to recognize what they are trying to protect, express, or transform.”",

    fourDimensions:
      "Your four sensitive dimensions",

    feelLoveReactPerceive:
      "Feeling, loving, reacting, and perceiving",

    fourDimensionsIntro:
      "The Moon describes your instinctive needs and emotional security. Venus reveals how you create bonds and receive affection. Mars shows how you react, defend your needs, and mobilize your energy. Neptune indicates your intuitive sensitivity and receptivity to atmospheres.",

    moon: "Moon",
    venus: "Venus",
    mars: "Mars",
    neptune: "Neptune",

    moonShort:
      "Your emotional needs and instinctive reactions.",

    venusShort:
      "Your way of loving and seeking harmony.",

    marsShort:
      "Your reaction to tension, desire, and action.",

    neptuneShort:
      "Your intuition, imagination, and receptivity.",

    affectiveLanguage:
      "Your emotional language",

    reactionStyle:
      "Your way of reacting",

    intuitiveSensitivity:
      "Your intuitive sensitivity",

    emotionalRegulation:
      "Emotional regulation",

    pressureTitle:
      "Recognizing what happens when pressure increases",

    pressureIntro:
      "Your reactions under pressure do not represent your entire personality. They mainly reveal the strategy your inner world uses to quickly regain a sense of security, control, or understanding.",

    underPressure:
      "Under pressure",

    moreDifficult:
      "What can become more difficult",

    soothing:
      "Soothing",

    returnToCenter:
      "What helps you return to your center",

    relationshipNeeds:
      "Your needs in relationships",

    threeGestures:
      "Three actions to protect your balance",

    gesture1:
      "Name the main emotion before looking for a solution. Once an emotion is recognized, it usually becomes easier to move through.",

    gesture2:
      "Identify the need behind your reaction: security, space, recognition, clarity, rest, or connection.",

    gesture3:
      "Give yourself some time before making an important decision when emotional intensity is high.",

    balanceKeyLabel:
      "Your key to balance",

    sensitivityStrength:
      "A better understood sensitivity becomes a strength",

    closingSuffix:
      "Your inner world is not trying to limit you. It informs you about the conditions you need in order to love, create, decide, and evolve without moving away from yourself.",

    venusFallback:
      "Venus describes the way you give affection, receive love, and seek a relationship that reflects your values.",

    marsFallback:
      "Mars describes how you react, defend your needs, and mobilize your energy when tension increases.",

    neptuneFallback:
      "Neptune describes your intuitive sensitivity, imagination, and receptivity to emotional atmospheres.",

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
          "A lively, direct emotional life that mobilizes immediately",

        introduction:
          "Your inner world reacts quickly. You often experience emotion as a movement that calls for a response, an action, or a decision. Your sensitivity is not passive: it naturally seeks a way forward.",

        instinctiveReaction:
          "Your first reflex is often to act, respond, or quickly regain control of the situation.",

        emotionalNeed:
          "You need emotional freedom, honesty, and the feeling that your reactions can be expressed without constantly being held back.",

        protection:
          "You may protect your vulnerability through impatience, independence, or apparent combativeness.",

        underPressure:
          "Under pressure, you may react before clearly identifying what you are feeling.",

        healing:
          "You regain calm through movement, a clear decision, and the possibility of transforming emotion into constructive action.",

        relationshipNeed:
          "You need lively, honest relationships that respect your autonomy.",

        balanceKey:
          "Create space between emotion and reaction so that you can consciously choose your response.",
      },

      Taurus: {
        title:
          "A stable sensitivity that seeks continuity and security",

        introduction:
          "Your inner world needs time to absorb experiences. You feel deeply, but you often prefer to let emotions settle before expressing them. External stability strongly influences your inner balance.",

        instinctiveReaction:
          "Your first reflex is to preserve your reference points, slow down, and avoid changes that feel too sudden.",

        emotionalNeed:
          "You need consistency, gentleness, material security, and a predictable environment.",

        protection:
          "You may protect your vulnerability by holding on to habits or refusing to express what could destabilize a relationship.",

        underPressure:
          "Under pressure, you may close yourself off, resist, or maintain a position long after the situation has changed.",

        healing:
          "You regain calm through the body, rest, simple gestures, nature, and a return to concrete reference points.",

        relationshipNeed:
          "You need loyalty, presence, and regular signs of stability.",

        balanceKey:
          "Accept that evolution does not necessarily destroy security and can sometimes strengthen it.",
      },

      Gemini: {
        title:
          "A mobile emotional life that seeks to understand and name",

        introduction:
          "Your inner world quickly transforms into thoughts, questions, and a need for exchange. Putting words to what you feel helps you gain perspective and better understand your experience.",

        instinctiveReaction:
          "Your first reflex is to analyze, talk, compare, or seek a new perspective.",

        emotionalNeed:
          "You need mental movement, dialogue, and variety in your environment.",

        protection:
          "You may protect your vulnerability through humor, intellectualization, or quickly changing the subject.",

        underPressure:
          "Under pressure, your thoughts may multiply and make it difficult to identify the central emotion.",

        healing:
          "You regain calm through writing, discussion, understanding, and greater mental breathing space.",

        relationshipNeed:
          "You need relationships in which communication remains open and stimulating.",

        balanceKey:
          "Do not only explain the emotion; take the time to actually feel it.",
      },

      Cancer: {
        title:
          "A deep, protective sensitivity strongly connected with memory",

        introduction:
          "Your inner world is rich, receptive, and closely connected with the feeling of belonging. You quickly perceive atmospheres, changes in mood, and unspoken needs.",

        instinctiveReaction:
          "Your first reflex is to protect, withdraw, or seek an emotionally secure space.",

        emotionalNeed:
          "You need gentleness, intimacy, continuity, and relationships in which you can remain fully yourself.",

        protection:
          "You may protect your vulnerability by hiding your own needs behind the care you offer others.",

        underPressure:
          "Under pressure, the past may return strongly and influence your perception of the present.",

        healing:
          "You regain calm through a secure place, emotional expression, and recognition of your real needs.",

        relationshipNeed:
          "You need loyalty, tenderness, and consistent emotional presence.",

        balanceKey:
          "Care for others without making their well-being the condition of your own security.",
      },

      Leo: {
        title:
          "A warm emotional life that seeks recognition and sharing",

        introduction:
          "Your inner world needs expression, warmth, and sincere recognition. Your emotions often take on a creative, generous, and visible dimension.",

        instinctiveReaction:
          "Your first reflex is to express what you feel or find a way to restore your dignity.",

        emotionalNeed:
          "You need sincere attention, joy, creativity, and a sense of personal value.",

        protection:
          "You may protect your vulnerability through pride or by giving the impression that nothing affects you.",

        underPressure:
          "Under pressure, you may feel a lack of recognition very strongly or interpret distance as rejection.",

        healing:
          "You regain calm through creativity, affection, play, and the freedom to express your heart.",

        relationshipNeed:
          "You need expressive, loyal, and warm relationships.",

        balanceKey:
          "Recognize your own value without constantly waiting for others to confirm it.",
      },

      Virgo: {
        title:
          "A discreet sensitivity that seeks to understand, organize, and improve",

        introduction:
          "Your inner world quickly analyzes what is not working and looks for a practical solution. You may express affection through help, presence, and attention to detail.",

        instinctiveReaction:
          "Your first reflex is to analyze the situation and look for what can be corrected.",

        emotionalNeed:
          "You need clarity, order, coherence, and the feeling that you can act usefully.",

        protection:
          "You may protect your vulnerability through control, self-criticism, or excessive attention to detail.",

        underPressure:
          "Under pressure, you may focus on mistakes, risks, or what should have been done differently.",

        healing:
          "You regain calm through simple actions, a realistic routine, and the ability to solve one thing at a time.",

        relationshipNeed:
          "You need reliability, respect, and concrete expressions of care.",

        balanceKey:
          "Accept what is imperfect without believing that everything must be repaired immediately.",
      },

      Libra: {
        title:
          "A relational emotional life that seeks harmony and reciprocity",

        introduction:
          "Your inner world is strongly influenced by the quality of your relationships. You are sensitive to tensions, injustice, and imbalance in exchanges.",

        instinctiveReaction:
          "Your first reflex is to seek a compromise, ease the tension, or understand the other person's point of view.",

        emotionalNeed:
          "You need respect, relational elegance, fairness, and a harmonious environment.",

        protection:
          "You may protect your vulnerability by avoiding conflict or adapting your position.",

        underPressure:
          "Under pressure, hesitation may increase because every choice seems to affect a relationship.",

        healing:
          "You regain calm through honest dialogue, a pleasant environment, and a decision that also respects your own truth.",

        relationshipNeed:
          "You need balanced exchanges and genuine cooperation.",

        balanceKey:
          "Build peace without removing yourself from the equation.",
      },

      Scorpio: {
        title:
          "An intense, lucid, and deeply transformative emotional life",

        introduction:
          "Your inner world feels things strongly, even when you do not immediately show what is happening inside you. You perceive what remains unspoken, tensions, and hidden emotional movements.",

        instinctiveReaction:
          "Your first reflex is to observe, protect your privacy, and assess how much trust is possible.",

        emotionalNeed:
          "You need depth, loyalty, truth, and relationships capable of supporting strong emotional intensity.",

        protection:
          "You may protect your vulnerability through control, silence, distrust, or apparent self-mastery.",

        underPressure:
          "Under pressure, you may ruminate, anticipate loss, or try to understand every hidden motivation.",

        healing:
          "You regain calm through truth, expressing what has been held back, and the possibility of transforming the experience.",

        relationshipNeed:
          "You need commitment, deep trust, and emotional sincerity.",

        balanceKey:
          "Accept vulnerability as a form of power rather than as a loss of control.",
      },

      Sagittarius: {
        title:
          "An expansive emotional life that seeks meaning and freedom",

        introduction:
          "Your inner world needs space, movement, and a perspective capable of giving meaning to what happens. You often regain your balance by broadening your vision.",

        instinctiveReaction:
          "Your first reflex is to step back, look for a solution, or project yourself toward the future.",

        emotionalNeed:
          "You need freedom, hope, discovery, and relationships that support your growth.",

        protection:
          "You may protect your vulnerability through humor, moving forward too quickly, or minimizing pain.",

        underPressure:
          "Under pressure, you may want to leave a situation too quickly before understanding what it is trying to teach you.",

        healing:
          "You regain calm through movement, nature, learning, and a broader perspective on the experience.",

        relationshipNeed:
          "You need trust, space, and a shared direction.",

        balanceKey:
          "Preserve your freedom while remaining present to what genuinely requires your attention.",
      },

      Capricorn: {
        title:
          "A contained sensitivity that seeks mastery and solidity",

        introduction:
          "Your inner world may be much more sensitive than you show. You often try to remain reliable, functional, and capable of coping even when emotions are strong.",

        instinctiveReaction:
          "Your first reflex is to regain control, organize the situation, and keep moving forward.",

        emotionalNeed:
          "You need stability, respect, continuity, and the feeling that you can rely on yourself.",

        protection:
          "You may protect your vulnerability by limiting emotional expression or making yourself indispensable.",

        underPressure:
          "Under pressure, you may isolate yourself, work more, or believe that you must carry everything alone.",

        healing:
          "You regain calm through rest, a reassuring structure, and permission to receive support.",

        relationshipNeed:
          "You need loyalty, maturity, and genuine commitment.",

        balanceKey:
          "Recognize that expressing a need does not diminish either your strength or your autonomy.",
      },

      Aquarius: {
        title:
          "An independent emotional life that seeks space and understanding",

        introduction:
          "Your inner world needs perspective in order to understand what it feels. You can observe your emotions with great clarity, but sometimes at the price of a certain distance.",

        instinctiveReaction:
          "Your first reflex is to analyze the situation objectively or take some space.",

        emotionalNeed:
          "You need freedom, friendship, respect for your differences, and a non-possessive environment.",

        protection:
          "You may protect your vulnerability through detachment, intellectualization, or excessive independence.",

        underPressure:
          "Under pressure, you may temporarily disconnect from your emotions or give the impression that nothing affects you.",

        healing:
          "You regain calm through perspective, open exchanges, and a space in which you can be different without being judged.",

        relationshipNeed:
          "You need freedom, intellectual connection, and authenticity.",

        balanceKey:
          "Remain free without turning distance into permanent protection.",
      },

      Pisces: {
        title:
          "An intuitive, receptive sensitivity strongly influenced by atmosphere",

        introduction:
          "Your inner world perceives emotions, atmospheres, and invisible nuances with great subtlety. Your sensitivity can become a source of inspiration, but it also requires conscious protection.",

        instinctiveReaction:
          "Your first reflex is to feel the whole situation before identifying what truly belongs to you.",

        emotionalNeed:
          "You need gentleness, silence, imagination, and a space in which your sensitivity can settle.",

        protection:
          "You may protect your vulnerability through withdrawal, idealization, or avoiding a reality that feels too harsh.",

        underPressure:
          "Under pressure, you may absorb the emotional state of others or temporarily lose your own reference points.",

        healing:
          "You regain calm through rest, creativity, water, music, and clearly defined boundaries.",

        relationshipNeed:
          "You need compassion, gentleness, and sincere emotional presence.",

        balanceKey:
          "Remain open without carrying what belongs to others.",
      },
    },

    venusStyles: {
      Aries:
        "Venus in Aries expresses affection with spontaneity, honesty, and enthusiasm. You need to feel that the relationship remains alive and allows you to remain fully yourself.",

      Taurus:
        "Venus in Taurus seeks stability, loyalty, and tangible presence. You often express affection through consistency, touch, simple gestures, and the creation of a secure environment.",

      Gemini:
        "Venus in Gemini seeks intellectual connection, exchange, and lightness. Communication and curiosity play an essential role in your way of loving.",

      Cancer:
        "Venus in Cancer expresses affection through protection, tenderness, and care. You need a bond in which emotional trust develops gradually.",

      Leo:
        "Venus in Leo loves with warmth, generosity, and loyalty. You need to feel that the relationship values your heart, creativity, and presence.",

      Virgo:
        "Venus in Virgo often expresses love through helpful gestures, reliability, and attention to detail. You seek a sincere, coherent, and concrete relationship.",

      Libra:
        "Venus in Libra seeks harmony, elegance, and reciprocity. You need cooperation and an exchange in which each person feels respected.",

      Scorpio:
        "Venus in Scorpio seeks deep, exclusive, and authentic intimacy. You love intensely and need genuine trust before opening completely.",

      Sagittarius:
        "Venus in Sagittarius seeks a lively, free relationship that supports growth. You need to share a vision, discoveries, and space for evolution.",

      Capricorn:
        "Venus in Capricorn seeks stability, maturity, and commitment demonstrated over time. You often express love through responsibility and lasting presence.",

      Aquarius:
        "Venus in Aquarius seeks a free, companionable relationship that respects individuality. Friendship and intellectual connection are important.",

      Pisces:
        "Venus in Pisces loves with sensitivity, compassion, and imagination. You seek a deep connection but also need to preserve sufficiently clear boundaries.",
    },

    marsStyles: {
      Aries:
        "Mars in Aries reacts quickly and directly. When something affects you, your energy immediately seeks an outlet, a decision, or an action.",

      Taurus:
        "Mars in Taurus reacts slowly but persistently. You can tolerate a great deal before moving, but once engaged your energy becomes difficult to redirect.",

      Gemini:
        "Mars in Gemini mobilizes your energy through words, ideas, and exchanges. Tensions can quickly become mental or verbal.",

      Cancer:
        "Mars in Cancer reacts through sensitivity and protective instinct. Your energy increases strongly when you need to defend someone close to you or your emotional security.",

      Leo:
        "Mars in Leo acts with pride, creativity, and courage. You need to feel that your actions fully express who you are.",

      Virgo:
        "Mars in Virgo mobilizes your energy through analysis, organization, and the search for efficiency. You act best when you know exactly what needs to be done.",

      Libra:
        "Mars in Libra seeks to act without destroying balance. You may hesitate before confronting, but become highly engaged when a situation seems unfair.",

      Scorpio:
        "Mars in Scorpio concentrates your energy intensely. You rarely act halfway and may hold an emotion for a long time before transforming it into a decision.",

      Sagittarius:
        "Mars in Sagittarius acts with enthusiasm, honesty, and a need for freedom. Your energy increases when you pursue a meaningful goal.",

      Capricorn:
        "Mars in Capricorn acts with strategy, endurance, and control. You move forward best when your energy serves a clear and lasting goal.",

      Aquarius:
        "Mars in Aquarius acts independently and sometimes unpredictably. Your energy becomes strongly mobilized when you need to defend an idea, a freedom, or a cause.",

      Pisces:
        "Mars in Pisces acts through intuition, sensitivity, and inspiration. Your energy can fluctuate according to the atmosphere and emotional meaning of the action.",
    },

    neptuneStyles: {
      Aries:
        "Neptune in Aries can make your intuition spontaneous, lively, and connected with the instinct to act.",

      Taurus:
        "Neptune in Taurus can connect your sensitivity with nature, the body, beauty, and the search for peace.",

      Gemini:
        "Neptune in Gemini can amplify mental imagination, sensitivity to words, and the ability to perceive several levels of meaning.",

      Cancer:
        "Neptune in Cancer can strengthen emotional memory, family intuition, and receptivity to atmospheres.",

      Leo:
        "Neptune in Leo can amplify creativity, imagination, and the desire to express an inspiring vision.",

      Virgo:
        "Neptune in Virgo can make your sensitivity attentive to details, care, and the subtle needs of others.",

      Libra:
        "Neptune in Libra can idealize relationships, harmony, and love while developing great subtlety in perceiving exchanges.",

      Scorpio:
        "Neptune in Scorpio can amplify your intuition regarding what remains unspoken, hidden emotions, and deep transformations.",

      Sagittarius:
        "Neptune in Sagittarius can connect your sensitivity with the search for meaning, beliefs, and a broader vision of existence.",

      Capricorn:
        "Neptune in Capricorn can seek to give concrete structure to an intuition, ideal, or inner vision.",

      Aquarius:
        "Neptune in Aquarius can amplify your sensitivity to collective movements, new ideas, and social transformation.",

      Pisces:
        "Neptune in Pisces strongly amplifies compassion, imagination, intuition, and receptivity to atmospheres.",
    },
  },

  es: {
    analysis:
      "Análisis Firma",

    innerWorld:
      "Tu mundo interior",

    subtitle:
      "Tus necesidades emocionales, tus mecanismos de protección y la manera en que recuperas tu equilibrio.",

    emotionalPortrait:
      "Retrato emocional",

    instinctiveReaction:
      "Reacción instintiva",

    firstEmotionalMovement:
      "Tu primer movimiento emocional",

    fundamentalNeed:
      "Necesidad fundamental",

    innerSecurity:
      "Lo que nutre tu seguridad interior",

    protectionMechanism:
      "Tu mecanismo de protección",

    emotionQuote:
      "«Comprender tus emociones no significa tener que controlarlas perfectamente. Significa aprender a reconocer lo que buscan proteger, expresar o transformar.»",

    fourDimensions:
      "Tus cuatro dimensiones sensibles",

    feelLoveReactPerceive:
      "Sentir, amar, reaccionar y percibir",

    fourDimensionsIntro:
      "La Luna describe tus necesidades instintivas y tu seguridad emocional. Venus revela tu manera de crear vínculos y recibir afecto. Marte muestra tu forma de reaccionar, defender tus necesidades y movilizar tu energía. Neptuno indica tu sensibilidad intuitiva y tu receptividad a los ambientes.",

    moon: "Luna",
    venus: "Venus",
    mars: "Marte",
    neptune: "Neptuno",

    moonShort:
      "Tus necesidades emocionales y tus reacciones instintivas.",

    venusShort:
      "Tu manera de amar y buscar la armonía.",

    marsShort:
      "Tu reacción frente a la tensión, el deseo y la acción.",

    neptuneShort:
      "Tu intuición, imaginación y receptividad.",

    affectiveLanguage:
      "Tu lenguaje afectivo",

    reactionStyle:
      "Tu manera de reaccionar",

    intuitiveSensitivity:
      "Tu sensibilidad intuitiva",

    emotionalRegulation:
      "Regulación emocional",

    pressureTitle:
      "Reconocer lo que ocurre cuando aumenta la presión",

    pressureIntro:
      "Tus reacciones bajo presión no representan toda tu personalidad. Revelan sobre todo la estrategia que utiliza tu mundo interior para recuperar rápidamente una sensación de seguridad, control o comprensión.",

    underPressure:
      "Bajo presión",

    moreDifficult:
      "Lo que puede volverse más difícil",

    soothing:
      "Calma",

    returnToCenter:
      "Lo que te ayuda a recuperar tu centro",

    relationshipNeeds:
      "Tus necesidades en las relaciones",

    threeGestures:
      "Tres acciones para proteger tu equilibrio",

    gesture1:
      "Nombra la emoción principal antes de buscar una solución. Una emoción reconocida suele ser más fácil de atravesar.",

    gesture2:
      "Identifica la necesidad situada detrás de tu reacción: seguridad, espacio, reconocimiento, claridad, descanso o conexión.",

    gesture3:
      "Concédete un tiempo antes de tomar una decisión importante cuando la intensidad emocional sea elevada.",

    balanceKeyLabel:
      "Tu clave de equilibrio",

    sensitivityStrength:
      "Una sensibilidad mejor comprendida se convierte en una fuerza",

    closingSuffix:
      "Tu mundo interior no busca limitarte. Te informa sobre las condiciones necesarias para amar, crear, decidir y evolucionar sin alejarte de ti mismo.",

    venusFallback:
      "Venus describe tu manera de dar afecto, recibir amor y buscar una relación que corresponda a tus valores.",

    marsFallback:
      "Marte describe tu manera de reaccionar, defender tus necesidades y movilizar tu energía cuando aumenta la tensión.",

    neptuneFallback:
      "Neptuno describe tu sensibilidad intuitiva, tu imaginación y tu receptividad a los ambientes emocionales.",

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
          "Una vida emocional viva, directa e inmediatamente movilizada",

        introduction:
          "Tu mundo interior reacciona rápidamente. A menudo sientes una emoción como un movimiento que exige una respuesta, una acción o una decisión. Tu sensibilidad no es pasiva: busca naturalmente una manera de avanzar.",

        instinctiveReaction:
          "Tu primer reflejo suele ser actuar, responder o recuperar rápidamente el control de la situación.",

        emotionalNeed:
          "Necesitas libertad emocional, franqueza y sentir que tus reacciones pueden expresarse sin estar constantemente contenidas.",

        protection:
          "Puedes proteger tu vulnerabilidad mediante la impaciencia, la independencia o una aparente combatividad.",

        underPressure:
          "Bajo presión, puedes reaccionar antes de haber identificado con precisión lo que sientes.",

        healing:
          "Recuperas la calma mediante el movimiento, una decisión clara y la posibilidad de transformar la emoción en una acción constructiva.",

        relationshipNeed:
          "Necesitas relaciones vivas, honestas y capaces de respetar tu autonomía.",

        balanceKey:
          "Crear un espacio entre la emoción y la reacción para poder elegir conscientemente tu respuesta.",
      },

      Taurus: {
        title:
          "Una sensibilidad estable que busca continuidad y seguridad",

        introduction:
          "Tu mundo interior necesita tiempo para absorber las experiencias. Sientes profundamente, pero a menudo prefieres dejar que la emoción se asiente antes de expresarla. La estabilidad exterior influye fuertemente en tu equilibrio interior.",

        instinctiveReaction:
          "Tu primer reflejo consiste en preservar tus referencias, disminuir el ritmo y evitar cambios demasiado bruscos.",

        emotionalNeed:
          "Necesitas constancia, suavidad, seguridad material y un entorno previsible.",

        protection:
          "Puedes proteger tu vulnerabilidad aferrándote a tus hábitos o evitando expresar aquello que podría desestabilizar una relación.",

        underPressure:
          "Bajo presión, puedes cerrarte, resistir o mantener una posición mucho después de que la situación haya evolucionado.",

        healing:
          "Recuperas la calma a través del cuerpo, el descanso, los gestos simples, la naturaleza y el regreso a referencias concretas.",

        relationshipNeed:
          "Necesitas fidelidad, presencia y demostraciones regulares de estabilidad.",

        balanceKey:
          "Aceptar que la evolución no destruye necesariamente la seguridad y que a veces puede fortalecerla.",
      },

      Gemini: {
        title:
          "Una vida emocional móvil que busca comprender y nombrar",

        introduction:
          "Tu mundo interior se transforma rápidamente en pensamientos, preguntas y necesidad de intercambio. Poner palabras a lo que sientes te ayuda a tomar distancia y comprender mejor tu experiencia.",

        instinctiveReaction:
          "Tu primer reflejo consiste en analizar, hablar, comparar o buscar una nueva perspectiva.",

        emotionalNeed:
          "Necesitas movimiento mental, diálogo y variedad en tu entorno.",

        protection:
          "Puedes proteger tu vulnerabilidad mediante el humor, la intelectualización o cambiando rápidamente de tema.",

        underPressure:
          "Bajo presión, tus pensamientos pueden multiplicarse y dificultar la identificación de la emoción central.",

        healing:
          "Recuperas la calma mediante la escritura, el intercambio, la comprensión y un mayor espacio mental.",

        relationshipNeed:
          "Necesitas relaciones en las que la comunicación permanezca abierta y estimulante.",

        balanceKey:
          "No limitarte a explicar la emoción, sino tomarte el tiempo de sentirla realmente.",
      },

      Cancer: {
        title:
          "Una sensibilidad profunda, protectora y fuertemente ligada a la memoria",

        introduction:
          "Tu mundo interior es rico, receptivo y está íntimamente ligado al sentimiento de pertenencia. Percibes rápidamente los ambientes, los cambios de humor y las necesidades no expresadas.",

        instinctiveReaction:
          "Tu primer reflejo consiste en proteger, retirarte o buscar un espacio emocional seguro.",

        emotionalNeed:
          "Necesitas suavidad, intimidad, continuidad y vínculos en los que puedas seguir siendo plenamente tú mismo.",

        protection:
          "Puedes proteger tu vulnerabilidad ocultando tus propias necesidades detrás del cuidado que ofreces a los demás.",

        underPressure:
          "Bajo presión, el pasado puede regresar con fuerza e influir en tu percepción del presente.",

        healing:
          "Recuperas la calma mediante un lugar seguro, la expresión de las emociones y el reconocimiento de tus verdaderas necesidades.",

        relationshipNeed:
          "Necesitas lealtad, ternura y una presencia afectiva constante.",

        balanceKey:
          "Cuidar de los demás sin convertir su bienestar en la condición de tu propia seguridad.",
      },

      Leo: {
        title:
          "Una vida emocional cálida que busca reconocimiento y expresión",

        introduction:
          "Tu mundo interior necesita expresión, calidez y reconocimiento sincero. Tus emociones suelen adquirir una dimensión creativa, generosa y visible.",

        instinctiveReaction:
          "Tu primer reflejo consiste en expresar lo que sientes o buscar una manera de recuperar tu dignidad.",

        emotionalNeed:
          "Necesitas atención sincera, alegría, creatividad y un sentimiento de valor personal.",

        protection:
          "Puedes proteger tu vulnerabilidad mediante el orgullo o dando la impresión de que nada te afecta.",

        underPressure:
          "Bajo presión, puedes sentir intensamente la falta de reconocimiento o interpretar una distancia como rechazo.",

        healing:
          "Recuperas la calma mediante la creación, el afecto, el juego y la posibilidad de expresar libremente tu corazón.",

        relationshipNeed:
          "Necesitas relaciones demostrativas, leales y cálidas.",

        balanceKey:
          "Reconocer tu valor sin esperar constantemente que los demás lo confirmen.",
      },

      Virgo: {
        title:
          "Una sensibilidad discreta que busca comprender, organizar y mejorar",

        introduction:
          "Tu mundo interior analiza rápidamente lo que no funciona y busca una solución concreta. Puedes expresar afecto mediante la ayuda, la presencia y la atención a los detalles.",

        instinctiveReaction:
          "Tu primer reflejo consiste en analizar la situación y buscar aquello que puede corregirse.",

        emotionalNeed:
          "Necesitas claridad, orden, coherencia y sentir que puedes actuar de manera útil.",

        protection:
          "Puedes proteger tu vulnerabilidad mediante el control, la autocrítica o una atención excesiva a los detalles.",

        underPressure:
          "Bajo presión, puedes concentrarte en los errores, los riesgos o aquello que debería haberse hecho de otra manera.",

        healing:
          "Recuperas la calma mediante gestos simples, una rutina realista y la posibilidad de resolver una cosa a la vez.",

        relationshipNeed:
          "Necesitas fiabilidad, respeto y atenciones concretas.",

        balanceKey:
          "Aceptar lo imperfecto sin creer que todo debe repararse inmediatamente.",
      },

      Libra: {
        title:
          "Una vida emocional relacional que busca armonía y reciprocidad",

        introduction:
          "Tu mundo interior está fuertemente influido por la calidad de tus relaciones. Eres sensible a las tensiones, las injusticias y los desequilibrios en los intercambios.",

        instinctiveReaction:
          "Tu primer reflejo consiste en buscar un compromiso, calmar la tensión o comprender el punto de vista de la otra persona.",

        emotionalNeed:
          "Necesitas respeto, elegancia relacional, equidad y un entorno armonioso.",

        protection:
          "Puedes proteger tu vulnerabilidad evitando el conflicto o adaptando tu posición.",

        underPressure:
          "Bajo presión, la indecisión puede aumentar porque cada elección parece afectar una relación.",

        healing:
          "Recuperas la calma mediante un diálogo honesto, un entorno agradable y una decisión que también respete tu verdad.",

        relationshipNeed:
          "Necesitas intercambios equilibrados y verdadera cooperación.",

        balanceKey:
          "Construir la paz sin excluirte a ti mismo de la ecuación.",
      },

      Scorpio: {
        title:
          "Una vida emocional intensa, lúcida y profundamente transformadora",

        introduction:
          "Tu mundo interior siente con fuerza, incluso cuando no muestras inmediatamente lo que te atraviesa. Percibes lo no dicho, las tensiones y los movimientos emocionales ocultos.",

        instinctiveReaction:
          "Tu primer reflejo consiste en observar, proteger tu intimidad y evaluar la confianza posible.",

        emotionalNeed:
          "Necesitas profundidad, lealtad, verdad y relaciones capaces de sostener una fuerte intensidad emocional.",

        protection:
          "Puedes proteger tu vulnerabilidad mediante el control, el silencio, la desconfianza o una aparente serenidad.",

        underPressure:
          "Bajo presión, puedes rumiar, anticipar una pérdida o intentar comprender cada motivación oculta.",

        healing:
          "Recuperas la calma mediante la verdad, la expresión de aquello que has retenido y la posibilidad de transformar la experiencia.",

        relationshipNeed:
          "Necesitas compromiso, confianza profunda y sinceridad emocional.",

        balanceKey:
          "Aceptar la vulnerabilidad como una forma de poder y no como una pérdida de control.",
      },

      Sagittarius: {
        title:
          "Una vida emocional expansiva que busca sentido y libertad",

        introduction:
          "Tu mundo interior necesita espacio, movimiento y una perspectiva capaz de dar sentido a lo que ocurre. A menudo recuperas tu equilibrio ampliando tu visión.",

        instinctiveReaction:
          "Tu primer reflejo consiste en tomar distancia, buscar una solución o proyectarte hacia el futuro.",

        emotionalNeed:
          "Necesitas libertad, esperanza, descubrimiento y relaciones que apoyen tu crecimiento.",

        protection:
          "Puedes proteger tu vulnerabilidad mediante el humor, la huida hacia adelante o minimizando el dolor.",

        underPressure:
          "Bajo presión, puedes querer abandonar demasiado rápidamente una situación antes de comprender lo que intenta enseñarte.",

        healing:
          "Recuperas la calma mediante el movimiento, la naturaleza, el aprendizaje y una visión más amplia de la experiencia.",

        relationshipNeed:
          "Necesitas confianza, espacio y una dirección compartida.",

        balanceKey:
          "Conservar tu libertad permaneciendo presente ante aquello que realmente exige tu atención.",
      },

      Capricorn: {
        title:
          "Una sensibilidad contenida que busca dominio y solidez",

        introduction:
          "Tu mundo interior puede ser mucho más sensible de lo que muestras. A menudo buscas mantenerte fiable, funcional y capaz de afrontar las situaciones, incluso cuando la emoción es intensa.",

        instinctiveReaction:
          "Tu primer reflejo consiste en recuperar el control, organizar la situación y seguir avanzando.",

        emotionalNeed:
          "Necesitas estabilidad, respeto, continuidad y sentir que puedes contar contigo mismo.",

        protection:
          "Puedes proteger tu vulnerabilidad limitando la expresión emocional o volviéndote indispensable.",

        underPressure:
          "Bajo presión, puedes aislarte, trabajar más o creer que debes cargar con todo tú solo.",

        healing:
          "Recuperas la calma mediante el descanso, una estructura tranquilizadora y el permiso de recibir apoyo.",

        relationshipNeed:
          "Necesitas fidelidad, madurez y compromiso real.",

        balanceKey:
          "Reconocer que expresar una necesidad no disminuye ni tu fuerza ni tu autonomía.",
      },

      Aquarius: {
        title:
          "Una vida emocional independiente que busca espacio y comprensión",

        introduction:
          "Tu mundo interior necesita distancia para comprender lo que siente. Puedes observar tus emociones con mucha lucidez, aunque a veces a costa de cierta distancia.",

        instinctiveReaction:
          "Tu primer reflejo consiste en analizar la situación de manera objetiva o tomar espacio.",

        emotionalNeed:
          "Necesitas libertad, amistad, respeto por tu diferencia y un entorno no posesivo.",

        protection:
          "Puedes proteger tu vulnerabilidad mediante el desapego, la intelectualización o una independencia excesiva.",

        underPressure:
          "Bajo presión, puedes desconectarte temporalmente de tus emociones o dar la impresión de que nada te afecta.",

        healing:
          "Recuperas la calma mediante la distancia, los intercambios abiertos y un espacio en el que puedas ser diferente sin ser juzgado.",

        relationshipNeed:
          "Necesitas libertad, complicidad mental y autenticidad.",

        balanceKey:
          "Seguir siendo libre sin transformar la distancia en una protección permanente.",
      },

      Pisces: {
        title:
          "Una sensibilidad intuitiva, receptiva y fuertemente influida por el ambiente",

        introduction:
          "Tu mundo interior percibe las emociones, los ambientes y los matices invisibles con gran sutileza. Tu sensibilidad puede convertirse en una fuente de inspiración, pero también necesita protección consciente.",

        instinctiveReaction:
          "Tu primer reflejo consiste en sentir el conjunto de la situación antes de identificar lo que realmente te pertenece.",

        emotionalNeed:
          "Necesitas suavidad, silencio, imaginación y un espacio donde tu sensibilidad pueda asentarse.",

        protection:
          "Puedes proteger tu vulnerabilidad mediante el retiro, la idealización o evitando una realidad demasiado dura.",

        underPressure:
          "Bajo presión, puedes absorber el estado emocional de los demás o perder momentáneamente tus propias referencias.",

        healing:
          "Recuperas la calma mediante el descanso, la creación, el agua, la música y límites claramente definidos.",

        relationshipNeed:
          "Necesitas compasión, delicadeza y una presencia emocional sincera.",

        balanceKey:
          "Permanecer abierto sin cargar con aquello que pertenece a los demás.",
      },
    },

    venusStyles: {
      Aries:
        "Venus en Aries expresa el afecto con espontaneidad, franqueza y entusiasmo. Necesitas sentir que la relación permanece viva y te permite seguir siendo plenamente tú mismo.",

      Taurus:
        "Venus en Tauro busca estabilidad, fidelidad y una presencia tangible. A menudo expresas el afecto mediante la constancia, el contacto, los gestos simples y la creación de un entorno seguro.",

      Gemini:
        "Venus en Géminis busca complicidad mental, intercambio y ligereza. La comunicación y la curiosidad ocupan un lugar esencial en tu manera de amar.",

      Cancer:
        "Venus en Cáncer expresa el afecto mediante protección, ternura y cuidado. Necesitas un vínculo donde la confianza emocional se construya progresivamente.",

      Leo:
        "Venus en Leo ama con calidez, generosidad y lealtad. Necesitas sentir que la relación valora tu corazón, tu creatividad y tu presencia.",

      Virgo:
        "Venus en Virgo expresa a menudo el amor mediante gestos útiles, fiabilidad y atención a los detalles. Buscas una relación sincera, coherente y concreta.",

      Libra:
        "Venus en Libra busca armonía, elegancia y reciprocidad. Necesitas cooperación y un intercambio donde cada persona se sienta respetada.",

      Scorpio:
        "Venus en Escorpio busca una intimidad profunda, exclusiva y auténtica. Amas con intensidad y necesitas verdadera confianza para abrirte completamente.",

      Sagittarius:
        "Venus en Sagitario busca una relación viva, libre y portadora de crecimiento. Necesitas compartir una visión, descubrimientos y un espacio de evolución.",

      Capricorn:
        "Venus en Capricornio busca estabilidad, madurez y un compromiso demostrado con el tiempo. A menudo expresas el amor mediante la responsabilidad y una presencia duradera.",

      Aquarius:
        "Venus en Acuario busca una relación libre, cómplice y respetuosa con la individualidad. La amistad y la conexión intelectual ocupan un lugar importante.",

      Pisces:
        "Venus en Piscis ama con sensibilidad, compasión e imaginación. Buscas una conexión profunda, pero también necesitas preservar límites suficientemente claros.",
    },

    marsStyles: {
      Aries:
        "Marte en Aries reacciona rápida y directamente. Cuando algo te afecta, tu energía busca inmediatamente una salida, una decisión o una acción.",

      Taurus:
        "Marte en Tauro reacciona lentamente, pero con perseverancia. Soportas mucho antes de moverte, pero una vez comprometido tu energía se vuelve difícil de desviar.",

      Gemini:
        "Marte en Géminis moviliza tu energía mediante palabras, ideas e intercambios. Las tensiones pueden convertirse rápidamente en mentales o verbales.",

      Cancer:
        "Marte en Cáncer reacciona desde la sensibilidad y el instinto protector. Tu energía aumenta fuertemente cuando debes defender a alguien cercano o tu seguridad emocional.",

      Leo:
        "Marte en Leo actúa con orgullo, creatividad y valor. Necesitas sentir que tus acciones expresan plenamente quién eres.",

      Virgo:
        "Marte en Virgo moviliza tu energía mediante el análisis, la organización y la búsqueda de eficacia. Actúas mejor cuando sabes exactamente qué debe hacerse.",

      Libra:
        "Marte en Libra busca actuar sin destruir el equilibrio. Puedes dudar antes de confrontar, pero te implicas fuertemente cuando una situación te parece injusta.",

      Scorpio:
        "Marte en Escorpio concentra tu energía con intensidad. Rara vez actúas a medias y puedes retener una emoción durante mucho tiempo antes de convertirla en decisión.",

      Sagittarius:
        "Marte en Sagitario actúa con entusiasmo, franqueza y necesidad de libertad. Tu energía aumenta cuando persigues un objetivo lleno de sentido.",

      Capricorn:
        "Marte en Capricornio actúa con estrategia, resistencia y control. Avanzas mejor cuando tu energía sirve a un objetivo claro y duradero.",

      Aquarius:
        "Marte en Acuario actúa de manera independiente y a veces imprevisible. Tu energía se moviliza fuertemente cuando debes defender una idea, una libertad o una causa.",

      Pisces:
        "Marte en Piscis actúa desde la intuición, la sensibilidad y la inspiración. Tu energía puede fluctuar según el ambiente y el significado emocional de la acción.",
    },

    neptuneStyles: {
      Aries:
        "Neptuno en Aries puede volver tu intuición espontánea, viva y vinculada al instinto de actuar.",

      Taurus:
        "Neptuno en Tauro puede vincular tu sensibilidad con la naturaleza, el cuerpo, la belleza y la búsqueda de paz.",

      Gemini:
        "Neptuno en Géminis puede amplificar la imaginación mental, la percepción de las palabras y la capacidad para captar varios niveles de significado.",

      Cancer:
        "Neptuno en Cáncer puede reforzar la memoria emocional, la intuición familiar y la receptividad a los ambientes.",

      Leo:
        "Neptuno en Leo puede amplificar la creatividad, la imaginación y el deseo de expresar una visión inspiradora.",

      Virgo:
        "Neptuno en Virgo puede volver tu sensibilidad atenta a los detalles, al cuidado y a las necesidades sutiles de los demás.",

      Libra:
        "Neptuno en Libra puede idealizar la relación, la armonía y el amor, desarrollando a la vez una gran sutileza para percibir los intercambios.",

      Scorpio:
        "Neptuno en Escorpio puede amplificar tu intuición frente a lo no dicho, las emociones ocultas y las transformaciones profundas.",

      Sagittarius:
        "Neptuno en Sagitario puede vincular tu sensibilidad con la búsqueda de sentido, las creencias y una visión más amplia de la existencia.",

      Capricorn:
        "Neptuno en Capricornio puede buscar dar una estructura concreta a una intuición, un ideal o una visión interior.",

      Aquarius:
        "Neptuno en Acuario puede amplificar tu sensibilidad a los movimientos colectivos, las ideas nuevas y las transformaciones sociales.",

      Pisces:
        "Neptuno en Piscis amplifica fuertemente la compasión, la imaginación, la intuición y la receptividad a los ambientes.",
    },
  },

  de: {
    analysis:
      "Signatur-Analyse",

    innerWorld:
      "Ihre innere Welt",

    subtitle:
      "Ihre emotionalen Bedürfnisse, Ihre Schutzmechanismen und die Art, wie Sie Ihr Gleichgewicht wiederfinden.",

    emotionalPortrait:
      "Emotionales Porträt",

    instinctiveReaction:
      "Instinktive Reaktion",

    firstEmotionalMovement:
      "Ihre erste emotionale Bewegung",

    fundamentalNeed:
      "Grundlegendes Bedürfnis",

    innerSecurity:
      "Was Ihre innere Sicherheit nährt",

    protectionMechanism:
      "Ihr Schutzmechanismus",

    emotionQuote:
      "„Ihre Gefühle zu verstehen bedeutet nicht, sie vollkommen kontrollieren zu müssen. Es bedeutet zu erkennen, was sie schützen, ausdrücken oder verändern möchten.“",

    fourDimensions:
      "Ihre vier sensiblen Dimensionen",

    feelLoveReactPerceive:
      "Fühlen, lieben, reagieren und wahrnehmen",

    fourDimensionsIntro:
      "Der Mond beschreibt Ihre instinktiven Bedürfnisse und Ihre emotionale Sicherheit. Venus zeigt, wie Sie Bindung schaffen und Zuneigung empfangen. Mars beschreibt Ihre Reaktionen, die Verteidigung Ihrer Bedürfnisse und Ihre Handlungsenergie. Neptun zeigt Ihre intuitive Sensibilität und Ihre Empfänglichkeit für Stimmungen.",

    moon: "Mond",
    venus: "Venus",
    mars: "Mars",
    neptune: "Neptun",

    moonShort:
      "Ihre emotionalen Bedürfnisse und instinktiven Reaktionen.",

    venusShort:
      "Ihre Art zu lieben und Harmonie zu suchen.",

    marsShort:
      "Ihre Reaktion auf Spannung, Verlangen und Handlung.",

    neptuneShort:
      "Ihre Intuition, Vorstellungskraft und Empfänglichkeit.",

    affectiveLanguage:
      "Ihre emotionale Sprache",

    reactionStyle:
      "Ihre Art zu reagieren",

    intuitiveSensitivity:
      "Ihre intuitive Sensibilität",

    emotionalRegulation:
      "Emotionale Regulation",

    pressureTitle:
      "Erkennen, was geschieht, wenn der Druck steigt",

    pressureIntro:
      "Ihre Reaktionen unter Druck repräsentieren nicht Ihre gesamte Persönlichkeit. Sie zeigen vor allem die Strategie, mit der Ihre innere Welt schnell wieder Sicherheit, Kontrolle oder Verständnis herzustellen versucht.",

    underPressure:
      "Unter Druck",

    moreDifficult:
      "Was schwieriger werden kann",

    soothing:
      "Beruhigung",

    returnToCenter:
      "Was Ihnen hilft, in Ihre Mitte zurückzufinden",

    relationshipNeeds:
      "Ihre Bedürfnisse in Beziehungen",

    threeGestures:
      "Drei Schritte zum Schutz Ihres Gleichgewichts",

    gesture1:
      "Benennen Sie die wichtigste Emotion, bevor Sie nach einer Lösung suchen. Eine erkannte Emotion lässt sich meist leichter durchleben.",

    gesture2:
      "Erkennen Sie das Bedürfnis hinter Ihrer Reaktion: Sicherheit, Raum, Anerkennung, Klarheit, Ruhe oder Verbindung.",

    gesture3:
      "Geben Sie sich vor einer wichtigen Entscheidung etwas Zeit, wenn die emotionale Intensität hoch ist.",

    balanceKeyLabel:
      "Ihr Schlüssel zum Gleichgewicht",

    sensitivityStrength:
      "Eine besser verstandene Sensibilität wird zur Stärke",

    closingSuffix:
      "Ihre innere Welt versucht nicht, Sie einzuschränken. Sie zeigt Ihnen, welche Bedingungen Sie benötigen, um zu lieben, zu erschaffen, zu entscheiden und sich zu entwickeln, ohne sich von sich selbst zu entfernen.",

    venusFallback:
      "Venus beschreibt, wie Sie Zuneigung geben, Liebe empfangen und nach einer Beziehung suchen, die Ihren Werten entspricht.",

    marsFallback:
      "Mars beschreibt, wie Sie reagieren, Ihre Bedürfnisse verteidigen und Ihre Energie mobilisieren, wenn die Spannung steigt.",

    neptuneFallback:
      "Neptun beschreibt Ihre intuitive Sensibilität, Ihre Vorstellungskraft und Ihre Empfänglichkeit für emotionale Stimmungen.",

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
          "Ein lebendiges, direktes Gefühlsleben, das sofort in Bewegung kommt",

        introduction:
          "Ihre innere Welt reagiert schnell. Gefühle erleben Sie häufig als Bewegung, die nach einer Antwort, Handlung oder Entscheidung verlangt. Ihre Sensibilität ist nicht passiv: Sie sucht von Natur aus einen Weg nach vorn.",

        instinctiveReaction:
          "Ihr erster Reflex besteht häufig darin, zu handeln, zu antworten oder schnell wieder Kontrolle über die Situation zu gewinnen.",

        emotionalNeed:
          "Sie brauchen emotionale Freiheit, Offenheit und das Gefühl, Ihre Reaktionen ausdrücken zu können, ohne ständig zurückgehalten zu werden.",

        protection:
          "Sie können Ihre Verletzlichkeit durch Ungeduld, Unabhängigkeit oder scheinbare Kampfbereitschaft schützen.",

        underPressure:
          "Unter Druck können Sie reagieren, bevor Sie genau erkannt haben, was Sie fühlen.",

        healing:
          "Sie finden Ruhe durch Bewegung, eine klare Entscheidung und die Möglichkeit, Gefühle in konstruktives Handeln umzuwandeln.",

        relationshipNeed:
          "Sie brauchen lebendige, ehrliche Beziehungen, die Ihre Autonomie respektieren.",

        balanceKey:
          "Schaffen Sie Raum zwischen Gefühl und Reaktion, damit Sie Ihre Antwort bewusst wählen können.",
      },

      Taurus: {
        title:
          "Eine stabile Sensibilität, die Kontinuität und Sicherheit sucht",

        introduction:
          "Ihre innere Welt braucht Zeit, um Erfahrungen aufzunehmen. Sie fühlen tief, lassen Gefühle jedoch häufig lieber etwas ruhen, bevor Sie sie ausdrücken. Äußere Stabilität beeinflusst Ihr inneres Gleichgewicht stark.",

        instinctiveReaction:
          "Ihr erster Reflex besteht darin, Ihre Orientierungspunkte zu bewahren, langsamer zu werden und zu abrupte Veränderungen zu vermeiden.",

        emotionalNeed:
          "Sie brauchen Beständigkeit, Sanftheit, materielle Sicherheit und ein vorhersehbares Umfeld.",

        protection:
          "Sie können Ihre Verletzlichkeit schützen, indem Sie an Gewohnheiten festhalten oder Dinge nicht aussprechen, die eine Beziehung destabilisieren könnten.",

        underPressure:
          "Unter Druck können Sie sich verschließen, Widerstand leisten oder lange an einer Position festhalten, obwohl sich die Situation bereits verändert hat.",

        healing:
          "Sie finden Ruhe durch Körperwahrnehmung, Erholung, einfache Gesten, Natur und die Rückkehr zu konkreten Orientierungspunkten.",

        relationshipNeed:
          "Sie brauchen Loyalität, Präsenz und regelmäßige Zeichen von Stabilität.",

        balanceKey:
          "Akzeptieren Sie, dass Entwicklung Sicherheit nicht zwangsläufig zerstört und sie manchmal sogar stärken kann.",
      },

      Gemini: {
        title:
          "Ein bewegliches Gefühlsleben, das verstehen und benennen möchte",

        introduction:
          "Ihre innere Welt verwandelt sich schnell in Gedanken, Fragen und Austauschbedürfnis. Worte für Ihre Gefühle zu finden hilft Ihnen, Abstand zu gewinnen und Ihre Erfahrung besser zu verstehen.",

        instinctiveReaction:
          "Ihr erster Reflex besteht darin, zu analysieren, zu sprechen, zu vergleichen oder eine neue Perspektive zu suchen.",

        emotionalNeed:
          "Sie brauchen geistige Bewegung, Dialog und Abwechslung in Ihrem Umfeld.",

        protection:
          "Sie können Ihre Verletzlichkeit durch Humor, Intellektualisierung oder einen schnellen Themenwechsel schützen.",

        underPressure:
          "Unter Druck können sich Ihre Gedanken vervielfachen und es erschweren, die zentrale Emotion zu erkennen.",

        healing:
          "Sie finden Ruhe durch Schreiben, Austausch, Verständnis und mehr geistigen Freiraum.",

        relationshipNeed:
          "Sie brauchen Beziehungen mit offener und anregender Kommunikation.",

        balanceKey:
          "Erklären Sie ein Gefühl nicht nur, sondern nehmen Sie sich auch Zeit, es tatsächlich zu fühlen.",
      },

      Cancer: {
        title:
          "Eine tiefe, beschützende Sensibilität mit starker Verbindung zur Erinnerung",

        introduction:
          "Ihre innere Welt ist reich, empfänglich und eng mit dem Gefühl von Zugehörigkeit verbunden. Sie nehmen Stimmungen, Veränderungen und unausgesprochene Bedürfnisse schnell wahr.",

        instinctiveReaction:
          "Ihr erster Reflex besteht darin, zu schützen, sich zurückzuziehen oder einen emotional sicheren Raum zu suchen.",

        emotionalNeed:
          "Sie brauchen Sanftheit, Intimität, Kontinuität und Beziehungen, in denen Sie ganz Sie selbst bleiben können.",

        protection:
          "Sie können Ihre Verletzlichkeit schützen, indem Sie Ihre eigenen Bedürfnisse hinter der Fürsorge für andere verstecken.",

        underPressure:
          "Unter Druck kann die Vergangenheit stark zurückkehren und Ihre Wahrnehmung der Gegenwart beeinflussen.",

        healing:
          "Sie finden Ruhe durch einen sicheren Ort, emotionalen Ausdruck und die Anerkennung Ihrer wirklichen Bedürfnisse.",

        relationshipNeed:
          "Sie brauchen Loyalität, Zärtlichkeit und beständige emotionale Präsenz.",

        balanceKey:
          "Sorgen Sie für andere, ohne deren Wohlbefinden zur Voraussetzung Ihrer eigenen Sicherheit zu machen.",
      },

      Leo: {
        title:
          "Ein warmes Gefühlsleben, das Anerkennung und Ausdruck sucht",

        introduction:
          "Ihre innere Welt braucht Ausdruck, Wärme und aufrichtige Anerkennung. Ihre Emotionen erhalten häufig eine kreative, großzügige und sichtbare Dimension.",

        instinctiveReaction:
          "Ihr erster Reflex besteht darin, auszudrücken, was Sie empfinden, oder einen Weg zu finden, Ihre Würde wiederherzustellen.",

        emotionalNeed:
          "Sie brauchen aufrichtige Aufmerksamkeit, Freude, Kreativität und ein Gefühl persönlichen Wertes.",

        protection:
          "Sie können Ihre Verletzlichkeit durch Stolz schützen oder den Eindruck vermitteln, dass Sie nichts berührt.",

        underPressure:
          "Unter Druck können Sie fehlende Anerkennung besonders stark empfinden oder Distanz als Zurückweisung deuten.",

        healing:
          "Sie finden Ruhe durch Kreativität, Zuneigung, Spiel und die Freiheit, Ihr Herz auszudrücken.",

        relationshipNeed:
          "Sie brauchen expressive, loyale und herzliche Beziehungen.",

        balanceKey:
          "Erkennen Sie Ihren eigenen Wert, ohne ständig darauf zu warten, dass andere ihn bestätigen.",
      },

      Virgo: {
        title:
          "Eine diskrete Sensibilität, die verstehen, ordnen und verbessern möchte",

        introduction:
          "Ihre innere Welt analysiert schnell, was nicht funktioniert, und sucht nach konkreten Lösungen. Zuneigung zeigen Sie möglicherweise durch Hilfe, Präsenz und Aufmerksamkeit für Details.",

        instinctiveReaction:
          "Ihr erster Reflex besteht darin, die Situation zu analysieren und nach dem zu suchen, was korrigiert werden kann.",

        emotionalNeed:
          "Sie brauchen Klarheit, Ordnung, Kohärenz und das Gefühl, sinnvoll handeln zu können.",

        protection:
          "Sie können Ihre Verletzlichkeit durch Kontrolle, Selbstkritik oder übermäßige Aufmerksamkeit für Details schützen.",

        underPressure:
          "Unter Druck können Sie sich auf Fehler, Risiken oder darauf konzentrieren, was anders hätte getan werden sollen.",

        healing:
          "Sie finden Ruhe durch einfache Handlungen, eine realistische Routine und die Möglichkeit, eine Sache nach der anderen zu lösen.",

        relationshipNeed:
          "Sie brauchen Zuverlässigkeit, Respekt und konkrete Zeichen von Aufmerksamkeit.",

        balanceKey:
          "Akzeptieren Sie Unvollkommenheit, ohne zu glauben, dass alles sofort repariert werden muss.",
      },

      Libra: {
        title:
          "Ein beziehungsorientiertes Gefühlsleben, das Harmonie und Gegenseitigkeit sucht",

        introduction:
          "Ihre innere Welt wird stark von der Qualität Ihrer Beziehungen beeinflusst. Sie reagieren empfindlich auf Spannungen, Ungerechtigkeit und Ungleichgewicht im Austausch.",

        instinctiveReaction:
          "Ihr erster Reflex besteht darin, einen Kompromiss zu suchen, Spannungen zu beruhigen oder den Standpunkt des anderen zu verstehen.",

        emotionalNeed:
          "Sie brauchen Respekt, Beziehungskultur, Fairness und ein harmonisches Umfeld.",

        protection:
          "Sie können Ihre Verletzlichkeit schützen, indem Sie Konflikten ausweichen oder Ihre Position anpassen.",

        underPressure:
          "Unter Druck kann Ihre Unentschlossenheit zunehmen, weil jede Entscheidung Auswirkungen auf eine Beziehung zu haben scheint.",

        healing:
          "Sie finden Ruhe durch ehrlichen Dialog, ein angenehmes Umfeld und Entscheidungen, die auch Ihre eigene Wahrheit respektieren.",

        relationshipNeed:
          "Sie brauchen ausgewogenen Austausch und echte Zusammenarbeit.",

        balanceKey:
          "Schaffen Sie Frieden, ohne sich selbst aus der Gleichung zu entfernen.",
      },

      Scorpio: {
        title:
          "Ein intensives, klares und tief transformierendes Gefühlsleben",

        introduction:
          "Ihre innere Welt empfindet intensiv, auch wenn Sie nicht sofort zeigen, was in Ihnen geschieht. Sie nehmen unausgesprochene Dinge, Spannungen und verborgene emotionale Bewegungen wahr.",

        instinctiveReaction:
          "Ihr erster Reflex besteht darin, zu beobachten, Ihre Privatsphäre zu schützen und das mögliche Vertrauen einzuschätzen.",

        emotionalNeed:
          "Sie brauchen Tiefe, Loyalität, Wahrheit und Beziehungen, die starke emotionale Intensität tragen können.",

        protection:
          "Sie können Ihre Verletzlichkeit durch Kontrolle, Schweigen, Misstrauen oder scheinbare Beherrschung schützen.",

        underPressure:
          "Unter Druck können Sie grübeln, Verlust erwarten oder jede verborgene Motivation verstehen wollen.",

        healing:
          "Sie finden Ruhe durch Wahrheit, das Aussprechen Zurückgehaltenen und die Möglichkeit, die Erfahrung zu verwandeln.",

        relationshipNeed:
          "Sie brauchen Engagement, tiefes Vertrauen und emotionale Aufrichtigkeit.",

        balanceKey:
          "Akzeptieren Sie Verletzlichkeit als Form von Stärke und nicht als Kontrollverlust.",
      },

      Sagittarius: {
        title:
          "Ein expansives Gefühlsleben, das Sinn und Freiheit sucht",

        introduction:
          "Ihre innere Welt braucht Raum, Bewegung und eine Perspektive, die dem Erlebten Sinn geben kann. Ihr Gleichgewicht kehrt häufig zurück, wenn Sie Ihren Blick erweitern.",

        instinctiveReaction:
          "Ihr erster Reflex besteht darin, Abstand zu gewinnen, eine Lösung zu suchen oder sich gedanklich auf die Zukunft auszurichten.",

        emotionalNeed:
          "Sie brauchen Freiheit, Hoffnung, Entdeckung und Beziehungen, die Ihr Wachstum unterstützen.",

        protection:
          "Sie können Ihre Verletzlichkeit durch Humor, Flucht nach vorn oder das Herunterspielen von Schmerz schützen.",

        underPressure:
          "Unter Druck möchten Sie eine Situation möglicherweise zu schnell verlassen, bevor Sie verstanden haben, was sie Ihnen zeigen möchte.",

        healing:
          "Sie finden Ruhe durch Bewegung, Natur, Lernen und eine umfassendere Sicht auf die Erfahrung.",

        relationshipNeed:
          "Sie brauchen Vertrauen, Raum und eine gemeinsame Richtung.",

        balanceKey:
          "Bewahren Sie Ihre Freiheit und bleiben Sie gleichzeitig bei dem präsent, was wirklich Ihre Aufmerksamkeit verlangt.",
      },

      Capricorn: {
        title:
          "Eine zurückgehaltene Sensibilität, die Kontrolle und Stabilität sucht",

        introduction:
          "Ihre innere Welt kann wesentlich sensibler sein, als Sie zeigen. Sie versuchen häufig, zuverlässig, funktional und handlungsfähig zu bleiben, selbst wenn Emotionen stark sind.",

        instinctiveReaction:
          "Ihr erster Reflex besteht darin, Kontrolle zurückzugewinnen, die Situation zu ordnen und weiterzumachen.",

        emotionalNeed:
          "Sie brauchen Stabilität, Respekt, Kontinuität und das Gefühl, sich auf sich selbst verlassen zu können.",

        protection:
          "Sie können Ihre Verletzlichkeit schützen, indem Sie emotionalen Ausdruck begrenzen oder sich unentbehrlich machen.",

        underPressure:
          "Unter Druck können Sie sich isolieren, mehr arbeiten oder glauben, alles allein tragen zu müssen.",

        healing:
          "Sie finden Ruhe durch Erholung, eine verlässliche Struktur und die Erlaubnis, Unterstützung anzunehmen.",

        relationshipNeed:
          "Sie brauchen Loyalität, Reife und echtes Engagement.",

        balanceKey:
          "Erkennen Sie, dass das Ausdrücken eines Bedürfnisses weder Ihre Stärke noch Ihre Autonomie mindert.",
      },

      Aquarius: {
        title:
          "Ein unabhängiges Gefühlsleben, das Raum und Verständnis sucht",

        introduction:
          "Ihre innere Welt braucht Abstand, um zu verstehen, was sie fühlt. Sie können Ihre Gefühle sehr klar beobachten, manchmal jedoch auf Kosten emotionaler Nähe.",

        instinctiveReaction:
          "Ihr erster Reflex besteht darin, die Situation objektiv zu analysieren oder Raum zu schaffen.",

        emotionalNeed:
          "Sie brauchen Freiheit, Freundschaft, Respekt für Ihre Besonderheit und ein nicht besitzergreifendes Umfeld.",

        protection:
          "Sie können Ihre Verletzlichkeit durch Distanz, Intellektualisierung oder übermäßige Unabhängigkeit schützen.",

        underPressure:
          "Unter Druck können Sie sich vorübergehend von Ihren Gefühlen abschneiden oder den Eindruck vermitteln, dass Sie nichts berührt.",

        healing:
          "Sie finden Ruhe durch Abstand, offenen Austausch und einen Raum, in dem Sie anders sein dürfen, ohne beurteilt zu werden.",

        relationshipNeed:
          "Sie brauchen Freiheit, geistige Verbundenheit und Authentizität.",

        balanceKey:
          "Bleiben Sie frei, ohne Distanz zu einem dauerhaften Schutzmechanismus zu machen.",
      },

      Pisces: {
        title:
          "Eine intuitive, empfängliche Sensibilität, die stark von der Atmosphäre beeinflusst wird",

        introduction:
          "Ihre innere Welt nimmt Gefühle, Stimmungen und unsichtbare Nuancen sehr fein wahr. Ihre Sensibilität kann zur Inspirationsquelle werden, benötigt jedoch auch bewussten Schutz.",

        instinctiveReaction:
          "Ihr erster Reflex besteht darin, die gesamte Situation zu spüren, bevor Sie erkennen, was tatsächlich zu Ihnen gehört.",

        emotionalNeed:
          "Sie brauchen Sanftheit, Stille, Vorstellungskraft und Raum, in dem sich Ihre Sensibilität beruhigen kann.",

        protection:
          "Sie können Ihre Verletzlichkeit durch Rückzug, Idealisierung oder das Vermeiden einer zu harten Realität schützen.",

        underPressure:
          "Unter Druck können Sie den emotionalen Zustand anderer aufnehmen oder zeitweise Ihre eigenen Orientierungspunkte verlieren.",

        healing:
          "Sie finden Ruhe durch Erholung, Kreativität, Wasser, Musik und klar definierte Grenzen.",

        relationshipNeed:
          "Sie brauchen Mitgefühl, Feinfühligkeit und aufrichtige emotionale Präsenz.",

        balanceKey:
          "Bleiben Sie offen, ohne das zu tragen, was anderen gehört.",
      },
    },

    venusStyles: {
      Aries:
        "Venus im Widder zeigt Zuneigung spontan, offen und begeistert. Sie müssen spüren, dass die Beziehung lebendig bleibt und Ihnen erlaubt, ganz Sie selbst zu sein.",

      Taurus:
        "Venus im Stier sucht Stabilität, Loyalität und greifbare Präsenz. Sie zeigen Zuneigung häufig durch Beständigkeit, Berührung, einfache Gesten und ein sicheres Umfeld.",

      Gemini:
        "Venus in den Zwillingen sucht geistige Verbundenheit, Austausch und Leichtigkeit. Kommunikation und Neugier spielen in Ihrer Art zu lieben eine zentrale Rolle.",

      Cancer:
        "Venus im Krebs zeigt Zuneigung durch Schutz, Zärtlichkeit und Fürsorge. Sie brauchen eine Bindung, in der emotionales Vertrauen allmählich wächst.",

      Leo:
        "Venus im Löwen liebt warmherzig, großzügig und loyal. Sie müssen spüren, dass die Beziehung Ihr Herz, Ihre Kreativität und Ihre Präsenz wertschätzt.",

      Virgo:
        "Venus in der Jungfrau zeigt Liebe häufig durch hilfreiche Gesten, Zuverlässigkeit und Aufmerksamkeit für Details. Sie suchen eine aufrichtige, stimmige und konkrete Beziehung.",

      Libra:
        "Venus in der Waage sucht Harmonie, Eleganz und Gegenseitigkeit. Sie brauchen Zusammenarbeit und einen Austausch, in dem sich beide Seiten respektiert fühlen.",

      Scorpio:
        "Venus im Skorpion sucht tiefe, exklusive und authentische Intimität. Sie lieben intensiv und brauchen echtes Vertrauen, bevor Sie sich vollständig öffnen.",

      Sagittarius:
        "Venus im Schützen sucht eine lebendige, freie und wachstumsorientierte Beziehung. Sie brauchen gemeinsame Visionen, Entdeckungen und Raum zur Entwicklung.",

      Capricorn:
        "Venus im Steinbock sucht Stabilität, Reife und langfristig bewiesenes Engagement. Liebe zeigen Sie häufig durch Verantwortung und dauerhafte Präsenz.",

      Aquarius:
        "Venus im Wassermann sucht eine freie, freundschaftliche Beziehung, die Individualität respektiert. Freundschaft und geistige Verbindung sind wichtig.",

      Pisces:
        "Venus in den Fischen liebt sensibel, mitfühlend und fantasievoll. Sie suchen tiefe Verbindung, müssen jedoch zugleich ausreichend klare Grenzen bewahren.",
    },

    marsStyles: {
      Aries:
        "Mars im Widder reagiert schnell und direkt. Wenn Sie etwas trifft, sucht Ihre Energie sofort nach einem Ausweg, einer Entscheidung oder einer Handlung.",

      Taurus:
        "Mars im Stier reagiert langsam, aber ausdauernd. Sie halten viel aus, bevor Sie handeln, doch sobald Sie sich entschieden haben, lässt sich Ihre Energie nur schwer umlenken.",

      Gemini:
        "Mars in den Zwillingen mobilisiert Ihre Energie durch Worte, Ideen und Austausch. Spannungen können schnell geistig oder verbal werden.",

      Cancer:
        "Mars im Krebs reagiert aus Sensibilität und Schutzinstinkt. Ihre Energie steigt deutlich, wenn Sie einen nahestehenden Menschen oder Ihre emotionale Sicherheit verteidigen müssen.",

      Leo:
        "Mars im Löwen handelt mit Stolz, Kreativität und Mut. Sie müssen spüren, dass Ihre Handlungen vollständig ausdrücken, wer Sie sind.",

      Virgo:
        "Mars in der Jungfrau mobilisiert Ihre Energie durch Analyse, Organisation und Effizienz. Sie handeln am besten, wenn Sie genau wissen, was getan werden muss.",

      Libra:
        "Mars in der Waage möchte handeln, ohne das Gleichgewicht zu zerstören. Vor einer Konfrontation können Sie zögern, engagieren sich jedoch stark, wenn Ihnen etwas ungerecht erscheint.",

      Scorpio:
        "Mars im Skorpion bündelt Ihre Energie intensiv. Sie handeln selten halbherzig und können eine Emotion lange zurückhalten, bevor sie zu einer Entscheidung wird.",

      Sagittarius:
        "Mars im Schützen handelt begeistert, offen und freiheitsliebend. Ihre Energie nimmt zu, wenn Sie ein sinnvolles Ziel verfolgen.",

      Capricorn:
        "Mars im Steinbock handelt strategisch, ausdauernd und kontrolliert. Sie kommen am besten voran, wenn Ihre Energie einem klaren und langfristigen Ziel dient.",

      Aquarius:
        "Mars im Wassermann handelt unabhängig und manchmal unvorhersehbar. Ihre Energie wird stark mobilisiert, wenn eine Idee, Freiheit oder Sache verteidigt werden muss.",

      Pisces:
        "Mars in den Fischen handelt aus Intuition, Sensibilität und Inspiration. Ihre Energie kann je nach Atmosphäre und emotionaler Bedeutung einer Handlung schwanken.",
    },

    neptuneStyles: {
      Aries:
        "Neptun im Widder kann Ihre Intuition spontan, lebendig und eng mit dem Handlungsinstinkt verbinden.",

      Taurus:
        "Neptun im Stier kann Ihre Sensibilität mit Natur, Körper, Schönheit und dem Wunsch nach Frieden verbinden.",

      Gemini:
        "Neptun in den Zwillingen kann die geistige Vorstellungskraft, das Gespür für Worte und die Wahrnehmung verschiedener Bedeutungsebenen verstärken.",

      Cancer:
        "Neptun im Krebs kann emotionales Gedächtnis, familiäre Intuition und Empfänglichkeit für Stimmungen verstärken.",

      Leo:
        "Neptun im Löwen kann Kreativität, Vorstellungskraft und den Wunsch verstärken, eine inspirierende Vision auszudrücken.",

      Virgo:
        "Neptun in der Jungfrau kann Ihre Sensibilität für Details, Fürsorge und subtile Bedürfnisse anderer erhöhen.",

      Libra:
        "Neptun in der Waage kann Beziehungen, Harmonie und Liebe idealisieren und gleichzeitig Ihre Wahrnehmung feiner Beziehungsdynamiken verstärken.",

      Scorpio:
        "Neptun im Skorpion kann Ihre Intuition für Unausgesprochenes, verborgene Gefühle und tiefe Veränderungen verstärken.",

      Sagittarius:
        "Neptun im Schützen kann Ihre Sensibilität mit Sinnsuche, Überzeugungen und einer umfassenderen Sicht des Lebens verbinden.",

      Capricorn:
        "Neptun im Steinbock kann danach streben, einer Intuition, einem Ideal oder einer inneren Vision konkrete Struktur zu geben.",

      Aquarius:
        "Neptun im Wassermann kann Ihre Sensibilität für kollektive Bewegungen, neue Ideen und gesellschaftliche Veränderungen verstärken.",

      Pisces:
        "Neptun in den Fischen verstärkt Mitgefühl, Vorstellungskraft, Intuition und Empfänglichkeit für Stimmungen deutlich.",
    },
  },

  it: {
    analysis:
      "Analisi Firma",

    innerWorld:
      "Il tuo mondo interiore",

    subtitle:
      "I tuoi bisogni emotivi, i tuoi meccanismi di protezione e il modo in cui ritrovi il tuo equilibrio.",

    emotionalPortrait:
      "Ritratto emotivo",

    instinctiveReaction:
      "Reazione istintiva",

    firstEmotionalMovement:
      "Il tuo primo movimento emotivo",

    fundamentalNeed:
      "Bisogno fondamentale",

    innerSecurity:
      "Ciò che nutre la tua sicurezza interiore",

    protectionMechanism:
      "Il tuo meccanismo di protezione",

    emotionQuote:
      "«Comprendere le tue emozioni non significa doverle controllare perfettamente. Significa imparare a riconoscere ciò che cercano di proteggere, esprimere o trasformare.»",

    fourDimensions:
      "Le tue quattro dimensioni sensibili",

    feelLoveReactPerceive:
      "Sentire, amare, reagire e percepire",

    fourDimensionsIntro:
      "La Luna descrive i tuoi bisogni istintivi e la tua sicurezza emotiva. Venere rivela il modo in cui crei il legame e ricevi affetto. Marte mostra come reagisci, difendi i tuoi bisogni e mobiliti la tua energia. Nettuno indica la tua sensibilità intuitiva e la tua ricettività alle atmosfere.",

    moon: "Luna",
    venus: "Venere",
    mars: "Marte",
    neptune: "Nettuno",

    moonShort:
      "I tuoi bisogni emotivi e le tue reazioni istintive.",

    venusShort:
      "Il tuo modo di amare e ricercare armonia.",

    marsShort:
      "La tua reazione alla tensione, al desiderio e all’azione.",

    neptuneShort:
      "La tua intuizione, immaginazione e ricettività.",

    affectiveLanguage:
      "Il tuo linguaggio affettivo",

    reactionStyle:
      "Il tuo modo di reagire",

    intuitiveSensitivity:
      "La tua sensibilità intuitiva",

    emotionalRegulation:
      "Regolazione emotiva",

    pressureTitle:
      "Riconoscere ciò che accade quando aumenta la pressione",

    pressureIntro:
      "Le tue reazioni sotto pressione non rappresentano tutta la tua personalità. Rivelano soprattutto la strategia utilizzata dal tuo mondo interiore per ritrovare rapidamente un senso di sicurezza, controllo o comprensione.",

    underPressure:
      "Sotto pressione",

    moreDifficult:
      "Ciò che può diventare più difficile",

    soothing:
      "Calma",

    returnToCenter:
      "Ciò che ti aiuta a ritrovare il tuo centro",

    relationshipNeeds:
      "I tuoi bisogni nelle relazioni",

    threeGestures:
      "Tre gesti per proteggere il tuo equilibrio",

    gesture1:
      "Dai un nome all’emozione principale prima di cercare una soluzione. Un’emozione riconosciuta diventa generalmente più facile da attraversare.",

    gesture2:
      "Identifica il bisogno dietro la tua reazione: sicurezza, spazio, riconoscimento, chiarezza, riposo o connessione.",

    gesture3:
      "Concediti del tempo prima di una decisione importante quando l’intensità emotiva è elevata.",

    balanceKeyLabel:
      "La tua chiave di equilibrio",

    sensitivityStrength:
      "Una sensibilità meglio compresa diventa una forza",

    closingSuffix:
      "Il tuo mondo interiore non cerca di limitarti. Ti informa sulle condizioni necessarie per amare, creare, decidere ed evolvere senza allontanarti da te stesso.",

    venusFallback:
      "Venere descrive il modo in cui dai affetto, ricevi amore e cerchi una relazione in armonia con i tuoi valori.",

    marsFallback:
      "Marte descrive il modo in cui reagisci, difendi i tuoi bisogni e mobiliti la tua energia quando la tensione aumenta.",

    neptuneFallback:
      "Nettuno descrive la tua sensibilità intuitiva, la tua immaginazione e la tua ricettività alle atmosfere emotive.",

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
          "Una vita emotiva viva, diretta e immediatamente mobilitata",
        introduction:
          "Il tuo mondo interiore reagisce rapidamente. Spesso vivi un’emozione come un movimento che richiede una risposta, un’azione o una decisione. La tua sensibilità non è passiva: cerca naturalmente un modo per avanzare.",
        instinctiveReaction:
          "Il tuo primo riflesso consiste spesso nell’agire, rispondere o riprendere rapidamente il controllo della situazione.",
        emotionalNeed:
          "Hai bisogno di libertà emotiva, franchezza e di sentire che le tue reazioni possono essere espresse senza essere costantemente trattenute.",
        protection:
          "Puoi proteggere la tua vulnerabilità attraverso impazienza, indipendenza o un’apparente combattività.",
        underPressure:
          "Sotto pressione, puoi reagire prima di aver identificato con precisione ciò che senti.",
        healing:
          "Ritrovi la calma attraverso il movimento, una decisione chiara e la possibilità di trasformare l’emozione in azione costruttiva.",
        relationshipNeed:
          "Hai bisogno di relazioni vive, sincere e capaci di rispettare la tua autonomia.",
        balanceKey:
          "Creare uno spazio tra emozione e reazione per scegliere consapevolmente la tua risposta.",
      },

      Taurus: {
        title:
          "Una sensibilità stabile che ricerca continuità e sicurezza",
        introduction:
          "Il tuo mondo interiore ha bisogno di tempo per assorbire le esperienze. Senti profondamente, ma spesso preferisci lasciare che l’emozione si depositi prima di esprimerla. La stabilità esterna influenza fortemente il tuo equilibrio interiore.",
        instinctiveReaction:
          "Il tuo primo riflesso consiste nel preservare i tuoi riferimenti, rallentare ed evitare cambiamenti troppo bruschi.",
        emotionalNeed:
          "Hai bisogno di costanza, dolcezza, sicurezza materiale e di un ambiente prevedibile.",
        protection:
          "Puoi proteggere la tua vulnerabilità aggrappandoti alle abitudini o evitando di esprimere ciò che potrebbe destabilizzare una relazione.",
        underPressure:
          "Sotto pressione, puoi chiuderti, resistere o mantenere una posizione molto dopo che la situazione è cambiata.",
        healing:
          "Ritrovi la calma attraverso il corpo, il riposo, i gesti semplici, la natura e il ritorno a riferimenti concreti.",
        relationshipNeed:
          "Hai bisogno di fedeltà, presenza e prove regolari di stabilità.",
        balanceKey:
          "Accettare che l’evoluzione non distrugge necessariamente la sicurezza e può talvolta rafforzarla.",
      },

      Gemini: {
        title:
          "Una vita emotiva mobile che cerca di comprendere e nominare",
        introduction:
          "Il tuo mondo interiore si trasforma rapidamente in pensieri, domande e bisogno di scambio. Mettere parole su ciò che senti ti aiuta a prendere distanza e comprendere meglio la tua esperienza.",
        instinctiveReaction:
          "Il tuo primo riflesso consiste nell’analizzare, parlare, confrontare o cercare una nuova prospettiva.",
        emotionalNeed:
          "Hai bisogno di movimento mentale, dialogo e varietà nel tuo ambiente.",
        protection:
          "Puoi proteggere la tua vulnerabilità attraverso l’umorismo, l’intellettualizzazione o cambiando rapidamente argomento.",
        underPressure:
          "Sotto pressione, i tuoi pensieri possono moltiplicarsi e rendere difficile identificare l’emozione centrale.",
        healing:
          "Ritrovi la calma attraverso la scrittura, lo scambio, la comprensione e maggiore spazio mentale.",
        relationshipNeed:
          "Hai bisogno di relazioni nelle quali la comunicazione rimane aperta e stimolante.",
        balanceKey:
          "Non limitarti a spiegare l’emozione: prenditi il tempo di sentirla davvero.",
      },

      Cancer: {
        title:
          "Una sensibilità profonda, protettiva e fortemente legata alla memoria",
        introduction:
          "Il tuo mondo interiore è ricco, ricettivo e intimamente legato al senso di appartenenza. Percepisci rapidamente atmosfere, cambiamenti d’umore e bisogni non espressi.",
        instinctiveReaction:
          "Il tuo primo riflesso consiste nel proteggere, ritirarti o cercare uno spazio emotivamente sicuro.",
        emotionalNeed:
          "Hai bisogno di dolcezza, intimità, continuità e legami nei quali puoi rimanere pienamente te stesso.",
        protection:
          "Puoi proteggere la tua vulnerabilità nascondendo i tuoi bisogni dietro le cure offerte agli altri.",
        underPressure:
          "Sotto pressione, il passato può tornare con forza e influenzare la tua percezione del presente.",
        healing:
          "Ritrovi la calma attraverso un luogo sicuro, l’espressione delle emozioni e il riconoscimento dei tuoi veri bisogni.",
        relationshipNeed:
          "Hai bisogno di lealtà, tenerezza e presenza affettiva costante.",
        balanceKey:
          "Prenderti cura degli altri senza rendere il loro benessere la condizione della tua sicurezza.",
      },

      Leo: {
        title:
          "Una vita emotiva calorosa che ricerca riconoscimento ed espressione",
        introduction:
          "Il tuo mondo interiore ha bisogno di espressione, calore e riconoscimento sincero. Le tue emozioni assumono spesso una dimensione creativa, generosa e visibile.",
        instinctiveReaction:
          "Il tuo primo riflesso consiste nell’esprimere ciò che senti o cercare un modo per ritrovare la tua dignità.",
        emotionalNeed:
          "Hai bisogno di attenzione sincera, gioia, creatività e senso del valore personale.",
        protection:
          "Puoi proteggere la tua vulnerabilità attraverso l’orgoglio o dando l’impressione che nulla ti tocchi.",
        underPressure:
          "Sotto pressione, puoi sentire fortemente la mancanza di riconoscimento o interpretare una distanza come un rifiuto.",
        healing:
          "Ritrovi la calma attraverso la creazione, l’affetto, il gioco e la libertà di esprimere il tuo cuore.",
        relationshipNeed:
          "Hai bisogno di relazioni dimostrative, leali e calorose.",
        balanceKey:
          "Riconoscere il tuo valore senza aspettare che gli altri lo confermino continuamente.",
      },

      Virgo: {
        title:
          "Una sensibilità discreta che cerca di comprendere, organizzare e migliorare",
        introduction:
          "Il tuo mondo interiore analizza rapidamente ciò che non funziona e cerca una soluzione concreta. Puoi esprimere affetto attraverso aiuto, presenza e attenzione ai dettagli.",
        instinctiveReaction:
          "Il tuo primo riflesso consiste nell’analizzare la situazione e cercare ciò che può essere corretto.",
        emotionalNeed:
          "Hai bisogno di chiarezza, ordine, coerenza e della sensazione di poter agire utilmente.",
        protection:
          "Puoi proteggere la tua vulnerabilità attraverso il controllo, l’autocritica o un’attenzione eccessiva ai dettagli.",
        underPressure:
          "Sotto pressione, puoi concentrarti sugli errori, sui rischi o su ciò che avrebbe dovuto essere fatto diversamente.",
        healing:
          "Ritrovi la calma attraverso gesti semplici, una routine realistica e la possibilità di risolvere una cosa alla volta.",
        relationshipNeed:
          "Hai bisogno di affidabilità, rispetto e attenzioni concrete.",
        balanceKey:
          "Accogliere ciò che è imperfetto senza credere che tutto debba essere immediatamente riparato.",
      },

      Libra: {
        title:
          "Una vita emotiva relazionale che ricerca armonia e reciprocità",
        introduction:
          "Il tuo mondo interiore è fortemente influenzato dalla qualità delle tue relazioni. Sei sensibile alle tensioni, alle ingiustizie e agli squilibri negli scambi.",
        instinctiveReaction:
          "Il tuo primo riflesso consiste nel cercare un compromesso, calmare la tensione o comprendere il punto di vista dell’altro.",
        emotionalNeed:
          "Hai bisogno di rispetto, eleganza relazionale, equità e di un ambiente armonioso.",
        protection:
          "Puoi proteggere la tua vulnerabilità evitando il conflitto o adattando la tua posizione.",
        underPressure:
          "Sotto pressione, l’esitazione può aumentare perché ogni scelta sembra avere un effetto su una relazione.",
        healing:
          "Ritrovi la calma attraverso un dialogo sincero, un ambiente piacevole e una decisione che rispetta anche la tua verità.",
        relationshipNeed:
          "Hai bisogno di scambi equilibrati e vera cooperazione.",
        balanceKey:
          "Costruire la pace senza toglierti dall’equazione.",
      },

      Scorpio: {
        title:
          "Una vita emotiva intensa, lucida e profondamente trasformativa",
        introduction:
          "Il tuo mondo interiore sente con forza, anche quando non mostri subito ciò che ti attraversa. Percepisci i non detti, le tensioni e i movimenti emotivi nascosti.",
        instinctiveReaction:
          "Il tuo primo riflesso consiste nell’osservare, proteggere la tua intimità e valutare la fiducia possibile.",
        emotionalNeed:
          "Hai bisogno di profondità, lealtà, verità e relazioni capaci di sostenere una forte intensità emotiva.",
        protection:
          "Puoi proteggere la tua vulnerabilità attraverso controllo, silenzio, diffidenza o un’apparente padronanza.",
        underPressure:
          "Sotto pressione, puoi rimuginare, anticipare una perdita o cercare di comprendere ogni motivazione nascosta.",
        healing:
          "Ritrovi la calma attraverso la verità, l’espressione di ciò che è stato trattenuto e la possibilità di trasformare l’esperienza.",
        relationshipNeed:
          "Hai bisogno di impegno, fiducia profonda e sincerità emotiva.",
        balanceKey:
          "Accettare la vulnerabilità come una forma di potere e non come una perdita di controllo.",
      },

      Sagittarius: {
        title:
          "Una vita emotiva espansiva che ricerca significato e libertà",
        introduction:
          "Il tuo mondo interiore ha bisogno di spazio, movimento e di una prospettiva capace di dare significato a ciò che accade. Ritrovi spesso il tuo equilibrio ampliando la tua visione.",
        instinctiveReaction:
          "Il tuo primo riflesso consiste nel prendere distanza, cercare una soluzione o proiettarti verso il futuro.",
        emotionalNeed:
          "Hai bisogno di libertà, speranza, scoperta e relazioni che sostengono la tua crescita.",
        protection:
          "Puoi proteggere la tua vulnerabilità attraverso l’umorismo, la fuga in avanti o minimizzando il dolore.",
        underPressure:
          "Sotto pressione, puoi voler lasciare troppo rapidamente una situazione prima di aver compreso ciò che cerca di insegnarti.",
        healing:
          "Ritrovi la calma attraverso il movimento, la natura, l’apprendimento e una visione più ampia dell’esperienza.",
        relationshipNeed:
          "Hai bisogno di fiducia, spazio e una direzione comune.",
        balanceKey:
          "Conservare la tua libertà rimanendo presente a ciò che richiede realmente la tua attenzione.",
      },

      Capricorn: {
        title:
          "Una sensibilità contenuta che ricerca padronanza e solidità",
        introduction:
          "Il tuo mondo interiore può essere molto più sensibile di quanto mostri. Cerchi spesso di rimanere affidabile, funzionale e capace di affrontare le situazioni anche quando l’emozione è forte.",
        instinctiveReaction:
          "Il tuo primo riflesso consiste nel riprendere il controllo, organizzare la situazione e continuare ad avanzare.",
        emotionalNeed:
          "Hai bisogno di stabilità, rispetto, continuità e della sensazione di poter contare su te stesso.",
        protection:
          "Puoi proteggere la tua vulnerabilità limitando l’espressione emotiva o rendendoti indispensabile.",
        underPressure:
          "Sotto pressione, puoi isolarti, lavorare di più o credere di dover portare tutto da solo.",
        healing:
          "Ritrovi la calma attraverso il riposo, una struttura rassicurante e il permesso di ricevere sostegno.",
        relationshipNeed:
          "Hai bisogno di fedeltà, maturità e impegno reale.",
        balanceKey:
          "Riconoscere che esprimere un bisogno non diminuisce né la tua forza né la tua autonomia.",
      },

      Aquarius: {
        title:
          "Una vita emotiva indipendente che ricerca spazio e comprensione",
        introduction:
          "Il tuo mondo interiore ha bisogno di distanza per comprendere ciò che sente. Puoi osservare le tue emozioni con grande lucidità, ma talvolta al prezzo di una certa distanza.",
        instinctiveReaction:
          "Il tuo primo riflesso consiste nell’analizzare la situazione in modo obiettivo o prendere spazio.",
        emotionalNeed:
          "Hai bisogno di libertà, amicizia, rispetto della tua differenza e di un ambiente non possessivo.",
        protection:
          "Puoi proteggere la tua vulnerabilità attraverso il distacco, l’intellettualizzazione o un’indipendenza eccessiva.",
        underPressure:
          "Sotto pressione, puoi scollegarti temporaneamente dalle emozioni o dare l’impressione che nulla ti tocchi.",
        healing:
          "Ritrovi la calma attraverso la distanza, gli scambi aperti e uno spazio nel quale puoi essere diverso senza essere giudicato.",
        relationshipNeed:
          "Hai bisogno di libertà, complicità mentale e autenticità.",
        balanceKey:
          "Rimanere libero senza trasformare la distanza in protezione permanente.",
      },

      Pisces: {
        title:
          "Una sensibilità intuitiva, ricettiva e fortemente influenzata dall’atmosfera",
        introduction:
          "Il tuo mondo interiore percepisce emozioni, atmosfere e sfumature invisibili con grande finezza. La tua sensibilità può diventare fonte d’ispirazione, ma richiede anche una protezione consapevole.",
        instinctiveReaction:
          "Il tuo primo riflesso consiste nel sentire l’insieme della situazione prima di identificare ciò che ti appartiene realmente.",
        emotionalNeed:
          "Hai bisogno di dolcezza, silenzio, immaginazione e di uno spazio nel quale la tua sensibilità possa depositarsi.",
        protection:
          "Puoi proteggere la tua vulnerabilità attraverso il ritiro, l’idealizzazione o evitando una realtà troppo dura.",
        underPressure:
          "Sotto pressione, puoi assorbire lo stato emotivo degli altri o perdere temporaneamente i tuoi punti di riferimento.",
        healing:
          "Ritrovi la calma attraverso il riposo, la creazione, l’acqua, la musica e limiti chiaramente definiti.",
        relationshipNeed:
          "Hai bisogno di compassione, delicatezza e presenza emotiva sincera.",
        balanceKey:
          "Rimanere aperto senza portare ciò che appartiene agli altri.",
      },
    },

    venusStyles: {
      Aries:
        "Venere in Ariete esprime affetto con spontaneità, franchezza ed entusiasmo. Hai bisogno di sentire che la relazione rimane viva e ti permette di essere pienamente te stesso.",
      Taurus:
        "Venere in Toro ricerca stabilità, fedeltà e presenza concreta. Esprimi spesso affetto attraverso costanza, contatto, gesti semplici e la creazione di un ambiente sicuro.",
      Gemini:
        "Venere in Gemelli ricerca complicità mentale, scambio e leggerezza. Comunicazione e curiosità hanno un ruolo essenziale nel tuo modo di amare.",
      Cancer:
        "Venere in Cancro esprime affetto attraverso protezione, tenerezza e cura. Hai bisogno di un legame nel quale la fiducia emotiva cresca progressivamente.",
      Leo:
        "Venere in Leone ama con calore, generosità e lealtà. Hai bisogno di sentire che la relazione valorizza il tuo cuore, la tua creatività e la tua presenza.",
      Virgo:
        "Venere in Vergine esprime spesso l’amore attraverso gesti utili, affidabilità e attenzione ai dettagli. Cerchi una relazione sincera, coerente e concreta.",
      Libra:
        "Venere in Bilancia ricerca armonia, eleganza e reciprocità. Hai bisogno di cooperazione e di uno scambio nel quale ogni persona si senta rispettata.",
      Scorpio:
        "Venere in Scorpione ricerca un’intimità profonda, esclusiva e autentica. Ami con intensità e hai bisogno di vera fiducia per aprirti completamente.",
      Sagittarius:
        "Venere in Sagittario ricerca una relazione viva, libera e capace di favorire la crescita. Hai bisogno di condividere una visione, scoperte e uno spazio di evoluzione.",
      Capricorn:
        "Venere in Capricorno ricerca stabilità, maturità e un impegno dimostrato nel tempo. Esprimi spesso l’amore attraverso responsabilità e presenza duratura.",
      Aquarius:
        "Venere in Acquario ricerca una relazione libera, complice e rispettosa dell’individualità. Amicizia e connessione intellettuale hanno grande importanza.",
      Pisces:
        "Venere in Pesci ama con sensibilità, compassione e immaginazione. Cerchi una connessione profonda, ma devi anche preservare limiti sufficientemente chiari.",
    },

    marsStyles: {
      Aries:
        "Marte in Ariete reagisce rapidamente e direttamente. Quando qualcosa ti tocca, la tua energia cerca immediatamente una via d’uscita, una decisione o un’azione.",
      Taurus:
        "Marte in Toro reagisce lentamente ma con perseveranza. Sopporti molto prima di muoverti, ma una volta impegnato la tua energia diventa difficile da deviare.",
      Gemini:
        "Marte in Gemelli mobilita la tua energia attraverso parole, idee e scambi. Le tensioni possono diventare rapidamente mentali o verbali.",
      Cancer:
        "Marte in Cancro reagisce attraverso sensibilità e istinto protettivo. La tua energia aumenta fortemente quando devi difendere una persona cara o la tua sicurezza emotiva.",
      Leo:
        "Marte in Leone agisce con orgoglio, creatività e coraggio. Hai bisogno di sentire che le tue azioni esprimono pienamente chi sei.",
      Virgo:
        "Marte in Vergine mobilita la tua energia attraverso analisi, organizzazione e ricerca di efficacia. Agisci meglio quando sai esattamente ciò che deve essere fatto.",
      Libra:
        "Marte in Bilancia cerca di agire senza distruggere l’equilibrio. Puoi esitare prima di affrontare un conflitto, ma diventi molto determinato quando una situazione ti sembra ingiusta.",
      Scorpio:
        "Marte in Scorpione concentra la tua energia con intensità. Raramente agisci a metà e puoi trattenere a lungo un’emozione prima di trasformarla in una decisione.",
      Sagittarius:
        "Marte in Sagittario agisce con entusiasmo, franchezza e bisogno di libertà. La tua energia aumenta quando persegui un obiettivo ricco di significato.",
      Capricorn:
        "Marte in Capricorno agisce con strategia, resistenza e controllo. Avanzi meglio quando la tua energia serve un obiettivo chiaro e duraturo.",
      Aquarius:
        "Marte in Acquario agisce in modo indipendente e talvolta imprevedibile. La tua energia si mobilita fortemente quando devi difendere un’idea, una libertà o una causa.",
      Pisces:
        "Marte in Pesci agisce attraverso intuizione, sensibilità e ispirazione. La tua energia può fluttuare secondo l’atmosfera e il significato emotivo dell’azione.",
    },

    neptuneStyles: {
      Aries:
        "Nettuno in Ariete può rendere la tua intuizione spontanea, viva e collegata all’istinto di agire.",
      Taurus:
        "Nettuno in Toro può collegare la tua sensibilità alla natura, al corpo, alla bellezza e alla ricerca di pace.",
      Gemini:
        "Nettuno in Gemelli può amplificare l’immaginazione mentale, la percezione delle parole e la capacità di cogliere più livelli di significato.",
      Cancer:
        "Nettuno in Cancro può rafforzare la memoria emotiva, l’intuizione familiare e la ricettività alle atmosfere.",
      Leo:
        "Nettuno in Leone può amplificare creatività, immaginazione e desiderio di esprimere una visione ispirante.",
      Virgo:
        "Nettuno in Vergine può rendere la tua sensibilità attenta ai dettagli, alla cura e ai bisogni sottili degli altri.",
      Libra:
        "Nettuno in Bilancia può idealizzare la relazione, l’armonia e l’amore, sviluppando al tempo stesso grande finezza nella percezione degli scambi.",
      Scorpio:
        "Nettuno in Scorpione può amplificare la tua intuizione rispetto ai non detti, alle emozioni nascoste e alle trasformazioni profonde.",
      Sagittarius:
        "Nettuno in Sagittario può collegare la tua sensibilità alla ricerca di significato, alle convinzioni e a una visione più ampia dell’esistenza.",
      Capricorn:
        "Nettuno in Capricorno può cercare di dare struttura concreta a un’intuizione, un ideale o una visione interiore.",
      Aquarius:
        "Nettuno in Acquario può amplificare la tua sensibilità ai movimenti collettivi, alle nuove idee e alle trasformazioni sociali.",
      Pisces:
        "Nettuno in Pesci amplifica fortemente compassione, immaginazione, intuizione e ricettività alle atmosfere.",
    },
  },

  pt: {
    analysis:
      "Análise Assinatura",

    innerWorld:
      "Seu mundo interior",

    subtitle:
      "Suas necessidades emocionais, seus mecanismos de proteção e a maneira como você recupera seu equilíbrio.",

    emotionalPortrait:
      "Retrato emocional",

    instinctiveReaction:
      "Reação instintiva",

    firstEmotionalMovement:
      "Seu primeiro movimento emocional",

    fundamentalNeed:
      "Necessidade fundamental",

    innerSecurity:
      "O que nutre sua segurança interior",

    protectionMechanism:
      "Seu mecanismo de proteção",

    emotionQuote:
      "“Compreender suas emoções não significa ter de controlá-las perfeitamente. Significa aprender a reconhecer aquilo que elas procuram proteger, expressar ou transformar.”",

    fourDimensions:
      "Suas quatro dimensões sensíveis",

    feelLoveReactPerceive:
      "Sentir, amar, reagir e perceber",

    fourDimensionsIntro:
      "A Lua descreve suas necessidades instintivas e sua segurança emocional. Vênus revela a maneira como você cria vínculos e recebe afeto. Marte mostra como você reage, defende suas necessidades e mobiliza sua energia. Netuno indica sua sensibilidade intuitiva e sua receptividade aos ambientes.",

    moon: "Lua",
    venus: "Vênus",
    mars: "Marte",
    neptune: "Netuno",

    moonShort:
      "Suas necessidades emocionais e suas reações instintivas.",

    venusShort:
      "Sua maneira de amar e buscar harmonia.",

    marsShort:
      "Sua reação diante da tensão, do desejo e da ação.",

    neptuneShort:
      "Sua intuição, imaginação e receptividade.",

    affectiveLanguage:
      "Sua linguagem afetiva",

    reactionStyle:
      "Sua maneira de reagir",

    intuitiveSensitivity:
      "Sua sensibilidade intuitiva",

    emotionalRegulation:
      "Regulação emocional",

    pressureTitle:
      "Reconhecer o que acontece quando a pressão aumenta",

    pressureIntro:
      "Suas reações sob pressão não representam toda a sua personalidade. Elas revelam principalmente a estratégia que seu mundo interior utiliza para recuperar rapidamente uma sensação de segurança, controle ou compreensão.",

    underPressure:
      "Sob pressão",

    moreDifficult:
      "O que pode se tornar mais difícil",

    soothing:
      "Acalmar",

    returnToCenter:
      "O que ajuda você a recuperar seu centro",

    relationshipNeeds:
      "Suas necessidades nos relacionamentos",

    threeGestures:
      "Três ações para proteger seu equilíbrio",

    gesture1:
      "Dê um nome à emoção principal antes de procurar uma solução. Uma emoção reconhecida geralmente se torna mais fácil de atravessar.",

    gesture2:
      "Identifique a necessidade por trás da sua reação: segurança, espaço, reconhecimento, clareza, descanso ou conexão.",

    gesture3:
      "Dê a si mesmo algum tempo antes de tomar uma decisão importante quando a intensidade emocional estiver elevada.",

    balanceKeyLabel:
      "Sua chave de equilíbrio",

    sensitivityStrength:
      "Uma sensibilidade melhor compreendida se torna uma força",

    closingSuffix:
      "Seu mundo interior não procura limitar você. Ele informa sobre as condições necessárias para amar, criar, decidir e evoluir sem se afastar de si mesmo.",

    venusFallback:
      "Vênus descreve sua maneira de dar afeto, receber amor e buscar um relacionamento que corresponda aos seus valores.",

    marsFallback:
      "Marte descreve sua maneira de reagir, defender suas necessidades e mobilizar sua energia quando a tensão aumenta.",

    neptuneFallback:
      "Netuno descreve sua sensibilidade intuitiva, sua imaginação e sua receptividade aos ambientes emocionais.",

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
          "Uma vida emocional viva, direta e imediatamente mobilizada",
        introduction:
          "Seu mundo interior reage rapidamente. Você frequentemente sente uma emoção como um movimento que exige uma resposta, ação ou decisão. Sua sensibilidade não é passiva: ela naturalmente procura uma maneira de avançar.",
        instinctiveReaction:
          "Seu primeiro reflexo costuma ser agir, responder ou recuperar rapidamente o controle da situação.",
        emotionalNeed:
          "Você precisa de liberdade emocional, franqueza e sentir que suas reações podem ser expressas sem serem constantemente contidas.",
        protection:
          "Você pode proteger sua vulnerabilidade através da impaciência, da independência ou de uma aparente combatividade.",
        underPressure:
          "Sob pressão, você pode reagir antes de identificar precisamente aquilo que está sentindo.",
        healing:
          "Você recupera a calma através do movimento, de uma decisão clara e da possibilidade de transformar a emoção em ação construtiva.",
        relationshipNeed:
          "Você precisa de relações vivas, honestas e capazes de respeitar sua autonomia.",
        balanceKey:
          "Criar um espaço entre a emoção e a reação para escolher conscientemente sua resposta.",
      },

      Taurus: {
        title:
          "Uma sensibilidade estável que busca continuidade e segurança",
        introduction:
          "Seu mundo interior precisa de tempo para absorver as experiências. Você sente profundamente, mas muitas vezes prefere deixar a emoção se acomodar antes de expressá-la. A estabilidade exterior influencia fortemente seu equilíbrio interior.",
        instinctiveReaction:
          "Seu primeiro reflexo consiste em preservar suas referências, diminuir o ritmo e evitar mudanças muito bruscas.",
        emotionalNeed:
          "Você precisa de constância, suavidade, segurança material e um ambiente previsível.",
        protection:
          "Você pode proteger sua vulnerabilidade apegando-se aos hábitos ou evitando expressar aquilo que poderia desestabilizar uma relação.",
        underPressure:
          "Sob pressão, você pode se fechar, resistir ou manter uma posição muito depois de a situação ter evoluído.",
        healing:
          "Você recupera a calma através do corpo, do descanso, de gestos simples, da natureza e do retorno a referências concretas.",
        relationshipNeed:
          "Você precisa de fidelidade, presença e demonstrações regulares de estabilidade.",
        balanceKey:
          "Aceitar que a evolução não destrói necessariamente a segurança e pode às vezes fortalecê-la.",
      },

      Gemini: {
        title:
          "Uma vida emocional móvel que procura compreender e nomear",
        introduction:
          "Seu mundo interior rapidamente se transforma em pensamentos, perguntas e necessidade de troca. Colocar em palavras aquilo que sente ajuda você a ganhar distância e compreender melhor sua experiência.",
        instinctiveReaction:
          "Seu primeiro reflexo consiste em analisar, falar, comparar ou buscar uma nova perspectiva.",
        emotionalNeed:
          "Você precisa de movimento mental, diálogo e variedade no ambiente.",
        protection:
          "Você pode proteger sua vulnerabilidade através do humor, da intelectualização ou mudando rapidamente de assunto.",
        underPressure:
          "Sob pressão, seus pensamentos podem se multiplicar e dificultar a identificação da emoção central.",
        healing:
          "Você recupera a calma através da escrita, da troca, da compreensão e de maior espaço mental.",
        relationshipNeed:
          "Você precisa de relações nas quais a comunicação permaneça aberta e estimulante.",
        balanceKey:
          "Não apenas explicar a emoção, mas também reservar tempo para realmente senti-la.",
      },

      Cancer: {
        title:
          "Uma sensibilidade profunda, protetora e fortemente ligada à memória",
        introduction:
          "Seu mundo interior é rico, receptivo e intimamente ligado ao sentimento de pertencimento. Você percebe rapidamente ambientes, mudanças de humor e necessidades não expressas.",
        instinctiveReaction:
          "Seu primeiro reflexo consiste em proteger, se retirar ou buscar um espaço emocionalmente seguro.",
        emotionalNeed:
          "Você precisa de suavidade, intimidade, continuidade e vínculos nos quais possa permanecer plenamente você mesmo.",
        protection:
          "Você pode proteger sua vulnerabilidade escondendo suas necessidades atrás do cuidado que oferece aos outros.",
        underPressure:
          "Sob pressão, o passado pode retornar com força e influenciar sua percepção do presente.",
        healing:
          "Você recupera a calma através de um lugar seguro, da expressão das emoções e do reconhecimento das suas verdadeiras necessidades.",
        relationshipNeed:
          "Você precisa de lealdade, ternura e presença afetiva constante.",
        balanceKey:
          "Cuidar dos outros sem transformar o bem-estar deles na condição da sua própria segurança.",
      },

      Leo: {
        title:
          "Uma vida emocional calorosa que busca reconhecimento e expressão",
        introduction:
          "Seu mundo interior precisa de expressão, calor e reconhecimento sincero. Suas emoções frequentemente assumem uma dimensão criativa, generosa e visível.",
        instinctiveReaction:
          "Seu primeiro reflexo consiste em expressar aquilo que sente ou procurar uma maneira de recuperar sua dignidade.",
        emotionalNeed:
          "Você precisa de atenção sincera, alegria, criatividade e sentimento de valor pessoal.",
        protection:
          "Você pode proteger sua vulnerabilidade através do orgulho ou dando a impressão de que nada o afeta.",
        underPressure:
          "Sob pressão, você pode sentir intensamente a falta de reconhecimento ou interpretar uma distância como rejeição.",
        healing:
          "Você recupera a calma através da criação, do afeto, do jogo e da liberdade de expressar seu coração.",
        relationshipNeed:
          "Você precisa de relações demonstrativas, leais e calorosas.",
        balanceKey:
          "Reconhecer seu próprio valor sem esperar que os outros o confirmem constantemente.",
      },

      Virgo: {
        title:
          "Uma sensibilidade discreta que procura compreender, organizar e melhorar",
        introduction:
          "Seu mundo interior analisa rapidamente aquilo que não funciona e procura uma solução concreta. Você pode expressar afeto através da ajuda, da presença e da atenção aos detalhes.",
        instinctiveReaction:
          "Seu primeiro reflexo consiste em analisar a situação e procurar aquilo que pode ser corrigido.",
        emotionalNeed:
          "Você precisa de clareza, ordem, coerência e sentir que pode agir de maneira útil.",
        protection:
          "Você pode proteger sua vulnerabilidade através do controle, da autocrítica ou de atenção excessiva aos detalhes.",
        underPressure:
          "Sob pressão, você pode se concentrar nos erros, nos riscos ou naquilo que deveria ter sido feito de outra forma.",
        healing:
          "Você recupera a calma através de gestos simples, de uma rotina realista e da possibilidade de resolver uma coisa de cada vez.",
        relationshipNeed:
          "Você precisa de confiabilidade, respeito e atenções concretas.",
        balanceKey:
          "Aceitar aquilo que é imperfeito sem acreditar que tudo precisa ser imediatamente reparado.",
      },

      Libra: {
        title:
          "Uma vida emocional relacional que busca harmonia e reciprocidade",
        introduction:
          "Seu mundo interior é fortemente influenciado pela qualidade dos seus relacionamentos. Você é sensível a tensões, injustiças e desequilíbrios nas trocas.",
        instinctiveReaction:
          "Seu primeiro reflexo consiste em buscar um compromisso, acalmar a tensão ou compreender o ponto de vista do outro.",
        emotionalNeed:
          "Você precisa de respeito, elegância relacional, equidade e um ambiente harmonioso.",
        protection:
          "Você pode proteger sua vulnerabilidade evitando conflitos ou adaptando sua posição.",
        underPressure:
          "Sob pressão, a hesitação pode aumentar porque cada escolha parece ter um efeito sobre um relacionamento.",
        healing:
          "Você recupera a calma através de diálogo honesto, um ambiente agradável e uma decisão que também respeite sua verdade.",
        relationshipNeed:
          "Você precisa de trocas equilibradas e verdadeira cooperação.",
        balanceKey:
          "Construir paz sem se retirar da equação.",
      },

      Scorpio: {
        title:
          "Uma vida emocional intensa, lúcida e profundamente transformadora",
        introduction:
          "Seu mundo interior sente com força, mesmo quando você não mostra imediatamente aquilo que o atravessa. Você percebe o não dito, as tensões e os movimentos emocionais ocultos.",
        instinctiveReaction:
          "Seu primeiro reflexo consiste em observar, proteger sua intimidade e avaliar a confiança possível.",
        emotionalNeed:
          "Você precisa de profundidade, lealdade, verdade e relações capazes de sustentar forte intensidade emocional.",
        protection:
          "Você pode proteger sua vulnerabilidade através do controle, silêncio, desconfiança ou aparente domínio.",
        underPressure:
          "Sob pressão, você pode ruminar, antecipar uma perda ou tentar compreender cada motivação oculta.",
        healing:
          "Você recupera a calma através da verdade, da expressão daquilo que foi retido e da possibilidade de transformar a experiência.",
        relationshipNeed:
          "Você precisa de compromisso, confiança profunda e sinceridade emocional.",
        balanceKey:
          "Aceitar a vulnerabilidade como uma forma de poder e não como perda de controle.",
      },

      Sagittarius: {
        title:
          "Uma vida emocional expansiva que busca sentido e liberdade",
        introduction:
          "Seu mundo interior precisa de espaço, movimento e uma perspectiva capaz de dar sentido ao que acontece. Você frequentemente recupera seu equilíbrio ampliando sua visão.",
        instinctiveReaction:
          "Seu primeiro reflexo consiste em tomar distância, procurar uma solução ou projetar-se para o futuro.",
        emotionalNeed:
          "Você precisa de liberdade, esperança, descoberta e relações que apoiem seu crescimento.",
        protection:
          "Você pode proteger sua vulnerabilidade através do humor, da fuga para a frente ou minimizando a dor.",
        underPressure:
          "Sob pressão, você pode querer sair de uma situação rápido demais antes de compreender aquilo que ela procura ensinar.",
        healing:
          "Você recupera a calma através do movimento, da natureza, da aprendizagem e de uma visão mais ampla da experiência.",
        relationshipNeed:
          "Você precisa de confiança, espaço e uma direção comum.",
        balanceKey:
          "Preservar sua liberdade permanecendo presente diante daquilo que realmente exige sua atenção.",
      },

      Capricorn: {
        title:
          "Uma sensibilidade contida que busca domínio e solidez",
        introduction:
          "Seu mundo interior pode ser muito mais sensível do que você mostra. Você frequentemente procura permanecer confiável, funcional e capaz de enfrentar as situações, mesmo quando a emoção é forte.",
        instinctiveReaction:
          "Seu primeiro reflexo consiste em recuperar o controle, organizar a situação e continuar avançando.",
        emotionalNeed:
          "Você precisa de estabilidade, respeito, continuidade e sentir que pode contar consigo mesmo.",
        protection:
          "Você pode proteger sua vulnerabilidade limitando a expressão emocional ou tornando-se indispensável.",
        underPressure:
          "Sob pressão, você pode se isolar, trabalhar mais ou acreditar que deve carregar tudo sozinho.",
        healing:
          "Você recupera a calma através do descanso, de uma estrutura tranquilizadora e da permissão de receber apoio.",
        relationshipNeed:
          "Você precisa de fidelidade, maturidade e compromisso real.",
        balanceKey:
          "Reconhecer que expressar uma necessidade não diminui nem sua força nem sua autonomia.",
      },

      Aquarius: {
        title:
          "Uma vida emocional independente que busca espaço e compreensão",
        introduction:
          "Seu mundo interior precisa de distância para compreender aquilo que sente. Você pode observar suas emoções com muita lucidez, mas às vezes ao preço de certa distância.",
        instinctiveReaction:
          "Seu primeiro reflexo consiste em analisar a situação de forma objetiva ou tomar espaço.",
        emotionalNeed:
          "Você precisa de liberdade, amizade, respeito pela sua diferença e um ambiente não possessivo.",
        protection:
          "Você pode proteger sua vulnerabilidade através do distanciamento, da intelectualização ou de independência excessiva.",
        underPressure:
          "Sob pressão, você pode temporariamente se desconectar das emoções ou dar a impressão de que nada o afeta.",
        healing:
          "Você recupera a calma através da distância, das trocas abertas e de um espaço no qual possa ser diferente sem ser julgado.",
        relationshipNeed:
          "Você precisa de liberdade, cumplicidade mental e autenticidade.",
        balanceKey:
          "Permanecer livre sem transformar a distância em proteção permanente.",
      },

      Pisces: {
        title:
          "Uma sensibilidade intuitiva, receptiva e fortemente influenciada pelo ambiente",
        introduction:
          "Seu mundo interior percebe emoções, ambientes e nuances invisíveis com grande sutileza. Sua sensibilidade pode se tornar fonte de inspiração, mas também exige proteção consciente.",
        instinctiveReaction:
          "Seu primeiro reflexo consiste em sentir o conjunto da situação antes de identificar aquilo que realmente pertence a você.",
        emotionalNeed:
          "Você precisa de suavidade, silêncio, imaginação e um espaço no qual sua sensibilidade possa se acomodar.",
        protection:
          "Você pode proteger sua vulnerabilidade através do recolhimento, da idealização ou evitando uma realidade dura demais.",
        underPressure:
          "Sob pressão, você pode absorver o estado emocional dos outros ou perder temporariamente suas próprias referências.",
        healing:
          "Você recupera a calma através do descanso, da criação, da água, da música e de limites claramente definidos.",
        relationshipNeed:
          "Você precisa de compaixão, delicadeza e presença emocional sincera.",
        balanceKey:
          "Permanecer aberto sem carregar aquilo que pertence aos outros.",
      },
    },

    venusStyles: {
      Aries:
        "Vênus em Áries expressa afeto com espontaneidade, franqueza e entusiasmo. Você precisa sentir que o relacionamento permanece vivo e permite que continue plenamente sendo você mesmo.",
      Taurus:
        "Vênus em Touro busca estabilidade, fidelidade e presença tangível. Você frequentemente expressa afeto através da constância, do contato, de gestos simples e da criação de um ambiente seguro.",
      Gemini:
        "Vênus em Gêmeos busca cumplicidade mental, troca e leveza. Comunicação e curiosidade ocupam um lugar essencial na sua maneira de amar.",
      Cancer:
        "Vênus em Câncer expressa afeto através de proteção, ternura e cuidado. Você precisa de um vínculo no qual a confiança emocional seja construída gradualmente.",
      Leo:
        "Vênus em Leão ama com calor, generosidade e lealdade. Você precisa sentir que o relacionamento valoriza seu coração, sua criatividade e sua presença.",
      Virgo:
        "Vênus em Virgem frequentemente expressa amor através de gestos úteis, confiabilidade e atenção aos detalhes. Você busca uma relação sincera, coerente e concreta.",
      Libra:
        "Vênus em Libra busca harmonia, elegância e reciprocidade. Você precisa de cooperação e de uma troca na qual cada pessoa se sinta respeitada.",
      Scorpio:
        "Vênus em Escorpião busca intimidade profunda, exclusiva e autêntica. Você ama intensamente e precisa de verdadeira confiança para se abrir completamente.",
      Sagittarius:
        "Vênus em Sagitário busca uma relação viva, livre e capaz de favorecer crescimento. Você precisa compartilhar uma visão, descobertas e espaço para evolução.",
      Capricorn:
        "Vênus em Capricórnio busca estabilidade, maturidade e compromisso demonstrado ao longo do tempo. Você frequentemente expressa amor através da responsabilidade e de presença duradoura.",
      Aquarius:
        "Vênus em Aquário busca uma relação livre, cúmplice e respeitosa com a individualidade. Amizade e conexão intelectual ocupam um lugar importante.",
      Pisces:
        "Vênus em Peixes ama com sensibilidade, compaixão e imaginação. Você busca conexão profunda, mas também precisa preservar limites suficientemente claros.",
    },

    marsStyles: {
      Aries:
        "Marte em Áries reage rapidamente e diretamente. Quando algo o atinge, sua energia procura imediatamente uma saída, decisão ou ação.",
      Taurus:
        "Marte em Touro reage lentamente, mas com perseverança. Você suporta muito antes de se mover, porém, uma vez envolvido, sua energia se torna difícil de desviar.",
      Gemini:
        "Marte em Gêmeos mobiliza sua energia através de palavras, ideias e trocas. As tensões podem rapidamente se tornar mentais ou verbais.",
      Cancer:
        "Marte em Câncer reage a partir da sensibilidade e do instinto protetor. Sua energia aumenta fortemente quando você precisa defender alguém próximo ou sua segurança emocional.",
      Leo:
        "Marte em Leão age com orgulho, criatividade e coragem. Você precisa sentir que suas ações expressam plenamente quem você é.",
      Virgo:
        "Marte em Virgem mobiliza sua energia através da análise, da organização e da busca por eficiência. Você age melhor quando sabe exatamente o que precisa ser feito.",
      Libra:
        "Marte em Libra procura agir sem destruir o equilíbrio. Você pode hesitar antes de confrontar, mas se torna muito envolvido quando uma situação parece injusta.",
      Scorpio:
        "Marte em Escorpião concentra sua energia com intensidade. Você raramente age pela metade e pode reter uma emoção por muito tempo antes de transformá-la em decisão.",
      Sagittarius:
        "Marte em Sagitário age com entusiasmo, franqueza e necessidade de liberdade. Sua energia aumenta quando você persegue um objetivo cheio de sentido.",
      Capricorn:
        "Marte em Capricórnio age com estratégia, resistência e controle. Você avança melhor quando sua energia serve a um objetivo claro e duradouro.",
      Aquarius:
        "Marte em Aquário age de maneira independente e às vezes imprevisível. Sua energia se mobiliza fortemente quando é preciso defender uma ideia, liberdade ou causa.",
      Pisces:
        "Marte em Peixes age a partir da intuição, sensibilidade e inspiração. Sua energia pode variar de acordo com o ambiente e o significado emocional da ação.",
    },

    neptuneStyles: {
      Aries:
        "Netuno em Áries pode tornar sua intuição espontânea, viva e ligada ao instinto de agir.",
      Taurus:
        "Netuno em Touro pode conectar sua sensibilidade à natureza, ao corpo, à beleza e à busca por paz.",
      Gemini:
        "Netuno em Gêmeos pode ampliar a imaginação mental, a percepção das palavras e a capacidade de captar vários níveis de significado.",
      Cancer:
        "Netuno em Câncer pode reforçar a memória emocional, a intuição familiar e a receptividade aos ambientes.",
      Leo:
        "Netuno em Leão pode ampliar a criatividade, a imaginação e o desejo de expressar uma visão inspiradora.",
      Virgo:
        "Netuno em Virgem pode tornar sua sensibilidade atenta aos detalhes, ao cuidado e às necessidades sutis dos outros.",
      Libra:
        "Netuno em Libra pode idealizar os relacionamentos, a harmonia e o amor, desenvolvendo ao mesmo tempo grande sutileza na percepção das trocas.",
      Scorpio:
        "Netuno em Escorpião pode ampliar sua intuição diante do não dito, das emoções ocultas e das transformações profundas.",
      Sagittarius:
        "Netuno em Sagitário pode conectar sua sensibilidade à busca de sentido, às crenças e a uma visão mais ampla da existência.",
      Capricorn:
        "Netuno em Capricórnio pode procurar dar estrutura concreta a uma intuição, um ideal ou uma visão interior.",
      Aquarius:
        "Netuno em Aquário pode ampliar sua sensibilidade aos movimentos coletivos, às ideias novas e às transformações sociais.",
      Pisces:
        "Netuno em Peixes amplia fortemente a compaixão, a imaginação, a intuição e a receptividade aos ambientes.",
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

export function localizeSignatureInnerWorld(
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
  | Les clés Aries / Taurus / etc.
  | restent techniques.
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
  | 12 profils émotionnels de la Lune
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const EMOTIONAL_PROFILE_BY_SIGN:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\n\};(?=\n\n\/\*\n\|-+\n\| Expression affective selon Vénus)/,
    `const EMOTIONAL_PROFILE_BY_SIGN: Record<
  string,
  EmotionalProfile
> = ${JSON.stringify(
      labels.profiles,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Vénus
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const VENUS_RELATIONSHIP_STYLE:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\n\};(?=\n\n\/\*\n\|-+\n\| Réaction et désir selon Mars)/,
    `const VENUS_RELATIONSHIP_STYLE: Record<
  string,
  string
> = ${JSON.stringify(
      labels.venusStyles,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Mars
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const MARS_REACTION_STYLE:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\n\};(?=\n\n\/\*\n\|-+\n\| Sensibilité selon Neptune)/,
    `const MARS_REACTION_STYLE: Record<
  string,
  string
> = ${JSON.stringify(
      labels.marsStyles,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Neptune
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const NEPTUNE_SENSITIVITY:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\n\};(?=\n\n\/\*\n\|-+\n\| Utilitaires)/,
    `const NEPTUNE_SENSITIVITY: Record<
  string,
  string
> = ${JSON.stringify(
      labels.neptuneStyles,
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
    "Vénus décrit votre manière de donner de l’affection, de recevoir l’amour et de rechercher une relation qui correspond à vos valeurs.",
    labels.venusFallback,
  );

  out = replaceFlexibleText(
    out,
    "Mars décrit votre manière de réagir, de défendre vos besoins et de mobiliser votre énergie lorsque la tension augmente.",
    labels.marsFallback,
  );

  out = replaceFlexibleText(
    out,
    "Neptune décrit votre sensibilité intuitive, votre imagination et votre réceptivité aux atmosphères émotionnelles.",
    labels.neptuneFallback,
  );

  /*
  |--------------------------------------------------------------------------
  | Textes visibles
  |--------------------------------------------------------------------------
  */

  const replacements:
    Array<[string, string]> = [
      [
        "Analyse Signature",
        labels.analysis,
      ],

      [
        "Votre monde intérieur",
        labels.innerWorld,
      ],

      [
        "Vos besoins émotionnels, vos mécanismes de protection et la manière dont vous retrouvez votre équilibre.",
        labels.subtitle,
      ],

      [
        "Portrait émotionnel",
        labels.emotionalPortrait,
      ],

      [
        "Réaction instinctive",
        labels.instinctiveReaction,
      ],

      [
        "Votre premier mouvement émotionnel",
        labels.firstEmotionalMovement,
      ],

      [
        "Besoin fondamental",
        labels.fundamentalNeed,
      ],

      [
        "Ce qui nourrit votre sécurité intérieure",
        labels.innerSecurity,
      ],

      [
        "Votre mécanisme de protection",
        labels.protectionMechanism,
      ],

      [
        "« Comprendre vos émotions ne signifie pas devoir les contrôler parfaitement. Cela signifie apprendre à reconnaître ce qu’elles cherchent à protéger, à exprimer ou à transformer. »",
        labels.emotionQuote,
      ],

      [
        "Vos quatre dimensions sensibles",
        labels.fourDimensions,
      ],

      [
        "Ressentir, aimer, réagir et percevoir",
        labels.feelLoveReactPerceive,
      ],

      [
        "La Lune décrit vos besoins instinctifs et votre sécurité émotionnelle. Vénus révèle votre manière de créer le lien et de recevoir l’affection. Mars montre votre façon de réagir, de défendre vos besoins et de mobiliser votre énergie. Neptune indique votre sensibilité intuitive et votre réceptivité aux atmosphères.",
        labels.fourDimensionsIntro,
      ],

      [
        "Vos besoins émotionnels et vos réactions instinctives.",
        labels.moonShort,
      ],

      [
        "Votre manière d’aimer et de rechercher l’harmonie.",
        labels.venusShort,
      ],

      [
        "Votre réaction face à la tension, au désir et à l’action.",
        labels.marsShort,
      ],

      [
        "Votre intuition, votre imagination et votre réceptivité.",
        labels.neptuneShort,
      ],

      [
        "Votre langage affectif",
        labels.affectiveLanguage,
      ],

      [
        "Votre manière de réagir",
        labels.reactionStyle,
      ],

      [
        "Votre sensibilité intuitive",
        labels.intuitiveSensitivity,
      ],

      [
        "Régulation émotionnelle",
        labels.emotionalRegulation,
      ],

      [
        "Reconnaître ce qui se passe lorsque la pression augmente",
        labels.pressureTitle,
      ],

      [
        "Vos réactions sous pression ne représentent pas toute votre personnalité. Elles révèlent surtout la stratégie que votre monde intérieur utilise pour retrouver rapidement un sentiment de sécurité, de contrôle ou de compréhension.",
        labels.pressureIntro,
      ],

      [
        "Sous pression",
        labels.underPressure,
      ],

      [
        "Ce qui peut devenir plus difficile",
        labels.moreDifficult,
      ],

      [
        "Apaisement",
        labels.soothing,
      ],

      [
        "Ce qui vous aide à retrouver votre centre",
        labels.returnToCenter,
      ],

      [
        "Vos besoins dans les relations",
        labels.relationshipNeeds,
      ],

      [
        "Trois gestes pour protéger votre équilibre",
        labels.threeGestures,
      ],

      [
        "Nommez l’émotion principale avant de chercher une solution. Une émotion reconnue devient généralement plus facile à traverser.",
        labels.gesture1,
      ],

      [
        "Identifiez le besoin situé derrière votre réaction : sécurité, espace, reconnaissance, clarté, repos ou connexion.",
        labels.gesture2,
      ],

      [
        "Accordez-vous un délai avant une décision importante lorsque l’intensité émotionnelle est élevée.",
        labels.gesture3,
      ],

      [
        "Votre clé d’équilibre",
        labels.balanceKeyLabel,
      ],

      [
        "Une sensibilité mieux comprise devient une force",
        labels.sensitivityStrength,
      ],

      [
        "Votre monde intérieur ne cherche pas à vous limiter. Il vous informe sur les conditions nécessaires pour aimer, créer, décider et évoluer sans vous éloigner de vous-même.",
        labels.closingSuffix,
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
  | Attention :
  | on remplace uniquement le texte JSX.
  | Les recherches techniques
  | "Moon", "Venus", "Mars", "Neptune"
  | restent intactes.
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    />\s*Lune\s*</g,
    `>${labels.moon}<`,
  );

  out = out.replace(
    />\s*Vénus\s*</g,
    `>${labels.venus}<`,
  );

  out = out.replace(
    />\s*Mars\s*</g,
    `>${labels.mars}<`,
  );

  out = out.replace(
    />\s*Neptune\s*</g,
    `>${labels.neptune}<`,
  );

  return out;
}
