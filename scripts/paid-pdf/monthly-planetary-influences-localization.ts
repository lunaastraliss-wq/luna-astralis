import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type TranslationMap =
  Record<string, string>;

/* =========================================================
   TRANSLATIONS
========================================================= */

const TRANSLATIONS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    /* Planètes */
    "Soleil": "Sun",
    "Lune": "Moon",
    "Mercure": "Mercury",
    "Vénus": "Venus",
    "Mars": "Mars",
    "Jupiter": "Jupiter",
    "Saturne": "Saturn",
    "Uranus": "Uranus",
    "Neptune": "Neptune",
    "Pluton": "Pluto",

    /* Labels */
    "Influence dominante du mois":
      "Dominant influence of the month",

    "Tendance mensuelle":
      "Monthly trend",

    /* Soleil */
    "Retrouver une direction claire":
      "Regain a clear direction",

    "Le Soleil met l’accent sur votre identité, votre volonté et la manière dont vous souhaitez prendre votre place. Ce mois favorise les choix cohérents avec ce que vous voulez réellement construire.":
      "The Sun emphasizes your identity, your willpower, and the way you want to take your place. This month favors choices that align with what you truly want to build.",

    "Choisissez une priorité qui vous ressemble et donnez-lui une place visible dans votre quotidien.":
      "Choose a priority that reflects who you are and give it a visible place in your daily life.",

    "Assumer davantage votre présence":
      "Own your presence more fully",

    "Votre besoin d’expression devient plus important. Vous pourriez ressentir l’envie de montrer votre travail, de défendre une idée ou de reprendre la direction d’une situation devenue trop passive.":
      "Your need for expression becomes stronger. You may feel the desire to show your work, defend an idea, or take back control of a situation that has become too passive.",

    "Exprimez votre intention avec simplicité plutôt que de chercher à convaincre tout le monde.":
      "Express your intention simply rather than trying to convince everyone.",

    /* Lune */
    "Écouter vos besoins émotionnels":
      "Listen to your emotional needs",

    "La Lune souligne votre sensibilité, vos habitudes et votre besoin de sécurité. Certaines réactions vous aideront à reconnaître ce qui vous apaise réellement et ce qui vous demande trop d’énergie.":
      "The Moon highlights your sensitivity, habits, and need for security. Some reactions will help you recognize what truly soothes you and what demands too much of your energy.",

    "Accordez-vous du recul avant de répondre lorsque l’émotion devient plus forte que la situation.":
      "Give yourself some distance before responding when emotion becomes stronger than the situation.",

    "Créer un rythme plus protecteur":
      "Create a more protective rhythm",

    "Votre équilibre dépendra davantage de la qualité de votre environnement et de vos moments de récupération. Les échanges sincères et les repères familiers auront un effet stabilisant.":
      "Your balance will depend more on the quality of your environment and your recovery periods. Sincere exchanges and familiar reference points will have a stabilizing effect.",

    "Préservez régulièrement un espace calme où vous n’avez rien à prouver ni à résoudre.":
      "Regularly preserve a calm space where you have nothing to prove or solve.",

    /* Mercure */
    "Clarifier vos idées et vos échanges":
      "Clarify your ideas and conversations",

    "Mercure stimule la réflexion, les démarches et les conversations importantes. Une information ou une discussion peut modifier votre compréhension d’un projet ou d’une relation.":
      "Mercury stimulates reflection, initiatives, and important conversations. Information or a discussion may change your understanding of a project or relationship.",

    "Vérifiez les détails et reformulez clairement ce que vous attendez avant de conclure.":
      "Check the details and clearly restate what you expect before reaching a conclusion.",

    "Transformer une idée en plan concret":
      "Turn an idea into a concrete plan",

    "Votre esprit cherche des solutions pratiques. Une intention encore floue peut devenir réalisable si vous la divisez en étapes simples et mesurables.":
      "Your mind is looking for practical solutions. An intention that is still unclear can become achievable if you divide it into simple, measurable steps.",

    "Notez votre prochaine action précise au lieu de conserver seulement l’idée générale.":
      "Write down your next specific action instead of keeping only the general idea.",

    /* Vénus */
    "Favoriser des liens plus sincères":
      "Encourage more sincere connections",

    "Vénus met en lumière l’affection, les valeurs et la qualité de vos relations. Les gestes réguliers et la disponibilité émotionnelle auront davantage d’impact que les grandes déclarations.":
      "Venus highlights affection, values, and the quality of your relationships. Regular gestures and emotional availability will have more impact than grand declarations.",

    "Montrez votre attachement d’une manière concrète et laissez l’autre répondre à son propre rythme.":
      "Show your attachment in a concrete way and let the other person respond at their own pace.",

    "Rééquilibrer plaisir et sécurité":
      "Rebalance pleasure and security",

    "Ce mois vous invite à mieux reconnaître ce qui vous fait du bien sans fragiliser votre stabilité. Cette réflexion peut concerner vos relations, vos dépenses ou votre environnement.":
      "This month invites you to better recognize what feels good without weakening your stability. This reflection may concern your relationships, spending, or environment.",

    "Choisissez ce qui apporte une satisfaction durable plutôt qu’un apaisement très temporaire.":
      "Choose what brings lasting satisfaction rather than very temporary relief.",

    /* Mars */
    "Canaliser votre volonté":
      "Channel your will",

    "Mars renforce l’initiative, le courage et le désir d’obtenir des résultats. Votre énergie sera plus efficace lorsqu’elle sera dirigée vers une priorité précise plutôt que dispersée entre plusieurs urgences.":
      "Mars strengthens initiative, courage, and the desire to achieve results. Your energy will be more effective when directed toward one specific priority rather than scattered across several urgent matters.",

    "Agissez rapidement sur ce qui dépend de vous, puis laissez le temps faire son travail sur le reste.":
      "Act quickly on what depends on you, then let time do its work on the rest.",

    "Affirmer vos limites avec calme":
      "Assert your boundaries calmly",

    "Une situation peut vous demander davantage de fermeté. Vous aurez intérêt à défendre votre position sans transformer une divergence en confrontation inutile.":
      "A situation may require greater firmness. You will benefit from defending your position without turning a disagreement into unnecessary confrontation.",

    "Dites clairement ce que vous acceptez et ce que vous refusez, sans multiplier les justifications.":
      "Clearly state what you accept and what you refuse without overexplaining yourself.",

    /* Jupiter */
    "Élargir une possibilité":
      "Broaden a possibility",

    "Jupiter soutient la croissance, la confiance et l’ouverture à de nouvelles perspectives. Une occasion peut prendre de l’importance si vous lui donnez une structure réaliste.":
      "Jupiter supports growth, confidence, and openness to new perspectives. An opportunity may become more important if you give it a realistic structure.",

    "Voyez plus grand, mais vérifiez les ressources et le temps nécessaires avant de vous engager.":
      "Think bigger, but check the resources and time required before committing.",

    "Faire confiance à votre progression":
      "Trust your progress",

    "Vous pourriez constater qu’une démarche avance davantage que vous ne le pensiez. Les résultats les plus solides viendront toutefois d’efforts réguliers plutôt que d’un seul grand geste.":
      "You may discover that an initiative is progressing more than you thought. The strongest results will nevertheless come from consistent effort rather than one major action.",

    "Appuyez votre optimisme sur une action concrète répétée chaque semaine.":
      "Support your optimism with one concrete action repeated every week.",

    /* Saturne */
    "Consolider ce qui compte":
      "Strengthen what matters",

    "Saturne rappelle l’importance des limites, de la constance et des responsabilités choisies. Ce mois favorise les décisions capables de soutenir votre stabilité à long terme.":
      "Saturn reminds you of the importance of boundaries, consistency, and chosen responsibilities. This month favors decisions that can support your long-term stability.",

    "Réduisez les engagements inutiles afin de mieux respecter ceux qui ont une véritable valeur.":
      "Reduce unnecessary commitments so you can better honor those that truly matter.",

    "Donner une structure à vos ambitions":
      "Give structure to your ambitions",

    "Une ambition demande maintenant une méthode plus précise. Les contraintes rencontrées peuvent vous aider à corriger votre organisation plutôt qu’à abandonner votre objectif.":
      "An ambition now requires a more precise method. The constraints you encounter can help you improve your organization rather than abandon your goal.",

    "Mesurez votre progrès selon votre constance, pas seulement selon la rapidité du résultat.":
      "Measure your progress by your consistency, not only by the speed of the result.",

    /* Uranus */
    "Ouvrir une nouvelle voie":
      "Open a new path",

    "Uranus encourage l’innovation, l’indépendance et les changements qui libèrent une énergie devenue stagnante. Une solution différente peut apparaître lorsque vous cessez de répéter l’ancienne méthode.":
      "Uranus encourages innovation, independence, and changes that free stagnant energy. A different solution may appear when you stop repeating the old method.",

    "Expérimentez un changement précis sans bouleverser inutilement tout ce qui fonctionne déjà.":
      "Experiment with one specific change without unnecessarily disrupting everything that already works.",

    "Reprendre votre liberté de décision":
      "Regain your freedom of choice",

    "Vous pourriez ressentir plus fortement le besoin de choisir selon vos propres critères. Cette évolution sera constructive si elle repose sur une intention claire plutôt que sur une réaction soudaine.":
      "You may feel a stronger need to choose according to your own criteria. This evolution will be constructive if it is based on a clear intention rather than a sudden reaction.",

    "Modifiez ce qui limite réellement votre progression, pas seulement ce qui vous contrarie momentanément.":
      "Change what truly limits your progress, not simply what temporarily annoys you.",

    /* Neptune */
    "Écouter votre intuition avec discernement":
      "Listen to your intuition with discernment",

    "Neptune accentue l’imagination, la sensibilité et la perception de ce qui n’est pas encore clairement formulé. Une impression récurrente mérite votre attention, mais aussi une vérification concrète.":
      "Neptune heightens imagination, sensitivity, and the perception of what has not yet been clearly expressed. A recurring impression deserves your attention, but also concrete verification.",

    "Accueillez votre ressenti, puis cherchez les faits capables de le confirmer ou de le nuancer.":
      "Acknowledge what you feel, then look for facts that can confirm or qualify it.",

    "Protéger votre clarté intérieure":
      "Protect your inner clarity",

    "Les ambiances et les émotions extérieures peuvent vous influencer davantage. Un moment de retrait vous permettra de distinguer vos véritables besoins de ce que vous absorbez autour de vous.":
      "External atmospheres and emotions may influence you more strongly. A moment of withdrawal will help you distinguish your true needs from what you absorb around you.",

    "Éloignez-vous temporairement du bruit lorsque vous devez prendre une décision importante.":
      "Temporarily distance yourself from the noise when you need to make an important decision.",

    /* Pluton */
    "Transformer une situation en profondeur":
      "Transform a situation deeply",

    "Pluton met l’accent sur les changements irréversibles, les vérités cachées et la capacité à reprendre votre pouvoir. Une situation peut vous montrer clairement ce qui ne peut plus continuer de la même manière.":
      "Pluto emphasizes irreversible changes, hidden truths, and your ability to reclaim your power. A situation may clearly show you what can no longer continue in the same way.",

    "Laissez derrière vous ce qui a terminé son rôle au lieu d’essayer de lui redonner son ancienne forme.":
      "Leave behind what has completed its role instead of trying to restore its former shape.",

    "Retrouver votre pouvoir de choix":
      "Regain your power of choice",

    "Une prise de conscience peut modifier votre rapport à une relation, une peur ou une obligation. Cette lucidité vous aidera à agir depuis une position plus solide.":
      "An awareness can change your relationship with a relationship, a fear, or an obligation. This clarity will help you act from a stronger position.",

    "Concentrez-vous sur ce que vous pouvez réellement décider, changer ou protéger dès maintenant.":
      "Focus on what you can truly decide, change, or protect right now.",
  },

  es: {
    "Soleil": "Sol",
    "Lune": "Luna",
    "Mercure": "Mercurio",
    "Vénus": "Venus",
    "Mars": "Marte",
    "Jupiter": "Júpiter",
    "Saturne": "Saturno",
    "Uranus": "Urano",
    "Neptune": "Neptuno",
    "Pluton": "Plutón",

    "Influence dominante du mois":
      "Influencia dominante del mes",
    "Tendance mensuelle":
      "Tendencia mensual",

    "Retrouver une direction claire":
      "Recuperar una dirección clara",
    "Assumer davantage votre présence":
      "Asumir más plenamente su presencia",
    "Écouter vos besoins émotionnels":
      "Escuchar sus necesidades emocionales",
    "Créer un rythme plus protecteur":
      "Crear un ritmo más protector",
    "Clarifier vos idées et vos échanges":
      "Aclarar sus ideas y sus intercambios",
    "Transformer une idée en plan concret":
      "Convertir una idea en un plan concreto",
    "Favoriser des liens plus sincères":
      "Favorecer vínculos más sinceros",
    "Rééquilibrer plaisir et sécurité":
      "Reequilibrar placer y seguridad",
    "Canaliser votre volonté":
      "Canalizar su voluntad",
    "Affirmer vos limites avec calme":
      "Afirmar sus límites con calma",
    "Élargir une possibilité":
      "Ampliar una posibilidad",
    "Faire confiance à votre progression":
      "Confiar en su progreso",
    "Consolider ce qui compte":
      "Consolidar lo que importa",
    "Donner une structure à vos ambitions":
      "Dar estructura a sus ambiciones",
    "Ouvrir une nouvelle voie":
      "Abrir un nuevo camino",
    "Reprendre votre liberté de décision":
      "Recuperar su libertad de decisión",
    "Écouter votre intuition avec discernement":
      "Escuchar su intuición con discernimiento",
    "Protéger votre clarté intérieure":
      "Proteger su claridad interior",
    "Transformer une situation en profondeur":
      "Transformar profundamente una situación",
    "Retrouver votre pouvoir de choix":
      "Recuperar su poder de elección",
  },

  de: {
    "Soleil": "Sonne",
    "Lune": "Mond",
    "Mercure": "Merkur",
    "Vénus": "Venus",
    "Mars": "Mars",
    "Jupiter": "Jupiter",
    "Saturne": "Saturn",
    "Uranus": "Uranus",
    "Neptune": "Neptun",
    "Pluton": "Pluto",

    "Influence dominante du mois":
      "Dominanter Einfluss des Monats",
    "Tendance mensuelle":
      "Monatliche Tendenz",

    "Retrouver une direction claire":
      "Eine klare Richtung wiederfinden",
    "Assumer davantage votre présence":
      "Ihre Präsenz stärker zeigen",
    "Écouter vos besoins émotionnels":
      "Auf Ihre emotionalen Bedürfnisse hören",
    "Créer un rythme plus protecteur":
      "Einen schützenderen Rhythmus schaffen",
    "Clarifier vos idées et vos échanges":
      "Ihre Gedanken und Gespräche klären",
    "Transformer une idée en plan concret":
      "Eine Idee in einen konkreten Plan verwandeln",
    "Favoriser des liens plus sincères":
      "Aufrichtigere Verbindungen fördern",
    "Rééquilibrer plaisir et sécurité":
      "Freude und Sicherheit neu ausbalancieren",
    "Canaliser votre volonté":
      "Ihre Willenskraft bündeln",
    "Affirmer vos limites avec calme":
      "Ihre Grenzen ruhig vertreten",
    "Élargir une possibilité":
      "Eine Möglichkeit erweitern",
    "Faire confiance à votre progression":
      "Ihrem Fortschritt vertrauen",
    "Consolider ce qui compte":
      "Festigen, was wichtig ist",
    "Donner une structure à vos ambitions":
      "Ihren Ambitionen Struktur geben",
    "Ouvrir une nouvelle voie":
      "Einen neuen Weg öffnen",
    "Reprendre votre liberté de décision":
      "Ihre Entscheidungsfreiheit zurückgewinnen",
    "Écouter votre intuition avec discernement":
      "Mit Urteilsvermögen auf Ihre Intuition hören",
    "Protéger votre clarté intérieure":
      "Ihre innere Klarheit schützen",
    "Transformer une situation en profondeur":
      "Eine Situation tiefgreifend verändern",
    "Retrouver votre pouvoir de choix":
      "Ihre Entscheidungsfreiheit zurückgewinnen",
  },

  it: {
    "Soleil": "Sole",
    "Lune": "Luna",
    "Mercure": "Mercurio",
    "Vénus": "Venere",
    "Mars": "Marte",
    "Jupiter": "Giove",
    "Saturne": "Saturno",
    "Uranus": "Urano",
    "Neptune": "Nettuno",
    "Pluton": "Plutone",

    "Influence dominante du mois":
      "Influenza dominante del mese",
    "Tendance mensuelle":
      "Tendenza mensile",

    "Retrouver une direction claire":
      "Ritrovare una direzione chiara",
    "Assumer davantage votre présence":
      "Affermare maggiormente la tua presenza",
    "Écouter vos besoins émotionnels":
      "Ascoltare i tuoi bisogni emotivi",
    "Créer un rythme plus protecteur":
      "Creare un ritmo più protettivo",
    "Clarifier vos idées et vos échanges":
      "Chiarire le tue idee e i tuoi scambi",
    "Transformer une idée en plan concret":
      "Trasformare un'idea in un piano concreto",
    "Favoriser des liens plus sincères":
      "Favorire legami più sinceri",
    "Rééquilibrer plaisir et sécurité":
      "Riequilibrare piacere e sicurezza",
    "Canaliser votre volonté":
      "Canalizzare la tua volontà",
    "Affirmer vos limites avec calme":
      "Affermare i tuoi limiti con calma",
    "Élargir une possibilité":
      "Ampliare una possibilità",
    "Faire confiance à votre progression":
      "Fidarti dei tuoi progressi",
    "Consolider ce qui compte":
      "Consolidare ciò che conta",
    "Donner une structure à vos ambitions":
      "Dare struttura alle tue ambizioni",
    "Ouvrir une nouvelle voie":
      "Aprire una nuova strada",
    "Reprendre votre liberté de décision":
      "Riprendere la tua libertà di scelta",
    "Écouter votre intuition avec discernement":
      "Ascoltare la tua intuizione con discernimento",
    "Protéger votre clarté intérieure":
      "Proteggere la tua chiarezza interiore",
    "Transformer une situation en profondeur":
      "Trasformare profondamente una situazione",
    "Retrouver votre pouvoir de choix":
      "Ritrovare il tuo potere di scelta",
  },

  pt: {
    "Soleil": "Sol",
    "Lune": "Lua",
    "Mercure": "Mercúrio",
    "Vénus": "Vênus",
    "Mars": "Marte",
    "Jupiter": "Júpiter",
    "Saturne": "Saturno",
    "Uranus": "Urano",
    "Neptune": "Netuno",
    "Pluton": "Plutão",

    "Influence dominante du mois":
      "Influência dominante do mês",
    "Tendance mensuelle":
      "Tendência mensal",

    "Retrouver une direction claire":
      "Recuperar uma direção clara",
    "Assumer davantage votre présence":
      "Assumir mais plenamente sua presença",
    "Écouter vos besoins émotionnels":
      "Ouvir suas necessidades emocionais",
    "Créer un rythme plus protecteur":
      "Criar um ritmo mais protetor",
    "Clarifier vos idées et vos échanges":
      "Esclarecer suas ideias e conversas",
    "Transformer une idée en plan concret":
      "Transformar uma ideia em um plano concreto",
    "Favoriser des liens plus sincères":
      "Favorecer vínculos mais sinceros",
    "Rééquilibrer plaisir et sécurité":
      "Reequilibrar prazer e segurança",
    "Canaliser votre volonté":
      "Canalizar sua vontade",
    "Affirmer vos limites avec calme":
      "Afirmar seus limites com calma",
    "Élargir une possibilité":
      "Ampliar uma possibilidade",
    "Faire confiance à votre progression":
      "Confiar no seu progresso",
    "Consolider ce qui compte":
      "Consolidar o que importa",
    "Donner une structure à vos ambitions":
      "Dar estrutura às suas ambições",
    "Ouvrir une nouvelle voie":
      "Abrir um novo caminho",
    "Reprendre votre liberté de décision":
      "Recuperar sua liberdade de escolha",
    "Écouter votre intuition avec discernement":
      "Ouvir sua intuição com discernimento",
    "Protéger votre clarté intérieure":
      "Proteger sua clareza interior",
    "Transformer une situation en profondeur":
      "Transformar profundamente uma situação",
    "Retrouver votre pouvoir de choix":
      "Recuperar seu poder de escolha",
  },
};

