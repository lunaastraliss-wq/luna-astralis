import type {
  HoroscopeZodiacSign,
} from "../../HoroscopePdfTypes";

/*
|--------------------------------------------------------------------------
| Types temporaires
|--------------------------------------------------------------------------
|
| Nous les déplacerons ensuite dans :
| year/data/types.ts
|
*/

export type YearlyStrengthTextItem = {
  title: string;
  texts: string[];
  advice: string[];
};

export type YearlyStrengthsTexts = {
  introduction: string[];

  dominantStrength: {
    titles: string[];
    texts: string[];
    advice: string[];
  };

  strengths: YearlyStrengthTextItem[];

  opportunity: string[];
  vigilance: string[];
  conclusion: string[];

  potentialBase: number;
};

/*
|--------------------------------------------------------------------------
| Bélier
|--------------------------------------------------------------------------
*/

const ariesStrengths: YearlyStrengthsTexts = {
  introduction: [
    "cette année met en lumière votre capacité à initier le mouvement, à prendre position et à ouvrir une voie nouvelle lorsque les circonstances l’exigent.",
    "votre dynamique annuelle révèle un potentiel important d’action, de courage et de renouvellement. Vos meilleurs résultats viendront lorsque votre énergie sera dirigée vers une priorité claire.",
    "les énergies de votre année renforcent votre aptitude à avancer sans attendre que toutes les conditions soient parfaites. Votre audace peut devenir un puissant moteur de progression.",
  ],

  dominantStrength: {
    titles: [
      "Votre courage d’agir",
      "Votre capacité à ouvrir la voie",
      "Votre force d’initiative",
    ],

    texts: [
      "Votre principale force réside dans votre capacité à transformer rapidement une intention en mouvement. Lorsque vous savez clairement ce que vous voulez, vous pouvez dépasser les hésitations et créer une impulsion que les autres auront naturellement envie de suivre.",
      "Vous disposez cette année d’une énergie particulièrement favorable pour amorcer un changement, défendre une décision ou relancer un projet. Votre spontanéité devient constructive lorsqu’elle s’accompagne d’une direction précise.",
      "Votre courage vous aide à affronter les situations qui demandent une réponse franche. Cette qualité vous permettra de ne pas rester bloqué trop longtemps dans l’attente ou l’indécision.",
    ],

    advice: [
      "Choisissez une priorité majeure et utilisez votre énergie pour lui donner une véritable avance.",
      "Agissez avec audace, mais accordez-vous un court moment de réflexion avant les décisions irréversibles.",
      "Conservez votre élan tout en vérifiant que votre action sert réellement votre objectif principal.",
    ],
  },

  strengths: [
    {
      title: "Initiative",
      texts: [
        "Vous savez reconnaître le moment où une situation doit enfin commencer à bouger. Cette faculté vous permet de créer des occasions plutôt que d’attendre qu’elles apparaissent.",
        "Votre esprit d’initiative vous aide à sortir rapidement d’une période d’immobilité et à redonner une direction concrète à vos projets.",
      ],
      advice: [
        "Prenez la première petite décision dès que votre objectif devient suffisamment clair.",
        "Transformez vos idées en étapes courtes et immédiatement réalisables.",
      ],
    },
    {
      title: "Détermination",
      texts: [
        "Lorsque vous croyez réellement en une direction, vous êtes capable de mobiliser une grande quantité d’énergie pour la défendre et la faire progresser.",
        "Votre volonté devient particulièrement puissante lorsque vous cessez de disperser vos efforts entre plusieurs urgences.",
      ],
      advice: [
        "Réservez votre énergie aux objectifs qui auront encore de l’importance dans plusieurs mois.",
        "Évitez de confondre vitesse et progression : avancez vite seulement lorsque la direction est juste.",
      ],
    },
    {
      title: "Leadership",
      texts: [
        "Votre façon directe d’aborder les situations peut rassurer les personnes qui hésitent encore. Vous pouvez naturellement devenir un point de repère lorsqu’une décision doit être prise.",
        "Votre présence gagne en influence lorsque vous proposez une direction claire sans chercher à contrôler chaque détail.",
      ],
      advice: [
        "Montrez le chemin par vos actions avant de demander aux autres de vous suivre.",
        "Laissez une place réelle aux idées des personnes qui partagent votre objectif.",
      ],
    },
    {
      title: "Résilience",
      texts: [
        "Vous récupérez souvent plus rapidement que vous ne le pensez après un contretemps. Votre capacité à repartir constitue une force essentielle de cette année.",
        "Même lorsqu’une stratégie ne fonctionne pas, vous pouvez retrouver votre motivation en changeant d’approche plutôt qu’en abandonnant votre objectif.",
      ],
      advice: [
        "Traitez chaque obstacle comme une information utile pour améliorer votre prochaine tentative.",
        "Accordez-vous un temps de récupération avant de relancer votre énergie.",
      ],
    },
  ],

  opportunity: [
    "Une occasion importante peut apparaître lorsque vous acceptez de prendre l’initiative avant d’obtenir toutes les garanties.",
    "Votre meilleure ouverture viendra d’une décision courageuse, préparée avec suffisamment de réalisme pour durer.",
    "Un projet qui semblait immobile peut progresser rapidement dès que vous assumez clairement votre direction.",
  ],

  vigilance: [
    "Votre impatience pourrait vous pousser à accélérer une situation qui demande encore quelques ajustements.",
    "Évitez de transformer chaque résistance en confrontation. Certaines limites se dépassent mieux par la stratégie.",
    "Votre énergie perdra de son efficacité si vous cherchez à tout commencer en même temps.",
  ],

  conclusion: [
    "La combinaison de votre courage, de votre initiative et de votre capacité à rebondir constitue votre meilleur levier cette année. Lorsque votre énergie poursuit une direction claire, vous pouvez créer une progression rapide et durable.",
    "Votre force ne réside pas seulement dans votre rapidité d’action, mais dans votre capacité à redonner du mouvement aux situations qui semblaient bloquées. Utilisez cette qualité avec discernement.",
    "Cette année, votre réussite dépendra de votre aptitude à unir audace et constance. Votre premier mouvement ouvrira la voie, mais votre persévérance construira le résultat.",
  ],

  potentialBase: 84,
};

/*
|--------------------------------------------------------------------------
| Taureau
|--------------------------------------------------------------------------
*/

