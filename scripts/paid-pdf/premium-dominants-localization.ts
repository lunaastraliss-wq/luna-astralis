import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type DominantsCopy = {
  labels: {
    premiumAnalysis: string;
    dominantsTitle: string;
    dominantsIntro: string;
    dominantElement: string;
    dominantModality: string;
    analyzedPlanets: string;
    elementsDistribution: string;
    modalitiesDistribution: string;

    centralStrengthsTitle: string;
    centralStrengthsIntro: string;
    dominantPlanet: string;
    centralStrength: string;
    dominantHouse: string;
    dominantHouseWithNumber: string;
    notDetermined: string;
    naturalFunctioning: string;
    overallSignature: string;
    naturalFunctioningText: string;
    dominantsSynthesis: string;
  };

  elements: Record<
    "Feu" | "Terre" | "Air" | "Eau",
    {
      name: string;
      text: string;
    }
  >;

  modalities: Record<
    "Cardinal" | "Fixe" | "Mutable",
    {
      name: string;
      text: string;
    }
  >;

  planets: Record<
    string,
    {
      name: string;
      text: string;
    }
  >;

  houseMeanings: Record<number, string>;

  fallbackPlanetName: string;
  fallbackPlanetText: string;
  fallbackHouseText: string;

  dominantHouseText: string;
  globalSynthesis: string;

  planetCountSingular: string;
  planetCountPlural: string;
};

const COPY: Record<
  NonFrenchLocale,
  DominantsCopy
