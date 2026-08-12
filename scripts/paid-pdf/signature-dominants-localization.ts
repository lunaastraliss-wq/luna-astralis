import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type ElementName =
  | "Feu"
  | "Terre"
  | "Air"
  | "Eau";

type ModalityName =
  | "Cardinal"
  | "Fixe"
  | "Mutable";

type DominantLocaleCopy = {
  labels: Record<string, string>;
  elements: Record<ElementName, string>;
  modalities: Record<ModalityName, string>;
  planets: Record<string, string>;
  elementTexts: Record<ElementName, string>;
  modalityTexts: Record<ModalityName, string>;
  planetTexts: Record<string, string>;
  houseMeanings: Record<string, string>;
};

const COPY: Record<
  NonFrenchLocale,
  DominantLocaleCopy
> = {
  "en": {
    "labels": {
      "analysis": "Signature Analysis",
      "title": "Your astrological dominants",
      "intro1": "The dominants reveal the energies that resonate most strongly in your natal chart. They form the overall tone of your personality and show the mechanisms you use most spontaneously.",
      "dominantElement": "Dominant element",
      "dominantModality": "Dominant modality",
      "elementDistribution": "Element distribution",
      "modalityDistribution": "Modality distribution",
      "analyzedPlanets": "of analyzed planets",
      "centralForcesTitle": "The central forces of your chart",
      "intro2": "Certain planets and houses occupy a strategic place in your natal chart. They indicate the areas in which your energy naturally concentrates.",
      "dominantPlanet": "Dominant planet",
      "centralForce": "Central force",
      "dominantHouse": "Dominant house",
      "house": "house",
      "planetSingular": "planet",
      "planetPlural": "planets",
      "undetermined": "Undetermined",
      "naturalFunctioning": "Your natural functioning",
      "globalSignature": "Overall signature",
      "naturalFunctioningText": "Your dominant element describes the main substance of your energy, while your dominant modality shows how you set it in motion. Together, they reveal your natural rhythm and your usual way of approaching events.",
      "synthesisTitle": "Synthesis of your dominants",
      "fallbackPlanetEnergy": "a particular planetary energy",
      "fallbackDominantPlanetText": "This planet occupies an important place in your natal chart.",
      "noDominantPlanet": "The available data does not allow a dominant planet to be identified.",
      "noDominantHouse": "The available data does not allow a dominant house to be identified with sufficient precision.",
      "noDominantData": "No data is available to calculate the dominant.",
      "houseDominantTemplate1": "House {house}, associated with {meaning}, also becomes an important area of your evolution.",
      "houseDominantTemplate2": "House {house} concentrates an important part of your energy. It concerns {meaning}. Experiences connected with this area probably occupy a major place in your personal development.",
      "synthesis1": "Your dominant signature combines the {element} element with a {modality} dynamic.",
      "synthesis2": "{planet} stands out as one of the most important forces in your chart.",
      "synthesis3": "This combination does not summarize your entire personality, but it shows the overall tone that most often appears in the way you think, feel, and act."
    },
    "elements": {
      "Feu": "Fire",
      "Terre": "Earth",
      "Air": "Air",
      "Eau": "Water"
    },
    "modalities": {
      "Cardinal": "Cardinal",
      "Fixe": "Fixed",
      "Mutable": "Mutable"
    },
    "planets": {
      "Sun": "Sun",
      "Moon": "Moon",
      "Mercury": "Mercury",
      "Venus": "Venus",
      "Mars": "Mars",
      "Jupiter": "Jupiter",
      "Saturn": "Saturn",
      "Uranus": "Uranus",
      "Neptune": "Neptune",
      "Pluto": "Pluto"
    },
    "elementTexts": {
      "Feu": "Fire dominates your chart. Your energy seeks to act, create, initiate, and shine. You often move forward through enthusiasm, instinct, and the need to give your life a clear direction.",
      "Terre": "Earth dominates your chart. You favor stability, realism, organization, and concrete results. Your strength lies in your ability to build gradually and turn ideas into lasting achievements.",
      "Air": "Air dominates your chart. Thought, communication, exchange, and understanding occupy a central place. You need to connect ideas, share your perceptions, and preserve a certain intellectual freedom.",
      "Eau": "Water dominates your chart. Your sensitivity, intuition, and emotional life deeply influence the way you perceive situations. You easily pick up atmospheres and subtle movements around you."
    },
    "modalityTexts": {
      "Cardinal": "The cardinal modality emphasizes initiative. You tend to create movement, launch projects, and react quickly when a new direction becomes necessary.",
      "Fixe": "The fixed modality emphasizes perseverance. You seek to stabilize, deepen, and maintain what you have built. Your determination is a strength, even if it can sometimes become resistance to change.",
      "Mutable": "The mutable modality reveals a strong capacity for adaptation. You know how to adjust your approach, understand several points of view, and evolve with circumstances. Your challenge is to maintain a stable guiding thread."
    },
    "planetTexts": {
      "Sun": "The Sun strengthens the need to affirm your identity, shine, and build a life that is faithful to your deepest will.",
      "Moon": "The Moon strengthens the importance of emotions, inner security, emotional needs, and instinctive reactions.",
      "Mercury": "Mercury emphasizes thought, communication, curiosity, and the way you analyze your environment.",
      "Venus": "Venus highlights relationships, personal values, the search for harmony, pleasure, and aesthetic sensitivity.",
      "Mars": "Mars amplifies action, will, self-assertion, desire, and the way you defend your goals.",
      "Jupiter": "Jupiter emphasizes expansion, confidence, learning, possibilities, and the search for meaning.",
      "Saturn": "Saturn brings responsibility, structure, patience, limits, and long-term construction to the forefront.",
      "Uranus": "Uranus strengthens the need for independence, originality, change, and personal freedom.",
      "Neptune": "Neptune emphasizes intuition, imagination, receptivity, idealism, and sensitivity to the invisible world.",
      "Pluto": "Pluto intensifies processes of transformation, regeneration, inner mastery, and transcendence."
    },
    "houseMeanings": {
      "1": "identity, appearance, and the way you enter into contact with the world",
      "2": "resources, material security, and personal values",
      "3": "communication, learning, and the immediate environment",
      "4": "roots, home, private life, and emotional security",
      "5": "creativity, pleasure, personal expression, and romance",
      "6": "daily work, habits, service, and organization",
      "7": "relationships, partnerships, and the search for balance",
      "8": "transformation, intimacy, crises, and shared resources",
      "9": "beliefs, travel, studies, and the expansion of awareness",
      "10": "vocation, career, reputation, and ambitions",
      "11": "collective projects, friendships, and your vision of the future",
      "12": "inner life, the unconscious, retreat, and spirituality"
    }
  },
  "es": {
    "labels": {
      "analysis": "Análisis Firma",
      "title": "Tus dominantes astrológicas",
      "intro1": "Las dominantes revelan las energías que resuenan con mayor fuerza en tu carta natal. Forman el tono general de tu personalidad y muestran los mecanismos que utilizas de manera más espontánea.",
      "dominantElement": "Elemento dominante",
      "dominantModality": "Modalidad dominante",
      "elementDistribution": "Distribución de los elementos",
      "modalityDistribution": "Distribución de las modalidades",
      "analyzedPlanets": "de los planetas analizados",
      "centralForcesTitle": "Las fuerzas centrales de tu carta",
      "intro2": "Ciertos planetas y ciertas casas ocupan un lugar estratégico en tu carta natal. Indican los ámbitos en los que tu energía se concentra de manera natural.",
      "dominantPlanet": "Planeta dominante",
      "centralForce": "Fuerza central",
      "dominantHouse": "Casa dominante",
      "house": "casa",
      "planetSingular": "planeta",
      "planetPlural": "planetas",
      "undetermined": "No determinada",
      "naturalFunctioning": "Tu funcionamiento natural",
      "globalSignature": "Firma global",
      "naturalFunctioningText": "Tu elemento dominante describe la sustancia principal de tu energía, mientras que tu modalidad dominante muestra la manera en que la pones en movimiento. Juntos revelan tu ritmo natural y tu forma habitual de abordar los acontecimientos.",
      "synthesisTitle": "Síntesis de tus dominantes",
      "fallbackPlanetEnergy": "una energía planetaria particular",
      "fallbackDominantPlanetText": "Este planeta ocupa un lugar importante en tu carta natal.",
      "noDominantPlanet": "Los datos disponibles no permiten identificar un planeta dominante.",
      "noDominantHouse": "Los datos disponibles no permiten identificar una casa dominante con suficiente precisión.",
      "noDominantData": "No hay datos disponibles para calcular la dominante.",
      "houseDominantTemplate1": "La casa {house}, asociada con {meaning}, también se convierte en un ámbito importante de tu evolución.",
      "houseDominantTemplate2": "La casa {house} concentra una parte importante de tu energía. Se relaciona con {meaning}. Las experiencias vinculadas a este ámbito probablemente ocupan un lugar importante en tu desarrollo personal.",
      "synthesis1": "Tu firma dominante combina el elemento {element} con una dinámica {modality}.",
      "synthesis2": "{planet} destaca como una de las fuerzas más importantes de tu carta.",
      "synthesis3": "Esta combinación no resume toda tu personalidad, pero muestra el tono general que aparece con mayor frecuencia en tu manera de pensar, sentir y actuar."
    },
    "elements": {
      "Feu": "Fuego",
      "Terre": "Tierra",
      "Air": "Aire",
      "Eau": "Agua"
    },
    "modalities": {
      "Cardinal": "Cardinal",
      "Fixe": "Fija",
      "Mutable": "Mutable"
    },
    "planets": {
      "Sun": "Sol",
      "Moon": "Luna",
      "Mercury": "Mercurio",
      "Venus": "Venus",
      "Mars": "Marte",
      "Jupiter": "Júpiter",
      "Saturn": "Saturno",
      "Uranus": "Urano",
      "Neptune": "Neptuno",
      "Pluto": "Plutón"
    },
    "elementTexts": {
      "Feu": "El Fuego domina tu carta. Tu energía busca actuar, crear, emprender y brillar. A menudo avanzas gracias al entusiasmo, al instinto y a la necesidad de dar una dirección clara a tu vida.",
      "Terre": "La Tierra domina tu carta. Privilegias la estabilidad, el realismo, la organización y los resultados concretos. Tu fuerza reside en tu capacidad para construir progresivamente y transformar las ideas en logros duraderos.",
      "Air": "El Aire domina tu carta. El pensamiento, la comunicación, los intercambios y la comprensión ocupan un lugar central. Necesitas conectar las ideas, compartir tus percepciones y conservar cierta libertad intelectual.",
      "Eau": "El Agua domina tu carta. Tu sensibilidad, tu intuición y tu vida emocional influyen profundamente en tu manera de percibir las situaciones. Captas con facilidad los ambientes y los movimientos sutiles a tu alrededor."
    },
    "modalityTexts": {
      "Cardinal": "La modalidad cardinal pone el acento en la iniciativa. Tiendes a provocar el movimiento, iniciar proyectos y reaccionar rápidamente cuando se hace necesaria una nueva dirección.",
      "Fixe": "La modalidad fija subraya la perseverancia. Buscas estabilizar, profundizar y mantener lo que has construido. Tu determinación es una fuerza, aunque a veces puede convertirse en resistencia al cambio.",
      "Mutable": "La modalidad mutable revela una gran capacidad de adaptación. Sabes ajustar tu enfoque, comprender varios puntos de vista y evolucionar según las circunstancias. Tu desafío consiste en conservar un hilo conductor estable."
    },
    "planetTexts": {
      "Sun": "El Sol refuerza la necesidad de afirmar tu identidad, brillar y construir una vida fiel a tu voluntad profunda.",
      "Moon": "La Luna refuerza la importancia de las emociones, la seguridad interior, las necesidades afectivas y las reacciones instintivas.",
      "Mercury": "Mercurio pone el acento en el pensamiento, la comunicación, la curiosidad y la manera en que analizas tu entorno.",
      "Venus": "Venus destaca las relaciones, los valores personales, la búsqueda de armonía, el placer y la sensibilidad estética.",
      "Mars": "Marte amplifica la acción, la voluntad, la afirmación personal, el deseo y la manera en que defiendes tus objetivos.",
      "Jupiter": "Júpiter acentúa la expansión, la confianza, el aprendizaje, las posibilidades y la búsqueda de sentido.",
      "Saturn": "Saturno pone en primer plano la responsabilidad, la estructura, la paciencia, los límites y la construcción a largo plazo.",
      "Uranus": "Urano refuerza la necesidad de independencia, originalidad, cambio y libertad personal.",
      "Neptune": "Neptuno acentúa la intuición, la imaginación, la receptividad, el idealismo y la sensibilidad al mundo invisible.",
      "Pluto": "Plutón intensifica los procesos de transformación, regeneración, dominio interior y superación."
    },
    "houseMeanings": {
      "1": "la identidad, la apariencia y la manera de entrar en contacto con el mundo",
      "2": "los recursos, la seguridad material y los valores personales",
      "3": "la comunicación, los aprendizajes y el entorno inmediato",
      "4": "las raíces, el hogar, la vida privada y la seguridad emocional",
      "5": "la creatividad, los placeres, la expresión personal y el amor",
      "6": "el trabajo cotidiano, los hábitos, el servicio y la organización",
      "7": "las relaciones, las asociaciones y la búsqueda de equilibrio",
      "8": "las transformaciones, la intimidad, las crisis y los recursos compartidos",
      "9": "las creencias, los viajes, los estudios y la ampliación de la conciencia",
      "10": "la vocación, la carrera, la reputación y las ambiciones",
      "11": "los proyectos colectivos, las amistades y la visión del futuro",
      "12": "la vida interior, el inconsciente, el retiro y la espiritualidad"
    }
  },
  "de": {
    "labels": {
      "analysis": "Signatur-Analyse",
      "title": "Ihre astrologischen Dominanten",
      "intro1": "Die Dominanten zeigen die Energien, die in Ihrem Geburtshoroskop am stärksten wirken. Sie prägen den Grundton Ihrer Persönlichkeit und zeigen die Mechanismen, die Sie am spontansten einsetzen.",
      "dominantElement": "Dominantes Element",
      "dominantModality": "Dominante Modalität",
      "elementDistribution": "Verteilung der Elemente",
      "modalityDistribution": "Verteilung der Modalitäten",
      "analyzedPlanets": "der analysierten Planeten",
      "centralForcesTitle": "Die zentralen Kräfte Ihres Horoskops",
      "intro2": "Bestimmte Planeten und Häuser nehmen in Ihrem Horoskop eine strategische Stellung ein. Sie zeigen die Bereiche, in denen sich Ihre Energie auf natürliche Weise konzentriert.",
      "dominantPlanet": "Dominanter Planet",
      "centralForce": "Zentrale Kraft",
      "dominantHouse": "Dominantes Haus",
      "house": "Haus",
      "planetSingular": "Planet",
      "planetPlural": "Planeten",
      "undetermined": "Nicht bestimmt",
      "naturalFunctioning": "Ihre natürliche Funktionsweise",
      "globalSignature": "Gesamtsignatur",
      "naturalFunctioningText": "Ihr dominantes Element beschreibt die Grundsubstanz Ihrer Energie, während Ihre dominante Modalität zeigt, wie Sie diese in Bewegung setzen. Zusammen offenbaren sie Ihren natürlichen Rhythmus und Ihre gewohnte Art, Ereignissen zu begegnen.",
      "synthesisTitle": "Synthese Ihrer Dominanten",
      "fallbackPlanetEnergy": "eine besondere planetarische Energie",
      "fallbackDominantPlanetText": "Dieser Planet nimmt in Ihrem Geburtshoroskop eine wichtige Stellung ein.",
      "noDominantPlanet": "Die verfügbaren Daten erlauben keine eindeutige Bestimmung eines dominanten Planeten.",
      "noDominantHouse": "Die verfügbaren Daten erlauben keine ausreichend genaue Bestimmung eines dominanten Hauses.",
      "noDominantData": "Es sind keine Daten verfügbar, um die Dominante zu berechnen.",
      "houseDominantTemplate1": "Haus {house}, verbunden mit {meaning}, wird ebenfalls zu einem wichtigen Bereich Ihrer Entwicklung.",
      "houseDominantTemplate2": "Haus {house} bündelt einen wichtigen Teil Ihrer Energie. Es betrifft {meaning}. Erfahrungen in diesem Bereich nehmen wahrscheinlich einen bedeutenden Platz in Ihrer persönlichen Entwicklung ein.",
      "synthesis1": "Ihre dominante Signatur verbindet das Element {element} mit einer {modality} Dynamik.",
      "synthesis2": "{planet} tritt als eine der wichtigsten Kräfte Ihres Horoskops hervor.",
      "synthesis3": "Diese Kombination fasst nicht Ihre gesamte Persönlichkeit zusammen, zeigt jedoch den Grundton, der sich in Ihrer Art zu denken, zu fühlen und zu handeln am häufigsten wiederfindet."
    },
    "elements": {
      "Feu": "Feuer",
      "Terre": "Erde",
      "Air": "Luft",
      "Eau": "Wasser"
    },
    "modalities": {
      "Cardinal": "Kardinal",
      "Fixe": "Fix",
      "Mutable": "Veränderlich"
    },
    "planets": {
      "Sun": "Sonne",
      "Moon": "Mond",
      "Mercury": "Merkur",
      "Venus": "Venus",
      "Mars": "Mars",
      "Jupiter": "Jupiter",
      "Saturn": "Saturn",
      "Uranus": "Uranus",
      "Neptune": "Neptun",
      "Pluto": "Pluto"
    },
    "elementTexts": {
      "Feu": "Feuer dominiert Ihr Horoskop. Ihre Energie möchte handeln, erschaffen, initiieren und strahlen. Sie kommen oft durch Begeisterung, Instinkt und das Bedürfnis voran, Ihrem Leben eine klare Richtung zu geben.",
      "Terre": "Erde dominiert Ihr Horoskop. Sie bevorzugen Stabilität, Realismus, Organisation und konkrete Ergebnisse. Ihre Stärke liegt darin, schrittweise aufzubauen und Ideen in dauerhafte Ergebnisse umzusetzen.",
      "Air": "Luft dominiert Ihr Horoskop. Denken, Kommunikation, Austausch und Verständnis stehen im Mittelpunkt. Sie brauchen es, Ideen zu verbinden, Wahrnehmungen zu teilen und eine gewisse geistige Freiheit zu bewahren.",
      "Eau": "Wasser dominiert Ihr Horoskop. Ihre Sensibilität, Intuition und Ihr Gefühlsleben beeinflussen tief, wie Sie Situationen wahrnehmen. Sie erfassen Stimmungen und feine Bewegungen in Ihrer Umgebung sehr leicht."
    },
    "modalityTexts": {
      "Cardinal": "Die kardinale Modalität betont Initiative. Sie neigen dazu, Bewegung auszulösen, Projekte zu beginnen und schnell zu reagieren, wenn eine neue Richtung notwendig wird.",
      "Fixe": "Die fixe Modalität betont Ausdauer. Sie möchten stabilisieren, vertiefen und bewahren, was Sie aufgebaut haben. Ihre Entschlossenheit ist eine Stärke, auch wenn sie manchmal zu Widerstand gegen Veränderung werden kann.",
      "Mutable": "Die veränderliche Modalität zeigt eine große Anpassungsfähigkeit. Sie können Ihren Ansatz verändern, mehrere Perspektiven verstehen und sich den Umständen entsprechend weiterentwickeln. Ihre Herausforderung besteht darin, einen stabilen roten Faden zu bewahren."
    },
    "planetTexts": {
      "Sun": "Die Sonne verstärkt das Bedürfnis, Ihre Identität zu behaupten, zu strahlen und ein Leben aufzubauen, das Ihrem tiefsten Willen entspricht.",
      "Moon": "Der Mond verstärkt die Bedeutung von Gefühlen, innerer Sicherheit, emotionalen Bedürfnissen und instinktiven Reaktionen.",
      "Mercury": "Merkur betont Denken, Kommunikation, Neugier und die Art, wie Sie Ihre Umgebung analysieren.",
      "Venus": "Venus hebt Beziehungen, persönliche Werte, das Streben nach Harmonie, Freude und ästhetische Sensibilität hervor.",
      "Mars": "Mars verstärkt Handlung, Willenskraft, Selbstbehauptung, Verlangen und die Art, wie Sie Ihre Ziele verteidigen.",
      "Jupiter": "Jupiter betont Wachstum, Vertrauen, Lernen, Möglichkeiten und die Suche nach Sinn.",
      "Saturn": "Saturn rückt Verantwortung, Struktur, Geduld, Grenzen und langfristigen Aufbau in den Vordergrund.",
      "Uranus": "Uranus verstärkt das Bedürfnis nach Unabhängigkeit, Originalität, Veränderung und persönlicher Freiheit.",
      "Neptune": "Neptun betont Intuition, Vorstellungskraft, Empfänglichkeit, Idealismus und Sensibilität für die unsichtbare Welt.",
      "Pluto": "Pluto intensiviert Prozesse der Transformation, Regeneration, inneren Meisterschaft und Überwindung."
    },
    "houseMeanings": {
      "1": "Identität, Erscheinung und die Art, mit der Welt in Kontakt zu treten",
      "2": "Ressourcen, materielle Sicherheit und persönliche Werte",
      "3": "Kommunikation, Lernen und das unmittelbare Umfeld",
      "4": "Wurzeln, Zuhause, Privatleben und emotionale Sicherheit",
      "5": "Kreativität, Freude, persönlicher Ausdruck und Liebe",
      "6": "tägliche Arbeit, Gewohnheiten, Dienst und Organisation",
      "7": "Beziehungen, Partnerschaften und die Suche nach Gleichgewicht",
      "8": "Transformationen, Intimität, Krisen und gemeinsame Ressourcen",
      "9": "Überzeugungen, Reisen, Studium und die Erweiterung des Bewusstseins",
      "10": "Berufung, Karriere, Ruf und Ambitionen",
      "11": "gemeinschaftliche Projekte, Freundschaften und die Zukunftsvision",
      "12": "Innenleben, Unbewusstes, Rückzug und Spiritualität"
    }
  },
  "it": {
    "labels": {
      "analysis": "Analisi Firma",
      "title": "Le tue dominanti astrologiche",
      "intro1": "Le dominanti rivelano le energie che risuonano con maggiore forza nel tuo tema natale. Formano il tono generale della tua personalità e mostrano i meccanismi che utilizzi più spontaneamente.",
      "dominantElement": "Elemento dominante",
      "dominantModality": "Modalità dominante",
      "elementDistribution": "Distribuzione degli elementi",
      "modalityDistribution": "Distribuzione delle modalità",
      "analyzedPlanets": "dei pianeti analizzati",
      "centralForcesTitle": "Le forze centrali del tuo tema",
      "intro2": "Alcuni pianeti e alcune case occupano una posizione strategica nel tuo tema natale. Indicano gli ambiti in cui la tua energia si concentra naturalmente.",
      "dominantPlanet": "Pianeta dominante",
      "centralForce": "Forza centrale",
      "dominantHouse": "Casa dominante",
      "house": "casa",
      "planetSingular": "pianeta",
      "planetPlural": "pianeti",
      "undetermined": "Non determinata",
      "naturalFunctioning": "Il tuo funzionamento naturale",
      "globalSignature": "Firma globale",
      "naturalFunctioningText": "Il tuo elemento dominante descrive la sostanza principale della tua energia, mentre la modalità dominante mostra il modo in cui la metti in movimento. Insieme rivelano il tuo ritmo naturale e il tuo modo abituale di affrontare gli eventi.",
      "synthesisTitle": "Sintesi delle tue dominanti",
      "fallbackPlanetEnergy": "un’energia planetaria particolare",
      "fallbackDominantPlanetText": "Questo pianeta occupa un posto importante nel tuo tema natale.",
      "noDominantPlanet": "I dati disponibili non permettono di identificare un pianeta dominante.",
      "noDominantHouse": "I dati disponibili non permettono di identificare una casa dominante con sufficiente precisione.",
      "noDominantData": "Non sono disponibili dati per calcolare la dominante.",
      "houseDominantTemplate1": "La casa {house}, legata a {meaning}, diventa anch’essa un ambito importante della tua evoluzione.",
      "houseDominantTemplate2": "La casa {house} concentra una parte importante della tua energia. Riguarda {meaning}. Le esperienze legate a questo ambito occupano probabilmente un posto importante nel tuo sviluppo personale.",
      "synthesis1": "La tua firma dominante associa l’elemento {element} a una dinamica {modality}.",
      "synthesis2": "{planet} emerge come una delle forze più importanti del tuo tema.",
      "synthesis3": "Questa combinazione non riassume tutta la tua personalità, ma mostra il tono generale che ricorre più spesso nel tuo modo di pensare, sentire e agire."
    },
    "elements": {
      "Feu": "Fuoco",
      "Terre": "Terra",
      "Air": "Aria",
      "Eau": "Acqua"
    },
    "modalities": {
      "Cardinal": "Cardinale",
      "Fixe": "Fissa",
      "Mutable": "Mutevole"
    },
    "planets": {
      "Sun": "Sole",
      "Moon": "Luna",
      "Mercury": "Mercurio",
      "Venus": "Venere",
      "Mars": "Marte",
      "Jupiter": "Giove",
      "Saturn": "Saturno",
      "Uranus": "Urano",
      "Neptune": "Nettuno",
      "Pluto": "Plutone"
    },
    "elementTexts": {
      "Feu": "Il Fuoco domina il tuo tema. La tua energia cerca di agire, creare, intraprendere e brillare. Avanzi spesso grazie all’entusiasmo, all’istinto e al bisogno di dare una direzione chiara alla tua vita.",
      "Terre": "La Terra domina il tuo tema. Privilegi stabilità, realismo, organizzazione e risultati concreti. La tua forza risiede nella capacità di costruire gradualmente e trasformare le idee in realizzazioni durature.",
      "Air": "L’Aria domina il tuo tema. Pensiero, comunicazione, scambi e comprensione occupano un posto centrale. Hai bisogno di collegare le idee, condividere le tue percezioni e conservare una certa libertà intellettuale.",
      "Eau": "L’Acqua domina il tuo tema. La tua sensibilità, intuizione e vita emotiva influenzano profondamente il modo in cui percepisci le situazioni. Coglierai facilmente le atmosfere e i movimenti sottili intorno a te."
    },
    "modalityTexts": {
      "Cardinal": "La modalità cardinale mette l’accento sull’iniziativa. Tendi a creare movimento, avviare progetti e reagire rapidamente quando diventa necessaria una nuova direzione.",
      "Fixe": "La modalità fissa sottolinea la perseveranza. Cerchi di stabilizzare, approfondire e mantenere ciò che hai costruito. La tua determinazione è una forza, anche se a volte può trasformarsi in resistenza al cambiamento.",
      "Mutable": "La modalità mutevole rivela una grande capacità di adattamento. Sai modificare il tuo approccio, comprendere diversi punti di vista ed evolvere secondo le circostanze. La tua sfida consiste nel mantenere un filo conduttore stabile."
    },
    "planetTexts": {
      "Sun": "Il Sole rafforza il bisogno di affermare la tua identità, brillare e costruire una vita fedele alla tua volontà profonda.",
      "Moon": "La Luna rafforza l’importanza delle emozioni, della sicurezza interiore, dei bisogni affettivi e delle reazioni istintive.",
      "Mercury": "Mercurio mette l’accento sul pensiero, sulla comunicazione, sulla curiosità e sul modo in cui analizzi il tuo ambiente.",
      "Venus": "Venere sottolinea le relazioni, i valori personali, la ricerca di armonia, il piacere e la sensibilità estetica.",
      "Mars": "Marte amplifica l’azione, la volontà, l’affermazione personale, il desiderio e il modo in cui difendi i tuoi obiettivi.",
      "Jupiter": "Giove accentua l’espansione, la fiducia, l’apprendimento, le possibilità e la ricerca di significato.",
      "Saturn": "Saturno mette in primo piano la responsabilità, la struttura, la pazienza, i limiti e la costruzione a lungo termine.",
      "Uranus": "Urano rafforza il bisogno di indipendenza, originalità, cambiamento e libertà personale.",
      "Neptune": "Nettuno accentua l’intuizione, l’immaginazione, la ricettività, l’idealismo e la sensibilità al mondo invisibile.",
      "Pluto": "Plutone intensifica i processi di trasformazione, rigenerazione, padronanza interiore e superamento."
    },
    "houseMeanings": {
      "1": "l’identità, l’aspetto e il modo di entrare in contatto con il mondo",
      "2": "le risorse, la sicurezza materiale e i valori personali",
      "3": "la comunicazione, l’apprendimento e l’ambiente immediato",
      "4": "le radici, la casa, la vita privata e la sicurezza emotiva",
      "5": "la creatività, i piaceri, l’espressione personale e l’amore",
      "6": "il lavoro quotidiano, le abitudini, il servizio e l’organizzazione",
      "7": "le relazioni, le collaborazioni e la ricerca di equilibrio",
      "8": "le trasformazioni, l’intimità, le crisi e le risorse condivise",
      "9": "le convinzioni, i viaggi, gli studi e l’espansione della consapevolezza",
      "10": "la vocazione, la carriera, la reputazione e le ambizioni",
      "11": "i progetti collettivi, le amicizie e la visione del futuro",
      "12": "la vita interiore, l’inconscio, il ritiro e la spiritualità"
    }
  },
  "pt": {
    "labels": {
      "analysis": "Análise Assinatura",
      "title": "Suas dominantes astrológicas",
      "intro1": "As dominantes revelam as energias que ressoam com mais força no seu mapa natal. Elas formam o tom geral da sua personalidade e mostram os mecanismos que você utiliza de forma mais espontânea.",
      "dominantElement": "Elemento dominante",
      "dominantModality": "Modalidade dominante",
      "elementDistribution": "Distribuição dos elementos",
      "modalityDistribution": "Distribuição das modalidades",
      "analyzedPlanets": "dos planetas analisados",
      "centralForcesTitle": "As forças centrais do seu mapa",
      "intro2": "Alguns planetas e algumas casas ocupam uma posição estratégica no seu mapa natal. Eles indicam as áreas em que sua energia se concentra naturalmente.",
      "dominantPlanet": "Planeta dominante",
      "centralForce": "Força central",
      "dominantHouse": "Casa dominante",
      "house": "casa",
      "planetSingular": "planeta",
      "planetPlural": "planetas",
      "undetermined": "Não determinada",
      "naturalFunctioning": "Seu funcionamento natural",
      "globalSignature": "Assinatura global",
      "naturalFunctioningText": "Seu elemento dominante descreve a substância principal da sua energia, enquanto sua modalidade dominante mostra como você a coloca em movimento. Juntos, eles revelam seu ritmo natural e sua forma habitual de abordar os acontecimentos.",
      "synthesisTitle": "Síntese das suas dominantes",
      "fallbackPlanetEnergy": "uma energia planetária particular",
      "fallbackDominantPlanetText": "Este planeta ocupa um lugar importante no seu mapa natal.",
      "noDominantPlanet": "Os dados disponíveis não permitem identificar um planeta dominante.",
      "noDominantHouse": "Os dados disponíveis não permitem identificar uma casa dominante com precisão suficiente.",
      "noDominantData": "Não há dados disponíveis para calcular a dominante.",
      "houseDominantTemplate1": "A casa {house}, ligada a {meaning}, também se torna uma área importante da sua evolução.",
      "houseDominantTemplate2": "A casa {house} concentra uma parte importante da sua energia. Ela diz respeito a {meaning}. As experiências ligadas a essa área provavelmente ocupam um lugar importante no seu desenvolvimento pessoal.",
      "synthesis1": "Sua assinatura dominante combina o elemento {element} com uma dinâmica {modality}.",
      "synthesis2": "{planet} se destaca como uma das forças mais importantes do seu mapa.",
      "synthesis3": "Essa combinação não resume toda a sua personalidade, mas mostra o tom geral que aparece com mais frequência na sua maneira de pensar, sentir e agir."
    },
    "elements": {
      "Feu": "Fogo",
      "Terre": "Terra",
      "Air": "Ar",
      "Eau": "Água"
    },
    "modalities": {
      "Cardinal": "Cardinal",
      "Fixe": "Fixa",
      "Mutable": "Mutável"
    },
    "planets": {
      "Sun": "Sol",
      "Moon": "Lua",
      "Mercury": "Mercúrio",
      "Venus": "Vênus",
      "Mars": "Marte",
      "Jupiter": "Júpiter",
      "Saturn": "Saturno",
      "Uranus": "Urano",
      "Neptune": "Netuno",
      "Pluto": "Plutão"
    },
    "elementTexts": {
      "Feu": "O Fogo domina seu mapa. Sua energia busca agir, criar, iniciar e brilhar. Você costuma avançar graças ao entusiasmo, ao instinto e à necessidade de dar uma direção clara à sua vida.",
      "Terre": "A Terra domina seu mapa. Você privilegia estabilidade, realismo, organização e resultados concretos. Sua força está na capacidade de construir gradualmente e transformar ideias em realizações duradouras.",
      "Air": "O Ar domina seu mapa. Pensamento, comunicação, trocas e compreensão ocupam um lugar central. Você precisa conectar ideias, compartilhar suas percepções e preservar certa liberdade intelectual.",
      "Eau": "A Água domina seu mapa. Sua sensibilidade, intuição e vida emocional influenciam profundamente a maneira como você percebe as situações. Você capta com facilidade os ambientes e os movimentos sutis ao seu redor."
    },
    "modalityTexts": {
      "Cardinal": "A modalidade cardinal enfatiza a iniciativa. Você tende a provocar movimento, iniciar projetos e reagir rapidamente quando uma nova direção se torna necessária.",
      "Fixe": "A modalidade fixa destaca a perseverança. Você busca estabilizar, aprofundar e manter o que construiu. Sua determinação é uma força, embora às vezes possa se transformar em resistência à mudança.",
      "Mutable": "A modalidade mutável revela uma grande capacidade de adaptação. Você sabe ajustar sua abordagem, compreender diferentes pontos de vista e evoluir conforme as circunstâncias. Seu desafio é manter um fio condutor estável."
    },
    "planetTexts": {
      "Sun": "O Sol reforça a necessidade de afirmar sua identidade, brilhar e construir uma vida fiel à sua vontade profunda.",
      "Moon": "A Lua reforça a importância das emoções, da segurança interior, das necessidades afetivas e das reações instintivas.",
      "Mercury": "Mercúrio enfatiza o pensamento, a comunicação, a curiosidade e a maneira como você analisa seu ambiente.",
      "Venus": "Vênus destaca os relacionamentos, os valores pessoais, a busca por harmonia, o prazer e a sensibilidade estética.",
      "Mars": "Marte amplifica a ação, a vontade, a afirmação pessoal, o desejo e a maneira como você defende seus objetivos.",
      "Jupiter": "Júpiter acentua a expansão, a confiança, o aprendizado, as possibilidades e a busca por sentido.",
      "Saturn": "Saturno coloca em evidência a responsabilidade, a estrutura, a paciência, os limites e a construção a longo prazo.",
      "Uranus": "Urano reforça a necessidade de independência, originalidade, mudança e liberdade pessoal.",
      "Neptune": "Netuno acentua a intuição, a imaginação, a receptividade, o idealismo e a sensibilidade ao mundo invisível.",
      "Pluto": "Plutão intensifica os processos de transformação, regeneração, domínio interior e superação."
    },
    "houseMeanings": {
      "1": "a identidade, a aparência e a forma de entrar em contato com o mundo",
      "2": "os recursos, a segurança material e os valores pessoais",
      "3": "a comunicação, o aprendizado e o ambiente imediato",
      "4": "as raízes, o lar, a vida privada e a segurança emocional",
      "5": "a criatividade, os prazeres, a expressão pessoal e o amor",
      "6": "o trabalho cotidiano, os hábitos, o serviço e a organização",
      "7": "os relacionamentos, as parcerias e a busca por equilíbrio",
      "8": "as transformações, a intimidade, as crises e os recursos compartilhados",
      "9": "as crenças, as viagens, os estudos e a expansão da consciência",
      "10": "a vocação, a carreira, a reputação e as ambições",
      "11": "os projetos coletivos, as amizades e a visão de futuro",
      "12": "a vida interior, o inconsciente, o recolhimento e a espiritualidade"
    }
  }
};

