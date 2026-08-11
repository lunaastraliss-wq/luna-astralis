import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<
    PaidPdfLocale,
    "fr"
  >;

type ElementName =
  | "Feu"
  | "Terre"
  | "Air"
  | "Eau";

type ModalityName =
  | "Cardinal"
  | "Fixe"
  | "Mutable";

type SynthesisLabels = {
  analysis: string;
  title: string;
  subtitle: string;

  innerEngine: string;
  mentalPattern: string;
  relationshipPattern: string;
  lifeChallenge: string;
  potential: string;
  signatureSentence: string;

  ascendant: string;
  midheaven: string;

  sun: string;
  moon: string;
  mercury: string;
  venus: string;
  mars: string;
  jupiter: string;
  saturn: string;
  uranus: string;
  neptune: string;
  pluto: string;

  aries: string;
  taurus: string;
  gemini: string;
  cancer: string;
  leo: string;
  virgo: string;
  libra: string;
  scorpio: string;
  sagittarius: string;
  capricorn: string;
  aquarius: string;
  pisces: string;

  fire: string;
  earth: string;
  air: string;
  water: string;

  cardinal: string;
  fixed: string;
  mutable: string;

  unspecified: string;

  elementDescriptions:
    Record<
      ElementName,
      string
    >;

  modalityDescriptions:
    Record<
      ModalityName,
      string
    >;

  houseDescriptions:
    Record<
      number,
      string
    >;

  sunProfiles:
    Record<
      string,
      string
    >;

  moonProfiles:
    Record<
      string,
      string
    >;

  ascendantProfiles:
    Record<
      string,
      string
    >;
};

const LABELS:
Record<
  NonFrenchLocale,
  SynthesisLabels
