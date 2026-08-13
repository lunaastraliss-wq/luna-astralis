import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type Replacement = {
  start: number;
  end: number;
  value: string;
};

const TEXT: Record<NonFrenchLocale, Record<string, string>> = {
  "en": {
    "Rythmes et habitudes": "Rhythms and habits",
    "Votre vie quotidienne": "Your daily life",
    "La compatibilité se construit aussi dans les horaires, les responsabilités, les habitudes et les petits gestes répétés.": "Compatibility is also built through schedules, responsibilities, habits, and the small gestures repeated every day.",
    "Partager le réel": "Sharing everyday life",
    "La Lune montre les habitudes et les besoins de confort, tandis que Saturne décrit l’organisation, les devoirs et la stabilité. Leur combinaison révèle comment vous pouvez créer un quotidien rassurant sans laisser la routine étouffer la relation.": "The Moon shows habits and the need for comfort, while Saturn describes organization, duties, and stability. Their combination reveals how you can create a reassuring daily life without letting routine suffocate the relationship.",
    "Vous pouvez bâtir des repères solides lorsque chacun participe concrètement et respecte le rythme naturel de l’autre.": "You can build solid foundations when each person contributes in practical ways and respects the other's natural rhythm.",
    "Les frustrations s’accumulent lorsque les tâches, les horaires ou la charge mentale semblent déséquilibrés.": "Frustrations can build when tasks, schedules, or the mental load feel unbalanced.",
    "Définissez clairement ce qui appartient à chacun et conservez aussi des moments spontanés qui ne servent aucun objectif pratique.": "Clearly define each person's responsibilities while preserving spontaneous moments that serve no practical purpose.",
    "Sécurité et appartenance": "Security and belonging",
    "Famille et foyer": "Family and home",
    "Le foyer représente l’endroit où le couple cherche protection, intimité, continuité et sentiment d’appartenance.": "Home represents the place where the couple seeks protection, intimacy, continuity, and a sense of belonging.",
    "Créer un refuge commun": "Creating a shared refuge",
    "La Lune décrit le besoin de sécurité émotionnelle et Vénus la manière de créer douceur, harmonie et plaisir. Ensemble, elles montrent comment le couple peut construire un climat familial chaleureux et respectueux.": "The Moon describes the need for emotional security, while Venus shows how tenderness, harmony, and pleasure are created. Together, they show how the couple can build a warm and respectful family atmosphere.",
    "La tendresse, l’écoute et les traditions partagées peuvent devenir une importante source de cohésion.": "Tenderness, attentive listening, and shared traditions can become an important source of cohesion.",
    "Les attentes familiales, les habitudes héritées ou les besoins de proximité peuvent différer davantage qu’il n’y paraît.": "Family expectations, inherited habits, or needs for closeness may differ more than they initially appear.",
    "Créez vos propres traditions au lieu de reproduire automatiquement celles de vos familles d’origine.": "Create your own traditions instead of automatically reproducing those of your families of origin.",
    "Dialogue dans le réel": "Dialogue in everyday life",
    "Communication approfondie": "Deeper communication",
    "Au-delà du style mental, cette page observe la manière dont vous discutez des décisions, des émotions et des sujets sensibles.": "Beyond mental style, this page explores how you discuss decisions, emotions, and sensitive subjects.",
    "Parler pour être compris": "Speaking to be understood",
    "Mercure organise les idées et les mots, tandis que la Lune réagit selon le ressenti. Leur interaction montre si le dialogue peut rejoindre l’émotion ou si la logique et la sensibilité ont besoin d’un pont plus conscient.": "Mercury organizes ideas and words, while the Moon reacts through feelings. Their interaction shows whether dialogue can reach the emotional level or whether logic and sensitivity need a more conscious bridge.",
    "Vous pouvez résoudre beaucoup de situations lorsque vous prenez le temps de distinguer les faits, les émotions et les attentes.": "You can resolve many situations when you take the time to distinguish facts, emotions, and expectations.",
    "Une discussion peut déraper lorsque l’un cherche une solution pendant que l’autre souhaite d’abord être entendu.": "A discussion can go off track when one person is looking for a solution while the other first wants to be heard.",
    "Avant de répondre, demandez : « Veux-tu une solution, un avis ou simplement être écouté ? »": "Before responding, ask: “Do you want a solution, an opinion, or simply to be heard?”",
    "Corps et proximité": "Body and closeness",
    "Sexualité et intimité": "Sexuality and intimacy",
    "L’intimité révèle comment désir, confiance, tendresse et vulnérabilité se rencontrent dans la relation.": "Intimacy reveals how desire, trust, tenderness, and vulnerability come together in the relationship.",
    "L’alchimie vécue": "Living the chemistry",
    "Vénus décrit la manière d’attirer, de recevoir et de créer le plaisir, tandis que Mars représente l’élan, l’initiative et le désir. Leur rencontre montre le rythme de l’attirance et la façon dont l’intimité peut rester vivante.": "Venus describes how you attract, receive, and create pleasure, while Mars represents drive, initiative, and desire. Their interaction reveals the rhythm of attraction and how intimacy can remain alive.",
    "Votre alchimie peut devenir un langage puissant de réconciliation, de confiance et de présence.": "Your chemistry can become a powerful language of reconciliation, trust, and presence.",
    "Les différences de rythme, de spontanéité ou de besoin affectif peuvent être mal interprétées comme un manque d’amour.": "Differences in rhythm, spontaneity, or emotional needs can be misinterpreted as a lack of love.",
    "Parlez ouvertement de vos besoins et de vos limites sans attendre qu’ils soient devinés.": "Speak openly about your needs and boundaries instead of expecting them to be guessed.",
    "Ressources et stabilité": "Resources and stability",
    "Argent et sécurité matérielle": "Money and material security",
    "Les finances mettent en lumière les valeurs, les priorités, le besoin de sécurité et la manière de prendre des décisions concrètes.": "Finances highlight values, priorities, the need for security, and the way practical decisions are made.",
    "Construire sans se limiter": "Building without limiting yourselves",
    "Vénus parle des valeurs et du plaisir, tandis que Saturne décrit la prudence, la responsabilité et le long terme. Leur interaction montre comment vous pouvez équilibrer dépenses, sécurité, projets et qualité de vie.": "Venus speaks of values and pleasure, while Saturn describes caution, responsibility, and the long term. Their interaction shows how you can balance spending, security, projects, and quality of life.",
    "Une vision claire et des objectifs partagés peuvent vous aider à construire une stabilité durable.": "A clear vision and shared goals can help you build lasting stability.",
    "L’un peut privilégier la sécurité alors que l’autre souhaite davantage profiter du présent ou investir dans des expériences.": "One person may prioritize security while the other wants to enjoy the present more or invest in experiences.",
    "Décidez ensemble d’un budget pour les obligations, l’épargne et le plaisir afin que personne ne se sente contrôlé ou négligé.": "Decide together on a budget for obligations, savings, and enjoyment so that neither person feels controlled or neglected.",
    "Ambition et réalisation": "Ambition and achievement",
    "Carrière et ambitions": "Career and ambitions",
    "Le couple influence la confiance, la motivation, les choix professionnels et la capacité à soutenir les objectifs de chacun.": "The relationship influences confidence, motivation, career choices, and the ability to support each other's goals.",
    "Grandir sans se rivaliser": "Growing without competing",
    "Le Soleil représente l’identité et l’accomplissement, tandis que Jupiter amplifie la confiance, l’ambition et la vision. Cette combinaison montre comment vous pouvez encourager la réussite sans transformer les objectifs personnels en compétition.": "The Sun represents identity and fulfillment, while Jupiter amplifies confidence, ambition, and vision. This combination shows how you can encourage success without turning personal goals into competition.",
    "Vous pouvez devenir une véritable équipe lorsque chacun célèbre les avancées de l’autre et partage ses ressources.": "You can become a true team when each person celebrates the other's progress and shares their resources.",
    "La réussite, le temps consacré au travail ou les différences d’ambition peuvent créer distance ou comparaison.": "Success, time devoted to work, or differences in ambition can create distance or comparison.",
    "Soutenez les projets personnels tout en protégeant des moments où la relation n’est pas reléguée au second plan.": "Support personal projects while protecting moments when the relationship is not pushed into the background.",
    "Vision commune": "Shared vision",
    "Vos projets de vie": "Your life plans",
    "Les projets communs donnent une direction au couple et transforment les aspirations individuelles en construction partagée.": "Shared projects give the relationship direction and transform individual aspirations into something you build together.",
    "Rêver et concrétiser": "Dreaming and making it real",
    "Jupiter ouvre les possibilités et Saturne donne une structure. Ensemble, ils montrent comment le couple peut transformer une idée en projet réel, à condition d’équilibrer enthousiasme, patience et responsabilité.": "Jupiter opens possibilities and Saturn provides structure. Together, they show how the couple can turn an idea into a real project by balancing enthusiasm, patience, and responsibility.",
    "Vous pouvez avancer loin lorsque l’un apporte la vision et l’autre la méthode, ou lorsque vous alternez naturellement ces rôles.": "You can go far when one person brings the vision and the other the method, or when you naturally alternate these roles.",
    "Le projet peut ralentir si l’un juge l’autre trop prudent, trop ambitieux ou insuffisamment engagé.": "A project can slow down if one person sees the other as too cautious, too ambitious, or insufficiently committed.",
    "Définissez une vision commune, puis divisez-la en étapes concrètes avec des responsabilités et des échéances réalistes.": "Define a shared vision, then divide it into concrete steps with responsibilities and realistic deadlines.",
    "Durée et évolution": "Longevity and growth",
    "Votre potentiel à long terme": "Your long-term potential",
    "La durée dépend moins d’une perfection immédiate que de la capacité à grandir, réparer, s’adapter et renouveler le lien.": "Longevity depends less on immediate perfection than on the ability to grow, repair, adapt, and renew the bond.",
    "Construire dans le temps": "Building over time",
    "Saturne décrit l’engagement et la résistance du lien, tandis que Jupiter représente l’évolution, l’espoir et la croissance. Leur équilibre révèle si le couple sait rester stable sans cesser d’avancer.": "Saturn describes commitment and the resilience of the bond, while Jupiter represents evolution, hope, and growth. Their balance reveals whether the couple can remain stable without stopping its progress.",
    "La relation peut durer lorsqu’elle conserve une direction, des engagements clairs et la capacité de créer de nouvelles expériences.": "The relationship can last when it maintains a sense of direction, clear commitments, and the ability to create new experiences.",
    "La stabilité peut devenir rigidité, tandis que le besoin de changement peut être vécu comme une menace.": "Stability can become rigidity, while the need for change can be experienced as a threat.",
    "Réévaluez régulièrement vos projets, vos besoins et vos règles de couple afin que l’engagement reste vivant plutôt que figé.": "Regularly reassess your plans, needs, and relationship rules so that commitment remains alive rather than becoming fixed.",
    "Cette interaction soutient la coopération et permet à cette dimension de la vie commune de se développer avec davantage de naturel.": "This interaction supports cooperation and allows this dimension of your shared life to develop more naturally.",
    "Cette connexion intensifie fortement ce thème et le rend particulièrement visible dans votre quotidien de couple.": "This connection strongly intensifies this theme and makes it particularly visible in your daily life as a couple.",
    "Cette tension demande des décisions claires et une meilleure répartition des besoins, des efforts ou des responsabilités.": "This tension calls for clear decisions and a better distribution of needs, efforts, or responsibilities.",
    "Cette polarité montre deux approches différentes qui peuvent devenir complémentaires lorsque chacune est reconnue.": "This polarity reveals two different approaches that can become complementary when each is acknowledged.",
    "Cette interaction demande des ajustements précis et une communication régulière pour éviter l’accumulation de frustration.": "This interaction requires specific adjustments and regular communication to prevent frustration from building up.",
    "Influences astrologiques principales": "Main astrological influences",
    "Votre potentiel": "Your potential",
    "Votre point de vigilance": "Your point of attention",
    "Votre clé concrète": "Your practical key",
    "Luna Astralis • Rapport de synastrie": "Luna Astralis • Synastry report",
    "Première personne": "First person",
    "Deuxième personne": "Second person",
    "Non précisé": "Not specified",
    "Position non disponible": "Position unavailable"
  },
  "es": {
    "Rythmes et habitudes": "Ritmos y hábitos",
    "Votre vie quotidienne": "Su vida cotidiana",
    "La compatibilité se construit aussi dans les horaires, les responsabilités, les habitudes et les petits gestes répétés.": "La compatibilidad también se construye a través de los horarios, las responsabilidades, los hábitos y los pequeños gestos repetidos cada día.",
    "Partager le réel": "Compartir la vida cotidiana",
    "La Lune montre les habitudes et les besoins de confort, tandis que Saturne décrit l’organisation, les devoirs et la stabilité. Leur combinaison révèle comment vous pouvez créer un quotidien rassurant sans laisser la routine étouffer la relation.": "La Luna muestra los hábitos y la necesidad de comodidad, mientras Saturno describe la organización, los deberes y la estabilidad. Su combinación revela cómo pueden crear una vida cotidiana tranquilizadora sin dejar que la rutina ahogue la relación.",
    "Vous pouvez bâtir des repères solides lorsque chacun participe concrètement et respecte le rythme naturel de l’autre.": "Pueden construir bases sólidas cuando cada persona contribuye de forma concreta y respeta el ritmo natural de la otra.",
    "Les frustrations s’accumulent lorsque les tâches, les horaires ou la charge mentale semblent déséquilibrés.": "Las frustraciones pueden acumularse cuando las tareas, los horarios o la carga mental parecen desequilibrados.",
    "Définissez clairement ce qui appartient à chacun et conservez aussi des moments spontanés qui ne servent aucun objectif pratique.": "Definan claramente las responsabilidades de cada uno y conserven también momentos espontáneos que no tengan ningún objetivo práctico.",
    "Sécurité et appartenance": "Seguridad y pertenencia",
    "Famille et foyer": "Familia y hogar",
    "Le foyer représente l’endroit où le couple cherche protection, intimité, continuité et sentiment d’appartenance.": "El hogar representa el lugar donde la pareja busca protección, intimidad, continuidad y un sentimiento de pertenencia.",
    "Créer un refuge commun": "Crear un refugio compartido",
    "La Lune décrit le besoin de sécurité émotionnelle et Vénus la manière de créer douceur, harmonie et plaisir. Ensemble, elles montrent comment le couple peut construire un climat familial chaleureux et respectueux.": "La Luna describe la necesidad de seguridad emocional y Venus la manera de crear ternura, armonía y placer. Juntas muestran cómo la pareja puede construir un ambiente familiar cálido y respetuoso.",
    "La tendresse, l’écoute et les traditions partagées peuvent devenir une importante source de cohésion.": "La ternura, la escucha y las tradiciones compartidas pueden convertirse en una importante fuente de cohesión.",
    "Les attentes familiales, les habitudes héritées ou les besoins de proximité peuvent différer davantage qu’il n’y paraît.": "Las expectativas familiares, los hábitos heredados o las necesidades de cercanía pueden diferir más de lo que parece.",
    "Créez vos propres traditions au lieu de reproduire automatiquement celles de vos familles d’origine.": "Creen sus propias tradiciones en lugar de reproducir automáticamente las de sus familias de origen.",
    "Dialogue dans le réel": "Diálogo en la vida cotidiana",
    "Communication approfondie": "Comunicación profunda",
    "Au-delà du style mental, cette page observe la manière dont vous discutez des décisions, des émotions et des sujets sensibles.": "Más allá del estilo mental, esta página observa cómo hablan de decisiones, emociones y temas sensibles.",
    "Parler pour être compris": "Hablar para ser comprendidos",
    "Mercure organise les idées et les mots, tandis que la Lune réagit selon le ressenti. Leur interaction montre si le dialogue peut rejoindre l’émotion ou si la logique et la sensibilité ont besoin d’un pont plus conscient.": "Mercurio organiza las ideas y las palabras, mientras la Luna reacciona según lo que siente. Su interacción muestra si el diálogo puede conectar con la emoción o si la lógica y la sensibilidad necesitan un puente más consciente.",
    "Vous pouvez résoudre beaucoup de situations lorsque vous prenez le temps de distinguer les faits, les émotions et les attentes.": "Pueden resolver muchas situaciones cuando se toman el tiempo de distinguir los hechos, las emociones y las expectativas.",
    "Une discussion peut déraper lorsque l’un cherche une solution pendant que l’autre souhaite d’abord être entendu.": "Una conversación puede desviarse cuando una persona busca una solución mientras la otra primero quiere sentirse escuchada.",
    "Avant de répondre, demandez : « Veux-tu une solution, un avis ou simplement être écouté ? »": "Antes de responder, pregunte: «¿Quieres una solución, una opinión o simplemente que te escuche?»",
    "Corps et proximité": "Cuerpo y cercanía",
    "Sexualité et intimité": "Sexualidad e intimidad",
    "L’intimité révèle comment désir, confiance, tendresse et vulnérabilité se rencontrent dans la relation.": "La intimidad revela cómo el deseo, la confianza, la ternura y la vulnerabilidad se encuentran en la relación.",
    "L’alchimie vécue": "Vivir la química",
    "Vénus décrit la manière d’attirer, de recevoir et de créer le plaisir, tandis que Mars représente l’élan, l’initiative et le désir. Leur rencontre montre le rythme de l’attirance et la façon dont l’intimité peut rester vivante.": "Venus describe la manera de atraer, recibir y crear placer, mientras Marte representa el impulso, la iniciativa y el deseo. Su encuentro muestra el ritmo de la atracción y cómo la intimidad puede mantenerse viva.",
    "Votre alchimie peut devenir un langage puissant de réconciliation, de confiance et de présence.": "Su química puede convertirse en un poderoso lenguaje de reconciliación, confianza y presencia.",
    "Les différences de rythme, de spontanéité ou de besoin affectif peuvent être mal interprétées comme un manque d’amour.": "Las diferencias de ritmo, espontaneidad o necesidad afectiva pueden interpretarse erróneamente como falta de amor.",
    "Parlez ouvertement de vos besoins et de vos limites sans attendre qu’ils soient devinés.": "Hablen abiertamente de sus necesidades y límites sin esperar que la otra persona los adivine.",
    "Ressources et stabilité": "Recursos y estabilidad",
    "Argent et sécurité matérielle": "Dinero y seguridad material",
    "Les finances mettent en lumière les valeurs, les priorités, le besoin de sécurité et la manière de prendre des décisions concrètes.": "Las finanzas ponen de relieve los valores, las prioridades, la necesidad de seguridad y la manera de tomar decisiones concretas.",
    "Construire sans se limiter": "Construir sin limitarse",
    "Vénus parle des valeurs et du plaisir, tandis que Saturne décrit la prudence, la responsabilité et le long terme. Leur interaction montre comment vous pouvez équilibrer dépenses, sécurité, projets et qualité de vie.": "Venus habla de valores y placer, mientras Saturno describe prudencia, responsabilidad y largo plazo. Su interacción muestra cómo pueden equilibrar gastos, seguridad, proyectos y calidad de vida.",
    "Une vision claire et des objectifs partagés peuvent vous aider à construire une stabilité durable.": "Una visión clara y objetivos compartidos pueden ayudarles a construir una estabilidad duradera.",
    "L’un peut privilégier la sécurité alors que l’autre souhaite davantage profiter du présent ou investir dans des expériences.": "Una persona puede priorizar la seguridad mientras la otra desea disfrutar más del presente o invertir en experiencias.",
    "Décidez ensemble d’un budget pour les obligations, l’épargne et le plaisir afin que personne ne se sente contrôlé ou négligé.": "Decidan juntos un presupuesto para obligaciones, ahorro y disfrute para que nadie se sienta controlado o descuidado.",
    "Ambition et réalisation": "Ambición y realización",
    "Carrière et ambitions": "Carrera y ambiciones",
    "Le couple influence la confiance, la motivation, les choix professionnels et la capacité à soutenir les objectifs de chacun.": "La relación influye en la confianza, la motivación, las decisiones profesionales y la capacidad de apoyar los objetivos de cada uno.",
    "Grandir sans se rivaliser": "Crecer sin competir",
    "Le Soleil représente l’identité et l’accomplissement, tandis que Jupiter amplifie la confiance, l’ambition et la vision. Cette combinaison montre comment vous pouvez encourager la réussite sans transformer les objectifs personnels en compétition.": "El Sol representa la identidad y la realización, mientras Júpiter amplifica la confianza, la ambición y la visión. Esta combinación muestra cómo pueden apoyar el éxito sin convertir los objetivos personales en una competencia.",
    "Vous pouvez devenir une véritable équipe lorsque chacun célèbre les avancées de l’autre et partage ses ressources.": "Pueden convertirse en un verdadero equipo cuando cada persona celebra los avances de la otra y comparte sus recursos.",
    "La réussite, le temps consacré au travail ou les différences d’ambition peuvent créer distance ou comparaison.": "El éxito, el tiempo dedicado al trabajo o las diferencias de ambición pueden crear distancia o comparación.",
    "Soutenez les projets personnels tout en protégeant des moments où la relation n’est pas reléguée au second plan.": "Apoyen los proyectos personales y protejan al mismo tiempo momentos en los que la relación no quede relegada a un segundo plano.",
    "Vision commune": "Visión compartida",
    "Vos projets de vie": "Sus proyectos de vida",
    "Les projets communs donnent une direction au couple et transforment les aspirations individuelles en construction partagée.": "Los proyectos compartidos dan dirección a la relación y transforman las aspiraciones individuales en una construcción común.",
    "Rêver et concrétiser": "Soñar y hacerlo realidad",
    "Jupiter ouvre les possibilités et Saturne donne une structure. Ensemble, ils montrent comment le couple peut transformer une idée en projet réel, à condition d’équilibrer enthousiasme, patience et responsabilité.": "Júpiter abre posibilidades y Saturno aporta estructura. Juntos muestran cómo la pareja puede transformar una idea en un proyecto real equilibrando entusiasmo, paciencia y responsabilidad.",
    "Vous pouvez avancer loin lorsque l’un apporte la vision et l’autre la méthode, ou lorsque vous alternez naturellement ces rôles.": "Pueden avanzar mucho cuando una persona aporta la visión y la otra el método, o cuando alternan estos papeles de forma natural.",
    "Le projet peut ralentir si l’un juge l’autre trop prudent, trop ambitieux ou insuffisamment engagé.": "Un proyecto puede ralentizarse si una persona considera a la otra demasiado prudente, demasiado ambiciosa o poco comprometida.",
    "Définissez une vision commune, puis divisez-la en étapes concrètes avec des responsabilités et des échéances réalistes.": "Definan una visión compartida y divídanla en pasos concretos con responsabilidades y plazos realistas.",
    "Durée et évolution": "Duración y evolución",
    "Votre potentiel à long terme": "Su potencial a largo plazo",
    "La durée dépend moins d’une perfection immédiate que de la capacité à grandir, réparer, s’adapter et renouveler le lien.": "La duración depende menos de una perfección inmediata que de la capacidad de crecer, reparar, adaptarse y renovar el vínculo.",
    "Construire dans le temps": "Construir a lo largo del tiempo",
    "Saturne décrit l’engagement et la résistance du lien, tandis que Jupiter représente l’évolution, l’espoir et la croissance. Leur équilibre révèle si le couple sait rester stable sans cesser d’avancer.": "Saturno describe el compromiso y la resistencia del vínculo, mientras Júpiter representa la evolución, la esperanza y el crecimiento. Su equilibrio revela si la pareja sabe mantenerse estable sin dejar de avanzar.",
    "La relation peut durer lorsqu’elle conserve une direction, des engagements clairs et la capacité de créer de nouvelles expériences.": "La relación puede durar cuando mantiene una dirección, compromisos claros y la capacidad de crear nuevas experiencias.",
    "La stabilité peut devenir rigidité, tandis que le besoin de changement peut être vécu comme une menace.": "La estabilidad puede convertirse en rigidez, mientras que la necesidad de cambio puede vivirse como una amenaza.",
    "Réévaluez régulièrement vos projets, vos besoins et vos règles de couple afin que l’engagement reste vivant plutôt que figé.": "Reevalúen regularmente sus proyectos, necesidades y reglas de pareja para que el compromiso siga vivo en lugar de quedar rígido.",
    "Cette interaction soutient la coopération et permet à cette dimension de la vie commune de se développer avec davantage de naturel.": "Esta interacción favorece la cooperación y permite que esta dimensión de la vida en común se desarrolle con mayor naturalidad.",
    "Cette connexion intensifie fortement ce thème et le rend particulièrement visible dans votre quotidien de couple.": "Esta conexión intensifica fuertemente este tema y lo hace especialmente visible en la vida cotidiana de la pareja.",
    "Cette tension demande des décisions claires et une meilleure répartition des besoins, des efforts ou des responsabilités.": "Esta tensión requiere decisiones claras y una mejor distribución de necesidades, esfuerzos o responsabilidades.",
    "Cette polarité montre deux approches différentes qui peuvent devenir complémentaires lorsque chacune est reconnue.": "Esta polaridad muestra dos enfoques diferentes que pueden volverse complementarios cuando cada uno es reconocido.",
    "Cette interaction demande des ajustements précis et une communication régulière pour éviter l’accumulation de frustration.": "Esta interacción requiere ajustes precisos y una comunicación regular para evitar que se acumule la frustración.",
    "Influences astrologiques principales": "Principales influencias astrológicas",
    "Votre potentiel": "Su potencial",
    "Votre point de vigilance": "Su punto de atención",
    "Votre clé concrète": "Su clave práctica",
    "Luna Astralis • Rapport de synastrie": "Luna Astralis • Informe de sinastría",
    "Première personne": "Primera persona",
    "Deuxième personne": "Segunda persona",
    "Non précisé": "No especificado",
    "Position non disponible": "Posición no disponible"
  },
  "de": {
    "Rythmes et habitudes": "Rhythmen und Gewohnheiten",
    "Votre vie quotidienne": "Ihr Alltag",
    "La compatibilité se construit aussi dans les horaires, les responsabilités, les habitudes et les petits gestes répétés.": "Kompatibilität entsteht auch durch Zeitpläne, Verantwortlichkeiten, Gewohnheiten und die kleinen Gesten des Alltags.",
    "Partager le réel": "Den Alltag teilen",
    "La Lune montre les habitudes et les besoins de confort, tandis que Saturne décrit l’organisation, les devoirs et la stabilité. Leur combinaison révèle comment vous pouvez créer un quotidien rassurant sans laisser la routine étouffer la relation.": "Der Mond zeigt Gewohnheiten und das Bedürfnis nach Komfort, während Saturn Organisation, Pflichten und Stabilität beschreibt. Ihre Kombination zeigt, wie Sie einen verlässlichen Alltag schaffen können, ohne dass Routine die Beziehung erstickt.",
    "Vous pouvez bâtir des repères solides lorsque chacun participe concrètement et respecte le rythme naturel de l’autre.": "Sie können solide Grundlagen schaffen, wenn beide konkret beitragen und den natürlichen Rhythmus des anderen respektieren.",
    "Les frustrations s’accumulent lorsque les tâches, les horaires ou la charge mentale semblent déséquilibrés.": "Frustrationen können sich aufbauen, wenn Aufgaben, Zeitpläne oder die mentale Belastung unausgewogen wirken.",
    "Définissez clairement ce qui appartient à chacun et conservez aussi des moments spontanés qui ne servent aucun objectif pratique.": "Definieren Sie klar die Verantwortlichkeiten jedes Einzelnen und bewahren Sie auch spontane Momente ohne praktischen Zweck.",
    "Sécurité et appartenance": "Sicherheit und Zugehörigkeit",
    "Famille et foyer": "Familie und Zuhause",
    "Le foyer représente l’endroit où le couple cherche protection, intimité, continuité et sentiment d’appartenance.": "Das Zuhause ist der Ort, an dem die Beziehung Schutz, Intimität, Kontinuität und Zugehörigkeit sucht.",
    "Créer un refuge commun": "Einen gemeinsamen Rückzugsort schaffen",
    "La Lune décrit le besoin de sécurité émotionnelle et Vénus la manière de créer douceur, harmonie et plaisir. Ensemble, elles montrent comment le couple peut construire un climat familial chaleureux et respectueux.": "Der Mond beschreibt das Bedürfnis nach emotionaler Sicherheit, Venus die Art, wie Zärtlichkeit, Harmonie und Freude entstehen. Gemeinsam zeigen sie, wie ein warmes und respektvolles Familienklima aufgebaut werden kann.",
    "La tendresse, l’écoute et les traditions partagées peuvent devenir une importante source de cohésion.": "Zärtlichkeit, Zuhören und gemeinsame Traditionen können zu einer wichtigen Quelle des Zusammenhalts werden.",
    "Les attentes familiales, les habitudes héritées ou les besoins de proximité peuvent différer davantage qu’il n’y paraît.": "Familiäre Erwartungen, übernommene Gewohnheiten oder Nähebedürfnisse können stärker voneinander abweichen, als es zunächst scheint.",
    "Créez vos propres traditions au lieu de reproduire automatiquement celles de vos familles d’origine.": "Schaffen Sie Ihre eigenen Traditionen, statt automatisch jene Ihrer Herkunftsfamilien zu wiederholen.",
    "Dialogue dans le réel": "Dialog im Alltag",
    "Communication approfondie": "Vertiefte Kommunikation",
    "Au-delà du style mental, cette page observe la manière dont vous discutez des décisions, des émotions et des sujets sensibles.": "Über den Denkstil hinaus betrachtet diese Seite, wie Sie über Entscheidungen, Gefühle und sensible Themen sprechen.",
    "Parler pour être compris": "Sprechen, um verstanden zu werden",
    "Mercure organise les idées et les mots, tandis que la Lune réagit selon le ressenti. Leur interaction montre si le dialogue peut rejoindre l’émotion ou si la logique et la sensibilité ont besoin d’un pont plus conscient.": "Merkur ordnet Ideen und Worte, während der Mond aus dem Gefühl heraus reagiert. Ihre Wechselwirkung zeigt, ob der Dialog die emotionale Ebene erreicht oder ob Logik und Sensibilität eine bewusstere Brücke brauchen.",
    "Vous pouvez résoudre beaucoup de situations lorsque vous prenez le temps de distinguer les faits, les émotions et les attentes.": "Viele Situationen lassen sich lösen, wenn Sie sich Zeit nehmen, Fakten, Gefühle und Erwartungen voneinander zu unterscheiden.",
    "Une discussion peut déraper lorsque l’un cherche une solution pendant que l’autre souhaite d’abord être entendu.": "Ein Gespräch kann entgleisen, wenn eine Person nach einer Lösung sucht, während die andere zunächst gehört werden möchte.",
    "Avant de répondre, demandez : « Veux-tu une solution, un avis ou simplement être écouté ? »": "Fragen Sie vor einer Antwort: „Möchtest du eine Lösung, eine Meinung oder einfach nur gehört werden?“",
    "Corps et proximité": "Körper und Nähe",
    "Sexualité et intimité": "Sexualität und Intimität",
    "L’intimité révèle comment désir, confiance, tendresse et vulnérabilité se rencontrent dans la relation.": "Intimität zeigt, wie Verlangen, Vertrauen, Zärtlichkeit und Verletzlichkeit in der Beziehung zusammenkommen.",
    "L’alchimie vécue": "Gelebte Chemie",
    "Vénus décrit la manière d’attirer, de recevoir et de créer le plaisir, tandis que Mars représente l’élan, l’initiative et le désir. Leur rencontre montre le rythme de l’attirance et la façon dont l’intimité peut rester vivante.": "Venus beschreibt, wie Anziehung, Empfangen und Genuss gestaltet werden, während Mars Antrieb, Initiative und Verlangen verkörpert. Ihr Zusammenspiel zeigt den Rhythmus der Anziehung und wie Intimität lebendig bleiben kann.",
    "Votre alchimie peut devenir un langage puissant de réconciliation, de confiance et de présence.": "Ihre Chemie kann zu einer kraftvollen Sprache von Versöhnung, Vertrauen und Präsenz werden.",
    "Les différences de rythme, de spontanéité ou de besoin affectif peuvent être mal interprétées comme un manque d’amour.": "Unterschiede im Rhythmus, in der Spontaneität oder im emotionalen Bedürfnis können fälschlich als mangelnde Liebe verstanden werden.",
    "Parlez ouvertement de vos besoins et de vos limites sans attendre qu’ils soient devinés.": "Sprechen Sie offen über Ihre Bedürfnisse und Grenzen, statt zu erwarten, dass sie erraten werden.",
    "Ressources et stabilité": "Ressourcen und Stabilität",
    "Argent et sécurité matérielle": "Geld und materielle Sicherheit",
    "Les finances mettent en lumière les valeurs, les priorités, le besoin de sécurité et la manière de prendre des décisions concrètes.": "Finanzen zeigen Werte, Prioritäten, Sicherheitsbedürfnisse und die Art, konkrete Entscheidungen zu treffen.",
    "Construire sans se limiter": "Aufbauen, ohne sich einzuengen",
    "Vénus parle des valeurs et du plaisir, tandis que Saturne décrit la prudence, la responsabilité et le long terme. Leur interaction montre comment vous pouvez équilibrer dépenses, sécurité, projets et qualité de vie.": "Venus steht für Werte und Genuss, Saturn für Vorsicht, Verantwortung und Langfristigkeit. Ihr Zusammenspiel zeigt, wie Ausgaben, Sicherheit, Projekte und Lebensqualität ausgewogen werden können.",
    "Une vision claire et des objectifs partagés peuvent vous aider à construire une stabilité durable.": "Eine klare Vision und gemeinsame Ziele können Ihnen helfen, dauerhafte Stabilität aufzubauen.",
    "L’un peut privilégier la sécurité alors que l’autre souhaite davantage profiter du présent ou investir dans des expériences.": "Eine Person kann Sicherheit bevorzugen, während die andere mehr im Jetzt leben oder in Erfahrungen investieren möchte.",
    "Décidez ensemble d’un budget pour les obligations, l’épargne et le plaisir afin que personne ne se sente contrôlé ou négligé.": "Legen Sie gemeinsam ein Budget für Verpflichtungen, Sparen und Genuss fest, damit sich niemand kontrolliert oder vernachlässigt fühlt.",
    "Ambition et réalisation": "Ehrgeiz und Verwirklichung",
    "Carrière et ambitions": "Karriere und Ambitionen",
    "Le couple influence la confiance, la motivation, les choix professionnels et la capacité à soutenir les objectifs de chacun.": "Die Beziehung beeinflusst Selbstvertrauen, Motivation, berufliche Entscheidungen und die Fähigkeit, die Ziele des anderen zu unterstützen.",
    "Grandir sans se rivaliser": "Wachsen, ohne zu konkurrieren",
    "Le Soleil représente l’identité et l’accomplissement, tandis que Jupiter amplifie la confiance, l’ambition et la vision. Cette combinaison montre comment vous pouvez encourager la réussite sans transformer les objectifs personnels en compétition.": "Die Sonne steht für Identität und Selbstverwirklichung, Jupiter verstärkt Vertrauen, Ehrgeiz und Vision. Diese Kombination zeigt, wie Sie Erfolg fördern können, ohne persönliche Ziele in Konkurrenz zu verwandeln.",
    "Vous pouvez devenir une véritable équipe lorsque chacun célèbre les avancées de l’autre et partage ses ressources.": "Sie können zu einem echten Team werden, wenn beide die Fortschritte des anderen feiern und ihre Ressourcen teilen.",
    "La réussite, le temps consacré au travail ou les différences d’ambition peuvent créer distance ou comparaison.": "Erfolg, Arbeitszeit oder unterschiedliche Ambitionen können Distanz oder Vergleiche erzeugen.",
    "Soutenez les projets personnels tout en protégeant des moments où la relation n’est pas reléguée au second plan.": "Unterstützen Sie persönliche Projekte und schützen Sie zugleich Zeiten, in denen die Beziehung nicht in den Hintergrund rückt.",
    "Vision commune": "Gemeinsame Vision",
    "Vos projets de vie": "Ihre Lebenspläne",
    "Les projets communs donnent une direction au couple et transforment les aspirations individuelles en construction partagée.": "Gemeinsame Projekte geben der Beziehung Richtung und verwandeln individuelle Wünsche in etwas, das gemeinsam aufgebaut wird.",
    "Rêver et concrétiser": "Träumen und verwirklichen",
    "Jupiter ouvre les possibilités et Saturne donne une structure. Ensemble, ils montrent comment le couple peut transformer une idée en projet réel, à condition d’équilibrer enthousiasme, patience et responsabilité.": "Jupiter eröffnet Möglichkeiten, Saturn gibt Struktur. Gemeinsam zeigen sie, wie eine Idee zu einem realen Projekt werden kann, wenn Begeisterung, Geduld und Verantwortung ausgeglichen werden.",
    "Vous pouvez avancer loin lorsque l’un apporte la vision et l’autre la méthode, ou lorsque vous alternez naturellement ces rôles.": "Sie können weit kommen, wenn eine Person die Vision und die andere die Methode einbringt – oder wenn Sie diese Rollen natürlich abwechseln.",
    "Le projet peut ralentir si l’un juge l’autre trop prudent, trop ambitieux ou insuffisamment engagé.": "Ein Projekt kann ins Stocken geraten, wenn eine Person die andere für zu vorsichtig, zu ehrgeizig oder nicht engagiert genug hält.",
    "Définissez une vision commune, puis divisez-la en étapes concrètes avec des responsabilités et des échéances réalistes.": "Definieren Sie eine gemeinsame Vision und teilen Sie sie anschließend in konkrete Schritte mit Verantwortlichkeiten und realistischen Fristen.",
    "Durée et évolution": "Beständigkeit und Entwicklung",
    "Votre potentiel à long terme": "Ihr langfristiges Potenzial",
    "La durée dépend moins d’une perfection immédiate que de la capacité à grandir, réparer, s’adapter et renouveler le lien.": "Dauer hängt weniger von unmittelbarer Perfektion ab als von der Fähigkeit, zu wachsen, zu reparieren, sich anzupassen und die Bindung zu erneuern.",
    "Construire dans le temps": "Langfristig aufbauen",
    "Saturne décrit l’engagement et la résistance du lien, tandis que Jupiter représente l’évolution, l’espoir et la croissance. Leur équilibre révèle si le couple sait rester stable sans cesser d’avancer.": "Saturn beschreibt Bindung und Widerstandskraft, Jupiter Entwicklung, Hoffnung und Wachstum. Ihr Gleichgewicht zeigt, ob die Beziehung stabil bleiben kann, ohne ihre Entwicklung zu stoppen.",
    "La relation peut durer lorsqu’elle conserve une direction, des engagements clairs et la capacité de créer de nouvelles expériences.": "Die Beziehung kann bestehen, wenn sie eine Richtung, klare Verpflichtungen und die Fähigkeit zu neuen Erfahrungen bewahrt.",
    "La stabilité peut devenir rigidité, tandis que le besoin de changement peut être vécu comme une menace.": "Stabilität kann zu Starrheit werden, während das Bedürfnis nach Veränderung als Bedrohung erlebt werden kann.",
    "Réévaluez régulièrement vos projets, vos besoins et vos règles de couple afin que l’engagement reste vivant plutôt que figé.": "Überprüfen Sie regelmäßig Ihre Projekte, Bedürfnisse und Beziehungsregeln, damit die Bindung lebendig bleibt, statt zu erstarren.",
    "Cette interaction soutient la coopération et permet à cette dimension de la vie commune de se développer avec davantage de naturel.": "Diese Wechselwirkung unterstützt Zusammenarbeit und lässt diesen Bereich des gemeinsamen Lebens natürlicher wachsen.",
    "Cette connexion intensifie fortement ce thème et le rend particulièrement visible dans votre quotidien de couple.": "Diese Verbindung verstärkt dieses Thema deutlich und macht es im gemeinsamen Alltag besonders sichtbar.",
    "Cette tension demande des décisions claires et une meilleure répartition des besoins, des efforts ou des responsabilités.": "Diese Spannung verlangt klare Entscheidungen und eine bessere Verteilung von Bedürfnissen, Aufwand oder Verantwortung.",
    "Cette polarité montre deux approches différentes qui peuvent devenir complémentaires lorsque chacune est reconnue.": "Diese Polarität zeigt zwei unterschiedliche Ansätze, die sich ergänzen können, wenn beide anerkannt werden.",
    "Cette interaction demande des ajustements précis et une communication régulière pour éviter l’accumulation de frustration.": "Diese Wechselwirkung verlangt gezielte Anpassungen und regelmäßige Kommunikation, damit sich Frustration nicht aufstaut.",
    "Influences astrologiques principales": "Wichtigste astrologische Einflüsse",
    "Votre potentiel": "Ihr Potenzial",
    "Votre point de vigilance": "Ihr Aufmerksamkeitspunkt",
    "Votre clé concrète": "Ihr praktischer Schlüssel",
    "Luna Astralis • Rapport de synastrie": "Luna Astralis • Synastrie-Bericht",
    "Première personne": "Erste Person",
    "Deuxième personne": "Zweite Person",
    "Non précisé": "Nicht angegeben",
    "Position non disponible": "Position nicht verfügbar"
  },
  "it": {
    "Rythmes et habitudes": "Ritmi e abitudini",
    "Votre vie quotidienne": "La vostra vita quotidiana",
    "La compatibilité se construit aussi dans les horaires, les responsabilités, les habitudes et les petits gestes répétés.": "La compatibilità si costruisce anche attraverso orari, responsabilità, abitudini e piccoli gesti ripetuti ogni giorno.",
    "Partager le réel": "Condividere la vita quotidiana",
    "La Lune montre les habitudes et les besoins de confort, tandis que Saturne décrit l’organisation, les devoirs et la stabilité. Leur combinaison révèle comment vous pouvez créer un quotidien rassurant sans laisser la routine étouffer la relation.": "La Luna mostra le abitudini e il bisogno di comfort, mentre Saturno descrive organizzazione, doveri e stabilità. La loro combinazione rivela come possiate creare una quotidianità rassicurante senza lasciare che la routine soffochi la relazione.",
    "Vous pouvez bâtir des repères solides lorsque chacun participe concrètement et respecte le rythme naturel de l’autre.": "Potete costruire basi solide quando ciascuno contribuisce concretamente e rispetta il ritmo naturale dell'altro.",
    "Les frustrations s’accumulent lorsque les tâches, les horaires ou la charge mentale semblent déséquilibrés.": "Le frustrazioni possono accumularsi quando compiti, orari o carico mentale sembrano sbilanciati.",
    "Définissez clairement ce qui appartient à chacun et conservez aussi des moments spontanés qui ne servent aucun objectif pratique.": "Definite chiaramente le responsabilità di ciascuno e conservate anche momenti spontanei senza alcun obiettivo pratico.",
    "Sécurité et appartenance": "Sicurezza e appartenenza",
    "Famille et foyer": "Famiglia e casa",
    "Le foyer représente l’endroit où le couple cherche protection, intimité, continuité et sentiment d’appartenance.": "La casa rappresenta il luogo in cui la coppia cerca protezione, intimità, continuità e senso di appartenenza.",
    "Créer un refuge commun": "Creare un rifugio comune",
    "La Lune décrit le besoin de sécurité émotionnelle et Vénus la manière de créer douceur, harmonie et plaisir. Ensemble, elles montrent comment le couple peut construire un climat familial chaleureux et respectueux.": "La Luna descrive il bisogno di sicurezza emotiva e Venere il modo di creare dolcezza, armonia e piacere. Insieme mostrano come la coppia possa costruire un clima familiare caldo e rispettoso.",
    "La tendresse, l’écoute et les traditions partagées peuvent devenir une importante source de cohésion.": "La tenerezza, l'ascolto e le tradizioni condivise possono diventare un'importante fonte di coesione.",
    "Les attentes familiales, les habitudes héritées ou les besoins de proximité peuvent différer davantage qu’il n’y paraît.": "Le aspettative familiari, le abitudini ereditate o i bisogni di vicinanza possono differire più di quanto sembri.",
    "Créez vos propres traditions au lieu de reproduire automatiquement celles de vos familles d’origine.": "Create le vostre tradizioni invece di riprodurre automaticamente quelle delle famiglie d'origine.",
    "Dialogue dans le réel": "Dialogo nella vita quotidiana",
    "Communication approfondie": "Comunicazione profonda",
    "Au-delà du style mental, cette page observe la manière dont vous discutez des décisions, des émotions et des sujets sensibles.": "Oltre allo stile mentale, questa pagina osserva il modo in cui discutete di decisioni, emozioni e temi delicati.",
    "Parler pour être compris": "Parlare per essere compresi",
    "Mercure organise les idées et les mots, tandis que la Lune réagit selon le ressenti. Leur interaction montre si le dialogue peut rejoindre l’émotion ou si la logique et la sensibilité ont besoin d’un pont plus conscient.": "Mercurio organizza idee e parole, mentre la Luna reagisce secondo ciò che sente. La loro interazione mostra se il dialogo riesce a raggiungere l'emozione o se logica e sensibilità hanno bisogno di un ponte più consapevole.",
    "Vous pouvez résoudre beaucoup de situations lorsque vous prenez le temps de distinguer les faits, les émotions et les attentes.": "Potete risolvere molte situazioni quando vi prendete il tempo di distinguere fatti, emozioni e aspettative.",
    "Une discussion peut déraper lorsque l’un cherche une solution pendant que l’autre souhaite d’abord être entendu.": "Una discussione può deviare quando una persona cerca una soluzione mentre l'altra desidera prima essere ascoltata.",
    "Avant de répondre, demandez : « Veux-tu une solution, un avis ou simplement être écouté ? »": "Prima di rispondere, chiedete: «Vuoi una soluzione, un parere o semplicemente essere ascoltato?»",
    "Corps et proximité": "Corpo e vicinanza",
    "Sexualité et intimité": "Sessualità e intimità",
    "L’intimité révèle comment désir, confiance, tendresse et vulnérabilité se rencontrent dans la relation.": "L'intimità rivela come desiderio, fiducia, tenerezza e vulnerabilità si incontrano nella relazione.",
    "L’alchimie vécue": "Vivere l'alchimia",
    "Vénus décrit la manière d’attirer, de recevoir et de créer le plaisir, tandis que Mars représente l’élan, l’initiative et le désir. Leur rencontre montre le rythme de l’attirance et la façon dont l’intimité peut rester vivante.": "Venere descrive il modo di attrarre, ricevere e creare piacere, mentre Marte rappresenta slancio, iniziativa e desiderio. Il loro incontro mostra il ritmo dell'attrazione e come l'intimità possa restare viva.",
    "Votre alchimie peut devenir un langage puissant de réconciliation, de confiance et de présence.": "La vostra alchimia può diventare un potente linguaggio di riconciliazione, fiducia e presenza.",
    "Les différences de rythme, de spontanéité ou de besoin affectif peuvent être mal interprétées comme un manque d’amour.": "Le differenze di ritmo, spontaneità o bisogno affettivo possono essere interpretate erroneamente come mancanza d'amore.",
    "Parlez ouvertement de vos besoins et de vos limites sans attendre qu’ils soient devinés.": "Parlate apertamente dei vostri bisogni e limiti senza aspettarvi che vengano intuiti.",
    "Ressources et stabilité": "Risorse e stabilità",
    "Argent et sécurité matérielle": "Denaro e sicurezza materiale",
    "Les finances mettent en lumière les valeurs, les priorités, le besoin de sécurité et la manière de prendre des décisions concrètes.": "Le finanze mettono in luce valori, priorità, bisogno di sicurezza e modo di prendere decisioni concrete.",
    "Construire sans se limiter": "Costruire senza limitarsi",
    "Vénus parle des valeurs et du plaisir, tandis que Saturne décrit la prudence, la responsabilité et le long terme. Leur interaction montre comment vous pouvez équilibrer dépenses, sécurité, projets et qualité de vie.": "Venere parla di valori e piacere, mentre Saturno descrive prudenza, responsabilità e lungo termine. La loro interazione mostra come possiate equilibrare spese, sicurezza, progetti e qualità della vita.",
    "Une vision claire et des objectifs partagés peuvent vous aider à construire une stabilité durable.": "Una visione chiara e obiettivi condivisi possono aiutarvi a costruire una stabilità duratura.",
    "L’un peut privilégier la sécurité alors que l’autre souhaite davantage profiter du présent ou investir dans des expériences.": "Una persona può privilegiare la sicurezza mentre l'altra desidera godersi maggiormente il presente o investire in esperienze.",
    "Décidez ensemble d’un budget pour les obligations, l’épargne et le plaisir afin que personne ne se sente contrôlé ou négligé.": "Decidete insieme un budget per obblighi, risparmio e piacere, affinché nessuno si senta controllato o trascurato.",
    "Ambition et réalisation": "Ambizione e realizzazione",
    "Carrière et ambitions": "Carriera e ambizioni",
    "Le couple influence la confiance, la motivation, les choix professionnels et la capacité à soutenir les objectifs de chacun.": "La relazione influenza fiducia, motivazione, scelte professionali e capacità di sostenere gli obiettivi di ciascuno.",
    "Grandir sans se rivaliser": "Crescere senza competere",
    "Le Soleil représente l’identité et l’accomplissement, tandis que Jupiter amplifie la confiance, l’ambition et la vision. Cette combinaison montre comment vous pouvez encourager la réussite sans transformer les objectifs personnels en compétition.": "Il Sole rappresenta identità e realizzazione, mentre Giove amplifica fiducia, ambizione e visione. Questa combinazione mostra come possiate incoraggiare il successo senza trasformare gli obiettivi personali in competizione.",
    "Vous pouvez devenir une véritable équipe lorsque chacun célèbre les avancées de l’autre et partage ses ressources.": "Potete diventare una vera squadra quando ciascuno celebra i progressi dell'altro e condivide le proprie risorse.",
    "La réussite, le temps consacré au travail ou les différences d’ambition peuvent créer distance ou comparaison.": "Il successo, il tempo dedicato al lavoro o le differenze di ambizione possono creare distanza o confronto.",
    "Soutenez les projets personnels tout en protégeant des moments où la relation n’est pas reléguée au second plan.": "Sostenete i progetti personali proteggendo al tempo stesso momenti in cui la relazione non venga relegata in secondo piano.",
    "Vision commune": "Visione condivisa",
    "Vos projets de vie": "I vostri progetti di vita",
    "Les projets communs donnent une direction au couple et transforment les aspirations individuelles en construction partagée.": "I progetti comuni danno una direzione alla coppia e trasformano le aspirazioni individuali in una costruzione condivisa.",
    "Rêver et concrétiser": "Sognare e concretizzare",
    "Jupiter ouvre les possibilités et Saturne donne une structure. Ensemble, ils montrent comment le couple peut transformer une idée en projet réel, à condition d’équilibrer enthousiasme, patience et responsabilité.": "Giove apre possibilità e Saturno dà struttura. Insieme mostrano come la coppia possa trasformare un'idea in un progetto reale equilibrando entusiasmo, pazienza e responsabilità.",
    "Vous pouvez avancer loin lorsque l’un apporte la vision et l’autre la méthode, ou lorsque vous alternez naturellement ces rôles.": "Potete andare lontano quando una persona porta la visione e l'altra il metodo, oppure quando alternate naturalmente questi ruoli.",
    "Le projet peut ralentir si l’un juge l’autre trop prudent, trop ambitieux ou insuffisamment engagé.": "Un progetto può rallentare se una persona considera l'altra troppo prudente, troppo ambiziosa o poco coinvolta.",
    "Définissez une vision commune, puis divisez-la en étapes concrètes avec des responsabilités et des échéances réalistes.": "Definite una visione comune e dividetela poi in tappe concrete con responsabilità e scadenze realistiche.",
    "Durée et évolution": "Durata ed evoluzione",
    "Votre potentiel à long terme": "Il vostro potenziale a lungo termine",
    "La durée dépend moins d’une perfection immédiate que de la capacité à grandir, réparer, s’adapter et renouveler le lien.": "La durata dipende meno da una perfezione immediata che dalla capacità di crescere, riparare, adattarsi e rinnovare il legame.",
    "Construire dans le temps": "Costruire nel tempo",
    "Saturne décrit l’engagement et la résistance du lien, tandis que Jupiter représente l’évolution, l’espoir et la croissance. Leur équilibre révèle si le couple sait rester stable sans cesser d’avancer.": "Saturno descrive l'impegno e la resistenza del legame, mentre Giove rappresenta evoluzione, speranza e crescita. Il loro equilibrio rivela se la coppia sa restare stabile senza smettere di avanzare.",
    "La relation peut durer lorsqu’elle conserve une direction, des engagements clairs et la capacité de créer de nouvelles expériences.": "La relazione può durare quando conserva una direzione, impegni chiari e la capacità di creare nuove esperienze.",
    "La stabilité peut devenir rigidité, tandis que le besoin de changement peut être vécu comme une menace.": "La stabilità può diventare rigidità, mentre il bisogno di cambiamento può essere vissuto come una minaccia.",
    "Réévaluez régulièrement vos projets, vos besoins et vos règles de couple afin que l’engagement reste vivant plutôt que figé.": "Rivalutate regolarmente progetti, bisogni e regole di coppia affinché l'impegno resti vivo invece di irrigidirsi.",
    "Cette interaction soutient la coopération et permet à cette dimension de la vie commune de se développer avec davantage de naturel.": "Questa interazione sostiene la cooperazione e permette a questa dimensione della vita comune di svilupparsi con maggiore naturalezza.",
    "Cette connexion intensifie fortement ce thème et le rend particulièrement visible dans votre quotidien de couple.": "Questa connessione intensifica fortemente questo tema e lo rende particolarmente visibile nella quotidianità di coppia.",
    "Cette tension demande des décisions claires et une meilleure répartition des besoins, des efforts ou des responsabilités.": "Questa tensione richiede decisioni chiare e una migliore distribuzione di bisogni, sforzi o responsabilità.",
    "Cette polarité montre deux approches différentes qui peuvent devenir complémentaires lorsque chacune est reconnue.": "Questa polarità mostra due approcci diversi che possono diventare complementari quando entrambi vengono riconosciuti.",
    "Cette interaction demande des ajustements précis et une communication régulière pour éviter l’accumulation de frustration.": "Questa interazione richiede adattamenti precisi e una comunicazione regolare per evitare l'accumulo di frustrazione.",
    "Influences astrologiques principales": "Principali influenze astrologiche",
    "Votre potentiel": "Il vostro potenziale",
    "Votre point de vigilance": "Il vostro punto di attenzione",
    "Votre clé concrète": "La vostra chiave pratica",
    "Luna Astralis • Rapport de synastrie": "Luna Astralis • Rapporto di sinastria",
    "Première personne": "Prima persona",
    "Deuxième personne": "Seconda persona",
    "Non précisé": "Non specificato",
    "Position non disponible": "Posizione non disponibile"
  },
  "pt": {
    "Rythmes et habitudes": "Ritmos e hábitos",
    "Votre vie quotidienne": "A sua vida quotidiana",
    "La compatibilité se construit aussi dans les horaires, les responsabilités, les habitudes et les petits gestes répétés.": "A compatibilidade também se constrói através dos horários, das responsabilidades, dos hábitos e dos pequenos gestos repetidos no dia a dia.",
    "Partager le réel": "Partilhar a vida quotidiana",
    "La Lune montre les habitudes et les besoins de confort, tandis que Saturne décrit l’organisation, les devoirs et la stabilité. Leur combinaison révèle comment vous pouvez créer un quotidien rassurant sans laisser la routine étouffer la relation.": "A Lua mostra os hábitos e a necessidade de conforto, enquanto Saturno descreve organização, deveres e estabilidade. A combinação revela como podem criar um quotidiano tranquilizador sem deixar que a rotina sufoque a relação.",
    "Vous pouvez bâtir des repères solides lorsque chacun participe concrètement et respecte le rythme naturel de l’autre.": "Podem construir bases sólidas quando cada pessoa contribui de forma concreta e respeita o ritmo natural da outra.",
    "Les frustrations s’accumulent lorsque les tâches, les horaires ou la charge mentale semblent déséquilibrés.": "As frustrações podem acumular-se quando tarefas, horários ou carga mental parecem desequilibrados.",
    "Définissez clairement ce qui appartient à chacun et conservez aussi des moments spontanés qui ne servent aucun objectif pratique.": "Definam claramente as responsabilidades de cada pessoa e preservem também momentos espontâneos sem qualquer objetivo prático.",
    "Sécurité et appartenance": "Segurança e pertença",
    "Famille et foyer": "Família e lar",
    "Le foyer représente l’endroit où le couple cherche protection, intimité, continuité et sentiment d’appartenance.": "O lar representa o lugar onde o casal procura proteção, intimidade, continuidade e um sentimento de pertença.",
    "Créer un refuge commun": "Criar um refúgio comum",
    "La Lune décrit le besoin de sécurité émotionnelle et Vénus la manière de créer douceur, harmonie et plaisir. Ensemble, elles montrent comment le couple peut construire un climat familial chaleureux et respectueux.": "A Lua descreve a necessidade de segurança emocional e Vénus a forma de criar ternura, harmonia e prazer. Juntas mostram como o casal pode construir um ambiente familiar acolhedor e respeitador.",
    "La tendresse, l’écoute et les traditions partagées peuvent devenir une importante source de cohésion.": "A ternura, a escuta e as tradições partilhadas podem tornar-se uma importante fonte de coesão.",
    "Les attentes familiales, les habitudes héritées ou les besoins de proximité peuvent différer davantage qu’il n’y paraît.": "As expectativas familiares, os hábitos herdados ou as necessidades de proximidade podem diferir mais do que parece.",
    "Créez vos propres traditions au lieu de reproduire automatiquement celles de vos familles d’origine.": "Criem as vossas próprias tradições em vez de reproduzir automaticamente as das famílias de origem.",
    "Dialogue dans le réel": "Diálogo na vida quotidiana",
    "Communication approfondie": "Comunicação aprofundada",
    "Au-delà du style mental, cette page observe la manière dont vous discutez des décisions, des émotions et des sujets sensibles.": "Para além do estilo mental, esta página observa a forma como discutem decisões, emoções e assuntos sensíveis.",
    "Parler pour être compris": "Falar para ser compreendido",
    "Mercure organise les idées et les mots, tandis que la Lune réagit selon le ressenti. Leur interaction montre si le dialogue peut rejoindre l’émotion ou si la logique et la sensibilité ont besoin d’un pont plus conscient.": "Mercúrio organiza ideias e palavras, enquanto a Lua reage segundo o que sente. A interação mostra se o diálogo consegue chegar à emoção ou se lógica e sensibilidade precisam de uma ponte mais consciente.",
    "Vous pouvez résoudre beaucoup de situations lorsque vous prenez le temps de distinguer les faits, les émotions et les attentes.": "Podem resolver muitas situações quando reservam tempo para distinguir factos, emoções e expectativas.",
    "Une discussion peut déraper lorsque l’un cherche une solution pendant que l’autre souhaite d’abord être entendu.": "Uma conversa pode descarrilar quando uma pessoa procura uma solução enquanto a outra quer primeiro ser ouvida.",
    "Avant de répondre, demandez : « Veux-tu une solution, un avis ou simplement être écouté ? »": "Antes de responder, pergunte: «Queres uma solução, uma opinião ou simplesmente ser ouvido?»",
    "Corps et proximité": "Corpo e proximidade",
    "Sexualité et intimité": "Sexualidade e intimidade",
    "L’intimité révèle comment désir, confiance, tendresse et vulnérabilité se rencontrent dans la relation.": "A intimidade revela como desejo, confiança, ternura e vulnerabilidade se encontram na relação.",
    "L’alchimie vécue": "Viver a química",
    "Vénus décrit la manière d’attirer, de recevoir et de créer le plaisir, tandis que Mars représente l’élan, l’initiative et le désir. Leur rencontre montre le rythme de l’attirance et la façon dont l’intimité peut rester vivante.": "Vénus descreve a forma de atrair, receber e criar prazer, enquanto Marte representa impulso, iniciativa e desejo. O encontro mostra o ritmo da atração e como a intimidade pode permanecer viva.",
    "Votre alchimie peut devenir un langage puissant de réconciliation, de confiance et de présence.": "A vossa química pode tornar-se uma linguagem poderosa de reconciliação, confiança e presença.",
    "Les différences de rythme, de spontanéité ou de besoin affectif peuvent être mal interprétées comme un manque d’amour.": "Diferenças de ritmo, espontaneidade ou necessidade afetiva podem ser mal interpretadas como falta de amor.",
    "Parlez ouvertement de vos besoins et de vos limites sans attendre qu’ils soient devinés.": "Falem abertamente das vossas necessidades e limites sem esperar que sejam adivinhados.",
    "Ressources et stabilité": "Recursos e estabilidade",
    "Argent et sécurité matérielle": "Dinheiro e segurança material",
    "Les finances mettent en lumière les valeurs, les priorités, le besoin de sécurité et la manière de prendre des décisions concrètes.": "As finanças evidenciam valores, prioridades, necessidade de segurança e a forma de tomar decisões concretas.",
    "Construire sans se limiter": "Construir sem se limitar",
    "Vénus parle des valeurs et du plaisir, tandis que Saturne décrit la prudence, la responsabilité et le long terme. Leur interaction montre comment vous pouvez équilibrer dépenses, sécurité, projets et qualité de vie.": "Vénus fala de valores e prazer, enquanto Saturno descreve prudência, responsabilidade e longo prazo. A interação mostra como podem equilibrar despesas, segurança, projetos e qualidade de vida.",
    "Une vision claire et des objectifs partagés peuvent vous aider à construire une stabilité durable.": "Uma visão clara e objetivos partilhados podem ajudar-vos a construir uma estabilidade duradoura.",
    "L’un peut privilégier la sécurité alors que l’autre souhaite davantage profiter du présent ou investir dans des expériences.": "Uma pessoa pode privilegiar a segurança enquanto a outra deseja aproveitar mais o presente ou investir em experiências.",
    "Décidez ensemble d’un budget pour les obligations, l’épargne et le plaisir afin que personne ne se sente contrôlé ou négligé.": "Decidam em conjunto um orçamento para obrigações, poupança e prazer, para que ninguém se sinta controlado ou negligenciado.",
    "Ambition et réalisation": "Ambição e realização",
    "Carrière et ambitions": "Carreira e ambições",
    "Le couple influence la confiance, la motivation, les choix professionnels et la capacité à soutenir les objectifs de chacun.": "A relação influencia confiança, motivação, escolhas profissionais e capacidade de apoiar os objetivos de cada pessoa.",
    "Grandir sans se rivaliser": "Crescer sem competir",
    "Le Soleil représente l’identité et l’accomplissement, tandis que Jupiter amplifie la confiance, l’ambition et la vision. Cette combinaison montre comment vous pouvez encourager la réussite sans transformer les objectifs personnels en compétition.": "O Sol representa identidade e realização, enquanto Júpiter amplia confiança, ambição e visão. Esta combinação mostra como podem incentivar o sucesso sem transformar objetivos pessoais em competição.",
    "Vous pouvez devenir une véritable équipe lorsque chacun célèbre les avancées de l’autre et partage ses ressources.": "Podem tornar-se uma verdadeira equipa quando cada pessoa celebra os progressos da outra e partilha os seus recursos.",
    "La réussite, le temps consacré au travail ou les différences d’ambition peuvent créer distance ou comparaison.": "O sucesso, o tempo dedicado ao trabalho ou diferenças de ambição podem criar distância ou comparação.",
    "Soutenez les projets personnels tout en protégeant des moments où la relation n’est pas reléguée au second plan.": "Apoiem projetos pessoais, protegendo ao mesmo tempo momentos em que a relação não fique relegada para segundo plano.",
    "Vision commune": "Visão comum",
    "Vos projets de vie": "Os seus projetos de vida",
    "Les projets communs donnent une direction au couple et transforment les aspirations individuelles en construction partagée.": "Os projetos comuns dão direção à relação e transformam aspirações individuais numa construção partilhada.",
    "Rêver et concrétiser": "Sonhar e concretizar",
    "Jupiter ouvre les possibilités et Saturne donne une structure. Ensemble, ils montrent comment le couple peut transformer une idée en projet réel, à condition d’équilibrer enthousiasme, patience et responsabilité.": "Júpiter abre possibilidades e Saturno dá estrutura. Juntos mostram como o casal pode transformar uma ideia num projeto real, equilibrando entusiasmo, paciência e responsabilidade.",
    "Vous pouvez avancer loin lorsque l’un apporte la vision et l’autre la méthode, ou lorsque vous alternez naturellement ces rôles.": "Podem ir longe quando uma pessoa traz a visão e a outra o método, ou quando alternam naturalmente estes papéis.",
    "Le projet peut ralentir si l’un juge l’autre trop prudent, trop ambitieux ou insuffisamment engagé.": "Um projeto pode abrandar se uma pessoa considerar a outra demasiado prudente, demasiado ambiciosa ou pouco empenhada.",
    "Définissez une vision commune, puis divisez-la en étapes concrètes avec des responsabilités et des échéances réalistes.": "Definam uma visão comum e dividam-na depois em etapas concretas com responsabilidades e prazos realistas.",
    "Durée et évolution": "Duração e evolução",
    "Votre potentiel à long terme": "O seu potencial a longo prazo",
    "La durée dépend moins d’une perfection immédiate que de la capacité à grandir, réparer, s’adapter et renouveler le lien.": "A duração depende menos de uma perfeição imediata do que da capacidade de crescer, reparar, adaptar-se e renovar o vínculo.",
    "Construire dans le temps": "Construir ao longo do tempo",
    "Saturne décrit l’engagement et la résistance du lien, tandis que Jupiter représente l’évolution, l’espoir et la croissance. Leur équilibre révèle si le couple sait rester stable sans cesser d’avancer.": "Saturno descreve compromisso e resistência do vínculo, enquanto Júpiter representa evolução, esperança e crescimento. O equilíbrio revela se o casal consegue permanecer estável sem deixar de avançar.",
    "La relation peut durer lorsqu’elle conserve une direction, des engagements clairs et la capacité de créer de nouvelles expériences.": "A relação pode durar quando mantém uma direção, compromissos claros e capacidade de criar novas experiências.",
    "La stabilité peut devenir rigidité, tandis que le besoin de changement peut être vécu comme une menace.": "A estabilidade pode tornar-se rigidez, enquanto a necessidade de mudança pode ser vivida como uma ameaça.",
    "Réévaluez régulièrement vos projets, vos besoins et vos règles de couple afin que l’engagement reste vivant plutôt que figé.": "Reavaliem regularmente os vossos projetos, necessidades e regras da relação para que o compromisso permaneça vivo em vez de se tornar rígido.",
    "Cette interaction soutient la coopération et permet à cette dimension de la vie commune de se développer avec davantage de naturel.": "Esta interação apoia a cooperação e permite que esta dimensão da vida em comum se desenvolva com maior naturalidade.",
    "Cette connexion intensifie fortement ce thème et le rend particulièrement visible dans votre quotidien de couple.": "Esta conexão intensifica fortemente este tema e torna-o particularmente visível no quotidiano do casal.",
    "Cette tension demande des décisions claires et une meilleure répartition des besoins, des efforts ou des responsabilités.": "Esta tensão exige decisões claras e uma melhor distribuição de necessidades, esforços ou responsabilidades.",
    "Cette polarité montre deux approches différentes qui peuvent devenir complémentaires lorsque chacune est reconnue.": "Esta polaridade mostra duas abordagens diferentes que podem tornar-se complementares quando ambas são reconhecidas.",
    "Cette interaction demande des ajustements précis et une communication régulière pour éviter l’accumulation de frustration.": "Esta interação exige ajustes precisos e comunicação regular para evitar a acumulação de frustração.",
    "Influences astrologiques principales": "Principais influências astrológicas",
    "Votre potentiel": "O seu potencial",
    "Votre point de vigilance": "O seu ponto de atenção",
    "Votre clé concrète": "A sua chave prática",
    "Luna Astralis • Rapport de synastrie": "Luna Astralis • Relatório de sinastria",
    "Première personne": "Primeira pessoa",
    "Deuxième personne": "Segunda pessoa",
    "Non précisé": "Não especificado",
    "Position non disponible": "Posição indisponível"
  }
};

