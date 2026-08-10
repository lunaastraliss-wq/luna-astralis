import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

const COPY = {
  "en": {
    "labels": {
      "premiumSection": "Exclusive Premium section",
      "lifeAreas": "Areas of life",
      "title": "Your twelve astrological houses",
      "lead": "The houses indicate in which areas of your existence the planetary energies express themselves most directly. An occupied house often becomes an important place of experience, learning, and evolution.",
      "house": "House",
      "noPlanet": "No main planet",
      "onePlanet": "1 main planet",
      "manyPlanets": "{count} main planets",
      "mostOccupied": "Your most occupied house",
      "notDetermined": "Not determined",
      "presentPlanets": "Present planets",
      "premiumInsight": "Premium insight",
      "noDominant": "No dominant house could be determined from the available planetary data.",
      "emptyHouseInsight": "The distribution of planets among the houses helps reveal where your energy is concentrated. An empty house is not inactive: its cusp sign and astrological ruler continue to describe how it functions.",
      "note": "An empty house does not mean that an area of life is absent or unimportant. It simply indicates that none of the ten main planets were placed there at the time of your birth.",
      "planetFallback": "Planet"
    },
    "planetNames": {
      "Sun": "Sun",
      "Moon": "Moon",
      "Mercury": "Mercury",
      "Venus": "Venus",
      "Mars": "Mars",
      "Jupiter": "Jupiter",
      "Saturn": "Saturn",
      "Uranus": "Uranus",
      "Neptune": "Neptune",
      "Pluto": "Pluto",
      "Soleil": "Sun",
      "Lune": "Moon",
      "Mercure": "Mercury",
      "Vénus": "Venus",
      "Saturne": "Saturn",
      "Pluton": "Pluto"
    },
    "titles": {
      "1": "Identity and presence",
      "2": "Values and resources",
      "3": "Thought and communication",
      "4": "Roots and inner life",
      "5": "Creativity and expression",
      "6": "Work and daily life",
      "7": "Relationships and commitments",
      "8": "Transformation and intimacy",
      "9": "Vision and expansion",
      "10": "Vocation and fulfillment",
      "11": "Projects and community",
      "12": "Unconscious and spirituality"
    },
    "keywords": {
      "1": "Self • Appearance • Initiative",
      "2": "Money • Security • Values",
      "3": "Exchanges • Studies • Surroundings",
      "4": "Family • Home • Roots",
      "5": "Creation • Pleasure • Romance",
      "6": "Habits • Service • Health",
      "7": "Couple • Contracts • Partnership",
      "8": "Intimacy • Crises • Rebirth",
      "9": "Travel • Beliefs • Knowledge",
      "10": "Career • Ambition • Reputation",
      "11": "Friendships • Networks • Future",
      "12": "Withdrawal • Intuition • Healing"
    },
    "descriptions": {
      "1": "House I describes your spontaneous way of entering life, your presence, your appearance, and how you assert your individuality.",
      "2": "House II concerns your resources, your relationship with money, your sense of security, and the values on which you build your stability.",
      "3": "House III describes how you learn, communicate, convey your ideas, and interact with your immediate environment.",
      "4": "House IV represents your roots, your family, your home, your emotional memory, and the most private foundations of your personality.",
      "5": "House V concerns your creativity, your ability to shine, your pleasures, your romantic impulses, and how you express your uniqueness.",
      "6": "House VI describes your daily organization, your practical work, your habits, your sense of service, and your relationship with well-being.",
      "7": "House VII represents committed relationships, partnership, associations, and the qualities you seek or discover through others.",
      "8": "House VIII concerns intimacy, shared resources, crises, deep attachments, and your capacity for inner transformation.",
      "9": "House IX represents your worldview, your beliefs, higher studies, travel, and your need to broaden your understanding of life.",
      "10": "House X describes your vocation, ambition, public image, relationship with success, and the contribution you wish to leave behind.",
      "11": "House XI concerns friendships, groups, networks, collective projects, and the aspirations you build for the future.",
      "12": "House XII represents your deep inner life, the unconscious, periods of withdrawal, compassion, and the subtler dimensions of your existence."
    },
    "insights": {
      "1": "An occupied House I emphasizes the need to act according to your own impulse and to develop a clearly assumed identity.",
      "2": "An occupied House II emphasizes building security, material autonomy, and recognizing your own value.",
      "3": "An occupied House III strengthens the need to understand, exchange, learn, and create connections through ideas and speech.",
      "4": "An occupied House IV intensifies the importance of home, roots, family, and the feeling of emotional security.",
      "5": "An occupied House V highlights creativity, personal expression, pleasure, romance, and the need to leave a unique mark.",
      "6": "An occupied House VI emphasizes organization, usefulness, daily responsibilities, and the progressive improvement of your life.",
      "7": "An occupied House VII makes relationships essential to your evolution. Others become important mirrors of your personality.",
      "8": "An occupied House VIII indicates great emotional depth and experiences capable of permanently transforming your way of living.",
      "9": "An occupied House IX strengthens the need to seek meaning, broaden your horizons, and develop a personal worldview.",
      "10": "An occupied House X highlights the importance of vocation, recognition, responsibilities, and building something lasting.",
      "11": "An occupied House XI favors future projects, networks, collective causes, and relationships based on a shared vision.",
      "12": "An occupied House XII intensifies sensitivity, intuition, inner life, and the need to understand unconscious mechanisms."
    }
  },
  "es": {
    "labels": {
      "premiumSection": "Sección Premium exclusiva",
      "lifeAreas": "Ámbitos de vida",
      "title": "Tus doce casas astrológicas",
      "lead": "Las casas indican en qué ámbitos de tu existencia se expresan más directamente las energías planetarias. Una casa ocupada suele convertirse en un lugar importante de experiencia, aprendizaje y evolución.",
      "house": "Casa",
      "noPlanet": "Ningún planeta principal",
      "onePlanet": "1 planeta principal",
      "manyPlanets": "{count} planetas principales",
      "mostOccupied": "Tu casa más ocupada",
      "notDetermined": "No determinada",
      "presentPlanets": "Planetas presentes",
      "premiumInsight": "Perspectiva Premium",
      "noDominant": "No se pudo determinar una casa dominante a partir de los datos planetarios disponibles.",
      "emptyHouseInsight": "La distribución de los planetas en las casas permite comprender dónde se concentra tu energía. Una casa vacía no está inactiva: su signo de entrada y su regente astrológico continúan describiendo su funcionamiento.",
      "note": "Una casa vacía no significa que un ámbito de vida esté ausente o carezca de importancia. Simplemente indica que ninguno de los diez planetas principales estaba situado allí en el momento de tu nacimiento.",
      "planetFallback": "Planeta"
    },
    "planetNames": {
      "Sun": "Sol",
      "Moon": "Luna",
      "Mercury": "Mercurio",
      "Venus": "Venus",
      "Mars": "Marte",
      "Jupiter": "Júpiter",
      "Saturn": "Saturno",
      "Uranus": "Urano",
      "Neptune": "Neptuno",
      "Pluto": "Plutón",
      "Soleil": "Sol",
      "Lune": "Luna",
      "Mercure": "Mercurio",
      "Vénus": "Venus",
      "Saturne": "Saturno",
      "Pluton": "Plutón"
    },
    "titles": {
      "1": "Identidad y presencia",
      "2": "Valores y recursos",
      "3": "Pensamiento y comunicación",
      "4": "Raíces y vida interior",
      "5": "Creatividad y expresión",
      "6": "Trabajo y vida cotidiana",
      "7": "Relaciones y compromisos",
      "8": "Transformación e intimidad",
      "9": "Visión y expansión",
      "10": "Vocación y realización",
      "11": "Proyectos y comunidad",
      "12": "Inconsciente y espiritualidad"
    },
    "keywords": {
      "1": "Yo • Apariencia • Iniciativa",
      "2": "Dinero • Seguridad • Valores",
      "3": "Intercambios • Estudios • Entorno",
      "4": "Familia • Hogar • Raíces",
      "5": "Creación • Placer • Romance",
      "6": "Hábitos • Servicio • Salud",
      "7": "Pareja • Contratos • Asociación",
      "8": "Intimidad • Crisis • Renacimiento",
      "9": "Viajes • Creencias • Conocimiento",
      "10": "Carrera • Ambición • Reputación",
      "11": "Amistades • Redes • Futuro",
      "12": "Retiro • Intuición • Sanación"
    },
    "descriptions": {
      "1": "La casa I describe tu manera espontánea de entrar en la vida, tu presencia, tu apariencia y la forma en que afirmas tu individualidad.",
      "2": "La casa II se relaciona con tus recursos, tu relación con el dinero, tu sensación de seguridad y los valores sobre los que construyes tu estabilidad.",
      "3": "La casa III describe tu manera de aprender, comunicar, transmitir tus ideas e interactuar con tu entorno inmediato.",
      "4": "La casa IV representa tus raíces, tu familia, tu hogar, tu memoria emocional y los fundamentos más privados de tu personalidad.",
      "5": "La casa V se relaciona con tu creatividad, tu capacidad de brillar, tus placeres, tus impulsos amorosos y tu manera de expresar tu singularidad.",
      "6": "La casa VI describe tu organización cotidiana, tu trabajo concreto, tus hábitos, tu sentido del servicio y tu relación con el bienestar.",
      "7": "La casa VII representa las relaciones comprometidas, la pareja, las asociaciones y las cualidades que buscas o descubres a través de los demás.",
      "8": "La casa VIII se relaciona con la intimidad, los recursos compartidos, las crisis, los vínculos profundos y tu capacidad de transformación interior.",
      "9": "La casa IX representa tu visión del mundo, tus creencias, los estudios superiores, los viajes y tu necesidad de ampliar tu comprensión de la vida.",
      "10": "La casa X describe tu vocación, tu ambición, tu imagen pública, tu relación con el éxito y la contribución que deseas dejar.",
      "11": "La casa XI se relaciona con las amistades, los grupos, las redes, los proyectos colectivos y las aspiraciones que construyes para el futuro.",
      "12": "La casa XII representa tu vida interior profunda, el inconsciente, los períodos de retiro, la compasión y las dimensiones más sutiles de tu existencia."
    },
    "insights": {
      "1": "Una casa I ocupada acentúa la necesidad de actuar según tu propio impulso y desarrollar una identidad claramente asumida.",
      "2": "Una casa II ocupada pone el acento en la construcción de la seguridad, la autonomía material y el reconocimiento de tu propio valor.",
      "3": "Una casa III ocupada refuerza la necesidad de comprender, intercambiar, aprender y crear vínculos mediante las ideas y la palabra.",
      "4": "Una casa IV ocupada intensifica la importancia del hogar, las raíces, la familia y la sensación de seguridad emocional.",
      "5": "Una casa V ocupada destaca la creatividad, la expresión personal, el placer, el romance y la necesidad de dejar una huella única.",
      "6": "Una casa VI ocupada pone el acento en la organización, la utilidad, las responsabilidades cotidianas y la mejora progresiva de tu vida.",
      "7": "Una casa VII ocupada hace que las relaciones sean esenciales para tu evolución. Los demás se convierten en espejos importantes de tu personalidad.",
      "8": "Una casa VIII ocupada indica una gran profundidad emocional y experiencias capaces de transformar duraderamente tu manera de vivir.",
      "9": "Una casa IX ocupada refuerza la necesidad de buscar sentido, ampliar tus horizontes y desarrollar una visión personal del mundo.",
      "10": "Una casa X ocupada destaca la importancia de la vocación, el reconocimiento, las responsabilidades y la construcción de una obra duradera.",
      "11": "Una casa XI ocupada favorece los proyectos de futuro, las redes, las causas colectivas y las relaciones basadas en una visión compartida.",
      "12": "Una casa XII ocupada acentúa la sensibilidad, la intuición, la vida interior y la necesidad de comprender los mecanismos inconscientes."
    }
  },
  "de": {
    "labels": {
      "premiumSection": "Exklusiver Premium-Bereich",
      "lifeAreas": "Lebensbereiche",
      "title": "Ihre zwölf astrologischen Häuser",
      "lead": "Die Häuser zeigen, in welchen Lebensbereichen sich die planetarischen Energien am unmittelbarsten ausdrücken. Ein besetztes Haus wird oft zu einem wichtigen Ort für Erfahrung, Lernen und Entwicklung.",
      "house": "Haus",
      "noPlanet": "Kein Hauptplanet",
      "onePlanet": "1 Hauptplanet",
      "manyPlanets": "{count} Hauptplaneten",
      "mostOccupied": "Ihr am stärksten besetztes Haus",
      "notDetermined": "Nicht bestimmt",
      "presentPlanets": "Vorhandene Planeten",
      "premiumInsight": "Premium-Einblick",
      "noDominant": "Aus den verfügbaren Planetendaten konnte kein dominantes Haus bestimmt werden.",
      "emptyHouseInsight": "Die Verteilung der Planeten auf die Häuser zeigt, wo sich Ihre Energie konzentriert. Ein leeres Haus ist nicht inaktiv: Sein Zeichen an der Spitze und sein astrologischer Herrscher beschreiben weiterhin seine Funktionsweise.",
      "note": "Ein leeres Haus bedeutet nicht, dass ein Lebensbereich fehlt oder unwichtig ist. Es zeigt lediglich, dass sich zum Zeitpunkt Ihrer Geburt keiner der zehn Hauptplaneten dort befand.",
      "planetFallback": "Planet"
    },
    "planetNames": {
      "Sun": "Sonne",
      "Moon": "Mond",
      "Mercury": "Merkur",
      "Venus": "Venus",
      "Mars": "Mars",
      "Jupiter": "Jupiter",
      "Saturn": "Saturn",
      "Uranus": "Uranus",
      "Neptune": "Neptun",
      "Pluto": "Pluto",
      "Soleil": "Sonne",
      "Lune": "Mond",
      "Mercure": "Merkur",
      "Vénus": "Venus",
      "Saturne": "Saturn",
      "Pluton": "Pluto"
    },
    "titles": {
      "1": "Identität und Präsenz",
      "2": "Werte und Ressourcen",
      "3": "Denken und Kommunikation",
      "4": "Wurzeln und Innenleben",
      "5": "Kreativität und Ausdruck",
      "6": "Arbeit und Alltag",
      "7": "Beziehungen und Verpflichtungen",
      "8": "Transformation und Intimität",
      "9": "Vision und Erweiterung",
      "10": "Berufung und Verwirklichung",
      "11": "Projekte und Gemeinschaft",
      "12": "Unbewusstes und Spiritualität"
    },
    "keywords": {
      "1": "Selbst • Erscheinung • Initiative",
      "2": "Geld • Sicherheit • Werte",
      "3": "Austausch • Studium • Umfeld",
      "4": "Familie • Zuhause • Wurzeln",
      "5": "Schöpfung • Freude • Romantik",
      "6": "Gewohnheiten • Dienst • Gesundheit",
      "7": "Partnerschaft • Verträge • Verbindung",
      "8": "Intimität • Krisen • Wiedergeburt",
      "9": "Reisen • Überzeugungen • Wissen",
      "10": "Karriere • Ehrgeiz • Ruf",
      "11": "Freundschaften • Netzwerke • Zukunft",
      "12": "Rückzug • Intuition • Heilung"
    },
    "descriptions": {
      "1": "Haus I beschreibt Ihre spontane Art, ins Leben zu treten, Ihre Präsenz, Ihr Erscheinungsbild und wie Sie Ihre Individualität behaupten.",
      "2": "Haus II betrifft Ihre Ressourcen, Ihren Umgang mit Geld, Ihr Sicherheitsgefühl und die Werte, auf denen Sie Ihre Stabilität aufbauen.",
      "3": "Haus III beschreibt Ihre Art zu lernen, zu kommunizieren, Ideen zu vermitteln und mit Ihrem unmittelbaren Umfeld zu interagieren.",
      "4": "Haus IV steht für Ihre Wurzeln, Ihre Familie, Ihr Zuhause, Ihr emotionales Gedächtnis und die privatesten Grundlagen Ihrer Persönlichkeit.",
      "5": "Haus V betrifft Ihre Kreativität, Ihre Fähigkeit zu strahlen, Ihre Freuden, romantischen Impulse und die Art, wie Sie Ihre Einzigartigkeit ausdrücken.",
      "6": "Haus VI beschreibt Ihre tägliche Organisation, praktische Arbeit, Gewohnheiten, Ihren Sinn für Dienst und Ihr Verhältnis zum Wohlbefinden.",
      "7": "Haus VII steht für verbindliche Beziehungen, Partnerschaft, Zusammenschlüsse und die Qualitäten, die Sie durch andere suchen oder entdecken.",
      "8": "Haus VIII betrifft Intimität, geteilte Ressourcen, Krisen, tiefe Bindungen und Ihre Fähigkeit zur inneren Transformation.",
      "9": "Haus IX steht für Ihre Weltsicht, Überzeugungen, höhere Bildung, Reisen und Ihr Bedürfnis, Ihr Verständnis des Lebens zu erweitern.",
      "10": "Haus X beschreibt Ihre Berufung, Ihren Ehrgeiz, Ihr öffentliches Bild, Ihr Verhältnis zum Erfolg und den Beitrag, den Sie hinterlassen möchten.",
      "11": "Haus XI betrifft Freundschaften, Gruppen, Netzwerke, Gemeinschaftsprojekte und die Zukunftsziele, die Sie aufbauen.",
      "12": "Haus XII steht für Ihr tiefes Innenleben, das Unbewusste, Rückzugsphasen, Mitgefühl und die subtileren Dimensionen Ihrer Existenz."
    },
    "insights": {
      "1": "Ein besetztes Haus I betont das Bedürfnis, dem eigenen Impuls zu folgen und eine klar angenommene Identität zu entwickeln.",
      "2": "Ein besetztes Haus II betont Sicherheit, materielle Selbstständigkeit und die Anerkennung des eigenen Wertes.",
      "3": "Ein besetztes Haus III verstärkt das Bedürfnis zu verstehen, sich auszutauschen, zu lernen und durch Ideen und Sprache Verbindungen zu schaffen.",
      "4": "Ein besetztes Haus IV verstärkt die Bedeutung von Zuhause, Wurzeln, Familie und emotionaler Sicherheit.",
      "5": "Ein besetztes Haus V hebt Kreativität, Selbstausdruck, Freude, Romantik und das Bedürfnis hervor, eine einzigartige Spur zu hinterlassen.",
      "6": "Ein besetztes Haus VI betont Organisation, Nützlichkeit, tägliche Verantwortung und die schrittweise Verbesserung Ihres Lebens.",
      "7": "Ein besetztes Haus VII macht Beziehungen wesentlich für Ihre Entwicklung. Andere werden zu wichtigen Spiegeln Ihrer Persönlichkeit.",
      "8": "Ein besetztes Haus VIII weist auf große emotionale Tiefe und Erfahrungen hin, die Ihre Lebensweise nachhaltig verändern können.",
      "9": "Ein besetztes Haus IX verstärkt das Bedürfnis, Sinn zu suchen, Horizonte zu erweitern und eine persönliche Weltsicht zu entwickeln.",
      "10": "Ein besetztes Haus X hebt Berufung, Anerkennung, Verantwortung und den Aufbau eines dauerhaften Werkes hervor.",
      "11": "Ein besetztes Haus XI begünstigt Zukunftsprojekte, Netzwerke, kollektive Anliegen und Beziehungen auf Grundlage einer gemeinsamen Vision.",
      "12": "Ein besetztes Haus XII verstärkt Sensibilität, Intuition, Innenleben und das Bedürfnis, unbewusste Mechanismen zu verstehen."
    }
  },
  "it": {
    "labels": {
      "premiumSection": "Sezione Premium esclusiva",
      "lifeAreas": "Ambiti della vita",
      "title": "Le tue dodici case astrologiche",
      "lead": "Le case indicano in quali ambiti della tua esistenza le energie planetarie si esprimono più direttamente. Una casa occupata diventa spesso un luogo importante di esperienza, apprendimento ed evoluzione.",
      "house": "Casa",
      "noPlanet": "Nessun pianeta principale",
      "onePlanet": "1 pianeta principale",
      "manyPlanets": "{count} pianeti principali",
      "mostOccupied": "La tua casa più occupata",
      "notDetermined": "Non determinata",
      "presentPlanets": "Pianeti presenti",
      "premiumInsight": "Approfondimento Premium",
      "noDominant": "Non è stato possibile determinare una casa dominante dai dati planetari disponibili.",
      "emptyHouseInsight": "La distribuzione dei pianeti nelle case permette di capire dove si concentra la tua energia. Una casa vuota non è inattiva: il segno sulla cuspide e il suo governatore astrologico continuano a descriverne il funzionamento.",
      "note": "Una casa vuota non significa che un ambito della vita sia assente o privo di importanza. Indica semplicemente che nessuno dei dieci pianeti principali si trovava lì al momento della tua nascita.",
      "planetFallback": "Pianeta"
    },
    "planetNames": {
      "Sun": "Sole",
      "Moon": "Luna",
      "Mercury": "Mercurio",
      "Venus": "Venere",
      "Mars": "Marte",
      "Jupiter": "Giove",
      "Saturn": "Saturno",
      "Uranus": "Urano",
      "Neptune": "Nettuno",
      "Pluto": "Plutone",
      "Soleil": "Sole",
      "Lune": "Luna",
      "Mercure": "Mercurio",
      "Vénus": "Venere",
      "Saturne": "Saturno",
      "Pluton": "Plutone"
    },
    "titles": {
      "1": "Identità e presenza",
      "2": "Valori e risorse",
      "3": "Pensiero e comunicazione",
      "4": "Radici e vita interiore",
      "5": "Creatività ed espressione",
      "6": "Lavoro e quotidianità",
      "7": "Relazioni e impegni",
      "8": "Trasformazione e intimità",
      "9": "Visione ed espansione",
      "10": "Vocazione e realizzazione",
      "11": "Progetti e comunità",
      "12": "Inconscio e spiritualità"
    },
    "keywords": {
      "1": "Sé • Aspetto • Iniziativa",
      "2": "Denaro • Sicurezza • Valori",
      "3": "Scambi • Studi • Ambiente",
      "4": "Famiglia • Casa • Radici",
      "5": "Creazione • Piacere • Romanticismo",
      "6": "Abitudini • Servizio • Salute",
      "7": "Coppia • Contratti • Partnership",
      "8": "Intimità • Crisi • Rinascita",
      "9": "Viaggi • Convinzioni • Conoscenza",
      "10": "Carriera • Ambizione • Reputazione",
      "11": "Amicizie • Reti • Futuro",
      "12": "Ritiro • Intuizione • Guarigione"
    },
    "descriptions": {
      "1": "La casa I descrive il tuo modo spontaneo di entrare nella vita, la tua presenza, il tuo aspetto e il modo in cui affermi la tua individualità.",
      "2": "La casa II riguarda le tue risorse, il rapporto con il denaro, il senso di sicurezza e i valori sui quali costruisci la tua stabilità.",
      "3": "La casa III descrive il tuo modo di imparare, comunicare, trasmettere idee e interagire con l'ambiente immediato.",
      "4": "La casa IV rappresenta le tue radici, la famiglia, la casa, la memoria emotiva e le fondamenta più private della tua personalità.",
      "5": "La casa V riguarda la creatività, la capacità di brillare, i piaceri, gli slanci amorosi e il modo in cui esprimi la tua unicità.",
      "6": "La casa VI descrive l'organizzazione quotidiana, il lavoro concreto, le abitudini, il senso del servizio e il rapporto con il benessere.",
      "7": "La casa VII rappresenta le relazioni impegnate, la coppia, le associazioni e le qualità che cerchi o scopri attraverso gli altri.",
      "8": "La casa VIII riguarda l'intimità, le risorse condivise, le crisi, i legami profondi e la tua capacità di trasformazione interiore.",
      "9": "La casa IX rappresenta la tua visione del mondo, le convinzioni, gli studi superiori, i viaggi e il bisogno di ampliare la comprensione della vita.",
      "10": "La casa X descrive la vocazione, l'ambizione, l'immagine pubblica, il rapporto con il successo e il contributo che desideri lasciare.",
      "11": "La casa XI riguarda le amicizie, i gruppi, le reti, i progetti collettivi e le aspirazioni che costruisci per il futuro.",
      "12": "La casa XII rappresenta la tua vita interiore profonda, l'inconscio, i periodi di ritiro, la compassione e le dimensioni più sottili della tua esistenza."
    },
    "insights": {
      "1": "Una casa I occupata accentua il bisogno di agire secondo il tuo impulso e di sviluppare un'identità chiaramente assunta.",
      "2": "Una casa II occupata mette l'accento sulla costruzione della sicurezza, sull'autonomia materiale e sul riconoscimento del tuo valore.",
      "3": "Una casa III occupata rafforza il bisogno di comprendere, scambiare, imparare e creare legami attraverso idee e parole.",
      "4": "Una casa IV occupata intensifica l'importanza della casa, delle radici, della famiglia e del senso di sicurezza emotiva.",
      "5": "Una casa V occupata sottolinea creatività, espressione personale, piacere, romanticismo e il bisogno di lasciare un'impronta unica.",
      "6": "Una casa VI occupata mette l'accento su organizzazione, utilità, responsabilità quotidiane e miglioramento progressivo della vita.",
      "7": "Una casa VII occupata rende le relazioni essenziali per la tua evoluzione. Gli altri diventano specchi importanti della tua personalità.",
      "8": "Una casa VIII occupata indica grande profondità emotiva ed esperienze capaci di trasformare durevolmente il tuo modo di vivere.",
      "9": "Una casa IX occupata rafforza il bisogno di cercare significato, ampliare gli orizzonti e sviluppare una visione personale del mondo.",
      "10": "Una casa X occupata sottolinea l'importanza della vocazione, del riconoscimento, delle responsabilità e della costruzione di un'opera duratura.",
      "11": "Una casa XI occupata favorisce progetti futuri, reti, cause collettive e relazioni basate su una visione condivisa.",
      "12": "Una casa XII occupata accentua sensibilità, intuizione, vita interiore e il bisogno di comprendere i meccanismi inconsci."
    }
  },
  "pt": {
    "labels": {
      "premiumSection": "Seção Premium exclusiva",
      "lifeAreas": "Áreas da vida",
      "title": "Suas doze casas astrológicas",
      "lead": "As casas indicam em quais áreas da sua existência as energias planetárias se expressam de forma mais direta. Uma casa ocupada costuma se tornar um importante campo de experiência, aprendizagem e evolução.",
      "house": "Casa",
      "noPlanet": "Nenhum planeta principal",
      "onePlanet": "1 planeta principal",
      "manyPlanets": "{count} planetas principais",
      "mostOccupied": "Sua casa mais ocupada",
      "notDetermined": "Não determinada",
      "presentPlanets": "Planetas presentes",
      "premiumInsight": "Perspectiva Premium",
      "noDominant": "Não foi possível determinar uma casa dominante a partir dos dados planetários disponíveis.",
      "emptyHouseInsight": "A distribuição dos planetas nas casas ajuda a compreender onde sua energia se concentra. Uma casa vazia não está inativa: o signo de sua cúspide e seu regente astrológico continuam descrevendo seu funcionamento.",
      "note": "Uma casa vazia não significa que uma área da vida esteja ausente ou sem importância. Ela apenas indica que nenhum dos dez planetas principais estava ali no momento do seu nascimento.",
      "planetFallback": "Planeta"
    },
    "planetNames": {
      "Sun": "Sol",
      "Moon": "Lua",
      "Mercury": "Mercúrio",
      "Venus": "Vênus",
      "Mars": "Marte",
      "Jupiter": "Júpiter",
      "Saturn": "Saturno",
      "Uranus": "Urano",
      "Neptune": "Netuno",
      "Pluto": "Plutão",
      "Soleil": "Sol",
      "Lune": "Lua",
      "Mercure": "Mercúrio",
      "Vénus": "Vênus",
      "Saturne": "Saturno",
      "Pluton": "Plutão"
    },
    "titles": {
      "1": "Identidade e presença",
      "2": "Valores e recursos",
      "3": "Pensamento e comunicação",
      "4": "Raízes e vida interior",
      "5": "Criatividade e expressão",
      "6": "Trabalho e cotidiano",
      "7": "Relacionamentos e compromissos",
      "8": "Transformação e intimidade",
      "9": "Visão e expansão",
      "10": "Vocação e realização",
      "11": "Projetos e comunidade",
      "12": "Inconsciente e espiritualidade"
    },
    "keywords": {
      "1": "Eu • Aparência • Iniciativa",
      "2": "Dinheiro • Segurança • Valores",
      "3": "Trocas • Estudos • Ambiente",
      "4": "Família • Lar • Raízes",
      "5": "Criação • Prazer • Romance",
      "6": "Hábitos • Serviço • Saúde",
      "7": "Casal • Contratos • Parceria",
      "8": "Intimidade • Crises • Renascimento",
      "9": "Viagens • Crenças • Conhecimento",
      "10": "Carreira • Ambição • Reputação",
      "11": "Amizades • Redes • Futuro",
      "12": "Retiro • Intuição • Cura"
    },
    "descriptions": {
      "1": "A casa I descreve sua maneira espontânea de entrar na vida, sua presença, sua aparência e a forma como afirma sua individualidade.",
      "2": "A casa II diz respeito aos seus recursos, à sua relação com o dinheiro, ao seu senso de segurança e aos valores sobre os quais constrói sua estabilidade.",
      "3": "A casa III descreve sua maneira de aprender, comunicar, transmitir ideias e interagir com o ambiente imediato.",
      "4": "A casa IV representa suas raízes, sua família, seu lar, sua memória emocional e as bases mais privadas da sua personalidade.",
      "5": "A casa V diz respeito à sua criatividade, capacidade de brilhar, prazeres, impulsos amorosos e à forma como expressa sua singularidade.",
      "6": "A casa VI descreve sua organização cotidiana, seu trabalho concreto, seus hábitos, seu senso de serviço e sua relação com o bem-estar.",
      "7": "A casa VII representa relacionamentos comprometidos, o casal, associações e as qualidades que você busca ou descobre através dos outros.",
      "8": "A casa VIII diz respeito à intimidade, aos recursos compartilhados, às crises, aos vínculos profundos e à sua capacidade de transformação interior.",
      "9": "A casa IX representa sua visão de mundo, suas crenças, os estudos superiores, as viagens e sua necessidade de ampliar a compreensão da vida.",
      "10": "A casa X descreve sua vocação, ambição, imagem pública, relação com o sucesso e a contribuição que deseja deixar.",
      "11": "A casa XI diz respeito às amizades, grupos, redes, projetos coletivos e às aspirações que você constrói para o futuro.",
      "12": "A casa XII representa sua vida interior profunda, o inconsciente, períodos de retiro, compaixão e as dimensões mais sutis da sua existência."
    },
    "insights": {
      "1": "Uma casa I ocupada acentua a necessidade de agir segundo seu próprio impulso e desenvolver uma identidade claramente assumida.",
      "2": "Uma casa II ocupada enfatiza a construção da segurança, a autonomia material e o reconhecimento do próprio valor.",
      "3": "Uma casa III ocupada reforça a necessidade de compreender, trocar, aprender e criar vínculos por meio de ideias e palavras.",
      "4": "Uma casa IV ocupada intensifica a importância do lar, das raízes, da família e do sentimento de segurança emocional.",
      "5": "Uma casa V ocupada destaca criatividade, expressão pessoal, prazer, romance e a necessidade de deixar uma marca única.",
      "6": "Uma casa VI ocupada enfatiza organização, utilidade, responsabilidades cotidianas e a melhoria progressiva da sua vida.",
      "7": "Uma casa VII ocupada torna os relacionamentos essenciais para sua evolução. Os outros se tornam espelhos importantes da sua personalidade.",
      "8": "Uma casa VIII ocupada indica grande profundidade emocional e experiências capazes de transformar de forma duradoura sua maneira de viver.",
      "9": "Uma casa IX ocupada reforça a necessidade de buscar sentido, ampliar horizontes e desenvolver uma visão pessoal do mundo.",
      "10": "Uma casa X ocupada destaca a importância da vocação, do reconhecimento, das responsabilidades e da construção de uma obra duradoura.",
      "11": "Uma casa XI ocupada favorece projetos de futuro, redes, causas coletivas e relacionamentos baseados em uma visão compartilhada.",
      "12": "Uma casa XII ocupada acentua sensibilidade, intuição, vida interior e a necessidade de compreender mecanismos inconscientes."
    }
  }
} as const;

