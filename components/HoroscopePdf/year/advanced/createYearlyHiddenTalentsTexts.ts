import type {
  HoroscopeZodiacSign,
} from "../../HoroscopePdfTypes";

/*
|--------------------------------------------------------------------------
| Types temporaires
|--------------------------------------------------------------------------
|
| Ils seront déplacés ensuite dans :
| year/data/types.ts
|
*/

export type YearlyHiddenTalentTextItem = {
  title: string;
  texts: string[];
  activations: string[];
};

export type YearlyHiddenTalentsTexts = {
  introduction: string[];

  dominantTalent: {
    titles: string[];
    texts: string[];
    activations: string[];
  };

  talents: YearlyHiddenTalentTextItem[];

  favorableContext: string[];
  innerBlock: string[];
  conclusion: string[];

  revelationBase: number;
};

/*
|--------------------------------------------------------------------------
| Bélier
|--------------------------------------------------------------------------
*/

const ariesHiddenTalents: YearlyHiddenTalentsTexts = {
  introduction: [
    "cette année peut révéler des capacités que vous utilisez déjà instinctivement sans toujours reconnaître leur véritable valeur.",
    "plusieurs talents discrets peuvent prendre davantage de place dès que vous ralentissez suffisamment pour comprendre comment les employer avec précision.",
    "votre potentiel caché ne réside pas seulement dans votre capacité à agir, mais aussi dans la manière dont vous pouvez orienter et transmettre votre énergie.",
  ],

  dominantTalent: {
    titles: [
      "L’art de déclencher le mouvement",
      "La capacité à réveiller le courage",
      "Le talent de simplifier l’action",
    ],

    texts: [
      "Vous possédez la capacité de reconnaître rapidement le premier geste capable de débloquer une situation. Ce talent peut aider autant vos propres projets que les personnes qui hésitent encore à commencer.",
      "Votre énergie peut réveiller la motivation des autres. Sans toujours vous en rendre compte, vous transmettez une permission d’oser, de décider et de sortir de l’attente.",
      "Vous savez souvent réduire une situation complexe à une décision essentielle. Cette faculté devient particulièrement utile lorsque l’environnement manque de direction.",
    ],

    activations: [
      "Utilisez ce talent dans un projet qui demande une impulsion claire, puis laissez suffisamment d’espace pour que la suite puisse se structurer.",
      "Partagez votre énergie sans imposer votre rythme. Votre force sera plus efficace lorsqu’elle inspire plutôt qu’elle pousse.",
      "Avant d’agir, identifiez la décision la plus simple qui peut créer un changement réel.",
    ],
  },

  talents: [
    {
      title: "Réaction stratégique",
      texts: [
        "Votre rapidité ne sert pas uniquement à agir vite. Elle peut aussi vous aider à repérer immédiatement ce qui demande une réponse prioritaire.",
        "Vous pouvez développer une excellente capacité à distinguer l’urgence réelle de la simple agitation.",
      ],
      activations: [
        "Accordez-vous quelques secondes de recul avant de répondre aux situations importantes.",
        "Demandez-vous quelle action produira le plus d’effet avec le moins de dispersion.",
      ],
    },
    {
      title: "Motivation collective",
      texts: [
        "Votre enthousiasme peut créer un véritable effet d’entraînement autour d’un objectif.",
        "Vous avez le potentiel de redonner de l’élan à une équipe ou à une personne qui doute de ses capacités.",
      ],
      activations: [
        "Exprimez une vision claire et proposez une première étape facilement accessible.",
        "Encouragez les autres sans prendre entièrement leur progression en charge.",
      ],
    },
    {
      title: "Instinct décisionnel",
      texts: [
        "Vous ressentez souvent très vite lorsqu’une direction possède suffisamment d’énergie pour être explorée.",
        "Votre instinct peut vous aider à reconnaître les occasions qui demandent une réponse rapide.",
      ],
      activations: [
        "Vérifiez les faits essentiels, puis faites confiance à votre première lecture.",
        "Notez les décisions instinctives qui se sont révélées justes afin de mieux comprendre votre fonctionnement.",
      ],
    },
    {
      title: "Capacité de relance",
      texts: [
        "Vous savez redémarrer après un arrêt, une déception ou un changement de plan.",
        "Votre capacité à repartir peut devenir un exemple important pour votre entourage.",
      ],
      activations: [
        "Ne cherchez pas à recréer exactement l’ancien plan; construisez une nouvelle version.",
        "Relancez-vous à partir d’une action courte et immédiatement réalisable.",
      ],
    },
  ],

  favorableContext: [
    "Votre potentiel se révèle davantage dans les situations qui demandent une initiative, une décision ou une nouvelle impulsion.",
    "Un environnement dynamique, autonome et orienté vers l’action favorisera l’expression de vos talents.",
    "Les projets en démarrage ou en transformation vous permettront de montrer naturellement vos capacités.",
  ],

  innerBlock: [
    "L’impatience peut vous empêcher de reconnaître les talents qui demandent davantage de maîtrise et de constance.",
    "Vous pourriez minimiser certaines capacités parce qu’elles vous semblent trop naturelles pour être considérées comme de véritables talents.",
    "Le besoin d’obtenir rapidement un résultat peut vous faire abandonner avant que votre potentiel ait eu le temps de se développer.",
  ],

  conclusion: [
    "Votre talent caché consiste à créer le premier mouvement juste. Cette année, apprenez à utiliser cette impulsion avec stratégie afin qu’elle devienne une véritable force de transformation.",
    "Vous pouvez réveiller le courage, la décision et l’élan autour de vous. Votre potentiel prendra toute son ampleur lorsque votre énergie sera associée à une direction durable.",
    "Votre rapidité naturelle contient une intelligence précieuse. En la maîtrisant, vous pourrez devenir une personne capable d’ouvrir la voie sans perdre la profondeur du chemin.",
  ],

  revelationBase: 84,
};

/*
|--------------------------------------------------------------------------
| Taureau
|--------------------------------------------------------------------------
*/

