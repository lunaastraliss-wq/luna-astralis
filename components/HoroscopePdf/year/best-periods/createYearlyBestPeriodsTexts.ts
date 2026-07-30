import type {
  HoroscopeZodiacSign,
} from "../../HoroscopePdfTypes";

import type {
  YearBestPeriodCategory,
} from "../data/types";

/*
|--------------------------------------------------------------------------
| Types internes
|--------------------------------------------------------------------------
*/

export type YearlyBestPeriodCategoryTexts = {
  title: string;

  texts: readonly string[];

  advice: readonly string[];
};

export type YearlyBestPeriodsTexts = {
  introduction: readonly string[];

  categories: Record<
    YearBestPeriodCategory,
    YearlyBestPeriodCategoryTexts
  >;

  favorableIntroduction: readonly string[];

  cautionIntroduction: readonly string[];

  synthesis: readonly string[];

  conclusion: readonly string[];
};

/*
|--------------------------------------------------------------------------
| Profil du signe
|--------------------------------------------------------------------------
*/

type BestPeriodsSignProfile = {
  loveStrength: string;
  careerStrength: string;
  financeStrength: string;
  projectStrength: string;

  loveChallenge: string;
  careerChallenge: string;
  financeChallenge: string;
  projectChallenge: string;
};

const SIGN_PROFILES: Record<
  string,
  BestPeriodsSignProfile
