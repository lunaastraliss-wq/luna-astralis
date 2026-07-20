"use client";

import { PDFViewer } from "@react-pdf/renderer";

import HoroscopePdf from "@/components/HoroscopePdf/HoroscopePdf";

const identity = {
  firstName: "Martine",
  zodiacSign: "scorpion" as const,
  zodiacSignLabel: "Scorpion",
  birthDate: "17/11/1970",
  birthTime: "21:36",
  birthCity: "Québec",
  birthCountry: "Canada",
};

const period = {
  type: "day" as const,
  label: "20 juillet 2026",
  startDate: "2026-07-20",
  endDate: "2026-07-20",
};

const content = {
  reportTitle: "Votre horoscope du jour",
  reportSubtitle: "Scorpion — 20 juillet 2026",

  welcomeText:
    "Bienvenue dans votre horoscope personnalisé. Cette lecture vous accompagne à travers les principales énergies de votre journée.",

  openingQuote:
    "Votre intuition reconnaît souvent le chemin avant même que votre esprit ne le comprenne.",

  summary: {
    title: "Vue d’ensemble",
    introduction:
      "Cette journée favorise l’introspection, les décisions réfléchies et les échanges sincères.",
    text:
      "Vous pourriez ressentir le besoin de ralentir afin de mieux comprendre ce qui se joue autour de vous. Votre sens de l’observation sera particulièrement développé. Prenez le temps de distinguer les véritables priorités des distractions passagères.",
    advice:
      "Faites confiance à votre intuition, tout en vérifiant les faits avant de prendre une décision importante.",
    score: 82,
    highlights: [
      "Intuition renforcée",
      "Décisions importantes",
      "Besoin de calme",
    ],
  },

  energy: {
    title: "Énergie générale",
    introduction:
      "Votre énergie progresse lentement, mais elle devient plus stable au fil de la journée.",
    text:
      "Le matin pourrait être marqué par une certaine retenue. En avançant dans la journée, vous retrouverez davantage de concentration et de motivation. Évitez toutefois de vouloir tout accomplir en même temps.",
    advice:
      "Concentrez-vous sur une seule priorité à la fois.",
    score: 78,
    highlights: [
      "Progression constante",
      "Concentration",
      "Rythme modéré",
    ],
  },

  planetaryIntroduction:
    "Les influences planétaires de la journée soutiennent votre intuition, votre profondeur émotionnelle et votre capacité à transformer une situation.",

  planetaryInfluences: [
    {
      planet: "Soleil",
      sign: "Cancer",
      title: "Une lumière sur vos émotions",
      description:
        "Le Soleil met l’accent sur votre monde intérieur et sur vos besoins de sécurité émotionnelle.",
      advice:
        "Accueillez vos émotions sans les laisser diriger toutes vos décisions.",
    },
    {
      planet: "Lune",
      sign: "Balance",
      title: "Retrouver l’équilibre",
      description:
        "La Lune vous invite à calmer les tensions et à chercher un terrain d’entente.",
      advice:
        "Choisissez le dialogue plutôt que le silence prolongé.",
    },
    {
      planet: "Mars",
      sign: "Gémeaux",
      aspect: "Trigone",
      title: "Une action plus stratégique",
      description:
        "Mars stimule votre rapidité d’esprit et votre capacité à agir avec souplesse.",
      advice:
        "Évitez la dispersion et terminez ce que vous commencez.",
    },
  ],

  love: {
    title: "Amour",
    introduction:
      "Les sentiments gagnent en intensité, mais demandent davantage de clarté.",
    text:
      "En couple, une discussion sincère pourrait permettre de dissiper un doute ou une incompréhension. Célibataire, vous pourriez être attirée par une personne mystérieuse ou difficile à cerner.",
    advice:
      "Exprimez ce que vous ressentez sans tester inutilement les réactions de l’autre.",
    score: 84,
    highlights: [
      "Sincérité",
      "Rapprochement",
      "Émotions profondes",
    ],
  },

  career: {
    title: "Travail et carrière",
    introduction:
      "Votre sens stratégique vous aide à voir ce que les autres ne remarquent pas encore.",
    text:
      "Une situation professionnelle pourrait demander de la discrétion et de la patience. Vous aurez intérêt à observer avant d’intervenir. Une idée qui semblait secondaire pourrait devenir très utile.",
    advice:
      "Préparez vos arguments avant de présenter votre point de vue.",
    score: 81,
    highlights: [
      "Stratégie",
      "Observation",
      "Préparation",
    ],
  },

  money: {
    title: "Finances",
    introduction:
      "La prudence reste votre meilleur avantage aujourd’hui.",
    text:
      "Vous pourriez être tentée de régler rapidement une dépense ou de prendre une décision financière immédiate. Prenez le temps de vérifier les détails et de comparer les options disponibles.",
    advice:
      "Évitez les achats impulsifs et conservez une marge de sécurité.",
    score: 72,
    highlights: [
      "Prudence",
      "Vérification",
      "Gestion",
    ],
  },

  health: {
    title: "Bien-être",
    introduction:
      "Votre corps pourrait réclamer davantage de récupération.",
    text:
      "Une fatigue accumulée peut se faire sentir si vous avez été très active récemment. Le mouvement reste bénéfique, mais votre rythme doit demeurer réaliste.",
    advice:
      "Alternez activité, hydratation et moments de repos.",
    score: 76,
    highlights: [
      "Repos",
      "Hydratation",
      "Équilibre",
    ],
  },

  social: {
    title: "Vie sociale",
    introduction:
      "Vous recherchez aujourd’hui des échanges vrais plutôt que nombreux.",
    text:
      "Vous pourriez vous sentir plus sélective dans vos interactions. Une conversation profonde vous apportera davantage qu’une succession d’échanges superficiels.",
    advice:
      "Restez proche des personnes avec lesquelles vous pouvez être entièrement vous-même.",
    score: 79,
    highlights: [
      "Authenticité",
      "Sélection",
      "Profondeur",
    ],
  },

  challengesIntroduction:
    "Certains défis pourraient tester votre patience et votre capacité à lâcher prise.",

  challenges: [
    {
      title: "Ne pas tout contrôler",
      theme: "Lâcher-prise",
      description:
        "Vous pourriez vouloir anticiper chaque réaction ou chaque résultat.",
      advice:
        "Concentrez-vous sur ce que vous pouvez réellement influencer.",
    },
    {
      title: "Éviter les suppositions",
      theme: "Communication",
      description:
        "Une attitude ou un silence pourrait être interprété trop rapidement.",
      advice:
        "Posez une question claire avant de tirer une conclusion.",
    },
  ],

  opportunitiesIntroduction:
    "Cette journée peut ouvrir une porte intéressante si vous restez attentive aux signes concrets.",

  opportunities: [
    {
      title: "Clarifier une situation",
      theme: "Décision",
      description:
        "Une information nouvelle pourrait vous aider à mieux comprendre une situation confuse.",
      action:
        "Notez les faits et prenez votre décision lorsque vous aurez une vision complète.",
    },
    {
      title: "Renforcer un lien",
      theme: "Relation",
      description:
        "Une conversation sincère peut créer un rapprochement inattendu.",
      action:
        "Exprimez une pensée que vous gardez pour vous depuis quelque temps.",
    },
  ],

  timeline: [
    {
      period: "morning" as const,
      title: "Matin",
      text:
        "Commencez lentement et évitez de vous laisser envahir par les urgences des autres.",
      score: 72,
    },
    {
      period: "afternoon" as const,
      title: "Après-midi",
      text:
        "Votre concentration augmente et vous permet de régler une situation importante.",
      score: 84,
    },
    {
      period: "evening" as const,
      title: "Soirée",
      text:
        "Un moment calme favorisera la détente, l’introspection et les échanges sincères.",
      score: 88,
    },
  ],

  lucky: {
    introduction:
      "Ces éléments symboliques peuvent accompagner votre journée.",
    numbers: [3, 8, 17, 22, 31, 44],
    color: "Bordeaux",
    day: "Lundi",
    stone: "Obsidienne",
    element: "Eau",
    planet: "Pluton",
    time: "21 h 36",
    quote:
      "Ce qui se transforme en vous prépare la prochaine étape.",
    keyword: "Transformation",
  },

  scores: {
    energy: 78,
    love: 84,
    career: 81,
    money: 72,
    health: 76,
    social: 79,
  },

  conclusionTitle: "Votre message du jour",

  conclusion:
    "Cette journée vous invite à avancer avec calme, profondeur et discernement. Vous n’avez pas besoin de tout régler immédiatement. Certaines réponses apparaîtront lorsque vous cesserez de les forcer.",

  finalMessage:
    "Votre force aujourd’hui réside dans votre capacité à observer, comprendre et agir au bon moment.",
};

export default function PdfHoroscopeViewer() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        backgroundColor: "#081020",
        overflow: "hidden",
      }}
    >
      <PDFViewer
        width="100%"
        height="100%"
        style={{
          border: "none",
        }}
        showToolbar
      >
        <HoroscopePdf
          identity={identity}
          period={period}
          content={content}
        />
      </PDFViewer>
    </main>
  );
}