const taurusHiddenTalents: YearlyHiddenTalentsTexts = {
  introduction: [
    "cette année peut révéler des capacités profondes qui se développent discrètement à travers votre patience, votre constance et votre rapport concret à la réalité.",
    "vos talents cachés apparaissent rarement dans la précipitation. Ils se dévoilent lorsque vous avez le temps de maîtriser, d’affiner et de stabiliser une compétence.",
    "votre potentiel le plus précieux réside dans votre capacité à transformer une idée fragile en réalité solide.",
  ],

  dominantTalent: {
    titles: [
      "L’art de rendre les choses durables",
      "La maîtrise patiente",
      "Le talent de matérialisation",
    ],

    texts: [
      "Vous possédez une capacité remarquable à donner une forme concrète et stable à ce qui n’était encore qu’une intention.",
      "Votre talent caché réside dans la maîtrise progressive. Vous pouvez devenir extrêmement compétent lorsque vous acceptez de répéter, d’affiner et de construire avec constance.",
      "Vous savez reconnaître les ressources réelles d’une situation et les utiliser avec intelligence pour créer une base durable.",
    ],

    activations: [
      "Choisissez une compétence ou un projet que vous souhaitez approfondir pendant plusieurs mois.",
      "Donnez-vous le droit d’avancer lentement, mais créez une régularité impossible à ignorer.",
      "Transformez chaque idée importante en une action mesurable et répétable.",
    ],
  },

  talents: [
    {
      title: "Sens de la valeur",
      texts: [
        "Vous savez reconnaître ce qui mérite du temps, de l’énergie ou un investissement plus important.",
        "Votre jugement peut vous aider à distinguer la qualité durable de l’attrait temporaire.",
      ],
      activations: [
        "Analysez la valeur à long terme avant de vous engager.",
        "Utilisez ce talent dans les décisions financières, professionnelles ou matérielles.",
      ],
    },
    {
      title: "Créativité sensorielle",
      texts: [
        "Votre rapport aux formes, aux textures, aux sons ou aux ambiances peut devenir une véritable source de création.",
        "Vous possédez une sensibilité capable de rendre un projet plus agréable, plus beau ou plus vivant.",
      ],
      activations: [
        "Explorez une activité artistique, culinaire, décorative ou artisanale.",
        "Faites confiance à votre perception concrète de ce qui crée une expérience harmonieuse.",
      ],
    },
    {
      title: "Stabilisation",
      texts: [
        "Votre présence peut calmer une situation et aider les autres à retrouver des repères.",
        "Vous savez créer un cadre dans lequel un projet ou une relation peut se développer avec davantage de sécurité.",
      ],
      activations: [
        "Définissez des routines et des repères simples autour de ce qui compte.",
        "Utilisez votre calme pour soutenir sans prendre le contrôle.",
      ],
    },
    {
      title: "Gestion des ressources",
      texts: [
        "Vous pouvez développer une grande intelligence dans l’utilisation du temps, de l’argent et des ressources disponibles.",
        "Votre sens pratique vous aide à éviter le gaspillage et à renforcer progressivement une base.",
      ],
      activations: [
        "Faites un inventaire précis de ce que vous possédez déjà.",
        "Construisez une stratégie réaliste plutôt que de rechercher une solution spectaculaire.",
      ],
    },
  ],

  favorableContext: [
    "Vos talents se révèlent davantage dans les projets qui demandent patience, qualité et continuité.",
    "Un environnement stable et suffisamment autonome vous permettra d’approfondir vos capacités.",
    "Les activités concrètes, créatives ou financières peuvent devenir des terrains particulièrement favorables.",
  ],

  innerBlock: [
    "Votre attachement aux méthodes connues pourrait vous empêcher d’explorer une capacité encore nouvelle.",
    "Vous pourriez sous-estimer votre talent parce qu’il se développe sans bruit et sans résultat immédiat.",
    "La peur de perdre votre stabilité peut retarder l’expérience nécessaire à la révélation de votre potentiel.",
  ],

  conclusion: [
    "Votre talent caché consiste à rendre durable ce qui possède une vraie valeur. Cette année, votre patience peut transformer une aptitude discrète en compétence majeure.",
    "Vous n’avez pas besoin de tout révéler rapidement. Votre potentiel se construit avec profondeur et devient particulièrement puissant lorsqu’il repose sur une pratique régulière.",
    "Votre capacité à matérialiser, stabiliser et valoriser constitue une richesse importante. Donnez-lui un projet concret dans lequel s’exprimer.",
  ],

  revelationBase: 82,
};

/*
|--------------------------------------------------------------------------
| Gémeaux
|--------------------------------------------------------------------------
*/

const geminiHiddenTalents: YearlyHiddenTalentsTexts = {
  introduction: [
    "cette année peut révéler des capacités intellectuelles et relationnelles que vous utilisez parfois sans mesurer leur influence réelle.",
    "votre potentiel caché apparaît dans votre manière de relier les idées, les personnes et les informations avec rapidité.",
    "vos talents peuvent prendre davantage de valeur dès que votre curiosité est dirigée vers une création, une transmission ou une solution concrète.",
  ],

  dominantTalent: {
    titles: [
      "L’art de créer des connexions",
      "La traduction des idées",
      "L’intelligence des réseaux",
    ],

    texts: [
      "Vous possédez la capacité de relier des informations provenant de domaines très différents et d’en faire émerger une nouvelle compréhension.",
      "Votre talent caché réside dans votre aptitude à rendre une idée complexe plus simple, vivante et accessible.",
      "Vous savez reconnaître les personnes, les connaissances ou les ressources qui pourraient utilement être mises en contact.",
    ],

    activations: [
      "Utilisez ce talent dans l’écriture, l’enseignement, la communication ou la création de contenu.",
      "Choisissez un sujet complexe et entraînez-vous à l’expliquer simplement.",
      "Créez des liens entre vos différents centres d’intérêt au lieu de les considérer comme séparés.",
    ],
  },

  talents: [
    {
      title: "Vulgarisation",
      texts: [
        "Vous savez transformer des informations techniques ou abstraites en langage plus accessible.",
        "Votre vivacité peut aider les autres à comprendre rapidement l’essentiel.",
      ],
      activations: [
        "Expliquez ce que vous apprenez à une personne qui découvre le sujet.",
        "Créez des textes, des vidéos ou des outils simples à partir de vos connaissances.",
      ],
    },
    {
      title: "Improvisation",
      texts: [
        "Vous pouvez répondre rapidement à une situation imprévue et trouver une solution créative.",
        "Votre souplesse mentale vous permet de modifier votre approche en direct.",
      ],
      activations: [
        "Acceptez les contextes dans lesquels tout ne peut pas être préparé.",
        "Utilisez une structure minimale qui laisse suffisamment de place à votre spontanéité.",
      ],
    },
    {
      title: "Lecture des tendances",
      texts: [
        "Vous repérez rapidement les nouveaux sujets, les changements de langage ou les intérêts émergents.",
        "Votre curiosité peut vous donner une avance dans les environnements qui évoluent vite.",
      ],
      activations: [
        "Observez les thèmes qui reviennent dans plusieurs conversations ou secteurs.",
        "Transformez une tendance en idée concrète avant de passer à la suivante.",
      ],
    },
    {
      title: "Médiation intellectuelle",
      texts: [
        "Vous pouvez comprendre plusieurs raisonnements opposés et trouver un terrain de discussion.",
        "Votre capacité à changer de perspective facilite la résolution de certains malentendus.",
      ],
      activations: [
        "Reformulez chaque point de vue avant de proposer votre propre solution.",
        "Utilisez votre neutralité sans éviter de prendre position lorsque cela devient nécessaire.",
      ],
    },
  ],

  favorableContext: [
    "Vos talents se révèlent dans les environnements stimulants, mobiles et riches en échanges.",
    "La communication, l’apprentissage et la transmission favoriseront votre potentiel.",
    "Les projets qui réunissent plusieurs domaines ou plusieurs personnes peuvent devenir particulièrement porteurs.",
  ],

  innerBlock: [
    "La dispersion peut empêcher une capacité prometteuse de devenir une véritable expertise.",
    "Vous pourriez abandonner une idée dès que la phase de nouveauté diminue.",
    "Le besoin de tout comprendre rapidement peut vous faire éviter les apprentissages qui demandent davantage de profondeur.",
  ],

  conclusion: [
    "Votre talent caché consiste à faire circuler l’intelligence. Cette année, vos idées prendront davantage de valeur lorsque vous leur donnerez une forme claire et transmissible.",
    "Vous possédez un véritable don pour relier ce qui semblait séparé. Votre potentiel se révélera lorsque vous choisirez une connexion assez importante pour la développer pleinement.",
    "Votre vivacité mentale peut devenir une compétence majeure. Donnez-lui une direction, une méthode et un projet concret.",
  ],

  revelationBase: 85,
};

