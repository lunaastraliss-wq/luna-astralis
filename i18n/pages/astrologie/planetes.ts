// i18n/pages/astrologie/planetes.ts

import type { Locale } from "@/i18n/config";

export type PlanetItem = {
  name: string;
  symbol: string;
  href: string;
  category: string;
  keywords: string;
  text: string;
};

export type PlanetFaqItem = {
  question: string;
  answer: string;
};

export type PlanetesPageText = {
  metadata: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
    locale: string;
    language: string;
  };

  jsonLd: {
    name: string;
    headline: string;
    description: string;
  };

  badge: string;
  title: string;
  lead: string;
  createChart: string;
  explorePlanets: string;

  introKicker: string;
  introTitle: string;
  introParagraphs: string[];

  readingTitle: string;
  readingCards: {
    number: string;
    title: string;
    text: string;
  }[];

  listKicker: string;
  listTitle: string;
  listIntro: string;
  planetTitleSuffix: string;
  discoverLabel: string;
  discoverAria: string;
  planets: PlanetItem[];

  groupsKicker: string;
  groupsTitle: string;
  groups: {
    icons: string;
    title: string;
    text: string;
  }[];

  luminariesTitle: string;
  sunTitle: string;
  sunText: string;
  sunLink: string;
  moonTitle: string;
  moonText: string;
  moonLink: string;

  differencesTitle: string;
  differencesParagraphs: string[];

  ctaKicker: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;

  faqKicker: string;
  faqTitle: string;
  faq: PlanetFaqItem[];

  disclaimer: string;
};

const PLANET_HREFS = {
  sun: "/astrologie/soleil",
  moon: "/astrologie/lune",
  mercury: "/astrologie/mercure",
  venus: "/astrologie/venus",
  mars: "/astrologie/mars",
  jupiter: "/astrologie/jupiter",
  saturn: "/astrologie/saturne",
  uranus: "/astrologie/uranus",
  neptune: "/astrologie/neptune",
  pluto: "/astrologie/pluton",
} as const;

