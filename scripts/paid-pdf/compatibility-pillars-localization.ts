import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type PillarBody =
  | "sun"
  | "moon"
  | "ascendant";

type DynamicCategory =
  | "same-sign"
  | "same-element"
  | "complementary-elements"
  | "different-elements";

type DynamicTemplates = Record<
  PillarBody,
  Record<DynamicCategory, string>
>;

type LocaleData = {
  text: Record<string, string>;
  planets: Record<string, string>;
  signs: Record<string, string>;
  elements: Record<string, string>;
  inWord: string;
  dynamic: DynamicTemplates;
};

const TRANSLATIONS: Record<
  NonFrenchLocale,
  LocaleData
> = {
  en: {
    text: {
      "Non précisé": "Not specified",
      "Soleil et Soleil": "Sun and Sun",
      "Identité et expression": "Identity and expression",
      "Le Soleil représente la personnalité consciente, la vitalité, les ambitions et la manière de rayonner.":
        "The Sun represents conscious personality, vitality, ambitions, and the way each person shines.",
      "Cette comparaison montre comment vos identités se reconnaissent, se soutiennent ou se stimulent.":
        "This comparison shows how your identities recognize, support, or stimulate one another.",
      "Lune et Lune": "Moon and Moon",
      "Émotions et intimité": "Emotions and intimacy",
      "La Lune décrit les besoins affectifs, les habitudes émotionnelles et la manière de rechercher la sécurité.":
        "The Moon describes emotional needs, emotional habits, and the way each person seeks security.",
      "Cette comparaison révèle la facilité avec laquelle vous comprenez et accueillez les émotions de l’autre.":
        "This comparison reveals how easily you understand and receive each other's emotions.",
      "Ascendant et Ascendant": "Ascendant and Ascendant",
      "Rencontre et quotidien": "Encounter and daily life",
      "L’Ascendant représente la manière spontanée d’entrer en relation, de réagir et de se présenter au monde.":
        "The Ascendant represents the spontaneous way each person relates, reacts, and presents themselves to the world.",
      "Cette comparaison montre comment vos rythmes, vos attitudes et vos comportements naturels s’accordent.":
        "This comparison shows how your rhythms, attitudes, and natural behaviors align.",
      "Première personne": "First person",
      "Deuxième personne": "Second person",
      "Les données disponibles ne permettent pas encore de produire une comparaison entièrement personnalisée pour ce pilier.":
        "The available data does not yet allow a fully personalized comparison for this pillar.",
      "Votre dynamique": "Your dynamic",
      "Sur le plan personnel": "On a personal level",
      "Dans la relation": "In the relationship",
      "Fondations relationnelles": "Relational foundations",
      "Les trois piliers de votre lien": "The three pillars of your bond",
      "Le Soleil, la Lune et l’Ascendant révèlent vos identités, vos besoins émotionnels et votre manière naturelle d’entrer en relation.":
        "The Sun, the Moon, and the Ascendant reveal your identities, emotional needs, and your natural way of relating.",
      "Votre fondation relationnelle": "Your relational foundation",
      "Ces trois comparaisons offrent une première lecture de votre relation, mais elles ne suffisent pas à elles seules pour déterminer toute la compatibilité. Les interactions entre Mercure, Vénus, Mars, Saturne et les autres planètes préciseront ensuite la communication, l’attirance, la stabilité et les principaux défis de votre lien.":
        "These three comparisons provide an initial reading of your relationship, but they are not sufficient on their own to determine overall compatibility. The interactions between Mercury, Venus, Mars, Saturn, and the other planets will further clarify communication, attraction, stability, and the main challenges of your bond.",
      "À retenir": "To remember",
      "Une différence entre deux signes n’est pas nécessairement un obstacle. Elle peut devenir une véritable complémentarité lorsque chacun comprend et respecte la manière naturelle de fonctionner de l’autre.":
        "A difference between two signs is not necessarily an obstacle. It can become a true complementarity when each person understands and respects the other's natural way of functioning.",
      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastry report",
    },

    planets: {
      Sun: "Sun",
      Moon: "Moon",
      Ascendant: "Ascendant",
    },

    signs: {
      Bélier: "Aries",
      Taureau: "Taurus",
      Gémeaux: "Gemini",
      Cancer: "Cancer",
      Lion: "Leo",
      Vierge: "Virgo",
      Balance: "Libra",
      Scorpion: "Scorpio",
      Sagittaire: "Sagittarius",
      Capricorne: "Capricorn",
      Verseau: "Aquarius",
      Poissons: "Pisces",
      Aries: "Aries",
      Taurus: "Taurus",
      Gemini: "Gemini",
      Leo: "Leo",
      Virgo: "Virgo",
      Libra: "Libra",
      Scorpio: "Scorpio",
      Sagittarius: "Sagittarius",
      Capricorn: "Capricorn",
      Aquarius: "Aquarius",
      Pisces: "Pisces",
    },

    elements: {
      Feu: "Fire",
      Terre: "Earth",
      Air: "Air",
      Eau: "Water",
    },

    inWord: "in",

    dynamic: {
      sun: {
        "same-sign":
          "Your two Suns in {sign1} share a similar way of asserting identity and pursuing goals. This familiarity can strengthen mutual recognition, provided each person keeps enough room to express an individual identity.",
        "same-element":
          "The Suns in {sign1} and {sign2} belong to the same element, {element1}. This common foundation supports a natural understanding of your motivations, even though each person expresses that energy in a different way.",
        "complementary-elements":
          "Your solar pairing brings together {element1} and {element2}. These complementary energies can create an interesting balance between your ways of acting, deciding, and pursuing your ambitions.",
        "different-elements":
          "The Suns in {sign1} and {sign2} operate through the different elements {element1} and {element2}. Your approaches may not always be immediately easy to understand, but these differences can broaden the relationship when each person's strengths are respected.",
      },

      moon: {
        "same-sign":
          "Your two Moons in {sign1} share similar emotional reflexes and security needs. This familiarity can create a strong sense of emotional recognition, as long as neither person assumes that the other always feels exactly the same thing.",
        "same-element":
          "The Moons in {sign1} and {sign2} are connected through the element {element1}. Your inner worlds have a compatible emotional foundation, which can support trust, comfort, and mutual understanding.",
        "complementary-elements":
          "The Moons in {sign1} and {sign2} combine the elements {element1} and {element2}. These complementary sensitivities can support one another and create an emotional balance in which each person contributes a different form of security.",
        "different-elements":
          "The Moon in {sign1} and the Moon in {sign2} do not always respond to emotions in the same way. The elements {element1} and {element2} can create differences in rhythm, but they can also teach you to recognize needs that are different from your own.",
      },

      ascendant: {
        "same-sign":
          "Having the same Ascendant in {sign1} creates a natural affinity in the way you behave and approach everyday life. You can instinctively recognize each other's rhythm, reactions, and need to adapt.",
        "same-element":
          "The Ascendants in {sign1} and {sign2} share the element {element1}. Your outward reactions and ways of adapting are therefore based on a compatible energy, even if each sign expresses it differently.",
        "complementary-elements":
          "The Ascendants in {sign1} and {sign2} combine the elements {element1} and {element2}. These complementary energies can help your different ways of reacting support one another in daily life.",
        "different-elements":
          "The Ascendants in {sign1} and {sign2} operate through the different elements {element1} and {element2}. Your spontaneous reactions may differ, but the relationship can become more flexible when each person respects the other's natural style.",
      },
    },
  },

  es: {
    text: {
      "Non précisé": "No especificado",
      "Soleil et Soleil": "Sol y Sol",
      "Identité et expression": "Identidad y expresión",
      "Le Soleil représente la personnalité consciente, la vitalité, les ambitions et la manière de rayonner.":
        "El Sol representa la personalidad consciente, la vitalidad, las ambiciones y la manera de irradiar la propia energía.",
      "Cette comparaison montre comment vos identités se reconnaissent, se soutiennent ou se stimulent.":
        "Esta comparación muestra cómo sus identidades se reconocen, se apoyan o se estimulan.",
      "Lune et Lune": "Luna y Luna",
      "Émotions et intimité": "Emociones e intimidad",
      "La Lune décrit les besoins affectifs, les habitudes émotionnelles et la manière de rechercher la sécurité.":
        "La Luna describe las necesidades afectivas, los hábitos emocionales y la manera de buscar seguridad.",
      "Cette comparaison révèle la facilité avec laquelle vous comprenez et accueillez les émotions de l’autre.":
        "Esta comparación revela la facilidad con la que comprenden y acogen las emociones del otro.",
      "Ascendant et Ascendant": "Ascendente y Ascendente",
      "Rencontre et quotidien": "Encuentro y vida cotidiana",
      "L’Ascendant représente la manière spontanée d’entrer en relation, de réagir et de se présenter au monde.":
        "El Ascendente representa la manera espontánea de relacionarse, reaccionar y presentarse ante el mundo.",
      "Cette comparaison montre comment vos rythmes, vos attitudes et vos comportements naturels s’accordent.":
        "Esta comparación muestra cómo armonizan sus ritmos, actitudes y comportamientos naturales.",
      "Première personne": "Primera persona",
      "Deuxième personne": "Segunda persona",
      "Les données disponibles ne permettent pas encore de produire une comparaison entièrement personnalisée pour ce pilier.":
        "Los datos disponibles todavía no permiten producir una comparación completamente personalizada para este pilar.",
      "Votre dynamique": "Su dinámica",
      "Sur le plan personnel": "En el plano personal",
      "Dans la relation": "En la relación",
      "Fondations relationnelles": "Fundamentos de la relación",
      "Les trois piliers de votre lien": "Los tres pilares de su vínculo",
      "Le Soleil, la Lune et l’Ascendant révèlent vos identités, vos besoins émotionnels et votre manière naturelle d’entrer en relation.":
        "El Sol, la Luna y el Ascendente revelan sus identidades, sus necesidades emocionales y su manera natural de relacionarse.",
      "Votre fondation relationnelle": "La base de su relación",
      "Ces trois comparaisons offrent une première lecture de votre relation, mais elles ne suffisent pas à elles seules pour déterminer toute la compatibilité. Les interactions entre Mercure, Vénus, Mars, Saturne et les autres planètes préciseront ensuite la communication, l’attirance, la stabilité et les principaux défis de votre lien.":
        "Estas tres comparaciones ofrecen una primera lectura de su relación, pero no bastan por sí solas para determinar toda la compatibilidad. Las interacciones entre Mercurio, Venus, Marte, Saturno y los demás planetas precisarán después la comunicación, la atracción, la estabilidad y los principales desafíos de su vínculo.",
      "À retenir": "Para recordar",
      "Une différence entre deux signes n’est pas nécessairement un obstacle. Elle peut devenir une véritable complémentarité lorsque chacun comprend et respecte la manière naturelle de fonctionner de l’autre.":
        "Una diferencia entre dos signos no es necesariamente un obstáculo. Puede convertirse en una verdadera complementariedad cuando cada persona comprende y respeta la manera natural de funcionar de la otra.",
      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Informe de sinastría",
    },

    planets: {
      Sun: "Sol",
      Moon: "Luna",
      Ascendant: "Ascendente",
    },

    signs: {
      Bélier: "Aries",
      Taureau: "Tauro",
      Gémeaux: "Géminis",
      Cancer: "Cáncer",
      Lion: "Leo",
      Vierge: "Virgo",
      Balance: "Libra",
      Scorpion: "Escorpio",
      Sagittaire: "Sagitario",
      Capricorne: "Capricornio",
      Verseau: "Acuario",
      Poissons: "Piscis",
      Aries: "Aries",
      Taurus: "Tauro",
      Gemini: "Géminis",
      Leo: "Leo",
      Virgo: "Virgo",
      Libra: "Libra",
      Scorpio: "Escorpio",
      Sagittarius: "Sagitario",
      Capricorn: "Capricornio",
      Aquarius: "Acuario",
      Pisces: "Piscis",
    },

    elements: {
      Feu: "Fuego",
      Terre: "Tierra",
      Air: "Aire",
      Eau: "Agua",
    },

    inWord: "en",

    dynamic: {
      sun: {
        "same-sign":
          "Sus dos Soles en {sign1} comparten una manera similar de afirmar la identidad y perseguir objetivos. Esta familiaridad puede reforzar el reconocimiento mutuo, siempre que cada persona conserve espacio para expresar su propia identidad.",
        "same-element":
          "Los Soles en {sign1} y {sign2} pertenecen al mismo elemento, {element1}. Esta base común favorece una comprensión natural de sus motivaciones, aunque cada persona exprese esa energía de manera diferente.",
        "complementary-elements":
          "Su pareja solar reúne {element1} y {element2}. Estas energías complementarias pueden crear un equilibrio interesante entre sus maneras de actuar, decidir y perseguir sus ambiciones.",
        "different-elements":
          "Los Soles en {sign1} y {sign2} funcionan a través de los elementos diferentes {element1} y {element2}. Sus enfoques no siempre son inmediatamente fáciles de comprender, pero las diferencias pueden enriquecer la relación cuando se respetan las fortalezas de cada persona.",
      },

      moon: {
        "same-sign":
          "Sus dos Lunas en {sign1} comparten reflejos emocionales y necesidades de seguridad similares. Esta familiaridad puede crear un fuerte sentimiento de reconocimiento emocional, siempre que no den por hecho que ambos sienten exactamente lo mismo.",
        "same-element":
          "Las Lunas en {sign1} y {sign2} están unidas por el elemento {element1}. Sus mundos interiores comparten una base emocional compatible que puede favorecer la confianza, el consuelo y la comprensión mutua.",
        "complementary-elements":
          "Las Lunas en {sign1} y {sign2} combinan los elementos {element1} y {element2}. Estas sensibilidades complementarias pueden apoyarse y crear un equilibrio emocional en el que cada persona aporta una forma distinta de seguridad.",
        "different-elements":
          "La Luna en {sign1} y la Luna en {sign2} no siempre responden a las emociones de la misma manera. Los elementos {element1} y {element2} pueden provocar diferencias de ritmo, pero también pueden enseñarles a reconocer necesidades distintas de las propias.",
      },

      ascendant: {
        "same-sign":
          "La presencia del mismo Ascendente en {sign1} crea una afinidad natural en su manera de comportarse y abordar la vida cotidiana. Pueden reconocer instintivamente el ritmo, las reacciones y las necesidades de adaptación del otro.",
        "same-element":
          "Los Ascendentes en {sign1} y {sign2} comparten el elemento {element1}. Sus reacciones exteriores y sus formas de adaptación se apoyan en una energía compatible, aunque cada signo la exprese de manera diferente.",
        "complementary-elements":
          "Los Ascendentes en {sign1} y {sign2} combinan los elementos {element1} y {element2}. Estas energías complementarias pueden ayudar a que sus distintas maneras de reaccionar se apoyen mutuamente en la vida cotidiana.",
        "different-elements":
          "Los Ascendentes en {sign1} y {sign2} funcionan a través de los elementos diferentes {element1} y {element2}. Sus reacciones espontáneas pueden diferir, pero la relación puede volverse más flexible cuando cada persona respeta el estilo natural de la otra.",
      },
    },
  },

  de: {
    text: {
      "Non précisé": "Nicht angegeben",
      "Soleil et Soleil": "Sonne und Sonne",
      "Identité et expression": "Identität und Ausdruck",
      "Le Soleil représente la personnalité consciente, la vitalité, les ambitions et la manière de rayonner.":
        "Die Sonne steht für die bewusste Persönlichkeit, Vitalität, Ambitionen und die Art, wie ein Mensch seine Ausstrahlung entfaltet.",
      "Cette comparaison montre comment vos identités se reconnaissent, se soutiennent ou se stimulent.":
        "Dieser Vergleich zeigt, wie Ihre Identitäten einander erkennen, unterstützen oder anregen.",
      "Lune et Lune": "Mond und Mond",
      "Émotions et intimité": "Emotionen und Intimität",
      "La Lune décrit les besoins affectifs, les habitudes émotionnelles et la manière de rechercher la sécurité.":
        "Der Mond beschreibt emotionale Bedürfnisse, Gefühlsgewohnheiten und die Art, Sicherheit zu suchen.",
      "Cette comparaison révèle la facilité avec laquelle vous comprenez et accueillez les émotions de l’autre.":
        "Dieser Vergleich zeigt, wie leicht Sie die Gefühle des anderen verstehen und annehmen.",
      "Ascendant et Ascendant": "Aszendent und Aszendent",
      "Rencontre et quotidien": "Begegnung und Alltag",
      "L’Ascendant représente la manière spontanée d’entrer en relation, de réagir et de se présenter au monde.":
        "Der Aszendent steht für die spontane Art, Beziehungen einzugehen, zu reagieren und sich der Welt zu zeigen.",
      "Cette comparaison montre comment vos rythmes, vos attitudes et vos comportements naturels s’accordent.":
        "Dieser Vergleich zeigt, wie Ihre Rhythmen, Haltungen und natürlichen Verhaltensweisen miteinander harmonieren.",
      "Première personne": "Erste Person",
      "Deuxième personne": "Zweite Person",
      "Les données disponibles ne permettent pas encore de produire une comparaison entièrement personnalisée pour ce pilier.":
        "Die verfügbaren Daten reichen noch nicht aus, um für diese Säule einen vollständig personalisierten Vergleich zu erstellen.",
      "Votre dynamique": "Ihre Dynamik",
      "Sur le plan personnel": "Auf persönlicher Ebene",
      "Dans la relation": "In der Beziehung",
      "Fondations relationnelles": "Beziehungsgrundlagen",
      "Les trois piliers de votre lien": "Die drei Säulen Ihrer Verbindung",
      "Le Soleil, la Lune et l’Ascendant révèlent vos identités, vos besoins émotionnels et votre manière naturelle d’entrer en relation.":
        "Sonne, Mond und Aszendent zeigen Ihre Identitäten, emotionalen Bedürfnisse und Ihre natürliche Art, miteinander in Beziehung zu treten.",
      "Votre fondation relationnelle": "Das Fundament Ihrer Beziehung",
      "Ces trois comparaisons offrent une première lecture de votre relation, mais elles ne suffisent pas à elles seules pour déterminer toute la compatibilité. Les interactions entre Mercure, Vénus, Mars, Saturne et les autres planètes préciseront ensuite la communication, l’attirance, la stabilité et les principaux défis de votre lien.":
        "Diese drei Vergleiche bieten eine erste Einschätzung Ihrer Beziehung, reichen allein jedoch nicht aus, um die gesamte Kompatibilität zu bestimmen. Die Wechselwirkungen zwischen Merkur, Venus, Mars, Saturn und den anderen Planeten werden anschließend Kommunikation, Anziehung, Stabilität und die wichtigsten Herausforderungen Ihrer Verbindung genauer beleuchten.",
      "À retenir": "Wichtig",
      "Une différence entre deux signes n’est pas nécessairement un obstacle. Elle peut devenir une véritable complémentarité lorsque chacun comprend et respecte la manière naturelle de fonctionner de l’autre.":
        "Ein Unterschied zwischen zwei Zeichen ist nicht zwangsläufig ein Hindernis. Er kann zu einer echten Ergänzung werden, wenn beide die natürliche Art des anderen verstehen und respektieren.",
      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastrie-Bericht",
    },

    planets: {
      Sun: "Sonne",
      Moon: "Mond",
      Ascendant: "Aszendent",
    },

    signs: {
      Bélier: "Widder",
      Taureau: "Stier",
      Gémeaux: "Zwillinge",
      Cancer: "Krebs",
      Lion: "Löwe",
      Vierge: "Jungfrau",
      Balance: "Waage",
      Scorpion: "Skorpion",
      Sagittaire: "Schütze",
      Capricorne: "Steinbock",
      Verseau: "Wassermann",
      Poissons: "Fische",
      Aries: "Widder",
      Taurus: "Stier",
      Gemini: "Zwillinge",
      Leo: "Löwe",
      Virgo: "Jungfrau",
      Libra: "Waage",
      Scorpio: "Skorpion",
      Sagittarius: "Schütze",
      Capricorn: "Steinbock",
      Aquarius: "Wassermann",
      Pisces: "Fische",
    },

    elements: {
      Feu: "Feuer",
      Terre: "Erde",
      Air: "Luft",
      Eau: "Wasser",
    },

    inWord: "in",

    dynamic: {
      sun: {
        "same-sign":
          "Ihre beiden Sonnen in {sign1} teilen eine ähnliche Art, Identität auszudrücken und Ziele zu verfolgen. Diese Vertrautheit kann die gegenseitige Anerkennung stärken, solange beide genügend Raum für ihre eigene Persönlichkeit behalten.",
        "same-element":
          "Die Sonnen in {sign1} und {sign2} gehören zum selben Element, {element1}. Diese gemeinsame Grundlage unterstützt ein natürliches Verständnis Ihrer Motivationen, auch wenn beide diese Energie unterschiedlich ausdrücken.",
        "complementary-elements":
          "Ihre Sonnenverbindung vereint {element1} und {element2}. Diese ergänzenden Energien können ein interessantes Gleichgewicht zwischen Ihren Arten zu handeln, zu entscheiden und Ihre Ziele zu verfolgen schaffen.",
        "different-elements":
          "Die Sonnen in {sign1} und {sign2} wirken durch die unterschiedlichen Elemente {element1} und {element2}. Ihre Herangehensweisen sind nicht immer sofort leicht zu verstehen, doch die Unterschiede können die Beziehung bereichern, wenn die Stärken beider respektiert werden.",
      },

      moon: {
        "same-sign":
          "Ihre beiden Monde in {sign1} teilen ähnliche emotionale Reflexe und Sicherheitsbedürfnisse. Diese Vertrautheit kann ein starkes Gefühl emotionaler Wiedererkennung schaffen, solange keiner voraussetzt, dass der andere immer genau dasselbe empfindet.",
        "same-element":
          "Die Monde in {sign1} und {sign2} sind durch das Element {element1} verbunden. Ihre inneren Welten besitzen eine kompatible emotionale Grundlage, die Vertrauen, Trost und gegenseitiges Verständnis fördern kann.",
        "complementary-elements":
          "Die Monde in {sign1} und {sign2} verbinden die Elemente {element1} und {element2}. Diese ergänzenden Empfindsamkeiten können einander unterstützen und ein emotionales Gleichgewicht schaffen, in dem beide eine andere Form von Sicherheit beitragen.",
        "different-elements":
          "Der Mond in {sign1} und der Mond in {sign2} reagieren nicht immer auf dieselbe Weise auf Gefühle. Die Elemente {element1} und {element2} können unterschiedliche Rhythmen erzeugen, aber auch helfen, Bedürfnisse zu erkennen, die sich von den eigenen unterscheiden.",
      },

      ascendant: {
        "same-sign":
          "Derselbe Aszendent in {sign1} schafft eine natürliche Affinität in Ihrem Verhalten und im Alltag. Sie können Rhythmus, Reaktionen und Anpassungsbedürfnisse des anderen instinktiv erkennen.",
        "same-element":
          "Die Aszendenten in {sign1} und {sign2} teilen das Element {element1}. Ihre äußeren Reaktionen und Anpassungsweisen beruhen daher auf einer kompatiblen Energie, auch wenn jedes Zeichen sie anders ausdrückt.",
        "complementary-elements":
          "Die Aszendenten in {sign1} und {sign2} verbinden die Elemente {element1} und {element2}. Diese ergänzenden Energien können dazu beitragen, dass Ihre unterschiedlichen Reaktionsweisen sich im Alltag gegenseitig unterstützen.",
        "different-elements":
          "Die Aszendenten in {sign1} und {sign2} wirken durch die unterschiedlichen Elemente {element1} und {element2}. Ihre spontanen Reaktionen können verschieden sein, doch die Beziehung wird flexibler, wenn beide den natürlichen Stil des anderen respektieren.",
      },
    },
  },

  it: {
    text: {
      "Non précisé": "Non specificato",
      "Soleil et Soleil": "Sole e Sole",
      "Identité et expression": "Identità ed espressione",
      "Le Soleil représente la personnalité consciente, la vitalité, les ambitions et la manière de rayonner.":
        "Il Sole rappresenta la personalità consapevole, la vitalità, le ambizioni e il modo di esprimere la propria energia.",
      "Cette comparaison montre comment vos identités se reconnaissent, se soutiennent ou se stimulent.":
        "Questo confronto mostra come le vostre identità si riconoscono, si sostengono o si stimolano.",
      "Lune et Lune": "Luna e Luna",
      "Émotions et intimité": "Emozioni e intimità",
      "La Lune décrit les besoins affectifs, les habitudes émotionnelles et la manière de rechercher la sécurité.":
        "La Luna descrive i bisogni affettivi, le abitudini emotive e il modo di cercare sicurezza.",
      "Cette comparaison révèle la facilité avec laquelle vous comprenez et accueillez les émotions de l’autre.":
        "Questo confronto rivela quanto facilmente comprendete e accogliete le emozioni dell'altro.",
      "Ascendant et Ascendant": "Ascendente e Ascendente",
      "Rencontre et quotidien": "Incontro e quotidianità",
      "L’Ascendant représente la manière spontanée d’entrer en relation, de réagir et de se présenter au monde.":
        "L'Ascendente rappresenta il modo spontaneo di entrare in relazione, reagire e presentarsi al mondo.",
      "Cette comparaison montre comment vos rythmes, vos attitudes et vos comportements naturels s’accordent.":
        "Questo confronto mostra come i vostri ritmi, atteggiamenti e comportamenti naturali si armonizzano.",
      "Première personne": "Prima persona",
      "Deuxième personne": "Seconda persona",
      "Les données disponibles ne permettent pas encore de produire une comparaison entièrement personnalisée pour ce pilier.":
        "I dati disponibili non consentono ancora di produrre un confronto completamente personalizzato per questo pilastro.",
      "Votre dynamique": "La vostra dinamica",
      "Sur le plan personnel": "Sul piano personale",
      "Dans la relation": "Nella relazione",
      "Fondations relationnelles": "Fondamenti della relazione",
      "Les trois piliers de votre lien": "I tre pilastri del vostro legame",
      "Le Soleil, la Lune et l’Ascendant révèlent vos identités, vos besoins émotionnels et votre manière naturelle d’entrer en relation.":
        "Il Sole, la Luna e l'Ascendente rivelano le vostre identità, i bisogni emotivi e il vostro modo naturale di entrare in relazione.",
      "Votre fondation relationnelle": "Le fondamenta della vostra relazione",
      "Ces trois comparaisons offrent une première lecture de votre relation, mais elles ne suffisent pas à elles seules pour déterminer toute la compatibilité. Les interactions entre Mercure, Vénus, Mars, Saturne et les autres planètes préciseront ensuite la communication, l’attirance, la stabilité et les principaux défis de votre lien.":
        "Questi tre confronti offrono una prima lettura della vostra relazione, ma da soli non bastano a determinare l'intera compatibilità. Le interazioni tra Mercurio, Venere, Marte, Saturno e gli altri pianeti chiariranno poi la comunicazione, l'attrazione, la stabilità e le principali sfide del vostro legame.",
      "À retenir": "Da ricordare",
      "Une différence entre deux signes n’est pas nécessairement un obstacle. Elle peut devenir une véritable complémentarité lorsque chacun comprend et respecte la manière naturelle de fonctionner de l’autre.":
        "Una differenza tra due segni non è necessariamente un ostacolo. Può diventare una vera complementarità quando ciascuno comprende e rispetta il modo naturale di funzionare dell'altro.",
      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Rapporto di sinastria",
    },

    planets: {
      Sun: "Sole",
      Moon: "Luna",
      Ascendant: "Ascendente",
    },

    signs: {
      Bélier: "Ariete",
      Taureau: "Toro",
      Gémeaux: "Gemelli",
      Cancer: "Cancro",
      Lion: "Leone",
      Vierge: "Vergine",
      Balance: "Bilancia",
      Scorpion: "Scorpione",
      Sagittaire: "Sagittario",
      Capricorne: "Capricorno",
      Verseau: "Acquario",
      Poissons: "Pesci",
      Aries: "Ariete",
      Taurus: "Toro",
      Gemini: "Gemelli",
      Leo: "Leone",
      Virgo: "Vergine",
      Libra: "Bilancia",
      Scorpio: "Scorpione",
      Sagittarius: "Sagittario",
      Capricorn: "Capricorno",
      Aquarius: "Acquario",
      Pisces: "Pesci",
    },

    elements: {
      Feu: "Fuoco",
      Terre: "Terra",
      Air: "Aria",
      Eau: "Acqua",
    },

    inWord: "in",

    dynamic: {
      sun: {
        "same-sign":
          "I vostri due Soli in {sign1} condividono un modo simile di affermare l'identità e perseguire gli obiettivi. Questa familiarità può rafforzare il riconoscimento reciproco, purché ciascuno mantenga spazio sufficiente per esprimere la propria individualità.",
        "same-element":
          "I Soli in {sign1} e {sign2} appartengono allo stesso elemento, {element1}. Questa base comune favorisce una comprensione naturale delle vostre motivazioni, anche se ciascuno esprime tale energia in modo diverso.",
        "complementary-elements":
          "La vostra coppia solare riunisce {element1} e {element2}. Queste energie complementari possono creare un equilibrio interessante tra i vostri modi di agire, decidere e perseguire le vostre ambizioni.",
        "different-elements":
          "I Soli in {sign1} e {sign2} funzionano attraverso gli elementi diversi {element1} e {element2}. I vostri approcci non sono sempre immediatamente facili da comprendere, ma le differenze possono arricchire la relazione quando vengono rispettati i punti di forza di ciascuno.",
      },

      moon: {
        "same-sign":
          "Le vostre due Lune in {sign1} condividono riflessi emotivi e bisogni di sicurezza simili. Questa familiarità può creare un forte senso di riconoscimento emotivo, purché nessuno presuma che l'altro provi sempre esattamente le stesse emozioni.",
        "same-element":
          "Le Lune in {sign1} e {sign2} sono unite dall'elemento {element1}. I vostri mondi interiori condividono una base emotiva compatibile che può favorire fiducia, conforto e comprensione reciproca.",
        "complementary-elements":
          "Le Lune in {sign1} e {sign2} combinano gli elementi {element1} e {element2}. Queste sensibilità complementari possono sostenersi e creare un equilibrio emotivo in cui ciascuno offre una forma diversa di sicurezza.",
        "different-elements":
          "La Luna in {sign1} e la Luna in {sign2} non rispondono sempre alle emozioni nello stesso modo. Gli elementi {element1} e {element2} possono creare differenze di ritmo, ma possono anche insegnarvi a riconoscere bisogni diversi dai vostri.",
      },

      ascendant: {
        "same-sign":
          "La presenza dello stesso Ascendente in {sign1} crea un'affinità naturale nel vostro modo di comportarvi e affrontare la vita quotidiana. Potete riconoscere istintivamente il ritmo, le reazioni e i bisogni di adattamento dell'altro.",
        "same-element":
          "Gli Ascendenti in {sign1} e {sign2} condividono l'elemento {element1}. Le vostre reazioni esteriori e i modi di adattarvi si basano quindi su un'energia compatibile, anche se ogni segno la esprime diversamente.",
        "complementary-elements":
          "Gli Ascendenti in {sign1} e {sign2} combinano gli elementi {element1} e {element2}. Queste energie complementari possono aiutare i vostri diversi modi di reagire a sostenersi a vicenda nella vita quotidiana.",
        "different-elements":
          "Gli Ascendenti in {sign1} e {sign2} funzionano attraverso gli elementi diversi {element1} e {element2}. Le vostre reazioni spontanee possono differire, ma la relazione può diventare più flessibile quando ciascuno rispetta lo stile naturale dell'altro.",
      },
    },
  },

  pt: {
    text: {
      "Non précisé": "Não especificado",
      "Soleil et Soleil": "Sol e Sol",
      "Identité et expression": "Identidade e expressão",
      "Le Soleil représente la personnalité consciente, la vitalité, les ambitions et la manière de rayonner.":
        "O Sol representa a personalidade consciente, a vitalidade, as ambições e a forma de expressar a própria energia.",
      "Cette comparaison montre comment vos identités se reconnaissent, se soutiennent ou se stimulent.":
        "Esta comparação mostra como as suas identidades se reconhecem, se apoiam ou se estimulam.",
      "Lune et Lune": "Lua e Lua",
      "Émotions et intimité": "Emoções e intimidade",
      "La Lune décrit les besoins affectifs, les habitudes émotionnelles et la manière de rechercher la sécurité.":
        "A Lua descreve as necessidades afetivas, os hábitos emocionais e a forma de procurar segurança.",
      "Cette comparaison révèle la facilité avec laquelle vous comprenez et accueillez les émotions de l’autre.":
        "Esta comparação revela a facilidade com que compreendem e acolhem as emoções um do outro.",
      "Ascendant et Ascendant": "Ascendente e Ascendente",
      "Rencontre et quotidien": "Encontro e quotidiano",
      "L’Ascendant représente la manière spontanée d’entrer en relation, de réagir et de se présenter au monde.":
        "O Ascendente representa a forma espontânea de entrar em relação, reagir e apresentar-se ao mundo.",
      "Cette comparaison montre comment vos rythmes, vos attitudes et vos comportements naturels s’accordent.":
        "Esta comparação mostra como os seus ritmos, atitudes e comportamentos naturais se harmonizam.",
      "Première personne": "Primeira pessoa",
      "Deuxième personne": "Segunda pessoa",
      "Les données disponibles ne permettent pas encore de produire une comparaison entièrement personnalisée pour ce pilier.":
        "Os dados disponíveis ainda não permitem produzir uma comparação totalmente personalizada para este pilar.",
      "Votre dynamique": "A sua dinâmica",
      "Sur le plan personnel": "No plano pessoal",
      "Dans la relation": "Na relação",
      "Fondations relationnelles": "Fundamentos da relação",
      "Les trois piliers de votre lien": "Os três pilares da sua ligação",
      "Le Soleil, la Lune et l’Ascendant révèlent vos identités, vos besoins émotionnels et votre manière naturelle d’entrer en relation.":
        "O Sol, a Lua e o Ascendente revelam as suas identidades, necessidades emocionais e a sua forma natural de entrar em relação.",
      "Votre fondation relationnelle": "A base da sua relação",
      "Ces trois comparaisons offrent une première lecture de votre relation, mais elles ne suffisent pas à elles seules pour déterminer toute la compatibilité. Les interactions entre Mercure, Vénus, Mars, Saturne et les autres planètes préciseront ensuite la communication, l’attirance, la stabilité et les principaux défis de votre lien.":
        "Estas três comparações oferecem uma primeira leitura da sua relação, mas não são suficientes, por si só, para determinar toda a compatibilidade. As interações entre Mercúrio, Vênus, Marte, Saturno e os outros planetas irão depois esclarecer a comunicação, a atração, a estabilidade e os principais desafios da sua ligação.",
      "À retenir": "A reter",
      "Une différence entre deux signes n’est pas nécessairement un obstacle. Elle peut devenir une véritable complémentarité lorsque chacun comprend et respecte la manière naturelle de fonctionner de l’autre.":
        "Uma diferença entre dois signos não é necessariamente um obstáculo. Pode tornar-se uma verdadeira complementaridade quando cada pessoa compreende e respeita a forma natural de funcionar da outra.",
      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Relatório de sinastria",
    },

    planets: {
      Sun: "Sol",
      Moon: "Lua",
      Ascendant: "Ascendente",
    },

    signs: {
      Bélier: "Áries",
      Taureau: "Touro",
      Gémeaux: "Gêmeos",
      Cancer: "Câncer",
      Lion: "Leão",
      Vierge: "Virgem",
      Balance: "Libra",
      Scorpion: "Escorpião",
      Sagittaire: "Sagitário",
      Capricorne: "Capricórnio",
      Verseau: "Aquário",
      Poissons: "Peixes",
      Aries: "Áries",
      Taurus: "Touro",
      Gemini: "Gêmeos",
      Leo: "Leão",
      Virgo: "Virgem",
      Libra: "Libra",
      Scorpio: "Escorpião",
      Sagittarius: "Sagitário",
      Capricorn: "Capricórnio",
      Aquarius: "Aquário",
      Pisces: "Peixes",
    },

    elements: {
      Feu: "Fogo",
      Terre: "Terra",
      Air: "Ar",
      Eau: "Água",
    },

    inWord: "em",

    dynamic: {
      sun: {
        "same-sign":
          "Os seus dois Sóis em {sign1} partilham uma forma semelhante de afirmar a identidade e perseguir objetivos. Esta familiaridade pode reforçar o reconhecimento mútuo, desde que cada pessoa mantenha espaço suficiente para expressar a própria individualidade.",
        "same-element":
          "Os Sóis em {sign1} e {sign2} pertencem ao mesmo elemento, {element1}. Esta base comum favorece uma compreensão natural das suas motivações, embora cada pessoa expresse essa energia de forma diferente.",
        "complementary-elements":
          "A sua combinação solar reúne {element1} e {element2}. Estas energias complementares podem criar um equilíbrio interessante entre as suas formas de agir, decidir e perseguir as suas ambições.",
        "different-elements":
          "Os Sóis em {sign1} e {sign2} funcionam através dos elementos diferentes {element1} e {element2}. As suas abordagens nem sempre são imediatamente fáceis de compreender, mas as diferenças podem enriquecer a relação quando as forças de cada pessoa são respeitadas.",
      },

      moon: {
        "same-sign":
          "As suas duas Luas em {sign1} partilham reflexos emocionais e necessidades de segurança semelhantes. Esta familiaridade pode criar um forte sentimento de reconhecimento emocional, desde que ninguém pressuponha que o outro sente sempre exatamente o mesmo.",
        "same-element":
          "As Luas em {sign1} e {sign2} estão ligadas pelo elemento {element1}. Os seus mundos interiores partilham uma base emocional compatível que pode favorecer confiança, conforto e compreensão mútua.",
        "complementary-elements":
          "As Luas em {sign1} e {sign2} combinam os elementos {element1} e {element2}. Estas sensibilidades complementares podem apoiar-se e criar um equilíbrio emocional em que cada pessoa oferece uma forma diferente de segurança.",
        "different-elements":
          "A Lua em {sign1} e a Lua em {sign2} nem sempre respondem às emoções da mesma forma. Os elementos {element1} e {element2} podem criar diferenças de ritmo, mas também podem ensinar a reconhecer necessidades diferentes das suas.",
      },

      ascendant: {
        "same-sign":
          "A presença do mesmo Ascendente em {sign1} cria uma afinidade natural na forma como se comportam e abordam a vida quotidiana. Podem reconhecer instintivamente o ritmo, as reações e as necessidades de adaptação um do outro.",
        "same-element":
          "Os Ascendentes em {sign1} e {sign2} partilham o elemento {element1}. As suas reações exteriores e formas de adaptação apoiam-se, portanto, numa energia compatível, embora cada signo a expresse de forma diferente.",
        "complementary-elements":
          "Os Ascendentes em {sign1} e {sign2} combinam os elementos {element1} e {element2}. Estas energias complementares podem ajudar as suas diferentes formas de reagir a apoiarem-se mutuamente na vida quotidiana.",
        "different-elements":
          "Os Ascendentes em {sign1} e {sign2} funcionam através dos elementos diferentes {element1} e {element2}. As suas reações espontâneas podem diferir, mas a relação pode tornar-se mais flexível quando cada pessoa respeita o estilo natural da outra.",
      },
    },
  },
};

