import {
  HOROSCOPE_ICONS,
  HOROSCOPE_LOGO_URL,
} from "../../../HoroscopePdfAssets";

import type {
  YearPremiumPageConfig,
} from "../templates/YearPremiumPageTypes";

/*
|--------------------------------------------------------------------------
| Sécurisation des icônes
|--------------------------------------------------------------------------
|
| Si une icône n’existe pas ou contient une valeur vide, le logo est utilisé
| comme solution de secours afin d’éviter les cercles sans image.
|
*/

const ICONS =
  HOROSCOPE_ICONS as Record<string, string>;

function safeIcon(
  iconKey: string,
): string {
  const icon = ICONS[iconKey];

  if (
    typeof icon === "string" &&
    icon.trim().length > 0
  ) {
    return icon;
  }

  return HOROSCOPE_LOGO_URL;
}

/*
|--------------------------------------------------------------------------
| Configuration des pages Premium
|--------------------------------------------------------------------------
|
| Les pages 31 et 32 existent déjà séparément.
| Cette configuration commence donc à la page 33.
|
*/

export const YEAR_PREMIUM_PAGES_CONFIG:
  YearPremiumPageConfig[] = [
    /*
    |--------------------------------------------------------------------------
    | Page 33 — Blocages intérieurs
    |--------------------------------------------------------------------------
    */

    {
      key: "inner-blocks",
      pageType: "balance",
      eyebrow: "Évolution personnelle",
      title: "Vos blocages intérieurs",
      icon: safeIcon("lifeBlocks"),
      scoreLabel: "Capacité de dépassement",
      sectionLabels: {
        opportunity: "Votre possibilité d’évolution",
        vigilance: "Ce qui demande votre attention",
        conclusion: "Votre clé de libération",
      },
    },

    /*
    |--------------------------------------------------------------------------
    | Page 34 — Besoins émotionnels
    |--------------------------------------------------------------------------
    */

    {
      key: "emotional-needs",
      pageType: "grid",
      eyebrow: "Monde émotionnel",
      title: "Vos besoins émotionnels",
      icon: safeIcon("innerWorld"),
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
    | Page 35 — Mission de l’année
    |--------------------------------------------------------------------------
    */

    {
      key: "personal-mission",
      pageType: "hero",
      eyebrow: "Orientation profonde",
      title: "Votre mission de l’année",
      icon: safeIcon("lifePurpose"),
      scoreLabel: "Activation de votre mission",
      sectionLabels: {
        opportunity: "Occasion majeure",
        vigilance: "Déviation possible",
        conclusion: "Votre direction essentielle",
      },
    },

    /*
    |--------------------------------------------------------------------------
    | Page 36 — Ressources personnelles
    |--------------------------------------------------------------------------
    */

    {
      key: "personal-resources",
      pageType: "grid",
      eyebrow: "Pouvoir personnel",
      title: "Vos ressources personnelles",
      icon: safeIcon("hiddenTalents"),
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
    | Page 37 — Confiance
    |--------------------------------------------------------------------------
    */

    {
      key: "self-confidence",
      pageType: "balance",
      eyebrow: "Affirmation personnelle",
      title: "Votre confiance en vous",
      icon: safeIcon("sun"),
      scoreLabel: "Niveau de confiance",
      sectionLabels: {
        opportunity: "Affirmation possible",
        vigilance: "Doute à surveiller",
        conclusion: "Votre ancrage personnel",
      },
    },

    /*
    |--------------------------------------------------------------------------
    | Page 38 — Transformation personnelle
    |--------------------------------------------------------------------------
    */

    {
      key: "inner-transformation",
      pageType: "timeline",
      eyebrow: "Métamorphose intérieure",
      title: "Votre transformation personnelle",
      icon: safeIcon("pluto"),
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
    | Page 39 — Évolution amoureuse
    |--------------------------------------------------------------------------
    */

    {
      key: "love-evolution",
      pageType: "timeline",
      eyebrow: "Vie sentimentale",
      title: "L’évolution de votre vie amoureuse",
      icon: safeIcon("venus"),
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
    | Page 40 — Mécanismes relationnels
    |--------------------------------------------------------------------------
    */

    {
      key: "relationship-patterns",
      pageType: "balance",
      eyebrow: "Relations profondes",
      title: "Vos mécanismes relationnels",
      icon: safeIcon("heart"),
      scoreLabel: "Équilibre relationnel",
      sectionLabels: {
        opportunity: "Relation à faire évoluer",
        vigilance: "Schéma répétitif",
        conclusion: "Votre nouvelle manière d’aimer",
      },
    },

    /*
    |--------------------------------------------------------------------------
    | Page 41 — Relations importantes
    |--------------------------------------------------------------------------
    */

    {
      key: "important-relationships",
      pageType: "grid",
      eyebrow: "Entourage et connexions",
      title: "Vos relations importantes",
      icon: safeIcon("balance"),
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
    | Page 42 — Communication
    |--------------------------------------------------------------------------
    */

    {
      key: "communication",
      pageType: "grid",
      eyebrow: "Expression et échanges",
      title: "Votre communication cette année",
      icon: safeIcon("mercury"),
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
    | Page 43 — Évolution professionnelle
    |--------------------------------------------------------------------------
    */

    {
      key: "career-evolution",
      pageType: "timeline",
      eyebrow: "Vie professionnelle",
      title: "L’évolution de votre carrière",
      icon: safeIcon("jupiter"),
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
    | Page 44 — Compétences professionnelles
    |--------------------------------------------------------------------------
    */

    {
      key: "professional-skills",
      pageType: "grid",
      eyebrow: "Talents professionnels",
      title: "Vos compétences professionnelles",
      icon: safeIcon("hiddenTalents"),
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
    | Page 45 — Leadership
    |--------------------------------------------------------------------------
    */

    {
      key: "leadership",
      pageType: "hero",
      eyebrow: "Influence professionnelle",
      title: "Votre potentiel de leadership",
      icon: safeIcon("mars"),
      scoreLabel: "Activation du leadership",
      sectionLabels: {
        opportunity: "Occasion de diriger",
        vigilance: "Excès de contrôle",
        conclusion: "Votre manière de guider",
      },
    },

    /*
    |--------------------------------------------------------------------------
    | Page 46 — Équilibre professionnel
    |--------------------------------------------------------------------------
    */

    {
      key: "professional-balance",
      pageType: "balance",
      eyebrow: "Organisation de vie",
      title: "Vie personnelle et vie professionnelle",
      icon: safeIcon("balance"),
      scoreLabel: "Équilibre de vie",
      sectionLabels: {
        opportunity: "Réorganisation bénéfique",
        vigilance: "Surcharge possible",
        conclusion: "Votre juste équilibre",
      },
    },

    /*
    |--------------------------------------------------------------------------
    | Page 47 — Cycles financiers
    |--------------------------------------------------------------------------
    */

    {
      key: "financial-cycles",
      pageType: "timeline",
      eyebrow: "Évolution financière",
      title: "Vos cycles financiers",
      icon: safeIcon("money"),
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
    | Page 48 — Leviers financiers
    |--------------------------------------------------------------------------
    */

    {
      key: "financial-levers",
      pageType: "grid",
      eyebrow: "Prospérité personnelle",
      title: "Vos leviers financiers",
      icon: safeIcon("jupiter"),
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
    | Page 49 — Relation avec l’argent
    |--------------------------------------------------------------------------
    */

    {
      key: "money-relationship",
      pageType: "balance",
      eyebrow: "Rapport à l’abondance",
      title: "Votre relation avec l’argent",
      icon: safeIcon("money"),
      scoreLabel: "Équilibre matériel",
      sectionLabels: {
        opportunity: "Nouvelle approche",
        vigilance: "Croyance limitante",
        conclusion: "Votre rapport à la prospérité",
      },
    },

    /*
    |--------------------------------------------------------------------------
    | Page 50 — Gestion de l’énergie
    |--------------------------------------------------------------------------
    */

    {
      key: "energy-management",
      pageType: "grid",
      eyebrow: "Vitalité annuelle",
      title: "La gestion de votre énergie",
      icon: safeIcon("sun"),
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
    | Page 51 — Guérison
    |--------------------------------------------------------------------------
    */

    {
      key: "healing-cycles",
      pageType: "timeline",
      eyebrow: "Guérison intérieure",
      title: "Vos périodes de guérison",
      icon: safeIcon("innerWorld"),
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
    | Page 52 — Habitudes
    |--------------------------------------------------------------------------
    */

    {
      key: "new-habits",
      pageType: "grid",
      eyebrow: "Évolution quotidienne",
      title: "Vos nouvelles habitudes",
      icon: safeIcon("modalityFixed"),
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
    | Page 53 — Raison et intuition
    |--------------------------------------------------------------------------
    */

    {
      key: "intuition-reason",
      pageType: "balance",
      eyebrow: "Décisions personnelles",
      title: "Raison et intuition",
      icon: safeIcon("moon"),
      scoreLabel: "Équilibre décisionnel",
      sectionLabels: {
        opportunity: "Décision inspirée",
        vigilance: "Confusion possible",
        conclusion: "Votre boussole intérieure",
      },
    },

    /*
    |--------------------------------------------------------------------------
    | Page 54 — Stratégie de décision
    |--------------------------------------------------------------------------
    */

    {
      key: "decision-making",
      pageType: "hero",
      eyebrow: "Choix déterminants",
      title: "Votre stratégie de décision",
      icon: safeIcon("mercury"),
      scoreLabel: "Clarté de décision",
      sectionLabels: {
        opportunity: "Choix décisif",
        vigilance: "Précipitation possible",
        conclusion: "Votre meilleure stratégie",
      },
    },

    /*
    |--------------------------------------------------------------------------
    | Page 55 — Axes de croissance
    |--------------------------------------------------------------------------
    */

    {
      key: "growth-areas",
      pageType: "grid",
      eyebrow: "Développement personnel",
      title: "Vos axes de croissance",
      icon: safeIcon("jupiter"),
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
    | Page 56 — Projets
    |--------------------------------------------------------------------------
    */

    {
      key: "project-evolution",
      pageType: "timeline",
      eyebrow: "Création et réalisation",
      title: "La réalisation de vos projets",
      icon: safeIcon("modalityCardinal"),
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
    | Page 57 — Action et patience
    |--------------------------------------------------------------------------
    */

    {
      key: "action-patience",
      pageType: "balance",
      eyebrow: "Rythme de progression",
      title: "Action et patience",
      icon: safeIcon("saturn"),
      scoreLabel: "Maîtrise du rythme",
      sectionLabels: {
        opportunity: "Moment pour agir",
        vigilance: "Moment pour attendre",
        conclusion: "Votre rythme idéal",
      },
    },

    /*
    |--------------------------------------------------------------------------
    | Page 58 — Stratégie dominante
    |--------------------------------------------------------------------------
    */

    {
      key: "annual-strategy",
      pageType: "hero",
      eyebrow: "Plan d’évolution",
      title: "Votre stratégie dominante",
      icon: safeIcon("ascendant"),
      scoreLabel: "Force de votre stratégie",
      sectionLabels: {
        opportunity: "Axe prioritaire",
        vigilance: "Erreur à éviter",
        conclusion: "Votre ligne directrice",
      },
    },

    /*
    |--------------------------------------------------------------------------
    | Page 59 — Leçons essentielles
    |--------------------------------------------------------------------------
    */

    {
      key: "essential-lessons",
      pageType: "summary",
      eyebrow: "Sagesse annuelle",
      title: "Les grandes leçons de votre année",
      icon: safeIcon("soulPath"),
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
    | Page 60 — Synthèse Premium
    |--------------------------------------------------------------------------
    */

    {
      key: "premium-final-synthesis",
      pageType: "summary",
      eyebrow: "Vision complète",
      title: "Votre synthèse annuelle Premium",
      icon: safeIcon("integrationGuide"),
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
