import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<PaidPdfLocale, "fr">;
type ModalityName = "Cardinal" | "Fixe" | "Mutable";

const COPY = {
  "en": {
    "names": {
      "Cardinal": "Cardinal",
      "Fixe": "Fixed",
      "Mutable": "Mutable"
    },
    "words": {
      "Cardinal": "Initiative • Impulse • Leadership",
      "Fixe": "Perseverance • Stability • Determination",
      "Mutable": "Adaptation • Evolution • Flexibility"
    },
    "desc": {
      "Cardinal": "The cardinal modality represents the impulse to begin, the ability to take the lead, and the need to create movement.",
      "Fixe": "The fixed modality represents continuity, focus, loyalty to a direction, and the ability to preserve your efforts.",
      "Mutable": "The mutable modality represents adaptation, transition, learning, and the ability to modify your approach according to circumstances."
    },
    "dom": {
      "Cardinal": "A Cardinal dominance reveals a dynamic personality naturally oriented toward initiative and action. You often need to feel that things are moving forward and that you can open a new path.",
      "Fixe": "A Fixed dominance reveals a persevering, loyal personality capable of sustaining effort over time. You need stability and depth. Your strength lies in your endurance, loyalty, and ability to follow through.",
      "Mutable": "A Mutable dominance reveals an adaptable, receptive personality capable of changing direction as circumstances evolve. You understand transitions quickly and know how to adjust your approach."
    },
    "labels": [
      "Premium Analysis",
      "Inner rhythm",
      "Astrological modalities",
      "The modalities describe your natural rhythm of action. They show how you begin an experience, maintain your commitment, or adapt your direction as circumstances evolve.",
      "Your dominant dynamic",
      "Premium insight",
      "Your natural strength",
      "Your balance to develop",
      "Not determined",
      "planet",
      "planets",
      "No dominant modality could be determined from the available data.",
      "No modality is better than another. Their distribution reveals your natural way of initiating action, preserving your efforts, or adapting to changes. The balance between these three rhythms fosters a more conscious evolution."
    ],
    "ins": {
      "Cardinal": [
        "Your strength lies in your ability to begin, take the lead, and create new momentum. You move forward more easily when a goal stimulates you.",
        "Give more attention to continuity. Starting is a strength, but consolidating your efforts allows you to transform your impulse into lasting success.",
        "A Cardinal dominance indicates a temperament naturally oriented toward action and renewal. You often need to feel that a project is moving forward. Your challenge is to maintain your commitment once the initial enthusiasm has passed."
      ],
      "Fixe": [
        "Your strength lies in your perseverance, loyalty, and ability to stay the course despite obstacles. You build steadily.",
        "Make room for change and the unexpected. Your stability becomes even more powerful when it is accompanied by flexibility.",
        "A Fixed dominance enhances your endurance, concentration, and need to preserve what holds value. Your challenge is to recognize the moment when perseverance becomes resistance to change."
      ],
      "Mutable": [
        "Your strength lies in your adaptability, your intelligence of movement, and your ability to evolve when circumstances change.",
        "Be careful not to scatter your energy. Choosing a clear direction helps you transform your flexibility into concrete progress.",
        "A Mutable dominance allows you to understand changes quickly and adjust your behavior with flexibility. Your challenge is to maintain a stable direction when several possibilities attract your attention at the same time."
      ]
    },
    "fallback": [
      "Your chart combines several ways of acting, pursuing your efforts, and adapting to circumstances.",
      "Observe the moments when you initiate easily, those when you persevere, and those when you prefer to change direction.",
      "A balanced distribution of modalities can indicate that you mobilize different rhythms depending on circumstances. You can begin, maintain, or adjust your actions according to the needs of the situation."
    ]
  },
  "es": {
    "names": {
      "Cardinal": "Cardinal",
      "Fixe": "Fija",
      "Mutable": "Mutable"
    },
    "words": {
      "Cardinal": "Iniciativa • Impulso • Liderazgo",
      "Fixe": "Perseverancia • Estabilidad • Determinación",
      "Mutable": "Adaptación • Evolución • Flexibilidad"
    },
    "desc": {
      "Cardinal": "La modalidad cardinal representa el impulso del comienzo, la capacidad de tomar la iniciativa y la necesidad de crear movimiento.",
      "Fixe": "La modalidad fija representa la continuidad, la concentración, la fidelidad a una dirección y la capacidad de mantener tus esfuerzos.",
      "Mutable": "La modalidad mutable representa la adaptación, la transición, el aprendizaje y la capacidad de modificar tu enfoque según las circunstancias."
    },
    "dom": {
      "Cardinal": "Una dominante Cardinal revela una personalidad dinámica, naturalmente orientada hacia la iniciativa y la acción.",
      "Fixe": "Una dominante Fija revela una personalidad perseverante, leal y capaz de mantener sus esfuerzos a lo largo del tiempo. Necesitas estabilidad y profundidad. Tu fuerza reside en tu resistencia, tu fidelidad y tu capacidad para llegar hasta el final.",
      "Mutable": "Una dominante Mutable revela una personalidad adaptable y receptiva, capaz de cambiar de dirección cuando evolucionan las circunstancias."
    },
    "labels": [
      "Análisis Premium",
      "Ritmo interior",
      "Modalidades astrológicas",
      "Las modalidades describen tu ritmo natural de acción. Muestran cómo comienzas una experiencia, mantienes tu compromiso o adaptas tu dirección a medida que evolucionan las circunstancias.",
      "Tu dinámica dominante",
      "Perspectiva Premium",
      "Tu fuerza natural",
      "Tu equilibrio por desarrollar",
      "No determinada",
      "planeta",
      "planetas",
      "No se pudo determinar ninguna modalidad dominante con los datos disponibles.",
      "Ninguna modalidad es mejor que otra. Su distribución revela tu manera natural de iniciar una acción, preservar tus esfuerzos o adaptarte a los cambios. El equilibrio entre estos tres ritmos favorece una evolución más consciente."
    ],
    "ins": {
      "Cardinal": [
        "Tu fuerza reside en tu capacidad para comenzar, tomar la iniciativa e impulsar un nuevo movimiento.",
        "Presta más atención a la continuidad. Comenzar es una fuerza, pero consolidar tus esfuerzos transforma tu impulso en un éxito duradero.",
        "Una dominante Cardinal indica un temperamento naturalmente orientado hacia la acción y la renovación."
      ],
      "Fixe": [
        "Tu fuerza reside en tu perseverancia, tu fidelidad y tu capacidad para mantener el rumbo a pesar de los obstáculos. Construyes con constancia.",
        "Deja espacio al cambio y a lo inesperado. Tu estabilidad se vuelve aún más poderosa cuando va acompañada de flexibilidad.",
        "Una dominante Fija refuerza tu resistencia, tu capacidad de concentración y tu necesidad de preservar lo que tiene valor. Tu desafío consiste en reconocer cuándo la perseverancia se convierte en resistencia al cambio."
      ],
      "Mutable": [
        "Tu fuerza reside en tu adaptabilidad y tu capacidad para evolucionar cuando cambian las circunstancias.",
        "Procura no dispersar tu energía. Elegir una dirección clara transforma tu flexibilidad en progreso concreto.",
        "Una dominante Mutable te permite comprender rápidamente los cambios y ajustar tu comportamiento con flexibilidad."
      ]
    },
    "fallback": [
      "Tu carta combina varias maneras de actuar, mantener tus esfuerzos y adaptarte a las circunstancias.",
      "Observa cuándo inicias con facilidad, cuándo perseveras y cuándo prefieres cambiar de dirección.",
      "Una distribución equilibrada de las modalidades permite movilizar ritmos diferentes según las circunstancias."
    ]
  },
  "de": {
    "names": {
      "Cardinal": "Kardinal",
      "Fixe": "Fix",
      "Mutable": "Veränderlich"
    },
    "words": {
      "Cardinal": "Initiative • Impuls • Führung",
      "Fixe": "Ausdauer • Stabilität • Entschlossenheit",
      "Mutable": "Anpassung • Entwicklung • Flexibilität"
    },
    "desc": {
      "Cardinal": "Die kardinale Modalität steht für den Impuls des Beginnens, die Fähigkeit, die Initiative zu ergreifen, und das Bedürfnis, Bewegung zu schaffen.",
      "Fixe": "Die fixe Modalität steht für Kontinuität, Konzentration, Treue zu einer Richtung und die Fähigkeit, Anstrengungen aufrechtzuerhalten.",
      "Mutable": "Die veränderliche Modalität steht für Anpassung, Übergang, Lernen und die Fähigkeit, die Vorgehensweise den Umständen anzupassen."
    },
    "dom": {
      "Cardinal": "Eine kardinale Dominanz zeigt eine dynamische Persönlichkeit, die von Natur aus zu Initiative und Handlung neigt.",
      "Fixe": "Eine fixe Dominanz zeigt eine ausdauernde, loyale Persönlichkeit, die ihre Anstrengungen langfristig aufrechterhalten kann. Sie brauchen Stabilität und Tiefe.",
      "Mutable": "Eine veränderliche Dominanz zeigt eine anpassungsfähige, aufnahmebereite Persönlichkeit, die ihre Richtung ändern kann, wenn sich die Umstände entwickeln."
    },
    "labels": [
      "Premium-Analyse",
      "Innerer Rhythmus",
      "Astrologische Modalitäten",
      "Die Modalitäten beschreiben Ihren natürlichen Handlungsrhythmus. Sie zeigen, wie Sie eine Erfahrung beginnen, Ihr Engagement aufrechterhalten oder Ihre Richtung an veränderte Umstände anpassen.",
      "Ihre dominante Dynamik",
      "Premium-Einblick",
      "Ihre natürliche Stärke",
      "Ihr zu entwickelndes Gleichgewicht",
      "Nicht bestimmt",
      "Planet",
      "Planeten",
      "Aus den verfügbaren Daten konnte keine dominante Modalität bestimmt werden.",
      "Keine Modalität ist besser als eine andere. Ihre Verteilung zeigt Ihre natürliche Art, eine Handlung zu beginnen, Ihre Anstrengungen aufrechtzuerhalten oder sich an Veränderungen anzupassen. Das Gleichgewicht zwischen diesen drei Rhythmen fördert eine bewusstere Entwicklung."
    ],
    "ins": {
      "Cardinal": [
        "Ihre Stärke liegt in Ihrer Fähigkeit, zu beginnen, die Initiative zu ergreifen und neuen Schwung zu erzeugen.",
        "Schenken Sie der Kontinuität mehr Aufmerksamkeit. Beginnen ist eine Stärke, doch Festigung schafft nachhaltigen Erfolg.",
        "Eine kardinale Dominanz weist auf ein Temperament hin, das auf Handlung und Erneuerung ausgerichtet ist."
      ],
      "Fixe": [
        "Ihre Stärke liegt in Ihrer Ausdauer, Treue und Fähigkeit, trotz Hindernissen auf Kurs zu bleiben. Sie bauen beständig auf.",
        "Lassen Sie Raum für Veränderung und Unerwartetes. Ihre Stabilität wird noch kraftvoller, wenn sie von Flexibilität begleitet wird.",
        "Eine fixe Dominanz verstärkt Ihre Ausdauer, Konzentrationsfähigkeit und Ihr Bedürfnis, Wertvolles zu bewahren. Ihre Herausforderung besteht darin, den Moment zu erkennen, in dem Ausdauer zu Widerstand gegen Veränderung wird."
      ],
      "Mutable": [
        "Ihre Stärke liegt in Ihrer Anpassungsfähigkeit und Ihrer Fähigkeit, sich bei veränderten Umständen weiterzuentwickeln.",
        "Achten Sie darauf, Ihre Energie nicht zu zerstreuen. Eine klare Richtung verwandelt Flexibilität in konkreten Fortschritt.",
        "Eine veränderliche Dominanz ermöglicht es Ihnen, Veränderungen schnell zu verstehen und Ihr Verhalten flexibel anzupassen."
      ]
    },
    "fallback": [
      "Ihr Horoskop verbindet mehrere Arten zu handeln und sich anzupassen.",
      "Beobachten Sie, wann Sie leicht beginnen, beharrlich bleiben oder Ihre Richtung ändern.",
      "Eine ausgewogene Verteilung ermöglicht unterschiedliche Rhythmen je nach Situation."
    ]
  },
  "it": {
    "names": {
      "Cardinal": "Cardinale",
      "Fixe": "Fissa",
      "Mutable": "Mutevole"
    },
    "words": {
      "Cardinal": "Iniziativa • Impulso • Leadership",
      "Fixe": "Perseveranza • Stabilità • Determinazione",
      "Mutable": "Adattamento • Evoluzione • Flessibilità"
    },
    "desc": {
      "Cardinal": "La modalità cardinale rappresenta lo slancio dell'inizio, la capacità di prendere l'iniziativa e il bisogno di creare movimento.",
      "Fixe": "La modalità fissa rappresenta continuità, concentrazione, fedeltà a una direzione e capacità di mantenere gli sforzi.",
      "Mutable": "La modalità mutevole rappresenta adattamento, transizione, apprendimento e capacità di modificare l'approccio secondo le circostanze."
    },
    "dom": {
      "Cardinal": "Una dominante Cardinale rivela una personalità dinamica, naturalmente orientata all'iniziativa e all'azione.",
      "Fixe": "Una dominante Fissa rivela una personalità perseverante, leale e capace di mantenere i propri sforzi nel tempo. Hai bisogno di stabilità e profondità.",
      "Mutable": "Una dominante Mutevole rivela una personalità adattabile e ricettiva, capace di cambiare direzione quando le circostanze evolvono."
    },
    "labels": [
      "Analisi Premium",
      "Ritmo interiore",
      "Modalità astrologiche",
      "Le modalità descrivono il tuo ritmo naturale d'azione. Mostrano come inizi un'esperienza, mantieni il tuo impegno o adatti la tua direzione mentre le circostanze evolvono.",
      "La tua dinamica dominante",
      "Approfondimento Premium",
      "La tua forza naturale",
      "Il tuo equilibrio da sviluppare",
      "Non determinata",
      "pianeta",
      "pianeti",
      "Non è stato possibile determinare una modalità dominante con i dati disponibili.",
      "Nessuna modalità è migliore di un'altra. La loro distribuzione rivela il tuo modo naturale di iniziare un'azione, preservare i tuoi sforzi o adattarti ai cambiamenti. L'equilibrio tra questi tre ritmi favorisce un'evoluzione più consapevole."
    ],
    "ins": {
      "Cardinal": [
        "La tua forza risiede nella capacità di iniziare, prendere l'iniziativa e creare un nuovo slancio.",
        "Presta maggiore attenzione alla continuità. Consolidare gli sforzi trasforma l'impulso in successo duraturo.",
        "Una dominante Cardinale indica un temperamento naturalmente orientato all'azione e al rinnovamento."
      ],
      "Fixe": [
        "La tua forza risiede nella perseveranza, nella fedeltà e nella capacità di mantenere la rotta nonostante gli ostacoli. Costruisci con costanza.",
        "Lascia spazio al cambiamento e all'imprevisto. La tua stabilità diventa ancora più potente quando è accompagnata dalla flessibilità.",
        "Una dominante Fissa rafforza la tua resistenza, la capacità di concentrazione e il bisogno di preservare ciò che ha valore. La tua sfida consiste nel riconoscere quando la perseveranza diventa resistenza al cambiamento."
      ],
      "Mutable": [
        "La tua forza risiede nell'adattabilità e nella capacità di evolvere quando cambiano le circostanze.",
        "Fai attenzione a non disperdere la tua energia. Una direzione chiara trasforma la flessibilità in progresso concreto.",
        "Una dominante Mutevole ti permette di comprendere rapidamente i cambiamenti e adattare il tuo comportamento con flessibilità."
      ]
    },
    "fallback": [
      "Il tuo tema combina diversi modi di agire e adattarsi.",
      "Osserva quando inizi facilmente, perseveri o preferisci cambiare direzione.",
      "Una distribuzione equilibrata permette di utilizzare ritmi diversi secondo le circostanze."
    ]
  },
  "pt": {
    "names": {
      "Cardinal": "Cardinal",
      "Fixe": "Fixa",
      "Mutable": "Mutável"
    },
    "words": {
      "Cardinal": "Iniciativa • Impulso • Liderança",
      "Fixe": "Perseverança • Estabilidade • Determinação",
      "Mutable": "Adaptação • Evolução • Flexibilidade"
    },
    "desc": {
      "Cardinal": "A modalidade cardinal representa o impulso do começo, a capacidade de tomar a iniciativa e a necessidade de criar movimento.",
      "Fixe": "A modalidade fixa representa continuidade, concentração, fidelidade a uma direção e a capacidade de preservar seus esforços.",
      "Mutable": "A modalidade mutável representa adaptação, transição, aprendizagem e a capacidade de modificar sua abordagem conforme as circunstâncias."
    },
    "dom": {
      "Cardinal": "Uma dominante Cardinal revela uma personalidade dinâmica, naturalmente orientada para a iniciativa e a ação.",
      "Fixe": "Uma dominante Fixa revela uma personalidade perseverante, leal e capaz de manter seus esforços ao longo do tempo. Você precisa de estabilidade e profundidade.",
      "Mutable": "Uma dominante Mutável revela uma personalidade adaptável e receptiva, capaz de mudar de direção quando as circunstâncias evoluem."
    },
    "labels": [
      "Análise Premium",
      "Ritmo interior",
      "Modalidades astrológicas",
      "As modalidades descrevem seu ritmo natural de ação. Elas mostram como você inicia uma experiência, mantém seu compromisso ou adapta sua direção à medida que as circunstâncias evoluem.",
      "Sua dinâmica dominante",
      "Perspectiva Premium",
      "Sua força natural",
      "Seu equilíbrio a desenvolver",
      "Não determinada",
      "planeta",
      "planetas",
      "Não foi possível determinar uma modalidade dominante com os dados disponíveis.",
      "Nenhuma modalidade é melhor do que outra. Sua distribuição revela sua maneira natural de iniciar uma ação, preservar seus esforços ou se adaptar às mudanças. O equilíbrio entre esses três ritmos favorece uma evolução mais consciente."
    ],
    "ins": {
      "Cardinal": [
        "Sua força está na capacidade de começar, tomar a iniciativa e criar um novo impulso.",
        "Dê mais atenção à continuidade. Consolidar seus esforços transforma o impulso em sucesso duradouro.",
        "Uma dominante Cardinal indica um temperamento naturalmente voltado para a ação e a renovação."
      ],
      "Fixe": [
        "Sua força está na perseverança, na fidelidade e na capacidade de manter o rumo apesar dos obstáculos. Você constrói com constância.",
        "Abra espaço para a mudança e o inesperado. Sua estabilidade se torna ainda mais poderosa quando é acompanhada de flexibilidade.",
        "Uma dominante Fixa reforça sua resistência, sua capacidade de concentração e sua necessidade de preservar o que tem valor. Seu desafio é reconhecer o momento em que a perseverança se transforma em resistência à mudança."
      ],
      "Mutable": [
        "Sua força está na adaptabilidade e na capacidade de evoluir quando as circunstâncias mudam.",
        "Evite dispersar sua energia. Uma direção clara transforma flexibilidade em progresso concreto.",
        "Uma dominante Mutável permite compreender rapidamente as mudanças e ajustar seu comportamento com flexibilidade."
      ]
    },
    "fallback": [
      "Seu mapa combina várias maneiras de agir e se adaptar.",
      "Observe quando você inicia com facilidade, persevera ou prefere mudar de direção.",
      "Uma distribuição equilibrada permite mobilizar ritmos diferentes conforme as circunstâncias."
    ]
  }
} as const;

