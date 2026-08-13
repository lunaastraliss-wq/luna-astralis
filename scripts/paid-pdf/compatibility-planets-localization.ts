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

  planetIn: Record<string, string>;

  orbWord: string;
};

const TRANSLATIONS: Record<
  NonFrenchLocale,
  LocaleData
> = {
  en: {
    text: {
      "Non précisé": "Not specified",

      "Première personne":
        "First person",

      "Deuxième personne":
        "Second person",

      "la première personne":
        "the first person",

      "la deuxième personne":
        "the second person",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastry Report",

      "Expansion, confiance et croissance":
        "Expansion, confidence and growth",

      "Jupiter dans votre relation":
        "Jupiter in your relationship",

      "Jupiter montre comment votre couple grandit, partage ses espoirs et transforme les expériences communes en possibilités nouvelles.":
        "Jupiter shows how your relationship grows, shares hope, and transforms shared experiences into new possibilities.",

      "La rencontre de vos deux Jupiter":
        "The meeting of your two Jupiter placements",

      "Cette comparaison révèle vos façons respectives de chercher le bonheur, de croire en l’avenir et d’encourager l’expansion du couple.":
        "This comparison reveals how each of you seeks happiness, believes in the future, and encourages the relationship to expand.",

      "Votre manière personnelle de grandir":
        "Your personal way of growing",

      "Vos principales interactions d’expansion":
        "Your main expansion interactions",

      "Votre potentiel de croissance":
        "Your growth potential",

      "Votre excès possible":
        "Your possible excess",

      "Votre clé d’expansion":
        "Your key to expansion",

      "Choisissez régulièrement un projet qui agrandit votre monde commun : voyage, apprentissage, création ou objectif partagé. Jupiter devient réellement bénéfique lorsque l’enthousiasme est accompagné d’un plan concret.":
        "Regularly choose a project that expands your shared world: travel, learning, creation, or a shared goal. Jupiter becomes truly beneficial when enthusiasm is supported by a concrete plan.",

      "Temps, responsabilité et construction":
        "Time, responsibility and construction",

      "Saturne dans votre relation":
        "Saturn in your relationship",

      "Saturne révèle ce qui demande patience, maturité et engagement afin que votre lien puisse résister au temps et aux responsabilités.":
        "Saturn reveals what requires patience, maturity, and commitment so that your bond can withstand time and responsibility.",

      "La rencontre de vos deux Saturne":
        "The meeting of your two Saturn placements",

      "Cette comparaison montre vos rapports respectifs au devoir, aux limites, à la sécurité et aux engagements qui structurent la relation.":
        "This comparison shows how each of you relates to duty, boundaries, security, and the commitments that structure the relationship.",

      "Votre manière personnelle de construire":
        "Your personal way of building",

      "Vos principales interactions de stabilité":
        "Your main stability interactions",

      "Votre force de construction":
        "Your capacity to build",

      "Votre poids relationnel":
        "Your relationship burden",

      "Votre clé de solidité":
        "Your key to solidity",

      "Transformez les obligations en accords clairement choisis. Répartissez les responsabilités, reconnaissez les efforts de chacun et gardez une place pour la douceur afin que la stabilité ne devienne jamais une prison.":
        "Turn obligations into consciously chosen agreements. Share responsibilities, acknowledge each other's efforts, and preserve tenderness so that stability never becomes a prison.",

      "Liberté, changement et renouveau":
        "Freedom, change and renewal",

      "Uranus dans votre relation":
        "Uranus in your relationship",

      "Uranus montre où votre couple recherche de l’espace, de l’originalité et une manière unique d’évoluer sans perdre son individualité.":
        "Uranus shows where your relationship seeks space, originality, and a unique way to evolve without losing individuality.",

      "La rencontre de vos deux Uranus":
        "The meeting of your two Uranus placements",

      "Cette comparaison révèle vos besoins de liberté, votre ouverture au changement et la façon dont l’imprévu peut réveiller ou déstabiliser le lien.":
        "This comparison reveals your need for freedom, your openness to change, and how the unexpected can awaken or destabilize the relationship.",

      "Votre manière personnelle de vous renouveler":
        "Your personal way of renewing yourself",

      "Vos principales interactions de changement":
        "Your main interactions of change",

      "Votre pouvoir de renouveau":
        "Your power of renewal",

      "Votre instabilité possible":
        "Your possible instability",

      "Votre clé de liberté":
        "Your key to freedom",

      "Créez volontairement de la nouveauté avant que la routine ne devienne étouffante. Un couple vivant peut accorder de l’espace à chacun tout en maintenant des repères relationnels fiables et rassurants.":
        "Create novelty intentionally before routine becomes suffocating. A living relationship can give each person space while maintaining reliable and reassuring relationship foundations.",

      "Rêves, intuition et idéal amoureux":
        "Dreams, intuition and romantic ideal",

      "Neptune dans votre relation":
        "Neptune in your relationship",

      "Neptune révèle la sensibilité invisible du lien, vos rêves communs, votre compassion et les zones où l’idéal peut parfois brouiller la réalité.":
        "Neptune reveals the invisible sensitivity of your bond, your shared dreams, your compassion, and the areas where ideals can sometimes blur reality.",

      "La rencontre de vos deux Neptune":
        "The meeting of your two Neptune placements",

      "Cette comparaison montre comment vous rêvez, ressentez l’invisible et recherchez une connexion qui dépasse les simples réalités du quotidien.":
        "This comparison shows how you dream, sense the unseen, and seek a connection that goes beyond everyday realities.",

      "Votre manière personnelle de rêver":
        "Your personal way of dreaming",

      "Vos principales interactions intuitives":
        "Your main intuitive interactions",

      "Votre connexion subtile":
        "Your subtle connection",

      "Votre risque d’illusion":
        "Your risk of illusion",

      "Votre clé de clarté":
        "Your key to clarity",

      "Préservez la poésie de votre lien tout en vérifiant régulièrement les faits, les attentes et les promesses. L’intuition devient une force lorsqu’elle dialogue avec une communication honnête et des limites claires.":
        "Preserve the poetry of your bond while regularly checking facts, expectations, and promises. Intuition becomes a strength when it works alongside honest communication and clear boundaries.",

      "Intensité, pouvoir et transformation":
        "Intensity, power and transformation",

      "Pluton dans votre relation":
        "Pluto in your relationship",

      "Pluton montre comment votre relation peut révéler des émotions profondes, transformer vos blessures et éveiller une puissante force de régénération.":
        "Pluto shows how your relationship can reveal deep emotions, transform wounds, and awaken a powerful force of regeneration.",

      "La rencontre de vos deux Pluton":
        "The meeting of your two Pluto placements",

      "Cette comparaison met en lumière vos façons respectives de vivre l’intensité, le contrôle, la vulnérabilité et les grandes transformations intérieures.":
        "This comparison highlights how each of you experiences intensity, control, vulnerability, and profound inner transformation.",

      "Votre manière personnelle de vous transformer":
        "Your personal way of transforming",

      "Vos principales interactions de transformation":
        "Your main transformative interactions",

      "Votre puissance de guérison":
        "Your healing power",

      "Votre lutte de pouvoir possible":
        "Your possible power struggle",

      "Votre clé de transformation":
        "Your key to transformation",

      "N’utilisez jamais le silence, la jalousie ou la pression pour obtenir de la sécurité. Nommez les peurs profondes avec respect : la vulnérabilité partagée transforme l’intensité en confiance et en guérison.":
        "Never use silence, jealousy, or pressure to obtain security. Name deep fears respectfully: shared vulnerability transforms intensity into trust and healing.",

      "Votre dynamique commune":
        "Your shared dynamic",

      "Élément":
        "Element",

      "Énergie fluide":
        "Flowing energy",

      "Influence amplifiée":
        "Amplified influence",

      "Polarité à équilibrer":
        "Polarity to balance",

      "Tension créatrice":
        "Creative tension",

      "Ajustement nécessaire":
        "Adjustment needed",

      "Influence relationnelle":
        "Relationship influence",

      "Les données disponibles ne permettent pas encore de préciser entièrement cette expression planétaire.":
        "The available data does not yet allow this planetary expression to be fully specified.",

      "Cette interaction favorise la confiance, l’encouragement mutuel et le sentiment que la relation ouvre de nouvelles possibilités.":
        "This interaction encourages confidence, mutual encouragement, and the feeling that the relationship opens new possibilities.",

      "Cette interaction peut amplifier les attentes, les promesses ou les excès. L’enthousiasme gagne à être ramené vers des objectifs réalistes.":
        "This interaction can amplify expectations, promises, or excess. Enthusiasm benefits from being directed toward realistic goals.",

      "Cette connexion intensifie l’optimisme, la générosité et le désir de grandir ensemble, tout en amplifiant parfois les excès.":
        "This connection intensifies optimism, generosity, and the desire to grow together, while sometimes amplifying excess.",

      "Cette interaction soutient la fidélité, la constance et la capacité à assumer ensemble les responsabilités importantes.":
        "This interaction supports loyalty, consistency, and the ability to take on important responsibilities together.",

      "Cette interaction peut créer un sentiment de jugement, de lourdeur ou de limitation. Les règles doivent être choisies ensemble.":
        "This interaction can create a feeling of judgment, heaviness, or limitation. Rules need to be chosen together.",

      "Cette connexion donne au lien un poids important et un potentiel de durée, mais demande patience, respect et maturité.":
        "This connection gives the relationship significant weight and long-term potential, but requires patience, respect, and maturity.",

      "Cette interaction apporte fraîcheur, liberté et stimulation. Chacun peut encourager l’autre à devenir plus authentique.":
        "This interaction brings freshness, freedom, and stimulation. Each person can encourage the other to become more authentic.",

      "Cette interaction peut créer de l’instabilité, des réactions imprévisibles ou un besoin soudain de distance.":
        "This interaction can create instability, unpredictable reactions, or a sudden need for distance.",

      "Cette connexion rend la relation inhabituelle, électrique et profondément stimulante, avec un fort besoin de liberté.":
        "This connection makes the relationship unusual, electric, and deeply stimulating, with a strong need for freedom.",

      "Cette interaction favorise l’empathie, la douceur, l’inspiration et le sentiment d’une compréhension intuitive.":
        "This interaction encourages empathy, tenderness, inspiration, and a feeling of intuitive understanding.",

      "Cette interaction peut brouiller les intentions, idéaliser la relation ou créer des attentes difficiles à vérifier.":
        "This interaction can blur intentions, idealize the relationship, or create expectations that are difficult to verify.",

      "Cette connexion renforce la sensibilité, le romantisme et l’impression d’un lien subtil, mais exige de la clarté.":
        "This connection strengthens sensitivity, romance, and the impression of a subtle bond, but requires clarity.",

      "Cette interaction favorise la guérison profonde, la résilience et la capacité à transformer ensemble les périodes difficiles.":
        "This interaction encourages deep healing, resilience, and the ability to transform difficult periods together.",

      "Cette interaction peut réveiller jalousie, peur de perdre, contrôle ou luttes de pouvoir si les émotions restent cachées.":
        "This interaction can awaken jealousy, fear of loss, control, or power struggles when emotions remain hidden.",

      "Cette connexion intensifie fortement le lien et peut provoquer une transformation durable chez les deux partenaires.":
        "This connection strongly intensifies the bond and can create lasting transformation in both partners.",

      "Vous pouvez vous encourager, élargir vos horizons et faire circuler davantage d’espoir dans la relation.":
        "You can encourage one another, broaden your horizons, and bring more hope into the relationship.",

      "Vous pouvez construire des repères solides, traverser les périodes exigeantes et donner une forme durable à vos engagements.":
        "You can build solid foundations, move through demanding periods, and give lasting form to your commitments.",

      "Vous pouvez maintenir la relation vivante, inventer vos propres règles et soutenir l’authenticité de chacun.":
        "You can keep the relationship alive, create your own rules, and support each person's authenticity.",

      "Vous pouvez développer une grande empathie, partager un imaginaire riche et vous inspirer mutuellement.":
        "You can develop great empathy, share a rich imagination, and inspire one another.",

      "Vous pouvez transformer les crises en véritables passages de guérison et développer une confiance très profonde.":
        "You can transform crises into genuine passages of healing and develop very deep trust.",

      "Vos réactions semblables facilitent une compréhension immédiate de cette énergie.":
        "Your similar reactions make this energy immediately understandable to each other.",

      "Vos éléments communs donnent un rythme compatible à cette dynamique.":
        "Your shared element gives this dynamic a compatible rhythm.",

      "L’optimisme peut devenir exagération, dépense excessive ou promesse difficile à tenir lorsque l’enthousiasme remplace la préparation.":
        "Optimism can become exaggeration, excessive spending, or promises that are difficult to keep when enthusiasm replaces preparation.",

      "Les responsabilités peuvent devenir lourdes si l’un impose les règles, critique l’autre ou porte silencieusement une charge disproportionnée.":
        "Responsibilities can become heavy if one person imposes rules, criticizes the other, or silently carries a disproportionate burden.",

      "Le besoin de liberté peut provoquer distance ou imprévisibilité si les changements surviennent sans explication ni repère rassurant.":
        "The need for freedom can create distance or unpredictability if changes occur without explanation or reassuring reference points.",

      "L’idéalisation peut masquer les besoins réels, les désaccords ou les limites personnelles tant que les faits ne sont pas clairement vérifiés.":
        "Idealization can hide real needs, disagreements, or personal boundaries as long as facts are not clearly verified.",

      "L’intensité peut se transformer en contrôle, jalousie ou rapport de force lorsque la peur de perdre n’est pas nommée avec honnêteté.":
        "Intensity can turn into control, jealousy, or power struggles when the fear of loss is not honestly acknowledged.",

      "Vos rythmes différents demandent une communication encore plus explicite.":
        "Your different rhythms require even more explicit communication.",
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
      "Non précisé": "Not specified",
    },

    planets: {
      Soleil: "Sun",
      Lune: "Moon",
      Mercure: "Mercury",
      Vénus: "Venus",
      Mars: "Mars",
      Jupiter: "Jupiter",
      Saturne: "Saturn",
      Uranus: "Uranus",
      Neptune: "Neptune",
      Pluton: "Pluto",
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
      "Non précisé": "Not specified",
    },

    planetIn: {
      Jupiter: "Jupiter in",
      Saturne: "Saturn in",
      Uranus: "Uranus in",
      Neptune: "Neptune in",
      Pluton: "Pluto in",
    },

    orbWord: "orb",
  },

  es: {
    text: {
      "Non précisé": "No especificado",
      "Première personne": "Primera persona",
      "Deuxième personne": "Segunda persona",
      "la première personne": "la primera persona",
      "la deuxième personne": "la segunda persona",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Informe de sinastría",

      "Expansion, confiance et croissance":
        "Expansión, confianza y crecimiento",

      "Jupiter dans votre relation":
        "Júpiter en su relación",

      "Jupiter montre comment votre couple grandit, partage ses espoirs et transforme les expériences communes en possibilités nouvelles.":
        "Júpiter muestra cómo crece su relación, comparte sus esperanzas y transforma las experiencias comunes en nuevas posibilidades.",

      "La rencontre de vos deux Jupiter":
        "El encuentro de sus dos Júpiter",

      "Cette comparaison révèle vos façons respectives de chercher le bonheur, de croire en l’avenir et d’encourager l’expansion du couple.":
        "Esta comparación revela sus respectivas maneras de buscar la felicidad, creer en el futuro y favorecer la expansión de la relación.",

      "Votre manière personnelle de grandir":
        "Su manera personal de crecer",

      "Vos principales interactions d’expansion":
        "Sus principales interacciones de expansión",

      "Votre potentiel de croissance":
        "Su potencial de crecimiento",

      "Votre excès possible":
        "Su posible exceso",

      "Votre clé d’expansion":
        "Su clave de expansión",

      "Choisissez régulièrement un projet qui agrandit votre monde commun : voyage, apprentissage, création ou objectif partagé. Jupiter devient réellement bénéfique lorsque l’enthousiasme est accompagné d’un plan concret.":
        "Elijan regularmente un proyecto que amplíe su mundo común: viaje, aprendizaje, creación u objetivo compartido. Júpiter se vuelve realmente beneficioso cuando el entusiasmo va acompañado de un plan concreto.",

      "Temps, responsabilité et construction":
        "Tiempo, responsabilidad y construcción",

      "Saturne dans votre relation":
        "Saturno en su relación",

      "Saturne révèle ce qui demande patience, maturité et engagement afin que votre lien puisse résister au temps et aux responsabilités.":
        "Saturno revela lo que requiere paciencia, madurez y compromiso para que su vínculo pueda resistir el paso del tiempo y las responsabilidades.",

      "La rencontre de vos deux Saturne":
        "El encuentro de sus dos Saturnos",

      "Cette comparaison montre vos rapports respectifs au devoir, aux limites, à la sécurité et aux engagements qui structurent la relation.":
        "Esta comparación muestra sus respectivas relaciones con el deber, los límites, la seguridad y los compromisos que estructuran la relación.",

      "Votre manière personnelle de construire":
        "Su manera personal de construir",

      "Vos principales interactions de stabilité":
        "Sus principales interacciones de estabilidad",

      "Votre force de construction":
        "Su fuerza de construcción",

      "Votre poids relationnel":
        "Su peso relacional",

      "Votre clé de solidité":
        "Su clave de solidez",

      "Transformez les obligations en accords clairement choisis. Répartissez les responsabilités, reconnaissez les efforts de chacun et gardez une place pour la douceur afin que la stabilité ne devienne jamais une prison.":
        "Transformen las obligaciones en acuerdos elegidos conscientemente. Repartan las responsabilidades, reconozcan los esfuerzos de cada uno y conserven espacio para la ternura para que la estabilidad nunca se convierta en una prisión.",

      "Liberté, changement et renouveau":
        "Libertad, cambio y renovación",

      "Uranus dans votre relation":
        "Urano en su relación",

      "Uranus montre où votre couple recherche de l’espace, de l’originalité et une manière unique d’évoluer sans perdre son individualité.":
        "Urano muestra dónde su relación busca espacio, originalidad y una manera única de evolucionar sin perder la individualidad.",

      "La rencontre de vos deux Uranus":
        "El encuentro de sus dos Urano",

      "Cette comparaison révèle vos besoins de liberté, votre ouverture au changement et la façon dont l’imprévu peut réveiller ou déstabiliser le lien.":
        "Esta comparación revela sus necesidades de libertad, su apertura al cambio y la manera en que lo inesperado puede despertar o desestabilizar el vínculo.",

      "Votre manière personnelle de vous renouveler":
        "Su manera personal de renovarse",

      "Vos principales interactions de changement":
        "Sus principales interacciones de cambio",

      "Votre pouvoir de renouveau":
        "Su poder de renovación",

      "Votre instabilité possible":
        "Su posible inestabilidad",

      "Votre clé de liberté":
        "Su clave de libertad",

      "Créez volontairement de la nouveauté avant que la routine ne devienne étouffante. Un couple vivant peut accorder de l’espace à chacun tout en maintenant des repères relationnels fiables et rassurants.":
        "Creen conscientemente novedades antes de que la rutina se vuelva asfixiante. Una relación viva puede dar espacio a cada persona mientras mantiene referencias relacionales fiables y tranquilizadoras.",

      "Rêves, intuition et idéal amoureux":
        "Sueños, intuición e ideal amoroso",

      "Neptune dans votre relation":
        "Neptuno en su relación",

      "Neptune révèle la sensibilité invisible du lien, vos rêves communs, votre compassion et les zones où l’idéal peut parfois brouiller la réalité.":
        "Neptuno revela la sensibilidad invisible del vínculo, sus sueños comunes, su compasión y las áreas donde el ideal puede a veces difuminar la realidad.",

      "La rencontre de vos deux Neptune":
        "El encuentro de sus dos Neptunos",

      "Cette comparaison montre comment vous rêvez, ressentez l’invisible et recherchez une connexion qui dépasse les simples réalités du quotidien.":
        "Esta comparación muestra cómo sueñan, perciben lo invisible y buscan una conexión que supera las simples realidades cotidianas.",

      "Votre manière personnelle de rêver":
        "Su manera personal de soñar",

      "Vos principales interactions intuitives":
        "Sus principales interacciones intuitivas",

      "Votre connexion subtile":
        "Su conexión sutil",

      "Votre risque d’illusion":
        "Su riesgo de ilusión",

      "Votre clé de clarté":
        "Su clave de claridad",

      "Préservez la poésie de votre lien tout en vérifiant régulièrement les faits, les attentes et les promesses. L’intuition devient une force lorsqu’elle dialogue avec une communication honnête et des limites claires.":
        "Conserven la poesía de su vínculo mientras verifican regularmente los hechos, las expectativas y las promesas. La intuición se convierte en una fortaleza cuando dialoga con una comunicación honesta y límites claros.",

      "Intensité, pouvoir et transformation":
        "Intensidad, poder y transformación",

      "Pluton dans votre relation":
        "Plutón en su relación",

      "Pluton montre comment votre relation peut révéler des émotions profondes, transformer vos blessures et éveiller une puissante force de régénération.":
        "Plutón muestra cómo su relación puede revelar emociones profundas, transformar heridas y despertar una poderosa fuerza de regeneración.",

      "La rencontre de vos deux Pluton":
        "El encuentro de sus dos Plutones",

      "Cette comparaison met en lumière vos façons respectives de vivre l’intensité, le contrôle, la vulnérabilité et les grandes transformations intérieures.":
        "Esta comparación pone de relieve sus respectivas maneras de vivir la intensidad, el control, la vulnerabilidad y las grandes transformaciones interiores.",

      "Votre manière personnelle de vous transformer":
        "Su manera personal de transformarse",

      "Vos principales interactions de transformation":
        "Sus principales interacciones de transformación",

      "Votre puissance de guérison":
        "Su poder de sanación",

      "Votre lutte de pouvoir possible":
        "Su posible lucha de poder",

      "Votre clé de transformation":
        "Su clave de transformación",

      "N’utilisez jamais le silence, la jalousie ou la pression pour obtenir de la sécurité. Nommez les peurs profondes avec respect : la vulnérabilité partagée transforme l’intensité en confiance et en guérison.":
        "Nunca utilicen el silencio, los celos o la presión para obtener seguridad. Expresen los miedos profundos con respeto: la vulnerabilidad compartida transforma la intensidad en confianza y sanación.",

      "Votre dynamique commune":
        "Su dinámica común",

      "Élément": "Elemento",

      "Énergie fluide":
        "Energía fluida",

      "Influence amplifiée":
        "Influencia amplificada",

      "Polarité à équilibrer":
        "Polaridad por equilibrar",

      "Tension créatrice":
        "Tensión creativa",

      "Ajustement nécessaire":
        "Ajuste necesario",

      "Influence relationnelle":
        "Influencia relacional",

      "Les données disponibles ne permettent pas encore de préciser entièrement cette expression planétaire.":
        "Los datos disponibles todavía no permiten precisar completamente esta expresión planetaria.",

      "Vos réactions semblables facilitent une compréhension immédiate de cette énergie.":
        "Sus reacciones similares facilitan una comprensión inmediata de esta energía.",

      "Vos éléments communs donnent un rythme compatible à cette dynamique.":
        "Sus elementos comunes dan un ritmo compatible a esta dinámica.",

      "Vos rythmes différents demandent une communication encore plus explicite.":
        "Sus ritmos diferentes requieren una comunicación aún más explícita.",
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
      "Non précisé": "No especificado",
    },

    planets: {
      Soleil: "Sol",
      Lune: "Luna",
      Mercure: "Mercurio",
      Vénus: "Venus",
      Mars: "Marte",
      Jupiter: "Júpiter",
      Saturne: "Saturno",
      Uranus: "Urano",
      Neptune: "Neptuno",
      Pluton: "Plutón",
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
      "Non précisé": "No especificado",
    },

    planetIn: {
      Jupiter: "Júpiter en",
      Saturne: "Saturno en",
      Uranus: "Urano en",
      Neptune: "Neptuno en",
      Pluton: "Plutón en",
    },

    orbWord: "orbe",
  },

  de: {
    text: {
      "Non précisé": "Nicht angegeben",
      "Première personne": "Erste Person",
      "Deuxième personne": "Zweite Person",
      "la première personne": "die erste Person",
      "la deuxième personne": "die zweite Person",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastrie-Bericht",

      "Expansion, confiance et croissance":
        "Expansion, Vertrauen und Wachstum",

      "Jupiter dans votre relation":
        "Jupiter in Ihrer Beziehung",

      "Jupiter montre comment votre couple grandit, partage ses espoirs et transforme les expériences communes en possibilités nouvelles.":
        "Jupiter zeigt, wie Ihre Beziehung wächst, Hoffnungen teilt und gemeinsame Erfahrungen in neue Möglichkeiten verwandelt.",

      "La rencontre de vos deux Jupiter":
        "Die Begegnung Ihrer beiden Jupiter-Positionen",

      "Votre manière personnelle de grandir":
        "Ihre persönliche Art zu wachsen",

      "Vos principales interactions d’expansion":
        "Ihre wichtigsten Expansionsdynamiken",

      "Votre potentiel de croissance":
        "Ihr Wachstumspotenzial",

      "Votre excès possible":
        "Ihr mögliches Übermaß",

      "Votre clé d’expansion":
        "Ihr Schlüssel zur Expansion",

      "Temps, responsabilité et construction":
        "Zeit, Verantwortung und Aufbau",

      "Saturne dans votre relation":
        "Saturn in Ihrer Beziehung",

      "La rencontre de vos deux Saturne":
        "Die Begegnung Ihrer beiden Saturn-Positionen",

      "Votre manière personnelle de construire":
        "Ihre persönliche Art aufzubauen",

      "Vos principales interactions de stabilité":
        "Ihre wichtigsten Stabilitätsdynamiken",

      "Votre force de construction":
        "Ihre Aufbaukraft",

      "Votre poids relationnel":
        "Ihre Beziehungsbelastung",

      "Votre clé de solidité":
        "Ihr Schlüssel zur Festigkeit",

      "Liberté, changement et renouveau":
        "Freiheit, Veränderung und Erneuerung",

      "Uranus dans votre relation":
        "Uranus in Ihrer Beziehung",

      "La rencontre de vos deux Uranus":
        "Die Begegnung Ihrer beiden Uranus-Positionen",

      "Votre manière personnelle de vous renouveler":
        "Ihre persönliche Art der Erneuerung",

      "Vos principales interactions de changement":
        "Ihre wichtigsten Veränderungsdynamiken",

      "Votre pouvoir de renouveau":
        "Ihre Erneuerungskraft",

      "Votre instabilité possible":
        "Ihre mögliche Instabilität",

      "Votre clé de liberté":
        "Ihr Schlüssel zur Freiheit",

      "Rêves, intuition et idéal amoureux":
        "Träume, Intuition und Liebesideal",

      "Neptune dans votre relation":
        "Neptun in Ihrer Beziehung",

      "La rencontre de vos deux Neptune":
        "Die Begegnung Ihrer beiden Neptun-Positionen",

      "Votre manière personnelle de rêver":
        "Ihre persönliche Art zu träumen",

      "Vos principales interactions intuitives":
        "Ihre wichtigsten intuitiven Wechselwirkungen",

      "Votre connexion subtile":
        "Ihre subtile Verbindung",

      "Votre risque d’illusion":
        "Ihr Risiko der Illusion",

      "Votre clé de clarté":
        "Ihr Schlüssel zur Klarheit",

      "Intensité, pouvoir et transformation":
        "Intensität, Macht und Transformation",

      "Pluton dans votre relation":
        "Pluto in Ihrer Beziehung",

      "La rencontre de vos deux Pluton":
        "Die Begegnung Ihrer beiden Pluto-Positionen",

      "Votre manière personnelle de vous transformer":
        "Ihre persönliche Art der Transformation",

      "Vos principales interactions de transformation":
        "Ihre wichtigsten Transformationsdynamiken",

      "Votre puissance de guérison":
        "Ihre Heilungskraft",

      "Votre lutte de pouvoir possible":
        "Ihr möglicher Machtkampf",

      "Votre clé de transformation":
        "Ihr Schlüssel zur Transformation",

      "Votre dynamique commune":
        "Ihre gemeinsame Dynamik",

      "Élément": "Element",

      "Énergie fluide":
        "Fließende Energie",

      "Influence amplifiée":
        "Verstärkter Einfluss",

      "Polarité à équilibrer":
        "Auszugleichende Polarität",

      "Tension créatrice":
        "Kreative Spannung",

      "Ajustement nécessaire":
        "Anpassung erforderlich",

      "Influence relationnelle":
        "Beziehungseinfluss",

      "Les données disponibles ne permettent pas encore de préciser entièrement cette expression planétaire.":
        "Die verfügbaren Daten reichen noch nicht aus, um diesen planetaren Ausdruck vollständig zu bestimmen.",

      "Vos réactions semblables facilitent une compréhension immédiate de cette énergie.":
        "Ihre ähnlichen Reaktionen erleichtern ein unmittelbares Verständnis dieser Energie.",

      "Vos éléments communs donnent un rythme compatible à cette dynamique.":
        "Ihre gemeinsamen Elemente verleihen dieser Dynamik einen kompatiblen Rhythmus.",

      "Vos rythmes différents demandent une communication encore plus explicite.":
        "Ihre unterschiedlichen Rhythmen erfordern eine noch klarere Kommunikation.",
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
      "Non précisé": "Nicht angegeben",
    },

    planets: {
      Soleil: "Sonne",
      Lune: "Mond",
      Mercure: "Merkur",
      Vénus: "Venus",
      Mars: "Mars",
      Jupiter: "Jupiter",
      Saturne: "Saturn",
      Uranus: "Uranus",
      Neptune: "Neptun",
      Pluton: "Pluto",
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
      "Non précisé": "Nicht angegeben",
    },

    planetIn: {
      Jupiter: "Jupiter in",
      Saturne: "Saturn in",
      Uranus: "Uranus in",
      Neptune: "Neptun in",
      Pluton: "Pluto in",
    },

    orbWord: "Orb",
  },

  it: {
    text: {
      "Non précisé": "Non specificato",
      "Première personne": "Prima persona",
      "Deuxième personne": "Seconda persona",
      "la première personne": "la prima persona",
      "la deuxième personne": "la seconda persona",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Rapporto di sinastria",

      "Expansion, confiance et croissance":
        "Espansione, fiducia e crescita",

      "Jupiter dans votre relation":
        "Giove nella vostra relazione",

      "La rencontre de vos deux Jupiter":
        "L'incontro dei vostri due Giove",

      "Votre manière personnelle de grandir":
        "Il vostro modo personale di crescere",

      "Vos principales interactions d’expansion":
        "Le vostre principali dinamiche di espansione",

      "Votre potentiel de croissance":
        "Il vostro potenziale di crescita",

      "Votre excès possible":
        "Il vostro possibile eccesso",

      "Votre clé d’expansion":
        "La vostra chiave di espansione",

      "Temps, responsabilité et construction":
        "Tempo, responsabilità e costruzione",

      "Saturne dans votre relation":
        "Saturno nella vostra relazione",

      "La rencontre de vos deux Saturne":
        "L'incontro dei vostri due Saturno",

      "Votre manière personnelle de construire":
        "Il vostro modo personale di costruire",

      "Vos principales interactions de stabilité":
        "Le vostre principali dinamiche di stabilità",

      "Votre force de construction":
        "La vostra forza costruttiva",

      "Votre poids relationnel":
        "Il vostro peso relazionale",

      "Votre clé de solidité":
        "La vostra chiave di solidità",

      "Liberté, changement et renouveau":
        "Libertà, cambiamento e rinnovamento",

      "Uranus dans votre relation":
        "Urano nella vostra relazione",

      "La rencontre de vos deux Uranus":
        "L'incontro dei vostri due Urano",

      "Votre manière personnelle de vous renouveler":
        "Il vostro modo personale di rinnovarvi",

      "Vos principales interactions de changement":
        "Le vostre principali dinamiche di cambiamento",

      "Votre pouvoir de renouveau":
        "Il vostro potere di rinnovamento",

      "Votre instabilité possible":
        "La vostra possibile instabilità",

      "Votre clé de liberté":
        "La vostra chiave di libertà",

      "Rêves, intuition et idéal amoureux":
        "Sogni, intuizione e ideale amoroso",

      "Neptune dans votre relation":
        "Nettuno nella vostra relazione",

      "La rencontre de vos deux Neptune":
        "L'incontro dei vostri due Nettuno",

      "Votre manière personnelle de rêver":
        "Il vostro modo personale di sognare",

      "Vos principales interactions intuitives":
        "Le vostre principali interazioni intuitive",

      "Votre connexion subtile":
        "La vostra connessione sottile",

      "Votre risque d’illusion":
        "Il vostro rischio di illusione",

      "Votre clé de clarté":
        "La vostra chiave di chiarezza",

      "Intensité, pouvoir et transformation":
        "Intensità, potere e trasformazione",

      "Pluton dans votre relation":
        "Plutone nella vostra relazione",

      "La rencontre de vos deux Pluton":
        "L'incontro dei vostri due Plutone",

      "Votre manière personnelle de vous transformer":
        "Il vostro modo personale di trasformarvi",

      "Vos principales interactions de transformation":
        "Le vostre principali dinamiche di trasformazione",

      "Votre puissance de guérison":
        "Il vostro potere di guarigione",

      "Votre lutte de pouvoir possible":
        "La vostra possibile lotta di potere",

      "Votre clé de transformation":
        "La vostra chiave di trasformazione",

      "Votre dynamique commune":
        "La vostra dinamica comune",

      "Élément": "Elemento",

      "Énergie fluide":
        "Energia fluida",

      "Influence amplifiée":
        "Influenza amplificata",

      "Polarité à équilibrer":
        "Polarità da equilibrare",

      "Tension créatrice":
        "Tensione creativa",

      "Ajustement nécessaire":
        "Adattamento necessario",

      "Influence relationnelle":
        "Influenza relazionale",

      "Les données disponibles ne permettent pas encore de préciser entièrement cette expression planétaire.":
        "I dati disponibili non consentono ancora di precisare completamente questa espressione planetaria.",

      "Vos réactions semblables facilitent une compréhension immédiate de cette énergie.":
        "Le vostre reazioni simili facilitano una comprensione immediata di questa energia.",

      "Vos éléments communs donnent un rythme compatible à cette dynamique.":
        "I vostri elementi comuni danno un ritmo compatibile a questa dinamica.",

      "Vos rythmes différents demandent une communication encore plus explicite.":
        "I vostri ritmi diversi richiedono una comunicazione ancora più esplicita.",
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
      "Non précisé": "Non specificato",
    },

    planets: {
      Soleil: "Sole",
      Lune: "Luna",
      Mercure: "Mercurio",
      Vénus: "Venere",
      Mars: "Marte",
      Jupiter: "Giove",
      Saturne: "Saturno",
      Uranus: "Urano",
      Neptune: "Nettuno",
      Pluton: "Plutone",
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
      "Non précisé": "Non specificato",
    },

    planetIn: {
      Jupiter: "Giove in",
      Saturne: "Saturno in",
      Uranus: "Urano in",
      Neptune: "Nettuno in",
      Pluton: "Plutone in",
    },

    orbWord: "orbita",
  },

  pt: {
    text: {
      "Non précisé": "Não especificado",
      "Première personne": "Primeira pessoa",
      "Deuxième personne": "Segunda pessoa",
      "la première personne": "a primeira pessoa",
      "la deuxième personne": "a segunda pessoa",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Relatório de sinastria",

      "Expansion, confiance et croissance":
        "Expansão, confiança e crescimento",

      "Jupiter dans votre relation":
        "Júpiter na sua relação",

      "La rencontre de vos deux Jupiter":
        "O encontro dos seus dois Júpiter",

      "Votre manière personnelle de grandir":
        "A sua forma pessoal de crescer",

      "Vos principales interactions d’expansion":
        "As suas principais dinâmicas de expansão",

      "Votre potentiel de croissance":
        "O seu potencial de crescimento",

      "Votre excès possible":
        "O seu possível excesso",

      "Votre clé d’expansion":
        "A sua chave de expansão",

      "Temps, responsabilité et construction":
        "Tempo, responsabilidade e construção",

      "Saturne dans votre relation":
        "Saturno na sua relação",

      "La rencontre de vos deux Saturne":
        "O encontro dos seus dois Saturnos",

      "Votre manière personnelle de construire":
        "A sua forma pessoal de construir",

      "Vos principales interactions de stabilité":
        "As suas principais dinâmicas de estabilidade",

      "Votre force de construction":
        "A sua força de construção",

      "Votre poids relationnel":
        "O seu peso relacional",

      "Votre clé de solidité":
        "A sua chave de solidez",

      "Liberté, changement et renouveau":
        "Liberdade, mudança e renovação",

      "Uranus dans votre relation":
        "Urano na sua relação",

      "La rencontre de vos deux Uranus":
        "O encontro dos seus dois Uranos",

      "Votre manière personnelle de vous renouveler":
        "A sua forma pessoal de se renovar",

      "Vos principales interactions de changement":
        "As suas principais dinâmicas de mudança",

      "Votre pouvoir de renouveau":
        "O seu poder de renovação",

      "Votre instabilité possible":
        "A sua possível instabilidade",

      "Votre clé de liberté":
        "A sua chave de liberdade",

      "Rêves, intuition et idéal amoureux":
        "Sonhos, intuição e ideal amoroso",

      "Neptune dans votre relation":
        "Netuno na sua relação",

      "La rencontre de vos deux Neptune":
        "O encontro dos seus dois Netunos",

      "Votre manière personnelle de rêver":
        "A sua forma pessoal de sonhar",

      "Vos principales interactions intuitives":
        "As suas principais interações intuitivas",

      "Votre connexion subtile":
        "A sua conexão subtil",

      "Votre risque d’illusion":
        "O seu risco de ilusão",

      "Votre clé de clarté":
        "A sua chave de clareza",

      "Intensité, pouvoir et transformation":
        "Intensidade, poder e transformação",

      "Pluton dans votre relation":
        "Plutão na sua relação",

      "La rencontre de vos deux Pluton":
        "O encontro dos seus dois Plutões",

      "Votre manière personnelle de vous transformer":
        "A sua forma pessoal de se transformar",

      "Vos principales interactions de transformation":
        "As suas principais dinâmicas de transformação",

      "Votre puissance de guérison":
        "O seu poder de cura",

      "Votre lutte de pouvoir possible":
        "A sua possível luta de poder",

      "Votre clé de transformation":
        "A sua chave de transformação",

      "Votre dynamique commune":
        "A sua dinâmica comum",

      "Élément": "Elemento",

      "Énergie fluide":
        "Energia fluida",

      "Influence amplifiée":
        "Influência amplificada",

      "Polarité à équilibrer":
        "Polaridade a equilibrar",

      "Tension créatrice":
        "Tensão criativa",

      "Ajustement nécessaire":
        "Ajuste necessário",

      "Influence relationnelle":
        "Influência relacional",

      "Les données disponibles ne permettent pas encore de préciser entièrement cette expression planétaire.":
        "Os dados disponíveis ainda não permitem precisar completamente esta expressão planetária.",

      "Vos réactions semblables facilitent une compréhension immédiate de cette énergie.":
        "As suas reações semelhantes facilitam uma compreensão imediata desta energia.",

      "Vos éléments communs donnent un rythme compatible à cette dynamique.":
        "Os seus elementos comuns dão um ritmo compatível a esta dinâmica.",

      "Vos rythmes différents demandent une communication encore plus explicite.":
        "Os seus ritmos diferentes exigem uma comunicação ainda mais explícita.",
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
      "Non précisé": "Não especificado",
    },

    planets: {
      Soleil: "Sol",
      Lune: "Lua",
      Mercure: "Mercúrio",
      Vénus: "Vênus",
      Mars: "Marte",
      Jupiter: "Júpiter",
      Saturne: "Saturno",
      Uranus: "Urano",
      Neptune: "Netuno",
      Pluton: "Plutão",
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
      "Non précisé": "Não especificado",
    },

    planetIn: {
      Jupiter: "Júpiter em",
      Saturne: "Saturno em",
      Uranus: "Urano em",
      Neptune: "Netuno em",
      Pluton: "Plutão em",
    },

    orbWord: "orbe",
  },
};


