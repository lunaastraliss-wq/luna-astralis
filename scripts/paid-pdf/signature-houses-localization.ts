import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type HouseNumber =
  1 | 2 | 3 | 4 | 5 | 6 |
  7 | 8 | 9 | 10 | 11 | 12;

type HouseLabels = {
  analysis: string;
  kicker: string;
  title: string;
  lead: string;

  house: string;

  noMainPlanet: string;
  oneMainPlanet: string;
  mainPlanets: string;

  dominantHouse: string;
  undetermined: string;
  noDominant: string;

  planetsPresent: string;
  signatureInsight: string;

  planetFallback: string;

  note: string;
  fallbackInsight: string;

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
};

type HouseCopy = {
  labels: HouseLabels;
  titles: Record<HouseNumber, string>;
  keywords: Record<HouseNumber, string>;
  descriptions: Record<HouseNumber, string>;
  insights: Record<HouseNumber, string>;
};

const COPY: Record<NonFrenchLocale, HouseCopy> = {
  en: {
    labels: {
      analysis: "Signature Analysis",
      kicker: "Areas of life",
      title: "Your twelve astrological houses",
      lead:
        "The houses indicate in which areas of your existence the planetary energies express themselves most directly. An occupied house often becomes an important place of experience, learning, and evolution.",
      house: "House",
      noMainPlanet: "No main planet",
      oneMainPlanet: "1 main planet",
      mainPlanets: "main planets",
      dominantHouse: "Your most occupied house",
      undetermined: "Undetermined",
      noDominant:
        "No dominant house could be determined from the available planetary data.",
      planetsPresent: "Planets present:",
      signatureInsight: "Signature Insight",
      planetFallback: "Planet",
      note:
        "An empty house does not mean that an area of life is absent or unimportant. It simply indicates that none of the ten main planets were placed there at the time of your birth.",
      fallbackInsight:
        "The distribution of planets among the houses helps reveal where your energy is concentrated. An empty house is not inactive: its cusp sign and astrological ruler still describe how it functions.",
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
    },
    titles: {
      1: "Identity and presence",
      2: "Values and resources",
      3: "Thought and communication",
      4: "Roots and inner life",
      5: "Creativity and expression",
      6: "Work and daily life",
      7: "Relationships and commitments",
      8: "Transformation and intimacy",
      9: "Vision and expansion",
      10: "Vocation and fulfillment",
      11: "Projects and community",
      12: "Unconscious and spirituality",
    },
    keywords: {
      1: "Self • Appearance • Initiative",
      2: "Money • Security • Values",
      3: "Exchanges • Studies • Surroundings",
      4: "Family • Home • Roots",
      5: "Creation • Pleasure • Romance",
      6: "Habits • Service • Health",
      7: "Couple • Contracts • Partnership",
      8: "Intimacy • Crises • Rebirth",
      9: "Travel • Beliefs • Knowledge",
      10: "Career • Ambition • Reputation",
      11: "Friendships • Networks • Future",
      12: "Withdrawal • Intuition • Healing",
    },
    descriptions: {
      1: "House I describes your spontaneous way of entering life, your presence, your appearance, and the way you assert your individuality.",
      2: "House II concerns your resources, your relationship with money, your sense of security, and the values on which you build your stability.",
      3: "House III describes your way of learning, communicating, transmitting your ideas, and interacting with your immediate environment.",
      4: "House IV represents your roots, your family, your home, your emotional memory, and the most private foundations of your personality.",
      5: "House V concerns your creativity, your ability to shine, your pleasures, your romantic impulses, and the way you express your uniqueness.",
      6: "House VI describes your daily organization, concrete work, habits, sense of service, and relationship with well-being.",
      7: "House VII represents committed relationships, partnership, associations, and the qualities you seek or discover through others.",
      8: "House VIII concerns intimacy, shared resources, crises, deep attachments, and your capacity for inner transformation.",
      9: "House IX represents your worldview, beliefs, higher studies, travel, and your need to broaden your understanding of life.",
      10: "House X describes your vocation, ambition, public image, relationship with success, and the contribution you wish to leave.",
      11: "House XI concerns friendships, groups, networks, collective projects, and the aspirations you build for the future.",
      12: "House XII represents your deep inner life, the unconscious, periods of retreat, compassion, and the subtler dimensions of your existence.",
    },
    insights: {
      1: "An occupied House I emphasizes the need to act according to your own impulse and develop a clearly assumed identity.",
      2: "An occupied House II emphasizes building security, material autonomy, and recognition of your own value.",
      3: "An occupied House III strengthens the need to understand, exchange, learn, and create connections through ideas and speech.",
      4: "An occupied House IV intensifies the importance of home, roots, family, and a sense of emotional security.",
      5: "An occupied House V highlights creativity, personal expression, pleasure, romance, and the need to leave a unique mark.",
      6: "An occupied House VI emphasizes organization, usefulness, daily responsibilities, and the gradual improvement of your life.",
      7: "An occupied House VII makes relationships essential to your evolution. Others become important mirrors of your personality.",
      8: "An occupied House VIII indicates great emotional depth and experiences capable of transforming your way of living over time.",
      9: "An occupied House IX strengthens the need to seek meaning, broaden your horizons, and develop a personal vision of the world.",
      10: "An occupied House X highlights the importance of vocation, recognition, responsibilities, and the construction of lasting work.",
      11: "An occupied House XI favors future projects, networks, collective causes, and relationships based on a shared vision.",
      12: "An occupied House XII emphasizes sensitivity, intuition, inner life, and the need to understand unconscious mechanisms.",
    },
  },

  es: {
    labels: {
      analysis: "Análisis Firma",
      kicker: "Ámbitos de vida",
      title: "Tus doce casas astrológicas",
      lead:
        "Las casas indican en qué ámbitos de tu existencia se expresan más directamente las energías planetarias. Una casa ocupada suele convertirse en un lugar importante de experiencia, aprendizaje y evolución.",
      house: "Casa",
      noMainPlanet: "Ningún planeta principal",
      oneMainPlanet: "1 planeta principal",
      mainPlanets: "planetas principales",
      dominantHouse: "Tu casa más ocupada",
      undetermined: "No determinada",
      noDominant:
        "No se pudo determinar ninguna casa dominante a partir de los datos planetarios disponibles.",
      planetsPresent: "Planetas presentes:",
      signatureInsight: "Mirada Firma",
      planetFallback: "Planeta",
      note:
        "Una casa vacía no significa que un ámbito de la vida esté ausente o carezca de importancia. Simplemente indica que ninguno de los diez planetas principales estaba allí en el momento de tu nacimiento.",
      fallbackInsight:
        "La distribución de los planetas en las casas permite comprender dónde se concentra tu energía. Una casa vacía no está inactiva: su signo de cúspide y su regente astrológico siguen describiendo su funcionamiento.",
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
    },
    titles: {
      1: "Identidad y presencia",
      2: "Valores y recursos",
      3: "Pensamiento y comunicación",
      4: "Raíces y vida interior",
      5: "Creatividad y expresión",
      6: "Trabajo y vida cotidiana",
      7: "Relaciones y compromisos",
      8: "Transformación e intimidad",
      9: "Visión y expansión",
      10: "Vocación y realización",
      11: "Proyectos y comunidad",
      12: "Inconsciente y espiritualidad",
    },
    keywords: {
      1: "Yo • Apariencia • Iniciativa",
      2: "Dinero • Seguridad • Valores",
      3: "Intercambios • Estudios • Entorno",
      4: "Familia • Hogar • Raíces",
      5: "Creación • Placer • Romance",
      6: "Hábitos • Servicio • Salud",
      7: "Pareja • Contratos • Asociación",
      8: "Intimidad • Crisis • Renacimiento",
      9: "Viajes • Creencias • Conocimiento",
      10: "Carrera • Ambición • Reputación",
      11: "Amistades • Redes • Futuro",
      12: "Retiro • Intuición • Sanación",
    },
    descriptions: {
      1: "La Casa I describe tu manera espontánea de entrar en la vida, tu presencia, tu apariencia y la forma en que afirmas tu individualidad.",
      2: "La Casa II se relaciona con tus recursos, tu relación con el dinero, tu sensación de seguridad y los valores sobre los que construyes tu estabilidad.",
      3: "La Casa III describe tu forma de aprender, comunicar, transmitir tus ideas e interactuar con tu entorno inmediato.",
      4: "La Casa IV representa tus raíces, tu familia, tu hogar, tu memoria emocional y las bases más privadas de tu personalidad.",
      5: "La Casa V se relaciona con tu creatividad, tu capacidad de brillar, tus placeres, tus impulsos amorosos y tu manera de expresar tu singularidad.",
      6: "La Casa VI describe tu organización cotidiana, tu trabajo concreto, tus hábitos, tu sentido del servicio y tu relación con el bienestar.",
      7: "La Casa VII representa las relaciones comprometidas, la pareja, las asociaciones y las cualidades que buscas o descubres a través de los demás.",
      8: "La Casa VIII se relaciona con la intimidad, los recursos compartidos, las crisis, los apegos profundos y tu capacidad de transformación interior.",
      9: "La Casa IX representa tu visión del mundo, tus creencias, los estudios superiores, los viajes y tu necesidad de ampliar tu comprensión de la vida.",
      10: "La Casa X describe tu vocación, tu ambición, tu imagen pública, tu relación con el éxito y la contribución que deseas dejar.",
      11: "La Casa XI se relaciona con las amistades, los grupos, las redes, los proyectos colectivos y las aspiraciones que construyes para el futuro.",
      12: "La Casa XII representa tu vida interior profunda, el inconsciente, los períodos de retiro, la compasión y las dimensiones más sutiles de tu existencia.",
    },
    insights: {
      1: "Una Casa I ocupada acentúa la necesidad de actuar según tu propio impulso y desarrollar una identidad claramente asumida.",
      2: "Una Casa II ocupada pone el acento en la construcción de la seguridad, la autonomía material y el reconocimiento de tu propio valor.",
      3: "Una Casa III ocupada refuerza la necesidad de comprender, intercambiar, aprender y crear vínculos mediante las ideas y la palabra.",
      4: "Una Casa IV ocupada intensifica la importancia del hogar, las raíces, la familia y la sensación de seguridad emocional.",
      5: "Una Casa V ocupada destaca la creatividad, la expresión personal, el placer, el romance y la necesidad de dejar una huella única.",
      6: "Una Casa VI ocupada pone el acento en la organización, la utilidad, las responsabilidades cotidianas y la mejora progresiva de tu vida.",
      7: "Una Casa VII ocupada hace que las relaciones sean esenciales para tu evolución. Los demás se convierten en espejos importantes de tu personalidad.",
      8: "Una Casa VIII ocupada indica una gran profundidad emocional y experiencias capaces de transformar de manera duradera tu forma de vivir.",
      9: "Una Casa IX ocupada refuerza la necesidad de buscar sentido, ampliar tus horizontes y desarrollar una visión personal del mundo.",
      10: "Una Casa X ocupada subraya la importancia de la vocación, el reconocimiento, las responsabilidades y la construcción de una obra duradera.",
      11: "Una Casa XI ocupada favorece los proyectos de futuro, las redes, las causas colectivas y las relaciones basadas en una visión compartida.",
      12: "Una Casa XII ocupada acentúa la sensibilidad, la intuición, la vida interior y la necesidad de comprender los mecanismos inconscientes.",
    },
  },

  de: {
    labels: {
      analysis: "Signatur-Analyse",
      kicker: "Lebensbereiche",
      title: "Ihre zwölf astrologischen Häuser",
      lead:
        "Die Häuser zeigen, in welchen Lebensbereichen sich die planetaren Energien am unmittelbarsten ausdrücken. Ein besetztes Haus wird häufig zu einem wichtigen Ort für Erfahrung, Lernen und Entwicklung.",
      house: "Haus",
      noMainPlanet: "Kein Hauptplanet",
      oneMainPlanet: "1 Hauptplanet",
      mainPlanets: "Hauptplaneten",
      dominantHouse: "Ihr am stärksten besetztes Haus",
      undetermined: "Nicht bestimmt",
      noDominant:
        "Aus den verfügbaren Planetendaten konnte kein dominantes Haus bestimmt werden.",
      planetsPresent: "Vorhandene Planeten:",
      signatureInsight: "Signatur-Blick",
      planetFallback: "Planet",
      note:
        "Ein leeres Haus bedeutet nicht, dass ein Lebensbereich fehlt oder unwichtig ist. Es zeigt lediglich, dass sich zum Zeitpunkt Ihrer Geburt keiner der zehn Hauptplaneten dort befand.",
      fallbackInsight:
        "Die Verteilung der Planeten auf die Häuser zeigt, wo sich Ihre Energie konzentriert. Ein leeres Haus ist nicht inaktiv: Sein Zeichen an der Hausspitze und sein astrologischer Herrscher beschreiben weiterhin seine Funktionsweise.",
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
    },
    titles: {
      1: "Identität und Präsenz",
      2: "Werte und Ressourcen",
      3: "Denken und Kommunikation",
      4: "Wurzeln und Innenleben",
      5: "Kreativität und Ausdruck",
      6: "Arbeit und Alltag",
      7: "Beziehungen und Bindungen",
      8: "Transformation und Intimität",
      9: "Vision und Erweiterung",
      10: "Berufung und Verwirklichung",
      11: "Projekte und Gemeinschaft",
      12: "Unbewusstes und Spiritualität",
    },
    keywords: {
      1: "Selbst • Erscheinung • Initiative",
      2: "Geld • Sicherheit • Werte",
      3: "Austausch • Studium • Umfeld",
      4: "Familie • Zuhause • Wurzeln",
      5: "Schöpfung • Freude • Romantik",
      6: "Gewohnheiten • Dienst • Gesundheit",
      7: "Partnerschaft • Verträge • Kooperation",
      8: "Intimität • Krisen • Erneuerung",
      9: "Reisen • Überzeugungen • Wissen",
      10: "Karriere • Ehrgeiz • Ruf",
      11: "Freundschaften • Netzwerke • Zukunft",
      12: "Rückzug • Intuition • Heilung",
    },
    descriptions: {
      1: "Haus I beschreibt Ihre spontane Art, ins Leben zu treten, Ihre Präsenz, Ihr Erscheinungsbild und die Weise, wie Sie Ihre Individualität behaupten.",
      2: "Haus II betrifft Ihre Ressourcen, Ihren Umgang mit Geld, Ihr Sicherheitsgefühl und die Werte, auf denen Sie Ihre Stabilität aufbauen.",
      3: "Haus III beschreibt Ihre Art zu lernen, zu kommunizieren, Ideen weiterzugeben und mit Ihrer unmittelbaren Umgebung zu interagieren.",
      4: "Haus IV steht für Ihre Wurzeln, Ihre Familie, Ihr Zuhause, Ihr emotionales Gedächtnis und die privatesten Grundlagen Ihrer Persönlichkeit.",
      5: "Haus V betrifft Ihre Kreativität, Ihre Fähigkeit zu strahlen, Ihre Freuden, romantischen Impulse und die Weise, wie Sie Ihre Einzigartigkeit ausdrücken.",
      6: "Haus VI beschreibt Ihre tägliche Organisation, konkrete Arbeit, Gewohnheiten, Ihren Sinn für Dienst und Ihre Beziehung zum Wohlbefinden.",
      7: "Haus VII steht für verbindliche Beziehungen, Partnerschaft, Zusammenschlüsse und die Qualitäten, die Sie durch andere suchen oder entdecken.",
      8: "Haus VIII betrifft Intimität, gemeinsame Ressourcen, Krisen, tiefe Bindungen und Ihre Fähigkeit zur inneren Transformation.",
      9: "Haus IX steht für Ihre Weltanschauung, Überzeugungen, höhere Studien, Reisen und Ihr Bedürfnis, Ihr Verständnis des Lebens zu erweitern.",
      10: "Haus X beschreibt Ihre Berufung, Ihren Ehrgeiz, Ihr öffentliches Bild, Ihre Beziehung zum Erfolg und den Beitrag, den Sie hinterlassen möchten.",
      11: "Haus XI betrifft Freundschaften, Gruppen, Netzwerke, gemeinschaftliche Projekte und die Zukunftsvisionen, die Sie aufbauen.",
      12: "Haus XII steht für Ihr tiefes Innenleben, das Unbewusste, Rückzugsphasen, Mitgefühl und die subtileren Dimensionen Ihrer Existenz.",
    },
    insights: {
      1: "Ein besetztes Haus I verstärkt das Bedürfnis, nach dem eigenen Impuls zu handeln und eine klar angenommene Identität zu entwickeln.",
      2: "Ein besetztes Haus II betont den Aufbau von Sicherheit, materieller Selbstständigkeit und die Anerkennung des eigenen Wertes.",
      3: "Ein besetztes Haus III verstärkt das Bedürfnis zu verstehen, sich auszutauschen, zu lernen und durch Ideen und Sprache Verbindungen zu schaffen.",
      4: "Ein besetztes Haus IV verstärkt die Bedeutung von Zuhause, Wurzeln, Familie und emotionaler Sicherheit.",
      5: "Ein besetztes Haus V hebt Kreativität, persönlichen Ausdruck, Freude, Romantik und das Bedürfnis hervor, eine einzigartige Spur zu hinterlassen.",
      6: "Ein besetztes Haus VI betont Organisation, Nützlichkeit, tägliche Verantwortung und die schrittweise Verbesserung Ihres Lebens.",
      7: "Ein besetztes Haus VII macht Beziehungen wesentlich für Ihre Entwicklung. Andere werden zu wichtigen Spiegeln Ihrer Persönlichkeit.",
      8: "Ein besetztes Haus VIII weist auf große emotionale Tiefe und Erfahrungen hin, die Ihre Lebensweise nachhaltig verändern können.",
      9: "Ein besetztes Haus IX verstärkt das Bedürfnis nach Sinnsuche, Horizonterweiterung und der Entwicklung einer persönlichen Weltsicht.",
      10: "Ein besetztes Haus X unterstreicht die Bedeutung von Berufung, Anerkennung, Verantwortung und dem Aufbau eines dauerhaften Werks.",
      11: "Ein besetztes Haus XI fördert Zukunftsprojekte, Netzwerke, gemeinschaftliche Anliegen und Beziehungen auf Grundlage einer geteilten Vision.",
      12: "Ein besetztes Haus XII verstärkt Sensibilität, Intuition, Innenleben und das Bedürfnis, unbewusste Mechanismen zu verstehen.",
    },
  },

  it: {
    labels: {
      analysis: "Analisi Firma",
      kicker: "Ambiti della vita",
      title: "Le tue dodici case astrologiche",
      lead:
        "Le case indicano in quali ambiti della tua esistenza le energie planetarie si esprimono più direttamente. Una casa occupata diventa spesso un luogo importante di esperienza, apprendimento ed evoluzione.",
      house: "Casa",
      noMainPlanet: "Nessun pianeta principale",
      oneMainPlanet: "1 pianeta principale",
      mainPlanets: "pianeti principali",
      dominantHouse: "La tua casa più occupata",
      undetermined: "Non determinata",
      noDominant:
        "Non è stato possibile determinare una casa dominante dai dati planetari disponibili.",
      planetsPresent: "Pianeti presenti:",
      signatureInsight: "Sguardo Firma",
      planetFallback: "Pianeta",
      note:
        "Una casa vuota non significa che un ambito della vita sia assente o privo di importanza. Indica semplicemente che nessuno dei dieci pianeti principali si trovava lì al momento della tua nascita.",
      fallbackInsight:
        "La distribuzione dei pianeti nelle case permette di capire dove si concentra la tua energia. Una casa vuota non è inattiva: il segno sulla cuspide e il suo governatore astrologico continuano a descriverne il funzionamento.",
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
    },
    titles: {
      1: "Identità e presenza",
      2: "Valori e risorse",
      3: "Pensiero e comunicazione",
      4: "Radici e vita interiore",
      5: "Creatività ed espressione",
      6: "Lavoro e vita quotidiana",
      7: "Relazioni e impegni",
      8: "Trasformazione e intimità",
      9: "Visione ed espansione",
      10: "Vocazione e realizzazione",
      11: "Progetti e comunità",
      12: "Inconscio e spiritualità",
    },
    keywords: {
      1: "Sé • Aspetto • Iniziativa",
      2: "Denaro • Sicurezza • Valori",
      3: "Scambi • Studi • Ambiente",
      4: "Famiglia • Casa • Radici",
      5: "Creazione • Piacere • Romanticismo",
      6: "Abitudini • Servizio • Salute",
      7: "Coppia • Contratti • Collaborazione",
      8: "Intimità • Crisi • Rinascita",
      9: "Viaggi • Credenze • Conoscenza",
      10: "Carriera • Ambizione • Reputazione",
      11: "Amicizie • Reti • Futuro",
      12: "Ritiro • Intuizione • Guarigione",
    },
    descriptions: {
      1: "La Casa I descrive il tuo modo spontaneo di entrare nella vita, la tua presenza, il tuo aspetto e il modo in cui affermi la tua individualità.",
      2: "La Casa II riguarda le tue risorse, il tuo rapporto con il denaro, il tuo senso di sicurezza e i valori su cui costruisci la tua stabilità.",
      3: "La Casa III descrive il tuo modo di imparare, comunicare, trasmettere le tue idee e interagire con l’ambiente immediato.",
      4: "La Casa IV rappresenta le tue radici, la tua famiglia, la tua casa, la tua memoria emotiva e le fondamenta più private della tua personalità.",
      5: "La Casa V riguarda la tua creatività, la capacità di brillare, i piaceri, gli slanci amorosi e il modo in cui esprimi la tua unicità.",
      6: "La Casa VI descrive la tua organizzazione quotidiana, il lavoro concreto, le abitudini, il senso del servizio e il rapporto con il benessere.",
      7: "La Casa VII rappresenta le relazioni impegnate, la coppia, le associazioni e le qualità che cerchi o scopri attraverso gli altri.",
      8: "La Casa VIII riguarda l’intimità, le risorse condivise, le crisi, gli attaccamenti profondi e la tua capacità di trasformazione interiore.",
      9: "La Casa IX rappresenta la tua visione del mondo, le credenze, gli studi superiori, i viaggi e il bisogno di ampliare la tua comprensione della vita.",
      10: "La Casa X descrive la tua vocazione, la tua ambizione, la tua immagine pubblica, il rapporto con il successo e il contributo che desideri lasciare.",
      11: "La Casa XI riguarda le amicizie, i gruppi, le reti, i progetti collettivi e le aspirazioni che costruisci per il futuro.",
      12: "La Casa XII rappresenta la tua vita interiore profonda, l’inconscio, i periodi di ritiro, la compassione e le dimensioni più sottili della tua esistenza.",
    },
    insights: {
      1: "Una Casa I occupata accentua il bisogno di agire secondo il tuo impulso e di sviluppare un’identità chiaramente assunta.",
      2: "Una Casa II occupata mette l’accento sulla costruzione della sicurezza, sull’autonomia materiale e sul riconoscimento del tuo valore.",
      3: "Una Casa III occupata rafforza il bisogno di comprendere, scambiare, imparare e creare legami attraverso le idee e la parola.",
      4: "Una Casa IV occupata intensifica l’importanza della casa, delle radici, della famiglia e del senso di sicurezza emotiva.",
      5: "Una Casa V occupata sottolinea la creatività, l’espressione personale, il piacere, il romanticismo e il bisogno di lasciare un’impronta unica.",
      6: "Una Casa VI occupata mette l’accento sull’organizzazione, sull’utilità, sulle responsabilità quotidiane e sul miglioramento progressivo della tua vita.",
      7: "Una Casa VII occupata rende le relazioni essenziali per la tua evoluzione. Gli altri diventano specchi importanti della tua personalità.",
      8: "Una Casa VIII occupata indica una grande profondità emotiva ed esperienze capaci di trasformare durevolmente il tuo modo di vivere.",
      9: "Una Casa IX occupata rafforza il bisogno di cercare significato, ampliare i tuoi orizzonti e sviluppare una visione personale del mondo.",
      10: "Una Casa X occupata sottolinea l’importanza della vocazione, del riconoscimento, delle responsabilità e della costruzione di un’opera duratura.",
      11: "Una Casa XI occupata favorisce i progetti futuri, le reti, le cause collettive e le relazioni basate su una visione condivisa.",
      12: "Una Casa XII occupata accentua la sensibilità, l’intuizione, la vita interiore e il bisogno di comprendere i meccanismi inconsci.",
    },
  },

  pt: {
    labels: {
      analysis: "Análise Assinatura",
      kicker: "Áreas da vida",
      title: "Suas doze casas astrológicas",
      lead:
        "As casas indicam em quais áreas da sua existência as energias planetárias se expressam mais diretamente. Uma casa ocupada muitas vezes se torna um espaço importante de experiência, aprendizado e evolução.",
      house: "Casa",
      noMainPlanet: "Nenhum planeta principal",
      oneMainPlanet: "1 planeta principal",
      mainPlanets: "planetas principais",
      dominantHouse: "Sua casa mais ocupada",
      undetermined: "Não determinada",
      noDominant:
        "Não foi possível determinar uma casa dominante a partir dos dados planetários disponíveis.",
      planetsPresent: "Planetas presentes:",
      signatureInsight: "Olhar Assinatura",
      planetFallback: "Planeta",
      note:
        "Uma casa vazia não significa que uma área da vida esteja ausente ou sem importância. Isso apenas indica que nenhum dos dez planetas principais estava ali no momento do seu nascimento.",
      fallbackInsight:
        "A distribuição dos planetas pelas casas permite compreender onde sua energia se concentra. Uma casa vazia não está inativa: o signo da cúspide e seu regente astrológico continuam descrevendo seu funcionamento.",
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
    },
    titles: {
      1: "Identidade e presença",
      2: "Valores e recursos",
      3: "Pensamento e comunicação",
      4: "Raízes e vida interior",
      5: "Criatividade e expressão",
      6: "Trabalho e vida cotidiana",
      7: "Relacionamentos e compromissos",
      8: "Transformação e intimidade",
      9: "Visão e expansão",
      10: "Vocação e realização",
      11: "Projetos e comunidade",
      12: "Inconsciente e espiritualidade",
    },
    keywords: {
      1: "Eu • Aparência • Iniciativa",
      2: "Dinheiro • Segurança • Valores",
      3: "Trocas • Estudos • Entorno",
      4: "Família • Lar • Raízes",
      5: "Criação • Prazer • Romance",
      6: "Hábitos • Serviço • Saúde",
      7: "Casal • Contratos • Parceria",
      8: "Intimidade • Crises • Renascimento",
      9: "Viagens • Crenças • Conhecimento",
      10: "Carreira • Ambição • Reputação",
      11: "Amizades • Redes • Futuro",
      12: "Recolhimento • Intuição • Cura",
    },
    descriptions: {
      1: "A Casa I descreve sua maneira espontânea de entrar na vida, sua presença, sua aparência e a forma como afirma sua individualidade.",
      2: "A Casa II diz respeito aos seus recursos, à sua relação com o dinheiro, ao seu senso de segurança e aos valores sobre os quais constrói sua estabilidade.",
      3: "A Casa III descreve sua forma de aprender, comunicar, transmitir suas ideias e interagir com seu ambiente imediato.",
      4: "A Casa IV representa suas raízes, sua família, seu lar, sua memória emocional e as bases mais privadas da sua personalidade.",
      5: "A Casa V diz respeito à sua criatividade, à capacidade de brilhar, aos prazeres, aos impulsos amorosos e à maneira como expressa sua singularidade.",
      6: "A Casa VI descreve sua organização cotidiana, seu trabalho concreto, seus hábitos, seu senso de serviço e sua relação com o bem-estar.",
      7: "A Casa VII representa relacionamentos comprometidos, o casal, associações e as qualidades que você busca ou descobre por meio dos outros.",
      8: "A Casa VIII diz respeito à intimidade, aos recursos compartilhados, às crises, aos vínculos profundos e à sua capacidade de transformação interior.",
      9: "A Casa IX representa sua visão de mundo, suas crenças, os estudos superiores, as viagens e sua necessidade de ampliar sua compreensão da vida.",
      10: "A Casa X descreve sua vocação, sua ambição, sua imagem pública, sua relação com o sucesso e a contribuição que deseja deixar.",
      11: "A Casa XI diz respeito às amizades, aos grupos, às redes, aos projetos coletivos e às aspirações que você constrói para o futuro.",
      12: "A Casa XII representa sua vida interior profunda, o inconsciente, os períodos de recolhimento, a compaixão e as dimensões mais sutis da sua existência.",
    },
    insights: {
      1: "Uma Casa I ocupada acentua a necessidade de agir segundo seu próprio impulso e desenvolver uma identidade claramente assumida.",
      2: "Uma Casa II ocupada enfatiza a construção da segurança, a autonomia material e o reconhecimento do seu próprio valor.",
      3: "Uma Casa III ocupada reforça a necessidade de compreender, trocar, aprender e criar vínculos por meio das ideias e da palavra.",
      4: "Uma Casa IV ocupada intensifica a importância do lar, das raízes, da família e do sentimento de segurança emocional.",
      5: "Uma Casa V ocupada destaca a criatividade, a expressão pessoal, o prazer, o romance e a necessidade de deixar uma marca única.",
      6: "Uma Casa VI ocupada enfatiza a organização, a utilidade, as responsabilidades cotidianas e a melhoria progressiva da sua vida.",
      7: "Uma Casa VII ocupada torna os relacionamentos essenciais para sua evolução. Os outros se tornam espelhos importantes da sua personalidade.",
      8: "Uma Casa VIII ocupada indica grande profundidade emocional e experiências capazes de transformar de forma duradoura sua maneira de viver.",
      9: "Uma Casa IX ocupada reforça a necessidade de buscar sentido, ampliar seus horizontes e desenvolver uma visão pessoal do mundo.",
      10: "Uma Casa X ocupada destaca a importância da vocação, do reconhecimento, das responsabilidades e da construção de uma obra duradoura.",
      11: "Uma Casa XI ocupada favorece projetos futuros, redes, causas coletivas e relacionamentos baseados em uma visão compartilhada.",
      12: "Uma Casa XII ocupada acentua a sensibilidade, a intuição, a vida interior e a necessidade de compreender mecanismos inconscientes.",
    },
  },
};

