import type { Locale } from "@/i18n/config";

export type ElementKey = "Feu" | "Terre" | "Air" | "Eau";

type ElementTranslation = {
  labels: Record<ElementKey, string>;
  texts: Record<ElementKey, string>;
};

export const ELEMENT_TRANSLATIONS: Record<
  Locale,
  ElementTranslation
> = {
  fr: {
    labels: {
      Feu: "Feu",
      Terre: "Terre",
      Air: "Air",
      Eau: "Eau",
    },
    texts: {
      Feu: "Une dominante de Feu révèle une personnalité animée par l’élan, l’inspiration et le besoin d’agir. Vous avancez souvent avec passion, courage et spontanéité. Votre énergie vous pousse à entreprendre, à créer et à suivre ce qui vous enthousiasme profondément.",
      Terre: "Une dominante de Terre révèle une personnalité stable, réaliste et tournée vers la construction. Vous avez besoin de concret, de sécurité et de résultats durables. Votre force réside dans votre patience, votre sens pratique et votre capacité à bâtir avec constance.",
      Air: "Une dominante d’Air révèle une personnalité curieuse, communicative et intellectuelle. Vous avez besoin d’échanger, de comprendre et de relier les idées entre elles. Votre force réside dans votre ouverture d’esprit, votre capacité d’adaptation et votre aisance à communiquer.",
      Eau: "Une dominante d’Eau révèle une personnalité intuitive, sensible et profondément connectée aux émotions. Vous ressentez les ambiances avec intensité et comprenez souvent les autres au-delà des mots. Votre force réside dans votre empathie, votre imagination et votre profondeur intérieure.",
    },
  },
  en: {
    labels: {
      Feu: "Fire",
      Terre: "Earth",
      Air: "Air",
      Eau: "Water",
    },
    texts: {
      Feu: "A dominant Fire element reveals a personality driven by momentum, inspiration and the need to act. You often move forward with passion, courage and spontaneity. Your energy encourages you to take initiative, create and follow what truly excites you.",
      Terre: "A dominant Earth element reveals a stable, realistic personality focused on building something lasting. You need tangible results, security and durability. Your strength lies in patience, practicality and the ability to build steadily over time.",
      Air: "A dominant Air element reveals a curious, communicative and intellectual personality. You need to exchange ideas, understand and connect concepts. Your strength lies in open-mindedness, adaptability and ease of communication.",
      Eau: "A dominant Water element reveals an intuitive, sensitive personality deeply connected to emotions. You feel atmospheres intensely and often understand others beyond words. Your strength lies in empathy, imagination and inner depth.",
    },
  },
  es: {
    labels: {
      Feu: "Fuego",
      Terre: "Tierra",
      Air: "Aire",
      Eau: "Agua",
    },
    texts: {
      Feu: "Un elemento Fuego dominante revela una personalidad impulsada por el entusiasmo, la inspiración y la necesidad de actuar. Sueles avanzar con pasión, valentía y espontaneidad. Tu energía te impulsa a emprender, crear y seguir aquello que realmente te entusiasma.",
      Terre: "Un elemento Tierra dominante revela una personalidad estable, realista y orientada a construir. Necesitas resultados concretos, seguridad y estabilidad duradera. Tu fuerza reside en la paciencia, el sentido práctico y la capacidad de construir con constancia.",
      Air: "Un elemento Aire dominante revela una personalidad curiosa, comunicativa e intelectual. Necesitas intercambiar ideas, comprender y relacionar conceptos. Tu fuerza reside en la apertura mental, la adaptabilidad y la facilidad para comunicarte.",
      Eau: "Un elemento Agua dominante revela una personalidad intuitiva, sensible y profundamente conectada con las emociones. Percibes los ambientes con intensidad y a menudo comprendes a los demás más allá de las palabras. Tu fuerza reside en la empatía, la imaginación y la profundidad interior.",
    },
  },
  de: {
    labels: {
      Feu: "Feuer",
      Terre: "Erde",
      Air: "Luft",
      Eau: "Wasser",
    },
    texts: {
      Feu: "Ein dominantes Feuerelement weist auf eine Persönlichkeit hin, die von Tatendrang, Inspiration und dem Bedürfnis zu handeln geprägt ist. Du gehst häufig mit Leidenschaft, Mut und Spontaneität voran. Deine Energie ermutigt dich, Initiative zu ergreifen, kreativ zu sein und dem zu folgen, was dich wirklich begeistert.",
      Terre: "Ein dominantes Erdelement weist auf eine stabile, realistische und auf Aufbau ausgerichtete Persönlichkeit hin. Du brauchst greifbare Ergebnisse, Sicherheit und Beständigkeit. Deine Stärke liegt in Geduld, praktischem Denken und der Fähigkeit, Schritt für Schritt etwas Dauerhaftes aufzubauen.",
      Air: "Ein dominantes Luftelement weist auf eine neugierige, kommunikative und intellektuelle Persönlichkeit hin. Du möchtest dich austauschen, verstehen und Ideen miteinander verbinden. Deine Stärke liegt in Offenheit, Anpassungsfähigkeit und leichter Kommunikation.",
      Eau: "Ein dominantes Wasserelement weist auf eine intuitive, sensible und tief mit Gefühlen verbundene Persönlichkeit hin. Du nimmst Stimmungen intensiv wahr und verstehst andere oft jenseits von Worten. Deine Stärke liegt in Empathie, Vorstellungskraft und innerer Tiefe.",
    },
  },
  it: {
    labels: {
      Feu: "Fuoco",
      Terre: "Terra",
      Air: "Aria",
      Eau: "Acqua",
    },
    texts: {
      Feu: "Una forte predominanza dell’elemento Fuoco rivela una personalità guidata dallo slancio, dall’ispirazione e dal bisogno di agire. Avanzi spesso con passione, coraggio e spontaneità. La tua energia ti spinge a prendere iniziativa, creare e seguire ciò che ti entusiasma davvero.",
      Terre: "Una forte predominanza dell’elemento Terra rivela una personalità stabile, realista e orientata alla costruzione. Hai bisogno di risultati concreti, sicurezza e stabilità duratura. La tua forza risiede nella pazienza, nel senso pratico e nella capacità di costruire con costanza.",
      Air: "Una forte predominanza dell’elemento Aria rivela una personalità curiosa, comunicativa e intellettuale. Hai bisogno di scambiare idee, comprendere e collegare concetti. La tua forza risiede nell’apertura mentale, nell’adattabilità e nella facilità di comunicazione.",
      Eau: "Una forte predominanza dell’elemento Acqua rivela una personalità intuitiva, sensibile e profondamente connessa alle emozioni. Percepisci intensamente le atmosfere e spesso comprendi gli altri al di là delle parole. La tua forza risiede nell’empatia, nell’immaginazione e nella profondità interiore.",
    },
  },
  pt: {
    labels: {
      Feu: "Fogo",
      Terre: "Terra",
      Air: "Ar",
      Eau: "Água",
    },
    texts: {
      Feu: "Uma predominância do elemento Fogo revela uma personalidade movida pelo impulso, pela inspiração e pela necessidade de agir. Você costuma avançar com paixão, coragem e espontaneidade. Sua energia o incentiva a tomar iniciativas, criar e seguir aquilo que realmente o entusiasma.",
      Terre: "Uma predominância do elemento Terra revela uma personalidade estável, realista e voltada para a construção. Você precisa de resultados concretos, segurança e estabilidade duradoura. Sua força está na paciência, no senso prático e na capacidade de construir com constância.",
      Air: "Uma predominância do elemento Ar revela uma personalidade curiosa, comunicativa e intelectual. Você precisa trocar ideias, compreender e conectar conceitos. Sua força está na abertura mental, na adaptabilidade e na facilidade de comunicação.",
      Eau: "Uma predominância do elemento Água revela uma personalidade intuitiva, sensível e profundamente conectada às emoções. Você percebe os ambientes com intensidade e muitas vezes compreende os outros para além das palavras. Sua força está na empatia, na imaginação e na profundidade interior.",
    },
  },
};
