import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type DynamicCategory =
  | "same-sign"
  | "same-element"
  | "complementary"
  | "different";

type LocaleData = {
  text: Record<string, string>;
  signs: Record<string, string>;
  elements: Record<string, string>;
  planets: Record<string, string>;
  aspects: Record<string, string>;
  aspectNatures: Record<string, string>;
  emotionalNeeds: Record<string, string>;
  moonCompatibility: Record<
    DynamicCategory,
    string
  >;
  aspectInterpretations: Record<
    string,
    Record<
      "harmonious" | "challenging" | "neutral",
      string
    >
  >;
  moonIn: string;
  withMoonIn: string;
  needsOf: string;
  elementWord: string;
  orbWord: string;
};

const TRANSLATIONS: Record<
  NonFrenchLocale,
  LocaleData
> = {
  en: {
    text: {
      "Non précisé": "Not specified",
      "Élément non précisé": "Element not specified",
      "Première personne": "First person",
      "Deuxième personne": "Second person",
      "la première personne": "the first person",
      "la deuxième personne": "the second person",
      "Monde affectif": "Emotional world",
      "Votre compatibilité émotionnelle":
        "Your emotional compatibility",
      "La Lune révèle ce dont chacun a besoin pour se sentir compris, rassuré et profondément en confiance dans la relation.":
        "The Moon reveals what each person needs to feel understood, reassured, and deeply secure in the relationship.",
      "Besoins affectifs et sécurité intérieure":
        "Emotional needs and inner security",
      "La rencontre de vos deux Lunes":
        "The meeting of your two Moons",
      "Cette comparaison décrit la façon dont vos sensibilités naturelles se reconnaissent, se complètent ou demandent des ajustements.":
        "This comparison describes how your natural sensitivities recognize and complement one another, or require adjustment.",
      "Votre dynamique affective":
        "Your emotional dynamic",
      "Ce dont chacun a besoin pour se sentir aimé":
        "What each person needs to feel loved",
      "Vos principales interactions émotionnelles":
        "Your main emotional interactions",
      "Créer un climat de sécurité":
        "Creating a sense of security",
      "Votre équilibre émotionnel repose moins sur le fait de réagir de la même manière que sur votre capacité à reconnaître les besoins de l’autre. Lorsque chacun se sent entendu sans être jugé, les différences de sensibilité peuvent devenir une source de profondeur, de tendresse et de confiance.":
        "Your emotional balance depends less on reacting in the same way than on your ability to recognize each other's needs. When both people feel heard without being judged, differences in sensitivity can become a source of depth, tenderness, and trust.",
      "Votre clé émotionnelle":
        "Your emotional key",
      "Ne présumez pas que l’autre se sent aimé de la même façon que vous. Exprimer clairement vos besoins, vos limites et vos attentes permet d’éviter que le silence ou les réactions différentes soient interprétés comme un manque d’affection.":
        "Do not assume that the other person feels loved in the same way you do. Clearly expressing your needs, boundaries, and expectations helps prevent silence or different reactions from being interpreted as a lack of affection.",
      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastry report",
      "Les données disponibles ne permettent pas encore de préciser entièrement ses besoins émotionnels.":
        "The available data does not yet allow their emotional needs to be fully specified.",
      "Les données disponibles ne permettent pas encore de produire une interprétation émotionnelle entièrement personnalisée.":
        "The available data does not yet allow a fully personalized emotional interpretation.",
      "Harmonie naturelle":
        "Natural harmony",
      "Connexion intense":
        "Intense connection",
      "Complémentarité":
        "Complementarity",
      "Zone d’ajustement":
        "Area of adjustment",
      "Influence relationnelle":
        "Relationship influence",
      "Aspect": "Aspect",
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
      Aries: "Aries",
      Taurus: "Taurus",
      Gemini: "Gemini",
      Leo: "Leo",
      Virgo: "Virgo",
      Libra: "Libra",
      Scorpio: "Scorpio",
      Sagittarius: "Sagittarius",
      Capricorn: "Capricorn",
      Aquarius: "Aquarius",
      Pisces: "Pisces",
    },

    elements: {
      Feu: "Fire",
      Terre: "Earth",
      Air: "Air",
      Eau: "Water",
      "Élément non précisé":
        "Element not specified",
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
      Trigone: "Trine",
      Sextile: "Sextile",
      Opposition: "Opposition",
      Carré: "Square",
      Quinconce: "Quincunx",
      Aspect: "Aspect",
    },

    aspectNatures: {
      "Harmonie naturelle":
        "Natural harmony",
      "Connexion intense":
        "Intense connection",
      Complémentarité:
        "Complementarity",
      "Zone d’ajustement":
        "Area of adjustment",
      "Influence relationnelle":
        "Relationship influence",
    },

    emotionalNeeds: {
      belier:
        "Needs spontaneity, authenticity, and the freedom to express emotions quickly without feeling restrained.",
      taureau:
        "Seeks stability, loyalty, tenderness, and concrete signs of emotional security.",
      gemeaux:
        "Needs conversation, lightness, curiosity, and the ability to put emotions into words.",
      cancer:
        "Seeks deep closeness, tenderness, protection, and a profoundly reassuring atmosphere.",
      lion:
        "Needs warmth, recognition, loyalty, and to feel visibly loved.",
      vierge:
        "Seeks reliability, helpful gestures, attention to detail, and a coherent emotional daily life.",
      balance:
        "Needs harmony, dialogue, tact, and a relationship in which both people feel considered.",
      scorpion:
        "Seeks intensity, absolute trust, authenticity, and genuine emotional depth.",
      sagittaire:
        "Needs freedom, optimism, honesty, and a bond that leaves room to grow.",
      capricorne:
        "Seeks consistency, respect, maturity, and a relationship that can be built over time.",
      verseau:
        "Needs independence, intellectual understanding, and a relationship that respects individuality.",
      poissons:
        "Seeks compassion, tenderness, intuition, and an emotional bond in which they can feel fully understood.",
    },

    moonCompatibility: {
      "same-sign":
        "Your two Moons in {sign1} reveal very similar emotional needs. You can instinctively recognize each other's reactions, sensitivities, and emotional expectations. This familiarity encourages closeness, but it can also amplify shared defense mechanisms.",
      "same-element":
        "Your Moons in {sign1} and {sign2} both belong to the element {element1}. You therefore share a fundamental way of experiencing and processing emotions. Even if your reactions are not identical, you can usually understand what the other person needs to feel secure.",
      complementary:
        "The Moons in {sign1} and {sign2} express different but complementary needs. The {element1} energy brings its own way of reacting, while the {element2} energy can provide what it lacks. This dynamic becomes especially enriching when each person accepts that the other does not express emotions in the same way.",
      different:
        "Your Moons in {sign1} and {sign2} operate at different emotional rhythms. One person may need to react immediately while the other prefers to step back, analyze, or protect themselves. The relationship becomes more stable when each person learns to recognize the other's emotional language without interpreting it as rejection.",
    },

    aspectInterpretations: {
      Lune: {
        harmonious:
          "Your emotional reactions can naturally understand and support one another.",
        challenging:
          "Your emotional needs may differ and require more conscious listening.",
        neutral:
          "This connection intensifies sensitivity and emotional resonance between you.",
      },
      Vénus: {
        harmonious:
          "Affection and tenderness can naturally meet emotional needs.",
        challenging:
          "The way love is expressed may not always immediately match emotional expectations.",
        neutral:
          "Love, tenderness, and sensitivity play an important role in your bond.",
      },
      Mars: {
        harmonious:
          "Desire and action can stimulate emotional expression in a lively way.",
        challenging:
          "Impulsive reactions can sometimes hurt the other person's sensitivity.",
        neutral:
          "This connection creates strong reactivity, blending emotion, desire, and instinct.",
      },
      Saturne: {
        harmonious:
          "Saturn can bring stability, reliability, and security to the Moon's emotions.",
        challenging:
          "The Moon may sometimes experience Saturn as distant, demanding, or emotionally reserved.",
        neutral:
          "This interaction highlights themes of security, responsibility, and emotional commitment.",
      },
      Soleil: {
        harmonious:
          "One person's identity can naturally reassure and support the other's emotional needs.",
        challenging:
          "One person's self-expression may sometimes conflict with the other's sensitivity.",
        neutral:
          "The Sun illuminates the Moon's emotions and creates a strong sense of recognition.",
      },
      default: {
        harmonious:
          "This aspect supports a more fluid emotional exchange between you.",
        challenging:
          "This aspect requires more conscious emotional adjustment and listening.",
        neutral:
          "This aspect influences how your emotions respond to the other person's personal energies.",
      },
    },

    moonIn: "Moon in",
    withMoonIn: "With a Moon in",
    needsOf: "The needs of",
    elementWord: "Element",
    orbWord: "orb",
  },

  es: {
    text: {
      "Non précisé": "No especificado",
      "Élément non précisé":
        "Elemento no especificado",
      "Première personne":
        "Primera persona",
      "Deuxième personne":
        "Segunda persona",
      "la première personne":
        "la primera persona",
      "la deuxième personne":
        "la segunda persona",
      "Monde affectif":
        "Mundo afectivo",
      "Votre compatibilité émotionnelle":
        "Su compatibilidad emocional",
      "La Lune révèle ce dont chacun a besoin pour se sentir compris, rassuré et profondément en confiance dans la relation.":
        "La Luna revela lo que cada persona necesita para sentirse comprendida, tranquilizada y profundamente segura en la relación.",
      "Besoins affectifs et sécurité intérieure":
        "Necesidades afectivas y seguridad interior",
      "La rencontre de vos deux Lunes":
        "El encuentro de sus dos Lunas",
      "Cette comparaison décrit la façon dont vos sensibilités naturelles se reconnaissent, se complètent ou demandent des ajustements.":
        "Esta comparación describe cómo sus sensibilidades naturales se reconocen, se complementan o requieren ajustes.",
      "Votre dynamique affective":
        "Su dinámica afectiva",
      "Ce dont chacun a besoin pour se sentir aimé":
        "Lo que cada persona necesita para sentirse amada",
      "Vos principales interactions émotionnelles":
        "Sus principales interacciones emocionales",
      "Créer un climat de sécurité":
        "Crear un clima de seguridad",
      "Votre équilibre émotionnel repose moins sur le fait de réagir de la même manière que sur votre capacité à reconnaître les besoins de l’autre. Lorsque chacun se sent entendu sans être jugé, les différences de sensibilité peuvent devenir une source de profondeur, de tendresse et de confiance.":
        "Su equilibrio emocional depende menos de reaccionar de la misma manera que de su capacidad para reconocer las necesidades del otro. Cuando ambos se sienten escuchados sin ser juzgados, las diferencias de sensibilidad pueden convertirse en una fuente de profundidad, ternura y confianza.",
      "Votre clé émotionnelle":
        "Su clave emocional",
      "Ne présumez pas que l’autre se sent aimé de la même façon que vous. Exprimer clairement vos besoins, vos limites et vos attentes permet d’éviter que le silence ou les réactions différentes soient interprétés comme un manque d’affection.":
        "No dé por sentado que la otra persona se siente amada de la misma manera que usted. Expresar claramente sus necesidades, límites y expectativas ayuda a evitar que el silencio o las reacciones diferentes se interpreten como falta de afecto.",
      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Informe de sinastría",
      "Les données disponibles ne permettent pas encore de préciser entièrement ses besoins émotionnels.":
        "Los datos disponibles todavía no permiten precisar por completo sus necesidades emocionales.",
      "Les données disponibles ne permettent pas encore de produire une interprétation émotionnelle entièrement personnalisée.":
        "Los datos disponibles todavía no permiten producir una interpretación emocional completamente personalizada.",
      "Harmonie naturelle":
        "Armonía natural",
      "Connexion intense":
        "Conexión intensa",
      "Complémentarité":
        "Complementariedad",
      "Zone d’ajustement":
        "Zona de ajuste",
      "Influence relationnelle":
        "Influencia relacional",
      "Aspect": "Aspecto",
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
      Aries: "Aries",
      Taurus: "Tauro",
      Gemini: "Géminis",
      Leo: "Leo",
      Virgo: "Virgo",
      Libra: "Libra",
      Scorpio: "Escorpio",
      Sagittarius: "Sagitario",
      Capricorn: "Capricornio",
      Aquarius: "Acuario",
      Pisces: "Piscis",
    },

    elements: {
      Feu: "Fuego",
      Terre: "Tierra",
      Air: "Aire",
      Eau: "Agua",
      "Élément non précisé":
        "Elemento no especificado",
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
      Trigone: "Trígono",
      Sextile: "Sextil",
      Opposition: "Oposición",
      Carré: "Cuadratura",
      Quinconce: "Quincuncio",
      Aspect: "Aspecto",
    },

    aspectNatures: {
      "Harmonie naturelle":
        "Armonía natural",
      "Connexion intense":
        "Conexión intensa",
      Complémentarité:
        "Complementariedad",
      "Zone d’ajustement":
        "Zona de ajuste",
      "Influence relationnelle":
        "Influencia relacional",
    },

    emotionalNeeds: {
      belier:
        "Necesita espontaneidad, autenticidad y poder expresar rápidamente sus emociones sin sentirse limitado.",
      taureau:
        "Busca estabilidad, fidelidad, ternura y pruebas concretas de seguridad afectiva.",
      gemeaux:
        "Necesita conversación, ligereza, curiosidad y poder expresar sus emociones con palabras.",
      cancer:
        "Busca una gran cercanía, ternura, protección y un clima profundamente tranquilizador.",
      lion:
        "Necesita calidez, reconocimiento, lealtad y sentirse amado de forma visible.",
      vierge:
        "Busca fiabilidad, gestos útiles, atención a los detalles y una vida afectiva cotidiana coherente.",
      balance:
        "Necesita armonía, diálogo, delicadeza y una relación en la que ambos se sientan considerados.",
      scorpion:
        "Busca intensidad, confianza absoluta, autenticidad y una verdadera profundidad emocional.",
      sagittaire:
        "Necesita libertad, optimismo, honestidad y un vínculo que deje espacio para evolucionar.",
      capricorne:
        "Busca constancia, respeto, madurez y una relación capaz de construirse con el tiempo.",
      verseau:
        "Necesita independencia, comprensión intelectual y una relación que respete su singularidad.",
      poissons:
        "Busca compasión, ternura, intuición y un vínculo emocional en el que pueda sentirse plenamente comprendido.",
    },

    moonCompatibility: {
      "same-sign":
        "Sus dos Lunas en {sign1} revelan necesidades emocionales muy similares. Pueden reconocer instintivamente las reacciones, sensibilidades y expectativas afectivas del otro. Esta familiaridad favorece la cercanía, pero también puede amplificar mecanismos de defensa compartidos.",
      "same-element":
        "Sus Lunas en {sign1} y {sign2} pertenecen al mismo elemento, {element1}. Comparten por tanto una manera fundamental de vivir y procesar las emociones. Aunque sus reacciones no sean idénticas, suelen comprender lo que la otra persona necesita para sentirse segura.",
      complementary:
        "Las Lunas en {sign1} y {sign2} expresan necesidades diferentes pero complementarias. La energía de {element1} aporta su propia forma de reaccionar, mientras que la energía de {element2} puede ofrecer lo que le falta. Esta dinámica se vuelve especialmente enriquecedora cuando cada persona acepta que la otra no expresa las emociones de la misma manera.",
      different:
        "Sus Lunas en {sign1} y {sign2} funcionan con ritmos emocionales diferentes. Una persona puede necesitar reaccionar de inmediato mientras la otra prefiere tomar distancia, analizar o protegerse. La relación gana estabilidad cuando cada persona aprende a reconocer el lenguaje emocional de la otra sin interpretarlo como rechazo.",
    },

    aspectInterpretations: {
      Lune: {
        harmonious:
          "Sus reacciones emocionales pueden comprenderse y apoyarse naturalmente.",
        challenging:
          "Sus necesidades afectivas pueden diferir y requerir una escucha más consciente.",
        neutral:
          "Esta conexión intensifica la sensibilidad y la resonancia emocional entre ustedes.",
      },
      Vénus: {
        harmonious:
          "El afecto y la ternura pueden responder naturalmente a las necesidades emocionales.",
        challenging:
          "La forma de amar puede no corresponder inmediatamente a las expectativas afectivas.",
        neutral:
          "El amor, la ternura y la sensibilidad ocupan un lugar importante en su vínculo.",
      },
      Mars: {
        harmonious:
          "El deseo y la acción pueden estimular la expresión emocional de forma viva.",
        challenging:
          "Las reacciones impulsivas pueden herir a veces la sensibilidad de la otra persona.",
        neutral:
          "Esta conexión crea una fuerte reactividad que mezcla emoción, deseo e instinto.",
      },
      Saturne: {
        harmonious:
          "Saturno puede aportar estabilidad, fiabilidad y seguridad a las emociones de la Luna.",
        challenging:
          "La Luna puede percibir a Saturno como distante, exigente o poco demostrativo.",
        neutral:
          "Esta interacción destaca temas de seguridad, responsabilidad y compromiso emocional.",
      },
      Soleil: {
        harmonious:
          "La identidad de una persona puede tranquilizar y apoyar naturalmente las necesidades emocionales de la otra.",
        challenging:
          "La expresión personal de una persona puede entrar a veces en conflicto con la sensibilidad de la otra.",
        neutral:
          "El Sol ilumina las emociones de la Luna y crea un fuerte sentimiento de reconocimiento.",
      },
      default: {
        harmonious:
          "Este aspecto favorece un intercambio emocional más fluido entre ustedes.",
        challenging:
          "Este aspecto requiere más ajuste emocional consciente y escucha.",
        neutral:
          "Este aspecto influye en la forma en que sus emociones reaccionan a las energías personales del otro.",
      },
    },

    moonIn: "Luna en",
    withMoonIn: "Con una Luna en",
    needsOf: "Las necesidades de",
    elementWord: "Elemento",
    orbWord: "orbe",
  },

  de: {
    text: {
      "Non précisé":
        "Nicht angegeben",
      "Élément non précisé":
        "Element nicht angegeben",
      "Première personne":
        "Erste Person",
      "Deuxième personne":
        "Zweite Person",
      "la première personne":
        "die erste Person",
      "la deuxième personne":
        "die zweite Person",
      "Monde affectif":
        "Gefühlswelt",
      "Votre compatibilité émotionnelle":
        "Ihre emotionale Kompatibilität",
      "La Lune révèle ce dont chacun a besoin pour se sentir compris, rassuré et profondément en confiance dans la relation.":
        "Der Mond zeigt, was jeder braucht, um sich verstanden, beruhigt und in der Beziehung tief geborgen zu fühlen.",
      "Besoins affectifs et sécurité intérieure":
        "Emotionale Bedürfnisse und innere Sicherheit",
      "La rencontre de vos deux Lunes":
        "Die Begegnung Ihrer beiden Monde",
      "Cette comparaison décrit la façon dont vos sensibilités naturelles se reconnaissent, se complètent ou demandent des ajustements.":
        "Dieser Vergleich beschreibt, wie Ihre natürlichen Empfindsamkeiten einander erkennen, ergänzen oder Anpassungen erfordern.",
      "Votre dynamique affective":
        "Ihre emotionale Dynamik",
      "Ce dont chacun a besoin pour se sentir aimé":
        "Was jeder braucht, um sich geliebt zu fühlen",
      "Vos principales interactions émotionnelles":
        "Ihre wichtigsten emotionalen Wechselwirkungen",
      "Créer un climat de sécurité":
        "Ein Gefühl von Sicherheit schaffen",
      "Votre équilibre émotionnel repose moins sur le fait de réagir de la même manière que sur votre capacité à reconnaître les besoins de l’autre. Lorsque chacun se sent entendu sans être jugé, les différences de sensibilité peuvent devenir une source de profondeur, de tendresse et de confiance.":
        "Ihr emotionales Gleichgewicht hängt weniger davon ab, gleich zu reagieren, als davon, die Bedürfnisse des anderen zu erkennen. Wenn sich beide gehört fühlen, ohne beurteilt zu werden, können unterschiedliche Empfindsamkeiten zu einer Quelle von Tiefe, Zärtlichkeit und Vertrauen werden.",
      "Votre clé émotionnelle":
        "Ihr emotionaler Schlüssel",
      "Ne présumez pas que l’autre se sent aimé de la même façon que vous. Exprimer clairement vos besoins, vos limites et vos attentes permet d’éviter que le silence ou les réactions différentes soient interprétés comme un manque d’affection.":
        "Gehen Sie nicht davon aus, dass sich der andere auf dieselbe Weise geliebt fühlt wie Sie. Wenn Sie Bedürfnisse, Grenzen und Erwartungen klar ausdrücken, vermeiden Sie, dass Schweigen oder unterschiedliche Reaktionen als mangelnde Zuneigung verstanden werden.",
      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastrie-Bericht",
      "Les données disponibles ne permettent pas encore de préciser entièrement ses besoins émotionnels.":
        "Die verfügbaren Daten reichen noch nicht aus, um die emotionalen Bedürfnisse vollständig zu bestimmen.",
      "Les données disponibles ne permettent pas encore de produire une interprétation émotionnelle entièrement personnalisée.":
        "Die verfügbaren Daten reichen noch nicht aus, um eine vollständig personalisierte emotionale Deutung zu erstellen.",
      "Harmonie naturelle":
        "Natürliche Harmonie",
      "Connexion intense":
        "Intensive Verbindung",
      "Complémentarité":
        "Ergänzung",
      "Zone d’ajustement":
        "Anpassungsbereich",
      "Influence relationnelle":
        "Beziehungseinfluss",
      "Aspect": "Aspekt",
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
      Aries: "Widder",
      Taurus: "Stier",
      Gemini: "Zwillinge",
      Leo: "Löwe",
      Virgo: "Jungfrau",
      Libra: "Waage",
      Scorpio: "Skorpion",
      Sagittarius: "Schütze",
      Capricorn: "Steinbock",
      Aquarius: "Wassermann",
      Pisces: "Fische",
    },

    elements: {
      Feu: "Feuer",
      Terre: "Erde",
      Air: "Luft",
      Eau: "Wasser",
      "Élément non précisé":
        "Element nicht angegeben",
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
      Trigone: "Trigon",
      Sextile: "Sextil",
      Opposition: "Opposition",
      Carré: "Quadrat",
      Quinconce: "Quinkunx",
      Aspect: "Aspekt",
    },

    aspectNatures: {
      "Harmonie naturelle":
        "Natürliche Harmonie",
      "Connexion intense":
        "Intensive Verbindung",
      Complémentarité:
        "Ergänzung",
      "Zone d’ajustement":
        "Anpassungsbereich",
      "Influence relationnelle":
        "Beziehungseinfluss",
    },

    emotionalNeeds: {
      belier:
        "Braucht Spontaneität, Authentizität und die Freiheit, Gefühle schnell auszudrücken, ohne sich gebremst zu fühlen.",
      taureau:
        "Sucht Stabilität, Treue, Zärtlichkeit und konkrete Zeichen emotionaler Sicherheit.",
      gemeaux:
        "Braucht Austausch, Leichtigkeit, Neugier und die Möglichkeit, Gefühle in Worte zu fassen.",
      cancer:
        "Sucht große Nähe, Zärtlichkeit, Schutz und eine tief beruhigende Atmosphäre.",
      lion:
        "Braucht Wärme, Anerkennung, Loyalität und das Gefühl, sichtbar geliebt zu werden.",
      vierge:
        "Sucht Verlässlichkeit, hilfreiche Gesten, Aufmerksamkeit für Details und einen stimmigen emotionalen Alltag.",
      balance:
        "Braucht Harmonie, Dialog, Feingefühl und eine Beziehung, in der sich beide berücksichtigt fühlen.",
      scorpion:
        "Sucht Intensität, absolutes Vertrauen, Authentizität und echte emotionale Tiefe.",
      sagittaire:
        "Braucht Freiheit, Optimismus, Ehrlichkeit und eine Verbindung, die Raum zur Entwicklung lässt.",
      capricorne:
        "Sucht Beständigkeit, Respekt, Reife und eine Beziehung, die langfristig aufgebaut werden kann.",
      verseau:
        "Braucht Unabhängigkeit, intellektuelles Verständnis und eine Beziehung, die die eigene Besonderheit respektiert.",
      poissons:
        "Sucht Mitgefühl, Zärtlichkeit, Intuition und eine emotionale Verbindung, in der vollständiges Verstandenwerden möglich ist.",
    },

    moonCompatibility: {
      "same-sign":
        "Ihre beiden Monde in {sign1} zeigen sehr ähnliche emotionale Bedürfnisse. Sie können die Reaktionen, Empfindsamkeiten und emotionalen Erwartungen des anderen instinktiv erkennen. Diese Vertrautheit fördert Nähe, kann aber auch gemeinsame Abwehrmechanismen verstärken.",
      "same-element":
        "Ihre Monde in {sign1} und {sign2} gehören beide zum Element {element1}. Sie teilen daher eine grundlegende Art, Gefühle zu erleben und zu verarbeiten. Auch wenn Ihre Reaktionen nicht identisch sind, können Sie meist verstehen, was der andere braucht, um sich sicher zu fühlen.",
      complementary:
        "Die Monde in {sign1} und {sign2} drücken unterschiedliche, aber ergänzende Bedürfnisse aus. Die Energie von {element1} bringt ihre eigene Reaktionsweise mit, während die Energie von {element2} das ergänzen kann, was fehlt. Diese Dynamik wird besonders bereichernd, wenn beide akzeptieren, dass Gefühle unterschiedlich gezeigt werden.",
      different:
        "Ihre Monde in {sign1} und {sign2} folgen unterschiedlichen emotionalen Rhythmen. Eine Person muss vielleicht sofort reagieren, während die andere Abstand braucht, analysiert oder sich schützt. Die Beziehung wird stabiler, wenn beide die emotionale Sprache des anderen erkennen, ohne sie als Zurückweisung zu deuten.",
    },

    aspectInterpretations: {
      Lune: {
        harmonious:
          "Ihre emotionalen Reaktionen können einander auf natürliche Weise verstehen und unterstützen.",
        challenging:
          "Ihre emotionalen Bedürfnisse können unterschiedlich sein und bewussteres Zuhören erfordern.",
        neutral:
          "Diese Verbindung verstärkt Sensibilität und emotionale Resonanz zwischen Ihnen.",
      },
      Vénus: {
        harmonious:
          "Zuneigung und Zärtlichkeit können emotionale Bedürfnisse auf natürliche Weise erfüllen.",
        challenging:
          "Die Art, Liebe zu zeigen, entspricht nicht immer sofort den emotionalen Erwartungen.",
        neutral:
          "Liebe, Zärtlichkeit und Sensibilität spielen in Ihrer Verbindung eine wichtige Rolle.",
      },
      Mars: {
        harmonious:
          "Verlangen und Handeln können den emotionalen Ausdruck lebendig anregen.",
        challenging:
          "Impulsive Reaktionen können manchmal die Sensibilität des anderen verletzen.",
        neutral:
          "Diese Verbindung erzeugt starke Reaktivität und verbindet Emotion, Verlangen und Instinkt.",
      },
      Saturne: {
        harmonious:
          "Saturn kann den Gefühlen des Mondes Stabilität, Verlässlichkeit und Sicherheit geben.",
        challenging:
          "Der Mond kann Saturn manchmal als distanziert, fordernd oder wenig demonstrativ erleben.",
        neutral:
          "Diese Wechselwirkung betont Themen wie Sicherheit, Verantwortung und emotionale Verbindlichkeit.",
      },
      Soleil: {
        harmonious:
          "Die Identität einer Person kann die emotionalen Bedürfnisse der anderen auf natürliche Weise beruhigen und unterstützen.",
        challenging:
          "Der persönliche Ausdruck einer Person kann manchmal mit der Sensibilität der anderen in Konflikt geraten.",
        neutral:
          "Die Sonne beleuchtet die Gefühle des Mondes und schafft ein starkes Gefühl des Wiedererkennens.",
      },
      default: {
        harmonious:
          "Dieser Aspekt unterstützt einen flüssigeren emotionalen Austausch zwischen Ihnen.",
        challenging:
          "Dieser Aspekt verlangt mehr bewusste emotionale Anpassung und Zuhören.",
        neutral:
          "Dieser Aspekt beeinflusst, wie Ihre Gefühle auf die persönlichen Energien des anderen reagieren.",
      },
    },

    moonIn: "Mond in",
    withMoonIn: "Mit einem Mond in",
    needsOf: "Die Bedürfnisse von",
    elementWord: "Element",
    orbWord: "Orb",
  },

  it: {
    text: {
      "Non précisé":
        "Non specificato",
      "Élément non précisé":
        "Elemento non specificato",
      "Première personne":
        "Prima persona",
      "Deuxième personne":
        "Seconda persona",
      "la première personne":
        "la prima persona",
      "la deuxième personne":
        "la seconda persona",
      "Monde affectif":
        "Mondo affettivo",
      "Votre compatibilité émotionnelle":
        "La vostra compatibilità emotiva",
      "La Lune révèle ce dont chacun a besoin pour se sentir compris, rassuré et profondément en confiance dans la relation.":
        "La Luna rivela ciò di cui ciascuno ha bisogno per sentirsi compreso, rassicurato e profondamente al sicuro nella relazione.",
      "Besoins affectifs et sécurité intérieure":
        "Bisogni affettivi e sicurezza interiore",
      "La rencontre de vos deux Lunes":
        "L'incontro delle vostre due Lune",
      "Cette comparaison décrit la façon dont vos sensibilités naturelles se reconnaissent, se complètent ou demandent des ajustements.":
        "Questo confronto descrive il modo in cui le vostre sensibilità naturali si riconoscono, si completano o richiedono adattamenti.",
      "Votre dynamique affective":
        "La vostra dinamica affettiva",
      "Ce dont chacun a besoin pour se sentir aimé":
        "Ciò di cui ciascuno ha bisogno per sentirsi amato",
      "Vos principales interactions émotionnelles":
        "Le vostre principali interazioni emotive",
      "Créer un climat de sécurité":
        "Creare un clima di sicurezza",
      "Votre équilibre émotionnel repose moins sur le fait de réagir de la même manière que sur votre capacité à reconnaître les besoins de l’autre. Lorsque chacun se sent entendu sans être jugé, les différences de sensibilité peuvent devenir une source de profondeur, de tendresse et de confiance.":
        "Il vostro equilibrio emotivo dipende meno dal reagire allo stesso modo che dalla capacità di riconoscere i bisogni dell'altro. Quando entrambi si sentono ascoltati senza essere giudicati, le differenze di sensibilità possono diventare una fonte di profondità, tenerezza e fiducia.",
      "Votre clé émotionnelle":
        "La vostra chiave emotiva",
      "Ne présumez pas que l’autre se sent aimé de la même façon que vous. Exprimer clairement vos besoins, vos limites et vos attentes permet d’éviter que le silence ou les réactions différentes soient interprétés comme un manque d’affection.":
        "Non date per scontato che l'altra persona si senta amata nello stesso modo in cui vi sentite voi. Esprimere chiaramente bisogni, limiti e aspettative aiuta a evitare che il silenzio o reazioni diverse vengano interpretati come mancanza di affetto.",
      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Rapporto di sinastria",
      "Les données disponibles ne permettent pas encore de préciser entièrement ses besoins émotionnels.":
        "I dati disponibili non consentono ancora di precisare completamente i bisogni emotivi.",
      "Les données disponibles ne permettent pas encore de produire une interprétation émotionnelle entièrement personnalisée.":
        "I dati disponibili non consentono ancora di produrre un'interpretazione emotiva completamente personalizzata.",
      "Harmonie naturelle":
        "Armonia naturale",
      "Connexion intense":
        "Connessione intensa",
      "Complémentarité":
        "Complementarità",
      "Zone d’ajustement":
        "Area di adattamento",
      "Influence relationnelle":
        "Influenza relazionale",
      "Aspect": "Aspetto",
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
      Aries: "Ariete",
      Taurus: "Toro",
      Gemini: "Gemelli",
      Leo: "Leone",
      Virgo: "Vergine",
      Libra: "Bilancia",
      Scorpio: "Scorpione",
      Sagittarius: "Sagittario",
      Capricorn: "Capricorno",
      Aquarius: "Acquario",
      Pisces: "Pesci",
    },

    elements: {
      Feu: "Fuoco",
      Terre: "Terra",
      Air: "Aria",
      Eau: "Acqua",
      "Élément non précisé":
        "Elemento non specificato",
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
      Trigone: "Trigono",
      Sextile: "Sestile",
      Opposition: "Opposizione",
      Carré: "Quadratura",
      Quinconce: "Quinconce",
      Aspect: "Aspetto",
    },

    aspectNatures: {
      "Harmonie naturelle":
        "Armonia naturale",
      "Connexion intense":
        "Connessione intensa",
      Complémentarité:
        "Complementarità",
      "Zone d’ajustement":
        "Area di adattamento",
      "Influence relationnelle":
        "Influenza relazionale",
    },

    emotionalNeeds: {
      belier:
        "Ha bisogno di spontaneità, autenticità e della libertà di esprimere rapidamente le emozioni senza sentirsi frenato.",
      taureau:
        "Cerca stabilità, fedeltà, dolcezza e prove concrete di sicurezza affettiva.",
      gemeaux:
        "Ha bisogno di dialogo, leggerezza, curiosità e della possibilità di mettere le emozioni in parole.",
      cancer:
        "Cerca grande vicinanza, tenerezza, protezione e un clima profondamente rassicurante.",
      lion:
        "Ha bisogno di calore, riconoscimento, lealtà e di sentirsi amato in modo visibile.",
      vierge:
        "Cerca affidabilità, gesti utili, attenzione ai dettagli e una quotidianità affettiva coerente.",
      balance:
        "Ha bisogno di armonia, dialogo, delicatezza e di una relazione in cui entrambi si sentano considerati.",
      scorpion:
        "Cerca intensità, fiducia assoluta, autenticità e una vera profondità emotiva.",
      sagittaire:
        "Ha bisogno di libertà, ottimismo, sincerità e di un legame che lasci spazio alla crescita.",
      capricorne:
        "Cerca costanza, rispetto, maturità e una relazione capace di costruirsi nel tempo.",
      verseau:
        "Ha bisogno di indipendenza, comprensione intellettuale e di una relazione che rispetti la propria unicità.",
      poissons:
        "Cerca compassione, dolcezza, intuizione e un legame emotivo in cui possa sentirsi pienamente compreso.",
    },

    moonCompatibility: {
      "same-sign":
        "Le vostre due Lune in {sign1} rivelano bisogni emotivi molto simili. Potete riconoscere istintivamente le reazioni, le sensibilità e le aspettative affettive dell'altro. Questa familiarità favorisce la vicinanza, ma può anche amplificare meccanismi di difesa condivisi.",
      "same-element":
        "Le vostre Lune in {sign1} e {sign2} appartengono entrambe all'elemento {element1}. Condividete quindi un modo fondamentale di vivere e elaborare le emozioni. Anche se le vostre reazioni non sono identiche, potete generalmente capire ciò di cui l'altro ha bisogno per sentirsi al sicuro.",
      complementary:
        "Le Lune in {sign1} e {sign2} esprimono bisogni diversi ma complementari. L'energia {element1} porta il proprio modo di reagire, mentre l'energia {element2} può offrire ciò che manca. Questa dinamica diventa particolarmente arricchente quando ciascuno accetta che l'altro non manifesti le emozioni nello stesso modo.",
      different:
        "Le vostre Lune in {sign1} e {sign2} funzionano secondo ritmi emotivi diversi. Una persona può avere bisogno di reagire immediatamente mentre l'altra preferisce prendere le distanze, analizzare o proteggersi. La relazione acquista stabilità quando ciascuno impara a riconoscere il linguaggio emotivo dell'altro senza interpretarlo come un rifiuto.",
    },

    aspectInterpretations: {
      Lune: {
        harmonious:
          "Le vostre reazioni emotive possono comprendersi e sostenersi naturalmente.",
        challenging:
          "I vostri bisogni affettivi possono differire e richiedere un ascolto più consapevole.",
        neutral:
          "Questa connessione intensifica la sensibilità e la risonanza emotiva tra voi.",
      },
      Vénus: {
        harmonious:
          "Affetto e tenerezza possono rispondere naturalmente ai bisogni emotivi.",
        challenging:
          "Il modo di amare può non corrispondere immediatamente alle aspettative affettive.",
        neutral:
          "Amore, dolcezza e sensibilità occupano un posto importante nel vostro legame.",
      },
      Mars: {
        harmonious:
          "Desiderio e azione possono stimolare l'espressione emotiva in modo vivace.",
        challenging:
          "Le reazioni impulsive possono talvolta ferire la sensibilità dell'altra persona.",
        neutral:
          "Questa connessione crea una forte reattività, unendo emozione, desiderio e istinto.",
      },
      Saturne: {
        harmonious:
          "Saturno può portare stabilità, affidabilità e sicurezza alle emozioni della Luna.",
        challenging:
          "La Luna può talvolta percepire Saturno come distante, esigente o poco dimostrativo.",
        neutral:
          "Questa interazione sottolinea temi di sicurezza, responsabilità e impegno emotivo.",
      },
      Soleil: {
        harmonious:
          "L'identità di una persona può rassicurare e sostenere naturalmente i bisogni emotivi dell'altra.",
        challenging:
          "L'espressione personale di una persona può talvolta entrare in conflitto con la sensibilità dell'altra.",
        neutral:
          "Il Sole illumina le emozioni della Luna e crea un forte senso di riconoscimento.",
      },
      default: {
        harmonious:
          "Questo aspetto sostiene uno scambio emotivo più fluido tra voi.",
        challenging:
          "Questo aspetto richiede più adattamento emotivo consapevole e ascolto.",
        neutral:
          "Questo aspetto influenza il modo in cui le vostre emozioni reagiscono alle energie personali dell'altro.",
      },
    },

    moonIn: "Luna in",
    withMoonIn: "Con una Luna in",
    needsOf: "I bisogni di",
    elementWord: "Elemento",
    orbWord: "orbita",
  },

  pt: {
    text: {
      "Non précisé":
        "Não especificado",
      "Élément non précisé":
        "Elemento não especificado",
      "Première personne":
        "Primeira pessoa",
      "Deuxième personne":
        "Segunda pessoa",
      "la première personne":
        "a primeira pessoa",
      "la deuxième personne":
        "a segunda pessoa",
      "Monde affectif":
        "Mundo afetivo",
      "Votre compatibilité émotionnelle":
        "A sua compatibilidade emocional",
      "La Lune révèle ce dont chacun a besoin pour se sentir compris, rassuré et profondément en confiance dans la relation.":
        "A Lua revela aquilo de que cada pessoa precisa para se sentir compreendida, tranquilizada e profundamente segura na relação.",
      "Besoins affectifs et sécurité intérieure":
        "Necessidades afetivas e segurança interior",
      "La rencontre de vos deux Lunes":
        "O encontro das suas duas Luas",
      "Cette comparaison décrit la façon dont vos sensibilités naturelles se reconnaissent, se complètent ou demandent des ajustements.":
        "Esta comparação descreve a forma como as suas sensibilidades naturais se reconhecem, se complementam ou exigem ajustes.",
      "Votre dynamique affective":
        "A sua dinâmica afetiva",
      "Ce dont chacun a besoin pour se sentir aimé":
        "Aquilo de que cada pessoa precisa para se sentir amada",
      "Vos principales interactions émotionnelles":
        "As suas principais interações emocionais",
      "Créer un climat de sécurité":
        "Criar um ambiente de segurança",
      "Votre équilibre émotionnel repose moins sur le fait de réagir de la même manière que sur votre capacité à reconnaître les besoins de l’autre. Lorsque chacun se sent entendu sans être jugé, les différences de sensibilité peuvent devenir une source de profondeur, de tendresse et de confiance.":
        "O seu equilíbrio emocional depende menos de reagirem da mesma forma do que da capacidade de reconhecerem as necessidades um do outro. Quando ambos se sentem ouvidos sem serem julgados, as diferenças de sensibilidade podem tornar-se uma fonte de profundidade, ternura e confiança.",
      "Votre clé émotionnelle":
        "A sua chave emocional",
      "Ne présumez pas que l’autre se sent aimé de la même façon que vous. Exprimer clairement vos besoins, vos limites et vos attentes permet d’éviter que le silence ou les réactions différentes soient interprétés comme un manque d’affection.":
        "Não presuma que a outra pessoa se sente amada da mesma forma que você. Expressar claramente as suas necessidades, limites e expectativas ajuda a evitar que o silêncio ou reações diferentes sejam interpretados como falta de afeto.",
      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Relatório de sinastria",
      "Les données disponibles ne permettent pas encore de préciser entièrement ses besoins émotionnels.":
        "Os dados disponíveis ainda não permitem especificar totalmente as necessidades emocionais.",
      "Les données disponibles ne permettent pas encore de produire une interprétation émotionnelle entièrement personnalisée.":
        "Os dados disponíveis ainda não permitem produzir uma interpretação emocional totalmente personalizada.",
      "Harmonie naturelle":
        "Harmonia natural",
      "Connexion intense":
        "Conexão intensa",
      "Complémentarité":
        "Complementaridade",
      "Zone d’ajustement":
        "Área de ajuste",
      "Influence relationnelle":
        "Influência relacional",
      "Aspect": "Aspeto",
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
      Aries: "Áries",
      Taurus: "Touro",
      Gemini: "Gêmeos",
      Leo: "Leão",
      Virgo: "Virgem",
      Libra: "Libra",
      Scorpio: "Escorpião",
      Sagittarius: "Sagitário",
      Capricorn: "Capricórnio",
      Aquarius: "Aquário",
      Pisces: "Peixes",
    },

    elements: {
      Feu: "Fogo",
      Terre: "Terra",
      Air: "Ar",
      Eau: "Água",
      "Élément non précisé":
        "Elemento não especificado",
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
      Trigone: "Trígono",
      Sextile: "Sextil",
      Opposition: "Oposição",
      Carré: "Quadratura",
      Quinconce: "Quincúncio",
      Aspect: "Aspeto",
    },

    aspectNatures: {
      "Harmonie naturelle":
        "Harmonia natural",
      "Connexion intense":
        "Conexão intensa",
      Complémentarité:
        "Complementaridade",
      "Zone d’ajustement":
        "Área de ajuste",
      "Influence relationnelle":
        "Influência relacional",
    },

    emotionalNeeds: {
      belier:
        "Precisa de espontaneidade, autenticidade e liberdade para expressar rapidamente as emoções sem se sentir limitado.",
      taureau:
        "Procura estabilidade, fidelidade, ternura e provas concretas de segurança afetiva.",
      gemeaux:
        "Precisa de diálogo, leveza, curiosidade e da possibilidade de colocar as emoções em palavras.",
      cancer:
        "Procura grande proximidade, ternura, proteção e um ambiente profundamente tranquilizador.",
      lion:
        "Precisa de calor, reconhecimento, lealdade e de se sentir amado de forma visível.",
      vierge:
        "Procura fiabilidade, gestos úteis, atenção aos detalhes e um quotidiano afetivo coerente.",
      balance:
        "Precisa de harmonia, diálogo, delicadeza e de uma relação em que ambos se sintam considerados.",
      scorpion:
        "Procura intensidade, confiança absoluta, autenticidade e verdadeira profundidade emocional.",
      sagittaire:
        "Precisa de liberdade, otimismo, honestidade e de um vínculo que deixe espaço para evoluir.",
      capricorne:
        "Procura constância, respeito, maturidade e uma relação capaz de se construir ao longo do tempo.",
      verseau:
        "Precisa de independência, compreensão intelectual e de uma relação que respeite a sua singularidade.",
      poissons:
        "Procura compaixão, ternura, intuição e um vínculo emocional no qual possa sentir-se plenamente compreendido.",
    },

    moonCompatibility: {
      "same-sign":
        "As suas duas Luas em {sign1} revelam necessidades emocionais muito semelhantes. Podem reconhecer instintivamente as reações, sensibilidades e expectativas afetivas um do outro. Esta familiaridade favorece a proximidade, mas também pode amplificar mecanismos de defesa partilhados.",
      "same-element":
        "As suas Luas em {sign1} e {sign2} pertencem ao mesmo elemento, {element1}. Partilham, portanto, uma forma fundamental de viver e processar as emoções. Mesmo que as reações não sejam idênticas, geralmente conseguem compreender aquilo de que a outra pessoa precisa para se sentir segura.",
      complementary:
        "As Luas em {sign1} e {sign2} expressam necessidades diferentes, mas complementares. A energia de {element1} traz a sua própria forma de reagir, enquanto a energia de {element2} pode oferecer aquilo que falta. Esta dinâmica torna-se especialmente enriquecedora quando cada pessoa aceita que a outra não manifesta as emoções da mesma forma.",
      different:
        "As suas Luas em {sign1} e {sign2} funcionam segundo ritmos emocionais diferentes. Uma pessoa pode precisar de reagir imediatamente, enquanto a outra prefere recuar, analisar ou proteger-se. A relação ganha estabilidade quando cada pessoa aprende a reconhecer a linguagem emocional da outra sem a interpretar como rejeição.",
    },

    aspectInterpretations: {
      Lune: {
        harmonious:
          "As suas reações emocionais podem compreender-se e apoiar-se naturalmente.",
        challenging:
          "As suas necessidades afetivas podem diferir e exigir uma escuta mais consciente.",
        neutral:
          "Esta conexão intensifica a sensibilidade e a ressonância emocional entre vocês.",
      },
      Vénus: {
        harmonious:
          "O afeto e a ternura podem responder naturalmente às necessidades emocionais.",
        challenging:
          "A forma de amar pode não corresponder imediatamente às expectativas afetivas.",
        neutral:
          "O amor, a ternura e a sensibilidade ocupam um lugar importante no seu vínculo.",
      },
      Mars: {
        harmonious:
          "O desejo e a ação podem estimular a expressão emocional de forma viva.",
        challenging:
          "As reações impulsivas podem por vezes ferir a sensibilidade da outra pessoa.",
        neutral:
          "Esta conexão cria forte reatividade, combinando emoção, desejo e instinto.",
      },
      Saturne: {
        harmonious:
          "Saturno pode trazer estabilidade, fiabilidade e segurança às emoções da Lua.",
        challenging:
          "A Lua pode por vezes sentir Saturno como distante, exigente ou pouco demonstrativo.",
        neutral:
          "Esta interação destaca temas de segurança, responsabilidade e compromisso emocional.",
      },
      Soleil: {
        harmonious:
          "A identidade de uma pessoa pode tranquilizar e apoiar naturalmente as necessidades emocionais da outra.",
        challenging:
          "A expressão pessoal de uma pessoa pode por vezes entrar em conflito com a sensibilidade da outra.",
        neutral:
          "O Sol ilumina as emoções da Lua e cria um forte sentimento de reconhecimento.",
      },
      default: {
        harmonious:
          "Este aspeto favorece uma troca emocional mais fluida entre vocês.",
        challenging:
          "Este aspeto exige mais ajustamento emocional consciente e escuta.",
        neutral:
          "Este aspeto influencia a forma como as suas emoções reagem às energias pessoais da outra pessoa.",
      },
    },

    moonIn: "Lua em",
    withMoonIn: "Com uma Lua em",
    needsOf: "As necessidades de",
    elementWord: "Elemento",
    orbWord: "orbe",
  },
};