type Replacement = {
  start: number;
  end: number;
  value: string;
};

function normalizeVisibleText(
  value: string,
): string {
  return value
    .replace(/\s+/g, " ")
    .trim();
}

function applyReplacements(
  source: string,
  replacements: Replacement[],
): string {
  const sorted =
    [...replacements].sort(
      (a, b) =>
        b.start - a.start,
    );

  let output = source;

  for (
    const replacement
    of sorted
  ) {
    output =
      output.slice(
        0,
        replacement.start,
      ) +
      replacement.value +
      output.slice(
        replacement.end,
      );
  }

  return output;
}

function localizeCompleteLiterals(
  source: string,
  translations: Record<
    string,
    string
  >,
): string {
  const sourceFile =
    ts.createSourceFile(
      "CompatibilityPillars.tsx",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );

  const replacements:
    Replacement[] = [];

  const visit = (
    node: ts.Node,
  ): void => {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    ) {
      const exact =
        node.text;

      const normalized =
        normalizeVisibleText(
          exact,
        );

      const translated =
        translations[exact] ??
        translations[normalized];

      if (
        typeof translated ===
          "string" &&
        translated !== exact
      ) {
        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),

          end:
            node.getEnd(),

          value:
            JSON.stringify(
              translated,
            ),
        });
      }
    }

    if (
      ts.isJsxText(node)
    ) {
      const raw =
        node.getText(
          sourceFile,
        );

      const original =
        normalizeVisibleText(
          raw,
        );

      const translated =
        translations[original];

      if (
        typeof translated ===
          "string" &&
        translated !== original
      ) {
        const leading =
          raw.match(/^\s*/)?.[0] ??
          "";

        const trailing =
          raw.match(/\s*$/)?.[0] ??
          "";

        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),

          end:
            node.getEnd(),

          value:
            `{${JSON.stringify(
              `${leading}${translated}${trailing}`,
            )}}`,
        });
      }
    }

    ts.forEachChild(
      node,
      visit,
    );
  };

  visit(sourceFile);

  return applyReplacements(
    source,
    replacements,
  );
}

