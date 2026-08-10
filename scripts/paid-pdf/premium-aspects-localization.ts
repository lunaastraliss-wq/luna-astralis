import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type AspectCopy = {
  planetNames: Record<string, string>;
  energies: Record<string, string>;
  manifestations: Record<string, string>;
  aspectNames: Record<string, string>;
  aspectNatures: Record<string, string>;
  categories: Record<string, string>;
  strength: {
    veryPowerful: string;
    powerful: string;
    moderate: string;
    subtle: string;
  };
  labels: {
    premiumAnalysis: string;
    planetaryAspects: string;
    planetaryAspectsContinued: string;
    part: string;
    of: string;
    orb: string;
    aspectWord: string;
    meaning: string;
    manifestation: string;
    evolution: string;
    premiumSynthesis: string;
    aspectsSynthesis: string;
    analyzedAspects: string;
    harmoniousAspects: string;
    dynamicAspects: string;
    conjunctions: string;
    overallDynamic: string;
    mainFocus: string;
    together: string;
    howToUse: string;
    unavailable: string;
  };
  fallbacks: {
    energy1: string;
    energy2: string;
    manifestation1: string;
    manifestation2: string;
  };
  interpretations: Record<
    "Conjonction" | "Sextile" | "Carré" | "Trigone" | "Opposition" | "default",
    {
      introduction: string;
      manifestation: string;
      evolution: string;
    }
  >;
  synthesis: {
    dynamic: string;
    harmonious: string;
    conjunction: string;
    balanced: string;
    noAspectGuidance: string;
    guidance: string;
    noAspectFinal: string;
    final: string;
  };
};

