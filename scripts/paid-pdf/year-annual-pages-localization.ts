import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap = Record<string, string>;

/* =========================================================
   HELPERS
========================================================= */

function applyTranslations(
  source: string,
  translations: TranslationMap,
): string {
  let output = source;

  const entries = Object.entries(
    translations,
  ).sort(
    ([first], [second]) =>
      second.length - first.length,
  );

  for (const [from, to] of entries) {
    output = output
      .split(from)
      .join(to);
  }

  return output;
}

/**
 * Traduit seulement les valeurs écrites comme chaînes TS :
 * "profondeur" -> "depth"
 *
 * Cela évite de modifier accidentellement des noms de fonctions,
 * variables ou propriétés du code.
 */
function applyQuotedTranslations(
  source: string,
  translations: TranslationMap,
): string {
  let output = source;

  const entries = Object.entries(
    translations,
  ).sort(
    ([first], [second]) =>
      second.length - first.length,
  );

  for (const [from, to] of entries) {
    output = output
      .split(`"${from}"`)
      .join(`"${to}"`);
  }

  return output;
}

/**
 * Les helpers du fichier français ajoutent le/la/du/de la/etc.
 * Une fois le texte traduit, ces articles français ne doivent plus
 * être injectés dans les phrases dynamiques.
 *
 * Pour les versions étrangères, ils deviennent donc neutres.
 */
function neutralizeFrenchGrammarHelpers(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /function withDefiniteArticle\([\s\S]*?\n\}/,
    `function withDefiniteArticle(
  value: string,
): string {
  return value;
}`,
  );

  output = output.replace(
    /function withDeArticle\([\s\S]*?\n\}/,
    `function withDeArticle(
  value: string,
): string {
  return value;
}`,
  );

  output = output.replace(
    /function withAArticle\([\s\S]*?\n\}/,
    `function withAArticle(
  value: string,
): string {
  return value;
}`,
  );

  output = output.replace(
    /function withDe\([\s\S]*?\n\}/,
    `function withDe(
  value: string,
): string {
  return value;
}`,
  );

  output = output.replace(
    /function withDePlanet\([\s\S]*?\n\}/,
    `function withDePlanet(
  planet: string,
): string {
  return planet;
}`,
  );

  output = output.replace(
    /function withPlanetArticle\([\s\S]*?\n\}/,
    `function withPlanetArticle(
  planet: string,
): string {
  return planet;
}`,
  );

  return output;
}

/* =========================================================
   PROFILE VALUES
   Toutes les valeurs variables utilisées par les 12 signes
========================================================= */

const VALUES: Record<
  Exclude<PaidPdfLocale, "fr">,
  TranslationMap
