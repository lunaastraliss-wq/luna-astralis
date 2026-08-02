import type { Locale } from "@/i18n/config";

export type ModalityKey = "Cardinal" | "Fixe" | "Mutable";

type ModalityTranslation = {
  labels: Record<ModalityKey, string>;
  texts: Record<ModalityKey, string>;
};

export const MODALITY_TRANSLATIONS: Record<
  Locale,
  ModalityTranslation
> = {
  fr: {
    labels: {
      Cardinal: "Cardinal",
      Fixe: "Fixe",
      Mutable: "Mutable",
    },
    texts: {
      Cardinal: "Une dominante Cardinal révèle une personnalité qui initie, provoque le mouvement et aime ouvrir de nouveaux chemins. Vous possédez une énergie de départ, une capacité à lancer les choses et à agir lorsque la situation demande une impulsion claire.",
      Fixe: "Une dominante Fixe révèle une personnalité persévérante, loyale et capable de maintenir ses efforts dans le temps. Vous avez besoin de stabilité et de profondeur. Votre force réside dans votre endurance, votre fidélité et votre capacité à aller jusqu’au bout.",
      Mutable: "Une dominante Mutable révèle une personnalité adaptable, souple et capable d’évoluer avec les circonstances. Vous savez vous ajuster, apprendre et accompagner les transitions. Votre force réside dans votre flexibilité, votre ouverture et votre capacité à comprendre plusieurs réalités.",
    },
  },
  en: {
    labels: {
      Cardinal: "Cardinal",
      Fixe: "Fixed",
      Mutable: "Mutable",
    },
    texts: {
      Cardinal: "A dominant Cardinal modality reveals a personality that initiates action, creates movement and enjoys opening new paths. You possess strong starting energy, an ability to launch projects and the confidence to act when a situation needs clear momentum.",
      Fixe: "A dominant Fixed modality reveals a persistent, loyal personality capable of sustaining effort over time. You need stability and depth. Your strength lies in endurance, loyalty and the ability to follow through.",
      Mutable: "A dominant Mutable modality reveals an adaptable, flexible personality able to evolve with changing circumstances. You know how to adjust, learn and navigate transitions. Your strength lies in flexibility, openness and the ability to understand multiple perspectives.",
    },
  },
  es: {
    labels: {
      Cardinal: "Cardinal",
      Fixe: "Fija",
      Mutable: "Mutable",
    },
    texts: {
      Cardinal: "Una modalidad Cardinal dominante revela una personalidad que toma la iniciativa, genera movimiento y disfruta abriendo nuevos caminos. Posees una gran energía inicial, capacidad para poner proyectos en marcha y decisión para actuar cuando la situación necesita un impulso claro.",
      Fixe: "Una modalidad Fija dominante revela una personalidad perseverante, leal y capaz de mantener sus esfuerzos a lo largo del tiempo. Necesitas estabilidad y profundidad. Tu fuerza reside en la resistencia, la fidelidad y la capacidad de llegar hasta el final.",
      Mutable: "Una modalidad Mutable dominante revela una personalidad adaptable, flexible y capaz de evolucionar con las circunstancias. Sabes ajustarte, aprender y acompañar las transiciones. Tu fuerza reside en la flexibilidad, la apertura y la capacidad de comprender distintas perspectivas.",
    },
  },
  de: {
    labels: {
      Cardinal: "Kardinal",
      Fixe: "Fix",
      Mutable: "Veränderlich",
    },
    texts: {
      Cardinal: "Eine dominante kardinale Qualität weist auf eine Persönlichkeit hin, die Initiative ergreift, Bewegung auslöst und gerne neue Wege eröffnet. Du besitzt starke Anfangsenergie, kannst Dinge in Gang bringen und handelst entschlossen, wenn eine Situation einen klaren Impuls braucht.",
      Fixe: "Eine dominante fixe Qualität weist auf eine ausdauernde, loyale Persönlichkeit hin, die ihre Anstrengungen langfristig aufrechterhalten kann. Du brauchst Stabilität und Tiefe. Deine Stärke liegt in Ausdauer, Treue und der Fähigkeit, etwas konsequent zu Ende zu führen.",
      Mutable: "Eine dominante veränderliche Qualität weist auf eine anpassungsfähige, flexible Persönlichkeit hin, die sich mit den Umständen weiterentwickeln kann. Du kannst dich gut einstellen, lernen und Übergänge begleiten. Deine Stärke liegt in Flexibilität, Offenheit und dem Verständnis verschiedener Perspektiven.",
    },
  },
  it: {
    labels: {
      Cardinal: "Cardinale",
      Fixe: "Fissa",
      Mutable: "Mutevole",
    },
    texts: {
      Cardinal: "Una modalità Cardinale dominante rivela una personalità che prende iniziativa, crea movimento e ama aprire nuove strade. Possiedi una forte energia iniziale, la capacità di avviare progetti e la determinazione ad agire quando una situazione richiede un impulso chiaro.",
      Fixe: "Una modalità Fissa dominante rivela una personalità perseverante, leale e capace di mantenere l’impegno nel tempo. Hai bisogno di stabilità e profondità. La tua forza risiede nella resistenza, nella fedeltà e nella capacità di portare le cose fino in fondo.",
      Mutable: "Una modalità Mutevole dominante rivela una personalità adattabile, flessibile e capace di evolvere con le circostanze. Sai adeguarti, imparare e affrontare le transizioni. La tua forza risiede nella flessibilità, nell’apertura e nella capacità di comprendere prospettive diverse.",
    },
  },
  pt: {
    labels: {
      Cardinal: "Cardinal",
      Fixe: "Fixa",
      Mutable: "Mutável",
    },
    texts: {
      Cardinal: "Uma modalidade Cardinal dominante revela uma personalidade que toma iniciativa, gera movimento e gosta de abrir novos caminhos. Você possui forte energia inicial, capacidade de colocar projetos em andamento e determinação para agir quando a situação exige um impulso claro.",
      Fixe: "Uma modalidade Fixa dominante revela uma personalidade perseverante, leal e capaz de manter seus esforços ao longo do tempo. Você precisa de estabilidade e profundidade. Sua força está na resistência, na fidelidade e na capacidade de ir até o fim.",
      Mutable: "Uma modalidade Mutável dominante revela uma personalidade adaptável, flexível e capaz de evoluir com as circunstâncias. Você sabe se ajustar, aprender e atravessar transições. Sua força está na flexibilidade, na abertura e na capacidade de compreender diferentes perspectivas.",
    },
  },
};