/* =========================================================
   MOTEUR AST SÉCURISÉ
========================================================= */

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

function localizeCompleteLiterals(
  source: string,
  translations: Record<
    string,
    string
  >,
): string {
  const sourceFile =
    ts.createSourceFile(
      "CompatibilityEmotional.tsx",
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
        typeof translated ===
          "string" &&
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
      const raw =
        node.getText(
          sourceFile,
        );

      const original =
        normalizeVisibleText(
          raw,
        );

      const translated =
        translations[original];

      if (
        typeof translated ===
          "string" &&
        translated !== original
      ) {
        const leading =
          raw.match(/^\s*/)?.[0] ??
          "";

        const trailing =
          raw.match(/\s*$/)?.[0] ??
          "";

        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),

          end:
            node.getEnd(),

          value:
            `{${JSON.stringify(
              `${leading}${translated}${trailing}`,
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

/* =========================================================
   HELPERS INSÉRÉS DANS LE TSX GÉNÉRÉ
========================================================= */

function buildHelpers(
  data: LocaleData,
): string {
  return `
const __EMOTIONAL_SIGNS =
  ${JSON.stringify(
    data.signs,
    null,
    2,
  )} as Record<string, string>;

const __EMOTIONAL_ELEMENTS =
  ${JSON.stringify(
    data.elements,
    null,
    2,
  )} as Record<string, string>;

const __EMOTIONAL_PLANETS =
  ${JSON.stringify(
    data.planets,
    null,
    2,
  )} as Record<string, string>;

const __EMOTIONAL_ASPECTS =
  ${JSON.stringify(
    data.aspects,
    null,
    2,
  )} as Record<string, string>;

const __EMOTIONAL_ASPECT_NATURES =
  ${JSON.stringify(
    data.aspectNatures,
    null,
    2,
  )} as Record<string, string>;

const __EMOTIONAL_NEEDS =
  ${JSON.stringify(
    data.emotionalNeeds,
    null,
    2,
  )} as Record<string, string>;

const __EMOTIONAL_MOON_COMPATIBILITY =
  ${JSON.stringify(
    data.moonCompatibility,
    null,
    2,
  )} as Record<string, string>;

const __EMOTIONAL_ASPECT_INTERPRETATIONS =
  ${JSON.stringify(
    data.aspectInterpretations,
    null,
    2,
  )} as Record<
    string,
    Record<string, string>
  >;

const __EMOTIONAL_MOON_IN =
  ${JSON.stringify(
    data.moonIn,
  )};

const __EMOTIONAL_WITH_MOON_IN =
  ${JSON.stringify(
    data.withMoonIn,
  )};

const __EMOTIONAL_NEEDS_OF =
  ${JSON.stringify(
    data.needsOf,
  )};

const __EMOTIONAL_ELEMENT_WORD =
  ${JSON.stringify(
    data.elementWord,
  )};

const __EMOTIONAL_ORB_WORD =
  ${JSON.stringify(
    data.orbWord,
  )};

function localizeEmotionalSign(
  value: string,
): string {
  const safe =
    typeof value === "string"
      ? value.trim()
      : "";

  return (
    __EMOTIONAL_SIGNS[safe] ??
    safe
  );
}

function localizeEmotionalElement(
  value: string,
): string {
  const safe =
    typeof value === "string"
      ? value.trim()
      : "";

  return (
    __EMOTIONAL_ELEMENTS[
      safe
    ] ??
    safe
  );
}

function localizeEmotionalPlanet(
  value: string,
): string {
  const safe =
    typeof value === "string"
      ? value.trim()
      : "";

  return (
    __EMOTIONAL_PLANETS[
      safe
    ] ??
    safe
  );
}

function localizeEmotionalAspect(
  value: string,
): string {
  const safe =
    typeof value === "string"
      ? value.trim()
      : "";

  return (
    __EMOTIONAL_ASPECTS[
      safe
    ] ??
    safe
  );
}

function localizeEmotionalAspectNature(
  value: string,
): string {
  const safe =
    typeof value === "string"
      ? value.trim()
      : "";

  return (
    __EMOTIONAL_ASPECT_NATURES[
      safe
    ] ??
    safe
  );
}

function normalizeEmotionalKey(
  value: string,
): string {
  return value
    .normalize("NFD")
    .replace(
      /[\\u0300-\\u036f]/g,
      "",
    )
    .trim()
    .toLowerCase();
}

function getEmotionalSourceElement(
  sign: string,
): string {
  const key = normalizeEmotionalKey(sign);
  if (["belier","aries","lion","leo","sagittaire","sagittarius"].includes(key)) return "Feu";
  if (["taureau","taurus","vierge","virgo","capricorne","capricorn"].includes(key)) return "Terre";
  if (["gemeaux","gemini","balance","libra","verseau","aquarius"].includes(key)) return "Air";
  if (["cancer","scorpion","scorpio","poissons","pisces"].includes(key)) return "Eau";
  return "Élément non précisé";
}

function getLocalizedEmotionalNeed(
  sign: string,
): string {
  const key =
    normalizeEmotionalKey(
      sign,
    );

  return (
    __EMOTIONAL_NEEDS[key] ??
    ${JSON.stringify(
      data.text[
        "Les données disponibles ne permettent pas encore de préciser entièrement ses besoins émotionnels."
      ],
    )}
  );
}

function areEmotionalElementsComplementary(
  element1: string,
  element2: string,
): boolean {
  const e1 =
    normalizeEmotionalKey(
      element1,
    );

  const e2 =
    normalizeEmotionalKey(
      element2,
    );

  return (
    (e1 === "feu" &&
      e2 === "air") ||
    (e1 === "air" &&
      e2 === "feu") ||
    (e1 === "terre" &&
      e2 === "eau") ||
    (e1 === "eau" &&
      e2 === "terre")
  );
}

function fillEmotionalTemplate(
  template: string,
  values: Record<
    string,
    string
  >,
): string {
  let result = template;

  for (
    const [key, value]
    of Object.entries(values)
  ) {
    result =
      result
        .split(
          \`{\${key}}\`,
        )
        .join(value);
  }

  return result;
}

function getLocalizedMoonCompatibilityText(
  sign1: string,
  sign2: string,
): string {
  if (
    sign1 === "Non précisé" ||
    sign2 === "Non précisé"
  ) {
    return ${JSON.stringify(
      data.text[
        "Les données disponibles ne permettent pas encore de produire une interprétation émotionnelle entièrement personnalisée."
      ],
    )};
  }

  const normalized1 =
    normalizeEmotionalKey(
      sign1,
    );

  const normalized2 =
    normalizeEmotionalKey(
      sign2,
    );

  const element1 =
    getEmotionalSourceElement(sign1);

  const element2 =
    getEmotionalSourceElement(sign2);

  let category:
    | "same-sign"
    | "same-element"
    | "complementary"
    | "different";

  if (
    normalized1 ===
    normalized2
  ) {
    category =
      "same-sign";
  } else if (
    element1 ===
    element2
  ) {
    category =
      "same-element";
  } else if (
    areEmotionalElementsComplementary(
      element1,
      element2,
    )
  ) {
    category =
      "complementary";
  } else {
    category =
      "different";
  }

  return fillEmotionalTemplate(
    __EMOTIONAL_MOON_COMPATIBILITY[
      category
    ],
    {
      sign1:
        localizeEmotionalSign(
          sign1,
        ),

      sign2:
        localizeEmotionalSign(
          sign2,
        ),

      element1:
        localizeEmotionalElement(
          element1,
        ),

      element2:
        localizeEmotionalElement(
          element2,
        ),
    },
  );
}

function getLocalizedAspectInterpretation(
  planet1: string,
  planet2: string,
  aspectName: string,
): string {
  const otherPlanet =
    normalizeValue(
      planet1,
    ) === "moon" ||
    normalizeValue(
      planet1,
    ) === "lune"
      ? translatePlanet(
          planet2,
        )
      : translatePlanet(
          planet1,
        );

  const normalizedAspect =
    normalizeValue(
      aspectName,
    );

  const harmonious =
    normalizedAspect.includes(
      "trigone",
    ) ||
    normalizedAspect.includes(
      "trine",
    ) ||
    normalizedAspect.includes(
      "sextile",
    );

  const challenging =
    normalizedAspect.includes(
      "carre",
    ) ||
    normalizedAspect.includes(
      "square",
    ) ||
    normalizedAspect.includes(
      "opposition",
    ) ||
    normalizedAspect.includes(
      "quinconce",
    ) ||
    normalizedAspect.includes(
      "quincunx",
    );

  const nature =
    harmonious
      ? "harmonious"
      : challenging
        ? "challenging"
        : "neutral";

  const bank =
    __EMOTIONAL_ASPECT_INTERPRETATIONS[
      otherPlanet
    ] ??
    __EMOTIONAL_ASPECT_INTERPRETATIONS[
      "default"
    ];

  return (
    bank?.[nature] ??
    ""
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

/* =========================================================
   REMPLACEMENTS CIBLÉS DU JSX ET DES APPELS DYNAMIQUES
========================================================= */

function replaceTargetedDisplayCode(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /(?:Lune\s+en|Moon\s+in|Luna\s+en|Mond\s+in|Luna\s+in|Lua\s+em)\s*\{moonSign1\}/g,
    "{`${__EMOTIONAL_MOON_IN} ${localizeEmotionalSign(moonSign1)}`}",
  );

  output = output.replace(
    /(?:Lune\s+en|Moon\s+in|Luna\s+en|Mond\s+in|Luna\s+in|Lua\s+em)\s*\{moonSign2\}/g,
    "{`${__EMOTIONAL_MOON_IN} ${localizeEmotionalSign(moonSign2)}`}",
  );

  output = output.replace(
    /(?:Élément|Element|Elemento)\s*\{element1\}/g,
    "{`${__EMOTIONAL_ELEMENT_WORD} ${localizeEmotionalElement(getEmotionalSourceElement(moonSign1))}`}",
  );

  output = output.replace(
    /(?:Élément|Element|Elemento)\s*\{element2\}/g,
    "{`${__EMOTIONAL_ELEMENT_WORD} ${localizeEmotionalElement(getEmotionalSourceElement(moonSign2))}`}",
  );

  output = output.replace(
    /(?:Les\s+besoins\s+de|The\s+needs\s+of|Las\s+necesidades\s+de|Die\s+Bedürfnisse\s+von|I\s+bisogni\s+di|As\s+necessidades\s+de)\s*\{name\}/g,
    "{`${__EMOTIONAL_NEEDS_OF} ${name}`}",
  );

  output = output.replace(
    /(?:Avec\s+une\s+Lune\s+en|With\s+a\s+Moon\s+in|Con\s+una\s+Luna\s+en|Mit\s+einem\s+Mond\s+in|Con\s+una\s+Luna\s+in|Com\s+uma\s+Lua\s+em)\s*\{moonSign\},\s*\{\s*["']\s["']\s*\}/g,
    "{`${__EMOTIONAL_WITH_MOON_IN} ${localizeEmotionalSign(moonSign)}, `}",
  );

  output = output.replace(
    /\{getEmotionalNeed\(\s*moonSign\s*\)\}/g,
    "{getLocalizedEmotionalNeed(moonSign)}",
  );

  output = output.replace(
    /\{getMoonCompatibilityText\(\s*moonSign1\s*,\s*moonSign2\s*,?\s*\)\}/g,
    "{getLocalizedMoonCompatibilityText(moonSign1, moonSign2)}",
  );

  output = output.replace(
    /\{getAspectInterpretation\(\s*aspect\.planet1\s*,\s*aspect\.planet2\s*,\s*aspect\.aspect\s*,?\s*\)\}/g,
    "{getLocalizedAspectInterpretation(aspect.planet1, aspect.planet2, aspect.aspect)}",
  );

  output = output.replace(
    /\{planet1\}\s*\{aspect\.aspect\}\s*\{\s*["']\s["']\s*\}\s*\{planet2\}/g,
    "{`${localizeEmotionalPlanet(planet1)} ${localizeEmotionalAspect(aspect.aspect)} ${localizeEmotionalPlanet(planet2)}`}",
  );

  output = output.replace(
    /\{getAspectNature\(\s*aspect\.aspect\s*,?\s*\)\}/g,
    "{localizeEmotionalAspectNature(getAspectNature(aspect.aspect))}",
  );

  output = output.replace(
    /\?\s*`\s*•\s*(?:orbe|orb|Orb|orbita)\s*\$\{aspect\.orb\.toFixed\(1\)\}°`/g,
    "? ` • ${__EMOTIONAL_ORB_WORD} ${aspect.orb.toFixed(1)}°`",
  );

  return output;
}

export function localizeCompatibilityEmotional(
  source: string,
  locale: PaidPdfLocale,
): string {
  /*
   * Français = source originale intacte.
   */
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

  /*
   * 1. Corriger d'abord les constructions dynamiques
   * sur le TSX source, avant toute traduction de littéraux.
   */
  let localized =
    replaceTargetedDisplayCode(
      source,
    );

  /*
   * 2. Traduire les chaînes fixes visibles.
   */
  localized =
    localizeCompleteLiterals(
      localized,
      data.text,
    );

  /*
   * 3. Injecter les helpers et banques multilingues.
   */
  localized =
    injectHelpers(
      localized,
      data,
    );

  return localized;
}
