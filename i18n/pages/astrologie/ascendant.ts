// i18n/pages/astrologie/ascendant.ts

import type { Locale } from "@/i18n/config";

export type RisingSignText = {
  sign: string;
  symbol: string;
  text: string;
};

export type RisingFaqItem = {
  question: string;
  answer: string;
};

export type AscendantPageText = {
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
    headline: string;
    description: string;
  };

  badge: string;
  title: string;
  lead: string;
  calculateButton: string;
  viewSigns: string;

  introKicker: string;
  introTitle: string;
  introParagraphs: string[];

  personalityTitle: string;
  personalityCards: {
    icon: string;
    title: string;
    text: string;
  }[];

  calculationTitle: string;
  calculationParagraphs: string[];

  precisionTitle: string;
  precisionParagraphs: string[];

  pillarsTitle: string;
  sunLink: string;
  moonLink: string;
  pillars: {
    symbol: string;
    title: string;
    text: string;
  }[];

  signsKicker: string;
  signsTitle: string;
  signsIntro: string;
  risingLabel: string;
  signs: RisingSignText[];

  houseTitle: string;
  houseParagraphs: string[];

  appearanceTitle: string;
  appearanceParagraphs: string[];

  whyTitle: string;
  whyParagraphs: string[];

  ctaKicker: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;

  faqKicker: string;
  faqTitle: string;
  faq: RisingFaqItem[];

  disclaimer: string;
};