const SIGNS: Record<NonFrenchLocale, Record<string, string>> = {
  "en": {
    "Bélier": "Aries",
    "Taureau": "Taurus",
    "Gémeaux": "Gemini",
    "Cancer": "Cancer",
    "Lion": "Leo",
    "Vierge": "Virgo",
    "Balance": "Libra",
    "Scorpion": "Scorpio",
    "Sagittaire": "Sagittarius",
    "Capricorne": "Capricorn",
    "Verseau": "Aquarius",
    "Poissons": "Pisces",
    "Aries": "Aries",
    "Taurus": "Taurus",
    "Gemini": "Gemini",
    "Leo": "Leo",
    "Virgo": "Virgo",
    "Libra": "Libra",
    "Scorpio": "Scorpio",
    "Sagittarius": "Sagittarius",
    "Capricorn": "Capricorn",
    "Aquarius": "Aquarius",
    "Pisces": "Pisces"
  },
  "es": {
    "Bélier": "Aries",
    "Taureau": "Tauro",
    "Gémeaux": "Géminis",
    "Cancer": "Cáncer",
    "Lion": "Leo",
    "Vierge": "Virgo",
    "Balance": "Libra",
    "Scorpion": "Escorpio",
    "Sagittaire": "Sagitario",
    "Capricorne": "Capricornio",
    "Verseau": "Acuario",
    "Poissons": "Piscis",
    "Aries": "Aries",
    "Taurus": "Tauro",
    "Gemini": "Géminis",
    "Leo": "Leo",
    "Virgo": "Virgo",
    "Libra": "Libra",
    "Scorpio": "Escorpio",
    "Sagittarius": "Sagitario",
    "Capricorn": "Capricornio",
    "Aquarius": "Acuario",
    "Pisces": "Piscis"
  },
  "de": {
    "Bélier": "Widder",
    "Taureau": "Stier",
    "Gémeaux": "Zwillinge",
    "Cancer": "Krebs",
    "Lion": "Löwe",
    "Vierge": "Jungfrau",
    "Balance": "Waage",
    "Scorpion": "Skorpion",
    "Sagittaire": "Schütze",
    "Capricorne": "Steinbock",
    "Verseau": "Wassermann",
    "Poissons": "Fische",
    "Aries": "Widder",
    "Taurus": "Stier",
    "Gemini": "Zwillinge",
    "Leo": "Löwe",
    "Virgo": "Jungfrau",
    "Libra": "Waage",
    "Scorpio": "Skorpion",
    "Sagittarius": "Schütze",
    "Capricorn": "Steinbock",
    "Aquarius": "Wassermann",
    "Pisces": "Fische"
  },
  "it": {
    "Bélier": "Ariete",
    "Taureau": "Toro",
    "Gémeaux": "Gemelli",
    "Cancer": "Cancro",
    "Lion": "Leone",
    "Vierge": "Vergine",
    "Balance": "Bilancia",
    "Scorpion": "Scorpione",
    "Sagittaire": "Sagittario",
    "Capricorne": "Capricorno",
    "Verseau": "Acquario",
    "Poissons": "Pesci",
    "Aries": "Ariete",
    "Taurus": "Toro",
    "Gemini": "Gemelli",
    "Leo": "Leone",
    "Virgo": "Vergine",
    "Libra": "Bilancia",
    "Scorpio": "Scorpione",
    "Sagittarius": "Sagittario",
    "Capricorn": "Capricorno",
    "Aquarius": "Acquario",
    "Pisces": "Pesci"
  },
  "pt": {
    "Bélier": "Áries",
    "Taureau": "Touro",
    "Gémeaux": "Gémeos",
    "Cancer": "Câncer",
    "Lion": "Leão",
    "Vierge": "Virgem",
    "Balance": "Libra",
    "Scorpion": "Escorpião",
    "Sagittaire": "Sagitário",
    "Capricorne": "Capricórnio",
    "Verseau": "Aquário",
    "Poissons": "Peixes",
    "Aries": "Áries",
    "Taurus": "Touro",
    "Gemini": "Gémeos",
    "Leo": "Leão",
    "Virgo": "Virgem",
    "Libra": "Libra",
    "Scorpio": "Escorpião",
    "Sagittarius": "Sagitário",
    "Capricorn": "Capricórnio",
    "Aquarius": "Aquário",
    "Pisces": "Peixes"
  }
};

