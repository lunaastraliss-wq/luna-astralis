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

const TRANSLATIONS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Influence planétaire":
      "Planetary influence",

    "Influence dominante":
      "Dominant influence",

    "Votre clé astrologique":
      "Your astrological key",

    "Conseil":
      "Advice",

    "Influences célestes":
      "Celestial influences",

    "Les planètes qui vous accompagnent":
      "The planets guiding you",

    "Les autres mouvements célestes":
      "Other celestial movements",

    "Synthèse des influences":
      "Overview of the influences",

    "Conseil pour cette période":
      "Guidance for this period",

    "Une énergie céleste subtile":
      "A subtle celestial energy",

    "Ces influences comparent les positions planétaires de la journée à votre thème natal afin de révéler les énergies les plus personnelles et les plus actives aujourd’hui.":
      "These influences compare today's planetary positions with your birth chart to reveal the most personal and active energies affecting you today.",

    "Les mouvements planétaires de cette période ne s'expriment jamais de façon isolée. Ensemble, ils créent une dynamique qui influence vos émotions, votre manière d'agir, vos relations et les occasions qui se présenteront à vous.":
      "The planetary movements of this period never act in isolation. Together, they create a dynamic that influences your emotions, your way of acting, your relationships, and the opportunities that may arise.",

    "Votre planète dominante donne le ton principal de cette période, tandis que les autres influences viennent nuancer votre parcours en mettant l'accent sur certains domaines de votre vie. Certaines favoriseront l'action, alors que d'autres inviteront à la réflexion, à la prudence ou à l'ouverture.":
      "Your dominant planet sets the main tone for this period, while the other influences add nuance to your journey by emphasizing certain areas of your life. Some will favor action, while others will encourage reflection, caution, or openness.",

    "En observant ces énergies dans leur ensemble plutôt que séparément, vous pourrez prendre des décisions plus éclairées, reconnaître les périodes favorables et mieux traverser les défis lorsqu'ils se présenteront.":
      "By observing these energies as a whole rather than separately, you can make more informed decisions, recognize favorable periods, and navigate challenges more effectively when they arise.",

    "Utilisez ces indications comme une boussole plutôt qu'une certitude. L'astrologie met en lumière des tendances, mais vos choix demeurent au cœur de votre évolution.":
      "Use these indications as a compass rather than a certainty. Astrology highlights tendencies, but your choices remain at the heart of your evolution.",

    "Les planètes éclairent les tendances de votre chemin, mais elles ne prennent jamais les décisions à votre place. Accueillez les occasions avec discernement, prenez le temps d'observer ce qui se répète et choisissez les actions qui respectent réellement votre rythme. Chaque décision consciente peut transformer une tension en apprentissage et une possibilité en véritable évolution.":
      "The planets illuminate the tendencies along your path, but they never make decisions for you. Welcome opportunities with discernment, take time to observe recurring patterns, and choose actions that truly respect your rhythm. Every conscious decision can transform tension into learning and possibility into genuine growth.",

    "Les influences planétaires de cette période seront ajoutées ici lors de la génération de votre horoscope personnalisé.":
      "The planetary influences for this period will be added here when your personalized horoscope is generated.",
  },

  es: {
    "Influence planétaire":
      "Influencia planetaria",

    "Influence dominante":
      "Influencia dominante",

    "Votre clé astrologique":
      "Su clave astrológica",

    "Conseil":
      "Consejo",

    "Influences célestes":
      "Influencias celestes",

    "Les planètes qui vous accompagnent":
      "Los planetas que le acompañan",

    "Les autres mouvements célestes":
      "Otros movimientos celestes",

    "Synthèse des influences":
      "Síntesis de las influencias",

    "Conseil pour cette période":
      "Consejo para este período",

    "Une énergie céleste subtile":
      "Una energía celeste sutil",

    "Ces influences comparent les positions planétaires de la journée à votre thème natal afin de révéler les énergies les plus personnelles et les plus actives aujourd’hui.":
      "Estas influencias comparan las posiciones planetarias del día con su carta natal para revelar las energías más personales y activas de hoy.",

    "Les mouvements planétaires de cette période ne s'expriment jamais de façon isolée. Ensemble, ils créent une dynamique qui influence vos émotions, votre manière d'agir, vos relations et les occasions qui se présenteront à vous.":
      "Los movimientos planetarios de este período nunca actúan de forma aislada. Juntos crean una dinámica que influye en sus emociones, su manera de actuar, sus relaciones y las oportunidades que se presentarán.",

    "Votre planète dominante donne le ton principal de cette période, tandis que les autres influences viennent nuancer votre parcours en mettant l'accent sur certains domaines de votre vie. Certaines favoriseront l'action, alors que d'autres inviteront à la réflexion, à la prudence ou à l'ouverture.":
      "Su planeta dominante marca el tono principal de este período, mientras que las demás influencias aportan matices a su camino y destacan determinados ámbitos de su vida. Algunas favorecerán la acción, mientras que otras invitarán a la reflexión, la prudencia o la apertura.",

    "En observant ces énergies dans leur ensemble plutôt que séparément, vous pourrez prendre des décisions plus éclairées, reconnaître les périodes favorables et mieux traverser les défis lorsqu'ils se présenteront.":
      "Al observar estas energías en conjunto y no por separado, podrá tomar decisiones más informadas, reconocer los períodos favorables y afrontar mejor los desafíos cuando aparezcan.",

    "Utilisez ces indications comme une boussole plutôt qu'une certitude. L'astrologie met en lumière des tendances, mais vos choix demeurent au cœur de votre évolution.":
      "Utilice estas indicaciones como una brújula y no como una certeza. La astrología revela tendencias, pero sus decisiones permanecen en el centro de su evolución.",

    "Les planètes éclairent les tendances de votre chemin, mais elles ne prennent jamais les décisions à votre place. Accueillez les occasions avec discernement, prenez le temps d'observer ce qui se répète et choisissez les actions qui respectent réellement votre rythme. Chaque décision consciente peut transformer une tension en apprentissage et une possibilité en véritable évolution.":
      "Los planetas iluminan las tendencias de su camino, pero nunca toman decisiones por usted. Reciba las oportunidades con discernimiento, observe lo que se repite y elija acciones que respeten verdaderamente su ritmo. Cada decisión consciente puede transformar una tensión en aprendizaje y una posibilidad en una verdadera evolución.",

    "Les influences planétaires de cette période seront ajoutées ici lors de la génération de votre horoscope personnalisé.":
      "Las influencias planetarias de este período se añadirán aquí al generar su horóscopo personalizado.",
  },

  de: {
    "Influence planétaire":
      "Planetarischer Einfluss",

    "Influence dominante":
      "Dominanter Einfluss",

    "Votre clé astrologique":
      "Ihr astrologischer Schlüssel",

    "Conseil":
      "Rat",

    "Influences célestes":
      "Himmlische Einflüsse",

    "Les planètes qui vous accompagnent":
      "Die Planeten, die Sie begleiten",

    "Les autres mouvements célestes":
      "Weitere himmlische Bewegungen",

    "Synthèse des influences":
      "Zusammenfassung der Einflüsse",

    "Conseil pour cette période":
      "Rat für diesen Zeitraum",

    "Une énergie céleste subtile":
      "Eine subtile himmlische Energie",

    "Ces influences comparent les positions planétaires de la journée à votre thème natal afin de révéler les énergies les plus personnelles et les plus actives aujourd’hui.":
      "Diese Einflüsse vergleichen die heutigen Planetenpositionen mit Ihrem Geburtshoroskop, um die persönlichsten und aktivsten Energien des Tages sichtbar zu machen.",

    "Les mouvements planétaires de cette période ne s'expriment jamais de façon isolée. Ensemble, ils créent une dynamique qui influence vos émotions, votre manière d'agir, vos relations et les occasions qui se présenteront à vous.":
      "Die planetarischen Bewegungen dieses Zeitraums wirken niemals isoliert. Gemeinsam erzeugen sie eine Dynamik, die Ihre Emotionen, Ihre Handlungsweise, Ihre Beziehungen und die sich bietenden Möglichkeiten beeinflusst.",

    "Votre planète dominante donne le ton principal de cette période, tandis que les autres influences viennent nuancer votre parcours en mettant l'accent sur certains domaines de votre vie. Certaines favoriseront l'action, alors que d'autres inviteront à la réflexion, à la prudence ou à l'ouverture.":
      "Ihr dominanter Planet gibt den Grundton dieses Zeitraums vor, während die anderen Einflüsse Ihren Weg nuancieren und bestimmte Lebensbereiche hervorheben. Einige fördern das Handeln, andere laden zu Reflexion, Vorsicht oder Offenheit ein.",

    "En observant ces énergies dans leur ensemble plutôt que séparément, vous pourrez prendre des décisions plus éclairées, reconnaître les périodes favorables et mieux traverser les défis lorsqu'ils se présenteront.":
      "Wenn Sie diese Energien als Ganzes statt getrennt betrachten, können Sie fundiertere Entscheidungen treffen, günstige Phasen erkennen und Herausforderungen besser bewältigen.",

    "Utilisez ces indications comme une boussole plutôt qu'une certitude. L'astrologie met en lumière des tendances, mais vos choix demeurent au cœur de votre évolution.":
      "Nutzen Sie diese Hinweise als Kompass und nicht als Gewissheit. Die Astrologie zeigt Tendenzen auf, doch Ihre Entscheidungen bleiben der Kern Ihrer Entwicklung.",

    "Les planètes éclairent les tendances de votre chemin, mais elles ne prennent jamais les décisions à votre place. Accueillez les occasions avec discernement, prenez le temps d'observer ce qui se répète et choisissez les actions qui respectent réellement votre rythme. Chaque décision consciente peut transformer une tension en apprentissage et une possibilité en véritable évolution.":
      "Die Planeten beleuchten die Tendenzen Ihres Weges, treffen jedoch niemals Entscheidungen für Sie. Begegnen Sie Chancen mit Urteilsvermögen, beobachten Sie wiederkehrende Muster und wählen Sie Handlungen, die Ihren eigenen Rhythmus respektieren. Jede bewusste Entscheidung kann Spannung in Erkenntnis und eine Möglichkeit in echte Entwicklung verwandeln.",

    "Les influences planétaires de cette période seront ajoutées ici lors de la génération de votre horoscope personnalisé.":
      "Die planetarischen Einflüsse dieses Zeitraums werden hier bei der Erstellung Ihres persönlichen Horoskops ergänzt.",
  },

  it: {
    "Influence planétaire":
      "Influenza planetaria",

    "Influence dominante":
      "Influenza dominante",

    "Votre clé astrologique":
      "La tua chiave astrologica",

    "Conseil":
      "Consiglio",

    "Influences célestes":
      "Influenze celesti",

    "Les planètes qui vous accompagnent":
      "I pianeti che ti accompagnano",

    "Les autres mouvements célestes":
      "Gli altri movimenti celesti",

    "Synthèse des influences":
      "Sintesi delle influenze",

    "Conseil pour cette période":
      "Consiglio per questo periodo",

    "Une énergie céleste subtile":
      "Una sottile energia celeste",

    "Ces influences comparent les positions planétaires de la journée à votre thème natal afin de révéler les énergies les plus personnelles et les plus actives aujourd’hui.":
      "Queste influenze confrontano le posizioni planetarie del giorno con il tuo tema natale per rivelare le energie più personali e attive di oggi.",

    "Les mouvements planétaires de cette période ne s'expriment jamais de façon isolée. Ensemble, ils créent une dynamique qui influence vos émotions, votre manière d'agir, vos relations et les occasions qui se présenteront à vous.":
      "I movimenti planetari di questo periodo non agiscono mai in modo isolato. Insieme creano una dinamica che influenza le tue emozioni, il tuo modo di agire, le tue relazioni e le opportunità che si presenteranno.",

    "Votre planète dominante donne le ton principal de cette période, tandis que les autres influences viennent nuancer votre parcours en mettant l'accent sur certains domaines de votre vie. Certaines favoriseront l'action, alors que d'autres inviteront à la réflexion, à la prudence ou à l'ouverture.":
      "Il tuo pianeta dominante dà il tono principale a questo periodo, mentre le altre influenze arricchiscono il tuo percorso mettendo in evidenza determinati ambiti della tua vita. Alcune favoriranno l'azione, mentre altre inviteranno alla riflessione, alla prudenza o all'apertura.",

    "En observant ces énergies dans leur ensemble plutôt que séparément, vous pourrez prendre des décisions plus éclairées, reconnaître les périodes favorables et mieux traverser les défis lorsqu'ils se présenteront.":
      "Osservando queste energie nel loro insieme anziché separatamente, potrai prendere decisioni più consapevoli, riconoscere i periodi favorevoli e affrontare meglio le sfide quando si presenteranno.",

    "Utilisez ces indications comme une boussole plutôt qu'une certitude. L'astrologie met en lumière des tendances, mais vos choix demeurent au cœur de votre évolution.":
      "Usa queste indicazioni come una bussola anziché come una certezza. L'astrologia mette in luce delle tendenze, ma le tue scelte restano al centro della tua evoluzione.",

    "Les planètes éclairent les tendances de votre chemin, mais elles ne prennent jamais les décisions à votre place. Accueillez les occasions avec discernement, prenez le temps d'observer ce qui se répète et choisissez les actions qui respectent réellement votre rythme. Chaque décision consciente peut transformer une tension en apprentissage et une possibilité en véritable évolution.":
      "I pianeti illuminano le tendenze del tuo cammino, ma non prendono mai decisioni al posto tuo. Accogli le opportunità con discernimento, osserva ciò che si ripete e scegli azioni che rispettino davvero il tuo ritmo. Ogni decisione consapevole può trasformare una tensione in apprendimento e una possibilità in una vera evoluzione.",

    "Les influences planétaires de cette période seront ajoutées ici lors de la génération de votre horoscope personnalisé.":
      "Le influenze planetarie di questo periodo saranno aggiunte qui durante la generazione del tuo oroscopo personalizzato.",
  },

  pt: {
    "Influence planétaire":
      "Influência planetária",

    "Influence dominante":
      "Influência dominante",

    "Votre clé astrologique":
      "Sua chave astrológica",

    "Conseil":
      "Conselho",

    "Influences célestes":
      "Influências celestes",

    "Les planètes qui vous accompagnent":
      "Os planetas que acompanham você",

    "Les autres mouvements célestes":
      "Os outros movimentos celestes",

    "Synthèse des influences":
      "Síntese das influências",

    "Conseil pour cette période":
      "Conselho para este período",

    "Une énergie céleste subtile":
      "Uma energia celeste sutil",

    "Ces influences comparent les positions planétaires de la journée à votre thème natal afin de révéler les énergies les plus personnelles et les plus actives aujourd’hui.":
      "Estas influências comparam as posições planetárias do dia com o seu mapa astral para revelar as energias mais pessoais e ativas de hoje.",

    "Les mouvements planétaires de cette période ne s'expriment jamais de façon isolée. Ensemble, ils créent une dynamique qui influence vos émotions, votre manière d'agir, vos relations et les occasions qui se présenteront à vous.":
      "Os movimentos planetários deste período nunca atuam de forma isolada. Juntos, criam uma dinâmica que influencia suas emoções, sua maneira de agir, seus relacionamentos e as oportunidades que surgirão.",

    "Votre planète dominante donne le ton principal de cette période, tandis que les autres influences viennent nuancer votre parcours en mettant l'accent sur certains domaines de votre vie. Certaines favoriseront l'action, alors que d'autres inviteront à la réflexion, à la prudence ou à l'ouverture.":
      "Seu planeta dominante define o tom principal deste período, enquanto as outras influências acrescentam nuances ao seu caminho, destacando determinadas áreas de sua vida. Algumas favorecerão a ação, enquanto outras convidarão à reflexão, à prudência ou à abertura.",

    "En observant ces énergies dans leur ensemble plutôt que séparément, vous pourrez prendre des décisions plus éclairées, reconnaître les périodes favorables et mieux traverser les défis lorsqu'ils se présenteront.":
      "Ao observar essas energias em conjunto, em vez de separadamente, você poderá tomar decisões mais conscientes, reconhecer períodos favoráveis e enfrentar melhor os desafios quando surgirem.",

    "Utilisez ces indications comme une boussole plutôt qu'une certitude. L'astrologie met en lumière des tendances, mais vos choix demeurent au cœur de votre évolution.":
      "Use essas indicações como uma bússola, e não como uma certeza. A astrologia revela tendências, mas suas escolhas permanecem no centro da sua evolução.",

    "Les planètes éclairent les tendances de votre chemin, mais elles ne prennent jamais les décisions à votre place. Accueillez les occasions avec discernement, prenez le temps d'observer ce qui se répète et choisissez les actions qui respectent réellement votre rythme. Chaque décision consciente peut transformer une tension en apprentissage et une possibilité en véritable évolution.":
      "Os planetas iluminam as tendências do seu caminho, mas nunca tomam decisões por você. Receba as oportunidades com discernimento, observe o que se repete e escolha ações que realmente respeitem o seu ritmo. Cada decisão consciente pode transformar uma tensão em aprendizado e uma possibilidade em verdadeira evolução.",

    "Les influences planétaires de cette période seront ajoutées ici lors de la génération de votre horoscope personnalisé.":
      "As influências planetárias deste período serão adicionadas aqui durante a geração do seu horóscopo personalizado.",
  },
};