/*
|--------------------------------------------------------------------------
| Cancer
|--------------------------------------------------------------------------
*/

const cancerHiddenTalents: YearlyHiddenTalentsTexts = {
  introduction: [
    "cette année peut révéler des capacités intuitives et relationnelles que votre sensibilité utilise déjà de manière naturelle.",
    "votre potentiel caché se trouve dans votre compréhension profonde des émotions, des besoins et des atmosphères.",
    "vos talents peuvent prendre davantage de place lorsque vous apprenez à protéger votre énergie tout en faisant confiance à votre perception.",
  ],

  dominantTalent: {
    titles: [
      "La lecture émotionnelle",
      "L’art de créer la sécurité",
      "La mémoire intuitive",
    ],

    texts: [
      "Vous possédez la capacité de comprendre ce qui se joue émotionnellement derrière les mots et les comportements.",
      "Votre talent caché réside dans votre aptitude à créer un espace où les autres peuvent se sentir compris, accueillis et en confiance.",
      "Votre mémoire conserve les impressions, les ambiances et les détails affectifs qui vous permettent de comprendre une situation dans toute sa profondeur.",
    ],

    activations: [
      "Utilisez cette capacité dans l’accompagnement, la création, la relation ou la transmission.",
      "Créez un environnement dans lequel votre propre sécurité émotionnelle est aussi respectée.",
      "Notez vos impressions intuitives afin de reconnaître les schémas qui se répètent.",
    ],
  },

  talents: [
    {
      title: "Écoute profonde",
      texts: [
        "Vous savez entendre ce qui n’est pas directement exprimé.",
        "Votre présence peut permettre à une personne de clarifier elle-même ce qu’elle ressent.",
      ],
      activations: [
        "Laissez des silences suffisants dans les conversations importantes.",
        "Écoutez sans chercher immédiatement à réparer ou à conseiller.",
      ],
    },
    {
      title: "Création d’atmosphère",
      texts: [
        "Vous possédez un sens naturel de ce qui rend un lieu ou un moment plus chaleureux.",
        "Votre sensibilité peut transformer une expérience ordinaire en souvenir important.",
      ],
      activations: [
        "Utilisez la décoration, la nourriture, la musique ou les rituels pour créer une ambiance.",
        "Concevez des espaces qui soutiennent autant votre bien-être que celui des autres.",
      ],
    },
    {
      title: "Protection intuitive",
      texts: [
        "Vous ressentez rapidement lorsqu’une situation demande davantage de prudence.",
        "Votre instinct vous aide à reconnaître ce qui peut fragiliser un équilibre.",
      ],
      activations: [
        "Écoutez votre premier inconfort sans le transformer immédiatement en certitude.",
        "Vérifiez les faits, puis établissez une limite claire lorsque cela est nécessaire.",
      ],
    },
    {
      title: "Transmission de mémoire",
      texts: [
        "Vous pouvez donner de la valeur aux histoires, aux traditions et aux expériences du passé.",
        "Votre mémoire émotionnelle peut nourrir l’écriture, la création ou la transmission familiale.",
      ],
      activations: [
        "Transformez un souvenir important en récit, projet ou création.",
        "Conservez ce qui mérite de l’être sans rester prisonnier de ce qui doit évoluer.",
      ],
    },
  ],

  favorableContext: [
    "Vos talents se révèlent dans les environnements humains, créatifs et émotionnellement sécurisants.",
    "Les projets liés à l’accueil, au soin, à la famille ou à la création peuvent être particulièrement favorables.",
    "Une relation de confiance vous permettra d’exprimer davantage vos capacités.",
  ],

  innerBlock: [
    "La peur d’être blessé peut vous pousser à cacher une sensibilité pourtant très précieuse.",
    "Vous pourriez absorber les émotions des autres au point de ne plus reconnaître vos propres besoins.",
    "Votre attachement au passé peut ralentir la révélation d’un talent qui demande une nouvelle forme.",
  ],

  conclusion: [
    "Votre talent caché consiste à comprendre et à sécuriser le monde émotionnel. Cette année, votre sensibilité peut devenir une véritable compétence dès qu’elle s’accompagne de limites claires.",
    "Vous possédez une capacité rare à créer de la confiance. Votre potentiel se révélera lorsque vous inclurez votre propre bien-être dans ce que vous offrez aux autres.",
    "Votre intuition contient une intelligence profonde. Donnez-lui un cadre concret afin qu’elle puisse devenir un outil de création, de relation ou d’accompagnement.",
  ],

  revelationBase: 87,
};

/*
|--------------------------------------------------------------------------
| Lion
|--------------------------------------------------------------------------
*/