> = {
  en: {
    analysis:
      "Signature Synthesis",

    title:
      "Your deep astrological signature",

    subtitle:
      "A synthesis of the main forces in your chart, showing how your identity, emotions, thoughts, relationships, ambitions, and transformations work together.",

    innerEngine:
      "Your inner engine",

    mentalPattern:
      "Your mental and decision-making pattern",

    relationshipPattern:
      "Your way of loving and committing",

    lifeChallenge:
      "Your main evolutionary challenge",

    potential:
      "Your potential for fulfillment",

    signatureSentence:
      "Your Signature sentence",

    ascendant:
      "Ascendant",

    midheaven:
      "Midheaven",

    sun:
      "Sun",

    moon:
      "Moon",

    mercury:
      "Mercury",

    venus:
      "Venus",

    mars:
      "Mars",

    jupiter:
      "Jupiter",

    saturn:
      "Saturn",

    uranus:
      "Uranus",

    neptune:
      "Neptune",

    pluto:
      "Pluto",

    aries:
      "Aries",

    taurus:
      "Taurus",

    gemini:
      "Gemini",

    cancer:
      "Cancer",

    leo:
      "Leo",

    virgo:
      "Virgo",

    libra:
      "Libra",

    scorpio:
      "Scorpio",

    sagittarius:
      "Sagittarius",

    capricorn:
      "Capricorn",

    aquarius:
      "Aquarius",

    pisces:
      "Pisces",

    fire:
      "Fire",

    earth:
      "Earth",

    air:
      "Air",

    water:
      "Water",

    cardinal:
      "Cardinal",

    fixed:
      "Fixed",

    mutable:
      "Mutable",

    unspecified:
      "unspecified",

    elementDescriptions: {
      Feu:
        "an energy oriented toward momentum, courage, expression, and direct action",

      Terre:
        "an energy oriented toward stability, realism, construction, and lasting results",

      Air:
        "an energy oriented toward thought, exchange, understanding, and communication",

      Eau:
        "an energy oriented toward sensitivity, intuition, emotional depth, and receptivity",
    },

    modalityDescriptions: {
      Cardinal:
        "a tendency to initiate, decide, and set things in motion",

      Fixe:
        "a tendency to deepen, maintain, and consolidate what truly matters",

      Mutable:
        "a tendency to adapt, understand, and adjust according to changing circumstances",
    },

    houseDescriptions: {
      1:
        "in the affirmation of your identity and your way of entering life",

      2:
        "in your resources, values, and need for security",

      3:
        "in your thinking, communication, and immediate environment",

      4:
        "in your home, roots, and inner world",

      5:
        "in your creativity, pleasures, and personal expression",

      6:
        "in your daily life, work, and organization",

      7:
        "in your relationships, commitments, and connection with others",

      8:
        "in your transformations, intimacy, and power dynamics",

      9:
        "in your beliefs, learning, and search for meaning",

      10:
        "in your vocation, social direction, and responsibilities",

      11:
        "in your projects, networks, and collective contribution",

      12:
        "in your inner life, intuition, and mechanisms that are harder to grasp",
    },

    sunProfiles: {
      Aries:
        "Your Sun in Aries seeks to affirm a direct, courageous identity capable of taking initiative.",

      Taurus:
        "Your Sun in Taurus seeks to build a stable identity, faithful to its values and capable of lasting.",

      Gemini:
        "Your Sun in Gemini seeks to understand, connect ideas, and develop a curious and mobile identity.",

      Cancer:
        "Your Sun in Cancer seeks to protect, belong, and build an identity rooted in sensitivity.",

      Leo:
        "Your Sun in Leo seeks to shine, create, and embody a visible, warm, and personal identity.",

      Virgo:
        "Your Sun in Virgo seeks to improve, understand, and become useful through a precise and conscious identity.",

      Libra:
        "Your Sun in Libra seeks to create balance, beauty, and relationships based on reciprocity.",

      Scorpio:
        "Your Sun in Scorpio seeks to live with depth, lucidity, and intensity, transforming what can no longer remain superficial.",

      Sagittarius:
        "Your Sun in Sagittarius seeks to grow through exploration, understanding, and a meaningful vision.",

      Capricorn:
        "Your Sun in Capricorn seeks to build, master, and give lasting form to its ambitions.",

      Aquarius:
        "Your Sun in Aquarius seeks to express a free, original identity capable of contributing differently.",

      Pisces:
        "Your Sun in Pisces seeks to unite intuition, compassion, and imagination within a deeply receptive identity.",
    },

    moonProfiles: {
      Aries:
        "Your Moon in Aries needs movement, honesty, and the freedom to react without feeling restrained.",

      Taurus:
        "Your Moon in Taurus needs stability, continuity, and an environment capable of calming body and mind.",

      Gemini:
        "Your Moon in Gemini needs words, exchange, and understanding to regain emotional balance.",

      Cancer:
        "Your Moon in Cancer needs intimacy, protection, and relationships capable of welcoming its deep sensitivity.",

      Leo:
        "Your Moon in Leo needs warmth, sincere recognition, and a space where emotions can be freely expressed.",

      Virgo:
        "Your Moon in Virgo needs order, simple reference points, and concrete actions to regain a sense of control.",

      Libra:
        "Your Moon in Libra needs dialogue, balance, and a respectful relational climate.",

      Scorpio:
        "Your Moon in Scorpio needs truth, loyalty, and emotional depth that does not settle for appearances.",

      Sagittarius:
        "Your Moon in Sagittarius needs space, meaning, and the ability to quickly regain a broader perspective.",

      Capricorn:
        "Your Moon in Capricorn needs structure, reliability, and permission to set down the responsibilities it carries.",

      Aquarius:
        "Your Moon in Aquarius needs freedom, perspective, and an environment that respects its different way of functioning.",

      Pisces:
        "Your Moon in Pisces needs silence, creativity, and boundaries capable of protecting its great receptivity.",
    },

    ascendantProfiles: {
      Aries:
        "Your Aries Ascendant pushes you to approach life with speed, honesty, and initiative.",

      Taurus:
        "Your Taurus Ascendant pushes you to move forward with caution, consistency, and a need for security.",

      Gemini:
        "Your Gemini Ascendant pushes you to observe, question, and connect through words.",

      Cancer:
        "Your Cancer Ascendant pushes you to quickly sense the atmosphere and protect what seems vulnerable.",

      Leo:
        "Your Leo Ascendant pushes you to occupy space with warmth, presence, and the desire to make a strong impression.",

      Virgo:
        "Your Virgo Ascendant pushes you to analyze, adjust, and immediately look for what can be improved.",

      Libra:
        "Your Libra Ascendant pushes you to seek harmony, courtesy, and a balanced relationship with your environment.",

      Scorpio:
        "Your Scorpio Ascendant pushes you to observe deeply, protect your privacy, and act with intensity.",

      Sagittarius:
        "Your Sagittarius Ascendant pushes you to explore, broaden your horizons, and seek a meaningful direction.",

      Capricorn:
        "Your Capricorn Ascendant pushes you to appear reliable, reserved, and oriented toward mastery.",

      Aquarius:
        "Your Aquarius Ascendant pushes you to preserve your independence and express an original presence.",

      Pisces:
        "Your Pisces Ascendant pushes you to perceive situations intuitively and adapt with sensitivity.",
    },
  },

  es: {
    analysis:
      "Síntesis Firma",

    title:
      "Tu firma astrológica profunda",

    subtitle:
      "Una síntesis de las fuerzas principales de tu carta para mostrar cómo funcionan juntas tu identidad, tus emociones, tu pensamiento, tus relaciones, tus ambiciones y tus transformaciones.",

    innerEngine:
      "Tu motor interior",

    mentalPattern:
      "Tu funcionamiento mental y decisional",

    relationshipPattern:
      "Tu manera de amar y comprometerte",

    lifeChallenge:
      "Tu principal desafío de evolución",

    potential:
      "Tu potencial de realización",

    signatureSentence:
      "Tu frase Firma",

    ascendant:
      "Ascendente",

    midheaven:
      "Medio Cielo",

    sun:
      "Sol",

    moon:
      "Luna",

    mercury:
      "Mercurio",

    venus:
      "Venus",

    mars:
      "Marte",

    jupiter:
      "Júpiter",

    saturn:
      "Saturno",

    uranus:
      "Urano",

    neptune:
      "Neptuno",

    pluto:
      "Plutón",

    aries:
      "Aries",

    taurus:
      "Tauro",

    gemini:
      "Géminis",

    cancer:
      "Cáncer",

    leo:
      "Leo",

    virgo:
      "Virgo",

    libra:
      "Libra",

    scorpio:
      "Escorpio",

    sagittarius:
      "Sagitario",

    capricorn:
      "Capricornio",

    aquarius:
      "Acuario",

    pisces:
      "Piscis",

    fire:
      "Fuego",

    earth:
      "Tierra",

    air:
      "Aire",

    water:
      "Agua",

    cardinal:
      "Cardinal",

    fixed:
      "Fijo",

    mutable:
      "Mutable",

    unspecified:
      "no especificado",

    elementDescriptions: {
      Feu:
        "una energía orientada al impulso, el valor, la expresión y la acción directa",

      Terre:
        "una energía orientada a la estabilidad, el realismo, la construcción y los resultados duraderos",

      Air:
        "una energía orientada al pensamiento, los intercambios, la comprensión y la comunicación",

      Eau:
        "una energía orientada a la sensibilidad, la intuición, la profundidad emocional y la receptividad",
    },

    modalityDescriptions: {
      Cardinal:
        "una tendencia a iniciar, decidir y poner las cosas en movimiento",

      Fixe:
        "una tendencia a profundizar, mantener y consolidar aquello que realmente importa",

      Mutable:
        "una tendencia a adaptarte, comprender y ajustar tu respuesta según la evolución de las circunstancias",
    },

    houseDescriptions: {
      1:
        "en la afirmación de tu identidad y tu manera de entrar en la existencia",

      2:
        "en tus recursos, tus valores y tu necesidad de seguridad",

      3:
        "en tu pensamiento, tus intercambios y tu entorno cercano",

      4:
        "en tu hogar, tus raíces y tu mundo interior",

      5:
        "en tu creatividad, tus placeres y tu expresión personal",

      6:
        "en tu vida cotidiana, tu trabajo y tu organización",

      7:
        "en tus relaciones, tus compromisos y tu relación con los demás",

      8:
        "en tus transformaciones, tu intimidad y las relaciones de poder",

      9:
        "en tus convicciones, tus aprendizajes y tu búsqueda de sentido",

      10:
        "en tu vocación, tu dirección social y tus responsabilidades",

      11:
        "en tus proyectos, tus redes y tu contribución colectiva",

      12:
        "en tu vida interior, tu intuición y los mecanismos más difíciles de captar",
    },

    sunProfiles: {
      Aries:
        "Tu Sol en Aries busca afirmar una identidad directa, valiente y capaz de tomar la iniciativa.",

      Taurus:
        "Tu Sol en Tauro busca construir una identidad estable, fiel a sus valores y capaz de durar.",

      Gemini:
        "Tu Sol en Géminis busca comprender, relacionar ideas y desarrollar una identidad curiosa y móvil.",

      Cancer:
        "Tu Sol en Cáncer busca proteger, pertenecer y construir una identidad arraigada en la sensibilidad.",

      Leo:
        "Tu Sol en Leo busca brillar, crear y asumir una identidad visible, cálida y personal.",

      Virgo:
        "Tu Sol en Virgo busca mejorar, comprender y volverse útil a través de una identidad precisa y consciente.",

      Libra:
        "Tu Sol en Libra busca crear equilibrio, belleza y vínculos basados en la reciprocidad.",

      Scorpio:
        "Tu Sol en Escorpio busca vivir con profundidad, lucidez e intensidad, transformando aquello que ya no puede permanecer superficial.",

      Sagittarius:
        "Tu Sol en Sagitario busca crecer mediante la exploración, la comprensión y una visión cargada de sentido.",

      Capricorn:
        "Tu Sol en Capricornio busca construir, dominar y dar una forma duradera a sus ambiciones.",

      Aquarius:
        "Tu Sol en Acuario busca expresar una identidad libre, original y capaz de contribuir de otra manera.",

      Pisces:
        "Tu Sol en Piscis busca unir intuición, compasión e imaginación en una identidad profundamente receptiva.",
    },

    moonProfiles: {
      Aries:
        "Tu Luna en Aries necesita movimiento, franqueza y la posibilidad de reaccionar sin sentirse limitada.",

      Taurus:
        "Tu Luna en Tauro necesita estabilidad, continuidad y un entorno capaz de calmar el cuerpo y la mente.",

      Gemini:
        "Tu Luna en Géminis necesita palabras, intercambios y comprensión para recuperar su equilibrio emocional.",

      Cancer:
        "Tu Luna en Cáncer necesita intimidad, protección y vínculos capaces de acoger su gran sensibilidad.",

      Leo:
        "Tu Luna en Leo necesita calor, reconocimiento sincero y un espacio donde sus emociones puedan expresarse libremente.",

      Virgo:
        "Tu Luna en Virgo necesita orden, referencias sencillas y acciones concretas para recuperar una sensación de dominio.",

      Libra:
        "Tu Luna en Libra necesita diálogo, equilibrio y un clima relacional respetuoso.",

      Scorpio:
        "Tu Luna en Escorpio necesita verdad, lealtad y una profundidad emocional que no se conforme con las apariencias.",

      Sagittarius:
        "Tu Luna en Sagitario necesita espacio, sentido y la posibilidad de recuperar rápidamente una perspectiva más amplia.",

      Capricorn:
        "Tu Luna en Capricornio necesita estructura, fiabilidad y permiso para soltar las responsabilidades que carga.",

      Aquarius:
        "Tu Luna en Acuario necesita libertad, perspectiva y un entorno que respete su funcionamiento diferente.",

      Pisces:
        "Tu Luna en Piscis necesita silencio, creatividad y límites capaces de proteger su gran receptividad.",
    },

    ascendantProfiles: {
      Aries:
        "Tu Ascendente Aries te impulsa a abordar la vida con rapidez, franqueza y espíritu de iniciativa.",

      Taurus:
        "Tu Ascendente Tauro te impulsa a avanzar con prudencia, constancia y necesidad de seguridad.",

      Gemini:
        "Tu Ascendente Géminis te impulsa a observar, preguntar y entrar en relación mediante la palabra.",

      Cancer:
        "Tu Ascendente Cáncer te impulsa a percibir rápidamente el ambiente y proteger aquello que parece vulnerable.",

      Leo:
        "Tu Ascendente Leo te impulsa a ocupar el espacio con calidez, presencia y deseo de causar una impresión fuerte.",

      Virgo:
        "Tu Ascendente Virgo te impulsa a analizar, ajustar y buscar inmediatamente aquello que puede mejorarse.",

      Libra:
        "Tu Ascendente Libra te impulsa a buscar armonía, cortesía y una relación equilibrada con tu entorno.",

      Scorpio:
        "Tu Ascendente Escorpio te impulsa a observar en profundidad, proteger tu intimidad y actuar con intensidad.",

      Sagittarius:
        "Tu Ascendente Sagitario te impulsa a explorar, ampliar tus horizontes y buscar una dirección con sentido.",

      Capricorn:
        "Tu Ascendente Capricornio te impulsa a mostrarte fiable, reservado y orientado al dominio.",

      Aquarius:
        "Tu Ascendente Acuario te impulsa a preservar tu independencia y manifestar una presencia original.",

      Pisces:
        "Tu Ascendente Piscis te impulsa a percibir intuitivamente las situaciones y adaptarte con sensibilidad.",
    },
  },

  de: {
    analysis:
      "Signatur-Synthese",

    title:
      "Ihre tiefe astrologische Signatur",

    subtitle:
      "Eine Synthese der wichtigsten Kräfte Ihres Horoskops, die zeigt, wie Identität, Gefühle, Denken, Beziehungen, Ambitionen und Transformationen zusammenwirken.",

    innerEngine:
      "Ihr innerer Antrieb",

    mentalPattern:
      "Ihre Denk- und Entscheidungsweise",

    relationshipPattern:
      "Ihre Art zu lieben und sich zu binden",

    lifeChallenge:
      "Ihre wichtigste Entwicklungsaufgabe",

    potential:
      "Ihr Erfüllungspotenzial",

    signatureSentence:
      "Ihr Signatur-Satz",

    ascendant:
      "Aszendent",

    midheaven:
      "Medium Coeli",

    sun:
      "Sonne",

    moon:
      "Mond",

    mercury:
      "Merkur",

    venus:
      "Venus",

    mars:
      "Mars",

    jupiter:
      "Jupiter",

    saturn:
      "Saturn",

    uranus:
      "Uranus",

    neptune:
      "Neptun",

    pluto:
      "Pluto",

    aries:
      "Widder",

    taurus:
      "Stier",

    gemini:
      "Zwillinge",

    cancer:
      "Krebs",

    leo:
      "Löwe",

    virgo:
      "Jungfrau",

    libra:
      "Waage",

    scorpio:
      "Skorpion",

    sagittarius:
      "Schütze",

    capricorn:
      "Steinbock",

    aquarius:
      "Wassermann",

    pisces:
      "Fische",

    fire:
      "Feuer",

    earth:
      "Erde",

    air:
      "Luft",

    water:
      "Wasser",

    cardinal:
      "Kardinal",

    fixed:
      "Fix",

    mutable:
      "Veränderlich",

    unspecified:
      "nicht angegeben",

    elementDescriptions: {
      Feu:
        "eine Energie, die auf Schwung, Mut, Ausdruck und direktes Handeln ausgerichtet ist",

      Terre:
        "eine Energie, die auf Stabilität, Realismus, Aufbau und dauerhafte Ergebnisse ausgerichtet ist",

      Air:
        "eine Energie, die auf Denken, Austausch, Verständnis und Kommunikation ausgerichtet ist",

      Eau:
        "eine Energie, die auf Sensibilität, Intuition, emotionale Tiefe und Empfänglichkeit ausgerichtet ist",
    },

    modalityDescriptions: {
      Cardinal:
        "eine Tendenz, zu initiieren, zu entscheiden und Dinge in Bewegung zu bringen",

      Fixe:
        "eine Tendenz, zu vertiefen, zu bewahren und das zu festigen, was wirklich zählt",

      Mutable:
        "eine Tendenz, sich anzupassen, zu verstehen und die eigene Reaktion an veränderte Umstände anzupassen",
    },

    houseDescriptions: {
      1:
        "in der Bekräftigung Ihrer Identität und Ihrer Art, ins Leben zu treten",

      2:
        "in Ihren Ressourcen, Werten und Ihrem Sicherheitsbedürfnis",

      3:
        "in Ihrem Denken, Austausch und nahen Umfeld",

      4:
        "in Ihrem Zuhause, Ihren Wurzeln und Ihrer inneren Welt",

      5:
        "in Ihrer Kreativität, Ihren Freuden und Ihrem persönlichen Ausdruck",

      6:
        "in Ihrem Alltag, Ihrer Arbeit und Organisation",

      7:
        "in Ihren Beziehungen, Verpflichtungen und Ihrem Bezug zu anderen",

      8:
        "in Ihren Transformationen, Ihrer Intimität und Machtdynamik",

      9:
        "in Ihren Überzeugungen, Lernprozessen und Ihrer Sinnsuche",

      10:
        "in Ihrer Berufung, gesellschaftlichen Richtung und Verantwortung",

      11:
        "in Ihren Projekten, Netzwerken und Ihrem kollektiven Beitrag",

      12:
        "in Ihrem Innenleben, Ihrer Intuition und schwerer greifbaren Mechanismen",
    },

    sunProfiles: {
      Aries:
        "Ihre Sonne im Widder möchte eine direkte, mutige Identität entwickeln, die Initiative ergreifen kann.",

      Taurus:
        "Ihre Sonne im Stier möchte eine stabile, den eigenen Werten treue und dauerhafte Identität aufbauen.",

      Gemini:
        "Ihre Sonne in den Zwillingen möchte verstehen, Ideen verbinden und eine neugierige, bewegliche Identität entwickeln.",

      Cancer:
        "Ihre Sonne im Krebs möchte schützen, dazugehören und eine in Sensibilität verwurzelte Identität aufbauen.",

      Leo:
        "Ihre Sonne im Löwen möchte strahlen, erschaffen und eine sichtbare, warme und persönliche Identität verkörpern.",

      Virgo:
        "Ihre Sonne in der Jungfrau möchte verbessern, verstehen und durch eine präzise, bewusste Identität nützlich werden.",

      Libra:
        "Ihre Sonne in der Waage möchte Gleichgewicht, Schönheit und Beziehungen auf Gegenseitigkeit schaffen.",

      Scorpio:
        "Ihre Sonne im Skorpion möchte mit Tiefe, Klarheit und Intensität leben und transformieren, was nicht länger oberflächlich bleiben kann.",

      Sagittarius:
        "Ihre Sonne im Schützen möchte durch Entdeckung, Verständnis und eine sinnstiftende Vision wachsen.",

      Capricorn:
        "Ihre Sonne im Steinbock möchte aufbauen, meistern und ihren Ambitionen dauerhafte Form geben.",

      Aquarius:
        "Ihre Sonne im Wassermann möchte eine freie, originelle Identität ausdrücken, die auf andere Weise beitragen kann.",

      Pisces:
        "Ihre Sonne in den Fischen möchte Intuition, Mitgefühl und Vorstellungskraft in einer tief empfänglichen Identität verbinden.",
    },

    moonProfiles: {
      Aries:
        "Ihr Mond im Widder braucht Bewegung, Offenheit und die Möglichkeit zu reagieren, ohne sich zurückgehalten zu fühlen.",

      Taurus:
        "Ihr Mond im Stier braucht Stabilität, Kontinuität und ein Umfeld, das Körper und Geist beruhigen kann.",

      Gemini:
        "Ihr Mond in den Zwillingen braucht Worte, Austausch und Verständnis, um emotionales Gleichgewicht wiederzufinden.",

      Cancer:
        "Ihr Mond im Krebs braucht Nähe, Schutz und Beziehungen, die seine große Sensibilität aufnehmen können.",

      Leo:
        "Ihr Mond im Löwen braucht Wärme, ehrliche Anerkennung und einen Raum, in dem Gefühle frei ausgedrückt werden können.",

      Virgo:
        "Ihr Mond in der Jungfrau braucht Ordnung, einfache Orientierung und konkrete Handlungen, um wieder ein Gefühl von Kontrolle zu finden.",

      Libra:
        "Ihr Mond in der Waage braucht Dialog, Gleichgewicht und ein respektvolles Beziehungsklima.",

      Scorpio:
        "Ihr Mond im Skorpion braucht Wahrheit, Loyalität und emotionale Tiefe, die sich nicht mit Oberflächlichkeit begnügt.",

      Sagittarius:
        "Ihr Mond im Schützen braucht Raum, Sinn und die Möglichkeit, schnell wieder eine größere Perspektive zu finden.",

      Capricorn:
        "Ihr Mond im Steinbock braucht Struktur, Verlässlichkeit und die Erlaubnis, Verantwortung auch einmal abzulegen.",

      Aquarius:
        "Ihr Mond im Wassermann braucht Freiheit, Abstand und ein Umfeld, das seine andere Funktionsweise respektiert.",

      Pisces:
        "Ihr Mond in den Fischen braucht Stille, Kreativität und Grenzen, die seine starke Empfänglichkeit schützen.",
    },

    ascendantProfiles: {
      Aries:
        "Ihr Aszendent Widder lässt Sie dem Leben schnell, direkt und initiativ begegnen.",

      Taurus:
        "Ihr Aszendent Stier lässt Sie vorsichtig, beständig und mit starkem Sicherheitsbedürfnis vorangehen.",

      Gemini:
        "Ihr Aszendent Zwillinge lässt Sie beobachten, fragen und über Sprache in Beziehung treten.",

      Cancer:
        "Ihr Aszendent Krebs lässt Sie Stimmungen schnell wahrnehmen und schützen, was verletzlich erscheint.",

      Leo:
        "Ihr Aszendent Löwe lässt Sie mit Wärme, Präsenz und dem Wunsch nach starkem Eindruck Raum einnehmen.",

      Virgo:
        "Ihr Aszendent Jungfrau lässt Sie analysieren, anpassen und sofort erkennen, was verbessert werden kann.",

      Libra:
        "Ihr Aszendent Waage lässt Sie Harmonie, Höflichkeit und ausgewogene Beziehungen zu Ihrer Umgebung suchen.",

      Scorpio:
        "Ihr Aszendent Skorpion lässt Sie tief beobachten, Ihre Privatsphäre schützen und intensiv handeln.",

      Sagittarius:
        "Ihr Aszendent Schütze lässt Sie erkunden, Horizonte erweitern und eine sinnvolle Richtung suchen.",

      Capricorn:
        "Ihr Aszendent Steinbock lässt Sie verlässlich, zurückhaltend und auf Meisterschaft ausgerichtet erscheinen.",

      Aquarius:
        "Ihr Aszendent Wassermann lässt Sie Ihre Unabhängigkeit bewahren und eine originelle Präsenz zeigen.",

      Pisces:
        "Ihr Aszendent Fische lässt Sie Situationen intuitiv wahrnehmen und sich sensibel anpassen.",
    },
  },

  it: {
    analysis:
      "Sintesi Firma",

    title:
      "La tua firma astrologica profonda",

    subtitle:
      "Una sintesi delle principali forze del tuo tema per mostrare come identità, emozioni, pensiero, relazioni, ambizioni e trasformazioni funzionano insieme.",

    innerEngine:
      "Il tuo motore interiore",

    mentalPattern:
      "Il tuo funzionamento mentale e decisionale",

    relationshipPattern:
      "Il tuo modo di amare e impegnarti",

    lifeChallenge:
      "La tua principale sfida evolutiva",

    potential:
      "Il tuo potenziale di realizzazione",

    signatureSentence:
      "La tua frase Firma",

    ascendant:
      "Ascendente",

    midheaven:
      "Medio Cielo",

    sun:
      "Sole",

    moon:
      "Luna",

    mercury:
      "Mercurio",

    venus:
      "Venere",

    mars:
      "Marte",

    jupiter:
      "Giove",

    saturn:
      "Saturno",

    uranus:
      "Urano",

    neptune:
      "Nettuno",

    pluto:
      "Plutone",

    aries:
      "Ariete",

    taurus:
      "Toro",

    gemini:
      "Gemelli",

    cancer:
      "Cancro",

    leo:
      "Leone",

    virgo:
      "Vergine",

    libra:
      "Bilancia",

    scorpio:
      "Scorpione",

    sagittarius:
      "Sagittario",

    capricorn:
      "Capricorno",

    aquarius:
      "Acquario",

    pisces:
      "Pesci",

    fire:
      "Fuoco",

    earth:
      "Terra",

    air:
      "Aria",

    water:
      "Acqua",

    cardinal:
      "Cardinale",

    fixed:
      "Fisso",

    mutable:
      "Mutevole",

    unspecified:
      "non specificato",

    elementDescriptions: {
      Feu:
        "un’energia orientata allo slancio, al coraggio, all’espressione e all’azione diretta",

      Terre:
        "un’energia orientata alla stabilità, al realismo, alla costruzione e ai risultati duraturi",

      Air:
        "un’energia orientata al pensiero, agli scambi, alla comprensione e alla comunicazione",

      Eau:
        "un’energia orientata alla sensibilità, all’intuizione, alla profondità emotiva e alla ricettività",
    },

    modalityDescriptions: {
      Cardinal:
        "una tendenza a iniziare, decidere e mettere le cose in movimento",

      Fixe:
        "una tendenza ad approfondire, mantenere e consolidare ciò che conta davvero",

      Mutable:
        "una tendenza ad adattarsi, comprendere e modificare la risposta secondo l’evoluzione delle circostanze",
    },

    houseDescriptions: {
      1:
        "nell’affermazione della tua identità e nel tuo modo di entrare nell’esistenza",

      2:
        "nelle tue risorse, nei tuoi valori e nel bisogno di sicurezza",

      3:
        "nel tuo pensiero, negli scambi e nell’ambiente vicino",

      4:
        "nella casa, nelle radici e nel tuo mondo interiore",

      5:
        "nella creatività, nei piaceri e nell’espressione personale",

      6:
        "nella quotidianità, nel lavoro e nell’organizzazione",

      7:
        "nelle relazioni, negli impegni e nel rapporto con gli altri",

      8:
        "nelle trasformazioni, nell’intimità e nelle dinamiche di potere",

      9:
        "nelle convinzioni, negli apprendimenti e nella ricerca di significato",

      10:
        "nella vocazione, nella direzione sociale e nelle responsabilità",

      11:
        "nei progetti, nelle reti e nel contributo collettivo",

      12:
        "nella vita interiore, nell’intuizione e nei meccanismi più difficili da cogliere",
    },

    sunProfiles: {
      Aries:
        "Il tuo Sole in Ariete cerca di affermare un’identità diretta, coraggiosa e capace di prendere iniziativa.",

      Taurus:
        "Il tuo Sole in Toro cerca di costruire un’identità stabile, fedele ai propri valori e capace di durare.",

      Gemini:
        "Il tuo Sole in Gemelli cerca di comprendere, collegare le idee e sviluppare un’identità curiosa e mobile.",

      Cancer:
        "Il tuo Sole in Cancro cerca di proteggere, appartenere e costruire un’identità radicata nella sensibilità.",

      Leo:
        "Il tuo Sole in Leone cerca di risplendere, creare e assumere un’identità visibile, calorosa e personale.",

      Virgo:
        "Il tuo Sole in Vergine cerca di migliorare, comprendere e diventare utile attraverso un’identità precisa e consapevole.",

      Libra:
        "Il tuo Sole in Bilancia cerca di creare equilibrio, bellezza e legami fondati sulla reciprocità.",

      Scorpio:
        "Il tuo Sole in Scorpione cerca di vivere con profondità, lucidità e intensità, trasformando ciò che non può più restare superficiale.",

      Sagittarius:
        "Il tuo Sole in Sagittario cerca di crescere attraverso esplorazione, comprensione e una visione ricca di significato.",

      Capricorn:
        "Il tuo Sole in Capricorno cerca di costruire, padroneggiare e dare forma duratura alle proprie ambizioni.",

      Aquarius:
        "Il tuo Sole in Acquario cerca di esprimere un’identità libera, originale e capace di contribuire in modo diverso.",

      Pisces:
        "Il tuo Sole in Pesci cerca di unire intuizione, compassione e immaginazione in un’identità profondamente ricettiva.",
    },

    moonProfiles: {
      Aries:
        "La tua Luna in Ariete ha bisogno di movimento, franchezza e possibilità di reagire senza sentirsi trattenuta.",

      Taurus:
        "La tua Luna in Toro ha bisogno di stabilità, continuità e di un ambiente capace di calmare corpo e mente.",

      Gemini:
        "La tua Luna in Gemelli ha bisogno di parole, scambi e comprensione per ritrovare equilibrio emotivo.",

      Cancer:
        "La tua Luna in Cancro ha bisogno di intimità, protezione e legami capaci di accogliere la sua grande sensibilità.",

      Leo:
        "La tua Luna in Leone ha bisogno di calore, riconoscimento sincero e di uno spazio in cui le emozioni possano esprimersi liberamente.",

      Virgo:
        "La tua Luna in Vergine ha bisogno di ordine, riferimenti semplici e azioni concrete per ritrovare un senso di padronanza.",

      Libra:
        "La tua Luna in Bilancia ha bisogno di dialogo, equilibrio e di un clima relazionale rispettoso.",

      Scorpio:
        "La tua Luna in Scorpione ha bisogno di verità, lealtà e profondità emotiva che non si accontenti delle apparenze.",

      Sagittarius:
        "La tua Luna in Sagittario ha bisogno di spazio, significato e possibilità di ritrovare rapidamente una prospettiva più ampia.",

      Capricorn:
        "La tua Luna in Capricorno ha bisogno di struttura, affidabilità e del permesso di deporre le responsabilità che porta.",

      Aquarius:
        "La tua Luna in Acquario ha bisogno di libertà, distacco e di un ambiente che rispetti il suo funzionamento diverso.",

      Pisces:
        "La tua Luna in Pesci ha bisogno di silenzio, creatività e limiti capaci di proteggere la sua grande ricettività.",
    },

    ascendantProfiles: {
      Aries:
        "Il tuo Ascendente Ariete ti spinge ad affrontare la vita con rapidità, franchezza e spirito d’iniziativa.",

      Taurus:
        "Il tuo Ascendente Toro ti spinge ad avanzare con prudenza, costanza e bisogno di sicurezza.",

      Gemini:
        "Il tuo Ascendente Gemelli ti spinge a osservare, interrogare e entrare in relazione attraverso la parola.",

      Cancer:
        "Il tuo Ascendente Cancro ti spinge a percepire rapidamente l’atmosfera e proteggere ciò che appare vulnerabile.",

      Leo:
        "Il tuo Ascendente Leone ti spinge a occupare lo spazio con calore, presenza e desiderio di creare una forte impressione.",

      Virgo:
        "Il tuo Ascendente Vergine ti spinge ad analizzare, adattare e cercare subito ciò che può essere migliorato.",

      Libra:
        "Il tuo Ascendente Bilancia ti spinge a cercare armonia, cortesia e una relazione equilibrata con l’ambiente.",

      Scorpio:
        "Il tuo Ascendente Scorpione ti spinge a osservare in profondità, proteggere la tua intimità e agire con intensità.",

      Sagittarius:
        "Il tuo Ascendente Sagittario ti spinge a esplorare, ampliare gli orizzonti e cercare una direzione significativa.",

      Capricorn:
        "Il tuo Ascendente Capricorno ti spinge a mostrarti affidabile, riservato e orientato alla padronanza.",

      Aquarius:
        "Il tuo Ascendente Acquario ti spinge a preservare la tua indipendenza e manifestare una presenza originale.",

      Pisces:
        "Il tuo Ascendente Pesci ti spinge a percepire intuitivamente le situazioni e adattarti con sensibilità.",
    },
  },

  pt: {
    analysis:
      "Síntese Assinatura",

    title:
      "Sua assinatura astrológica profunda",

    subtitle:
      "Uma síntese das principais forças do seu mapa para mostrar como identidade, emoções, pensamento, relacionamentos, ambições e transformações funcionam juntas.",

    innerEngine:
      "Seu motor interior",

    mentalPattern:
      "Seu funcionamento mental e decisório",

    relationshipPattern:
      "Sua maneira de amar e se comprometer",

    lifeChallenge:
      "Seu principal desafio de evolução",

    potential:
      "Seu potencial de realização",

    signatureSentence:
      "Sua frase Assinatura",

    ascendant:
      "Ascendente",

    midheaven:
      "Meio do Céu",

    sun:
      "Sol",

    moon:
      "Lua",

    mercury:
      "Mercúrio",

    venus:
      "Vênus",

    mars:
      "Marte",

    jupiter:
      "Júpiter",

    saturn:
      "Saturno",

    uranus:
      "Urano",

    neptune:
      "Netuno",

    pluto:
      "Plutão",

    aries:
      "Áries",

    taurus:
      "Touro",

    gemini:
      "Gêmeos",

    cancer:
      "Câncer",

    leo:
      "Leão",

    virgo:
      "Virgem",

    libra:
      "Libra",

    scorpio:
      "Escorpião",

    sagittarius:
      "Sagitário",

    capricorn:
      "Capricórnio",

    aquarius:
      "Aquário",

    pisces:
      "Peixes",

    fire:
      "Fogo",

    earth:
      "Terra",

    air:
      "Ar",

    water:
      "Água",

    cardinal:
      "Cardinal",

    fixed:
      "Fixo",

    mutable:
      "Mutável",

    unspecified:
      "não especificado",

    elementDescriptions: {
      Feu:
        "uma energia voltada para impulso, coragem, expressão e ação direta",

      Terre:
        "uma energia voltada para estabilidade, realismo, construção e resultados duradouros",

      Air:
        "uma energia voltada para pensamento, trocas, compreensão e comunicação",

      Eau:
        "uma energia voltada para sensibilidade, intuição, profundidade emocional e receptividade",
    },

    modalityDescriptions: {
      Cardinal:
        "uma tendência a iniciar, decidir e colocar as coisas em movimento",

      Fixe:
        "uma tendência a aprofundar, manter e consolidar aquilo que realmente importa",

      Mutable:
        "uma tendência a adaptar-se, compreender e ajustar sua resposta conforme as circunstâncias evoluem",
    },

    houseDescriptions: {
      1:
        "na afirmação da sua identidade e na sua maneira de entrar na existência",

      2:
        "nos seus recursos, valores e necessidade de segurança",

      3:
        "no seu pensamento, trocas e ambiente próximo",

      4:
        "no seu lar, raízes e mundo interior",

      5:
        "na sua criatividade, prazeres e expressão pessoal",

      6:
        "no seu cotidiano, trabalho e organização",

      7:
        "nos seus relacionamentos, compromissos e relação com o outro",

      8:
        "nas suas transformações, intimidade e relações de poder",

      9:
        "nas suas convicções, aprendizados e busca de sentido",

      10:
        "na sua vocação, direção social e responsabilidades",

      11:
        "nos seus projetos, redes e contribuição coletiva",

      12:
        "na sua vida interior, intuição e mecanismos mais difíceis de compreender",
    },

    sunProfiles: {
      Aries:
        "Seu Sol em Áries procura afirmar uma identidade direta, corajosa e capaz de tomar iniciativa.",

      Taurus:
        "Seu Sol em Touro procura construir uma identidade estável, fiel aos próprios valores e capaz de durar.",

      Gemini:
        "Seu Sol em Gêmeos procura compreender, conectar ideias e desenvolver uma identidade curiosa e móvel.",

      Cancer:
        "Seu Sol em Câncer procura proteger, pertencer e construir uma identidade enraizada na sensibilidade.",

      Leo:
        "Seu Sol em Leão procura brilhar, criar e assumir uma identidade visível, calorosa e pessoal.",

      Virgo:
        "Seu Sol em Virgem procura melhorar, compreender e tornar-se útil através de uma identidade precisa e consciente.",

      Libra:
        "Seu Sol em Libra procura criar equilíbrio, beleza e vínculos baseados em reciprocidade.",

      Scorpio:
        "Seu Sol em Escorpião procura viver com profundidade, lucidez e intensidade, transformando aquilo que não pode mais permanecer superficial.",

      Sagittarius:
        "Seu Sol em Sagitário procura crescer através da exploração, compreensão e de uma visão com sentido.",

      Capricorn:
        "Seu Sol em Capricórnio procura construir, dominar e dar forma duradoura às suas ambições.",

      Aquarius:
        "Seu Sol em Aquário procura expressar uma identidade livre, original e capaz de contribuir de outra maneira.",

      Pisces:
        "Seu Sol em Peixes procura unir intuição, compaixão e imaginação em uma identidade profundamente receptiva.",
    },

    moonProfiles: {
      Aries:
        "Sua Lua em Áries precisa de movimento, franqueza e da possibilidade de reagir sem se sentir limitada.",

      Taurus:
        "Sua Lua em Touro precisa de estabilidade, continuidade e de um ambiente capaz de acalmar corpo e mente.",

      Gemini:
        "Sua Lua em Gêmeos precisa de palavras, trocas e compreensão para recuperar equilíbrio emocional.",

      Cancer:
        "Sua Lua em Câncer precisa de intimidade, proteção e vínculos capazes de acolher sua grande sensibilidade.",

      Leo:
        "Sua Lua em Leão precisa de calor, reconhecimento sincero e de um espaço onde as emoções possam se expressar livremente.",

      Virgo:
        "Sua Lua em Virgem precisa de ordem, referências simples e ações concretas para recuperar sensação de domínio.",

      Libra:
        "Sua Lua em Libra precisa de diálogo, equilíbrio e de um clima relacional respeitoso.",

      Scorpio:
        "Sua Lua em Escorpião precisa de verdade, lealdade e profundidade emocional que não se contente com aparências.",

      Sagittarius:
        "Sua Lua em Sagitário precisa de espaço, sentido e da possibilidade de recuperar rapidamente uma perspectiva mais ampla.",

      Capricorn:
        "Sua Lua em Capricórnio precisa de estrutura, confiabilidade e permissão para soltar as responsabilidades que carrega.",

      Aquarius:
        "Sua Lua em Aquário precisa de liberdade, distância e de um ambiente que respeite seu funcionamento diferente.",

      Pisces:
        "Sua Lua em Peixes precisa de silêncio, criatividade e limites capazes de proteger sua grande receptividade.",
    },

    ascendantProfiles: {
      Aries:
        "Seu Ascendente Áries leva você a abordar a vida com rapidez, franqueza e espírito de iniciativa.",

      Taurus:
        "Seu Ascendente Touro leva você a avançar com prudência, constância e necessidade de segurança.",

      Gemini:
        "Seu Ascendente Gêmeos leva você a observar, questionar e entrar em relação através da palavra.",

      Cancer:
        "Seu Ascendente Câncer leva você a perceber rapidamente o ambiente e proteger aquilo que parece vulnerável.",

      Leo:
        "Seu Ascendente Leão leva você a ocupar o espaço com calor, presença e desejo de causar forte impressão.",

      Virgo:
        "Seu Ascendente Virgem leva você a analisar, ajustar e buscar imediatamente aquilo que pode ser melhorado.",

      Libra:
        "Seu Ascendente Libra leva você a buscar harmonia, cortesia e uma relação equilibrada com o ambiente.",

      Scorpio:
        "Seu Ascendente Escorpião leva você a observar profundamente, proteger sua intimidade e agir com intensidade.",

      Sagittarius:
        "Seu Ascendente Sagitário leva você a explorar, ampliar horizontes e buscar uma direção com sentido.",

      Capricorn:
        "Seu Ascendente Capricórnio leva você a se mostrar confiável, reservado e orientado ao domínio.",

      Aquarius:
        "Seu Ascendente Aquário leva você a preservar sua independência e manifestar uma presença original.",

      Pisces:
        "Seu Ascendente Peixes leva você a perceber intuitivamente as situações e adaptar-se com sensibilidade.",
    },
  },
};
type SynthesisPlanetProfiles = {
  mercuryProfiles:
    Record<
      string,
      string
    >;

  venusProfiles:
    Record<
      string,
      string
    >;

  marsProfiles:
    Record<
      string,
      string
    >;
};

