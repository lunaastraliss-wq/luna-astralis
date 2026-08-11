import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<
    PaidPdfLocale,
    "fr"
  >;

type BlockProfile = {
  title: string;
  introduction: string;
  automaticPattern: string;
  hiddenFear: string;
  defenseMechanism: string;
  consequence: string;
  liberation: string;
  practicalKey: string;
  affirmation: string;
};

type LifeBlocksLabels = {
  analysis: string;
  title: string;
  subtitle: string;

  mainPattern: string;

  automaticReflex: string;
  reproduceWithoutWanting: string;

  hiddenFearLabel: string;
  mechanismAvoids: string;

  defenseMechanismLabel: string;

  blockQuote: string;

  roots: string;
  understandRoots: string;
  rootsIntro: string;

  saturn: string;
  pluto: string;
  neptune: string;
  moon: string;

  saturnRole: string;
  plutoRole: string;
  neptuneRole: string;
  moonRole: string;

  plutoDepth: string;
  neptuneFog: string;
  possibleConsequence: string;

  moveBeyond: string;
  transformProtection: string;
  liberationIntro: string;

  liberationLabel: string;
  evolutionInvites: string;

  practicalKeyLabel: string;
  newResponse: string;

  threeSteps: string;
  step1: string;
  step2: string;
  step3: string;

  affirmationLabel: string;

  plutoFallback: string;
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
    Record<
      string,
      BlockProfile
    >;

  plutoBlocks:
    Record<
      string,
      string
    >;

  neptuneBlocks:
    Record<
      string,
      string
    >;
};

const LABELS:
Record<
  NonFrenchLocale,
  LifeBlocksLabels
