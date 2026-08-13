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

function localizePlanetsText(
  value: string,
): string {
  return (
    __PLANETS_TEXT[value] ??
    value
  );
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
    );

  localized =
    replaceDynamicDisplay(
      localized,
    );

  return localized;
}
