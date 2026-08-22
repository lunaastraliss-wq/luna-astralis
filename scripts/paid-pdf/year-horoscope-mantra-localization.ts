import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap =
  Record<string, string>;

/* =========================================================
   MANTRA — TRANSLATIONS
========================================================= */
/* =========================================================
   BÉLIER — TRANSLATIONS
========================================================= */

const MANTRA_BELIER_TRANSLATIONS = {
  en: {
    /* MANTRA */

    "J’avance avec courage sans avoir besoin de tout précipiter.":
      "I move forward with courage without needing to rush everything.",

    "Mon feu intérieur éclaire ma route avec force et conscience.":
      "My inner fire lights my path with strength and awareness.",

    "Je transforme mon impulsion en mouvement juste et constructif.":
      "I transform my impulses into balanced and constructive action.",

    "Je choisis les combats qui méritent réellement mon énergie.":
      "I choose the battles that truly deserve my energy.",

    "Ma détermination ouvre les chemins qui correspondent à mon évolution.":
      "My determination opens paths that support my growth.",

    "Je peux agir avec puissance tout en respectant mon propre rythme.":
      "I can act powerfully while respecting my own pace.",

    /* INTENTION */

    "Diriger votre énergie vers une priorité claire plutôt que vous disperser. Cette année, cette direction vous aidera à mobiliser votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Prenez toutefois le temps de éviter la précipitation, la dispersion ou les réactions trop immédiates. En revenant à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous pourrez transformer votre énergie en progrès concret sans vous épuiser.":
      "Direct your energy toward one clear priority instead of scattering yourself. This year, that direction will help you use your courage, initiative, and natural desire to move forward. Take care to avoid rushing, spreading yourself too thin, or reacting too quickly. By returning to a clear goal, realistic action, and a pace you can sustain, you can transform your energy into concrete progress without exhausting yourself.",

    "Créer un nouvel élan sans forcer les résultats avant leur heure. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer et observez les moments où il devient nécessaire de éviter la précipitation, la dispersion ou les réactions trop immédiates. Votre progression se consolidera grâce à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir.":
      "Create new momentum without forcing results before their time. This intention does not ask you to change everything immediately, but to make a more conscious choice in your daily life. Rely on your courage, initiative, and natural desire to move forward while noticing when it becomes necessary to avoid rushing, scattering your energy, or reacting too quickly. Your progress will become stronger through a clear goal, realistic action, and a pace you can sustain.",

    "Faire preuve d’initiative tout en laissant une place à l’écoute. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre courage, votre capacité d’initiative et votre désir naturel d’avancer, à condition de éviter la précipitation, la dispersion ou les réactions trop immédiates. Un retour régulier vers un objectif clair, une action réaliste et un rythme que vous pouvez soutenir vous permettra de transformer votre énergie en progrès concret sans vous épuiser.":
      "Take initiative while leaving room for listening. Give this intention a concrete place in your decisions, relationships, and the way you use your energy. Your greatest support remains your courage, initiative, and natural desire to move forward, as long as you avoid rushing, spreading yourself too thin, or reacting too quickly. Regularly returning to a clear goal, realistic action, and a sustainable pace will help you transform your energy into concrete progress without exhausting yourself.",

    "Utiliser votre courage pour dépasser une ancienne hésitation. Durant cette année, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Lorsque la tension monte, rappelez-vous de éviter la précipitation, la dispersion ou les réactions trop immédiates et choisissez plutôt un objectif clair, une action réaliste et un rythme que vous pouvez soutenir.":
      "Use your courage to move beyond an old hesitation. During this year, seek consistency rather than perfection between what you feel, what you say, and what you do. You can rely on your courage, initiative, and natural desire to move forward. When tension rises, remember to avoid rushing, scattering your energy, or reacting too quickly and return instead to a clear goal, realistic action, and a pace you can sustain.",

    "Avancer avec confiance sans confondre vitesse et progression. Cette orientation peut devenir un véritable fil conducteur pour l’année. Elle vous invite à utiliser votre courage, votre capacité d’initiative et votre désir naturel d’avancer avec davantage de conscience, sans oublier de éviter la précipitation, la dispersion ou les réactions trop immédiates. Chaque geste relié à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir renforcera votre sentiment d’alignement.":
      "Move forward confidently without confusing speed with progress. This direction can become a genuine guiding thread for the year. It invites you to use your courage, initiative, and natural desire to move forward with greater awareness while remembering not to rush, scatter yourself, or react too quickly. Every action connected to a clear goal, realistic action, and sustainable pace will strengthen your sense of alignment.",

    "Canaliser votre intensité dans une action concrète et durable. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre courage, votre capacité d’initiative et votre désir naturel d’avancer et à mieux traverser le défi suivant : éviter la précipitation, la dispersion ou les réactions trop immédiates. En privilégiant un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous créerez les conditions nécessaires pour transformer votre énergie en progrès concret sans vous épuiser.":
      "Channel your intensity into concrete and lasting action. Make this intention a reference point rather than another obligation. It is here to help you recognize the strength of your courage, initiative, and natural desire to move forward while better navigating this challenge: avoiding haste, scattered energy, or overly immediate reactions. By choosing a clear goal, realistic action, and a pace you can sustain, you create the conditions needed to turn your energy into concrete progress without exhausting yourself.",

    /* AFFIRMATION */

    "Je possède la force nécessaire pour commencer ce qui compte vraiment.":
      "I have the strength I need to begin what truly matters.",

    "Je fais confiance à mon instinct tout en prenant le temps de réfléchir.":
      "I trust my instincts while giving myself time to think.",

    "Mon courage grandit chaque fois que j’agis en accord avec moi-même.":
      "My courage grows each time I act in alignment with myself.",

    "Je mérite d’occuper ma place sans devoir constamment me battre.":
      "I deserve to take my place without constantly having to fight.",

    "Je transforme les obstacles en occasions de révéler ma puissance.":
      "I transform obstacles into opportunities to reveal my strength.",

    "Je suis capable de créer un mouvement positif autour de moi.":
      "I am capable of creating positive momentum around me.",

    /* MESSAGE */

    "Cette année, votre plus grande victoire pourrait naître d’une action simple, pleinement assumée. Les mois à venir vous invitent à mieux reconnaître votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Cette qualité devient particulièrement féconde lorsque vous acceptez de éviter la précipitation, la dispersion ou les réactions trop immédiates. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir. Vous avancerez alors avec plus de clarté et pourrez transformer votre énergie en progrès concret sans vous épuiser.":
      "This year, your greatest victory could come from a simple action that you fully embrace. The coming months invite you to recognize your courage, initiative, and natural desire to move forward more clearly. This strength becomes especially fruitful when you avoid rushing, scattering your energy, or reacting too quickly. Do not try to solve everything at once: return instead to a clear goal, realistic action, and a pace you can sustain. You will move forward with greater clarity and transform your energy into concrete progress without exhausting yourself.",

    "Votre énergie naturelle vous ouvre des portes lorsque vous lui donnez une direction précise. Cette période de l’année ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Dans les moments de doute, gardez en tête qu’il est important de éviter la précipitation, la dispersion ou les réactions trop immédiates. Une décision fondée sur un objectif clair, une action réaliste et un rythme que vous pouvez soutenir pourrait modifier durablement votre manière d’aborder la suite.":
      "Your natural energy opens doors when you give it a clear direction. This period does not require a spectacular response, but a more conscious presence in what you are experiencing. Your growth relies on your courage, initiative, and natural desire to move forward. In moments of doubt, remember the importance of avoiding haste, scattered energy, or overly immediate reactions. A decision based on a clear goal, realistic action, and a sustainable pace could permanently change the way you approach what comes next.",

    "Vous n’avez pas besoin de courir plus vite que la vie : votre courage suffit déjà à faire avancer les choses. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre courage, votre capacité d’initiative et votre désir naturel d’avancer, mais votre véritable avancée viendra de votre capacité à éviter la précipitation, la dispersion ou les réactions trop immédiates. En choisissant un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous donnerez une direction plus juste à votre énergie.":
      "You do not need to move faster than life: your courage is already enough to move things forward. A familiar situation may suddenly take on a different meaning. Welcome this new understanding without judging yourself. You already possess courage, initiative, and a natural desire to move forward, but your real progress will come from your ability to avoid rushing, scattering yourself, or reacting too quickly. By choosing a clear goal, realistic action, and a sustainable pace, you will give your energy a more balanced direction.",

    "Une décision prise avec calme pourrait avoir davantage de portée qu’un grand geste impulsif. Cette année peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer, puis veillez à éviter la précipitation, la dispersion ou les réactions trop immédiates. Cette approche vous aidera à transformer votre énergie en progrès concret sans vous épuiser.":
      "A calm decision could have more impact than a large impulsive gesture. This year can become an important period of recentering. Not everything you feel requires an immediate reaction; some answers appear when you give yourself more room to observe. Rely on your courage, initiative, and natural desire to move forward, while taking care to avoid haste, scattered energy, or overly immediate reactions. This approach will help you transform your energy into concrete progress without exhausting yourself.",

    "Votre force ne se mesure pas seulement à votre capacité d’agir, mais aussi à celle de choisir le bon moment. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Pour l’utiliser pleinement, il faudra parfois accepter de éviter la précipitation, la dispersion ou les réactions trop immédiates. Le choix de un objectif clair, une action réaliste et un rythme que vous pouvez soutenir vous permettra d’avancer sans trahir ce que vous ressentez profondément.":
      "Your strength is measured not only by your ability to act, but also by your ability to choose the right moment. A door opens when you stop automatically repeating an old way of thinking or behaving. Your potential lies in your courage, initiative, and natural desire to move forward. To use it fully, you may sometimes need to accept the importance of avoiding haste, scattered energy, or overly immediate reactions. Choosing a clear goal, realistic action, and a sustainable pace will allow you to move forward without betraying what you deeply feel.",

    "Laissez votre feu intérieur devenir une lumière qui guide plutôt qu’une urgence qui consume. Luna Astralis vous invite à considérer cette année comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Restez attentif(ve) au risque de éviter la précipitation, la dispersion ou les réactions trop immédiates. En vous recentrant sur un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous pourrez transformer votre énergie en progrès concret sans vous épuiser et préparer la suite avec davantage de confiance.":
      "Let your inner fire become a guiding light rather than an urgency that consumes you. Luna Astralis invites you to view this year as a stage of inner maturation. You do not need to become someone else, but to use your courage, initiative, and natural desire to move forward more consciously. Remain attentive to the risk of rushing, scattering your energy, or reacting too quickly. By refocusing on a clear goal, realistic action, and a sustainable pace, you can transform your energy into concrete progress without exhausting yourself and prepare for what comes next with greater confidence.",
  },

  es: {
    /* MANTRA */

    "J’avance avec courage sans avoir besoin de tout précipiter.":
      "Avanzo con valentía sin necesidad de apresurarlo todo.",

    "Mon feu intérieur éclaire ma route avec force et conscience.":
      "Mi fuego interior ilumina mi camino con fuerza y conciencia.",

    "Je transforme mon impulsion en mouvement juste et constructif.":
      "Transformo mi impulso en un movimiento justo y constructivo.",

    "Je choisis les combats qui méritent réellement mon énergie.":
      "Elijo las batallas que realmente merecen mi energía.",

    "Ma détermination ouvre les chemins qui correspondent à mon évolution.":
      "Mi determinación abre los caminos que corresponden a mi evolución.",

    "Je peux agir avec puissance tout en respectant mon propre rythme.":
      "Puedo actuar con fuerza respetando al mismo tiempo mi propio ritmo.",

    /* INTENTION */

    "Diriger votre énergie vers une priorité claire plutôt que vous disperser. Cette année, cette direction vous aidera à mobiliser votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Prenez toutefois le temps de éviter la précipitation, la dispersion ou les réactions trop immédiates. En revenant à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous pourrez transformer votre énergie en progrès concret sans vous épuiser.":
      "Dirige tu energía hacia una prioridad clara en lugar de dispersarte. Este año, esta dirección te ayudará a movilizar tu valentía, tu capacidad de iniciativa y tu deseo natural de avanzar. Sin embargo, tómate el tiempo necesario para evitar la precipitación, la dispersión o las reacciones demasiado inmediatas. Al volver a un objetivo claro, una acción realista y un ritmo que puedas mantener, podrás transformar tu energía en un progreso concreto sin agotarte.",

    "Créer un nouvel élan sans forcer les résultats avant leur heure. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer et observez les moments où il devient nécessaire de éviter la précipitation, la dispersion ou les réactions trop immédiates. Votre progression se consolidera grâce à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir.":
      "Crea un nuevo impulso sin forzar los resultados antes de tiempo. Esta intención no te pide que transformes todo inmediatamente, sino que hagas una elección más consciente en tu vida cotidiana. Apóyate en tu valentía, tu capacidad de iniciativa y tu deseo natural de avanzar, y observa los momentos en los que sea necesario evitar la precipitación, la dispersión o las reacciones demasiado inmediatas. Tu progreso se consolidará gracias a un objetivo claro, una acción realista y un ritmo que puedas mantener.",

    "Faire preuve d’initiative tout en laissant une place à l’écoute. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre courage, votre capacité d’initiative et votre désir naturel d’avancer, à condition de éviter la précipitation, la dispersion ou les réactions trop immédiates. Un retour régulier vers un objectif clair, une action réaliste et un rythme que vous pouvez soutenir vous permettra de transformer votre énergie en progrès concret sans vous épuiser.":
      "Toma la iniciativa dejando también espacio para escuchar. Da a esta intención un lugar concreto en tus decisiones, tus relaciones y tu manera de utilizar tu energía. Tu mejor apoyo sigue siendo tu valentía, tu capacidad de iniciativa y tu deseo natural de avanzar, siempre que evites la precipitación, la dispersión o las reacciones demasiado inmediatas. Volver regularmente a un objetivo claro, una acción realista y un ritmo que puedas mantener te permitirá transformar tu energía en un progreso concreto sin agotarte.",

    "Utiliser votre courage pour dépasser une ancienne hésitation. Durant cette année, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Lorsque la tension monte, rappelez-vous de éviter la précipitation, la dispersion ou les réactions trop immédiates et choisissez plutôt un objectif clair, une action réaliste et un rythme que vous pouvez soutenir.":
      "Utiliza tu valentía para superar una antigua vacilación. Durante este año, busca menos la perfección y más la coherencia entre lo que sientes, lo que dices y lo que haces. Podrás contar con tu valentía, tu capacidad de iniciativa y tu deseo natural de avanzar. Cuando aumente la tensión, recuerda evitar la precipitación, la dispersión o las reacciones demasiado inmediatas y elige en cambio un objetivo claro, una acción realista y un ritmo que puedas mantener.",

    "Avancer avec confiance sans confondre vitesse et progression. Cette orientation peut devenir un véritable fil conducteur pour l’année. Elle vous invite à utiliser votre courage, votre capacité d’initiative et votre désir naturel d’avancer avec davantage de conscience, sans oublier de éviter la précipitation, la dispersion ou les réactions trop immédiates. Chaque geste relié à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir renforcera votre sentiment d’alignement.":
      "Avanza con confianza sin confundir velocidad con progreso. Esta orientación puede convertirse en un verdadero hilo conductor para el año. Te invita a utilizar tu valentía, tu capacidad de iniciativa y tu deseo natural de avanzar con mayor conciencia, sin olvidar evitar la precipitación, la dispersión o las reacciones demasiado inmediatas. Cada gesto relacionado con un objetivo claro, una acción realista y un ritmo que puedas mantener reforzará tu sensación de estar alineado contigo mismo.",

    "Canaliser votre intensité dans une action concrète et durable. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre courage, votre capacité d’initiative et votre désir naturel d’avancer et à mieux traverser le défi suivant : éviter la précipitation, la dispersion ou les réactions trop immédiates. En privilégiant un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous créerez les conditions nécessaires pour transformer votre énergie en progrès concret sans vous épuiser.":
      "Canaliza tu intensidad hacia una acción concreta y duradera. Convierte esta intención en una referencia y no en una obligación adicional. Está aquí para ayudarte a reconocer la fuerza de tu valentía, tu capacidad de iniciativa y tu deseo natural de avanzar, y para afrontar mejor el siguiente desafío: evitar la precipitación, la dispersión o las reacciones demasiado inmediatas. Al priorizar un objetivo claro, una acción realista y un ritmo que puedas mantener, crearás las condiciones necesarias para transformar tu energía en un progreso concreto sin agotarte.",

    /* AFFIRMATION */

    "Je possède la force nécessaire pour commencer ce qui compte vraiment.":
      "Tengo la fuerza necesaria para comenzar aquello que realmente importa.",

    "Je fais confiance à mon instinct tout en prenant le temps de réfléchir.":
      "Confío en mi instinto mientras me doy tiempo para reflexionar.",

    "Mon courage grandit chaque fois que j’agis en accord avec moi-même.":
      "Mi valentía crece cada vez que actúo de acuerdo conmigo mismo.",

    "Je mérite d’occuper ma place sans devoir constamment me battre.":
      "Merezco ocupar mi lugar sin tener que luchar constantemente.",

    "Je transforme les obstacles en occasions de révéler ma puissance.":
      "Transformo los obstáculos en oportunidades para revelar mi fuerza.",

    "Je suis capable de créer un mouvement positif autour de moi.":
      "Soy capaz de crear un movimiento positivo a mi alrededor.",

    /* MESSAGE */

    "Cette année, votre plus grande victoire pourrait naître d’une action simple, pleinement assumée. Les mois à venir vous invitent à mieux reconnaître votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Cette qualité devient particulièrement féconde lorsque vous acceptez de éviter la précipitation, la dispersion ou les réactions trop immédiates. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir. Vous avancerez alors avec plus de clarté et pourrez transformer votre énergie en progrès concret sans vous épuiser.":
      "Este año, tu mayor victoria podría nacer de una acción sencilla plenamente asumida. Los próximos meses te invitan a reconocer mejor tu valentía, tu capacidad de iniciativa y tu deseo natural de avanzar. Esta cualidad se vuelve especialmente valiosa cuando aceptas evitar la precipitación, la dispersión o las reacciones demasiado inmediatas. No intentes resolverlo todo de una sola vez: vuelve más bien a un objetivo claro, una acción realista y un ritmo que puedas mantener. Avanzarás entonces con mayor claridad y podrás transformar tu energía en un progreso concreto sin agotarte.",

    "Votre énergie naturelle vous ouvre des portes lorsque vous lui donnez une direction précise. Cette période de l’année ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Dans les moments de doute, gardez en tête qu’il est important de éviter la précipitation, la dispersion ou les réactions trop immédiates. Une décision fondée sur un objectif clair, une action réaliste et un rythme que vous pouvez soutenir pourrait modifier durablement votre manière d’aborder la suite.":
      "Tu energía natural abre puertas cuando le das una dirección precisa. Este período del año no requiere una respuesta espectacular, sino una presencia más consciente en lo que estás viviendo. Tu evolución se apoya en tu valentía, tu capacidad de iniciativa y tu deseo natural de avanzar. En los momentos de duda, recuerda que es importante evitar la precipitación, la dispersión o las reacciones demasiado inmediatas. Una decisión basada en un objetivo claro, una acción realista y un ritmo que puedas mantener podría modificar de manera duradera tu forma de afrontar lo que viene.",

    "Vous n’avez pas besoin de courir plus vite que la vie : votre courage suffit déjà à faire avancer les choses. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre courage, votre capacité d’initiative et votre désir naturel d’avancer, mais votre véritable avancée viendra de votre capacité à éviter la précipitation, la dispersion ou les réactions trop immédiates. En choisissant un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous donnerez une direction plus juste à votre énergie.":
      "No necesitas correr más rápido que la vida: tu valentía ya es suficiente para hacer avanzar las cosas. Es posible que una situación conocida adquiera de repente un significado diferente. Recibe esta nueva interpretación sin juzgarte. Ya dispones de tu valentía, tu capacidad de iniciativa y tu deseo natural de avanzar, pero tu verdadero progreso vendrá de tu capacidad para evitar la precipitación, la dispersión o las reacciones demasiado inmediatas. Al elegir un objetivo claro, una acción realista y un ritmo que puedas mantener, darás una dirección más justa a tu energía.",

    "Une décision prise avec calme pourrait avoir davantage de portée qu’un grand geste impulsif. Cette année peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer, puis veillez à éviter la précipitation, la dispersion ou les réactions trop immédiates. Cette approche vous aidera à transformer votre énergie en progrès concret sans vous épuiser.":
      "Una decisión tomada con calma podría tener más impacto que un gran gesto impulsivo. Este año puede convertirse en un período importante para volver a centrarte. No todo lo que sientes exige una reacción inmediata; algunas respuestas aparecen cuando dejas más espacio para observar. Apóyate en tu valentía, tu capacidad de iniciativa y tu deseo natural de avanzar, procurando evitar la precipitación, la dispersión o las reacciones demasiado inmediatas. Este enfoque te ayudará a transformar tu energía en un progreso concreto sin agotarte.",

    "Votre force ne se mesure pas seulement à votre capacité d’agir, mais aussi à celle de choisir le bon moment. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Pour l’utiliser pleinement, il faudra parfois accepter de éviter la précipitation, la dispersion ou les réactions trop immédiates. Le choix de un objectif clair, une action réaliste et un rythme que vous pouvez soutenir vous permettra d’avancer sans trahir ce que vous ressentez profondément.":
      "Tu fuerza no se mide únicamente por tu capacidad de actuar, sino también por tu capacidad de elegir el momento adecuado. Una puerta se abre cuando dejas de repetir automáticamente una antigua manera de pensar o actuar. Tu potencial reside en tu valentía, tu capacidad de iniciativa y tu deseo natural de avanzar. Para utilizarlo plenamente, a veces será necesario aceptar la importancia de evitar la precipitación, la dispersión o las reacciones demasiado inmediatas. Elegir un objetivo claro, una acción realista y un ritmo que puedas mantener te permitirá avanzar sin traicionar lo que sientes profundamente.",

    "Laissez votre feu intérieur devenir une lumière qui guide plutôt qu’une urgence qui consume. Luna Astralis vous invite à considérer cette année comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Restez attentif(ve) au risque de éviter la précipitation, la dispersion ou les réactions trop immédiates. En vous recentrant sur un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous pourrez transformer votre énergie en progrès concret sans vous épuiser et préparer la suite avec davantage de confiance.":
      "Deja que tu fuego interior se convierta en una luz que te guíe y no en una urgencia que te consuma. Luna Astralis te invita a considerar este año como una etapa de maduración interior. No necesitas convertirte en otra persona, sino utilizar de manera más consciente tu valentía, tu capacidad de iniciativa y tu deseo natural de avanzar. Mantente atento al riesgo de precipitarte, dispersarte o reaccionar demasiado rápido. Al volver a centrarte en un objetivo claro, una acción realista y un ritmo que puedas mantener, podrás transformar tu energía en un progreso concreto sin agotarte y preparar lo que viene con mayor confianza.",
  },

  de: {
    /* MANTRA */

    "J’avance avec courage sans avoir besoin de tout précipiter.":
      "Ich gehe mutig voran, ohne alles überstürzen zu müssen.",

    "Mon feu intérieur éclaire ma route avec force et conscience.":
      "Mein inneres Feuer erhellt meinen Weg mit Kraft und Bewusstsein.",

    "Je transforme mon impulsion en mouvement juste et constructif.":
      "Ich verwandle meinen Impuls in eine stimmige und konstruktive Bewegung.",

    "Je choisis les combats qui méritent réellement mon énergie.":
      "Ich wähle die Herausforderungen, die meine Energie wirklich verdienen.",

    "Ma détermination ouvre les chemins qui correspondent à mon évolution.":
      "Meine Entschlossenheit öffnet Wege, die meiner Entwicklung entsprechen.",

    "Je peux agir avec puissance tout en respectant mon propre rythme.":
      "Ich kann kraftvoll handeln und dabei meinen eigenen Rhythmus respektieren.",

    /* INTENTION */

    "Diriger votre énergie vers une priorité claire plutôt que vous disperser. Cette année, cette direction vous aidera à mobiliser votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Prenez toutefois le temps de éviter la précipitation, la dispersion ou les réactions trop immédiates. En revenant à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous pourrez transformer votre énergie en progrès concret sans vous épuiser.":
      "Richten Sie Ihre Energie auf eine klare Priorität, anstatt sich zu verzetteln. Dieses Jahr wird Ihnen diese Ausrichtung helfen, Ihren Mut, Ihre Initiative und Ihren natürlichen Wunsch voranzukommen gezielt einzusetzen. Nehmen Sie sich dennoch die Zeit, Übereilung, Zerstreuung oder allzu spontane Reaktionen zu vermeiden. Wenn Sie immer wieder zu einem klaren Ziel, einer realistischen Handlung und einem Rhythmus zurückkehren, den Sie dauerhaft einhalten können, werden Sie Ihre Energie in konkrete Fortschritte verwandeln können, ohne sich zu erschöpfen.",

    "Créer un nouvel élan sans forcer les résultats avant leur heure. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer et observez les moments où il devient nécessaire de éviter la précipitation, la dispersion ou les réactions trop immédiates. Votre progression se consolidera grâce à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir.":
      "Schaffen Sie neuen Schwung, ohne Ergebnisse zu erzwingen, bevor ihre Zeit gekommen ist. Diese Absicht verlangt nicht von Ihnen, sofort alles zu verändern, sondern im Alltag bewusstere Entscheidungen zu treffen. Stützen Sie sich auf Ihren Mut, Ihre Initiative und Ihren natürlichen Wunsch voranzukommen, und achten Sie auf die Momente, in denen es notwendig wird, Übereilung, Zerstreuung oder allzu spontane Reaktionen zu vermeiden. Ihre Fortschritte werden sich durch ein klares Ziel, eine realistische Handlung und einen Rhythmus festigen, den Sie dauerhaft einhalten können.",

    "Faire preuve d’initiative tout en laissant une place à l’écoute. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre courage, votre capacité d’initiative et votre désir naturel d’avancer, à condition de éviter la précipitation, la dispersion ou les réactions trop immédiates. Un retour régulier vers un objectif clair, une action réaliste et un rythme que vous pouvez soutenir vous permettra de transformer votre énergie en progrès concret sans vous épuiser.":
      "Ergreifen Sie die Initiative und lassen Sie gleichzeitig Raum für aufmerksames Zuhören. Geben Sie dieser Absicht einen konkreten Platz in Ihren Entscheidungen, Ihren Beziehungen und in der Art, wie Sie Ihre Energie einsetzen. Ihre größte Unterstützung bleiben Ihr Mut, Ihre Initiative und Ihr natürlicher Wunsch voranzukommen, vorausgesetzt, Sie vermeiden Übereilung, Zerstreuung oder allzu spontane Reaktionen. Die regelmäßige Rückkehr zu einem klaren Ziel, einer realistischen Handlung und einem Rhythmus, den Sie dauerhaft einhalten können, wird Ihnen helfen, Ihre Energie in konkrete Fortschritte zu verwandeln, ohne sich zu erschöpfen.",

    "Utiliser votre courage pour dépasser une ancienne hésitation. Durant cette année, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Lorsque la tension monte, rappelez-vous de éviter la précipitation, la dispersion ou les réactions trop immédiates et choisissez plutôt un objectif clair, une action réaliste et un rythme que vous pouvez soutenir.":
      "Nutzen Sie Ihren Mut, um ein altes Zögern zu überwinden. Suchen Sie in diesem Jahr weniger nach Perfektion als nach Übereinstimmung zwischen dem, was Sie fühlen, sagen und tun. Sie können sich auf Ihren Mut, Ihre Initiative und Ihren natürlichen Wunsch voranzukommen verlassen. Wenn die Anspannung steigt, denken Sie daran, Übereilung, Zerstreuung oder allzu spontane Reaktionen zu vermeiden, und entscheiden Sie sich stattdessen für ein klares Ziel, eine realistische Handlung und einen Rhythmus, den Sie dauerhaft einhalten können.",

    "Avancer avec confiance sans confondre vitesse et progression. Cette orientation peut devenir un véritable fil conducteur pour l’année. Elle vous invite à utiliser votre courage, votre capacité d’initiative et votre désir naturel d’avancer avec davantage de conscience, sans oublier de éviter la précipitation, la dispersion ou les réactions trop immédiates. Chaque geste relié à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir renforcera votre sentiment d’alignement.":
      "Gehen Sie selbstbewusst voran, ohne Geschwindigkeit mit Fortschritt zu verwechseln. Diese Ausrichtung kann zu einem echten Leitfaden für Ihr Jahr werden. Sie lädt Sie dazu ein, Ihren Mut, Ihre Initiative und Ihren natürlichen Wunsch voranzukommen bewusster einzusetzen, ohne dabei zu vergessen, Übereilung, Zerstreuung oder allzu spontane Reaktionen zu vermeiden. Jeder Schritt, der mit einem klaren Ziel, einer realistischen Handlung und einem Rhythmus verbunden ist, den Sie dauerhaft einhalten können, wird Ihr Gefühl innerer Ausrichtung stärken.",

    "Canaliser votre intensité dans une action concrète et durable. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre courage, votre capacité d’initiative et votre désir naturel d’avancer et à mieux traverser le défi suivant : éviter la précipitation, la dispersion ou les réactions trop immédiates. En privilégiant un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous créerez les conditions nécessaires pour transformer votre énergie en progrès concret sans vous épuiser.":
      "Lenken Sie Ihre Intensität in eine konkrete und nachhaltige Handlung. Machen Sie diese Absicht zu einem Orientierungspunkt und nicht zu einer zusätzlichen Verpflichtung. Sie soll Ihnen helfen, die Kraft Ihres Mutes, Ihrer Initiative und Ihres natürlichen Wunsches voranzukommen zu erkennen und gleichzeitig besser mit der folgenden Herausforderung umzugehen: Übereilung, Zerstreuung oder allzu spontane Reaktionen zu vermeiden. Wenn Sie einem klaren Ziel, einer realistischen Handlung und einem Rhythmus, den Sie dauerhaft einhalten können, den Vorrang geben, schaffen Sie die notwendigen Voraussetzungen, um Ihre Energie in konkrete Fortschritte zu verwandeln, ohne sich zu erschöpfen.",

    /* AFFIRMATION */

    "Je possède la force nécessaire pour commencer ce qui compte vraiment.":
      "Ich besitze die nötige Kraft, um mit dem zu beginnen, was wirklich zählt.",

    "Je fais confiance à mon instinct tout en prenant le temps de réfléchir.":
      "Ich vertraue meinem Instinkt und nehme mir gleichzeitig Zeit zum Nachdenken.",

    "Mon courage grandit chaque fois que j’agis en accord avec moi-même.":
      "Mein Mut wächst jedes Mal, wenn ich im Einklang mit mir selbst handle.",

    "Je mérite d’occuper ma place sans devoir constamment me battre.":
      "Ich verdiene es, meinen Platz einzunehmen, ohne ständig kämpfen zu müssen.",

    "Je transforme les obstacles en occasions de révéler ma puissance.":
      "Ich verwandle Hindernisse in Möglichkeiten, meine Stärke zu zeigen.",

    "Je suis capable de créer un mouvement positif autour de moi.":
      "Ich bin in der Lage, positive Veränderungen in meinem Umfeld anzustoßen.",

    /* MESSAGE */

    "Cette année, votre plus grande victoire pourrait naître d’une action simple, pleinement assumée. Les mois à venir vous invitent à mieux reconnaître votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Cette qualité devient particulièrement féconde lorsque vous acceptez de éviter la précipitation, la dispersion ou les réactions trop immédiates. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir. Vous avancerez alors avec plus de clarté et pourrez transformer votre énergie en progrès concret sans vous épuiser.":
      "Dieses Jahr könnte Ihr größter Erfolg aus einer einfachen Handlung entstehen, zu der Sie voll und ganz stehen. Die kommenden Monate laden Sie dazu ein, Ihren Mut, Ihre Initiative und Ihren natürlichen Wunsch voranzukommen besser zu erkennen. Diese Stärke wird besonders wertvoll, wenn Sie bereit sind, Übereilung, Zerstreuung oder allzu spontane Reaktionen zu vermeiden. Versuchen Sie nicht, alles auf einmal zu lösen: Kehren Sie stattdessen zu einem klaren Ziel, einer realistischen Handlung und einem Rhythmus zurück, den Sie dauerhaft einhalten können. So werden Sie mit größerer Klarheit vorankommen und Ihre Energie in konkrete Fortschritte verwandeln können, ohne sich zu erschöpfen.",

    "Votre énergie naturelle vous ouvre des portes lorsque vous lui donnez une direction précise. Cette période de l’année ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Dans les moments de doute, gardez en tête qu’il est important de éviter la précipitation, la dispersion ou les réactions trop immédiates. Une décision fondée sur un objectif clair, une action réaliste et un rythme que vous pouvez soutenir pourrait modifier durablement votre manière d’aborder la suite.":
      "Ihre natürliche Energie öffnet Ihnen Türen, wenn Sie ihr eine klare Richtung geben. Diese Phase des Jahres verlangt keine spektakuläre Reaktion, sondern eine bewusstere Präsenz in dem, was Sie gerade erleben. Ihre Entwicklung stützt sich auf Ihren Mut, Ihre Initiative und Ihren natürlichen Wunsch voranzukommen. Denken Sie in Momenten des Zweifels daran, wie wichtig es ist, Übereilung, Zerstreuung oder allzu spontane Reaktionen zu vermeiden. Eine Entscheidung, die auf einem klaren Ziel, einer realistischen Handlung und einem Rhythmus beruht, den Sie dauerhaft einhalten können, könnte Ihre Art, mit dem Kommenden umzugehen, nachhaltig verändern.",

    "Vous n’avez pas besoin de courir plus vite que la vie : votre courage suffit déjà à faire avancer les choses. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre courage, votre capacité d’initiative et votre désir naturel d’avancer, mais votre véritable avancée viendra de votre capacité à éviter la précipitation, la dispersion ou les réactions trop immédiates. En choisissant un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous donnerez une direction plus juste à votre énergie.":
      "Sie müssen nicht schneller sein als das Leben: Ihr Mut reicht bereits aus, um die Dinge voranzubringen. Eine vertraute Situation könnte plötzlich eine andere Bedeutung bekommen. Nehmen Sie diese neue Sichtweise an, ohne sich selbst zu beurteilen. Sie verfügen bereits über Ihren Mut, Ihre Initiative und Ihren natürlichen Wunsch voranzukommen, doch Ihr wirklicher Fortschritt wird aus Ihrer Fähigkeit entstehen, Übereilung, Zerstreuung oder allzu spontane Reaktionen zu vermeiden. Indem Sie ein klares Ziel, eine realistische Handlung und einen Rhythmus wählen, den Sie dauerhaft einhalten können, geben Sie Ihrer Energie eine stimmigere Richtung.",

    "Une décision prise avec calme pourrait avoir davantage de portée qu’un grand geste impulsif. Cette année peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer, puis veillez à éviter la précipitation, la dispersion ou les réactions trop immédiates. Cette approche vous aidera à transformer votre énergie en progrès concret sans vous épuiser.":
      "Eine ruhig getroffene Entscheidung könnte eine größere Wirkung haben als eine große impulsive Geste. Dieses Jahr kann zu einer wichtigen Phase der Neuausrichtung werden. Nicht alles, was Sie fühlen, verlangt nach einer sofortigen Reaktion; manche Antworten zeigen sich erst, wenn Sie der Beobachtung mehr Raum geben. Stützen Sie sich auf Ihren Mut, Ihre Initiative und Ihren natürlichen Wunsch voranzukommen und achten Sie gleichzeitig darauf, Übereilung, Zerstreuung oder allzu spontane Reaktionen zu vermeiden. Diese Haltung wird Ihnen helfen, Ihre Energie in konkrete Fortschritte zu verwandeln, ohne sich zu erschöpfen.",

    "Votre force ne se mesure pas seulement à votre capacité d’agir, mais aussi à celle de choisir le bon moment. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Pour l’utiliser pleinement, il faudra parfois accepter de éviter la précipitation, la dispersion ou les réactions trop immédiates. Le choix de un objectif clair, une action réaliste et un rythme que vous pouvez soutenir vous permettra d’avancer sans trahir ce que vous ressentez profondément.":
      "Ihre Stärke zeigt sich nicht nur in Ihrer Fähigkeit zu handeln, sondern auch darin, den richtigen Zeitpunkt zu wählen. Eine Tür öffnet sich, wenn Sie aufhören, eine alte Denk- oder Handlungsweise automatisch zu wiederholen. Ihr Potenzial liegt in Ihrem Mut, Ihrer Initiative und Ihrem natürlichen Wunsch voranzukommen. Um dieses Potenzial vollständig zu nutzen, müssen Sie manchmal akzeptieren, wie wichtig es ist, Übereilung, Zerstreuung oder allzu spontane Reaktionen zu vermeiden. Die Entscheidung für ein klares Ziel, eine realistische Handlung und einen Rhythmus, den Sie dauerhaft einhalten können, wird Ihnen ermöglichen voranzukommen, ohne das zu verleugnen, was Sie tief in Ihrem Inneren empfinden.",

    "Laissez votre feu intérieur devenir une lumière qui guide plutôt qu’une urgence qui consume. Luna Astralis vous invite à considérer cette année comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Restez attentif(ve) au risque de éviter la précipitation, la dispersion ou les réactions trop immédiates. En vous recentrant sur un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous pourrez transformer votre énergie en progrès concret sans vous épuiser et préparer la suite avec davantage de confiance.":
      "Lassen Sie Ihr inneres Feuer zu einem Licht werden, das Sie führt, statt zu einer Dringlichkeit, die Sie verzehrt. Luna Astralis lädt Sie dazu ein, dieses Jahr als eine Phase innerer Reifung zu betrachten. Sie müssen kein anderer Mensch werden, sondern Ihren Mut, Ihre Initiative und Ihren natürlichen Wunsch voranzukommen bewusster einsetzen. Bleiben Sie aufmerksam gegenüber dem Risiko von Übereilung, Zerstreuung oder allzu spontanen Reaktionen. Wenn Sie sich wieder auf ein klares Ziel, eine realistische Handlung und einen Rhythmus konzentrieren, den Sie dauerhaft einhalten können, werden Sie Ihre Energie in konkrete Fortschritte verwandeln können, ohne sich zu erschöpfen, und mit größerem Vertrauen auf das Kommende vorbereitet sein.",
  },

  it: {
    /* MANTRA */

    "J’avance avec courage sans avoir besoin de tout précipiter.":
      "Avanzo con coraggio senza sentire il bisogno di affrettare tutto.",

    "Mon feu intérieur éclaire ma route avec force et conscience.":
      "Il mio fuoco interiore illumina il mio cammino con forza e consapevolezza.",

    "Je transforme mon impulsion en mouvement juste et constructif.":
      "Trasformo il mio impulso in un movimento equilibrato e costruttivo.",

    "Je choisis les combats qui méritent réellement mon énergie.":
      "Scelgo le battaglie che meritano davvero la mia energia.",

    "Ma détermination ouvre les chemins qui correspondent à mon évolution.":
      "La mia determinazione apre i percorsi che corrispondono alla mia evoluzione.",

    "Je peux agir avec puissance tout en respectant mon propre rythme.":
      "Posso agire con forza rispettando al tempo stesso il mio ritmo.",

    /* INTENTION */

    "Diriger votre énergie vers une priorité claire plutôt que vous disperser. Cette année, cette direction vous aidera à mobiliser votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Prenez toutefois le temps de éviter la précipitation, la dispersion ou les réactions trop immédiates. En revenant à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous pourrez transformer votre énergie en progrès concret sans vous épuiser.":
      "Dirigete la vostra energia verso una priorità chiara invece di disperdervi. Quest’anno, questa direzione vi aiuterà a mobilitare il vostro coraggio, la vostra capacità di iniziativa e il vostro naturale desiderio di avanzare. Prendetevi tuttavia il tempo necessario per evitare la precipitazione, la dispersione o le reazioni troppo immediate. Tornando a un obiettivo chiaro, a un’azione realistica e a un ritmo che potete sostenere, potrete trasformare la vostra energia in progressi concreti senza esaurirvi.",

    "Créer un nouvel élan sans forcer les résultats avant leur heure. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer et observez les moments où il devient nécessaire de éviter la précipitation, la dispersion ou les réactions trop immédiates. Votre progression se consolidera grâce à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir.":
      "Create un nuovo slancio senza forzare i risultati prima del momento giusto. Questa intenzione non vi chiede di trasformare tutto immediatamente, ma di compiere una scelta più consapevole nella vostra vita quotidiana. Fate affidamento sul vostro coraggio, sulla vostra capacità di iniziativa e sul vostro naturale desiderio di avanzare, osservando i momenti in cui diventa necessario evitare la precipitazione, la dispersione o le reazioni troppo immediate. I vostri progressi si consolideranno grazie a un obiettivo chiaro, un’azione realistica e un ritmo che potete sostenere.",

    "Faire preuve d’initiative tout en laissant une place à l’écoute. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre courage, votre capacité d’initiative et votre désir naturel d’avancer, à condition de éviter la précipitation, la dispersion ou les réactions trop immédiates. Un retour régulier vers un objectif clair, une action réaliste et un rythme que vous pouvez soutenir vous permettra de transformer votre énergie en progrès concret sans vous épuiser.":
      "Prendete l’iniziativa lasciando al tempo stesso spazio all’ascolto. Date a questa intenzione un posto concreto nelle vostre decisioni, nelle vostre relazioni e nel modo in cui utilizzate la vostra energia. Il vostro sostegno migliore rimane il vostro coraggio, la vostra capacità di iniziativa e il vostro naturale desiderio di avanzare, a condizione di evitare la precipitazione, la dispersione o le reazioni troppo immediate. Tornare regolarmente a un obiettivo chiaro, a un’azione realistica e a un ritmo che potete sostenere vi permetterà di trasformare la vostra energia in progressi concreti senza esaurirvi.",

    "Utiliser votre courage pour dépasser une ancienne hésitation. Durant cette année, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Lorsque la tension monte, rappelez-vous de éviter la précipitation, la dispersion ou les réactions trop immédiates et choisissez plutôt un objectif clair, une action réaliste et un rythme que vous pouvez soutenir.":
      "Utilizzate il vostro coraggio per superare una vecchia esitazione. Durante quest’anno, cercate meno la perfezione e più la coerenza tra ciò che sentite, ciò che dite e ciò che fate. Potrete contare sul vostro coraggio, sulla vostra capacità di iniziativa e sul vostro naturale desiderio di avanzare. Quando la tensione aumenta, ricordate di evitare la precipitazione, la dispersione o le reazioni troppo immediate e scegliete invece un obiettivo chiaro, un’azione realistica e un ritmo che potete sostenere.",

    "Avancer avec confiance sans confondre vitesse et progression. Cette orientation peut devenir un véritable fil conducteur pour l’année. Elle vous invite à utiliser votre courage, votre capacité d’initiative et votre désir naturel d’avancer avec davantage de conscience, sans oublier de éviter la précipitation, la dispersion ou les réactions trop immédiates. Chaque geste relié à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir renforcera votre sentiment d’alignement.":
      "Avanzate con fiducia senza confondere la velocità con il progresso. Questo orientamento può diventare un vero filo conduttore per l’anno. Vi invita a utilizzare il vostro coraggio, la vostra capacità di iniziativa e il vostro naturale desiderio di avanzare con maggiore consapevolezza, senza dimenticare di evitare la precipitazione, la dispersione o le reazioni troppo immediate. Ogni gesto legato a un obiettivo chiaro, a un’azione realistica e a un ritmo che potete sostenere rafforzerà il vostro senso di allineamento.",

    "Canaliser votre intensité dans une action concrète et durable. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre courage, votre capacité d’initiative et votre désir naturel d’avancer et à mieux traverser le défi suivant : éviter la précipitation, la dispersion ou les réactions trop immédiates. En privilégiant un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous créerez les conditions nécessaires pour transformer votre énergie en progrès concret sans vous épuiser.":
      "Canalizzate la vostra intensità in un’azione concreta e duratura. Fate di questa intenzione un punto di riferimento piuttosto che un obbligo aggiuntivo. È qui per aiutarvi a riconoscere la forza del vostro coraggio, della vostra capacità di iniziativa e del vostro naturale desiderio di avanzare, e ad affrontare meglio la seguente sfida: evitare la precipitazione, la dispersione o le reazioni troppo immediate. Privilegiando un obiettivo chiaro, un’azione realistica e un ritmo che potete sostenere, creerete le condizioni necessarie per trasformare la vostra energia in progressi concreti senza esaurirvi.",

    /* AFFIRMATION */

    "Je possède la force nécessaire pour commencer ce qui compte vraiment.":
      "Possiedo la forza necessaria per iniziare ciò che conta davvero.",

    "Je fais confiance à mon instinct tout en prenant le temps de réfléchir.":
      "Mi fido del mio istinto concedendomi al tempo stesso il tempo di riflettere.",

    "Mon courage grandit chaque fois que j’agis en accord avec moi-même.":
      "Il mio coraggio cresce ogni volta che agisco in accordo con me stesso.",

    "Je mérite d’occuper ma place sans devoir constamment me battre.":
      "Merito di occupare il mio posto senza dover combattere continuamente.",

    "Je transforme les obstacles en occasions de révéler ma puissance.":
      "Trasformo gli ostacoli in opportunità per rivelare la mia forza.",

    "Je suis capable de créer un mouvement positif autour de moi.":
      "Sono capace di creare un movimento positivo intorno a me.",

    /* MESSAGE */

    "Cette année, votre plus grande victoire pourrait naître d’une action simple, pleinement assumée. Les mois à venir vous invitent à mieux reconnaître votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Cette qualité devient particulièrement féconde lorsque vous acceptez de éviter la précipitation, la dispersion ou les réactions trop immédiates. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir. Vous avancerez alors avec plus de clarté et pourrez transformer votre énergie en progrès concret sans vous épuiser.":
      "Quest’anno, la vostra più grande vittoria potrebbe nascere da un’azione semplice, pienamente assunta. I prossimi mesi vi invitano a riconoscere meglio il vostro coraggio, la vostra capacità di iniziativa e il vostro naturale desiderio di avanzare. Questa qualità diventa particolarmente preziosa quando accettate di evitare la precipitazione, la dispersione o le reazioni troppo immediate. Non cercate di risolvere tutto in una sola volta: tornate piuttosto a un obiettivo chiaro, a un’azione realistica e a un ritmo che potete sostenere. Avanzerete così con maggiore chiarezza e potrete trasformare la vostra energia in progressi concreti senza esaurirvi.",

    "Votre énergie naturelle vous ouvre des portes lorsque vous lui donnez une direction précise. Cette période de l’année ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Dans les moments de doute, gardez en tête qu’il est important de éviter la précipitation, la dispersion ou les réactions trop immédiates. Une décision fondée sur un objectif clair, une action réaliste et un rythme que vous pouvez soutenir pourrait modifier durablement votre manière d’aborder la suite.":
      "La vostra energia naturale apre delle porte quando le date una direzione precisa. Questo periodo dell’anno non richiede una risposta spettacolare, ma una presenza più consapevole rispetto a ciò che state vivendo. La vostra evoluzione si basa sul vostro coraggio, sulla vostra capacità di iniziativa e sul vostro naturale desiderio di avanzare. Nei momenti di dubbio, ricordate quanto sia importante evitare la precipitazione, la dispersione o le reazioni troppo immediate. Una decisione fondata su un obiettivo chiaro, un’azione realistica e un ritmo che potete sostenere potrebbe modificare in modo duraturo il vostro modo di affrontare ciò che verrà.",

    "Vous n’avez pas besoin de courir plus vite que la vie : votre courage suffit déjà à faire avancer les choses. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre courage, votre capacité d’initiative et votre désir naturel d’avancer, mais votre véritable avancée viendra de votre capacité à éviter la précipitation, la dispersion ou les réactions trop immédiates. En choisissant un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous donnerez une direction plus juste à votre énergie.":
      "Non avete bisogno di correre più velocemente della vita: il vostro coraggio è già sufficiente per far avanzare le cose. È possibile che una situazione familiare assuma improvvisamente un significato diverso. Accogliete questa nuova interpretazione senza giudicarvi. Disponete già del vostro coraggio, della vostra capacità di iniziativa e del vostro naturale desiderio di avanzare, ma il vostro vero progresso nascerà dalla capacità di evitare la precipitazione, la dispersione o le reazioni troppo immediate. Scegliendo un obiettivo chiaro, un’azione realistica e un ritmo che potete sostenere, darete una direzione più equilibrata alla vostra energia.",

    "Une décision prise avec calme pourrait avoir davantage de portée qu’un grand geste impulsif. Cette année peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer, puis veillez à éviter la précipitation, la dispersion ou les réactions trop immédiates. Cette approche vous aidera à transformer votre énergie en progrès concret sans vous épuiser.":
      "Una decisione presa con calma potrebbe avere un impatto maggiore di un grande gesto impulsivo. Quest’anno può diventare un importante periodo di ricentramento. Non tutto ciò che sentite richiede una reazione immediata; alcune risposte emergono quando lasciate maggiore spazio all’osservazione. Fate affidamento sul vostro coraggio, sulla vostra capacità di iniziativa e sul vostro naturale desiderio di avanzare, facendo attenzione a evitare la precipitazione, la dispersione o le reazioni troppo immediate. Questo approccio vi aiuterà a trasformare la vostra energia in progressi concreti senza esaurirvi.",

    "Votre force ne se mesure pas seulement à votre capacité d’agir, mais aussi à celle de choisir le bon moment. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Pour l’utiliser pleinement, il faudra parfois accepter de éviter la précipitation, la dispersion ou les réactions trop immédiates. Le choix de un objectif clair, une action réaliste et un rythme que vous pouvez soutenir vous permettra d’avancer sans trahir ce que vous ressentez profondément.":
      "La vostra forza non si misura soltanto dalla capacità di agire, ma anche da quella di scegliere il momento giusto. Una porta si apre quando smettete di ripetere automaticamente un vecchio modo di pensare o di agire. Il vostro potenziale risiede nel vostro coraggio, nella vostra capacità di iniziativa e nel vostro naturale desiderio di avanzare. Per utilizzarlo pienamente, a volte sarà necessario accettare l’importanza di evitare la precipitazione, la dispersione o le reazioni troppo immediate. Scegliere un obiettivo chiaro, un’azione realistica e un ritmo che potete sostenere vi permetterà di avanzare senza tradire ciò che sentite profondamente.",

    "Laissez votre feu intérieur devenir une lumière qui guide plutôt qu’une urgence qui consume. Luna Astralis vous invite à considérer cette année comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Restez attentif(ve) au risque de éviter la précipitation, la dispersion ou les réactions trop immédiates. En vous recentrant sur un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous pourrez transformer votre énergie en progrès concret sans vous épuiser et préparer la suite avec davantage de confiance.":
      "Lasciate che il vostro fuoco interiore diventi una luce che vi guida anziché un’urgenza che vi consuma. Luna Astralis vi invita a considerare quest’anno come una fase di maturazione interiore. Non dovete diventare un’altra persona, ma utilizzare più consapevolmente il vostro coraggio, la vostra capacità di iniziativa e il vostro naturale desiderio di avanzare. Rimanete attenti al rischio di precipitarvi, disperdervi o reagire troppo rapidamente. Ricentrandovi su un obiettivo chiaro, un’azione realistica e un ritmo che potete sostenere, potrete trasformare la vostra energia in progressi concreti senza esaurirvi e prepararvi a ciò che verrà con maggiore fiducia.",
  },

  pt: {
    /* MANTRA */

    "J’avance avec courage sans avoir besoin de tout précipiter.":
      "Avanço com coragem sem precisar apressar tudo.",

    "Mon feu intérieur éclaire ma route avec force et conscience.":
      "Meu fogo interior ilumina meu caminho com força e consciência.",

    "Je transforme mon impulsion en mouvement juste et constructif.":
      "Transformo meu impulso em um movimento equilibrado e construtivo.",

    "Je choisis les combats qui méritent réellement mon énergie.":
      "Escolho as batalhas que realmente merecem minha energia.",

    "Ma détermination ouvre les chemins qui correspondent à mon évolution.":
      "Minha determinação abre os caminhos que correspondem à minha evolução.",

    "Je peux agir avec puissance tout en respectant mon propre rythme.":
      "Posso agir com força e, ao mesmo tempo, respeitar meu próprio ritmo.",

    /* INTENTION */

    "Diriger votre énergie vers une priorité claire plutôt que vous disperser. Cette année, cette direction vous aidera à mobiliser votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Prenez toutefois le temps de éviter la précipitation, la dispersion ou les réactions trop immédiates. En revenant à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous pourrez transformer votre énergie en progrès concret sans vous épuiser.":
      "Direcione sua energia para uma prioridade clara em vez de se dispersar. Este ano, essa direção ajudará você a mobilizar sua coragem, sua capacidade de iniciativa e seu desejo natural de avançar. No entanto, reserve um tempo para evitar a precipitação, a dispersão ou as reações imediatas demais. Ao retornar a um objetivo claro, a uma ação realista e a um ritmo que você consiga manter, poderá transformar sua energia em progresso concreto sem se esgotar.",

    "Créer un nouvel élan sans forcer les résultats avant leur heure. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer et observez les moments où il devient nécessaire de éviter la précipitation, la dispersion ou les réactions trop immédiates. Votre progression se consolidera grâce à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir.":
      "Crie um novo impulso sem forçar os resultados antes do momento certo. Esta intenção não pede que você transforme tudo imediatamente, mas que faça uma escolha mais consciente em sua vida cotidiana. Apoie-se em sua coragem, em sua capacidade de iniciativa e em seu desejo natural de avançar, observando os momentos em que será necessário evitar a precipitação, a dispersão ou as reações imediatas demais. Seu progresso se consolidará graças a um objetivo claro, a uma ação realista e a um ritmo que você consiga manter.",

    "Faire preuve d’initiative tout en laissant une place à l’écoute. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre courage, votre capacité d’initiative et votre désir naturel d’avancer, à condition de éviter la précipitation, la dispersion ou les réactions trop immédiates. Un retour régulier vers un objectif clair, une action réaliste et un rythme que vous pouvez soutenir vous permettra de transformer votre énergie en progrès concret sans vous épuiser.":
      "Tome a iniciativa deixando, ao mesmo tempo, espaço para escutar. Dê a esta intenção um lugar concreto em suas decisões, em seus relacionamentos e na maneira como utiliza sua energia. Seu maior apoio continua sendo sua coragem, sua capacidade de iniciativa e seu desejo natural de avançar, desde que você evite a precipitação, a dispersão ou as reações imediatas demais. Retornar regularmente a um objetivo claro, a uma ação realista e a um ritmo que você consiga manter permitirá transformar sua energia em progresso concreto sem se esgotar.",

    "Utiliser votre courage pour dépasser une ancienne hésitation. Durant cette année, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Lorsque la tension monte, rappelez-vous de éviter la précipitation, la dispersion ou les réactions trop immédiates et choisissez plutôt un objectif clair, une action réaliste et un rythme que vous pouvez soutenir.":
      "Use sua coragem para superar uma antiga hesitação. Durante este ano, busque menos a perfeição e mais a coerência entre aquilo que sente, aquilo que diz e aquilo que faz. Você poderá contar com sua coragem, sua capacidade de iniciativa e seu desejo natural de avançar. Quando a tensão aumentar, lembre-se de evitar a precipitação, a dispersão ou as reações imediatas demais e escolha, em vez disso, um objetivo claro, uma ação realista e um ritmo que você consiga manter.",

    "Avancer avec confiance sans confondre vitesse et progression. Cette orientation peut devenir un véritable fil conducteur pour l’année. Elle vous invite à utiliser votre courage, votre capacité d’initiative et votre désir naturel d’avancer avec davantage de conscience, sans oublier de éviter la précipitation, la dispersion ou les réactions trop immédiates. Chaque geste relié à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir renforcera votre sentiment d’alignement.":
      "Avance com confiança sem confundir velocidade com progresso. Essa orientação pode se tornar um verdadeiro fio condutor para o ano. Ela convida você a utilizar sua coragem, sua capacidade de iniciativa e seu desejo natural de avançar com mais consciência, sem esquecer de evitar a precipitação, a dispersão ou as reações imediatas demais. Cada atitude ligada a um objetivo claro, a uma ação realista e a um ritmo que você consiga manter fortalecerá sua sensação de alinhamento.",

    "Canaliser votre intensité dans une action concrète et durable. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre courage, votre capacité d’initiative et votre désir naturel d’avancer et à mieux traverser le défi suivant : éviter la précipitation, la dispersion ou les réactions trop immédiates. En privilégiant un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous créerez les conditions nécessaires pour transformer votre énergie en progrès concret sans vous épuiser.":
      "Canalize sua intensidade para uma ação concreta e duradoura. Faça desta intenção um ponto de referência, e não mais uma obrigação. Ela existe para ajudar você a reconhecer a força de sua coragem, de sua capacidade de iniciativa e de seu desejo natural de avançar, além de ajudá-lo a enfrentar melhor o seguinte desafio: evitar a precipitação, a dispersão ou as reações imediatas demais. Ao priorizar um objetivo claro, uma ação realista e um ritmo que você consiga manter, criará as condições necessárias para transformar sua energia em progresso concreto sem se esgotar.",

    /* AFFIRMATION */

    "Je possède la force nécessaire pour commencer ce qui compte vraiment.":
      "Tenho a força necessária para começar aquilo que realmente importa.",

    "Je fais confiance à mon instinct tout en prenant le temps de réfléchir.":
      "Confio em meu instinto e, ao mesmo tempo, me dou tempo para refletir.",

    "Mon courage grandit chaque fois que j’agis en accord avec moi-même.":
      "Minha coragem cresce cada vez que ajo de acordo comigo mesmo.",

    "Je mérite d’occuper ma place sans devoir constamment me battre.":
      "Mereço ocupar meu lugar sem precisar lutar constantemente.",

    "Je transforme les obstacles en occasions de révéler ma puissance.":
      "Transformo os obstáculos em oportunidades para revelar minha força.",

    "Je suis capable de créer un mouvement positif autour de moi.":
      "Sou capaz de criar um movimento positivo ao meu redor.",

    /* MESSAGE */

    "Cette année, votre plus grande victoire pourrait naître d’une action simple, pleinement assumée. Les mois à venir vous invitent à mieux reconnaître votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Cette qualité devient particulièrement féconde lorsque vous acceptez de éviter la précipitation, la dispersion ou les réactions trop immédiates. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir. Vous avancerez alors avec plus de clarté et pourrez transformer votre énergie en progrès concret sans vous épuiser.":
      "Este ano, sua maior vitória poderá nascer de uma ação simples, plenamente assumida. Os próximos meses convidam você a reconhecer melhor sua coragem, sua capacidade de iniciativa e seu desejo natural de avançar. Essa qualidade se torna especialmente valiosa quando você aceita evitar a precipitação, a dispersão ou as reações imediatas demais. Não tente resolver tudo de uma só vez: volte, em vez disso, a um objetivo claro, a uma ação realista e a um ritmo que você consiga manter. Assim, avançará com mais clareza e poderá transformar sua energia em progresso concreto sem se esgotar.",

    "Votre énergie naturelle vous ouvre des portes lorsque vous lui donnez une direction précise. Cette période de l’année ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Dans les moments de doute, gardez en tête qu’il est important de éviter la précipitation, la dispersion ou les réactions trop immédiates. Une décision fondée sur un objectif clair, une action réaliste et un rythme que vous pouvez soutenir pourrait modifier durablement votre manière d’aborder la suite.":
      "Sua energia natural abre portas quando você lhe dá uma direção clara. Este período do ano não exige uma resposta espetacular, mas uma presença mais consciente diante daquilo que está vivendo. Sua evolução se apoia em sua coragem, em sua capacidade de iniciativa e em seu desejo natural de avançar. Nos momentos de dúvida, lembre-se da importância de evitar a precipitação, a dispersão ou as reações imediatas demais. Uma decisão baseada em um objetivo claro, em uma ação realista e em um ritmo que você consiga manter poderá modificar de forma duradoura sua maneira de enfrentar o que vem pela frente.",

    "Vous n’avez pas besoin de courir plus vite que la vie : votre courage suffit déjà à faire avancer les choses. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre courage, votre capacité d’initiative et votre désir naturel d’avancer, mais votre véritable avancée viendra de votre capacité à éviter la précipitation, la dispersion ou les réactions trop immédiates. En choisissant un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous donnerez une direction plus juste à votre énergie.":
      "Você não precisa correr mais rápido do que a vida: sua coragem já é suficiente para fazer as coisas avançarem. É possível que uma situação familiar adquira repentinamente um significado diferente. Acolha essa nova percepção sem se julgar. Você já possui sua coragem, sua capacidade de iniciativa e seu desejo natural de avançar, mas seu verdadeiro progresso virá de sua capacidade de evitar a precipitação, a dispersão ou as reações imediatas demais. Ao escolher um objetivo claro, uma ação realista e um ritmo que você consiga manter, dará uma direção mais equilibrada à sua energia.",

    "Une décision prise avec calme pourrait avoir davantage de portée qu’un grand geste impulsif. Cette année peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer, puis veillez à éviter la précipitation, la dispersion ou les réactions trop immédiates. Cette approche vous aidera à transformer votre énergie en progrès concret sans vous épuiser.":
      "Uma decisão tomada com calma poderá ter mais impacto do que um grande gesto impulsivo. Este ano pode se tornar um importante período de recentramento. Nem tudo o que você sente exige uma reação imediata; algumas respostas surgem quando você deixa mais espaço para observar. Apoie-se em sua coragem, em sua capacidade de iniciativa e em seu desejo natural de avançar, procurando evitar a precipitação, a dispersão ou as reações imediatas demais. Essa abordagem ajudará você a transformar sua energia em progresso concreto sem se esgotar.",

    "Votre force ne se mesure pas seulement à votre capacité d’agir, mais aussi à celle de choisir le bon moment. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Pour l’utiliser pleinement, il faudra parfois accepter de éviter la précipitation, la dispersion ou les réactions trop immédiates. Le choix de un objectif clair, une action réaliste et un rythme que vous pouvez soutenir vous permettra d’avancer sans trahir ce que vous ressentez profondément.":
      "Sua força não é medida apenas por sua capacidade de agir, mas também por sua capacidade de escolher o momento certo. Uma porta se abre quando você deixa de repetir automaticamente uma antiga maneira de pensar ou agir. Seu potencial está em sua coragem, em sua capacidade de iniciativa e em seu desejo natural de avançar. Para utilizá-lo plenamente, às vezes será necessário aceitar a importância de evitar a precipitação, a dispersão ou as reações imediatas demais. Escolher um objetivo claro, uma ação realista e um ritmo que você consiga manter permitirá avançar sem trair aquilo que sente profundamente.",

    "Laissez votre feu intérieur devenir une lumière qui guide plutôt qu’une urgence qui consume. Luna Astralis vous invite à considérer cette année comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Restez attentif(ve) au risque de éviter la précipitation, la dispersion ou les réactions trop immédiates. En vous recentrant sur un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous pourrez transformer votre énergie en progrès concret sans vous épuiser et préparer la suite avec davantage de confiance.":
      "Deixe seu fogo interior se tornar uma luz que guia, em vez de uma urgência que consome. Luna Astralis convida você a considerar este ano como uma etapa de amadurecimento interior. Você não precisa se tornar outra pessoa, mas utilizar de maneira mais consciente sua coragem, sua capacidade de iniciativa e seu desejo natural de avançar. Permaneça atento ao risco de se precipitar, se dispersar ou reagir rápido demais. Ao voltar sua atenção para um objetivo claro, uma ação realista e um ritmo que você consiga manter, poderá transformar sua energia em progresso concreto sem se esgotar e preparar o que vem pela frente com mais confiança.",
  },
};
/* =========================================================
   TAUREAU — TRANSLATIONS
========================================================= */

const MANTRA_TAUREAU_TRANSLATIONS = {
  en: {
    /* MANTRA */

    "Je construis ma sécurité sans fermer la porte au changement.":
      "I build my security without closing the door to change.",

    "Je mérite une vie stable, douce et profondément alignée.":
      "I deserve a stable, peaceful life that is deeply aligned with who I am.",

    "Je progresse avec patience vers ce qui possède une vraie valeur.":
      "I move patiently toward what holds genuine value.",

    "Ma constance transforme mes intentions en réalités durables.":
      "My consistency transforms my intentions into lasting realities.",

    "Je peux accueillir la nouveauté sans perdre mes racines.":
      "I can welcome new experiences without losing my roots.",

    "Je choisis ce qui nourrit mon corps, mon cœur et mon avenir.":
      "I choose what nourishes my body, my heart, and my future.",

    /* INTENTION */

    "Consolider ce qui vous apporte une sécurité réelle et apaisante. Cette année, cette intention vous aidera à reconnaître ce qui mérite véritablement votre temps, votre énergie et votre engagement. Appuyez-vous sur votre patience, votre constance et votre capacité naturelle à construire dans la durée. Prenez toutefois garde à ne pas confondre stabilité et immobilité. En acceptant d’ajuster certaines habitudes tout en préservant ce qui compte réellement pour vous, vous pourrez créer des bases encore plus solides pour votre avenir.":
      "Strengthen what brings you genuine and reassuring security. This year, this intention will help you recognize what truly deserves your time, energy, and commitment. Rely on your patience, consistency, and natural ability to build for the long term. However, be careful not to confuse stability with standing still. By accepting adjustments to certain habits while preserving what truly matters to you, you can create even stronger foundations for your future.",

    "Créer davantage d’espace pour le plaisir, le repos et la simplicité. Cette année ne vous demande pas seulement de construire ou de produire, mais également de profiter davantage de ce que vous avez déjà créé. Votre sens du concret et votre besoin de stabilité peuvent devenir de précieux alliés lorsque vous leur accordez un rythme plus équilibré. Évitez de porter trop longtemps des responsabilités qui vous épuisent. En accordant davantage de place au repos, au plaisir et aux besoins essentiels, vous renforcerez durablement votre équilibre.":
      "Create more space for pleasure, rest, and simplicity. This year is not asking you only to build or produce, but also to enjoy more fully what you have already created. Your practical nature and need for stability can become valuable allies when you give them a more balanced rhythm. Avoid carrying exhausting responsibilities for too long. By making more room for rest, pleasure, and essential needs, you will strengthen your balance over the long term.",

    "Faire évoluer une habitude sans bouleverser tout votre équilibre. Les changements les plus importants de votre année pourraient commencer par de petits ajustements répétés avec constance. Vous n’avez pas besoin de transformer toute votre vie pour avancer. Votre patience et votre persévérance vous permettent de construire progressivement quelque chose de durable. Lorsque vous sentez une résistance au changement, demandez-vous si vous protégez réellement votre stabilité ou simplement une habitude devenue familière. Cette distinction pourrait vous ouvrir de nouvelles possibilités.":
      "Let a habit evolve without disrupting your entire balance. The most important changes of your year could begin with small adjustments repeated consistently. You do not need to transform your entire life in order to move forward. Your patience and perseverance allow you to gradually build something lasting. When you feel resistance to change, ask yourself whether you are truly protecting your stability or simply holding on to a familiar habit. This distinction could open new possibilities for you.",

    "Reconnaître la différence entre persévérance et attachement. Votre capacité à tenir bon constitue l’une de vos grandes forces, mais certaines situations peuvent demander une autre forme de courage : celui de laisser évoluer ce qui ne correspond plus à vos besoins. Cette année, observez ce que vous continuez à maintenir uniquement parce que cela vous rassure. Votre sécurité véritable ne dépend pas seulement de ce que vous conservez, mais aussi de votre capacité à vous adapter sans perdre vos valeurs essentielles.":
      "Recognize the difference between perseverance and attachment. Your ability to hold steady is one of your greatest strengths, but some situations may require another form of courage: allowing what no longer meets your needs to evolve. This year, observe what you continue to maintain simply because it feels reassuring. True security depends not only on what you preserve, but also on your ability to adapt without losing your essential values.",

    "Investir votre énergie dans ce qui possède une valeur durable. Cette intention peut devenir un véritable fil conducteur pour votre année. Avant d’accorder votre temps, votre argent ou votre attention à quelque chose, demandez-vous si cela contribue réellement à la vie que vous souhaitez construire. Votre patience, votre sens pratique et votre constance peuvent produire des résultats remarquables lorsqu’ils servent une priorité clairement choisie. En réduisant la dispersion, vous donnerez davantage de force à ce qui compte réellement.":
      "Invest your energy in what has lasting value. This intention can become a genuine guiding principle for your year. Before giving your time, money, or attention to something, ask yourself whether it truly contributes to the life you want to build. Your patience, practicality, and consistency can produce remarkable results when they serve a clearly chosen priority. By reducing distractions, you will give greater strength to what truly matters.",

    "Avancer calmement vers un objectif concret et réalisable. Votre progression n’a pas besoin d’être spectaculaire pour être importante. Cette année, privilégiez les décisions que vous pouvez soutenir dans la durée plutôt que les changements rapides difficiles à maintenir. Votre force réside dans votre capacité à construire étape par étape. En gardant une direction claire tout en acceptant les ajustements nécessaires, vous pourrez transformer votre patience en résultats tangibles et votre stabilité en véritable liberté.":
      "Move calmly toward a concrete and achievable goal. Your progress does not need to be spectacular to be meaningful. This year, favor decisions you can sustain over time rather than rapid changes that are difficult to maintain. Your strength lies in your ability to build step by step. By keeping a clear direction while accepting necessary adjustments, you can transform your patience into tangible results and your stability into genuine freedom.",

    /* AFFIRMATION */

    "Je mérite de recevoir autant que je suis capable de donner.":
      "I deserve to receive as much as I am capable of giving.",

    "Je suis en sécurité lorsque je choisis ce qui respecte mes besoins.":
      "I am secure when I choose what respects my needs.",

    "Ma patience est une force qui me permet de bâtir avec solidité.":
      "My patience is a strength that allows me to build solid foundations.",

    "Je peux changer sans perdre ce qui constitue mon essence.":
      "I can change without losing what makes me who I am.",

    "J’attire naturellement les situations qui soutiennent ma stabilité.":
      "I naturally attract situations that support my stability.",

    "Je fais confiance au rythme naturel de mon évolution.":
      "I trust the natural rhythm of my growth.",

    /* MESSAGE */

    "Cette année, la stabilité ne consiste pas à tout maintenir intact, mais à renforcer ce qui vous fait réellement du bien. Les mois à venir pourraient vous aider à distinguer plus clairement ce qui représente une véritable sécurité de ce qui relève simplement de l’habitude. Votre patience et votre constance demeurent de grandes forces, mais elles deviennent encore plus puissantes lorsque vous acceptez d’ajuster ce qui ne correspond plus à vos besoins. Construisez lentement, choisissez consciemment et laissez votre stabilité devenir une base pour évoluer plutôt qu’une raison de rester immobile.":
      "This year, stability is not about keeping everything unchanged, but about strengthening what genuinely supports your well-being. The coming months could help you distinguish more clearly between true security and what is simply familiar habit. Your patience and consistency remain great strengths, but they become even more powerful when you accept adjustments to what no longer meets your needs. Build slowly, choose consciously, and let your stability become a foundation for growth rather than a reason to remain still.",

    "Une évolution douce pourrait vous conduire plus loin qu’un changement imposé trop rapidement. Cette année favorise les transformations progressives, celles qui respectent votre rythme tout en vous permettant d’avancer réellement. Vous n’avez pas besoin de renoncer à vos repères pour accueillir quelque chose de nouveau. En vous appuyant sur votre patience, votre sens pratique et votre capacité à reconnaître ce qui possède une valeur durable, vous pourrez faire évoluer votre vie sans perdre ce qui constitue votre véritable sécurité.":
      "A gentle evolution could take you farther than a change imposed too quickly. This year favors gradual transformations that respect your pace while allowing you to make genuine progress. You do not need to abandon your points of reference in order to welcome something new. By relying on your patience, practicality, and ability to recognize what has lasting value, you can allow your life to evolve without losing what provides you with genuine security.",

    "Votre constance devient particulièrement puissante lorsqu’elle sert un désir profondément personnel. Les prochains mois peuvent vous aider à concentrer davantage votre énergie sur ce qui compte réellement pour vous. Certaines obligations ou habitudes pourraient apparaître moins essentielles qu’auparavant. Ne craignez pas de revoir vos priorités. Lorsque votre persévérance est dirigée vers un objectif qui correspond véritablement à vos valeurs, chaque petit progrès contribue à construire quelque chose de beaucoup plus important.":
      "Your consistency becomes especially powerful when it serves a deeply personal desire. The coming months can help you focus more of your energy on what truly matters to you. Certain obligations or habits may seem less essential than they once did. Do not be afraid to reconsider your priorities. When your perseverance is directed toward a goal that genuinely reflects your values, every small step contributes to building something much more meaningful.",

    "Prenez le temps d’apprécier ce qui fonctionne déjà avant de chercher ce qui manque. Cette année pourrait vous rappeler que l’abondance ne se mesure pas uniquement à ce que vous réussissez encore à obtenir. Une partie importante de votre évolution passera par votre capacité à reconnaître la valeur de ce qui est déjà présent dans votre vie. À partir de cette base, vous pourrez déterminer avec davantage de sérénité ce qui mérite d’être amélioré, développé ou simplement laissé derrière vous.":
      "Take time to appreciate what is already working before focusing on what is missing. This year could remind you that abundance is not measured only by what you still manage to obtain. An important part of your growth will come through your ability to recognize the value of what is already present in your life. From that foundation, you can determine more calmly what deserves to be improved, developed, or simply left behind.",

    "Une décision pratique pourrait également vous apporter un soulagement émotionnel inattendu. Votre besoin de sécurité est étroitement lié à votre environnement, à vos ressources et à la manière dont vous organisez votre quotidien. Cette année, simplifier une situation concrète pourrait libérer beaucoup plus d’énergie que vous ne l’imaginez. N’hésitez pas à revoir une habitude, une dépense, une responsabilité ou une organisation devenue trop lourde. Ce que vous simplifiez extérieurement peut également créer davantage d’espace intérieurement.":
      "A practical decision could also bring unexpected emotional relief. Your need for security is closely connected to your environment, your resources, and the way you organize your daily life. This year, simplifying a concrete situation could free much more energy than you imagine. Do not hesitate to reconsider a habit, expense, responsibility, or arrangement that has become too burdensome. What you simplify externally can also create more space within you.",

    "Vous êtes invité à bâtir une vie qui ne soit pas seulement solide, mais également agréable à habiter. Luna Astralis vous invite cette année à accorder autant d’importance à votre bien-être qu’à votre besoin de sécurité. Votre capacité à construire dans la durée est précieuse, mais ce que vous construisez doit également vous apporter du plaisir, de la paix et un sentiment d’alignement. En choisissant plus consciemment ce que vous souhaitez préserver, transformer ou développer, vous pourrez créer une stabilité qui soutient véritablement votre évolution.":
      "You are invited to build a life that is not only solid, but also enjoyable to live. This year, Luna Astralis invites you to give as much importance to your well-being as to your need for security. Your ability to build for the long term is valuable, but what you create should also bring you pleasure, peace, and a sense of alignment. By choosing more consciously what you want to preserve, transform, or develop, you can create a stability that genuinely supports your growth.",
  },

  es: {
    /* MANTRA */

    "Je construis ma sécurité sans fermer la porte au changement.":
      "Construyo mi seguridad sin cerrar la puerta al cambio.",

    "Je mérite une vie stable, douce et profondément alignée.":
      "Merezco una vida estable, serena y profundamente alineada conmigo.",

    "Je progresse avec patience vers ce qui possède une vraie valeur.":
      "Avanzo con paciencia hacia aquello que posee un verdadero valor.",

    "Ma constance transforme mes intentions en réalités durables.":
      "Mi constancia transforma mis intenciones en realidades duraderas.",

    "Je peux accueillir la nouveauté sans perdre mes racines.":
      "Puedo acoger lo nuevo sin perder mis raíces.",

    "Je choisis ce qui nourrit mon corps, mon cœur et mon avenir.":
      "Elijo aquello que nutre mi cuerpo, mi corazón y mi futuro.",

    /* INTENTION */

    "Consolider ce qui vous apporte une sécurité réelle et apaisante. Cette année, cette intention vous aidera à reconnaître ce qui mérite véritablement votre temps, votre énergie et votre engagement. Appuyez-vous sur votre patience, votre constance et votre capacité naturelle à construire dans la durée. Prenez toutefois garde à ne pas confondre stabilité et immobilité. En acceptant d’ajuster certaines habitudes tout en préservant ce qui compte réellement pour vous, vous pourrez créer des bases encore plus solides pour votre avenir.":
      "Consolida aquello que te aporta una seguridad real y tranquilizadora. Este año, esta intención te ayudará a reconocer lo que verdaderamente merece tu tiempo, tu energía y tu compromiso. Apóyate en tu paciencia, tu constancia y tu capacidad natural para construir a largo plazo. Sin embargo, procura no confundir estabilidad con inmovilidad. Al aceptar ajustar ciertos hábitos mientras preservas lo que realmente importa para ti, podrás crear bases aún más sólidas para tu futuro.",

    "Créer davantage d’espace pour le plaisir, le repos et la simplicité. Cette année ne vous demande pas seulement de construire ou de produire, mais également de profiter davantage de ce que vous avez déjà créé. Votre sens du concret et votre besoin de stabilité peuvent devenir de précieux alliés lorsque vous leur accordez un rythme plus équilibré. Évitez de porter trop longtemps des responsabilités qui vous épuisent. En accordant davantage de place au repos, au plaisir et aux besoins essentiels, vous renforcerez durablement votre équilibre.":
      "Crea más espacio para el placer, el descanso y la sencillez. Este año no te pide únicamente construir o producir, sino también disfrutar más de lo que ya has creado. Tu sentido práctico y tu necesidad de estabilidad pueden convertirse en valiosos aliados cuando les das un ritmo más equilibrado. Evita cargar durante demasiado tiempo con responsabilidades que te agotan. Al conceder más espacio al descanso, al placer y a tus necesidades esenciales, fortalecerás tu equilibrio de manera duradera.",

    "Faire évoluer une habitude sans bouleverser tout votre équilibre. Les changements les plus importants de votre année pourraient commencer par de petits ajustements répétés avec constance. Vous n’avez pas besoin de transformer toute votre vie pour avancer. Votre patience et votre persévérance vous permettent de construire progressivement quelque chose de durable. Lorsque vous sentez une résistance au changement, demandez-vous si vous protégez réellement votre stabilité ou simplement une habitude devenue familière. Cette distinction pourrait vous ouvrir de nouvelles possibilités.":
      "Haz evolucionar un hábito sin alterar todo tu equilibrio. Los cambios más importantes de tu año podrían comenzar con pequeños ajustes repetidos con constancia. No necesitas transformar toda tu vida para avanzar. Tu paciencia y tu perseverancia te permiten construir progresivamente algo duradero. Cuando sientas resistencia al cambio, pregúntate si realmente estás protegiendo tu estabilidad o simplemente un hábito que se ha vuelto familiar. Esta diferencia podría abrirte nuevas posibilidades.",

    "Reconnaître la différence entre persévérance et attachement. Votre capacité à tenir bon constitue l’une de vos grandes forces, mais certaines situations peuvent demander une autre forme de courage : celui de laisser évoluer ce qui ne correspond plus à vos besoins. Cette année, observez ce que vous continuez à maintenir uniquement parce que cela vous rassure. Votre sécurité véritable ne dépend pas seulement de ce que vous conservez, mais aussi de votre capacité à vous adapter sans perdre vos valeurs essentielles.":
      "Reconoce la diferencia entre perseverancia y apego. Tu capacidad para mantenerte firme constituye una de tus grandes fortalezas, pero algunas situaciones pueden requerir otra forma de valentía: permitir que evolucione aquello que ya no responde a tus necesidades. Este año, observa lo que continúas manteniendo únicamente porque te da seguridad. Tu verdadera seguridad no depende solamente de lo que conservas, sino también de tu capacidad para adaptarte sin perder tus valores esenciales.",

    "Investir votre énergie dans ce qui possède une valeur durable. Cette intention peut devenir un véritable fil conducteur pour votre année. Avant d’accorder votre temps, votre argent ou votre attention à quelque chose, demandez-vous si cela contribue réellement à la vie que vous souhaitez construire. Votre patience, votre sens pratique et votre constance peuvent produire des résultats remarquables lorsqu’ils servent une priorité clairement choisie. En réduisant la dispersion, vous donnerez davantage de force à ce qui compte réellement.":
      "Invierte tu energía en aquello que posee un valor duradero. Esta intención puede convertirse en un verdadero hilo conductor para tu año. Antes de dedicar tu tiempo, tu dinero o tu atención a algo, pregúntate si realmente contribuye a la vida que deseas construir. Tu paciencia, tu sentido práctico y tu constancia pueden producir resultados extraordinarios cuando están al servicio de una prioridad claramente elegida. Al reducir la dispersión, darás más fuerza a lo que realmente importa.",

    "Avancer calmement vers un objectif concret et réalisable. Votre progression n’a pas besoin d’être spectaculaire pour être importante. Cette année, privilégiez les décisions que vous pouvez soutenir dans la durée plutôt que les changements rapides difficiles à maintenir. Votre force réside dans votre capacité à construire étape par étape. En gardant une direction claire tout en acceptant les ajustements nécessaires, vous pourrez transformer votre patience en résultats tangibles et votre stabilité en véritable liberté.":
      "Avanza con calma hacia un objetivo concreto y alcanzable. Tu progreso no necesita ser espectacular para ser importante. Este año, prioriza las decisiones que puedas mantener a largo plazo en lugar de cambios rápidos difíciles de sostener. Tu fuerza reside en tu capacidad para construir paso a paso. Manteniendo una dirección clara y aceptando al mismo tiempo los ajustes necesarios, podrás transformar tu paciencia en resultados tangibles y tu estabilidad en verdadera libertad.",

    /* AFFIRMATION */

    "Je mérite de recevoir autant que je suis capable de donner.":
      "Merezco recibir tanto como soy capaz de dar.",

    "Je suis en sécurité lorsque je choisis ce qui respecte mes besoins.":
      "Me siento seguro cuando elijo aquello que respeta mis necesidades.",

    "Ma patience est une force qui me permet de bâtir avec solidité.":
      "Mi paciencia es una fuerza que me permite construir con solidez.",

    "Je peux changer sans perdre ce qui constitue mon essence.":
      "Puedo cambiar sin perder aquello que constituye mi esencia.",

    "J’attire naturellement les situations qui soutiennent ma stabilité.":
      "Atraigo naturalmente situaciones que favorecen mi estabilidad.",

    "Je fais confiance au rythme naturel de mon évolution.":
      "Confío en el ritmo natural de mi evolución.",

    /* MESSAGE */

    "Cette année, la stabilité ne consiste pas à tout maintenir intact, mais à renforcer ce qui vous fait réellement du bien. Les mois à venir pourraient vous aider à distinguer plus clairement ce qui représente une véritable sécurité de ce qui relève simplement de l’habitude. Votre patience et votre constance demeurent de grandes forces, mais elles deviennent encore plus puissantes lorsque vous acceptez d’ajuster ce qui ne correspond plus à vos besoins. Construisez lentement, choisissez consciemment et laissez votre stabilité devenir une base pour évoluer plutôt qu’une raison de rester immobile.":
      "Este año, la estabilidad no consiste en mantenerlo todo intacto, sino en fortalecer aquello que realmente te hace bien. Los próximos meses podrían ayudarte a distinguir con mayor claridad lo que representa una verdadera seguridad de aquello que simplemente forma parte de la costumbre. Tu paciencia y tu constancia siguen siendo grandes fortalezas, pero se vuelven aún más poderosas cuando aceptas ajustar lo que ya no responde a tus necesidades. Construye lentamente, elige conscientemente y permite que tu estabilidad se convierta en una base para evolucionar en lugar de una razón para permanecer inmóvil.",

    "Une évolution douce pourrait vous conduire plus loin qu’un changement imposé trop rapidement. Cette année favorise les transformations progressives, celles qui respectent votre rythme tout en vous permettant d’avancer réellement. Vous n’avez pas besoin de renoncer à vos repères pour accueillir quelque chose de nouveau. En vous appuyant sur votre patience, votre sens pratique et votre capacité à reconnaître ce qui possède une valeur durable, vous pourrez faire évoluer votre vie sans perdre ce qui constitue votre véritable sécurité.":
      "Una evolución gradual podría llevarte más lejos que un cambio impuesto demasiado rápido. Este año favorece las transformaciones progresivas, aquellas que respetan tu ritmo y al mismo tiempo te permiten avanzar realmente. No necesitas renunciar a tus puntos de referencia para recibir algo nuevo. Apoyándote en tu paciencia, tu sentido práctico y tu capacidad para reconocer aquello que posee un valor duradero, podrás hacer evolucionar tu vida sin perder lo que constituye tu verdadera seguridad.",

    "Votre constance devient particulièrement puissante lorsqu’elle sert un désir profondément personnel. Les prochains mois peuvent vous aider à concentrer davantage votre énergie sur ce qui compte réellement pour vous. Certaines obligations ou habitudes pourraient apparaître moins essentielles qu’auparavant. Ne craignez pas de revoir vos priorités. Lorsque votre persévérance est dirigée vers un objectif qui correspond véritablement à vos valeurs, chaque petit progrès contribue à construire quelque chose de beaucoup plus important.":
      "Tu constancia se vuelve especialmente poderosa cuando está al servicio de un deseo profundamente personal. Los próximos meses pueden ayudarte a concentrar más tu energía en aquello que realmente importa para ti. Algunas obligaciones o hábitos podrían parecer menos esenciales que antes. No temas revisar tus prioridades. Cuando tu perseverancia se dirige hacia un objetivo que verdaderamente corresponde a tus valores, cada pequeño progreso contribuye a construir algo mucho más importante.",

    "Prenez le temps d’apprécier ce qui fonctionne déjà avant de chercher ce qui manque. Cette année pourrait vous rappeler que l’abondance ne se mesure pas uniquement à ce que vous réussissez encore à obtenir. Une partie importante de votre évolution passera par votre capacité à reconnaître la valeur de ce qui est déjà présent dans votre vie. À partir de cette base, vous pourrez déterminer avec davantage de sérénité ce qui mérite d’être amélioré, développé ou simplement laissé derrière vous.":
      "Tómate el tiempo de apreciar lo que ya funciona antes de buscar lo que falta. Este año podría recordarte que la abundancia no se mide únicamente por aquello que todavía logras obtener. Una parte importante de tu evolución pasará por tu capacidad para reconocer el valor de lo que ya está presente en tu vida. A partir de esta base, podrás determinar con mayor serenidad qué merece ser mejorado, desarrollado o simplemente dejado atrás.",

    "Une décision pratique pourrait également vous apporter un soulagement émotionnel inattendu. Votre besoin de sécurité est étroitement lié à votre environnement, à vos ressources et à la manière dont vous organisez votre quotidien. Cette année, simplifier une situation concrète pourrait libérer beaucoup plus d’énergie que vous ne l’imaginez. N’hésitez pas à revoir une habitude, une dépense, une responsabilité ou une organisation devenue trop lourde. Ce que vous simplifiez extérieurement peut également créer davantage d’espace intérieurement.":
      "Una decisión práctica también podría proporcionarte un alivio emocional inesperado. Tu necesidad de seguridad está estrechamente relacionada con tu entorno, tus recursos y la manera en que organizas tu vida cotidiana. Este año, simplificar una situación concreta podría liberar mucha más energía de la que imaginas. No dudes en revisar un hábito, un gasto, una responsabilidad o una organización que se haya vuelto demasiado pesada. Lo que simplificas exteriormente también puede crear más espacio en tu interior.",

    "Vous êtes invité à bâtir une vie qui ne soit pas seulement solide, mais également agréable à habiter. Luna Astralis vous invite cette année à accorder autant d’importance à votre bien-être qu’à votre besoin de sécurité. Votre capacité à construire dans la durée est précieuse, mais ce que vous construisez doit également vous apporter du plaisir, de la paix et un sentiment d’alignement. En choisissant plus consciemment ce que vous souhaitez préserver, transformer ou développer, vous pourrez créer une stabilité qui soutient véritablement votre évolution.":
      "Estás invitado a construir una vida que no solo sea sólida, sino también agradable de vivir. Este año, Luna Astralis te invita a conceder tanta importancia a tu bienestar como a tu necesidad de seguridad. Tu capacidad para construir a largo plazo es valiosa, pero aquello que construyes también debe aportarte placer, paz y una sensación de armonía interior. Al elegir más conscientemente lo que deseas preservar, transformar o desarrollar, podrás crear una estabilidad que apoye verdaderamente tu evolución.",
  },

  de: {
    /* MANTRA */

    "Je construis ma sécurité sans fermer la porte au changement.":
      "Ich schaffe Sicherheit, ohne mich Veränderungen zu verschließen.",

    "Je mérite une vie stable, douce et profondément alignée.":
      "Ich verdiene ein stabiles, harmonisches und tief mit mir verbundenes Leben.",

    "Je progresse avec patience vers ce qui possède une vraie valeur.":
      "Ich gehe geduldig auf das zu, was einen echten Wert besitzt.",

    "Ma constance transforme mes intentions en réalités durables.":
      "Meine Beständigkeit verwandelt meine Absichten in dauerhafte Realität.",

    "Je peux accueillir la nouveauté sans perdre mes racines.":
      "Ich kann Neues willkommen heißen, ohne meine Wurzeln zu verlieren.",

    "Je choisis ce qui nourrit mon corps, mon cœur et mon avenir.":
      "Ich wähle, was meinen Körper, mein Herz und meine Zukunft nährt.",

    /* INTENTION */

    "Consolider ce qui vous apporte une sécurité réelle et apaisante. Cette année, cette intention vous aidera à reconnaître ce qui mérite véritablement votre temps, votre énergie et votre engagement. Appuyez-vous sur votre patience, votre constance et votre capacité naturelle à construire dans la durée. Prenez toutefois garde à ne pas confondre stabilité et immobilité. En acceptant d’ajuster certaines habitudes tout en préservant ce qui compte réellement pour vous, vous pourrez créer des bases encore plus solides pour votre avenir.":
      "Festigen Sie, was Ihnen echte und beruhigende Sicherheit gibt. In diesem Jahr wird Ihnen diese Absicht helfen zu erkennen, was Ihre Zeit, Ihre Energie und Ihr Engagement wirklich verdient. Vertrauen Sie auf Ihre Geduld, Ihre Beständigkeit und Ihre natürliche Fähigkeit, langfristig etwas aufzubauen. Achten Sie jedoch darauf, Stabilität nicht mit Stillstand zu verwechseln. Wenn Sie bereit sind, bestimmte Gewohnheiten anzupassen und gleichzeitig das zu bewahren, was Ihnen wirklich wichtig ist, können Sie noch solidere Grundlagen für Ihre Zukunft schaffen.",

    "Créer davantage d’espace pour le plaisir, le repos et la simplicité. Cette année ne vous demande pas seulement de construire ou de produire, mais également de profiter davantage de ce que vous avez déjà créé. Votre sens du concret et votre besoin de stabilité peuvent devenir de précieux alliés lorsque vous leur accordez un rythme plus équilibré. Évitez de porter trop longtemps des responsabilités qui vous épuisent. En accordant davantage de place au repos, au plaisir et aux besoins essentiels, vous renforcerez durablement votre équilibre.":
      "Schaffen Sie mehr Raum für Freude, Erholung und Einfachheit. Dieses Jahr fordert Sie nicht nur dazu auf, etwas aufzubauen oder zu leisten, sondern auch das stärker zu genießen, was Sie bereits geschaffen haben. Ihr praktischer Sinn und Ihr Bedürfnis nach Stabilität können zu wertvollen Verbündeten werden, wenn Sie ihnen einen ausgewogeneren Rhythmus geben. Vermeiden Sie es, erschöpfende Verantwortungen zu lange zu tragen. Wenn Sie Erholung, Freude und grundlegenden Bedürfnissen mehr Raum geben, stärken Sie Ihr Gleichgewicht nachhaltig.",

    "Faire évoluer une habitude sans bouleverser tout votre équilibre. Les changements les plus importants de votre année pourraient commencer par de petits ajustements répétés avec constance. Vous n’avez pas besoin de transformer toute votre vie pour avancer. Votre patience et votre persévérance vous permettent de construire progressivement quelque chose de durable. Lorsque vous sentez une résistance au changement, demandez-vous si vous protégez réellement votre stabilité ou simplement une habitude devenue familière. Cette distinction pourrait vous ouvrir de nouvelles possibilités.":
      "Verändern Sie eine Gewohnheit, ohne Ihr gesamtes Gleichgewicht zu erschüttern. Die wichtigsten Veränderungen Ihres Jahres könnten mit kleinen Anpassungen beginnen, die Sie beständig wiederholen. Sie müssen nicht Ihr ganzes Leben verändern, um voranzukommen. Ihre Geduld und Ausdauer ermöglichen es Ihnen, Schritt für Schritt etwas Dauerhaftes aufzubauen. Wenn Sie Widerstand gegen Veränderungen spüren, fragen Sie sich, ob Sie tatsächlich Ihre Stabilität schützen oder lediglich an einer vertraut gewordenen Gewohnheit festhalten. Diese Unterscheidung könnte Ihnen neue Möglichkeiten eröffnen.",

    "Reconnaître la différence entre persévérance et attachement. Votre capacité à tenir bon constitue l’une de vos grandes forces, mais certaines situations peuvent demander une autre forme de courage : celui de laisser évoluer ce qui ne correspond plus à vos besoins. Cette année, observez ce que vous continuez à maintenir uniquement parce que cela vous rassure. Votre sécurité véritable ne dépend pas seulement de ce que vous conservez, mais aussi de votre capacité à vous adapter sans perdre vos valeurs essentielles.":
      "Erkennen Sie den Unterschied zwischen Ausdauer und Festhalten. Ihre Fähigkeit durchzuhalten gehört zu Ihren großen Stärken, doch manche Situationen verlangen eine andere Form von Mut: den Mut, sich von dem weiterzuentwickeln, was Ihren Bedürfnissen nicht mehr entspricht. Beobachten Sie in diesem Jahr, woran Sie nur deshalb festhalten, weil es Ihnen Sicherheit vermittelt. Wahre Sicherheit hängt nicht nur davon ab, was Sie bewahren, sondern auch von Ihrer Fähigkeit, sich anzupassen, ohne Ihre wesentlichen Werte zu verlieren.",

    "Investir votre énergie dans ce qui possède une valeur durable. Cette intention peut devenir un véritable fil conducteur pour votre année. Avant d’accorder votre temps, votre argent ou votre attention à quelque chose, demandez-vous si cela contribue réellement à la vie que vous souhaitez construire. Votre patience, votre sens pratique et votre constance peuvent produire des résultats remarquables lorsqu’ils servent une priorité clairement choisie. En réduisant la dispersion, vous donnerez davantage de force à ce qui compte réellement.":
      "Investieren Sie Ihre Energie in das, was einen dauerhaften Wert besitzt. Diese Absicht kann zu einem echten Leitfaden für Ihr Jahr werden. Bevor Sie etwas mit Ihrer Zeit, Ihrem Geld oder Ihrer Aufmerksamkeit unterstützen, fragen Sie sich, ob es wirklich zu dem Leben beiträgt, das Sie aufbauen möchten. Ihre Geduld, Ihr praktischer Sinn und Ihre Beständigkeit können bemerkenswerte Ergebnisse hervorbringen, wenn sie einer klar gewählten Priorität dienen. Indem Sie Ablenkungen reduzieren, verleihen Sie dem, was wirklich zählt, mehr Kraft.",

    "Avancer calmement vers un objectif concret et réalisable. Votre progression n’a pas besoin d’être spectaculaire pour être importante. Cette année, privilégiez les décisions que vous pouvez soutenir dans la durée plutôt que les changements rapides difficiles à maintenir. Votre force réside dans votre capacité à construire étape par étape. En gardant une direction claire tout en acceptant les ajustements nécessaires, vous pourrez transformer votre patience en résultats tangibles et votre stabilité en véritable liberté.":
      "Gehen Sie ruhig auf ein konkretes und erreichbares Ziel zu. Ihr Fortschritt muss nicht spektakulär sein, um bedeutend zu sein. Bevorzugen Sie in diesem Jahr Entscheidungen, die Sie langfristig tragen können, statt schneller Veränderungen, die schwer aufrechtzuerhalten sind. Ihre Stärke liegt in Ihrer Fähigkeit, Schritt für Schritt aufzubauen. Wenn Sie eine klare Richtung beibehalten und gleichzeitig notwendige Anpassungen akzeptieren, können Sie Ihre Geduld in greifbare Ergebnisse und Ihre Stabilität in echte Freiheit verwandeln.",

    /* AFFIRMATION */

    "Je mérite de recevoir autant que je suis capable de donner.":
      "Ich verdiene es, genauso viel zu empfangen, wie ich geben kann.",

    "Je suis en sécurité lorsque je choisis ce qui respecte mes besoins.":
      "Ich fühle mich sicher, wenn ich das wähle, was meine Bedürfnisse respektiert.",

    "Ma patience est une force qui me permet de bâtir avec solidité.":
      "Meine Geduld ist eine Stärke, die es mir ermöglicht, auf einem soliden Fundament aufzubauen.",

    "Je peux changer sans perdre ce qui constitue mon essence.":
      "Ich kann mich verändern, ohne das zu verlieren, was mein Wesen ausmacht.",

    "J’attire naturellement les situations qui soutiennent ma stabilité.":
      "Ich ziehe auf natürliche Weise Situationen an, die meine Stabilität unterstützen.",

    "Je fais confiance au rythme naturel de mon évolution.":
      "Ich vertraue dem natürlichen Rhythmus meiner Entwicklung.",

    /* MESSAGE */

    "Cette année, la stabilité ne consiste pas à tout maintenir intact, mais à renforcer ce qui vous fait réellement du bien. Les mois à venir pourraient vous aider à distinguer plus clairement ce qui représente une véritable sécurité de ce qui relève simplement de l’habitude. Votre patience et votre constance demeurent de grandes forces, mais elles deviennent encore plus puissantes lorsque vous acceptez d’ajuster ce qui ne correspond plus à vos besoins. Construisez lentement, choisissez consciemment et laissez votre stabilité devenir une base pour évoluer plutôt qu’une raison de rester immobile.":
      "In diesem Jahr bedeutet Stabilität nicht, alles unverändert zu lassen, sondern das zu stärken, was Ihnen wirklich guttut. Die kommenden Monate könnten Ihnen helfen, klarer zwischen echter Sicherheit und bloßer Gewohnheit zu unterscheiden. Ihre Geduld und Beständigkeit bleiben große Stärken, doch sie werden noch kraftvoller, wenn Sie bereit sind, das anzupassen, was Ihren Bedürfnissen nicht mehr entspricht. Bauen Sie langsam auf, entscheiden Sie bewusst und lassen Sie Ihre Stabilität zu einer Grundlage für Entwicklung werden, statt zu einem Grund, stillzustehen.",

    "Une évolution douce pourrait vous conduire plus loin qu’un changement imposé trop rapidement. Cette année favorise les transformations progressives, celles qui respectent votre rythme tout en vous permettant d’avancer réellement. Vous n’avez pas besoin de renoncer à vos repères pour accueillir quelque chose de nouveau. En vous appuyant sur votre patience, votre sens pratique et votre capacité à reconnaître ce qui possède une valeur durable, vous pourrez faire évoluer votre vie sans perdre ce qui constitue votre véritable sécurité.":
      "Eine sanfte Entwicklung könnte Sie weiterbringen als eine Veränderung, die zu schnell erzwungen wird. Dieses Jahr begünstigt schrittweise Veränderungen, die Ihren Rhythmus respektieren und Ihnen gleichzeitig ermöglichen, wirklich voranzukommen. Sie müssen Ihre Orientierungspunkte nicht aufgeben, um etwas Neues willkommen zu heißen. Wenn Sie sich auf Ihre Geduld, Ihren praktischen Sinn und Ihre Fähigkeit stützen, dauerhafte Werte zu erkennen, können Sie Ihr Leben weiterentwickeln, ohne das zu verlieren, was Ihnen echte Sicherheit gibt.",

    "Votre constance devient particulièrement puissante lorsqu’elle sert un désir profondément personnel. Les prochains mois peuvent vous aider à concentrer davantage votre énergie sur ce qui compte réellement pour vous. Certaines obligations ou habitudes pourraient apparaître moins essentielles qu’auparavant. Ne craignez pas de revoir vos priorités. Lorsque votre persévérance est dirigée vers un objectif qui correspond véritablement à vos valeurs, chaque petit progrès contribue à construire quelque chose de beaucoup plus important.":
      "Ihre Beständigkeit wird besonders kraftvoll, wenn sie einem zutiefst persönlichen Wunsch dient. Die kommenden Monate können Ihnen helfen, Ihre Energie stärker auf das zu konzentrieren, was Ihnen wirklich wichtig ist. Manche Verpflichtungen oder Gewohnheiten könnten weniger wesentlich erscheinen als früher. Scheuen Sie sich nicht, Ihre Prioritäten neu zu bewerten. Wenn Ihre Ausdauer auf ein Ziel ausgerichtet ist, das wirklich Ihren Werten entspricht, trägt jeder kleine Fortschritt dazu bei, etwas wesentlich Bedeutenderes aufzubauen.",

    "Prenez le temps d’apprécier ce qui fonctionne déjà avant de chercher ce qui manque. Cette année pourrait vous rappeler que l’abondance ne se mesure pas uniquement à ce que vous réussissez encore à obtenir. Une partie importante de votre évolution passera par votre capacité à reconnaître la valeur de ce qui est déjà présent dans votre vie. À partir de cette base, vous pourrez déterminer avec davantage de sérénité ce qui mérite d’être amélioré, développé ou simplement laissé derrière vous.":
      "Nehmen Sie sich Zeit, das zu schätzen, was bereits funktioniert, bevor Sie nach dem suchen, was fehlt. Dieses Jahr könnte Sie daran erinnern, dass Fülle nicht nur daran gemessen wird, was Sie noch erreichen oder erhalten können. Ein wichtiger Teil Ihrer Entwicklung wird darin bestehen, den Wert dessen zu erkennen, was bereits in Ihrem Leben vorhanden ist. Von dieser Grundlage aus können Sie gelassener entscheiden, was verbessert, weiterentwickelt oder einfach zurückgelassen werden sollte.",

    "Une décision pratique pourrait également vous apporter un soulagement émotionnel inattendu. Votre besoin de sécurité est étroitement lié à votre environnement, à vos ressources et à la manière dont vous organisez votre quotidien. Cette année, simplifier une situation concrète pourrait libérer beaucoup plus d’énergie que vous ne l’imaginez. N’hésitez pas à revoir une habitude, une dépense, une responsabilité ou une organisation devenue trop lourde. Ce que vous simplifiez extérieurement peut également créer davantage d’espace intérieurement.":
      "Eine praktische Entscheidung könnte Ihnen auch unerwartete emotionale Erleichterung bringen. Ihr Bedürfnis nach Sicherheit ist eng mit Ihrer Umgebung, Ihren Ressourcen und der Organisation Ihres Alltags verbunden. In diesem Jahr könnte die Vereinfachung einer konkreten Situation wesentlich mehr Energie freisetzen, als Sie erwarten. Zögern Sie nicht, eine Gewohnheit, eine Ausgabe, eine Verantwortung oder eine zu belastend gewordene Organisation zu überdenken. Was Sie im Außen vereinfachen, kann auch in Ihrem Inneren mehr Raum schaffen.",

    "Vous êtes invité à bâtir une vie qui ne soit pas seulement solide, mais également agréable à habiter. Luna Astralis vous invite cette année à accorder autant d’importance à votre bien-être qu’à votre besoin de sécurité. Votre capacité à construire dans la durée est précieuse, mais ce que vous construisez doit également vous apporter du plaisir, de la paix et un sentiment d’alignement. En choisissant plus consciemment ce que vous souhaitez préserver, transformer ou développer, vous pourrez créer une stabilité qui soutient véritablement votre évolution.":
      "Sie sind eingeladen, ein Leben aufzubauen, das nicht nur solide, sondern auch angenehm zu leben ist. Luna Astralis lädt Sie in diesem Jahr dazu ein, Ihrem Wohlbefinden ebenso viel Bedeutung beizumessen wie Ihrem Bedürfnis nach Sicherheit. Ihre Fähigkeit, langfristig aufzubauen, ist wertvoll, doch das, was Sie schaffen, sollte Ihnen auch Freude, Frieden und ein Gefühl innerer Stimmigkeit bringen. Indem Sie bewusster entscheiden, was Sie bewahren, verändern oder entwickeln möchten, können Sie eine Stabilität schaffen, die Ihre Entwicklung wirklich unterstützt.",
  },

  it: {
    /* MANTRA */

    "Je construis ma sécurité sans fermer la porte au changement.":
      "Costruisco la mia sicurezza senza chiudere la porta al cambiamento.",

    "Je mérite une vie stable, douce et profondément alignée.":
      "Merito una vita stabile, serena e profondamente in armonia con me stesso.",

    "Je progresse avec patience vers ce qui possède une vraie valeur.":
      "Avanzo con pazienza verso ciò che possiede un valore autentico.",

    "Ma constance transforme mes intentions en réalités durables.":
      "La mia costanza trasforma le mie intenzioni in realtà durature.",

    "Je peux accueillir la nouveauté sans perdre mes racines.":
      "Posso accogliere la novità senza perdere le mie radici.",

    "Je choisis ce qui nourrit mon corps, mon cœur et mon avenir.":
      "Scelgo ciò che nutre il mio corpo, il mio cuore e il mio futuro.",

    /* INTENTION */

    "Consolider ce qui vous apporte une sécurité réelle et apaisante. Cette année, cette intention vous aidera à reconnaître ce qui mérite véritablement votre temps, votre énergie et votre engagement. Appuyez-vous sur votre patience, votre constance et votre capacité naturelle à construire dans la durée. Prenez toutefois garde à ne pas confondre stabilité et immobilité. En acceptant d’ajuster certaines habitudes tout en préservant ce qui compte réellement pour vous, vous pourrez créer des bases encore plus solides pour votre avenir.":
      "Consolidate ciò che vi offre una sicurezza autentica e rassicurante. Quest’anno, questa intenzione vi aiuterà a riconoscere ciò che merita veramente il vostro tempo, la vostra energia e il vostro impegno. Affidatevi alla vostra pazienza, alla vostra costanza e alla vostra naturale capacità di costruire nel tempo. Fate tuttavia attenzione a non confondere la stabilità con l’immobilità. Accettando di modificare alcune abitudini e preservando al tempo stesso ciò che conta davvero per voi, potrete creare basi ancora più solide per il vostro futuro.",

    "Créer davantage d’espace pour le plaisir, le repos et la simplicité. Cette année ne vous demande pas seulement de construire ou de produire, mais également de profiter davantage de ce que vous avez déjà créé. Votre sens du concret et votre besoin de stabilité peuvent devenir de précieux alliés lorsque vous leur accordez un rythme plus équilibré. Évitez de porter trop longtemps des responsabilités qui vous épuisent. En accordant davantage de place au repos, au plaisir et aux besoins essentiels, vous renforcerez durablement votre équilibre.":
      "Create più spazio per il piacere, il riposo e la semplicità. Quest’anno non vi chiede soltanto di costruire o produrre, ma anche di godere maggiormente di ciò che avete già creato. Il vostro senso pratico e il vostro bisogno di stabilità possono diventare preziosi alleati quando concedete loro un ritmo più equilibrato. Evitate di sostenere troppo a lungo responsabilità che vi esauriscono. Dando più spazio al riposo, al piacere e ai bisogni essenziali, rafforzerete il vostro equilibrio nel tempo.",

    "Faire évoluer une habitude sans bouleverser tout votre équilibre. Les changements les plus importants de votre année pourraient commencer par de petits ajustements répétés avec constance. Vous n’avez pas besoin de transformer toute votre vie pour avancer. Votre patience et votre persévérance vous permettent de construire progressivement quelque chose de durable. Lorsque vous sentez une résistance au changement, demandez-vous si vous protégez réellement votre stabilité ou simplement une habitude devenue familière. Cette distinction pourrait vous ouvrir de nouvelles possibilités.":
      "Fate evolvere un’abitudine senza sconvolgere tutto il vostro equilibrio. I cambiamenti più importanti del vostro anno potrebbero iniziare con piccoli aggiustamenti ripetuti con costanza. Non avete bisogno di trasformare tutta la vostra vita per avanzare. La vostra pazienza e la vostra perseveranza vi permettono di costruire gradualmente qualcosa di duraturo. Quando avvertite una resistenza al cambiamento, chiedetevi se state realmente proteggendo la vostra stabilità o semplicemente un’abitudine diventata familiare. Questa distinzione potrebbe aprirvi nuove possibilità.",

    "Reconnaître la différence entre persévérance et attachement. Votre capacité à tenir bon constitue l’une de vos grandes forces, mais certaines situations peuvent demander une autre forme de courage : celui de laisser évoluer ce qui ne correspond plus à vos besoins. Cette année, observez ce que vous continuez à maintenir uniquement parce que cela vous rassure. Votre sécurité véritable ne dépend pas seulement de ce que vous conservez, mais aussi de votre capacité à vous adapter sans perdre vos valeurs essentielles.":
      "Riconoscete la differenza tra perseveranza e attaccamento. La vostra capacità di resistere rappresenta uno dei vostri grandi punti di forza, ma alcune situazioni possono richiedere un’altra forma di coraggio: lasciare evolvere ciò che non corrisponde più ai vostri bisogni. Quest’anno, osservate ciò che continuate a mantenere soltanto perché vi rassicura. La vostra vera sicurezza non dipende soltanto da ciò che conservate, ma anche dalla vostra capacità di adattarvi senza perdere i vostri valori essenziali.",

    "Investir votre énergie dans ce qui possède une valeur durable. Cette intention peut devenir un véritable fil conducteur pour votre année. Avant d’accorder votre temps, votre argent ou votre attention à quelque chose, demandez-vous si cela contribue réellement à la vie que vous souhaitez construire. Votre patience, votre sens pratique et votre constance peuvent produire des résultats remarquables lorsqu’ils servent une priorité clairement choisie. En réduisant la dispersion, vous donnerez davantage de force à ce qui compte réellement.":
      "Investite la vostra energia in ciò che possiede un valore duraturo. Questa intenzione può diventare un vero filo conduttore per il vostro anno. Prima di dedicare il vostro tempo, il vostro denaro o la vostra attenzione a qualcosa, chiedetevi se contribuisce davvero alla vita che desiderate costruire. La vostra pazienza, il vostro senso pratico e la vostra costanza possono produrre risultati notevoli quando sono al servizio di una priorità chiaramente scelta. Riducendo la dispersione, darete maggiore forza a ciò che conta veramente.",

    "Avancer calmement vers un objectif concret et réalisable. Votre progression n’a pas besoin d’être spectaculaire pour être importante. Cette année, privilégiez les décisions que vous pouvez soutenir dans la durée plutôt que les changements rapides difficiles à maintenir. Votre force réside dans votre capacité à construire étape par étape. En gardant une direction claire tout en acceptant les ajustements nécessaires, vous pourrez transformer votre patience en résultats tangibles et votre stabilité en véritable liberté.":
      "Avanzate con calma verso un obiettivo concreto e realizzabile. I vostri progressi non devono essere spettacolari per essere importanti. Quest’anno privilegiate le decisioni che potete sostenere nel tempo invece dei cambiamenti rapidi difficili da mantenere. La vostra forza risiede nella capacità di costruire passo dopo passo. Mantenendo una direzione chiara e accettando allo stesso tempo gli aggiustamenti necessari, potrete trasformare la vostra pazienza in risultati tangibili e la vostra stabilità in autentica libertà.",

    /* AFFIRMATION */

    "Je mérite de recevoir autant que je suis capable de donner.":
      "Merito di ricevere tanto quanto sono capace di dare.",

    "Je suis en sécurité lorsque je choisis ce qui respecte mes besoins.":
      "Sono al sicuro quando scelgo ciò che rispetta i miei bisogni.",

    "Ma patience est une force qui me permet de bâtir avec solidité.":
      "La mia pazienza è una forza che mi permette di costruire su basi solide.",

    "Je peux changer sans perdre ce qui constitue mon essence.":
      "Posso cambiare senza perdere ciò che costituisce la mia essenza.",

    "J’attire naturellement les situations qui soutiennent ma stabilité.":
      "Attiro naturalmente situazioni che sostengono la mia stabilità.",

    "Je fais confiance au rythme naturel de mon évolution.":
      "Mi fido del ritmo naturale della mia evoluzione.",

    /* MESSAGE */

    "Cette année, la stabilité ne consiste pas à tout maintenir intact, mais à renforcer ce qui vous fait réellement du bien. Les mois à venir pourraient vous aider à distinguer plus clairement ce qui représente une véritable sécurité de ce qui relève simplement de l’habitude. Votre patience et votre constance demeurent de grandes forces, mais elles deviennent encore plus puissantes lorsque vous acceptez d’ajuster ce qui ne correspond plus à vos besoins. Construisez lentement, choisissez consciemment et laissez votre stabilité devenir une base pour évoluer plutôt qu’une raison de rester immobile.":
      "Quest’anno, la stabilità non consiste nel mantenere tutto immutato, ma nel rafforzare ciò che vi fa realmente bene. I prossimi mesi potrebbero aiutarvi a distinguere più chiaramente ciò che rappresenta una vera sicurezza da ciò che deriva semplicemente dall’abitudine. La vostra pazienza e la vostra costanza rimangono grandi punti di forza, ma diventano ancora più potenti quando accettate di modificare ciò che non corrisponde più ai vostri bisogni. Costruite lentamente, scegliete consapevolmente e lasciate che la vostra stabilità diventi una base per evolvere anziché una ragione per rimanere immobili.",

    "Une évolution douce pourrait vous conduire plus loin qu’un changement imposé trop rapidement. Cette année favorise les transformations progressives, celles qui respectent votre rythme tout en vous permettant d’avancer réellement. Vous n’avez pas besoin de renoncer à vos repères pour accueillir quelque chose de nouveau. En vous appuyant sur votre patience, votre sens pratique et votre capacité à reconnaître ce qui possède une valeur durable, vous pourrez faire évoluer votre vie sans perdre ce qui constitue votre véritable sécurité.":
      "Un’evoluzione graduale potrebbe portarvi più lontano di un cambiamento imposto troppo rapidamente. Quest’anno favorisce le trasformazioni progressive, quelle che rispettano il vostro ritmo permettendovi al tempo stesso di avanzare realmente. Non avete bisogno di rinunciare ai vostri punti di riferimento per accogliere qualcosa di nuovo. Affidandovi alla vostra pazienza, al vostro senso pratico e alla vostra capacità di riconoscere ciò che possiede un valore duraturo, potrete far evolvere la vostra vita senza perdere ciò che costituisce la vostra vera sicurezza.",

    "Votre constance devient particulièrement puissante lorsqu’elle sert un désir profondément personnel. Les prochains mois peuvent vous aider à concentrer davantage votre énergie sur ce qui compte réellement pour vous. Certaines obligations ou habitudes pourraient apparaître moins essentielles qu’auparavant. Ne craignez pas de revoir vos priorités. Lorsque votre persévérance est dirigée vers un objectif qui correspond véritablement à vos valeurs, chaque petit progrès contribue à construire quelque chose de beaucoup plus important.":
      "La vostra costanza diventa particolarmente potente quando è al servizio di un desiderio profondamente personale. I prossimi mesi possono aiutarvi a concentrare maggiormente la vostra energia su ciò che conta davvero per voi. Alcuni obblighi o abitudini potrebbero apparire meno essenziali rispetto al passato. Non abbiate paura di rivedere le vostre priorità. Quando la vostra perseveranza è diretta verso un obiettivo che corrisponde veramente ai vostri valori, ogni piccolo progresso contribuisce a costruire qualcosa di molto più importante.",

    "Prenez le temps d’apprécier ce qui fonctionne déjà avant de chercher ce qui manque. Cette année pourrait vous rappeler que l’abondance ne se mesure pas uniquement à ce que vous réussissez encore à obtenir. Une partie importante de votre évolution passera par votre capacité à reconnaître la valeur de ce qui est déjà présent dans votre vie. À partir de cette base, vous pourrez déterminer avec davantage de sérénité ce qui mérite d’être amélioré, développé ou simplement laissé derrière vous.":
      "Prendetevi il tempo di apprezzare ciò che funziona già prima di cercare ciò che manca. Quest’anno potrebbe ricordarvi che l’abbondanza non si misura soltanto attraverso ciò che riuscite ancora a ottenere. Una parte importante della vostra evoluzione passerà dalla capacità di riconoscere il valore di ciò che è già presente nella vostra vita. A partire da questa base, potrete decidere con maggiore serenità ciò che merita di essere migliorato, sviluppato o semplicemente lasciato alle spalle.",

    "Une décision pratique pourrait également vous apporter un soulagement émotionnel inattendu. Votre besoin de sécurité est étroitement lié à votre environnement, à vos ressources et à la manière dont vous organisez votre quotidien. Cette année, simplifier une situation concrète pourrait libérer beaucoup plus d’énergie que vous ne l’imaginez. N’hésitez pas à revoir une habitude, une dépense, une responsabilité ou une organisation devenue trop lourde. Ce que vous simplifiez extérieurement peut également créer davantage d’espace intérieurement.":
      "Una decisione pratica potrebbe anche portarvi un sollievo emotivo inaspettato. Il vostro bisogno di sicurezza è strettamente legato al vostro ambiente, alle vostre risorse e al modo in cui organizzate la vita quotidiana. Quest’anno, semplificare una situazione concreta potrebbe liberare molta più energia di quanto immaginiate. Non esitate a rivedere un’abitudine, una spesa, una responsabilità o un’organizzazione diventata troppo pesante. Ciò che semplificate all’esterno può creare più spazio anche dentro di voi.",

    "Vous êtes invité à bâtir une vie qui ne soit pas seulement solide, mais également agréable à habiter. Luna Astralis vous invite cette année à accorder autant d’importance à votre bien-être qu’à votre besoin de sécurité. Votre capacité à construire dans la durée est précieuse, mais ce que vous construisez doit également vous apporter du plaisir, de la paix et un sentiment d’alignement. En choisissant plus consciemment ce que vous souhaitez préserver, transformer ou développer, vous pourrez créer une stabilité qui soutient véritablement votre évolution.":
      "Siete invitati a costruire una vita che non sia soltanto solida, ma anche piacevole da vivere. Quest’anno Luna Astralis vi invita a dare al vostro benessere la stessa importanza che attribuite al bisogno di sicurezza. La vostra capacità di costruire nel tempo è preziosa, ma ciò che costruite deve anche portarvi piacere, pace e una sensazione di armonia interiore. Scegliendo più consapevolmente ciò che desiderate preservare, trasformare o sviluppare, potrete creare una stabilità che sostenga realmente la vostra evoluzione.",
  },

  pt: {
    /* MANTRA */

    "Je construis ma sécurité sans fermer la porte au changement.":
      "Construo minha segurança sem fechar a porta para a mudança.",

    "Je mérite une vie stable, douce et profondément alignée.":
      "Mereço uma vida estável, tranquila e profundamente alinhada comigo.",

    "Je progresse avec patience vers ce qui possède une vraie valeur.":
      "Avanço com paciência em direção ao que possui verdadeiro valor.",

    "Ma constance transforme mes intentions en réalités durables.":
      "Minha constância transforma minhas intenções em realidades duradouras.",

    "Je peux accueillir la nouveauté sans perdre mes racines.":
      "Posso acolher o novo sem perder minhas raízes.",

    "Je choisis ce qui nourrit mon corps, mon cœur et mon avenir.":
      "Escolho aquilo que nutre meu corpo, meu coração e meu futuro.",

    /* INTENTION */

    "Consolider ce qui vous apporte une sécurité réelle et apaisante. Cette année, cette intention vous aidera à reconnaître ce qui mérite véritablement votre temps, votre énergie et votre engagement. Appuyez-vous sur votre patience, votre constance et votre capacité naturelle à construire dans la durée. Prenez toutefois garde à ne pas confondre stabilité et immobilité. En acceptant d’ajuster certaines habitudes tout en préservant ce qui compte réellement pour vous, vous pourrez créer des bases encore plus solides pour votre avenir.":
      "Fortaleça aquilo que proporciona a você uma segurança verdadeira e tranquilizadora. Este ano, essa intenção ajudará você a reconhecer o que realmente merece seu tempo, sua energia e seu compromisso. Apoie-se em sua paciência, sua constância e sua capacidade natural de construir a longo prazo. No entanto, tenha cuidado para não confundir estabilidade com imobilidade. Ao aceitar ajustar certos hábitos e preservar aquilo que realmente importa para você, poderá criar bases ainda mais sólidas para seu futuro.",

    "Créer davantage d’espace pour le plaisir, le repos et la simplicité. Cette année ne vous demande pas seulement de construire ou de produire, mais également de profiter davantage de ce que vous avez déjà créé. Votre sens du concret et votre besoin de stabilité peuvent devenir de précieux alliés lorsque vous leur accordez un rythme plus équilibré. Évitez de porter trop longtemps des responsabilités qui vous épuisent. En accordant davantage de place au repos, au plaisir et aux besoins essentiels, vous renforcerez durablement votre équilibre.":
      "Crie mais espaço para o prazer, o descanso e a simplicidade. Este ano não pede apenas que você construa ou produza, mas também que aproveite mais aquilo que já criou. Seu senso prático e sua necessidade de estabilidade podem se tornar aliados valiosos quando você lhes oferece um ritmo mais equilibrado. Evite carregar por tempo demais responsabilidades que esgotam você. Ao dar mais espaço ao descanso, ao prazer e às necessidades essenciais, fortalecerá seu equilíbrio de maneira duradoura.",

    "Faire évoluer une habitude sans bouleverser tout votre équilibre. Les changements les plus importants de votre année pourraient commencer par de petits ajustements répétés avec constance. Vous n’avez pas besoin de transformer toute votre vie pour avancer. Votre patience et votre persévérance vous permettent de construire progressivement quelque chose de durable. Lorsque vous sentez une résistance au changement, demandez-vous si vous protégez réellement votre stabilité ou simplement une habitude devenue familière. Cette distinction pourrait vous ouvrir de nouvelles possibilités.":
      "Faça um hábito evoluir sem comprometer todo o seu equilíbrio. As mudanças mais importantes do seu ano poderão começar com pequenos ajustes repetidos com constância. Você não precisa transformar toda a sua vida para avançar. Sua paciência e sua perseverança permitem construir gradualmente algo duradouro. Quando sentir resistência à mudança, pergunte a si mesmo se está realmente protegendo sua estabilidade ou apenas um hábito que se tornou familiar. Essa diferença poderá abrir novas possibilidades para você.",

    "Reconnaître la différence entre persévérance et attachement. Votre capacité à tenir bon constitue l’une de vos grandes forces, mais certaines situations peuvent demander une autre forme de courage : celui de laisser évoluer ce qui ne correspond plus à vos besoins. Cette année, observez ce que vous continuez à maintenir uniquement parce que cela vous rassure. Votre sécurité véritable ne dépend pas seulement de ce que vous conservez, mais aussi de votre capacité à vous adapter sans perdre vos valeurs essentielles.":
      "Reconheça a diferença entre perseverança e apego. Sua capacidade de permanecer firme é uma de suas grandes forças, mas algumas situações podem exigir outra forma de coragem: permitir que evolua aquilo que já não corresponde às suas necessidades. Este ano, observe o que você continua mantendo apenas porque isso transmite segurança. Sua verdadeira segurança não depende somente daquilo que preserva, mas também de sua capacidade de se adaptar sem perder seus valores essenciais.",

    "Investir votre énergie dans ce qui possède une valeur durable. Cette intention peut devenir un véritable fil conducteur pour votre année. Avant d’accorder votre temps, votre argent ou votre attention à quelque chose, demandez-vous si cela contribue réellement à la vie que vous souhaitez construire. Votre patience, votre sens pratique et votre constance peuvent produire des résultats remarquables lorsqu’ils servent une priorité clairement choisie. En réduisant la dispersion, vous donnerez davantage de force à ce qui compte réellement.":
      "Invista sua energia naquilo que possui valor duradouro. Essa intenção pode se tornar um verdadeiro fio condutor para o seu ano. Antes de dedicar seu tempo, seu dinheiro ou sua atenção a algo, pergunte a si mesmo se isso realmente contribui para a vida que deseja construir. Sua paciência, seu senso prático e sua constância podem produzir resultados extraordinários quando estão a serviço de uma prioridade claramente escolhida. Ao reduzir a dispersão, você dará mais força ao que realmente importa.",

    "Avancer calmement vers un objectif concret et réalisable. Votre progression n’a pas besoin d’être spectaculaire pour être importante. Cette année, privilégiez les décisions que vous pouvez soutenir dans la durée plutôt que les changements rapides difficiles à maintenir. Votre force réside dans votre capacité à construire étape par étape. En gardant une direction claire tout en acceptant les ajustements nécessaires, vous pourrez transformer votre patience en résultats tangibles et votre stabilité en véritable liberté.":
      "Avance com calma em direção a um objetivo concreto e realizável. Seu progresso não precisa ser espetacular para ser importante. Este ano, priorize decisões que você possa sustentar a longo prazo em vez de mudanças rápidas difíceis de manter. Sua força está em sua capacidade de construir passo a passo. Mantendo uma direção clara e aceitando ao mesmo tempo os ajustes necessários, poderá transformar sua paciência em resultados concretos e sua estabilidade em verdadeira liberdade.",

    /* AFFIRMATION */

    "Je mérite de recevoir autant que je suis capable de donner.":
      "Mereço receber tanto quanto sou capaz de oferecer.",

    "Je suis en sécurité lorsque je choisis ce qui respecte mes besoins.":
      "Estou seguro quando escolho aquilo que respeita minhas necessidades.",

    "Ma patience est une force qui me permet de bâtir avec solidité.":
      "Minha paciência é uma força que me permite construir com solidez.",

    "Je peux changer sans perdre ce qui constitue mon essence.":
      "Posso mudar sem perder aquilo que constitui minha essência.",

    "J’attire naturellement les situations qui soutiennent ma stabilité.":
      "Atraio naturalmente situações que favorecem minha estabilidade.",

    "Je fais confiance au rythme naturel de mon évolution.":
      "Confio no ritmo natural da minha evolução.",

    /* MESSAGE */

    "Cette année, la stabilité ne consiste pas à tout maintenir intact, mais à renforcer ce qui vous fait réellement du bien. Les mois à venir pourraient vous aider à distinguer plus clairement ce qui représente une véritable sécurité de ce qui relève simplement de l’habitude. Votre patience et votre constance demeurent de grandes forces, mais elles deviennent encore plus puissantes lorsque vous acceptez d’ajuster ce qui ne correspond plus à vos besoins. Construisez lentement, choisissez consciemment et laissez votre stabilité devenir une base pour évoluer plutôt qu’une raison de rester immobile.":
      "Este ano, estabilidade não significa manter tudo intacto, mas fortalecer aquilo que realmente faz bem a você. Os próximos meses poderão ajudar você a distinguir com mais clareza o que representa verdadeira segurança daquilo que é apenas um hábito. Sua paciência e sua constância continuam sendo grandes forças, mas se tornam ainda mais poderosas quando você aceita ajustar o que já não corresponde às suas necessidades. Construa devagar, escolha conscientemente e permita que sua estabilidade se torne uma base para evoluir, em vez de uma razão para permanecer imóvel.",

    "Une évolution douce pourrait vous conduire plus loin qu’un changement imposé trop rapidement. Cette année favorise les transformations progressives, celles qui respectent votre rythme tout en vous permettant d’avancer réellement. Vous n’avez pas besoin de renoncer à vos repères pour accueillir quelque chose de nouveau. En vous appuyant sur votre patience, votre sens pratique et votre capacité à reconnaître ce qui possède une valeur durable, vous pourrez faire évoluer votre vie sans perdre ce qui constitue votre véritable sécurité.":
      "Uma evolução gradual poderá levar você mais longe do que uma mudança imposta rapidamente demais. Este ano favorece transformações progressivas, aquelas que respeitam seu ritmo e, ao mesmo tempo, permitem que você realmente avance. Você não precisa abandonar suas referências para acolher algo novo. Ao se apoiar em sua paciência, em seu senso prático e em sua capacidade de reconhecer aquilo que possui valor duradouro, poderá fazer sua vida evoluir sem perder o que constitui sua verdadeira segurança.",

    "Votre constance devient particulièrement puissante lorsqu’elle sert un désir profondément personnel. Les prochains mois peuvent vous aider à concentrer davantage votre énergie sur ce qui compte réellement pour vous. Certaines obligations ou habitudes pourraient apparaître moins essentielles qu’auparavant. Ne craignez pas de revoir vos priorités. Lorsque votre persévérance est dirigée vers un objectif qui correspond véritablement à vos valeurs, chaque petit progrès contribue à construire quelque chose de beaucoup plus important.":
      "Sua constância se torna especialmente poderosa quando está a serviço de um desejo profundamente pessoal. Os próximos meses podem ajudar você a concentrar mais sua energia naquilo que realmente importa. Algumas obrigações ou hábitos poderão parecer menos essenciais do que antes. Não tenha medo de rever suas prioridades. Quando sua perseverança está direcionada a um objetivo que realmente corresponde aos seus valores, cada pequeno progresso contribui para construir algo muito mais importante.",

    "Prenez le temps d’apprécier ce qui fonctionne déjà avant de chercher ce qui manque. Cette année pourrait vous rappeler que l’abondance ne se mesure pas uniquement à ce que vous réussissez encore à obtenir. Une partie importante de votre évolution passera par votre capacité à reconnaître la valeur de ce qui est déjà présent dans votre vie. À partir de cette base, vous pourrez déterminer avec davantage de sérénité ce qui mérite d’être amélioré, développé ou simplement laissé derrière vous.":
      "Reserve um tempo para valorizar aquilo que já funciona antes de procurar o que está faltando. Este ano poderá lembrar você de que a abundância não é medida apenas pelo que ainda consegue obter. Uma parte importante de sua evolução passará por sua capacidade de reconhecer o valor daquilo que já está presente em sua vida. A partir dessa base, poderá decidir com mais tranquilidade o que merece ser melhorado, desenvolvido ou simplesmente deixado para trás.",

    "Une décision pratique pourrait également vous apporter un soulagement émotionnel inattendu. Votre besoin de sécurité est étroitement lié à votre environnement, à vos ressources et à la manière dont vous organisez votre quotidien. Cette année, simplifier une situation concrète pourrait libérer beaucoup plus d’énergie que vous ne l’imaginez. N’hésitez pas à revoir une habitude, une dépense, une responsabilité ou une organisation devenue trop lourde. Ce que vous simplifiez extérieurement peut également créer davantage d’espace intérieurement.":
      "Uma decisão prática também poderá proporcionar a você um alívio emocional inesperado. Sua necessidade de segurança está intimamente ligada ao seu ambiente, aos seus recursos e à maneira como organiza sua vida cotidiana. Este ano, simplificar uma situação concreta poderá liberar muito mais energia do que você imagina. Não hesite em rever um hábito, uma despesa, uma responsabilidade ou uma organização que se tornou pesada demais. Aquilo que você simplifica externamente também pode criar mais espaço dentro de você.",

    "Vous êtes invité à bâtir une vie qui ne soit pas seulement solide, mais également agréable à habiter. Luna Astralis vous invite cette année à accorder autant d’importance à votre bien-être qu’à votre besoin de sécurité. Votre capacité à construire dans la durée est précieuse, mais ce que vous construisez doit également vous apporter du plaisir, de la paix et un sentiment d’alignement. En choisissant plus consciemment ce que vous souhaitez préserver, transformer ou développer, vous pourrez créer une stabilité qui soutient véritablement votre évolution.":
      "Você é convidado a construir uma vida que não seja apenas sólida, mas também agradável de viver. Este ano, Luna Astralis convida você a dar tanta importância ao seu bem-estar quanto à sua necessidade de segurança. Sua capacidade de construir a longo prazo é valiosa, mas aquilo que você constrói também deve proporcionar prazer, paz e uma sensação de alinhamento. Ao escolher com mais consciência aquilo que deseja preservar, transformar ou desenvolver, poderá criar uma estabilidade que realmente apoie sua evolução.",
  },
};
/* =========================================================
   GÉMEAUX — TRANSLATIONS
========================================================= */

const MANTRA_GEMEAUX_TRANSLATIONS = {
  en: {
    /* MANTRA */

    "Mes idées deviennent puissantes lorsque je leur donne une direction.":
      "My ideas become powerful when I give them a clear direction.",

    "Je communique avec clarté, curiosité et authenticité.":
      "I communicate with clarity, curiosity, and authenticity.",

    "Je peux explorer plusieurs possibilités sans perdre mon centre.":
      "I can explore several possibilities without losing my center.",

    "Ma voix mérite d’être entendue lorsqu’elle exprime ma vérité.":
      "My voice deserves to be heard when it expresses my truth.",

    "Je transforme ma curiosité en compréhension profonde.":
      "I transform my curiosity into deeper understanding.",

    "Je choisis les pensées qui ouvrent mon esprit et apaisent mon cœur.":
      "I choose thoughts that open my mind and bring peace to my heart.",

    /* INTENTION */

    "Clarifier une idée importante avant de la partager ou de l’appliquer. Cette année, cette direction vous aidera à mobiliser votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Prenez toutefois le temps de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En revenant à une priorité claire, une parole sincère et des moments de silence, vous pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Clarify an important idea before sharing or applying it. This year, this direction will help you use your curiosity, mental agility, and talent for creating connections. However, take care not to scatter yourself among too many ideas, conversations, or possibilities. By returning to a clear priority, sincere communication, and moments of silence, you can transform your ideas into useful decisions and your exchanges into genuine opportunities.",

    "Créer des échanges plus sincères et moins dispersés. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens et observez les moments où il devient nécessaire de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Votre progression se consolidera grâce à une priorité claire, une parole sincère et des moments de silence.":
      "Create more sincere and focused exchanges. This intention does not ask you to transform everything immediately, but to make a more conscious choice in your daily life. Rely on your curiosity, mental agility, and talent for creating connections, and notice the moments when it becomes necessary not to scatter yourself among too many ideas, conversations, or possibilities. Your progress will become stronger through a clear priority, sincere communication, and moments of silence.",

    "Faire de la place au silence afin de mieux entendre votre intuition. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, à condition de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Un retour régulier vers une priorité claire, une parole sincère et des moments de silence vous permettra de transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Make room for silence so you can hear your intuition more clearly. Give this intention a concrete place in your decisions, relationships, and the way you use your energy. Your greatest support remains your curiosity, mental agility, and talent for creating connections, provided you do not scatter yourself among too many ideas, conversations, or possibilities. Regularly returning to a clear priority, sincere communication, and moments of silence will help you transform your ideas into useful decisions and your exchanges into genuine opportunities.",

    "Approfondir un sujet plutôt que multiplier les directions. Durant cette année, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Lorsque la tension monte, rappelez-vous de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités et choisissez plutôt une priorité claire, une parole sincère et des moments de silence.":
      "Explore one subject in greater depth rather than multiplying directions. During this year, seek consistency more than perfection between what you feel, what you say, and what you do. You can rely on your curiosity, mental agility, and talent for creating connections. When tension rises, remember not to scatter yourself among too many ideas, conversations, or possibilities, and choose instead a clear priority, sincere communication, and moments of silence.",

    "Utiliser votre parole pour rapprocher plutôt que simplement convaincre. Cette orientation peut devenir un véritable fil conducteur pour l’année. Elle vous invite à utiliser votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens avec davantage de conscience, sans oublier de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Chaque geste relié à une priorité claire, une parole sincère et des moments de silence renforcera votre sentiment d’alignement.":
      "Use your words to bring people closer rather than simply to convince them. This direction can become a genuine guiding principle for your year. It invites you to use your curiosity, mental agility, and talent for creating connections with greater awareness, while remembering not to scatter yourself among too many ideas, conversations, or possibilities. Every action connected to a clear priority, sincere communication, and moments of silence will strengthen your sense of alignment.",

    "Choisir une priorité intellectuelle ou créative et la développer. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens et à mieux traverser le défi suivant : ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En privilégiant une priorité claire, une parole sincère et des moments de silence, vous créerez les conditions nécessaires pour transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Choose an intellectual or creative priority and develop it. Make this intention a reference point rather than another obligation. It is here to help you recognize the power of your curiosity, mental agility, and talent for creating connections while navigating this challenge more effectively: not scattering yourself among too many ideas, conversations, or possibilities. By prioritizing a clear direction, sincere communication, and moments of silence, you will create the conditions needed to transform your ideas into useful decisions and your exchanges into genuine opportunities.",

    /* AFFIRMATION */

    "Je sais exprimer mes idées avec confiance et précision.":
      "I know how to express my ideas with confidence and precision.",

    "Ma curiosité m’aide à découvrir de nouvelles possibilités.":
      "My curiosity helps me discover new possibilities.",

    "Je peux ralentir mes pensées sans perdre ma vivacité.":
      "I can slow my thoughts without losing my mental agility.",

    "Je suis capable de transformer mes connaissances en actions utiles.":
      "I am capable of transforming my knowledge into useful action.",

    "Ma parole crée des liens lorsque je l’utilise avec sincérité.":
      "My words create connections when I use them sincerely.",

    "Je fais confiance à mon intelligence autant qu’à mon ressenti.":
      "I trust my intelligence as much as I trust my feelings.",

    /* MESSAGE */

    "Cette année, une conversation pourrait transformer votre compréhension d’une situation importante. Les mois à venir vous invitent à mieux reconnaître votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à une priorité claire, une parole sincère et des moments de silence. Vous avancerez alors avec plus de clarté et pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "This year, a conversation could transform your understanding of an important situation. The coming months invite you to better recognize your curiosity, mental agility, and talent for creating connections. These qualities become especially fruitful when you accept the need not to scatter yourself among too many ideas, conversations, or possibilities. Do not try to resolve everything at once: return instead to a clear priority, sincere communication, and moments of silence. You will then move forward with greater clarity and transform your ideas into useful decisions and your exchanges into genuine opportunities.",

    "Vos idées ont besoin d’espace, mais également d’une structure pour révéler tout leur potentiel. Cette période de l’année ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Dans les moments de doute, gardez en tête qu’il est important de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Une décision fondée sur une priorité claire, une parole sincère et des moments de silence pourrait modifier durablement votre manière d’aborder la suite.":
      "Your ideas need space, but they also need structure to reveal their full potential. This period does not require a spectacular response, but a more conscious presence in what you are experiencing. Your growth relies on your curiosity, mental agility, and talent for creating connections. In moments of doubt, remember the importance of not scattering yourself among too many ideas, conversations, or possibilities. A decision based on a clear priority, sincere communication, and moments of silence could permanently change the way you approach what comes next.",

    "Une réponse que vous cherchez pourrait apparaître lorsque vous cesserez momentanément de la poursuivre. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, mais votre véritable avancée viendra de votre capacité à ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En choisissant une priorité claire, une parole sincère et des moments de silence, vous donnerez une direction plus juste à votre énergie.":
      "An answer you have been seeking could appear when you temporarily stop pursuing it. A familiar situation may suddenly take on a different meaning. Welcome this new perspective without judging yourself. You already possess curiosity, mental agility, and a talent for creating connections, but your real progress will come from your ability not to scatter yourself among too many ideas, conversations, or possibilities. By choosing a clear priority, sincere communication, and moments of silence, you will give your energy a more balanced direction.",

    "Votre souplesse mentale vous aide à vous adapter, à condition de ne pas oublier ce que vous voulez réellement. Cette année peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, puis veillez à ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Cette approche vous aidera à transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Your mental flexibility helps you adapt, provided you do not forget what you truly want. This year can become an important period of recentering. Not everything you feel requires an immediate reaction; some answers emerge when you give yourself more room to observe. Rely on your curiosity, mental agility, and talent for creating connections, while taking care not to scatter yourself among too many ideas, conversations, or possibilities. This approach will help you transform your ideas into useful decisions and your exchanges into genuine opportunities.",

    "Une information nouvelle pourrait ouvrir une voie que vous n’aviez pas encore envisagée. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Le choix de une priorité claire, une parole sincère et des moments de silence vous permettra d’avancer sans trahir ce que vous ressentez profondément.":
      "New information could open a path you had not yet considered. A door opens when you stop automatically repeating an old way of thinking or acting. Your potential lies in your curiosity, mental agility, and talent for creating connections. To use it fully, you may sometimes need to accept the importance of not scattering yourself among too many ideas, conversations, or possibilities. Choosing a clear priority, sincere communication, and moments of silence will allow you to move forward without betraying what you deeply feel.",

    "Votre voix devient plus influente lorsque vos mots reflètent clairement vos intentions. Luna Astralis vous invite à considérer cette année comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Restez attentif(ve) au risque de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En vous recentrant sur une priorité claire, une parole sincère et des moments de silence, vous pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures et préparer la suite avec davantage de confiance.":
      "Your voice becomes more influential when your words clearly reflect your intentions. Luna Astralis invites you to view this year as a stage of inner maturation. You do not need to become someone else, but to use your curiosity, mental agility, and talent for creating connections more consciously. Remain attentive to the risk of scattering yourself among too many ideas, conversations, or possibilities. By refocusing on a clear priority, sincere communication, and moments of silence, you can transform your ideas into useful decisions, your exchanges into genuine opportunities, and prepare for what comes next with greater confidence.",
  },

  es: {
    /* MANTRA */

    "Mes idées deviennent puissantes lorsque je leur donne une direction.":
      "Mis ideas se vuelven poderosas cuando les doy una dirección clara.",

    "Je communique avec clarté, curiosité et authenticité.":
      "Me comunico con claridad, curiosidad y autenticidad.",

    "Je peux explorer plusieurs possibilités sans perdre mon centre.":
      "Puedo explorar varias posibilidades sin perder mi centro.",

    "Ma voix mérite d’être entendue lorsqu’elle exprime ma vérité.":
      "Mi voz merece ser escuchada cuando expresa mi verdad.",

    "Je transforme ma curiosité en compréhension profonde.":
      "Transformo mi curiosidad en una comprensión profunda.",

    "Je choisis les pensées qui ouvrent mon esprit et apaisent mon cœur.":
      "Elijo los pensamientos que abren mi mente y aportan serenidad a mi corazón.",

    /* INTENTION */

    "Clarifier une idée importante avant de la partager ou de l’appliquer. Cette année, cette direction vous aidera à mobiliser votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Prenez toutefois le temps de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En revenant à une priorité claire, une parole sincère et des moments de silence, vous pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Aclara una idea importante antes de compartirla o aplicarla. Este año, esta dirección te ayudará a movilizar tu curiosidad, tu agilidad mental y tu talento para crear vínculos. Sin embargo, tómate el tiempo necesario para no dispersarte entre demasiadas ideas, conversaciones o posibilidades. Al volver a una prioridad clara, una comunicación sincera y momentos de silencio, podrás transformar tus ideas en decisiones útiles y tus intercambios en verdaderas oportunidades.",

    "Créer des échanges plus sincères et moins dispersés. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens et observez les moments où il devient nécessaire de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Votre progression se consolidera grâce à une priorité claire, une parole sincère et des moments de silence.":
      "Crea intercambios más sinceros y menos dispersos. Esta intención no te pide transformar todo de inmediato, sino tomar una decisión más consciente en tu vida cotidiana. Apóyate en tu curiosidad, tu agilidad mental y tu talento para crear vínculos, y observa los momentos en los que sea necesario no dispersarte entre demasiadas ideas, conversaciones o posibilidades. Tu progreso se consolidará gracias a una prioridad clara, una comunicación sincera y momentos de silencio.",

    "Faire de la place au silence afin de mieux entendre votre intuition. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, à condition de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Un retour régulier vers une priorité claire, une parole sincère et des moments de silence vous permettra de transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Haz espacio para el silencio con el fin de escuchar mejor tu intuición. Da a esta intención un lugar concreto en tus decisiones, tus relaciones y tu manera de utilizar tu energía. Tu mejor apoyo sigue siendo tu curiosidad, tu agilidad mental y tu talento para crear vínculos, siempre que no te disperses entre demasiadas ideas, conversaciones o posibilidades. Volver regularmente a una prioridad clara, una comunicación sincera y momentos de silencio te permitirá transformar tus ideas en decisiones útiles y tus intercambios en verdaderas oportunidades.",

    "Approfondir un sujet plutôt que multiplier les directions. Durant cette année, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Lorsque la tension monte, rappelez-vous de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités et choisissez plutôt une priorité claire, une parole sincère et des moments de silence.":
      "Profundiza en un tema en lugar de multiplicar las direcciones. Durante este año, busca menos la perfección y más la coherencia entre lo que sientes, lo que dices y lo que haces. Podrás contar con tu curiosidad, tu agilidad mental y tu talento para crear vínculos. Cuando aumente la tensión, recuerda no dispersarte entre demasiadas ideas, conversaciones o posibilidades y elige en cambio una prioridad clara, una comunicación sincera y momentos de silencio.",

    "Utiliser votre parole pour rapprocher plutôt que simplement convaincre. Cette orientation peut devenir un véritable fil conducteur pour l’année. Elle vous invite à utiliser votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens avec davantage de conscience, sans oublier de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Chaque geste relié à une priorité claire, une parole sincère et des moments de silence renforcera votre sentiment d’alignement.":
      "Utiliza tus palabras para acercar a las personas en lugar de simplemente convencerlas. Esta orientación puede convertirse en un verdadero hilo conductor para el año. Te invita a utilizar tu curiosidad, tu agilidad mental y tu talento para crear vínculos con mayor conciencia, sin olvidar la importancia de no dispersarte entre demasiadas ideas, conversaciones o posibilidades. Cada acción relacionada con una prioridad clara, una comunicación sincera y momentos de silencio reforzará tu sensación de estar alineado contigo mismo.",

    "Choisir une priorité intellectuelle ou créative et la développer. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens et à mieux traverser le défi suivant : ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En privilégiant une priorité claire, une parole sincère et des moments de silence, vous créerez les conditions nécessaires pour transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Elige una prioridad intelectual o creativa y desarróllala. Convierte esta intención en una referencia y no en una obligación adicional. Está aquí para ayudarte a reconocer el poder de tu curiosidad, tu agilidad mental y tu talento para crear vínculos, y para afrontar mejor el siguiente desafío: no dispersarte entre demasiadas ideas, conversaciones o posibilidades. Al priorizar una dirección clara, una comunicación sincera y momentos de silencio, crearás las condiciones necesarias para transformar tus ideas en decisiones útiles y tus intercambios en verdaderas oportunidades.",

    /* AFFIRMATION */

    "Je sais exprimer mes idées avec confiance et précision.":
      "Sé expresar mis ideas con confianza y precisión.",

    "Ma curiosité m’aide à découvrir de nouvelles possibilités.":
      "Mi curiosidad me ayuda a descubrir nuevas posibilidades.",

    "Je peux ralentir mes pensées sans perdre ma vivacité.":
      "Puedo ralentizar mis pensamientos sin perder mi agilidad mental.",

    "Je suis capable de transformer mes connaissances en actions utiles.":
      "Soy capaz de transformar mis conocimientos en acciones útiles.",

    "Ma parole crée des liens lorsque je l’utilise avec sincérité.":
      "Mis palabras crean vínculos cuando las utilizo con sinceridad.",

    "Je fais confiance à mon intelligence autant qu’à mon ressenti.":
      "Confío tanto en mi inteligencia como en lo que siento.",

    /* MESSAGE */

    "Cette année, une conversation pourrait transformer votre compréhension d’une situation importante. Les mois à venir vous invitent à mieux reconnaître votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à une priorité claire, une parole sincère et des moments de silence. Vous avancerez alors avec plus de clarté et pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Este año, una conversación podría transformar tu comprensión de una situación importante. Los próximos meses te invitan a reconocer mejor tu curiosidad, tu agilidad mental y tu talento para crear vínculos. Estas cualidades se vuelven especialmente valiosas cuando aceptas no dispersarte entre demasiadas ideas, conversaciones o posibilidades. No intentes resolverlo todo de una sola vez: vuelve en cambio a una prioridad clara, una comunicación sincera y momentos de silencio. Avanzarás entonces con mayor claridad y podrás transformar tus ideas en decisiones útiles y tus intercambios en verdaderas oportunidades.",

    "Vos idées ont besoin d’espace, mais également d’une structure pour révéler tout leur potentiel. Cette période de l’année ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Dans les moments de doute, gardez en tête qu’il est important de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Une décision fondée sur une priorité claire, une parole sincère et des moments de silence pourrait modifier durablement votre manière d’aborder la suite.":
      "Tus ideas necesitan espacio, pero también una estructura para revelar todo su potencial. Este período no requiere una respuesta espectacular, sino una presencia más consciente ante aquello que estás viviendo. Tu evolución se apoya en tu curiosidad, tu agilidad mental y tu talento para crear vínculos. En los momentos de duda, recuerda la importancia de no dispersarte entre demasiadas ideas, conversaciones o posibilidades. Una decisión basada en una prioridad clara, una comunicación sincera y momentos de silencio podría modificar de manera duradera tu forma de afrontar lo que viene.",

    "Une réponse que vous cherchez pourrait apparaître lorsque vous cesserez momentanément de la poursuivre. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, mais votre véritable avancée viendra de votre capacité à ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En choisissant une priorité claire, une parole sincère et des moments de silence, vous donnerez une direction plus juste à votre énergie.":
      "Una respuesta que buscas podría aparecer cuando dejes de perseguirla momentáneamente. Es posible que una situación conocida adquiera de repente un significado diferente. Recibe esta nueva perspectiva sin juzgarte. Ya dispones de tu curiosidad, tu agilidad mental y tu talento para crear vínculos, pero tu verdadero progreso vendrá de tu capacidad para no dispersarte entre demasiadas ideas, conversaciones o posibilidades. Al elegir una prioridad clara, una comunicación sincera y momentos de silencio, darás una dirección más equilibrada a tu energía.",

    "Votre souplesse mentale vous aide à vous adapter, à condition de ne pas oublier ce que vous voulez réellement. Cette année peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, puis veillez à ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Cette approche vous aidera à transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Tu flexibilidad mental te ayuda a adaptarte, siempre que no olvides lo que realmente deseas. Este año puede convertirse en un período importante para volver a centrarte. No todo lo que sientes exige una reacción inmediata; algunas respuestas aparecen cuando dejas más espacio para observar. Apóyate en tu curiosidad, tu agilidad mental y tu talento para crear vínculos, procurando no dispersarte entre demasiadas ideas, conversaciones o posibilidades. Este enfoque te ayudará a transformar tus ideas en decisiones útiles y tus intercambios en verdaderas oportunidades.",

    "Une information nouvelle pourrait ouvrir une voie que vous n’aviez pas encore envisagée. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Le choix de une priorité claire, une parole sincère et des moments de silence vous permettra d’avancer sans trahir ce que vous ressentez profondément.":
      "Una nueva información podría abrir un camino que todavía no habías considerado. Una puerta se abre cuando dejas de repetir automáticamente una antigua manera de pensar o actuar. Tu potencial reside en tu curiosidad, tu agilidad mental y tu talento para crear vínculos. Para utilizarlo plenamente, a veces será necesario aceptar la importancia de no dispersarte entre demasiadas ideas, conversaciones o posibilidades. Elegir una prioridad clara, una comunicación sincera y momentos de silencio te permitirá avanzar sin traicionar lo que sientes profundamente.",

    "Votre voix devient plus influente lorsque vos mots reflètent clairement vos intentions. Luna Astralis vous invite à considérer cette année comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Restez attentif(ve) au risque de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En vous recentrant sur une priorité claire, une parole sincère et des moments de silence, vous pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures et préparer la suite avec davantage de confiance.":
      "Tu voz se vuelve más influyente cuando tus palabras reflejan claramente tus intenciones. Luna Astralis te invita a considerar este año como una etapa de maduración interior. No necesitas convertirte en otra persona, sino utilizar de manera más consciente tu curiosidad, tu agilidad mental y tu talento para crear vínculos. Mantente atento al riesgo de dispersarte entre demasiadas ideas, conversaciones o posibilidades. Al volver a centrarte en una prioridad clara, una comunicación sincera y momentos de silencio, podrás transformar tus ideas en decisiones útiles, tus intercambios en verdaderas oportunidades y preparar lo que viene con mayor confianza.",
  },

  de: {
    /* MANTRA */

    "Mes idées deviennent puissantes lorsque je leur donne une direction.":
      "Meine Ideen werden kraftvoll, wenn ich ihnen eine klare Richtung gebe.",

    "Je communique avec clarté, curiosité et authenticité.":
      "Ich kommuniziere mit Klarheit, Neugier und Authentizität.",

    "Je peux explorer plusieurs possibilités sans perdre mon centre.":
      "Ich kann verschiedene Möglichkeiten erkunden, ohne meine innere Mitte zu verlieren.",

    "Ma voix mérite d’être entendue lorsqu’elle exprime ma vérité.":
      "Meine Stimme verdient es, gehört zu werden, wenn sie meine Wahrheit ausdrückt.",

    "Je transforme ma curiosité en compréhension profonde.":
      "Ich verwandle meine Neugier in tiefes Verständnis.",

    "Je choisis les pensées qui ouvrent mon esprit et apaisent mon cœur.":
      "Ich wähle Gedanken, die meinen Geist öffnen und mein Herz beruhigen.",

    /* INTENTION */

    "Clarifier une idée importante avant de la partager ou de l’appliquer. Cette année, cette direction vous aidera à mobiliser votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Prenez toutefois le temps de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En revenant à une priorité claire, une parole sincère et des moments de silence, vous pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Klären Sie eine wichtige Idee, bevor Sie sie teilen oder umsetzen. In diesem Jahr wird Ihnen diese Ausrichtung helfen, Ihre Neugier, geistige Beweglichkeit und Ihr Talent, Verbindungen zu schaffen, gezielt einzusetzen. Achten Sie jedoch darauf, sich nicht zwischen zu vielen Ideen, Gesprächen oder Möglichkeiten zu verzetteln. Wenn Sie immer wieder zu einer klaren Priorität, aufrichtiger Kommunikation und Momenten der Stille zurückkehren, können Sie Ihre Ideen in hilfreiche Entscheidungen und Ihre Gespräche in echte Chancen verwandeln.",

    "Créer des échanges plus sincères et moins dispersés. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens et observez les moments où il devient nécessaire de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Votre progression se consolidera grâce à une priorité claire, une parole sincère et des moments de silence.":
      "Schaffen Sie aufrichtigere und fokussiertere Gespräche. Diese Absicht verlangt nicht von Ihnen, sofort alles zu verändern, sondern im Alltag bewusstere Entscheidungen zu treffen. Stützen Sie sich auf Ihre Neugier, Ihre geistige Beweglichkeit und Ihr Talent, Verbindungen zu schaffen, und achten Sie auf die Momente, in denen es notwendig wird, sich nicht zwischen zu vielen Ideen, Gesprächen oder Möglichkeiten zu verzetteln. Ihre Entwicklung wird sich durch eine klare Priorität, aufrichtige Kommunikation und Momente der Stille festigen.",

    "Faire de la place au silence afin de mieux entendre votre intuition. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, à condition de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Un retour régulier vers une priorité claire, une parole sincère et des moments de silence vous permettra de transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Schaffen Sie Raum für Stille, um Ihre Intuition besser wahrzunehmen. Geben Sie dieser Absicht einen konkreten Platz in Ihren Entscheidungen, Beziehungen und in der Art, wie Sie Ihre Energie einsetzen. Ihre größte Unterstützung bleiben Ihre Neugier, geistige Beweglichkeit und Ihr Talent, Verbindungen zu schaffen, vorausgesetzt, Sie verzetteln sich nicht zwischen zu vielen Ideen, Gesprächen oder Möglichkeiten. Die regelmäßige Rückkehr zu einer klaren Priorität, aufrichtiger Kommunikation und Momenten der Stille wird Ihnen helfen, Ihre Ideen in hilfreiche Entscheidungen und Ihre Gespräche in echte Chancen zu verwandeln.",

    "Approfondir un sujet plutôt que multiplier les directions. Durant cette année, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Lorsque la tension monte, rappelez-vous de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités et choisissez plutôt une priorité claire, une parole sincère et des moments de silence.":
      "Vertiefen Sie ein Thema, anstatt immer neue Richtungen einzuschlagen. Suchen Sie in diesem Jahr weniger nach Perfektion als nach Übereinstimmung zwischen dem, was Sie fühlen, sagen und tun. Sie können sich auf Ihre Neugier, Ihre geistige Beweglichkeit und Ihr Talent, Verbindungen zu schaffen, verlassen. Wenn die Anspannung steigt, denken Sie daran, sich nicht zwischen zu vielen Ideen, Gesprächen oder Möglichkeiten zu verzetteln, und wählen Sie stattdessen eine klare Priorität, aufrichtige Kommunikation und Momente der Stille.",

    "Utiliser votre parole pour rapprocher plutôt que simplement convaincre. Cette orientation peut devenir un véritable fil conducteur pour l’année. Elle vous invite à utiliser votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens avec davantage de conscience, sans oublier de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Chaque geste relié à une priorité claire, une parole sincère et des moments de silence renforcera votre sentiment d’alignement.":
      "Nutzen Sie Ihre Worte, um Menschen einander näherzubringen, statt sie lediglich zu überzeugen. Diese Ausrichtung kann zu einem echten Leitfaden für Ihr Jahr werden. Sie lädt Sie dazu ein, Ihre Neugier, Ihre geistige Beweglichkeit und Ihr Talent, Verbindungen zu schaffen, bewusster einzusetzen, ohne sich zwischen zu vielen Ideen, Gesprächen oder Möglichkeiten zu verlieren. Jeder Schritt, der mit einer klaren Priorität, aufrichtiger Kommunikation und Momenten der Stille verbunden ist, wird Ihr Gefühl innerer Stimmigkeit stärken.",

    "Choisir une priorité intellectuelle ou créative et la développer. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens et à mieux traverser le défi suivant : ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En privilégiant une priorité claire, une parole sincère et des moments de silence, vous créerez les conditions nécessaires pour transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Wählen Sie eine intellektuelle oder kreative Priorität und entwickeln Sie sie weiter. Machen Sie diese Absicht zu einem Orientierungspunkt und nicht zu einer zusätzlichen Verpflichtung. Sie soll Ihnen helfen, die Kraft Ihrer Neugier, Ihrer geistigen Beweglichkeit und Ihres Talents, Verbindungen zu schaffen, zu erkennen und gleichzeitig besser mit der folgenden Herausforderung umzugehen: sich nicht zwischen zu vielen Ideen, Gesprächen oder Möglichkeiten zu verzetteln. Indem Sie einer klaren Priorität, aufrichtiger Kommunikation und Momenten der Stille den Vorrang geben, schaffen Sie die Voraussetzungen, um Ihre Ideen in hilfreiche Entscheidungen und Ihre Gespräche in echte Chancen zu verwandeln.",

    /* AFFIRMATION */

    "Je sais exprimer mes idées avec confiance et précision.":
      "Ich kann meine Ideen selbstbewusst und präzise ausdrücken.",

    "Ma curiosité m’aide à découvrir de nouvelles possibilités.":
      "Meine Neugier hilft mir, neue Möglichkeiten zu entdecken.",

    "Je peux ralentir mes pensées sans perdre ma vivacité.":
      "Ich kann meine Gedanken verlangsamen, ohne meine geistige Beweglichkeit zu verlieren.",

    "Je suis capable de transformer mes connaissances en actions utiles.":
      "Ich kann mein Wissen in hilfreiche Handlungen verwandeln.",

    "Ma parole crée des liens lorsque je l’utilise avec sincérité.":
      "Meine Worte schaffen Verbindungen, wenn ich sie aufrichtig einsetze.",

    "Je fais confiance à mon intelligence autant qu’à mon ressenti.":
      "Ich vertraue meiner Intelligenz ebenso wie meinem Empfinden.",

    /* MESSAGE */

    "Cette année, une conversation pourrait transformer votre compréhension d’une situation importante. Les mois à venir vous invitent à mieux reconnaître votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à une priorité claire, une parole sincère et des moments de silence. Vous avancerez alors avec plus de clarté et pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "In diesem Jahr könnte ein Gespräch Ihr Verständnis einer wichtigen Situation verändern. Die kommenden Monate laden Sie dazu ein, Ihre Neugier, geistige Beweglichkeit und Ihr Talent, Verbindungen zu schaffen, besser wahrzunehmen. Diese Qualitäten werden besonders wertvoll, wenn Sie bereit sind, sich nicht zwischen zu vielen Ideen, Gesprächen oder Möglichkeiten zu verzetteln. Versuchen Sie nicht, alles auf einmal zu lösen: Kehren Sie stattdessen zu einer klaren Priorität, aufrichtiger Kommunikation und Momenten der Stille zurück. So werden Sie mit größerer Klarheit vorankommen und Ihre Ideen in hilfreiche Entscheidungen sowie Ihre Gespräche in echte Chancen verwandeln können.",

    "Vos idées ont besoin d’espace, mais également d’une structure pour révéler tout leur potentiel. Cette période de l’année ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Dans les moments de doute, gardez en tête qu’il est important de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Une décision fondée sur une priorité claire, une parole sincère et des moments de silence pourrait modifier durablement votre manière d’aborder la suite.":
      "Ihre Ideen brauchen Raum, aber auch Struktur, um ihr volles Potenzial zu entfalten. Diese Phase verlangt keine spektakuläre Reaktion, sondern eine bewusstere Präsenz in dem, was Sie gerade erleben. Ihre Entwicklung stützt sich auf Ihre Neugier, Ihre geistige Beweglichkeit und Ihr Talent, Verbindungen zu schaffen. Denken Sie in Momenten des Zweifels daran, wie wichtig es ist, sich nicht zwischen zu vielen Ideen, Gesprächen oder Möglichkeiten zu verzetteln. Eine Entscheidung, die auf einer klaren Priorität, aufrichtiger Kommunikation und Momenten der Stille beruht, könnte Ihre Art, mit dem Kommenden umzugehen, nachhaltig verändern.",

    "Une réponse que vous cherchez pourrait apparaître lorsque vous cesserez momentanément de la poursuivre. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, mais votre véritable avancée viendra de votre capacité à ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En choisissant une priorité claire, une parole sincère et des moments de silence, vous donnerez une direction plus juste à votre énergie.":
      "Eine Antwort, nach der Sie suchen, könnte auftauchen, sobald Sie für einen Moment aufhören, ihr nachzujagen. Eine vertraute Situation könnte plötzlich eine andere Bedeutung bekommen. Nehmen Sie diese neue Sichtweise an, ohne sich selbst zu beurteilen. Sie verfügen bereits über Neugier, geistige Beweglichkeit und ein Talent, Verbindungen zu schaffen, doch Ihr wirklicher Fortschritt wird aus Ihrer Fähigkeit entstehen, sich nicht zwischen zu vielen Ideen, Gesprächen oder Möglichkeiten zu verzetteln. Indem Sie eine klare Priorität, aufrichtige Kommunikation und Momente der Stille wählen, geben Sie Ihrer Energie eine stimmigere Richtung.",

    "Votre souplesse mentale vous aide à vous adapter, à condition de ne pas oublier ce que vous voulez réellement. Cette année peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, puis veillez à ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Cette approche vous aidera à transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Ihre geistige Flexibilität hilft Ihnen, sich anzupassen, solange Sie nicht vergessen, was Sie wirklich wollen. Dieses Jahr kann zu einer wichtigen Phase der Neuausrichtung werden. Nicht alles, was Sie fühlen, verlangt nach einer sofortigen Reaktion; manche Antworten erscheinen, wenn Sie der Beobachtung mehr Raum geben. Stützen Sie sich auf Ihre Neugier, Ihre geistige Beweglichkeit und Ihr Talent, Verbindungen zu schaffen, und achten Sie gleichzeitig darauf, sich nicht zwischen zu vielen Ideen, Gesprächen oder Möglichkeiten zu verzetteln. Diese Haltung wird Ihnen helfen, Ihre Ideen in hilfreiche Entscheidungen und Ihre Gespräche in echte Chancen zu verwandeln.",

    "Une information nouvelle pourrait ouvrir une voie que vous n’aviez pas encore envisagée. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Le choix de une priorité claire, une parole sincère et des moments de silence vous permettra d’avancer sans trahir ce que vous ressentez profondément.":
      "Neue Informationen könnten einen Weg eröffnen, den Sie bisher noch nicht in Betracht gezogen haben. Eine Tür öffnet sich, wenn Sie aufhören, eine alte Denk- oder Handlungsweise automatisch zu wiederholen. Ihr Potenzial liegt in Ihrer Neugier, Ihrer geistigen Beweglichkeit und Ihrem Talent, Verbindungen zu schaffen. Um dieses Potenzial vollständig zu nutzen, müssen Sie manchmal akzeptieren, wie wichtig es ist, sich nicht zwischen zu vielen Ideen, Gesprächen oder Möglichkeiten zu verzetteln. Die Entscheidung für eine klare Priorität, aufrichtige Kommunikation und Momente der Stille wird Ihnen ermöglichen, voranzukommen, ohne das zu verleugnen, was Sie tief in Ihrem Inneren empfinden.",

    "Votre voix devient plus influente lorsque vos mots reflètent clairement vos intentions. Luna Astralis vous invite à considérer cette année comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Restez attentif(ve) au risque de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En vous recentrant sur une priorité claire, une parole sincère et des moments de silence, vous pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures et préparer la suite avec davantage de confiance.":
      "Ihre Stimme wird einflussreicher, wenn Ihre Worte Ihre Absichten klar widerspiegeln. Luna Astralis lädt Sie dazu ein, dieses Jahr als eine Phase innerer Reifung zu betrachten. Sie müssen kein anderer Mensch werden, sondern Ihre Neugier, Ihre geistige Beweglichkeit und Ihr Talent, Verbindungen zu schaffen, bewusster einsetzen. Bleiben Sie aufmerksam gegenüber dem Risiko, sich zwischen zu vielen Ideen, Gesprächen oder Möglichkeiten zu verzetteln. Wenn Sie sich wieder auf eine klare Priorität, aufrichtige Kommunikation und Momente der Stille konzentrieren, können Sie Ihre Ideen in hilfreiche Entscheidungen, Ihre Gespräche in echte Chancen verwandeln und mit größerem Vertrauen auf das Kommende vorbereitet sein.",
  },

  it: {
    /* MANTRA */

    "Mes idées deviennent puissantes lorsque je leur donne une direction.":
      "Le mie idee diventano potenti quando do loro una direzione chiara.",

    "Je communique avec clarté, curiosité et authenticité.":
      "Comunico con chiarezza, curiosità e autenticità.",

    "Je peux explorer plusieurs possibilités sans perdre mon centre.":
      "Posso esplorare diverse possibilità senza perdere il mio centro.",

    "Ma voix mérite d’être entendue lorsqu’elle exprime ma vérité.":
      "La mia voce merita di essere ascoltata quando esprime la mia verità.",

    "Je transforme ma curiosité en compréhension profonde.":
      "Trasformo la mia curiosità in una comprensione profonda.",

    "Je choisis les pensées qui ouvrent mon esprit et apaisent mon cœur.":
      "Scelgo i pensieri che aprono la mia mente e rasserenano il mio cuore.",

    /* INTENTION */

    "Clarifier une idée importante avant de la partager ou de l’appliquer. Cette année, cette direction vous aidera à mobiliser votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Prenez toutefois le temps de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En revenant à une priorité claire, une parole sincère et des moments de silence, vous pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Chiarite un’idea importante prima di condividerla o applicarla. Quest’anno, questa direzione vi aiuterà a utilizzare la vostra curiosità, la vostra vivacità mentale e il vostro talento nel creare legami. Prendetevi tuttavia il tempo necessario per non disperdervi tra troppe idee, conversazioni o possibilità. Tornando a una priorità chiara, a una comunicazione sincera e a momenti di silenzio, potrete trasformare le vostre idee in decisioni utili e i vostri scambi in vere opportunità.",

    "Créer des échanges plus sincères et moins dispersés. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens et observez les moments où il devient nécessaire de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Votre progression se consolidera grâce à une priorité claire, une parole sincère et des moments de silence.":
      "Create scambi più sinceri e meno dispersivi. Questa intenzione non vi chiede di trasformare tutto immediatamente, ma di compiere una scelta più consapevole nella vita quotidiana. Affidatevi alla vostra curiosità, alla vostra vivacità mentale e al vostro talento nel creare legami, osservando i momenti in cui diventa necessario non disperdersi tra troppe idee, conversazioni o possibilità. I vostri progressi si consolideranno grazie a una priorità chiara, a una comunicazione sincera e a momenti di silenzio.",

    "Faire de la place au silence afin de mieux entendre votre intuition. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, à condition de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Un retour régulier vers une priorité claire, une parole sincère et des moments de silence vous permettra de transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Fate spazio al silenzio per ascoltare meglio la vostra intuizione. Date a questa intenzione un posto concreto nelle vostre decisioni, nelle relazioni e nel modo in cui utilizzate la vostra energia. Il vostro sostegno migliore rimane la vostra curiosità, la vostra vivacità mentale e il vostro talento nel creare legami, a condizione di non disperdervi tra troppe idee, conversazioni o possibilità. Tornare regolarmente a una priorità chiara, a una comunicazione sincera e a momenti di silenzio vi permetterà di trasformare le vostre idee in decisioni utili e i vostri scambi in vere opportunità.",

    "Approfondir un sujet plutôt que multiplier les directions. Durant cette année, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Lorsque la tension monte, rappelez-vous de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités et choisissez plutôt une priorité claire, une parole sincère et des moments de silence.":
      "Approfondite un argomento invece di moltiplicare le direzioni. Durante quest’anno, cercate meno la perfezione e più la coerenza tra ciò che sentite, ciò che dite e ciò che fate. Potrete contare sulla vostra curiosità, sulla vostra vivacità mentale e sul vostro talento nel creare legami. Quando la tensione aumenta, ricordate di non disperdervi tra troppe idee, conversazioni o possibilità e scegliete invece una priorità chiara, una comunicazione sincera e momenti di silenzio.",

    "Utiliser votre parole pour rapprocher plutôt que simplement convaincre. Cette orientation peut devenir un véritable fil conducteur pour l’année. Elle vous invite à utiliser votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens avec davantage de conscience, sans oublier de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Chaque geste relié à une priorité claire, une parole sincère et des moments de silence renforcera votre sentiment d’alignement.":
      "Utilizzate le vostre parole per avvicinare le persone invece di limitarvi a convincerle. Questo orientamento può diventare un vero filo conduttore per l’anno. Vi invita a utilizzare la vostra curiosità, la vostra vivacità mentale e il vostro talento nel creare legami con maggiore consapevolezza, senza dimenticare di non disperdervi tra troppe idee, conversazioni o possibilità. Ogni gesto collegato a una priorità chiara, a una comunicazione sincera e a momenti di silenzio rafforzerà il vostro senso di allineamento.",

    "Choisir une priorité intellectuelle ou créative et la développer. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens et à mieux traverser le défi suivant : ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En privilégiant une priorité claire, une parole sincère et des moments de silence, vous créerez les conditions nécessaires pour transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Scegliete una priorità intellettuale o creativa e sviluppatela. Fate di questa intenzione un punto di riferimento piuttosto che un obbligo aggiuntivo. È qui per aiutarvi a riconoscere la forza della vostra curiosità, della vostra vivacità mentale e del vostro talento nel creare legami, affrontando meglio la seguente sfida: non disperdervi tra troppe idee, conversazioni o possibilità. Privilegiando una priorità chiara, una comunicazione sincera e momenti di silenzio, creerete le condizioni necessarie per trasformare le vostre idee in decisioni utili e i vostri scambi in vere opportunità.",

    /* AFFIRMATION */

    "Je sais exprimer mes idées avec confiance et précision.":
      "So esprimere le mie idee con fiducia e precisione.",

    "Ma curiosité m’aide à découvrir de nouvelles possibilités.":
      "La mia curiosità mi aiuta a scoprire nuove possibilità.",

    "Je peux ralentir mes pensées sans perdre ma vivacité.":
      "Posso rallentare i miei pensieri senza perdere la mia vivacità mentale.",

    "Je suis capable de transformer mes connaissances en actions utiles.":
      "Sono capace di trasformare le mie conoscenze in azioni utili.",

    "Ma parole crée des liens lorsque je l’utilise avec sincérité.":
      "Le mie parole creano legami quando le utilizzo con sincerità.",

    "Je fais confiance à mon intelligence autant qu’à mon ressenti.":
      "Mi fido della mia intelligenza tanto quanto delle mie sensazioni.",

    /* MESSAGE */

    "Cette année, une conversation pourrait transformer votre compréhension d’une situation importante. Les mois à venir vous invitent à mieux reconnaître votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à une priorité claire, une parole sincère et des moments de silence. Vous avancerez alors avec plus de clarté et pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Quest’anno, una conversazione potrebbe trasformare la vostra comprensione di una situazione importante. I prossimi mesi vi invitano a riconoscere meglio la vostra curiosità, la vostra vivacità mentale e il vostro talento nel creare legami. Queste qualità diventano particolarmente preziose quando accettate di non disperdervi tra troppe idee, conversazioni o possibilità. Non cercate di risolvere tutto in una sola volta: tornate invece a una priorità chiara, a una comunicazione sincera e a momenti di silenzio. Avanzerete così con maggiore chiarezza e potrete trasformare le vostre idee in decisioni utili e i vostri scambi in vere opportunità.",

    "Vos idées ont besoin d’espace, mais également d’une structure pour révéler tout leur potentiel. Cette période de l’année ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Dans les moments de doute, gardez en tête qu’il est important de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Une décision fondée sur une priorité claire, une parole sincère et des moments de silence pourrait modifier durablement votre manière d’aborder la suite.":
      "Le vostre idee hanno bisogno di spazio, ma anche di una struttura per rivelare tutto il loro potenziale. Questo periodo non richiede una risposta spettacolare, ma una presenza più consapevole rispetto a ciò che state vivendo. La vostra evoluzione si basa sulla vostra curiosità, sulla vostra vivacità mentale e sul vostro talento nel creare legami. Nei momenti di dubbio, ricordate quanto sia importante non disperdersi tra troppe idee, conversazioni o possibilità. Una decisione fondata su una priorità chiara, una comunicazione sincera e momenti di silenzio potrebbe modificare in modo duraturo il vostro modo di affrontare ciò che verrà.",

    "Une réponse que vous cherchez pourrait apparaître lorsque vous cesserez momentanément de la poursuivre. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, mais votre véritable avancée viendra de votre capacité à ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En choisissant une priorité claire, une parole sincère et des moments de silence, vous donnerez une direction plus juste à votre énergie.":
      "Una risposta che state cercando potrebbe apparire quando smetterete momentaneamente di inseguirla. Una situazione familiare potrebbe improvvisamente assumere un significato diverso. Accogliete questa nuova prospettiva senza giudicarvi. Disponete già della vostra curiosità, della vostra vivacità mentale e del vostro talento nel creare legami, ma il vostro vero progresso nascerà dalla capacità di non disperdervi tra troppe idee, conversazioni o possibilità. Scegliendo una priorità chiara, una comunicazione sincera e momenti di silenzio, darete una direzione più equilibrata alla vostra energia.",

    "Votre souplesse mentale vous aide à vous adapter, à condition de ne pas oublier ce que vous voulez réellement. Cette année peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, puis veillez à ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Cette approche vous aidera à transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "La vostra flessibilità mentale vi aiuta ad adattarvi, a condizione di non dimenticare ciò che desiderate davvero. Quest’anno può diventare un importante periodo di ricentramento. Non tutto ciò che sentite richiede una reazione immediata; alcune risposte emergono quando lasciate più spazio all’osservazione. Affidatevi alla vostra curiosità, alla vostra vivacità mentale e al vostro talento nel creare legami, facendo attenzione a non disperdervi tra troppe idee, conversazioni o possibilità. Questo approccio vi aiuterà a trasformare le vostre idee in decisioni utili e i vostri scambi in vere opportunità.",

    "Une information nouvelle pourrait ouvrir une voie que vous n’aviez pas encore envisagée. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Le choix de une priorité claire, une parole sincère et des moments de silence vous permettra d’avancer sans trahir ce que vous ressentez profondément.":
      "Una nuova informazione potrebbe aprire una strada che non avevate ancora considerato. Una porta si apre quando smettete di ripetere automaticamente un vecchio modo di pensare o di agire. Il vostro potenziale risiede nella vostra curiosità, nella vostra vivacità mentale e nel vostro talento nel creare legami. Per utilizzarlo pienamente, a volte sarà necessario accettare l’importanza di non disperdersi tra troppe idee, conversazioni o possibilità. La scelta di una priorità chiara, una comunicazione sincera e momenti di silenzio vi permetterà di avanzare senza tradire ciò che sentite profondamente.",

    "Votre voix devient plus influente lorsque vos mots reflètent clairement vos intentions. Luna Astralis vous invite à considérer cette année comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Restez attentif(ve) au risque de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En vous recentrant sur une priorité claire, une parole sincère et des moments de silence, vous pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures et préparer la suite avec davantage de confiance.":
      "La vostra voce diventa più influente quando le vostre parole riflettono chiaramente le vostre intenzioni. Luna Astralis vi invita a considerare quest’anno come una fase di maturazione interiore. Non dovete diventare un’altra persona, ma utilizzare più consapevolmente la vostra curiosità, la vostra vivacità mentale e il vostro talento nel creare legami. Rimanete attenti al rischio di disperdervi tra troppe idee, conversazioni o possibilità. Ricentrandovi su una priorità chiara, una comunicazione sincera e momenti di silenzio, potrete trasformare le vostre idee in decisioni utili, i vostri scambi in vere opportunità e prepararvi a ciò che verrà con maggiore fiducia.",
  },

  pt: {
    /* MANTRA */

    "Mes idées deviennent puissantes lorsque je leur donne une direction.":
      "Minhas ideias se tornam poderosas quando lhes dou uma direção clara.",

    "Je communique avec clarté, curiosité et authenticité.":
      "Comunico-me com clareza, curiosidade e autenticidade.",

    "Je peux explorer plusieurs possibilités sans perdre mon centre.":
      "Posso explorar várias possibilidades sem perder meu centro.",

    "Ma voix mérite d’être entendue lorsqu’elle exprime ma vérité.":
      "Minha voz merece ser ouvida quando expressa minha verdade.",

    "Je transforme ma curiosité en compréhension profonde.":
      "Transformo minha curiosidade em uma compreensão profunda.",

    "Je choisis les pensées qui ouvrent mon esprit et apaisent mon cœur.":
      "Escolho os pensamentos que abrem minha mente e tranquilizam meu coração.",

    /* INTENTION */

    "Clarifier une idée importante avant de la partager ou de l’appliquer. Cette année, cette direction vous aidera à mobiliser votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Prenez toutefois le temps de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En revenant à une priorité claire, une parole sincère et des moments de silence, vous pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Esclareça uma ideia importante antes de compartilhá-la ou colocá-la em prática. Este ano, essa direção ajudará você a utilizar sua curiosidade, sua agilidade mental e seu talento para criar vínculos. No entanto, reserve um tempo para não se dispersar entre ideias, conversas ou possibilidades demais. Ao retornar a uma prioridade clara, a uma comunicação sincera e a momentos de silêncio, poderá transformar suas ideias em decisões úteis e suas trocas em verdadeiras oportunidades.",

    "Créer des échanges plus sincères et moins dispersés. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens et observez les moments où il devient nécessaire de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Votre progression se consolidera grâce à une priorité claire, une parole sincère et des moments de silence.":
      "Crie conversas mais sinceras e menos dispersas. Esta intenção não pede que você transforme tudo imediatamente, mas que faça uma escolha mais consciente em sua vida cotidiana. Apoie-se em sua curiosidade, em sua agilidade mental e em seu talento para criar vínculos, observando os momentos em que será necessário não se dispersar entre ideias, conversas ou possibilidades demais. Seu progresso se consolidará graças a uma prioridade clara, a uma comunicação sincera e a momentos de silêncio.",

    "Faire de la place au silence afin de mieux entendre votre intuition. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, à condition de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Un retour régulier vers une priorité claire, une parole sincère et des moments de silence vous permettra de transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Abra espaço para o silêncio a fim de ouvir melhor sua intuição. Dê a esta intenção um lugar concreto em suas decisões, em seus relacionamentos e na maneira como utiliza sua energia. Seu maior apoio continua sendo sua curiosidade, sua agilidade mental e seu talento para criar vínculos, desde que você não se disperse entre ideias, conversas ou possibilidades demais. Retornar regularmente a uma prioridade clara, a uma comunicação sincera e a momentos de silêncio permitirá transformar suas ideias em decisões úteis e suas trocas em verdadeiras oportunidades.",

    "Approfondir un sujet plutôt que multiplier les directions. Durant cette année, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Lorsque la tension monte, rappelez-vous de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités et choisissez plutôt une priorité claire, une parole sincère et des moments de silence.":
      "Aprofunde um assunto em vez de multiplicar as direções. Durante este ano, busque menos a perfeição e mais a coerência entre aquilo que sente, aquilo que diz e aquilo que faz. Você poderá contar com sua curiosidade, sua agilidade mental e seu talento para criar vínculos. Quando a tensão aumentar, lembre-se de não se dispersar entre ideias, conversas ou possibilidades demais e escolha, em vez disso, uma prioridade clara, uma comunicação sincera e momentos de silêncio.",

    "Utiliser votre parole pour rapprocher plutôt que simplement convaincre. Cette orientation peut devenir un véritable fil conducteur pour l’année. Elle vous invite à utiliser votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens avec davantage de conscience, sans oublier de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Chaque geste relié à une priorité claire, une parole sincère et des moments de silence renforcera votre sentiment d’alignement.":
      "Use suas palavras para aproximar as pessoas, em vez de apenas convencê-las. Essa orientação pode se tornar um verdadeiro fio condutor para o ano. Ela convida você a utilizar sua curiosidade, sua agilidade mental e seu talento para criar vínculos com mais consciência, sem esquecer de não se dispersar entre ideias, conversas ou possibilidades demais. Cada atitude ligada a uma prioridade clara, a uma comunicação sincera e a momentos de silêncio fortalecerá sua sensação de alinhamento.",

    "Choisir une priorité intellectuelle ou créative et la développer. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens et à mieux traverser le défi suivant : ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En privilégiant une priorité claire, une parole sincère et des moments de silence, vous créerez les conditions nécessaires pour transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Escolha uma prioridade intelectual ou criativa e desenvolva-a. Faça desta intenção um ponto de referência, e não uma obrigação adicional. Ela existe para ajudar você a reconhecer a força de sua curiosidade, de sua agilidade mental e de seu talento para criar vínculos, além de enfrentar melhor o seguinte desafio: não se dispersar entre ideias, conversas ou possibilidades demais. Ao priorizar uma direção clara, uma comunicação sincera e momentos de silêncio, você criará as condições necessárias para transformar suas ideias em decisões úteis e suas trocas em verdadeiras oportunidades.",

    /* AFFIRMATION */

    "Je sais exprimer mes idées avec confiance et précision.":
      "Sei expressar minhas ideias com confiança e precisão.",

    "Ma curiosité m’aide à découvrir de nouvelles possibilités.":
      "Minha curiosidade me ajuda a descobrir novas possibilidades.",

    "Je peux ralentir mes pensées sans perdre ma vivacité.":
      "Posso desacelerar meus pensamentos sem perder minha agilidade mental.",

    "Je suis capable de transformer mes connaissances en actions utiles.":
      "Sou capaz de transformar meus conhecimentos em ações úteis.",

    "Ma parole crée des liens lorsque je l’utilise avec sincérité.":
      "Minhas palavras criam vínculos quando as utilizo com sinceridade.",

    "Je fais confiance à mon intelligence autant qu’à mon ressenti.":
      "Confio tanto em minha inteligência quanto no que sinto.",

    /* MESSAGE */

    "Cette année, une conversation pourrait transformer votre compréhension d’une situation importante. Les mois à venir vous invitent à mieux reconnaître votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à une priorité claire, une parole sincère et des moments de silence. Vous avancerez alors avec plus de clarté et pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Este ano, uma conversa poderá transformar sua compreensão de uma situação importante. Os próximos meses convidam você a reconhecer melhor sua curiosidade, sua agilidade mental e seu talento para criar vínculos. Essas qualidades se tornam especialmente valiosas quando você aceita não se dispersar entre ideias, conversas ou possibilidades demais. Não tente resolver tudo de uma só vez: volte, em vez disso, a uma prioridade clara, a uma comunicação sincera e a momentos de silêncio. Assim, avançará com mais clareza e poderá transformar suas ideias em decisões úteis e suas trocas em verdadeiras oportunidades.",

    "Vos idées ont besoin d’espace, mais également d’une structure pour révéler tout leur potentiel. Cette période de l’année ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Dans les moments de doute, gardez en tête qu’il est important de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Une décision fondée sur une priorité claire, une parole sincère et des moments de silence pourrait modifier durablement votre manière d’aborder la suite.":
      "Suas ideias precisam de espaço, mas também de estrutura para revelar todo o seu potencial. Este período não exige uma resposta espetacular, mas uma presença mais consciente diante daquilo que você está vivendo. Sua evolução se apoia em sua curiosidade, em sua agilidade mental e em seu talento para criar vínculos. Nos momentos de dúvida, lembre-se da importância de não se dispersar entre ideias, conversas ou possibilidades demais. Uma decisão baseada em uma prioridade clara, em uma comunicação sincera e em momentos de silêncio poderá modificar de forma duradoura sua maneira de enfrentar o que vem pela frente.",

    "Une réponse que vous cherchez pourrait apparaître lorsque vous cesserez momentanément de la poursuivre. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, mais votre véritable avancée viendra de votre capacité à ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En choisissant une priorité claire, une parole sincère et des moments de silence, vous donnerez une direction plus juste à votre énergie.":
      "Uma resposta que você procura poderá surgir quando parar momentaneamente de persegui-la. É possível que uma situação conhecida adquira de repente um significado diferente. Acolha essa nova perspectiva sem se julgar. Você já possui curiosidade, agilidade mental e talento para criar vínculos, mas seu verdadeiro progresso virá da capacidade de não se dispersar entre ideias, conversas ou possibilidades demais. Ao escolher uma prioridade clara, uma comunicação sincera e momentos de silêncio, dará uma direção mais equilibrada à sua energia.",

    "Votre souplesse mentale vous aide à vous adapter, à condition de ne pas oublier ce que vous voulez réellement. Cette année peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, puis veillez à ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Cette approche vous aidera à transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.":
      "Sua flexibilidade mental ajuda você a se adaptar, desde que não esqueça aquilo que realmente deseja. Este ano pode se tornar um importante período de recentramento. Nem tudo o que você sente exige uma reação imediata; algumas respostas aparecem quando você deixa mais espaço para observar. Apoie-se em sua curiosidade, em sua agilidade mental e em seu talento para criar vínculos, procurando não se dispersar entre ideias, conversas ou possibilidades demais. Essa abordagem ajudará você a transformar suas ideias em decisões úteis e suas trocas em verdadeiras oportunidades.",

    "Une information nouvelle pourrait ouvrir une voie que vous n’aviez pas encore envisagée. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Le choix de une priorité claire, une parole sincère et des moments de silence vous permettra d’avancer sans trahir ce que vous ressentez profondément.":
      "Uma nova informação poderá abrir um caminho que você ainda não havia considerado. Uma porta se abre quando você deixa de repetir automaticamente uma antiga maneira de pensar ou agir. Seu potencial está em sua curiosidade, em sua agilidade mental e em seu talento para criar vínculos. Para utilizá-lo plenamente, às vezes será necessário aceitar a importância de não se dispersar entre ideias, conversas ou possibilidades demais. Escolher uma prioridade clara, uma comunicação sincera e momentos de silêncio permitirá que você avance sem trair aquilo que sente profundamente.",

    "Votre voix devient plus influente lorsque vos mots reflètent clairement vos intentions. Luna Astralis vous invite à considérer cette année comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Restez attentif(ve) au risque de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En vous recentrant sur une priorité claire, une parole sincère et des moments de silence, vous pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures et préparer la suite avec davantage de confiance.":
      "Sua voz se torna mais influente quando suas palavras refletem claramente suas intenções. Luna Astralis convida você a considerar este ano como uma etapa de amadurecimento interior. Você não precisa se tornar outra pessoa, mas utilizar de maneira mais consciente sua curiosidade, sua agilidade mental e seu talento para criar vínculos. Permaneça atento ao risco de se dispersar entre ideias, conversas ou possibilidades demais. Ao voltar sua atenção para uma prioridade clara, uma comunicação sincera e momentos de silêncio, poderá transformar suas ideias em decisões úteis, suas trocas em verdadeiras oportunidades e preparar o que vem pela frente com mais confiança.",
  },
};
/* =========================================================
   CANCER — TRANSLATIONS
========================================================= */

const MANTRA_CANCER_TRANSLATIONS = {
  en: {
    /* MANTRA */

    "J’honore mes émotions sans leur abandonner tout mon pouvoir.":
      "I honor my emotions without giving them all my power.",

    "Ma sensibilité est une force qui m’aide à reconnaître ce qui est vrai.":
      "My sensitivity is a strength that helps me recognize what is true.",

    "Je crée en moi la sécurité que je recherche autour de moi.":
      "I create within myself the security I seek around me.",

    "Je protège mon énergie sans fermer mon cœur.":
      "I protect my energy without closing my heart.",

    "Je mérite des relations où je peux être pleinement moi-même.":
      "I deserve relationships where I can fully be myself.",

    "Mon intuition me guide vers ce qui nourrit réellement mon âme.":
      "My intuition guides me toward what truly nourishes my soul.",

    /* INTENTION */

    "Accueillir vos émotions sans les juger ni les laisser tout diriger. Cette année, cette direction vous aidera à mobiliser votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Prenez toutefois le temps de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En revenant à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Welcome your emotions without judging them or allowing them to control everything. This year, this direction will help you use your sensitivity, intuition, and ability to care for what truly matters. However, take care not to carry other people's emotions alone or allow the past to control the present. By returning to compassionate boundaries, a safe space, and an honest awareness of your needs, you can rediscover an inner sense of security that does not depend solely on your surroundings.",

    "Renforcer votre sentiment de sécurité intérieure. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte et observez les moments où il devient nécessaire de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Votre progression se consolidera grâce à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins.":
      "Strengthen your sense of inner security. This intention does not ask you to transform everything immediately, but to make more conscious choices in your daily life. Rely on your sensitivity, intuition, and ability to care for what matters, and notice when it becomes necessary not to carry other people's emotions alone or allow the past to control the present. Your progress will become stronger through compassionate boundaries, a safe space, and an honest awareness of your needs.",

    "Prendre soin de vous avec la même attention que vous offrez aux autres. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, à condition de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Un retour régulier vers des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins vous permettra de retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Care for yourself with the same attention you give to others. Give this intention a concrete place in your decisions, relationships, and the way you use your energy. Your greatest support remains your sensitivity, intuition, and ability to care for what matters, provided you do not carry other people's emotions alone or allow the past to control the present. Regularly returning to compassionate boundaries, a safe space, and an honest awareness of your needs will help you rediscover an inner security that does not depend solely on your surroundings.",

    "Exprimer un besoin affectif avec simplicité et honnêteté. Durant cette année, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Lorsque la tension monte, rappelez-vous de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent et choisissez plutôt des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins.":
      "Express an emotional need with simplicity and honesty. During this year, seek consistency rather than perfection between what you feel, what you say, and what you do. You can rely on your sensitivity, intuition, and ability to care for what matters. When tension rises, remember not to carry other people's emotions alone or allow the past to control the present, and choose instead compassionate boundaries, a safe space, and an honest awareness of your needs.",

    "Créer des limites qui protègent votre sensibilité. Cette orientation peut devenir un véritable fil conducteur pour l’année. Elle vous invite à utiliser votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte avec davantage de conscience, sans oublier de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Chaque geste relié à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins renforcera votre sentiment d’alignement.":
      "Create boundaries that protect your sensitivity. This direction can become a genuine guiding principle for your year. It invites you to use your sensitivity, intuition, and ability to care for what matters with greater awareness, while remembering not to carry other people's emotions alone or allow the past to control the present. Every action connected to compassionate boundaries, a safe space, and an honest awareness of your needs will strengthen your sense of alignment.",

    "Vous rapprocher des personnes et des lieux qui vous apaisent. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte et à mieux traverser le défi suivant : ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En privilégiant des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous créerez les conditions nécessaires pour retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Move closer to the people and places that bring you peace. Make this intention a reference point rather than another obligation. It is here to help you recognize the power of your sensitivity, intuition, and ability to care for what matters while navigating this challenge more effectively: not carrying other people's emotions alone or allowing the past to control the present. By prioritizing compassionate boundaries, a safe space, and an honest awareness of your needs, you will create the conditions necessary to rediscover an inner security that does not depend solely on your surroundings.",

    /* AFFIRMATION */

    "Mes émotions sont légitimes, et je les accueille avec douceur, confiance et compassion, car elles m’aident à mieux comprendre mes besoins les plus profonds.":
      "My emotions are valid, and I welcome them with gentleness, confidence, and compassion because they help me better understand my deepest needs.",

    "Je mérite de recevoir un amour stable, respectueux et rassurant, où je peux être pleinement moi-même sans avoir à cacher ma véritable sensibilité.":
      "I deserve to receive stable, respectful, and reassuring love where I can fully be myself without having to hide my true sensitivity.",

    "Je peux poser des limites saines avec calme et bienveillance, tout en préservant mon équilibre émotionnel et le respect que je me porte.":
      "I can establish healthy boundaries with calm and kindness while preserving my emotional balance and self-respect.",

    "Mon intuition me guide avec justesse et me permet de reconnaître naturellement les personnes, les situations et les choix qui sont réellement bénéfiques pour moi.":
      "My intuition guides me wisely and allows me to naturally recognize the people, situations, and choices that are truly beneficial for me.",

    "Je deviens chaque jour mon propre refuge en cultivant la paix intérieure, la confiance en moi et la sécurité dont j’ai profondément besoin.":
      "Each day, I become my own safe haven by cultivating inner peace, self-confidence, and the security I deeply need.",

    "Je libère avec sérénité les souvenirs qui n’ont plus leur place dans ma vie afin d’avancer plus librement vers un avenir rempli de confiance et d’espoir.":
      "I peacefully release memories that no longer belong in my life so I can move more freely toward a future filled with confidence and hope.",

    /* MESSAGE */

    "Cette année, votre sensibilité pourrait vous révéler une vérité que votre esprit hésitait encore à reconnaître. Les mois à venir vous invitent à mieux reconnaître votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins. Vous avancerez alors avec plus de clarté et pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "This year, your sensitivity could reveal a truth that your mind was still hesitant to recognize. The coming months invite you to better acknowledge your sensitivity, intuition, and ability to care for what matters. These qualities become especially valuable when you accept that you do not have to carry other people's emotions alone or allow the past to control the present. Do not try to resolve everything at once: return instead to compassionate boundaries, a safe space, and an honest awareness of your needs. You will then move forward with greater clarity and rediscover an inner security that does not depend solely on your surroundings.",

    "Prendre soin de vous n’est pas un retrait du monde, mais une manière de mieux y revenir. Cette période de l’année ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Dans les moments de doute, gardez en tête qu’il est important de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Une décision fondée sur des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins pourrait modifier durablement votre manière d’aborder la suite.":
      "Taking care of yourself is not a withdrawal from the world, but a way of returning to it more fully. This period does not require a spectacular response, but a more conscious presence in what you are experiencing. Your growth relies on your sensitivity, intuition, and ability to care for what matters. In moments of doubt, remember that you do not have to carry other people's emotions alone or allow the past to control the present. A decision based on compassionate boundaries, a safe space, and an honest awareness of your needs could permanently change the way you approach what comes next.",

    "Une relation peut évoluer lorsque vous exprimez clairement ce que vous retenez depuis trop longtemps. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, mais votre véritable avancée viendra de votre capacité à ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En choisissant des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous donnerez une direction plus juste à votre énergie.":
      "A relationship can evolve when you clearly express what you have been holding back for too long. A familiar situation may suddenly take on a different meaning. Welcome this new perspective without judging yourself. You already possess sensitivity, intuition, and the ability to care for what matters, but your real progress will come from your ability not to carry other people's emotions alone or allow the past to control the present. By choosing compassionate boundaries, a safe space, and an honest awareness of your needs, you will give your energy a more balanced direction.",

    "Votre passé possède des enseignements précieux, mais il n’a pas à décider de votre avenir. Cette année peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, puis veillez à ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Cette approche vous aidera à retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Your past holds valuable lessons, but it does not have to decide your future. This year can become an important period of recentering. Not everything you feel requires an immediate reaction; some answers appear when you leave more room for observation. Rely on your sensitivity, intuition, and ability to care for what matters, while making sure not to carry other people's emotions alone or allow the past to control the present. This approach will help you rediscover an inner security that does not depend solely on your surroundings.",

    "La sécurité que vous recherchez commence par la façon dont vous vous parlez dans les moments fragiles. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Le choix de des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins vous permettra d’avancer sans trahir ce que vous ressentez profondément.":
      "The security you seek begins with the way you speak to yourself during vulnerable moments. A door opens when you stop automatically repeating an old way of thinking or acting. Your potential lies in your sensitivity, intuition, and ability to care for what matters. To use it fully, you may sometimes need to accept that you do not have to carry other people's emotions alone or allow the past to control the present. Choosing compassionate boundaries, a safe space, and an honest awareness of your needs will allow you to move forward without betraying what you deeply feel.",

    "Vous êtes invité à choisir les liens qui accueillent votre profondeur sans l’utiliser contre vous. Luna Astralis vous invite à considérer cette année comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Restez attentif(ve) au risque de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En vous recentrant sur des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement et préparer la suite avec davantage de confiance.":
      "You are invited to choose relationships that welcome your depth without using it against you. Luna Astralis invites you to view this year as a stage of inner maturation. You do not need to become someone else, but to use your sensitivity, intuition, and ability to care for what matters more consciously. Remain attentive to the risk of carrying other people's emotions alone or allowing the past to control the present. By refocusing on compassionate boundaries, a safe space, and an honest awareness of your needs, you can rediscover an inner security that does not depend solely on your surroundings and prepare for what comes next with greater confidence.",
  },

  es: {
    "J’honore mes émotions sans leur abandonner tout mon pouvoir.": "Honro mis emociones sin entregarles todo mi poder.",
    "Ma sensibilité est une force qui m’aide à reconnaître ce qui est vrai.": "Mi sensibilidad es una fortaleza que me ayuda a reconocer lo que es verdadero.",
    "Je crée en moi la sécurité que je recherche autour de moi.": "Creo dentro de mí la seguridad que busco a mi alrededor.",
    "Je protège mon énergie sans fermer mon cœur.": "Protejo mi energía sin cerrar mi corazón.",
    "Je mérite des relations où je peux être pleinement moi-même.": "Merezco relaciones en las que pueda ser plenamente yo mismo.",
    "Mon intuition me guide vers ce qui nourrit réellement mon âme.": "Mi intuición me guía hacia aquello que realmente nutre mi alma.",

    "Mes émotions sont légitimes, et je les accueille avec douceur, confiance et compassion, car elles m’aident à mieux comprendre mes besoins les plus profonds.": "Mis emociones son legítimas y las recibo con dulzura, confianza y compasión, porque me ayudan a comprender mejor mis necesidades más profundas.",
    "Je mérite de recevoir un amour stable, respectueux et rassurant, où je peux être pleinement moi-même sans avoir à cacher ma véritable sensibilité.": "Merezco recibir un amor estable, respetuoso y tranquilizador, en el que pueda ser plenamente yo mismo sin tener que ocultar mi verdadera sensibilidad.",
    "Je peux poser des limites saines avec calme et bienveillance, tout en préservant mon équilibre émotionnel et le respect que je me porte.": "Puedo establecer límites saludables con calma y benevolencia, preservando al mismo tiempo mi equilibrio emocional y el respeto que siento por mí mismo.",
    "Mon intuition me guide avec justesse et me permet de reconnaître naturellement les personnes, les situations et les choix qui sont réellement bénéfiques pour moi.": "Mi intuición me guía con sabiduría y me permite reconocer naturalmente a las personas, las situaciones y las decisiones que realmente son beneficiosas para mí.",
    "Je deviens chaque jour mon propre refuge en cultivant la paix intérieure, la confiance en moi et la sécurité dont j’ai profondément besoin.": "Cada día me convierto en mi propio refugio cultivando la paz interior, la confianza en mí mismo y la seguridad que necesito profundamente.",
    "Je libère avec sérénité les souvenirs qui n’ont plus leur place dans ma vie afin d’avancer plus librement vers un avenir rempli de confiance et d’espoir.": "Libero con serenidad los recuerdos que ya no tienen lugar en mi vida para avanzar con mayor libertad hacia un futuro lleno de confianza y esperanza.",
  },

  de: {
    "J’honore mes émotions sans leur abandonner tout mon pouvoir.": "Ich achte meine Gefühle, ohne ihnen meine ganze Macht zu überlassen.",
    "Ma sensibilité est une force qui m’aide à reconnaître ce qui est vrai.": "Meine Sensibilität ist eine Stärke, die mir hilft zu erkennen, was wahr ist.",
    "Je crée en moi la sécurité que je recherche autour de moi.": "Ich erschaffe in mir selbst die Sicherheit, die ich in meiner Umgebung suche.",
    "Je protège mon énergie sans fermer mon cœur.": "Ich schütze meine Energie, ohne mein Herz zu verschließen.",
    "Je mérite des relations où je peux être pleinement moi-même.": "Ich verdiene Beziehungen, in denen ich ganz ich selbst sein kann.",
    "Mon intuition me guide vers ce qui nourrit réellement mon âme.": "Meine Intuition führt mich zu dem, was meine Seele wirklich nährt.",

    "Mes émotions sont légitimes, et je les accueille avec douceur, confiance et compassion, car elles m’aident à mieux comprendre mes besoins les plus profonds.": "Meine Gefühle sind berechtigt, und ich nehme sie mit Sanftheit, Vertrauen und Mitgefühl an, denn sie helfen mir, meine tiefsten Bedürfnisse besser zu verstehen.",
    "Je mérite de recevoir un amour stable, respectueux et rassurant, où je peux être pleinement moi-même sans avoir à cacher ma véritable sensibilité.": "Ich verdiene eine beständige, respektvolle und Geborgenheit schenkende Liebe, in der ich ganz ich selbst sein kann, ohne meine wahre Sensibilität verbergen zu müssen.",
    "Je peux poser des limites saines avec calme et bienveillance, tout en préservant mon équilibre émotionnel et le respect que je me porte.": "Ich kann ruhig und liebevoll gesunde Grenzen setzen und dabei mein emotionales Gleichgewicht sowie meine Selbstachtung bewahren.",
    "Mon intuition me guide avec justesse et me permet de reconnaître naturellement les personnes, les situations et les choix qui sont réellement bénéfiques pour moi.": "Meine Intuition führt mich sicher und hilft mir, Menschen, Situationen und Entscheidungen zu erkennen, die wirklich gut für mich sind.",
    "Je deviens chaque jour mon propre refuge en cultivant la paix intérieure, la confiance en moi et la sécurité dont j’ai profondément besoin.": "Jeden Tag werde ich mehr zu meinem eigenen sicheren Ort, indem ich inneren Frieden, Selbstvertrauen und die Geborgenheit entwickle, die ich tief in mir brauche.",
    "Je libère avec sérénité les souvenirs qui n’ont plus leur place dans ma vie afin d’avancer plus librement vers un avenir rempli de confiance et d’espoir.": "Ich lasse in Ruhe Erinnerungen los, die keinen Platz mehr in meinem Leben haben, damit ich freier einer Zukunft voller Vertrauen und Hoffnung entgegengehen kann.",
  },

  it: {
    "J’honore mes émotions sans leur abandonner tout mon pouvoir.": "Onoro le mie emozioni senza cedere loro tutto il mio potere.",
    "Ma sensibilité est une force qui m’aide à reconnaître ce qui est vrai.": "La mia sensibilità è una forza che mi aiuta a riconoscere ciò che è vero.",
    "Je crée en moi la sécurité que je recherche autour de moi.": "Creo dentro di me la sicurezza che cerco intorno a me.",
    "Je protège mon énergie sans fermer mon cœur.": "Proteggo la mia energia senza chiudere il mio cuore.",
    "Je mérite des relations où je peux être pleinement moi-même.": "Merito relazioni in cui posso essere pienamente me stesso.",
    "Mon intuition me guide vers ce qui nourrit réellement mon âme.": "La mia intuizione mi guida verso ciò che nutre veramente la mia anima.",

    "Mes émotions sont légitimes, et je les accueille avec douceur, confiance et compassion, car elles m’aident à mieux comprendre mes besoins les plus profonds.": "Le mie emozioni sono legittime e le accolgo con dolcezza, fiducia e compassione, perché mi aiutano a comprendere meglio i miei bisogni più profondi.",
    "Je mérite de recevoir un amour stable, respectueux et rassurant, où je peux être pleinement moi-même sans avoir à cacher ma véritable sensibilité.": "Merito di ricevere un amore stabile, rispettoso e rassicurante, nel quale posso essere pienamente me stesso senza dover nascondere la mia vera sensibilità.",
    "Je peux poser des limites saines avec calme et bienveillance, tout en préservant mon équilibre émotionnel et le respect que je me porte.": "Posso stabilire limiti sani con calma e gentilezza, preservando allo stesso tempo il mio equilibrio emotivo e il rispetto che nutro per me stesso.",
    "Mon intuition me guide avec justesse et me permet de reconnaître naturellement les personnes, les situations et les choix qui sont réellement bénéfiques pour moi.": "La mia intuizione mi guida con saggezza e mi permette di riconoscere naturalmente le persone, le situazioni e le scelte che sono realmente positive per me.",
    "Je deviens chaque jour mon propre refuge en cultivant la paix intérieure, la confiance en moi et la sécurité dont j’ai profondément besoin.": "Ogni giorno divento il mio rifugio coltivando la pace interiore, la fiducia in me stesso e la sicurezza di cui ho profondamente bisogno.",
    "Je libère avec sérénité les souvenirs qui n’ont plus leur place dans ma vie afin d’avancer plus librement vers un avenir rempli de confiance et d’espoir.": "Lascio andare con serenità i ricordi che non hanno più posto nella mia vita, per avanzare più liberamente verso un futuro pieno di fiducia e speranza.",
  },

  pt: {
    "J’honore mes émotions sans leur abandonner tout mon pouvoir.": "Honro minhas emoções sem entregar a elas todo o meu poder.",
    "Ma sensibilité est une force qui m’aide à reconnaître ce qui est vrai.": "Minha sensibilidade é uma força que me ajuda a reconhecer o que é verdadeiro.",
    "Je crée en moi la sécurité que je recherche autour de moi.": "Crio dentro de mim a segurança que procuro ao meu redor.",
    "Je protège mon énergie sans fermer mon cœur.": "Protejo minha energia sem fechar meu coração.",
    "Je mérite des relations où je peux être pleinement moi-même.": "Mereço relacionamentos nos quais posso ser plenamente quem sou.",
    "Mon intuition me guide vers ce qui nourrit réellement mon âme.": "Minha intuição me guia em direção ao que realmente nutre minha alma.",

    "Mes émotions sont légitimes, et je les accueille avec douceur, confiance et compassion, car elles m’aident à mieux comprendre mes besoins les plus profonds.": "Minhas emoções são legítimas, e eu as acolho com gentileza, confiança e compaixão, pois elas me ajudam a compreender melhor minhas necessidades mais profundas.",
    "Je mérite de recevoir un amour stable, respectueux et rassurant, où je peux être pleinement moi-même sans avoir à cacher ma véritable sensibilité.": "Mereço receber um amor estável, respeitoso e acolhedor, no qual posso ser plenamente quem sou sem precisar esconder minha verdadeira sensibilidade.",
    "Je peux poser des limites saines avec calme et bienveillance, tout en préservant mon équilibre émotionnel et le respect que je me porte.": "Posso estabelecer limites saudáveis com calma e gentileza, preservando ao mesmo tempo meu equilíbrio emocional e o respeito que tenho por mim.",
    "Mon intuition me guide avec justesse et me permet de reconnaître naturellement les personnes, les situations et les choix qui sont réellement bénéfiques pour moi.": "Minha intuição me guia com sabedoria e me permite reconhecer naturalmente as pessoas, as situações e as escolhas que são realmente benéficas para mim.",
    "Je deviens chaque jour mon propre refuge en cultivant la paix intérieure, la confiance en moi et la sécurité dont j’ai profondément besoin.": "A cada dia, torno-me meu próprio refúgio ao cultivar a paz interior, a confiança em mim e a segurança de que profundamente preciso.",
    "Je libère avec sérénité les souvenirs qui n’ont plus leur place dans ma vie afin d’avancer plus librement vers un avenir rempli de confiance et d’espoir.": "Liberto com serenidade as lembranças que já não têm lugar em minha vida para avançar com mais liberdade em direção a um futuro cheio de confiança e esperança.",
  },
};
/* =========================================================
   CANCER — ESPAÑOL — INTENTION + MESSAGE
========================================================= */

    "Accueillir vos émotions sans les juger ni les laisser tout diriger. Cette année, cette direction vous aidera à mobiliser votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Prenez toutefois le temps de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En revenant à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Acoge tus emociones sin juzgarlas ni permitir que lo dirijan todo. Este año, esta orientación te ayudará a utilizar tu sensibilidad, tu intuición y tu capacidad para cuidar aquello que realmente importa. Sin embargo, procura no cargar tú solo con las emociones de los demás ni permitir que el pasado dirija el presente. Al volver a unos límites saludables, un espacio seguro y una escucha honesta de tus necesidades, podrás recuperar una seguridad interior que no dependa únicamente de tu entorno.",

    "Renforcer votre sentiment de sécurité intérieure. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte et observez les moments où il devient nécessaire de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Votre progression se consolidera grâce à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins.":
      "Refuerza tu sensación de seguridad interior. Esta intención no te pide transformar todo inmediatamente, sino tomar una decisión más consciente en tu vida cotidiana. Apóyate en tu sensibilidad, tu intuición y tu capacidad para cuidar aquello que importa, y observa los momentos en los que resulte necesario no cargar tú solo con las emociones de los demás ni permitir que el pasado dirija el presente. Tu progreso se consolidará gracias a unos límites saludables, un espacio seguro y una escucha honesta de tus necesidades.",

    "Prendre soin de vous avec la même attention que vous offrez aux autres. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, à condition de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Un retour régulier vers des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins vous permettra de retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Cuida de ti con la misma atención que ofreces a los demás. Da a esta intención un lugar concreto en tus decisiones, tus relaciones y tu manera de utilizar tu energía. Tu mayor apoyo sigue siendo tu sensibilidad, tu intuición y tu capacidad para cuidar aquello que importa, siempre que no cargues tú solo con las emociones de los demás ni permitas que el pasado dirija el presente. Volver regularmente a unos límites saludables, un espacio seguro y una escucha honesta de tus necesidades te permitirá recuperar una seguridad interior que no dependa únicamente de tu entorno.",

    "Exprimer un besoin affectif avec simplicité et honnêteté. Durant cette année, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Lorsque la tension monte, rappelez-vous de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent et choisissez plutôt des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins.":
      "Expresa una necesidad afectiva con sencillez y honestidad. Durante este año, busca menos la perfección y más la coherencia entre lo que sientes, lo que dices y lo que haces. Podrás contar con tu sensibilidad, tu intuición y tu capacidad para cuidar aquello que importa. Cuando aumente la tensión, recuerda no cargar tú solo con las emociones de los demás ni permitir que el pasado dirija el presente, y elige en cambio unos límites saludables, un espacio seguro y una escucha honesta de tus necesidades.",

    "Créer des limites qui protègent votre sensibilité. Cette orientation peut devenir un véritable fil conducteur pour l’année. Elle vous invite à utiliser votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte avec davantage de conscience, sans oublier de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Chaque geste relié à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins renforcera votre sentiment d’alignement.":
      "Crea límites que protejan tu sensibilidad. Esta orientación puede convertirse en un verdadero hilo conductor para el año. Te invita a utilizar tu sensibilidad, tu intuición y tu capacidad para cuidar aquello que importa con mayor conciencia, sin olvidar que no debes cargar tú solo con las emociones de los demás ni permitir que el pasado dirija el presente. Cada acción relacionada con unos límites saludables, un espacio seguro y una escucha honesta de tus necesidades reforzará tu sensación de equilibrio interior.",

    "Vous rapprocher des personnes et des lieux qui vous apaisent. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte et à mieux traverser le défi suivant : ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En privilégiant des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous créerez les conditions nécessaires pour retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Acércate a las personas y los lugares que te transmiten tranquilidad. Convierte esta intención en una referencia y no en una obligación adicional. Está aquí para ayudarte a reconocer la fuerza de tu sensibilidad, tu intuición y tu capacidad para cuidar aquello que importa, y para afrontar mejor el siguiente desafío: no cargar tú solo con las emociones de los demás ni permitir que el pasado dirija el presente. Al priorizar unos límites saludables, un espacio seguro y una escucha honesta de tus necesidades, crearás las condiciones necesarias para recuperar una seguridad interior que no dependa únicamente de tu entorno.",

    "Cette année, votre sensibilité pourrait vous révéler une vérité que votre esprit hésitait encore à reconnaître. Les mois à venir vous invitent à mieux reconnaître votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins. Vous avancerez alors avec plus de clarté et pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Este año, tu sensibilidad podría revelarte una verdad que tu mente todavía dudaba en reconocer. Los próximos meses te invitan a comprender mejor tu sensibilidad, tu intuición y tu capacidad para cuidar aquello que importa. Estas cualidades se vuelven especialmente valiosas cuando aceptas no cargar tú solo con las emociones de los demás ni permitir que el pasado dirija el presente. No intentes resolverlo todo de una sola vez: vuelve más bien a unos límites saludables, un espacio seguro y una escucha honesta de tus necesidades. Avanzarás entonces con mayor claridad y podrás recuperar una seguridad interior que no dependa únicamente de tu entorno.",

    "Prendre soin de vous n’est pas un retrait du monde, mais une manière de mieux y revenir. Cette période de l’année ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Dans les moments de doute, gardez en tête qu’il est important de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Une décision fondée sur des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins pourrait modifier durablement votre manière d’aborder la suite.":
      "Cuidar de ti no significa retirarte del mundo, sino encontrar una mejor manera de volver a él. Este período no exige una respuesta espectacular, sino una presencia más consciente ante lo que estás viviendo. Tu evolución se apoya en tu sensibilidad, tu intuición y tu capacidad para cuidar aquello que importa. En los momentos de duda, recuerda que es importante no cargar tú solo con las emociones de los demás ni permitir que el pasado dirija el presente. Una decisión basada en unos límites saludables, un espacio seguro y una escucha honesta de tus necesidades podría modificar de manera duradera tu forma de afrontar lo que viene.",

    "Une relation peut évoluer lorsque vous exprimez clairement ce que vous retenez depuis trop longtemps. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, mais votre véritable avancée viendra de votre capacité à ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En choisissant des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous donnerez une direction plus juste à votre énergie.":
      "Una relación puede evolucionar cuando expresas con claridad aquello que llevas demasiado tiempo reteniendo. Es posible que una situación conocida adquiera de repente un significado diferente. Recibe esta nueva perspectiva sin juzgarte. Ya dispones de tu sensibilidad, tu intuición y tu capacidad para cuidar aquello que importa, pero tu verdadero progreso vendrá de tu capacidad para no cargar tú solo con las emociones de los demás ni permitir que el pasado dirija el presente. Al elegir unos límites saludables, un espacio seguro y una escucha honesta de tus necesidades, darás una dirección más equilibrada a tu energía.",

    "Votre passé possède des enseignements précieux, mais il n’a pas à décider de votre avenir. Cette année peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, puis veillez à ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Cette approche vous aidera à retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Tu pasado contiene enseñanzas valiosas, pero no tiene que decidir tu futuro. Este año puede convertirse en un período importante para volver a centrarte. No todo lo que sientes exige una reacción inmediata; algunas respuestas aparecen cuando dejas más espacio para observar. Apóyate en tu sensibilidad, tu intuición y tu capacidad para cuidar aquello que importa, procurando no cargar tú solo con las emociones de los demás ni permitir que el pasado dirija el presente. Este enfoque te ayudará a recuperar una seguridad interior que no dependa únicamente de tu entorno.",

    "La sécurité que vous recherchez commence par la façon dont vous vous parlez dans les moments fragiles. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Le choix de des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins vous permettra d’avancer sans trahir ce que vous ressentez profondément.":
      "La seguridad que buscas comienza por la forma en que te hablas durante los momentos de fragilidad. Una puerta se abre cuando dejas de repetir automáticamente una antigua manera de pensar o actuar. Tu potencial reside en tu sensibilidad, tu intuición y tu capacidad para cuidar aquello que importa. Para utilizarlo plenamente, a veces tendrás que aceptar que no debes cargar tú solo con las emociones de los demás ni permitir que el pasado dirija el presente. Elegir unos límites saludables, un espacio seguro y una escucha honesta de tus necesidades te permitirá avanzar sin traicionar aquello que sientes profundamente.",

    "Vous êtes invité à choisir les liens qui accueillent votre profondeur sans l’utiliser contre vous. Luna Astralis vous invite à considérer cette année comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Restez attentif(ve) au risque de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En vous recentrant sur des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement et préparer la suite avec davantage de confiance.":
      "Estás invitado a elegir vínculos que acojan tu profundidad sin utilizarla en tu contra. Luna Astralis te invita a considerar este año como una etapa de maduración interior. No necesitas convertirte en otra persona, sino utilizar de manera más consciente tu sensibilidad, tu intuición y tu capacidad para cuidar aquello que importa. Mantente atento al riesgo de cargar tú solo con las emociones de los demás o permitir que el pasado dirija el presente. Al volver a centrarte en unos límites saludables, un espacio seguro y una escucha honesta de tus necesidades, podrás recuperar una seguridad interior que no dependa únicamente de tu entorno y preparar lo que viene con mayor confianza.",

/* =========================================================
   CANCER — DEUTSCH — INTENTION + MESSAGE
========================================================= */

    "Accueillir vos émotions sans les juger ni les laisser tout diriger. Cette année, cette direction vous aidera à mobiliser votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Prenez toutefois le temps de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En revenant à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Nehmen Sie Ihre Gefühle an, ohne sie zu beurteilen oder ihnen die vollständige Kontrolle zu überlassen. In diesem Jahr wird Ihnen diese Ausrichtung helfen, Ihre Sensibilität, Ihre Intuition und Ihre Fähigkeit, sich um das Wesentliche zu kümmern, bewusster einzusetzen. Achten Sie jedoch darauf, die Gefühle anderer nicht allein zu tragen und die Vergangenheit nicht über die Gegenwart bestimmen zu lassen. Indem Sie zu liebevollen Grenzen, einem sicheren Raum und einem ehrlichen Wahrnehmen Ihrer Bedürfnisse zurückkehren, können Sie eine innere Sicherheit wiederfinden, die nicht ausschließlich von Ihrer Umgebung abhängt.",

    "Renforcer votre sentiment de sécurité intérieure. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte et observez les moments où il devient nécessaire de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Votre progression se consolidera grâce à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins.":
      "Stärken Sie Ihr Gefühl innerer Sicherheit. Diese Absicht verlangt nicht von Ihnen, sofort alles zu verändern, sondern im Alltag bewusstere Entscheidungen zu treffen. Stützen Sie sich auf Ihre Sensibilität, Ihre Intuition und Ihre Fähigkeit, sich um das Wesentliche zu kümmern, und achten Sie auf die Momente, in denen es notwendig wird, die Gefühle anderer nicht allein zu tragen und die Vergangenheit nicht über die Gegenwart bestimmen zu lassen. Ihre Entwicklung wird sich durch liebevolle Grenzen, einen sicheren Raum und ein ehrliches Wahrnehmen Ihrer Bedürfnisse festigen.",

    "Prendre soin de vous avec la même attention que vous offrez aux autres. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, à condition de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Un retour régulier vers des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins vous permettra de retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Kümmern Sie sich mit derselben Aufmerksamkeit um sich selbst, die Sie anderen schenken. Geben Sie dieser Absicht einen konkreten Platz in Ihren Entscheidungen, Ihren Beziehungen und in der Art, wie Sie Ihre Energie einsetzen. Ihre größte Unterstützung bleiben Ihre Sensibilität, Ihre Intuition und Ihre Fähigkeit, sich um das Wesentliche zu kümmern, vorausgesetzt, Sie tragen die Gefühle anderer nicht allein und lassen die Vergangenheit nicht über die Gegenwart bestimmen. Die regelmäßige Rückkehr zu liebevollen Grenzen, einem sicheren Raum und einem ehrlichen Wahrnehmen Ihrer Bedürfnisse wird Ihnen helfen, eine innere Sicherheit wiederzufinden, die nicht ausschließlich von Ihrer Umgebung abhängt.",

    "Exprimer un besoin affectif avec simplicité et honnêteté. Durant cette année, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Lorsque la tension monte, rappelez-vous de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent et choisissez plutôt des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins.":
      "Drücken Sie ein emotionales Bedürfnis einfach und ehrlich aus. Suchen Sie in diesem Jahr weniger nach Perfektion als nach Übereinstimmung zwischen dem, was Sie fühlen, sagen und tun. Sie können sich auf Ihre Sensibilität, Ihre Intuition und Ihre Fähigkeit, sich um das Wesentliche zu kümmern, verlassen. Wenn die Anspannung steigt, denken Sie daran, die Gefühle anderer nicht allein zu tragen und die Vergangenheit nicht über die Gegenwart bestimmen zu lassen. Wählen Sie stattdessen liebevolle Grenzen, einen sicheren Raum und ein ehrliches Wahrnehmen Ihrer Bedürfnisse.",

    "Créer des limites qui protègent votre sensibilité. Cette orientation peut devenir un véritable fil conducteur pour l’année. Elle vous invite à utiliser votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte avec davantage de conscience, sans oublier de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Chaque geste relié à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins renforcera votre sentiment d’alignement.":
      "Schaffen Sie Grenzen, die Ihre Sensibilität schützen. Diese Ausrichtung kann zu einem echten Leitfaden für Ihr Jahr werden. Sie lädt Sie dazu ein, Ihre Sensibilität, Ihre Intuition und Ihre Fähigkeit, sich um das Wesentliche zu kümmern, bewusster einzusetzen, ohne zu vergessen, die Gefühle anderer nicht allein zu tragen und die Vergangenheit nicht über die Gegenwart bestimmen zu lassen. Jeder Schritt, der mit liebevollen Grenzen, einem sicheren Raum und einem ehrlichen Wahrnehmen Ihrer Bedürfnisse verbunden ist, wird Ihr Gefühl innerer Stimmigkeit stärken.",

    "Vous rapprocher des personnes et des lieux qui vous apaisent. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte et à mieux traverser le défi suivant : ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En privilégiant des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous créerez les conditions nécessaires pour retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Nähern Sie sich den Menschen und Orten, die Ihnen Ruhe schenken. Machen Sie diese Absicht zu einem Orientierungspunkt und nicht zu einer zusätzlichen Verpflichtung. Sie soll Ihnen helfen, die Kraft Ihrer Sensibilität, Ihrer Intuition und Ihrer Fähigkeit, sich um das Wesentliche zu kümmern, zu erkennen und gleichzeitig besser mit der Herausforderung umzugehen, die Gefühle anderer nicht allein zu tragen und die Vergangenheit nicht über die Gegenwart bestimmen zu lassen. Indem Sie liebevollen Grenzen, einem sicheren Raum und einem ehrlichen Wahrnehmen Ihrer Bedürfnisse den Vorrang geben, schaffen Sie die Voraussetzungen, um eine innere Sicherheit wiederzufinden, die nicht ausschließlich von Ihrer Umgebung abhängt.",

    "Cette année, votre sensibilité pourrait vous révéler une vérité que votre esprit hésitait encore à reconnaître. Les mois à venir vous invitent à mieux reconnaître votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins. Vous avancerez alors avec plus de clarté et pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "In diesem Jahr könnte Ihre Sensibilität Ihnen eine Wahrheit zeigen, die Ihr Verstand bisher nur zögerlich anerkennen wollte. Die kommenden Monate laden Sie dazu ein, Ihre Sensibilität, Ihre Intuition und Ihre Fähigkeit, sich um das Wesentliche zu kümmern, besser wahrzunehmen. Diese Qualitäten werden besonders wertvoll, wenn Sie bereit sind, die Gefühle anderer nicht allein zu tragen und die Vergangenheit nicht über die Gegenwart bestimmen zu lassen. Versuchen Sie nicht, alles auf einmal zu lösen: Kehren Sie stattdessen zu liebevollen Grenzen, einem sicheren Raum und einem ehrlichen Wahrnehmen Ihrer Bedürfnisse zurück. So werden Sie mit größerer Klarheit vorankommen und eine innere Sicherheit wiederfinden können, die nicht ausschließlich von Ihrer Umgebung abhängt.",

    "Prendre soin de vous n’est pas un retrait du monde, mais une manière de mieux y revenir. Cette période de l’année ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Dans les moments de doute, gardez en tête qu’il est important de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Une décision fondée sur des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins pourrait modifier durablement votre manière d’aborder la suite.":
      "Sich um sich selbst zu kümmern bedeutet keinen Rückzug von der Welt, sondern eine Möglichkeit, bewusster zu ihr zurückzukehren. Diese Phase verlangt keine spektakuläre Reaktion, sondern eine bewusstere Präsenz in dem, was Sie gerade erleben. Ihre Entwicklung stützt sich auf Ihre Sensibilität, Ihre Intuition und Ihre Fähigkeit, sich um das Wesentliche zu kümmern. Denken Sie in Momenten des Zweifels daran, wie wichtig es ist, die Gefühle anderer nicht allein zu tragen und die Vergangenheit nicht über die Gegenwart bestimmen zu lassen. Eine Entscheidung, die auf liebevollen Grenzen, einem sicheren Raum und einem ehrlichen Wahrnehmen Ihrer Bedürfnisse beruht, könnte Ihre Art, mit dem Kommenden umzugehen, nachhaltig verändern.",

    "Une relation peut évoluer lorsque vous exprimez clairement ce que vous retenez depuis trop longtemps. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, mais votre véritable avancée viendra de votre capacité à ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En choisissant des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous donnerez une direction plus juste à votre énergie.":
      "Eine Beziehung kann sich weiterentwickeln, wenn Sie klar aussprechen, was Sie bereits zu lange zurückhalten. Eine vertraute Situation könnte plötzlich eine andere Bedeutung bekommen. Nehmen Sie diese neue Sichtweise an, ohne sich selbst zu beurteilen. Sie verfügen bereits über Ihre Sensibilität, Ihre Intuition und Ihre Fähigkeit, sich um das Wesentliche zu kümmern, doch Ihr wirklicher Fortschritt wird aus Ihrer Fähigkeit entstehen, die Gefühle anderer nicht allein zu tragen und die Vergangenheit nicht über die Gegenwart bestimmen zu lassen. Indem Sie liebevolle Grenzen, einen sicheren Raum und ein ehrliches Wahrnehmen Ihrer Bedürfnisse wählen, geben Sie Ihrer Energie eine stimmigere Richtung.",

    "Votre passé possède des enseignements précieux, mais il n’a pas à décider de votre avenir. Cette année peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, puis veillez à ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Cette approche vous aidera à retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Ihre Vergangenheit enthält wertvolle Erkenntnisse, doch sie muss nicht über Ihre Zukunft entscheiden. Dieses Jahr kann zu einer wichtigen Phase der Neuausrichtung werden. Nicht alles, was Sie fühlen, verlangt nach einer sofortigen Reaktion; manche Antworten erscheinen, wenn Sie der Beobachtung mehr Raum geben. Stützen Sie sich auf Ihre Sensibilität, Ihre Intuition und Ihre Fähigkeit, sich um das Wesentliche zu kümmern, und achten Sie gleichzeitig darauf, die Gefühle anderer nicht allein zu tragen und die Vergangenheit nicht über die Gegenwart bestimmen zu lassen. Diese Haltung wird Ihnen helfen, eine innere Sicherheit wiederzufinden, die nicht ausschließlich von Ihrer Umgebung abhängt.",

    "La sécurité que vous recherchez commence par la façon dont vous vous parlez dans les moments fragiles. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Le choix de des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins vous permettra d’avancer sans trahir ce que vous ressentez profondément.":
      "Die Sicherheit, nach der Sie suchen, beginnt mit der Art, wie Sie in verletzlichen Momenten mit sich selbst sprechen. Eine Tür öffnet sich, wenn Sie aufhören, eine alte Denk- oder Handlungsweise automatisch zu wiederholen. Ihr Potenzial liegt in Ihrer Sensibilität, Ihrer Intuition und Ihrer Fähigkeit, sich um das Wesentliche zu kümmern. Um dieses Potenzial vollständig zu nutzen, müssen Sie manchmal akzeptieren, die Gefühle anderer nicht allein zu tragen und die Vergangenheit nicht über die Gegenwart bestimmen zu lassen. Die Entscheidung für liebevolle Grenzen, einen sicheren Raum und ein ehrliches Wahrnehmen Ihrer Bedürfnisse wird Ihnen ermöglichen, voranzukommen, ohne das zu verleugnen, was Sie tief in Ihrem Inneren empfinden.",

    "Vous êtes invité à choisir les liens qui accueillent votre profondeur sans l’utiliser contre vous. Luna Astralis vous invite à considérer cette année comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Restez attentif(ve) au risque de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En vous recentrant sur des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement et préparer la suite avec davantage de confiance.":
      "Sie sind eingeladen, Beziehungen zu wählen, die Ihre Tiefe annehmen, ohne sie gegen Sie zu verwenden. Luna Astralis lädt Sie dazu ein, dieses Jahr als eine Phase innerer Reifung zu betrachten. Sie müssen kein anderer Mensch werden, sondern Ihre Sensibilität, Ihre Intuition und Ihre Fähigkeit, sich um das Wesentliche zu kümmern, bewusster einsetzen. Bleiben Sie aufmerksam gegenüber dem Risiko, die Gefühle anderer allein zu tragen oder die Vergangenheit über die Gegenwart bestimmen zu lassen. Wenn Sie sich wieder auf liebevolle Grenzen, einen sicheren Raum und ein ehrliches Wahrnehmen Ihrer Bedürfnisse konzentrieren, können Sie eine innere Sicherheit wiederfinden, die nicht ausschließlich von Ihrer Umgebung abhängt, und mit größerem Vertrauen auf das Kommende vorbereitet sein.",

/* =========================================================
   CANCER — ITALIANO — INTENTION + MESSAGE
========================================================= */

    "Accueillir vos émotions sans les juger ni les laisser tout diriger. Cette année, cette direction vous aidera à mobiliser votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Prenez toutefois le temps de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En revenant à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Accogliete le vostre emozioni senza giudicarle né permettere loro di dirigere ogni cosa. Quest’anno, questa direzione vi aiuterà a utilizzare la vostra sensibilità, la vostra intuizione e la vostra capacità di prendervi cura di ciò che conta. Fate tuttavia attenzione a non portare da soli le emozioni degli altri e a non lasciare che il passato diriga il presente. Tornando a limiti benevoli, a uno spazio sicuro e a un ascolto sincero dei vostri bisogni, potrete ritrovare una sicurezza interiore che non dipende unicamente dall’ambiente che vi circonda.",

    "Renforcer votre sentiment de sécurité intérieure. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte et observez les moments où il devient nécessaire de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Votre progression se consolidera grâce à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins.":
      "Rafforzate il vostro senso di sicurezza interiore. Questa intenzione non vi chiede di trasformare tutto immediatamente, ma di compiere una scelta più consapevole nella vita quotidiana. Affidatevi alla vostra sensibilità, alla vostra intuizione e alla vostra capacità di prendervi cura di ciò che conta, osservando i momenti in cui diventa necessario non portare da soli le emozioni degli altri e non lasciare che il passato diriga il presente. I vostri progressi si consolideranno grazie a limiti benevoli, a uno spazio sicuro e a un ascolto sincero dei vostri bisogni.",

    "Prendre soin de vous avec la même attention que vous offrez aux autres. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, à condition de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Un retour régulier vers des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins vous permettra de retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Prendetevi cura di voi stessi con la stessa attenzione che offrite agli altri. Date a questa intenzione un posto concreto nelle vostre decisioni, nelle vostre relazioni e nel modo in cui utilizzate la vostra energia. Il vostro sostegno migliore rimane la vostra sensibilità, la vostra intuizione e la vostra capacità di prendervi cura di ciò che conta, a condizione di non portare da soli le emozioni degli altri e di non lasciare che il passato diriga il presente. Tornare regolarmente a limiti benevoli, a uno spazio sicuro e a un ascolto sincero dei vostri bisogni vi permetterà di ritrovare una sicurezza interiore che non dipende unicamente dall’ambiente che vi circonda.",

    "Exprimer un besoin affectif avec simplicité et honnêteté. Durant cette année, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Lorsque la tension monte, rappelez-vous de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent et choisissez plutôt des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins.":
      "Esprimete un bisogno affettivo con semplicità e sincerità. Durante quest’anno, cercate meno la perfezione e più la coerenza tra ciò che sentite, ciò che dite e ciò che fate. Potrete contare sulla vostra sensibilità, sulla vostra intuizione e sulla vostra capacità di prendervi cura di ciò che conta. Quando la tensione aumenta, ricordate di non portare da soli le emozioni degli altri né lasciare che il passato diriga il presente, e scegliete invece limiti benevoli, uno spazio sicuro e un ascolto sincero dei vostri bisogni.",

    "Créer des limites qui protègent votre sensibilité. Cette orientation peut devenir un véritable fil conducteur pour l’année. Elle vous invite à utiliser votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte avec davantage de conscience, sans oublier de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Chaque geste relié à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins renforcera votre sentiment d’alignement.":
      "Create limiti che proteggano la vostra sensibilità. Questo orientamento può diventare un vero filo conduttore per l’anno. Vi invita a utilizzare la vostra sensibilità, la vostra intuizione e la vostra capacità di prendervi cura di ciò che conta con maggiore consapevolezza, senza dimenticare di non portare da soli le emozioni degli altri e di non lasciare che il passato diriga il presente. Ogni gesto collegato a limiti benevoli, a uno spazio sicuro e a un ascolto sincero dei vostri bisogni rafforzerà il vostro senso di allineamento.",

    "Vous rapprocher des personnes et des lieux qui vous apaisent. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte et à mieux traverser le défi suivant : ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En privilégiant des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous créerez les conditions nécessaires pour retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Avvicinatevi alle persone e ai luoghi che vi trasmettono serenità. Fate di questa intenzione un punto di riferimento piuttosto che un obbligo aggiuntivo. È qui per aiutarvi a riconoscere la forza della vostra sensibilità, della vostra intuizione e della vostra capacità di prendervi cura di ciò che conta, affrontando meglio la seguente sfida: non portare da soli le emozioni degli altri e non lasciare che il passato diriga il presente. Privilegiando limiti benevoli, uno spazio sicuro e un ascolto sincero dei vostri bisogni, creerete le condizioni necessarie per ritrovare una sicurezza interiore che non dipende unicamente dall’ambiente che vi circonda.",

    "Cette année, votre sensibilité pourrait vous révéler une vérité que votre esprit hésitait encore à reconnaître. Les mois à venir vous invitent à mieux reconnaître votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins. Vous avancerez alors avec plus de clarté et pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Quest’anno, la vostra sensibilità potrebbe rivelarvi una verità che la vostra mente esitava ancora a riconoscere. I prossimi mesi vi invitano a riconoscere meglio la vostra sensibilità, la vostra intuizione e la vostra capacità di prendervi cura di ciò che conta. Queste qualità diventano particolarmente preziose quando accettate di non portare da soli le emozioni degli altri e di non lasciare che il passato diriga il presente. Non cercate di risolvere tutto in una sola volta: tornate piuttosto a limiti benevoli, a uno spazio sicuro e a un ascolto sincero dei vostri bisogni. Avanzerete così con maggiore chiarezza e potrete ritrovare una sicurezza interiore che non dipende unicamente dall’ambiente che vi circonda.",

    "Prendre soin de vous n’est pas un retrait du monde, mais une manière de mieux y revenir. Cette période de l’année ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Dans les moments de doute, gardez en tête qu’il est important de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Une décision fondée sur des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins pourrait modifier durablement votre manière d’aborder la suite.":
      "Prendervi cura di voi stessi non significa ritirarvi dal mondo, ma trovare un modo migliore per tornarvi. Questo periodo non richiede una risposta spettacolare, ma una presenza più consapevole rispetto a ciò che state vivendo. La vostra evoluzione si basa sulla vostra sensibilità, sulla vostra intuizione e sulla vostra capacità di prendervi cura di ciò che conta. Nei momenti di dubbio, ricordate quanto sia importante non portare da soli le emozioni degli altri e non lasciare che il passato diriga il presente. Una decisione fondata su limiti benevoli, uno spazio sicuro e un ascolto sincero dei vostri bisogni potrebbe modificare in modo duraturo il vostro modo di affrontare ciò che verrà.",

    "Une relation peut évoluer lorsque vous exprimez clairement ce que vous retenez depuis trop longtemps. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, mais votre véritable avancée viendra de votre capacité à ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En choisissant des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous donnerez une direction plus juste à votre énergie.":
      "Una relazione può evolvere quando esprimete chiaramente ciò che trattenete da troppo tempo. Una situazione familiare potrebbe improvvisamente assumere un significato diverso. Accogliete questa nuova prospettiva senza giudicarvi. Disponete già della vostra sensibilità, della vostra intuizione e della vostra capacità di prendervi cura di ciò che conta, ma il vostro vero progresso nascerà dalla capacità di non portare da soli le emozioni degli altri e di non lasciare che il passato diriga il presente. Scegliendo limiti benevoli, uno spazio sicuro e un ascolto sincero dei vostri bisogni, darete una direzione più equilibrata alla vostra energia.",

    "Votre passé possède des enseignements précieux, mais il n’a pas à décider de votre avenir. Cette année peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, puis veillez à ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Cette approche vous aidera à retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Il vostro passato contiene insegnamenti preziosi, ma non deve decidere il vostro futuro. Quest’anno può diventare un importante periodo di ricentramento. Non tutto ciò che sentite richiede una reazione immediata; alcune risposte emergono quando lasciate più spazio all’osservazione. Affidatevi alla vostra sensibilità, alla vostra intuizione e alla vostra capacità di prendervi cura di ciò che conta, facendo attenzione a non portare da soli le emozioni degli altri e a non lasciare che il passato diriga il presente. Questo approccio vi aiuterà a ritrovare una sicurezza interiore che non dipende unicamente dall’ambiente che vi circonda.",

    "La sécurité que vous recherchez commence par la façon dont vous vous parlez dans les moments fragiles. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Le choix de des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins vous permettra d’avancer sans trahir ce que vous ressentez profondément.":
      "La sicurezza che cercate comincia dal modo in cui parlate a voi stessi nei momenti di fragilità. Una porta si apre quando smettete di ripetere automaticamente un vecchio modo di pensare o di agire. Il vostro potenziale risiede nella vostra sensibilità, nella vostra intuizione e nella vostra capacità di prendervi cura di ciò che conta. Per utilizzarlo pienamente, a volte sarà necessario accettare di non portare da soli le emozioni degli altri e di non lasciare che il passato diriga il presente. La scelta di limiti benevoli, uno spazio sicuro e un ascolto sincero dei vostri bisogni vi permetterà di avanzare senza tradire ciò che sentite profondamente.",

    "Vous êtes invité à choisir les liens qui accueillent votre profondeur sans l’utiliser contre vous. Luna Astralis vous invite à considérer cette année comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Restez attentif(ve) au risque de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En vous recentrant sur des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement et préparer la suite avec davantage de confiance.":
      "Siete invitati a scegliere legami capaci di accogliere la vostra profondità senza usarla contro di voi. Luna Astralis vi invita a considerare quest’anno come una fase di maturazione interiore. Non dovete diventare un’altra persona, ma utilizzare più consapevolmente la vostra sensibilità, la vostra intuizione e la vostra capacità di prendervi cura di ciò che conta. Rimanete attenti al rischio di portare da soli le emozioni degli altri o di lasciare che il passato diriga il presente. Ricentrandovi su limiti benevoli, uno spazio sicuro e un ascolto sincero dei vostri bisogni, potrete ritrovare una sicurezza interiore che non dipende unicamente dall’ambiente che vi circonda e prepararvi a ciò che verrà con maggiore fiducia.",

/* =========================================================
   CANCER — PORTUGUÊS BRASILEIRO — INTENTION + MESSAGE
========================================================= */

    "Accueillir vos émotions sans les juger ni les laisser tout diriger. Cette année, cette direction vous aidera à mobiliser votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Prenez toutefois le temps de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En revenant à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Acolha suas emoções sem julgá-las nem permitir que controlem tudo. Este ano, essa direção ajudará você a utilizar sua sensibilidade, sua intuição e sua capacidade de cuidar do que realmente importa. No entanto, procure não carregar sozinho as emoções dos outros nem permitir que o passado dirija o presente. Ao retornar a limites acolhedores, a um espaço seguro e a uma escuta sincera de suas necessidades, poderá reencontrar uma segurança interior que não dependa apenas do ambiente ao seu redor.",

    "Renforcer votre sentiment de sécurité intérieure. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte et observez les moments où il devient nécessaire de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Votre progression se consolidera grâce à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins.":
      "Fortaleça sua sensação de segurança interior. Esta intenção não pede que você transforme tudo imediatamente, mas que faça uma escolha mais consciente em sua vida cotidiana. Apoie-se em sua sensibilidade, em sua intuição e em sua capacidade de cuidar daquilo que importa, observando os momentos em que será necessário não carregar sozinho as emoções dos outros nem permitir que o passado dirija o presente. Seu progresso se consolidará graças a limites acolhedores, a um espaço seguro e a uma escuta sincera de suas necessidades.",

    "Prendre soin de vous avec la même attention que vous offrez aux autres. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, à condition de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Un retour régulier vers des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins vous permettra de retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Cuide de si mesmo com a mesma atenção que oferece aos outros. Dê a esta intenção um lugar concreto em suas decisões, em seus relacionamentos e na maneira como utiliza sua energia. Seu maior apoio continua sendo sua sensibilidade, sua intuição e sua capacidade de cuidar daquilo que importa, desde que você não carregue sozinho as emoções dos outros nem permita que o passado dirija o presente. Retornar regularmente a limites acolhedores, a um espaço seguro e a uma escuta sincera de suas necessidades permitirá reencontrar uma segurança interior que não dependa apenas do ambiente ao seu redor.",

    "Exprimer un besoin affectif avec simplicité et honnêteté. Durant cette année, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Lorsque la tension monte, rappelez-vous de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent et choisissez plutôt des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins.":
      "Expresse uma necessidade afetiva com simplicidade e honestidade. Durante este ano, busque menos a perfeição e mais a coerência entre aquilo que sente, aquilo que diz e aquilo que faz. Você poderá contar com sua sensibilidade, sua intuição e sua capacidade de cuidar daquilo que importa. Quando a tensão aumentar, lembre-se de não carregar sozinho as emoções dos outros nem permitir que o passado dirija o presente, e escolha, em vez disso, limites acolhedores, um espaço seguro e uma escuta sincera de suas necessidades.",

    "Créer des limites qui protègent votre sensibilité. Cette orientation peut devenir un véritable fil conducteur pour l’année. Elle vous invite à utiliser votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte avec davantage de conscience, sans oublier de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Chaque geste relié à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins renforcera votre sentiment d’alignement.":
      "Crie limites que protejam sua sensibilidade. Essa orientação pode se tornar um verdadeiro fio condutor para o ano. Ela convida você a utilizar sua sensibilidade, sua intuição e sua capacidade de cuidar daquilo que importa com mais consciência, sem esquecer de não carregar sozinho as emoções dos outros nem permitir que o passado dirija o presente. Cada atitude ligada a limites acolhedores, a um espaço seguro e a uma escuta sincera de suas necessidades fortalecerá sua sensação de alinhamento.",

    "Vous rapprocher des personnes et des lieux qui vous apaisent. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte et à mieux traverser le défi suivant : ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En privilégiant des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous créerez les conditions nécessaires pour retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Aproxime-se das pessoas e dos lugares que trazem tranquilidade a você. Faça desta intenção um ponto de referência, e não uma obrigação adicional. Ela existe para ajudar você a reconhecer a força de sua sensibilidade, de sua intuição e de sua capacidade de cuidar daquilo que importa, além de enfrentar melhor o seguinte desafio: não carregar sozinho as emoções dos outros nem permitir que o passado dirija o presente. Ao priorizar limites acolhedores, um espaço seguro e uma escuta sincera de suas necessidades, você criará as condições necessárias para reencontrar uma segurança interior que não dependa apenas do ambiente ao seu redor.",

    "Cette année, votre sensibilité pourrait vous révéler une vérité que votre esprit hésitait encore à reconnaître. Les mois à venir vous invitent à mieux reconnaître votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins. Vous avancerez alors avec plus de clarté et pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Este ano, sua sensibilidade poderá revelar uma verdade que sua mente ainda hesitava em reconhecer. Os próximos meses convidam você a compreender melhor sua sensibilidade, sua intuição e sua capacidade de cuidar daquilo que importa. Essas qualidades se tornam especialmente valiosas quando você aceita não carregar sozinho as emoções dos outros nem permitir que o passado dirija o presente. Não tente resolver tudo de uma só vez: volte, em vez disso, a limites acolhedores, a um espaço seguro e a uma escuta sincera de suas necessidades. Assim, avançará com mais clareza e poderá reencontrar uma segurança interior que não dependa apenas do ambiente ao seu redor.",

    "Prendre soin de vous n’est pas un retrait du monde, mais une manière de mieux y revenir. Cette période de l’année ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Dans les moments de doute, gardez en tête qu’il est important de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Une décision fondée sur des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins pourrait modifier durablement votre manière d’aborder la suite.":
      "Cuidar de si mesmo não significa se afastar do mundo, mas encontrar uma maneira melhor de retornar a ele. Este período não exige uma resposta espetacular, mas uma presença mais consciente diante daquilo que você está vivendo. Sua evolução se apoia em sua sensibilidade, em sua intuição e em sua capacidade de cuidar daquilo que importa. Nos momentos de dúvida, lembre-se de que é importante não carregar sozinho as emoções dos outros nem permitir que o passado dirija o presente. Uma decisão baseada em limites acolhedores, em um espaço seguro e em uma escuta sincera de suas necessidades poderá modificar de forma duradoura sua maneira de enfrentar o que vem pela frente.",

    "Une relation peut évoluer lorsque vous exprimez clairement ce que vous retenez depuis trop longtemps. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, mais votre véritable avancée viendra de votre capacité à ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En choisissant des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous donnerez une direction plus juste à votre énergie.":
      "Uma relação pode evoluir quando você expressa claramente aquilo que vem guardando há tempo demais. É possível que uma situação conhecida adquira de repente um significado diferente. Acolha essa nova perspectiva sem se julgar. Você já possui sua sensibilidade, sua intuição e sua capacidade de cuidar daquilo que importa, mas seu verdadeiro progresso virá da capacidade de não carregar sozinho as emoções dos outros nem permitir que o passado dirija o presente. Ao escolher limites acolhedores, um espaço seguro e uma escuta sincera de suas necessidades, dará uma direção mais equilibrada à sua energia.",

    "Votre passé possède des enseignements précieux, mais il n’a pas à décider de votre avenir. Cette année peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, puis veillez à ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Cette approche vous aidera à retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.":
      "Seu passado possui ensinamentos valiosos, mas não precisa decidir seu futuro. Este ano pode se tornar um importante período de recentramento. Nem tudo o que você sente exige uma reação imediata; algumas respostas aparecem quando você deixa mais espaço para observar. Apoie-se em sua sensibilidade, em sua intuição e em sua capacidade de cuidar daquilo que importa, procurando não carregar sozinho as emoções dos outros nem permitir que o passado dirija o presente. Essa abordagem ajudará você a reencontrar uma segurança interior que não dependa apenas do ambiente ao seu redor.",

    "La sécurité que vous recherchez commence par la façon dont vous vous parlez dans les moments fragiles. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Le choix de des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins vous permettra d’avancer sans trahir ce que vous ressentez profondément.":
      "A segurança que você procura começa pela maneira como fala consigo mesmo nos momentos de fragilidade. Uma porta se abre quando você deixa de repetir automaticamente uma antiga maneira de pensar ou agir. Seu potencial está em sua sensibilidade, em sua intuição e em sua capacidade de cuidar daquilo que importa. Para utilizá-lo plenamente, às vezes será necessário aceitar que você não precisa carregar sozinho as emoções dos outros nem permitir que o passado dirija o presente. Escolher limites acolhedores, um espaço seguro e uma escuta sincera de suas necessidades permitirá que avance sem trair aquilo que sente profundamente.",

    "Vous êtes invité à choisir les liens qui accueillent votre profondeur sans l’utiliser contre vous. Luna Astralis vous invite à considérer cette année comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Restez attentif(ve) au risque de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En vous recentrant sur des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement et préparer la suite avec davantage de confiance.":
      "Você é convidado a escolher vínculos que acolham sua profundidade sem utilizá-la contra você. Luna Astralis convida você a considerar este ano como uma etapa de amadurecimento interior. Você não precisa se tornar outra pessoa, mas utilizar de maneira mais consciente sua sensibilidade, sua intuição e sua capacidade de cuidar daquilo que importa. Permaneça atento ao risco de carregar sozinho as emoções dos outros ou permitir que o passado dirija o presente. Ao voltar sua atenção para limites acolhedores, um espaço seguro e uma escuta sincera de suas necessidades, poderá reencontrar uma segurança interior que não dependa apenas do ambiente ao seu redor e preparar o que vem pela frente com mais confiança.",
        },
};
/* =========================================================
   LION — TRANSLATIONS
========================================================= */

const MANTRA_LION_TRANSLATIONS = {
  en: {
    /* MANTRA */

    "Je rayonne sans avoir besoin de diminuer la lumière des autres.":
      "I shine without needing to diminish the light of others.",

    "Ma créativité mérite d’être vécue, exprimée et partagée.":
      "My creativity deserves to be lived, expressed, and shared.",

    "Je prends ma place avec cœur, confiance et générosité.":
      "I take my place with heart, confidence, and generosity.",

    "Ma valeur ne dépend pas du regard que les autres portent sur moi.":
      "My worth does not depend on how others see me.",

    "Je laisse mon authenticité devenir ma plus grande force.":
      "I allow my authenticity to become my greatest strength.",

    "Je mérite d’être reconnu pour ce que je suis réellement.":
      "I deserve to be recognized for who I truly am.",

    /* INTENTION */

    "Exprimer votre créativité sans attendre une validation extérieure.":
      "Express your creativity without waiting for external validation.",

    "Occuper votre place avec confiance et simplicité.":
      "Take your place with confidence and simplicity.",

    "Diriger votre énergie vers ce qui vous rend véritablement fier.":
      "Direct your energy toward what makes you truly proud.",

    "Partager votre lumière sans vous épuiser à impressionner.":
      "Share your light without exhausting yourself trying to impress others.",

    "Reconnaître votre valeur au-delà des résultats visibles.":
      "Recognize your worth beyond visible results.",

    "Faire un choix qui reflète davantage votre personnalité profonde.":
      "Make a choice that more fully reflects your true personality.",

    /* AFFIRMATION */

    "Je mérite d’être vu, entendu et apprécié tel que je suis.":
      "I deserve to be seen, heard, and appreciated as I am.",

    "Ma présence apporte naturellement de la chaleur autour de moi.":
      "My presence naturally brings warmth to those around me.",

    "Je crée avec confiance lorsque je reste fidèle à mon inspiration.":
      "I create with confidence when I remain true to my inspiration.",

    "Je peux recevoir les compliments sans remettre ma valeur en question.":
      "I can receive compliments without questioning my worth.",

    "Mon cœur me guide vers les projets qui méritent mon engagement.":
      "My heart guides me toward the projects that deserve my commitment.",

    "Je n’ai pas besoin de prouver ma lumière pour avoir le droit de briller.":
      "I do not need to prove my light to have the right to shine.",

    /* MESSAGE */

    "Ce mois-ci, votre rayonnement vient moins de ce que vous montrez que de la sincérité avec laquelle vous le montrez.":
      "This month, your radiance comes less from what you show than from the sincerity with which you show it.",

    "Une occasion de vous mettre en valeur pourrait apparaître lorsque vous cesserez de minimiser votre talent.":
      "An opportunity to showcase yourself could appear when you stop minimizing your talent.",

    "Votre confiance grandit lorsque vous choisissez de créer pour vous-même avant de chercher à convaincre.":
      "Your confidence grows when you choose to create for yourself before trying to convince others.",

    "Un geste généreux pourrait renforcer un lien, à condition qu’il ne vous oblige pas à vous oublier.":
      "A generous gesture could strengthen a relationship, provided it does not require you to forget yourself.",

    "Votre cœur reconnaît déjà la direction qui pourrait raviver votre enthousiasme.":
      "Your heart already recognizes the direction that could rekindle your enthusiasm.",

    "Vous êtes invité à occuper votre place sans vous excuser de la lumière que vous apportez.":
      "You are invited to take your place without apologizing for the light you bring.",
  },

  es: {
    /* MANTRA */

    "Je rayonne sans avoir besoin de diminuer la lumière des autres.":
      "Brillo sin necesidad de disminuir la luz de los demás.",

    "Ma créativité mérite d’être vécue, exprimée et partagée.":
      "Mi creatividad merece ser vivida, expresada y compartida.",

    "Je prends ma place avec cœur, confiance et générosité.":
      "Ocupo mi lugar con corazón, confianza y generosidad.",

    "Ma valeur ne dépend pas du regard que les autres portent sur moi.":
      "Mi valor no depende de la mirada que los demás tengan sobre mí.",

    "Je laisse mon authenticité devenir ma plus grande force.":
      "Permito que mi autenticidad se convierta en mi mayor fortaleza.",

    "Je mérite d’être reconnu pour ce que je suis réellement.":
      "Merezco ser reconocido por quien realmente soy.",

    /* INTENTION */

    "Exprimer votre créativité sans attendre une validation extérieure.":
      "Expresa tu creatividad sin esperar una validación externa.",

    "Occuper votre place avec confiance et simplicité.":
      "Ocupa tu lugar con confianza y sencillez.",

    "Diriger votre énergie vers ce qui vous rend véritablement fier.":
      "Dirige tu energía hacia aquello que realmente te hace sentir orgulloso.",

    "Partager votre lumière sans vous épuiser à impressionner.":
      "Comparte tu luz sin agotarte intentando impresionar.",

    "Reconnaître votre valeur au-delà des résultats visibles.":
      "Reconoce tu valor más allá de los resultados visibles.",

    "Faire un choix qui reflète davantage votre personnalité profonde.":
      "Toma una decisión que refleje mejor tu verdadera personalidad.",

    /* AFFIRMATION */

    "Je mérite d’être vu, entendu et apprécié tel que je suis.":
      "Merezco ser visto, escuchado y apreciado tal como soy.",

    "Ma présence apporte naturellement de la chaleur autour de moi.":
      "Mi presencia aporta naturalmente calidez a quienes me rodean.",

    "Je crée avec confiance lorsque je reste fidèle à mon inspiration.":
      "Creo con confianza cuando permanezco fiel a mi inspiración.",

    "Je peux recevoir les compliments sans remettre ma valeur en question.":
      "Puedo recibir cumplidos sin cuestionar mi propio valor.",

    "Mon cœur me guide vers les projets qui méritent mon engagement.":
      "Mi corazón me guía hacia los proyectos que merecen mi compromiso.",

    "Je n’ai pas besoin de prouver ma lumière pour avoir le droit de briller.":
      "No necesito demostrar mi luz para tener derecho a brillar.",

    /* MESSAGE */

    "Ce mois-ci, votre rayonnement vient moins de ce que vous montrez que de la sincérité avec laquelle vous le montrez.":
      "Este mes, tu brillo proviene menos de lo que muestras que de la sinceridad con la que lo muestras.",

    "Une occasion de vous mettre en valeur pourrait apparaître lorsque vous cesserez de minimiser votre talent.":
      "Podría surgir una oportunidad para destacar cuando dejes de minimizar tu talento.",

    "Votre confiance grandit lorsque vous choisissez de créer pour vous-même avant de chercher à convaincre.":
      "Tu confianza crece cuando eliges crear para ti antes de intentar convencer a los demás.",

    "Un geste généreux pourrait renforcer un lien, à condition qu’il ne vous oblige pas à vous oublier.":
      "Un gesto generoso podría fortalecer un vínculo, siempre que no te obligue a olvidarte de ti mismo.",

    "Votre cœur reconnaît déjà la direction qui pourrait raviver votre enthousiasme.":
      "Tu corazón ya reconoce la dirección que podría reavivar tu entusiasmo.",

    "Vous êtes invité à occuper votre place sans vous excuser de la lumière que vous apportez.":
      "Estás invitado a ocupar tu lugar sin disculparte por la luz que aportas.",
  },

  de: {
    /* MANTRA */

    "Je rayonne sans avoir besoin de diminuer la lumière des autres.":
      "Ich strahle, ohne das Licht anderer schwächen zu müssen.",

    "Ma créativité mérite d’être vécue, exprimée et partagée.":
      "Meine Kreativität verdient es, gelebt, ausgedrückt und geteilt zu werden.",

    "Je prends ma place avec cœur, confiance et générosité.":
      "Ich nehme meinen Platz mit Herz, Selbstvertrauen und Großzügigkeit ein.",

    "Ma valeur ne dépend pas du regard que les autres portent sur moi.":
      "Mein Wert hängt nicht davon ab, wie andere mich sehen.",

    "Je laisse mon authenticité devenir ma plus grande force.":
      "Ich lasse meine Authentizität zu meiner größten Stärke werden.",

    "Je mérite d’être reconnu pour ce que je suis réellement.":
      "Ich verdiene es, für das anerkannt zu werden, was ich wirklich bin.",

    /* INTENTION */

    "Exprimer votre créativité sans attendre une validation extérieure.":
      "Drücken Sie Ihre Kreativität aus, ohne auf äußere Bestätigung zu warten.",

    "Occuper votre place avec confiance et simplicité.":
      "Nehmen Sie Ihren Platz mit Selbstvertrauen und Natürlichkeit ein.",

    "Diriger votre énergie vers ce qui vous rend véritablement fier.":
      "Lenken Sie Ihre Energie auf das, worauf Sie wirklich stolz sind.",

    "Partager votre lumière sans vous épuiser à impressionner.":
      "Teilen Sie Ihr Licht, ohne sich dabei zu erschöpfen, andere beeindrucken zu wollen.",

    "Reconnaître votre valeur au-delà des résultats visibles.":
      "Erkennen Sie Ihren Wert unabhängig von sichtbaren Ergebnissen.",

    "Faire un choix qui reflète davantage votre personnalité profonde.":
      "Treffen Sie eine Entscheidung, die Ihre wahre Persönlichkeit stärker widerspiegelt.",

    /* AFFIRMATION */

    "Je mérite d’être vu, entendu et apprécié tel que je suis.":
      "Ich verdiene es, so gesehen, gehört und geschätzt zu werden, wie ich bin.",

    "Ma présence apporte naturellement de la chaleur autour de moi.":
      "Meine Anwesenheit bringt ganz natürlich Wärme in meine Umgebung.",

    "Je crée avec confiance lorsque je reste fidèle à mon inspiration.":
      "Ich erschaffe mit Vertrauen, wenn ich meiner Inspiration treu bleibe.",

    "Je peux recevoir les compliments sans remettre ma valeur en question.":
      "Ich kann Komplimente annehmen, ohne meinen eigenen Wert infrage zu stellen.",

    "Mon cœur me guide vers les projets qui méritent mon engagement.":
      "Mein Herz führt mich zu den Projekten, die mein Engagement verdienen.",

    "Je n’ai pas besoin de prouver ma lumière pour avoir le droit de briller.":
      "Ich muss mein Licht nicht beweisen, um das Recht zu haben zu strahlen.",

    /* MESSAGE */

    "Ce mois-ci, votre rayonnement vient moins de ce que vous montrez que de la sincérité avec laquelle vous le montrez.":
      "In diesem Monat entsteht Ihre Ausstrahlung weniger durch das, was Sie zeigen, als durch die Aufrichtigkeit, mit der Sie es zeigen.",

    "Une occasion de vous mettre en valeur pourrait apparaître lorsque vous cesserez de minimiser votre talent.":
      "Eine Gelegenheit, Ihre Fähigkeiten zu zeigen, könnte entstehen, sobald Sie aufhören, Ihr Talent herunterzuspielen.",

    "Votre confiance grandit lorsque vous choisissez de créer pour vous-même avant de chercher à convaincre.":
      "Ihr Selbstvertrauen wächst, wenn Sie zuerst für sich selbst erschaffen, bevor Sie versuchen, andere zu überzeugen.",

    "Un geste généreux pourrait renforcer un lien, à condition qu’il ne vous oblige pas à vous oublier.":
      "Eine großzügige Geste könnte eine Verbindung stärken, solange Sie sich dabei nicht selbst vergessen.",

    "Votre cœur reconnaît déjà la direction qui pourrait raviver votre enthousiasme.":
      "Ihr Herz erkennt bereits die Richtung, die Ihre Begeisterung neu entfachen könnte.",

    "Vous êtes invité à occuper votre place sans vous excuser de la lumière que vous apportez.":
      "Sie sind eingeladen, Ihren Platz einzunehmen, ohne sich für das Licht zu entschuldigen, das Sie mitbringen.",
  },

  it: {
    /* MANTRA */

    "Je rayonne sans avoir besoin de diminuer la lumière des autres.":
      "Brillo senza aver bisogno di diminuire la luce degli altri.",

    "Ma créativité mérite d’être vécue, exprimée et partagée.":
      "La mia creatività merita di essere vissuta, espressa e condivisa.",

    "Je prends ma place avec cœur, confiance et générosité.":
      "Prendo il mio posto con cuore, fiducia e generosità.",

    "Ma valeur ne dépend pas du regard que les autres portent sur moi.":
      "Il mio valore non dipende dallo sguardo che gli altri hanno su di me.",

    "Je laisse mon authenticité devenir ma plus grande force.":
      "Lascio che la mia autenticità diventi la mia più grande forza.",

    "Je mérite d’être reconnu pour ce que je suis réellement.":
      "Merito di essere riconosciuto per ciò che sono veramente.",

    /* INTENTION */

    "Exprimer votre créativité sans attendre une validation extérieure.":
      "Esprimete la vostra creatività senza aspettare una conferma esterna.",

    "Occuper votre place avec confiance et simplicité.":
      "Prendete il vostro posto con fiducia e semplicità.",

    "Diriger votre énergie vers ce qui vous rend véritablement fier.":
      "Dirigete la vostra energia verso ciò che vi rende veramente orgogliosi.",

    "Partager votre lumière sans vous épuiser à impressionner.":
      "Condividete la vostra luce senza esaurirvi nel tentativo di impressionare.",

    "Reconnaître votre valeur au-delà des résultats visibles.":
      "Riconoscete il vostro valore al di là dei risultati visibili.",

    "Faire un choix qui reflète davantage votre personnalité profonde.":
      "Fate una scelta che rifletta maggiormente la vostra personalità più autentica.",

    /* AFFIRMATION */

    "Je mérite d’être vu, entendu et apprécié tel que je suis.":
      "Merito di essere visto, ascoltato e apprezzato per ciò che sono.",

    "Ma présence apporte naturellement de la chaleur autour de moi.":
      "La mia presenza porta naturalmente calore intorno a me.",

    "Je crée avec confiance lorsque je reste fidèle à mon inspiration.":
      "Creo con fiducia quando rimango fedele alla mia ispirazione.",

    "Je peux recevoir les compliments sans remettre ma valeur en question.":
      "Posso ricevere complimenti senza mettere in dubbio il mio valore.",

    "Mon cœur me guide vers les projets qui méritent mon engagement.":
      "Il mio cuore mi guida verso i progetti che meritano il mio impegno.",

    "Je n’ai pas besoin de prouver ma lumière pour avoir le droit de briller.":
      "Non ho bisogno di dimostrare la mia luce per avere il diritto di brillare.",

    /* MESSAGE */

    "Ce mois-ci, votre rayonnement vient moins de ce que vous montrez que de la sincérité avec laquelle vous le montrez.":
      "Questo mese, la vostra luminosità deriva meno da ciò che mostrate e più dalla sincerità con cui lo mostrate.",

    "Une occasion de vous mettre en valeur pourrait apparaître lorsque vous cesserez de minimiser votre talent.":
      "Un’occasione per mettere in luce le vostre qualità potrebbe presentarsi quando smetterete di minimizzare il vostro talento.",

    "Votre confiance grandit lorsque vous choisissez de créer pour vous-même avant de chercher à convaincre.":
      "La vostra fiducia cresce quando scegliete di creare prima di tutto per voi stessi, invece di cercare di convincere gli altri.",

    "Un geste généreux pourrait renforcer un lien, à condition qu’il ne vous oblige pas à vous oublier.":
      "Un gesto generoso potrebbe rafforzare un legame, a condizione che non vi costringa a dimenticare voi stessi.",

    "Votre cœur reconnaît déjà la direction qui pourrait raviver votre enthousiasme.":
      "Il vostro cuore riconosce già la direzione che potrebbe riaccendere il vostro entusiasmo.",

    "Vous êtes invité à occuper votre place sans vous excuser de la lumière que vous apportez.":
      "Siete invitati a prendere il vostro posto senza scusarvi per la luce che portate.",
  },

  pt: {
    /* MANTRA */

    "Je rayonne sans avoir besoin de diminuer la lumière des autres.":
      "Eu brilho sem precisar diminuir a luz dos outros.",

    "Ma créativité mérite d’être vécue, exprimée et partagée.":
      "Minha criatividade merece ser vivida, expressa e compartilhada.",

    "Je prends ma place avec cœur, confiance et générosité.":
      "Ocupo meu lugar com coração, confiança e generosidade.",

    "Ma valeur ne dépend pas du regard que les autres portent sur moi.":
      "Meu valor não depende da maneira como os outros me veem.",

    "Je laisse mon authenticité devenir ma plus grande force.":
      "Permito que minha autenticidade se torne minha maior força.",

    "Je mérite d’être reconnu pour ce que je suis réellement.":
      "Mereço ser reconhecido por quem realmente sou.",

    /* INTENTION */

    "Exprimer votre créativité sans attendre une validation extérieure.":
      "Expresse sua criatividade sem esperar validação externa.",

    "Occuper votre place avec confiance et simplicité.":
      "Ocupe seu lugar com confiança e simplicidade.",

    "Diriger votre énergie vers ce qui vous rend véritablement fier.":
      "Direcione sua energia para aquilo que realmente traz orgulho a você.",

    "Partager votre lumière sans vous épuiser à impressionner.":
      "Compartilhe sua luz sem se esgotar tentando impressionar os outros.",

    "Reconnaître votre valeur au-delà des résultats visibles.":
      "Reconheça seu valor além dos resultados visíveis.",

    "Faire un choix qui reflète davantage votre personnalité profonde.":
      "Faça uma escolha que reflita melhor sua verdadeira personalidade.",

    /* AFFIRMATION */

    "Je mérite d’être vu, entendu et apprécié tel que je suis.":
      "Mereço ser visto, ouvido e valorizado como realmente sou.",

    "Ma présence apporte naturellement de la chaleur autour de moi.":
      "Minha presença naturalmente traz calor às pessoas ao meu redor.",

    "Je crée avec confiance lorsque je reste fidèle à mon inspiration.":
      "Crio com confiança quando permaneço fiel à minha inspiração.",

    "Je peux recevoir les compliments sans remettre ma valeur en question.":
      "Posso receber elogios sem questionar meu próprio valor.",

    "Mon cœur me guide vers les projets qui méritent mon engagement.":
      "Meu coração me guia em direção aos projetos que merecem meu compromisso.",

    "Je n’ai pas besoin de prouver ma lumière pour avoir le droit de briller.":
      "Não preciso provar minha luz para ter o direito de brilhar.",

    /* MESSAGE */

    "Ce mois-ci, votre rayonnement vient moins de ce que vous montrez que de la sincérité avec laquelle vous le montrez.":
      "Neste mês, seu brilho vem menos daquilo que você mostra e mais da sinceridade com que se expressa.",

    "Une occasion de vous mettre en valeur pourrait apparaître lorsque vous cesserez de minimiser votre talent.":
      "Uma oportunidade de mostrar seu valor poderá surgir quando você deixar de minimizar seu talento.",

    "Votre confiance grandit lorsque vous choisissez de créer pour vous-même avant de chercher à convaincre.":
      "Sua confiança cresce quando você escolhe criar primeiro para si mesmo antes de tentar convencer os outros.",

    "Un geste généreux pourrait renforcer un lien, à condition qu’il ne vous oblige pas à vous oublier.":
      "Um gesto generoso poderá fortalecer um vínculo, desde que não faça você se esquecer de si mesmo.",

    "Votre cœur reconnaît déjà la direction qui pourrait raviver votre enthousiasme.":
      "Seu coração já reconhece a direção que poderá reacender seu entusiasmo.",

    "Vous êtes invité à occuper votre place sans vous excuser de la lumière que vous apportez.":
      "Você é convidado a ocupar seu lugar sem pedir desculpas pela luz que traz.",
  },
};
/* =========================================================
   VIERGE — TRANSLATIONS
========================================================= */

const MANTRA_VIERGE_TRANSLATIONS = {
  en: {
    /* MANTRA */

    "Je progresse sans exiger de moi une perfection impossible.":
      "I move forward without demanding impossible perfection from myself.",

    "Chaque petit geste conscient améliore durablement ma vie.":
      "Every small conscious action improves my life in a lasting way.",

    "Je mérite le repos même lorsque tout n’est pas terminé.":
      "I deserve rest even when everything is not finished.",

    "Je transforme mon sens du détail en force plutôt qu’en pression.":
      "I transform my attention to detail into a strength rather than pressure.",

    "Je peux faire confiance à la vie sans vouloir tout contrôler.":
      "I can trust life without trying to control everything.",

    "Je reconnais la valeur de mes efforts autant que celle de mes résultats.":
      "I recognize the value of my efforts as much as the value of my results.",

    /* INTENTION */

    "Simplifier une responsabilité devenue inutilement compliquée.":
      "Simplify a responsibility that has become unnecessarily complicated.",

    "Remplacer l’autocritique par une observation plus constructive.":
      "Replace self-criticism with a more constructive perspective.",

    "Créer une routine qui soutient réellement votre bien-être.":
      "Create a routine that genuinely supports your well-being.",

    "Accepter qu’une solution suffisamment bonne puisse être la meilleure.":
      "Accept that a good-enough solution may actually be the best one.",

    "Vous libérer d’une tâche ou d’une attente qui vous épuise.":
      "Free yourself from a task or expectation that is exhausting you.",

    "Accorder autant d’importance à votre repos qu’à votre productivité.":
      "Give your rest as much importance as your productivity.",

    /* AFFIRMATION */

    "Je suis digne de respect même lorsque je ne suis pas parfaite.":
      "I am worthy of respect even when I am not perfect.",

    "Mon sens de l’organisation m’aide sans avoir à me limiter.":
      "My organizational skills support me without limiting me.",

    "Je peux avancer étape par étape sans connaître tout le chemin.":
      "I can move forward step by step without knowing the entire path.",

    "Je mérite de célébrer les progrès que j’ai déjà accomplis.":
      "I deserve to celebrate the progress I have already made.",

    "Je fais confiance à ma capacité de trouver des solutions concrètes.":
      "I trust my ability to find practical solutions.",

    "Je libère la pression qui ne m’aide plus à évoluer.":
      "I release the pressure that no longer helps me grow.",

    /* MESSAGE */

    "Ce mois-ci, une amélioration simple pourrait avoir davantage d’effet qu’une transformation complète.":
      "This month, a simple improvement could have more impact than a complete transformation.",

    "Votre regard précis devient une force lorsque vous l’utilisez pour ajuster plutôt que pour vous juger.":
      "Your precise perspective becomes a strength when you use it to make adjustments rather than judge yourself.",

    "Vous n’avez pas besoin de tout réparer pour mériter un moment de paix.":
      "You do not need to fix everything to deserve a moment of peace.",

    "Une nouvelle organisation pourrait alléger autant votre esprit que votre quotidien.":
      "A new way of organizing things could lighten both your mind and your daily life.",

    "La perfection vous demande toujours davantage, tandis que la progression vous permet enfin d’avancer.":
      "Perfection always asks more of you, while progress finally allows you to move forward.",

    "Vous êtes invité à reconnaître tout ce que vous accomplissez déjà avec discrétion et constance.":
      "You are invited to recognize everything you already accomplish with quiet dedication and consistency.",
  },

  es: {
    /* MANTRA */

    "Je progresse sans exiger de moi une perfection impossible.":
      "Avanzo sin exigirme una perfección imposible.",

    "Chaque petit geste conscient améliore durablement ma vie.":
      "Cada pequeño gesto consciente mejora mi vida de manera duradera.",

    "Je mérite le repos même lorsque tout n’est pas terminé.":
      "Merezco descansar incluso cuando todavía no está todo terminado.",

    "Je transforme mon sens du détail en force plutôt qu’en pression.":
      "Transformo mi atención al detalle en una fortaleza en lugar de convertirla en presión.",

    "Je peux faire confiance à la vie sans vouloir tout contrôler.":
      "Puedo confiar en la vida sin querer controlarlo todo.",

    "Je reconnais la valeur de mes efforts autant que celle de mes résultats.":
      "Reconozco el valor de mis esfuerzos tanto como el de mis resultados.",

    /* INTENTION */

    "Simplifier une responsabilité devenue inutilement compliquée.":
      "Simplifica una responsabilidad que se ha vuelto innecesariamente complicada.",

    "Remplacer l’autocritique par une observation plus constructive.":
      "Sustituye la autocrítica por una observación más constructiva.",

    "Créer une routine qui soutient réellement votre bien-être.":
      "Crea una rutina que realmente favorezca tu bienestar.",

    "Accepter qu’une solution suffisamment bonne puisse être la meilleure.":
      "Acepta que una solución suficientemente buena puede ser la mejor.",

    "Vous libérer d’une tâche ou d’une attente qui vous épuise.":
      "Libérate de una tarea o una expectativa que te está agotando.",

    "Accorder autant d’importance à votre repos qu’à votre productivité.":
      "Da tanta importancia a tu descanso como a tu productividad.",

    /* AFFIRMATION */

    "Je suis digne de respect même lorsque je ne suis pas parfaite.":
      "Soy digno de respeto incluso cuando no soy perfecto.",

    "Mon sens de l’organisation m’aide sans avoir à me limiter.":
      "Mi sentido de la organización me ayuda sin tener que limitarme.",

    "Je peux avancer étape par étape sans connaître tout le chemin.":
      "Puedo avanzar paso a paso sin conocer todo el camino.",

    "Je mérite de célébrer les progrès que j’ai déjà accomplis.":
      "Merezco celebrar los progresos que ya he realizado.",

    "Je fais confiance à ma capacité de trouver des solutions concrètes.":
      "Confío en mi capacidad para encontrar soluciones concretas.",

    "Je libère la pression qui ne m’aide plus à évoluer.":
      "Libero la presión que ya no me ayuda a evolucionar.",

    /* MESSAGE */

    "Ce mois-ci, une amélioration simple pourrait avoir davantage d’effet qu’une transformation complète.":
      "Este mes, una mejora sencilla podría tener más efecto que una transformación completa.",

    "Votre regard précis devient une force lorsque vous l’utilisez pour ajuster plutôt que pour vous juger.":
      "Tu mirada precisa se convierte en una fortaleza cuando la utilizas para ajustar en lugar de juzgarte.",

    "Vous n’avez pas besoin de tout réparer pour mériter un moment de paix.":
      "No necesitas arreglarlo todo para merecer un momento de paz.",

    "Une nouvelle organisation pourrait alléger autant votre esprit que votre quotidien.":
      "Una nueva organización podría aliviar tanto tu mente como tu vida cotidiana.",

    "La perfection vous demande toujours davantage, tandis que la progression vous permet enfin d’avancer.":
      "La perfección siempre te exige más, mientras que el progreso finalmente te permite avanzar.",

    "Vous êtes invité à reconnaître tout ce que vous accomplissez déjà avec discrétion et constance.":
      "Estás invitado a reconocer todo lo que ya logras con discreción y constancia.",
  },

  de: {
    /* MANTRA */

    "Je progresse sans exiger de moi une perfection impossible.":
      "Ich gehe voran, ohne von mir unmögliche Perfektion zu verlangen.",

    "Chaque petit geste conscient améliore durablement ma vie.":
      "Jede kleine bewusste Handlung verbessert mein Leben nachhaltig.",

    "Je mérite le repos même lorsque tout n’est pas terminé.":
      "Ich verdiene Ruhe, auch wenn noch nicht alles erledigt ist.",

    "Je transforme mon sens du détail en force plutôt qu’en pression.":
      "Ich verwandle meinen Blick fürs Detail in eine Stärke statt in Druck.",

    "Je peux faire confiance à la vie sans vouloir tout contrôler.":
      "Ich kann dem Leben vertrauen, ohne alles kontrollieren zu wollen.",

    "Je reconnais la valeur de mes efforts autant que celle de mes résultats.":
      "Ich erkenne den Wert meiner Anstrengungen ebenso an wie den meiner Ergebnisse.",

    /* INTENTION */

    "Simplifier une responsabilité devenue inutilement compliquée.":
      "Vereinfachen Sie eine Verantwortung, die unnötig kompliziert geworden ist.",

    "Remplacer l’autocritique par une observation plus constructive.":
      "Ersetzen Sie Selbstkritik durch eine konstruktivere Betrachtungsweise.",

    "Créer une routine qui soutient réellement votre bien-être.":
      "Schaffen Sie eine Routine, die Ihr Wohlbefinden wirklich unterstützt.",

    "Accepter qu’une solution suffisamment bonne puisse être la meilleure.":
      "Akzeptieren Sie, dass eine ausreichend gute Lösung möglicherweise die beste ist.",

    "Vous libérer d’une tâche ou d’une attente qui vous épuise.":
      "Befreien Sie sich von einer Aufgabe oder Erwartung, die Sie erschöpft.",

    "Accorder autant d’importance à votre repos qu’à votre productivité.":
      "Messen Sie Ihrer Erholung ebenso viel Bedeutung bei wie Ihrer Produktivität.",

    /* AFFIRMATION */

    "Je suis digne de respect même lorsque je ne suis pas parfaite.":
      "Ich verdiene Respekt, auch wenn ich nicht perfekt bin.",

    "Mon sens de l’organisation m’aide sans avoir à me limiter.":
      "Mein Organisationstalent unterstützt mich, ohne mich einzuschränken.",

    "Je peux avancer étape par étape sans connaître tout le chemin.":
      "Ich kann Schritt für Schritt vorangehen, ohne den gesamten Weg zu kennen.",

    "Je mérite de célébrer les progrès que j’ai déjà accomplis.":
      "Ich verdiene es, die Fortschritte zu feiern, die ich bereits gemacht habe.",

    "Je fais confiance à ma capacité de trouver des solutions concrètes.":
      "Ich vertraue auf meine Fähigkeit, konkrete Lösungen zu finden.",

    "Je libère la pression qui ne m’aide plus à évoluer.":
      "Ich lasse den Druck los, der meine Entwicklung nicht mehr unterstützt.",

    /* MESSAGE */

    "Ce mois-ci, une amélioration simple pourrait avoir davantage d’effet qu’une transformation complète.":
      "In diesem Monat könnte eine einfache Verbesserung mehr bewirken als eine vollständige Veränderung.",

    "Votre regard précis devient une force lorsque vous l’utilisez pour ajuster plutôt que pour vous juger.":
      "Ihr genauer Blick wird zu einer Stärke, wenn Sie ihn nutzen, um Anpassungen vorzunehmen, statt sich selbst zu beurteilen.",

    "Vous n’avez pas besoin de tout réparer pour mériter un moment de paix.":
      "Sie müssen nicht alles in Ordnung bringen, um einen Moment der Ruhe zu verdienen.",

    "Une nouvelle organisation pourrait alléger autant votre esprit que votre quotidien.":
      "Eine neue Organisation könnte sowohl Ihren Geist als auch Ihren Alltag erleichtern.",

    "La perfection vous demande toujours davantage, tandis que la progression vous permet enfin d’avancer.":
      "Perfektion verlangt immer mehr von Ihnen, während Fortschritt Ihnen endlich ermöglicht voranzukommen.",

    "Vous êtes invité à reconnaître tout ce que vous accomplissez déjà avec discrétion et constance.":
      "Sie sind eingeladen, all das anzuerkennen, was Sie bereits still und beständig leisten.",
  },

  it: {
    /* MANTRA */

    "Je progresse sans exiger de moi une perfection impossible.":
      "Avanzo senza pretendere da me una perfezione impossibile.",

    "Chaque petit geste conscient améliore durablement ma vie.":
      "Ogni piccolo gesto consapevole migliora la mia vita in modo duraturo.",

    "Je mérite le repos même lorsque tout n’est pas terminé.":
      "Merito di riposare anche quando non tutto è stato completato.",

    "Je transforme mon sens du détail en force plutôt qu’en pression.":
      "Trasformo la mia attenzione ai dettagli in una forza anziché in una pressione.",

    "Je peux faire confiance à la vie sans vouloir tout contrôler.":
      "Posso fidarmi della vita senza voler controllare tutto.",

    "Je reconnais la valeur de mes efforts autant que celle de mes résultats.":
      "Riconosco il valore dei miei sforzi tanto quanto quello dei miei risultati.",

    /* INTENTION */

    "Simplifier une responsabilité devenue inutilement compliquée.":
      "Semplificate una responsabilità diventata inutilmente complicata.",

    "Remplacer l’autocritique par une observation plus constructive.":
      "Sostituite l’autocritica con un’osservazione più costruttiva.",

    "Créer une routine qui soutient réellement votre bien-être.":
      "Create una routine che sostenga realmente il vostro benessere.",

    "Accepter qu’une solution suffisamment bonne puisse être la meilleure.":
      "Accettate che una soluzione sufficientemente buona possa essere la migliore.",

    "Vous libérer d’une tâche ou d’une attente qui vous épuise.":
      "Liberatevi da un compito o da un’aspettativa che vi esaurisce.",

    "Accorder autant d’importance à votre repos qu’à votre productivité.":
      "Date al vostro riposo la stessa importanza che date alla produttività.",

    /* AFFIRMATION */

    "Je suis digne de respect même lorsque je ne suis pas parfaite.":
      "Merito rispetto anche quando non sono perfetto.",

    "Mon sens de l’organisation m’aide sans avoir à me limiter.":
      "Il mio senso dell’organizzazione mi aiuta senza limitarmi.",

    "Je peux avancer étape par étape sans connaître tout le chemin.":
      "Posso avanzare passo dopo passo senza conoscere l’intero percorso.",

    "Je mérite de célébrer les progrès que j’ai déjà accomplis.":
      "Merito di celebrare i progressi che ho già compiuto.",

    "Je fais confiance à ma capacité de trouver des solutions concrètes.":
      "Mi fido della mia capacità di trovare soluzioni concrete.",

    "Je libère la pression qui ne m’aide plus à évoluer.":
      "Lascio andare la pressione che non mi aiuta più a evolvere.",

    /* MESSAGE */

    "Ce mois-ci, une amélioration simple pourrait avoir davantage d’effet qu’une transformation complète.":
      "Questo mese, un semplice miglioramento potrebbe avere più effetto di una trasformazione completa.",

    "Votre regard précis devient une force lorsque vous l’utilisez pour ajuster plutôt que pour vous juger.":
      "Il vostro sguardo attento diventa una forza quando lo utilizzate per apportare miglioramenti invece di giudicarvi.",

    "Vous n’avez pas besoin de tout réparer pour mériter un moment de paix.":
      "Non avete bisogno di sistemare tutto per meritare un momento di pace.",

    "Une nouvelle organisation pourrait alléger autant votre esprit que votre quotidien.":
      "Una nuova organizzazione potrebbe alleggerire sia la vostra mente sia la vostra vita quotidiana.",

    "La perfection vous demande toujours davantage, tandis que la progression vous permet enfin d’avancer.":
      "La perfezione vi chiede sempre di più, mentre il progresso vi permette finalmente di avanzare.",

    "Vous êtes invité à reconnaître tout ce que vous accomplissez déjà avec discrétion et constance.":
      "Siete invitati a riconoscere tutto ciò che già realizzate con discrezione e costanza.",
  },

  pt: {
    /* MANTRA */

    "Je progresse sans exiger de moi une perfection impossible.":
      "Avanço sem exigir de mim uma perfeição impossível.",

    "Chaque petit geste conscient améliore durablement ma vie.":
      "Cada pequeno gesto consciente melhora minha vida de forma duradoura.",

    "Je mérite le repos même lorsque tout n’est pas terminé.":
      "Mereço descansar mesmo quando nem tudo está terminado.",

    "Je transforme mon sens du détail en force plutôt qu’en pression.":
      "Transformo minha atenção aos detalhes em força, em vez de pressão.",

    "Je peux faire confiance à la vie sans vouloir tout contrôler.":
      "Posso confiar na vida sem querer controlar tudo.",

    "Je reconnais la valeur de mes efforts autant que celle de mes résultats.":
      "Reconheço o valor dos meus esforços tanto quanto o dos meus resultados.",

    /* INTENTION */

    "Simplifier une responsabilité devenue inutilement compliquée.":
      "Simplifique uma responsabilidade que se tornou desnecessariamente complicada.",

    "Remplacer l’autocritique par une observation plus constructive.":
      "Substitua a autocrítica por uma observação mais construtiva.",

    "Créer une routine qui soutient réellement votre bien-être.":
      "Crie uma rotina que realmente favoreça seu bem-estar.",

    "Accepter qu’une solution suffisamment bonne puisse être la meilleure.":
      "Aceite que uma solução suficientemente boa pode ser a melhor.",

    "Vous libérer d’une tâche ou d’une attente qui vous épuise.":
      "Liberte-se de uma tarefa ou expectativa que está esgotando você.",

    "Accorder autant d’importance à votre repos qu’à votre productivité.":
      "Dê ao seu descanso a mesma importância que dá à sua produtividade.",

    /* AFFIRMATION */

    "Je suis digne de respect même lorsque je ne suis pas parfaite.":
      "Mereço respeito mesmo quando não sou perfeito.",

    "Mon sens de l’organisation m’aide sans avoir à me limiter.":
      "Meu senso de organização me ajuda sem precisar me limitar.",

    "Je peux avancer étape par étape sans connaître tout le chemin.":
      "Posso avançar passo a passo sem conhecer todo o caminho.",

    "Je mérite de célébrer les progrès que j’ai déjà accomplis.":
      "Mereço celebrar os progressos que já alcancei.",

    "Je fais confiance à ma capacité de trouver des solutions concrètes.":
      "Confio em minha capacidade de encontrar soluções concretas.",

    "Je libère la pression qui ne m’aide plus à évoluer.":
      "Liberto a pressão que já não ajuda minha evolução.",

    /* MESSAGE */

    "Ce mois-ci, une amélioration simple pourrait avoir davantage d’effet qu’une transformation complète.":
      "Neste mês, uma melhoria simples poderá ter mais efeito do que uma transformação completa.",

    "Votre regard précis devient une force lorsque vous l’utilisez pour ajuster plutôt que pour vous juger.":
      "Seu olhar atento se torna uma força quando você o utiliza para fazer ajustes em vez de se julgar.",

    "Vous n’avez pas besoin de tout réparer pour mériter un moment de paix.":
      "Você não precisa consertar tudo para merecer um momento de paz.",

    "Une nouvelle organisation pourrait alléger autant votre esprit que votre quotidien.":
      "Uma nova organização poderá aliviar tanto sua mente quanto sua vida cotidiana.",

    "La perfection vous demande toujours davantage, tandis que la progression vous permet enfin d’avancer.":
      "A perfeição sempre exige mais de você, enquanto o progresso finalmente permite que avance.",

    "Vous êtes invité à reconnaître tout ce que vous accomplissez déjà avec discrétion et constance.":
      "Você é convidado a reconhecer tudo o que já realiza com discrição e constância.",
  },
};
/* =========================================================
   BALANCE — TRANSLATIONS
========================================================= */

const MANTRA_BALANCE_TRANSLATIONS = {
  en: {
    /* MANTRA */

    "Je crée l’harmonie sans sacrifier ma propre vérité.":
      "I create harmony without sacrificing my own truth.",

    "Je peux choisir clairement sans perdre ma douceur.":
      "I can make clear choices without losing my gentleness.",

    "Mes besoins méritent autant d’attention que ceux des autres.":
      "My needs deserve as much attention as those of others.",

    "Je construis des relations fondées sur l’équilibre et la réciprocité.":
      "I build relationships based on balance and reciprocity.",

    "Je mérite une paix qui ne dépend pas de mon silence.":
      "I deserve peace that does not depend on my silence.",

    "Je reste fidèle à moi-même dans chacune de mes décisions.":
      "I remain true to myself in every decision I make.",

    /* INTENTION */

    "Prendre une décision en vous appuyant d’abord sur vos propres besoins.":
      "Make a decision by first considering your own needs.",

    "Rétablir l’équilibre dans une relation ou une responsabilité.":
      "Restore balance in a relationship or responsibility.",

    "Exprimer votre désaccord sans chercher immédiatement à l’adoucir.":
      "Express your disagreement without immediately trying to soften it.",

    "Créer davantage de beauté et de calme dans votre environnement.":
      "Create more beauty and calm in your environment.",

    "Distinguer la véritable harmonie de l’évitement du conflit.":
      "Distinguish genuine harmony from conflict avoidance.",

    "Choisir ce qui vous ressemble plutôt que ce qui plaît à tout le monde.":
      "Choose what reflects who you are rather than what pleases everyone.",

    /* AFFIRMATION */

    "Je peux être aimée sans renoncer à mes limites.":
      "I can be loved without giving up my boundaries.",

    "Mes décisions deviennent plus simples lorsque je respecte mes valeurs.":
      "My decisions become easier when I respect my values.",

    "Je mérite des relations où les efforts sont partagés.":
      "I deserve relationships where effort is shared.",

    "Je sais créer la paix sans me rendre invisible.":
      "I know how to create peace without making myself invisible.",

    "Mon opinion possède de la valeur même lorsqu’elle dérange.":
      "My opinion has value even when it makes others uncomfortable.",

    "Je fais confiance à mon sens naturel de la justice et de l’équilibre.":
      "I trust my natural sense of justice and balance.",

    /* MESSAGE */

    "Ce mois-ci, une décision importante pourrait devenir évidente lorsque vous cesserez de chercher l’accord de tous.":
      "This month, an important decision could become obvious when you stop seeking everyone's agreement.",

    "L’harmonie véritable commence lorsque votre propre voix possède une place égale dans l’échange.":
      "True harmony begins when your own voice has an equal place in the conversation.",

    "Une relation pourrait gagner en profondeur grâce à une conversation honnête et respectueuse.":
      "A relationship could deepen through an honest and respectful conversation.",

    "Votre douceur est précieuse, mais elle ne vous oblige pas à accepter ce qui vous déséquilibre.":
      "Your gentleness is precious, but it does not require you to accept what throws you off balance.",

    "Un choix esthétique, relationnel ou personnel pourrait raviver votre sentiment d’alignement.":
      "An aesthetic, relational, or personal choice could renew your sense of alignment.",

    "Vous êtes invité à créer une paix qui ne demande plus votre effacement.":
      "You are invited to create a peace that no longer requires you to erase yourself.",
  },

  es: {
    /* MANTRA */

    "Je crée l’harmonie sans sacrifier ma propre vérité.":
      "Creo armonía sin sacrificar mi propia verdad.",

    "Je peux choisir clairement sans perdre ma douceur.":
      "Puedo elegir con claridad sin perder mi dulzura.",

    "Mes besoins méritent autant d’attention que ceux des autres.":
      "Mis necesidades merecen tanta atención como las de los demás.",

    "Je construis des relations fondées sur l’équilibre et la réciprocité.":
      "Construyo relaciones basadas en el equilibrio y la reciprocidad.",

    "Je mérite une paix qui ne dépend pas de mon silence.":
      "Merezco una paz que no dependa de mi silencio.",

    "Je reste fidèle à moi-même dans chacune de mes décisions.":
      "Permanezco fiel a mí mismo en cada una de mis decisiones.",

    /* INTENTION */

    "Prendre une décision en vous appuyant d’abord sur vos propres besoins.":
      "Toma una decisión apoyándote primero en tus propias necesidades.",

    "Rétablir l’équilibre dans une relation ou une responsabilité.":
      "Restablece el equilibrio en una relación o una responsabilidad.",

    "Exprimer votre désaccord sans chercher immédiatement à l’adoucir.":
      "Expresa tu desacuerdo sin intentar suavizarlo inmediatamente.",

    "Créer davantage de beauté et de calme dans votre environnement.":
      "Crea más belleza y calma en tu entorno.",

    "Distinguer la véritable harmonie de l’évitement du conflit.":
      "Distingue la verdadera armonía de la evitación del conflicto.",

    "Choisir ce qui vous ressemble plutôt que ce qui plaît à tout le monde.":
      "Elige aquello que realmente te representa en lugar de lo que agrada a todo el mundo.",

    /* AFFIRMATION */

    "Je peux être aimée sans renoncer à mes limites.":
      "Puedo ser amado sin renunciar a mis límites.",

    "Mes décisions deviennent plus simples lorsque je respecte mes valeurs.":
      "Mis decisiones se vuelven más sencillas cuando respeto mis valores.",

    "Je mérite des relations où les efforts sont partagés.":
      "Merezco relaciones en las que los esfuerzos sean compartidos.",

    "Je sais créer la paix sans me rendre invisible.":
      "Sé crear paz sin volverme invisible.",

    "Mon opinion possède de la valeur même lorsqu’elle dérange.":
      "Mi opinión tiene valor incluso cuando incomoda.",

    "Je fais confiance à mon sens naturel de la justice et de l’équilibre.":
      "Confío en mi sentido natural de la justicia y el equilibrio.",

    /* MESSAGE */

    "Ce mois-ci, une décision importante pourrait devenir évidente lorsque vous cesserez de chercher l’accord de tous.":
      "Este mes, una decisión importante podría volverse evidente cuando dejes de buscar el acuerdo de todos.",

    "L’harmonie véritable commence lorsque votre propre voix possède une place égale dans l’échange.":
      "La verdadera armonía comienza cuando tu propia voz ocupa un lugar igual dentro del intercambio.",

    "Une relation pourrait gagner en profondeur grâce à une conversation honnête et respectueuse.":
      "Una relación podría ganar profundidad gracias a una conversación honesta y respetuosa.",

    "Votre douceur est précieuse, mais elle ne vous oblige pas à accepter ce qui vous déséquilibre.":
      "Tu dulzura es valiosa, pero no te obliga a aceptar aquello que rompe tu equilibrio.",

    "Un choix esthétique, relationnel ou personnel pourrait raviver votre sentiment d’alignement.":
      "Una elección estética, relacional o personal podría reavivar tu sensación de armonía interior.",

    "Vous êtes invité à créer une paix qui ne demande plus votre effacement.":
      "Estás invitado a crear una paz que ya no requiera que te borres a ti mismo.",
  },

  de: {
    /* MANTRA */

    "Je crée l’harmonie sans sacrifier ma propre vérité.":
      "Ich schaffe Harmonie, ohne meine eigene Wahrheit zu opfern.",

    "Je peux choisir clairement sans perdre ma douceur.":
      "Ich kann klare Entscheidungen treffen, ohne meine Sanftheit zu verlieren.",

    "Mes besoins méritent autant d’attention que ceux des autres.":
      "Meine Bedürfnisse verdienen ebenso viel Aufmerksamkeit wie die der anderen.",

    "Je construis des relations fondées sur l’équilibre et la réciprocité.":
      "Ich baue Beziehungen auf, die auf Gleichgewicht und Gegenseitigkeit beruhen.",

    "Je mérite une paix qui ne dépend pas de mon silence.":
      "Ich verdiene Frieden, der nicht von meinem Schweigen abhängt.",

    "Je reste fidèle à moi-même dans chacune de mes décisions.":
      "Ich bleibe mir bei jeder meiner Entscheidungen treu.",

    /* INTENTION */

    "Prendre une décision en vous appuyant d’abord sur vos propres besoins.":
      "Treffen Sie eine Entscheidung, indem Sie zunächst Ihre eigenen Bedürfnisse berücksichtigen.",

    "Rétablir l’équilibre dans une relation ou une responsabilité.":
      "Stellen Sie das Gleichgewicht in einer Beziehung oder Verantwortung wieder her.",

    "Exprimer votre désaccord sans chercher immédiatement à l’adoucir.":
      "Drücken Sie Ihre Meinungsverschiedenheit aus, ohne sie sofort abschwächen zu wollen.",

    "Créer davantage de beauté et de calme dans votre environnement.":
      "Schaffen Sie mehr Schönheit und Ruhe in Ihrer Umgebung.",

    "Distinguer la véritable harmonie de l’évitement du conflit.":
      "Unterscheiden Sie echte Harmonie von Konfliktvermeidung.",

    "Choisir ce qui vous ressemble plutôt que ce qui plaît à tout le monde.":
      "Wählen Sie das, was wirklich zu Ihnen passt, statt das, was allen gefällt.",

    /* AFFIRMATION */

    "Je peux être aimée sans renoncer à mes limites.":
      "Ich kann geliebt werden, ohne meine Grenzen aufzugeben.",

    "Mes décisions deviennent plus simples lorsque je respecte mes valeurs.":
      "Meine Entscheidungen werden einfacher, wenn ich meine Werte respektiere.",

    "Je mérite des relations où les efforts sont partagés.":
      "Ich verdiene Beziehungen, in denen die Anstrengungen geteilt werden.",

    "Je sais créer la paix sans me rendre invisible.":
      "Ich kann Frieden schaffen, ohne mich selbst unsichtbar zu machen.",

    "Mon opinion possède de la valeur même lorsqu’elle dérange.":
      "Meine Meinung hat einen Wert, auch wenn sie andere stört.",

    "Je fais confiance à mon sens naturel de la justice et de l’équilibre.":
      "Ich vertraue meinem natürlichen Sinn für Gerechtigkeit und Ausgleich.",

    /* MESSAGE */

    "Ce mois-ci, une décision importante pourrait devenir évidente lorsque vous cesserez de chercher l’accord de tous.":
      "In diesem Monat könnte eine wichtige Entscheidung offensichtlich werden, sobald Sie aufhören, die Zustimmung aller zu suchen.",

    "L’harmonie véritable commence lorsque votre propre voix possède une place égale dans l’échange.":
      "Wahre Harmonie beginnt, wenn auch Ihre eigene Stimme einen gleichberechtigten Platz im Austausch erhält.",

    "Une relation pourrait gagner en profondeur grâce à une conversation honnête et respectueuse.":
      "Eine Beziehung könnte durch ein ehrliches und respektvolles Gespräch an Tiefe gewinnen.",

    "Votre douceur est précieuse, mais elle ne vous oblige pas à accepter ce qui vous déséquilibre.":
      "Ihre Sanftheit ist wertvoll, verpflichtet Sie aber nicht dazu, das zu akzeptieren, was Sie aus dem Gleichgewicht bringt.",

    "Un choix esthétique, relationnel ou personnel pourrait raviver votre sentiment d’alignement.":
      "Eine ästhetische, zwischenmenschliche oder persönliche Entscheidung könnte Ihr Gefühl innerer Stimmigkeit neu beleben.",

    "Vous êtes invité à créer une paix qui ne demande plus votre effacement.":
      "Sie sind eingeladen, einen Frieden zu schaffen, der nicht länger verlangt, dass Sie sich selbst zurücknehmen.",
  },

  it: {
    /* MANTRA */

    "Je crée l’harmonie sans sacrifier ma propre vérité.":
      "Creo armonia senza sacrificare la mia verità.",

    "Je peux choisir clairement sans perdre ma douceur.":
      "Posso scegliere con chiarezza senza perdere la mia dolcezza.",

    "Mes besoins méritent autant d’attention que ceux des autres.":
      "I miei bisogni meritano la stessa attenzione di quelli degli altri.",

    "Je construis des relations fondées sur l’équilibre et la réciprocité.":
      "Costruisco relazioni fondate sull’equilibrio e sulla reciprocità.",

    "Je mérite une paix qui ne dépend pas de mon silence.":
      "Merito una pace che non dipenda dal mio silenzio.",

    "Je reste fidèle à moi-même dans chacune de mes décisions.":
      "Rimango fedele a me stesso in ogni mia decisione.",

    /* INTENTION */

    "Prendre une décision en vous appuyant d’abord sur vos propres besoins.":
      "Prendete una decisione partendo innanzitutto dai vostri bisogni.",

    "Rétablir l’équilibre dans une relation ou une responsabilité.":
      "Ristabilite l’equilibrio in una relazione o in una responsabilità.",

    "Exprimer votre désaccord sans chercher immédiatement à l’adoucir.":
      "Esprimete il vostro disaccordo senza cercare immediatamente di attenuarlo.",

    "Créer davantage de beauté et de calme dans votre environnement.":
      "Create più bellezza e tranquillità nel vostro ambiente.",

    "Distinguer la véritable harmonie de l’évitement du conflit.":
      "Distinguete la vera armonia dall’evitare il conflitto.",

    "Choisir ce qui vous ressemble plutôt que ce qui plaît à tout le monde.":
      "Scegliete ciò che vi rappresenta veramente invece di ciò che piace a tutti.",

    /* AFFIRMATION */

    "Je peux être aimée sans renoncer à mes limites.":
      "Posso essere amato senza rinunciare ai miei limiti.",

    "Mes décisions deviennent plus simples lorsque je respecte mes valeurs.":
      "Le mie decisioni diventano più semplici quando rispetto i miei valori.",

    "Je mérite des relations où les efforts sont partagés.":
      "Merito relazioni in cui gli sforzi siano condivisi.",

    "Je sais créer la paix sans me rendre invisible.":
      "So creare pace senza rendermi invisibile.",

    "Mon opinion possède de la valeur même lorsqu’elle dérange.":
      "La mia opinione ha valore anche quando può disturbare.",

    "Je fais confiance à mon sens naturel de la justice et de l’équilibre.":
      "Mi fido del mio naturale senso della giustizia e dell’equilibrio.",

    /* MESSAGE */

    "Ce mois-ci, une décision importante pourrait devenir évidente lorsque vous cesserez de chercher l’accord de tous.":
      "Questo mese, una decisione importante potrebbe diventare evidente quando smetterete di cercare l’accordo di tutti.",

    "L’harmonie véritable commence lorsque votre propre voix possède une place égale dans l’échange.":
      "La vera armonia comincia quando anche la vostra voce occupa uno spazio uguale nello scambio.",

    "Une relation pourrait gagner en profondeur grâce à une conversation honnête et respectueuse.":
      "Una relazione potrebbe diventare più profonda grazie a una conversazione sincera e rispettosa.",

    "Votre douceur est précieuse, mais elle ne vous oblige pas à accepter ce qui vous déséquilibre.":
      "La vostra dolcezza è preziosa, ma non vi obbliga ad accettare ciò che vi fa perdere l’equilibrio.",

    "Un choix esthétique, relationnel ou personnel pourrait raviver votre sentiment d’alignement.":
      "Una scelta estetica, relazionale o personale potrebbe ravvivare il vostro senso di armonia interiore.",

    "Vous êtes invité à créer une paix qui ne demande plus votre effacement.":
      "Siete invitati a creare una pace che non richieda più di mettere voi stessi da parte.",
  },

  pt: {
    /* MANTRA */

    "Je crée l’harmonie sans sacrifier ma propre vérité.":
      "Crio harmonia sem sacrificar minha própria verdade.",

    "Je peux choisir clairement sans perdre ma douceur.":
      "Posso escolher com clareza sem perder minha delicadeza.",

    "Mes besoins méritent autant d’attention que ceux des autres.":
      "Minhas necessidades merecem tanta atenção quanto as dos outros.",

    "Je construis des relations fondées sur l’équilibre et la réciprocité.":
      "Construo relacionamentos baseados no equilíbrio e na reciprocidade.",

    "Je mérite une paix qui ne dépend pas de mon silence.":
      "Mereço uma paz que não dependa do meu silêncio.",

    "Je reste fidèle à moi-même dans chacune de mes décisions.":
      "Permaneço fiel a mim mesmo em cada uma das minhas decisões.",

    /* INTENTION */

    "Prendre une décision en vous appuyant d’abord sur vos propres besoins.":
      "Tome uma decisão considerando primeiro suas próprias necessidades.",

    "Rétablir l’équilibre dans une relation ou une responsabilité.":
      "Restabeleça o equilíbrio em um relacionamento ou em uma responsabilidade.",

    "Exprimer votre désaccord sans chercher immédiatement à l’adoucir.":
      "Expresse sua discordância sem tentar suavizá-la imediatamente.",

    "Créer davantage de beauté et de calme dans votre environnement.":
      "Crie mais beleza e tranquilidade em seu ambiente.",

    "Distinguer la véritable harmonie de l’évitement du conflit.":
      "Diferencie a verdadeira harmonia da simples tentativa de evitar conflitos.",

    "Choisir ce qui vous ressemble plutôt que ce qui plaît à tout le monde.":
      "Escolha aquilo que realmente combina com você, em vez do que agrada a todos.",

    /* AFFIRMATION */

    "Je peux être aimée sans renoncer à mes limites.":
      "Posso ser amado sem abrir mão dos meus limites.",

    "Mes décisions deviennent plus simples lorsque je respecte mes valeurs.":
      "Minhas decisões se tornam mais simples quando respeito meus valores.",

    "Je mérite des relations où les efforts sont partagés.":
      "Mereço relacionamentos nos quais os esforços sejam compartilhados.",

    "Je sais créer la paix sans me rendre invisible.":
      "Sei criar paz sem me tornar invisível.",

    "Mon opinion possède de la valeur même lorsqu’elle dérange.":
      "Minha opinião tem valor mesmo quando incomoda.",

    "Je fais confiance à mon sens naturel de la justice et de l’équilibre.":
      "Confio em meu senso natural de justiça e equilíbrio.",

    /* MESSAGE */

    "Ce mois-ci, une décision importante pourrait devenir évidente lorsque vous cesserez de chercher l’accord de tous.":
      "Neste mês, uma decisão importante poderá se tornar evidente quando você deixar de buscar a aprovação de todos.",

    "L’harmonie véritable commence lorsque votre propre voix possède une place égale dans l’échange.":
      "A verdadeira harmonia começa quando sua própria voz ocupa um lugar de igual importância na conversa.",

    "Une relation pourrait gagner en profondeur grâce à une conversation honnête et respectueuse.":
      "Um relacionamento poderá ganhar mais profundidade por meio de uma conversa sincera e respeitosa.",

    "Votre douceur est précieuse, mais elle ne vous oblige pas à accepter ce qui vous déséquilibre.":
      "Sua delicadeza é valiosa, mas não obriga você a aceitar aquilo que tira seu equilíbrio.",

    "Un choix esthétique, relationnel ou personnel pourrait raviver votre sentiment d’alignement.":
      "Uma escolha estética, relacional ou pessoal poderá renovar sua sensação de alinhamento.",

    "Vous êtes invité à créer une paix qui ne demande plus votre effacement.":
      "Você é convidado a criar uma paz que não exija mais que você se apague.",
  },
};
/* =========================================================
   SCORPION — TRANSLATIONS
========================================================= */

const MANTRA_SCORPION_TRANSLATIONS = {
  en: {
    /* MANTRA */

    "Je transforme ce qui me blesse en puissance consciente.":
      "I transform what hurts me into conscious strength.",

    "Ma profondeur est une force lorsque je l’accueille sans peur.":
      "My depth is a strength when I welcome it without fear.",

    "Je libère ce qui n’a plus de pouvoir sur mon avenir.":
      "I release what no longer has power over my future.",

    "Je fais confiance à mon intuition sans nourrir mes inquiétudes.":
      "I trust my intuition without feeding my fears.",

    "Je mérite des liens sincères, profonds et réciproques.":
      "I deserve sincere, deep, and reciprocal relationships.",

    "Je renais chaque fois que je choisis la vérité plutôt que la peur.":
      "I am reborn each time I choose truth over fear.",

    /* INTENTION */

    "Libérer une émotion ou une situation devenue trop lourde.":
      "Release an emotion or situation that has become too heavy.",

    "Transformer une peur en compréhension plus profonde.":
      "Transform a fear into deeper understanding.",

    "Choisir la transparence dans une relation importante.":
      "Choose transparency in an important relationship.",

    "Protéger votre énergie sans construire de murs inutiles.":
      "Protect your energy without building unnecessary walls.",

    "Accueillir un changement qui vous rapproche de votre vérité.":
      "Welcome a change that brings you closer to your truth.",

    "Utiliser votre intuition pour avancer plutôt que pour anticiper le pire.":
      "Use your intuition to move forward rather than anticipate the worst.",

    /* AFFIRMATION */

    "Je suis capable de traverser les transformations avec courage.":
      "I am capable of moving through transformation with courage.",

    "Ma vulnérabilité ne diminue pas ma puissance.":
      "My vulnerability does not diminish my strength.",

    "Je mérite une confiance qui se construit dans la vérité.":
      "I deserve trust that is built on truth.",

    "Je peux laisser partir sans perdre une partie de moi-même.":
      "I can let go without losing a part of myself.",

    "Mon intuition m’aide à reconnaître ce qui demeure caché.":
      "My intuition helps me recognize what remains hidden.",

    "Je transforme mon intensité en force créatrice et réparatrice.":
      "I transform my intensity into creative and restorative strength.",

    /* MESSAGE */

    "Ce mois-ci, une transformation intérieure pourrait modifier profondément votre manière d’aborder une situation.":
      "This month, an inner transformation could profoundly change the way you approach a situation.",

    "Ce que vous acceptez de regarder avec honnêteté perd progressivement son pouvoir sur vous.":
      "What you are willing to face honestly gradually loses its power over you.",

    "Une vérité émotionnelle pourrait vous libérer davantage que le contrôle que vous tentez de maintenir.":
      "An emotional truth could free you more than the control you are trying to maintain.",

    "Votre intuition est particulièrement précieuse lorsqu’elle reste séparée de vos anciennes peurs.":
      "Your intuition is especially valuable when it remains separate from your old fears.",

    "Une relation pourrait devenir plus solide si chacun accepte de déposer ses défenses.":
      "A relationship could become stronger if both people are willing to lower their defenses.",

    "Vous êtes invité à laisser mourir une ancienne version de vous afin de faire place à celle qui souhaite émerger.":
      "You are invited to let an old version of yourself fall away so that the one ready to emerge can take its place.",
  },

  es: {
    /* MANTRA */

    "Je transforme ce qui me blesse en puissance consciente.":
      "Transformo aquello que me hiere en fuerza consciente.",

    "Ma profondeur est une force lorsque je l’accueille sans peur.":
      "Mi profundidad es una fortaleza cuando la recibo sin miedo.",

    "Je libère ce qui n’a plus de pouvoir sur mon avenir.":
      "Libero aquello que ya no tiene poder sobre mi futuro.",

    "Je fais confiance à mon intuition sans nourrir mes inquiétudes.":
      "Confío en mi intuición sin alimentar mis preocupaciones.",

    "Je mérite des liens sincères, profonds et réciproques.":
      "Merezco vínculos sinceros, profundos y recíprocos.",

    "Je renais chaque fois que je choisis la vérité plutôt que la peur.":
      "Renazco cada vez que elijo la verdad en lugar del miedo.",

    /* INTENTION */

    "Libérer une émotion ou une situation devenue trop lourde.":
      "Libera una emoción o una situación que se ha vuelto demasiado pesada.",

    "Transformer une peur en compréhension plus profonde.":
      "Transforma un miedo en una comprensión más profunda.",

    "Choisir la transparence dans une relation importante.":
      "Elige la transparencia en una relación importante.",

    "Protéger votre énergie sans construire de murs inutiles.":
      "Protege tu energía sin construir muros innecesarios.",

    "Accueillir un changement qui vous rapproche de votre vérité.":
      "Acoge un cambio que te acerque a tu verdad.",

    "Utiliser votre intuition pour avancer plutôt que pour anticiper le pire.":
      "Utiliza tu intuición para avanzar en lugar de anticipar lo peor.",

    /* AFFIRMATION */

    "Je suis capable de traverser les transformations avec courage.":
      "Soy capaz de atravesar las transformaciones con valentía.",

    "Ma vulnérabilité ne diminue pas ma puissance.":
      "Mi vulnerabilidad no disminuye mi fuerza.",

    "Je mérite une confiance qui se construit dans la vérité.":
      "Merezco una confianza que se construya sobre la verdad.",

    "Je peux laisser partir sans perdre une partie de moi-même.":
      "Puedo dejar ir sin perder una parte de mí mismo.",

    "Mon intuition m’aide à reconnaître ce qui demeure caché.":
      "Mi intuición me ayuda a reconocer aquello que permanece oculto.",

    "Je transforme mon intensité en force créatrice et réparatrice.":
      "Transformo mi intensidad en una fuerza creativa y reparadora.",

    /* MESSAGE */

    "Ce mois-ci, une transformation intérieure pourrait modifier profondément votre manière d’aborder une situation.":
      "Este mes, una transformación interior podría modificar profundamente tu manera de afrontar una situación.",

    "Ce que vous acceptez de regarder avec honnêteté perd progressivement son pouvoir sur vous.":
      "Aquello que aceptas mirar con honestidad pierde progresivamente su poder sobre ti.",

    "Une vérité émotionnelle pourrait vous libérer davantage que le contrôle que vous tentez de maintenir.":
      "Una verdad emocional podría liberarte más que el control que intentas mantener.",

    "Votre intuition est particulièrement précieuse lorsqu’elle reste séparée de vos anciennes peurs.":
      "Tu intuición es especialmente valiosa cuando permanece separada de tus antiguos miedos.",

    "Une relation pourrait devenir plus solide si chacun accepte de déposer ses défenses.":
      "Una relación podría volverse más sólida si ambos aceptan bajar sus defensas.",

    "Vous êtes invité à laisser mourir une ancienne version de vous afin de faire place à celle qui souhaite émerger.":
      "Estás invitado a dejar atrás una antigua versión de ti para dar espacio a la que desea emerger.",
  },

  de: {
    /* MANTRA */

    "Je transforme ce qui me blesse en puissance consciente.":
      "Ich verwandle das, was mich verletzt, in bewusste Stärke.",

    "Ma profondeur est une force lorsque je l’accueille sans peur.":
      "Meine Tiefe ist eine Stärke, wenn ich sie ohne Angst annehme.",

    "Je libère ce qui n’a plus de pouvoir sur mon avenir.":
      "Ich lasse los, was keine Macht mehr über meine Zukunft hat.",

    "Je fais confiance à mon intuition sans nourrir mes inquiétudes.":
      "Ich vertraue meiner Intuition, ohne meine Sorgen weiter zu nähren.",

    "Je mérite des liens sincères, profonds et réciproques.":
      "Ich verdiene aufrichtige, tiefe und gegenseitige Verbindungen.",

    "Je renais chaque fois que je choisis la vérité plutôt que la peur.":
      "Ich werde jedes Mal neu geboren, wenn ich die Wahrheit statt der Angst wähle.",

    /* INTENTION */

    "Libérer une émotion ou une situation devenue trop lourde.":
      "Lassen Sie ein Gefühl oder eine Situation los, die zu belastend geworden ist.",

    "Transformer une peur en compréhension plus profonde.":
      "Verwandeln Sie eine Angst in ein tieferes Verständnis.",

    "Choisir la transparence dans une relation importante.":
      "Entscheiden Sie sich in einer wichtigen Beziehung für Offenheit.",

    "Protéger votre énergie sans construire de murs inutiles.":
      "Schützen Sie Ihre Energie, ohne unnötige Mauern zu errichten.",

    "Accueillir un changement qui vous rapproche de votre vérité.":
      "Nehmen Sie eine Veränderung an, die Sie Ihrer Wahrheit näherbringt.",

    "Utiliser votre intuition pour avancer plutôt que pour anticiper le pire.":
      "Nutzen Sie Ihre Intuition, um voranzukommen, statt das Schlimmste vorauszuahnen.",

    /* AFFIRMATION */

    "Je suis capable de traverser les transformations avec courage.":
      "Ich bin in der Lage, Veränderungen mutig zu durchleben.",

    "Ma vulnérabilité ne diminue pas ma puissance.":
      "Meine Verletzlichkeit mindert meine Stärke nicht.",

    "Je mérite une confiance qui se construit dans la vérité.":
      "Ich verdiene Vertrauen, das auf Wahrheit aufgebaut ist.",

    "Je peux laisser partir sans perdre une partie de moi-même.":
      "Ich kann loslassen, ohne einen Teil von mir selbst zu verlieren.",

    "Mon intuition m’aide à reconnaître ce qui demeure caché.":
      "Meine Intuition hilft mir zu erkennen, was verborgen bleibt.",

    "Je transforme mon intensité en force créatrice et réparatrice.":
      "Ich verwandle meine Intensität in schöpferische und heilende Kraft.",

    /* MESSAGE */

    "Ce mois-ci, une transformation intérieure pourrait modifier profondément votre manière d’aborder une situation.":
      "In diesem Monat könnte eine innere Veränderung Ihre Art, mit einer Situation umzugehen, grundlegend verändern.",

    "Ce que vous acceptez de regarder avec honnêteté perd progressivement son pouvoir sur vous.":
      "Was Sie bereit sind, ehrlich anzusehen, verliert nach und nach seine Macht über Sie.",

    "Une vérité émotionnelle pourrait vous libérer davantage que le contrôle que vous tentez de maintenir.":
      "Eine emotionale Wahrheit könnte Sie stärker befreien als die Kontrolle, die Sie aufrechtzuerhalten versuchen.",

    "Votre intuition est particulièrement précieuse lorsqu’elle reste séparée de vos anciennes peurs.":
      "Ihre Intuition ist besonders wertvoll, wenn sie von Ihren alten Ängsten getrennt bleibt.",

    "Une relation pourrait devenir plus solide si chacun accepte de déposer ses défenses.":
      "Eine Beziehung könnte stabiler werden, wenn beide bereit sind, ihre Schutzmechanismen abzulegen.",

    "Vous êtes invité à laisser mourir une ancienne version de vous afin de faire place à celle qui souhaite émerger.":
      "Sie sind eingeladen, eine alte Version Ihrer selbst loszulassen, damit diejenige Raum bekommt, die jetzt entstehen möchte.",
  },

  it: {
    /* MANTRA */

    "Je transforme ce qui me blesse en puissance consciente.":
      "Trasformo ciò che mi ferisce in forza consapevole.",

    "Ma profondeur est une force lorsque je l’accueille sans peur.":
      "La mia profondità è una forza quando la accolgo senza paura.",

    "Je libère ce qui n’a plus de pouvoir sur mon avenir.":
      "Lascio andare ciò che non ha più potere sul mio futuro.",

    "Je fais confiance à mon intuition sans nourrir mes inquiétudes.":
      "Mi fido della mia intuizione senza alimentare le mie preoccupazioni.",

    "Je mérite des liens sincères, profonds et réciproques.":
      "Merito legami sinceri, profondi e reciproci.",

    "Je renais chaque fois que je choisis la vérité plutôt que la peur.":
      "Rinasco ogni volta che scelgo la verità invece della paura.",

    /* INTENTION */

    "Libérer une émotion ou une situation devenue trop lourde.":
      "Lasciate andare un’emozione o una situazione diventata troppo pesante.",

    "Transformer une peur en compréhension plus profonde.":
      "Trasformate una paura in una comprensione più profonda.",

    "Choisir la transparence dans une relation importante.":
      "Scegliete la trasparenza in una relazione importante.",

    "Protéger votre énergie sans construire de murs inutiles.":
      "Proteggete la vostra energia senza costruire muri inutili.",

    "Accueillir un changement qui vous rapproche de votre vérité.":
      "Accogliete un cambiamento che vi avvicina alla vostra verità.",

    "Utiliser votre intuition pour avancer plutôt que pour anticiper le pire.":
      "Utilizzate la vostra intuizione per avanzare invece di anticipare il peggio.",

    /* AFFIRMATION */

    "Je suis capable de traverser les transformations avec courage.":
      "Sono capace di attraversare le trasformazioni con coraggio.",

    "Ma vulnérabilité ne diminue pas ma puissance.":
      "La mia vulnerabilità non diminuisce la mia forza.",

    "Je mérite une confiance qui se construit dans la vérité.":
      "Merito una fiducia costruita sulla verità.",

    "Je peux laisser partir sans perdre une partie de moi-même.":
      "Posso lasciare andare senza perdere una parte di me stesso.",

    "Mon intuition m’aide à reconnaître ce qui demeure caché.":
      "La mia intuizione mi aiuta a riconoscere ciò che rimane nascosto.",

    "Je transforme mon intensité en force créatrice et réparatrice.":
      "Trasformo la mia intensità in una forza creativa e rigeneratrice.",

    /* MESSAGE */

    "Ce mois-ci, une transformation intérieure pourrait modifier profondément votre manière d’aborder une situation.":
      "Questo mese, una trasformazione interiore potrebbe cambiare profondamente il vostro modo di affrontare una situazione.",

    "Ce que vous acceptez de regarder avec honnêteté perd progressivement son pouvoir sur vous.":
      "Ciò che accettate di guardare con sincerità perde progressivamente il suo potere su di voi.",

    "Une vérité émotionnelle pourrait vous libérer davantage que le contrôle que vous tentez de maintenir.":
      "Una verità emotiva potrebbe liberarvi più del controllo che cercate di mantenere.",

    "Votre intuition est particulièrement précieuse lorsqu’elle reste séparée de vos anciennes peurs.":
      "La vostra intuizione è particolarmente preziosa quando rimane separata dalle vostre vecchie paure.",

    "Une relation pourrait devenir plus solide si chacun accepte de déposer ses défenses.":
      "Una relazione potrebbe diventare più solida se entrambi accettano di abbassare le proprie difese.",

    "Vous êtes invité à laisser mourir une ancienne version de vous afin de faire place à celle qui souhaite émerger.":
      "Siete invitati a lasciare andare una vecchia versione di voi stessi per fare spazio a quella che desidera emergere.",
  },

  pt: {
    /* MANTRA */

    "Je transforme ce qui me blesse en puissance consciente.":
      "Transformo aquilo que me fere em força consciente.",

    "Ma profondeur est une force lorsque je l’accueille sans peur.":
      "Minha profundidade é uma força quando a acolho sem medo.",

    "Je libère ce qui n’a plus de pouvoir sur mon avenir.":
      "Liberto aquilo que já não tem poder sobre meu futuro.",

    "Je fais confiance à mon intuition sans nourrir mes inquiétudes.":
      "Confio em minha intuição sem alimentar minhas preocupações.",

    "Je mérite des liens sincères, profonds et réciproques.":
      "Mereço vínculos sinceros, profundos e recíprocos.",

    "Je renais chaque fois que je choisis la vérité plutôt que la peur.":
      "Renasço cada vez que escolho a verdade em vez do medo.",

    /* INTENTION */

    "Libérer une émotion ou une situation devenue trop lourde.":
      "Libere uma emoção ou situação que se tornou pesada demais.",

    "Transformer une peur en compréhension plus profonde.":
      "Transforme um medo em uma compreensão mais profunda.",

    "Choisir la transparence dans une relation importante.":
      "Escolha a transparência em um relacionamento importante.",

    "Protéger votre énergie sans construire de murs inutiles.":
      "Proteja sua energia sem construir barreiras desnecessárias.",

    "Accueillir un changement qui vous rapproche de votre vérité.":
      "Acolha uma mudança que aproxime você de sua verdade.",

    "Utiliser votre intuition pour avancer plutôt que pour anticiper le pire.":
      "Use sua intuição para avançar em vez de antecipar o pior.",

    /* AFFIRMATION */

    "Je suis capable de traverser les transformations avec courage.":
      "Sou capaz de atravessar transformações com coragem.",

    "Ma vulnérabilité ne diminue pas ma puissance.":
      "Minha vulnerabilidade não diminui minha força.",

    "Je mérite une confiance qui se construit dans la vérité.":
      "Mereço uma confiança construída sobre a verdade.",

    "Je peux laisser partir sans perdre une partie de moi-même.":
      "Posso deixar ir sem perder uma parte de mim.",

    "Mon intuition m’aide à reconnaître ce qui demeure caché.":
      "Minha intuição me ajuda a reconhecer aquilo que permanece oculto.",

    "Je transforme mon intensité en force créatrice et réparatrice.":
      "Transformo minha intensidade em força criativa e restauradora.",

    /* MESSAGE */

    "Ce mois-ci, une transformation intérieure pourrait modifier profondément votre manière d’aborder une situation.":
      "Neste mês, uma transformação interior poderá modificar profundamente sua maneira de lidar com uma situação.",

    "Ce que vous acceptez de regarder avec honnêteté perd progressivement son pouvoir sur vous.":
      "Aquilo que você aceita observar com honestidade perde progressivamente seu poder sobre você.",

    "Une vérité émotionnelle pourrait vous libérer davantage que le contrôle que vous tentez de maintenir.":
      "Uma verdade emocional poderá libertar você mais do que o controle que tenta manter.",

    "Votre intuition est particulièrement précieuse lorsqu’elle reste séparée de vos anciennes peurs.":
      "Sua intuição é especialmente valiosa quando permanece separada de seus antigos medos.",

    "Une relation pourrait devenir plus solide si chacun accepte de déposer ses défenses.":
      "Um relacionamento poderá se tornar mais sólido se ambos aceitarem baixar suas defesas.",

    "Vous êtes invité à laisser mourir une ancienne version de vous afin de faire place à celle qui souhaite émerger.":
      "Você é convidado a deixar para trás uma antiga versão de si mesmo para abrir espaço para aquela que deseja emergir.",
  },
};
/* =========================================================
   SAGITTAIRE — TRANSLATIONS
========================================================= */

const MANTRA_SAGITTAIRE_TRANSLATIONS = {
  en: {
    /* MANTRA */

    "Je suis libre lorsque mes choix respectent ma vérité profonde.":
      "I am free when my choices honor my deepest truth.",

    "Chaque expérience m’aide à élargir ma vision de la vie.":
      "Every experience helps me broaden my vision of life.",

    "Je poursuis mes rêves sans fuir les responsabilités qui les rendent possibles.":
      "I pursue my dreams without avoiding the responsibilities that make them possible.",

    "Mon optimisme devient une force lorsque je l’accompagne d’actions concrètes.":
      "My optimism becomes a strength when I support it with concrete actions.",

    "Je mérite un avenir plus vaste que les limites de mon passé.":
      "I deserve a future greater than the limits of my past.",

    "Je fais confiance au chemin même lorsque je ne vois pas encore sa destination.":
      "I trust the path even when I cannot yet see its destination.",

    /* INTENTION */

    "Explorer une possibilité nouvelle tout en gardant un objectif précis.":
      "Explore a new possibility while keeping a clear goal in mind.",

    "Transformer une inspiration en projet concret.":
      "Transform an inspiration into a concrete project.",

    "Élargir votre horizon par une rencontre, une lecture ou une expérience.":
      "Broaden your horizons through a meeting, a book, or an experience.",

    "Faire un choix qui augmente votre sentiment de liberté intérieure.":
      "Make a choice that increases your sense of inner freedom.",

    "Cultiver l’optimisme sans ignorer les détails nécessaires.":
      "Cultivate optimism without ignoring the necessary details.",

    "Vous engager envers un désir qui mérite davantage qu’un enthousiasme passager.":
      "Commit to a desire that deserves more than temporary enthusiasm.",

    /* AFFIRMATION */

    "Je suis capable de créer une vie riche de sens et d’expériences.":
      "I am capable of creating a life rich in meaning and experiences.",

    "Mon enthousiasme attire les possibilités qui correspondent à mon évolution.":
      "My enthusiasm attracts possibilities that support my growth.",

    "Je peux être libre tout en construisant quelque chose de durable.":
      "I can be free while building something lasting.",

    "Je fais confiance à ma capacité de rebondir et d’apprendre.":
      "I trust my ability to bounce back and learn.",

    "Ma vision de l’avenir mérite d’être soutenue par mes actions.":
      "My vision for the future deserves to be supported by my actions.",

    "Je choisis les chemins qui élargissent mon esprit et mon cœur.":
      "I choose paths that expand my mind and my heart.",

    /* MESSAGE */

    "Ce mois-ci, une nouvelle perspective pourrait vous redonner l’élan que vous cherchiez.":
      "This month, a new perspective could restore the momentum you have been seeking.",

    "Votre désir de liberté devient créateur lorsque vous lui donnez une direction concrète.":
      "Your desire for freedom becomes creative when you give it a concrete direction.",

    "Une occasion inattendue pourrait apparaître à travers un échange, un déplacement ou une découverte.":
      "An unexpected opportunity could appear through a conversation, a trip, or a discovery.",

    "Votre optimisme ouvre les portes, mais votre constance vous permettra de les franchir.":
      "Your optimism opens doors, but your consistency will allow you to walk through them.",

    "Une vérité simple pourrait vous aider à abandonner une direction qui ne vous ressemble plus.":
      "A simple truth could help you leave behind a direction that no longer reflects who you are.",

    "Vous êtes invité à croire en un horizon plus vaste tout en posant aujourd’hui le premier geste nécessaire.":
      "You are invited to believe in a broader horizon while taking the first necessary step today.",
  },

  es: {
    /* MANTRA */

    "Je suis libre lorsque mes choix respectent ma vérité profonde.":
      "Soy libre cuando mis decisiones respetan mi verdad más profunda.",

    "Chaque expérience m’aide à élargir ma vision de la vie.":
      "Cada experiencia me ayuda a ampliar mi visión de la vida.",

    "Je poursuis mes rêves sans fuir les responsabilités qui les rendent possibles.":
      "Persigo mis sueños sin huir de las responsabilidades que los hacen posibles.",

    "Mon optimisme devient une force lorsque je l’accompagne d’actions concrètes.":
      "Mi optimismo se convierte en una fortaleza cuando lo acompaño de acciones concretas.",

    "Je mérite un avenir plus vaste que les limites de mon passé.":
      "Merezco un futuro más amplio que los límites de mi pasado.",

    "Je fais confiance au chemin même lorsque je ne vois pas encore sa destination.":
      "Confío en el camino incluso cuando todavía no puedo ver su destino.",

    /* INTENTION */

    "Explorer une possibilité nouvelle tout en gardant un objectif précis.":
      "Explora una nueva posibilidad manteniendo un objetivo claro.",

    "Transformer une inspiration en projet concret.":
      "Transforma una inspiración en un proyecto concreto.",

    "Élargir votre horizon par une rencontre, une lecture ou une expérience.":
      "Amplía tus horizontes mediante un encuentro, una lectura o una experiencia.",

    "Faire un choix qui augmente votre sentiment de liberté intérieure.":
      "Toma una decisión que aumente tu sensación de libertad interior.",

    "Cultiver l’optimisme sans ignorer les détails nécessaires.":
      "Cultiva el optimismo sin ignorar los detalles necesarios.",

    "Vous engager envers un désir qui mérite davantage qu’un enthousiasme passager.":
      "Comprométete con un deseo que merece algo más que un entusiasmo pasajero.",

    /* AFFIRMATION */

    "Je suis capable de créer une vie riche de sens et d’expériences.":
      "Soy capaz de crear una vida rica en sentido y experiencias.",

    "Mon enthousiasme attire les possibilités qui correspondent à mon évolution.":
      "Mi entusiasmo atrae posibilidades que corresponden a mi evolución.",

    "Je peux être libre tout en construisant quelque chose de durable.":
      "Puedo ser libre mientras construyo algo duradero.",

    "Je fais confiance à ma capacité de rebondir et d’apprendre.":
      "Confío en mi capacidad para recuperarme y aprender.",

    "Ma vision de l’avenir mérite d’être soutenue par mes actions.":
      "Mi visión del futuro merece estar respaldada por mis acciones.",

    "Je choisis les chemins qui élargissent mon esprit et mon cœur.":
      "Elijo los caminos que amplían mi mente y mi corazón.",

    /* MESSAGE */

    "Ce mois-ci, une nouvelle perspective pourrait vous redonner l’élan que vous cherchiez.":
      "Este mes, una nueva perspectiva podría devolverte el impulso que estabas buscando.",

    "Votre désir de liberté devient créateur lorsque vous lui donnez une direction concrète.":
      "Tu deseo de libertad se vuelve creativo cuando le das una dirección concreta.",

    "Une occasion inattendue pourrait apparaître à travers un échange, un déplacement ou une découverte.":
      "Una oportunidad inesperada podría aparecer a través de una conversación, un viaje o un descubrimiento.",

    "Votre optimisme ouvre les portes, mais votre constance vous permettra de les franchir.":
      "Tu optimismo abre las puertas, pero tu constancia te permitirá atravesarlas.",

    "Une vérité simple pourrait vous aider à abandonner une direction qui ne vous ressemble plus.":
      "Una verdad sencilla podría ayudarte a abandonar una dirección que ya no te representa.",

    "Vous êtes invité à croire en un horizon plus vaste tout en posant aujourd’hui le premier geste nécessaire.":
      "Estás invitado a creer en un horizonte más amplio mientras das hoy el primer paso necesario.",
  },

  de: {
    /* MANTRA */

    "Je suis libre lorsque mes choix respectent ma vérité profonde.":
      "Ich bin frei, wenn meine Entscheidungen meine tiefste Wahrheit respektieren.",

    "Chaque expérience m’aide à élargir ma vision de la vie.":
      "Jede Erfahrung hilft mir, meinen Blick auf das Leben zu erweitern.",

    "Je poursuis mes rêves sans fuir les responsabilités qui les rendent possibles.":
      "Ich verfolge meine Träume, ohne vor den Verantwortungen davonzulaufen, die sie möglich machen.",

    "Mon optimisme devient une force lorsque je l’accompagne d’actions concrètes.":
      "Mein Optimismus wird zu einer Stärke, wenn ich ihn mit konkreten Handlungen verbinde.",

    "Je mérite un avenir plus vaste que les limites de mon passé.":
      "Ich verdiene eine Zukunft, die größer ist als die Grenzen meiner Vergangenheit.",

    "Je fais confiance au chemin même lorsque je ne vois pas encore sa destination.":
      "Ich vertraue dem Weg, auch wenn ich sein Ziel noch nicht sehen kann.",

    /* INTENTION */

    "Explorer une possibilité nouvelle tout en gardant un objectif précis.":
      "Erkunden Sie eine neue Möglichkeit und behalten Sie dabei ein klares Ziel im Blick.",

    "Transformer une inspiration en projet concret.":
      "Verwandeln Sie eine Inspiration in ein konkretes Projekt.",

    "Élargir votre horizon par une rencontre, une lecture ou une expérience.":
      "Erweitern Sie Ihren Horizont durch eine Begegnung, eine Lektüre oder eine Erfahrung.",

    "Faire un choix qui augmente votre sentiment de liberté intérieure.":
      "Treffen Sie eine Entscheidung, die Ihr Gefühl innerer Freiheit stärkt.",

    "Cultiver l’optimisme sans ignorer les détails nécessaires.":
      "Pflegen Sie Ihren Optimismus, ohne notwendige Details zu übersehen.",

    "Vous engager envers un désir qui mérite davantage qu’un enthousiasme passager.":
      "Verpflichten Sie sich einem Wunsch, der mehr verdient als vorübergehende Begeisterung.",

    /* AFFIRMATION */

    "Je suis capable de créer une vie riche de sens et d’expériences.":
      "Ich bin in der Lage, ein Leben voller Sinn und Erfahrungen zu gestalten.",

    "Mon enthousiasme attire les possibilités qui correspondent à mon évolution.":
      "Meine Begeisterung zieht Möglichkeiten an, die meiner Entwicklung entsprechen.",

    "Je peux être libre tout en construisant quelque chose de durable.":
      "Ich kann frei sein und gleichzeitig etwas Dauerhaftes aufbauen.",

    "Je fais confiance à ma capacité de rebondir et d’apprendre.":
      "Ich vertraue auf meine Fähigkeit, mich wieder aufzurichten und zu lernen.",

    "Ma vision de l’avenir mérite d’être soutenue par mes actions.":
      "Meine Vision für die Zukunft verdient es, durch meine Handlungen unterstützt zu werden.",

    "Je choisis les chemins qui élargissent mon esprit et mon cœur.":
      "Ich wähle Wege, die meinen Geist und mein Herz erweitern.",

    /* MESSAGE */

    "Ce mois-ci, une nouvelle perspective pourrait vous redonner l’élan que vous cherchiez.":
      "In diesem Monat könnte Ihnen eine neue Perspektive den Schwung zurückgeben, nach dem Sie gesucht haben.",

    "Votre désir de liberté devient créateur lorsque vous lui donnez une direction concrète.":
      "Ihr Wunsch nach Freiheit wird schöpferisch, wenn Sie ihm eine konkrete Richtung geben.",

    "Une occasion inattendue pourrait apparaître à travers un échange, un déplacement ou une découverte.":
      "Eine unerwartete Gelegenheit könnte durch ein Gespräch, eine Reise oder eine Entdeckung entstehen.",

    "Votre optimisme ouvre les portes, mais votre constance vous permettra de les franchir.":
      "Ihr Optimismus öffnet Türen, doch Ihre Beständigkeit wird Ihnen ermöglichen, hindurchzugehen.",

    "Une vérité simple pourrait vous aider à abandonner une direction qui ne vous ressemble plus.":
      "Eine einfache Wahrheit könnte Ihnen helfen, einen Weg aufzugeben, der nicht mehr zu Ihnen passt.",

    "Vous êtes invité à croire en un horizon plus vaste tout en posant aujourd’hui le premier geste nécessaire.":
      "Sie sind eingeladen, an einen weiteren Horizont zu glauben und gleichzeitig heute den ersten notwendigen Schritt zu tun.",
  },

  it: {
    /* MANTRA */

    "Je suis libre lorsque mes choix respectent ma vérité profonde.":
      "Sono libero quando le mie scelte rispettano la mia verità più profonda.",

    "Chaque expérience m’aide à élargir ma vision de la vie.":
      "Ogni esperienza mi aiuta ad ampliare la mia visione della vita.",

    "Je poursuis mes rêves sans fuir les responsabilités qui les rendent possibles.":
      "Inseguo i miei sogni senza fuggire dalle responsabilità che li rendono possibili.",

    "Mon optimisme devient une force lorsque je l’accompagne d’actions concrètes.":
      "Il mio ottimismo diventa una forza quando lo accompagno con azioni concrete.",

    "Je mérite un avenir plus vaste que les limites de mon passé.":
      "Merito un futuro più ampio dei limiti del mio passato.",

    "Je fais confiance au chemin même lorsque je ne vois pas encore sa destination.":
      "Mi fido del cammino anche quando non riesco ancora a vedere la sua destinazione.",

    /* INTENTION */

    "Explorer une possibilité nouvelle tout en gardant un objectif précis.":
      "Esplorate una nuova possibilità mantenendo un obiettivo preciso.",

    "Transformer une inspiration en projet concret.":
      "Trasformate un’ispirazione in un progetto concreto.",

    "Élargir votre horizon par une rencontre, une lecture ou une expérience.":
      "Ampliate i vostri orizzonti attraverso un incontro, una lettura o un’esperienza.",

    "Faire un choix qui augmente votre sentiment de liberté intérieure.":
      "Fate una scelta che aumenti il vostro senso di libertà interiore.",

    "Cultiver l’optimisme sans ignorer les détails nécessaires.":
      "Coltivate l’ottimismo senza ignorare i dettagli necessari.",

    "Vous engager envers un désir qui mérite davantage qu’un enthousiasme passager.":
      "Impegnatevi verso un desiderio che merita più di un entusiasmo passeggero.",

    /* AFFIRMATION */

    "Je suis capable de créer une vie riche de sens et d’expériences.":
      "Sono capace di creare una vita ricca di significato e di esperienze.",

    "Mon enthousiasme attire les possibilités qui correspondent à mon évolution.":
      "Il mio entusiasmo attira possibilità che corrispondono alla mia evoluzione.",

    "Je peux être libre tout en construisant quelque chose de durable.":
      "Posso essere libero costruendo al tempo stesso qualcosa di duraturo.",

    "Je fais confiance à ma capacité de rebondir et d’apprendre.":
      "Mi fido della mia capacità di rialzarmi e imparare.",

    "Ma vision de l’avenir mérite d’être soutenue par mes actions.":
      "La mia visione del futuro merita di essere sostenuta dalle mie azioni.",

    "Je choisis les chemins qui élargissent mon esprit et mon cœur.":
      "Scelgo i percorsi che ampliano la mia mente e il mio cuore.",

    /* MESSAGE */

    "Ce mois-ci, une nouvelle perspective pourrait vous redonner l’élan que vous cherchiez.":
      "Questo mese, una nuova prospettiva potrebbe restituirvi lo slancio che stavate cercando.",

    "Votre désir de liberté devient créateur lorsque vous lui donnez une direction concrète.":
      "Il vostro desiderio di libertà diventa creativo quando gli date una direzione concreta.",

    "Une occasion inattendue pourrait apparaître à travers un échange, un déplacement ou une découverte.":
      "Un’opportunità inaspettata potrebbe presentarsi attraverso un incontro, un viaggio o una scoperta.",

    "Votre optimisme ouvre les portes, mais votre constance vous permettra de les franchir.":
      "Il vostro ottimismo apre le porte, ma la vostra costanza vi permetterà di attraversarle.",

    "Une vérité simple pourrait vous aider à abandonner une direction qui ne vous ressemble plus.":
      "Una semplice verità potrebbe aiutarvi ad abbandonare una direzione che non vi rappresenta più.",

    "Vous êtes invité à croire en un horizon plus vaste tout en posant aujourd’hui le premier geste nécessaire.":
      "Siete invitati a credere in un orizzonte più ampio compiendo oggi il primo gesto necessario.",
  },

  pt: {
    /* MANTRA */

    "Je suis libre lorsque mes choix respectent ma vérité profonde.":
      "Sou livre quando minhas escolhas respeitam minha verdade mais profunda.",

    "Chaque expérience m’aide à élargir ma vision de la vie.":
      "Cada experiência me ajuda a ampliar minha visão da vida.",

    "Je poursuis mes rêves sans fuir les responsabilités qui les rendent possibles.":
      "Persigo meus sonhos sem fugir das responsabilidades que os tornam possíveis.",

    "Mon optimisme devient une force lorsque je l’accompagne d’actions concrètes.":
      "Meu otimismo se torna uma força quando o acompanho de ações concretas.",

    "Je mérite un avenir plus vaste que les limites de mon passé.":
      "Mereço um futuro mais amplo do que os limites do meu passado.",

    "Je fais confiance au chemin même lorsque je ne vois pas encore sa destination.":
      "Confio no caminho mesmo quando ainda não consigo ver seu destino.",

    /* INTENTION */

    "Explorer une possibilité nouvelle tout en gardant un objectif précis.":
      "Explore uma nova possibilidade mantendo um objetivo claro.",

    "Transformer une inspiration en projet concret.":
      "Transforme uma inspiração em um projeto concreto.",

    "Élargir votre horizon par une rencontre, une lecture ou une expérience.":
      "Amplie seus horizontes por meio de um encontro, uma leitura ou uma experiência.",

    "Faire un choix qui augmente votre sentiment de liberté intérieure.":
      "Faça uma escolha que aumente sua sensação de liberdade interior.",

    "Cultiver l’optimisme sans ignorer les détails nécessaires.":
      "Cultive o otimismo sem ignorar os detalhes necessários.",

    "Vous engager envers un désir qui mérite davantage qu’un enthousiasme passager.":
      "Comprometa-se com um desejo que merece mais do que um entusiasmo passageiro.",

    /* AFFIRMATION */

    "Je suis capable de créer une vie riche de sens et d’expériences.":
      "Sou capaz de criar uma vida rica em significado e experiências.",

    "Mon enthousiasme attire les possibilités qui correspondent à mon évolution.":
      "Meu entusiasmo atrai possibilidades que correspondem à minha evolução.",

    "Je peux être libre tout en construisant quelque chose de durable.":
      "Posso ser livre enquanto construo algo duradouro.",

    "Je fais confiance à ma capacité de rebondir et d’apprendre.":
      "Confio em minha capacidade de me recuperar e aprender.",

    "Ma vision de l’avenir mérite d’être soutenue par mes actions.":
      "Minha visão de futuro merece ser sustentada por minhas ações.",

    "Je choisis les chemins qui élargissent mon esprit et mon cœur.":
      "Escolho os caminhos que ampliam minha mente e meu coração.",

    /* MESSAGE */

    "Ce mois-ci, une nouvelle perspective pourrait vous redonner l’élan que vous cherchiez.":
      "Neste mês, uma nova perspectiva poderá devolver a você o impulso que estava buscando.",

    "Votre désir de liberté devient créateur lorsque vous lui donnez une direction concrète.":
      "Seu desejo de liberdade se torna criativo quando você lhe dá uma direção concreta.",

    "Une occasion inattendue pourrait apparaître à travers un échange, un déplacement ou une découverte.":
      "Uma oportunidade inesperada poderá surgir por meio de uma conversa, uma viagem ou uma descoberta.",

    "Votre optimisme ouvre les portes, mais votre constance vous permettra de les franchir.":
      "Seu otimismo abre as portas, mas sua constância permitirá que você atravesse cada uma delas.",

    "Une vérité simple pourrait vous aider à abandonner une direction qui ne vous ressemble plus.":
      "Uma verdade simples poderá ajudar você a abandonar uma direção que já não combina com quem você é.",

    "Vous êtes invité à croire en un horizon plus vaste tout en posant aujourd’hui le premier geste nécessaire.":
      "Você é convidado a acreditar em um horizonte mais amplo enquanto dá hoje o primeiro passo necessário.",
  },
};
/* =========================================================
   CAPRICORNE — TRANSLATIONS
========================================================= */

const MANTRA_CAPRICORNE_TRANSLATIONS = {
  en: {
    /* MANTRA */

    "Je bâtis mon avenir sans oublier de vivre mon présent.":
      "I build my future without forgetting to live in the present.",

    "Ma discipline soutient mes rêves sans devenir une prison.":
      "My discipline supports my dreams without becoming a prison.",

    "Je mérite le succès autant que le repos.":
      "I deserve success as much as I deserve rest.",

    "Chaque étape patiente me rapproche d’une réussite durable.":
      "Every patient step brings me closer to lasting success.",

    "Je peux être ambitieuse tout en respectant mes limites.":
      "I can be ambitious while respecting my limits.",

    "Ma valeur dépasse largement tout ce que je produis ou accomplis.":
      "My worth extends far beyond everything I produce or accomplish.",

    /* INTENTION */

    "Structurer un objectif important avec réalisme et patience.":
      "Structure an important goal with realism and patience.",

    "Alléger une responsabilité que vous portez seule depuis trop longtemps.":
      "Lighten a responsibility you have been carrying alone for too long.",

    "Créer un meilleur équilibre entre ambition et bien-être.":
      "Create a better balance between ambition and well-being.",

    "Reconnaître les progrès accomplis avant d’ajouter une nouvelle exigence.":
      "Recognize the progress you have already made before adding a new demand.",

    "Prendre une décision qui renforce votre stabilité à long terme.":
      "Make a decision that strengthens your long-term stability.",

    "Transformer une obligation en choix plus conscient.":
      "Transform an obligation into a more conscious choice.",

    /* AFFIRMATION */

    "Je possède la patience nécessaire pour construire ce qui compte.":
      "I have the patience needed to build what truly matters.",

    "Je mérite de réussir sans m’épuiser.":
      "I deserve to succeed without exhausting myself.",

    "Mes efforts constants produisent des résultats durables.":
      "My consistent efforts produce lasting results.",

    "Je peux demander de l’aide sans perdre mon autonomie.":
      "I can ask for help without losing my independence.",

    "Je suis fière du chemin que j’ai déjà parcouru.":
      "I am proud of the path I have already traveled.",

    "Je crée une réussite qui respecte mes valeurs et ma santé.":
      "I create success that respects my values and my well-being.",

    /* MESSAGE */

    "Ce mois-ci, une décision stratégique pourrait renforcer votre sécurité pour les mois à venir.":
      "This month, a strategic decision could strengthen your security for the months ahead.",

    "Votre ambition vous conduit loin lorsqu’elle ne vous oblige pas à ignorer vos besoins essentiels.":
      "Your ambition can take you far when it does not require you to ignore your essential needs.",

    "Une responsabilité pourrait être réorganisée, partagée ou simplifiée plus facilement que prévu.":
      "A responsibility could be reorganized, shared, or simplified more easily than expected.",

    "Votre progression mérite d’être reconnue, même si l’objectif final n’est pas encore atteint.":
      "Your progress deserves to be recognized, even if the final goal has not yet been reached.",

    "Une réussite durable se construit aussi avec des pauses, des ajustements et de la souplesse.":
      "Lasting success is also built through pauses, adjustments, and flexibility.",

    "Vous êtes invité à bâtir un avenir solide sans reporter constamment votre droit au bonheur.":
      "You are invited to build a solid future without constantly postponing your right to happiness.",
  },

  es: {
    /* MANTRA */

    "Je bâtis mon avenir sans oublier de vivre mon présent.":
      "Construyo mi futuro sin olvidar vivir mi presente.",

    "Ma discipline soutient mes rêves sans devenir une prison.":
      "Mi disciplina sostiene mis sueños sin convertirse en una prisión.",

    "Je mérite le succès autant que le repos.":
      "Merezco el éxito tanto como el descanso.",

    "Chaque étape patiente me rapproche d’une réussite durable.":
      "Cada paso paciente me acerca a un éxito duradero.",

    "Je peux être ambitieuse tout en respectant mes limites.":
      "Puedo ser ambicioso sin dejar de respetar mis límites.",

    "Ma valeur dépasse largement tout ce que je produis ou accomplis.":
      "Mi valor va mucho más allá de todo lo que produzco o logro.",

    /* INTENTION */

    "Structurer un objectif important avec réalisme et patience.":
      "Estructura un objetivo importante con realismo y paciencia.",

    "Alléger une responsabilité que vous portez seule depuis trop longtemps.":
      "Aligera una responsabilidad que llevas demasiado tiempo cargando solo.",

    "Créer un meilleur équilibre entre ambition et bien-être.":
      "Crea un mejor equilibrio entre ambición y bienestar.",

    "Reconnaître les progrès accomplis avant d’ajouter une nouvelle exigence.":
      "Reconoce los progresos realizados antes de añadir una nueva exigencia.",

    "Prendre une décision qui renforce votre stabilité à long terme.":
      "Toma una decisión que fortalezca tu estabilidad a largo plazo.",

    "Transformer une obligation en choix plus conscient.":
      "Transforma una obligación en una elección más consciente.",

    /* AFFIRMATION */

    "Je possède la patience nécessaire pour construire ce qui compte.":
      "Tengo la paciencia necesaria para construir aquello que realmente importa.",

    "Je mérite de réussir sans m’épuiser.":
      "Merezco tener éxito sin agotarme.",

    "Mes efforts constants produisent des résultats durables.":
      "Mis esfuerzos constantes producen resultados duraderos.",

    "Je peux demander de l’aide sans perdre mon autonomie.":
      "Puedo pedir ayuda sin perder mi autonomía.",

    "Je suis fière du chemin que j’ai déjà parcouru.":
      "Estoy orgulloso del camino que ya he recorrido.",

    "Je crée une réussite qui respecte mes valeurs et ma santé.":
      "Creo un éxito que respeta mis valores y mi bienestar.",

    /* MESSAGE */

    "Ce mois-ci, une décision stratégique pourrait renforcer votre sécurité pour les mois à venir.":
      "Este mes, una decisión estratégica podría reforzar tu seguridad para los próximos meses.",

    "Votre ambition vous conduit loin lorsqu’elle ne vous oblige pas à ignorer vos besoins essentiels.":
      "Tu ambición puede llevarte lejos cuando no te obliga a ignorar tus necesidades esenciales.",

    "Une responsabilité pourrait être réorganisée, partagée ou simplifiée plus facilement que prévu.":
      "Una responsabilidad podría reorganizarse, compartirse o simplificarse más fácilmente de lo previsto.",

    "Votre progression mérite d’être reconnue, même si l’objectif final n’est pas encore atteint.":
      "Tu progreso merece ser reconocido, aunque todavía no hayas alcanzado el objetivo final.",

    "Une réussite durable se construit aussi avec des pauses, des ajustements et de la souplesse.":
      "El éxito duradero también se construye con pausas, ajustes y flexibilidad.",

    "Vous êtes invité à bâtir un avenir solide sans reporter constamment votre droit au bonheur.":
      "Estás invitado a construir un futuro sólido sin aplazar constantemente tu derecho a la felicidad.",
  },

  de: {
    /* MANTRA */

    "Je bâtis mon avenir sans oublier de vivre mon présent.":
      "Ich baue meine Zukunft auf, ohne zu vergessen, meine Gegenwart zu leben.",

    "Ma discipline soutient mes rêves sans devenir une prison.":
      "Meine Disziplin unterstützt meine Träume, ohne zu einem Gefängnis zu werden.",

    "Je mérite le succès autant que le repos.":
      "Ich verdiene Erfolg ebenso wie Erholung.",

    "Chaque étape patiente me rapproche d’une réussite durable.":
      "Jeder geduldige Schritt bringt mich einem dauerhaften Erfolg näher.",

    "Je peux être ambitieuse tout en respectant mes limites.":
      "Ich kann ehrgeizig sein und gleichzeitig meine Grenzen respektieren.",

    "Ma valeur dépasse largement tout ce que je produis ou accomplis.":
      "Mein Wert geht weit über alles hinaus, was ich produziere oder erreiche.",

    /* INTENTION */

    "Structurer un objectif important avec réalisme et patience.":
      "Strukturieren Sie ein wichtiges Ziel mit Realismus und Geduld.",

    "Alléger une responsabilité que vous portez seule depuis trop longtemps.":
      "Erleichtern Sie eine Verantwortung, die Sie schon zu lange allein tragen.",

    "Créer un meilleur équilibre entre ambition et bien-être.":
      "Schaffen Sie ein besseres Gleichgewicht zwischen Ehrgeiz und Wohlbefinden.",

    "Reconnaître les progrès accomplis avant d’ajouter une nouvelle exigence.":
      "Erkennen Sie Ihre bisherigen Fortschritte an, bevor Sie eine neue Anforderung hinzufügen.",

    "Prendre une décision qui renforce votre stabilité à long terme.":
      "Treffen Sie eine Entscheidung, die Ihre langfristige Stabilität stärkt.",

    "Transformer une obligation en choix plus conscient.":
      "Verwandeln Sie eine Verpflichtung in eine bewusstere Entscheidung.",

    /* AFFIRMATION */

    "Je possède la patience nécessaire pour construire ce qui compte.":
      "Ich besitze die nötige Geduld, um das aufzubauen, was wirklich zählt.",

    "Je mérite de réussir sans m’épuiser.":
      "Ich verdiene Erfolg, ohne mich dabei zu erschöpfen.",

    "Mes efforts constants produisent des résultats durables.":
      "Meine beständigen Bemühungen führen zu dauerhaften Ergebnissen.",

    "Je peux demander de l’aide sans perdre mon autonomie.":
      "Ich kann um Hilfe bitten, ohne meine Selbstständigkeit zu verlieren.",

    "Je suis fière du chemin que j’ai déjà parcouru.":
      "Ich bin stolz auf den Weg, den ich bereits zurückgelegt habe.",

    "Je crée une réussite qui respecte mes valeurs et ma santé.":
      "Ich schaffe einen Erfolg, der meine Werte und mein Wohlbefinden respektiert.",

    /* MESSAGE */

    "Ce mois-ci, une décision stratégique pourrait renforcer votre sécurité pour les mois à venir.":
      "In diesem Monat könnte eine strategische Entscheidung Ihre Sicherheit für die kommenden Monate stärken.",

    "Votre ambition vous conduit loin lorsqu’elle ne vous oblige pas à ignorer vos besoins essentiels.":
      "Ihr Ehrgeiz kann Sie weit bringen, solange er Sie nicht dazu zwingt, Ihre grundlegenden Bedürfnisse zu ignorieren.",

    "Une responsabilité pourrait être réorganisée, partagée ou simplifiée plus facilement que prévu.":
      "Eine Verantwortung könnte leichter als erwartet neu organisiert, geteilt oder vereinfacht werden.",

    "Votre progression mérite d’être reconnue, même si l’objectif final n’est pas encore atteint.":
      "Ihre Fortschritte verdienen Anerkennung, auch wenn das endgültige Ziel noch nicht erreicht ist.",

    "Une réussite durable se construit aussi avec des pauses, des ajustements et de la souplesse.":
      "Dauerhafter Erfolg entsteht auch durch Pausen, Anpassungen und Flexibilität.",

    "Vous êtes invité à bâtir un avenir solide sans reporter constamment votre droit au bonheur.":
      "Sie sind eingeladen, eine stabile Zukunft aufzubauen, ohne Ihr Recht auf Glück ständig aufzuschieben.",
  },

  it: {
    /* MANTRA */

    "Je bâtis mon avenir sans oublier de vivre mon présent.":
      "Costruisco il mio futuro senza dimenticare di vivere il presente.",

    "Ma discipline soutient mes rêves sans devenir une prison.":
      "La mia disciplina sostiene i miei sogni senza diventare una prigione.",

    "Je mérite le succès autant que le repos.":
      "Merito il successo tanto quanto il riposo.",

    "Chaque étape patiente me rapproche d’une réussite durable.":
      "Ogni passo compiuto con pazienza mi avvicina a un successo duraturo.",

    "Je peux être ambitieuse tout en respectant mes limites.":
      "Posso essere ambizioso rispettando al tempo stesso i miei limiti.",

    "Ma valeur dépasse largement tout ce que je produis ou accomplis.":
      "Il mio valore va ben oltre tutto ciò che produco o realizzo.",

    /* INTENTION */

    "Structurer un objectif important avec réalisme et patience.":
      "Strutturate un obiettivo importante con realismo e pazienza.",

    "Alléger une responsabilité que vous portez seule depuis trop longtemps.":
      "Alleggerite una responsabilità che state portando da soli da troppo tempo.",

    "Créer un meilleur équilibre entre ambition et bien-être.":
      "Create un migliore equilibrio tra ambizione e benessere.",

    "Reconnaître les progrès accomplis avant d’ajouter une nouvelle exigence.":
      "Riconoscete i progressi già compiuti prima di aggiungere una nuova richiesta.",

    "Prendre une décision qui renforce votre stabilité à long terme.":
      "Prendete una decisione che rafforzi la vostra stabilità a lungo termine.",

    "Transformer une obligation en choix plus conscient.":
      "Trasformate un obbligo in una scelta più consapevole.",

    /* AFFIRMATION */

    "Je possède la patience nécessaire pour construire ce qui compte.":
      "Possiedo la pazienza necessaria per costruire ciò che conta davvero.",

    "Je mérite de réussir sans m’épuiser.":
      "Merito di avere successo senza esaurirmi.",

    "Mes efforts constants produisent des résultats durables.":
      "I miei sforzi costanti producono risultati duraturi.",

    "Je peux demander de l’aide sans perdre mon autonomie.":
      "Posso chiedere aiuto senza perdere la mia autonomia.",

    "Je suis fière du chemin que j’ai déjà parcouru.":
      "Sono orgoglioso del cammino che ho già percorso.",

    "Je crée une réussite qui respecte mes valeurs et ma santé.":
      "Creo un successo che rispetta i miei valori e il mio benessere.",

    /* MESSAGE */

    "Ce mois-ci, une décision stratégique pourrait renforcer votre sécurité pour les mois à venir.":
      "Questo mese, una decisione strategica potrebbe rafforzare la vostra sicurezza per i mesi a venire.",

    "Votre ambition vous conduit loin lorsqu’elle ne vous oblige pas à ignorer vos besoins essentiels.":
      "La vostra ambizione può portarvi lontano quando non vi obbliga a ignorare i vostri bisogni essenziali.",

    "Une responsabilité pourrait être réorganisée, partagée ou simplifiée plus facilement que prévu.":
      "Una responsabilità potrebbe essere riorganizzata, condivisa o semplificata più facilmente del previsto.",

    "Votre progression mérite d’être reconnue, même si l’objectif final n’est pas encore atteint.":
      "I vostri progressi meritano di essere riconosciuti, anche se l’obiettivo finale non è ancora stato raggiunto.",

    "Une réussite durable se construit aussi avec des pauses, des ajustements et de la souplesse.":
      "Un successo duraturo si costruisce anche attraverso pause, aggiustamenti e flessibilità.",

    "Vous êtes invité à bâtir un avenir solide sans reporter constamment votre droit au bonheur.":
      "Siete invitati a costruire un futuro solido senza rimandare continuamente il vostro diritto alla felicità.",
  },

  pt: {
    /* MANTRA */

    "Je bâtis mon avenir sans oublier de vivre mon présent.":
      "Construo meu futuro sem esquecer de viver o presente.",

    "Ma discipline soutient mes rêves sans devenir une prison.":
      "Minha disciplina sustenta meus sonhos sem se transformar em uma prisão.",

    "Je mérite le succès autant que le repos.":
      "Mereço o sucesso tanto quanto o descanso.",

    "Chaque étape patiente me rapproche d’une réussite durable.":
      "Cada passo dado com paciência me aproxima de um sucesso duradouro.",

    "Je peux être ambitieuse tout en respectant mes limites.":
      "Posso ser ambicioso e, ao mesmo tempo, respeitar meus limites.",

    "Ma valeur dépasse largement tout ce que je produis ou accomplis.":
      "Meu valor vai muito além de tudo aquilo que produzo ou realizo.",

    /* INTENTION */

    "Structurer un objectif important avec réalisme et patience.":
      "Estruture um objetivo importante com realismo e paciência.",

    "Alléger une responsabilité que vous portez seule depuis trop longtemps.":
      "Alivie uma responsabilidade que você vem carregando sozinho há tempo demais.",

    "Créer un meilleur équilibre entre ambition et bien-être.":
      "Crie um equilíbrio melhor entre ambição e bem-estar.",

    "Reconnaître les progrès accomplis avant d’ajouter une nouvelle exigence.":
      "Reconheça os progressos já realizados antes de acrescentar uma nova exigência.",

    "Prendre une décision qui renforce votre stabilité à long terme.":
      "Tome uma decisão que fortaleça sua estabilidade a longo prazo.",

    "Transformer une obligation en choix plus conscient.":
      "Transforme uma obrigação em uma escolha mais consciente.",

    /* AFFIRMATION */

    "Je possède la patience nécessaire pour construire ce qui compte.":
      "Tenho a paciência necessária para construir aquilo que realmente importa.",

    "Je mérite de réussir sans m’épuiser.":
      "Mereço alcançar o sucesso sem me esgotar.",

    "Mes efforts constants produisent des résultats durables.":
      "Meus esforços constantes produzem resultados duradouros.",

    "Je peux demander de l’aide sans perdre mon autonomie.":
      "Posso pedir ajuda sem perder minha autonomia.",

    "Je suis fière du chemin que j’ai déjà parcouru.":
      "Tenho orgulho do caminho que já percorri.",

    "Je crée une réussite qui respecte mes valeurs et ma santé.":
      "Construo um sucesso que respeita meus valores e meu bem-estar.",

    /* MESSAGE */

    "Ce mois-ci, une décision stratégique pourrait renforcer votre sécurité pour les mois à venir.":
      "Neste mês, uma decisão estratégica poderá fortalecer sua segurança para os próximos meses.",

    "Votre ambition vous conduit loin lorsqu’elle ne vous oblige pas à ignorer vos besoins essentiels.":
      "Sua ambição pode levar você longe quando não o obriga a ignorar suas necessidades essenciais.",

    "Une responsabilité pourrait être réorganisée, partagée ou simplifiée plus facilement que prévu.":
      "Uma responsabilidade poderá ser reorganizada, compartilhada ou simplificada com mais facilidade do que o esperado.",

    "Votre progression mérite d’être reconnue, même si l’objectif final n’est pas encore atteint.":
      "Seu progresso merece ser reconhecido, mesmo que o objetivo final ainda não tenha sido alcançado.",

    "Une réussite durable se construit aussi avec des pauses, des ajustements et de la souplesse.":
      "Um sucesso duradouro também é construído com pausas, ajustes e flexibilidade.",

    "Vous êtes invité à bâtir un avenir solide sans reporter constamment votre droit au bonheur.":
      "Você é convidado a construir um futuro sólido sem adiar constantemente seu direito à felicidade.",
  },
};
/* =========================================================
   VERSEAU — TRANSLATIONS
========================================================= */

const MANTRA_VERSEAU_TRANSLATIONS = {
  en: {
    /* MANTRA */

    "Je respecte ma différence et j’en fais une force créatrice.":
      "I honor my uniqueness and turn it into a creative strength.",

    "Mes idées nouvelles peuvent transformer ma réalité.":
      "My new ideas can transform my reality.",

    "Je reste libre tout en créant des liens sincères.":
      "I remain free while creating sincere connections.",

    "Je contribue au changement sans oublier mes propres besoins.":
      "I contribute to change without forgetting my own needs.",

    "Mon authenticité attire les personnes qui comprennent ma véritable nature.":
      "My authenticity attracts people who understand my true nature.",

    "Je peux inventer une voie qui n’existait pas encore.":
      "I can create a path that did not exist before.",

    /* INTENTION */

    "Donner une forme concrète à une idée originale.":
      "Give concrete form to an original idea.",

    "Vous rapprocher d’un groupe ou d’une personne qui partage vos valeurs.":
      "Move closer to a group or person who shares your values.",

    "Créer davantage de liberté dans votre quotidien.":
      "Create more freedom in your daily life.",

    "Exprimer une opinion différente sans vous isoler.":
      "Express a different opinion without isolating yourself.",

    "Faire évoluer une habitude devenue trop rigide.":
      "Let a habit that has become too rigid evolve.",

    "Utiliser votre vision pour améliorer une situation réelle.":
      "Use your vision to improve a real situation.",

    /* AFFIRMATION */

    "Ma différence possède une valeur et une utilité.":
      "My uniqueness has value and purpose.",

    "Je suis libre d’inventer une vie qui me ressemble.":
      "I am free to create a life that reflects who I am.",

    "Mes idées méritent d’être développées et partagées.":
      "My ideas deserve to be developed and shared.",

    "Je peux appartenir à un groupe sans renoncer à mon individualité.":
      "I can belong to a group without giving up my individuality.",

    "Je crée naturellement des solutions nouvelles.":
      "I naturally create new solutions.",

    "Je fais confiance à ma vision même lorsqu’elle précède celle des autres.":
      "I trust my vision even when it comes before that of others.",

    /* MESSAGE */

    "Ce mois-ci, une idée inhabituelle pourrait devenir la solution la plus logique.":
      "This month, an unusual idea could become the most logical solution.",

    "Votre besoin de liberté mérite d’être respecté, mais il peut également coexister avec l’engagement.":
      "Your need for freedom deserves to be respected, but it can also coexist with commitment.",

    "Une rencontre ou une collaboration pourrait stimuler un projet que vous gardiez encore en réserve.":
      "A meeting or collaboration could stimulate a project you have been keeping in reserve.",

    "Votre singularité devient une force lorsqu’elle vous rapproche de votre mission plutôt que de vous isoler.":
      "Your uniqueness becomes a strength when it brings you closer to your purpose rather than isolating you.",

    "Un changement de perspective pourrait vous aider à sortir d’une situation devenue trop prévisible.":
      "A change in perspective could help you move beyond a situation that has become too predictable.",

    "Vous êtes invité à donner une forme réelle à la vision que vous portez depuis quelque temps.":
      "You are invited to give real form to the vision you have been carrying for some time.",
  },

  es: {
    /* MANTRA */

    "Je respecte ma différence et j’en fais une force créatrice.":
      "Respeto mi diferencia y la convierto en una fuerza creativa.",

    "Mes idées nouvelles peuvent transformer ma réalité.":
      "Mis nuevas ideas pueden transformar mi realidad.",

    "Je reste libre tout en créant des liens sincères.":
      "Sigo siendo libre mientras creo vínculos sinceros.",

    "Je contribue au changement sans oublier mes propres besoins.":
      "Contribuyo al cambio sin olvidar mis propias necesidades.",

    "Mon authenticité attire les personnes qui comprennent ma véritable nature.":
      "Mi autenticidad atrae a las personas que comprenden mi verdadera naturaleza.",

    "Je peux inventer une voie qui n’existait pas encore.":
      "Puedo crear un camino que todavía no existía.",

    /* INTENTION */

    "Donner une forme concrète à une idée originale.":
      "Da una forma concreta a una idea original.",

    "Vous rapprocher d’un groupe ou d’une personne qui partage vos valeurs.":
      "Acércate a un grupo o a una persona que comparta tus valores.",

    "Créer davantage de liberté dans votre quotidien.":
      "Crea más libertad en tu vida cotidiana.",

    "Exprimer une opinion différente sans vous isoler.":
      "Expresa una opinión diferente sin aislarte.",

    "Faire évoluer une habitude devenue trop rigide.":
      "Haz evolucionar un hábito que se ha vuelto demasiado rígido.",

    "Utiliser votre vision pour améliorer une situation réelle.":
      "Utiliza tu visión para mejorar una situación real.",

    /* AFFIRMATION */

    "Ma différence possède une valeur et une utilité.":
      "Mi diferencia tiene valor y utilidad.",

    "Je suis libre d’inventer une vie qui me ressemble.":
      "Soy libre de crear una vida que refleje quien soy.",

    "Mes idées méritent d’être développées et partagées.":
      "Mis ideas merecen ser desarrolladas y compartidas.",

    "Je peux appartenir à un groupe sans renoncer à mon individualité.":
      "Puedo pertenecer a un grupo sin renunciar a mi individualidad.",

    "Je crée naturellement des solutions nouvelles.":
      "Creo naturalmente nuevas soluciones.",

    "Je fais confiance à ma vision même lorsqu’elle précède celle des autres.":
      "Confío en mi visión incluso cuando se adelanta a la de los demás.",

    /* MESSAGE */

    "Ce mois-ci, une idée inhabituelle pourrait devenir la solution la plus logique.":
      "Este mes, una idea poco habitual podría convertirse en la solución más lógica.",

    "Votre besoin de liberté mérite d’être respecté, mais il peut également coexister avec l’engagement.":
      "Tu necesidad de libertad merece ser respetada, pero también puede coexistir con el compromiso.",

    "Une rencontre ou une collaboration pourrait stimuler un projet que vous gardiez encore en réserve.":
      "Un encuentro o una colaboración podría impulsar un proyecto que todavía mantenías en reserva.",

    "Votre singularité devient une force lorsqu’elle vous rapproche de votre mission plutôt que de vous isoler.":
      "Tu singularidad se convierte en una fortaleza cuando te acerca a tu propósito en lugar de aislarte.",

    "Un changement de perspective pourrait vous aider à sortir d’une situation devenue trop prévisible.":
      "Un cambio de perspectiva podría ayudarte a salir de una situación que se ha vuelto demasiado predecible.",

    "Vous êtes invité à donner une forme réelle à la vision que vous portez depuis quelque temps.":
      "Estás invitado a dar una forma real a la visión que llevas dentro desde hace algún tiempo.",
  },

  de: {
    /* MANTRA */

    "Je respecte ma différence et j’en fais une force créatrice.":
      "Ich respektiere meine Einzigartigkeit und mache sie zu einer schöpferischen Stärke.",

    "Mes idées nouvelles peuvent transformer ma réalité.":
      "Meine neuen Ideen können meine Realität verändern.",

    "Je reste libre tout en créant des liens sincères.":
      "Ich bleibe frei und schaffe gleichzeitig aufrichtige Verbindungen.",

    "Je contribue au changement sans oublier mes propres besoins.":
      "Ich trage zur Veränderung bei, ohne meine eigenen Bedürfnisse zu vergessen.",

    "Mon authenticité attire les personnes qui comprennent ma véritable nature.":
      "Meine Authentizität zieht Menschen an, die mein wahres Wesen verstehen.",

    "Je peux inventer une voie qui n’existait pas encore.":
      "Ich kann einen Weg erschaffen, den es bisher noch nicht gab.",

    /* INTENTION */

    "Donner une forme concrète à une idée originale.":
      "Geben Sie einer originellen Idee eine konkrete Form.",

    "Vous rapprocher d’un groupe ou d’une personne qui partage vos valeurs.":
      "Nähern Sie sich einer Gruppe oder einer Person, die Ihre Werte teilt.",

    "Créer davantage de liberté dans votre quotidien.":
      "Schaffen Sie mehr Freiheit in Ihrem Alltag.",

    "Exprimer une opinion différente sans vous isoler.":
      "Äußern Sie eine andere Meinung, ohne sich zu isolieren.",

    "Faire évoluer une habitude devenue trop rigide.":
      "Verändern Sie eine Gewohnheit, die zu starr geworden ist.",

    "Utiliser votre vision pour améliorer une situation réelle.":
      "Nutzen Sie Ihre Vision, um eine konkrete Situation zu verbessern.",

    /* AFFIRMATION */

    "Ma différence possède une valeur et une utilité.":
      "Meine Einzigartigkeit besitzt Wert und Nutzen.",

    "Je suis libre d’inventer une vie qui me ressemble.":
      "Ich bin frei, ein Leben zu gestalten, das zu mir passt.",

    "Mes idées méritent d’être développées et partagées.":
      "Meine Ideen verdienen es, entwickelt und geteilt zu werden.",

    "Je peux appartenir à un groupe sans renoncer à mon individualité.":
      "Ich kann Teil einer Gruppe sein, ohne meine Individualität aufzugeben.",

    "Je crée naturellement des solutions nouvelles.":
      "Ich entwickle ganz natürlich neue Lösungen.",

    "Je fais confiance à ma vision même lorsqu’elle précède celle des autres.":
      "Ich vertraue meiner Vision, auch wenn sie der Sichtweise anderer voraus ist.",

    /* MESSAGE */

    "Ce mois-ci, une idée inhabituelle pourrait devenir la solution la plus logique.":
      "In diesem Monat könnte eine ungewöhnliche Idee zur logischsten Lösung werden.",

    "Votre besoin de liberté mérite d’être respecté, mais il peut également coexister avec l’engagement.":
      "Ihr Bedürfnis nach Freiheit verdient Respekt, kann aber gleichzeitig mit Verbindlichkeit bestehen.",

    "Une rencontre ou une collaboration pourrait stimuler un projet que vous gardiez encore en réserve.":
      "Eine Begegnung oder Zusammenarbeit könnte einem Projekt neuen Schwung geben, das Sie bisher zurückgehalten haben.",

    "Votre singularité devient une force lorsqu’elle vous rapproche de votre mission plutôt que de vous isoler.":
      "Ihre Einzigartigkeit wird zu einer Stärke, wenn sie Sie Ihrer Aufgabe näherbringt, statt Sie zu isolieren.",

    "Un changement de perspective pourrait vous aider à sortir d’une situation devenue trop prévisible.":
      "Ein Perspektivwechsel könnte Ihnen helfen, eine zu vorhersehbar gewordene Situation zu verlassen.",

    "Vous êtes invité à donner une forme réelle à la vision que vous portez depuis quelque temps.":
      "Sie sind eingeladen, der Vision, die Sie schon seit einiger Zeit in sich tragen, eine konkrete Form zu geben.",
  },

  it: {
    /* MANTRA */

    "Je respecte ma différence et j’en fais une force créatrice.":
      "Rispetto la mia unicità e la trasformo in una forza creativa.",

    "Mes idées nouvelles peuvent transformer ma réalité.":
      "Le mie nuove idee possono trasformare la mia realtà.",

    "Je reste libre tout en créant des liens sincères.":
      "Rimango libero creando al tempo stesso legami sinceri.",

    "Je contribue au changement sans oublier mes propres besoins.":
      "Contribuisco al cambiamento senza dimenticare i miei bisogni.",

    "Mon authenticité attire les personnes qui comprennent ma véritable nature.":
      "La mia autenticità attira le persone che comprendono la mia vera natura.",

    "Je peux inventer une voie qui n’existait pas encore.":
      "Posso creare una strada che prima non esisteva.",

    /* INTENTION */

    "Donner une forme concrète à une idée originale.":
      "Date una forma concreta a un’idea originale.",

    "Vous rapprocher d’un groupe ou d’une personne qui partage vos valeurs.":
      "Avvicinatevi a un gruppo o a una persona che condivide i vostri valori.",

    "Créer davantage de liberté dans votre quotidien.":
      "Create maggiore libertà nella vostra vita quotidiana.",

    "Exprimer une opinion différente sans vous isoler.":
      "Esprimete un’opinione diversa senza isolarvi.",

    "Faire évoluer une habitude devenue trop rigide.":
      "Fate evolvere un’abitudine diventata troppo rigida.",

    "Utiliser votre vision pour améliorer une situation réelle.":
      "Utilizzate la vostra visione per migliorare una situazione concreta.",

    /* AFFIRMATION */

    "Ma différence possède une valeur et une utilité.":
      "La mia unicità possiede valore e utilità.",

    "Je suis libre d’inventer une vie qui me ressemble.":
      "Sono libero di creare una vita che mi assomigli.",

    "Mes idées méritent d’être développées et partagées.":
      "Le mie idee meritano di essere sviluppate e condivise.",

    "Je peux appartenir à un groupe sans renoncer à mon individualité.":
      "Posso appartenere a un gruppo senza rinunciare alla mia individualità.",

    "Je crée naturellement des solutions nouvelles.":
      "Creo naturalmente nuove soluzioni.",

    "Je fais confiance à ma vision même lorsqu’elle précède celle des autres.":
      "Mi fido della mia visione anche quando anticipa quella degli altri.",

    /* MESSAGE */

    "Ce mois-ci, une idée inhabituelle pourrait devenir la solution la plus logique.":
      "Questo mese, un’idea insolita potrebbe diventare la soluzione più logica.",

    "Votre besoin de liberté mérite d’être respecté, mais il peut également coexister avec l’engagement.":
      "Il vostro bisogno di libertà merita di essere rispettato, ma può anche convivere con l’impegno.",

    "Une rencontre ou une collaboration pourrait stimuler un projet que vous gardiez encore en réserve.":
      "Un incontro o una collaborazione potrebbe dare nuovo impulso a un progetto che tenevate ancora in sospeso.",

    "Votre singularité devient une force lorsqu’elle vous rapproche de votre mission plutôt que de vous isoler.":
      "La vostra unicità diventa una forza quando vi avvicina alla vostra missione invece di isolarvi.",

    "Un changement de perspective pourrait vous aider à sortir d’une situation devenue trop prévisible.":
      "Un cambiamento di prospettiva potrebbe aiutarvi a uscire da una situazione diventata troppo prevedibile.",

    "Vous êtes invité à donner une forme réelle à la vision que vous portez depuis quelque temps.":
      "Siete invitati a dare una forma concreta alla visione che portate dentro di voi da qualche tempo.",
  },

  pt: {
    /* MANTRA */

    "Je respecte ma différence et j’en fais une force créatrice.":
      "Respeito minha singularidade e a transformo em uma força criativa.",

    "Mes idées nouvelles peuvent transformer ma réalité.":
      "Minhas novas ideias podem transformar minha realidade.",

    "Je reste libre tout en créant des liens sincères.":
      "Permaneço livre enquanto crio vínculos sinceros.",

    "Je contribue au changement sans oublier mes propres besoins.":
      "Contribuo para a mudança sem esquecer minhas próprias necessidades.",

    "Mon authenticité attire les personnes qui comprennent ma véritable nature.":
      "Minha autenticidade atrai pessoas que compreendem minha verdadeira natureza.",

    "Je peux inventer une voie qui n’existait pas encore.":
      "Posso criar um caminho que ainda não existia.",

    /* INTENTION */

    "Donner une forme concrète à une idée originale.":
      "Dê uma forma concreta a uma ideia original.",

    "Vous rapprocher d’un groupe ou d’une personne qui partage vos valeurs.":
      "Aproxime-se de um grupo ou de uma pessoa que compartilhe seus valores.",

    "Créer davantage de liberté dans votre quotidien.":
      "Crie mais liberdade em sua vida cotidiana.",

    "Exprimer une opinion différente sans vous isoler.":
      "Expresse uma opinião diferente sem se isolar.",

    "Faire évoluer une habitude devenue trop rigide.":
      "Faça evoluir um hábito que se tornou rígido demais.",

    "Utiliser votre vision pour améliorer une situation réelle.":
      "Use sua visão para melhorar uma situação concreta.",

    /* AFFIRMATION */

    "Ma différence possède une valeur et une utilité.":
      "Minha singularidade possui valor e utilidade.",

    "Je suis libre d’inventer une vie qui me ressemble.":
      "Sou livre para criar uma vida que combine comigo.",

    "Mes idées méritent d’être développées et partagées.":
      "Minhas ideias merecem ser desenvolvidas e compartilhadas.",

    "Je peux appartenir à un groupe sans renoncer à mon individualité.":
      "Posso pertencer a um grupo sem abrir mão da minha individualidade.",

    "Je crée naturellement des solutions nouvelles.":
      "Crio naturalmente novas soluções.",

    "Je fais confiance à ma vision même lorsqu’elle précède celle des autres.":
      "Confio em minha visão mesmo quando ela se antecipa à dos outros.",

    /* MESSAGE */

    "Ce mois-ci, une idée inhabituelle pourrait devenir la solution la plus logique.":
      "Neste mês, uma ideia incomum poderá se tornar a solução mais lógica.",

    "Votre besoin de liberté mérite d’être respecté, mais il peut également coexister avec l’engagement.":
      "Sua necessidade de liberdade merece ser respeitada, mas também pode coexistir com o compromisso.",

    "Une rencontre ou une collaboration pourrait stimuler un projet que vous gardiez encore en réserve.":
      "Um encontro ou uma colaboração poderá impulsionar um projeto que você ainda mantinha em reserva.",

    "Votre singularité devient une force lorsqu’elle vous rapproche de votre mission plutôt que de vous isoler.":
      "Sua singularidade se torna uma força quando aproxima você de seu propósito, em vez de isolá-lo.",

    "Un changement de perspective pourrait vous aider à sortir d’une situation devenue trop prévisible.":
      "Uma mudança de perspectiva poderá ajudar você a sair de uma situação que se tornou previsível demais.",

    "Vous êtes invité à donner une forme réelle à la vision que vous portez depuis quelque temps.":
      "Você é convidado a dar uma forma concreta à visão que vem carregando há algum tempo.",
  },
};
/* =========================================================
   POISSONS — TRANSLATIONS
========================================================= */

const MANTRA_POISSONS_TRANSLATIONS = {
  en: {
    /* MANTRA */

    "Mon intuition m’éclaire lorsque je reste ancrée dans le présent.":
      "My intuition guides me when I remain grounded in the present.",

    "Je peux être sensible sans absorber tout ce qui m’entoure.":
      "I can be sensitive without absorbing everything around me.",

    "Mon imagination ouvre des portes que la peur gardait fermées.":
      "My imagination opens doors that fear had kept closed.",

    "Je mérite une vie où ma douceur est respectée.":
      "I deserve a life in which my gentleness is respected.",

    "Je transforme mes rêves en gestes simples et concrets.":
      "I transform my dreams into simple and concrete actions.",

    "Je laisse mon cœur me guider sans oublier mes limites.":
      "I let my heart guide me without forgetting my boundaries.",

    /* INTENTION */

    "Écouter votre intuition tout en vérifiant ce qui est concret.":
      "Listen to your intuition while also checking what is concrete.",

    "Créer une limite claire face à une situation émotionnellement exigeante.":
      "Create a clear boundary in an emotionally demanding situation.",

    "Donner une forme réelle à une inspiration artistique ou spirituelle.":
      "Give real form to an artistic or spiritual inspiration.",

    "Vous accorder davantage de calme et de solitude réparatrice.":
      "Give yourself more calm and restorative solitude.",

    "Distinguer vos émotions de celles que vous absorbez autour de vous.":
      "Distinguish your own emotions from those you absorb from others.",

    "Faire un petit pas concret vers un rêve important.":
      "Take one small concrete step toward an important dream.",

    /* AFFIRMATION */

    "Ma sensibilité est une force lorsque je la protège avec conscience.":
      "My sensitivity is a strength when I protect it consciously.",

    "Je peux suivre mon intuition tout en restant ancrée.":
      "I can follow my intuition while remaining grounded.",

    "Mes rêves méritent une place dans ma réalité.":
      "My dreams deserve a place in my reality.",

    "Je suis capable de dire non avec douceur et fermeté.":
      "I am capable of saying no with gentleness and firmness.",

    "Je mérite des relations qui respectent ma profondeur émotionnelle.":
      "I deserve relationships that respect my emotional depth.",

    "Mon imagination me permet de créer de nouvelles possibilités.":
      "My imagination allows me to create new possibilities.",

    /* MESSAGE */

    "Ce mois-ci, votre intuition pourrait vous guider vers une vérité que les faits seuls ne révélaient pas encore.":
      "This month, your intuition could guide you toward a truth that facts alone had not yet revealed.",

    "Votre sensibilité a besoin de limites afin de demeurer une force plutôt qu’une source d’épuisement.":
      "Your sensitivity needs boundaries in order to remain a strength rather than become a source of exhaustion.",

    "Une inspiration pourrait devenir un projet réel si vous lui accordez une première action concrète.":
      "An inspiration could become a real project if you give it a first concrete action.",

    "Vous n’avez pas à porter les émotions de tout le monde pour prouver votre compassion.":
      "You do not have to carry everyone's emotions to prove your compassion.",

    "Un moment de calme pourrait vous permettre de reconnaître clairement la direction qui vous appelle.":
      "A moment of calm could help you clearly recognize the direction that is calling you.",

    "Vous êtes invité à croire en vos rêves tout en leur offrant une structure capable de les accueillir.":
      "You are invited to believe in your dreams while giving them a structure capable of supporting them.",
  },

  es: {
    /* MANTRA */

    "Mon intuition m’éclaire lorsque je reste ancrée dans le présent.":
      "Mi intuición me guía cuando permanezco anclado en el presente.",

    "Je peux être sensible sans absorber tout ce qui m’entoure.":
      "Puedo ser sensible sin absorber todo lo que me rodea.",

    "Mon imagination ouvre des portes que la peur gardait fermées.":
      "Mi imaginación abre puertas que el miedo mantenía cerradas.",

    "Je mérite une vie où ma douceur est respectée.":
      "Merezco una vida en la que mi sensibilidad sea respetada.",

    "Je transforme mes rêves en gestes simples et concrets.":
      "Transformo mis sueños en acciones sencillas y concretas.",

    "Je laisse mon cœur me guider sans oublier mes limites.":
      "Dejo que mi corazón me guíe sin olvidar mis límites.",

    /* INTENTION */

    "Écouter votre intuition tout en vérifiant ce qui est concret.":
      "Escucha tu intuición mientras compruebas también lo que es concreto.",

    "Créer une limite claire face à une situation émotionnellement exigeante.":
      "Establece un límite claro ante una situación emocionalmente exigente.",

    "Donner une forme réelle à une inspiration artistique ou spirituelle.":
      "Da una forma real a una inspiración artística o espiritual.",

    "Vous accorder davantage de calme et de solitude réparatrice.":
      "Concédete más calma y momentos de soledad reparadora.",

    "Distinguer vos émotions de celles que vous absorbez autour de vous.":
      "Distingue tus propias emociones de aquellas que absorbes de tu entorno.",

    "Faire un petit pas concret vers un rêve important.":
      "Da un pequeño paso concreto hacia un sueño importante.",

    /* AFFIRMATION */

    "Ma sensibilité est une force lorsque je la protège avec conscience.":
      "Mi sensibilidad es una fortaleza cuando la protejo conscientemente.",

    "Je peux suivre mon intuition tout en restant ancrée.":
      "Puedo seguir mi intuición mientras permanezco con los pies en la tierra.",

    "Mes rêves méritent une place dans ma réalité.":
      "Mis sueños merecen un lugar en mi realidad.",

    "Je suis capable de dire non avec douceur et fermeté.":
      "Soy capaz de decir no con amabilidad y firmeza.",

    "Je mérite des relations qui respectent ma profondeur émotionnelle.":
      "Merezco relaciones que respeten mi profundidad emocional.",

    "Mon imagination me permet de créer de nouvelles possibilités.":
      "Mi imaginación me permite crear nuevas posibilidades.",

    /* MESSAGE */

    "Ce mois-ci, votre intuition pourrait vous guider vers une vérité que les faits seuls ne révélaient pas encore.":
      "Este mes, tu intuición podría guiarte hacia una verdad que los hechos por sí solos todavía no habían revelado.",

    "Votre sensibilité a besoin de limites afin de demeurer une force plutôt qu’une source d’épuisement.":
      "Tu sensibilidad necesita límites para seguir siendo una fortaleza en lugar de convertirse en una fuente de agotamiento.",

    "Une inspiration pourrait devenir un projet réel si vous lui accordez une première action concrète.":
      "Una inspiración podría convertirse en un proyecto real si le das una primera acción concreta.",

    "Vous n’avez pas à porter les émotions de tout le monde pour prouver votre compassion.":
      "No necesitas cargar con las emociones de todo el mundo para demostrar tu compasión.",

    "Un moment de calme pourrait vous permettre de reconnaître clairement la direction qui vous appelle.":
      "Un momento de calma podría ayudarte a reconocer con claridad la dirección que te está llamando.",

    "Vous êtes invité à croire en vos rêves tout en leur offrant une structure capable de les accueillir.":
      "Estás invitado a creer en tus sueños mientras les das una estructura capaz de sostenerlos.",
  },

  de: {
    /* MANTRA */

    "Mon intuition m’éclaire lorsque je reste ancrée dans le présent.":
      "Meine Intuition führt mich, wenn ich in der Gegenwart verankert bleibe.",

    "Je peux être sensible sans absorber tout ce qui m’entoure.":
      "Ich kann sensibel sein, ohne alles um mich herum aufzunehmen.",

    "Mon imagination ouvre des portes que la peur gardait fermées.":
      "Meine Vorstellungskraft öffnet Türen, die die Angst verschlossen gehalten hat.",

    "Je mérite une vie où ma douceur est respectée.":
      "Ich verdiene ein Leben, in dem meine Sensibilität respektiert wird.",

    "Je transforme mes rêves en gestes simples et concrets.":
      "Ich verwandle meine Träume in einfache und konkrete Handlungen.",

    "Je laisse mon cœur me guider sans oublier mes limites.":
      "Ich lasse mich von meinem Herzen führen, ohne meine Grenzen zu vergessen.",

    /* INTENTION */

    "Écouter votre intuition tout en vérifiant ce qui est concret.":
      "Hören Sie auf Ihre Intuition und prüfen Sie gleichzeitig, was konkret ist.",

    "Créer une limite claire face à une situation émotionnellement exigeante.":
      "Setzen Sie in einer emotional belastenden Situation eine klare Grenze.",

    "Donner une forme réelle à une inspiration artistique ou spirituelle.":
      "Geben Sie einer künstlerischen oder spirituellen Inspiration eine konkrete Form.",

    "Vous accorder davantage de calme et de solitude réparatrice.":
      "Gönnen Sie sich mehr Ruhe und erholsame Zeit für sich selbst.",

    "Distinguer vos émotions de celles que vous absorbez autour de vous.":
      "Unterscheiden Sie Ihre eigenen Gefühle von denen, die Sie aus Ihrer Umgebung aufnehmen.",

    "Faire un petit pas concret vers un rêve important.":
      "Machen Sie einen kleinen konkreten Schritt in Richtung eines wichtigen Traums.",

    /* AFFIRMATION */

    "Ma sensibilité est une force lorsque je la protège avec conscience.":
      "Meine Sensibilität ist eine Stärke, wenn ich sie bewusst schütze.",

    "Je peux suivre mon intuition tout en restant ancrée.":
      "Ich kann meiner Intuition folgen und gleichzeitig geerdet bleiben.",

    "Mes rêves méritent une place dans ma réalité.":
      "Meine Träume verdienen einen Platz in meiner Realität.",

    "Je suis capable de dire non avec douceur et fermeté.":
      "Ich kann freundlich und bestimmt Nein sagen.",

    "Je mérite des relations qui respectent ma profondeur émotionnelle.":
      "Ich verdiene Beziehungen, die meine emotionale Tiefe respektieren.",

    "Mon imagination me permet de créer de nouvelles possibilités.":
      "Meine Vorstellungskraft ermöglicht es mir, neue Möglichkeiten zu schaffen.",

    /* MESSAGE */

    "Ce mois-ci, votre intuition pourrait vous guider vers une vérité que les faits seuls ne révélaient pas encore.":
      "In diesem Monat könnte Ihre Intuition Sie zu einer Wahrheit führen, die die Fakten allein bisher noch nicht erkennen ließen.",

    "Votre sensibilité a besoin de limites afin de demeurer une force plutôt qu’une source d’épuisement.":
      "Ihre Sensibilität braucht Grenzen, damit sie eine Stärke bleibt und nicht zu einer Quelle der Erschöpfung wird.",

    "Une inspiration pourrait devenir un projet réel si vous lui accordez une première action concrète.":
      "Eine Inspiration könnte zu einem echten Projekt werden, wenn Sie ihr einen ersten konkreten Schritt geben.",

    "Vous n’avez pas à porter les émotions de tout le monde pour prouver votre compassion.":
      "Sie müssen nicht die Gefühle aller Menschen tragen, um Ihr Mitgefühl zu beweisen.",

    "Un moment de calme pourrait vous permettre de reconnaître clairement la direction qui vous appelle.":
      "Ein Moment der Ruhe könnte Ihnen helfen, die Richtung klar zu erkennen, die Sie ruft.",

    "Vous êtes invité à croire en vos rêves tout en leur offrant une structure capable de les accueillir.":
      "Sie sind eingeladen, an Ihre Träume zu glauben und ihnen gleichzeitig eine Struktur zu geben, die sie tragen kann.",
  },

  it: {
    /* MANTRA */

    "Mon intuition m’éclaire lorsque je reste ancrée dans le présent.":
      "La mia intuizione mi guida quando rimango radicato nel presente.",

    "Je peux être sensible sans absorber tout ce qui m’entoure.":
      "Posso essere sensibile senza assorbire tutto ciò che mi circonda.",

    "Mon imagination ouvre des portes que la peur gardait fermées.":
      "La mia immaginazione apre porte che la paura teneva chiuse.",

    "Je mérite une vie où ma douceur est respectée.":
      "Merito una vita in cui la mia sensibilità venga rispettata.",

    "Je transforme mes rêves en gestes simples et concrets.":
      "Trasformo i miei sogni in azioni semplici e concrete.",

    "Je laisse mon cœur me guider sans oublier mes limites.":
      "Lascio che il mio cuore mi guidi senza dimenticare i miei limiti.",

    /* INTENTION */

    "Écouter votre intuition tout en vérifiant ce qui est concret.":
      "Ascoltate la vostra intuizione verificando al tempo stesso ciò che è concreto.",

    "Créer une limite claire face à une situation émotionnellement exigeante.":
      "Create un limite chiaro di fronte a una situazione emotivamente impegnativa.",

    "Donner une forme réelle à une inspiration artistique ou spirituelle.":
      "Date una forma reale a un’ispirazione artistica o spirituale.",

    "Vous accorder davantage de calme et de solitude réparatrice.":
      "Concedetevi più calma e momenti di solitudine rigenerante.",

    "Distinguer vos émotions de celles que vous absorbez autour de vous.":
      "Distinguete le vostre emozioni da quelle che assorbite dall’ambiente circostante.",

    "Faire un petit pas concret vers un rêve important.":
      "Fate un piccolo passo concreto verso un sogno importante.",

    /* AFFIRMATION */

    "Ma sensibilité est une force lorsque je la protège avec conscience.":
      "La mia sensibilità è una forza quando la proteggo con consapevolezza.",

    "Je peux suivre mon intuition tout en restant ancrée.":
      "Posso seguire la mia intuizione rimanendo al tempo stesso con i piedi per terra.",

    "Mes rêves méritent une place dans ma réalité.":
      "I miei sogni meritano un posto nella mia realtà.",

    "Je suis capable de dire non avec douceur et fermeté.":
      "Sono capace di dire no con dolcezza e fermezza.",

    "Je mérite des relations qui respectent ma profondeur émotionnelle.":
      "Merito relazioni che rispettino la mia profondità emotiva.",

    "Mon imagination me permet de créer de nouvelles possibilités.":
      "La mia immaginazione mi permette di creare nuove possibilità.",

    /* MESSAGE */

    "Ce mois-ci, votre intuition pourrait vous guider vers une vérité que les faits seuls ne révélaient pas encore.":
      "Questo mese, la vostra intuizione potrebbe guidarvi verso una verità che i fatti da soli non avevano ancora rivelato.",

    "Votre sensibilité a besoin de limites afin de demeurer une force plutôt qu’une source d’épuisement.":
      "La vostra sensibilità ha bisogno di limiti per rimanere una forza invece di diventare una fonte di esaurimento.",

    "Une inspiration pourrait devenir un projet réel si vous lui accordez une première action concrète.":
      "Un’ispirazione potrebbe diventare un progetto reale se le dedicate una prima azione concreta.",

    "Vous n’avez pas à porter les émotions de tout le monde pour prouver votre compassion.":
      "Non dovete portare le emozioni di tutti per dimostrare la vostra compassione.",

    "Un moment de calme pourrait vous permettre de reconnaître clairement la direction qui vous appelle.":
      "Un momento di calma potrebbe permettervi di riconoscere chiaramente la direzione che vi sta chiamando.",

    "Vous êtes invité à croire en vos rêves tout en leur offrant une structure capable de les accueillir.":
      "Siete invitati a credere nei vostri sogni offrendo loro al tempo stesso una struttura capace di sostenerli.",
  },

  pt: {
    /* MANTRA */

    "Mon intuition m’éclaire lorsque je reste ancrée dans le présent.":
      "Minha intuição me orienta quando permaneço conectado ao presente.",

    "Je peux être sensible sans absorber tout ce qui m’entoure.":
      "Posso ser sensível sem absorver tudo o que está ao meu redor.",

    "Mon imagination ouvre des portes que la peur gardait fermées.":
      "Minha imaginação abre portas que o medo mantinha fechadas.",

    "Je mérite une vie où ma douceur est respectée.":
      "Mereço uma vida em que minha sensibilidade seja respeitada.",

    "Je transforme mes rêves en gestes simples et concrets.":
      "Transformo meus sonhos em ações simples e concretas.",

    "Je laisse mon cœur me guider sans oublier mes limites.":
      "Deixo meu coração me guiar sem esquecer meus limites.",

    /* INTENTION */

    "Écouter votre intuition tout en vérifiant ce qui est concret.":
      "Escute sua intuição e, ao mesmo tempo, verifique aquilo que é concreto.",

    "Créer une limite claire face à une situation émotionnellement exigeante.":
      "Estabeleça um limite claro diante de uma situação emocionalmente exigente.",

    "Donner une forme réelle à une inspiration artistique ou spirituelle.":
      "Dê uma forma real a uma inspiração artística ou espiritual.",

    "Vous accorder davantage de calme et de solitude réparatrice.":
      "Permita-se mais calma e momentos de solitude restauradora.",

    "Distinguer vos émotions de celles que vous absorbez autour de vous.":
      "Diferencie suas próprias emoções daquelas que você absorve ao seu redor.",

    "Faire un petit pas concret vers un rêve important.":
      "Dê um pequeno passo concreto em direção a um sonho importante.",

    /* AFFIRMATION */

    "Ma sensibilité est une force lorsque je la protège avec conscience.":
      "Minha sensibilidade é uma força quando a protejo com consciência.",

    "Je peux suivre mon intuition tout en restant ancrée.":
      "Posso seguir minha intuição e, ao mesmo tempo, permanecer conectado à realidade.",

    "Mes rêves méritent une place dans ma réalité.":
      "Meus sonhos merecem um lugar em minha realidade.",

    "Je suis capable de dire non avec douceur et fermeté.":
      "Sou capaz de dizer não com gentileza e firmeza.",

    "Je mérite des relations qui respectent ma profondeur émotionnelle.":
      "Mereço relacionamentos que respeitem minha profundidade emocional.",

    "Mon imagination me permet de créer de nouvelles possibilités.":
      "Minha imaginação me permite criar novas possibilidades.",

    /* MESSAGE */

    "Ce mois-ci, votre intuition pourrait vous guider vers une vérité que les faits seuls ne révélaient pas encore.":
      "Neste mês, sua intuição poderá guiar você em direção a uma verdade que os fatos, por si só, ainda não haviam revelado.",

    "Votre sensibilité a besoin de limites afin de demeurer une force plutôt qu’une source d’épuisement.":
      "Sua sensibilidade precisa de limites para continuar sendo uma força, em vez de se tornar uma fonte de esgotamento.",

    "Une inspiration pourrait devenir un projet réel si vous lui accordez une première action concrète.":
      "Uma inspiração poderá se transformar em um projeto real se você lhe dedicar uma primeira ação concreta.",

    "Vous n’avez pas à porter les émotions de tout le monde pour prouver votre compassion.":
      "Você não precisa carregar as emoções de todo mundo para demonstrar sua compaixão.",

    "Un moment de calme pourrait vous permettre de reconnaître clairement la direction qui vous appelle.":
      "Um momento de calma poderá ajudar você a reconhecer claramente a direção que está chamando por você.",

    "Vous êtes invité à croire en vos rêves tout en leur offrant une structure capable de les accueillir.":
      "Você é convidado a acreditar em seus sonhos e, ao mesmo tempo, oferecer a eles uma estrutura capaz de sustentá-los.",
  },
};
/* =========================================================
   TYPES
========================================================= */

type TranslationMap =
  Record<string, string>;

type ZodiacTranslationMap =
  Record<
    string,
    Partial<
      Record<
        PaidPdfLocale,
        TranslationMap
      >
    >
  >;

/* =========================================================
   ALL ZODIAC TRANSLATIONS
========================================================= */

const MANTRA_TRANSLATIONS_BY_SIGN: ZodiacTranslationMap = {
  belier:
    MANTRA_BELIER_TRANSLATIONS,

  taureau:
    MANTRA_TAUREAU_TRANSLATIONS,

  gemeaux:
    MANTRA_GEMEAUX_TRANSLATIONS,

  cancer:
    MANTRA_CANCER_TRANSLATIONS,

  lion:
    MANTRA_LION_TRANSLATIONS,

  vierge:
    MANTRA_VIERGE_TRANSLATIONS,

  balance:
    MANTRA_BALANCE_TRANSLATIONS,

  scorpion:
    MANTRA_SCORPION_TRANSLATIONS,

  sagittaire:
    MANTRA_SAGITTAIRE_TRANSLATIONS,

  capricorne:
    MANTRA_CAPRICORNE_TRANSLATIONS,

  verseau:
    MANTRA_VERSEAU_TRANSLATIONS,

  poissons:
    MANTRA_POISSONS_TRANSLATIONS,
};

/* =========================================================
   APPLY TRANSLATIONS
========================================================= */

function applyTranslations(
  source: string,
  translations: TranslationMap,
): string {
  let output = source;

  for (
    const [from, to]
    of Object.entries(translations)
  ) {
    output =
      output.split(from).join(to);
  }

  return output;
}

/* =========================================================
   SIGN DETECTION
========================================================= */

function detectZodiacSign(
  source: string,
): string | null {
  const normalized =
    source
      .toLowerCase()
      .normalize("NFD")
      .replace(
        /[\u0300-\u036f]/g,
        "",
      );

  const signs = [
    "belier",
    "taureau",
    "gemeaux",
    "cancer",
    "lion",
    "vierge",
    "balance",
    "scorpion",
    "sagittaire",
    "capricorne",
    "verseau",
    "poissons",
  ];

  for (const sign of signs) {
    if (
      normalized.includes(
        `"${sign}"`,
      ) ||
      normalized.includes(
        `'${sign}'`,
      ) ||
      normalized.includes(
        `${sign}:`,
      )
    ) {
      return sign;
    }
  }

  return null;
}

/* =========================================================
   LOCALIZER
========================================================= */

export function localizeYearHoroscopeMantra(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let output = source;

  /*
  |----------------------------------------------------------
  | IMPORTANT
  |----------------------------------------------------------
  |
  | Le fichier createYearlyMantraTexts contient les 12 signes.
  | On applique donc toutes les banques du locale demandé.
  |
  | Cette méthode évite de dépendre d'une détection du signe
  | au moment du build.
  |
  */

  const signs = [
    "belier",
    "taureau",
    "gemeaux",
    "cancer",
    "lion",
    "vierge",
    "balance",
    "scorpion",
    "sagittaire",
    "capricorne",
    "verseau",
    "poissons",
  ];

  for (const sign of signs) {
    const translations =
      MANTRA_TRANSLATIONS_BY_SIGN[
        sign
      ]?.[locale];

    if (!translations) {
      continue;
    }

    output =
      applyTranslations(
        output,
        translations,
      );
  }

  return output;
}
