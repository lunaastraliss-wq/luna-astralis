import type {
  HoroscopeZodiacSign,
} from "../../HoroscopePdfTypes";

/*
|--------------------------------------------------------------------------
| Types internes
|--------------------------------------------------------------------------
*/

export type YearlyCalendarThemeTexts = {
  theme: string;
  texts: readonly string[];
  advice: readonly string[];
};

export type YearlyCalendarTexts = {
  introduction: readonly string[];

  themes: readonly YearlyCalendarThemeTexts[];

  favorableTexts: readonly string[];

  balancedTexts: readonly string[];

  cautionTexts: readonly string[];

  synthesis: readonly string[];

  conclusion: readonly string[];
};

/*
|--------------------------------------------------------------------------
| Profil annuel simplifié par signe
|--------------------------------------------------------------------------
*/

type YearlyCalendarSignProfile = {
  strengths: readonly string[];
  challenges: readonly string[];
  priorities: readonly string[];
};

const SIGN_PROFILES: Record<
  string,
  YearlyCalendarSignProfile
> = {
  belier: {
    strengths: [
      "votre courage",
      "votre capacité d’initiative",
      "votre énergie d’action",
      "votre détermination",
    ],

    challenges: [
      "l’impatience",
      "les décisions précipitées",
      "la dispersion de votre énergie",
      "les réactions impulsives",
    ],

    priorities: [
      "vos nouveaux projets",
      "votre affirmation personnelle",
      "votre vie professionnelle",
      "votre autonomie",
    ],
  },

  taureau: {
    strengths: [
      "votre persévérance",
      "votre sens pratique",
      "votre stabilité",
      "votre patience",
    ],

    challenges: [
      "la résistance au changement",
      "les attachements excessifs",
      "la rigidité",
      "la peur de perdre vos repères",
    ],

    priorities: [
      "votre sécurité matérielle",
      "vos finances",
      "votre vie affective",
      "la consolidation de vos projets",
    ],
  },

  gemeaux: {
    strengths: [
      "votre adaptabilité",
      "votre curiosité",
      "votre intelligence relationnelle",
      "votre capacité à communiquer",
    ],

    challenges: [
      "la dispersion",
      "l’indécision",
      "la nervosité",
      "le manque de continuité",
    ],

    priorities: [
      "vos communications",
      "vos apprentissages",
      "vos relations sociales",
      "vos nouveaux projets",
    ],
  },

  cancer: {
    strengths: [
      "votre intuition",
      "votre sensibilité",
      "votre loyauté",
      "votre capacité à protéger",
    ],

    challenges: [
      "l’hypersensibilité",
      "le repli émotionnel",
      "la nostalgie",
      "la difficulté à lâcher prise",
    ],

    priorities: [
      "votre foyer",
      "votre sécurité émotionnelle",
      "vos relations familiales",
      "votre équilibre intérieur",
    ],
  },

  lion: {
    strengths: [
      "votre créativité",
      "votre charisme",
      "votre confiance",
      "votre générosité",
    ],

    challenges: [
      "le besoin de reconnaissance",
      "l’orgueil",
      "la dramatisation",
      "l’entêtement",
    ],

    priorities: [
      "votre expression personnelle",
      "vos projets créatifs",
      "votre carrière",
      "votre rayonnement",
    ],
  },

  vierge: {
    strengths: [
      "votre sens de l’organisation",
      "votre capacité d’analyse",
      "votre fiabilité",
      "votre discipline",
    ],

    challenges: [
      "le perfectionnisme",
      "l’autocritique",
      "l’inquiétude",
      "le besoin de tout contrôler",
    ],

    priorities: [
      "votre organisation quotidienne",
      "votre travail",
      "votre bien-être",
      "l’amélioration de vos projets",
    ],
  },

  balance: {
    strengths: [
      "votre diplomatie",
      "votre sens de l’équilibre",
      "votre capacité d’écoute",
      "votre élégance relationnelle",
    ],

    challenges: [
      "l’indécision",
      "l’évitement des conflits",
      "les compromis excessifs",
      "la dépendance au regard des autres",
    ],

    priorities: [
      "vos relations",
      "vos engagements",
      "votre équilibre personnel",
      "vos collaborations",
    ],
  },

  scorpion: {
    strengths: [
      "votre profondeur",
      "votre résilience",
      "votre intuition",
      "votre détermination",
    ],

    challenges: [
      "le besoin de contrôle",
      "la méfiance",
      "les réactions radicales",
      "les attachements émotionnels intenses",
    ],

    priorities: [
      "votre transformation personnelle",
      "vos relations profondes",
      "votre pouvoir intérieur",
      "vos projets à long terme",
    ],
  },

  sagittaire: {
    strengths: [
      "votre optimisme",
      "votre vision",
      "votre enthousiasme",
      "votre ouverture d’esprit",
    ],

    challenges: [
      "les excès",
      "la dispersion",
      "l’imprudence",
      "le manque de constance",
    ],

    priorities: [
      "votre expansion",
      "vos voyages",
      "vos apprentissages",
      "vos projets d’avenir",
    ],
  },

  capricorne: {
    strengths: [
      "votre discipline",
      "votre endurance",
      "votre sens stratégique",
      "votre maturité",
    ],

    challenges: [
      "la rigidité",
      "le surmenage",
      "le pessimisme",
      "la difficulté à ralentir",
    ],

    priorities: [
      "votre carrière",
      "vos responsabilités",
      "vos objectifs à long terme",
      "votre sécurité matérielle",
    ],
  },

  verseau: {
    strengths: [
      "votre originalité",
      "votre indépendance",
      "votre vision",
      "votre inventivité",
    ],

    challenges: [
      "le détachement",
      "l’imprévisibilité",
      "l’entêtement",
      "les ruptures brusques",
    ],

    priorities: [
      "vos projets innovants",
      "votre liberté",
      "vos relations sociales",
      "votre vision de l’avenir",
    ],
  },

  poissons: {
    strengths: [
      "votre intuition",
      "votre imagination",
      "votre compassion",
      "votre créativité",
    ],

    challenges: [
      "la confusion",
      "l’idéalisme excessif",
      "la fuite",
      "les limites émotionnelles fragiles",
    ],

    priorities: [
      "votre monde intérieur",
      "votre créativité",
      "votre équilibre émotionnel",
      "votre évolution spirituelle",
    ],
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
| Profil du signe
|--------------------------------------------------------------------------
*/

function getSignProfile(
  zodiacSign: HoroscopeZodiacSign,
): YearlyCalendarSignProfile {
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

export function createYearlyCalendarTexts(
  zodiacSign: HoroscopeZodiacSign,
): YearlyCalendarTexts {
  const profile =
    getSignProfile(zodiacSign);

  const [
    strengthOne,
    strengthTwo,
    strengthThree,
    strengthFour,
  ] = profile.strengths;

  const [
    challengeOne,
    challengeTwo,
    challengeThree,
    challengeFour,
  ] = profile.challenges;

  const [
    priorityOne,
    priorityTwo,
    priorityThree,
    priorityFour,
  ] = profile.priorities;

  return {
    introduction: [
      "Votre calendrier astrologique présente les douze grandes étapes de votre année. Chaque mois possède son propre rythme, ses occasions d’évolution et ses points de vigilance.",

      "Les douze mois à venir formeront un parcours progressif. Certaines périodes favoriseront l’action, tandis que d’autres vous inviteront à ralentir, à observer et à ajuster vos choix.",

      "Ce calendrier vous permet de visualiser les principaux mouvements de votre année et de mieux comprendre les moments propices à l’action, à la réflexion ou à la consolidation.",

      "Votre année ne suivra pas une progression parfaitement linéaire. Les périodes d’expansion alterneront avec des phases de recentrage nécessaires à votre évolution.",

      "Chaque mois apportera une nuance différente à votre parcours. En respectant le rythme de chaque période, vous pourrez utiliser plus consciemment les possibilités offertes par l’année.",
    ],

    themes: [
      {
        theme: "Nouveaux départs",

        texts: [
          `Une dynamique de renouveau stimule ${priorityOne}. Cette période favorise les décisions capables de donner une nouvelle direction à votre année.`,

          `Le mois ouvre une porte vers de nouvelles possibilités concernant ${priorityOne}. Votre capacité à prendre une initiative mesurée pourra faire évoluer rapidement la situation.`,

          `Une nouvelle étape se dessine autour de ${priorityOne}. Les choix posés maintenant pourront influencer plusieurs mois de votre parcours.`,
        ],

        advice: [
          `Appuyez-vous sur ${strengthOne}, mais évitez ${challengeOne}.`,

          "Commencez par une action claire plutôt que de vouloir transformer toute la situation immédiatement.",

          "Définissez votre priorité avant de vous engager dans plusieurs directions à la fois.",
        ],
      },

      {
        theme: "Progression professionnelle",

        texts: [
          `Le climat du mois soutient l’évolution de ${priorityTwo}. Une occasion de démontrer vos compétences ou de consolider votre position pourrait apparaître.`,

          `Votre progression dépendra de votre capacité à utiliser ${strengthTwo} avec constance. Les résultats les plus importants viendront d’une stratégie bien structurée.`,

          `Une décision professionnelle ou matérielle pourrait modifier vos objectifs. Cette période vous invite à agir avec ambition sans négliger les détails.`,
        ],

        advice: [
          `Utilisez ${strengthTwo} pour avancer, tout en surveillant ${challengeTwo}.`,

          "Concentrez votre énergie sur les démarches qui offrent un potentiel durable.",

          "Évitez de sous-estimer les petites actions régulières : elles construiront les résultats les plus solides.",
        ],
      },

      {
        theme: "Relations et rapprochements",

        texts: [
          `Les relations prennent davantage de place durant cette période. Les échanges concernant ${priorityThree} pourront devenir plus profonds et plus révélateurs.`,

          `Le mois favorise une meilleure compréhension de vos besoins affectifs. Certaines conversations permettront de clarifier une relation ou un engagement.`,

          `Une ouverture relationnelle peut créer de nouvelles possibilités. Votre sincérité sera essentielle pour établir des liens plus équilibrés.`,
        ],

        advice: [
          `Laissez ${strengthThree} guider vos échanges sans céder à ${challengeThree}.`,

          "Exprimez clairement vos besoins plutôt que d’attendre que les autres les devinent.",

          "Privilégiez les relations dans lesquelles l’écoute et la réciprocité sont réellement présentes.",
        ],
      },

      {
        theme: "Consolidation financière",

        texts: [
          `La période vous invite à renforcer votre stabilité et à examiner plus attentivement les décisions liées à ${priorityFour}.`,

          `Les questions matérielles demandent une approche méthodique. Une meilleure organisation pourra vous permettre de sécuriser vos acquis.`,

          `Ce mois favorise la consolidation plutôt que les prises de risque. Les décisions prudentes pourront produire des effets durables.`,
        ],

        advice: [
          `Faites confiance à ${strengthFour}, mais restez attentif à ${challengeFour}.`,

          "Vérifiez les conséquences à long terme avant de prendre une décision financière importante.",

          "Privilégiez la stabilité et la préparation plutôt que les résultats immédiats.",
        ],
      },

      {
        theme: "Transformation intérieure",

        texts: [
          "Une transformation discrète mais importante s’opère dans votre manière de percevoir vos priorités. Certaines anciennes certitudes peuvent évoluer.",

          "Le mois favorise les prises de conscience et la libération de comportements qui ne correspondent plus à votre évolution.",

          "Une période d’introspection vous aide à comprendre ce que vous souhaitez conserver, modifier ou laisser derrière vous.",
        ],

        advice: [
          "Accueillez les prises de conscience sans chercher à obtenir immédiatement toutes les réponses.",

          "Donnez-vous le droit de modifier une décision devenue incompatible avec vos besoins.",

          "Laissez les changements intérieurs se préciser avant de les transformer en décisions définitives.",
        ],
      },

      {
        theme: "Créativité et expression",

        texts: [
          "Votre créativité devient une source importante de motivation. Une idée personnelle pourrait prendre une forme plus concrète.",

          "Le mois favorise l’expression, l’innovation et les projets qui reflètent davantage votre personnalité.",

          "Une énergie créative vous encourage à sortir des habitudes et à explorer une nouvelle manière de vous exprimer.",
        ],

        advice: [
          "Ne jugez pas trop rapidement vos idées : accordez-leur le temps de se développer.",

          "Transformez votre inspiration en une action concrète, même modeste.",

          "Choisissez un projet capable de réunir plaisir, sens et potentiel d’évolution.",
        ],
      },

      {
        theme: "Organisation et équilibre",

        texts: [
          "Le mois vous invite à réorganiser votre quotidien afin de mieux protéger votre énergie et vos priorités.",

          "Une meilleure gestion de votre temps pourra réduire la pression et améliorer votre efficacité.",

          "La période favorise le tri, la simplification et la mise en place de nouvelles habitudes plus équilibrées.",
        ],

        advice: [
          "Éliminez une obligation devenue inutile avant d’en ajouter une nouvelle.",

          "Construisez un rythme réaliste plutôt qu’un programme impossible à maintenir.",

          "Accordez autant d’importance à votre récupération qu’à votre productivité.",
        ],
      },

      {
        theme: "Ouverture et expansion",

        texts: [
          "Une occasion d’élargir vos horizons pourrait se présenter. Elle peut concerner un projet, une rencontre ou un nouvel apprentissage.",

          "Le mois encourage l’exploration et les décisions capables d’ouvrir votre parcours à de nouvelles possibilités.",

          "Une énergie d’expansion stimule votre confiance et vous invite à regarder au-delà de vos limites habituelles.",
        ],

        advice: [
          "Restez ouvert aux occasions nouvelles sans perdre de vue vos priorités essentielles.",

          "Évaluez le potentiel réel d’une proposition avant de vous engager.",

          "Saisissez les occasions qui favorisent une croissance durable plutôt qu’un enthousiasme passager.",
        ],
      },

      {
        theme: "Décisions importantes",

        texts: [
          "Une situation demande une prise de position plus claire. Reporter la décision pourrait maintenir une incertitude devenue pesante.",

          "Le mois vous place devant un choix susceptible de modifier la suite de votre année.",

          "Une décision importante peut devenir nécessaire afin de préserver votre cohérence et votre progression.",
        ],

        advice: [
          "Distinguez ce que vous souhaitez vraiment de ce que les autres attendent de vous.",

          "Prenez le temps de vérifier les faits avant de suivre une réaction émotionnelle.",

          "Choisissez la direction qui reste cohérente avec vos objectifs à long terme.",
        ],
      },

      {
        theme: "Ralentissement nécessaire",

        texts: [
          "Le rythme ralentit afin de vous permettre d’observer les résultats obtenus et de corriger certaines décisions.",

          "Cette période demande davantage de patience. Les retards éventuels peuvent révéler un élément qui avait été négligé.",

          "Le mois favorise la réflexion, la récupération et la préparation plutôt que les actions précipitées.",
        ],

        advice: [
          "Ne considérez pas un ralentissement comme un échec : utilisez-le pour améliorer votre stratégie.",

          "Évitez de forcer une situation qui demande encore du temps.",

          "Profitez de cette période pour terminer, vérifier et simplifier.",
        ],
      },

      {
        theme: "Récolte et reconnaissance",

        texts: [
          "Les efforts des derniers mois peuvent commencer à produire des résultats plus visibles. Une forme de reconnaissance devient possible.",

          "Le mois met en lumière les progrès accomplis et vous aide à mieux mesurer la valeur de votre constance.",

          "Une période constructive permet de récolter les effets d’une décision ou d’un engagement antérieur.",
        ],

        advice: [
          "Reconnaissez votre progression sans relâcher les efforts qui ont permis ces résultats.",

          "Utilisez cette période favorable pour consolider votre position.",

          "Partagez vos réussites avec discernement et préparez déjà la prochaine étape.",
        ],
      },

      {
        theme: "Clôture et préparation",

        texts: [
          "Une étape arrive à son terme. Cette période vous aide à comprendre ce qui doit être conservé avant d’ouvrir un nouveau cycle.",

          "Le mois favorise les bilans, les ajustements et la préparation des projets à venir.",

          "Une phase de clôture permet de libérer de l’espace pour de nouvelles priorités.",
        ],

        advice: [
          "Terminez ce qui peut l’être avant de vous lancer dans une nouvelle direction.",

          "Faites un bilan honnête de vos progrès, de vos erreurs et de vos besoins.",

          "Préparez la prochaine étape sans chercher à contrôler immédiatement tous ses détails.",
        ],
      },
    ],

    favorableTexts: [
      "Ce mois figure parmi les périodes les plus porteuses de votre année. Les initiatives prises avec discernement peuvent produire des résultats rapides et durables.",

      "Une énergie favorable soutient vos projets et renforce votre capacité à saisir les occasions importantes.",

      "Cette période possède un potentiel d’expansion notable. Votre confiance et votre clarté faciliteront les avancées.",

      "Le climat du mois favorise les décisions, les rencontres et les actions capables de faire progresser votre situation.",

      "Plusieurs éléments peuvent s’aligner en votre faveur. Restez attentif aux occasions qui correspondent réellement à vos objectifs.",
    ],

    balancedTexts: [
      "Ce mois présente une énergie équilibrée. Les résultats dépendront principalement de votre capacité à rester constant et organisé.",

      "La période offre un potentiel constructif, mais demande une implication régulière et des attentes réalistes.",

      "Le climat du mois alterne entre possibilités et ajustements. Une approche souple vous permettra de maintenir votre progression.",

      "Cette période peut devenir positive si vous respectez votre rythme et évitez de disperser votre énergie.",

      "Le mois vous invite à avancer avec mesure. Les progrès seront plus solides que spectaculaires.",
    ],

    cautionTexts: [
      "Cette période demande davantage de prudence. Les décisions prises sous pression pourraient créer des complications inutiles.",

      "Le mois peut révéler certaines tensions ou limites. Il sera préférable d’observer avant de réagir.",

      "Une énergie plus exigeante vous invite à ralentir et à vérifier vos choix avant de vous engager.",

      "Cette période favorise les ajustements plutôt que les grandes prises de risque.",

      "Le climat du mois demande patience et discernement. Les obstacles rencontrés pourront néanmoins vous aider à améliorer votre stratégie.",
    ],

    synthesis: [
      "Votre année alternera entre périodes d’expansion, phases de consolidation et moments de recentrage. Le respect de ce rythme vous permettra de progresser sans épuiser vos ressources.",

      "Les mois les plus favorables soutiendront vos initiatives, tandis que les périodes plus exigeantes vous aideront à corriger votre trajectoire et à renforcer vos fondations.",

      "Votre progression annuelle dépendra de votre capacité à reconnaître les bons moments pour agir, attendre, ajuster ou conclure.",

      "L’ensemble de l’année forme une évolution cohérente. Chaque mois prépare le suivant et contribue à une transformation plus profonde.",

      "Les variations d’intensité au cours de l’année ne représentent pas des contradictions, mais les différentes étapes nécessaires à votre progression.",
    ],

    conclusion: [
      "Utilisez ce calendrier comme un guide souple. Vos choix, votre constance et votre capacité d’adaptation resteront les véritables moteurs de votre année.",

      "En respectant les besoins propres à chaque période, vous pourrez mieux utiliser les occasions et traverser les moments plus délicats avec lucidité.",

      "Votre calendrier annuel vous invite à agir avec confiance lorsque le climat est favorable et à préserver votre énergie lorsque la période demande davantage de recul.",

      "Chaque mois possède une fonction particulière dans votre évolution. Même les périodes plus exigeantes peuvent préparer une avancée importante.",

      "L’année vous offre plusieurs occasions de progression. Votre capacité à associer intuition, réalisme et constance fera toute la différence.",
    ],
  };
}