function buildHelpers(
  data: LocaleData,
): string {
  return `
const __PILLARS_PLANETS =
  ${JSON.stringify(
    data.planets,
    null,
    2,
  )} as Record<string, string>;

const __PILLARS_SIGNS =
  ${JSON.stringify(
    data.signs,
    null,
    2,
  )} as Record<string, string>;

const __PILLARS_ELEMENTS =
  ${JSON.stringify(
    data.elements,
    null,
    2,
  )} as Record<string, string>;

const __PILLARS_IN_WORD =
  ${JSON.stringify(
    data.inWord,
  )};

const __PILLARS_DYNAMIC =
  ${JSON.stringify(
    data.dynamic,
    null,
    2,
  )} as Record<
    string,
    Record<string, string>
  >;

function normalizePillarValue(
  value: string,
): string {
  return value
    .trim()
    .toLocaleLowerCase("fr")
    .normalize("NFD")
    .replace(/[\\u0300-\\u036f]/g, "");
}

function localizePillarPlanet(
  planet: string,
): string {
  return (
    __PILLARS_PLANETS[planet] ??
    planet
  );
}

function localizePillarSign(
  sign: string,
): string {
  const safeSign =
    typeof sign === "string"
      ? sign.trim()
      : "";

  return (
    __PILLARS_SIGNS[safeSign] ??
    safeSign
  );
}

function localizePillarElement(
  element: string,
): string {
  const safeElement =
    typeof element === "string"
      ? element.trim()
      : "";

  return (
    __PILLARS_ELEMENTS[
      safeElement
    ] ??
    safeElement
  );
}

function arePillarElementsComplementary(
  element1: string,
  element2: string,
): boolean {
  const pair = [
    normalizePillarValue(
      element1,
    ),
    normalizePillarValue(
      element2,
    ),
  ]
    .sort()
    .join("-");

  return (
    pair === "air-feu" ||
    pair === "eau-terre"
  );
}

function getPillarDynamicCategory(
  sign1: string,
  sign2: string,
  element1: string,
  element2: string,
): string {
  const safeSign1 =
    normalizePillarValue(
      sign1,
    );

  const safeSign2 =
    normalizePillarValue(
      sign2,
    );

  const safeElement1 =
    normalizePillarValue(
      element1,
    );

  const safeElement2 =
    normalizePillarValue(
      element2,
    );

  if (
    safeSign1 &&
    safeSign2 &&
    safeSign1 === safeSign2
  ) {
    return "same-sign";
  }

  if (
    safeElement1 &&
    safeElement2 &&
    safeElement1 ===
      safeElement2
  ) {
    return "same-element";
  }

  if (
    arePillarElementsComplementary(
      element1,
      element2,
    )
  ) {
    return "complementary-elements";
  }

  return "different-elements";
}

function fillPillarTemplate(
  template: string,
  values: Record<
    string,
    string
  >,
): string {
  let result = template;

  for (
    const [key, value]
    of Object.entries(values)
  ) {
    result =
      result
        .split(
          \`{\${key}}\`,
        )
        .join(value);
  }

  return result;
}

function getLocalizedPillarInterpretation({
  body,
  sign1,
  sign2,
  element1,
  element2,
}: {
  body: CompatibilityTextBody;
  sign1: string;
  sign2: string;
  element1: string;
  element2: string;
  seed?: string;
}): string {
  const safeBody =
    body === "sun" ||
    body === "moon" ||
    body === "ascendant"
      ? body
      : "sun";

  const category =
    getPillarDynamicCategory(
      sign1,
      sign2,
      element1,
      element2,
    );

  const template =
    __PILLARS_DYNAMIC[
      safeBody
    ]?.[category];

  if (!template) {
    return "";
  }

  return fillPillarTemplate(
    template,
    {
      sign1:
        localizePillarSign(
          sign1,
        ),

      sign2:
        localizePillarSign(
          sign2,
        ),

      element1:
        localizePillarElement(
          element1,
        ),

      element2:
        localizePillarElement(
          element2,
        ),
    },
  );
}

function getLocalizedPlacementLabel(
  pillar: PillarName,
  sign: string,
): string {
  const localizedSign =
    localizePillarSign(
      sign,
    );

  if (
    pillar === "Ascendant"
  ) {
    return \`\${localizePillarPlanet(
      "Ascendant",
    )} \${localizedSign}\`;
  }

  return \`\${localizePillarPlanet(
    pillar,
  )} \${__PILLARS_IN_WORD} \${localizedSign}\`;
}
`;
}