> = {
  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    /* Elements / modalities */
    Feu: "Fire",
    Terre: "Earth",
    Air: "Air",
    Eau: "Water",
    Cardinal: "Cardinal",
    Fixe: "Fixed",
    Mutable: "Mutable",

    /* Planets */
    Mercure: "Mercury",
    Vénus: "Venus",
    Mars: "Mars",
    Jupiter: "Jupiter",
    Saturne: "Saturn",
    Uranus: "Uranus",
    Neptune: "Neptune",
    Pluton: "Pluto",
    Lune: "Moon",
    Soleil: "Sun",

    /* Aries */
    initiative: "initiative",
    courage: "courage",
    renouveau: "renewal",
    affirmation: "self-assertion",
    audace: "boldness",
    "rapidité d’action": "speed of action",
    volonté: "willpower",
    leadership: "leadership",
    impatience: "impatience",
    "réactions impulsives": "impulsive reactions",
    dispersion: "scattered focus",
    confrontations: "confrontations",

    /* Taurus */
    stabilité: "stability",
    construction: "building",
    sécurité: "security",
    plaisir: "pleasure",
    persévérance: "perseverance",
    patience: "patience",
    fidélité: "loyalty",
    "sens pratique": "practical sense",
    "résistance au changement":
      "resistance to change",
    attachement: "attachment",
    lenteur: "slowness",
    rigidité: "rigidity",

    /* Gemini */
    communication: "communication",
    curiosité: "curiosity",
    mouvement: "movement",
    apprentissage: "learning",
    adaptabilité: "adaptability",
    intelligence: "intelligence",
    souplesse: "flexibility",
    sociabilité: "sociability",
    indécision: "indecision",
    nervosité: "nervousness",
    superficialité: "superficiality",

    /* Cancer */
    émotions: "emotions",
    famille: "family",
    protection: "protection",
    intimité: "intimacy",
    intuition: "intuition",
    sensibilité: "sensitivity",
    loyauté: "loyalty",
    empathie: "empathy",
    hypersensibilité: "hypersensitivity",
    repli: "withdrawal",
    nostalgie: "nostalgia",
    insécurité: "insecurity",

    /* Leo */
    rayonnement: "radiance",
    créativité: "creativity",
    expression: "expression",
    reconnaissance: "recognition",
    générosité: "generosity",
    charisme: "charisma",
    confiance: "confidence",
    orgueil: "pride",
    "besoin de validation":
      "need for validation",
    dramatisation: "dramatization",
    entêtement: "stubbornness",

    /* Virgo */
    organisation: "organization",
    amélioration: "improvement",
    service: "service",
    précision: "precision",
    analyse: "analysis",
    discipline: "discipline",
    fiabilité: "reliability",
    méthode: "method",
    perfectionnisme: "perfectionism",
    inquiétude: "worry",
    autocritique: "self-criticism",
    contrôle: "control",

    /* Libra */
    équilibre: "balance",
    relations: "relationships",
    harmonie: "harmony",
    coopération: "cooperation",
    diplomatie: "diplomacy",
    élégance: "grace",
    écoute: "listening",
    "sens de la justice":
      "sense of fairness",
    évitement: "avoidance",
    "dépendance au regard":
      "dependence on others' approval",
    "compromis excessifs":
      "excessive compromises",

    /* Scorpio */
    transformation: "transformation",
    intensité: "intensity",
    vérité: "truth",
    régénération: "regeneration",
    profondeur: "depth",
    résilience: "resilience",
    détermination: "determination",
    méfiance: "distrust",
    obsession: "obsession",
    radicalité: "radicalism",

    /* Sagittarius */
    expansion: "expansion",
    aventure: "adventure",
    connaissance: "knowledge",
    liberté: "freedom",
    optimisme: "optimism",
    vision: "vision",
    enthousiasme: "enthusiasm",
    franchise: "frankness",
    excès: "excess",
    imprudence: "recklessness",
    "manque de constance":
      "lack of consistency",

    /* Capricorn */
    ambition: "ambition",
    structure: "structure",
    responsabilité: "responsibility",
    accomplissement: "achievement",
    endurance: "endurance",
    maturité: "maturity",
    stratégie: "strategy",
    pessimisme: "pessimism",
    surmenage: "overwork",
    "distance émotionnelle":
      "emotional distance",

    /* Aquarius */
    innovation: "innovation",
    indépendance: "independence",
    avenir: "future",
    collectif: "collective",
    originalité: "originality",
    autonomie: "autonomy",
    inventivité: "inventiveness",
    détachement: "detachment",
    imprévisibilité: "unpredictability",
    "ruptures brusques": "sudden ruptures",

    /* Pisces */
    spiritualité: "spirituality",
    compassion: "compassion",
    imagination: "imagination",
    réceptivité: "receptivity",
    inspiration: "inspiration",
    confusion: "confusion",
    fuite: "escapism",
    idéalisme: "idealism",
    "limites fragiles": "fragile boundaries",

    /* Energy titles */
    "Expansion personnelle":
      "Personal expansion",
    "Transformation intérieure":
      "Inner transformation",
    "Stabilité et construction":
      "Stability and building",
    "Ouverture relationnelle":
      "Relationship openness",
    "Réorientation professionnelle":
      "Professional reorientation",
    "Créativité et expression":
      "Creativity and expression",
    "Guérison émotionnelle":
      "Emotional healing",
    "Affirmation de soi":
      "Self-assertion",
    "Organisation et discipline":
      "Organization and discipline",
    "Intuition et compréhension":
      "Intuition and understanding",

    /* Aspect names */
    "Jupiter et Soleil":
      "Jupiter and Sun",
    "Saturne et Soleil":
      "Saturn and Sun",
    "Vénus et Jupiter":
      "Venus and Jupiter",
    "Mars et Saturne":
      "Mars and Saturn",
    "Mercure et Uranus":
      "Mercury and Uranus",
    "Lune et Neptune":
      "Moon and Neptune",
    "Pluton et Soleil":
      "Pluto and Sun",
    "Jupiter et Saturne":
      "Jupiter and Saturn",

    "Aspect d’expansion":
      "Expansion aspect",
    "Aspect de structuration":
      "Structuring aspect",
    "Aspect d’harmonie":
      "Harmony aspect",
    "Aspect de maîtrise":
      "Mastery aspect",
    "Aspect d’innovation":
      "Innovation aspect",
    "Aspect d’intuition":
      "Intuition aspect",
    "Aspect de transformation":
      "Transformation aspect",
    "Aspect de consolidation":
      "Consolidation aspect",

    /* Periods */
    "Début d’année":
      "Beginning of the year",
    Printemps: "Spring",
    Été: "Summer",
    Automne: "Autumn",
    "Fin d’année":
      "End of the year",
    "Plusieurs périodes de l’année":
      "Several periods of the year",

    /* House titles */
    "Identité et nouveaux départs":
      "Identity and new beginnings",
    "Ressources et sécurité":
      "Resources and security",
    "Communication et apprentissage":
      "Communication and learning",
    "Foyer et racines":
      "Home and roots",
    "Travail quotidien et bien-être":
      "Daily work and well-being",
    "Relations et engagements":
      "Relationships and commitments",
    "Transformation et intimité":
      "Transformation and intimacy",
    "Expansion et vision":
      "Expansion and vision",
    "Carrière et accomplissement":
      "Career and achievement",
    "Projets et vie sociale":
      "Projects and social life",
    "Intériorité et guérison":
      "Inner world and healing",
  },

  /* =======================================================
     ESPAÑOL
  ======================================================= */

  es: {
    Feu: "Fuego",
    Terre: "Tierra",
    Air: "Aire",
    Eau: "Agua",
    Cardinal: "Cardinal",
    Fixe: "Fija",
    Mutable: "Mutable",

    Mercure: "Mercurio",
    Vénus: "Venus",
    Mars: "Marte",
    Jupiter: "Júpiter",
    Saturne: "Saturno",
    Uranus: "Urano",
    Neptune: "Neptuno",
    Pluton: "Plutón",
    Lune: "Luna",
    Soleil: "Sol",

    initiative: "iniciativa",
    courage: "valentía",
    renouveau: "renovación",
    affirmation: "afirmación personal",
    audace: "audacia",
    "rapidité d’action": "rapidez de acción",
    volonté: "voluntad",
    leadership: "liderazgo",
    impatience: "impaciencia",
    "réactions impulsives": "reacciones impulsivas",
    dispersion: "dispersión",
    confrontations: "confrontaciones",

    stabilité: "estabilidad",
    construction: "construcción",
    sécurité: "seguridad",
    plaisir: "placer",
    persévérance: "perseverancia",
    patience: "paciencia",
    fidélité: "fidelidad",
    "sens pratique": "sentido práctico",
    "résistance au changement":
      "resistencia al cambio",
    attachement: "apego",
    lenteur: "lentitud",
    rigidité: "rigidez",

    communication: "comunicación",
    curiosité: "curiosidad",
    mouvement: "movimiento",
    apprentissage: "aprendizaje",
    adaptabilité: "adaptabilidad",
    intelligence: "inteligencia",
    souplesse: "flexibilidad",
    sociabilité: "sociabilidad",
    indécision: "indecisión",
    nervosité: "nerviosismo",
    superficialité: "superficialidad",

    émotions: "emociones",
    famille: "familia",
    protection: "protección",
    intimité: "intimidad",
    intuition: "intuición",
    sensibilité: "sensibilidad",
    loyauté: "lealtad",
    empathie: "empatía",
    hypersensibilité: "hipersensibilidad",
    repli: "retraimiento",
    nostalgie: "nostalgia",
    insécurité: "inseguridad",

    rayonnement: "brillo personal",
    créativité: "creatividad",
    expression: "expresión",
    reconnaissance: "reconocimiento",
    générosité: "generosidad",
    charisme: "carisma",
    confiance: "confianza",
    orgueil: "orgullo",
    "besoin de validation":
      "necesidad de validación",
    dramatisation: "dramatización",
    entêtement: "obstinación",

    organisation: "organización",
    amélioration: "mejora",
    service: "servicio",
    précision: "precisión",
    analyse: "análisis",
    discipline: "disciplina",
    fiabilité: "fiabilidad",
    méthode: "método",
    perfectionnisme: "perfeccionismo",
    inquiétude: "preocupación",
    autocritique: "autocrítica",
    contrôle: "control",

    équilibre: "equilibrio",
    relations: "relaciones",
    harmonie: "armonía",
    coopération: "cooperación",
    diplomatie: "diplomacia",
    élégance: "elegancia",
    écoute: "escucha",
    "sens de la justice":
      "sentido de la justicia",
    évitement: "evasión",
    "dépendance au regard":
      "dependencia de la aprobación externa",
    "compromis excessifs":
      "compromisos excesivos",

    transformation: "transformación",
    intensité: "intensidad",
    vérité: "verdad",
    régénération: "regeneración",
    profondeur: "profundidad",
    résilience: "resiliencia",
    détermination: "determinación",
    méfiance: "desconfianza",
    obsession: "obsesión",
    radicalité: "radicalidad",

    expansion: "expansión",
    aventure: "aventura",
    connaissance: "conocimiento",
    liberté: "libertad",
    optimisme: "optimismo",
    vision: "visión",
    enthousiasme: "entusiasmo",
    franchise: "franqueza",
    excès: "exceso",
    imprudence: "imprudencia",
    "manque de constance":
      "falta de constancia",

    ambition: "ambición",
    structure: "estructura",
    responsabilité: "responsabilidad",
    accomplissement: "realización",
    endurance: "resistencia",
    maturité: "madurez",
    stratégie: "estrategia",
    pessimisme: "pesimismo",
    surmenage: "sobrecarga",
    "distance émotionnelle":
      "distancia emocional",

    innovation: "innovación",
    indépendance: "independencia",
    avenir: "futuro",
    collectif: "colectivo",
    originalité: "originalidad",
    autonomie: "autonomía",
    inventivité: "inventiva",
    détachement: "desapego",
    imprévisibilité: "imprevisibilidad",
    "ruptures brusques":
      "rupturas repentinas",

    spiritualité: "espiritualidad",
    compassion: "compasión",
    imagination: "imaginación",
    réceptivité: "receptividad",
    inspiration: "inspiración",
    confusion: "confusión",
    fuite: "evasión",
    idéalisme: "idealismo",
    "limites fragiles":
      "límites frágiles",

    "Expansion personnelle":
      "Expansión personal",
    "Transformation intérieure":
      "Transformación interior",
    "Stabilité et construction":
      "Estabilidad y construcción",
    "Ouverture relationnelle":
      "Apertura relacional",
    "Réorientation professionnelle":
      "Reorientación profesional",
    "Créativité et expression":
      "Creatividad y expresión",
    "Guérison émotionnelle":
      "Sanación emocional",
    "Affirmation de soi":
      "Autoafirmación",
    "Organisation et discipline":
      "Organización y disciplina",
    "Intuition et compréhension":
      "Intuición y comprensión",

    "Jupiter et Soleil":
      "Júpiter y Sol",
    "Saturne et Soleil":
      "Saturno y Sol",
    "Vénus et Jupiter":
      "Venus y Júpiter",
    "Mars et Saturne":
      "Marte y Saturno",
    "Mercure et Uranus":
      "Mercurio y Urano",
    "Lune et Neptune":
      "Luna y Neptuno",
    "Pluton et Soleil":
      "Plutón y Sol",
    "Jupiter et Saturne":
      "Júpiter y Saturno",

    "Aspect d’expansion":
      "Aspecto de expansión",
    "Aspect de structuration":
      "Aspecto de estructuración",
    "Aspect d’harmonie":
      "Aspecto de armonía",
    "Aspect de maîtrise":
      "Aspecto de dominio",
    "Aspect d’innovation":
      "Aspecto de innovación",
    "Aspect d’intuition":
      "Aspecto de intuición",
    "Aspect de transformation":
      "Aspecto de transformación",
    "Aspect de consolidation":
      "Aspecto de consolidación",

    "Début d’année":
      "Inicio del año",
    Printemps: "Primavera",
    Été: "Verano",
    Automne: "Otoño",
    "Fin d’année":
      "Final del año",
    "Plusieurs périodes de l’année":
      "Varios períodos del año",

    "Identité et nouveaux départs":
      "Identidad y nuevos comienzos",
    "Ressources et sécurité":
      "Recursos y seguridad",
    "Communication et apprentissage":
      "Comunicación y aprendizaje",
    "Foyer et racines":
      "Hogar y raíces",
    "Travail quotidien et bien-être":
      "Trabajo diario y bienestar",
    "Relations et engagements":
      "Relaciones y compromisos",
    "Transformation et intimité":
      "Transformación e intimidad",
    "Expansion et vision":
      "Expansión y visión",
    "Carrière et accomplissement":
      "Carrera y realización",
    "Projets et vie sociale":
      "Proyectos y vida social",
    "Intériorité et guérison":
      "Mundo interior y sanación",
  },

  /* =======================================================
     DEUTSCH
  ======================================================= */

  de: {
    Feu: "Feuer",
    Terre: "Erde",
    Air: "Luft",
    Eau: "Wasser",
    Cardinal: "Kardinal",
    Fixe: "Fix",
    Mutable: "Veränderlich",

    Mercure: "Merkur",
    Vénus: "Venus",
    Mars: "Mars",
    Jupiter: "Jupiter",
    Saturne: "Saturn",
    Uranus: "Uranus",
    Neptune: "Neptun",
    Pluton: "Pluto",
    Lune: "Mond",
    Soleil: "Sonne",

    initiative: "Initiative",
    courage: "Mut",
    renouveau: "Erneuerung",
    affirmation: "Selbstbehauptung",
    audace: "Kühnheit",
    "rapidité d’action": "Handlungsschnelligkeit",
    volonté: "Willenskraft",
    leadership: "Führungskraft",
    impatience: "Ungeduld",
    "réactions impulsives":
      "impulsive Reaktionen",
    dispersion: "Zerstreuung",
    confrontations: "Konfrontationen",

    stabilité: "Stabilität",
    construction: "Aufbau",
    sécurité: "Sicherheit",
    plaisir: "Genuss",
    persévérance: "Ausdauer",
    patience: "Geduld",
    fidélité: "Treue",
    "sens pratique": "Praxisnähe",
    "résistance au changement":
      "Widerstand gegen Veränderungen",
    attachement: "Anhaftung",
    lenteur: "Langsamkeit",
    rigidité: "Starrheit",

    communication: "Kommunikation",
    curiosité: "Neugier",
    mouvement: "Bewegung",
    apprentissage: "Lernen",
    adaptabilité: "Anpassungsfähigkeit",
    intelligence: "Intelligenz",
    souplesse: "Flexibilität",
    sociabilité: "Kontaktfreude",
    indécision: "Unentschlossenheit",
    nervosité: "Nervosität",
    superficialité: "Oberflächlichkeit",

    émotions: "Emotionen",
    famille: "Familie",
    protection: "Schutz",
    intimité: "Intimität",
    intuition: "Intuition",
    sensibilité: "Sensibilität",
    loyauté: "Loyalität",
    empathie: "Empathie",
    hypersensibilité: "Überempfindlichkeit",
    repli: "Rückzug",
    nostalgie: "Nostalgie",
    insécurité: "Unsicherheit",

    rayonnement: "Ausstrahlung",
    créativité: "Kreativität",
    expression: "Ausdruck",
    reconnaissance: "Anerkennung",
    générosité: "Großzügigkeit",
    charisme: "Charisma",
    confiance: "Selbstvertrauen",
    orgueil: "Stolz",
    "besoin de validation":
      "Bedürfnis nach Bestätigung",
    dramatisation: "Dramatisierung",
    entêtement: "Sturheit",

    organisation: "Organisation",
    amélioration: "Verbesserung",
    service: "Dienst",
    précision: "Präzision",
    analyse: "Analyse",
    discipline: "Disziplin",
    fiabilité: "Zuverlässigkeit",
    méthode: "Methode",
    perfectionnisme: "Perfektionismus",
    inquiétude: "Sorge",
    autocritique: "Selbstkritik",
    contrôle: "Kontrolle",

    équilibre: "Gleichgewicht",
    relations: "Beziehungen",
    harmonie: "Harmonie",
    coopération: "Zusammenarbeit",
    diplomatie: "Diplomatie",
    élégance: "Eleganz",
    écoute: "Zuhören",
    "sens de la justice":
      "Gerechtigkeitssinn",
    évitement: "Vermeidung",
    "dépendance au regard":
      "Abhängigkeit von äußerer Bestätigung",
    "compromis excessifs":
      "übermäßige Kompromisse",

    transformation: "Transformation",
    intensité: "Intensität",
    vérité: "Wahrheit",
    régénération: "Regeneration",
    profondeur: "Tiefe",
    résilience: "Resilienz",
    détermination: "Entschlossenheit",
    méfiance: "Misstrauen",
    obsession: "Besessenheit",
    radicalité: "Radikalität",

    expansion: "Expansion",
    aventure: "Abenteuer",
    connaissance: "Wissen",
    liberté: "Freiheit",
    optimisme: "Optimismus",
    vision: "Vision",
    enthousiasme: "Begeisterung",
    franchise: "Offenheit",
    excès: "Übermaß",
    imprudence: "Unvorsichtigkeit",
    "manque de constance":
      "mangelnde Beständigkeit",

    ambition: "Ehrgeiz",
    structure: "Struktur",
    responsabilité: "Verantwortung",
    accomplissement: "Erfüllung",
    endurance: "Ausdauer",
    maturité: "Reife",
    stratégie: "Strategie",
    pessimisme: "Pessimismus",
    surmenage: "Überarbeitung",
    "distance émotionnelle":
      "emotionale Distanz",

    innovation: "Innovation",
    indépendance: "Unabhängigkeit",
    avenir: "Zukunft",
    collectif: "Gemeinschaft",
    originalité: "Originalität",
    autonomie: "Autonomie",
    inventivité: "Erfindungsreichtum",
    détachement: "Distanzierung",
    imprévisibilité: "Unberechenbarkeit",
    "ruptures brusques":
      "plötzliche Brüche",

    spiritualité: "Spiritualität",
    compassion: "Mitgefühl",
    imagination: "Vorstellungskraft",
    réceptivité: "Empfänglichkeit",
    inspiration: "Inspiration",
    confusion: "Verwirrung",
    fuite: "Flucht",
    idéalisme: "Idealismus",
    "limites fragiles":
      "instabile Grenzen",

    "Expansion personnelle":
      "Persönliche Expansion",
    "Transformation intérieure":
      "Innere Transformation",
    "Stabilité et construction":
      "Stabilität und Aufbau",
    "Ouverture relationnelle":
      "Zwischenmenschliche Öffnung",
    "Réorientation professionnelle":
      "Berufliche Neuorientierung",
    "Créativité et expression":
      "Kreativität und Ausdruck",
    "Guérison émotionnelle":
      "Emotionale Heilung",
    "Affirmation de soi":
      "Selbstbehauptung",
    "Organisation et discipline":
      "Organisation und Disziplin",
    "Intuition et compréhension":
      "Intuition und Verständnis",

    "Jupiter et Soleil":
      "Jupiter und Sonne",
    "Saturne et Soleil":
      "Saturn und Sonne",
    "Vénus et Jupiter":
      "Venus und Jupiter",
    "Mars et Saturne":
      "Mars und Saturn",
    "Mercure et Uranus":
      "Merkur und Uranus",
    "Lune et Neptune":
      "Mond und Neptun",
    "Pluton et Soleil":
      "Pluto und Sonne",
    "Jupiter et Saturne":
      "Jupiter und Saturn",

    "Aspect d’expansion":
      "Expansionsaspekt",
    "Aspect de structuration":
      "Strukturierungsaspekt",
    "Aspect d’harmonie":
      "Harmonieaspekt",
    "Aspect de maîtrise":
      "Aspekt der Beherrschung",
    "Aspect d’innovation":
      "Innovationsaspekt",
    "Aspect d’intuition":
      "Intuitionsaspekt",
    "Aspect de transformation":
      "Transformationsaspekt",
    "Aspect de consolidation":
      "Konsolidierungsaspekt",

    "Début d’année":
      "Jahresbeginn",
    Printemps: "Frühling",
    Été: "Sommer",
    Automne: "Herbst",
    "Fin d’année":
      "Jahresende",
    "Plusieurs périodes de l’année":
      "Mehrere Phasen des Jahres",

    "Identité et nouveaux départs":
      "Identität und Neuanfänge",
    "Ressources et sécurité":
      "Ressourcen und Sicherheit",
    "Communication et apprentissage":
      "Kommunikation und Lernen",
    "Foyer et racines":
      "Zuhause und Wurzeln",
    "Travail quotidien et bien-être":
      "Alltag und Wohlbefinden",
    "Relations et engagements":
      "Beziehungen und Verpflichtungen",
    "Transformation et intimité":
      "Transformation und Intimität",
    "Expansion et vision":
      "Expansion und Vision",
    "Carrière et accomplissement":
      "Karriere und Erfüllung",
    "Projets et vie sociale":
      "Projekte und Sozialleben",
    "Intériorité et guérison":
      "Innenwelt und Heilung",
  },

  /* =======================================================
     ITALIANO
  ======================================================= */

  it: {
    Feu: "Fuoco",
    Terre: "Terra",
    Air: "Aria",
    Eau: "Acqua",
    Cardinal: "Cardinale",
    Fixe: "Fissa",
    Mutable: "Mutevole",

    Mercure: "Mercurio",
    Vénus: "Venere",
    Mars: "Marte",
    Jupiter: "Giove",
    Saturne: "Saturno",
    Uranus: "Urano",
    Neptune: "Nettuno",
    Pluton: "Plutone",
    Lune: "Luna",
    Soleil: "Sole",

    initiative: "iniziativa",
    courage: "coraggio",
    renouveau: "rinnovamento",
    affirmation: "affermazione personale",
    audace: "audacia",
    "rapidité d’action": "rapidità d’azione",
    volonté: "forza di volontà",
    leadership: "leadership",
    impatience: "impazienza",
    "réactions impulsives":
      "reazioni impulsive",
    dispersion: "dispersione",
    confrontations: "confronti",

    stabilité: "stabilità",
    construction: "costruzione",
    sécurité: "sicurezza",
    plaisir: "piacere",
    persévérance: "perseveranza",
    patience: "pazienza",
    fidélité: "fedeltà",
    "sens pratique": "senso pratico",
    "résistance au changement":
      "resistenza al cambiamento",
    attachement: "attaccamento",
    lenteur: "lentezza",
    rigidité: "rigidità",

    communication: "comunicazione",
    curiosité: "curiosità",
    mouvement: "movimento",
    apprentissage: "apprendimento",
    adaptabilité: "adattabilità",
    intelligence: "intelligenza",
    souplesse: "flessibilità",
    sociabilité: "socievolezza",
    indécision: "indecisione",
    nervosité: "nervosismo",
    superficialité: "superficialità",

    émotions: "emozioni",
    famille: "famiglia",
    protection: "protezione",
    intimité: "intimità",
    intuition: "intuizione",
    sensibilité: "sensibilità",
    loyauté: "lealtà",
    empathie: "empatia",
    hypersensibilité: "ipersensibilità",
    repli: "chiusura",
    nostalgie: "nostalgia",
    insécurité: "insicurezza",

    rayonnement: "carisma personale",
    créativité: "creatività",
    expression: "espressione",
    reconnaissance: "riconoscimento",
    générosité: "generosità",
    charisme: "carisma",
    confiance: "fiducia",
    orgueil: "orgoglio",
    "besoin de validation":
      "bisogno di approvazione",
    dramatisation: "drammatizzazione",
    entêtement: "ostinazione",

    organisation: "organizzazione",
    amélioration: "miglioramento",
    service: "servizio",
    précision: "precisione",
    analyse: "analisi",
    discipline: "disciplina",
    fiabilité: "affidabilità",
    méthode: "metodo",
    perfectionnisme: "perfezionismo",
    inquiétude: "preoccupazione",
    autocritique: "autocritica",
    contrôle: "controllo",

    équilibre: "equilibrio",
    relations: "relazioni",
    harmonie: "armonia",
    coopération: "cooperazione",
    diplomatie: "diplomazia",
    élégance: "eleganza",
    écoute: "ascolto",
    "sens de la justice":
      "senso della giustizia",
    évitement: "evitamento",
    "dépendance au regard":
      "dipendenza dall’approvazione esterna",
    "compromis excessifs":
      "compromessi eccessivi",

    transformation: "trasformazione",
    intensité: "intensità",
    vérité: "verità",
    régénération: "rigenerazione",
    profondeur: "profondità",
    résilience: "resilienza",
    détermination: "determinazione",
    méfiance: "diffidenza",
    obsession: "ossessione",
    radicalité: "radicalità",

    expansion: "espansione",
    aventure: "avventura",
    connaissance: "conoscenza",
    liberté: "libertà",
    optimisme: "ottimismo",
    vision: "visione",
    enthousiasme: "entusiasmo",
    franchise: "franchezza",
    excès: "eccesso",
    imprudence: "imprudenza",
    "manque de constance":
      "mancanza di costanza",

    ambition: "ambizione",
    structure: "struttura",
    responsabilité: "responsabilità",
    accomplissement: "realizzazione",
    endurance: "resistenza",
    maturité: "maturità",
    stratégie: "strategia",
    pessimisme: "pessimismo",
    surmenage: "sovraccarico",
    "distance émotionnelle":
      "distanza emotiva",

    innovation: "innovazione",
    indépendance: "indipendenza",
    avenir: "futuro",
    collectif: "collettività",
    originalité: "originalità",
    autonomie: "autonomia",
    inventivité: "inventiva",
    détachement: "distacco",
    imprévisibilité: "imprevedibilità",
    "ruptures brusques":
      "rotture improvvise",

    spiritualité: "spiritualità",
    compassion: "compassione",
    imagination: "immaginazione",
    réceptivité: "ricettività",
    inspiration: "ispirazione",
    confusion: "confusione",
    fuite: "fuga",
    idéalisme: "idealismo",
    "limites fragiles":
      "confini fragili",

    "Expansion personnelle":
      "Espansione personale",
    "Transformation intérieure":
      "Trasformazione interiore",
    "Stabilité et construction":
      "Stabilità e costruzione",
    "Ouverture relationnelle":
      "Apertura relazionale",
    "Réorientation professionnelle":
      "Riorientamento professionale",
    "Créativité et expression":
      "Creatività ed espressione",
    "Guérison émotionnelle":
      "Guarigione emotiva",
    "Affirmation de soi":
      "Affermazione di sé",
    "Organisation et discipline":
      "Organizzazione e disciplina",
    "Intuition et compréhension":
      "Intuizione e comprensione",

    "Jupiter et Soleil":
      "Giove e Sole",
    "Saturne et Soleil":
      "Saturno e Sole",
    "Vénus et Jupiter":
      "Venere e Giove",
    "Mars et Saturne":
      "Marte e Saturno",
    "Mercure et Uranus":
      "Mercurio e Urano",
    "Lune et Neptune":
      "Luna e Nettuno",
    "Pluton et Soleil":
      "Plutone e Sole",
    "Jupiter et Saturne":
      "Giove e Saturno",

    "Aspect d’expansion":
      "Aspetto di espansione",
    "Aspect de structuration":
      "Aspetto di strutturazione",
    "Aspect d’harmonie":
      "Aspetto di armonia",
    "Aspect de maîtrise":
      "Aspetto di padronanza",
    "Aspect d’innovation":
      "Aspetto di innovazione",
    "Aspect d’intuition":
      "Aspetto di intuizione",
    "Aspect de transformation":
      "Aspetto di trasformazione",
    "Aspect de consolidation":
      "Aspetto di consolidamento",

    "Début d’année":
      "Inizio dell’anno",
    Printemps: "Primavera",
    Été: "Estate",
    Automne: "Autunno",
    "Fin d’année":
      "Fine dell’anno",
    "Plusieurs périodes de l’année":
      "Diversi periodi dell’anno",

    "Identité et nouveaux départs":
      "Identità e nuovi inizi",
    "Ressources et sécurité":
      "Risorse e sicurezza",
    "Communication et apprentissage":
      "Comunicazione e apprendimento",
    "Foyer et racines":
      "Casa e radici",
    "Travail quotidien et bien-être":
      "Lavoro quotidiano e benessere",
    "Relations et engagements":
      "Relazioni e impegni",
    "Transformation et intimité":
      "Trasformazione e intimità",
    "Expansion et vision":
      "Espansione e visione",
    "Carrière et accomplissement":
      "Carriera e realizzazione",
    "Projets et vie sociale":
      "Progetti e vita sociale",
    "Intériorité et guérison":
      "Interiorità e guarigione",
  },

  /* =======================================================
     PORTUGUÊS DO BRASIL
  ======================================================= */

  pt: {
    Feu: "Fogo",
    Terre: "Terra",
    Air: "Ar",
    Eau: "Água",
    Cardinal: "Cardinal",
    Fixe: "Fixa",
    Mutable: "Mutável",

    Mercure: "Mercúrio",
    Vénus: "Vênus",
    Mars: "Marte",
    Jupiter: "Júpiter",
    Saturne: "Saturno",
    Uranus: "Urano",
    Neptune: "Netuno",
    Pluton: "Plutão",
    Lune: "Lua",
    Soleil: "Sol",

    initiative: "iniciativa",
    courage: "coragem",
    renouveau: "renovação",
    affirmation: "autoafirmação",
    audace: "audácia",
    "rapidité d’action": "rapidez de ação",
    volonté: "força de vontade",
    leadership: "liderança",
    impatience: "impaciência",
    "réactions impulsives":
      "reações impulsivas",
    dispersion: "dispersão",
    confrontations: "confrontos",

    stabilité: "estabilidade",
    construction: "construção",
    sécurité: "segurança",
    plaisir: "prazer",
    persévérance: "perseverança",
    patience: "paciência",
    fidélité: "fidelidade",
    "sens pratique": "senso prático",
    "résistance au changement":
      "resistência à mudança",
    attachement: "apego",
    lenteur: "lentidão",
    rigidité: "rigidez",

    communication: "comunicação",
    curiosité: "curiosidade",
    mouvement: "movimento",
    apprentissage: "aprendizado",
    adaptabilité: "adaptabilidade",
    intelligence: "inteligência",
    souplesse: "flexibilidade",
    sociabilité: "sociabilidade",
    indécision: "indecisão",
    nervosité: "nervosismo",
    superficialité: "superficialidade",

    émotions: "emoções",
    famille: "família",
    protection: "proteção",
    intimité: "intimidade",
    intuition: "intuição",
    sensibilité: "sensibilidade",
    loyauté: "lealdade",
    empathie: "empatia",
    hypersensibilité: "hipersensibilidade",
    repli: "retraimento",
    nostalgie: "nostalgia",
    insécurité: "insegurança",

    rayonnement: "presença",
    créativité: "criatividade",
    expression: "expressão",
    reconnaissance: "reconhecimento",
    générosité: "generosidade",
    charisme: "carisma",
    confiance: "confiança",
    orgueil: "orgulho",
    "besoin de validation":
      "necessidade de validação",
    dramatisation: "dramatização",
    entêtement: "teimosia",

    organisation: "organização",
    amélioration: "melhoria",
    service: "serviço",
    précision: "precisão",
    analyse: "análise",
    discipline: "disciplina",
    fiabilité: "confiabilidade",
    méthode: "método",
    perfectionnisme: "perfeccionismo",
    inquiétude: "preocupação",
    autocritique: "autocrítica",
    contrôle: "controle",

    équilibre: "equilíbrio",
    relations: "relacionamentos",
    harmonie: "harmonia",
    coopération: "cooperação",
    diplomatie: "diplomacia",
    élégance: "elegância",
    écoute: "escuta",
    "sens de la justice":
      "senso de justiça",
    évitement: "evitação",
    "dépendance au regard":
      "dependência da aprovação externa",
    "compromis excessifs":
      "compromissos excessivos",

    transformation: "transformação",
    intensité: "intensidade",
    vérité: "verdade",
    régénération: "regeneração",
    profondeur: "profundidade",
    résilience: "resiliência",
    détermination: "determinação",
    méfiance: "desconfiança",
    obsession: "obsessão",
    radicalité: "radicalidade",

    expansion: "expansão",
    aventure: "aventura",
    connaissance: "conhecimento",
    liberté: "liberdade",
    optimisme: "otimismo",
    vision: "visão",
    enthousiasme: "entusiasmo",
    franchise: "franqueza",
    excès: "excesso",
    imprudence: "imprudência",
    "manque de constance":
      "falta de constância",

    ambition: "ambição",
    structure: "estrutura",
    responsabilité: "responsabilidade",
    accomplissement: "realização",
    endurance: "resistência",
    maturité: "maturidade",
    stratégie: "estratégia",
    pessimisme: "pessimismo",
    surmenage: "sobrecarga",
    "distance émotionnelle":
      "distância emocional",

    innovation: "inovação",
    indépendance: "independência",
    avenir: "futuro",
    collectif: "coletivo",
    originalité: "originalidade",
    autonomie: "autonomia",
    inventivité: "inventividade",
    détachement: "desapego",
    imprévisibilité: "imprevisibilidade",
    "ruptures brusques":
      "rupturas repentinas",

    spiritualité: "espiritualidade",
    compassion: "compaixão",
    imagination: "imaginação",
    réceptivité: "receptividade",
    inspiration: "inspiração",
    confusion: "confusão",
    fuite: "fuga",
    idéalisme: "idealismo",
    "limites fragiles":
      "limites frágeis",

    "Expansion personnelle":
      "Expansão pessoal",
    "Transformation intérieure":
      "Transformação interior",
    "Stabilité et construction":
      "Estabilidade e construção",
    "Ouverture relationnelle":
      "Abertura nos relacionamentos",
    "Réorientation professionnelle":
      "Reorientação profissional",
    "Créativité et expression":
      "Criatividade e expressão",
    "Guérison émotionnelle":
      "Cura emocional",
    "Affirmation de soi":
      "Autoafirmação",
    "Organisation et discipline":
      "Organização e disciplina",
    "Intuition et compréhension":
      "Intuição e compreensão",

    "Jupiter et Soleil":
      "Júpiter e Sol",
    "Saturne et Soleil":
      "Saturno e Sol",
    "Vénus et Jupiter":
      "Vênus e Júpiter",
    "Mars et Saturne":
      "Marte e Saturno",
    "Mercure et Uranus":
      "Mercúrio e Urano",
    "Lune et Neptune":
      "Lua e Netuno",
    "Pluton et Soleil":
      "Plutão e Sol",
    "Jupiter et Saturne":
      "Júpiter e Saturno",

    "Aspect d’expansion":
      "Aspecto de expansão",
    "Aspect de structuration":
      "Aspecto de estruturação",
    "Aspect d’harmonie":
      "Aspecto de harmonia",
    "Aspect de maîtrise":
      "Aspecto de domínio",
    "Aspect d’innovation":
      "Aspecto de inovação",
    "Aspect d’intuition":
      "Aspecto de intuição",
    "Aspect de transformation":
      "Aspecto de transformação",
    "Aspect de consolidation":
      "Aspecto de consolidação",

    "Début d’année":
      "Início do ano",
    Printemps: "Primavera",
    Été: "Verão",
    Automne: "Outono",
    "Fin d’année":
      "Fim do ano",
    "Plusieurs périodes de l’année":
      "Vários períodos do ano",

    "Identité et nouveaux départs":
      "Identidade e novos começos",
    "Ressources et sécurité":
      "Recursos e segurança",
    "Communication et apprentissage":
      "Comunicação e aprendizado",
    "Foyer et racines":
      "Lar e raízes",
    "Travail quotidien et bien-être":
      "Trabalho diário e bem-estar",
    "Relations et engagements":
      "Relacionamentos e compromissos",
    "Transformation et intimité":
      "Transformação e intimidade",
    "Expansion et vision":
      "Expansão e visão",
    "Carrière et accomplissement":
      "Carreira e realização",
    "Projets et vie sociale":
      "Projetos e vida social",
    "Intériorité et guérison":
      "Mundo interior e cura",
  },
};

