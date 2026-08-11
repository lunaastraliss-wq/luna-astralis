import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<
    PaidPdfLocale,
    "fr"
  >;

type CareerLabels = {
  analysis: string;

  vocationTitle: string;
  vocationIntro: string;

  midheaven: string;
  professionalInfluence: string;

  successTitle: string;
  successIntro: string;

  development: string;

  professionalStrength: string;
  professionalChallenge: string;

  synthesisTitle: string;

  unavailableData: string;
  unspecified: string;

  unavailableCareerAnalysis: string;
  genericCareerPosition: string;

  housePositionPrefix: string;

  midheavenUnavailable: string;
  midheavenGeneric: string;

  strengthStart: string;
  strengthJupiter: string;
  strengthEnd: string;

  challengeMars: string;
  challengeSaturn: string;
  challengeEnd: string;

  synthesisStart: string;
  synthesisMercury: string;
  synthesisMars: string;
  synthesisSaturn: string;
  synthesisCore: string;
  synthesisMcStart: string;
  synthesisMcEnd: string;
  synthesisEnd: string;

  sunRole: string;
  mercuryRole: string;
  marsRole: string;
  jupiterRole: string;
  saturnRole: string;

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

  signTexts: string[];
  houseTexts: string[];
  midheavenTexts: string[];
};

const LABELS: Record<
  NonFrenchLocale,
  CareerLabels