const COPY: Record<NonFrenchLocale, AspectCopy> = {
  en: {
    planetNames: {
      Sun: "Sun",
      Moon: "Moon",
      Mercury: "Mercury",
      Venus: "Venus",
      Mars: "Mars",
      Jupiter: "Jupiter",
      Saturn: "Saturn",
      Uranus: "Uranus",
      Neptune: "Neptune",
      Pluto: "Pluto",
    },
    energies: {
      Sun: "your identity, your will, and your need to shine",
      Moon: "your emotions, your emotional needs, and your inner security",
      Mercury: "your thinking, your communication, and your way of understanding",
      Venus: "your way of loving, your values, and your relational sensitivity",
      Mars: "your drive to act, your desire, and your capacity for self-assertion",
      Jupiter: "your confidence, your expansion, and your way of seizing opportunities",
      Saturn: "your sense of responsibility, your limits, and your maturity",
      Uranus: "your need for freedom, your originality, and your relationship with change",
      Neptune: "your imagination, your intuition, and your receptivity",
      Pluto: "your power of transformation, your intensity, and your capacity for regeneration",
    },
    manifestations: {
      Sun: "in your sense of identity, your personal choices, and the way you take your place",
      Moon: "in your emotional reactions, your intimacy, and your way of seeking security",
      Mercury: "in your ideas, your exchanges, your learning, and your decision-making",
      Venus: "in your emotional life, your attractions, your self-esteem, and your values",
      Mars: "in your initiatives, your conflicts, your desires, and the way you pursue a goal",
      Jupiter: "in your confidence, your ambitions, your convictions, and your search for growth",
      Saturn: "in your responsibilities, your discipline, your fears, and your long-term constructions",
      Uranus: "in your need for independence, your changes, and your way of breaking free from constraints",
      Neptune: "in your intuition, your ideals, your imagination, and your sensitivity to atmospheres",
      Pluto: "in periods of transformation, power dynamics, and your need for depth",
    },
    aspectNames: {
      Conjonction: "Conjunction",
      Sextile: "Sextile",
      Carré: "Square",
      Trigone: "Trine",
      Opposition: "Opposition",
    },
    aspectNatures: {
      "Fusion et intensification": "Fusion and intensification",
      "Possibilité et coopération": "Possibility and cooperation",
      "Tension et évolution": "Tension and evolution",
      "Fluidité et talent naturel": "Fluidity and natural talent",
      "Polarité et recherche d’équilibre": "Polarity and the search for balance",
    },
    categories: {
      harmonieux: "harmonious",
      dynamique: "dynamic",
      intense: "intense",
    },
    strength: {
      veryPowerful: "Very powerful",
      powerful: "Powerful",
      moderate: "Moderate",
      subtle: "Subtle",
    },
    labels: {
      premiumAnalysis: "Premium Analysis",
      planetaryAspects: "Your planetary aspects",
      planetaryAspectsContinued: "Your planetary aspects — continued",
      part: "Part",
      of: "of",
      orb: "Orb",
      aspectWord: "Aspect",
      meaning: "Meaning of the aspect",
      manifestation: "Manifestation in your life",
      evolution: "Your key to growth",
      premiumSynthesis: "Premium Synthesis",
      aspectsSynthesis: "Synthesis of your aspects",
      analyzedAspects: "Analyzed aspects",
      harmoniousAspects: "Harmonious aspects",
      dynamicAspects: "Dynamic aspects",
      conjunctions: "Conjunctions",
      overallDynamic: "Your overall dynamic",
      mainFocus: "Your main focus point",
      together: "What your planetary aspects reveal together",
      howToUse: "How to use this analysis",
      unavailable: "Analysis unavailable",
    },
    fallbacks: {
      energy1: "an important dimension of your personality",
      energy2: "another dimension of your personality",
      manifestation1: "in several areas of your life",
      manifestation2: "in the way you experience important situations",
    },
    interpretations: {
      Conjonction: {
        introduction: "{p1} and {p2} closely unite their energies. This conjunction intensifies the connection between {e1} and {e2}. These two functions tend to operate together, giving them an important place in your personality.",
        manifestation: "This concentration can be particularly visible {m1}, but also {m2}. When both planets pursue the same goal, you can show great determination. The challenge is to maintain enough perspective so that one energy does not completely dominate the other.",
        evolution: "Your key to growth is to use this intensity consciously. The more clearly you distinguish the needs of each planet, the more their alliance becomes a coherent, creative, and constructive strength.",
      },
      Sextile: {
        introduction: "{p1} and {p2} maintain a constructive exchange between {e1} and {e2}. The sextile represents a natural opportunity that can support your development when you choose to activate it consciously.",
        manifestation: "This cooperation can help you {m1} and can also support your growth {m2}. The opportunities linked to this aspect do not always impose themselves automatically. They become stronger when you take initiative, develop a talent, or create connections between these two dimensions of your life.",
        evolution: "Your key to growth is not to let this possibility remain dormant. By consciously cultivating this connection, you turn a favorable disposition into a genuine personal resource.",
      },
      Carré: {
        introduction: "{p1} and {p2} create a dynamic tension between {e1} and {e2}. The square reveals two powerful needs that do not always align spontaneously and can create inner contradictions.",
        manifestation: "This friction can appear {m1}, but also {m2}. You may feel that you must satisfy one need at the expense of the other. Over time, however, this tension can become a remarkable source of courage, progress, and personal growth.",
        evolution: "Your key to growth is not to try to eliminate either side. By developing a more conscious way for them to work together, you transform tension into energy for action and maturity.",
      },
      Trigone: {
        introduction: "{p1} and {p2} flow together naturally. The trine creates a natural harmony between {e1} and {e2}. This configuration often represents an innate talent or an inner quality that is easily accessible.",
        manifestation: "This ease can support your expression {m1} and also strengthen your balance {m2}. You may use this resource almost instinctively, sometimes without fully recognizing its value. It becomes especially fruitful when you give it a concrete direction.",
        evolution: "Your key to growth is not to take this ease for granted. By actively developing this potential, you can turn it into a lasting, useful, and deeply personal talent.",
      },
      Opposition: {
        introduction: "{p1} and {p2} place {e1} and {e2} face to face. The opposition creates an important polarity: both needs seek recognition, yet they can seem difficult to experience at the same time.",
        manifestation: "This dynamic can be noticeable {m1} as well as {m2}. At times, you may project one of the two poles onto others, encountering in them a quality that is more difficult for you to recognize within yourself.",
        evolution: "Your key to growth is to create a dialogue between these two extremes. Balance does not require choosing one side, but gradually integrating the complementary qualities of each planet.",
      },
      default: {
        introduction: "{p1} and {p2} form an important relationship in your natal chart.",
        manifestation: "This interaction influences different dimensions of your personality and deserves to be observed in your daily experience.",
        evolution: "Your growth involves consciously recognizing how these two energies can support each other.",
      },
    },
    synthesis: {
      dynamic: "Your chart contains a significant proportion of dynamic aspects. These configurations do not represent permanent obstacles. They create a transformative energy that encourages you to move beyond certain contradictions, develop greater inner mastery, and turn tension into constructive decisions.",
      harmonious: "Your chart contains several harmonious exchanges between the planets. You have natural resources, spontaneous talents, and an ability to connect different facets of your personality. Your main challenge is to use these strengths actively so that they become genuine forces of fulfillment.",
      conjunction: "Conjunctions occupy an important place in your chart. Several planetary energies are strongly concentrated and form major axes of your personality. This intensity can support great determination, provided that you maintain enough perspective and flexibility.",
      balanced: "Your chart shows a balance between fluidity, intensity, and creative tension. Harmonious aspects indicate your natural resources. Dynamic aspects reveal the areas in which your growth can be deepest. Conjunctions concentrate certain forces that play a central role in your personality.",
      noAspectGuidance: "Gradually observe how your different inner energies work together in your daily life.",
      guidance: "The most exact aspect in this selection connects {p1} and {p2}, with an orb of {orb}. This interaction deserves particular attention because it can appear regularly in your reactions, choices, and relationships. A conscious understanding of this aspect can become an important key to your personal growth.",
      noAspectFinal: "Your natal chart forms a living whole in which each planet contributes to your growth.",
      final: "Your planetary aspects show that your personality never functions in a fragmented way. Your talents, sensitivities, tensions, and adaptive capacities constantly respond to one another. Harmonious aspects reveal the resources you can naturally rely on. More dynamic aspects indicate the areas in which your development can become especially profound. By observing these interactions consciously, you develop a freer, more coherent, and more personal way of expressing your natal chart.",
    },
  },
  es: {
    planetNames: { Sun: "Sol", Moon: "Luna", Mercury: "Mercurio", Venus: "Venus", Mars: "Marte", Jupiter: "Júpiter", Saturn: "Saturno", Uranus: "Urano", Neptune: "Neptuno", Pluto: "Plutón" },
    energies: {
      Sun: "tu identidad, tu voluntad y tu necesidad de brillar",
      Moon: "tus emociones, tus necesidades afectivas y tu seguridad interior",
      Mercury: "tu pensamiento, tu comunicación y tu manera de comprender",
      Venus: "tu forma de amar, tus valores y tu sensibilidad relacional",
      Mars: "tu energía de acción, tu deseo y tu capacidad de afirmación",
      Jupiter: "tu confianza, tu expansión y tu manera de aprovechar las oportunidades",
      Saturn: "tu sentido de la responsabilidad, tus límites y tu madurez",
      Uranus: "tu necesidad de libertad, tu originalidad y tu relación con el cambio",
      Neptune: "tu imaginación, tu intuición y tu receptividad",
      Pluto: "tu poder de transformación, tu intensidad y tu capacidad de regeneración",
    },
    manifestations: {
      Sun: "en tu sentido de identidad, tus decisiones personales y tu manera de ocupar tu lugar",
      Moon: "en tus reacciones emocionales, tu intimidad y tu manera de buscar seguridad",
      Mercury: "en tus ideas, tus intercambios, tus aprendizajes y tus decisiones",
      Venus: "en tu vida afectiva, tus atracciones, tu autoestima y tus valores",
      Mars: "en tus iniciativas, tus conflictos, tus deseos y tu manera de perseguir un objetivo",
      Jupiter: "en tu confianza, tus ambiciones, tus convicciones y tu búsqueda de crecimiento",
      Saturn: "en tus responsabilidades, tu disciplina, tus miedos y tus construcciones a largo plazo",
      Uranus: "en tu necesidad de independencia, tus cambios y tu manera de salir de los marcos establecidos",
      Neptune: "en tu intuición, tus ideales, tu imaginación y tu sensibilidad a los ambientes",
      Pluto: "en tus períodos de transformación, tus relaciones de poder y tu necesidad de profundidad",
    },
    aspectNames: { Conjonction: "Conjunción", Sextile: "Sextil", Carré: "Cuadratura", Trigone: "Trígono", Opposition: "Oposición" },
    aspectNatures: { "Fusion et intensification": "Fusión e intensificación", "Possibilité et coopération": "Posibilidad y cooperación", "Tension et évolution": "Tensión y evolución", "Fluidité et talent naturel": "Fluidez y talento natural", "Polarité et recherche d’équilibre": "Polaridad y búsqueda de equilibrio" },
    categories: { harmonieux: "armonioso", dynamique: "dinámico", intense: "intenso" },
    strength: { veryPowerful: "Muy poderoso", powerful: "Poderoso", moderate: "Moderado", subtle: "Sutil" },
    labels: { premiumAnalysis: "Análisis Premium", planetaryAspects: "Tus aspectos planetarios", planetaryAspectsContinued: "Tus aspectos planetarios — continuación", part: "Parte", of: "de", orb: "Orbe", aspectWord: "Aspecto", meaning: "Significado del aspecto", manifestation: "Manifestación en tu vida", evolution: "Tu clave de evolución", premiumSynthesis: "Síntesis Premium", aspectsSynthesis: "Síntesis de tus aspectos", analyzedAspects: "Aspectos analizados", harmoniousAspects: "Aspectos armoniosos", dynamicAspects: "Aspectos dinámicos", conjunctions: "Conjunciones", overallDynamic: "Tu dinámica general", mainFocus: "Tu principal punto de atención", together: "Lo que revelan en conjunto tus aspectos planetarios", howToUse: "Cómo utilizar este análisis", unavailable: "Análisis no disponible" },
    fallbacks: { energy1: "una dimensión importante de tu personalidad", energy2: "otra dimensión de tu personalidad", manifestation1: "en varios ámbitos de tu vida", manifestation2: "en tu manera de vivir las situaciones importantes" },
    interpretations: {
      Conjonction: { introduction: "{p1} y {p2} unen estrechamente sus energías. Esta conjunción intensifica el vínculo entre {e1} y {e2}. Estas dos funciones tienden a actuar juntas, lo que les da un lugar importante en tu personalidad.", manifestation: "Esta concentración puede ser especialmente visible {m1}, pero también {m2}. Cuando ambos planetas persiguen un mismo objetivo, puedes mostrar una gran determinación. El desafío consiste en conservar suficiente perspectiva para que una energía no domine por completo a la otra.", evolution: "Tu clave de evolución consiste en utilizar esta intensidad de manera consciente. Cuanto mejor distingas las necesidades propias de cada planeta, más se convertirá su alianza en una fuerza coherente, creativa y constructiva." },
      Sextile: { introduction: "{p1} y {p2} mantienen un intercambio constructivo entre {e1} y {e2}. El sextil representa una posibilidad natural que puede apoyar tu desarrollo cuando eliges activarla conscientemente.", manifestation: "Esta cooperación puede ayudarte {m1} y también favorecer tu evolución {m2}. Las oportunidades asociadas con este aspecto no siempre se imponen por sí solas. Se fortalecen cuando tomas la iniciativa, desarrollas un talento o creas vínculos entre estas dos dimensiones de tu vida.", evolution: "Tu clave de evolución consiste en no dejar que esta posibilidad permanezca dormida. Al cultivar conscientemente este vínculo, transformas una disposición favorable en un verdadero recurso personal." },
      Carré: { introduction: "{p1} y {p2} crean una tensión dinámica entre {e1} y {e2}. La cuadratura revela dos necesidades poderosas que no siempre se armonizan espontáneamente y que pueden provocar contradicciones internas.", manifestation: "Esta fricción puede manifestarse {m1}, pero también {m2}. Puedes tener la impresión de que debes satisfacer una necesidad a costa de la otra. Con el tiempo, esta tensión puede convertirse en un notable motor de valentía, progreso y superación personal.", evolution: "Tu clave de evolución consiste en no intentar eliminar ninguno de los dos polos. Al crear una forma más consciente de hacerlos colaborar, transformas la tensión en energía de acción y madurez." },
      Trigone: { introduction: "{p1} y {p2} fluyen juntos con naturalidad. El trígono crea una armonía natural entre {e1} y {e2}. Esta configuración suele representar un talento espontáneo o una cualidad interior fácilmente accesible.", manifestation: "Esta facilidad puede apoyar tu expresión {m1} y favorecer también tu equilibrio {m2}. Puedes utilizar este recurso casi instintivamente, a veces sin medir plenamente su valor. Se vuelve especialmente fértil cuando le das una dirección concreta.", evolution: "Tu clave de evolución consiste en no dar esta facilidad por sentada. Al desarrollar activamente este potencial, puedes convertirlo en un talento duradero, útil y profundamente personal." },
      Opposition: { introduction: "{p1} y {p2} colocan frente a frente {e1} y {e2}. La oposición crea una polaridad importante: ambas necesidades buscan ser reconocidas, pero pueden parecer difíciles de vivir al mismo tiempo.", manifestation: "Esta dinámica puede percibirse {m1}, así como {m2}. A veces puedes proyectar uno de los dos polos sobre los demás, encontrando en ellos una cualidad que te resulta más difícil reconocer en ti.", evolution: "Tu clave de evolución consiste en crear un diálogo entre estos dos extremos. El equilibrio no exige elegir un bando, sino integrar progresivamente las cualidades complementarias de cada planeta." },
      default: { introduction: "{p1} y {p2} forman una relación importante en tu carta natal.", manifestation: "Esta interacción influye en diferentes dimensiones de tu personalidad y merece ser observada en tu experiencia cotidiana.", evolution: "Tu evolución consiste en reconocer conscientemente cómo estas dos energías pueden apoyarse mutuamente." },
    },
    synthesis: { dynamic: "Tu carta presenta una proporción importante de aspectos dinámicos. Estas configuraciones no representan obstáculos definitivos. Crean una energía de transformación que te impulsa a superar ciertas contradicciones, desarrollar tu dominio interior y convertir las tensiones en decisiones constructivas.", harmonious: "Tu carta presenta varios intercambios armoniosos entre los planetas. Dispones de recursos naturales, talentos espontáneos y una capacidad para conectar diferentes facetas de tu personalidad. Tu principal desafío consiste en utilizar activamente estas facilidades para que se conviertan en verdaderas fuerzas de realización.", conjunction: "Las conjunciones ocupan un lugar importante en tu carta. Varias energías planetarias están fuertemente concentradas y constituyen ejes principales de tu personalidad. Esta intensidad puede sostener una gran determinación, siempre que conserves suficiente perspectiva y flexibilidad.", balanced: "Tu carta presenta un equilibrio entre fluidez, intensidad y tensión creativa. Los aspectos armoniosos indican tus recursos naturales. Los aspectos dinámicos revelan los ámbitos en los que tu evolución puede ser más profunda. Las conjunciones concentran ciertas fuerzas que desempeñan un papel central en tu personalidad.", noAspectGuidance: "Observa progresivamente cómo colaboran tus diferentes energías interiores en tu vida cotidiana.", guidance: "El aspecto más exacto de esta selección conecta {p1} y {p2}, con un orbe de {orb}. Esta interacción merece una atención particular porque puede manifestarse con regularidad en tus reacciones, decisiones y relaciones. La comprensión consciente de este aspecto puede convertirse en una clave importante de tu evolución personal.", noAspectFinal: "Tu carta natal forma un conjunto vivo en el que cada planeta participa en tu evolución.", final: "Tus aspectos planetarios muestran que tu personalidad nunca funciona de manera fragmentada. Tus talentos, sensibilidades, tensiones y capacidades de adaptación se responden constantemente. Los aspectos armoniosos revelan los recursos en los que puedes apoyarte de forma natural. Los aspectos más dinámicos indican los ámbitos en los que tu progreso puede ser especialmente profundo. Al observar estas interacciones con conciencia, desarrollas una manera más libre, coherente y personal de expresar tu carta natal." },
  },
  de: {
    planetNames: { Sun: "Sonne", Moon: "Mond", Mercury: "Merkur", Venus: "Venus", Mars: "Mars", Jupiter: "Jupiter", Saturn: "Saturn", Uranus: "Uranus", Neptune: "Neptun", Pluto: "Pluto" },
    energies: { Sun: "Ihre Identität, Ihren Willen und Ihr Bedürfnis zu strahlen", Moon: "Ihre Emotionen, Ihre emotionalen Bedürfnisse und Ihre innere Sicherheit", Mercury: "Ihr Denken, Ihre Kommunikation und Ihre Art zu verstehen", Venus: "Ihre Art zu lieben, Ihre Werte und Ihre Beziehungssensibilität", Mars: "Ihre Handlungsenergie, Ihr Begehren und Ihre Fähigkeit zur Selbstbehauptung", Jupiter: "Ihr Vertrauen, Ihre Entfaltung und Ihre Art, Chancen zu ergreifen", Saturn: "Ihr Verantwortungsgefühl, Ihre Grenzen und Ihre Reife", Uranus: "Ihr Freiheitsbedürfnis, Ihre Originalität und Ihr Verhältnis zu Veränderungen", Neptune: "Ihre Vorstellungskraft, Ihre Intuition und Ihre Empfänglichkeit", Pluto: "Ihre Transformationskraft, Ihre Intensität und Ihre Regenerationsfähigkeit" },
    manifestations: { Sun: "in Ihrem Identitätsgefühl, Ihren persönlichen Entscheidungen und Ihrer Art, Ihren Platz einzunehmen", Moon: "in Ihren emotionalen Reaktionen, Ihrer Intimität und Ihrer Art, Sicherheit zu suchen", Mercury: "in Ihren Ideen, Ihrem Austausch, Ihrem Lernen und Ihren Entscheidungen", Venus: "in Ihrem Gefühlsleben, Ihren Anziehungen, Ihrem Selbstwert und Ihren Werten", Mars: "in Ihren Initiativen, Konflikten, Wünschen und Ihrer Art, ein Ziel zu verfolgen", Jupiter: "in Ihrem Vertrauen, Ihren Ambitionen, Überzeugungen und Ihrem Streben nach Entwicklung", Saturn: "in Ihren Verantwortlichkeiten, Ihrer Disziplin, Ihren Ängsten und Ihren langfristigen Strukturen", Uranus: "in Ihrem Bedürfnis nach Unabhängigkeit, Ihren Veränderungen und Ihrer Art, gewohnte Rahmen zu verlassen", Neptune: "in Ihrer Intuition, Ihren Idealen, Ihrer Vorstellungskraft und Ihrer Sensibilität für Stimmungen", Pluto: "in Phasen der Transformation, in Machtdynamiken und in Ihrem Bedürfnis nach Tiefe" },
    aspectNames: { Conjonction: "Konjunktion", Sextile: "Sextil", Carré: "Quadrat", Trigone: "Trigon", Opposition: "Opposition" },
    aspectNatures: { "Fusion et intensification": "Verschmelzung und Intensivierung", "Possibilité et coopération": "Möglichkeit und Zusammenarbeit", "Tension et évolution": "Spannung und Entwicklung", "Fluidité et talent naturel": "Leichtigkeit und natürliches Talent", "Polarité et recherche d’équilibre": "Polarität und Suche nach Gleichgewicht" },
    categories: { harmonieux: "harmonisch", dynamique: "dynamisch", intense: "intensiv" },
    strength: { veryPowerful: "Sehr stark", powerful: "Stark", moderate: "Mäßig", subtle: "Subtil" },
    labels: { premiumAnalysis: "Premium-Analyse", planetaryAspects: "Ihre planetarischen Aspekte", planetaryAspectsContinued: "Ihre planetarischen Aspekte — Fortsetzung", part: "Teil", of: "von", orb: "Orb", aspectWord: "Aspekt", meaning: "Bedeutung des Aspekts", manifestation: "Auswirkung in Ihrem Leben", evolution: "Ihr Entwicklungsschlüssel", premiumSynthesis: "Premium-Synthese", aspectsSynthesis: "Synthese Ihrer Aspekte", analyzedAspects: "Analysierte Aspekte", harmoniousAspects: "Harmonische Aspekte", dynamicAspects: "Dynamische Aspekte", conjunctions: "Konjunktionen", overallDynamic: "Ihre Gesamtdynamik", mainFocus: "Ihr wichtigster Schwerpunkt", together: "Was Ihre planetarischen Aspekte gemeinsam zeigen", howToUse: "So nutzen Sie diese Analyse", unavailable: "Analyse nicht verfügbar" },
    fallbacks: { energy1: "eine wichtige Dimension Ihrer Persönlichkeit", energy2: "eine weitere Dimension Ihrer Persönlichkeit", manifestation1: "in mehreren Bereichen Ihres Lebens", manifestation2: "in Ihrer Art, wichtige Situationen zu erleben" },
    interpretations: {
      Conjonction: { introduction: "{p1} und {p2} verbinden ihre Energien eng miteinander. Diese Konjunktion intensiviert die Verbindung zwischen {e1} und {e2}. Beide Funktionen neigen dazu, gemeinsam zu wirken und nehmen dadurch einen wichtigen Platz in Ihrer Persönlichkeit ein.", manifestation: "Diese Konzentration kann besonders sichtbar werden {m1}, aber auch {m2}. Wenn beide Planeten dasselbe Ziel verfolgen, können Sie große Entschlossenheit zeigen. Die Herausforderung besteht darin, genügend Abstand zu bewahren, damit nicht eine Energie die andere vollständig dominiert.", evolution: "Ihr Entwicklungsschlüssel besteht darin, diese Intensität bewusst zu nutzen. Je klarer Sie die eigenen Bedürfnisse jedes Planeten unterscheiden, desto mehr wird ihre Verbindung zu einer stimmigen, kreativen und konstruktiven Kraft." },
      Sextile: { introduction: "{p1} und {p2} stehen in einem konstruktiven Austausch zwischen {e1} und {e2}. Das Sextil stellt eine natürliche Möglichkeit dar, die Ihre Entwicklung unterstützen kann, wenn Sie sie bewusst aktivieren.", manifestation: "Diese Zusammenarbeit kann Sie unterstützen {m1} und zugleich Ihre Entwicklung fördern {m2}. Die mit diesem Aspekt verbundenen Möglichkeiten drängen sich nicht immer von selbst auf. Sie werden stärker, wenn Sie Initiative ergreifen, ein Talent entwickeln oder Verbindungen zwischen diesen beiden Lebensbereichen schaffen.", evolution: "Ihr Entwicklungsschlüssel besteht darin, diese Möglichkeit nicht ungenutzt zu lassen. Indem Sie diese Verbindung bewusst pflegen, verwandeln Sie eine günstige Anlage in eine echte persönliche Ressource." },
      Carré: { introduction: "{p1} und {p2} erzeugen eine dynamische Spannung zwischen {e1} und {e2}. Das Quadrat zeigt zwei starke Bedürfnisse, die sich nicht immer spontan miteinander vereinbaren lassen und innere Widersprüche hervorrufen können.", manifestation: "Diese Reibung kann sich zeigen {m1}, aber auch {m2}. Sie können das Gefühl haben, ein Bedürfnis auf Kosten des anderen erfüllen zu müssen. Mit der Zeit kann diese Spannung jedoch zu einem bemerkenswerten Motor für Mut, Entwicklung und persönliche Überwindung werden.", evolution: "Ihr Entwicklungsschlüssel besteht darin, keinen der beiden Pole beseitigen zu wollen. Wenn Sie eine bewusstere Form der Zusammenarbeit entwickeln, verwandeln Sie Spannung in Handlungsenergie und Reife." },
      Trigone: { introduction: "{p1} und {p2} fließen auf natürliche Weise zusammen. Das Trigon schafft eine natürliche Harmonie zwischen {e1} und {e2}. Diese Konstellation weist häufig auf ein spontanes Talent oder eine leicht zugängliche innere Qualität hin.", manifestation: "Diese Leichtigkeit kann Ihren Ausdruck unterstützen {m1} und zugleich Ihr Gleichgewicht stärken {m2}. Sie können diese Ressource fast instinktiv nutzen, manchmal ohne ihren Wert vollständig zu erkennen. Besonders fruchtbar wird sie, wenn Sie ihr eine konkrete Richtung geben.", evolution: "Ihr Entwicklungsschlüssel besteht darin, diese Leichtigkeit nicht als selbstverständlich anzusehen. Wenn Sie dieses Potenzial aktiv entwickeln, kann daraus ein dauerhaftes, nützliches und sehr persönliches Talent werden." },
      Opposition: { introduction: "{p1} und {p2} stellen {e1} und {e2} einander gegenüber. Die Opposition erzeugt eine wichtige Polarität: Beide Bedürfnisse wollen anerkannt werden, können aber gleichzeitig schwer miteinander vereinbar erscheinen.", manifestation: "Diese Dynamik kann spürbar werden {m1} ebenso wie {m2}. Manchmal projizieren Sie einen der beiden Pole auf andere und begegnen dort einer Qualität, die Sie in sich selbst schwerer anerkennen können.", evolution: "Ihr Entwicklungsschlüssel besteht darin, einen Dialog zwischen diesen beiden Extremen zu schaffen. Gleichgewicht bedeutet nicht, sich für eine Seite zu entscheiden, sondern die ergänzenden Qualitäten beider Planeten schrittweise zu integrieren." },
      default: { introduction: "{p1} und {p2} bilden eine wichtige Beziehung in Ihrem Geburtshoroskop.", manifestation: "Diese Wechselwirkung beeinflusst verschiedene Dimensionen Ihrer Persönlichkeit und verdient Aufmerksamkeit in Ihrem Alltag.", evolution: "Ihre Entwicklung besteht darin, bewusst zu erkennen, wie sich diese beiden Energien gegenseitig unterstützen können." },
    },
    synthesis: { dynamic: "Ihr Horoskop weist einen bedeutenden Anteil dynamischer Aspekte auf. Diese Konstellationen sind keine endgültigen Hindernisse. Sie erzeugen eine transformative Energie, die Sie dazu anregt, innere Widersprüche zu überwinden, größere Selbstbeherrschung zu entwickeln und Spannungen in konstruktive Entscheidungen umzuwandeln.", harmonious: "Ihr Horoskop enthält mehrere harmonische Verbindungen zwischen den Planeten. Sie verfügen über natürliche Ressourcen, spontane Talente und die Fähigkeit, verschiedene Seiten Ihrer Persönlichkeit miteinander zu verbinden. Ihre wichtigste Aufgabe besteht darin, diese Stärken aktiv zu nutzen, damit sie zu echten Kräften der Entfaltung werden.", conjunction: "Konjunktionen nehmen in Ihrem Horoskop einen wichtigen Platz ein. Mehrere planetarische Energien sind stark gebündelt und bilden zentrale Achsen Ihrer Persönlichkeit. Diese Intensität kann große Entschlossenheit fördern, sofern Sie genügend Abstand und Flexibilität bewahren.", balanced: "Ihr Horoskop zeigt ein Gleichgewicht zwischen Leichtigkeit, Intensität und kreativer Spannung. Harmonische Aspekte weisen auf Ihre natürlichen Ressourcen hin. Dynamische Aspekte zeigen die Bereiche, in denen Ihre Entwicklung besonders tief gehen kann. Konjunktionen bündeln bestimmte Kräfte, die eine zentrale Rolle in Ihrer Persönlichkeit spielen.", noAspectGuidance: "Beobachten Sie nach und nach, wie Ihre verschiedenen inneren Energien in Ihrem Alltag zusammenwirken.", guidance: "Der genaueste Aspekt dieser Auswahl verbindet {p1} und {p2} mit einem Orb von {orb}. Diese Wechselwirkung verdient besondere Aufmerksamkeit, da sie sich regelmäßig in Ihren Reaktionen, Entscheidungen und Beziehungen zeigen kann. Ein bewusstes Verständnis dieses Aspekts kann zu einem wichtigen Schlüssel Ihrer persönlichen Entwicklung werden.", noAspectFinal: "Ihr Geburtshoroskop bildet ein lebendiges Ganzes, in dem jeder Planet zu Ihrer Entwicklung beiträgt.", final: "Ihre planetarischen Aspekte zeigen, dass Ihre Persönlichkeit niemals fragmentiert funktioniert. Ihre Talente, Sensibilitäten, Spannungen und Anpassungsfähigkeiten stehen ständig miteinander in Beziehung. Harmonische Aspekte zeigen die Ressourcen, auf die Sie sich natürlich stützen können. Dynamischere Aspekte weisen auf die Bereiche hin, in denen Ihre Entwicklung besonders tiefgreifend sein kann. Wenn Sie diese Wechselwirkungen bewusst beobachten, entwickeln Sie eine freiere, stimmigere und persönlichere Art, Ihr Geburtshoroskop auszudrücken." },
  },
  it: {
    planetNames: { Sun: "Sole", Moon: "Luna", Mercury: "Mercurio", Venus: "Venere", Mars: "Marte", Jupiter: "Giove", Saturn: "Saturno", Uranus: "Urano", Neptune: "Nettuno", Pluto: "Plutone" },
    energies: { Sun: "la tua identità, la tua volontà e il tuo bisogno di brillare", Moon: "le tue emozioni, i tuoi bisogni affettivi e la tua sicurezza interiore", Mercury: "il tuo pensiero, la tua comunicazione e il tuo modo di comprendere", Venus: "il tuo modo di amare, i tuoi valori e la tua sensibilità relazionale", Mars: "la tua energia d’azione, il tuo desiderio e la tua capacità di affermazione", Jupiter: "la tua fiducia, la tua espansione e il tuo modo di cogliere le opportunità", Saturn: "il tuo senso di responsabilità, i tuoi limiti e la tua maturità", Uranus: "il tuo bisogno di libertà, la tua originalità e il tuo rapporto con il cambiamento", Neptune: "la tua immaginazione, la tua intuizione e la tua ricettività", Pluto: "il tuo potere di trasformazione, la tua intensità e la tua capacità di rigenerazione" },
    manifestations: { Sun: "nel tuo senso di identità, nelle tue scelte personali e nel modo in cui occupi il tuo posto", Moon: "nelle tue reazioni emotive, nella tua intimità e nel tuo modo di cercare sicurezza", Mercury: "nelle tue idee, nei tuoi scambi, nei tuoi apprendimenti e nelle tue decisioni", Venus: "nella tua vita affettiva, nelle tue attrazioni, nella tua autostima e nei tuoi valori", Mars: "nelle tue iniziative, nei tuoi conflitti, nei tuoi desideri e nel modo in cui persegui un obiettivo", Jupiter: "nella tua fiducia, nelle tue ambizioni, nelle tue convinzioni e nella tua ricerca di crescita", Saturn: "nelle tue responsabilità, nella tua disciplina, nelle tue paure e nelle tue costruzioni a lungo termine", Uranus: "nel tuo bisogno di indipendenza, nei tuoi cambiamenti e nel tuo modo di uscire dagli schemi", Neptune: "nella tua intuizione, nei tuoi ideali, nella tua immaginazione e nella tua sensibilità alle atmosfere", Pluto: "nei periodi di trasformazione, nelle dinamiche di potere e nel tuo bisogno di profondità" },
    aspectNames: { Conjonction: "Congiunzione", Sextile: "Sestile", Carré: "Quadratura", Trigone: "Trigono", Opposition: "Opposizione" },
    aspectNatures: { "Fusion et intensification": "Fusione e intensificazione", "Possibilité et coopération": "Possibilità e cooperazione", "Tension et évolution": "Tensione ed evoluzione", "Fluidité et talent naturel": "Fluidità e talento naturale", "Polarité et recherche d’équilibre": "Polarità e ricerca dell’equilibrio" },
    categories: { harmonieux: "armonioso", dynamique: "dinamico", intense: "intenso" },
    strength: { veryPowerful: "Molto potente", powerful: "Potente", moderate: "Moderato", subtle: "Sottile" },
    labels: { premiumAnalysis: "Analisi Premium", planetaryAspects: "I tuoi aspetti planetari", planetaryAspectsContinued: "I tuoi aspetti planetari — seguito", part: "Parte", of: "di", orb: "Orbe", aspectWord: "Aspetto", meaning: "Significato dell’aspetto", manifestation: "Manifestazione nella tua vita", evolution: "La tua chiave di evoluzione", premiumSynthesis: "Sintesi Premium", aspectsSynthesis: "Sintesi dei tuoi aspetti", analyzedAspects: "Aspetti analizzati", harmoniousAspects: "Aspetti armoniosi", dynamicAspects: "Aspetti dinamici", conjunctions: "Congiunzioni", overallDynamic: "La tua dinamica generale", mainFocus: "Il tuo principale punto di attenzione", together: "Cosa rivelano insieme i tuoi aspetti planetari", howToUse: "Come utilizzare questa analisi", unavailable: "Analisi non disponibile" },
    fallbacks: { energy1: "una dimensione importante della tua personalità", energy2: "un’altra dimensione della tua personalità", manifestation1: "in diversi ambiti della tua vita", manifestation2: "nel tuo modo di vivere le situazioni importanti" },
    interpretations: {
      Conjonction: { introduction: "{p1} e {p2} uniscono strettamente le loro energie. Questa congiunzione intensifica il legame tra {e1} e {e2}. Queste due funzioni tendono ad agire insieme, assumendo così un ruolo importante nella tua personalità.", manifestation: "Questa concentrazione può essere particolarmente visibile {m1}, ma anche {m2}. Quando entrambi i pianeti perseguono lo stesso obiettivo, puoi mostrare una grande determinazione. La sfida consiste nel mantenere abbastanza distacco affinché un’energia non domini completamente l’altra.", evolution: "La tua chiave di evoluzione consiste nell’utilizzare questa intensità in modo consapevole. Più distingui chiaramente i bisogni propri di ciascun pianeta, più la loro alleanza diventa una forza coerente, creativa e costruttiva." },
      Sextile: { introduction: "{p1} e {p2} mantengono uno scambio costruttivo tra {e1} e {e2}. Il sestile rappresenta una possibilità naturale che può sostenere il tuo sviluppo quando scegli di attivarla consapevolmente.", manifestation: "Questa cooperazione può aiutarti {m1} e favorire anche la tua evoluzione {m2}. Le opportunità associate a questo aspetto non si impongono sempre da sole. Si rafforzano quando prendi l’iniziativa, sviluppi un talento o crei collegamenti tra queste due dimensioni della tua vita.", evolution: "La tua chiave di evoluzione consiste nel non lasciare dormiente questa possibilità. Coltivando consapevolmente questo legame, trasformi una disposizione favorevole in una vera risorsa personale." },
      Carré: { introduction: "{p1} e {p2} creano una tensione dinamica tra {e1} e {e2}. La quadratura rivela due bisogni forti che non sempre si accordano spontaneamente e possono generare contraddizioni interiori.", manifestation: "Questo attrito può manifestarsi {m1}, ma anche {m2}. Potresti avere l’impressione di dover soddisfare un bisogno a scapito dell’altro. Con il tempo, tuttavia, questa tensione può diventare un notevole motore di coraggio, progresso e superamento personale.", evolution: "La tua chiave di evoluzione consiste nel non cercare di eliminare uno dei due poli. Creando un modo più consapevole di farli collaborare, trasformi la tensione in energia d’azione e maturità." },
      Trigone: { introduction: "{p1} e {p2} fluiscono insieme con naturalezza. Il trigono crea un’armonia naturale tra {e1} e {e2}. Questa configurazione rappresenta spesso un talento spontaneo o una qualità interiore facilmente accessibile.", manifestation: "Questa facilità può sostenere la tua espressione {m1} e favorire anche il tuo equilibrio {m2}. Puoi utilizzare questa risorsa quasi istintivamente, a volte senza riconoscerne pienamente il valore. Diventa particolarmente feconda quando le dai una direzione concreta.", evolution: "La tua chiave di evoluzione consiste nel non dare questa facilità per scontata. Sviluppando attivamente questo potenziale, puoi trasformarlo in un talento duraturo, utile e profondamente personale." },
      Opposition: { introduction: "{p1} e {p2} mettono a confronto {e1} e {e2}. L’opposizione crea una polarità importante: entrambi i bisogni cercano riconoscimento, ma possono sembrare difficili da vivere contemporaneamente.", manifestation: "Questa dinamica può essere percepibile {m1}, così come {m2}. A volte potresti proiettare uno dei due poli sugli altri, incontrando in loro una qualità che ti risulta più difficile riconoscere in te.", evolution: "La tua chiave di evoluzione consiste nel creare un dialogo tra questi due estremi. L’equilibrio non richiede di scegliere una parte, ma di integrare progressivamente le qualità complementari di ciascun pianeta." },
      default: { introduction: "{p1} e {p2} formano una relazione importante nel tuo tema natale.", manifestation: "Questa interazione influenza diverse dimensioni della tua personalità e merita di essere osservata nella tua esperienza quotidiana.", evolution: "La tua evoluzione consiste nel riconoscere consapevolmente come queste due energie possano sostenersi a vicenda." },
    },
    synthesis: { dynamic: "Il tuo tema presenta una proporzione importante di aspetti dinamici. Queste configurazioni non rappresentano ostacoli definitivi. Creano un’energia di trasformazione che ti spinge a superare alcune contraddizioni, sviluppare maggiore padronanza interiore e trasformare le tensioni in decisioni costruttive.", harmonious: "Il tuo tema presenta diversi scambi armoniosi tra i pianeti. Disponi di risorse naturali, talenti spontanei e della capacità di collegare diverse sfaccettature della tua personalità. La tua principale sfida consiste nell’utilizzare attivamente queste facilità affinché diventino vere forze di realizzazione.", conjunction: "Le congiunzioni occupano un posto importante nel tuo tema. Diverse energie planetarie sono fortemente concentrate e costituiscono assi principali della tua personalità. Questa intensità può sostenere una grande determinazione, purché tu mantenga sufficiente distacco e flessibilità.", balanced: "Il tuo tema presenta un equilibrio tra fluidità, intensità e tensione creativa. Gli aspetti armoniosi indicano le tue risorse naturali. Gli aspetti dinamici rivelano gli ambiti in cui la tua evoluzione può essere più profonda. Le congiunzioni concentrano alcune forze che svolgono un ruolo centrale nella tua personalità.", noAspectGuidance: "Osserva progressivamente come le tue diverse energie interiori collaborano nella vita quotidiana.", guidance: "L’aspetto più preciso di questa selezione collega {p1} e {p2}, con un orb di {orb}. Questa interazione merita particolare attenzione perché può manifestarsi regolarmente nelle tue reazioni, nelle tue scelte e nelle tue relazioni. Una comprensione consapevole di questo aspetto può diventare una chiave importante della tua evoluzione personale.", noAspectFinal: "Il tuo tema natale forma un insieme vivo in cui ogni pianeta partecipa alla tua evoluzione.", final: "I tuoi aspetti planetari mostrano che la tua personalità non funziona mai in modo frammentato. I tuoi talenti, le tue sensibilità, le tue tensioni e le tue capacità di adattamento si rispondono continuamente. Gli aspetti armoniosi rivelano le risorse su cui puoi fare affidamento naturalmente. Gli aspetti più dinamici indicano gli ambiti in cui il tuo progresso può diventare particolarmente profondo. Osservando queste interazioni con consapevolezza, sviluppi un modo più libero, coerente e personale di esprimere il tuo tema natale." },
  },
  pt: {
    planetNames: { Sun: "Sol", Moon: "Lua", Mercury: "Mercúrio", Venus: "Vênus", Mars: "Marte", Jupiter: "Júpiter", Saturn: "Saturno", Uranus: "Urano", Neptune: "Netuno", Pluto: "Plutão" },
    energies: { Sun: "sua identidade, sua vontade e sua necessidade de brilhar", Moon: "suas emoções, suas necessidades afetivas e sua segurança interior", Mercury: "seu pensamento, sua comunicação e sua maneira de compreender", Venus: "sua forma de amar, seus valores e sua sensibilidade relacional", Mars: "sua energia de ação, seu desejo e sua capacidade de afirmação", Jupiter: "sua confiança, sua expansão e sua maneira de aproveitar oportunidades", Saturn: "seu senso de responsabilidade, seus limites e sua maturidade", Uranus: "sua necessidade de liberdade, sua originalidade e sua relação com a mudança", Neptune: "sua imaginação, sua intuição e sua receptividade", Pluto: "seu poder de transformação, sua intensidade e sua capacidade de regeneração" },
    manifestations: { Sun: "em seu senso de identidade, suas escolhas pessoais e sua maneira de ocupar seu lugar", Moon: "em suas reações emocionais, sua intimidade e sua maneira de buscar segurança", Mercury: "em suas ideias, suas trocas, seus aprendizados e suas decisões", Venus: "em sua vida afetiva, suas atrações, sua autoestima e seus valores", Mars: "em suas iniciativas, seus conflitos, seus desejos e sua maneira de perseguir um objetivo", Jupiter: "em sua confiança, suas ambições, suas convicções e sua busca por crescimento", Saturn: "em suas responsabilidades, sua disciplina, seus medos e suas construções de longo prazo", Uranus: "em sua necessidade de independência, suas mudanças e sua maneira de sair dos padrões", Neptune: "em sua intuição, seus ideais, sua imaginação e sua sensibilidade aos ambientes", Pluto: "em períodos de transformação, nas dinâmicas de poder e em sua necessidade de profundidade" },
    aspectNames: { Conjonction: "Conjunção", Sextile: "Sextil", Carré: "Quadratura", Trigone: "Trígono", Opposition: "Oposição" },
    aspectNatures: { "Fusion et intensification": "Fusão e intensificação", "Possibilité et coopération": "Possibilidade e cooperação", "Tension et évolution": "Tensão e evolução", "Fluidité et talent naturel": "Fluidez e talento natural", "Polarité et recherche d’équilibre": "Polaridade e busca de equilíbrio" },
    categories: { harmonieux: "harmonioso", dynamique: "dinâmico", intense: "intenso" },
    strength: { veryPowerful: "Muito poderoso", powerful: "Poderoso", moderate: "Moderado", subtle: "Sutil" },
    labels: { premiumAnalysis: "Análise Premium", planetaryAspects: "Seus aspectos planetários", planetaryAspectsContinued: "Seus aspectos planetários — continuação", part: "Parte", of: "de", orb: "Orbe", aspectWord: "Aspecto", meaning: "Significado do aspecto", manifestation: "Manifestação em sua vida", evolution: "Sua chave de evolução", premiumSynthesis: "Síntese Premium", aspectsSynthesis: "Síntese dos seus aspectos", analyzedAspects: "Aspectos analisados", harmoniousAspects: "Aspectos harmoniosos", dynamicAspects: "Aspectos dinâmicos", conjunctions: "Conjunções", overallDynamic: "Sua dinâmica geral", mainFocus: "Seu principal ponto de atenção", together: "O que seus aspectos planetários revelam em conjunto", howToUse: "Como utilizar esta análise", unavailable: "Análise indisponível" },
    fallbacks: { energy1: "uma dimensão importante da sua personalidade", energy2: "outra dimensão da sua personalidade", manifestation1: "em vários aspectos da sua vida", manifestation2: "em sua maneira de viver situações importantes" },
    interpretations: {
      Conjonction: { introduction: "{p1} e {p2} unem suas energias de forma estreita. Esta conjunção intensifica a ligação entre {e1} e {e2}. Essas duas funções tendem a agir juntas, ocupando assim um lugar importante em sua personalidade.", manifestation: "Essa concentração pode ser particularmente visível {m1}, mas também {m2}. Quando os dois planetas perseguem o mesmo objetivo, você pode demonstrar grande determinação. O desafio é manter perspectiva suficiente para que uma energia não domine completamente a outra.", evolution: "Sua chave de evolução é usar essa intensidade de forma consciente. Quanto mais claramente você distinguir as necessidades próprias de cada planeta, mais a aliança entre eles se torna uma força coerente, criativa e construtiva." },
      Sextile: { introduction: "{p1} e {p2} mantêm uma troca construtiva entre {e1} e {e2}. O sextil representa uma possibilidade natural que pode apoiar seu desenvolvimento quando você escolhe ativá-la conscientemente.", manifestation: "Essa cooperação pode ajudá-lo {m1} e também favorecer sua evolução {m2}. As oportunidades associadas a esse aspecto nem sempre se impõem por si mesmas. Elas se fortalecem quando você toma iniciativa, desenvolve um talento ou cria conexões entre essas duas dimensões da sua vida.", evolution: "Sua chave de evolução é não deixar essa possibilidade adormecida. Ao cultivar conscientemente essa ligação, você transforma uma disposição favorável em um verdadeiro recurso pessoal." },
      Carré: { introduction: "{p1} e {p2} criam uma tensão dinâmica entre {e1} e {e2}. A quadratura revela duas necessidades fortes que nem sempre se harmonizam espontaneamente e podem provocar contradições internas.", manifestation: "Esse atrito pode se manifestar {m1}, mas também {m2}. Você pode sentir que precisa satisfazer uma necessidade em detrimento da outra. Com o tempo, porém, essa tensão pode se tornar um notável motor de coragem, progresso e superação pessoal.", evolution: "Sua chave de evolução é não tentar eliminar nenhum dos dois polos. Ao criar uma forma mais consciente de fazê-los colaborar, você transforma a tensão em energia de ação e maturidade." },
      Trigone: { introduction: "{p1} e {p2} fluem juntos naturalmente. O trígono cria uma harmonia natural entre {e1} e {e2}. Essa configuração costuma representar um talento espontâneo ou uma qualidade interior facilmente acessível.", manifestation: "Essa facilidade pode apoiar sua expressão {m1} e também favorecer seu equilíbrio {m2}. Você pode usar esse recurso quase instintivamente, às vezes sem reconhecer plenamente seu valor. Ele se torna especialmente fértil quando você lhe dá uma direção concreta.", evolution: "Sua chave de evolução é não considerar essa facilidade como garantida. Ao desenvolver ativamente esse potencial, você pode transformá-lo em um talento duradouro, útil e profundamente pessoal." },
      Opposition: { introduction: "{p1} e {p2} colocam frente a frente {e1} e {e2}. A oposição cria uma polaridade importante: as duas necessidades buscam reconhecimento, mas podem parecer difíceis de viver ao mesmo tempo.", manifestation: "Essa dinâmica pode ser percebida {m1}, assim como {m2}. Às vezes, você pode projetar um dos dois polos sobre os outros, encontrando neles uma qualidade que é mais difícil reconhecer em si mesmo.", evolution: "Sua chave de evolução é criar um diálogo entre esses dois extremos. O equilíbrio não exige escolher um lado, mas integrar progressivamente as qualidades complementares de cada planeta." },
      default: { introduction: "{p1} e {p2} formam uma relação importante em seu mapa natal.", manifestation: "Essa interação influencia diferentes dimensões da sua personalidade e merece ser observada em sua experiência cotidiana.", evolution: "Sua evolução consiste em reconhecer conscientemente como essas duas energias podem se apoiar mutuamente." },
    },
    synthesis: { dynamic: "Seu mapa apresenta uma proporção importante de aspectos dinâmicos. Essas configurações não representam obstáculos definitivos. Elas criam uma energia de transformação que o impulsiona a superar certas contradições, desenvolver maior domínio interior e transformar tensões em decisões construtivas.", harmonious: "Seu mapa apresenta várias trocas harmoniosas entre os planetas. Você dispõe de recursos naturais, talentos espontâneos e da capacidade de conectar diferentes facetas da sua personalidade. Seu principal desafio é usar ativamente essas facilidades para que se tornem verdadeiras forças de realização.", conjunction: "As conjunções ocupam um lugar importante em seu mapa. Várias energias planetárias estão fortemente concentradas e constituem eixos principais da sua personalidade. Essa intensidade pode sustentar grande determinação, desde que você mantenha perspectiva e flexibilidade suficientes.", balanced: "Seu mapa apresenta um equilíbrio entre fluidez, intensidade e tensão criativa. Os aspectos harmoniosos indicam seus recursos naturais. Os aspectos dinâmicos revelam as áreas em que sua evolução pode ser mais profunda. As conjunções concentram certas forças que desempenham um papel central em sua personalidade.", noAspectGuidance: "Observe progressivamente como suas diferentes energias interiores colaboram em sua vida cotidiana.", guidance: "O aspecto mais exato desta seleção conecta {p1} e {p2}, com um orbe de {orb}. Essa interação merece atenção especial porque pode se manifestar regularmente em suas reações, escolhas e relações. A compreensão consciente desse aspecto pode se tornar uma chave importante para sua evolução pessoal.", noAspectFinal: "Seu mapa natal forma um conjunto vivo no qual cada planeta participa da sua evolução.", final: "Seus aspectos planetários mostram que sua personalidade nunca funciona de maneira fragmentada. Seus talentos, sensibilidades, tensões e capacidades de adaptação respondem continuamente uns aos outros. Os aspectos harmoniosos revelam os recursos nos quais você pode se apoiar naturalmente. Os aspectos mais dinâmicos indicam as áreas em que seu progresso pode se tornar especialmente profundo. Ao observar essas interações com consciência, você desenvolve uma maneira mais livre, coerente e pessoal de expressar seu mapa natal." },
  },
};