const PLANETS: Record<NonFrenchLocale, Record<string, string>> = {
  "en": {
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
    "Sun": "Sun",
    "Moon": "Moon",
    "Mercury": "Mercury",
    "Venus": "Venus",
    "Saturn": "Saturn"
  },
  "es": {
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
    "Sun": "Sol",
    "Moon": "Luna",
    "Mercury": "Mercurio",
    "Venus": "Venus",
    "Saturn": "Saturno"
  },
  "de": {
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
    "Sun": "Sonne",
    "Moon": "Mond",
    "Mercury": "Merkur",
    "Venus": "Venus",
    "Saturn": "Saturn"
  },
  "it": {
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
    "Sun": "Sole",
    "Moon": "Luna",
    "Mercury": "Mercurio",
    "Venus": "Venere",
    "Saturn": "Saturno"
  },
  "pt": {
    "Soleil": "Sol",
    "Lune": "Lua",
    "Mercure": "Mercúrio",
    "Vénus": "Vénus",
    "Mars": "Marte",
    "Jupiter": "Júpiter",
    "Saturne": "Saturno",
    "Uranus": "Urano",
    "Neptune": "Neptuno",
    "Pluton": "Plutão",
    "Sun": "Sol",
    "Moon": "Lua",
    "Mercury": "Mercúrio",
    "Venus": "Vénus",
    "Saturn": "Saturno"
  }
};

