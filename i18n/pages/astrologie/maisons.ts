// i18n/pages/astrologie/maisons.ts

import type { Locale } from "@/i18n/config";

export type HouseItem = {
  symbol: string;
  name: string;
  theme: string;
  description: string;
  href: string;
};

export type MaisonsPageText = {
  metadata: {
    title: string;
    description: string;
  };

  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  createChart: string;
  backToGuides: string;

  libraryLabel: string;
  libraryTitle: string;
  libraryDescription: string;
  discoverHouse: string;

  calloutBadge: string;
  calloutTitle: string;
  calloutDescription: string;
  calloutButton: string;

  houses: HouseItem[];
};

const HOUSE_HREFS = [
  "/astrologie/maisons/maison-1",
  "/astrologie/maisons/maison-2",
  "/astrologie/maisons/maison-3",
  "/astrologie/maisons/maison-4",
  "/astrologie/maisons/maison-5",
  "/astrologie/maisons/maison-6",
  "/astrologie/maisons/maison-7",
  "/astrologie/maisons/maison-8",
  "/astrologie/maisons/maison-9",
  "/astrologie/maisons/maison-10",
  "/astrologie/maisons/maison-11",
  "/astrologie/maisons/maison-12",
] as const;

export const MAISONS_TRANSLATIONS: Record<Locale, MaisonsPageText> = {
  fr: {
    metadata: {
      title: "Les 12 maisons astrologiques | Luna Astralis",
      description:
        "Découvrez la signification des douze maisons astrologiques : identité, argent, communication, famille, amour, travail, relations, transformation, voyages, carrière, amitiés et spiritualité.",
    },

    heroBadge:
      "Les douze domaines du thème natal",

    heroTitle:
      "Découvrez les maisons astrologiques",

    heroDescription:
      "Les douze maisons astrologiques représentent les grands domaines de votre vie. Elles montrent où s’expriment vos planètes, vos signes et les principales dynamiques de votre thème natal.",

    createChart:
      "✨ Créer ma carte du ciel",

    backToGuides:
      "Retour aux guides",

    libraryLabel:
      "Bibliothèque astrologique",

    libraryTitle:
      "Les 12 maisons astrologiques",

    libraryDescription:
      "Sélectionnez une maison pour découvrir sa signification complète, ses forces, ses défis, les planètes qu’elle contient et l’influence des douze signes.",

    discoverHouse:
      "Découvrir la maison →",

    calloutBadge:
      "Votre thème natal",

    calloutTitle:
      "Découvrez dans quelles maisons se trouvent vos planètes",

    calloutDescription:
      "Votre heure et votre lieu de naissance permettent de calculer votre Ascendant, vos douze maisons astrologiques et la position de vos planètes.",

    calloutButton:
      "Découvrir mon thème natal",

    houses: [
      { symbol: "Ⅰ", name: "Maison 1", theme: "Identité", description: "Personnalité, apparence, comportement, affirmation de soi et première impression.", href: HOUSE_HREFS[0] },
      { symbol: "Ⅱ", name: "Maison 2", theme: "Argent et valeurs", description: "Revenus, possessions, talents, sécurité matérielle, estime personnelle et valeurs.", href: HOUSE_HREFS[1] },
      { symbol: "Ⅲ", name: "Maison 3", theme: "Communication", description: "Apprentissage, échanges, entourage proche, déplacements, frères et sœurs.", href: HOUSE_HREFS[2] },
      { symbol: "Ⅳ", name: "Maison 4", theme: "Foyer et racines", description: "Famille, enfance, maison, sécurité émotionnelle, racines et monde intérieur.", href: HOUSE_HREFS[3] },
      { symbol: "Ⅴ", name: "Maison 5", theme: "Créativité et amour", description: "Romance, plaisir, créativité, enfants, loisirs, passions et expression personnelle.", href: HOUSE_HREFS[4] },
      { symbol: "Ⅵ", name: "Maison 6", theme: "Travail et habitudes", description: "Organisation, travail quotidien, service, habitudes, responsabilités et équilibre.", href: HOUSE_HREFS[5] },
      { symbol: "Ⅶ", name: "Maison 7", theme: "Couple et partenariats", description: "Relations engagées, mariage, contrats, associations, coopération et Descendant.", href: HOUSE_HREFS[6] },
      { symbol: "Ⅷ", name: "Maison 8", theme: "Transformation", description: "Intimité, ressources partagées, héritages, crises, pouvoir et renaissance.", href: HOUSE_HREFS[7] },
      { symbol: "Ⅸ", name: "Maison 9", theme: "Voyages et philosophie", description: "Études supérieures, voyages lointains, croyances, spiritualité et quête de sens.", href: HOUSE_HREFS[8] },
      { symbol: "Ⅹ", name: "Maison 10", theme: "Carrière et vocation", description: "Réputation, ambitions, réussite, responsabilités, vocation et Milieu du Ciel.", href: HOUSE_HREFS[9] },
      { symbol: "Ⅺ", name: "Maison 11", theme: "Amitiés et projets", description: "Réseaux, communautés, projets collectifs, espoirs, collaborations et avenir.", href: HOUSE_HREFS[10] },
      { symbol: "Ⅻ", name: "Maison 12", theme: "Inconscient et spiritualité", description: "Rêves, intuition, solitude, secrets, guérison intérieure et fins de cycle.", href: HOUSE_HREFS[11] },
    ],
  },

  en: {
    metadata: {
      title: "The 12 Astrological Houses | Luna Astralis",
      description:
        "Discover the meaning of the twelve astrological houses: identity, money, communication, family, love, work, relationships, transformation, travel, career, friendships and spirituality.",
    },

    heroBadge:
      "The twelve areas of the birth chart",

    heroTitle:
      "Discover the astrological houses",

    heroDescription:
      "The twelve astrological houses represent the major areas of your life. They show where your planets, signs and the main dynamics of your birth chart are expressed.",

    createChart:
      "✨ Create my birth chart",

    backToGuides:
      "Back to the guides",

    libraryLabel:
      "Astrology library",

    libraryTitle:
      "The 12 astrological houses",

    libraryDescription:
      "Select a house to discover its complete meaning, strengths, challenges, the planets it contains and the influence of the twelve signs.",

    discoverHouse:
      "Discover the house →",

    calloutBadge:
      "Your birth chart",

    calloutTitle:
      "Discover which houses contain your planets",

    calloutDescription:
      "Your birth time and place allow your Ascendant, twelve astrological houses and planetary positions to be calculated.",

    calloutButton:
      "Discover my birth chart",

    houses: [
      { symbol: "Ⅰ", name: "House 1", theme: "Identity", description: "Personality, appearance, behavior, self-assertion and first impressions.", href: HOUSE_HREFS[0] },
      { symbol: "Ⅱ", name: "House 2", theme: "Money and values", description: "Income, possessions, talents, material security, self-worth and values.", href: HOUSE_HREFS[1] },
      { symbol: "Ⅲ", name: "House 3", theme: "Communication", description: "Learning, communication, close surroundings, short trips and siblings.", href: HOUSE_HREFS[2] },
      { symbol: "Ⅳ", name: "House 4", theme: "Home and roots", description: "Family, childhood, home, emotional security, roots and inner world.", href: HOUSE_HREFS[3] },
      { symbol: "Ⅴ", name: "House 5", theme: "Creativity and love", description: "Romance, pleasure, creativity, children, hobbies, passions and self-expression.", href: HOUSE_HREFS[4] },
      { symbol: "Ⅵ", name: "House 6", theme: "Work and habits", description: "Organization, daily work, service, habits, responsibilities and balance.", href: HOUSE_HREFS[5] },
      { symbol: "Ⅶ", name: "House 7", theme: "Partnerships", description: "Committed relationships, marriage, contracts, associations, cooperation and the Descendant.", href: HOUSE_HREFS[6] },
      { symbol: "Ⅷ", name: "House 8", theme: "Transformation", description: "Intimacy, shared resources, inheritances, crises, power and rebirth.", href: HOUSE_HREFS[7] },
      { symbol: "Ⅸ", name: "House 9", theme: "Travel and philosophy", description: "Higher education, long-distance travel, beliefs, spirituality and the search for meaning.", href: HOUSE_HREFS[8] },
      { symbol: "Ⅹ", name: "House 10", theme: "Career and vocation", description: "Reputation, ambitions, achievement, responsibilities, vocation and the Midheaven.", href: HOUSE_HREFS[9] },
      { symbol: "Ⅺ", name: "House 11", theme: "Friendships and projects", description: "Networks, communities, collective projects, hopes, collaborations and the future.", href: HOUSE_HREFS[10] },
      { symbol: "Ⅻ", name: "House 12", theme: "The unconscious and spirituality", description: "Dreams, intuition, solitude, secrets, inner healing and endings.", href: HOUSE_HREFS[11] },
    ],
  },

  es: {
    metadata: {
      title: "Las 12 casas astrológicas | Luna Astralis",
      description:
        "Descubre el significado de las doce casas astrológicas: identidad, dinero, comunicación, familia, amor, trabajo, relaciones, transformación, viajes, carrera, amistades y espiritualidad.",
    },

    heroBadge:
      "Los doce ámbitos de la carta natal",

    heroTitle:
      "Descubre las casas astrológicas",

    heroDescription:
      "Las doce casas astrológicas representan los grandes ámbitos de tu vida. Muestran dónde se expresan tus planetas, tus signos y las principales dinámicas de tu carta natal.",

    createChart:
      "✨ Crear mi carta natal",

    backToGuides:
      "Volver a las guías",

    libraryLabel:
      "Biblioteca astrológica",

    libraryTitle:
      "Las 12 casas astrológicas",

    libraryDescription:
      "Selecciona una casa para descubrir su significado completo, sus fortalezas, sus desafíos, los planetas que contiene y la influencia de los doce signos.",

    discoverHouse:
      "Descubrir la casa →",

    calloutBadge:
      "Tu carta natal",

    calloutTitle:
      "Descubre en qué casas se encuentran tus planetas",

    calloutDescription:
      "Tu hora y lugar de nacimiento permiten calcular tu Ascendente, tus doce casas astrológicas y la posición de tus planetas.",

    calloutButton:
      "Descubrir mi carta natal",

    houses: [
      { symbol: "Ⅰ", name: "Casa 1", theme: "Identidad", description: "Personalidad, apariencia, comportamiento, afirmación personal y primera impresión.", href: HOUSE_HREFS[0] },
      { symbol: "Ⅱ", name: "Casa 2", theme: "Dinero y valores", description: "Ingresos, posesiones, talentos, seguridad material, autoestima y valores.", href: HOUSE_HREFS[1] },
      { symbol: "Ⅲ", name: "Casa 3", theme: "Comunicación", description: "Aprendizaje, intercambios, entorno cercano, desplazamientos y hermanos.", href: HOUSE_HREFS[2] },
      { symbol: "Ⅳ", name: "Casa 4", theme: "Hogar y raíces", description: "Familia, infancia, hogar, seguridad emocional, raíces y mundo interior.", href: HOUSE_HREFS[3] },
      { symbol: "Ⅴ", name: "Casa 5", theme: "Creatividad y amor", description: "Romance, placer, creatividad, hijos, ocio, pasiones y expresión personal.", href: HOUSE_HREFS[4] },
      { symbol: "Ⅵ", name: "Casa 6", theme: "Trabajo y hábitos", description: "Organización, trabajo diario, servicio, hábitos, responsabilidades y equilibrio.", href: HOUSE_HREFS[5] },
      { symbol: "Ⅶ", name: "Casa 7", theme: "Pareja y asociaciones", description: "Relaciones comprometidas, matrimonio, contratos, asociaciones, cooperación y Descendente.", href: HOUSE_HREFS[6] },
      { symbol: "Ⅷ", name: "Casa 8", theme: "Transformación", description: "Intimidad, recursos compartidos, herencias, crisis, poder y renacimiento.", href: HOUSE_HREFS[7] },
      { symbol: "Ⅸ", name: "Casa 9", theme: "Viajes y filosofía", description: "Estudios superiores, viajes lejanos, creencias, espiritualidad y búsqueda de sentido.", href: HOUSE_HREFS[8] },
      { symbol: "Ⅹ", name: "Casa 10", theme: "Carrera y vocación", description: "Reputación, ambiciones, éxito, responsabilidades, vocación y Medio Cielo.", href: HOUSE_HREFS[9] },
      { symbol: "Ⅺ", name: "Casa 11", theme: "Amistades y proyectos", description: "Redes, comunidades, proyectos colectivos, esperanzas, colaboraciones y futuro.", href: HOUSE_HREFS[10] },
      { symbol: "Ⅻ", name: "Casa 12", theme: "Inconsciente y espiritualidad", description: "Sueños, intuición, soledad, secretos, sanación interior y finales de ciclo.", href: HOUSE_HREFS[11] },
    ],
  },

  de: {
    metadata: {
      title: "Die 12 astrologischen Häuser | Luna Astralis",
      description:
        "Entdecken Sie die Bedeutung der zwölf astrologischen Häuser: Identität, Geld, Kommunikation, Familie, Liebe, Arbeit, Beziehungen, Transformation, Reisen, Karriere, Freundschaften und Spiritualität.",
    },

    heroBadge:
      "Die zwölf Lebensbereiche des Geburtshoroskops",

    heroTitle:
      "Entdecken Sie die astrologischen Häuser",

    heroDescription:
      "Die zwölf astrologischen Häuser stehen für die großen Lebensbereiche. Sie zeigen, wo sich Ihre Planeten, Zeichen und die wichtigsten Dynamiken Ihres Geburtshoroskops ausdrücken.",

    createChart:
      "✨ Mein Geburtshoroskop erstellen",

    backToGuides:
      "Zurück zu den Ratgebern",

    libraryLabel:
      "Astrologische Bibliothek",

    libraryTitle:
      "Die 12 astrologischen Häuser",

    libraryDescription:
      "Wählen Sie ein Haus, um seine vollständige Bedeutung, Stärken, Herausforderungen, enthaltenen Planeten und den Einfluss der zwölf Zeichen zu entdecken.",

    discoverHouse:
      "Haus entdecken →",

    calloutBadge:
      "Ihr Geburtshoroskop",

    calloutTitle:
      "Entdecken Sie, in welchen Häusern Ihre Planeten stehen",

    calloutDescription:
      "Geburtszeit und Geburtsort ermöglichen die Berechnung Ihres Aszendenten, der zwölf astrologischen Häuser und Ihrer Planetenpositionen.",

    calloutButton:
      "Mein Geburtshoroskop entdecken",

    houses: [
      { symbol: "Ⅰ", name: "Haus 1", theme: "Identität", description: "Persönlichkeit, Erscheinung, Verhalten, Selbstbehauptung und erster Eindruck.", href: HOUSE_HREFS[0] },
      { symbol: "Ⅱ", name: "Haus 2", theme: "Geld und Werte", description: "Einkommen, Besitz, Talente, materielle Sicherheit, Selbstwert und Werte.", href: HOUSE_HREFS[1] },
      { symbol: "Ⅲ", name: "Haus 3", theme: "Kommunikation", description: "Lernen, Austausch, nahes Umfeld, kurze Wege und Geschwister.", href: HOUSE_HREFS[2] },
      { symbol: "Ⅳ", name: "Haus 4", theme: "Heim und Wurzeln", description: "Familie, Kindheit, Zuhause, emotionale Sicherheit, Wurzeln und innere Welt.", href: HOUSE_HREFS[3] },
      { symbol: "Ⅴ", name: "Haus 5", theme: "Kreativität und Liebe", description: "Romantik, Freude, Kreativität, Kinder, Freizeit, Leidenschaften und Selbstausdruck.", href: HOUSE_HREFS[4] },
      { symbol: "Ⅵ", name: "Haus 6", theme: "Arbeit und Gewohnheiten", description: "Organisation, tägliche Arbeit, Dienst, Gewohnheiten, Verantwortung und Gleichgewicht.", href: HOUSE_HREFS[5] },
      { symbol: "Ⅶ", name: "Haus 7", theme: "Partnerschaften", description: "Verbindliche Beziehungen, Ehe, Verträge, Kooperationen und Deszendent.", href: HOUSE_HREFS[6] },
      { symbol: "Ⅷ", name: "Haus 8", theme: "Transformation", description: "Intimität, gemeinsame Ressourcen, Erbschaften, Krisen, Macht und Wiedergeburt.", href: HOUSE_HREFS[7] },
      { symbol: "Ⅸ", name: "Haus 9", theme: "Reisen und Philosophie", description: "Hochschulbildung, Fernreisen, Überzeugungen, Spiritualität und Sinnsuche.", href: HOUSE_HREFS[8] },
      { symbol: "Ⅹ", name: "Haus 10", theme: "Karriere und Berufung", description: "Ansehen, Ehrgeiz, Erfolg, Verantwortung, Berufung und Medium Coeli.", href: HOUSE_HREFS[9] },
      { symbol: "Ⅺ", name: "Haus 11", theme: "Freundschaften und Projekte", description: "Netzwerke, Gemeinschaften, kollektive Projekte, Hoffnungen, Zusammenarbeit und Zukunft.", href: HOUSE_HREFS[10] },
      { symbol: "Ⅻ", name: "Haus 12", theme: "Unbewusstes und Spiritualität", description: "Träume, Intuition, Rückzug, Geheimnisse, innere Heilung und Abschlüsse.", href: HOUSE_HREFS[11] },
    ],
  },

  it: {
    metadata: {
      title: "Le 12 case astrologiche | Luna Astralis",
      description:
        "Scopri il significato delle dodici case astrologiche: identità, denaro, comunicazione, famiglia, amore, lavoro, relazioni, trasformazione, viaggi, carriera, amicizie e spiritualità.",
    },

    heroBadge:
      "I dodici ambiti del tema natale",

    heroTitle:
      "Scopri le case astrologiche",

    heroDescription:
      "Le dodici case astrologiche rappresentano i grandi ambiti della tua vita. Mostrano dove si esprimono i pianeti, i segni e le principali dinamiche del tema natale.",

    createChart:
      "✨ Crea il mio tema natale",

    backToGuides:
      "Torna alle guide",

    libraryLabel:
      "Biblioteca astrologica",

    libraryTitle:
      "Le 12 case astrologiche",

    libraryDescription:
      "Seleziona una casa per scoprirne il significato completo, i punti di forza, le sfide, i pianeti presenti e l’influenza dei dodici segni.",

    discoverHouse:
      "Scopri la casa →",

    calloutBadge:
      "Il tuo tema natale",

    calloutTitle:
      "Scopri in quali case si trovano i tuoi pianeti",

    calloutDescription:
      "L’ora e il luogo di nascita permettono di calcolare Ascendente, dodici case astrologiche e posizione dei pianeti.",

    calloutButton:
      "Scopri il mio tema natale",

    houses: [
      { symbol: "Ⅰ", name: "Casa 1", theme: "Identità", description: "Personalità, aspetto, comportamento, affermazione di sé e prima impressione.", href: HOUSE_HREFS[0] },
      { symbol: "Ⅱ", name: "Casa 2", theme: "Denaro e valori", description: "Entrate, beni, talenti, sicurezza materiale, autostima e valori.", href: HOUSE_HREFS[1] },
      { symbol: "Ⅲ", name: "Casa 3", theme: "Comunicazione", description: "Apprendimento, scambi, ambiente vicino, spostamenti e fratelli.", href: HOUSE_HREFS[2] },
      { symbol: "Ⅳ", name: "Casa 4", theme: "Casa e radici", description: "Famiglia, infanzia, casa, sicurezza emotiva, radici e mondo interiore.", href: HOUSE_HREFS[3] },
      { symbol: "Ⅴ", name: "Casa 5", theme: "Creatività e amore", description: "Romanticismo, piacere, creatività, figli, hobby, passioni ed espressione personale.", href: HOUSE_HREFS[4] },
      { symbol: "Ⅵ", name: "Casa 6", theme: "Lavoro e abitudini", description: "Organizzazione, lavoro quotidiano, servizio, abitudini, responsabilità ed equilibrio.", href: HOUSE_HREFS[5] },
      { symbol: "Ⅶ", name: "Casa 7", theme: "Coppia e collaborazioni", description: "Relazioni impegnate, matrimonio, contratti, associazioni, cooperazione e Discendente.", href: HOUSE_HREFS[6] },
      { symbol: "Ⅷ", name: "Casa 8", theme: "Trasformazione", description: "Intimità, risorse condivise, eredità, crisi, potere e rinascita.", href: HOUSE_HREFS[7] },
      { symbol: "Ⅸ", name: "Casa 9", theme: "Viaggi e filosofia", description: "Studi superiori, viaggi lontani, credenze, spiritualità e ricerca di significato.", href: HOUSE_HREFS[8] },
      { symbol: "Ⅹ", name: "Casa 10", theme: "Carriera e vocazione", description: "Reputazione, ambizioni, successo, responsabilità, vocazione e Medio Cielo.", href: HOUSE_HREFS[9] },
      { symbol: "Ⅺ", name: "Casa 11", theme: "Amicizie e progetti", description: "Reti, comunità, progetti collettivi, speranze, collaborazioni e futuro.", href: HOUSE_HREFS[10] },
      { symbol: "Ⅻ", name: "Casa 12", theme: "Inconscio e spiritualità", description: "Sogni, intuizione, solitudine, segreti, guarigione interiore e fine dei cicli.", href: HOUSE_HREFS[11] },
    ],
  },

  pt: {
    metadata: {
      title: "As 12 casas astrológicas | Luna Astralis",
      description:
        "Descubra o significado das doze casas astrológicas: identidade, dinheiro, comunicação, família, amor, trabalho, relacionamentos, transformação, viagens, carreira, amizades e espiritualidade.",
    },

    heroBadge:
      "As doze áreas do mapa astral",

    heroTitle:
      "Descubra as casas astrológicas",

    heroDescription:
      "As doze casas astrológicas representam as grandes áreas da sua vida. Elas mostram onde seus planetas, signos e as principais dinâmicas do seu mapa astral se expressam.",

    createChart:
      "✨ Criar meu mapa astral",

    backToGuides:
      "Voltar aos guias",

    libraryLabel:
      "Biblioteca astrológica",

    libraryTitle:
      "As 12 casas astrológicas",

    libraryDescription:
      "Selecione uma casa para descobrir seu significado completo, suas forças, seus desafios, os planetas que contém e a influência dos doze signos.",

    discoverHouse:
      "Descobrir a casa →",

    calloutBadge:
      "Seu mapa astral",

    calloutTitle:
      "Descubra em quais casas estão seus planetas",

    calloutDescription:
      "Sua hora e seu local de nascimento permitem calcular o Ascendente, as doze casas astrológicas e a posição dos planetas.",

    calloutButton:
      "Descobrir meu mapa astral",

    houses: [
      { symbol: "Ⅰ", name: "Casa 1", theme: "Identidade", description: "Personalidade, aparência, comportamento, autoafirmação e primeira impressão.", href: HOUSE_HREFS[0] },
      { symbol: "Ⅱ", name: "Casa 2", theme: "Dinheiro e valores", description: "Renda, bens, talentos, segurança material, autoestima e valores.", href: HOUSE_HREFS[1] },
      { symbol: "Ⅲ", name: "Casa 3", theme: "Comunicação", description: "Aprendizado, trocas, ambiente próximo, deslocamentos e irmãos.", href: HOUSE_HREFS[2] },
      { symbol: "Ⅳ", name: "Casa 4", theme: "Lar e raízes", description: "Família, infância, lar, segurança emocional, raízes e mundo interior.", href: HOUSE_HREFS[3] },
      { symbol: "Ⅴ", name: "Casa 5", theme: "Criatividade e amor", description: "Romance, prazer, criatividade, filhos, lazer, paixões e expressão pessoal.", href: HOUSE_HREFS[4] },
      { symbol: "Ⅵ", name: "Casa 6", theme: "Trabalho e hábitos", description: "Organização, trabalho diário, serviço, hábitos, responsabilidades e equilíbrio.", href: HOUSE_HREFS[5] },
      { symbol: "Ⅶ", name: "Casa 7", theme: "Relacionamentos e parcerias", description: "Relações comprometidas, casamento, contratos, associações, cooperação e Descendente.", href: HOUSE_HREFS[6] },
      { symbol: "Ⅷ", name: "Casa 8", theme: "Transformação", description: "Intimidade, recursos compartilhados, heranças, crises, poder e renascimento.", href: HOUSE_HREFS[7] },
      { symbol: "Ⅸ", name: "Casa 9", theme: "Viagens e filosofia", description: "Ensino superior, viagens longas, crenças, espiritualidade e busca de sentido.", href: HOUSE_HREFS[8] },
      { symbol: "Ⅹ", name: "Casa 10", theme: "Carreira e vocação", description: "Reputação, ambições, sucesso, responsabilidades, vocação e Meio do Céu.", href: HOUSE_HREFS[9] },
      { symbol: "Ⅺ", name: "Casa 11", theme: "Amizades e projetos", description: "Redes, comunidades, projetos coletivos, esperanças, colaborações e futuro.", href: HOUSE_HREFS[10] },
      { symbol: "Ⅻ", name: "Casa 12", theme: "Inconsciente e espiritualidade", description: "Sonhos, intuição, solitude, segredos, cura interior e fins de ciclo.", href: HOUSE_HREFS[11] },
    ],
  },
};