> = {
  en: {
    analysis:
      "Signature Analysis",

    vocationTitle:
      "Your professional vocation",

    vocationIntro:
      "Vocation does not correspond only to a specific profession. It represents the way you want to use your skills, progress, contribute, and be recognized in the world.",

    midheaven:
      "Midheaven",

    professionalInfluence:
      "Professional influence",

    successTitle:
      "Your success and ambitions",

    successIntro:
      "Success depends on how you combine your talents, your capacity for action, your confidence, and your ability to persevere.",

    development:
      "Development",

    professionalStrength:
      "Your professional strength",

    professionalChallenge:
      "Your professional challenge",

    synthesisTitle:
      "Synthesis of your vocation",

    unavailableData:
      "Data unavailable",

    unspecified:
      "unspecified",

    unavailableCareerAnalysis:
      "The available data does not allow a precise analysis of the professional influence of",

    genericCareerPosition:
      "This position describes a personal way of working, progressing, and pursuing your ambitions.",

    housePositionPrefix:
      " Its position in house",

    midheavenUnavailable:
      "The sign of the Midheaven cannot be determined from the available data. This angle normally represents vocation, reputation, and professional direction.",

    midheavenGeneric:
      "The Midheaven describes professional direction, reputation, and the way you wish to be recognized.",

    strengthStart:
      "Your potential for fulfillment combines the Sun in",

    strengthJupiter:
      "and Jupiter in",

    strengthEnd:
      "The Sun shows what you are seeking to become, while Jupiter reveals your capacity for expansion, confidence, and transmission.",

    challengeMars:
      "Mars in",

    challengeSaturn:
      "describes how you act, while Saturn in",

    challengeEnd:
      "shows your responsibilities and limits. Your challenge is to move forward with determination without rushing the process, while avoiding allowing caution to become immobility.",

    synthesisStart:
      "Your professional path combines a Sun in",

    synthesisMercury:
      "Mercury in",

    synthesisMars:
      "Mars in",

    synthesisSaturn:
      "and Saturn in",

    synthesisCore:
      "The Sun indicates your need for fulfillment, Mercury your mental abilities, Mars your capacity for action, and Saturn your ability to build over time.",

    synthesisMcStart:
      "The Midheaven in",

    synthesisMcEnd:
      "gives an overall direction to this development.",

    synthesisEnd:
      "You progress more when your work brings together personal meaning, autonomy, concrete skills, and opportunities for growth.",

    sunRole:
      "The Sun describes your need for fulfillment, visibility, and the creation of a professional identity that reflects who you are.",

    mercuryRole:
      "Mercury describes the way you think, communicate, learn, and process information in your work.",

    marsRole:
      "Mars describes your drive, ambition, competitiveness, and the way you pursue your goals.",

    jupiterRole:
      "Jupiter describes your potential for expansion, confidence, ability to transmit knowledge, and the areas in which you can think bigger.",

    saturnRole:
      "Saturn describes your discipline, sense of responsibility, maturity challenges, and ability to build over the long term.",

    sun: "Sun",
    moon: "Moon",
    mercury: "Mercury",
    venus: "Venus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturn",
    uranus: "Uranus",
    neptune: "Neptune",
    pluto: "Pluto",

    aries: "Aries",
    taurus: "Taurus",
    gemini: "Gemini",
    cancer: "Cancer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Scorpio",
    sagittarius: "Sagittarius",
    capricorn: "Capricorn",
    aquarius: "Aquarius",
    pisces: "Pisces",

    signTexts: [
      "You progress when you can take initiative, act quickly, and open new paths. Environments that are too passive or controlling can reduce your motivation.",
      "You seek stable, concrete, and lasting work. You progress best when your efforts produce visible results and when you can build gradually.",
      "You need variety, intellectual stimulation, and communication. Careers that allow you to learn, explain, write, or connect people may suit you.",
      "You give your best when your work has a human, protective, or emotional dimension. A sense of usefulness and security strongly influences your commitment.",
      "You need creativity, recognition, and a certain freedom of expression. You can excel when you take on a visible position or leadership role.",
      "You have a natural sense of analysis, organization, and improvement. You are effective in roles requiring precision, method, and attention to detail.",
      "You work well in environments based on cooperation, balance, and quality relationships. Diplomacy, aesthetics, or mediation can be strengths.",
      "You are drawn to complex, strategic, or transformative situations. You can excel when work requires depth, discretion, research, or crisis management.",
      "You need growth, movement, and meaning. Fields related to teaching, travel, transmission, or exploration can nourish your motivation.",
      "You seek progress, responsibility, and long-term construction. Your endurance and sense of structure support management or authority roles.",
      "You need independence, innovation, and intellectual freedom. You can stand out in technological, collective, creative, or unconventional fields.",
      "Your intuition, imagination, and sensitivity can be expressed in creative, human, spiritual, or therapeutic fields. You need to feel that your work has meaning.",
    ],

    houseTexts: [
      "Your personal identity and presence strongly influence your professional path. You need to feel directly involved in what you do.",
      "Income, stability, and recognition of your skills are important motivators. You seek to build concrete security.",
      "Communication, learning, writing, commerce, or exchanges play an important role in your work.",
      "Your professional life may be connected to home, family, real estate, or creating a secure environment.",
      "Creativity, personal expression, teaching, leisure, or independent projects may play a major role.",
      "Daily work, organization, service, methods, and professional habits are central to your progress.",
      "Partnerships, clients, and collaborations strongly influence your success. You progress through exchange and cooperation.",
      "Shared finances, psychology, investigation, transformation, or crisis management may become important fields.",
      "Teaching, travel, languages, law, publishing, or the transmission of knowledge may support your vocation.",
      "Career, reputation, and public achievement play a central role. You need to build a visible and recognized path.",
      "Networks, collective projects, communities, and a vision of the future may support your success.",
      "Your vocation may include a discreet, intuitive, artistic, spiritual, or helping dimension.",
    ],

    midheavenTexts: [
      "Your Midheaven in Aries indicates a vocation based on initiative, autonomy, and courage. You need to move forward independently and create your own path.",
      "Your Midheaven in Taurus supports stable, patient, and concrete progress. You build your reputation through reliability and consistency.",
      "Your Midheaven in Gemini emphasizes communication, versatility, and learning. Several activities or roles may form part of your path.",
      "Your Midheaven in Cancer links vocation with protection, care, home, or human support.",
      "Your Midheaven in Leo supports visibility, creativity, leadership, and recognition of your talents.",
      "Your Midheaven in Virgo emphasizes competence, service, analysis, and constant improvement.",
      "Your Midheaven in Libra supports careers related to relationships, mediation, aesthetics, law, or cooperation.",
      "Your Midheaven in Scorpio indicates an intense, strategic, or transformative vocation. You can manage complex situations with depth.",
      "Your Midheaven in Sagittarius supports teaching, travel, transmission, publishing, and projects that broaden horizons.",
      "Your Midheaven in Capricorn emphasizes ambition, patience, and the ability to gradually assume major responsibilities.",
      "Your Midheaven in Aquarius supports innovation, technology, networks, independence, and original professional paths.",
      "Your Midheaven in Pisces highlights creativity, intuition, helping others, spirituality, and work requiring sensitivity and imagination.",
    ],
  },

  es: {
    analysis:
      "Análisis Firma",

    vocationTitle:
      "Tu vocación profesional",

    vocationIntro:
      "La vocación no corresponde únicamente a una profesión concreta. Representa la manera en que deseas utilizar tus capacidades, progresar, contribuir y ser reconocido en el mundo.",

    midheaven:
      "Medio Cielo",

    professionalInfluence:
      "Influencia profesional",

    successTitle:
      "Tu éxito y tus ambiciones",

    successIntro:
      "El éxito depende de la manera en que combinas tus talentos, tu energía de acción, tu confianza y tu capacidad de perseverar.",

    development:
      "Desarrollo",

    professionalStrength:
      "Tu fortaleza profesional",

    professionalChallenge:
      "Tu desafío profesional",

    synthesisTitle:
      "Síntesis de tu vocación",

    unavailableData:
      "Dato no disponible",

    unspecified:
      "no especificado",

    unavailableCareerAnalysis:
      "Los datos disponibles no permiten analizar con precisión la influencia profesional de",

    genericCareerPosition:
      "Esta posición describe una manera personal de trabajar, progresar y perseguir tus ambiciones.",

    housePositionPrefix:
      " Su posición en la casa",

    midheavenUnavailable:
      "El signo del Medio Cielo no puede determinarse con los datos disponibles. Este ángulo representa normalmente la vocación, la reputación y la dirección profesional.",

    midheavenGeneric:
      "El Medio Cielo describe la dirección profesional, la reputación y la manera en que deseas ser reconocido.",

    strengthStart:
      "Tu potencial de realización combina el Sol en",

    strengthJupiter:
      "y Júpiter en",

    strengthEnd:
      "El Sol muestra lo que buscas llegar a ser, mientras que Júpiter revela tu capacidad de expansión, confianza y transmisión.",

    challengeMars:
      "Marte en",

    challengeSaturn:
      "describe tu manera de actuar, mientras que Saturno en",

    challengeEnd:
      "muestra tus responsabilidades y tus límites. Tu desafío consiste en avanzar con determinación sin quemar etapas, evitando al mismo tiempo que la prudencia se transforme en inmovilidad.",

    synthesisStart:
      "Tu trayectoria profesional combina un Sol en",

    synthesisMercury:
      "Mercurio en",

    synthesisMars:
      "Marte en",

    synthesisSaturn:
      "y Saturno en",

    synthesisCore:
      "El Sol indica tu necesidad de realización, Mercurio tus capacidades mentales, Marte tu capacidad de acción y Saturno tu capacidad para construir a largo plazo.",

    synthesisMcStart:
      "El Medio Cielo en",

    synthesisMcEnd:
      "da una dirección general a esta evolución.",

    synthesisEnd:
      "Progresas más cuando tu actividad reúne sentido personal, autonomía, capacidades concretas y posibilidades de evolución.",

    sunRole:
      "El Sol describe tu necesidad de realizarte, brillar y construir una identidad profesional que se parezca a ti.",

    mercuryRole:
      "Mercurio describe tu manera de pensar, comunicar, aprender y procesar la información en el trabajo.",

    marsRole:
      "Marte describe tu energía de acción, tu ambición, tu competitividad y tu manera de perseguir tus objetivos.",

    jupiterRole:
      "Júpiter describe tu potencial de expansión, tu confianza, tu capacidad de transmitir y los ámbitos en los que puedes pensar en grande.",

    saturnRole:
      "Saturno describe tu disciplina, tu sentido de la responsabilidad, tus desafíos de madurez y tu capacidad de construir a largo plazo.",

    sun: "Sol",
    moon: "Luna",
    mercury: "Mercurio",
    venus: "Venus",
    mars: "Marte",
    jupiter: "Júpiter",
    saturn: "Saturno",
    uranus: "Urano",
    neptune: "Neptuno",
    pluto: "Plutón",

    aries: "Aries",
    taurus: "Tauro",
    gemini: "Géminis",
    cancer: "Cáncer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Escorpio",
    sagittarius: "Sagitario",
    capricorn: "Capricornio",
    aquarius: "Acuario",
    pisces: "Piscis",

    signTexts: [
      "Progresas cuando puedes tomar iniciativas, actuar rápidamente y abrir nuevos caminos. Los entornos demasiado pasivos o controladores pueden reducir tu motivación.",
      "Buscas una actividad estable, concreta y duradera. Avanzas mejor cuando tus esfuerzos producen resultados visibles y puedes construir progresivamente.",
      "Necesitas variedad, estimulación intelectual y comunicación. Las profesiones que permiten aprender, explicar, escribir o conectar personas pueden convenirte.",
      "Das lo mejor de ti cuando tu trabajo posee una dimensión humana, protectora o emocional. El sentimiento de utilidad y seguridad influye mucho en tu compromiso.",
      "Necesitas creatividad, reconocimiento y cierta libertad de expresión. Puedes destacar cuando asumes una posición visible o un papel de liderazgo.",
      "Posees un sentido natural del análisis, la organización y la mejora. Eres eficaz en funciones que requieren precisión, método y atención a los detalles.",
      "Trabajas bien en entornos basados en la cooperación, el equilibrio y la calidad de las relaciones. La diplomacia, la estética o la mediación pueden ser fortalezas.",
      "Te atraen las situaciones complejas, estratégicas o transformadoras. Puedes destacar cuando el trabajo exige profundidad, discreción, investigación o gestión de crisis.",
      "Necesitas crecimiento, movimiento y sentido. Los ámbitos relacionados con la enseñanza, los viajes, la transmisión o la exploración pueden alimentar tu motivación.",
      "Buscas progresión, responsabilidad y construcción a largo plazo. Tu resistencia y sentido de la estructura favorecen las funciones de gestión o autoridad.",
      "Necesitas independencia, innovación y libertad intelectual. Puedes destacar en ámbitos tecnológicos, colectivos, creativos o poco convencionales.",
      "Tu intuición, imaginación y sensibilidad pueden expresarse en ámbitos creativos, humanos, espirituales o terapéuticos. Necesitas sentir que tu trabajo tiene significado.",
    ],

    houseTexts: [
      "Tu identidad personal y tu presencia influyen fuertemente en tu trayectoria profesional. Necesitas sentirte directamente implicado en lo que haces.",
      "Los ingresos, la estabilidad y el reconocimiento de tus capacidades son motores importantes. Buscas construir una seguridad concreta.",
      "La comunicación, el aprendizaje, la escritura, el comercio o los intercambios ocupan un lugar importante en tu actividad.",
      "Tu vida profesional puede estar vinculada al hogar, la familia, los bienes raíces o la creación de un entorno seguro.",
      "La creatividad, la expresión personal, la enseñanza, el ocio o los proyectos independientes pueden desempeñar un papel importante.",
      "El trabajo cotidiano, la organización, el servicio, los métodos y los hábitos profesionales son centrales en tu progreso.",
      "Las asociaciones, los clientes y las colaboraciones influyen fuertemente en tu éxito. Progresas mediante el intercambio y la cooperación.",
      "Las finanzas compartidas, la psicología, la investigación, la transformación o la gestión de crisis pueden convertirse en ámbitos importantes.",
      "La enseñanza, los viajes, los idiomas, el derecho, la publicación o la transmisión de conocimientos pueden apoyar tu vocación.",
      "La carrera, la reputación y la realización pública ocupan un lugar central. Necesitas construir una trayectoria visible y reconocida.",
      "Las redes, los proyectos colectivos, las comunidades y la visión del futuro pueden favorecer tu éxito.",
      "Tu vocación puede incluir una dimensión discreta, intuitiva, artística, espiritual o orientada hacia la ayuda a los demás.",
    ],

    midheavenTexts: [
      "Tu Medio Cielo en Aries indica una vocación basada en la iniciativa, la autonomía y el valor. Necesitas avanzar por ti mismo y abrir tu propio camino.",
      "Tu Medio Cielo en Tauro favorece una progresión estable, paciente y concreta. Construyes tu reputación gracias a la fiabilidad y la constancia.",
      "Tu Medio Cielo en Géminis subraya la comunicación, la versatilidad y el aprendizaje. Varias actividades o funciones pueden formar parte de tu recorrido.",
      "Tu Medio Cielo en Cáncer vincula la vocación con la protección, el cuidado, el hogar o el acompañamiento humano.",
      "Tu Medio Cielo en Leo favorece la visibilidad, la creatividad, el liderazgo y el reconocimiento de tus talentos.",
      "Tu Medio Cielo en Virgo pone el acento en la competencia, el servicio, el análisis y la mejora constante.",
      "Tu Medio Cielo en Libra favorece las carreras vinculadas con las relaciones, la mediación, la estética, el derecho o la cooperación.",
      "Tu Medio Cielo en Escorpio indica una vocación intensa, estratégica o transformadora. Puedes gestionar situaciones complejas con profundidad.",
      "Tu Medio Cielo en Sagitario favorece la enseñanza, los viajes, la transmisión, la publicación y los proyectos que amplían los horizontes.",
      "Tu Medio Cielo en Capricornio subraya la ambición, la paciencia y la capacidad de asumir progresivamente responsabilidades importantes.",
      "Tu Medio Cielo en Acuario favorece la innovación, la tecnología, las redes, la independencia y las vías profesionales originales.",
      "Tu Medio Cielo en Piscis pone en valor la creatividad, la intuición, la ayuda, la espiritualidad y las actividades que requieren sensibilidad e imaginación.",
    ],
  },

  de: {
    analysis:
      "Signatur-Analyse",

    vocationTitle:
      "Ihre berufliche Berufung",

    vocationIntro:
      "Berufung entspricht nicht nur einem bestimmten Beruf. Sie beschreibt, wie Sie Ihre Fähigkeiten einsetzen, sich entwickeln, beitragen und in der Welt anerkannt werden möchten.",

    midheaven:
      "Medium Coeli",

    professionalInfluence:
      "Beruflicher Einfluss",

    successTitle:
      "Ihr Erfolg und Ihre Ambitionen",

    successIntro:
      "Erfolg hängt davon ab, wie Sie Ihre Talente, Ihre Handlungsenergie, Ihr Vertrauen und Ihre Ausdauer miteinander verbinden.",

    development:
      "Entwicklung",

    professionalStrength:
      "Ihre berufliche Stärke",

    professionalChallenge:
      "Ihre berufliche Herausforderung",

    synthesisTitle:
      "Synthese Ihrer Berufung",

    unavailableData:
      "Daten nicht verfügbar",

    unspecified:
      "nicht angegeben",

    unavailableCareerAnalysis:
      "Die verfügbaren Daten ermöglichen keine genaue Analyse des beruflichen Einflusses von",

    genericCareerPosition:
      "Diese Position beschreibt eine persönliche Art zu arbeiten, sich weiterzuentwickeln und Ihre Ambitionen zu verfolgen.",

    housePositionPrefix:
      " Seine Position im Haus",

    midheavenUnavailable:
      "Das Zeichen des Medium Coeli kann anhand der verfügbaren Daten nicht bestimmt werden. Dieser Winkel steht normalerweise für Berufung, Ruf und berufliche Ausrichtung.",

    midheavenGeneric:
      "Das Medium Coeli beschreibt Ihre berufliche Ausrichtung, Ihren Ruf und die Art, wie Sie anerkannt werden möchten.",

    strengthStart:
      "Ihr Potenzial zur Entfaltung verbindet die Sonne in",

    strengthJupiter:
      "und Jupiter in",

    strengthEnd:
      "Die Sonne zeigt, was Sie werden möchten, während Jupiter Ihre Fähigkeit zu Wachstum, Vertrauen und Weitergabe beschreibt.",

    challengeMars:
      "Mars in",

    challengeSaturn:
      "beschreibt Ihre Handlungsweise, während Saturn in",

    challengeEnd:
      "Ihre Verantwortung und Ihre Grenzen zeigt. Ihre Herausforderung besteht darin, entschlossen voranzugehen, ohne Schritte zu überspringen, und gleichzeitig zu vermeiden, dass Vorsicht zu Stillstand wird.",

    synthesisStart:
      "Ihr beruflicher Weg verbindet eine Sonne in",

    synthesisMercury:
      "Merkur in",

    synthesisMars:
      "Mars in",

    synthesisSaturn:
      "und Saturn in",

    synthesisCore:
      "Die Sonne zeigt Ihr Bedürfnis nach Entfaltung, Merkur Ihre geistigen Fähigkeiten, Mars Ihre Handlungsfähigkeit und Saturn Ihre Fähigkeit, langfristig aufzubauen.",

    synthesisMcStart:
      "Das Medium Coeli in",

    synthesisMcEnd:
      "gibt dieser Entwicklung eine allgemeine Richtung.",

    synthesisEnd:
      "Sie entwickeln sich besonders dann weiter, wenn Ihre Tätigkeit persönlichen Sinn, Autonomie, konkrete Fähigkeiten und Entwicklungsmöglichkeiten vereint.",

    sunRole:
      "Die Sonne beschreibt Ihr Bedürfnis nach Entfaltung, Sichtbarkeit und einer beruflichen Identität, die Ihnen entspricht.",

    mercuryRole:
      "Merkur beschreibt Ihre Art zu denken, zu kommunizieren, zu lernen und Informationen im Arbeitsleben zu verarbeiten.",

    marsRole:
      "Mars beschreibt Ihre Handlungsenergie, Ihren Ehrgeiz, Ihren Wettbewerbsgeist und die Art, wie Sie Ihre Ziele verfolgen.",

    jupiterRole:
      "Jupiter beschreibt Ihr Wachstumspotenzial, Ihr Vertrauen, Ihre Fähigkeit zur Weitergabe und die Bereiche, in denen Sie größer denken können.",

    saturnRole:
      "Saturn beschreibt Ihre Disziplin, Ihr Verantwortungsgefühl, Ihre Reifeprozesse und Ihre Fähigkeit, langfristig aufzubauen.",

    sun: "Sonne",
    moon: "Mond",
    mercury: "Merkur",
    venus: "Venus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturn",
    uranus: "Uranus",
    neptune: "Neptun",
    pluto: "Pluto",

    aries: "Widder",
    taurus: "Stier",
    gemini: "Zwillinge",
    cancer: "Krebs",
    leo: "Löwe",
    virgo: "Jungfrau",
    libra: "Waage",
    scorpio: "Skorpion",
    sagittarius: "Schütze",
    capricorn: "Steinbock",
    aquarius: "Wassermann",
    pisces: "Fische",

    signTexts: [
      "Sie entwickeln sich weiter, wenn Sie Initiative ergreifen, schnell handeln und neue Wege eröffnen können. Zu passive oder kontrollierende Umgebungen können Ihre Motivation verringern.",
      "Sie suchen eine stabile, konkrete und dauerhafte Tätigkeit. Sie kommen am besten voran, wenn Ihre Anstrengungen sichtbare Ergebnisse hervorbringen und Sie schrittweise aufbauen können.",
      "Sie brauchen Abwechslung, geistige Anregung und Kommunikation. Berufe, die Lernen, Erklären, Schreiben oder Vernetzen ermöglichen, können gut zu Ihnen passen.",
      "Sie geben Ihr Bestes, wenn Ihre Arbeit eine menschliche, schützende oder emotionale Dimension besitzt. Das Gefühl von Nutzen und Sicherheit beeinflusst Ihr Engagement stark.",
      "Sie brauchen Kreativität, Anerkennung und eine gewisse Ausdrucksfreiheit. Sie können besonders erfolgreich sein, wenn Sie eine sichtbare Position oder Führungsrolle übernehmen.",
      "Sie besitzen ein natürliches Gespür für Analyse, Organisation und Verbesserung. Sie sind in Aufgaben wirksam, die Präzision, Methode und Aufmerksamkeit für Details verlangen.",
      "Sie arbeiten gut in Umgebungen, die auf Zusammenarbeit, Ausgewogenheit und guten Beziehungen beruhen. Diplomatie, Ästhetik oder Vermittlung können Stärken sein.",
      "Sie fühlen sich von komplexen, strategischen oder transformativen Situationen angezogen. Sie können besonders erfolgreich sein, wenn Ihre Arbeit Tiefe, Diskretion, Forschung oder Krisenmanagement erfordert.",
      "Sie brauchen Wachstum, Bewegung und Sinn. Bereiche wie Lehre, Reisen, Wissensvermittlung oder Erkundung können Ihre Motivation fördern.",
      "Sie suchen Entwicklung, Verantwortung und langfristigen Aufbau. Ihre Ausdauer und Ihr Sinn für Struktur unterstützen Führungs- oder Autoritätsfunktionen.",
      "Sie brauchen Unabhängigkeit, Innovation und geistige Freiheit. Sie können sich in technologischen, kollektiven, kreativen oder unkonventionellen Bereichen hervorheben.",
      "Ihre Intuition, Vorstellungskraft und Sensibilität können sich in kreativen, menschlichen, spirituellen oder therapeutischen Bereichen ausdrücken. Sie müssen spüren, dass Ihre Arbeit Bedeutung besitzt.",
    ],

    houseTexts: [
      "Ihre persönliche Identität und Präsenz beeinflussen Ihren beruflichen Weg stark. Sie müssen sich direkt mit dem verbunden fühlen, was Sie tun.",
      "Einkommen, Stabilität und Anerkennung Ihrer Fähigkeiten sind wichtige Motivatoren. Sie möchten konkrete Sicherheit aufbauen.",
      "Kommunikation, Lernen, Schreiben, Handel oder Austausch spielen in Ihrer Tätigkeit eine wichtige Rolle.",
      "Ihr Berufsleben kann mit Zuhause, Familie, Immobilien oder der Schaffung eines sicheren Umfelds verbunden sein.",
      "Kreativität, persönlicher Ausdruck, Lehre, Freizeit oder unabhängige Projekte können eine wichtige Rolle spielen.",
      "Tägliche Arbeit, Organisation, Dienstleistung, Methoden und berufliche Gewohnheiten stehen im Mittelpunkt Ihrer Entwicklung.",
      "Partnerschaften, Kundschaft und Zusammenarbeit beeinflussen Ihren Erfolg stark. Sie entwickeln sich durch Austausch und Kooperation weiter.",
      "Gemeinsame Finanzen, Psychologie, Forschung, Transformation oder Krisenmanagement können wichtige Bereiche werden.",
      "Lehre, Reisen, Sprachen, Recht, Veröffentlichungen oder Wissensvermittlung können Ihre Berufung unterstützen.",
      "Karriere, Ruf und öffentliche Entfaltung spielen eine zentrale Rolle. Sie möchten einen sichtbaren und anerkannten Weg aufbauen.",
      "Netzwerke, kollektive Projekte, Gemeinschaften und Zukunftsvisionen können Ihren Erfolg fördern.",
      "Ihre Berufung kann eine diskrete, intuitive, künstlerische, spirituelle oder helfende Dimension enthalten.",
    ],

    midheavenTexts: [
      "Ihr Medium Coeli im Widder weist auf eine Berufung hin, die auf Initiative, Autonomie und Mut beruht. Sie müssen selbstständig vorangehen und Ihren eigenen Weg eröffnen.",
      "Ihr Medium Coeli im Stier unterstützt eine stabile, geduldige und konkrete Entwicklung. Sie bauen Ihren Ruf durch Zuverlässigkeit und Beständigkeit auf.",
      "Ihr Medium Coeli in den Zwillingen betont Kommunikation, Vielseitigkeit und Lernen. Mehrere Tätigkeiten oder Rollen können Ihren Weg prägen.",
      "Ihr Medium Coeli im Krebs verbindet Berufung mit Schutz, Fürsorge, Zuhause oder menschlicher Begleitung.",
      "Ihr Medium Coeli im Löwen unterstützt Sichtbarkeit, Kreativität, Führung und die Anerkennung Ihrer Talente.",
      "Ihr Medium Coeli in der Jungfrau betont Kompetenz, Dienstleistung, Analyse und kontinuierliche Verbesserung.",
      "Ihr Medium Coeli in der Waage unterstützt Berufe rund um Beziehungen, Vermittlung, Ästhetik, Recht oder Zusammenarbeit.",
      "Ihr Medium Coeli im Skorpion weist auf eine intensive, strategische oder transformative Berufung hin. Sie können komplexe Situationen mit großer Tiefe bewältigen.",
      "Ihr Medium Coeli im Schützen unterstützt Lehre, Reisen, Vermittlung, Veröffentlichungen und Projekte, die den Horizont erweitern.",
      "Ihr Medium Coeli im Steinbock betont Ehrgeiz, Geduld und die Fähigkeit, schrittweise größere Verantwortung zu übernehmen.",
      "Ihr Medium Coeli im Wassermann unterstützt Innovation, Technologie, Netzwerke, Unabhängigkeit und originelle berufliche Wege.",
      "Ihr Medium Coeli in den Fischen betont Kreativität, Intuition, Hilfe, Spiritualität und Tätigkeiten, die Sensibilität und Vorstellungskraft verlangen.",
    ],
  },

  it: {
    analysis:
      "Analisi Firma",

    vocationTitle:
      "La tua vocazione professionale",

    vocationIntro:
      "La vocazione non corrisponde soltanto a una professione precisa. Rappresenta il modo in cui desideri utilizzare le tue competenze, progredire, contribuire ed essere riconosciuto nel mondo.",

    midheaven:
      "Medio Cielo",

    professionalInfluence:
      "Influenza professionale",

    successTitle:
      "Il tuo successo e le tue ambizioni",

    successIntro:
      "Il successo dipende dal modo in cui combini i tuoi talenti, la tua energia d’azione, la tua fiducia e la tua capacità di perseverare.",

    development:
      "Sviluppo",

    professionalStrength:
      "La tua forza professionale",

    professionalChallenge:
      "La tua sfida professionale",

    synthesisTitle:
      "Sintesi della tua vocazione",

    unavailableData:
      "Dato non disponibile",

    unspecified:
      "non specificato",

    unavailableCareerAnalysis:
      "I dati disponibili non permettono di analizzare con precisione l’influenza professionale di",

    genericCareerPosition:
      "Questa posizione descrive un modo personale di lavorare, progredire e perseguire le tue ambizioni.",

    housePositionPrefix:
      " La sua posizione nella casa",

    midheavenUnavailable:
      "Il segno del Medio Cielo non può essere determinato con i dati disponibili. Questo angolo rappresenta normalmente la vocazione, la reputazione e la direzione professionale.",

    midheavenGeneric:
      "Il Medio Cielo descrive la direzione professionale, la reputazione e il modo in cui desideri essere riconosciuto.",

    strengthStart:
      "Il tuo potenziale di realizzazione associa il Sole in",

    strengthJupiter:
      "e Giove in",

    strengthEnd:
      "Il Sole mostra ciò che cerchi di diventare, mentre Giove rivela la tua capacità di espansione, fiducia e trasmissione.",

    challengeMars:
      "Marte in",

    challengeSaturn:
      "descrive il tuo modo di agire, mentre Saturno in",

    challengeEnd:
      "mostra le tue responsabilità e i tuoi limiti. La tua sfida consiste nell’avanzare con determinazione senza bruciare le tappe, evitando allo stesso tempo che la prudenza diventi immobilità.",

    synthesisStart:
      "Il tuo percorso professionale combina un Sole in",

    synthesisMercury:
      "Mercurio in",

    synthesisMars:
      "Marte in",

    synthesisSaturn:
      "e Saturno in",

    synthesisCore:
      "Il Sole indica il tuo bisogno di realizzazione, Mercurio le tue capacità mentali, Marte la tua capacità d’azione e Saturno la tua capacità di costruire nel tempo.",

    synthesisMcStart:
      "Il Medio Cielo in",

    synthesisMcEnd:
      "dà una direzione generale a questa evoluzione.",

    synthesisEnd:
      "Progredisci maggiormente quando la tua attività riunisce significato personale, autonomia, competenze concrete e possibilità di crescita.",

    sunRole:
      "Il Sole descrive il bisogno di realizzarti, brillare e costruire un’identità professionale che ti rappresenti.",

    mercuryRole:
      "Mercurio descrive il tuo modo di pensare, comunicare, imparare e trattare le informazioni nel lavoro.",

    marsRole:
      "Marte descrive la tua energia d’azione, la tua ambizione, la tua competitività e il modo in cui persegui i tuoi obiettivi.",

    jupiterRole:
      "Giove descrive il tuo potenziale di espansione, la tua fiducia, la tua capacità di trasmettere e gli ambiti nei quali puoi pensare più in grande.",

    saturnRole:
      "Saturno descrive la tua disciplina, il tuo senso di responsabilità, le tue sfide di maturità e la tua capacità di costruire nel tempo.",

    sun: "Sole",
    moon: "Luna",
    mercury: "Mercurio",
    venus: "Venere",
    mars: "Marte",
    jupiter: "Giove",
    saturn: "Saturno",
    uranus: "Urano",
    neptune: "Nettuno",
    pluto: "Plutone",

    aries: "Ariete",
    taurus: "Toro",
    gemini: "Gemelli",
    cancer: "Cancro",
    leo: "Leone",
    virgo: "Vergine",
    libra: "Bilancia",
    scorpio: "Scorpione",
    sagittarius: "Sagittario",
    capricorn: "Capricorno",
    aquarius: "Acquario",
    pisces: "Pesci",

    signTexts: [
      "Progredisci quando puoi prendere iniziative, agire rapidamente e aprire nuove strade. Gli ambienti troppo passivi o controllanti possono ridurre la tua motivazione.",
      "Cerchi un’attività stabile, concreta e duratura. Avanzi meglio quando i tuoi sforzi producono risultati visibili e puoi costruire progressivamente.",
      "Hai bisogno di varietà, stimolazione intellettuale e comunicazione. Le professioni che permettono di imparare, spiegare, scrivere o collegare le persone possono essere adatte a te.",
      "Dai il meglio di te quando il tuo lavoro possiede una dimensione umana, protettiva o emotiva. Il senso di utilità e sicurezza influenza fortemente il tuo impegno.",
      "Hai bisogno di creatività, riconoscimento e una certa libertà di espressione. Puoi eccellere quando assumi una posizione visibile o un ruolo di leadership.",
      "Possiedi un naturale senso dell’analisi, dell’organizzazione e del miglioramento. Sei efficace nelle funzioni che richiedono precisione, metodo e attenzione ai dettagli.",
      "Lavori bene negli ambienti basati sulla cooperazione, sull’equilibrio e sulla qualità delle relazioni. Diplomazia, estetica o mediazione possono essere punti di forza.",
      "Sei attratto dalle situazioni complesse, strategiche o trasformative. Puoi eccellere quando il lavoro richiede profondità, discrezione, ricerca o gestione delle crisi.",
      "Hai bisogno di crescita, movimento e significato. I settori legati all’insegnamento, ai viaggi, alla trasmissione o all’esplorazione possono alimentare la tua motivazione.",
      "Cerchi progresso, responsabilità e costruzione a lungo termine. La tua resistenza e il tuo senso della struttura favoriscono funzioni di gestione o autorità.",
      "Hai bisogno di indipendenza, innovazione e libertà intellettuale. Puoi distinguerti nei settori tecnologici, collettivi, creativi o non convenzionali.",
      "La tua intuizione, immaginazione e sensibilità possono esprimersi nei settori creativi, umani, spirituali o terapeutici. Hai bisogno di sentire che il tuo lavoro ha un significato.",
    ],

    houseTexts: [
      "La tua identità personale e la tua presenza influenzano fortemente il tuo percorso professionale. Hai bisogno di sentirti direttamente coinvolto in ciò che fai.",
      "Le entrate, la stabilità e il riconoscimento delle tue competenze sono motivazioni importanti. Cerchi di costruire una sicurezza concreta.",
      "La comunicazione, l’apprendimento, la scrittura, il commercio o gli scambi occupano un posto importante nella tua attività.",
      "La tua vita professionale può essere collegata alla casa, alla famiglia, all’immobiliare o alla creazione di un ambiente sicuro.",
      "Creatività, espressione personale, insegnamento, tempo libero o progetti indipendenti possono svolgere un ruolo importante.",
      "Il lavoro quotidiano, l’organizzazione, il servizio, i metodi e le abitudini professionali sono al centro della tua evoluzione.",
      "Le collaborazioni, i clienti e i partenariati influenzano fortemente il tuo successo. Progredisci attraverso lo scambio e la cooperazione.",
      "Finanze condivise, psicologia, investigazione, trasformazione o gestione delle crisi possono diventare ambiti importanti.",
      "Insegnamento, viaggi, lingue, diritto, pubblicazione o trasmissione delle conoscenze possono sostenere la tua vocazione.",
      "Carriera, reputazione e realizzazione pubblica occupano un posto centrale. Hai bisogno di costruire un percorso visibile e riconosciuto.",
      "Reti, progetti collettivi, comunità e visione del futuro possono favorire il tuo successo.",
      "La tua vocazione può contenere una dimensione discreta, intuitiva, artistica, spirituale o orientata all’aiuto degli altri.",
    ],

    midheavenTexts: [
      "Il tuo Medio Cielo in Ariete indica una vocazione fondata sull’iniziativa, sull’autonomia e sul coraggio. Hai bisogno di avanzare da solo e aprire la tua strada.",
      "Il tuo Medio Cielo in Toro favorisce una progressione stabile, paziente e concreta. Costruisci la tua reputazione attraverso affidabilità e costanza.",
      "Il tuo Medio Cielo in Gemelli sottolinea comunicazione, versatilità e apprendimento. Diverse attività o ruoli possono comporre il tuo percorso.",
      "Il tuo Medio Cielo in Cancro collega la vocazione alla protezione, alla cura, alla casa o all’accompagnamento umano.",
      "Il tuo Medio Cielo in Leone favorisce visibilità, creatività, leadership e riconoscimento dei tuoi talenti.",
      "Il tuo Medio Cielo in Vergine mette l’accento su competenza, servizio, analisi e miglioramento costante.",
      "Il tuo Medio Cielo in Bilancia sostiene carriere legate alle relazioni, alla mediazione, all’estetica, al diritto o alla cooperazione.",
      "Il tuo Medio Cielo in Scorpione indica una vocazione intensa, strategica o trasformativa. Puoi gestire situazioni complesse con profondità.",
      "Il tuo Medio Cielo in Sagittario favorisce insegnamento, viaggi, trasmissione, pubblicazione e progetti che ampliano gli orizzonti.",
      "Il tuo Medio Cielo in Capricorno sottolinea ambizione, pazienza e capacità di assumere progressivamente responsabilità importanti.",
      "Il tuo Medio Cielo in Acquario favorisce innovazione, tecnologia, reti, indipendenza e percorsi professionali originali.",
      "Il tuo Medio Cielo in Pesci mette in valore creatività, intuizione, aiuto, spiritualità e attività che richiedono sensibilità e immaginazione.",
    ],
  },

  pt: {
    analysis:
      "Análise Assinatura",

    vocationTitle:
      "Sua vocação profissional",

    vocationIntro:
      "A vocação não corresponde apenas a uma profissão específica. Ela representa a maneira como você deseja utilizar suas competências, progredir, contribuir e ser reconhecido no mundo.",

    midheaven:
      "Meio do Céu",

    professionalInfluence:
      "Influência profissional",

    successTitle:
      "Seu sucesso e suas ambições",

    successIntro:
      "O sucesso depende da maneira como você combina seus talentos, sua energia de ação, sua confiança e sua capacidade de perseverar.",

    development:
      "Desenvolvimento",

    professionalStrength:
      "Sua força profissional",

    professionalChallenge:
      "Seu desafio profissional",

    synthesisTitle:
      "Síntese da sua vocação",

    unavailableData:
      "Dado indisponível",

    unspecified:
      "não especificado",

    unavailableCareerAnalysis:
      "Os dados disponíveis não permitem analisar com precisão a influência profissional de",

    genericCareerPosition:
      "Esta posição descreve uma maneira pessoal de trabalhar, progredir e perseguir suas ambições.",

    housePositionPrefix:
      " Sua posição na casa",

    midheavenUnavailable:
      "O signo do Meio do Céu não pode ser determinado com os dados disponíveis. Esse ângulo representa normalmente a vocação, a reputação e a direção profissional.",

    midheavenGeneric:
      "O Meio do Céu descreve a direção profissional, a reputação e a maneira como você deseja ser reconhecido.",

    strengthStart:
      "Seu potencial de realização combina o Sol em",

    strengthJupiter:
      "e Júpiter em",

    strengthEnd:
      "O Sol mostra aquilo que você busca se tornar, enquanto Júpiter revela sua capacidade de expansão, confiança e transmissão.",

    challengeMars:
      "Marte em",

    challengeSaturn:
      "descreve sua maneira de agir, enquanto Saturno em",

    challengeEnd:
      "mostra suas responsabilidades e seus limites. Seu desafio consiste em avançar com determinação sem pular etapas, evitando ao mesmo tempo que a prudência se transforme em imobilidade.",

    synthesisStart:
      "Sua trajetória profissional combina um Sol em",

    synthesisMercury:
      "Mercúrio em",

    synthesisMars:
      "Marte em",

    synthesisSaturn:
      "e Saturno em",

    synthesisCore:
      "O Sol indica sua necessidade de realização, Mercúrio suas competências mentais, Marte sua capacidade de ação e Saturno sua capacidade de construir ao longo do tempo.",

    synthesisMcStart:
      "O Meio do Céu em",

    synthesisMcEnd:
      "dá uma direção geral a essa evolução.",

    synthesisEnd:
      "Você progride mais quando sua atividade reúne sentido pessoal, autonomia, competências concretas e possibilidade de evolução.",

    sunRole:
      "O Sol descreve sua necessidade de realização, de brilhar e de construir uma identidade profissional que corresponda a quem você é.",

    mercuryRole:
      "Mercúrio descreve sua maneira de pensar, comunicar, aprender e processar informações no trabalho.",

    marsRole:
      "Marte descreve sua energia de ação, sua ambição, sua competitividade e a maneira como você persegue seus objetivos.",

    jupiterRole:
      "Júpiter descreve seu potencial de expansão, sua confiança, sua capacidade de transmitir e os setores nos quais você pode pensar maior.",

    saturnRole:
      "Saturno descreve sua disciplina, seu senso de responsabilidade, seus desafios de maturidade e sua capacidade de construir a longo prazo.",

    sun: "Sol",
    moon: "Lua",
    mercury: "Mercúrio",
    venus: "Vênus",
    mars: "Marte",
    jupiter: "Júpiter",
    saturn: "Saturno",
    uranus: "Urano",
    neptune: "Netuno",
    pluto: "Plutão",

    aries: "Áries",
    taurus: "Touro",
    gemini: "Gêmeos",
    cancer: "Câncer",
    leo: "Leão",
    virgo: "Virgem",
    libra: "Libra",
    scorpio: "Escorpião",
    sagittarius: "Sagitário",
    capricorn: "Capricórnio",
    aquarius: "Aquário",
    pisces: "Peixes",

    signTexts: [
      "Você progride quando pode tomar iniciativas, agir rapidamente e abrir novos caminhos. Ambientes muito passivos ou controladores podem reduzir sua motivação.",
      "Você busca uma atividade estável, concreta e duradoura. Avança melhor quando seus esforços produzem resultados visíveis e quando pode construir gradualmente.",
      "Você precisa de variedade, estímulo intelectual e comunicação. Profissões que permitem aprender, explicar, escrever ou conectar pessoas podem ser adequadas.",
      "Você dá o melhor de si quando seu trabalho possui uma dimensão humana, protetora ou emocional. O sentimento de utilidade e segurança influencia fortemente seu envolvimento.",
      "Você precisa de criatividade, reconhecimento e certa liberdade de expressão. Pode se destacar quando assume uma posição visível ou um papel de liderança.",
      "Você possui um senso natural de análise, organização e melhoria. É eficaz em funções que exigem precisão, método e atenção aos detalhes.",
      "Você trabalha bem em ambientes baseados na cooperação, no equilíbrio e na qualidade das relações. Diplomacia, estética ou mediação podem ser pontos fortes.",
      "Você se sente atraído por situações complexas, estratégicas ou transformadoras. Pode se destacar quando o trabalho exige profundidade, discrição, pesquisa ou gestão de crises.",
      "Você precisa de crescimento, movimento e sentido. Áreas ligadas ao ensino, às viagens, à transmissão ou à exploração podem alimentar sua motivação.",
      "Você busca progresso, responsabilidade e construção a longo prazo. Sua resistência e seu senso de estrutura favorecem funções de gestão ou autoridade.",
      "Você precisa de independência, inovação e liberdade intelectual. Pode se destacar em áreas tecnológicas, coletivas, criativas ou não convencionais.",
      "Sua intuição, imaginação e sensibilidade podem se expressar em áreas criativas, humanas, espirituais ou terapêuticas. Você precisa sentir que seu trabalho possui significado.",
    ],

    houseTexts: [
      "Sua identidade pessoal e sua presença influenciam fortemente sua trajetória profissional. Você precisa se sentir diretamente envolvido no que faz.",
      "Renda, estabilidade e reconhecimento das suas competências são motivações importantes. Você busca construir uma segurança concreta.",
      "Comunicação, aprendizado, escrita, comércio ou trocas ocupam um lugar importante em sua atividade.",
      "Sua vida profissional pode estar ligada ao lar, à família, ao setor imobiliário ou à criação de um ambiente seguro.",
      "Criatividade, expressão pessoal, ensino, lazer ou projetos independentes podem desempenhar um papel importante.",
      "O trabalho cotidiano, a organização, o serviço, os métodos e os hábitos profissionais estão no centro da sua evolução.",
      "Parcerias, clientes e colaborações influenciam fortemente seu sucesso. Você progride através da troca e da cooperação.",
      "Finanças compartilhadas, psicologia, investigação, transformação ou gestão de crises podem se tornar áreas importantes.",
      "Ensino, viagens, idiomas, direito, publicação ou transmissão de conhecimentos podem apoiar sua vocação.",
      "Carreira, reputação e realização pública ocupam um lugar central. Você precisa construir uma trajetória visível e reconhecida.",
      "Redes, projetos coletivos, comunidades e visão de futuro podem favorecer seu sucesso.",
      "Sua vocação pode incluir uma dimensão discreta, intuitiva, artística, espiritual ou voltada para ajudar os outros.",
    ],

    midheavenTexts: [
      "Seu Meio do Céu em Áries indica uma vocação baseada em iniciativa, autonomia e coragem. Você precisa avançar por conta própria e abrir seu próprio caminho.",
      "Seu Meio do Céu em Touro favorece uma progressão estável, paciente e concreta. Você constrói sua reputação através da confiabilidade e da constância.",
      "Seu Meio do Céu em Gêmeos destaca comunicação, versatilidade e aprendizado. Várias atividades ou funções podem compor sua trajetória.",
      "Seu Meio do Céu em Câncer liga a vocação à proteção, ao cuidado, ao lar ou ao acompanhamento humano.",
      "Seu Meio do Céu em Leão favorece visibilidade, criatividade, liderança e reconhecimento dos seus talentos.",
      "Seu Meio do Céu em Virgem enfatiza competência, serviço, análise e melhoria constante.",
      "Seu Meio do Céu em Libra favorece carreiras ligadas às relações, à mediação, à estética, ao direito ou à cooperação.",
      "Seu Meio do Céu em Escorpião indica uma vocação intensa, estratégica ou transformadora. Você pode lidar com situações complexas com profundidade.",
      "Seu Meio do Céu em Sagitário favorece ensino, viagens, transmissão, publicação e projetos que ampliam horizontes.",
      "Seu Meio do Céu em Capricórnio destaca ambição, paciência e capacidade de assumir progressivamente responsabilidades importantes.",
      "Seu Meio do Céu em Aquário favorece inovação, tecnologia, redes, independência e caminhos profissionais originais.",
      "Seu Meio do Céu em Peixes valoriza criatividade, intuição, ajuda, espiritualidade e atividades que exigem sensibilidade e imaginação.",
    ],
  },
};