function jsString(
  value: string,
): string {
  return JSON.stringify(value);
}

function injectLocalizedRuntime(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "const PREMIUM_ASPECT_LOCALIZATION =",
    )
  ) {
    return source;
  }

  const copy = COPY[locale];

  const runtime = `
const PREMIUM_ASPECT_LOCALIZATION = ${JSON.stringify(copy, null, 2)} as const;

function fillPremiumAspectTemplate(
  template: string,
  values: Record<string, string>,
): string {
  return template.replace(
    /\\{([a-z0-9]+)\\}/gi,
    (_full, key: string) =>
      values[key] ?? "",
  );
}

function getLocalizedPlanetName(
  value: string,
): string {
  return (
    PREMIUM_ASPECT_LOCALIZATION.planetNames[value] ||
    value
  );
}

function getLocalizedAspectName(
  value: string,
): string {
  return (
    PREMIUM_ASPECT_LOCALIZATION.aspectNames[value] ||
    value
  );
}

function getLocalizedAspectNature(
  value: string,
): string {
  return (
    PREMIUM_ASPECT_LOCALIZATION.aspectNatures[value] ||
    value
  );
}

function getLocalizedAspectCategory(
  value: string,
): string {
  return (
    PREMIUM_ASPECT_LOCALIZATION.categories[value] ||
    value
  );
}

function getLocalizedAspectStrength(
  aspect: CalculatedAspect,
): string {
  const ratio =
    aspect.orb / aspect.aspect.orb;

  if (ratio <= 0.25) {
    return PREMIUM_ASPECT_LOCALIZATION.strength.veryPowerful;
  }

  if (ratio <= 0.5) {
    return PREMIUM_ASPECT_LOCALIZATION.strength.powerful;
  }

  if (ratio <= 0.75) {
    return PREMIUM_ASPECT_LOCALIZATION.strength.moderate;
  }

  return PREMIUM_ASPECT_LOCALIZATION.strength.subtle;
}

function getLocalizedAspectInterpretation(
  calculatedAspect: CalculatedAspect,
): AspectInterpretation {
  const firstPlanet =
    getLocalizedPlanetName(
      calculatedAspect.planetA,
    );

  const secondPlanet =
    getLocalizedPlanetName(
      calculatedAspect.planetB,
    );

  const firstEnergy =
    PREMIUM_ASPECT_LOCALIZATION.energies[
      calculatedAspect.planetA
    ] ||
    PREMIUM_ASPECT_LOCALIZATION.fallbacks.energy1;

  const secondEnergy =
    PREMIUM_ASPECT_LOCALIZATION.energies[
      calculatedAspect.planetB
    ] ||
    PREMIUM_ASPECT_LOCALIZATION.fallbacks.energy2;

  const firstManifestation =
    PREMIUM_ASPECT_LOCALIZATION.manifestations[
      calculatedAspect.planetA
    ] ||
    PREMIUM_ASPECT_LOCALIZATION.fallbacks.manifestation1;

  const secondManifestation =
    PREMIUM_ASPECT_LOCALIZATION.manifestations[
      calculatedAspect.planetB
    ] ||
    PREMIUM_ASPECT_LOCALIZATION.fallbacks.manifestation2;

  const key =
    calculatedAspect.aspect.name as
      keyof typeof PREMIUM_ASPECT_LOCALIZATION.interpretations;

  const selected =
    PREMIUM_ASPECT_LOCALIZATION.interpretations[key] ||
    PREMIUM_ASPECT_LOCALIZATION.interpretations.default;

  const values = {
    p1: firstPlanet,
    p2: secondPlanet,
    e1: firstEnergy,
    e2: secondEnergy,
    m1: firstManifestation,
    m2: secondManifestation,
  };

  return {
    introduction:
      fillPremiumAspectTemplate(
        selected.introduction,
        values,
      ),
    manifestation:
      fillPremiumAspectTemplate(
        selected.manifestation,
        values,
      ),
    evolution:
      fillPremiumAspectTemplate(
        selected.evolution,
        values,
      ),
  };
}

function getLocalizedGlobalSynthesis(
  aspects: CalculatedAspect[],
): string {
  const harmoniousCount =
    aspects.filter(
      ({ aspect }) =>
        aspect.name === "Trigone" ||
        aspect.name === "Sextile",
    ).length;

  const dynamicCount =
    aspects.filter(
      ({ aspect }) =>
        aspect.name === "Carré" ||
        aspect.name === "Opposition",
    ).length;

  const conjunctionCount =
    aspects.filter(
      ({ aspect }) =>
        aspect.name === "Conjonction",
    ).length;

  if (
    dynamicCount > harmoniousCount &&
    dynamicCount > conjunctionCount
  ) {
    return PREMIUM_ASPECT_LOCALIZATION.synthesis.dynamic;
  }

  if (
    harmoniousCount > dynamicCount &&
    harmoniousCount >= conjunctionCount
  ) {
    return PREMIUM_ASPECT_LOCALIZATION.synthesis.harmonious;
  }

  if (
    conjunctionCount > harmoniousCount &&
    conjunctionCount > dynamicCount
  ) {
    return PREMIUM_ASPECT_LOCALIZATION.synthesis.conjunction;
  }

  return PREMIUM_ASPECT_LOCALIZATION.synthesis.balanced;
}

function getLocalizedGlobalGuidance(
  aspects: CalculatedAspect[],
): string {
  const strongestAspect = aspects[0];

  if (!strongestAspect) {
    return PREMIUM_ASPECT_LOCALIZATION.synthesis.noAspectGuidance;
  }

  return fillPremiumAspectTemplate(
    PREMIUM_ASPECT_LOCALIZATION.synthesis.guidance,
    {
      p1: getLocalizedPlanetName(
        strongestAspect.planetA,
      ),
      p2: getLocalizedPlanetName(
        strongestAspect.planetB,
      ),
      orb: formatOrb(
        strongestAspect.orb,
      ),
    },
  );
}

function getLocalizedFinalAspectMessage(
  aspects: CalculatedAspect[],
): string {
  if (aspects.length === 0) {
    return PREMIUM_ASPECT_LOCALIZATION.synthesis.noAspectFinal;
  }

  return PREMIUM_ASPECT_LOCALIZATION.synthesis.final;
}

`;

  const marker =
    "const styles = StyleSheet.create({";

  if (!source.includes(marker)) {
    return source;
  }

  return source.replace(
    marker,
    `${runtime}${marker}`,
  );
}

