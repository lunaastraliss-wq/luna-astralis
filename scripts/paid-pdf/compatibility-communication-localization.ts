import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type LocaleData = {
  text: Record<string, string>;

  signs: Record<string, string>;

  planets: Record<string, string>;

  aspects: Record<string, string>;

  elements: Record<string, string>;

  mercuryIn: string;

  elementWord: string;

  orbWord: string;
};

const TRANSLATIONS: Record<
  NonFrenchLocale,
  LocaleData
> = {
  en: {
    text: {
      "Première personne":
        "First person",

      "Deuxième personne":
        "Second person",

      "la première personne":
        "the first person",

      "la deuxième personne":
        "the second person",

      "Dialogue et compréhension":
        "Dialogue and understanding",

      "Votre compatibilité de communication":
        "Your communication compatibility",

      "Mercure révèle votre manière de penser, d’écouter, d’expliquer et de transformer vos idées en mots.":
        "Mercury reveals how you think, listen, explain, and transform your ideas into words.",

      "Pensée, parole et compréhension":
        "Thought, speech and understanding",

      "La rencontre de vos deux Mercure":
        "The meeting of your two Mercury placements",

      "Cette comparaison montre comment vos raisonnements, vos mots et vos rythmes mentaux peuvent se comprendre ou demander certains ajustements.":
        "This comparison shows how your reasoning, words, and mental rhythms can understand one another or require certain adjustments.",

      "Votre dynamique mentale":
        "Your mental dynamic",

      "Votre manière personnelle de communiquer":
        "Your personal communication styles",

      "Vos principales interactions mentales":
        "Your main mental interactions",

      "Votre force":
        "Your strength",

      "Votre point de vigilance":
        "Your point of attention",

      "Votre clé de communication":
        "Your communication key",

      "Lorsque le sujet devient important, ralentissez la conversation et reformulez ce que vous avez compris avant de répondre. Cette simple habitude permet de distinguer une véritable divergence d’un simple malentendu dans les mots ou dans le ton employé.":
        "When the subject becomes important, slow the conversation down and restate what you understood before responding. This simple habit helps distinguish a real disagreement from a misunderstanding caused by words or tone.",

      "La communication de":
        "The communication style of",

      "Les données disponibles ne permettent pas encore de préciser entièrement son style de communication.":
        "The available data does not yet allow this person's communication style to be fully specified.",

      "Communication directe, rapide et spontanée. Cette personne préfère aller droit au but et exprimer immédiatement ce qu’elle pense.":
        "Direct, quick, and spontaneous communication. This person prefers to get straight to the point and immediately express what they think.",

      "Communication posée, concrète et réfléchie. Elle prend le temps d’assimiler les informations avant de formuler une opinion stable.":
        "Calm, concrete, and thoughtful communication. This person takes time to process information before forming a stable opinion.",

      "Communication vive, curieuse et adaptable. Elle aime échanger, poser des questions et explorer plusieurs idées à la fois.":
        "Lively, curious, and adaptable communication. This person enjoys exchanging ideas, asking questions, and exploring several possibilities at once.",

      "Communication intuitive et sensible. Les mots sont fortement influencés par l’émotion, la mémoire et le climat relationnel.":
        "Intuitive and sensitive communication. Words are strongly influenced by emotion, memory, and the emotional atmosphere of the relationship.",

      "Communication chaleureuse, expressive et assurée. Elle cherche à transmettre ses idées avec conviction et présence.":
        "Warm, expressive, and confident communication. This person seeks to convey ideas with conviction and presence.",

      "Communication précise, méthodique et analytique. Elle remarque facilement les détails et cherche des solutions pratiques.":
        "Precise, methodical, and analytical communication. This person easily notices details and looks for practical solutions.",

      "Communication diplomate, nuancée et attentive. Elle cherche l’équilibre, la coopération et évite généralement les confrontations inutiles.":
        "Diplomatic, nuanced, and attentive communication. This person seeks balance and cooperation and generally avoids unnecessary confrontation.",

      "Communication profonde, stratégique et perspicace. Elle observe beaucoup et préfère les échanges sincères aux conversations superficielles.":
        "Deep, strategic, and perceptive communication. This person observes carefully and prefers sincere exchanges to superficial conversations.",

      "Communication franche, enthousiaste et visionnaire. Elle aime partager ses convictions et parler de possibilités, de projets ou d’avenir.":
        "Frank, enthusiastic, and visionary communication. This person enjoys sharing convictions and discussing possibilities, projects, and the future.",

      "Communication structurée, sérieuse et responsable. Elle privilégie les faits, la cohérence et les échanges ayant un objectif concret.":
        "Structured, serious, and responsible communication. This person favors facts, consistency, and conversations with a concrete purpose.",

      "Communication indépendante, originale et intellectuelle. Elle apprécie les idées nouvelles et peut aborder les situations avec détachement.":
        "Independent, original, and intellectual communication. This person appreciates new ideas and may approach situations with detachment.",

      "Communication intuitive, imagée et empathique. Elle perçoit les nuances invisibles et s’exprime souvent à travers le ressenti.":
        "Intuitive, imaginative, and empathetic communication. This person perceives subtle nuances and often communicates through feelings.",

      "Échange fluide":
        "Smooth exchange",

      "Connexion mentale":
        "Mental connection",

      "Points de vue opposés":
        "Opposing viewpoints",

      "Tension mentale":
        "Mental tension",

      "Ajustement nécessaire":
        "Adjustment needed",

      "Influence relationnelle":
        "Relationship influence",

      "Vos modes de pensée peuvent s’accorder naturellement, facilitant les discussions, les décisions et la compréhension mutuelle.":
        "Your ways of thinking can naturally align, making discussions, decisions, and mutual understanding easier.",

      "Vos raisonnements peuvent suivre des directions différentes et créer des débats, des interruptions ou des incompréhensions.":
        "Your reasoning may follow different directions and create debates, interruptions, or misunderstandings.",

      "Cette connexion renforce fortement votre activité mentale commune et votre besoin d’échanger.":
        "This connection strongly reinforces your shared mental activity and your need to communicate.",

      "Les mots peuvent facilement rejoindre les émotions, ce qui favorise l’écoute, la confiance et le sentiment d’être compris.":
        "Words can easily connect with emotions, encouraging listening, trust, and the feeling of being understood.",

      "La logique de l’un peut parfois sembler insensible aux émotions de l’autre, même sans intention de blesser.":
        "One person's logic may sometimes seem insensitive to the other's emotions, even without any intention to hurt.",

      "Les pensées et les émotions sont fortement liées dans votre manière de communiquer.":
        "Thoughts and emotions are strongly connected in the way you communicate.",

      "Les idées de l’un peuvent soutenir l’identité et les projets de l’autre, favorisant une communication stimulante.":
        "One person's ideas can support the other's identity and projects, encouraging stimulating communication.",

      "Certaines paroles peuvent être perçues comme une remise en question personnelle ou une critique de l’identité.":
        "Certain words may be perceived as a personal challenge or criticism of the other's identity.",

      "La communication joue un rôle central dans la manière dont vous vous reconnaissez et vous encouragez.":
        "Communication plays a central role in the way you recognize and encourage one another.",

      "Les échanges peuvent être doux, agréables et diplomates, facilitant les déclarations d’affection et la réconciliation.":
        "Conversations can be gentle, pleasant, and diplomatic, making expressions of affection and reconciliation easier.",

      "Les mots utilisés pour exprimer l’affection peuvent ne pas toujours correspondre à ce que l’autre souhaite entendre.":
        "The words used to express affection may not always match what the other person wishes to hear.",

      "La tendresse, le charme et les valeurs personnelles influencent fortement vos conversations.":
        "Tenderness, charm, and personal values strongly influence your conversations.",

      "Les échanges peuvent être dynamiques, francs et motivants, avec une capacité à transformer rapidement les idées en action.":
        "Conversations can be dynamic, direct, and motivating, with an ability to quickly transform ideas into action.",

      "Les discussions peuvent devenir rapides, défensives ou impulsives lorsque chacun cherche à imposer son point de vue.":
        "Discussions can become rapid, defensive, or impulsive when each person tries to impose their point of view.",

      "Cette connexion stimule les débats, les décisions et l’expression directe des opinions.":
        "This connection stimulates debate, decision-making, and the direct expression of opinions.",

      "La communication peut gagner en sérieux, en clarté et en fiabilité, particulièrement dans les décisions importantes.":
        "Communication can become more serious, clear, and reliable, especially when important decisions are involved.",

      "L’un peut parfois se sentir jugé, corrigé ou limité dans sa manière de s’exprimer.":
        "One person may sometimes feel judged, corrected, or restricted in the way they express themselves.",

      "Les échanges soulignent les thèmes de responsabilité, de prudence et d’engagement.":
        "Conversations highlight themes of responsibility, caution, and commitment.",

      "Cet aspect influence la manière dont vos idées, vos paroles et vos réactions mentales interagissent.":
        "This aspect influences how your ideas, words, and mental reactions interact.",

      "Vous pouvez saisir rapidement la logique de l’autre et développer un langage commun très personnel.":
        "You can quickly understand each other's logic and develop a highly personal shared language.",

      "Vos raisonnements partagent une base similaire, ce qui facilite la coopération et la prise de décision.":
        "Your reasoning shares a similar foundation, making cooperation and decision-making easier.",

      "Vos différences mentales peuvent élargir votre manière de voir les situations et vous aider à envisager davantage de solutions.":
        "Your mental differences can broaden the way you view situations and help you consider more solutions.",

      "Vous pouvez parfois présumer que l’autre comprend automatiquement, sans prendre le temps d’expliquer clairement vos attentes.":
        "You may sometimes assume that the other person automatically understands without taking the time to clearly explain your expectations.",

      "Vous pouvez renforcer mutuellement certaines habitudes de pensée et négliger les points de vue extérieurs.":
        "You may reinforce certain thinking habits in one another and overlook outside perspectives.",

      "Vos rythmes de réflexion peuvent différer. L’un peut répondre immédiatement alors que l’autre a besoin de temps pour comprendre ou formuler sa pensée.":
        "Your thinking rhythms may differ. One person may respond immediately while the other needs time to understand or formulate their thoughts.",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastry Report",
    },

    signs: {
      Bélier: "Aries",
      Taureau: "Taurus",
      Gémeaux: "Gemini",
      Cancer: "Cancer",
      Lion: "Leo",
      Vierge: "Virgo",
      Balance: "Libra",
      Scorpion: "Scorpio",
      Sagittaire: "Sagittarius",
      Capricorne: "Capricorn",
      Verseau: "Aquarius",
      Poissons: "Pisces",
    },

    planets: {
      Soleil: "Sun",
      Lune: "Moon",
      Mercure: "Mercury",
      Vénus: "Venus",
      Mars: "Mars",
      Saturne: "Saturn",
    },

    aspects: {
      Conjonction: "Conjunction",
      Opposition: "Opposition",
      Trigone: "Trine",
      Carré: "Square",
      Sextile: "Sextile",
      Quinconce: "Quincunx",
    },

    elements: {
      Feu: "Fire",
      Terre: "Earth",
      Air: "Air",
      Eau: "Water",
    },

    mercuryIn: "Mercury in",

    elementWord: "Element",

    orbWord: "orb",
  },

  es: {
    text: {
      "Première personne":
        "Primera persona",

      "Deuxième personne":
        "Segunda persona",

      "la première personne":
        "la primera persona",

      "la deuxième personne":
        "la segunda persona",

      "Dialogue et compréhension":
        "Diálogo y comprensión",

      "Votre compatibilité de communication":
        "Su compatibilidad de comunicación",

      "Mercure révèle votre manière de penser, d’écouter, d’expliquer et de transformer vos idées en mots.":
        "Mercurio revela su manera de pensar, escuchar, explicar y transformar sus ideas en palabras.",

      "Pensée, parole et compréhension":
        "Pensamiento, palabra y comprensión",

      "La rencontre de vos deux Mercure":
        "El encuentro de sus dos Mercurios",

      "Cette comparaison montre comment vos raisonnements, vos mots et vos rythmes mentaux peuvent se comprendre ou demander certains ajustements.":
        "Esta comparación muestra cómo sus razonamientos, palabras y ritmos mentales pueden comprenderse o requerir ciertos ajustes.",

      "Votre dynamique mentale":
        "Su dinámica mental",

      "Votre manière personnelle de communiquer":
        "Su manera personal de comunicarse",

      "Vos principales interactions mentales":
        "Sus principales interacciones mentales",

      "Votre force":
        "Su fortaleza",

      "Votre point de vigilance":
        "Su punto de atención",

      "Votre clé de communication":
        "Su clave de comunicación",

      "Lorsque le sujet devient important, ralentissez la conversation et reformulez ce que vous avez compris avant de répondre. Cette simple habitude permet de distinguer une véritable divergence d’un simple malentendu dans les mots ou dans le ton employé.":
        "Cuando el tema sea importante, reduzcan el ritmo de la conversación y reformulen lo que han entendido antes de responder. Este sencillo hábito permite distinguir una verdadera diferencia de opinión de un simple malentendido en las palabras o en el tono utilizado.",

      "La communication de":
        "La comunicación de",

      "Les données disponibles ne permettent pas encore de préciser entièrement son style de communication.":
        "Los datos disponibles todavía no permiten precisar completamente su estilo de comunicación.",

      "Communication directe, rapide et spontanée. Cette personne préfère aller droit au but et exprimer immédiatement ce qu’elle pense.":
        "Comunicación directa, rápida y espontánea. Esta persona prefiere ir al grano y expresar inmediatamente lo que piensa.",

      "Communication posée, concrète et réfléchie. Elle prend le temps d’assimiler les informations avant de formuler une opinion stable.":
        "Comunicación tranquila, concreta y reflexiva. Se toma el tiempo necesario para asimilar la información antes de formar una opinión estable.",

      "Communication vive, curieuse et adaptable. Elle aime échanger, poser des questions et explorer plusieurs idées à la fois.":
        "Comunicación viva, curiosa y adaptable. Le gusta intercambiar ideas, hacer preguntas y explorar varias posibilidades a la vez.",

      "Communication intuitive et sensible. Les mots sont fortement influencés par l’émotion, la mémoire et le climat relationnel.":
        "Comunicación intuitiva y sensible. Las palabras están fuertemente influidas por la emoción, la memoria y el clima de la relación.",

      "Communication chaleureuse, expressive et assurée. Elle cherche à transmettre ses idées avec conviction et présence.":
        "Comunicación cálida, expresiva y segura. Busca transmitir sus ideas con convicción y presencia.",

      "Communication précise, méthodique et analytique. Elle remarque facilement les détails et cherche des solutions pratiques.":
        "Comunicación precisa, metódica y analítica. Percibe fácilmente los detalles y busca soluciones prácticas.",

      "Communication diplomate, nuancée et attentive. Elle cherche l’équilibre, la coopération et évite généralement les confrontations inutiles.":
        "Comunicación diplomática, matizada y atenta. Busca el equilibrio y la cooperación y suele evitar las confrontaciones innecesarias.",

      "Communication profonde, stratégique et perspicace. Elle observe beaucoup et préfère les échanges sincères aux conversations superficielles.":
        "Comunicación profunda, estratégica y perspicaz. Observa mucho y prefiere los intercambios sinceros a las conversaciones superficiales.",

      "Communication franche, enthousiaste et visionnaire. Elle aime partager ses convictions et parler de possibilités, de projets ou d’avenir.":
        "Comunicación franca, entusiasta y visionaria. Le gusta compartir sus convicciones y hablar de posibilidades, proyectos y futuro.",

      "Communication structurée, sérieuse et responsable. Elle privilégie les faits, la cohérence et les échanges ayant un objectif concret.":
        "Comunicación estructurada, seria y responsable. Da prioridad a los hechos, la coherencia y los intercambios con un objetivo concreto.",

      "Communication indépendante, originale et intellectuelle. Elle apprécie les idées nouvelles et peut aborder les situations avec détachement.":
        "Comunicación independiente, original e intelectual. Aprecia las ideas nuevas y puede abordar las situaciones con cierto distanciamiento.",

      "Communication intuitive, imagée et empathique. Elle perçoit les nuances invisibles et s’exprime souvent à travers le ressenti.":
        "Comunicación intuitiva, imaginativa y empática. Percibe matices sutiles y suele expresarse a través de lo que siente.",

      "Échange fluide":
        "Intercambio fluido",

      "Connexion mentale":
        "Conexión mental",

      "Points de vue opposés":
        "Puntos de vista opuestos",

      "Tension mentale":
        "Tensión mental",

      "Ajustement nécessaire":
        "Ajuste necesario",

      "Influence relationnelle":
        "Influencia relacional",

      "Vos modes de pensée peuvent s’accorder naturellement, facilitant les discussions, les décisions et la compréhension mutuelle.":
        "Sus formas de pensar pueden armonizar naturalmente, facilitando las conversaciones, las decisiones y la comprensión mutua.",

      "Vos raisonnements peuvent suivre des directions différentes et créer des débats, des interruptions ou des incompréhensions.":
        "Sus razonamientos pueden seguir direcciones diferentes y generar debates, interrupciones o malentendidos.",

      "Cette connexion renforce fortement votre activité mentale commune et votre besoin d’échanger.":
        "Esta conexión refuerza intensamente su actividad mental compartida y su necesidad de intercambiar ideas.",

      "Les mots peuvent facilement rejoindre les émotions, ce qui favorise l’écoute, la confiance et le sentiment d’être compris.":
        "Las palabras pueden conectar fácilmente con las emociones, favoreciendo la escucha, la confianza y la sensación de ser comprendido.",

      "La logique de l’un peut parfois sembler insensible aux émotions de l’autre, même sans intention de blesser.":
        "La lógica de uno puede parecer a veces insensible a las emociones del otro, incluso sin intención de herir.",

      "Les pensées et les émotions sont fortement liées dans votre manière de communiquer.":
        "Los pensamientos y las emociones están estrechamente relacionados en su manera de comunicarse.",

      "Les idées de l’un peuvent soutenir l’identité et les projets de l’autre, favorisant une communication stimulante.":
        "Las ideas de uno pueden apoyar la identidad y los proyectos del otro, favoreciendo una comunicación estimulante.",

      "Certaines paroles peuvent être perçues comme une remise en question personnelle ou une critique de l’identité.":
        "Algunas palabras pueden percibirse como un cuestionamiento personal o una crítica de la identidad.",

      "La communication joue un rôle central dans la manière dont vous vous reconnaissez et vous encouragez.":
        "La comunicación desempeña un papel central en la manera en que se reconocen y se animan mutuamente.",

      "Les échanges peuvent être doux, agréables et diplomates, facilitant les déclarations d’affection et la réconciliation.":
        "Los intercambios pueden ser suaves, agradables y diplomáticos, facilitando las expresiones de afecto y la reconciliación.",

      "Les mots utilisés pour exprimer l’affection peuvent ne pas toujours correspondre à ce que l’autre souhaite entendre.":
        "Las palabras utilizadas para expresar afecto no siempre corresponden a lo que la otra persona desea escuchar.",

      "La tendresse, le charme et les valeurs personnelles influencent fortement vos conversations.":
        "La ternura, el encanto y los valores personales influyen mucho en sus conversaciones.",

      "Les échanges peuvent être dynamiques, francs et motivants, avec une capacité à transformer rapidement les idées en action.":
        "Los intercambios pueden ser dinámicos, francos y motivadores, con capacidad para transformar rápidamente las ideas en acción.",

      "Les discussions peuvent devenir rapides, défensives ou impulsives lorsque chacun cherche à imposer son point de vue.":
        "Las conversaciones pueden volverse rápidas, defensivas o impulsivas cuando cada uno intenta imponer su punto de vista.",

      "Cette connexion stimule les débats, les décisions et l’expression directe des opinions.":
        "Esta conexión estimula los debates, las decisiones y la expresión directa de las opiniones.",

      "La communication peut gagner en sérieux, en clarté et en fiabilité, particulièrement dans les décisions importantes.":
        "La comunicación puede ganar seriedad, claridad y fiabilidad, especialmente en las decisiones importantes.",

      "L’un peut parfois se sentir jugé, corrigé ou limité dans sa manière de s’exprimer.":
        "Uno puede sentirse a veces juzgado, corregido o limitado en su manera de expresarse.",

      "Les échanges soulignent les thèmes de responsabilité, de prudence et d’engagement.":
        "Los intercambios destacan los temas de responsabilidad, prudencia y compromiso.",

      "Cet aspect influence la manière dont vos idées, vos paroles et vos réactions mentales interagissent.":
        "Este aspecto influye en la manera en que interactúan sus ideas, palabras y reacciones mentales.",

      "Vous pouvez saisir rapidement la logique de l’autre et développer un langage commun très personnel.":
        "Pueden comprender rápidamente la lógica del otro y desarrollar un lenguaje común muy personal.",

      "Vos raisonnements partagent une base similaire, ce qui facilite la coopération et la prise de décision.":
        "Sus razonamientos comparten una base similar, lo que facilita la cooperación y la toma de decisiones.",

      "Vos différences mentales peuvent élargir votre manière de voir les situations et vous aider à envisager davantage de solutions.":
        "Sus diferencias mentales pueden ampliar su manera de ver las situaciones y ayudarles a considerar más soluciones.",

      "Vous pouvez parfois présumer que l’autre comprend automatiquement, sans prendre le temps d’expliquer clairement vos attentes.":
        "A veces pueden suponer que el otro comprende automáticamente sin tomarse el tiempo de explicar claramente sus expectativas.",

      "Vous pouvez renforcer mutuellement certaines habitudes de pensée et négliger les points de vue extérieurs.":
        "Pueden reforzar mutuamente ciertos hábitos de pensamiento y descuidar puntos de vista externos.",

      "Vos rythmes de réflexion peuvent différer. L’un peut répondre immédiatement alors que l’autre a besoin de temps pour comprendre ou formuler sa pensée.":
        "Sus ritmos de reflexión pueden ser diferentes. Uno puede responder inmediatamente mientras el otro necesita tiempo para comprender o formular su pensamiento.",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Informe de sinastría",
    },

    signs: {
      Bélier: "Aries",
      Taureau: "Tauro",
      Gémeaux: "Géminis",
      Cancer: "Cáncer",
      Lion: "Leo",
      Vierge: "Virgo",
      Balance: "Libra",
      Scorpion: "Escorpio",
      Sagittaire: "Sagitario",
      Capricorne: "Capricornio",
      Verseau: "Acuario",
      Poissons: "Piscis",
    },

    planets: {
      Soleil: "Sol",
      Lune: "Luna",
      Mercure: "Mercurio",
      Vénus: "Venus",
      Mars: "Marte",
      Saturne: "Saturno",
    },

    aspects: {
      Conjonction: "Conjunción",
      Opposition: "Oposición",
      Trigone: "Trígono",
      Carré: "Cuadratura",
      Sextile: "Sextil",
      Quinconce: "Quincuncio",
    },

    elements: {
      Feu: "Fuego",
      Terre: "Tierra",
      Air: "Aire",
      Eau: "Agua",
    },

    mercuryIn: "Mercurio en",

    elementWord: "Elemento",

    orbWord: "orbe",
  },

  de: {
    text: {
      "Première personne": "Erste Person",
      "Deuxième personne": "Zweite Person",
      "la première personne": "die erste Person",
      "la deuxième personne": "die zweite Person",

      "Dialogue et compréhension":
        "Dialog und Verständnis",

      "Votre compatibilité de communication":
        "Ihre Kommunikationskompatibilität",

      "Mercure révèle votre manière de penser, d’écouter, d’expliquer et de transformer vos idées en mots.":
        "Merkur zeigt, wie Sie denken, zuhören, erklären und Ihre Gedanken in Worte fassen.",

      "Pensée, parole et compréhension":
        "Denken, Sprache und Verständnis",

      "La rencontre de vos deux Mercure":
        "Die Begegnung Ihrer beiden Merkur-Positionen",

      "Cette comparaison montre comment vos raisonnements, vos mots et vos rythmes mentaux peuvent se comprendre ou demander certains ajustements.":
        "Dieser Vergleich zeigt, wie Ihre Denkweisen, Worte und mentalen Rhythmen miteinander harmonieren oder Anpassungen erfordern können.",

      "Votre dynamique mentale":
        "Ihre mentale Dynamik",

      "Votre manière personnelle de communiquer":
        "Ihre persönliche Art zu kommunizieren",

      "Vos principales interactions mentales":
        "Ihre wichtigsten mentalen Wechselwirkungen",

      "Votre force":
        "Ihre Stärke",

      "Votre point de vigilance":
        "Ihr Aufmerksamkeitspunkt",

      "Votre clé de communication":
        "Ihr Kommunikationsschlüssel",

      "Lorsque le sujet devient important, ralentissez la conversation et reformulez ce que vous avez compris avant de répondre. Cette simple habitude permet de distinguer une véritable divergence d’un simple malentendu dans les mots ou dans le ton employé.":
        "Wenn ein Thema wichtig wird, verlangsamen Sie das Gespräch und formulieren Sie noch einmal, was Sie verstanden haben, bevor Sie antworten. Diese einfache Gewohnheit hilft dabei, eine echte Meinungsverschiedenheit von einem Missverständnis in Worten oder Tonfall zu unterscheiden.",

      "La communication de":
        "Die Kommunikation von",

      "Les données disponibles ne permettent pas encore de préciser entièrement son style de communication.":
        "Die verfügbaren Daten reichen noch nicht aus, um den Kommunikationsstil vollständig zu bestimmen.",

      "Communication directe, rapide et spontanée. Cette personne préfère aller droit au but et exprimer immédiatement ce qu’elle pense.":
        "Direkte, schnelle und spontane Kommunikation. Diese Person kommt gerne direkt zur Sache und äußert unmittelbar, was sie denkt.",

      "Communication posée, concrète et réfléchie. Elle prend le temps d’assimiler les informations avant de formuler une opinion stable.":
        "Ruhige, konkrete und überlegte Kommunikation. Diese Person nimmt sich Zeit, Informationen zu verarbeiten, bevor sie sich eine feste Meinung bildet.",

      "Communication vive, curieuse et adaptable. Elle aime échanger, poser des questions et explorer plusieurs idées à la fois.":
        "Lebendige, neugierige und anpassungsfähige Kommunikation. Diese Person tauscht sich gerne aus, stellt Fragen und erkundet mehrere Ideen gleichzeitig.",

      "Communication intuitive et sensible. Les mots sont fortement influencés par l’émotion, la mémoire et le climat relationnel.":
        "Intuitive und sensible Kommunikation. Worte werden stark von Emotionen, Erinnerungen und der Beziehungsatmosphäre beeinflusst.",

      "Communication chaleureuse, expressive et assurée. Elle cherche à transmettre ses idées avec conviction et présence.":
        "Warme, ausdrucksstarke und selbstbewusste Kommunikation. Diese Person vermittelt ihre Ideen mit Überzeugung und Präsenz.",

      "Communication précise, méthodique et analytique. Elle remarque facilement les détails et cherche des solutions pratiques.":
        "Präzise, methodische und analytische Kommunikation. Diese Person erkennt Details leicht und sucht praktische Lösungen.",

      "Communication diplomate, nuancée et attentive. Elle cherche l’équilibre, la coopération et évite généralement les confrontations inutiles.":
        "Diplomatische, differenzierte und aufmerksame Kommunikation. Diese Person sucht Gleichgewicht und Zusammenarbeit und vermeidet meist unnötige Konfrontationen.",

      "Communication profonde, stratégique et perspicace. Elle observe beaucoup et préfère les échanges sincères aux conversations superficielles.":
        "Tiefe, strategische und scharfsinnige Kommunikation. Diese Person beobachtet viel und bevorzugt aufrichtige Gespräche gegenüber oberflächlichem Austausch.",

      "Communication franche, enthousiaste et visionnaire. Elle aime partager ses convictions et parler de possibilités, de projets ou d’avenir.":
        "Offene, enthusiastische und visionäre Kommunikation. Diese Person teilt gerne ihre Überzeugungen und spricht über Möglichkeiten, Projekte und die Zukunft.",

      "Communication structurée, sérieuse et responsable. Elle privilégie les faits, la cohérence et les échanges ayant un objectif concret.":
        "Strukturierte, ernsthafte und verantwortungsbewusste Kommunikation. Diese Person bevorzugt Fakten, Konsistenz und Gespräche mit einem konkreten Ziel.",

      "Communication indépendante, originale et intellectuelle. Elle apprécie les idées nouvelles et peut aborder les situations avec détachement.":
        "Unabhängige, originelle und intellektuelle Kommunikation. Diese Person schätzt neue Ideen und kann Situationen mit Distanz betrachten.",

      "Communication intuitive, imagée et empathique. Elle perçoit les nuances invisibles et s’exprime souvent à travers le ressenti.":
        "Intuitive, bildhafte und einfühlsame Kommunikation. Diese Person nimmt subtile Nuancen wahr und drückt sich häufig über Gefühle aus.",

      "Échange fluide": "Fließender Austausch",
      "Connexion mentale": "Mentale Verbindung",
      "Points de vue opposés": "Gegensätzliche Sichtweisen",
      "Tension mentale": "Mentale Spannung",
      "Ajustement nécessaire": "Anpassung erforderlich",
      "Influence relationnelle": "Beziehungseinfluss",

      "Vos modes de pensée peuvent s’accorder naturellement, facilitant les discussions, les décisions et la compréhension mutuelle.":
        "Ihre Denkweisen können sich auf natürliche Weise ergänzen und Gespräche, Entscheidungen und gegenseitiges Verständnis erleichtern.",

      "Vos raisonnements peuvent suivre des directions différentes et créer des débats, des interruptions ou des incompréhensions.":
        "Ihre Denkweisen können unterschiedliche Richtungen einschlagen und Diskussionen, Unterbrechungen oder Missverständnisse verursachen.",

      "Cette connexion renforce fortement votre activité mentale commune et votre besoin d’échanger.":
        "Diese Verbindung verstärkt Ihre gemeinsame geistige Aktivität und Ihr Bedürfnis nach Austausch.",

      "Les mots peuvent facilement rejoindre les émotions, ce qui favorise l’écoute, la confiance et le sentiment d’être compris.":
        "Worte können Emotionen leicht erreichen und dadurch Zuhören, Vertrauen und das Gefühl, verstanden zu werden, fördern.",

      "La logique de l’un peut parfois sembler insensible aux émotions de l’autre, même sans intention de blesser.":
        "Die Logik des einen kann manchmal unsensibel gegenüber den Gefühlen des anderen wirken, auch ohne verletzende Absicht.",

      "Les pensées et les émotions sont fortement liées dans votre manière de communiquer.":
        "Gedanken und Emotionen sind in Ihrer Kommunikation eng miteinander verbunden.",

      "Les idées de l’un peuvent soutenir l’identité et les projets de l’autre, favorisant une communication stimulante.":
        "Die Ideen des einen können die Identität und Projekte des anderen unterstützen und eine anregende Kommunikation fördern.",

      "Certaines paroles peuvent être perçues comme une remise en question personnelle ou une critique de l’identité.":
        "Bestimmte Worte können als persönliche Infragestellung oder Kritik an der Identität wahrgenommen werden.",

      "La communication joue un rôle central dans la manière dont vous vous reconnaissez et vous encouragez.":
        "Kommunikation spielt eine zentrale Rolle dabei, wie Sie einander anerkennen und ermutigen.",

      "Les échanges peuvent être doux, agréables et diplomates, facilitant les déclarations d’affection et la réconciliation.":
        "Gespräche können sanft, angenehm und diplomatisch verlaufen und Zuneigung sowie Versöhnung erleichtern.",

      "Les mots utilisés pour exprimer l’affection peuvent ne pas toujours correspondre à ce que l’autre souhaite entendre.":
        "Die Worte, mit denen Zuneigung ausgedrückt wird, entsprechen möglicherweise nicht immer dem, was der andere hören möchte.",

      "La tendresse, le charme et les valeurs personnelles influencent fortement vos conversations.":
        "Zärtlichkeit, Charme und persönliche Werte beeinflussen Ihre Gespräche stark.",

      "Les échanges peuvent être dynamiques, francs et motivants, avec une capacité à transformer rapidement les idées en action.":
        "Der Austausch kann dynamisch, offen und motivierend sein und Ideen schnell in Handlungen verwandeln.",

      "Les discussions peuvent devenir rapides, défensives ou impulsives lorsque chacun cherche à imposer son point de vue.":
        "Gespräche können schnell, defensiv oder impulsiv werden, wenn jeder versucht, seinen Standpunkt durchzusetzen.",

      "Cette connexion stimule les débats, les décisions et l’expression directe des opinions.":
        "Diese Verbindung fördert Diskussionen, Entscheidungen und die direkte Äußerung von Meinungen.",

      "La communication peut gagner en sérieux, en clarté et en fiabilité, particulièrement dans les décisions importantes.":
        "Die Kommunikation kann ernster, klarer und zuverlässiger werden, besonders bei wichtigen Entscheidungen.",

      "L’un peut parfois se sentir jugé, corrigé ou limité dans sa manière de s’exprimer.":
        "Einer kann sich manchmal beurteilt, korrigiert oder in seiner Ausdrucksweise eingeschränkt fühlen.",

      "Les échanges soulignent les thèmes de responsabilité, de prudence et d’engagement.":
        "Der Austausch betont Themen wie Verantwortung, Vorsicht und Engagement.",

      "Cet aspect influence la manière dont vos idées, vos paroles et vos réactions mentales interagissent.":
        "Dieser Aspekt beeinflusst, wie Ihre Gedanken, Worte und mentalen Reaktionen miteinander interagieren.",

      "Vous pouvez saisir rapidement la logique de l’autre et développer un langage commun très personnel.":
        "Sie können die Logik des anderen schnell erfassen und eine sehr persönliche gemeinsame Sprache entwickeln.",

      "Vos raisonnements partagent une base similaire, ce qui facilite la coopération et la prise de décision.":
        "Ihre Denkweisen haben eine ähnliche Grundlage, was Zusammenarbeit und Entscheidungen erleichtert.",

      "Vos différences mentales peuvent élargir votre manière de voir les situations et vous aider à envisager davantage de solutions.":
        "Ihre mentalen Unterschiede können Ihre Sicht auf Situationen erweitern und Ihnen helfen, mehr Lösungen zu erkennen.",

      "Vous pouvez parfois présumer que l’autre comprend automatiquement, sans prendre le temps d’expliquer clairement vos attentes.":
        "Sie können manchmal annehmen, dass der andere automatisch versteht, ohne Ihre Erwartungen klar zu erklären.",

      "Vous pouvez renforcer mutuellement certaines habitudes de pensée et négliger les points de vue extérieurs.":
        "Sie können bestimmte Denkmuster gegenseitig verstärken und andere Perspektiven übersehen.",

      "Vos rythmes de réflexion peuvent différer. L’un peut répondre immédiatement alors que l’autre a besoin de temps pour comprendre ou formuler sa pensée.":
        "Ihre Denkrhythmen können unterschiedlich sein. Einer antwortet möglicherweise sofort, während der andere Zeit braucht, um zu verstehen oder seine Gedanken zu formulieren.",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastrie-Bericht",
    },

    signs: {
      Bélier: "Widder",
      Taureau: "Stier",
      Gémeaux: "Zwillinge",
      Cancer: "Krebs",
      Lion: "Löwe",
      Vierge: "Jungfrau",
      Balance: "Waage",
      Scorpion: "Skorpion",
      Sagittaire: "Schütze",
      Capricorne: "Steinbock",
      Verseau: "Wassermann",
      Poissons: "Fische",
    },

    planets: {
      Soleil: "Sonne",
      Lune: "Mond",
      Mercure: "Merkur",
      Vénus: "Venus",
      Mars: "Mars",
      Saturne: "Saturn",
    },

    aspects: {
      Conjonction: "Konjunktion",
      Opposition: "Opposition",
      Trigone: "Trigon",
      Carré: "Quadrat",
      Sextile: "Sextil",
      Quinconce: "Quinkunx",
    },

    elements: {
      Feu: "Feuer",
      Terre: "Erde",
      Air: "Luft",
      Eau: "Wasser",
    },

    mercuryIn: "Merkur in",

    elementWord: "Element",

    orbWord: "Orb",
  },

  it: {
    text: {
      "Première personne": "Prima persona",
      "Deuxième personne": "Seconda persona",
      "la première personne": "la prima persona",
      "la deuxième personne": "la seconda persona",

      "Dialogue et compréhension":
        "Dialogo e comprensione",

      "Votre compatibilité de communication":
        "La vostra compatibilità comunicativa",

      "Mercure révèle votre manière de penser, d’écouter, d’expliquer et de transformer vos idées en mots.":
        "Mercurio rivela il vostro modo di pensare, ascoltare, spiegare e trasformare le idee in parole.",

      "Pensée, parole et compréhension":
        "Pensiero, parola e comprensione",

      "La rencontre de vos deux Mercure":
        "L'incontro dei vostri due Mercurio",

      "Cette comparaison montre comment vos raisonnements, vos mots et vos rythmes mentaux peuvent se comprendre ou demander certains ajustements.":
        "Questo confronto mostra come i vostri ragionamenti, le parole e i ritmi mentali possano comprendersi o richiedere alcuni adattamenti.",

      "Votre dynamique mentale":
        "La vostra dinamica mentale",

      "Votre manière personnelle de communiquer":
        "Il vostro modo personale di comunicare",

      "Vos principales interactions mentales":
        "Le vostre principali interazioni mentali",

      "Votre force":
        "Il vostro punto di forza",

      "Votre point de vigilance":
        "Il vostro punto di attenzione",

      "Votre clé de communication":
        "La vostra chiave di comunicazione",

      "Lorsque le sujet devient important, ralentissez la conversation et reformulez ce que vous avez compris avant de répondre. Cette simple habitude permet de distinguer une véritable divergence d’un simple malentendu dans les mots ou dans le ton employé.":
        "Quando l'argomento diventa importante, rallentate la conversazione e riformulate ciò che avete compreso prima di rispondere. Questa semplice abitudine permette di distinguere una vera divergenza da un semplice malinteso nelle parole o nel tono utilizzato.",

      "La communication de":
        "La comunicazione di",

      "Les données disponibles ne permettent pas encore de préciser entièrement son style de communication.":
        "I dati disponibili non consentono ancora di precisare completamente il suo stile di comunicazione.",

      "Communication directe, rapide et spontanée. Cette personne préfère aller droit au but et exprimer immédiatement ce qu’elle pense.":
        "Comunicazione diretta, rapida e spontanea. Questa persona preferisce andare dritta al punto ed esprimere subito ciò che pensa.",

      "Communication posée, concrète et réfléchie. Elle prend le temps d’assimiler les informations avant de formuler une opinion stable.":
        "Comunicazione calma, concreta e riflessiva. Questa persona si prende il tempo necessario per assimilare le informazioni prima di formulare un'opinione stabile.",

      "Communication vive, curieuse et adaptable. Elle aime échanger, poser des questions et explorer plusieurs idées à la fois.":
        "Comunicazione vivace, curiosa e adattabile. Ama confrontarsi, fare domande ed esplorare più idee contemporaneamente.",

      "Communication intuitive et sensible. Les mots sont fortement influencés par l’émotion, la mémoire et le climat relationnel.":
        "Comunicazione intuitiva e sensibile. Le parole sono fortemente influenzate dalle emozioni, dalla memoria e dal clima relazionale.",

      "Communication chaleureuse, expressive et assurée. Elle cherche à transmettre ses idées avec conviction et présence.":
        "Comunicazione calorosa, espressiva e sicura. Cerca di trasmettere le proprie idee con convinzione e presenza.",

      "Communication précise, méthodique et analytique. Elle remarque facilement les détails et cherche des solutions pratiques.":
        "Comunicazione precisa, metodica e analitica. Nota facilmente i dettagli e cerca soluzioni pratiche.",

      "Communication diplomate, nuancée et attentive. Elle cherche l’équilibre, la coopération et évite généralement les confrontations inutiles.":
        "Comunicazione diplomatica, sfumata e attenta. Cerca equilibrio e cooperazione ed evita generalmente confronti inutili.",

      "Communication profonde, stratégique et perspicace. Elle observe beaucoup et préfère les échanges sincères aux conversations superficielles.":
        "Comunicazione profonda, strategica e perspicace. Osserva molto e preferisce gli scambi sinceri alle conversazioni superficiali.",

      "Communication franche, enthousiaste et visionnaire. Elle aime partager ses convictions et parler de possibilités, de projets ou d’avenir.":
        "Comunicazione franca, entusiasta e visionaria. Ama condividere le proprie convinzioni e parlare di possibilità, progetti e futuro.",

      "Communication structurée, sérieuse et responsable. Elle privilégie les faits, la cohérence et les échanges ayant un objectif concret.":
        "Comunicazione strutturata, seria e responsabile. Privilegia i fatti, la coerenza e gli scambi con un obiettivo concreto.",

      "Communication indépendante, originale et intellectuelle. Elle apprécie les idées nouvelles et peut aborder les situations avec détachement.":
        "Comunicazione indipendente, originale e intellettuale. Apprezza le idee nuove e può affrontare le situazioni con distacco.",

      "Communication intuitive, imagée et empathique. Elle perçoit les nuances invisibles et s’exprime souvent à travers le ressenti.":
        "Comunicazione intuitiva, immaginativa ed empatica. Coglie sfumature sottili e spesso si esprime attraverso le sensazioni.",

      "Échange fluide": "Scambio fluido",
      "Connexion mentale": "Connessione mentale",
      "Points de vue opposés": "Punti di vista opposti",
      "Tension mentale": "Tensione mentale",
      "Ajustement nécessaire": "Adattamento necessario",
      "Influence relationnelle": "Influenza relazionale",

      "Vos modes de pensée peuvent s’accorder naturellement, facilitant les discussions, les décisions et la compréhension mutuelle.":
        "I vostri modi di pensare possono armonizzarsi naturalmente, facilitando le conversazioni, le decisioni e la comprensione reciproca.",

      "Vos raisonnements peuvent suivre des directions différentes et créer des débats, des interruptions ou des incompréhensions.":
        "I vostri ragionamenti possono seguire direzioni diverse e creare discussioni, interruzioni o incomprensioni.",

      "Cette connexion renforce fortement votre activité mentale commune et votre besoin d’échanger.":
        "Questa connessione rafforza notevolmente la vostra attività mentale condivisa e il bisogno di comunicare.",

      "Les mots peuvent facilement rejoindre les émotions, ce qui favorise l’écoute, la confiance et le sentiment d’être compris.":
        "Le parole possono raggiungere facilmente le emozioni, favorendo l'ascolto, la fiducia e la sensazione di essere compresi.",

      "La logique de l’un peut parfois sembler insensible aux émotions de l’autre, même sans intention de blesser.":
        "La logica di uno può talvolta sembrare insensibile alle emozioni dell'altro, anche senza intenzione di ferire.",

      "Les pensées et les émotions sont fortement liées dans votre manière de communiquer.":
        "Pensieri ed emozioni sono strettamente collegati nel vostro modo di comunicare.",

      "Les idées de l’un peuvent soutenir l’identité et les projets de l’autre, favorisant une communication stimulante.":
        "Le idee di uno possono sostenere l'identità e i progetti dell'altro, favorendo una comunicazione stimolante.",

      "Certaines paroles peuvent être perçues comme une remise en question personnelle ou une critique de l’identité.":
        "Alcune parole possono essere percepite come una messa in discussione personale o una critica dell'identità.",

      "La communication joue un rôle central dans la manière dont vous vous reconnaissez et vous encouragez.":
        "La comunicazione svolge un ruolo centrale nel modo in cui vi riconoscete e vi incoraggiate.",

      "Les échanges peuvent être doux, agréables et diplomates, facilitant les déclarations d’affection et la réconciliation.":
        "Gli scambi possono essere dolci, piacevoli e diplomatici, facilitando le manifestazioni d'affetto e la riconciliazione.",

      "Les mots utilisés pour exprimer l’affection peuvent ne pas toujours correspondre à ce que l’autre souhaite entendre.":
        "Le parole usate per esprimere affetto potrebbero non corrispondere sempre a ciò che l'altro desidera sentire.",

      "La tendresse, le charme et les valeurs personnelles influencent fortement vos conversations.":
        "La tenerezza, il fascino e i valori personali influenzano fortemente le vostre conversazioni.",

      "Les échanges peuvent être dynamiques, francs et motivants, avec une capacité à transformer rapidement les idées en action.":
        "Gli scambi possono essere dinamici, franchi e motivanti, con la capacità di trasformare rapidamente le idee in azioni.",

      "Les discussions peuvent devenir rapides, défensives ou impulsives lorsque chacun cherche à imposer son point de vue.":
        "Le discussioni possono diventare rapide, difensive o impulsive quando ciascuno cerca di imporre il proprio punto di vista.",

      "Cette connexion stimule les débats, les décisions et l’expression directe des opinions.":
        "Questa connessione stimola i dibattiti, le decisioni e l'espressione diretta delle opinioni.",

      "La communication peut gagner en sérieux, en clarté et en fiabilité, particulièrement dans les décisions importantes.":
        "La comunicazione può diventare più seria, chiara e affidabile, soprattutto nelle decisioni importanti.",

      "L’un peut parfois se sentir jugé, corrigé ou limité dans sa manière de s’exprimer.":
        "Uno dei due può talvolta sentirsi giudicato, corretto o limitato nel proprio modo di esprimersi.",

      "Les échanges soulignent les thèmes de responsabilité, de prudence et d’engagement.":
        "Gli scambi mettono in evidenza i temi della responsabilità, della prudenza e dell'impegno.",

      "Cet aspect influence la manière dont vos idées, vos paroles et vos réactions mentales interagissent.":
        "Questo aspetto influenza il modo in cui le vostre idee, parole e reazioni mentali interagiscono.",

      "Vous pouvez saisir rapidement la logique de l’autre et développer un langage commun très personnel.":
        "Potete comprendere rapidamente la logica dell'altro e sviluppare un linguaggio comune molto personale.",

      "Vos raisonnements partagent une base similaire, ce qui facilite la coopération et la prise de décision.":
        "I vostri ragionamenti condividono una base simile, facilitando la cooperazione e il processo decisionale.",

      "Vos différences mentales peuvent élargir votre manière de voir les situations et vous aider à envisager davantage de solutions.":
        "Le vostre differenze mentali possono ampliare il modo in cui vedete le situazioni e aiutarvi a considerare più soluzioni.",

      "Vous pouvez parfois présumer que l’autre comprend automatiquement, sans prendre le temps d’expliquer clairement vos attentes.":
        "A volte potreste presumere che l'altro comprenda automaticamente, senza prendervi il tempo di spiegare chiaramente le vostre aspettative.",

      "Vous pouvez renforcer mutuellement certaines habitudes de pensée et négliger les points de vue extérieurs.":
        "Potreste rafforzare reciprocamente alcune abitudini di pensiero e trascurare punti di vista esterni.",

      "Vos rythmes de réflexion peuvent différer. L’un peut répondre immédiatement alors que l’autre a besoin de temps pour comprendre ou formuler sa pensée.":
        "I vostri ritmi di riflessione possono differire. Uno può rispondere immediatamente mentre l'altro ha bisogno di tempo per comprendere o formulare il proprio pensiero.",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Rapporto di sinastria",
    },

    signs: {
      Bélier: "Ariete",
      Taureau: "Toro",
      Gémeaux: "Gemelli",
      Cancer: "Cancro",
      Lion: "Leone",
      Vierge: "Vergine",
      Balance: "Bilancia",
      Scorpion: "Scorpione",
      Sagittaire: "Sagittario",
      Capricorne: "Capricorno",
      Verseau: "Acquario",
      Poissons: "Pesci",
    },

    planets: {
      Soleil: "Sole",
      Lune: "Luna",
      Mercure: "Mercurio",
      Vénus: "Venere",
      Mars: "Marte",
      Saturne: "Saturno",
    },

    aspects: {
      Conjonction: "Congiunzione",
      Opposition: "Opposizione",
      Trigone: "Trigono",
      Carré: "Quadratura",
      Sextile: "Sestile",
      Quinconce: "Quinconce",
    },

    elements: {
      Feu: "Fuoco",
      Terre: "Terra",
      Air: "Aria",
      Eau: "Acqua",
    },

    mercuryIn: "Mercurio in",

    elementWord: "Elemento",

    orbWord: "orbita",
  },

  pt: {
    text: {
      "Première personne": "Primeira pessoa",
      "Deuxième personne": "Segunda pessoa",
      "la première personne": "a primeira pessoa",
      "la deuxième personne": "a segunda pessoa",

      "Dialogue et compréhension":
        "Diálogo e compreensão",

      "Votre compatibilité de communication":
        "A sua compatibilidade de comunicação",

      "Mercure révèle votre manière de penser, d’écouter, d’expliquer et de transformer vos idées en mots.":
        "Mercúrio revela a sua forma de pensar, ouvir, explicar e transformar ideias em palavras.",

      "Pensée, parole et compréhension":
        "Pensamento, palavra e compreensão",

      "La rencontre de vos deux Mercure":
        "O encontro dos seus dois Mercúrios",

      "Cette comparaison montre comment vos raisonnements, vos mots et vos rythmes mentaux peuvent se comprendre ou demander certains ajustements.":
        "Esta comparação mostra como os seus raciocínios, palavras e ritmos mentais podem compreender-se ou exigir alguns ajustes.",

      "Votre dynamique mentale":
        "A sua dinâmica mental",

      "Votre manière personnelle de communiquer":
        "A sua forma pessoal de comunicar",

      "Vos principales interactions mentales":
        "As suas principais interações mentais",

      "Votre force":
        "O seu ponto forte",

      "Votre point de vigilance":
        "O seu ponto de atenção",

      "Votre clé de communication":
        "A sua chave de comunicação",

      "Lorsque le sujet devient important, ralentissez la conversation et reformulez ce que vous avez compris avant de répondre. Cette simple habitude permet de distinguer une véritable divergence d’un simple malentendu dans les mots ou dans le ton employé.":
        "Quando o assunto se tornar importante, abrande a conversa e reformule aquilo que compreendeu antes de responder. Este hábito simples permite distinguir uma verdadeira divergência de um simples mal-entendido nas palavras ou no tom utilizado.",

      "La communication de":
        "A comunicação de",

      "Les données disponibles ne permettent pas encore de préciser entièrement son style de communication.":
        "Os dados disponíveis ainda não permitem especificar totalmente o seu estilo de comunicação.",

      "Communication directe, rapide et spontanée. Cette personne préfère aller droit au but et exprimer immédiatement ce qu’elle pense.":
        "Comunicação direta, rápida e espontânea. Esta pessoa prefere ir diretamente ao assunto e expressar imediatamente aquilo que pensa.",

      "Communication posée, concrète et réfléchie. Elle prend le temps d’assimiler les informations avant de formuler une opinion stable.":
        "Comunicação calma, concreta e ponderada. Esta pessoa dedica tempo a assimilar as informações antes de formar uma opinião estável.",

      "Communication vive, curieuse et adaptable. Elle aime échanger, poser des questions et explorer plusieurs idées à la fois.":
        "Comunicação viva, curiosa e adaptável. Gosta de trocar ideias, fazer perguntas e explorar várias possibilidades ao mesmo tempo.",

      "Communication intuitive et sensible. Les mots sont fortement influencés par l’émotion, la mémoire et le climat relationnel.":
        "Comunicação intuitiva e sensível. As palavras são fortemente influenciadas pela emoção, pela memória e pelo clima da relação.",

      "Communication chaleureuse, expressive et assurée. Elle cherche à transmettre ses idées avec conviction et présence.":
        "Comunicação calorosa, expressiva e segura. Procura transmitir as suas ideias com convicção e presença.",

      "Communication précise, méthodique et analytique. Elle remarque facilement les détails et cherche des solutions pratiques.":
        "Comunicação precisa, metódica e analítica. Repara facilmente nos detalhes e procura soluções práticas.",

      "Communication diplomate, nuancée et attentive. Elle cherche l’équilibre, la coopération et évite généralement les confrontations inutiles.":
        "Comunicação diplomática, equilibrada e atenta. Procura equilíbrio e cooperação e geralmente evita confrontos desnecessários.",

      "Communication profonde, stratégique et perspicace. Elle observe beaucoup et préfère les échanges sincères aux conversations superficielles.":
        "Comunicação profunda, estratégica e perspicaz. Observa muito e prefere conversas sinceras a trocas superficiais.",

      "Communication franche, enthousiaste et visionnaire. Elle aime partager ses convictions et parler de possibilités, de projets ou d’avenir.":
        "Comunicação franca, entusiasta e visionária. Gosta de partilhar convicções e falar de possibilidades, projetos e futuro.",

      "Communication structurée, sérieuse et responsable. Elle privilégie les faits, la cohérence et les échanges ayant un objectif concret.":
        "Comunicação estruturada, séria e responsável. Privilegia os factos, a coerência e as conversas com um objetivo concreto.",

      "Communication indépendante, originale et intellectuelle. Elle apprécie les idées nouvelles et peut aborder les situations avec détachement.":
        "Comunicação independente, original e intelectual. Aprecia ideias novas e pode abordar as situações com algum distanciamento.",

      "Communication intuitive, imagée et empathique. Elle perçoit les nuances invisibles et s’exprime souvent à travers le ressenti.":
        "Comunicação intuitiva, imaginativa e empática. Percebe nuances subtis e muitas vezes expressa-se através do que sente.",

      "Échange fluide": "Troca fluida",
      "Connexion mentale": "Conexão mental",
      "Points de vue opposés": "Pontos de vista opostos",
      "Tension mentale": "Tensão mental",
      "Ajustement nécessaire": "Ajuste necessário",
      "Influence relationnelle": "Influência relacional",

      "Vos modes de pensée peuvent s’accorder naturellement, facilitant les discussions, les décisions et la compréhension mutuelle.":
        "As suas formas de pensar podem harmonizar-se naturalmente, facilitando conversas, decisões e compreensão mútua.",

      "Vos raisonnements peuvent suivre des directions différentes et créer des débats, des interruptions ou des incompréhensions.":
        "Os seus raciocínios podem seguir direções diferentes e criar debates, interrupções ou mal-entendidos.",

      "Cette connexion renforce fortement votre activité mentale commune et votre besoin d’échanger.":
        "Esta conexão reforça intensamente a sua atividade mental partilhada e a necessidade de comunicar.",

      "Les mots peuvent facilement rejoindre les émotions, ce qui favorise l’écoute, la confiance et le sentiment d’être compris.":
        "As palavras podem chegar facilmente às emoções, favorecendo a escuta, a confiança e a sensação de ser compreendido.",

      "La logique de l’un peut parfois sembler insensible aux émotions de l’autre, même sans intention de blesser.":
        "A lógica de uma pessoa pode por vezes parecer insensível às emoções da outra, mesmo sem intenção de magoar.",

      "Les pensées et les émotions sont fortement liées dans votre manière de communiquer.":
        "Pensamentos e emoções estão fortemente ligados na sua forma de comunicar.",

      "Les idées de l’un peuvent soutenir l’identité et les projets de l’autre, favorisant une communication stimulante.":
        "As ideias de uma pessoa podem apoiar a identidade e os projetos da outra, favorecendo uma comunicação estimulante.",

      "Certaines paroles peuvent être perçues comme une remise en question personnelle ou une critique de l’identité.":
        "Algumas palavras podem ser percebidas como um questionamento pessoal ou uma crítica à identidade.",

      "La communication joue un rôle central dans la manière dont vous vous reconnaissez et vous encouragez.":
        "A comunicação desempenha um papel central na forma como se reconhecem e encorajam mutuamente.",

      "Les échanges peuvent être doux, agréables et diplomates, facilitant les déclarations d’affection et la réconciliation.":
        "As conversas podem ser suaves, agradáveis e diplomáticas, facilitando manifestações de afeto e reconciliação.",

      "Les mots utilisés pour exprimer l’affection peuvent ne pas toujours correspondre à ce que l’autre souhaite entendre.":
        "As palavras utilizadas para expressar afeto podem nem sempre corresponder ao que a outra pessoa deseja ouvir.",

      "La tendresse, le charme et les valeurs personnelles influencent fortement vos conversations.":
        "A ternura, o charme e os valores pessoais influenciam fortemente as suas conversas.",

      "Les échanges peuvent être dynamiques, francs et motivants, avec une capacité à transformer rapidement les idées en action.":
        "As conversas podem ser dinâmicas, francas e motivadoras, com capacidade para transformar rapidamente ideias em ação.",

      "Les discussions peuvent devenir rapides, défensives ou impulsives lorsque chacun cherche à imposer son point de vue.":
        "As discussões podem tornar-se rápidas, defensivas ou impulsivas quando cada pessoa procura impor o seu ponto de vista.",

      "Cette connexion stimule les débats, les décisions et l’expression directe des opinions.":
        "Esta conexão estimula debates, decisões e a expressão direta de opiniões.",

      "La communication peut gagner en sérieux, en clarté et en fiabilité, particulièrement dans les décisions importantes.":
        "A comunicação pode ganhar seriedade, clareza e fiabilidade, especialmente em decisões importantes.",

      "L’un peut parfois se sentir jugé, corrigé ou limité dans sa manière de s’exprimer.":
        "Uma pessoa pode por vezes sentir-se julgada, corrigida ou limitada na sua forma de se expressar.",

      "Les échanges soulignent les thèmes de responsabilité, de prudence et d’engagement.":
        "As conversas destacam temas de responsabilidade, prudência e compromisso.",

      "Cet aspect influence la manière dont vos idées, vos paroles et vos réactions mentales interagissent.":
        "Este aspeto influencia a forma como as suas ideias, palavras e reações mentais interagem.",

      "Vous pouvez saisir rapidement la logique de l’autre et développer un langage commun très personnel.":
        "Podem compreender rapidamente a lógica um do outro e desenvolver uma linguagem comum muito pessoal.",

      "Vos raisonnements partagent une base similaire, ce qui facilite la coopération et la prise de décision.":
        "Os seus raciocínios partilham uma base semelhante, o que facilita a cooperação e a tomada de decisões.",

      "Vos différences mentales peuvent élargir votre manière de voir les situations et vous aider à envisager davantage de solutions.":
        "As suas diferenças mentais podem ampliar a forma como veem as situações e ajudá-los a considerar mais soluções.",

      "Vous pouvez parfois présumer que l’autre comprend automatiquement, sans prendre le temps d’expliquer clairement vos attentes.":
        "Por vezes podem presumir que a outra pessoa compreende automaticamente, sem dedicar tempo a explicar claramente as suas expectativas.",

      "Vous pouvez renforcer mutuellement certaines habitudes de pensée et négliger les points de vue extérieurs.":
        "Podem reforçar mutuamente certos hábitos de pensamento e ignorar perspetivas externas.",

      "Vos rythmes de réflexion peuvent différer. L’un peut répondre immédiatement alors que l’autre a besoin de temps pour comprendre ou formuler sa pensée.":
        "Os seus ritmos de reflexão podem ser diferentes. Uma pessoa pode responder imediatamente enquanto a outra precisa de tempo para compreender ou formular o seu pensamento.",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Relatório de sinastria",
    },

    signs: {
      Bélier: "Áries",
      Taureau: "Touro",
      Gémeaux: "Gêmeos",
      Cancer: "Câncer",
      Lion: "Leão",
      Vierge: "Virgem",
      Balance: "Libra",
      Scorpion: "Escorpião",
      Sagittaire: "Sagitário",
      Capricorne: "Capricórnio",
      Verseau: "Aquário",
      Poissons: "Peixes",
    },

    planets: {
      Soleil: "Sol",
      Lune: "Lua",
      Mercure: "Mercúrio",
      Vénus: "Vênus",
      Mars: "Marte",
      Saturne: "Saturno",
    },

    aspects: {
      Conjonction: "Conjunção",
      Opposition: "Oposição",
      Trigone: "Trígono",
      Carré: "Quadratura",
      Sextile: "Sextil",
      Quinconce: "Quincúncio",
    },

    elements: {
      Feu: "Fogo",
      Terre: "Terra",
      Air: "Ar",
      Eau: "Água",
    },

    mercuryIn: "Mercúrio em",

    elementWord: "Elemento",

    orbWord: "orbe",
  },
};