const ASPECTS: Record<NonFrenchLocale, Record<string, string>> = {
  "en": {
    "Conjonction": "Conjunction",
    "Trigone": "Trine",
    "Sextile": "Sextile",
    "Carré": "Square",
    "Opposition": "Opposition",
    "Quinconce": "Quincunx"
  },
  "es": {
    "Conjonction": "Conjunción",
    "Trigone": "Trígono",
    "Sextile": "Sextil",
    "Carré": "Cuadratura",
    "Opposition": "Oposición",
    "Quinconce": "Quincuncio"
  },
  "de": {
    "Conjonction": "Konjunktion",
    "Trigone": "Trigon",
    "Sextile": "Sextil",
    "Carré": "Quadrat",
    "Opposition": "Opposition",
    "Quinconce": "Quinkunx"
  },
  "it": {
    "Conjonction": "Congiunzione",
    "Trigone": "Trigono",
    "Sextile": "Sestile",
    "Carré": "Quadratura",
    "Opposition": "Opposizione",
    "Quinconce": "Quinconce"
  },
  "pt": {
    "Conjonction": "Conjunção",
    "Trigone": "Trígono",
    "Sextile": "Sextil",
    "Carré": "Quadratura",
    "Opposition": "Oposição",
    "Quinconce": "Quincúncio"
  }
};