const MONTHS: Record<
  NonFrenchLocale,
  string[]
> = {
  en: [
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
    "December",
  ],

  es: [
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
    "diciembre",
  ],

  de: [
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
    "Dezember",
  ],

  it: [
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
    "dicembre",
  ],

  pt: [
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
    "dezembro",
  ],
};

const FRENCH_MONTHS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
] as const;

const PLANETS: Record<
  NonFrenchLocale,
  Record<string, string>
> = {
  en: {
    Soleil: "Sun",
    Lune: "Moon",
    Mercure: "Mercury",
    Vénus: "Venus",
    Venus: "Venus",
    Mars: "Mars",
    Jupiter: "Jupiter",
    Saturne: "Saturn",
    Uranus: "Uranus",
    Neptune: "Neptune",
    Pluton: "Pluto",
    Chiron: "Chiron",
    "Nœud Nord": "North Node",
    "Noeud Nord": "North Node",
    "Nœud Sud": "South Node",
    "Noeud Sud": "South Node",
  },

  es: {
    Soleil: "Sol",
    Lune: "Luna",
    Mercure: "Mercurio",
    Vénus: "Venus",
    Venus: "Venus",
    Mars: "Marte",
    Jupiter: "Júpiter",
    Saturne: "Saturno",
    Uranus: "Urano",
    Neptune: "Neptuno",
    Pluton: "Plutón",
    Chiron: "Quirón",
    "Nœud Nord": "Nodo Norte",
    "Noeud Nord": "Nodo Norte",
    "Nœud Sud": "Nodo Sur",
    "Noeud Sud": "Nodo Sur",
  },

  de: {
    Soleil: "Sonne",
    Lune: "Mond",
    Mercure: "Merkur",
    Vénus: "Venus",
    Venus: "Venus",
    Mars: "Mars",
    Jupiter: "Jupiter",
    Saturne: "Saturn",
    Uranus: "Uranus",
    Neptune: "Neptun",
    Pluton: "Pluto",
    Chiron: "Chiron",
    "Nœud Nord": "Nordknoten",
    "Noeud Nord": "Nordknoten",
    "Nœud Sud": "Südknoten",
    "Noeud Sud": "Südknoten",
  },

  it: {
    Soleil: "Sole",
    Lune: "Luna",
    Mercure: "Mercurio",
    Vénus: "Venere",
    Venus: "Venere",
    Mars: "Marte",
    Jupiter: "Giove",
    Saturne: "Saturno",
    Uranus: "Urano",
    Neptune: "Nettuno",
    Pluton: "Plutone",
    Chiron: "Chirone",
    "Nœud Nord": "Nodo Nord",
    "Noeud Nord": "Nodo Nord",
    "Nœud Sud": "Nodo Sud",
    "Noeud Sud": "Nodo Sud",
  },

  pt: {
    Soleil: "Sol",
    Lune: "Lua",
    Mercure: "Mercúrio",
    Vénus: "Vênus",
    Venus: "Vênus",
    Mars: "Marte",
    Jupiter: "Júpiter",
    Saturne: "Saturno",
    Uranus: "Urano",
    Neptune: "Netuno",
    Pluton: "Plutão",
    Chiron: "Quíron",
    "Nœud Nord": "Nodo Norte",
    "Noeud Nord": "Nodo Norte",
    "Nœud Sud": "Nodo Sul",
    "Noeud Sud": "Nodo Sul",
  },
};