const leoHiddenTalents: YearlyHiddenTalentsTexts = {
  introduction: [
    "cette année peut révéler des capacités créatives et inspirantes qui dépassent largement votre simple présence extérieure.",
    "votre potentiel caché réside dans la manière dont vous pouvez encourager, transmettre et donner confiance aux autres.",
    "vos talents prennent davantage de force lorsque votre besoin d’expression est relié à une intention authentique.",
  ],

  dominantTalent: {
    titles: [
      "Le pouvoir d’inspirer",
      "La mise en lumière des autres",
      "La création d’une vision",
    ],

    texts: [
      "Vous possédez la capacité de transmettre de la confiance et de rendre une possibilité plus vivante.",
      "Votre talent caché ne consiste pas seulement à attirer l’attention, mais à aider les autres à reconnaître leur propre valeur.",
      "Vous savez donner une identité forte à une idée, un projet ou une expérience.",
    ],

    activations: [
      "Utilisez votre présence pour soutenir un message ou un projet qui vous représente réellement.",
      "Encouragez une personne ou une équipe en nommant précisément leurs qualités.",
      "Créez une vision claire que les autres peuvent comprendre et partager.",
    ],
  },

  talents: [
    {
      title: "Mise en scène",
      texts: [
        "Vous savez créer une présentation capable de retenir l’attention.",
        "Votre sens dramatique peut donner davantage d’impact à un message ou à une création.",
      ],
      activations: [
        "Utilisez les images, les histoires ou la structure pour renforcer votre communication.",
        "Conservez l’authenticité au centre de votre présentation.",
      ],
    },
    {
      title: "Valorisation",
      texts: [
        "Vous avez le potentiel de faire ressortir les qualités d’une personne, d’un produit ou d’un projet.",
        "Votre regard peut aider les autres à reconnaître ce qu’ils possèdent déjà.",
      ],
      activations: [
        "Exprimez des encouragements précis plutôt que généraux.",
        "Mettez en lumière ce qui mérite une reconnaissance réelle.",
      ],
    },
    {
      title: "Création d’identité",
      texts: [
        "Vous savez donner une personnalité cohérente et mémorable à un projet.",
        "Votre sens du style peut devenir un véritable outil de différenciation.",
      ],
      activations: [
        "Définissez les valeurs, le ton et l’image que vous souhaitez transmettre.",
        "Utilisez votre créativité pour rendre votre projet immédiatement reconnaissable.",
      ],
    },
    {
      title: "Courage créatif",
      texts: [
        "Vous pouvez oser montrer une création personnelle malgré le risque de jugement.",
        "Votre confiance peut ouvrir la voie à une expression plus libre.",
      ],
      activations: [
        "Publiez, présentez ou partagez une création avant de la considérer parfaite.",
        "Mesurez votre progression selon votre authenticité plutôt que selon la réaction immédiate.",
      ],
    },
  ],

  favorableContext: [
    "Vos talents se révèlent dans les environnements créatifs, visibles et humains.",
    "Les projets qui demandent une identité forte ou une capacité de présentation seront particulièrement favorables.",
    "Une occasion de transmettre, de diriger ou de représenter peut révéler une nouvelle facette de votre potentiel.",
  ],

  innerBlock: [
    "La peur de ne pas être reconnu peut vous pousser à cacher une création encore fragile.",
    "Vous pourriez confondre votre valeur personnelle avec la réaction obtenue.",
    "Le désir de produire quelque chose d’impressionnant peut retarder une expression pourtant sincère.",
  ],

  conclusion: [
    "Votre talent caché consiste à donner de la lumière, du courage et une identité forte. Cette année, votre potentiel se révélera lorsque votre rayonnement servira une création authentique.",
    "Vous possédez une capacité réelle à inspirer. Votre influence devient particulièrement forte lorsque vous utilisez votre présence pour valoriser plutôt que pour simplement impressionner.",
    "Votre créativité peut devenir une signature importante. Donnez-lui la permission d’exister avant de chercher à la rendre parfaite.",
  ],

  revelationBase: 88,
};

/*
|--------------------------------------------------------------------------
| Vierge
|--------------------------------------------------------------------------
*/

const virgoHiddenTalents: YearlyHiddenTalentsTexts = {
  introduction: [
    "cette année peut révéler des capacités d’analyse, de structuration et de transmission que vous considérez peut-être comme de simples habitudes.",
    "votre potentiel caché apparaît dans votre manière d’améliorer, de clarifier et de rendre plus efficace ce qui vous entoure.",
    "vos talents prennent davantage de valeur lorsque votre exigence est utilisée pour construire plutôt que pour vous limiter.",
  ],

  dominantTalent: {
    titles: [
      "L’art de rendre les choses plus claires",
      "La conception de méthodes",
      "L’intelligence de l’amélioration",
    ],

    texts: [
      "Vous possédez la capacité de transformer une situation désorganisée en système compréhensible et efficace.",
      "Votre talent caché réside dans votre aptitude à créer une méthode qui simplifie le travail et réduit les erreurs.",
      "Vous savez repérer les ajustements précis capables d’améliorer considérablement un résultat.",
    ],

    activations: [
      "Choisissez un processus existant et créez une version plus simple.",
      "Transformez votre expérience en guide, liste, outil ou méthode transmissible.",
      "Concentrez-vous sur les améliorations qui produisent un véritable effet.",
    ],
  },

  talents: [
    {
      title: "Diagnostic",
      texts: [
        "Vous repérez rapidement l’origine probable d’un problème.",
        "Votre attention aux détails vous permet de voir ce que les autres ont négligé.",
      ],
      activations: [
        "Analysez les causes avant de corriger les conséquences.",
        "Présentez votre diagnostic avec une solution concrète.",
      ],
    },
    {
      title: "Pédagogie pratique",
      texts: [
        "Vous pouvez expliquer une procédure étape par étape avec beaucoup de clarté.",
        "Votre sens de l’ordre facilite la transmission de compétences.",
      ],
      activations: [
        "Créez un guide simple à partir d’une compétence que vous maîtrisez.",
        "Adaptez vos explications au niveau réel de la personne qui apprend.",
      ],
    },
    {
      title: "Optimisation",
      texts: [
        "Vous savez réduire les pertes de temps, les erreurs et les complications inutiles.",
        "Votre esprit peut transformer une routine lourde en méthode plus efficace.",
      ],
      activations: [
        "Identifiez l’étape la plus répétitive ou la plus coûteuse.",
        "Testez une amélioration à la fois afin d’en mesurer l’effet.",
      ],
    },
    {
      title: "Observation humaine",
      texts: [
        "Votre attention vous permet de reconnaître les besoins pratiques que les autres n’expriment pas toujours.",
        "Vous pouvez offrir une aide particulièrement adaptée et utile.",
      ],
      activations: [
        "Posez une question avant de proposer votre solution.",
        "Aidez sans prendre automatiquement la responsabilité complète du problème.",
      ],
    },
  ],

  favorableContext: [
    "Vos talents se révèlent dans les environnements qui demandent précision, méthode et amélioration.",
    "La création d’outils, de guides ou de systèmes peut devenir particulièrement favorable.",
    "Un projet qui possède déjà une base mais manque de structure peut mettre vos capacités en valeur.",
  ],

  innerBlock: [
    "La peur de produire quelque chose d’imparfait peut empêcher votre talent d’être utilisé.",
    "Vous pourriez sous-estimer une compétence parce qu’elle vous semble évidente.",
    "L’analyse excessive peut retarder la mise en pratique de votre méthode.",
  ],

  conclusion: [
    "Votre talent caché consiste à transformer la complexité en clarté. Cette année, votre savoir-faire peut devenir une véritable valeur dès que vous acceptez de le transmettre.",
    "Vous possédez une intelligence pratique très précieuse. Votre potentiel se révélera lorsque votre exigence produira une solution utilisable plutôt qu’une attente de perfection.",
    "Votre capacité à observer, structurer et améliorer peut devenir une compétence majeure. Donnez-lui un projet concret à simplifier.",
  ],

  revelationBase: 86,
};