/* =========================================================
   TRADUCTIONS DYNAMIQUES COMPLÈTES — PAGES 17 À 21
========================================================= */

const PLANETS_DYNAMIC_TEXT: Record<NonFrenchLocale, Record<string, string>> = {
  "en": {
    "Grandit par l’action, le courage et les nouveaux départs. L’enthousiasme augmente lorsqu’un défi peut être relevé rapidement.": "Grows through action, courage, and new beginnings. Enthusiasm increases when a challenge can be taken on quickly.",
    "Grandit par la stabilité, la patience et la création d’une sécurité concrète. Les plaisirs simples nourrissent la confiance.": "Grows through stability, patience, and the creation of tangible security. Simple pleasures nurture confidence.",
    "Grandit par les échanges, les apprentissages et la diversité des expériences. La curiosité ouvre constamment de nouvelles possibilités.": "Grows through exchanges, learning, and a diversity of experiences. Curiosity constantly opens new possibilities.",
    "Grandit par les liens affectifs, la famille et le sentiment d’appartenance. La générosité s’exprime à travers la protection.": "Grows through emotional bonds, family, and a sense of belonging. Generosity is expressed through protection.",
    "Grandit par la créativité, la confiance et le rayonnement personnel. Le bonheur augmente lorsqu’il est partagé avec générosité.": "Grows through creativity, confidence, and personal radiance. Happiness increases when it is shared generously.",
    "Grandit par l’utilité, l’amélioration et le développement de compétences concrètes. La confiance se construit dans les petits progrès.": "Grows through usefulness, improvement, and the development of practical skills. Confidence is built through small progress.",
    "Grandit par les alliances, l’harmonie et la coopération. Les opportunités apparaissent souvent grâce aux relations et aux échanges équilibrés.": "Grows through alliances, harmony, and cooperation. Opportunities often arise through relationships and balanced exchanges.",
    "Grandit par la profondeur, la transformation et la compréhension des vérités cachées. Les crises peuvent devenir des passages de puissance.": "Grows through depth, transformation, and understanding hidden truths. Crises can become passages of empowerment.",
    "Grandit par l’aventure, la liberté, les voyages et la recherche de sens. L’optimisme est naturel et contagieux.": "Grows through adventure, freedom, travel, and the search for meaning. Optimism is natural and contagious.",
    "Grandit par l’ambition, la discipline et les objectifs durables. La réussite prend forme à travers la constance et la responsabilité.": "Grows through ambition, discipline, and lasting goals. Success takes shape through consistency and responsibility.",
    "Grandit par l’innovation, les réseaux et les idées collectives. Les projets originaux stimulent l’espoir et l’ouverture.": "Grows through innovation, networks, and collective ideas. Original projects stimulate hope and openness.",
    "Grandit par l’intuition, la compassion et l’imagination. La foi se nourrit de sensibilité, d’art et de connexion spirituelle.": "Grows through intuition, compassion, and imagination. Faith is nourished by sensitivity, art, and spiritual connection.",
    "Apprend la patience dans l’action et la maîtrise de l’impulsivité. La solidité vient d’un courage discipliné.": "Learns patience in action and mastery of impulsiveness. Strength comes from disciplined courage.",
    "Construit lentement, protège les acquis et recherche une sécurité durable. Le changement demande du temps et des preuves concrètes.": "Builds slowly, protects what has been gained, and seeks lasting security. Change requires time and tangible proof.",
    "Structure les idées, les mots et les apprentissages. La maturité passe par une communication plus précise et responsable.": "Structures ideas, words, and learning. Maturity develops through more precise and responsible communication.",
    "Développe la responsabilité affective et la sécurité intérieure. Les devoirs familiaux peuvent prendre une grande importance.": "Develops emotional responsibility and inner security. Family duties can become very important.",
    "Apprend à assumer son rayonnement sans dépendre constamment de la reconnaissance. La créativité gagne en profondeur avec le temps.": "Learns to own personal radiance without constantly depending on recognition. Creativity gains depth over time.",
    "Construit par le travail, l’organisation et le sens du détail. Le perfectionnisme doit rester au service de la progression.": "Builds through work, organization, and attention to detail. Perfectionism should remain in service of progress.",
    "Prend les engagements relationnels au sérieux et recherche des accords durables. Les limites doivent être justes et clairement partagées.": "Takes relationship commitments seriously and seeks lasting agreements. Boundaries need to be fair and clearly shared.",
    "Apprend à gérer le contrôle, la confiance et la vulnérabilité. La solidité naît d’une grande honnêteté émotionnelle.": "Learns to manage control, trust, and vulnerability. Strength grows from deep emotional honesty.",
    "Structure les croyances, les projets et la quête de liberté. La vision devient crédible lorsqu’elle repose sur une méthode.": "Structures beliefs, projects, and the pursuit of freedom. Vision becomes credible when it rests on a method.",
    "Possède un fort sens du devoir, de l’endurance et de la construction. Les objectifs à long terme occupent une place centrale.": "Has a strong sense of duty, endurance, and building. Long-term goals occupy a central place.",
    "Structure l’indépendance, les idées nouvelles et la contribution au collectif. La liberté doit coexister avec la responsabilité.": "Structures independence, new ideas, and contribution to the collective. Freedom must coexist with responsibility.",
    "Apprend à donner une forme concrète aux rêves et à protéger sa sensibilité par des limites saines.": "Learns to give dreams a concrete form and protect sensitivity through healthy boundaries.",
    "Recherche une liberté immédiate, audacieuse et active. Les changements sont souvent rapides et initiés sans attendre l’approbation.": "Seeks immediate, bold, and active freedom. Changes are often rapid and initiated without waiting for approval.",
    "Réinvente progressivement la sécurité, les valeurs et le rapport au matériel. Les changements profonds peuvent d’abord rencontrer de la résistance.": "Gradually reinvents security, values, and the relationship with material life. Deep changes may initially meet resistance.",
    "Innove par les idées, les technologies et les nouvelles manières de communiquer. Le besoin de stimulation mentale est élevé.": "Innovates through ideas, technology, and new ways of communicating. The need for mental stimulation is high.",
    "Réinvente la famille, le foyer et l’expression émotionnelle. Le sentiment d’appartenance doit laisser de la place à l’individualité.": "Reinvents family, home, and emotional expression. The sense of belonging must leave room for individuality.",
    "Exprime une créativité libre, originale et parfois spectaculaire. Le besoin d’être soi-même refuse les rôles trop rigides.": "Expresses free, original, and sometimes spectacular creativity. The need to be oneself rejects overly rigid roles.",
    "Innove dans le travail, les méthodes et les habitudes quotidiennes. Les solutions originales cherchent une utilité concrète.": "Innovates in work, methods, and daily habits. Original solutions seek practical usefulness.",
    "Réinvente les relations, les accords et la manière de vivre à deux. L’égalité et l’espace personnel sont essentiels.": "Reinvents relationships, agreements, and the way of living as a couple. Equality and personal space are essential.",
    "Provoque des transformations soudaines dans l’intimité, le pouvoir et les attachements profonds. L’intensité exige de la liberté intérieure.": "Triggers sudden transformations in intimacy, power, and deep attachments. Intensity requires inner freedom.",
    "Recherche l’aventure, l’indépendance intellectuelle et les horizons nouveaux. Les convictions évoluent à travers l’expérience.": "Seeks adventure, intellectual independence, and new horizons. Convictions evolve through experience.",
    "Réforme les structures, les ambitions et les modèles d’autorité. Le changement devient durable lorsqu’il est stratégiquement organisé.": "Reforms structures, ambitions, and models of authority. Change becomes lasting when it is strategically organized.",
    "Exprime fortement l’originalité, l’indépendance et la vision du futur. Les conventions sont naturellement remises en question.": "Strongly expresses originality, independence, and a vision of the future. Conventions are naturally questioned.",
    "Renouvelle la spiritualité, l’imaginaire et la sensibilité collective. L’intuition peut surgir de manière soudaine et inspirante.": "Renews spirituality, imagination, and collective sensitivity. Intuition can arise suddenly and inspiringly.",
    "Rêve d’action héroïque, de courage et de nouveaux départs. L’élan intuitif doit être vérifié avant de devenir une décision.": "Dreams of heroic action, courage, and new beginnings. Intuitive impulses should be verified before becoming decisions.",
    "Recherche un idéal de paix, de beauté et de sécurité sensorielle. La douceur et la nature nourrissent profondément l’imaginaire.": "Seeks an ideal of peace, beauty, and sensory security. Gentleness and nature deeply nourish the imagination.",
    "Rêve par les mots, les idées et les multiples possibilités. La pensée imaginative doit éviter la dispersion ou les messages ambigus.": "Dreams through words, ideas, and multiple possibilities. Imaginative thinking should avoid dispersion or ambiguous messages.",
    "Possède une grande sensibilité aux ambiances, à la famille et aux mémoires émotionnelles. La compassion est profonde.": "Has great sensitivity to atmospheres, family, and emotional memories. Compassion runs deep.",
    "Rêve d’un amour créatif, lumineux et inspirant. L’expression artistique peut devenir une voie importante de connexion.": "Dreams of a creative, radiant, and inspiring love. Artistic expression can become an important path of connection.",
    "Cherche à donner une utilité concrète à la compassion et aux idéaux. Le risque consiste à vouloir sauver ou réparer sans limites.": "Seeks to give practical usefulness to compassion and ideals. The risk is trying to save or repair without limits.",
    "Idéalise facilement l’amour, la beauté et l’harmonie relationnelle. La clarté des attentes protège contre les désillusions.": "Easily idealizes love, beauty, and relational harmony. Clear expectations protect against disappointment.",
    "Ressent les liens invisibles avec intensité et profondeur. L’intuition est puissante, mais les peurs peuvent parfois colorer les perceptions.": "Feels invisible bonds with intensity and depth. Intuition is powerful, but fears can sometimes color perceptions.",
    "Rêve de sens, de voyages et de vérités universelles. La foi et l’imagination ouvrent de vastes horizons.": "Dreams of meaning, travel, and universal truths. Faith and imagination open vast horizons.",
    "Cherche à matérialiser un idéal dans le monde réel. Les rêves ont besoin d’une structure pour ne pas devenir une obligation pesante.": "Seeks to materialize an ideal in the real world. Dreams need structure so they do not become a burdensome obligation.",
    "Rêve d’un avenir collectif plus libre et plus humain. Les idéaux sociaux ou spirituels peuvent unir fortement les partenaires.": "Dreams of a freer and more humane collective future. Social or spiritual ideals can strongly unite partners.",
    "Exprime naturellement la compassion, l’intuition et l’imagination. Les limites claires sont indispensables pour préserver l’équilibre.": "Naturally expresses compassion, intuition, and imagination. Clear boundaries are essential to preserve balance.",
    "Se transforme par l’affirmation de soi, le courage et les confrontations directes. La puissance doit éviter de devenir domination.": "Transforms through self-assertion, courage, and direct confrontation. Power must avoid becoming domination.",
    "Transforme profondément les valeurs, la sécurité et les attachements matériels. Le lâcher-prise peut demander beaucoup de temps.": "Deeply transforms values, security, and material attachments. Letting go can take a great deal of time.",
    "Transforme les idées, les mots et les croyances mentales. Les conversations peuvent avoir un pouvoir révélateur considérable.": "Transforms ideas, words, and mental beliefs. Conversations can have considerable revelatory power.",
    "Transforme les racines familiales, les mémoires et la sécurité émotionnelle. La guérison passe par une grande profondeur affective.": "Transforms family roots, memories, and emotional security. Healing comes through great emotional depth.",
    "Transforme l’identité créative, le besoin de reconnaissance et l’expression du pouvoir personnel. Le cœur apprend à rayonner sans contrôler.": "Transforms creative identity, the need for recognition, and the expression of personal power. The heart learns to shine without controlling.",
    "Transforme les habitudes, le travail et la relation au contrôle quotidien. La guérison vient souvent d’un changement méthodique.": "Transforms habits, work, and the relationship with daily control. Healing often comes through methodical change.",
    "Transforme les relations, les compromis et les rapports de pouvoir dans le couple. L’égalité réelle devient un enjeu central.": "Transforms relationships, compromises, and power dynamics within the couple. Genuine equality becomes a central issue.",
    "Vit intensément la transformation, la fusion et la régénération. Les vérités cachées cherchent naturellement à remonter à la surface.": "Experiences transformation, fusion, and regeneration intensely. Hidden truths naturally seek to rise to the surface.",
    "Transforme les croyances, les convictions et la recherche de sens. Les expériences extrêmes peuvent modifier profondément la vision du monde.": "Transforms beliefs, convictions, and the search for meaning. Extreme experiences can profoundly alter the worldview.",
    "Transforme l’ambition, l’autorité et les structures durables. La puissance se construit à travers la maîtrise et la responsabilité.": "Transforms ambition, authority, and lasting structures. Power is built through mastery and responsibility.",
    "Transforme les réseaux, les idéaux collectifs et les modèles de liberté. Le pouvoir peut être utilisé pour réinventer l’avenir.": "Transforms networks, collective ideals, and models of freedom. Power can be used to reinvent the future.",
    "Transforme les blessures invisibles, la compassion et la vie spirituelle. La guérison demande de distinguer l’intuition de la fuite.": "Transforms invisible wounds, compassion, and spiritual life. Healing requires distinguishing intuition from escape."
  },
  "es": {
    "Grandit par l’action, le courage et les nouveaux départs. L’enthousiasme augmente lorsqu’un défi peut être relevé rapidement.": "Crece mediante la acción, el valor y los nuevos comienzos. El entusiasmo aumenta cuando puede afrontar rápidamente un desafío.",
    "Grandit par la stabilité, la patience et la création d’une sécurité concrète. Les plaisirs simples nourrissent la confiance.": "Crece mediante la estabilidad, la paciencia y la creación de una seguridad concreta. Los placeres simples alimentan la confianza.",
    "Grandit par les échanges, les apprentissages et la diversité des expériences. La curiosité ouvre constamment de nouvelles possibilités.": "Crece mediante los intercambios, el aprendizaje y la diversidad de experiencias. La curiosidad abre constantemente nuevas posibilidades.",
    "Grandit par les liens affectifs, la famille et le sentiment d’appartenance. La générosité s’exprime à travers la protection.": "Crece mediante los vínculos afectivos, la familia y el sentimiento de pertenencia. La generosidad se expresa a través de la protección.",
    "Grandit par la créativité, la confiance et le rayonnement personnel. Le bonheur augmente lorsqu’il est partagé avec générosité.": "Crece mediante la creatividad, la confianza y el brillo personal. La felicidad aumenta cuando se comparte con generosidad.",
    "Grandit par l’utilité, l’amélioration et le développement de compétences concrètes. La confiance se construit dans les petits progrès.": "Crece mediante la utilidad, la mejora y el desarrollo de habilidades concretas. La confianza se construye con pequeños progresos.",
    "Grandit par les alliances, l’harmonie et la coopération. Les opportunités apparaissent souvent grâce aux relations et aux échanges équilibrés.": "Crece mediante las alianzas, la armonía y la cooperación. Las oportunidades suelen aparecer gracias a las relaciones y los intercambios equilibrados.",
    "Grandit par la profondeur, la transformation et la compréhension des vérités cachées. Les crises peuvent devenir des passages de puissance.": "Crece mediante la profundidad, la transformación y la comprensión de verdades ocultas. Las crisis pueden convertirse en etapas de empoderamiento.",
    "Grandit par l’aventure, la liberté, les voyages et la recherche de sens. L’optimisme est naturel et contagieux.": "Crece mediante la aventura, la libertad, los viajes y la búsqueda de sentido. El optimismo es natural y contagioso.",
    "Grandit par l’ambition, la discipline et les objectifs durables. La réussite prend forme à travers la constance et la responsabilité.": "Crece mediante la ambición, la disciplina y los objetivos duraderos. El éxito toma forma a través de la constancia y la responsabilidad.",
    "Grandit par l’innovation, les réseaux et les idées collectives. Les projets originaux stimulent l’espoir et l’ouverture.": "Crece mediante la innovación, las redes y las ideas colectivas. Los proyectos originales estimulan la esperanza y la apertura.",
    "Grandit par l’intuition, la compassion et l’imagination. La foi se nourrit de sensibilité, d’art et de connexion spirituelle.": "Crece mediante la intuición, la compasión y la imaginación. La fe se alimenta de sensibilidad, arte y conexión espiritual.",
    "Apprend la patience dans l’action et la maîtrise de l’impulsivité. La solidité vient d’un courage discipliné.": "Aprende la paciencia en la acción y el dominio de la impulsividad. La solidez nace de un valor disciplinado.",
    "Construit lentement, protège les acquis et recherche une sécurité durable. Le changement demande du temps et des preuves concrètes.": "Construye lentamente, protege lo adquirido y busca una seguridad duradera. El cambio necesita tiempo y pruebas concretas.",
    "Structure les idées, les mots et les apprentissages. La maturité passe par une communication plus précise et responsable.": "Estructura las ideas, las palabras y el aprendizaje. La madurez pasa por una comunicación más precisa y responsable.",
    "Développe la responsabilité affective et la sécurité intérieure. Les devoirs familiaux peuvent prendre une grande importance.": "Desarrolla responsabilidad afectiva y seguridad interior. Los deberes familiares pueden adquirir gran importancia.",
    "Apprend à assumer son rayonnement sans dépendre constamment de la reconnaissance. La créativité gagne en profondeur avec le temps.": "Aprende a asumir su brillo sin depender constantemente del reconocimiento. La creatividad gana profundidad con el tiempo.",
    "Construit par le travail, l’organisation et le sens du détail. Le perfectionnisme doit rester au service de la progression.": "Construye mediante el trabajo, la organización y la atención al detalle. El perfeccionismo debe permanecer al servicio del progreso.",
    "Prend les engagements relationnels au sérieux et recherche des accords durables. Les limites doivent être justes et clairement partagées.": "Se toma en serio los compromisos relacionales y busca acuerdos duraderos. Los límites deben ser justos y claramente compartidos.",
    "Apprend à gérer le contrôle, la confiance et la vulnérabilité. La solidité naît d’une grande honnêteté émotionnelle.": "Aprende a gestionar el control, la confianza y la vulnerabilidad. La solidez nace de una gran honestidad emocional.",
    "Structure les croyances, les projets et la quête de liberté. La vision devient crédible lorsqu’elle repose sur une méthode.": "Estructura las creencias, los proyectos y la búsqueda de libertad. La visión se vuelve creíble cuando se apoya en un método.",
    "Possède un fort sens du devoir, de l’endurance et de la construction. Les objectifs à long terme occupent une place centrale.": "Posee un fuerte sentido del deber, la resistencia y la construcción. Los objetivos a largo plazo ocupan un lugar central.",
    "Structure l’indépendance, les idées nouvelles et la contribution au collectif. La liberté doit coexister avec la responsabilité.": "Estructura la independencia, las ideas nuevas y la contribución al colectivo. La libertad debe coexistir con la responsabilidad.",
    "Apprend à donner une forme concrète aux rêves et à protéger sa sensibilité par des limites saines.": "Aprende a dar una forma concreta a los sueños y a proteger su sensibilidad mediante límites saludables.",
    "Recherche une liberté immédiate, audacieuse et active. Les changements sont souvent rapides et initiés sans attendre l’approbation.": "Busca una libertad inmediata, audaz y activa. Los cambios suelen ser rápidos e iniciarse sin esperar aprobación.",
    "Réinvente progressivement la sécurité, les valeurs et le rapport au matériel. Les changements profonds peuvent d’abord rencontrer de la résistance.": "Reinventa progresivamente la seguridad, los valores y la relación con lo material. Los cambios profundos pueden encontrar resistencia al principio.",
    "Innove par les idées, les technologies et les nouvelles manières de communiquer. Le besoin de stimulation mentale est élevé.": "Innova mediante las ideas, la tecnología y nuevas formas de comunicar. La necesidad de estimulación mental es elevada.",
    "Réinvente la famille, le foyer et l’expression émotionnelle. Le sentiment d’appartenance doit laisser de la place à l’individualité.": "Reinventa la familia, el hogar y la expresión emocional. El sentimiento de pertenencia debe dejar espacio a la individualidad.",
    "Exprime une créativité libre, originale et parfois spectaculaire. Le besoin d’être soi-même refuse les rôles trop rigides.": "Expresa una creatividad libre, original y a veces espectacular. La necesidad de ser uno mismo rechaza los papeles demasiado rígidos.",
    "Innove dans le travail, les méthodes et les habitudes quotidiennes. Les solutions originales cherchent une utilité concrète.": "Innova en el trabajo, los métodos y los hábitos cotidianos. Las soluciones originales buscan una utilidad concreta.",
    "Réinvente les relations, les accords et la manière de vivre à deux. L’égalité et l’espace personnel sont essentiels.": "Reinventa las relaciones, los acuerdos y la manera de vivir en pareja. La igualdad y el espacio personal son esenciales.",
    "Provoque des transformations soudaines dans l’intimité, le pouvoir et les attachements profonds. L’intensité exige de la liberté intérieure.": "Provoca transformaciones repentinas en la intimidad, el poder y los vínculos profundos. La intensidad exige libertad interior.",
    "Recherche l’aventure, l’indépendance intellectuelle et les horizons nouveaux. Les convictions évoluent à travers l’expérience.": "Busca aventura, independencia intelectual y nuevos horizontes. Las convicciones evolucionan a través de la experiencia.",
    "Réforme les structures, les ambitions et les modèles d’autorité. Le changement devient durable lorsqu’il est stratégiquement organisé.": "Reforma las estructuras, las ambiciones y los modelos de autoridad. El cambio se vuelve duradero cuando se organiza estratégicamente.",
    "Exprime fortement l’originalité, l’indépendance et la vision du futur. Les conventions sont naturellement remises en question.": "Expresa con fuerza la originalidad, la independencia y la visión del futuro. Las convenciones se cuestionan de forma natural.",
    "Renouvelle la spiritualité, l’imaginaire et la sensibilité collective. L’intuition peut surgir de manière soudaine et inspirante.": "Renueva la espiritualidad, la imaginación y la sensibilidad colectiva. La intuición puede surgir de forma repentina e inspiradora.",
    "Rêve d’action héroïque, de courage et de nouveaux départs. L’élan intuitif doit être vérifié avant de devenir une décision.": "Sueña con acciones heroicas, valor y nuevos comienzos. El impulso intuitivo debe verificarse antes de convertirse en decisión.",
    "Recherche un idéal de paix, de beauté et de sécurité sensorielle. La douceur et la nature nourrissent profondément l’imaginaire.": "Busca un ideal de paz, belleza y seguridad sensorial. La dulzura y la naturaleza alimentan profundamente la imaginación.",
    "Rêve par les mots, les idées et les multiples possibilités. La pensée imaginative doit éviter la dispersion ou les messages ambigus.": "Sueña a través de las palabras, las ideas y múltiples posibilidades. El pensamiento imaginativo debe evitar la dispersión o los mensajes ambiguos.",
    "Possède une grande sensibilité aux ambiances, à la famille et aux mémoires émotionnelles. La compassion est profonde.": "Posee una gran sensibilidad a los ambientes, la familia y las memorias emocionales. La compasión es profunda.",
    "Rêve d’un amour créatif, lumineux et inspirant. L’expression artistique peut devenir une voie importante de connexion.": "Sueña con un amor creativo, luminoso e inspirador. La expresión artística puede convertirse en una vía importante de conexión.",
    "Cherche à donner une utilité concrète à la compassion et aux idéaux. Le risque consiste à vouloir sauver ou réparer sans limites.": "Busca dar utilidad concreta a la compasión y los ideales. El riesgo consiste en querer salvar o reparar sin límites.",
    "Idéalise facilement l’amour, la beauté et l’harmonie relationnelle. La clarté des attentes protège contre les désillusions.": "Idealiza fácilmente el amor, la belleza y la armonía relacional. La claridad de las expectativas protege de las desilusiones.",
    "Ressent les liens invisibles avec intensité et profondeur. L’intuition est puissante, mais les peurs peuvent parfois colorer les perceptions.": "Siente los vínculos invisibles con intensidad y profundidad. La intuición es poderosa, pero los miedos pueden colorear las percepciones.",
    "Rêve de sens, de voyages et de vérités universelles. La foi et l’imagination ouvrent de vastes horizons.": "Sueña con sentido, viajes y verdades universales. La fe y la imaginación abren amplios horizontes.",
    "Cherche à matérialiser un idéal dans le monde réel. Les rêves ont besoin d’une structure pour ne pas devenir une obligation pesante.": "Busca materializar un ideal en el mundo real. Los sueños necesitan estructura para no convertirse en una obligación pesada.",
    "Rêve d’un avenir collectif plus libre et plus humain. Les idéaux sociaux ou spirituels peuvent unir fortement les partenaires.": "Sueña con un futuro colectivo más libre y humano. Los ideales sociales o espirituales pueden unir fuertemente a la pareja.",
    "Exprime naturellement la compassion, l’intuition et l’imagination. Les limites claires sont indispensables pour préserver l’équilibre.": "Expresa naturalmente compasión, intuición e imaginación. Los límites claros son indispensables para preservar el equilibrio.",
    "Se transforme par l’affirmation de soi, le courage et les confrontations directes. La puissance doit éviter de devenir domination.": "Se transforma mediante la afirmación personal, el valor y las confrontaciones directas. El poder debe evitar convertirse en dominación.",
    "Transforme profondément les valeurs, la sécurité et les attachements matériels. Le lâcher-prise peut demander beaucoup de temps.": "Transforma profundamente los valores, la seguridad y los apegos materiales. Soltar puede requerir mucho tiempo.",
    "Transforme les idées, les mots et les croyances mentales. Les conversations peuvent avoir un pouvoir révélateur considérable.": "Transforma las ideas, las palabras y las creencias mentales. Las conversaciones pueden tener un considerable poder revelador.",
    "Transforme les racines familiales, les mémoires et la sécurité émotionnelle. La guérison passe par une grande profondeur affective.": "Transforma las raíces familiares, los recuerdos y la seguridad emocional. La sanación pasa por una gran profundidad afectiva.",
    "Transforme l’identité créative, le besoin de reconnaissance et l’expression du pouvoir personnel. Le cœur apprend à rayonner sans contrôler.": "Transforma la identidad creativa, la necesidad de reconocimiento y la expresión del poder personal. El corazón aprende a brillar sin controlar.",
    "Transforme les habitudes, le travail et la relation au contrôle quotidien. La guérison vient souvent d’un changement méthodique.": "Transforma los hábitos, el trabajo y la relación con el control cotidiano. La sanación suele llegar mediante un cambio metódico.",
    "Transforme les relations, les compromis et les rapports de pouvoir dans le couple. L’égalité réelle devient un enjeu central.": "Transforma las relaciones, los compromisos y las dinámicas de poder en la pareja. La igualdad real se vuelve un tema central.",
    "Vit intensément la transformation, la fusion et la régénération. Les vérités cachées cherchent naturellement à remonter à la surface.": "Vive intensamente la transformación, la fusión y la regeneración. Las verdades ocultas buscan naturalmente salir a la superficie.",
    "Transforme les croyances, les convictions et la recherche de sens. Les expériences extrêmes peuvent modifier profondément la vision du monde.": "Transforma las creencias, las convicciones y la búsqueda de sentido. Las experiencias extremas pueden modificar profundamente la visión del mundo.",
    "Transforme l’ambition, l’autorité et les structures durables. La puissance se construit à travers la maîtrise et la responsabilité.": "Transforma la ambición, la autoridad y las estructuras duraderas. El poder se construye mediante el dominio y la responsabilidad.",
    "Transforme les réseaux, les idéaux collectifs et les modèles de liberté. Le pouvoir peut être utilisé pour réinventer l’avenir.": "Transforma las redes, los ideales colectivos y los modelos de libertad. El poder puede utilizarse para reinventar el futuro.",
    "Transforme les blessures invisibles, la compassion et la vie spirituelle. La guérison demande de distinguer l’intuition de la fuite.": "Transforma las heridas invisibles, la compasión y la vida espiritual. La sanación exige distinguir la intuición de la evasión.",
    "Cette interaction favorise la confiance, l’encouragement mutuel et le sentiment que la relation ouvre de nouvelles possibilités.": "Esta interacción favorece la confianza, el apoyo mutuo y la sensación de que la relación abre nuevas posibilidades.",
    "Cette interaction peut amplifier les attentes, les promesses ou les excès. L’enthousiasme gagne à être ramené vers des objectifs réalistes.": "Esta interacción puede amplificar expectativas, promesas o excesos. Conviene orientar el entusiasmo hacia objetivos realistas.",
    "Cette connexion intensifie l’optimisme, la générosité et le désir de grandir ensemble, tout en amplifiant parfois les excès.": "Esta conexión intensifica el optimismo, la generosidad y el deseo de crecer juntos, aunque a veces también amplifica los excesos.",
    "Cette interaction soutient la fidélité, la constance et la capacité à assumer ensemble les responsabilités importantes.": "Esta interacción favorece la fidelidad, la constancia y la capacidad de asumir juntos responsabilidades importantes.",
    "Cette interaction peut créer un sentiment de jugement, de lourdeur ou de limitation. Les règles doivent être choisies ensemble.": "Esta interacción puede generar sensación de juicio, pesadez o limitación. Las reglas deben elegirse juntos.",
    "Cette connexion donne au lien un poids important et un potentiel de durée, mais demande patience, respect et maturité.": "Esta conexión da al vínculo un peso importante y potencial de duración, pero exige paciencia, respeto y madurez.",
    "Cette interaction apporte fraîcheur, liberté et stimulation. Chacun peut encourager l’autre à devenir plus authentique.": "Esta interacción aporta frescura, libertad y estímulo. Cada persona puede animar a la otra a ser más auténtica.",
    "Cette interaction peut créer de l’instabilité, des réactions imprévisibles ou un besoin soudain de distance.": "Esta interacción puede crear inestabilidad, reacciones imprevisibles o una necesidad repentina de distancia.",
    "Cette connexion rend la relation inhabituelle, électrique et profondément stimulante, avec un fort besoin de liberté.": "Esta conexión vuelve la relación inusual, eléctrica y profundamente estimulante, con una fuerte necesidad de libertad.",
    "Cette interaction favorise l’empathie, la douceur, l’inspiration et le sentiment d’une compréhension intuitive.": "Esta interacción favorece la empatía, la ternura, la inspiración y la sensación de comprensión intuitiva.",
    "Cette interaction peut brouiller les intentions, idéaliser la relation ou créer des attentes difficiles à vérifier.": "Esta interacción puede difuminar las intenciones, idealizar la relación o crear expectativas difíciles de verificar.",
    "Cette connexion renforce la sensibilité, le romantisme et l’impression d’un lien subtil, mais exige de la clarté.": "Esta conexión refuerza la sensibilidad, el romanticismo y la impresión de un vínculo sutil, pero exige claridad.",
    "Cette interaction favorise la guérison profonde, la résilience et la capacité à transformer ensemble les périodes difficiles.": "Esta interacción favorece una sanación profunda, la resiliencia y la capacidad de transformar juntos los períodos difíciles.",
    "Cette interaction peut réveiller jalousie, peur de perdre, contrôle ou luttes de pouvoir si les émotions restent cachées.": "Esta interacción puede despertar celos, miedo a perder, control o luchas de poder si las emociones permanecen ocultas.",
    "Cette connexion intensifie fortement le lien et peut provoquer une transformation durable chez les deux partenaires.": "Esta conexión intensifica fuertemente el vínculo y puede provocar una transformación duradera en ambos miembros de la pareja.",
    "Vous pouvez vous encourager, élargir vos horizons et faire circuler davantage d’espoir dans la relation.": "Pueden animarse mutuamente, ampliar sus horizontes y aportar más esperanza a la relación.",
    "Vous pouvez construire des repères solides, traverser les périodes exigeantes et donner une forme durable à vos engagements.": "Pueden construir bases sólidas, atravesar períodos exigentes y dar una forma duradera a sus compromisos.",
    "Vous pouvez maintenir la relation vivante, inventer vos propres règles et soutenir l’authenticité de chacun.": "Pueden mantener viva la relación, crear sus propias reglas y apoyar la autenticidad de cada persona.",
    "Vous pouvez développer une grande empathie, partager un imaginaire riche et vous inspirer mutuellement.": "Pueden desarrollar una gran empatía, compartir un imaginario rico e inspirarse mutuamente.",
    "Vous pouvez transformer les crises en véritables passages de guérison et développer une confiance très profonde.": "Pueden transformar las crisis en auténticos procesos de sanación y desarrollar una confianza muy profunda.",
    "Vos réactions semblables facilitent une compréhension immédiate de cette énergie.": "Sus reacciones similares facilitan una comprensión inmediata de esta energía.",
    "Vos éléments communs donnent un rythme compatible à cette dynamique.": "Sus elementos comunes dan un ritmo compatible a esta dinámica.",
    "L’optimisme peut devenir exagération, dépense excessive ou promesse difficile à tenir lorsque l’enthousiasme remplace la préparation.": "El optimismo puede convertirse en exageración, gasto excesivo o promesas difíciles de cumplir cuando el entusiasmo sustituye a la preparación.",
    "Les responsabilités peuvent devenir lourdes si l’un impose les règles, critique l’autre ou porte silencieusement une charge disproportionnée.": "Las responsabilidades pueden volverse pesadas si una persona impone las reglas, critica a la otra o carga en silencio con una parte desproporcionada.",
    "Le besoin de liberté peut provoquer distance ou imprévisibilité si les changements surviennent sans explication ni repère rassurant.": "La necesidad de libertad puede crear distancia o imprevisibilidad si los cambios ocurren sin explicación ni referencias tranquilizadoras.",
    "L’idéalisation peut masquer les besoins réels, les désaccords ou les limites personnelles tant que les faits ne sont pas clairement vérifiés.": "La idealización puede ocultar necesidades reales, desacuerdos o límites personales mientras los hechos no se verifiquen claramente.",
    "L’intensité peut se transformer en contrôle, jalousie ou rapport de force lorsque la peur de perdre n’est pas nommée avec honnêteté.": "La intensidad puede convertirse en control, celos o lucha de poder cuando el miedo a perder no se expresa con honestidad.",
    "Vos rythmes différents demandent une communication encore plus explicite.": "Sus ritmos diferentes requieren una comunicación aún más explícita."
  },
  "de": {
    "Grandit par l’action, le courage et les nouveaux départs. L’enthousiasme augmente lorsqu’un défi peut être relevé rapidement.": "Wächst durch Handeln, Mut und Neuanfänge. Die Begeisterung steigt, wenn eine Herausforderung schnell angenommen werden kann.",
    "Grandit par la stabilité, la patience et la création d’une sécurité concrète. Les plaisirs simples nourrissent la confiance.": "Wächst durch Stabilität, Geduld und den Aufbau konkreter Sicherheit. Einfache Freuden stärken das Vertrauen.",
    "Grandit par les échanges, les apprentissages et la diversité des expériences. La curiosité ouvre constamment de nouvelles possibilités.": "Wächst durch Austausch, Lernen und vielfältige Erfahrungen. Neugier eröffnet ständig neue Möglichkeiten.",
    "Grandit par les liens affectifs, la famille et le sentiment d’appartenance. La générosité s’exprime à travers la protection.": "Wächst durch emotionale Bindungen, Familie und Zugehörigkeit. Großzügigkeit zeigt sich durch Schutz.",
    "Grandit par la créativité, la confiance et le rayonnement personnel. Le bonheur augmente lorsqu’il est partagé avec générosité.": "Wächst durch Kreativität, Selbstvertrauen und persönliche Ausstrahlung. Glück wächst, wenn es großzügig geteilt wird.",
    "Grandit par l’utilité, l’amélioration et le développement de compétences concrètes. La confiance se construit dans les petits progrès.": "Wächst durch Nützlichkeit, Verbesserung und den Aufbau praktischer Fähigkeiten. Vertrauen entsteht durch kleine Fortschritte.",
    "Grandit par les alliances, l’harmonie et la coopération. Les opportunités apparaissent souvent grâce aux relations et aux échanges équilibrés.": "Wächst durch Bündnisse, Harmonie und Zusammenarbeit. Chancen entstehen oft durch Beziehungen und ausgewogenen Austausch.",
    "Grandit par la profondeur, la transformation et la compréhension des vérités cachées. Les crises peuvent devenir des passages de puissance.": "Wächst durch Tiefe, Transformation und das Verständnis verborgener Wahrheiten. Krisen können zu Phasen innerer Stärke werden.",
    "Grandit par l’aventure, la liberté, les voyages et la recherche de sens. L’optimisme est naturel et contagieux.": "Wächst durch Abenteuer, Freiheit, Reisen und Sinnsuche. Optimismus ist natürlich und ansteckend.",
    "Grandit par l’ambition, la discipline et les objectifs durables. La réussite prend forme à travers la constance et la responsabilité.": "Wächst durch Ehrgeiz, Disziplin und langfristige Ziele. Erfolg entsteht durch Beständigkeit und Verantwortung.",
    "Grandit par l’innovation, les réseaux et les idées collectives. Les projets originaux stimulent l’espoir et l’ouverture.": "Wächst durch Innovation, Netzwerke und kollektive Ideen. Originelle Projekte fördern Hoffnung und Offenheit.",
    "Grandit par l’intuition, la compassion et l’imagination. La foi se nourrit de sensibilité, d’art et de connexion spirituelle.": "Wächst durch Intuition, Mitgefühl und Fantasie. Glaube wird durch Sensibilität, Kunst und spirituelle Verbundenheit genährt.",
    "Apprend la patience dans l’action et la maîtrise de l’impulsivité. La solidité vient d’un courage discipliné.": "Lernt Geduld im Handeln und die Beherrschung von Impulsivität. Stärke entsteht aus diszipliniertem Mut.",
    "Construit lentement, protège les acquis et recherche une sécurité durable. Le changement demande du temps et des preuves concrètes.": "Baut langsam auf, schützt Erreichtes und sucht dauerhafte Sicherheit. Veränderung braucht Zeit und konkrete Beweise.",
    "Structure les idées, les mots et les apprentissages. La maturité passe par une communication plus précise et responsable.": "Strukturiert Ideen, Worte und Lernen. Reife entsteht durch präzisere und verantwortungsvollere Kommunikation.",
    "Développe la responsabilité affective et la sécurité intérieure. Les devoirs familiaux peuvent prendre une grande importance.": "Entwickelt emotionale Verantwortung und innere Sicherheit. Familiäre Pflichten können große Bedeutung gewinnen.",
    "Apprend à assumer son rayonnement sans dépendre constamment de la reconnaissance. La créativité gagne en profondeur avec le temps.": "Lernt, die eigene Ausstrahlung anzunehmen, ohne ständig von Anerkennung abhängig zu sein. Kreativität gewinnt mit der Zeit an Tiefe.",
    "Construit par le travail, l’organisation et le sens du détail. Le perfectionnisme doit rester au service de la progression.": "Baut durch Arbeit, Organisation und Sinn für Details auf. Perfektionismus sollte dem Fortschritt dienen.",
    "Prend les engagements relationnels au sérieux et recherche des accords durables. Les limites doivent être justes et clairement partagées.": "Nimmt Beziehungsverpflichtungen ernst und sucht dauerhafte Vereinbarungen. Grenzen müssen fair und klar geteilt sein.",
    "Apprend à gérer le contrôle, la confiance et la vulnérabilité. La solidité naît d’une grande honnêteté émotionnelle.": "Lernt, Kontrolle, Vertrauen und Verletzlichkeit zu handhaben. Stärke entsteht aus großer emotionaler Ehrlichkeit.",
    "Structure les croyances, les projets et la quête de liberté. La vision devient crédible lorsqu’elle repose sur une méthode.": "Strukturiert Überzeugungen, Projekte und das Streben nach Freiheit. Vision wird glaubwürdig, wenn sie auf einer Methode beruht.",
    "Possède un fort sens du devoir, de l’endurance et de la construction. Les objectifs à long terme occupent une place centrale.": "Besitzt ein starkes Pflichtgefühl, Ausdauer und Aufbaukraft. Langfristige Ziele stehen im Mittelpunkt.",
    "Structure l’indépendance, les idées nouvelles et la contribution au collectif. La liberté doit coexister avec la responsabilité.": "Strukturiert Unabhängigkeit, neue Ideen und den Beitrag zum Kollektiv. Freiheit muss mit Verantwortung koexistieren.",
    "Apprend à donner une forme concrète aux rêves et à protéger sa sensibilité par des limites saines.": "Lernt, Träumen eine konkrete Form zu geben und Sensibilität durch gesunde Grenzen zu schützen.",
    "Recherche une liberté immédiate, audacieuse et active. Les changements sont souvent rapides et initiés sans attendre l’approbation.": "Sucht unmittelbare, mutige und aktive Freiheit. Veränderungen erfolgen oft schnell und ohne auf Zustimmung zu warten.",
    "Réinvente progressivement la sécurité, les valeurs et le rapport au matériel. Les changements profonds peuvent d’abord rencontrer de la résistance.": "Erfindet Sicherheit, Werte und den Umgang mit Materiellem schrittweise neu. Tiefe Veränderungen können zunächst auf Widerstand stoßen.",
    "Innove par les idées, les technologies et les nouvelles manières de communiquer. Le besoin de stimulation mentale est élevé.": "Innoviert durch Ideen, Technologie und neue Kommunikationsformen. Das Bedürfnis nach geistiger Anregung ist hoch.",
    "Réinvente la famille, le foyer et l’expression émotionnelle. Le sentiment d’appartenance doit laisser de la place à l’individualité.": "Erfindet Familie, Zuhause und emotionalen Ausdruck neu. Zugehörigkeit muss Raum für Individualität lassen.",
    "Exprime une créativité libre, originale et parfois spectaculaire. Le besoin d’être soi-même refuse les rôles trop rigides.": "Drückt freie, originelle und manchmal spektakuläre Kreativität aus. Das Bedürfnis, man selbst zu sein, lehnt starre Rollen ab.",
    "Innove dans le travail, les méthodes et les habitudes quotidiennes. Les solutions originales cherchent une utilité concrète.": "Innoviert in Arbeit, Methoden und täglichen Gewohnheiten. Originelle Lösungen suchen praktischen Nutzen.",
    "Réinvente les relations, les accords et la manière de vivre à deux. L’égalité et l’espace personnel sont essentiels.": "Erfindet Beziehungen, Vereinbarungen und das Zusammenleben neu. Gleichberechtigung und persönlicher Freiraum sind wesentlich.",
    "Provoque des transformations soudaines dans l’intimité, le pouvoir et les attachements profonds. L’intensité exige de la liberté intérieure.": "Löst plötzliche Veränderungen in Intimität, Macht und tiefen Bindungen aus. Intensität verlangt innere Freiheit.",
    "Recherche l’aventure, l’indépendance intellectuelle et les horizons nouveaux. Les convictions évoluent à travers l’expérience.": "Sucht Abenteuer, intellektuelle Unabhängigkeit und neue Horizonte. Überzeugungen entwickeln sich durch Erfahrung.",
    "Réforme les structures, les ambitions et les modèles d’autorité. Le changement devient durable lorsqu’il est stratégiquement organisé.": "Reformiert Strukturen, Ambitionen und Autoritätsmodelle. Veränderung wird dauerhaft, wenn sie strategisch organisiert ist.",
    "Exprime fortement l’originalité, l’indépendance et la vision du futur. Les conventions sont naturellement remises en question.": "Drückt Originalität, Unabhängigkeit und Zukunftsvision stark aus. Konventionen werden natürlich infrage gestellt.",
    "Renouvelle la spiritualité, l’imaginaire et la sensibilité collective. L’intuition peut surgir de manière soudaine et inspirante.": "Erneuert Spiritualität, Fantasie und kollektive Sensibilität. Intuition kann plötzlich und inspirierend auftauchen.",
    "Rêve d’action héroïque, de courage et de nouveaux départs. L’élan intuitif doit être vérifié avant de devenir une décision.": "Träumt von heldenhaftem Handeln, Mut und Neuanfängen. Intuitive Impulse sollten geprüft werden, bevor sie zu Entscheidungen werden.",
    "Recherche un idéal de paix, de beauté et de sécurité sensorielle. La douceur et la nature nourrissent profondément l’imaginaire.": "Sucht ein Ideal von Frieden, Schönheit und sinnlicher Sicherheit. Sanftheit und Natur nähren die Fantasie tief.",
    "Rêve par les mots, les idées et les multiples possibilités. La pensée imaginative doit éviter la dispersion ou les messages ambigus.": "Träumt durch Worte, Ideen und viele Möglichkeiten. Fantasievolles Denken sollte Zerstreuung oder mehrdeutige Botschaften vermeiden.",
    "Possède une grande sensibilité aux ambiances, à la famille et aux mémoires émotionnelles. La compassion est profonde.": "Besitzt große Sensibilität für Stimmungen, Familie und emotionale Erinnerungen. Mitgefühl ist tief.",
    "Rêve d’un amour créatif, lumineux et inspirant. L’expression artistique peut devenir une voie importante de connexion.": "Träumt von kreativer, strahlender und inspirierender Liebe. Künstlerischer Ausdruck kann zu einem wichtigen Weg der Verbindung werden.",
    "Cherche à donner une utilité concrète à la compassion et aux idéaux. Le risque consiste à vouloir sauver ou réparer sans limites.": "Versucht, Mitgefühl und Idealen einen konkreten Nutzen zu geben. Das Risiko besteht darin, ohne Grenzen retten oder reparieren zu wollen.",
    "Idéalise facilement l’amour, la beauté et l’harmonie relationnelle. La clarté des attentes protège contre les désillusions.": "Idealisiert Liebe, Schönheit und Beziehungsharmonie leicht. Klare Erwartungen schützen vor Enttäuschungen.",
    "Ressent les liens invisibles avec intensité et profondeur. L’intuition est puissante, mais les peurs peuvent parfois colorer les perceptions.": "Spürt unsichtbare Verbindungen intensiv und tief. Die Intuition ist stark, doch Ängste können Wahrnehmungen färben.",
    "Rêve de sens, de voyages et de vérités universelles. La foi et l’imagination ouvrent de vastes horizons.": "Träumt von Sinn, Reisen und universellen Wahrheiten. Glaube und Fantasie öffnen weite Horizonte.",
    "Cherche à matérialiser un idéal dans le monde réel. Les rêves ont besoin d’une structure pour ne pas devenir une obligation pesante.": "Versucht, ein Ideal in der realen Welt zu verwirklichen. Träume brauchen Struktur, damit sie nicht zu einer belastenden Pflicht werden.",
    "Rêve d’un avenir collectif plus libre et plus humain. Les idéaux sociaux ou spirituels peuvent unir fortement les partenaires.": "Träumt von einer freieren und menschlicheren gemeinsamen Zukunft. Soziale oder spirituelle Ideale können Partner stark verbinden.",
    "Exprime naturellement la compassion, l’intuition et l’imagination. Les limites claires sont indispensables pour préserver l’équilibre.": "Drückt Mitgefühl, Intuition und Fantasie natürlich aus. Klare Grenzen sind unerlässlich, um das Gleichgewicht zu bewahren.",
    "Se transforme par l’affirmation de soi, le courage et les confrontations directes. La puissance doit éviter de devenir domination.": "Transformiert sich durch Selbstbehauptung, Mut und direkte Konfrontationen. Macht darf nicht zu Dominanz werden.",
    "Transforme profondément les valeurs, la sécurité et les attachements matériels. Le lâcher-prise peut demander beaucoup de temps.": "Transformiert Werte, Sicherheit und materielle Bindungen tiefgehend. Loslassen kann viel Zeit benötigen.",
    "Transforme les idées, les mots et les croyances mentales. Les conversations peuvent avoir un pouvoir révélateur considérable.": "Transformiert Ideen, Worte und mentale Überzeugungen. Gespräche können eine erhebliche enthüllende Kraft haben.",
    "Transforme les racines familiales, les mémoires et la sécurité émotionnelle. La guérison passe par une grande profondeur affective.": "Transformiert familiäre Wurzeln, Erinnerungen und emotionale Sicherheit. Heilung entsteht durch große emotionale Tiefe.",
    "Transforme l’identité créative, le besoin de reconnaissance et l’expression du pouvoir personnel. Le cœur apprend à rayonner sans contrôler.": "Transformiert kreative Identität, Anerkennungsbedürfnis und persönlichen Machtausdruck. Das Herz lernt zu strahlen, ohne zu kontrollieren.",
    "Transforme les habitudes, le travail et la relation au contrôle quotidien. La guérison vient souvent d’un changement méthodique.": "Transformiert Gewohnheiten, Arbeit und den Umgang mit täglicher Kontrolle. Heilung entsteht oft durch methodische Veränderung.",
    "Transforme les relations, les compromis et les rapports de pouvoir dans le couple. L’égalité réelle devient un enjeu central.": "Transformiert Beziehungen, Kompromisse und Machtdynamiken in der Partnerschaft. Echte Gleichberechtigung wird zu einem zentralen Thema.",
    "Vit intensément la transformation, la fusion et la régénération. Les vérités cachées cherchent naturellement à remonter à la surface.": "Erlebt Transformation, Verschmelzung und Regeneration intensiv. Verborgene Wahrheiten drängen natürlich an die Oberfläche.",
    "Transforme les croyances, les convictions et la recherche de sens. Les expériences extrêmes peuvent modifier profondément la vision du monde.": "Transformiert Überzeugungen, Weltanschauungen und Sinnsuche. Extreme Erfahrungen können das Weltbild tief verändern.",
    "Transforme l’ambition, l’autorité et les structures durables. La puissance se construit à travers la maîtrise et la responsabilité.": "Transformiert Ehrgeiz, Autorität und dauerhafte Strukturen. Macht entsteht durch Selbstbeherrschung und Verantwortung.",
    "Transforme les réseaux, les idéaux collectifs et les modèles de liberté. Le pouvoir peut être utilisé pour réinventer l’avenir.": "Transformiert Netzwerke, kollektive Ideale und Freiheitsmodelle. Macht kann genutzt werden, um die Zukunft neu zu erfinden.",
    "Transforme les blessures invisibles, la compassion et la vie spirituelle. La guérison demande de distinguer l’intuition de la fuite.": "Transformiert unsichtbare Wunden, Mitgefühl und spirituelles Leben. Heilung verlangt, Intuition von Flucht zu unterscheiden.",
    "Cette interaction favorise la confiance, l’encouragement mutuel et le sentiment que la relation ouvre de nouvelles possibilités.": "Diese Wechselwirkung fördert Vertrauen, gegenseitige Ermutigung und das Gefühl, dass die Beziehung neue Möglichkeiten eröffnet.",
    "Cette interaction peut amplifier les attentes, les promesses ou les excès. L’enthousiasme gagne à être ramené vers des objectifs réalistes.": "Diese Wechselwirkung kann Erwartungen, Versprechen oder Übertreibungen verstärken. Begeisterung sollte auf realistische Ziele gelenkt werden.",
    "Cette connexion intensifie l’optimisme, la générosité et le désir de grandir ensemble, tout en amplifiant parfois les excès.": "Diese Verbindung verstärkt Optimismus, Großzügigkeit und den Wunsch, gemeinsam zu wachsen, kann aber auch Übertreibungen verstärken.",
    "Cette interaction soutient la fidélité, la constance et la capacité à assumer ensemble les responsabilités importantes.": "Diese Wechselwirkung unterstützt Treue, Beständigkeit und die Fähigkeit, wichtige Verantwortung gemeinsam zu tragen.",
    "Cette interaction peut créer un sentiment de jugement, de lourdeur ou de limitation. Les règles doivent être choisies ensemble.": "Diese Wechselwirkung kann ein Gefühl von Bewertung, Schwere oder Begrenzung erzeugen. Regeln sollten gemeinsam gewählt werden.",
    "Cette connexion donne au lien un poids important et un potentiel de durée, mais demande patience, respect et maturité.": "Diese Verbindung gibt der Beziehung Gewicht und langfristiges Potenzial, verlangt jedoch Geduld, Respekt und Reife.",
    "Cette interaction apporte fraîcheur, liberté et stimulation. Chacun peut encourager l’autre à devenir plus authentique.": "Diese Wechselwirkung bringt Frische, Freiheit und Anregung. Beide können den anderen ermutigen, authentischer zu werden.",
    "Cette interaction peut créer de l’instabilité, des réactions imprévisibles ou un besoin soudain de distance.": "Diese Wechselwirkung kann Instabilität, unvorhersehbare Reaktionen oder ein plötzliches Bedürfnis nach Distanz erzeugen.",
    "Cette connexion rend la relation inhabituelle, électrique et profondément stimulante, avec un fort besoin de liberté.": "Diese Verbindung macht die Beziehung ungewöhnlich, elektrisierend und stark anregend, mit einem großen Freiheitsbedürfnis.",
    "Cette interaction favorise l’empathie, la douceur, l’inspiration et le sentiment d’une compréhension intuitive.": "Diese Wechselwirkung fördert Empathie, Sanftheit, Inspiration und das Gefühl intuitiven Verständnisses.",
    "Cette interaction peut brouiller les intentions, idéaliser la relation ou créer des attentes difficiles à vérifier.": "Diese Wechselwirkung kann Absichten verwischen, die Beziehung idealisieren oder schwer überprüfbare Erwartungen erzeugen.",
    "Cette connexion renforce la sensibilité, le romantisme et l’impression d’un lien subtil, mais exige de la clarté.": "Diese Verbindung verstärkt Sensibilität, Romantik und das Gefühl einer feinen Verbindung, verlangt aber Klarheit.",
    "Cette interaction favorise la guérison profonde, la résilience et la capacité à transformer ensemble les périodes difficiles.": "Diese Wechselwirkung fördert tiefe Heilung, Widerstandskraft und die Fähigkeit, schwierige Zeiten gemeinsam zu verwandeln.",
    "Cette interaction peut réveiller jalousie, peur de perdre, contrôle ou luttes de pouvoir si les émotions restent cachées.": "Diese Wechselwirkung kann Eifersucht, Verlustangst, Kontrolle oder Machtkämpfe wecken, wenn Gefühle verborgen bleiben.",
    "Cette connexion intensifie fortement le lien et peut provoquer une transformation durable chez les deux partenaires.": "Diese Verbindung intensiviert die Bindung stark und kann bei beiden Partnern dauerhafte Transformation auslösen.",
    "Vous pouvez vous encourager, élargir vos horizons et faire circuler davantage d’espoir dans la relation.": "Sie können einander ermutigen, Ihren Horizont erweitern und mehr Hoffnung in die Beziehung bringen.",
    "Vous pouvez construire des repères solides, traverser les périodes exigeantes et donner une forme durable à vos engagements.": "Sie können solide Grundlagen schaffen, anspruchsvolle Phasen durchstehen und Ihren Verpflichtungen dauerhafte Form geben.",
    "Vous pouvez maintenir la relation vivante, inventer vos propres règles et soutenir l’authenticité de chacun.": "Sie können die Beziehung lebendig halten, eigene Regeln schaffen und die Authentizität beider unterstützen.",
    "Vous pouvez développer une grande empathie, partager un imaginaire riche et vous inspirer mutuellement.": "Sie können große Empathie entwickeln, eine reiche Vorstellungswelt teilen und einander inspirieren.",
    "Vous pouvez transformer les crises en véritables passages de guérison et développer une confiance très profonde.": "Sie können Krisen in echte Heilungsprozesse verwandeln und sehr tiefes Vertrauen entwickeln.",
    "Vos réactions semblables facilitent une compréhension immédiate de cette énergie.": "Ihre ähnlichen Reaktionen erleichtern ein unmittelbares Verständnis dieser Energie.",
    "Vos éléments communs donnent un rythme compatible à cette dynamique.": "Ihre gemeinsamen Elemente geben dieser Dynamik einen kompatiblen Rhythmus.",
    "L’optimisme peut devenir exagération, dépense excessive ou promesse difficile à tenir lorsque l’enthousiasme remplace la préparation.": "Optimismus kann zu Übertreibung, übermäßigen Ausgaben oder schwer einzuhaltenden Versprechen werden, wenn Begeisterung Vorbereitung ersetzt.",
    "Les responsabilités peuvent devenir lourdes si l’un impose les règles, critique l’autre ou porte silencieusement une charge disproportionnée.": "Verantwortung kann schwer werden, wenn eine Person Regeln auferlegt, die andere kritisiert oder still eine unverhältnismäßige Last trägt.",
    "Le besoin de liberté peut provoquer distance ou imprévisibilité si les changements surviennent sans explication ni repère rassurant.": "Das Freiheitsbedürfnis kann Distanz oder Unberechenbarkeit erzeugen, wenn Veränderungen ohne Erklärung oder beruhigende Orientierung erfolgen.",
    "L’idéalisation peut masquer les besoins réels, les désaccords ou les limites personnelles tant que les faits ne sont pas clairement vérifiés.": "Idealisierung kann reale Bedürfnisse, Meinungsverschiedenheiten oder persönliche Grenzen verdecken, solange Fakten nicht klar überprüft werden.",
    "L’intensité peut se transformer en contrôle, jalousie ou rapport de force lorsque la peur de perdre n’est pas nommée avec honnêteté.": "Intensität kann zu Kontrolle, Eifersucht oder Machtkampf werden, wenn Verlustangst nicht ehrlich benannt wird.",
    "Vos rythmes différents demandent une communication encore plus explicite.": "Ihre unterschiedlichen Rhythmen erfordern noch klarere Kommunikation."
  },
  "it": {
    "Grandit par l’action, le courage et les nouveaux départs. L’enthousiasme augmente lorsqu’un défi peut être relevé rapidement.": "Cresce attraverso l'azione, il coraggio e i nuovi inizi. L'entusiasmo aumenta quando una sfida può essere affrontata rapidamente.",
    "Grandit par la stabilité, la patience et la création d’une sécurité concrète. Les plaisirs simples nourrissent la confiance.": "Cresce attraverso stabilità, pazienza e la creazione di una sicurezza concreta. I piaceri semplici alimentano la fiducia.",
    "Grandit par les échanges, les apprentissages et la diversité des expériences. La curiosité ouvre constamment de nouvelles possibilités.": "Cresce attraverso gli scambi, l'apprendimento e la varietà delle esperienze. La curiosità apre continuamente nuove possibilità.",
    "Grandit par les liens affectifs, la famille et le sentiment d’appartenance. La générosité s’exprime à travers la protection.": "Cresce attraverso i legami affettivi, la famiglia e il senso di appartenenza. La generosità si esprime attraverso la protezione.",
    "Grandit par la créativité, la confiance et le rayonnement personnel. Le bonheur augmente lorsqu’il est partagé avec générosité.": "Cresce attraverso creatività, fiducia e luminosità personale. La felicità aumenta quando viene condivisa con generosità.",
    "Grandit par l’utilité, l’amélioration et le développement de compétences concrètes. La confiance se construit dans les petits progrès.": "Cresce attraverso utilità, miglioramento e sviluppo di competenze concrete. La fiducia si costruisce nei piccoli progressi.",
    "Grandit par les alliances, l’harmonie et la coopération. Les opportunités apparaissent souvent grâce aux relations et aux échanges équilibrés.": "Cresce attraverso alleanze, armonia e cooperazione. Le opportunità emergono spesso grazie alle relazioni e agli scambi equilibrati.",
    "Grandit par la profondeur, la transformation et la compréhension des vérités cachées. Les crises peuvent devenir des passages de puissance.": "Cresce attraverso profondità, trasformazione e comprensione delle verità nascoste. Le crisi possono diventare passaggi di potere interiore.",
    "Grandit par l’aventure, la liberté, les voyages et la recherche de sens. L’optimisme est naturel et contagieux.": "Cresce attraverso avventura, libertà, viaggi e ricerca di significato. L'ottimismo è naturale e contagioso.",
    "Grandit par l’ambition, la discipline et les objectifs durables. La réussite prend forme à travers la constance et la responsabilité.": "Cresce attraverso ambizione, disciplina e obiettivi duraturi. Il successo prende forma attraverso costanza e responsabilità.",
    "Grandit par l’innovation, les réseaux et les idées collectives. Les projets originaux stimulent l’espoir et l’ouverture.": "Cresce attraverso innovazione, reti e idee collettive. I progetti originali stimolano speranza e apertura.",
    "Grandit par l’intuition, la compassion et l’imagination. La foi se nourrit de sensibilité, d’art et de connexion spirituelle.": "Cresce attraverso intuizione, compassione e immaginazione. La fede si nutre di sensibilità, arte e connessione spirituale.",
    "Apprend la patience dans l’action et la maîtrise de l’impulsivité. La solidité vient d’un courage discipliné.": "Impara la pazienza nell'azione e il controllo dell'impulsività. La solidità nasce da un coraggio disciplinato.",
    "Construit lentement, protège les acquis et recherche une sécurité durable. Le changement demande du temps et des preuves concrètes.": "Costruisce lentamente, protegge ciò che è stato acquisito e cerca una sicurezza duratura. Il cambiamento richiede tempo e prove concrete.",
    "Structure les idées, les mots et les apprentissages. La maturité passe par une communication plus précise et responsable.": "Struttura idee, parole e apprendimenti. La maturità passa attraverso una comunicazione più precisa e responsabile.",
    "Développe la responsabilité affective et la sécurité intérieure. Les devoirs familiaux peuvent prendre une grande importance.": "Sviluppa responsabilità affettiva e sicurezza interiore. I doveri familiari possono assumere grande importanza.",
    "Apprend à assumer son rayonnement sans dépendre constamment de la reconnaissance. La créativité gagne en profondeur avec le temps.": "Impara ad assumere la propria luminosità senza dipendere costantemente dal riconoscimento. La creatività acquista profondità nel tempo.",
    "Construit par le travail, l’organisation et le sens du détail. Le perfectionnisme doit rester au service de la progression.": "Costruisce attraverso lavoro, organizzazione e attenzione ai dettagli. Il perfezionismo deve rimanere al servizio del progresso.",
    "Prend les engagements relationnels au sérieux et recherche des accords durables. Les limites doivent être justes et clairement partagées.": "Prende seriamente gli impegni relazionali e cerca accordi duraturi. I limiti devono essere giusti e chiaramente condivisi.",
    "Apprend à gérer le contrôle, la confiance et la vulnérabilité. La solidité naît d’une grande honnêteté émotionnelle.": "Impara a gestire controllo, fiducia e vulnerabilità. La solidità nasce da una profonda onestà emotiva.",
    "Structure les croyances, les projets et la quête de liberté. La vision devient crédible lorsqu’elle repose sur une méthode.": "Struttura convinzioni, progetti e ricerca di libertà. La visione diventa credibile quando poggia su un metodo.",
    "Possède un fort sens du devoir, de l’endurance et de la construction. Les objectifs à long terme occupent une place centrale.": "Possiede un forte senso del dovere, resistenza e capacità di costruzione. Gli obiettivi a lungo termine occupano un posto centrale.",
    "Structure l’indépendance, les idées nouvelles et la contribution au collectif. La liberté doit coexister avec la responsabilité.": "Struttura indipendenza, nuove idee e contributo al collettivo. La libertà deve coesistere con la responsabilità.",
    "Apprend à donner une forme concrète aux rêves et à protéger sa sensibilité par des limites saines.": "Impara a dare una forma concreta ai sogni e a proteggere la propria sensibilità attraverso limiti sani.",
    "Recherche une liberté immédiate, audacieuse et active. Les changements sont souvent rapides et initiés sans attendre l’approbation.": "Cerca una libertà immediata, audace e attiva. I cambiamenti sono spesso rapidi e avviati senza attendere approvazione.",
    "Réinvente progressivement la sécurité, les valeurs et le rapport au matériel. Les changements profonds peuvent d’abord rencontrer de la résistance.": "Reinventa progressivamente sicurezza, valori e rapporto con il materiale. I cambiamenti profondi possono incontrare inizialmente resistenza.",
    "Innove par les idées, les technologies et les nouvelles manières de communiquer. Le besoin de stimulation mentale est élevé.": "Innova attraverso idee, tecnologie e nuovi modi di comunicare. Il bisogno di stimolazione mentale è elevato.",
    "Réinvente la famille, le foyer et l’expression émotionnelle. Le sentiment d’appartenance doit laisser de la place à l’individualité.": "Reinventa famiglia, casa ed espressione emotiva. Il senso di appartenenza deve lasciare spazio all'individualità.",
    "Exprime une créativité libre, originale et parfois spectaculaire. Le besoin d’être soi-même refuse les rôles trop rigides.": "Esprime una creatività libera, originale e talvolta spettacolare. Il bisogno di essere se stessi rifiuta ruoli troppo rigidi.",
    "Innove dans le travail, les méthodes et les habitudes quotidiennes. Les solutions originales cherchent une utilité concrète.": "Innova nel lavoro, nei metodi e nelle abitudini quotidiane. Le soluzioni originali cercano un'utilità concreta.",
    "Réinvente les relations, les accords et la manière de vivre à deux. L’égalité et l’espace personnel sont essentiels.": "Reinventa relazioni, accordi e il modo di vivere in coppia. Uguaglianza e spazio personale sono essenziali.",
    "Provoque des transformations soudaines dans l’intimité, le pouvoir et les attachements profonds. L’intensité exige de la liberté intérieure.": "Provoca trasformazioni improvvise nell'intimità, nel potere e nei legami profondi. L'intensità richiede libertà interiore.",
    "Recherche l’aventure, l’indépendance intellectuelle et les horizons nouveaux. Les convictions évoluent à travers l’expérience.": "Cerca avventura, indipendenza intellettuale e nuovi orizzonti. Le convinzioni evolvono attraverso l'esperienza.",
    "Réforme les structures, les ambitions et les modèles d’autorité. Le changement devient durable lorsqu’il est stratégiquement organisé.": "Riforma strutture, ambizioni e modelli di autorità. Il cambiamento diventa duraturo quando è organizzato strategicamente.",
    "Exprime fortement l’originalité, l’indépendance et la vision du futur. Les conventions sont naturellement remises en question.": "Esprime con forza originalità, indipendenza e visione del futuro. Le convenzioni vengono naturalmente messe in discussione.",
    "Renouvelle la spiritualité, l’imaginaire et la sensibilité collective. L’intuition peut surgir de manière soudaine et inspirante.": "Rinnova spiritualità, immaginazione e sensibilità collettiva. L'intuizione può emergere in modo improvviso e ispirante.",
    "Rêve d’action héroïque, de courage et de nouveaux départs. L’élan intuitif doit être vérifié avant de devenir une décision.": "Sogna azioni eroiche, coraggio e nuovi inizi. L'impulso intuitivo deve essere verificato prima di diventare una decisione.",
    "Recherche un idéal de paix, de beauté et de sécurité sensorielle. La douceur et la nature nourrissent profondément l’imaginaire.": "Cerca un ideale di pace, bellezza e sicurezza sensoriale. Dolcezza e natura nutrono profondamente l'immaginazione.",
    "Rêve par les mots, les idées et les multiples possibilités. La pensée imaginative doit éviter la dispersion ou les messages ambigus.": "Sogna attraverso parole, idee e molteplici possibilità. Il pensiero immaginativo deve evitare dispersione o messaggi ambigui.",
    "Possède une grande sensibilité aux ambiances, à la famille et aux mémoires émotionnelles. La compassion est profonde.": "Possiede una grande sensibilità alle atmosfere, alla famiglia e alle memorie emotive. La compassione è profonda.",
    "Rêve d’un amour créatif, lumineux et inspirant. L’expression artistique peut devenir une voie importante de connexion.": "Sogna un amore creativo, luminoso e ispirante. L'espressione artistica può diventare un importante canale di connessione.",
    "Cherche à donner une utilité concrète à la compassion et aux idéaux. Le risque consiste à vouloir sauver ou réparer sans limites.": "Cerca di dare un'utilità concreta alla compassione e agli ideali. Il rischio consiste nel voler salvare o riparare senza limiti.",
    "Idéalise facilement l’amour, la beauté et l’harmonie relationnelle. La clarté des attentes protège contre les désillusions.": "Idealizza facilmente amore, bellezza e armonia relazionale. La chiarezza delle aspettative protegge dalle disillusioni.",
    "Ressent les liens invisibles avec intensité et profondeur. L’intuition est puissante, mais les peurs peuvent parfois colorer les perceptions.": "Percepisce i legami invisibili con intensità e profondità. L'intuizione è potente, ma le paure possono talvolta colorare le percezioni.",
    "Rêve de sens, de voyages et de vérités universelles. La foi et l’imagination ouvrent de vastes horizons.": "Sogna significato, viaggi e verità universali. Fede e immaginazione aprono vasti orizzonti.",
    "Cherche à matérialiser un idéal dans le monde réel. Les rêves ont besoin d’une structure pour ne pas devenir une obligation pesante.": "Cerca di materializzare un ideale nel mondo reale. I sogni hanno bisogno di una struttura per non diventare un obbligo pesante.",
    "Rêve d’un avenir collectif plus libre et plus humain. Les idéaux sociaux ou spirituels peuvent unir fortement les partenaires.": "Sogna un futuro collettivo più libero e umano. Gli ideali sociali o spirituali possono unire fortemente i partner.",
    "Exprime naturellement la compassion, l’intuition et l’imagination. Les limites claires sont indispensables pour préserver l’équilibre.": "Esprime naturalmente compassione, intuizione e immaginazione. Limiti chiari sono indispensabili per preservare l'equilibrio.",
    "Se transforme par l’affirmation de soi, le courage et les confrontations directes. La puissance doit éviter de devenir domination.": "Si trasforma attraverso autoaffermazione, coraggio e confronti diretti. Il potere deve evitare di diventare dominio.",
    "Transforme profondément les valeurs, la sécurité et les attachements matériels. Le lâcher-prise peut demander beaucoup de temps.": "Trasforma profondamente valori, sicurezza e attaccamenti materiali. Lasciare andare può richiedere molto tempo.",
    "Transforme les idées, les mots et les croyances mentales. Les conversations peuvent avoir un pouvoir révélateur considérable.": "Trasforma idee, parole e convinzioni mentali. Le conversazioni possono avere un notevole potere rivelatore.",
    "Transforme les racines familiales, les mémoires et la sécurité émotionnelle. La guérison passe par une grande profondeur affective.": "Trasforma radici familiari, ricordi e sicurezza emotiva. La guarigione passa attraverso una grande profondità affettiva.",
    "Transforme l’identité créative, le besoin de reconnaissance et l’expression du pouvoir personnel. Le cœur apprend à rayonner sans contrôler.": "Trasforma identità creativa, bisogno di riconoscimento ed espressione del potere personale. Il cuore impara a brillare senza controllare.",
    "Transforme les habitudes, le travail et la relation au contrôle quotidien. La guérison vient souvent d’un changement méthodique.": "Trasforma abitudini, lavoro e rapporto con il controllo quotidiano. La guarigione arriva spesso attraverso un cambiamento metodico.",
    "Transforme les relations, les compromis et les rapports de pouvoir dans le couple. L’égalité réelle devient un enjeu central.": "Trasforma relazioni, compromessi e dinamiche di potere nella coppia. La vera uguaglianza diventa una questione centrale.",
    "Vit intensément la transformation, la fusion et la régénération. Les vérités cachées cherchent naturellement à remonter à la surface.": "Vive intensamente trasformazione, fusione e rigenerazione. Le verità nascoste cercano naturalmente di emergere.",
    "Transforme les croyances, les convictions et la recherche de sens. Les expériences extrêmes peuvent modifier profondément la vision du monde.": "Trasforma convinzioni, credenze e ricerca di significato. Le esperienze estreme possono modificare profondamente la visione del mondo.",
    "Transforme l’ambition, l’autorité et les structures durables. La puissance se construit à travers la maîtrise et la responsabilité.": "Trasforma ambizione, autorità e strutture durature. Il potere si costruisce attraverso padronanza e responsabilità.",
    "Transforme les réseaux, les idéaux collectifs et les modèles de liberté. Le pouvoir peut être utilisé pour réinventer l’avenir.": "Trasforma reti, ideali collettivi e modelli di libertà. Il potere può essere usato per reinventare il futuro.",
    "Transforme les blessures invisibles, la compassion et la vie spirituelle. La guérison demande de distinguer l’intuition de la fuite.": "Trasforma ferite invisibili, compassione e vita spirituale. La guarigione richiede di distinguere l'intuizione dalla fuga.",
    "Cette interaction favorise la confiance, l’encouragement mutuel et le sentiment que la relation ouvre de nouvelles possibilités.": "Questa interazione favorisce fiducia, incoraggiamento reciproco e la sensazione che la relazione apra nuove possibilità.",
    "Cette interaction peut amplifier les attentes, les promesses ou les excès. L’enthousiasme gagne à être ramené vers des objectifs réalistes.": "Questa interazione può amplificare aspettative, promesse o eccessi. L'entusiasmo va ricondotto verso obiettivi realistici.",
    "Cette connexion intensifie l’optimisme, la générosité et le désir de grandir ensemble, tout en amplifiant parfois les excès.": "Questa connessione intensifica ottimismo, generosità e desiderio di crescere insieme, amplificando talvolta anche gli eccessi.",
    "Cette interaction soutient la fidélité, la constance et la capacité à assumer ensemble les responsabilités importantes.": "Questa interazione sostiene fedeltà, costanza e capacità di assumere insieme responsabilità importanti.",
    "Cette interaction peut créer un sentiment de jugement, de lourdeur ou de limitation. Les règles doivent être choisies ensemble.": "Questa interazione può creare una sensazione di giudizio, pesantezza o limitazione. Le regole devono essere scelte insieme.",
    "Cette connexion donne au lien un poids important et un potentiel de durée, mais demande patience, respect et maturité.": "Questa connessione dà al legame un peso importante e un potenziale di durata, ma richiede pazienza, rispetto e maturità.",
    "Cette interaction apporte fraîcheur, liberté et stimulation. Chacun peut encourager l’autre à devenir plus authentique.": "Questa interazione porta freschezza, libertà e stimolo. Ciascuno può incoraggiare l'altro a diventare più autentico.",
    "Cette interaction peut créer de l’instabilité, des réactions imprévisibles ou un besoin soudain de distance.": "Questa interazione può creare instabilità, reazioni imprevedibili o un improvviso bisogno di distanza.",
    "Cette connexion rend la relation inhabituelle, électrique et profondément stimulante, avec un fort besoin de liberté.": "Questa connessione rende la relazione insolita, elettrica e profondamente stimolante, con un forte bisogno di libertà.",
    "Cette interaction favorise l’empathie, la douceur, l’inspiration et le sentiment d’une compréhension intuitive.": "Questa interazione favorisce empatia, dolcezza, ispirazione e la sensazione di una comprensione intuitiva.",
    "Cette interaction peut brouiller les intentions, idéaliser la relation ou créer des attentes difficiles à vérifier.": "Questa interazione può confondere le intenzioni, idealizzare la relazione o creare aspettative difficili da verificare.",
    "Cette connexion renforce la sensibilité, le romantisme et l’impression d’un lien subtil, mais exige de la clarté.": "Questa connessione rafforza sensibilità, romanticismo e la sensazione di un legame sottile, ma richiede chiarezza.",
    "Cette interaction favorise la guérison profonde, la résilience et la capacité à transformer ensemble les périodes difficiles.": "Questa interazione favorisce una guarigione profonda, resilienza e capacità di trasformare insieme i periodi difficili.",
    "Cette interaction peut réveiller jalousie, peur de perdre, contrôle ou luttes de pouvoir si les émotions restent cachées.": "Questa interazione può risvegliare gelosia, paura di perdere, controllo o lotte di potere se le emozioni restano nascoste.",
    "Cette connexion intensifie fortement le lien et peut provoquer une transformation durable chez les deux partenaires.": "Questa connessione intensifica fortemente il legame e può provocare una trasformazione duratura in entrambi i partner.",
    "Vous pouvez vous encourager, élargir vos horizons et faire circuler davantage d’espoir dans la relation.": "Potete incoraggiarvi, ampliare i vostri orizzonti e portare più speranza nella relazione.",
    "Vous pouvez construire des repères solides, traverser les périodes exigeantes et donner une forme durable à vos engagements.": "Potete costruire basi solide, attraversare periodi impegnativi e dare una forma duratura ai vostri impegni.",
    "Vous pouvez maintenir la relation vivante, inventer vos propres règles et soutenir l’authenticité de chacun.": "Potete mantenere viva la relazione, inventare le vostre regole e sostenere l'autenticità di ciascuno.",
    "Vous pouvez développer une grande empathie, partager un imaginaire riche et vous inspirer mutuellement.": "Potete sviluppare grande empatia, condividere un immaginario ricco e ispirarvi a vicenda.",
    "Vous pouvez transformer les crises en véritables passages de guérison et développer une confiance très profonde.": "Potete trasformare le crisi in autentici passaggi di guarigione e sviluppare una fiducia molto profonda.",
    "Vos réactions semblables facilitent une compréhension immédiate de cette énergie.": "Le vostre reazioni simili facilitano una comprensione immediata di questa energia.",
    "Vos éléments communs donnent un rythme compatible à cette dynamique.": "I vostri elementi comuni danno a questa dinamica un ritmo compatibile.",
    "L’optimisme peut devenir exagération, dépense excessive ou promesse difficile à tenir lorsque l’enthousiasme remplace la préparation.": "L'ottimismo può diventare esagerazione, spesa eccessiva o promessa difficile da mantenere quando l'entusiasmo sostituisce la preparazione.",
    "Les responsabilités peuvent devenir lourdes si l’un impose les règles, critique l’autre ou porte silencieusement une charge disproportionnée.": "Le responsabilità possono diventare pesanti se una persona impone le regole, critica l'altra o porta in silenzio un carico sproporzionato.",
    "Le besoin de liberté peut provoquer distance ou imprévisibilité si les changements surviennent sans explication ni repère rassurant.": "Il bisogno di libertà può creare distanza o imprevedibilità se i cambiamenti avvengono senza spiegazioni o punti di riferimento rassicuranti.",
    "L’idéalisation peut masquer les besoins réels, les désaccords ou les limites personnelles tant que les faits ne sont pas clairement vérifiés.": "L'idealizzazione può nascondere bisogni reali, disaccordi o limiti personali finché i fatti non vengono verificati chiaramente.",
    "L’intensité peut se transformer en contrôle, jalousie ou rapport de force lorsque la peur de perdre n’est pas nommée avec honnêteté.": "L'intensità può trasformarsi in controllo, gelosia o lotta di potere quando la paura di perdere non viene nominata con onestà.",
    "Vos rythmes différents demandent une communication encore plus explicite.": "I vostri ritmi diversi richiedono una comunicazione ancora più esplicita."
  },
  "pt": {
    "Grandit par l’action, le courage et les nouveaux départs. L’enthousiasme augmente lorsqu’un défi peut être relevé rapidement.": "Cresce através da ação, da coragem e de novos começos. O entusiasmo aumenta quando um desafio pode ser enfrentado rapidamente.",
    "Grandit par la stabilité, la patience et la création d’une sécurité concrète. Les plaisirs simples nourrissent la confiance.": "Cresce através da estabilidade, da paciência e da criação de segurança concreta. Os prazeres simples alimentam a confiança.",
    "Grandit par les échanges, les apprentissages et la diversité des expériences. La curiosité ouvre constamment de nouvelles possibilités.": "Cresce através das trocas, da aprendizagem e da diversidade de experiências. A curiosidade abre constantemente novas possibilidades.",
    "Grandit par les liens affectifs, la famille et le sentiment d’appartenance. La générosité s’exprime à travers la protection.": "Cresce através dos vínculos afetivos, da família e do sentimento de pertença. A generosidade expressa-se através da proteção.",
    "Grandit par la créativité, la confiance et le rayonnement personnel. Le bonheur augmente lorsqu’il est partagé avec générosité.": "Cresce através da criatividade, da confiança e do brilho pessoal. A felicidade aumenta quando é partilhada com generosidade.",
    "Grandit par l’utilité, l’amélioration et le développement de compétences concrètes. La confiance se construit dans les petits progrès.": "Cresce através da utilidade, da melhoria e do desenvolvimento de competências concretas. A confiança constrói-se com pequenos progressos.",
    "Grandit par les alliances, l’harmonie et la coopération. Les opportunités apparaissent souvent grâce aux relations et aux échanges équilibrés.": "Cresce através de alianças, harmonia e cooperação. As oportunidades surgem muitas vezes através das relações e de trocas equilibradas.",
    "Grandit par la profondeur, la transformation et la compréhension des vérités cachées. Les crises peuvent devenir des passages de puissance.": "Cresce através da profundidade, da transformação e da compreensão de verdades ocultas. As crises podem tornar-se passagens de fortalecimento.",
    "Grandit par l’aventure, la liberté, les voyages et la recherche de sens. L’optimisme est naturel et contagieux.": "Cresce através da aventura, da liberdade, das viagens e da procura de sentido. O otimismo é natural e contagiante.",
    "Grandit par l’ambition, la discipline et les objectifs durables. La réussite prend forme à travers la constance et la responsabilité.": "Cresce através da ambição, da disciplina e de objetivos duradouros. O sucesso ganha forma através da constância e da responsabilidade.",
    "Grandit par l’innovation, les réseaux et les idées collectives. Les projets originaux stimulent l’espoir et l’ouverture.": "Cresce através da inovação, das redes e das ideias coletivas. Projetos originais estimulam esperança e abertura.",
    "Grandit par l’intuition, la compassion et l’imagination. La foi se nourrit de sensibilité, d’art et de connexion spirituelle.": "Cresce através da intuição, da compaixão e da imaginação. A fé alimenta-se de sensibilidade, arte e conexão espiritual.",
    "Apprend la patience dans l’action et la maîtrise de l’impulsivité. La solidité vient d’un courage discipliné.": "Aprende a ter paciência na ação e a dominar a impulsividade. A solidez nasce de uma coragem disciplinada.",
    "Construit lentement, protège les acquis et recherche une sécurité durable. Le changement demande du temps et des preuves concrètes.": "Constrói lentamente, protege o que conquistou e procura segurança duradoura. A mudança exige tempo e provas concretas.",
    "Structure les idées, les mots et les apprentissages. La maturité passe par une communication plus précise et responsable.": "Estrutura ideias, palavras e aprendizagens. A maturidade passa por uma comunicação mais precisa e responsável.",
    "Développe la responsabilité affective et la sécurité intérieure. Les devoirs familiaux peuvent prendre une grande importance.": "Desenvolve responsabilidade afetiva e segurança interior. Os deveres familiares podem ganhar grande importância.",
    "Apprend à assumer son rayonnement sans dépendre constamment de la reconnaissance. La créativité gagne en profondeur avec le temps.": "Aprende a assumir o próprio brilho sem depender constantemente de reconhecimento. A criatividade ganha profundidade com o tempo.",
    "Construit par le travail, l’organisation et le sens du détail. Le perfectionnisme doit rester au service de la progression.": "Constrói através do trabalho, da organização e da atenção aos detalhes. O perfeccionismo deve permanecer ao serviço do progresso.",
    "Prend les engagements relationnels au sérieux et recherche des accords durables. Les limites doivent être justes et clairement partagées.": "Leva os compromissos relacionais a sério e procura acordos duradouros. Os limites devem ser justos e claramente partilhados.",
    "Apprend à gérer le contrôle, la confiance et la vulnérabilité. La solidité naît d’une grande honnêteté émotionnelle.": "Aprende a gerir controlo, confiança e vulnerabilidade. A solidez nasce de uma grande honestidade emocional.",
    "Structure les croyances, les projets et la quête de liberté. La vision devient crédible lorsqu’elle repose sur une méthode.": "Estrutura crenças, projetos e a procura de liberdade. A visão torna-se credível quando assenta num método.",
    "Possède un fort sens du devoir, de l’endurance et de la construction. Les objectifs à long terme occupent une place centrale.": "Possui um forte sentido do dever, resistência e capacidade de construção. Os objetivos a longo prazo ocupam um lugar central.",
    "Structure l’indépendance, les idées nouvelles et la contribution au collectif. La liberté doit coexister avec la responsabilité.": "Estrutura independência, novas ideias e contribuição para o coletivo. A liberdade deve coexistir com a responsabilidade.",
    "Apprend à donner une forme concrète aux rêves et à protéger sa sensibilité par des limites saines.": "Aprende a dar forma concreta aos sonhos e a proteger a sensibilidade através de limites saudáveis.",
    "Recherche une liberté immédiate, audacieuse et active. Les changements sont souvent rapides et initiés sans attendre l’approbation.": "Procura liberdade imediata, ousada e ativa. As mudanças são muitas vezes rápidas e iniciadas sem esperar aprovação.",
    "Réinvente progressivement la sécurité, les valeurs et le rapport au matériel. Les changements profonds peuvent d’abord rencontrer de la résistance.": "Reinventa progressivamente segurança, valores e a relação com o material. Mudanças profundas podem encontrar resistência no início.",
    "Innove par les idées, les technologies et les nouvelles manières de communiquer. Le besoin de stimulation mentale est élevé.": "Inova através de ideias, tecnologias e novas formas de comunicar. A necessidade de estimulação mental é elevada.",
    "Réinvente la famille, le foyer et l’expression émotionnelle. Le sentiment d’appartenance doit laisser de la place à l’individualité.": "Reinventa família, lar e expressão emocional. O sentimento de pertença deve deixar espaço para a individualidade.",
    "Exprime une créativité libre, originale et parfois spectaculaire. Le besoin d’être soi-même refuse les rôles trop rigides.": "Expressa uma criatividade livre, original e por vezes espetacular. A necessidade de ser quem é rejeita papéis demasiado rígidos.",
    "Innove dans le travail, les méthodes et les habitudes quotidiennes. Les solutions originales cherchent une utilité concrète.": "Inova no trabalho, nos métodos e nos hábitos quotidianos. Soluções originais procuram utilidade concreta.",
    "Réinvente les relations, les accords et la manière de vivre à deux. L’égalité et l’espace personnel sont essentiels.": "Reinventa relações, acordos e a forma de viver a dois. Igualdade e espaço pessoal são essenciais.",
    "Provoque des transformations soudaines dans l’intimité, le pouvoir et les attachements profonds. L’intensité exige de la liberté intérieure.": "Provoca transformações repentinas na intimidade, no poder e nos vínculos profundos. A intensidade exige liberdade interior.",
    "Recherche l’aventure, l’indépendance intellectuelle et les horizons nouveaux. Les convictions évoluent à travers l’expérience.": "Procura aventura, independência intelectual e novos horizontes. As convicções evoluem através da experiência.",
    "Réforme les structures, les ambitions et les modèles d’autorité. Le changement devient durable lorsqu’il est stratégiquement organisé.": "Reforma estruturas, ambições e modelos de autoridade. A mudança torna-se duradoura quando é organizada estrategicamente.",
    "Exprime fortement l’originalité, l’indépendance et la vision du futur. Les conventions sont naturellement remises en question.": "Expressa fortemente originalidade, independência e visão de futuro. As convenções são naturalmente questionadas.",
    "Renouvelle la spiritualité, l’imaginaire et la sensibilité collective. L’intuition peut surgir de manière soudaine et inspirante.": "Renova espiritualidade, imaginação e sensibilidade coletiva. A intuição pode surgir de forma repentina e inspiradora.",
    "Rêve d’action héroïque, de courage et de nouveaux départs. L’élan intuitif doit être vérifié avant de devenir une décision.": "Sonha com ações heroicas, coragem e novos começos. O impulso intuitivo deve ser verificado antes de se tornar uma decisão.",
    "Recherche un idéal de paix, de beauté et de sécurité sensorielle. La douceur et la nature nourrissent profondément l’imaginaire.": "Procura um ideal de paz, beleza e segurança sensorial. A suavidade e a natureza alimentam profundamente a imaginação.",
    "Rêve par les mots, les idées et les multiples possibilités. La pensée imaginative doit éviter la dispersion ou les messages ambigus.": "Sonha através de palavras, ideias e múltiplas possibilidades. O pensamento imaginativo deve evitar dispersão ou mensagens ambíguas.",
    "Possède une grande sensibilité aux ambiances, à la famille et aux mémoires émotionnelles. La compassion est profonde.": "Possui grande sensibilidade aos ambientes, à família e às memórias emocionais. A compaixão é profunda.",
    "Rêve d’un amour créatif, lumineux et inspirant. L’expression artistique peut devenir une voie importante de connexion.": "Sonha com um amor criativo, luminoso e inspirador. A expressão artística pode tornar-se uma importante via de conexão.",
    "Cherche à donner une utilité concrète à la compassion et aux idéaux. Le risque consiste à vouloir sauver ou réparer sans limites.": "Procura dar utilidade concreta à compaixão e aos ideais. O risco consiste em querer salvar ou reparar sem limites.",
    "Idéalise facilement l’amour, la beauté et l’harmonie relationnelle. La clarté des attentes protège contre les désillusions.": "Idealiza facilmente o amor, a beleza e a harmonia relacional. A clareza das expectativas protege contra desilusões.",
    "Ressent les liens invisibles avec intensité et profondeur. L’intuition est puissante, mais les peurs peuvent parfois colorer les perceptions.": "Sente os vínculos invisíveis com intensidade e profundidade. A intuição é poderosa, mas os medos podem por vezes colorir as perceções.",
    "Rêve de sens, de voyages et de vérités universelles. La foi et l’imagination ouvrent de vastes horizons.": "Sonha com sentido, viagens e verdades universais. A fé e a imaginação abrem vastos horizontes.",
    "Cherche à matérialiser un idéal dans le monde réel. Les rêves ont besoin d’une structure pour ne pas devenir une obligation pesante.": "Procura materializar um ideal no mundo real. Os sonhos precisam de estrutura para não se tornarem uma obrigação pesada.",
    "Rêve d’un avenir collectif plus libre et plus humain. Les idéaux sociaux ou spirituels peuvent unir fortement les partenaires.": "Sonha com um futuro coletivo mais livre e humano. Ideais sociais ou espirituais podem unir fortemente os parceiros.",
    "Exprime naturellement la compassion, l’intuition et l’imagination. Les limites claires sont indispensables pour préserver l’équilibre.": "Expressa naturalmente compaixão, intuição e imaginação. Limites claros são indispensáveis para preservar o equilíbrio.",
    "Se transforme par l’affirmation de soi, le courage et les confrontations directes. La puissance doit éviter de devenir domination.": "Transforma-se através da afirmação pessoal, da coragem e de confrontos diretos. O poder deve evitar tornar-se dominação.",
    "Transforme profondément les valeurs, la sécurité et les attachements matériels. Le lâcher-prise peut demander beaucoup de temps.": "Transforma profundamente valores, segurança e apegos materiais. Deixar ir pode exigir muito tempo.",
    "Transforme les idées, les mots et les croyances mentales. Les conversations peuvent avoir un pouvoir révélateur considérable.": "Transforma ideias, palavras e crenças mentais. As conversas podem ter um considerável poder revelador.",
    "Transforme les racines familiales, les mémoires et la sécurité émotionnelle. La guérison passe par une grande profondeur affective.": "Transforma raízes familiares, memórias e segurança emocional. A cura passa por uma grande profundidade afetiva.",
    "Transforme l’identité créative, le besoin de reconnaissance et l’expression du pouvoir personnel. Le cœur apprend à rayonner sans contrôler.": "Transforma identidade criativa, necessidade de reconhecimento e expressão do poder pessoal. O coração aprende a brilhar sem controlar.",
    "Transforme les habitudes, le travail et la relation au contrôle quotidien. La guérison vient souvent d’un changement méthodique.": "Transforma hábitos, trabalho e relação com o controlo quotidiano. A cura surge muitas vezes através de uma mudança metódica.",
    "Transforme les relations, les compromis et les rapports de pouvoir dans le couple. L’égalité réelle devient un enjeu central.": "Transforma relações, compromissos e dinâmicas de poder no casal. A verdadeira igualdade torna-se uma questão central.",
    "Vit intensément la transformation, la fusion et la régénération. Les vérités cachées cherchent naturellement à remonter à la surface.": "Vive intensamente transformação, fusão e regeneração. Verdades ocultas procuram naturalmente vir à superfície.",
    "Transforme les croyances, les convictions et la recherche de sens. Les expériences extrêmes peuvent modifier profondément la vision du monde.": "Transforma crenças, convicções e procura de sentido. Experiências extremas podem modificar profundamente a visão do mundo.",
    "Transforme l’ambition, l’autorité et les structures durables. La puissance se construit à travers la maîtrise et la responsabilité.": "Transforma ambição, autoridade e estruturas duradouras. O poder constrói-se através do domínio e da responsabilidade.",
    "Transforme les réseaux, les idéaux collectifs et les modèles de liberté. Le pouvoir peut être utilisé pour réinventer l’avenir.": "Transforma redes, ideais coletivos e modelos de liberdade. O poder pode ser usado para reinventar o futuro.",
    "Transforme les blessures invisibles, la compassion et la vie spirituelle. La guérison demande de distinguer l’intuition de la fuite.": "Transforma feridas invisíveis, compaixão e vida espiritual. A cura exige distinguir intuição de fuga.",
    "Cette interaction favorise la confiance, l’encouragement mutuel et le sentiment que la relation ouvre de nouvelles possibilités.": "Esta interação favorece confiança, encorajamento mútuo e a sensação de que a relação abre novas possibilidades.",
    "Cette interaction peut amplifier les attentes, les promesses ou les excès. L’enthousiasme gagne à être ramené vers des objectifs réalistes.": "Esta interação pode amplificar expectativas, promessas ou excessos. O entusiasmo deve ser orientado para objetivos realistas.",
    "Cette connexion intensifie l’optimisme, la générosité et le désir de grandir ensemble, tout en amplifiant parfois les excès.": "Esta conexão intensifica otimismo, generosidade e desejo de crescer juntos, embora por vezes também amplifique excessos.",
    "Cette interaction soutient la fidélité, la constance et la capacité à assumer ensemble les responsabilités importantes.": "Esta interação apoia fidelidade, constância e capacidade de assumir em conjunto responsabilidades importantes.",
    "Cette interaction peut créer un sentiment de jugement, de lourdeur ou de limitation. Les règles doivent être choisies ensemble.": "Esta interação pode criar uma sensação de julgamento, peso ou limitação. As regras devem ser escolhidas em conjunto.",
    "Cette connexion donne au lien un poids important et un potentiel de durée, mais demande patience, respect et maturité.": "Esta conexão dá ao vínculo um peso importante e potencial de duração, mas exige paciência, respeito e maturidade.",
    "Cette interaction apporte fraîcheur, liberté et stimulation. Chacun peut encourager l’autre à devenir plus authentique.": "Esta interação traz frescura, liberdade e estímulo. Cada pessoa pode encorajar a outra a tornar-se mais autêntica.",
    "Cette interaction peut créer de l’instabilité, des réactions imprévisibles ou un besoin soudain de distance.": "Esta interação pode criar instabilidade, reações imprevisíveis ou uma necessidade repentina de distância.",
    "Cette connexion rend la relation inhabituelle, électrique et profondément stimulante, avec un fort besoin de liberté.": "Esta conexão torna a relação invulgar, elétrica e profundamente estimulante, com uma forte necessidade de liberdade.",
    "Cette interaction favorise l’empathie, la douceur, l’inspiration et le sentiment d’une compréhension intuitive.": "Esta interação favorece empatia, ternura, inspiração e a sensação de compreensão intuitiva.",
    "Cette interaction peut brouiller les intentions, idéaliser la relation ou créer des attentes difficiles à vérifier.": "Esta interação pode confundir intenções, idealizar a relação ou criar expectativas difíceis de verificar.",
    "Cette connexion renforce la sensibilité, le romantisme et l’impression d’un lien subtil, mais exige de la clarté.": "Esta conexão reforça sensibilidade, romantismo e a impressão de um vínculo subtil, mas exige clareza.",
    "Cette interaction favorise la guérison profonde, la résilience et la capacité à transformer ensemble les périodes difficiles.": "Esta interação favorece cura profunda, resiliência e capacidade de transformar em conjunto períodos difíceis.",
    "Cette interaction peut réveiller jalousie, peur de perdre, contrôle ou luttes de pouvoir si les émotions restent cachées.": "Esta interação pode despertar ciúme, medo de perder, controlo ou lutas de poder se as emoções permanecerem escondidas.",
    "Cette connexion intensifie fortement le lien et peut provoquer une transformation durable chez les deux partenaires.": "Esta conexão intensifica fortemente o vínculo e pode provocar uma transformação duradoura em ambos os parceiros.",
    "Vous pouvez vous encourager, élargir vos horizons et faire circuler davantage d’espoir dans la relation.": "Podem encorajar-se mutuamente, ampliar os seus horizontes e trazer mais esperança à relação.",
    "Vous pouvez construire des repères solides, traverser les périodes exigeantes et donner une forme durable à vos engagements.": "Podem construir bases sólidas, atravessar períodos exigentes e dar uma forma duradoura aos seus compromissos.",
    "Vous pouvez maintenir la relation vivante, inventer vos propres règles et soutenir l’authenticité de chacun.": "Podem manter a relação viva, criar as próprias regras e apoiar a autenticidade de cada pessoa.",
    "Vous pouvez développer une grande empathie, partager un imaginaire riche et vous inspirer mutuellement.": "Podem desenvolver grande empatia, partilhar um imaginário rico e inspirar-se mutuamente.",
    "Vous pouvez transformer les crises en véritables passages de guérison et développer une confiance très profonde.": "Podem transformar crises em verdadeiros processos de cura e desenvolver uma confiança muito profunda.",
    "Vos réactions semblables facilitent une compréhension immédiate de cette énergie.": "As suas reações semelhantes facilitam uma compreensão imediata desta energia.",
    "Vos éléments communs donnent un rythme compatible à cette dynamique.": "Os seus elementos comuns dão a esta dinâmica um ritmo compatível.",
    "L’optimisme peut devenir exagération, dépense excessive ou promesse difficile à tenir lorsque l’enthousiasme remplace la préparation.": "O otimismo pode tornar-se exagero, despesa excessiva ou promessa difícil de cumprir quando o entusiasmo substitui a preparação.",
    "Les responsabilités peuvent devenir lourdes si l’un impose les règles, critique l’autre ou porte silencieusement une charge disproportionnée.": "As responsabilidades podem tornar-se pesadas se uma pessoa impõe regras, critica a outra ou carrega silenciosamente uma parte desproporcionada.",
    "Le besoin de liberté peut provoquer distance ou imprévisibilité si les changements surviennent sans explication ni repère rassurant.": "A necessidade de liberdade pode criar distância ou imprevisibilidade se as mudanças ocorrerem sem explicação ou referências tranquilizadoras.",
    "L’idéalisation peut masquer les besoins réels, les désaccords ou les limites personnelles tant que les faits ne sont pas clairement vérifiés.": "A idealização pode esconder necessidades reais, desacordos ou limites pessoais enquanto os factos não forem claramente verificados.",
    "L’intensité peut se transformer en contrôle, jalousie ou rapport de force lorsque la peur de perdre n’est pas nommée avec honnêteté.": "A intensidade pode transformar-se em controlo, ciúme ou luta de poder quando o medo de perder não é nomeado com honestidade.",
    "Vos rythmes différents demandent une communication encore plus explicite.": "Os seus ritmos diferentes exigem uma comunicação ainda mais explícita."
  }
};