> = {
  belier: {
    loveStrength:
      "votre spontanéité et votre franchise",

    careerStrength:
      "votre courage et votre capacité d’initiative",

    financeStrength:
      "votre rapidité à reconnaître une occasion",

    projectStrength:
      "votre énergie de démarrage",

    loveChallenge:
      "les réactions affectives trop rapides",

    careerChallenge:
      "l’impatience devant les résultats",

    financeChallenge:
      "les décisions financières impulsives",

    projectChallenge:
      "la tendance à commencer trop de choses à la fois",
  },

  taureau: {
    loveStrength:
      "votre fidélité et votre stabilité",

    careerStrength:
      "votre persévérance et votre fiabilité",

    financeStrength:
      "votre prudence et votre sens pratique",

    projectStrength:
      "votre capacité à construire sur des bases solides",

    loveChallenge:
      "la difficulté à modifier certaines habitudes relationnelles",

    careerChallenge:
      "la résistance aux nouvelles méthodes",

    financeChallenge:
      "l’attachement excessif à la sécurité",

    projectChallenge:
      "la peur de sortir de votre zone de confort",
  },

  gemeaux: {
    loveStrength:
      "votre curiosité et votre facilité à communiquer",

    careerStrength:
      "votre adaptabilité et votre intelligence",

    financeStrength:
      "votre capacité à repérer plusieurs possibilités",

    projectStrength:
      "votre créativité mentale et votre souplesse",

    loveChallenge:
      "la dispersion émotionnelle",

    careerChallenge:
      "le manque de continuité",

    financeChallenge:
      "les décisions prises sans analyse suffisante",

    projectChallenge:
      "la tendance à changer trop rapidement de direction",
  },

  cancer: {
    loveStrength:
      "votre sensibilité et votre intuition",

    careerStrength:
      "votre loyauté et votre capacité à comprendre les besoins",

    financeStrength:
      "votre désir de créer une sécurité durable",

    projectStrength:
      "votre capacité à protéger et à faire grandir une idée",

    loveChallenge:
      "l’hypersensibilité et le repli",

    careerChallenge:
      "la difficulté à séparer les émotions des décisions",

    financeChallenge:
      "les dépenses influencées par l’état émotionnel",

    projectChallenge:
      "la peur de quitter des repères familiers",
  },

  lion: {
    loveStrength:
      "votre chaleur et votre générosité",

    careerStrength:
      "votre charisme et votre confiance",

    financeStrength:
      "votre ambition et votre sens de la valeur",

    projectStrength:
      "votre créativité et votre capacité à inspirer",

    loveChallenge:
      "le besoin excessif de reconnaissance",

    careerChallenge:
      "la difficulté à accepter un rôle moins visible",

    financeChallenge:
      "les dépenses liées à l’image ou au prestige",

    projectChallenge:
      "l’entêtement lorsque des ajustements deviennent nécessaires",
  },

  vierge: {
    loveStrength:
      "votre attention et votre fiabilité",

    careerStrength:
      "votre méthode et votre sens de l’organisation",

    financeStrength:
      "votre capacité d’analyse et votre prudence",

    projectStrength:
      "votre précision et votre constance",

    loveChallenge:
      "l’analyse excessive des émotions",

    careerChallenge:
      "le perfectionnisme",

    financeChallenge:
      "l’inquiétude devant l’incertitude",

    projectChallenge:
      "la difficulté à commencer avant que tout soit parfait",
  },

  balance: {
    loveStrength:
      "votre diplomatie et votre sens de l’harmonie",

    careerStrength:
      "votre capacité à collaborer",

    financeStrength:
      "votre recherche d’équilibre",

    projectStrength:
      "votre sens esthétique et relationnel",

    loveChallenge:
      "les compromis excessifs",

    careerChallenge:
      "l’hésitation devant les choix importants",

    financeChallenge:
      "la difficulté à établir des limites claires",

    projectChallenge:
      "la dépendance à l’approbation extérieure",
  },

  scorpion: {
    loveStrength:
      "votre profondeur et votre intensité émotionnelle",

    careerStrength:
      "votre détermination et votre lucidité",

    financeStrength:
      "votre instinct stratégique",

    projectStrength:
      "votre puissance de transformation",

    loveChallenge:
      "la méfiance et le besoin de contrôle",

    careerChallenge:
      "les rapports de force",

    financeChallenge:
      "les décisions radicales",

    projectChallenge:
      "la difficulté à abandonner une direction devenue inefficace",
  },

  sagittaire: {
    loveStrength:
      "votre enthousiasme et votre ouverture",

    careerStrength:
      "votre vision et votre optimisme",

    financeStrength:
      "votre capacité à voir grand",

    projectStrength:
      "votre audace et votre désir d’expansion",

    loveChallenge:
      "la peur de perdre votre liberté",

    careerChallenge:
      "la dispersion entre plusieurs objectifs",

    financeChallenge:
      "les excès de confiance",

    projectChallenge:
      "le manque de préparation avant l’action",
  },

  capricorne: {
    loveStrength:
      "votre loyauté et votre maturité",

    careerStrength:
      "votre discipline et votre ambition",

    financeStrength:
      "votre sens de la planification",

    projectStrength:
      "votre endurance et votre stratégie",

    loveChallenge:
      "la difficulté à exprimer votre vulnérabilité",

    careerChallenge:
      "le surmenage",

    financeChallenge:
      "une prudence parfois excessive",

    projectChallenge:
      "la rigidité devant les changements de plan",
  },

  verseau: {
    loveStrength:
      "votre authenticité et votre ouverture d’esprit",

    careerStrength:
      "votre originalité et votre vision",

    financeStrength:
      "votre capacité à explorer de nouvelles solutions",

    projectStrength:
      "votre inventivité et votre indépendance",

    loveChallenge:
      "le détachement émotionnel",

    careerChallenge:
      "la difficulté à suivre des structures trop rigides",

    financeChallenge:
      "les choix inhabituels insuffisamment vérifiés",

    projectChallenge:
      "les changements brusques de direction",
  },

  poissons: {
    loveStrength:
      "votre compassion et votre intuition",

    careerStrength:
      "votre créativité et votre sensibilité",

    financeStrength:
      "votre capacité à ressentir le potentiel d’une situation",

    projectStrength:
      "votre imagination et votre inspiration",

    loveChallenge:
      "l’idéalisation des relations",

    careerChallenge:
      "le manque de limites claires",

    financeChallenge:
      "les décisions guidées uniquement par l’émotion",

    projectChallenge:
      "la difficulté à transformer une vision en étapes concrètes",
  },
};

/*
|--------------------------------------------------------------------------
| Normalisation du signe
|--------------------------------------------------------------------------
*/

function normalizeSign(
  zodiacSign: HoroscopeZodiacSign,
): string {
  return String(zodiacSign)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      "",
    );
}

/*
|--------------------------------------------------------------------------
| Récupération du profil
|--------------------------------------------------------------------------
*/

function getSignProfile(
  zodiacSign: HoroscopeZodiacSign,
): BestPeriodsSignProfile {
  const normalizedSign =
    normalizeSign(zodiacSign);

  return (
    SIGN_PROFILES[normalizedSign] ??
    SIGN_PROFILES.belier
  );
}

/*
|--------------------------------------------------------------------------
| Création des textes
|--------------------------------------------------------------------------
*/