const STYLE: Record<NonFrenchLocale, Record<string, string>> = {
  "en": {
    "belier": "spontaneous and direct",
    "taureau": "stable and practical",
    "gemeaux": "flexible and curious",
    "cancer": "protective and sensitive",
    "lion": "warm and confident",
    "vierge": "methodical and practical",
    "balance": "cooperative and diplomatic",
    "scorpion": "deep and intense",
    "sagittaire": "enthusiastic and expansive",
    "capricorne": "responsible and structured",
    "verseau": "independent and original",
    "poissons": "intuitive and receptive",
    "default": "personal and nuanced",
    "in": "in",
    "style": "style",
    "orb": "orb"
  },
  "es": {
    "belier": "espontáneo y directo",
    "taureau": "estable y práctico",
    "gemeaux": "flexible y curioso",
    "cancer": "protector y sensible",
    "lion": "cálido y seguro",
    "vierge": "metódico y práctico",
    "balance": "cooperativo y diplomático",
    "scorpion": "profundo e intenso",
    "sagittaire": "entusiasta y expansivo",
    "capricorne": "responsable y estructurado",
    "verseau": "independiente y original",
    "poissons": "intuitivo y receptivo",
    "default": "personal y matizado",
    "in": "en",
    "style": "estilo",
    "orb": "orbe"
  },
  "de": {
    "belier": "spontan und direkt",
    "taureau": "stabil und praktisch",
    "gemeaux": "flexibel und neugierig",
    "cancer": "beschützend und sensibel",
    "lion": "warm und selbstbewusst",
    "vierge": "methodisch und praktisch",
    "balance": "kooperativ und diplomatisch",
    "scorpion": "tief und intensiv",
    "sagittaire": "enthusiastisch und expansiv",
    "capricorne": "verantwortungsvoll und strukturiert",
    "verseau": "unabhängig und originell",
    "poissons": "intuitiv und empfänglich",
    "default": "persönlich und nuanciert",
    "in": "in",
    "style": "Stil",
    "orb": "Orb"
  },
  "it": {
    "belier": "spontaneo e diretto",
    "taureau": "stabile e pratico",
    "gemeaux": "flessibile e curioso",
    "cancer": "protettivo e sensibile",
    "lion": "caldo e sicuro",
    "vierge": "metodico e pratico",
    "balance": "cooperativo e diplomatico",
    "scorpion": "profondo e intenso",
    "sagittaire": "entusiasta ed espansivo",
    "capricorne": "responsabile e strutturato",
    "verseau": "indipendente e originale",
    "poissons": "intuitivo e ricettivo",
    "default": "personale e sfumato",
    "in": "in",
    "style": "stile",
    "orb": "orbe"
  },
  "pt": {
    "belier": "espontâneo e direto",
    "taureau": "estável e prático",
    "gemeaux": "flexível e curioso",
    "cancer": "protetor e sensível",
    "lion": "caloroso e confiante",
    "vierge": "metódico e prático",
    "balance": "cooperativo e diplomático",
    "scorpion": "profundo e intenso",
    "sagittaire": "entusiasta e expansivo",
    "capricorne": "responsável e estruturado",
    "verseau": "independente e original",
    "poissons": "intuitivo e recetivo",
    "default": "pessoal e matizado",
    "in": "em",
    "style": "estilo",
    "orb": "orbe"
  }
};


