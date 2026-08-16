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

const EN: TranslationMap = {
  "Ce mois marque une période de progression intérieure et de clarification.": "This month marks a period of inner progress and clarification.",
  "Les événements évoluent graduellement et vous invitent à observer les changements avant de prendre des décisions définitives. Certaines réponses apparaîtront au fil des semaines plutôt qu’immédiatement.": "Events are evolving gradually and invite you to observe changes before making final decisions. Some answers will emerge over the weeks rather than immediately.",
  "Avancez étape par étape et laissez les situations révéler leur véritable direction.": "Move forward step by step and let situations reveal their true direction.",
  "Évolution": "Growth",
  "Clarté": "Clarity",
  "Progression": "Progress",
  "Une énergie de renouvellement accompagne ce nouveau mois.": "An energy of renewal accompanies this new month.",
  "Vous pourriez ressentir le besoin de revoir certaines habitudes, priorités ou relations. Les changements les plus utiles seront ceux que vous pourrez maintenir dans le temps.": "You may feel the need to review certain habits, priorities, or relationships. The most useful changes will be those you can sustain over time.",
  "Choisissez une transformation réaliste plutôt que plusieurs changements simultanés.": "Choose one realistic transformation rather than several changes at the same time.",
  "Renouveau": "Renewal",
  "Décision": "Decision",
  "Transformation": "Transformation",
  "Ce mois favorise une meilleure compréhension de vos besoins personnels.": "This month supports a better understanding of your personal needs.",
  "Vous pourriez prendre conscience de ce qui vous motive réellement, mais aussi de ce qui vous demande trop d’énergie. Cette lucidité vous permettra de mieux organiser vos efforts.": "You may become more aware of what truly motivates you, but also of what demands too much of your energy. This clarity will help you organize your efforts more effectively.",
  "Conservez ce qui vous nourrit et réduisez ce qui vous disperse.": "Keep what nourishes you and reduce what scatters your energy.",
  "Compréhension": "Understanding",
  "Priorités": "Priorities",
  "Équilibre": "Balance",
  "Votre énergie évoluera progressivement au fil du mois.": "Your energy will evolve gradually throughout the month.",
  "Certaines semaines seront plus dynamiques, tandis que d’autres vous inviteront à ralentir. En respectant ces variations, vous conserverez une meilleure stabilité physique et mentale.": "Some weeks will be more dynamic, while others will invite you to slow down. By respecting these variations, you will maintain better physical and mental stability.",
  "Adaptez votre rythme plutôt que de vous imposer la même intensité chaque jour.": "Adapt your pace rather than forcing yourself to maintain the same intensity every day.",
  "Rythme": "Rhythm",
  "Stabilité": "Stability",
  "Adaptation": "Adaptation",
  "Ce mois vous apporte un regain de motivation.": "This month brings you renewed motivation.",
  "Vous disposez d’un bon élan pour relancer un projet ou reprendre une démarche laissée en attente. Une organisation claire vous aidera à transformer cette motivation en résultats durables.": "You have good momentum to restart a project or resume something that has been left on hold. Clear organization will help you turn this motivation into lasting results.",
  "Fixez-vous des étapes précises et mesurables pour chaque semaine.": "Set precise and measurable steps for each week.",
  "Motivation": "Motivation",
  "Action": "Action",
  "Résultats": "Results",
  "Votre sensibilité influence fortement votre niveau d’énergie ce mois-ci.": "Your sensitivity strongly influences your energy level this month.",
  "Les environnements agités pourraient vous fatiguer davantage, tandis que les moments de calme favoriseront votre concentration et votre créativité.": "Busy environments may tire you more easily, while calm moments will support your concentration and creativity.",
  "Protégez régulièrement votre espace mental et votre temps de récupération.": "Regularly protect your mental space and recovery time.",
  "Sensibilité": "Sensitivity",
  "Protection": "Protection",
  "Récupération": "Recovery",
  "Poser des bases solides": "Laying solid foundations",
  "Cette première semaine vous invite à ralentir suffisamment pour définir une direction claire.": "This first week invites you to slow down enough to define a clear direction.",
  "Les premiers jours du mois sont favorables à l’observation, à l’organisation et aux décisions préparées avec soin. Vous gagnerez à déterminer ce qui mérite réellement votre énergie avant de multiplier les initiatives.": "The first days of the month are favorable for observation, organization, and carefully prepared decisions. You will benefit from determining what truly deserves your energy before multiplying initiatives.",
  "Une idée encore imprécise peut devenir un projet concret si vous lui donnez une structure simple et réaliste.": "An idea that is still vague can become a concrete project if you give it a simple and realistic structure.",
  "Évitez de vouloir obtenir immédiatement toutes les réponses. Certaines informations apparaîtront progressivement.": "Avoid trying to obtain all the answers immediately. Some information will appear gradually.",
  "Commencez par une priorité essentielle. Une base stable vous permettra d’avancer plus rapidement durant les semaines suivantes.": "Start with one essential priority. A stable foundation will allow you to move forward more quickly during the following weeks.",
  "Clarifier vos priorités": "Clarifying your priorities",
  "Le début du mois met en lumière ce qui doit être conservé, ajusté ou laissé derrière vous.": "The beginning of the month highlights what should be kept, adjusted, or left behind.",
  "Votre lucidité augmente lorsque vous prenez le temps d’examiner vos besoins sans tenir compte des attentes extérieures. Une décision simple pourrait alléger considérablement la suite du mois.": "Your clarity increases when you take time to examine your needs without being guided by outside expectations. A simple decision could make the rest of the month considerably lighter.",
  "Vous pouvez reprendre le contrôle d’une situation en définissant clairement vos limites et votre objectif principal.": "You can regain control of a situation by clearly defining your boundaries and your main objective.",
  "La dispersion pourrait vous faire perdre du temps sur des détails qui ne changent pas réellement le résultat.": "Distraction could make you lose time on details that do not truly change the outcome.",
  "Choisissez ce qui soutient votre équilibre à long terme plutôt que ce qui vous procure seulement un soulagement immédiat.": "Choose what supports your long-term balance rather than what provides only immediate relief.",
  "Préparer un nouveau départ": "Preparing a new beginning",
  "Une énergie de renouvellement accompagne cette première étape du mois.": "An energy of renewal accompanies this first stage of the month.",
  "Vous pourriez ressentir le besoin de modifier une habitude, une méthode ou une manière de communiquer. Les changements les plus prometteurs seront ceux que vous pourrez intégrer progressivement.": "You may feel the need to change a habit, a method, or a way of communicating. The most promising changes will be those you can integrate gradually.",
  "Une nouvelle façon d’aborder un projet ou une relation peut ouvrir une possibilité que vous n’aviez pas encore envisagée.": "A new way of approaching a project or relationship can open a possibility you had not yet considered.",
  "Ne confondez pas nouveauté et précipitation. Un changement durable demande un minimum de préparation.": "Do not confuse novelty with haste. Lasting change requires a minimum of preparation.",
  "Donnez une forme concrète à votre intention : une date, une première action et un résultat réaliste à atteindre.": "Give your intention a concrete form: a date, a first action, and a realistic result to achieve.",
  "Passer à l’action": "Taking action",
  "Cette deuxième semaine favorise les initiatives, les échanges dynamiques et les décisions concrètes.": "This second week supports initiative, dynamic exchanges, and concrete decisions.",
  "Après avoir posé vos bases, vous disposez d’un meilleur élan pour faire progresser un projet ou régler une situation restée en attente. Votre efficacité augmentera si vous avancez selon un ordre clair.": "After laying your foundations, you have better momentum to move a project forward or resolve a situation that has been left pending. Your effectiveness will increase if you proceed in a clear order.",
  "Une occasion intéressante peut apparaître dans un domaine où vous hésitiez encore à agir.": "An interesting opportunity may appear in an area where you were still hesitant to act.",
  "L’enthousiasme pourrait vous pousser à accepter trop de responsabilités ou à commencer plusieurs choses simultanément.": "Enthusiasm could push you to accept too many responsibilities or start several things at once.",
  "Agissez avec confiance, mais vérifiez que chaque décision contribue réellement à votre objectif du mois.": "Act with confidence, but make sure each decision genuinely contributes to your goal for the month.",
  "Faire avancer vos projets": "Advancing your projects",
  "Le rythme s’accélère et vous encourage à transformer vos intentions en résultats visibles.": "The pace is accelerating and encourages you to turn your intentions into visible results.",
  "Les démarches entreprises cette semaine peuvent produire une réponse plus rapide que prévu. Une conversation, une demande ou une proposition bien préparée favorisera votre progression.": "The actions taken this week may produce a response faster than expected. A well-prepared conversation, request, or proposal will support your progress.",
  "Votre capacité à expliquer clairement votre idée peut attirer un soutien, un conseil ou une collaboration utile.": "Your ability to explain your idea clearly can attract support, advice, or useful collaboration.",
  "Évitez d’interpréter un délai ou une hésitation comme un refus définitif.": "Avoid interpreting a delay or hesitation as a definitive refusal.",
  "Concentrez votre énergie sur l’action qui peut créer le plus d’effet plutôt que sur la quantité de tâches accomplies.": "Focus your energy on the action that can create the greatest impact rather than on the number of tasks completed.",
  "Affirmer votre direction": "Affirming your direction",
  "Cette semaine renforce votre volonté et votre capacité à prendre davantage de place.": "This week strengthens your determination and your ability to take up more space.",
  "Vous pourriez être amenée à défendre une idée, exprimer un besoin ou prendre une décision que vous repoussiez. Une attitude calme et déterminée donnera plus de poids à votre message.": "You may need to defend an idea, express a need, or make a decision you had been postponing. A calm and determined attitude will give your message more weight.",
  "Une initiative personnelle peut vous permettre de reprendre l’avantage dans une situation devenue trop passive.": "A personal initiative can help you regain the advantage in a situation that has become too passive.",
  "La fermeté sera utile, mais une réaction trop rapide pourrait fermer une porte encore intéressante.": "Firmness will be useful, but reacting too quickly could close a door that is still worth keeping open.",
  "Affirmez votre choix sans chercher à convaincre tout le monde. La cohérence de vos gestes parlera pour vous.": "Stand by your choice without trying to convince everyone. The consistency of your actions will speak for you.",
  "Ajuster votre trajectoire": "Adjusting your direction",
  "La troisième semaine vous invite à observer les résultats obtenus et à corriger ce qui doit l’être.": "The third week invites you to observe the results obtained and correct what needs to be adjusted.",
  "Vous disposez maintenant de suffisamment d’informations pour distinguer ce qui fonctionne de ce qui demande une autre approche. Un petit ajustement pourrait être plus efficace qu’un changement radical.": "You now have enough information to distinguish what is working from what requires a different approach. A small adjustment could be more effective than a radical change.",
  "Une erreur, un retard ou une hésitation peut révéler une meilleure manière d’atteindre votre objectif.": "An error, delay, or hesitation may reveal a better way to reach your goal.",
  "Évitez de poursuivre une stratégie uniquement parce que vous y avez déjà consacré du temps.": "Avoid continuing a strategy only because you have already invested time in it.",
  "Restez fidèle à votre direction, mais acceptez de modifier le chemin utilisé pour l’atteindre.": "Stay true to your direction, but be willing to change the path you use to reach it.",
  "Retrouver votre équilibre": "Restoring your balance",
  "Cette période demande une meilleure répartition entre vos obligations, vos relations et votre récupération.": "This period calls for a better balance between your obligations, relationships, and recovery.",
  "Vous pourriez constater qu’un domaine a occupé trop de place depuis le début du mois. En rééquilibrant votre horaire ou vos priorités, vous retrouverez davantage de disponibilité mentale.": "You may realize that one area has taken up too much space since the beginning of the month. By rebalancing your schedule or priorities, you will regain more mental availability.",
  "Une limite clairement posée peut améliorer une relation ou vous redonner du temps pour un projet important.": "A clearly stated boundary can improve a relationship or give you back time for an important project.",
  "La fatigue pourrait amplifier une contrariété ou vous faire douter inutilement de vos progrès.": "Fatigue could amplify a frustration or make you doubt your progress unnecessarily.",
  "Avant de prendre une décision importante, assurez-vous de disposer du calme et de l’énergie nécessaires.": "Before making an important decision, make sure you have the calm and energy you need.",
  "Écouter les signes utiles": "Listening to helpful signs",
  "Votre intuition devient plus précise lorsque vous la confrontez aux faits et à votre expérience.": "Your intuition becomes more accurate when you compare it with facts and your experience.",
  "Une impression récurrente mérite votre attention, particulièrement si plusieurs événements semblent indiquer la même direction. Prenez toutefois le temps de vérifier ce que vous ressentez.": "A recurring impression deserves your attention, especially if several events seem to point in the same direction. However, take time to verify what you feel.",
  "Une prise de conscience peut vous aider à comprendre une relation ou une situation sous un angle entièrement différent.": "A realization can help you understand a relationship or situation from an entirely different angle.",
  "Ne laissez pas une inquiétude momentanée devenir une certitude sans preuve suffisante.": "Do not let a temporary worry become a certainty without sufficient evidence.",
  "Écoutez votre ressenti, puis appuyez votre décision sur des éléments concrets et observables.": "Listen to your feelings, then base your decision on concrete and observable elements.",
  "Consolider vos acquis": "Consolidating your achievements",
  "La dernière partie du mois vous invite à stabiliser ce que vous avez construit et à reconnaître votre progression.": "The last part of the month invites you to stabilize what you have built and recognize your progress.",
  "Certaines démarches commencent à produire des effets plus visibles. Vous gagnerez à terminer ce qui est déjà bien engagé avant de vous tourner vers un nouvel objectif.": "Some actions are beginning to produce more visible effects. You will benefit from finishing what is already well underway before turning to a new goal.",
  "Un résultat, une réponse ou une confirmation peut vous montrer que vos efforts réguliers n’ont pas été inutiles.": "A result, response, or confirmation may show you that your consistent efforts have not been in vain.",
  "Évitez de minimiser vos avancées simplement parce que tout n’est pas encore parfaitement terminé.": "Avoid minimizing your progress simply because everything is not yet perfectly finished.",
  "Prenez le temps de mesurer le chemin parcouru et choisissez consciemment ce que vous souhaitez poursuivre le mois prochain.": "Take time to measure the progress you have made and consciously choose what you want to pursue next month.",
  "Récolter les résultats": "Reaping the results",
  "Cette quatrième semaine met en évidence les conséquences de vos choix et de vos efforts précédents.": "This fourth week highlights the consequences of your previous choices and efforts.",
  "Vous pourriez recevoir une réponse attendue, constater une amélioration ou comprendre enfin la portée d’une décision. Les résultats les plus utiles vous indiqueront aussi la prochaine étape.": "You may receive an expected response, notice an improvement, or finally understand the impact of a decision. The most useful results will also point you toward the next step.",
  "Une réussite discrète peut devenir la base d’un développement plus important durant le prochain cycle.": "A quiet success can become the foundation for greater development during the next cycle.",
  "Le désir de conclure rapidement pourrait vous faire négliger un dernier détail important.": "The desire to finish quickly could make you overlook one final important detail.",
  "Finalisez avec soin. Une conclusion bien préparée protège les progrès réalisés et facilite la suite.": "Finish carefully. A well-prepared conclusion protects the progress you have made and makes the next step easier.",
  "Préparer le prochain cycle": "Preparing the next cycle",
  "La fin du mois crée un espace favorable à la synthèse, au détachement et à la préparation.": "The end of the month creates favorable space for synthesis, release, and preparation.",
  "Vous comprenez mieux ce que cette période vous a appris sur vos besoins, vos limites et vos ambitions. Cette lucidité vous permettra d’aborder le mois suivant avec une direction plus précise.": "You better understand what this period has taught you about your needs, limits, and ambitions. This clarity will allow you to approach the next month with a more precise direction.",
  "Une décision prise maintenant peut simplifier considérablement votre organisation ou votre état d’esprit pour la suite.": "A decision made now can considerably simplify your organization or mindset for what comes next.",
  "Ne transportez pas automatiquement dans le prochain mois une obligation qui ne correspond plus à vos priorités.": "Do not automatically carry into next month an obligation that no longer matches your priorities.",
  "Conservez les apprentissages utiles, terminez ce qui peut l’être et laissez de l’espace à une nouvelle étape.": "Keep the useful lessons, finish what can be completed, and leave room for a new stage.",
  "Bordeaux": "Burgundy",
  "Bleu nuit": "Midnight blue",
  "Vert émeraude": "Emerald green",
  "Or": "Gold",
  "Violet profond": "Deep violet",
  "Rose poudré": "Powder pink",
  "Obsidienne": "Obsidian",
  "Améthyste": "Amethyst",
  "Quartz rose": "Rose quartz",
  "Labradorite": "Labradorite",
  "Citrine": "Citrine",
  "Pierre de lune": "Moonstone",
  "Confiance": "Confidence",
  "Intuition": "Intuition",
  "Feu": "Fire",
  "Terre": "Earth",
  "Air": "Air",
  "Eau": "Water",
  "Mars": "Mars",
  "Vénus": "Venus",
  "Mercure": "Mercury",
  "Lune": "Moon",
  "Soleil": "Sun",
  "Pluton": "Pluto",
  "Jupiter": "Jupiter",
  "Saturne": "Saturn",
  "Uranus": "Uranus",
  "Neptune": "Neptune",
  "Horoscope du mois": "Monthly Horoscope",
  "Cette lecture vous accompagne à travers les principales tendances symboliques de votre mois.": "This reading guides you through the main symbolic trends of your month.",
  "Chaque mois ouvre un nouveau cycle et révèle une direction différente.": "Each month opens a new cycle and reveals a different direction.",
  "Vue d’ensemble du mois": "Overview of the month",
  "Énergie du mois": "Energy of the month",
  "Discernement": "Discernment",
  "Votre point de vigilance": "Your point of vigilance",
  "Développement": "Development",
  "Une direction à explorer": "A direction to explore",
  "Ces éléments symboliques peuvent accompagner votre mois.": "These symbolic elements can accompany your month.",
  "Les changements les plus importants commencent souvent par une décision discrète.": "The most significant changes often begin with a subtle decision.",
  "Votre message du mois": "Your message for the month",
  "Ce mois vous invite à progresser avec constance, à observer les changements au fil des semaines et à choisir vos actions avec discernement. Vous n’avez pas besoin de tout accomplir immédiatement. Une direction claire et des gestes réguliers peuvent produire une évolution durable.": "This month invites you to progress steadily, observe changes over the weeks, and choose your actions with discernment. You do not need to accomplish everything immediately. A clear direction and regular actions can lead to lasting growth.",
  "Votre force réside ce mois-ci dans votre capacité à respecter votre rythme tout en restant fidèle à la direction que vous avez choisie.": "Your strength this month lies in your ability to respect your pace while remaining true to the direction you have chosen."
};

