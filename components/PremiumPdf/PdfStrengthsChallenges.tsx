import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type {
  PremiumPdfSummaryProps,
  PremiumPlanet,
} from "./PremiumPdfTypes";

import {
  MAIN_PLANETS,
  PLANET_NAMES,
} from "./PremiumPdfUtils";

import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

type ElementName =
  | "Feu"
  | "Terre"
  | "Air"
  | "Eau";

type ModalityName =
  | "Cardinal"
  | "Fixe"
  | "Mutable";

type ThemeProfile = {
  dominantElement: ElementName | null;
  weakestElement: ElementName | null;
  dominantModality: ModalityName | null;
  weakestModality: ModalityName | null;
  retrogradeCount: number;
  angularPlanetNames: string[];
  sunSign: string;
  moonSign: string;
};

type InsightCard = {
  title: string;
  text: string;
  tag: string;
};

const SIGN_ELEMENTS: Record<string, ElementName> = {
  Aries: "Feu",
  Leo: "Feu",
  Sagittarius: "Feu",
  Bélier: "Feu",
  Lion: "Feu",
  Sagittaire: "Feu",

  Taurus: "Terre",
  Virgo: "Terre",
  Capricorn: "Terre",
  Taureau: "Terre",
  Vierge: "Terre",
  Capricorne: "Terre",

  Gemini: "Air",
  Libra: "Air",
  Aquarius: "Air",
  Gémeaux: "Air",
  Balance: "Air",
  Verseau: "Air",

  Cancer: "Eau",
  Scorpio: "Eau",
  Pisces: "Eau",
  Scorpion: "Eau",
  Poissons: "Eau",
};

const SIGN_MODALITIES: Record<
  string,
  ModalityName
> = {
  Aries: "Cardinal",
  Cancer: "Cardinal",
  Libra: "Cardinal",
  Capricorn: "Cardinal",
  Bélier: "Cardinal",
  Balance: "Cardinal",
  Capricorne: "Cardinal",

  Taurus: "Fixe",
  Leo: "Fixe",
  Scorpio: "Fixe",
  Aquarius: "Fixe",
  Taureau: "Fixe",
  Lion: "Fixe",
  Scorpion: "Fixe",
  Verseau: "Fixe",

  Gemini: "Mutable",
  Virgo: "Mutable",
  Sagittarius: "Mutable",
  Pisces: "Mutable",
  Gémeaux: "Mutable",
  Vierge: "Mutable",
  Sagittaire: "Mutable",
  Poissons: "Mutable",
};

const ELEMENT_STRENGTHS: Record<
  ElementName,
  string
> = {
  Feu:
    "Vous possédez une capacité naturelle à initier, encourager et mobiliser. Votre enthousiasme peut devenir contagieux et vous aide à retrouver rapidement une direction lorsqu’un projet vous inspire.",

  Terre:
    "Vous savez donner une forme concrète aux idées. Votre réalisme, votre constance et votre sens de l’organisation favorisent les réalisations solides et les décisions durables.",

  Air:
    "Vous comprenez rapidement les liens entre les idées et les personnes. Votre souplesse intellectuelle, votre curiosité et votre aisance à communiquer constituent des ressources importantes.",

  Eau:
    "Votre sensibilité vous permet de percevoir ce qui n’est pas toujours exprimé. Votre intuition, votre profondeur émotionnelle et votre capacité d’empathie enrichissent vos relations et vos choix.",
};

const ELEMENT_CHALLENGES: Record<
  ElementName,
  string
> = {
  Feu:
    "Une énergie de Feu très forte peut pousser à agir avant d’avoir mesuré toutes les conséquences. Le défi consiste à conserver l’élan tout en développant la patience, l’écoute et la régularité.",

  Terre:
    "Une dominante de Terre peut rendre les changements plus difficiles lorsqu’ils menacent vos repères. Votre évolution demande parfois d’accepter l’incertitude et de laisser davantage de place à l’improvisation.",

  Air:
    "Une forte énergie d’Air peut entraîner une tendance à analyser longtemps ou à vous éloigner des émotions concrètes. Le défi consiste à transformer les idées en décisions et à rester présente à votre ressenti.",

  Eau:
    "Une sensibilité très développée peut vous rendre plus perméable aux ambiances et aux émotions des autres. Votre équilibre passe par des limites claires et par une meilleure distinction entre intuition et inquiétude.",
};

