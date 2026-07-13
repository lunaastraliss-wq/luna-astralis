import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type {
  PremiumPdfPlanetsProps,
  PremiumPlanet,
} from "./PremiumPdfTypes";

import {
  MAIN_PLANETS,
  PLANET_NAMES,
} from "./PremiumPdfUtils";

import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

type AspectName =
  | "Conjonction"
  | "Sextile"
  | "Carré"
  | "Trigone"
  | "Opposition";

type AspectDefinition = {
  name: AspectName;
  angle: number;
  orb: number;
  symbol: string;
  nature: string;
  category: "harmonieux" | "dynamique" | "intense";
};

type CalculatedAspect = {
  planetA: string;
  planetB: string;
  aspect: AspectDefinition;
  exactDifference: number;
  orb: number;
};

type AspectInterpretation = {
  introduction: string;
  manifestation: string;
  evolution: string;
};

const ASPECTS: AspectDefinition[] = [
  {
    name: "Conjonction",
    angle: 0,
    orb: 8,
    symbol: "☌",
    nature: "Fusion et intensification",
    category: "intense",
  },
  {
    name: "Sextile",
    angle: 60,
    orb: 5,
    symbol: "⚹",
    nature: "Possibilité et coopération",
    category: "harmonieux",
  },
  {
    name: "Carré",
    angle: 90,
    orb: 7,
    symbol: "□",
    nature: "Tension et évolution",
    category: "dynamique",
  },
  {
    name: "Trigone",
    angle: 120,
    orb: 7,
    symbol: "△",
    nature: "Fluidité et talent naturel",
    category: "harmonieux",
  },
  {
    name: "Opposition",
    angle: 180,
    orb: 8,
    symbol: "☍",
    nature: "Polarité et recherche d’équilibre",
    category: "dynamique",
  },
];

const PLANET_ENERGIES: Record<string, string> = {
  Sun: "votre identité, votre volonté et votre besoin de rayonner",
  Moon:
    "vos émotions, vos besoins affectifs et votre sécurité intérieure",
  Mercury:
    "votre pensée, votre communication et votre manière de comprendre",
  Venus:
    "votre façon d’aimer, vos valeurs et votre sensibilité relationnelle",
  Mars:
    "votre énergie d’action, votre désir et votre capacité d’affirmation",
  Jupiter:
    "votre confiance, votre expansion et votre manière de saisir les possibilités",
  Saturn:
    "votre sens des responsabilités, vos limites et votre maturité",
  Uranus:
    "votre besoin de liberté, votre originalité et votre rapport au changement",
  Neptune:
    "votre imagination, votre intuition et votre réceptivité",
  Pluto:
    "votre pouvoir de transformation, votre intensité et votre capacité de régénération",
};

