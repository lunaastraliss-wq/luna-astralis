import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type SignatureAspectCopy = {
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
    analysis: string;
    planetaryAspects: string;
    planetaryAspectsContinued: string;
    part: string;
    of: string;
    orb: string;
    aspectWord: string;
    meaning: string;
    manifestation: string;
    evolution: string;
    synthesisBadge: string;
    aspectsSynthesis: string;
    detectedAspects: string;
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

const COPY: Record<NonFrenchLocale, SignatureAspectCopy> = {
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
      analysis: "Signature Analysis",
      planetaryAspects: "Your planetary aspects",
      planetaryAspectsContinued: "Your planetary aspects — continued",
      part: "Part",
      of: "of",
      orb: "Orb",
      aspectWord: "Aspect",
      meaning: "Meaning of the aspect",
      manifestation: "Manifestation in your life",
      evolution: "Your key to growth",
      synthesisBadge: "Signature Synthesis",
      aspectsSynthesis: "Synthesis of your aspects",
      detectedAspects: "Aspects detected",
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
    labels: { analysis: "Análisis Firma", planetaryAspects: "Tus aspectos planetarios", planetaryAspectsContinued: "Tus aspectos planetarios — continuación", part: "Parte", of: "de", orb: "Orbe", aspectWord: "Aspecto", meaning: "Significado del aspecto", manifestation: "Manifestación en tu vida", evolution: "Tu clave de evolución", synthesisBadge: "Síntesis Firma", aspectsSynthesis: "Síntesis de tus aspectos", detectedAspects: "Aspectos detectados", harmoniousAspects: "Aspectos armoniosos", dynamicAspects: "Aspectos dinámicos", conjunctions: "Conjunciones", overallDynamic: "Tu dinámica general", mainFocus: "Tu principal punto de atención", together: "Lo que revelan en conjunto tus aspectos planetarios", howToUse: "Cómo utilizar este análisis", unavailable: "Análisis no disponible" },
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
    labels: { analysis: "Signatur-Analyse", planetaryAspects: "Ihre planetarischen Aspekte", planetaryAspectsContinued: "Ihre planetarischen Aspekte — Fortsetzung", part: "Teil", of: "von", orb: "Orb", aspectWord: "Aspekt", meaning: "Bedeutung des Aspekts", manifestation: "Auswirkung in Ihrem Leben", evolution: "Ihr Entwicklungsschlüssel", synthesisBadge: "Signatur-Synthese", aspectsSynthesis: "Synthese Ihrer Aspekte", detectedAspects: "Erkannte Aspekte", harmoniousAspects: "Harmonische Aspekte", dynamicAspects: "Dynamische Aspekte", conjunctions: "Konjunktionen", overallDynamic: "Ihre Gesamtdynamik", mainFocus: "Ihr wichtigster Schwerpunkt", together: "Was Ihre planetarischen Aspekte gemeinsam zeigen", howToUse: "So nutzen Sie diese Analyse", unavailable: "Analyse nicht verfügbar" },
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
    labels: { analysis: "Analisi Firma", planetaryAspects: "I tuoi aspetti planetari", planetaryAspectsContinued: "I tuoi aspetti planetari — seguito", part: "Parte", of: "di", orb: "Orbe", aspectWord: "Aspetto", meaning: "Significato dell’aspetto", manifestation: "Manifestazione nella tua vita", evolution: "La tua chiave di evoluzione", synthesisBadge: "Sintesi Firma", aspectsSynthesis: "Sintesi dei tuoi aspetti", detectedAspects: "Aspetti rilevati", harmoniousAspects: "Aspetti armoniosi", dynamicAspects: "Aspetti dinamici", conjunctions: "Congiunzioni", overallDynamic: "La tua dinamica generale", mainFocus: "Il tuo principale punto di attenzione", together: "Cosa rivelano insieme i tuoi aspetti planetari", howToUse: "Come utilizzare questa analisi", unavailable: "Analisi non disponibile" },
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
    labels: { analysis: "Análise Assinatura", planetaryAspects: "Seus aspectos planetários", planetaryAspectsContinued: "Seus aspectos planetários — continuação", part: "Parte", of: "de", orb: "Orbe", aspectWord: "Aspecto", meaning: "Significado do aspecto", manifestation: "Manifestação em sua vida", evolution: "Sua chave de evolução", synthesisBadge: "Síntese Assinatura", aspectsSynthesis: "Síntese dos seus aspectos", detectedAspects: "Aspectos detectados", harmoniousAspects: "Aspectos harmoniosos", dynamicAspects: "Aspectos dinâmicos", conjunctions: "Conjunções", overallDynamic: "Sua dinâmica geral", mainFocus: "Seu principal ponto de atenção", together: "O que seus aspectos planetários revelam em conjunto", howToUse: "Como utilizar esta análise", unavailable: "Análise indisponível" },
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

type SignatureAspectExtraCopy = {
  pairSeparator: string;
  planetThemes: Record<string, string>;
  introMain: string;
  introUnavailable: string;
  unavailableBody: string;
  synthesisIntro: string;
  guideBadge: string;
  guideTitle: string;
  guideIntro: string;
  howToUseBody: string;
  aspectsTeachTitle: string;
  aspectsTeachBody: string;
  priorityTitle: string;
  priorities: Record<
    "Conjonction" | "Sextile" | "Carré" | "Trigone" | "Opposition" | "default",
    string
  >;
  markersTitle: string;
  marker1: string;
  marker2: string;
  marker3: string;
};

const EXTRA: Record<NonFrenchLocale, SignatureAspectExtraCopy> = {
  en: {
    pairSeparator: " and ",
    planetThemes: {
      Sun: "Identity",
      Moon: "Emotions",
      Mercury: "Thought and communication",
      Venus: "Love and values",
      Mars: "Action and desire",
      Jupiter: "Expansion and confidence",
      Saturn: "Structure and responsibility",
      Uranus: "Freedom and change",
      Neptune: "Intuition and ideals",
      Pluto: "Transformation and depth",
    },
    introMain: "Aspects describe the exchanges between the planets in your chart. They reveal your natural talents, your inner tensions, and the mechanisms that contribute to your personal evolution.",
    introUnavailable: "Aspects represent the angular relationships between the planets. They show how the different dimensions of your personality cooperate, reinforce one another, or challenge one another.",
    unavailableBody: "The planetary longitudes required to calculate the aspects are not available in this natal chart data.",
    synthesisIntro: "This synthesis presents the overall balance between your natural abilities, your creative tensions, your energy concentrations, and the planets that occupy a central place in your natal chart.",
    guideBadge: "Signature Guide",
    guideTitle: "How to integrate your aspects",
    guideIntro: "This page helps you turn the reading of your planetary aspects into concrete reference points for your personal growth.",
    howToUseBody: "Planetary aspects describe tendencies that evolve with your life experience. Harmonious aspects represent natural resources, while dynamic aspects reveal the areas where your growth can be deepest. Pay particular attention to the situations that activate your most exact aspect and your most connected planet. They often highlight important points in your inner functioning and personal development.",
    aspectsTeachTitle: "What your aspects teach you",
    aspectsTeachBody: "The interactions in your chart show that your growth does not depend only on your natural qualities. It also rests on your ability to connect needs that may differ, recognize automatic reactions, and choose a more conscious response. Over time, some tensions become strengths, while some natural abilities need to be developed to reveal their full potential.",
    priorityTitle: "Your current priority",
    priorities: {
      Conjonction: "Your priority is to better distinguish and then integrate the energies that operate together with strong intensity. By creating more perspective between these functions, you can use their power without acting only through automatic reactions.",
      Trigone: "Your priority is to use your natural talents more consciously so they become genuine strengths for fulfillment. An undeveloped ease can remain discreet, while a cultivated talent becomes a lasting resource.",
      Carré: "Your priority is to transform recurring tensions into more conscious decisions and concrete progress. The challenges in your chart can become powerful drivers when you stop experiencing them as impossible contradictions.",
      Opposition: "Your priority is to move beyond all-or-nothing reactions and create a better balance between apparently opposite needs. Relationships and polarized situations can help you recognize qualities that you sometimes project outside yourself.",
      Sextile: "Your priority is to actively seize the opportunities for cooperation present in your chart. These resources often require personal initiative before revealing their full potential.",
      default: "Your priority is to observe how your different energies cooperate in your choices, relationships, and growth. This attention helps you transform automatic reactions into more conscious responses.",
    },
    markersTitle: "Three points to remember",
    marker1: "✦ Observe the situations that activate your most exact aspects.",
    marker2: "✦ Rely on your harmonious aspects when you are going through a more demanding period.",
    marker3: "✦ Return to this analysis over time: some aspects gain more meaning with experience.",
  },
  es: {
    pairSeparator: " y ",
    planetThemes: {
      Sun: "Identidad",
      Moon: "Emociones",
      Mercury: "Pensamiento y comunicación",
      Venus: "Amor y valores",
      Mars: "Acción y deseo",
      Jupiter: "Expansión y confianza",
      Saturn: "Estructura y responsabilidad",
      Uranus: "Libertad y cambio",
      Neptune: "Intuición e ideales",
      Pluto: "Transformación y profundidad",
    },
    introMain: "Los aspectos describen los intercambios entre los planetas de tu carta. Revelan tus talentos naturales, tus tensiones internas y los mecanismos que participan en tu evolución personal.",
    introUnavailable: "Los aspectos representan las relaciones angulares entre los planetas. Muestran cómo las distintas dimensiones de tu personalidad colaboran, se refuerzan o se desafían mutuamente.",
    unavailableBody: "Las longitudes planetarias necesarias para calcular los aspectos no están disponibles en los datos de esta carta natal.",
    synthesisIntro: "Esta síntesis presenta el equilibrio general entre tus facilidades naturales, tus tensiones creativas, tus concentraciones de energía y los planetas que ocupan un lugar central en tu carta natal.",
    guideBadge: "Guía Firma",
    guideTitle: "Cómo integrar tus aspectos",
    guideIntro: "Esta página te ayuda a transformar la lectura de tus aspectos planetarios en referencias concretas para tu evolución personal.",
    howToUseBody: "Los aspectos planetarios describen tendencias que evolucionan con tu experiencia de vida. Los aspectos armoniosos representan recursos naturales, mientras que los aspectos dinámicos revelan los ámbitos donde tu progreso puede ser más profundo. Observa especialmente las situaciones que activan tu aspecto más exacto y tu planeta más conectado. Suelen señalar puntos importantes de tu funcionamiento interior y de tu evolución personal.",
    aspectsTeachTitle: "Lo que tus aspectos te enseñan",
    aspectsTeachBody: "Las interacciones de tu carta muestran que tu evolución no depende únicamente de tus cualidades naturales. También se basa en tu capacidad para relacionar necesidades a veces diferentes, reconocer tus automatismos y elegir una respuesta más consciente. Con el tiempo, algunas tensiones se convierten en fortalezas, mientras que ciertas facilidades necesitan desarrollarse para revelar todo su potencial.",
    priorityTitle: "Tu prioridad actual",
    priorities: {
      Conjonction: "Tu prioridad consiste en distinguir mejor e integrar después las energías que funcionan juntas con gran intensidad. Al crear más perspectiva entre estas funciones, puedes utilizar su fuerza sin actuar únicamente por automatismo.",
      Trigone: "Tu prioridad consiste en utilizar de manera más consciente tus talentos naturales para que se conviertan en verdaderas fuerzas de realización. Una facilidad no desarrollada puede permanecer discreta, mientras que un talento cultivado se convierte en un recurso duradero.",
      Carré: "Tu prioridad consiste en transformar las tensiones repetitivas en decisiones más conscientes y en un progreso concreto. Los desafíos de tu carta pueden convertirse en motores poderosos cuando dejas de vivirlos como contradicciones imposibles de resolver.",
      Opposition: "Tu prioridad consiste en salir de la lógica del todo o nada y crear un mejor equilibrio entre necesidades aparentemente opuestas. Las relaciones y las situaciones de polaridad pueden ayudarte a reconocer cualidades que a veces proyectas fuera de ti.",
      Sextile: "Tu prioridad consiste en aprovechar activamente las oportunidades de cooperación presentes en tu carta. Estos recursos suelen requerir una iniciativa personal antes de revelar todo su potencial.",
      default: "Tu prioridad consiste en observar cómo colaboran tus diferentes energías en tus decisiones, relaciones y evolución. Esta atención te ayuda a transformar las reacciones automáticas en respuestas más conscientes.",
    },
    markersTitle: "Tres puntos para recordar",
    marker1: "✦ Observa las situaciones que activan tus aspectos más exactos.",
    marker2: "✦ Apóyate en tus aspectos armoniosos cuando atravieses un período más exigente.",
    marker3: "✦ Vuelve a este análisis con el tiempo: algunos aspectos adquieren más sentido con la experiencia.",
  },
  de: {
    pairSeparator: " und ",
    planetThemes: {
      Sun: "Identität",
      Moon: "Emotionen",
      Mercury: "Denken und Kommunikation",
      Venus: "Liebe und Werte",
      Mars: "Handlung und Begehren",
      Jupiter: "Entfaltung und Vertrauen",
      Saturn: "Struktur und Verantwortung",
      Uranus: "Freiheit und Veränderung",
      Neptune: "Intuition und Ideale",
      Pluto: "Transformation und Tiefe",
    },
    introMain: "Aspekte beschreiben die Wechselwirkungen zwischen den Planeten Ihres Horoskops. Sie zeigen Ihre natürlichen Talente, inneren Spannungen und die Mechanismen, die zu Ihrer persönlichen Entwicklung beitragen.",
    introUnavailable: "Aspekte stellen die Winkelbeziehungen zwischen den Planeten dar. Sie zeigen, wie die verschiedenen Dimensionen Ihrer Persönlichkeit zusammenarbeiten, sich gegenseitig stärken oder herausfordern.",
    unavailableBody: "Die für die Berechnung der Aspekte erforderlichen Planetenlängen sind in den Daten dieses Geburtshoroskops nicht verfügbar.",
    synthesisIntro: "Diese Synthese zeigt das allgemeine Gleichgewicht zwischen Ihren natürlichen Stärken, kreativen Spannungen, Energiekonzentrationen und den Planeten, die in Ihrem Geburtshoroskop eine zentrale Rolle spielen.",
    guideBadge: "Signatur-Leitfaden",
    guideTitle: "Wie Sie Ihre Aspekte integrieren",
    guideIntro: "Diese Seite hilft Ihnen, die Deutung Ihrer planetarischen Aspekte in konkrete Orientierungspunkte für Ihre persönliche Entwicklung umzusetzen.",
    howToUseBody: "Planetarische Aspekte beschreiben Tendenzen, die sich mit Ihrer Lebenserfahrung entwickeln. Harmonische Aspekte stehen für natürliche Ressourcen, während dynamische Aspekte die Bereiche zeigen, in denen Ihre Entwicklung besonders tief gehen kann. Beobachten Sie besonders Situationen, die Ihren genauesten Aspekt und Ihren am stärksten vernetzten Planeten aktivieren. Sie weisen oft auf wichtige Punkte Ihres inneren Funktionierens und Ihrer persönlichen Entwicklung hin.",
    aspectsTeachTitle: "Was Ihre Aspekte Sie lehren",
    aspectsTeachBody: "Die Wechselwirkungen in Ihrem Horoskop zeigen, dass Ihre Entwicklung nicht nur von Ihren natürlichen Qualitäten abhängt. Sie beruht auch auf Ihrer Fähigkeit, unterschiedliche Bedürfnisse miteinander zu verbinden, automatische Reaktionen zu erkennen und bewusster zu antworten. Mit der Zeit können Spannungen zu Stärken werden, während manche Leichtigkeit bewusst entwickelt werden muss, um ihr volles Potenzial zu zeigen.",
    priorityTitle: "Ihre aktuelle Priorität",
    priorities: {
      Conjonction: "Ihre Priorität besteht darin, die Energien, die mit großer Intensität zusammenwirken, klarer zu unterscheiden und anschließend zu integrieren. Mehr Abstand zwischen diesen Funktionen hilft Ihnen, ihre Kraft zu nutzen, ohne nur automatisch zu reagieren.",
      Trigone: "Ihre Priorität besteht darin, Ihre natürlichen Talente bewusster einzusetzen, damit sie zu echten Kräften der Entfaltung werden. Eine unentwickelte Leichtigkeit kann unauffällig bleiben, während ein gepflegtes Talent zu einer dauerhaften Ressource wird.",
      Carré: "Ihre Priorität besteht darin, wiederkehrende Spannungen in bewusstere Entscheidungen und konkreten Fortschritt umzuwandeln. Die Herausforderungen Ihres Horoskops können zu starken Antriebskräften werden, wenn Sie sie nicht länger als unlösbare Widersprüche erleben.",
      Opposition: "Ihre Priorität besteht darin, Alles-oder-nichts-Reaktionen zu verlassen und ein besseres Gleichgewicht zwischen scheinbar gegensätzlichen Bedürfnissen zu schaffen. Beziehungen und Polarisierungen können Ihnen helfen, Eigenschaften zu erkennen, die Sie manchmal nach außen projizieren.",
      Sextile: "Ihre Priorität besteht darin, die in Ihrem Horoskop vorhandenen Möglichkeiten zur Zusammenarbeit aktiv zu nutzen. Diese Ressourcen benötigen oft persönliche Initiative, bevor sie ihr volles Potenzial entfalten.",
      default: "Ihre Priorität besteht darin, zu beobachten, wie Ihre verschiedenen Energien in Ihren Entscheidungen, Beziehungen und Ihrer Entwicklung zusammenwirken. Diese Aufmerksamkeit hilft Ihnen, automatische Reaktionen in bewusstere Antworten zu verwandeln.",
    },
    markersTitle: "Drei Punkte zum Merken",
    marker1: "✦ Beobachten Sie die Situationen, die Ihre genauesten Aspekte aktivieren.",
    marker2: "✦ Stützen Sie sich in anspruchsvolleren Phasen auf Ihre harmonischen Aspekte.",
    marker3: "✦ Kehren Sie im Laufe der Zeit zu dieser Analyse zurück: Manche Aspekte gewinnen mit der Erfahrung an Bedeutung.",
  },
  it: {
    pairSeparator: " e ",
    planetThemes: {
      Sun: "Identità",
      Moon: "Emozioni",
      Mercury: "Pensiero e comunicazione",
      Venus: "Amore e valori",
      Mars: "Azione e desiderio",
      Jupiter: "Espansione e fiducia",
      Saturn: "Struttura e responsabilità",
      Uranus: "Libertà e cambiamento",
      Neptune: "Intuizione e ideali",
      Pluto: "Trasformazione e profondità",
    },
    introMain: "Gli aspetti descrivono gli scambi tra i pianeti del tuo tema. Rivelano i tuoi talenti naturali, le tensioni interiori e i meccanismi che partecipano alla tua evoluzione personale.",
    introUnavailable: "Gli aspetti rappresentano le relazioni angolari tra i pianeti. Mostrano come le diverse dimensioni della tua personalità collaborano, si rafforzano o si sfidano reciprocamente.",
    unavailableBody: "Le longitudini planetarie necessarie per calcolare gli aspetti non sono disponibili nei dati di questo tema natale.",
    synthesisIntro: "Questa sintesi presenta l’equilibrio generale tra le tue facilità naturali, le tensioni creative, le concentrazioni di energia e i pianeti che occupano un ruolo centrale nel tuo tema natale.",
    guideBadge: "Guida Firma",
    guideTitle: "Come integrare i tuoi aspetti",
    guideIntro: "Questa pagina ti aiuta a trasformare la lettura dei tuoi aspetti planetari in riferimenti concreti per la tua evoluzione personale.",
    howToUseBody: "Gli aspetti planetari descrivono tendenze che evolvono con la tua esperienza di vita. Gli aspetti armoniosi rappresentano risorse naturali, mentre gli aspetti dinamici rivelano gli ambiti in cui la tua crescita può essere più profonda. Osserva in particolare le situazioni che attivano il tuo aspetto più preciso e il pianeta più connesso. Spesso indicano punti importanti del tuo funzionamento interiore e della tua evoluzione personale.",
    aspectsTeachTitle: "Cosa ti insegnano i tuoi aspetti",
    aspectsTeachBody: "Le interazioni del tuo tema mostrano che la tua evoluzione non dipende soltanto dalle tue qualità naturali. Si basa anche sulla capacità di collegare bisogni talvolta diversi, riconoscere gli automatismi e scegliere una risposta più consapevole. Con il tempo, alcune tensioni diventano punti di forza, mentre certe facilità devono essere sviluppate per rivelare tutto il loro potenziale.",
    priorityTitle: "La tua priorità attuale",
    priorities: {
      Conjonction: "La tua priorità consiste nel distinguere meglio e poi integrare le energie che funzionano insieme con grande intensità. Creando maggiore distanza tra queste funzioni, puoi utilizzare la loro forza senza agire soltanto per automatismo.",
      Trigone: "La tua priorità consiste nell’utilizzare più consapevolmente i tuoi talenti naturali affinché diventino vere forze di realizzazione. Una facilità non sviluppata può restare discreta, mentre un talento coltivato diventa una risorsa duratura.",
      Carré: "La tua priorità consiste nel trasformare le tensioni ricorrenti in decisioni più consapevoli e in un progresso concreto. Le sfide del tuo tema possono diventare potenti motori quando smetti di viverle come contraddizioni impossibili da risolvere.",
      Opposition: "La tua priorità consiste nell’uscire dalla logica del tutto o niente e creare un migliore equilibrio tra bisogni apparentemente opposti. Le relazioni e le situazioni di polarità possono aiutarti a riconoscere qualità che talvolta proietti all’esterno.",
      Sextile: "La tua priorità consiste nel cogliere attivamente le possibilità di cooperazione presenti nel tuo tema. Queste risorse richiedono spesso un’iniziativa personale prima di rivelare tutto il loro potenziale.",
      default: "La tua priorità consiste nell’osservare come le tue diverse energie collaborano nelle scelte, nelle relazioni e nella tua evoluzione. Questa attenzione ti aiuta a trasformare le reazioni automatiche in risposte più consapevoli.",
    },
    markersTitle: "Tre punti da ricordare",
    marker1: "✦ Osserva le situazioni che attivano i tuoi aspetti più precisi.",
    marker2: "✦ Appoggiati ai tuoi aspetti armoniosi quando attraversi un periodo più impegnativo.",
    marker3: "✦ Torna a questa analisi nel tempo: alcuni aspetti acquistano più significato con l’esperienza.",
  },
  pt: {
    pairSeparator: " e ",
    planetThemes: {
      Sun: "Identidade",
      Moon: "Emoções",
      Mercury: "Pensamento e comunicação",
      Venus: "Amor e valores",
      Mars: "Ação e desejo",
      Jupiter: "Expansão e confiança",
      Saturn: "Estrutura e responsabilidade",
      Uranus: "Liberdade e mudança",
      Neptune: "Intuição e ideais",
      Pluto: "Transformação e profundidade",
    },
    introMain: "Os aspectos descrevem as trocas entre os planetas do seu mapa. Eles revelam seus talentos naturais, suas tensões interiores e os mecanismos que participam da sua evolução pessoal.",
    introUnavailable: "Os aspectos representam as relações angulares entre os planetas. Eles mostram como as diferentes dimensões da sua personalidade colaboram, se reforçam ou se desafiam mutuamente.",
    unavailableBody: "As longitudes planetárias necessárias para calcular os aspectos não estão disponíveis nos dados deste mapa natal.",
    synthesisIntro: "Esta síntese apresenta o equilíbrio geral entre suas facilidades naturais, suas tensões criativas, suas concentrações de energia e os planetas que ocupam um lugar central no seu mapa natal.",
    guideBadge: "Guia Assinatura",
    guideTitle: "Como integrar seus aspectos",
    guideIntro: "Esta página ajuda você a transformar a leitura dos seus aspectos planetários em referências concretas para sua evolução pessoal.",
    howToUseBody: "Os aspectos planetários descrevem tendências que evoluem com sua experiência de vida. Os aspectos harmoniosos representam recursos naturais, enquanto os aspectos dinâmicos revelam as áreas em que seu progresso pode ser mais profundo. Observe especialmente as situações que ativam seu aspecto mais exato e seu planeta mais conectado. Elas costumam indicar pontos importantes do seu funcionamento interior e da sua evolução pessoal.",
    aspectsTeachTitle: "O que seus aspectos ensinam",
    aspectsTeachBody: "As interações do seu mapa mostram que sua evolução não depende apenas das suas qualidades naturais. Ela também se apoia na sua capacidade de relacionar necessidades às vezes diferentes, reconhecer automatismos e escolher uma resposta mais consciente. Com o tempo, algumas tensões se tornam forças, enquanto certas facilidades precisam ser desenvolvidas para revelar todo o seu potencial.",
    priorityTitle: "Sua prioridade atual",
    priorities: {
      Conjonction: "Sua prioridade é distinguir melhor e depois integrar as energias que funcionam juntas com grande intensidade. Ao criar mais perspectiva entre essas funções, você pode usar sua força sem agir apenas por automatismo.",
      Trigone: "Sua prioridade é usar de forma mais consciente seus talentos naturais para que se tornem verdadeiras forças de realização. Uma facilidade não desenvolvida pode permanecer discreta, enquanto um talento cultivado se torna um recurso duradouro.",
      Carré: "Sua prioridade é transformar tensões repetitivas em decisões mais conscientes e em progresso concreto. Os desafios do seu mapa podem se tornar motores poderosos quando você deixa de vivê-los como contradições impossíveis de resolver.",
      Opposition: "Sua prioridade é sair da lógica do tudo ou nada e criar um equilíbrio melhor entre necessidades aparentemente opostas. Relações e situações de polaridade podem ajudá-lo a reconhecer qualidades que às vezes você projeta para fora de si.",
      Sextile: "Sua prioridade é aproveitar ativamente as possibilidades de cooperação presentes no seu mapa. Esses recursos muitas vezes exigem iniciativa pessoal antes de revelar todo o seu potencial.",
      default: "Sua prioridade é observar como suas diferentes energias colaboram em suas escolhas, relações e evolução. Essa atenção ajuda você a transformar reações automáticas em respostas mais conscientes.",
    },
    markersTitle: "Três pontos para lembrar",
    marker1: "✦ Observe as situações que ativam seus aspectos mais exatos.",
    marker2: "✦ Apoie-se em seus aspectos harmoniosos quando atravessar um período mais exigente.",
    marker3: "✦ Volte a esta análise ao longo do tempo: alguns aspectos ganham mais sentido com a experiência.",
  },
};

function jsString(
  value: string,
): string {
  return JSON.stringify(value);
}

function injectSignatureLocalizedRuntime(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "const SIGNATURE_ASPECT_LOCALIZATION =",
    )
  ) {
    return source;
  }

  const copy = COPY[locale];
  const extra = EXTRA[locale];

  const runtime = `
const SIGNATURE_ASPECT_LOCALIZATION = ${JSON.stringify(copy, null, 2)} as const;
const SIGNATURE_ASPECT_EXTRA = ${JSON.stringify(extra, null, 2)} as const;

function fillSignatureAspectTemplate(
  template: string,
  values: Record<string, string>,
): string {
  return template.replace(
    /\\{([a-z0-9]+)\\}/gi,
    (_full, key: string) =>
      values[key] ?? "",
  );
}

const SIGNATURE_ASPECT_PLANET_KEYS: Record<string, string> = {
  Sun: "Sun",
  Soleil: "Sun",

  Moon: "Moon",
  Lune: "Moon",

  Mercury: "Mercury",
  Mercure: "Mercury",

  Venus: "Venus",
  Vénus: "Venus",

  Mars: "Mars",

  Jupiter: "Jupiter",

  Saturn: "Saturn",
  Saturne: "Saturn",

  Uranus: "Uranus",

  Neptune: "Neptune",

  Pluto: "Pluto",
  Pluton: "Pluto",
};

function getSignatureLocalizedPlanetName(
  value: string,
): string {
  const canonicalKey =
    SIGNATURE_ASPECT_PLANET_KEYS[value] ||
    value;

  const names =
    SIGNATURE_ASPECT_LOCALIZATION
      .planetNames as Record<string, string>;

  return names[canonicalKey] || value;
}

function getSignatureLocalizedAspectName(
  value: string,
): string {
  const names =
    SIGNATURE_ASPECT_LOCALIZATION
      .aspectNames as Record<string, string>;

  return names[value] || value;
}

function getSignatureLocalizedAspectNature(
  value: string,
): string {
  const natures =
    SIGNATURE_ASPECT_LOCALIZATION
      .aspectNatures as Record<string, string>;

  return natures[value] || value;
}


function getSignatureLocalizedPairTitle(
  firstPlanet: string,
  secondPlanet: string,
): string {
  const firstKey =
    SIGNATURE_ASPECT_PLANET_KEYS[firstPlanet] ||
    firstPlanet;

  const secondKey =
    SIGNATURE_ASPECT_PLANET_KEYS[secondPlanet] ||
    secondPlanet;

  const themes =
    SIGNATURE_ASPECT_EXTRA
      .planetThemes as Record<string, string>;

  const firstTheme =
    themes[firstKey] ||
    getSignatureLocalizedPlanetName(firstPlanet);

  const secondTheme =
    themes[secondKey] ||
    getSignatureLocalizedPlanetName(secondPlanet);

  return (
    firstTheme +
    SIGNATURE_ASPECT_EXTRA.pairSeparator +
    secondTheme
  );
}

function getSignatureLocalizedAspectCategory(
  value: string,
): string {
  const categories =
    SIGNATURE_ASPECT_LOCALIZATION
      .categories as Record<string, string>;

  return categories[value] || value;
}

function getSignatureLocalizedAspectStrength(
  aspect: CalculatedAspect,
): string {
  const ratio =
    aspect.orb / aspect.aspect.orb;

  if (ratio <= 0.25) {
    return SIGNATURE_ASPECT_LOCALIZATION.strength.veryPowerful;
  }

  if (ratio <= 0.5) {
    return SIGNATURE_ASPECT_LOCALIZATION.strength.powerful;
  }

  if (ratio <= 0.75) {
    return SIGNATURE_ASPECT_LOCALIZATION.strength.moderate;
  }

  return SIGNATURE_ASPECT_LOCALIZATION.strength.subtle;
}

function getSignatureLocalizedAspectInterpretation(
  calculatedAspect: CalculatedAspect,
): AspectInterpretation {
  const firstPlanet =
    getSignatureLocalizedPlanetName(
      calculatedAspect.planetA,
    );

  const secondPlanet =
    getSignatureLocalizedPlanetName(
      calculatedAspect.planetB,
    );

  const energies =
    SIGNATURE_ASPECT_LOCALIZATION
      .energies as Record<string, string>;

  const manifestations =
    SIGNATURE_ASPECT_LOCALIZATION
      .manifestations as Record<string, string>;

  const firstEnergy =
    energies[calculatedAspect.planetA] ||
    SIGNATURE_ASPECT_LOCALIZATION.fallbacks.energy1;

  const secondEnergy =
    energies[calculatedAspect.planetB] ||
    SIGNATURE_ASPECT_LOCALIZATION.fallbacks.energy2;

  const firstManifestation =
    manifestations[calculatedAspect.planetA] ||
    SIGNATURE_ASPECT_LOCALIZATION.fallbacks.manifestation1;

  const secondManifestation =
    manifestations[calculatedAspect.planetB] ||
    SIGNATURE_ASPECT_LOCALIZATION.fallbacks.manifestation2;

  const key =
    calculatedAspect.aspect.name as
      keyof typeof SIGNATURE_ASPECT_LOCALIZATION.interpretations;

  const selected =
    SIGNATURE_ASPECT_LOCALIZATION.interpretations[key] ||
    SIGNATURE_ASPECT_LOCALIZATION.interpretations.default;

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
      fillSignatureAspectTemplate(
        selected.introduction,
        values,
      ),
    manifestation:
      fillSignatureAspectTemplate(
        selected.manifestation,
        values,
      ),
    evolution:
      fillSignatureAspectTemplate(
        selected.evolution,
        values,
      ),
  };
}

function getSignatureLocalizedGlobalSynthesis(
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
    return SIGNATURE_ASPECT_LOCALIZATION.synthesis.dynamic;
  }

  if (
    harmoniousCount > dynamicCount &&
    harmoniousCount >= conjunctionCount
  ) {
    return SIGNATURE_ASPECT_LOCALIZATION.synthesis.harmonious;
  }

  if (
    conjunctionCount > harmoniousCount &&
    conjunctionCount > dynamicCount
  ) {
    return SIGNATURE_ASPECT_LOCALIZATION.synthesis.conjunction;
  }

  return SIGNATURE_ASPECT_LOCALIZATION.synthesis.balanced;
}

function getSignatureLocalizedGlobalGuidance(
  aspects: CalculatedAspect[],
): string {
  const strongestAspect = aspects[0];

  if (!strongestAspect) {
    return SIGNATURE_ASPECT_LOCALIZATION.synthesis.noAspectGuidance;
  }

  return fillSignatureAspectTemplate(
    SIGNATURE_ASPECT_LOCALIZATION.synthesis.guidance,
    {
      p1: getSignatureLocalizedPlanetName(
        strongestAspect.planetA,
      ),
      p2: getSignatureLocalizedPlanetName(
        strongestAspect.planetB,
      ),
      orb: formatOrb(
        strongestAspect.orb,
      ),
    },
  );
}

function getSignatureLocalizedAspectPriority(
  aspects: CalculatedAspect[],
): string {
  const statistics =
    getAspectStatistics(aspects);

  const dominantAspect =
    getDominantAspectName(statistics);

  if (
    dominantAspect &&
    SIGNATURE_ASPECT_EXTRA.priorities[dominantAspect]
  ) {
    return SIGNATURE_ASPECT_EXTRA.priorities[dominantAspect];
  }

  return SIGNATURE_ASPECT_EXTRA.priorities.default;
}

function getSignatureLocalizedFinalAspectMessage(
  aspects: CalculatedAspect[],
): string {
  if (aspects.length === 0) {
    return SIGNATURE_ASPECT_LOCALIZATION.synthesis.noAspectFinal;
  }

  return SIGNATURE_ASPECT_LOCALIZATION.synthesis.final;
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

function replaceFlexibleText(
  source: string,
  from: string,
  to: string,
): string {
  const pattern = from
    .trim()
    .split(/\s+/)
    .map((part) =>
      part.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&",
      ),
    )
    .join("\\s+");

  return source.replace(
    new RegExp(pattern, "g"),
    to,
  );
}

function replaceVisibleLabels(
  source: string,
  locale: NonFrenchLocale,
): string {
  const labels = COPY[locale].labels;
  const extra = EXTRA[locale];

  const replacements: Array<
    [string, string]
  > = [
    ["Analyse Signature", labels.analysis],
    ["Vos aspects planétaires — suite", labels.planetaryAspectsContinued],
    ["Vos aspects planétaires", labels.planetaryAspects],
    ["Synthèse Signature", labels.synthesisBadge],
    ["Synthèse de vos aspects", labels.aspectsSynthesis],
    ["Aspects détectés", labels.detectedAspects],
    ["Aspects harmonieux", labels.harmoniousAspects],
    ["Aspects dynamiques", labels.dynamicAspects],
    ["Conjonctions", labels.conjunctions],
    ["Votre dynamique générale", labels.overallDynamic],
    ["Votre point d’attention principal", labels.mainFocus],
    ["Ce que révèlent ensemble vos aspects planétaires", labels.together],
    ["Analyse indisponible", labels.unavailable],
    ["Guide Signature", extra.guideBadge],
    ["Comment intégrer vos aspects", extra.guideTitle],
    ["Comment utiliser cette analyse", labels.howToUse],
    ["Ce que vos aspects vous enseignent", extra.aspectsTeachTitle],
    ["Votre priorité actuelle", extra.priorityTitle],
    ["Trois repères à conserver", extra.markersTitle],
    [
      "Les aspects décrivent les échanges entre les planètes de votre thème. Ils révèlent vos talents naturels, vos tensions intérieures et les mécanismes qui participent à votre évolution personnelle.",
      extra.introMain,
    ],
    [
      "Les aspects représentent les relations angulaires entre les planètes. Ils montrent comment les différentes dimensions de votre personnalité collaborent, se renforcent ou se mettent mutuellement au défi.",
      extra.introUnavailable,
    ],
    [
      "Les longitudes planétaires nécessaires au calcul des aspects ne sont pas disponibles dans les données de ce thème natal.",
      extra.unavailableBody,
    ],
    [
      "Cette synthèse présente l’équilibre général entre vos facilités naturelles, vos tensions créatrices, vos concentrations d’énergie et les planètes qui occupent une place centrale dans votre thème natal.",
      extra.synthesisIntro,
    ],
    [
      "Cette page vous aide à transformer la lecture de vos aspects planétaires en repères concrets pour votre évolution personnelle.",
      extra.guideIntro,
    ],
    [
      "Les aspects planétaires décrivent des tendances qui évoluent avec votre expérience de vie. Les aspects harmonieux représentent vos ressources naturelles, tandis que les aspects dynamiques révèlent les domaines où votre progression peut être la plus profonde. Observez particulièrement les situations qui activent votre aspect le plus précis et votre planète la plus reliée. Elles constituent souvent des points importants de votre fonctionnement intérieur et de votre évolution personnelle.",
      extra.howToUseBody,
    ],
    [
      "Les interactions de votre thème montrent que votre évolution ne dépend pas seulement de vos qualités naturelles. Elle repose aussi sur votre capacité à relier des besoins parfois différents, à reconnaître vos automatismes et à choisir une réponse plus consciente. Avec le temps, certaines tensions deviennent des forces, tandis que certaines facilités demandent à être développées pour révéler tout leur potentiel.",
      extra.aspectsTeachBody,
    ],
    [
      "✦ Observez les situations qui activent vos aspects les plus précis.",
      extra.marker1,
    ],
    [
      "✦ Appuyez-vous sur vos aspects harmonieux lorsque vous traversez une période plus exigeante.",
      extra.marker2,
    ],
    [
      "✦ Revenez à cette analyse au fil du temps : certains aspects prennent davantage de sens avec l’expérience.",
      extra.marker3,
    ],
  ];

  let output = source;

  for (
    const [french, translated] of replacements
  ) {
    output = replaceFlexibleText(
      output,
      french,
      translated,
    );
  }

  output = output.replace(
    /Partie\{" "\}/g,
    `${labels.part}{" "}`,
  );

  output = output.replace(
    /\{" "\}\s*sur\{" "\}/g,
    `{" "}${labels.of}{" "}`,
  );

  output = output.replace(
    /\bOrbe\b/g,
    labels.orb,
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
    "getSignatureLocalizedAspectInterpretation(calculatedAspect)",
  );

  output = output.replace(
    /getAspectStrength\(\s*calculatedAspect\s*\)/g,
    "getSignatureLocalizedAspectStrength(calculatedAspect)",
  );

  output = output.replace(
    /getGlobalSynthesis\(\s*allCalculatedAspects\s*\)/g,
    "getSignatureLocalizedGlobalSynthesis(allCalculatedAspects)",
  );

  output = output.replace(
    /getGlobalGuidance\(\s*allCalculatedAspects\s*\)/g,
    "getSignatureLocalizedGlobalGuidance(allCalculatedAspects)",
  );

  output = output.replace(
    /getFinalAspectMessage\(\s*allCalculatedAspects\s*\)/g,
    "getSignatureLocalizedFinalAspectMessage(allCalculatedAspects)",
  );

  output = output.replace(
    /getAspectPriority\(\s*allCalculatedAspects\s*\)/g,
    "getSignatureLocalizedAspectPriority(allCalculatedAspects)",
  );

  return output;
}

function localizeRenderedValues(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /\{\s*firstPlanet\s*\}/g,
    "{getSignatureLocalizedPlanetName(firstPlanet)}",
  );

  output = output.replace(
    /\{\s*secondPlanet\s*\}/g,
    "{getSignatureLocalizedPlanetName(secondPlanet)}",
  );

  output = output.replace(
    /\{\s*calculatedAspect\s*\.aspect\s*\.name\s*\}/g,
    "{getSignatureLocalizedAspectName(calculatedAspect.aspect.name)}",
  );

  output = output.replace(
    /\{\s*pairTheme\s*\.title\s*\}/g,
    "{getSignatureLocalizedPairTitle(calculatedAspect.planetA, calculatedAspect.planetB)}",
  );

  output = output.replace(
    /\{\s*calculatedAspect\s*\.aspect\s*\.nature\s*\}/g,
    "{getSignatureLocalizedAspectNature(calculatedAspect.aspect.nature)}",
  );

  output = output.replace(
    /\{\s*calculatedAspect\s*\.aspect\s*\.category\s*\}/g,
    "{getSignatureLocalizedAspectCategory(calculatedAspect.aspect.category)}",
  );

  return output;
}

export function localizeSignatureAspects(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const safeLocale =
    locale as NonFrenchLocale;

  let output = source;

  output = injectSignatureLocalizedRuntime(
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
