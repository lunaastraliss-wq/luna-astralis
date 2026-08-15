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
  "Cette journée vous invite à avancer avec davantage de discernement.": "This day invites you to move forward with greater discernment.",
  "Certaines situations deviennent plus claires lorsque vous prenez le temps d’observer avant d’agir. Votre perception est fine aujourd’hui, mais vous gagnerez à distinguer votre intuition d’une inquiétude passagère.": "Some situations become clearer when you take time to observe before acting. Your perception is sharp today, but you will benefit from distinguishing intuition from a passing concern.",
  "Accordez-vous quelques instants de recul avant une décision importante.": "Give yourself a few moments of perspective before making an important decision.",
  "Clarté intérieure": "Inner clarity",
  "Observation": "Observation",
  "Décision réfléchie": "Thoughtful decision",
  "Une énergie de renouvellement accompagne votre journée.": "An energy of renewal accompanies your day.",
  "Vous pourriez ressentir le besoin de modifier une habitude, une priorité ou votre manière d’aborder une situation. Un changement discret peut produire un résultat plus important que prévu.": "You may feel the need to change a habit, a priority, or the way you approach a situation. A subtle change can produce a greater result than expected.",
  "Commencez par une action simple, concrète et réaliste.": "Start with a simple, concrete, and realistic action.",
  "Renouveau": "Renewal",
  "Initiative": "Initiative",
  "Progression": "Progress",
  "Les échanges occupent une place importante aujourd’hui.": "Communication plays an important role today.",
  "Une conversation peut vous aider à comprendre un détail qui vous échappait. Restez attentive aux mots employés, mais aussi à ce qui n’est pas exprimé directement.": "A conversation may help you understand a detail you had missed. Pay attention to the words being used, but also to what is not expressed directly.",
  "Posez des questions claires plutôt que de tirer des conclusions rapides.": "Ask clear questions rather than jumping to conclusions.",
  "Communication": "Communication",
  "Compréhension": "Understanding",
  "Écoute": "Listening",

  "Votre énergie s’installe progressivement au fil de la journée.": "Your energy gradually settles in throughout the day.",
  "Le démarrage peut être plus lent, mais votre concentration devient ensuite plus stable. Évitez de disperser vos efforts entre trop de tâches simultanées.": "The start may be slower, but your concentration becomes steadier afterward. Avoid spreading your efforts across too many tasks at once.",
  "Choisissez une priorité et terminez-la avant de passer à la suivante.": "Choose one priority and finish it before moving on to the next.",
  "Concentration": "Concentration",
  "Stabilité": "Stability",
  "Votre rythme est dynamique, mais il doit rester maîtrisé.": "Your pace is dynamic, but it needs to remain controlled.",
  "Vous disposez d’un bon élan pour accomplir ce qui demande de l’initiative. Une tendance à vouloir aller trop vite pourrait toutefois créer une fatigue inutile.": "You have good momentum for tasks that require initiative. However, a tendency to move too quickly could create unnecessary fatigue.",
  "Alternez les périodes d’action et les courtes pauses.": "Alternate periods of action with short breaks.",
  "Dynamisme": "Dynamism",
  "Motivation": "Motivation",
  "Maîtrise": "Control",
  "Votre sensibilité influence directement votre niveau d’énergie.": "Your sensitivity directly influences your energy level.",
  "Une ambiance calme vous aide à rester productive, tandis que les tensions extérieures peuvent vous fatiguer davantage. Protégez votre concentration lorsque cela est possible.": "A calm atmosphere helps you remain productive, while outside tension may tire you more easily. Protect your concentration whenever possible.",
  "Éloignez-vous temporairement des distractions qui vous épuisent.": "Step away temporarily from distractions that drain you.",
  "Sensibilité": "Sensitivity",
  "Calme": "Calm",
  "Protection": "Protection",

  "Les sentiments demandent aujourd’hui davantage de franchise.": "Feelings call for greater honesty today.",
  "En couple, une discussion sincère peut dissiper une incompréhension. Célibataire, une rencontre ou un échange pourrait éveiller votre curiosité sans révéler immédiatement toutes ses intentions.": "In a relationship, an honest discussion can clear up a misunderstanding. If you are single, an encounter or conversation may spark your curiosity without immediately revealing every intention.",
  "Exprimez vos besoins sans tester inutilement les réactions de l’autre.": "Express your needs without unnecessarily testing the other person’s reactions.",
  "Sincérité": "Sincerity",
  "Rapprochement": "Closeness",
  "Émotions": "Emotions",
  "Une énergie plus douce favorise les rapprochements.": "A gentler energy encourages closeness.",
  "Les petites attentions auront plus d’impact que les grandes déclarations. Une présence calme et authentique peut renforcer un lien qui compte pour vous.": "Small gestures will have more impact than grand declarations. A calm and authentic presence can strengthen a bond that matters to you.",
  "Montrez votre affection d’une manière simple et naturelle.": "Show your affection in a simple and natural way.",
  "Douceur": "Gentleness",
  "Présence": "Presence",
  "Complicité": "Connection",
  "Votre besoin de liberté et votre besoin de proximité cherchent un équilibre.": "Your need for freedom and your need for closeness are seeking balance.",
  "Vous pourriez vouloir préserver votre espace tout en souhaitant être rassurée. Une communication directe évitera que l’autre interprète mal votre attitude.": "You may want to protect your personal space while also seeking reassurance. Direct communication will help prevent the other person from misreading your attitude.",
  "Expliquez clairement ce dont vous avez besoin aujourd’hui.": "Clearly explain what you need today.",
  "Équilibre": "Balance",
  "Liberté": "Freedom",
  "Clarté": "Clarity",

  "Votre capacité d’analyse constitue votre meilleur avantage.": "Your analytical ability is your greatest advantage.",
  "Une situation professionnelle mérite d’être examinée avant toute intervention. Vous pourriez remarquer un détail important que les autres n’ont pas encore considéré.": "A professional situation deserves to be examined before you intervene. You may notice an important detail that others have not yet considered.",
  "Préparez vos arguments et appuyez-vous sur des faits précis.": "Prepare your arguments and rely on specific facts.",
  "Analyse": "Analysis",
  "Stratégie": "Strategy",
  "Préparation": "Preparation",
  "Une occasion de démontrer votre efficacité peut se présenter.": "An opportunity to demonstrate your effectiveness may arise.",
  "Votre sens de l’organisation vous permet de régler un problème plus rapidement que prévu. Ne sous-estimez pas la valeur d’une méthode simple et bien structurée.": "Your organizational skills may help you solve a problem faster than expected. Do not underestimate the value of a simple, well-structured method.",
  "Commencez par la tâche qui aura le plus grand effet concret.": "Start with the task that will have the greatest concrete impact.",
  "Organisation": "Organization",
  "Efficacité": "Efficiency",
  "Résultat": "Result",
  "La collaboration peut accélérer votre progression.": "Collaboration can accelerate your progress.",
  "Même si vous préférez parfois travailler seule, une idée extérieure pourrait améliorer votre approche. Écoutez les suggestions sans abandonner votre propre jugement.": "Even if you sometimes prefer to work independently, an outside idea could improve your approach. Listen to suggestions without giving up your own judgment.",
  "Demandez un avis précis à une personne compétente.": "Ask a knowledgeable person for a specific opinion.",
  "Collaboration": "Collaboration",
  "Ouverture": "Openness",

  "La prudence financière reste votre meilleure alliée.": "Financial caution remains your best ally.",
  "Une dépense peut sembler urgente sans l’être réellement. Prenez le temps de vérifier les détails, de comparer les options et de mesurer les conséquences à plus long terme.": "An expense may seem urgent without truly being so. Take time to check the details, compare options, and consider the longer-term consequences.",
  "Évitez les décisions impulsives et conservez une marge de sécurité.": "Avoid impulsive decisions and keep a safety margin.",
  "Prudence": "Caution",
  "Vérification": "Verification",
  "Sécurité": "Security",
  "Une meilleure organisation peut alléger une préoccupation financière.": "Better organization can ease a financial concern.",
  "Le simple fait de revoir vos priorités ou vos échéances peut vous redonner une impression de contrôle. Une petite correction aujourd’hui peut prévenir une difficulté future.": "Simply reviewing your priorities or deadlines can restore a sense of control. A small adjustment today can prevent a future difficulty.",
  "Examinez un poste de dépense que vous pouvez ajuster facilement.": "Review an expense category that you can adjust easily.",
  "Prévision": "Planning",
  "Contrôle": "Control",
  "Une occasion intéressante mérite d’être évaluée sans précipitation.": "An interesting opportunity deserves to be evaluated without rushing.",
  "Une proposition ou une idée pourrait présenter un potentiel réel, mais toutes les informations ne sont peut-être pas encore disponibles.": "A proposal or idea may have real potential, but all the information may not yet be available.",
  "Vérifiez les conditions complètes avant de vous engager.": "Check all the terms before committing.",
  "Occasion": "Opportunity",
  "Patience": "Patience",

  "Votre corps pourrait réclamer davantage de récupération.": "Your body may need more recovery.",
  "Une fatigue accumulée peut réduire votre concentration ou votre patience. Le mouvement demeure bénéfique, mais votre rythme doit respecter votre niveau d’énergie réel.": "Accumulated fatigue can reduce your concentration or patience. Movement remains beneficial, but your pace should respect your actual energy level.",
  "Alternez activité douce, hydratation et repos.": "Alternate gentle activity, hydration, and rest.",
  "Repos": "Rest",
  "Hydratation": "Hydration",
  "Votre bien-être dépend aujourd’hui de la régularité.": "Your well-being depends on consistency today.",
  "Des habitudes simples auront davantage d’effet qu’un effort intense et difficile à maintenir. Votre corps appréciera un rythme stable.": "Simple habits will have more effect than an intense effort that is difficult to maintain. Your body will appreciate a steady rhythm.",
  "Privilégiez une routine réaliste que vous pourrez répéter.": "Choose a realistic routine that you can repeat.",
  "Régularité": "Consistency",
  "Routine": "Routine",
  "Le calme mental influence positivement votre énergie physique.": "Mental calm positively influences your physical energy.",
  "Une surcharge de pensées peut vous fatiguer davantage qu’une activité concrète. Une courte période sans écran ni sollicitations pourrait vous faire du bien.": "Mental overload may tire you more than a concrete activity. A short period without screens or demands could do you good.",
  "Réservez quelques minutes à une activité véritablement apaisante.": "Set aside a few minutes for a genuinely calming activity.",
  "Détente": "Relaxation",
  "Récupération": "Recovery",

  "Vous recherchez des échanges authentiques plutôt que nombreux.": "You are looking for authentic exchanges rather than numerous ones.",
  "Une conversation profonde vous apportera davantage qu’une succession d’interactions superficielles. Vous pourriez être plus sélective dans votre entourage.": "A meaningful conversation will bring you more than a series of superficial interactions. You may be more selective about the people around you.",
  "Accordez votre temps aux personnes avec lesquelles vous pouvez rester vous-même.": "Give your time to people with whom you can be yourself.",
  "Authenticité": "Authenticity",
  "Profondeur": "Depth",
  "Sélection": "Selectivity",
  "Votre présence attire plus facilement l’attention.": "Your presence attracts attention more easily.",
  "Vous pourriez être sollicitée ou invitée à prendre davantage de place dans un groupe. Votre manière naturelle de vous exprimer fera une impression positive.": "You may be approached or invited to take a more prominent role in a group. Your natural way of expressing yourself will make a positive impression.",
  "Partagez vos idées sans chercher à convaincre tout le monde.": "Share your ideas without trying to convince everyone.",
  "Expression": "Expression",
  "Confiance": "Confidence",
  "Une mise au point peut améliorer une relation.": "Clarifying a situation can improve a relationship.",
  "Un malentendu léger pourrait être résolu rapidement si chacun s’exprime clairement. Évitez de laisser une irritation mineure s’installer.": "A minor misunderstanding could be resolved quickly if everyone communicates clearly. Avoid letting a small irritation settle in.",
  "Abordez le sujet calmement et restez centrée sur les faits.": "Address the subject calmly and stay focused on the facts.",
  "Dialogue": "Dialogue",
  "Apaisement": "Calm",

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
  "Transformation": "Transformation",
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

  "Cette lecture vous accompagne à travers les principales tendances symboliques de votre journée.": "This reading guides you through the main symbolic trends of your day.",
  "Chaque journée révèle une direction lorsque vous prenez le temps de l’observer.": "Each day reveals a direction when you take the time to observe it.",
  "Vue d’ensemble": "Overview",
  "Énergie générale": "General energy",
  "Cette section présentera les influences planétaires calculées pour la date sélectionnée.": "This section presents the planetary influences calculated for the selected date.",
  "Amour": "Love",
  "Travail et carrière": "Work and career",
  "Finances": "Finances",
  "Bien-être": "Well-being",
  "Vie sociale": "Social life",
  "Les défis de la journée vous invitent à ralentir avant de réagir.": "The challenges of the day invite you to slow down before reacting.",
  "Éviter les conclusions rapides": "Avoid hasty conclusions",
  "Discernement": "Discernment",
  "Une situation pourrait sembler plus claire qu’elle ne l’est réellement.": "A situation may seem clearer than it actually is.",
  "Vérifiez les faits avant de prendre une décision définitive.": "Check the facts before making a final decision.",
  "Respecter votre rythme": "Respect your pace",
  "Vouloir tout accomplir immédiatement pourrait diminuer votre efficacité.": "Trying to accomplish everything immediately could reduce your effectiveness.",
  "Concentrez-vous sur ce qui est réellement prioritaire.": "Focus on what is truly a priority.",
  "Certaines possibilités deviennent visibles lorsque vous restez attentive aux détails.": "Some possibilities become visible when you pay close attention to details.",
  "Clarifier une situation": "Clarify a situation",
  "Décision": "Decision",
  "Une information ou une conversation peut modifier votre compréhension d’un problème.": "A piece of information or a conversation can change your understanding of a problem.",
  "Notez les faits importants avant de choisir votre prochaine action.": "Write down the important facts before choosing your next action.",
  "Faire progresser un projet": "Move a project forward",
  "Une petite étape concrète pourrait relancer une idée laissée en attente.": "A small concrete step could revive an idea that has been put on hold.",
  "Consacrez un moment précis à la prochaine étape réalisable.": "Set aside a specific time for the next achievable step.",
  "Matin": "Morning",
  "Commencez par organiser vos priorités sans céder aux urgences extérieures.": "Start by organizing your priorities without giving in to outside urgencies.",
  "Après-midi": "Afternoon",
  "Votre concentration devient plus stable et favorise les décisions concrètes.": "Your concentration becomes steadier and supports concrete decisions.",
  "Soirée": "Evening",
  "Un rythme plus calme favorise les échanges sincères et la récupération.": "A calmer pace encourages sincere exchanges and recovery.",
  "Ces éléments symboliques peuvent accompagner votre journée.": "These symbolic elements can accompany your day.",
  "Ce que vous comprenez aujourd’hui peut transformer votre manière d’avancer demain.": "What you understand today can transform the way you move forward tomorrow.",
  "Votre message du jour": "Your message for the day",
  "Cette journée vous invite à avancer avec calme, discernement et constance. Vous n’avez pas besoin de tout régler immédiatement. Une action juste et bien choisie peut suffire à créer un mouvement positif.": "This day invites you to move forward with calm, discernment, and consistency. You do not need to resolve everything immediately. One well-chosen action can be enough to create positive momentum.",
  "Votre force réside aujourd’hui dans votre capacité à observer clairement et à agir au moment opportun.": "Your strength today lies in your ability to observe clearly and act at the right moment."
};