const ES: TranslationMap = {
  "Ce mois marque une période de progression intérieure et de clarification.": "Este mes marca un período de progreso interior y clarificación.",
  "Les événements évoluent graduellement et vous invitent à observer les changements avant de prendre des décisions définitives. Certaines réponses apparaîtront au fil des semaines plutôt qu’immédiatement.": "Los acontecimientos evolucionan gradualmente y le invitan a observar los cambios antes de tomar decisiones definitivas. Algunas respuestas aparecerán a lo largo de las semanas en lugar de hacerlo de inmediato.",
  "Avancez étape par étape et laissez les situations révéler leur véritable direction.": "Avance paso a paso y deje que las situaciones revelen su verdadera dirección.",
  "Évolution": "Evolución",
  "Clarté": "Claridad",
  "Progression": "Progreso",
  "Une énergie de renouvellement accompagne ce nouveau mois.": "Una energía de renovación acompaña este nuevo mes.",
  "Vous pourriez ressentir le besoin de revoir certaines habitudes, priorités ou relations. Les changements les plus utiles seront ceux que vous pourrez maintenir dans le temps.": "Podría sentir la necesidad de revisar ciertos hábitos, prioridades o relaciones. Los cambios más útiles serán aquellos que pueda mantener con el tiempo.",
  "Choisissez une transformation réaliste plutôt que plusieurs changements simultanés.": "Elija una transformación realista en lugar de varios cambios simultáneos.",
  "Renouveau": "Renovación",
  "Décision": "Decisión",
  "Transformation": "Transformación",
  "Ce mois favorise une meilleure compréhension de vos besoins personnels.": "Este mes favorece una mejor comprensión de sus necesidades personales.",
  "Vous pourriez prendre conscience de ce qui vous motive réellement, mais aussi de ce qui vous demande trop d’énergie. Cette lucidité vous permettra de mieux organiser vos efforts.": "Podría tomar conciencia de lo que realmente le motiva, pero también de lo que le exige demasiada energía. Esta lucidez le permitirá organizar mejor sus esfuerzos.",
  "Conservez ce qui vous nourrit et réduisez ce qui vous disperse.": "Conserve lo que le nutre y reduzca lo que le dispersa.",
  "Compréhension": "Comprensión",
  "Priorités": "Prioridades",
  "Équilibre": "Equilibrio",
  "Votre énergie évoluera progressivement au fil du mois.": "Su energía evolucionará gradualmente a lo largo del mes.",
  "Certaines semaines seront plus dynamiques, tandis que d’autres vous inviteront à ralentir. En respectant ces variations, vous conserverez une meilleure stabilité physique et mentale.": "Algunas semanas serán más dinámicas, mientras que otras le invitarán a bajar el ritmo. Al respetar estas variaciones, conservará una mejor estabilidad física y mental.",
  "Adaptez votre rythme plutôt que de vous imposer la même intensité chaque jour.": "Adapte su ritmo en lugar de imponerse la misma intensidad cada día.",
  "Rythme": "Ritmo",
  "Stabilité": "Estabilidad",
  "Adaptation": "Adaptación",
  "Ce mois vous apporte un regain de motivation.": "Este mes le aporta un renovado impulso de motivación.",
  "Vous disposez d’un bon élan pour relancer un projet ou reprendre une démarche laissée en attente. Une organisation claire vous aidera à transformer cette motivation en résultats durables.": "Dispone de un buen impulso para relanzar un proyecto o retomar una gestión que había quedado en espera. Una organización clara le ayudará a transformar esta motivación en resultados duraderos.",
  "Fixez-vous des étapes précises et mesurables pour chaque semaine.": "Fíjese etapas precisas y medibles para cada semana.",
  "Motivation": "Motivación",
  "Action": "Acción",
  "Résultats": "Resultados",
  "Votre sensibilité influence fortement votre niveau d’énergie ce mois-ci.": "Su sensibilidad influye mucho en su nivel de energía este mes.",
  "Les environnements agités pourraient vous fatiguer davantage, tandis que les moments de calme favoriseront votre concentration et votre créativité.": "Los ambientes agitados podrían cansarle más, mientras que los momentos de calma favorecerán su concentración y creatividad.",
  "Protégez régulièrement votre espace mental et votre temps de récupération.": "Proteja con regularidad su espacio mental y su tiempo de recuperación.",
  "Sensibilité": "Sensibilidad",
  "Protection": "Protección",
  "Récupération": "Recuperación",
  "Poser des bases solides": "Sentar bases sólidas",
  "Cette première semaine vous invite à ralentir suffisamment pour définir une direction claire.": "Esta primera semana le invita a bajar el ritmo lo suficiente para definir una dirección clara.",
  "Les premiers jours du mois sont favorables à l’observation, à l’organisation et aux décisions préparées avec soin. Vous gagnerez à déterminer ce qui mérite réellement votre énergie avant de multiplier les initiatives.": "Los primeros días del mes son favorables para la observación, la organización y las decisiones preparadas con cuidado. Le convendrá determinar qué merece realmente su energía antes de multiplicar las iniciativas.",
  "Une idée encore imprécise peut devenir un projet concret si vous lui donnez une structure simple et réaliste.": "Una idea todavía imprecisa puede convertirse en un proyecto concreto si le da una estructura sencilla y realista.",
  "Évitez de vouloir obtenir immédiatement toutes les réponses. Certaines informations apparaîtront progressivement.": "Evite querer obtener todas las respuestas de inmediato. Algunas informaciones aparecerán progresivamente.",
  "Commencez par une priorité essentielle. Une base stable vous permettra d’avancer plus rapidement durant les semaines suivantes.": "Empiece por una prioridad esencial. Una base estable le permitirá avanzar más rápidamente durante las semanas siguientes.",
  "Clarifier vos priorités": "Aclarar sus prioridades",
  "Le début du mois met en lumière ce qui doit être conservé, ajusté ou laissé derrière vous.": "El inicio del mes pone de relieve lo que debe conservarse, ajustarse o dejarse atrás.",
  "Votre lucidité augmente lorsque vous prenez le temps d’examiner vos besoins sans tenir compte des attentes extérieures. Une décision simple pourrait alléger considérablement la suite du mois.": "Su lucidez aumenta cuando se toma el tiempo de examinar sus necesidades sin dejarse guiar por las expectativas externas. Una decisión sencilla podría aligerar considerablemente el resto del mes.",
  "Vous pouvez reprendre le contrôle d’une situation en définissant clairement vos limites et votre objectif principal.": "Puede recuperar el control de una situación definiendo claramente sus límites y su objetivo principal.",
  "La dispersion pourrait vous faire perdre du temps sur des détails qui ne changent pas réellement le résultat.": "La dispersión podría hacerle perder tiempo en detalles que no cambian realmente el resultado.",
  "Choisissez ce qui soutient votre équilibre à long terme plutôt que ce qui vous procure seulement un soulagement immédiat.": "Elija lo que favorece su equilibrio a largo plazo en lugar de lo que solo le proporciona un alivio inmediato.",
  "Préparer un nouveau départ": "Preparar un nuevo comienzo",
  "Une énergie de renouvellement accompagne cette première étape du mois.": "Una energía de renovación acompaña esta primera etapa del mes.",
  "Vous pourriez ressentir le besoin de modifier une habitude, une méthode ou une manière de communiquer. Les changements les plus prometteurs seront ceux que vous pourrez intégrer progressivement.": "Podría sentir la necesidad de cambiar un hábito, un método o una manera de comunicarse. Los cambios más prometedores serán aquellos que pueda integrar progresivamente.",
  "Une nouvelle façon d’aborder un projet ou une relation peut ouvrir une possibilité que vous n’aviez pas encore envisagée.": "Una nueva forma de abordar un proyecto o una relación puede abrir una posibilidad que aún no había considerado.",
  "Ne confondez pas nouveauté et précipitation. Un changement durable demande un minimum de préparation.": "No confunda novedad con precipitación. Un cambio duradero requiere un mínimo de preparación.",
  "Donnez une forme concrète à votre intention : une date, une première action et un résultat réaliste à atteindre.": "Dé una forma concreta a su intención: una fecha, una primera acción y un resultado realista que alcanzar.",
  "Passer à l’action": "Pasar a la acción",
  "Cette deuxième semaine favorise les initiatives, les échanges dynamiques et les décisions concrètes.": "Esta segunda semana favorece las iniciativas, los intercambios dinámicos y las decisiones concretas.",
  "Après avoir posé vos bases, vous disposez d’un meilleur élan pour faire progresser un projet ou régler une situation restée en attente. Votre efficacité augmentera si vous avancez selon un ordre clair.": "Después de sentar sus bases, dispone de un mejor impulso para hacer avanzar un proyecto o resolver una situación que había quedado pendiente. Su eficacia aumentará si avanza siguiendo un orden claro.",
  "Une occasion intéressante peut apparaître dans un domaine où vous hésitiez encore à agir.": "Puede aparecer una oportunidad interesante en un ámbito en el que todavía dudaba en actuar.",
  "L’enthousiasme pourrait vous pousser à accepter trop de responsabilités ou à commencer plusieurs choses simultanément.": "El entusiasmo podría llevarle a aceptar demasiadas responsabilidades o a empezar varias cosas al mismo tiempo.",
  "Agissez avec confiance, mais vérifiez que chaque décision contribue réellement à votre objectif du mois.": "Actúe con confianza, pero compruebe que cada decisión contribuye realmente a su objetivo del mes.",
  "Faire avancer vos projets": "Hacer avanzar sus proyectos",
  "Le rythme s’accélère et vous encourage à transformer vos intentions en résultats visibles.": "El ritmo se acelera y le anima a transformar sus intenciones en resultados visibles.",
  "Les démarches entreprises cette semaine peuvent produire une réponse plus rapide que prévu. Une conversation, une demande ou une proposition bien préparée favorisera votre progression.": "Las gestiones emprendidas esta semana pueden producir una respuesta más rápida de lo previsto. Una conversación, solicitud o propuesta bien preparada favorecerá su progreso.",
  "Votre capacité à expliquer clairement votre idée peut attirer un soutien, un conseil ou une collaboration utile.": "Su capacidad para explicar claramente su idea puede atraer apoyo, consejo o una colaboración útil.",
  "Évitez d’interpréter un délai ou une hésitation comme un refus définitif.": "Evite interpretar un retraso o una duda como un rechazo definitivo.",
  "Concentrez votre énergie sur l’action qui peut créer le plus d’effet plutôt que sur la quantité de tâches accomplies.": "Concentre su energía en la acción que pueda generar el mayor impacto en lugar de en la cantidad de tareas realizadas.",
  "Affirmer votre direction": "Afirmar su dirección",
  "Cette semaine renforce votre volonté et votre capacité à prendre davantage de place.": "Esta semana refuerza su voluntad y su capacidad para ocupar más espacio.",
  "Vous pourriez être amenée à défendre une idée, exprimer un besoin ou prendre une décision que vous repoussiez. Une attitude calme et déterminée donnera plus de poids à votre message.": "Podría verse en la situación de defender una idea, expresar una necesidad o tomar una decisión que venía aplazando. Una actitud tranquila y decidida dará más peso a su mensaje.",
  "Une initiative personnelle peut vous permettre de reprendre l’avantage dans une situation devenue trop passive.": "Una iniciativa personal puede permitirle recuperar la ventaja en una situación que se ha vuelto demasiado pasiva.",
  "La fermeté sera utile, mais une réaction trop rapide pourrait fermer une porte encore intéressante.": "La firmeza será útil, pero una reacción demasiado rápida podría cerrar una puerta que todavía es interesante.",
  "Affirmez votre choix sans chercher à convaincre tout le monde. La cohérence de vos gestes parlera pour vous.": "Afirme su elección sin intentar convencer a todo el mundo. La coherencia de sus actos hablará por usted.",
  "Ajuster votre trajectoire": "Ajustar su trayectoria",
  "La troisième semaine vous invite à observer les résultats obtenus et à corriger ce qui doit l’être.": "La tercera semana le invita a observar los resultados obtenidos y corregir lo que sea necesario.",
  "Vous disposez maintenant de suffisamment d’informations pour distinguer ce qui fonctionne de ce qui demande une autre approche. Un petit ajustement pourrait être plus efficace qu’un changement radical.": "Ahora dispone de suficiente información para distinguir lo que funciona de lo que requiere otro enfoque. Un pequeño ajuste podría ser más eficaz que un cambio radical.",
  "Une erreur, un retard ou une hésitation peut révéler une meilleure manière d’atteindre votre objectif.": "Un error, un retraso o una duda puede revelar una mejor manera de alcanzar su objetivo.",
  "Évitez de poursuivre une stratégie uniquement parce que vous y avez déjà consacré du temps.": "Evite seguir una estrategia únicamente porque ya le ha dedicado tiempo.",
  "Restez fidèle à votre direction, mais acceptez de modifier le chemin utilisé pour l’atteindre.": "Manténgase fiel a su dirección, pero acepte modificar el camino utilizado para alcanzarla.",
  "Retrouver votre équilibre": "Recuperar su equilibrio",
  "Cette période demande une meilleure répartition entre vos obligations, vos relations et votre récupération.": "Este período requiere un mejor equilibrio entre sus obligaciones, sus relaciones y su recuperación.",
  "Vous pourriez constater qu’un domaine a occupé trop de place depuis le début du mois. En rééquilibrant votre horaire ou vos priorités, vous retrouverez davantage de disponibilité mentale.": "Podría darse cuenta de que un ámbito ha ocupado demasiado espacio desde el inicio del mes. Al reequilibrar su horario o sus prioridades, recuperará una mayor disponibilidad mental.",
  "Une limite clairement posée peut améliorer une relation ou vous redonner du temps pour un projet important.": "Un límite claramente establecido puede mejorar una relación o devolverle tiempo para un proyecto importante.",
  "La fatigue pourrait amplifier une contrariété ou vous faire douter inutilement de vos progrès.": "El cansancio podría amplificar una contrariedad o hacerle dudar innecesariamente de sus progresos.",
  "Avant de prendre une décision importante, assurez-vous de disposer du calme et de l’énergie nécessaires.": "Antes de tomar una decisión importante, asegúrese de disponer de la calma y la energía necesarias.",
  "Écouter les signes utiles": "Escuchar las señales útiles",
  "Votre intuition devient plus précise lorsque vous la confrontez aux faits et à votre expérience.": "Su intuición se vuelve más precisa cuando la contrasta con los hechos y con su experiencia.",
  "Une impression récurrente mérite votre attention, particulièrement si plusieurs événements semblent indiquer la même direction. Prenez toutefois le temps de vérifier ce que vous ressentez.": "Una impresión recurrente merece su atención, especialmente si varios acontecimientos parecen señalar la misma dirección. Tómese, sin embargo, el tiempo de comprobar lo que siente.",
  "Une prise de conscience peut vous aider à comprendre une relation ou une situation sous un angle entièrement différent.": "Una toma de conciencia puede ayudarle a comprender una relación o una situación desde un ángulo completamente diferente.",
  "Ne laissez pas une inquiétude momentanée devenir une certitude sans preuve suffisante.": "No deje que una preocupación momentánea se convierta en una certeza sin pruebas suficientes.",
  "Écoutez votre ressenti, puis appuyez votre décision sur des éléments concrets et observables.": "Escuche lo que siente y después base su decisión en elementos concretos y observables.",
  "Consolider vos acquis": "Consolidar sus logros",
  "La dernière partie du mois vous invite à stabiliser ce que vous avez construit et à reconnaître votre progression.": "La última parte del mes le invita a estabilizar lo que ha construido y a reconocer su progreso.",
  "Certaines démarches commencent à produire des effets plus visibles. Vous gagnerez à terminer ce qui est déjà bien engagé avant de vous tourner vers un nouvel objectif.": "Algunas gestiones empiezan a producir efectos más visibles. Le convendrá terminar lo que ya está bien encaminado antes de orientarse hacia un nuevo objetivo.",
  "Un résultat, une réponse ou une confirmation peut vous montrer que vos efforts réguliers n’ont pas été inutiles.": "Un resultado, una respuesta o una confirmación puede mostrarle que sus esfuerzos constantes no han sido inútiles.",
  "Évitez de minimiser vos avancées simplement parce que tout n’est pas encore parfaitement terminé.": "Evite minimizar sus avances simplemente porque aún no esté todo perfectamente terminado.",
  "Prenez le temps de mesurer le chemin parcouru et choisissez consciemment ce que vous souhaitez poursuivre le mois prochain.": "Tómese el tiempo de medir el camino recorrido y elija conscientemente lo que desea continuar el próximo mes.",
  "Récolter les résultats": "Recoger los resultados",
  "Cette quatrième semaine met en évidence les conséquences de vos choix et de vos efforts précédents.": "Esta cuarta semana pone de relieve las consecuencias de sus elecciones y esfuerzos anteriores.",
  "Vous pourriez recevoir une réponse attendue, constater une amélioration ou comprendre enfin la portée d’une décision. Les résultats les plus utiles vous indiqueront aussi la prochaine étape.": "Podría recibir una respuesta esperada, constatar una mejora o comprender por fin el alcance de una decisión. Los resultados más útiles también le indicarán el siguiente paso.",
  "Une réussite discrète peut devenir la base d’un développement plus important durant le prochain cycle.": "Un éxito discreto puede convertirse en la base de un desarrollo más importante durante el próximo ciclo.",
  "Le désir de conclure rapidement pourrait vous faire négliger un dernier détail important.": "El deseo de terminar rápidamente podría hacerle descuidar un último detalle importante.",
  "Finalisez avec soin. Une conclusion bien préparée protège les progrès réalisés et facilite la suite.": "Finalice con cuidado. Una conclusión bien preparada protege los avances realizados y facilita lo que viene después.",
  "Préparer le prochain cycle": "Preparar el próximo ciclo",
  "La fin du mois crée un espace favorable à la synthèse, au détachement et à la préparation.": "El final del mes crea un espacio favorable para la síntesis, el desapego y la preparación.",
  "Vous comprenez mieux ce que cette période vous a appris sur vos besoins, vos limites et vos ambitions. Cette lucidité vous permettra d’aborder le mois suivant avec une direction plus précise.": "Comprende mejor lo que este período le ha enseñado sobre sus necesidades, límites y ambiciones. Esta lucidez le permitirá abordar el mes siguiente con una dirección más precisa.",
  "Une décision prise maintenant peut simplifier considérablement votre organisation ou votre état d’esprit pour la suite.": "Una decisión tomada ahora puede simplificar considerablemente su organización o su estado de ánimo para lo que sigue.",
  "Ne transportez pas automatiquement dans le prochain mois une obligation qui ne correspond plus à vos priorités.": "No lleve automáticamente al próximo mes una obligación que ya no corresponde a sus prioridades.",
  "Conservez les apprentissages utiles, terminez ce qui peut l’être et laissez de l’espace à une nouvelle étape.": "Conserve los aprendizajes útiles, termine lo que pueda terminarse y deje espacio para una nueva etapa.",
  "Bordeaux": "Burdeos",
  "Bleu nuit": "Azul noche",
  "Vert émeraude": "Verde esmeralda",
  "Or": "Dorado",
  "Violet profond": "Violeta profundo",
  "Rose poudré": "Rosa empolvado",
  "Obsidienne": "Obsidiana",
  "Améthyste": "Amatista",
  "Quartz rose": "Cuarzo rosa",
  "Labradorite": "Labradorita",
  "Citrine": "Citrino",
  "Pierre de lune": "Piedra de luna",
  "Confiance": "Confianza",
  "Intuition": "Intuición",
  "Feu": "Fuego",
  "Terre": "Tierra",
  "Air": "Aire",
  "Eau": "Agua",
  "Mars": "Marte",
  "Vénus": "Venus",
  "Mercure": "Mercurio",
  "Lune": "Luna",
  "Soleil": "Sol",
  "Pluton": "Plutón",
  "Jupiter": "Júpiter",
  "Saturne": "Saturno",
  "Uranus": "Urano",
  "Neptune": "Neptuno",
  "Horoscope du mois": "Horóscopo del mes",
  "Cette lecture vous accompagne à travers les principales tendances symboliques de votre mois.": "Esta lectura le acompaña a través de las principales tendencias simbólicas de su mes.",
  "Chaque mois ouvre un nouveau cycle et révèle une direction différente.": "Cada mes abre un nuevo ciclo y revela una dirección diferente.",
  "Vue d’ensemble du mois": "Visión general del mes",
  "Énergie du mois": "Energía del mes",
  "Discernement": "Discernimiento",
  "Votre point de vigilance": "Su punto de vigilancia",
  "Développement": "Desarrollo",
  "Une direction à explorer": "Una dirección que explorar",
  "Ces éléments symboliques peuvent accompagner votre mois.": "Estos elementos simbólicos pueden acompañar su mes.",
  "Les changements les plus importants commencent souvent par une décision discrète.": "Los cambios más importantes suelen comenzar con una decisión discreta.",
  "Votre message du mois": "Su mensaje del mes",
  "Ce mois vous invite à progresser avec constance, à observer les changements au fil des semaines et à choisir vos actions avec discernement. Vous n’avez pas besoin de tout accomplir immédiatement. Une direction claire et des gestes réguliers peuvent produire une évolution durable.": "Este mes le invita a avanzar con constancia, observar los cambios a lo largo de las semanas y elegir sus acciones con discernimiento. No necesita lograrlo todo de inmediato. Una dirección clara y acciones regulares pueden producir una evolución duradera.",
  "Votre force réside ce mois-ci dans votre capacité à respecter votre rythme tout en restant fidèle à la direction que vous avez choisie.": "Su fortaleza este mes reside en su capacidad para respetar su ritmo sin dejar de ser fiel a la dirección que ha elegido."
};