const taurusStrengths: YearlyStrengthsTexts = {
  introduction: [
    "cette année valorise votre capacité à construire lentement, solidement et avec une grande fidélité à vos priorités essentielles.",
    "votre dynamique annuelle met en lumière votre constance, votre sens pratique et votre aptitude à donner une forme durable à ce qui compte réellement pour vous.",
    "vos meilleures forces s’exprimeront à travers la stabilité, la patience et la capacité à protéger les projets qui méritent du temps.",
  ],

  dominantStrength: {
    titles: [
      "Votre constance",
      "Votre capacité à bâtir",
      "Votre stabilité intérieure",
    ],

    texts: [
      "Votre principale force réside dans votre aptitude à poursuivre un objectif même lorsque les résultats ne sont pas immédiatement visibles. Cette constance vous permet de construire des bases que les changements extérieurs auront plus de difficulté à fragiliser.",
      "Vous savez donner une structure concrète aux idées, aux relations et aux projets. Cette année, votre patience peut transformer une possibilité encore fragile en réalisation durable.",
      "Votre calme naturel vous aide à conserver une direction lorsque les autres se laissent distraire par l’urgence ou l’incertitude.",
    ],

    advice: [
      "Investissez votre énergie dans ce qui peut réellement grandir avec le temps.",
      "Continuez d’avancer régulièrement, même lorsque vos progrès semblent modestes.",
      "Conservez votre stabilité sans refuser les ajustements qui peuvent améliorer votre trajectoire.",
    ],
  },

  strengths: [
    {
      title: "Persévérance",
      texts: [
        "Vous êtes capable de rester engagé longtemps après que l’enthousiasme initial s’est dissipé. Cette endurance peut faire toute la différence.",
        "Votre patience vous permet de traverser les étapes moins visibles d’un projet sans perdre de vue sa valeur à long terme.",
      ],
      advice: [
        "Mesurez vos progrès sur plusieurs mois plutôt que sur quelques journées.",
        "Maintenez une routine simple autour de votre objectif principal.",
      ],
    },
    {
      title: "Sens pratique",
      texts: [
        "Vous repérez naturellement ce qui est réaliste, utile et applicable. Cette qualité vous protège contre les décisions séduisantes mais mal préparées.",
        "Votre jugement concret vous aide à transformer une idée abstraite en plan d’action compréhensible.",
      ],
      advice: [
        "Vérifiez toujours les ressources, le temps et les engagements nécessaires.",
        "Privilégiez les solutions simples qui peuvent être répétées durablement.",
      ],
    },
    {
      title: "Loyauté",
      texts: [
        "Votre fidélité renforce les relations et les collaborations qui reposent sur une confiance véritable.",
        "Vous savez offrir une présence stable aux personnes et aux projets qui ont prouvé leur valeur.",
      ],
      advice: [
        "Donnez votre loyauté là où elle est respectée et réciproque.",
        "N’entretenez pas une situation uniquement parce qu’elle existe depuis longtemps.",
      ],
    },
    {
      title: "Ancrage",
      texts: [
        "Vous avez la capacité de revenir à l’essentiel lorsque les circonstances deviennent confuses ou instables.",
        "Votre rapport concret à la réalité vous aide à ne pas perdre votre direction sous l’effet d’une émotion passagère.",
      ],
      advice: [
        "Revenez à vos besoins fondamentaux avant de prendre une décision importante.",
        "Créez des repères réguliers pour protéger votre équilibre.",
      ],
    },
  ],

  opportunity: [
    "Votre meilleure ouverture peut naître d’un projet qui demande du temps, de la patience et une progression constante.",
    "Une décision matérielle ou professionnelle bien préparée peut produire des bénéfices durables.",
    "Une relation ou une collaboration stable peut devenir un véritable point d’appui pour votre évolution.",
  ],

  vigilance: [
    "Votre besoin de stabilité pourrait vous retenir dans une situation qui a déjà cessé de vous faire progresser.",
    "Évitez de confondre persévérance et résistance automatique au changement.",
    "Un attachement excessif à une ancienne méthode pourrait ralentir une amélioration devenue nécessaire.",
  ],

  conclusion: [
    "Votre constance, votre réalisme et votre capacité à bâtir constituent une combinaison particulièrement précieuse. Cette année, vos meilleurs résultats viendront de ce que vous aurez accepté de construire avec patience.",
    "Vous disposez d’une force rare : celle de rendre durable ce qui n’était encore qu’une possibilité. Utilisez-la pour consolider les projets et les liens qui correspondent réellement à vos valeurs.",
    "Votre progression ne dépendra pas de la vitesse, mais de la solidité de vos choix. Chaque étape bien ancrée renforcera la suivante.",
  ],

  potentialBase: 82,
};

/*
|--------------------------------------------------------------------------
| Gémeaux
|--------------------------------------------------------------------------
*/

const geminiStrengths: YearlyStrengthsTexts = {
  introduction: [
    "cette année met en lumière votre intelligence d’adaptation, votre curiosité et votre capacité à créer des liens entre des idées qui semblaient séparées.",
    "votre dynamique annuelle favorise les échanges, les apprentissages et les changements de perspective capables d’ouvrir de nouvelles possibilités.",
    "vos forces s’exprimeront particulièrement lorsque vous utiliserez votre souplesse mentale pour comprendre rapidement une situation et ajuster votre stratégie.",
  ],

  dominantStrength: {
    titles: [
      "Votre intelligence d’adaptation",
      "Votre vivacité d’esprit",
      "Votre capacité à créer des connexions",
    ],

    texts: [
      "Votre principale force réside dans votre aptitude à comprendre rapidement les changements et à modifier votre approche sans perdre complètement votre direction.",
      "Votre esprit sait repérer plusieurs possibilités là où d’autres ne voient qu’une seule solution. Cette flexibilité vous permettra de débloquer certaines situations complexes.",
      "Votre capacité à relier les personnes, les informations et les idées peut devenir un avantage majeur dans vos projets et vos relations.",
    ],

    advice: [
      "Utilisez votre souplesse pour améliorer votre stratégie, sans abandonner trop rapidement votre objectif.",
      "Concentrez vos nombreuses idées autour d’un projet central.",
      "Prenez le temps de transformer les informations recueillies en décisions concrètes.",
    ],
  },

  strengths: [
    {
      title: "Communication",
      texts: [
        "Vous savez trouver les mots qui rendent une idée plus claire, plus accessible ou plus attrayante.",
        "Votre aisance dans les échanges peut faciliter une négociation, une rencontre ou une nouvelle collaboration.",
      ],
      advice: [
        "Exprimez clairement ce que vous souhaitez obtenir avant d’entrer dans les détails.",
        "Écoutez avec la même attention que celle que vous accordez à vos propres idées.",
      ],
    },
    {
      title: "Curiosité",
      texts: [
        "Votre envie de comprendre vous permet de découvrir rapidement de nouveaux outils, concepts ou possibilités.",
        "Votre curiosité entretient votre créativité et vous aide à sortir des solutions habituelles.",
      ],
      advice: [
        "Approfondissez les sujets qui peuvent réellement soutenir votre projet principal.",
        "Réservez un espace régulier à l’apprentissage sans vous disperser.",
      ],
    },
    {
      title: "Adaptabilité",
      texts: [
        "Vous pouvez changer de méthode lorsque les circonstances évoluent, sans considérer cet ajustement comme un échec.",
        "Votre souplesse vous permet de rester mobile dans les périodes où les plans initiaux doivent être révisés.",
      ],
      advice: [
        "Modifiez la méthode avant de remettre en question l’objectif.",
        "Conservez quelques repères fixes afin que votre flexibilité ne devienne pas de l’instabilité.",
      ],
    },
    {
      title: "Créativité mentale",
      texts: [
        "Vous trouvez naturellement des associations nouvelles entre différentes informations.",
        "Votre esprit peut imaginer plusieurs scénarios et repérer une solution qui n’était pas immédiatement visible.",
      ],
      advice: [
        "Notez vos meilleures idées avant qu’elles soient remplacées par les suivantes.",
        "Choisissez une idée prometteuse et donnez-lui une véritable période d’expérimentation.",
      ],
    },
  ],

  opportunity: [
    "Une conversation, une information ou une rencontre peut ouvrir une direction que vous n’aviez pas encore envisagée.",
    "Votre meilleure occasion peut apparaître grâce à votre réseau, à un apprentissage ou à une nouvelle manière de présenter votre projet.",
    "Une idée qui semblait secondaire peut devenir importante si vous lui donnez une structure concrète.",
  ],

  vigilance: [
    "La multiplication des idées pourrait réduire votre capacité à terminer ce que vous commencez.",
    "Évitez de changer de direction uniquement parce qu’une nouvelle possibilité semble momentanément plus stimulante.",
    "Une communication trop rapide pourrait créer un malentendu évitable.",
  ],

  conclusion: [
    "Votre intelligence, votre souplesse et votre talent pour communiquer forment une combinaison très porteuse. Votre réussite viendra de votre capacité à concentrer ces qualités autour d’une direction précise.",
    "Cette année vous offre de nombreuses possibilités, mais votre véritable force apparaîtra lorsque vous choisirez lesquelles méritent d’être développées.",
    "Votre esprit ouvre les portes; votre constance décidera lesquelles mèneront réellement quelque part.",
  ],

  potentialBase: 83,
};