const ES: TranslationMap = {
  "Cette journée vous invite à avancer avec davantage de discernement.": "Este día le invita a avanzar con mayor discernimiento.",
  "Certaines situations deviennent plus claires lorsque vous prenez le temps d’observer avant d’agir. Votre perception est fine aujourd’hui, mais vous gagnerez à distinguer votre intuition d’une inquiétude passagère.": "Algunas situaciones se vuelven más claras cuando se toma el tiempo de observar antes de actuar. Hoy su percepción es aguda, pero le conviene distinguir la intuición de una preocupación pasajera.",
  "Accordez-vous quelques instants de recul avant une décision importante.": "Tómese unos instantes de perspectiva antes de tomar una decisión importante.",
  "Clarté intérieure": "Claridad interior",
  "Observation": "Observación",
  "Décision réfléchie": "Decisión reflexiva",
  "Une énergie de renouvellement accompagne votre journée.": "Una energía de renovación acompaña su día.",
  "Vous pourriez ressentir le besoin de modifier une habitude, une priorité ou votre manière d’aborder une situation. Un changement discret peut produire un résultat plus important que prévu.": "Podría sentir la necesidad de cambiar un hábito, una prioridad o su manera de abordar una situación. Un cambio discreto puede producir un resultado mayor de lo esperado.",
  "Commencez par une action simple, concrète et réaliste.": "Empiece con una acción sencilla, concreta y realista.",
  "Renouveau": "Renovación",
  "Initiative": "Iniciativa",
  "Progression": "Progreso",
  "Les échanges occupent une place importante aujourd’hui.": "La comunicación ocupa un lugar importante hoy.",
  "Une conversation peut vous aider à comprendre un détail qui vous échappait. Restez attentive aux mots employés, mais aussi à ce qui n’est pas exprimé directement.": "Una conversación puede ayudarle a comprender un detalle que se le había escapado. Preste atención a las palabras utilizadas, pero también a lo que no se expresa directamente.",
  "Posez des questions claires plutôt que de tirer des conclusions rapides.": "Haga preguntas claras en lugar de sacar conclusiones precipitadas.",
  "Communication": "Comunicación",
  "Compréhension": "Comprensión",
  "Écoute": "Escucha",

  "Votre énergie s’installe progressivement au fil de la journée.": "Su energía se estabiliza gradualmente a lo largo del día.",
  "Le démarrage peut être plus lent, mais votre concentration devient ensuite plus stable. Évitez de disperser vos efforts entre trop de tâches simultanées.": "El comienzo puede ser más lento, pero después su concentración se vuelve más estable. Evite dispersar sus esfuerzos entre demasiadas tareas a la vez.",
  "Choisissez une priorité et terminez-la avant de passer à la suivante.": "Elija una prioridad y termínela antes de pasar a la siguiente.",
  "Concentration": "Concentración",
  "Stabilité": "Estabilidad",
  "Votre rythme est dynamique, mais il doit rester maîtrisé.": "Su ritmo es dinámico, pero debe mantenerse bajo control.",
  "Vous disposez d’un bon élan pour accomplir ce qui demande de l’initiative. Une tendance à vouloir aller trop vite pourrait toutefois créer une fatigue inutile.": "Dispone de un buen impulso para realizar lo que requiere iniciativa. Sin embargo, la tendencia a ir demasiado deprisa podría generar un cansancio innecesario.",
  "Alternez les périodes d’action et les courtes pauses.": "Alterne períodos de acción con pausas breves.",
  "Dynamisme": "Dinamismo",
  "Motivation": "Motivación",
  "Maîtrise": "Control",
  "Votre sensibilité influence directement votre niveau d’énergie.": "Su sensibilidad influye directamente en su nivel de energía.",
  "Une ambiance calme vous aide à rester productive, tandis que les tensions extérieures peuvent vous fatiguer davantage. Protégez votre concentration lorsque cela est possible.": "Un ambiente tranquilo le ayuda a mantener la productividad, mientras que las tensiones externas pueden cansarle más. Proteja su concentración siempre que sea posible.",
  "Éloignez-vous temporairement des distractions qui vous épuisent.": "Aléjese temporalmente de las distracciones que le agotan.",
  "Sensibilité": "Sensibilidad",
  "Calme": "Calma",
  "Protection": "Protección",

  "Les sentiments demandent aujourd’hui davantage de franchise.": "Los sentimientos requieren hoy una mayor sinceridad.",
  "En couple, une discussion sincère peut dissiper une incompréhension. Célibataire, une rencontre ou un échange pourrait éveiller votre curiosité sans révéler immédiatement toutes ses intentions.": "En pareja, una conversación sincera puede aclarar un malentendido. Si está soltero o soltera, un encuentro o intercambio podría despertar su curiosidad sin revelar de inmediato todas sus intenciones.",
  "Exprimez vos besoins sans tester inutilement les réactions de l’autre.": "Exprese sus necesidades sin poner a prueba innecesariamente las reacciones de la otra persona.",
  "Sincérité": "Sinceridad",
  "Rapprochement": "Acercamiento",
  "Émotions": "Emociones",
  "Une énergie plus douce favorise les rapprochements.": "Una energía más suave favorece el acercamiento.",
  "Les petites attentions auront plus d’impact que les grandes déclarations. Une présence calme et authentique peut renforcer un lien qui compte pour vous.": "Los pequeños gestos tendrán más impacto que las grandes declaraciones. Una presencia tranquila y auténtica puede fortalecer un vínculo importante para usted.",
  "Montrez votre affection d’une manière simple et naturelle.": "Muestre su afecto de una manera sencilla y natural.",
  "Douceur": "Dulzura",
  "Présence": "Presencia",
  "Complicité": "Complicidad",
  "Votre besoin de liberté et votre besoin de proximité cherchent un équilibre.": "Su necesidad de libertad y su necesidad de cercanía buscan un equilibrio.",
  "Vous pourriez vouloir préserver votre espace tout en souhaitant être rassurée. Une communication directe évitera que l’autre interprète mal votre attitude.": "Podría querer preservar su espacio y, al mismo tiempo, buscar tranquilidad. Una comunicación directa evitará que la otra persona interprete mal su actitud.",
  "Expliquez clairement ce dont vous avez besoin aujourd’hui.": "Explique claramente lo que necesita hoy.",
  "Équilibre": "Equilibrio",
  "Liberté": "Libertad",
  "Clarté": "Claridad",

  "Votre capacité d’analyse constitue votre meilleur avantage.": "Su capacidad de análisis es su mejor ventaja.",
  "Une situation professionnelle mérite d’être examinée avant toute intervention. Vous pourriez remarquer un détail important que les autres n’ont pas encore considéré.": "Una situación profesional merece ser examinada antes de intervenir. Podría notar un detalle importante que los demás aún no han considerado.",
  "Préparez vos arguments et appuyez-vous sur des faits précis.": "Prepare sus argumentos y apóyese en hechos concretos.",
  "Analyse": "Análisis",
  "Stratégie": "Estrategia",
  "Préparation": "Preparación",
  "Une occasion de démontrer votre efficacité peut se présenter.": "Puede surgir una oportunidad para demostrar su eficacia.",
  "Votre sens de l’organisation vous permet de régler un problème plus rapidement que prévu. Ne sous-estimez pas la valeur d’une méthode simple et bien structurée.": "Su sentido de la organización puede permitirle resolver un problema más rápido de lo previsto. No subestime el valor de un método sencillo y bien estructurado.",
  "Commencez par la tâche qui aura le plus grand effet concret.": "Empiece por la tarea que tendrá el mayor efecto concreto.",
  "Organisation": "Organización",
  "Efficacité": "Eficacia",
  "Résultat": "Resultado",
  "La collaboration peut accélérer votre progression.": "La colaboración puede acelerar su progreso.",
  "Même si vous préférez parfois travailler seule, une idée extérieure pourrait améliorer votre approche. Écoutez les suggestions sans abandonner votre propre jugement.": "Aunque a veces prefiera trabajar de manera independiente, una idea externa podría mejorar su enfoque. Escuche las sugerencias sin abandonar su propio criterio.",
  "Demandez un avis précis à une personne compétente.": "Pida una opinión concreta a una persona competente.",
  "Collaboration": "Colaboración",
  "Ouverture": "Apertura",

  "La prudence financière reste votre meilleure alliée.": "La prudencia financiera sigue siendo su mejor aliada.",
  "Une dépense peut sembler urgente sans l’être réellement. Prenez le temps de vérifier les détails, de comparer les options et de mesurer les conséquences à plus long terme.": "Un gasto puede parecer urgente sin serlo realmente. Tómese el tiempo de comprobar los detalles, comparar las opciones y valorar las consecuencias a más largo plazo.",
  "Évitez les décisions impulsives et conservez une marge de sécurité.": "Evite las decisiones impulsivas y conserve un margen de seguridad.",
  "Prudence": "Prudencia",
  "Vérification": "Verificación",
  "Sécurité": "Seguridad",
  "Une meilleure organisation peut alléger une préoccupation financière.": "Una mejor organización puede aliviar una preocupación financiera.",
  "Le simple fait de revoir vos priorités ou vos échéances peut vous redonner une impression de contrôle. Une petite correction aujourd’hui peut prévenir une difficulté future.": "Revisar sus prioridades o plazos puede devolverle una sensación de control. Un pequeño ajuste hoy puede prevenir una dificultad futura.",
  "Examinez un poste de dépense que vous pouvez ajuster facilement.": "Revise una partida de gastos que pueda ajustar fácilmente.",
  "Prévision": "Previsión",
  "Contrôle": "Control",
  "Une occasion intéressante mérite d’être évaluée sans précipitation.": "Una oportunidad interesante merece ser evaluada sin precipitación.",
  "Une proposition ou une idée pourrait présenter un potentiel réel, mais toutes les informations ne sont peut-être pas encore disponibles.": "Una propuesta o una idea podría tener un potencial real, pero quizá todavía no esté disponible toda la información.",
  "Vérifiez les conditions complètes avant de vous engager.": "Compruebe todas las condiciones antes de comprometerse.",
  "Occasion": "Oportunidad",
  "Patience": "Paciencia",

  "Votre corps pourrait réclamer davantage de récupération.": "Su cuerpo podría necesitar más recuperación.",
  "Une fatigue accumulée peut réduire votre concentration ou votre patience. Le mouvement demeure bénéfique, mais votre rythme doit respecter votre niveau d’énergie réel.": "La fatiga acumulada puede reducir su concentración o paciencia. El movimiento sigue siendo beneficioso, pero su ritmo debe respetar su nivel real de energía.",
  "Alternez activité douce, hydratation et repos.": "Alterne actividad suave, hidratación y descanso.",
  "Repos": "Descanso",
  "Hydratation": "Hidratación",
  "Votre bien-être dépend aujourd’hui de la régularité.": "Su bienestar depende hoy de la constancia.",
  "Des habitudes simples auront davantage d’effet qu’un effort intense et difficile à maintenir. Votre corps appréciera un rythme stable.": "Los hábitos sencillos tendrán más efecto que un esfuerzo intenso y difícil de mantener. Su cuerpo agradecerá un ritmo estable.",
  "Privilégiez une routine réaliste que vous pourrez répéter.": "Priorice una rutina realista que pueda repetir.",
  "Régularité": "Constancia",
  "Routine": "Rutina",
  "Le calme mental influence positivement votre énergie physique.": "La calma mental influye positivamente en su energía física.",
  "Une surcharge de pensées peut vous fatiguer davantage qu’une activité concrète. Une courte période sans écran ni sollicitations pourrait vous faire du bien.": "Una sobrecarga de pensamientos puede cansarle más que una actividad concreta. Un breve período sin pantallas ni estímulos podría sentarle bien.",
  "Réservez quelques minutes à une activité véritablement apaisante.": "Reserve unos minutos para una actividad realmente relajante.",
  "Détente": "Relajación",
  "Récupération": "Recuperación",

  "Vous recherchez des échanges authentiques plutôt que nombreux.": "Busca intercambios auténticos más que numerosos.",
  "Une conversation profonde vous apportera davantage qu’une succession d’interactions superficielles. Vous pourriez être plus sélective dans votre entourage.": "Una conversación profunda le aportará más que una sucesión de interacciones superficiales. Podría ser más selectivo o selectiva con su entorno.",
  "Accordez votre temps aux personnes avec lesquelles vous pouvez rester vous-même.": "Dedique su tiempo a las personas con las que puede ser usted mismo.",
  "Authenticité": "Autenticidad",
  "Profondeur": "Profundidad",
  "Sélection": "Selección",
  "Votre présence attire plus facilement l’attention.": "Su presencia atrae la atención con mayor facilidad.",
  "Vous pourriez être sollicitée ou invitée à prendre davantage de place dans un groupe. Votre manière naturelle de vous exprimer fera une impression positive.": "Podrían solicitar su participación o invitarle a ocupar un lugar más visible en un grupo. Su manera natural de expresarse causará una impresión positiva.",
  "Partagez vos idées sans chercher à convaincre tout le monde.": "Comparta sus ideas sin intentar convencer a todo el mundo.",
  "Expression": "Expresión",
  "Confiance": "Confianza",
  "Une mise au point peut améliorer une relation.": "Una aclaración puede mejorar una relación.",
  "Un malentendu léger pourrait être résolu rapidement si chacun s’exprime clairement. Évitez de laisser une irritation mineure s’installer.": "Un pequeño malentendido podría resolverse rápidamente si todos se expresan con claridad. Evite que una irritación menor se instale.",
  "Abordez le sujet calmement et restez centrée sur les faits.": "Aborde el tema con calma y manténgase centrado en los hechos.",
  "Dialogue": "Diálogo",
  "Apaisement": "Calma",

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
  "Transformation": "Transformación",
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

  "Cette lecture vous accompagne à travers les principales tendances symboliques de votre journée.": "Esta lectura le acompaña a través de las principales tendencias simbólicas de su día.",
  "Chaque journée révèle une direction lorsque vous prenez le temps de l’observer.": "Cada día revela una dirección cuando se toma el tiempo de observarlo.",
  "Vue d’ensemble": "Visión general",
  "Énergie générale": "Energía general",
  "Cette section présentera les influences planétaires calculées pour la date sélectionnée.": "Esta sección presenta las influencias planetarias calculadas para la fecha seleccionada.",
  "Amour": "Amor",
  "Travail et carrière": "Trabajo y carrera",
  "Finances": "Finanzas",
  "Bien-être": "Bienestar",
  "Vie sociale": "Vida social",
  "Les défis de la journée vous invitent à ralentir avant de réagir.": "Los desafíos del día le invitan a reducir el ritmo antes de reaccionar.",
  "Éviter les conclusions rapides": "Evitar conclusiones precipitadas",
  "Discernement": "Discernimiento",
  "Une situation pourrait sembler plus claire qu’elle ne l’est réellement.": "Una situación podría parecer más clara de lo que realmente es.",
  "Vérifiez les faits avant de prendre une décision définitive.": "Compruebe los hechos antes de tomar una decisión definitiva.",
  "Respecter votre rythme": "Respetar su ritmo",
  "Vouloir tout accomplir immédiatement pourrait diminuer votre efficacité.": "Querer hacerlo todo de inmediato podría reducir su eficacia.",
  "Concentrez-vous sur ce qui est réellement prioritaire.": "Concéntrese en lo que realmente es prioritario.",
  "Certaines possibilités deviennent visibles lorsque vous restez attentive aux détails.": "Algunas posibilidades se vuelven visibles cuando presta atención a los detalles.",
  "Clarifier une situation": "Aclarar una situación",
  "Décision": "Decisión",
  "Une information ou une conversation peut modifier votre compréhension d’un problème.": "Una información o una conversación puede cambiar su comprensión de un problema.",
  "Notez les faits importants avant de choisir votre prochaine action.": "Anote los hechos importantes antes de elegir su próxima acción.",
  "Faire progresser un projet": "Hacer avanzar un proyecto",
  "Une petite étape concrète pourrait relancer une idée laissée en attente.": "Un pequeño paso concreto podría reactivar una idea que estaba en espera.",
  "Consacrez un moment précis à la prochaine étape réalisable.": "Dedique un momento concreto al siguiente paso realizable.",
  "Matin": "Mañana",
  "Commencez par organiser vos priorités sans céder aux urgences extérieures.": "Empiece por organizar sus prioridades sin ceder a las urgencias externas.",
  "Après-midi": "Tarde",
  "Votre concentration devient plus stable et favorise les décisions concrètes.": "Su concentración se vuelve más estable y favorece las decisiones concretas.",
  "Soirée": "Noche",
  "Un rythme plus calme favorise les échanges sincères et la récupération.": "Un ritmo más tranquilo favorece los intercambios sinceros y la recuperación.",
  "Ces éléments symboliques peuvent accompagner votre journée.": "Estos elementos simbólicos pueden acompañar su día.",
  "Ce que vous comprenez aujourd’hui peut transformer votre manière d’avancer demain.": "Lo que comprenda hoy puede transformar su manera de avanzar mañana.",
  "Votre message du jour": "Su mensaje del día",
  "Cette journée vous invite à avancer avec calme, discernement et constance. Vous n’avez pas besoin de tout régler immédiatement. Une action juste et bien choisie peut suffire à créer un mouvement positif.": "Este día le invita a avanzar con calma, discernimiento y constancia. No necesita resolverlo todo de inmediato. Una acción adecuada y bien elegida puede bastar para crear un movimiento positivo.",
  "Votre force réside aujourd’hui dans votre capacité à observer clairement et à agir au moment opportun.": "Su fortaleza hoy reside en su capacidad para observar con claridad y actuar en el momento adecuado."
};