const MISSING_ELEMENT_TEXTS: Record<
  ElementName,
  string
> = {
  Feu:
    "Le Feu est moins présent. Vous pourriez parfois hésiter à prendre l’initiative ou attendre une certitude complète avant d’agir. Développer l’audace, le mouvement et la confiance spontanée peut rééquilibrer votre thème.",

  Terre:
    "La Terre est moins présente. Il peut être plus difficile de maintenir une routine, de gérer les détails ou de concrétiser certaines idées. Les méthodes simples, les échéanciers et les repères pratiques vous soutiennent.",

  Air:
    "L’Air est moins présent. Vous pourriez privilégier l’action ou l’émotion sans toujours prendre le recul nécessaire. Mettre vos pensées en mots et rechercher plusieurs points de vue peut améliorer votre discernement.",

  Eau:
    "L’Eau est moins présente. Vous pouvez parfois intellectualiser vos émotions ou vous concentrer rapidement sur les solutions. Accorder du temps au ressenti et à l’écoute intérieure favorise une meilleure intégration émotionnelle.",
};

const MODALITY_STRENGTHS: Record<
  ModalityName,
  string
> = {
  Cardinal:
    "Votre capacité à commencer, décider et provoquer le mouvement constitue une force majeure. Vous savez reconnaître rapidement le moment où une nouvelle direction devient nécessaire.",

  Fixe:
    "Votre endurance vous permet de rester fidèle à un objectif et de traverser les périodes exigeantes. Vous possédez une grande capacité de concentration et de consolidation.",

  Mutable:
    "Votre adaptabilité vous aide à évoluer dans des contextes variés. Vous savez ajuster vos méthodes, apprendre de l’expérience et comprendre plusieurs dimensions d’une même situation.",
};

const MODALITY_CHALLENGES: Record<
  ModalityName,
  string
> = {
  Cardinal:
    "Votre désir d’avancer peut vous conduire à ouvrir plusieurs voies sans toujours les terminer. Le défi consiste à maintenir l’engagement une fois l’élan initial passé.",

  Fixe:
    "Votre persévérance peut parfois devenir rigidité ou attachement à une position connue. L’évolution demande de reconnaître le moment où conserver devient moins utile que transformer.",

  Mutable:
    "Votre souplesse peut vous amener à modifier souvent votre direction ou à vous disperser. Le défi consiste à choisir vos priorités et à préserver une continuité.",
};

const PLANET_STRENGTHS: Record<
  string,
  string
> = {
  Sun:
    "Vous pouvez développer une forte conscience de votre identité et une capacité à rayonner lorsque vos actions correspondent à vos valeurs profondes.",

  Moon:
    "Votre intelligence émotionnelle et votre capacité à comprendre les besoins humains peuvent devenir des ressources essentielles.",

  Mercury:
    "Votre esprit d’analyse, votre curiosité et votre manière de communiquer vous permettent de créer des liens et de trouver des solutions.",

  Venus:
    "Votre sens de l’harmonie, des valeurs et des relations favorise la coopération et la création d’un environnement agréable.",

  Mars:
    "Votre courage, votre volonté et votre énergie d’action vous aident à défendre vos objectifs et à surmonter les obstacles.",

  Jupiter:
    "Votre capacité à voir plus grand, à apprendre et à transmettre soutient votre croissance et votre confiance.",

  Saturn:
    "Votre sens des responsabilités, votre endurance et votre discipline vous permettent de construire sur le long terme.",

  Uranus:
    "Votre originalité et votre indépendance vous donnent la capacité d’introduire des changements utiles et novateurs.",

  Neptune:
    "Votre imagination, votre intuition et votre réceptivité nourrissent votre créativité et votre compréhension subtile.",

  Pluto:
    "Votre profondeur et votre capacité de régénération vous permettent de transformer les crises en nouvelles forces.",
};

const PLANET_CHALLENGES: Record<
  string,
  string