/* =========================================================
   EN/ES/DE/IT/PT LONG MONTHLY TEXT
========================================================= */

/*
 * Les textes longs ES/DE/IT/PT sont traduits
 * dynamiquement par fragments structurés ci-dessous,
 * afin de ne pas devoir modifier le builder original.
 */

const LONG_TEXT_TRANSLATIONS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: TRANSLATIONS.en,

  es: {
    "Le Soleil met l’accent sur votre identité, votre volonté et la manière dont vous souhaitez prendre votre place. Ce mois favorise les choix cohérents avec ce que vous voulez réellement construire.":
      "El Sol pone el énfasis en su identidad, su voluntad y la manera en que desea ocupar su lugar. Este mes favorece las decisiones coherentes con lo que realmente desea construir.",

    "Choisissez une priorité qui vous ressemble et donnez-lui une place visible dans votre quotidien.":
      "Elija una prioridad que le represente y dele un lugar visible en su vida cotidiana.",

    "Votre besoin d’expression devient plus important. Vous pourriez ressentir l’envie de montrer votre travail, de défendre une idée ou de reprendre la direction d’une situation devenue trop passive.":
      "Su necesidad de expresión se vuelve más importante. Puede sentir el deseo de mostrar su trabajo, defender una idea o retomar la dirección de una situación que se ha vuelto demasiado pasiva.",

    "Exprimez votre intention avec simplicité plutôt que de chercher à convaincre tout le monde.":
      "Exprese su intención con sencillez en lugar de intentar convencer a todo el mundo.",

    "La Lune souligne votre sensibilité, vos habitudes et votre besoin de sécurité. Certaines réactions vous aideront à reconnaître ce qui vous apaise réellement et ce qui vous demande trop d’énergie.":
      "La Luna destaca su sensibilidad, sus hábitos y su necesidad de seguridad. Algunas reacciones le ayudarán a reconocer lo que realmente le calma y lo que consume demasiada energía.",

    "Accordez-vous du recul avant de répondre lorsque l’émotion devient plus forte que la situation.":
      "Tome cierta distancia antes de responder cuando la emoción sea más fuerte que la situación.",

    "Votre équilibre dépendra davantage de la qualité de votre environnement et de vos moments de récupération. Les échanges sincères et les repères familiers auront un effet stabilisant.":
      "Su equilibrio dependerá más de la calidad de su entorno y de sus momentos de recuperación. Los intercambios sinceros y los puntos de referencia familiares tendrán un efecto estabilizador.",

    "Préservez régulièrement un espace calme où vous n’avez rien à prouver ni à résoudre.":
      "Reserve regularmente un espacio tranquilo donde no tenga nada que demostrar ni resolver.",

    "Mercure stimule la réflexion, les démarches et les conversations importantes. Une information ou une discussion peut modifier votre compréhension d’un projet ou d’une relation.":
      "Mercurio estimula la reflexión, las iniciativas y las conversaciones importantes. Una información o una conversación puede modificar su comprensión de un proyecto o una relación.",

    "Vérifiez les détails et reformulez clairement ce que vous attendez avant de conclure.":
      "Verifique los detalles y exprese claramente lo que espera antes de sacar una conclusión.",

    "Votre esprit cherche des solutions pratiques. Une intention encore floue peut devenir réalisable si vous la divisez en étapes simples et mesurables.":
      "Su mente busca soluciones prácticas. Una intención todavía imprecisa puede hacerse realizable si la divide en pasos simples y medibles.",

    "Notez votre prochaine action précise au lieu de conserver seulement l’idée générale.":
      "Anote su próxima acción concreta en lugar de conservar únicamente la idea general.",

    "Vénus met en lumière l’affection, les valeurs et la qualité de vos relations. Les gestes réguliers et la disponibilité émotionnelle auront davantage d’impact que les grandes déclarations.":
      "Venus destaca el afecto, los valores y la calidad de sus relaciones. Los gestos regulares y la disponibilidad emocional tendrán más impacto que las grandes declaraciones.",

    "Montrez votre attachement d’une manière concrète et laissez l’autre répondre à son propre rythme.":
      "Muestre su afecto de manera concreta y deje que la otra persona responda a su propio ritmo.",

    "Ce mois vous invite à mieux reconnaître ce qui vous fait du bien sans fragiliser votre stabilité. Cette réflexion peut concerner vos relations, vos dépenses ou votre environnement.":
      "Este mes le invita a reconocer mejor lo que le hace bien sin debilitar su estabilidad. Esta reflexión puede referirse a sus relaciones, gastos o entorno.",

    "Choisissez ce qui apporte une satisfaction durable plutôt qu’un apaisement très temporaire.":
      "Elija lo que aporte una satisfacción duradera en lugar de un alivio muy temporal.",

    "Mars renforce l’initiative, le courage et le désir d’obtenir des résultats. Votre énergie sera plus efficace lorsqu’elle sera dirigée vers une priorité précise plutôt que dispersée entre plusieurs urgences.":
      "Marte refuerza la iniciativa, el valor y el deseo de obtener resultados. Su energía será más eficaz cuando se dirija hacia una prioridad concreta en lugar de dispersarse entre varias urgencias.",

    "Agissez rapidement sur ce qui dépend de vous, puis laissez le temps faire son travail sur le reste.":
      "Actúe rápidamente sobre lo que depende de usted y deje que el tiempo haga su trabajo con el resto.",

    "Une situation peut vous demander davantage de fermeté. Vous aurez intérêt à défendre votre position sans transformer une divergence en confrontation inutile.":
      "Una situación puede exigirle mayor firmeza. Le convendrá defender su posición sin transformar una diferencia en una confrontación innecesaria.",

    "Dites clairement ce que vous acceptez et ce que vous refusez, sans multiplier les justifications.":
      "Diga claramente lo que acepta y lo que rechaza sin multiplicar las justificaciones.",

    "Jupiter soutient la croissance, la confiance et l’ouverture à de nouvelles perspectives. Une occasion peut prendre de l’importance si vous lui donnez une structure réaliste.":
      "Júpiter favorece el crecimiento, la confianza y la apertura a nuevas perspectivas. Una oportunidad puede ganar importancia si le proporciona una estructura realista.",

    "Voyez plus grand, mais vérifiez les ressources et le temps nécessaires avant de vous engager.":
      "Piense en grande, pero compruebe los recursos y el tiempo necesarios antes de comprometerse.",

    "Vous pourriez constater qu’une démarche avance davantage que vous ne le pensiez. Les résultats les plus solides viendront toutefois d’efforts réguliers plutôt que d’un seul grand geste.":
      "Podría descubrir que una iniciativa avanza más de lo que pensaba. Sin embargo, los resultados más sólidos surgirán de esfuerzos constantes y no de un único gran gesto.",

    "Appuyez votre optimisme sur une action concrète répétée chaque semaine.":
      "Apoye su optimismo en una acción concreta repetida cada semana.",

    "Saturne rappelle l’importance des limites, de la constance et des responsabilités choisies. Ce mois favorise les décisions capables de soutenir votre stabilité à long terme.":
      "Saturno recuerda la importancia de los límites, la constancia y las responsabilidades elegidas. Este mes favorece las decisiones capaces de apoyar su estabilidad a largo plazo.",

    "Réduisez les engagements inutiles afin de mieux respecter ceux qui ont une véritable valeur.":
      "Reduzca los compromisos innecesarios para respetar mejor aquellos que tienen un verdadero valor.",

    "Une ambition demande maintenant une méthode plus précise. Les contraintes rencontrées peuvent vous aider à corriger votre organisation plutôt qu’à abandonner votre objectif.":
      "Una ambición requiere ahora un método más preciso. Las limitaciones encontradas pueden ayudarle a mejorar su organización en lugar de abandonar su objetivo.",

    "Mesurez votre progrès selon votre constance, pas seulement selon la rapidité du résultat.":
      "Mida su progreso según su constancia y no únicamente según la rapidez del resultado.",

    "Uranus encourage l’innovation, l’indépendance et les changements qui libèrent une énergie devenue stagnante. Une solution différente peut apparaître lorsque vous cessez de répéter l’ancienne méthode.":
      "Urano favorece la innovación, la independencia y los cambios que liberan una energía estancada. Puede aparecer una solución diferente cuando deja de repetir el antiguo método.",

    "Expérimentez un changement précis sans bouleverser inutilement tout ce qui fonctionne déjà.":
      "Experimente un cambio concreto sin alterar innecesariamente todo lo que ya funciona.",

    "Vous pourriez ressentir plus fortement le besoin de choisir selon vos propres critères. Cette évolution sera constructive si elle repose sur une intention claire plutôt que sur une réaction soudaine.":
      "Puede sentir con mayor intensidad la necesidad de elegir según sus propios criterios. Esta evolución será constructiva si se basa en una intención clara y no en una reacción repentina.",

    "Modifiez ce qui limite réellement votre progression, pas seulement ce qui vous contrarie momentanément.":
      "Cambie lo que realmente limita su progreso, no solamente lo que le molesta temporalmente.",

    "Neptune accentue l’imagination, la sensibilité et la perception de ce qui n’est pas encore clairement formulé. Une impression récurrente mérite votre attention, mais aussi une vérification concrète.":
      "Neptuno acentúa la imaginación, la sensibilidad y la percepción de lo que todavía no está claramente formulado. Una impresión recurrente merece su atención, pero también una verificación concreta.",

    "Accueillez votre ressenti, puis cherchez les faits capables de le confirmer ou de le nuancer.":
      "Acoja lo que siente y luego busque hechos capaces de confirmarlo o matizarlo.",

    "Les ambiances et les émotions extérieures peuvent vous influencer davantage. Un moment de retrait vous permettra de distinguer vos véritables besoins de ce que vous absorbez autour de vous.":
      "Los ambientes y las emociones externas pueden influirle más. Un momento de retiro le permitirá distinguir sus verdaderas necesidades de lo que absorbe a su alrededor.",

    "Éloignez-vous temporairement du bruit lorsque vous devez prendre une décision importante.":
      "Aléjese temporalmente del ruido cuando deba tomar una decisión importante.",

    "Pluton met l’accent sur les changements irréversibles, les vérités cachées et la capacité à reprendre votre pouvoir. Une situation peut vous montrer clairement ce qui ne peut plus continuer de la même manière.":
      "Plutón pone el énfasis en los cambios irreversibles, las verdades ocultas y la capacidad de recuperar su poder. Una situación puede mostrarle claramente lo que ya no puede continuar de la misma manera.",

    "Laissez derrière vous ce qui a terminé son rôle au lieu d’essayer de lui redonner son ancienne forme.":
      "Deje atrás aquello que ya cumplió su función en lugar de intentar devolverle su antigua forma.",

    "Une prise de conscience peut modifier votre rapport à une relation, une peur ou une obligation. Cette lucidité vous aidera à agir depuis une position plus solide.":
      "Una toma de conciencia puede modificar su relación con una relación, un miedo o una obligación. Esta claridad le ayudará a actuar desde una posición más sólida.",

    "Concentrez-vous sur ce que vous pouvez réellement décider, changer ou protéger dès maintenant.":
      "Concéntrese en lo que realmente puede decidir, cambiar o proteger desde ahora.",
  },

  de: {},
  it: {},
  pt: {},
};