function normalizeVisibleText(
  value: string,
): string {
  return value
    .replace(/\s+/g, " ")
    .trim();
}

function applyReplacements(
  source: string,
  replacements: Replacement[],
): string {
  let output = source;

  for (
    const replacement
    of [...replacements].sort(
      (a, b) => b.start - a.start,
    )
  ) {
    output =
      output.slice(0, replacement.start) +
      replacement.value +
      output.slice(replacement.end);
  }

  return output;
}

function localizeSafeLiterals(
  source: string,
  dictionary: Record<string, string>,
): string {
  const sourceFile =
    ts.createSourceFile(
      "CompatibilityLife.tsx",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );

  const replacements: Replacement[] = [];

  const technicalValues =
    new Set([
      "Sun",
      "Moon",
      "Mercury",
      "Venus",
      "Mars",
      "Jupiter",
      "Saturn",
      "sun",
      "moon",
      "lune",
      "saturn",
      "saturne",
      "mercury",
      "mercure",
      "venus",
      "mars",
      "jupiter",
      "pluto",
      "pluton",
      "uranus",
      "conjunction",
      "trine",
      "sextile",
      "square",
      "opposition",
      "quincunx",
      "A4",
      "NFD",
    ]);

  const visit = (
    node: ts.Node,
  ): void => {
    if (
      ts.isJsxText(node)
    ) {
      const raw =
        node.getText(sourceFile);

      const normalized =
        normalizeVisibleText(raw);

      const translated =
        dictionary[normalized];

      if (
        translated &&
        translated !== normalized
      ) {
        replacements.push({
          start:
            node.getStart(sourceFile),
          end:
            node.getEnd(),
          value:
            `{${JSON.stringify(
              translated,
            )}}`,
        });
      }
    }

    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    ) {
      if (
        technicalValues.has(
          node.text,
        )
      ) {
        ts.forEachChild(
          node,
          visit,
        );
        return;
      }

      if (
        ts.isPropertyAssignment(
          node.parent,
        )
      ) {
        const property =
          node.parent.name.getText(
            sourceFile,
          );

        if (
          property === "planet1" ||
          property === "planet2" ||
          property === "keywords"
        ) {
          ts.forEachChild(
            node,
            visit,
          );
          return;
        }
      }

      const exact = node.text;

      const normalized =
        normalizeVisibleText(exact);

      const translated =
        dictionary[exact] ??
        dictionary[normalized];

      if (
        translated &&
        translated !== exact
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
  };

  visit(sourceFile);

  return applyReplacements(
    source,
    replacements,
  );
}

function buildHelpers(
  locale: NonFrenchLocale,
): string {
  const signTable =
    SIGNS[locale];

  const planetTable =
    PLANETS[locale];

  const aspectTable =
    ASPECTS[locale];

  const styleTable =
    STYLE[locale];

  return `
const __LIFE_SIGNS =
  ${JSON.stringify(
    signTable,
    null,
    2,
  )} as Record<string, string>;

const __LIFE_PLANETS =
  ${JSON.stringify(
    planetTable,
    null,
    2,
  )} as Record<string, string>;

const __LIFE_ASPECTS =
  ${JSON.stringify(
    aspectTable,
    null,
    2,
  )} as Record<string, string>;

const __LIFE_STYLE =
  ${JSON.stringify(
    styleTable,
    null,
    2,
  )} as Record<string, string>;

function localizeLifeSign(
  value: string,
): string {
  const safe =
    typeof value === "string"
      ? value.trim()
      : "";

  return (
    __LIFE_SIGNS[safe] ??
    safe
  );
}

function localizeLifePlanet(
  value: string,
): string {
  const safe =
    typeof value === "string"
      ? value.trim()
      : "";

  return (
    __LIFE_PLANETS[safe] ??
    safe
  );
}

function localizeLifeAspect(
  value: string,
): string {
  const safe =
    typeof value === "string"
      ? value.trim()
      : "";

  return (
    __LIFE_ASPECTS[safe] ??
    safe
  );
}

function getLocalizedLifeStyle(
  planet: PlanetKey,
  sign: string,
): string {
  if (
    sign === "Non précisé"
  ) {
    return ${JSON.stringify(
      TEXT[locale][
        "Position non disponible"
      ],
    )};
  }

  const key =
    normalizeValue(sign);

  const tone =
    __LIFE_STYLE[key] ??
    __LIFE_STYLE.default;

  const translatedPlanet =
    localizeLifePlanet(
      translateCompatibilityPlanet(
        planet,
      ),
    );

  return (
    translatedPlanet +
    " " +
    __LIFE_STYLE.in +
    " " +
    localizeLifeSign(sign) +
    ": " +
    __LIFE_STYLE.style +
    " " +
    tone +
    "."
  );
}

function getLocalizedLifeAspectInterpretation(
  aspect: CompatibilityAspect,
): string {
  if (
    aspect.type === "trine" ||
    aspect.type === "sextile"
  ) {
    return ${JSON.stringify(
      TEXT[locale][
        "Cette interaction soutient la coopération et permet à cette dimension de la vie commune de se développer avec davantage de naturel."
      ],
    )};
  }

  if (
    aspect.type === "conjunction"
  ) {
    return ${JSON.stringify(
      TEXT[locale][
        "Cette connexion intensifie fortement ce thème et le rend particulièrement visible dans votre quotidien de couple."
      ],
    )};
  }

  if (
    aspect.type === "square"
  ) {
    return ${JSON.stringify(
      TEXT[locale][
        "Cette tension demande des décisions claires et une meilleure répartition des besoins, des efforts ou des responsabilités."
      ],
    )};
  }

  if (
    aspect.type === "opposition"
  ) {
    return ${JSON.stringify(
      TEXT[locale][
        "Cette polarité montre deux approches différentes qui peuvent devenir complémentaires lorsque chacune est reconnue."
      ],
    )};
  }

  return ${JSON.stringify(
    TEXT[locale][
      "Cette interaction demande des ajustements précis et une communication régulière pour éviter l’accumulation de frustration."
    ],
  )};
}
`;
}

function injectHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  const marker =
    "function normalizeValue(";

  if (
    !source.includes(marker)
  ) {
    return source;
  }

  return source.replace(
    marker,
    `${buildHelpers(
      locale,
    )}\n${marker}`,
  );
}