const DE: TranslationMap = {
  "Cette journée vous invite à avancer avec davantage de discernement.": "Dieser Tag lädt Sie ein, mit mehr Umsicht voranzugehen.",
  "Certaines situations deviennent plus claires lorsque vous prenez le temps d’observer avant d’agir. Votre perception est fine aujourd’hui, mais vous gagnerez à distinguer votre intuition d’une inquiétude passagère.": "Manche Situationen werden klarer, wenn Sie sich Zeit zum Beobachten nehmen, bevor Sie handeln. Ihre Wahrnehmung ist heute fein, doch es hilft Ihnen, Intuition von einer vorübergehenden Sorge zu unterscheiden.",
  "Accordez-vous quelques instants de recul avant une décision importante.": "Nehmen Sie sich vor einer wichtigen Entscheidung einige Augenblicke Abstand.",
  "Clarté intérieure": "Innere Klarheit",
  "Observation": "Beobachtung",
  "Décision réfléchie": "Überlegte Entscheidung",
  "Une énergie de renouvellement accompagne votre journée.": "Eine Energie der Erneuerung begleitet Ihren Tag.",
  "Vous pourriez ressentir le besoin de modifier une habitude, une priorité ou votre manière d’aborder une situation. Un changement discret peut produire un résultat plus important que prévu.": "Sie könnten das Bedürfnis verspüren, eine Gewohnheit, eine Priorität oder Ihre Herangehensweise an eine Situation zu verändern. Eine kleine Veränderung kann eine größere Wirkung haben als erwartet.",
  "Commencez par une action simple, concrète et réaliste.": "Beginnen Sie mit einer einfachen, konkreten und realistischen Handlung.",
  "Renouveau": "Erneuerung",
  "Initiative": "Initiative",
  "Progression": "Fortschritt",
  "Les échanges occupent une place importante aujourd’hui.": "Der Austausch spielt heute eine wichtige Rolle.",
  "Une conversation peut vous aider à comprendre un détail qui vous échappait. Restez attentive aux mots employés, mais aussi à ce qui n’est pas exprimé directement.": "Ein Gespräch kann Ihnen helfen, ein Detail zu verstehen, das Ihnen bisher entgangen ist. Achten Sie auf die verwendeten Worte, aber auch auf das, was nicht direkt ausgesprochen wird.",
  "Posez des questions claires plutôt que de tirer des conclusions rapides.": "Stellen Sie klare Fragen, statt vorschnelle Schlüsse zu ziehen.",
  "Communication": "Kommunikation",
  "Compréhension": "Verständnis",
  "Écoute": "Zuhören",

  "Votre énergie s’installe progressivement au fil de la journée.": "Ihre Energie stabilisiert sich im Laufe des Tages allmählich.",
  "Le démarrage peut être plus lent, mais votre concentration devient ensuite plus stable. Évitez de disperser vos efforts entre trop de tâches simultanées.": "Der Start kann langsamer sein, doch danach wird Ihre Konzentration stabiler. Vermeiden Sie es, Ihre Kräfte auf zu viele Aufgaben gleichzeitig zu verteilen.",
  "Choisissez une priorité et terminez-la avant de passer à la suivante.": "Wählen Sie eine Priorität und schließen Sie sie ab, bevor Sie zur nächsten übergehen.",
  "Concentration": "Konzentration",
  "Stabilité": "Stabilität",
  "Votre rythme est dynamique, mais il doit rester maîtrisé.": "Ihr Tempo ist dynamisch, sollte aber kontrolliert bleiben.",
  "Vous disposez d’un bon élan pour accomplir ce qui demande de l’initiative. Une tendance à vouloir aller trop vite pourrait toutefois créer une fatigue inutile.": "Sie haben guten Schwung für Aufgaben, die Initiative verlangen. Der Wunsch, zu schnell voranzugehen, könnte jedoch unnötige Müdigkeit verursachen.",
  "Alternez les périodes d’action et les courtes pauses.": "Wechseln Sie aktive Phasen mit kurzen Pausen ab.",
  "Dynamisme": "Dynamik",
  "Motivation": "Motivation",
  "Maîtrise": "Kontrolle",
  "Votre sensibilité influence directement votre niveau d’énergie.": "Ihre Sensibilität beeinflusst Ihr Energieniveau unmittelbar.",
  "Une ambiance calme vous aide à rester productive, tandis que les tensions extérieures peuvent vous fatiguer davantage. Protégez votre concentration lorsque cela est possible.": "Eine ruhige Atmosphäre hilft Ihnen, produktiv zu bleiben, während äußere Spannungen Sie stärker ermüden können. Schützen Sie Ihre Konzentration, wann immer es möglich ist.",
  "Éloignez-vous temporairement des distractions qui vous épuisent.": "Entfernen Sie sich vorübergehend von Ablenkungen, die Sie erschöpfen.",
  "Sensibilité": "Sensibilität",
  "Calme": "Ruhe",
  "Protection": "Schutz",

  "Les sentiments demandent aujourd’hui davantage de franchise.": "Gefühle verlangen heute nach mehr Offenheit.",
  "En couple, une discussion sincère peut dissiper une incompréhension. Célibataire, une rencontre ou un échange pourrait éveiller votre curiosité sans révéler immédiatement toutes ses intentions.": "In einer Beziehung kann ein ehrliches Gespräch ein Missverständnis klären. Wenn Sie Single sind, könnte eine Begegnung oder ein Austausch Ihre Neugier wecken, ohne sofort alle Absichten offenzulegen.",
  "Exprimez vos besoins sans tester inutilement les réactions de l’autre.": "Äußern Sie Ihre Bedürfnisse, ohne die Reaktionen des anderen unnötig zu testen.",
  "Sincérité": "Aufrichtigkeit",
  "Rapprochement": "Annäherung",
  "Émotions": "Emotionen",
  "Une énergie plus douce favorise les rapprochements.": "Eine sanftere Energie begünstigt Annäherung.",
  "Les petites attentions auront plus d’impact que les grandes déclarations. Une présence calme et authentique peut renforcer un lien qui compte pour vous.": "Kleine Aufmerksamkeiten wirken stärker als große Erklärungen. Eine ruhige und authentische Präsenz kann eine Verbindung stärken, die Ihnen wichtig ist.",
  "Montrez votre affection d’une manière simple et naturelle.": "Zeigen Sie Ihre Zuneigung auf einfache und natürliche Weise.",
  "Douceur": "Sanftheit",
  "Présence": "Präsenz",
  "Complicité": "Verbundenheit",
  "Votre besoin de liberté et votre besoin de proximité cherchent un équilibre.": "Ihr Bedürfnis nach Freiheit und Ihr Bedürfnis nach Nähe suchen ein Gleichgewicht.",
  "Vous pourriez vouloir préserver votre espace tout en souhaitant être rassurée. Une communication directe évitera que l’autre interprète mal votre attitude.": "Sie möchten vielleicht Ihren Freiraum bewahren und zugleich Sicherheit spüren. Direkte Kommunikation verhindert, dass Ihre Haltung falsch interpretiert wird.",
  "Expliquez clairement ce dont vous avez besoin aujourd’hui.": "Erklären Sie klar, was Sie heute brauchen.",
  "Équilibre": "Gleichgewicht",
  "Liberté": "Freiheit",
  "Clarté": "Klarheit",

  "Votre capacité d’analyse constitue votre meilleur avantage.": "Ihre Analysefähigkeit ist Ihr größter Vorteil.",
  "Une situation professionnelle mérite d’être examinée avant toute intervention. Vous pourriez remarquer un détail important que les autres n’ont pas encore considéré.": "Eine berufliche Situation sollte geprüft werden, bevor Sie eingreifen. Möglicherweise bemerken Sie ein wichtiges Detail, das andere noch nicht berücksichtigt haben.",
  "Préparez vos arguments et appuyez-vous sur des faits précis.": "Bereiten Sie Ihre Argumente vor und stützen Sie sich auf konkrete Fakten.",
  "Analyse": "Analyse",
  "Stratégie": "Strategie",
  "Préparation": "Vorbereitung",
  "Une occasion de démontrer votre efficacité peut se présenter.": "Eine Gelegenheit, Ihre Effizienz zu zeigen, kann sich ergeben.",
  "Votre sens de l’organisation vous permet de régler un problème plus rapidement que prévu. Ne sous-estimez pas la valeur d’une méthode simple et bien structurée.": "Ihr Organisationstalent kann Ihnen helfen, ein Problem schneller als erwartet zu lösen. Unterschätzen Sie nicht den Wert einer einfachen und gut strukturierten Methode.",
  "Commencez par la tâche qui aura le plus grand effet concret.": "Beginnen Sie mit der Aufgabe, die die größte konkrete Wirkung hat.",
  "Organisation": "Organisation",
  "Efficacité": "Effizienz",
  "Résultat": "Ergebnis",
  "La collaboration peut accélérer votre progression.": "Zusammenarbeit kann Ihren Fortschritt beschleunigen.",
  "Même si vous préférez parfois travailler seule, une idée extérieure pourrait améliorer votre approche. Écoutez les suggestions sans abandonner votre propre jugement.": "Auch wenn Sie manchmal lieber selbstständig arbeiten, könnte eine Idee von außen Ihren Ansatz verbessern. Hören Sie sich Vorschläge an, ohne Ihr eigenes Urteil aufzugeben.",
  "Demandez un avis précis à une personne compétente.": "Bitten Sie eine kompetente Person um eine konkrete Einschätzung.",
  "Collaboration": "Zusammenarbeit",
  "Ouverture": "Offenheit",

  "La prudence financière reste votre meilleure alliée.": "Finanzielle Vorsicht bleibt Ihr bester Verbündeter.",
  "Une dépense peut sembler urgente sans l’être réellement. Prenez le temps de vérifier les détails, de comparer les options et de mesurer les conséquences à plus long terme.": "Eine Ausgabe kann dringend erscheinen, ohne es wirklich zu sein. Nehmen Sie sich Zeit, Details zu prüfen, Optionen zu vergleichen und die längerfristigen Folgen abzuwägen.",
  "Évitez les décisions impulsives et conservez une marge de sécurité.": "Vermeiden Sie impulsive Entscheidungen und bewahren Sie einen Sicherheitsspielraum.",
  "Prudence": "Vorsicht",
  "Vérification": "Prüfung",
  "Sécurité": "Sicherheit",
  "Une meilleure organisation peut alléger une préoccupation financière.": "Eine bessere Organisation kann eine finanzielle Sorge erleichtern.",
  "Le simple fait de revoir vos priorités ou vos échéances peut vous redonner une impression de contrôle. Une petite correction aujourd’hui peut prévenir une difficulté future.": "Schon die Überprüfung Ihrer Prioritäten oder Fristen kann Ihnen wieder ein Gefühl von Kontrolle geben. Eine kleine Anpassung heute kann eine spätere Schwierigkeit verhindern.",
  "Examinez un poste de dépense que vous pouvez ajuster facilement.": "Prüfen Sie einen Ausgabenposten, den Sie leicht anpassen können.",
  "Prévision": "Planung",
  "Contrôle": "Kontrolle",
  "Une occasion intéressante mérite d’être évaluée sans précipitation.": "Eine interessante Gelegenheit sollte ohne Eile bewertet werden.",
  "Une proposition ou une idée pourrait présenter un potentiel réel, mais toutes les informations ne sont peut-être pas encore disponibles.": "Ein Vorschlag oder eine Idee könnte echtes Potenzial haben, doch möglicherweise liegen noch nicht alle Informationen vor.",
  "Vérifiez les conditions complètes avant de vous engager.": "Prüfen Sie alle Bedingungen, bevor Sie sich festlegen.",
  "Occasion": "Gelegenheit",
  "Patience": "Geduld",

  "Votre corps pourrait réclamer davantage de récupération.": "Ihr Körper könnte mehr Erholung benötigen.",
  "Une fatigue accumulée peut réduire votre concentration ou votre patience. Le mouvement demeure bénéfique, mais votre rythme doit respecter votre niveau d’énergie réel.": "Angesammelte Müdigkeit kann Ihre Konzentration oder Geduld verringern. Bewegung bleibt wohltuend, doch Ihr Tempo sollte Ihrem tatsächlichen Energieniveau entsprechen.",
  "Alternez activité douce, hydratation et repos.": "Wechseln Sie sanfte Aktivität, ausreichendes Trinken und Ruhe ab.",
  "Repos": "Ruhe",
  "Hydratation": "Flüssigkeitszufuhr",
  "Votre bien-être dépend aujourd’hui de la régularité.": "Ihr Wohlbefinden hängt heute von Beständigkeit ab.",
  "Des habitudes simples auront davantage d’effet qu’un effort intense et difficile à maintenir. Votre corps appréciera un rythme stable.": "Einfache Gewohnheiten wirken stärker als intensive Anstrengungen, die schwer durchzuhalten sind. Ihr Körper wird einen stabilen Rhythmus schätzen.",
  "Privilégiez une routine réaliste que vous pourrez répéter.": "Bevorzugen Sie eine realistische Routine, die Sie wiederholen können.",
  "Régularité": "Beständigkeit",
  "Routine": "Routine",
  "Le calme mental influence positivement votre énergie physique.": "Mentale Ruhe wirkt sich positiv auf Ihre körperliche Energie aus.",
  "Une surcharge de pensées peut vous fatiguer davantage qu’une activité concrète. Une courte période sans écran ni sollicitations pourrait vous faire du bien.": "Zu viele Gedanken können Sie stärker ermüden als eine konkrete Tätigkeit. Eine kurze Zeit ohne Bildschirm und Anforderungen könnte Ihnen guttun.",
  "Réservez quelques minutes à une activité véritablement apaisante.": "Nehmen Sie sich einige Minuten für eine wirklich beruhigende Aktivität.",
  "Détente": "Entspannung",
  "Récupération": "Erholung",

  "Vous recherchez des échanges authentiques plutôt que nombreux.": "Sie suchen eher authentische als zahlreiche Kontakte.",
  "Une conversation profonde vous apportera davantage qu’une succession d’interactions superficielles. Vous pourriez être plus sélective dans votre entourage.": "Ein tiefgehendes Gespräch bringt Ihnen mehr als eine Reihe oberflächlicher Begegnungen. Sie könnten bei Ihrem Umfeld wählerischer sein.",
  "Accordez votre temps aux personnes avec lesquelles vous pouvez rester vous-même.": "Schenken Sie Ihre Zeit den Menschen, bei denen Sie Sie selbst sein können.",
  "Authenticité": "Authentizität",
  "Profondeur": "Tiefe",
  "Sélection": "Auswahl",
  "Votre présence attire plus facilement l’attention.": "Ihre Präsenz zieht leichter Aufmerksamkeit auf sich.",
  "Vous pourriez être sollicitée ou invitée à prendre davantage de place dans un groupe. Votre manière naturelle de vous exprimer fera une impression positive.": "Sie könnten angesprochen oder eingeladen werden, in einer Gruppe mehr Raum einzunehmen. Ihre natürliche Ausdrucksweise wird einen positiven Eindruck hinterlassen.",
  "Partagez vos idées sans chercher à convaincre tout le monde.": "Teilen Sie Ihre Ideen, ohne alle überzeugen zu wollen.",
  "Expression": "Ausdruck",
  "Confiance": "Vertrauen",
  "Une mise au point peut améliorer une relation.": "Eine Klärung kann eine Beziehung verbessern.",
  "Un malentendu léger pourrait être résolu rapidement si chacun s’exprime clairement. Évitez de laisser une irritation mineure s’installer.": "Ein kleines Missverständnis kann schnell gelöst werden, wenn sich alle klar ausdrücken. Lassen Sie eine kleine Irritation nicht festsetzen.",
  "Abordez le sujet calmement et restez centrée sur les faits.": "Sprechen Sie das Thema ruhig an und bleiben Sie bei den Fakten.",
  "Dialogue": "Dialog",
  "Apaisement": "Beruhigung",

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
  "Transformation": "Transformation",
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

  "Cette lecture vous accompagne à travers les principales tendances symboliques de votre journée.": "Diese Deutung begleitet Sie durch die wichtigsten symbolischen Tendenzen Ihres Tages.",
  "Chaque journée révèle une direction lorsque vous prenez le temps de l’observer.": "Jeder Tag zeigt eine Richtung, wenn Sie sich die Zeit nehmen, ihn zu beobachten.",
  "Vue d’ensemble": "Überblick",
  "Énergie générale": "Allgemeine Energie",
  "Cette section présentera les influences planétaires calculées pour la date sélectionnée.": "Dieser Abschnitt zeigt die für das gewählte Datum berechneten planetarischen Einflüsse.",
  "Amour": "Liebe",
  "Travail et carrière": "Arbeit und Karriere",
  "Finances": "Finanzen",
  "Bien-être": "Wohlbefinden",
  "Vie sociale": "Sozialleben",
  "Les défis de la journée vous invitent à ralentir avant de réagir.": "Die Herausforderungen des Tages laden Sie ein, vor einer Reaktion langsamer zu werden.",
  "Éviter les conclusions rapides": "Vorschnelle Schlüsse vermeiden",
  "Discernement": "Urteilsvermögen",
  "Une situation pourrait sembler plus claire qu’elle ne l’est réellement.": "Eine Situation könnte klarer erscheinen, als sie tatsächlich ist.",
  "Vérifiez les faits avant de prendre une décision définitive.": "Prüfen Sie die Fakten, bevor Sie eine endgültige Entscheidung treffen.",
  "Respecter votre rythme": "Ihr eigenes Tempo respektieren",
  "Vouloir tout accomplir immédiatement pourrait diminuer votre efficacité.": "Alles sofort erledigen zu wollen, könnte Ihre Effizienz verringern.",
  "Concentrez-vous sur ce qui est réellement prioritaire.": "Konzentrieren Sie sich auf das, was wirklich Priorität hat.",
  "Certaines possibilités deviennent visibles lorsque vous restez attentive aux détails.": "Manche Möglichkeiten werden sichtbar, wenn Sie auf Details achten.",
  "Clarifier une situation": "Eine Situation klären",
  "Décision": "Entscheidung",
  "Une information ou une conversation peut modifier votre compréhension d’un problème.": "Eine Information oder ein Gespräch kann Ihr Verständnis eines Problems verändern.",
  "Notez les faits importants avant de choisir votre prochaine action.": "Notieren Sie die wichtigen Fakten, bevor Sie Ihren nächsten Schritt wählen.",
  "Faire progresser un projet": "Ein Projekt voranbringen",
  "Une petite étape concrète pourrait relancer une idée laissée en attente.": "Ein kleiner konkreter Schritt könnte eine zurückgestellte Idee wieder in Bewegung bringen.",
  "Consacrez un moment précis à la prochaine étape réalisable.": "Reservieren Sie einen festen Zeitpunkt für den nächsten umsetzbaren Schritt.",
  "Matin": "Morgen",
  "Commencez par organiser vos priorités sans céder aux urgences extérieures.": "Beginnen Sie damit, Ihre Prioritäten zu ordnen, ohne äußeren Dringlichkeiten nachzugeben.",
  "Après-midi": "Nachmittag",
  "Votre concentration devient plus stable et favorise les décisions concrètes.": "Ihre Konzentration wird stabiler und unterstützt konkrete Entscheidungen.",
  "Soirée": "Abend",
  "Un rythme plus calme favorise les échanges sincères et la récupération.": "Ein ruhigeres Tempo fördert ehrlichen Austausch und Erholung.",
  "Ces éléments symboliques peuvent accompagner votre journée.": "Diese symbolischen Elemente können Ihren Tag begleiten.",
  "Ce que vous comprenez aujourd’hui peut transformer votre manière d’avancer demain.": "Was Sie heute verstehen, kann verändern, wie Sie morgen vorangehen.",
  "Votre message du jour": "Ihre Botschaft des Tages",
  "Cette journée vous invite à avancer avec calme, discernement et constance. Vous n’avez pas besoin de tout régler immédiatement. Une action juste et bien choisie peut suffire à créer un mouvement positif.": "Dieser Tag lädt Sie ein, ruhig, umsichtig und beständig voranzugehen. Sie müssen nicht alles sofort lösen. Eine passende und gut gewählte Handlung kann genügen, um positive Bewegung zu schaffen.",
  "Votre force réside aujourd’hui dans votre capacité à observer clairement et à agir au moment opportun.": "Ihre Stärke liegt heute in Ihrer Fähigkeit, klar zu beobachten und im richtigen Moment zu handeln."
};