const PLANET_MANIFESTATIONS: Record<string, string> = {
  Sun:
    "dans votre sentiment d’identité, vos choix personnels et votre manière d’occuper votre place",
  Moon:
    "dans vos réactions émotionnelles, votre intimité et votre manière de rechercher la sécurité",
  Mercury:
    "dans vos idées, vos échanges, vos apprentissages et vos prises de décision",
  Venus:
    "dans votre vie affective, vos attirances, votre estime personnelle et vos valeurs",
  Mars:
    "dans vos initiatives, vos conflits, vos désirs et votre manière de poursuivre un objectif",
  Jupiter:
    "dans votre confiance, vos ambitions, vos convictions et votre recherche d’évolution",
  Saturn:
    "dans vos responsabilités, votre discipline, vos peurs et vos constructions à long terme",
  Uranus:
    "dans votre besoin d’indépendance, vos changements et votre manière de sortir des cadres",
  Neptune:
    "dans votre intuition, vos idéaux, votre imagination et votre sensibilité aux ambiances",
  Pluto:
    "dans vos périodes de transformation, vos rapports de force et votre besoin de profondeur",
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
    marginBottom: 9,
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
    marginBottom: 7,
  },

  intro: {
    color: "#c8c1b3",
    fontSize: 9.2,
    lineHeight: 1.5,
    textAlign: "center",
    marginBottom: 14,
    paddingHorizontal: 14,
  },

  continuation: {
    color: "#858ca0",
    fontSize: 7.5,
    textAlign: "center",
    marginBottom: 13,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  aspectCard: {
    position: "relative",
    marginBottom: 12,
    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 15,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  goldAccent: {
    position: "absolute",
    top: -1,
    left: -1,
    width: 82,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  aspectHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  symbolBox: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
    borderWidth: 1,
    borderColor: "#b88b3f",
    backgroundColor: "#0b1124",
  },

  symbol: {
    color: "#f4c95d",
    fontSize: 18,
  },

  aspectHeading: {
    flexGrow: 1,
    paddingRight: 8,
  },

  planetNames: {
    color: "#fff8e7",
    fontSize: 12,
    marginBottom: 3,
  },

  aspectName: {
    color: "#f4c95d",
    fontSize: 8.3,
    lineHeight: 1.25,
  },

  orbBox: {
    minWidth: 60,
    alignItems: "flex-end",
  },

  orbLabel: {
    color: "#858ca0",
    fontSize: 6.5,
    textTransform: "uppercase",
    marginBottom: 2,
    letterSpacing: 0.8,
  },

  orbValue: {
    color: "#e9e4d8",
    fontSize: 8.5,
    marginBottom: 3,
  },

  strengthValue: {
    color: "#f4c95d",
    fontSize: 7.2,
  },

  separator: {
    height: 1,
    backgroundColor: "#39415d",
    marginBottom: 8,
  },

  sectionLabel: {
    color: "#f4c95d",
    fontSize: 7.2,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 3,
  },

  paragraph: {
    color: "#e9e4d8",
    fontSize: 8.45,
    lineHeight: 1.45,
    marginBottom: 7,
  },

  evolutionBox: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 10,
    backgroundColor: "#161f3d",
    borderLeftWidth: 2,
    borderLeftColor: "#f4c95d",
  },

  evolutionText: {
    color: "#e9e4d8",
    fontSize: 8.2,
    lineHeight: 1.4,
  },

  summaryCard: {
    marginBottom: 13,
    paddingVertical: 15,
    paddingHorizontal: 17,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  summaryTitle: {
    color: "#f4c95d",
    fontSize: 11.5,
    textAlign: "center",
    marginBottom: 8,
  },

  summaryText: {
    color: "#e9e4d8",
    fontSize: 9,
    lineHeight: 1.55,
    textAlign: "center",
  },

  statsRow: {
    flexDirection: "row",
    marginBottom: 14,
  },

  statCard: {
    flexGrow: 1,
    marginHorizontal: 4,
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: "#161f3d",
    borderWidth: 1,
    borderColor: "#39415d",
    alignItems: "center",
  },

  statValue: {
    color: "#f4c95d",
    fontSize: 18,
    marginBottom: 4,
  },

  statLabel: {
    color: "#c8c1b3",
    fontSize: 7.2,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.7,
  },

  guidanceCard: {
    paddingVertical: 15,
    paddingHorizontal: 17,
    backgroundColor: "#161f3d",
    borderWidth: 1,
    borderColor: "#b88b3f",
  },

  guidanceTitle: {
    color: "#f4c95d",
    fontSize: 11,
    textAlign: "center",
    marginBottom: 8,
  },

  guidanceText: {
    color: "#e9e4d8",
    fontSize: 9,
    lineHeight: 1.55,
    textAlign: "center",
  },

  emptyCard: {
    marginTop: 30,
    paddingVertical: 24,
    paddingHorizontal: 22,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  emptyTitle: {
    color: "#f4c95d",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 9,
  },

  emptyText: {
    color: "#e9e4d8",
    fontSize: 9.2,
    lineHeight: 1.55,
    textAlign: "center",
  },
});

function normalizeLongitude(value: number): number {
  return ((value % 360) + 360) % 360;
}

function angularDifference(
  firstLongitude: number,
  secondLongitude: number
): number {
  const first =
    normalizeLongitude(firstLongitude);

  const second =
    normalizeLongitude(secondLongitude);

  const rawDifference =
    Math.abs(first - second);

  return rawDifference > 180
    ? 360 - rawDifference
    : rawDifference;
}

function getValidPlanet(
  planets: PremiumPlanet[],
  name: string
): PremiumPlanet | null {
  const planet = planets.find(
    (currentPlanet) =>
      currentPlanet?.name === name &&
      typeof currentPlanet.longitude === "number" &&
      Number.isFinite(currentPlanet.longitude)
  );

  return planet || null;
}

function calculateAspects(
  planets: PremiumPlanet[]
): CalculatedAspect[] {
  const calculatedAspects: CalculatedAspect[] = [];

  for (
    let firstIndex = 0;
    firstIndex < MAIN_PLANETS.length;
    firstIndex += 1
  ) {
    const firstName =
      MAIN_PLANETS[firstIndex];

    const firstPlanet = getValidPlanet(
      planets,
      firstName
    );

    if (!firstPlanet) {
      continue;
    }

    for (
      let secondIndex = firstIndex + 1;
      secondIndex < MAIN_PLANETS.length;
      secondIndex += 1
    ) {
      const secondName =
        MAIN_PLANETS[secondIndex];

      const secondPlanet = getValidPlanet(
        planets,
        secondName
      );

      if (!secondPlanet) {
        continue;
      }

      const difference = angularDifference(
        firstPlanet.longitude as number,
        secondPlanet.longitude as number
      );

      let closestAspect:
        | CalculatedAspect
        | null = null;

      for (const aspect of ASPECTS) {
        const currentOrb = Math.abs(
          difference - aspect.angle
        );

        if (currentOrb > aspect.orb) {
          continue;
        }

        if (
          !closestAspect ||
          currentOrb < closestAspect.orb
        ) {
          closestAspect = {
            planetA: firstName,
            planetB: secondName,
            aspect,
            exactDifference: difference,
            orb: currentOrb,
          };
        }
      }

      if (closestAspect) {
        calculatedAspects.push(
          closestAspect
        );
      }
    }
  }

  return calculatedAspects
    .sort((firstAspect, secondAspect) => {
      const firstStrength =
        firstAspect.orb /
        firstAspect.aspect.orb;

      const secondStrength =
        secondAspect.orb /
        secondAspect.aspect.orb;

      return firstStrength - secondStrength;
    })
    .slice(0, 18);
}

function formatOrb(value: number): string {
  return `${value.toFixed(1)}°`;
}

function getAspectStrength(
  aspect: CalculatedAspect
): string {
  const ratio =
    aspect.orb / aspect.aspect.orb;

  if (ratio <= 0.25) {
    return "Très puissant";
  }

  if (ratio <= 0.5) {
    return "Puissant";
  }

  if (ratio <= 0.75) {
    return "Modéré";
  }

  return "Subtil";
}

function getAspectInterpretation(
  calculatedAspect: CalculatedAspect
): AspectInterpretation {
  const firstPlanet =
    PLANET_NAMES[calculatedAspect.planetA] ||
    calculatedAspect.planetA;

  const secondPlanet =
    PLANET_NAMES[calculatedAspect.planetB] ||
    calculatedAspect.planetB;

  const firstEnergy =
    PLANET_ENERGIES[
      calculatedAspect.planetA
    ] ||
    "une dimension importante de votre personnalité";

  const secondEnergy =
    PLANET_ENERGIES[
      calculatedAspect.planetB
    ] ||
    "une autre dimension de votre personnalité";

  const firstManifestation =
    PLANET_MANIFESTATIONS[
      calculatedAspect.planetA
    ] ||
    "dans plusieurs domaines de votre existence";

  const secondManifestation =
    PLANET_MANIFESTATIONS[
      calculatedAspect.planetB
    ] ||
    "dans votre manière de vivre les situations importantes";

  switch (calculatedAspect.aspect.name) {
    case "Conjonction":
      return {
        introduction:
          `${firstPlanet} et ${secondPlanet} unissent étroitement leurs énergies. ` +
          `Cette conjonction intensifie le lien entre ${firstEnergy} et ${secondEnergy}. ` +
          `Ces deux fonctions ont tendance à agir ensemble, ce qui leur donne une place importante dans votre personnalité.`,

        manifestation:
          `Cette concentration peut être particulièrement visible ${firstManifestation}, mais également ${secondManifestation}. ` +
          `Lorsque les deux planètes poursuivent un même objectif, vous pouvez manifester une grande détermination. ` +
          `Le défi consiste à conserver suffisamment de recul afin qu’une seule énergie ne domine pas entièrement l’autre.`,

        evolution:
          `Votre clé d’évolution consiste à utiliser cette intensité avec conscience. ` +
          `Plus vous distinguez les besoins propres à chaque planète, plus leur alliance devient une force cohérente, créative et constructive.`,
      };

    case "Sextile":
      return {
        introduction:
          `${firstPlanet} et ${secondPlanet} entretiennent un échange constructif entre ${firstEnergy} et ${secondEnergy}. ` +
          `Le sextile représente une possibilité naturelle qui peut soutenir votre développement lorsque vous choisissez de l’activer consciemment.`,

        manifestation:
          `Cette coopération peut vous aider ${firstManifestation} et faciliter également votre évolution ${secondManifestation}. ` +
          `Les occasions associées à cet aspect ne s’imposent pas toujours d’elles-mêmes. ` +
          `Elles se renforcent lorsque vous osez prendre une initiative, développer un talent ou créer des liens entre ces deux dimensions de votre vie.`,

        evolution:
          `Votre clé d’évolution consiste à ne pas laisser cette possibilité rester dormante. ` +
          `En cultivant volontairement ce lien, vous transformez une disposition favorable en véritable ressource personnelle.`,
      };

    case "Carré":
      return {
        introduction:
          `${firstPlanet} et ${secondPlanet} créent une tension dynamique entre ${firstEnergy} et ${secondEnergy}. ` +
          `Le carré révèle deux besoins puissants qui ne s’accordent pas toujours spontanément et qui peuvent provoquer des contradictions intérieures.`,

        manifestation:
          `Cette friction peut se manifester ${firstManifestation}, mais aussi ${secondManifestation}. ` +
          `Vous pouvez avoir l’impression de devoir satisfaire un besoin au détriment de l’autre. ` +
          `Avec le temps, cette tension peut toutefois devenir un moteur remarquable de courage, de progression et de dépassement personnel.`,

        evolution:
          `Votre clé d’évolution consiste à ne pas chercher à éliminer l’un des deux pôles. ` +
          `En créant une manière plus consciente de les faire collaborer, vous transformez la tension en énergie d’action et en maturité.`,
      };

    case "Trigone":
      return {
        introduction:
          `${firstPlanet} et ${secondPlanet} circulent ensemble avec fluidité. ` +
          `Le trigone crée une harmonie naturelle entre ${firstEnergy} et ${secondEnergy}. ` +
          `Cette configuration représente souvent un talent spontané ou une qualité intérieure facilement accessible.`,

        manifestation:
          `Cette aisance peut soutenir votre expression ${firstManifestation} et favoriser également votre équilibre ${secondManifestation}. ` +
          `Vous pouvez utiliser cette ressource presque instinctivement, parfois sans mesurer pleinement sa valeur. ` +
          `Elle devient particulièrement féconde lorsque vous lui donnez une direction concrète.`,

        evolution:
          `Votre clé d’évolution consiste à ne pas considérer cette facilité comme acquise. ` +
          `En développant activement ce potentiel, vous pouvez en faire un talent durable, utile et profondément personnel.`,
      };

    case "Opposition":
      return {
        introduction:
          `${firstPlanet} et ${secondPlanet} placent face à face ${firstEnergy} et ${secondEnergy}. ` +
          `L’opposition crée une polarité importante : les deux besoins cherchent à être reconnus, mais peuvent sembler difficiles à vivre simultanément.`,

        manifestation:
          `Cette dynamique peut être perceptible ${firstManifestation} ainsi que ${secondManifestation}. ` +
          `Il est possible que vous projetiez parfois l’un des deux pôles sur votre entourage, en rencontrant chez les autres une qualité que vous avez plus de difficulté à reconnaître en vous-même.`,

        evolution:
          `Votre clé d’évolution consiste à créer un dialogue entre ces deux extrêmes. ` +
          `L’équilibre ne demande pas de choisir un camp, mais d’intégrer progressivement les qualités complémentaires de chaque planète.`,
      };

    default:
      return {
        introduction:
          `${firstPlanet} et ${secondPlanet} forment une relation importante dans votre thème natal.`,

        manifestation:
          `Cette interaction influence différentes dimensions de votre personnalité et mérite d’être observée dans votre expérience quotidienne.`,

        evolution:
          `Votre évolution consiste à reconnaître consciemment la manière dont ces deux énergies peuvent se soutenir mutuellement.`,
      };
  }
}

function getGlobalSynthesis(
  aspects: CalculatedAspect[]
): string {
  const harmoniousCount = aspects.filter(
    ({ aspect }) =>
      aspect.name === "Trigone" ||
      aspect.name === "Sextile"
  ).length;

  const dynamicCount = aspects.filter(
    ({ aspect }) =>
      aspect.name === "Carré" ||
      aspect.name === "Opposition"
  ).length;

  const conjunctionCount = aspects.filter(
    ({ aspect }) =>
      aspect.name === "Conjonction"
  ).length;

  if (
    dynamicCount > harmoniousCount &&
    dynamicCount > conjunctionCount
  ) {
    return (
      "Votre thème présente une proportion importante d’aspects dynamiques. " +
      "Ces configurations ne représentent pas des obstacles définitifs. " +
      "Elles créent une énergie de transformation qui vous pousse à dépasser certaines contradictions, à développer votre maîtrise intérieure et à convertir les tensions en décisions constructives."
    );
  }

  if (
    harmoniousCount > dynamicCount &&
    harmoniousCount >= conjunctionCount
  ) {
    return (
      "Votre thème présente plusieurs échanges harmonieux entre les planètes. " +
      "Vous disposez de ressources naturelles, de talents spontanés et d’une capacité à relier différentes facettes de votre personnalité. " +
      "Votre défi principal consiste à utiliser activement ces facilités afin qu’elles deviennent de véritables forces d’accomplissement."
    );
  }

  if (
    conjunctionCount > harmoniousCount &&
    conjunctionCount > dynamicCount
  ) {
    return (
      "Les conjonctions occupent une place importante dans votre thème. " +
      "Plusieurs énergies planétaires sont fortement concentrées et constituent des axes majeurs de votre personnalité. " +
      "Cette intensité peut soutenir une grande détermination, à condition de conserver suffisamment de recul et de souplesse."
    );
  }

  return (
    "Votre thème présente un équilibre entre fluidité, intensité et tension créatrice. " +
    "Les aspects harmonieux indiquent vos ressources naturelles. " +
    "Les aspects dynamiques révèlent les domaines dans lesquels votre progression peut être la plus profonde. " +
    "Les conjonctions concentrent certaines forces qui jouent un rôle central dans votre personnalité."
  );
}

function getGlobalGuidance(
  aspects: CalculatedAspect[]
): string {
  const strongestAspect =
    aspects[0];

  if (!strongestAspect) {
    return (
      "Observez progressivement la manière dont vos différentes énergies intérieures collaborent dans votre vie quotidienne."
    );
  }

  const firstPlanet =
    PLANET_NAMES[
      strongestAspect.planetA
    ] || strongestAspect.planetA;

  const secondPlanet =
    PLANET_NAMES[
      strongestAspect.planetB
    ] || strongestAspect.planetB;

  return (
    `L’aspect le plus précis de cette sélection relie ${firstPlanet} et ${secondPlanet}, ` +
    `avec un orbe de ${formatOrb(strongestAspect.orb)}. ` +
    `Cette interaction mérite une attention particulière, car elle peut se manifester de manière régulière dans vos réactions, vos choix et vos relations. ` +
    `La compréhension consciente de cet aspect peut devenir une clé importante de votre évolution personnelle.`
  );
}

function splitIntoPages<T>(
  values: T[],
  pageSize: number
): T[][] {
  const pages: T[][] = [];

  for (
    let index = 0;
    index < values.length;
    index += pageSize
  ) {
    pages.push(
      values.slice(
        index,
        index + pageSize
      )
    );
  }

  return pages;
}

export default function PdfAspects({
  planets,
}: PremiumPdfPlanetsProps) {
  const safePlanets =
    Array.isArray(planets)
      ? planets
      : [];

  const calculatedAspects =
    calculateAspects(safePlanets);

  if (calculatedAspects.length === 0) {
    return (
      <Page size="A4" style={styles.page}>
        <PdfBrandHeader />

        <View style={styles.content}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Analyse Premium
            </Text>
          </View>

          <Text style={styles.title}>
            Vos aspects planétaires
          </Text>

          <Text style={styles.intro}>
            Les aspects représentent les relations
            angulaires entre les planètes. Ils montrent
            comment les différentes dimensions de votre
            personnalité collaborent, se renforcent ou
            se mettent mutuellement au défi.
          </Text>

          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>
              Analyse indisponible
            </Text>

            <Text style={styles.emptyText}>
              Les longitudes planétaires nécessaires au
              calcul des aspects ne sont pas disponibles
              dans les données de ce thème natal.
            </Text>
          </View>
        </View>

        <PdfPageFooter />
      </Page>
    );
  }

  const aspectPages = splitIntoPages(
    calculatedAspects,
    3
  );

  const harmoniousCount =
    calculatedAspects.filter(
      ({ aspect }) =>
        aspect.name === "Trigone" ||
        aspect.name === "Sextile"
    ).length;

  const dynamicCount =
    calculatedAspects.filter(
      ({ aspect }) =>
        aspect.name === "Carré" ||
        aspect.name === "Opposition"
    ).length;

  const conjunctionCount =
    calculatedAspects.filter(
      ({ aspect }) =>
        aspect.name === "Conjonction"
    ).length;

  return (
    <>
      {aspectPages.map(
        (pageAspects, pageIndex) => {
          return (
            <Page
              key={`aspects-page-${pageIndex}`}
              size="A4"
              style={styles.page}
            >
              <PdfBrandHeader />

              <View style={styles.content}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                    Analyse Premium
                  </Text>
                </View>

                <Text style={styles.title}>
                  {pageIndex === 0
                    ? "Vos aspects planétaires"
                    : "Vos aspects planétaires — suite"}
                </Text>

                {pageIndex === 0 ? (
                  <Text style={styles.intro}>
                    Les aspects décrivent les échanges
                    entre les planètes de votre thème.
                    Ils révèlent vos talents naturels,
                    vos tensions intérieures et les
                    mécanismes qui participent à votre
                    évolution personnelle.
                  </Text>
                ) : (
                  <Text style={styles.continuation}>
                    Partie {pageIndex + 1} sur{" "}
                    {aspectPages.length}
                  </Text>
                )}

                {pageAspects.map(
                  (calculatedAspect) => {
                    const firstPlanet =
                      PLANET_NAMES[
                        calculatedAspect.planetA
                      ] ||
                      calculatedAspect.planetA;

                    const secondPlanet =
                      PLANET_NAMES[
                        calculatedAspect.planetB
                      ] ||
                      calculatedAspect.planetB;

                    const interpretation =
                      getAspectInterpretation(
                        calculatedAspect
                      );

                    return (
                      <View
                        key={[
                          calculatedAspect.planetA,
                          calculatedAspect.aspect.name,
                          calculatedAspect.planetB,
                        ].join("-")}
                        style={styles.aspectCard}
                        wrap={false}
                      >
                        <View
                          style={styles.goldAccent}
                        />

                        <View style={styles.aspectHeader}>
                          <View style={styles.symbolBox}>
                            <Text style={styles.symbol}>
                              {
                                calculatedAspect.aspect
                                  .symbol
                              }
                            </Text>
                          </View>

                          <View style={styles.aspectHeading}>
                            <Text style={styles.planetNames}>
                              {firstPlanet}{" "}
                              {
                                calculatedAspect.aspect
                                  .name
                              }{" "}
                              {secondPlanet}
                            </Text>

                            <Text style={styles.aspectName}>
                              {
                                calculatedAspect.aspect
                                  .nature
                              }{" "}
                              · Aspect{" "}
                              {
                                calculatedAspect.aspect
                                  .category
                              }
                            </Text>
                          </View>

                          <View style={styles.orbBox}>
                            <Text style={styles.orbLabel}>
                              Orbe
                            </Text>

                            <Text style={styles.orbValue}>
                              {formatOrb(
                                calculatedAspect.orb
                              )}
                            </Text>

                            <Text
                              style={styles.strengthValue}
                            >
                              {getAspectStrength(
                                calculatedAspect
                              )}
                            </Text>
                          </View>
                        </View>

                        <View style={styles.separator} />

                        <Text style={styles.sectionLabel}>
                          Signification de l’aspect
                        </Text>

                        <Text style={styles.paragraph}>
                          {interpretation.introduction}
                        </Text>

                        <Text style={styles.sectionLabel}>
                          Manifestation dans votre vie
                        </Text>

                        <Text style={styles.paragraph}>
                          {interpretation.manifestation}
                        </Text>

                        <View style={styles.evolutionBox}>
                          <Text style={styles.sectionLabel}>
                            Votre clé d’évolution
                          </Text>

                          <Text
                            style={styles.evolutionText}
                          >
                            {interpretation.evolution}
                          </Text>
                        </View>
                      </View>
                    );
                  }
                )}
              </View>

              <PdfPageFooter />
            </Page>
          );
        }
      )}

      <Page size="A4" style={styles.page}>
        <PdfBrandHeader />

        <View style={styles.content}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Synthèse Premium
            </Text>
          </View>

          <Text style={styles.title}>
            Synthèse de vos aspects
          </Text>

          <Text style={styles.intro}>
            Cette synthèse présente l’équilibre général
            entre vos facilités naturelles, vos tensions
            créatrices et les concentrations d’énergie
            les plus importantes de votre thème natal.
          </Text>

          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>
                {calculatedAspects.length}
              </Text>

              <Text style={styles.statLabel}>
                Aspects analysés
              </Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statValue}>
                {harmoniousCount}
              </Text>

              <Text style={styles.statLabel}>
                Aspects harmonieux
              </Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statValue}>
                {dynamicCount}
              </Text>

              <Text style={styles.statLabel}>
                Aspects dynamiques
              </Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statValue}>
                {conjunctionCount}
              </Text>

              <Text style={styles.statLabel}>
                Conjonctions
              </Text>
            </View>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>
              Votre dynamique générale
            </Text>

            <Text style={styles.summaryText}>
              {getGlobalSynthesis(
                calculatedAspects
              )}
            </Text>
          </View>

          <View style={styles.guidanceCard}>
            <Text style={styles.guidanceTitle}>
              Votre point d’attention principal
            </Text>

            <Text style={styles.guidanceText}>
              {getGlobalGuidance(
                calculatedAspects
              )}
            </Text>
          </View>
        </View>

        <PdfPageFooter />
      </Page>
    </>
  );
}