/* =========================================================
   STATIC AST LOCALIZATION
========================================================= */

function localizeSafeLiterals(
  source: string,
  locale: NonFrenchLocale,
): string {
  const translations: TranslationMap = {
    ...TRANSLATIONS[locale],
    ...LONG_TEXT_TRANSLATIONS[locale],
  };

  const sourceFile =
    ts.createSourceFile(
      "buildMonthlyPlanetaryInfluences.ts",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS,
    );

  const replacements: Array<{
    start: number;
    end: number;
    value: string;
  }> = [];

  function visit(
    node: ts.Node,
  ): void {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(node)
    ) {
      const translated =
        translations[node.text];

      if (
        typeof translated === "string" &&
        translated !== node.text
      ) {
        replacements.push({
          start:
            node.getStart(sourceFile),

          end:
            node.getEnd(),

          value:
            JSON.stringify(
              translated,
            ),
        });
      }
    }

    ts.forEachChild(
      node,
      visit,
    );
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

/* =========================================================
   MONTHLY INTRODUCTION
========================================================= */

function localizeIntroduction(
  source: string,
  locale: NonFrenchLocale,
): string {
  let replacement: string;

  switch (locale) {
    case "en":
      replacement = `
    introduction:
      \`\${ruler} acts as the symbolic guiding thread for \${zodiacSignLabel} this month. \` +
      "The following influences describe the major inner, relational, and practical movements that may accompany your progress. They are interpretive and do not present planetary positions or astronomical aspects that have not been calculated.",`;
      break;

    case "es":
      replacement = `
    introduction:
      \`\${ruler} actúa como hilo conductor simbólico para \${zodiacSignLabel} durante este mes. \` +
      "Las siguientes influencias describen los principales movimientos interiores, relacionales y prácticos que pueden acompañar su evolución. Son interpretativas y no presentan posiciones planetarias ni aspectos astronómicos que no hayan sido calculados.",`;
      break;

    case "de":
      replacement = `
    introduction:
      \`\${ruler} bildet in diesem Monat den symbolischen Leitfaden für \${zodiacSignLabel}. \` +
      "Die folgenden Einflüsse beschreiben die wichtigsten inneren, zwischenmenschlichen und praktischen Bewegungen, die Ihre Entwicklung begleiten können. Sie sind interpretativ und stellen keine nicht berechneten Planetenpositionen oder astronomischen Aspekte dar.",`;
      break;

    case "it":
      replacement = `
    introduction:
      \`\${ruler} rappresenta il filo conduttore simbolico di questo mese per \${zodiacSignLabel}. \` +
      "Le influenze seguenti descrivono i principali movimenti interiori, relazionali e pratici che possono accompagnare la tua evoluzione. Sono interpretative e non presentano posizioni planetarie o aspetti astronomici non calcolati.",`;
      break;

    case "pt":
      replacement = `
    introduction:
      \`\${ruler} atua como fio condutor simbólico deste mês para \${zodiacSignLabel}. \` +
      "As influências a seguir descrevem os principais movimentos interiores, relacionais e práticos que podem acompanhar sua evolução. Elas são interpretativas e não apresentam posições planetárias ou aspectos astronômicos que não tenham sido calculados.",`;
      break;
  }

  return source.replace(
    /introduction:\s*`Pour \$\{zodiacSignLabel\}, \$\{ruler\} agit comme fil conducteur symbolique de ce mois\. `\s*\+\s*"Les influences suivantes décrivent les grands mouvements intérieurs, relationnels et pratiques qui peuvent accompagner votre progression\. Elles sont interprétatives et ne présentent pas de positions ou d’aspects astronomiques non calculés\.",/,
    replacement,
  );
}

/* =========================================================
   PLANET RULER
========================================================= */

/*
 * SIGN_RULERS contient actuellement les noms français.
 *
 * Comme le localizer AST traduit également les string
 * literals Soleil/Lune/etc., le ruler devient automatiquement
 * localisé dans chaque copie générée du builder.
 */

/* =========================================================
   MAIN LOCALIZER
========================================================= */

export function localizeMonthlyPlanetaryInfluencesBuilder(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  if (
    !source.includes(
      "buildMonthlyPlanetaryInfluences",
    )
  ) {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  let localized =
    localizeIntroduction(
      source,
      normalizedLocale,
    );

  localized =
    localizeSafeLiterals(
      localized,
      normalizedLocale,
    );

  return localized;
}