/*
|--------------------------------------------------------------------------
| Cancer
|--------------------------------------------------------------------------
*/

const cancerStrengths: YearlyStrengthsTexts = {
  introduction: [
    "cette année révèle la puissance de votre sensibilité, de votre intuition et de votre capacité à protéger ce qui possède une véritable valeur affective.",
    "votre dynamique annuelle met en lumière votre intelligence émotionnelle et votre aptitude à comprendre ce qui se joue derrière les apparences.",
    "vos forces les plus importantes s’exprimeront à travers votre profondeur affective, votre instinct et votre capacité à créer un sentiment de sécurité.",
  ],

  dominantStrength: {
    titles: [
      "Votre intelligence émotionnelle",
      "Votre intuition protectrice",
      "Votre sensibilité profonde",
    ],

    texts: [
      "Votre principale force réside dans votre capacité à percevoir les besoins, les tensions et les changements émotionnels avant qu’ils soient clairement exprimés.",
      "Votre intuition vous aide à reconnaître les environnements, les relations et les décisions qui peuvent réellement vous apporter un sentiment de sécurité.",
      "Votre sensibilité vous permet de comprendre la dimension humaine d’une situation et de répondre avec davantage de justesse.",
    ],

    advice: [
      "Écoutez vos perceptions, puis confirmez-les à l’aide d’éléments concrets.",
      "Utilisez votre sensibilité comme un outil de compréhension, et non comme une obligation de tout porter.",
      "Protégez votre énergie en distinguant clairement ce qui vous appartient de ce qui appartient aux autres.",
    ],
  },

  strengths: [
    {
      title: "Intuition",
      texts: [
        "Vous percevez souvent les changements subtils avant qu’ils deviennent visibles.",
        "Votre ressenti peut vous orienter vers les personnes et les décisions qui correspondent réellement à vos besoins.",
      ],
      advice: [
        "Notez les impressions qui reviennent plusieurs fois avant de les écarter.",
        "Vérifiez votre intuition sans chercher à la rationaliser trop rapidement.",
      ],
    },
    {
      title: "Empathie",
      texts: [
        "Vous comprenez naturellement ce que les autres traversent, même lorsque leurs émotions sont difficiles à exprimer.",
        "Votre présence peut créer un espace sécurisant dans lequel une relation retrouve de la confiance.",
      ],
      advice: [
        "Aidez sans absorber entièrement la responsabilité émotionnelle de l’autre.",
        "Conservez des limites claires afin que votre générosité reste équilibrée.",
      ],
    },
    {
      title: "Loyauté affective",
      texts: [
        "Vous savez nourrir les liens importants par une présence constante et sincère.",
        "Votre attachement profond peut renforcer une relation lorsqu’il s’accompagne de confiance et de réciprocité.",
      ],
      advice: [
        "Investissez-vous dans les relations qui reconnaissent votre valeur.",
        "Ne maintenez pas un lien uniquement par peur de perdre ce qui était autrefois important.",
      ],
    },
    {
      title: "Capacité de protection",
      texts: [
        "Vous savez créer des repères capables de rassurer et de stabiliser votre environnement.",
        "Votre instinct protecteur vous aide à préserver les projets et les personnes qui occupent une place essentielle.",
      ],
      advice: [
        "Protégez ce qui compte sans empêcher son évolution.",
        "Incluez vos propres besoins dans les responsabilités que vous assumez.",
      ],
    },
  ],

  opportunity: [
    "Une relation sincère ou un projet proche de vos valeurs peut devenir une source importante de stabilité.",
    "Votre meilleure ouverture viendra d’une décision qui respecte autant votre sécurité émotionnelle que votre besoin d’évolution.",
    "Votre intuition peut vous aider à reconnaître une occasion qui ne semble pas encore évidente pour les autres.",
  ],

  vigilance: [
    "Votre besoin de protéger pourrait vous amener à conserver une situation devenue trop lourde.",
    "Évitez de prendre personnellement les émotions ou les réactions qui appartiennent aux autres.",
    "Une peur ancienne pourrait vous faire sous-estimer une possibilité pourtant constructive.",
  ],

  conclusion: [
    "Votre intuition, votre empathie et votre capacité à créer de la sécurité constituent une combinaison profondément porteuse. Cette année, elles vous aideront à faire des choix plus fidèles à vos besoins essentiels.",
    "Votre sensibilité n’est pas une faiblesse : elle devient une force dès qu’elle s’accompagne de limites claires et d’une confiance suffisante en votre propre ressenti.",
    "Votre meilleure progression viendra de votre capacité à protéger votre monde intérieur tout en restant ouverte aux nouvelles expériences.",
  ],

  potentialBase: 85,
};

/*
|--------------------------------------------------------------------------
| Lion
|--------------------------------------------------------------------------
*/