> = {
  en: {
    labels: {
      premiumAnalysis: "Premium Analysis",
      dominantsTitle: "Your astrological dominants",
      dominantsIntro:
        "The dominants reveal the energies that appear most strongly in your natal chart. They form the general tone of your personality and show the mechanisms you use most spontaneously.",
      dominantElement: "Dominant element",
      dominantModality: "Dominant modality",
      analyzedPlanets: "of the analyzed planets",
      elementsDistribution: "Distribution of the elements",
      modalitiesDistribution: "Distribution of the modalities",

      centralStrengthsTitle: "Central strengths of the chart",
      centralStrengthsIntro:
        "Certain planets and certain houses occupy a strategic place in your birth chart. They indicate the areas where your energy naturally concentrates.",
      dominantPlanet: "Dominant planet",
      centralStrength: "Central strength",
      dominantHouse: "Dominant house",
      dominantHouseWithNumber: "Dominant house: House {house}",
      notDetermined: "Not determined",
      naturalFunctioning: "Your natural functioning",
      overallSignature: "Overall signature",
      naturalFunctioningText:
        "Your dominant element describes the main substance of your energy, while your dominant modality shows how you put it into motion. Together, they reveal your natural rhythm and your usual way of approaching events.",
      dominantsSynthesis: "Summary of your dominants",
    },

    elements: {
      Feu: {
        name: "Fire",
        text:
          "Fire dominates your chart. Your energy seeks to act, create, initiate, and shine. You often move forward through enthusiasm, instinct, and the need to give a clear direction to your life.",
      },
      Terre: {
        name: "Earth",
        text:
          "Earth dominates your chart. You favor stability, realism, organization, and concrete results. Your strength lies in your ability to build progressively and turn ideas into lasting achievements.",
      },
      Air: {
        name: "Air",
        text:
          "Air dominates your chart. Thought, communication, exchange, and understanding occupy a central place. You need to connect ideas, share your perceptions, and preserve a certain intellectual freedom.",
      },
      Eau: {
        name: "Water",
        text:
          "Water dominates your chart. Your sensitivity, intuition, and emotional life deeply influence the way you perceive situations. You easily pick up atmospheres and subtle movements around you.",
      },
    },

    modalities: {
      Cardinal: {
        name: "Cardinal",
        text:
          "The cardinal modality emphasizes initiative. You tend to create movement, launch projects, and react quickly when a new direction becomes necessary.",
      },
      Fixe: {
        name: "Fixed",
        text:
          "The fixed modality emphasizes perseverance. You seek to stabilize, deepen, and maintain what you have built. Your determination is a strength, even if it can sometimes become resistance to change.",
      },
      Mutable: {
        name: "Mutable",
        text:
          "The mutable modality reveals a strong capacity for adaptation. You know how to adjust your approach, understand several points of view, and evolve according to circumstances. Your challenge is to maintain a stable guiding thread.",
      },
    },

    planets: {
      Sun: {
        name: "Sun",
        text:
          "The Sun reinforces the need to assert your identity, shine, and build a life true to your deep will.",
      },
      Moon: {
        name: "Moon",
        text:
          "The Moon reinforces the importance of emotions, inner security, emotional needs, and instinctive reactions.",
      },
      Mercury: {
        name: "Mercury",
        text:
          "Mercury emphasizes thought, communication, curiosity, and the way you analyze your environment.",
      },
      Venus: {
        name: "Venus",
        text:
          "Venus emphasizes relationships, personal values, the search for harmony, pleasure, and aesthetic sensitivity.",
      },
      Mars: {
        name: "Mars",
        text:
          "Mars amplifies action, will, self-assertion, desire, and the way you defend your goals.",
      },
      Jupiter: {
        name: "Jupiter",
        text:
          "Jupiter emphasizes expansion, confidence, learning, possibilities, and the search for meaning.",
      },
      Saturn: {
        name: "Saturn",
        text:
          "Saturn highlights responsibility, structure, patience, limits, and long-term construction.",
      },
      Uranus: {
        name: "Uranus",
        text:
          "Uranus reinforces the need for independence, originality, change, and personal freedom.",
      },
      Neptune: {
        name: "Neptune",
        text:
          "Neptune emphasizes intuition, imagination, receptivity, idealism, and sensitivity to the invisible world.",
      },
      Pluto: {
        name: "Pluto",
        text:
          "Pluto intensifies processes of transformation, regeneration, inner mastery, and self-transcendence.",
      },
    },

    houseMeanings: {
      1: "identity, appearance, and the way you engage with the world",
      2: "resources, material security, and personal values",
      3: "communication, learning, and the immediate environment",
      4: "roots, home, private life, and emotional security",
      5: "creativity, pleasures, personal expression, and romance",
      6: "daily work, habits, service, and organization",
      7: "relationships, partnerships, and the search for balance",
      8: "transformations, intimacy, crises, and shared resources",
      9: "beliefs, travel, studies, and the expansion of consciousness",
      10: "vocation, career, reputation, and ambitions",
      11: "collective projects, friendships, and the vision of the future",
      12: "inner life, the unconscious, withdrawal, and spirituality",
    },

    fallbackPlanetName:
      "a particular planetary energy",
    fallbackPlanetText:
      "This planet occupies an important place in your natal chart.",
    fallbackHouseText:
      "The available data do not allow a dominant house to be identified with sufficient precision.",

    dominantHouseText:
      "House {house} concentrates an important part of your energy. It concerns {meaning}. Experiences related to this area probably occupy a major place in your personal development.",

    globalSynthesis:
      "Your dominant signature combines the {element} element with a {modality} dynamic. {planet} stands out as one of the most important forces in your chart. {houseText} This combination does not summarize your entire personality, but it shows the general tone that most often returns in the way you think, feel, and act.",

    planetCountSingular: "planet",
    planetCountPlural: "planets",
  },

  es: {
    labels: {
      premiumAnalysis: "Análisis Premium",
      dominantsTitle: "Tus dominantes astrológicas",
      dominantsIntro:
        "Las dominantes revelan las energías que aparecen con mayor fuerza en tu carta natal. Forman el tono general de tu personalidad y muestran los mecanismos que utilizas de manera más espontánea.",
      dominantElement: "Elemento dominante",
      dominantModality: "Modalidad dominante",
      analyzedPlanets: "de los planetas analizados",
      elementsDistribution: "Distribución de los elementos",
      modalitiesDistribution: "Distribución de las modalidades",

      centralStrengthsTitle: "Fuerzas centrales de la carta",
      centralStrengthsIntro:
        "Ciertos planetas y ciertas casas ocupan un lugar estratégico en tu carta natal. Indican los ámbitos en los que tu energía se concentra de manera natural.",
      dominantPlanet: "Planeta dominante",
      centralStrength: "Fuerza central",
      dominantHouse: "Casa dominante",
      dominantHouseWithNumber: "Casa dominante: casa {house}",
      notDetermined: "No determinado",
      naturalFunctioning: "Tu funcionamiento natural",
      overallSignature: "Firma global",
      naturalFunctioningText:
        "Tu elemento dominante describe la sustancia principal de tu energía, mientras que tu modalidad dominante muestra cómo la pones en movimiento. Juntos revelan tu ritmo natural y tu manera habitual de abordar los acontecimientos.",
      dominantsSynthesis: "Síntesis de tus dominantes",
    },

    elements: {
      Feu: {
        name: "Fuego",
        text:
          "El Fuego domina tu carta. Tu energía busca actuar, crear, emprender y brillar. A menudo avanzas gracias al entusiasmo, al instinto y a la necesidad de dar una dirección clara a tu vida.",
      },
      Terre: {
        name: "Tierra",
        text:
          "La Tierra domina tu carta. Priorizas la estabilidad, el realismo, la organización y los resultados concretos. Tu fuerza reside en tu capacidad para construir progresivamente y transformar las ideas en logros duraderos.",
      },
      Air: {
        name: "Aire",
        text:
          "El Aire domina tu carta. El pensamiento, la comunicación, los intercambios y la comprensión ocupan un lugar central. Necesitas relacionar ideas, compartir tus percepciones y conservar cierta libertad intelectual.",
      },
      Eau: {
        name: "Agua",
        text:
          "El Agua domina tu carta. Tu sensibilidad, tu intuición y tu vida emocional influyen profundamente en tu manera de percibir las situaciones. Captas con facilidad los ambientes y los movimientos sutiles que te rodean.",
      },
    },

    modalities: {
      Cardinal: {
        name: "Cardinal",
        text:
          "La modalidad cardinal pone el acento en la iniciativa. Tiendes a provocar el movimiento, iniciar proyectos y reaccionar rápidamente cuando se vuelve necesaria una nueva dirección.",
      },
      Fixe: {
        name: "Fija",
        text:
          "La modalidad fija destaca la perseverancia. Buscas estabilizar, profundizar y mantener lo que has construido. Tu determinación es una fortaleza, aunque a veces puede convertirse en resistencia al cambio.",
      },
      Mutable: {
        name: "Mutable",
        text:
          "La modalidad mutable revela una gran capacidad de adaptación. Sabes ajustar tu enfoque, comprender varios puntos de vista y evolucionar según las circunstancias. Tu desafío consiste en conservar un hilo conductor estable.",
      },
    },

    planets: {
      Sun: { name: "Sol", text: "El Sol refuerza la necesidad de afirmar tu identidad, brillar y construir una vida fiel a tu voluntad profunda." },
      Moon: { name: "Luna", text: "La Luna refuerza la importancia de las emociones, la seguridad interior, las necesidades afectivas y las reacciones instintivas." },
      Mercury: { name: "Mercurio", text: "Mercurio pone el acento en el pensamiento, la comunicación, la curiosidad y la manera en que analizas tu entorno." },
      Venus: { name: "Venus", text: "Venus destaca las relaciones, los valores personales, la búsqueda de armonía, el placer y la sensibilidad estética." },
      Mars: { name: "Marte", text: "Marte amplifica la acción, la voluntad, la afirmación personal, el deseo y la manera en que defiendes tus objetivos." },
      Jupiter: { name: "Júpiter", text: "Júpiter acentúa la expansión, la confianza, el aprendizaje, las posibilidades y la búsqueda de sentido." },
      Saturn: { name: "Saturno", text: "Saturno pone de relieve la responsabilidad, la estructura, la paciencia, los límites y la construcción a largo plazo." },
      Uranus: { name: "Urano", text: "Urano refuerza la necesidad de independencia, originalidad, cambio y libertad personal." },
      Neptune: { name: "Neptuno", text: "Neptuno acentúa la intuición, la imaginación, la receptividad, el idealismo y la sensibilidad al mundo invisible." },
      Pluto: { name: "Plutón", text: "Plutón intensifica los procesos de transformación, regeneración, dominio interior y superación." },
    },

    houseMeanings: {
      1: "la identidad, la apariencia y la manera de entrar en contacto con el mundo",
      2: "los recursos, la seguridad material y los valores personales",
      3: "la comunicación, los aprendizajes y el entorno inmediato",
      4: "las raíces, el hogar, la vida privada y la seguridad emocional",
      5: "la creatividad, los placeres, la expresión personal y los amores",
      6: "el trabajo cotidiano, los hábitos, el servicio y la organización",
      7: "las relaciones, las asociaciones y la búsqueda de equilibrio",
      8: "las transformaciones, la intimidad, las crisis y los recursos compartidos",
      9: "las creencias, los viajes, los estudios y la ampliación de la conciencia",
      10: "la vocación, la carrera, la reputación y las ambiciones",
      11: "los proyectos colectivos, las amistades y la visión del futuro",
      12: "la vida interior, el inconsciente, el retiro y la espiritualidad",
    },

    fallbackPlanetName:
      "una energía planetaria particular",
    fallbackPlanetText:
      "Este planeta ocupa un lugar importante en tu carta natal.",
    fallbackHouseText:
      "Los datos disponibles no permiten identificar una casa dominante con suficiente precisión.",

    dominantHouseText:
      "La casa {house} concentra una parte importante de tu energía. Está relacionada con {meaning}. Las experiencias vinculadas a este ámbito probablemente ocupan un lugar importante en tu desarrollo personal.",

    globalSynthesis:
      "Tu firma dominante asocia el elemento {element} con una dinámica {modality}. {planet} destaca como una de las fuerzas más importantes de tu carta. {houseText} Esta combinación no resume toda tu personalidad, pero muestra el tono general que aparece con mayor frecuencia en tu manera de pensar, sentir y actuar.",

    planetCountSingular: "planeta",
    planetCountPlural: "planetas",
  },

  de: {
    labels: {
      premiumAnalysis: "Premium-Analyse",
      dominantsTitle: "Ihre astrologischen Dominanten",
      dominantsIntro:
        "Die Dominanten zeigen die Energien, die in Ihrem Geburtshoroskop am stärksten hervortreten. Sie bilden den Grundton Ihrer Persönlichkeit und zeigen die Mechanismen, die Sie am spontansten nutzen.",
      dominantElement: "Dominantes Element",
      dominantModality: "Dominante Modalität",
      analyzedPlanets: "der analysierten Planeten",
      elementsDistribution: "Verteilung der Elemente",
      modalitiesDistribution: "Verteilung der Modalitäten",

      centralStrengthsTitle: "Zentrale Kräfte des Horoskops",
      centralStrengthsIntro:
        "Bestimmte Planeten und Häuser nehmen in Ihrem Geburtshoroskop eine strategische Stellung ein. Sie zeigen die Bereiche, in denen sich Ihre Energie auf natürliche Weise konzentriert.",
      dominantPlanet: "Dominanter Planet",
      centralStrength: "Zentrale Stärke",
      dominantHouse: "Dominantes Haus",
      dominantHouseWithNumber: "Dominantes Haus: Haus {house}",
      notDetermined: "Nicht bestimmt",
      naturalFunctioning: "Ihre natürliche Funktionsweise",
      overallSignature: "Gesamtsignatur",
      naturalFunctioningText:
        "Ihr dominantes Element beschreibt die Grundsubstanz Ihrer Energie, während Ihre dominante Modalität zeigt, wie Sie diese in Bewegung setzen. Zusammen offenbaren sie Ihren natürlichen Rhythmus und Ihre übliche Art, Ereignissen zu begegnen.",
      dominantsSynthesis: "Synthese Ihrer Dominanten",
    },

    elements: {
      Feu: {
        name: "Feuer",
        text:
          "Feuer dominiert Ihr Horoskop. Ihre Energie möchte handeln, erschaffen, initiieren und strahlen. Sie kommen häufig durch Begeisterung, Instinkt und das Bedürfnis voran, Ihrem Leben eine klare Richtung zu geben.",
      },
      Terre: {
        name: "Erde",
        text:
          "Erde dominiert Ihr Horoskop. Sie bevorzugen Stabilität, Realismus, Organisation und konkrete Ergebnisse. Ihre Stärke liegt darin, schrittweise aufzubauen und Ideen in dauerhafte Ergebnisse zu verwandeln.",
      },
      Air: {
        name: "Luft",
        text:
          "Luft dominiert Ihr Horoskop. Denken, Kommunikation, Austausch und Verständnis nehmen eine zentrale Stellung ein. Sie müssen Ideen miteinander verbinden, Wahrnehmungen teilen und eine gewisse geistige Freiheit bewahren.",
      },
      Eau: {
        name: "Wasser",
        text:
          "Wasser dominiert Ihr Horoskop. Ihre Sensibilität, Intuition und Gefühlswelt beeinflussen tief, wie Sie Situationen wahrnehmen. Sie nehmen Stimmungen und subtile Bewegungen in Ihrer Umgebung leicht wahr.",
      },
    },

    modalities: {
      Cardinal: {
        name: "Kardinal",
        text:
          "Die kardinale Modalität betont Initiative. Sie neigen dazu, Bewegung auszulösen, Projekte zu starten und schnell zu reagieren, wenn eine neue Richtung notwendig wird.",
      },
      Fixe: {
        name: "Fix",
        text:
          "Die fixe Modalität betont Ausdauer. Sie möchten stabilisieren, vertiefen und bewahren, was Sie aufgebaut haben. Ihre Entschlossenheit ist eine Stärke, auch wenn sie manchmal zu Widerstand gegen Veränderungen werden kann.",
      },
      Mutable: {
        name: "Veränderlich",
        text:
          "Die veränderliche Modalität zeigt eine große Anpassungsfähigkeit. Sie können Ihre Herangehensweise anpassen, mehrere Sichtweisen verstehen und sich den Umständen entsprechend weiterentwickeln. Ihre Herausforderung besteht darin, einen stabilen roten Faden zu bewahren.",
      },
    },

    planets: {
      Sun: { name: "Sonne", text: "Die Sonne verstärkt das Bedürfnis, Ihre Identität zu behaupten, zu strahlen und ein Leben aufzubauen, das Ihrem tiefen Willen entspricht." },
      Moon: { name: "Mond", text: "Der Mond verstärkt die Bedeutung von Emotionen, innerer Sicherheit, emotionalen Bedürfnissen und instinktiven Reaktionen." },
      Mercury: { name: "Merkur", text: "Merkur betont Denken, Kommunikation, Neugier und die Art, wie Sie Ihre Umgebung analysieren." },
      Venus: { name: "Venus", text: "Venus betont Beziehungen, persönliche Werte, Harmoniestreben, Genuss und ästhetische Sensibilität." },
      Mars: { name: "Mars", text: "Mars verstärkt Handlung, Willen, Selbstbehauptung, Begehren und die Art, wie Sie Ihre Ziele verteidigen." },
      Jupiter: { name: "Jupiter", text: "Jupiter betont Expansion, Vertrauen, Lernen, Möglichkeiten und die Suche nach Sinn." },
      Saturn: { name: "Saturn", text: "Saturn hebt Verantwortung, Struktur, Geduld, Grenzen und langfristigen Aufbau hervor." },
      Uranus: { name: "Uranus", text: "Uranus verstärkt das Bedürfnis nach Unabhängigkeit, Originalität, Veränderung und persönlicher Freiheit." },
      Neptune: { name: "Neptun", text: "Neptun betont Intuition, Vorstellungskraft, Empfänglichkeit, Idealismus und Sensibilität für die unsichtbare Welt." },
      Pluto: { name: "Pluto", text: "Pluto intensiviert Prozesse der Transformation, Regeneration, inneren Meisterschaft und Selbstüberwindung." },
    },

    houseMeanings: {
      1: "Identität, Erscheinung und die Art, wie Sie mit der Welt in Kontakt treten",
      2: "Ressourcen, materielle Sicherheit und persönliche Werte",
      3: "Kommunikation, Lernen und das unmittelbare Umfeld",
      4: "Wurzeln, Zuhause, Privatleben und emotionale Sicherheit",
      5: "Kreativität, Vergnügen, Selbstausdruck und Liebe",
      6: "Alltagsarbeit, Gewohnheiten, Dienst und Organisation",
      7: "Beziehungen, Partnerschaften und die Suche nach Gleichgewicht",
      8: "Transformationen, Intimität, Krisen und gemeinsame Ressourcen",
      9: "Überzeugungen, Reisen, Studium und Bewusstseinserweiterung",
      10: "Berufung, Karriere, Ruf und Ambitionen",
      11: "Gemeinschaftsprojekte, Freundschaften und Zukunftsvisionen",
      12: "Innenleben, Unbewusstes, Rückzug und Spiritualität",
    },

    fallbackPlanetName:
      "eine besondere planetarische Energie",
    fallbackPlanetText:
      "Dieser Planet nimmt in Ihrem Geburtshoroskop eine wichtige Stellung ein.",
    fallbackHouseText:
      "Die verfügbaren Daten reichen nicht aus, um ein dominantes Haus mit ausreichender Genauigkeit zu bestimmen.",

    dominantHouseText:
      "Haus {house} bündelt einen wichtigen Teil Ihrer Energie. Es betrifft {meaning}. Erfahrungen in diesem Bereich nehmen wahrscheinlich einen bedeutenden Platz in Ihrer persönlichen Entwicklung ein.",

    globalSynthesis:
      "Ihre dominante Signatur verbindet das Element {element} mit einer {modality} Dynamik. {planet} tritt als eine der wichtigsten Kräfte Ihres Horoskops hervor. {houseText} Diese Kombination fasst nicht Ihre gesamte Persönlichkeit zusammen, zeigt aber den Grundton, der in Ihrer Art zu denken, zu fühlen und zu handeln am häufigsten wiederkehrt.",

    planetCountSingular: "Planet",
    planetCountPlural: "Planeten",
  },

  it: {
    labels: {
      premiumAnalysis: "Analisi Premium",
      dominantsTitle: "Le tue dominanti astrologiche",
      dominantsIntro:
        "Le dominanti rivelano le energie che emergono con maggiore forza nel tuo tema natale. Formano il tono generale della tua personalità e mostrano i meccanismi che utilizzi più spontaneamente.",
      dominantElement: "Elemento dominante",
      dominantModality: "Modalità dominante",
      analyzedPlanets: "dei pianeti analizzati",
      elementsDistribution: "Distribuzione degli elementi",
      modalitiesDistribution: "Distribuzione delle modalità",

      centralStrengthsTitle: "Forze centrali del tema",
      centralStrengthsIntro:
        "Alcuni pianeti e alcune case occupano una posizione strategica nel tuo tema natale. Indicano gli ambiti nei quali la tua energia si concentra naturalmente.",
      dominantPlanet: "Pianeta dominante",
      centralStrength: "Forza centrale",
      dominantHouse: "Casa dominante",
      dominantHouseWithNumber: "Casa dominante: casa {house}",
      notDetermined: "Non determinato",
      naturalFunctioning: "Il tuo funzionamento naturale",
      overallSignature: "Firma globale",
      naturalFunctioningText:
        "Il tuo elemento dominante descrive la sostanza principale della tua energia, mentre la tua modalità dominante mostra come la metti in movimento. Insieme rivelano il tuo ritmo naturale e il tuo modo abituale di affrontare gli eventi.",
      dominantsSynthesis: "Sintesi delle tue dominanti",
    },

    elements: {
      Feu: {
        name: "Fuoco",
        text:
          "Il Fuoco domina il tuo tema. La tua energia cerca di agire, creare, intraprendere e brillare. Spesso avanzi grazie all'entusiasmo, all'istinto e al bisogno di dare una direzione chiara alla tua vita.",
      },
      Terre: {
        name: "Terra",
        text:
          "La Terra domina il tuo tema. Privilegi stabilità, realismo, organizzazione e risultati concreti. La tua forza risiede nella capacità di costruire progressivamente e trasformare le idee in realizzazioni durature.",
      },
      Air: {
        name: "Aria",
        text:
          "L'Aria domina il tuo tema. Pensiero, comunicazione, scambi e comprensione occupano un ruolo centrale. Hai bisogno di collegare le idee, condividere le tue percezioni e conservare una certa libertà intellettuale.",
      },
      Eau: {
        name: "Acqua",
        text:
          "L'Acqua domina il tuo tema. La tua sensibilità, la tua intuizione e la tua vita emotiva influenzano profondamente il modo in cui percepisci le situazioni. Cogli facilmente le atmosfere e i movimenti sottili intorno a te.",
      },
    },

    modalities: {
      Cardinal: {
        name: "Cardinale",
        text:
          "La modalità cardinale pone l'accento sull'iniziativa. Tendi a creare movimento, avviare progetti e reagire rapidamente quando diventa necessaria una nuova direzione.",
      },
      Fixe: {
        name: "Fissa",
        text:
          "La modalità fissa sottolinea la perseveranza. Cerchi di stabilizzare, approfondire e mantenere ciò che hai costruito. La tua determinazione è una forza, anche se a volte può diventare resistenza al cambiamento.",
      },
      Mutable: {
        name: "Mutevole",
        text:
          "La modalità mutevole rivela una grande capacità di adattamento. Sai modificare il tuo approccio, comprendere diversi punti di vista ed evolvere secondo le circostanze. La tua sfida consiste nel mantenere un filo conduttore stabile.",
      },
    },

    planets: {
      Sun: { name: "Sole", text: "Il Sole rafforza il bisogno di affermare la tua identità, brillare e costruire una vita fedele alla tua volontà profonda." },
      Moon: { name: "Luna", text: "La Luna rafforza l'importanza delle emozioni, della sicurezza interiore, dei bisogni affettivi e delle reazioni istintive." },
      Mercury: { name: "Mercurio", text: "Mercurio mette l'accento sul pensiero, sulla comunicazione, sulla curiosità e sul modo in cui analizzi il tuo ambiente." },
      Venus: { name: "Venere", text: "Venere sottolinea le relazioni, i valori personali, la ricerca di armonia, il piacere e la sensibilità estetica." },
      Mars: { name: "Marte", text: "Marte amplifica l'azione, la volontà, l'affermazione personale, il desiderio e il modo in cui difendi i tuoi obiettivi." },
      Jupiter: { name: "Giove", text: "Giove accentua l'espansione, la fiducia, l'apprendimento, le possibilità e la ricerca di significato." },
      Saturn: { name: "Saturno", text: "Saturno mette in evidenza la responsabilità, la struttura, la pazienza, i limiti e la costruzione a lungo termine." },
      Uranus: { name: "Urano", text: "Urano rafforza il bisogno di indipendenza, originalità, cambiamento e libertà personale." },
      Neptune: { name: "Nettuno", text: "Nettuno accentua l'intuizione, l'immaginazione, la ricettività, l'idealismo e la sensibilità al mondo invisibile." },
      Pluto: { name: "Plutone", text: "Plutone intensifica i processi di trasformazione, rigenerazione, padronanza interiore e superamento." },
    },

    houseMeanings: {
      1: "l'identità, l'apparenza e il modo di entrare in contatto con il mondo",
      2: "le risorse, la sicurezza materiale e i valori personali",
      3: "la comunicazione, l'apprendimento e l'ambiente immediato",
      4: "le radici, la casa, la vita privata e la sicurezza emotiva",
      5: "la creatività, i piaceri, l'espressione personale e l'amore",
      6: "il lavoro quotidiano, le abitudini, il servizio e l'organizzazione",
      7: "le relazioni, le collaborazioni e la ricerca di equilibrio",
      8: "le trasformazioni, l'intimità, le crisi e le risorse condivise",
      9: "le convinzioni, i viaggi, gli studi e l'espansione della coscienza",
      10: "la vocazione, la carriera, la reputazione e le ambizioni",
      11: "i progetti collettivi, le amicizie e la visione del futuro",
      12: "la vita interiore, l'inconscio, il ritiro e la spiritualità",
    },

    fallbackPlanetName:
      "un'energia planetaria particolare",
    fallbackPlanetText:
      "Questo pianeta occupa un posto importante nel tuo tema natale.",
    fallbackHouseText:
      "I dati disponibili non permettono di identificare una casa dominante con sufficiente precisione.",

    dominantHouseText:
      "La casa {house} concentra una parte importante della tua energia. Riguarda {meaning}. Le esperienze legate a questo ambito occupano probabilmente un posto importante nel tuo sviluppo personale.",

    globalSynthesis:
      "La tua firma dominante associa l'elemento {element} a una dinamica {modality}. {planet} emerge come una delle forze più importanti del tuo tema. {houseText} Questa combinazione non riassume tutta la tua personalità, ma mostra il tono generale che ricorre più spesso nel tuo modo di pensare, sentire e agire.",

    planetCountSingular: "pianeta",
    planetCountPlural: "pianeti",
  },

  pt: {
    labels: {
      premiumAnalysis: "Análise Premium",
      dominantsTitle: "Suas dominantes astrológicas",
      dominantsIntro:
        "As dominantes revelam as energias que aparecem com mais força no seu mapa natal. Elas formam o tom geral da sua personalidade e mostram os mecanismos que você utiliza de forma mais espontânea.",
      dominantElement: "Elemento dominante",
      dominantModality: "Modalidade dominante",
      analyzedPlanets: "dos planetas analisados",
      elementsDistribution: "Distribuição dos elementos",
      modalitiesDistribution: "Distribuição das modalidades",

      centralStrengthsTitle: "Forças centrais do mapa",
      centralStrengthsIntro:
        "Certos planetas e certas casas ocupam uma posição estratégica no seu mapa natal. Eles indicam as áreas em que sua energia se concentra naturalmente.",
      dominantPlanet: "Planeta dominante",
      centralStrength: "Força central",
      dominantHouse: "Casa dominante",
      dominantHouseWithNumber: "Casa dominante: casa {house}",
      notDetermined: "Não determinado",
      naturalFunctioning: "Seu funcionamento natural",
      overallSignature: "Assinatura geral",
      naturalFunctioningText:
        "Seu elemento dominante descreve a substância principal da sua energia, enquanto sua modalidade dominante mostra como você a coloca em movimento. Juntos, eles revelam seu ritmo natural e sua maneira habitual de abordar os acontecimentos.",
      dominantsSynthesis: "Síntese das suas dominantes",
    },

    elements: {
      Feu: {
        name: "Fogo",
        text:
          "O Fogo domina o seu mapa. Sua energia busca agir, criar, iniciar e brilhar. Você costuma avançar graças ao entusiasmo, ao instinto e à necessidade de dar uma direção clara à sua vida.",
      },
      Terre: {
        name: "Terra",
        text:
          "A Terra domina o seu mapa. Você privilegia estabilidade, realismo, organização e resultados concretos. Sua força está na capacidade de construir progressivamente e transformar ideias em realizações duradouras.",
      },
      Air: {
        name: "Ar",
        text:
          "O Ar domina o seu mapa. Pensamento, comunicação, trocas e compreensão ocupam um lugar central. Você precisa conectar ideias, compartilhar suas percepções e preservar certa liberdade intelectual.",
      },
      Eau: {
        name: "Água",
        text:
          "A Água domina o seu mapa. Sua sensibilidade, sua intuição e sua vida emocional influenciam profundamente a maneira como você percebe as situações. Você capta facilmente os ambientes e os movimentos sutis ao seu redor.",
      },
    },

    modalities: {
      Cardinal: {
        name: "Cardinal",
        text:
          "A modalidade cardinal enfatiza a iniciativa. Você tende a provocar movimento, iniciar projetos e reagir rapidamente quando uma nova direção se torna necessária.",
      },
      Fixe: {
        name: "Fixa",
        text:
          "A modalidade fixa destaca a perseverança. Você procura estabilizar, aprofundar e manter o que construiu. Sua determinação é uma força, embora às vezes possa se transformar em resistência à mudança.",
      },
      Mutable: {
        name: "Mutável",
        text:
          "A modalidade mutável revela uma grande capacidade de adaptação. Você sabe ajustar sua abordagem, compreender vários pontos de vista e evoluir de acordo com as circunstâncias. Seu desafio é manter um fio condutor estável.",
      },
    },

    planets: {
      Sun: { name: "Sol", text: "O Sol reforça a necessidade de afirmar sua identidade, brilhar e construir uma vida fiel à sua vontade profunda." },
      Moon: { name: "Lua", text: "A Lua reforça a importância das emoções, da segurança interior, das necessidades afetivas e das reações instintivas." },
      Mercury: { name: "Mercúrio", text: "Mercúrio enfatiza o pensamento, a comunicação, a curiosidade e a forma como você analisa o seu ambiente." },
      Venus: { name: "Vênus", text: "Vênus destaca os relacionamentos, os valores pessoais, a busca por harmonia, o prazer e a sensibilidade estética." },
      Mars: { name: "Marte", text: "Marte amplifica a ação, a vontade, a afirmação pessoal, o desejo e a forma como você defende seus objetivos." },
      Jupiter: { name: "Júpiter", text: "Júpiter acentua a expansão, a confiança, a aprendizagem, as possibilidades e a busca por sentido." },
      Saturn: { name: "Saturno", text: "Saturno destaca a responsabilidade, a estrutura, a paciência, os limites e a construção a longo prazo." },
      Uranus: { name: "Urano", text: "Urano reforça a necessidade de independência, originalidade, mudança e liberdade pessoal." },
      Neptune: { name: "Netuno", text: "Netuno acentua a intuição, a imaginação, a receptividade, o idealismo e a sensibilidade ao mundo invisível." },
      Pluto: { name: "Plutão", text: "Plutão intensifica os processos de transformação, regeneração, domínio interior e superação." },
    },

    houseMeanings: {
      1: "a identidade, a aparência e a maneira de entrar em contato com o mundo",
      2: "os recursos, a segurança material e os valores pessoais",
      3: "a comunicação, a aprendizagem e o ambiente imediato",
      4: "as raízes, o lar, a vida privada e a segurança emocional",
      5: "a criatividade, os prazeres, a expressão pessoal e os amores",
      6: "o trabalho cotidiano, os hábitos, o serviço e a organização",
      7: "os relacionamentos, as parcerias e a busca por equilíbrio",
      8: "as transformações, a intimidade, as crises e os recursos compartilhados",
      9: "as crenças, as viagens, os estudos e a expansão da consciência",
      10: "a vocação, a carreira, a reputação e as ambições",
      11: "os projetos coletivos, as amizades e a visão do futuro",
      12: "a vida interior, o inconsciente, o recolhimento e a espiritualidade",
    },

    fallbackPlanetName:
      "uma energia planetária particular",
    fallbackPlanetText:
      "Este planeta ocupa um lugar importante no seu mapa natal.",
    fallbackHouseText:
      "Os dados disponíveis não permitem identificar uma casa dominante com precisão suficiente.",

    dominantHouseText:
      "A casa {house} concentra uma parte importante da sua energia. Ela está relacionada a {meaning}. As experiências ligadas a essa área provavelmente ocupam um lugar importante no seu desenvolvimento pessoal.",

    globalSynthesis:
      "Sua assinatura dominante associa o elemento {element} a uma dinâmica {modality}. {planet} se destaca como uma das forças mais importantes do seu mapa. {houseText} Essa combinação não resume toda a sua personalidade, mas mostra o tom geral que aparece com mais frequência na sua maneira de pensar, sentir e agir.",

    planetCountSingular: "planeta",
    planetCountPlural: "planetas",
  },
};

