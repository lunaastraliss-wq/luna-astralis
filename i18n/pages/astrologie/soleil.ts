// i18n/pages/astrologie/soleil.ts

import type { Locale } from "@/i18n/config";

export type SunSignText = {
  sign: string;
  symbol: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SoleilPageText = {
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
  createChart: string;
  viewSigns: string;

  introKicker: string;
  introTitle: string;
  introParagraphs: string[];

  identityTitle: string;
  identityCards: {
    icon: string;
    title: string;
    text: string;
  }[];

  pillarsTitle: string;
  pillars: {
    symbol: string;
    title: string;
    text: string;
  }[];

  signsKicker: string;
  signsTitle: string;
  signsIntro: string;
  sunInLabel: string;
  signs: SunSignText[];

  houseTitle: string;
  houseParagraphs: string[];

  ctaKicker: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;

  faqKicker: string;
  faqTitle: string;
  faq: FaqItem[];

  disclaimer: string;
};

export const SOLEIL_TRANSLATIONS: Record<Locale, SoleilPageText> = {
  fr: {
    metadata: {
      title: "Soleil en astrologie : signe solaire, identité et personnalité | Luna Astralis",
      description:
        "Découvrez la signification du Soleil en astrologie, son influence sur l’identité, la volonté et la personnalité, ainsi que son expression dans les 12 signes du zodiaque.",
      ogTitle: "Le Soleil en astrologie : identité, volonté et signe solaire",
      ogDescription:
        "Comprenez le rôle du Soleil dans votre thème astral et découvrez comment il influence votre identité, votre vitalité et votre direction intérieure.",
      twitterTitle: "Le Soleil en astrologie | Luna Astralis",
      twitterDescription:
        "Découvrez la signification de votre signe solaire et le rôle du Soleil dans votre thème natal.",
      locale: "fr_CA",
      language: "fr-CA",
    },
    jsonLd: {
      headline: "Le Soleil en astrologie : identité, volonté et signe solaire",
      description:
        "Guide complet consacré au rôle du Soleil dans le thème natal et à son expression dans les douze signes du zodiaque.",
    },
    badge: "☀️ Astrologie et thème natal",
    title: "Le Soleil en astrologie",
    lead:
      "Le Soleil représente votre identité consciente, votre volonté, votre vitalité et la direction que vous cherchez progressivement à donner à votre vie.",
    createChart: "Créer ma carte du ciel gratuite",
    viewSigns: "Voir les 12 signes",
    introKicker: "Comprendre votre signe solaire",
    introTitle: "Que représente le Soleil dans un thème astral ?",
    introParagraphs: [
      "En astrologie, le Soleil représente le centre de l’identité consciente. Il symbolise la volonté, la vitalité, la créativité et les qualités qu’une personne cherche à développer et à exprimer au cours de sa vie.",
      "Votre signe solaire est déterminé par la position du Soleil au moment de votre naissance. C’est le signe que l’on utilise habituellement lorsqu’on affirme être Bélier, Taureau, Gémeaux ou Scorpion.",
      "Le Soleil ne décrit toutefois pas toute votre personnalité. Il constitue l’un des piliers de votre carte du ciel, aux côtés de la Lune et de l’Ascendant. Les autres planètes, les maisons et les aspects apportent des nuances qui rendent chaque thème natal unique.",
    ],
    identityTitle: "Le Soleil, l’identité et la volonté",
    identityCards: [
      {
        icon: "✦",
        title: "Votre identité consciente",
        text: "Le Soleil montre les qualités que vous reconnaissez progressivement comme étant profondément les vôtres.",
      },
      {
        icon: "✧",
        title: "Votre volonté",
        text: "Il révèle ce qui vous motive à avancer, à choisir une direction et à construire une vie qui vous ressemble.",
      },
      {
        icon: "☀",
        title: "Votre vitalité",
        text: "Le Soleil est associé à l’énergie vitale, au rayonnement personnel et à la capacité d’exprimer votre créativité.",
      },
    ],
    pillarsTitle: "Quelle différence entre le Soleil, la Lune et l’Ascendant ?",
    pillars: [
      {
        symbol: "☀️",
        title: "Le Soleil",
        text: "Il représente votre identité consciente, votre volonté et la personne que vous cherchez pleinement à devenir.",
      },
      {
        symbol: "🌙",
        title: "La Lune",
        text: "Elle décrit votre monde émotionnel, vos réactions instinctives et vos besoins de sécurité affective.",
      },
      {
        symbol: "↑",
        title: "L’Ascendant",
        text: "Il révèle votre manière spontanée d’aborder la vie et l’énergie que les autres perçoivent souvent en premier.",
      },
    ],
    signsKicker: "Les douze expressions solaires",
    signsTitle: "Le Soleil dans les 12 signes astrologiques",
    signsIntro:
      "Le Soleil conserve toujours sa fonction d’identité, de volonté et de rayonnement, mais il l’exprime différemment selon le signe du zodiaque dans lequel il se trouve.",
    sunInLabel: "Soleil en",
    signs: [
      { sign: "Bélier", symbol: "♈", text: "Le Soleil en Bélier cherche à affirmer son identité par l’action, l’initiative et le courage. Cette position favorise l’indépendance, la spontanéité et le désir d’ouvrir de nouveaux chemins." },
      { sign: "Taureau", symbol: "♉", text: "Le Soleil en Taureau construit son identité à travers la stabilité, la patience et la fidélité à ses valeurs. Il recherche des bases solides et une progression durable." },
      { sign: "Gémeaux", symbol: "♊", text: "Le Soleil en Gémeaux s’épanouit grâce aux idées, aux échanges et à la découverte. Sa curiosité nourrit son besoin de comprendre, d’apprendre et de transmettre." },
      { sign: "Cancer", symbol: "♋", text: "Le Soleil en Cancer développe son identité à travers la sensibilité, les racines et le sentiment d’appartenance. Il accorde une grande importance à la protection et à la sécurité affective." },
      { sign: "Lion", symbol: "♌", text: "Le Soleil en Lion cherche à rayonner, créer et exprimer pleinement son individualité. Il possède un besoin naturel de reconnaissance, de générosité et d’expression personnelle." },
      { sign: "Vierge", symbol: "♍", text: "Le Soleil en Vierge construit son identité à travers l’utilité, l’amélioration et le sens du détail. Il cherche à comprendre comment rendre les choses plus claires et plus efficaces." },
      { sign: "Balance", symbol: "♎", text: "Le Soleil en Balance se définit à travers les relations, l’équilibre et la recherche d’harmonie. Il développe ses qualités par la coopération, le dialogue et le sens de la justice." },
      { sign: "Scorpion", symbol: "♏", text: "Le Soleil en Scorpion révèle une identité profonde, intense et tournée vers la transformation. Il cherche à comprendre les vérités cachées et à évoluer à travers les grandes expériences de la vie." },
      { sign: "Sagittaire", symbol: "♐", text: "Le Soleil en Sagittaire s’épanouit par l’exploration, la liberté et la recherche de sens. Il développe son identité en élargissant ses horizons et en partageant sa vision." },
      { sign: "Capricorne", symbol: "♑", text: "Le Soleil en Capricorne construit son identité par la responsabilité, la persévérance et l’accomplissement. Il cherche à créer quelque chose de solide et de durable." },
      { sign: "Verseau", symbol: "♒", text: "Le Soleil en Verseau affirme son identité à travers l’originalité, l’indépendance et la contribution au collectif. Il aime remettre en question les modèles établis." },
      { sign: "Poissons", symbol: "♓", text: "Le Soleil en Poissons développe son identité grâce à l’intuition, l’imagination et la compassion. Il est sensible aux émotions, aux symboles et aux dimensions invisibles de l’existence." },
    ],
    houseTitle: "L’importance de la maison astrologique du Soleil",
    houseParagraphs: [
      "Le signe du Soleil explique la manière dont votre identité cherche à s’exprimer. Sa maison astrologique indique plutôt le domaine de vie dans lequel cette énergie prend une importance particulière.",
      "Un Soleil en Maison I peut renforcer le besoin d’affirmation personnelle, tandis qu’un Soleil en Maison IV peut accorder davantage d’importance au foyer, aux racines et à la sécurité intérieure. Un Soleil en Maison X peut orienter l’identité vers la vocation, la reconnaissance et la construction d’une place dans la société.",
    ],
    ctaKicker: "Découvrez votre position",
    ctaTitle: "Dans quel signe et quelle maison se trouve votre Soleil ?",
    ctaText:
      "Générez gratuitement votre carte du ciel pour découvrir votre Soleil, votre Lune, votre Ascendant et les positions de vos principales planètes.",
    ctaButton: "Découvrir mon thème natal",
    faqKicker: "Questions fréquentes",
    faqTitle: "Questions sur le Soleil en astrologie",
    faq: [
      { question: "Que représente le Soleil en astrologie ?", answer: "Le Soleil représente l’identité consciente, la volonté, la vitalité et les qualités que la personne cherche progressivement à exprimer avec davantage de confiance." },
      { question: "Le signe solaire est-il la même chose que le signe astrologique ?", answer: "Oui. Lorsqu’une personne dit qu’elle est Bélier, Taureau ou Scorpion, elle parle généralement du signe dans lequel se trouvait le Soleil au moment de sa naissance." },
      { question: "Le Soleil est-il plus important que l’Ascendant ?", answer: "Le Soleil et l’Ascendant décrivent des dimensions différentes. Le Soleil concerne l’identité profonde et la direction intérieure, tandis que l’Ascendant décrit la manière spontanée d’aborder le monde." },
      { question: "Pourquoi deux personnes du même signe sont-elles différentes ?", answer: "Le signe solaire ne représente qu’une partie du thème natal. La Lune, l’Ascendant, les autres planètes, les maisons et les aspects rendent chaque carte du ciel unique." },
      { question: "Comment connaître la maison de mon Soleil ?", answer: "La maison du Soleil dépend de l’heure et du lieu de naissance. Vous pouvez la découvrir en générant une carte du ciel complète." },
    ],
    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title: "Sun in Astrology: Sun Sign, Identity and Personality | Luna Astralis",
      description:
        "Discover the meaning of the Sun in astrology, its influence on identity, willpower and personality, and its expression through the 12 zodiac signs.",
      ogTitle: "The Sun in Astrology: Identity, Willpower and Sun Sign",
      ogDescription:
        "Understand the role of the Sun in your birth chart and how it shapes your identity, vitality and inner direction.",
      twitterTitle: "The Sun in Astrology | Luna Astralis",
      twitterDescription:
        "Discover the meaning of your Sun sign and the role of the Sun in your birth chart.",
      locale: "en_US",
      language: "en-US",
    },
    jsonLd: {
      headline: "The Sun in Astrology: Identity, Willpower and Sun Sign",
      description:
        "A complete guide to the role of the Sun in the birth chart and its expression through the twelve zodiac signs.",
    },
    badge: "☀️ Astrology and birth chart",
    title: "The Sun in Astrology",
    lead:
      "The Sun represents your conscious identity, willpower, vitality and the direction you gradually seek to give your life.",
    createChart: "Create my free birth chart",
    viewSigns: "View the 12 signs",
    introKicker: "Understanding your Sun sign",
    introTitle: "What does the Sun represent in a birth chart?",
    introParagraphs: [
      "In astrology, the Sun represents the center of conscious identity. It symbolizes willpower, vitality, creativity and the qualities a person seeks to develop and express throughout life.",
      "Your Sun sign is determined by the position of the Sun at the time of your birth. It is the sign people usually mean when they say they are Aries, Taurus, Gemini or Scorpio.",
      "The Sun does not describe your entire personality. It is one of the main pillars of your birth chart, alongside the Moon and Ascendant. The other planets, houses and aspects add the nuances that make every chart unique.",
    ],
    identityTitle: "The Sun, identity and willpower",
    identityCards: [
      { icon: "✦", title: "Your conscious identity", text: "The Sun shows the qualities you gradually recognize as deeply and authentically your own." },
      { icon: "✧", title: "Your willpower", text: "It reveals what motivates you to move forward, choose a direction and build a life that reflects who you are." },
      { icon: "☀", title: "Your vitality", text: "The Sun is associated with life force, personal radiance and your capacity to express creativity." },
    ],
    pillarsTitle: "What is the difference between the Sun, Moon and Ascendant?",
    pillars: [
      { symbol: "☀️", title: "The Sun", text: "It represents your conscious identity, willpower and the person you seek to become fully." },
      { symbol: "🌙", title: "The Moon", text: "It describes your emotional world, instinctive reactions and need for emotional security." },
      { symbol: "↑", title: "The Ascendant", text: "It reveals your spontaneous way of approaching life and the energy others often notice first." },
    ],
    signsKicker: "The twelve solar expressions",
    signsTitle: "The Sun in the 12 zodiac signs",
    signsIntro:
      "The Sun always retains its role of identity, willpower and radiance, but expresses it differently depending on the zodiac sign it occupies.",
    sunInLabel: "Sun in",
    signs: [
      { sign: "Aries", symbol: "♈", text: "Sun in Aries seeks to affirm identity through action, initiative and courage. This placement supports independence, spontaneity and the desire to open new paths." },
      { sign: "Taurus", symbol: "♉", text: "Sun in Taurus builds identity through stability, patience and loyalty to personal values. It seeks solid foundations and lasting progress." },
      { sign: "Gemini", symbol: "♊", text: "Sun in Gemini thrives through ideas, communication and discovery. Curiosity feeds the need to understand, learn and share." },
      { sign: "Cancer", symbol: "♋", text: "Sun in Cancer develops identity through sensitivity, roots and belonging. Protection and emotional security are especially important." },
      { sign: "Leo", symbol: "♌", text: "Sun in Leo seeks to shine, create and fully express individuality. Recognition, generosity and self-expression are natural needs." },
      { sign: "Virgo", symbol: "♍", text: "Sun in Virgo builds identity through usefulness, improvement and attention to detail. It seeks clearer and more efficient ways of doing things." },
      { sign: "Libra", symbol: "♎", text: "Sun in Libra defines itself through relationships, balance and harmony. Cooperation, dialogue and fairness help it grow." },
      { sign: "Scorpio", symbol: "♏", text: "Sun in Scorpio reveals a deep, intense identity oriented toward transformation. It seeks hidden truths and evolves through powerful life experiences." },
      { sign: "Sagittarius", symbol: "♐", text: "Sun in Sagittarius thrives through exploration, freedom and the search for meaning. Identity expands through wider horizons and shared vision." },
      { sign: "Capricorn", symbol: "♑", text: "Sun in Capricorn builds identity through responsibility, perseverance and achievement. It seeks to create something solid and enduring." },
      { sign: "Aquarius", symbol: "♒", text: "Sun in Aquarius affirms identity through originality, independence and contribution to the collective. It enjoys questioning established models." },
      { sign: "Pisces", symbol: "♓", text: "Sun in Pisces develops identity through intuition, imagination and compassion. It is sensitive to emotions, symbols and invisible dimensions of life." },
    ],
    houseTitle: "The importance of the Sun’s astrological house",
    houseParagraphs: [
      "The Sun sign explains how your identity seeks to express itself. Its astrological house shows the area of life where this energy becomes especially important.",
      "A Sun in the First House can strengthen self-assertion, while a Sun in the Fourth House may emphasize home, roots and inner security. A Sun in the Tenth House can direct identity toward vocation, recognition and one’s place in society.",
    ],
    ctaKicker: "Discover your placement",
    ctaTitle: "In which sign and house is your Sun?",
    ctaText:
      "Generate your free birth chart to discover your Sun, Moon, Ascendant and the positions of your main planets.",
    ctaButton: "Discover my birth chart",
    faqKicker: "Frequently asked questions",
    faqTitle: "Questions about the Sun in astrology",
    faq: [
      { question: "What does the Sun represent in astrology?", answer: "The Sun represents conscious identity, willpower, vitality and the qualities a person gradually seeks to express with greater confidence." },
      { question: "Is the Sun sign the same as the zodiac sign?", answer: "Yes. When someone says they are Aries, Taurus or Scorpio, they usually mean the sign occupied by the Sun at birth." },
      { question: "Is the Sun more important than the Ascendant?", answer: "The Sun and Ascendant describe different dimensions. The Sun concerns core identity and inner direction, while the Ascendant describes the spontaneous way you approach the world." },
      { question: "Why are two people with the same sign different?", answer: "The Sun sign is only one part of the birth chart. The Moon, Ascendant, other planets, houses and aspects make every chart unique." },
      { question: "How can I find the house of my Sun?", answer: "The Sun’s house depends on your birth time and place. You can discover it by generating a complete birth chart." },
    ],
    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },

  es: {
    metadata: {
      title: "Sol en astrología: signo solar, identidad y personalidad | Luna Astralis",
      description:
        "Descubre el significado del Sol en astrología, su influencia en la identidad, la voluntad y la personalidad, y su expresión en los 12 signos del zodiaco.",
      ogTitle: "El Sol en astrología: identidad, voluntad y signo solar",
      ogDescription:
        "Comprende el papel del Sol en tu carta natal y cómo influye en tu identidad, vitalidad y dirección interior.",
      twitterTitle: "El Sol en astrología | Luna Astralis",
      twitterDescription:
        "Descubre el significado de tu signo solar y el papel del Sol en tu carta natal.",
      locale: "es_ES",
      language: "es-ES",
    },
    jsonLd: {
      headline: "El Sol en astrología: identidad, voluntad y signo solar",
      description:
        "Guía completa sobre el papel del Sol en la carta natal y su expresión en los doce signos del zodiaco.",
    },
    badge: "☀️ Astrología y carta natal",
    title: "El Sol en astrología",
    lead:
      "El Sol representa tu identidad consciente, tu voluntad, tu vitalidad y la dirección que buscas dar progresivamente a tu vida.",
    createChart: "Crear mi carta natal gratis",
    viewSigns: "Ver los 12 signos",
    introKicker: "Comprender tu signo solar",
    introTitle: "¿Qué representa el Sol en una carta natal?",
    introParagraphs: [
      "En astrología, el Sol representa el centro de la identidad consciente. Simboliza la voluntad, la vitalidad, la creatividad y las cualidades que una persona busca desarrollar y expresar a lo largo de su vida.",
      "Tu signo solar está determinado por la posición del Sol en el momento de tu nacimiento. Es el signo al que normalmente nos referimos cuando decimos ser Aries, Tauro, Géminis o Escorpio.",
      "Sin embargo, el Sol no describe toda tu personalidad. Es uno de los pilares de la carta natal junto con la Luna y el Ascendente. Los demás planetas, las casas y los aspectos aportan matices que hacen única cada carta.",
    ],
    identityTitle: "El Sol, la identidad y la voluntad",
    identityCards: [
      { icon: "✦", title: "Tu identidad consciente", text: "El Sol muestra las cualidades que reconoces progresivamente como profundamente tuyas." },
      { icon: "✧", title: "Tu voluntad", text: "Revela lo que te motiva a avanzar, elegir una dirección y construir una vida que se parezca a ti." },
      { icon: "☀", title: "Tu vitalidad", text: "El Sol se asocia con la energía vital, el brillo personal y la capacidad de expresar tu creatividad." },
    ],
    pillarsTitle: "¿Cuál es la diferencia entre el Sol, la Luna y el Ascendente?",
    pillars: [
      { symbol: "☀️", title: "El Sol", text: "Representa tu identidad consciente, tu voluntad y la persona que buscas llegar a ser plenamente." },
      { symbol: "🌙", title: "La Luna", text: "Describe tu mundo emocional, tus reacciones instintivas y tus necesidades de seguridad afectiva." },
      { symbol: "↑", title: "El Ascendente", text: "Revela tu manera espontánea de abordar la vida y la energía que los demás perciben primero." },
    ],
    signsKicker: "Las doce expresiones solares",
    signsTitle: "El Sol en los 12 signos zodiacales",
    signsIntro:
      "El Sol conserva siempre su función de identidad, voluntad y brillo, pero la expresa de forma diferente según el signo del zodiaco en el que se encuentre.",
    sunInLabel: "Sol en",
    signs: [
      { sign: "Aries", symbol: "♈", text: "El Sol en Aries busca afirmar su identidad mediante la acción, la iniciativa y el coraje. Favorece la independencia, la espontaneidad y el deseo de abrir nuevos caminos." },
      { sign: "Tauro", symbol: "♉", text: "El Sol en Tauro construye su identidad a través de la estabilidad, la paciencia y la fidelidad a sus valores. Busca bases sólidas y un progreso duradero." },
      { sign: "Géminis", symbol: "♊", text: "El Sol en Géminis florece gracias a las ideas, los intercambios y el descubrimiento. La curiosidad alimenta su necesidad de comprender, aprender y transmitir." },
      { sign: "Cáncer", symbol: "♋", text: "El Sol en Cáncer desarrolla su identidad a través de la sensibilidad, las raíces y el sentido de pertenencia. La protección y la seguridad afectiva son esenciales." },
      { sign: "Leo", symbol: "♌", text: "El Sol en Leo busca brillar, crear y expresar plenamente su individualidad. Necesita reconocimiento, generosidad y expresión personal." },
      { sign: "Virgo", symbol: "♍", text: "El Sol en Virgo construye su identidad mediante la utilidad, la mejora y la atención al detalle. Busca hacer las cosas más claras y eficaces." },
      { sign: "Libra", symbol: "♎", text: "El Sol en Libra se define a través de las relaciones, el equilibrio y la armonía. Crece mediante la cooperación, el diálogo y la justicia." },
      { sign: "Escorpio", symbol: "♏", text: "El Sol en Escorpio revela una identidad profunda, intensa y orientada a la transformación. Busca verdades ocultas y evoluciona mediante experiencias poderosas." },
      { sign: "Sagitario", symbol: "♐", text: "El Sol en Sagitario se desarrolla mediante la exploración, la libertad y la búsqueda de sentido. Amplía su identidad al abrir horizontes y compartir su visión." },
      { sign: "Capricornio", symbol: "♑", text: "El Sol en Capricornio construye su identidad mediante la responsabilidad, la perseverancia y el logro. Busca crear algo sólido y duradero." },
      { sign: "Acuario", symbol: "♒", text: "El Sol en Acuario afirma su identidad a través de la originalidad, la independencia y la contribución al colectivo. Le gusta cuestionar los modelos establecidos." },
      { sign: "Piscis", symbol: "♓", text: "El Sol en Piscis desarrolla su identidad mediante la intuición, la imaginación y la compasión. Es sensible a las emociones, los símbolos y las dimensiones invisibles." },
    ],
    houseTitle: "La importancia de la casa astrológica del Sol",
    houseParagraphs: [
      "El signo del Sol explica cómo busca expresarse tu identidad. Su casa astrológica indica el área de la vida donde esta energía adquiere especial importancia.",
      "Un Sol en Casa I puede reforzar la autoafirmación, mientras que un Sol en Casa IV puede dar más importancia al hogar, las raíces y la seguridad interior. Un Sol en Casa X puede orientar la identidad hacia la vocación, el reconocimiento y el lugar en la sociedad.",
    ],
    ctaKicker: "Descubre tu posición",
    ctaTitle: "¿En qué signo y casa se encuentra tu Sol?",
    ctaText:
      "Genera gratis tu carta natal para descubrir tu Sol, tu Luna, tu Ascendente y las posiciones de tus principales planetas.",
    ctaButton: "Descubrir mi carta natal",
    faqKicker: "Preguntas frecuentes",
    faqTitle: "Preguntas sobre el Sol en astrología",
    faq: [
      { question: "¿Qué representa el Sol en astrología?", answer: "El Sol representa la identidad consciente, la voluntad, la vitalidad y las cualidades que la persona busca expresar progresivamente con más confianza." },
      { question: "¿El signo solar es lo mismo que el signo zodiacal?", answer: "Sí. Cuando alguien dice que es Aries, Tauro o Escorpio, normalmente habla del signo en el que estaba el Sol al nacer." },
      { question: "¿El Sol es más importante que el Ascendente?", answer: "El Sol y el Ascendente describen dimensiones distintas. El Sol se relaciona con la identidad profunda y la dirección interior, mientras que el Ascendente describe la forma espontánea de abordar el mundo." },
      { question: "¿Por qué dos personas del mismo signo son diferentes?", answer: "El signo solar es solo una parte de la carta natal. La Luna, el Ascendente, los demás planetas, las casas y los aspectos hacen única cada carta." },
      { question: "¿Cómo puedo conocer la casa de mi Sol?", answer: "La casa del Sol depende de la hora y el lugar de nacimiento. Puedes descubrirla generando una carta natal completa." },
    ],
    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, legal o financiero.",
  },

  de: {
    metadata: {
      title: "Sonne in der Astrologie: Sonnenzeichen, Identität und Persönlichkeit | Luna Astralis",
      description:
        "Entdecken Sie die Bedeutung der Sonne in der Astrologie, ihren Einfluss auf Identität, Willenskraft und Persönlichkeit sowie ihren Ausdruck in den 12 Tierkreiszeichen.",
      ogTitle: "Die Sonne in der Astrologie: Identität, Wille und Sonnenzeichen",
      ogDescription:
        "Verstehen Sie die Rolle der Sonne im Geburtshoroskop und ihren Einfluss auf Identität, Vitalität und innere Ausrichtung.",
      twitterTitle: "Die Sonne in der Astrologie | Luna Astralis",
      twitterDescription:
        "Entdecken Sie die Bedeutung Ihres Sonnenzeichens und die Rolle der Sonne im Geburtshoroskop.",
      locale: "de_DE",
      language: "de-DE",
    },
    jsonLd: {
      headline: "Die Sonne in der Astrologie: Identität, Wille und Sonnenzeichen",
      description:
        "Ein vollständiger Leitfaden zur Rolle der Sonne im Geburtshoroskop und ihrem Ausdruck in den zwölf Tierkreiszeichen.",
    },
    badge: "☀️ Astrologie und Geburtshoroskop",
    title: "Die Sonne in der Astrologie",
    lead:
      "Die Sonne steht für Ihre bewusste Identität, Ihren Willen, Ihre Vitalität und die Richtung, die Sie Ihrem Leben nach und nach geben möchten.",
    createChart: "Kostenloses Geburtshoroskop erstellen",
    viewSigns: "Die 12 Zeichen ansehen",
    introKicker: "Ihr Sonnenzeichen verstehen",
    introTitle: "Was bedeutet die Sonne im Geburtshoroskop?",
    introParagraphs: [
      "In der Astrologie steht die Sonne im Zentrum der bewussten Identität. Sie symbolisiert Willenskraft, Vitalität, Kreativität und die Eigenschaften, die ein Mensch im Laufe seines Lebens entwickeln und ausdrücken möchte.",
      "Ihr Sonnenzeichen wird durch die Position der Sonne zum Zeitpunkt Ihrer Geburt bestimmt. Es ist das Zeichen, das gemeint ist, wenn jemand sagt, er sei Widder, Stier, Zwilling oder Skorpion.",
      "Die Sonne beschreibt jedoch nicht die gesamte Persönlichkeit. Sie ist neben Mond und Aszendent eine der Hauptsäulen des Geburtshoroskops. Andere Planeten, Häuser und Aspekte verleihen jedem Horoskop seine Einzigartigkeit.",
    ],
    identityTitle: "Die Sonne, Identität und Wille",
    identityCards: [
      { icon: "✦", title: "Ihre bewusste Identität", text: "Die Sonne zeigt die Eigenschaften, die Sie nach und nach als tief und wahrhaftig zu Ihnen gehörend erkennen." },
      { icon: "✧", title: "Ihr Wille", text: "Sie zeigt, was Sie antreibt, eine Richtung zu wählen und ein Leben aufzubauen, das Ihnen entspricht." },
      { icon: "☀", title: "Ihre Vitalität", text: "Die Sonne steht für Lebensenergie, persönliche Ausstrahlung und die Fähigkeit, Kreativität auszudrücken." },
    ],
    pillarsTitle: "Was ist der Unterschied zwischen Sonne, Mond und Aszendent?",
    pillars: [
      { symbol: "☀️", title: "Die Sonne", text: "Sie steht für Ihre bewusste Identität, Ihren Willen und die Person, die Sie vollständig werden möchten." },
      { symbol: "🌙", title: "Der Mond", text: "Er beschreibt Ihre Gefühlswelt, instinktiven Reaktionen und Ihr Bedürfnis nach emotionaler Sicherheit." },
      { symbol: "↑", title: "Der Aszendent", text: "Er zeigt Ihre spontane Art, dem Leben zu begegnen, und die Energie, die andere zuerst wahrnehmen." },
    ],
    signsKicker: "Die zwölf solaren Ausdrucksformen",
    signsTitle: "Die Sonne in den 12 Tierkreiszeichen",
    signsIntro:
      "Die Sonne behält immer ihre Funktion als Symbol für Identität, Willen und Ausstrahlung, drückt diese jedoch je nach Tierkreiszeichen unterschiedlich aus.",
    sunInLabel: "Sonne im",
    signs: [
      { sign: "Widder", symbol: "♈", text: "Die Sonne im Widder bekräftigt Identität durch Handlung, Initiative und Mut. Diese Stellung fördert Unabhängigkeit, Spontaneität und den Wunsch, neue Wege zu eröffnen." },
      { sign: "Stier", symbol: "♉", text: "Die Sonne im Stier baut Identität durch Stabilität, Geduld und Treue zu eigenen Werten auf. Sie sucht solide Grundlagen und nachhaltigen Fortschritt." },
      { sign: "Zwillinge", symbol: "♊", text: "Die Sonne in den Zwillingen entfaltet sich durch Ideen, Austausch und Entdeckung. Neugier nährt das Bedürfnis zu verstehen, zu lernen und Wissen weiterzugeben." },
      { sign: "Krebs", symbol: "♋", text: "Die Sonne im Krebs entwickelt Identität durch Sensibilität, Wurzeln und Zugehörigkeit. Schutz und emotionale Sicherheit sind besonders wichtig." },
      { sign: "Löwe", symbol: "♌", text: "Die Sonne im Löwen möchte strahlen, gestalten und Individualität voll ausdrücken. Anerkennung, Großzügigkeit und Selbstausdruck sind natürliche Bedürfnisse." },
      { sign: "Jungfrau", symbol: "♍", text: "Die Sonne in der Jungfrau baut Identität durch Nützlichkeit, Verbesserung und Genauigkeit auf. Sie sucht nach klareren und effizienteren Lösungen." },
      { sign: "Waage", symbol: "♎", text: "Die Sonne in der Waage definiert sich durch Beziehungen, Gleichgewicht und Harmonie. Kooperation, Dialog und Gerechtigkeit fördern ihre Entwicklung." },
      { sign: "Skorpion", symbol: "♏", text: "Die Sonne im Skorpion zeigt eine tiefe, intensive und wandlungsorientierte Identität. Sie sucht verborgene Wahrheiten und wächst durch kraftvolle Erfahrungen." },
      { sign: "Schütze", symbol: "♐", text: "Die Sonne im Schützen entfaltet sich durch Entdeckung, Freiheit und Sinnsuche. Identität wächst durch erweiterte Horizonte und geteilte Visionen." },
      { sign: "Steinbock", symbol: "♑", text: "Die Sonne im Steinbock baut Identität durch Verantwortung, Ausdauer und Leistung auf. Sie möchte etwas Solides und Dauerhaftes schaffen." },
      { sign: "Wassermann", symbol: "♒", text: "Die Sonne im Wassermann bekräftigt Identität durch Originalität, Unabhängigkeit und Beitrag zum Kollektiv. Sie stellt etablierte Modelle gern infrage." },
      { sign: "Fische", symbol: "♓", text: "Die Sonne in den Fischen entwickelt Identität durch Intuition, Vorstellungskraft und Mitgefühl. Sie ist empfänglich für Gefühle, Symbole und unsichtbare Ebenen." },
    ],
    houseTitle: "Die Bedeutung des astrologischen Hauses der Sonne",
    houseParagraphs: [
      "Das Sonnenzeichen erklärt, wie sich Ihre Identität ausdrücken möchte. Das astrologische Haus zeigt den Lebensbereich, in dem diese Energie besonders wichtig wird.",
      "Eine Sonne im ersten Haus kann Selbstbehauptung stärken, während eine Sonne im vierten Haus Heim, Wurzeln und innere Sicherheit betont. Eine Sonne im zehnten Haus kann Identität auf Berufung, Anerkennung und gesellschaftliche Stellung ausrichten.",
    ],
    ctaKicker: "Entdecken Sie Ihre Position",
    ctaTitle: "In welchem Zeichen und Haus steht Ihre Sonne?",
    ctaText:
      "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Sonne, Mond, Aszendent und die Positionen Ihrer wichtigsten Planeten.",
    ctaButton: "Mein Geburtshoroskop entdecken",
    faqKicker: "Häufige Fragen",
    faqTitle: "Fragen zur Sonne in der Astrologie",
    faq: [
      { question: "Wofür steht die Sonne in der Astrologie?", answer: "Die Sonne steht für bewusste Identität, Willenskraft, Vitalität und die Eigenschaften, die ein Mensch zunehmend selbstbewusst ausdrücken möchte." },
      { question: "Ist das Sonnenzeichen dasselbe wie das Tierkreiszeichen?", answer: "Ja. Wenn jemand sagt, er sei Widder, Stier oder Skorpion, meint er meist das Zeichen, in dem die Sonne bei der Geburt stand." },
      { question: "Ist die Sonne wichtiger als der Aszendent?", answer: "Sonne und Aszendent beschreiben unterschiedliche Ebenen. Die Sonne betrifft Kernidentität und innere Ausrichtung, der Aszendent die spontane Art, der Welt zu begegnen." },
      { question: "Warum sind zwei Menschen mit demselben Zeichen verschieden?", answer: "Das Sonnenzeichen ist nur ein Teil des Geburtshoroskops. Mond, Aszendent, andere Planeten, Häuser und Aspekte machen jedes Horoskop einzigartig." },
      { question: "Wie finde ich das Haus meiner Sonne?", answer: "Das Haus der Sonne hängt von Geburtszeit und Geburtsort ab. Sie können es durch ein vollständiges Geburtshoroskop herausfinden." },
    ],
    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title: "Sole in astrologia: segno solare, identità e personalità | Luna Astralis",
      description:
        "Scopri il significato del Sole in astrologia, la sua influenza su identità, volontà e personalità e la sua espressione nei 12 segni zodiacali.",
      ogTitle: "Il Sole in astrologia: identità, volontà e segno solare",
      ogDescription:
        "Comprendi il ruolo del Sole nel tema natale e come influenza identità, vitalità e direzione interiore.",
      twitterTitle: "Il Sole in astrologia | Luna Astralis",
      twitterDescription:
        "Scopri il significato del tuo segno solare e il ruolo del Sole nel tema natale.",
      locale: "it_IT",
      language: "it-IT",
    },
    jsonLd: {
      headline: "Il Sole in astrologia: identità, volontà e segno solare",
      description:
        "Guida completa al ruolo del Sole nel tema natale e alla sua espressione nei dodici segni zodiacali.",
    },
    badge: "☀️ Astrologia e tema natale",
    title: "Il Sole in astrologia",
    lead:
      "Il Sole rappresenta la tua identità cosciente, la volontà, la vitalità e la direzione che cerchi gradualmente di dare alla tua vita.",
    createChart: "Crea il mio tema natale gratuito",
    viewSigns: "Vedi i 12 segni",
    introKicker: "Comprendere il tuo segno solare",
    introTitle: "Che cosa rappresenta il Sole nel tema natale?",
    introParagraphs: [
      "In astrologia, il Sole rappresenta il centro dell’identità cosciente. Simboleggia volontà, vitalità, creatività e le qualità che una persona cerca di sviluppare ed esprimere nel corso della vita.",
      "Il tuo segno solare è determinato dalla posizione del Sole al momento della nascita. È il segno a cui ci si riferisce quando si dice di essere Ariete, Toro, Gemelli o Scorpione.",
      "Il Sole non descrive però tutta la personalità. È uno dei pilastri del tema natale insieme alla Luna e all’Ascendente. Gli altri pianeti, le case e gli aspetti aggiungono sfumature che rendono unico ogni tema.",
    ],
    identityTitle: "Il Sole, l’identità e la volontà",
    identityCards: [
      { icon: "✦", title: "La tua identità cosciente", text: "Il Sole mostra le qualità che riconosci progressivamente come profondamente tue." },
      { icon: "✧", title: "La tua volontà", text: "Rivela ciò che ti motiva ad avanzare, scegliere una direzione e costruire una vita che ti rappresenti." },
      { icon: "☀", title: "La tua vitalità", text: "Il Sole è associato all’energia vitale, alla luminosità personale e alla capacità di esprimere creatività." },
    ],
    pillarsTitle: "Qual è la differenza tra Sole, Luna e Ascendente?",
    pillars: [
      { symbol: "☀️", title: "Il Sole", text: "Rappresenta la tua identità cosciente, la volontà e la persona che cerchi pienamente di diventare." },
      { symbol: "🌙", title: "La Luna", text: "Descrive il tuo mondo emotivo, le reazioni istintive e il bisogno di sicurezza affettiva." },
      { symbol: "↑", title: "L’Ascendente", text: "Rivela il tuo modo spontaneo di affrontare la vita e l’energia che gli altri percepiscono per prima." },
    ],
    signsKicker: "Le dodici espressioni solari",
    signsTitle: "Il Sole nei 12 segni zodiacali",
    signsIntro:
      "Il Sole conserva sempre la sua funzione di identità, volontà e luminosità, ma la esprime in modo diverso a seconda del segno zodiacale in cui si trova.",
    sunInLabel: "Sole in",
    signs: [
      { sign: "Ariete", symbol: "♈", text: "Il Sole in Ariete afferma l’identità attraverso azione, iniziativa e coraggio. Favorisce indipendenza, spontaneità e desiderio di aprire nuove strade." },
      { sign: "Toro", symbol: "♉", text: "Il Sole in Toro costruisce l’identità attraverso stabilità, pazienza e fedeltà ai propri valori. Cerca basi solide e progresso duraturo." },
      { sign: "Gemelli", symbol: "♊", text: "Il Sole in Gemelli si realizza attraverso idee, scambi e scoperta. La curiosità alimenta il bisogno di comprendere, imparare e comunicare." },
      { sign: "Cancro", symbol: "♋", text: "Il Sole in Cancro sviluppa l’identità attraverso sensibilità, radici e appartenenza. Protezione e sicurezza affettiva hanno grande importanza." },
      { sign: "Leone", symbol: "♌", text: "Il Sole in Leone cerca di brillare, creare ed esprimere pienamente l’individualità. Riconoscimento, generosità ed espressione personale sono bisogni naturali." },
      { sign: "Vergine", symbol: "♍", text: "Il Sole in Vergine costruisce l’identità attraverso utilità, miglioramento e attenzione ai dettagli. Cerca soluzioni più chiare ed efficienti." },
      { sign: "Bilancia", symbol: "♎", text: "Il Sole in Bilancia si definisce attraverso relazioni, equilibrio e armonia. Cresce mediante cooperazione, dialogo e senso di giustizia." },
      { sign: "Scorpione", symbol: "♏", text: "Il Sole in Scorpione rivela un’identità profonda, intensa e orientata alla trasformazione. Cerca verità nascoste ed evolve attraverso esperienze potenti." },
      { sign: "Sagittario", symbol: "♐", text: "Il Sole in Sagittario si realizza attraverso esplorazione, libertà e ricerca di senso. L’identità cresce ampliando gli orizzonti e condividendo una visione." },
      { sign: "Capricorno", symbol: "♑", text: "Il Sole in Capricorno costruisce l’identità attraverso responsabilità, perseveranza e realizzazione. Cerca di creare qualcosa di solido e duraturo." },
      { sign: "Acquario", symbol: "♒", text: "Il Sole in Acquario afferma l’identità attraverso originalità, indipendenza e contributo al collettivo. Ama mettere in discussione i modelli stabiliti." },
      { sign: "Pesci", symbol: "♓", text: "Il Sole in Pesci sviluppa l’identità attraverso intuizione, immaginazione e compassione. È sensibile alle emozioni, ai simboli e alle dimensioni invisibili." },
    ],
    houseTitle: "L’importanza della casa astrologica del Sole",
    houseParagraphs: [
      "Il segno del Sole spiega come la tua identità cerca di esprimersi. La casa astrologica indica invece l’area della vita in cui questa energia assume particolare importanza.",
      "Un Sole in Prima Casa può rafforzare l’autoaffermazione, mentre un Sole in Quarta Casa può enfatizzare casa, radici e sicurezza interiore. Un Sole in Decima Casa può orientare l’identità verso vocazione, riconoscimento e ruolo sociale.",
    ],
    ctaKicker: "Scopri la tua posizione",
    ctaTitle: "In quale segno e casa si trova il tuo Sole?",
    ctaText:
      "Genera gratuitamente il tuo tema natale per scoprire Sole, Luna, Ascendente e le posizioni dei principali pianeti.",
    ctaButton: "Scopri il mio tema natale",
    faqKicker: "Domande frequenti",
    faqTitle: "Domande sul Sole in astrologia",
    faq: [
      { question: "Che cosa rappresenta il Sole in astrologia?", answer: "Il Sole rappresenta identità cosciente, volontà, vitalità e le qualità che una persona cerca progressivamente di esprimere con maggiore sicurezza." },
      { question: "Il segno solare è lo stesso del segno zodiacale?", answer: "Sì. Quando una persona dice di essere Ariete, Toro o Scorpione, di solito indica il segno in cui si trovava il Sole alla nascita." },
      { question: "Il Sole è più importante dell’Ascendente?", answer: "Sole e Ascendente descrivono dimensioni diverse. Il Sole riguarda l’identità profonda e la direzione interiore, mentre l’Ascendente descrive il modo spontaneo di affrontare il mondo." },
      { question: "Perché due persone dello stesso segno sono diverse?", answer: "Il segno solare è solo una parte del tema natale. Luna, Ascendente, altri pianeti, case e aspetti rendono unico ogni tema." },
      { question: "Come posso conoscere la casa del mio Sole?", answer: "La casa del Sole dipende dall’ora e dal luogo di nascita. Puoi scoprirla generando un tema natale completo." },
    ],
    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce consulenze mediche, psicologiche, legali o finanziarie.",
  },

  pt: {
    metadata: {
      title: "Sol na astrologia: signo solar, identidade e personalidade | Luna Astralis",
      description:
        "Descubra o significado do Sol na astrologia, sua influência sobre identidade, vontade e personalidade e sua expressão nos 12 signos do zodíaco.",
      ogTitle: "O Sol na astrologia: identidade, vontade e signo solar",
      ogDescription:
        "Compreenda o papel do Sol no mapa astral e como ele influencia identidade, vitalidade e direção interior.",
      twitterTitle: "O Sol na astrologia | Luna Astralis",
      twitterDescription:
        "Descubra o significado do seu signo solar e o papel do Sol no seu mapa astral.",
      locale: "pt_BR",
      language: "pt-BR",
    },
    jsonLd: {
      headline: "O Sol na astrologia: identidade, vontade e signo solar",
      description:
        "Guia completo sobre o papel do Sol no mapa astral e sua expressão nos doze signos do zodíaco.",
    },
    badge: "☀️ Astrologia e mapa astral",
    title: "O Sol na astrologia",
    lead:
      "O Sol representa sua identidade consciente, sua vontade, sua vitalidade e a direção que você procura dar progressivamente à sua vida.",
    createChart: "Criar meu mapa astral grátis",
    viewSigns: "Ver os 12 signos",
    introKicker: "Compreender seu signo solar",
    introTitle: "O que o Sol representa em um mapa astral?",
    introParagraphs: [
      "Na astrologia, o Sol representa o centro da identidade consciente. Ele simboliza vontade, vitalidade, criatividade e as qualidades que uma pessoa procura desenvolver e expressar ao longo da vida.",
      "Seu signo solar é determinado pela posição do Sol no momento do nascimento. É o signo ao qual normalmente nos referimos quando dizemos ser Áries, Touro, Gêmeos ou Escorpião.",
      "O Sol, porém, não descreve toda a personalidade. Ele é um dos pilares do mapa astral, ao lado da Lua e do Ascendente. Os outros planetas, casas e aspectos acrescentam nuances que tornam cada mapa único.",
    ],
    identityTitle: "O Sol, a identidade e a vontade",
    identityCards: [
      { icon: "✦", title: "Sua identidade consciente", text: "O Sol mostra as qualidades que você reconhece progressivamente como profundamente suas." },
      { icon: "✧", title: "Sua vontade", text: "Ele revela o que motiva você a avançar, escolher uma direção e construir uma vida que combine com quem você é." },
      { icon: "☀", title: "Sua vitalidade", text: "O Sol está associado à energia vital, ao brilho pessoal e à capacidade de expressar criatividade." },
    ],
    pillarsTitle: "Qual é a diferença entre Sol, Lua e Ascendente?",
    pillars: [
      { symbol: "☀️", title: "O Sol", text: "Representa sua identidade consciente, sua vontade e a pessoa que você procura plenamente se tornar." },
      { symbol: "🌙", title: "A Lua", text: "Descreve seu mundo emocional, suas reações instintivas e suas necessidades de segurança afetiva." },
      { symbol: "↑", title: "O Ascendente", text: "Revela sua maneira espontânea de abordar a vida e a energia que os outros percebem primeiro." },
    ],
    signsKicker: "As doze expressões solares",
    signsTitle: "O Sol nos 12 signos do zodíaco",
    signsIntro:
      "O Sol mantém sempre sua função de identidade, vontade e brilho, mas a expressa de forma diferente conforme o signo do zodíaco em que se encontra.",
    sunInLabel: "Sol em",
    signs: [
      { sign: "Áries", symbol: "♈", text: "O Sol em Áries afirma a identidade por meio da ação, da iniciativa e da coragem. Favorece independência, espontaneidade e desejo de abrir novos caminhos." },
      { sign: "Touro", symbol: "♉", text: "O Sol em Touro constrói a identidade por meio da estabilidade, da paciência e da fidelidade aos próprios valores. Busca bases sólidas e progresso duradouro." },
      { sign: "Gêmeos", symbol: "♊", text: "O Sol em Gêmeos floresce por meio das ideias, das trocas e da descoberta. A curiosidade alimenta a necessidade de compreender, aprender e comunicar." },
      { sign: "Câncer", symbol: "♋", text: "O Sol em Câncer desenvolve a identidade por meio da sensibilidade, das raízes e do pertencimento. Proteção e segurança emocional são muito importantes." },
      { sign: "Leão", symbol: "♌", text: "O Sol em Leão busca brilhar, criar e expressar plenamente a individualidade. Reconhecimento, generosidade e expressão pessoal são necessidades naturais." },
      { sign: "Virgem", symbol: "♍", text: "O Sol em Virgem constrói a identidade por meio da utilidade, do aperfeiçoamento e da atenção aos detalhes. Busca soluções mais claras e eficientes." },
      { sign: "Libra", symbol: "♎", text: "O Sol em Libra se define por meio dos relacionamentos, do equilíbrio e da harmonia. Cooperação, diálogo e justiça favorecem seu desenvolvimento." },
      { sign: "Escorpião", symbol: "♏", text: "O Sol em Escorpião revela uma identidade profunda, intensa e voltada para a transformação. Busca verdades ocultas e evolui por meio de experiências poderosas." },
      { sign: "Sagitário", symbol: "♐", text: "O Sol em Sagitário floresce por meio da exploração, da liberdade e da busca de sentido. A identidade cresce com horizontes mais amplos e visão compartilhada." },
      { sign: "Capricórnio", symbol: "♑", text: "O Sol em Capricórnio constrói a identidade por meio da responsabilidade, da perseverança e da realização. Busca criar algo sólido e duradouro." },
      { sign: "Aquário", symbol: "♒", text: "O Sol em Aquário afirma a identidade por meio da originalidade, da independência e da contribuição ao coletivo. Gosta de questionar modelos estabelecidos." },
      { sign: "Peixes", symbol: "♓", text: "O Sol em Peixes desenvolve a identidade por meio da intuição, da imaginação e da compaixão. É sensível às emoções, aos símbolos e às dimensões invisíveis." },
    ],
    houseTitle: "A importância da casa astrológica do Sol",
    houseParagraphs: [
      "O signo do Sol explica como sua identidade procura se expressar. A casa astrológica indica a área da vida em que essa energia se torna especialmente importante.",
      "Um Sol na Casa I pode fortalecer a autoafirmação, enquanto um Sol na Casa IV pode enfatizar lar, raízes e segurança interior. Um Sol na Casa X pode orientar a identidade para vocação, reconhecimento e posição social.",
    ],
    ctaKicker: "Descubra sua posição",
    ctaTitle: "Em qual signo e casa está o seu Sol?",
    ctaText:
      "Gere gratuitamente seu mapa astral para descobrir seu Sol, sua Lua, seu Ascendente e as posições dos principais planetas.",
    ctaButton: "Descobrir meu mapa astral",
    faqKicker: "Perguntas frequentes",
    faqTitle: "Perguntas sobre o Sol na astrologia",
    faq: [
      { question: "O que o Sol representa na astrologia?", answer: "O Sol representa identidade consciente, vontade, vitalidade e as qualidades que a pessoa procura expressar progressivamente com mais confiança." },
      { question: "O signo solar é o mesmo que o signo do zodíaco?", answer: "Sim. Quando alguém diz ser Áries, Touro ou Escorpião, normalmente se refere ao signo em que o Sol estava no momento do nascimento." },
      { question: "O Sol é mais importante que o Ascendente?", answer: "Sol e Ascendente descrevem dimensões diferentes. O Sol trata da identidade profunda e da direção interior, enquanto o Ascendente descreve a maneira espontânea de abordar o mundo." },
      { question: "Por que duas pessoas do mesmo signo são diferentes?", answer: "O signo solar é apenas uma parte do mapa astral. Lua, Ascendente, outros planetas, casas e aspectos tornam cada mapa único." },
      { question: "Como posso descobrir a casa do meu Sol?", answer: "A casa do Sol depende da hora e do local de nascimento. Você pode descobri-la gerando um mapa astral completo." },
    ],
    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