const DE: TranslationMap = {
  "Ce mois marque une période de progression intérieure et de clarification.": "Dieser Monat steht für eine Phase innerer Entwicklung und Klärung.",
  "Les événements évoluent graduellement et vous invitent à observer les changements avant de prendre des décisions définitives. Certaines réponses apparaîtront au fil des semaines plutôt qu’immédiatement.": "Die Ereignisse entwickeln sich allmählich und laden Sie ein, Veränderungen zu beobachten, bevor Sie endgültige Entscheidungen treffen. Manche Antworten zeigen sich erst im Laufe der Wochen statt sofort.",
  "Avancez étape par étape et laissez les situations révéler leur véritable direction.": "Gehen Sie Schritt für Schritt vor und lassen Sie die Situationen ihre wahre Richtung zeigen.",
  "Évolution": "Entwicklung",
  "Clarté": "Klarheit",
  "Progression": "Fortschritt",
  "Une énergie de renouvellement accompagne ce nouveau mois.": "Eine Energie der Erneuerung begleitet diesen neuen Monat.",
  "Vous pourriez ressentir le besoin de revoir certaines habitudes, priorités ou relations. Les changements les plus utiles seront ceux que vous pourrez maintenir dans le temps.": "Sie könnten das Bedürfnis verspüren, bestimmte Gewohnheiten, Prioritäten oder Beziehungen zu überdenken. Am hilfreichsten sind die Veränderungen, die Sie langfristig beibehalten können.",
  "Choisissez une transformation réaliste plutôt que plusieurs changements simultanés.": "Wählen Sie eine realistische Veränderung statt mehrerer gleichzeitiger Umstellungen.",
  "Renouveau": "Erneuerung",
  "Décision": "Entscheidung",
  "Transformation": "Transformation",
  "Ce mois favorise une meilleure compréhension de vos besoins personnels.": "Dieser Monat fördert ein besseres Verständnis Ihrer persönlichen Bedürfnisse.",
  "Vous pourriez prendre conscience de ce qui vous motive réellement, mais aussi de ce qui vous demande trop d’énergie. Cette lucidité vous permettra de mieux organiser vos efforts.": "Sie könnten erkennen, was Sie wirklich motiviert, aber auch, was Ihnen zu viel Energie abverlangt. Diese Klarheit hilft Ihnen, Ihre Kräfte besser einzuteilen.",
  "Conservez ce qui vous nourrit et réduisez ce qui vous disperse.": "Bewahren Sie, was Sie stärkt, und reduzieren Sie, was Ihre Energie zerstreut.",
  "Compréhension": "Verständnis",
  "Priorités": "Prioritäten",
  "Équilibre": "Gleichgewicht",
  "Votre énergie évoluera progressivement au fil du mois.": "Ihre Energie wird sich im Laufe des Monats allmählich entwickeln.",
  "Certaines semaines seront plus dynamiques, tandis que d’autres vous inviteront à ralentir. En respectant ces variations, vous conserverez une meilleure stabilité physique et mentale.": "Manche Wochen werden dynamischer sein, während andere Sie zum Verlangsamen einladen. Wenn Sie diese Schwankungen respektieren, bewahren Sie mehr körperliche und mentale Stabilität.",
  "Adaptez votre rythme plutôt que de vous imposer la même intensité chaque jour.": "Passen Sie Ihr Tempo an, statt sich jeden Tag dieselbe Intensität aufzuzwingen.",
  "Rythme": "Rhythmus",
  "Stabilité": "Stabilität",
  "Adaptation": "Anpassung",
  "Ce mois vous apporte un regain de motivation.": "Dieser Monat bringt Ihnen neue Motivation.",
  "Vous disposez d’un bon élan pour relancer un projet ou reprendre une démarche laissée en attente. Une organisation claire vous aidera à transformer cette motivation en résultats durables.": "Sie haben guten Schwung, um ein Projekt neu zu starten oder ein Vorhaben wieder aufzunehmen, das liegen geblieben ist. Eine klare Organisation hilft Ihnen, diese Motivation in nachhaltige Ergebnisse umzusetzen.",
  "Fixez-vous des étapes précises et mesurables pour chaque semaine.": "Setzen Sie sich für jede Woche konkrete und messbare Etappen.",
  "Motivation": "Motivation",
  "Action": "Handlung",
  "Résultats": "Ergebnisse",
  "Votre sensibilité influence fortement votre niveau d’énergie ce mois-ci.": "Ihre Sensibilität beeinflusst Ihr Energieniveau in diesem Monat stark.",
  "Les environnements agités pourraient vous fatiguer davantage, tandis que les moments de calme favoriseront votre concentration et votre créativité.": "Unruhige Umgebungen könnten Sie stärker ermüden, während ruhige Momente Konzentration und Kreativität fördern.",
  "Protégez régulièrement votre espace mental et votre temps de récupération.": "Schützen Sie regelmäßig Ihren mentalen Freiraum und Ihre Erholungszeit.",
  "Sensibilité": "Sensibilität",
  "Protection": "Schutz",
  "Récupération": "Erholung",
  "Poser des bases solides": "Solide Grundlagen schaffen",
  "Cette première semaine vous invite à ralentir suffisamment pour définir une direction claire.": "Diese erste Woche lädt Sie ein, genug Tempo herauszunehmen, um eine klare Richtung festzulegen.",
  "Les premiers jours du mois sont favorables à l’observation, à l’organisation et aux décisions préparées avec soin. Vous gagnerez à déterminer ce qui mérite réellement votre énergie avant de multiplier les initiatives.": "Die ersten Tage des Monats eignen sich gut für Beobachtung, Organisation und sorgfältig vorbereitete Entscheidungen. Es hilft Ihnen, zunächst zu bestimmen, was Ihre Energie wirklich verdient, bevor Sie zu viele Initiativen starten.",
  "Une idée encore imprécise peut devenir un projet concret si vous lui donnez une structure simple et réaliste.": "Eine noch unklare Idee kann zu einem konkreten Projekt werden, wenn Sie ihr eine einfache und realistische Struktur geben.",
  "Évitez de vouloir obtenir immédiatement toutes les réponses. Certaines informations apparaîtront progressivement.": "Vermeiden Sie den Wunsch, sofort alle Antworten zu bekommen. Manche Informationen werden sich nach und nach zeigen.",
  "Commencez par une priorité essentielle. Une base stable vous permettra d’avancer plus rapidement durant les semaines suivantes.": "Beginnen Sie mit einer wesentlichen Priorität. Eine stabile Grundlage ermöglicht Ihnen, in den folgenden Wochen schneller voranzukommen.",
  "Clarifier vos priorités": "Ihre Prioritäten klären",
  "Le début du mois met en lumière ce qui doit être conservé, ajusté ou laissé derrière vous.": "Der Monatsanfang zeigt, was bewahrt, angepasst oder hinter Ihnen gelassen werden sollte.",
  "Votre lucidité augmente lorsque vous prenez le temps d’examiner vos besoins sans tenir compte des attentes extérieures. Une décision simple pourrait alléger considérablement la suite du mois.": "Ihre Klarheit wächst, wenn Sie sich Zeit nehmen, Ihre Bedürfnisse ohne äußere Erwartungen zu prüfen. Eine einfache Entscheidung könnte den restlichen Monat deutlich erleichtern.",
  "Vous pouvez reprendre le contrôle d’une situation en définissant clairement vos limites et votre objectif principal.": "Sie können die Kontrolle über eine Situation zurückgewinnen, indem Sie Ihre Grenzen und Ihr Hauptziel klar festlegen.",
  "La dispersion pourrait vous faire perdre du temps sur des détails qui ne changent pas réellement le résultat.": "Zerstreuung könnte dazu führen, dass Sie Zeit mit Details verlieren, die das Ergebnis nicht wirklich verändern.",
  "Choisissez ce qui soutient votre équilibre à long terme plutôt que ce qui vous procure seulement un soulagement immédiat.": "Wählen Sie, was Ihr langfristiges Gleichgewicht unterstützt, statt nur kurzfristige Erleichterung zu suchen.",
  "Préparer un nouveau départ": "Einen Neuanfang vorbereiten",
  "Une énergie de renouvellement accompagne cette première étape du mois.": "Eine Energie der Erneuerung begleitet diese erste Phase des Monats.",
  "Vous pourriez ressentir le besoin de modifier une habitude, une méthode ou une manière de communiquer. Les changements les plus prometteurs seront ceux que vous pourrez intégrer progressivement.": "Sie könnten das Bedürfnis verspüren, eine Gewohnheit, eine Methode oder eine Art der Kommunikation zu verändern. Am vielversprechendsten sind Veränderungen, die Sie schrittweise integrieren können.",
  "Une nouvelle façon d’aborder un projet ou une relation peut ouvrir une possibilité que vous n’aviez pas encore envisagée.": "Eine neue Art, ein Projekt oder eine Beziehung anzugehen, kann eine Möglichkeit eröffnen, die Sie bisher nicht in Betracht gezogen haben.",
  "Ne confondez pas nouveauté et précipitation. Un changement durable demande un minimum de préparation.": "Verwechseln Sie Neues nicht mit Übereile. Dauerhafte Veränderung braucht ein Mindestmaß an Vorbereitung.",
  "Donnez une forme concrète à votre intention : une date, une première action et un résultat réaliste à atteindre.": "Geben Sie Ihrer Absicht eine konkrete Form: ein Datum, einen ersten Schritt und ein realistisches Ziel.",
  "Passer à l’action": "Ins Handeln kommen",
  "Cette deuxième semaine favorise les initiatives, les échanges dynamiques et les décisions concrètes.": "Diese zweite Woche begünstigt Initiative, dynamischen Austausch und konkrete Entscheidungen.",
  "Après avoir posé vos bases, vous disposez d’un meilleur élan pour faire progresser un projet ou régler une situation restée en attente. Votre efficacité augmentera si vous avancez selon un ordre clair.": "Nachdem Sie Ihre Grundlagen gelegt haben, haben Sie mehr Schwung, um ein Projekt voranzubringen oder eine offene Situation zu klären. Ihre Effizienz steigt, wenn Sie in einer klaren Reihenfolge vorgehen.",
  "Une occasion intéressante peut apparaître dans un domaine où vous hésitiez encore à agir.": "Eine interessante Gelegenheit kann sich in einem Bereich ergeben, in dem Sie bisher noch gezögert haben zu handeln.",
  "L’enthousiasme pourrait vous pousser à accepter trop de responsabilités ou à commencer plusieurs choses simultanément.": "Begeisterung könnte Sie dazu verleiten, zu viele Verantwortungen zu übernehmen oder mehrere Dinge gleichzeitig zu beginnen.",
  "Agissez avec confiance, mais vérifiez que chaque décision contribue réellement à votre objectif du mois.": "Handeln Sie selbstbewusst, aber prüfen Sie, ob jede Entscheidung tatsächlich zu Ihrem Monatsziel beiträgt.",
  "Faire avancer vos projets": "Ihre Projekte voranbringen",
  "Le rythme s’accélère et vous encourage à transformer vos intentions en résultats visibles.": "Das Tempo nimmt zu und ermutigt Sie, Ihre Absichten in sichtbare Ergebnisse umzusetzen.",
  "Les démarches entreprises cette semaine peuvent produire une réponse plus rapide que prévu. Une conversation, une demande ou une proposition bien préparée favorisera votre progression.": "Die Schritte dieser Woche können schneller als erwartet eine Reaktion auslösen. Ein gut vorbereitetes Gespräch, eine Anfrage oder ein Vorschlag unterstützt Ihren Fortschritt.",
  "Votre capacité à expliquer clairement votre idée peut attirer un soutien, un conseil ou une collaboration utile.": "Ihre Fähigkeit, Ihre Idee klar zu erklären, kann Unterstützung, Rat oder eine hilfreiche Zusammenarbeit anziehen.",
  "Évitez d’interpréter un délai ou une hésitation comme un refus définitif.": "Vermeiden Sie es, eine Verzögerung oder ein Zögern als endgültige Ablehnung zu deuten.",
  "Concentrez votre énergie sur l’action qui peut créer le plus d’effet plutôt que sur la quantité de tâches accomplies.": "Konzentrieren Sie Ihre Energie auf die Handlung mit der größten Wirkung statt auf die Anzahl erledigter Aufgaben.",
  "Affirmer votre direction": "Ihre Richtung bekräftigen",
  "Cette semaine renforce votre volonté et votre capacité à prendre davantage de place.": "Diese Woche stärkt Ihren Willen und Ihre Fähigkeit, mehr Raum einzunehmen.",
  "Vous pourriez être amenée à défendre une idée, exprimer un besoin ou prendre une décision que vous repoussiez. Une attitude calme et déterminée donnera plus de poids à votre message.": "Sie könnten eine Idee verteidigen, ein Bedürfnis äußern oder eine Entscheidung treffen müssen, die Sie aufgeschoben haben. Eine ruhige und entschlossene Haltung verleiht Ihrer Botschaft mehr Gewicht.",
  "Une initiative personnelle peut vous permettre de reprendre l’avantage dans une situation devenue trop passive.": "Eine persönliche Initiative kann Ihnen helfen, in einer zu passiv gewordenen Situation wieder die Oberhand zu gewinnen.",
  "La fermeté sera utile, mais une réaction trop rapide pourrait fermer une porte encore intéressante.": "Entschlossenheit ist hilfreich, aber eine zu schnelle Reaktion könnte eine noch interessante Tür schließen.",
  "Affirmez votre choix sans chercher à convaincre tout le monde. La cohérence de vos gestes parlera pour vous.": "Stehen Sie zu Ihrer Entscheidung, ohne alle überzeugen zu wollen. Die Konsequenz Ihrer Handlungen wird für Sie sprechen.",
  "Ajuster votre trajectoire": "Ihre Richtung anpassen",
  "La troisième semaine vous invite à observer les résultats obtenus et à corriger ce qui doit l’être.": "Die dritte Woche lädt Sie ein, die erzielten Ergebnisse zu beobachten und anzupassen, was nötig ist.",
  "Vous disposez maintenant de suffisamment d’informations pour distinguer ce qui fonctionne de ce qui demande une autre approche. Un petit ajustement pourrait être plus efficace qu’un changement radical.": "Sie haben jetzt genügend Informationen, um zu erkennen, was funktioniert und was einen anderen Ansatz braucht. Eine kleine Anpassung könnte wirksamer sein als ein radikaler Wandel.",
  "Une erreur, un retard ou une hésitation peut révéler une meilleure manière d’atteindre votre objectif.": "Ein Fehler, eine Verzögerung oder ein Zögern kann einen besseren Weg zu Ihrem Ziel zeigen.",
  "Évitez de poursuivre une stratégie uniquement parce que vous y avez déjà consacré du temps.": "Verfolgen Sie eine Strategie nicht nur weiter, weil Sie bereits Zeit darin investiert haben.",
  "Restez fidèle à votre direction, mais acceptez de modifier le chemin utilisé pour l’atteindre.": "Bleiben Sie Ihrer Richtung treu, aber seien Sie bereit, den Weg dorthin zu verändern.",
  "Retrouver votre équilibre": "Ihr Gleichgewicht wiederfinden",
  "Cette période demande une meilleure répartition entre vos obligations, vos relations et votre récupération.": "Diese Phase verlangt eine bessere Balance zwischen Verpflichtungen, Beziehungen und Erholung.",
  "Vous pourriez constater qu’un domaine a occupé trop de place depuis le début du mois. En rééquilibrant votre horaire ou vos priorités, vous retrouverez davantage de disponibilité mentale.": "Sie könnten feststellen, dass ein Bereich seit Monatsbeginn zu viel Raum eingenommen hat. Durch ein neues Gleichgewicht in Ihrem Zeitplan oder Ihren Prioritäten gewinnen Sie mehr mentale Kapazität zurück.",
  "Une limite clairement posée peut améliorer une relation ou vous redonner du temps pour un projet important.": "Eine klar gesetzte Grenze kann eine Beziehung verbessern oder Ihnen Zeit für ein wichtiges Projekt zurückgeben.",
  "La fatigue pourrait amplifier une contrariété ou vous faire douter inutilement de vos progrès.": "Müdigkeit könnte eine Verärgerung verstärken oder Sie unnötig an Ihren Fortschritten zweifeln lassen.",
  "Avant de prendre une décision importante, assurez-vous de disposer du calme et de l’énergie nécessaires.": "Bevor Sie eine wichtige Entscheidung treffen, stellen Sie sicher, dass Sie die nötige Ruhe und Energie haben.",
  "Écouter les signes utiles": "Hilfreiche Zeichen beachten",
  "Votre intuition devient plus précise lorsque vous la confrontez aux faits et à votre expérience.": "Ihre Intuition wird präziser, wenn Sie sie mit Fakten und Ihrer Erfahrung abgleichen.",
  "Une impression récurrente mérite votre attention, particulièrement si plusieurs événements semblent indiquer la même direction. Prenez toutefois le temps de vérifier ce que vous ressentez.": "Ein wiederkehrender Eindruck verdient Ihre Aufmerksamkeit, besonders wenn mehrere Ereignisse in dieselbe Richtung zu weisen scheinen. Nehmen Sie sich dennoch Zeit, Ihr Gefühl zu überprüfen.",
  "Une prise de conscience peut vous aider à comprendre une relation ou une situation sous un angle entièrement différent.": "Eine Erkenntnis kann Ihnen helfen, eine Beziehung oder Situation aus einer völlig anderen Perspektive zu verstehen.",
  "Ne laissez pas une inquiétude momentanée devenir une certitude sans preuve suffisante.": "Lassen Sie eine vorübergehende Sorge nicht ohne ausreichende Belege zur Gewissheit werden.",
  "Écoutez votre ressenti, puis appuyez votre décision sur des éléments concrets et observables.": "Hören Sie auf Ihr Gefühl und stützen Sie Ihre Entscheidung anschließend auf konkrete und beobachtbare Elemente.",
  "Consolider vos acquis": "Ihre Fortschritte festigen",
  "La dernière partie du mois vous invite à stabiliser ce que vous avez construit et à reconnaître votre progression.": "Der letzte Teil des Monats lädt Sie ein, das Erreichte zu stabilisieren und Ihren Fortschritt anzuerkennen.",
  "Certaines démarches commencent à produire des effets plus visibles. Vous gagnerez à terminer ce qui est déjà bien engagé avant de vous tourner vers un nouvel objectif.": "Manche Schritte zeigen nun deutlichere Wirkungen. Es ist sinnvoll, zunächst das gut Begonnene abzuschließen, bevor Sie sich einem neuen Ziel zuwenden.",
  "Un résultat, une réponse ou une confirmation peut vous montrer que vos efforts réguliers n’ont pas été inutiles.": "Ein Ergebnis, eine Antwort oder eine Bestätigung kann Ihnen zeigen, dass Ihre beständigen Anstrengungen nicht vergeblich waren.",
  "Évitez de minimiser vos avancées simplement parce que tout n’est pas encore parfaitement terminé.": "Spielen Sie Ihre Fortschritte nicht herunter, nur weil noch nicht alles perfekt abgeschlossen ist.",
  "Prenez le temps de mesurer le chemin parcouru et choisissez consciemment ce que vous souhaitez poursuivre le mois prochain.": "Nehmen Sie sich Zeit, den zurückgelegten Weg zu würdigen, und wählen Sie bewusst, was Sie im nächsten Monat weiterverfolgen möchten.",
  "Récolter les résultats": "Ergebnisse ernten",
  "Cette quatrième semaine met en évidence les conséquences de vos choix et de vos efforts précédents.": "Diese vierte Woche macht die Folgen Ihrer bisherigen Entscheidungen und Anstrengungen sichtbar.",
  "Vous pourriez recevoir une réponse attendue, constater une amélioration ou comprendre enfin la portée d’une décision. Les résultats les plus utiles vous indiqueront aussi la prochaine étape.": "Sie könnten eine erwartete Antwort erhalten, eine Verbesserung feststellen oder endlich die Tragweite einer Entscheidung verstehen. Die hilfreichsten Ergebnisse zeigen Ihnen zugleich den nächsten Schritt.",
  "Une réussite discrète peut devenir la base d’un développement plus important durant le prochain cycle.": "Ein stiller Erfolg kann zur Grundlage für eine größere Entwicklung im nächsten Zyklus werden.",
  "Le désir de conclure rapidement pourrait vous faire négliger un dernier détail important.": "Der Wunsch nach einem schnellen Abschluss könnte dazu führen, dass Sie ein letztes wichtiges Detail übersehen.",
  "Finalisez avec soin. Une conclusion bien préparée protège les progrès réalisés et facilite la suite.": "Schließen Sie sorgfältig ab. Ein gut vorbereiteter Abschluss schützt die erzielten Fortschritte und erleichtert den nächsten Schritt.",
  "Préparer le prochain cycle": "Den nächsten Zyklus vorbereiten",
  "La fin du mois crée un espace favorable à la synthèse, au détachement et à la préparation.": "Das Monatsende schafft einen günstigen Raum für Rückblick, Loslassen und Vorbereitung.",
  "Vous comprenez mieux ce que cette période vous a appris sur vos besoins, vos limites et vos ambitions. Cette lucidité vous permettra d’aborder le mois suivant avec une direction plus précise.": "Sie verstehen besser, was diese Phase Sie über Ihre Bedürfnisse, Grenzen und Ambitionen gelehrt hat. Diese Klarheit hilft Ihnen, den nächsten Monat mit einer präziseren Richtung anzugehen.",
  "Une décision prise maintenant peut simplifier considérablement votre organisation ou votre état d’esprit pour la suite.": "Eine jetzt getroffene Entscheidung kann Ihre Organisation oder innere Haltung für die nächste Phase deutlich vereinfachen.",
  "Ne transportez pas automatiquement dans le prochain mois une obligation qui ne correspond plus à vos priorités.": "Nehmen Sie nicht automatisch eine Verpflichtung in den nächsten Monat mit, die nicht mehr zu Ihren Prioritäten passt.",
  "Conservez les apprentissages utiles, terminez ce qui peut l’être et laissez de l’espace à une nouvelle étape.": "Bewahren Sie die hilfreichen Erkenntnisse, schließen Sie ab, was abgeschlossen werden kann, und schaffen Sie Raum für eine neue Phase.",
  "Bordeaux": "Bordeauxrot",
  "Bleu nuit": "Nachtblau",
  "Vert émeraude": "Smaragdgrün",
  "Or": "Gold",
  "Violet profond": "Tiefviolett",
  "Rose poudré": "Puderrosa",
  "Obsidienne": "Obsidian",
  "Améthyste": "Amethyst",
  "Quartz rose": "Rosenquarz",
  "Labradorite": "Labradorit",
  "Citrine": "Citrin",
  "Pierre de lune": "Mondstein",
  "Confiance": "Vertrauen",
  "Intuition": "Intuition",
  "Feu": "Feuer",
  "Terre": "Erde",
  "Air": "Luft",
  "Eau": "Wasser",
  "Mars": "Mars",
  "Vénus": "Venus",
  "Mercure": "Merkur",
  "Lune": "Mond",
  "Soleil": "Sonne",
  "Pluton": "Pluto",
  "Jupiter": "Jupiter",
  "Saturne": "Saturn",
  "Uranus": "Uranus",
  "Neptune": "Neptun",
  "Horoscope du mois": "Monatshoroskop",
  "Cette lecture vous accompagne à travers les principales tendances symboliques de votre mois.": "Diese Deutung begleitet Sie durch die wichtigsten symbolischen Tendenzen Ihres Monats.",
  "Chaque mois ouvre un nouveau cycle et révèle une direction différente.": "Jeder Monat eröffnet einen neuen Zyklus und zeigt eine andere Richtung.",
  "Vue d’ensemble du mois": "Monatsüberblick",
  "Énergie du mois": "Energie des Monats",
  "Discernement": "Urteilsvermögen",
  "Votre point de vigilance": "Ihr Aufmerksamkeitspunkt",
  "Développement": "Entwicklung",
  "Une direction à explorer": "Eine Richtung zum Erkunden",
  "Ces éléments symboliques peuvent accompagner votre mois.": "Diese symbolischen Elemente können Sie durch Ihren Monat begleiten.",
  "Les changements les plus importants commencent souvent par une décision discrète.": "Die wichtigsten Veränderungen beginnen oft mit einer stillen Entscheidung.",
  "Votre message du mois": "Ihre Botschaft des Monats",
  "Ce mois vous invite à progresser avec constance, à observer les changements au fil des semaines et à choisir vos actions avec discernement. Vous n’avez pas besoin de tout accomplir immédiatement. Une direction claire et des gestes réguliers peuvent produire une évolution durable.": "Dieser Monat lädt Sie ein, beständig voranzugehen, Veränderungen im Laufe der Wochen zu beobachten und Ihre Handlungen mit Umsicht zu wählen. Sie müssen nicht alles sofort erreichen. Eine klare Richtung und regelmäßige Schritte können nachhaltige Entwicklung bewirken.",
  "Votre force réside ce mois-ci dans votre capacité à respecter votre rythme tout en restant fidèle à la direction que vous avez choisie.": "Ihre Stärke liegt in diesem Monat darin, Ihr eigenes Tempo zu respektieren und zugleich der gewählten Richtung treu zu bleiben."
};