> = {
  Sun:
    "Le besoin d’être reconnue peut parfois vous rendre plus sensible au regard extérieur. Votre défi est de conserver votre centre, même sans validation immédiate.",

  Moon:
    "Les réactions émotionnelles peuvent parfois prendre beaucoup de place. Apprendre à nommer vos besoins avant d’agir favorise un meilleur équilibre.",

  Mercury:
    "Une activité mentale intense peut provoquer la dispersion ou la suranalyse. Votre défi est de distinguer la réflexion utile de la rumination.",

  Venus:
    "Le désir d’harmonie peut vous pousser à éviter certaines confrontations nécessaires. Des limites claires protègent la qualité de vos relations.",

  Mars:
    "Votre énergie peut devenir impatience ou tension lorsqu’elle ne trouve pas une direction précise. L’action consciente est plus constructive que la réaction immédiate.",

  Jupiter:
    "L’optimisme peut parfois conduire à surestimer les possibilités. Votre croissance devient plus solide lorsque l’enthousiasme s’accompagne de réalisme.",

  Saturn:
    "La prudence et le sens du devoir peuvent devenir lourds lorsque vous exigez trop de vous-même. Votre défi est d’intégrer la souplesse à la discipline.",

  Uranus:
    "Le besoin de liberté peut provoquer des ruptures rapides ou une résistance aux contraintes. L’indépendance gagne en puissance lorsqu’elle reste consciente de ses conséquences.",

  Neptune:
    "L’intuition et l’idéal peuvent parfois brouiller les limites ou favoriser les projections. La clarté concrète protège votre sensibilité.",

  Pluto:
    "L’intensité peut vous amener à vouloir contrôler certaines situations. Votre transformation passe par l’acceptation de ce qui doit évoluer.",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 38,
    paddingBottom: 48,
    paddingHorizontal: 46,
    backgroundColor: "#0b1124",
    color: "#fff8e7",
    fontFamily: "Helvetica",
  },

  content: {
    flexGrow: 1,
  },

  badge: {
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 14,
    marginTop: 3,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#b88b3f",
    backgroundColor: "#111a34",
  },

  badgeText: {
    color: "#f4c95d",
    fontSize: 8,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },

  title: {
    color: "#fff8e7",
    fontSize: 21,
    textAlign: "center",
    marginBottom: 8,
  },

  intro: {
    color: "#c8c1b3",
    fontSize: 9.5,
    lineHeight: 1.55,
    textAlign: "center",
    marginBottom: 18,
    paddingHorizontal: 12,
  },

  sectionTitle: {
    color: "#f4c95d",
    fontSize: 12,
    marginBottom: 10,
    textAlign: "center",
  },

  card: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 11,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 7,
  },

  cardTitle: {
    color: "#fff8e7",
    fontSize: 10.5,
  },

  cardTag: {
    color: "#f4c95d",
    fontSize: 7.2,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },

  cardText: {
    color: "#e9e4d8",
    fontSize: 8.9,
    lineHeight: 1.52,
  },

  twoColumns: {
    flexDirection: "row",
    marginBottom: 12,
  },

  columnLeft: {
    width: "49%",
    marginRight: "2%",
  },

  columnRight: {
    width: "49%",
  },

  smallCard: {
    minHeight: 135,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  smallCardTitle: {
    color: "#f4c95d",
    fontSize: 10.2,
    textAlign: "center",
    marginBottom: 8,
  },

  smallCardText: {
    color: "#e9e4d8",
    fontSize: 8.6,
    lineHeight: 1.5,
    textAlign: "center",
  },

  angularCard: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: "#161f3d",
    borderWidth: 1,
    borderColor: "#b88b3f",
  },

  angularTitle: {
    color: "#f4c95d",
    fontSize: 10.8,
    marginBottom: 7,
    textAlign: "center",
  },

  angularText: {
    color: "#e9e4d8",
    fontSize: 8.9,
    lineHeight: 1.52,
    textAlign: "center",
  },

  synthesisCard: {
    paddingVertical: 17,
    paddingHorizontal: 19,
    marginTop: 4,
    backgroundColor: "#161f3d",
    borderWidth: 1,
    borderColor: "#b88b3f",
  },

  synthesisTitle: {
    color: "#f4c95d",
    fontSize: 11.5,
    textAlign: "center",
    marginBottom: 8,
  },

  synthesisText: {
    color: "#e9e4d8",
    fontSize: 9.1,
    lineHeight: 1.58,
    textAlign: "center",
  },
});

