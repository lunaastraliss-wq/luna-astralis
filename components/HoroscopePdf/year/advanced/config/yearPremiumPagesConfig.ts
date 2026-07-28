import {
  HOROSCOPE_LOGO_URL,
} from "../../../HoroscopePdfAssets";

import type {
  YearPremiumPageConfig,
} from "../templates/YearPremiumPageTypes";

/*
|--------------------------------------------------------------------------
| Icône temporaire commune
|--------------------------------------------------------------------------
|
| Cette icône permet de construire immédiatement toutes les pages.
| Nous pourrons ensuite attribuer des icônes différentes sans toucher
| aux composants ni aux données astrologiques.
|
*/

const DEFAULT_PREMIUM_ICON =
  HOROSCOPE_LOGO_URL;

/*
|--------------------------------------------------------------------------
| Configuration des pages Premium
|--------------------------------------------------------------------------
|
| Les pages 31 et 32 existent déjà séparément.
| Cette configuration commence donc à la page 33.
|
*/

export const YEAR_PREMIUM_PAGES_CONFIG: YearPremiumPageConfig[] = [
  /*
  |--------------------------------------------------------------------------
  | Page 33
  |--------------------------------------------------------------------------
  */

  {
    key: "inner-blocks",
    pageType: "balance",
    eyebrow: "Évolution personnelle",
    title: "Vos blocages intérieurs",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Capacité de dépassement",
    sectionLabels: {
      opportunity: "Votre possibilité d’évolution",
      vigilance: "Ce qui demande votre attention",
      conclusion: "Votre clé de libération",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 34
  |--------------------------------------------------------------------------
  */

  {
    key: "emotional-needs",
    pageType: "grid",
    eyebrow: "Monde émotionnel",
    title: "Vos besoins émotionnels",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Équilibre émotionnel",
    sectionLabels: {
      cards: "Vos quatre besoins fondamentaux",
      opportunity: "Ouverture émotionnelle",
      vigilance: "Fragilité possible",
      conclusion: "Votre équilibre intérieur",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 35
  |--------------------------------------------------------------------------
  */

  {
    key: "personal-mission",
    pageType: "hero",
    eyebrow: "Orientation profonde",
    title: "Votre mission de l’année",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Activation de votre mission",
    sectionLabels: {
      opportunity: "Occasion majeure",
      vigilance: "Déviation possible",
      conclusion: "Votre direction essentielle",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 36
  |--------------------------------------------------------------------------
  */

  {
    key: "personal-resources",
    pageType: "grid",
    eyebrow: "Pouvoir personnel",
    title: "Vos ressources personnelles",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Disponibilité de vos ressources",
    sectionLabels: {
      cards: "Vos quatre ressources principales",
      opportunity: "Ressource à développer",
      vigilance: "Énergie à préserver",
      conclusion: "Votre force disponible",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 37
  |--------------------------------------------------------------------------
  */

  {
    key: "self-confidence",
    pageType: "balance",
    eyebrow: "Affirmation personnelle",
    title: "Votre confiance en vous",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Niveau de confiance",
    sectionLabels: {
      opportunity: "Affirmation possible",
      vigilance: "Doute à surveiller",
      conclusion: "Votre ancrage personnel",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 38
  |--------------------------------------------------------------------------
  */

  {
    key: "inner-transformation",
    pageType: "timeline",
    eyebrow: "Métamorphose intérieure",
    title: "Votre transformation personnelle",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Intensité de la transformation",
    sectionLabels: {
      timeline: "Les étapes de votre évolution",
      opportunity: "Renouveau possible",
      vigilance: "Résistance au changement",
      conclusion: "Votre nouvelle version",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 39
  |--------------------------------------------------------------------------
  */

  {
    key: "love-evolution",
    pageType: "timeline",
    eyebrow: "Vie sentimentale",
    title: "L’évolution de votre vie amoureuse",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Dynamique sentimentale",
    sectionLabels: {
      timeline: "Les phases de votre année amoureuse",
      opportunity: "Ouverture du cœur",
      vigilance: "Tension relationnelle",
      conclusion: "Votre parcours sentimental",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 40
  |--------------------------------------------------------------------------
  */

  {
    key: "relationship-patterns",
    pageType: "balance",
    eyebrow: "Relations profondes",
    title: "Vos mécanismes relationnels",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Équilibre relationnel",
    sectionLabels: {
      opportunity: "Relation à faire évoluer",
      vigilance: "Schéma répétitif",
      conclusion: "Votre nouvelle manière d’aimer",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 41
  |--------------------------------------------------------------------------
  */

  {
    key: "important-relationships",
    pageType: "grid",
    eyebrow: "Entourage et connexions",
    title: "Vos relations importantes",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Influence de votre entourage",
    sectionLabels: {
      cards: "Les quatre relations dominantes",
      opportunity: "Alliance bénéfique",
      vigilance: "Relation exigeante",
      conclusion: "Votre cercle relationnel",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 42
  |--------------------------------------------------------------------------
  */

  {
    key: "communication",
    pageType: "grid",
    eyebrow: "Expression et échanges",
    title: "Votre communication cette année",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Force de communication",
    sectionLabels: {
      cards: "Vos quatre modes d’expression",
      opportunity: "Message à transmettre",
      vigilance: "Malentendu possible",
      conclusion: "Votre parole juste",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 43
  |--------------------------------------------------------------------------
  */

  {
    key: "career-evolution",
    pageType: "timeline",
    eyebrow: "Vie professionnelle",
    title: "L’évolution de votre carrière",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Progression professionnelle",
    sectionLabels: {
      timeline: "Les étapes de votre progression",
      opportunity: "Avancée professionnelle",
      vigilance: "Obstacle professionnel",
      conclusion: "Votre trajectoire de carrière",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 44
  |--------------------------------------------------------------------------
  */

  {
    key: "professional-skills",
    pageType: "grid",
    eyebrow: "Talents professionnels",
    title: "Vos compétences professionnelles",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Potentiel professionnel",
    sectionLabels: {
      cards: "Vos quatre compétences dominantes",
      opportunity: "Compétence à valoriser",
      vigilance: "Capacité sous-utilisée",
      conclusion: "Votre valeur professionnelle",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 45
  |--------------------------------------------------------------------------
  */

  {
    key: "leadership",
    pageType: "hero",
    eyebrow: "Influence professionnelle",
    title: "Votre potentiel de leadership",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Activation du leadership",
    sectionLabels: {
      opportunity: "Occasion de diriger",
      vigilance: "Excès de contrôle",
      conclusion: "Votre manière de guider",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 46
  |--------------------------------------------------------------------------
  */

  {
    key: "professional-balance",
    pageType: "balance",
    eyebrow: "Organisation de vie",
    title: "Vie personnelle et vie professionnelle",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Équilibre de vie",
    sectionLabels: {
      opportunity: "Réorganisation bénéfique",
      vigilance: "Surcharge possible",
      conclusion: "Votre juste équilibre",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 47
  |--------------------------------------------------------------------------
  */

  {
    key: "financial-cycles",
    pageType: "timeline",
    eyebrow: "Évolution financière",
    title: "Vos cycles financiers",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Dynamique financière",
    sectionLabels: {
      timeline: "Les phases financières de votre année",
      opportunity: "Période favorable",
      vigilance: "Période plus délicate",
      conclusion: "Votre trajectoire financière",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 48
  |--------------------------------------------------------------------------
  */

  {
    key: "financial-levers",
    pageType: "grid",
    eyebrow: "Prospérité personnelle",
    title: "Vos leviers financiers",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Potentiel de prospérité",
    sectionLabels: {
      cards: "Vos quatre leviers principaux",
      opportunity: "Levier à activer",
      vigilance: "Risque à contrôler",
      conclusion: "Votre stratégie financière",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 49
  |--------------------------------------------------------------------------
  */

  {
    key: "money-relationship",
    pageType: "balance",
    eyebrow: "Rapport à l’abondance",
    title: "Votre relation avec l’argent",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Équilibre matériel",
    sectionLabels: {
      opportunity: "Nouvelle approche",
      vigilance: "Croyance limitante",
      conclusion: "Votre rapport à la prospérité",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 50
  |--------------------------------------------------------------------------
  */

  {
    key: "energy-management",
    pageType: "grid",
    eyebrow: "Vitalité annuelle",
    title: "La gestion de votre énergie",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Niveau de vitalité",
    sectionLabels: {
      cards: "Vos quatre sources d’énergie",
      opportunity: "Source de régénération",
      vigilance: "Cause d’épuisement",
      conclusion: "Votre équilibre énergétique",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 51
  |--------------------------------------------------------------------------
  */

  {
    key: "healing-cycles",
    pageType: "timeline",
    eyebrow: "Guérison intérieure",
    title: "Vos périodes de guérison",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Potentiel de régénération",
    sectionLabels: {
      timeline: "Les étapes de votre guérison",
      opportunity: "Libération possible",
      vigilance: "Blessure sensible",
      conclusion: "Votre processus de réparation",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 52
  |--------------------------------------------------------------------------
  */

  {
    key: "new-habits",
    pageType: "grid",
    eyebrow: "Évolution quotidienne",
    title: "Vos nouvelles habitudes",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Capacité de changement",
    sectionLabels: {
      cards: "Les quatre habitudes à construire",
      opportunity: "Habitude porteuse",
      vigilance: "Ancien automatisme",
      conclusion: "Votre nouvelle discipline",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 53
  |--------------------------------------------------------------------------
  */

  {
    key: "intuition-reason",
    pageType: "balance",
    eyebrow: "Décisions personnelles",
    title: "Raison et intuition",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Équilibre décisionnel",
    sectionLabels: {
      opportunity: "Décision inspirée",
      vigilance: "Confusion possible",
      conclusion: "Votre boussole intérieure",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 54
  |--------------------------------------------------------------------------
  */

  {
    key: "decision-making",
    pageType: "hero",
    eyebrow: "Choix déterminants",
    title: "Votre stratégie de décision",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Clarté de décision",
    sectionLabels: {
      opportunity: "Choix décisif",
      vigilance: "Précipitation possible",
      conclusion: "Votre meilleure stratégie",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 55
  |--------------------------------------------------------------------------
  */

  {
    key: "growth-areas",
    pageType: "grid",
    eyebrow: "Développement personnel",
    title: "Vos axes de croissance",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Potentiel de progression",
    sectionLabels: {
      cards: "Vos quatre axes d’évolution",
      opportunity: "Croissance majeure",
      vigilance: "Zone de résistance",
      conclusion: "Votre évolution globale",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 56
  |--------------------------------------------------------------------------
  */

  {
    key: "project-evolution",
    pageType: "timeline",
    eyebrow: "Création et réalisation",
    title: "La réalisation de vos projets",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Potentiel de concrétisation",
    sectionLabels: {
      timeline: "Les étapes de réalisation",
      opportunity: "Avancée déterminante",
      vigilance: "Retard possible",
      conclusion: "Votre chemin de concrétisation",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 57
  |--------------------------------------------------------------------------
  */

  {
    key: "action-patience",
    pageType: "balance",
    eyebrow: "Rythme de progression",
    title: "Action et patience",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Maîtrise du rythme",
    sectionLabels: {
      opportunity: "Moment pour agir",
      vigilance: "Moment pour attendre",
      conclusion: "Votre rythme idéal",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 58
  |--------------------------------------------------------------------------
  */

  {
    key: "annual-strategy",
    pageType: "hero",
    eyebrow: "Plan d’évolution",
    title: "Votre stratégie dominante",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Force de votre stratégie",
    sectionLabels: {
      opportunity: "Axe prioritaire",
      vigilance: "Erreur à éviter",
      conclusion: "Votre ligne directrice",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 59
  |--------------------------------------------------------------------------
  */

  {
    key: "essential-lessons",
    pageType: "summary",
    eyebrow: "Sagesse annuelle",
    title: "Les grandes leçons de votre année",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Intégration des apprentissages",
    sectionLabels: {
      cards: "Les cinq leçons essentielles",
      opportunity: "Leçon porteuse",
      vigilance: "Leçon exigeante",
      conclusion: "Votre sagesse acquise",
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Page 60
  |--------------------------------------------------------------------------
  */

  {
    key: "premium-final-synthesis",
    pageType: "summary",
    eyebrow: "Vision complète",
    title: "Votre synthèse annuelle Premium",
    icon: DEFAULT_PREMIUM_ICON,
    scoreLabel: "Potentiel global de l’année",
    sectionLabels: {
      cards: "Les cinq clés de votre année",
      opportunity: "Votre plus grande ouverture",
      vigilance: "Votre attention principale",
      conclusion: "Le message final de votre année",
    },
  },
];

/*
|--------------------------------------------------------------------------
| Recherche d’une configuration
|--------------------------------------------------------------------------
*/

export function getYearPremiumPageConfig(
  key: string,
): YearPremiumPageConfig | undefined {
  return YEAR_PREMIUM_PAGES_CONFIG.find(
    (page) => page.key === key,
  );
}