const IT: TranslationMap = {
  "Cette journée vous invite à avancer avec davantage de discernement.": "Questa giornata invita ad avanzare con maggiore discernimento.",
  "Certaines situations deviennent plus claires lorsque vous prenez le temps d’observer avant d’agir. Votre perception est fine aujourd’hui, mais vous gagnerez à distinguer votre intuition d’une inquiétude passagère.": "Alcune situazioni diventano più chiare quando ci si prende il tempo di osservare prima di agire. Oggi la percezione è sottile, ma sarà utile distinguere l’intuizione da una preoccupazione passeggera.",
  "Accordez-vous quelques instants de recul avant une décision importante.": "Concediti qualche istante di distacco prima di una decisione importante.",
  "Clarté intérieure": "Chiarezza interiore",
  "Observation": "Osservazione",
  "Décision réfléchie": "Decisione ponderata",
  "Une énergie de renouvellement accompagne votre journée.": "Un’energia di rinnovamento accompagna la giornata.",
  "Vous pourriez ressentir le besoin de modifier une habitude, une priorité ou votre manière d’aborder une situation. Un changement discret peut produire un résultat plus important que prévu.": "Potresti sentire il bisogno di cambiare un’abitudine, una priorità o il modo di affrontare una situazione. Un cambiamento discreto può produrre un risultato più importante del previsto.",
  "Commencez par une action simple, concrète et réaliste.": "Inizia con un’azione semplice, concreta e realistica.",
  "Renouveau": "Rinnovamento",
  "Initiative": "Iniziativa",
  "Progression": "Progresso",
  "Les échanges occupent une place importante aujourd’hui.": "Gli scambi hanno un ruolo importante oggi.",
  "Une conversation peut vous aider à comprendre un détail qui vous échappait. Restez attentive aux mots employés, mais aussi à ce qui n’est pas exprimé directement.": "Una conversazione può aiutarti a comprendere un dettaglio che ti era sfuggito. Presta attenzione alle parole usate, ma anche a ciò che non viene espresso direttamente.",
  "Posez des questions claires plutôt que de tirer des conclusions rapides.": "Fai domande chiare invece di trarre conclusioni affrettate.",
  "Communication": "Comunicazione",
  "Compréhension": "Comprensione",
  "Écoute": "Ascolto",

  "Votre énergie s’installe progressivement au fil de la journée.": "L’energia si stabilizza gradualmente nel corso della giornata.",
  "Le démarrage peut être plus lent, mais votre concentration devient ensuite plus stable. Évitez de disperser vos efforts entre trop de tâches simultanées.": "L’inizio può essere più lento, ma poi la concentrazione diventa più stabile. Evita di disperdere gli sforzi tra troppe attività contemporaneamente.",
  "Choisissez une priorité et terminez-la avant de passer à la suivante.": "Scegli una priorità e completala prima di passare alla successiva.",
  "Concentration": "Concentrazione",
  "Stabilité": "Stabilità",
  "Votre rythme est dynamique, mais il doit rester maîtrisé.": "Il ritmo è dinamico, ma deve rimanere sotto controllo.",
  "Vous disposez d’un bon élan pour accomplir ce qui demande de l’initiative. Une tendance à vouloir aller trop vite pourrait toutefois créer une fatigue inutile.": "Hai un buon slancio per ciò che richiede iniziativa. Tuttavia, la tendenza a voler andare troppo in fretta potrebbe creare stanchezza inutile.",
  "Alternez les périodes d’action et les courtes pauses.": "Alterna periodi di azione e brevi pause.",
  "Dynamisme": "Dinamismo",
  "Motivation": "Motivazione",
  "Maîtrise": "Controllo",
  "Votre sensibilité influence directement votre niveau d’énergie.": "La sensibilità influenza direttamente il livello di energia.",
  "Une ambiance calme vous aide à rester productive, tandis que les tensions extérieures peuvent vous fatiguer davantage. Protégez votre concentration lorsque cela est possible.": "Un ambiente tranquillo aiuta a mantenere la produttività, mentre le tensioni esterne possono affaticare di più. Proteggi la concentrazione quando possibile.",
  "Éloignez-vous temporairement des distractions qui vous épuisent.": "Allontanati temporaneamente dalle distrazioni che ti esauriscono.",
  "Sensibilité": "Sensibilità",
  "Calme": "Calma",
  "Protection": "Protezione",

  "Les sentiments demandent aujourd’hui davantage de franchise.": "I sentimenti richiedono oggi maggiore sincerità.",
  "En couple, une discussion sincère peut dissiper une incompréhension. Célibataire, une rencontre ou un échange pourrait éveiller votre curiosité sans révéler immédiatement toutes ses intentions.": "In coppia, una conversazione sincera può chiarire un’incomprensione. Se sei single, un incontro o uno scambio potrebbe suscitare curiosità senza rivelare subito tutte le intenzioni.",
  "Exprimez vos besoins sans tester inutilement les réactions de l’autre.": "Esprimi i tuoi bisogni senza mettere inutilmente alla prova le reazioni dell’altra persona.",
  "Sincérité": "Sincerità",
  "Rapprochement": "Avvicinamento",
  "Émotions": "Emozioni",
  "Une énergie plus douce favorise les rapprochements.": "Un’energia più dolce favorisce l’avvicinamento.",
  "Les petites attentions auront plus d’impact que les grandes déclarations. Une présence calme et authentique peut renforcer un lien qui compte pour vous.": "Le piccole attenzioni avranno più effetto delle grandi dichiarazioni. Una presenza calma e autentica può rafforzare un legame importante.",
  "Montrez votre affection d’une manière simple et naturelle.": "Mostra il tuo affetto in modo semplice e naturale.",
  "Douceur": "Dolcezza",
  "Présence": "Presenza",
  "Complicité": "Complicità",
  "Votre besoin de liberté et votre besoin de proximité cherchent un équilibre.": "Il bisogno di libertà e quello di vicinanza cercano un equilibrio.",
  "Vous pourriez vouloir préserver votre espace tout en souhaitant être rassurée. Une communication directe évitera que l’autre interprète mal votre attitude.": "Potresti voler preservare il tuo spazio e allo stesso tempo desiderare rassicurazione. Una comunicazione diretta eviterà che l’altra persona interpreti male il tuo atteggiamento.",
  "Expliquez clairement ce dont vous avez besoin aujourd’hui.": "Spiega chiaramente di cosa hai bisogno oggi.",
  "Équilibre": "Equilibrio",
  "Liberté": "Libertà",
  "Clarté": "Chiarezza",

  "Votre capacité d’analyse constitue votre meilleur avantage.": "La capacità di analisi è il tuo vantaggio migliore.",
  "Une situation professionnelle mérite d’être examinée avant toute intervention. Vous pourriez remarquer un détail important que les autres n’ont pas encore considéré.": "Una situazione professionale merita di essere esaminata prima di intervenire. Potresti notare un dettaglio importante che gli altri non hanno ancora considerato.",
  "Préparez vos arguments et appuyez-vous sur des faits précis.": "Prepara le tue argomentazioni e basati su fatti precisi.",
  "Analyse": "Analisi",
  "Stratégie": "Strategia",
  "Préparation": "Preparazione",
  "Une occasion de démontrer votre efficacité peut se présenter.": "Potrebbe presentarsi un’occasione per dimostrare la tua efficacia.",
  "Votre sens de l’organisation vous permet de régler un problème plus rapidement que prévu. Ne sous-estimez pas la valeur d’une méthode simple et bien structurée.": "Il tuo senso dell’organizzazione può permetterti di risolvere un problema più rapidamente del previsto. Non sottovalutare il valore di un metodo semplice e ben strutturato.",
  "Commencez par la tâche qui aura le plus grand effet concret.": "Inizia dall’attività che avrà l’effetto concreto maggiore.",
  "Organisation": "Organizzazione",
  "Efficacité": "Efficacia",
  "Résultat": "Risultato",
  "La collaboration peut accélérer votre progression.": "La collaborazione può accelerare i tuoi progressi.",
  "Même si vous préférez parfois travailler seule, une idée extérieure pourrait améliorer votre approche. Écoutez les suggestions sans abandonner votre propre jugement.": "Anche se a volte preferisci lavorare in autonomia, un’idea esterna potrebbe migliorare il tuo approccio. Ascolta i suggerimenti senza rinunciare al tuo giudizio.",
  "Demandez un avis précis à une personne compétente.": "Chiedi un parere preciso a una persona competente.",
  "Collaboration": "Collaborazione",
  "Ouverture": "Apertura",

  "La prudence financière reste votre meilleure alliée.": "La prudenza finanziaria resta la tua migliore alleata.",
  "Une dépense peut sembler urgente sans l’être réellement. Prenez le temps de vérifier les détails, de comparer les options et de mesurer les conséquences à plus long terme.": "Una spesa può sembrare urgente senza esserlo davvero. Prenditi il tempo di verificare i dettagli, confrontare le opzioni e valutare le conseguenze a lungo termine.",
  "Évitez les décisions impulsives et conservez une marge de sécurité.": "Evita decisioni impulsive e conserva un margine di sicurezza.",
  "Prudence": "Prudenza",
  "Vérification": "Verifica",
  "Sécurité": "Sicurezza",
  "Une meilleure organisation peut alléger une préoccupation financière.": "Una migliore organizzazione può alleggerire una preoccupazione finanziaria.",
  "Le simple fait de revoir vos priorités ou vos échéances peut vous redonner une impression de contrôle. Une petite correction aujourd’hui peut prévenir une difficulté future.": "Rivedere le priorità o le scadenze può restituirti una sensazione di controllo. Un piccolo aggiustamento oggi può prevenire una difficoltà futura.",
  "Examinez un poste de dépense que vous pouvez ajuster facilement.": "Esamina una voce di spesa che puoi modificare facilmente.",
  "Prévision": "Previsione",
  "Contrôle": "Controllo",
  "Une occasion intéressante mérite d’être évaluée sans précipitation.": "Un’opportunità interessante merita di essere valutata senza fretta.",
  "Une proposition ou une idée pourrait présenter un potentiel réel, mais toutes les informations ne sont peut-être pas encore disponibles.": "Una proposta o un’idea potrebbe avere un potenziale reale, ma forse non tutte le informazioni sono ancora disponibili.",
  "Vérifiez les conditions complètes avant de vous engager.": "Verifica tutte le condizioni prima di impegnarti.",
  "Occasion": "Opportunità",
  "Patience": "Pazienza",

  "Votre corps pourrait réclamer davantage de récupération.": "Il corpo potrebbe richiedere più recupero.",
  "Une fatigue accumulée peut réduire votre concentration ou votre patience. Le mouvement demeure bénéfique, mais votre rythme doit respecter votre niveau d’énergie réel.": "La stanchezza accumulata può ridurre la concentrazione o la pazienza. Il movimento resta benefico, ma il ritmo deve rispettare il livello reale di energia.",
  "Alternez activité douce, hydratation et repos.": "Alterna attività dolce, idratazione e riposo.",
  "Repos": "Riposo",
  "Hydratation": "Idratazione",
  "Votre bien-être dépend aujourd’hui de la régularité.": "Il benessere dipende oggi dalla costanza.",
  "Des habitudes simples auront davantage d’effet qu’un effort intense et difficile à maintenir. Votre corps appréciera un rythme stable.": "Abitudini semplici avranno più effetto di uno sforzo intenso e difficile da mantenere. Il corpo apprezzerà un ritmo stabile.",
  "Privilégiez une routine réaliste que vous pourrez répéter.": "Scegli una routine realistica che puoi ripetere.",
  "Régularité": "Regolarità",
  "Routine": "Routine",
  "Le calme mental influence positivement votre énergie physique.": "La calma mentale influenza positivamente l’energia fisica.",
  "Une surcharge de pensées peut vous fatiguer davantage qu’une activité concrète. Une courte période sans écran ni sollicitations pourrait vous faire du bien.": "Un sovraccarico di pensieri può stancarti più di un’attività concreta. Un breve periodo senza schermi né sollecitazioni potrebbe farti bene.",
  "Réservez quelques minutes à une activité véritablement apaisante.": "Dedica qualche minuto a un’attività davvero rilassante.",
  "Détente": "Relax",
  "Récupération": "Recupero",

  "Vous recherchez des échanges authentiques plutôt que nombreux.": "Cerchi scambi autentici più che numerosi.",
  "Une conversation profonde vous apportera davantage qu’une succession d’interactions superficielles. Vous pourriez être plus sélective dans votre entourage.": "Una conversazione profonda ti darà più di una serie di interazioni superficiali. Potresti diventare più selettivo nelle persone che frequenti.",
  "Accordez votre temps aux personnes avec lesquelles vous pouvez rester vous-même.": "Dedica il tuo tempo alle persone con cui puoi essere te stesso.",
  "Authenticité": "Autenticità",
  "Profondeur": "Profondità",
  "Sélection": "Selezione",
  "Votre présence attire plus facilement l’attention.": "La tua presenza attira più facilmente l’attenzione.",
  "Vous pourriez être sollicitée ou invitée à prendre davantage de place dans un groupe. Votre manière naturelle de vous exprimer fera une impression positive.": "Potresti essere coinvolto o invitato ad assumere un ruolo più visibile in un gruppo. Il tuo modo naturale di esprimerti farà un’impressione positiva.",
  "Partagez vos idées sans chercher à convaincre tout le monde.": "Condividi le tue idee senza cercare di convincere tutti.",
  "Expression": "Espressione",
  "Confiance": "Fiducia",
  "Une mise au point peut améliorer une relation.": "Un chiarimento può migliorare una relazione.",
  "Un malentendu léger pourrait être résolu rapidement si chacun s’exprime clairement. Évitez de laisser une irritation mineure s’installer.": "Un piccolo malinteso potrebbe risolversi rapidamente se tutti si esprimono con chiarezza. Evita che una lieve irritazione si stabilizzi.",
  "Abordez le sujet calmement et restez centrée sur les faits.": "Affronta l’argomento con calma e resta concentrato sui fatti.",
  "Dialogue": "Dialogo",
  "Apaisement": "Distensione",

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
  "Transformation": "Trasformazione",
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

  "Cette lecture vous accompagne à travers les principales tendances symboliques de votre journée.": "Questa lettura ti accompagna attraverso le principali tendenze simboliche della giornata.",
  "Chaque journée révèle une direction lorsque vous prenez le temps de l’observer.": "Ogni giornata rivela una direzione quando ti prendi il tempo di osservarla.",
  "Vue d’ensemble": "Panoramica",
  "Énergie générale": "Energia generale",
  "Cette section présentera les influences planétaires calculées pour la date sélectionnée.": "Questa sezione presenta le influenze planetarie calcolate per la data selezionata.",
  "Amour": "Amore",
  "Travail et carrière": "Lavoro e carriera",
  "Finances": "Finanze",
  "Bien-être": "Benessere",
  "Vie sociale": "Vita sociale",
  "Les défis de la journée vous invitent à ralentir avant de réagir.": "Le sfide della giornata invitano a rallentare prima di reagire.",
  "Éviter les conclusions rapides": "Evitare conclusioni affrettate",
  "Discernement": "Discernimento",
  "Une situation pourrait sembler plus claire qu’elle ne l’est réellement.": "Una situazione potrebbe sembrare più chiara di quanto sia realmente.",
  "Vérifiez les faits avant de prendre une décision définitive.": "Verifica i fatti prima di prendere una decisione definitiva.",
  "Respecter votre rythme": "Rispettare il proprio ritmo",
  "Vouloir tout accomplir immédiatement pourrait diminuer votre efficacité.": "Voler fare tutto immediatamente potrebbe ridurre l’efficacia.",
  "Concentrez-vous sur ce qui est réellement prioritaire.": "Concentrati su ciò che è davvero prioritario.",
  "Certaines possibilités deviennent visibles lorsque vous restez attentive aux détails.": "Alcune possibilità diventano visibili quando presti attenzione ai dettagli.",
  "Clarifier une situation": "Chiarire una situazione",
  "Décision": "Decisione",
  "Une information ou une conversation peut modifier votre compréhension d’un problème.": "Un’informazione o una conversazione può cambiare la tua comprensione di un problema.",
  "Notez les faits importants avant de choisir votre prochaine action.": "Annota i fatti importanti prima di scegliere la prossima azione.",
  "Faire progresser un projet": "Far avanzare un progetto",
  "Une petite étape concrète pourrait relancer une idée laissée en attente.": "Un piccolo passo concreto potrebbe rilanciare un’idea lasciata in sospeso.",
  "Consacrez un moment précis à la prochaine étape réalisable.": "Dedica un momento preciso al prossimo passo realizzabile.",
  "Matin": "Mattina",
  "Commencez par organiser vos priorités sans céder aux urgences extérieures.": "Inizia organizzando le priorità senza cedere alle urgenze esterne.",
  "Après-midi": "Pomeriggio",
  "Votre concentration devient plus stable et favorise les décisions concrètes.": "La concentrazione diventa più stabile e favorisce decisioni concrete.",
  "Soirée": "Sera",
  "Un rythme plus calme favorise les échanges sincères et la récupération.": "Un ritmo più tranquillo favorisce scambi sinceri e recupero.",
  "Ces éléments symboliques peuvent accompagner votre journée.": "Questi elementi simbolici possono accompagnare la giornata.",
  "Ce que vous comprenez aujourd’hui peut transformer votre manière d’avancer demain.": "Ciò che comprendi oggi può trasformare il modo in cui andrai avanti domani.",
  "Votre message du jour": "Il tuo messaggio del giorno",
  "Cette journée vous invite à avancer avec calme, discernement et constance. Vous n’avez pas besoin de tout régler immédiatement. Une action juste et bien choisie peut suffire à créer un mouvement positif.": "Questa giornata invita ad avanzare con calma, discernimento e costanza. Non è necessario risolvere tutto immediatamente. Un’azione giusta e ben scelta può bastare per creare un movimento positivo.",
  "Votre force réside aujourd’hui dans votre capacité à observer clairement et à agir au moment opportun.": "La tua forza oggi risiede nella capacità di osservare con chiarezza e agire al momento opportuno."
};