const IT: TranslationMap = {
  "Ce mois marque une période de progression intérieure et de clarification.": "Questo mese segna un periodo di crescita interiore e chiarimento.",
  "Les événements évoluent graduellement et vous invitent à observer les changements avant de prendre des décisions définitives. Certaines réponses apparaîtront au fil des semaines plutôt qu’immédiatement.": "Gli eventi evolvono gradualmente e invitano a osservare i cambiamenti prima di prendere decisioni definitive. Alcune risposte emergeranno nel corso delle settimane anziché immediatamente.",
  "Avancez étape par étape et laissez les situations révéler leur véritable direction.": "Procedi passo dopo passo e lascia che le situazioni rivelino la loro vera direzione.",
  "Évolution": "Evoluzione",
  "Clarté": "Chiarezza",
  "Progression": "Progresso",
  "Une énergie de renouvellement accompagne ce nouveau mois.": "Un’energia di rinnovamento accompagna questo nuovo mese.",
  "Vous pourriez ressentir le besoin de revoir certaines habitudes, priorités ou relations. Les changements les plus utiles seront ceux que vous pourrez maintenir dans le temps.": "Potresti sentire il bisogno di rivedere alcune abitudini, priorità o relazioni. I cambiamenti più utili saranno quelli che riuscirai a mantenere nel tempo.",
  "Choisissez une transformation réaliste plutôt que plusieurs changements simultanés.": "Scegli una trasformazione realistica invece di più cambiamenti contemporanei.",
  "Renouveau": "Rinnovamento",
  "Décision": "Decisione",
  "Transformation": "Trasformazione",
  "Ce mois favorise une meilleure compréhension de vos besoins personnels.": "Questo mese favorisce una migliore comprensione dei tuoi bisogni personali.",
  "Vous pourriez prendre conscience de ce qui vous motive réellement, mais aussi de ce qui vous demande trop d’énergie. Cette lucidité vous permettra de mieux organiser vos efforts.": "Potresti renderti conto di ciò che ti motiva davvero, ma anche di ciò che richiede troppa energia. Questa lucidità ti permetterà di organizzare meglio i tuoi sforzi.",
  "Conservez ce qui vous nourrit et réduisez ce qui vous disperse.": "Conserva ciò che ti nutre e riduci ciò che ti disperde.",
  "Compréhension": "Comprensione",
  "Priorités": "Priorità",
  "Équilibre": "Equilibrio",
  "Votre énergie évoluera progressivement au fil du mois.": "La tua energia evolverà gradualmente nel corso del mese.",
  "Certaines semaines seront plus dynamiques, tandis que d’autres vous inviteront à ralentir. En respectant ces variations, vous conserverez une meilleure stabilité physique et mentale.": "Alcune settimane saranno più dinamiche, mentre altre inviteranno a rallentare. Rispettando queste variazioni, manterrai una migliore stabilità fisica e mentale.",
  "Adaptez votre rythme plutôt que de vous imposer la même intensité chaque jour.": "Adatta il tuo ritmo invece di imporre la stessa intensità ogni giorno.",
  "Rythme": "Ritmo",
  "Stabilité": "Stabilità",
  "Adaptation": "Adattamento",
  "Ce mois vous apporte un regain de motivation.": "Questo mese porta una rinnovata motivazione.",
  "Vous disposez d’un bon élan pour relancer un projet ou reprendre une démarche laissée en attente. Une organisation claire vous aidera à transformer cette motivation en résultats durables.": "Hai un buon slancio per rilanciare un progetto o riprendere un percorso lasciato in sospeso. Un’organizzazione chiara ti aiuterà a trasformare questa motivazione in risultati duraturi.",
  "Fixez-vous des étapes précises et mesurables pour chaque semaine.": "Stabilisci tappe precise e misurabili per ogni settimana.",
  "Motivation": "Motivazione",
  "Action": "Azione",
  "Résultats": "Risultati",
  "Votre sensibilité influence fortement votre niveau d’énergie ce mois-ci.": "La tua sensibilità influenza molto il livello di energia questo mese.",
  "Les environnements agités pourraient vous fatiguer davantage, tandis que les moments de calme favoriseront votre concentration et votre créativité.": "Gli ambienti agitati potrebbero stancarti di più, mentre i momenti di calma favoriranno concentrazione e creatività.",
  "Protégez régulièrement votre espace mental et votre temps de récupération.": "Proteggi regolarmente il tuo spazio mentale e il tempo di recupero.",
  "Sensibilité": "Sensibilità",
  "Protection": "Protezione",
  "Récupération": "Recupero",
  "Poser des bases solides": "Porre basi solide",
  "Cette première semaine vous invite à ralentir suffisamment pour définir une direction claire.": "Questa prima settimana invita a rallentare quanto basta per definire una direzione chiara.",
  "Les premiers jours du mois sont favorables à l’observation, à l’organisation et aux décisions préparées avec soin. Vous gagnerez à déterminer ce qui mérite réellement votre énergie avant de multiplier les initiatives.": "I primi giorni del mese sono favorevoli all’osservazione, all’organizzazione e alle decisioni preparate con cura. Sarà utile capire cosa merita davvero la tua energia prima di moltiplicare le iniziative.",
  "Une idée encore imprécise peut devenir un projet concret si vous lui donnez une structure simple et réaliste.": "Un’idea ancora imprecisa può diventare un progetto concreto se le dai una struttura semplice e realistica.",
  "Évitez de vouloir obtenir immédiatement toutes les réponses. Certaines informations apparaîtront progressivement.": "Evita di voler ottenere subito tutte le risposte. Alcune informazioni emergeranno progressivamente.",
  "Commencez par une priorité essentielle. Une base stable vous permettra d’avancer plus rapidement durant les semaines suivantes.": "Inizia da una priorità essenziale. Una base stabile ti permetterà di avanzare più rapidamente nelle settimane successive.",
  "Clarifier vos priorités": "Chiarire le priorità",
  "Le début du mois met en lumière ce qui doit être conservé, ajusté ou laissé derrière vous.": "L’inizio del mese mette in luce ciò che va mantenuto, adattato o lasciato alle spalle.",
  "Votre lucidité augmente lorsque vous prenez le temps d’examiner vos besoins sans tenir compte des attentes extérieures. Une décision simple pourrait alléger considérablement la suite du mois.": "La tua lucidità aumenta quando ti prendi il tempo di esaminare i tuoi bisogni senza farti guidare dalle aspettative esterne. Una decisione semplice potrebbe alleggerire molto il resto del mese.",
  "Vous pouvez reprendre le contrôle d’une situation en définissant clairement vos limites et votre objectif principal.": "Puoi riprendere il controllo di una situazione definendo chiaramente i tuoi limiti e il tuo obiettivo principale.",
  "La dispersion pourrait vous faire perdre du temps sur des détails qui ne changent pas réellement le résultat.": "La dispersione potrebbe farti perdere tempo su dettagli che non cambiano davvero il risultato.",
  "Choisissez ce qui soutient votre équilibre à long terme plutôt que ce qui vous procure seulement un soulagement immédiat.": "Scegli ciò che sostiene il tuo equilibrio a lungo termine invece di ciò che offre solo un sollievo immediato.",
  "Préparer un nouveau départ": "Preparare un nuovo inizio",
  "Une énergie de renouvellement accompagne cette première étape du mois.": "Un’energia di rinnovamento accompagna questa prima fase del mese.",
  "Vous pourriez ressentir le besoin de modifier une habitude, une méthode ou une manière de communiquer. Les changements les plus prometteurs seront ceux que vous pourrez intégrer progressivement.": "Potresti sentire il bisogno di cambiare un’abitudine, un metodo o un modo di comunicare. I cambiamenti più promettenti saranno quelli che riuscirai a integrare gradualmente.",
  "Une nouvelle façon d’aborder un projet ou une relation peut ouvrir une possibilité que vous n’aviez pas encore envisagée.": "Un nuovo modo di affrontare un progetto o una relazione può aprire una possibilità che non avevi ancora considerato.",
  "Ne confondez pas nouveauté et précipitation. Un changement durable demande un minimum de préparation.": "Non confondere novità e fretta. Un cambiamento duraturo richiede un minimo di preparazione.",
  "Donnez une forme concrète à votre intention : une date, une première action et un résultat réaliste à atteindre.": "Dai una forma concreta alla tua intenzione: una data, una prima azione e un risultato realistico da raggiungere.",
  "Passer à l’action": "Passare all’azione",
  "Cette deuxième semaine favorise les initiatives, les échanges dynamiques et les décisions concrètes.": "Questa seconda settimana favorisce iniziative, scambi dinamici e decisioni concrete.",
  "Après avoir posé vos bases, vous disposez d’un meilleur élan pour faire progresser un projet ou régler une situation restée en attente. Votre efficacité augmentera si vous avancez selon un ordre clair.": "Dopo aver posto le basi, hai più slancio per far avanzare un progetto o risolvere una situazione rimasta in sospeso. La tua efficacia aumenterà se procederai con un ordine chiaro.",
  "Une occasion intéressante peut apparaître dans un domaine où vous hésitiez encore à agir.": "Può presentarsi un’occasione interessante in un ambito in cui esitavi ancora ad agire.",
  "L’enthousiasme pourrait vous pousser à accepter trop de responsabilités ou à commencer plusieurs choses simultanément.": "L’entusiasmo potrebbe spingerti ad accettare troppe responsabilità o a iniziare più cose contemporaneamente.",
  "Agissez avec confiance, mais vérifiez que chaque décision contribue réellement à votre objectif du mois.": "Agisci con fiducia, ma verifica che ogni decisione contribuisca davvero al tuo obiettivo del mese.",
  "Faire avancer vos projets": "Far avanzare i tuoi progetti",
  "Le rythme s’accélère et vous encourage à transformer vos intentions en résultats visibles.": "Il ritmo accelera e incoraggia a trasformare le intenzioni in risultati visibili.",
  "Les démarches entreprises cette semaine peuvent produire une réponse plus rapide que prévu. Une conversation, une demande ou une proposition bien préparée favorisera votre progression.": "Le iniziative intraprese questa settimana possono produrre una risposta più rapida del previsto. Una conversazione, una richiesta o una proposta ben preparata favorirà i tuoi progressi.",
  "Votre capacité à expliquer clairement votre idée peut attirer un soutien, un conseil ou une collaboration utile.": "La tua capacità di spiegare chiaramente la tua idea può attirare sostegno, consiglio o una collaborazione utile.",
  "Évitez d’interpréter un délai ou une hésitation comme un refus définitif.": "Evita di interpretare un ritardo o un’esitazione come un rifiuto definitivo.",
  "Concentrez votre énergie sur l’action qui peut créer le plus d’effet plutôt que sur la quantité de tâches accomplies.": "Concentra la tua energia sull’azione che può creare l’effetto maggiore invece che sulla quantità di compiti svolti.",
  "Affirmer votre direction": "Affermare la tua direzione",
  "Cette semaine renforce votre volonté et votre capacité à prendre davantage de place.": "Questa settimana rafforza la tua volontà e la capacità di prendere più spazio.",
  "Vous pourriez être amenée à défendre une idée, exprimer un besoin ou prendre une décision que vous repoussiez. Une attitude calme et déterminée donnera plus de poids à votre message.": "Potresti dover difendere un’idea, esprimere un bisogno o prendere una decisione che rimandavi. Un atteggiamento calmo e determinato darà più peso al tuo messaggio.",
  "Une initiative personnelle peut vous permettre de reprendre l’avantage dans une situation devenue trop passive.": "Un’iniziativa personale può permetterti di riprendere il vantaggio in una situazione diventata troppo passiva.",
  "La fermeté sera utile, mais une réaction trop rapide pourrait fermer une porte encore intéressante.": "La fermezza sarà utile, ma una reazione troppo rapida potrebbe chiudere una porta ancora interessante.",
  "Affirmez votre choix sans chercher à convaincre tout le monde. La cohérence de vos gestes parlera pour vous.": "Affermare la tua scelta senza cercare di convincere tutti. La coerenza dei tuoi gesti parlerà per te.",
  "Ajuster votre trajectoire": "Adattare la tua traiettoria",
  "La troisième semaine vous invite à observer les résultats obtenus et à corriger ce qui doit l’être.": "La terza settimana invita a osservare i risultati ottenuti e correggere ciò che va corretto.",
  "Vous disposez maintenant de suffisamment d’informations pour distinguer ce qui fonctionne de ce qui demande une autre approche. Un petit ajustement pourrait être plus efficace qu’un changement radical.": "Ora hai abbastanza informazioni per distinguere ciò che funziona da ciò che richiede un altro approccio. Un piccolo aggiustamento potrebbe essere più efficace di un cambiamento radicale.",
  "Une erreur, un retard ou une hésitation peut révéler une meilleure manière d’atteindre votre objectif.": "Un errore, un ritardo o un’esitazione possono rivelare un modo migliore per raggiungere il tuo obiettivo.",
  "Évitez de poursuivre une stratégie uniquement parce que vous y avez déjà consacré du temps.": "Evita di continuare una strategia solo perché le hai già dedicato tempo.",
  "Restez fidèle à votre direction, mais acceptez de modifier le chemin utilisé pour l’atteindre.": "Rimani fedele alla tua direzione, ma accetta di modificare il percorso usato per raggiungerla.",
  "Retrouver votre équilibre": "Ritrovare il tuo equilibrio",
  "Cette période demande une meilleure répartition entre vos obligations, vos relations et votre récupération.": "Questo periodo richiede un migliore equilibrio tra obblighi, relazioni e recupero.",
  "Vous pourriez constater qu’un domaine a occupé trop de place depuis le début du mois. En rééquilibrant votre horaire ou vos priorités, vous retrouverez davantage de disponibilité mentale.": "Potresti accorgerti che un ambito ha occupato troppo spazio dall’inizio del mese. Riequilibrando il tuo programma o le tue priorità, ritroverai maggiore disponibilità mentale.",
  "Une limite clairement posée peut améliorer une relation ou vous redonner du temps pour un projet important.": "Un limite posto chiaramente può migliorare una relazione o restituirti tempo per un progetto importante.",
  "La fatigue pourrait amplifier une contrariété ou vous faire douter inutilement de vos progrès.": "La stanchezza potrebbe amplificare un fastidio o farti dubitare inutilmente dei tuoi progressi.",
  "Avant de prendre une décision importante, assurez-vous de disposer du calme et de l’énergie nécessaires.": "Prima di prendere una decisione importante, assicurati di avere la calma e l’energia necessarie.",
  "Écouter les signes utiles": "Ascoltare i segnali utili",
  "Votre intuition devient plus précise lorsque vous la confrontez aux faits et à votre expérience.": "La tua intuizione diventa più precisa quando la confronti con i fatti e con la tua esperienza.",
  "Une impression récurrente mérite votre attention, particulièrement si plusieurs événements semblent indiquer la même direction. Prenez toutefois le temps de vérifier ce que vous ressentez.": "Un’impressione ricorrente merita attenzione, soprattutto se più eventi sembrano indicare la stessa direzione. Prenditi comunque il tempo di verificare ciò che senti.",
  "Une prise de conscience peut vous aider à comprendre une relation ou une situation sous un angle entièrement différent.": "Una presa di coscienza può aiutarti a comprendere una relazione o una situazione da un punto di vista completamente diverso.",
  "Ne laissez pas une inquiétude momentanée devenir une certitude sans preuve suffisante.": "Non lasciare che una preoccupazione momentanea diventi una certezza senza prove sufficienti.",
  "Écoutez votre ressenti, puis appuyez votre décision sur des éléments concrets et observables.": "Ascolta ciò che senti, poi basa la tua decisione su elementi concreti e osservabili.",
  "Consolider vos acquis": "Consolidare i risultati",
  "La dernière partie du mois vous invite à stabiliser ce que vous avez construit et à reconnaître votre progression.": "L’ultima parte del mese invita a stabilizzare ciò che hai costruito e a riconoscere i tuoi progressi.",
  "Certaines démarches commencent à produire des effets plus visibles. Vous gagnerez à terminer ce qui est déjà bien engagé avant de vous tourner vers un nouvel objectif.": "Alcune iniziative iniziano a produrre effetti più visibili. Sarà utile concludere ciò che è già ben avviato prima di rivolgersi a un nuovo obiettivo.",
  "Un résultat, une réponse ou une confirmation peut vous montrer que vos efforts réguliers n’ont pas été inutiles.": "Un risultato, una risposta o una conferma possono mostrarti che i tuoi sforzi costanti non sono stati inutili.",
  "Évitez de minimiser vos avancées simplement parce que tout n’est pas encore parfaitement terminé.": "Evita di minimizzare i tuoi progressi solo perché non tutto è ancora perfettamente concluso.",
  "Prenez le temps de mesurer le chemin parcouru et choisissez consciemment ce que vous souhaitez poursuivre le mois prochain.": "Prenditi il tempo di misurare il percorso fatto e scegli consapevolmente ciò che vuoi proseguire il mese prossimo.",
  "Récolter les résultats": "Raccogliere i risultati",
  "Cette quatrième semaine met en évidence les conséquences de vos choix et de vos efforts précédents.": "Questa quarta settimana mette in evidenza le conseguenze delle scelte e degli sforzi precedenti.",
  "Vous pourriez recevoir une réponse attendue, constater une amélioration ou comprendre enfin la portée d’une décision. Les résultats les plus utiles vous indiqueront aussi la prochaine étape.": "Potresti ricevere una risposta attesa, notare un miglioramento o comprendere finalmente la portata di una decisione. I risultati più utili indicheranno anche il passo successivo.",
  "Une réussite discrète peut devenir la base d’un développement plus important durant le prochain cycle.": "Un successo discreto può diventare la base di uno sviluppo più importante nel prossimo ciclo.",
  "Le désir de conclure rapidement pourrait vous faire négliger un dernier détail important.": "Il desiderio di concludere rapidamente potrebbe farti trascurare un ultimo dettaglio importante.",
  "Finalisez avec soin. Une conclusion bien préparée protège les progrès réalisés et facilite la suite.": "Concludi con cura. Una conclusione ben preparata protegge i progressi compiuti e facilita il seguito.",
  "Préparer le prochain cycle": "Preparare il prossimo ciclo",
  "La fin du mois crée un espace favorable à la synthèse, au détachement et à la préparation.": "La fine del mese crea uno spazio favorevole alla sintesi, al distacco e alla preparazione.",
  "Vous comprenez mieux ce que cette période vous a appris sur vos besoins, vos limites et vos ambitions. Cette lucidité vous permettra d’aborder le mois suivant avec une direction plus précise.": "Comprendi meglio ciò che questo periodo ti ha insegnato sui tuoi bisogni, limiti e ambizioni. Questa lucidità ti permetterà di affrontare il mese successivo con una direzione più precisa.",
  "Une décision prise maintenant peut simplifier considérablement votre organisation ou votre état d’esprit pour la suite.": "Una decisione presa ora può semplificare notevolmente la tua organizzazione o il tuo stato d’animo per ciò che verrà.",
  "Ne transportez pas automatiquement dans le prochain mois une obligation qui ne correspond plus à vos priorités.": "Non portare automaticamente nel mese successivo un obbligo che non corrisponde più alle tue priorità.",
  "Conservez les apprentissages utiles, terminez ce qui peut l’être et laissez de l’espace à une nouvelle étape.": "Conserva gli insegnamenti utili, termina ciò che può essere concluso e lascia spazio a una nuova fase.",
  "Bordeaux": "Bordeaux",
  "Bleu nuit": "Blu notte",
  "Vert émeraude": "Verde smeraldo",
  "Or": "Oro",
  "Violet profond": "Viola intenso",
  "Rose poudré": "Rosa cipria",
  "Obsidienne": "Ossidiana",
  "Améthyste": "Ametista",
  "Quartz rose": "Quarzo rosa",
  "Labradorite": "Labradorite",
  "Citrine": "Citrino",
  "Pierre de lune": "Pietra di luna",
  "Confiance": "Fiducia",
  "Intuition": "Intuizione",
  "Feu": "Fuoco",
  "Terre": "Terra",
  "Air": "Aria",
  "Eau": "Acqua",
  "Mars": "Marte",
  "Vénus": "Venere",
  "Mercure": "Mercurio",
  "Lune": "Luna",
  "Soleil": "Sole",
  "Pluton": "Plutone",
  "Jupiter": "Giove",
  "Saturne": "Saturno",
  "Uranus": "Urano",
  "Neptune": "Nettuno",
  "Horoscope du mois": "Oroscopo del mese",
  "Cette lecture vous accompagne à travers les principales tendances symboliques de votre mois.": "Questa lettura ti accompagna attraverso le principali tendenze simboliche del tuo mese.",
  "Chaque mois ouvre un nouveau cycle et révèle une direction différente.": "Ogni mese apre un nuovo ciclo e rivela una direzione diversa.",
  "Vue d’ensemble du mois": "Panoramica del mese",
  "Énergie du mois": "Energia del mese",
  "Discernement": "Discernimento",
  "Votre point de vigilance": "Il tuo punto di attenzione",
  "Développement": "Sviluppo",
  "Une direction à explorer": "Una direzione da esplorare",
  "Ces éléments symboliques peuvent accompagner votre mois.": "Questi elementi simbolici possono accompagnare il tuo mese.",
  "Les changements les plus importants commencent souvent par une décision discrète.": "I cambiamenti più importanti iniziano spesso con una decisione discreta.",
  "Votre message du mois": "Il tuo messaggio del mese",
  "Ce mois vous invite à progresser avec constance, à observer les changements au fil des semaines et à choisir vos actions avec discernement. Vous n’avez pas besoin de tout accomplir immédiatement. Une direction claire et des gestes réguliers peuvent produire une évolution durable.": "Questo mese invita a progredire con costanza, osservare i cambiamenti nel corso delle settimane e scegliere le azioni con discernimento. Non è necessario fare tutto subito. Una direzione chiara e gesti regolari possono produrre un’evoluzione duratura.",
  "Votre force réside ce mois-ci dans votre capacité à respecter votre rythme tout en restant fidèle à la direction que vous avez choisie.": "La tua forza questo mese risiede nella capacità di rispettare il tuo ritmo restando fedele alla direzione che hai scelto."
};

