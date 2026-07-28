import type {
  HoroscopeIdentity,
  HoroscopePeriodData,
} from "../../HoroscopePdfTypes";

import {
  YEAR_PREMIUM_PAGES_CONFIG,
} from "./config/yearPremiumPagesConfig";

import type {
  YearPremiumBalanceColumn,
  YearPremiumCardItem,
  YearPremiumPageConfig,
  YearPremiumPageData,
  YearPremiumTimelineItem,
} from "./templates/YearPremiumPageTypes";

/*
|--------------------------------------------------------------------------
| Paramètres
|--------------------------------------------------------------------------
*/

type BuildYearPremiumPagesParams = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
};

/*
|--------------------------------------------------------------------------
| Thème servant à générer une page
|--------------------------------------------------------------------------
*/

type YearPremiumTheme = {
  subtitle: string;
  introduction: string;

  keywords: [
    string,
    string,
    string,
    string,
    string,
  ];

  descriptions: [
    string,
    string,
    string,
    string,
    string,
  ];

  advices: [
    string,
    string,
    string,
    string,
  ];

  opportunity: string;
  vigilance: string;
  conclusion: string;

  leftTitle?: string;
  leftText?: string;
  leftItems?: string[];

  rightTitle?: string;
  rightText?: string;
  rightItems?: string[];

  heroTitle?: string;
  heroText?: string;
  heroAdvice?: string;
};

/*
|--------------------------------------------------------------------------
| Générateur déterministe
|--------------------------------------------------------------------------
*/

function hashString(value: string): number {
  let hash = 2166136261;

  for (
    let index = 0;
    index < value.length;
    index += 1
  ) {
    hash ^= value.charCodeAt(index);

    hash = Math.imul(
      hash,
      16777619,
    );
  }

  return Math.abs(hash >>> 0);
}

function createSeed(
  identity: HoroscopeIdentity,
  period: HoroscopePeriodData,
  key: string,
): number {
  const source = [
    identity.firstName || "",
    identity.birthDate || "",
    identity.birthTime || "",
    identity.birthPlace || "",
    identity.zodiacSign,
    identity.zodiacSignLabel,
    String(period.year || ""),
    String(period.month || ""),
    key,
  ].join("|");

  return hashString(source);
}

function scoreFromSeed(
  seed: number,
  offset = 0,
): number {
  return (
    61 +
    ((seed + offset * 17) % 35)
  );
}

function rotateItems<T>(
  items: readonly T[],
  seed: number,
): T[] {
  if (items.length === 0) {
    return [];
  }

  const start =
    seed % items.length;

  return [
    ...items.slice(start),
    ...items.slice(0, start),
  ];
}

/*
|--------------------------------------------------------------------------
| Personnalisation
|--------------------------------------------------------------------------
*/

function getFirstName(
  identity: HoroscopeIdentity,
): string {
  return (
    identity.firstName?.trim() ||
    "Cette année"
  );
}

function personalizeText(
  text: string,
  identity: HoroscopeIdentity,
): string {
  const firstName =
    getFirstName(identity);

  return text
    .replaceAll(
      "{firstName}",
      firstName,
    )
    .replaceAll(
      "{sign}",
      identity.zodiacSignLabel,
    );
}

/*
|--------------------------------------------------------------------------
| Bibliothèque thématique
|--------------------------------------------------------------------------
|
| Les textes détaillés peuvent ensuite être enrichis sans modifier
| le moteur de génération.
|
*/

const YEAR_PREMIUM_THEMES: Record<
  string,
  YearPremiumTheme