function injectHelpers(
  source: string,
  data: LocaleData,
): string {
  const marker =
    "function getPlacementLabel(";

  if (
    !source.includes(
      marker,
    )
  ) {
    return source;
  }

  return source.replace(
    marker,
    `${buildHelpers(
      data,
    )}\n${marker}`,
  );
}

function replaceTargetedCode(
  source: string,
): string {
  let localized = source;

  /*
   * Affichage des placements.
   */
  localized =
    localized.replace(
      /\{getPlacementLabel\(pillar\.key,\s*sign1\)\}/g,
      "{getLocalizedPlacementLabel(pillar.key, sign1)}",
    );

  localized =
    localized.replace(
      /\{getPlacementLabel\(pillar\.key,\s*sign2\)\}/g,
      "{getLocalizedPlacementLabel(pillar.key, sign2)}",
    );

  /*
   * IMPORTANT :
   * getCompatibilityPlanetText() retourne
   * les banques françaises.
   *
   * Dans les copies EN / ES / DE / IT / PT,
   * on remplace uniquement cet appel par
   * notre générateur localisé.
   *
   * Les calculs astrologiques restent basés
   * sur les signes et éléments source.
   */
  localized =
    localized.replace(
      /:\s*getCompatibilityPlanetText\(\{/g,
      ": getLocalizedPillarInterpretation({",
    );

  return localized;
}

export function localizeCompatibilityPillars(
  source: string,
  locale: PaidPdfLocale,
): string {
  /*
   * Français = source intacte.
   */
  if (
    locale === "fr"
  ) {
    return source;
  }

  const data =
    TRANSLATIONS[
      locale as NonFrenchLocale
    ];

  if (!data) {
    return source;
  }

  /*
   * 1. Traduction des chaînes fixes.
   */
  let localized =
    localizeCompleteLiterals(
      source,
      data.text,
    );

  /*
   * 2. Injection des helpers
   * multilingues.
   */
  localized =
    injectHelpers(
      localized,
      data,
    );

  /*
   * 3. Affichage localisé des
   * placements + remplacement du
   * générateur français des dynamiques.
   */
  localized =
    replaceTargetedCode(
      localized,
    );

  return localized;
}