export const ASCENDANT_TRANSLATIONS: Record<Locale, AscendantPageText> = {
  fr: {
    metadata: {
      title: "Ascendant en astrologie : personnalité, apparence et première impression | Luna Astralis",
      description:
        "Découvrez la signification de l’Ascendant en astrologie, son influence sur la personnalité, l’apparence et la première impression, ainsi que les 12 Ascendants du zodiaque.",
      ogTitle:
        "L’Ascendant en astrologie : personnalité et première impression",
      ogDescription:
        "Comprenez le rôle de l’Ascendant dans votre thème astral, son calcul et son influence sur votre manière d’aborder la vie.",
      twitterTitle:
        "L’Ascendant en astrologie | Luna Astralis",
      twitterDescription:
        "Découvrez votre Ascendant et son influence sur votre personnalité, votre comportement et votre manière d’entrer en relation avec le monde.",
      locale: "fr_CA",
      language: "fr-CA",
    },
    jsonLd: {
      headline:
        "L’Ascendant en astrologie : personnalité, apparence et première impression",
      description:
        "Guide complet consacré au rôle de l’Ascendant dans le thème natal, à son calcul et à son expression dans les douze signes du zodiaque.",
    },
    badge: "⬆️ Astrologie et thème natal",
    title: "L’Ascendant en astrologie",
    lead:
      "L’Ascendant représente votre manière spontanée d’aborder la vie, l’énergie que vous projetez et la première impression que vous donnez aux autres.",
    calculateButton:
      "Calculer mon Ascendant gratuitement",
    viewSigns:
      "Voir les 12 Ascendants",
    introKicker:
      "Comprendre votre Ascendant",
    introTitle:
      "Que représente l’Ascendant dans un thème astral ?",
    introParagraphs: [
      "En astrologie, l’Ascendant correspond au signe du zodiaque qui se levait à l’horizon Est au moment précis de votre naissance. Il constitue le point de départ de la Maison I et influence fortement votre manière d’entrer en contact avec le monde.",
      "L’Ascendant décrit votre comportement spontané, votre attitude visible et l’énergie que les autres perçoivent souvent en premier. Il peut également indiquer la manière dont vous vous adaptez à un nouvel environnement ou à une situation inconnue.",
      "Il ne représente pas un masque faux ou artificiel. Il constitue plutôt une porte d’entrée vers votre personnalité et une manière instinctive de répondre aux expériences de la vie.",
    ],
    personalityTitle:
      "L’Ascendant, la personnalité et la première impression",
    personalityCards: [
      {
        icon: "↑",
        title:
          "Votre manière d’aborder la vie",
        text:
          "L’Ascendant révèle votre attitude spontanée lorsque vous entrez dans une situation nouvelle ou inconnue.",
      },
      {
        icon: "✦",
        title:
          "Votre présence visible",
        text:
          "Il influence l’énergie que vous projetez et la façon dont les autres vous perçoivent lors d’une première rencontre.",
      },
      {
        icon: "◇",
        title:
          "Votre réflexe d’adaptation",
        text:
          "Il montre comment vous vous ajustez instinctivement à votre environnement et aux circonstances extérieures.",
      },
    ],
    calculationTitle:
      "Comment l’Ascendant est-il calculé ?",
    calculationParagraphs: [
      "L’Ascendant est calculé à partir de trois informations essentielles : la date, l’heure précise et le lieu de naissance. Ces données permettent de déterminer quel signe se trouvait à l’horizon Est au moment de la naissance.",
      "Contrairement au signe solaire, qui demeure généralement le même pendant plusieurs semaines, l’Ascendant change rapidement au cours de la journée. En moyenne, un nouveau signe se lève environ toutes les deux heures.",
      "Le lieu de naissance est également indispensable, car la position de l’horizon varie selon la latitude et la longitude. Deux personnes nées au même moment dans des régions différentes peuvent donc avoir un Ascendant différent.",
    ],
    precisionTitle:
      "Pourquoi l’heure de naissance doit-elle être précise ?",
    precisionParagraphs: [
      "Une petite différence dans l’heure de naissance peut modifier le degré de l’Ascendant et déplacer les cuspides des maisons astrologiques. Lorsque la naissance se situe près d’un changement de signe, quelques minutes peuvent parfois produire un Ascendant différent.",
      "Une heure approximative peut donner une indication, mais elle ne garantit pas un résultat exact. Pour une carte du ciel complète, il est préférable d’utiliser l’heure inscrite sur le certificat ou le dossier de naissance lorsque cette information est disponible.",
    ],
    pillarsTitle:
      "Quelle différence entre le Soleil, la Lune et l’Ascendant ?",
    sunLink:
      "Découvrir le Soleil",
    moonLink:
      "Découvrir la Lune",
    pillars: [
      {
        symbol: "☀️",
        title: "Le Soleil",
        text:
          "Il représente votre identité consciente, votre volonté, votre vitalité et la direction que vous cherchez à donner à votre vie.",
      },
      {
        symbol: "🌙",
        title: "La Lune",
        text:
          "Elle décrit votre sensibilité, vos réactions instinctives, vos besoins affectifs et votre recherche de sécurité intérieure.",
      },
      {
        symbol: "↑",
        title: "L’Ascendant",
        text:
          "Il révèle votre attitude visible, votre manière spontanée d’aborder la vie et l’impression que vous produisez.",
      },
    ],
    signsKicker:
      "Les douze expressions de l’Ascendant",
    signsTitle:
      "L’Ascendant dans les 12 signes astrologiques",
    signsIntro:
      "L’Ascendant conserve toujours sa fonction liée à l’apparence, au comportement spontané et à la manière d’entrer en relation avec le monde. Son expression varie toutefois selon le signe du zodiaque qui se levait au moment de la naissance.",
    risingLabel:
      "Ascendant",
    signs: [
      { sign: "Bélier", symbol: "♈", text: "L’Ascendant Bélier aborde la vie avec énergie, spontanéité et courage. Il donne souvent une impression de dynamisme, de franchise et d’indépendance. Cette personne avance rapidement et préfère agir plutôt qu’attendre." },
      { sign: "Taureau", symbol: "♉", text: "L’Ascendant Taureau donne une présence calme, stable et rassurante. Il favorise une approche prudente, patiente et concrète de la vie. Cette personne cherche généralement à construire sur des bases solides." },
      { sign: "Gémeaux", symbol: "♊", text: "L’Ascendant Gémeaux apporte curiosité, mobilité et facilité de communication. Il donne souvent une impression vive, adaptable et sociable. Cette personne aime comprendre son environnement et multiplier les échanges." },
      { sign: "Cancer", symbol: "♋", text: "L’Ascendant Cancer donne une présence sensible, protectrice et réceptive. Il favorise une approche prudente et intuitive du monde. Cette personne observe souvent l’atmosphère avant de s’ouvrir pleinement." },
      { sign: "Lion", symbol: "♌", text: "L’Ascendant Lion apporte chaleur, assurance et visibilité. Il donne souvent une impression de générosité, de présence et de créativité. Cette personne cherche naturellement à exprimer son individualité." },
      { sign: "Vierge", symbol: "♍", text: "L’Ascendant Vierge donne une apparence réservée, attentive et organisée. Il favorise une approche pratique et analytique de la vie. Cette personne remarque rapidement les détails et cherche à améliorer ce qui l’entoure." },
      { sign: "Balance", symbol: "♎", text: "L’Ascendant Balance apporte charme, diplomatie et recherche d’harmonie. Il donne souvent une impression agréable, sociable et équilibrée. Cette personne tient compte des autres avant de prendre position." },
      { sign: "Scorpion", symbol: "♏", text: "L’Ascendant Scorpion donne une présence intense, mystérieuse et magnétique. Il favorise une approche lucide et prudente des relations. Cette personne observe profondément avant d’accorder sa confiance." },
      { sign: "Sagittaire", symbol: "♐", text: "L’Ascendant Sagittaire apporte enthousiasme, franchise et goût de l’exploration. Il donne souvent une impression optimiste et ouverte. Cette personne cherche naturellement à élargir ses horizons." },
      { sign: "Capricorne", symbol: "♑", text: "L’Ascendant Capricorne donne une présence sérieuse, maîtrisée et responsable. Il favorise une approche structurée et ambitieuse de la vie. Cette personne avance avec prudence et persévérance." },
      { sign: "Verseau", symbol: "♒", text: "L’Ascendant Verseau apporte originalité, indépendance et recul. Il donne souvent une impression différente, libre et imprévisible. Cette personne préfère suivre sa propre voie plutôt que les conventions." },
      { sign: "Poissons", symbol: "♓", text: "L’Ascendant Poissons donne une présence douce, intuitive et réceptive. Il favorise une approche sensible et imaginative du monde. Cette personne capte facilement les émotions et les ambiances qui l’entourent." },
    ],
    houseTitle:
      "L’Ascendant et la Maison I",
    houseParagraphs: [
      "L’Ascendant marque le début de la Maison I, la maison astrologique associée à l’identité visible, à l’initiative, au comportement spontané et à la manière d’occuper l’espace.",
      "Le signe de l’Ascendant donne une première couleur à cette maison, mais les planètes présentes en Maison I peuvent également modifier son expression. Une planète proche de l’Ascendant peut devenir particulièrement visible dans la personnalité.",
      "Le maître de l’Ascendant, c’est-à-dire la planète qui gouverne son signe, apporte aussi des informations importantes. Sa position en signe et en maison aide à comprendre comment l’énergie de l’Ascendant se développe dans la vie.",
    ],
    appearanceTitle:
      "L’Ascendant influence-t-il l’apparence physique ?",
    appearanceParagraphs: [
      "En astrologie traditionnelle, l’Ascendant est parfois associé à l’apparence, à la posture, aux expressions du visage et à la manière de se présenter. Il peut contribuer à certaines tendances visibles, sans déterminer à lui seul les caractéristiques physiques.",
      "L’hérédité, le mode de vie, l’environnement et de nombreux facteurs personnels jouent évidemment un rôle majeur. L’Ascendant doit donc être interprété comme un symbole de présence et d’expression plutôt que comme une description physique absolue.",
    ],
    whyTitle:
      "Pourquoi connaître son Ascendant ?",
    whyParagraphs: [
      "Connaître son Ascendant permet de mieux comprendre la différence entre ce que l’on ressent intérieurement et ce que l’on montre spontanément. Certaines personnes se reconnaissent immédiatement dans leur signe solaire, tandis que d’autres remarquent d’abord les traits de leur Ascendant.",
      "L’Ascendant aide également à comprendre l’organisation complète du thème natal, puisqu’il détermine la position des douze maisons astrologiques. Il constitue donc une donnée essentielle pour interpréter les domaines de vie associés aux planètes.",
    ],
    ctaKicker:
      "Découvrez votre Ascendant",
    ctaTitle:
      "Quel signe se levait au moment de votre naissance ?",
    ctaText:
      "Générez gratuitement votre carte du ciel pour découvrir votre Ascendant, votre Soleil, votre Lune et les positions de vos principales planètes.",
    ctaButton:
      "Calculer mon Ascendant",
    faqKicker:
      "Questions fréquentes",
    faqTitle:
      "Questions sur l’Ascendant en astrologie",
    faq: [
      { question: "Que représente l’Ascendant en astrologie ?", answer: "L’Ascendant représente la manière spontanée d’aborder la vie, l’attitude visible, la première impression donnée aux autres et la façon dont une personne entre en relation avec son environnement." },
      { question: "Comment l’Ascendant est-il calculé ?", answer: "L’Ascendant correspond au signe qui se levait à l’horizon Est au moment précis de la naissance. Son calcul nécessite la date, l’heure et le lieu de naissance." },
      { question: "Pourquoi l’heure de naissance est-elle importante ?", answer: "L’Ascendant change approximativement toutes les deux heures. Une différence de quelques minutes peut parfois modifier son degré et, près d’un changement de signe, changer l’Ascendant lui-même." },
      { question: "L’Ascendant est-il plus important que le signe solaire ?", answer: "L’Ascendant et le signe solaire décrivent des dimensions différentes. Le Soleil représente l’identité consciente, tandis que l’Ascendant décrit la manière immédiate d’aborder la vie et de se présenter au monde." },
      { question: "Peut-on connaître son Ascendant sans heure de naissance ?", answer: "Une heure précise est normalement nécessaire pour déterminer l’Ascendant avec fiabilité. Sans cette information, le résultat demeure incertain." },
    ],
    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title: "Ascendant in Astrology: Personality, Appearance and First Impression | Luna Astralis",
      description:
        "Discover the meaning of the Ascendant in astrology, its influence on personality, appearance and first impressions, and the 12 rising signs.",
      ogTitle:
        "The Ascendant in Astrology: Personality and First Impression",
      ogDescription:
        "Understand the role of the Ascendant in your birth chart, how it is calculated and how it shapes your approach to life.",
      twitterTitle:
        "The Ascendant in Astrology | Luna Astralis",
      twitterDescription:
        "Discover your Ascendant and its influence on personality, behavior and the way you relate to the world.",
      locale: "en_US",
      language: "en-US",
    },
    jsonLd: {
      headline:
        "The Ascendant in Astrology: Personality, Appearance and First Impression",
      description:
        "A complete guide to the Ascendant in the birth chart, its calculation and its expression through the twelve zodiac signs.",
    },
    badge:
      "⬆️ Astrology and birth chart",
    title:
      "The Ascendant in Astrology",
    lead:
      "The Ascendant represents your spontaneous approach to life, the energy you project and the first impression you make on others.",
    calculateButton:
      "Calculate my Ascendant for free",
    viewSigns:
      "View the 12 rising signs",
    introKicker:
      "Understanding your Ascendant",
    introTitle:
      "What does the Ascendant represent in a birth chart?",
    introParagraphs: [
      "In astrology, the Ascendant is the zodiac sign rising on the eastern horizon at the exact moment of birth. It marks the beginning of the First House and strongly influences how you engage with the world.",
      "The Ascendant describes spontaneous behavior, visible attitude and the energy others often notice first. It can also indicate how you adapt to new environments or unfamiliar situations.",
      "It is not a false or artificial mask. It is better understood as a gateway into personality and an instinctive way of responding to life experiences.",
    ],
    personalityTitle:
      "The Ascendant, personality and first impression",
    personalityCards: [
      {
        icon: "↑",
        title:
          "Your approach to life",
        text:
          "The Ascendant reveals your spontaneous attitude when entering a new or unfamiliar situation.",
      },
      {
        icon: "✦",
        title:
          "Your visible presence",
        text:
          "It influences the energy you project and how others perceive you during a first meeting.",
      },
      {
        icon: "◇",
        title:
          "Your adaptation reflex",
        text:
          "It shows how you instinctively adjust to your environment and external circumstances.",
      },
    ],
    calculationTitle:
      "How is the Ascendant calculated?",
    calculationParagraphs: [
      "The Ascendant is calculated from three essential pieces of information: birth date, exact birth time and birth place. These details determine which sign was rising on the eastern horizon at birth.",
      "Unlike the Sun sign, which generally remains the same for several weeks, the Ascendant changes quickly throughout the day. On average, a new sign rises about every two hours.",
      "Birth place is also essential because the horizon changes with latitude and longitude. Two people born at the same moment in different regions can therefore have different Ascendants.",
    ],
    precisionTitle:
      "Why must the birth time be precise?",
    precisionParagraphs: [
      "A small difference in birth time can change the degree of the Ascendant and move the cusps of the astrological houses. Near a sign change, a few minutes can sometimes produce a different Ascendant.",
      "An approximate time can offer an indication but does not guarantee accuracy. For a complete birth chart, it is best to use the time shown on a birth certificate or official birth record when available.",
    ],
    pillarsTitle:
      "What is the difference between the Sun, Moon and Ascendant?",
    sunLink:
      "Discover the Sun",
    moonLink:
      "Discover the Moon",
    pillars: [
      {
        symbol: "☀️",
        title: "The Sun",
        text:
          "It represents conscious identity, willpower, vitality and the direction you seek to give your life.",
      },
      {
        symbol: "🌙",
        title: "The Moon",
        text:
          "It describes sensitivity, instinctive reactions, emotional needs and the search for inner security.",
      },
      {
        symbol: "↑",
        title: "The Ascendant",
        text:
          "It reveals visible attitude, spontaneous approach to life and the impression you create.",
      },
    ],
    signsKicker:
      "The twelve expressions of the Ascendant",
    signsTitle:
      "The Ascendant in the 12 zodiac signs",
    signsIntro:
      "The Ascendant always relates to appearance, spontaneous behavior and the way a person engages with the world, but its expression varies according to the zodiac sign rising at birth.",
    risingLabel:
      "Rising",
    signs: [
      { sign: "Aries", symbol: "♈", text: "Aries Rising approaches life with energy, spontaneity and courage. It often creates an impression of dynamism, directness and independence. This person moves quickly and prefers action over waiting." },
      { sign: "Taurus", symbol: "♉", text: "Taurus Rising gives a calm, steady and reassuring presence. It favors a cautious, patient and practical approach to life. This person generally seeks to build on solid foundations." },
      { sign: "Gemini", symbol: "♊", text: "Gemini Rising brings curiosity, mobility and ease of communication. It often appears lively, adaptable and sociable. This person enjoys understanding the environment and multiplying exchanges." },
      { sign: "Cancer", symbol: "♋", text: "Cancer Rising gives a sensitive, protective and receptive presence. It favors a cautious and intuitive approach to the world. This person often reads the atmosphere before opening fully." },
      { sign: "Leo", symbol: "♌", text: "Leo Rising brings warmth, confidence and visibility. It often creates an impression of generosity, presence and creativity. This person naturally seeks to express individuality." },
      { sign: "Virgo", symbol: "♍", text: "Virgo Rising gives a reserved, attentive and organized appearance. It favors a practical and analytical approach to life. This person quickly notices details and seeks to improve the surroundings." },
      { sign: "Libra", symbol: "♎", text: "Libra Rising brings charm, diplomacy and a search for harmony. It often appears pleasant, sociable and balanced. This person considers others before taking a position." },
      { sign: "Scorpio", symbol: "♏", text: "Scorpio Rising gives an intense, mysterious and magnetic presence. It favors a perceptive and cautious approach to relationships. This person observes deeply before offering trust." },
      { sign: "Sagittarius", symbol: "♐", text: "Sagittarius Rising brings enthusiasm, honesty and a taste for exploration. It often appears optimistic and open. This person naturally seeks to broaden horizons." },
      { sign: "Capricorn", symbol: "♑", text: "Capricorn Rising gives a serious, controlled and responsible presence. It favors a structured and ambitious approach to life. This person moves forward with caution and perseverance." },
      { sign: "Aquarius", symbol: "♒", text: "Aquarius Rising brings originality, independence and detachment. It often appears different, free and unpredictable. This person prefers following an individual path rather than convention." },
      { sign: "Pisces", symbol: "♓", text: "Pisces Rising gives a gentle, intuitive and receptive presence. It favors a sensitive and imaginative approach to the world. This person easily absorbs surrounding emotions and atmospheres." },
    ],
    houseTitle:
      "The Ascendant and the First House",
    houseParagraphs: [
      "The Ascendant marks the beginning of the First House, the astrological house associated with visible identity, initiative, spontaneous behavior and the way a person occupies space.",
      "The rising sign gives the First House its first tone, but planets located there can also modify its expression. A planet close to the Ascendant can become especially visible in personality.",
      "The ruler of the Ascendant, meaning the planet governing its sign, also provides important information. Its sign and house placement help explain how Ascendant energy develops through life.",
    ],
    appearanceTitle:
      "Does the Ascendant influence physical appearance?",
    appearanceParagraphs: [
      "In traditional astrology, the Ascendant is sometimes associated with appearance, posture, facial expressions and presentation. It may contribute to visible tendencies without determining physical traits on its own.",
      "Genetics, lifestyle, environment and many personal factors obviously play major roles. The Ascendant should therefore be interpreted as a symbol of presence and expression rather than an absolute physical description.",
    ],
    whyTitle:
      "Why know your Ascendant?",
    whyParagraphs: [
      "Knowing your Ascendant helps clarify the difference between what you feel inwardly and what you show spontaneously. Some people immediately identify with their Sun sign, while others first notice Ascendant traits.",
      "The Ascendant also helps explain the complete organization of the birth chart because it determines the placement of the twelve astrological houses. It is therefore essential for interpreting the life areas connected with the planets.",
    ],
    ctaKicker:
      "Discover your Ascendant",
    ctaTitle:
      "Which sign was rising when you were born?",
    ctaText:
      "Generate your free birth chart to discover your Ascendant, Sun, Moon and the positions of your main planets.",
    ctaButton:
      "Calculate my Ascendant",
    faqKicker:
      "Frequently asked questions",
    faqTitle:
      "Questions about the Ascendant in astrology",
    faq: [
      { question: "What does the Ascendant represent in astrology?", answer: "The Ascendant represents the spontaneous approach to life, visible attitude, first impression given to others and the way a person engages with the environment." },
      { question: "How is the Ascendant calculated?", answer: "The Ascendant is the sign rising on the eastern horizon at the exact moment of birth. Its calculation requires the birth date, time and place." },
      { question: "Why is birth time important?", answer: "The Ascendant changes approximately every two hours. A difference of a few minutes can alter its degree and, near a sign change, the Ascendant itself." },
      { question: "Is the Ascendant more important than the Sun sign?", answer: "The Ascendant and Sun sign describe different dimensions. The Sun represents conscious identity, while the Ascendant describes the immediate way a person approaches life and presents to the world." },
      { question: "Can you know your Ascendant without a birth time?", answer: "An accurate time is normally required to determine the Ascendant reliably. Without it, the result remains uncertain." },
    ],
    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },

  es: {
    metadata: {
      title: "Ascendente en astrología: personalidad, apariencia y primera impresión | Luna Astralis",
      description:
        "Descubre el significado del Ascendente en astrología, su influencia sobre la personalidad, la apariencia y la primera impresión, y los 12 Ascendentes del zodiaco.",
      ogTitle:
        "El Ascendente en astrología: personalidad y primera impresión",
      ogDescription:
        "Comprende el papel del Ascendente en tu carta natal, cómo se calcula y su influencia sobre tu manera de abordar la vida.",
      twitterTitle:
        "El Ascendente en astrología | Luna Astralis",
      twitterDescription:
        "Descubre tu Ascendente y su influencia sobre tu personalidad, tu comportamiento y tu manera de relacionarte con el mundo.",
      locale: "es_ES",
      language: "es-ES",
    },
    jsonLd: {
      headline:
        "El Ascendente en astrología: personalidad, apariencia y primera impresión",
      description:
        "Guía completa sobre el papel del Ascendente en la carta natal, su cálculo y su expresión en los doce signos del zodiaco.",
    },
    badge:
      "⬆️ Astrología y carta natal",
    title:
      "El Ascendente en astrología",
    lead:
      "El Ascendente representa tu manera espontánea de abordar la vida, la energía que proyectas y la primera impresión que causas en los demás.",
    calculateButton:
      "Calcular mi Ascendente gratis",
    viewSigns:
      "Ver los 12 Ascendentes",
    introKicker:
      "Comprender tu Ascendente",
    introTitle:
      "¿Qué representa el Ascendente en una carta natal?",
    introParagraphs: [
      "En astrología, el Ascendente corresponde al signo del zodiaco que se elevaba por el horizonte oriental en el momento exacto del nacimiento. Marca el inicio de la Casa I e influye fuertemente en la forma de entrar en contacto con el mundo.",
      "El Ascendente describe el comportamiento espontáneo, la actitud visible y la energía que los demás suelen percibir primero. También puede indicar cómo te adaptas a un entorno nuevo o a una situación desconocida.",
      "No representa una máscara falsa o artificial. Es más bien una puerta de entrada a la personalidad y una forma instintiva de responder a las experiencias de la vida.",
    ],
    personalityTitle:
      "El Ascendente, la personalidad y la primera impresión",
    personalityCards: [
      {
        icon: "↑",
        title:
          "Tu manera de abordar la vida",
        text:
          "El Ascendente revela tu actitud espontánea al entrar en una situación nueva o desconocida.",
      },
      {
        icon: "✦",
        title:
          "Tu presencia visible",
        text:
          "Influye en la energía que proyectas y en cómo te perciben los demás durante un primer encuentro.",
      },
      {
        icon: "◇",
        title:
          "Tu reflejo de adaptación",
        text:
          "Muestra cómo te ajustas instintivamente al entorno y a las circunstancias externas.",
      },
    ],
    calculationTitle:
      "¿Cómo se calcula el Ascendente?",
    calculationParagraphs: [
      "El Ascendente se calcula a partir de tres datos esenciales: fecha, hora exacta y lugar de nacimiento. Estos datos permiten determinar qué signo estaba en el horizonte oriental al nacer.",
      "A diferencia del signo solar, que suele permanecer igual durante varias semanas, el Ascendente cambia rápidamente a lo largo del día. En promedio, surge un nuevo signo aproximadamente cada dos horas.",
      "El lugar de nacimiento también es indispensable porque la posición del horizonte varía según la latitud y la longitud. Dos personas nacidas al mismo tiempo en regiones diferentes pueden tener Ascendentes distintos.",
    ],
    precisionTitle:
      "¿Por qué la hora de nacimiento debe ser precisa?",
    precisionParagraphs: [
      "Una pequeña diferencia en la hora de nacimiento puede modificar el grado del Ascendente y desplazar las cúspides de las casas astrológicas. Cerca de un cambio de signo, unos pocos minutos pueden producir un Ascendente diferente.",
      "Una hora aproximada puede ofrecer una indicación, pero no garantiza exactitud. Para una carta natal completa, conviene usar la hora del certificado o del registro de nacimiento cuando esté disponible.",
    ],
    pillarsTitle:
      "¿Cuál es la diferencia entre el Sol, la Luna y el Ascendente?",
    sunLink:
      "Descubrir el Sol",
    moonLink:
      "Descubrir la Luna",
    pillars: [
      {
        symbol: "☀️",
        title: "El Sol",
        text:
          "Representa tu identidad consciente, tu voluntad, tu vitalidad y la dirección que buscas dar a tu vida.",
      },
      {
        symbol: "🌙",
        title: "La Luna",
        text:
          "Describe tu sensibilidad, tus reacciones instintivas, tus necesidades afectivas y tu búsqueda de seguridad interior.",
      },
      {
        symbol: "↑",
        title: "El Ascendente",
        text:
          "Revela tu actitud visible, tu manera espontánea de abordar la vida y la impresión que produces.",
      },
    ],
    signsKicker:
      "Las doce expresiones del Ascendente",
    signsTitle:
      "El Ascendente en los 12 signos zodiacales",
    signsIntro:
      "El Ascendente siempre se relaciona con la apariencia, el comportamiento espontáneo y la forma de entrar en relación con el mundo, pero su expresión varía según el signo que surgía al nacer.",
    risingLabel:
      "Ascendente",
    signs: [
      { sign: "Aries", symbol: "♈", text: "El Ascendente Aries aborda la vida con energía, espontaneidad y coraje. Suele transmitir dinamismo, franqueza e independencia. Esta persona avanza rápido y prefiere actuar antes que esperar." },
      { sign: "Tauro", symbol: "♉", text: "El Ascendente Tauro ofrece una presencia tranquila, estable y reconfortante. Favorece un enfoque prudente, paciente y concreto de la vida. Esta persona busca construir sobre bases sólidas." },
      { sign: "Géminis", symbol: "♊", text: "El Ascendente Géminis aporta curiosidad, movilidad y facilidad de comunicación. Suele parecer vivaz, adaptable y sociable. Esta persona disfruta comprender su entorno y multiplicar los intercambios." },
      { sign: "Cáncer", symbol: "♋", text: "El Ascendente Cáncer ofrece una presencia sensible, protectora y receptiva. Favorece un enfoque prudente e intuitivo del mundo. Esta persona observa el ambiente antes de abrirse plenamente." },
      { sign: "Leo", symbol: "♌", text: "El Ascendente Leo aporta calidez, seguridad y visibilidad. Suele transmitir generosidad, presencia y creatividad. Esta persona busca expresar naturalmente su individualidad." },
      { sign: "Virgo", symbol: "♍", text: "El Ascendente Virgo ofrece una apariencia reservada, atenta y organizada. Favorece un enfoque práctico y analítico. Esta persona detecta rápidamente los detalles y busca mejorar su entorno." },
      { sign: "Libra", symbol: "♎", text: "El Ascendente Libra aporta encanto, diplomacia y búsqueda de armonía. Suele parecer agradable, sociable y equilibrado. Esta persona considera a los demás antes de tomar posición." },
      { sign: "Escorpio", symbol: "♏", text: "El Ascendente Escorpio ofrece una presencia intensa, misteriosa y magnética. Favorece un enfoque lúcido y prudente de las relaciones. Esta persona observa profundamente antes de confiar." },
      { sign: "Sagitario", symbol: "♐", text: "El Ascendente Sagitario aporta entusiasmo, franqueza y gusto por la exploración. Suele parecer optimista y abierto. Esta persona busca ampliar sus horizontes." },
      { sign: "Capricornio", symbol: "♑", text: "El Ascendente Capricornio ofrece una presencia seria, controlada y responsable. Favorece un enfoque estructurado y ambicioso. Esta persona avanza con prudencia y perseverancia." },
      { sign: "Acuario", symbol: "♒", text: "El Ascendente Acuario aporta originalidad, independencia y distancia. Suele parecer diferente, libre e imprevisible. Esta persona prefiere seguir su propio camino antes que las convenciones." },
      { sign: "Piscis", symbol: "♓", text: "El Ascendente Piscis ofrece una presencia suave, intuitiva y receptiva. Favorece un enfoque sensible e imaginativo del mundo. Esta persona capta fácilmente las emociones y los ambientes." },
    ],
    houseTitle:
      "El Ascendente y la Casa I",
    houseParagraphs: [
      "El Ascendente marca el inicio de la Casa I, la casa astrológica asociada con la identidad visible, la iniciativa, el comportamiento espontáneo y la forma de ocupar el espacio.",
      "El signo del Ascendente da el primer tono a esta casa, pero los planetas presentes en Casa I también pueden modificar su expresión. Un planeta cerca del Ascendente puede volverse especialmente visible en la personalidad.",
      "El regente del Ascendente, es decir, el planeta que gobierna su signo, también aporta información importante. Su posición por signo y casa ayuda a comprender cómo se desarrolla la energía del Ascendente.",
    ],
    appearanceTitle:
      "¿El Ascendente influye en la apariencia física?",
    appearanceParagraphs: [
      "En la astrología tradicional, el Ascendente se asocia a veces con la apariencia, la postura, las expresiones faciales y la manera de presentarse. Puede contribuir a ciertas tendencias visibles sin determinar por sí solo los rasgos físicos.",
      "La herencia, el estilo de vida, el entorno y muchos factores personales desempeñan un papel importante. El Ascendente debe interpretarse como un símbolo de presencia y expresión, no como una descripción física absoluta.",
    ],
    whyTitle:
      "¿Por qué conocer tu Ascendente?",
    whyParagraphs: [
      "Conocer el Ascendente ayuda a comprender la diferencia entre lo que se siente internamente y lo que se muestra de forma espontánea. Algunas personas se reconocen enseguida en su signo solar, mientras otras perciben primero los rasgos de su Ascendente.",
      "El Ascendente también ayuda a comprender la organización completa de la carta natal, ya que determina la posición de las doce casas astrológicas. Por eso es esencial para interpretar los ámbitos de vida asociados a los planetas.",
    ],
    ctaKicker:
      "Descubre tu Ascendente",
    ctaTitle:
      "¿Qué signo se elevaba en el momento de tu nacimiento?",
    ctaText:
      "Genera gratis tu carta natal para descubrir tu Ascendente, tu Sol, tu Luna y las posiciones de tus principales planetas.",
    ctaButton:
      "Calcular mi Ascendente",
    faqKicker:
      "Preguntas frecuentes",
    faqTitle:
      "Preguntas sobre el Ascendente en astrología",
    faq: [
      { question: "¿Qué representa el Ascendente en astrología?", answer: "El Ascendente representa la manera espontánea de abordar la vida, la actitud visible, la primera impresión que se da a los demás y la forma de relacionarse con el entorno." },
      { question: "¿Cómo se calcula el Ascendente?", answer: "El Ascendente es el signo que se elevaba por el horizonte oriental en el momento exacto del nacimiento. Su cálculo requiere fecha, hora y lugar de nacimiento." },
      { question: "¿Por qué es importante la hora de nacimiento?", answer: "El Ascendente cambia aproximadamente cada dos horas. Una diferencia de pocos minutos puede modificar su grado y, cerca de un cambio de signo, el propio Ascendente." },
      { question: "¿El Ascendente es más importante que el signo solar?", answer: "El Ascendente y el signo solar describen dimensiones diferentes. El Sol representa la identidad consciente, mientras el Ascendente describe la manera inmediata de abordar la vida y presentarse al mundo." },
      { question: "¿Se puede conocer el Ascendente sin hora de nacimiento?", answer: "Normalmente se necesita una hora precisa para determinarlo con fiabilidad. Sin esa información, el resultado sigue siendo incierto." },
    ],
    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, legal o financiero.",
  },

  de: {
    metadata: {
      title: "Aszendent in der Astrologie: Persönlichkeit, Erscheinung und erster Eindruck | Luna Astralis",
      description:
        "Entdecken Sie die Bedeutung des Aszendenten in der Astrologie, seinen Einfluss auf Persönlichkeit, Erscheinung und ersten Eindruck sowie die 12 Aszendenten.",
      ogTitle:
        "Der Aszendent in der Astrologie: Persönlichkeit und erster Eindruck",
      ogDescription:
        "Verstehen Sie die Rolle des Aszendenten im Geburtshoroskop, seine Berechnung und seinen Einfluss auf Ihre Lebenshaltung.",
      twitterTitle:
        "Der Aszendent in der Astrologie | Luna Astralis",
      twitterDescription:
        "Entdecken Sie Ihren Aszendenten und seinen Einfluss auf Persönlichkeit, Verhalten und Ihre Beziehung zur Welt.",
      locale: "de_DE",
      language: "de-DE",
    },
    jsonLd: {
      headline:
        "Der Aszendent in der Astrologie: Persönlichkeit, Erscheinung und erster Eindruck",
      description:
        "Ein vollständiger Leitfaden zur Rolle des Aszendenten im Geburtshoroskop, seiner Berechnung und seinem Ausdruck in den zwölf Tierkreiszeichen.",
    },
    badge:
      "⬆️ Astrologie und Geburtshoroskop",
    title:
      "Der Aszendent in der Astrologie",
    lead:
      "Der Aszendent steht für Ihre spontane Art, dem Leben zu begegnen, die Energie, die Sie ausstrahlen, und den ersten Eindruck, den Sie vermitteln.",
    calculateButton:
      "Meinen Aszendenten kostenlos berechnen",
    viewSigns:
      "Die 12 Aszendenten ansehen",
    introKicker:
      "Ihren Aszendenten verstehen",
    introTitle:
      "Was bedeutet der Aszendent im Geburtshoroskop?",
    introParagraphs: [
      "In der Astrologie ist der Aszendent das Tierkreiszeichen, das zum genauen Zeitpunkt der Geburt am östlichen Horizont aufstieg. Er markiert den Beginn des ersten Hauses und beeinflusst stark, wie Sie mit der Welt in Kontakt treten.",
      "Der Aszendent beschreibt spontanes Verhalten, sichtbare Haltung und die Energie, die andere oft zuerst wahrnehmen. Er kann auch zeigen, wie Sie sich an neue Umgebungen oder unbekannte Situationen anpassen.",
      "Er ist keine falsche oder künstliche Maske. Vielmehr ist er ein Zugang zur Persönlichkeit und eine instinktive Art, auf Lebenserfahrungen zu reagieren.",
    ],
    personalityTitle:
      "Der Aszendent, Persönlichkeit und erster Eindruck",
    personalityCards: [
      {
        icon: "↑",
        title:
          "Ihre Art, dem Leben zu begegnen",
        text:
          "Der Aszendent zeigt Ihre spontane Haltung, wenn Sie eine neue oder unbekannte Situation betreten.",
      },
      {
        icon: "✦",
        title:
          "Ihre sichtbare Präsenz",
        text:
          "Er beeinflusst die Energie, die Sie ausstrahlen, und wie andere Sie bei einer ersten Begegnung wahrnehmen.",
      },
      {
        icon: "◇",
        title:
          "Ihr Anpassungsreflex",
        text:
          "Er zeigt, wie Sie sich instinktiv an Ihre Umgebung und äußere Umstände anpassen.",
      },
    ],
    calculationTitle:
      "Wie wird der Aszendent berechnet?",
    calculationParagraphs: [
      "Der Aszendent wird aus drei wesentlichen Angaben berechnet: Geburtsdatum, genaue Geburtszeit und Geburtsort. Damit lässt sich bestimmen, welches Zeichen bei der Geburt am östlichen Horizont stand.",
      "Im Gegensatz zum Sonnenzeichen, das meist mehrere Wochen gleich bleibt, verändert sich der Aszendent im Tagesverlauf schnell. Im Durchschnitt steigt etwa alle zwei Stunden ein neues Zeichen auf.",
      "Der Geburtsort ist ebenfalls notwendig, weil sich der Horizont je nach Breiten- und Längengrad verändert. Zwei Menschen, die gleichzeitig an verschiedenen Orten geboren wurden, können unterschiedliche Aszendenten haben.",
    ],
    precisionTitle:
      "Warum muss die Geburtszeit genau sein?",
    precisionParagraphs: [
      "Eine kleine Abweichung der Geburtszeit kann den Grad des Aszendenten verändern und die Häuserspitzen verschieben. In der Nähe eines Zeichenwechsels können wenige Minuten sogar zu einem anderen Aszendenten führen.",
      "Eine ungefähre Zeit kann einen Hinweis geben, garantiert aber kein genaues Ergebnis. Für ein vollständiges Geburtshoroskop sollte möglichst die Zeit aus der Geburtsurkunde oder den offiziellen Unterlagen verwendet werden.",
    ],
    pillarsTitle:
      "Was ist der Unterschied zwischen Sonne, Mond und Aszendent?",
    sunLink:
      "Die Sonne entdecken",
    moonLink:
      "Den Mond entdecken",
    pillars: [
      {
        symbol: "☀️",
        title: "Die Sonne",
        text:
          "Sie steht für bewusste Identität, Willen, Vitalität und die Richtung, die Sie Ihrem Leben geben möchten.",
      },
      {
        symbol: "🌙",
        title: "Der Mond",
        text:
          "Er beschreibt Sensibilität, instinktive Reaktionen, emotionale Bedürfnisse und die Suche nach innerer Sicherheit.",
      },
      {
        symbol: "↑",
        title: "Der Aszendent",
        text:
          "Er zeigt sichtbare Haltung, spontane Lebensweise und den Eindruck, den Sie erzeugen.",
      },
    ],
    signsKicker:
      "Die zwölf Ausdrucksformen des Aszendenten",
    signsTitle:
      "Der Aszendent in den 12 Tierkreiszeichen",
    signsIntro:
      "Der Aszendent steht immer mit Erscheinung, spontanem Verhalten und der Art des Kontakts zur Welt in Verbindung, drückt sich aber je nach aufsteigendem Tierkreiszeichen unterschiedlich aus.",
    risingLabel:
      "Aszendent",
    signs: [
      { sign: "Widder", symbol: "♈", text: "Der Widder-Aszendent begegnet dem Leben mit Energie, Spontaneität und Mut. Er wirkt oft dynamisch, direkt und unabhängig. Diese Person handelt lieber, als abzuwarten." },
      { sign: "Stier", symbol: "♉", text: "Der Stier-Aszendent vermittelt Ruhe, Stabilität und Verlässlichkeit. Er fördert eine vorsichtige, geduldige und praktische Lebenshaltung. Diese Person baut gern auf soliden Grundlagen." },
      { sign: "Zwillinge", symbol: "♊", text: "Der Zwillinge-Aszendent bringt Neugier, Beweglichkeit und Kommunikationsfähigkeit. Er wirkt lebhaft, anpassungsfähig und gesellig. Diese Person möchte ihre Umgebung verstehen und sich austauschen." },
      { sign: "Krebs", symbol: "♋", text: "Der Krebs-Aszendent vermittelt Sensibilität, Schutz und Empfänglichkeit. Er fördert einen vorsichtigen und intuitiven Zugang zur Welt. Diese Person beobachtet oft zuerst die Atmosphäre." },
      { sign: "Löwe", symbol: "♌", text: "Der Löwe-Aszendent bringt Wärme, Selbstsicherheit und Sichtbarkeit. Er wirkt großzügig, präsent und kreativ. Diese Person möchte ihre Individualität natürlich ausdrücken." },
      { sign: "Jungfrau", symbol: "♍", text: "Der Jungfrau-Aszendent vermittelt Zurückhaltung, Aufmerksamkeit und Ordnung. Er fördert eine praktische und analytische Lebensweise. Diese Person erkennt Details schnell und möchte verbessern." },
      { sign: "Waage", symbol: "♎", text: "Der Waage-Aszendent bringt Charme, Diplomatie und Harmoniebedürfnis. Er wirkt angenehm, gesellig und ausgeglichen. Diese Person berücksichtigt andere, bevor sie Position bezieht." },
      { sign: "Skorpion", symbol: "♏", text: "Der Skorpion-Aszendent vermittelt Intensität, Geheimnis und magnetische Präsenz. Er fördert einen klaren und vorsichtigen Beziehungsstil. Diese Person beobachtet tief, bevor sie vertraut." },
      { sign: "Schütze", symbol: "♐", text: "Der Schütze-Aszendent bringt Begeisterung, Offenheit und Entdeckungsfreude. Er wirkt optimistisch und zugänglich. Diese Person möchte ihren Horizont erweitern." },
      { sign: "Steinbock", symbol: "♑", text: "Der Steinbock-Aszendent vermittelt Ernsthaftigkeit, Kontrolle und Verantwortung. Er fördert eine strukturierte und ehrgeizige Lebensweise. Diese Person geht vorsichtig und ausdauernd vor." },
      { sign: "Wassermann", symbol: "♒", text: "Der Wassermann-Aszendent bringt Originalität, Unabhängigkeit und Distanz. Er wirkt anders, frei und unberechenbar. Diese Person folgt lieber dem eigenen Weg als Konventionen." },
      { sign: "Fische", symbol: "♓", text: "Der Fische-Aszendent vermittelt Sanftheit, Intuition und Empfänglichkeit. Er fördert einen sensiblen und fantasievollen Zugang zur Welt. Diese Person nimmt Stimmungen leicht auf." },
    ],
    houseTitle:
      "Der Aszendent und das erste Haus",
    houseParagraphs: [
      "Der Aszendent markiert den Beginn des ersten Hauses, das mit sichtbarer Identität, Initiative, spontanem Verhalten und der Art verbunden ist, Raum einzunehmen.",
      "Das Zeichen des Aszendenten gibt diesem Haus seine erste Färbung, doch Planeten im ersten Haus können den Ausdruck verändern. Ein Planet nahe dem Aszendenten kann in der Persönlichkeit besonders sichtbar werden.",
      "Auch der Herrscher des Aszendenten, also der Planet, der sein Zeichen regiert, liefert wichtige Informationen. Seine Zeichen- und Hausposition zeigt, wie sich die Energie des Aszendenten im Leben entwickelt.",
    ],
    appearanceTitle:
      "Beeinflusst der Aszendent das Aussehen?",
    appearanceParagraphs: [
      "In der traditionellen Astrologie wird der Aszendent manchmal mit Erscheinung, Haltung, Mimik und Auftreten verbunden. Er kann zu sichtbaren Tendenzen beitragen, bestimmt körperliche Merkmale aber nicht allein.",
      "Vererbung, Lebensstil, Umgebung und viele persönliche Faktoren spielen selbstverständlich eine große Rolle. Der Aszendent sollte daher als Symbol für Präsenz und Ausdruck verstanden werden, nicht als absolute körperliche Beschreibung.",
    ],
    whyTitle:
      "Warum den Aszendenten kennen?",
    whyParagraphs: [
      "Die Kenntnis des Aszendenten hilft, den Unterschied zwischen innerem Erleben und spontanem Auftreten zu verstehen. Manche Menschen erkennen sich sofort im Sonnenzeichen, andere zuerst in Eigenschaften des Aszendenten.",
      "Der Aszendent erklärt außerdem die vollständige Struktur des Geburtshoroskops, da er die Position der zwölf Häuser bestimmt. Er ist daher wichtig für die Deutung der Lebensbereiche, die mit den Planeten verbunden sind.",
    ],
    ctaKicker:
      "Entdecken Sie Ihren Aszendenten",
    ctaTitle:
      "Welches Zeichen stieg bei Ihrer Geburt auf?",
    ctaText:
      "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Aszendent, Sonne, Mond und die Positionen Ihrer wichtigsten Planeten.",
    ctaButton:
      "Meinen Aszendenten berechnen",
    faqKicker:
      "Häufige Fragen",
    faqTitle:
      "Fragen zum Aszendenten in der Astrologie",
    faq: [
      { question: "Wofür steht der Aszendent in der Astrologie?", answer: "Der Aszendent steht für die spontane Lebenshaltung, sichtbare Einstellung, den ersten Eindruck auf andere und die Art, wie ein Mensch mit seiner Umgebung in Kontakt tritt." },
      { question: "Wie wird der Aszendent berechnet?", answer: "Der Aszendent ist das Zeichen, das zum genauen Geburtszeitpunkt am östlichen Horizont aufstieg. Für die Berechnung werden Datum, Uhrzeit und Ort benötigt." },
      { question: "Warum ist die Geburtszeit wichtig?", answer: "Der Aszendent wechselt ungefähr alle zwei Stunden. Wenige Minuten können den Grad verändern und nahe einem Zeichenwechsel sogar den Aszendenten selbst." },
      { question: "Ist der Aszendent wichtiger als das Sonnenzeichen?", answer: "Aszendent und Sonnenzeichen beschreiben unterschiedliche Ebenen. Die Sonne steht für bewusste Identität, der Aszendent für die unmittelbare Art, dem Leben zu begegnen und sich zu zeigen." },
      { question: "Kann man den Aszendenten ohne Geburtszeit kennen?", answer: "Normalerweise ist eine genaue Zeit notwendig, um den Aszendenten zuverlässig zu bestimmen. Ohne diese Information bleibt das Ergebnis unsicher." },
    ],
    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title: "Ascendente in astrologia: personalità, aspetto e prima impressione | Luna Astralis",
      description:
        "Scopri il significato dell’Ascendente in astrologia, la sua influenza su personalità, aspetto e prima impressione e i 12 Ascendenti zodiacali.",
      ogTitle:
        "L’Ascendente in astrologia: personalità e prima impressione",
      ogDescription:
        "Comprendi il ruolo dell’Ascendente nel tema natale, come viene calcolato e come influenza il tuo modo di affrontare la vita.",
      twitterTitle:
        "L’Ascendente in astrologia | Luna Astralis",
      twitterDescription:
        "Scopri il tuo Ascendente e la sua influenza su personalità, comportamento e modo di relazionarti con il mondo.",
      locale: "it_IT",
      language: "it-IT",
    },
    jsonLd: {
      headline:
        "L’Ascendente in astrologia: personalità, aspetto e prima impressione",
      description:
        "Guida completa al ruolo dell’Ascendente nel tema natale, al suo calcolo e alla sua espressione nei dodici segni zodiacali.",
    },
    badge:
      "⬆️ Astrologia e tema natale",
    title:
      "L’Ascendente in astrologia",
    lead:
      "L’Ascendente rappresenta il tuo modo spontaneo di affrontare la vita, l’energia che proietti e la prima impressione che dai agli altri.",
    calculateButton:
      "Calcola gratuitamente il mio Ascendente",
    viewSigns:
      "Vedi i 12 Ascendenti",
    introKicker:
      "Comprendere il tuo Ascendente",
    introTitle:
      "Che cosa rappresenta l’Ascendente nel tema natale?",
    introParagraphs: [
      "In astrologia, l’Ascendente è il segno zodiacale che sorgeva all’orizzonte orientale nel momento esatto della nascita. Segna l’inizio della Prima Casa e influenza fortemente il modo di entrare in contatto con il mondo.",
      "L’Ascendente descrive il comportamento spontaneo, l’atteggiamento visibile e l’energia che gli altri percepiscono per prima. Può anche indicare come ti adatti a un ambiente nuovo o a una situazione sconosciuta.",
      "Non rappresenta una maschera falsa o artificiale. È piuttosto una porta d’ingresso alla personalità e un modo istintivo di rispondere alle esperienze della vita.",
    ],
    personalityTitle:
      "L’Ascendente, la personalità e la prima impressione",
    personalityCards: [
      {
        icon: "↑",
        title:
          "Il tuo modo di affrontare la vita",
        text:
          "L’Ascendente rivela il tuo atteggiamento spontaneo quando entri in una situazione nuova o sconosciuta.",
      },
      {
        icon: "✦",
        title:
          "La tua presenza visibile",
        text:
          "Influenza l’energia che proietti e il modo in cui gli altri ti percepiscono al primo incontro.",
      },
      {
        icon: "◇",
        title:
          "Il tuo riflesso di adattamento",
        text:
          "Mostra come ti adegui istintivamente all’ambiente e alle circostanze esterne.",
      },
    ],
    calculationTitle:
      "Come si calcola l’Ascendente?",
    calculationParagraphs: [
      "L’Ascendente si calcola da tre informazioni essenziali: data, ora esatta e luogo di nascita. Questi dati permettono di determinare quale segno si trovava all’orizzonte orientale alla nascita.",
      "A differenza del segno solare, che rimane generalmente uguale per diverse settimane, l’Ascendente cambia rapidamente nel corso della giornata. In media sorge un nuovo segno ogni due ore circa.",
      "Anche il luogo di nascita è indispensabile, perché la posizione dell’orizzonte varia secondo latitudine e longitudine. Due persone nate nello stesso momento in luoghi diversi possono avere Ascendenti differenti.",
    ],
    precisionTitle:
      "Perché l’ora di nascita deve essere precisa?",
    precisionParagraphs: [
      "Una piccola differenza nell’ora di nascita può modificare il grado dell’Ascendente e spostare le cuspidi delle case. Vicino a un cambio di segno, pochi minuti possono perfino produrre un Ascendente diverso.",
      "Un’ora approssimativa può offrire un’indicazione, ma non garantisce precisione. Per un tema natale completo è preferibile usare l’ora riportata sul certificato o sul registro di nascita.",
    ],
    pillarsTitle:
      "Qual è la differenza tra Sole, Luna e Ascendente?",
    sunLink:
      "Scopri il Sole",
    moonLink:
      "Scopri la Luna",
    pillars: [
      {
        symbol: "☀️",
        title: "Il Sole",
        text:
          "Rappresenta identità cosciente, volontà, vitalità e la direzione che cerchi di dare alla tua vita.",
      },
      {
        symbol: "🌙",
        title: "La Luna",
        text:
          "Descrive sensibilità, reazioni istintive, bisogni affettivi e ricerca di sicurezza interiore.",
      },
      {
        symbol: "↑",
        title: "L’Ascendente",
        text:
          "Rivela atteggiamento visibile, modo spontaneo di affrontare la vita e impressione prodotta.",
      },
    ],
    signsKicker:
      "Le dodici espressioni dell’Ascendente",
    signsTitle:
      "L’Ascendente nei 12 segni zodiacali",
    signsIntro:
      "L’Ascendente resta sempre collegato ad aspetto, comportamento spontaneo e modo di entrare in relazione con il mondo, ma si esprime diversamente secondo il segno che sorgeva alla nascita.",
    risingLabel:
      "Ascendente",
    signs: [
      { sign: "Ariete", symbol: "♈", text: "L’Ascendente Ariete affronta la vita con energia, spontaneità e coraggio. Spesso trasmette dinamismo, franchezza e indipendenza. Questa persona agisce rapidamente e preferisce fare piuttosto che aspettare." },
      { sign: "Toro", symbol: "♉", text: "L’Ascendente Toro offre una presenza calma, stabile e rassicurante. Favorisce un approccio prudente, paziente e concreto. Questa persona cerca di costruire su basi solide." },
      { sign: "Gemelli", symbol: "♊", text: "L’Ascendente Gemelli porta curiosità, mobilità e facilità di comunicazione. Spesso appare vivace, adattabile e socievole. Questa persona ama comprendere l’ambiente e moltiplicare gli scambi." },
      { sign: "Cancro", symbol: "♋", text: "L’Ascendente Cancro offre una presenza sensibile, protettiva e ricettiva. Favorisce un approccio prudente e intuitivo. Questa persona osserva l’atmosfera prima di aprirsi pienamente." },
      { sign: "Leone", symbol: "♌", text: "L’Ascendente Leone porta calore, sicurezza e visibilità. Spesso trasmette generosità, presenza e creatività. Questa persona cerca naturalmente di esprimere la propria individualità." },
      { sign: "Vergine", symbol: "♍", text: "L’Ascendente Vergine offre un aspetto riservato, attento e organizzato. Favorisce un approccio pratico e analitico. Questa persona nota rapidamente i dettagli e cerca di migliorare ciò che la circonda." },
      { sign: "Bilancia", symbol: "♎", text: "L’Ascendente Bilancia porta fascino, diplomazia e ricerca di armonia. Spesso appare piacevole, socievole ed equilibrato. Questa persona considera gli altri prima di prendere posizione." },
      { sign: "Scorpione", symbol: "♏", text: "L’Ascendente Scorpione offre una presenza intensa, misteriosa e magnetica. Favorisce un approccio lucido e prudente alle relazioni. Questa persona osserva profondamente prima di fidarsi." },
      { sign: "Sagittario", symbol: "♐", text: "L’Ascendente Sagittario porta entusiasmo, franchezza e gusto per l’esplorazione. Spesso appare ottimista e aperto. Questa persona cerca di ampliare i propri orizzonti." },
      { sign: "Capricorno", symbol: "♑", text: "L’Ascendente Capricorno offre una presenza seria, controllata e responsabile. Favorisce un approccio strutturato e ambizioso. Questa persona avanza con prudenza e perseveranza." },
      { sign: "Acquario", symbol: "♒", text: "L’Ascendente Acquario porta originalità, indipendenza e distacco. Spesso appare diverso, libero e imprevedibile. Questa persona preferisce seguire la propria strada anziché le convenzioni." },
      { sign: "Pesci", symbol: "♓", text: "L’Ascendente Pesci offre una presenza dolce, intuitiva e ricettiva. Favorisce un approccio sensibile e immaginativo. Questa persona percepisce facilmente emozioni e atmosfere." },
    ],
    houseTitle:
      "L’Ascendente e la Prima Casa",
    houseParagraphs: [
      "L’Ascendente segna l’inizio della Prima Casa, associata all’identità visibile, all’iniziativa, al comportamento spontaneo e al modo di occupare lo spazio.",
      "Il segno dell’Ascendente dà una prima tonalità a questa casa, ma i pianeti presenti in Prima Casa possono modificarne l’espressione. Un pianeta vicino all’Ascendente può diventare particolarmente visibile nella personalità.",
      "Anche il governatore dell’Ascendente, cioè il pianeta che governa il suo segno, offre informazioni importanti. La sua posizione per segno e casa aiuta a capire come l’energia dell’Ascendente si sviluppa nella vita.",
    ],
    appearanceTitle:
      "L’Ascendente influenza l’aspetto fisico?",
    appearanceParagraphs: [
      "Nell’astrologia tradizionale, l’Ascendente è talvolta associato all’aspetto, alla postura, alle espressioni del viso e al modo di presentarsi. Può contribuire ad alcune tendenze visibili senza determinare da solo i tratti fisici.",
      "Ereditarietà, stile di vita, ambiente e molti fattori personali svolgono ovviamente un ruolo importante. L’Ascendente va quindi interpretato come simbolo di presenza ed espressione, non come descrizione fisica assoluta.",
    ],
    whyTitle:
      "Perché conoscere il proprio Ascendente?",
    whyParagraphs: [
      "Conoscere l’Ascendente aiuta a comprendere la differenza tra ciò che si sente interiormente e ciò che si mostra spontaneamente. Alcune persone si riconoscono subito nel segno solare, altre notano prima i tratti dell’Ascendente.",
      "L’Ascendente aiuta anche a comprendere l’organizzazione completa del tema natale, perché determina la posizione delle dodici case astrologiche. È quindi essenziale per interpretare gli ambiti di vita associati ai pianeti.",
    ],
    ctaKicker:
      "Scopri il tuo Ascendente",
    ctaTitle:
      "Quale segno sorgeva al momento della tua nascita?",
    ctaText:
      "Genera gratuitamente il tuo tema natale per scoprire Ascendente, Sole, Luna e le posizioni dei principali pianeti.",
    ctaButton:
      "Calcola il mio Ascendente",
    faqKicker:
      "Domande frequenti",
    faqTitle:
      "Domande sull’Ascendente in astrologia",
    faq: [
      { question: "Che cosa rappresenta l’Ascendente in astrologia?", answer: "L’Ascendente rappresenta il modo spontaneo di affrontare la vita, l’atteggiamento visibile, la prima impressione data agli altri e il modo di entrare in relazione con l’ambiente." },
      { question: "Come si calcola l’Ascendente?", answer: "L’Ascendente è il segno che sorgeva all’orizzonte orientale nel momento esatto della nascita. Il calcolo richiede data, ora e luogo di nascita." },
      { question: "Perché l’ora di nascita è importante?", answer: "L’Ascendente cambia circa ogni due ore. Una differenza di pochi minuti può modificarne il grado e, vicino a un cambio di segno, l’Ascendente stesso." },
      { question: "L’Ascendente è più importante del segno solare?", answer: "Ascendente e segno solare descrivono dimensioni diverse. Il Sole rappresenta l’identità cosciente, mentre l’Ascendente descrive il modo immediato di affrontare la vita e presentarsi al mondo." },
      { question: "Si può conoscere l’Ascendente senza ora di nascita?", answer: "Normalmente serve un’ora precisa per determinarlo in modo affidabile. Senza questa informazione, il risultato resta incerto." },
    ],
    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce consulenze mediche, psicologiche, legali o finanziarie.",
  },

  pt: {
    metadata: {
      title: "Ascendente na astrologia: personalidade, aparência e primeira impressão | Luna Astralis",
      description:
        "Descubra o significado do Ascendente na astrologia, sua influência sobre personalidade, aparência e primeira impressão e os 12 Ascendentes do zodíaco.",
      ogTitle:
        "O Ascendente na astrologia: personalidade e primeira impressão",
      ogDescription:
        "Compreenda o papel do Ascendente no mapa astral, como ele é calculado e sua influência sobre a maneira de abordar a vida.",
      twitterTitle:
        "O Ascendente na astrologia | Luna Astralis",
      twitterDescription:
        "Descubra seu Ascendente e sua influência sobre personalidade, comportamento e forma de se relacionar com o mundo.",
      locale: "pt_BR",
      language: "pt-BR",
    },
    jsonLd: {
      headline:
        "O Ascendente na astrologia: personalidade, aparência e primeira impressão",
      description:
        "Guia completo sobre o papel do Ascendente no mapa astral, seu cálculo e sua expressão nos doze signos do zodíaco.",
    },
    badge:
      "⬆️ Astrologia e mapa astral",
    title:
      "O Ascendente na astrologia",
    lead:
      "O Ascendente representa sua maneira espontânea de abordar a vida, a energia que você projeta e a primeira impressão que transmite aos outros.",
    calculateButton:
      "Calcular meu Ascendente grátis",
    viewSigns:
      "Ver os 12 Ascendentes",
    introKicker:
      "Compreender seu Ascendente",
    introTitle:
      "O que o Ascendente representa em um mapa astral?",
    introParagraphs: [
      "Na astrologia, o Ascendente é o signo do zodíaco que surgia no horizonte leste no momento exato do nascimento. Ele marca o início da Casa I e influencia fortemente a maneira como você entra em contato com o mundo.",
      "O Ascendente descreve comportamento espontâneo, atitude visível e a energia que os outros costumam perceber primeiro. Também pode indicar como você se adapta a um ambiente novo ou a uma situação desconhecida.",
      "Ele não representa uma máscara falsa ou artificial. É melhor entendido como uma porta de entrada para a personalidade e uma maneira instintiva de responder às experiências da vida.",
    ],
    personalityTitle:
      "O Ascendente, a personalidade e a primeira impressão",
    personalityCards: [
      {
        icon: "↑",
        title:
          "Sua maneira de abordar a vida",
        text:
          "O Ascendente revela sua atitude espontânea ao entrar em uma situação nova ou desconhecida.",
      },
      {
        icon: "✦",
        title:
          "Sua presença visível",
        text:
          "Ele influencia a energia que você projeta e a forma como os outros percebem você em um primeiro encontro.",
      },
      {
        icon: "◇",
        title:
          "Seu reflexo de adaptação",
        text:
          "Ele mostra como você se ajusta instintivamente ao ambiente e às circunstâncias externas.",
      },
    ],
    calculationTitle:
      "Como o Ascendente é calculado?",
    calculationParagraphs: [
      "O Ascendente é calculado a partir de três informações essenciais: data, hora exata e local de nascimento. Esses dados permitem determinar qual signo estava no horizonte leste ao nascer.",
      "Ao contrário do signo solar, que geralmente permanece o mesmo por várias semanas, o Ascendente muda rapidamente ao longo do dia. Em média, um novo signo surge aproximadamente a cada duas horas.",
      "O local de nascimento também é indispensável, porque a posição do horizonte varia conforme latitude e longitude. Duas pessoas nascidas no mesmo instante em regiões diferentes podem ter Ascendentes distintos.",
    ],
    precisionTitle:
      "Por que a hora de nascimento precisa ser exata?",
    precisionParagraphs: [
      "Uma pequena diferença na hora de nascimento pode alterar o grau do Ascendente e deslocar as cúspides das casas. Perto de uma mudança de signo, poucos minutos podem produzir um Ascendente diferente.",
      "Uma hora aproximada pode oferecer uma indicação, mas não garante precisão. Para um mapa astral completo, é preferível usar a hora registrada na certidão ou no documento oficial de nascimento.",
    ],
    pillarsTitle:
      "Qual é a diferença entre Sol, Lua e Ascendente?",
    sunLink:
      "Descobrir o Sol",
    moonLink:
      "Descobrir a Lua",
    pillars: [
      {
        symbol: "☀️",
        title: "O Sol",
        text:
          "Representa identidade consciente, vontade, vitalidade e a direção que você procura dar à sua vida.",
      },
      {
        symbol: "🌙",
        title: "A Lua",
        text:
          "Descreve sensibilidade, reações instintivas, necessidades afetivas e busca de segurança interior.",
      },
      {
        symbol: "↑",
        title: "O Ascendente",
        text:
          "Revela atitude visível, maneira espontânea de abordar a vida e a impressão que você produz.",
      },
    ],
    signsKicker:
      "As doze expressões do Ascendente",
    signsTitle:
      "O Ascendente nos 12 signos do zodíaco",
    signsIntro:
      "O Ascendente permanece sempre ligado à aparência, ao comportamento espontâneo e à maneira de se relacionar com o mundo, mas sua expressão varia conforme o signo que surgia no momento do nascimento.",
    risingLabel:
      "Ascendente",
    signs: [
      { sign: "Áries", symbol: "♈", text: "O Ascendente em Áries aborda a vida com energia, espontaneidade e coragem. Costuma transmitir dinamismo, franqueza e independência. Essa pessoa age rapidamente e prefere fazer a esperar." },
      { sign: "Touro", symbol: "♉", text: "O Ascendente em Touro oferece uma presença calma, estável e tranquilizadora. Favorece uma abordagem prudente, paciente e concreta. Essa pessoa busca construir sobre bases sólidas." },
      { sign: "Gêmeos", symbol: "♊", text: "O Ascendente em Gêmeos traz curiosidade, mobilidade e facilidade de comunicação. Costuma parecer vivaz, adaptável e sociável. Essa pessoa gosta de compreender o ambiente e multiplicar trocas." },
      { sign: "Câncer", symbol: "♋", text: "O Ascendente em Câncer oferece uma presença sensível, protetora e receptiva. Favorece uma abordagem prudente e intuitiva. Essa pessoa observa o ambiente antes de se abrir plenamente." },
      { sign: "Leão", symbol: "♌", text: "O Ascendente em Leão traz calor, segurança e visibilidade. Costuma transmitir generosidade, presença e criatividade. Essa pessoa busca expressar naturalmente sua individualidade." },
      { sign: "Virgem", symbol: "♍", text: "O Ascendente em Virgem oferece uma aparência reservada, atenta e organizada. Favorece uma abordagem prática e analítica. Essa pessoa percebe detalhes rapidamente e busca melhorar o entorno." },
      { sign: "Libra", symbol: "♎", text: "O Ascendente em Libra traz charme, diplomacia e busca de harmonia. Costuma parecer agradável, sociável e equilibrado. Essa pessoa considera os outros antes de tomar posição." },
      { sign: "Escorpião", symbol: "♏", text: "O Ascendente em Escorpião oferece uma presença intensa, misteriosa e magnética. Favorece uma abordagem lúcida e prudente nos relacionamentos. Essa pessoa observa profundamente antes de confiar." },
      { sign: "Sagitário", symbol: "♐", text: "O Ascendente em Sagitário traz entusiasmo, franqueza e gosto por explorar. Costuma parecer otimista e aberto. Essa pessoa busca ampliar seus horizontes." },
      { sign: "Capricórnio", symbol: "♑", text: "O Ascendente em Capricórnio oferece uma presença séria, controlada e responsável. Favorece uma abordagem estruturada e ambiciosa. Essa pessoa avança com prudência e perseverança." },
      { sign: "Aquário", symbol: "♒", text: "O Ascendente em Aquário traz originalidade, independência e distanciamento. Costuma parecer diferente, livre e imprevisível. Essa pessoa prefere seguir seu próprio caminho às convenções." },
      { sign: "Peixes", symbol: "♓", text: "O Ascendente em Peixes oferece uma presença suave, intuitiva e receptiva. Favorece uma abordagem sensível e imaginativa. Essa pessoa capta facilmente emoções e ambientes." },
    ],
    houseTitle:
      "O Ascendente e a Casa I",
    houseParagraphs: [
      "O Ascendente marca o início da Casa I, associada à identidade visível, à iniciativa, ao comportamento espontâneo e à maneira de ocupar o espaço.",
      "O signo do Ascendente dá uma primeira tonalidade a essa casa, mas os planetas presentes na Casa I também podem modificar sua expressão. Um planeta próximo do Ascendente pode se tornar especialmente visível na personalidade.",
      "O regente do Ascendente, isto é, o planeta que governa seu signo, também fornece informações importantes. Sua posição por signo e casa ajuda a compreender como a energia do Ascendente se desenvolve na vida.",
    ],
    appearanceTitle:
      "O Ascendente influencia a aparência física?",
    appearanceParagraphs: [
      "Na astrologia tradicional, o Ascendente às vezes é associado à aparência, à postura, às expressões faciais e à maneira de se apresentar. Ele pode contribuir para certas tendências visíveis sem determinar sozinho os traços físicos.",
      "Hereditariedade, estilo de vida, ambiente e muitos fatores pessoais exercem obviamente um papel importante. O Ascendente deve ser interpretado como símbolo de presença e expressão, não como descrição física absoluta.",
    ],
    whyTitle:
      "Por que conhecer seu Ascendente?",
    whyParagraphs: [
      "Conhecer o Ascendente ajuda a compreender a diferença entre o que se sente internamente e o que se mostra espontaneamente. Algumas pessoas se reconhecem imediatamente no signo solar; outras percebem primeiro os traços do Ascendente.",
      "O Ascendente também ajuda a compreender a organização completa do mapa astral, pois determina a posição das doze casas. Por isso é essencial para interpretar as áreas de vida associadas aos planetas.",
    ],
    ctaKicker:
      "Descubra seu Ascendente",
    ctaTitle:
      "Qual signo surgia no momento do seu nascimento?",
    ctaText:
      "Gere gratuitamente seu mapa astral para descobrir Ascendente, Sol, Lua e as posições dos principais planetas.",
    ctaButton:
      "Calcular meu Ascendente",
    faqKicker:
      "Perguntas frequentes",
    faqTitle:
      "Perguntas sobre o Ascendente na astrologia",
    faq: [
      { question: "O que o Ascendente representa na astrologia?", answer: "O Ascendente representa a maneira espontânea de abordar a vida, a atitude visível, a primeira impressão transmitida aos outros e a forma de se relacionar com o ambiente." },
      { question: "Como o Ascendente é calculado?", answer: "O Ascendente é o signo que surgia no horizonte leste no momento exato do nascimento. O cálculo exige data, hora e local de nascimento." },
      { question: "Por que a hora de nascimento é importante?", answer: "O Ascendente muda aproximadamente a cada duas horas. Uma diferença de poucos minutos pode alterar seu grau e, perto de uma mudança de signo, o próprio Ascendente." },
      { question: "O Ascendente é mais importante que o signo solar?", answer: "Ascendente e signo solar descrevem dimensões diferentes. O Sol representa identidade consciente, enquanto o Ascendente descreve a maneira imediata de abordar a vida e se apresentar ao mundo." },
      { question: "É possível conhecer o Ascendente sem a hora de nascimento?", answer: "Normalmente é necessária uma hora precisa para determiná-lo com confiabilidade. Sem essa informação, o resultado permanece incerto." },
    ],
    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
