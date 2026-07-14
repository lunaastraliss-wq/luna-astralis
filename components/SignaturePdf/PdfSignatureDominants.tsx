import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import PdfSignatureBrandHeader from "./PdfSignatureBrandHeader";
import PdfSignaturePageFooter from "./PdfSignaturePageFooter";

type SignaturePlanet = {
  name?: string;
  sign?: string;
  degree?: number;
  longitude?: number;
  house?: number | string | null;
  retrograde?: boolean;
};

type SignatureAngles = {
  ascendant?: number;
  midheaven?: number;
  descendant?: number;
  imumCoeli?: number;
};

type PdfSignatureDominantsProps = {
  planets?: SignaturePlanet[];
  angles?: SignatureAngles;
};

type ElementName =
  | "Feu"
  | "Terre"
  | "Air"
  | "Eau";

type ModalityName =
  | "Cardinal"
  | "Fixe"
  | "Mutable";

type CountMap<T extends string> =
  Record<T, number>;

type DominantResult<T extends string> = {
  name: T;
  count: number;
  percentage: number;
};

const MAIN_PLANETS = [
  "Sun",
  "Moon",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
] as const;

const PLANET_NAMES_FR: Record<string, string> = {
  Sun: "Soleil",
  Moon: "Lune",
  Mercury: "Mercure",
  Venus: "Vénus",
  Mars: "Mars",
  Jupiter: "Jupiter",
  Saturn: "Saturne",
  Uranus: "Uranus",
  Neptune: "Neptune",
  Pluto: "Pluton",
};

const SIGN_ELEMENTS: Record<
  string,
  ElementName