const leoStrengths: YearlyStrengthsTexts = {
  introduction: [
    "cette année renforce votre capacité à rayonner, à inspirer et à donner une expression visible à ce qui vous tient réellement à cœur.",
    "votre dynamique annuelle met en lumière votre créativité, votre confiance et votre aptitude à mobiliser les autres autour d’une vision forte.",
    "vos forces s’exprimeront lorsque vous accepterez d’occuper pleinement votre place sans diminuer votre lumière pour rassurer votre entourage.",
  ],

  dominantStrength: {
    titles: [
      "Votre pouvoir de rayonnement",
      "Votre confiance créatrice",
      "Votre capacité à inspirer",
    ],

    texts: [
      "Votre principale force réside dans votre capacité à donner de l’élan aux projets, aux relations et aux personnes qui vous entourent.",
      "Votre présence peut rendre une idée plus vivante et une direction plus inspirante. Cette année, votre confiance aura un effet direct sur votre capacité à obtenir du soutien.",
      "Lorsque vous exprimez vos intentions avec authenticité, vous créez naturellement une énergie capable de rassembler.",
    ],

    advice: [
      "Présentez vos projets avec assurance, mais laissez les résultats confirmer progressivement leur valeur.",
      "Utilisez votre visibilité pour mettre en valeur votre travail plutôt que pour rechercher uniquement l’approbation.",
      "Faites rayonner votre créativité à travers une réalisation concrète.",
    ],
  },

  strengths: [
    {
      title: "Charisme",
      texts: [
        "Votre présence peut attirer naturellement l’attention et donner davantage d’impact à votre message.",
        "Vous avez la capacité de créer une impression durable lorsque vous assumez pleinement votre identité.",
      ],
      advice: [
        "Utilisez votre influence pour soutenir une direction claire et constructive.",
        "Restez authentique plutôt que de chercher à produire une image parfaite.",
      ],
    },
    {
      title: "Créativité",
      texts: [
        "Vous savez donner une forme personnelle, vivante et expressive à vos idées.",
        "Votre créativité peut transformer un projet ordinaire en expérience beaucoup plus marquante.",
      ],
      advice: [
        "Donnez une place régulière à la création, même avant d’obtenir un résultat final.",
        "Choisissez un projet dans lequel votre signature personnelle peut réellement apparaître.",
      ],
    },
    {
      title: "Leadership chaleureux",
      texts: [
        "Vous savez encourager les autres et leur donner envie de croire davantage en leurs capacités.",
        "Votre leadership devient puissant lorsque votre confiance inclut aussi la reconnaissance des qualités de votre entourage.",
      ],
      advice: [
        "Valorisez les contributions des autres tout en conservant une direction claire.",
        "Montrez votre confiance par une présence stable, pas seulement par de grandes déclarations.",
      ],
    },
    {
      title: "Courage du cœur",
      texts: [
        "Vous pouvez défendre avec beaucoup de force les personnes, les valeurs et les projets auxquels vous êtes attaché.",
        "Votre générosité vous aide à vous engager pleinement lorsque votre cœur reconnaît une direction authentique.",
      ],
      advice: [
        "Investissez votre énergie dans ce qui mérite réellement votre loyauté.",
        "Ne confondez pas générosité et obligation de toujours être fort pour tout le monde.",
      ],
    },
  ],

  opportunity: [
    "Une occasion de visibilité, de reconnaissance ou de création peut vous permettre de franchir une étape importante.",
    "Votre meilleure ouverture apparaîtra lorsque vous accepterez de présenter clairement votre valeur.",
    "Un projet personnel peut recevoir davantage de soutien si vous lui donnez une identité forte.",
  ],

  vigilance: [
    "Le besoin d’être reconnu pourrait vous rendre trop sensible à une critique ou à un manque de réaction.",
    "Évitez de mesurer la valeur d’un projet uniquement à l’attention immédiate qu’il reçoit.",
    "Votre fierté pourrait retarder une conversation pourtant nécessaire.",
  ],

  conclusion: [
    "Votre charisme, votre créativité et votre courage composent une combinaison capable de donner beaucoup d’ampleur à votre année. Votre lumière sera particulièrement efficace lorsqu’elle éclairera une réalisation concrète.",
    "Cette année vous invite à occuper votre place avec confiance, sans dépendre entièrement du regard extérieur pour reconnaître votre valeur.",
    "Votre capacité à inspirer deviendra votre plus grand atout lorsque votre rayonnement servira une intention sincère et durable.",
  ],

  potentialBase: 86,
};

/*
|--------------------------------------------------------------------------
| Vierge
|--------------------------------------------------------------------------
*/

const virgoStrengths: YearlyStrengthsTexts = {
  introduction: [
    "cette année met en lumière votre intelligence pratique, votre sens de l’analyse et votre capacité à améliorer progressivement ce qui mérite de l’être.",
    "votre dynamique annuelle valorise votre précision, votre organisation et votre aptitude à transformer une situation complexe en étapes compréhensibles.",
    "vos forces s’exprimeront particulièrement lorsque vous utiliserez votre discernement pour simplifier plutôt que pour rechercher une perfection impossible.",
  ],

  dominantStrength: {
    titles: [
      "Votre discernement",
      "Votre intelligence pratique",
      "Votre capacité d’amélioration",
    ],

    texts: [
      "Votre principale force réside dans votre aptitude à observer les détails importants et à comprendre ce qui doit être ajusté pour améliorer un résultat.",
      "Vous savez transformer un objectif général en étapes concrètes, mesurables et réalistes.",
      "Votre lucidité vous permet d’identifier les faiblesses d’une méthode avant qu’elles produisent des conséquences plus importantes.",
    ],

    advice: [
      "Utilisez votre analyse pour construire une solution, pas seulement pour repérer les problèmes.",
      "Choisissez les améliorations qui auront le plus d’effet plutôt que de corriger chaque détail.",
      "Créez une méthode suffisamment simple pour pouvoir la maintenir dans le temps.",
    ],
  },

  strengths: [
    {
      title: "Organisation",
      texts: [
        "Vous savez créer une structure qui rend les responsabilités plus claires et plus faciles à gérer.",
        "Votre sens de l’ordre peut réduire considérablement la charge mentale liée à un projet.",
      ],
      advice: [
        "Préparez vos semaines autour de quelques priorités clairement définies.",
        "Éliminez les étapes qui compliquent votre méthode sans améliorer le résultat.",
      ],
    },
    {
      title: "Analyse",
      texts: [
        "Vous repérez rapidement les incohérences, les risques et les éléments qui demandent une vérification supplémentaire.",
        "Votre capacité d’analyse vous aide à prendre des décisions mieux informées.",
      ],
      advice: [
        "Fixez une limite au temps consacré à l’évaluation avant de passer à l’action.",
        "Distinguez les informations essentielles de celles qui ne changeront pas réellement votre choix.",
      ],
    },
    {
      title: "Fiabilité",
      texts: [
        "Votre sérieux inspire confiance aux personnes qui savent pouvoir compter sur votre parole et votre travail.",
        "Vous savez maintenir un niveau de qualité stable même lorsque l’enthousiasme initial diminue.",
      ],
      advice: [
        "Réservez votre engagement aux responsabilités que vous pouvez réellement assumer.",
        "N’acceptez pas une charge supplémentaire uniquement parce que vous savez mieux l’organiser que les autres.",
      ],
    },
    {
      title: "Capacité de progression",
      texts: [
        "Vous comprenez que de petites améliorations répétées peuvent produire de grands changements.",
        "Votre attention aux détails vous permet d’affiner progressivement vos compétences et vos projets.",
      ],
      advice: [
        "Mesurez vos progrès afin de reconnaître ce qui fonctionne déjà.",
        "Cherchez l’amélioration durable plutôt que la perfection immédiate.",
      ],
    },
  ],

  opportunity: [
    "Une amélioration méthodique peut transformer un projet existant en véritable réussite.",
    "Votre meilleure ouverture viendra d’une compétence, d’un service ou d’une organisation que vous savez rendre plus efficace.",
    "Une situation confuse peut devenir une occasion dès que vous lui donnez une structure claire.",
  ],

  vigilance: [
    "Votre exigence pourrait vous empêcher de reconnaître qu’un résultat est déjà suffisamment bon pour avancer.",
    "Évitez de consacrer trop d’énergie aux détails qui ne modifieront pas l’issue générale.",
    "La peur de commettre une erreur pourrait retarder une décision nécessaire.",
  ],

  conclusion: [
    "Votre discernement, votre organisation et votre capacité d’amélioration forment une combinaison extrêmement efficace. Cette année, votre force viendra de votre aptitude à rendre les choses plus simples, plus claires et plus solides.",
    "Votre réussite se construira par une succession d’ajustements intelligents plutôt que par un changement spectaculaire.",
    "Vous possédez la capacité de transformer le potentiel en résultat concret. Accordez autant de valeur à vos progrès qu’aux éléments qui restent à améliorer.",
  ],

  potentialBase: 84,
};

