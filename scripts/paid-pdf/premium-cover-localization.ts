import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type CoverCopy = {
  missingValue: string;
  premiumEdition: string;
  personalizedReport: string;
  birthChartTitle: string;
  subtitle: string;
  preparedFor: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  quote: string;
  sun: string;
  sunDescription: string;
  moon: string;
  moonDescription: string;
  ascendant: string;
  ascendantDescription: string;
  exploration: string;
  heartOfChart: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  conclusion: string;
};

const COPY: Record<
  NonFrenchLocale,
  CoverCopy
> = {
  en: {
    missingValue: "Not specified",
    premiumEdition: "Premium Edition",
    personalizedReport:
      "Personalized astrological report",
    birthChartTitle: "Your birth chart",
    subtitle:
      "A deep exploration of your natal chart, your strengths, your challenges, and the major dynamics that shape your evolution.",
    preparedFor:
      "Prepared exclusively for",
    birthDate: "Date of birth",
    birthTime: "Time of birth",
    birthPlace: "Place of birth",
    quote:
      "Your natal chart reveals not only who you are, but also everything you can become.",
    sun: "Sun",
    sunDescription: "Your deep identity",
    moon: "Moon",
    moonDescription:
      "Your emotional world",
    ascendant: "Ascendant",
    ascendantDescription:
      "Your natural presence",
    exploration:
      "Your Premium exploration",
    heartOfChart:
      "At the heart of your natal chart",
    paragraph1:
      "Every human being is born under a unique sky. The positions of the planets, angles, and houses at the precise moment of your birth form a celestial signature that belongs to you.",
    paragraph2:
      "This Premium report offers you a deeper reading of your personality, emotional life, relationships, talents, and the major dynamics that accompany your evolution.",
    paragraph3:
      "You will also discover how the different components of your chart interact with each other. The planets never operate alone: their signs, houses, and aspects together construct a much more nuanced personal story.",
    conclusion:
      "Browse the following pages with openness and curiosity: they are an invitation to better understand your nature and fully recognize your potential.",
  },

  es: {
    missingValue: "No especificado",
    premiumEdition: "Edición Premium",
    personalizedReport:
      "Informe astrológico personalizado",
    birthChartTitle: "Tu carta natal",
    subtitle:
      "Una exploración profunda de tu carta natal, tus fortalezas, tus desafíos y las grandes dinámicas que moldean tu evolución.",
    preparedFor:
      "Preparado exclusivamente para",
    birthDate: "Fecha de nacimiento",
    birthTime: "Hora de nacimiento",
    birthPlace: "Lugar de nacimiento",
    quote:
      "Tu carta natal revela no solo quién eres, sino también todo lo que puedes llegar a ser.",
    sun: "Sol",
    sunDescription: "Tu identidad profunda",
    moon: "Luna",
    moonDescription: "Tu mundo emocional",
    ascendant: "Ascendente",
    ascendantDescription:
      "Tu presencia natural",
    exploration:
      "Tu exploración Premium",
    heartOfChart:
      "En el corazón de tu carta natal",
    paragraph1:
      "Cada ser humano nace bajo un cielo único. Las posiciones de los planetas, los ángulos y las casas en el momento preciso de tu nacimiento forman una firma celeste que te pertenece.",
    paragraph2:
      "Este informe Premium te ofrece una lectura más profunda de tu personalidad, tu vida emocional, tus relaciones, tus talentos y las grandes dinámicas que acompañan tu evolución.",
    paragraph3:
      "También descubrirás cómo dialogan entre sí los diferentes componentes de tu carta. Los planetas nunca funcionan solos: sus signos, casas y aspectos construyen juntos una historia personal mucho más matizada.",
    conclusion:
      "Recorre las páginas siguientes con apertura y curiosidad: son una invitación a comprender mejor tu naturaleza y a reconocer plenamente tu potencial.",
  },

  de: {
    missingValue: "Nicht angegeben",
    premiumEdition: "Premium-Ausgabe",
    personalizedReport:
      "Persönlicher astrologischer Bericht",
    birthChartTitle: "Ihr Geburtshoroskop",
    subtitle:
      "Eine tiefgehende Erkundung Ihres Geburtshoroskops, Ihrer Stärken, Ihrer Herausforderungen und der großen Dynamiken, die Ihre Entwicklung prägen.",
    preparedFor:
      "Exklusiv erstellt für",
    birthDate: "Geburtsdatum",
    birthTime: "Geburtszeit",
    birthPlace: "Geburtsort",
    quote:
      "Ihr Geburtshoroskop zeigt nicht nur, wer Sie sind, sondern auch, was Sie werden können.",
    sun: "Sonne",
    sunDescription: "Ihre tiefe Identität",
    moon: "Mond",
    moonDescription: "Ihre Gefühlswelt",
    ascendant: "Aszendent",
    ascendantDescription:
      "Ihre natürliche Präsenz",
    exploration:
      "Ihre Premium-Erkundung",
    heartOfChart:
      "Im Herzen Ihres Geburtshoroskops",
    paragraph1:
      "Jeder Mensch wird unter einem einzigartigen Himmel geboren. Die Positionen der Planeten, Winkel und Häuser im genauen Moment Ihrer Geburt bilden eine himmlische Signatur, die nur Ihnen gehört.",
    paragraph2:
      "Dieser Premium-Bericht bietet Ihnen eine tiefere Deutung Ihrer Persönlichkeit, Ihres Gefühlslebens, Ihrer Beziehungen, Ihrer Talente und der großen Dynamiken, die Ihre Entwicklung begleiten.",
    paragraph3:
      "Sie erfahren außerdem, wie die verschiedenen Bestandteile Ihres Horoskops miteinander in Beziehung stehen. Planeten wirken niemals isoliert: Ihre Zeichen, Häuser und Aspekte bilden gemeinsam eine wesentlich nuanciertere persönliche Geschichte.",
    conclusion:
      "Gehen Sie die folgenden Seiten mit Offenheit und Neugier durch: Sie laden dazu ein, Ihre Natur besser zu verstehen und Ihr Potenzial vollständig zu erkennen.",
  },

  it: {
    missingValue: "Non specificato",
    premiumEdition: "Edizione Premium",
    personalizedReport:
      "Rapporto astrologico personalizzato",
    birthChartTitle: "Il tuo tema natale",
    subtitle:
      "Un'esplorazione approfondita del tuo tema natale, dei tuoi punti di forza, delle tue sfide e delle grandi dinamiche che plasmano la tua evoluzione.",
    preparedFor:
      "Preparato esclusivamente per",
    birthDate: "Data di nascita",
    birthTime: "Ora di nascita",
    birthPlace: "Luogo di nascita",
    quote:
      "Il tuo tema natale rivela non solo chi sei, ma anche tutto ciò che puoi diventare.",
    sun: "Sole",
    sunDescription: "La tua identità profonda",
    moon: "Luna",
    moonDescription: "Il tuo mondo emotivo",
    ascendant: "Ascendente",
    ascendantDescription:
      "La tua presenza naturale",
    exploration:
      "La tua esplorazione Premium",
    heartOfChart:
      "Nel cuore del tuo tema natale",
    paragraph1:
      "Ogni essere umano nasce sotto un cielo unico. Le posizioni dei pianeti, degli angoli e delle case nel momento preciso della tua nascita formano una firma celeste che ti appartiene.",
    paragraph2:
      "Questo rapporto Premium ti offre una lettura più profonda della tua personalità, della tua vita emotiva, delle tue relazioni, dei tuoi talenti e delle grandi dinamiche che accompagnano la tua evoluzione.",
    paragraph3:
      "Scoprirai inoltre come i diversi elementi del tuo tema dialogano tra loro. I pianeti non agiscono mai da soli: i loro segni, le loro case e i loro aspetti costruiscono insieme una storia personale molto più sfumata.",
    conclusion:
      "Percorri le pagine seguenti con apertura e curiosità: sono un invito a comprendere meglio la tua natura e a riconoscere pienamente il tuo potenziale.",
  },

  pt: {
    missingValue: "Não especificado",
    premiumEdition: "Edição Premium",
    personalizedReport:
      "Relatório astrológico personalizado",
    birthChartTitle: "Seu mapa astral",
    subtitle:
      "Uma exploração profunda do seu mapa natal, das suas forças, dos seus desafios e das grandes dinâmicas que moldam a sua evolução.",
    preparedFor:
      "Preparado exclusivamente para",
    birthDate: "Data de nascimento",
    birthTime: "Hora de nascimento",
    birthPlace: "Local de nascimento",
    quote:
      "Seu mapa natal revela não apenas quem você é, mas também tudo o que você pode se tornar.",
    sun: "Sol",
    sunDescription: "Sua identidade profunda",
    moon: "Lua",
    moonDescription: "Seu mundo emocional",
    ascendant: "Ascendente",
    ascendantDescription:
      "Sua presença natural",
    exploration:
      "Sua exploração Premium",
    heartOfChart:
      "No coração do seu mapa natal",
    paragraph1:
      "Todo ser humano nasce sob um céu único. As posições dos planetas, dos ângulos e das casas no momento exato do seu nascimento formam uma assinatura celeste que pertence somente a você.",
    paragraph2:
      "Este relatório Premium oferece uma leitura mais profunda da sua personalidade, da sua vida emocional, dos seus relacionamentos, dos seus talentos e das grandes dinâmicas que acompanham a sua evolução.",
    paragraph3:
      "Você também descobrirá como os diferentes componentes do seu mapa dialogam entre si. Os planetas nunca funcionam sozinhos: seus signos, casas e aspectos constroem juntos uma história pessoal muito mais sutil.",
    conclusion:
      "Percorra as páginas seguintes com abertura e curiosidade: elas são um convite para compreender melhor a sua natureza e reconhecer plenamente o seu potencial.",
  },
};