> = {
  /*
  |--------------------------------------------------------------------------
  | Page 33
  |--------------------------------------------------------------------------
  */

  "inner-blocks": {
    subtitle:
      "Comprendre ce qui ralentit votre progression afin de retrouver une liberté intérieure plus grande.",

    introduction:
      "{firstName}, certains obstacles de cette année ne viennent pas seulement des circonstances extérieures. Ils révèlent aussi des habitudes, des peurs ou des mécanismes anciens qu’il devient possible de transformer.",

    keywords: [
      "La peur du changement",
      "Le besoin de contrôle",
      "Le doute intérieur",
      "La difficulté à lâcher prise",
      "La peur de décevoir",
    ],

    descriptions: [
      "Vous pourriez hésiter devant une situation nouvelle, même lorsqu’elle correspond réellement à votre évolution.",
      "Le désir de tout prévoir peut vous rassurer temporairement, mais aussi limiter votre capacité d’adaptation.",
      "Une tendance à remettre en question vos décisions pourrait ralentir une initiative pourtant porteuse.",
      "Certaines situations demanderont d’accepter que tout ne puisse pas être maîtrisé immédiatement.",
      "Le besoin de répondre aux attentes des autres pourrait parfois vous éloigner de vos propres priorités.",
    ],

    advices: [
      "Avancez par étapes plutôt que d’attendre de vous sentir totalement prêt.",
      "Distinguez ce qui dépend réellement de vous de ce qui doit simplement suivre son cours.",
      "Appuyez-vous sur les faits plutôt que sur les scénarios négatifs imaginés.",
      "Accordez-vous le droit de choisir sans chercher constamment l’approbation extérieure.",
    ],

    opportunity:
      "Une prise de conscience importante peut vous aider à interrompre un ancien schéma et à choisir une réponse plus libre.",

    vigilance:
      "Évitez de confondre prudence et immobilité. Une hésitation prolongée pourrait devenir plus contraignante que le changement lui-même.",

    conclusion:
      "Votre libération passe moins par un combat contre vous-même que par une compréhension plus douce de vos mécanismes de protection.",

    leftTitle:
      "Ce qui vous retient",

    leftText:
      "Vos blocages apparaissent principalement lorsque vous cherchez à garantir le résultat avant même d’avoir commencé.",

    leftItems: [
      "Anticiper excessivement les difficultés",
      "Retarder une décision importante",
      "Chercher une validation extérieure",
      "Maintenir une situation devenue trop étroite",
    ],

    rightTitle:
      "Ce qui vous libère",

    rightText:
      "Votre progression s’accélère lorsque vous acceptez de construire votre sécurité pendant le mouvement plutôt qu’avant celui-ci.",

    rightItems: [
      "Choisir une première action simple",
      "Exprimer clairement vos limites",
      "Accepter une période d’ajustement",
      "Faire confiance à vos apprentissages",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Page 34
  |--------------------------------------------------------------------------
  */

  "emotional-needs": {
    subtitle:
      "Identifier les conditions qui vous permettent de vous sentir compris, soutenu et intérieurement stable.",

    introduction:
      "{firstName}, votre équilibre émotionnel dépendra moins de la quantité d’attention reçue que de la qualité des liens et de la sécurité que vous construisez autour de vous.",

    keywords: [
      "Sécurité",
      "Reconnaissance",
      "Liberté émotionnelle",
      "Intimité",
      "Apaisement",
    ],

    descriptions: [
      "Vous avez besoin de sentir que vos liens reposent sur une base stable et prévisible.",
      "Vos efforts gagnent à être reconnus, même lorsque vous ne réclamez pas directement cette validation.",
      "Vous avez besoin de pouvoir exprimer vos émotions sans vous sentir enfermé dans une réaction définitive.",
      "Les échanges superficiels vous satisferont moins que les conversations sincères et profondes.",
      "Des périodes régulières de calme seront essentielles pour retrouver votre clarté intérieure.",
    ],

    advices: [
      "Nommez vos besoins avant qu’ils ne deviennent de la frustration.",
      "Choisissez des relations dans lesquelles la réciprocité est visible.",
      "Préservez des espaces personnels même au sein de vos engagements.",
      "Ne minimisez pas l’importance du repos émotionnel.",
    ],

    opportunity:
      "Une relation ou une conversation authentique peut vous permettre de vous sentir davantage compris et soutenu.",

    vigilance:
      "Le silence prolongé autour de vos besoins pourrait créer une distance inutile avec une personne importante.",

    conclusion:
      "Votre équilibre émotionnel se consolide lorsque vous cessez d’attendre que les autres devinent ce qui vous ferait du bien.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 35
  |--------------------------------------------------------------------------
  */

  "personal-mission": {
    subtitle:
      "La direction essentielle qui donne du sens à vos décisions, vos efforts et vos transformations.",

    introduction:
      "{firstName}, votre mission de l’année consiste à rapprocher davantage votre vie quotidienne de ce qui correspond réellement à vos valeurs.",

    keywords: [
      "Alignement",
      "Transmission",
      "Création",
      "Courage",
      "Engagement",
    ],

    descriptions: [
      "Vous serez amené à vérifier si vos choix correspondent encore à la personne que vous êtes devenu.",
      "Votre expérience peut devenir utile à d’autres, directement ou indirectement.",
      "Une idée personnelle demande à être structurée afin de prendre une forme plus concrète.",
      "Votre évolution nécessitera une décision que vous ne pourrez plus repousser indéfiniment.",
      "La continuité de vos efforts comptera davantage que la rapidité des résultats.",
    ],

    advices: [
      "Faites passer vos valeurs avant la peur de déranger.",
      "Transformez votre intention principale en actions mesurables.",
      "Acceptez de commencer avant que tout soit parfait.",
      "Revenez régulièrement à la raison profonde de vos efforts.",
    ],

    opportunity:
      "Une nouvelle responsabilité peut vous placer exactement là où vos talents auront le plus de valeur.",

    vigilance:
      "Ne laissez pas des obligations secondaires détourner toute votre énergie de votre priorité essentielle.",

    conclusion:
      "Votre mission n’exige pas de tout transformer à la fois. Elle demande surtout de choisir une direction et de lui rester fidèle.",

    heroTitle:
      "Construire une vie plus fidèle à votre vérité",

    heroText:
      "Cette année vous invite à cesser de séparer vos aspirations profondes de vos décisions concrètes. Votre mission consiste à faire descendre une conviction intérieure dans la réalité.",

    heroAdvice:
      "Choisissez une priorité capable de guider vos décisions pendant toute l’année.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 36
  |--------------------------------------------------------------------------
  */

  "personal-resources": {
    subtitle:
      "Les qualités et les appuis intérieurs que vous pouvez mobiliser pour traverser l’année avec confiance.",

    introduction:
      "{firstName}, vous disposez déjà de plusieurs ressources capables de soutenir vos projets, même si certaines sont encore sous-utilisées.",

    keywords: [
      "Persévérance",
      "Adaptabilité",
      "Lucidité",
      "Créativité",
      "Intuition",
    ],

    descriptions: [
      "Votre capacité à poursuivre un objectif malgré les délais sera l’un de vos principaux avantages.",
      "Vous saurez ajuster votre méthode lorsqu’une situation évoluera de manière inattendue.",
      "Votre regard réaliste vous aidera à distinguer une vraie occasion d’une promesse trop fragile.",
      "Une solution originale peut apparaître lorsque les méthodes habituelles atteignent leurs limites.",
      "Votre perception subtile d’une situation vous donnera souvent une longueur d’avance.",
    ],

    advices: [
      "Appuyez-vous sur ce que vous avez déjà traversé.",
      "Ne confondez pas adaptation et renoncement.",
      "Donnez une structure concrète à vos idées.",
      "Écoutez votre intuition, puis vérifiez-la avec les faits.",
    ],

    opportunity:
      "Une compétence jusque-là secondaire pourrait devenir centrale dans la réalisation d’un projet.",

    vigilance:
      "Évitez de disperser vos forces dans trop de directions simultanément.",

    conclusion:
      "Votre plus grande ressource sera votre capacité à réunir intelligence pratique, persévérance et écoute intérieure.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 37
  |--------------------------------------------------------------------------
  */

  "self-confidence": {
    subtitle:
      "Renforcer votre sentiment de légitimité sans perdre votre capacité de remise en question.",

    introduction:
      "{firstName}, votre confiance se développera surtout à travers les preuves concrètes que vous vous donnerez à vous-même.",

    keywords: [
      "Affirmation",
      "Légitimité",
      "Autonomie",
      "Reconnaissance",
      "Courage",
    ],

    descriptions: [
      "Vous serez amené à défendre plus clairement une décision ou une position personnelle.",
      "Une réussite passée peut devenir un appui solide lorsque le doute réapparaît.",
      "Votre autonomie grandira à mesure que vous cesserez de rechercher une approbation immédiate.",
      "La reconnaissance extérieure sera agréable, mais ne devra pas devenir votre seule mesure de valeur.",
      "Une action assumée vous permettra de découvrir que vous êtes plus préparé que vous ne le pensiez.",
    ],

    advices: [
      "Notez vos progrès plutôt que seulement ce qui reste à accomplir.",
      "Parlez de vos compétences sans les minimiser.",
      "Acceptez les imperfections normales d’un apprentissage.",
      "Prenez une décision sans consulter trop de personnes.",
    ],

    opportunity:
      "Une situation nouvelle peut vous permettre de prendre votre place avec davantage d’assurance.",

    vigilance:
      "Une comparaison excessive avec une autre personne pourrait affaiblir momentanément votre confiance.",

    conclusion:
      "La confiance la plus durable naîtra de votre capacité à vous respecter même lorsque le résultat n’est pas encore garanti.",

    leftTitle:
      "Votre force d’affirmation",

    leftText:
      "Vous possédez la capacité de prendre votre place lorsque vous vous appuyez sur vos expériences réelles.",

    leftItems: [
      "Exprimer clairement votre opinion",
      "Présenter vos compétences avec assurance",
      "Accepter une responsabilité visible",
      "Choisir selon vos propres priorités",
    ],

    rightTitle:
      "Votre sensibilité au doute",

    rightText:
      "Votre confiance peut diminuer lorsque vous exigez de vous-même une certitude ou une perfection irréaliste.",

    rightItems: [
      "Comparer votre parcours à celui des autres",
      "Amplifier une erreur ponctuelle",
      "Attendre une validation constante",
      "Sous-estimer vos résultats déjà obtenus",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Page 38
  |--------------------------------------------------------------------------
  */

  "inner-transformation": {
    subtitle:
      "Les différentes étapes par lesquelles une ancienne identité laisse progressivement place à une version plus libre de vous-même.",

    introduction:
      "{firstName}, votre transformation ne se réalisera pas en une seule décision. Elle avancera par prises de conscience, ajustements et confirmations successives.",

    keywords: [
      "Prise de conscience",
      "Détachement",
      "Réorientation",
      "Reconstruction",
      "Intégration",
    ],

    descriptions: [
      "Vous identifiez plus clairement ce qui ne correspond plus à votre évolution.",
      "Vous commencez à réduire l’influence d’une habitude, d’une peur ou d’une attente ancienne.",
      "Une nouvelle direction devient suffisamment claire pour modifier vos priorités.",
      "Vous mettez en place des repères plus adaptés à vos besoins actuels.",
      "Les changements récents deviennent progressivement une nouvelle manière naturelle de fonctionner.",
    ],

    advices: [
      "Observez sans vous juger ce qui demande à changer.",
      "Ne revenez pas vers une situation uniquement parce qu’elle vous est familière.",
      "Donnez du temps à votre nouvelle direction pour produire ses effets.",
      "Célébrez les changements qui deviennent enfin stables.",
    ],

    opportunity:
      "Une décision courageuse peut accélérer un changement intérieur déjà amorcé depuis quelque temps.",

    vigilance:
      "Une période d’incertitude ne signifie pas que vous avez choisi la mauvaise direction.",

    conclusion:
      "Votre transformation devient durable lorsque vous cessez de vouloir retrouver exactement la personne que vous étiez auparavant.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 39
  |--------------------------------------------------------------------------
  */

  "love-evolution": {
    subtitle:
      "Les mouvements affectifs qui peuvent faire évoluer votre manière d’aimer, de choisir et de vous engager.",

    introduction:
      "{firstName}, votre vie amoureuse traverse une année d’ajustement durant laquelle la qualité du lien comptera davantage que les apparences.",

    keywords: [
      "Clarification",
      "Ouverture",
      "Approfondissement",
      "Ajustement",
      "Engagement",
    ],

    descriptions: [
      "Vous comprenez mieux ce que vous attendez réellement d’une relation.",
      "Une rencontre ou une conversation permet une ouverture émotionnelle nouvelle.",
      "Un lien important gagne en profondeur grâce à une plus grande sincérité.",
      "Certaines attentes doivent être rééquilibrées afin de préserver la réciprocité.",
      "Une décision affective peut donner une direction plus claire à votre vie sentimentale.",
    ],

    advices: [
      "Distinguez le désir d’aimer de la peur d’être seul.",
      "Exprimez vos attentes sans transformer la conversation en épreuve.",
      "Observez les gestes réguliers plutôt que les promesses exceptionnelles.",
      "Choisissez une relation qui respecte aussi votre individualité.",
    ],

    opportunity:
      "Une relation peut gagner en authenticité grâce à un échange que vous n’auriez pas osé avoir auparavant.",

    vigilance:
      "Évitez de maintenir une ambiguïté uniquement pour repousser une décision émotionnelle.",

    conclusion:
      "Votre évolution sentimentale vous conduit vers des liens plus conscients, plus équilibrés et moins fondés sur la peur.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 40
  |--------------------------------------------------------------------------
  */

  "relationship-patterns": {
    subtitle:
      "Comprendre les réactions automatiques qui influencent vos liens et apprendre à créer une relation plus consciente.",

    introduction:
      "{firstName}, certaines réactions relationnelles pourraient se répéter jusqu’à ce que vous choisissiez une manière différente de communiquer ou de poser vos limites.",

    keywords: [
      "Protection",
      "Attachement",
      "Distance",
      "Projection",
      "Réciprocité",
    ],

    descriptions: [
      "Vous pourriez vous protéger avant même qu’un danger relationnel soit réellement présent.",
      "Le besoin d’être rassuré peut parfois influencer votre manière d’interpréter les gestes d’une autre personne.",
      "Une tendance à prendre de la distance pourrait apparaître lorsque l’émotion devient trop intense.",
      "Certaines attentes personnelles risquent d’être attribuées à l’autre sans avoir été clairement exprimées.",
      "Votre équilibre dépendra de votre capacité à observer ce que chacun apporte réellement au lien.",
    ],

    advices: [
      "Vérifiez une impression avant de la considérer comme une certitude.",
      "Exprimez une limite avant d’accumuler du ressentiment.",
      "Laissez à l’autre la possibilité d’expliquer son intention.",
      "Évaluez la relation selon sa constance.",
    ],

    opportunity:
      "Une relation importante peut évoluer lorsque vous remplacez une réaction automatique par une conversation directe.",

    vigilance:
      "Ne prenez pas une décision définitive au moment précis où votre peur est la plus forte.",

    conclusion:
      "Votre nouvelle manière d’aimer repose sur davantage de clarté, de responsabilité émotionnelle et de réciprocité.",

    leftTitle:
      "Vos anciens réflexes",

    leftText:
      "Lorsque vous craignez d’être déçu, vous pouvez chercher à contrôler le lien ou vous en éloigner trop rapidement.",

    leftItems: [
      "Interpréter sans vérifier",
      "Retenir vos besoins trop longtemps",
      "Tester la loyauté de l’autre",
      "Vous fermer après une déception",
    ],

    rightTitle:
      "Votre nouvelle dynamique",

    rightText:
      "Votre relationnel devient plus stable lorsque vous choisissez la transparence avant la protection automatique.",

    rightItems: [
      "Poser une question directe",
      "Exprimer une limite calmement",
      "Observer les actions répétées",
      "Accepter une vulnérabilité progressive",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Page 41
  |--------------------------------------------------------------------------
  */

  "important-relationships": {
    subtitle:
      "Les liens qui joueront un rôle déterminant dans vos choix, votre évolution et votre équilibre.",

    introduction:
      "{firstName}, votre entourage aura une influence importante sur votre année, mais tous les liens ne joueront pas le même rôle.",

    keywords: [
      "Le soutien",
      "Le miroir",
      "Le défi",
      "La collaboration",
      "La transmission",
    ],

    descriptions: [
      "Une personne fiable vous aide à conserver votre stabilité lorsque les circonstances deviennent exigeantes.",
      "Un lien particulier vous révèle une partie de vous-même que vous aviez peu observée.",
      "Une relation plus complexe vous oblige à clarifier vos limites et vos attentes.",
      "Une alliance permet d’avancer plus rapidement dans un projet ou un objectif commun.",
      "Une personne d’expérience peut vous transmettre une information ou une méthode particulièrement utile.",
    ],

    advices: [
      "Investissez davantage dans les liens réciproques.",
      "Observez ce que chaque relation vous apprend.",
      "Ne confondez pas intensité et compatibilité.",
      "Acceptez l’aide sans perdre votre autonomie.",
    ],

    opportunity:
      "Une collaboration ou une rencontre peut ouvrir une possibilité qui aurait été difficile à créer seul.",

    vigilance:
      "Une relation déséquilibrée pourrait demander une limite plus claire.",

    conclusion:
      "Votre cercle relationnel devient plus précieux lorsque vous choisissez la qualité, la fiabilité et la réciprocité.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 42
  |--------------------------------------------------------------------------
  */

  communication: {
    subtitle:
      "La manière dont vos paroles, votre écoute et votre présence peuvent transformer vos échanges.",

    introduction:
      "{firstName}, votre communication gagnera en influence lorsque vous privilégierez la précision plutôt que la réaction immédiate.",

    keywords: [
      "Expression",
      "Écoute",
      "Négociation",
      "Transmission",
      "Clarté",
    ],

    descriptions: [
      "Vous serez amené à exprimer plus directement une idée, une demande ou une limite.",
      "Votre capacité à écouter ce qui n’est pas formulé clairement vous donnera une compréhension plus complète.",
      "Une discussion importante demandera de chercher un terrain réellement équilibré.",
      "Votre expérience ou vos connaissances peuvent être partagées de manière plus visible.",
      "Une formulation plus simple et plus précise évitera plusieurs malentendus.",
    ],

    advices: [
      "Préparez vos messages importants.",
      "Posez des questions avant de tirer une conclusion.",
      "Choisissez le bon moment pour les sujets sensibles.",
      "N’ajoutez pas trop d’explications à une limite claire.",
    ],

    opportunity:
      "Une conversation bien préparée peut débloquer une situation qui semblait immobile.",

    vigilance:
      "Une réponse donnée sous le coup de l’émotion pourrait être interprétée plus fortement que prévu.",

    conclusion:
      "Votre parole devient plus puissante lorsqu’elle unit franchise, calme et respect de votre intention.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 43
  |--------------------------------------------------------------------------
  */

  "career-evolution": {
    subtitle:
      "Les principales phases de votre progression professionnelle et les choix capables de modifier votre trajectoire.",

    introduction:
      "{firstName}, votre carrière évoluera par étapes. Une progression importante pourrait commencer par un ajustement discret mais stratégique.",

    keywords: [
      "Évaluation",
      "Positionnement",
      "Visibilité",
      "Expansion",
      "Consolidation",
    ],

    descriptions: [
      "Vous observez plus clairement les forces et les limites de votre situation professionnelle actuelle.",
      "Vous redéfinissez votre valeur, votre rôle ou la direction que vous souhaitez donner à votre travail.",
      "Une réalisation vous permet de gagner en reconnaissance ou en crédibilité.",
      "Une occasion d’élargir vos responsabilités, votre clientèle ou votre champ d’action peut apparaître.",
      "Vous stabilisez les résultats obtenus grâce à une organisation plus durable.",
    ],

    advices: [
      "Évaluez votre situation avec des critères concrets.",
      "Présentez clairement ce que vous pouvez apporter.",
      "Rendez vos résultats visibles.",
      "Consolidez avant de multiplier les nouveaux engagements.",
    ],

    opportunity:
      "Une responsabilité ou une collaboration peut vous permettre de franchir un palier professionnel.",

    vigilance:
      "Une charge de travail mal évaluée pourrait réduire la qualité de vos résultats.",

    conclusion:
      "Votre progression professionnelle repose sur une combinaison de visibilité, de spécialisation et de constance.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 44
  |--------------------------------------------------------------------------
  */

  "professional-skills": {
    subtitle:
      "Les compétences qui peuvent accroître votre valeur, votre efficacité et votre reconnaissance professionnelle.",

    introduction:
      "{firstName}, certaines de vos compétences seront particulièrement recherchées cette année, surtout lorsqu’elles seront présentées de manière concrète.",

    keywords: [
      "Organisation",
      "Analyse",
      "Communication",
      "Créativité",
      "Leadership",
    ],

    descriptions: [
      "Votre capacité à structurer les étapes et les priorités améliore directement votre efficacité.",
      "Vous savez repérer les détails importants et comprendre rapidement les enjeux d’une situation.",
      "Votre manière de présenter une idée peut faciliter l’adhésion et la collaboration.",
      "Vous trouvez des solutions nouvelles lorsque les méthodes existantes ne suffisent plus.",
      "Vous pouvez mobiliser les autres autour d’une direction claire.",
    ],

    advices: [
      "Transformez vos compétences en résultats mesurables.",
      "Montrez des exemples précis de votre travail.",
      "Développez une compétence complémentaire.",
      "Acceptez davantage de visibilité.",
    ],

    opportunity:
      "Une compétence que vous considériez comme naturelle pourrait devenir un avantage professionnel majeur.",

    vigilance:
      "Ne laissez pas votre polyvalence vous enfermer dans un rôle où tout repose constamment sur vous.",

    conclusion:
      "Votre valeur professionnelle augmente lorsque vos compétences sont clairement identifiées, structurées et rendues visibles.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 45
  |--------------------------------------------------------------------------
  */

  leadership: {
    subtitle:
      "Votre capacité à donner une direction, inspirer la confiance et faire progresser un projet collectif.",

    introduction:
      "{firstName}, votre leadership s’exprimera davantage par la cohérence de vos décisions que par une recherche d’autorité.",

    keywords: [
      "Vision",
      "Responsabilité",
      "Influence",
      "Décision",
      "Exemplarité",
    ],

    descriptions: [
      "Vous pouvez percevoir une direction avant qu’elle ne devienne évidente pour tout le monde.",
      "Une responsabilité supplémentaire peut révéler votre capacité à organiser et à rassurer.",
      "Votre influence grandira lorsque vous communiquerez une intention claire.",
      "Une décision difficile devra parfois être prise sans obtenir l’unanimité.",
      "Votre comportement quotidien aura plus d’impact que vos discours.",
    ],

    advices: [
      "Présentez une direction simple et compréhensible.",
      "Déléguez sans abandonner le suivi.",
      "Expliquez le pourquoi derrière vos décisions.",
      "Restez constant dans vos attentes.",
    ],

    opportunity:
      "Une situation vous permet de prendre naturellement la direction d’un projet ou d’un groupe.",

    vigilance:
      "Évitez de reprendre toutes les responsabilités lorsqu’une autre personne pourrait apprendre à les assumer.",

    conclusion:
      "Votre leadership devient durable lorsque vous développez l’autonomie autour de vous au lieu de devenir indispensable à tout.",

    heroTitle:
      "Guider avec clarté sans tout contrôler",

    heroText:
      "Cette année favorise un leadership calme, stratégique et crédible. Votre influence repose sur votre capacité à relier une vision claire à des décisions concrètes.",

    heroAdvice:
      "Donnez une direction, définissez les responsabilités et laissez ensuite une place réelle à l’initiative.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 46
  |--------------------------------------------------------------------------
  */

  "professional-balance": {
    subtitle:
      "Trouver une organisation capable de soutenir vos ambitions sans épuiser votre énergie personnelle.",

    introduction:
      "{firstName}, l’équilibre ne consistera pas à répartir votre temps également, mais à ajuster vos priorités selon les périodes.",

    keywords: [
      "Ambition",
      "Repos",
      "Responsabilité",
      "Disponibilité",
      "Limites",
    ],

    descriptions: [
      "Votre désir d’avancer professionnellement peut devenir une grande source de motivation.",
      "Votre récupération doit être considérée comme une condition de performance.",
      "Certaines responsabilités demanderont une présence plus soutenue pendant une période précise.",
      "Votre entourage aura aussi besoin de moments où votre attention est réellement disponible.",
      "Des limites claires empêcheront les urgences extérieures d’occuper tout votre espace.",
    ],

    advices: [
      "Définissez des périodes de travail réellement fermées.",
      "Planifiez le repos avant d’être épuisé.",
      "Réévaluez les tâches qui reposent uniquement sur vous.",
      "Protégez au moins un espace personnel régulier.",
    ],

    opportunity:
      "Une nouvelle organisation peut améliorer simultanément votre efficacité professionnelle et votre qualité de vie.",

    vigilance:
      "Une surcharge prolongée pourrait vous rendre moins disponible précisément dans les domaines qui comptent le plus.",

    conclusion:
      "Votre juste équilibre repose sur des limites concrètes plutôt que sur l’espoir que les obligations diminuent d’elles-mêmes.",

    leftTitle:
      "Votre vie professionnelle",

    leftText:
      "Votre travail demande de l’ambition, de la structure et une présence capable de produire des résultats durables.",

    leftItems: [
      "Définir les vraies priorités",
      "Réduire les urgences artificielles",
      "Déléguer certaines responsabilités",
      "Mesurer vos résultats",
    ],

    rightTitle:
      "Votre vie personnelle",

    rightText:
      "Votre équilibre personnel demande du repos, de la disponibilité émotionnelle et des espaces qui ne servent pas uniquement à produire.",

    rightItems: [
      "Préserver du temps sans objectif",
      "Être réellement présent dans vos liens",
      "Respecter vos besoins physiques",
      "Maintenir des activités régénérantes",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Page 47
  |--------------------------------------------------------------------------
  */

  "financial-cycles": {
    subtitle:
      "Les périodes de préparation, d’expansion et de stabilisation qui marquent votre trajectoire matérielle.",

    introduction:
      "{firstName}, vos finances évolueront selon plusieurs phases distinctes. Chaque période demandera une stratégie adaptée plutôt qu’une réaction identique.",

    keywords: [
      "Observation",
      "Réorganisation",
      "Expansion",
      "Prudence",
      "Stabilisation",
    ],

    descriptions: [
      "Vous analysez plus précisément les entrées, les dépenses et les engagements existants.",
      "Une meilleure organisation permet de récupérer une marge de manœuvre.",
      "Une possibilité d’augmentation de revenus ou de développement peut apparaître.",
      "Une période demande de protéger davantage vos ressources et d’éviter les décisions impulsives.",
      "Les ajustements réalisés commencent à produire une base financière plus prévisible.",
    ],

    advices: [
      "Travaillez à partir de chiffres réels.",
      "Réduisez les dépenses qui n’apportent plus de valeur.",
      "Évaluez le rendement avant d’investir davantage.",
      "Conservez une réserve pour les imprévus.",
    ],

    opportunity:
      "Une nouvelle source de revenus peut se développer si elle est structurée avec patience.",

    vigilance:
      "Une dépense motivée par l’urgence ou l’émotion pourrait réduire inutilement votre flexibilité.",

    conclusion:
      "Votre année financière progresse lorsque vous alternez intelligemment expansion, protection et consolidation.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 48
  |--------------------------------------------------------------------------
  */

  "financial-levers": {
    subtitle:
      "Les actions concrètes capables d’améliorer vos revenus, votre stabilité et votre marge de décision.",

    introduction:
      "{firstName}, votre prospérité dépendra surtout de quelques leviers précis plutôt que d’une multiplication désordonnée des efforts.",

    keywords: [
      "Valorisation",
      "Diversification",
      "Organisation",
      "Négociation",
      "Investissement",
    ],

    descriptions: [
      "Une meilleure présentation de votre valeur peut justifier un tarif, un revenu ou une reconnaissance supérieure.",
      "Une seconde source de revenus peut réduire votre dépendance envers une seule activité.",
      "Une gestion plus structurée améliore immédiatement votre visibilité financière.",
      "Une négociation préparée peut modifier favorablement une dépense ou un revenu régulier.",
      "Un investissement bien évalué peut soutenir votre croissance à moyen terme.",
    ],

    advices: [
      "Calculez la valeur réelle de votre temps.",
      "Développez une source de revenus à la fois.",
      "Automatisez le suivi de vos finances.",
      "Comparez les coûts sur toute leur durée.",
    ],

    opportunity:
      "Une amélioration de votre offre ou de votre positionnement peut augmenter vos revenus sans exiger proportionnellement plus de travail.",

    vigilance:
      "La diversification ne doit pas devenir une dispersion qui affaiblit votre activité principale.",

    conclusion:
      "Votre stratégie financière la plus efficace consiste à renforcer ce qui fonctionne déjà avant d’ajouter de nouvelles directions.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 49
  |--------------------------------------------------------------------------
  */

  "money-relationship": {
    subtitle:
      "Comprendre les émotions, les croyances et les comportements qui influencent vos décisions matérielles.",

    introduction:
      "{firstName}, votre relation avec l’argent évoluera lorsque vous distinguerez davantage la sécurité réelle de la peur de manquer.",

    keywords: [
      "Sécurité",
      "Valeur personnelle",
      "Contrôle",
      "Plaisir",
      "Abondance",
    ],

    descriptions: [
      "L’argent représente pour vous une forme de protection et de liberté de choix.",
      "Votre manière de fixer votre valeur peut influencer directement vos revenus.",
      "Le besoin de contrôler chaque détail financier peut parfois augmenter votre inquiétude.",
      "Certaines dépenses sont liées au besoin de profiter du présent ou de vous récompenser.",
      "Votre sentiment d’abondance grandit lorsque vous observez aussi les ressources déjà disponibles.",
    ],

    advices: [
      "Définissez ce que la sécurité signifie concrètement.",
      "Séparez votre valeur personnelle de votre solde bancaire.",
      "Créez une limite de dépense avant l’achat.",
      "Prévoyez une part raisonnable pour le plaisir.",
    ],

    opportunity:
      "Une nouvelle façon de mesurer votre sécurité peut réduire votre anxiété et améliorer vos décisions.",

    vigilance:
      "Évitez d’utiliser une dépense ou une accumulation comme réponse automatique à une émotion.",

    conclusion:
      "Votre rapport à la prospérité devient plus sain lorsque l’argent redevient un outil plutôt qu’une mesure de votre valeur.",

    leftTitle:
      "Le besoin de sécurité",

    leftText:
      "Vous cherchez naturellement à protéger votre stabilité et à conserver une marge de décision suffisante.",

    leftItems: [
      "Prévoir les dépenses importantes",
      "Maintenir une réserve",
      "Réduire les engagements risqués",
      "Conserver une visibilité claire",
    ],

    rightTitle:
      "La capacité d’expansion",

    rightText:
      "Votre prospérité demande aussi d’accepter certaines initiatives calculées et de faire circuler vos ressources intelligemment.",

    rightItems: [
      "Investir dans une compétence utile",
      "Valoriser davantage votre travail",
      "Développer une nouvelle offre",
      "Accepter un risque mesuré",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Page 50
  |--------------------------------------------------------------------------
  */

  "energy-management": {
    subtitle:
      "Reconnaître ce qui nourrit votre vitalité et ce qui provoque une fatigue évitable.",

    introduction:
      "{firstName}, votre énergie ne sera pas constante. Une meilleure gestion de vos rythmes vous permettra toutefois de préserver une vitalité beaucoup plus régulière.",

    keywords: [
      "Sommeil",
      "Mouvement",
      "Motivation",
      "Environnement",
      "Récupération",
    ],

    descriptions: [
      "La qualité de votre repos aura une influence directe sur votre concentration et votre humeur.",
      "Une activité physique régulière soutiendra votre énergie mieux que des efforts intenses mais irréguliers.",
      "Votre vitalité augmente lorsque vos actions sont reliées à un objectif qui vous stimule réellement.",
      "Certaines personnes ou certains espaces auront un effet visible sur votre niveau d’énergie.",
      "Des pauses courtes mais réelles éviteront l’accumulation d’une fatigue plus profonde.",
    ],

    advices: [
      "Observez les heures où votre énergie est naturellement plus forte.",
      "Placez les tâches exigeantes dans vos meilleures périodes.",
      "Réduisez les engagements qui vous vident sans résultat.",
      "Ne considérez pas le repos comme une récompense.",
    ],

    opportunity:
      "Un changement simple dans votre organisation quotidienne peut améliorer rapidement votre vitalité.",

    vigilance:
      "Une période d’enthousiasme pourrait vous pousser à dépasser vos limites avant que la fatigue soit visible.",

    conclusion:
      "Votre équilibre énergétique dépend moins de votre volonté que de la qualité de votre rythme et de vos limites.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 51
  |--------------------------------------------------------------------------
  */

  "healing-cycles": {
    subtitle:
      "Les différentes phases d’un processus de réparation émotionnelle et de réconciliation avec votre histoire.",

    introduction:
      "{firstName}, la guérison de cette année se produit progressivement, à mesure que vous donnez un sens nouveau à certaines expériences anciennes.",

    keywords: [
      "Reconnaissance",
      "Expression",
      "Libération",
      "Réconciliation",
      "Renouveau",
    ],

    descriptions: [
      "Vous reconnaissez plus honnêtement l’impact d’une expérience qui vous a marqué.",
      "Une émotion longtemps retenue trouve une manière plus saine d’être exprimée.",
      "Vous commencez à vous détacher d’une culpabilité, d’une colère ou d’une attente ancienne.",
      "Votre regard sur votre histoire devient plus nuancé et moins douloureux.",
      "Une nouvelle disponibilité intérieure vous permet de construire autrement.",
    ],

    advices: [
      "Accueillez ce que vous ressentez sans chercher immédiatement à le corriger.",
      "Choisissez un espace sûr pour exprimer ce qui a été retenu.",
      "Ne confondez pas pardonner et nier ce qui s’est passé.",
      "Observez les nouvelles possibilités créées par votre évolution.",
    ],

    opportunity:
      "Une conversation, une compréhension ou un choix personnel peut alléger une charge émotionnelle ancienne.",

    vigilance:
      "Évitez de rouvrir une situation uniquement pour obtenir une réponse que l’autre personne ne peut peut-être pas donner.",

    conclusion:
      "Votre guérison avance lorsque votre passé cesse de déterminer automatiquement vos décisions présentes.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 52
  |--------------------------------------------------------------------------
  */

  "new-habits": {
    subtitle:
      "Les pratiques quotidiennes capables de transformer progressivement votre énergie, votre efficacité et votre bien-être.",

    introduction:
      "{firstName}, vos résultats dépendront davantage de quelques habitudes simples répétées que d’efforts exceptionnels mais irréguliers.",

    keywords: [
      "Planification",
      "Mouvement",
      "Concentration",
      "Repos",
      "Révision",
    ],

    descriptions: [
      "Une planification légère en début de semaine vous évitera plusieurs décisions inutiles.",
      "Une activité physique régulière soutiendra votre énergie et votre stabilité émotionnelle.",
      "Des périodes sans interruption amélioreront nettement la qualité de votre travail.",
      "Un horaire de récupération plus constant protégera votre concentration.",
      "Un bilan régulier vous permettra d’ajuster vos méthodes avant qu’un problème s’installe.",
    ],

    advices: [
      "Commencez par une habitude suffisamment petite pour être répétée.",
      "Associez la nouvelle habitude à une routine existante.",
      "Mesurez la régularité plutôt que la perfection.",
      "Corrigez rapidement un écart sans abandonner le processus.",
    ],

    opportunity:
      "Une nouvelle routine peut produire des effets visibles dans plusieurs domaines à la fois.",

    vigilance:
      "Vouloir modifier trop d’habitudes simultanément pourrait réduire votre constance.",

    conclusion:
      "Votre nouvelle discipline devient durable lorsqu’elle simplifie votre vie au lieu de devenir une exigence supplémentaire.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 53
  |--------------------------------------------------------------------------
  */

  "intuition-reason": {
    subtitle:
      "Réunir votre perception intérieure et votre capacité d’analyse pour prendre des décisions plus justes.",

    introduction:
      "{firstName}, vos meilleures décisions apparaîtront lorsque votre intuition indiquera une direction et que votre raison vérifiera sa viabilité.",

    keywords: [
      "Perception",
      "Analyse",
      "Instinct",
      "Vérification",
      "Décision",
    ],

    descriptions: [
      "Vous percevez parfois une dynamique avant de pouvoir l’expliquer clairement.",
      "Votre capacité d’analyse permet de distinguer une impression valable d’une réaction émotionnelle.",
      "Une réaction spontanée peut contenir une information importante sur vos besoins.",
      "Les faits concrets vous aideront à confirmer ou à ajuster votre première perception.",
      "Une décision équilibrée réunira sens intérieur et réalisme pratique.",
    ],

    advices: [
      "Notez votre première impression avant de l’analyser.",
      "Cherchez les faits qui confirment ou contredisent votre perception.",
      "Évitez de décider uniquement pour calmer une peur immédiate.",
      "Accordez-vous un délai pour les choix irréversibles.",
    ],

    opportunity:
      "Une décision importante peut devenir beaucoup plus claire lorsque vous cessez d’opposer logique et intuition.",

    vigilance:
      "Une émotion intense pourrait momentanément se présenter comme une certitude intuitive.",

    conclusion:
      "Votre boussole intérieure devient fiable lorsque votre intuition et votre raison travaillent ensemble.",

    leftTitle:
      "Votre raison",

    leftText:
      "Votre intelligence pratique évalue les conséquences, les ressources et la cohérence d’une décision.",

    leftItems: [
      "Analyser les faits disponibles",
      "Comparer plusieurs scénarios",
      "Évaluer les conséquences",
      "Préparer une solution de rechange",
    ],

    rightTitle:
      "Votre intuition",

    rightText:
      "Votre perception intérieure capte la qualité d’une situation avant que tous les éléments soient visibles.",

    rightItems: [
      "Observer votre première réaction",
      "Écouter les signaux corporels",
      "Reconnaître une impression répétée",
      "Sentir ce qui correspond à vos valeurs",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Page 54
  |--------------------------------------------------------------------------
  */

  "decision-making": {
    subtitle:
      "Une méthode personnelle pour choisir avec plus de clarté, de confiance et de cohérence.",

    introduction:
      "{firstName}, votre stratégie de décision gagnera en efficacité lorsque vous réduirez le nombre de critères secondaires.",

    keywords: [
      "Priorité",
      "Information",
      "Délai",
      "Engagement",
      "Révision",
    ],

    descriptions: [
      "Votre choix devient plus simple lorsque vous identifiez le résultat le plus important.",
      "Une information complémentaire peut être utile, mais elle ne remplacera pas toujours la décision.",
      "Un délai clair empêche l’analyse de devenir une forme d’évitement.",
      "Une fois le choix effectué, votre énergie doit se déplacer vers l’action.",
      "Certaines décisions pourront être ajustées à partir des premiers résultats.",
    ],

    advices: [
      "Définissez votre critère principal.",
      "Limitez le nombre d’avis extérieurs.",
      "Fixez une date de décision.",
      "Distinguez les choix réversibles des choix définitifs.",
    ],

    opportunity:
      "Une décision prise au bon moment peut libérer une énergie jusque-là immobilisée dans l’hésitation.",

    vigilance:
      "Accumuler davantage d’informations ne garantira pas nécessairement une meilleure décision.",

    conclusion:
      "Votre meilleure stratégie consiste à choisir avec suffisamment de clarté, puis à améliorer la décision par l’expérience.",

    heroTitle:
      "Choisir sans attendre une certitude impossible",

    heroText:
      "Cette année vous demande de transformer votre manière de décider. Vous avancez mieux lorsque vous définissez une priorité claire, vérifiez les éléments essentiels et acceptez une part normale d’incertitude.",

    heroAdvice:
      "Pour chaque décision importante, définissez un critère principal, une date limite et la première action à réaliser.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 55
  |--------------------------------------------------------------------------
  */

  "growth-areas": {
    subtitle:
      "Les domaines dans lesquels vos efforts peuvent produire les transformations les plus importantes.",

    introduction:
      "{firstName}, votre croissance ne dépend pas d’une remise en question permanente, mais d’un développement ciblé de quelques capacités essentielles.",

    keywords: [
      "Affirmation",
      "Patience",
      "Organisation",
      "Ouverture",
      "Constance",
    ],

    descriptions: [
      "Vous progressez lorsque vous exprimez plus clairement vos besoins et vos décisions.",
      "Certaines situations demandent de respecter un rythme plus long que prévu.",
      "Une meilleure structure vous permettra d’utiliser votre énergie avec davantage d’efficacité.",
      "Une idée différente de la vôtre peut enrichir votre compréhension sans annuler votre position.",
      "Votre capacité à poursuivre un effort simple déterminera plusieurs résultats importants.",
    ],

    advices: [
      "Choisissez un comportement précis à pratiquer.",
      "Évaluez vos progrès chaque mois.",
      "Demandez une rétroaction ciblée.",
      "Transformez une faiblesse en système de soutien.",
    ],

    opportunity:
      "Un défi régulier peut devenir le terrain principal de votre développement personnel.",

    vigilance:
      "Évitez de vouloir améliorer tous les domaines de votre vie en même temps.",

    conclusion:
      "Votre évolution globale sera plus profonde si vous acceptez de travailler patiemment sur quelques axes réellement prioritaires.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 56
  |--------------------------------------------------------------------------
  */

  "project-evolution": {
    subtitle:
      "Les étapes nécessaires pour transformer une intention en résultat concret et durable.",

    introduction:
      "{firstName}, vos projets progresseront lorsque vous séparerez clairement la vision, la préparation, l’exécution et la consolidation.",

    keywords: [
      "Vision",
      "Planification",
      "Lancement",
      "Ajustement",
      "Consolidation",
    ],

    descriptions: [
      "Vous clarifiez le résultat recherché et la raison pour laquelle ce projet mérite votre énergie.",
      "Les ressources, les étapes et les contraintes principales sont identifiées.",
      "Une première version ou une première action rend le projet réel.",
      "Les premiers résultats permettent de corriger la méthode.",
      "Le projet devient plus stable grâce à une organisation reproductible.",
    ],

    advices: [
      "Définissez une version minimale réalisable.",
      "Transformez les grandes étapes en actions courtes.",
      "Testez avant d’investir toutes vos ressources.",
      "Documentez ce qui fonctionne.",
    ],

    opportunity:
      "Une étape décisive peut être franchie plus rapidement que prévu si vous simplifiez le projet initial.",

    vigilance:
      "Le perfectionnisme pourrait retarder inutilement la mise en mouvement.",

    conclusion:
      "Votre chemin de concrétisation commence lorsque vous acceptez qu’une première version imparfaite vaut mieux qu’un projet idéal toujours reporté.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 57
  |--------------------------------------------------------------------------
  */

  "action-patience": {
    subtitle:
      "Reconnaître les moments où l’initiative est nécessaire et ceux où le temps travaille déjà pour vous.",

    introduction:
      "{firstName}, votre progression dépendra de votre capacité à ne pas utiliser la même vitesse pour toutes les situations.",

    keywords: [
      "Initiative",
      "Observation",
      "Impulsion",
      "Maturation",
      "Timing",
    ],

    descriptions: [
      "Certaines occasions demandent une réponse rapide avant que l’élan ne disparaisse.",
      "D’autres situations révèlent leur vraie nature seulement lorsqu’elles sont observées plus longtemps.",
      "Votre énergie d’action sera très efficace lorsqu’elle sera concentrée sur une priorité.",
      "Un projet ou une relation peut avoir besoin d’un délai naturel pour se développer.",
      "Le bon moment apparaît lorsque préparation intérieure et occasion extérieure se rencontrent.",
    ],

    advices: [
      "Agissez rapidement sur les décisions réversibles.",
      "Accordez plus de temps aux engagements majeurs.",
      "Ne confondez pas attente et inaction.",
      "Préparez-vous pendant les périodes plus lentes.",
    ],

    opportunity:
      "Une initiative bien placée peut accélérer fortement une situation qui était prête à évoluer.",

    vigilance:
      "Une impatience momentanée pourrait vous pousser à forcer une réponse encore immature.",

    conclusion:
      "Votre rythme idéal alterne préparation patiente et action déterminée.",

    leftTitle:
      "Le temps de l’action",

    leftText:
      "L’action est nécessaire lorsque les informations essentielles sont disponibles et que l’occasion possède une durée limitée.",

    leftItems: [
      "Répondre à une occasion claire",
      "Lancer une première version",
      "Exprimer une décision",
      "Interrompre une situation dommageable",
    ],

    rightTitle:
      "Le temps de la patience",

    rightText:
      "La patience devient utile lorsqu’un processus demande de la maturation, de l’observation ou une préparation supplémentaire.",

    rightItems: [
      "Laisser une relation évoluer",
      "Observer les premiers résultats",
      "Renforcer votre préparation",
      "Attendre une information déterminante",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Page 58
  |--------------------------------------------------------------------------
  */

  "annual-strategy": {
    subtitle:
      "La ligne directrice capable d’unifier vos décisions et de concentrer vos efforts sur ce qui compte réellement.",

    introduction:
      "{firstName}, votre stratégie dominante consiste à avancer avec sélectivité plutôt qu’à répondre à toutes les possibilités.",

    keywords: [
      "Priorisation",
      "Concentration",
      "Positionnement",
      "Adaptation",
      "Consolidation",
    ],

    descriptions: [
      "Vous obtenez davantage de résultats lorsque vous choisissez peu de priorités mais que vous les soutenez réellement.",
      "Votre concentration protège votre énergie contre les demandes secondaires.",
      "Une meilleure définition de votre rôle ou de votre valeur facilite vos décisions.",
      "Votre stratégie doit pouvoir évoluer sans perdre sa direction principale.",
      "Chaque progression mérite d’être stabilisée avant une nouvelle expansion.",
    ],

    advices: [
      "Définissez trois priorités annuelles maximum.",
      "Éliminez régulièrement les engagements secondaires.",
      "Mesurez vos progrès à intervalles fixes.",
      "Renforcez ce qui produit déjà des résultats.",
    ],

    opportunity:
      "Une concentration plus grande sur votre meilleur projet peut produire un résultat supérieur à plusieurs efforts dispersés.",

    vigilance:
      "Une nouvelle possibilité séduisante pourrait détourner votre énergie d’une priorité déjà prometteuse.",

    conclusion:
      "Votre ligne directrice est simple : choisir, concentrer, mesurer et consolider.",

    heroTitle:
      "Concentrer votre énergie sur ce qui peut réellement grandir",

    heroText:
      "Votre stratégie dominante repose sur la sélection. Vous n’avez pas besoin de multiplier les initiatives, mais d’identifier celles qui correspondent le mieux à vos objectifs et de leur donner une continuité réelle.",

    heroAdvice:
      "Avant chaque nouvel engagement, vérifiez s’il renforce une priorité existante ou s’il disperse votre énergie.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 59
  |--------------------------------------------------------------------------
  */

  "essential-lessons": {
    subtitle:
      "Les apprentissages majeurs qui peuvent modifier durablement votre manière de vivre, de choisir et de progresser.",

    introduction:
      "{firstName}, cette année ne vous apporte pas seulement des événements. Elle vous transmet aussi plusieurs leçons capables de transformer vos prochaines décisions.",

    keywords: [
      "Choisir avec clarté",
      "Respecter vos limites",
      "Faire confiance au temps",
      "Valoriser vos compétences",
      "Préserver l’essentiel",
    ],

    descriptions: [
      "Une décision imparfaite mais cohérente peut être plus féconde qu’une hésitation prolongée.",
      "Vos limites ne réduisent pas vos possibilités; elles protègent ce qui mérite réellement votre énergie.",
      "Certains résultats ne peuvent pas être accélérés, mais ils peuvent être préparés avec intelligence.",
      "Votre valeur augmente lorsque vous cessez de considérer vos compétences comme ordinaires.",
      "Votre année devient plus forte lorsque vous concentrez vos efforts sur ce qui a une vraie importance.",
    ],

    advices: [
      "Transformez chaque apprentissage en une règle personnelle simple.",
      "Observez les situations qui répètent le même message.",
      "Révisez vos priorités à la lumière de votre expérience.",
      "Conservez les habitudes qui ont réellement amélioré votre vie.",
    ],

    opportunity:
      "Une difficulté passée peut devenir une source de sagesse et améliorer une décision future.",

    vigilance:
      "Ne revenez pas automatiquement à une ancienne manière de fonctionner lorsque la pression augmente.",

    conclusion:
      "La sagesse acquise cette année repose sur votre capacité à choisir avec plus de conscience et à respecter davantage votre propre rythme.",
  },

  /*
  |--------------------------------------------------------------------------
  | Page 60
  |--------------------------------------------------------------------------
  */

  "premium-final-synthesis": {
    subtitle:
      "Une vision globale des forces, des décisions et des transformations qui donnent sa direction à votre année.",

    introduction:
      "{firstName}, votre année forme un parcours cohérent dans lequel chaque expérience contribue à préciser vos priorités et à renforcer votre autonomie.",

    keywords: [
      "Votre direction",
      "Votre force",
      "Votre transformation",
      "Votre opportunité",
      "Votre sagesse",
    ],

    descriptions: [
      "Votre année vous conduit vers des choix plus alignés avec vos valeurs et vos objectifs réels.",
      "Votre capacité de persévérance demeure l’une de vos ressources les plus importantes.",
      "Un ancien fonctionnement peut être remplacé par une manière plus libre et plus consciente d’avancer.",
      "Une ouverture importante apparaît lorsque vous acceptez de rendre votre travail ou votre intention plus visible.",
      "Votre plus grande leçon consiste à respecter votre rythme sans renoncer à votre ambition.",
    ],

    advices: [
      "Conservez une direction principale.",
      "Protégez votre énergie.",
      "Rendez vos progrès visibles.",
      "Réévaluez régulièrement vos priorités.",
    ],

    opportunity:
      "Votre plus grande ouverture apparaît lorsque vos compétences, votre expérience et votre confiance commencent à agir dans la même direction.",

    vigilance:
      "La dispersion demeure le principal risque capable de réduire l’impact de votre année.",

    conclusion:
      "Le message final de votre année est de ne plus sous-estimer la puissance d’une progression constante. Ce que vous construisez avec clarté, patience et cohérence peut dépasser vos attentes initiales.",
  },
};

/*
|--------------------------------------------------------------------------
| Thème de secours
|--------------------------------------------------------------------------
*/

const FALLBACK_THEME: YearPremiumTheme = {
  subtitle:
    "Une analyse approfondie des dynamiques qui influencent votre évolution annuelle.",

  introduction:
    "{firstName}, cette dimension de votre année révèle plusieurs possibilités d’évolution, mais demande aussi de respecter votre propre rythme.",

  keywords: [
    "Clarté",
    "Évolution",
    "Adaptation",
    "Confiance",
    "Consolidation",
  ],

  descriptions: [
    "Une compréhension plus claire vous permet de prendre de meilleures décisions.",
    "Une situation évolue lorsque vous acceptez d’adapter votre méthode.",
    "Votre progression demande une combinaison de patience et de détermination.",
    "Votre confiance augmente à travers les résultats concrets.",
    "Les changements récents doivent maintenant être consolidés.",
  ],

  advices: [
    "Définissez votre priorité.",
    "Avancez par étapes.",
    "Observez les résultats.",
    "Ajustez votre méthode.",
  ],

  opportunity:
    "Une nouvelle possibilité peut apparaître lorsque vous simplifiez votre approche.",

  vigilance:
    "Évitez de disperser votre énergie dans trop de directions.",

  conclusion:
    "Votre progression repose sur la clarté de vos choix et la continuité de vos efforts.",

  leftTitle:
    "Votre force",

  leftText:
    "Vous disposez des ressources nécessaires pour progresser avec davantage de confiance.",

  leftItems: [
    "Clarifier vos priorités",
    "Utiliser votre expérience",
    "Préserver votre énergie",
    "Maintenir votre constance",
  ],

  rightTitle:
    "Votre défi",

  rightText:
    "Votre principal défi consiste à éviter la dispersion et les décisions prises sous pression.",

  rightItems: [
    "Réduire les distractions",
    "Respecter votre rythme",
    "Exprimer vos limites",
    "Consolider vos résultats",
  ],

  heroTitle:
    "Avancer avec clarté et constance",

  heroText:
    "Cette influence vous invite à concentrer votre énergie sur une direction claire et à construire progressivement des résultats durables.",

  heroAdvice:
    "Choisissez une priorité et transformez-la en actions régulières.",
};

/*
|--------------------------------------------------------------------------
| Création des cartes
|--------------------------------------------------------------------------
*/

function buildCards(
  config: YearPremiumPageConfig,
  theme: YearPremiumTheme,
  seed: number,
): YearPremiumCardItem[] {
  const rotatedKeywords =
    rotateItems(
      theme.keywords,
      seed,
    );

  const rotatedDescriptions =
    rotateItems(
      theme.descriptions,
      seed + 1,
    );

  const cardCount =
    config.pageType === "summary"
      ? 5
      : 4;

  return Array.from(
    {
      length: cardCount,
    },
    (_, index): YearPremiumCardItem => {
      const keyword =
        rotatedKeywords[
          index %
            rotatedKeywords.length
        ];

      const description =
        rotatedDescriptions[
          index %
            rotatedDescriptions.length
        ];

      const advice =
        theme.advices[
          index %
            theme.advices.length
        ];

      return {
        title: keyword,

        label:
          config.pageType === "summary"
            ? `Clé ${index + 1}`
            : `Dimension ${index + 1}`,

        text: description,

        secondaryText:
          config.pageType === "summary"
            ? advice
            : undefined,

        score: scoreFromSeed(
          seed,
          index + 1,
        ),

        icon: config.icon,
      };
    },
  );
}

/*
|--------------------------------------------------------------------------
| Création de la chronologie
|--------------------------------------------------------------------------
*/

function buildTimeline(
  config: YearPremiumPageConfig,
  theme: YearPremiumTheme,
  seed: number,
): YearPremiumTimelineItem[] {
  const periods = [
    "Janvier à mars",
    "Avril à juin",
    "Juillet à septembre",
    "Octobre à décembre",
  ];

  const rotatedKeywords =
    rotateItems(
      theme.keywords,
      seed,
    );

  const rotatedDescriptions =
    rotateItems(
      theme.descriptions,
      seed + 2,
    );

  return periods.map(
    (
      timelinePeriod,
      index,
    ): YearPremiumTimelineItem => ({
      period: timelinePeriod,

      title:
        rotatedKeywords[
          index %
            rotatedKeywords.length
        ],

      text:
        rotatedDescriptions[
          index %
            rotatedDescriptions.length
        ],

      advice:
        theme.advices[
          index %
            theme.advices.length
        ],

      icon: config.icon,
    }),
  );
}

/*
|--------------------------------------------------------------------------
| Création des colonnes d’équilibre
|--------------------------------------------------------------------------
*/

function buildBalanceColumn(
  config: YearPremiumPageConfig,
  theme: YearPremiumTheme,
  side: "left" | "right",
): YearPremiumBalanceColumn {
  const isLeft =
    side === "left";

  return {
    title:
      isLeft
        ? theme.leftTitle ||
          "Votre première dynamique"
        : theme.rightTitle ||
          "Votre seconde dynamique",

    text:
      isLeft
        ? theme.leftText ||
          "Cette dynamique représente une force importante de votre évolution."
        : theme.rightText ||
          "Cette dynamique demande un ajustement afin de préserver votre équilibre.",

    items:
      isLeft
        ? theme.leftItems || [
          theme.keywords[0],
          theme.keywords[1],
          theme.keywords[2],
          theme.keywords[3],
        ]
        : theme.rightItems || [
          theme.descriptions[0],
          theme.descriptions[1],
          theme.descriptions[2],
          theme.descriptions[3],
        ],

    icon: config.icon,
  };
}

/*
|--------------------------------------------------------------------------
| Construction d’une page
|--------------------------------------------------------------------------
*/

function buildPremiumPage(
  config: YearPremiumPageConfig,
  identity: HoroscopeIdentity,
  period: HoroscopePeriodData,
): YearPremiumPageData {
  const theme =
    YEAR_PREMIUM_THEMES[
      config.key
    ] || FALLBACK_THEME;

  const seed =
    createSeed(
      identity,
      period,
      config.key,
    );

  const basePage: YearPremiumPageData = {
    key: config.key,

    pageType:
      config.pageType,

    eyebrow:
      config.eyebrow,

    title:
      config.title,

    subtitle:
      personalizeText(
        theme.subtitle,
        identity,
      ),

    icon:
      config.icon,

    score:
      scoreFromSeed(
        seed,
      ),

    scoreLabel:
      config.scoreLabel,

    introduction:
      personalizeText(
        theme.introduction,
        identity,
      ),

    opportunity:
      personalizeText(
        theme.opportunity,
        identity,
      ),

    vigilance:
      personalizeText(
        theme.vigilance,
        identity,
      ),

    conclusion:
      personalizeText(
        theme.conclusion,
        identity,
      ),
  };

  switch (
    config.pageType
  ) {
    case "hero":
      return {
        ...basePage,

        heroTitle:
          personalizeText(
            theme.heroTitle ||
              theme.keywords[0],
            identity,
          ),

        heroText:
          personalizeText(
            theme.heroText ||
              theme.descriptions[0],
            identity,
          ),

        advice:
          personalizeText(
            theme.heroAdvice ||
              theme.advices[0],
            identity,
          ),
      };

    case "grid":
      return {
        ...basePage,

        cards:
          buildCards(
            config,
            theme,
            seed,
          ),
      };

    case "timeline":
      return {
        ...basePage,

        timeline:
          buildTimeline(
            config,
            theme,
            seed,
          ),
      };

    case "balance":
      return {
        ...basePage,

        leftColumn:
          buildBalanceColumn(
            config,
            theme,
            "left",
          ),

        rightColumn:
          buildBalanceColumn(
            config,
            theme,
            "right",
          ),
      };

    case "summary":
      return {
        ...basePage,

        heroTitle:
          personalizeText(
            theme.heroTitle ||
              config.title,
            identity,
          ),

        cards:
          buildCards(
            config,
            theme,
            seed,
          ),
      };

    default:
      return basePage;
  }
}

/*
|--------------------------------------------------------------------------
| Génération des pages 33 à 60
|--------------------------------------------------------------------------
*/

export function buildYearPremiumPages({
  identity,
  period,
}: BuildYearPremiumPagesParams): YearPremiumPageData[] {
  return YEAR_PREMIUM_PAGES_CONFIG.map(
    (config) =>
      buildPremiumPage(
        config,
        identity,
        period,
      ),
  );
}

/*
|--------------------------------------------------------------------------
| Génération d’une seule page
|--------------------------------------------------------------------------
*/

export function buildYearPremiumPageByKey({
  identity,
  period,
  key,
}: BuildYearPremiumPagesParams & {
  key: string;
}): YearPremiumPageData | null {
  const config =
    YEAR_PREMIUM_PAGES_CONFIG.find(
      (item) =>
        item.key === key,
    );

  if (!config) {
    return null;
  }

  return buildPremiumPage(
    config,
    identity,
    period,
  );
}
