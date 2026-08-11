import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<PaidPdfLocale, "fr">;

type ElementName = "Feu" | "Terre" | "Air" | "Eau";

type ElementCopy = {
  labels: {
    analysis: string;
    kicker: string;
    title: string;
    lead: string;
    fire: string;
    earth: string;
    air: string;
    water: string;
    planetSingular: string;
    planetPlural: string;
    dominantEnergy: string;
    undetermined: string;
    naturalStrength: string;
    balanceToDevelop: string;
    noDominant: string;
    note: string;
  };
  words: Record<ElementName, string>;
  descriptions: Record<ElementName, string>;
  strengths: Record<ElementName, string>;
  balances: Record<ElementName, string>;
  premiums: Record<ElementName, string>;
  fallbackStrength: string;
  fallbackBalance: string;
  fallbackPremium: string;
};

const COPY: Record<NonFrenchLocale, ElementCopy> = {
  en: {
    labels: {
      analysis: "Signature Analysis",
      kicker: "Energy balance",
      title: "The four elements",
      lead: "The four elements reveal how your energy flows naturally. Their balance allows for a better understanding of your spontaneous reactions, your dominant resources, and the qualities that your evolution invites you to develop.",
      fire: "Fire",
      earth: "Earth",
      air: "Air",
      water: "Water",
      planetSingular: "planet",
      planetPlural: "planets",
      dominantEnergy: "Your dominant energy",
      undetermined: "Undetermined",
      naturalStrength: "Your natural strength",
      balanceToDevelop: "Your balance to develop",
      noDominant: "No dominant element could be determined from the available data.",
      note: "A highly present element represents an energy you express spontaneously. A less represented element is not a weakness: it often corresponds to a quality you develop through experiences, relationships, and the choices of your journey.",
    },
    words: {
      Feu: "Action • Courage • Inspiration",
      Terre: "Stability • Realism • Construction",
      Air: "Communication • Curiosity • Ideas",
      Eau: "Emotions • Intuition • Sensitivity",
    },
    descriptions: {
      Feu: "Fire represents drive, confidence, the desire to act, and the ability to commit yourself with enthusiasm.",
      Terre: "Earth represents grounding, patience, practicality, and the ability to build something lasting.",
      Air: "Air represents thought, communication, curiosity, and your way of understanding the world through ideas.",
      Eau: "Water represents sensitivity, intuition, receptivity, and the depth of your emotional life.",
    },
    strengths: {
      Feu: "Your strength lies in your ability to initiate, act, and move forward with courage. Your energy is fueled by movement, enthusiasm, and the desire to create.",
      Terre: "Your strength lies in your stability, practicality, and ability to turn an idea into concrete reality.",
      Air: "Your strength lies in your curiosity, relational intelligence, and ability to understand several points of view.",
      Eau: "Your strength lies in your intuition, emotional depth, and your ability to perceive what is not always expressed.",
    },
    balances: {
      Feu: "Take time to slow down, listen, and consolidate your projects. Patience allows your inspiration to produce more lasting results.",
      Terre: "Make more room for spontaneity, intuition, and change. Not everything has to be perfectly controlled before you move forward.",
      Air: "Regularly reconnect with your emotions and sensations. An idea becomes more powerful when it is also felt and embodied.",
      Eau: "Protect your sensitivity without isolating yourself. Clear boundaries allow you to remain available to others without absorbing their emotions.",
    },
    premiums: {
      Feu: "A dominant Fire element pushes you to live intensely and seek experiences that stimulate your will. Your challenge is to preserve your momentum without acting too quickly or scattering your energy.",
      Terre: "A dominant Earth element often gives you a strong need for security and tangible results. You progress through consistency, while benefiting from accepting that some stages require flexibility.",
      Air: "A dominant Air element favors reflection, communication, and the need to understand. Your challenge is not to remain only in analysis when a situation calls for a decision or emotional commitment.",
      Eau: "A dominant Water element intensifies your receptivity and inner life. You may strongly feel atmospheres and unspoken words. Your balance often depends on your ability to distinguish your emotions from those of others.",
    },
    fallbackStrength: "Your chart brings together several forms of energy that can complement one another depending on the situation.",
    fallbackBalance: "Observe the qualities you use spontaneously and those that require more attention or practice.",
    fallbackPremium: "A balanced distribution can indicate an ability to draw on different qualities depending on the circumstances. A complete chart analysis helps reveal how these energies work together.",
  },

  es: {
    labels: {
      analysis: "Análisis Firma",
      kicker: "Equilibrio energético",
      title: "Los cuatro elementos",
      lead: "Los cuatro elementos revelan cómo circula naturalmente tu energía. Su equilibrio permite comprender mejor tus reacciones espontáneas, tus recursos dominantes y las cualidades que tu evolución te invita a desarrollar.",
      fire: "Fuego",
      earth: "Tierra",
      air: "Aire",
      water: "Agua",
      planetSingular: "planeta",
      planetPlural: "planetas",
      dominantEnergy: "Tu energía dominante",
      undetermined: "No determinada",
      naturalStrength: "Tu fuerza natural",
      balanceToDevelop: "Tu equilibrio a desarrollar",
      noDominant: "No se pudo determinar ningún elemento dominante con los datos disponibles.",
      note: "Un elemento muy presente representa una energía que expresas espontáneamente. Un elemento menos representado no es una debilidad: suele corresponder a una cualidad que desarrollas a través de las experiencias, las relaciones y las decisiones de tu recorrido.",
    },
    words: {
      Feu: "Acción • Valor • Inspiración",
      Terre: "Estabilidad • Realismo • Construcción",
      Air: "Comunicación • Curiosidad • Ideas",
      Eau: "Emociones • Intuición • Sensibilidad",
    },
    descriptions: {
      Feu: "El Fuego representa el impulso, la confianza, el deseo de actuar y la capacidad de comprometerte con entusiasmo.",
      Terre: "La Tierra representa el arraigo, la paciencia, el sentido práctico y la capacidad de construir algo duradero.",
      Air: "El Aire representa el pensamiento, los intercambios, la curiosidad y tu manera de comprender el mundo a través de las ideas.",
      Eau: "El Agua representa la sensibilidad, la intuición, la receptividad y la profundidad de tu vida emocional.",
    },
    strengths: {
      Feu: "Tu fuerza reside en tu capacidad para iniciar, actuar y avanzar con valor. Tu energía se alimenta del movimiento, el entusiasmo y el deseo de crear.",
      Terre: "Tu fuerza reside en tu estabilidad, tu sentido práctico y tu capacidad para transformar una idea en una realidad concreta.",
      Air: "Tu fuerza reside en tu curiosidad, tu inteligencia relacional y tu capacidad para comprender varios puntos de vista.",
      Eau: "Tu fuerza reside en tu intuición, tu profundidad emocional y tu capacidad para percibir lo que no siempre se expresa.",
    },
    balances: {
      Feu: "Tómate el tiempo de reducir el ritmo, escuchar y consolidar tus proyectos. La paciencia permite que tu inspiración produzca resultados más duraderos.",
      Terre: "Deja más espacio a la espontaneidad, la intuición y el cambio. No todo tiene que estar perfectamente controlado antes de avanzar.",
      Air: "Vuelve regularmente a tus emociones y sensaciones. Una idea se vuelve más poderosa cuando también se siente y se encarna.",
      Eau: "Protege tu sensibilidad sin aislarte. Unos límites claros te permiten seguir disponible para los demás sin absorber sus emociones.",
    },
    premiums: {
      Feu: "Una dominante de Fuego te impulsa a vivir con intensidad y a buscar experiencias que estimulen tu voluntad. Tu desafío consiste en preservar tu impulso sin actuar demasiado rápido ni dispersarte.",
      Terre: "Una dominante de Tierra suele darte una fuerte necesidad de seguridad y de resultados tangibles. Avanzas gracias a la constancia, pero te beneficia aceptar que algunas etapas requieren flexibilidad.",
      Air: "Una dominante de Aire favorece la reflexión, la comunicación y la necesidad de comprender. Tu desafío consiste en no quedarte únicamente en el análisis cuando la situación requiere una decisión o un compromiso emocional.",
      Eau: "Una dominante de Agua intensifica tu receptividad y tu vida interior. Puedes sentir intensamente los ambientes y lo que no se dice. Tu equilibrio depende a menudo de tu capacidad para distinguir tus emociones de las de los demás.",
    },
    fallbackStrength: "Tu carta reúne varias formas de energía que pueden complementarse según las situaciones.",
    fallbackBalance: "Observa las cualidades que utilizas espontáneamente y aquellas que requieren más atención o práctica.",
    fallbackPremium: "Una distribución equilibrada puede indicar una capacidad para movilizar distintas cualidades según las circunstancias. El análisis completo de la carta permite comprender cómo cooperan estas energías.",
  },

  de: {
    labels: {
      analysis: "Signatur-Analyse",
      kicker: "Energetisches Gleichgewicht",
      title: "Die vier Elemente",
      lead: "Die vier Elemente zeigen, wie Ihre Energie auf natürliche Weise fließt. Ihr Gleichgewicht hilft Ihnen, Ihre spontanen Reaktionen, Ihre dominanten Ressourcen und die Qualitäten besser zu verstehen, die Sie im Laufe Ihrer Entwicklung entfalten sollen.",
      fire: "Feuer",
      earth: "Erde",
      air: "Luft",
      water: "Wasser",
      planetSingular: "Planet",
      planetPlural: "Planeten",
      dominantEnergy: "Ihre dominante Energie",
      undetermined: "Nicht bestimmt",
      naturalStrength: "Ihre natürliche Stärke",
      balanceToDevelop: "Ihr zu entwickelndes Gleichgewicht",
      noDominant: "Mit den verfügbaren Daten konnte kein dominantes Element bestimmt werden.",
      note: "Ein stark vertretenes Element steht für eine Energie, die Sie spontan ausdrücken. Ein weniger vertretenes Element ist keine Schwäche: Es entspricht oft einer Qualität, die Sie durch Erfahrungen, Beziehungen und die Entscheidungen Ihres Lebenswegs entwickeln.",
    },
    words: {
      Feu: "Handeln • Mut • Inspiration",
      Terre: "Stabilität • Realismus • Aufbau",
      Air: "Kommunikation • Neugier • Ideen",
      Eau: "Emotionen • Intuition • Sensibilität",
    },
    descriptions: {
      Feu: "Feuer steht für Tatendrang, Selbstvertrauen, Handlungswillen und die Fähigkeit, sich mit Begeisterung einzusetzen.",
      Terre: "Erde steht für Bodenständigkeit, Geduld, Praxisnähe und die Fähigkeit, etwas Dauerhaftes aufzubauen.",
      Air: "Luft steht für Denken, Austausch, Neugier und Ihre Art, die Welt über Ideen zu verstehen.",
      Eau: "Wasser steht für Sensibilität, Intuition, Empfänglichkeit und die Tiefe Ihres Gefühlslebens.",
    },
    strengths: {
      Feu: "Ihre Stärke liegt in Ihrer Fähigkeit, Initiative zu ergreifen, zu handeln und mutig voranzugehen. Ihre Energie nährt sich aus Bewegung, Begeisterung und dem Wunsch zu gestalten.",
      Terre: "Ihre Stärke liegt in Ihrer Stabilität, Ihrem praktischen Sinn und Ihrer Fähigkeit, eine Idee in konkrete Realität umzusetzen.",
      Air: "Ihre Stärke liegt in Ihrer Neugier, Ihrer sozialen Intelligenz und Ihrer Fähigkeit, verschiedene Perspektiven zu verstehen.",
      Eau: "Ihre Stärke liegt in Ihrer Intuition, Ihrer emotionalen Tiefe und Ihrer Fähigkeit, wahrzunehmen, was nicht immer ausgesprochen wird.",
    },
    balances: {
      Feu: "Nehmen Sie sich Zeit, langsamer zu werden, zuzuhören und Ihre Vorhaben zu festigen. Geduld hilft Ihrer Inspiration, nachhaltigere Ergebnisse hervorzubringen.",
      Terre: "Geben Sie Spontaneität, Intuition und Veränderung mehr Raum. Nicht alles muss vollkommen kontrolliert sein, bevor Sie vorangehen.",
      Air: "Kehren Sie regelmäßig zu Ihren Gefühlen und Empfindungen zurück. Eine Idee wird kraftvoller, wenn sie auch gefühlt und verkörpert wird.",
      Eau: "Schützen Sie Ihre Sensibilität, ohne sich zu isolieren. Klare Grenzen helfen Ihnen, für andere da zu sein, ohne deren Emotionen zu übernehmen.",
    },
    premiums: {
      Feu: "Ein dominantes Feuerelement drängt Sie dazu, intensiv zu leben und Erfahrungen zu suchen, die Ihren Willen anregen. Ihre Herausforderung besteht darin, Ihren Schwung zu bewahren, ohne vorschnell zu handeln oder Ihre Energie zu zerstreuen.",
      Terre: "Ein dominantes Erdelement geht oft mit einem starken Bedürfnis nach Sicherheit und greifbaren Ergebnissen einher. Beständigkeit bringt Sie voran, zugleich profitieren Sie davon, bei manchen Etappen Flexibilität zuzulassen.",
      Air: "Ein dominantes Luftelement fördert Reflexion, Kommunikation und das Bedürfnis zu verstehen. Ihre Herausforderung besteht darin, nicht nur in der Analyse zu bleiben, wenn eine Situation eine Entscheidung oder emotionale Beteiligung verlangt.",
      Eau: "Ein dominantes Wasserelement verstärkt Ihre Empfänglichkeit und Ihr Innenleben. Sie können Stimmungen und Unausgesprochenes stark wahrnehmen. Ihr Gleichgewicht hängt oft davon ab, Ihre eigenen Gefühle von denen anderer unterscheiden zu können.",
    },
    fallbackStrength: "Ihr Horoskop vereint verschiedene Energieformen, die sich je nach Situation ergänzen können.",
    fallbackBalance: "Beobachten Sie die Qualitäten, die Sie spontan einsetzen, und jene, die mehr Aufmerksamkeit oder Übung benötigen.",
    fallbackPremium: "Eine ausgewogene Verteilung kann auf die Fähigkeit hinweisen, je nach Umständen unterschiedliche Qualitäten einzusetzen. Die vollständige Horoskopanalyse zeigt, wie diese Energien zusammenwirken.",
  },

  it: {
    labels: {
      analysis: "Analisi Firma",
      kicker: "Equilibrio energetico",
      title: "I quattro elementi",
      lead: "I quattro elementi rivelano come la tua energia fluisce naturalmente. Il loro equilibrio aiuta a comprendere meglio le tue reazioni spontanee, le tue risorse dominanti e le qualità che la tua evoluzione ti invita a sviluppare.",
      fire: "Fuoco",
      earth: "Terra",
      air: "Aria",
      water: "Acqua",
      planetSingular: "pianeta",
      planetPlural: "pianeti",
      dominantEnergy: "La tua energia dominante",
      undetermined: "Non determinata",
      naturalStrength: "La tua forza naturale",
      balanceToDevelop: "Il tuo equilibrio da sviluppare",
      noDominant: "Non è stato possibile determinare alcun elemento dominante con i dati disponibili.",
      note: "Un elemento molto presente rappresenta un’energia che esprimi spontaneamente. Un elemento meno rappresentato non è una debolezza: spesso corrisponde a una qualità che sviluppi attraverso le esperienze, le relazioni e le scelte del tuo percorso.",
    },
    words: {
      Feu: "Azione • Coraggio • Ispirazione",
      Terre: "Stabilità • Realismo • Costruzione",
      Air: "Comunicazione • Curiosità • Idee",
      Eau: "Emozioni • Intuizione • Sensibilità",
    },
    descriptions: {
      Feu: "Il Fuoco rappresenta lo slancio, la fiducia, il desiderio di agire e la capacità di impegnarti con entusiasmo.",
      Terre: "La Terra rappresenta il radicamento, la pazienza, il senso pratico e la capacità di costruire qualcosa di duraturo.",
      Air: "L’Aria rappresenta il pensiero, gli scambi, la curiosità e il tuo modo di comprendere il mondo attraverso le idee.",
      Eau: "L’Acqua rappresenta la sensibilità, l’intuizione, la ricettività e la profondità della tua vita emotiva.",
    },
    strengths: {
      Feu: "La tua forza risiede nella capacità di iniziare, agire e avanzare con coraggio. La tua energia si nutre di movimento, entusiasmo e desiderio di creare.",
      Terre: "La tua forza risiede nella stabilità, nel senso pratico e nella capacità di trasformare un’idea in realtà concreta.",
      Air: "La tua forza risiede nella curiosità, nell’intelligenza relazionale e nella capacità di comprendere diversi punti di vista.",
      Eau: "La tua forza risiede nell’intuizione, nella profondità emotiva e nella capacità di percepire ciò che non viene sempre espresso.",
    },
    balances: {
      Feu: "Prenditi il tempo di rallentare, ascoltare e consolidare i tuoi progetti. La pazienza permette alla tua ispirazione di produrre risultati più duraturi.",
      Terre: "Lascia più spazio alla spontaneità, all’intuizione e al cambiamento. Non tutto deve essere perfettamente controllato prima di andare avanti.",
      Air: "Torna regolarmente alle tue emozioni e sensazioni. Un’idea diventa più potente quando viene anche sentita e incarnata.",
      Eau: "Proteggi la tua sensibilità senza isolarti. Limiti chiari ti permettono di restare disponibile agli altri senza assorbire le loro emozioni.",
    },
    premiums: {
      Feu: "Una dominante di Fuoco ti spinge a vivere con intensità e a cercare esperienze che stimolino la tua volontà. La tua sfida consiste nel preservare il tuo slancio senza agire troppo rapidamente né disperdere le tue energie.",
      Terre: "Una dominante di Terra ti dà spesso un forte bisogno di sicurezza e di risultati tangibili. Progredisci grazie alla costanza, ma ti aiuta accettare che alcune fasi richiedano flessibilità.",
      Air: "Una dominante di Aria favorisce la riflessione, la comunicazione e il bisogno di comprendere. La tua sfida consiste nel non restare soltanto nell’analisi quando la situazione richiede una decisione o un coinvolgimento emotivo.",
      Eau: "Una dominante di Acqua intensifica la tua ricettività e la tua vita interiore. Puoi percepire intensamente le atmosfere e ciò che non viene detto. Il tuo equilibrio dipende spesso dalla capacità di distinguere le tue emozioni da quelle degli altri.",
    },
    fallbackStrength: "Il tuo tema riunisce diverse forme di energia che possono completarsi a seconda delle situazioni.",
    fallbackBalance: "Osserva le qualità che utilizzi spontaneamente e quelle che richiedono maggiore attenzione o pratica.",
    fallbackPremium: "Una distribuzione equilibrata può indicare la capacità di mobilitare qualità diverse secondo le circostanze. L’analisi completa del tema permette di comprendere come queste energie collaborano tra loro.",
  },

  pt: {
    labels: {
      analysis: "Análise Assinatura",
      kicker: "Equilíbrio energético",
      title: "Os quatro elementos",
      lead: "Os quatro elementos revelam como sua energia circula naturalmente. O equilíbrio entre eles permite compreender melhor suas reações espontâneas, seus recursos dominantes e as qualidades que sua evolução convida você a desenvolver.",
      fire: "Fogo",
      earth: "Terra",
      air: "Ar",
      water: "Água",
      planetSingular: "planeta",
      planetPlural: "planetas",
      dominantEnergy: "Sua energia dominante",
      undetermined: "Não determinada",
      naturalStrength: "Sua força natural",
      balanceToDevelop: "Seu equilíbrio a desenvolver",
      noDominant: "Não foi possível determinar um elemento dominante com os dados disponíveis.",
      note: "Um elemento muito presente representa uma energia que você expressa espontaneamente. Um elemento menos representado não é uma fraqueza: geralmente corresponde a uma qualidade que você desenvolve por meio das experiências, das relações e das escolhas do seu percurso.",
    },
    words: {
      Feu: "Ação • Coragem • Inspiração",
      Terre: "Estabilidade • Realismo • Construção",
      Air: "Comunicação • Curiosidade • Ideias",
      Eau: "Emoções • Intuição • Sensibilidade",
    },
    descriptions: {
      Feu: "O Fogo representa o impulso, a confiança, o desejo de agir e a capacidade de se envolver com entusiasmo.",
      Terre: "A Terra representa o enraizamento, a paciência, o senso prático e a capacidade de construir algo duradouro.",
      Air: "O Ar representa o pensamento, as trocas, a curiosidade e sua maneira de compreender o mundo por meio das ideias.",
      Eau: "A Água representa a sensibilidade, a intuição, a receptividade e a profundidade da sua vida emocional.",
    },
    strengths: {
      Feu: "Sua força está na capacidade de iniciar, agir e avançar com coragem. Sua energia se alimenta do movimento, do entusiasmo e do desejo de criar.",
      Terre: "Sua força está na estabilidade, no senso prático e na capacidade de transformar uma ideia em realidade concreta.",
      Air: "Sua força está na curiosidade, na inteligência relacional e na capacidade de compreender diferentes pontos de vista.",
      Eau: "Sua força está na intuição, na profundidade emocional e na capacidade de perceber o que nem sempre é expresso.",
    },
    balances: {
      Feu: "Reserve um tempo para desacelerar, ouvir e consolidar seus projetos. A paciência permite que sua inspiração produza resultados mais duradouros.",
      Terre: "Dê mais espaço à espontaneidade, à intuição e à mudança. Nem tudo precisa estar perfeitamente controlado antes de você avançar.",
      Air: "Volte regularmente às suas emoções e sensações. Uma ideia se torna mais poderosa quando também é sentida e incorporada.",
      Eau: "Proteja sua sensibilidade sem se isolar. Limites claros permitem que você continue disponível para os outros sem absorver as emoções deles.",
    },
    premiums: {
      Feu: "Uma dominante de Fogo leva você a viver com intensidade e a buscar experiências que estimulem sua vontade. Seu desafio é preservar seu impulso sem agir rápido demais nem dispersar sua energia.",
      Terre: "Uma dominante de Terra costuma trazer uma forte necessidade de segurança e de resultados concretos. Você progride com constância, mas ganha ao aceitar que algumas etapas exigem flexibilidade.",
      Air: "Uma dominante de Ar favorece a reflexão, a comunicação e a necessidade de compreender. Seu desafio é não permanecer apenas na análise quando a situação exige uma decisão ou um envolvimento emocional.",
      Eau: "Uma dominante de Água intensifica sua receptividade e sua vida interior. Você pode sentir intensamente os ambientes e o que não é dito. Seu equilíbrio depende muitas vezes da capacidade de distinguir suas emoções das emoções dos outros.",
    },
    fallbackStrength: "Seu mapa reúne várias formas de energia que podem se complementar conforme as situações.",
    fallbackBalance: "Observe as qualidades que você usa espontaneamente e aquelas que exigem mais atenção ou prática.",
    fallbackPremium: "Uma distribuição equilibrada pode indicar a capacidade de mobilizar diferentes qualidades conforme as circunstâncias. A análise completa do mapa permite compreender como essas energias cooperam entre si.",
  },
};