function injectDominantsRuntime(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "const PREMIUM_DOMINANTS_LOCALIZATION =",
    )
  ) {
    return source;
  }

  const copy = COPY[locale];

  const runtime = `
const PREMIUM_DOMINANTS_LOCALIZATION = ${JSON.stringify(copy, null, 2)} as const;

function fillPremiumDominantsTemplate(
  template: string,
  values: Record<string, string>,
): string {
  return template.replace(
    /\\{([a-z0-9]+)\\}/gi,
    (_full, key: string) =>
      values[key] ?? "",
  );
}

const PREMIUM_DOMINANT_PLANET_KEYS: Record<string, string> = {
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

function getLocalizedDominantElementName(
  value: ElementName,
): string {
  return (
    PREMIUM_DOMINANTS_LOCALIZATION
      .elements[value]?.name ||
    value
  );
}

function getLocalizedDominantElementText(
  value: ElementName,
): string {
  return (
    PREMIUM_DOMINANTS_LOCALIZATION
      .elements[value]?.text ||
    ELEMENT_TEXTS[value]
  );
}

function getLocalizedDominantModalityName(
  value: ModalityName,
): string {
  return (
    PREMIUM_DOMINANTS_LOCALIZATION
      .modalities[value]?.name ||
    value
  );
}

function getLocalizedDominantModalityText(
  value: ModalityName,
): string {
  return (
    PREMIUM_DOMINANTS_LOCALIZATION
      .modalities[value]?.text ||
    MODALITY_TEXTS[value]
  );
}

function getLocalizedDominantPlanetName(
  value?: string,
): string {
  if (!value) {
    return PREMIUM_DOMINANTS_LOCALIZATION
      .labels.notDetermined;
  }

  const canonical =
    PREMIUM_DOMINANT_PLANET_KEYS[value] ||
    value;

  return (
    PREMIUM_DOMINANTS_LOCALIZATION
      .planets[canonical]?.name ||
    value
  );
}

function getLocalizedDominantPlanetText(
  value?: string,
): string {
  if (!value) {
    return PREMIUM_DOMINANTS_LOCALIZATION
      .fallbackPlanetText;
  }

  const canonical =
    PREMIUM_DOMINANT_PLANET_KEYS[value] ||
    value;

  return (
    PREMIUM_DOMINANTS_LOCALIZATION
      .planets[canonical]?.text ||
    PREMIUM_DOMINANTS_LOCALIZATION
      .fallbackPlanetText
  );
}

function getLocalizedDominantHouseTitle(
  house: number | null,
): string {
  if (!house) {
    return PREMIUM_DOMINANTS_LOCALIZATION
      .labels.dominantHouse;
  }

  return fillPremiumDominantsTemplate(
    PREMIUM_DOMINANTS_LOCALIZATION
      .labels.dominantHouseWithNumber,
    {
      house: String(house),
    },
  );
}

function getLocalizedDominantPlanetCount(
  count: number,
): string {
  if (count <= 0) {
    return PREMIUM_DOMINANTS_LOCALIZATION
      .labels.notDetermined;
  }

  const unit =
    count === 1
      ? PREMIUM_DOMINANTS_LOCALIZATION
          .planetCountSingular
      : PREMIUM_DOMINANTS_LOCALIZATION
          .planetCountPlural;

  return \`\${count} \${unit}\`;
}

function getLocalizedDominantHouseText(
  house: number | null,
): string {
  if (!house) {
    return PREMIUM_DOMINANTS_LOCALIZATION
      .fallbackHouseText;
  }

  const meaning =
    PREMIUM_DOMINANTS_LOCALIZATION
      .houseMeanings[house] ||
    "";

  return fillPremiumDominantsTemplate(
    PREMIUM_DOMINANTS_LOCALIZATION
      .dominantHouseText,
    {
      house: String(house),
      meaning,
    },
  );
}

function createLocalizedGlobalSynthesis(
  element: DominantResult<ElementName>,
  modality: DominantResult<ModalityName>,
  dominantPlanet: PremiumPlanet | null,
  dominantHouse: number | null,
): string {
  const elementName =
    getLocalizedDominantElementName(
      element.name,
    );

  const modalityName =
    getLocalizedDominantModalityName(
      modality.name,
    ).toLowerCase();

  const planetName =
    dominantPlanet?.name
      ? getLocalizedDominantPlanetName(
          dominantPlanet.name,
        )
      : PREMIUM_DOMINANTS_LOCALIZATION
          .fallbackPlanetName;

  const houseText =
    dominantHouse
      ? fillPremiumDominantsTemplate(
          PREMIUM_DOMINANTS_LOCALIZATION
            .dominantHouseText,
          {
            house: String(dominantHouse),
            meaning:
              PREMIUM_DOMINANTS_LOCALIZATION
                .houseMeanings[
                  dominantHouse
                ] || "",
          },
        )
      : "";

  return fillPremiumDominantsTemplate(
    PREMIUM_DOMINANTS_LOCALIZATION
      .globalSynthesis,
    {
      element: elementName,
      modality: modalityName,
      planet: planetName,
      houseText,
    },
  ).replace(/\\s+/g, " ").trim();
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

function replaceDominantsLabels(
  source: string,
  locale: NonFrenchLocale,
): string {
  const labels =
    COPY[locale].labels;

  const replacements: Array<
    [string, string]
  > = [
    [
      "Analyse Premium",
      labels.premiumAnalysis,
    ],
    [
      "Vos dominantes astrologiques",
      labels.dominantsTitle,
    ],
    [
      "Les dominantes révèlent les énergies qui reviennent le plus fortement dans votre thème natal. Elles forment la tonalité générale de votre personnalité et montrent les mécanismes que vous utilisez le plus spontanément.",
      labels.dominantsIntro,
    ],
    [
      "Élément dominant",
      labels.dominantElement,
    ],
    [
      "Modalité dominante",
      labels.dominantModality,
    ],
    [
      "Répartition des éléments",
      labels.elementsDistribution,
    ],
    [
      "Répartition des modalités",
      labels.modalitiesDistribution,
    ],
    [
      "Les forces centrales du thème",
      labels.centralStrengthsTitle,
    ],
    [
      "Certaines planètes et certaines maisons occupent une place stratégique dans votre carte du ciel. Elles indiquent les domaines dans lesquels votre énergie se concentre naturellement.",
      labels.centralStrengthsIntro,
    ],
    [
      "Force centrale",
      labels.centralStrength,
    ],
    [
      "Votre fonctionnement naturel",
      labels.naturalFunctioning,
    ],
    [
      "Signature globale",
      labels.overallSignature,
    ],
    [
      "Votre élément dominant décrit la substance principale de votre énergie, tandis que votre modalité dominante montre la manière dont vous la mettez en mouvement. Ensemble, ils révèlent votre rythme naturel et votre façon habituelle d’aborder les événements.",
      labels.naturalFunctioningText,
    ],
    [
      "Synthèse de vos dominantes",
      labels.dominantsSynthesis,
    ],
  ];

  let output = source;

  for (
    const [
      french,
      translated,
    ] of replacements
  ) {
    const pattern =
      french
        .trim()
        .split(/\s+/)
        .map(
          (part) =>
            part.replace(
              /[.*+?^${}()|[\]\\]/g,
              "\\$&",
            ),
        )
        .join("\\s+");

    output = output.replace(
      new RegExp(pattern, "g"),
      translated,
    );
  }

  /*
   * "xx % des planètes analysées"
   */
  output = output.replace(
    /%\s+des\s+planètes\s+analysées/g,
    `% ${labels.analyzedPlanets}`,
  );

  /*
   * "Planète dominante :"
   * On garde la valeur dynamique après.
   */
  output = output.replace(
    /Planète\s+dominante\s*:/g,
    `${labels.dominantPlanet}:`,
  );

  return output;
}

function redirectDominantsDynamicValues(
  source: string,
): string {
  let output = source;

  /*
   * Noms visibles des éléments/modalités.
   * Les valeurs techniques Feu/Terre/Air/Eau
   * et Cardinal/Fixe/Mutable restent intactes.
   */
  output = output.replace(
    /\{\s*dominantElement\.name\s*\}/g,
    "{getLocalizedDominantElementName(dominantElement.name)}",
  );

  output = output.replace(
    /\{\s*dominantModality\.name\s*\}/g,
    "{getLocalizedDominantModalityName(dominantModality.name)}",
  );

  /*
   * Textes dynamiques des dominantes.
   */
  output = output.replace(
    /\{\s*ELEMENT_TEXTS\[\s*dominantElement\.name\s*\]\s*\}/g,
    "{getLocalizedDominantElementText(dominantElement.name)}",
  );

  output = output.replace(
    /\{\s*MODALITY_TEXTS\[\s*dominantModality\.name\s*\]\s*\}/g,
    "{getLocalizedDominantModalityText(dominantModality.name)}",
  );

  /*
   * Répartition: noms visibles.
   */
  output = output.replace(
    /label=\{element\}/g,
    "label={getLocalizedDominantElementName(element)}",
  );

  output = output.replace(
    /label=\{modality\}/g,
    "label={getLocalizedDominantModalityName(modality)}",
  );

  /*
   * Planète dominante:
   * on utilise directement la donnée technique
   * plutôt que le PLANET_NAMES français.
   */
  output = output.replace(
    /\{\s*dominantPlanetName\s*\}/g,
    "{getLocalizedDominantPlanetName(dominantPlanet?.name)}",
  );

  output = output.replace(
    /\{\s*dominantPlanetText\s*\}/g,
    "{getLocalizedDominantPlanetText(dominantPlanet?.name)}",
  );

  /*
   * Titre de maison dominante.
   */
  output = output.replace(
    /\{\s*dominantHouse\.house\s*\?\s*`Maison dominante : maison \$\{dominantHouse\.house\}`\s*:\s*"Maison dominante"\s*\}/g,
    "{getLocalizedDominantHouseTitle(dominantHouse.house)}",
  );

  /*
   * Nombre de planètes dans la maison dominante.
   */
  output = output.replace(
    /\{\s*dominantHouse\.count\s*>\s*0\s*\?\s*`\$\{dominantHouse\.count\} planète\$\{\s*dominantHouse\.count\s*>\s*1\s*\?\s*"s"\s*:\s*""\s*\}`\s*:\s*"Non déterminée"\s*\}/g,
    "{getLocalizedDominantPlanetCount(dominantHouse.count)}",
  );

  /*
   * Paragraphe de la maison dominante.
   */
  output = output.replace(
    /\{\s*dominantHouse\.house\s*\?\s*`La maison \$\{dominantHouse\.house\} concentre une partie importante de votre énergie\. Elle concerne \$\{HOUSE_MEANINGS\[dominantHouse\.house\]\}\. Les expériences liées à ce domaine occupent probablement une place majeure dans votre développement personnel\.`\s*:\s*"Les données disponibles ne permettent pas d’identifier une maison dominante avec suffisamment de précision\."\s*\}/g,
    "{getLocalizedDominantHouseText(dominantHouse.house)}",
  );

  /*
   * Synthèse globale dynamique.
   */
  output = output.replace(
    /createGlobalSynthesis\(\s*dominantElement,\s*dominantModality,\s*dominantPlanet,\s*dominantHouse\.house\s*\)/g,
    "createLocalizedGlobalSynthesis(dominantElement, dominantModality, dominantPlanet, dominantHouse.house)",
  );

  return output;
}

export function localizePremiumDominants(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const safeLocale =
    locale as NonFrenchLocale;

  let output = source;

  output = injectDominantsRuntime(
    output,
    safeLocale,
  );

  output = redirectDominantsDynamicValues(
    output,
  );

  output = replaceDominantsLabels(
    output,
    safeLocale,
  );

  return output;
}