> = {
  en: {
    analysis:
      "Signature Analysis",

    title:
      "Your unconscious blocks",

    subtitle:
      "Protective reflexes, hidden fears, and mechanisms that can slow your evolution.",

    mainPattern:
      "Your main pattern",

    automaticReflex:
      "Automatic reflex",

    reproduceWithoutWanting:
      "What you may repeat without intending to",

    hiddenFearLabel:
      "Hidden fear",

    mechanismAvoids:
      "What your mechanism is trying to avoid",

    defenseMechanismLabel:
      "Your defense mechanism",

    blockQuote:
      "“A block is not a weakness. It often represents an old protective strategy that continues to operate even when the situation has changed.”",

    roots:
      "The roots of the mechanism",

    understandRoots:
      "Understanding what protects, controls, or idealizes",

    rootsIntro:
      "Saturn shows fears, limits, and lessons that require time. Pluto reveals deep mechanisms connected with control, loss, and transformation. Neptune indicates the areas where reference points, boundaries, or expectations can become less clear.",

    saturn:
      "Saturn",

    pluto:
      "Pluto",

    neptune:
      "Neptune",

    moon:
      "Moon",

    saturnRole:
      "Your fears, your limits, and the mastery you are building.",

    plutoRole:
      "Your deep transformations and your relationship with control.",

    neptuneRole:
      "Your idealizations, sensitivity, and boundaries.",

    moonRole:
      "Your need for emotional security and your instinctive reactions.",

    plutoDepth:
      "The depth of Pluto",

    neptuneFog:
      "The fog of Neptune",

    possibleConsequence:
      "The possible consequence",

    moveBeyond:
      "Moving beyond old mechanisms",

    transformProtection:
      "Transforming protection into awareness",

    liberationIntro:
      "You do not move beyond a block by constantly fighting it. You begin to transform it when you recognize what it is trying to protect and develop a response that is better adapted to your present reality.",

    liberationLabel:
      "Liberation",

    evolutionInvites:
      "What your evolution invites you to understand",

    practicalKeyLabel:
      "Practical key",

    newResponse:
      "A new response to experiment with",

    threeSteps:
      "Three steps to interrupt a repetitive pattern",

    step1:
      "Identify the precise moment when your reaction becomes automatic: withdrawal, control, escape, silence, justification, or overactivity.",

    step2:
      "Ask yourself which old fear is trying to protect you and whether it truly corresponds to the present situation.",

    step3:
      "Choose a smaller but different response: speak, ask, slow down, set a boundary, or accept that you cannot control everything.",

    affirmationLabel:
      "Your Signature affirmation",

    plutoFallback:
      "Pluto reveals the deep mechanisms that seek to preserve control when you are going through a period of uncertainty or transformation.",

    neptuneFallback:
      "Neptune shows the areas where intuition, idealization, or sensitivity can make certain boundaries more difficult to identify.",

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
          "The fear of not being strong enough or sufficiently legitimate",

        introduction:
          "Saturn in Aries can create tension between the desire to act freely and the fear of making a mistake, failing, or not being taken seriously. You may alternate between restraint and very assertive reactions.",

        automaticPattern:
          "You may wait too long before acting, then suddenly commit yourself in order to regain control.",

        hiddenFear:
          "The fear of appearing weak, dependent, or unable to defend your position.",

        defenseMechanism:
          "Impatience, rigidity, confrontation, or the need to accomplish everything alone.",

        consequence:
          "You may spend a great deal of energy proving your autonomy instead of using that autonomy to move forward.",

        liberation:
          "Your liberation begins when you accept that courage does not mean the absence of hesitation, but the ability to act despite it.",

        practicalKey:
          "Choose one precise, realistic, deliberate action rather than a reaction designed to prove your strength.",

        affirmation:
          "I can act with courage without having to master everything immediately.",
      },

      Taurus: {
        title:
          "The fear of losing your reference points, resources, or security",

        introduction:
          "Saturn in Taurus can strengthen the need to control what appears stable. You may develop great endurance, but also remain attached to a situation for a long time out of fear of scarcity or having to begin again.",

        automaticPattern:
          "You may preserve a habit, relationship, or structure even when it no longer truly meets your needs.",

        hiddenFear:
          "The fear of instability, scarcity, or losing what you have built.",

        defenseMechanism:
          "Resistance, excessive caution, attachment, or difficulty taking a risk.",

        consequence:
          "You may confuse security with immobility, which can slow certain necessary transformations.",

        liberation:
          "Your liberation comes through building inner confidence that is independent of what you possess or control.",

        practicalKey:
          "Introduce changes gradually so that your need for stability can accompany your evolution.",

        affirmation:
          "I can evolve without losing the solidity that protects me.",
      },

      Gemini: {
        title:
          "The fear of not knowing, misunderstanding, or expressing yourself poorly",

        introduction:
          "Saturn in Gemini can make communication more serious, cautious, or controlled. You may doubt your intelligence despite a genuine ability to analyze.",

        automaticPattern:
          "You may think for a long time before speaking, repeatedly modify your ideas, or fear not having the right words.",

        hiddenFear:
          "The fear of being misunderstood, intellectually judged, or unable to respond correctly.",

        defenseMechanism:
          "Silence, intellectualization, accumulation of information, or highly controlled communication.",

        consequence:
          "You may hold back a relevant thought simply because it does not yet seem perfect.",

        liberation:
          "Your liberation begins when you accept that clarity is also built through exchange and experience.",

        practicalKey:
          "Express one simple idea before trying to develop a complete answer.",

        affirmation:
          "My thinking becomes stronger when I allow myself to share it.",
      },

      Cancer: {
        title:
          "The fear of dependence, rejection, or lack of emotional security",

        introduction:
          "Saturn in Cancer can make emotional needs difficult to show. You may feel deeply while forcing yourself to remain strong or autonomous.",

        automaticPattern:
          "You may care for others while hiding what you yourself need.",

        hiddenFear:
          "The fear of being abandoned, misunderstood, or too vulnerable.",

        defenseMechanism:
          "Withdrawal, excessive protection, control of the home environment, or refusal to ask for support.",

        consequence:
          "You may create a large distance between your true sensitivity and the image of stability you are trying to maintain.",

        liberation:
          "Your liberation comes through recognizing your emotional needs as legitimate realities.",

        practicalKey:
          "Express a need clearly before it turns into fatigue, resentment, or withdrawal.",

        affirmation:
          "I can receive support without losing my autonomy.",
      },

      Leo: {
        title:
          "The fear of not being recognized, loved, or remarkable enough",

        introduction:
          "Saturn in Leo can make personal expression more controlled. You may possess strong creativity while fearing that it is not valuable or visible enough.",

        automaticPattern:
          "You may hold back your expression until you are certain of receiving a favorable response.",

        hiddenFear:
          "The fear of humiliation, rejection, or not living up to your own potential.",

        defenseMechanism:
          "Pride, distance, high standards, or the need to control the image you project.",

        consequence:
          "You may restrict your creativity while waiting for confidence that can only be built by creating.",

        liberation:
          "Your liberation begins when you allow yourself to express something before it is perfect or unanimously appreciated.",

        practicalKey:
          "Create regularly in a space where the result does not need to be evaluated.",

        affirmation:
          "My value does not depend only on the recognition I receive.",
      },

      Virgo: {
        title:
          "The fear of error, disorder, and not being useful enough",

        introduction:
          "Saturn in Virgo can strengthen high standards, duty, and attention to detail. This position gives a strong capacity for mastery, but can also feed constant self-criticism.",

        automaticPattern:
          "You may delay an action while trying to eliminate every possible mistake.",

        hiddenFear:
          "The fear of being ineffective, imperfect, or unable to meet expectations.",

        defenseMechanism:
          "Control, overanalysis, perfectionism, or very rigid organization.",

        consequence:
          "You may spend more energy preventing mistakes than recognizing what is already working.",

        liberation:
          "Your liberation comes through accepting realistic progress based on experience.",

        practicalKey:
          "Define what is good enough before beginning a task.",

        affirmation:
          "I can be competent without demanding impossible perfection from myself.",
      },

      Libra: {
        title:
          "The fear of conflict, rejection, and making a decision that displeases others",

        introduction:
          "Saturn in Libra can make relationships extremely important, but also demanding. You may feel a strong responsibility for balance and for the satisfaction of others.",

        automaticPattern:
          "You may delay a decision in order to avoid tension or disappointing someone.",

        hiddenFear:
          "The fear of rejection, being judged unfair, or being held responsible for a break in harmony.",

        defenseMechanism:
          "Hesitation, excessive diplomacy, self-erasure, or indirect control of the relationship.",

        consequence:
          "You may preserve apparent peace while accumulating silent dissatisfaction.",

        liberation:
          "Your liberation begins when you understand that a healthy relationship can tolerate difference or a boundary.",

        practicalKey:
          "Express your position before immediately looking for a compromise.",

        affirmation:
          "I can protect a relationship without abandoning my truth.",
      },

      Scorpio: {
        title:
          "The fear of losing control, being betrayed, or becoming deeply vulnerable",

        introduction:
          "Saturn in Scorpio can make emotions, trust, and the sharing of power particularly sensitive. You may possess great inner strength while closely protecting your vulnerability.",

        automaticPattern:
          "You may observe, test, or hold back before committing fully.",

        hiddenFear:
          "The fear of losing your power, being manipulated, or becoming emotionally dependent.",

        defenseMechanism:
          "Silence, control, distrust, or intensified vigilance.",

        consequence:
          "You may maintain a distance that prevents precisely the deep trust you are seeking.",

        liberation:
          "Your liberation comes through gradual, chosen vulnerability accompanied by clear boundaries.",

        practicalKey:
          "Share one measured truth with a reliable person without waiting for absolute certainty.",

        affirmation:
          "I can open myself without abandoning my discernment.",
      },

      Sagittarius: {
        title:
          "The fear of being limited, trapped, or deprived of meaning",

        introduction:
          "Saturn in Sagittarius can create tension between the need for expansion and the need to structure your beliefs. You may fear that commitment will reduce your possibilities.",

        automaticPattern:
          "You may change direction when reality requires too much patience or continuity.",

        hiddenFear:
          "The fear of losing your freedom, choosing the wrong path, or discovering that your beliefs are insufficient.",

        defenseMechanism:
          "Escape, excessive optimism, generalization, or the constant search for a new horizon.",

        consequence:
          "You may multiply possibilities without giving them enough time to become real experience.",

        liberation:
          "Your liberation begins when you understand that discipline can support your freedom rather than cancel it.",

        practicalKey:
          "Choose one direction and give it enough time before concluding that it limits you.",

        affirmation:
          "I can commit without losing my inner freedom.",
      },

      Capricorn: {
        title:
          "The fear of failure, weakness, and never doing enough",

        introduction:
          "Saturn in Capricorn strengthens duty, ambition, and the capacity to build. This strength can become heavy when you associate your value with productivity.",

        automaticPattern:
          "You may increase your efforts when you are tired or worried instead of slowing down.",

        hiddenFear:
          "The fear of failing, losing credibility, or not deserving respect.",

        defenseMechanism:
          "Control, excessive work, emotional distance, or refusal to show a limit.",

        consequence:
          "You may reach your goals while constantly feeling that it is still not enough.",

        liberation:
          "Your liberation comes through defining success in a way that includes your health, time, and inner life.",

        practicalKey:
          "Measure your progress through coherence and not only by the quantity you accomplish.",

        affirmation:
          "My value does not depend only on what I manage to produce.",
      },

      Aquarius: {
        title:
          "The fear of losing your freedom or not belonging",

        introduction:
          "Saturn in Aquarius can create tension between the desire for independence and the need to participate in a group or collective vision.",

        automaticPattern:
          "You may take distance when a relationship, structure, or commitment appears to limit your autonomy.",

        hiddenFear:
          "The fear of being controlled, normalized, or rejected because of your difference.",

        defenseMechanism:
          "Detachment, opposition, excessive independence, or rationalization.",

        consequence:
          "You may protect yourself from rejection by maintaining a distance that prevents genuine belonging.",

        liberation:
          "Your liberation begins when you discover that collaboration does not require the disappearance of your individuality.",

        practicalKey:
          "Take part in a collective project in which your role and limits are clearly defined.",

        affirmation:
          "I can belong without giving up my difference.",
      },

      Pisces: {
        title:
          "The fear of being overwhelmed, lost, or unable to set boundaries",

        introduction:
          "Saturn in Pisces can make sensitivity difficult to contain. You may perceive many things while doubting your ability to give them a clear form.",

        automaticPattern:
          "You may avoid a situation that feels too demanding, absorb other people's emotions, or wait for clarity to appear on its own.",

        hiddenFear:
          "The fear of being overwhelmed, misunderstood, or unable to meet concrete demands.",

        defenseMechanism:
          "Withdrawal, avoidance, idealization, or silent sacrifice.",

        consequence:
          "You may carry emotional responsibilities that do not belong to you or lack enough structure to protect your energy.",

        liberation:
          "Your liberation comes through simple boundaries, stable habits, and a clear distinction between compassion and responsibility.",

        practicalKey:
          "Regularly ask yourself what truly belongs to you and what belongs to others.",

        affirmation:
          "My boundaries protect my sensitivity and allow it to become a strength.",
      },
    },

    plutoBlocks: {
      Aries:
        "Pluto in Aries can intensify issues connected with will, assertion, and the need to control your direction.",

      Taurus:
        "Pluto in Taurus can amplify fears connected with loss, security, resources, and material stability.",

      Gemini:
        "Pluto in Gemini can make your thinking highly penetrating, but can also create a tendency to overanalyze words, intentions, or information.",

      Cancer:
        "Pluto in Cancer can intensify connections with the past, family, emotional memory, and the need for protection.",

      Leo:
        "Pluto in Leo can amplify issues connected with recognition, creative power, and the fear of leaving no mark.",

      Virgo:
        "Pluto in Virgo can strengthen the need for control, precision, and mastery of details.",

      Libra:
        "Pluto in Libra can intensify power dynamics, dependency, or transformations experienced through relationships.",

      Scorpio:
        "Pluto in Scorpio amplifies emotional depth, trust issues, and the need to transform mechanisms of control.",

      Sagittarius:
        "Pluto in Sagittarius can make beliefs extremely powerful and create difficulty questioning certain inner truths.",

      Capricorn:
        "Pluto in Capricorn can strengthen the fear of losing control, authority, success, or the structures you have built.",

      Aquarius:
        "Pluto in Aquarius can intensify resistance to systems, collective constraints, or imposed models.",

      Pisces:
        "Pluto in Pisces can amplify sensitivity to collective emotions, loss of reference points, and invisible boundaries.",
    },

    neptuneBlocks: {
      Aries:
        "Neptune in Aries can blur the distinction between intuition and impulse, especially when you want to act quickly.",

      Taurus:
        "Neptune in Taurus can idealize security, comfort, or certain material attachments.",

      Gemini:
        "Neptune in Gemini can make thoughts highly intuitive, but sometimes difficult to organize or verify.",

      Cancer:
        "Neptune in Cancer can amplify memories, nostalgia, and the absorption of family emotions.",

      Leo:
        "Neptune in Leo can idealize recognition, love, or the creative role you wish to embody.",

      Virgo:
        "Neptune in Virgo can make it difficult to distinguish between appropriate help, sacrifice, and excessive responsibility.",

      Libra:
        "Neptune in Libra can encourage idealization of the couple, harmony, or the person you love.",

      Scorpio:
        "Neptune in Scorpio can amplify intuition, but also fears connected with what remains unspoken and hidden intentions.",

      Sagittarius:
        "Neptune in Sagittarius can idealize a belief, direction, or promise of expansion.",

      Capricorn:
        "Neptune in Capricorn can make it difficult to distinguish between personal ambition and outside expectations.",

      Aquarius:
        "Neptune in Aquarius can idealize a cause, group, or collective vision.",

      Pisces:
        "Neptune in Pisces strongly amplifies sensitivity and requires particularly conscious boundaries.",
    },
  },

  es: {
    analysis:
      "Análisis Firma",

    title:
      "Tus bloqueos inconscientes",

    subtitle:
      "Los reflejos de protección, los miedos ocultos y los mecanismos que pueden frenar tu evolución.",

    mainPattern:
      "Tu esquema principal",

    automaticReflex:
      "Reflejo automático",

    reproduceWithoutWanting:
      "Lo que puedes reproducir sin querer",

    hiddenFearLabel:
      "Miedo oculto",

    mechanismAvoids:
      "Lo que tu mecanismo intenta evitar",

    defenseMechanismLabel:
      "Tu mecanismo de defensa",

    blockQuote:
      "«Un bloqueo no es una debilidad. A menudo representa una antigua estrategia de protección que continúa actuando incluso cuando la situación ha cambiado.»",

    roots:
      "Las raíces del mecanismo",

    understandRoots:
      "Comprender lo que protege, controla o idealiza",

    rootsIntro:
      "Saturno muestra los miedos, los límites y los aprendizajes que requieren tiempo. Plutón revela los mecanismos profundos relacionados con el control, la pérdida y la transformación. Neptuno indica las zonas donde las referencias, los límites o las expectativas pueden volverse menos claras.",

    saturn:
      "Saturno",

    pluto:
      "Plutón",

    neptune:
      "Neptuno",

    moon:
      "Luna",

    saturnRole:
      "Tus miedos, tus límites y el dominio que estás construyendo.",

    plutoRole:
      "Tus transformaciones profundas y tu relación con el control.",

    neptuneRole:
      "Tus idealizaciones, tu sensibilidad y tus límites.",

    moonRole:
      "Tu necesidad de seguridad emocional y tus reacciones instintivas.",

    plutoDepth:
      "La profundidad de Plutón",

    neptuneFog:
      "La niebla de Neptuno",

    possibleConsequence:
      "La consecuencia posible",

    moveBeyond:
      "Superar los antiguos mecanismos",

    transformProtection:
      "Transformar la protección en conciencia",

    liberationIntro:
      "No superas un bloqueo luchando constantemente contra él. Comienzas a transformarlo cuando reconoces lo que intenta proteger y desarrollas una respuesta más adaptada a tu realidad actual.",

    liberationLabel:
      "Liberación",

    evolutionInvites:
      "Lo que tu evolución te invita a comprender",

    practicalKeyLabel:
      "Clave práctica",

    newResponse:
      "Una nueva respuesta para experimentar",

    threeSteps:
      "Tres etapas para interrumpir un patrón repetitivo",

    step1:
      "Identifica el momento exacto en que tu reacción se vuelve automática: cierre, control, huida, silencio, justificación o sobreactividad.",

    step2:
      "Pregúntate qué miedo antiguo intenta protegerte y si corresponde realmente a la situación presente.",

    step3:
      "Elige una respuesta más pequeña pero diferente: hablar, pedir, disminuir el ritmo, poner un límite o aceptar que no puedes controlarlo todo.",

    affirmationLabel:
      "Tu afirmación Firma",

    plutoFallback:
      "Plutón revela los mecanismos profundos que buscan conservar el control cuando atraviesas un período de incertidumbre o transformación.",

    neptuneFallback:
      "Neptuno muestra las zonas donde la intuición, la idealización o la sensibilidad pueden hacer que ciertos límites sean más difíciles de identificar.",

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
          "El miedo a no ser suficientemente fuerte o legítimo",
        introduction:
          "Saturno en Aries puede crear una tensión entre el deseo de actuar libremente y el miedo a equivocarte, fracasar o no ser tomado en serio. Puedes alternar entre contención y reacciones muy afirmativas.",
        automaticPattern:
          "Puedes esperar demasiado antes de actuar y después comprometerte bruscamente para recuperar el control.",
        hiddenFear:
          "El miedo a parecer débil, dependiente o incapaz de defender tu posición.",
        defenseMechanism:
          "La impaciencia, la rigidez, la confrontación o la necesidad de hacerlo todo solo.",
        consequence:
          "Puedes gastar mucha energía demostrando tu autonomía en lugar de utilizarla para avanzar.",
        liberation:
          "Tu liberación comienza cuando aceptas que el valor no significa ausencia de dudas, sino capacidad para actuar a pesar de ellas.",
        practicalKey:
          "Elige una acción precisa, realista y voluntaria en lugar de una reacción destinada a demostrar tu fuerza.",
        affirmation:
          "Puedo actuar con valor sin tener que dominarlo todo inmediatamente.",
      },

      Taurus: {
        title:
          "El miedo a perder tus referencias, recursos o seguridad",
        introduction:
          "Saturno en Tauro puede reforzar la necesidad de controlar aquello que parece estable. Puedes desarrollar gran resistencia, pero también permanecer mucho tiempo unido a una situación por miedo a carecer o tener que recomenzar.",
        automaticPattern:
          "Puedes conservar un hábito, un vínculo o una estructura incluso cuando ya no responde realmente a tus necesidades.",
        hiddenFear:
          "El miedo a la inestabilidad, la carencia o la pérdida de aquello que has construido.",
        defenseMechanism:
          "La resistencia, la prudencia excesiva, el apego o la dificultad para asumir un riesgo.",
        consequence:
          "Puedes confundir seguridad e inmovilidad, ralentizando ciertas transformaciones necesarias.",
        liberation:
          "Tu liberación pasa por construir una confianza interior independiente de aquello que posees o controlas.",
        practicalKey:
          "Introduce los cambios progresivamente para que tu necesidad de estabilidad pueda acompañar tu evolución.",
        affirmation:
          "Puedo evolucionar sin perder la solidez que me protege.",
      },

      Gemini: {
        title:
          "El miedo a no saber, comprender mal o expresarte mal",
        introduction:
          "Saturno en Géminis puede hacer que la comunicación sea más seria, prudente o controlada. Puedes dudar de tu inteligencia a pesar de poseer una verdadera capacidad de análisis.",
        automaticPattern:
          "Puedes reflexionar mucho antes de hablar, modificar varias veces tus ideas o temer no encontrar las palabras adecuadas.",
        hiddenFear:
          "El miedo a ser mal comprendido, juzgado intelectualmente o incapaz de responder correctamente.",
        defenseMechanism:
          "El silencio, la intelectualización, la acumulación de información o una comunicación muy controlada.",
        consequence:
          "Puedes retener una idea pertinente únicamente porque todavía no parece perfecta.",
        liberation:
          "Tu liberación comienza cuando aceptas que la claridad también se construye mediante el intercambio y la experiencia.",
        practicalKey:
          "Expresa una idea simple antes de intentar desarrollar una respuesta completa.",
        affirmation:
          "Mi pensamiento se vuelve más fuerte cuando acepto compartirlo.",
      },

      Cancer: {
        title:
          "El miedo a depender, ser rechazado o carecer de seguridad afectiva",
        introduction:
          "Saturno en Cáncer puede hacer que las necesidades emocionales sean difíciles de mostrar. Puedes sentir profundamente mientras te obligas a permanecer fuerte o autónomo.",
        automaticPattern:
          "Puedes cuidar de los demás ocultando al mismo tiempo aquello que tú necesitas.",
        hiddenFear:
          "El miedo al abandono, a no ser comprendido o a ser demasiado vulnerable.",
        defenseMechanism:
          "El retiro, la protección excesiva, el control del hogar o el rechazo a pedir apoyo.",
        consequence:
          "Puedes crear una gran distancia entre tu verdadera sensibilidad y la imagen de estabilidad que intentas mantener.",
        liberation:
          "Tu liberación pasa por reconocer tus necesidades emocionales como realidades legítimas.",
        practicalKey:
          "Expresa claramente una necesidad antes de que se transforme en cansancio, resentimiento o cierre.",
        affirmation:
          "Puedo recibir apoyo sin perder mi autonomía.",
      },

      Leo: {
        title:
          "El miedo a no ser reconocido, amado o suficientemente notable",
        introduction:
          "Saturno en Leo puede hacer que la expresión personal sea más controlada. Puedes poseer una gran creatividad y al mismo tiempo temer que no sea suficientemente valiosa o visible.",
        automaticPattern:
          "Puedes retener tu expresión hasta estar seguro de recibir una reacción favorable.",
        hiddenFear:
          "El miedo a la humillación, al rechazo o a no estar a la altura de tu propio potencial.",
        defenseMechanism:
          "El orgullo, la distancia, la exigencia o la necesidad de controlar la imagen proyectada.",
        consequence:
          "Puedes limitar tu creatividad esperando una confianza que solo puede construirse creando.",
        liberation:
          "Tu liberación comienza cuando te permites expresar algo antes de que sea perfecto o apreciado unánimemente.",
        practicalKey:
          "Crea regularmente en un espacio donde el resultado no tenga que ser evaluado.",
        affirmation:
          "Mi valor no depende únicamente del reconocimiento que recibo.",
      },

      Virgo: {
        title:
          "El miedo al error, al desorden y a no ser suficientemente útil",
        introduction:
          "Saturno en Virgo puede reforzar la exigencia, el sentido del deber y la atención a los detalles. Esta posición da una gran capacidad de dominio, pero también puede alimentar una autocrítica constante.",
        automaticPattern:
          "Puedes retrasar una acción buscando eliminar todos los errores posibles.",
        hiddenFear:
          "El miedo a ser ineficaz, imperfecto o incapaz de responder a las expectativas.",
        defenseMechanism:
          "El control, el sobreanálisis, el perfeccionismo o una organización muy rígida.",
        consequence:
          "Puedes dedicar más energía a prevenir el error que a reconocer aquello que ya funciona.",
        liberation:
          "Tu liberación pasa por aceptar un progreso realista basado en la experiencia.",
        practicalKey:
          "Define qué es suficientemente bueno antes de comenzar una tarea.",
        affirmation:
          "Puedo ser competente sin exigirme una perfección imposible.",
      },

      Libra: {
        title:
          "El miedo al conflicto, al rechazo y a tomar una decisión que desagrade",
        introduction:
          "Saturno en Libra puede hacer que las relaciones sean muy importantes, pero también exigentes. Puedes sentir una gran responsabilidad hacia el equilibrio y la satisfacción de los demás.",
        automaticPattern:
          "Puedes retrasar una decisión para evitar crear tensión o decepcionar a alguien.",
        hiddenFear:
          "El miedo a ser rechazado, considerado injusto o responsable de una ruptura de la armonía.",
        defenseMechanism:
          "La vacilación, la diplomacia excesiva, el borrado personal o el control indirecto de la relación.",
        consequence:
          "Puedes conservar una paz aparente acumulando al mismo tiempo una insatisfacción silenciosa.",
        liberation:
          "Tu liberación comienza cuando comprendes que una relación sana puede soportar una diferencia o un límite.",
        practicalKey:
          "Expresa tu posición antes de buscar inmediatamente un compromiso.",
        affirmation:
          "Puedo proteger una relación sin abandonar mi verdad.",
      },

      Scorpio: {
        title:
          "El miedo a perder el control, ser traicionado o quedar profundamente vulnerable",
        introduction:
          "Saturno en Escorpio puede volver especialmente sensibles las emociones, la confianza y el reparto del poder. Puedes poseer una gran fuerza interior y al mismo tiempo proteger estrechamente tu vulnerabilidad.",
        automaticPattern:
          "Puedes observar, poner a prueba o retener antes de comprometerte completamente.",
        hiddenFear:
          "El miedo a perder tu poder, ser manipulado o depender emocionalmente.",
        defenseMechanism:
          "El silencio, el control, la desconfianza o el aumento de la vigilancia.",
        consequence:
          "Puedes mantener una distancia que impide precisamente la confianza profunda que buscas.",
        liberation:
          "Tu liberación pasa por una vulnerabilidad progresiva, elegida y acompañada de límites claros.",
        practicalKey:
          "Comparte una verdad medida con una persona fiable sin esperar una certeza absoluta.",
        affirmation:
          "Puedo abrirme sin abandonar mi discernimiento.",
      },

      Sagittarius: {
        title:
          "El miedo a ser limitado, encerrado o privado de sentido",
        introduction:
          "Saturno en Sagitario puede crear una tensión entre la necesidad de expansión y la necesidad de estructurar tus convicciones. Puedes temer que un compromiso reduzca tus posibilidades.",
        automaticPattern:
          "Puedes cambiar de dirección cuando la realidad exige demasiada paciencia o continuidad.",
        hiddenFear:
          "El miedo a perder tu libertad, equivocarte de camino o descubrir que tus convicciones son insuficientes.",
        defenseMechanism:
          "La huida, el optimismo excesivo, la generalización o la búsqueda constante de un nuevo horizonte.",
        consequence:
          "Puedes multiplicar las posibilidades sin darles tiempo para convertirse en una verdadera experiencia.",
        liberation:
          "Tu liberación comienza cuando comprendes que la disciplina puede sostener tu libertad en lugar de anularla.",
        practicalKey:
          "Elige una dirección y concédele suficiente tiempo antes de concluir que te limita.",
        affirmation:
          "Puedo comprometerme sin perder mi libertad interior.",
      },

      Capricorn: {
        title:
          "El miedo al fracaso, a la debilidad y a no hacer nunca lo suficiente",
        introduction:
          "Saturno en Capricornio refuerza el sentido del deber, la ambición y la capacidad de construir. Esta fuerza puede volverse pesada cuando asocias tu valor a tu productividad.",
        automaticPattern:
          "Puedes aumentar tus esfuerzos cuando estás cansado o preocupado, en lugar de disminuir el ritmo.",
        hiddenFear:
          "El miedo a fracasar, perder credibilidad o no merecer respeto.",
        defenseMechanism:
          "El control, el trabajo excesivo, la distancia emocional o el rechazo a mostrar un límite.",
        consequence:
          "Puedes alcanzar tus objetivos sintiendo constantemente que todavía no es suficiente.",
        liberation:
          "Tu liberación pasa por definir el éxito de una manera que incluya tu salud, tu tiempo y tu vida interior.",
        practicalKey:
          "Mide tu progreso por la coherencia y no solamente por la cantidad realizada.",
        affirmation:
          "Mi valor no depende únicamente de lo que consigo producir.",
      },

      Aquarius: {
        title:
          "El miedo a perder tu libertad o a no pertenecer",
        introduction:
          "Saturno en Acuario puede crear una tensión entre el deseo de independencia y la necesidad de participar en un grupo o una visión colectiva.",
        automaticPattern:
          "Puedes tomar distancia cuando una relación, una estructura o un compromiso parece limitar tu autonomía.",
        hiddenFear:
          "El miedo a ser controlado, normalizado o rechazado por tu diferencia.",
        defenseMechanism:
          "El desapego, la oposición, la independencia excesiva o la racionalización.",
        consequence:
          "Puedes protegerte del rechazo manteniendo una distancia que impide una verdadera pertenencia.",
        liberation:
          "Tu liberación comienza cuando descubres que la colaboración no exige la desaparición de tu singularidad.",
        practicalKey:
          "Participa en un proyecto colectivo donde tu papel y tus límites estén claramente definidos.",
        affirmation:
          "Puedo pertenecer sin renunciar a mi diferencia.",
      },

      Pisces: {
        title:
          "El miedo a ser desbordado, perderte o no poder poner límites",
        introduction:
          "Saturno en Piscis puede hacer que la sensibilidad sea difícil de contener. Puedes percibir muchas cosas y al mismo tiempo dudar de tu capacidad para darles una forma clara.",
        automaticPattern:
          "Puedes evitar una situación demasiado exigente, absorber las emociones de los demás o esperar que la claridad aparezca por sí sola.",
        hiddenFear:
          "El miedo a ser desbordado, incomprendido o incapaz de responder a exigencias concretas.",
        defenseMechanism:
          "El retiro, la evitación, la idealización o el sacrificio silencioso.",
        consequence:
          "Puedes cargar responsabilidades emocionales que no te pertenecen o carecer de estructura para proteger tu energía.",
        liberation:
          "Tu liberación pasa por límites simples, hábitos estables y una distinción clara entre compasión y responsabilidad.",
        practicalKey:
          "Pregúntate regularmente qué te pertenece realmente y qué pertenece a los demás.",
        affirmation:
          "Mis límites protegen mi sensibilidad y le permiten convertirse en una fuerza.",
      },
    },

    plutoBlocks: {
      Aries:
        "Plutón en Aries puede intensificar los asuntos relacionados con la voluntad, la afirmación y la necesidad de controlar tu dirección.",
      Taurus:
        "Plutón en Tauro puede amplificar los miedos relacionados con la pérdida, la seguridad, los recursos y la estabilidad material.",
      Gemini:
        "Plutón en Géminis puede volver el pensamiento muy penetrante, pero también crear una tendencia a analizar excesivamente las palabras, las intenciones o la información.",
      Cancer:
        "Plutón en Cáncer puede intensificar los vínculos con el pasado, la familia, la memoria emocional y la necesidad de protección.",
      Leo:
        "Plutón en Leo puede amplificar los asuntos relacionados con el reconocimiento, el poder creativo y el miedo a no dejar huella.",
      Virgo:
        "Plutón en Virgo puede reforzar la necesidad de control, precisión y dominio de los detalles.",
      Libra:
        "Plutón en Libra puede intensificar las relaciones de poder, la dependencia o las transformaciones vividas a través de las relaciones.",
      Scorpio:
        "Plutón en Escorpio amplifica la profundidad emocional, los asuntos de confianza y la necesidad de transformar los mecanismos de control.",
      Sagittarius:
        "Plutón en Sagitario puede volver las convicciones muy poderosas y crear dificultad para cuestionar ciertas verdades interiores.",
      Capricorn:
        "Plutón en Capricornio puede reforzar el miedo a perder el control, la autoridad, el éxito o las estructuras construidas.",
      Aquarius:
        "Plutón en Acuario puede intensificar la resistencia a los sistemas, las limitaciones colectivas o los modelos impuestos.",
      Pisces:
        "Plutón en Piscis puede amplificar la sensibilidad a las emociones colectivas, la pérdida de referencias y las fronteras invisibles.",
    },

    neptuneBlocks: {
      Aries:
        "Neptuno en Aries puede difuminar la diferencia entre intuición e impulso, especialmente cuando deseas actuar rápidamente.",
      Taurus:
        "Neptuno en Tauro puede idealizar la seguridad, la comodidad o ciertos apegos materiales.",
      Gemini:
        "Neptuno en Géminis puede hacer que los pensamientos sean muy intuitivos, pero a veces difíciles de organizar o verificar.",
      Cancer:
        "Neptuno en Cáncer puede amplificar los recuerdos, la nostalgia y la absorción de las emociones familiares.",
      Leo:
        "Neptuno en Leo puede idealizar el reconocimiento, el amor o el papel creativo que deseas encarnar.",
      Virgo:
        "Neptuno en Virgo puede dificultar la distinción entre ayuda justa, sacrificio y responsabilidad excesiva.",
      Libra:
        "Neptuno en Libra puede favorecer la idealización de la pareja, la armonía o la persona amada.",
      Scorpio:
        "Neptuno en Escorpio puede amplificar las intuiciones, pero también los temores relacionados con lo no dicho y las intenciones ocultas.",
      Sagittarius:
        "Neptuno en Sagitario puede idealizar una creencia, una dirección o una promesa de expansión.",
      Capricorn:
        "Neptuno en Capricornio puede dificultar la distinción entre ambición personal y expectativas exteriores.",
      Aquarius:
        "Neptuno en Acuario puede idealizar una causa, un grupo o una visión colectiva.",
      Pisces:
        "Neptuno en Piscis amplifica fuertemente la sensibilidad y exige límites especialmente conscientes.",
    },
  },

  de: {
    analysis:
      "Signatur-Analyse",

    title:
      "Ihre unbewussten Blockaden",

    subtitle:
      "Schutzreflexe, verborgene Ängste und Mechanismen, die Ihre Entwicklung bremsen können.",

    mainPattern:
      "Ihr Hauptmuster",

    automaticReflex:
      "Automatischer Reflex",

    reproduceWithoutWanting:
      "Was Sie ungewollt wiederholen können",

    hiddenFearLabel:
      "Verborgene Angst",

    mechanismAvoids:
      "Was Ihr Mechanismus vermeiden möchte",

    defenseMechanismLabel:
      "Ihr Abwehrmechanismus",

    blockQuote:
      "„Eine Blockade ist keine Schwäche. Sie ist häufig eine alte Schutzstrategie, die weiterwirkt, obwohl sich die Situation längst verändert hat.“",

    roots:
      "Die Wurzeln des Mechanismus",

    understandRoots:
      "Verstehen, was schützt, kontrolliert oder idealisiert",

    rootsIntro:
      "Saturn zeigt Ängste, Grenzen und Lernprozesse, die Zeit benötigen. Pluto offenbart tiefe Mechanismen rund um Kontrolle, Verlust und Transformation. Neptun zeigt Bereiche, in denen Orientierung, Grenzen oder Erwartungen weniger klar werden können.",

    saturn:
      "Saturn",

    pluto:
      "Pluto",

    neptune:
      "Neptun",

    moon:
      "Mond",

    saturnRole:
      "Ihre Ängste, Ihre Grenzen und die Meisterschaft, die Sie entwickeln.",

    plutoRole:
      "Ihre tiefen Transformationen und Ihre Beziehung zur Kontrolle.",

    neptuneRole:
      "Ihre Idealisierungen, Ihre Sensibilität und Ihre Grenzen.",

    moonRole:
      "Ihr Bedürfnis nach emotionaler Sicherheit und Ihre instinktiven Reaktionen.",

    plutoDepth:
      "Die Tiefe Plutos",

    neptuneFog:
      "Der Nebel Neptuns",

    possibleConsequence:
      "Die mögliche Folge",

    moveBeyond:
      "Alte Mechanismen überwinden",

    transformProtection:
      "Schutz in Bewusstsein verwandeln",

    liberationIntro:
      "Sie überwinden eine Blockade nicht, indem Sie ständig gegen sie kämpfen. Sie beginnen sie zu verwandeln, wenn Sie erkennen, was sie schützen möchte, und eine Antwort entwickeln, die besser zu Ihrer heutigen Realität passt.",

    liberationLabel:
      "Befreiung",

    evolutionInvites:
      "Was Ihre Entwicklung Sie verstehen lässt",

    practicalKeyLabel:
      "Praktischer Schlüssel",

    newResponse:
      "Eine neue Reaktion zum Ausprobieren",

    threeSteps:
      "Drei Schritte, um ein wiederkehrendes Muster zu unterbrechen",

    step1:
      "Erkennen Sie den genauen Moment, in dem Ihre Reaktion automatisch wird: Rückzug, Kontrolle, Flucht, Schweigen, Rechtfertigung oder Überaktivität.",

    step2:
      "Fragen Sie sich, welche alte Angst Sie zu schützen versucht und ob sie tatsächlich zur gegenwärtigen Situation passt.",

    step3:
      "Wählen Sie eine kleinere, aber andere Reaktion: sprechen, fragen, langsamer werden, eine Grenze setzen oder akzeptieren, dass Sie nicht alles kontrollieren können.",

    affirmationLabel:
      "Ihre Signatur-Affirmation",

    plutoFallback:
      "Pluto zeigt die tiefen Mechanismen, die Kontrolle aufrechterhalten möchten, wenn Sie eine Phase von Unsicherheit oder Transformation durchlaufen.",

    neptuneFallback:
      "Neptun zeigt die Bereiche, in denen Intuition, Idealisierung oder Sensibilität bestimmte Grenzen schwerer erkennbar machen können.",

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
          "Die Angst, nicht stark oder legitim genug zu sein",
        introduction:
          "Saturn im Widder kann Spannung zwischen dem Wunsch nach freiem Handeln und der Angst erzeugen, Fehler zu machen, zu scheitern oder nicht ernst genommen zu werden. Sie können zwischen Zurückhaltung und sehr bestimmtem Auftreten wechseln.",
        automaticPattern:
          "Sie können zu lange warten, bevor Sie handeln, und sich dann plötzlich engagieren, um Kontrolle zurückzugewinnen.",
        hiddenFear:
          "Die Angst, schwach, abhängig oder unfähig zu wirken, Ihre Position zu verteidigen.",
        defenseMechanism:
          "Ungeduld, Starrheit, Konfrontation oder das Bedürfnis, alles allein zu bewältigen.",
        consequence:
          "Sie können viel Energie darauf verwenden, Ihre Autonomie zu beweisen, statt sie zum Vorankommen zu nutzen.",
        liberation:
          "Ihre Befreiung beginnt, wenn Sie akzeptieren, dass Mut nicht Abwesenheit von Zögern bedeutet, sondern die Fähigkeit, trotz Zögern zu handeln.",
        practicalKey:
          "Wählen Sie eine konkrete, realistische und bewusste Handlung statt einer Reaktion, die Ihre Stärke beweisen soll.",
        affirmation:
          "Ich kann mutig handeln, ohne sofort alles beherrschen zu müssen.",
      },

      Taurus: {
        title:
          "Die Angst, Orientierung, Ressourcen oder Sicherheit zu verlieren",
        introduction:
          "Saturn im Stier kann das Bedürfnis verstärken, das zu kontrollieren, was stabil erscheint. Sie können große Ausdauer entwickeln, aber aus Angst vor Mangel oder Neuanfang auch lange an Situationen festhalten.",
        automaticPattern:
          "Sie können eine Gewohnheit, Bindung oder Struktur bewahren, obwohl sie Ihren Bedürfnissen nicht mehr wirklich entspricht.",
        hiddenFear:
          "Die Angst vor Instabilität, Mangel oder dem Verlust dessen, was Sie aufgebaut haben.",
        defenseMechanism:
          "Widerstand, übermäßige Vorsicht, Festhalten oder Schwierigkeiten, ein Risiko einzugehen.",
        consequence:
          "Sie können Sicherheit mit Stillstand verwechseln und dadurch notwendige Veränderungen verlangsamen.",
        liberation:
          "Ihre Befreiung entsteht durch inneres Vertrauen, das unabhängig davon ist, was Sie besitzen oder kontrollieren.",
        practicalKey:
          "Führen Sie Veränderungen schrittweise ein, damit Ihr Bedürfnis nach Stabilität Ihre Entwicklung begleiten kann.",
        affirmation:
          "Ich kann mich entwickeln, ohne die Stabilität zu verlieren, die mich schützt.",
      },

      Gemini: {
        title:
          "Die Angst, etwas nicht zu wissen, falsch zu verstehen oder sich falsch auszudrücken",
        introduction:
          "Saturn in den Zwillingen kann Kommunikation ernster, vorsichtiger oder kontrollierter machen. Sie können an Ihrer Intelligenz zweifeln, obwohl Sie tatsächlich analytisch stark sind.",
        automaticPattern:
          "Sie können lange nachdenken, bevor Sie sprechen, Ihre Ideen mehrfach ändern oder fürchten, nicht die richtigen Worte zu finden.",
        hiddenFear:
          "Die Angst, missverstanden, intellektuell beurteilt oder als unfähig zu einer richtigen Antwort angesehen zu werden.",
        defenseMechanism:
          "Schweigen, Intellektualisierung, Ansammlung von Informationen oder stark kontrollierte Kommunikation.",
        consequence:
          "Sie können eine wichtige Aussage zurückhalten, nur weil sie noch nicht perfekt erscheint.",
        liberation:
          "Ihre Befreiung beginnt, wenn Sie akzeptieren, dass Klarheit auch durch Austausch und Erfahrung entsteht.",
        practicalKey:
          "Drücken Sie zunächst eine einfache Idee aus, bevor Sie eine vollständige Antwort entwickeln.",
        affirmation:
          "Mein Denken wird stärker, wenn ich bereit bin, es zu teilen.",
      },

      Cancer: {
        title:
          "Die Angst vor Abhängigkeit, Zurückweisung oder fehlender emotionaler Sicherheit",
        introduction:
          "Saturn im Krebs kann emotionale Bedürfnisse schwer sichtbar machen. Sie können tief empfinden und sich gleichzeitig zwingen, stark oder unabhängig zu bleiben.",
        automaticPattern:
          "Sie können sich um andere kümmern und gleichzeitig verbergen, was Sie selbst benötigen.",
        hiddenFear:
          "Die Angst vor Verlassenwerden, Unverständnis oder zu großer Verletzlichkeit.",
        defenseMechanism:
          "Rückzug, übermäßiger Schutz, Kontrolle des Zuhauses oder die Weigerung, Unterstützung zu erbitten.",
        consequence:
          "Sie können große Distanz zwischen Ihrer tatsächlichen Sensibilität und dem Bild von Stabilität schaffen, das Sie erhalten möchten.",
        liberation:
          "Ihre Befreiung entsteht durch die Anerkennung Ihrer emotionalen Bedürfnisse als legitime Realität.",
        practicalKey:
          "Äußern Sie ein Bedürfnis klar, bevor es sich in Erschöpfung, Groll oder Verschlossenheit verwandelt.",
        affirmation:
          "Ich kann Unterstützung erhalten, ohne meine Autonomie zu verlieren.",
      },

      Leo: {
        title:
          "Die Angst, nicht anerkannt, geliebt oder bemerkenswert genug zu sein",
        introduction:
          "Saturn im Löwen kann persönlichen Ausdruck stärker kontrollieren. Sie können große Kreativität besitzen und gleichzeitig fürchten, dass sie nicht wertvoll oder sichtbar genug ist.",
        automaticPattern:
          "Sie können Ihren Ausdruck zurückhalten, bis Sie sicher sind, eine positive Reaktion zu erhalten.",
        hiddenFear:
          "Die Angst vor Demütigung, Zurückweisung oder davor, dem eigenen Potenzial nicht gerecht zu werden.",
        defenseMechanism:
          "Stolz, Distanz, hohe Ansprüche oder das Bedürfnis, Ihr äußeres Bild zu kontrollieren.",
        consequence:
          "Sie können Ihre Kreativität einschränken, während Sie auf ein Selbstvertrauen warten, das nur durch kreatives Handeln entstehen kann.",
        liberation:
          "Ihre Befreiung beginnt, wenn Sie sich erlauben, etwas auszudrücken, bevor es perfekt oder allgemein anerkannt ist.",
        practicalKey:
          "Schaffen Sie regelmäßig in einem Raum, in dem das Ergebnis nicht bewertet werden muss.",
        affirmation:
          "Mein Wert hängt nicht nur von der Anerkennung ab, die ich erhalte.",
      },

      Virgo: {
        title:
          "Die Angst vor Fehlern, Unordnung und mangelnder Nützlichkeit",
        introduction:
          "Saturn in der Jungfrau kann Anspruch, Pflichtgefühl und Detailorientierung verstärken. Diese Position gibt große Fähigkeit zur Meisterschaft, kann jedoch auch dauerhafte Selbstkritik fördern.",
        automaticPattern:
          "Sie können eine Handlung hinauszögern, während Sie versuchen, alle möglichen Fehler zu beseitigen.",
        hiddenFear:
          "Die Angst, ineffektiv, unvollkommen oder Erwartungen nicht gewachsen zu sein.",
        defenseMechanism:
          "Kontrolle, Überanalyse, Perfektionismus oder sehr starre Organisation.",
        consequence:
          "Sie können mehr Energie in Fehlervermeidung investieren als in die Anerkennung dessen, was bereits funktioniert.",
        liberation:
          "Ihre Befreiung entsteht durch die Akzeptanz realistischer Entwicklung auf Grundlage von Erfahrung.",
        practicalKey:
          "Definieren Sie vor Beginn einer Aufgabe, was gut genug ist.",
        affirmation:
          "Ich kann kompetent sein, ohne unmögliche Perfektion von mir zu verlangen.",
      },

      Libra: {
        title:
          "Die Angst vor Konflikt, Zurückweisung und Entscheidungen, die anderen missfallen",
        introduction:
          "Saturn in der Waage kann Beziehungen sehr wichtig, aber auch anspruchsvoll machen. Sie können sich stark verantwortlich für Gleichgewicht und Zufriedenheit anderer fühlen.",
        automaticPattern:
          "Sie können Entscheidungen hinauszögern, um Spannungen oder Enttäuschungen zu vermeiden.",
        hiddenFear:
          "Die Angst vor Zurückweisung, als ungerecht beurteilt oder für einen Bruch der Harmonie verantwortlich gemacht zu werden.",
        defenseMechanism:
          "Zögern, übermäßige Diplomatie, Selbstzurücknahme oder indirekte Kontrolle der Beziehung.",
        consequence:
          "Sie können scheinbaren Frieden bewahren und gleichzeitig stille Unzufriedenheit ansammeln.",
        liberation:
          "Ihre Befreiung beginnt, wenn Sie verstehen, dass eine gesunde Beziehung Unterschiede und Grenzen aushalten kann.",
        practicalKey:
          "Äußern Sie Ihre Position, bevor Sie sofort nach einem Kompromiss suchen.",
        affirmation:
          "Ich kann eine Beziehung schützen, ohne meine Wahrheit aufzugeben.",
      },

      Scorpio: {
        title:
          "Die Angst vor Kontrollverlust, Verrat oder tiefer Verletzlichkeit",
        introduction:
          "Saturn im Skorpion kann Gefühle, Vertrauen und Machtteilung besonders empfindlich machen. Sie können große innere Stärke besitzen und Ihre Verletzlichkeit gleichzeitig stark schützen.",
        automaticPattern:
          "Sie können beobachten, testen oder zurückhalten, bevor Sie sich vollständig einlassen.",
        hiddenFear:
          "Die Angst, Macht zu verlieren, manipuliert zu werden oder emotional abhängig zu werden.",
        defenseMechanism:
          "Schweigen, Kontrolle, Misstrauen oder verstärkte Wachsamkeit.",
        consequence:
          "Sie können eine Distanz aufrechterhalten, die genau das tiefe Vertrauen verhindert, nach dem Sie suchen.",
        liberation:
          "Ihre Befreiung entsteht durch schrittweise, bewusst gewählte Verletzlichkeit mit klaren Grenzen.",
        practicalKey:
          "Teilen Sie eine maßvolle Wahrheit mit einer vertrauenswürdigen Person, ohne auf absolute Gewissheit zu warten.",
        affirmation:
          "Ich kann mich öffnen, ohne mein Urteilsvermögen aufzugeben.",
      },

      Sagittarius: {
        title:
          "Die Angst, begrenzt, eingeschlossen oder des Sinns beraubt zu werden",
        introduction:
          "Saturn im Schützen kann Spannung zwischen Expansionsbedürfnis und der Notwendigkeit erzeugen, Überzeugungen zu strukturieren. Sie können fürchten, dass Bindung Ihre Möglichkeiten einschränkt.",
        automaticPattern:
          "Sie können die Richtung wechseln, wenn die Realität zu viel Geduld oder Kontinuität verlangt.",
        hiddenFear:
          "Die Angst, Freiheit zu verlieren, den falschen Weg zu wählen oder zu entdecken, dass Ihre Überzeugungen nicht ausreichen.",
        defenseMechanism:
          "Flucht, übermäßiger Optimismus, Verallgemeinerung oder die ständige Suche nach einem neuen Horizont.",
        consequence:
          "Sie können Möglichkeiten vervielfachen, ohne ihnen genügend Zeit zu geben, zu wirklicher Erfahrung zu werden.",
        liberation:
          "Ihre Befreiung beginnt, wenn Sie verstehen, dass Disziplin Ihre Freiheit unterstützen kann, statt sie aufzuheben.",
        practicalKey:
          "Wählen Sie eine Richtung und geben Sie ihr genügend Zeit, bevor Sie schließen, dass sie Sie begrenzt.",
        affirmation:
          "Ich kann mich binden, ohne meine innere Freiheit zu verlieren.",
      },

      Capricorn: {
        title:
          "Die Angst vor Scheitern, Schwäche und dem Gefühl, niemals genug zu tun",
        introduction:
          "Saturn im Steinbock verstärkt Pflichtgefühl, Ehrgeiz und Aufbaukraft. Diese Stärke kann schwer werden, wenn Sie Ihren Wert an Produktivität knüpfen.",
        automaticPattern:
          "Sie können Ihre Anstrengung erhöhen, wenn Sie müde oder besorgt sind, statt langsamer zu werden.",
        hiddenFear:
          "Die Angst zu scheitern, Glaubwürdigkeit zu verlieren oder keinen Respekt zu verdienen.",
        defenseMechanism:
          "Kontrolle, übermäßige Arbeit, emotionale Distanz oder die Weigerung, Grenzen zu zeigen.",
        consequence:
          "Sie können Ihre Ziele erreichen und trotzdem ständig das Gefühl haben, dass es noch nicht genug ist.",
        liberation:
          "Ihre Befreiung entsteht durch eine Definition von Erfolg, die Gesundheit, Zeit und inneres Leben einschließt.",
        practicalKey:
          "Messen Sie Ihren Fortschritt an Kohärenz und nicht nur an der Menge des Geleisteten.",
        affirmation:
          "Mein Wert hängt nicht nur davon ab, was ich produzieren kann.",
      },

      Aquarius: {
        title:
          "Die Angst, Freiheit zu verlieren oder nicht dazuzugehören",
        introduction:
          "Saturn im Wassermann kann Spannung zwischen Unabhängigkeitswunsch und dem Bedürfnis nach Teilnahme an einer Gruppe oder kollektiven Vision erzeugen.",
        automaticPattern:
          "Sie können Abstand nehmen, wenn eine Beziehung, Struktur oder Verpflichtung Ihre Autonomie einzuschränken scheint.",
        hiddenFear:
          "Die Angst, kontrolliert, normalisiert oder wegen Ihrer Besonderheit abgelehnt zu werden.",
        defenseMechanism:
          "Distanz, Opposition, übermäßige Unabhängigkeit oder Rationalisierung.",
        consequence:
          "Sie können sich vor Zurückweisung schützen, indem Sie eine Distanz aufrechterhalten, die echte Zugehörigkeit verhindert.",
        liberation:
          "Ihre Befreiung beginnt, wenn Sie entdecken, dass Zusammenarbeit nicht den Verlust Ihrer Einzigartigkeit verlangt.",
        practicalKey:
          "Beteiligen Sie sich an einem kollektiven Projekt, in dem Ihre Rolle und Grenzen klar definiert sind.",
        affirmation:
          "Ich kann dazugehören, ohne meine Besonderheit aufzugeben.",
      },

      Pisces: {
        title:
          "Die Angst, überwältigt, verloren oder unfähig zu klaren Grenzen zu sein",
        introduction:
          "Saturn in den Fischen kann Sensibilität schwer eingrenzbar machen. Sie können vieles wahrnehmen und gleichzeitig daran zweifeln, ob Sie ihm klare Form geben können.",
        automaticPattern:
          "Sie können eine zu anspruchsvolle Situation vermeiden, die Gefühle anderer aufnehmen oder warten, dass Klarheit von selbst entsteht.",
        hiddenFear:
          "Die Angst, überwältigt, missverstanden oder konkreten Anforderungen nicht gewachsen zu sein.",
        defenseMechanism:
          "Rückzug, Vermeidung, Idealisierung oder stilles Opfer.",
        consequence:
          "Sie können emotionale Verantwortung tragen, die nicht Ihnen gehört, oder zu wenig Struktur besitzen, um Ihre Energie zu schützen.",
        liberation:
          "Ihre Befreiung entsteht durch einfache Grenzen, stabile Gewohnheiten und eine klare Unterscheidung zwischen Mitgefühl und Verantwortung.",
        practicalKey:
          "Fragen Sie sich regelmäßig, was tatsächlich Ihnen gehört und was zu anderen gehört.",
        affirmation:
          "Meine Grenzen schützen meine Sensibilität und ermöglichen ihr, zu einer Stärke zu werden.",
      },
    },

    plutoBlocks: {
      Aries:
        "Pluto im Widder kann Themen rund um Willen, Selbstbehauptung und das Bedürfnis verstärken, die eigene Richtung zu kontrollieren.",
      Taurus:
        "Pluto im Stier kann Ängste rund um Verlust, Sicherheit, Ressourcen und materielle Stabilität verstärken.",
      Gemini:
        "Pluto in den Zwillingen kann das Denken sehr durchdringend machen, aber auch zu übermäßiger Analyse von Worten, Absichten oder Informationen führen.",
      Cancer:
        "Pluto im Krebs kann Bindungen an Vergangenheit, Familie, emotionale Erinnerung und Schutzbedürfnis verstärken.",
      Leo:
        "Pluto im Löwen kann Themen rund um Anerkennung, schöpferische Kraft und die Angst verstärken, keine Spur zu hinterlassen.",
      Virgo:
        "Pluto in der Jungfrau kann das Bedürfnis nach Kontrolle, Präzision und Detailbeherrschung verstärken.",
      Libra:
        "Pluto in der Waage kann Machtverhältnisse, Abhängigkeit oder durch Beziehungen erlebte Transformationen intensivieren.",
      Scorpio:
        "Pluto im Skorpion verstärkt emotionale Tiefe, Vertrauensfragen und die Notwendigkeit, Kontrollmechanismen zu transformieren.",
      Sagittarius:
        "Pluto im Schützen kann Überzeugungen sehr kraftvoll machen und Schwierigkeiten erzeugen, bestimmte innere Wahrheiten infrage zu stellen.",
      Capricorn:
        "Pluto im Steinbock kann die Angst verstärken, Kontrolle, Autorität, Erfolg oder aufgebaute Strukturen zu verlieren.",
      Aquarius:
        "Pluto im Wassermann kann Widerstand gegen Systeme, kollektive Zwänge oder vorgegebene Modelle verstärken.",
      Pisces:
        "Pluto in den Fischen kann Sensibilität gegenüber kollektiven Emotionen, Orientierungsverlust und unsichtbaren Grenzen verstärken.",
    },

    neptuneBlocks: {
      Aries:
        "Neptun im Widder kann die Unterscheidung zwischen Intuition und Impuls verwischen, besonders wenn Sie schnell handeln möchten.",
      Taurus:
        "Neptun im Stier kann Sicherheit, Komfort oder bestimmte materielle Bindungen idealisieren.",
      Gemini:
        "Neptun in den Zwillingen kann Gedanken sehr intuitiv machen, aber manchmal schwer zu ordnen oder zu überprüfen.",
      Cancer:
        "Neptun im Krebs kann Erinnerungen, Nostalgie und die Aufnahme familiärer Gefühle verstärken.",
      Leo:
        "Neptun im Löwen kann Anerkennung, Liebe oder die kreative Rolle idealisieren, die Sie verkörpern möchten.",
      Virgo:
        "Neptun in der Jungfrau kann die Unterscheidung zwischen angemessener Hilfe, Opfer und übermäßiger Verantwortung erschweren.",
      Libra:
        "Neptun in der Waage kann die Idealisierung von Partnerschaft, Harmonie oder der geliebten Person fördern.",
      Scorpio:
        "Neptun im Skorpion kann Intuition verstärken, aber auch Ängste rund um Unausgesprochenes und verborgene Absichten.",
      Sagittarius:
        "Neptun im Schützen kann einen Glauben, eine Richtung oder ein Versprechen von Expansion idealisieren.",
      Capricorn:
        "Neptun im Steinbock kann die Unterscheidung zwischen persönlichem Ehrgeiz und äußeren Erwartungen erschweren.",
      Aquarius:
        "Neptun im Wassermann kann eine Sache, Gruppe oder kollektive Vision idealisieren.",
      Pisces:
        "Neptun in den Fischen verstärkt Sensibilität sehr stark und verlangt besonders bewusste Grenzen.",
    },
  },

  it: {
    analysis:
      "Analisi Firma",

    title:
      "I tuoi blocchi inconsci",

    subtitle:
      "I riflessi di protezione, le paure nascoste e i meccanismi che possono rallentare la tua evoluzione.",

    mainPattern:
      "Il tuo schema principale",

    automaticReflex:
      "Riflesso automatico",

    reproduceWithoutWanting:
      "Ciò che puoi riprodurre senza volerlo",

    hiddenFearLabel:
      "Paura nascosta",

    mechanismAvoids:
      "Ciò che il tuo meccanismo cerca di evitare",

    defenseMechanismLabel:
      "Il tuo meccanismo di difesa",

    blockQuote:
      "«Un blocco non è una debolezza. Spesso rappresenta una vecchia strategia di protezione che continua ad agire anche quando la situazione è cambiata.»",

    roots:
      "Le radici del meccanismo",

    understandRoots:
      "Comprendere ciò che protegge, controlla o idealizza",

    rootsIntro:
      "Saturno mostra paure, limiti e apprendimenti che richiedono tempo. Plutone rivela i meccanismi profondi legati al controllo, alla perdita e alla trasformazione. Nettuno indica le zone nelle quali riferimenti, limiti o aspettative possono diventare meno chiari.",

    saturn:
      "Saturno",

    pluto:
      "Plutone",

    neptune:
      "Nettuno",

    moon:
      "Luna",

    saturnRole:
      "Le tue paure, i tuoi limiti e la padronanza che stai costruendo.",

    plutoRole:
      "Le tue trasformazioni profonde e il tuo rapporto con il controllo.",

    neptuneRole:
      "Le tue idealizzazioni, la tua sensibilità e i tuoi confini.",

    moonRole:
      "Il tuo bisogno di sicurezza emotiva e le tue reazioni istintive.",

    plutoDepth:
      "La profondità di Plutone",

    neptuneFog:
      "La nebbia di Nettuno",

    possibleConsequence:
      "La possibile conseguenza",

    moveBeyond:
      "Superare i vecchi meccanismi",

    transformProtection:
      "Trasformare la protezione in consapevolezza",

    liberationIntro:
      "Non superi un blocco combattendolo costantemente. Inizi a trasformarlo quando riconosci ciò che cerca di proteggere e sviluppi una risposta più adatta alla tua realtà attuale.",

    liberationLabel:
      "Liberazione",

    evolutionInvites:
      "Ciò che la tua evoluzione ti invita a comprendere",

    practicalKeyLabel:
      "Chiave pratica",

    newResponse:
      "Una nuova risposta da sperimentare",

    threeSteps:
      "Tre passaggi per interrompere uno schema ripetitivo",

    step1:
      "Identifica il momento preciso in cui la tua reazione diventa automatica: chiusura, controllo, fuga, silenzio, giustificazione o iperattività.",

    step2:
      "Chiediti quale vecchia paura cerca di proteggerti e se corrisponde realmente alla situazione presente.",

    step3:
      "Scegli una risposta più piccola ma diversa: parlare, chiedere, rallentare, porre un limite o accettare di non poter controllare tutto.",

    affirmationLabel:
      "La tua affermazione Firma",

    plutoFallback:
      "Plutone rivela i meccanismi profondi che cercano di conservare il controllo quando attraversi un periodo di incertezza o trasformazione.",

    neptuneFallback:
      "Nettuno mostra le zone in cui intuizione, idealizzazione o sensibilità possono rendere alcuni limiti più difficili da identificare.",

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
          "La paura di non essere abbastanza forte o sufficientemente legittimo",
        introduction:
          "Saturno in Ariete può creare tensione tra il desiderio di agire liberamente e la paura di sbagliare, fallire o non essere preso sul serio. Puoi alternare tra contenimento e reazioni molto assertive.",
        automaticPattern:
          "Puoi aspettare troppo prima di agire e poi impegnarti bruscamente per riprendere il controllo.",
        hiddenFear:
          "La paura di apparire debole, dipendente o incapace di difendere la tua posizione.",
        defenseMechanism:
          "Impazienza, rigidità, confronto o bisogno di fare tutto da solo.",
        consequence:
          "Puoi spendere molta energia per dimostrare la tua autonomia invece di utilizzarla per avanzare.",
        liberation:
          "La tua liberazione comincia quando accetti che il coraggio non significa assenza di esitazione, ma capacità di agire nonostante essa.",
        practicalKey:
          "Scegli un’azione precisa, realistica e volontaria invece di una reazione destinata a dimostrare la tua forza.",
        affirmation:
          "Posso agire con coraggio senza dover controllare tutto immediatamente.",
      },

      Taurus: {
        title:
          "La paura di perdere riferimenti, risorse o sicurezza",
        introduction:
          "Saturno in Toro può rafforzare il bisogno di controllare ciò che sembra stabile. Puoi sviluppare grande resistenza, ma anche rimanere a lungo legato a una situazione per paura della mancanza o di dover ricominciare.",
        automaticPattern:
          "Puoi conservare un’abitudine, un legame o una struttura anche quando non risponde più realmente ai tuoi bisogni.",
        hiddenFear:
          "La paura dell’instabilità, della mancanza o di perdere ciò che hai costruito.",
        defenseMechanism:
          "Resistenza, prudenza eccessiva, attaccamento o difficoltà a correre un rischio.",
        consequence:
          "Puoi confondere sicurezza e immobilità, rallentando alcune trasformazioni necessarie.",
        liberation:
          "La tua liberazione passa dalla costruzione di una fiducia interiore indipendente da ciò che possiedi o controlli.",
        practicalKey:
          "Introduci i cambiamenti progressivamente affinché il tuo bisogno di stabilità possa accompagnare la tua evoluzione.",
        affirmation:
          "Posso evolvere senza perdere la solidità che mi protegge.",
      },

      Gemini: {
        title:
          "La paura di non sapere, comprendere male o esprimerti male",
        introduction:
          "Saturno in Gemelli può rendere la comunicazione più seria, prudente o controllata. Puoi dubitare della tua intelligenza nonostante una reale capacità di analisi.",
        automaticPattern:
          "Puoi riflettere a lungo prima di parlare, modificare più volte le tue idee o temere di non trovare le parole giuste.",
        hiddenFear:
          "La paura di essere frainteso, giudicato intellettualmente o incapace di rispondere correttamente.",
        defenseMechanism:
          "Silenzio, intellettualizzazione, accumulo di informazioni o comunicazione molto controllata.",
        consequence:
          "Puoi trattenere un pensiero pertinente soltanto perché non sembra ancora perfetto.",
        liberation:
          "La tua liberazione comincia quando accetti che la chiarezza si costruisce anche attraverso lo scambio e l’esperienza.",
        practicalKey:
          "Esprimi un’idea semplice prima di cercare di sviluppare una risposta completa.",
        affirmation:
          "Il mio pensiero diventa più forte quando accetto di condividerlo.",
      },

      Cancer: {
        title:
          "La paura di dipendere, essere rifiutato o mancare di sicurezza affettiva",
        introduction:
          "Saturno in Cancro può rendere difficili da mostrare i bisogni emotivi. Puoi sentire profondamente mentre ti imponi di rimanere forte o autonomo.",
        automaticPattern:
          "Puoi prenderti cura degli altri nascondendo allo stesso tempo ciò di cui tu stesso hai bisogno.",
        hiddenFear:
          "La paura di essere abbandonato, incompreso o troppo vulnerabile.",
        defenseMechanism:
          "Ritiro, protezione eccessiva, controllo della casa o rifiuto di chiedere sostegno.",
        consequence:
          "Puoi creare grande distanza tra la tua reale sensibilità e l’immagine di stabilità che cerchi di mantenere.",
        liberation:
          "La tua liberazione passa dal riconoscimento dei tuoi bisogni emotivi come realtà legittime.",
        practicalKey:
          "Esprimi chiaramente un bisogno prima che si trasformi in stanchezza, risentimento o chiusura.",
        affirmation:
          "Posso ricevere sostegno senza perdere la mia autonomia.",
      },

      Leo: {
        title:
          "La paura di non essere riconosciuto, amato o abbastanza notevole",
        introduction:
          "Saturno in Leone può rendere l’espressione personale più controllata. Puoi possedere forte creatività e nello stesso tempo temere che non sia abbastanza valida o visibile.",
        automaticPattern:
          "Puoi trattenere la tua espressione fino a essere sicuro di ricevere una reazione favorevole.",
        hiddenFear:
          "La paura dell’umiliazione, del rifiuto o di non essere all’altezza del tuo potenziale.",
        defenseMechanism:
          "Orgoglio, distanza, esigenza o bisogno di controllare l’immagine proiettata.",
        consequence:
          "Puoi limitare la tua creatività aspettando una fiducia che può costruirsi soltanto creando.",
        liberation:
          "La tua liberazione comincia quando ti permetti di esprimere qualcosa prima che sia perfetto o apprezzato da tutti.",
        practicalKey:
          "Crea regolarmente in uno spazio nel quale il risultato non deve essere valutato.",
        affirmation:
          "Il mio valore non dipende soltanto dal riconoscimento che ricevo.",
      },

      Virgo: {
        title:
          "La paura dell’errore, del disordine e di non essere abbastanza utile",
        introduction:
          "Saturno in Vergine può rafforzare esigenza, senso del dovere e attenzione ai dettagli. Questa posizione dona grande capacità di padronanza, ma può anche alimentare un’autocritica costante.",
        automaticPattern:
          "Puoi rimandare un’azione cercando di eliminare tutti gli errori possibili.",
        hiddenFear:
          "La paura di essere inefficace, imperfetto o incapace di rispondere alle aspettative.",
        defenseMechanism:
          "Controllo, sovraanalisi, perfezionismo o organizzazione molto rigida.",
        consequence:
          "Puoi dedicare più energia a prevenire l’errore che a riconoscere ciò che funziona già.",
        liberation:
          "La tua liberazione passa dall’accettazione di un progresso realistico basato sull’esperienza.",
        practicalKey:
          "Definisci ciò che è abbastanza buono prima di iniziare un compito.",
        affirmation:
          "Posso essere competente senza pretendere da me una perfezione impossibile.",
      },

      Libra: {
        title:
          "La paura del conflitto, del rifiuto e di prendere una decisione che dispiace",
        introduction:
          "Saturno in Bilancia può rendere le relazioni molto importanti ma anche esigenti. Puoi sentire forte responsabilità verso l’equilibrio e la soddisfazione degli altri.",
        automaticPattern:
          "Puoi rimandare una decisione per evitare tensione o deludere qualcuno.",
        hiddenFear:
          "La paura di essere rifiutato, giudicato ingiusto o ritenuto responsabile della rottura dell’armonia.",
        defenseMechanism:
          "Esitazione, diplomazia eccessiva, cancellazione personale o controllo indiretto della relazione.",
        consequence:
          "Puoi preservare una pace apparente accumulando allo stesso tempo insoddisfazione silenziosa.",
        liberation:
          "La tua liberazione comincia quando comprendi che una relazione sana può sostenere una differenza o un limite.",
        practicalKey:
          "Esprimi la tua posizione prima di cercare immediatamente un compromesso.",
        affirmation:
          "Posso proteggere una relazione senza abbandonare la mia verità.",
      },

      Scorpio: {
        title:
          "La paura di perdere il controllo, essere tradito o profondamente vulnerabile",
        introduction:
          "Saturno in Scorpione può rendere particolarmente sensibili emozioni, fiducia e condivisione del potere. Puoi possedere grande forza interiore proteggendo al tempo stesso strettamente la tua vulnerabilità.",
        automaticPattern:
          "Puoi osservare, mettere alla prova o trattenere prima di impegnarti completamente.",
        hiddenFear:
          "La paura di perdere il tuo potere, essere manipolato o dipendere emotivamente.",
        defenseMechanism:
          "Silenzio, controllo, diffidenza o intensificazione della vigilanza.",
        consequence:
          "Puoi mantenere una distanza che impedisce proprio la fiducia profonda che cerchi.",
        liberation:
          "La tua liberazione passa da una vulnerabilità progressiva, scelta e accompagnata da limiti chiari.",
        practicalKey:
          "Condividi una verità misurata con una persona affidabile senza attendere una certezza assoluta.",
        affirmation:
          "Posso aprirmi senza abbandonare il mio discernimento.",
      },

      Sagittarius: {
        title:
          "La paura di essere limitato, rinchiuso o privato di significato",
        introduction:
          "Saturno in Sagittario può creare tensione tra bisogno di espansione e necessità di strutturare le tue convinzioni. Puoi temere che un impegno riduca le tue possibilità.",
        automaticPattern:
          "Puoi cambiare direzione quando la realtà richiede troppa pazienza o continuità.",
        hiddenFear:
          "La paura di perdere la libertà, scegliere la strada sbagliata o scoprire che le tue convinzioni sono insufficienti.",
        defenseMechanism:
          "Fuga, ottimismo eccessivo, generalizzazione o ricerca costante di un nuovo orizzonte.",
        consequence:
          "Puoi moltiplicare le possibilità senza concedere loro il tempo di diventare una vera esperienza.",
        liberation:
          "La tua liberazione comincia quando comprendi che la disciplina può sostenere la tua libertà invece di annullarla.",
        practicalKey:
          "Scegli una direzione e concedile abbastanza tempo prima di concludere che ti limita.",
        affirmation:
          "Posso impegnarmi senza perdere la mia libertà interiore.",
      },

      Capricorn: {
        title:
          "La paura del fallimento, della debolezza e di non fare mai abbastanza",
        introduction:
          "Saturno in Capricorno rafforza senso del dovere, ambizione e capacità di costruire. Questa forza può diventare pesante quando associ il tuo valore alla produttività.",
        automaticPattern:
          "Puoi aumentare i tuoi sforzi quando sei stanco o preoccupato invece di rallentare.",
        hiddenFear:
          "La paura di fallire, perdere credibilità o non meritare rispetto.",
        defenseMechanism:
          "Controllo, lavoro eccessivo, distanza emotiva o rifiuto di mostrare un limite.",
        consequence:
          "Puoi raggiungere i tuoi obiettivi continuando a sentire che non è ancora abbastanza.",
        liberation:
          "La tua liberazione passa da una definizione del successo che includa salute, tempo e vita interiore.",
        practicalKey:
          "Misura i tuoi progressi attraverso la coerenza e non soltanto attraverso la quantità realizzata.",
        affirmation:
          "Il mio valore non dipende soltanto da ciò che riesco a produrre.",
      },

      Aquarius: {
        title:
          "La paura di perdere la tua libertà o di non appartenere",
        introduction:
          "Saturno in Acquario può creare tensione tra desiderio d’indipendenza e bisogno di partecipare a un gruppo o a una visione collettiva.",
        automaticPattern:
          "Puoi prendere le distanze quando una relazione, struttura o impegno sembra limitare la tua autonomia.",
        hiddenFear:
          "La paura di essere controllato, normalizzato o rifiutato per la tua differenza.",
        defenseMechanism:
          "Distacco, opposizione, indipendenza eccessiva o razionalizzazione.",
        consequence:
          "Puoi proteggerti dal rifiuto mantenendo una distanza che impedisce una vera appartenenza.",
        liberation:
          "La tua liberazione comincia quando scopri che collaborare non richiede la scomparsa della tua unicità.",
        practicalKey:
          "Partecipa a un progetto collettivo nel quale il tuo ruolo e i tuoi limiti siano chiaramente definiti.",
        affirmation:
          "Posso appartenere senza rinunciare alla mia differenza.",
      },

      Pisces: {
        title:
          "La paura di essere sopraffatto, perso o incapace di porre limiti",
        introduction:
          "Saturno in Pesci può rendere difficile contenere la sensibilità. Puoi percepire molte cose e allo stesso tempo dubitare della tua capacità di dare loro una forma chiara.",
        automaticPattern:
          "Puoi evitare una situazione troppo esigente, assorbire le emozioni degli altri o aspettare che la chiarezza compaia da sola.",
        hiddenFear:
          "La paura di essere sopraffatto, incompreso o incapace di rispondere alle esigenze concrete.",
        defenseMechanism:
          "Ritiro, evitamento, idealizzazione o sacrificio silenzioso.",
        consequence:
          "Puoi portare responsabilità emotive che non ti appartengono o non avere abbastanza struttura per proteggere la tua energia.",
        liberation:
          "La tua liberazione passa attraverso limiti semplici, abitudini stabili e una chiara distinzione tra compassione e responsabilità.",
        practicalKey:
          "Chiediti regolarmente ciò che ti appartiene davvero e ciò che appartiene agli altri.",
        affirmation:
          "I miei limiti proteggono la mia sensibilità e le permettono di diventare una forza.",
      },
    },

    plutoBlocks: {
      Aries:
        "Plutone in Ariete può intensificare i temi legati alla volontà, all’affermazione e al bisogno di controllare la tua direzione.",
      Taurus:
        "Plutone in Toro può amplificare le paure legate alla perdita, alla sicurezza, alle risorse e alla stabilità materiale.",
      Gemini:
        "Plutone in Gemelli può rendere il pensiero molto penetrante, ma anche creare una tendenza ad analizzare eccessivamente parole, intenzioni o informazioni.",
      Cancer:
        "Plutone in Cancro può intensificare i legami con il passato, la famiglia, la memoria emotiva e il bisogno di protezione.",
      Leo:
        "Plutone in Leone può amplificare i temi legati al riconoscimento, al potere creativo e alla paura di non lasciare traccia.",
      Virgo:
        "Plutone in Vergine può rafforzare il bisogno di controllo, precisione e padronanza dei dettagli.",
      Libra:
        "Plutone in Bilancia può intensificare rapporti di potere, dipendenza o trasformazioni vissute attraverso le relazioni.",
      Scorpio:
        "Plutone in Scorpione amplifica profondità emotiva, questioni di fiducia e necessità di trasformare i meccanismi di controllo.",
      Sagittarius:
        "Plutone in Sagittario può rendere le convinzioni molto potenti e creare difficoltà nel mettere in discussione alcune verità interiori.",
      Capricorn:
        "Plutone in Capricorno può rafforzare la paura di perdere controllo, autorità, successo o strutture costruite.",
      Aquarius:
        "Plutone in Acquario può intensificare la resistenza ai sistemi, ai vincoli collettivi o ai modelli imposti.",
      Pisces:
        "Plutone in Pesci può amplificare la sensibilità alle emozioni collettive, alla perdita di riferimenti e ai confini invisibili.",
    },

    neptuneBlocks: {
      Aries:
        "Nettuno in Ariete può confondere la distinzione tra intuizione e impulso, soprattutto quando desideri agire rapidamente.",
      Taurus:
        "Nettuno in Toro può idealizzare sicurezza, comfort o alcuni attaccamenti materiali.",
      Gemini:
        "Nettuno in Gemelli può rendere i pensieri molto intuitivi, ma talvolta difficili da organizzare o verificare.",
      Cancer:
        "Nettuno in Cancro può amplificare ricordi, nostalgia e assorbimento delle emozioni familiari.",
      Leo:
        "Nettuno in Leone può idealizzare riconoscimento, amore o il ruolo creativo che desideri incarnare.",
      Virgo:
        "Nettuno in Vergine può rendere difficile distinguere tra aiuto giusto, sacrificio e responsabilità eccessiva.",
      Libra:
        "Nettuno in Bilancia può favorire l’idealizzazione della coppia, dell’armonia o della persona amata.",
      Scorpio:
        "Nettuno in Scorpione può amplificare intuizioni, ma anche timori legati ai non detti e alle intenzioni nascoste.",
      Sagittarius:
        "Nettuno in Sagittario può idealizzare una convinzione, una direzione o una promessa di espansione.",
      Capricorn:
        "Nettuno in Capricorno può rendere difficile distinguere tra ambizione personale e aspettative esterne.",
      Aquarius:
        "Nettuno in Acquario può idealizzare una causa, un gruppo o una visione collettiva.",
      Pisces:
        "Nettuno in Pesci amplifica fortemente la sensibilità e richiede limiti particolarmente consapevoli.",
    },
  },

  pt: {
    analysis:
      "Análise Assinatura",

    title:
      "Seus bloqueios inconscientes",

    subtitle:
      "Os reflexos de proteção, os medos ocultos e os mecanismos que podem desacelerar sua evolução.",

    mainPattern:
      "Seu padrão principal",

    automaticReflex:
      "Reflexo automático",

    reproduceWithoutWanting:
      "O que você pode repetir sem perceber",

    hiddenFearLabel:
      "Medo oculto",

    mechanismAvoids:
      "O que seu mecanismo procura evitar",

    defenseMechanismLabel:
      "Seu mecanismo de defesa",

    blockQuote:
      "“Um bloqueio não é uma fraqueza. Muitas vezes representa uma antiga estratégia de proteção que continua agindo mesmo quando a situação mudou.”",

    roots:
      "As raízes do mecanismo",

    understandRoots:
      "Compreender aquilo que protege, controla ou idealiza",

    rootsIntro:
      "Saturno mostra medos, limites e aprendizados que exigem tempo. Plutão revela mecanismos profundos ligados ao controle, à perda e à transformação. Netuno indica as áreas em que referências, limites ou expectativas podem se tornar menos claros.",

    saturn:
      "Saturno",

    pluto:
      "Plutão",

    neptune:
      "Netuno",

    moon:
      "Lua",

    saturnRole:
      "Seus medos, seus limites e o domínio que você está construindo.",

    plutoRole:
      "Suas transformações profundas e sua relação com o controle.",

    neptuneRole:
      "Suas idealizações, sua sensibilidade e seus limites.",

    moonRole:
      "Sua necessidade de segurança emocional e suas reações instintivas.",

    plutoDepth:
      "A profundidade de Plutão",

    neptuneFog:
      "A névoa de Netuno",

    possibleConsequence:
      "A consequência possível",

    moveBeyond:
      "Superar antigos mecanismos",

    transformProtection:
      "Transformar proteção em consciência",

    liberationIntro:
      "Você não supera um bloqueio lutando constantemente contra ele. Você começa a transformá-lo quando reconhece aquilo que ele procura proteger e desenvolve uma resposta mais adequada à sua realidade atual.",

    liberationLabel:
      "Liberação",

    evolutionInvites:
      "O que sua evolução convida você a compreender",

    practicalKeyLabel:
      "Chave prática",

    newResponse:
      "Uma nova resposta para experimentar",

    threeSteps:
      "Três etapas para interromper um padrão repetitivo",

    step1:
      "Identifique o momento exato em que sua reação se torna automática: fechamento, controle, fuga, silêncio, justificativa ou hiperatividade.",

    step2:
      "Pergunte a si mesmo qual medo antigo procura proteger você e se ele realmente corresponde à situação presente.",

    step3:
      "Escolha uma resposta menor, mas diferente: falar, pedir, diminuir o ritmo, colocar um limite ou aceitar que você não pode controlar tudo.",

    affirmationLabel:
      "Sua afirmação Assinatura",

    plutoFallback:
      "Plutão revela os mecanismos profundos que procuram conservar o controle quando você atravessa um período de incerteza ou transformação.",

    neptuneFallback:
      "Netuno mostra as áreas em que intuição, idealização ou sensibilidade podem tornar certos limites mais difíceis de identificar.",

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
          "O medo de não ser forte ou legítimo o suficiente",
        introduction:
          "Saturno em Áries pode criar tensão entre o desejo de agir livremente e o medo de errar, fracassar ou não ser levado a sério. Você pode alternar entre contenção e reações muito afirmativas.",
        automaticPattern:
          "Você pode esperar tempo demais antes de agir e depois se envolver bruscamente para recuperar o controle.",
        hiddenFear:
          "O medo de parecer fraco, dependente ou incapaz de defender sua posição.",
        defenseMechanism:
          "Impaciência, rigidez, confronto ou necessidade de fazer tudo sozinho.",
        consequence:
          "Você pode gastar muita energia provando sua autonomia em vez de utilizá-la para avançar.",
        liberation:
          "Sua liberação começa quando você aceita que coragem não significa ausência de hesitação, mas capacidade de agir apesar dela.",
        practicalKey:
          "Escolha uma ação precisa, realista e deliberada em vez de uma reação destinada a provar sua força.",
        affirmation:
          "Posso agir com coragem sem precisar dominar tudo imediatamente.",
      },

      Taurus: {
        title:
          "O medo de perder referências, recursos ou segurança",
        introduction:
          "Saturno em Touro pode reforçar a necessidade de controlar aquilo que parece estável. Você pode desenvolver grande resistência, mas também permanecer muito tempo preso a uma situação por medo de faltar algo ou precisar recomeçar.",
        automaticPattern:
          "Você pode conservar um hábito, vínculo ou estrutura mesmo quando já não responde realmente às suas necessidades.",
        hiddenFear:
          "O medo da instabilidade, da falta ou de perder aquilo que construiu.",
        defenseMechanism:
          "Resistência, prudência excessiva, apego ou dificuldade para assumir um risco.",
        consequence:
          "Você pode confundir segurança com imobilidade, desacelerando algumas transformações necessárias.",
        liberation:
          "Sua liberação passa pela construção de uma confiança interior independente daquilo que possui ou controla.",
        practicalKey:
          "Introduza mudanças progressivamente para que sua necessidade de estabilidade possa acompanhar sua evolução.",
        affirmation:
          "Posso evoluir sem perder a solidez que me protege.",
      },

      Gemini: {
        title:
          "O medo de não saber, compreender mal ou se expressar mal",
        introduction:
          "Saturno em Gêmeos pode tornar a comunicação mais séria, prudente ou controlada. Você pode duvidar da sua inteligência apesar de possuir verdadeira capacidade de análise.",
        automaticPattern:
          "Você pode pensar muito antes de falar, modificar várias vezes suas ideias ou temer não encontrar as palavras certas.",
        hiddenFear:
          "O medo de ser mal compreendido, julgado intelectualmente ou incapaz de responder corretamente.",
        defenseMechanism:
          "Silêncio, intelectualização, acúmulo de informações ou comunicação muito controlada.",
        consequence:
          "Você pode reter uma ideia pertinente apenas porque ela ainda não parece perfeita.",
        liberation:
          "Sua liberação começa quando aceita que clareza também se constrói através da troca e da experiência.",
        practicalKey:
          "Expresse uma ideia simples antes de tentar desenvolver uma resposta completa.",
        affirmation:
          "Meu pensamento se torna mais forte quando aceito compartilhá-lo.",
      },

      Cancer: {
        title:
          "O medo de depender, ser rejeitado ou não ter segurança emocional",
        introduction:
          "Saturno em Câncer pode tornar as necessidades emocionais difíceis de mostrar. Você pode sentir profundamente enquanto se obriga a permanecer forte ou autônomo.",
        automaticPattern:
          "Você pode cuidar dos outros escondendo ao mesmo tempo aquilo de que precisa.",
        hiddenFear:
          "O medo de ser abandonado, incompreendido ou vulnerável demais.",
        defenseMechanism:
          "Recolhimento, proteção excessiva, controle do lar ou recusa em pedir apoio.",
        consequence:
          "Você pode criar grande distância entre sua sensibilidade real e a imagem de estabilidade que procura manter.",
        liberation:
          "Sua liberação passa pelo reconhecimento das suas necessidades emocionais como realidades legítimas.",
        practicalKey:
          "Expresse claramente uma necessidade antes que ela se transforme em cansaço, ressentimento ou fechamento.",
        affirmation:
          "Posso receber apoio sem perder minha autonomia.",
      },

      Leo: {
        title:
          "O medo de não ser reconhecido, amado ou notável o suficiente",
        introduction:
          "Saturno em Leão pode tornar a expressão pessoal mais controlada. Você pode possuir forte criatividade e ao mesmo tempo temer que ela não seja suficientemente válida ou visível.",
        automaticPattern:
          "Você pode reter sua expressão até ter certeza de receber uma reação favorável.",
        hiddenFear:
          "O medo da humilhação, da rejeição ou de não estar à altura do próprio potencial.",
        defenseMechanism:
          "Orgulho, distância, exigência ou necessidade de controlar a imagem projetada.",
        consequence:
          "Você pode limitar sua criatividade enquanto espera uma confiança que só pode se construir criando.",
        liberation:
          "Sua liberação começa quando se permite expressar algo antes de estar perfeito ou unanimemente apreciado.",
        practicalKey:
          "Crie regularmente em um espaço no qual o resultado não precise ser avaliado.",
        affirmation:
          "Meu valor não depende apenas do reconhecimento que recebo.",
      },

      Virgo: {
        title:
          "O medo do erro, da desordem e de não ser útil o suficiente",
        introduction:
          "Saturno em Virgem pode reforçar exigência, senso do dever e atenção aos detalhes. Essa posição oferece grande capacidade de domínio, mas também pode alimentar autocrítica constante.",
        automaticPattern:
          "Você pode adiar uma ação tentando eliminar todos os erros possíveis.",
        hiddenFear:
          "O medo de ser ineficiente, imperfeito ou incapaz de corresponder às expectativas.",
        defenseMechanism:
          "Controle, excesso de análise, perfeccionismo ou organização muito rígida.",
        consequence:
          "Você pode dedicar mais energia a evitar erros do que a reconhecer aquilo que já funciona.",
        liberation:
          "Sua liberação passa pela aceitação de um progresso realista baseado na experiência.",
        practicalKey:
          "Defina aquilo que é bom o suficiente antes de iniciar uma tarefa.",
        affirmation:
          "Posso ser competente sem exigir de mim uma perfeição impossível.",
      },

      Libra: {
        title:
          "O medo do conflito, da rejeição e de tomar uma decisão que desagrade",
        introduction:
          "Saturno em Libra pode tornar os relacionamentos muito importantes, mas também exigentes. Você pode sentir grande responsabilidade pelo equilíbrio e pela satisfação dos outros.",
        automaticPattern:
          "Você pode adiar uma decisão para evitar criar tensão ou decepcionar alguém.",
        hiddenFear:
          "O medo de ser rejeitado, julgado injusto ou considerado responsável por uma ruptura da harmonia.",
        defenseMechanism:
          "Hesitação, diplomacia excessiva, apagamento pessoal ou controle indireto da relação.",
        consequence:
          "Você pode preservar uma paz aparente acumulando ao mesmo tempo insatisfação silenciosa.",
        liberation:
          "Sua liberação começa quando compreende que uma relação saudável pode suportar uma diferença ou um limite.",
        practicalKey:
          "Expresse sua posição antes de procurar imediatamente um compromisso.",
        affirmation:
          "Posso proteger uma relação sem abandonar minha verdade.",
      },

      Scorpio: {
        title:
          "O medo de perder o controle, ser traído ou profundamente vulnerável",
        introduction:
          "Saturno em Escorpião pode tornar emoções, confiança e compartilhamento de poder particularmente sensíveis. Você pode possuir grande força interior enquanto protege fortemente sua vulnerabilidade.",
        automaticPattern:
          "Você pode observar, testar ou reter antes de se envolver completamente.",
        hiddenFear:
          "O medo de perder seu poder, ser manipulado ou depender emocionalmente.",
        defenseMechanism:
          "Silêncio, controle, desconfiança ou intensificação da vigilância.",
        consequence:
          "Você pode manter uma distância que impede justamente a confiança profunda que procura.",
        liberation:
          "Sua liberação passa por uma vulnerabilidade progressiva, escolhida e acompanhada de limites claros.",
        practicalKey:
          "Compartilhe uma verdade medida com uma pessoa confiável sem esperar uma certeza absoluta.",
        affirmation:
          "Posso me abrir sem abandonar meu discernimento.",
      },

      Sagittarius: {
        title:
          "O medo de ser limitado, preso ou privado de sentido",
        introduction:
          "Saturno em Sagitário pode criar tensão entre necessidade de expansão e necessidade de estruturar suas convicções. Você pode temer que um compromisso reduza suas possibilidades.",
        automaticPattern:
          "Você pode mudar de direção quando a realidade exige paciência ou continuidade demais.",
        hiddenFear:
          "O medo de perder sua liberdade, escolher o caminho errado ou descobrir que suas convicções são insuficientes.",
        defenseMechanism:
          "Fuga, otimismo excessivo, generalização ou busca constante por um novo horizonte.",
        consequence:
          "Você pode multiplicar possibilidades sem lhes dar tempo suficiente para se tornarem experiência real.",
        liberation:
          "Sua liberação começa quando compreende que a disciplina pode sustentar sua liberdade em vez de anulá-la.",
        practicalKey:
          "Escolha uma direção e dê a ela tempo suficiente antes de concluir que ela limita você.",
        affirmation:
          "Posso me comprometer sem perder minha liberdade interior.",
      },

      Capricorn: {
        title:
          "O medo do fracasso, da fraqueza e de nunca fazer o suficiente",
        introduction:
          "Saturno em Capricórnio reforça senso do dever, ambição e capacidade de construir. Essa força pode se tornar pesada quando você associa seu valor à produtividade.",
        automaticPattern:
          "Você pode aumentar seus esforços quando está cansado ou preocupado em vez de diminuir o ritmo.",
        hiddenFear:
          "O medo de fracassar, perder credibilidade ou não merecer respeito.",
        defenseMechanism:
          "Controle, trabalho excessivo, distância emocional ou recusa em mostrar um limite.",
        consequence:
          "Você pode alcançar seus objetivos e ainda sentir constantemente que não é suficiente.",
        liberation:
          "Sua liberação passa por uma definição de sucesso que inclua saúde, tempo e vida interior.",
        practicalKey:
          "Meça seu progresso pela coerência e não apenas pela quantidade realizada.",
        affirmation:
          "Meu valor não depende apenas daquilo que consigo produzir.",
      },

      Aquarius: {
        title:
          "O medo de perder sua liberdade ou de não pertencer",
        introduction:
          "Saturno em Aquário pode criar tensão entre o desejo de independência e a necessidade de participar de um grupo ou visão coletiva.",
        automaticPattern:
          "Você pode se distanciar quando uma relação, estrutura ou compromisso parece limitar sua autonomia.",
        hiddenFear:
          "O medo de ser controlado, normalizado ou rejeitado por sua diferença.",
        defenseMechanism:
          "Distanciamento, oposição, independência excessiva ou racionalização.",
        consequence:
          "Você pode se proteger da rejeição mantendo uma distância que impede verdadeira sensação de pertencimento.",
        liberation:
          "Sua liberação começa quando descobre que colaborar não exige o desaparecimento da sua singularidade.",
        practicalKey:
          "Participe de um projeto coletivo no qual seu papel e seus limites estejam claramente definidos.",
        affirmation:
          "Posso pertencer sem renunciar à minha diferença.",
      },

      Pisces: {
        title:
          "O medo de ser sobrecarregado, perdido ou incapaz de estabelecer limites",
        introduction:
          "Saturno em Peixes pode tornar a sensibilidade difícil de conter. Você pode perceber muitas coisas e ao mesmo tempo duvidar da sua capacidade de lhes dar forma clara.",
        automaticPattern:
          "Você pode evitar uma situação exigente demais, absorver as emoções dos outros ou esperar que a clareza apareça sozinha.",
        hiddenFear:
          "O medo de ser sobrecarregado, incompreendido ou incapaz de responder às exigências concretas.",
        defenseMechanism:
          "Recolhimento, evitação, idealização ou sacrifício silencioso.",
        consequence:
          "Você pode carregar responsabilidades emocionais que não lhe pertencem ou não possuir estrutura suficiente para proteger sua energia.",
        liberation:
          "Sua liberação passa por limites simples, hábitos estáveis e uma distinção clara entre compaixão e responsabilidade.",
        practicalKey:
          "Pergunte regularmente a si mesmo aquilo que realmente lhe pertence e aquilo que pertence aos outros.",
        affirmation:
          "Meus limites protegem minha sensibilidade e permitem que ela se torne uma força.",
      },
    },

    plutoBlocks: {
      Aries:
        "Plutão em Áries pode intensificar questões ligadas à vontade, à afirmação e à necessidade de controlar sua direção.",
      Taurus:
        "Plutão em Touro pode ampliar medos ligados à perda, segurança, recursos e estabilidade material.",
      Gemini:
        "Plutão em Gêmeos pode tornar o pensamento muito penetrante, mas também criar tendência a analisar excessivamente palavras, intenções ou informações.",
      Cancer:
        "Plutão em Câncer pode intensificar vínculos com o passado, a família, a memória emocional e a necessidade de proteção.",
      Leo:
        "Plutão em Leão pode ampliar questões ligadas ao reconhecimento, ao poder criativo e ao medo de não deixar uma marca.",
      Virgo:
        "Plutão em Virgem pode reforçar a necessidade de controle, precisão e domínio dos detalhes.",
      Libra:
        "Plutão em Libra pode intensificar relações de poder, dependência ou transformações vividas através dos relacionamentos.",
      Scorpio:
        "Plutão em Escorpião amplia profundidade emocional, questões de confiança e necessidade de transformar mecanismos de controle.",
      Sagittarius:
        "Plutão em Sagitário pode tornar convicções muito poderosas e criar dificuldade para questionar certas verdades interiores.",
      Capricorn:
        "Plutão em Capricórnio pode reforçar o medo de perder controle, autoridade, sucesso ou estruturas construídas.",
      Aquarius:
        "Plutão em Aquário pode intensificar resistência a sistemas, limitações coletivas ou modelos impostos.",
      Pisces:
        "Plutão em Peixes pode ampliar sensibilidade às emoções coletivas, perda de referências e fronteiras invisíveis.",
    },

    neptuneBlocks: {
      Aries:
        "Netuno em Áries pode confundir a distinção entre intuição e impulso, especialmente quando você deseja agir rapidamente.",
      Taurus:
        "Netuno em Touro pode idealizar segurança, conforto ou certos apegos materiais.",
      Gemini:
        "Netuno em Gêmeos pode tornar os pensamentos muito intuitivos, mas às vezes difíceis de organizar ou verificar.",
      Cancer:
        "Netuno em Câncer pode ampliar lembranças, nostalgia e absorção das emoções familiares.",
      Leo:
        "Netuno em Leão pode idealizar reconhecimento, amor ou o papel criativo que você deseja encarnar.",
      Virgo:
        "Netuno em Virgem pode tornar difícil distinguir entre ajuda justa, sacrifício e responsabilidade excessiva.",
      Libra:
        "Netuno em Libra pode favorecer a idealização do casal, da harmonia ou da pessoa amada.",
      Scorpio:
        "Netuno em Escorpião pode ampliar intuições, mas também medos ligados ao não dito e às intenções ocultas.",
      Sagittarius:
        "Netuno em Sagitário pode idealizar uma crença, direção ou promessa de expansão.",
      Capricorn:
        "Netuno em Capricórnio pode tornar difícil distinguir entre ambição pessoal e expectativas externas.",
      Aquarius:
        "Netuno em Aquário pode idealizar uma causa, um grupo ou uma visão coletiva.",
      Pisces:
        "Netuno em Peixes amplia fortemente a sensibilidade e exige limites particularmente conscientes.",
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

export function localizeSignatureLifeBlocks(
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
  | Blocages selon Saturne
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const BLOCKS_BY_SATURN_SIGN:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\n\};(?=\n\n\/\*\n\|-+\n\| Transformation selon Pluton)/,
    `const BLOCKS_BY_SATURN_SIGN: Record<
  string,
  BlockProfile
> = ${JSON.stringify(
      labels.profiles,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Pluton
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /const PLUTO_BLOCKS:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\n\};(?=\n\n\/\*\n\|-+\n\| Influence de Neptune)/,
    `const PLUTO_BLOCKS: Record<string, string> = ${JSON.stringify(
      labels.plutoBlocks,
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
    /const NEPTUNE_BLOCKS:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\n\};(?=\n\n\/\*\n\|-+\n\| Utilitaires)/,
    `const NEPTUNE_BLOCKS: Record<string, string> = ${JSON.stringify(
      labels.neptuneBlocks,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Fallbacks dynamiques
  |--------------------------------------------------------------------------
  */

  out = replaceFlexibleText(
    out,
    "Pluton révèle les mécanismes profonds qui cherchent à conserver le contrôle lorsque vous traversez une période d’incertitude ou de transformation.",
    labels.plutoFallback,
  );

  out = replaceFlexibleText(
    out,
    "Neptune montre les zones où l’intuition, l’idéalisation ou la sensibilité peuvent rendre certaines limites plus difficiles à identifier.",
    labels.neptuneFallback,
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
        "Vos blocages inconscients",
        labels.title,
      ],

      [
        "Les réflexes de protection, les peurs cachées et les mécanismes qui peuvent freiner votre évolution.",
        labels.subtitle,
      ],

      [
        "Votre schéma principal",
        labels.mainPattern,
      ],

      [
        "Réflexe automatique",
        labels.automaticReflex,
      ],

      [
        "Ce que vous pouvez reproduire sans le vouloir",
        labels.reproduceWithoutWanting,
      ],

      [
        "Peur cachée",
        labels.hiddenFearLabel,
      ],

      [
        "Ce que votre mécanisme cherche à éviter",
        labels.mechanismAvoids,
      ],

      [
        "Votre mécanisme de défense",
        labels.defenseMechanismLabel,
      ],

      [
        "« Un blocage n’est pas une faiblesse. Il représente souvent une ancienne stratégie de protection qui continue d’agir même lorsque la situation a changé. »",
        labels.blockQuote,
      ],

      [
        "Les racines du mécanisme",
        labels.roots,
      ],

      [
        "Comprendre ce qui protège, contrôle ou idéalise",
        labels.understandRoots,
      ],

      [
        "Saturne montre les peurs, les limites et les apprentissages qui demandent du temps. Pluton révèle les mécanismes profonds liés au contrôle, à la perte et à la transformation. Neptune indique les zones où les repères, les limites ou les attentes peuvent devenir moins clairs.",
        labels.rootsIntro,
      ],

      [
        "Vos peurs, vos limites et la maîtrise que vous construisez.",
        labels.saturnRole,
      ],

      [
        "Vos transformations profondes et votre rapport au contrôle.",
        labels.plutoRole,
      ],

      [
        "Vos idéalisations, votre sensibilité et vos frontières.",
        labels.neptuneRole,
      ],

      [
        "Votre besoin de sécurité émotionnelle et vos réactions instinctives.",
        labels.moonRole,
      ],

      [
        "La profondeur de Pluton",
        labels.plutoDepth,
      ],

      [
        "Le brouillard de Neptune",
        labels.neptuneFog,
      ],

      [
        "La conséquence possible",
        labels.possibleConsequence,
      ],

      [
        "Dépasser les anciens mécanismes",
        labels.moveBeyond,
      ],

      [
        "Transformer la protection en conscience",
        labels.transformProtection,
      ],

      [
        "Vous ne dépassez pas un blocage en le combattant constamment. Vous commencez à le transformer lorsque vous reconnaissez ce qu’il cherche à protéger et que vous développez une réponse plus adaptée à votre réalité actuelle.",
        labels.liberationIntro,
      ],

      [
        "Libération",
        labels.liberationLabel,
      ],

      [
        "Ce que votre évolution vous invite à comprendre",
        labels.evolutionInvites,
      ],

      [
        "Clé pratique",
        labels.practicalKeyLabel,
      ],

      [
        "Une nouvelle réponse à expérimenter",
        labels.newResponse,
      ],

      [
        "Trois étapes pour interrompre un schéma répétitif",
        labels.threeSteps,
      ],

      [
        "Identifiez le moment précis où votre réaction devient automatique : fermeture, contrôle, fuite, silence, justification ou suractivité.",
        labels.step1,
      ],

      [
        "Demandez-vous quelle peur ancienne cherche à vous protéger et si elle correspond réellement à la situation présente.",
        labels.step2,
      ],

      [
        "Choisissez une réponse plus petite, mais différente : parler, demander, ralentir, poser une limite ou accepter de ne pas tout contrôler.",
        labels.step3,
      ],

      [
        "Votre affirmation Signature",
        labels.affirmationLabel,
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
  | On ne touche pas aux clés techniques :
  | "Saturn", "Pluto", "Neptune", "Moon".
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    />\s*Saturne\s*</g,
    `>${labels.saturn}<`,
  );

  out = out.replace(
    />\s*Pluton\s*</g,
    `>${labels.pluto}<`,
  );

  out = out.replace(
    />\s*Neptune\s*</g,
    `>${labels.neptune}<`,
  );

  out = out.replace(
    />\s*Lune\s*</g,
    `>${labels.moon}<`,
  );

  return out;
}