export const PLANETES_TRANSLATIONS: Record<Locale, PlanetesPageText> = {
  fr: {
    metadata: {
      title: "Les planètes en astrologie : signification et rôle dans le thème natal | Luna Astralis",
      description:
        "Découvrez la signification du Soleil, de la Lune, de Mercure, Vénus, Mars, Jupiter, Saturne, Uranus, Neptune et Pluton dans votre thème natal.",
      ogTitle: "Les planètes en astrologie : comprendre votre thème natal",
      ogDescription:
        "Explorez le rôle des dix principales planètes astrologiques et découvrez ce qu’elles représentent dans une carte du ciel.",
      twitterTitle: "Les planètes en astrologie | Luna Astralis",
      twitterDescription:
        "Soleil, Lune, Mercure, Vénus, Mars, Jupiter, Saturne, Uranus, Neptune et Pluton : découvrez leur signification.",
      locale: "fr_CA",
      language: "fr-CA",
    },
    jsonLd: {
      name: "Les planètes en astrologie",
      headline:
        "Les planètes en astrologie : signification et rôle dans le thème natal",
      description:
        "Guide des principales planètes utilisées dans l’interprétation astrologique d’un thème natal.",
    },
    badge: "✦ Bibliothèque astrologique",
    title: "Les planètes en astrologie",
    lead:
      "Les planètes représentent les différentes fonctions symboliques de votre thème natal : votre identité, vos émotions, votre pensée, vos relations, votre énergie et vos grandes transformations.",
    createChart: "Créer ma carte du ciel gratuite",
    explorePlanets: "Explorer les planètes",
    introKicker: "Les forces de votre thème natal",
    introTitle: "Quel est le rôle des planètes dans une carte du ciel ?",
    introParagraphs: [
      "Dans l’interprétation astrologique, les planètes représentent des fonctions différentes. Le Soleil concerne l’identité consciente, la Lune décrit les besoins émotionnels, Mercure la pensée, Vénus les valeurs relationnelles et Mars la manière d’agir.",
      "Jupiter et Saturne décrivent des processus plus sociaux : le développement, les croyances, les responsabilités et la construction dans le temps. Uranus, Neptune et Pluton sont associés à des mouvements plus collectifs et à des transformations qui dépassent la seule personnalité individuelle.",
      "Pour interpréter une planète, il faut observer son signe, sa maison et les aspects qu’elle forme avec les autres planètes. Ces trois niveaux permettent de comprendre sa fonction, son mode d’expression et le domaine de vie principalement concerné.",
    ],
    readingTitle: "Comment lire une planète dans votre thème natal ?",
    readingCards: [
      { number: "01", title: "La planète", text: "Elle représente la fonction astrologique étudiée : penser, aimer, agir, grandir, structurer ou transformer." },
      { number: "02", title: "Le signe", text: "Il décrit la manière dont l’énergie de la planète s’exprime, avec ses qualités, son rythme et ses besoins particuliers." },
      { number: "03", title: "La maison", text: "Elle indique le domaine de vie dans lequel cette énergie prend une importance particulière." },
      { number: "04", title: "Les aspects", text: "Ils révèlent comment la planète coopère, dialogue ou entre en tension avec les autres fonctions du thème natal." },
    ],
    listKicker: "Les dix grandes fonctions astrologiques",
    listTitle: "Signification des planètes en astrologie",
    listIntro:
      "Sélectionnez une planète pour découvrir son rôle détaillé, son expression dans les douze signes, son influence dans les douze maisons et ses principaux aspects.",
    planetTitleSuffix: "en astrologie",
    discoverLabel: "Découvrir",
    discoverAria: "Découvrir {planet} en astrologie",
    planets: [
      { name: "Soleil", symbol: "☀", href: PLANET_HREFS.sun, category: "Luminaire", keywords: "Identité • volonté • vitalité", text: "Le Soleil représente l’identité consciente, la volonté, le rayonnement personnel et la direction que vous cherchez progressivement à donner à votre vie." },
      { name: "Lune", symbol: "☽", href: PLANET_HREFS.moon, category: "Luminaire", keywords: "Émotions • besoins • sécurité", text: "La Lune décrit le monde émotionnel, les réactions instinctives, les habitudes et les conditions nécessaires pour ressentir une sécurité intérieure." },
      { name: "Mercure", symbol: "☿", href: PLANET_HREFS.mercury, category: "Planète personnelle", keywords: "Pensée • communication • apprentissage", text: "Mercure symbolise la manière de penser, de communiquer, d’apprendre, d’analyser les informations et de comprendre l’environnement." },
      { name: "Vénus", symbol: "♀", href: PLANET_HREFS.venus, category: "Planète personnelle", keywords: "Amour • valeurs • attirance", text: "Vénus représente la manière d’aimer, les goûts, les valeurs, l’attirance, le plaisir et la recherche d’harmonie dans les relations." },
      { name: "Mars", symbol: "♂", href: PLANET_HREFS.mars, category: "Planète personnelle", keywords: "Action • désir • courage", text: "Mars décrit l’énergie, l’initiative, le désir, le courage et la manière de s’affirmer, de défendre ses limites et de poursuivre ses objectifs." },
      { name: "Jupiter", symbol: "♃", href: PLANET_HREFS.jupiter, category: "Planète sociale", keywords: "Expansion • confiance • croissance", text: "Jupiter symbolise la croissance, les croyances, la confiance, l’ouverture, les possibilités et la recherche d’un sens plus vaste." },
      { name: "Saturne", symbol: "♄", href: PLANET_HREFS.saturn, category: "Planète sociale", keywords: "Structure • limites • maturité", text: "Saturne représente les responsabilités, les limites, la discipline, le temps et la construction progressive d’une force durable." },
      { name: "Uranus", symbol: "♅", href: PLANET_HREFS.uranus, category: "Planète transpersonnelle", keywords: "Liberté • changement • innovation", text: "Uranus symbolise l’indépendance, l’innovation, l’éveil, l’originalité et les changements qui libèrent des structures devenues trop rigides." },
      { name: "Neptune", symbol: "♆", href: PLANET_HREFS.neptune, category: "Planète transpersonnelle", keywords: "Intuition • imagination • idéal", text: "Neptune représente l’intuition, les rêves, l’imagination, la compassion, les idéaux et les perceptions qui dépassent la logique immédiate." },
      { name: "Pluton", symbol: "♇", href: PLANET_HREFS.pluto, category: "Planète transpersonnelle", keywords: "Transformation • pouvoir • renaissance", text: "Pluton symbolise les transformations profondes, les crises, le pouvoir intérieur, les vérités cachées et la capacité de régénération." },
    ],
    groupsKicker: "Trois niveaux de lecture",
    groupsTitle: "Planètes personnelles, sociales et transpersonnelles",
    groups: [
      { icons: "☀ ☽ ☿ ♀ ♂", title: "Les planètes personnelles", text: "Le Soleil, la Lune, Mercure, Vénus et Mars sont directement liés à l’identité, aux émotions, à la pensée, aux relations et à l’action individuelle." },
      { icons: "♃ ♄", title: "Les planètes sociales", text: "Jupiter et Saturne décrivent la manière de grandir, de se situer dans la société, d’assumer des responsabilités et de construire dans le temps." },
      { icons: "♅ ♆ ♇", title: "Les planètes transpersonnelles", text: "Uranus, Neptune et Pluton se déplacent lentement. Leur signe concerne souvent une génération, tandis que leur maison précise leur expression personnelle." },
    ],
    luminariesTitle: "Les luminaires : le Soleil et la Lune",
    sunTitle: "Le Soleil",
    sunText:
      "Astronomiquement, le Soleil est une étoile. Dans le langage astrologique, il est regroupé avec les planètes et représente l’identité consciente, la vitalité et la volonté.",
    sunLink: "Lire le guide du Soleil",
    moonTitle: "La Lune",
    moonText:
      "Astronomiquement, la Lune est le satellite naturel de la Terre. En astrologie, elle décrit les émotions, les habitudes, les besoins et la sécurité intérieure.",
    moonLink: "Lire le guide de la Lune",
    differencesTitle:
      "Pourquoi plusieurs personnes du même signe sont-elles différentes ?",
    differencesParagraphs: [
      "Le signe solaire ne représente qu’une partie du thème natal. Deux personnes nées sous le même signe peuvent avoir une Lune, un Ascendant, un Mercure, une Vénus ou un Mars très différents.",
      "Les maisons astrologiques changent également selon l’heure et le lieu de naissance. Les aspects entre les planètes ajoutent enfin des combinaisons particulières. C’est l’ensemble de ces éléments qui rend chaque carte du ciel différente.",
    ],
    ctaKicker: "Découvrez vos positions",
    ctaTitle: "Où se trouvent vos planètes dans votre thème natal ?",
    ctaText:
      "Générez gratuitement votre carte du ciel pour découvrir les signes, les maisons et les principales positions astrologiques de votre naissance.",
    ctaButton: "Découvrir ma carte du ciel",
    faqKicker: "Questions fréquentes",
    faqTitle: "Questions sur les planètes en astrologie",
    faq: [
      { question: "Que représentent les planètes en astrologie ?", answer: "Dans le langage astrologique, chaque planète représente une fonction particulière de la personnalité ou de l’expérience : identité, émotions, pensée, relations, action, croissance, limites, changement, intuition ou transformation." },
      { question: "Quelle est la planète la plus importante dans un thème natal ?", answer: "Il n’existe pas une seule planète importante pour tous les thèmes. Le Soleil, la Lune et l’Ascendant constituent des repères centraux, mais les autres planètes, leurs maisons et leurs aspects apportent des informations essentielles." },
      { question: "Pourquoi le Soleil et la Lune sont-ils appelés planètes en astrologie ?", answer: "En astrologie traditionnelle et moderne, le mot planète est souvent utilisé de manière symbolique pour regrouper les astres interprétés dans le thème natal. Astronomiquement, le Soleil est une étoile et la Lune est un satellite naturel." },
      { question: "Que signifie une planète dans un signe astrologique ?", answer: "La planète représente une fonction, tandis que le signe décrit la manière dont cette fonction s’exprime. Par exemple, Mars représente l’action et son signe précise le style d’action." },
      { question: "Que signifie une planète dans une maison astrologique ?", answer: "La maison indique le domaine de vie dans lequel l’énergie symbolique de la planète s’exprime le plus directement : identité, ressources, relations, carrière, famille ou projets." },
      { question: "Que sont les aspects entre les planètes ?", answer: "Les aspects sont des angles formés entre les planètes dans la carte du ciel. Ils sont interprétés comme des relations de fluidité, de tension, de coopération ou d’intensification entre leurs fonctions symboliques." },
      { question: "Comment connaître la position de mes planètes ?", answer: "Vous devez générer une carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance afin de connaître les signes, les maisons et les aspects de vos planètes." },
    ],
    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title: "Planets in Astrology: Meaning and Role in the Birth Chart | Luna Astralis",
      description:
        "Discover the meaning of the Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune and Pluto in your birth chart.",
      ogTitle: "Planets in Astrology: Understanding Your Birth Chart",
      ogDescription:
        "Explore the role of the ten main astrological planets and what they represent in a birth chart.",
      twitterTitle: "Planets in Astrology | Luna Astralis",
      twitterDescription:
        "Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune and Pluto: discover their meaning.",
      locale: "en_US",
      language: "en-US",
    },
    jsonLd: {
      name: "Planets in astrology",
      headline: "Planets in Astrology: Meaning and Role in the Birth Chart",
      description:
        "A guide to the main planets used in astrological birth-chart interpretation.",
    },
    badge: "✦ Astrology library",
    title: "Planets in Astrology",
    lead:
      "The planets represent the different symbolic functions of your birth chart: identity, emotions, thought, relationships, energy and major transformations.",
    createChart: "Create my free birth chart",
    explorePlanets: "Explore the planets",
    introKicker: "The forces in your birth chart",
    introTitle: "What role do the planets play in a birth chart?",
    introParagraphs: [
      "In astrological interpretation, the planets represent different functions. The Sun concerns conscious identity, the Moon emotional needs, Mercury thought, Venus relationship values and Mars the way you act.",
      "Jupiter and Saturn describe more social processes: growth, beliefs, responsibility and building over time. Uranus, Neptune and Pluto are associated with broader collective movements and transformations beyond individual personality.",
      "To interpret a planet, consider its sign, house and aspects to other planets. These three levels reveal its function, style of expression and the area of life most directly involved.",
    ],
    readingTitle: "How do you read a planet in your birth chart?",
    readingCards: [
      { number: "01", title: "The planet", text: "It represents the astrological function being studied: thinking, loving, acting, growing, structuring or transforming." },
      { number: "02", title: "The sign", text: "It describes how the planet’s energy is expressed, including its qualities, rhythm and particular needs." },
      { number: "03", title: "The house", text: "It indicates the area of life in which this energy becomes especially important." },
      { number: "04", title: "The aspects", text: "They reveal how the planet cooperates, interacts or enters into tension with other functions in the birth chart." },
    ],
    listKicker: "The ten major astrological functions",
    listTitle: "Meaning of the planets in astrology",
    listIntro:
      "Select a planet to discover its detailed role, expression through the twelve signs, influence in the twelve houses and main aspects.",
    planetTitleSuffix: "in astrology",
    discoverLabel: "Discover",
    discoverAria: "Discover {planet} in astrology",
    planets: [
      { name: "Sun", symbol: "☀", href: PLANET_HREFS.sun, category: "Luminary", keywords: "Identity • willpower • vitality", text: "The Sun represents conscious identity, willpower, personal radiance and the direction you gradually seek to give your life." },
      { name: "Moon", symbol: "☽", href: PLANET_HREFS.moon, category: "Luminary", keywords: "Emotions • needs • security", text: "The Moon describes the emotional world, instinctive reactions, habits and the conditions needed to feel inwardly secure." },
      { name: "Mercury", symbol: "☿", href: PLANET_HREFS.mercury, category: "Personal planet", keywords: "Thought • communication • learning", text: "Mercury symbolizes how you think, communicate, learn, analyze information and understand your environment." },
      { name: "Venus", symbol: "♀", href: PLANET_HREFS.venus, category: "Personal planet", keywords: "Love • values • attraction", text: "Venus represents how you love, your tastes, values, attraction, pleasure and search for harmony in relationships." },
      { name: "Mars", symbol: "♂", href: PLANET_HREFS.mars, category: "Personal planet", keywords: "Action • desire • courage", text: "Mars describes energy, initiative, desire, courage and how you assert yourself, defend boundaries and pursue goals." },
      { name: "Jupiter", symbol: "♃", href: PLANET_HREFS.jupiter, category: "Social planet", keywords: "Expansion • confidence • growth", text: "Jupiter symbolizes growth, beliefs, confidence, openness, opportunity and the search for broader meaning." },
      { name: "Saturn", symbol: "♄", href: PLANET_HREFS.saturn, category: "Social planet", keywords: "Structure • limits • maturity", text: "Saturn represents responsibility, limits, discipline, time and the gradual construction of lasting strength." },
      { name: "Uranus", symbol: "♅", href: PLANET_HREFS.uranus, category: "Transpersonal planet", keywords: "Freedom • change • innovation", text: "Uranus symbolizes independence, innovation, awakening, originality and changes that free structures that have become too rigid." },
      { name: "Neptune", symbol: "♆", href: PLANET_HREFS.neptune, category: "Transpersonal planet", keywords: "Intuition • imagination • ideals", text: "Neptune represents intuition, dreams, imagination, compassion, ideals and perceptions beyond immediate logic." },
      { name: "Pluto", symbol: "♇", href: PLANET_HREFS.pluto, category: "Transpersonal planet", keywords: "Transformation • power • rebirth", text: "Pluto symbolizes profound transformation, crisis, inner power, hidden truths and the capacity for regeneration." },
    ],
    groupsKicker: "Three levels of interpretation",
    groupsTitle: "Personal, social and transpersonal planets",
    groups: [
      { icons: "☀ ☽ ☿ ♀ ♂", title: "Personal planets", text: "The Sun, Moon, Mercury, Venus and Mars are directly connected with identity, emotions, thought, relationships and individual action." },
      { icons: "♃ ♄", title: "Social planets", text: "Jupiter and Saturn describe how you grow, find your place in society, assume responsibility and build over time." },
      { icons: "♅ ♆ ♇", title: "Transpersonal planets", text: "Uranus, Neptune and Pluto move slowly. Their sign often concerns a generation, while their house reveals personal expression." },
    ],
    luminariesTitle: "The luminaries: the Sun and Moon",
    sunTitle: "The Sun",
    sunText:
      "Astronomically, the Sun is a star. In astrological language, it is grouped with the planets and represents conscious identity, vitality and willpower.",
    sunLink: "Read the Sun guide",
    moonTitle: "The Moon",
    moonText:
      "Astronomically, the Moon is Earth’s natural satellite. In astrology, it describes emotions, habits, needs and inner security.",
    moonLink: "Read the Moon guide",
    differencesTitle: "Why are people with the same sign different?",
    differencesParagraphs: [
      "The Sun sign is only one part of the birth chart. Two people born under the same sign can have very different Moons, Ascendants, Mercuries, Venuses or Mars placements.",
      "Astrological houses also change according to birth time and place. Aspects between the planets add unique combinations. Together, these elements make every birth chart different.",
    ],
    ctaKicker: "Discover your placements",
    ctaTitle: "Where are your planets in your birth chart?",
    ctaText:
      "Generate your free birth chart to discover the signs, houses and main astrological placements present at your birth.",
    ctaButton: "Discover my birth chart",
    faqKicker: "Frequently asked questions",
    faqTitle: "Questions about planets in astrology",
    faq: [
      { question: "What do the planets represent in astrology?", answer: "In astrological language, each planet represents a particular function of personality or experience: identity, emotions, thought, relationships, action, growth, limits, change, intuition or transformation." },
      { question: "Which planet is most important in a birth chart?", answer: "There is no single planet that is most important in every chart. The Sun, Moon and Ascendant are central reference points, but the other planets, houses and aspects provide essential information." },
      { question: "Why are the Sun and Moon called planets in astrology?", answer: "In traditional and modern astrology, the word planet is often used symbolically for the celestial bodies interpreted in the birth chart. Astronomically, the Sun is a star and the Moon is a natural satellite." },
      { question: "What does a planet in a zodiac sign mean?", answer: "The planet represents a function, while the sign describes how that function is expressed. Mars, for example, represents action and its sign describes the style of action." },
      { question: "What does a planet in an astrological house mean?", answer: "The house indicates the area of life in which the planet’s symbolic energy is expressed most directly: identity, resources, relationships, career, family or projects." },
      { question: "What are aspects between planets?", answer: "Aspects are angles formed between planets in the birth chart. They are interpreted as relationships of flow, tension, cooperation or intensification between symbolic functions." },
      { question: "How can I find the positions of my planets?", answer: "Generate a birth chart using your birth date, time and place to discover the signs, houses and aspects of your planets." },
    ],
    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },

  es: {
    metadata: {
      title: "Los planetas en astrología: significado y función en la carta natal | Luna Astralis",
      description:
        "Descubre el significado del Sol, la Luna, Mercurio, Venus, Marte, Júpiter, Saturno, Urano, Neptuno y Plutón en tu carta natal.",
      ogTitle: "Los planetas en astrología: comprender tu carta natal",
      ogDescription:
        "Explora la función de los diez principales planetas astrológicos y lo que representan en una carta natal.",
      twitterTitle: "Los planetas en astrología | Luna Astralis",
      twitterDescription:
        "Sol, Luna, Mercurio, Venus, Marte, Júpiter, Saturno, Urano, Neptuno y Plutón: descubre su significado.",
      locale: "es_ES",
      language: "es-ES",
    },
    jsonLd: {
      name: "Los planetas en astrología",
      headline:
        "Los planetas en astrología: significado y función en la carta natal",
      description:
        "Guía de los principales planetas utilizados en la interpretación astrológica de una carta natal.",
    },
    badge: "✦ Biblioteca astrológica",
    title: "Los planetas en astrología",
    lead:
      "Los planetas representan las distintas funciones simbólicas de tu carta natal: identidad, emociones, pensamiento, relaciones, energía y grandes transformaciones.",
    createChart: "Crear mi carta natal gratis",
    explorePlanets: "Explorar los planetas",
    introKicker: "Las fuerzas de tu carta natal",
    introTitle: "¿Qué función cumplen los planetas en una carta natal?",
    introParagraphs: [
      "En la interpretación astrológica, los planetas representan funciones diferentes. El Sol se relaciona con la identidad consciente; la Luna, con las necesidades emocionales; Mercurio, con el pensamiento; Venus, con los valores relacionales; y Marte, con la forma de actuar.",
      "Júpiter y Saturno describen procesos más sociales: desarrollo, creencias, responsabilidades y construcción a largo plazo. Urano, Neptuno y Plutón se asocian con movimientos colectivos y transformaciones que van más allá de la personalidad individual.",
      "Para interpretar un planeta hay que observar su signo, su casa y los aspectos que forma con otros planetas. Estos tres niveles permiten comprender su función, su forma de expresión y el ámbito de vida principalmente implicado.",
    ],
    readingTitle: "¿Cómo leer un planeta en tu carta natal?",
    readingCards: [
      { number: "01", title: "El planeta", text: "Representa la función astrológica estudiada: pensar, amar, actuar, crecer, estructurar o transformar." },
      { number: "02", title: "El signo", text: "Describe cómo se expresa la energía del planeta, con sus cualidades, ritmo y necesidades particulares." },
      { number: "03", title: "La casa", text: "Indica el ámbito de la vida en el que esta energía adquiere una importancia especial." },
      { number: "04", title: "Los aspectos", text: "Revelan cómo el planeta coopera, dialoga o entra en tensión con otras funciones de la carta natal." },
    ],
    listKicker: "Las diez grandes funciones astrológicas",
    listTitle: "Significado de los planetas en astrología",
    listIntro:
      "Selecciona un planeta para descubrir su función detallada, su expresión en los doce signos, su influencia en las doce casas y sus principales aspectos.",
    planetTitleSuffix: "en astrología",
    discoverLabel: "Descubrir",
    discoverAria: "Descubrir {planet} en astrología",
    planets: [
      { name: "Sol", symbol: "☀", href: PLANET_HREFS.sun, category: "Luminaria", keywords: "Identidad • voluntad • vitalidad", text: "El Sol representa la identidad consciente, la voluntad, el brillo personal y la dirección que buscas dar progresivamente a tu vida." },
      { name: "Luna", symbol: "☽", href: PLANET_HREFS.moon, category: "Luminaria", keywords: "Emociones • necesidades • seguridad", text: "La Luna describe el mundo emocional, las reacciones instintivas, los hábitos y las condiciones necesarias para sentir seguridad interior." },
      { name: "Mercurio", symbol: "☿", href: PLANET_HREFS.mercury, category: "Planeta personal", keywords: "Pensamiento • comunicación • aprendizaje", text: "Mercurio simboliza la manera de pensar, comunicar, aprender, analizar información y comprender el entorno." },
      { name: "Venus", symbol: "♀", href: PLANET_HREFS.venus, category: "Planeta personal", keywords: "Amor • valores • atracción", text: "Venus representa la manera de amar, los gustos, los valores, la atracción, el placer y la búsqueda de armonía en las relaciones." },
      { name: "Marte", symbol: "♂", href: PLANET_HREFS.mars, category: "Planeta personal", keywords: "Acción • deseo • coraje", text: "Marte describe la energía, la iniciativa, el deseo, el coraje y la forma de afirmarse, defender límites y perseguir objetivos." },
      { name: "Júpiter", symbol: "♃", href: PLANET_HREFS.jupiter, category: "Planeta social", keywords: "Expansión • confianza • crecimiento", text: "Júpiter simboliza el crecimiento, las creencias, la confianza, la apertura, las posibilidades y la búsqueda de un sentido más amplio." },
      { name: "Saturno", symbol: "♄", href: PLANET_HREFS.saturn, category: "Planeta social", keywords: "Estructura • límites • madurez", text: "Saturno representa las responsabilidades, los límites, la disciplina, el tiempo y la construcción progresiva de una fuerza duradera." },
      { name: "Urano", symbol: "♅", href: PLANET_HREFS.uranus, category: "Planeta transpersonal", keywords: "Libertad • cambio • innovación", text: "Urano simboliza la independencia, la innovación, el despertar, la originalidad y los cambios que liberan estructuras demasiado rígidas." },
      { name: "Neptuno", symbol: "♆", href: PLANET_HREFS.neptune, category: "Planeta transpersonal", keywords: "Intuición • imaginación • ideal", text: "Neptuno representa la intuición, los sueños, la imaginación, la compasión, los ideales y las percepciones que superan la lógica inmediata." },
      { name: "Plutón", symbol: "♇", href: PLANET_HREFS.pluto, category: "Planeta transpersonal", keywords: "Transformación • poder • renacimiento", text: "Plutón simboliza las transformaciones profundas, las crisis, el poder interior, las verdades ocultas y la capacidad de regeneración." },
    ],
    groupsKicker: "Tres niveles de interpretación",
    groupsTitle: "Planetas personales, sociales y transpersonales",
    groups: [
      { icons: "☀ ☽ ☿ ♀ ♂", title: "Los planetas personales", text: "El Sol, la Luna, Mercurio, Venus y Marte se relacionan directamente con la identidad, las emociones, el pensamiento, las relaciones y la acción individual." },
      { icons: "♃ ♄", title: "Los planetas sociales", text: "Júpiter y Saturno describen cómo crecemos, nos situamos en la sociedad, asumimos responsabilidades y construimos con el tiempo." },
      { icons: "♅ ♆ ♇", title: "Los planetas transpersonales", text: "Urano, Neptuno y Plutón se desplazan lentamente. Su signo suele afectar a una generación, mientras su casa precisa su expresión personal." },
    ],
    luminariesTitle: "Las luminarias: el Sol y la Luna",
    sunTitle: "El Sol",
    sunText:
      "Astronómicamente, el Sol es una estrella. En el lenguaje astrológico se agrupa con los planetas y representa la identidad consciente, la vitalidad y la voluntad.",
    sunLink: "Leer la guía del Sol",
    moonTitle: "La Luna",
    moonText:
      "Astronómicamente, la Luna es el satélite natural de la Tierra. En astrología describe las emociones, los hábitos, las necesidades y la seguridad interior.",
    moonLink: "Leer la guía de la Luna",
    differencesTitle: "¿Por qué son diferentes las personas del mismo signo?",
    differencesParagraphs: [
      "El signo solar solo representa una parte de la carta natal. Dos personas nacidas bajo el mismo signo pueden tener una Luna, un Ascendente, un Mercurio, una Venus o un Marte muy diferentes.",
      "Las casas astrológicas también cambian según la hora y el lugar de nacimiento. Los aspectos entre planetas añaden combinaciones particulares. El conjunto de estos elementos hace única cada carta natal.",
    ],
    ctaKicker: "Descubre tus posiciones",
    ctaTitle: "¿Dónde están tus planetas en tu carta natal?",
    ctaText:
      "Genera gratis tu carta natal para descubrir los signos, las casas y las principales posiciones astrológicas de tu nacimiento.",
    ctaButton: "Descubrir mi carta natal",
    faqKicker: "Preguntas frecuentes",
    faqTitle: "Preguntas sobre los planetas en astrología",
    faq: [
      { question: "¿Qué representan los planetas en astrología?", answer: "En el lenguaje astrológico, cada planeta representa una función particular de la personalidad o de la experiencia: identidad, emociones, pensamiento, relaciones, acción, crecimiento, límites, cambio, intuición o transformación." },
      { question: "¿Cuál es el planeta más importante en una carta natal?", answer: "No existe un único planeta más importante para todas las cartas. El Sol, la Luna y el Ascendente son referencias centrales, pero los demás planetas, casas y aspectos aportan información esencial." },
      { question: "¿Por qué el Sol y la Luna se llaman planetas en astrología?", answer: "En la astrología tradicional y moderna, la palabra planeta se usa simbólicamente para agrupar los astros interpretados en la carta natal. Astronómicamente, el Sol es una estrella y la Luna un satélite natural." },
      { question: "¿Qué significa un planeta en un signo zodiacal?", answer: "El planeta representa una función, mientras el signo describe cómo se expresa. Marte, por ejemplo, representa la acción y su signo precisa el estilo de acción." },
      { question: "¿Qué significa un planeta en una casa astrológica?", answer: "La casa indica el ámbito de vida donde la energía simbólica del planeta se expresa más directamente: identidad, recursos, relaciones, carrera, familia o proyectos." },
      { question: "¿Qué son los aspectos entre los planetas?", answer: "Los aspectos son ángulos formados entre los planetas en la carta natal. Se interpretan como relaciones de fluidez, tensión, cooperación o intensificación entre sus funciones simbólicas." },
      { question: "¿Cómo puedo conocer la posición de mis planetas?", answer: "Debes generar una carta natal con tu fecha, hora y lugar de nacimiento para conocer los signos, casas y aspectos de tus planetas." },
    ],
    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, legal o financiero.",
  },

  de: {
    metadata: {
      title: "Planeten in der Astrologie: Bedeutung und Rolle im Geburtshoroskop | Luna Astralis",
      description:
        "Entdecken Sie die Bedeutung von Sonne, Mond, Merkur, Venus, Mars, Jupiter, Saturn, Uranus, Neptun und Pluto in Ihrem Geburtshoroskop.",
      ogTitle: "Planeten in der Astrologie: Ihr Geburtshoroskop verstehen",
      ogDescription:
        "Entdecken Sie die Rolle der zehn wichtigsten astrologischen Planeten und ihre Bedeutung im Geburtshoroskop.",
      twitterTitle: "Planeten in der Astrologie | Luna Astralis",
      twitterDescription:
        "Sonne, Mond, Merkur, Venus, Mars, Jupiter, Saturn, Uranus, Neptun und Pluto: Entdecken Sie ihre Bedeutung.",
      locale: "de_DE",
      language: "de-DE",
    },
    jsonLd: {
      name: "Planeten in der Astrologie",
      headline:
        "Planeten in der Astrologie: Bedeutung und Rolle im Geburtshoroskop",
      description:
        "Ein Leitfaden zu den wichtigsten Planeten in der astrologischen Deutung eines Geburtshoroskops.",
    },
    badge: "✦ Astrologische Bibliothek",
    title: "Planeten in der Astrologie",
    lead:
      "Die Planeten stehen für die verschiedenen symbolischen Funktionen Ihres Geburtshoroskops: Identität, Gefühle, Denken, Beziehungen, Energie und große Wandlungsprozesse.",
    createChart: "Kostenloses Geburtshoroskop erstellen",
    explorePlanets: "Planeten entdecken",
    introKicker: "Die Kräfte Ihres Geburtshoroskops",
    introTitle: "Welche Rolle spielen die Planeten im Geburtshoroskop?",
    introParagraphs: [
      "In der astrologischen Deutung stehen die Planeten für unterschiedliche Funktionen. Die Sonne betrifft bewusste Identität, der Mond emotionale Bedürfnisse, Merkur das Denken, Venus Beziehungswerte und Mars die Art zu handeln.",
      "Jupiter und Saturn beschreiben stärker soziale Prozesse: Entwicklung, Überzeugungen, Verantwortung und langfristigen Aufbau. Uranus, Neptun und Pluto werden mit kollektiveren Bewegungen und Wandlungen verbunden, die über die individuelle Persönlichkeit hinausgehen.",
      "Zur Deutung eines Planeten betrachtet man sein Zeichen, sein Haus und seine Aspekte zu anderen Planeten. Diese drei Ebenen zeigen Funktion, Ausdrucksweise und den hauptsächlich betroffenen Lebensbereich.",
    ],
    readingTitle: "Wie liest man einen Planeten im Geburtshoroskop?",
    readingCards: [
      { number: "01", title: "Der Planet", text: "Er steht für die untersuchte astrologische Funktion: denken, lieben, handeln, wachsen, strukturieren oder verwandeln." },
      { number: "02", title: "Das Zeichen", text: "Es beschreibt, wie sich die Energie des Planeten ausdrückt, mit ihren Eigenschaften, ihrem Rhythmus und ihren Bedürfnissen." },
      { number: "03", title: "Das Haus", text: "Es zeigt den Lebensbereich, in dem diese Energie besondere Bedeutung erhält." },
      { number: "04", title: "Die Aspekte", text: "Sie zeigen, wie der Planet mit anderen Funktionen des Geburtshoroskops kooperiert, kommuniziert oder in Spannung steht." },
    ],
    listKicker: "Die zehn großen astrologischen Funktionen",
    listTitle: "Bedeutung der Planeten in der Astrologie",
    listIntro:
      "Wählen Sie einen Planeten, um seine detaillierte Rolle, seinen Ausdruck in den zwölf Zeichen, seinen Einfluss in den zwölf Häusern und seine wichtigsten Aspekte zu entdecken.",
    planetTitleSuffix: "in der Astrologie",
    discoverLabel: "Entdecken",
    discoverAria: "{planet} in der Astrologie entdecken",
    planets: [
      { name: "Sonne", symbol: "☀", href: PLANET_HREFS.sun, category: "Licht", keywords: "Identität • Wille • Vitalität", text: "Die Sonne steht für bewusste Identität, Willen, persönliche Ausstrahlung und die Richtung, die Sie Ihrem Leben nach und nach geben möchten." },
      { name: "Mond", symbol: "☽", href: PLANET_HREFS.moon, category: "Licht", keywords: "Gefühle • Bedürfnisse • Sicherheit", text: "Der Mond beschreibt die Gefühlswelt, instinktive Reaktionen, Gewohnheiten und die Bedingungen, die innere Sicherheit ermöglichen." },
      { name: "Merkur", symbol: "☿", href: PLANET_HREFS.mercury, category: "Persönlicher Planet", keywords: "Denken • Kommunikation • Lernen", text: "Merkur symbolisiert die Art zu denken, zu kommunizieren, zu lernen, Informationen zu analysieren und die Umgebung zu verstehen." },
      { name: "Venus", symbol: "♀", href: PLANET_HREFS.venus, category: "Persönlicher Planet", keywords: "Liebe • Werte • Anziehung", text: "Venus steht für die Art zu lieben, Geschmack, Werte, Anziehung, Freude und das Streben nach Harmonie in Beziehungen." },
      { name: "Mars", symbol: "♂", href: PLANET_HREFS.mars, category: "Persönlicher Planet", keywords: "Handlung • Begehren • Mut", text: "Mars beschreibt Energie, Initiative, Begehren, Mut und die Art, sich zu behaupten, Grenzen zu verteidigen und Ziele zu verfolgen." },
      { name: "Jupiter", symbol: "♃", href: PLANET_HREFS.jupiter, category: "Sozialer Planet", keywords: "Expansion • Vertrauen • Wachstum", text: "Jupiter symbolisiert Wachstum, Überzeugungen, Vertrauen, Offenheit, Möglichkeiten und die Suche nach größerem Sinn." },
      { name: "Saturn", symbol: "♄", href: PLANET_HREFS.saturn, category: "Sozialer Planet", keywords: "Struktur • Grenzen • Reife", text: "Saturn steht für Verantwortung, Grenzen, Disziplin, Zeit und den schrittweisen Aufbau dauerhafter Stärke." },
      { name: "Uranus", symbol: "♅", href: PLANET_HREFS.uranus, category: "Transpersonaler Planet", keywords: "Freiheit • Wandel • Innovation", text: "Uranus symbolisiert Unabhängigkeit, Innovation, Erwachen, Originalität und Veränderungen, die zu starre Strukturen aufbrechen." },
      { name: "Neptun", symbol: "♆", href: PLANET_HREFS.neptune, category: "Transpersonaler Planet", keywords: "Intuition • Fantasie • Ideal", text: "Neptun steht für Intuition, Träume, Fantasie, Mitgefühl, Ideale und Wahrnehmungen jenseits unmittelbarer Logik." },
      { name: "Pluto", symbol: "♇", href: PLANET_HREFS.pluto, category: "Transpersonaler Planet", keywords: "Transformation • Macht • Wiedergeburt", text: "Pluto symbolisiert tiefe Wandlung, Krisen, innere Macht, verborgene Wahrheiten und Regenerationsfähigkeit." },
    ],
    groupsKicker: "Drei Ebenen der Deutung",
    groupsTitle: "Persönliche, soziale und transpersonale Planeten",
    groups: [
      { icons: "☀ ☽ ☿ ♀ ♂", title: "Persönliche Planeten", text: "Sonne, Mond, Merkur, Venus und Mars sind direkt mit Identität, Gefühlen, Denken, Beziehungen und individuellem Handeln verbunden." },
      { icons: "♃ ♄", title: "Soziale Planeten", text: "Jupiter und Saturn beschreiben, wie wir wachsen, uns gesellschaftlich einordnen, Verantwortung übernehmen und langfristig aufbauen." },
      { icons: "♅ ♆ ♇", title: "Transpersonale Planeten", text: "Uranus, Neptun und Pluto bewegen sich langsam. Ihr Zeichen betrifft oft eine Generation, während das Haus den persönlichen Ausdruck zeigt." },
    ],
    luminariesTitle: "Die Lichter: Sonne und Mond",
    sunTitle: "Die Sonne",
    sunText:
      "Astronomisch ist die Sonne ein Stern. In der astrologischen Sprache wird sie mit den Planeten zusammengefasst und steht für bewusste Identität, Vitalität und Willen.",
    sunLink: "Den Sonnen-Leitfaden lesen",
    moonTitle: "Der Mond",
    moonText:
      "Astronomisch ist der Mond der natürliche Satellit der Erde. In der Astrologie beschreibt er Gefühle, Gewohnheiten, Bedürfnisse und innere Sicherheit.",
    moonLink: "Den Mond-Leitfaden lesen",
    differencesTitle: "Warum sind Menschen desselben Zeichens verschieden?",
    differencesParagraphs: [
      "Das Sonnenzeichen ist nur ein Teil des Geburtshoroskops. Zwei Menschen mit demselben Zeichen können sehr unterschiedliche Monde, Aszendenten, Merkur-, Venus- oder Marsstellungen haben.",
      "Auch die Häuser verändern sich je nach Geburtszeit und -ort. Aspekte zwischen den Planeten fügen besondere Kombinationen hinzu. Die Gesamtheit dieser Elemente macht jedes Geburtshoroskop einzigartig.",
    ],
    ctaKicker: "Entdecken Sie Ihre Positionen",
    ctaTitle: "Wo stehen Ihre Planeten im Geburtshoroskop?",
    ctaText:
      "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Zeichen, Häuser und die wichtigsten astrologischen Positionen Ihrer Geburt.",
    ctaButton: "Mein Geburtshoroskop entdecken",
    faqKicker: "Häufige Fragen",
    faqTitle: "Fragen zu den Planeten in der Astrologie",
    faq: [
      { question: "Wofür stehen die Planeten in der Astrologie?", answer: "In der astrologischen Sprache steht jeder Planet für eine bestimmte Funktion von Persönlichkeit oder Erfahrung: Identität, Gefühle, Denken, Beziehungen, Handlung, Wachstum, Grenzen, Wandel, Intuition oder Transformation." },
      { question: "Welcher Planet ist im Geburtshoroskop am wichtigsten?", answer: "Es gibt keinen einzelnen wichtigsten Planeten für alle Horoskope. Sonne, Mond und Aszendent sind zentrale Bezugspunkte, doch andere Planeten, Häuser und Aspekte liefern wesentliche Informationen." },
      { question: "Warum werden Sonne und Mond in der Astrologie Planeten genannt?", answer: "In traditioneller und moderner Astrologie wird das Wort Planet oft symbolisch für die im Geburtshoroskop gedeuteten Himmelskörper verwendet. Astronomisch ist die Sonne ein Stern und der Mond ein natürlicher Satellit." },
      { question: "Was bedeutet ein Planet in einem Tierkreiszeichen?", answer: "Der Planet steht für eine Funktion, das Zeichen beschreibt, wie diese Funktion ausgedrückt wird. Mars steht zum Beispiel für Handlung; sein Zeichen beschreibt den Handlungsstil." },
      { question: "Was bedeutet ein Planet in einem astrologischen Haus?", answer: "Das Haus zeigt den Lebensbereich, in dem sich die symbolische Energie des Planeten am unmittelbarsten ausdrückt: Identität, Ressourcen, Beziehungen, Beruf, Familie oder Projekte." },
      { question: "Was sind Aspekte zwischen Planeten?", answer: "Aspekte sind Winkel zwischen Planeten im Geburtshoroskop. Sie werden als Beziehungen von Fluss, Spannung, Kooperation oder Verstärkung zwischen symbolischen Funktionen gedeutet." },
      { question: "Wie finde ich die Positionen meiner Planeten?", answer: "Erstellen Sie anhand von Geburtsdatum, -zeit und -ort ein Geburtshoroskop, um Zeichen, Häuser und Aspekte Ihrer Planeten zu erfahren." },
    ],
    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title: "I pianeti in astrologia: significato e ruolo nel tema natale | Luna Astralis",
      description:
        "Scopri il significato di Sole, Luna, Mercurio, Venere, Marte, Giove, Saturno, Urano, Nettuno e Plutone nel tuo tema natale.",
      ogTitle: "I pianeti in astrologia: comprendere il tema natale",
      ogDescription:
        "Esplora il ruolo dei dieci principali pianeti astrologici e ciò che rappresentano nel tema natale.",
      twitterTitle: "I pianeti in astrologia | Luna Astralis",
      twitterDescription:
        "Sole, Luna, Mercurio, Venere, Marte, Giove, Saturno, Urano, Nettuno e Plutone: scopri il loro significato.",
      locale: "it_IT",
      language: "it-IT",
    },
    jsonLd: {
      name: "I pianeti in astrologia",
      headline:
        "I pianeti in astrologia: significato e ruolo nel tema natale",
      description:
        "Guida ai principali pianeti utilizzati nell’interpretazione astrologica del tema natale.",
    },
    badge: "✦ Biblioteca astrologica",
    title: "I pianeti in astrologia",
    lead:
      "I pianeti rappresentano le diverse funzioni simboliche del tema natale: identità, emozioni, pensiero, relazioni, energia e grandi trasformazioni.",
    createChart: "Crea il mio tema natale gratuito",
    explorePlanets: "Esplora i pianeti",
    introKicker: "Le forze del tuo tema natale",
    introTitle: "Qual è il ruolo dei pianeti nel tema natale?",
    introParagraphs: [
      "Nell’interpretazione astrologica, i pianeti rappresentano funzioni diverse. Il Sole riguarda l’identità cosciente, la Luna i bisogni emotivi, Mercurio il pensiero, Venere i valori relazionali e Marte il modo di agire.",
      "Giove e Saturno descrivono processi più sociali: sviluppo, credenze, responsabilità e costruzione nel tempo. Urano, Nettuno e Plutone sono associati a movimenti collettivi e trasformazioni che superano la sola personalità individuale.",
      "Per interpretare un pianeta bisogna osservare il segno, la casa e gli aspetti con gli altri pianeti. Questi tre livelli mostrano funzione, modo di espressione e ambito di vita principalmente coinvolto.",
    ],
    readingTitle: "Come leggere un pianeta nel tema natale?",
    readingCards: [
      { number: "01", title: "Il pianeta", text: "Rappresenta la funzione astrologica studiata: pensare, amare, agire, crescere, strutturare o trasformare." },
      { number: "02", title: "Il segno", text: "Descrive come si esprime l’energia del pianeta, con qualità, ritmo e bisogni particolari." },
      { number: "03", title: "La casa", text: "Indica l’ambito della vita in cui questa energia assume particolare importanza." },
      { number: "04", title: "Gli aspetti", text: "Rivelano come il pianeta coopera, dialoga o entra in tensione con le altre funzioni del tema natale." },
    ],
    listKicker: "Le dieci grandi funzioni astrologiche",
    listTitle: "Significato dei pianeti in astrologia",
    listIntro:
      "Seleziona un pianeta per scoprirne il ruolo dettagliato, l’espressione nei dodici segni, l’influenza nelle dodici case e gli aspetti principali.",
    planetTitleSuffix: "in astrologia",
    discoverLabel: "Scopri",
    discoverAria: "Scopri {planet} in astrologia",
    planets: [
      { name: "Sole", symbol: "☀", href: PLANET_HREFS.sun, category: "Luminare", keywords: "Identità • volontà • vitalità", text: "Il Sole rappresenta identità cosciente, volontà, luminosità personale e la direzione che cerchi gradualmente di dare alla tua vita." },
      { name: "Luna", symbol: "☽", href: PLANET_HREFS.moon, category: "Luminare", keywords: "Emozioni • bisogni • sicurezza", text: "La Luna descrive mondo emotivo, reazioni istintive, abitudini e condizioni necessarie per sentirsi interiormente al sicuro." },
      { name: "Mercurio", symbol: "☿", href: PLANET_HREFS.mercury, category: "Pianeta personale", keywords: "Pensiero • comunicazione • apprendimento", text: "Mercurio simboleggia il modo di pensare, comunicare, imparare, analizzare informazioni e comprendere l’ambiente." },
      { name: "Venere", symbol: "♀", href: PLANET_HREFS.venus, category: "Pianeta personale", keywords: "Amore • valori • attrazione", text: "Venere rappresenta il modo di amare, i gusti, i valori, l’attrazione, il piacere e la ricerca di armonia nelle relazioni." },
      { name: "Marte", symbol: "♂", href: PLANET_HREFS.mars, category: "Pianeta personale", keywords: "Azione • desiderio • coraggio", text: "Marte descrive energia, iniziativa, desiderio, coraggio e modo di affermarsi, difendere i limiti e perseguire gli obiettivi." },
      { name: "Giove", symbol: "♃", href: PLANET_HREFS.jupiter, category: "Pianeta sociale", keywords: "Espansione • fiducia • crescita", text: "Giove simboleggia crescita, credenze, fiducia, apertura, possibilità e ricerca di un significato più ampio." },
      { name: "Saturno", symbol: "♄", href: PLANET_HREFS.saturn, category: "Pianeta sociale", keywords: "Struttura • limiti • maturità", text: "Saturno rappresenta responsabilità, limiti, disciplina, tempo e costruzione progressiva di una forza duratura." },
      { name: "Urano", symbol: "♅", href: PLANET_HREFS.uranus, category: "Pianeta transpersonale", keywords: "Libertà • cambiamento • innovazione", text: "Urano simboleggia indipendenza, innovazione, risveglio, originalità e cambiamenti che liberano strutture troppo rigide." },
      { name: "Nettuno", symbol: "♆", href: PLANET_HREFS.neptune, category: "Pianeta transpersonale", keywords: "Intuizione • immaginazione • ideale", text: "Nettuno rappresenta intuizione, sogni, immaginazione, compassione, ideali e percezioni oltre la logica immediata." },
      { name: "Plutone", symbol: "♇", href: PLANET_HREFS.pluto, category: "Pianeta transpersonale", keywords: "Trasformazione • potere • rinascita", text: "Plutone simboleggia trasformazioni profonde, crisi, potere interiore, verità nascoste e capacità di rigenerazione." },
    ],
    groupsKicker: "Tre livelli di interpretazione",
    groupsTitle: "Pianeti personali, sociali e transpersonali",
    groups: [
      { icons: "☀ ☽ ☿ ♀ ♂", title: "I pianeti personali", text: "Sole, Luna, Mercurio, Venere e Marte sono direttamente collegati a identità, emozioni, pensiero, relazioni e azione individuale." },
      { icons: "♃ ♄", title: "I pianeti sociali", text: "Giove e Saturno descrivono il modo di crescere, collocarsi nella società, assumersi responsabilità e costruire nel tempo." },
      { icons: "♅ ♆ ♇", title: "I pianeti transpersonali", text: "Urano, Nettuno e Plutone si muovono lentamente. Il loro segno riguarda spesso una generazione, mentre la casa ne precisa l’espressione personale." },
    ],
    luminariesTitle: "I luminari: il Sole e la Luna",
    sunTitle: "Il Sole",
    sunText:
      "Astronomicamente, il Sole è una stella. Nel linguaggio astrologico viene raggruppato con i pianeti e rappresenta identità cosciente, vitalità e volontà.",
    sunLink: "Leggi la guida del Sole",
    moonTitle: "La Luna",
    moonText:
      "Astronomicamente, la Luna è il satellite naturale della Terra. In astrologia descrive emozioni, abitudini, bisogni e sicurezza interiore.",
    moonLink: "Leggi la guida della Luna",
    differencesTitle: "Perché persone dello stesso segno sono diverse?",
    differencesParagraphs: [
      "Il segno solare rappresenta solo una parte del tema natale. Due persone nate sotto lo stesso segno possono avere Luna, Ascendente, Mercurio, Venere o Marte molto diversi.",
      "Anche le case astrologiche cambiano secondo ora e luogo di nascita. Gli aspetti tra i pianeti aggiungono combinazioni particolari. L’insieme di questi elementi rende unico ogni tema natale.",
    ],
    ctaKicker: "Scopri le tue posizioni",
    ctaTitle: "Dove si trovano i tuoi pianeti nel tema natale?",
    ctaText:
      "Genera gratuitamente il tuo tema natale per scoprire segni, case e principali posizioni astrologiche della nascita.",
    ctaButton: "Scopri il mio tema natale",
    faqKicker: "Domande frequenti",
    faqTitle: "Domande sui pianeti in astrologia",
    faq: [
      { question: "Che cosa rappresentano i pianeti in astrologia?", answer: "Nel linguaggio astrologico, ogni pianeta rappresenta una funzione particolare della personalità o dell’esperienza: identità, emozioni, pensiero, relazioni, azione, crescita, limiti, cambiamento, intuizione o trasformazione." },
      { question: "Qual è il pianeta più importante nel tema natale?", answer: "Non esiste un unico pianeta più importante per tutti i temi. Sole, Luna e Ascendente sono riferimenti centrali, ma gli altri pianeti, le case e gli aspetti forniscono informazioni essenziali." },
      { question: "Perché Sole e Luna sono chiamati pianeti in astrologia?", answer: "Nell’astrologia tradizionale e moderna, la parola pianeta viene spesso usata simbolicamente per raggruppare gli astri interpretati nel tema natale. Astronomicamente, il Sole è una stella e la Luna un satellite naturale." },
      { question: "Che cosa significa un pianeta in un segno zodiacale?", answer: "Il pianeta rappresenta una funzione, mentre il segno descrive come questa funzione si esprime. Marte, per esempio, rappresenta l’azione e il suo segno ne precisa lo stile." },
      { question: "Che cosa significa un pianeta in una casa astrologica?", answer: "La casa indica l’ambito della vita in cui l’energia simbolica del pianeta si esprime più direttamente: identità, risorse, relazioni, carriera, famiglia o progetti." },
      { question: "Che cosa sono gli aspetti tra i pianeti?", answer: "Gli aspetti sono angoli formati tra i pianeti nel tema natale. Vengono interpretati come relazioni di fluidità, tensione, cooperazione o intensificazione tra funzioni simboliche." },
      { question: "Come posso conoscere la posizione dei miei pianeti?", answer: "Devi generare un tema natale con data, ora e luogo di nascita per conoscere segni, case e aspetti dei tuoi pianeti." },
    ],
    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce consulenze mediche, psicologiche, legali o finanziarie.",
  },

  pt: {
    metadata: {
      title: "Os planetas na astrologia: significado e papel no mapa astral | Luna Astralis",
      description:
        "Descubra o significado do Sol, da Lua, de Mercúrio, Vênus, Marte, Júpiter, Saturno, Urano, Netuno e Plutão no seu mapa astral.",
      ogTitle: "Os planetas na astrologia: compreenda seu mapa astral",
      ogDescription:
        "Explore o papel dos dez principais planetas astrológicos e o que representam no mapa astral.",
      twitterTitle: "Os planetas na astrologia | Luna Astralis",
      twitterDescription:
        "Sol, Lua, Mercúrio, Vênus, Marte, Júpiter, Saturno, Urano, Netuno e Plutão: descubra seus significados.",
      locale: "pt_BR",
      language: "pt-BR",
    },
    jsonLd: {
      name: "Os planetas na astrologia",
      headline:
        "Os planetas na astrologia: significado e papel no mapa astral",
      description:
        "Guia dos principais planetas utilizados na interpretação astrológica de um mapa astral.",
    },
    badge: "✦ Biblioteca astrológica",
    title: "Os planetas na astrologia",
    lead:
      "Os planetas representam as diferentes funções simbólicas do seu mapa astral: identidade, emoções, pensamento, relacionamentos, energia e grandes transformações.",
    createChart: "Criar meu mapa astral grátis",
    explorePlanets: "Explorar os planetas",
    introKicker: "As forças do seu mapa astral",
    introTitle: "Qual é o papel dos planetas em um mapa astral?",
    introParagraphs: [
      "Na interpretação astrológica, os planetas representam funções diferentes. O Sol se relaciona à identidade consciente; a Lua, às necessidades emocionais; Mercúrio, ao pensamento; Vênus, aos valores nos relacionamentos; e Marte, à maneira de agir.",
      "Júpiter e Saturno descrevem processos mais sociais: desenvolvimento, crenças, responsabilidades e construção ao longo do tempo. Urano, Netuno e Plutão estão associados a movimentos coletivos e transformações que ultrapassam a personalidade individual.",
      "Para interpretar um planeta, observe seu signo, sua casa e os aspectos que forma com outros planetas. Esses três níveis revelam sua função, sua maneira de expressão e a área da vida principalmente envolvida.",
    ],
    readingTitle: "Como ler um planeta no seu mapa astral?",
    readingCards: [
      { number: "01", title: "O planeta", text: "Representa a função astrológica estudada: pensar, amar, agir, crescer, estruturar ou transformar." },
      { number: "02", title: "O signo", text: "Descreve como a energia do planeta se expressa, com suas qualidades, ritmo e necessidades particulares." },
      { number: "03", title: "A casa", text: "Indica a área da vida em que essa energia ganha importância especial." },
      { number: "04", title: "Os aspectos", text: "Revelam como o planeta coopera, dialoga ou entra em tensão com outras funções do mapa astral." },
    ],
    listKicker: "As dez grandes funções astrológicas",
    listTitle: "Significado dos planetas na astrologia",
    listIntro:
      "Selecione um planeta para descobrir seu papel detalhado, sua expressão nos doze signos, sua influência nas doze casas e seus principais aspectos.",
    planetTitleSuffix: "na astrologia",
    discoverLabel: "Descobrir",
    discoverAria: "Descobrir {planet} na astrologia",
    planets: [
      { name: "Sol", symbol: "☀", href: PLANET_HREFS.sun, category: "Luminar", keywords: "Identidade • vontade • vitalidade", text: "O Sol representa identidade consciente, vontade, brilho pessoal e a direção que você procura dar progressivamente à sua vida." },
      { name: "Lua", symbol: "☽", href: PLANET_HREFS.moon, category: "Luminar", keywords: "Emoções • necessidades • segurança", text: "A Lua descreve o mundo emocional, as reações instintivas, os hábitos e as condições necessárias para sentir segurança interior." },
      { name: "Mercúrio", symbol: "☿", href: PLANET_HREFS.mercury, category: "Planeta pessoal", keywords: "Pensamento • comunicação • aprendizagem", text: "Mercúrio simboliza a maneira de pensar, comunicar, aprender, analisar informações e compreender o ambiente." },
      { name: "Vênus", symbol: "♀", href: PLANET_HREFS.venus, category: "Planeta pessoal", keywords: "Amor • valores • atração", text: "Vênus representa a maneira de amar, os gostos, os valores, a atração, o prazer e a busca de harmonia nos relacionamentos." },
      { name: "Marte", symbol: "♂", href: PLANET_HREFS.mars, category: "Planeta pessoal", keywords: "Ação • desejo • coragem", text: "Marte descreve energia, iniciativa, desejo, coragem e a maneira de se afirmar, defender limites e perseguir objetivos." },
      { name: "Júpiter", symbol: "♃", href: PLANET_HREFS.jupiter, category: "Planeta social", keywords: "Expansão • confiança • crescimento", text: "Júpiter simboliza crescimento, crenças, confiança, abertura, possibilidades e busca de um sentido mais amplo." },
      { name: "Saturno", symbol: "♄", href: PLANET_HREFS.saturn, category: "Planeta social", keywords: "Estrutura • limites • maturidade", text: "Saturno representa responsabilidades, limites, disciplina, tempo e a construção progressiva de uma força duradoura." },
      { name: "Urano", symbol: "♅", href: PLANET_HREFS.uranus, category: "Planeta transpessoal", keywords: "Liberdade • mudança • inovação", text: "Urano simboliza independência, inovação, despertar, originalidade e mudanças que libertam estruturas rígidas demais." },
      { name: "Netuno", symbol: "♆", href: PLANET_HREFS.neptune, category: "Planeta transpessoal", keywords: "Intuição • imaginação • ideal", text: "Netuno representa intuição, sonhos, imaginação, compaixão, ideais e percepções que ultrapassam a lógica imediata." },
      { name: "Plutão", symbol: "♇", href: PLANET_HREFS.pluto, category: "Planeta transpessoal", keywords: "Transformação • poder • renascimento", text: "Plutão simboliza transformações profundas, crises, poder interior, verdades ocultas e capacidade de regeneração." },
    ],
    groupsKicker: "Três níveis de interpretação",
    groupsTitle: "Planetas pessoais, sociais e transpessoais",
    groups: [
      { icons: "☀ ☽ ☿ ♀ ♂", title: "Os planetas pessoais", text: "Sol, Lua, Mercúrio, Vênus e Marte estão diretamente ligados à identidade, às emoções, ao pensamento, aos relacionamentos e à ação individual." },
      { icons: "♃ ♄", title: "Os planetas sociais", text: "Júpiter e Saturno descrevem como crescemos, nos situamos na sociedade, assumimos responsabilidades e construímos ao longo do tempo." },
      { icons: "♅ ♆ ♇", title: "Os planetas transpessoais", text: "Urano, Netuno e Plutão se movem lentamente. Seu signo muitas vezes diz respeito a uma geração, enquanto sua casa revela a expressão pessoal." },
    ],
    luminariesTitle: "Os luminares: o Sol e a Lua",
    sunTitle: "O Sol",
    sunText:
      "Astronomicamente, o Sol é uma estrela. Na linguagem astrológica, ele é agrupado com os planetas e representa identidade consciente, vitalidade e vontade.",
    sunLink: "Ler o guia do Sol",
    moonTitle: "A Lua",
    moonText:
      "Astronomicamente, a Lua é o satélite natural da Terra. Na astrologia, ela descreve emoções, hábitos, necessidades e segurança interior.",
    moonLink: "Ler o guia da Lua",
    differencesTitle: "Por que pessoas do mesmo signo são diferentes?",
    differencesParagraphs: [
      "O signo solar representa apenas uma parte do mapa astral. Duas pessoas nascidas sob o mesmo signo podem ter Lua, Ascendente, Mercúrio, Vênus ou Marte muito diferentes.",
      "As casas astrológicas também mudam conforme a hora e o local de nascimento. Os aspectos entre os planetas acrescentam combinações particulares. O conjunto desses elementos torna cada mapa astral único.",
    ],
    ctaKicker: "Descubra suas posições",
    ctaTitle: "Onde estão seus planetas no mapa astral?",
    ctaText:
      "Gere gratuitamente seu mapa astral para descobrir os signos, as casas e as principais posições astrológicas do seu nascimento.",
    ctaButton: "Descobrir meu mapa astral",
    faqKicker: "Perguntas frequentes",
    faqTitle: "Perguntas sobre os planetas na astrologia",
    faq: [
      { question: "O que os planetas representam na astrologia?", answer: "Na linguagem astrológica, cada planeta representa uma função particular da personalidade ou da experiência: identidade, emoções, pensamento, relacionamentos, ação, crescimento, limites, mudança, intuição ou transformação." },
      { question: "Qual é o planeta mais importante em um mapa astral?", answer: "Não existe um único planeta mais importante para todos os mapas. Sol, Lua e Ascendente são referências centrais, mas os outros planetas, casas e aspectos fornecem informações essenciais." },
      { question: "Por que o Sol e a Lua são chamados de planetas na astrologia?", answer: "Na astrologia tradicional e moderna, a palavra planeta é frequentemente usada de forma simbólica para agrupar os astros interpretados no mapa astral. Astronomicamente, o Sol é uma estrela e a Lua um satélite natural." },
      { question: "O que significa um planeta em um signo do zodíaco?", answer: "O planeta representa uma função, enquanto o signo descreve como essa função se expressa. Marte, por exemplo, representa a ação e seu signo define o estilo de ação." },
      { question: "O que significa um planeta em uma casa astrológica?", answer: "A casa indica a área da vida em que a energia simbólica do planeta se expressa mais diretamente: identidade, recursos, relacionamentos, carreira, família ou projetos." },
      { question: "O que são aspectos entre os planetas?", answer: "Os aspectos são ângulos formados entre os planetas no mapa astral. Eles são interpretados como relações de fluidez, tensão, cooperação ou intensificação entre funções simbólicas." },
      { question: "Como posso descobrir a posição dos meus planetas?", answer: "Gere um mapa astral com sua data, hora e local de nascimento para conhecer os signos, casas e aspectos dos seus planetas." },
    ],
    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