const PT: TranslationMap = {
  "Cette journée vous invite à avancer avec davantage de discernement.": "Este dia convida você a avançar com mais discernimento.",
  "Certaines situations deviennent plus claires lorsque vous prenez le temps d’observer avant d’agir. Votre perception est fine aujourd’hui, mais vous gagnerez à distinguer votre intuition d’une inquiétude passagère.": "Algumas situações ficam mais claras quando você reserva um tempo para observar antes de agir. Sua percepção está aguçada hoje, mas será útil distinguir a intuição de uma preocupação passageira.",
  "Accordez-vous quelques instants de recul avant une décision importante.": "Reserve alguns instantes para ganhar perspectiva antes de uma decisão importante.",
  "Clarté intérieure": "Clareza interior",
  "Observation": "Observação",
  "Décision réfléchie": "Decisão ponderada",
  "Une énergie de renouvellement accompagne votre journée.": "Uma energia de renovação acompanha o seu dia.",
  "Vous pourriez ressentir le besoin de modifier une habitude, une priorité ou votre manière d’aborder une situation. Un changement discret peut produire un résultat plus important que prévu.": "Você pode sentir necessidade de mudar um hábito, uma prioridade ou a maneira de abordar uma situação. Uma mudança discreta pode produzir um resultado maior do que o esperado.",
  "Commencez par une action simple, concrète et réaliste.": "Comece com uma ação simples, concreta e realista.",
  "Renouveau": "Renovação",
  "Initiative": "Iniciativa",
  "Progression": "Progresso",
  "Les échanges occupent une place importante aujourd’hui.": "A comunicação ocupa um lugar importante hoje.",
  "Une conversation peut vous aider à comprendre un détail qui vous échappait. Restez attentive aux mots employés, mais aussi à ce qui n’est pas exprimé directement.": "Uma conversa pode ajudar você a compreender um detalhe que havia passado despercebido. Preste atenção às palavras usadas, mas também ao que não é expresso diretamente.",
  "Posez des questions claires plutôt que de tirer des conclusions rapides.": "Faça perguntas claras em vez de tirar conclusões precipitadas.",
  "Communication": "Comunicação",
  "Compréhension": "Compreensão",
  "Écoute": "Escuta",

  "Votre énergie s’installe progressivement au fil de la journée.": "Sua energia se estabiliza gradualmente ao longo do dia.",
  "Le démarrage peut être plus lent, mais votre concentration devient ensuite plus stable. Évitez de disperser vos efforts entre trop de tâches simultanées.": "O início pode ser mais lento, mas depois sua concentração se torna mais estável. Evite dispersar seus esforços entre muitas tarefas ao mesmo tempo.",
  "Choisissez une priorité et terminez-la avant de passer à la suivante.": "Escolha uma prioridade e conclua-a antes de passar para a próxima.",
  "Concentration": "Concentração",
  "Stabilité": "Estabilidade",
  "Votre rythme est dynamique, mais il doit rester maîtrisé.": "Seu ritmo é dinâmico, mas precisa permanecer sob controle.",
  "Vous disposez d’un bon élan pour accomplir ce qui demande de l’initiative. Une tendance à vouloir aller trop vite pourrait toutefois créer une fatigue inutile.": "Você tem um bom impulso para realizar o que exige iniciativa. No entanto, a tendência de querer avançar rápido demais pode gerar um cansaço desnecessário.",
  "Alternez les périodes d’action et les courtes pauses.": "Alterne períodos de ação com pausas curtas.",
  "Dynamisme": "Dinamismo",
  "Motivation": "Motivação",
  "Maîtrise": "Controle",
  "Votre sensibilité influence directement votre niveau d’énergie.": "Sua sensibilidade influencia diretamente o seu nível de energia.",
  "Une ambiance calme vous aide à rester productive, tandis que les tensions extérieures peuvent vous fatiguer davantage. Protégez votre concentration lorsque cela est possible.": "Um ambiente tranquilo ajuda você a manter a produtividade, enquanto tensões externas podem cansar mais. Proteja sua concentração sempre que possível.",
  "Éloignez-vous temporairement des distractions qui vous épuisent.": "Afaste-se temporariamente das distrações que esgotam você.",
  "Sensibilité": "Sensibilidade",
  "Calme": "Calma",
  "Protection": "Proteção",

  "Les sentiments demandent aujourd’hui davantage de franchise.": "Os sentimentos pedem mais sinceridade hoje.",
  "En couple, une discussion sincère peut dissiper une incompréhension. Célibataire, une rencontre ou un échange pourrait éveiller votre curiosité sans révéler immédiatement toutes ses intentions.": "Em um relacionamento, uma conversa sincera pode esclarecer um mal-entendido. Se você estiver solteiro ou solteira, um encontro ou uma conversa pode despertar sua curiosidade sem revelar imediatamente todas as intenções.",
  "Exprimez vos besoins sans tester inutilement les réactions de l’autre.": "Expresse suas necessidades sem testar desnecessariamente as reações da outra pessoa.",
  "Sincérité": "Sinceridade",
  "Rapprochement": "Aproximação",
  "Émotions": "Emoções",
  "Une énergie plus douce favorise les rapprochements.": "Uma energia mais suave favorece a aproximação.",
  "Les petites attentions auront plus d’impact que les grandes déclarations. Une présence calme et authentique peut renforcer un lien qui compte pour vous.": "Pequenos gestos terão mais impacto do que grandes declarações. Uma presença calma e autêntica pode fortalecer um vínculo importante para você.",
  "Montrez votre affection d’une manière simple et naturelle.": "Demonstre seu afeto de maneira simples e natural.",
  "Douceur": "Suavidade",
  "Présence": "Presença",
  "Complicité": "Cumplicidade",
  "Votre besoin de liberté et votre besoin de proximité cherchent un équilibre.": "Sua necessidade de liberdade e sua necessidade de proximidade buscam equilíbrio.",
  "Vous pourriez vouloir préserver votre espace tout en souhaitant être rassurée. Une communication directe évitera que l’autre interprète mal votre attitude.": "Você pode querer preservar seu espaço e, ao mesmo tempo, buscar segurança emocional. Uma comunicação direta evitará que a outra pessoa interprete mal sua atitude.",
  "Expliquez clairement ce dont vous avez besoin aujourd’hui.": "Explique claramente do que você precisa hoje.",
  "Équilibre": "Equilíbrio",
  "Liberté": "Liberdade",
  "Clarté": "Clareza",

  "Votre capacité d’analyse constitue votre meilleur avantage.": "Sua capacidade de análise é sua maior vantagem.",
  "Une situation professionnelle mérite d’être examinée avant toute intervention. Vous pourriez remarquer un détail important que les autres n’ont pas encore considéré.": "Uma situação profissional merece ser examinada antes de qualquer intervenção. Você pode perceber um detalhe importante que os outros ainda não consideraram.",
  "Préparez vos arguments et appuyez-vous sur des faits précis.": "Prepare seus argumentos e apoie-se em fatos concretos.",
  "Analyse": "Análise",
  "Stratégie": "Estratégia",
  "Préparation": "Preparação",
  "Une occasion de démontrer votre efficacité peut se présenter.": "Pode surgir uma oportunidade para demonstrar sua eficácia.",
  "Votre sens de l’organisation vous permet de régler un problème plus rapidement que prévu. Ne sous-estimez pas la valeur d’une méthode simple et bien structurée.": "Seu senso de organização pode permitir que você resolva um problema mais rapidamente do que o esperado. Não subestime o valor de um método simples e bem estruturado.",
  "Commencez par la tâche qui aura le plus grand effet concret.": "Comece pela tarefa que terá o maior efeito concreto.",
  "Organisation": "Organização",
  "Efficacité": "Eficácia",
  "Résultat": "Resultado",
  "La collaboration peut accélérer votre progression.": "A colaboração pode acelerar seu progresso.",
  "Même si vous préférez parfois travailler seule, une idée extérieure pourrait améliorer votre approche. Écoutez les suggestions sans abandonner votre propre jugement.": "Mesmo que às vezes você prefira trabalhar de forma independente, uma ideia externa pode melhorar sua abordagem. Ouça sugestões sem abandonar seu próprio julgamento.",
  "Demandez un avis précis à une personne compétente.": "Peça uma opinião específica a uma pessoa competente.",
  "Collaboration": "Colaboração",
  "Ouverture": "Abertura",

  "La prudence financière reste votre meilleure alliée.": "A prudência financeira continua sendo sua melhor aliada.",
  "Une dépense peut sembler urgente sans l’être réellement. Prenez le temps de vérifier les détails, de comparer les options et de mesurer les conséquences à plus long terme.": "Uma despesa pode parecer urgente sem realmente ser. Reserve um tempo para verificar os detalhes, comparar opções e avaliar as consequências de longo prazo.",
  "Évitez les décisions impulsives et conservez une marge de sécurité.": "Evite decisões impulsivas e mantenha uma margem de segurança.",
  "Prudence": "Prudência",
  "Vérification": "Verificação",
  "Sécurité": "Segurança",
  "Une meilleure organisation peut alléger une préoccupation financière.": "Uma organização melhor pode aliviar uma preocupação financeira.",
  "Le simple fait de revoir vos priorités ou vos échéances peut vous redonner une impression de contrôle. Une petite correction aujourd’hui peut prévenir une difficulté future.": "Rever suas prioridades ou prazos pode devolver uma sensação de controle. Um pequeno ajuste hoje pode prevenir uma dificuldade futura.",
  "Examinez un poste de dépense que vous pouvez ajuster facilement.": "Analise uma categoria de despesa que você possa ajustar facilmente.",
  "Prévision": "Planejamento",
  "Contrôle": "Controle",
  "Une occasion intéressante mérite d’être évaluée sans précipitation.": "Uma oportunidade interessante merece ser avaliada sem pressa.",
  "Une proposition ou une idée pourrait présenter un potentiel réel, mais toutes les informations ne sont peut-être pas encore disponibles.": "Uma proposta ou ideia pode ter potencial real, mas talvez nem todas as informações estejam disponíveis ainda.",
  "Vérifiez les conditions complètes avant de vous engager.": "Verifique todas as condições antes de se comprometer.",
  "Occasion": "Oportunidade",
  "Patience": "Paciência",

  "Votre corps pourrait réclamer davantage de récupération.": "Seu corpo pode precisar de mais recuperação.",
  "Une fatigue accumulée peut réduire votre concentration ou votre patience. Le mouvement demeure bénéfique, mais votre rythme doit respecter votre niveau d’énergie réel.": "O cansaço acumulado pode reduzir sua concentração ou paciência. O movimento continua sendo benéfico, mas seu ritmo deve respeitar seu nível real de energia.",
  "Alternez activité douce, hydratation et repos.": "Alterne atividade leve, hidratação e descanso.",
  "Repos": "Descanso",
  "Hydratation": "Hidratação",
  "Votre bien-être dépend aujourd’hui de la régularité.": "Seu bem-estar depende hoje da constância.",
  "Des habitudes simples auront davantage d’effet qu’un effort intense et difficile à maintenir. Votre corps appréciera un rythme stable.": "Hábitos simples terão mais efeito do que um esforço intenso e difícil de manter. Seu corpo agradecerá um ritmo estável.",
  "Privilégiez une routine réaliste que vous pourrez répéter.": "Priorize uma rotina realista que você possa repetir.",
  "Régularité": "Regularidade",
  "Routine": "Rotina",
  "Le calme mental influence positivement votre énergie physique.": "A calma mental influencia positivamente sua energia física.",
  "Une surcharge de pensées peut vous fatiguer davantage qu’une activité concrète. Une courte période sans écran ni sollicitations pourrait vous faire du bien.": "Uma sobrecarga de pensamentos pode cansar mais do que uma atividade concreta. Um curto período sem telas nem solicitações pode fazer bem.",
  "Réservez quelques minutes à une activité véritablement apaisante.": "Reserve alguns minutos para uma atividade realmente relaxante.",
  "Détente": "Relaxamento",
  "Récupération": "Recuperação",

  "Vous recherchez des échanges authentiques plutôt que nombreux.": "Você busca interações autênticas mais do que numerosas.",
  "Une conversation profonde vous apportera davantage qu’une succession d’interactions superficielles. Vous pourriez être plus sélective dans votre entourage.": "Uma conversa profunda trará mais do que uma sequência de interações superficiais. Você pode se tornar mais seletivo com as pessoas ao seu redor.",
  "Accordez votre temps aux personnes avec lesquelles vous pouvez rester vous-même.": "Dedique seu tempo às pessoas com quem você pode ser você mesmo.",
  "Authenticité": "Autenticidade",
  "Profondeur": "Profundidade",
  "Sélection": "Seleção",
  "Votre présence attire plus facilement l’attention.": "Sua presença atrai atenção com mais facilidade.",
  "Vous pourriez être sollicitée ou invitée à prendre davantage de place dans un groupe. Votre manière naturelle de vous exprimer fera une impression positive.": "Você pode ser procurado ou convidado a ocupar um espaço mais visível em um grupo. Sua maneira natural de se expressar causará uma impressão positiva.",
  "Partagez vos idées sans chercher à convaincre tout le monde.": "Compartilhe suas ideias sem tentar convencer todo mundo.",
  "Expression": "Expressão",
  "Confiance": "Confiança",
  "Une mise au point peut améliorer une relation.": "Um esclarecimento pode melhorar uma relação.",
  "Un malentendu léger pourrait être résolu rapidement si chacun s’exprime clairement. Évitez de laisser une irritation mineure s’installer.": "Um pequeno mal-entendido pode ser resolvido rapidamente se todos se expressarem com clareza. Evite deixar uma pequena irritação se instalar.",
  "Abordez le sujet calmement et restez centrée sur les faits.": "Aborde o assunto com calma e mantenha o foco nos fatos.",
  "Dialogue": "Diálogo",
  "Apaisement": "Tranquilidade",

  "Bordeaux": "Bordô",
  "Bleu nuit": "Azul-noturno",
  "Vert émeraude": "Verde-esmeralda",
  "Or": "Dourado",
  "Violet profond": "Violeta profundo",
  "Rose poudré": "Rosa-pó",
  "Obsidienne": "Obsidiana",
  "Améthyste": "Ametista",
  "Quartz rose": "Quartzo rosa",
  "Labradorite": "Labradorita",
  "Citrine": "Citrino",
  "Pierre de lune": "Pedra da lua",
  "Transformation": "Transformação",
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

  "Cette lecture vous accompagne à travers les principales tendances symboliques de votre journée.": "Esta leitura acompanha você pelas principais tendências simbólicas do seu dia.",
  "Chaque journée révèle une direction lorsque vous prenez le temps de l’observer.": "Cada dia revela uma direção quando você reserva um tempo para observá-lo.",
  "Vue d’ensemble": "Visão geral",
  "Énergie générale": "Energia geral",
  "Cette section présentera les influences planétaires calculées pour la date sélectionnée.": "Esta seção apresenta as influências planetárias calculadas para a data selecionada.",
  "Amour": "Amor",
  "Travail et carrière": "Trabalho e carreira",
  "Finances": "Finanças",
  "Bien-être": "Bem-estar",
  "Vie sociale": "Vida social",
  "Les défis de la journée vous invitent à ralentir avant de réagir.": "Os desafios do dia convidam você a desacelerar antes de reagir.",
  "Éviter les conclusions rapides": "Evitar conclusões precipitadas",
  "Discernement": "Discernimento",
  "Une situation pourrait sembler plus claire qu’elle ne l’est réellement.": "Uma situação pode parecer mais clara do que realmente é.",
  "Vérifiez les faits avant de prendre une décision définitive.": "Verifique os fatos antes de tomar uma decisão definitiva.",
  "Respecter votre rythme": "Respeitar seu ritmo",
  "Vouloir tout accomplir immédiatement pourrait diminuer votre efficacité.": "Querer realizar tudo imediatamente pode reduzir sua eficácia.",
  "Concentrez-vous sur ce qui est réellement prioritaire.": "Concentre-se no que é realmente prioritário.",
  "Certaines possibilités deviennent visibles lorsque vous restez attentive aux détails.": "Algumas possibilidades ficam visíveis quando você presta atenção aos detalhes.",
  "Clarifier une situation": "Esclarecer uma situação",
  "Décision": "Decisão",
  "Une information ou une conversation peut modifier votre compréhension d’un problème.": "Uma informação ou conversa pode mudar sua compreensão de um problema.",
  "Notez les faits importants avant de choisir votre prochaine action.": "Anote os fatos importantes antes de escolher sua próxima ação.",
  "Faire progresser un projet": "Fazer um projeto avançar",
  "Une petite étape concrète pourrait relancer une idée laissée en attente.": "Um pequeno passo concreto pode reativar uma ideia que estava em espera.",
  "Consacrez un moment précis à la prochaine étape réalisable.": "Reserve um momento específico para a próxima etapa realizável.",
  "Matin": "Manhã",
  "Commencez par organiser vos priorités sans céder aux urgences extérieures.": "Comece organizando suas prioridades sem ceder às urgências externas.",
  "Après-midi": "Tarde",
  "Votre concentration devient plus stable et favorise les décisions concrètes.": "Sua concentração se torna mais estável e favorece decisões concretas.",
  "Soirée": "Noite",
  "Un rythme plus calme favorise les échanges sincères et la récupération.": "Um ritmo mais tranquilo favorece trocas sinceras e recuperação.",
  "Ces éléments symboliques peuvent accompagner votre journée.": "Estes elementos simbólicos podem acompanhar o seu dia.",
  "Ce que vous comprenez aujourd’hui peut transformer votre manière d’avancer demain.": "O que você compreende hoje pode transformar a maneira como avançará amanhã.",
  "Votre message du jour": "Sua mensagem do dia",
  "Cette journée vous invite à avancer avec calme, discernement et constance. Vous n’avez pas besoin de tout régler immédiatement. Une action juste et bien choisie peut suffire à créer un mouvement positif.": "Este dia convida você a avançar com calma, discernimento e constância. Você não precisa resolver tudo imediatamente. Uma ação adequada e bem escolhida pode ser suficiente para criar um movimento positivo.",
  "Votre force réside aujourd’hui dans votre capacité à observer clairement et à agir au moment opportun.": "Sua força hoje está na capacidade de observar com clareza e agir no momento certo."
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
  en: {
    belier: "Aries",
    taureau: "Taurus",
    gemeaux: "Gemini",
    cancer: "Cancer",
    lion: "Leo",
    vierge: "Virgo",
    balance: "Libra",
    scorpion: "Scorpio",
    sagittaire: "Sagittarius",
    capricorne: "Capricorn",
    verseau: "Aquarius",
    poissons: "Pisces",
  },
  es: {
    belier: "Aries",
    taureau: "Tauro",
    gemeaux: "Géminis",
    cancer: "Cáncer",
    lion: "Leo",
    vierge: "Virgo",
    balance: "Libra",
    scorpion: "Escorpio",
    sagittaire: "Sagitario",
    capricorne: "Capricornio",
    verseau: "Acuario",
    poissons: "Piscis",
  },
  de: {
    belier: "Widder",
    taureau: "Stier",
    gemeaux: "Zwillinge",
    cancer: "Krebs",
    lion: "Löwe",
    vierge: "Jungfrau",
    balance: "Waage",
    scorpion: "Skorpion",
    sagittaire: "Schütze",
    capricorne: "Steinbock",
    verseau: "Wassermann",
    poissons: "Fische",
  },
  it: {
    belier: "Ariete",
    taureau: "Toro",
    gemeaux: "Gemelli",
    cancer: "Cancro",
    lion: "Leone",
    vierge: "Vergine",
    balance: "Bilancia",
    scorpion: "Scorpione",
    sagittaire: "Sagittario",
    capricorne: "Capricorno",
    verseau: "Acquario",
    poissons: "Pesci",
  },
  pt: {
    belier: "Áries",
    taureau: "Touro",
    gemeaux: "Gêmeos",
    cancer: "Câncer",
    lion: "Leão",
    vierge: "Virgem",
    balance: "Libra",
    scorpion: "Escorpião",
    sagittaire: "Sagitário",
    capricorne: "Capricórnio",
    verseau: "Aquário",
    poissons: "Peixes",
  },
};