const PLANET_PROFILES:
Record<
  NonFrenchLocale,
  SynthesisPlanetProfiles
> = {
  en: {
    mercuryProfiles: {
      Aries:
        "Mercury in Aries gives you quick, direct thinking oriented toward action.",

      Taurus:
        "Mercury in Taurus gives you concrete, methodical thinking attached to verifiable facts.",

      Gemini:
        "Mercury in Gemini gives you lively, curious thinking capable of quickly connecting several pieces of information.",

      Cancer:
        "Mercury in Cancer gives you intuitive, memory-based thinking strongly influenced by feelings.",

      Leo:
        "Mercury in Leo gives you expressive, creative thinking capable of communicating with conviction.",

      Virgo:
        "Mercury in Virgo gives you precise, analytical thinking attentive to useful details.",

      Libra:
        "Mercury in Libra gives you nuanced, diplomatic thinking attentive to different points of view.",

      Scorpio:
        "Mercury in Scorpio gives you deep, strategic thinking naturally drawn to what remains hidden.",

      Sagittarius:
        "Mercury in Sagittarius gives you broad, enthusiastic thinking oriented toward the search for meaning.",

      Capricorn:
        "Mercury in Capricorn gives you structured, cautious thinking oriented toward realistic conclusions.",

      Aquarius:
        "Mercury in Aquarius gives you original, independent thinking capable of considering unusual solutions.",

      Pisces:
        "Mercury in Pisces gives you imaginative, intuitive thinking sensitive to implicit nuances.",
    },

    venusProfiles: {
      Aries:
        "Venus in Aries seeks a lively, direct relationship capable of sustaining desire.",

      Taurus:
        "Venus in Taurus seeks loyalty, stability, and affection expressed concretely.",

      Gemini:
        "Venus in Gemini seeks intellectual complicity, movement, and rich exchanges.",

      Cancer:
        "Venus in Cancer seeks emotional security, tenderness, and a bond capable of becoming a refuge.",

      Leo:
        "Venus in Leo seeks warmth, loyalty, and a relationship in which love can be expressed openly.",

      Virgo:
        "Venus in Virgo seeks reliability, attentiveness, and simple but consistent signs of affection.",

      Libra:
        "Venus in Libra seeks balance, beauty, and a relationship based on reciprocity.",

      Scorpio:
        "Venus in Scorpio seeks deep intimacy, absolute loyalty, and a relationship capable of transformation.",

      Sagittarius:
        "Venus in Sagittarius seeks freedom, authenticity, and a bond capable of opening new horizons.",

      Capricorn:
        "Venus in Capricorn seeks stability, responsibility, and a relationship with real continuity.",

      Aquarius:
        "Venus in Aquarius seeks freedom, equality, and a bond that respects each person’s individuality.",

      Pisces:
        "Venus in Pisces seeks deep emotional understanding, gentleness, and a form of communion.",
    },

    marsProfiles: {
      Aries:
        "Mars in Aries acts with speed, courage, and a need to respond immediately.",

      Taurus:
        "Mars in Taurus acts slowly, with endurance and great determination once committed.",

      Gemini:
        "Mars in Gemini acts through ideas, words, and the ability to react quickly.",

      Cancer:
        "Mars in Cancer acts to protect, but may avoid direct confrontation when feeling vulnerable.",

      Leo:
        "Mars in Leo acts with pride, creativity, and a need to defend what matters.",

      Virgo:
        "Mars in Virgo acts methodically, precisely, and with a need to improve the situation concretely.",

      Libra:
        "Mars in Libra acts through negotiation, cooperation, and the search for a balanced solution.",

      Scorpio:
        "Mars in Scorpio acts with intensity, strategy, and remarkable endurance.",

      Sagittarius:
        "Mars in Sagittarius acts with enthusiasm, honesty, and a need for a meaningful direction.",

      Capricorn:
        "Mars in Capricorn acts with discipline, strategy, and the will to produce a lasting result.",

      Aquarius:
        "Mars in Aquarius acts independently, originally, and with a need to preserve freedom.",

      Pisces:
        "Mars in Pisces acts through intuition, inspiration, and sensitivity to the emotional context.",
    },
  },

  es: {
    mercuryProfiles: {
      Aries:
        "Mercurio en Aries da un pensamiento rápido, directo y orientado a la acción.",

      Taurus:
        "Mercurio en Tauro da un pensamiento concreto, metódico y apegado a los hechos verificables.",

      Gemini:
        "Mercurio en Géminis da un pensamiento vivo, curioso y capaz de relacionar rápidamente varias informaciones.",

      Cancer:
        "Mercurio en Cáncer da un pensamiento intuitivo, ligado a la memoria y fuertemente influido por lo que sientes.",

      Leo:
        "Mercurio en Leo da un pensamiento expresivo, creativo y capaz de transmitir con convicción.",

      Virgo:
        "Mercurio en Virgo da un pensamiento preciso, analítico y atento a los detalles útiles.",

      Libra:
        "Mercurio en Libra da un pensamiento matizado, diplomático y atento a diferentes puntos de vista.",

      Scorpio:
        "Mercurio en Escorpio da un pensamiento profundo, estratégico y naturalmente atraído por aquello que permanece oculto.",

      Sagittarius:
        "Mercurio en Sagitario da un pensamiento global, entusiasta y orientado a la búsqueda de sentido.",

      Capricorn:
        "Mercurio en Capricornio da un pensamiento estructurado, prudente y orientado a conclusiones realistas.",

      Aquarius:
        "Mercurio en Acuario da un pensamiento original, independiente y capaz de considerar soluciones inusuales.",

      Pisces:
        "Mercurio en Piscis da un pensamiento imaginativo, intuitivo y sensible a los matices implícitos.",
    },

    venusProfiles: {
      Aries:
        "Venus en Aries busca una relación viva, directa y capaz de mantener el deseo.",

      Taurus:
        "Venus en Tauro busca fidelidad, estabilidad y un afecto que se manifiesta concretamente.",

      Gemini:
        "Venus en Géminis busca complicidad intelectual, movimiento y riqueza en los intercambios.",

      Cancer:
        "Venus en Cáncer busca seguridad afectiva, ternura y un vínculo capaz de convertirse en refugio.",

      Leo:
        "Venus en Leo busca calidez, lealtad y una relación en la que el amor pueda expresarse abiertamente.",

      Virgo:
        "Venus en Virgo busca fiabilidad, atención y pruebas de afecto sencillas pero constantes.",

      Libra:
        "Venus en Libra busca equilibrio, belleza y una relación basada en la reciprocidad.",

      Scorpio:
        "Venus en Escorpio busca intimidad profunda, lealtad absoluta y una relación capaz de transformar.",

      Sagittarius:
        "Venus en Sagitario busca libertad, autenticidad y un vínculo capaz de abrir nuevos horizontes.",

      Capricorn:
        "Venus en Capricornio busca estabilidad, responsabilidad y una relación con verdadera continuidad.",

      Aquarius:
        "Venus en Acuario busca libertad, igualdad y un vínculo que respete la individualidad de cada persona.",

      Pisces:
        "Venus en Piscis busca una gran comprensión emocional, dulzura y una forma de comunión.",
    },

    marsProfiles: {
      Aries:
        "Marte en Aries actúa con rapidez, valor y necesidad de responder de inmediato.",

      Taurus:
        "Marte en Tauro actúa con lentitud, resistencia y gran determinación una vez comprometido.",

      Gemini:
        "Marte en Géminis actúa mediante ideas, palabras y capacidad de reaccionar rápidamente.",

      Cancer:
        "Marte en Cáncer actúa para proteger, pero puede evitar la confrontación directa cuando se siente vulnerable.",

      Leo:
        "Marte en Leo actúa con orgullo, creatividad y necesidad de defender aquello que le importa.",

      Virgo:
        "Marte en Virgo actúa con método, precisión y necesidad de mejorar concretamente la situación.",

      Libra:
        "Marte en Libra actúa mediante negociación, cooperación y búsqueda de una solución equilibrada.",

      Scorpio:
        "Marte en Escorpio actúa con intensidad, estrategia y notable capacidad de resistencia.",

      Sagittarius:
        "Marte en Sagitario actúa con entusiasmo, franqueza y necesidad de una dirección con sentido.",

      Capricorn:
        "Marte en Capricornio actúa con disciplina, estrategia y voluntad de producir un resultado duradero.",

      Aquarius:
        "Marte en Acuario actúa con independencia, originalidad y necesidad de preservar su libertad.",

      Pisces:
        "Marte en Piscis actúa mediante intuición, inspiración y sensibilidad al contexto emocional.",
    },
  },

  de: {
    mercuryProfiles: {
      Aries:
        "Merkur im Widder schenkt schnelles, direktes und handlungsorientiertes Denken.",

      Taurus:
        "Merkur im Stier schenkt konkretes, methodisches und an überprüfbaren Fakten orientiertes Denken.",

      Gemini:
        "Merkur in den Zwillingen schenkt lebendiges, neugieriges Denken, das Informationen schnell verknüpft.",

      Cancer:
        "Merkur im Krebs schenkt intuitives, erinnerungsbezogenes Denken, das stark vom Empfinden beeinflusst wird.",

      Leo:
        "Merkur im Löwen schenkt ausdrucksstarkes, kreatives Denken mit überzeugender Vermittlungskraft.",

      Virgo:
        "Merkur in der Jungfrau schenkt präzises, analytisches Denken mit Blick für nützliche Details.",

      Libra:
        "Merkur in der Waage schenkt differenziertes, diplomatisches Denken mit Aufmerksamkeit für verschiedene Perspektiven.",

      Scorpio:
        "Merkur im Skorpion schenkt tiefes, strategisches Denken mit natürlicher Anziehung zum Verborgenen.",

      Sagittarius:
        "Merkur im Schützen schenkt ganzheitliches, enthusiastisches Denken auf Sinnsuche.",

      Capricorn:
        "Merkur im Steinbock schenkt strukturiertes, vorsichtiges Denken mit realistischen Schlussfolgerungen.",

      Aquarius:
        "Merkur im Wassermann schenkt originelles, unabhängiges Denken, das ungewöhnliche Lösungen erwägen kann.",

      Pisces:
        "Merkur in den Fischen schenkt fantasievolles, intuitives Denken mit Sensibilität für unausgesprochene Nuancen.",
    },

    venusProfiles: {
      Aries:
        "Venus im Widder sucht eine lebendige, direkte Beziehung, in der Verlangen erhalten bleibt.",

      Taurus:
        "Venus im Stier sucht Treue, Stabilität und konkret gezeigte Zuneigung.",

      Gemini:
        "Venus in den Zwillingen sucht intellektuelle Verbundenheit, Bewegung und reichen Austausch.",

      Cancer:
        "Venus im Krebs sucht emotionale Sicherheit, Zärtlichkeit und eine Verbindung, die zum Zufluchtsort werden kann.",

      Leo:
        "Venus im Löwen sucht Wärme, Loyalität und eine Beziehung, in der Liebe offen gezeigt werden kann.",

      Virgo:
        "Venus in der Jungfrau sucht Verlässlichkeit, Aufmerksamkeit und einfache, aber beständige Zeichen der Zuneigung.",

      Libra:
        "Venus in der Waage sucht Gleichgewicht, Schönheit und eine Beziehung auf Gegenseitigkeit.",

      Scorpio:
        "Venus im Skorpion sucht tiefe Intimität, absolute Loyalität und eine Beziehung mit Transformationskraft.",

      Sagittarius:
        "Venus im Schützen sucht Freiheit, Authentizität und eine Verbindung, die neue Horizonte öffnet.",

      Capricorn:
        "Venus im Steinbock sucht Stabilität, Verantwortung und eine Beziehung mit echter Kontinuität.",

      Aquarius:
        "Venus im Wassermann sucht Freiheit, Gleichheit und eine Verbindung, die die Individualität beider respektiert.",

      Pisces:
        "Venus in den Fischen sucht tiefes emotionales Verständnis, Sanftheit und eine Form von Verbundenheit.",
    },

    marsProfiles: {
      Aries:
        "Mars im Widder handelt schnell, mutig und mit dem Bedürfnis, sofort zu reagieren.",

      Taurus:
        "Mars im Stier handelt langsam, ausdauernd und nach einer Entscheidung mit großer Entschlossenheit.",

      Gemini:
        "Mars in den Zwillingen handelt über Ideen, Worte und schnelle Reaktion.",

      Cancer:
        "Mars im Krebs handelt schützend, kann direkte Konfrontation bei Verletzlichkeit jedoch umgehen.",

      Leo:
        "Mars im Löwen handelt stolz, kreativ und mit dem Bedürfnis, das Wichtige zu verteidigen.",

      Virgo:
        "Mars in der Jungfrau handelt methodisch, präzise und mit dem Bedürfnis, Situationen konkret zu verbessern.",

      Libra:
        "Mars in der Waage handelt über Verhandlung, Kooperation und die Suche nach einer ausgewogenen Lösung.",

      Scorpio:
        "Mars im Skorpion handelt intensiv, strategisch und mit bemerkenswerter Ausdauer.",

      Sagittarius:
        "Mars im Schützen handelt enthusiastisch, direkt und mit dem Bedürfnis nach einer sinnvollen Richtung.",

      Capricorn:
        "Mars im Steinbock handelt diszipliniert, strategisch und mit dem Willen zu dauerhaften Ergebnissen.",

      Aquarius:
        "Mars im Wassermann handelt unabhängig, originell und mit starkem Freiheitsbedürfnis.",

      Pisces:
        "Mars in den Fischen handelt intuitiv, inspiriert und sensibel für den emotionalen Kontext.",
    },
  },

  it: {
    mercuryProfiles: {
      Aries:
        "Mercurio in Ariete dona un pensiero rapido, diretto e orientato all’azione.",

      Taurus:
        "Mercurio in Toro dona un pensiero concreto, metodico e legato ai fatti verificabili.",

      Gemini:
        "Mercurio in Gemelli dona un pensiero vivo, curioso e capace di collegare rapidamente più informazioni.",

      Cancer:
        "Mercurio in Cancro dona un pensiero intuitivo, legato alla memoria e fortemente influenzato dal sentire.",

      Leo:
        "Mercurio in Leone dona un pensiero espressivo, creativo e capace di comunicare con convinzione.",

      Virgo:
        "Mercurio in Vergine dona un pensiero preciso, analitico e attento ai dettagli utili.",

      Libra:
        "Mercurio in Bilancia dona un pensiero sfumato, diplomatico e attento ai diversi punti di vista.",

      Scorpio:
        "Mercurio in Scorpione dona un pensiero profondo, strategico e naturalmente attratto da ciò che rimane nascosto.",

      Sagittarius:
        "Mercurio in Sagittario dona un pensiero globale, entusiasta e orientato alla ricerca di significato.",

      Capricorn:
        "Mercurio in Capricorno dona un pensiero strutturato, prudente e orientato a conclusioni realistiche.",

      Aquarius:
        "Mercurio in Acquario dona un pensiero originale, indipendente e capace di immaginare soluzioni insolite.",

      Pisces:
        "Mercurio in Pesci dona un pensiero immaginativo, intuitivo e sensibile alle sfumature implicite.",
    },

    venusProfiles: {
      Aries:
        "Venere in Ariete cerca una relazione viva, diretta e capace di mantenere il desiderio.",

      Taurus:
        "Venere in Toro cerca fedeltà, stabilità e un affetto che si manifesta concretamente.",

      Gemini:
        "Venere in Gemelli cerca complicità intellettuale, movimento e ricchezza negli scambi.",

      Cancer:
        "Venere in Cancro cerca sicurezza affettiva, tenerezza e un legame capace di diventare rifugio.",

      Leo:
        "Venere in Leone cerca calore, lealtà e una relazione in cui l’amore possa essere espresso apertamente.",

      Virgo:
        "Venere in Vergine cerca affidabilità, attenzione e prove d’affetto semplici ma costanti.",

      Libra:
        "Venere in Bilancia cerca equilibrio, bellezza e una relazione fondata sulla reciprocità.",

      Scorpio:
        "Venere in Scorpione cerca intimità profonda, lealtà assoluta e una relazione capace di trasformare.",

      Sagittarius:
        "Venere in Sagittario cerca libertà, autenticità e un legame capace di aprire nuovi orizzonti.",

      Capricorn:
        "Venere in Capricorno cerca stabilità, responsabilità e una relazione con reale continuità.",

      Aquarius:
        "Venere in Acquario cerca libertà, uguaglianza e un legame che rispetti l’individualità di ciascuno.",

      Pisces:
        "Venere in Pesci cerca grande comprensione emotiva, dolcezza e una forma di comunione.",
    },

    marsProfiles: {
      Aries:
        "Marte in Ariete agisce con rapidità, coraggio e bisogno di rispondere immediatamente.",

      Taurus:
        "Marte in Toro agisce lentamente, con resistenza e grande determinazione una volta impegnato.",

      Gemini:
        "Marte in Gemelli agisce attraverso idee, parole e capacità di reagire rapidamente.",

      Cancer:
        "Marte in Cancro agisce per proteggere, ma può evitare il confronto diretto quando si sente vulnerabile.",

      Leo:
        "Marte in Leone agisce con orgoglio, creatività e bisogno di difendere ciò che gli sta a cuore.",

      Virgo:
        "Marte in Vergine agisce con metodo, precisione e bisogno di migliorare concretamente la situazione.",

      Libra:
        "Marte in Bilancia agisce attraverso negoziazione, cooperazione e ricerca di una soluzione equilibrata.",

      Scorpio:
        "Marte in Scorpione agisce con intensità, strategia e notevole capacità di resistenza.",

      Sagittarius:
        "Marte in Sagittario agisce con entusiasmo, franchezza e bisogno di una direzione significativa.",

      Capricorn:
        "Marte in Capricorno agisce con disciplina, strategia e volontà di produrre un risultato duraturo.",

      Aquarius:
        "Marte in Acquario agisce con indipendenza, originalità e bisogno di preservare la libertà.",

      Pisces:
        "Marte in Pesci agisce attraverso intuizione, ispirazione e sensibilità al contesto emotivo.",
    },
  },

  pt: {
    mercuryProfiles: {
      Aries:
        "Mercúrio em Áries oferece um pensamento rápido, direto e orientado à ação.",

      Taurus:
        "Mercúrio em Touro oferece um pensamento concreto, metódico e ligado a fatos verificáveis.",

      Gemini:
        "Mercúrio em Gêmeos oferece um pensamento vivo, curioso e capaz de conectar rapidamente várias informações.",

      Cancer:
        "Mercúrio em Câncer oferece um pensamento intuitivo, ligado à memória e fortemente influenciado pelo sentir.",

      Leo:
        "Mercúrio em Leão oferece um pensamento expressivo, criativo e capaz de transmitir com convicção.",

      Virgo:
        "Mercúrio em Virgem oferece um pensamento preciso, analítico e atento aos detalhes úteis.",

      Libra:
        "Mercúrio em Libra oferece um pensamento matizado, diplomático e atento a diferentes pontos de vista.",

      Scorpio:
        "Mercúrio em Escorpião oferece um pensamento profundo, estratégico e naturalmente atraído por aquilo que permanece oculto.",

      Sagittarius:
        "Mercúrio em Sagitário oferece um pensamento global, entusiasmado e voltado para a busca de sentido.",

      Capricorn:
        "Mercúrio em Capricórnio oferece um pensamento estruturado, prudente e voltado para conclusões realistas.",

      Aquarius:
        "Mercúrio em Aquário oferece um pensamento original, independente e capaz de considerar soluções incomuns.",

      Pisces:
        "Mercúrio em Peixes oferece um pensamento imaginativo, intuitivo e sensível às nuances implícitas.",
    },

    venusProfiles: {
      Aries:
        "Vênus em Áries busca uma relação viva, direta e capaz de manter o desejo.",

      Taurus:
        "Vênus em Touro busca fidelidade, estabilidade e um afeto que se manifesta concretamente.",

      Gemini:
        "Vênus em Gêmeos busca cumplicidade intelectual, movimento e riqueza nas trocas.",

      Cancer:
        "Vênus em Câncer busca segurança afetiva, ternura e um vínculo capaz de se tornar refúgio.",

      Leo:
        "Vênus em Leão busca calor, lealdade e uma relação na qual o amor possa ser expresso abertamente.",

      Virgo:
        "Vênus em Virgem busca confiabilidade, atenção e provas de afeto simples, porém constantes.",

      Libra:
        "Vênus em Libra busca equilíbrio, beleza e uma relação baseada em reciprocidade.",

      Scorpio:
        "Vênus em Escorpião busca intimidade profunda, lealdade absoluta e uma relação capaz de transformar.",

      Sagittarius:
        "Vênus em Sagitário busca liberdade, autenticidade e um vínculo capaz de abrir novos horizontes.",

      Capricorn:
        "Vênus em Capricórnio busca estabilidade, responsabilidade e uma relação com verdadeira continuidade.",

      Aquarius:
        "Vênus em Aquário busca liberdade, igualdade e um vínculo que respeite a individualidade de cada pessoa.",

      Pisces:
        "Vênus em Peixes busca grande compreensão emocional, suavidade e uma forma de comunhão.",
    },

    marsProfiles: {
      Aries:
        "Marte em Áries age com rapidez, coragem e necessidade de responder imediatamente.",

      Taurus:
        "Marte em Touro age lentamente, com resistência e grande determinação depois de se comprometer.",

      Gemini:
        "Marte em Gêmeos age através de ideias, palavras e capacidade de reagir rapidamente.",

      Cancer:
        "Marte em Câncer age para proteger, mas pode evitar confronto direto quando se sente vulnerável.",

      Leo:
        "Marte em Leão age com orgulho, criatividade e necessidade de defender aquilo que importa.",

      Virgo:
        "Marte em Virgem age com método, precisão e necessidade de melhorar concretamente a situação.",

      Libra:
        "Marte em Libra age através de negociação, cooperação e busca de uma solução equilibrada.",

      Scorpio:
        "Marte em Escorpião age com intensidade, estratégia e notável capacidade de resistência.",

      Sagittarius:
        "Marte em Sagitário age com entusiasmo, franqueza e necessidade de uma direção com sentido.",

      Capricorn:
        "Marte em Capricórnio age com disciplina, estratégia e vontade de produzir um resultado duradouro.",

      Aquarius:
        "Marte em Aquário age com independência, originalidade e necessidade de preservar liberdade.",

      Pisces:
        "Marte em Peixes age através de intuição, inspiração e sensibilidade ao contexto emocional.",
    },
  },
};
type SynthesisExpansionProfiles = {
  saturnProfiles:
    Record<
      string,
      string
    >;

  jupiterProfiles:
    Record<
      string,
      string
    >;

  midheavenProfiles:
    Record<
      string,
      string
    >;
};