> = {
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

const ELEMENT_TEXTS: Record<
  ElementName,
  string
> = {
  Feu:
    "Le Feu domine votre thème. Votre énergie cherche à agir, créer, entreprendre et rayonner. Vous avancez souvent grâce à l’enthousiasme, à l’instinct et au besoin de donner une direction claire à votre vie.",

  Terre:
    "La Terre domine votre thème. Vous privilégiez la stabilité, le réalisme, l’organisation et les résultats concrets. Votre force réside dans votre capacité à construire progressivement et à transformer les idées en réalisations durables.",

  Air:
    "L’Air domine votre thème. La pensée, la communication, les échanges et la compréhension occupent une place centrale. Vous avez besoin de relier les idées, de partager vos perceptions et de conserver une certaine liberté intellectuelle.",

  Eau:
    "L’Eau domine votre thème. Votre sensibilité, votre intuition et votre vie émotionnelle influencent profondément votre manière de percevoir les situations. Vous captez facilement les ambiances et les mouvements subtils autour de vous.",
};

const MODALITY_TEXTS: Record<
  ModalityName,
  string
> = {
  Cardinal:
    "La modalité cardinale met l’accent sur l’initiative. Vous avez tendance à provoquer le mouvement, à lancer les projets et à réagir rapidement lorsqu’une nouvelle direction devient nécessaire.",

  Fixe:
    "La modalité fixe souligne la persévérance. Vous cherchez à stabiliser, approfondir et maintenir ce que vous avez construit. Votre détermination est une force, même si elle peut parfois devenir résistance au changement.",

  Mutable:
    "La modalité mutable révèle une grande capacité d’adaptation. Vous savez ajuster votre approche, comprendre plusieurs points de vue et évoluer selon les circonstances. Votre défi consiste à conserver un fil directeur stable.",
};

const PLANET_DOMINANCE_TEXTS: Record<
  string,
  string
> = {
  Sun:
    "Le Soleil renforce le besoin d’affirmer votre identité, de rayonner et de construire une vie fidèle à votre volonté profonde.",

  Moon:
    "La Lune renforce l’importance des émotions, de la sécurité intérieure, des besoins affectifs et des réactions instinctives.",

  Mercury:
    "Mercure met l’accent sur la pensée, la communication, la curiosité et la manière dont vous analysez votre environnement.",

  Venus:
    "Vénus souligne les relations, les valeurs personnelles, la recherche d’harmonie, le plaisir et la sensibilité esthétique.",

  Mars:
    "Mars amplifie l’action, la volonté, l’affirmation personnelle, le désir et la manière dont vous défendez vos objectifs.",

  Jupiter:
    "Jupiter accentue l’expansion, la confiance, l’apprentissage, les possibilités et la recherche de sens.",

  Saturn:
    "Saturne met en avant la responsabilité, la structure, la patience, les limites et la construction à long terme.",

  Uranus:
    "Uranus renforce le besoin d’indépendance, d’originalité, de changement et de liberté personnelle.",

  Neptune:
    "Neptune accentue l’intuition, l’imagination, la réceptivité, l’idéalisme et la sensibilité au monde invisible.",

  Pluto:
    "Pluton intensifie les processus de transformation, de régénération, de maîtrise intérieure et de dépassement.",
};

const HOUSE_MEANINGS: Record<
  number,
  string
> = {
  1:
    "l’identité, l’apparence et la manière d’entrer en contact avec le monde",

  2:
    "les ressources, la sécurité matérielle et les valeurs personnelles",

  3:
    "la communication, les apprentissages et l’environnement immédiat",

  4:
    "les racines, le foyer, la vie privée et la sécurité émotionnelle",

  5:
    "la créativité, les plaisirs, l’expression personnelle et les amours",

  6:
    "le travail quotidien, les habitudes, le service et l’organisation",

  7:
    "les relations, les partenariats et la recherche d’équilibre",

  8:
    "les transformations, l’intimité, les crises et les ressources partagées",

  9:
    "les croyances, les voyages, les études et l’élargissement de la conscience",

  10:
    "la vocation, la carrière, la réputation et les ambitions",

  11:
    "les projets collectifs, les amitiés et la vision de l’avenir",

  12:
    "la vie intérieure, l’inconscient, le retrait et la spiritualité",
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

  grid: {
    flexDirection: "row",
    marginBottom: 14,
  },

  halfCardLeft: {
    width: "49%",
    marginRight: "2%",
    padding: 15,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  halfCardRight: {
    width: "49%",
    padding: 15,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  cardTitle: {
    color: "#f4c95d",
    fontSize: 11,
    textAlign: "center",
    marginBottom: 10,
  },

  dominantName: {
    color: "#fff8e7",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 4,
  },

  dominantScore: {
    color: "#858ca0",
    fontSize: 7.5,
    textAlign: "center",
    marginBottom: 10,
  },

  text: {
    color: "#e9e4d8",
    fontSize: 8.8,
    lineHeight: 1.5,
    textAlign: "center",
  },

  distributionCard: {
    padding: 15,
    marginBottom: 14,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  distributionTitle: {
    color: "#f4c95d",
    fontSize: 11,
    textAlign: "center",
    marginBottom: 12,
  },

  distributionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  distributionLabel: {
    width: 70,
    color: "#fff8e7",
    fontSize: 8.5,
  },

  barBackground: {
    flexGrow: 1,
    height: 7,
    backgroundColor: "#28304a",
    marginHorizontal: 8,
  },

  barFill: {
    height: 7,
    backgroundColor: "#b88b3f",
  },

  distributionValue: {
    width: 36,
    color: "#c8c1b3",
    fontSize: 7.5,
    textAlign: "right",
  },

  featureCard: {
    padding: 15,
    marginBottom: 12,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  featureHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7,
  },

  featureTitle: {
    color: "#f4c95d",
    fontSize: 10.5,
  },

  featureTag: {
    color: "#858ca0",
    fontSize: 7.2,
  },

  featureText: {
    color: "#e9e4d8",
    fontSize: 8.8,
    lineHeight: 1.5,
  },

  synthesisCard: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginTop: 3,
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
    fontSize: 9,
    lineHeight: 1.55,
    textAlign: "center",
  },
});

function normalizeHouse(
  value: unknown
): number | null {
  const numericValue =
    typeof value === "number"
      ? value
      : typeof value === "string"
        ? Number(value)
        : NaN;

  if (!Number.isFinite(numericValue)) {
    return null;
  }

  const house =
    Math.trunc(numericValue);

  if (house < 1 || house > 12) {
    return null;
  }

  return house;
}

function getValidPlanets(
  planets: SignaturePlanet[]
): SignaturePlanet[] {
  return planets.filter((planet) => {
    if (
      !planet ||
      typeof planet.name !== "string"
    ) {
      return false;
    }

    return MAIN_PLANETS.includes(
      planet.name as
        (typeof MAIN_PLANETS)[number]
    );
  });
}

function createElementCounts():
  CountMap<ElementName> {
  return {
    Feu: 0,
    Terre: 0,
    Air: 0,
    Eau: 0,
  };
}

function createModalityCounts():
  CountMap<ModalityName> {
  return {
    Cardinal: 0,
    Fixe: 0,
    Mutable: 0,
  };
}

function calculateDominant<
  T extends string
>(
  counts: Record<T, number>
): DominantResult<T> {
  const entries =
    Object.entries(counts) as [
      T,
      number,
    ][];

  const total = entries.reduce(
    (sum, [, count]) =>
      sum + count,
    0
  );

  const firstEntry = entries[0];

  if (!firstEntry) {
    throw new Error(
      "Aucune donnée disponible pour calculer la dominante."
    );
  }

  const dominant = entries.reduce(
    (best, current) =>
      current[1] > best[1]
        ? current
        : best,
    firstEntry
  );

  return {
    name: dominant[0],
    count: dominant[1],
    percentage:
      total > 0
        ? Math.round(
            (dominant[1] / total) *
              100
          )
        : 0,
  };
}

function calculateElements(
  planets: SignaturePlanet[]
): CountMap<ElementName> {
  const counts =
    createElementCounts();

  planets.forEach((planet) => {
    const sign =
      typeof planet.sign === "string"
        ? planet.sign
        : "";

    const element =
      SIGN_ELEMENTS[sign];

    if (element) {
      counts[element] += 1;
    }
  });

  return counts;
}

function calculateModalities(
  planets: SignaturePlanet[]
): CountMap<ModalityName> {
  const counts =
    createModalityCounts();

  planets.forEach((planet) => {
    const sign =
      typeof planet.sign === "string"
        ? planet.sign
        : "";

    const modality =
      SIGN_MODALITIES[sign];

    if (modality) {
      counts[modality] += 1;
    }
  });

  return counts;
}

function calculateHouseCounts(
  planets: SignaturePlanet[]
): Record<number, number> {
  const counts:
    Record<number, number> = {};

  planets.forEach((planet) => {
    const house =
      normalizeHouse(planet.house);

    if (!house) {
      return;
    }

    counts[house] =
      (counts[house] || 0) + 1;
  });

  return counts;
}

function getDominantHouse(
  planets: SignaturePlanet[]
): {
  house: number | null;
  count: number;
} {
  const counts =
    calculateHouseCounts(planets);

  const entries =
    Object.entries(counts);

  if (entries.length === 0) {
    return {
      house: null,
      count: 0,
    };
  }

  const firstEntry = entries[0];

  if (!firstEntry) {
    return {
      house: null,
      count: 0,
    };
  }

  const dominant = entries.reduce(
    (best, current) =>
      current[1] > best[1]
        ? current
        : best,
    firstEntry
  );

  return {
    house: Number(dominant[0]),
    count: dominant[1],
  };
}

function normalizeDifference(
  value: number
): number {
  const normalized =
    ((value % 360) + 360) % 360;

  return normalized > 180
    ? normalized - 360
    : normalized;
}

function getPlanetScore(
  planet: SignaturePlanet,
  angles: SignatureAngles
): number {
  let score = 1;

  if (
    planet.name === "Sun" ||
    planet.name === "Moon"
  ) {
    score += 2;
  }

  const house =
    normalizeHouse(planet.house);

  if (
    house === 1 ||
    house === 4 ||
    house === 7 ||
    house === 10
  ) {
    score += 2;
  }

  if (planet.retrograde) {
    score += 0.5;
  }

  if (
    typeof planet.longitude ===
      "number" &&
    Number.isFinite(
      planet.longitude
    ) &&
    typeof angles.ascendant ===
      "number" &&
    Number.isFinite(
      angles.ascendant
    )
  ) {
    const difference =
      Math.abs(
        normalizeDifference(
          planet.longitude -
            angles.ascendant
        )
      );

    if (difference <= 8) {
      score += 2;
    }
  }

  if (
    typeof planet.longitude ===
      "number" &&
    Number.isFinite(
      planet.longitude
    ) &&
    typeof angles.midheaven ===
      "number" &&
    Number.isFinite(
      angles.midheaven
    )
  ) {
    const difference =
      Math.abs(
        normalizeDifference(
          planet.longitude -
            angles.midheaven
        )
      );

    if (difference <= 8) {
      score += 2;
    }
  }

  return score;
}

function getDominantPlanet(
  planets: SignaturePlanet[],
  angles: SignatureAngles
): SignaturePlanet | null {
  const firstPlanet = planets[0];

  if (!firstPlanet) {
    return null;
  }

  return planets.reduce(
    (
      bestPlanet,
      currentPlanet
    ) => {
      const bestScore =
        getPlanetScore(
          bestPlanet,
          angles
        );

      const currentScore =
        getPlanetScore(
          currentPlanet,
          angles
        );

      return currentScore >
        bestScore
        ? currentPlanet
        : bestPlanet;
    },
    firstPlanet
  );
}

function getPercentage(
  count: number,
  total: number
): number {
  if (total <= 0) {
    return 0;
  }

  return Math.round(
    (count / total) * 100
  );
}

function createGlobalSynthesis(
  element:
    DominantResult<ElementName>,
  modality:
    DominantResult<ModalityName>,
  dominantPlanet:
    SignaturePlanet | null,
  dominantHouse:
    number | null
): string {
  const planetName =
    dominantPlanet?.name
      ? PLANET_NAMES_FR[
          dominantPlanet.name
        ] ||
        dominantPlanet.name
      : "une énergie planétaire particulière";

  const houseMeaning =
    dominantHouse
      ? HOUSE_MEANINGS[
          dominantHouse
        ]
      : "";

  const houseText =
    dominantHouse &&
    houseMeaning
      ? `La maison ${dominantHouse}, liée à ${houseMeaning}, devient également un territoire important de votre évolution.`
      : "";

  return (
    `Votre signature dominante associe l’élément ${element.name} à une dynamique ${modality.name.toLowerCase()}. ` +
    `${planetName} ressort comme l’une des forces les plus importantes de votre thème. ` +
    `${houseText} ` +
    "Cette combinaison ne résume pas toute votre personnalité, mais elle montre la tonalité générale qui revient le plus souvent dans votre manière de penser, de ressentir et d’agir."
  ).trim();
}

function DistributionRow({
  label,
  count,
  total,
}: {
  label: string;
  count: number;
  total: number;
}) {
  const percentage =
    getPercentage(
      count,
      total
    );

  return (
    <View
      style={
        styles.distributionRow
      }
    >
      <Text
        style={
          styles.distributionLabel
        }
      >
        {label}
      </Text>

      <View
        style={
          styles.barBackground
        }
      >
        <View
          style={[
            styles.barFill,
            {
              width:
                `${percentage}%`,
            },
          ]}
        />
      </View>

      <Text
        style={
          styles.distributionValue
        }
      >
        {percentage} %
      </Text>
    </View>
  );
}

export default function PdfSignatureDominants({
  planets,
  angles,
}: PdfSignatureDominantsProps) {
  const safePlanets =
    getValidPlanets(
      Array.isArray(planets)
        ? planets
        : []
    );

  const safeAngles:
    SignatureAngles =
    angles &&
    typeof angles === "object"
      ? angles
      : {};

  const elementCounts =
    calculateElements(
      safePlanets
    );

  const modalityCounts =
    calculateModalities(
      safePlanets
    );

  const dominantElement =
    calculateDominant(
      elementCounts
    );

  const dominantModality =
    calculateDominant(
      modalityCounts
    );

  const dominantPlanet =
    getDominantPlanet(
      safePlanets,
      safeAngles
    );

  const dominantHouse =
    getDominantHouse(
      safePlanets
    );

  const totalElements =
    Object.values(
      elementCounts
    ).reduce(
      (sum, count) =>
        sum + count,
      0
    );

  const totalModalities =
    Object.values(
      modalityCounts
    ).reduce(
      (sum, count) =>
        sum + count,
      0
    );

  const dominantPlanetName =
    dominantPlanet?.name
      ? PLANET_NAMES_FR[
          dominantPlanet.name
        ] ||
        dominantPlanet.name
      : "Non déterminée";

  const dominantPlanetText =
    dominantPlanet?.name
      ? PLANET_DOMINANCE_TEXTS[
          dominantPlanet.name
        ] ||
        "Cette planète occupe une place importante dans votre thème natal."
      : "Les données disponibles ne permettent pas d’identifier une planète dominante.";

  return (
    <>
      <Page
        size="A4"
        style={styles.page}
      >
        <PdfSignatureBrandHeader />

        <View
          style={styles.content}
        >
          <View
            style={styles.badge}
          >
            <Text
              style={
                styles.badgeText
              }
            >
              Analyse Signature
            </Text>
          </View>

          <Text
            style={styles.title}
          >
            Vos dominantes astrologiques
          </Text>

          <Text
            style={styles.intro}
          >
            Les dominantes révèlent les
            énergies qui reviennent le
            plus fortement dans votre
            thème natal. Elles forment la
            tonalité générale de votre
            personnalité et montrent les
            mécanismes que vous utilisez
            le plus spontanément.
          </Text>

          <View
            style={styles.grid}
          >
            <View
              style={
                styles.halfCardLeft
              }
            >
              <Text
                style={
                  styles.cardTitle
                }
              >
                Élément dominant
              </Text>

              <Text
                style={
                  styles.dominantName
                }
              >
                {
                  dominantElement.name
                }
              </Text>

              <Text
                style={
                  styles.dominantScore
                }
              >
                {
                  dominantElement.percentage
                }{" "}
                % des planètes analysées
              </Text>

              <Text
                style={styles.text}
              >
                {
                  ELEMENT_TEXTS[
                    dominantElement.name
                  ]
                }
              </Text>
            </View>

            <View
              style={
                styles.halfCardRight
              }
            >
              <Text
                style={
                  styles.cardTitle
                }
              >
                Modalité dominante
              </Text>

              <Text
                style={
                  styles.dominantName
                }
              >
                {
                  dominantModality.name
                }
              </Text>

              <Text
                style={
                  styles.dominantScore
                }
              >
                {
                  dominantModality.percentage
                }{" "}
                % des planètes analysées
              </Text>

              <Text
                style={styles.text}
              >
                {
                  MODALITY_TEXTS[
                    dominantModality.name
                  ]
                }
              </Text>
            </View>
          </View>

          <View
            style={
              styles.distributionCard
            }
          >
            <Text
              style={
                styles.distributionTitle
              }
            >
              Répartition des éléments
            </Text>

            {(
              Object.keys(
                elementCounts
              ) as ElementName[]
            ).map((element) => (
              <DistributionRow
                key={element}
                label={element}
                count={
                  elementCounts[
                    element
                  ]
                }
                total={
                  totalElements
                }
              />
            ))}
          </View>

          <View
            style={
              styles.distributionCard
            }
          >
            <Text
              style={
                styles.distributionTitle
              }
            >
              Répartition des modalités
            </Text>

            {(
              Object.keys(
                modalityCounts
              ) as ModalityName[]
            ).map((modality) => (
              <DistributionRow
                key={modality}
                label={modality}
                count={
                  modalityCounts[
                    modality
                  ]
                }
                total={
                  totalModalities
                }
              />
            ))}
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>

      <Page
        size="A4"
        style={styles.page}
      >
        <PdfSignatureBrandHeader />

        <View
          style={styles.content}
        >
          <View
            style={styles.badge}
          >
            <Text
              style={
                styles.badgeText
              }
            >
              Analyse Signature
            </Text>
          </View>

          <Text
            style={styles.title}
          >
            Les forces centrales du thème
          </Text>

          <Text
            style={styles.intro}
          >
            Certaines planètes et
            certaines maisons occupent
            une place stratégique dans
            votre carte du ciel. Elles
            indiquent les domaines dans
            lesquels votre énergie se
            concentre naturellement.
          </Text>

          <View
            style={
              styles.featureCard
            }
          >
            <View
              style={
                styles.featureHeader
              }
            >
              <Text
                style={
                  styles.featureTitle
                }
              >
                Planète dominante :{" "}
                {dominantPlanetName}
              </Text>

              <Text
                style={
                  styles.featureTag
                }
              >
                Force centrale
              </Text>
            </View>

            <Text
              style={
                styles.featureText
              }
            >
              {dominantPlanetText}
            </Text>
          </View>

          <View
            style={
              styles.featureCard
            }
          >
            <View
              style={
                styles.featureHeader
              }
            >
              <Text
                style={
                  styles.featureTitle
                }
              >
                {dominantHouse.house
                  ? `Maison dominante : maison ${dominantHouse.house}`
                  : "Maison dominante"}
              </Text>

              <Text
                style={
                  styles.featureTag
                }
              >
                {dominantHouse.count >
                0
                  ? `${
                      dominantHouse.count
                    } planète${
                      dominantHouse.count >
                      1
                        ? "s"
                        : ""
                    }`
                  : "Non déterminée"}
              </Text>
            </View>

            <Text
              style={
                styles.featureText
              }
            >
              {dominantHouse.house
                ? `La maison ${dominantHouse.house} concentre une partie importante de votre énergie. Elle concerne ${HOUSE_MEANINGS[dominantHouse.house]}. Les expériences liées à ce domaine occupent probablement une place majeure dans votre développement personnel.`
                : "Les données disponibles ne permettent pas d’identifier une maison dominante avec suffisamment de précision."}
            </Text>
          </View>

          <View
            style={
              styles.featureCard
            }
          >
            <View
              style={
                styles.featureHeader
              }
            >
              <Text
                style={
                  styles.featureTitle
                }
              >
                Votre fonctionnement
                naturel
              </Text>

              <Text
                style={
                  styles.featureTag
                }
              >
                Signature globale
              </Text>
            </View>

            <Text
              style={
                styles.featureText
              }
            >
              Votre élément dominant
              décrit la substance
              principale de votre
              énergie, tandis que votre
              modalité dominante montre
              la manière dont vous la
              mettez en mouvement.
              Ensemble, ils révèlent
              votre rythme naturel et
              votre façon habituelle
              d’aborder les événements.
            </Text>
          </View>

          <View
            style={
              styles.synthesisCard
            }
          >
            <Text
              style={
                styles.synthesisTitle
              }
            >
              Synthèse de vos dominantes
            </Text>

            <Text
              style={
                styles.synthesisText
              }
            >
              {createGlobalSynthesis(
                dominantElement,
                dominantModality,
                dominantPlanet,
                dominantHouse.house
              )}
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>
    </>
  );
}
