import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type ModalityName =
  "Cardinal" | "Fixe" | "Mutable";

type ModalityCopy = {
  labels: {
    analysis: string;
    kicker: string;
    title: string;
    lead: string;
    cardinal: string;
    fixed: string;
    mutable: string;
    planetSingular: string;
    planetPlural: string;
    dominantDynamics: string;
    undetermined: string;
    naturalStrength: string;
    balanceToDevelop: string;
    noDominant: string;
    note: string;
  };
  words: Record<ModalityName, string>;
  descriptions: Record<ModalityName, string>;
  strengths: Record<ModalityName, string>;
  balances: Record<ModalityName, string>;
  premiums: Record<ModalityName, string>;
  fallbackStrength: string;
  fallbackBalance: string;
  fallbackPremium: string;
};

const COPY: Record<
  NonFrenchLocale,
  ModalityCopy
> = {
  en: {
    labels: {
      analysis: "Signature Analysis",
      kicker: "Inner rhythm",
      title: "Astrological modalities",
      lead:
        "The modalities describe your natural rhythm of action. They reveal how you initiate experiences, develop your projects, and adapt to changes throughout your journey.",
      cardinal: "Cardinal",
      fixed: "Fixed",
      mutable: "Mutable",
      planetSingular: "planet",
      planetPlural: "planets",
      dominantDynamics:
        "Your dominant dynamic",
      undetermined:
        "Undetermined",
      naturalStrength:
        "Your natural strength",
      balanceToDevelop:
        "Your balance to develop",
      noDominant:
        "No dominant modality could be determined from the available data.",
      note:
        "The modalities do not only describe your way of acting. They reveal the natural rhythm of your evolution and how you approach each stage of your journey. Their interaction with your planets and your houses enriches the overall reading of your natal chart.",
    },
    words: {
      Cardinal:
        "Initiative • Impulse • Leadership",
      Fixe:
        "Perseverance • Stability • Determination",
      Mutable:
        "Adaptation • Evolution • Flexibility",
    },
    descriptions: {
      Cardinal:
        "The cardinal modality represents the momentum of beginning, the ability to take the lead, and the need to create movement.",
      Fixe:
        "The fixed modality represents continuity, focus, loyalty to a direction, and the ability to preserve your efforts.",
      Mutable:
        "The mutable modality represents adaptation, transition, learning, and the ability to adjust your approach according to circumstances.",
    },
    strengths: {
      Cardinal:
        "Your strength lies in your ability to start, take the lead, and create new momentum. You move forward more easily when a goal stimulates you.",
      Fixe:
        "Your strength lies in your perseverance, loyalty, and ability to stay the course despite obstacles. You build steadily.",
      Mutable:
        "Your strength lies in your adaptability, your intelligence of movement, and your ability to evolve when circumstances change.",
    },
    balances: {
      Cardinal:
        "Pay more attention to continuity. Starting is a strength, but consolidating your efforts allows you to turn your impulse into lasting success.",
      Fixe:
        "Make room for change and the unexpected. Your stability becomes even more powerful when it is accompanied by flexibility.",
      Mutable:
        "Be careful not to scatter your energy. Choosing a clear direction helps you turn your flexibility into concrete progress.",
    },
    premiums: {
      Cardinal:
        "A cardinal dominance indicates a temperament naturally oriented toward action and renewal. You often need to feel that a project is moving forward. Your challenge is to maintain your commitment once the initial enthusiasm has passed.",
      Fixe:
        "A fixed dominance enhances your endurance, concentration, and need to preserve what holds value. Your challenge is to recognize the moment when perseverance becomes resistance to change.",
      Mutable:
        "A mutable dominance allows you to understand changes quickly and adjust your behavior with flexibility. Your challenge is to maintain a stable direction when several possibilities attract your attention at the same time.",
    },
    fallbackStrength:
      "Your chart combines several ways of acting, sustaining your efforts, and adapting to circumstances.",
    fallbackBalance:
      "Observe the moments when you initiate easily, those when you persevere, and those when you prefer to change direction.",
    fallbackPremium:
      "A balanced distribution of modalities can indicate that you draw on different rhythms depending on the circumstances. You can begin, maintain, or adjust your actions according to the needs of the situation.",
  },

  es: {
    labels: {
      analysis: "Análisis Firma",
      kicker: "Ritmo interior",
      title: "Las modalidades astrológicas",
      lead:
        "Las modalidades describen tu ritmo natural de acción. Revelan cómo inicias las experiencias, desarrollas tus proyectos y te adaptas a los cambios a lo largo de tu recorrido.",
      cardinal: "Cardinal",
      fixed: "Fija",
      mutable: "Mutable",
      planetSingular: "planeta",
      planetPlural: "planetas",
      dominantDynamics:
        "Tu dinámica dominante",
      undetermined:
        "No determinada",
      naturalStrength:
        "Tu fuerza natural",
      balanceToDevelop:
        "Tu equilibrio a desarrollar",
      noDominant:
        "No se pudo determinar ninguna modalidad dominante con los datos disponibles.",
      note:
        "Las modalidades no describen únicamente tu manera de actuar. Revelan el ritmo natural de tu evolución y la forma en que abordas cada etapa de tu recorrido. Su interacción con tus planetas y tus casas enriquece la lectura global de tu carta natal.",
    },
    words: {
      Cardinal:
        "Iniciativa • Impulso • Liderazgo",
      Fixe:
        "Perseverancia • Estabilidad • Determinación",
      Mutable:
        "Adaptación • Evolución • Flexibilidad",
    },
    descriptions: {
      Cardinal:
        "La modalidad cardinal representa el impulso del comienzo, la capacidad de tomar la iniciativa y la necesidad de crear movimiento.",
      Fixe:
        "La modalidad fija representa la continuidad, la concentración, la fidelidad a una dirección y la capacidad de mantener tus esfuerzos.",
      Mutable:
        "La modalidad mutable representa la adaptación, la transición, el aprendizaje y la capacidad de modificar tu enfoque según las circunstancias.",
    },
    strengths: {
      Cardinal:
        "Tu fuerza reside en tu capacidad para comenzar, tomar la iniciativa y generar un nuevo impulso. Avanzas más fácilmente cuando un objetivo te estimula.",
      Fixe:
        "Tu fuerza reside en tu perseverancia, tu lealtad y tu capacidad para mantener el rumbo a pesar de los obstáculos. Construyes con constancia.",
      Mutable:
        "Tu fuerza reside en tu adaptabilidad, tu inteligencia del movimiento y tu capacidad para evolucionar cuando cambian las circunstancias.",
    },
    balances: {
      Cardinal:
        "Presta más atención a la continuidad. Comenzar es una fortaleza, pero consolidar tus esfuerzos te permite transformar tu impulso en un éxito duradero.",
      Fixe:
        "Deja espacio al cambio y a lo inesperado. Tu estabilidad se vuelve aún más poderosa cuando va acompañada de flexibilidad.",
      Mutable:
        "Procura no dispersar tu energía. Elegir una dirección clara te ayuda a transformar tu flexibilidad en un progreso concreto.",
    },
    premiums: {
      Cardinal:
        "Una dominante cardinal indica un temperamento orientado naturalmente hacia la acción y la renovación. A menudo necesitas sentir que un proyecto avanza. Tu desafío consiste en mantener tu compromiso una vez pasado el entusiasmo inicial.",
      Fixe:
        "Una dominante fija refuerza tu resistencia, tu capacidad de concentración y tu necesidad de preservar lo que tiene valor. Tu desafío consiste en reconocer el momento en que la perseverancia se convierte en resistencia al cambio.",
      Mutable:
        "Una dominante mutable te permite comprender rápidamente los cambios y ajustar tu comportamiento con flexibilidad. Tu desafío consiste en mantener una dirección estable cuando varias posibilidades atraen tu atención al mismo tiempo.",
    },
    fallbackStrength:
      "Tu carta combina varias maneras de actuar, mantener tus esfuerzos y adaptarte a las circunstancias.",
    fallbackBalance:
      "Observa los momentos en los que inicias con facilidad, aquellos en los que perseveras y aquellos en los que prefieres modificar tu dirección.",
    fallbackPremium:
      "Una distribución equilibrada de las modalidades puede indicar que movilizas distintos ritmos según las circunstancias. Puedes comenzar, mantener o ajustar tus acciones según las necesidades de la situación.",
  },

  de: {
    labels: {
      analysis: "Signatur-Analyse",
      kicker: "Innerer Rhythmus",
      title: "Die astrologischen Modalitäten",
      lead:
        "Die Modalitäten beschreiben Ihren natürlichen Handlungsrhythmus. Sie zeigen, wie Sie Erfahrungen beginnen, Projekte entwickeln und sich im Verlauf Ihres Weges an Veränderungen anpassen.",
      cardinal: "Kardinal",
      fixed: "Fix",
      mutable: "Veränderlich",
      planetSingular: "Planet",
      planetPlural: "Planeten",
      dominantDynamics:
        "Ihre dominante Dynamik",
      undetermined:
        "Nicht bestimmt",
      naturalStrength:
        "Ihre natürliche Stärke",
      balanceToDevelop:
        "Ihr zu entwickelndes Gleichgewicht",
      noDominant:
        "Mit den verfügbaren Daten konnte keine dominante Modalität bestimmt werden.",
      note:
        "Die Modalitäten beschreiben nicht nur Ihre Art zu handeln. Sie zeigen den natürlichen Rhythmus Ihrer Entwicklung und wie Sie jede Etappe Ihres Weges angehen. Ihr Zusammenspiel mit Ihren Planeten und Häusern bereichert die Gesamtdeutung Ihres Geburtshoroskops.",
    },
    words: {
      Cardinal:
        "Initiative • Impuls • Führung",
      Fixe:
        "Ausdauer • Stabilität • Entschlossenheit",
      Mutable:
        "Anpassung • Entwicklung • Flexibilität",
    },
    descriptions: {
      Cardinal:
        "Die kardinale Modalität steht für den Impuls des Beginns, die Fähigkeit, die Initiative zu ergreifen, und das Bedürfnis, Bewegung zu schaffen.",
      Fixe:
        "Die fixe Modalität steht für Kontinuität, Konzentration, Treue zu einer Richtung und die Fähigkeit, Ihre Bemühungen aufrechtzuerhalten.",
      Mutable:
        "Die veränderliche Modalität steht für Anpassung, Übergang, Lernen und die Fähigkeit, Ihren Ansatz den Umständen entsprechend zu verändern.",
    },
    strengths: {
      Cardinal:
        "Ihre Stärke liegt in Ihrer Fähigkeit, zu beginnen, die Initiative zu ergreifen und neuen Schwung zu erzeugen. Sie kommen leichter voran, wenn ein Ziel Sie anregt.",
      Fixe:
        "Ihre Stärke liegt in Ihrer Ausdauer, Ihrer Loyalität und Ihrer Fähigkeit, trotz Hindernissen auf Kurs zu bleiben. Sie bauen beständig auf.",
      Mutable:
        "Ihre Stärke liegt in Ihrer Anpassungsfähigkeit, Ihrem Gespür für Bewegung und Ihrer Fähigkeit, sich weiterzuentwickeln, wenn sich die Umstände ändern.",
    },
    balances: {
      Cardinal:
        "Schenken Sie der Kontinuität mehr Aufmerksamkeit. Beginnen ist eine Stärke, doch das Festigen Ihrer Bemühungen verwandelt Ihren Impuls in nachhaltigen Erfolg.",
      Fixe:
        "Geben Sie Veränderungen und dem Unerwarteten Raum. Ihre Stabilität wird noch kraftvoller, wenn sie von Flexibilität begleitet wird.",
      Mutable:
        "Achten Sie darauf, Ihre Energie nicht zu zerstreuen. Eine klare Richtung hilft Ihnen, Ihre Flexibilität in konkreten Fortschritt zu verwandeln.",
    },
    premiums: {
      Cardinal:
        "Eine kardinale Dominanz weist auf ein Temperament hin, das von Natur aus auf Handlung und Erneuerung ausgerichtet ist. Sie brauchen oft das Gefühl, dass ein Projekt vorankommt. Ihre Herausforderung besteht darin, Ihr Engagement aufrechtzuerhalten, wenn die anfängliche Begeisterung nachlässt.",
      Fixe:
        "Eine fixe Dominanz stärkt Ihre Ausdauer, Konzentration und Ihr Bedürfnis, das zu bewahren, was Wert besitzt. Ihre Herausforderung besteht darin, den Moment zu erkennen, in dem Ausdauer zu Widerstand gegen Veränderung wird.",
      Mutable:
        "Eine veränderliche Dominanz ermöglicht es Ihnen, Veränderungen schnell zu verstehen und Ihr Verhalten flexibel anzupassen. Ihre Herausforderung besteht darin, eine stabile Richtung beizubehalten, wenn mehrere Möglichkeiten gleichzeitig Ihre Aufmerksamkeit anziehen.",
    },
    fallbackStrength:
      "Ihr Horoskop verbindet verschiedene Arten zu handeln, Anstrengungen aufrechtzuerhalten und sich an die Umstände anzupassen.",
    fallbackBalance:
      "Beobachten Sie die Momente, in denen Sie leicht beginnen, jene, in denen Sie ausdauernd bleiben, und jene, in denen Sie Ihre Richtung lieber verändern.",
    fallbackPremium:
      "Eine ausgewogene Verteilung der Modalitäten kann darauf hinweisen, dass Sie je nach Umständen unterschiedliche Rhythmen einsetzen. Sie können Ihre Handlungen entsprechend den Erfordernissen der Situation beginnen, fortführen oder anpassen.",
  },

  it: {
    labels: {
      analysis: "Analisi Firma",
      kicker: "Ritmo interiore",
      title: "Le modalità astrologiche",
      lead:
        "Le modalità descrivono il tuo ritmo naturale d’azione. Rivelano come inizi le esperienze, sviluppi i tuoi progetti e ti adatti ai cambiamenti lungo il tuo percorso.",
      cardinal: "Cardinale",
      fixed: "Fissa",
      mutable: "Mutevole",
      planetSingular: "pianeta",
      planetPlural: "pianeti",
      dominantDynamics:
        "La tua dinamica dominante",
      undetermined:
        "Non determinata",
      naturalStrength:
        "La tua forza naturale",
      balanceToDevelop:
        "Il tuo equilibrio da sviluppare",
      noDominant:
        "Non è stato possibile determinare una modalità dominante con i dati disponibili.",
      note:
        "Le modalità non descrivono soltanto il tuo modo di agire. Rivelano il ritmo naturale della tua evoluzione e il modo in cui affronti ogni fase del tuo percorso. La loro interazione con i tuoi pianeti e le tue case arricchisce la lettura complessiva del tuo tema natale.",
    },
    words: {
      Cardinal:
        "Iniziativa • Impulso • Leadership",
      Fixe:
        "Perseveranza • Stabilità • Determinazione",
      Mutable:
        "Adattamento • Evoluzione • Flessibilità",
    },
    descriptions: {
      Cardinal:
        "La modalità cardinale rappresenta lo slancio dell’inizio, la capacità di prendere l’iniziativa e il bisogno di creare movimento.",
      Fixe:
        "La modalità fissa rappresenta la continuità, la concentrazione, la fedeltà a una direzione e la capacità di mantenere i tuoi sforzi.",
      Mutable:
        "La modalità mutevole rappresenta l’adattamento, la transizione, l’apprendimento e la capacità di modificare il tuo approccio secondo le circostanze.",
    },
    strengths: {
      Cardinal:
        "La tua forza risiede nella capacità di iniziare, prendere l’iniziativa e creare un nuovo slancio. Avanzi più facilmente quando un obiettivo ti stimola.",
      Fixe:
        "La tua forza risiede nella perseveranza, nella lealtà e nella capacità di mantenere la rotta nonostante gli ostacoli. Costruisci con costanza.",
      Mutable:
        "La tua forza risiede nell’adattabilità, nell’intelligenza del movimento e nella capacità di evolvere quando cambiano le circostanze.",
    },
    balances: {
      Cardinal:
        "Presta maggiore attenzione alla continuità. Iniziare è una forza, ma consolidare i tuoi sforzi ti permette di trasformare l’impulso in un successo duraturo.",
      Fixe:
        "Lascia spazio al cambiamento e all’imprevisto. La tua stabilità diventa ancora più potente quando è accompagnata dalla flessibilità.",
      Mutable:
        "Fai attenzione a non disperdere la tua energia. Scegliere una direzione chiara ti aiuta a trasformare la tua flessibilità in un progresso concreto.",
    },
    premiums: {
      Cardinal:
        "Una dominante cardinale indica un temperamento naturalmente orientato all’azione e al rinnovamento. Hai spesso bisogno di sentire che un progetto avanza. La tua sfida consiste nel mantenere il tuo impegno una volta passato l’entusiasmo iniziale.",
      Fixe:
        "Una dominante fissa rafforza la tua resistenza, la tua capacità di concentrazione e il bisogno di preservare ciò che ha valore. La tua sfida consiste nel riconoscere il momento in cui la perseveranza diventa resistenza al cambiamento.",
      Mutable:
        "Una dominante mutevole ti permette di comprendere rapidamente i cambiamenti e di adattare il tuo comportamento con flessibilità. La tua sfida consiste nel mantenere una direzione stabile quando più possibilità attirano contemporaneamente la tua attenzione.",
    },
    fallbackStrength:
      "Il tuo tema combina diversi modi di agire, mantenere gli sforzi e adattarti alle circostanze.",
    fallbackBalance:
      "Osserva i momenti in cui inizi facilmente, quelli in cui perseveri e quelli in cui preferisci modificare la tua direzione.",
    fallbackPremium:
      "Una distribuzione equilibrata delle modalità può indicare che mobiliti ritmi diversi secondo le circostanze. Puoi iniziare, mantenere o adattare le tue azioni in base alle esigenze della situazione.",
  },

  pt: {
    labels: {
      analysis: "Análise Assinatura",
      kicker: "Ritmo interior",
      title: "As modalidades astrológicas",
      lead:
        "As modalidades descrevem seu ritmo natural de ação. Elas revelam como você inicia experiências, desenvolve seus projetos e se adapta às mudanças ao longo do seu percurso.",
      cardinal: "Cardinal",
      fixed: "Fixa",
      mutable: "Mutável",
      planetSingular: "planeta",
      planetPlural: "planetas",
      dominantDynamics:
        "Sua dinâmica dominante",
      undetermined:
        "Não determinada",
      naturalStrength:
        "Sua força natural",
      balanceToDevelop:
        "Seu equilíbrio a desenvolver",
      noDominant:
        "Não foi possível determinar uma modalidade dominante com os dados disponíveis.",
      note:
        "As modalidades não descrevem apenas sua forma de agir. Elas revelam o ritmo natural da sua evolução e como você aborda cada etapa do seu percurso. A interação delas com seus planetas e suas casas enriquece a leitura global do seu mapa natal.",
    },
    words: {
      Cardinal:
        "Iniciativa • Impulso • Liderança",
      Fixe:
        "Perseverança • Estabilidade • Determinação",
      Mutable:
        "Adaptação • Evolução • Flexibilidade",
    },
    descriptions: {
      Cardinal:
        "A modalidade cardinal representa o impulso do início, a capacidade de tomar a iniciativa e a necessidade de criar movimento.",
      Fixe:
        "A modalidade fixa representa continuidade, concentração, fidelidade a uma direção e a capacidade de manter seus esforços.",
      Mutable:
        "A modalidade mutável representa adaptação, transição, aprendizado e a capacidade de modificar sua abordagem conforme as circunstâncias.",
    },
    strengths: {
      Cardinal:
        "Sua força está na capacidade de começar, tomar a iniciativa e criar um novo impulso. Você avança com mais facilidade quando um objetivo o estimula.",
      Fixe:
        "Sua força está na perseverança, na lealdade e na capacidade de manter o rumo apesar dos obstáculos. Você constrói com constância.",
      Mutable:
        "Sua força está na adaptabilidade, na inteligência do movimento e na capacidade de evoluir quando as circunstâncias mudam.",
    },
    balances: {
      Cardinal:
        "Dê mais atenção à continuidade. Começar é uma força, mas consolidar seus esforços permite transformar seu impulso em sucesso duradouro.",
      Fixe:
        "Abra espaço para a mudança e o inesperado. Sua estabilidade se torna ainda mais poderosa quando vem acompanhada de flexibilidade.",
      Mutable:
        "Evite dispersar sua energia. Escolher uma direção clara ajuda você a transformar sua flexibilidade em progresso concreto.",
    },
    premiums: {
      Cardinal:
        "Uma dominante cardinal indica um temperamento naturalmente voltado para a ação e a renovação. Você muitas vezes precisa sentir que um projeto avança. Seu desafio é manter o compromisso depois que o entusiasmo inicial passa.",
      Fixe:
        "Uma dominante fixa reforça sua resistência, sua capacidade de concentração e sua necessidade de preservar o que tem valor. Seu desafio é reconhecer o momento em que a perseverança se transforma em resistência à mudança.",
      Mutable:
        "Uma dominante mutável permite compreender rapidamente as mudanças e ajustar seu comportamento com flexibilidade. Seu desafio é manter uma direção estável quando várias possibilidades atraem sua atenção ao mesmo tempo.",
    },
    fallbackStrength:
      "Seu mapa combina várias maneiras de agir, manter seus esforços e se adaptar às circunstâncias.",
    fallbackBalance:
      "Observe os momentos em que você começa com facilidade, aqueles em que persevera e aqueles em que prefere mudar de direção.",
    fallbackPremium:
      "Uma distribuição equilibrada das modalidades pode indicar que você mobiliza ritmos diferentes conforme as circunstâncias. Você pode iniciar, manter ou ajustar suas ações de acordo com as necessidades da situação.",
  },
};