/*
|--------------------------------------------------------------------------
| Balance
|--------------------------------------------------------------------------
*/

const libraStrengths: YearlyStrengthsTexts = {
  introduction: [
    "cette année révèle votre capacité à créer des ponts, à comprendre plusieurs points de vue et à rechercher un équilibre réellement constructif.",
    "votre dynamique annuelle met en lumière votre intelligence relationnelle, votre sens de la justice et votre talent pour améliorer la qualité des échanges.",
    "vos forces s’exprimeront particulièrement lorsque vous utiliserez votre diplomatie sans renoncer à exprimer clairement vos propres besoins.",
  ],

  dominantStrength: {
    titles: [
      "Votre intelligence relationnelle",
      "Votre sens de l’équilibre",
      "Votre diplomatie naturelle",
    ],

    texts: [
      "Votre principale force réside dans votre aptitude à comprendre les différentes dimensions d’une relation ou d’une décision.",
      "Vous savez souvent trouver une formulation, un compromis ou une nouvelle perspective capable de rétablir un dialogue.",
      "Votre sens de l’équité vous aide à reconnaître les solutions qui peuvent respecter plusieurs besoins sans sacrifier complètement les vôtres.",
    ],

    advice: [
      "Utilisez votre diplomatie pour clarifier la situation, pas pour repousser indéfiniment votre décision.",
      "Cherchez l’équilibre sans diminuer l’importance de vos propres besoins.",
      "Exprimez votre position avant de tenter de créer un compromis.",
    ],
  },

  strengths: [
    {
      title: "Diplomatie",
      texts: [
        "Vous savez aborder les sujets sensibles avec davantage de tact et de nuance.",
        "Votre manière de communiquer peut réduire les tensions et rendre une solution plus acceptable.",
      ],
      advice: [
        "Nommez clairement le problème avant de chercher à l’adoucir.",
        "Préservez votre tact sans rendre votre message ambigu.",
      ],
    },
    {
      title: "Sens de la justice",
      texts: [
        "Vous percevez rapidement les déséquilibres dans les relations, les responsabilités et les échanges.",
        "Votre besoin d’équité peut vous aider à établir des règles plus saines.",
      ],
      advice: [
        "Incluez vos propres besoins dans l’équilibre que vous cherchez à créer.",
        "Ne prenez pas la responsabilité de corriger seul chaque injustice.",
      ],
    },
    {
      title: "Esthétique",
      texts: [
        "Vous savez reconnaître ce qui rend un environnement, une présentation ou une expérience plus harmonieuse.",
        "Votre sens esthétique peut donner davantage d’impact et de cohérence à vos projets.",
      ],
      advice: [
        "Utilisez votre sens du beau pour renforcer le message et non pour retarder sa réalisation.",
        "Créez une atmosphère qui soutient réellement votre objectif.",
      ],
    },
    {
      title: "Coopération",
      texts: [
        "Vous savez créer des conditions favorables à une collaboration équilibrée.",
        "Votre capacité à reconnaître les qualités complémentaires peut renforcer un partenariat.",
      ],
      advice: [
        "Choisissez des collaborations où les responsabilités sont clairement partagées.",
        "N’acceptez pas un compromis qui repose uniquement sur vos propres concessions.",
      ],
    },
  ],

  opportunity: [
    "Une relation, une alliance ou une collaboration peut jouer un rôle important dans votre progression.",
    "Votre meilleure ouverture peut apparaître à travers une négociation menée avec clarté et respect.",
    "Un projet gagnera en valeur lorsque vous réunirez des compétences complémentaires.",
  ],

  vigilance: [
    "La peur de déplaire pourrait vous amener à retarder une décision pourtant nécessaire.",
    "Évitez de rechercher un accord parfait lorsqu’une position claire est devenue indispensable.",
    "Votre désir d’harmonie ne doit pas vous obliger à minimiser une tension réelle.",
  ],

  conclusion: [
    "Votre diplomatie, votre sens de l’équité et votre intelligence relationnelle constituent une combinaison très puissante. Cette année, elles vous permettront de créer des alliances plus justes et plus porteuses.",
    "Votre équilibre ne viendra pas de l’absence de désaccord, mais de votre capacité à rester fidèle à vos besoins tout en respectant ceux des autres.",
    "Votre talent pour créer des ponts deviendra un véritable levier de réussite dès que votre propre position sera clairement définie.",
  ],

  potentialBase: 83,
};

/*
|--------------------------------------------------------------------------
| Scorpion
|--------------------------------------------------------------------------
*/