function injectRuntime(source: string, locale: NonFrenchLocale): string {
  if (source.includes("const PREMIUM_MODALITIES_LOCALIZATION =")) return source;
  const c = COPY[locale];
  const runtime = `
const PREMIUM_MODALITIES_LOCALIZATION = ${JSON.stringify(c, null, 2)} as const;

function getLocalizedModalityName(modality: ModalityName): string {
  return PREMIUM_MODALITIES_LOCALIZATION.names[modality] || modality;
}
function getLocalizedModalityWords(modality: ModalityName): string {
  return PREMIUM_MODALITIES_LOCALIZATION.words[modality] || MODALITY_WORDS[modality];
}
function getLocalizedModalityDescription(modality: ModalityName): string {
  return PREMIUM_MODALITIES_LOCALIZATION.desc[modality] || MODALITY_DESCRIPTIONS[modality];
}
function getLocalizedDominantModalityText(modality: ModalityName | null): string {
  if (!modality) return PREMIUM_MODALITIES_LOCALIZATION.labels[11];
  return PREMIUM_MODALITIES_LOCALIZATION.dom[modality] || getModalityText(modality);
}
function getLocalizedModalityInsights(modality: ModalityName | null) {
  if (!modality) return {
    strength: PREMIUM_MODALITIES_LOCALIZATION.fallback[0],
    balance: PREMIUM_MODALITIES_LOCALIZATION.fallback[1],
    premium: PREMIUM_MODALITIES_LOCALIZATION.fallback[2],
  };
  const x = PREMIUM_MODALITIES_LOCALIZATION.ins[modality];
  return { strength: x[0], balance: x[1], premium: x[2] };
}
function getLocalizedModalityPlanetCount(value: number): string {
  return (
    String(value) +
    " " +
    (
      value === 1
        ? PREMIUM_MODALITIES_LOCALIZATION.labels[9]
        : PREMIUM_MODALITIES_LOCALIZATION.labels[10]
    )
  );
}
`;
  const marker = "const styles = StyleSheet.create({";
  return source.includes(marker) ? source.replace(marker, runtime + marker) : source;
}