/*
|--------------------------------------------------------------------------
| Balance
|--------------------------------------------------------------------------
*/

const libraHiddenTalents: YearlyHiddenTalentsTexts = {
  introduction: [
    "cette année peut révéler des capacités relationnelles, esthétiques et stratégiques que vous utilisez souvent avec beaucoup de naturel.",
    "votre potentiel caché apparaît dans votre manière de créer de l’harmonie sans perdre la compréhension des intérêts de chacun.",
    "vos talents se développent lorsque vous acceptez de donner une forme claire à votre propre vision.",
  ],

  dominantTalent: {
    titles: [
      "L’art de créer l’accord",
      "La conception de l’harmonie",
      "L’intelligence des relations",
    ],

    texts: [
      "Vous possédez la capacité de comprendre plusieurs positions et d’imaginer une solution plus équilibrée.",
      "Votre talent caché réside dans votre aptitude à rendre une expérience, une présentation ou un environnement plus harmonieux.",
      "Vous savez reconnaître les dynamiques relationnelles et les ajustements capables d’améliorer une collaboration.",
    ],

    activations: [
      "Utilisez ce talent dans la négociation, la création, le conseil ou la collaboration.",
      "Exprimez d’abord votre propre position avant de chercher l’accord.",
      "Transformez votre sens esthétique en choix concrets et cohérents.",
    ],
  },

  talents: [
    {
      title: "Négociation",
      texts: [
        "Vous savez repérer les intérêts communs derrière des positions différentes.",
        "Votre tact peut rendre une discussion difficile plus productive.",
      ],
      activations: [
        "Définissez les besoins non négociables de chaque partie.",
        "Proposez une solution précise plutôt qu’un compromis vague.",
      ],
    },
    {
      title: "Direction artistique",
      texts: [
        "Vous pouvez créer une cohérence visuelle et émotionnelle autour d’un projet.",
        "Votre sens de l’équilibre vous aide à choisir les éléments qui fonctionnent ensemble.",
      ],
      activations: [
        "Définissez une palette, une ambiance et une intention centrale.",
        "Éliminez les éléments qui ne renforcent pas l’ensemble.",
      ],
    },
    {
      title: "Lecture sociale",
      texts: [
        "Vous comprenez rapidement les alliances, les tensions et les attentes d’un groupe.",
        "Votre intelligence sociale peut faciliter une intégration ou une collaboration.",
      ],
      activations: [
        "Observez les échanges avant de prendre position.",
        "Utilisez votre compréhension sans chercher à plaire à tout le monde.",
      ],
    },
    {
      title: "Mise en valeur",
      texts: [
        "Vous savez présenter une idée ou une personne sous son angle le plus harmonieux.",
        "Votre regard peut rendre un projet plus séduisant sans le dénaturer.",
      ],
      activations: [
        "Identifiez la qualité principale à mettre en avant.",
        "Conservez une présentation fidèle à la réalité.",
      ],
    },
  ],

  favorableContext: [
    "Vos talents se révèlent dans les environnements relationnels, créatifs et collaboratifs.",
    "Les projets qui demandent négociation, esthétique ou présentation seront particulièrement favorables.",
    "Une collaboration équilibrée peut vous permettre d’exprimer une capacité encore peu utilisée.",
  ],

  innerBlock: [
    "La peur de créer un désaccord peut vous empêcher d’assumer votre véritable vision.",
    "Vous pourriez attendre l’approbation avant de reconnaître votre propre talent.",
    "Le désir de tout équilibrer peut affaiblir une idée qui demande davantage de caractère.",
  ],

  conclusion: [
    "Votre talent caché consiste à créer une harmonie qui possède du sens. Cette année, votre potentiel se révélera lorsque vous assumerez clairement votre propre vision.",
    "Vous possédez une intelligence relationnelle et esthétique très précieuse. Utilisez-la pour concevoir, négocier et mettre en valeur sans vous effacer.",
    "Votre capacité à relier les personnes et les idées peut devenir un véritable levier. Votre propre position doit toutefois rester visible dans l’équilibre créé.",
  ],

  revelationBase: 84,
};

/*
|--------------------------------------------------------------------------
| Scorpion
|--------------------------------------------------------------------------
*/