function replaceAll(
  source: string,
  from: string,
  to: string,
): string {
  return source.split(from).join(to);
}

export function localizeSignatureModalities(
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
    ["Rythme intérieur", labels.kicker],
    ["Les modalités astrologiques", labels.title],
    ["Votre dynamique dominante", labels.dominantDynamics],
    ["Non déterminée", labels.undetermined],
    ["Votre force naturelle", labels.naturalStrength],
    ["Votre équilibre à développer", labels.balanceToDevelop],
    [
      "Aucune modalité dominante n’a pu être déterminée avec les données disponibles.",
      labels.noDominant,
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
    /Les modalités décrivent votre rythme naturel d’action\.\s*Elles révèlent la manière dont vous initiez les expériences,\s*développez vos projets et vous adaptez aux changements\s*tout au long de votre parcours\./g,
    labels.lead,
  );

  out = out.replace(
    /Les modalités ne décrivent pas seulement votre manière d’agir\.\s*Elles révèlent le rythme naturel de votre évolution et la façon\s*dont vous abordez chaque étape de votre parcours\. Leur interaction\s*avec vos planètes et vos maisons enrichit la lecture globale de\s*votre thème natal\./g,
    labels.note,
  );

  const displayModalityMap =
    JSON.stringify({
      Cardinal: labels.cardinal,
      Fixe: labels.fixed,
      Mutable: labels.mutable,
    });

  const wordsMap =
    JSON.stringify(copy.words);

  const descriptionsMap =
    JSON.stringify(copy.descriptions);

  const strengthsMap =
    JSON.stringify(copy.strengths);

  const balancesMap =
    JSON.stringify(copy.balances);

  const premiumsMap =
    JSON.stringify(copy.premiums);

  if (
    !out.includes(
      "const SIGNATURE_MODALITY_DISPLAY_NAMES",
    )
  ) {
    const marker =
      "function getModalityIcon(";

    const index =
      out.indexOf(marker);

    if (index >= 0) {
      const helper = `
const SIGNATURE_MODALITY_DISPLAY_NAMES: Record<
  ModalityName,
  string
> = ${displayModalityMap};

const SIGNATURE_MODALITY_WORDS: Record<
  ModalityName,
  string
> = ${wordsMap};

const SIGNATURE_MODALITY_DESCRIPTIONS: Record<
  ModalityName,
  string
> = ${descriptionsMap};

const SIGNATURE_MODALITY_STRENGTHS: Record<
  ModalityName,
  string
> = ${strengthsMap};

const SIGNATURE_MODALITY_BALANCES: Record<
  ModalityName,
  string
> = ${balancesMap};

const SIGNATURE_MODALITY_PREMIUMS: Record<
  ModalityName,
  string
> = ${premiumsMap};

function getModalityDisplayName(
  modality: ModalityName
): string {
  return (
    SIGNATURE_MODALITY_DISPLAY_NAMES[
      modality
    ] || modality
  );
}

`;

      out =
        out.slice(0, index) +
        helper +
        out.slice(index);
    }
  }

  out = out.replace(
    /\{modality\}/g,
    "{getModalityDisplayName(modality)}",
  );

  out = out.replace(
    /\{hasDominantModality\s*\?\s*dominantModality\s*:\s*"Non déterminée"\}/g,
    `{hasDominantModality
              ? getModalityDisplayName(dominantModality as ModalityName)
              : ${JSON.stringify(
                labels.undetermined,
              )}}`,
  );

  out = out.replace(
    /\{value === 1\s*\?\s*"1 planète"\s*:\s*`\$\{value\} planètes`\}/g,
    `{value === 1
                    ? \`1 ${labels.planetSingular}\`
                    : \`\${value} ${labels.planetPlural}\`}`,
  );

  out = out.replace(
    /MODALITY_WORDS\[\s*modality\s*\]/g,
    "SIGNATURE_MODALITY_WORDS[modality]",
  );

  out = out.replace(
    /const text\s*=\s*MODALITY_TEXT\[modality\];[\s\S]*?return MODALITY_DESCRIPTIONS\[\s*modality\s*\];/m,
    `return SIGNATURE_MODALITY_DESCRIPTIONS[modality];`,
  );

  out = out.replace(
    /\{MODALITY_DESCRIPTIONS\[\s*dominantModality\s*\]\}/g,
    "{null}",
  );

  out = out.replace(
    /const insights\s*=\s*dominantModality\s*\?\s*MODALITY_INSIGHTS\[\s*dominantModality\s*\]\s*:\s*\{[\s\S]*?premium:\s*"Une répartition équilibrée des modalités peut indiquer que vous mobilisez différents rythmes selon les circonstances\. Vous pouvez commencer, maintenir ou ajuster vos actions en fonction des besoins de la situation\.",\s*\};/m,
    `const insights =
    dominantModality
      ? {
          strength:
            SIGNATURE_MODALITY_STRENGTHS[dominantModality],
          balance:
            SIGNATURE_MODALITY_BALANCES[dominantModality],
          premium:
            SIGNATURE_MODALITY_PREMIUMS[dominantModality],
        }
      : {
          strength:
            ${JSON.stringify(
              copy.fallbackStrength,
            )},
          balance:
            ${JSON.stringify(
              copy.fallbackBalance,
            )},
          premium:
            ${JSON.stringify(
              copy.fallbackPremium,
            )},
        };`,
  );

  return out;
}