/* =========================================================
   PHRASES — ENGLISH
========================================================= */

const EN: TranslationMap = {
  /* Overview introductions */
  "Cette année ouvre un cycle de progression dans lequel les choix conscients auront davantage de poids que les réactions immédiates.":
    "This year opens a cycle of growth in which conscious choices will carry more weight than immediate reactions.",

  "L’année met en lumière plusieurs occasions de réorientation, de maturation et de consolidation personnelle.":
    "The year highlights several opportunities for reorientation, maturation, and personal consolidation.",

  "Une dynamique de transformation progressive accompagne cette période et vous invite à faire évoluer vos priorités.":
    "A dynamic of gradual transformation accompanies this period and invites you to reassess your priorities.",

  "Cette année favorise une compréhension plus profonde de vos besoins, de vos ambitions et de vos relations.":
    "This year favors a deeper understanding of your needs, ambitions, and relationships.",

  "Le climat annuel vous encourage à unir intuition, lucidité et constance afin d’avancer avec davantage de maîtrise.":
    "The climate of the year encourages you to combine intuition, clarity, and consistency so that you can move forward with greater control.",

  /* Overview summaries */
  "Les prochains mois alterneront entre phases d’expansion et moments de recentrage. Les périodes les plus constructives seront celles où vous accepterez d’avancer sans précipitation.":
    "The coming months will alternate between periods of expansion and moments of refocusing. The most constructive periods will be those in which you allow yourself to move forward without rushing.",

  "Votre progression dépendra moins de la quantité d’actions entreprises que de votre capacité à choisir les projets réellement alignés avec votre évolution.":
    "Your progress will depend less on the number of actions you take than on your ability to choose projects that are truly aligned with your growth.",

  "L’année vous demande de renforcer ce qui est solide, de transformer ce qui ne correspond plus à vos besoins et de préserver votre énergie.":
    "The year asks you to strengthen what is solid, transform what no longer meets your needs, and preserve your energy.",

  "Plusieurs décisions importantes pourront modifier durablement votre trajectoire. Une vision claire de vos priorités sera votre meilleur repère.":
    "Several important decisions may permanently alter your path. A clear understanding of your priorities will be your best guide.",

  "La période favorise les changements réfléchis, les prises de conscience et la création de nouvelles bases plus conformes à votre identité.":
    "This period favors thoughtful changes, realizations, and the creation of new foundations that are more aligned with your identity.",

  /* General advice */
  "Avancez par étapes et vérifiez régulièrement que vos décisions correspondent encore à vos priorités profondes.":
    "Move forward step by step and regularly check that your decisions still reflect your deepest priorities.",

  "Conservez une direction claire, mais accordez-vous la liberté d’ajuster votre stratégie lorsque les circonstances évoluent.":
    "Maintain a clear direction, but give yourself the freedom to adjust your strategy as circumstances evolve.",

  "Évitez de disperser votre énergie. Les résultats les plus durables viendront d’un engagement régulier envers quelques objectifs essentiels.":
    "Avoid scattering your energy. The most lasting results will come from steady commitment to a few essential goals.",

  "Écoutez vos intuitions sans négliger les faits concrets. L’équilibre entre ressenti et réalisme vous aidera à faire les meilleurs choix.":
    "Listen to your intuition without neglecting concrete facts. The balance between instinct and realism will help you make better choices.",

  "Donnez davantage de place à ce qui nourrit votre stabilité, votre confiance et votre sentiment de progression.":
    "Give more space to what nourishes your stability, confidence, and sense of progress.",

  /* General conclusions */
  "Cette année peut devenir une étape déterminante si vous transformez vos prises de conscience en décisions concrètes.":
    "This year can become a decisive stage if you transform your realizations into concrete decisions.",

  "Votre capacité à rester fidèle à votre vision tout en évoluant avec souplesse constituera l’une de vos plus grandes forces.":
    "Your ability to remain faithful to your vision while adapting flexibly will be one of your greatest strengths.",

  "Les transformations les plus importantes ne seront pas toujours visibles immédiatement, mais elles prépareront un avenir plus cohérent.":
    "The most important transformations will not always be immediately visible, but they will prepare a more coherent future.",

  "En cultivant patience, discernement et constance, vous pourrez faire de cette année une période de réelle progression.":
    "By cultivating patience, discernment, and consistency, you can make this year a period of genuine growth.",

  "L’année vous offre l’occasion de construire une trajectoire plus consciente et davantage alignée avec la personne que vous devenez.":
    "The year gives you the opportunity to build a more conscious path that is better aligned with the person you are becoming.",

  /* Overview dynamic text fragments */
  " devient un thème important de l’année. Vous serez amené à lui donner une place plus consciente dans vos décisions et dans votre évolution personnelle.":
    " becomes an important theme of the year. You will be encouraged to give it a more conscious place in your decisions and personal growth.",

  "Le domaine ":
    "The area of ",

  " connaîtra plusieurs mouvements au cours de l’année. Une approche progressive vous permettra d’en tirer les meilleurs résultats.":
    " will experience several shifts during the year. A gradual approach will help you get the best results from them.",

  "Votre rapport ":
    "Your relationship with ",

  " évoluera de manière notable. Certaines situations vous aideront à mieux comprendre ce qui mérite réellement votre énergie.":
    " will evolve noticeably. Certain situations will help you better understand what truly deserves your energy.",

  "Cette année favorise une nouvelle façon d’aborder ":
    "This year favors a new way of approaching ",

  ". Les expériences vécues pourront modifier durablement vos priorités.":
    ". Your experiences may permanently change your priorities.",

  "Votre année ":
    "Your Year ",

  "L’énergie dominante de votre année repose sur ":
    "The dominant energy of your year is based on ",

  ", soutenue par votre élément ":
    ", supported by your ",

  " et par la dynamique ":
    " element and the ",

  " de votre signe.":
    " modality of your sign.",

  /* Major energies */
  "Cette énergie stimule votre ":
    "This energy stimulates your ",

  " et vous encourage à développer une approche plus consciente de vos choix. Son influence pourra se manifester dans plusieurs domaines au fil de l’année.":
    " and encourages you to develop a more conscious approach to your choices. Its influence may appear in several areas throughout the year.",

  "Le courant lié ":
    "The current associated with ",

  " met en valeur votre ":
    " highlights your ",

  ". Il vous invite à avancer avec plus de discernement et à reconnaître les occasions qui correspondent réellement à vos priorités.":
    ". It invites you to move forward with greater discernment and recognize opportunities that truly match your priorities.",

  "Au cours de l’année, cette dynamique renforcera votre capacité à agir avec ":
    "During the year, this dynamic will strengthen your ability to act with ",

  ". Certaines situations vous demanderont toutefois de canaliser cette force afin de l’utiliser de façon constructive.":
    ". Some situations will nevertheless require you to channel this strength constructively.",

  "Cette influence soutient une évolution fondée sur davantage ":
    "This influence supports growth based on greater ",

  ". Elle pourra modifier votre manière d’aborder vos décisions, vos relations ou vos projets personnels.":
    ". It may change the way you approach your decisions, relationships, or personal projects.",

  " devient ici un véritable levier de progression. Plus vous exprimerez cette qualité avec équilibre, plus cette énergie vous aidera à construire des résultats durables.":
    " becomes a genuine driver of growth here. The more you express this quality with balance, the more this energy will help you build lasting results.",

  "La dynamique de ":
    "The dynamic of ",

  " vous pousse à mobiliser votre ":
    " encourages you to use your ",

  " d’une manière nouvelle. Elle favorise les choix réfléchis, les ajustements utiles et une meilleure maîtrise de votre direction.":
    " in a new way. It favors thoughtful choices, useful adjustments, and greater control over your direction.",

  "Appuyez-vous sur votre ":
    "Rely on your ",

  ", tout en évitant que ":
    ", while preventing ",

  " ne ralentisse votre progression.":
    " from slowing your progress.",

  "Faites de votre ":
    "Make your ",

  " un point d’appui, mais surveillez les moments où ":
    " a source of support, but watch for moments when ",

  " pourrait brouiller votre jugement.":
    " could cloud your judgment.",

  "Votre meilleure stratégie consiste à exprimer votre ":
    "Your best strategy is to express your ",

  " avec mesure, sans laisser ":
    " with balance, without letting ",

  " dominer vos réactions.":
    " dominate your reactions.",

  "Cultivez votre ":
    "Cultivate your ",

  " avec constance. Une attention particulière ":
    " consistently. Paying particular attention to ",

  " vous aidera à préserver votre équilibre.":
    " will help you preserve your balance.",

  "Utilisez votre ":
    "Use your ",

  " pour avancer, puis prenez du recul dès que ":
    " to move forward, then step back whenever ",

  " menace de vous éloigner de votre objectif principal.":
    " threatens to pull you away from your main goal.",

  "Énergie dominante":
    "Dominant Energy",

  "Influence complémentaire ":
    "Complementary influence ",

  "Les grandes énergies de l’année":
    "The Major Energies of the Year",

  " est portée par plusieurs courants complémentaires. Certains favoriseront l’expansion, tandis que d’autres vous inviteront à ralentir, à observer et à restructurer vos priorités.":
    " is shaped by several complementary currents. Some will favor expansion, while others will invite you to slow down, observe, and restructure your priorities.",

  "L’équilibre entre votre élément ":
    "The balance between your ",

  " et votre modalité ":
    " element and your ",

  " vous permettra d’alterner entre action, adaptation et consolidation. Votre progression sera plus fluide lorsque vous respecterez votre propre rythme.":
    " modality will allow you to alternate between action, adaptation, and consolidation. Your progress will be smoother when you respect your own rhythm.",

  "Ces différentes énergies ne s’exprimeront pas toutes au même moment. Elles formeront ensemble le mouvement général de votre année et vous aideront à avancer vers une version plus affirmée de vous-même.":
    "These different energies will not all express themselves at the same time. Together, they will form the overall movement of your year and help you move toward a more self-assured version of yourself.",

  /* Major aspects */
  "Cet aspect agit sur votre capacité à développer davantage ":
    "This aspect acts on your ability to develop greater ",

  ". Il peut provoquer une évolution importante dans votre manière de décider et d’organiser vos priorités.":
    ". It may lead to an important change in the way you make decisions and organize your priorities.",

  "La rencontre symbolique entre ":
    "The symbolic encounter between ",

  " renforce votre ":
    " strengthens your ",

  ". Elle peut vous conduire à modifier une méthode, une habitude ou une orientation devenue trop limitée.":
    ". It may lead you to change a method, habit, or direction that has become too limiting.",

  "Cette configuration met en mouvement le thème ":
    "This configuration activates the theme of ",

  ". Son influence favorise les prises de conscience capables de transformer durablement votre manière d’agir.":
    ". Its influence favors realizations capable of permanently transforming the way you act.",

  "Sous cet aspect, votre ":
    "Under this aspect, your ",

  " devient un outil essentiel. Les événements de cette période pourront vous inciter à faire des choix plus précis et mieux alignés avec vos objectifs.":
    " becomes an essential tool. Events during this period may encourage you to make more precise choices that are better aligned with your goals.",

  "L’influence de ":
    "The influence of ",

  " crée un climat propice à une évolution intérieure ou concrète. Elle vous demande d’unir votre instinct à une vision plus structurée.":
    " creates a climate favorable to inner or concrete growth. It asks you to unite your instinct with a more structured vision.",

  "Utiliser cette période pour renforcer votre ":
    "Use this period to strengthen your ",

  " et prendre des décisions capables de produire des résultats durables.":
    " and make decisions capable of producing lasting results.",

  "Transformer votre ":
    "Transform your ",

  " en action concrète et faire progresser un projet qui demande davantage de clarté ou de constance.":
    " into concrete action and move forward a project that requires greater clarity or consistency.",

  "Profiter de cette influence pour revoir vos priorités, consolider ce qui fonctionne et ouvrir une nouvelle voie là où un changement devient nécessaire.":
    "Use this influence to review your priorities, consolidate what works, and open a new path where change becomes necessary.",

  "Donner une place plus consciente ":
    "Give a more conscious place to ",

  " afin de construire des choix qui correspondent mieux à votre évolution actuelle.":
    " in order to make choices that better reflect your current growth.",

  "Saisir les occasions qui vous permettent d’exprimer votre ":
    "Seize opportunities that allow you to express your ",

  " tout en développant une stratégie plus stable pour la suite.":
    " while developing a more stable strategy for what comes next.",

  "Éviter que ":
    "Avoid letting ",

  " ne vous pousse à réagir trop rapidement ou à perdre de vue votre objectif principal.":
    " push you to react too quickly or lose sight of your main goal.",

  "Rester attentif aux manifestations ":
    "Stay attentive to signs of ",

  ", surtout lorsque la pression vous incite à décider avant d’avoir toutes les informations.":
    ", especially when pressure encourages you to decide before you have all the information.",

  "Ne pas laisser ":
    "Do not let ",

  " transformer une tension passagère en décision définitive. Le recul restera votre meilleur allié.":
    " turn a temporary tension into a final decision. Perspective will remain your best ally.",

  "Préserver votre énergie et vérifier que ":
    "Protect your energy and make sure ",

  " ne déforme pas votre perception de la situation.":
    " does not distort your perception of the situation.",

  "Refuser les réactions automatiques liées à ":
    "Reject automatic reactions linked to ",

  " et privilégier une réponse plus consciente, même lorsque les événements s’accélèrent.":
    " and favor a more conscious response, even when events accelerate.",

  "Les aspects majeurs de l’année":
    "The Major Aspects of the Year",

  "Les aspects présentés ici symbolisent les principales dynamiques planétaires qui colorent votre année ":
    "The aspects presented here symbolize the main planetary dynamics shaping your Year ",

  ". Ils indiquent les périodes de mouvement, de structuration et de transformation.":
    ". They indicate periods of movement, structuring, and transformation.",

  "L’ensemble de ces influences vous demande d’unir votre instinct naturel à une vision plus stratégique. Les périodes les plus intenses pourront devenir particulièrement constructives si vous acceptez d’ajuster vos méthodes.":
    "All of these influences ask you to unite your natural instinct with a more strategic vision. The most intense periods can become particularly constructive if you accept adjusting your methods.",

  "Observez les répétitions dans les événements de l’année. Elles pourront révéler le domaine précis dans lequel une transformation ou une décision devient nécessaire.":
    "Observe recurring patterns in the events of the year. They may reveal the specific area where a transformation or decision becomes necessary.",

  "Les aspects majeurs ne déterminent pas vos choix, mais ils décrivent les climats qui accompagnent votre évolution. Votre conscience et votre capacité d’adaptation resteront essentielles.":
    "The major aspects do not determine your choices, but they describe the climates accompanying your growth. Your awareness and adaptability will remain essential.",

  /* Dominant planets */
  " accentue votre rapport à ":
    " emphasizes your relationship with ",

  ". Son influence vous encourage à développer plus consciemment votre ":
    ". Its influence encourages you to develop your ",

  "L’énergie de ":
    "The energy of ",

  " met en lumière votre ":
    " highlights your ",

  " et transforme votre façon d’aborder ":
    " and transforms the way you approach ",

  " joue un rôle important dans votre évolution annuelle. Cette planète soutient votre ":
    " plays an important role in your annual growth. This planet supports your ",

  " tout en vous invitant à clarifier vos intentions.":
    " while inviting you to clarify your intentions.",

  "Sous l’influence de ":
    "Under the influence of ",

  ", le thème ":
    ", the theme of ",

  " prend une dimension nouvelle. Votre ":
    " takes on a new dimension. Your ",

  " pourra alors devenir une force particulièrement utile.":
    " can then become a particularly useful strength.",

  "La présence ":
    "The presence of ",

  " renforce les situations qui sollicitent votre ":
    " strengthens situations that call upon your ",

  ". Elle vous aide à reconnaître ce qui doit être développé, corrigé ou dépassé.":
    ". It helps you recognize what needs to be developed, corrected, or surpassed.",

  "La présence symbolique ":
    "The symbolic presence of ",

  " vous rappelle que votre progression dépend autant de votre volonté que de votre capacité à comprendre le bon moment pour agir.":
    " reminds you that your progress depends as much on your will as on your ability to understand the right time to act.",

  " vous invite à observer le rythme naturel des événements. Tout ne demande pas une action immédiate, mais chaque situation peut offrir une information utile.":
    " invites you to observe the natural rhythm of events. Not everything requires immediate action, but every situation can offer useful information.",

  "Le message ":
    "The message of ",

  " consiste à unir conscience et mouvement. Votre évolution deviendra plus fluide lorsque vos décisions respecteront à la fois vos besoins et la réalité.":
    " is to unite awareness and movement. Your growth will become smoother when your decisions respect both your needs and reality.",

  "À travers ":
    "Through ",

  ", l’année vous demande de reconnaître votre pouvoir d’action sans chercher à tout contrôler. La justesse comptera davantage que la vitesse.":
    ", the year asks you to recognize your power to act without trying to control everything. Accuracy will matter more than speed.",

  " souligne une leçon essentielle : les progrès les plus solides apparaissent lorsque l’intention, le moment et l’action avancent dans la même direction.":
    " highlights an essential lesson: the strongest progress appears when intention, timing, and action move in the same direction.",

  "Utilisez cette influence pour soutenir votre ":
    "Use this influence to support your ",

  ", sans laisser ":
    ", without letting ",

  " prendre trop de place.":
    " take up too much space.",

  "Appuyez-vous sur votre ":
    "Rely on your ",

  ", puis prenez du recul lorsque ":
    ", then step back when ",

  " menace de déséquilibrer vos décisions.":
    " threatens to unbalance your decisions.",

  "Exprimez votre ":
    "Express your ",

  " de façon constructive et observez les situations dans lesquelles ":
    " constructively and observe situations in which ",

  " pourrait limiter votre progression.":
    " could limit your progress.",

  "Canalisez l’énergie de ":
    "Channel the energy of ",

  " vers des objectifs précis. Votre ":
    " toward specific goals. Your ",

  " sera plus efficace si elle n’est pas affaiblie par ":
    " will be more effective if it is not weakened by ",

  "Faites de votre ":
    "Make your ",

  " une ressource consciente et transformez les manifestations ":
    " a conscious resource and turn manifestations of ",

  " en occasion d’ajustement.":
    " into opportunities for adjustment.",

  "Les planètes dominantes":
    "The Dominant Planets",

  "Certaines planètes exercent une influence plus marquée sur le climat de votre année ":
    "Some planets exert a stronger influence on the climate of your Year ",

  ". Elles représentent les forces que vous serez invité à développer, à maîtriser ou à intégrer.":
    ". They represent the strengths you will be invited to develop, master, or integrate.",

  " occupe une place centrale cette année. Son énergie est complétée par ":
    " plays a central role this year. Its energy is complemented by ",

  ", créant un mélange d’expansion, de réflexion et de transformation.":
    ", creating a blend of expansion, reflection, and transformation.",

  "Travaillez avec ces influences plutôt que de les subir. Chacune représente une capacité intérieure que vous pouvez utiliser de façon plus consciente.":
    "Work with these influences rather than endure them. Each represents an inner capacity that you can use more consciously.",

  "Les planètes dominantes mettent en lumière les qualités dont vous aurez le plus besoin cette année. Plus vous les exprimerez avec équilibre, plus votre progression sera harmonieuse.":
    "The dominant planets highlight the qualities you will need most this year. The more you express them with balance, the more harmonious your progress will be.",

  /* Activated houses */
  "Cette maison met l’accent sur ":
    "This house emphasizes ",

  ". Plusieurs événements pourront vous amener à revoir vos habitudes, vos attentes ou votre manière d’agir dans ce secteur.":
    ". Several events may lead you to review your habits, expectations, or way of acting in this area.",

  "Le secteur associé à cette maison prendra une importance particulière au cours de l’année. Les expériences vécues autour de ":
    "The area associated with this house will take on particular importance during the year. Experiences related to ",

  " pourront transformer vos priorités.":
    " may transform your priorities.",

  "Cette maison devient un point actif de votre évolution annuelle. Elle attire votre attention sur ":
    "This house becomes an active point in your annual growth. It draws your attention to ",

  " et vous encourage à y construire des repères plus adaptés à vos besoins actuels.":
    " and encourages you to build reference points that are better suited to your current needs.",

  "Les événements liés à ":
    "Events related to ",

  " pourront se multiplier ou gagner en intensité. Cette dynamique vous invitera à faire des choix plus conscients dans ce domaine.":
    " may multiply or intensify. This dynamic will invite you to make more conscious choices in this area.",

  "L’activation de cette maison met en lumière ":
    "The activation of this house highlights ",

  ". Ce secteur pourra devenir le théâtre d’une décision, d’un changement ou d’une consolidation importante.":
    ". This area may become the setting for an important decision, change, or consolidation.",

  "Une partie de votre progression passera cette année par ":
    "Part of your growth this year will involve ",

  ". Vous pourriez y constater une évolution graduelle, mais suffisamment profonde pour modifier votre équilibre général.":
    ". You may notice gradual but sufficiently deep changes to alter your overall balance.",

  "Faire évoluer ce domaine grâce à davantage ":
    "Develop this area through greater ",

  ". Les décisions prises avec constance pourront créer des effets durables.":
    ". Decisions made consistently can create lasting effects.",

  "Utiliser votre ":
    "Use your ",

  " pour consolider ce secteur et transformer une situation encore fragile en base plus stable.":
    " to consolidate this area and transform a still-fragile situation into a more stable foundation.",

  "Profiter des changements dans ce domaine pour exprimer votre ":
    "Use changes in this area to express your ",

  ", revoir vos priorités et ouvrir une voie plus cohérente.":
    ", review your priorities, and open a more coherent path.",

  "Développer une nouvelle manière d’aborder ":
    "Develop a new way of approaching ",

  ", en vous appuyant sur votre ":
    ", relying on your ",

  " et sur des choix concrets.":
    " and concrete choices.",

  "Reconnaître les occasions de progression qui se présentent dans ce secteur et les soutenir avec votre ":
    "Recognize opportunities for growth in this area and support them with your ",

  "Créer un meilleur équilibre dans ce domaine en transformant votre ":
    "Create better balance in this area by transforming your ",

  " en actions régulières et mesurables.":
    " into regular, measurable actions.",

  "Évitez que ":
    "Avoid letting ",

  " ne vous empêche de reconnaître les possibilités de progression présentes dans ce secteur.":
    " prevent you from recognizing opportunities for growth in this area.",

  "Restez attentif ":
    "Stay alert to ",

  ", qui pourrait vous faire sous-estimer une occasion ou retarder une décision utile.":
    ", which could cause you to underestimate an opportunity or delay a useful decision.",

  "Ne laissez pas ":
    "Do not let ",

  " définir votre manière de réagir. Un ajustement progressif sera souvent plus efficace qu’une rupture précipitée.":
    " define the way you react. A gradual adjustment will often be more effective than a rushed break.",

  "Dans ce secteur, votre principal défi sera de dépasser ":
    "In this area, your main challenge will be to move beyond ",

  " sans perdre de vue vos besoins réels.":
    " without losing sight of your real needs.",

  "Prenez du recul lorsque ":
    "Step back when ",

  " apparaît. Cette pause vous aidera à distinguer une véritable limite d’une résistance passagère.":
    " appears. This pause will help you distinguish a genuine limit from temporary resistance.",

  "Protégez votre progression contre les effets ":
    "Protect your progress from the effects of ",

  " en revenant régulièrement à vos priorités essentielles.":
    " by regularly returning to your essential priorities.",

  "Les maisons activées":
    "The Activated Houses",

  "Les maisons astrologiques représentent les grands secteurs de votre vie. Celles qui apparaissent ici seront particulièrement importantes au cours de votre année ":
    "The astrological houses represent the major areas of your life. Those shown here will be particularly important during your Year ",

  "La maison ":
    "House ",

  ", associée à ":
    ", associated with ",

  ", forme le cœur de votre évolution annuelle. Les autres maisons activées montrent comment cette dynamique se répercutera dans plusieurs dimensions de votre vie.":
    ", forms the heart of your annual growth. The other activated houses show how this dynamic will affect several dimensions of your life.",

  "Observez dans quels secteurs les changements se produisent le plus fréquemment. Ils indiqueront les domaines dans lesquels votre énergie demande à être utilisée avec davantage de conscience.":
    "Observe in which areas changes occur most frequently. They will indicate where your energy needs to be used with greater awareness.",

  "Ces maisons activées dessinent une carte de vos principales priorités. Elles vous invitent à construire un meilleur équilibre entre vos besoins personnels, vos responsabilités et vos aspirations.":
    "These activated houses outline a map of your main priorities. They invite you to build a better balance between your personal needs, responsibilities, and aspirations.",

  /* Planet areas */
  "identité, confiance et rayonnement":
    "identity, confidence and radiance",
  "émotions, intuition et sécurité intérieure":
    "emotions, intuition and inner security",
  "communication, décisions et apprentissage":
    "communication, decisions and learning",
  "relations, valeurs et harmonie":
    "relationships, values and harmony",
  "action, courage et affirmation":
    "action, courage and self-assertion",
  "expansion, opportunités et évolution":
    "expansion, opportunities and growth",
  "structure, responsabilités et maturité":
    "structure, responsibilities and maturity",
  "changement, liberté et innovation":
    "change, freedom and innovation",
  "intuition, imagination et spiritualité":
    "intuition, imagination and spirituality",
  "transformation, pouvoir personnel et régénération":
    "transformation, personal power and regeneration",
  "évolution personnelle et décisions importantes":
    "personal growth and important decisions",

  /* House areas */
  "votre identité, vos initiatives et votre manière de vous affirmer":
    "your identity, initiatives, and way of asserting yourself",
  "vos finances, vos valeurs et votre sentiment de sécurité":
    "your finances, values, and sense of security",
  "vos échanges, vos apprentissages et votre environnement proche":
    "your exchanges, learning, and immediate environment",
  "votre vie familiale, votre foyer et vos fondations émotionnelles":
    "your family life, home, and emotional foundations",
  "votre créativité, vos plaisirs et votre expression personnelle":
    "your creativity, pleasures, and personal expression",
  "vos habitudes, votre organisation et votre équilibre quotidien":
    "your habits, organization, and daily balance",
  "vos relations importantes, vos associations et vos engagements":
    "your important relationships, partnerships, and commitments",
  "vos transformations profondes, votre intimité et vos ressources partagées":
    "your deep transformations, intimacy, and shared resources",
  "vos projets d’expansion, vos convictions et votre ouverture au monde":
    "your expansion projects, beliefs, and openness to the world",
  "votre carrière, votre réputation et vos ambitions":
    "your career, reputation, and ambitions",
  "vos projets collectifs, vos amitiés et votre vision de l’avenir":
    "your collective projects, friendships, and vision of the future",
  "votre monde intérieur, votre intuition et vos processus de guérison":
    "your inner world, intuition, and healing processes",
};