function normalizeDifference(
  value: number
): number {
  const normalized =
    ((value % 360) + 360) % 360;

  return normalized > 180
    ? normalized - 360
    : normalized;
}

function isValidMainPlanet(
  planet: PremiumPlanet
): boolean {
  return (
    typeof planet.name === "string" &&
    MAIN_PLANETS.includes(
      planet.name as (typeof MAIN_PLANETS)[number]
    )
  );
}

function getSafePlanets(
  planets: PremiumPlanet[]
): PremiumPlanet[] {
  return planets.filter(isValidMainPlanet);
}

function getPlanet(
  planets: PremiumPlanet[],
  name: string
): PremiumPlanet | null {
  return (
    planets.find(
      (planet) =>
        planet.name === name
    ) || null
  );
}

function countByCategory<T extends string>(
  planets: PremiumPlanet[],
  map: Record<string, T>
): Record<T, number> {
  const counts = {} as Record<T, number>;

  planets.forEach((planet) => {
    if (typeof planet.sign !== "string") {
      return;
    }

    const category = map[planet.sign];

    if (!category) {
      return;
    }

    counts[category] =
      (counts[category] || 0) + 1;
  });

  return counts;
}

function getHighestCategory<T extends string>(
  counts: Record<T, number>
): T | null {
  const entries = Object.entries(
    counts
  ) as [T, number][];

  if (entries.length === 0) {
    return null;
  }

  return entries.reduce(
    (best, current) =>
      current[1] > best[1]
        ? current
        : best
  )[0];
}

function getLowestCategory<T extends string>(
  categories: T[],
  counts: Record<T, number>
): T | null {
  if (categories.length === 0) {
    return null;
  }

  return categories.reduce(
    (lowest, current) =>
      (counts[current] || 0) <
      (counts[lowest] || 0)
        ? current
        : lowest
  );
}

function getAngularPlanets(
  planets: PremiumPlanet[],
  ascendant?: number,
  midheaven?: number
): string[] {
  const angularNames = new Set<string>();

  planets.forEach((planet) => {
    if (
      typeof planet.name !== "string" ||
      typeof planet.longitude !== "number"
    ) {
      return;
    }

    const longitude = planet.longitude;

    if (
      typeof ascendant === "number" &&
      Math.abs(
        normalizeDifference(
          longitude - ascendant
        )
      ) <= 8
    ) {
      angularNames.add(planet.name);
    }

    if (
      typeof midheaven === "number" &&
      Math.abs(
        normalizeDifference(
          longitude - midheaven
        )
      ) <= 8
    ) {
      angularNames.add(planet.name);
    }

    if (
      planet.house === 1 ||
      planet.house === 4 ||
      planet.house === 7 ||
      planet.house === 10
    ) {
      angularNames.add(planet.name);
    }
  });

  return Array.from(angularNames);
}

function createThemeProfile(
  planets: PremiumPlanet[],
  ascendant?: number,
  midheaven?: number
): ThemeProfile {
  const elementCounts = countByCategory(
    planets,
    SIGN_ELEMENTS
  );

  const modalityCounts = countByCategory(
    planets,
    SIGN_MODALITIES
  );

  const sun = getPlanet(planets, "Sun");
  const moon = getPlanet(planets, "Moon");

  return {
    dominantElement:
      getHighestCategory(elementCounts),

    weakestElement:
      getLowestCategory(
        ["Feu", "Terre", "Air", "Eau"],
        elementCounts
      ),

    dominantModality:
      getHighestCategory(modalityCounts),

    weakestModality:
      getLowestCategory(
        ["Cardinal", "Fixe", "Mutable"],
        modalityCounts
      ),

    retrogradeCount: planets.filter(
      (planet) => planet.retrograde
    ).length,

    angularPlanetNames:
      getAngularPlanets(
        planets,
        ascendant,
        midheaven
      ),

    sunSign:
      typeof sun?.sign === "string"
        ? sun.sign
        : "non précisé",

    moonSign:
      typeof moon?.sign === "string"
        ? moon.sign
        : "non précisé",
  };
}

function chooseCentralPlanet(
  planets: PremiumPlanet[],
  angularPlanetNames: string[]
): PremiumPlanet | null {
  const angularPlanet =
    angularPlanetNames.length > 0
      ? getPlanet(
          planets,
          angularPlanetNames[0]
        )
      : null;

  if (angularPlanet) {
    return angularPlanet;
  }

  return (
    getPlanet(planets, "Sun") ||
    getPlanet(planets, "Moon") ||
    planets[0] ||
    null
  );
}