const scorpioHiddenTalents: YearlyHiddenTalentsTexts = {
  introduction: [
    "cette année peut révéler des capacités de compréhension, de transformation et de stratégie que vous utilisez souvent dans l’ombre.",
    "votre potentiel caché apparaît dans votre manière de lire les motivations profondes et de reconstruire après une période complexe.",
    "vos talents prennent davantage de force lorsque votre intensité est dirigée vers une transformation concrète.",
  ],

  dominantTalent: {
    titles: [
      "La lecture de l’invisible",
      "L’art de la transformation",
      "L’intelligence stratégique",
    ],

    texts: [
      "Vous possédez la capacité de percevoir les enjeux cachés, les motivations réelles et les zones de fragilité d’une situation.",
      "Votre talent caché réside dans votre aptitude à accompagner une transformation profonde sans vous satisfaire d’un changement superficiel.",
      "Vous savez analyser les rapports de force et reconnaître le moment où une stratégie doit évoluer.",
    ],

    activations: [
      "Utilisez ce talent dans la recherche, la stratégie, l’accompagnement ou la création.",
      "Transformez votre intuition en questions précises et en observations vérifiables.",
      "Choisissez une situation dans laquelle votre profondeur peut produire une véritable amélioration.",
    ],
  },

  talents: [
    {
      title: "Investigation",
      texts: [
        "Vous savez chercher au-delà de la première explication.",
        "Votre persévérance vous permet de découvrir des informations importantes.",
      ],
      activations: [
        "Définissez clairement ce que vous cherchez à comprendre.",
        "Rassemblez les faits avant de tirer une conclusion définitive.",
      ],
    },
    {
      title: "Gestion de crise",
      texts: [
        "Vous pouvez devenir particulièrement lucide lorsque la situation devient intense.",
        "Votre calme intérieur peut apparaître précisément lorsque les autres perdent leurs repères.",
      ],
      activations: [
        "Concentrez-vous sur les décisions essentielles.",
        "Utilisez votre intensité pour stabiliser plutôt que pour contrôler.",
      ],
    },
    {
      title: "Transformation psychologique",
      texts: [
        "Vous comprenez naturellement comment les blessures, les peurs et les désirs influencent les comportements.",
        "Votre profondeur peut aider à identifier l’origine d’un schéma répétitif.",
      ],
      activations: [
        "Utilisez ce talent avec respect et sans imposer votre interprétation.",
        "Appliquez d’abord cette lucidité à votre propre évolution.",
      ],
    },
    {
      title: "Reconstruction",
      texts: [
        "Vous savez repartir sur des bases entièrement nouvelles après une rupture.",
        "Votre résilience peut devenir une méthode de transformation très puissante.",
      ],
      activations: [
        "Conservez les leçons sans reproduire l’ancienne structure.",
        "Définissez clairement ce que vous ne souhaitez plus reconstruire.",
      ],
    },
  ],

  favorableContext: [
    "Vos talents se révèlent dans les environnements qui demandent profondeur, stratégie et transformation.",
    "Les situations complexes peuvent faire apparaître des capacités que vous utilisez rarement dans les périodes calmes.",
    "La recherche, la psychologie, la stratégie ou la création intense peuvent être particulièrement favorables.",
  ],

  innerBlock: [
    "La méfiance peut vous empêcher de partager une capacité pourtant précieuse.",
    "Vous pourriez retenir votre talent par peur de perdre le contrôle ou d’être vulnérable.",
    "L’intensité émotionnelle peut parfois déformer une perception initialement juste.",
  ],

  conclusion: [
    "Votre talent caché consiste à voir ce qui doit réellement être transformé. Cette année, votre profondeur peut devenir une compétence majeure lorsqu’elle sert une reconstruction concrète.",
    "Vous possédez une intelligence stratégique et psychologique rare. Votre potentiel se révélera lorsque vous utiliserez cette lucidité pour créer plutôt que pour seulement vous protéger.",
    "Votre capacité à traverser l’invisible peut ouvrir une nouvelle étape. Donnez à votre intuition des faits, une direction et un objectif clair.",
  ],

  revelationBase: 91,
};

/*
|--------------------------------------------------------------------------
| Sagittaire
|--------------------------------------------------------------------------
*/

const sagittariusHiddenTalents: YearlyHiddenTalentsTexts = {
  introduction: [
    "cette année peut révéler des capacités de transmission, de vision et d’exploration que vous utilisez parfois sans leur donner de structure.",
    "votre potentiel caché apparaît dans votre manière de donner du sens aux expériences et de transmettre une perspective plus large.",
    "vos talents prennent davantage de valeur lorsque votre enthousiasme devient un projet concret.",
  ],

  dominantTalent: {
    titles: [
      "La transmission du sens",
      "L’art d’élargir les horizons",
      "La vision inspirante",
    ],

    texts: [
      "Vous possédez la capacité de relier une expérience particulière à une compréhension plus vaste.",
      "Votre talent caché réside dans votre aptitude à ouvrir l’esprit des autres à de nouvelles possibilités.",
      "Vous savez transmettre une idée avec enthousiasme et lui donner une dimension inspirante.",
    ],

    activations: [
      "Utilisez ce talent dans l’enseignement, l’écriture, le voyage ou la communication.",
      "Transformez une expérience personnelle en connaissance utile.",
      "Donnez une structure précise à la vision que vous souhaitez transmettre.",
    ],
  },

  talents: [
    {
      title: "Pédagogie inspirante",
      texts: [
        "Vous savez rendre un sujet vivant et donner envie d’en apprendre davantage.",
        "Votre enthousiasme peut faciliter la compréhension et la mémorisation.",
      ],
      activations: [
        "Utilisez des exemples, des histoires et des expériences concrètes.",
        "Vérifiez que votre message reste accessible et structuré.",
      ],
    },
    {
      title: "Exploration culturelle",
      texts: [
        "Vous pouvez comprendre rapidement les différences de pensée et de culture.",
        "Votre ouverture facilite les connexions entre des univers éloignés.",
      ],
      activations: [
        "Approfondissez une culture, une langue ou une tradition.",
        "Transformez vos découvertes en contenu ou en projet.",
      ],
    },
    {
      title: "Vision stratégique",
      texts: [
        "Vous savez voir plus loin que la situation immédiate.",
        "Votre esprit peut imaginer plusieurs étapes futures et reconnaître une direction porteuse.",
      ],
      activations: [
        "Écrivez votre vision à trois, six et douze mois.",
        "Associez chaque ambition à une étape concrète.",
      ],
    },
    {
      title: "Création de confiance",
      texts: [
        "Votre optimisme peut aider les autres à retrouver une perspective plus ouverte.",
        "Vous possédez le talent de redonner du sens après une période de doute.",
      ],
      activations: [
        "Encouragez sans nier les difficultés réelles.",
        "Montrez comment une possibilité peut devenir une action.",
      ],
    },
  ],

  favorableContext: [
    "Vos talents se révèlent dans les environnements d’apprentissage, de voyage et de transmission.",
    "Les projets qui vous permettent d’explorer puis de partager seront particulièrement favorables.",
    "Une expérience nouvelle peut réveiller une capacité que vous n’aviez jamais pleinement utilisée.",
  ],

  innerBlock: [
    "La peur de perdre votre liberté peut vous empêcher d’approfondir un talent.",
    "Vous pourriez multiplier les expériences sans transformer vos connaissances en véritable compétence.",
    "L’enthousiasme peut vous faire sous-estimer le travail de structuration nécessaire.",
  ],

  conclusion: [
    "Votre talent caché consiste à transformer l’expérience en vision et la vision en inspiration. Cette année, votre potentiel se révélera lorsque vous donnerez une forme concrète à ce que vous avez compris.",
    "Vous possédez une capacité naturelle à ouvrir les horizons. Votre talent deviendra plus puissant lorsque vous choisirez un message précis à transmettre.",
    "Votre enthousiasme peut devenir une compétence majeure. Structurez-le, approfondissez-le et partagez-le avec constance.",
  ],

  revelationBase: 87,
};

/*
|--------------------------------------------------------------------------
| Capricorne
|--------------------------------------------------------------------------
*/