/* =========================================================
   ESPAÑOL
========================================================= */

const ES: TranslationMap = {
  ...EN,

  "Cette année ouvre un cycle de progression dans lequel les choix conscients auront davantage de poids que les réactions immédiates.":
    "Este año abre un ciclo de evolución en el que las decisiones conscientes tendrán más peso que las reacciones inmediatas.",

  "L’année met en lumière plusieurs occasions de réorientation, de maturation et de consolidation personnelle.":
    "El año pone de relieve varias oportunidades de reorientación, maduración y consolidación personal.",

  "Une dynamique de transformation progressive accompagne cette période et vous invite à faire évoluer vos priorités.":
    "Una dinámica de transformación progresiva acompaña este período y te invita a hacer evolucionar tus prioridades.",

  "Cette année favorise une compréhension plus profonde de vos besoins, de vos ambitions et de vos relations.":
    "Este año favorece una comprensión más profunda de tus necesidades, ambiciones y relaciones.",

  "Le climat annuel vous encourage à unir intuition, lucidité et constance afin d’avancer avec davantage de maîtrise.":
    "El clima anual te anima a unir intuición, claridad y constancia para avanzar con mayor dominio.",

  "Les prochains mois alterneront entre phases d’expansion et moments de recentrage. Les périodes les plus constructives seront celles où vous accepterez d’avancer sans précipitation.":
    "Los próximos meses alternarán fases de expansión y momentos de reajuste. Los períodos más constructivos serán aquellos en los que aceptes avanzar sin precipitarte.",

  "Votre progression dépendra moins de la quantité d’actions entreprises que de votre capacité à choisir les projets réellement alignés avec votre évolution.":
    "Tu progreso dependerá menos de la cantidad de acciones emprendidas que de tu capacidad para elegir proyectos realmente alineados con tu evolución.",

  "L’année vous demande de renforcer ce qui est solide, de transformer ce qui ne correspond plus à vos besoins et de préserver votre énergie.":
    "El año te pide fortalecer lo que es sólido, transformar lo que ya no corresponde a tus necesidades y preservar tu energía.",

  "Plusieurs décisions importantes pourront modifier durablement votre trajectoire. Une vision claire de vos priorités sera votre meilleur repère.":
    "Varias decisiones importantes podrían modificar de forma duradera tu trayectoria. Una visión clara de tus prioridades será tu mejor referencia.",

  "La période favorise les changements réfléchis, les prises de conscience et la création de nouvelles bases plus conformes à votre identité.":
    "El período favorece los cambios reflexionados, las tomas de conciencia y la creación de nuevas bases más acordes con tu identidad.",

  "Avancez par étapes et vérifiez régulièrement que vos décisions correspondent encore à vos priorités profondes.":
    "Avanza por etapas y comprueba regularmente que tus decisiones sigan correspondiendo a tus prioridades profundas.",

  "Conservez une direction claire, mais accordez-vous la liberté d’ajuster votre stratégie lorsque les circonstances évoluent.":
    "Mantén una dirección clara, pero date la libertad de ajustar tu estrategia cuando cambien las circunstancias.",

  "Évitez de disperser votre énergie. Les résultats les plus durables viendront d’un engagement régulier envers quelques objectifs essentiels.":
    "Evita dispersar tu energía. Los resultados más duraderos surgirán de un compromiso constante con unos pocos objetivos esenciales.",

  "Écoutez vos intuitions sans négliger les faits concrets. L’équilibre entre ressenti et réalisme vous aidera à faire les meilleurs choix.":
    "Escucha tu intuición sin descuidar los hechos concretos. El equilibrio entre percepción y realismo te ayudará a tomar mejores decisiones.",

  "Donnez davantage de place à ce qui nourrit votre stabilité, votre confiance et votre sentiment de progression.":
    "Da más espacio a aquello que alimenta tu estabilidad, confianza y sensación de progreso.",

  "Cette année peut devenir une étape déterminante si vous transformez vos prises de conscience en décisions concrètes.":
    "Este año puede convertirse en una etapa decisiva si transformas tus tomas de conciencia en decisiones concretas.",

  "Votre capacité à rester fidèle à votre vision tout en évoluant avec souplesse constituera l’une de vos plus grandes forces.":
    "Tu capacidad para mantenerte fiel a tu visión y al mismo tiempo evolucionar con flexibilidad será una de tus mayores fortalezas.",

  "Les transformations les plus importantes ne seront pas toujours visibles immédiatement, mais elles prépareront un avenir plus cohérent.":
    "Las transformaciones más importantes no siempre serán visibles de inmediato, pero prepararán un futuro más coherente.",

  "En cultivant patience, discernement et constance, vous pourrez faire de cette année une période de réelle progression.":
    "Cultivando paciencia, discernimiento y constancia, podrás convertir este año en un período de verdadero progreso.",

  "L’année vous offre l’occasion de construire une trajectoire plus consciente et davantage alignée avec la personne que vous devenez.":
    "El año te ofrece la oportunidad de construir una trayectoria más consciente y más alineada con la persona en la que te estás convirtiendo.",

  " devient un thème important de l’année. Vous serez amené à lui donner une place plus consciente dans vos décisions et dans votre évolution personnelle.":
    " se convierte en un tema importante del año. Se te invitará a darle un lugar más consciente en tus decisiones y en tu evolución personal.",

  "Le domaine ": "El ámbito de ",
  " connaîtra plusieurs mouvements au cours de l’année. Une approche progressive vous permettra d’en tirer les meilleurs résultats.":
    " experimentará varios movimientos a lo largo del año. Un enfoque progresivo te permitirá obtener los mejores resultados.",

  "Votre rapport ": "Tu relación con ",
  " évoluera de manière notable. Certaines situations vous aideront à mieux comprendre ce qui mérite réellement votre énergie.":
    " evolucionará de manera notable. Algunas situaciones te ayudarán a comprender mejor qué merece realmente tu energía.",

  "Cette année favorise une nouvelle façon d’aborder ":
    "Este año favorece una nueva manera de abordar ",

  ". Les expériences vécues pourront modifier durablement vos priorités.":
    ". Las experiencias vividas podrían modificar de forma duradera tus prioridades.",

  "Votre année ": "Tu año ",

  "L’énergie dominante de votre année repose sur ":
    "La energía dominante de tu año se basa en ",

  ", soutenue par votre élément ":
    ", apoyada por tu elemento ",

  " et par la dynamique ":
    " y por la modalidad ",

  " de votre signe.":
    " de tu signo.",

  "Cette énergie stimule votre ":
    "Esta energía estimula tu ",

  " et vous encourage à développer une approche plus consciente de vos choix. Son influence pourra se manifester dans plusieurs domaines au fil de l’année.":
    " y te anima a desarrollar un enfoque más consciente de tus decisiones. Su influencia podrá manifestarse en varias áreas a lo largo del año.",

  "Le courant lié ":
    "La corriente asociada a ",

  " met en valeur votre ":
    " pone de relieve tu ",

  ". Il vous invite à avancer avec plus de discernement et à reconnaître les occasions qui correspondent réellement à vos priorités.":
    ". Te invita a avanzar con mayor discernimiento y a reconocer las oportunidades que realmente corresponden a tus prioridades.",

  "Au cours de l’année, cette dynamique renforcera votre capacité à agir avec ":
    "A lo largo del año, esta dinámica reforzará tu capacidad para actuar con ",

  ". Certaines situations vous demanderont toutefois de canaliser cette force afin de l’utiliser de façon constructive.":
    ". Algunas situaciones te pedirán, sin embargo, canalizar esta fuerza para utilizarla de manera constructiva.",

  "Cette influence soutient une évolution fondée sur davantage ":
    "Esta influencia favorece una evolución basada en una mayor ",

  ". Elle pourra modifier votre manière d’aborder vos décisions, vos relations ou vos projets personnels.":
    ". Podrá modificar tu manera de abordar tus decisiones, relaciones o proyectos personales.",

  " devient ici un véritable levier de progression. Plus vous exprimerez cette qualité avec équilibre, plus cette énergie vous aidera à construire des résultats durables.":
    " se convierte aquí en una verdadera palanca de progreso. Cuanto más expreses esta cualidad con equilibrio, más te ayudará esta energía a construir resultados duraderos.",

  "La dynamique de ":
    "La dinámica de ",

  " vous pousse à mobiliser votre ":
    " te impulsa a movilizar tu ",

  " d’une manière nouvelle. Elle favorise les choix réfléchis, les ajustements utiles et une meilleure maîtrise de votre direction.":
    " de una manera nueva. Favorece las decisiones reflexionadas, los ajustes útiles y un mayor dominio de tu dirección.",

  "Énergie dominante":
    "Energía dominante",

  "Influence complémentaire ":
    "Influencia complementaria ",

  "Les grandes énergies de l’année":
    "Las grandes energías del año",

  " est portée par plusieurs courants complémentaires. Certains favoriseront l’expansion, tandis que d’autres vous inviteront à ralentir, à observer et à restructurer vos priorités.":
    " está marcado por varias corrientes complementarias. Algunas favorecerán la expansión, mientras que otras te invitarán a reducir el ritmo, observar y reorganizar tus prioridades.",

  "L’équilibre entre votre élément ":
    "El equilibrio entre tu elemento ",

  " et votre modalité ":
    " y tu modalidad ",

  " vous permettra d’alterner entre action, adaptation et consolidation. Votre progression sera plus fluide lorsque vous respecterez votre propre rythme.":
    " te permitirá alternar entre acción, adaptación y consolidación. Tu progreso será más fluido cuando respetes tu propio ritmo.",

  "Ces différentes énergies ne s’exprimeront pas toutes au même moment. Elles formeront ensemble le mouvement général de votre année et vous aideront à avancer vers une version plus affirmée de vous-même.":
    "Estas diferentes energías no se expresarán todas al mismo tiempo. Juntas formarán el movimiento general de tu año y te ayudarán a avanzar hacia una versión más afirmada de ti mismo.",

  "Cet aspect agit sur votre capacité à développer davantage ":
    "Este aspecto actúa sobre tu capacidad para desarrollar más ",

  ". Il peut provoquer une évolution importante dans votre manière de décider et d’organiser vos priorités.":
    ". Puede provocar una evolución importante en tu manera de decidir y organizar tus prioridades.",

  "La rencontre symbolique entre ":
    "El encuentro simbólico entre ",

  " renforce votre ":
    " refuerza tu ",

  ". Elle peut vous conduire à modifier une méthode, une habitude ou une orientation devenue trop limitée.":
    ". Puede llevarte a modificar un método, un hábito o una orientación que se haya vuelto demasiado limitada.",

  "Cette configuration met en mouvement le thème ":
    "Esta configuración activa el tema de ",

  ". Son influence favorise les prises de conscience capables de transformer durablement votre manière d’agir.":
    ". Su influencia favorece tomas de conciencia capaces de transformar de forma duradera tu manera de actuar.",

  "Sous cet aspect, votre ":
    "Bajo este aspecto, tu ",

  " devient un outil essentiel. Les événements de cette période pourront vous inciter à faire des choix plus précis et mieux alignés avec vos objectifs.":
    " se convierte en una herramienta esencial. Los acontecimientos de este período podrán impulsarte a tomar decisiones más precisas y mejor alineadas con tus objetivos.",

  "L’influence de ":
    "La influencia de ",

  " crée un climat propice à une évolution intérieure ou concrète. Elle vous demande d’unir votre instinct à une vision plus structurée.":
    " crea un clima favorable para una evolución interior o concreta. Te pide unir tu instinto a una visión más estructurada.",

  "Les aspects majeurs de l’année":
    "Los aspectos principales del año",

  "Les aspects présentés ici symbolisent les principales dynamiques planétaires qui colorent votre année ":
    "Los aspectos presentados aquí simbolizan las principales dinámicas planetarias que marcan tu año ",

  ". Ils indiquent les périodes de mouvement, de structuration et de transformation.":
    ". Indican períodos de movimiento, estructuración y transformación.",

  "L’ensemble de ces influences vous demande d’unir votre instinct naturel à une vision plus stratégique. Les périodes les plus intenses pourront devenir particulièrement constructives si vous acceptez d’ajuster vos méthodes.":
    "El conjunto de estas influencias te pide unir tu instinto natural a una visión más estratégica. Los períodos más intensos podrán ser especialmente constructivos si aceptas ajustar tus métodos.",

  "Observez les répétitions dans les événements de l’année. Elles pourront révéler le domaine précis dans lequel une transformation ou une décision devient nécessaire.":
    "Observa las repeticiones en los acontecimientos del año. Podrán revelar el área precisa en la que una transformación o decisión se vuelve necesaria.",

  "Les aspects majeurs ne déterminent pas vos choix, mais ils décrivent les climats qui accompagnent votre évolution. Votre conscience et votre capacité d’adaptation resteront essentielles.":
    "Los aspectos principales no determinan tus decisiones, pero describen los climas que acompañan tu evolución. Tu conciencia y capacidad de adaptación seguirán siendo esenciales.",

  "Les planètes dominantes":
    "Los planetas dominantes",

  "Certaines planètes exercent une influence plus marquée sur le climat de votre année ":
    "Algunos planetas ejercen una influencia más marcada sobre el clima de tu año ",

  ". Elles représentent les forces que vous serez invité à développer, à maîtriser ou à intégrer.":
    ". Representan las fuerzas que se te invitará a desarrollar, dominar o integrar.",

  " occupe une place centrale cette année. Son énergie est complétée par ":
    " ocupa un lugar central este año. Su energía se complementa con ",

  ", créant un mélange d’expansion, de réflexion et de transformation.":
    ", creando una combinación de expansión, reflexión y transformación.",

  "Travaillez avec ces influences plutôt que de les subir. Chacune représente une capacité intérieure que vous pouvez utiliser de façon plus consciente.":
    "Trabaja con estas influencias en lugar de padecerlas. Cada una representa una capacidad interior que puedes utilizar de manera más consciente.",

  "Les planètes dominantes mettent en lumière les qualités dont vous aurez le plus besoin cette année. Plus vous les exprimerez avec équilibre, plus votre progression sera harmonieuse.":
    "Los planetas dominantes ponen de relieve las cualidades que más necesitarás este año. Cuanto más las expreses con equilibrio, más armonioso será tu progreso.",

  "Les maisons activées":
    "Las casas activadas",

  "Les maisons astrologiques représentent les grands secteurs de votre vie. Celles qui apparaissent ici seront particulièrement importantes au cours de votre année ":
    "Las casas astrológicas representan las grandes áreas de tu vida. Las que aparecen aquí serán especialmente importantes durante tu año ",

  "La maison ": "La casa ",

  ", associée à ":
    ", asociada con ",

  ", forme le cœur de votre évolution annuelle. Les autres maisons activées montrent comment cette dynamique se répercutera dans plusieurs dimensions de votre vie.":
    ", constituye el centro de tu evolución anual. Las otras casas activadas muestran cómo esta dinámica repercutirá en varias dimensiones de tu vida.",

  "Observez dans quels secteurs les changements se produisent le plus fréquemment. Ils indiqueront les domaines dans lesquels votre énergie demande à être utilisée avec davantage de conscience.":
    "Observa en qué áreas se producen los cambios con mayor frecuencia. Indicarán dónde tu energía necesita utilizarse con mayor conciencia.",

  "Ces maisons activées dessinent une carte de vos principales priorités. Elles vous invitent à construire un meilleur équilibre entre vos besoins personnels, vos responsabilités et vos aspirations.":
    "Estas casas activadas dibujan un mapa de tus principales prioridades. Te invitan a construir un mejor equilibrio entre tus necesidades personales, responsabilidades y aspiraciones.",

  "identité, confiance et rayonnement":
    "identidad, confianza y proyección",
  "émotions, intuition et sécurité intérieure":
    "emociones, intuición y seguridad interior",
  "communication, décisions et apprentissage":
    "comunicación, decisiones y aprendizaje",
  "relations, valeurs et harmonie":
    "relaciones, valores y armonía",
  "action, courage et affirmation":
    "acción, valentía y autoafirmación",
  "expansion, opportunités et évolution":
    "expansión, oportunidades y evolución",
  "structure, responsabilités et maturité":
    "estructura, responsabilidades y madurez",
  "changement, liberté et innovation":
    "cambio, libertad e innovación",
  "intuition, imagination et spiritualité":
    "intuición, imaginación y espiritualidad",
  "transformation, pouvoir personnel et régénération":
    "transformación, poder personal y regeneración",
  "évolution personnelle et décisions importantes":
    "evolución personal y decisiones importantes",

  "votre identité, vos initiatives et votre manière de vous affirmer":
    "tu identidad, tus iniciativas y tu manera de afirmarte",
  "vos finances, vos valeurs et votre sentiment de sécurité":
    "tus finanzas, tus valores y tu sensación de seguridad",
  "vos échanges, vos apprentissages et votre environnement proche":
    "tus intercambios, aprendizajes y entorno cercano",
  "votre vie familiale, votre foyer et vos fondations émotionnelles":
    "tu vida familiar, tu hogar y tus bases emocionales",
  "votre créativité, vos plaisirs et votre expression personnelle":
    "tu creatividad, tus placeres y tu expresión personal",
  "vos habitudes, votre organisation et votre équilibre quotidien":
    "tus hábitos, organización y equilibrio cotidiano",
  "vos relations importantes, vos associations et vos engagements":
    "tus relaciones importantes, asociaciones y compromisos",
  "vos transformations profondes, votre intimité et vos ressources partagées":
    "tus transformaciones profundas, intimidad y recursos compartidos",
  "vos projets d’expansion, vos convictions et votre ouverture au monde":
    "tus proyectos de expansión, convicciones y apertura al mundo",
  "votre carrière, votre réputation et vos ambitions":
    "tu carrera, reputación y ambiciones",
  "vos projets collectifs, vos amitiés et votre vision de l’avenir":
    "tus proyectos colectivos, amistades y visión del futuro",
  "votre monde intérieur, votre intuition et vos processus de guérison":
    "tu mundo interior, intuición y procesos de sanación",
};