function escapeRegExp(
  value: string,
): string {
  return value.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );
}

function flexiblePattern(
  french: string,
): RegExp {
  const parts =
    french
      .trim()
      .split(/\s+/)
      .map(escapeRegExp);

  return new RegExp(
    parts.join("\\s+"),
    "g",
  );
}

function replaceVisibleText(
  source: string,
  french: string,
  translated: string,
): string {
  return source.replace(
    flexiblePattern(french),
    translated,
  );
}

export function localizePremiumCover(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const copy =
    COPY[locale as NonFrenchLocale];

  let output = source;

  const replacements: Array<
    [string, string]
  > = [
    [
      "Édition Premium",
      copy.premiumEdition,
    ],
    [
      "Rapport astrologique personnalisé",
      copy.personalizedReport,
    ],
    [
      "Votre carte du ciel",
      copy.birthChartTitle,
    ],
    [
      "Une exploration approfondie de votre thème natal, de vos forces, de vos défis et des grandes dynamiques qui façonnent votre évolution.",
      copy.subtitle,
    ],
    [
      "Préparé exclusivement pour",
      copy.preparedFor,
    ],
    [
      "Date de naissance",
      copy.birthDate,
    ],
    [
      "Heure de naissance",
      copy.birthTime,
    ],
    [
      "Lieu de naissance",
      copy.birthPlace,
    ],
    [
      "Votre thème natal ne révèle pas seulement qui vous êtes, mais aussi tout ce que vous pouvez devenir.",
      copy.quote,
    ],
    [
      "Votre identité profonde",
      copy.sunDescription,
    ],
    [
      "Votre monde émotionnel",
      copy.moonDescription,
    ],
    [
      "Votre présence naturelle",
      copy.ascendantDescription,
    ],
    [
      "Votre exploration Premium",
      copy.exploration,
    ],
    [
      "Au cœur de votre thème natal",
      copy.heartOfChart,
    ],
    [
      "Chaque être humain naît sous un ciel unique. Les positions des planètes, des angles et des maisons au moment précis de votre naissance forment une signature céleste qui vous appartient.",
      copy.paragraph1,
    ],
    [
      "Ce rapport Premium vous propose une lecture plus profonde de votre personnalité, de votre vie émotionnelle, de vos relations, de vos talents et des grandes dynamiques qui accompagnent votre évolution.",
      copy.paragraph2,
    ],
    [
      "Vous découvrirez également comment les différentes composantes de votre thème dialoguent entre elles. Les planètes ne fonctionnent jamais seules : leurs signes, leurs maisons et leurs aspects construisent ensemble une histoire personnelle beaucoup plus nuancée.",
      copy.paragraph3,
    ],
    [
      "Parcourez les pages suivantes avec ouverture et curiosité : elles constituent une invitation à mieux comprendre votre nature et à reconnaître pleinement votre potentiel.",
      copy.conclusion,
    ],
  ];

  for (
    const [
      french,
      translated,
    ] of replacements
  ) {
    output =
      replaceVisibleText(
        output,
        french,
        translated,
      );
  }

  /*
   * Valeur de repli de displayValue().
   */
  output = output.replace(
    /"Non précisé"/g,
    JSON.stringify(
      copy.missingValue,
    ),
  );

  /*
   * Titres des trois piliers.
   *
   * On cible uniquement le texte JSX
   * compris entre les balises <Text>
   * afin de ne jamais modifier
   * PLANET_ICONS.Sun / .Moon.
   */
  output = output.replace(
    /(<Text[\s\S]*?style=\{styles\.pillarTitle\}[\s\S]*?>)\s*Soleil\s*(<\/Text>)/g,
    `$1${copy.sun}$2`,
  );

  output = output.replace(
    /(<Text[\s\S]*?style=\{styles\.pillarTitle\}[\s\S]*?>)\s*Lune\s*(<\/Text>)/g,
    `$1${copy.moon}$2`,
  );

  output = output.replace(
    /(<Text[\s\S]*?style=\{styles\.pillarTitle\}[\s\S]*?>)\s*Ascendant\s*(<\/Text>)/g,
    `$1${copy.ascendant}$2`,
  );

  return output;
}
