import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type ElementKey =
  | "Feu"
  | "Terre"
  | "Air"
  | "Eau";

type ElementsCopy = {
  labels: {
    premiumAnalysis: string;
    balanceOfChart: string;
    fourElements: string;
    intro: string;
    dominantEnergy: string;
    premiumInsight: string;
    naturalStrength: string;
    balanceToDevelop: string;
    note: string;
    notDetermined: string;
    planetSingular: string;
    planetPlural: string;
    noDominant: string;
    fallbackStrength: string;
    fallbackBalance: string;
    fallbackPremium: string;
  };

  elements: Record<
    ElementKey,
    {
      name: string;
      words: string;
      description: string;
      dominantText: string;
      strength: string;
      balance: string;
      premium: string;
    }
  >;
};

const COPY: Record<
  NonFrenchLocale,
  ElementsCopy
> = {
  en: {
    labels: {
      premiumAnalysis: "Premium Analysis",
      balanceOfChart: "Balance of the chart",
      fourElements: "The four elements",
      intro:
        "The elements show how your energy flows naturally. Their distribution reveals the qualities you mobilize spontaneously and those that require more awareness or experience.",
      dominantEnergy: "Your dominant energy",
      premiumInsight: "Premium insight",
      naturalStrength: "Your natural strength",
      balanceToDevelop: "Your balance to develop",
      note:
        "A highly present element represents an energy you express spontaneously. A less represented element is not a weakness: it often corresponds to a quality you develop through experiences, relationships, and the choices of your journey.",
      notDetermined: "Not determined",
      planetSingular: "planet",
      planetPlural: "planets",
      noDominant:
        "No dominant element could be determined from the available data.",
      fallbackStrength:
        "Your chart brings together several forms of energy that can complement one another depending on the situation.",
      fallbackBalance:
        "Observe the qualities you use spontaneously and those that require more attention or practice.",
      fallbackPremium:
        "A balanced distribution can indicate an ability to mobilize different qualities depending on circumstances. The complete chart analysis helps explain how these energies cooperate with one another.",
    },

    elements: {
      Feu: {
        name: "Fire",
        words: "Action • Courage • Inspiration",
        description:
          "Fire represents drive, confidence, the desire to act, and the ability to commit yourself with enthusiasm.",
        dominantText:
          "A dominant Fire element reveals a dynamic, enthusiastic personality driven by action and initiative. You often move forward through instinct, courage, and the desire to create or undertake new projects.",
        strength:
          "Your strength lies in your ability to initiate, act, and move forward with courage. Your energy is fueled by movement, enthusiasm, and the desire to create.",
        balance:
          "Take time to slow down, listen, and consolidate your projects. Patience allows your inspiration to produce more lasting results.",
        premium:
          "A dominant Fire element encourages you to live intensely and seek experiences that stimulate your will. Your challenge is to preserve your momentum without acting too quickly or scattering your energy.",
      },

      Terre: {
        name: "Earth",
        words: "Stability • Realism • Construction",
        description:
          "Earth represents grounding, patience, practicality, and the ability to build something lasting.",
        dominantText:
          "A dominant Earth element reveals a practical, stable personality oriented toward concrete results. You seek solid foundations, reliability, and the ability to build progressively over time.",
        strength:
          "Your strength lies in your stability, practicality, and ability to turn an idea into concrete reality.",
        balance:
          "Make more room for spontaneity, intuition, and change. Everything does not need to be perfectly controlled before you move forward.",
        premium:
          "A dominant Earth element often gives you a strong need for security and tangible results. You progress through consistency, but you benefit from accepting that some stages require flexibility.",
      },

      Air: {
        name: "Air",
        words: "Communication • Curiosity • Ideas",
        description:
          "Air represents thought, exchange, curiosity, and your way of understanding the world through ideas.",
        dominantText:
          "A dominant Air element reveals an intellectual, communicative personality driven by ideas and exchange. You need to understand, connect information, and preserve enough freedom to explore different perspectives.",
        strength:
          "Your strength lies in your curiosity, relational intelligence, and ability to understand several points of view.",
        balance:
          "Return regularly to your emotions and sensations. An idea becomes more powerful when it is also felt and embodied.",
        premium:
          "A dominant Air element favors reflection, communication, and the need to understand. Your challenge is not to remain only in analysis when a situation requires a decision or emotional commitment.",
      },

      Eau: {
        name: "Water",
        words: "Emotions • Intuition • Sensitivity",
        description:
          "Water represents sensitivity, intuition, receptivity, and the depth of your emotional life.",
        dominantText:
          "A dominant Water element reveals an intuitive, sensitive personality deeply connected to emotions. You feel atmospheres intensely and often understand others beyond words. Your strength lies in your empathy, imagination, and inner depth.",
        strength:
          "Your strength lies in your intuition, emotional depth, and your ability to perceive what is not always expressed.",
        balance:
          "Protect your sensitivity without isolating yourself. Clear boundaries allow you to remain available to others without absorbing their emotions.",
        premium:
          "A dominant Water element intensifies your receptivity and inner life. You may strongly feel atmospheres and unspoken words. Your balance often depends on your ability to distinguish your emotions from those of others.",
      },
    },
  },

  es: {
    labels: {
      premiumAnalysis: "Análisis Premium",
      balanceOfChart: "Equilibrio de la carta",
      fourElements: "Los cuatro elementos",
      intro:
        "Los elementos muestran cómo circula naturalmente tu energía. Su distribución revela las cualidades que movilizas espontáneamente y aquellas que requieren más conciencia o experiencia.",
      dominantEnergy: "Tu energía dominante",
      premiumInsight: "Perspectiva Premium",
      naturalStrength: "Tu fuerza natural",
      balanceToDevelop: "Tu equilibrio por desarrollar",
      note:
        "Un elemento muy presente representa una energía que expresas espontáneamente. Un elemento menos representado no es una debilidad: a menudo corresponde a una cualidad que desarrollas a través de las experiencias, las relaciones y las decisiones de tu camino.",
      notDetermined: "No determinado",
      planetSingular: "planeta",
      planetPlural: "planetas",
      noDominant:
        "No se pudo determinar ningún elemento dominante con los datos disponibles.",
      fallbackStrength:
        "Tu carta reúne varias formas de energía que pueden complementarse según las situaciones.",
      fallbackBalance:
        "Observa las cualidades que utilizas espontáneamente y aquellas que requieren más atención o práctica.",
      fallbackPremium:
        "Una distribución equilibrada puede indicar una capacidad para movilizar diferentes cualidades según las circunstancias. El análisis completo de la carta permite comprender cómo cooperan estas energías entre sí.",
    },

    elements: {
      Feu: {
        name: "Fuego",
        words: "Acción • Valor • Inspiración",
        description:
          "El Fuego representa el impulso, la confianza, el deseo de actuar y la capacidad de comprometerte con entusiasmo.",
        dominantText:
          "Una dominante de Fuego revela una personalidad dinámica y entusiasta, impulsada por la acción y la iniciativa. Sueles avanzar gracias al instinto, al valor y al deseo de crear o emprender.",
        strength:
          "Tu fuerza reside en tu capacidad para iniciar, actuar y avanzar con valor. Tu energía se alimenta del movimiento, el entusiasmo y el deseo de crear.",
        balance:
          "Tómate tiempo para reducir el ritmo, escuchar y consolidar tus proyectos. La paciencia permite que tu inspiración produzca resultados más duraderos.",
        premium:
          "Una dominante de Fuego te impulsa a vivir con intensidad y a buscar experiencias que estimulen tu voluntad. Tu desafío consiste en conservar tu impulso sin actuar demasiado rápido ni dispersarte.",
      },

      Terre: {
        name: "Tierra",
        words: "Estabilidad • Realismo • Construcción",
        description:
          "La Tierra representa el arraigo, la paciencia, el sentido práctico y la capacidad de construir algo duradero.",
        dominantText:
          "Una dominante de Tierra revela una personalidad práctica y estable, orientada hacia resultados concretos. Buscas bases sólidas, fiabilidad y la capacidad de construir progresivamente.",
        strength:
          "Tu fuerza reside en tu estabilidad, tu sentido práctico y tu capacidad para transformar una idea en una realidad concreta.",
        balance:
          "Deja más espacio a la espontaneidad, la intuición y el cambio. No todo debe estar perfectamente controlado antes de avanzar.",
        premium:
          "Una dominante de Tierra suele darte una fuerte necesidad de seguridad y resultados tangibles. Progresas gracias a la constancia, pero te beneficia aceptar que algunas etapas requieren flexibilidad.",
      },

      Air: {
        name: "Aire",
        words: "Comunicación • Curiosidad • Ideas",
        description:
          "El Aire representa el pensamiento, los intercambios, la curiosidad y tu manera de comprender el mundo a través de las ideas.",
        dominantText:
          "Una dominante de Aire revela una personalidad intelectual y comunicativa, impulsada por las ideas y los intercambios. Necesitas comprender, relacionar información y conservar suficiente libertad para explorar diferentes perspectivas.",
        strength:
          "Tu fuerza reside en tu curiosidad, tu inteligencia relacional y tu capacidad para comprender varios puntos de vista.",
        balance:
          "Vuelve regularmente a tus emociones y sensaciones. Una idea se vuelve más poderosa cuando también se siente y se encarna.",
        premium:
          "Una dominante de Aire favorece la reflexión, la comunicación y la necesidad de comprender. Tu desafío consiste en no permanecer únicamente en el análisis cuando una situación requiere una decisión o un compromiso emocional.",
      },

      Eau: {
        name: "Agua",
        words: "Emociones • Intuición • Sensibilidad",
        description:
          "El Agua representa la sensibilidad, la intuición, la receptividad y la profundidad de tu vida emocional.",
        dominantText:
          "Una dominante de Agua revela una personalidad intuitiva, sensible y profundamente conectada con las emociones. Percibes los ambientes con intensidad y a menudo comprendes a los demás más allá de las palabras. Tu fuerza reside en tu empatía, imaginación y profundidad interior.",
        strength:
          "Tu fuerza reside en tu intuición, tu profundidad emocional y tu capacidad para percibir lo que no siempre se expresa.",
        balance:
          "Protege tu sensibilidad sin aislarte. Los límites claros te permiten permanecer disponible para los demás sin absorber sus emociones.",
        premium:
          "Una dominante de Agua intensifica tu receptividad y tu vida interior. Puedes percibir intensamente los ambientes y lo que no se dice. Tu equilibrio depende a menudo de tu capacidad para distinguir tus emociones de las de los demás.",
      },
    },
  },

  de: {
    labels: {
      premiumAnalysis: "Premium-Analyse",
      balanceOfChart: "Gleichgewicht des Horoskops",
      fourElements: "Die vier Elemente",
      intro:
        "Die Elemente zeigen, wie Ihre Energie auf natürliche Weise fließt. Ihre Verteilung offenbart die Qualitäten, die Sie spontan einsetzen, und jene, die mehr Bewusstsein oder Erfahrung erfordern.",
      dominantEnergy: "Ihre dominante Energie",
      premiumInsight: "Premium-Einblick",
      naturalStrength: "Ihre natürliche Stärke",
      balanceToDevelop: "Ihr zu entwickelndes Gleichgewicht",
      note:
        "Ein stark vertretenes Element steht für eine Energie, die Sie spontan ausdrücken. Ein weniger vertretenes Element ist keine Schwäche: Es entspricht oft einer Qualität, die Sie durch Erfahrungen, Beziehungen und Entscheidungen auf Ihrem Weg entwickeln.",
      notDetermined: "Nicht bestimmt",
      planetSingular: "Planet",
      planetPlural: "Planeten",
      noDominant:
        "Aus den verfügbaren Daten konnte kein dominantes Element bestimmt werden.",
      fallbackStrength:
        "Ihr Horoskop vereint mehrere Energieformen, die sich je nach Situation ergänzen können.",
      fallbackBalance:
        "Beobachten Sie die Qualitäten, die Sie spontan einsetzen, und jene, die mehr Aufmerksamkeit oder Übung benötigen.",
      fallbackPremium:
        "Eine ausgewogene Verteilung kann auf die Fähigkeit hinweisen, je nach Umständen unterschiedliche Qualitäten einzusetzen. Die vollständige Horoskopanalyse zeigt, wie diese Energien miteinander zusammenwirken.",
    },

    elements: {
      Feu: {
        name: "Feuer",
        words: "Handlung • Mut • Inspiration",
        description:
          "Feuer steht für Antrieb, Selbstvertrauen, Handlungsbereitschaft und die Fähigkeit, sich mit Begeisterung einzusetzen.",
        dominantText:
          "Ein dominantes Feuerelement zeigt eine dynamische, begeisterungsfähige Persönlichkeit, die von Handlung und Initiative getragen wird. Sie kommen oft durch Instinkt, Mut und den Wunsch voran, etwas zu schaffen oder zu beginnen.",
        strength:
          "Ihre Stärke liegt in Ihrer Fähigkeit, Initiative zu ergreifen, zu handeln und mutig voranzugehen. Ihre Energie nährt sich aus Bewegung, Begeisterung und Schaffensdrang.",
        balance:
          "Nehmen Sie sich Zeit, langsamer zu werden, zuzuhören und Ihre Projekte zu festigen. Geduld ermöglicht Ihrer Inspiration nachhaltigere Ergebnisse.",
        premium:
          "Ein dominantes Feuerelement drängt Sie dazu, intensiv zu leben und Erfahrungen zu suchen, die Ihren Willen anregen. Ihre Herausforderung besteht darin, Ihren Schwung zu bewahren, ohne zu schnell zu handeln oder Ihre Energie zu zerstreuen.",
      },

      Terre: {
        name: "Erde",
        words: "Stabilität • Realismus • Aufbau",
        description:
          "Erde steht für Bodenständigkeit, Geduld, Praxisnähe und die Fähigkeit, etwas Dauerhaftes aufzubauen.",
        dominantText:
          "Ein dominantes Erdelement zeigt eine praktische, stabile und auf konkrete Ergebnisse ausgerichtete Persönlichkeit. Sie suchen solide Grundlagen, Verlässlichkeit und die Fähigkeit, Schritt für Schritt aufzubauen.",
        strength:
          "Ihre Stärke liegt in Ihrer Stabilität, Ihrem praktischen Sinn und Ihrer Fähigkeit, eine Idee in konkrete Realität umzusetzen.",
        balance:
          "Geben Sie Spontaneität, Intuition und Veränderung mehr Raum. Nicht alles muss vollkommen kontrolliert sein, bevor Sie weitergehen.",
        premium:
          "Ein dominantes Erdelement verleiht Ihnen häufig ein starkes Bedürfnis nach Sicherheit und greifbaren Ergebnissen. Sie kommen durch Beständigkeit voran, profitieren aber davon, anzuerkennen, dass manche Phasen Flexibilität verlangen.",
      },

      Air: {
        name: "Luft",
        words: "Kommunikation • Neugier • Ideen",
        description:
          "Luft steht für Denken, Austausch, Neugier und Ihre Art, die Welt über Ideen zu verstehen.",
        dominantText:
          "Ein dominantes Luftelement zeigt eine intellektuelle, kommunikative Persönlichkeit, die von Ideen und Austausch getragen wird. Sie möchten verstehen, Informationen verbinden und genügend Freiheit bewahren, um verschiedene Perspektiven zu erkunden.",
        strength:
          "Ihre Stärke liegt in Ihrer Neugier, Ihrer sozialen Intelligenz und Ihrer Fähigkeit, mehrere Sichtweisen zu verstehen.",
        balance:
          "Kehren Sie regelmäßig zu Ihren Gefühlen und Empfindungen zurück. Eine Idee wird kraftvoller, wenn sie auch gefühlt und verkörpert wird.",
        premium:
          "Ein dominantes Luftelement begünstigt Reflexion, Kommunikation und das Bedürfnis zu verstehen. Ihre Herausforderung besteht darin, nicht nur in der Analyse zu bleiben, wenn eine Situation eine Entscheidung oder emotionale Beteiligung verlangt.",
      },

      Eau: {
        name: "Wasser",
        words: "Emotionen • Intuition • Sensibilität",
        description:
          "Wasser steht für Sensibilität, Intuition, Empfänglichkeit und die Tiefe Ihres Gefühlslebens.",
        dominantText:
          "Ein dominantes Wasserelement zeigt eine intuitive, sensible und tief mit Emotionen verbundene Persönlichkeit. Sie nehmen Stimmungen intensiv wahr und verstehen andere oft über Worte hinaus. Ihre Stärke liegt in Ihrer Empathie, Vorstellungskraft und inneren Tiefe.",
        strength:
          "Ihre Stärke liegt in Ihrer Intuition, emotionalen Tiefe und Ihrer Fähigkeit, wahrzunehmen, was nicht immer ausgesprochen wird.",
        balance:
          "Schützen Sie Ihre Sensibilität, ohne sich zu isolieren. Klare Grenzen ermöglichen es Ihnen, für andere da zu sein, ohne deren Emotionen aufzunehmen.",
        premium:
          "Ein dominantes Wasserelement verstärkt Ihre Empfänglichkeit und Ihr Innenleben. Sie können Stimmungen und unausgesprochene Dinge stark wahrnehmen. Ihr Gleichgewicht hängt oft davon ab, Ihre eigenen Gefühle von denen anderer unterscheiden zu können.",
      },
    },
  },

  it: {
    labels: {
      premiumAnalysis: "Analisi Premium",
      balanceOfChart: "Equilibrio del tema",
      fourElements: "I quattro elementi",
      intro:
        "Gli elementi mostrano come fluisce naturalmente la tua energia. La loro distribuzione rivela le qualità che mobiliti spontaneamente e quelle che richiedono maggiore consapevolezza o esperienza.",
      dominantEnergy: "La tua energia dominante",
      premiumInsight: "Approfondimento Premium",
      naturalStrength: "La tua forza naturale",
      balanceToDevelop: "Il tuo equilibrio da sviluppare",
      note:
        "Un elemento molto presente rappresenta un'energia che esprimi spontaneamente. Un elemento meno rappresentato non è una debolezza: spesso corrisponde a una qualità che sviluppi attraverso esperienze, relazioni e scelte del tuo percorso.",
      notDetermined: "Non determinato",
      planetSingular: "pianeta",
      planetPlural: "pianeti",
      noDominant:
        "Non è stato possibile determinare un elemento dominante con i dati disponibili.",
      fallbackStrength:
        "Il tuo tema riunisce diverse forme di energia che possono completarsi a seconda delle situazioni.",
      fallbackBalance:
        "Osserva le qualità che utilizzi spontaneamente e quelle che richiedono maggiore attenzione o pratica.",
      fallbackPremium:
        "Una distribuzione equilibrata può indicare la capacità di mobilitare qualità diverse a seconda delle circostanze. L'analisi completa del tema permette di comprendere come queste energie cooperano tra loro.",
    },

    elements: {
      Feu: {
        name: "Fuoco",
        words: "Azione • Coraggio • Ispirazione",
        description:
          "Il Fuoco rappresenta lo slancio, la fiducia, il desiderio di agire e la capacità di impegnarti con entusiasmo.",
        dominantText:
          "Una dominante di Fuoco rivela una personalità dinamica ed entusiasta, guidata dall'azione e dall'iniziativa. Spesso avanzi grazie all'istinto, al coraggio e al desiderio di creare o intraprendere.",
        strength:
          "La tua forza risiede nella capacità di iniziare, agire e avanzare con coraggio. La tua energia si nutre di movimento, entusiasmo e desiderio di creare.",
        balance:
          "Prenditi il tempo di rallentare, ascoltare e consolidare i tuoi progetti. La pazienza permette alla tua ispirazione di produrre risultati più duraturi.",
        premium:
          "Una dominante di Fuoco ti spinge a vivere con intensità e a cercare esperienze che stimolino la tua volontà. La tua sfida consiste nel preservare il tuo slancio senza agire troppo rapidamente o disperdere le tue energie.",
      },

      Terre: {
        name: "Terra",
        words: "Stabilità • Realismo • Costruzione",
        description:
          "La Terra rappresenta il radicamento, la pazienza, il senso pratico e la capacità di costruire qualcosa di duraturo.",
        dominantText:
          "Una dominante di Terra rivela una personalità pratica e stabile, orientata verso risultati concreti. Cerchi basi solide, affidabilità e la capacità di costruire progressivamente.",
        strength:
          "La tua forza risiede nella stabilità, nel senso pratico e nella capacità di trasformare un'idea in realtà concreta.",
        balance:
          "Lascia più spazio alla spontaneità, all'intuizione e al cambiamento. Non tutto deve essere perfettamente controllato prima di andare avanti.",
        premium:
          "Una dominante di Terra ti dà spesso un forte bisogno di sicurezza e risultati tangibili. Progredisci grazie alla costanza, ma ti è utile accettare che alcune fasi richiedano flessibilità.",
      },

      Air: {
        name: "Aria",
        words: "Comunicazione • Curiosità • Idee",
        description:
          "L'Aria rappresenta il pensiero, gli scambi, la curiosità e il tuo modo di comprendere il mondo attraverso le idee.",
        dominantText:
          "Una dominante di Aria rivela una personalità intellettuale e comunicativa, guidata dalle idee e dagli scambi. Hai bisogno di comprendere, collegare le informazioni e conservare sufficiente libertà per esplorare prospettive diverse.",
        strength:
          "La tua forza risiede nella curiosità, nell'intelligenza relazionale e nella capacità di comprendere più punti di vista.",
        balance:
          "Torna regolarmente alle tue emozioni e sensazioni. Un'idea diventa più potente quando viene anche sentita e incarnata.",
        premium:
          "Una dominante di Aria favorisce la riflessione, la comunicazione e il bisogno di comprendere. La tua sfida consiste nel non restare soltanto nell'analisi quando una situazione richiede una decisione o un coinvolgimento emotivo.",
      },

      Eau: {
        name: "Acqua",
        words: "Emozioni • Intuizione • Sensibilità",
        description:
          "L'Acqua rappresenta la sensibilità, l'intuizione, la ricettività e la profondità della tua vita emotiva.",
        dominantText:
          "Una dominante di Acqua rivela una personalità intuitiva, sensibile e profondamente connessa alle emozioni. Percepisci intensamente le atmosfere e spesso comprendi gli altri oltre le parole. La tua forza risiede nell'empatia, nell'immaginazione e nella profondità interiore.",
        strength:
          "La tua forza risiede nell'intuizione, nella profondità emotiva e nella capacità di percepire ciò che non viene sempre espresso.",
        balance:
          "Proteggi la tua sensibilità senza isolarti. Limiti chiari ti permettono di restare disponibile agli altri senza assorbire le loro emozioni.",
        premium:
          "Una dominante di Acqua intensifica la tua ricettività e la tua vita interiore. Puoi percepire fortemente le atmosfere e ciò che non viene detto. Il tuo equilibrio dipende spesso dalla capacità di distinguere le tue emozioni da quelle degli altri.",
      },
    },
  },

  pt: {
    labels: {
      premiumAnalysis: "Análise Premium",
      balanceOfChart: "Equilíbrio do mapa",
      fourElements: "Os quatro elementos",
      intro:
        "Os elementos mostram como sua energia flui naturalmente. Sua distribuição revela as qualidades que você mobiliza espontaneamente e aquelas que exigem mais consciência ou experiência.",
      dominantEnergy: "Sua energia dominante",
      premiumInsight: "Perspectiva Premium",
      naturalStrength: "Sua força natural",
      balanceToDevelop: "Seu equilíbrio a desenvolver",
      note:
        "Um elemento muito presente representa uma energia que você expressa espontaneamente. Um elemento menos representado não é uma fraqueza: muitas vezes corresponde a uma qualidade que você desenvolve através das experiências, dos relacionamentos e das escolhas do seu percurso.",
      notDetermined: "Não determinado",
      planetSingular: "planeta",
      planetPlural: "planetas",
      noDominant:
        "Não foi possível determinar um elemento dominante com os dados disponíveis.",
      fallbackStrength:
        "Seu mapa reúne várias formas de energia que podem se complementar conforme as situações.",
      fallbackBalance:
        "Observe as qualidades que você utiliza espontaneamente e aquelas que exigem mais atenção ou prática.",
      fallbackPremium:
        "Uma distribuição equilibrada pode indicar a capacidade de mobilizar diferentes qualidades conforme as circunstâncias. A análise completa do mapa permite compreender como essas energias cooperam entre si.",
    },

    elements: {
      Feu: {
        name: "Fogo",
        words: "Ação • Coragem • Inspiração",
        description:
          "O Fogo representa impulso, confiança, desejo de agir e a capacidade de se envolver com entusiasmo.",
        dominantText:
          "Uma dominante de Fogo revela uma personalidade dinâmica e entusiasmada, movida pela ação e pela iniciativa. Você costuma avançar graças ao instinto, à coragem e ao desejo de criar ou empreender.",
        strength:
          "Sua força está na capacidade de iniciar, agir e avançar com coragem. Sua energia se alimenta do movimento, do entusiasmo e do desejo de criar.",
        balance:
          "Reserve um tempo para desacelerar, ouvir e consolidar seus projetos. A paciência permite que sua inspiração produza resultados mais duradouros.",
        premium:
          "Uma dominante de Fogo leva você a viver com intensidade e buscar experiências que estimulem sua vontade. Seu desafio é preservar seu impulso sem agir rápido demais nem dispersar sua energia.",
      },

      Terre: {
        name: "Terra",
        words: "Estabilidade • Realismo • Construção",
        description:
          "A Terra representa enraizamento, paciência, senso prático e a capacidade de construir algo duradouro.",
        dominantText:
          "Uma dominante de Terra revela uma personalidade prática e estável, orientada para resultados concretos. Você busca bases sólidas, confiabilidade e a capacidade de construir progressivamente.",
        strength:
          "Sua força está na estabilidade, no senso prático e na capacidade de transformar uma ideia em realidade concreta.",
        balance:
          "Dê mais espaço à espontaneidade, à intuição e à mudança. Nem tudo precisa estar perfeitamente controlado antes de você avançar.",
        premium:
          "Uma dominante de Terra costuma dar a você uma forte necessidade de segurança e resultados tangíveis. Você progride graças à constância, mas ganha ao aceitar que algumas etapas exigem flexibilidade.",
      },

      Air: {
        name: "Ar",
        words: "Comunicação • Curiosidade • Ideias",
        description:
          "O Ar representa pensamento, trocas, curiosidade e sua maneira de compreender o mundo através das ideias.",
        dominantText:
          "Uma dominante de Ar revela uma personalidade intelectual e comunicativa, movida pelas ideias e pelas trocas. Você precisa compreender, conectar informações e preservar liberdade suficiente para explorar diferentes perspectivas.",
        strength:
          "Sua força está na curiosidade, na inteligência relacional e na capacidade de compreender vários pontos de vista.",
        balance:
          "Retorne regularmente às suas emoções e sensações. Uma ideia se torna mais poderosa quando também é sentida e incorporada.",
        premium:
          "Uma dominante de Ar favorece a reflexão, a comunicação e a necessidade de compreender. Seu desafio é não permanecer apenas na análise quando uma situação exige uma decisão ou um envolvimento emocional.",
      },

      Eau: {
        name: "Água",
        words: "Emoções • Intuição • Sensibilidade",
        description:
          "A Água representa sensibilidade, intuição, receptividade e a profundidade da sua vida emocional.",
        dominantText:
          "Uma dominante de Água revela uma personalidade intuitiva, sensível e profundamente conectada às emoções. Você percebe os ambientes com intensidade e muitas vezes compreende os outros para além das palavras. Sua força está na empatia, na imaginação e na profundidade interior.",
        strength:
          "Sua força está na intuição, na profundidade emocional e na capacidade de perceber o que nem sempre é expresso.",
        balance:
          "Proteja sua sensibilidade sem se isolar. Limites claros permitem que você permaneça disponível para os outros sem absorver suas emoções.",
        premium:
          "Uma dominante de Água intensifica sua receptividade e sua vida interior. Você pode perceber intensamente os ambientes e o que não é dito. Seu equilíbrio depende muitas vezes da capacidade de distinguir suas emoções das emoções dos outros.",
      },
    },
  },
};