function replaceVisibleLabels(
  source: string,
  locale: NonFrenchLocale,
): string {
  const labels = COPY[locale].labels;

  const replacements: Array<
    [string, string]
  > = [
    ["Analyse Premium", labels.premiumAnalysis],
    ["Vos aspects planétaires — suite", labels.planetaryAspectsContinued],
    ["Vos aspects planétaires", labels.planetaryAspects],
    ["Synthèse Premium", labels.premiumSynthesis],
    ["Synthèse de vos aspects", labels.aspectsSynthesis],
    ["Aspects analysés", labels.analyzedAspects],
    ["Aspects harmonieux", labels.harmoniousAspects],
    ["Aspects dynamiques", labels.dynamicAspects],
    ["Conjonctions", labels.conjunctions],
    ["Votre dynamique générale", labels.overallDynamic],
    ["Votre point d’attention principal", labels.mainFocus],
    ["Ce que révèlent ensemble vos aspects planétaires", labels.together],
    ["Comment utiliser cette analyse", labels.howToUse],
    ["Analyse indisponible", labels.unavailable],
  ];

  let output = source;

  for (
    const [french, translated] of replacements
  ) {
    output = output.split(french).join(translated);
  }

  output = output.replace(
    /Partie\{" "\}/g,
    `${labels.part}{" "}`,
  );

  output = output.replace(
    /\}\s+sur\{" "\}/g,
    `} ${labels.of}{" "}`,
  );

  output = output.replace(
    /\bOrbe\b/g,
    labels.orb,
  );

  output = output.replace(
    /· Aspect\{" "\}/g,
    `· ${labels.aspectWord}{" "}`,
  );

  output = output.replace(
    /Signification de\s+l’aspect/g,
    labels.meaning,
  );

  output = output.replace(
    /Manifestation dans\s+votre vie/g,
    labels.manifestation,
  );

  output = output.replace(
    /Votre clé\s+d’évolution/g,
    labels.evolution,
  );

  return output;
}

