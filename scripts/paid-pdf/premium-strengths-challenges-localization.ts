import type { PaidPdfLocale } from "./premium-localization";

type NonFrenchLocale = Exclude<PaidPdfLocale, "fr">;

const DATA = {
  "labels": {
    "en": {
      "badge": "Premium Analysis",
      "strengthsTitle": "Your natural strengths",
      "strengthsIntro": "Your birth chart highlights the qualities that can support you throughout your journey. These strengths are not always used automatically: they gain power when you consciously recognize and develop them.",
      "challengesTitle": "Your evolution challenges",
      "challengesIntro": "Astrological challenges do not predict failures. They show the areas where certain reactions can become repetitive, as well as the qualities to develop in order to regain more balance and inner freedom.",
      "angularTitle": "Angular planets",
      "internalization": "Internalization",
      "balanceKey": "Key to balance",
      "balanceText": "Your progression becomes more harmonious when you use your dominant qualities without neglecting the less spontaneous needs of your personality.",
      "potentialTitle": "Your potential for growth",
      "practicalTitle": "How to support your evolution",
      "practicalTag": "Practical keys",
      "resource": "Natural resource",
      "mode": "Mode of action",
      "central": "Central strength",
      "inner": "Inner balance",
      "watch": "Point of vigilance",
      "rebalance": "Rebalancing",
      "evolution": "Evolution",
      "conscience": "Awareness",
      "unspecified": "unspecified"
    },
    "es": {
      "badge": "Análisis Premium",
      "strengthsTitle": "Tus fortalezas naturales",
      "strengthsIntro": "Tu carta natal destaca las cualidades que pueden apoyarte a lo largo de tu camino. Estas fortalezas no siempre se utilizan automáticamente: ganan fuerza cuando las reconoces y las desarrollas conscientemente.",
      "challengesTitle": "Tus desafíos de evolución",
      "challengesIntro": "Los desafíos astrológicos no predicen fracasos. Muestran las áreas donde ciertas reacciones pueden volverse repetitivas, así como las cualidades que debes desarrollar para recuperar más equilibrio y libertad interior.",
      "angularTitle": "Planetas angulares",
      "internalization": "Interiorización",
      "balanceKey": "Clave de equilibrio",
      "balanceText": "Tu progreso se vuelve más armonioso cuando utilizas tus cualidades dominantes sin descuidar las necesidades menos espontáneas de tu personalidad.",
      "potentialTitle": "Tu potencial de evolución",
      "practicalTitle": "Cómo acompañar tu evolución",
      "practicalTag": "Claves prácticas",
      "resource": "Recurso natural",
      "mode": "Modo de acción",
      "central": "Fortaleza central",
      "inner": "Equilibrio interior",
      "watch": "Punto de atención",
      "rebalance": "Reequilibrio",
      "evolution": "Evolución",
      "conscience": "Conciencia",
      "unspecified": "no especificado"
    },
    "de": {
      "badge": "Premium-Analyse",
      "strengthsTitle": "Ihre natürlichen Stärken",
      "strengthsIntro": "Ihr Geburtshoroskop hebt die Qualitäten hervor, die Sie auf Ihrem Weg unterstützen können. Diese Stärken werden nicht immer automatisch genutzt: Sie gewinnen an Kraft, wenn Sie sie bewusst erkennen und entwickeln.",
      "challengesTitle": "Ihre Entwicklungsherausforderungen",
      "challengesIntro": "Astrologische Herausforderungen sagen keine Misserfolge voraus. Sie zeigen Bereiche, in denen sich bestimmte Reaktionen wiederholen können, sowie Qualitäten, die Sie entwickeln können, um mehr Gleichgewicht und innere Freiheit zu gewinnen.",
      "angularTitle": "Winkelnahe Planeten",
      "internalization": "Verinnerlichung",
      "balanceKey": "Schlüssel zum Gleichgewicht",
      "balanceText": "Ihre Entwicklung wird harmonischer, wenn Sie Ihre dominanten Qualitäten nutzen, ohne die weniger spontanen Bedürfnisse Ihrer Persönlichkeit zu vernachlässigen.",
      "potentialTitle": "Ihr Entwicklungspotenzial",
      "practicalTitle": "Wie Sie Ihre Entwicklung unterstützen",
      "practicalTag": "Praktische Schlüssel",
      "resource": "Natürliche Ressource",
      "mode": "Handlungsweise",
      "central": "Zentrale Stärke",
      "inner": "Inneres Gleichgewicht",
      "watch": "Wachsamkeitspunkt",
      "rebalance": "Ausgleich",
      "evolution": "Entwicklung",
      "conscience": "Bewusstsein",
      "unspecified": "nicht angegeben"
    },
    "it": {
      "badge": "Analisi Premium",
      "strengthsTitle": "I tuoi punti di forza naturali",
      "strengthsIntro": "Il tuo tema natale mette in luce le qualità che possono sostenerti lungo il tuo percorso. Queste forze non vengono sempre utilizzate automaticamente: acquistano potere quando le riconosci e le sviluppi consapevolmente.",
      "challengesTitle": "Le tue sfide evolutive",
      "challengesIntro": "Le sfide astrologiche non predicono fallimenti. Mostrano le aree in cui alcune reazioni possono diventare ripetitive, così come le qualità da sviluppare per ritrovare maggiore equilibrio e libertà interiore.",
      "angularTitle": "Pianeti angolari",
      "internalization": "Interiorizzazione",
      "balanceKey": "Chiave di equilibrio",
      "balanceText": "Il tuo percorso diventa più armonioso quando utilizzi le qualità dominanti senza trascurare i bisogni meno spontanei della tua personalità.",
      "potentialTitle": "Il tuo potenziale di evoluzione",
      "practicalTitle": "Come accompagnare la tua evoluzione",
      "practicalTag": "Chiavi pratiche",
      "resource": "Risorsa naturale",
      "mode": "Modalità d'azione",
      "central": "Forza centrale",
      "inner": "Equilibrio interiore",
      "watch": "Punto di attenzione",
      "rebalance": "Riequilibrio",
      "evolution": "Evoluzione",
      "conscience": "Consapevolezza",
      "unspecified": "non specificato"
    },
    "pt": {
      "badge": "Análise Premium",
      "strengthsTitle": "Suas forças naturais",
      "strengthsIntro": "Seu mapa natal destaca as qualidades que podem apoiar você ao longo do seu caminho. Essas forças nem sempre são utilizadas automaticamente: ganham potência quando você as reconhece e desenvolve conscientemente.",
      "challengesTitle": "Seus desafios de evolução",
      "challengesIntro": "Os desafios astrológicos não preveem fracassos. Eles mostram as áreas em que certas reações podem se tornar repetitivas, assim como as qualidades a desenvolver para recuperar mais equilíbrio e liberdade interior.",
      "angularTitle": "Planetas angulares",
      "internalization": "Interiorização",
      "balanceKey": "Chave de equilíbrio",
      "balanceText": "Sua progressão se torna mais harmoniosa quando você utiliza suas qualidades dominantes sem negligenciar as necessidades menos espontâneas da sua personalidade.",
      "potentialTitle": "Seu potencial de evolução",
      "practicalTitle": "Como apoiar sua evolução",
      "practicalTag": "Chaves práticas",
      "resource": "Recurso natural",
      "mode": "Modo de ação",
      "central": "Força central",
      "inner": "Equilíbrio interior",
      "watch": "Ponto de atenção",
      "rebalance": "Reequilíbrio",
      "evolution": "Evolução",
      "conscience": "Consciência",
      "unspecified": "não especificado"
    }
  },
  "elementNames": {
    "en": {
      "Feu": "Fire",
      "Terre": "Earth",
      "Air": "Air",
      "Eau": "Water"
    },
    "es": {
      "Feu": "Fuego",
      "Terre": "Tierra",
      "Air": "Aire",
      "Eau": "Agua"
    },
    "de": {
      "Feu": "Feuer",
      "Terre": "Erde",
      "Air": "Luft",
      "Eau": "Wasser"
    },
    "it": {
      "Feu": "Fuoco",
      "Terre": "Terra",
      "Air": "Aria",
      "Eau": "Acqua"
    },
    "pt": {
      "Feu": "Fogo",
      "Terre": "Terra",
      "Air": "Ar",
      "Eau": "Água"
    }
  },
  "modalityNames": {
    "en": {
      "Cardinal": "Cardinal",
      "Fixe": "Fixed",
      "Mutable": "Mutable"
    },
    "es": {
      "Cardinal": "Cardinal",
      "Fixe": "Fija",
      "Mutable": "Mutable"
    },
    "de": {
      "Cardinal": "Kardinal",
      "Fixe": "Fix",
      "Mutable": "Veränderlich"
    },
    "it": {
      "Cardinal": "Cardinale",
      "Fixe": "Fissa",
      "Mutable": "Mutevole"
    },
    "pt": {
      "Cardinal": "Cardinal",
      "Fixe": "Fixa",
      "Mutable": "Mutável"
    }
  },
  "planetNames": {
    "en": {
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
    "es": {
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
    "de": {
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
    "it": {
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
    "pt": {
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
    }
  }
} as const;
const ELEMENT_STRENGTHS = {
  "en": {
    "Feu": "You possess a natural ability to initiate, encourage, and mobilize. Your enthusiasm can become contagious and helps you quickly regain direction when a project inspires you.",
    "Terre": "You know how to give concrete form to ideas. Your realism, consistency, and sense of organization support solid achievements and lasting decisions.",
    "Air": "You quickly understand connections between ideas and people. Your intellectual flexibility, curiosity, and ease of communication are important resources.",
    "Eau": "Your sensitivity allows you to perceive what is not always expressed. Your intuition, emotional depth, and capacity for empathy enrich your relationships and choices."
  },
  "es": {
    "Feu": "Posees una capacidad natural para iniciar, animar y movilizar. Tu entusiasmo puede ser contagioso y te ayuda a recuperar rápidamente una dirección cuando un proyecto te inspira.",
    "Terre": "Sabes dar una forma concreta a las ideas. Tu realismo, constancia y sentido de la organización favorecen logros sólidos y decisiones duraderas.",
    "Air": "Comprendes rápidamente los vínculos entre las ideas y las personas. Tu flexibilidad intelectual, curiosidad y facilidad para comunicarte son recursos importantes.",
    "Eau": "Tu sensibilidad te permite percibir lo que no siempre se expresa. Tu intuición, profundidad emocional y capacidad de empatía enriquecen tus relaciones y tus decisiones."
  },
  "de": {
    "Feu": "Sie besitzen eine natürliche Fähigkeit, Dinge anzustoßen, zu ermutigen und andere zu mobilisieren. Ihre Begeisterung kann ansteckend sein und hilft Ihnen, schnell wieder eine Richtung zu finden, wenn ein Projekt Sie inspiriert.",
    "Terre": "Sie können Ideen konkrete Form geben. Ihr Realismus, Ihre Beständigkeit und Ihr Organisationstalent fördern solide Ergebnisse und nachhaltige Entscheidungen.",
    "Air": "Sie erfassen schnell Zusammenhänge zwischen Ideen und Menschen. Ihre geistige Beweglichkeit, Neugier und Kommunikationsfähigkeit sind wichtige Ressourcen.",
    "Eau": "Ihre Sensibilität lässt Sie wahrnehmen, was nicht immer ausgesprochen wird. Ihre Intuition, emotionale Tiefe und Empathiefähigkeit bereichern Ihre Beziehungen und Entscheidungen."
  },
  "it": {
    "Feu": "Possiedi una capacità naturale di iniziare, incoraggiare e mobilitare. Il tuo entusiasmo può diventare contagioso e ti aiuta a ritrovare rapidamente una direzione quando un progetto ti ispira.",
    "Terre": "Sai dare una forma concreta alle idee. Il tuo realismo, la costanza e il senso dell'organizzazione favoriscono risultati solidi e decisioni durature.",
    "Air": "Comprendi rapidamente i legami tra idee e persone. La tua flessibilità intellettuale, curiosità e facilità di comunicazione sono risorse importanti.",
    "Eau": "La tua sensibilità ti permette di percepire ciò che non viene sempre espresso. L'intuizione, la profondità emotiva e la capacità di empatia arricchiscono le tue relazioni e le tue scelte."
  },
  "pt": {
    "Feu": "Você possui uma capacidade natural de iniciar, incentivar e mobilizar. Seu entusiasmo pode se tornar contagiante e ajuda você a reencontrar rapidamente uma direção quando um projeto inspira você.",
    "Terre": "Você sabe dar forma concreta às ideias. Seu realismo, constância e senso de organização favorecem realizações sólidas e decisões duradouras.",
    "Air": "Você compreende rapidamente as conexões entre ideias e pessoas. Sua flexibilidade intelectual, curiosidade e facilidade de comunicação são recursos importantes.",
    "Eau": "Sua sensibilidade permite perceber o que nem sempre é expresso. Sua intuição, profundidade emocional e capacidade de empatia enriquecem seus relacionamentos e suas escolhas."
  }
} as const;
const ELEMENT_CHALLENGES = {
  "en": {
    "Feu": "A very strong Fire energy can push you to act before measuring all the consequences. The challenge is to preserve momentum while developing patience, listening, and consistency.",
    "Terre": "A strong Earth dominance can make change more difficult when it threatens your reference points. Your evolution sometimes requires accepting uncertainty and leaving more room for improvisation.",
    "Air": "A strong Air energy can lead to prolonged analysis or distance from concrete emotions. The challenge is to turn ideas into decisions and remain connected to what you feel.",
    "Eau": "A highly developed sensitivity can make you more permeable to the atmospheres and emotions of others. Your balance comes from clear boundaries and a better distinction between intuition and worry."
  },
  "es": {
    "Feu": "Una energía de Fuego muy fuerte puede llevarte a actuar antes de medir todas las consecuencias. El desafío consiste en conservar el impulso mientras desarrollas paciencia, escucha y constancia.",
    "Terre": "Una fuerte dominante de Tierra puede dificultar los cambios cuando amenazan tus puntos de referencia. Tu evolución exige a veces aceptar la incertidumbre y dejar más espacio a la improvisación.",
    "Air": "Una fuerte energía de Aire puede llevarte a analizar durante demasiado tiempo o a alejarte de las emociones concretas. El desafío consiste en transformar las ideas en decisiones y mantenerte conectada con lo que sientes.",
    "Eau": "Una sensibilidad muy desarrollada puede hacerte más permeable a los ambientes y emociones de los demás. Tu equilibrio pasa por límites claros y una mejor distinción entre intuición y preocupación."
  },
  "de": {
    "Feu": "Eine sehr starke Feuerenergie kann Sie dazu bringen zu handeln, bevor alle Folgen bedacht sind. Die Herausforderung besteht darin, den Schwung zu bewahren und zugleich Geduld, Zuhören und Beständigkeit zu entwickeln.",
    "Terre": "Eine starke Erdbetonung kann Veränderungen erschweren, wenn sie Ihre vertrauten Bezugspunkte bedrohen. Ihre Entwicklung verlangt manchmal, Unsicherheit anzunehmen und mehr Raum für Improvisation zu lassen.",
    "Air": "Eine starke Luftenergie kann zu langem Analysieren oder zu Distanz gegenüber konkreten Gefühlen führen. Die Herausforderung besteht darin, Ideen in Entscheidungen umzusetzen und mit dem eigenen Empfinden verbunden zu bleiben.",
    "Eau": "Eine stark ausgeprägte Sensibilität kann Sie durchlässiger für Stimmungen und Gefühle anderer machen. Ihr Gleichgewicht entsteht durch klare Grenzen und eine bessere Unterscheidung zwischen Intuition und Sorge."
  },
  "it": {
    "Feu": "Un'energia di Fuoco molto forte può spingerti ad agire prima di aver valutato tutte le conseguenze. La sfida consiste nel mantenere lo slancio sviluppando al tempo stesso pazienza, ascolto e costanza.",
    "Terre": "Una forte dominante di Terra può rendere i cambiamenti più difficili quando minacciano i tuoi punti di riferimento. La tua evoluzione richiede a volte di accettare l'incertezza e lasciare più spazio all'improvvisazione.",
    "Air": "Una forte energia d'Aria può portarti ad analizzare a lungo o ad allontanarti dalle emozioni concrete. La sfida consiste nel trasformare le idee in decisioni e restare presente a ciò che senti.",
    "Eau": "Una sensibilità molto sviluppata può renderti più permeabile alle atmosfere e alle emozioni degli altri. Il tuo equilibrio passa attraverso confini chiari e una migliore distinzione tra intuizione e preoccupazione."
  },
  "pt": {
    "Feu": "Uma energia de Fogo muito forte pode levar você a agir antes de avaliar todas as consequências. O desafio é preservar o impulso enquanto desenvolve paciência, escuta e constância.",
    "Terre": "Uma forte dominante de Terra pode tornar as mudanças mais difíceis quando ameaçam seus pontos de referência. Sua evolução às vezes exige aceitar a incerteza e deixar mais espaço para a improvisação.",
    "Air": "Uma forte energia de Ar pode levar a analisar por muito tempo ou a se afastar das emoções concretas. O desafio é transformar ideias em decisões e permanecer conectada ao que sente.",
    "Eau": "Uma sensibilidade muito desenvolvida pode tornar você mais permeável aos ambientes e às emoções dos outros. Seu equilíbrio passa por limites claros e por uma melhor distinção entre intuição e preocupação."
  }
} as const;
const MISSING_ELEMENT_TEXTS = {
  "en": {
    "Feu": "Fire is less present. You may sometimes hesitate to take the initiative or wait for complete certainty before acting. Developing boldness, movement, and spontaneous confidence can rebalance your chart.",
    "Terre": "Earth is less present. It may be more difficult to maintain a routine, manage details, or turn certain ideas into reality. Simple methods, deadlines, and practical reference points can support you.",
    "Air": "Air is less present. You may favor action or emotion without always taking enough perspective. Putting your thoughts into words and seeking several viewpoints can improve your discernment.",
    "Eau": "Water is less present. You may sometimes intellectualize your emotions or focus quickly on solutions. Giving time to your feelings and inner listening supports better emotional integration."
  },
  "es": {
    "Feu": "El Fuego está menos presente. A veces puedes dudar en tomar la iniciativa o esperar una certeza completa antes de actuar. Desarrollar audacia, movimiento y confianza espontánea puede reequilibrar tu carta.",
    "Terre": "La Tierra está menos presente. Puede resultar más difícil mantener una rutina, gestionar los detalles o concretar ciertas ideas. Los métodos simples, los plazos y los puntos de referencia prácticos pueden ayudarte.",
    "Air": "El Aire está menos presente. Puedes privilegiar la acción o la emoción sin tomar siempre la distancia necesaria. Poner tus pensamientos en palabras y buscar varios puntos de vista puede mejorar tu discernimiento.",
    "Eau": "El Agua está menos presente. A veces puedes intelectualizar tus emociones o concentrarte rápidamente en las soluciones. Dar tiempo a lo que sientes y a la escucha interior favorece una mejor integración emocional."
  },
  "de": {
    "Feu": "Feuer ist weniger vertreten. Sie zögern vielleicht manchmal, die Initiative zu ergreifen, oder warten vor dem Handeln auf völlige Sicherheit. Mut, Bewegung und spontanes Vertrauen können Ihr Horoskop ausgleichen.",
    "Terre": "Erde ist weniger vertreten. Es kann schwieriger sein, Routinen einzuhalten, Details zu verwalten oder bestimmte Ideen umzusetzen. Einfache Methoden, Fristen und praktische Bezugspunkte können Sie unterstützen.",
    "Air": "Luft ist weniger vertreten. Sie bevorzugen möglicherweise Handlung oder Gefühl, ohne immer genügend Abstand zu gewinnen. Gedanken in Worte zu fassen und mehrere Sichtweisen einzubeziehen kann Ihr Urteilsvermögen verbessern.",
    "Eau": "Wasser ist weniger vertreten. Sie können Gefühle manchmal intellektualisieren oder sich schnell auf Lösungen konzentrieren. Zeit für das eigene Empfinden und innere Zuhören fördert eine bessere emotionale Integration."
  },
  "it": {
    "Feu": "Il Fuoco è meno presente. A volte potresti esitare a prendere l'iniziativa o aspettare una certezza completa prima di agire. Sviluppare audacia, movimento e fiducia spontanea può riequilibrare il tuo tema.",
    "Terre": "La Terra è meno presente. Può essere più difficile mantenere una routine, gestire i dettagli o concretizzare alcune idee. Metodi semplici, scadenze e riferimenti pratici possono sostenerti.",
    "Air": "L'Aria è meno presente. Potresti privilegiare l'azione o l'emozione senza prendere sempre la distanza necessaria. Mettere i pensieri in parole e cercare diversi punti di vista può migliorare il discernimento.",
    "Eau": "L'Acqua è meno presente. A volte puoi intellettualizzare le emozioni o concentrarti rapidamente sulle soluzioni. Dedicare tempo a ciò che senti e all'ascolto interiore favorisce una migliore integrazione emotiva."
  },
  "pt": {
    "Feu": "O Fogo está menos presente. Às vezes você pode hesitar em tomar a iniciativa ou esperar uma certeza completa antes de agir. Desenvolver ousadia, movimento e confiança espontânea pode reequilibrar seu mapa.",
    "Terre": "A Terra está menos presente. Pode ser mais difícil manter uma rotina, cuidar dos detalhes ou concretizar certas ideias. Métodos simples, prazos e referências práticas podem apoiar você.",
    "Air": "O Ar está menos presente. Você pode privilegiar a ação ou a emoção sem sempre tomar a distância necessária. Colocar seus pensamentos em palavras e buscar vários pontos de vista pode melhorar seu discernimento.",
    "Eau": "A Água está menos presente. Às vezes você pode intelectualizar suas emoções ou focar rapidamente nas soluções. Dar tempo ao que sente e à escuta interior favorece uma melhor integração emocional."
  }
} as const;
const MODALITY_STRENGTHS = {
  "en": {
    "Cardinal": "Your ability to begin, decide, and create movement is a major strength. You quickly recognize when a new direction becomes necessary.",
    "Fixe": "Your endurance allows you to stay true to a goal and navigate demanding periods. You possess a great capacity for concentration and consolidation.",
    "Mutable": "Your adaptability helps you evolve in varied contexts. You know how to adjust your methods, learn from experience, and understand several dimensions of the same situation."
  },
  "es": {
    "Cardinal": "Tu capacidad para comenzar, decidir y generar movimiento constituye una gran fortaleza. Reconoces rápidamente cuándo se hace necesaria una nueva dirección.",
    "Fixe": "Tu resistencia te permite mantenerte fiel a un objetivo y atravesar períodos exigentes. Posees una gran capacidad de concentración y consolidación.",
    "Mutable": "Tu adaptabilidad te ayuda a evolucionar en contextos variados. Sabes ajustar tus métodos, aprender de la experiencia y comprender varias dimensiones de una misma situación."
  },
  "de": {
    "Cardinal": "Ihre Fähigkeit zu beginnen, zu entscheiden und Bewegung auszulösen ist eine große Stärke. Sie erkennen schnell, wann eine neue Richtung notwendig wird.",
    "Fixe": "Ihre Ausdauer ermöglicht es Ihnen, einem Ziel treu zu bleiben und anspruchsvolle Phasen zu bewältigen. Sie besitzen eine große Fähigkeit zu Konzentration und Festigung.",
    "Mutable": "Ihre Anpassungsfähigkeit hilft Ihnen, sich in unterschiedlichen Situationen weiterzuentwickeln. Sie können Methoden anpassen, aus Erfahrungen lernen und mehrere Dimensionen derselben Situation verstehen."
  },
  "it": {
    "Cardinal": "La tua capacità di iniziare, decidere e creare movimento è una forza importante. Riconosci rapidamente quando diventa necessaria una nuova direzione.",
    "Fixe": "La tua resistenza ti permette di restare fedele a un obiettivo e attraversare periodi impegnativi. Possiedi una grande capacità di concentrazione e consolidamento.",
    "Mutable": "La tua adattabilità ti aiuta a evolvere in contesti diversi. Sai adeguare i metodi, imparare dall'esperienza e comprendere più dimensioni della stessa situazione."
  },
  "pt": {
    "Cardinal": "Sua capacidade de começar, decidir e criar movimento é uma grande força. Você reconhece rapidamente quando uma nova direção se torna necessária.",
    "Fixe": "Sua resistência permite permanecer fiel a um objetivo e atravessar períodos exigentes. Você possui grande capacidade de concentração e consolidação.",
    "Mutable": "Sua adaptabilidade ajuda você a evoluir em contextos variados. Você sabe ajustar seus métodos, aprender com a experiência e compreender várias dimensões de uma mesma situação."
  }
} as const;
const MODALITY_CHALLENGES = {
  "en": {
    "Cardinal": "Your desire to move forward can lead you to open several paths without always finishing them. The challenge is to maintain commitment once the initial momentum has passed.",
    "Fixe": "Your perseverance can sometimes become rigidity or attachment to a familiar position. Evolution requires recognizing when holding on becomes less useful than transforming.",
    "Mutable": "Your flexibility can lead you to change direction often or scatter your energy. The challenge is to choose your priorities and preserve continuity."
  },
  "es": {
    "Cardinal": "Tu deseo de avanzar puede llevarte a abrir varios caminos sin terminarlos siempre. El desafío consiste en mantener el compromiso una vez pasado el impulso inicial.",
    "Fixe": "Tu perseverancia puede convertirse a veces en rigidez o apego a una posición conocida. La evolución exige reconocer cuándo conservar resulta menos útil que transformar.",
    "Mutable": "Tu flexibilidad puede llevarte a cambiar de dirección con frecuencia o a dispersarte. El desafío consiste en elegir tus prioridades y mantener continuidad."
  },
  "de": {
    "Cardinal": "Ihr Wunsch voranzukommen kann dazu führen, mehrere Wege zu eröffnen, ohne sie immer abzuschließen. Die Herausforderung besteht darin, das Engagement auch nach dem ersten Schwung aufrechtzuerhalten.",
    "Fixe": "Ihre Ausdauer kann manchmal zu Starrheit oder Festhalten an einer bekannten Position werden. Entwicklung bedeutet zu erkennen, wann Festhalten weniger hilfreich ist als Veränderung.",
    "Mutable": "Ihre Flexibilität kann dazu führen, häufig die Richtung zu wechseln oder sich zu verzetteln. Die Herausforderung besteht darin, Prioritäten zu wählen und Kontinuität zu bewahren."
  },
  "it": {
    "Cardinal": "Il tuo desiderio di avanzare può portarti ad aprire diverse strade senza sempre portarle a termine. La sfida consiste nel mantenere l'impegno una volta passato lo slancio iniziale.",
    "Fixe": "La tua perseveranza può talvolta diventare rigidità o attaccamento a una posizione conosciuta. L'evoluzione richiede di riconoscere quando conservare diventa meno utile che trasformare.",
    "Mutable": "La tua flessibilità può portarti a cambiare spesso direzione o a disperderti. La sfida consiste nello scegliere le priorità e preservare continuità."
  },
  "pt": {
    "Cardinal": "Seu desejo de avançar pode levar você a abrir vários caminhos sem sempre concluí-los. O desafio é manter o compromisso depois que o impulso inicial passa.",
    "Fixe": "Sua perseverança pode às vezes se tornar rigidez ou apego a uma posição conhecida. A evolução exige reconhecer quando conservar se torna menos útil do que transformar.",
    "Mutable": "Sua flexibilidade pode levar você a mudar de direção com frequência ou a se dispersar. O desafio é escolher prioridades e preservar continuidade."
  }
} as const;
const PLANET_STRENGTHS = {
  "en": {
    "Sun": "You can develop a strong awareness of your identity and a capacity to shine when your actions align with your deep values.",
    "Moon": "Your emotional intelligence and ability to understand human needs can become essential resources.",
    "Mercury": "Your analytical mind, curiosity, and way of communicating allow you to create connections and find solutions.",
    "Venus": "Your sense of harmony, values, and relationships supports cooperation and the creation of a pleasant environment.",
    "Mars": "Your courage, will, and action energy help you defend your goals and overcome obstacles.",
    "Jupiter": "Your ability to see the bigger picture, learn, and transmit knowledge supports your growth and confidence.",
    "Saturn": "Your sense of responsibility, endurance, and discipline allows you to build for the long term.",
    "Uranus": "Your originality and independence give you the ability to introduce useful and innovative changes.",
    "Neptune": "Your imagination, intuition, and receptivity nourish your creativity and subtle understanding.",
    "Pluto": "Your depth and capacity for regeneration allow you to transform crises into new strengths."
  },
  "es": {
    "Sun": "Puedes desarrollar una fuerte conciencia de tu identidad y una capacidad de brillar cuando tus acciones están alineadas con tus valores profundos.",
    "Moon": "Tu inteligencia emocional y tu capacidad para comprender las necesidades humanas pueden convertirse en recursos esenciales.",
    "Mercury": "Tu mente analítica, curiosidad y manera de comunicarte te permiten crear vínculos y encontrar soluciones.",
    "Venus": "Tu sentido de la armonía, los valores y las relaciones favorece la cooperación y la creación de un entorno agradable.",
    "Mars": "Tu valor, voluntad y energía de acción te ayudan a defender tus objetivos y superar obstáculos.",
    "Jupiter": "Tu capacidad para ver más lejos, aprender y transmitir sostiene tu crecimiento y tu confianza.",
    "Saturn": "Tu sentido de la responsabilidad, resistencia y disciplina te permite construir a largo plazo.",
    "Uranus": "Tu originalidad e independencia te dan la capacidad de introducir cambios útiles e innovadores.",
    "Neptune": "Tu imaginación, intuición y receptividad alimentan tu creatividad y tu comprensión sutil.",
    "Pluto": "Tu profundidad y capacidad de regeneración te permiten transformar las crisis en nuevas fortalezas."
  },
  "de": {
    "Sun": "Sie können ein starkes Bewusstsein für Ihre Identität und die Fähigkeit zu strahlen entwickeln, wenn Ihre Handlungen mit Ihren tiefen Werten übereinstimmen.",
    "Moon": "Ihre emotionale Intelligenz und Ihr Verständnis menschlicher Bedürfnisse können zu wesentlichen Ressourcen werden.",
    "Mercury": "Ihr analytischer Geist, Ihre Neugier und Ihre Kommunikation helfen Ihnen, Verbindungen herzustellen und Lösungen zu finden.",
    "Venus": "Ihr Sinn für Harmonie, Werte und Beziehungen unterstützt Kooperation und ein angenehmes Umfeld.",
    "Mars": "Ihr Mut, Ihr Wille und Ihre Tatkraft helfen Ihnen, Ziele zu verteidigen und Hindernisse zu überwinden.",
    "Jupiter": "Ihre Fähigkeit, größer zu denken, zu lernen und Wissen weiterzugeben, unterstützt Wachstum und Vertrauen.",
    "Saturn": "Ihr Verantwortungsgefühl, Ihre Ausdauer und Disziplin ermöglichen langfristigen Aufbau.",
    "Uranus": "Ihre Originalität und Unabhängigkeit befähigen Sie, nützliche und innovative Veränderungen einzuführen.",
    "Neptune": "Ihre Vorstellungskraft, Intuition und Empfänglichkeit nähren Kreativität und feines Verständnis.",
    "Pluto": "Ihre Tiefe und Regenerationskraft ermöglichen es Ihnen, Krisen in neue Stärken zu verwandeln."
  },
  "it": {
    "Sun": "Puoi sviluppare una forte consapevolezza della tua identità e la capacità di brillare quando le tue azioni sono in linea con i tuoi valori profondi.",
    "Moon": "La tua intelligenza emotiva e la capacità di comprendere i bisogni umani possono diventare risorse essenziali.",
    "Mercury": "La tua mente analitica, curiosità e maniera di comunicare ti permettono di creare collegamenti e trovare soluzioni.",
    "Venus": "Il tuo senso dell'armonia, dei valori e delle relazioni favorisce la cooperazione e la creazione di un ambiente piacevole.",
    "Mars": "Il tuo coraggio, la volontà e l'energia d'azione ti aiutano a difendere i tuoi obiettivi e superare gli ostacoli.",
    "Jupiter": "La tua capacità di vedere più in grande, imparare e trasmettere sostiene la crescita e la fiducia.",
    "Saturn": "Il tuo senso di responsabilità, la resistenza e la disciplina ti permettono di costruire nel lungo periodo.",
    "Uranus": "La tua originalità e indipendenza ti danno la capacità di introdurre cambiamenti utili e innovativi.",
    "Neptune": "La tua immaginazione, intuizione e ricettività alimentano la creatività e la comprensione sottile.",
    "Pluto": "La tua profondità e capacità di rigenerazione ti permettono di trasformare le crisi in nuove forze."
  },
  "pt": {
    "Sun": "Você pode desenvolver uma forte consciência da sua identidade e uma capacidade de brilhar quando suas ações estão alinhadas aos seus valores profundos.",
    "Moon": "Sua inteligência emocional e sua capacidade de compreender as necessidades humanas podem se tornar recursos essenciais.",
    "Mercury": "Sua mente analítica, curiosidade e maneira de se comunicar permitem criar conexões e encontrar soluções.",
    "Venus": "Seu senso de harmonia, valores e relacionamentos favorece a cooperação e a criação de um ambiente agradável.",
    "Mars": "Sua coragem, vontade e energia de ação ajudam você a defender seus objetivos e superar obstáculos.",
    "Jupiter": "Sua capacidade de enxergar mais longe, aprender e transmitir conhecimento sustenta seu crescimento e confiança.",
    "Saturn": "Seu senso de responsabilidade, resistência e disciplina permite construir no longo prazo.",
    "Uranus": "Sua originalidade e independência dão a você a capacidade de introduzir mudanças úteis e inovadoras.",
    "Neptune": "Sua imaginação, intuição e receptividade alimentam sua criatividade e compreensão sutil.",
    "Pluto": "Sua profundidade e capacidade de regeneração permitem transformar crises em novas forças."
  }
} as const;
const PLANET_CHALLENGES = {
  "en": {
    "Sun": "The need for recognition can sometimes make you more sensitive to external opinions. Your challenge is to maintain your center, even without immediate validation.",
    "Moon": "Emotional reactions can sometimes take up a lot of space. Learning to name your needs before acting supports better balance.",
    "Mercury": "Intense mental activity can cause dispersion or overanalysis. Your challenge is to distinguish useful reflection from rumination.",
    "Venus": "The desire for harmony can push you to avoid some necessary confrontations. Clear boundaries protect the quality of your relationships.",
    "Mars": "Your energy can become impatience or tension when it lacks a clear direction. Conscious action is more constructive than immediate reaction.",
    "Jupiter": "Optimism can sometimes lead you to overestimate possibilities. Your growth becomes more solid when enthusiasm is accompanied by realism.",
    "Saturn": "Caution and a sense of duty can become heavy when you demand too much of yourself. Your challenge is to integrate flexibility into discipline.",
    "Uranus": "The need for freedom can cause abrupt breaks or resistance to constraints. Independence gains power when it remains aware of its consequences.",
    "Neptune": "Intuition and ideals can sometimes blur boundaries or encourage projection. Concrete clarity protects your sensitivity.",
    "Pluto": "Intensity can lead you to want to control certain situations. Your transformation comes through accepting what needs to evolve."
  },
  "es": {
    "Sun": "La necesidad de reconocimiento puede hacerte más sensible a la mirada exterior. Tu desafío es mantener tu centro incluso sin validación inmediata.",
    "Moon": "Las reacciones emocionales pueden ocupar mucho espacio. Aprender a nombrar tus necesidades antes de actuar favorece un mejor equilibrio.",
    "Mercury": "Una actividad mental intensa puede provocar dispersión o sobreanálisis. Tu desafío es distinguir la reflexión útil de la rumiación.",
    "Venus": "El deseo de armonía puede llevarte a evitar confrontaciones necesarias. Los límites claros protegen la calidad de tus relaciones.",
    "Mars": "Tu energía puede convertirse en impaciencia o tensión cuando carece de una dirección precisa. La acción consciente es más constructiva que la reacción inmediata.",
    "Jupiter": "El optimismo puede llevarte a sobreestimar las posibilidades. Tu crecimiento se vuelve más sólido cuando el entusiasmo se acompaña de realismo.",
    "Saturn": "La prudencia y el sentido del deber pueden volverse pesados cuando te exiges demasiado. Tu desafío es integrar flexibilidad en la disciplina.",
    "Uranus": "La necesidad de libertad puede provocar rupturas rápidas o resistencia a las restricciones. La independencia gana fuerza cuando es consciente de sus consecuencias.",
    "Neptune": "La intuición y el ideal pueden difuminar los límites o favorecer las proyecciones. La claridad concreta protege tu sensibilidad.",
    "Pluto": "La intensidad puede llevarte a querer controlar ciertas situaciones. Tu transformación pasa por aceptar lo que necesita evolucionar."
  },
  "de": {
    "Sun": "Das Bedürfnis nach Anerkennung kann Sie empfindlicher für äußere Meinungen machen. Ihre Herausforderung ist, Ihre Mitte auch ohne sofortige Bestätigung zu bewahren.",
    "Moon": "Emotionale Reaktionen können manchmal viel Raum einnehmen. Bedürfnisse vor dem Handeln zu benennen fördert mehr Gleichgewicht.",
    "Mercury": "Intensive geistige Aktivität kann zu Zerstreuung oder Überanalyse führen. Ihre Herausforderung ist, hilfreiches Nachdenken von Grübeln zu unterscheiden.",
    "Venus": "Der Wunsch nach Harmonie kann dazu führen, notwendige Konfrontationen zu vermeiden. Klare Grenzen schützen die Qualität Ihrer Beziehungen.",
    "Mars": "Ihre Energie kann zu Ungeduld oder Spannung werden, wenn ihr eine klare Richtung fehlt. Bewusstes Handeln ist konstruktiver als unmittelbare Reaktion.",
    "Jupiter": "Optimismus kann dazu führen, Möglichkeiten zu überschätzen. Ihr Wachstum wird solider, wenn Begeisterung von Realismus begleitet wird.",
    "Saturn": "Vorsicht und Pflichtgefühl können schwer werden, wenn Sie zu viel von sich verlangen. Ihre Herausforderung ist, Flexibilität in die Disziplin zu integrieren.",
    "Uranus": "Das Bedürfnis nach Freiheit kann zu abrupten Brüchen oder Widerstand gegen Einschränkungen führen. Unabhängigkeit gewinnt an Kraft, wenn sie ihre Folgen berücksichtigt.",
    "Neptune": "Intuition und Idealismus können Grenzen verwischen oder Projektionen begünstigen. Konkrete Klarheit schützt Ihre Sensibilität.",
    "Pluto": "Intensität kann den Wunsch auslösen, bestimmte Situationen zu kontrollieren. Ihre Transformation entsteht durch die Annahme dessen, was sich entwickeln muss."
  },
  "it": {
    "Sun": "Il bisogno di riconoscimento può renderti più sensibile allo sguardo esterno. La tua sfida è mantenere il tuo centro anche senza una validazione immediata.",
    "Moon": "Le reazioni emotive possono occupare molto spazio. Imparare a nominare i tuoi bisogni prima di agire favorisce un migliore equilibrio.",
    "Mercury": "Un'attività mentale intensa può causare dispersione o sovraanalisi. La tua sfida è distinguere la riflessione utile dalla ruminazione.",
    "Venus": "Il desiderio di armonia può spingerti a evitare confronti necessari. Confini chiari proteggono la qualità delle relazioni.",
    "Mars": "La tua energia può diventare impazienza o tensione quando manca una direzione precisa. L'azione consapevole è più costruttiva della reazione immediata.",
    "Jupiter": "L'ottimismo può portarti a sovrastimare le possibilità. La tua crescita diventa più solida quando l'entusiasmo è accompagnato dal realismo.",
    "Saturn": "La prudenza e il senso del dovere possono diventare pesanti quando pretendi troppo da te stessa. La tua sfida è integrare flessibilità nella disciplina.",
    "Uranus": "Il bisogno di libertà può provocare rotture rapide o resistenza ai vincoli. L'indipendenza acquista forza quando resta consapevole delle conseguenze.",
    "Neptune": "L'intuizione e l'ideale possono confondere i confini o favorire proiezioni. La chiarezza concreta protegge la tua sensibilità.",
    "Pluto": "L'intensità può portarti a voler controllare alcune situazioni. La tua trasformazione passa attraverso l'accettazione di ciò che deve evolvere."
  },
  "pt": {
    "Sun": "A necessidade de reconhecimento pode tornar você mais sensível ao olhar externo. Seu desafio é manter seu centro mesmo sem validação imediata.",
    "Moon": "As reações emocionais podem ocupar muito espaço. Aprender a nomear suas necessidades antes de agir favorece um melhor equilíbrio.",
    "Mercury": "Uma atividade mental intensa pode causar dispersão ou análise excessiva. Seu desafio é distinguir reflexão útil de ruminação.",
    "Venus": "O desejo de harmonia pode levar você a evitar confrontos necessários. Limites claros protegem a qualidade dos seus relacionamentos.",
    "Mars": "Sua energia pode se tornar impaciência ou tensão quando não encontra uma direção precisa. A ação consciente é mais construtiva do que a reação imediata.",
    "Jupiter": "O otimismo pode levar você a superestimar possibilidades. Seu crescimento se torna mais sólido quando o entusiasmo vem acompanhado de realismo.",
    "Saturn": "A prudência e o senso de dever podem se tornar pesados quando você exige demais de si mesma. Seu desafio é integrar flexibilidade à disciplina.",
    "Uranus": "A necessidade de liberdade pode provocar rupturas rápidas ou resistência às restrições. A independência ganha força quando permanece consciente das consequências.",
    "Neptune": "A intuição e o ideal podem confundir limites ou favorecer projeções. A clareza concreta protege sua sensibilidade.",
    "Pluto": "A intensidade pode levar você a querer controlar certas situações. Sua transformação passa por aceitar o que precisa evoluir."
  }
} as const;
const POTENTIAL_BODY = {
  "en": "Your birth chart shows that your evolution does not depend on a single quality or challenge. It relies on your ability to harmonize your different energies so that they complement rather than oppose each other. Every experience, whether easy or demanding, becomes an opportunity to better understand your functioning and strengthen your inner confidence.\n\nOver time, certain influences in your chart will naturally become more prominent. Qualities that seem discreet today can become true resources through experience, while your natural strengths gain maturity when accompanied by patience, perspective, and discernment.\n\nPeriods of transition do not represent a departure from your true nature, but an invitation to express it more consciously. By welcoming change with confidence, you gradually develop a more balanced, freer personality that is truer to your deep values.\n\nYour natal chart never imposes a fixed destiny. It highlights the resources you possess, the learnings that promote your growth, and the paths that can lead you to a more authentic realization of yourself.",
  "es": "Tu carta natal muestra que tu evolución no depende de una sola cualidad o desafío. Se apoya en tu capacidad para armonizar tus diferentes energías para que se complementen en lugar de oponerse. Cada experiencia, fácil o exigente, se convierte en una oportunidad para comprender mejor tu funcionamiento y reforzar tu confianza interior.\n\nCon el tiempo, ciertas influencias de tu carta tomarán naturalmente más importancia. Las cualidades que hoy parecen discretas pueden convertirse en verdaderos recursos gracias a la experiencia, mientras tus fortalezas naturales ganarán madurez cuando estén acompañadas de paciencia, perspectiva y discernimiento.\n\nLos períodos de transición no representan un alejamiento de tu verdadera naturaleza, sino una invitación a expresarla de manera más consciente. Al acoger los cambios con confianza, desarrollas progresivamente una personalidad más equilibrada, más libre y más fiel a tus valores profundos.\n\nTu carta natal nunca impone un destino fijo. Destaca los recursos que posees, los aprendizajes que favorecen tu crecimiento y los caminos que pueden conducirte hacia una realización más auténtica.",
  "de": "Ihr Geburtshoroskop zeigt, dass Ihre Entwicklung nicht von einer einzigen Qualität oder Herausforderung abhängt. Sie beruht auf Ihrer Fähigkeit, Ihre verschiedenen Energien so zu harmonisieren, dass sie sich ergänzen statt bekämpfen. Jede Erfahrung, ob leicht oder anspruchsvoll, wird zu einer Gelegenheit, Ihr eigenes Funktionieren besser zu verstehen und Ihr inneres Vertrauen zu stärken.\n\nMit der Zeit werden bestimmte Einflüsse Ihres Horoskops natürlicherweise wichtiger. Qualitäten, die heute noch zurückhaltend wirken, können durch Erfahrung zu echten Ressourcen werden, während Ihre natürlichen Stärken mit Geduld, Abstand und Urteilsvermögen reifen.\n\nÜbergangsphasen bedeuten keine Entfernung von Ihrer wahren Natur, sondern eine Einladung, sie bewusster auszudrücken. Wenn Sie Veränderungen mit Vertrauen annehmen, entwickeln Sie nach und nach eine ausgeglichenere, freiere Persönlichkeit, die Ihren tiefen Werten treuer ist.\n\nIhr Geburtshoroskop schreibt niemals ein festes Schicksal vor. Es zeigt Ihre Ressourcen, die Lernprozesse, die Ihr Wachstum fördern, und Wege zu einer authentischeren Selbstverwirklichung.",
  "it": "Il tuo tema natale mostra che la tua evoluzione non dipende da una sola qualità o sfida. Si basa sulla capacità di armonizzare le tue diverse energie affinché si completino invece di opporsi. Ogni esperienza, facile o impegnativa, diventa un'occasione per comprendere meglio il tuo funzionamento e rafforzare la fiducia interiore.\n\nCon il tempo, alcune influenze del tuo tema prenderanno naturalmente più spazio. Le qualità che oggi sembrano discrete possono diventare vere risorse grazie all'esperienza, mentre i tuoi punti di forza naturali matureranno quando saranno accompagnati da pazienza, prospettiva e discernimento.\n\nI periodi di transizione non rappresentano un allontanamento dalla tua vera natura, ma un invito a esprimerla in modo più consapevole. Accogliendo i cambiamenti con fiducia, sviluppi progressivamente una personalità più equilibrata, più libera e più fedele ai tuoi valori profondi.\n\nIl tuo tema natale non impone mai un destino fisso. Mette in luce le risorse di cui disponi, gli apprendimenti che favoriscono la tua crescita e i percorsi che possono condurti verso una realizzazione più autentica di te stessa.",
  "pt": "Seu mapa natal mostra que sua evolução não depende de uma única qualidade ou desafio. Ela se apoia na sua capacidade de harmonizar suas diferentes energias para que se complementem em vez de se oporem. Cada experiência, fácil ou exigente, torna-se uma oportunidade para compreender melhor seu funcionamento e fortalecer sua confiança interior.\n\nCom o tempo, certas influências do seu mapa ganharão naturalmente mais espaço. As qualidades que hoje parecem discretas podem se tornar verdadeiros recursos por meio da experiência, enquanto suas forças naturais ganharão maturidade quando acompanhadas de paciência, perspectiva e discernimento.\n\nOs períodos de transição não representam um afastamento da sua verdadeira natureza, mas um convite para expressá-la de forma mais consciente. Ao acolher as mudanças com confiança, você desenvolve gradualmente uma personalidade mais equilibrada, mais livre e mais fiel aos seus valores profundos.\n\nSeu mapa natal nunca impõe um destino fixo. Ele destaca os recursos que você possui, os aprendizados que favorecem seu crescimento e os caminhos que podem conduzir a uma realização mais autêntica de si mesma."
} as const;
const PRACTICAL_BODY = {
  "en": "• Observe the situations that always trigger the same reactions. They often indicate an important need that requires recognition rather than rejection.\n\n• Rely on your dominant qualities to move forward, but also pay attention to the less spontaneous energies in your chart. They can become new resources over time and with experience.\n\n• When you go through a period of change, ask yourself what this stage invites you to understand, transform, or express more freely. Your evolution becomes more conscious when you give personal meaning to your choices.",
  "es": "• Observa las situaciones que siempre desencadenan las mismas reacciones. A menudo indican una necesidad importante que pide ser reconocida en lugar de rechazada.\n\n• Apóyate en tus cualidades dominantes para avanzar, pero presta también atención a las energías menos espontáneas de tu carta. Pueden convertirse en nuevos recursos con el tiempo y la experiencia.\n\n• Cuando atravieses un período de cambio, pregúntate qué te invita esta etapa a comprender, transformar o expresar con mayor libertad. Tu evolución se vuelve más consciente cuando das un sentido personal a tus decisiones.",
  "de": "• Beobachten Sie Situationen, die immer wieder dieselben Reaktionen auslösen. Sie weisen oft auf ein wichtiges Bedürfnis hin, das Anerkennung statt Ablehnung braucht.\n\n• Nutzen Sie Ihre dominanten Qualitäten, um voranzukommen, achten Sie aber auch auf die weniger spontanen Energien Ihres Horoskops. Sie können mit Zeit und Erfahrung zu neuen Ressourcen werden.\n\n• Wenn Sie eine Phase der Veränderung durchlaufen, fragen Sie sich, was diese Etappe Sie verstehen, verwandeln oder freier ausdrücken lässt. Ihre Entwicklung wird bewusster, wenn Sie Ihren Entscheidungen eine persönliche Bedeutung geben.",
  "it": "• Osserva le situazioni che innescano sempre le stesse reazioni. Spesso indicano un bisogno importante che chiede di essere riconosciuto invece che respinto.\n\n• Affidati alle tue qualità dominanti per avanzare, ma presta attenzione anche alle energie meno spontanee del tuo tema. Possono diventare nuove risorse con il tempo e l'esperienza.\n\n• Quando attraversi un periodo di cambiamento, chiediti che cosa questa fase ti invita a comprendere, trasformare o esprimere più liberamente. La tua evoluzione diventa più consapevole quando dai un significato personale alle tue scelte.",
  "pt": "• Observe as situações que sempre desencadeiam as mesmas reações. Elas costumam indicar uma necessidade importante que pede reconhecimento em vez de rejeição.\n\n• Apoie-se nas suas qualidades dominantes para avançar, mas também preste atenção às energias menos espontâneas do seu mapa. Elas podem se tornar novos recursos com o tempo e a experiência.\n\n• Quando você atravessar um período de mudança, pergunte-se o que essa etapa convida você a compreender, transformar ou expressar com mais liberdade. Sua evolução se torna mais consciente quando você dá um sentido pessoal às suas escolhas."
} as const;
const ANGULAR_NONE = {
  "en": "No main planet clearly stands out as strongly angular in the available data. Your energy therefore seems to be distributed across several areas rather than concentrated on a single axis.",
  "es": "Ningún planeta principal destaca claramente como fuertemente angular en los datos disponibles. Tu energía parece distribuirse entre varios ámbitos más que concentrarse en un solo eje.",
  "de": "Kein Hauptplanet tritt in den verfügbaren Daten eindeutig als stark winkelbetont hervor. Ihre Energie scheint sich daher eher auf mehrere Bereiche zu verteilen als auf eine einzige Achse zu konzentrieren.",
  "it": "Nessun pianeta principale emerge chiaramente come fortemente angolare nei dati disponibili. La tua energia sembra quindi distribuirsi tra diversi ambiti invece di concentrarsi su un solo asse.",
  "pt": "Nenhum planeta principal se destaca claramente como fortemente angular nos dados disponíveis. Sua energia parece, portanto, distribuir-se por várias áreas em vez de se concentrar em um único eixo."
} as const;
const ANGULAR_SUFFIX = {
  "en": "occupy a particularly visible position in your chart. An angular planet tends to express itself directly in personality, decisions, relationships, or professional trajectory.",
  "es": "ocupan una posición especialmente visible en tu carta. Un planeta angular tiende a expresarse directamente en la personalidad, las decisiones, las relaciones o la trayectoria profesional.",
  "de": "nehmen eine besonders sichtbare Position in Ihrem Horoskop ein. Ein winkelbetonter Planet drückt sich häufig direkt in Persönlichkeit, Entscheidungen, Beziehungen oder beruflichem Weg aus.",
  "it": "occupano una posizione particolarmente visibile nel tuo tema. Un pianeta angolare tende a esprimersi direttamente nella personalità, nelle decisioni, nelle relazioni o nella traiettoria professionale.",
  "pt": "ocupam uma posição particularmente visível no seu mapa. Um planeta angular tende a se expressar diretamente na personalidade, nas decisões, nos relacionamentos ou na trajetória profissional."
} as const;
const FINAL_TEMPLATES = {
  "en": "Your development is based on the alliance between {element}, the {modality} dynamic, and the influence of {planet}. Your strengths appear when you use these qualities fully without falling into excess. Developing {weakest} can help you become more balanced, flexible, and conscious of your choices. The challenges observed in a birth chart are not flaws: they represent the areas where your potential for progress is greatest.",
  "es": "Tu desarrollo se apoya en la alianza entre {element}, la dinámica {modality} y la influencia de {planet}. Tus fortalezas aparecen cuando utilizas plenamente estas cualidades sin caer en sus excesos. Desarrollar {weakest} puede ayudarte a ser más equilibrada, flexible y consciente de tus decisiones. Los desafíos observados en una carta natal no son defectos: representan las áreas donde tu potencial de progreso es mayor.",
  "de": "Ihre Entwicklung beruht auf dem Zusammenspiel von {element}, der Dynamik {modality} und dem Einfluss von {planet}. Ihre Stärken zeigen sich, wenn Sie diese Qualitäten voll nutzen, ohne in ihre Übertreibung zu geraten. Die Entwicklung von {weakest} kann Ihnen helfen, ausgeglichener, flexibler und bewusster zu entscheiden. Herausforderungen im Geburtshoroskop sind keine Fehler: Sie zeigen die Bereiche mit dem größten Entwicklungspotenzial.",
  "it": "Il tuo sviluppo si basa sull'alleanza tra {element}, la dinamica {modality} e l'influenza di {planet}. I tuoi punti di forza emergono quando utilizzi pienamente queste qualità senza cadere nei loro eccessi. Sviluppare {weakest} può aiutarti a diventare più equilibrata, flessibile e consapevole delle tue scelte. Le sfide osservate in un tema natale non sono difetti: rappresentano le aree in cui il tuo potenziale di crescita è maggiore.",
  "pt": "Seu desenvolvimento se baseia na aliança entre {element}, a dinâmica {modality} e a influência de {planet}. Suas forças aparecem quando você utiliza plenamente essas qualidades sem cair em seus excessos. Desenvolver {weakest} pode ajudar você a se tornar mais equilibrada, flexível e consciente das suas escolhas. Os desafios observados em um mapa natal não são defeitos: representam as áreas em que seu potencial de progresso é maior."
} as const;
const RETRO_0 = {
  "en": "No main planet is marked as retrograde. Your planetary functions may express themselves relatively directly, although their manifestation always depends on the sign, house, and aspects.",
  "es": "Ningún planeta principal aparece retrógrado. Tus funciones planetarias pueden expresarse de manera relativamente directa, aunque su manifestación siempre depende del signo, la casa y los aspectos.",
  "de": "Kein Hauptplanet ist als rückläufig markiert. Ihre planetaren Funktionen können sich relativ direkt ausdrücken, auch wenn ihre Ausprägung stets von Zeichen, Haus und Aspekten abhängt.",
  "it": "Nessun pianeta principale è indicato come retrogrado. Le tue funzioni planetarie possono esprimersi in modo relativamente diretto, anche se la loro manifestazione dipende sempre dal segno, dalla casa e dagli aspetti.",
  "pt": "Nenhum planeta principal está indicado como retrógrado. Suas funções planetárias podem se expressar de maneira relativamente direta, embora sua manifestação dependa sempre do signo, da casa e dos aspectos."
} as const;
const RETRO_1 = {
  "en": "{count} planet is marked as retrograde. This energy may require more inner reflection before expressing itself clearly in the outside world.",
  "es": "{count} planeta aparece retrógrado. Esta energía puede requerir más reflexión interior antes de expresarse claramente en el mundo exterior.",
  "de": "{count} Planet ist als rückläufig markiert. Diese Energie kann mehr innere Reflexion benötigen, bevor sie sich klar in der Außenwelt ausdrückt.",
  "it": "{count} pianeta è indicato come retrogrado. Questa energia può richiedere maggiore riflessione interiore prima di esprimersi chiaramente nel mondo esterno.",
  "pt": "{count} planeta está indicado como retrógrado. Essa energia pode exigir mais reflexão interior antes de se expressar claramente no mundo exterior."
} as const;
const RETRO_2 = {
  "en": "{count} planets are marked as retrograde. These energies may require more inner reflection before expressing themselves clearly in the outside world.",
  "es": "{count} planetas aparecen retrógrados. Estas energías pueden requerir más reflexión interior antes de expresarse claramente en el mundo exterior.",
  "de": "{count} Planeten sind als rückläufig markiert. Diese Energien können mehr innere Reflexion benötigen, bevor sie sich klar in der Außenwelt ausdrücken.",
  "it": "{count} pianeti sono indicati come retrogradi. Queste energie possono richiedere maggiore riflessione interiore prima di esprimersi chiaramente nel mondo esterno.",
  "pt": "{count} planetas estão indicados como retrógrados. Essas energias podem exigir mais reflexão interior antes de se expressarem claramente no mundo exterior."
} as const;
const RETRO_MANY = {
  "en": "{count} planets are marked as retrograde. Your chart has a highly internalized dimension. You may need to understand your motivations deeply before taking a definitive position or fully showing certain facets of yourself.",
  "es": "{count} planetas aparecen retrógrados. Tu carta posee una dimensión muy interiorizada. Puedes necesitar comprender profundamente tus motivaciones antes de adoptar una posición definitiva o mostrar plenamente ciertas facetas de ti misma.",
  "de": "{count} Planeten sind als rückläufig markiert. Ihr Horoskop besitzt eine stark verinnerlichte Dimension. Sie benötigen möglicherweise ein tiefes Verständnis Ihrer Motive, bevor Sie eine endgültige Position einnehmen oder bestimmte Seiten von sich vollständig zeigen.",
  "it": "{count} pianeti sono indicati come retrogradi. Il tuo tema possiede una dimensione molto interiorizzata. Potresti aver bisogno di comprendere profondamente le tue motivazioni prima di prendere una posizione definitiva o mostrare pienamente alcune parti di te stessa.",
  "pt": "{count} planetas estão indicados como retrógrados. Seu mapa possui uma dimensão muito interiorizada. Você pode precisar compreender profundamente suas motivações antes de tomar uma posição definitiva ou mostrar plenamente certas facetas de si mesma."
} as const;

function replaceAll(source: string, from: string, to: string): string {
  return source.split(from).join(to);
}

function replaceFunction(
  source: string,
  name: string,
  nextName: string,
  replacement: string,
): string {
  const start = source.indexOf("function " + name + "(");
  if (start < 0) return source;
  const end = source.indexOf("function " + nextName + "(", start);
  if (end < 0) return source;
  return source.slice(0, start) + replacement.trim() + "\n\n" + source.slice(end);
}

export function localizePremiumStrengthsChallenges(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") return source;

  const lang = locale as NonFrenchLocale;
  const l = DATA.labels[lang];
  const elementNames = DATA.elementNames[lang] as Record<string, string>;
  const modalityNames = DATA.modalityNames[lang] as Record<string, string>;
  const planetNames = DATA.planetNames[lang] as Record<string, string>;

  let out = source;

  const staticPairs: Array<[string, string]> = [
    ["Analyse Premium", l.badge],
    ["Vos forces naturelles", l.strengthsTitle],
    ["Votre thème natal met en lumière les\n            qualités qui peuvent vous soutenir tout au\n            long de votre parcours. Ces forces ne sont\n            pas toujours utilisées automatiquement :\n            elles gagnent en puissance lorsque vous les\n            reconnaissez et les développez\n            consciemment.", l.strengthsIntro],
    ["Vos défis d’évolution", l.challengesTitle],
    ["Les défis astrologiques ne prédisent pas\n            des échecs. Ils montrent les zones dans\n            lesquelles certaines réactions peuvent\n            devenir répétitives, ainsi que les\n            qualités à développer pour retrouver plus\n            d’équilibre et de liberté intérieure.", l.challengesIntro],
    ["Planètes angulaires", l.angularTitle],
    ["Intériorisation", l.internalization],
    ["Clé d’équilibre", l.balanceKey],
    ["Votre progression devient plus\n                  harmonieuse lorsque vous utilisez vos\n                  qualités dominantes sans négliger les\n                  besoins moins spontanés de votre\n                  personnalité.", l.balanceText],
    ["Votre potentiel d’évolution", l.potentialTitle],
    ["Comment accompagner votre évolution", l.practicalTitle],
    ["Clés pratiques", l.practicalTag],
  ];

  for (const [from, to] of staticPairs) {
    out = replaceAll(out, from, to);
  }

  // Replace dynamic dictionaries while preserving internal French keys.
  const dictPairs: Array<[string, unknown]> = [
    ["ELEMENT_STRENGTHS", ELEMENT_STRENGTHS[lang]],
    ["ELEMENT_CHALLENGES", ELEMENT_CHALLENGES[lang]],
    ["MISSING_ELEMENT_TEXTS", MISSING_ELEMENT_TEXTS[lang]],
    ["MODALITY_STRENGTHS", MODALITY_STRENGTHS[lang]],
    ["MODALITY_CHALLENGES", MODALITY_CHALLENGES[lang]],
    ["PLANET_STRENGTHS", PLANET_STRENGTHS[lang]],
    ["PLANET_CHALLENGES", PLANET_CHALLENGES[lang]],
  ];

  for (const [name, value] of dictPairs) {
    const start = out.indexOf("const " + name + ":");
    if (start < 0) continue;
    const eq = out.indexOf("= {", start);
    if (eq < 0) continue;
    const end = out.indexOf("\n};", eq);
    if (end < 0) continue;
    out =
      out.slice(0, eq + 2) +
      JSON.stringify(value, null, 2) +
      out.slice(end + 2);
  }

  // Localize profile fallbacks.
  out = replaceAll(out, '"non précisé"', JSON.stringify(l.unspecified));

  const elementObject = JSON.stringify(elementNames);
  const modalityObject = JSON.stringify(modalityNames);
  const planetObject = JSON.stringify(planetNames);

  out = replaceFunction(out, "buildStrengthCards", "buildChallengeCards", `
function buildStrengthCards(
  profile: ThemeProfile,
  centralPlanet: PremiumPlanet | null
): InsightCard[] {
  const cards: InsightCard[] = [];
  const elementNames = ${elementObject} as Record<string, string>;
  const modalityNames = ${modalityObject} as Record<string, string>;
  const planetNames = ${planetObject} as Record<string, string>;

  if (profile.dominantElement) {
    cards.push({
      title: ${JSON.stringify({
        en: "Strength of the {element} element",
        es: "Fuerza del elemento {element}",
        de: "Stärke des Elements {element}",
        it: "Forza dell'elemento {element}",
        pt: "Força do elemento {element}",
      }[lang])}.replace("{element}", elementNames[profile.dominantElement] || profile.dominantElement),
      text: ELEMENT_STRENGTHS[profile.dominantElement],
      tag: ${JSON.stringify(l.resource)},
    });
  }

  if (profile.dominantModality) {
    cards.push({
      title: ${JSON.stringify({
        en: "{modality} dynamic",
        es: "Dinámica {modality}",
        de: "{modality}-Dynamik",
        it: "Dinamica {modality}",
        pt: "Dinâmica {modality}",
      }[lang])}.replace("{modality}", modalityNames[profile.dominantModality] || profile.dominantModality),
      text: MODALITY_STRENGTHS[profile.dominantModality],
      tag: ${JSON.stringify(l.mode)},
    });
  }

  if (centralPlanet?.name && PLANET_STRENGTHS[centralPlanet.name]) {
    cards.push({
      title: ${JSON.stringify({
        en: "{planet} as support",
        es: "{planet} como apoyo",
        de: "{planet} als Unterstützung",
        it: "{planet} come sostegno",
        pt: "{planet} como apoio",
      }[lang])}.replace("{planet}", planetNames[centralPlanet.name] || centralPlanet.name),
      text: PLANET_STRENGTHS[centralPlanet.name],
      tag: ${JSON.stringify(l.central)},
    });
  }

  cards.push({
    title: ${JSON.stringify({
      en: "Integration capacity",
      es: "Capacidad de integración",
      de: "Integrationsfähigkeit",
      it: "Capacità di integrazione",
      pt: "Capacidade de integração",
    }[lang])},
    text:
      ${JSON.stringify({
        en: "Your Sun in {sun} and your Moon in {moon} show two important needs in your personality. Your strength increases when your conscious will and emotional balance move in the same direction.",
        es: "Tu Sol en {sun} y tu Luna en {moon} muestran dos necesidades importantes de tu personalidad. Tu fuerza aumenta cuando tu voluntad consciente y tu equilibrio emocional avanzan en la misma dirección.",
        de: "Ihre Sonne in {sun} und Ihr Mond in {moon} zeigen zwei wichtige Bedürfnisse Ihrer Persönlichkeit. Ihre Stärke wächst, wenn bewusster Wille und emotionales Gleichgewicht in dieselbe Richtung gehen.",
        it: "Il tuo Sole in {sun} e la tua Luna in {moon} mostrano due bisogni importanti della tua personalità. La tua forza aumenta quando volontà consapevole ed equilibrio emotivo avanzano nella stessa direzione.",
        pt: "Seu Sol em {sun} e sua Lua em {moon} mostram duas necessidades importantes da sua personalidade. Sua força aumenta quando sua vontade consciente e seu equilíbrio emocional avançam na mesma direção.",
      }[lang])}
        .replace("{sun}", profile.sunSign)
        .replace("{moon}", profile.moonSign),
    tag: ${JSON.stringify(l.inner)},
  });

  return cards.slice(0, 4);
}
`);

  out = replaceFunction(out, "buildChallengeCards", "getAngularText", `
function buildChallengeCards(
  profile: ThemeProfile,
  centralPlanet: PremiumPlanet | null
): InsightCard[] {
  const cards: InsightCard[] = [];
  const elementNames = ${elementObject} as Record<string, string>;
  const modalityNames = ${modalityObject} as Record<string, string>;
  const planetNames = ${planetObject} as Record<string, string>;

  if (profile.dominantElement) {
    cards.push({
      title: ${JSON.stringify({
        en: "Possible excess of {element}",
        es: "Posible exceso de {element}",
        de: "Möglicher Überschuss an {element}",
        it: "Possibile eccesso di {element}",
        pt: "Possível excesso de {element}",
      }[lang])}.replace("{element}", elementNames[profile.dominantElement] || profile.dominantElement),
      text: ELEMENT_CHALLENGES[profile.dominantElement],
      tag: ${JSON.stringify(l.watch)},
    });
  }

  if (profile.weakestElement && profile.weakestElement !== profile.dominantElement) {
    cards.push({
      title: ${JSON.stringify({
        en: "Element to develop: {element}",
        es: "Elemento a desarrollar: {element}",
        de: "Zu entwickelndes Element: {element}",
        it: "Elemento da sviluppare: {element}",
        pt: "Elemento a desenvolver: {element}",
      }[lang])}.replace("{element}", elementNames[profile.weakestElement] || profile.weakestElement),
      text: MISSING_ELEMENT_TEXTS[profile.weakestElement],
      tag: ${JSON.stringify(l.rebalance)},
    });
  }

  if (profile.dominantModality) {
    cards.push({
      title: ${JSON.stringify({
        en: "Challenge of the {modality} modality",
        es: "Desafío de la modalidad {modality}",
        de: "Herausforderung der Modalität {modality}",
        it: "Sfida della modalità {modality}",
        pt: "Desafio da modalidade {modality}",
      }[lang])}.replace("{modality}", modalityNames[profile.dominantModality] || profile.dominantModality),
      text: MODALITY_CHALLENGES[profile.dominantModality],
      tag: ${JSON.stringify(l.evolution)},
    });
  }

  if (centralPlanet?.name && PLANET_CHALLENGES[centralPlanet.name]) {
    cards.push({
      title: ${JSON.stringify({
        en: "Challenge related to {planet}",
        es: "Desafío relacionado con {planet}",
        de: "Herausforderung im Zusammenhang mit {planet}",
        it: "Sfida legata a {planet}",
        pt: "Desafio ligado a {planet}",
      }[lang])}.replace("{planet}", planetNames[centralPlanet.name] || centralPlanet.name),
      text: PLANET_CHALLENGES[centralPlanet.name],
      tag: ${JSON.stringify(l.conscience)},
    });
  }

  return cards.slice(0, 4);
}
`);

  out = replaceFunction(out, "getAngularText", "getRetrogradeText", `
function getAngularText(
  angularPlanetNames: string[]
): string {
  const names = ${planetObject} as Record<string, string>;

  if (angularPlanetNames.length === 0) {
    return ${JSON.stringify(ANGULAR_NONE[lang])};
  }

  const translatedNames = angularPlanetNames.map(
    (planetName) => names[planetName] || planetName
  );

  return (
    translatedNames.join(", ") +
    " " +
    ${JSON.stringify(ANGULAR_SUFFIX[lang])}
  );
}
`);

  out = replaceFunction(out, "getRetrogradeText", "createFinalSynthesis", `
function getRetrogradeText(
  retrogradeCount: number
): string {
  if (retrogradeCount === 0) {
    return ${JSON.stringify(RETRO_0[lang])};
  }

  if (retrogradeCount === 1) {
    return ${JSON.stringify(RETRO_1[lang])}.replace("{count}", String(retrogradeCount));
  }

  if (retrogradeCount === 2) {
    return ${JSON.stringify(RETRO_2[lang])}.replace("{count}", String(retrogradeCount));
  }

  return ${JSON.stringify(RETRO_MANY[lang])}.replace("{count}", String(retrogradeCount));
}
`);

  // Replace the final synthesis function by cutting before InsightCardView.
  out = replaceFunction(out, "createFinalSynthesis", "InsightCardView", `
function createFinalSynthesis(
  profile: ThemeProfile,
  centralPlanet: PremiumPlanet | null
): string {
  const elements = ${elementObject} as Record<string, string>;
  const modalities = ${modalityObject} as Record<string, string>;
  const planets = ${planetObject} as Record<string, string>;

  const planet = centralPlanet?.name
    ? (planets[centralPlanet.name] || centralPlanet.name)
    : ${JSON.stringify({
      en: "your central energy",
      es: "tu energía central",
      de: "Ihre zentrale Energie",
      it: "la tua energia centrale",
      pt: "sua energia central",
    }[lang])};

  const element = profile.dominantElement
    ? (elements[profile.dominantElement] || profile.dominantElement)
    : ${JSON.stringify({
      en: "your dominant element",
      es: "tu elemento dominante",
      de: "Ihr dominantes Element",
      it: "il tuo elemento dominante",
      pt: "seu elemento dominante",
    }[lang])};

  const modality = profile.dominantModality
    ? (modalities[profile.dominantModality] || profile.dominantModality)
    : ${JSON.stringify({
      en: "your dominant modality",
      es: "tu modalidad dominante",
      de: "Ihre dominante Modalität",
      it: "la tua modalità dominante",
      pt: "sua modalidade dominante",
    }[lang])};

  const weakest = profile.weakestElement
    ? (elements[profile.weakestElement] || profile.weakestElement)
    : ${JSON.stringify({
      en: "the least represented element",
      es: "el elemento menos representado",
      de: "das am wenigsten vertretene Element",
      it: "l'elemento meno rappresentato",
      pt: "o elemento menos representado",
    }[lang])};

  return ${JSON.stringify(FINAL_TEMPLATES[lang])}
    .replace("{element}", element)
    .replace("{modality}", modality)
    .replace("{planet}", planet)
    .replace("{weakest}", weakest);
}
`);

  // Replace the long fixed page-32 paragraphs.
  const originalPotential =
`Votre carte du ciel montre que votre évolution ne
    dépend pas d'une seule qualité ou d'un seul défi.
    Elle repose sur votre capacité à harmoniser vos
    différentes énergies afin qu'elles se complètent
    plutôt qu'elles ne s'opposent. Chaque expérience,
    qu'elle soit facile ou exigeante, devient une
    occasion de mieux comprendre votre fonctionnement
    et de renforcer votre confiance intérieure.

    {"\n\n"}

    Au fil du temps, certaines influences de votre
    thème prendront naturellement davantage de place.
    Les qualités qui semblent aujourd'hui discrètes
    peuvent devenir de véritables ressources grâce à
    l'expérience, tandis que vos forces naturelles
    gagneront en maturité lorsqu'elles seront
    accompagnées de patience, de recul et de
    discernement.

    {"\n\n"}

    Les périodes de transition ne représentent pas un
    éloignement de votre véritable nature, mais une
    invitation à l'exprimer de façon plus consciente.
    En accueillant les changements avec confiance,
    vous développez progressivement une personnalité
    plus équilibrée, plus libre et plus fidèle à vos
    valeurs profondes.

    {"\n\n"}

    Votre thème natal n'impose jamais une destinée
    figée. Il met en lumière les ressources dont vous
    disposez, les apprentissages qui favorisent votre
    croissance et les chemins qui peuvent vous conduire
    vers une réalisation plus authentique de vous-même.`;

  out = replaceAll(
    out,
    originalPotential,
    POTENTIAL_BODY[lang].split("\n\n").join('\n\n    {"\\n\\n"}\n\n    '),
  );

  const originalPractical =
`• Observez les situations qui déclenchent toujours
    les mêmes réactions. Elles indiquent souvent un
    besoin important qui demande à être reconnu plutôt
    que repoussé.

    {"\n\n"}

    • Appuyez-vous sur vos qualités dominantes pour
    avancer, mais accordez aussi de l’attention aux
    énergies moins spontanées de votre thème. Elles
    peuvent devenir de nouvelles ressources avec le
    temps et l’expérience.

    {"\n\n"}

    • Lorsque vous traversez une période de changement,
    demandez-vous ce que cette étape vous invite à
    comprendre, à transformer ou à exprimer plus
    librement. Votre évolution devient plus consciente
    lorsque vous donnez un sens personnel à vos choix.`;

  out = replaceAll(
    out,
    originalPractical,
    PRACTICAL_BODY[lang].split("\n\n").join('\n\n    {"\\n\\n"}\n\n    '),
  );

  return out;
}