function replaceDynamicDisplay(
  source: string,
  locale: NonFrenchLocale,
): string {
  const style =
    STYLE[locale];

  let output = source;

  output =
    output.replace(
      /\{translateCompatibilityPlanet\(\s*definition\.planet1,\s*\)\}\{" "\}\s*en \{sign1\}/g,
      `{localizeLifePlanet(
              translateCompatibilityPlanet(
                definition.planet1,
              ),
            )} ${style.in} {localizeLifeSign(sign1)}`,
    );

  output =
    output.replace(
      /\{translateCompatibilityPlanet\(\s*definition\.planet2,\s*\)\}\{" "\}\s*en \{sign2\}/g,
      `{localizeLifePlanet(
              translateCompatibilityPlanet(
                definition.planet2,
              ),
            )} ${style.in} {localizeLifeSign(sign2)}`,
    );

  output =
    output.replace(
      /\{getPersonalStyle\(\s*definition\.planet1,\s*sign1,\s*\)\}/g,
      "{getLocalizedLifeStyle(definition.planet1, sign1)}",
    );

  output =
    output.replace(
      /\{getPersonalStyle\(\s*definition\.planet2,\s*sign2,\s*\)\}/g,
      "{getLocalizedLifeStyle(definition.planet2, sign2)}",
    );

  output =
    output.replace(
      /\{translateCompatibilityPlanet\(\s*aspect\.person1Planet,\s*\)\}\{" "\}\s*\{translateCompatibilityAspect\(\s*aspect\.type,\s*\)\}\{" "\}\s*\{translateCompatibilityPlanet\(\s*aspect\.person2Planet,\s*\)\}\s*\{" • orbe "\}/g,
      `{localizeLifePlanet(
            translateCompatibilityPlanet(
              aspect.person1Planet,
            ),
          )}{" "}
          {localizeLifeAspect(
            translateCompatibilityAspect(
              aspect.type,
            ),
          )}{" "}
          {localizeLifePlanet(
            translateCompatibilityPlanet(
              aspect.person2Planet,
            ),
          )}
          {" • ${style.orb} "}`,
    );

  output =
    output.replace(
      /\{getAspectInterpretation\(\s*aspect,\s*\)\}/g,
      "{getLocalizedLifeAspectInterpretation(aspect)}",
    );

  return output;
}

export function localizeCompatibilityLife(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (
    locale === "fr"
  ) {
    return source;
  }

  const safeLocale =
    locale as NonFrenchLocale;

  const dictionary =
    TEXT[safeLocale];

  if (!dictionary) {
    return source;
  }

  let localized =
    localizeSafeLiterals(
      source,
      dictionary,
    );

  localized =
    injectHelpers(
      localized,
      safeLocale,
    );

  localized =
    replaceDynamicDisplay(
      localized,
      safeLocale,
    );

  return localized;
}