const capricornHiddenTalents: YearlyHiddenTalentsTexts = {
  introduction: [
    "cette année peut révéler des capacités de direction, de stratégie et de construction que vous utilisez parfois uniquement par nécessité.",
    "votre potentiel caché apparaît dans votre manière de transformer une vision lointaine en progression organisée.",
    "vos talents prennent davantage de valeur lorsque vous reconnaissez que votre expérience peut guider les autres.",
  ],

  dominantTalent: {
    titles: [
      "L’architecture du succès",
      "La direction stratégique",
      "La construction à long terme",
    ],

    texts: [
      "Vous possédez la capacité de structurer un objectif complexe en étapes réalistes et progressives.",
      "Votre talent caché réside dans votre aptitude à reconnaître ce qui doit être construit aujourd’hui pour produire un résultat beaucoup plus tard.",
      "Vous savez maintenir une direction stable lorsque les autres se laissent distraire par les difficultés immédiates.",
    ],

    activations: [
      "Utilisez ce talent dans la gestion, l’entrepreneuriat, la planification ou la transmission.",
      "Créez une feuille de route précise pour un objectif important.",
      "Partagez votre méthode avec une personne qui manque de structure.",
    ],
  },

  talents: [
    {
      title: "Planification",
      texts: [
        "Vous savez anticiper les étapes, les ressources et les obstacles.",
        "Votre sens de l’organisation peut sécuriser un projet ambitieux.",
      ],
      activations: [
        "Divisez votre objectif en étapes trimestrielles.",
        "Prévoyez une marge pour les imprévus.",
      ],
    },
    {
      title: "Autorité calme",
      texts: [
        "Votre sérieux peut inspirer confiance sans que vous ayez besoin de vous imposer.",
        "Vous pouvez devenir un repère dans les situations qui demandent responsabilité et maturité.",
      ],
      activations: [
        "Exprimez clairement les règles et les attentes.",
        "Utilisez votre autorité pour sécuriser plutôt que pour contrôler.",
      ],
    },
    {
      title: "Transmission d’expérience",
      texts: [
        "Votre parcours contient des enseignements pratiques qui peuvent être utiles aux autres.",
        "Vous savez distinguer les conseils réalistes des promesses sans fondement.",
      ],
      activations: [
        "Transformez votre expérience en guide, formation ou accompagnement.",
        "Expliquez autant les erreurs que les réussites.",
      ],
    },
    {
      title: "Gestion de l’effort",
      texts: [
        "Vous savez distribuer votre énergie sur une longue période.",
        "Votre endurance peut soutenir des projets que d’autres abandonnent trop rapidement.",
      ],
      activations: [
        "Créez un rythme réaliste plutôt qu’une charge excessive.",
        "Mesurez la progression afin d’éviter de minimiser vos résultats.",
      ],
    },
  ],

  favorableContext: [
    "Vos talents se révèlent dans les environnements structurés, exigeants et orientés vers le long terme.",
    "Les responsabilités importantes peuvent mettre en lumière une véritable capacité de direction.",
    "Un projet entrepreneurial, professionnel ou financier peut devenir particulièrement favorable.",
  ],

  innerBlock: [
    "Vous pourriez considérer vos talents comme de simples obligations plutôt que comme de véritables compétences.",
    "La peur de perdre le contrôle peut limiter les collaborations utiles.",
    "Une exigence excessive peut vous empêcher de transmettre une méthode encore perfectible.",
  ],

  conclusion: [
    "Votre talent caché consiste à construire des chemins solides vers des objectifs ambitieux. Cette année, votre expérience peut devenir une véritable forme de leadership.",
    "Vous possédez une capacité stratégique importante. Votre potentiel se révélera lorsque vous accepterez de partager votre méthode plutôt que de tout porter seul.",
    "Votre discipline peut devenir un héritage, une entreprise ou une transmission. Donnez à votre savoir-faire une forme visible.",
  ],

  revelationBase: 89,
};

/*
|--------------------------------------------------------------------------
| Verseau
|--------------------------------------------------------------------------
*/

const aquariusHiddenTalents: YearlyHiddenTalentsTexts = {
  introduction: [
    "cette année peut révéler des capacités d’innovation, de compréhension collective et de création de systèmes nouveaux.",
    "votre potentiel caché apparaît dans votre manière de voir les possibilités que les structures actuelles ne permettent pas encore.",
    "vos talents prennent davantage de force lorsque vos idées originales répondent à un besoin réel.",
  ],

  dominantTalent: {
    titles: [
      "La conception du futur",
      "L’intelligence des systèmes",
      "L’innovation utile",
    ],

    texts: [
      "Vous possédez la capacité d’imaginer une structure différente avant que le besoin de changement soit évident pour tous.",
      "Votre talent caché réside dans votre aptitude à comprendre comment plusieurs éléments interagissent dans un système.",
      "Vous savez remettre en question les méthodes établies et proposer une alternative plus moderne.",
    ],

    activations: [
      "Utilisez ce talent dans la technologie, la stratégie, la création ou l’organisation collective.",
      "Transformez votre idée en prototype, modèle ou expérience simple.",
      "Expliquez clairement le problème concret que votre innovation cherche à résoudre.",
    ],
  },

  talents: [
    {
      title: "Pensée systémique",
      texts: [
        "Vous comprenez comment une modification locale peut produire un effet plus large.",
        "Votre esprit relie naturellement les structures, les comportements et les conséquences.",
      ],
      activations: [
        "Dessinez ou écrivez les relations entre les différentes parties du problème.",
        "Cherchez le point d’intervention qui produira le plus grand effet.",
      ],
    },
    {
      title: "Innovation numérique",
      texts: [
        "Vous pouvez apprendre rapidement à utiliser de nouveaux outils ou technologies.",
        "Votre curiosité technique peut améliorer considérablement une méthode existante.",
      ],
      activations: [
        "Testez un outil susceptible d’automatiser une tâche répétitive.",
        "Créez une utilisation concrète avant d’accumuler de nouvelles connaissances.",
      ],
    },
    {
      title: "Animation de communauté",
      texts: [
        "Vous savez réunir des personnes autour d’une idée ou d’une cause commune.",
        "Votre vision collective peut créer un sentiment d’appartenance.",
      ],
      activations: [
        "Définissez clairement la valeur partagée par le groupe.",
        "Créez un espace où les contributions individuelles restent visibles.",
      ],
    },
    {
      title: "Recul objectif",
      texts: [
        "Vous pouvez observer une situation sans être entièrement absorbé par ses réactions émotionnelles.",
        "Votre détachement peut aider à trouver une solution plus rationnelle.",
      ],
      activations: [
        "Utilisez votre recul pour reformuler le problème.",
        "Réintégrez ensuite les besoins humains dans la solution.",
      ],
    },
  ],

  favorableContext: [
    "Vos talents se révèlent dans les environnements innovants, collectifs et technologiques.",
    "Les projets qui demandent une nouvelle structure ou une vision différente seront particulièrement favorables.",
    "Une communauté ou une collaboration originale peut accélérer la révélation de votre potentiel.",
  ],

  innerBlock: [
    "Vous pourriez abandonner une idée lorsqu’elle demande une mise en œuvre trop conventionnelle.",
    "Le besoin d’indépendance peut vous priver des ressources d’une collaboration.",
    "Une idée trop abstraite peut rester invisible si elle n’est pas traduite en bénéfice concret.",
  ],

  conclusion: [
    "Votre talent caché consiste à imaginer des structures qui n’existent pas encore. Cette année, votre potentiel se révélera lorsque vous transformerez votre vision en solution utilisable.",
    "Vous possédez une intelligence du futur et des systèmes. Votre réussite dépendra de votre capacité à rendre votre innovation accessible.",
    "Votre originalité peut devenir une véritable compétence. Donnez-lui un problème réel à résoudre et une forme concrète à tester.",
  ],

  revelationBase: 89,
};