/* =========================================================
   DEUTSCH
========================================================= */

const DE: TranslationMap = {
  ...EN,

  "Cette année ouvre un cycle de progression dans lequel les choix conscients auront davantage de poids que les réactions immédiates.":
    "Dieses Jahr eröffnet einen Entwicklungszyklus, in dem bewusste Entscheidungen mehr Gewicht haben als unmittelbare Reaktionen.",

  "L’année met en lumière plusieurs occasions de réorientation, de maturation et de consolidation personnelle.":
    "Das Jahr zeigt mehrere Möglichkeiten für Neuorientierung, Reifung und persönliche Festigung auf.",

  "Une dynamique de transformation progressive accompagne cette période et vous invite à faire évoluer vos priorités.":
    "Eine Dynamik schrittweiser Veränderung begleitet diese Phase und lädt Sie dazu ein, Ihre Prioritäten weiterzuentwickeln.",

  "Cette année favorise une compréhension plus profonde de vos besoins, de vos ambitions et de vos relations.":
    "Dieses Jahr begünstigt ein tieferes Verständnis Ihrer Bedürfnisse, Ambitionen und Beziehungen.",

  "Le climat annuel vous encourage à unir intuition, lucidité et constance afin d’avancer avec davantage de maîtrise.":
    "Die Energie des Jahres ermutigt Sie, Intuition, Klarheit und Beständigkeit zu verbinden, um sicherer voranzukommen.",

  "Les prochains mois alterneront entre phases d’expansion et moments de recentrage. Les périodes les plus constructives seront celles où vous accepterez d’avancer sans précipitation.":
    "Die kommenden Monate wechseln zwischen Phasen der Expansion und Momenten der Neuausrichtung. Am konstruktivsten sind die Zeiten, in denen Sie ohne Hast voranschreiten.",

  "Votre progression dépendra moins de la quantité d’actions entreprises que de votre capacité à choisir les projets réellement alignés avec votre évolution.":
    "Ihr Fortschritt hängt weniger von der Anzahl Ihrer Handlungen ab als von Ihrer Fähigkeit, Projekte zu wählen, die wirklich zu Ihrer Entwicklung passen.",

  "L’année vous demande de renforcer ce qui est solide, de transformer ce qui ne correspond plus à vos besoins et de préserver votre énergie.":
    "Das Jahr fordert Sie auf, das Stabile zu stärken, das nicht mehr zu Ihren Bedürfnissen passt zu verändern und Ihre Energie zu bewahren.",

  "Plusieurs décisions importantes pourront modifier durablement votre trajectoire. Une vision claire de vos priorités sera votre meilleur repère.":
    "Mehrere wichtige Entscheidungen können Ihren Weg nachhaltig verändern. Eine klare Sicht auf Ihre Prioritäten wird Ihre beste Orientierung sein.",

  "La période favorise les changements réfléchis, les prises de conscience et la création de nouvelles bases plus conformes à votre identité.":
    "Diese Phase begünstigt überlegte Veränderungen, Erkenntnisse und neue Grundlagen, die stärker Ihrer Identität entsprechen.",

  "Avancez par étapes et vérifiez régulièrement que vos décisions correspondent encore à vos priorités profondes.":
    "Gehen Sie Schritt für Schritt vor und prüfen Sie regelmäßig, ob Ihre Entscheidungen noch Ihren wesentlichen Prioritäten entsprechen.",

  "Conservez une direction claire, mais accordez-vous la liberté d’ajuster votre stratégie lorsque les circonstances évoluent.":
    "Behalten Sie eine klare Richtung bei, erlauben Sie sich jedoch, Ihre Strategie anzupassen, wenn sich die Umstände verändern.",

  "Évitez de disperser votre énergie. Les résultats les plus durables viendront d’un engagement régulier envers quelques objectifs essentiels.":
    "Vermeiden Sie es, Ihre Energie zu zerstreuen. Die nachhaltigsten Ergebnisse entstehen durch beständiges Engagement für einige wenige wesentliche Ziele.",

  "Écoutez vos intuitions sans négliger les faits concrets. L’équilibre entre ressenti et réalisme vous aidera à faire les meilleurs choix.":
    "Hören Sie auf Ihre Intuition, ohne konkrete Fakten zu vernachlässigen. Das Gleichgewicht zwischen Gefühl und Realismus hilft Ihnen, bessere Entscheidungen zu treffen.",

  "Donnez davantage de place à ce qui nourrit votre stabilité, votre confiance et votre sentiment de progression.":
    "Geben Sie dem mehr Raum, was Ihre Stabilität, Ihr Vertrauen und Ihr Gefühl des Fortschritts stärkt.",

  "Cette année peut devenir une étape déterminante si vous transformez vos prises de conscience en décisions concrètes.":
    "Dieses Jahr kann zu einer entscheidenden Etappe werden, wenn Sie Ihre Erkenntnisse in konkrete Entscheidungen umsetzen.",

  "Votre capacité à rester fidèle à votre vision tout en évoluant avec souplesse constituera l’une de vos plus grandes forces.":
    "Ihre Fähigkeit, Ihrer Vision treu zu bleiben und sich zugleich flexibel weiterzuentwickeln, wird eine Ihrer größten Stärken sein.",

  "Les transformations les plus importantes ne seront pas toujours visibles immédiatement, mais elles prépareront un avenir plus cohérent.":
    "Die wichtigsten Veränderungen werden nicht immer sofort sichtbar sein, aber sie bereiten eine stimmigere Zukunft vor.",

  "En cultivant patience, discernement et constance, vous pourrez faire de cette année une période de réelle progression.":
    "Mit Geduld, Urteilsvermögen und Beständigkeit können Sie dieses Jahr zu einer Phase echten Fortschritts machen.",

  "L’année vous offre l’occasion de construire une trajectoire plus consciente et davantage alignée avec la personne que vous devenez.":
    "Das Jahr bietet Ihnen die Möglichkeit, einen bewussteren Weg zu gestalten, der stärker zu der Person passt, die Sie werden.",

  " devient un thème important de l’année. Vous serez amené à lui donner une place plus consciente dans vos décisions et dans votre évolution personnelle.":
    " wird zu einem wichtigen Thema des Jahres. Sie werden eingeladen, ihm in Ihren Entscheidungen und Ihrer persönlichen Entwicklung bewusster Raum zu geben.",

  "Le domaine ": "Der Themenbereich ",
  " connaîtra plusieurs mouvements au cours de l’année. Une approche progressive vous permettra d’en tirer les meilleurs résultats.":
    " wird sich im Laufe des Jahres mehrfach verändern. Ein schrittweises Vorgehen hilft Ihnen, das Beste daraus zu machen.",

  "Votre rapport ":
    "Ihre Beziehung zu ",

  " évoluera de manière notable. Certaines situations vous aideront à mieux comprendre ce qui mérite réellement votre énergie.":
    " wird sich deutlich weiterentwickeln. Bestimmte Situationen helfen Ihnen besser zu erkennen, was Ihre Energie wirklich verdient.",

  "Cette année favorise une nouvelle façon d’aborder ":
    "Dieses Jahr fördert eine neue Art, mit ",

  ". Les expériences vécues pourront modifier durablement vos priorités.":
    " umzugehen. Ihre Erfahrungen können Ihre Prioritäten nachhaltig verändern.",

  "Votre année ": "Ihr Jahr ",

  "L’énergie dominante de votre année repose sur ":
    "Die dominante Energie Ihres Jahres basiert auf ",

  ", soutenue par votre élément ":
    ", unterstützt durch Ihr Element ",

  " et par la dynamique ":
    " und die Modalität ",

  " de votre signe.":
    " Ihres Zeichens.",

  "Énergie dominante":
    "Dominante Energie",

  "Influence complémentaire ":
    "Ergänzender Einfluss ",

  "Les grandes énergies de l’année":
    "Die großen Energien des Jahres",

  " est portée par plusieurs courants complémentaires. Certains favoriseront l’expansion, tandis que d’autres vous inviteront à ralentir, à observer et à restructurer vos priorités.":
    " wird von mehreren sich ergänzenden Strömungen geprägt. Einige fördern Expansion, andere laden Sie dazu ein, langsamer zu werden, zu beobachten und Ihre Prioritäten neu zu ordnen.",

  "L’équilibre entre votre élément ":
    "Das Gleichgewicht zwischen Ihrem Element ",

  " et votre modalité ":
    " und Ihrer Modalität ",

  " vous permettra d’alterner entre action, adaptation et consolidation. Votre progression sera plus fluide lorsque vous respecterez votre propre rythme.":
    " ermöglicht Ihnen einen Wechsel zwischen Handeln, Anpassung und Festigung. Ihr Fortschritt wird harmonischer, wenn Sie Ihren eigenen Rhythmus respektieren.",

  "Ces différentes énergies ne s’exprimeront pas toutes au même moment. Elles formeront ensemble le mouvement général de votre année et vous aideront à avancer vers une version plus affirmée de vous-même.":
    "Diese unterschiedlichen Energien zeigen sich nicht alle gleichzeitig. Gemeinsam prägen sie die allgemeine Bewegung Ihres Jahres und helfen Ihnen, sich zu einer selbstbewussteren Version Ihrer selbst zu entwickeln.",

  "Les aspects majeurs de l’année":
    "Die wichtigsten Aspekte des Jahres",

  "Les aspects présentés ici symbolisent les principales dynamiques planétaires qui colorent votre année ":
    "Die hier dargestellten Aspekte symbolisieren die wichtigsten planetarischen Dynamiken Ihres Jahres ",

  ". Ils indiquent les périodes de mouvement, de structuration et de transformation.":
    ". Sie weisen auf Phasen von Bewegung, Strukturierung und Transformation hin.",

  "L’ensemble de ces influences vous demande d’unir votre instinct naturel à une vision plus stratégique. Les périodes les plus intenses pourront devenir particulièrement constructives si vous acceptez d’ajuster vos méthodes.":
    "Diese Einflüsse fordern Sie dazu auf, Ihren natürlichen Instinkt mit einer strategischeren Sichtweise zu verbinden. Besonders intensive Phasen können sehr konstruktiv werden, wenn Sie bereit sind, Ihre Methoden anzupassen.",

  "Observez les répétitions dans les événements de l’année. Elles pourront révéler le domaine précis dans lequel une transformation ou une décision devient nécessaire.":
    "Beobachten Sie wiederkehrende Muster in den Ereignissen des Jahres. Sie können zeigen, in welchem Bereich eine Veränderung oder Entscheidung notwendig wird.",

  "Les aspects majeurs ne déterminent pas vos choix, mais ils décrivent les climats qui accompagnent votre évolution. Votre conscience et votre capacité d’adaptation resteront essentielles.":
    "Die wichtigsten Aspekte bestimmen Ihre Entscheidungen nicht, sondern beschreiben die Energien, die Ihre Entwicklung begleiten. Bewusstsein und Anpassungsfähigkeit bleiben wesentlich.",

  "Les planètes dominantes":
    "Die dominanten Planeten",

  "Certaines planètes exercent une influence plus marquée sur le climat de votre année ":
    "Einige Planeten üben einen stärkeren Einfluss auf die Atmosphäre Ihres Jahres ",

  ". Elles représentent les forces que vous serez invité à développer, à maîtriser ou à intégrer.":
    " aus. Sie stehen für Kräfte, die Sie entwickeln, beherrschen oder integrieren können.",

  " occupe une place centrale cette année. Son énergie est complétée par ":
    " nimmt in diesem Jahr eine zentrale Rolle ein. Seine Energie wird ergänzt durch ",

  ", créant un mélange d’expansion, de réflexion et de transformation.":
    ", wodurch eine Mischung aus Expansion, Reflexion und Transformation entsteht.",

  "Travaillez avec ces influences plutôt que de les subir. Chacune représente une capacité intérieure que vous pouvez utiliser de façon plus consciente.":
    "Arbeiten Sie mit diesen Einflüssen, statt sie nur zu ertragen. Jeder steht für eine innere Fähigkeit, die Sie bewusster einsetzen können.",

  "Les planètes dominantes mettent en lumière les qualités dont vous aurez le plus besoin cette année. Plus vous les exprimerez avec équilibre, plus votre progression sera harmonieuse.":
    "Die dominanten Planeten zeigen die Eigenschaften, die Sie in diesem Jahr am meisten benötigen. Je ausgewogener Sie sie ausdrücken, desto harmonischer wird Ihre Entwicklung.",

  "Les maisons activées":
    "Die aktivierten Häuser",

  "Les maisons astrologiques représentent les grands secteurs de votre vie. Celles qui apparaissent ici seront particulièrement importantes au cours de votre année ":
    "Die astrologischen Häuser stehen für die großen Lebensbereiche. Die hier dargestellten Häuser werden in Ihrem Jahr ",

  "La maison ": "Haus ",

  ", associée à ":
    ", verbunden mit ",

  ", forme le cœur de votre évolution annuelle. Les autres maisons activées montrent comment cette dynamique se répercutera dans plusieurs dimensions de votre vie.":
    ", bildet das Zentrum Ihrer jährlichen Entwicklung. Die anderen aktivierten Häuser zeigen, wie sich diese Dynamik auf verschiedene Lebensbereiche auswirkt.",

  "Observez dans quels secteurs les changements se produisent le plus fréquemment. Ils indiqueront les domaines dans lesquels votre énergie demande à être utilisée avec davantage de conscience.":
    "Beobachten Sie, in welchen Bereichen Veränderungen am häufigsten auftreten. Sie zeigen, wo Ihre Energie bewusster eingesetzt werden sollte.",

  "Ces maisons activées dessinent une carte de vos principales priorités. Elles vous invitent à construire un meilleur équilibre entre vos besoins personnels, vos responsabilités et vos aspirations.":
    "Diese aktivierten Häuser zeichnen eine Karte Ihrer wichtigsten Prioritäten. Sie laden Sie ein, ein besseres Gleichgewicht zwischen persönlichen Bedürfnissen, Verantwortlichkeiten und Zielen zu schaffen.",

  "identité, confiance et rayonnement":
    "Identität, Vertrauen und Ausstrahlung",
  "émotions, intuition et sécurité intérieure":
    "Emotionen, Intuition und innere Sicherheit",
  "communication, décisions et apprentissage":
    "Kommunikation, Entscheidungen und Lernen",
  "relations, valeurs et harmonie":
    "Beziehungen, Werte und Harmonie",
  "action, courage et affirmation":
    "Handeln, Mut und Selbstbehauptung",
  "expansion, opportunités et évolution":
    "Expansion, Chancen und Entwicklung",
  "structure, responsabilités et maturité":
    "Struktur, Verantwortung und Reife",
  "changement, liberté et innovation":
    "Veränderung, Freiheit und Innovation",
  "intuition, imagination et spiritualité":
    "Intuition, Vorstellungskraft und Spiritualität",
  "transformation, pouvoir personnel et régénération":
    "Transformation, persönliche Kraft und Regeneration",
  "évolution personnelle et décisions importantes":
    "persönliche Entwicklung und wichtige Entscheidungen",

  "votre identité, vos initiatives et votre manière de vous affirmer":
    "Ihre Identität, Ihre Initiativen und Ihre Art, sich zu behaupten",
  "vos finances, vos valeurs et votre sentiment de sécurité":
    "Ihre Finanzen, Werte und Ihr Sicherheitsgefühl",
  "vos échanges, vos apprentissages et votre environnement proche":
    "Ihre Kommunikation, Lernprozesse und Ihr unmittelbares Umfeld",
  "votre vie familiale, votre foyer et vos fondations émotionnelles":
    "Ihr Familienleben, Ihr Zuhause und Ihre emotionalen Grundlagen",
  "votre créativité, vos plaisirs et votre expression personnelle":
    "Ihre Kreativität, Ihre Freuden und Ihr persönlicher Ausdruck",
  "vos habitudes, votre organisation et votre équilibre quotidien":
    "Ihre Gewohnheiten, Organisation und tägliche Balance",
  "vos relations importantes, vos associations et vos engagements":
    "Ihre wichtigen Beziehungen, Partnerschaften und Verpflichtungen",
  "vos transformations profondes, votre intimité et vos ressources partagées":
    "Ihre tiefgreifenden Veränderungen, Intimität und gemeinsamen Ressourcen",
  "vos projets d’expansion, vos convictions et votre ouverture au monde":
    "Ihre Expansionsprojekte, Überzeugungen und Offenheit gegenüber der Welt",
  "votre carrière, votre réputation et vos ambitions":
    "Ihre Karriere, Ihr Ruf und Ihre Ambitionen",
  "vos projets collectifs, vos amitiés et votre vision de l’avenir":
    "Ihre gemeinsamen Projekte, Freundschaften und Zukunftsvision",
  "votre monde intérieur, votre intuition et vos processus de guérison":
    "Ihre innere Welt, Ihre Intuition und Ihre Heilungsprozesse",
};