const scorpioStrengths: YearlyStrengthsTexts = {
  introduction: [
    "cette année révèle votre capacité exceptionnelle à comprendre ce qui se cache derrière les apparences et à transformer les périodes complexes en nouvelles sources de pouvoir personnel.",
    "votre dynamique annuelle met en lumière votre intensité, votre intuition et votre aptitude à reconstruire une situation sur des bases plus authentiques.",
    "vos forces les plus puissantes s’exprimeront lorsque vous accepterez de laisser évoluer ce qui ne correspond plus à la personne que vous devenez.",
  ],

  dominantStrength: {
    titles: [
      "Votre pouvoir de transformation",
      "Votre lucidité profonde",
      "Votre force de régénération",
    ],

    texts: [
      "Votre principale force réside dans votre capacité à traverser les zones d’incertitude sans vous contenter d’explications superficielles. Vous cherchez naturellement à comprendre les véritables causes d’une situation.",
      "Vous disposez d’une grande capacité de régénération. Même après une période exigeante, vous pouvez reconstruire votre direction avec davantage de clarté et de solidité.",
      "Votre intuition vous aide à reconnaître les motivations, les risques et les changements avant qu’ils soient ouvertement visibles.",
    ],

    advice: [
      "Utilisez votre lucidité pour transformer la situation, pas pour entretenir la méfiance.",
      "Laissez partir ce qui a terminé son rôle afin de libérer votre énergie.",
      "Concentrez votre intensité sur une transformation réellement importante.",
    ],
  },

  strengths: [
    {
      title: "Intuition",
      texts: [
        "Vous percevez souvent les intentions, les tensions et les changements invisibles pour les autres.",
        "Votre instinct vous aide à reconnaître les situations qui demandent davantage de prudence ou de profondeur.",
      ],
      advice: [
        "Écoutez les impressions récurrentes, puis cherchez les faits qui peuvent les confirmer.",
        "Ne confondez pas intuition et peur lorsque votre sécurité émotionnelle est fortement sollicitée.",
      ],
    },
    {
      title: "Détermination",
      texts: [
        "Lorsque vous vous engagez profondément, vous pouvez mobiliser une volonté remarquable.",
        "Votre concentration vous permet de poursuivre un objectif malgré les obstacles ou les périodes de silence.",
      ],
      advice: [
        "Dirigez votre intensité vers une priorité qui mérite réellement votre investissement.",
        "Évitez de poursuivre une bataille simplement parce que vous refusez de céder.",
      ],
    },
    {
      title: "Résilience",
      texts: [
        "Vous possédez une capacité rare à vous reconstruire après une rupture, une perte ou une transformation majeure.",
        "Les périodes difficiles peuvent réveiller en vous des ressources que vous n’aviez pas encore pleinement utilisées.",
      ],
      advice: [
        "Reconnaissez la force acquise sans rester attaché à la douleur qui l’a révélée.",
        "Accordez-vous le droit de recommencer différemment.",
      ],
    },
    {
      title: "Profondeur",
      texts: [
        "Vous cherchez à comprendre les véritables enjeux plutôt qu’à vous satisfaire d’une réponse rapide.",
        "Votre profondeur vous permet de créer des relations, des projets et des décisions beaucoup plus authentiques.",
      ],
      advice: [
        "Utilisez votre profondeur là où elle apporte une réelle compréhension.",
        "Acceptez que certaines situations simples n’aient pas besoin d’être analysées davantage.",
      ],
    },
  ],

  opportunity: [
    "Une transformation importante peut devenir l’ouverture qui vous permettra de retrouver davantage de pouvoir sur votre direction.",
    "Votre meilleure occasion apparaîtra lorsque vous accepterez de fermer définitivement une ancienne étape.",
    "Une prise de conscience profonde peut modifier favorablement votre rapport à une relation, un projet ou une peur.",
  ],

  vigilance: [
    "Votre besoin de contrôle pourrait ralentir un changement pourtant devenu nécessaire.",
    "Évitez de laisser une ancienne blessure déterminer automatiquement votre lecture du présent.",
    "Votre intensité peut devenir épuisante si elle reste concentrée sur une situation que vous ne pouvez pas modifier.",
  ],

  conclusion: [
    "Votre intuition, votre résilience et votre puissance de transformation constituent une combinaison exceptionnelle. Cette année, elles peuvent vous aider à reprendre votre pouvoir de choix et à reconstruire votre direction sur des bases plus authentiques.",
    "Votre plus grande force est votre capacité à renaître avec davantage de lucidité. Utilisez cette faculté pour créer un avenir différent, et non pour répéter indéfiniment les combats du passé.",
    "Cette année vous invite à transformer votre intensité en clarté, votre lucidité en décision et votre profondeur en évolution réelle.",
  ],

  potentialBase: 89,
};

/*
|--------------------------------------------------------------------------
| Sagittaire
|--------------------------------------------------------------------------
*/

const sagittariusStrengths: YearlyStrengthsTexts = {
  introduction: [
    "cette année met en lumière votre capacité à élargir votre vision, à retrouver du sens et à ouvrir de nouvelles possibilités autour de vous.",
    "votre dynamique annuelle favorise l’exploration, la confiance et les projets qui vous permettent de dépasser vos limites habituelles.",
    "vos forces s’exprimeront particulièrement lorsque votre besoin de liberté sera relié à une direction suffisamment claire pour produire des résultats.",
  ],

  dominantStrength: {
    titles: [
      "Votre vision expansive",
      "Votre confiance en l’avenir",
      "Votre capacité à ouvrir les horizons",
    ],

    texts: [
      "Votre principale force réside dans votre aptitude à voir plus loin que les difficultés immédiates et à reconnaître les possibilités de croissance.",
      "Vous savez redonner du sens à une situation et retrouver une direction lorsque l’enthousiasme semblait diminuer.",
      "Votre énergie encourage naturellement l’exploration, l’apprentissage et le dépassement des anciennes limites.",
    ],

    advice: [
      "Transformez votre vision en plan concret avant de vous engager dans plusieurs directions.",
      "Voyez grand, mais vérifiez les ressources nécessaires à chaque étape.",
      "Choisissez une aventure qui peut réellement enrichir votre parcours à long terme.",
    ],
  },

  strengths: [
    {
      title: "Optimisme",
      texts: [
        "Vous savez reconnaître une possibilité même lorsque les circonstances semblent imparfaites.",
        "Votre confiance peut redonner de l’élan à un projet ou à une personne découragée.",
      ],
      advice: [
        "Utilisez votre optimisme pour agir, pas pour minimiser les risques.",
        "Associez chaque vision positive à une première étape réaliste.",
      ],
    },
    {
      title: "Ouverture",
      texts: [
        "Vous êtes naturellement attiré par les idées, les cultures et les expériences capables d’élargir votre compréhension.",
        "Votre ouverture vous aide à sortir rapidement d’une vision trop étroite.",
      ],
      advice: [
        "Explorez ce qui peut enrichir votre direction principale.",
        "Ne changez pas de voie uniquement pour éviter une étape exigeante.",
      ],
    },
    {
      title: "Transmission",
      texts: [
        "Vous savez partager une idée avec enthousiasme et donner envie aux autres de découvrir davantage.",
        "Votre expérience peut devenir utile lorsqu’elle est transmise avec simplicité et sincérité.",
      ],
      advice: [
        "Partagez ce que vous avez réellement expérimenté plutôt que ce que vous souhaitez seulement croire.",
        "Adaptez votre message aux besoins de la personne qui vous écoute.",
      ],
    },
    {
      title: "Courage d’explorer",
      texts: [
        "Vous acceptez plus facilement que plusieurs réponses apparaissent seulement après avoir commencé le chemin.",
        "Votre goût de l’exploration vous aide à dépasser les limites qui étaient devenues trop étroites.",
      ],
      advice: [
        "Préparez suffisamment votre départ sans attendre une certitude impossible.",
        "Conservez une base stable pendant que vous explorez une nouvelle direction.",
      ],
    },
  ],

  opportunity: [
    "Une formation, un voyage, une rencontre ou une nouvelle vision peut élargir considérablement votre parcours.",
    "Votre meilleure ouverture viendra d’une occasion qui vous oblige à dépasser vos habitudes.",
    "Un projet ambitieux peut progresser si vous lui donnez une structure réaliste.",
  ],

  vigilance: [
    "Votre enthousiasme pourrait vous pousser à promettre plus que ce que votre temps permet réellement.",
    "Évitez de quitter une direction uniquement parce que la nouveauté semble plus stimulante.",
    "Votre optimisme doit rester accompagné d’une vérification concrète des risques.",
  ],

  conclusion: [
    "Votre vision, votre optimisme et votre courage d’explorer forment une combinaison particulièrement porteuse. Cette année, votre réussite viendra de votre capacité à donner une structure solide à vos grandes aspirations.",
    "Vous savez ouvrir les horizons; votre véritable défi sera de choisir celui que vous souhaitez réellement parcourir jusqu’au bout.",
    "Votre confiance en l’avenir devient une force concrète lorsqu’elle s’accompagne d’engagement, de préparation et de constance.",
  ],

  potentialBase: 86,
};

/*
|--------------------------------------------------------------------------
| Capricorne
|--------------------------------------------------------------------------
*/