function replaceText(source: string, from: string, to: string): string {
  return source.split(from).join(to);
}

export function localizePremiumModalities(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") return source;
  const c = COPY[locale as NonFrenchLocale];
  let out = injectRuntime(source, locale as NonFrenchLocale);

  const labels: Array<[string, string]> = [
    ["Analyse Premium", c.labels[0]],
    ["Rythme intérieur", c.labels[1]],
    ["Les modalités astrologiques", c.labels[2]],
    ["Les modalités décrivent votre rythme naturel d’action.\n          Elles montrent comment vous commencez une expérience,\n          maintenez votre engagement ou adaptez votre direction\n          lorsque les circonstances évoluent.", c.labels[3]],
    ["Votre dynamique dominante", c.labels[4]],
    ["Regard Premium", c.labels[5]],
    ["Votre force naturelle", c.labels[6]],
    ["Votre équilibre à développer", c.labels[7]],
    ["Aucune modalité n’est meilleure qu’une autre. Leur\n          répartition révèle votre manière naturelle d’initier une\n          action, de préserver vos efforts ou de vous adapter aux\n          changements. L’équilibre entre ces trois rythmes favorise\n          une évolution plus consciente.", c.labels[12]],
  ];
  for (const [from, to] of labels) out = replaceText(out, from, to);

  out = out.replace(/\{\s*modality\s*\}/g, "{getLocalizedModalityName(modality)}");
  out = out.replace(
    /\{value === 1\s*\? "1 planète"\s*: `\$\{value\} planètes`\}/g,
    "{getLocalizedModalityPlanetCount(value)}",
  );
  out = out.replace(
    /\{\s*MODALITY_WORDS\[\s*modality\s*\]\s*\}/g,
    "{getLocalizedModalityWords(modality)}",
  );
  out = out.replace(
    /const dominantText\s*=\s*getModalityText\([\s\S]*?dominantModality[\s\S]*?\);/,
    "const dominantText = getLocalizedDominantModalityText(dominantModality);",
  );
  out = out.replace(
    /const insights\s*=\s*dominantModality[\s\S]*?;\n\n  return \(/,
    "const insights = getLocalizedModalityInsights(dominantModality);\n\n  return (",
  );
  out = out.replace(
    /\{hasDominantModality\s*\? dominantModality\s*: "Non déterminée"\}/g,
    "{hasDominantModality && dominantModality ? getLocalizedModalityName(dominantModality) : PREMIUM_MODALITIES_LOCALIZATION.labels[8]}",
  );
  out = out.replace(
    /\{\s*MODALITY_DESCRIPTIONS\[\s*dominantModality\s*\]\s*\}/g,
    "{getLocalizedModalityDescription(dominantModality)}",
  );

  return out;
}
