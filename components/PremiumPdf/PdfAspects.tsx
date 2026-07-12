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
};

type CalculatedAspect = {
  planetA: string;
  planetB: string;
  aspect: AspectDefinition;
  exactDifference: number;
  orb: number;
};

const ASPECTS: AspectDefinition[] = [
  {
    name: "Conjonction",
    angle: 0,
    orb: 8,
    symbol: "☌",
    nature: "Fusion et intensification",
  },
  {
    name: "Sextile",
    angle: 60,
    orb: 5,
    symbol: "⚹",
    nature: "Possibilité et coopération",
  },
  {
    name: "Carré",
    angle: 90,
    orb: 7,
    symbol: "□",
    nature: "Tension et évolution",
  },
  {
    name: "Trigone",
    angle: 120,
    orb: 7,
    symbol: "△",
    nature: "Fluidité et talent naturel",
  },
  {
    name: "Opposition",
    angle: 180,
    orb: 8,
    symbol: "☍",
    nature: "Polarité et recherche d’équilibre",
  },
];

const PLANET_ENERGIES: Record<string, string> = {
  Sun: "l’identité, la volonté et le rayonnement personnel",
  Moon: "les émotions, les besoins intérieurs et la sécurité",
  Mercury: "la pensée, la communication et la compréhension",
  Venus: "l’amour, les valeurs, l’harmonie et les relations",
  Mars: "l’action, le désir, l’affirmation et l’énergie",
  Jupiter: "l’expansion, la confiance et les possibilités",
  Saturn: "la structure, les responsabilités et la maturité",
  Uranus: "la liberté, le changement et l’originalité",
  Neptune: "l’intuition, l’imaginaire et la sensibilité",
  Pluto: "la transformation, l’intensité et le pouvoir intérieur",
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

  aspectCard: {
    position: "relative",
    marginBottom: 11,
    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 15,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  aspectHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  symbolBox: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#b88b3f",
    backgroundColor: "#0b1124",
  },

  symbol: {
    color: "#f4c95d",
    fontSize: 16,
  },

  aspectHeading: {
    flexGrow: 1,
  },

  planetNames: {
    color: "#fff8e7",
    fontSize: 11.5,
    marginBottom: 2,
  },

  aspectName: {
    color: "#f4c95d",
    fontSize: 8.5,
  },

  orbBox: {
    minWidth: 53,
    alignItems: "flex-end",
  },

  orbLabel: {
    color: "#858ca0",
    fontSize: 6.8,
    textTransform: "uppercase",
    marginBottom: 2,
  },

  orbValue: {
    color: "#e9e4d8",
    fontSize: 8.5,
  },

  description: {
    color: "#e9e4d8",
    fontSize: 8.8,
    lineHeight: 1.5,
  },

  synthesisCard: {
    marginTop: 5,
    paddingVertical: 15,
    paddingHorizontal: 17,
    backgroundColor: "#161f3d",
    borderWidth: 1,
    borderColor: "#b88b3f",
  },

  synthesisTitle: {
    color: "#f4c95d",
    fontSize: 11,
    textAlign: "center",
    marginBottom: 7,
  },

  synthesisText: {
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

  pageNumber: {
    color: "#858ca0",
    fontSize: 7.5,
    textAlign: "center",
    marginBottom: 12,
  },
});

function normalizeLongitude(value: number): number {
  return ((value % 360) + 360) % 360;
}