const EXPANSION_PROFILES:
Record<
  NonFrenchLocale,
  SynthesisExpansionProfiles
> = {
  en: {
    saturnProfiles: {
      Aries:
        "Saturn in Aries asks you to learn to act courageously without confusing assertion with reaction.",

      Taurus:
        "Saturn in Taurus asks you to build inner security that does not depend solely on material control.",

      Gemini:
        "Saturn in Gemini asks you to trust your thinking and accept expressing yourself before everything is perfect.",

      Cancer:
        "Saturn in Cancer asks you to recognize your emotional needs and accept receiving support.",

      Leo:
        "Saturn in Leo asks you to create and shine without making approval a condition.",

      Virgo:
        "Saturn in Virgo asks you to transform high standards into competence without falling into perfectionism.",

      Libra:
        "Saturn in Libra asks you to take a position without believing that disagreement necessarily destroys the bond.",

      Scorpio:
        "Saturn in Scorpio asks you to develop trust without abandoning discernment.",

      Sagittarius:
        "Saturn in Sagittarius asks you to give real structure to your beliefs and your need for freedom.",

      Capricorn:
        "Saturn in Capricorn asks you to build ambitiously without reducing your value to productivity.",

      Aquarius:
        "Saturn in Aquarius asks you to participate collectively without losing your individuality.",

      Pisces:
        "Saturn in Pisces asks you to protect your sensitivity through simple and stable boundaries.",
    },

    jupiterProfiles: {
      Aries:
        "Jupiter in Aries develops confidence through initiative, courage, and boldness.",

      Taurus:
        "Jupiter in Taurus develops confidence through stability, patience, and gradual growth.",

      Gemini:
        "Jupiter in Gemini develops confidence through learning, exchange, and diversity of ideas.",

      Cancer:
        "Jupiter in Cancer develops confidence through protection, belonging, and the creation of a solid emotional base.",

      Leo:
        "Jupiter in Leo develops confidence through creativity, visibility, and generous self-expression.",

      Virgo:
        "Jupiter in Virgo develops confidence through competence, usefulness, and concrete improvement.",

      Libra:
        "Jupiter in Libra develops confidence through cooperation, fairness, and balanced relationships.",

      Scorpio:
        "Jupiter in Scorpio develops confidence through transformation, lucidity, and the ability to rise again after crises.",

      Sagittarius:
        "Jupiter in Sagittarius develops confidence through exploration, transmission, and the search for meaning.",

      Capricorn:
        "Jupiter in Capricorn develops confidence through structure, ambition, and long-term building.",

      Aquarius:
        "Jupiter in Aquarius develops confidence through innovation, freedom, and collective contribution.",

      Pisces:
        "Jupiter in Pisces develops confidence through intuition, compassion, and openness to a broader vision.",
    },

    midheavenProfiles: {
      Aries:
        "Your Midheaven in Aries favors paths where you can initiate, decide, and open a direction.",

      Taurus:
        "Your Midheaven in Taurus favors paths based on stability, concrete value, and continuity.",

      Gemini:
        "Your Midheaven in Gemini favors paths related to exchange, information, teaching, and versatility.",

      Cancer:
        "Your Midheaven in Cancer favors paths where listening, protection, and human understanding are essential.",

      Leo:
        "Your Midheaven in Leo favors paths where creativity, visibility, and personal leadership can be expressed.",

      Virgo:
        "Your Midheaven in Virgo favors paths where analysis, method, service, and improvement are valued.",

      Libra:
        "Your Midheaven in Libra favors paths related to mediation, beauty, justice, and collaboration.",

      Scorpio:
        "Your Midheaven in Scorpio favors paths where strategy, deep analysis, and transformation play a central role.",

      Sagittarius:
        "Your Midheaven in Sagittarius favors paths related to teaching, travel, transmission, and broadening perspectives.",

      Capricorn:
        "Your Midheaven in Capricorn favors paths that require structure, responsibility, and lasting construction.",

      Aquarius:
        "Your Midheaven in Aquarius favors paths related to innovation, technology, networks, and collective change.",

      Pisces:
        "Your Midheaven in Pisces favors paths where intuition, creativity, sensitivity, or support can be expressed.",
    },
  },

  es: {
    saturnProfiles: {
      Aries:
        "Saturno en Aries pide aprender a actuar con valor sin confundir afirmación y reacción.",

      Taurus:
        "Saturno en Tauro pide construir una seguridad interior que no dependa únicamente del control material.",

      Gemini:
        "Saturno en Géminis pide confiar en tu pensamiento y aceptar expresarte antes de que todo sea perfecto.",

      Cancer:
        "Saturno en Cáncer pide reconocer tus necesidades emocionales y aceptar recibir apoyo.",

      Leo:
        "Saturno en Leo pide crear y brillar sin convertir la aprobación en una condición.",

      Virgo:
        "Saturno en Virgo pide transformar la exigencia en competencia sin caer en el perfeccionismo.",

      Libra:
        "Saturno en Libra pide tomar posición sin creer que un desacuerdo destruye necesariamente el vínculo.",

      Scorpio:
        "Saturno en Escorpio pide desarrollar confianza sin abandonar tu discernimiento.",

      Sagittarius:
        "Saturno en Sagitario pide dar una estructura real a tus convicciones y a tu necesidad de libertad.",

      Capricorn:
        "Saturno en Capricornio pide construir con ambición sin reducir tu valor a tu productividad.",

      Aquarius:
        "Saturno en Acuario pide participar en lo colectivo sin perder tu singularidad.",

      Pisces:
        "Saturno en Piscis pide proteger tu sensibilidad mediante límites sencillos y estables.",
    },

    jupiterProfiles: {
      Aries:
        "Júpiter en Aries desarrolla la confianza mediante la iniciativa, el valor y la audacia.",

      Taurus:
        "Júpiter en Tauro desarrolla la confianza mediante la estabilidad, la paciencia y el crecimiento progresivo.",

      Gemini:
        "Júpiter en Géminis desarrolla la confianza mediante el aprendizaje, los intercambios y la diversidad de ideas.",

      Cancer:
        "Júpiter en Cáncer desarrolla la confianza mediante la protección, la pertenencia y la construcción de una base emocional sólida.",

      Leo:
        "Júpiter en Leo desarrolla la confianza mediante la creatividad, la visibilidad y una expresión generosa de uno mismo.",

      Virgo:
        "Júpiter en Virgo desarrolla la confianza mediante la competencia, la utilidad y la mejora concreta.",

      Libra:
        "Júpiter en Libra desarrolla la confianza mediante la cooperación, la justicia y las relaciones equilibradas.",

      Scorpio:
        "Júpiter en Escorpio desarrolla la confianza mediante la transformación, la lucidez y la capacidad de renacer después de las crisis.",

      Sagittarius:
        "Júpiter en Sagitario desarrolla la confianza mediante la exploración, la transmisión y la búsqueda de sentido.",

      Capricorn:
        "Júpiter en Capricornio desarrolla la confianza mediante la estructura, la ambición y la construcción a largo plazo.",

      Aquarius:
        "Júpiter en Acuario desarrolla la confianza mediante la innovación, la libertad y la contribución colectiva.",

      Pisces:
        "Júpiter en Piscis desarrolla la confianza mediante la intuición, la compasión y la apertura a una visión más amplia.",
    },

    midheavenProfiles: {
      Aries:
        "Tu Medio Cielo en Aries favorece los caminos donde puedes iniciar, decidir y abrir una dirección.",

      Taurus:
        "Tu Medio Cielo en Tauro favorece los caminos basados en la estabilidad, el valor concreto y la continuidad.",

      Gemini:
        "Tu Medio Cielo en Géminis favorece los caminos relacionados con los intercambios, la información, la enseñanza y la versatilidad.",

      Cancer:
        "Tu Medio Cielo en Cáncer favorece los caminos donde la escucha, la protección y la comprensión humana son esenciales.",

      Leo:
        "Tu Medio Cielo en Leo favorece los caminos donde la creatividad, la visibilidad y el liderazgo personal pueden expresarse.",

      Virgo:
        "Tu Medio Cielo en Virgo favorece los caminos donde el análisis, el método, el servicio y la mejora son valorados.",

      Libra:
        "Tu Medio Cielo en Libra favorece los caminos ligados a la mediación, la belleza, la justicia y la colaboración.",

      Scorpio:
        "Tu Medio Cielo en Escorpio favorece los caminos donde la estrategia, el análisis profundo y la transformación juegan un papel central.",

      Sagittarius:
        "Tu Medio Cielo en Sagitario favorece los caminos ligados a la enseñanza, los viajes, la transmisión y la ampliación de perspectivas.",

      Capricorn:
        "Tu Medio Cielo en Capricornio favorece los caminos que requieren estructura, responsabilidad y construcción duradera.",

      Aquarius:
        "Tu Medio Cielo en Acuario favorece los caminos ligados a la innovación, la tecnología, las redes y los cambios colectivos.",

      Pisces:
        "Tu Medio Cielo en Piscis favorece los caminos donde la intuición, la creatividad, la sensibilidad o el acompañamiento pueden expresarse.",
    },
  },

  de: {
    saturnProfiles: {
      Aries:
        "Saturn im Widder verlangt, mutig zu handeln, ohne Selbstbehauptung mit Reaktion zu verwechseln.",

      Taurus:
        "Saturn im Stier verlangt den Aufbau innerer Sicherheit, die nicht nur von materieller Kontrolle abhängt.",

      Gemini:
        "Saturn in den Zwillingen verlangt Vertrauen in das eigene Denken und Ausdruck, bevor alles perfekt ist.",

      Cancer:
        "Saturn im Krebs verlangt, emotionale Bedürfnisse anzuerkennen und Unterstützung annehmen zu können.",

      Leo:
        "Saturn im Löwen verlangt, zu erschaffen und zu strahlen, ohne Anerkennung zur Voraussetzung zu machen.",

      Virgo:
        "Saturn in der Jungfrau verlangt, hohe Ansprüche in Kompetenz zu verwandeln, ohne in Perfektionismus zu fallen.",

      Libra:
        "Saturn in der Waage verlangt, Position zu beziehen, ohne zu glauben, dass Meinungsverschiedenheit jede Verbindung zerstört.",

      Scorpio:
        "Saturn im Skorpion verlangt, Vertrauen zu entwickeln, ohne Urteilsvermögen aufzugeben.",

      Sagittarius:
        "Saturn im Schützen verlangt, Überzeugungen und Freiheitsbedürfnis eine reale Struktur zu geben.",

      Capricorn:
        "Saturn im Steinbock verlangt, ehrgeizig aufzubauen, ohne den eigenen Wert auf Produktivität zu reduzieren.",

      Aquarius:
        "Saturn im Wassermann verlangt, am Kollektiv teilzunehmen, ohne die eigene Besonderheit zu verlieren.",

      Pisces:
        "Saturn in den Fischen verlangt, Sensibilität durch einfache und stabile Grenzen zu schützen.",
    },

    jupiterProfiles: {
      Aries:
        "Jupiter im Widder entwickelt Vertrauen durch Initiative, Mut und Kühnheit.",

      Taurus:
        "Jupiter im Stier entwickelt Vertrauen durch Stabilität, Geduld und schrittweises Wachstum.",

      Gemini:
        "Jupiter in den Zwillingen entwickelt Vertrauen durch Lernen, Austausch und Ideenvielfalt.",

      Cancer:
        "Jupiter im Krebs entwickelt Vertrauen durch Schutz, Zugehörigkeit und eine solide emotionale Basis.",

      Leo:
        "Jupiter im Löwen entwickelt Vertrauen durch Kreativität, Sichtbarkeit und großzügigen Selbstausdruck.",

      Virgo:
        "Jupiter in der Jungfrau entwickelt Vertrauen durch Kompetenz, Nützlichkeit und konkrete Verbesserung.",

      Libra:
        "Jupiter in der Waage entwickelt Vertrauen durch Kooperation, Gerechtigkeit und ausgewogene Beziehungen.",

      Scorpio:
        "Jupiter im Skorpion entwickelt Vertrauen durch Transformation, Klarheit und die Fähigkeit, nach Krisen neu zu beginnen.",

      Sagittarius:
        "Jupiter im Schützen entwickelt Vertrauen durch Entdeckung, Vermittlung und Sinnsuche.",

      Capricorn:
        "Jupiter im Steinbock entwickelt Vertrauen durch Struktur, Ehrgeiz und langfristigen Aufbau.",

      Aquarius:
        "Jupiter im Wassermann entwickelt Vertrauen durch Innovation, Freiheit und kollektiven Beitrag.",

      Pisces:
        "Jupiter in den Fischen entwickelt Vertrauen durch Intuition, Mitgefühl und Offenheit für eine größere Vision.",
    },

    midheavenProfiles: {
      Aries:
        "Ihr Medium Coeli im Widder begünstigt Wege, auf denen Sie initiieren, entscheiden und eine Richtung eröffnen können.",

      Taurus:
        "Ihr Medium Coeli im Stier begünstigt Wege, die auf Stabilität, konkretem Wert und Kontinuität beruhen.",

      Gemini:
        "Ihr Medium Coeli in den Zwillingen begünstigt Wege rund um Austausch, Information, Lehre und Vielseitigkeit.",

      Cancer:
        "Ihr Medium Coeli im Krebs begünstigt Wege, auf denen Zuhören, Schutz und menschliches Verständnis wesentlich sind.",

      Leo:
        "Ihr Medium Coeli im Löwen begünstigt Wege, auf denen Kreativität, Sichtbarkeit und persönliche Führung Ausdruck finden.",

      Virgo:
        "Ihr Medium Coeli in der Jungfrau begünstigt Wege, auf denen Analyse, Methode, Dienstleistung und Verbesserung geschätzt werden.",

      Libra:
        "Ihr Medium Coeli in der Waage begünstigt Wege rund um Vermittlung, Schönheit, Gerechtigkeit und Zusammenarbeit.",

      Scorpio:
        "Ihr Medium Coeli im Skorpion begünstigt Wege, auf denen Strategie, Tiefenanalyse und Transformation zentral sind.",

      Sagittarius:
        "Ihr Medium Coeli im Schützen begünstigt Wege rund um Lehre, Reisen, Vermittlung und Horizonterweiterung.",

      Capricorn:
        "Ihr Medium Coeli im Steinbock begünstigt Wege, die Struktur, Verantwortung und dauerhaften Aufbau verlangen.",

      Aquarius:
        "Ihr Medium Coeli im Wassermann begünstigt Wege rund um Innovation, Technologie, Netzwerke und kollektiven Wandel.",

      Pisces:
        "Ihr Medium Coeli in den Fischen begünstigt Wege, auf denen Intuition, Kreativität, Sensibilität oder Begleitung Ausdruck finden.",
    },
  },

  it: {
    saturnProfiles: {
      Aries:
        "Saturno in Ariete chiede di imparare ad agire con coraggio senza confondere affermazione e reazione.",

      Taurus:
        "Saturno in Toro chiede di costruire una sicurezza interiore che non dipenda soltanto dal controllo materiale.",

      Gemini:
        "Saturno in Gemelli chiede di fidarti del tuo pensiero e accettare di esprimerti prima che tutto sia perfetto.",

      Cancer:
        "Saturno in Cancro chiede di riconoscere i tuoi bisogni emotivi e accettare di ricevere sostegno.",

      Leo:
        "Saturno in Leone chiede di creare e risplendere senza fare dell’approvazione una condizione.",

      Virgo:
        "Saturno in Vergine chiede di trasformare l’esigenza in competenza senza cadere nel perfezionismo.",

      Libra:
        "Saturno in Bilancia chiede di prendere posizione senza credere che un disaccordo distrugga necessariamente il legame.",

      Scorpio:
        "Saturno in Scorpione chiede di sviluppare fiducia senza abbandonare il discernimento.",

      Sagittarius:
        "Saturno in Sagittario chiede di dare struttura reale alle tue convinzioni e al bisogno di libertà.",

      Capricorn:
        "Saturno in Capricorno chiede di costruire con ambizione senza ridurre il tuo valore alla produttività.",

      Aquarius:
        "Saturno in Acquario chiede di partecipare al collettivo senza perdere la tua unicità.",

      Pisces:
        "Saturno in Pesci chiede di proteggere la sensibilità attraverso limiti semplici e stabili.",
    },

    jupiterProfiles: {
      Aries:
        "Giove in Ariete sviluppa fiducia attraverso iniziativa, coraggio e audacia.",

      Taurus:
        "Giove in Toro sviluppa fiducia attraverso stabilità, pazienza e crescita progressiva.",

      Gemini:
        "Giove in Gemelli sviluppa fiducia attraverso apprendimento, scambi e diversità di idee.",

      Cancer:
        "Giove in Cancro sviluppa fiducia attraverso protezione, appartenenza e costruzione di una base emotiva solida.",

      Leo:
        "Giove in Leone sviluppa fiducia attraverso creatività, visibilità ed espressione generosa di sé.",

      Virgo:
        "Giove in Vergine sviluppa fiducia attraverso competenza, utilità e miglioramento concreto.",

      Libra:
        "Giove in Bilancia sviluppa fiducia attraverso cooperazione, giustizia e relazioni equilibrate.",

      Scorpio:
        "Giove in Scorpione sviluppa fiducia attraverso trasformazione, lucidità e capacità di rinascere dopo le crisi.",

      Sagittarius:
        "Giove in Sagittario sviluppa fiducia attraverso esplorazione, trasmissione e ricerca di significato.",

      Capricorn:
        "Giove in Capricorno sviluppa fiducia attraverso struttura, ambizione e costruzione a lungo termine.",

      Aquarius:
        "Giove in Acquario sviluppa fiducia attraverso innovazione, libertà e contributo collettivo.",

      Pisces:
        "Giove in Pesci sviluppa fiducia attraverso intuizione, compassione e apertura a una visione più ampia.",
    },

    midheavenProfiles: {
      Aries:
        "Il tuo Medio Cielo in Ariete favorisce percorsi nei quali puoi iniziare, decidere e aprire una direzione.",

      Taurus:
        "Il tuo Medio Cielo in Toro favorisce percorsi fondati su stabilità, valore concreto e continuità.",

      Gemini:
        "Il tuo Medio Cielo in Gemelli favorisce percorsi legati agli scambi, all’informazione, all’insegnamento e alla versatilità.",

      Cancer:
        "Il tuo Medio Cielo in Cancro favorisce percorsi nei quali ascolto, protezione e comprensione umana sono essenziali.",

      Leo:
        "Il tuo Medio Cielo in Leone favorisce percorsi nei quali creatività, visibilità e leadership personale possono esprimersi.",

      Virgo:
        "Il tuo Medio Cielo in Vergine favorisce percorsi nei quali analisi, metodo, servizio e miglioramento sono valorizzati.",

      Libra:
        "Il tuo Medio Cielo in Bilancia favorisce percorsi legati a mediazione, bellezza, giustizia e collaborazione.",

      Scorpio:
        "Il tuo Medio Cielo in Scorpione favorisce percorsi nei quali strategia, analisi profonda e trasformazione svolgono un ruolo centrale.",

      Sagittarius:
        "Il tuo Medio Cielo in Sagittario favorisce percorsi legati a insegnamento, viaggi, trasmissione e ampliamento delle prospettive.",

      Capricorn:
        "Il tuo Medio Cielo in Capricorno favorisce percorsi che richiedono struttura, responsabilità e costruzione duratura.",

      Aquarius:
        "Il tuo Medio Cielo in Acquario favorisce percorsi legati a innovazione, tecnologia, reti e cambiamenti collettivi.",

      Pisces:
        "Il tuo Medio Cielo in Pesci favorisce percorsi nei quali intuizione, creatività, sensibilità o accompagnamento possono esprimersi.",
    },
  },

  pt: {
    saturnProfiles: {
      Aries:
        "Saturno em Áries pede que você aprenda a agir com coragem sem confundir afirmação e reação.",

      Taurus:
        "Saturno em Touro pede que você construa uma segurança interior que não dependa apenas do controle material.",

      Gemini:
        "Saturno em Gêmeos pede que você confie no próprio pensamento e aceite se expressar antes de tudo estar perfeito.",

      Cancer:
        "Saturno em Câncer pede que você reconheça suas necessidades emocionais e aceite receber apoio.",

      Leo:
        "Saturno em Leão pede que você crie e brilhe sem transformar aprovação em condição.",

      Virgo:
        "Saturno em Virgem pede que você transforme exigência em competência sem cair no perfeccionismo.",

      Libra:
        "Saturno em Libra pede que você tome posição sem acreditar que uma discordância destrói necessariamente o vínculo.",

      Scorpio:
        "Saturno em Escorpião pede que você desenvolva confiança sem abandonar discernimento.",

      Sagittarius:
        "Saturno em Sagitário pede que você dê estrutura real às suas convicções e necessidade de liberdade.",

      Capricorn:
        "Saturno em Capricórnio pede que você construa com ambição sem reduzir seu valor à produtividade.",

      Aquarius:
        "Saturno em Aquário pede que você participe do coletivo sem perder sua singularidade.",

      Pisces:
        "Saturno em Peixes pede que você proteja sua sensibilidade através de limites simples e estáveis.",
    },

    jupiterProfiles: {
      Aries:
        "Júpiter em Áries desenvolve confiança através de iniciativa, coragem e ousadia.",

      Taurus:
        "Júpiter em Touro desenvolve confiança através de estabilidade, paciência e crescimento gradual.",

      Gemini:
        "Júpiter em Gêmeos desenvolve confiança através de aprendizagem, trocas e diversidade de ideias.",

      Cancer:
        "Júpiter em Câncer desenvolve confiança através de proteção, pertencimento e construção de uma base emocional sólida.",

      Leo:
        "Júpiter em Leão desenvolve confiança através de criatividade, visibilidade e expressão generosa de si mesmo.",

      Virgo:
        "Júpiter em Virgem desenvolve confiança através de competência, utilidade e melhoria concreta.",

      Libra:
        "Júpiter em Libra desenvolve confiança através de cooperação, justiça e relacionamentos equilibrados.",

      Scorpio:
        "Júpiter em Escorpião desenvolve confiança através de transformação, lucidez e capacidade de renascer depois das crises.",

      Sagittarius:
        "Júpiter em Sagitário desenvolve confiança através de exploração, transmissão e busca de sentido.",

      Capricorn:
        "Júpiter em Capricórnio desenvolve confiança através de estrutura, ambição e construção a longo prazo.",

      Aquarius:
        "Júpiter em Aquário desenvolve confiança através de inovação, liberdade e contribuição coletiva.",

      Pisces:
        "Júpiter em Peixes desenvolve confiança através de intuição, compaixão e abertura a uma visão mais ampla.",
    },

    midheavenProfiles: {
      Aries:
        "Seu Meio do Céu em Áries favorece caminhos nos quais você pode iniciar, decidir e abrir uma direção.",

      Taurus:
        "Seu Meio do Céu em Touro favorece caminhos baseados em estabilidade, valor concreto e continuidade.",

      Gemini:
        "Seu Meio do Céu em Gêmeos favorece caminhos ligados a trocas, informação, ensino e versatilidade.",

      Cancer:
        "Seu Meio do Céu em Câncer favorece caminhos nos quais escuta, proteção e compreensão humana são essenciais.",

      Leo:
        "Seu Meio do Céu em Leão favorece caminhos nos quais criatividade, visibilidade e liderança pessoal podem se expressar.",

      Virgo:
        "Seu Meio do Céu em Virgem favorece caminhos nos quais análise, método, serviço e melhoria são valorizados.",

      Libra:
        "Seu Meio do Céu em Libra favorece caminhos ligados a mediação, beleza, justiça e colaboração.",

      Scorpio:
        "Seu Meio do Céu em Escorpião favorece caminhos nos quais estratégia, análise profunda e transformação têm papel central.",

      Sagittarius:
        "Seu Meio do Céu em Sagitário favorece caminhos ligados a ensino, viagens, transmissão e ampliação de perspectivas.",

      Capricorn:
        "Seu Meio do Céu em Capricórnio favorece caminhos que exigem estrutura, responsabilidade e construção duradoura.",

      Aquarius:
        "Seu Meio do Céu em Aquário favorece caminhos ligados a inovação, tecnologia, redes e mudanças coletivas.",

      Pisces:
        "Seu Meio do Céu em Peixes favorece caminhos nos quais intuição, criação, sensibilidade ou acompanhamento podem se expressar.",
    },
  },
};
type SynthesisDeepProfiles = {
  plutoProfiles:
    Record<
      string,
      string
    >;

  neptuneProfiles:
    Record<
      string,
      string
    >;

  fallbacks: {
    sun: string;
    moon: string;
    ascendant: string;
    mercury: string;
    venus: string;
    mars: string;
    saturn: string;
    jupiter: string;
    midheaven: string;
    pluto: string;
    neptune: string;
  };
};