const PT: TranslationMap = {
  "Ce mois marque une période de progression intérieure et de clarification.": "Este mês marca um período de progresso interior e esclarecimento.",
  "Les événements évoluent graduellement et vous invitent à observer les changements avant de prendre des décisions définitives. Certaines réponses apparaîtront au fil des semaines plutôt qu’immédiatement.": "Os acontecimentos evoluem gradualmente e convidam você a observar as mudanças antes de tomar decisões definitivas. Algumas respostas surgirão ao longo das semanas, e não imediatamente.",
  "Avancez étape par étape et laissez les situations révéler leur véritable direction.": "Avance passo a passo e deixe as situações revelarem sua verdadeira direção.",
  "Évolution": "Evolução",
  "Clarté": "Clareza",
  "Progression": "Progresso",
  "Une énergie de renouvellement accompagne ce nouveau mois.": "Uma energia de renovação acompanha este novo mês.",
  "Vous pourriez ressentir le besoin de revoir certaines habitudes, priorités ou relations. Les changements les plus utiles seront ceux que vous pourrez maintenir dans le temps.": "Você pode sentir necessidade de rever alguns hábitos, prioridades ou relacionamentos. As mudanças mais úteis serão aquelas que você conseguir manter ao longo do tempo.",
  "Choisissez une transformation réaliste plutôt que plusieurs changements simultanés.": "Escolha uma transformação realista em vez de várias mudanças simultâneas.",
  "Renouveau": "Renovação",
  "Décision": "Decisão",
  "Transformation": "Transformação",
  "Ce mois favorise une meilleure compréhension de vos besoins personnels.": "Este mês favorece uma compreensão melhor das suas necessidades pessoais.",
  "Vous pourriez prendre conscience de ce qui vous motive réellement, mais aussi de ce qui vous demande trop d’énergie. Cette lucidité vous permettra de mieux organiser vos efforts.": "Você pode perceber o que realmente motiva você, mas também o que exige energia demais. Essa clareza permitirá organizar melhor seus esforços.",
  "Conservez ce qui vous nourrit et réduisez ce qui vous disperse.": "Mantenha o que nutre você e reduza o que dispersa sua energia.",
  "Compréhension": "Compreensão",
  "Priorités": "Prioridades",
  "Équilibre": "Equilíbrio",
  "Votre énergie évoluera progressivement au fil du mois.": "Sua energia evoluirá gradualmente ao longo do mês.",
  "Certaines semaines seront plus dynamiques, tandis que d’autres vous inviteront à ralentir. En respectant ces variations, vous conserverez une meilleure stabilité physique et mentale.": "Algumas semanas serão mais dinâmicas, enquanto outras convidarão você a desacelerar. Respeitando essas variações, você manterá melhor estabilidade física e mental.",
  "Adaptez votre rythme plutôt que de vous imposer la même intensité chaque jour.": "Adapte seu ritmo em vez de impor a mesma intensidade todos os dias.",
  "Rythme": "Ritmo",
  "Stabilité": "Estabilidade",
  "Adaptation": "Adaptação",
  "Ce mois vous apporte un regain de motivation.": "Este mês traz uma renovação da sua motivação.",
  "Vous disposez d’un bon élan pour relancer un projet ou reprendre une démarche laissée en attente. Une organisation claire vous aidera à transformer cette motivation en résultats durables.": "Você tem um bom impulso para retomar um projeto ou uma iniciativa que ficou em espera. Uma organização clara ajudará a transformar essa motivação em resultados duradouros.",
  "Fixez-vous des étapes précises et mesurables pour chaque semaine.": "Defina etapas precisas e mensuráveis para cada semana.",
  "Motivation": "Motivação",
  "Action": "Ação",
  "Résultats": "Resultados",
  "Votre sensibilité influence fortement votre niveau d’énergie ce mois-ci.": "Sua sensibilidade influencia bastante seu nível de energia neste mês.",
  "Les environnements agités pourraient vous fatiguer davantage, tandis que les moments de calme favoriseront votre concentration et votre créativité.": "Ambientes agitados podem cansar você mais, enquanto os momentos de calma favorecerão sua concentração e criatividade.",
  "Protégez régulièrement votre espace mental et votre temps de récupération.": "Proteja regularmente seu espaço mental e seu tempo de recuperação.",
  "Sensibilité": "Sensibilidade",
  "Protection": "Proteção",
  "Récupération": "Recuperação",
  "Poser des bases solides": "Estabelecer bases sólidas",
  "Cette première semaine vous invite à ralentir suffisamment pour définir une direction claire.": "Esta primeira semana convida você a desacelerar o suficiente para definir uma direção clara.",
  "Les premiers jours du mois sont favorables à l’observation, à l’organisation et aux décisions préparées avec soin. Vous gagnerez à déterminer ce qui mérite réellement votre énergie avant de multiplier les initiatives.": "Os primeiros dias do mês favorecem a observação, a organização e decisões preparadas com cuidado. Será útil determinar o que realmente merece sua energia antes de multiplicar iniciativas.",
  "Une idée encore imprécise peut devenir un projet concret si vous lui donnez une structure simple et réaliste.": "Uma ideia ainda imprecisa pode se tornar um projeto concreto se você der a ela uma estrutura simples e realista.",
  "Évitez de vouloir obtenir immédiatement toutes les réponses. Certaines informations apparaîtront progressivement.": "Evite querer obter todas as respostas imediatamente. Algumas informações aparecerão aos poucos.",
  "Commencez par une priorité essentielle. Une base stable vous permettra d’avancer plus rapidement durant les semaines suivantes.": "Comece por uma prioridade essencial. Uma base estável permitirá avançar mais rapidamente nas semanas seguintes.",
  "Clarifier vos priorités": "Esclarecer suas prioridades",
  "Le début du mois met en lumière ce qui doit être conservé, ajusté ou laissé derrière vous.": "O início do mês destaca o que deve ser mantido, ajustado ou deixado para trás.",
  "Votre lucidité augmente lorsque vous prenez le temps d’examiner vos besoins sans tenir compte des attentes extérieures. Une décision simple pourrait alléger considérablement la suite du mois.": "Sua clareza aumenta quando você reserva tempo para examinar suas necessidades sem se orientar pelas expectativas externas. Uma decisão simples pode aliviar bastante o restante do mês.",
  "Vous pouvez reprendre le contrôle d’une situation en définissant clairement vos limites et votre objectif principal.": "Você pode retomar o controle de uma situação definindo claramente seus limites e seu objetivo principal.",
  "La dispersion pourrait vous faire perdre du temps sur des détails qui ne changent pas réellement le résultat.": "A dispersão pode fazer você perder tempo com detalhes que não mudam realmente o resultado.",
  "Choisissez ce qui soutient votre équilibre à long terme plutôt que ce qui vous procure seulement un soulagement immédiat.": "Escolha o que sustenta seu equilíbrio a longo prazo em vez do que oferece apenas alívio imediato.",
  "Préparer un nouveau départ": "Preparar um novo começo",
  "Une énergie de renouvellement accompagne cette première étape du mois.": "Uma energia de renovação acompanha esta primeira etapa do mês.",
  "Vous pourriez ressentir le besoin de modifier une habitude, une méthode ou une manière de communiquer. Les changements les plus prometteurs seront ceux que vous pourrez intégrer progressivement.": "Você pode sentir necessidade de mudar um hábito, um método ou uma forma de se comunicar. As mudanças mais promissoras serão aquelas que você conseguir integrar gradualmente.",
  "Une nouvelle façon d’aborder un projet ou une relation peut ouvrir une possibilité que vous n’aviez pas encore envisagée.": "Uma nova forma de abordar um projeto ou relacionamento pode abrir uma possibilidade que você ainda não havia considerado.",
  "Ne confondez pas nouveauté et précipitation. Un changement durable demande un minimum de préparation.": "Não confunda novidade com pressa. Uma mudança duradoura exige um mínimo de preparação.",
  "Donnez une forme concrète à votre intention : une date, une première action et un résultat réaliste à atteindre.": "Dê uma forma concreta à sua intenção: uma data, uma primeira ação e um resultado realista a alcançar.",
  "Passer à l’action": "Partir para a ação",
  "Cette deuxième semaine favorise les initiatives, les échanges dynamiques et les décisions concrètes.": "Esta segunda semana favorece iniciativas, trocas dinâmicas e decisões concretas.",
  "Après avoir posé vos bases, vous disposez d’un meilleur élan pour faire progresser un projet ou régler une situation restée en attente. Votre efficacité augmentera si vous avancez selon un ordre clair.": "Depois de estabelecer suas bases, você terá mais impulso para fazer um projeto avançar ou resolver uma situação que ficou pendente. Sua eficácia aumentará se seguir uma ordem clara.",
  "Une occasion intéressante peut apparaître dans un domaine où vous hésitiez encore à agir.": "Uma oportunidade interessante pode surgir em uma área na qual você ainda hesitava em agir.",
  "L’enthousiasme pourrait vous pousser à accepter trop de responsabilités ou à commencer plusieurs choses simultanément.": "O entusiasmo pode levar você a aceitar responsabilidades demais ou começar várias coisas ao mesmo tempo.",
  "Agissez avec confiance, mais vérifiez que chaque décision contribue réellement à votre objectif du mois.": "Aja com confiança, mas verifique se cada decisão realmente contribui para seu objetivo do mês.",
  "Faire avancer vos projets": "Fazer seus projetos avançarem",
  "Le rythme s’accélère et vous encourage à transformer vos intentions en résultats visibles.": "O ritmo acelera e incentiva você a transformar suas intenções em resultados visíveis.",
  "Les démarches entreprises cette semaine peuvent produire une réponse plus rapide que prévu. Une conversation, une demande ou une proposition bien préparée favorisera votre progression.": "As iniciativas desta semana podem produzir uma resposta mais rápida do que o esperado. Uma conversa, solicitação ou proposta bem preparada favorecerá seu progresso.",
  "Votre capacité à expliquer clairement votre idée peut attirer un soutien, un conseil ou une collaboration utile.": "Sua capacidade de explicar sua ideia com clareza pode atrair apoio, conselho ou uma colaboração útil.",
  "Évitez d’interpréter un délai ou une hésitation comme un refus définitif.": "Evite interpretar um atraso ou hesitação como uma recusa definitiva.",
  "Concentrez votre énergie sur l’action qui peut créer le plus d’effet plutôt que sur la quantité de tâches accomplies.": "Concentre sua energia na ação que pode criar o maior efeito, e não na quantidade de tarefas concluídas.",
  "Affirmer votre direction": "Afirmar sua direção",
  "Cette semaine renforce votre volonté et votre capacité à prendre davantage de place.": "Esta semana fortalece sua vontade e sua capacidade de ocupar mais espaço.",
  "Vous pourriez être amenée à défendre une idée, exprimer un besoin ou prendre une décision que vous repoussiez. Une attitude calme et déterminée donnera plus de poids à votre message.": "Você pode precisar defender uma ideia, expressar uma necessidade ou tomar uma decisão que vinha adiando. Uma postura calma e determinada dará mais peso à sua mensagem.",
  "Une initiative personnelle peut vous permettre de reprendre l’avantage dans une situation devenue trop passive.": "Uma iniciativa pessoal pode permitir que você recupere a vantagem em uma situação que ficou passiva demais.",
  "La fermeté sera utile, mais une réaction trop rapide pourrait fermer une porte encore intéressante.": "A firmeza será útil, mas uma reação rápida demais pode fechar uma porta ainda interessante.",
  "Affirmez votre choix sans chercher à convaincre tout le monde. La cohérence de vos gestes parlera pour vous.": "Afirme sua escolha sem tentar convencer todo mundo. A coerência das suas ações falará por você.",
  "Ajuster votre trajectoire": "Ajustar sua trajetória",
  "La troisième semaine vous invite à observer les résultats obtenus et à corriger ce qui doit l’être.": "A terceira semana convida você a observar os resultados obtidos e corrigir o que for necessário.",
  "Vous disposez maintenant de suffisamment d’informations pour distinguer ce qui fonctionne de ce qui demande une autre approche. Un petit ajustement pourrait être plus efficace qu’un changement radical.": "Agora você tem informações suficientes para distinguir o que funciona do que exige outra abordagem. Um pequeno ajuste pode ser mais eficaz do que uma mudança radical.",
  "Une erreur, un retard ou une hésitation peut révéler une meilleure manière d’atteindre votre objectif.": "Um erro, atraso ou hesitação pode revelar uma forma melhor de alcançar seu objetivo.",
  "Évitez de poursuivre une stratégie uniquement parce que vous y avez déjà consacré du temps.": "Evite seguir uma estratégia apenas porque já investiu tempo nela.",
  "Restez fidèle à votre direction, mais acceptez de modifier le chemin utilisé pour l’atteindre.": "Mantenha-se fiel à sua direção, mas aceite modificar o caminho usado para alcançá-la.",
  "Retrouver votre équilibre": "Recuperar seu equilíbrio",
  "Cette période demande une meilleure répartition entre vos obligations, vos relations et votre récupération.": "Este período pede uma melhor distribuição entre suas obrigações, relacionamentos e recuperação.",
  "Vous pourriez constater qu’un domaine a occupé trop de place depuis le début du mois. En rééquilibrant votre horaire ou vos priorités, vous retrouverez davantage de disponibilité mentale.": "Você pode perceber que uma área ocupou espaço demais desde o início do mês. Ao reequilibrar sua agenda ou prioridades, recuperará maior disponibilidade mental.",
  "Une limite clairement posée peut améliorer une relation ou vous redonner du temps pour un projet important.": "Um limite claramente estabelecido pode melhorar um relacionamento ou devolver tempo para um projeto importante.",
  "La fatigue pourrait amplifier une contrariété ou vous faire douter inutilement de vos progrès.": "O cansaço pode ampliar uma frustração ou fazer você duvidar desnecessariamente do seu progresso.",
  "Avant de prendre une décision importante, assurez-vous de disposer du calme et de l’énergie nécessaires.": "Antes de tomar uma decisão importante, certifique-se de ter a calma e a energia necessárias.",
  "Écouter les signes utiles": "Ouvir os sinais úteis",
  "Votre intuition devient plus précise lorsque vous la confrontez aux faits et à votre expérience.": "Sua intuição se torna mais precisa quando você a confronta com os fatos e sua experiência.",
  "Une impression récurrente mérite votre attention, particulièrement si plusieurs événements semblent indiquer la même direction. Prenez toutefois le temps de vérifier ce que vous ressentez.": "Uma impressão recorrente merece sua atenção, especialmente se vários acontecimentos parecem apontar na mesma direção. Ainda assim, reserve tempo para verificar o que sente.",
  "Une prise de conscience peut vous aider à comprendre une relation ou une situation sous un angle entièrement différent.": "Uma tomada de consciência pode ajudar você a compreender um relacionamento ou situação por um ângulo totalmente diferente.",
  "Ne laissez pas une inquiétude momentanée devenir une certitude sans preuve suffisante.": "Não deixe uma preocupação momentânea se transformar em certeza sem evidências suficientes.",
  "Écoutez votre ressenti, puis appuyez votre décision sur des éléments concrets et observables.": "Ouça o que sente e depois baseie sua decisão em elementos concretos e observáveis.",
  "Consolider vos acquis": "Consolidar suas conquistas",
  "La dernière partie du mois vous invite à stabiliser ce que vous avez construit et à reconnaître votre progression.": "A última parte do mês convida você a estabilizar o que construiu e reconhecer seu progresso.",
  "Certaines démarches commencent à produire des effets plus visibles. Vous gagnerez à terminer ce qui est déjà bien engagé avant de vous tourner vers un nouvel objectif.": "Algumas iniciativas começam a produzir efeitos mais visíveis. Será útil concluir o que já está bem encaminhado antes de se voltar para um novo objetivo.",
  "Un résultat, une réponse ou une confirmation peut vous montrer que vos efforts réguliers n’ont pas été inutiles.": "Um resultado, resposta ou confirmação pode mostrar que seus esforços constantes não foram em vão.",
  "Évitez de minimiser vos avancées simplement parce que tout n’est pas encore parfaitement terminé.": "Evite minimizar seu progresso apenas porque ainda nem tudo está perfeitamente concluído.",
  "Prenez le temps de mesurer le chemin parcouru et choisissez consciemment ce que vous souhaitez poursuivre le mois prochain.": "Reserve tempo para avaliar o caminho percorrido e escolha conscientemente o que deseja continuar no próximo mês.",
  "Récolter les résultats": "Colher os resultados",
  "Cette quatrième semaine met en évidence les conséquences de vos choix et de vos efforts précédents.": "Esta quarta semana destaca as consequências das suas escolhas e esforços anteriores.",
  "Vous pourriez recevoir une réponse attendue, constater une amélioration ou comprendre enfin la portée d’une décision. Les résultats les plus utiles vous indiqueront aussi la prochaine étape.": "Você pode receber uma resposta esperada, perceber uma melhora ou finalmente compreender o alcance de uma decisão. Os resultados mais úteis também indicarão o próximo passo.",
  "Une réussite discrète peut devenir la base d’un développement plus important durant le prochain cycle.": "Um sucesso discreto pode se tornar a base de um desenvolvimento maior no próximo ciclo.",
  "Le désir de conclure rapidement pourrait vous faire négliger un dernier détail important.": "O desejo de concluir rapidamente pode fazer você negligenciar um último detalhe importante.",
  "Finalisez avec soin. Une conclusion bien préparée protège les progrès réalisés et facilite la suite.": "Finalize com cuidado. Uma conclusão bem preparada protege o progresso alcançado e facilita a continuação.",
  "Préparer le prochain cycle": "Preparar o próximo ciclo",
  "La fin du mois crée un espace favorable à la synthèse, au détachement et à la préparation.": "O fim do mês cria um espaço favorável para síntese, desapego e preparação.",
  "Vous comprenez mieux ce que cette période vous a appris sur vos besoins, vos limites et vos ambitions. Cette lucidité vous permettra d’aborder le mois suivant avec une direction plus précise.": "Você entende melhor o que este período ensinou sobre suas necessidades, limites e ambições. Essa clareza permitirá abordar o próximo mês com uma direção mais precisa.",
  "Une décision prise maintenant peut simplifier considérablement votre organisation ou votre état d’esprit pour la suite.": "Uma decisão tomada agora pode simplificar bastante sua organização ou seu estado de espírito para o que vem depois.",
  "Ne transportez pas automatiquement dans le prochain mois une obligation qui ne correspond plus à vos priorités.": "Não leve automaticamente para o próximo mês uma obrigação que já não corresponde às suas prioridades.",
  "Conservez les apprentissages utiles, terminez ce qui peut l’être et laissez de l’espace à une nouvelle étape.": "Mantenha os aprendizados úteis, conclua o que puder ser concluído e deixe espaço para uma nova etapa.",
  "Bordeaux": "Bordô",
  "Bleu nuit": "Azul-noturno",
  "Vert émeraude": "Verde-esmeralda",
  "Or": "Dourado",
  "Violet profond": "Violeta profundo",
  "Rose poudré": "Rosa-claro",
  "Obsidienne": "Obsidiana",
  "Améthyste": "Ametista",
  "Quartz rose": "Quartzo rosa",
  "Labradorite": "Labradorita",
  "Citrine": "Citrino",
  "Pierre de lune": "Pedra da lua",
  "Confiance": "Confiança",
  "Intuition": "Intuição",
  "Feu": "Fogo",
  "Terre": "Terra",
  "Air": "Ar",
  "Eau": "Água",
  "Mars": "Marte",
  "Vénus": "Vênus",
  "Mercure": "Mercúrio",
  "Lune": "Lua",
  "Soleil": "Sol",
  "Pluton": "Plutão",
  "Jupiter": "Júpiter",
  "Saturne": "Saturno",
  "Uranus": "Urano",
  "Neptune": "Netuno",
  "Horoscope du mois": "Horóscopo do mês",
  "Cette lecture vous accompagne à travers les principales tendances symboliques de votre mois.": "Esta leitura acompanha você pelas principais tendências simbólicas do seu mês.",
  "Chaque mois ouvre un nouveau cycle et révèle une direction différente.": "Cada mês abre um novo ciclo e revela uma direção diferente.",
  "Vue d’ensemble du mois": "Visão geral do mês",
  "Énergie du mois": "Energia do mês",
  "Discernement": "Discernimento",
  "Votre point de vigilance": "Seu ponto de atenção",
  "Développement": "Desenvolvimento",
  "Une direction à explorer": "Uma direção a explorar",
  "Ces éléments symboliques peuvent accompagner votre mois.": "Esses elementos simbólicos podem acompanhar seu mês.",
  "Les changements les plus importants commencent souvent par une décision discrète.": "As mudanças mais importantes costumam começar com uma decisão discreta.",
  "Votre message du mois": "Sua mensagem do mês",
  "Ce mois vous invite à progresser avec constance, à observer les changements au fil des semaines et à choisir vos actions avec discernement. Vous n’avez pas besoin de tout accomplir immédiatement. Une direction claire et des gestes réguliers peuvent produire une évolution durable.": "Este mês convida você a progredir com constância, observar as mudanças ao longo das semanas e escolher suas ações com discernimento. Você não precisa realizar tudo imediatamente. Uma direção clara e ações regulares podem produzir uma evolução duradoura.",
  "Votre force réside ce mois-ci dans votre capacité à respecter votre rythme tout en restant fidèle à la direction que vous avez choisie.": "Sua força neste mês está na capacidade de respeitar seu ritmo e, ao mesmo tempo, permanecer fiel à direção que escolheu."
};

