import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type StrengthLabels = {
  analysis: string;

  naturalStrengths: string;
  personalResources: string;
  achievementResources: string;

  introNaturalStrengths: string;
  overview: string;

  introAchievement: string;

  unionOfStrengths: string;
  unionText: string;
  anglesText: string;

  howToUseStrengths: string;
  guidanceText: string;

  undeterminedSign: string;

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

  aries: string;
  taurus: string;
  gemini: string;
  cancer: string;
  leo: string;
  virgo: string;
  libra: string;
  scorpio: string;
  sagittarius: string;
  capricorn: string;
  aquarius: string;
  pisces: string;
};

const LABELS: Record<
  NonFrenchLocale,
  StrengthLabels
> = {
  en: {
    analysis:
      "Signature Analysis",

    naturalStrengths:
      "Your natural strengths",

    personalResources:
      "Your personal resources",

    achievementResources:
      "Your resources for fulfillment",

    introNaturalStrengths:
      "The strengths in your chart represent the qualities you can naturally rely on. They do not all express themselves in the same way, but together they form your personal potential.",

    overview:
      "Each planet describes a different inner function. Its sign reveals the qualities that support its expression and the way this energy can become a resource throughout your journey.",

    introAchievement:
      "Some qualities develop through experience, maturity, and conscious choices. They can become powerful supports in your relationships, projects, and personal growth.",

    unionOfStrengths:
      "The union of your strengths",

    unionText:
      "Your true power does not rest on a single quality. It emerges when your different resources work together: sensitivity supports action, reflection clarifies decisions, and perseverance allows your ideas to become concrete.",

    anglesText:
      " Your astrological angles also give these strengths a visible direction and influence the way they express themselves in your life.",

    howToUseStrengths:
      "How to use your strengths",

    guidanceText:
      "• Recognize the qualities you already use naturally, even if they seem ordinary to you.\n\n• Observe the situations in which you feel most confident, effective, or aligned.\n\n• Rely on your dominant strengths to develop the qualities that require more time or practice.\n\n• Avoid turning a quality into a permanent requirement. A strength remains more constructive when it stays flexible and conscious.",

    undeterminedSign:
      "Undetermined sign",

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

    aries: "Aries",
    taurus: "Taurus",
    gemini: "Gemini",
    cancer: "Cancer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Scorpio",
    sagittarius: "Sagittarius",
    capricorn: "Capricorn",
    aquarius: "Aquarius",
    pisces: "Pisces",
  },

  es: {
    analysis:
      "Análisis Firma",

    naturalStrengths:
      "Tus fortalezas naturales",

    personalResources:
      "Tus recursos personales",

    achievementResources:
      "Tus recursos de realización",

    introNaturalStrengths:
      "Las fortalezas de tu carta representan las cualidades en las que puedes apoyarte naturalmente. No todas se expresan de la misma manera, pero juntas forman tu potencial personal.",

    overview:
      "Cada planeta describe una función interior diferente. Su signo revela las cualidades que sostienen su expresión y la manera en que esta energía puede convertirse en un recurso en tu recorrido.",

    introAchievement:
      "Algunas cualidades se desarrollan con la experiencia, la madurez y las elecciones conscientes. Pueden convertirse en apoyos poderosos en tus relaciones, tus proyectos y tu evolución personal.",

    unionOfStrengths:
      "La unión de tus fortalezas",

    unionText:
      "Tu verdadero poder no se basa en una sola cualidad. Aparece cuando tus diferentes recursos colaboran: la sensibilidad sostiene la acción, la reflexión ilumina las decisiones y la perseverancia permite que tus ideas se vuelvan concretas.",

    anglesText:
      " Tus ángulos astrológicos también dan una dirección visible a estas fortalezas e influyen en la manera en que se expresan en tu vida.",

    howToUseStrengths:
      "Cómo utilizar tus fortalezas",

    guidanceText:
      "• Reconoce las cualidades que ya utilizas naturalmente, aunque te parezcan ordinarias.\n\n• Observa las situaciones en las que te sientes con más confianza, eficacia o alineación.\n\n• Apóyate en tus fortalezas dominantes para desarrollar las cualidades que requieren más tiempo o práctica.\n\n• Evita transformar una cualidad en una exigencia permanente. Una fortaleza sigue siendo más constructiva cuando permanece flexible y consciente.",

    undeterminedSign:
      "Signo no determinado",

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

    aries: "Aries",
    taurus: "Tauro",
    gemini: "Géminis",
    cancer: "Cáncer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Escorpio",
    sagittarius: "Sagitario",
    capricorn: "Capricornio",
    aquarius: "Acuario",
    pisces: "Piscis",
  },

  de: {
    analysis:
      "Signatur-Analyse",

    naturalStrengths:
      "Ihre natürlichen Stärken",

    personalResources:
      "Ihre persönlichen Ressourcen",

    achievementResources:
      "Ihre Ressourcen zur Entfaltung",

    introNaturalStrengths:
      "Die Stärken Ihres Horoskops stellen die Qualitäten dar, auf die Sie sich von Natur aus stützen können. Sie drücken sich nicht alle auf die gleiche Weise aus, bilden aber gemeinsam Ihr persönliches Potenzial.",

    overview:
      "Jeder Planet beschreibt eine andere innere Funktion. Sein Zeichen zeigt die Qualitäten, die seinen Ausdruck unterstützen, und wie diese Energie zu einer Ressource auf Ihrem Lebensweg werden kann.",

    introAchievement:
      "Manche Qualitäten entwickeln sich durch Erfahrung, Reife und bewusste Entscheidungen. Sie können zu kraftvollen Stützen in Ihren Beziehungen, Projekten und Ihrer persönlichen Entwicklung werden.",

    unionOfStrengths:
      "Das Zusammenspiel Ihrer Stärken",

    unionText:
      "Ihre wahre Kraft beruht nicht auf einer einzigen Qualität. Sie entsteht, wenn Ihre verschiedenen Ressourcen zusammenwirken: Sensibilität unterstützt das Handeln, Reflexion erhellt Entscheidungen und Ausdauer ermöglicht es Ihren Ideen, konkret zu werden.",

    anglesText:
      " Ihre astrologischen Achsen geben diesen Stärken ebenfalls eine sichtbare Richtung und beeinflussen, wie sie sich in Ihrem Leben ausdrücken.",

    howToUseStrengths:
      "Wie Sie Ihre Stärken nutzen",

    guidanceText:
      "• Erkennen Sie die Qualitäten, die Sie bereits ganz natürlich einsetzen, auch wenn sie Ihnen gewöhnlich erscheinen.\n\n• Beobachten Sie die Situationen, in denen Sie sich besonders selbstsicher, wirksam oder im Einklang fühlen.\n\n• Nutzen Sie Ihre dominanten Stärken, um Qualitäten zu entwickeln, die mehr Zeit oder Übung benötigen.\n\n• Vermeiden Sie es, eine Qualität in eine permanente Anforderung zu verwandeln. Eine Stärke bleibt konstruktiver, wenn sie flexibel und bewusst bleibt.",

    undeterminedSign:
      "Unbestimmtes Zeichen",

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

    aries: "Widder",
    taurus: "Stier",
    gemini: "Zwillinge",
    cancer: "Krebs",
    leo: "Löwe",
    virgo: "Jungfrau",
    libra: "Waage",
    scorpio: "Skorpion",
    sagittarius: "Schütze",
    capricorn: "Steinbock",
    aquarius: "Wassermann",
    pisces: "Fische",
  },

  it: {
    analysis:
      "Analisi Firma",

    naturalStrengths:
      "I tuoi punti di forza naturali",

    personalResources:
      "Le tue risorse personali",

    achievementResources:
      "Le tue risorse di realizzazione",

    introNaturalStrengths:
      "I punti di forza del tuo tema rappresentano le qualità sulle quali puoi fare affidamento naturalmente. Non si esprimono tutti nello stesso modo, ma insieme compongono il tuo potenziale personale.",

    overview:
      "Ogni pianeta descrive una funzione interiore diversa. Il suo segno rivela le qualità che sostengono la sua espressione e il modo in cui questa energia può diventare una risorsa nel tuo percorso.",

    introAchievement:
      "Alcune qualità si sviluppano con l’esperienza, la maturità e le scelte consapevoli. Possono diventare sostegni potenti nelle tue relazioni, nei tuoi progetti e nella tua evoluzione personale.",

    unionOfStrengths:
      "L’unione dei tuoi punti di forza",

    unionText:
      "La tua vera forza non si basa su una sola qualità. Emerge quando le tue diverse risorse collaborano: la sensibilità sostiene l’azione, la riflessione illumina le decisioni e la perseveranza permette alle tue idee di diventare concrete.",

    anglesText:
      " I tuoi angoli astrologici danno inoltre una direzione visibile a queste forze e influenzano il modo in cui si esprimono nella tua vita.",

    howToUseStrengths:
      "Come utilizzare i tuoi punti di forza",

    guidanceText:
      "• Riconosci le qualità che utilizzi già naturalmente, anche se ti sembrano ordinarie.\n\n• Osserva le situazioni nelle quali ti senti più sicuro, efficace o in armonia.\n\n• Appoggiati ai tuoi punti di forza dominanti per sviluppare le qualità che richiedono più tempo o pratica.\n\n• Evita di trasformare una qualità in un’esigenza permanente. Un punto di forza rimane più costruttivo quando resta flessibile e consapevole.",

    undeterminedSign:
      "Segno non determinato",

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

    aries: "Ariete",
    taurus: "Toro",
    gemini: "Gemelli",
    cancer: "Cancro",
    leo: "Leone",
    virgo: "Vergine",
    libra: "Bilancia",
    scorpio: "Scorpione",
    sagittarius: "Sagittario",
    capricorn: "Capricorno",
    aquarius: "Acquario",
    pisces: "Pesci",
  },

  pt: {
    analysis:
      "Análise Assinatura",

    naturalStrengths:
      "Suas forças naturais",

    personalResources:
      "Seus recursos pessoais",

    achievementResources:
      "Seus recursos de realização",

    introNaturalStrengths:
      "As forças do seu mapa representam as qualidades nas quais você pode se apoiar naturalmente. Elas não se expressam todas da mesma maneira, mas juntas compõem seu potencial pessoal.",

    overview:
      "Cada planeta descreve uma função interior diferente. Seu signo revela as qualidades que sustentam sua expressão e a maneira como essa energia pode se tornar um recurso em sua trajetória.",

    introAchievement:
      "Algumas qualidades se desenvolvem com a experiência, a maturidade e as escolhas conscientes. Elas podem se tornar apoios poderosos em seus relacionamentos, projetos e evolução pessoal.",

    unionOfStrengths:
      "A união das suas forças",

    unionText:
      "Seu verdadeiro poder não se apoia em uma única qualidade. Ele aparece quando seus diferentes recursos colaboram: a sensibilidade sustenta a ação, a reflexão esclarece as decisões e a perseverança permite que suas ideias se tornem concretas.",

    anglesText:
      " Seus ângulos astrológicos também dão uma direção visível a essas forças e influenciam a maneira como elas se expressam em sua vida.",

    howToUseStrengths:
      "Como utilizar suas forças",

    guidanceText:
      "• Reconheça as qualidades que você já utiliza naturalmente, mesmo que pareçam comuns.\n\n• Observe as situações nas quais você se sente mais confiante, eficaz ou alinhado.\n\n• Apoie-se em suas forças dominantes para desenvolver as qualidades que exigem mais tempo ou prática.\n\n• Evite transformar uma qualidade em uma exigência permanente. Uma força permanece mais construtiva quando continua flexível e consciente.",

    undeterminedSign:
      "Signo não determinado",

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

    aries: "Áries",
    taurus: "Touro",
    gemini: "Gêmeos",
    cancer: "Câncer",
    leo: "Leão",
    virgo: "Virgem",
    libra: "Libra",
    scorpio: "Escorpião",
    sagittarius: "Sagitário",
    capricorn: "Capricórnio",
    aquarius: "Aquário",
    pisces: "Peixes",
  },
};

