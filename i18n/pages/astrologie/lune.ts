// i18n/pages/astrologie/lune.ts

import type { Locale } from "@/i18n/config";

export type MoonSignText = {
  sign: string;
  symbol: string;
  text: string;
};

export type MoonFaqItem = {
  question: string;
  answer: string;
};

export type LunePageText = {
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

  emotionsTitle: string;
  emotionCards: {
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

  needsTitle: string;
  needsParagraphs: string[];

  signsKicker: string;
  signsTitle: string;
  signsIntro: string;
  moonInLabel: string;
  signs: MoonSignText[];

  houseTitle: string;
  houseParagraphs: string[];

  ctaKicker: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;

  relationshipsTitle: string;
  relationshipsParagraphs: string[];

  intuitionTitle: string;
  intuitionParagraphs: string[];

  faqKicker: string;
  faqTitle: string;
  faq: MoonFaqItem[];

  disclaimer: string;
};

export const LUNE_TRANSLATIONS: Record<Locale, LunePageText> = {
  fr: {
    metadata: {
      title: "Lune en astrologie : émotions, besoins affectifs et signe lunaire | Luna Astralis",
      description:
        "Découvrez la signification de la Lune en astrologie, son influence sur les émotions, l’intuition et les besoins affectifs, ainsi que son expression dans les 12 signes du zodiaque.",
      ogTitle: "La Lune en astrologie : émotions, intuition et signe lunaire",
      ogDescription:
        "Comprenez le rôle de la Lune dans votre thème astral et découvrez comment elle influence votre sensibilité, vos réactions instinctives et votre sécurité intérieure.",
      twitterTitle: "La Lune en astrologie | Luna Astralis",
      twitterDescription:
        "Découvrez la signification de votre signe lunaire et le rôle de la Lune dans votre thème natal.",
      locale: "fr_CA",
      language: "fr-CA",
    },
    jsonLd: {
      headline: "La Lune en astrologie : émotions, intuition et signe lunaire",
      description:
        "Guide complet consacré au rôle de la Lune dans le thème natal et à son expression dans les douze signes du zodiaque.",
    },
    badge: "🌙 Astrologie et thème natal",
    title: "La Lune en astrologie",
    lead:
      "La Lune représente votre monde émotionnel, vos réactions instinctives, vos besoins affectifs et la manière dont vous recherchez la sécurité intérieure.",
    createChart: "Créer ma carte du ciel gratuite",
    viewSigns: "Voir les 12 signes",
    introKicker: "Comprendre votre signe lunaire",
    introTitle: "Que représente la Lune dans un thème astral ?",
    introParagraphs: [
      "En astrologie, la Lune représente la dimension sensible et instinctive de la personnalité. Elle symbolise les émotions, les habitudes, les souvenirs, l’intuition et les besoins qui contribuent au sentiment de sécurité intérieure.",
      "Votre signe lunaire est déterminé par la position de la Lune au moment précis de votre naissance. Il révèle la manière dont vous réagissez spontanément aux événements, ce qui vous apaise et la façon dont vous exprimez votre sensibilité.",
      "La Lune est l’un des trois grands piliers du thème natal, avec le Soleil et l’Ascendant. Alors que le Soleil représente votre identité consciente, la Lune décrit davantage votre vie intérieure et vos réponses émotionnelles instinctives.",
    ],
    emotionsTitle: "La Lune, les émotions et la sécurité intérieure",
    emotionCards: [
      {
        icon: "☾",
        title: "Votre monde émotionnel",
        text: "La Lune révèle votre manière naturelle de ressentir les événements et de traverser vos expériences émotionnelles.",
      },
      {
        icon: "✦",
        title: "Vos besoins affectifs",
        text: "Elle montre ce dont vous avez profondément besoin pour vous sentir aimé, compris, protégé et émotionnellement nourri.",
      },
      {
        icon: "✧",
        title: "Vos réactions instinctives",
        text: "La Lune décrit vos réflexes émotionnels, vos habitudes et vos réactions lorsque vous ne prenez pas le temps de réfléchir.",
      },
    ],
    pillarsTitle: "Quelle différence entre le Soleil, la Lune et l’Ascendant ?",
    pillars: [
      {
        symbol: "☀️",
        title: "Le Soleil",
        text: "Il représente votre identité consciente, votre volonté, votre vitalité et la personne que vous cherchez progressivement à devenir.",
      },
      {
        symbol: "🌙",
        title: "La Lune",
        text: "Elle décrit votre monde émotionnel, vos réactions instinctives et vos besoins de sécurité, de réconfort et d’attachement.",
      },
      {
        symbol: "↑",
        title: "L’Ascendant",
        text: "Il révèle votre manière spontanée d’aborder la vie et l’énergie que les autres perçoivent généralement en premier.",
      },
    ],
    needsTitle: "Le signe lunaire et les besoins affectifs",
    needsParagraphs: [
      "Le signe de la Lune indique la manière dont une personne cherche instinctivement à préserver son équilibre émotionnel. Certaines Lunes ont besoin d’action, d’autres de stabilité, de dialogue, de solitude ou de proximité affective.",
      "Comprendre son signe lunaire permet de mieux reconnaître ses besoins profonds. Cette connaissance peut aider à identifier ce qui apporte du réconfort, ce qui provoque de l’insécurité et la manière dont les émotions sont exprimées dans les relations.",
      "Le signe lunaire ne définit toutefois pas toute la vie émotionnelle. Les aspects formés avec les autres planètes, la maison astrologique de la Lune et l’ensemble du thème natal apportent des nuances importantes.",
    ],
    signsKicker: "Les douze expressions lunaires",
    signsTitle: "La Lune dans les 12 signes astrologiques",
    signsIntro:
      "La Lune conserve toujours sa fonction liée aux émotions, aux habitudes et à la sécurité intérieure, mais elle l’exprime différemment selon le signe du zodiaque dans lequel elle se trouve.",
    moonInLabel: "Lune en",
    signs: [
      { sign: "Bélier", symbol: "♈", text: "La Lune en Bélier vit ses émotions de manière immédiate, spontanée et intense. Elle a besoin d’action, d’indépendance et de liberté pour retrouver rapidement son équilibre intérieur." },
      { sign: "Taureau", symbol: "♉", text: "La Lune en Taureau recherche la stabilité, la douceur et la sécurité matérielle. Elle se ressource grâce aux habitudes rassurantes, au confort et aux plaisirs simples de la vie." },
      { sign: "Gémeaux", symbol: "♊", text: "La Lune en Gémeaux a besoin de comprendre, de parler et d’échanger pour mieux vivre ses émotions. La curiosité, le mouvement et la stimulation intellectuelle contribuent à son équilibre." },
      { sign: "Cancer", symbol: "♋", text: "La Lune en Cancer possède une sensibilité profonde et un fort besoin de sécurité affective. Elle accorde une grande importance au foyer, aux souvenirs, aux racines et aux liens familiaux." },
      { sign: "Lion", symbol: "♌", text: "La Lune en Lion a besoin de chaleur, de reconnaissance et d’expression personnelle. Elle se sent en sécurité lorsqu’elle peut aimer généreusement, créer et être appréciée pour ce qu’elle apporte." },
      { sign: "Vierge", symbol: "♍", text: "La Lune en Vierge cherche à organiser, analyser et améliorer ce qu’elle ressent. Elle retrouve sa sécurité intérieure lorsqu’elle se sent utile et lorsque son environnement demeure clair et structuré." },
      { sign: "Balance", symbol: "♎", text: "La Lune en Balance recherche l’harmonie, la coopération et la paix relationnelle. Elle est sensible aux tensions et a besoin d’échanges équilibrés pour préserver son bien-être émotionnel." },
      { sign: "Scorpion", symbol: "♏", text: "La Lune en Scorpion ressent les émotions avec profondeur et intensité. Elle a besoin de relations sincères, de confiance et d’authenticité pour se sentir véritablement en sécurité." },
      { sign: "Sagittaire", symbol: "♐", text: "La Lune en Sagittaire retrouve son équilibre grâce à la liberté, à l’exploration et à la recherche de sens. Elle a besoin d’espace, d’enthousiasme et de nouvelles perspectives." },
      { sign: "Capricorne", symbol: "♑", text: "La Lune en Capricorne protège sa sensibilité par la maîtrise, la prudence et la responsabilité. Elle se sent en sécurité lorsqu’elle peut compter sur des structures solides et des engagements durables." },
      { sign: "Verseau", symbol: "♒", text: "La Lune en Verseau a besoin d’indépendance émotionnelle, de liberté et de stimulation intellectuelle. Elle cherche souvent à comprendre ses émotions avec recul avant de les exprimer." },
      { sign: "Poissons", symbol: "♓", text: "La Lune en Poissons possède une grande réceptivité émotionnelle et intuitive. Elle se nourrit d’imagination, de compassion, de créativité et de moments de retrait loin des tensions extérieures." },
    ],
    houseTitle: "L’importance de la maison astrologique de la Lune",
    houseParagraphs: [
      "Le signe de la Lune décrit la manière dont les émotions et les besoins affectifs s’expriment. Sa maison astrologique indique plutôt le domaine de vie dans lequel cette sensibilité se manifeste le plus fortement.",
      "Une Lune en Maison I peut rendre les émotions très visibles dans la personnalité, tandis qu’une Lune en Maison IV peut renforcer le besoin de racines, de foyer et d’intimité. Une Lune en Maison VII peut placer les relations au centre de la sécurité émotionnelle.",
      "Une Lune en Maison X peut associer les émotions à la vocation, à la réputation ou au besoin de reconnaissance. Chaque maison apporte ainsi un contexte particulier à l’expression du signe lunaire.",
    ],
    ctaKicker: "Découvrez votre position",
    ctaTitle: "Dans quel signe et quelle maison se trouve votre Lune ?",
    ctaText:
      "Générez gratuitement votre carte du ciel pour découvrir votre Lune, votre Soleil, votre Ascendant et les positions de vos principales planètes.",
    ctaButton: "Découvrir mon thème natal",
    relationshipsTitle: "La Lune dans les relations",
    relationshipsParagraphs: [
      "Dans les relations, la Lune révèle ce qui permet de se sentir émotionnellement en confiance. Elle décrit les gestes, les attitudes et les formes de présence qui procurent un sentiment de réconfort et de proximité.",
      "Deux personnes peuvent avoir une forte attirance, mais des besoins lunaires très différents. L’une peut avoir besoin de paroles rassurantes, tandis que l’autre recherche davantage d’espace, de stabilité ou de démonstrations concrètes d’affection.",
      "L’étude de la Lune peut donc aider à mieux comprendre les besoins affectifs de chacun. Elle ne détermine toutefois pas à elle seule la qualité d’une relation, qui dépend de l’ensemble des deux thèmes astrologiques.",
    ],
    intuitionTitle: "La Lune, l’intuition et la mémoire",
    intuitionParagraphs: [
      "La Lune est également associée à l’intuition, à la mémoire émotionnelle et aux impressions enregistrées au fil des expériences. Certaines réactions peuvent ainsi être influencées par des souvenirs ou des habitudes anciennes, même lorsqu’elles ne sont pas pleinement conscientes.",
      "Observer sa Lune permet de mieux reconnaître ces automatismes. Cela peut aider à distinguer les besoins actuels des réactions héritées du passé et à développer une relation plus consciente avec ses émotions.",
    ],
    faqKicker: "Questions fréquentes",
    faqTitle: "Questions sur la Lune en astrologie",
    faq: [
      { question: "Que représente la Lune en astrologie ?", answer: "La Lune représente le monde émotionnel, les réactions instinctives, les habitudes, les besoins affectifs et la manière dont une personne recherche la sécurité intérieure." },
      { question: "Qu’est-ce que le signe lunaire ?", answer: "Le signe lunaire correspond au signe du zodiaque dans lequel se trouvait la Lune au moment de la naissance. Il décrit la manière de ressentir, de réagir et de vivre les émotions." },
      { question: "Pourquoi l’heure de naissance est-elle importante pour la Lune ?", answer: "La Lune se déplace rapidement dans le zodiaque. Une heure de naissance précise permet de déterminer plus exactement sa position, son degré et sa maison astrologique." },
      { question: "La Lune est-elle plus importante que le Soleil ?", answer: "La Lune et le Soleil décrivent des dimensions complémentaires. Le Soleil représente l’identité consciente et la volonté, tandis que la Lune concerne la sensibilité, les besoins affectifs et les réactions instinctives." },
      { question: "Comment connaître la maison de ma Lune ?", answer: "La maison astrologique de la Lune dépend de l’heure et du lieu de naissance. Vous pouvez la découvrir en générant votre carte du ciel complète." },
    ],
    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title: "Moon in Astrology: Emotions, Emotional Needs and Moon Sign | Luna Astralis",
      description:
        "Discover the meaning of the Moon in astrology, its influence on emotions, intuition and emotional needs, and its expression in the 12 zodiac signs.",
      ogTitle: "The Moon in Astrology: Emotions, Intuition and Moon Sign",
      ogDescription:
        "Understand the Moon’s role in your birth chart and how it influences sensitivity, instinctive reactions and inner security.",
      twitterTitle: "The Moon in Astrology | Luna Astralis",
      twitterDescription:
        "Discover the meaning of your Moon sign and the role of the Moon in your birth chart.",
      locale: "en_US",
      language: "en-US",
    },
    jsonLd: {
      headline: "The Moon in Astrology: Emotions, Intuition and Moon Sign",
      description:
        "A complete guide to the role of the Moon in the birth chart and its expression through the twelve zodiac signs.",
    },
    badge: "🌙 Astrology and birth chart",
    title: "The Moon in Astrology",
    lead:
      "The Moon represents your emotional world, instinctive reactions, emotional needs and the way you seek inner security.",
    createChart: "Create my free birth chart",
    viewSigns: "View the 12 signs",
    introKicker: "Understanding your Moon sign",
    introTitle: "What does the Moon represent in a birth chart?",
    introParagraphs: [
      "In astrology, the Moon represents the sensitive and instinctive side of personality. It symbolizes emotions, habits, memories, intuition and the needs that contribute to inner security.",
      "Your Moon sign is determined by the Moon’s exact position at the time of your birth. It reveals how you react spontaneously, what soothes you and how you express sensitivity.",
      "The Moon is one of the three major pillars of the birth chart, alongside the Sun and Ascendant. While the Sun represents conscious identity, the Moon describes your inner life and instinctive emotional responses.",
    ],
    emotionsTitle: "The Moon, emotions and inner security",
    emotionCards: [
      { icon: "☾", title: "Your emotional world", text: "The Moon reveals your natural way of feeling events and moving through emotional experiences." },
      { icon: "✦", title: "Your emotional needs", text: "It shows what you deeply need in order to feel loved, understood, protected and emotionally nourished." },
      { icon: "✧", title: "Your instinctive reactions", text: "The Moon describes emotional reflexes, habits and reactions that arise before conscious reflection." },
    ],
    pillarsTitle: "What is the difference between the Sun, Moon and Ascendant?",
    pillars: [
      { symbol: "☀️", title: "The Sun", text: "It represents conscious identity, willpower, vitality and the person you gradually seek to become." },
      { symbol: "🌙", title: "The Moon", text: "It describes your emotional world, instinctive reactions and needs for security, comfort and attachment." },
      { symbol: "↑", title: "The Ascendant", text: "It reveals your spontaneous approach to life and the energy others usually notice first." },
    ],
    needsTitle: "The Moon sign and emotional needs",
    needsParagraphs: [
      "The Moon sign indicates how a person instinctively seeks to preserve emotional balance. Some Moons need action, while others need stability, conversation, solitude or emotional closeness.",
      "Understanding your Moon sign helps you recognize your deeper needs. It can clarify what brings comfort, what causes insecurity and how emotions are expressed in relationships.",
      "The Moon sign does not define the entire emotional life. Aspects to other planets, the Moon’s astrological house and the whole birth chart add important nuances.",
    ],
    signsKicker: "The twelve lunar expressions",
    signsTitle: "The Moon in the 12 zodiac signs",
    signsIntro:
      "The Moon always retains its connection with emotions, habits and inner security, but expresses these differently depending on the zodiac sign it occupies.",
    moonInLabel: "Moon in",
    signs: [
      { sign: "Aries", symbol: "♈", text: "Moon in Aries experiences emotions immediately, spontaneously and intensely. Action, independence and freedom help restore emotional balance." },
      { sign: "Taurus", symbol: "♉", text: "Moon in Taurus seeks stability, gentleness and material security. Comforting routines, physical ease and simple pleasures restore well-being." },
      { sign: "Gemini", symbol: "♊", text: "Moon in Gemini needs to understand, speak and exchange ideas in order to process emotions. Curiosity, movement and intellectual stimulation support balance." },
      { sign: "Cancer", symbol: "♋", text: "Moon in Cancer has deep sensitivity and a strong need for emotional security. Home, memories, roots and family bonds are especially important." },
      { sign: "Leo", symbol: "♌", text: "Moon in Leo needs warmth, recognition and self-expression. Security comes through loving generously, creating and being appreciated." },
      { sign: "Virgo", symbol: "♍", text: "Moon in Virgo seeks to organize, analyze and improve emotional experience. It feels secure when useful and when the environment is clear and structured." },
      { sign: "Libra", symbol: "♎", text: "Moon in Libra seeks harmony, cooperation and relational peace. It is sensitive to tension and needs balanced exchanges to preserve emotional well-being." },
      { sign: "Scorpio", symbol: "♏", text: "Moon in Scorpio feels emotions deeply and intensely. Sincerity, trust and authenticity are essential for genuine emotional safety." },
      { sign: "Sagittarius", symbol: "♐", text: "Moon in Sagittarius regains balance through freedom, exploration and meaning. It needs space, enthusiasm and fresh perspectives." },
      { sign: "Capricorn", symbol: "♑", text: "Moon in Capricorn protects sensitivity through control, caution and responsibility. Solid structures and lasting commitments create security." },
      { sign: "Aquarius", symbol: "♒", text: "Moon in Aquarius needs emotional independence, freedom and intellectual stimulation. It often steps back to understand feelings before expressing them." },
      { sign: "Pisces", symbol: "♓", text: "Moon in Pisces has strong emotional and intuitive receptivity. Imagination, compassion, creativity and retreat from external tension are nourishing." },
    ],
    houseTitle: "The importance of the Moon’s astrological house",
    houseParagraphs: [
      "The Moon sign describes how emotions and emotional needs are expressed. Its astrological house shows the area of life where this sensitivity appears most strongly.",
      "A Moon in the First House can make emotions highly visible, while a Moon in the Fourth House can strengthen the need for roots, home and intimacy. A Moon in the Seventh House may place relationships at the center of emotional security.",
      "A Moon in the Tenth House may connect emotions with vocation, reputation or the need for recognition. Each house therefore gives the Moon sign a particular context.",
    ],
    ctaKicker: "Discover your placement",
    ctaTitle: "In which sign and house is your Moon?",
    ctaText:
      "Generate your free birth chart to discover your Moon, Sun, Ascendant and the positions of your main planets.",
    ctaButton: "Discover my birth chart",
    relationshipsTitle: "The Moon in relationships",
    relationshipsParagraphs: [
      "In relationships, the Moon reveals what creates emotional trust. It describes the gestures, attitudes and forms of presence that bring comfort and closeness.",
      "Two people can feel strong attraction while having very different lunar needs. One may need reassuring words, while the other needs more space, stability or concrete demonstrations of affection.",
      "Studying the Moon can help clarify each person’s emotional needs. It does not determine relationship quality on its own, which depends on both complete birth charts.",
    ],
    intuitionTitle: "The Moon, intuition and memory",
    intuitionParagraphs: [
      "The Moon is also associated with intuition, emotional memory and impressions gathered through experience. Reactions may be influenced by old memories or habits even when they are not fully conscious.",
      "Observing your Moon helps you recognize these automatic patterns. It can help distinguish present needs from reactions inherited from the past and support a more conscious relationship with emotions.",
    ],
    faqKicker: "Frequently asked questions",
    faqTitle: "Questions about the Moon in astrology",
    faq: [
      { question: "What does the Moon represent in astrology?", answer: "The Moon represents the emotional world, instinctive reactions, habits, emotional needs and the way a person seeks inner security." },
      { question: "What is the Moon sign?", answer: "The Moon sign is the zodiac sign occupied by the Moon at birth. It describes how a person feels, reacts and experiences emotions." },
      { question: "Why is birth time important for the Moon?", answer: "The Moon moves quickly through the zodiac. An accurate birth time helps determine its position, degree and astrological house more precisely." },
      { question: "Is the Moon more important than the Sun?", answer: "The Moon and Sun describe complementary dimensions. The Sun represents conscious identity and willpower, while the Moon concerns sensitivity, emotional needs and instinctive reactions." },
      { question: "How can I find the house of my Moon?", answer: "The Moon’s astrological house depends on birth time and place. You can discover it by generating your complete birth chart." },
    ],
    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },

  es: {
    metadata: {
      title: "Luna en astrología: emociones, necesidades afectivas y signo lunar | Luna Astralis",
      description:
        "Descubre el significado de la Luna en astrología, su influencia en las emociones, la intuición y las necesidades afectivas, y su expresión en los 12 signos del zodiaco.",
      ogTitle: "La Luna en astrología: emociones, intuición y signo lunar",
      ogDescription:
        "Comprende el papel de la Luna en tu carta natal y cómo influye en tu sensibilidad, tus reacciones instintivas y tu seguridad interior.",
      twitterTitle: "La Luna en astrología | Luna Astralis",
      twitterDescription:
        "Descubre el significado de tu signo lunar y el papel de la Luna en tu carta natal.",
      locale: "es_ES",
      language: "es-ES",
    },
    jsonLd: {
      headline: "La Luna en astrología: emociones, intuición y signo lunar",
      description:
        "Guía completa sobre el papel de la Luna en la carta natal y su expresión en los doce signos del zodiaco.",
    },
    badge: "🌙 Astrología y carta natal",
    title: "La Luna en astrología",
    lead:
      "La Luna representa tu mundo emocional, tus reacciones instintivas, tus necesidades afectivas y la manera en que buscas seguridad interior.",
    createChart: "Crear mi carta natal gratis",
    viewSigns: "Ver los 12 signos",
    introKicker: "Comprender tu signo lunar",
    introTitle: "¿Qué representa la Luna en una carta natal?",
    introParagraphs: [
      "En astrología, la Luna representa la dimensión sensible e instintiva de la personalidad. Simboliza las emociones, los hábitos, los recuerdos, la intuición y las necesidades que contribuyen a la seguridad interior.",
      "Tu signo lunar está determinado por la posición exacta de la Luna en el momento de tu nacimiento. Revela cómo reaccionas espontáneamente, qué te calma y cómo expresas tu sensibilidad.",
      "La Luna es uno de los tres grandes pilares de la carta natal, junto con el Sol y el Ascendente. Mientras el Sol representa la identidad consciente, la Luna describe la vida interior y las respuestas emocionales instintivas.",
    ],
    emotionsTitle: "La Luna, las emociones y la seguridad interior",
    emotionCards: [
      { icon: "☾", title: "Tu mundo emocional", text: "La Luna revela tu manera natural de sentir los acontecimientos y atravesar las experiencias emocionales." },
      { icon: "✦", title: "Tus necesidades afectivas", text: "Muestra lo que necesitas profundamente para sentirte amado, comprendido, protegido y emocionalmente nutrido." },
      { icon: "✧", title: "Tus reacciones instintivas", text: "La Luna describe tus reflejos emocionales, hábitos y reacciones antes de que intervenga la reflexión." },
    ],
    pillarsTitle: "¿Cuál es la diferencia entre el Sol, la Luna y el Ascendente?",
    pillars: [
      { symbol: "☀️", title: "El Sol", text: "Representa tu identidad consciente, tu voluntad, tu vitalidad y la persona que buscas llegar a ser." },
      { symbol: "🌙", title: "La Luna", text: "Describe tu mundo emocional, tus reacciones instintivas y tus necesidades de seguridad, consuelo y apego." },
      { symbol: "↑", title: "El Ascendente", text: "Revela tu manera espontánea de abordar la vida y la energía que los demás perciben primero." },
    ],
    needsTitle: "El signo lunar y las necesidades afectivas",
    needsParagraphs: [
      "El signo de la Luna indica cómo una persona busca instintivamente preservar su equilibrio emocional. Algunas Lunas necesitan acción; otras, estabilidad, diálogo, soledad o cercanía afectiva.",
      "Comprender el signo lunar ayuda a reconocer las necesidades profundas. Permite identificar qué aporta consuelo, qué genera inseguridad y cómo se expresan las emociones en las relaciones.",
      "El signo lunar no define toda la vida emocional. Los aspectos con otros planetas, la casa astrológica de la Luna y el conjunto de la carta natal aportan matices importantes.",
    ],
    signsKicker: "Las doce expresiones lunares",
    signsTitle: "La Luna en los 12 signos zodiacales",
    signsIntro:
      "La Luna conserva siempre su relación con las emociones, los hábitos y la seguridad interior, pero los expresa de forma diferente según el signo zodiacal en el que se encuentre.",
    moonInLabel: "Luna en",
    signs: [
      { sign: "Aries", symbol: "♈", text: "La Luna en Aries vive las emociones de forma inmediata, espontánea e intensa. Necesita acción, independencia y libertad para recuperar el equilibrio interior." },
      { sign: "Tauro", symbol: "♉", text: "La Luna en Tauro busca estabilidad, dulzura y seguridad material. Se recarga mediante rutinas tranquilizadoras, comodidad y placeres sencillos." },
      { sign: "Géminis", symbol: "♊", text: "La Luna en Géminis necesita comprender, hablar e intercambiar para procesar mejor las emociones. La curiosidad, el movimiento y la estimulación intelectual favorecen el equilibrio." },
      { sign: "Cáncer", symbol: "♋", text: "La Luna en Cáncer posee una sensibilidad profunda y una fuerte necesidad de seguridad afectiva. El hogar, los recuerdos, las raíces y la familia son esenciales." },
      { sign: "Leo", symbol: "♌", text: "La Luna en Leo necesita calidez, reconocimiento y expresión personal. Se siente segura cuando puede amar generosamente, crear y ser valorada." },
      { sign: "Virgo", symbol: "♍", text: "La Luna en Virgo busca organizar, analizar y mejorar lo que siente. Recupera seguridad cuando se siente útil y cuando su entorno es claro y estructurado." },
      { sign: "Libra", symbol: "♎", text: "La Luna en Libra busca armonía, cooperación y paz en las relaciones. Es sensible a las tensiones y necesita intercambios equilibrados." },
      { sign: "Escorpio", symbol: "♏", text: "La Luna en Escorpio siente las emociones con profundidad e intensidad. Necesita relaciones sinceras, confianza y autenticidad para sentirse segura." },
      { sign: "Sagitario", symbol: "♐", text: "La Luna en Sagitario recupera el equilibrio mediante libertad, exploración y búsqueda de sentido. Necesita espacio, entusiasmo y nuevas perspectivas." },
      { sign: "Capricornio", symbol: "♑", text: "La Luna en Capricornio protege su sensibilidad mediante control, prudencia y responsabilidad. Se siente segura con estructuras sólidas y compromisos duraderos." },
      { sign: "Acuario", symbol: "♒", text: "La Luna en Acuario necesita independencia emocional, libertad y estimulación intelectual. Suele tomar distancia para comprender sus emociones antes de expresarlas." },
      { sign: "Piscis", symbol: "♓", text: "La Luna en Piscis posee gran receptividad emocional e intuitiva. Se nutre de imaginación, compasión, creatividad y momentos de retiro." },
    ],
    houseTitle: "La importancia de la casa astrológica de la Luna",
    houseParagraphs: [
      "El signo de la Luna describe cómo se expresan las emociones y necesidades afectivas. Su casa astrológica indica el área de la vida donde esta sensibilidad se manifiesta con mayor fuerza.",
      "Una Luna en Casa I puede hacer las emociones muy visibles, mientras una Luna en Casa IV puede reforzar la necesidad de raíces, hogar e intimidad. Una Luna en Casa VII puede situar las relaciones en el centro de la seguridad emocional.",
      "Una Luna en Casa X puede relacionar las emociones con la vocación, la reputación o la necesidad de reconocimiento. Cada casa aporta un contexto particular al signo lunar.",
    ],
    ctaKicker: "Descubre tu posición",
    ctaTitle: "¿En qué signo y casa se encuentra tu Luna?",
    ctaText:
      "Genera gratis tu carta natal para descubrir tu Luna, tu Sol, tu Ascendente y las posiciones de tus principales planetas.",
    ctaButton: "Descubrir mi carta natal",
    relationshipsTitle: "La Luna en las relaciones",
    relationshipsParagraphs: [
      "En las relaciones, la Luna revela lo que permite sentirse emocionalmente seguro. Describe los gestos, actitudes y formas de presencia que aportan consuelo y cercanía.",
      "Dos personas pueden sentir una fuerte atracción y tener necesidades lunares muy diferentes. Una puede necesitar palabras tranquilizadoras, mientras la otra busca espacio, estabilidad o demostraciones concretas de afecto.",
      "El estudio de la Luna ayuda a comprender mejor las necesidades afectivas de cada persona. Sin embargo, no determina por sí solo la calidad de una relación, que depende de ambas cartas completas.",
    ],
    intuitionTitle: "La Luna, la intuición y la memoria",
    intuitionParagraphs: [
      "La Luna también se asocia con la intuición, la memoria emocional y las impresiones acumuladas a través de las experiencias. Algunas reacciones pueden estar influidas por recuerdos o hábitos antiguos, incluso sin plena conciencia.",
      "Observar la Luna ayuda a reconocer estos automatismos. Permite distinguir las necesidades actuales de las reacciones heredadas del pasado y desarrollar una relación más consciente con las emociones.",
    ],
    faqKicker: "Preguntas frecuentes",
    faqTitle: "Preguntas sobre la Luna en astrología",
    faq: [
      { question: "¿Qué representa la Luna en astrología?", answer: "La Luna representa el mundo emocional, las reacciones instintivas, los hábitos, las necesidades afectivas y la forma en que una persona busca seguridad interior." },
      { question: "¿Qué es el signo lunar?", answer: "El signo lunar es el signo zodiacal en el que estaba la Luna al nacer. Describe la manera de sentir, reaccionar y vivir las emociones." },
      { question: "¿Por qué es importante la hora de nacimiento para la Luna?", answer: "La Luna se mueve rápidamente por el zodiaco. Una hora precisa permite determinar mejor su posición, grado y casa astrológica." },
      { question: "¿La Luna es más importante que el Sol?", answer: "La Luna y el Sol describen dimensiones complementarias. El Sol representa la identidad consciente y la voluntad; la Luna, la sensibilidad, las necesidades afectivas y las reacciones instintivas." },
      { question: "¿Cómo puedo conocer la casa de mi Luna?", answer: "La casa astrológica de la Luna depende de la hora y del lugar de nacimiento. Puedes descubrirla generando tu carta natal completa." },
    ],
    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, legal o financiero.",
  },

  de: {
    metadata: {
      title: "Mond in der Astrologie: Gefühle, emotionale Bedürfnisse und Mondzeichen | Luna Astralis",
      description:
        "Entdecken Sie die Bedeutung des Mondes in der Astrologie, seinen Einfluss auf Gefühle, Intuition und emotionale Bedürfnisse sowie seinen Ausdruck in den 12 Tierkreiszeichen.",
      ogTitle: "Der Mond in der Astrologie: Gefühle, Intuition und Mondzeichen",
      ogDescription:
        "Verstehen Sie die Rolle des Mondes im Geburtshoroskop und seinen Einfluss auf Sensibilität, instinktive Reaktionen und innere Sicherheit.",
      twitterTitle: "Der Mond in der Astrologie | Luna Astralis",
      twitterDescription:
        "Entdecken Sie die Bedeutung Ihres Mondzeichens und die Rolle des Mondes im Geburtshoroskop.",
      locale: "de_DE",
      language: "de-DE",
    },
    jsonLd: {
      headline: "Der Mond in der Astrologie: Gefühle, Intuition und Mondzeichen",
      description:
        "Ein vollständiger Leitfaden zur Rolle des Mondes im Geburtshoroskop und seinem Ausdruck in den zwölf Tierkreiszeichen.",
    },
    badge: "🌙 Astrologie und Geburtshoroskop",
    title: "Der Mond in der Astrologie",
    lead:
      "Der Mond steht für Ihre Gefühlswelt, instinktiven Reaktionen, emotionalen Bedürfnisse und die Art, wie Sie innere Sicherheit suchen.",
    createChart: "Kostenloses Geburtshoroskop erstellen",
    viewSigns: "Die 12 Zeichen ansehen",
    introKicker: "Ihr Mondzeichen verstehen",
    introTitle: "Was bedeutet der Mond im Geburtshoroskop?",
    introParagraphs: [
      "In der Astrologie steht der Mond für die sensible und instinktive Seite der Persönlichkeit. Er symbolisiert Gefühle, Gewohnheiten, Erinnerungen, Intuition und Bedürfnisse, die zur inneren Sicherheit beitragen.",
      "Ihr Mondzeichen wird durch die genaue Position des Mondes zum Zeitpunkt Ihrer Geburt bestimmt. Es zeigt, wie Sie spontan reagieren, was Sie beruhigt und wie Sie Sensibilität ausdrücken.",
      "Der Mond ist neben Sonne und Aszendent eine der drei großen Säulen des Geburtshoroskops. Während die Sonne bewusste Identität beschreibt, steht der Mond stärker für das Innenleben und instinktive emotionale Reaktionen.",
    ],
    emotionsTitle: "Der Mond, Gefühle und innere Sicherheit",
    emotionCards: [
      { icon: "☾", title: "Ihre Gefühlswelt", text: "Der Mond zeigt Ihre natürliche Art, Ereignisse zu empfinden und emotionale Erfahrungen zu verarbeiten." },
      { icon: "✦", title: "Ihre emotionalen Bedürfnisse", text: "Er zeigt, was Sie brauchen, um sich geliebt, verstanden, geschützt und emotional genährt zu fühlen." },
      { icon: "✧", title: "Ihre instinktiven Reaktionen", text: "Der Mond beschreibt emotionale Reflexe, Gewohnheiten und Reaktionen, bevor bewusstes Nachdenken einsetzt." },
    ],
    pillarsTitle: "Was ist der Unterschied zwischen Sonne, Mond und Aszendent?",
    pillars: [
      { symbol: "☀️", title: "Die Sonne", text: "Sie steht für bewusste Identität, Willen, Vitalität und die Person, die Sie nach und nach werden möchten." },
      { symbol: "🌙", title: "Der Mond", text: "Er beschreibt Gefühlswelt, instinktive Reaktionen und Bedürfnisse nach Sicherheit, Trost und Bindung." },
      { symbol: "↑", title: "Der Aszendent", text: "Er zeigt Ihre spontane Art, dem Leben zu begegnen, und die Energie, die andere zuerst wahrnehmen." },
    ],
    needsTitle: "Das Mondzeichen und emotionale Bedürfnisse",
    needsParagraphs: [
      "Das Mondzeichen zeigt, wie ein Mensch instinktiv emotionales Gleichgewicht bewahren möchte. Manche Mondzeichen brauchen Handlung, andere Stabilität, Austausch, Rückzug oder Nähe.",
      "Das Verständnis des Mondzeichens hilft, tiefe Bedürfnisse zu erkennen. Es zeigt, was Trost spendet, Unsicherheit auslöst und wie Gefühle in Beziehungen ausgedrückt werden.",
      "Das Mondzeichen beschreibt nicht das gesamte Gefühlsleben. Aspekte zu anderen Planeten, das Haus des Mondes und das gesamte Geburtshoroskop liefern wichtige Nuancen.",
    ],
    signsKicker: "Die zwölf lunaren Ausdrucksformen",
    signsTitle: "Der Mond in den 12 Tierkreiszeichen",
    signsIntro:
      "Der Mond bleibt immer mit Gefühlen, Gewohnheiten und innerer Sicherheit verbunden, drückt diese jedoch je nach Tierkreiszeichen unterschiedlich aus.",
    moonInLabel: "Mond im",
    signs: [
      { sign: "Widder", symbol: "♈", text: "Der Mond im Widder erlebt Gefühle unmittelbar, spontan und intensiv. Handlung, Unabhängigkeit und Freiheit helfen, emotionales Gleichgewicht wiederzufinden." },
      { sign: "Stier", symbol: "♉", text: "Der Mond im Stier sucht Stabilität, Sanftheit und materielle Sicherheit. Beruhigende Gewohnheiten, Komfort und einfache Freuden wirken stärkend." },
      { sign: "Zwillinge", symbol: "♊", text: "Der Mond in den Zwillingen braucht Verständnis, Gespräch und Austausch, um Gefühle zu verarbeiten. Neugier, Bewegung und geistige Anregung fördern Balance." },
      { sign: "Krebs", symbol: "♋", text: "Der Mond im Krebs besitzt tiefe Sensibilität und ein starkes Bedürfnis nach emotionaler Sicherheit. Heim, Erinnerungen, Wurzeln und Familie sind besonders wichtig." },
      { sign: "Löwe", symbol: "♌", text: "Der Mond im Löwen braucht Wärme, Anerkennung und Selbstausdruck. Sicherheit entsteht durch großzügiges Lieben, Kreativität und Wertschätzung." },
      { sign: "Jungfrau", symbol: "♍", text: "Der Mond in der Jungfrau versucht, Gefühle zu ordnen, zu analysieren und zu verbessern. Klarheit, Struktur und das Gefühl, nützlich zu sein, geben Sicherheit." },
      { sign: "Waage", symbol: "♎", text: "Der Mond in der Waage sucht Harmonie, Kooperation und Frieden in Beziehungen. Spannungen belasten ihn, ausgewogener Austausch stärkt das Wohlbefinden." },
      { sign: "Skorpion", symbol: "♏", text: "Der Mond im Skorpion empfindet Gefühle tief und intensiv. Ehrlichkeit, Vertrauen und Authentizität sind für echte emotionale Sicherheit notwendig." },
      { sign: "Schütze", symbol: "♐", text: "Der Mond im Schützen findet Balance durch Freiheit, Entdeckung und Sinnsuche. Er braucht Raum, Begeisterung und neue Perspektiven." },
      { sign: "Steinbock", symbol: "♑", text: "Der Mond im Steinbock schützt Sensibilität durch Kontrolle, Vorsicht und Verantwortung. Solide Strukturen und dauerhafte Verpflichtungen geben Sicherheit." },
      { sign: "Wassermann", symbol: "♒", text: "Der Mond im Wassermann braucht emotionale Unabhängigkeit, Freiheit und geistige Anregung. Er betrachtet Gefühle oft mit Abstand, bevor er sie ausdrückt." },
      { sign: "Fische", symbol: "♓", text: "Der Mond in den Fischen besitzt große emotionale und intuitive Empfänglichkeit. Vorstellungskraft, Mitgefühl, Kreativität und Rückzug wirken nährend." },
    ],
    houseTitle: "Die Bedeutung des astrologischen Hauses des Mondes",
    houseParagraphs: [
      "Das Mondzeichen beschreibt, wie Gefühle und emotionale Bedürfnisse ausgedrückt werden. Das astrologische Haus zeigt den Lebensbereich, in dem diese Sensibilität am stärksten hervortritt.",
      "Ein Mond im ersten Haus kann Gefühle sehr sichtbar machen, während ein Mond im vierten Haus das Bedürfnis nach Wurzeln, Heim und Intimität stärkt. Ein Mond im siebten Haus kann Beziehungen ins Zentrum emotionaler Sicherheit rücken.",
      "Ein Mond im zehnten Haus kann Gefühle mit Berufung, Ansehen oder Anerkennung verbinden. Jedes Haus gibt dem Mondzeichen einen besonderen Kontext.",
    ],
    ctaKicker: "Entdecken Sie Ihre Position",
    ctaTitle: "In welchem Zeichen und Haus steht Ihr Mond?",
    ctaText:
      "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Mond, Sonne, Aszendent und die Positionen Ihrer wichtigsten Planeten.",
    ctaButton: "Mein Geburtshoroskop entdecken",
    relationshipsTitle: "Der Mond in Beziehungen",
    relationshipsParagraphs: [
      "In Beziehungen zeigt der Mond, was emotionales Vertrauen schafft. Er beschreibt Gesten, Haltungen und Formen von Nähe, die Trost und Verbundenheit vermitteln.",
      "Zwei Menschen können sich stark anziehen und dennoch sehr unterschiedliche Mondbedürfnisse haben. Einer braucht beruhigende Worte, der andere mehr Raum, Stabilität oder konkrete Zuneigung.",
      "Die Betrachtung des Mondes hilft, emotionale Bedürfnisse besser zu verstehen. Allein bestimmt er jedoch nicht die Qualität einer Beziehung, die vom gesamten Horoskop beider Menschen abhängt.",
    ],
    intuitionTitle: "Der Mond, Intuition und Erinnerung",
    intuitionParagraphs: [
      "Der Mond wird auch mit Intuition, emotionalem Gedächtnis und Eindrücken aus vergangenen Erfahrungen verbunden. Reaktionen können von alten Erinnerungen oder Gewohnheiten beeinflusst sein, selbst wenn dies nicht bewusst ist.",
      "Die Beobachtung des eigenen Mondes hilft, solche Automatismen zu erkennen. So lassen sich aktuelle Bedürfnisse besser von Reaktionen aus der Vergangenheit unterscheiden.",
    ],
    faqKicker: "Häufige Fragen",
    faqTitle: "Fragen zum Mond in der Astrologie",
    faq: [
      { question: "Wofür steht der Mond in der Astrologie?", answer: "Der Mond steht für Gefühlswelt, instinktive Reaktionen, Gewohnheiten, emotionale Bedürfnisse und die Art, wie ein Mensch innere Sicherheit sucht." },
      { question: "Was ist das Mondzeichen?", answer: "Das Mondzeichen ist das Tierkreiszeichen, in dem der Mond bei der Geburt stand. Es beschreibt, wie ein Mensch fühlt, reagiert und Emotionen erlebt." },
      { question: "Warum ist die Geburtszeit für den Mond wichtig?", answer: "Der Mond bewegt sich schnell durch den Tierkreis. Eine genaue Geburtszeit ermöglicht eine präzisere Bestimmung von Position, Grad und Haus." },
      { question: "Ist der Mond wichtiger als die Sonne?", answer: "Mond und Sonne beschreiben ergänzende Ebenen. Die Sonne steht für bewusste Identität und Willen, der Mond für Sensibilität, emotionale Bedürfnisse und instinktive Reaktionen." },
      { question: "Wie finde ich das Haus meines Mondes?", answer: "Das Haus des Mondes hängt von Geburtszeit und Geburtsort ab. Sie können es durch ein vollständiges Geburtshoroskop herausfinden." },
    ],
    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title: "Luna in astrologia: emozioni, bisogni affettivi e segno lunare | Luna Astralis",
      description:
        "Scopri il significato della Luna in astrologia, la sua influenza su emozioni, intuizione e bisogni affettivi e la sua espressione nei 12 segni zodiacali.",
      ogTitle: "La Luna in astrologia: emozioni, intuizione e segno lunare",
      ogDescription:
        "Comprendi il ruolo della Luna nel tema natale e come influenza sensibilità, reazioni istintive e sicurezza interiore.",
      twitterTitle: "La Luna in astrologia | Luna Astralis",
      twitterDescription:
        "Scopri il significato del tuo segno lunare e il ruolo della Luna nel tema natale.",
      locale: "it_IT",
      language: "it-IT",
    },
    jsonLd: {
      headline: "La Luna in astrologia: emozioni, intuizione e segno lunare",
      description:
        "Guida completa al ruolo della Luna nel tema natale e alla sua espressione nei dodici segni zodiacali.",
    },
    badge: "🌙 Astrologia e tema natale",
    title: "La Luna in astrologia",
    lead:
      "La Luna rappresenta il tuo mondo emotivo, le reazioni istintive, i bisogni affettivi e il modo in cui cerchi sicurezza interiore.",
    createChart: "Crea il mio tema natale gratuito",
    viewSigns: "Vedi i 12 segni",
    introKicker: "Comprendere il tuo segno lunare",
    introTitle: "Che cosa rappresenta la Luna nel tema natale?",
    introParagraphs: [
      "In astrologia, la Luna rappresenta la dimensione sensibile e istintiva della personalità. Simboleggia emozioni, abitudini, ricordi, intuizione e bisogni che contribuiscono alla sicurezza interiore.",
      "Il tuo segno lunare è determinato dalla posizione esatta della Luna al momento della nascita. Rivela come reagisci spontaneamente, ciò che ti calma e il modo in cui esprimi sensibilità.",
      "La Luna è uno dei tre grandi pilastri del tema natale, insieme al Sole e all’Ascendente. Mentre il Sole rappresenta l’identità cosciente, la Luna descrive la vita interiore e le risposte emotive istintive.",
    ],
    emotionsTitle: "La Luna, le emozioni e la sicurezza interiore",
    emotionCards: [
      { icon: "☾", title: "Il tuo mondo emotivo", text: "La Luna rivela il tuo modo naturale di sentire gli eventi e attraversare le esperienze emotive." },
      { icon: "✦", title: "I tuoi bisogni affettivi", text: "Mostra ciò di cui hai profondamente bisogno per sentirti amato, compreso, protetto e nutrito emotivamente." },
      { icon: "✧", title: "Le tue reazioni istintive", text: "La Luna descrive riflessi emotivi, abitudini e reazioni che emergono prima della riflessione cosciente." },
    ],
    pillarsTitle: "Qual è la differenza tra Sole, Luna e Ascendente?",
    pillars: [
      { symbol: "☀️", title: "Il Sole", text: "Rappresenta identità cosciente, volontà, vitalità e la persona che cerchi gradualmente di diventare." },
      { symbol: "🌙", title: "La Luna", text: "Descrive il mondo emotivo, le reazioni istintive e i bisogni di sicurezza, conforto e attaccamento." },
      { symbol: "↑", title: "L’Ascendente", text: "Rivela il modo spontaneo di affrontare la vita e l’energia che gli altri percepiscono per prima." },
    ],
    needsTitle: "Il segno lunare e i bisogni affettivi",
    needsParagraphs: [
      "Il segno della Luna indica come una persona cerca istintivamente di preservare l’equilibrio emotivo. Alcune Lune hanno bisogno di azione, altre di stabilità, dialogo, solitudine o vicinanza affettiva.",
      "Comprendere il segno lunare aiuta a riconoscere i bisogni profondi. Permette di identificare ciò che porta conforto, ciò che crea insicurezza e come le emozioni vengono espresse nelle relazioni.",
      "Il segno lunare non definisce tutta la vita emotiva. Gli aspetti con gli altri pianeti, la casa della Luna e l’intero tema natale aggiungono importanti sfumature.",
    ],
    signsKicker: "Le dodici espressioni lunari",
    signsTitle: "La Luna nei 12 segni zodiacali",
    signsIntro:
      "La Luna mantiene sempre la sua funzione legata a emozioni, abitudini e sicurezza interiore, ma la esprime diversamente secondo il segno zodiacale in cui si trova.",
    moonInLabel: "Luna in",
    signs: [
      { sign: "Ariete", symbol: "♈", text: "La Luna in Ariete vive le emozioni in modo immediato, spontaneo e intenso. Azione, indipendenza e libertà aiutano a ritrovare l’equilibrio." },
      { sign: "Toro", symbol: "♉", text: "La Luna in Toro cerca stabilità, dolcezza e sicurezza materiale. Abitudini rassicuranti, comfort e piaceri semplici favoriscono il benessere." },
      { sign: "Gemelli", symbol: "♊", text: "La Luna in Gemelli ha bisogno di comprendere, parlare e confrontarsi per elaborare le emozioni. Curiosità, movimento e stimolazione mentale aiutano l’equilibrio." },
      { sign: "Cancro", symbol: "♋", text: "La Luna in Cancro possiede una sensibilità profonda e un forte bisogno di sicurezza affettiva. Casa, ricordi, radici e legami familiari sono fondamentali." },
      { sign: "Leone", symbol: "♌", text: "La Luna in Leone ha bisogno di calore, riconoscimento ed espressione personale. Si sente sicura quando può amare generosamente, creare ed essere apprezzata." },
      { sign: "Vergine", symbol: "♍", text: "La Luna in Vergine cerca di organizzare, analizzare e migliorare ciò che prova. Si sente sicura quando è utile e quando l’ambiente è chiaro e strutturato." },
      { sign: "Bilancia", symbol: "♎", text: "La Luna in Bilancia cerca armonia, cooperazione e pace nelle relazioni. È sensibile alle tensioni e ha bisogno di scambi equilibrati." },
      { sign: "Scorpione", symbol: "♏", text: "La Luna in Scorpione sente le emozioni con profondità e intensità. Sincerità, fiducia e autenticità sono necessarie per sentirsi davvero al sicuro." },
      { sign: "Sagittario", symbol: "♐", text: "La Luna in Sagittario ritrova equilibrio attraverso libertà, esplorazione e ricerca di senso. Ha bisogno di spazio, entusiasmo e nuove prospettive." },
      { sign: "Capricorno", symbol: "♑", text: "La Luna in Capricorno protegge la sensibilità attraverso controllo, prudenza e responsabilità. Strutture solide e impegni duraturi danno sicurezza." },
      { sign: "Acquario", symbol: "♒", text: "La Luna in Acquario ha bisogno di indipendenza emotiva, libertà e stimolazione intellettuale. Spesso prende le distanze per capire le emozioni prima di esprimerle." },
      { sign: "Pesci", symbol: "♓", text: "La Luna in Pesci possiede grande ricettività emotiva e intuitiva. Immaginazione, compassione, creatività e momenti di ritiro sono nutrienti." },
    ],
    houseTitle: "L’importanza della casa astrologica della Luna",
    houseParagraphs: [
      "Il segno della Luna descrive come si esprimono emozioni e bisogni affettivi. La casa astrologica indica l’area della vita in cui questa sensibilità si manifesta con maggiore forza.",
      "Una Luna in Prima Casa può rendere le emozioni molto visibili, mentre una Luna in Quarta Casa può rafforzare il bisogno di radici, casa e intimità. Una Luna in Settima Casa può mettere le relazioni al centro della sicurezza emotiva.",
      "Una Luna in Decima Casa può collegare le emozioni alla vocazione, alla reputazione o al bisogno di riconoscimento. Ogni casa offre un contesto particolare.",
    ],
    ctaKicker: "Scopri la tua posizione",
    ctaTitle: "In quale segno e casa si trova la tua Luna?",
    ctaText:
      "Genera gratuitamente il tuo tema natale per scoprire Luna, Sole, Ascendente e le posizioni dei principali pianeti.",
    ctaButton: "Scopri il mio tema natale",
    relationshipsTitle: "La Luna nelle relazioni",
    relationshipsParagraphs: [
      "Nelle relazioni, la Luna rivela ciò che permette di sentirsi emotivamente al sicuro. Descrive gesti, atteggiamenti e forme di presenza che portano conforto e vicinanza.",
      "Due persone possono provare forte attrazione ma avere bisogni lunari molto diversi. Una può aver bisogno di parole rassicuranti, l’altra di spazio, stabilità o dimostrazioni concrete di affetto.",
      "Lo studio della Luna aiuta a comprendere meglio i bisogni affettivi di ciascuno. Tuttavia non determina da sola la qualità di una relazione, che dipende dall’insieme di entrambi i temi.",
    ],
    intuitionTitle: "La Luna, l’intuizione e la memoria",
    intuitionParagraphs: [
      "La Luna è anche associata all’intuizione, alla memoria emotiva e alle impressioni accumulate nelle esperienze. Alcune reazioni possono essere influenzate da ricordi o abitudini antiche anche senza piena consapevolezza.",
      "Osservare la propria Luna aiuta a riconoscere questi automatismi. Permette di distinguere i bisogni attuali dalle reazioni ereditate dal passato e sviluppare un rapporto più consapevole con le emozioni.",
    ],
    faqKicker: "Domande frequenti",
    faqTitle: "Domande sulla Luna in astrologia",
    faq: [
      { question: "Che cosa rappresenta la Luna in astrologia?", answer: "La Luna rappresenta il mondo emotivo, le reazioni istintive, le abitudini, i bisogni affettivi e il modo in cui una persona cerca sicurezza interiore." },
      { question: "Che cos’è il segno lunare?", answer: "Il segno lunare è il segno zodiacale in cui si trovava la Luna alla nascita. Descrive il modo di sentire, reagire e vivere le emozioni." },
      { question: "Perché l’ora di nascita è importante per la Luna?", answer: "La Luna si muove rapidamente nello zodiaco. Un’ora precisa permette di determinare meglio posizione, grado e casa astrologica." },
      { question: "La Luna è più importante del Sole?", answer: "Luna e Sole descrivono dimensioni complementari. Il Sole rappresenta identità cosciente e volontà; la Luna sensibilità, bisogni affettivi e reazioni istintive." },
      { question: "Come posso conoscere la casa della mia Luna?", answer: "La casa astrologica della Luna dipende dall’ora e dal luogo di nascita. Puoi scoprirla generando il tema natale completo." },
    ],
    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce consulenze mediche, psicologiche, legali o finanziarie.",
  },

  pt: {
    metadata: {
      title: "Lua na astrologia: emoções, necessidades afetivas e signo lunar | Luna Astralis",
      description:
        "Descubra o significado da Lua na astrologia, sua influência sobre emoções, intuição e necessidades afetivas e sua expressão nos 12 signos do zodíaco.",
      ogTitle: "A Lua na astrologia: emoções, intuição e signo lunar",
      ogDescription:
        "Compreenda o papel da Lua no mapa astral e como ela influencia sensibilidade, reações instintivas e segurança interior.",
      twitterTitle: "A Lua na astrologia | Luna Astralis",
      twitterDescription:
        "Descubra o significado do seu signo lunar e o papel da Lua no seu mapa astral.",
      locale: "pt_BR",
      language: "pt-BR",
    },
    jsonLd: {
      headline: "A Lua na astrologia: emoções, intuição e signo lunar",
      description:
        "Guia completo sobre o papel da Lua no mapa astral e sua expressão nos doze signos do zodíaco.",
    },
    badge: "🌙 Astrologia e mapa astral",
    title: "A Lua na astrologia",
    lead:
      "A Lua representa seu mundo emocional, suas reações instintivas, suas necessidades afetivas e a maneira como você busca segurança interior.",
    createChart: "Criar meu mapa astral grátis",
    viewSigns: "Ver os 12 signos",
    introKicker: "Compreender seu signo lunar",
    introTitle: "O que a Lua representa em um mapa astral?",
    introParagraphs: [
      "Na astrologia, a Lua representa a dimensão sensível e instintiva da personalidade. Ela simboliza emoções, hábitos, memórias, intuição e necessidades que contribuem para a segurança interior.",
      "Seu signo lunar é determinado pela posição exata da Lua no momento do nascimento. Ele revela como você reage espontaneamente, o que acalma você e como expressa sua sensibilidade.",
      "A Lua é um dos três grandes pilares do mapa astral, ao lado do Sol e do Ascendente. Enquanto o Sol representa a identidade consciente, a Lua descreve a vida interior e as respostas emocionais instintivas.",
    ],
    emotionsTitle: "A Lua, as emoções e a segurança interior",
    emotionCards: [
      { icon: "☾", title: "Seu mundo emocional", text: "A Lua revela sua maneira natural de sentir os acontecimentos e atravessar experiências emocionais." },
      { icon: "✦", title: "Suas necessidades afetivas", text: "Ela mostra o que você precisa profundamente para se sentir amado, compreendido, protegido e emocionalmente nutrido." },
      { icon: "✧", title: "Suas reações instintivas", text: "A Lua descreve reflexos emocionais, hábitos e reações que surgem antes da reflexão consciente." },
    ],
    pillarsTitle: "Qual é a diferença entre Sol, Lua e Ascendente?",
    pillars: [
      { symbol: "☀️", title: "O Sol", text: "Representa identidade consciente, vontade, vitalidade e a pessoa que você procura gradualmente se tornar." },
      { symbol: "🌙", title: "A Lua", text: "Descreve o mundo emocional, as reações instintivas e as necessidades de segurança, conforto e vínculo." },
      { symbol: "↑", title: "O Ascendente", text: "Revela sua maneira espontânea de abordar a vida e a energia que os outros percebem primeiro." },
    ],
    needsTitle: "O signo lunar e as necessidades afetivas",
    needsParagraphs: [
      "O signo da Lua indica como uma pessoa busca instintivamente preservar o equilíbrio emocional. Algumas Luas precisam de ação; outras, de estabilidade, diálogo, solitude ou proximidade afetiva.",
      "Compreender o signo lunar ajuda a reconhecer necessidades profundas. Isso permite identificar o que traz conforto, o que provoca insegurança e como as emoções são expressas nos relacionamentos.",
      "O signo lunar não define toda a vida emocional. Os aspectos com outros planetas, a casa da Lua e o conjunto do mapa astral acrescentam nuances importantes.",
    ],
    signsKicker: "As doze expressões lunares",
    signsTitle: "A Lua nos 12 signos do zodíaco",
    signsIntro:
      "A Lua mantém sempre sua ligação com emoções, hábitos e segurança interior, mas expressa esses temas de maneira diferente conforme o signo do zodíaco em que se encontra.",
    moonInLabel: "Lua em",
    signs: [
      { sign: "Áries", symbol: "♈", text: "A Lua em Áries vive as emoções de forma imediata, espontânea e intensa. Ação, independência e liberdade ajudam a recuperar o equilíbrio interior." },
      { sign: "Touro", symbol: "♉", text: "A Lua em Touro busca estabilidade, suavidade e segurança material. Hábitos tranquilizadores, conforto e prazeres simples restauram o bem-estar." },
      { sign: "Gêmeos", symbol: "♊", text: "A Lua em Gêmeos precisa compreender, falar e trocar ideias para processar as emoções. Curiosidade, movimento e estímulo intelectual favorecem o equilíbrio." },
      { sign: "Câncer", symbol: "♋", text: "A Lua em Câncer possui sensibilidade profunda e forte necessidade de segurança afetiva. Lar, memórias, raízes e vínculos familiares são essenciais." },
      { sign: "Leão", symbol: "♌", text: "A Lua em Leão precisa de calor, reconhecimento e expressão pessoal. Sente-se segura quando pode amar generosamente, criar e ser valorizada." },
      { sign: "Virgem", symbol: "♍", text: "A Lua em Virgem procura organizar, analisar e melhorar o que sente. Sente segurança quando é útil e quando o ambiente é claro e estruturado." },
      { sign: "Libra", symbol: "♎", text: "A Lua em Libra busca harmonia, cooperação e paz nos relacionamentos. É sensível a tensões e precisa de trocas equilibradas." },
      { sign: "Escorpião", symbol: "♏", text: "A Lua em Escorpião sente as emoções com profundidade e intensidade. Sinceridade, confiança e autenticidade são necessárias para segurança emocional." },
      { sign: "Sagitário", symbol: "♐", text: "A Lua em Sagitário recupera o equilíbrio por meio da liberdade, da exploração e da busca de sentido. Precisa de espaço, entusiasmo e novas perspectivas." },
      { sign: "Capricórnio", symbol: "♑", text: "A Lua em Capricórnio protege a sensibilidade por meio do controle, da prudência e da responsabilidade. Estruturas sólidas e compromissos duradouros dão segurança." },
      { sign: "Aquário", symbol: "♒", text: "A Lua em Aquário precisa de independência emocional, liberdade e estímulo intelectual. Costuma observar os sentimentos com distância antes de expressá-los." },
      { sign: "Peixes", symbol: "♓", text: "A Lua em Peixes possui grande receptividade emocional e intuitiva. Imaginação, compaixão, criatividade e momentos de recolhimento são nutritivos." },
    ],
    houseTitle: "A importância da casa astrológica da Lua",
    houseParagraphs: [
      "O signo da Lua descreve como emoções e necessidades afetivas são expressas. A casa astrológica indica a área da vida onde essa sensibilidade se manifesta com mais força.",
      "Uma Lua na Casa I pode tornar as emoções muito visíveis, enquanto uma Lua na Casa IV pode fortalecer a necessidade de raízes, lar e intimidade. Uma Lua na Casa VII pode colocar os relacionamentos no centro da segurança emocional.",
      "Uma Lua na Casa X pode relacionar emoções à vocação, à reputação ou à necessidade de reconhecimento. Cada casa oferece um contexto particular ao signo lunar.",
    ],
    ctaKicker: "Descubra sua posição",
    ctaTitle: "Em qual signo e casa está a sua Lua?",
    ctaText:
      "Gere gratuitamente seu mapa astral para descobrir sua Lua, seu Sol, seu Ascendente e as posições dos principais planetas.",
    ctaButton: "Descobrir meu mapa astral",
    relationshipsTitle: "A Lua nos relacionamentos",
    relationshipsParagraphs: [
      "Nos relacionamentos, a Lua revela o que cria confiança emocional. Ela descreve gestos, atitudes e formas de presença que proporcionam conforto e proximidade.",
      "Duas pessoas podem sentir forte atração e ter necessidades lunares muito diferentes. Uma pode precisar de palavras tranquilizadoras; a outra, de espaço, estabilidade ou demonstrações concretas de afeto.",
      "O estudo da Lua ajuda a compreender melhor as necessidades afetivas de cada pessoa. Porém, não determina sozinho a qualidade de um relacionamento, que depende dos dois mapas completos.",
    ],
    intuitionTitle: "A Lua, a intuição e a memória",
    intuitionParagraphs: [
      "A Lua também está associada à intuição, à memória emocional e às impressões acumuladas ao longo das experiências. Algumas reações podem ser influenciadas por lembranças ou hábitos antigos, mesmo sem plena consciência.",
      "Observar a própria Lua ajuda a reconhecer esses automatismos. Isso permite distinguir necessidades atuais de reações herdadas do passado e desenvolver uma relação mais consciente com as emoções.",
    ],
    faqKicker: "Perguntas frequentes",
    faqTitle: "Perguntas sobre a Lua na astrologia",
    faq: [
      { question: "O que a Lua representa na astrologia?", answer: "A Lua representa o mundo emocional, as reações instintivas, os hábitos, as necessidades afetivas e a maneira como uma pessoa busca segurança interior." },
      { question: "O que é o signo lunar?", answer: "O signo lunar é o signo do zodíaco em que a Lua estava no momento do nascimento. Ele descreve a maneira de sentir, reagir e viver as emoções." },
      { question: "Por que a hora de nascimento é importante para a Lua?", answer: "A Lua se move rapidamente pelo zodíaco. Uma hora precisa permite determinar melhor sua posição, grau e casa astrológica." },
      { question: "A Lua é mais importante que o Sol?", answer: "Lua e Sol descrevem dimensões complementares. O Sol representa identidade consciente e vontade; a Lua, sensibilidade, necessidades afetivas e reações instintivas." },
      { question: "Como posso descobrir a casa da minha Lua?", answer: "A casa astrológica da Lua depende da hora e do local de nascimento. Você pode descobri-la gerando seu mapa astral completo." },
    ],
    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