export function createYearlyBestPeriodsTexts(
  zodiacSign: HoroscopeZodiacSign,
): YearlyBestPeriodsTexts {
  const profile =
    getSignProfile(zodiacSign);

  return {
    introduction: [
      "Certaines périodes de votre année possèdent une énergie particulièrement favorable. Elles peuvent soutenir vos relations, votre carrière, vos finances ou le lancement de nouveaux projets.",

      "Votre année comprend plusieurs fenêtres d’opportunité. En reconnaissant leur nature, vous pourrez choisir plus consciemment les moments où agir, décider ou vous engager.",

      "Les meilleurs moments de votre année ne concernent pas tous les mêmes domaines. Chaque période favorable possède une fonction précise dans votre évolution.",

      "Cette analyse met en lumière les mois où votre potentiel sera le plus facile à mobiliser, ainsi que les périodes qui demanderont davantage de prudence.",

      "Votre calendrier annuel révèle plusieurs moments stratégiques. Ils pourront faciliter certaines décisions lorsque vos actions restent cohérentes avec vos priorités.",
    ],

    categories: {
      love: {
        title:
          "Meilleure période en amour",

        texts: [
          `Ce mois favorise les rapprochements, les conversations sincères et les décisions affectives importantes. ${profile.loveStrength} devient un avantage essentiel.`,

          `Le climat relationnel de cette période soutient une meilleure compréhension de vos besoins. Vous pourrez renforcer un lien existant ou accueillir une nouvelle ouverture affective.`,

          `Cette période possède une énergie favorable pour exprimer vos sentiments, clarifier une relation ou construire une plus grande complicité.`,

          `Les relations gagnent en fluidité durant ce mois. Votre disponibilité émotionnelle pourra créer un rapprochement significatif.`,

          `Ce mois vous aide à mieux unir désir, confiance et réciprocité. Une relation peut évoluer de manière plus naturelle et plus équilibrée.`,
        ],

        advice: [
          `Utilisez ${profile.loveStrength}, mais restez attentif à ${profile.loveChallenge}.`,

          "Exprimez vos besoins clairement sans chercher à contrôler la réaction de l’autre.",

          "Accordez davantage de place aux échanges authentiques qu’aux suppositions.",

          "Observez la réciprocité avant de vous engager plus profondément.",

          "Profitez de cette période pour créer un climat de confiance durable.",
        ],
      },

      career: {
        title:
          "Meilleure période professionnelle",

        texts: [
          `Cette période favorise la progression, la reconnaissance et les décisions liées à votre carrière. ${profile.careerStrength} peut vous permettre de vous démarquer.`,

          `Le mois soutient les démarches professionnelles et les projets ambitieux. Une occasion de montrer votre valeur ou d’élargir vos responsabilités peut apparaître.`,

          `Votre position professionnelle peut évoluer favorablement. Les actions entreprises durant cette période auront davantage de visibilité.`,

          `Ce mois encourage les négociations, les candidatures, les présentations et les décisions capables de faire progresser votre parcours.`,

          `Une énergie constructive soutient votre ambition. Votre constance et votre capacité à saisir le bon moment pourront produire un résultat important.`,
        ],

        advice: [
          `Appuyez-vous sur ${profile.careerStrength}, tout en évitant ${profile.careerChallenge}.`,

          "Présentez clairement votre valeur et les résultats que vous pouvez apporter.",

          "Concentrez-vous sur les occasions qui servent réellement votre progression à long terme.",

          "Préparez vos démarches avant d’agir afin de profiter pleinement de cette période.",

          "N’attendez pas que votre travail soit remarqué spontanément : rendez vos réalisations visibles.",
        ],
      },

      finance: {
        title:
          "Meilleure période financière",

        texts: [
          `Cette période favorise les décisions matérielles, l’amélioration des revenus et la consolidation de votre sécurité. ${profile.financeStrength} sera particulièrement utile.`,

          `Le mois possède un potentiel financier constructif. Une occasion d’améliorer votre organisation, vos revenus ou votre stratégie peut se présenter.`,

          `Les questions d’argent bénéficient d’un climat plus favorable. Les décisions réfléchies pourront produire des résultats durables.`,

          `Cette période vous aide à mieux reconnaître les choix capables de renforcer votre stabilité matérielle.`,

          `Une possibilité de progression financière peut apparaître, à condition de vérifier les détails et de conserver une vision réaliste.`,
        ],

        advice: [
          `Utilisez ${profile.financeStrength}, mais surveillez ${profile.financeChallenge}.`,

          "Analysez les bénéfices et les risques avant de prendre une décision importante.",

          "Privilégiez les occasions capables de produire une amélioration durable.",

          "Profitez de ce mois pour revoir vos prix, vos revenus, vos dépenses ou votre stratégie.",

          "Conservez une marge de sécurité même lorsque la période semble favorable.",
        ],
      },

      project: {
        title:
          "Meilleure période pour entreprendre",

        texts: [
          `Ce mois favorise le lancement, la relance ou l’accélération d’un projet important. ${profile.projectStrength} devient l’un de vos principaux atouts.`,

          `Une énergie de commencement soutient vos initiatives. Les actions posées maintenant peuvent créer un mouvement durable.`,

          `Cette période vous aide à transformer une idée en plan concret. Votre motivation sera plus facile à mobiliser.`,

          `Le mois possède un potentiel favorable pour officialiser une décision, présenter un projet ou commencer une nouvelle étape.`,

          `Une fenêtre d’action s’ouvre devant vous. Elle favorise les projets préparés avec sérieux et portés par une intention claire.`,
        ],

        advice: [
          `Faites confiance à ${profile.projectStrength}, mais évitez ${profile.projectChallenge}.`,

          "Définissez la première étape concrète avant de chercher à tout accomplir.",

          "Utilisez cette période pour créer un élan, puis protégez-le avec une organisation réaliste.",

          "Vérifiez que votre projet correspond toujours à vos priorités à long terme.",

          "Commencez avec une structure simple que vous pourrez améliorer progressivement.",
        ],
      },
    },

    favorableIntroduction: [
      "Ces trois mois possèdent les scores les plus élevés de votre calendrier annuel. Ils représentent vos principales fenêtres d’expansion et d’action.",

      "Les périodes suivantes concentrent le potentiel le plus favorable de votre année. Elles pourront soutenir plusieurs avancées importantes.",

      "Ces mois offrent un climat particulièrement constructif. Vos initiatives pourront y rencontrer moins de résistance et davantage d’ouverture.",

      "Votre calendrier révèle trois périodes majeures durant lesquelles votre énergie, votre clarté et vos possibilités seront renforcées.",

      "Ces fenêtres favorables méritent une attention particulière. Elles peuvent devenir des moments stratégiques pour faire progresser vos priorités.",
    ],

    cautionIntroduction: [
      "Ces périodes demandent davantage de vigilance. Elles ne sont pas nécessairement négatives, mais elles favorisent la réflexion, les corrections et la prudence.",

      "Les mois suivants possèdent une énergie plus exigeante. Il sera préférable d’y éviter les décisions impulsives et les engagements insuffisamment préparés.",

      "Ces périodes peuvent révéler des limites, des retards ou des tensions utiles à votre évolution. La patience deviendra alors un avantage.",

      "Votre calendrier identifie certains mois où votre énergie devra être mieux protégée. Ils seront plus adaptés aux ajustements qu’aux prises de risque.",

      "Ces moments plus délicats vous inviteront à ralentir, à vérifier les faits et à préserver vos ressources.",
    ],

    synthesis: [
      "Vos meilleures périodes ne se limitent pas à une impression générale de chance. Chacune soutient un domaine précis et demande une manière différente d’utiliser son potentiel.",

      "L’année vous offre plusieurs fenêtres d’action complémentaires. En choisissant le bon moment selon votre objectif, vous pourrez avancer avec davantage de fluidité.",

      "Le véritable avantage de cette analyse consiste à harmoniser vos décisions avec le rythme de votre année plutôt qu’à forcer les résultats.",

      "Les périodes favorables soutiendront vos initiatives, tandis que les mois plus délicats vous aideront à renforcer votre stratégie et à éviter certaines erreurs.",

      "Votre progression dépendra autant de votre capacité à saisir les occasions que de votre sagesse à respecter les périodes de ralentissement.",
    ],

    conclusion: [
      "Utilisez ces périodes comme des repères stratégiques, tout en conservant votre libre arbitre et votre capacité d’adaptation.",

      "Les mois favorables ouvrent des possibilités, mais vos décisions et votre constance détermineront la manière dont elles se concrétiseront.",

      "Préparez vos actions avant les périodes les plus porteuses afin de pouvoir profiter pleinement de leur potentiel.",

      "Respectez les périodes plus exigeantes sans les craindre. Elles peuvent vous permettre de corriger une trajectoire avant une nouvelle phase d’expansion.",

      "Votre meilleure stratégie consistera à agir avec confiance lorsque le climat est ouvert et avec discernement lorsqu’il demande davantage de prudence.",
    ],
  };
}