const MONTHS: Record<
  NonFrenchLocale,
  string[]
> = {
  en: [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December",
  ],
  es: [
    "enero", "febrero", "marzo", "abril",
    "mayo", "junio", "julio", "agosto",
    "septiembre", "octubre", "noviembre", "diciembre",
  ],
  de: [
    "Januar", "Februar", "März", "April",
    "Mai", "Juni", "Juli", "August",
    "September", "Oktober", "November", "Dezember",
  ],
  it: [
    "gennaio", "febbraio", "marzo", "aprile",
    "maggio", "giugno", "luglio", "agosto",
    "settembre", "ottobre", "novembre", "dicembre",
  ],
  pt: [
    "janeiro", "fevereiro", "março", "abril",
    "maio", "junho", "julho", "agosto",
    "setembro", "outubro", "novembro", "dezembro",
  ],
};

const REPORT_TITLES: Record<
  NonFrenchLocale,
  string
> = {
  en: "Your Premium daily horoscope",
  es: "Su horóscopo Premium del día",
  de: "Ihr Premium-Tageshoroskop",
  it: "Il tuo oroscopo Premium del giorno",
  pt: "Seu horóscopo Premium do dia",
};

function localizeSafeLiterals(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile = ts.createSourceFile(
    "buildDailyHoroscope.ts",
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

  function visit(node: ts.Node) {
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
          start: node.getStart(sourceFile),
          end: node.getEnd(),
          value: JSON.stringify(translated),
        });
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  return replacements
    .sort((a, b) => b.start - a.start)
    .reduce(
      (output, replacement) =>
        output.slice(0, replacement.start) +
        replacement.value +
        output.slice(replacement.end),
      source,
    );
}