function redirectDynamicFunctions(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /getAspectInterpretation\(\s*calculatedAspect\s*\)/g,
    "getLocalizedAspectInterpretation(calculatedAspect)",
  );

  output = output.replace(
    /getAspectStrength\(\s*calculatedAspect\s*\)/g,
    "getLocalizedAspectStrength(calculatedAspect)",
  );

  output = output.replace(
    /getGlobalSynthesis\(\s*calculatedAspects\s*\)/g,
    "getLocalizedGlobalSynthesis(calculatedAspects)",
  );

  output = output.replace(
    /getGlobalGuidance\(\s*calculatedAspects\s*\)/g,
    "getLocalizedGlobalGuidance(calculatedAspects)",
  );

  output = output.replace(
    /getFinalAspectMessage\(\s*calculatedAspects\s*\)/g,
    "getLocalizedFinalAspectMessage(calculatedAspects)",
  );

  return output;
}

function localizeRenderedValues(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /\{\s*firstPlanet\s*\}/g,
    "{getLocalizedPlanetName(firstPlanet)}",
  );

  output = output.replace(
    /\{\s*secondPlanet\s*\}/g,
    "{getLocalizedPlanetName(secondPlanet)}",
  );

  output = output.replace(
    /\{\s*calculatedAspect\s*\.aspect\s*\.name\s*\}/g,
    "{getLocalizedAspectName(calculatedAspect.aspect.name)}",
  );

  output = output.replace(
    /\{\s*calculatedAspect\s*\.aspect\s*\.nature\s*\}/g,
    "{getLocalizedAspectNature(calculatedAspect.aspect.nature)}",
  );

  output = output.replace(
    /\{\s*calculatedAspect\s*\.aspect\s*\.category\s*\}/g,
    "{getLocalizedAspectCategory(calculatedAspect.aspect.category)}",
  );

  return output;
}

export function localizePremiumAspects(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const safeLocale =
    locale as NonFrenchLocale;

  let output = source;

  output = injectLocalizedRuntime(
    output,
    safeLocale,
  );

  output = redirectDynamicFunctions(
    output,
  );

  output = localizeRenderedValues(
    output,
  );

  output = replaceVisibleLabels(
    output,
    safeLocale,
  );

  return output;
}