const DEEP_PROFILES:
Record<
  NonFrenchLocale,
  SynthesisDeepProfiles
> = {
  en: {
    plutoProfiles: {
      Aries:
        "Pluto in Aries intensifies issues related to will, power of action, and self-assertion.",

      Taurus:
        "Pluto in Taurus intensifies issues related to security, resources, and fear of losing what has been built.",

      Gemini:
        "Pluto in Gemini intensifies thought, analysis, and the need to understand true intentions.",

      Cancer:
        "Pluto in Cancer intensifies ties to the past, family, and emotional protection mechanisms.",

      Leo:
        "Pluto in Leo intensifies issues related to recognition, creativity, and the need to leave a mark.",

      Virgo:
        "Pluto in Virgo intensifies the need for mastery, precision, and transformation through improvement.",

      Libra:
        "Pluto in Libra intensifies power dynamics and transformations experienced through relationships.",

      Scorpio:
        "Pluto in Scorpio intensifies depth, lucidity, the need for truth, and the capacity for regeneration.",

      Sagittarius:
        "Pluto in Sagittarius intensifies beliefs, the search for meaning, and the need to transform your worldview.",

      Capricorn:
        "Pluto in Capricorn intensifies issues related to control, authority, and structures of success.",

      Aquarius:
        "Pluto in Aquarius intensifies the need for collective transformation, freedom, and questioning systems.",

      Pisces:
        "Pluto in Pisces intensifies sensitivity to invisible movements, loss of reference points, and deep transformation.",
    },

    neptuneProfiles: {
      Aries:
        "Neptune in Aries can blur the distinction between intuition and impulse.",

      Taurus:
        "Neptune in Taurus can idealize stability, comfort, or certain material attachments.",

      Gemini:
        "Neptune in Gemini can make thinking highly intuitive but sometimes difficult to organize.",

      Cancer:
        "Neptune in Cancer can amplify memories, nostalgia, and absorption of family emotions.",

      Leo:
        "Neptune in Leo can idealize recognition, love, or the creative role you wish to embody.",

      Virgo:
        "Neptune in Virgo can blur the distinction between appropriate help, sacrifice, and excessive responsibility.",

      Libra:
        "Neptune in Libra can encourage idealization of the couple, harmony, or the loved person.",

      Scorpio:
        "Neptune in Scorpio can amplify intuition but also fears connected with what remains unspoken.",

      Sagittarius:
        "Neptune in Sagittarius can idealize a belief, direction, or promise of expansion.",

      Capricorn:
        "Neptune in Capricorn can blur the distinction between personal ambition and outside expectations.",

      Aquarius:
        "Neptune in Aquarius can idealize a cause, group, or collective vision.",

      Pisces:
        "Neptune in Pisces strongly amplifies sensitivity and requires especially conscious boundaries.",
    },

    fallbacks: {
      sun:
        "Your Sun describes your inner direction and the identity you are seeking to build.",

      moon:
        "Your Moon describes your emotional needs and what allows you to regain a sense of security.",

      ascendant:
        "Your Ascendant describes your spontaneous way of relating to the world.",

      mercury:
        "Mercury describes the way you think, understand, and communicate.",

      venus:
        "Venus describes your way of loving, your values, and what attracts you.",

      mars:
        "Mars describes the way you transform an idea or desire into action.",

      saturn:
        "Saturn shows the caution, demands, and lessons that structure your decisions.",

      jupiter:
        "Jupiter shows how your confidence and possibilities can expand.",

      midheaven:
        "Your Midheaven describes your professional direction and the contribution you seek to make visible.",

      pluto:
        "Pluto reveals mechanisms of control, intensity, and deep transformation.",

      neptune:
        "Neptune shows the areas where ideals, intuition, or weak boundaries can blur your reference points.",
    },
  },

  es: {
    plutoProfiles: {
      Aries:
        "Plutón en Aries intensifica los temas relacionados con la voluntad, el poder de actuar y la afirmación.",

      Taurus:
        "Plutón en Tauro intensifica los temas relacionados con la seguridad, los recursos y el miedo a perder aquello que se ha construido.",

      Gemini:
        "Plutón en Géminis intensifica el pensamiento, el análisis y la necesidad de comprender las verdaderas intenciones.",

      Cancer:
        "Plutón en Cáncer intensifica los vínculos con el pasado, la familia y los mecanismos de protección emocional.",

      Leo:
        "Plutón en Leo intensifica los temas relacionados con el reconocimiento, la creatividad y la necesidad de dejar huella.",

      Virgo:
        "Plutón en Virgo intensifica la necesidad de dominio, precisión y transformación mediante la mejora.",

      Libra:
        "Plutón en Libra intensifica las relaciones de poder y las transformaciones vividas a través de los vínculos.",

      Scorpio:
        "Plutón en Escorpio intensifica la profundidad, la lucidez, la necesidad de verdad y la capacidad de regeneración.",

      Sagittarius:
        "Plutón en Sagitario intensifica las convicciones, la búsqueda de sentido y la necesidad de transformar tu visión del mundo.",

      Capricorn:
        "Plutón en Capricornio intensifica los temas relacionados con el control, la autoridad y las estructuras de éxito.",

      Aquarius:
        "Plutón en Acuario intensifica la necesidad de transformación colectiva, libertad y cuestionamiento de los sistemas.",

      Pisces:
        "Plutón en Piscis intensifica la sensibilidad a los movimientos invisibles, la pérdida de referencias y las transformaciones profundas.",
    },

    neptuneProfiles: {
      Aries:
        "Neptuno en Aries puede difuminar la distinción entre intuición e impulso.",

      Taurus:
        "Neptuno en Tauro puede idealizar la estabilidad, el confort o ciertos apegos materiales.",

      Gemini:
        "Neptuno en Géminis puede volver el pensamiento muy intuitivo, pero a veces difícil de organizar.",

      Cancer:
        "Neptuno en Cáncer puede amplificar los recuerdos, la nostalgia y la absorción de emociones familiares.",

      Leo:
        "Neptuno en Leo puede idealizar el reconocimiento, el amor o el papel creativo que deseas encarnar.",

      Virgo:
        "Neptuno en Virgo puede volver más difusa la distinción entre ayuda justa, sacrificio y responsabilidad excesiva.",

      Libra:
        "Neptuno en Libra puede favorecer la idealización de la pareja, la armonía o la persona amada.",

      Scorpio:
        "Neptuno en Escorpio puede amplificar la intuición, pero también los temores ligados a lo no dicho.",

      Sagittarius:
        "Neptuno en Sagitario puede idealizar una creencia, una dirección o una promesa de expansión.",

      Capricorn:
        "Neptuno en Capricornio puede volver menos clara la distinción entre ambición personal y expectativas externas.",

      Aquarius:
        "Neptuno en Acuario puede idealizar una causa, un grupo o una visión colectiva.",

      Pisces:
        "Neptuno en Piscis amplifica fuertemente la sensibilidad y requiere límites especialmente conscientes.",
    },

    fallbacks: {
      sun:
        "Tu Sol describe tu dirección interior y la identidad que buscas construir.",

      moon:
        "Tu Luna describe tus necesidades emocionales y aquello que te permite recuperar una sensación de seguridad.",

      ascendant:
        "Tu Ascendente describe tu manera espontánea de relacionarte con el mundo.",

      mercury:
        "Mercurio describe tu manera de pensar, comprender y comunicar.",

      venus:
        "Venus describe tu manera de amar, tus valores y aquello que te atrae.",

      mars:
        "Marte describe la manera en que transformas una idea o un deseo en acción.",

      saturn:
        "Saturno muestra la prudencia, las exigencias y los aprendizajes que estructuran tus decisiones.",

      jupiter:
        "Júpiter muestra cómo pueden ampliarse tu confianza y tus posibilidades.",

      midheaven:
        "Tu Medio Cielo describe tu dirección profesional y la contribución que buscas hacer visible.",

      pluto:
        "Plutón revela los mecanismos de control, intensidad y transformación profunda.",

      neptune:
        "Neptuno muestra las zonas donde el ideal, la intuición o la falta de límites pueden difuminar tus referencias.",
    },
  },

  de: {
    plutoProfiles: {
      Aries:
        "Pluto im Widder verstärkt Themen rund um Willen, Handlungskraft und Selbstbehauptung.",

      Taurus:
        "Pluto im Stier verstärkt Themen rund um Sicherheit, Ressourcen und die Angst, Erreichtes zu verlieren.",

      Gemini:
        "Pluto in den Zwillingen verstärkt Denken, Analyse und das Bedürfnis, wahre Absichten zu verstehen.",

      Cancer:
        "Pluto im Krebs verstärkt Bindungen an Vergangenheit, Familie und emotionale Schutzmechanismen.",

      Leo:
        "Pluto im Löwen verstärkt Themen rund um Anerkennung, Kreativität und das Bedürfnis, Spuren zu hinterlassen.",

      Virgo:
        "Pluto in der Jungfrau verstärkt den Wunsch nach Meisterschaft, Präzision und Transformation durch Verbesserung.",

      Libra:
        "Pluto in der Waage verstärkt Machtdynamiken und Transformationen durch Beziehungen.",

      Scorpio:
        "Pluto im Skorpion verstärkt Tiefe, Klarheit, Wahrheitsbedürfnis und Regenerationskraft.",

      Sagittarius:
        "Pluto im Schützen verstärkt Überzeugungen, Sinnsuche und das Bedürfnis, die eigene Weltsicht zu transformieren.",

      Capricorn:
        "Pluto im Steinbock verstärkt Themen rund um Kontrolle, Autorität und Erfolgsstrukturen.",

      Aquarius:
        "Pluto im Wassermann verstärkt das Bedürfnis nach kollektivem Wandel, Freiheit und Hinterfragen von Systemen.",

      Pisces:
        "Pluto in den Fischen verstärkt Sensibilität für unsichtbare Prozesse, Orientierungsverlust und tiefe Transformationen.",
    },

    neptuneProfiles: {
      Aries:
        "Neptun im Widder kann die Grenze zwischen Intuition und Impuls verwischen.",

      Taurus:
        "Neptun im Stier kann Stabilität, Komfort oder bestimmte materielle Bindungen idealisieren.",

      Gemini:
        "Neptun in den Zwillingen kann Denken sehr intuitiv, aber manchmal schwer organisierbar machen.",

      Cancer:
        "Neptun im Krebs kann Erinnerungen, Nostalgie und die Aufnahme familiärer Gefühle verstärken.",

      Leo:
        "Neptun im Löwen kann Anerkennung, Liebe oder die kreative Rolle idealisieren, die Sie verkörpern möchten.",

      Virgo:
        "Neptun in der Jungfrau kann die Grenze zwischen angemessener Hilfe, Opfer und übermäßiger Verantwortung verwischen.",

      Libra:
        "Neptun in der Waage kann die Idealisierung von Partnerschaft, Harmonie oder der geliebten Person fördern.",

      Scorpio:
        "Neptun im Skorpion kann Intuition verstärken, aber auch Ängste vor Unausgesprochenem.",

      Sagittarius:
        "Neptun im Schützen kann eine Überzeugung, Richtung oder ein Versprechen von Expansion idealisieren.",

      Capricorn:
        "Neptun im Steinbock kann die Unterscheidung zwischen persönlichem Ehrgeiz und äußeren Erwartungen erschweren.",

      Aquarius:
        "Neptun im Wassermann kann eine Sache, Gruppe oder kollektive Vision idealisieren.",

      Pisces:
        "Neptun in den Fischen verstärkt Sensibilität stark und verlangt besonders bewusste Grenzen.",
    },

    fallbacks: {
      sun:
        "Ihre Sonne beschreibt Ihre innere Richtung und die Identität, die Sie aufbauen möchten.",

      moon:
        "Ihr Mond beschreibt Ihre emotionalen Bedürfnisse und das, was Ihnen Sicherheit zurückgibt.",

      ascendant:
        "Ihr Aszendent beschreibt Ihre spontane Art, mit der Welt in Beziehung zu treten.",

      mercury:
        "Merkur beschreibt Ihre Art zu denken, zu verstehen und zu kommunizieren.",

      venus:
        "Venus beschreibt Ihre Art zu lieben, Ihre Werte und das, was Sie anzieht.",

      mars:
        "Mars beschreibt, wie Sie eine Idee oder einen Wunsch in Handlung umsetzen.",

      saturn:
        "Saturn zeigt Vorsicht, Anforderungen und Lernprozesse, die Ihre Entscheidungen strukturieren.",

      jupiter:
        "Jupiter zeigt, wie Ihr Vertrauen und Ihre Möglichkeiten wachsen können.",

      midheaven:
        "Ihr Medium Coeli beschreibt Ihre berufliche Richtung und den Beitrag, den Sie sichtbar machen möchten.",

      pluto:
        "Pluto zeigt Mechanismen von Kontrolle, Intensität und tiefer Transformation.",

      neptune:
        "Neptun zeigt Bereiche, in denen Ideal, Intuition oder fehlende Grenzen Ihre Orientierung verwischen können.",
    },
  },

  it: {
    plutoProfiles: {
      Aries:
        "Plutone in Ariete intensifica i temi legati alla volontà, al potere d’azione e all’affermazione.",

      Taurus:
        "Plutone in Toro intensifica i temi legati alla sicurezza, alle risorse e alla paura di perdere ciò che è stato costruito.",

      Gemini:
        "Plutone in Gemelli intensifica pensiero, analisi e bisogno di comprendere le vere intenzioni.",

      Cancer:
        "Plutone in Cancro intensifica i legami con il passato, la famiglia e i meccanismi di protezione emotiva.",

      Leo:
        "Plutone in Leone intensifica i temi legati al riconoscimento, alla creatività e al bisogno di lasciare un segno.",

      Virgo:
        "Plutone in Vergine intensifica il bisogno di padronanza, precisione e trasformazione attraverso il miglioramento.",

      Libra:
        "Plutone in Bilancia intensifica le dinamiche di potere e le trasformazioni vissute attraverso le relazioni.",

      Scorpio:
        "Plutone in Scorpione intensifica profondità, lucidità, bisogno di verità e capacità di rigenerazione.",

      Sagittarius:
        "Plutone in Sagittario intensifica convinzioni, ricerca di significato e bisogno di trasformare la propria visione del mondo.",

      Capricorn:
        "Plutone in Capricorno intensifica i temi legati a controllo, autorità e strutture di successo.",

      Aquarius:
        "Plutone in Acquario intensifica il bisogno di trasformazione collettiva, libertà e messa in discussione dei sistemi.",

      Pisces:
        "Plutone in Pesci intensifica la sensibilità ai movimenti invisibili, alla perdita di riferimenti e alle trasformazioni profonde.",
    },

    neptuneProfiles: {
      Aries:
        "Nettuno in Ariete può confondere la distinzione tra intuizione e impulso.",

      Taurus:
        "Nettuno in Toro può idealizzare stabilità, comfort o alcuni attaccamenti materiali.",

      Gemini:
        "Nettuno in Gemelli può rendere il pensiero molto intuitivo ma talvolta difficile da organizzare.",

      Cancer:
        "Nettuno in Cancro può amplificare ricordi, nostalgia e assorbimento delle emozioni familiari.",

      Leo:
        "Nettuno in Leone può idealizzare riconoscimento, amore o il ruolo creativo che desideri incarnare.",

      Virgo:
        "Nettuno in Vergine può rendere più sfumata la distinzione tra aiuto giusto, sacrificio e responsabilità eccessiva.",

      Libra:
        "Nettuno in Bilancia può favorire l’idealizzazione della coppia, dell’armonia o della persona amata.",

      Scorpio:
        "Nettuno in Scorpione può amplificare intuizione ma anche timori legati ai non detti.",

      Sagittarius:
        "Nettuno in Sagittario può idealizzare una convinzione, una direzione o una promessa di espansione.",

      Capricorn:
        "Nettuno in Capricorno può rendere meno chiara la distinzione tra ambizione personale e aspettative esterne.",

      Aquarius:
        "Nettuno in Acquario può idealizzare una causa, un gruppo o una visione collettiva.",

      Pisces:
        "Nettuno in Pesci amplifica fortemente la sensibilità e richiede limiti particolarmente consapevoli.",
    },

    fallbacks: {
      sun:
        "Il tuo Sole descrive la tua direzione interiore e l’identità che cerchi di costruire.",

      moon:
        "La tua Luna descrive i tuoi bisogni emotivi e ciò che ti permette di ritrovare sicurezza.",

      ascendant:
        "Il tuo Ascendente descrive il tuo modo spontaneo di entrare in relazione con il mondo.",

      mercury:
        "Mercurio descrive il tuo modo di pensare, comprendere e comunicare.",

      venus:
        "Venere descrive il tuo modo di amare, i tuoi valori e ciò che ti attrae.",

      mars:
        "Marte descrive il modo in cui trasformi un’idea o un desiderio in azione.",

      saturn:
        "Saturno mostra prudenza, esigenze e apprendimenti che strutturano le tue decisioni.",

      jupiter:
        "Giove mostra il modo in cui fiducia e possibilità possono ampliarsi.",

      midheaven:
        "Il tuo Medio Cielo descrive la tua direzione professionale e il contributo che cerchi di rendere visibile.",

      pluto:
        "Plutone rivela i meccanismi di controllo, intensità e trasformazione profonda.",

      neptune:
        "Nettuno mostra le aree in cui ideale, intuizione o mancanza di limiti possono confondere i tuoi riferimenti.",
    },
  },

  pt: {
    plutoProfiles: {
      Aries:
        "Plutão em Áries intensifica questões ligadas à vontade, ao poder de agir e à afirmação.",

      Taurus:
        "Plutão em Touro intensifica questões ligadas à segurança, aos recursos e ao medo de perder aquilo que foi construído.",

      Gemini:
        "Plutão em Gêmeos intensifica pensamento, análise e necessidade de compreender as verdadeiras intenções.",

      Cancer:
        "Plutão em Câncer intensifica vínculos com o passado, a família e os mecanismos de proteção emocional.",

      Leo:
        "Plutão em Leão intensifica questões ligadas ao reconhecimento, à criatividade e à necessidade de deixar uma marca.",

      Virgo:
        "Plutão em Virgem intensifica a necessidade de domínio, precisão e transformação através da melhoria.",

      Libra:
        "Plutão em Libra intensifica relações de poder e transformações vividas através dos relacionamentos.",

      Scorpio:
        "Plutão em Escorpião intensifica profundidade, lucidez, necessidade de verdade e capacidade de regeneração.",

      Sagittarius:
        "Plutão em Sagitário intensifica convicções, busca de sentido e necessidade de transformar sua visão de mundo.",

      Capricorn:
        "Plutão em Capricórnio intensifica questões ligadas a controle, autoridade e estruturas de sucesso.",

      Aquarius:
        "Plutão em Aquário intensifica a necessidade de transformação coletiva, liberdade e questionamento dos sistemas.",

      Pisces:
        "Plutão em Peixes intensifica sensibilidade aos movimentos invisíveis, perda de referências e transformações profundas.",
    },

    neptuneProfiles: {
      Aries:
        "Netuno em Áries pode confundir a distinção entre intuição e impulso.",

      Taurus:
        "Netuno em Touro pode idealizar estabilidade, conforto ou certos apegos materiais.",

      Gemini:
        "Netuno em Gêmeos pode tornar o pensamento muito intuitivo, mas às vezes difícil de organizar.",

      Cancer:
        "Netuno em Câncer pode ampliar lembranças, nostalgia e absorção das emoções familiares.",

      Leo:
        "Netuno em Leão pode idealizar reconhecimento, amor ou o papel criativo que você deseja incorporar.",

      Virgo:
        "Netuno em Virgem pode tornar mais difusa a distinção entre ajuda adequada, sacrifício e responsabilidade excessiva.",

      Libra:
        "Netuno em Libra pode favorecer a idealização do casal, da harmonia ou da pessoa amada.",

      Scorpio:
        "Netuno em Escorpião pode ampliar a intuição, mas também os medos ligados ao não dito.",

      Sagittarius:
        "Netuno em Sagitário pode idealizar uma crença, direção ou promessa de expansão.",

      Capricorn:
        "Netuno em Capricórnio pode tornar menos clara a distinção entre ambição pessoal e expectativas externas.",

      Aquarius:
        "Netuno em Aquário pode idealizar uma causa, grupo ou visão coletiva.",

      Pisces:
        "Netuno em Peixes amplia fortemente a sensibilidade e exige limites especialmente conscientes.",
    },

    fallbacks: {
      sun:
        "Seu Sol descreve sua direção interior e a identidade que você procura construir.",

      moon:
        "Sua Lua descreve suas necessidades emocionais e aquilo que permite recuperar uma sensação de segurança.",

      ascendant:
        "Seu Ascendente descreve sua maneira espontânea de se relacionar com o mundo.",

      mercury:
        "Mercúrio descreve sua maneira de pensar, compreender e comunicar.",

      venus:
        "Vênus descreve sua maneira de amar, seus valores e aquilo que atrai você.",

      mars:
        "Marte descreve a maneira como você transforma uma ideia ou desejo em ação.",

      saturn:
        "Saturno mostra prudência, exigências e aprendizados que estruturam suas decisões.",

      jupiter:
        "Júpiter mostra como sua confiança e suas possibilidades podem se ampliar.",

      midheaven:
        "Seu Meio do Céu descreve sua direção profissional e a contribuição que você procura tornar visível.",

      pluto:
        "Plutão revela os mecanismos de controle, intensidade e transformação profunda.",

      neptune:
        "Netuno mostra as áreas em que ideal, intuição ou falta de limites podem confundir suas referências.",
    },
  },
};
type SynthesisDynamicTexts = {
  innerDefault: string;
  innerSameElement:
    (
      element: string,
    ) => string;
  innerDifferentElements:
    (
      sunElement: string,
      moonElement: string,
    ) => string;
  identityHouse:
    (
      houseText: string,
    ) => string;

  decisionDefault: string;
  decisionFire: string;
  decisionEarth: string;
  decisionAir: string;
  decisionWater: string;

  relationshipDefault: string;
  relationshipSameElement:
    (
      element: string,
    ) => string;
  relationshipDifferentElements:
    (
      venusElement: string,
      moonElement: string,
    ) => string;

  challengeDefault: string;
  saturnHouse:
    (
      houseText: string,
    ) => string;
  plutoHouse:
    (
      houseText: string,
    ) => string;

  dominantElement:
    (
      element: string,
      description: string,
    ) => string;

  dominantModality:
    (
      modality: string,
      description: string,
    ) => string;

  potentialConclusion: string;

  signatureCore:
    (
      sun: string,
      moon: string,
      ascendant: string,
    ) => string;

  signatureDominantElement:
    (
      element: string,
      description: string,
    ) => string;

  signatureDominantModality:
    (
      modality: string,
      description: string,
    ) => string;

  signatureConclusion: string;
};