function replaceAll(source: string, from: string, to: string): string {
  return source.split(from).join(to);
}

export function localizeSignatureElements(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const lang = locale as NonFrenchLocale;
  const copy = COPY[lang];
  const labels = copy.labels;

  let out = source.replace(/\r\n/g, "\n");

  const staticPairs: Array<[string, string]> = [
    ["Analyse Signature", labels.analysis],
    ["Équilibre énergétique", labels.kicker],
    ["Les quatre éléments", labels.title],
    ["Votre énergie dominante", labels.dominantEnergy],
    ["Non déterminée", labels.undetermined],
    ["Votre force naturelle", labels.naturalStrength],
    ["Votre équilibre à développer", labels.balanceToDevelop],
    ["Aucun élément dominant n’a pu être déterminé avec les données disponibles.", labels.noDominant],
  ];

  for (const [from, to] of staticPairs) {
    out = replaceAll(out, from, to);
  }

  out = out.replace(
    /Les quatre éléments révèlent la manière dont votre\s+énergie circule naturellement\. Leur équilibre permet de\s+mieux comprendre vos réactions spontanées, vos\s+ressources dominantes et les qualités que votre\s+évolution vous invite à développer\./g,
    labels.lead,
  );

  out = out.replace(
    /Un élément très présent représente une énergie que vous\s+exprimez spontanément\. Un élément moins représenté n’est\s+pas une faiblesse : il correspond souvent à une qualité\s+que vous développez grâce aux expériences, aux relations\s+et aux choix de votre parcours\./g,
    labels.note,
  );

  const displayElementMap = JSON.stringify({
    Feu: labels.fire,
    Terre: labels.earth,
    Air: labels.air,
    Eau: labels.water,
  });

  const wordsMap = JSON.stringify(copy.words);
  const descriptionsMap = JSON.stringify(copy.descriptions);
  const strengthsMap = JSON.stringify(copy.strengths);
  const balancesMap = JSON.stringify(copy.balances);
  const premiumsMap = JSON.stringify(copy.premiums);

  if (!out.includes("const SIGNATURE_ELEMENT_DISPLAY_NAMES")) {
    const marker = "function getElementIcon(";
    const index = out.indexOf(marker);

    if (index >= 0) {
      const helper = `
const SIGNATURE_ELEMENT_DISPLAY_NAMES: Record<ElementName, string> =
  ${displayElementMap};

const SIGNATURE_ELEMENT_WORDS: Record<ElementName, string> =
  ${wordsMap};

const SIGNATURE_ELEMENT_DESCRIPTIONS: Record<ElementName, string> =
  ${descriptionsMap};

const SIGNATURE_ELEMENT_STRENGTHS: Record<ElementName, string> =
  ${strengthsMap};

const SIGNATURE_ELEMENT_BALANCES: Record<ElementName, string> =
  ${balancesMap};

const SIGNATURE_ELEMENT_PREMIUMS: Record<ElementName, string> =
  ${premiumsMap};

function getElementDisplayName(
  element: ElementName
): string {
  return SIGNATURE_ELEMENT_DISPLAY_NAMES[element] || element;
}

`;

      out =
        out.slice(0, index) +
        helper +
        out.slice(index);
    }
  }

  // Visible element name in the four cards.
  out = out.replace(
    /\{element\}/g,
    "{getElementDisplayName(element)}",
  );

  // Visible dominant element name.
  out = out.replace(
    /\? dominantElement\s*:\s*"Non déterminée"/g,
    `? getElementDisplayName(dominantElement)
              : ${JSON.stringify(labels.undetermined)}`,
  );

  // Planet count.
  out = out.replace(
    /\{value === 1\s*\?\s*"1 planète"\s*:\s*`\$\{value\} planètes`\}/g,
    `{value === 1
                    ? \`1 ${labels.planetSingular}\`
                    : \`\${value} ${labels.planetPlural}\`}`,
  );

  // Words under each element card.
  out = out.replace(
    /ELEMENT_WORDS\[\s*element\s*\]/g,
    "SIGNATURE_ELEMENT_WORDS[element]",
  );

  // Description shown under the dominant element.
  out = out.replace(
    /ELEMENT_DESCRIPTIONS\[\s*dominantElement\s*\]/g,
    "SIGNATURE_ELEMENT_DESCRIPTIONS[dominantElement]",
  );

  // getElementText() must not return the imported French ELEMENT_TEXT
  // in generated non-French components.
  out = out.replace(
    /const text\s*=\s*ELEMENT_TEXT\[element\];[\s\S]*?return ELEMENT_DESCRIPTIONS\[\s*element\s*\];/m,
    `return SIGNATURE_ELEMENT_DESCRIPTIONS[element];`,
  );

  // Dominant-element insights.
  out = out.replace(
    /const insights\s*=\s*dominantElement\s*\?\s*ELEMENT_INSIGHTS\[\s*dominantElement\s*\]\s*:\s*\{[\s\S]*?premium:\s*"Une répartition équilibrée peut indiquer une capacité à mobiliser différentes qualités selon les circonstances\. L’analyse complète du thème permet de comprendre comment ces énergies coopèrent entre elles\.",\s*\};/m,
    `const insights =
    dominantElement
      ? {
          strength:
            SIGNATURE_ELEMENT_STRENGTHS[dominantElement],
          balance:
            SIGNATURE_ELEMENT_BALANCES[dominantElement],
          premium:
            SIGNATURE_ELEMENT_PREMIUMS[dominantElement],
        }
      : {
          strength:
            ${JSON.stringify(copy.fallbackStrength)},
          balance:
            ${JSON.stringify(copy.fallbackBalance)},
          premium:
            ${JSON.stringify(copy.fallbackPremium)},
        };`,
  );

  return out;
}