function injectRuntime(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "const PREMIUM_HOUSES_LOCALIZATION =",
    )
  ) {
    return source;
  }

  const c = COPY[locale];

  const runtime = `
const PREMIUM_HOUSES_LOCALIZATION = ${JSON.stringify(c, null, 2)} as const;

function fillPremiumHouseTemplate(
  template: string,
  values: Record<string, string>,
): string {
  return template.replace(
    /\\{([a-z0-9]+)\\}/gi,
    (_full, key: string) =>
      values[key] ?? "",
  );
}

function getLocalizedHouseTitle(
  house: HouseNumber,
): string {
  return (
    PREMIUM_HOUSES_LOCALIZATION
      .titles[String(house) as keyof typeof PREMIUM_HOUSES_LOCALIZATION.titles] ||
    HOUSE_TITLES[house]
  );
}

function getLocalizedHouseKeywords(
  house: HouseNumber,
): string {
  return (
    PREMIUM_HOUSES_LOCALIZATION
      .keywords[String(house) as keyof typeof PREMIUM_HOUSES_LOCALIZATION.keywords] ||
    HOUSE_KEYWORDS[house]
  );
}

function getLocalizedHouseDescription(
  house: HouseNumber,
): string {
  return (
    PREMIUM_HOUSES_LOCALIZATION
      .descriptions[String(house) as keyof typeof PREMIUM_HOUSES_LOCALIZATION.descriptions] ||
    HOUSE_DESCRIPTIONS[house]
  );
}

function getLocalizedHouseInsight(
  house: HouseNumber,
): string {
  return (
    PREMIUM_HOUSES_LOCALIZATION
      .insights[String(house) as keyof typeof PREMIUM_HOUSES_LOCALIZATION.insights] ||
    HOUSE_PREMIUM_INSIGHTS[house]
  );
}

function getLocalizedHousePlanetName(
  value: string,
): string {
  const names =
    PREMIUM_HOUSES_LOCALIZATION.planetNames as Record<string, string>;

  return (
    names[value] ||
    value ||
    PREMIUM_HOUSES_LOCALIZATION
      .labels.planetFallback
  );
}

function getLocalizedHousePlanetNames(
  planets: PremiumPlanet[],
): string {
  if (planets.length === 0) {
    return PREMIUM_HOUSES_LOCALIZATION
      .labels.noPlanet;
  }

  return planets
    .map((planet) => {
      const name =
        typeof planet.name === "string"
          ? planet.name
          : "";

      return getLocalizedHousePlanetName(
        name,
      );
    })
    .join(", ");
}

function getLocalizedHousePlanetCount(
  count: number,
): string {
  if (count === 0) {
    return PREMIUM_HOUSES_LOCALIZATION
      .labels.noPlanet;
  }

  if (count === 1) {
    return PREMIUM_HOUSES_LOCALIZATION
      .labels.onePlanet;
  }

  return fillPremiumHouseTemplate(
    PREMIUM_HOUSES_LOCALIZATION
      .labels.manyPlanets,
    {
      count: String(count),
    },
  );
}

function getLocalizedHouseLabel(
  house: HouseNumber,
): string {
  return `\${PREMIUM_HOUSES_LOCALIZATION.labels.house} \${house}`;
}

function getLocalizedDominantHouseTitle(
  house: HouseNumber | null,
): string {
  if (!house) {
    return PREMIUM_HOUSES_LOCALIZATION
      .labels.notDetermined;
  }

  return `\${PREMIUM_HOUSES_LOCALIZATION.labels.house} \${house} — \${getLocalizedHouseTitle(house)}`;
}

`;

  const marker =
    "const styles = StyleSheet.create({";

  if (!source.includes(marker)) {
    return source;
  }

  return source.replace(
    marker,
    runtime + marker,
  );
}