/* =========================================================
   ITALIANO
========================================================= */

const IT: TranslationMap = {
  ...EN,

  "Cette année ouvre un cycle de progression dans lequel les choix conscients auront davantage de poids que les réactions immédiates.":
    "Quest’anno apre un ciclo di crescita nel quale le scelte consapevoli avranno più peso delle reazioni immediate.",

  "L’année met en lumière plusieurs occasions de réorientation, de maturation et de consolidation personnelle.":
    "L’anno mette in luce diverse opportunità di riorientamento, maturazione e consolidamento personale.",

  "Une dynamique de transformation progressive accompagne cette période et vous invite à faire évoluer vos priorités.":
    "Una dinamica di trasformazione progressiva accompagna questo periodo e ti invita a far evolvere le tue priorità.",

  "Cette année favorise une compréhension plus profonde de vos besoins, de vos ambitions et de vos relations.":
    "Quest’anno favorisce una comprensione più profonda dei tuoi bisogni, delle tue ambizioni e delle tue relazioni.",

  "Le climat annuel vous encourage à unir intuition, lucidité et constance afin d’avancer avec davantage de maîtrise.":
    "Il clima dell’anno ti incoraggia a unire intuizione, lucidità e costanza per avanzare con maggiore padronanza.",

  "Les prochains mois alterneront entre phases d’expansion et moments de recentrage. Les périodes les plus constructives seront celles où vous accepterez d’avancer sans précipitation.":
    "I prossimi mesi alterneranno fasi di espansione e momenti di ricentratura. I periodi più costruttivi saranno quelli in cui accetterai di avanzare senza fretta.",

  "Votre progression dépendra moins de la quantité d’actions entreprises que de votre capacité à choisir les projets réellement alignés avec votre évolution.":
    "I tuoi progressi dipenderanno meno dalla quantità di azioni intraprese che dalla capacità di scegliere progetti realmente allineati con la tua evoluzione.",

  "L’année vous demande de renforcer ce qui est solide, de transformer ce qui ne correspond plus à vos besoins et de préserver votre énergie.":
    "L’anno ti chiede di rafforzare ciò che è solido, trasformare ciò che non corrisponde più ai tuoi bisogni e preservare la tua energia.",

  "Plusieurs décisions importantes pourront modifier durablement votre trajectoire. Une vision claire de vos priorités sera votre meilleur repère.":
    "Diverse decisioni importanti potranno modificare in modo duraturo il tuo percorso. Una visione chiara delle tue priorità sarà il tuo miglior punto di riferimento.",

  "La période favorise les changements réfléchis, les prises de conscience et la création de nouvelles bases plus conformes à votre identité.":
    "Il periodo favorisce cambiamenti ponderati, prese di coscienza e la creazione di nuove basi più coerenti con la tua identità.",

  "Avancez par étapes et vérifiez régulièrement que vos décisions correspondent encore à vos priorités profondes.":
    "Procedi per tappe e verifica regolarmente che le tue decisioni corrispondano ancora alle tue priorità profonde.",

  "Conservez une direction claire, mais accordez-vous la liberté d’ajuster votre stratégie lorsque les circonstances évoluent.":
    "Mantieni una direzione chiara, ma concediti la libertà di adattare la strategia quando le circostanze cambiano.",

  "Évitez de disperser votre énergie. Les résultats les plus durables viendront d’un engagement régulier envers quelques objectifs essentiels.":
    "Evita di disperdere la tua energia. I risultati più duraturi nasceranno da un impegno costante verso pochi obiettivi essenziali.",

  "Écoutez vos intuitions sans négliger les faits concrets. L’équilibre entre ressenti et réalisme vous aidera à faire les meilleurs choix.":
    "Ascolta la tua intuizione senza trascurare i fatti concreti. L’equilibrio tra percezione e realismo ti aiuterà a fare scelte migliori.",

  "Donnez davantage de place à ce qui nourrit votre stabilité, votre confiance et votre sentiment de progression.":
    "Dai più spazio a ciò che alimenta la tua stabilità, la fiducia e la sensazione di progresso.",

  "Cette année peut devenir une étape déterminante si vous transformez vos prises de conscience en décisions concrètes.":
    "Quest’anno può diventare una tappa decisiva se trasformi le tue consapevolezze in decisioni concrete.",

  "Votre capacité à rester fidèle à votre vision tout en évoluant avec souplesse constituera l’une de vos plus grandes forces.":
    "La capacità di restare fedele alla tua visione evolvendo al tempo stesso con flessibilità sarà uno dei tuoi punti di forza maggiori.",

  "Les transformations les plus importantes ne seront pas toujours visibles immédiatement, mais elles prépareront un avenir plus cohérent.":
    "Le trasformazioni più importanti non saranno sempre visibili immediatamente, ma prepareranno un futuro più coerente.",

  "En cultivant patience, discernement et constance, vous pourrez faire de cette année une période de réelle progression.":
    "Coltivando pazienza, discernimento e costanza, potrai rendere quest’anno un periodo di autentica crescita.",

  "L’année vous offre l’occasion de construire une trajectoire plus consciente et davantage alignée avec la personne que vous devenez.":
    "L’anno ti offre l’opportunità di costruire un percorso più consapevole e più allineato con la persona che stai diventando.",

  " devient un thème important de l’année. Vous serez amené à lui donner une place plus consciente dans vos décisions et dans votre évolution personnelle.":
    " diventa un tema importante dell’anno. Sarai invitato a dargli uno spazio più consapevole nelle tue decisioni e nella tua crescita personale.",

  "Le domaine ": "L’ambito di ",
  " connaîtra plusieurs mouvements au cours de l’année. Une approche progressive vous permettra d’en tirer les meilleurs résultats.":
    " conoscerà diversi cambiamenti nel corso dell’anno. Un approccio progressivo ti permetterà di ottenere i risultati migliori.",

  "Votre rapport ": "Il tuo rapporto con ",
  " évoluera de manière notable. Certaines situations vous aideront à mieux comprendre ce qui mérite réellement votre énergie.":
    " evolverà in modo significativo. Alcune situazioni ti aiuteranno a capire meglio ciò che merita davvero la tua energia.",

  "Cette année favorise une nouvelle façon d’aborder ":
    "Quest’anno favorisce un nuovo modo di affrontare ",

  ". Les expériences vécues pourront modifier durablement vos priorités.":
    ". Le esperienze vissute potranno modificare in modo duraturo le tue priorità.",

  "Votre année ": "Il tuo anno ",

  "L’énergie dominante de votre année repose sur ":
    "L’energia dominante del tuo anno si basa su ",

  ", soutenue par votre élément ":
    ", sostenuta dal tuo elemento ",

  " et par la dynamique ":
    " e dalla modalità ",

  " de votre signe.":
    " del tuo segno.",

  "Énergie dominante":
    "Energia dominante",

  "Influence complémentaire ":
    "Influenza complementare ",

  "Les grandes énergies de l’année":
    "Le grandi energie dell’anno",

  " est portée par plusieurs courants complémentaires. Certains favoriseront l’expansion, tandis que d’autres vous inviteront à ralentir, à observer et à restructurer vos priorités.":
    " è caratterizzato da diverse correnti complementari. Alcune favoriranno l’espansione, mentre altre ti inviteranno a rallentare, osservare e riorganizzare le tue priorità.",

  "L’équilibre entre votre élément ":
    "L’equilibrio tra il tuo elemento ",

  " et votre modalité ":
    " e la tua modalità ",

  " vous permettra d’alterner entre action, adaptation et consolidation. Votre progression sera plus fluide lorsque vous respecterez votre propre rythme.":
    " ti permetterà di alternare azione, adattamento e consolidamento. I tuoi progressi saranno più fluidi quando rispetterai il tuo ritmo.",

  "Ces différentes énergies ne s’exprimeront pas toutes au même moment. Elles formeront ensemble le mouvement général de votre année et vous aideront à avancer vers une version plus affirmée de vous-même.":
    "Queste diverse energie non si esprimeranno tutte nello stesso momento. Insieme formeranno il movimento generale del tuo anno e ti aiuteranno ad avanzare verso una versione più consapevole e affermata di te.",

  "Les aspects majeurs de l’année":
    "Gli aspetti principali dell’anno",

  "Les aspects présentés ici symbolisent les principales dynamiques planétaires qui colorent votre année ":
    "Gli aspetti presentati qui simboleggiano le principali dinamiche planetarie che caratterizzano il tuo anno ",

  ". Ils indiquent les périodes de mouvement, de structuration et de transformation.":
    ". Indicano periodi di movimento, strutturazione e trasformazione.",

  "L’ensemble de ces influences vous demande d’unir votre instinct naturel à une vision plus stratégique. Les périodes les plus intenses pourront devenir particulièrement constructives si vous acceptez d’ajuster vos méthodes.":
    "L’insieme di queste influenze ti invita a unire il tuo istinto naturale a una visione più strategica. I periodi più intensi potranno diventare particolarmente costruttivi se accetterai di adattare i tuoi metodi.",

  "Observez les répétitions dans les événements de l’année. Elles pourront révéler le domaine précis dans lequel une transformation ou une décision devient nécessaire.":
    "Osserva ciò che si ripete negli eventi dell’anno. Potrebbe rivelare l’ambito preciso in cui una trasformazione o una decisione diventa necessaria.",

  "Les aspects majeurs ne déterminent pas vos choix, mais ils décrivent les climats qui accompagnent votre évolution. Votre conscience et votre capacité d’adaptation resteront essentielles.":
    "Gli aspetti principali non determinano le tue scelte, ma descrivono i climi che accompagnano la tua evoluzione. Consapevolezza e capacità di adattamento resteranno essenziali.",

  "Les planètes dominantes":
    "I pianeti dominanti",

  "Certaines planètes exercent une influence plus marquée sur le climat de votre année ":
    "Alcuni pianeti esercitano un’influenza più marcata sul clima del tuo anno ",

  ". Elles représentent les forces que vous serez invité à développer, à maîtriser ou à intégrer.":
    ". Rappresentano le forze che sarai invitato a sviluppare, padroneggiare o integrare.",

  " occupe une place centrale cette année. Son énergie est complétée par ":
    " occupa un ruolo centrale quest’anno. La sua energia è completata da ",

  ", créant un mélange d’expansion, de réflexion et de transformation.":
    ", creando una combinazione di espansione, riflessione e trasformazione.",

  "Travaillez avec ces influences plutôt que de les subir. Chacune représente une capacité intérieure que vous pouvez utiliser de façon plus consciente.":
    "Lavora con queste influenze invece di subirle. Ognuna rappresenta una capacità interiore che puoi utilizzare in modo più consapevole.",

  "Les planètes dominantes mettent en lumière les qualités dont vous aurez le plus besoin cette année. Plus vous les exprimerez avec équilibre, plus votre progression sera harmonieuse.":
    "I pianeti dominanti mettono in luce le qualità di cui avrai più bisogno quest’anno. Più le esprimerai con equilibrio, più armoniosa sarà la tua evoluzione.",

  "Les maisons activées":
    "Le case attivate",

  "Les maisons astrologiques représentent les grands secteurs de votre vie. Celles qui apparaissent ici seront particulièrement importantes au cours de votre année ":
    "Le case astrologiche rappresentano i grandi ambiti della tua vita. Quelle indicate qui saranno particolarmente importanti durante il tuo anno ",

  "La maison ": "La casa ",

  ", associée à ":
    ", associata a ",

  ", forme le cœur de votre évolution annuelle. Les autres maisons activées montrent comment cette dynamique se répercutera dans plusieurs dimensions de votre vie.":
    ", costituisce il cuore della tua evoluzione annuale. Le altre case attivate mostrano come questa dinamica influenzerà diverse dimensioni della tua vita.",

  "Observez dans quels secteurs les changements se produisent le plus fréquemment. Ils indiqueront les domaines dans lesquels votre énergie demande à être utilisée avec davantage de conscience.":
    "Osserva in quali ambiti i cambiamenti si verificano più spesso. Indicheranno dove la tua energia ha bisogno di essere utilizzata con maggiore consapevolezza.",

  "Ces maisons activées dessinent une carte de vos principales priorités. Elles vous invitent à construire un meilleur équilibre entre vos besoins personnels, vos responsabilités et vos aspirations.":
    "Queste case attivate delineano una mappa delle tue principali priorità. Ti invitano a costruire un equilibrio migliore tra bisogni personali, responsabilità e aspirazioni.",

  "identité, confiance et rayonnement":
    "identità, fiducia e presenza",
  "émotions, intuition et sécurité intérieure":
    "emozioni, intuizione e sicurezza interiore",
  "communication, décisions et apprentissage":
    "comunicazione, decisioni e apprendimento",
  "relations, valeurs et harmonie":
    "relazioni, valori e armonia",
  "action, courage et affirmation":
    "azione, coraggio e autoaffermazione",
  "expansion, opportunités et évolution":
    "espansione, opportunità ed evoluzione",
  "structure, responsabilités et maturité":
    "struttura, responsabilità e maturità",
  "changement, liberté et innovation":
    "cambiamento, libertà e innovazione",
  "intuition, imagination et spiritualité":
    "intuizione, immaginazione e spiritualità",
  "transformation, pouvoir personnel et régénération":
    "trasformazione, potere personale e rigenerazione",
  "évolution personnelle et décisions importantes":
    "evoluzione personale e decisioni importanti",

  "votre identité, vos initiatives et votre manière de vous affirmer":
    "la tua identità, le tue iniziative e il tuo modo di affermarti",
  "vos finances, vos valeurs et votre sentiment de sécurité":
    "le tue finanze, i tuoi valori e il tuo senso di sicurezza",
  "vos échanges, vos apprentissages et votre environnement proche":
    "i tuoi scambi, apprendimenti e ambiente vicino",
  "votre vie familiale, votre foyer et vos fondations émotionnelles":
    "la tua vita familiare, la tua casa e le tue basi emotive",
  "votre créativité, vos plaisirs et votre expression personnelle":
    "la tua creatività, i tuoi piaceri e la tua espressione personale",
  "vos habitudes, votre organisation et votre équilibre quotidien":
    "le tue abitudini, organizzazione ed equilibrio quotidiano",
  "vos relations importantes, vos associations et vos engagements":
    "le tue relazioni importanti, collaborazioni e impegni",
  "vos transformations profondes, votre intimité et vos ressources partagées":
    "le tue trasformazioni profonde, intimità e risorse condivise",
  "vos projets d’expansion, vos convictions et votre ouverture au monde":
    "i tuoi progetti di espansione, convinzioni e apertura al mondo",
  "votre carrière, votre réputation et vos ambitions":
    "la tua carriera, reputazione e ambizioni",
  "vos projets collectifs, vos amitiés et votre vision de l’avenir":
    "i tuoi progetti collettivi, amicizie e visione del futuro",
  "votre monde intérieur, votre intuition et vos processus de guérison":
    "il tuo mondo interiore, intuizione e processi di guarigione",
};