function replaceAll(
  source: string,
  from: string,
  to: string,
): string {
  return source.split(from).join(to);
}

export function localizeSignatureHouses(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const lang =
    locale as NonFrenchLocale;

  const copy = COPY[lang];
  const labels = copy.labels;

  let out =
    source.replace(/\r\n/g, "\n");

  const staticPairs:
  Array<[string, string]> = [
    ["Analyse Signature", labels.analysis],
    ["Domaines de vie", labels.kicker],
    ["Vos douze maisons astrologiques", labels.title],
    ["Votre maison la plus occupée", labels.dominantHouse],
    ["Non déterminée", labels.undetermined],
    [
      "Aucune maison dominante n’a pu être déterminée à partir des données planétaires disponibles.",
      labels.noDominant,
    ],
    ["Planètes présentes :", labels.planetsPresent],
    ["Regard Signature", labels.signatureInsight],
    ["Aucune planète principale", labels.noMainPlanet],
    ["Planète", labels.planetFallback],
  ];

  for (
    const [from, to] of staticPairs
  ) {
    out = replaceAll(
      out,
      from,
      to,
    );
  }

  out = out.replace(
    /Les maisons indiquent dans quels domaines de votre\s+existence les énergies planétaires s’expriment le plus\s+directement\. Une maison occupée devient souvent un lieu\s+important d’expérience, d’apprentissage et d’évolution\./g,
    labels.lead,
  );

  out = out.replace(
    /Une maison vide ne signifie pas qu’un domaine de vie est\s+absent ou sans importance\. Elle indique simplement qu’aucune\s+des dix principales planètes n’y était placée au moment de\s+votre naissance\./g,
    labels.note,
  );

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

  const titlesMap =
    JSON.stringify(copy.titles);

  const keywordsMap =
    JSON.stringify(copy.keywords);

  const descriptionsMap =
    JSON.stringify(copy.descriptions);

  const insightsMap =
    JSON.stringify(copy.insights);

  if (
    !out.includes(
      "const SIGNATURE_HOUSE_TITLES",
    )
  ) {
    const marker =
      "function getPlanetData(";

    const index =
      out.indexOf(marker);

    if (index >= 0) {
      const helper = `
const SIGNATURE_HOUSE_TITLES: Record<
  HouseNumber,
  string
> = ${titlesMap};

const SIGNATURE_HOUSE_KEYWORDS: Record<
  HouseNumber,
  string
> = ${keywordsMap};

const SIGNATURE_HOUSE_DESCRIPTIONS: Record<
  HouseNumber,
  string
> = ${descriptionsMap};

const SIGNATURE_HOUSE_INSIGHTS: Record<
  HouseNumber,
  string
> = ${insightsMap};

`;

      out =
        out.slice(0, index) +
        helper +
        out.slice(index);
    }
  }

  out = out.replace(
    /Maison \{house\}/g,
    `${labels.house} {house}`,
  );

  out = out.replace(
    /\{HOUSE_TITLES\[\s*house\s*\]\}/g,
    "{SIGNATURE_HOUSE_TITLES[house]}",
  );

  out = out.replace(
    /\{HOUSE_KEYWORDS\[\s*house\s*\]\}/g,
    "{SIGNATURE_HOUSE_KEYWORDS[house]}",
  );

  out = out.replace(
    /`Maison \$\{dominantHouse\} — \$\{HOUSE_TITLES\[dominantHouse\]\}`/g,
    `\`${labels.house} \${dominantHouse} — \${SIGNATURE_HOUSE_TITLES[dominantHouse]}\``,
  );

  out = out.replace(
    /HOUSE_DESCRIPTIONS\[\s*dominantHouse\s*\]/g,
    "SIGNATURE_HOUSE_DESCRIPTIONS[dominantHouse]",
  );

  out = out.replace(
    /HOUSE_SIGNATURE_INSIGHTS\[\s*dominantHouse\s*\]/g,
    "SIGNATURE_HOUSE_INSIGHTS[dominantHouse]",
  );

  out = out.replace(
    /"La répartition des planètes dans les maisons permet de comprendre où votre énergie se concentre\. Une maison vide n’est pas inactive : son signe d’entrée et son maître astrologique continuent de décrire son fonctionnement\."/g,
    JSON.stringify(
      labels.fallbackInsight,
    ),
  );

  out = out.replace(
    /"1 planète principale"/g,
    JSON.stringify(
      labels.oneMainPlanet,
    ),
  );

  out = out.replace(
    /`\$\{housePlanets\.length\} planètes principales`/g,
    `\`\${housePlanets.length} ${labels.mainPlanets}\``,
  );

  return out;
}