function flexibleReplace(
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

export function localizePremiumHouses(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const safeLocale =
    locale as NonFrenchLocale;

  const c = COPY[safeLocale];

  let out = injectRuntime(
    source,
    safeLocale,
  );

  const literals: Array<
    [string, string]
  > = [
    [
      "Section exclusive Premium",
      c.labels.premiumSection,
    ],
    [
      "Domaines de vie",
      c.labels.lifeAreas,
    ],
    [
      "Vos douze maisons astrologiques",
      c.labels.title,
    ],
    [
      "Les maisons indiquent dans quels domaines de votre existence les énergies planétaires s’expriment le plus directement. Une maison occupée devient souvent un lieu important d’expérience, d’apprentissage et d’évolution.",
      c.labels.lead,
    ],
    [
      "Votre maison la plus occupée",
      c.labels.mostOccupied,
    ],
    [
      "Planètes présentes :",
      c.labels.presentPlanets + " :",
    ],
    [
      "Regard Premium",
      c.labels.premiumInsight,
    ],
    [
      "Une maison vide ne signifie pas qu’un domaine de vie est absent ou sans importance. Elle indique simplement qu’aucune des dix principales planètes n’y était placée au moment de votre naissance.",
      c.labels.note,
    ],
  ];

  for (
    const [
      from,
      to,
    ] of literals
  ) {
    out = flexibleReplace(
      out,
      from,
      to,
    );
  }

  /*
   * Étiquettes "Maison 1", etc.
   */
  out = out.replace(
    /Maison \{house\}/g,
    "{getLocalizedHouseLabel(house)}",
  );

  /*
   * Titres et mots-clés des 12 maisons.
   */
  out = out.replace(
    /HOUSE_TITLES\[\s*house\s*\]/g,
    "getLocalizedHouseTitle(house)",
  );

  out = out.replace(
    /HOUSE_KEYWORDS\[\s*house\s*\]/g,
    "getLocalizedHouseKeywords(house)",
  );

  /*
   * Nombre de planètes.
   */
  out = out.replace(
    /\{housePlanets\.length === 0[\s\S]*?`\$\{housePlanets\.length\} planètes principales`\}/g,
    "{getLocalizedHousePlanetCount(housePlanets.length)}",
  );

  /*
   * Noms des planètes.
   */
  out = out.replace(
    /getPlanetNames\(\s*housePlanets\s*\)/g,
    "getLocalizedHousePlanetNames(housePlanets)",
  );

  out = out.replace(
    /getPlanetNames\(\s*dominantPlanets\s*\)/g,
    "getLocalizedHousePlanetNames(dominantPlanets)",
  );

  /*
   * Titre de la maison dominante.
   */
  out = out.replace(
    /\{dominantHouse\s*\?\s*`Maison \$\{dominantHouse\} — \$\{HOUSE_TITLES\[dominantHouse\]\}`\s*:\s*"Non déterminée"\}/g,
    "{getLocalizedDominantHouseTitle(dominantHouse)}",
  );

  /*
   * Description de la maison dominante.
   */
  out = out.replace(
    /\{dominantHouse\s*\?\s*HOUSE_DESCRIPTIONS\[\s*dominantHouse\s*\]\s*:\s*"Aucune maison dominante n’a pu être déterminée à partir des données planétaires disponibles\."\}/g,
    "{dominantHouse ? getLocalizedHouseDescription(dominantHouse) : PREMIUM_HOUSES_LOCALIZATION.labels.noDominant}",
  );

  /*
   * Insight Premium de la maison dominante.
   */
  out = out.replace(
    /\{dominantHouse\s*\?\s*HOUSE_PREMIUM_INSIGHTS\[\s*dominantHouse\s*\]\s*:\s*"La répartition des planètes dans les maisons permet de comprendre où votre énergie se concentre\. Une maison vide n’est pas inactive : son signe d’entrée et son maître astrologique continuent de décrire son fonctionnement\."\}/g,
    "{dominantHouse ? getLocalizedHouseInsight(dominantHouse) : PREMIUM_HOUSES_LOCALIZATION.labels.emptyHouseInsight}",
  );

  return out;
}