function buildStrengthCards(
  profile: ThemeProfile,
  centralPlanet: PremiumPlanet | null
): InsightCard[] {
  const cards: InsightCard[] = [];

  if (profile.dominantElement) {
    cards.push({
      title: `Force de l’élément ${profile.dominantElement}`,
      text:
        ELEMENT_STRENGTHS[
          profile.dominantElement
        ],
      tag: "Ressource naturelle",
    });
  }

  if (profile.dominantModality) {
    cards.push({
      title: `Dynamique ${profile.dominantModality}`,
      text:
        MODALITY_STRENGTHS[
          profile.dominantModality
        ],
      tag: "Mode d’action",
    });
  }

  if (
    centralPlanet?.name &&
    PLANET_STRENGTHS[
      centralPlanet.name
    ]
  ) {
    cards.push({
      title: `${
        PLANET_NAMES[
          centralPlanet.name
        ] || centralPlanet.name
      } comme appui`,
      text:
        PLANET_STRENGTHS[
          centralPlanet.name
        ],
      tag: "Force centrale",
    });
  }

  cards.push({
    title: "Capacité d’intégration",
    text:
      `Votre Soleil en ${profile.sunSign} et votre Lune en ${profile.moonSign} montrent deux besoins importants de votre personnalité. ` +
      "Votre force augmente lorsque votre volonté consciente et votre équilibre émotionnel avancent dans la même direction.",
    tag: "Équilibre intérieur",
  });

  return cards.slice(0, 4);
}

function buildChallengeCards(
  profile: ThemeProfile,
  centralPlanet: PremiumPlanet | null
): InsightCard[] {
  const cards: InsightCard[] = [];

  if (profile.dominantElement) {
    cards.push({
      title: `Excès possible de ${profile.dominantElement}`,
      text:
        ELEMENT_CHALLENGES[
          profile.dominantElement
        ],
      tag: "Point de vigilance",
    });
  }

  if (
    profile.weakestElement &&
    profile.weakestElement !==
      profile.dominantElement
  ) {
    cards.push({
      title: `Élément à développer : ${profile.weakestElement}`,
      text:
        MISSING_ELEMENT_TEXTS[
          profile.weakestElement
        ],
      tag: "Rééquilibrage",
    });
  }

  if (profile.dominantModality) {
    cards.push({
      title: `Défi de la modalité ${profile.dominantModality}`,
      text:
        MODALITY_CHALLENGES[
          profile.dominantModality
        ],
      tag: "Évolution",
    });
  }

  if (
    centralPlanet?.name &&
    PLANET_CHALLENGES[
      centralPlanet.name
    ]
  ) {
    cards.push({
      title: `Défi lié à ${
        PLANET_NAMES[
          centralPlanet.name
        ] || centralPlanet.name
      }`,
      text:
        PLANET_CHALLENGES[
          centralPlanet.name
        ],
      tag: "Conscience",
    });
  }

  return cards.slice(0, 4);
}

function getAngularText(
  angularPlanetNames: string[]
): string {
  if (angularPlanetNames.length === 0) {
    return (
      "Aucune planète principale ne ressort clairement comme fortement angulaire dans les données disponibles. " +
      "Votre énergie semble donc davantage se répartir entre plusieurs domaines plutôt que se concentrer sur un seul axe."
    );
  }

  const translatedNames =
    angularPlanetNames.map(
      (planetName) =>
        PLANET_NAMES[planetName] ||
        planetName
    );

  return (
    `${translatedNames.join(", ")} ${
      translatedNames.length > 1
        ? "occupent"
        : "occupe"
    } une position particulièrement visible dans votre thème. ` +
    "Une planète angulaire tend à s’exprimer directement dans la personnalité, les décisions, les relations ou la trajectoire professionnelle."
  );
}