const PLANETS_SHARED_TEMPLATES: Record<NonFrenchLocale, Record<string, string>> = {
  "en": {
    "sameSign": "Both {planet} placements in {sign1} express this energy in a very similar way. This creates immediate recognition, but the relationship benefits when each person keeps enough room for an individual expression.",
    "sameElement": "Your {planet} placements in {sign1} and {sign2} share the element {element1}. This common foundation gives this part of the relationship a compatible rhythm and makes mutual understanding easier.",
    "complementary": "Your {planet} placements in {sign1} and {sign2} combine {element1} and {element2}. These different but complementary energies can enrich the relationship when each person respects the other's natural rhythm.",
    "different": "Your {planet} placements in {sign1} and {sign2} operate through different elements, {element1} and {element2}. Their priorities may differ, so this area benefits from clear communication and deliberate adjustment."
  },
  "es": {
    "sameSign": "Sus dos posiciones de {planet} en {sign1} expresan esta energía de una manera muy similar. Esto crea un reconocimiento inmediato, pero la relación se beneficia cuando cada persona conserva espacio para una expresión individual.",
    "sameElement": "Sus posiciones de {planet} en {sign1} y {sign2} comparten el elemento {element1}. Esta base común da a esta parte de la relación un ritmo compatible y facilita la comprensión mutua.",
    "complementary": "Sus posiciones de {planet} en {sign1} y {sign2} combinan {element1} y {element2}. Estas energías diferentes pero complementarias pueden enriquecer la relación cuando cada persona respeta el ritmo natural de la otra.",
    "different": "Sus posiciones de {planet} en {sign1} y {sign2} funcionan a través de elementos diferentes, {element1} y {element2}. Sus prioridades pueden diferir, por lo que esta área se beneficia de una comunicación clara y ajustes conscientes."
  },
  "de": {
    "sameSign": "Ihre beiden {planet}-Positionen in {sign1} drücken diese Energie sehr ähnlich aus. Das schafft unmittelbares Wiedererkennen, doch die Beziehung profitiert davon, wenn beide genügend Raum für individuellen Ausdruck behalten.",
    "sameElement": "Ihre {planet}-Positionen in {sign1} und {sign2} teilen das Element {element1}. Diese gemeinsame Grundlage gibt diesem Beziehungsbereich einen kompatiblen Rhythmus und erleichtert gegenseitiges Verständnis.",
    "complementary": "Ihre {planet}-Positionen in {sign1} und {sign2} verbinden {element1} und {element2}. Diese unterschiedlichen, aber ergänzenden Energien können die Beziehung bereichern, wenn beide den natürlichen Rhythmus des anderen respektieren.",
    "different": "Ihre {planet}-Positionen in {sign1} und {sign2} wirken durch unterschiedliche Elemente, {element1} und {element2}. Die Prioritäten können verschieden sein, daher helfen in diesem Bereich klare Kommunikation und bewusste Anpassung."
  },
  "it": {
    "sameSign": "Le vostre due posizioni di {planet} in {sign1} esprimono questa energia in modo molto simile. Ciò crea un riconoscimento immediato, ma la relazione beneficia quando ciascuno conserva spazio per un'espressione individuale.",
    "sameElement": "Le vostre posizioni di {planet} in {sign1} e {sign2} condividono l'elemento {element1}. Questa base comune dà a quest'area della relazione un ritmo compatibile e facilita la comprensione reciproca.",
    "complementary": "Le vostre posizioni di {planet} in {sign1} e {sign2} combinano {element1} e {element2}. Queste energie diverse ma complementari possono arricchire la relazione quando ciascuno rispetta il ritmo naturale dell'altro.",
    "different": "Le vostre posizioni di {planet} in {sign1} e {sign2} funzionano attraverso elementi diversi, {element1} e {element2}. Le priorità possono differire, quindi quest'area beneficia di una comunicazione chiara e di adattamenti consapevoli."
  },
  "pt": {
    "sameSign": "As suas duas posições de {planet} em {sign1} expressam esta energia de forma muito semelhante. Isto cria reconhecimento imediato, mas a relação beneficia quando cada pessoa mantém espaço para uma expressão individual.",
    "sameElement": "As suas posições de {planet} em {sign1} e {sign2} partilham o elemento {element1}. Esta base comum dá a esta área da relação um ritmo compatível e facilita a compreensão mútua.",
    "complementary": "As suas posições de {planet} em {sign1} e {sign2} combinam {element1} e {element2}. Estas energias diferentes, mas complementares, podem enriquecer a relação quando cada pessoa respeita o ritmo natural da outra.",
    "different": "As suas posições de {planet} em {sign1} e {sign2} funcionam através de elementos diferentes, {element1} e {element2}. As prioridades podem divergir, por isso esta área beneficia de comunicação clara e ajustes conscientes."
  }
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

  for (
    const replacement
    of sorted
  ) {
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

/*
 * Traduit les chaînes visibles et les
 * valeurs de configuration, mais conserve
 * les valeurs techniques PlanetName.
 */
function localizeSafeLiterals(
  source: string,
  translations: Record<
    string,
    string
  >,
): string {
  const sourceFile =
    ts.createSourceFile(
      "CompatibilityPlanets.tsx",
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
        translated &&
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

    if (
      ts.isStringLiteral(node)
    ) {
      /*
       * Ne jamais traduire les valeurs
       * techniques des propriétés :
       *
       * planet
       * type
       * body
       */
      if (
        ts.isPropertyAssignment(
          node.parent,
        )
      ) {
        const propertyName =
          node.parent.name.getText(
            sourceFile,
          );

        if (
          propertyName === "planet" ||
          propertyName === "type" ||
          propertyName === "body"
        ) {
          ts.forEachChild(
            node,
            visit,
          );

          return;
        }
      }

      /*
       * Ne jamais modifier les chaînes
       * servant aux comparaisons internes.
       */
      const technicalValues = new Set([
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
        "Pluto",

        "jupiter",
        "saturn",
        "uranus",
        "neptune",
        "pluto",

        "trine",
        "sextile",
        "square",
        "opposition",
        "quincunx",
        "conjunction",

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
      ]);

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

      const original =
        normalizeVisibleText(
          node.text,
        );

      const translated =
        translations[original];

      if (
        translated &&
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
  data: LocaleData,
  locale: NonFrenchLocale,
): string {
  return `
const __PLANETS_TEXT =
  ${JSON.stringify(
    data.text,
    null,
    2,
  )} as Record<string, string>;

const __PLANETS_SIGNS =
  ${JSON.stringify(
    data.signs,
    null,
    2,
  )} as Record<string, string>;

const __PLANETS_PLANETS =
  ${JSON.stringify(
    data.planets,
    null,
    2,
  )} as Record<string, string>;

const __PLANETS_ASPECTS =
  ${JSON.stringify(
    data.aspects,
    null,
    2,
  )} as Record<string, string>;

const __PLANETS_ELEMENTS =
  ${JSON.stringify(
    data.elements,
    null,
    2,
  )} as Record<string, string>;

const __PLANETS_PLANET_IN =
  ${JSON.stringify(
    data.planetIn,
    null,
    2,
  )} as Record<string, string>;

const __PLANETS_ORB_WORD =
  ${JSON.stringify(
    data.orbWord,
  )};

const __PLANETS_SHARED_TEMPLATES =
  ${JSON.stringify(
    PLANETS_SHARED_TEMPLATES[
      locale
    ],
    null,
    2,
  )} as Record<string, string>;

const __PLANETS_DYNAMIC_TEXT =
  ${JSON.stringify(
    PLANETS_DYNAMIC_TEXT[
      locale
    ],
    null,
    2,
  )} as Record<string, string>;

function localizePlanetsText(
  value: string,
): string {
  const exact =
    __PLANETS_TEXT[value] ??
    __PLANETS_DYNAMIC_TEXT[value];

  if (exact) {
    return exact;
  }

  /*
   * Certaines fonctions du TSX assemblent
   * plusieurs phrases françaises.
   * On traduit alors les segments connus
   * sans toucher à la logique.
   */
  let output = value;

  const entries = [
    ...Object.entries(
      __PLANETS_TEXT,
    ),
    ...Object.entries(
      __PLANETS_DYNAMIC_TEXT,
    ),
  ].sort(
    (a, b) =>
      b[0].length -
      a[0].length,
  );

  for (
    const [from, to]
    of entries
  ) {
    if (
      from &&
      output.includes(from)
    ) {
      output =
        output
          .split(from)
          .join(to);
    }
  }

  return output;
}

function localizePlanetsSign(
  value: string,
): string {
  return (
    __PLANETS_SIGNS[value] ??
    value
  );
}

function localizePlanetsPlanet(
  value: string,
): string {
  return (
    __PLANETS_PLANETS[value] ??
    value
  );
}

function localizePlanetsAspect(
  value: string,
): string {
  return (
    __PLANETS_ASPECTS[value] ??
    value
  );
}

function localizePlanetsElement(
  value: string,
): string {
  return (
    __PLANETS_ELEMENTS[value] ??
    value
  );
}

function normalizePlanetsKey(
  value: string,
): string {
  return value
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      "",
    )
    .trim()
    .toLowerCase();
}

function arePlanetsElementsComplementary(
  element1: string,
  element2: string,
): boolean {
  const pair = [
    normalizePlanetsKey(
      element1,
    ),
    normalizePlanetsKey(
      element2,
    ),
  ]
    .sort()
    .join("-");

  return (
    pair === "air-feu" ||
    pair === "eau-terre"
  );
}

function fillPlanetsTemplate(
  template: string,
  values: Record<
    string,
    string
  >,
): string {
  let output = template;

  for (
    const [key, value]
    of Object.entries(values)
  ) {
    output =
      output
        .split(
          \`{\${key}}\`,
        )
        .join(value);
  }

  return output;
}

function getLocalizedPlanetSharedDynamic({
  body,
  sign1,
  sign2,
  element1,
  element2,
}: {
  body: CompatibilityTextBody;
  sign1: string;
  sign2: string;
  element1: string;
  element2: string;
  seed?: string;
}): string {
  const sameSign =
    normalizePlanetsKey(
      sign1,
    ) ===
    normalizePlanetsKey(
      sign2,
    );

  const sameElement =
    normalizePlanetsKey(
      element1,
    ) ===
    normalizePlanetsKey(
      element2,
    );

  const category =
    sameSign
      ? "sameSign"
      : sameElement
        ? "sameElement"
        : arePlanetsElementsComplementary(
            element1,
            element2,
          )
          ? "complementary"
          : "different";

  const template =
    __PLANETS_SHARED_TEMPLATES[
      category
    ] ?? "";

  const frenchPlanet =
    body === "saturn"
      ? "Saturne"
      : body === "pluto"
        ? "Pluton"
        : body.charAt(0).toUpperCase() +
          body.slice(1);

  return fillPlanetsTemplate(
    template,
    {
      planet:
        localizePlanetsPlanet(
          frenchPlanet,
        ),

      sign1:
        localizePlanetsSign(
          sign1,
        ),

      sign2:
        localizePlanetsSign(
          sign2,
        ),

      element1:
        localizePlanetsElement(
          element1,
        ),

      element2:
        localizePlanetsElement(
          element2,
        ),
    },
  );
}

function localizePlanetPlacement(
  frenchName: string,
  sign: string,
): string {
  const prefix =
    __PLANETS_PLANET_IN[
      frenchName
    ] ??
    frenchName;

  return \`\${prefix} \${localizePlanetsSign(
    sign,
  )}\`;
}
`;
}

function injectHelpers(
  source: string,
  data: LocaleData,
  locale: NonFrenchLocale,
): string {
  const marker =
    "function getPersonName(";

  if (
    !source.includes(
      marker,
    )
  ) {
    return source;
  }

  return source.replace(
    marker,
    `${buildHelpers(
      data,
      locale,
    )}\n${marker}`,
  );
}

function replaceDynamicDisplay(
  source: string,
): string {
  let output = source;

  /*
   * Affichage planète + signe.
   */
  output =
    output.replace(
      /\{config\.frenchName\} en \{sign1\}/g,
      "{localizePlanetPlacement(config.frenchName, sign1)}",
    );

  output =
    output.replace(
      /\{config\.frenchName\} en \{sign2\}/g,
      "{localizePlanetPlacement(config.frenchName, sign2)}",
    );

  /*
   * Carte personnelle.
   */
  output =
    output.replace(
      /\{frenchName\} en \{sign\}\.\{" "\}/g,
      "{localizePlanetPlacement(frenchName, sign)}.{\" \"}",
    );

  /*
   * Élément visible.
   */
  output =
    output.replace(
      /Élément \{getElement\(sign1\)\}/g,
      "{localizePlanetsText(\"Élément\")} {localizePlanetsElement(getElement(sign1))}",
    );

  output =
    output.replace(
      /Élément \{getElement\(sign2\)\}/g,
      "{localizePlanetsText(\"Élément\")} {localizePlanetsElement(getElement(sign2))}",
    );

  /*
   * Dynamique commune.
   * Le sélecteur original renvoie du français,
   * donc les copies non françaises utilisent
   * directement le générateur localisé.
   */
  output =
    output.replace(
      /\{getCompatibilityPlanetText\(\{[\s\S]*?body:\s*getPlanetTextBody\(\s*config\.planet,\s*\),[\s\S]*?sign1,[\s\S]*?sign2,[\s\S]*?element1:\s*getElement\(sign1\),[\s\S]*?element2:\s*getElement\(sign2\),[\s\S]*?seed:\s*`\$\{person1Name\}-\$\{person2Name\}`,[\s\S]*?\}\)\}/g,
      "{getLocalizedPlanetSharedDynamic({ body: getPlanetTextBody(config.planet), sign1, sign2, element1: getElement(sign1), element2: getElement(sign2), seed: `${person1Name}-${person2Name}` })}",
    );

  /*
   * Textes personnels générés.
   */
  output =
    output.replace(
      /\{getPlanetStyle\(\s*planet,\s*sign,\s*\)\}/g,
      "{localizePlanetsText(getPlanetStyle(planet, sign))}",
    );

  /*
   * Interprétation des aspects.
   */
  output =
    output.replace(
      /\{getAspectInterpretation\(\s*planet,\s*aspect,\s*\)\}/g,
      "{localizePlanetsText(getAspectInterpretation(planet, aspect))}",
    );

  /*
   * Nature de l'aspect.
   */
  output =
    output.replace(
      /\{getAspectNature\(aspect\.type\)\}/g,
      "{localizePlanetsText(getAspectNature(aspect.type))}",
    );

  /*
   * Forces.
   */
  output =
    output.replace(
      /\{getStrengthText\(\s*config\.planet,\s*sign1,\s*sign2,\s*\)\}/g,
      "{localizePlanetsText(getStrengthText(config.planet, sign1, sign2))}",
    );

  /*
   * Défis.
   */
  output =
    output.replace(
      /\{getChallengeText\(\s*config\.planet,\s*sign1,\s*sign2,\s*\)\}/g,
      "{localizePlanetsText(getChallengeText(config.planet, sign1, sign2))}",
    );

  /*
   * Planètes des aspects.
   */
  output =
    output.replace(
      /\{translateCompatibilityPlanet\(\s*aspect\.person1Planet,\s*\)\}/g,
      "{localizePlanetsPlanet(translateCompatibilityPlanet(aspect.person1Planet))}",
    );

  output =
    output.replace(
      /\{translateCompatibilityPlanet\(\s*aspect\.person2Planet,\s*\)\}/g,
      "{localizePlanetsPlanet(translateCompatibilityPlanet(aspect.person2Planet))}",
    );

  /*
   * Type d'aspect.
   */
  output =
    output.replace(
      /\{translateCompatibilityAspect\(\s*aspect\.type,\s*\)\}/g,
      "{localizePlanetsAspect(translateCompatibilityAspect(aspect.type))}",
    );

  /*
   * Orbe.
   */
  output =
    output.replace(
      /\{" • orbe "\}/g,
      `{" • "}{__PLANETS_ORB_WORD}{" "}`,
    );

  return output;
}

export function localizeCompatibilityPlanets(
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
    localizeSafeLiterals(
      source,
      data.text,
    );

  localized =
    injectHelpers(
      localized,
      data,
      locale as NonFrenchLocale,
    );

  localized =
    replaceDynamicDisplay(
      localized,
    );

  return localized;
}