function angularDifference(
  firstLongitude: number,
  secondLongitude: number
): number {
  const first = normalizeLongitude(firstLongitude);
  const second = normalizeLongitude(secondLongitude);

  const rawDifference = Math.abs(first - second);

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
    const firstName = MAIN_PLANETS[firstIndex];
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
      const secondName = MAIN_PLANETS[secondIndex];
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
        calculatedAspects.push(closestAspect);
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

function getAspectInterpretation(
  calculatedAspect: CalculatedAspect
): string {
  const firstPlanet =
    PLANET_NAMES[calculatedAspect.planetA] ||
    calculatedAspect.planetA;

  const secondPlanet =
    PLANET_NAMES[calculatedAspect.planetB] ||
    calculatedAspect.planetB;

  const firstEnergy =
    PLANET_ENERGIES[calculatedAspect.planetA] ||
    "une partie importante de votre personnalité";

  const secondEnergy =
    PLANET_ENERGIES[calculatedAspect.planetB] ||
    "une autre dimension de votre personnalité";

  switch (calculatedAspect.aspect.name) {
    case "Conjonction":
      return (
        `${firstPlanet} et ${secondPlanet} unissent étroitement leurs énergies. ` +
        `Cette configuration amplifie le lien entre ${firstEnergy} et ${secondEnergy}. ` +
        `Ces deux dimensions fonctionnent souvent comme une seule force dans votre manière de vivre et de réagir.`
      );

    case "Sextile":
      return (
        `${firstPlanet} et ${secondPlanet} entretiennent une relation constructive. ` +
        `L’alliance entre ${firstEnergy} et ${secondEnergy} représente une possibilité naturelle qui se développe lorsque vous choisissez de l’utiliser consciemment.`
      );

    case "Carré":
      return (
        `${firstPlanet} et ${secondPlanet} créent une tension dynamique entre ${firstEnergy} et ${secondEnergy}. ` +
        `Cette friction peut produire des défis récurrents, mais elle devient aussi un puissant moteur de progression, de courage et de dépassement.`
      );

    case "Trigone":
      return (
        `${firstPlanet} et ${secondPlanet} circulent ensemble avec fluidité. ` +
        `L’harmonie entre ${firstEnergy} et ${secondEnergy} indique une facilité naturelle, un talent spontané ou une ressource intérieure sur laquelle vous pouvez vous appuyer.`
      );

    case "Opposition":
      return (
        `${firstPlanet} et ${secondPlanet} placent face à face ${firstEnergy} et ${secondEnergy}. ` +
        `Votre évolution demande de ne pas choisir un seul pôle, mais de créer un équilibre conscient entre ces deux besoins complémentaires.`
      );

    default:
      return (
        `${firstPlanet} et ${secondPlanet} forment une relation importante dans votre thème natal.`
      );
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
      "Votre thème présente plusieurs aspects dynamiques. " +
      "Ils ne représentent pas des obstacles définitifs, mais des forces de transformation. " +
      "Ils vous poussent à développer la maîtrise de vous-même, à dépasser les contradictions intérieures et à convertir la tension en action constructive."
    );
  }

  if (
    harmoniousCount > dynamicCount &&
    harmoniousCount >= conjunctionCount
  ) {
    return (
      "Votre thème contient plusieurs échanges harmonieux entre les planètes. " +
      "Vous disposez de ressources naturelles, de talents spontanés et d’une capacité à relier différentes facettes de votre personnalité. " +
      "Votre défi consiste surtout à utiliser activement ces facilités plutôt qu’à les considérer comme acquises."
    );
  }

  if (
    conjunctionCount > harmoniousCount &&
    conjunctionCount > dynamicCount
  ) {
    return (
      "Les conjonctions occupent une place importante dans votre thème. " +
      "Certaines énergies planétaires sont fortement concentrées et deviennent des axes majeurs de votre personnalité. " +
      "Cette intensité peut soutenir une grande détermination lorsqu’elle est dirigée avec conscience."
    );
  }

  return (
    "Votre thème présente un équilibre entre fluidité, intensité et tension créatrice. " +
    "Les aspects harmonieux indiquent vos ressources naturelles, tandis que les aspects dynamiques montrent les domaines dans lesquels votre évolution personnelle peut être la plus profonde."
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
      values.slice(index, index + pageSize)
    );
  }

  return pages;
}

export default function PdfAspects({
  planets,
}: PremiumPdfPlanetsProps) {
  const safePlanets = Array.isArray(planets)
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
    6
  );

  return (
    <>
      {aspectPages.map(
        (pageAspects, pageIndex) => {
          const isLastPage =
            pageIndex === aspectPages.length - 1;

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
                  <Text style={styles.pageNumber}>
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
                            <Text
                              style={styles.planetNames}
                            >
                              {firstPlanet} —{" "}
                              {secondPlanet}
                            </Text>

                            <Text
                              style={styles.aspectName}
                            >
                              {
                                calculatedAspect.aspect
                                  .name
                              }{" "}
                              ·{" "}
                              {
                                calculatedAspect.aspect
                                  .nature
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
                          </View>
                        </View>

                        <Text style={styles.description}>
                          {getAspectInterpretation(
                            calculatedAspect
                          )}
                        </Text>
                      </View>
                    );
                  }
                )}

                {isLastPage ? (
                  <View
                    style={styles.synthesisCard}
                    wrap={false}
                  >
                    <Text
                      style={styles.synthesisTitle}
                    >
                      Synthèse de vos aspects
                    </Text>

                    <Text
                      style={styles.synthesisText}
                    >
                      {getGlobalSynthesis(
                        calculatedAspects
                      )}
                    </Text>
                  </View>
                ) : null}
              </View>

              <PdfPageFooter />
            </Page>
          );
        }
      )}
    </>
  );
}