function getRetrogradeText(
  retrogradeCount: number
): string {
  if (retrogradeCount === 0) {
    return (
      "Aucune planète principale n’est indiquée comme rétrograde. " +
      "Vos fonctions planétaires peuvent s’exprimer de manière relativement directe, même si leur manifestation dépend toujours du signe, de la maison et des aspects."
    );
  }

  if (retrogradeCount <= 2) {
    return (
      `${retrogradeCount} planète${
        retrogradeCount > 1
          ? "s sont indiquées"
          : " est indiquée"
      } comme rétrograde. ` +
      "Cette énergie peut demander davantage de réflexion intérieure avant de s’exprimer clairement dans le monde extérieur."
    );
  }

  return (
    `${retrogradeCount} planètes sont indiquées comme rétrogrades. ` +
    "Votre thème possède une dimension très intériorisée. Vous pouvez avoir besoin de comprendre profondément vos motivations avant de prendre une position définitive ou de montrer pleinement certaines facettes de vous-même."
  );
}

function createFinalSynthesis(
  profile: ThemeProfile,
  centralPlanet: PremiumPlanet | null
): string {
  const centralPlanetName =
    centralPlanet?.name
      ? PLANET_NAMES[
          centralPlanet.name
        ] || centralPlanet.name
      : "votre énergie centrale";

  const dominantElement =
    profile.dominantElement ||
    "votre élément dominant";

  const dominantModality =
    profile.dominantModality ||
    "votre modalité dominante";

  const weakestElement =
    profile.weakestElement ||
    "l’élément le moins représenté";

  return (
    `Votre développement repose sur l’alliance entre ${dominantElement}, la dynamique ${dominantModality.toLowerCase()} et l’influence de ${centralPlanetName}. ` +
    `Vos forces apparaissent lorsque vous utilisez pleinement ces qualités sans tomber dans leur excès. ` +
    `Le développement de ${weakestElement} peut vous aider à devenir plus équilibrée, plus souple et plus consciente de vos choix. ` +
    "Les défis observés dans un thème natal ne sont pas des défauts : ils représentent les zones dans lesquelles votre potentiel de progression est le plus important."
  );
}

function InsightCardView({
  insight,
}: {
  insight: InsightCard;
}) {
  return (
    <View
      style={styles.card}
      wrap={false}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>
          {insight.title}
        </Text>

        <Text style={styles.cardTag}>
          {insight.tag}
        </Text>
      </View>

      <Text style={styles.cardText}>
        {insight.text}
      </Text>
    </View>
  );
}