function injectElementsRuntime(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "const PREMIUM_ELEMENTS_LOCALIZATION =",
    )
  ) {
    return source;
  }

  const copy = COPY[locale];

  const runtime = `
const PREMIUM_ELEMENTS_LOCALIZATION = ${JSON.stringify(copy, null, 2)} as const;

function getLocalizedElementName(
  element: ElementName,
): string {
  return (
    PREMIUM_ELEMENTS_LOCALIZATION
      .elements[element]?.name ||
    element
  );
}

function getLocalizedElementWords(
  element: ElementName,
): string {
  return (
    PREMIUM_ELEMENTS_LOCALIZATION
      .elements[element]?.words ||
    ELEMENT_WORDS[element]
  );
}

function getLocalizedElementDescription(
  element: ElementName,
): string {
  return (
    PREMIUM_ELEMENTS_LOCALIZATION
      .elements[element]?.description ||
    ELEMENT_DESCRIPTIONS[element]
  );
}

function getLocalizedDominantElementText(
  element: ElementName | null,
): string {
  if (!element) {
    return PREMIUM_ELEMENTS_LOCALIZATION
      .labels.noDominant;
  }

  return (
    PREMIUM_ELEMENTS_LOCALIZATION
      .elements[element]?.dominantText ||
    getElementText(element)
  );
}

function getLocalizedElementInsights(
  element: ElementName | null,
): {
  strength: string;
  balance: string;
  premium: string;
} {
  if (!element) {
    return {
      strength:
        PREMIUM_ELEMENTS_LOCALIZATION
          .labels.fallbackStrength,
      balance:
        PREMIUM_ELEMENTS_LOCALIZATION
          .labels.fallbackBalance,
      premium:
        PREMIUM_ELEMENTS_LOCALIZATION
          .labels.fallbackPremium,
    };
  }

  const localized =
    PREMIUM_ELEMENTS_LOCALIZATION
      .elements[element];

  return {
    strength:
      localized?.strength ||
      ELEMENT_INSIGHTS[element].strength,
    balance:
      localized?.balance ||
      ELEMENT_INSIGHTS[element].balance,
    premium:
      localized?.premium ||
      ELEMENT_INSIGHTS[element].premium,
  };
}

function getLocalizedElementPlanetCount(
  value: number,
): string {
  const unit =
    value === 1
      ? PREMIUM_ELEMENTS_LOCALIZATION
          .labels.planetSingular
      : PREMIUM_ELEMENTS_LOCALIZATION
          .labels.planetPlural;

  return \`\${value} \${unit}\`;
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

function replaceLiteralText(
  source: string,
  french: string,
  translated: string,
): string {
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

  return source.replace(
    new RegExp(pattern, "g"),
    translated,
  );
}

function replaceElementsLabels(
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
      "Équilibre du thème",
      labels.balanceOfChart,
    ],
    [
      "Les quatre éléments",
      labels.fourElements,
    ],
    [
      "Les éléments montrent comment votre énergie circule naturellement. Leur répartition révèle les qualités que vous mobilisez spontanément et celles qui demandent davantage de conscience ou d’expérience.",
      labels.intro,
    ],
    [
      "Votre énergie dominante",
      labels.dominantEnergy,
    ],
    [
      "Regard Premium",
      labels.premiumInsight,
    ],
    [
      "Votre force naturelle",
      labels.naturalStrength,
    ],
    [
      "Votre équilibre à développer",
      labels.balanceToDevelop,
    ],
    [
      "Un élément très présent représente une énergie que vous exprimez spontanément. Un élément moins représenté n’est pas une faiblesse : il correspond souvent à une qualité que vous développez grâce aux expériences, aux relations et aux choix de votre parcours.",
      labels.note,
    ],
  ];

  let output = source;

  for (
    const [
      french,
      translated,
    ] of replacements
  ) {
    output = replaceLiteralText(
      output,
      french,
      translated,
    );
  }

  return output;
}

function redirectElementsDynamicValues(
  source: string,
): string {
  let output = source;

  /*
   * Valeur dynamique de l'élément dans
   * chacune des quatre cartes.
   */
  output = output.replace(
    /\{\s*element\s*\}/g,
    "{getLocalizedElementName(element)}",
  );

  /*
   * Nombre de planètes.
   */
  output = output.replace(
    /\{\s*value\s*===\s*1\s*\?\s*"1 planète"\s*:\s*`\$\{value\} planètes`\s*\}/g,
    "{getLocalizedElementPlanetCount(value)}",
  );

  /*
   * Mots-clés visibles.
   */
  output = output.replace(
    /\{\s*ELEMENT_WORDS\[\s*element\s*\]\s*\}/g,
    "{getLocalizedElementWords(element)}",
  );

  /*
   * Texte de l'élément dominant.
   */
  output = output.replace(
    /const dominantText\s*=\s*getElementText\(\s*dominantElement\s*\);/g,
    "const dominantText = getLocalizedDominantElementText(dominantElement);",
  );

  /*
   * Insight dynamique.
   */
  output = output.replace(
    /const insights\s*=\s*dominantElement[\s\S]*?;\s*\n\s*return\s*\(/,
    `const insights =
    getLocalizedElementInsights(
      dominantElement
    );

  return (`,
  );

  /*
   * Nom visible de l'élément dominant.
   */
  output = output.replace(
    /\{\s*hasDominantElement\s*\?\s*dominantElement\s*:\s*"Non déterminée"\s*\}/g,
    `{hasDominantElement && dominantElement
      ? getLocalizedElementName(dominantElement)
      : PREMIUM_ELEMENTS_LOCALIZATION.labels.notDetermined}`,
  );

  /*
   * Description visible.
   */
  output = output.replace(
    /\{\s*ELEMENT_DESCRIPTIONS\[\s*dominantElement\s*\]\s*\}/g,
    "{getLocalizedElementDescription(dominantElement)}",
  );

  return output;
}

export function localizePremiumElements(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const safeLocale =
    locale as NonFrenchLocale;

  let output = source;

  output = injectElementsRuntime(
    output,
    safeLocale,
  );

  output = redirectElementsDynamicValues(
    output,
  );

  output = replaceElementsLabels(
    output,
    safeLocale,
  );

  return output;
}