type Replacement = {
  start: number;
  end: number;
  value: string;
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
  const sorted =
    [...replacements].sort(
      (a, b) =>
        b.start - a.start,
    );

  let output = source;

  for (const replacement of sorted) {
    output =
      output.slice(
        0,
        replacement.start,
      ) +
      replacement.value +
      output.slice(
        replacement.end,
      );
  }

  return output;
}

function localizeCompleteLiterals(
  source: string,
  translations: Record<string, string>,
): string {
  const sourceFile =
    ts.createSourceFile(
      "CompatibilityCommunication.tsx",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );

  const replacements:
    Replacement[] = [];

  const visit = (
    node: ts.Node,
  ): void => {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    ) {
      const exact =
        node.text;

      const normalized =
        normalizeVisibleText(
          exact,
        );

      const translated =
        translations[exact] ??
        translations[normalized];

      if (
        typeof translated === "string" &&
        translated !== exact
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

    if (
      ts.isJsxText(node)
    ) {
      const original =
        normalizeVisibleText(
          node.getText(
            sourceFile,
          ),
        );

      const translated =
        translations[original];

      if (
        typeof translated === "string" &&
        translated !== original
      ) {
        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),

          end:
            node.getEnd(),

          value:
            `{${JSON.stringify(
              translated,
            )}}`,
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
  data: LocaleData,
): string {
  return `
const __COMMUNICATION_SIGNS =
  ${JSON.stringify(
    data.signs,
    null,
    2,
  )} as Record<string, string>;

const __COMMUNICATION_PLANETS =
  ${JSON.stringify(
    data.planets,
    null,
    2,
  )} as Record<string, string>;

const __COMMUNICATION_ASPECTS =
  ${JSON.stringify(
    data.aspects,
    null,
    2,
  )} as Record<string, string>;

const __COMMUNICATION_ELEMENTS =
  ${JSON.stringify(
    data.elements,
    null,
    2,
  )} as Record<string, string>;

const __COMMUNICATION_MERCURY_IN =
  ${JSON.stringify(
    data.mercuryIn,
  )};

const __COMMUNICATION_ELEMENT_WORD =
  ${JSON.stringify(
    data.elementWord,
  )};

const __COMMUNICATION_ORB_WORD =
  ${JSON.stringify(
    data.orbWord,
  )};

function localizeCommunicationSign(
  value: string,
): string {
  return (
    __COMMUNICATION_SIGNS[value] ??
    value
  );
}

function localizeCommunicationPlanet(
  value: string,
): string {
  return (
    __COMMUNICATION_PLANETS[value] ??
    value
  );
}

function localizeCommunicationAspect(
  value: string,
): string {
  return (
    __COMMUNICATION_ASPECTS[value] ??
    value
  );
}

function localizeCommunicationElement(
  value: string,
): string {
  return (
    __COMMUNICATION_ELEMENTS[value] ??
    value
  );
}
`;
}

function injectHelpers(
  source: string,
  data: LocaleData,
): string {
  const marker =
    "function getPersonName(";

  if (
    !source.includes(marker)
  ) {
    return source;
  }

  return source.replace(
    marker,
    `${buildHelpers(
      data,
    )}\n${marker}`,
  );
}

function replaceTargetedDisplayCode(
  source: string,
): string {
  let output = source;

  /*
   * Mercure + signe.
   *
   * Le signe original reste inchangé
   * pour tous les calculs.
   */
  output =
    output.replace(
      /Mercure en \{mercurySign1\}/g,
      "{__COMMUNICATION_MERCURY_IN} {localizeCommunicationSign(mercurySign1)}",
    );

  output =
    output.replace(
      /Mercure en \{mercurySign2\}/g,
      "{__COMMUNICATION_MERCURY_IN} {localizeCommunicationSign(mercurySign2)}",
    );

  output =
    output.replace(
      /Mercure en \{mercurySign\}/g,
      "{__COMMUNICATION_MERCURY_IN} {localizeCommunicationSign(mercurySign)}",
    );

  /*
   * Élément visible seulement.
   */
  output =
    output.replace(
      /Élément\{" "\}\s*\{getElement\(mercurySign1\)\}/g,
      "{__COMMUNICATION_ELEMENT_WORD}{\" \"}{localizeCommunicationElement(getElement(mercurySign1))}",
    );

  output =
    output.replace(
      /Élément\{" "\}\s*\{getElement\(mercurySign2\)\}/g,
      "{__COMMUNICATION_ELEMENT_WORD}{\" \"}{localizeCommunicationElement(getElement(mercurySign2))}",
    );

  /*
   * Les fonctions utilitaires retournent
   * actuellement les noms français visibles.
   *
   * On localise leurs résultats uniquement
   * au moment de l'affichage.
   */
  output =
    output.replace(
      /const person1Planet\s*=\s*translateCompatibilityPlanet\(\s*aspect\.person1Planet,\s*\);/m,
      `const person1Planet =
    localizeCommunicationPlanet(
      translateCompatibilityPlanet(
        aspect.person1Planet,
      ),
    );`,
    );

  output =
    output.replace(
      /const person2Planet\s*=\s*translateCompatibilityPlanet\(\s*aspect\.person2Planet,\s*\);/m,
      `const person2Planet =
    localizeCommunicationPlanet(
      translateCompatibilityPlanet(
        aspect.person2Planet,
      ),
    );`,
    );

  output =
    output.replace(
      /\{translateCompatibilityAspect\(\s*aspect\.type,\s*\)\}/g,
      `{localizeCommunicationAspect(
              translateCompatibilityAspect(
                aspect.type,
              ),
            )}`,
    );

  /*
   * Orbe.
   */
  output =
    output.replace(
      /\{" • orbe "\}/g,
      `{" • "}{__COMMUNICATION_ORB_WORD}{" "}`,
    );

  return output;
}

export function localizeCompatibilityCommunication(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (
    locale === "fr"
  ) {
    return source;
  }

  const data =
    TRANSLATIONS[
      locale as NonFrenchLocale
    ];

  if (!data) {
    return source;
  }

  let localized =
    localizeCompleteLiterals(
      source,
      data.text,
    );

  localized =
    injectHelpers(
      localized,
      data,
    );

  localized =
    replaceTargetedDisplayCode(
      localized,
    );

  return localized;
}