const capricornStrengths: YearlyStrengthsTexts = {
  introduction: [
    "cette année met en lumière votre discipline, votre endurance et votre capacité à construire une progression solide à partir d’objectifs clairement définis.",
    "votre dynamique annuelle valorise votre sens des responsabilités, votre ambition et votre aptitude à transformer les efforts répétés en résultats durables.",
    "vos forces s’exprimeront particulièrement lorsque vous accepterez d’avancer étape par étape sans sous-estimer la valeur du chemin déjà parcouru.",
  ],

  dominantStrength: {
    titles: [
      "Votre endurance",
      "Votre ambition structurée",
      "Votre capacité de réalisation",
    ],

    texts: [
      "Votre principale force réside dans votre aptitude à poursuivre un objectif à long terme malgré les étapes exigeantes ou les résultats différés.",
      "Vous savez organiser vos efforts autour d’une direction réaliste et construire progressivement une position plus solide.",
      "Votre sens des responsabilités vous permet de maintenir votre cap lorsque les circonstances demandent de la patience et de la maturité.",
    ],

    advice: [
      "Définissez une progression mesurable et reconnaissez chaque étape franchie.",
      "Investissez votre énergie dans les objectifs qui peuvent réellement renforcer votre avenir.",
      "Conservez votre ambition tout en laissant une place suffisante à votre équilibre personnel.",
    ],
  },

  strengths: [
    {
      title: "Discipline",
      texts: [
        "Vous savez maintenir une routine utile même lorsque la motivation varie.",
        "Votre discipline transforme progressivement les intentions en résultats visibles.",
      ],
      advice: [
        "Créez une structure réaliste que vous pouvez maintenir pendant plusieurs mois.",
        "Réduisez la charge plutôt que d’abandonner entièrement votre rythme.",
      ],
    },
    {
      title: "Responsabilité",
      texts: [
        "Vous prenez vos engagements au sérieux et cherchez naturellement à produire un résultat fiable.",
        "Votre sens des responsabilités renforce la confiance que les autres placent en vous.",
      ],
      advice: [
        "Assumez ce qui vous appartient sans porter automatiquement les responsabilités des autres.",
        "Vérifiez que chaque engagement sert encore vos priorités actuelles.",
      ],
    },
    {
      title: "Patience stratégique",
      texts: [
        "Vous comprenez que certaines réussites exigent plusieurs étapes invisibles avant de devenir évidentes.",
        "Votre patience vous permet d’attendre le bon moment sans perdre complètement votre direction.",
      ],
      advice: [
        "Utilisez les périodes lentes pour préparer la prochaine étape.",
        "Ne confondez pas patience et immobilité : conservez une action régulière.",
      ],
    },
    {
      title: "Ambition",
      texts: [
        "Vous êtes capable de viser une position plus élevée lorsque votre objectif possède une valeur réelle.",
        "Votre ambition vous encourage à développer les compétences nécessaires plutôt qu’à compter uniquement sur la chance.",
      ],
      advice: [
        "Choisissez un objectif qui mérite réellement plusieurs années d’investissement.",
        "Mesurez votre réussite selon votre progression, pas seulement selon la comparaison.",
      ],
    },
  ],

  opportunity: [
    "Une responsabilité plus importante peut devenir un véritable levier de progression si ses conditions sont clairement définies.",
    "Votre meilleure ouverture viendra d’un projet à long terme capable de renforcer votre stabilité.",
    "Une reconnaissance professionnelle ou personnelle peut apparaître grâce à la constance de vos efforts.",
  ],

  vigilance: [
    "Votre exigence pourrait vous empêcher de reconnaître vos progrès et d’apprécier les résultats déjà obtenus.",
    "Évitez de mesurer votre valeur uniquement à votre productivité.",
    "Une charge excessive pourrait réduire l’efficacité que vous cherchez justement à maintenir.",
  ],

  conclusion: [
    "Votre discipline, votre patience et votre ambition forment une combinaison extrêmement solide. Cette année, vous pouvez construire une avancée durable à condition de respecter votre énergie autant que vos responsabilités.",
    "Votre force ne réside pas dans la précipitation, mais dans votre capacité à continuer lorsque les autres abandonnent.",
    "Chaque décision structurée peut renforcer votre avenir. Accordez toutefois à votre bien-être une place aussi réelle qu’à vos objectifs.",
  ],

  potentialBase: 87,
};

/*
|--------------------------------------------------------------------------
| Verseau
|--------------------------------------------------------------------------
*/

const aquariusStrengths: YearlyStrengthsTexts = {
  introduction: [
    "cette année révèle votre indépendance d’esprit, votre créativité et votre capacité à imaginer des solutions différentes de celles qui existent déjà.",
    "votre dynamique annuelle met en lumière votre vision, votre originalité et votre aptitude à remettre en question les limites devenues inutiles.",
    "vos forces s’exprimeront particulièrement lorsque vos idées innovantes seront reliées à une application concrète et compréhensible.",
  ],

  dominantStrength: {
    titles: [
      "Votre originalité",
      "Votre vision du changement",
      "Votre indépendance d’esprit",
    ],

    texts: [
      "Votre principale force réside dans votre aptitude à observer une situation depuis un angle différent et à imaginer des possibilités encore peu explorées.",
      "Vous savez reconnaître les règles, les méthodes ou les habitudes qui ne correspondent plus à la réalité actuelle.",
      "Votre indépendance vous aide à conserver une pensée personnelle même lorsque l’environnement exerce une pression importante.",
    ],

    advice: [
      "Transformez votre idée originale en solution suffisamment simple pour être utilisée.",
      "Expliquez clairement la valeur pratique du changement que vous proposez.",
      "Préservez votre liberté sans vous isoler des collaborations capables d’enrichir votre projet.",
    ],
  },

  strengths: [
    {
      title: "Innovation",
      texts: [
        "Vous imaginez naturellement des méthodes, des outils ou des structures qui sortent des habitudes.",
        "Votre créativité peut résoudre un problème que les approches traditionnelles n’arrivaient plus à améliorer.",
      ],
      advice: [
        "Testez votre idée à petite échelle avant de modifier l’ensemble du système.",
        "Cherchez une application concrète pour chaque concept important.",
      ],
    },
    {
      title: "Indépendance",
      texts: [
        "Vous savez conserver votre propre jugement même lorsque les autres choisissent une direction différente.",
        "Votre autonomie vous permet d’explorer une voie qui correspond davantage à votre vision personnelle.",
      ],
      advice: [
        "Distinguez l’indépendance véritable du refus automatique de toute influence.",
        "Conservez votre liberté tout en acceptant les conseils réellement utiles.",
      ],
    },
    {
      title: "Vision collective",
      texts: [
        "Vous comprenez souvent comment une idée individuelle peut produire un effet plus large.",
        "Votre regard peut améliorer un groupe, une communauté ou une structure.",
      ],
      advice: [
        "Reliez votre vision générale aux besoins concrets des personnes concernées.",
        "Commencez par un changement mesurable avant de vouloir transformer l’ensemble.",
      ],
    },
    {
      title: "Détachement",
      texts: [
        "Vous pouvez prendre suffisamment de recul pour observer une situation sans être entièrement absorbé par son intensité émotionnelle.",
        "Votre détachement vous aide à reconnaître une solution plus objective.",
      ],
      advice: [
        "Utilisez votre recul pour mieux comprendre, pas pour éviter l’émotion.",
        "Restez disponible au dialogue même lorsque vous avez déjà formé votre opinion.",
      ],
    },
  ],

  opportunity: [
    "Une idée innovante ou une nouvelle technologie peut ouvrir une direction très porteuse.",
    "Votre meilleure ouverture viendra d’un projet qui vous permet d’utiliser votre originalité au service d’un besoin réel.",
    "Une collaboration inhabituelle peut vous aider à concrétiser une vision importante.",
  ],

  vigilance: [
    "Votre besoin de liberté pourrait vous pousser à rejeter trop rapidement une structure pourtant utile.",
    "Évitez de vous isoler lorsque votre idée gagnerait à être comprise et améliorée par d’autres personnes.",
    "Une vision très avancée perdra de son impact si elle n’est pas traduite en étapes accessibles.",
  ],

  conclusion: [
    "Votre originalité, votre indépendance et votre vision du changement constituent une combinaison particulièrement puissante. Cette année, elles peuvent vous permettre de créer une solution réellement différente.",
    "Votre force est d’imaginer ce qui pourrait exister. Votre réussite dépendra de votre capacité à construire le chemin qui permettra aux autres de le comprendre.",
    "Votre liberté devient un moteur d’évolution lorsqu’elle sert une vision concrète plutôt qu’un simple besoin de rupture.",
  ],

  potentialBase: 86,
};