function replaceAll(
  source: string,
  from: string,
  to: string,
): string {
  return source
    .split(from)
    .join(to);
}

export function localizeSignatureCareer(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const labels =
    LABELS[locale as NonFrenchLocale];

  let out =
    source.replace(/\r\n/g, "\n");

  /*
  |--------------------------------------------------------------------------
  | Noms visibles des planètes
  |--------------------------------------------------------------------------
  */

  const planetNames = {
    Sun: labels.sun,
    Moon: labels.moon,
    Mercury: labels.mercury,
    Venus: labels.venus,
    Mars: labels.mars,
    Jupiter: labels.jupiter,
    Saturn: labels.saturn,
    Uranus: labels.uranus,
    Neptune: labels.neptune,
    Pluto: labels.pluto,
  };

  out = out.replace(
    /const PLANET_NAMES_FR:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\};/,
    `const PLANET_NAMES_FR: Record<string, string> = ${JSON.stringify(
      planetNames,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Signes visibles
  |--------------------------------------------------------------------------
  */

  const signNames = {
    Aries: labels.aries,
    Taurus: labels.taurus,
    Gemini: labels.gemini,
    Cancer: labels.cancer,
    Leo: labels.leo,
    Virgo: labels.virgo,
    Libra: labels.libra,
    Scorpio: labels.scorpio,
    Sagittarius: labels.sagittarius,
    Capricorn: labels.capricorn,
    Aquarius: labels.aquarius,
    Pisces: labels.pisces,

    Bélier: labels.aries,
    Taureau: labels.taurus,
    Gémeaux: labels.gemini,
    Lion: labels.leo,
    Vierge: labels.virgo,
    Balance: labels.libra,
    Scorpion: labels.scorpio,
    Sagittaire: labels.sagittarius,
    Capricorne: labels.capricorn,
    Verseau: labels.aquarius,
    Poissons: labels.pisces,
  };

  out = out.replace(
    /const SIGN_NAMES_FR:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\};/,
    `const SIGN_NAMES_FR: Record<string, string> = ${JSON.stringify(
      signNames,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Textes professionnels par signe
  |--------------------------------------------------------------------------
  */

  const displaySigns = [
    labels.aries,
    labels.taurus,
    labels.gemini,
    labels.cancer,
    labels.leo,
    labels.virgo,
    labels.libra,
    labels.scorpio,
    labels.sagittarius,
    labels.capricorn,
    labels.aquarius,
    labels.pisces,
  ];

  const signCareerTexts =
    Object.fromEntries(
      displaySigns.map(
        (sign, index) => [
          sign,
          labels.signTexts[index],
        ],
      ),
    );

  out = out.replace(
    /const SIGN_CAREER_TEXTS:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\};/,
    `const SIGN_CAREER_TEXTS: Record<string, string> = ${JSON.stringify(
      signCareerTexts,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Rôles professionnels des planètes
  |--------------------------------------------------------------------------
  |
  | Les clés Sun / Mercury / Mars / Jupiter / Saturn restent techniques.
  |--------------------------------------------------------------------------
  */

  const planetRoles = {
    Sun: labels.sunRole,
    Mercury: labels.mercuryRole,
    Mars: labels.marsRole,
    Jupiter: labels.jupiterRole,
    Saturn: labels.saturnRole,
  };

  out = out.replace(
    /const PLANET_CAREER_ROLES:\s*Record<[\s\S]*?>\s*=\s*\{[\s\S]*?\};/,
    `const PLANET_CAREER_ROLES: Record<CareerPlanetName, string> = ${JSON.stringify(
      planetRoles,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Textes des maisons
  |--------------------------------------------------------------------------
  */

  const houseTexts =
    Object.fromEntries(
      labels.houseTexts.map(
        (text, index) => [
          index + 1,
          text,
        ],
      ),
    );

  out = out.replace(
    /const HOUSE_CAREER_TEXTS:\s*Record<number,\s*string>\s*=\s*\{[\s\S]*?\};/,
    `const HOUSE_CAREER_TEXTS: Record<number, string> = ${JSON.stringify(
      houseTexts,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Textes du Milieu du Ciel
  |--------------------------------------------------------------------------
  */

  const midheavenTexts =
    Object.fromEntries(
      displaySigns.map(
        (sign, index) => [
          sign,
          labels.midheavenTexts[index],
        ],
      ),
    );

  out = out.replace(
    /const MC_SIGN_TEXTS:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\};/,
    `const MC_SIGN_TEXTS: Record<string, string> = ${JSON.stringify(
      midheavenTexts,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Textes fixes des deux pages
  |--------------------------------------------------------------------------
  */

  const replacements:
    Array<[string, string]> = [
      [
        "Analyse Signature",
        labels.analysis,
      ],
      [
        "Votre vocation professionnelle",
        labels.vocationTitle,
      ],
      [
        `La vocation ne correspond pas uniquement
            à un métier précis. Elle représente la
            manière dont vous souhaitez utiliser vos
            compétences, progresser, contribuer et
            être reconnue dans le monde.`,
        labels.vocationIntro,
      ],
      [
        "Influence professionnelle",
        labels.professionalInfluence,
      ],
      [
        "Votre réussite et vos ambitions",
        labels.successTitle,
      ],
      [
        `La réussite dépend de la manière dont vous
            combinez vos talents, votre énergie
            d’action, votre confiance et votre capacité
            à persévérer.`,
        labels.successIntro,
      ],
      [
        "Développement",
        labels.development,
      ],
      [
        "Votre force professionnelle",
        labels.professionalStrength,
      ],
      [
        "Votre défi professionnel",
        labels.professionalChallenge,
      ],
      [
        "Synthèse de votre vocation",
        labels.synthesisTitle,
      ],
      [
        "Donnée indisponible",
        labels.unavailableData,
      ],
      [
        "non précisé",
        labels.unspecified,
      ],
      [
        "Cette position décrit une manière personnelle de travailler, de progresser et de poursuivre vos ambitions.",
        labels.genericCareerPosition,
      ],
      [
        "Le signe du Milieu du Ciel ne peut pas être déterminé avec les données disponibles. Cet angle représente normalement la vocation, la réputation et la direction professionnelle.",
        labels.midheavenUnavailable,
      ],
      [
        "Le Milieu du Ciel décrit la direction professionnelle, la réputation et la manière dont vous souhaitez être reconnue.",
        labels.midheavenGeneric,
      ],
    ];

  for (
    const [from, to] of replacements
  ) {
    out =
      replaceAll(
        out,
        from,
        to,
      );
  }

  /*
  |--------------------------------------------------------------------------
  | Phrase dynamique : planète absente
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /`Les données disponibles ne permettent pas d’analyser précisément l’influence professionnelle de \$\{translatedName\}\.`/,
    `\`${labels.unavailableCareerAnalysis} \${translatedName}.\``,
  );

  /*
  |--------------------------------------------------------------------------
  | Titre planète + signe
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /`\$\{translatedName\} en \$\{frenchSign\}`/g,
    `\`\${translatedName} in \${frenchSign}\``,
  );

  if (locale === "es") {
    out = out.replace(
      /`\$\{translatedName\} in \$\{frenchSign\}`/g,
      `\`\${translatedName} en \${frenchSign}\``,
    );
  }

  if (locale === "de") {
    out = out.replace(
      /`\$\{translatedName\} in \$\{frenchSign\}`/g,
      `\`\${translatedName} in \${frenchSign}\``,
    );
  }

  if (locale === "it") {
    out = out.replace(
      /`\$\{translatedName\} in \$\{frenchSign\}`/g,
      `\`\${translatedName} in \${frenchSign}\``,
    );
  }

  if (locale === "pt") {
    out = out.replace(
      /`\$\{translatedName\} in \$\{frenchSign\}`/g,
      `\`\${translatedName} em \${frenchSign}\``,
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Position en maison
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /` Sa position en maison \$\{house\} ajoute ceci : `/,
    `\`${labels.housePositionPrefix} \${house} : \``,
  );

  /*
  |--------------------------------------------------------------------------
  | Milieu du Ciel affiché
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /`Milieu du Ciel en \$\{midheaven\.sign\}`/,
    `\`${labels.midheaven} \${midheaven.sign}\``,
  );

  out =
    replaceAll(
      out,
      "Votre Milieu du Ciel",
      labels.midheaven,
    );

  /*
  |--------------------------------------------------------------------------
  | Force professionnelle
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /`Votre potentiel d’accomplissement associe le Soleil en \$\{sunSign\} et Jupiter en \$\{jupiterSign\}\. `/,
    `\`${labels.strengthStart} \${sunSign} ${labels.strengthJupiter} \${jupiterSign}. \``,
  );

  out =
    replaceAll(
      out,
      "Le Soleil montre ce que vous cherchez à devenir, tandis que Jupiter révèle votre capacité d’expansion, de confiance et de transmission.",
      labels.strengthEnd,
    );

  /*
  |--------------------------------------------------------------------------
  | Défi professionnel
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /`Mars en \$\{marsSign\} décrit votre manière d’agir, alors que Saturne en \$\{saturnSign\} montre vos responsabilités et vos limites\. `/,
    `\`${labels.challengeMars} \${marsSign} ${labels.challengeSaturn} \${saturnSign} ${labels.challengeEnd} \``,
  );

  out =
    replaceAll(
      out,
      "Votre défi consiste à avancer avec détermination sans brûler les étapes, tout en évitant que la prudence ne devienne immobilité.",
      "",
    );

  /*
  |--------------------------------------------------------------------------
  | Synthèse professionnelle
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /`Votre trajectoire professionnelle combine un Soleil en \$\{sunSign\}, Mercure en \$\{mercurySign\}, Mars en \$\{marsSign\} et Saturne en \$\{saturnSign\}\. `/,
    `\`${labels.synthesisStart} \${sunSign}, ${labels.synthesisMercury} \${mercurySign}, ${labels.synthesisMars} \${marsSign} ${labels.synthesisSaturn} \${saturnSign}. \``,
  );

  out =
    replaceAll(
      out,
      "Le Soleil indique votre besoin d’accomplissement, Mercure vos compétences mentales, Mars votre capacité d’action et Saturne votre aptitude à construire dans le temps. ",
      labels.synthesisCore + " ",
    );

  out = out.replace(
    /`Le Milieu du Ciel en \$\{midheavenSign\} donne une direction générale à cette évolution\.`/,
    `\`${labels.synthesisMcStart} \${midheavenSign} ${labels.synthesisMcEnd}\``,
  );

  out =
    replaceAll(
      out,
      "Vous progressez davantage lorsque votre activité réunit sens personnel, autonomie, compétences concrètes et possibilité d’évolution.",
      labels.synthesisEnd,
    );

  return out;
}