function replaceAll(
  source: string,
  from: string,
  to: string,
): string {
  return source.split(from).join(to);
}

function replaceConstObject(
  source: string,
  constName: string,
  replacement: string,
): string {
  const pattern = new RegExp(
    `const ${constName}:[\\s\\S]*?=\\s*\\{[\\s\\S]*?\\n\\};`,
  );

  return source.replace(
    pattern,
    replacement,
  );
}

export function localizeSignatureDominants(
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

  out = replaceConstObject(
    out,
    "PLANET_NAMES_FR",
    `const PLANET_NAMES_FR: Record<string, string> = ${JSON.stringify(
      copy.planets,
      null,
      2,
    )};`,
  );

  out = replaceConstObject(
    out,
    "ELEMENT_TEXTS",
    `const ELEMENT_TEXTS: Record<ElementName, string> = ${JSON.stringify(
      copy.elementTexts,
      null,
      2,
    )};`,
  );

  out = replaceConstObject(
    out,
    "MODALITY_TEXTS",
    `const MODALITY_TEXTS: Record<ModalityName, string> = ${JSON.stringify(
      copy.modalityTexts,
      null,
      2,
    )};`,
  );

  out = replaceConstObject(
    out,
    "PLANET_DOMINANCE_TEXTS",
    `const PLANET_DOMINANCE_TEXTS: Record<string, string> = ${JSON.stringify(
      copy.planetTexts,
      null,
      2,
    )};`,
  );

  out = replaceConstObject(
    out,
    "HOUSE_MEANINGS",
    `const HOUSE_MEANINGS: Record<number, string> = ${JSON.stringify(
      copy.houseMeanings,
      null,
      2,
    )};`,
  );

  if (
    !out.includes(
      "function getDominantElementDisplayName(",
    )
  ) {
    const marker =
      "function normalizeHouse(";

    const index =
      out.indexOf(marker);

    if (index >= 0) {
      const helper = `
function getDominantElementDisplayName(
  element: ElementName
): string {
  const names: Record<ElementName, string> =
    ${JSON.stringify(copy.elements)};

  return names[element] || element;
}

function getDominantModalityDisplayName(
  modality: ModalityName
): string {
  const names: Record<ModalityName, string> =
    ${JSON.stringify(copy.modalities)};

  return names[modality] || modality;
}

`;

      out =
        out.slice(0, index) +
        helper +
        out.slice(index);
    }
  }

  const staticPairs:
    Array<[string, string]> = [
      ["Analyse Signature", labels.analysis],
      ["Vos dominantes astrologiques", labels.title],
      ["Élément dominant", labels.dominantElement],
      ["Modalité dominante", labels.dominantModality],
      ["Répartition des éléments", labels.elementDistribution],
      ["Répartition des modalités", labels.modalityDistribution],
      ["% des planètes analysées", `% ${labels.analyzedPlanets}`],
      ["Les forces centrales du thème", labels.centralForcesTitle],
      ["Planète dominante :", `${labels.dominantPlanet} :`],
      ["Force centrale", labels.centralForce],
      ["Maison dominante", labels.dominantHouse],
      ["Votre fonctionnement naturel", labels.naturalFunctioning],
      ["Signature globale", labels.globalSignature],
      ["Synthèse de vos dominantes", labels.synthesisTitle],
      ["Non déterminée", labels.undetermined],
      ["une énergie planétaire particulière", labels.fallbackPlanetEnergy],
      [
        "Cette planète occupe une place importante dans votre thème natal.",
        labels.fallbackDominantPlanetText,
      ],
      [
        "Les données disponibles ne permettent pas d’identifier une planète dominante.",
        labels.noDominantPlanet,
      ],
      [
        "Les données disponibles ne permettent pas d’identifier une maison dominante avec suffisamment de précision.",
        labels.noDominantHouse,
      ],
      [
        "Aucune donnée disponible pour calculer la dominante.",
        labels.noDominantData,
      ],
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
    /Les dominantes révèlent les\s+énergies qui reviennent le\s+plus fortement dans votre\s+thème natal\. Elles forment la\s+tonalité générale de votre\s+personnalité et montrent les\s+mécanismes que vous utilisez\s+le plus spontanément\./g,
    labels.intro1,
  );

  out = out.replace(
    /Certaines planètes et\s+certaines maisons occupent\s+une place stratégique dans\s+votre carte du ciel\. Elles\s+indiquent les domaines dans\s+lesquels votre énergie se\s+concentre naturellement\./g,
    labels.intro2,
  );

  out = out.replace(
    /Votre élément dominant\s+décrit la substance\s+principale de votre\s+énergie, tandis que votre\s+modalité dominante montre\s+la manière dont vous la\s+mettez en mouvement\.\s+Ensemble, ils révèlent\s+votre rythme naturel et\s+votre façon habituelle\s+d’aborder les événements\./g,
    labels.naturalFunctioningText,
  );

  out = out.replace(
    /\{\s*dominantElement\.name\s*\}/g,
    "{getDominantElementDisplayName(dominantElement.name)}",
  );

  out = out.replace(
    /\{\s*dominantModality\.name\s*\}/g,
    "{getDominantModalityDisplayName(dominantModality.name)}",
  );

  out = out.replace(
    /label=\{element\}/g,
    "label={getDominantElementDisplayName(element)}",
  );

  out = out.replace(
    /label=\{modality\}/g,
    "label={getDominantModalityDisplayName(modality)}",
  );

out = out.replace(
  /`Maison dominante : maison \$\{dominantHouse\.house\}`/g,
  "`" +
    labels.dominantHouse +
    ": " +
    (locale === "en" ? "House" : labels.house) +
    " ${dominantHouse.house}`",
);

out = out.replace(
  /`\$\{\s*dominantHouse\.count\s*\}\s*planète\$\{\s*dominantHouse\.count\s*>\s*1\s*\?\s*"s"\s*:\s*""\s*\}`/g,
  "`" +
    "${dominantHouse.count} ${dominantHouse.count > 1 ? " +
    JSON.stringify(labels.planetPlural) +
    " : " +
    JSON.stringify(labels.planetSingular) +
    "}`",
);
  const houseParagraph =
    labels.houseDominantTemplate2
      .replace(
        "{house}",
        "${dominantHouse.house}",
      )
      .replace(
        "{meaning}",
        "${HOUSE_MEANINGS[dominantHouse.house]}",
      );

  out = out.replace(
    /`La maison \$\{dominantHouse\.house\} concentre une partie importante de votre énergie\. Elle concerne \$\{HOUSE_MEANINGS\[dominantHouse\.house\]\}\. Les expériences liées à ce domaine occupent probablement une place majeure dans votre développement personnel\.`/g,
    `\`${houseParagraph}\``,
  );

  const synthesisFunction = `
function createGlobalSynthesis(
  element:
    DominantResult<ElementName>,
  modality:
    DominantResult<ModalityName>,
  dominantPlanet:
    SignaturePlanet | null,
  dominantHouse:
    number | null
): string {
  const planetName =
    dominantPlanet?.name
      ? PLANET_NAMES_FR[
          dominantPlanet.name
        ] ||
        dominantPlanet.name
      : ${JSON.stringify(labels.fallbackPlanetEnergy)};

  const houseMeaning =
    dominantHouse
      ? HOUSE_MEANINGS[
          dominantHouse
        ]
      : "";

  const houseText =
    dominantHouse &&
    houseMeaning
      ? ${JSON.stringify(labels.houseDominantTemplate1)}
          .replace(
            "{house}",
            String(dominantHouse),
          )
          .replace(
            "{meaning}",
            houseMeaning,
          )
      : "";

  const firstSentence =
    ${JSON.stringify(labels.synthesis1)}
      .replace(
        "{element}",
        getDominantElementDisplayName(
          element.name,
        ),
      )
      .replace(
        "{modality}",
        getDominantModalityDisplayName(
          modality.name,
        ).toLowerCase(),
      );

  const secondSentence =
    ${JSON.stringify(labels.synthesis2)}
      .replace(
        "{planet}",
        planetName,
      );

  return (
    firstSentence +
    " " +
    secondSentence +
    " " +
    houseText +
    " " +
    ${JSON.stringify(labels.synthesis3)}
  ).trim();
}
`;

  out = out.replace(
    /function createGlobalSynthesis\([\s\S]*?\n\}\n\nfunction DistributionRow\(/m,
    `${synthesisFunction}\nfunction DistributionRow(`,
  );

  return out;
}