/*
|--------------------------------------------------------------------------
| Poissons
|--------------------------------------------------------------------------
*/

const piscesStrengths: YearlyStrengthsTexts = {
  introduction: [
    "cette année met en lumière votre imagination, votre intuition et votre capacité à percevoir les dimensions subtiles d’une situation.",
    "votre dynamique annuelle révèle une grande sensibilité créative et une aptitude particulière à comprendre ce qui ne peut pas toujours être exprimé directement.",
    "vos forces s’exprimeront particulièrement lorsque votre monde intérieur sera relié à des choix concrets et à des limites suffisamment claires.",
  ],

  dominantStrength: {
    titles: [
      "Votre intuition créative",
      "Votre sensibilité inspirée",
      "Votre imagination profonde",
    ],

    texts: [
      "Votre principale force réside dans votre capacité à percevoir les émotions, les symboles et les possibilités qui échappent souvent à une lecture uniquement rationnelle.",
      "Votre imagination vous permet de créer des solutions, des univers et des perspectives capables de toucher profondément les autres.",
      "Votre sensibilité vous aide à comprendre l’atmosphère réelle d’une situation avant même que tous les éléments soient clairement définis.",
    ],

    advice: [
      "Donnez une forme concrète à vos intuitions avant qu’elles restent seulement à l’état de possibilités.",
      "Protégez votre sensibilité par des limites claires et des périodes régulières de retrait.",
      "Choisissez un projet créatif ou humain dans lequel votre profondeur peut réellement s’exprimer.",
    ],
  },

  strengths: [
    {
      title: "Intuition",
      texts: [
        "Vous captez naturellement les ambiances, les émotions et les changements subtils.",
        "Votre intuition peut vous guider vers une direction qui n’est pas encore entièrement visible.",
      ],
      advice: [
        "Accordez de l’attention aux impressions qui reviennent avec constance.",
        "Confirmez votre ressenti par des observations concrètes avant une décision importante.",
      ],
    },
    {
      title: "Créativité",
      texts: [
        "Votre imagination peut transformer une émotion, une expérience ou une idée en expression profondément personnelle.",
        "Vous savez créer des images, des histoires ou des solutions qui touchent une dimension sensible.",
      ],
      advice: [
        "Réservez un espace régulier à la création sans attendre l’inspiration parfaite.",
        "Terminez une réalisation avant de multiplier les nouvelles possibilités.",
      ],
    },
    {
      title: "Compassion",
      texts: [
        "Vous comprenez instinctivement la vulnérabilité et les besoins émotionnels des autres.",
        "Votre compassion peut créer un véritable sentiment de soutien et de compréhension.",
      ],
      advice: [
        "Aidez sans vous rendre responsable de la guérison ou des choix d’une autre personne.",
        "Conservez suffisamment d’énergie pour répondre aussi à vos propres besoins.",
      ],
    },
    {
      title: "Souplesse intérieure",
      texts: [
        "Vous pouvez vous adapter aux changements en suivant le mouvement plutôt qu’en cherchant toujours à le contrôler.",
        "Votre réceptivité vous aide à reconnaître plusieurs chemins possibles.",
      ],
      advice: [
        "Conservez une intention claire pendant que vous adaptez votre méthode.",
        "Créez des limites simples afin que votre souplesse ne devienne pas de la dispersion.",
      ],
    },
  ],

  opportunity: [
    "Une inspiration, une rencontre ou un projet créatif peut ouvrir une direction profondément significative.",
    "Votre meilleure ouverture apparaîtra lorsque vous donnerez une forme réelle à une intuition persistante.",
    "Une activité artistique, spirituelle ou humaine peut devenir un moteur important de votre évolution.",
  ],

  vigilance: [
    "Votre sensibilité pourrait vous amener à absorber des émotions qui ne vous appartiennent pas.",
    "Évitez de conserver une possibilité uniquement parce qu’elle est belle en imagination.",
    "Le manque de limites pourrait disperser votre énergie et réduire votre capacité à terminer vos projets.",
  ],

  conclusion: [
    "Votre intuition, votre créativité et votre compassion constituent une combinaison profondément inspirante. Cette année, votre progression dépendra de votre capacité à donner une forme concrète à ce que vous ressentez.",
    "Votre sensibilité devient une force lorsqu’elle est protégée, structurée et dirigée vers une création ou une relation réellement porteuse.",
    "Votre monde intérieur contient une grande richesse. Votre défi sera de choisir ce que vous souhaitez en faire dans la réalité.",
  ],

  potentialBase: 88,
};

/*
|--------------------------------------------------------------------------
| Sélection selon le signe
|--------------------------------------------------------------------------
*/

export function createYearlyStrengthsTexts(
  zodiacSign: HoroscopeZodiacSign,
): YearlyStrengthsTexts {
  const normalizedSign =
    String(zodiacSign)
      .trim()
      .toLowerCase();

  switch (normalizedSign) {
    case "bélier":
    case "belier":
    case "aries":
      return ariesStrengths;

    case "taureau":
    case "taurus":
      return taurusStrengths;

    case "gémeaux":
    case "gemeaux":
    case "gemini":
      return geminiStrengths;

    case "cancer":
      return cancerStrengths;

    case "lion":
    case "leo":
      return leoStrengths;

    case "vierge":
    case "virgo":
      return virgoStrengths;

    case "balance":
    case "libra":
      return libraStrengths;

    case "scorpion":
    case "scorpio":
      return scorpioStrengths;

    case "sagittaire":
    case "sagittarius":
      return sagittariusStrengths;

    case "capricorne":
    case "capricorn":
      return capricornStrengths;

    case "verseau":
    case "aquarius":
      return aquariusStrengths;

    case "poissons":
    case "pisces":
      return piscesStrengths;

    default:
      return scorpioStrengths;
  }
}