const TRANSLATIONS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: EN,
  es: ES,
  de: DE,
  it: IT,
  pt: PT,
};

const ZODIAC_LABELS: Record<
  NonFrenchLocale,
  Record<string, string>
> = {
  "en": {
    "belier": "Aries",
    "taureau": "Taurus",
    "gemeaux": "Gemini",
    "cancer": "Cancer",
    "lion": "Leo",
    "vierge": "Virgo",
    "balance": "Libra",
    "scorpion": "Scorpio",
    "sagittaire": "Sagittarius",
    "capricorne": "Capricorn",
    "verseau": "Aquarius",
    "poissons": "Pisces"
  },
  "es": {
    "belier": "Aries",
    "taureau": "Tauro",
    "gemeaux": "Géminis",
    "cancer": "Cáncer",
    "lion": "Leo",
    "vierge": "Virgo",
    "balance": "Libra",
    "scorpion": "Escorpio",
    "sagittaire": "Sagitario",
    "capricorne": "Capricornio",
    "verseau": "Acuario",
    "poissons": "Piscis"
  },
  "de": {
    "belier": "Widder",
    "taureau": "Stier",
    "gemeaux": "Zwillinge",
    "cancer": "Krebs",
    "lion": "Löwe",
    "vierge": "Jungfrau",
    "balance": "Waage",
    "scorpion": "Skorpion",
    "sagittaire": "Schütze",
    "capricorne": "Steinbock",
    "verseau": "Wassermann",
    "poissons": "Fische"
  },
  "it": {
    "belier": "Ariete",
    "taureau": "Toro",
    "gemeaux": "Gemelli",
    "cancer": "Cancro",
    "lion": "Leone",
    "vierge": "Vergine",
    "balance": "Bilancia",
    "scorpion": "Scorpione",
    "sagittaire": "Sagittario",
    "capricorne": "Capricorno",
    "verseau": "Acquario",
    "poissons": "Pesci"
  },
  "pt": {
    "belier": "Áries",
    "taureau": "Touro",
    "gemeaux": "Gêmeos",
    "cancer": "Câncer",
    "lion": "Leão",
    "vierge": "Virgem",
    "balance": "Libra",
    "scorpion": "Escorpião",
    "sagittaire": "Sagitário",
    "capricorne": "Capricórnio",
    "verseau": "Aquário",
    "poissons": "Peixes"
  }
};