/*
|--------------------------------------------------------------------------
| Poissons
|--------------------------------------------------------------------------
*/

const piscesHiddenTalents: YearlyHiddenTalentsTexts = {
  introduction: [
    "cette année peut révéler des capacités intuitives, artistiques et symboliques que vous utilisez souvent sans les nommer.",
    "votre potentiel caché apparaît dans votre manière de traduire les émotions, les images et les perceptions subtiles.",
    "vos talents prennent davantage de force lorsque votre imagination trouve une structure capable de l’accueillir.",
  ],

  dominantTalent: {
    titles: [
      "La traduction de l’invisible",
      "L’imagination intuitive",
      "La création émotionnelle",
    ],

    texts: [
      "Vous possédez la capacité de transformer une émotion, une ambiance ou une intuition en image, en récit ou en création.",
      "Votre talent caché réside dans votre aptitude à percevoir les dimensions symboliques d’une expérience.",
      "Vous savez ressentir ce qui touche profondément les autres et créer une expression capable de rejoindre cette sensibilité.",
    ],

    activations: [
      "Utilisez ce talent dans l’écriture, l’art, la musique, l’image ou l’accompagnement.",
      "Créez régulièrement sans attendre une inspiration parfaite.",
      "Donnez à vos intuitions une forme précise, même simple ou imparfaite.",
    ],
  },

  talents: [
    {
      title: "Écriture intuitive",
      texts: [
        "Vous pouvez exprimer des émotions complexes avec beaucoup de profondeur.",
        "Votre imagination vous permet de créer des récits, des images et des univers sensibles.",
      ],
      activations: [
        "Écrivez librement pendant quelques minutes sans corriger.",
        "Transformez ensuite la matière intuitive en texte structuré.",
      ],
    },
    {
      title: "Sens symbolique",
      texts: [
        "Vous reconnaissez facilement les images, les thèmes et les signes qui possèdent une portée émotionnelle.",
        "Votre esprit peut relier une expérience concrète à une signification plus profonde.",
      ],
      activations: [
        "Notez les symboles ou thèmes qui reviennent régulièrement.",
        "Utilisez-les dans une création plutôt que de chercher uniquement à les interpréter.",
      ],
    },
    {
      title: "Empathie créative",
      texts: [
        "Vous comprenez ce qui peut toucher ou apaiser une personne.",
        "Votre sensibilité vous permet de créer une expérience profondément humaine.",
      ],
      activations: [
        "Créez à partir d’une émotion réelle et précise.",
        "Maintenez une limite entre la compréhension de l’autre et l’absorption de sa douleur.",
      ],
    },
    {
      title: "Imagination visuelle",
      texts: [
        "Vous pouvez concevoir des ambiances, des scènes et des images avec beaucoup de richesse.",
        "Votre monde intérieur contient une matière artistique importante.",
      ],
      activations: [
        "Créez un tableau d’inspiration ou une série d’images autour d’un thème.",
        "Transformez une vision en réalisation concrète avant de passer à la suivante.",
      ],
    },
  ],

  favorableContext: [
    "Vos talents se révèlent dans les environnements créatifs, intuitifs et émotionnellement inspirants.",
    "Les projets artistiques, spirituels ou humains seront particulièrement favorables.",
    "Une période de calme ou de retrait peut permettre à une capacité importante d’émerger.",
  ],

  innerBlock: [
    "Vous pourriez considérer votre imagination comme trop irréaliste avant de lui avoir donné une forme.",
    "La peur du jugement peut vous pousser à garder une création dans votre monde intérieur.",
    "Le manque de structure peut disperser une inspiration pourtant très riche.",
  ],

  conclusion: [
    "Votre talent caché consiste à donner une forme sensible à ce qui ne peut pas toujours être expliqué. Cette année, votre imagination peut devenir une véritable œuvre ou compétence.",
    "Vous possédez une grande richesse intuitive. Votre potentiel se révélera lorsque vous protégerez votre sensibilité tout en créant avec régularité.",
    "Votre monde intérieur contient une matière précieuse. Donnez-lui un cadre, une forme et une place visible dans votre réalité.",
  ],

  revelationBase: 90,
};

/*
|--------------------------------------------------------------------------
| Sélection selon le signe
|--------------------------------------------------------------------------
*/

export function createYearlyHiddenTalentsTexts(
  zodiacSign: HoroscopeZodiacSign,
): YearlyHiddenTalentsTexts {
  const normalizedSign =
    String(zodiacSign)
      .trim()
      .toLowerCase();

  switch (normalizedSign) {
    case "bélier":
    case "belier":
    case "aries":
      return ariesHiddenTalents;

    case "taureau":
    case "taurus":
      return taurusHiddenTalents;

    case "gémeaux":
    case "gemeaux":
    case "gemini":
      return geminiHiddenTalents;

    case "cancer":
      return cancerHiddenTalents;

    case "lion":
    case "leo":
      return leoHiddenTalents;

    case "vierge":
    case "virgo":
      return virgoHiddenTalents;

    case "balance":
    case "libra":
      return libraHiddenTalents;

    case "scorpion":
    case "scorpio":
      return scorpioHiddenTalents;

    case "sagittaire":
    case "sagittarius":
      return sagittariusHiddenTalents;

    case "capricorne":
    case "capricorn":
      return capricornHiddenTalents;

    case "verseau":
    case "aquarius":
      return aquariusHiddenTalents;

    case "poissons":
    case "pisces":
      return piscesHiddenTalents;

    default:
      return scorpioHiddenTalents;
  }
}