function replaceDynamicValues(
  source: string,
  locale: NonFrenchLocale,
): string {
  let output = source;

  /*
   * Texte dynamique avec le prénom.
   * Un TemplateExpression n'est pas un simple
   * StringLiteral, donc on le traite explicitement.
   */
  const localizedWelcome =
    TRANSLATIONS[locale][
      "Cette lecture vous accompagne à travers les principales tendances symboliques de votre journée."
    ];

  output = output.replace(
    /`\$\{firstName\}, cette lecture vous accompagne à travers les principales tendances symboliques de votre journée\.`/g,
    `\`\${firstName}, ${localizedWelcome}\``,
  );

  output = output.replace(
    /getHoroscopeZodiacLabel\(\s*normalizedSign\s*\)/g,
    "__dailyLocalizedZodiacLabel(normalizedSign)",
  );

  output = output.replace(
    /formatHoroscopeDate\(\s*isoDate\s*\)/g,
    "__dailyFormatDate(isoDate)",
  );

  output = output.replace(
    /buildHoroscopeReportTitle\(\s*"day"\s*,\s*normalizedSign\s*,?\s*\)/g,
    "__dailyReportTitle()",
  );

  output = output.replace(
    /time:\s*`\$\{8 \+ \(seed % 13\)\} h \$\{String\(\s*\(seed \* 7\) % 60,\s*\)\.padStart\(2,\s*"0"\)\}`/g,
    `time: __dailyFormatTime(
        8 + (seed % 13),
        (seed * 7) % 60,
      )`,
  );

  return output;
}

function injectHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __dailyLocalizedZodiacLabel",
    )
  ) {
    return source;
  }

  const labels =
    ZODIAC_LABELS[locale];

  const months =
    MONTHS[locale];

  const reportTitle =
    REPORT_TITLES[locale];

  const dateFormatter = (() => {
    switch (locale) {
      case "en":
        return `
function __dailyFormatDate(
  isoDate: string,
): string {
  const [year, month, day] =
    isoDate.split("-").map(Number);

  return \`\${__DAILY_MONTHS[month - 1]} \${day}, \${year}\`;
}`;
      case "de":
        return `
function __dailyFormatDate(
  isoDate: string,
): string {
  const [year, month, day] =
    isoDate.split("-").map(Number);

  return \`\${day}. \${__DAILY_MONTHS[month - 1]} \${year}\`;
}`;
      case "es":
        return `
function __dailyFormatDate(
  isoDate: string,
): string {
  const [year, month, day] =
    isoDate.split("-").map(Number);

  return \`\${day} de \${__DAILY_MONTHS[month - 1]} de \${year}\`;
}`;
      case "it":
        return `
function __dailyFormatDate(
  isoDate: string,
): string {
  const [year, month, day] =
    isoDate.split("-").map(Number);

  return \`\${day} \${__DAILY_MONTHS[month - 1]} \${year}\`;
}`;
      case "pt":
        return `
function __dailyFormatDate(
  isoDate: string,
): string {
  const [year, month, day] =
    isoDate.split("-").map(Number);

  return \`\${day} de \${__DAILY_MONTHS[month - 1]} de \${year}\`;
}`;
    }
  })();

  const timeFormatter =
    locale === "en"
      ? `
function __dailyFormatTime(
  hour: number,
  minute: number,
): string {
  const suffix =
    hour >= 12 ? "PM" : "AM";

  const hour12 =
    hour % 12 || 12;

  return \`\${hour12}:\${String(
    minute,
  ).padStart(2, "0")} \${suffix}\`;
}`
      : `
function __dailyFormatTime(
  hour: number,
  minute: number,
): string {
  return \`\${String(hour).padStart(
    2,
    "0",
  )}:\${String(minute).padStart(
    2,
    "0",
  )}\`;
}`;

  const helper = `
/* =========================================================
   DAILY HOROSCOPE — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __DAILY_ZODIAC_LABELS:
  Record<HoroscopeZodiacSign, string> =
  ${JSON.stringify(labels, null, 2)};

const __DAILY_MONTHS =
  ${JSON.stringify(months, null, 2)} as const;

const __DAILY_REPORT_TITLE =
  ${JSON.stringify(reportTitle)};

function __dailyLocalizedZodiacLabel(
  sign: HoroscopeZodiacSign,
): string {
  return (
    __DAILY_ZODIAC_LABELS[sign] ??
    sign
  );
}

function __dailyReportTitle(): string {
  return __DAILY_REPORT_TITLE;
}
${dateFormatter}
${timeFormatter}

/* =========================================================
   END DAILY HOROSCOPE — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export function buildDailyHoroscope";

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

export function localizeDailyHoroscopeBuilder(
  source: string,
  locale: PaidPdfLocale,
): string {
  /*
   * Le français reste exactement
   * le fichier source.
   */
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    TRANSLATIONS[normalizedLocale];

  if (!translations) {
    return source;
  }

  /*
   * 1. Corriger d'abord les valeurs dynamiques
   *    pendant que le code source est encore
   *    dans sa forme française d'origine.
   */
  let localized =
    replaceDynamicValues(
      source,
      normalizedLocale,
    );

  /*
   * 2. Traduire ensuite uniquement les
   *    littéraux de chaîne exacts via l'AST.
   *
   *    Aucun nom de variable, propriété,
   *    calcul, seed ou score n'est modifié.
   */
  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  /*
   * 3. Injecter les helpers de langue pour
   *    les valeurs qui ne viennent pas d'un
   *    littéral : signe, date, titre et heure.
   */
  localized =
    injectHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