/* =========================================================
   PORTUGUÊS BRASILEIRO
========================================================= */

const PT: TranslationMap = {
  ...EN,

  "Cette année ouvre un cycle de progression dans lequel les choix conscients auront davantage de poids que les réactions immédiates.":
    "Este ano abre um ciclo de crescimento no qual as escolhas conscientes terão mais peso do que as reações imediatas.",

  "L’année met en lumière plusieurs occasions de réorientation, de maturation et de consolidation personnelle.":
    "O ano destaca várias oportunidades de reorientação, amadurecimento e consolidação pessoal.",

  "Une dynamique de transformation progressive accompagne cette période et vous invite à faire évoluer vos priorités.":
    "Uma dinâmica de transformação gradual acompanha este período e convida você a rever suas prioridades.",

  "Cette année favorise une compréhension plus profonde de vos besoins, de vos ambitions et de vos relations.":
    "Este ano favorece uma compreensão mais profunda das suas necessidades, ambições e relações.",

  "Le climat annuel vous encourage à unir intuition, lucidité et constance afin d’avancer avec davantage de maîtrise.":
    "O clima do ano incentiva você a unir intuição, clareza e constância para avançar com maior domínio.",

  "Les prochains mois alterneront entre phases d’expansion et moments de recentrage. Les périodes les plus constructives seront celles où vous accepterez d’avancer sans précipitation.":
    "Os próximos meses alternarão entre fases de expansão e momentos de recentramento. Os períodos mais construtivos serão aqueles em que você aceitar avançar sem pressa.",

  "Votre progression dépendra moins de la quantité d’actions entreprises que de votre capacité à choisir les projets réellement alignés avec votre évolution.":
    "Seu progresso dependerá menos da quantidade de ações realizadas e mais da sua capacidade de escolher projetos realmente alinhados com sua evolução.",

  "L’année vous demande de renforcer ce qui est solide, de transformer ce qui ne correspond plus à vos besoins et de préserver votre énergie.":
    "O ano pede que você fortaleça o que é sólido, transforme o que já não corresponde às suas necessidades e preserve sua energia.",

  "Plusieurs décisions importantes pourront modifier durablement votre trajectoire. Une vision claire de vos priorités sera votre meilleur repère.":
    "Várias decisões importantes poderão modificar sua trajetória de forma duradoura. Uma visão clara das suas prioridades será sua melhor referência.",

  "La période favorise les changements réfléchis, les prises de conscience et la création de nouvelles bases plus conformes à votre identité.":
    "O período favorece mudanças refletidas, tomadas de consciência e a criação de novas bases mais alinhadas com sua identidade.",

  "Avancez par étapes et vérifiez régulièrement que vos décisions correspondent encore à vos priorités profondes.":
    "Avance por etapas e verifique regularmente se suas decisões ainda correspondem às suas prioridades mais profundas.",

  "Conservez une direction claire, mais accordez-vous la liberté d’ajuster votre stratégie lorsque les circonstances évoluent.":
    "Mantenha uma direção clara, mas permita-se ajustar sua estratégia quando as circunstâncias mudarem.",

  "Évitez de disperser votre énergie. Les résultats les plus durables viendront d’un engagement régulier envers quelques objectifs essentiels.":
    "Evite dispersar sua energia. Os resultados mais duradouros virão de um compromisso constante com alguns objetivos essenciais.",

  "Écoutez vos intuitions sans négliger les faits concrets. L’équilibre entre ressenti et réalisme vous aidera à faire les meilleurs choix.":
    "Escute sua intuição sem negligenciar os fatos concretos. O equilíbrio entre percepção e realismo ajudará você a fazer escolhas melhores.",

  "Donnez davantage de place à ce qui nourrit votre stabilité, votre confiance et votre sentiment de progression.":
    "Dê mais espaço ao que fortalece sua estabilidade, sua confiança e sua sensação de progresso.",

  "Cette année peut devenir une étape déterminante si vous transformez vos prises de conscience en décisions concrètes.":
    "Este ano pode se tornar uma etapa decisiva se você transformar suas percepções em decisões concretas.",

  "Votre capacité à rester fidèle à votre vision tout en évoluant avec souplesse constituera l’une de vos plus grandes forces.":
    "Sua capacidade de permanecer fiel à sua visão enquanto evolui com flexibilidade será uma das suas maiores forças.",

  "Les transformations les plus importantes ne seront pas toujours visibles immédiatement, mais elles prépareront un avenir plus cohérent.":
    "As transformações mais importantes nem sempre serão visíveis imediatamente, mas prepararão um futuro mais coerente.",

  "En cultivant patience, discernement et constance, vous pourrez faire de cette année une période de réelle progression.":
    "Ao cultivar paciência, discernimento e constância, você poderá transformar este ano em um período de verdadeiro progresso.",

  "L’année vous offre l’occasion de construire une trajectoire plus consciente et davantage alignée avec la personne que vous devenez.":
    "O ano oferece a oportunidade de construir um caminho mais consciente e mais alinhado com a pessoa que você está se tornando.",

  " devient un thème important de l’année. Vous serez amené à lui donner une place plus consciente dans vos décisions et dans votre évolution personnelle.":
    " se torna um tema importante do ano. Você será convidado a dar a ele um espaço mais consciente nas suas decisões e no seu desenvolvimento pessoal.",

  "Le domaine ": "A área de ",
  " connaîtra plusieurs mouvements au cours de l’année. Une approche progressive vous permettra d’en tirer les meilleurs résultats.":
    " passará por vários movimentos ao longo do ano. Uma abordagem gradual permitirá obter os melhores resultados.",

  "Votre rapport ": "Sua relação com ",
  " évoluera de manière notable. Certaines situations vous aideront à mieux comprendre ce qui mérite réellement votre énergie.":
    " evoluirá de forma significativa. Algumas situações ajudarão você a compreender melhor o que realmente merece sua energia.",

  "Cette année favorise une nouvelle façon d’aborder ":
    "Este ano favorece uma nova maneira de abordar ",

  ". Les expériences vécues pourront modifier durablement vos priorités.":
    ". As experiências vividas poderão modificar suas prioridades de forma duradoura.",

  "Votre année ": "Seu ano ",

  "L’énergie dominante de votre année repose sur ":
    "A energia dominante do seu ano se baseia em ",

  ", soutenue par votre élément ":
    ", apoiada pelo seu elemento ",

  " et par la dynamique ":
    " e pela modalidade ",

  " de votre signe.":
    " do seu signo.",

  "Énergie dominante":
    "Energia dominante",

  "Influence complémentaire ":
    "Influência complementar ",

  "Les grandes énergies de l’année":
    "As grandes energias do ano",

  " est portée par plusieurs courants complémentaires. Certains favoriseront l’expansion, tandis que d’autres vous inviteront à ralentir, à observer et à restructurer vos priorités.":
    " é marcado por várias correntes complementares. Algumas favorecerão a expansão, enquanto outras convidarão você a desacelerar, observar e reorganizar suas prioridades.",

  "L’équilibre entre votre élément ":
    "O equilíbrio entre seu elemento ",

  " et votre modalité ":
    " e sua modalidade ",

  " vous permettra d’alterner entre action, adaptation et consolidation. Votre progression sera plus fluide lorsque vous respecterez votre propre rythme.":
    " permitirá alternar entre ação, adaptação e consolidação. Seu progresso será mais fluido quando você respeitar seu próprio ritmo.",

  "Ces différentes énergies ne s’exprimeront pas toutes au même moment. Elles formeront ensemble le mouvement général de votre année et vous aideront à avancer vers une version plus affirmée de vous-même.":
    "Essas diferentes energias não se manifestarão todas ao mesmo tempo. Juntas formarão o movimento geral do seu ano e ajudarão você a avançar em direção a uma versão mais afirmada de si mesmo.",

  "Les aspects majeurs de l’année":
    "Os principais aspectos do ano",

  "Les aspects présentés ici symbolisent les principales dynamiques planétaires qui colorent votre année ":
    "Os aspectos apresentados aqui simbolizam as principais dinâmicas planetárias que marcam seu ano ",

  ". Ils indiquent les périodes de mouvement, de structuration et de transformation.":
    ". Eles indicam períodos de movimento, estruturação e transformação.",

  "L’ensemble de ces influences vous demande d’unir votre instinct naturel à une vision plus stratégique. Les périodes les plus intenses pourront devenir particulièrement constructives si vous acceptez d’ajuster vos méthodes.":
    "O conjunto dessas influências pede que você una seu instinto natural a uma visão mais estratégica. Os períodos mais intensos poderão ser especialmente construtivos se você aceitar ajustar seus métodos.",

  "Observez les répétitions dans les événements de l’année. Elles pourront révéler le domaine précis dans lequel une transformation ou une décision devient nécessaire.":
    "Observe o que se repete nos acontecimentos do ano. Isso poderá revelar a área específica em que uma transformação ou decisão se torna necessária.",

  "Les aspects majeurs ne déterminent pas vos choix, mais ils décrivent les climats qui accompagnent votre évolution. Votre conscience et votre capacité d’adaptation resteront essentielles.":
    "Os principais aspectos não determinam suas escolhas, mas descrevem os climas que acompanham sua evolução. Sua consciência e capacidade de adaptação continuarão essenciais.",

  "Les planètes dominantes":
    "Os planetas dominantes",

  "Certaines planètes exercent une influence plus marquée sur le climat de votre année ":
    "Alguns planetas exercem uma influência mais marcante sobre o clima do seu ano ",

  ". Elles représentent les forces que vous serez invité à développer, à maîtriser ou à intégrer.":
    ". Eles representam as forças que você será convidado a desenvolver, dominar ou integrar.",

  " occupe une place centrale cette année. Son énergie est complétée par ":
    " ocupa um lugar central neste ano. Sua energia é complementada por ",

  ", créant un mélange d’expansion, de réflexion et de transformation.":
    ", criando uma combinação de expansão, reflexão e transformação.",

  "Travaillez avec ces influences plutôt que de les subir. Chacune représente une capacité intérieure que vous pouvez utiliser de façon plus consciente.":
    "Trabalhe com essas influências em vez de apenas suportá-las. Cada uma representa uma capacidade interior que você pode utilizar de forma mais consciente.",

  "Les planètes dominantes mettent en lumière les qualités dont vous aurez le plus besoin cette année. Plus vous les exprimerez avec équilibre, plus votre progression sera harmonieuse.":
    "Os planetas dominantes destacam as qualidades de que você mais precisará neste ano. Quanto mais você as expressar com equilíbrio, mais harmonioso será seu progresso.",

  "Les maisons activées":
    "As casas ativadas",

  "Les maisons astrologiques représentent les grands secteurs de votre vie. Celles qui apparaissent ici seront particulièrement importantes au cours de votre année ":
    "As casas astrológicas representam as grandes áreas da sua vida. As que aparecem aqui serão especialmente importantes durante seu ano ",

  "La maison ": "A casa ",

  ", associée à ":
    ", associada a ",

  ", forme le cœur de votre évolution annuelle. Les autres maisons activées montrent comment cette dynamique se répercutera dans plusieurs dimensions de votre vie.":
    ", forma o centro da sua evolução anual. As outras casas ativadas mostram como essa dinâmica repercutirá em várias dimensões da sua vida.",

  "Observez dans quels secteurs les changements se produisent le plus fréquemment. Ils indiqueront les domaines dans lesquels votre énergie demande à être utilisée avec davantage de conscience.":
    "Observe em quais áreas as mudanças acontecem com maior frequência. Elas indicarão onde sua energia precisa ser utilizada com mais consciência.",

  "Ces maisons activées dessinent une carte de vos principales priorités. Elles vous invitent à construire un meilleur équilibre entre vos besoins personnels, vos responsabilités et vos aspirations.":
    "Essas casas ativadas desenham um mapa das suas principais prioridades. Elas convidam você a construir um equilíbrio melhor entre necessidades pessoais, responsabilidades e aspirações.",

  "identité, confiance et rayonnement":
    "identidade, confiança e presença",
  "émotions, intuition et sécurité intérieure":
    "emoções, intuição e segurança interior",
  "communication, décisions et apprentissage":
    "comunicação, decisões e aprendizado",
  "relations, valeurs et harmonie":
    "relacionamentos, valores e harmonia",
  "action, courage et affirmation":
    "ação, coragem e autoafirmação",
  "expansion, opportunités et évolution":
    "expansão, oportunidades e evolução",
  "structure, responsabilités et maturité":
    "estrutura, responsabilidades e maturidade",
  "changement, liberté et innovation":
    "mudança, liberdade e inovação",
  "intuition, imagination et spiritualité":
    "intuição, imaginação e espiritualidade",
  "transformation, pouvoir personnel et régénération":
    "transformação, poder pessoal e regeneração",
  "évolution personnelle et décisions importantes":
    "evolução pessoal e decisões importantes",

  "votre identité, vos initiatives et votre manière de vous affirmer":
    "sua identidade, suas iniciativas e sua maneira de se afirmar",
  "vos finances, vos valeurs et votre sentiment de sécurité":
    "suas finanças, seus valores e sua sensação de segurança",
  "vos échanges, vos apprentissages et votre environnement proche":
    "suas trocas, aprendizados e ambiente próximo",
  "votre vie familiale, votre foyer et vos fondations émotionnelles":
    "sua vida familiar, seu lar e suas bases emocionais",
  "votre créativité, vos plaisirs et votre expression personnelle":
    "sua criatividade, seus prazeres e sua expressão pessoal",
  "vos habitudes, votre organisation et votre équilibre quotidien":
    "seus hábitos, sua organização e seu equilíbrio diário",
  "vos relations importantes, vos associations et vos engagements":
    "seus relacionamentos importantes, parcerias e compromissos",
  "vos transformations profondes, votre intimité et vos ressources partagées":
    "suas transformações profundas, sua intimidade e seus recursos compartilhados",
  "vos projets d’expansion, vos convictions et votre ouverture au monde":
    "seus projetos de expansão, suas convicções e sua abertura ao mundo",
  "votre carrière, votre réputation et vos ambitions":
    "sua carreira, sua reputação e suas ambições",
  "vos projets collectifs, vos amitiés et votre vision de l’avenir":
    "seus projetos coletivos, suas amizades e sua visão do futuro",
  "votre monde intérieur, votre intuition et vos processus de guérison":
    "seu mundo interior, sua intuição e seus processos de cura",
};