function replaceAll(
  source: string,
  from: string,
  to: string,
): string {
  return source
    .split(from)
    .join(to);
}

export function localizeSignatureStrengths(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const labels =
    LABELS[locale as NonFrenchLocale];

  let out =
    source.replace(/\r\n/g, "\n");

  /*
  |--------------------------------------------------------------------------
  | Noms visibles des planètes
  |--------------------------------------------------------------------------
  */

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
    /const PLANET_NAMES:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\};/,
    `const PLANET_NAMES: Record<string, string> = ${JSON.stringify(
      planetNames,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Noms visibles des signes
  |--------------------------------------------------------------------------
  |
  | On conserve aussi les clés françaises parce que rawSign peut arriver
  | sous sa forme française.
  |--------------------------------------------------------------------------
  */

  const signNames = {
    Aries: labels.aries,
    Taurus: labels.taurus,
    Gemini: labels.gemini,
    Cancer: labels.cancer,
    Leo: labels.leo,
    Virgo: labels.virgo,
    Libra: labels.libra,
    Scorpio: labels.scorpio,
    Sagittarius: labels.sagittarius,
    Capricorn: labels.capricorn,
    Aquarius: labels.aquarius,
    Pisces: labels.pisces,

    Bélier: labels.aries,
    Taureau: labels.taurus,
    Gémeaux: labels.gemini,
    Lion: labels.leo,
    Vierge: labels.virgo,
    Balance: labels.libra,
    Scorpion: labels.scorpio,
    Sagittaire: labels.sagittarius,
    Capricorne: labels.capricorn,
    Verseau: labels.aquarius,
    Poissons: labels.pisces,
  };

  out = out.replace(
    /const SIGN_NAMES:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\};/,
    `const SIGN_NAMES: Record<string, string> = ${JSON.stringify(
      signNames,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Textes visibles
  |--------------------------------------------------------------------------
  */

  const replacements:
    Array<[string, string]> = [
      [
        "Analyse Signature",
        labels.analysis,
      ],
      [
        "Vos forces naturelles",
        labels.naturalStrengths,
      ],
      [
        `Les forces de votre thème représentent
              les qualités sur lesquelles vous pouvez
              vous appuyer naturellement. Elles ne
              s’expriment pas toutes de la même manière,
              mais elles composent ensemble votre
              potentiel personnel.`,
        labels.introNaturalStrengths,
      ],
      [
        `Chaque planète décrit une fonction
              intérieure différente. Son signe révèle
              les qualités qui soutiennent son
              expression et la manière dont cette
              énergie peut devenir une ressource dans
              votre parcours.`,
        labels.overview,
      ],
      [
        "Vos ressources personnelles",
        labels.personalResources,
      ],
      [
        "Vos ressources d’accomplissement",
        labels.achievementResources,
      ],
      [
        `Certaines qualités se développent avec
              l’expérience, la maturité et les choix
              conscients. Elles peuvent devenir des
              appuis puissants dans vos relations, vos
              projets et votre évolution personnelle.`,
        labels.introAchievement,
      ],
      [
        "L’union de vos forces",
        labels.unionOfStrengths,
      ],
      [
        `Votre véritable puissance ne repose pas
              sur une seule qualité. Elle apparaît
              lorsque vos différentes ressources
              collaborent : la sensibilité soutient
              l’action, la réflexion éclaire les
              décisions et la persévérance permet à vos
              idées de devenir concrètes.`,
        labels.unionText,
      ],
      [
        " Vos angles astrologiques donnent également une direction visible à ces forces et influencent la manière dont elles s’expriment dans votre vie.",
        labels.anglesText,
      ],
      [
        "Comment utiliser vos forces",
        labels.howToUseStrengths,
      ],
      [
        "Signe non déterminé",
        labels.undeterminedSign,
      ],
    ];

  for (
    const [from, to] of replacements
  ) {
    out =
      replaceAll(
        out,
        from,
        to,
      );
  }

  /*
  |--------------------------------------------------------------------------
  | Bloc de conseils
  |--------------------------------------------------------------------------
  |
  | Ici le texte source contient des expressions JSX {"\\n\\n"}.
  | On remplace donc le contenu complet du Text plutôt que seulement
  | quelques fragments.
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /<Text style=\{styles\.guidanceText\}>[\s\S]*?<\/Text>/,
    `<Text style={styles.guidanceText}>
              {${JSON.stringify(
                labels.guidanceText,
              )}}
            </Text>`,
  );

  return out;
}