const SIGNS: Record<
  NonFrenchLocale,
  Record<string, string>
> = {
  en: {
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

  es: {
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

  de: {
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

  it: {
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

  pt: {
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
};

const ASPECTS: Record<
  NonFrenchLocale,
  Record<string, string>
> = {
  en: {
    Conjonction: "Conjunction",
    conjonction: "conjunction",
    Opposition: "Opposition",
    opposition: "opposition",
    Trigone: "Trine",
    trigone: "trine",
    Carré: "Square",
    carré: "square",
    Sextile: "Sextile",
    sextile: "sextile",
  },

  es: {
    Conjonction: "Conjunción",
    conjonction: "conjunción",
    Opposition: "Oposición",
    opposition: "oposición",
    Trigone: "Trígono",
    trigone: "trígono",
    Carré: "Cuadratura",
    carré: "cuadratura",
    Sextile: "Sextil",
    sextile: "sextil",
  },

  de: {
    Conjonction: "Konjunktion",
    conjonction: "Konjunktion",
    Opposition: "Opposition",
    opposition: "Opposition",
    Trigone: "Trigon",
    trigone: "Trigon",
    Carré: "Quadrat",
    carré: "Quadrat",
    Sextile: "Sextil",
    sextile: "Sextil",
  },

  it: {
    Conjonction: "Congiunzione",
    conjonction: "congiunzione",
    Opposition: "Opposizione",
    opposition: "opposizione",
    Trigone: "Trigono",
    trigone: "trigono",
    Carré: "Quadratura",
    carré: "quadratura",
    Sextile: "Sestile",
    sextile: "sestile",
  },

  pt: {
    Conjonction: "Conjunção",
    conjonction: "conjunção",
    Opposition: "Oposição",
    opposition: "oposição",
    Trigone: "Trígono",
    trigone: "trígono",
    Carré: "Quadratura",
    carré: "quadratura",
    Sextile: "Sextil",
    sextile: "sextil",
  },
};

const DYNAMIC_FRAGMENTS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Ces influences comparent les positions planétaires de la journée à votre thème natal afin de révéler les énergies les plus personnelles et les plus actives aujourd’hui.":
      "These influences compare today's planetary positions with your birth chart to reveal the most personal and active energies affecting you today.",

    "crée une ouverture favorable avec votre":
      "creates a favorable opening with your",

    "Cette influence soutient":
      "This influence supports",

    "mais elle demande généralement une initiative de votre part pour produire un résultat concret.":
      "but it generally requires initiative on your part to produce a concrete result.",

    "forme un carré avec votre":
      "forms a square with your",

    "Une tension peut apparaître autour de":
      "Tension may arise around",

    "Cette configuration ne représente pas un échec : elle vous pousse à corriger une situation ou à agir autrement.":
      "This configuration does not represent failure: it encourages you to correct a situation or act differently.",

    "s’oppose à votre":
      "opposes your",

    "s'oppose à votre":
      "opposes your",

    "Deux besoins peuvent sembler difficiles à concilier autour de":
      "Two needs may seem difficult to reconcile around",

    "La journée vous invite à rechercher un équilibre plutôt qu’à choisir un seul extrême.":
      "The day invites you to seek balance rather than choose one extreme.",

    "La journée vous invite à rechercher un équilibre plutôt qu'à choisir un seul extrême.":
      "The day invites you to seek balance rather than choose one extreme.",

    "forme un trigone harmonieux avec votre":
      "forms a harmonious trine with your",

    "Cette influence facilite":
      "This influence facilitates",

    "et vous permet d’utiliser plus naturellement vos qualités, vos idées ou vos ressources.":
      "and allows you to use your qualities, ideas, and resources more naturally.",

    "et vous permet d'utiliser plus naturellement vos qualités, vos idées ou vos ressources.":
      "and allows you to use your qualities, ideas, and resources more naturally.",

    "votre vie affective, vos relations, vos valeurs et votre estime personnelle":
      "your emotional life, relationships, values, and self-esteem",

    "votre désir, votre énergie, votre volonté et votre manière d’agir":
      "your desires, energy, willpower, and way of taking action",

    "votre désir, votre énergie, votre volonté et votre manière d'agir":
      "your desires, energy, willpower, and way of taking action",

    "votre manière de penser, de communiquer et de prendre des décisions":
      "your way of thinking, communicating, and making decisions",

    "votre pouvoir intérieur, vos transformations et votre rapport à l’intensité":
      "your inner power, transformations, and relationship with intensity",

    "votre pouvoir intérieur, vos transformations et votre rapport à l'intensité":
      "your inner power, transformations, and relationship with intensity",

    "votre confiance, vos ambitions et votre capacité à reconnaître les possibilités":
      "your confidence, ambitions, and ability to recognize opportunities",

    "Saisissez l’occasion qui se présente et posez un geste concret pour activer cette influence favorable.":
      "Seize the opportunity that presents itself and take a concrete step to activate this favorable influence.",

    "Saisissez l'occasion qui se présente et posez un geste concret pour activer cette influence favorable.":
      "Seize the opportunity that presents itself and take a concrete step to activate this favorable influence.",

    "Évitez les réactions impulsives. Identifiez la tension réelle, puis transformez-la en décision constructive.":
      "Avoid impulsive reactions. Identify the real tension, then transform it into a constructive decision.",

    "Cherchez un compromis entre vos besoins personnels et les demandes de la situation.":
      "Seek a compromise between your personal needs and the demands of the situation.",

    "Utilisez cette facilité consciemment plutôt que de considérer qu’elle agira seule.":
      "Use this ease consciously rather than assuming it will work on its own.",

    "Utilisez cette facilité consciemment plutôt que de considérer qu'elle agira seule.":
      "Use this ease consciously rather than assuming it will work on its own.",

    "Cette influence est très puissante.":
      "This influence is very powerful.",

    "Cette influence est puissante.":
      "This influence is powerful.",

    "Cette influence est modérée.":
      "This influence is moderate.",

    " natal":
      " natal",
  },

  es: {
    "Ces influences comparent les positions planétaires de la journée à votre thème natal afin de révéler les énergies les plus personnelles et les plus actives aujourd’hui.":
      "Estas influencias comparan las posiciones planetarias del día con su carta natal para revelar las energías más personales y activas de hoy.",

    "crée une ouverture favorable avec votre":
      "crea una apertura favorable con su",

    "Cette influence soutient":
      "Esta influencia favorece",

    "mais elle demande généralement une initiative de votre part pour produire un résultat concret.":
      "pero generalmente requiere una iniciativa de su parte para producir un resultado concreto.",

    "forme un carré avec votre":
      "forma una cuadratura con su",

    "Une tension peut apparaître autour de":
      "Puede aparecer una tensión en torno a",

    "Cette configuration ne représente pas un échec : elle vous pousse à corriger une situation ou à agir autrement.":
      "Esta configuración no representa un fracaso: le impulsa a corregir una situación o actuar de otra manera.",

    "s’oppose à votre":
      "se opone a su",

    "s'oppose à votre":
      "se opone a su",

    "Deux besoins peuvent sembler difficiles à concilier autour de":
      "Dos necesidades pueden parecer difíciles de conciliar en torno a",

    "La journée vous invite à rechercher un équilibre plutôt qu’à choisir un seul extrême.":
      "El día le invita a buscar un equilibrio en lugar de elegir un solo extremo.",

    "La journée vous invite à rechercher un équilibre plutôt qu'à choisir un seul extrême.":
      "El día le invita a buscar un equilibrio en lugar de elegir un solo extremo.",

    "forme un trigone harmonieux avec votre":
      "forma un trígono armonioso con su",

    "Cette influence facilite":
      "Esta influencia facilita",

    "et vous permet d’utiliser plus naturellement vos qualités, vos idées ou vos ressources.":
      "y le permite utilizar de forma más natural sus cualidades, ideas o recursos.",

    "et vous permet d'utiliser plus naturellement vos qualités, vos idées ou vos ressources.":
      "y le permite utilizar de forma más natural sus cualidades, ideas o recursos.",

    "votre vie affective, vos relations, vos valeurs et votre estime personnelle":
      "su vida afectiva, sus relaciones, sus valores y su autoestima",

    "votre désir, votre énergie, votre volonté et votre manière d’agir":
      "su deseo, su energía, su voluntad y su manera de actuar",

    "votre désir, votre énergie, votre volonté et votre manière d'agir":
      "su deseo, su energía, su voluntad y su manera de actuar",

    "votre manière de penser, de communiquer et de prendre des décisions":
      "su manera de pensar, comunicarse y tomar decisiones",

    "votre pouvoir intérieur, vos transformations et votre rapport à l’intensité":
      "su poder interior, sus transformaciones y su relación con la intensidad",

    "votre pouvoir intérieur, vos transformations et votre rapport à l'intensité":
      "su poder interior, sus transformaciones y su relación con la intensidad",

    "votre confiance, vos ambitions et votre capacité à reconnaître les possibilités":
      "su confianza, sus ambiciones y su capacidad para reconocer las posibilidades",

    "Saisissez l’occasion qui se présente et posez un geste concret pour activer cette influence favorable.":
      "Aproveche la oportunidad que se presenta y realice una acción concreta para activar esta influencia favorable.",

    "Saisissez l'occasion qui se présente et posez un geste concret pour activer cette influence favorable.":
      "Aproveche la oportunidad que se presenta y realice una acción concreta para activar esta influencia favorable.",

    "Évitez les réactions impulsives. Identifiez la tension réelle, puis transformez-la en décision constructive.":
      "Evite las reacciones impulsivas. Identifique la tensión real y transfórmela en una decisión constructiva.",

    "Cherchez un compromis entre vos besoins personnels et les demandes de la situation.":
      "Busque un compromiso entre sus necesidades personales y las exigencias de la situación.",

    "Utilisez cette facilité consciemment plutôt que de considérer qu’elle agira seule.":
      "Utilice esta facilidad conscientemente en lugar de considerar que actuará por sí sola.",

    "Utilisez cette facilité consciemment plutôt que de considérer qu'elle agira seule.":
      "Utilice esta facilidad conscientemente en lugar de considerar que actuará por sí sola.",

    "Cette influence est très puissante.":
      "Esta influencia es muy poderosa.",

    "Cette influence est puissante.":
      "Esta influencia es poderosa.",

    "Cette influence est modérée.":
      "Esta influencia es moderada.",

    " natal":
      " natal",
  },

  de: {
    "Ces influences comparent les positions planétaires de la journée à votre thème natal afin de révéler les énergies les plus personnelles et les plus actives aujourd’hui.":
      "Diese Einflüsse vergleichen die heutigen Planetenpositionen mit Ihrem Geburtshoroskop, um die persönlichsten und aktivsten Energien des Tages sichtbar zu machen.",

    "crée une ouverture favorable avec votre":
      "bildet eine günstige Verbindung zu Ihrem",

    "Cette influence soutient":
      "Dieser Einfluss unterstützt",

    "mais elle demande généralement une initiative de votre part pour produire un résultat concret.":
      "erfordert jedoch in der Regel Eigeninitiative, um ein konkretes Ergebnis hervorzubringen.",

    "forme un carré avec votre":
      "bildet ein Quadrat zu Ihrem",

    "Une tension peut apparaître autour de":
      "Spannungen können entstehen im Zusammenhang mit",

    "Cette configuration ne représente pas un échec : elle vous pousse à corriger une situation ou à agir autrement.":
      "Diese Konstellation bedeutet kein Scheitern: Sie fordert Sie dazu auf, eine Situation zu korrigieren oder anders zu handeln.",

    "s’oppose à votre":
      "steht Ihrem",

    "s'oppose à votre":
      "steht Ihrem",

    "Deux besoins peuvent sembler difficiles à concilier autour de":
      "Zwei Bedürfnisse können schwer miteinander vereinbar erscheinen im Zusammenhang mit",

    "La journée vous invite à rechercher un équilibre plutôt qu’à choisir un seul extrême.":
      "Der Tag lädt Sie dazu ein, ein Gleichgewicht zu suchen, anstatt sich für nur ein Extrem zu entscheiden.",

    "La journée vous invite à rechercher un équilibre plutôt qu'à choisir un seul extrême.":
      "Der Tag lädt Sie dazu ein, ein Gleichgewicht zu suchen, anstatt sich für nur ein Extrem zu entscheiden.",

    "forme un trigone harmonieux avec votre":
      "bildet ein harmonisches Trigon zu Ihrem",

    "Cette influence facilite":
      "Dieser Einfluss erleichtert",

    "et vous permet d’utiliser plus naturellement vos qualités, vos idées ou vos ressources.":
      "und ermöglicht Ihnen, Ihre Qualitäten, Ideen oder Ressourcen natürlicher einzusetzen.",

    "et vous permet d'utiliser plus naturellement vos qualités, vos idées ou vos ressources.":
      "und ermöglicht Ihnen, Ihre Qualitäten, Ideen oder Ressourcen natürlicher einzusetzen.",

    "votre vie affective, vos relations, vos valeurs et votre estime personnelle":
      "Ihr Gefühlsleben, Ihre Beziehungen, Ihre Werte und Ihr Selbstwertgefühl",

    "votre désir, votre énergie, votre volonté et votre manière d’agir":
      "Ihre Wünsche, Ihre Energie, Ihren Willen und Ihre Art zu handeln",

    "votre désir, votre énergie, votre volonté et votre manière d'agir":
      "Ihre Wünsche, Ihre Energie, Ihren Willen und Ihre Art zu handeln",

    "votre manière de penser, de communiquer et de prendre des décisions":
      "Ihre Art zu denken, zu kommunizieren und Entscheidungen zu treffen",

    "votre pouvoir intérieur, vos transformations et votre rapport à l’intensité":
      "Ihre innere Kraft, Ihre Transformationen und Ihren Umgang mit Intensität",

    "votre pouvoir intérieur, vos transformations et votre rapport à l'intensité":
      "Ihre innere Kraft, Ihre Transformationen und Ihren Umgang mit Intensität",

    "votre confiance, vos ambitions et votre capacité à reconnaître les possibilités":
      "Ihr Vertrauen, Ihre Ambitionen und Ihre Fähigkeit, Möglichkeiten zu erkennen",

    "Saisissez l’occasion qui se présente et posez un geste concret pour activer cette influence favorable.":
      "Nutzen Sie die sich bietende Gelegenheit und unternehmen Sie einen konkreten Schritt, um diesen günstigen Einfluss zu aktivieren.",

    "Saisissez l'occasion qui se présente et posez un geste concret pour activer cette influence favorable.":
      "Nutzen Sie die sich bietende Gelegenheit und unternehmen Sie einen konkreten Schritt, um diesen günstigen Einfluss zu aktivieren.",

    "Évitez les réactions impulsives. Identifiez la tension réelle, puis transformez-la en décision constructive.":
      "Vermeiden Sie impulsive Reaktionen. Erkennen Sie die tatsächliche Spannung und verwandeln Sie sie in eine konstruktive Entscheidung.",

    "Cherchez un compromis entre vos besoins personnels et les demandes de la situation.":
      "Suchen Sie einen Kompromiss zwischen Ihren persönlichen Bedürfnissen und den Anforderungen der Situation.",

    "Utilisez cette facilité consciemment plutôt que de considérer qu’elle agira seule.":
      "Nutzen Sie diese günstige Dynamik bewusst, anstatt davon auszugehen, dass sie von selbst wirkt.",

    "Utilisez cette facilité consciemment plutôt que de considérer qu'elle agira seule.":
      "Nutzen Sie diese günstige Dynamik bewusst, anstatt davon auszugehen, dass sie von selbst wirkt.",

    "Cette influence est très puissante.":
      "Dieser Einfluss ist sehr stark.",

    "Cette influence est puissante.":
      "Dieser Einfluss ist stark.",

    "Cette influence est modérée.":
      "Dieser Einfluss ist moderat.",

    " natal":
      " im Geburtshoroskop",
  },

  it: {
    "Ces influences comparent les positions planétaires de la journée à votre thème natal afin de révéler les énergies les plus personnelles et les plus actives aujourd’hui.":
      "Queste influenze confrontano le posizioni planetarie del giorno con il tuo tema natale per rivelare le energie più personali e attive di oggi.",

    "crée une ouverture favorable avec votre":
      "crea un'apertura favorevole con il tuo",

    "Cette influence soutient":
      "Questa influenza sostiene",

    "mais elle demande généralement une initiative de votre part pour produire un résultat concret.":
      "ma generalmente richiede una tua iniziativa per produrre un risultato concreto.",

    "forme un carré avec votre":
      "forma una quadratura con il tuo",

    "Une tension peut apparaître autour de":
      "Può emergere una tensione intorno a",

    "Cette configuration ne représente pas un échec : elle vous pousse à corriger une situation ou à agir autrement.":
      "Questa configurazione non rappresenta un fallimento: ti spinge a correggere una situazione o ad agire diversamente.",

    "s’oppose à votre":
      "si oppone al tuo",

    "s'oppose à votre":
      "si oppone al tuo",

    "Deux besoins peuvent sembler difficiles à concilier autour de":
      "Due esigenze possono sembrare difficili da conciliare intorno a",

    "La journée vous invite à rechercher un équilibre plutôt qu’à choisir un seul extrême.":
      "La giornata ti invita a cercare un equilibrio invece di scegliere un solo estremo.",

    "La journée vous invite à rechercher un équilibre plutôt qu'à choisir un seul extrême.":
      "La giornata ti invita a cercare un equilibrio invece di scegliere un solo estremo.",

    "forme un trigone harmonieux avec votre":
      "forma un trigono armonioso con il tuo",

    "Cette influence facilite":
      "Questa influenza facilita",

    "et vous permet d’utiliser plus naturellement vos qualités, vos idées ou vos ressources.":
      "e ti permette di utilizzare più naturalmente le tue qualità, idee o risorse.",

    "et vous permet d'utiliser plus naturellement vos qualités, vos idées ou vos ressources.":
      "e ti permette di utilizzare più naturalmente le tue qualità, idee o risorse.",

    "votre vie affective, vos relations, vos valeurs et votre estime personnelle":
      "la tua vita affettiva, le tue relazioni, i tuoi valori e la tua autostima",

    "votre désir, votre énergie, votre volonté et votre manière d’agir":
      "il tuo desiderio, la tua energia, la tua volontà e il tuo modo di agire",

    "votre désir, votre énergie, votre volonté et votre manière d'agir":
      "il tuo desiderio, la tua energia, la tua volontà e il tuo modo di agire",

    "votre manière de penser, de communiquer et de prendre des décisions":
      "il tuo modo di pensare, comunicare e prendere decisioni",

    "votre pouvoir intérieur, vos transformations et votre rapport à l’intensité":
      "il tuo potere interiore, le tue trasformazioni e il tuo rapporto con l'intensità",

    "votre pouvoir intérieur, vos transformations et votre rapport à l'intensité":
      "il tuo potere interiore, le tue trasformazioni e il tuo rapporto con l'intensità",

    "votre confiance, vos ambitions et votre capacité à reconnaître les possibilités":
      "la tua fiducia, le tue ambizioni e la tua capacità di riconoscere le possibilità",

    "Saisissez l’occasion qui se présente et posez un geste concret pour activer cette influence favorable.":
      "Cogli l'opportunità che si presenta e compi un'azione concreta per attivare questa influenza favorevole.",

    "Saisissez l'occasion qui se présente et posez un geste concret pour activer cette influence favorable.":
      "Cogli l'opportunità che si presenta e compi un'azione concreta per attivare questa influenza favorevole.",

    "Évitez les réactions impulsives. Identifiez la tension réelle, puis transformez-la en décision constructive.":
      "Evita le reazioni impulsive. Individua la tensione reale e trasformala in una decisione costruttiva.",

    "Cherchez un compromis entre vos besoins personnels et les demandes de la situation.":
      "Cerca un compromesso tra le tue esigenze personali e le richieste della situazione.",

    "Utilisez cette facilité consciemment plutôt que de considérer qu’elle agira seule.":
      "Utilizza consapevolmente questa facilità invece di pensare che agirà da sola.",

    "Utilisez cette facilité consciemment plutôt que de considérer qu'elle agira seule.":
      "Utilizza consapevolmente questa facilità invece di pensare che agirà da sola.",

    "Cette influence est très puissante.":
      "Questa influenza è molto potente.",

    "Cette influence est puissante.":
      "Questa influenza è potente.",

    "Cette influence est modérée.":
      "Questa influenza è moderata.",

    " natal":
      " natale",
  },

  pt: {
    "Ces influences comparent les positions planétaires de la journée à votre thème natal afin de révéler les énergies les plus personnelles et les plus actives aujourd’hui.":
      "Estas influências comparam as posições planetárias do dia com o seu mapa astral para revelar as energias mais pessoais e ativas de hoje.",

    "crée une ouverture favorable avec votre":
      "cria uma abertura favorável com seu",

    "Cette influence soutient":
      "Esta influência favorece",

    "mais elle demande généralement une initiative de votre part pour produire un résultat concret.":
      "mas geralmente exige uma iniciativa de sua parte para produzir um resultado concreto.",

    "forme un carré avec votre":
      "forma uma quadratura com seu",

    "Une tension peut apparaître autour de":
      "Pode surgir uma tensão em torno de",

    "Cette configuration ne représente pas un échec : elle vous pousse à corriger une situation ou à agir autrement.":
      "Esta configuração não representa um fracasso: ela incentiva você a corrigir uma situação ou agir de outra maneira.",

    "s’oppose à votre":
      "se opõe ao seu",

    "s'oppose à votre":
      "se opõe ao seu",

    "Deux besoins peuvent sembler difficiles à concilier autour de":
      "Duas necessidades podem parecer difíceis de conciliar em torno de",

    "La journée vous invite à rechercher un équilibre plutôt qu’à choisir un seul extrême.":
      "O dia convida você a buscar equilíbrio em vez de escolher apenas um extremo.",

    "La journée vous invite à rechercher un équilibre plutôt qu'à choisir un seul extrême.":
      "O dia convida você a buscar equilíbrio em vez de escolher apenas um extremo.",

    "forme un trigone harmonieux avec votre":
      "forma um trígono harmonioso com seu",

    "Cette influence facilite":
      "Esta influência facilita",

    "et vous permet d’utiliser plus naturellement vos qualités, vos idées ou vos ressources.":
      "e permite que você utilize suas qualidades, ideias ou recursos de forma mais natural.",

    "et vous permet d'utiliser plus naturellement vos qualités, vos idées ou vos ressources.":
      "e permite que você utilize suas qualidades, ideias ou recursos de forma mais natural.",

    "votre vie affective, vos relations, vos valeurs et votre estime personnelle":
      "sua vida afetiva, seus relacionamentos, seus valores e sua autoestima",

    "votre désir, votre énergie, votre volonté et votre manière d’agir":
      "seu desejo, sua energia, sua vontade e sua maneira de agir",

    "votre désir, votre énergie, votre volonté et votre manière d'agir":
      "seu desejo, sua energia, sua vontade e sua maneira de agir",

    "votre manière de penser, de communiquer et de prendre des décisions":
      "sua maneira de pensar, se comunicar e tomar decisões",

    "votre pouvoir intérieur, vos transformations et votre rapport à l’intensité":
      "seu poder interior, suas transformações e sua relação com a intensidade",

    "votre pouvoir intérieur, vos transformations et votre rapport à l'intensité":
      "seu poder interior, suas transformações e sua relação com a intensidade",

    "votre confiance, vos ambitions et votre capacité à reconnaître les possibilités":
      "sua confiança, suas ambições e sua capacidade de reconhecer possibilidades",

    "Saisissez l’occasion qui se présente et posez un geste concret pour activer cette influence favorable.":
      "Aproveite a oportunidade que se apresenta e tome uma ação concreta para ativar esta influência favorável.",

    "Saisissez l'occasion qui se présente et posez un geste concret pour activer cette influence favorable.":
      "Aproveite a oportunidade que se apresenta e tome uma ação concreta para ativar esta influência favorável.",

    "Évitez les réactions impulsives. Identifiez la tension réelle, puis transformez-la en décision constructive.":
      "Evite reações impulsivas. Identifique a tensão real e transforme-a em uma decisão construtiva.",

    "Cherchez un compromis entre vos besoins personnels et les demandes de la situation.":
      "Busque um equilíbrio entre suas necessidades pessoais e as exigências da situação.",

    "Utilisez cette facilité consciemment plutôt que de considérer qu’elle agira seule.":
      "Use essa facilidade conscientemente em vez de considerar que ela agirá sozinha.",

    "Utilisez cette facilité consciemment plutôt que de considérer qu'elle agira seule.":
      "Use essa facilidade conscientemente em vez de considerar que ela agirá sozinha.",

    "Cette influence est très puissante.":
      "Esta influência é muito poderosa.",

    "Cette influence est puissante.":
      "Esta influência é poderosa.",

    "Cette influence est modérée.":
      "Esta influência é moderada.",

    " natal":
      " natal",
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

function localizeSafeLiterals(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "HoroscopePlanets.tsx",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
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
            node.getStart(sourceFile),
          end:
            node.getEnd(),
          value:
            JSON.stringify(translated),
        });
      }
    }

    if (ts.isJsxText(node)) {
      const raw =
        node.getText(sourceFile);

      const normalized =
        raw.replace(/\s+/g, " ").trim();

      const translated =
        translations[normalized];

      if (
        normalized &&
        typeof translated === "string"
      ) {
        const leading =
          raw.match(/^\s*/)?.[0] ?? "";

        const trailing =
          raw.match(/\s*$/)?.[0] ?? "";

        replacements.push({
          start:
            node.getStart(sourceFile),
          end:
            node.getEnd(),
          value:
            `${leading}${translated}${trailing}`,
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

function replaceDynamicPlanetValues(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /const\s+periodLabel\s*=\s*formatHoroscopePeriodLabel\(\s*period,\s*\);/g,
    `const periodLabel =
    __planetsLocalizedPeriodLabel(
      period,
    );`,
  );

  output = output.replace(
    /const\s+periodLabel\s*=\s*formatHoroscopePeriodLabel\(\s*period\s*\);/g,
    `const periodLabel =
    __planetsLocalizedPeriodLabel(
      period,
    );`,
  );

  output = output.replace(
    /\{identity\.zodiacSignLabel\}/g,
    "{__planetsLocalizeSign(identity.zodiacSignLabel)}",
  );

  output = output.replace(
    /\{planetName\}/g,
    "{__planetsLocalizePlanet(planetName)}",
  );

  output = output.replace(
    /\{influence\.aspect\}/g,
    "{__planetsLocalizeAspect(influence.aspect)}",
  );

  output = output.replace(
    /En\s+\{influence\.sign\}/g,
    "{__planetsFormatSignPlacement(influence.sign)}",
  );

  output = output.replace(
    /\{influence\.title\}/g,
    "{__planetsLocalizeDynamicText(influence.title)}",
  );

  output = output.replace(
    /\{influence\.description\}/g,
    "{__planetsLocalizeDynamicText(influence.description)}",
  );

  output = output.replace(
    /\{influence\.advice\}/g,
    "{__planetsLocalizeDynamicText(influence.advice)}",
  );

  output = output.replace(
    /\{\s*content\.planetaryIntroduction\s*\}/g,
    "{__planetsLocalizeDynamicText(content.planetaryIntroduction)}",
  );

  return output;
}

function injectPlanetHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __planetsLocalizeDynamicText",
    )
  ) {
    return source;
  }

  const inWord: Record<
    NonFrenchLocale,
    string
  > = {
    en: "in",
    es: "en",
    de: "in",
    it: "in",
    pt: "em",
  };

  const helper = `
/* =========================================================
   HOROSCOPE PLANETS — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __PLANETS_MONTHS =
  ${JSON.stringify(MONTHS[locale], null, 2)} as const;

const __PLANETS_FRENCH_MONTHS =
  ${JSON.stringify(FRENCH_MONTHS, null, 2)} as const;

const __PLANETS_NAMES:
  Record<string, string> =
  ${JSON.stringify(PLANETS[locale], null, 2)};

const __PLANETS_SIGNS:
  Record<string, string> =
  ${JSON.stringify(SIGNS[locale], null, 2)};

const __PLANETS_ASPECTS:
  Record<string, string> =
  ${JSON.stringify(ASPECTS[locale], null, 2)};

const __PLANETS_TRANSLATIONS:
  Record<string, string> =
  ${JSON.stringify(TRANSLATIONS[locale], null, 2)};

const __PLANETS_DYNAMIC_FRAGMENTS:
  Record<string, string> =
  ${JSON.stringify(DYNAMIC_FRAGMENTS[locale], null, 2)};

const __PLANETS_IN_WORD =
  ${JSON.stringify(inWord[locale])};

function __planetsEscapeRegExp(
  value: string,
): string {
  return value.replace(
    /[.*+?^\\${}()|[\\]\\\\]/g,
    "\\\\$&",
  );
}

function __planetsLocalizePlanet(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  return (
    __PLANETS_NAMES[value] ??
    value
  );
}

function __planetsLocalizeSign(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  return (
    __PLANETS_SIGNS[value] ??
    value
  );
}

function __planetsLocalizeAspect(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  return (
    __PLANETS_ASPECTS[value] ??
    value
  );
}

function __planetsFormatSignPlacement(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  return \`\${__PLANETS_IN_WORD} \${__planetsLocalizeSign(
    value,
  )}\`;
}

function __planetsReplaceMap(
  value: string,
  map: Record<string, string>,
): string {
  let output = value;

  const entries =
    Object.entries(map)
      .sort(
        ([a], [b]) =>
          b.length - a.length,
      );

  entries.forEach(
    ([from, to]) => {
      if (!from) {
        return;
      }

      output =
        output.replace(
          new RegExp(
            __planetsEscapeRegExp(from),
            "g",
          ),
          to,
        );
    },
  );

  return output;
}

function __planetsReplaceWords(
  value: string,
  map: Record<string, string>,
): string {
  let output = value;

  const entries =
    Object.entries(map)
      .sort(
        ([a], [b]) =>
          b.length - a.length,
      );

  entries.forEach(
    ([from, to]) => {
      if (!from) {
        return;
      }

      output =
        output.replace(
          new RegExp(
            \`\\\\b\${__planetsEscapeRegExp(
              from,
            )}\\\\b\`,
            "g",
          ),
          to,
        );
    },
  );

  return output;
}

function __planetsLocalizePlacements(
  value: string,
): string {
  let output = value;

  const frenchPlanets =
    Object.keys(__PLANETS_NAMES);

  const localizedPlanets =
    Object.values(__PLANETS_NAMES);

  const frenchSigns =
    Object.keys(__PLANETS_SIGNS);

  const localizedSigns =
    Object.values(__PLANETS_SIGNS);

  const planets =
    Array.from(
      new Set([
        ...frenchPlanets,
        ...localizedPlanets,
      ]),
    )
      .sort(
        (a, b) =>
          b.length - a.length,
      )
      .map(
        __planetsEscapeRegExp,
      )
      .join("|");

  const signs =
    Array.from(
      new Set([
        ...frenchSigns,
        ...localizedSigns,
      ]),
    )
      .sort(
        (a, b) =>
          b.length - a.length,
      )
      .map(
        __planetsEscapeRegExp,
      )
      .join("|");

  if (
    !planets ||
    !signs
  ) {
    return output;
  }

  const expression =
    new RegExp(
      \`\\\\b(\${planets})\\\\s+en\\\\s+(\${signs})\\\\b\`,
      "g",
    );

  output =
    output.replace(
      expression,
      (
        _match,
        planet: string,
        sign: string,
      ) =>
        \`\${planet} \${__PLANETS_IN_WORD} \${sign}\`,
    );

  return output;
}

function __planetsLocalizeDynamicText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  let output = value;

  /*
   * IMPORTANT :
   *
   * On ne traduit PAS les mois ici.
   *
   * "Mars" est une planète, mais "mars"
   * est également le mois français.
   *
   * L'ancien code utilisait une regex
   * insensible à la casse et transformait
   * donc "Mars" en "March" en anglais.
   */

  const exact =
    __PLANETS_TRANSLATIONS[output];

  if (exact) {
    output = exact;
  } else {
    /*
     * Traduction des phrases et fragments
     * produits par le builder.
     */
    output =
      __planetsReplaceMap(
        output,
        __PLANETS_DYNAMIC_FRAGMENTS,
      );

    /*
     * Planètes.
     */
    output =
      __planetsReplaceWords(
        output,
        __PLANETS_NAMES,
      );

    /*
     * Signes.
     */
    output =
      __planetsReplaceWords(
        output,
        __PLANETS_SIGNS,
      );

    /*
     * Aspects.
     */
    output =
      __planetsReplaceWords(
        output,
        __PLANETS_ASPECTS,
      );

    /*
     * "Mercury en Cancer"
     * devient par exemple
     * "Mercury in Cancer".
     */
    output =
      __planetsLocalizePlacements(
        output,
      );

    /*
     * Une deuxième passe de fragments
     * permet de traiter les phrases dont
     * certaines parties ont déjà été
     * localisées par le builder.
     */
    output =
      __planetsReplaceMap(
        output,
        __PLANETS_DYNAMIC_FRAGMENTS,
      );
  }

  return output;
}

function __planetsFormatIsoDate(
  isoDate?: string | null,
): string {
  if (!isoDate) {
    return "";
  }

  const match =
    isoDate.match(
      /^(\\\\d{4})-(\\\\d{2})-(\\\\d{2})$/,
    );

  if (!match) {
    return isoDate;
  }

  const year =
    Number(match[1]);

  const month =
    Number(match[2]);

  const day =
    Number(match[3]);

  ${
    locale === "en"
      ? 'return `${__PLANETS_MONTHS[month - 1]} ${day}, ${year}`;'
      : locale === "de"
        ? 'return `${day}. ${__PLANETS_MONTHS[month - 1]} ${year}`;'
        : locale === "es"
          ? 'return `${day} de ${__PLANETS_MONTHS[month - 1]} de ${year}`;'
          : locale === "pt"
            ? 'return `${day} de ${__PLANETS_MONTHS[month - 1]} de ${year}`;'
            : 'return `${day} ${__PLANETS_MONTHS[month - 1]} ${year}`;'
  }
}

function __planetsLocalizedPeriodLabel(
  period: HoroscopeSectionProps["period"],
): string {
  if (period.type === "day") {
    return __planetsFormatIsoDate(
      period.startDate,
    );
  }

  const match =
    period.startDate?.match(
      /^(\\\\d{4})-(\\\\d{2})-(\\\\d{2})$/,
    );

  if (!match) {
    return (
      period.label ||
      period.startDate ||
      ""
    );
  }

  const year =
    Number(match[1]);

  const month =
    Number(match[2]);

  if (period.type === "month") {
    return \`\${__PLANETS_MONTHS[
      month - 1
    ]} \${year}\`;
  }

  return String(year);
}

/* =========================================================
   END HOROSCOPE PLANETS — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopePlanets";

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

export function localizeHoroscopePlanets(
  source: string,
  locale: PaidPdfLocale,
): string {
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

  let localized =
    replaceDynamicPlanetValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectPlanetHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