const DYNAMIC_TEXTS:
Record<
  NonFrenchLocale,
  SynthesisDynamicTexts
> = {
  en: {
    innerDefault:
      "Your inner engine becomes more coherent when your way of acting respects both your conscious direction and your emotional needs.",

    innerSameElement:
      (
        element,
      ) =>
        `Your Sun and Moon both belong to the ${element} element. Your identity and sensitivity therefore speak a similar language, strengthening continuity between what you want and what you feel.`,

    innerDifferentElements:
      (
        sunElement,
        moonElement,
      ) =>
        `Your Sun belongs to the ${sunElement} element, while your Moon belongs to the ${moonElement} element. Your richness comes from this difference, but your balance requires you not to sacrifice one of these needs in favor of the other.`,

    identityHouse:
      (
        houseText,
      ) =>
        `Your identity seeks to express itself especially ${houseText}.`,

    decisionDefault:
      "You make your best decisions when you allow enough time for your thinking, instinct for action, and caution to consult one another.",

    decisionFire:
      "Your thinking and action can be very fast. Your challenge is to verify facts and consequences before turning a first impression into a final decision.",

    decisionEarth:
      "You gain clarity when you bring your ideas back to concrete criteria, measurable steps, and verifiable reality.",

    decisionAir:
      "You need to compare, verbalize, and understand several angles before committing fully.",

    decisionWater:
      "Your feelings strongly influence your understanding. Your discernment increases when you distinguish genuine intuition from fear or emotional anticipation.",

    relationshipDefault:
      "Your relational life becomes more balanced when you can express your emotional needs without expecting them to be guessed and without confusing closeness, fusion, or control.",

    relationshipSameElement:
      (
        element,
      ) =>
        `Venus and the Moon both belong to the ${element} element. Your way of loving and your emotional needs therefore understand each other fairly naturally, strengthening your emotional coherence.`,

    relationshipDifferentElements:
      (
        venusElement,
        moonElement,
      ) =>
        `Venus belongs to the ${venusElement} element, while your Moon belongs to the ${moonElement} element. You may therefore love in one way while needing reassurance in another. Relationships become more stable when these two languages are clearly expressed.`,

    challengeDefault:
      "Your main challenge is recognizing the moment when an old protection takes control of your current response. Progress begins when you name the fear precisely, verify what truly belongs to the present, and choose a smaller but more conscious action.",

    saturnHouse:
      (
        houseText,
      ) =>
        `This learning process appears especially ${houseText}.`,

    plutoHouse:
      (
        houseText,
      ) =>
        `Your deepest transformations may also unfold ${houseText}.`,

    dominantElement:
      (
        element,
        description,
      ) =>
        `The ${element} element dominates your chart and emphasizes ${description}.`,

    dominantModality:
      (
        modality,
        description,
      ) =>
        `The ${modality} modality reinforces ${description}.`,

    potentialConclusion:
      "Your potential for fulfillment develops when your outward ambition remains faithful to your inner nature. You succeed more fully in environments that allow you to use your dominant qualities without forcing you to function constantly against yourself.",

    signatureCore:
      (
        sun,
        moon,
        ascendant,
      ) =>
        `Your Sun in ${sun}, your Moon in ${moon}, and your ${ascendant} Ascendant form a personality seeking to unite conscious identity, emotional needs, and your spontaneous way of moving forward.`,

    signatureDominantElement:
      (
        element,
        description,
      ) =>
        `Your dominant ${element} invites you to honor ${description}.`,

    signatureDominantModality:
      (
        modality,
        description,
      ) =>
        `Your ${modality} energy shows that your evolution moves through ${description}.`,

    signatureConclusion:
      "Your chart does not ask you to become someone else. It invites you to unite your strengths, understand your contradictions, and choose a way forward that fully respects your nature.",
  },

  es: {
    innerDefault:
      "Tu motor interior se vuelve más coherente cuando tu manera de actuar respeta tanto tu dirección consciente como tus necesidades emocionales.",

    innerSameElement:
      (
        element,
      ) =>
        `Tu Sol y tu Luna pertenecen ambos al elemento ${element}. Tu identidad y tu sensibilidad hablan por tanto un lenguaje parecido, reforzando la continuidad entre lo que quieres y lo que sientes.`,

    innerDifferentElements:
      (
        sunElement,
        moonElement,
      ) =>
        `Tu Sol pertenece al elemento ${sunElement}, mientras que tu Luna pertenece al elemento ${moonElement}. Tu riqueza nace de esta diferencia, pero tu equilibrio exige no sacrificar una de estas necesidades en beneficio de la otra.`,

    identityHouse:
      (
        houseText,
      ) =>
        `Tu identidad busca expresarse especialmente ${houseText}.`,

    decisionDefault:
      "Tomas tus mejores decisiones cuando das suficiente tiempo a tu pensamiento, tu instinto de acción y tu prudencia para consultarse.",

    decisionFire:
      "Tu pensamiento y tu acción pueden ser muy rápidos. Tu desafío consiste en verificar los hechos y las consecuencias antes de transformar una primera impresión en una decisión definitiva.",

    decisionEarth:
      "Ganas claridad cuando llevas tus ideas a criterios concretos, etapas medibles y una realidad verificable.",

    decisionAir:
      "Necesitas comparar, verbalizar y comprender varios ángulos antes de comprometerte plenamente.",

    decisionWater:
      "Tu sensibilidad influye fuertemente en tu comprensión. Tu discernimiento aumenta cuando distingues la intuición real del miedo o de la anticipación emocional.",

    relationshipDefault:
      "Tu vida relacional se vuelve más equilibrada cuando puedes expresar tus necesidades afectivas sin esperar que sean adivinadas y sin confundir cercanía, fusión o control.",

    relationshipSameElement:
      (
        element,
      ) =>
        `Venus y la Luna pertenecen ambas al elemento ${element}. Tu manera de amar y tus necesidades emocionales se comprenden con bastante naturalidad, reforzando tu coherencia afectiva.`,

    relationshipDifferentElements:
      (
        venusElement,
        moonElement,
      ) =>
        `Venus pertenece al elemento ${venusElement}, mientras que tu Luna pertenece al elemento ${moonElement}. Puedes amar de una manera y necesitar ser tranquilizado de otra. La relación se vuelve más estable cuando estos dos lenguajes se expresan claramente.`,

    challengeDefault:
      "Tu principal desafío consiste en reconocer el momento en que una antigua protección toma el control de tu respuesta actual. Tu progreso comienza cuando nombras con precisión el miedo, verificas qué pertenece realmente al presente y eliges una acción más pequeña, pero más consciente.",

    saturnHouse:
      (
        houseText,
      ) =>
        `Este aprendizaje se manifiesta especialmente ${houseText}.`,

    plutoHouse:
      (
        houseText,
      ) =>
        `Tus transformaciones más profundas también pueden desarrollarse ${houseText}.`,

    dominantElement:
      (
        element,
        description,
      ) =>
        `El elemento ${element} domina tu carta y subraya ${description}.`,

    dominantModality:
      (
        modality,
        description,
      ) =>
        `La modalidad ${modality} refuerza ${description}.`,

    potentialConclusion:
      "Tu potencial de realización se desarrolla cuando tu ambición exterior permanece fiel a tu naturaleza interior. Tienes más éxito en entornos que te permiten utilizar tus cualidades dominantes sin obligarte a funcionar constantemente contra ti mismo.",

    signatureCore:
      (
        sun,
        moon,
        ascendant,
      ) =>
        `Tu Sol en ${sun}, tu Luna en ${moon} y tu Ascendente ${ascendant} forman una personalidad que busca unir identidad consciente, necesidades emocionales y manera espontánea de avanzar.`,

    signatureDominantElement:
      (
        element,
        description,
      ) =>
        `Tu dominante ${element} te invita a honrar ${description}.`,

    signatureDominantModality:
      (
        modality,
        description,
      ) =>
        `Tu energía ${modality.toLowerCase()} muestra que tu evolución pasa por ${description}.`,

    signatureConclusion:
      "Tu carta no te pide convertirte en otra persona. Te invita a unir tus fuerzas, comprender tus contradicciones y elegir una manera de avanzar que respete plenamente tu naturaleza.",
  },

  de: {
    innerDefault:
      "Ihr innerer Antrieb wird stimmiger, wenn Ihre Handlungsweise sowohl Ihre bewusste Richtung als auch Ihre emotionalen Bedürfnisse respektiert.",

    innerSameElement:
      (
        element,
      ) =>
        `Ihre Sonne und Ihr Mond gehören beide zum Element ${element}. Identität und Sensibilität sprechen daher eine ähnliche Sprache, was die Kontinuität zwischen dem, was Sie wollen, und dem, was Sie fühlen, stärkt.`,

    innerDifferentElements:
      (
        sunElement,
        moonElement,
      ) =>
        `Ihre Sonne gehört zum Element ${sunElement}, Ihr Mond dagegen zum Element ${moonElement}. Ihre Vielfalt entsteht aus diesem Unterschied, doch Ihr Gleichgewicht verlangt, keines dieser Bedürfnisse zugunsten des anderen zu opfern.`,

    identityHouse:
      (
        houseText,
      ) =>
        `Ihre Identität sucht sich besonders ${houseText} auszudrücken.`,

    decisionDefault:
      "Sie treffen Ihre besten Entscheidungen, wenn Denken, Handlungsimpuls und Vorsicht genügend Zeit erhalten, sich miteinander abzustimmen.",

    decisionFire:
      "Denken und Handeln können sehr schnell sein. Ihre Aufgabe besteht darin, Fakten und Folgen zu prüfen, bevor ein erster Eindruck zur endgültigen Entscheidung wird.",

    decisionEarth:
      "Sie gewinnen Klarheit, wenn Sie Ideen auf konkrete Kriterien, messbare Schritte und überprüfbare Realität zurückführen.",

    decisionAir:
      "Sie müssen mehrere Perspektiven vergleichen, verbalisieren und verstehen, bevor Sie sich vollständig festlegen.",

    decisionWater:
      "Ihr Empfinden beeinflusst Ihr Verständnis stark. Ihr Urteilsvermögen wächst, wenn Sie echte Intuition von Angst oder emotionaler Vorwegnahme unterscheiden.",

    relationshipDefault:
      "Ihr Beziehungsleben wird ausgeglichener, wenn Sie emotionale Bedürfnisse ausdrücken, ohne zu erwarten, dass sie erraten werden, und ohne Nähe, Verschmelzung oder Kontrolle miteinander zu verwechseln.",

    relationshipSameElement:
      (
        element,
      ) =>
        `Venus und Mond gehören beide zum Element ${element}. Ihre Art zu lieben und Ihre emotionalen Bedürfnisse verstehen sich daher recht natürlich, was Ihre emotionale Kohärenz stärkt.`,

    relationshipDifferentElements:
      (
        venusElement,
        moonElement,
      ) =>
        `Venus gehört zum Element ${venusElement}, Ihr Mond dagegen zum Element ${moonElement}. Sie können also auf eine Weise lieben und auf eine andere Weise Sicherheit benötigen. Beziehungen werden stabiler, wenn beide Sprachen klar ausgedrückt werden.`,

    challengeDefault:
      "Ihre wichtigste Aufgabe besteht darin, den Moment zu erkennen, in dem ein alter Schutzmechanismus Ihre aktuelle Reaktion übernimmt. Entwicklung beginnt, wenn Sie die Angst genau benennen, prüfen, was wirklich zur Gegenwart gehört, und eine kleinere, aber bewusstere Handlung wählen.",

    saturnHouse:
      (
        houseText,
      ) =>
        `Dieser Lernprozess zeigt sich besonders ${houseText}.`,

    plutoHouse:
      (
        houseText,
      ) =>
        `Ihre tiefsten Transformationen können sich ebenfalls ${houseText} abspielen.`,

    dominantElement:
      (
        element,
        description,
      ) =>
        `Das Element ${element} dominiert Ihr Horoskop und betont ${description}.`,

    dominantModality:
      (
        modality,
        description,
      ) =>
        `Die Modalität ${modality} verstärkt ${description}.`,

    potentialConclusion:
      "Ihr Erfüllungspotenzial wächst, wenn äußerer Ehrgeiz Ihrer inneren Natur treu bleibt. Sie entfalten sich stärker in Umfeldern, die Ihre dominanten Qualitäten nutzen lassen, ohne Sie ständig gegen sich selbst arbeiten zu lassen.",

    signatureCore:
      (
        sun,
        moon,
        ascendant,
      ) =>
        `Ihre Sonne in ${sun}, Ihr Mond in ${moon} und Ihr Aszendent ${ascendant} bilden eine Persönlichkeit, die bewusste Identität, emotionale Bedürfnisse und spontane Handlungsweise miteinander verbinden möchte.`,

    signatureDominantElement:
      (
        element,
        description,
      ) =>
        `Ihre Dominanz ${element} lädt Sie ein, ${description} zu würdigen.`,

    signatureDominantModality:
      (
        modality,
        description,
      ) =>
        `Ihre ${modality.toLowerCase()} Energie zeigt, dass Ihre Entwicklung über ${description} verläuft.`,

    signatureConclusion:
      "Ihr Horoskop verlangt nicht, jemand anderes zu werden. Es lädt Sie ein, Ihre Stärken zu vereinen, Widersprüche zu verstehen und einen Weg zu wählen, der Ihre Natur vollständig respektiert.",
  },

  it: {
    innerDefault:
      "Il tuo motore interiore diventa più coerente quando il tuo modo di agire rispetta sia la tua direzione consapevole sia i tuoi bisogni emotivi.",

    innerSameElement:
      (
        element,
      ) =>
        `Il tuo Sole e la tua Luna appartengono entrambi all’elemento ${element}. Identità e sensibilità parlano quindi un linguaggio simile, rafforzando la continuità tra ciò che vuoi e ciò che senti.`,

    innerDifferentElements:
      (
        sunElement,
        moonElement,
      ) =>
        `Il tuo Sole appartiene all’elemento ${sunElement}, mentre la tua Luna appartiene all’elemento ${moonElement}. La tua ricchezza nasce da questa differenza, ma il tuo equilibrio richiede di non sacrificare uno di questi bisogni a favore dell’altro.`,

    identityHouse:
      (
        houseText,
      ) =>
        `La tua identità cerca di esprimersi particolarmente ${houseText}.`,

    decisionDefault:
      "Prendi le decisioni migliori quando concedi abbastanza tempo al pensiero, all’istinto d’azione e alla prudenza per consultarsi tra loro.",

    decisionFire:
      "Il tuo pensiero e la tua azione possono essere molto rapidi. La tua sfida consiste nel verificare fatti e conseguenze prima di trasformare una prima impressione in una decisione definitiva.",

    decisionEarth:
      "Guadagni chiarezza quando riporti le idee a criteri concreti, tappe misurabili e una realtà verificabile.",

    decisionAir:
      "Hai bisogno di confrontare, verbalizzare e comprendere più prospettive prima di impegnarti pienamente.",

    decisionWater:
      "Il tuo sentire influenza fortemente la comprensione. Il discernimento aumenta quando distingui l’intuizione reale dalla paura o dall’anticipazione emotiva.",

    relationshipDefault:
      "La tua vita relazionale diventa più equilibrata quando esprimi i bisogni affettivi senza aspettare che vengano intuiti e senza confondere vicinanza, fusione o controllo.",

    relationshipSameElement:
      (
        element,
      ) =>
        `Venere e la Luna appartengono entrambe all’elemento ${element}. Il tuo modo di amare e i bisogni emotivi si comprendono quindi abbastanza naturalmente, rafforzando la tua coerenza affettiva.`,

    relationshipDifferentElements:
      (
        venusElement,
        moonElement,
      ) =>
        `Venere appartiene all’elemento ${venusElement}, mentre la tua Luna appartiene all’elemento ${moonElement}. Puoi quindi amare in un modo e aver bisogno di rassicurazione in un altro. La relazione diventa più stabile quando questi due linguaggi vengono espressi chiaramente.`,

    challengeDefault:
      "La tua sfida principale consiste nel riconoscere il momento in cui una vecchia protezione prende il controllo della tua risposta attuale. Il progresso inizia quando dai un nome preciso alla paura, verifichi ciò che appartiene davvero al presente e scegli un’azione più piccola ma più consapevole.",

    saturnHouse:
      (
        houseText,
      ) =>
        `Questo apprendimento si manifesta particolarmente ${houseText}.`,

    plutoHouse:
      (
        houseText,
      ) =>
        `Le tue trasformazioni più profonde possono svolgersi anche ${houseText}.`,

    dominantElement:
      (
        element,
        description,
      ) =>
        `L’elemento ${element} domina il tuo tema e sottolinea ${description}.`,

    dominantModality:
      (
        modality,
        description,
      ) =>
        `La modalità ${modality} rafforza ${description}.`,

    potentialConclusion:
      "Il tuo potenziale di realizzazione cresce quando l’ambizione esterna rimane fedele alla tua natura interiore. Riesci meglio negli ambienti che ti permettono di utilizzare le qualità dominanti senza costringerti a funzionare costantemente contro te stesso.",

    signatureCore:
      (
        sun,
        moon,
        ascendant,
      ) =>
        `Il tuo Sole in ${sun}, la tua Luna in ${moon} e il tuo Ascendente ${ascendant} formano una personalità che cerca di unire identità consapevole, bisogni emotivi e modo spontaneo di avanzare.`,

    signatureDominantElement:
      (
        element,
        description,
      ) =>
        `La tua dominante ${element} ti invita a onorare ${description}.`,

    signatureDominantModality:
      (
        modality,
        description,
      ) =>
        `La tua energia ${modality.toLowerCase()} mostra che la tua evoluzione passa attraverso ${description}.`,

    signatureConclusion:
      "Il tuo tema non ti chiede di diventare qualcun altro. Ti invita a unire le tue forze, comprendere le contraddizioni e scegliere un modo di avanzare che rispetti pienamente la tua natura.",
  },

  pt: {
    innerDefault:
      "Seu motor interior se torna mais coerente quando sua maneira de agir respeita tanto sua direção consciente quanto suas necessidades emocionais.",

    innerSameElement:
      (
        element,
      ) =>
        `Seu Sol e sua Lua pertencem ambos ao elemento ${element}. Identidade e sensibilidade falam, portanto, uma linguagem semelhante, reforçando a continuidade entre aquilo que você quer e aquilo que sente.`,

    innerDifferentElements:
      (
        sunElement,
        moonElement,
      ) =>
        `Seu Sol pertence ao elemento ${sunElement}, enquanto sua Lua pertence ao elemento ${moonElement}. Sua riqueza nasce dessa diferença, mas seu equilíbrio exige que você não sacrifique uma dessas necessidades em favor da outra.`,

    identityHouse:
      (
        houseText,
      ) =>
        `Sua identidade procura se expressar especialmente ${houseText}.`,

    decisionDefault:
      "Você toma suas melhores decisões quando dá tempo suficiente para pensamento, instinto de ação e prudência se consultarem.",

    decisionFire:
      "Seu pensamento e sua ação podem ser muito rápidos. Seu desafio consiste em verificar fatos e consequências antes de transformar uma primeira impressão em decisão definitiva.",

    decisionEarth:
      "Você ganha clareza quando traz suas ideias de volta a critérios concretos, etapas mensuráveis e uma realidade verificável.",

    decisionAir:
      "Você precisa comparar, verbalizar e compreender vários ângulos antes de se comprometer plenamente.",

    decisionWater:
      "Seu sentir influencia fortemente sua compreensão. Seu discernimento aumenta quando distingue intuição real de medo ou antecipação emocional.",

    relationshipDefault:
      "Sua vida relacional se torna mais equilibrada quando você expressa suas necessidades afetivas sem esperar que sejam adivinhadas e sem confundir proximidade, fusão ou controle.",

    relationshipSameElement:
      (
        element,
      ) =>
        `Vênus e a Lua pertencem ambas ao elemento ${element}. Sua maneira de amar e suas necessidades emocionais se compreendem com bastante naturalidade, reforçando sua coerência afetiva.`,

    relationshipDifferentElements:
      (
        venusElement,
        moonElement,
      ) =>
        `Vênus pertence ao elemento ${venusElement}, enquanto sua Lua pertence ao elemento ${moonElement}. Você pode amar de uma forma e precisar ser tranquilizado de outra. A relação se torna mais estável quando essas duas linguagens são claramente expressas.`,

    challengeDefault:
      "Seu principal desafio consiste em reconhecer o momento em que uma antiga proteção assume o controle da sua resposta atual. Seu progresso começa quando você nomeia o medo com precisão, verifica aquilo que realmente pertence ao presente e escolhe uma ação menor, porém mais consciente.",

    saturnHouse:
      (
        houseText,
      ) =>
        `Esse aprendizado se manifesta especialmente ${houseText}.`,

    plutoHouse:
      (
        houseText,
      ) =>
        `Suas transformações mais profundas também podem acontecer ${houseText}.`,

    dominantElement:
      (
        element,
        description,
      ) =>
        `O elemento ${element} domina seu mapa e destaca ${description}.`,

    dominantModality:
      (
        modality,
        description,
      ) =>
        `A modalidade ${modality} reforça ${description}.`,

    potentialConclusion:
      "Seu potencial de realização se desenvolve quando sua ambição externa permanece fiel à sua natureza interior. Você se realiza melhor em ambientes que permitem utilizar suas qualidades dominantes sem obrigá-lo a funcionar constantemente contra si mesmo.",

    signatureCore:
      (
        sun,
        moon,
        ascendant,
      ) =>
        `Seu Sol em ${sun}, sua Lua em ${moon} e seu Ascendente ${ascendant} formam uma personalidade que procura unir identidade consciente, necessidades emocionais e maneira espontânea de avançar.`,

    signatureDominantElement:
      (
        element,
        description,
      ) =>
        `Sua dominante ${element} convida você a honrar ${description}.`,

    signatureDominantModality:
      (
        modality,
        description,
      ) =>
        `Sua energia ${modality.toLowerCase()} mostra que sua evolução passa por ${description}.`,

    signatureConclusion:
      "Seu mapa não pede que você se torne outra pessoa. Ele convida você a unir suas forças, compreender suas contradições e escolher uma maneira de avançar que respeite plenamente sua natureza.",
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

function replaceFlexibleText(
  source: string,
  from: string,
  to: string,
): string {
  const pattern =
    from
      .trim()
      .split(/\s+/)
      .map(escapeRegExp)
      .join("\\s+");

  return source.replace(
    new RegExp(
      pattern,
      "g",
    ),
    to,
  );
}

function replaceRecordConstant(
  source: string,
  constantName: string,
  value: Record<string, string>,
): string {
  const pattern =
    new RegExp(
      `const\\s+${escapeRegExp(
        constantName,
      )}\\s*:\\s*Record<string,\\s*string>\\s*=\\s*\\{[\\s\\S]*?\\n\\};`,
      "m",
    );

  return source.replace(
    pattern,
    `const ${constantName}: Record<string, string> = ${JSON.stringify(
      value,
      null,
      2,
    )};`,
  );
}

function replaceElementDescriptions(
  source: string,
  value:
    Record<
      ElementName,
      string
    >,
): string {
  return source.replace(
    /const\s+ELEMENT_DESCRIPTIONS\s*:\s*Record<ElementName,\s*string>\s*=\s*\{[\s\S]*?\n\};/m,
    `const ELEMENT_DESCRIPTIONS: Record<ElementName, string> = ${JSON.stringify(
      value,
      null,
      2,
    )};`,
  );
}

function replaceModalityDescriptions(
  source: string,
  value:
    Record<
      ModalityName,
      string
    >,
): string {
  return source.replace(
    /const\s+MODALITY_DESCRIPTIONS\s*:\s*Record<ModalityName,\s*string>\s*=\s*\{[\s\S]*?\n\};/m,
    `const MODALITY_DESCRIPTIONS: Record<ModalityName, string> = ${JSON.stringify(
      value,
      null,
      2,
    )};`,
  );
}

function replaceHouseDescriptions(
  source: string,
  value:
    Record<
      number,
      string
    >,
): string {
  return source.replace(
    /const\s+descriptions\s*:\s*Record<number,\s*string>\s*=\s*\{[\s\S]*?\n\s*\};/m,
    `const descriptions: Record<number, string> = ${JSON.stringify(
      value,
      null,
      2,
    )};`,
  );
}

export function localizeSignatureSynthesis(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const labels =
    LABELS[
      locale as NonFrenchLocale
    ];

  const planetProfiles =
    PLANET_PROFILES[
      locale as NonFrenchLocale
    ];

  const expansionProfiles =
    EXPANSION_PROFILES[
      locale as NonFrenchLocale
    ];

  const deepProfiles =
    DEEP_PROFILES[
      locale as NonFrenchLocale
    ];

  const dynamic =
    DYNAMIC_TEXTS[
      locale as NonFrenchLocale
    ];

  let out =
    source.replace(
      /\r\n/g,
      "\n",
    );

  /*
  |--------------------------------------------------------------------------
  | Noms visibles des signes
  |--------------------------------------------------------------------------
  |
  | Les clés techniques restent :
  |
  | Aries
  | Taurus
  | Gemini
  | Cancer
  | Leo
  | Virgo
  | Libra
  | Scorpio
  | Sagittarius
  | Capricorn
  | Aquarius
  | Pisces
  |
  |--------------------------------------------------------------------------
  */

  const signNames:
    Record<
      string,
      string
    > = {
    Aries:
      labels.aries,

    Taurus:
      labels.taurus,

    Gemini:
      labels.gemini,

    Cancer:
      labels.cancer,

    Leo:
      labels.leo,

    Virgo:
      labels.virgo,

    Libra:
      labels.libra,

    Scorpio:
      labels.scorpio,

    Sagittarius:
      labels.sagittarius,

    Capricorn:
      labels.capricorn,

    Aquarius:
      labels.aquarius,

    Pisces:
      labels.pisces,

    Bélier:
      labels.aries,

    Taureau:
      labels.taurus,

    Gémeaux:
      labels.gemini,

    Lion:
      labels.leo,

    Vierge:
      labels.virgo,

    Balance:
      labels.libra,

    Scorpion:
      labels.scorpio,

    Sagittaire:
      labels.sagittarius,

    Capricorne:
      labels.capricorn,

    Verseau:
      labels.aquarius,

    Poissons:
      labels.pisces,
  };

  out =
    replaceRecordConstant(
      out,
      "SIGN_NAMES",
      signNames,
    );

  /*
  |--------------------------------------------------------------------------
  | Description des éléments
  |--------------------------------------------------------------------------
  |
  | Les types internes restent :
  |
  | Feu
  | Terre
  | Air
  | Eau
  |
  | On traduit seulement les textes descriptifs.
  |
  |--------------------------------------------------------------------------
  */

  out =
    replaceElementDescriptions(
      out,
      labels.elementDescriptions,
    );

  /*
  |--------------------------------------------------------------------------
  | Description des modalités
  |--------------------------------------------------------------------------
  |
  | Les types internes restent :
  |
  | Cardinal
  | Fixe
  | Mutable
  |
  |--------------------------------------------------------------------------
  */

  out =
    replaceModalityDescriptions(
      out,
      labels.modalityDescriptions,
    );

  /*
  |--------------------------------------------------------------------------
  | Maisons astrologiques
  |--------------------------------------------------------------------------
  */

  out =
    replaceHouseDescriptions(
      out,
      labels.houseDescriptions,
    );

  /*
  |--------------------------------------------------------------------------
  | Soleil
  |--------------------------------------------------------------------------
  */

  out =
    replaceRecordConstant(
      out,
      "SUN_PROFILES",
      labels.sunProfiles,
    );

  /*
  |--------------------------------------------------------------------------
  | Lune
  |--------------------------------------------------------------------------
  */

  out =
    replaceRecordConstant(
      out,
      "MOON_PROFILES",
      labels.moonProfiles,
    );

  /*
  |--------------------------------------------------------------------------
  | Ascendant
  |--------------------------------------------------------------------------
  */

  out =
    replaceRecordConstant(
      out,
      "ASCENDANT_PROFILES",
      labels.ascendantProfiles,
    );

  /*
  |--------------------------------------------------------------------------
  | Mercure
  |--------------------------------------------------------------------------
  */

  out =
    replaceRecordConstant(
      out,
      "MERCURY_PROFILES",
      planetProfiles.mercuryProfiles,
    );

  /*
  |--------------------------------------------------------------------------
  | Vénus
  |--------------------------------------------------------------------------
  */

  out =
    replaceRecordConstant(
      out,
      "VENUS_PROFILES",
      planetProfiles.venusProfiles,
    );

  /*
  |--------------------------------------------------------------------------
  | Mars
  |--------------------------------------------------------------------------
  */

  out =
    replaceRecordConstant(
      out,
      "MARS_PROFILES",
      planetProfiles.marsProfiles,
    );

  /*
  |--------------------------------------------------------------------------
  | Saturne
  |--------------------------------------------------------------------------
  */

  out =
    replaceRecordConstant(
      out,
      "SATURN_PROFILES",
      expansionProfiles.saturnProfiles,
    );

  /*
  |--------------------------------------------------------------------------
  | Jupiter
  |--------------------------------------------------------------------------
  */

  out =
    replaceRecordConstant(
      out,
      "JUPITER_PROFILES",
      expansionProfiles.jupiterProfiles,
    );

  /*
  |--------------------------------------------------------------------------
  | Milieu du Ciel
  |--------------------------------------------------------------------------
  */

  out =
    replaceRecordConstant(
      out,
      "MC_PROFILES",
      expansionProfiles.midheavenProfiles,
    );

  /*
  |--------------------------------------------------------------------------
  | Pluton
  |--------------------------------------------------------------------------
  */

  out =
    replaceRecordConstant(
      out,
      "PLUTO_PROFILES",
      deepProfiles.plutoProfiles,
    );

  /*
  |--------------------------------------------------------------------------
  | Neptune
  |--------------------------------------------------------------------------
  */

  out =
    replaceRecordConstant(
      out,
      "NEPTUNE_PROFILES",
      deepProfiles.neptuneProfiles,
    );

  /*
  |--------------------------------------------------------------------------
  | Fallbacks : moteur intérieur
  |--------------------------------------------------------------------------
  */

  out =
    replaceFlexibleText(
      out,
      "Votre Soleil décrit votre direction intérieure et l’identité que vous cherchez à construire.",
      deepProfiles.fallbacks.sun,
    );

  out =
    replaceFlexibleText(
      out,
      "Votre Lune décrit vos besoins émotionnels et ce qui vous permet de retrouver un sentiment de sécurité.",
      deepProfiles.fallbacks.moon,
    );

  out =
    replaceFlexibleText(
      out,
      "Votre Ascendant décrit votre manière spontanée d’entrer en relation avec le monde.",
      deepProfiles.fallbacks.ascendant,
    );

  /*
  |--------------------------------------------------------------------------
  | Fallbacks : fonctionnement mental
  |--------------------------------------------------------------------------
  */

  out =
    replaceFlexibleText(
      out,
      "Mercure décrit votre manière de réfléchir, comprendre et communiquer.",
      deepProfiles.fallbacks.mercury,
    );

  out =
    replaceFlexibleText(
      out,
      "Mars décrit la manière dont vous transformez une idée ou un désir en action.",
      deepProfiles.fallbacks.mars,
    );

  out =
    replaceFlexibleText(
      out,
      "Saturne montre la prudence, les exigences et les apprentissages qui structurent vos décisions.",
      deepProfiles.fallbacks.saturn,
    );

  /*
  |--------------------------------------------------------------------------
  | Fallbacks : relations
  |--------------------------------------------------------------------------
  */

  out =
    replaceFlexibleText(
      out,
      "Vénus décrit votre manière d’aimer, vos valeurs et ce qui vous attire.",
      deepProfiles.fallbacks.venus,
    );

  /*
  |--------------------------------------------------------------------------
  | Les deux fallbacks relationnels particuliers
  |--------------------------------------------------------------------------
  */

  const relationshipMoonFallback =
    locale === "en"
      ? "Your Moon describes what you need to feel emotionally secure."
      : locale === "es"
        ? "Tu Luna describe aquello que necesitas para sentirte emocionalmente seguro."
        : locale === "de"
          ? "Ihr Mond beschreibt, was Sie brauchen, um sich emotional sicher zu fühlen."
          : locale === "it"
            ? "La tua Luna descrive ciò di cui hai bisogno per sentirti emotivamente al sicuro."
            : "Sua Lua descreve aquilo de que você precisa para se sentir emocionalmente seguro.";

  const relationshipMarsFallback =
    locale === "en"
      ? "Mars describes your desire, your way of taking initiative, and your reaction to tension."
      : locale === "es"
        ? "Marte describe tu deseo, tu manera de tomar la iniciativa y tu reacción frente a las tensiones."
        : locale === "de"
          ? "Mars beschreibt Ihr Verlangen, Ihre Art, Initiative zu ergreifen, und Ihre Reaktion auf Spannungen."
          : locale === "it"
            ? "Marte descrive il tuo desiderio, il tuo modo di prendere iniziativa e la tua reazione di fronte alle tensioni."
            : "Marte descreve seu desejo, sua maneira de tomar iniciativa e sua reação diante das tensões.";

  out =
    replaceFlexibleText(
      out,
      "Votre Lune décrit ce dont vous avez besoin pour vous sentir affectivement en sécurité.",
      relationshipMoonFallback,
    );

  out =
    replaceFlexibleText(
      out,
      "Mars décrit votre désir, votre manière de prendre l’initiative et votre réaction face aux tensions.",
      relationshipMarsFallback,
    );

  /*
  |--------------------------------------------------------------------------
  | Fallbacks : défi d’évolution
  |--------------------------------------------------------------------------
  */

  const saturnLearningFallback =
    locale === "en"
      ? "Saturn shows the learning process that requires time, patience, and structure."
      : locale === "es"
        ? "Saturno muestra el aprendizaje que requiere tiempo, paciencia y estructura."
        : locale === "de"
          ? "Saturn zeigt den Lernprozess, der Zeit, Geduld und Struktur verlangt."
          : locale === "it"
            ? "Saturno mostra l’apprendimento che richiede tempo, pazienza e struttura."
            : "Saturno mostra o aprendizado que exige tempo, paciência e estrutura.";

  out =
    replaceFlexibleText(
      out,
      "Saturne montre l’apprentissage qui demande du temps, de la patience et de la structure.",
      saturnLearningFallback,
    );

  out =
    replaceFlexibleText(
      out,
      "Pluton révèle les mécanismes de contrôle, d’intensité et de transformation profonde.",
      deepProfiles.fallbacks.pluto,
    );

  out =
    replaceFlexibleText(
      out,
      "Neptune montre les zones où l’idéal, l’intuition ou le manque de limites peuvent brouiller vos repères.",
      deepProfiles.fallbacks.neptune,
    );

  /*
  |--------------------------------------------------------------------------
  | Fallbacks : potentiel d’accomplissement
  |--------------------------------------------------------------------------
  */

  const potentialSunFallback =
    locale === "en"
      ? "Your Sun shows the direction in which your identity seeks fulfillment."
      : locale === "es"
        ? "Tu Sol muestra la dirección en la que tu identidad busca realizarse."
        : locale === "de"
          ? "Ihre Sonne zeigt die Richtung, in der Ihre Identität Erfüllung sucht."
          : locale === "it"
            ? "Il tuo Sole mostra la direzione nella quale la tua identità cerca realizzazione."
            : "Seu Sol mostra a direção na qual sua identidade procura realização.";

  out =
    replaceFlexibleText(
      out,
      "Votre Soleil montre la direction dans laquelle votre identité cherche à s’accomplir.",
      potentialSunFallback,
    );

  out =
    replaceFlexibleText(
      out,
      "Jupiter montre la manière dont votre confiance et vos possibilités peuvent s’élargir.",
      deepProfiles.fallbacks.jupiter,
    );

  out =
    replaceFlexibleText(
      out,
      "Votre Milieu du Ciel décrit votre direction professionnelle et la contribution que vous cherchez à rendre visible.",
      deepProfiles.fallbacks.midheaven,
    );

  /*
  |--------------------------------------------------------------------------
  | Textes dynamiques simples
  |--------------------------------------------------------------------------
  */

  out =
    replaceFlexibleText(
      out,
      "Votre moteur intérieur devient plus cohérent lorsque votre manière d’agir respecte à la fois votre direction consciente et vos besoins émotionnels.",
      dynamic.innerDefault,
    );

  out =
    replaceFlexibleText(
      out,
      "Vous prenez vos meilleures décisions lorsque vous laissez suffisamment de temps à votre pensée, à votre instinct d’action et à votre prudence pour se consulter.",
      dynamic.decisionDefault,
    );

  out =
    replaceFlexibleText(
      out,
      "Votre pensée et votre action peuvent être très rapides. Votre défi consiste à vérifier les faits et les conséquences avant de transformer une première impression en décision définitive.",
      dynamic.decisionFire,
    );

  out =
    replaceFlexibleText(
      out,
      "Vous gagnez en clarté lorsque vous ramenez vos idées à des critères concrets, à des étapes mesurables et à une réalité vérifiable.",
      dynamic.decisionEarth,
    );

  out =
    replaceFlexibleText(
      out,
      "Vous avez besoin de comparer, verbaliser et comprendre plusieurs angles avant de vous engager pleinement.",
      dynamic.decisionAir,
    );

  out =
    replaceFlexibleText(
      out,
      "Votre ressenti influence fortement votre compréhension. Votre discernement augmente lorsque vous distinguez l’intuition réelle de la peur ou de l’anticipation émotionnelle.",
      dynamic.decisionWater,
    );

  out =
    replaceFlexibleText(
      out,
      "Votre vie relationnelle devient plus équilibrée lorsque vous pouvez exprimer vos besoins affectifs sans attendre qu’ils soient devinés et sans confondre proximité, fusion ou contrôle.",
      dynamic.relationshipDefault,
    );

  out =
    replaceFlexibleText(
      out,
      "Votre principal défi consiste à reconnaître le moment où une protection ancienne prend le contrôle de votre réponse actuelle. Votre progression commence lorsque vous nommez précisément la peur, vérifiez ce qui appartient réellement au présent et choisissez une action plus petite, mais plus consciente.",
      dynamic.challengeDefault,
    );

  out =
    replaceFlexibleText(
      out,
      "Votre potentiel d’accomplissement se développe lorsque votre ambition extérieure reste fidèle à votre nature intérieure. Vous réussissez davantage dans les environnements qui vous permettent d’utiliser vos qualités dominantes sans vous obliger à fonctionner constamment contre vous-même.",
      dynamic.potentialConclusion,
    );

  out =
    replaceFlexibleText(
      out,
      "Votre thème ne vous demande pas de devenir quelqu’un d’autre. Il vous invite à réunir vos forces, à comprendre vos contradictions et à choisir une manière d’avancer qui respecte pleinement votre nature.",
      dynamic.signatureConclusion,
    );

  /*
  |--------------------------------------------------------------------------
  | ATTENTION
  |--------------------------------------------------------------------------
  |
  | Ne pas ajouter :
  |
  | return out;
  | }
  |
  | ici.
  |
  | Le bloc 7 continue directement cette fonction.
  |
  |--------------------------------------------------------------------------
  */
  /*
  |--------------------------------------------------------------------------
  | Traduction visible des éléments
  |--------------------------------------------------------------------------
  |
  | Les valeurs internes restent :
  |
  | Feu
  | Terre
  | Air
  | Eau
  |
  | On traduit uniquement leur affichage dans les phrases.
  |
  |--------------------------------------------------------------------------
  */

  const visibleElements:
    Record<
      ElementName,
      string
    > = {
    Feu:
      labels.fire,

    Terre:
      labels.earth,

    Air:
      labels.air,

    Eau:
      labels.water,
  };

  const visibleModalities:
    Record<
      ModalityName,
      string
    > = {
    Cardinal:
      labels.cardinal,

    Fixe:
      labels.fixed,

    Mutable:
      labels.mutable,
  };

  const elementLookup =
    JSON.stringify(
      visibleElements,
    );

  const modalityLookup =
    JSON.stringify(
      visibleModalities,
    );

  /*
  |--------------------------------------------------------------------------
  | Moteur intérieur — même élément
  |--------------------------------------------------------------------------
  */

  const innerSameElementText =
    dynamic.innerSameElement(
      "__ELEMENT__",
    );

  out =
    out.replace(
      /`Votre Soleil et votre Lune appartiennent tous deux à l’élément \$\{sunElement\}\. Votre identité et votre sensibilité parlent donc un langage proche, ce qui renforce la continuité entre ce que vous voulez et ce que vous ressentez\.`/g,
      "`" +
        innerSameElementText.replace(
          "__ELEMENT__",
          `\${(${elementLookup} as Record<string, string>)[sunElement] ?? sunElement}`,
        ) +
        "`",
    );

  /*
  |--------------------------------------------------------------------------
  | Moteur intérieur — éléments différents
  |--------------------------------------------------------------------------
  */

  const innerDifferentText =
    dynamic.innerDifferentElements(
      "__SUN_ELEMENT__",
      "__MOON_ELEMENT__",
    );

  out =
    out.replace(
      /`Votre Soleil appartient à l’élément \$\{sunElement\}, tandis que votre Lune appartient à l’élément \$\{moonElement\}\. Votre richesse vient de cette différence, mais votre équilibre demande de ne pas sacrifier l’un de ces besoins au profit de l’autre\.`/g,
      "`" +
        innerDifferentText
          .replace(
            "__SUN_ELEMENT__",
            `\${(${elementLookup} as Record<string, string>)[sunElement] ?? sunElement}`,
          )
          .replace(
            "__MOON_ELEMENT__",
            `\${(${elementLookup} as Record<string, string>)[moonElement] ?? moonElement}`,
          ) +
        "`",
    );

  /*
  |--------------------------------------------------------------------------
  | Maison du Soleil
  |--------------------------------------------------------------------------
  */

  const identityHouseText =
    dynamic.identityHouse(
      "__HOUSE__",
    );

  out =
    out.replace(
      /`Votre identité cherche particulièrement à s’exprimer \$\{houseText\}\.`/g,
      "`" +
        identityHouseText.replace(
          "__HOUSE__",
          "${houseText}",
        ) +
        "`",
    );

  /*
  |--------------------------------------------------------------------------
  | Relations — même élément
  |--------------------------------------------------------------------------
  */

  const relationshipSameElementText =
    dynamic.relationshipSameElement(
      "__ELEMENT__",
    );

  out =
    out.replace(
      /`Vénus et la Lune appartiennent toutes deux à l’élément \$\{venusElement\}\. Votre manière d’aimer et vos besoins émotionnels se comprennent donc assez naturellement, ce qui renforce votre cohérence affective\.`/g,
      "`" +
        relationshipSameElementText.replace(
          "__ELEMENT__",
          `\${(${elementLookup} as Record<string, string>)[venusElement] ?? venusElement}`,
        ) +
        "`",
    );

  /*
  |--------------------------------------------------------------------------
  | Relations — éléments différents
  |--------------------------------------------------------------------------
  */

  const relationshipDifferentText =
    dynamic.relationshipDifferentElements(
      "__VENUS_ELEMENT__",
      "__MOON_ELEMENT__",
    );

  out =
    out.replace(
      /`Vénus appartient à l’élément \$\{venusElement\}, tandis que votre Lune appartient à l’élément \$\{moonElement\}\. Vous pouvez donc aimer d’une manière tout en ayant besoin d’être rassuré d’une autre\. La relation devient plus stable lorsque ces deux langages sont clairement exprimés\.`/g,
      "`" +
        relationshipDifferentText
          .replace(
            "__VENUS_ELEMENT__",
            `\${(${elementLookup} as Record<string, string>)[venusElement] ?? venusElement}`,
          )
          .replace(
            "__MOON_ELEMENT__",
            `\${(${elementLookup} as Record<string, string>)[moonElement] ?? moonElement}`,
          ) +
        "`",
    );

  /*
  |--------------------------------------------------------------------------
  | Maison Saturne
  |--------------------------------------------------------------------------
  */

  const saturnHouseText =
    dynamic.saturnHouse(
      "__HOUSE__",
    );

  out =
    out.replace(
      /`Cet apprentissage se manifeste particulièrement \$\{saturnHouse\}\.`/g,
      "`" +
        saturnHouseText.replace(
          "__HOUSE__",
          "${saturnHouse}",
        ) +
        "`",
    );

  /*
  |--------------------------------------------------------------------------
  | Maison Pluton
  |--------------------------------------------------------------------------
  */

  const plutoHouseText =
    dynamic.plutoHouse(
      "__HOUSE__",
    );

  out =
    out.replace(
      /`Vos transformations les plus profondes peuvent également se jouer \$\{plutoHouse\}\.`/g,
      "`" +
        plutoHouseText.replace(
          "__HOUSE__",
          "${plutoHouse}",
        ) +
        "`",
    );

  /*
  |--------------------------------------------------------------------------
  | Potentiel — élément dominant
  |--------------------------------------------------------------------------
  */

  const dominantElementText =
    dynamic.dominantElement(
      "__ELEMENT__",
      "__DESCRIPTION__",
    );

  out =
    out.replace(
      /`L’élément \$\{dominantElement\} domine votre thème et souligne \$\{ELEMENT_DESCRIPTIONS\[dominantElement\]\}\.`/g,
      "`" +
        dominantElementText
          .replace(
            "__ELEMENT__",
            `\${(${elementLookup} as Record<string, string>)[dominantElement] ?? dominantElement}`,
          )
          .replace(
            "__DESCRIPTION__",
            "${ELEMENT_DESCRIPTIONS[dominantElement]}",
          ) +
        "`",
    );

  /*
  |--------------------------------------------------------------------------
  | Potentiel — modalité dominante
  |--------------------------------------------------------------------------
  */

  const dominantModalityText =
    dynamic.dominantModality(
      "__MODALITY__",
      "__DESCRIPTION__",
    );

  out =
    out.replace(
      /`La modalité \$\{dominantModality\} renforce \$\{MODALITY_DESCRIPTIONS\[dominantModality\]\}\.`/g,
      "`" +
        dominantModalityText
          .replace(
            "__MODALITY__",
            `\${(${modalityLookup} as Record<string, string>)[dominantModality] ?? dominantModality}`,
          )
          .replace(
            "__DESCRIPTION__",
            "${MODALITY_DESCRIPTIONS[dominantModality]}",
          ) +
        "`",
    );

  /*
  |--------------------------------------------------------------------------
  | Phrase Signature — Soleil / Lune / Ascendant
  |--------------------------------------------------------------------------
  */

  const signatureCoreText =
    dynamic.signatureCore(
      "__SUN__",
      "__MOON__",
      "__ASCENDANT__",
    );

  out =
    out.replace(
      /`Votre Soleil en \$\{sunName\}, votre Lune en \$\{moonName\} et votre Ascendant \$\{ascendantName\} forment une personnalité qui cherche à unir identité consciente, besoins émotionnels et manière spontanée d’avancer\.`/g,
      "`" +
        signatureCoreText
          .replace(
            "__SUN__",
            "${sunName}",
          )
          .replace(
            "__MOON__",
            "${moonName}",
          )
          .replace(
            "__ASCENDANT__",
            "${ascendantName}",
          ) +
        "`",
    );

  /*
  |--------------------------------------------------------------------------
  | Phrase Signature — élément dominant
  |--------------------------------------------------------------------------
  */

  const signatureElementText =
    dynamic.signatureDominantElement(
      "__ELEMENT__",
      "__DESCRIPTION__",
    );

  out =
    out.replace(
      /`Votre dominante \$\{dominantElement\} vous invite à honorer \$\{ELEMENT_DESCRIPTIONS\[dominantElement\]\}\.`/g,
      "`" +
        signatureElementText
          .replace(
            "__ELEMENT__",
            `\${(${elementLookup} as Record<string, string>)[dominantElement] ?? dominantElement}`,
          )
          .replace(
            "__DESCRIPTION__",
            "${ELEMENT_DESCRIPTIONS[dominantElement]}",
          ) +
        "`",
    );

  /*
  |--------------------------------------------------------------------------
  | Phrase Signature — modalité dominante
  |--------------------------------------------------------------------------
  */

  const signatureModalityText =
    dynamic.signatureDominantModality(
      "__MODALITY__",
      "__DESCRIPTION__",
    );

  out =
    out.replace(
      /`Votre énergie \$\{dominantModality\.toLowerCase\(\)\} montre que votre évolution passe par \$\{MODALITY_DESCRIPTIONS\[dominantModality\]\}\.`/g,
      "`" +
        signatureModalityText
          .replace(
            "__MODALITY__",
            `\${((${modalityLookup} as Record<string, string>)[dominantModality] ?? dominantModality).toLowerCase()}`,
          )
          .replace(
            "__DESCRIPTION__",
            "${MODALITY_DESCRIPTIONS[dominantModality]}",
          ) +
        "`",
    );

  /*
  |--------------------------------------------------------------------------
  | Introduction
  |--------------------------------------------------------------------------
  |
  | Le prénom reste dynamique.
  |
  |--------------------------------------------------------------------------
  */

  const introNamed =
    locale === "en"
      ? "${safeFirstName}, this synthesis connects your main astrological positions to highlight your inner engine, mental functioning, way of loving, main challenge, and potential for fulfillment."
      : locale === "es"
        ? "${safeFirstName}, esta síntesis relaciona tus principales posiciones astrológicas para destacar tu motor interior, tu funcionamiento mental, tu manera de amar, tu principal desafío y tu potencial de realización."
        : locale === "de"
          ? "${safeFirstName}, diese Synthese verbindet Ihre wichtigsten astrologischen Positionen, um Ihren inneren Antrieb, Ihre Denkweise, Ihre Art zu lieben, Ihre zentrale Herausforderung und Ihr Erfüllungspotenzial hervorzuheben."
          : locale === "it"
            ? "${safeFirstName}, questa sintesi collega le tue principali posizioni astrologiche per mettere in evidenza il tuo motore interiore, il funzionamento mentale, il modo di amare, la principale sfida e il potenziale di realizzazione."
            : "${safeFirstName}, esta síntese conecta suas principais posições astrológicas para destacar seu motor interior, funcionamento mental, maneira de amar, principal desafio e potencial de realização.";

  const introAnonymous =
    locale === "en"
      ? "This synthesis connects your main astrological positions to highlight your inner engine, mental functioning, way of loving, main challenge, and potential for fulfillment."
      : locale === "es"
        ? "Esta síntesis relaciona tus principales posiciones astrológicas para destacar tu motor interior, tu funcionamiento mental, tu manera de amar, tu principal desafío y tu potencial de realización."
        : locale === "de"
          ? "Diese Synthese verbindet Ihre wichtigsten astrologischen Positionen, um Ihren inneren Antrieb, Ihre Denkweise, Ihre Art zu lieben, Ihre zentrale Herausforderung und Ihr Erfüllungspotenzial hervorzuheben."
          : locale === "it"
            ? "Questa sintesi collega le tue principali posizioni astrologiche per mettere in evidenza il tuo motore interiore, il funzionamento mentale, il modo di amare, la principale sfida e il potenziale di realizzazione."
            : "Esta síntese conecta suas principais posições astrológicas para destacar seu motor interior, funcionamento mental, maneira de amar, principal desafio e potencial de realização.";

  out =
    out.replace(
      /const introduction =\s*safeFirstName\s*\?\s*`\$\{safeFirstName\}, cette synthèse relie vos principales positions astrologiques afin de faire ressortir votre moteur intérieur, votre fonctionnement mental, votre manière d’aimer, votre principal défi et votre potentiel d’accomplissement\.`\s*:\s*"Cette synthèse relie vos principales positions astrologiques afin de faire ressortir votre moteur intérieur, votre fonctionnement mental, votre manière d’aimer, votre principal défi et votre potentiel d’accomplissement\.";/m,
      `const introduction =
    safeFirstName
      ? \`${introNamed}\`
      : ${JSON.stringify(
        introAnonymous,
      )};`,
    );

  /*
  |--------------------------------------------------------------------------
  | Titres visibles
  |--------------------------------------------------------------------------
  */

  const visibleTexts:
    Array<
      [
        string,
        string,
      ]
    > = [
    [
      "Synthèse Signature",
      labels.analysis,
    ],

    [
      "Votre signature astrologique profonde",
      labels.title,
    ],

    [
      "Votre moteur intérieur",
      labels.innerEngine,
    ],

    [
      "Votre fonctionnement mental et décisionnel",
      labels.mentalPattern,
    ],

    [
      "Votre manière d’aimer et de vous engager",
      labels.relationshipPattern,
    ],

    [
      "Votre principal défi d’évolution",
      labels.lifeChallenge,
    ],

    [
      "Votre potentiel d’accomplissement",
      labels.potential,
    ],

    [
      "Votre phrase Signature",
      labels.signatureSentence,
    ],
  ];

  for (
    const [
      from,
      to,
    ] of visibleTexts
  ) {
    out =
      replaceFlexibleText(
        out,
        from,
        to,
      );
  }

  /*
  |--------------------------------------------------------------------------
  | Résumé astrologique du haut
  |--------------------------------------------------------------------------
  |
  | Le composant source affiche :
  |
  | - nombre de positions
  | - Ascendant
  | - Milieu du Ciel
  | - élément dominant
  | - modalité dominante
  |
  |--------------------------------------------------------------------------
  */

  const summaryStart =
    locale === "en"
      ? "This reading is based on"
      : locale === "es"
        ? "Esta lectura se basa en"
        : locale === "de"
          ? "Diese Deutung basiert auf"
          : locale === "it"
            ? "Questa lettura si basa su"
            : "Esta leitura se baseia em";

  const planetaryPositions =
    locale === "en"
      ? "planetary positions"
      : locale === "es"
        ? "posiciones planetarias"
        : locale === "de"
          ? "Planetenpositionen"
          : locale === "it"
            ? "posizioni planetarie"
            : "posições planetárias";

  const mainPositions =
    locale === "en"
      ? "your main planetary positions"
      : locale === "es"
        ? "tus principales posiciones planetarias"
        : locale === "de"
          ? "Ihre wichtigsten Planetenpositionen"
          : locale === "it"
            ? "le tue principali posizioni planetarie"
            : "suas principais posições planetárias";

  const ascendantConnector =
    locale === "en"
      ? "your Ascendant"
      : locale === "es"
        ? "tu Ascendente"
        : locale === "de"
          ? "Ihren Aszendenten"
          : locale === "it"
            ? "il tuo Ascendente"
            : "seu Ascendente";

  const midheavenConnector =
    locale === "en"
      ? "your Midheaven"
      : locale === "es"
        ? "tu Medio Cielo"
        : locale === "de"
          ? "Ihr Medium Coeli"
          : locale === "it"
            ? "il tuo Medio Cielo"
            : "seu Meio do Céu";

  const dominantConnector =
    locale === "en"
      ? "a dominant"
      : locale === "es"
        ? "una dominante"
        : locale === "de"
          ? "eine Dominanz"
          : locale === "it"
            ? "una dominante"
            : "uma dominante";

  const modalityConnector =
    locale === "en"
      ? "and a"
      : locale === "es"
        ? "y una modalidad"
        : locale === "de"
          ? "und eine Modalität"
          : locale === "it"
            ? "e una modalità"
            : "e uma modalidade";

  const summaryEnd =
    locale === "en"
      ? "The goal is not to repeat the previous pages, but to show how these different dimensions work together to shape your personal functioning."
      : locale === "es"
        ? "El objetivo no es repetir las páginas anteriores, sino mostrar cómo estas diferentes dimensiones construyen juntas tu funcionamiento personal."
        : locale === "de"
          ? "Ziel ist es nicht, die vorherigen Seiten zu wiederholen, sondern zu zeigen, wie diese verschiedenen Dimensionen gemeinsam Ihre persönliche Funktionsweise prägen."
          : locale === "it"
            ? "L’obiettivo non è ripetere le pagine precedenti, ma mostrare come queste diverse dimensioni costruiscono insieme il tuo funzionamento personale."
            : "O objetivo não é repetir as páginas anteriores, mas mostrar como essas diferentes dimensões constroem juntas seu funcionamento pessoal.";

  out =
    out.replace(
      /<Text style=\{styles\.summaryText\}>[\s\S]*?<\/Text>/m,
      `<Text style={styles.summaryText}>
            ${summaryStart}{" "}
            {analyzedPlanetsCount > 0
              ? \`\${analyzedPlanetsCount} ${planetaryPositions}\`
              : ${JSON.stringify(
                mainPositions,
              )}}
            , ${ascendantConnector}{" "}
            {SIGN_NAMES[ascendantSign] ?? ascendantSign}
            , ${midheavenConnector}{" "}
            {SIGN_NAMES[midheavenSign] ?? midheavenSign}
            {dominantElement
              ? \`, ${dominantConnector} \${
                  (${elementLookup} as Record<string, string>)[
                    dominantElement
                  ] ?? dominantElement
                }\`
              : ""}
            {dominantModality
              ? \` ${modalityConnector} \${
                  (${modalityLookup} as Record<string, string>)[
                    dominantModality
                  ] ?? dominantModality
                }\`
              : ""}
            . ${summaryEnd}
          </Text>`,
    );

  /*
  |--------------------------------------------------------------------------
  | Sécurité finale
  |--------------------------------------------------------------------------
  |
  | Les noms techniques des planètes NE DOIVENT PAS être traduits :
  |
  | Sun
  | Moon
  | Mercury
  | Venus
  | Mars
  | Jupiter
  | Saturn
  | Neptune
  | Pluto
  |
  | getPlanet() dépend de ces valeurs.
  |
  |--------------------------------------------------------------------------
  */

  return out;
}