export default function PdfStrengthsChallenges({
  planets,
  angles,
}: PremiumPdfSummaryProps) {
  const safePlanets = getSafePlanets(
    Array.isArray(planets)
      ? planets
      : []
  );

  const safeAngles =
    angles &&
    typeof angles === "object"
      ? angles
      : {};

  const profile = createThemeProfile(
    safePlanets,
    typeof safeAngles.ascendant === "number"
      ? safeAngles.ascendant
      : undefined,
    typeof safeAngles.midheaven === "number"
      ? safeAngles.midheaven
      : undefined
  );

  const centralPlanet =
    chooseCentralPlanet(
      safePlanets,
      profile.angularPlanetNames
    );

  const strengthCards =
    buildStrengthCards(
      profile,
      centralPlanet
    );

  const challengeCards =
    buildChallengeCards(
      profile,
      centralPlanet
    );

  return (
    <>
      <Page size="A4" style={styles.page}>
        <PdfBrandHeader />

        <View style={styles.content}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Analyse Premium
            </Text>
          </View>

          <Text style={styles.title}>
            Vos forces naturelles
          </Text>

          <Text style={styles.intro}>
            Votre thème natal met en lumière les
            qualités qui peuvent vous soutenir tout au
            long de votre parcours. Ces forces ne sont
            pas toujours utilisées automatiquement :
            elles gagnent en puissance lorsque vous les
            reconnaissez et les développez
            consciemment.
          </Text>

          {strengthCards.map(
            (insight) => (
              <InsightCardView
                key={insight.title}
                insight={insight}
              />
            )
          )}

          <View
            style={styles.angularCard}
            wrap={false}
          >
            <Text style={styles.angularTitle}>
              Planètes angulaires
            </Text>

            <Text style={styles.angularText}>
              {getAngularText(
                profile.angularPlanetNames
              )}
            </Text>
          </View>
        </View>

        <PdfPageFooter />
      </Page>

      <Page size="A4" style={styles.page}>
        <PdfBrandHeader />

        <View style={styles.content}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Analyse Premium
            </Text>
          </View>

          <Text style={styles.title}>
            Vos défis d’évolution
          </Text>

          <Text style={styles.intro}>
            Les défis astrologiques ne prédisent pas
            des échecs. Ils montrent les zones dans
            lesquelles certaines réactions peuvent
            devenir répétitives, ainsi que les
            qualités à développer pour retrouver plus
            d’équilibre et de liberté intérieure.
          </Text>

          {challengeCards.map(
            (insight) => (
              <InsightCardView
                key={insight.title}
                insight={insight}
              />
            )
          )}

          <View style={styles.twoColumns}>
            <View style={styles.columnLeft}>
              <View
                style={styles.smallCard}
                wrap={false}
              >
                <Text
                  style={styles.smallCardTitle}
                >
                  Intériorisation
                </Text>

                <Text
                  style={styles.smallCardText}
                >
                  {getRetrogradeText(
                    profile.retrogradeCount
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.columnRight}>
              <View
                style={styles.smallCard}
                wrap={false}
              >
                <Text
                  style={styles.smallCardTitle}
                >
                  Clé d’équilibre
                </Text>

                <Text
                  style={styles.smallCardText}
                >
                  Votre progression devient plus
                  harmonieuse lorsque vous utilisez vos
                  qualités dominantes sans négliger les
                  besoins moins spontanés de votre
                  personnalité.
                </Text>
              </View>
            </View>
          </View>
<View
  style={styles.synthesisCard}
  wrap={false}
>
  <Text style={styles.synthesisTitle}>
    Votre potentiel d’évolution
  </Text>

  <Text style={styles.synthesisText}>
    {createFinalSynthesis(
      profile,
      centralPlanet
    )}

    {"\n\n"}

    Votre carte du ciel montre que votre évolution ne
    dépend pas d'une seule qualité ou d'un seul défi.
    Elle repose sur votre capacité à harmoniser vos
    différentes énergies afin qu'elles se complètent
    plutôt qu'elles ne s'opposent. Chaque expérience,
    qu'elle soit facile ou exigeante, devient une
    occasion de mieux comprendre votre fonctionnement
    et de renforcer votre confiance intérieure.

    {"\n\n"}

    Au fil du temps, certaines influences de votre
    thème prendront naturellement davantage de place.
    Les qualités qui semblent aujourd'hui discrètes
    peuvent devenir de véritables ressources grâce à
    l'expérience, tandis que vos forces naturelles
    gagneront en maturité lorsqu'elles seront
    accompagnées de patience, de recul et de
    discernement.

    {"\n\n"}

    Les périodes de transition ne représentent pas un
    éloignement de votre véritable nature, mais une
    invitation à l'exprimer de façon plus consciente.
    En accueillant les changements avec confiance,
    vous développez progressivement une personnalité
    plus équilibrée, plus libre et plus fidèle à vos
    valeurs profondes.

    {"\n\n"}

    Votre thème natal n'impose jamais une destinée
    figée. Il met en lumière les ressources dont vous
    disposez, les apprentissages qui favorisent votre
    croissance et les chemins qui peuvent vous conduire
    vers une réalisation plus authentique de vous-même.
  </Text>
</View>

<View
  style={styles.card}
  wrap={false}
>
  <View style={styles.cardHeader}>
    <Text style={styles.cardTitle}>
      Comment accompagner votre évolution
    </Text>

    <Text style={styles.cardTag}>
      Clés pratiques
    </Text>
  </View>

  <Text style={styles.cardText}>
    • Observez les situations qui déclenchent toujours
    les mêmes réactions. Elles indiquent souvent un
    besoin important qui demande à être reconnu plutôt
    que repoussé.

    {"\n\n"}

    • Appuyez-vous sur vos qualités dominantes pour
    avancer, mais accordez aussi de l’attention aux
    énergies moins spontanées de votre thème. Elles
    peuvent devenir de nouvelles ressources avec le
    temps et l’expérience.

    {"\n\n"}

    • Lorsque vous traversez une période de changement,
    demandez-vous ce que cette étape vous invite à
    comprendre, à transformer ou à exprimer plus
    librement. Votre évolution devient plus consciente
    lorsque vous donnez un sens personnel à vos choix.
  </Text>
</View>

</View>

<PdfPageFooter />
</Page>
</>
);
}