/* =========================================================
   LOCALE MAP
========================================================= */

const PHRASES: Record<
  Exclude<PaidPdfLocale, "fr">,
  TranslationMap
> = {
  en: EN,
  es: ES,
  de: DE,
  it: IT,
  pt: PT,
};

/* =========================================================
   PLANET OBJECT KEYS
========================================================= */

const PLANET_KEYS: Record<
  Exclude<PaidPdfLocale, "fr">,
  TranslationMap
> = {
  en: {
    "Soleil:": "Sun:",
    "Lune:": "Moon:",
    "Mercure:": "Mercury:",
    "Vénus:": "Venus:",
    "Mars:": "Mars:",
    "Jupiter:": "Jupiter:",
    "Saturne:": "Saturn:",
    "Uranus:": "Uranus:",
    "Neptune:": "Neptune:",
    "Pluton:": "Pluto:",
  },

  es: {
    "Soleil:": "Sol:",
    "Lune:": "Luna:",
    "Mercure:": "Mercurio:",
    "Vénus:": "Venus:",
    "Mars:": "Marte:",
    "Jupiter:": "Júpiter:",
    "Saturne:": "Saturno:",
    "Uranus:": "Urano:",
    "Neptune:": "Neptuno:",
    "Pluton:": "Plutón:",
  },

  de: {
    "Soleil:": "Sonne:",
    "Lune:": "Mond:",
    "Mercure:": "Merkur:",
    "Vénus:": "Venus:",
    "Mars:": "Mars:",
    "Jupiter:": "Jupiter:",
    "Saturne:": "Saturn:",
    "Uranus:": "Uranus:",
    "Neptune:": "Neptun:",
    "Pluton:": "Pluto:",
  },

  it: {
    "Soleil:": "Sole:",
    "Lune:": "Luna:",
    "Mercure:": "Mercurio:",
    "Vénus:": "Venere:",
    "Mars:": "Marte:",
    "Jupiter:": "Giove:",
    "Saturne:": "Saturno:",
    "Uranus:": "Urano:",
    "Neptune:": "Nettuno:",
    "Pluton:": "Plutone:",
  },

  pt: {
    "Soleil:": "Sol:",
    "Lune:": "Lua:",
    "Mercure:": "Mercúrio:",
    "Vénus:": "Vênus:",
    "Mars:": "Marte:",
    "Jupiter:": "Júpiter:",
    "Saturne:": "Saturno:",
    "Uranus:": "Urano:",
    "Neptune:": "Netuno:",
    "Pluton:": "Plutão:",
  },
};

/* =========================================================
   LOCALIZER
========================================================= */

export function localizeYearAnnualPages(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let output =
    neutralizeFrenchGrammarHelpers(
      source,
    );

  /*
   * 1. Traduire les phrases longues AVANT les petites
   *    valeurs dynamiques.
   */
  output = applyTranslations(
    output,
    PHRASES[locale],
  );

  /*
   * 2. Traduire les valeurs entre guillemets :
   *    signes, forces, défis, planètes, éléments,
   *    maisons, titres d’énergie, etc.
   */
  output = applyQuotedTranslations(
    output,
    VALUES[locale],
  );

  /*
   * 3. Les clés de PLANET_AREAS ne sont pas entre
   *    guillemets dans le fichier source.
   */
  output = applyTranslations(
    output,
    PLANET_KEYS[locale],
  );

  /*
   * 4. Le fallback du prénom.
   */
  const fallbackName: Record<
    Exclude<PaidPdfLocale, "fr">,
    string
  > = {
    en: "you",
    es: "tú",
    de: "Sie",
    it: "tu",
    pt: "você",
  };

  output = output
    .split('return normalizedName || "vous";')
    .join(
      `return normalizedName || "${fallbackName[locale]}";`,
    );

  return output;
}