const MONTHS: Record<
  NonFrenchLocale,
  readonly string[]
> = {
  "en": [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  "es": [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ],
  "de": [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ],
  "it": [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre"
  ],
  "pt": [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
  ]
};

function localizeSafeLiterals(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "buildMonthlyHoroscope.ts",
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
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    ) {
      const translated =
        translations[node.text];

      if (
        typeof translated === "string" &&
        translated !== node.text
      ) {
        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),
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

function replaceDynamicValues(
  source: string,
  locale: NonFrenchLocale,
): string {
  let output = source;

  output = output.replace(
    /getHoroscopeZodiacLabel\(\s*normalizedSign\s*,?\s*\)/g,
    "__monthlyLocalizedZodiacLabel(normalizedSign)",
  );

  output = output.replace(
    /formatHoroscopeMonth\(\s*isoMonth\s*\)/g,
    "__monthlyFormatMonth(isoMonth)",
  );

  output = output.replace(
    /getMonthlyWeekLabels\(\s*isoMonth\s*\)/g,
    "__monthlyGetWeekLabels(isoMonth)",
  );

  const personalized: Record<
    NonFrenchLocale,
    string
  > = {
    en: "this reading guides you through the main symbolic trends of your month.",
    es: "esta lectura le acompaña a través de las principales tendencias simbólicas de su mes.",
    de: "diese Deutung begleitet Sie durch die wichtigsten symbolischen Tendenzen Ihres Monats.",
    it: "questa lettura ti accompagna attraverso le principali tendenze simboliche del tuo mese.",
    pt: "esta leitura acompanha você pelas principais tendências simbólicas do seu mês.",
  };

  output = output.replace(
    /`\$\{firstName\}, cette lecture vous accompagne à travers les principales tendances symboliques de votre mois\.`/g,
    `\`\${firstName}, ${personalized[locale]}\``,
  );

  output = output.replace(
    /time:\s*`Semaine \$\{\s*1 \+ \(seed % 4\)\s*\}`/g,
    "time: __monthlyWeekName(1 + (seed % 4))",
  );

  return output;
}

function injectHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __monthlyLocalizedZodiacLabel",
    )
  ) {
    return source;
  }

  const labels =
    ZODIAC_LABELS[locale];

  const monthNames =
    MONTHS[locale];

  const formatMonthBody = (() => {
    switch (locale) {
      case "en":
        return "return `${__MONTHLY_MONTHS[monthIndex]} ${yearValue}`;";
      case "de":
        return "return `${__MONTHLY_MONTHS[monthIndex]} ${yearValue}`;";
      case "es":
        return "return `${__MONTHLY_MONTHS[monthIndex]} de ${yearValue}`;";
      case "it":
        return "return `${__MONTHLY_MONTHS[monthIndex]} ${yearValue}`;";
      case "pt":
        return "return `${__MONTHLY_MONTHS[monthIndex]} de ${yearValue}`;";
    }
  })();

  const shortDateBody = (() => {
    switch (locale) {
      case "en":
        return "return `${__MONTHLY_MONTHS[monthIndex]} ${day}`;";
      case "de":
        return "return `${day}. ${__MONTHLY_MONTHS[monthIndex]}`;";
      case "es":
        return "return `${day} de ${__MONTHLY_MONTHS[monthIndex]}`;";
      case "it":
        return "return `${day} ${__MONTHLY_MONTHS[monthIndex]}`;";
      case "pt":
        return "return `${day} de ${__MONTHLY_MONTHS[monthIndex]}`;";
    }
  })();

  const rangeWord: Record<
    NonFrenchLocale,
    string
  > = {
    en: "to",
    es: "al",
    de: "bis",
    it: "al",
    pt: "a",
  };

  const weekPrefix: Record<
    NonFrenchLocale,
    string
  > = {
    en: "Week",
    es: "Semana",
    de: "Woche",
    it: "Settimana",
    pt: "Semana",
  };

  const helper = `
/* =========================================================
   MONTHLY HOROSCOPE — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __MONTHLY_ZODIAC_LABELS:
  Record<HoroscopeZodiacSign, string> =
  ${JSON.stringify(labels, null, 2)};

const __MONTHLY_MONTHS =
  ${JSON.stringify(monthNames, null, 2)} as const;

function __monthlyLocalizedZodiacLabel(
  sign: HoroscopeZodiacSign,
): string {
  return (
    __MONTHLY_ZODIAC_LABELS[sign] ??
    sign
  );
}

function __monthlyFormatMonth(
  isoMonth: string,
): string {
  const [
    yearValue,
    monthValue,
  ] = isoMonth.split("-");

  const monthIndex =
    Number(monthValue) - 1;

  ${formatMonthBody}
}

function __monthlyFormatShortDate(
  year: number,
  monthIndex: number,
  day: number,
): string {
  void year;
  ${shortDateBody}
}

function __monthlyGetWeekLabels(
  isoMonth: string,
): [
  string,
  string,
  string,
  string,
] {
  const [
    yearValue,
    monthValue,
  ] = isoMonth.split("-");

  const year =
    Number(yearValue);

  const monthIndex =
    Number(monthValue) - 1;

  const lastDay =
    new Date(
      year,
      monthIndex + 1,
      0,
    ).getDate();

  const joinRange = (
    fromDay: number,
    toDay: number,
  ): string =>
    \`\${__monthlyFormatShortDate(
      year,
      monthIndex,
      fromDay,
    )} ${rangeWord[locale]} \${__monthlyFormatShortDate(
      year,
      monthIndex,
      toDay,
    )}\`;

  return [
    joinRange(1, 7),
    joinRange(8, 14),
    joinRange(15, 21),
    joinRange(22, lastDay),
  ];
}

function __monthlyWeekName(
  week: number,
): string {
  return \`${weekPrefix[locale]} \${week}\`;
}

/* =========================================================
   END MONTHLY HOROSCOPE — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export function buildMonthlyHoroscope";

  const index =
    source.indexOf(marker);

  if (index < 0) {
    return source;
  }

  return (
    source.slice(0, index) +
    helper +
    source.slice(index)
  );
}

export function localizeMonthlyHoroscopeBuilder(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    TRANSLATIONS[
      normalizedLocale
    ];

  if (!translations) {
    return source;
  }

  let localized =
    replaceDynamicValues(
      source,
      normalizedLocale,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
type LocalizeMonthHoroscopeFileOptions = {
  source: string;
  locale: PaidPdfLocale;
  filePath: string;
  fileName: string;
};

export function localizeMonthHoroscopeFile({
  source,
  locale,
  filePath,
  fileName,
}: LocalizeMonthHoroscopeFileOptions): string {
  const normalizedPath =
    filePath.replace(/\\/g, "/");

  const isMonthlyHoroscope =
    normalizedPath.includes(
      "/HoroscopePdf/month/",
    ) ||
    fileName === "buildMonthlyHoroscope.ts";

  if (!isMonthlyHoroscope) {
    return source;
  }

  if (locale === "fr") {
    return source;
  }

  if (
    fileName === "buildMonthlyHoroscope.ts"
  ) {
    return localizeMonthlyHoroscopeBuilder(
      source,
      locale,
    );
  }

  return source;
}
