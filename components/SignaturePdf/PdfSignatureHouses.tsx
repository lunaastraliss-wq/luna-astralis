import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  ASCENDANT_ICON,
  PLANET_ICONS,
} from "./SignaturePdfAssets";

import { pdfStyles } from "./SignaturePdfStyles";

import PdfSignatureBrandHeader from "./PdfSignatureBrandHeader";
import PdfSignaturePageFooter from "./PdfSignaturePageFooter";

/*
 * Types locaux
 *
 * Ils évitent toute dépendance envers PremiumPdfTypes.
 * Le composant a seulement besoin du nom et de la maison
 * de chaque planète.
 */

type SignatureHousePlanet = {
  name?: string;
  sign?: string;
  degree?: number;
  longitude?: number;
  house?: number | string | null;
  retrograde?: boolean;
};

type PdfSignatureHousesProps = {
  planets?: SignatureHousePlanet[];
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

const HOUSE_NUMBERS = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
] as const;

type HouseNumber =
  (typeof HOUSE_NUMBERS)[number];

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

const HOUSE_TITLES: Record<
  HouseNumber,
  string
> = {
  1: "Identité et présence",
  2: "Valeurs et ressources",
  3: "Pensée et communication",
  4: "Racines et vie intérieure",
  5: "Créativité et expression",
  6: "Travail et quotidien",
  7: "Relations et engagements",
  8: "Transformation et intimité",
  9: "Vision et expansion",
  10: "Vocation et réalisation",
  11: "Projets et communauté",
  12: "Inconscient et spiritualité",
};

const HOUSE_KEYWORDS: Record<
  HouseNumber,
  string
> = {
  1: "Moi • Apparence • Initiative",
  2: "Argent • Sécurité • Valeurs",
  3: "Échanges • Études • Entourage",
  4: "Famille • Foyer • Racines",
  5: "Création • Plaisir • Romance",
  6: "Habitudes • Service • Santé",
  7: "Couple • Contrats • Partenariat",
  8: "Intimité • Crises • Renaissance",
  9: "Voyages • Croyances • Savoir",
  10: "Carrière • Ambition • Réputation",
  11: "Amitiés • Réseaux • Avenir",
  12: "Retrait • Intuition • Guérison",
};

const HOUSE_DESCRIPTIONS: Record<
  HouseNumber,
  string
> = {
  1:
    "La maison I décrit votre manière spontanée d’entrer dans la vie, votre présence, votre apparence et la façon dont vous affirmez votre individualité.",

  2:
    "La maison II concerne vos ressources, votre rapport à l’argent, votre sentiment de sécurité et les valeurs sur lesquelles vous construisez votre stabilité.",

  3:
    "La maison III décrit votre manière d’apprendre, de communiquer, de transmettre vos idées et d’interagir avec votre environnement immédiat.",

  4:
    "La maison IV représente vos racines, votre famille, votre foyer, votre mémoire émotionnelle et les fondations les plus privées de votre personnalité.",

  5:
    "La maison V concerne votre créativité, votre capacité à rayonner, vos plaisirs, vos élans amoureux et la manière dont vous exprimez votre singularité.",

  6:
    "La maison VI décrit votre organisation quotidienne, votre travail concret, vos habitudes, votre sens du service et votre relation au bien-être.",

  7:
    "La maison VII représente les relations engagées, le couple, les associations et les qualités que vous recherchez ou découvrez à travers les autres.",

  8:
    "La maison VIII concerne l’intimité, les ressources partagées, les crises, les attachements profonds et votre capacité de transformation intérieure.",

  9:
    "La maison IX représente votre vision du monde, vos croyances, les études supérieures, les voyages et votre besoin d’élargir votre compréhension de la vie.",

  10:
    "La maison X décrit votre vocation, votre ambition, votre image publique, votre rapport à la réussite et la contribution que vous souhaitez laisser.",

  11:
    "La maison XI concerne les amitiés, les groupes, les réseaux, les projets collectifs et les aspirations que vous construisez pour l’avenir.",

  12:
    "La maison XII représente votre vie intérieure profonde, l’inconscient, les périodes de retrait, la compassion et les dimensions plus subtiles de votre existence.",
};

const HOUSE_SIGNATURE_INSIGHTS: Record<
  HouseNumber,
  string
> = {
  1:
    "Une maison I occupée accentue le besoin d’agir selon votre propre impulsion et de développer une identité clairement assumée.",

  2:
    "Une maison II occupée met l’accent sur la construction de la sécurité, l’autonomie matérielle et la reconnaissance de votre propre valeur.",

  3:
    "Une maison III occupée renforce le besoin de comprendre, d’échanger, d’apprendre et de créer des liens grâce aux idées et à la parole.",

  4:
    "Une maison IV occupée intensifie l’importance du foyer, des racines, de la famille et du sentiment de sécurité émotionnelle.",

  5:
    "Une maison V occupée souligne la créativité, l’expression personnelle, le plaisir, la romance et le besoin de laisser une trace unique.",

  6:
    "Une maison VI occupée met l’accent sur l’organisation, l’utilité, les responsabilités quotidiennes et l’amélioration progressive de votre vie.",

  7:
    "Une maison VII occupée rend les relations essentielles à votre évolution. Les autres deviennent des miroirs importants de votre personnalité.",

  8:
    "Une maison VIII occupée indique une grande profondeur émotionnelle et des expériences capables de transformer durablement votre manière de vivre.",

  9:
    "Une maison IX occupée renforce le besoin de chercher du sens, d’élargir vos horizons et de développer une vision personnelle du monde.",

  10:
    "Une maison X occupée souligne l’importance de la vocation, de la reconnaissance, des responsabilités et de la construction d’une œuvre durable.",

  11:
    "Une maison XI occupée favorise les projets d’avenir, les réseaux, les causes collectives et les relations fondées sur une vision partagée.",

  12:
    "Une maison XII occupée accentue la sensibilité, l’intuition, la vie intérieure et le besoin de comprendre les mécanismes inconscients.",
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 14,
  },

  signatureBadge: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingHorizontal: 13,
    marginBottom: 7,
    backgroundColor: "#0b1124",
    borderWidth: 0.7,
    borderColor: "#f4c95d",
  },

  signatureBadgeText: {
    color: "#f4c95d",
    fontSize: 6.5,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    textAlign: "center",
  },

  kicker: {
    color: "#f4c95d",
    fontSize: 8.5,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  title: {
    color: "#fff8e7",
    fontSize: 25,
    lineHeight: 1.15,
    textAlign: "center",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 9,
  },

  dividerLine: {
    width: 50,
    height: 1,
    backgroundColor: "#8f793c",
  },

  dividerIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginHorizontal: 10,
  },

  lead: {
    maxWidth: 420,
    color: "#c9c5bb",
    fontSize: 9.1,
    lineHeight: 1.44,
    textAlign: "center",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  houseCard: {
    position: "relative",
    width: "31.8%",
    minHeight: 128,
    paddingTop: 11,
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginBottom: 8,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  houseCardActive: {
    borderColor: "#8f793c",
  },

  cardAccent: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 34,
    height: 1.5,
    backgroundColor: "#f4c95d",
  },

  houseHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  houseNumberCircle: {
    width: 27,
    height: 27,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  houseNumber: {
    color: "#f4c95d",
    fontSize: 8.2,
  },

  houseHeaderText: {
    flexGrow: 1,
    flexBasis: 0,
  },

  houseLabel: {
    color: "#9da4b7",
    fontSize: 6.3,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 2,
  },

  houseTitle: {
    color: "#fff8e7",
    fontSize: 9,
    lineHeight: 1.2,
  },

  keywords: {
    color: "#f4c95d",
    fontSize: 6.7,
    lineHeight: 1.3,
    marginBottom: 6,
  },

  planetCount: {
    color: "#bfc5d5",
    fontSize: 7.2,
    lineHeight: 1.35,
    marginBottom: 4,
  },

  planetNames: {
    color: "#d8d4ca",
    fontSize: 7.1,
    lineHeight: 1.35,
  },

  dominantBox: {
    position: "relative",
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 14,
    paddingHorizontal: 18,
    marginBottom: 9,
    overflow: "hidden",
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  dominantAccentTop: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 100,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  dominantAccentBottom: {
    position: "absolute",
    bottom: -1,
    right: 0,
    width: 72,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  dominantIconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#f4c95d",
  },

  dominantIcon: {
    width: 29,
    height: 29,
    objectFit: "contain",
  },

  dominantWatermark: {
    position: "absolute",
    top: 8,
    right: 14,
    width: 86,
    height: 86,
    objectFit: "contain",
    opacity: 0.035,
  },

  dominantContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  dominantKicker: {
    color: "#f4c95d",
    fontSize: 7.8,
    letterSpacing: 1.25,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  dominantTitle: {
    color: "#fff8e7",
    fontSize: 16,
    lineHeight: 1.25,
    marginBottom: 6,
  },

  dominantText: {
    color: "#d8d4ca",
    fontSize: 8.4,
    lineHeight: 1.42,
    marginBottom: 6,
  },

  dominantPlanets: {
    color: "#bfc5d5",
    fontSize: 7.8,
    lineHeight: 1.38,
  },

  insightBox: {
    position: "relative",
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 16,
    marginBottom: 8,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  insightAccent: {
    position: "absolute",
    bottom: -1,
    right: 0,
    width: 66,
    height: 1.5,
    backgroundColor: "#f4c95d",
  },

  insightTitle: {
    color: "#f4c95d",
    fontSize: 7.8,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  insightText: {
    color: "#c9cedb",
    fontSize: 8.4,
    lineHeight: 1.42,
  },

  note: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 13,
    marginBottom: 24,
    backgroundColor: "#141b32",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  noteAccent: {
    position: "absolute",
    bottom: -1,
    right: 0,
    width: 62,
    height: 1.5,
    backgroundColor: "#f4c95d",
  },

  noteIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginRight: 10,
  },

  noteText: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#bfc5d5",
    fontSize: 7.7,
    lineHeight: 1.32,
  },
});

function getPlanetData(
  planets: SignatureHousePlanet[],
  planetName: string
): SignatureHousePlanet | null {
  return (
    planets.find((planet) => {
      return (
        typeof planet?.name === "string" &&
        planet.name.toLowerCase() ===
          planetName.toLowerCase()
      );
    }) ?? null
  );
}

function normalizeHouse(
  value: unknown
): HouseNumber | null {
  const numericValue =
    typeof value === "number"
      ? value
      : typeof value === "string"
        ? Number(value)
        : NaN;

  if (!Number.isFinite(numericValue)) {
    return null;
  }

  const house = Math.trunc(numericValue);

  if (house < 1 || house > 12) {
    return null;
  }

  return house as HouseNumber;
}

function getHouseIcon(
  house: HouseNumber
): string {
  switch (house) {
    case 1:
      return ASCENDANT_ICON;

    case 2:
      return PLANET_ICONS.Venus;

    case 3:
      return PLANET_ICONS.Mercury;

    case 4:
      return PLANET_ICONS.Moon;

    case 5:
      return PLANET_ICONS.Sun;

    case 6:
      return PLANET_ICONS.Mercury;

    case 7:
      return PLANET_ICONS.Venus;

    case 8:
      return PLANET_ICONS.Pluto;

    case 9:
      return PLANET_ICONS.Jupiter;

    case 10:
      return PLANET_ICONS.Saturn;

    case 11:
      return PLANET_ICONS.Uranus;

    case 12:
      return PLANET_ICONS.Neptune;

    default:
      return ASCENDANT_ICON;
  }
}

function getPlanetsByHouse(
  planets: SignatureHousePlanet[]
): Record<
  HouseNumber,
  SignatureHousePlanet[]
> {
  const result = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
  } as Record<
    HouseNumber,
    SignatureHousePlanet[]
  >;

  MAIN_PLANETS.forEach((planetName) => {
    const planet = getPlanetData(
      planets,
      planetName
    );

    if (!planet) {
      return;
    }

    const house = normalizeHouse(
      planet.house
    );

    if (!house) {
      return;
    }

    result[house].push(planet);
  });

  return result;
}

function getDominantHouse(
  planetsByHouse: Record<
    HouseNumber,
    SignatureHousePlanet[]
  >
): HouseNumber | null {
  const sortedHouses =
    HOUSE_NUMBERS.slice().sort(
      (first, second) =>
        planetsByHouse[second].length -
        planetsByHouse[first].length
    );

  const dominantHouse = sortedHouses[0];

  if (
    !dominantHouse ||
    planetsByHouse[dominantHouse].length === 0
  ) {
    return null;
  }

  return dominantHouse;
}

function getPlanetNames(
  planets: SignatureHousePlanet[]
): string {
  if (planets.length === 0) {
    return "Aucune planète principale";
  }

  return planets
    .map((planet) => {
      const name =
        typeof planet.name === "string"
          ? planet.name
          : "";

      return (
        PLANET_NAMES_FR[name] ||
        name ||
        "Planète"
      );
    })
    .join(", ");
}

export default function PdfSignatureHouses({
  planets,
}: PdfSignatureHousesProps) {
  const safePlanets =
    Array.isArray(planets)
      ? planets
      : [];

  const planetsByHouse =
    getPlanetsByHouse(safePlanets);

  const dominantHouse =
    getDominantHouse(planetsByHouse);

  const dominantPlanets =
    dominantHouse
      ? planetsByHouse[dominantHouse]
      : [];

  const dominantIcon =
    dominantHouse
      ? getHouseIcon(dominantHouse)
      : ASCENDANT_ICON;

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfSignatureBrandHeader />

      <View style={styles.header}>
        <View
          style={styles.signatureBadge}
        >
          <Text
            style={
              styles.signatureBadgeText
            }
          >
            Analyse Signature
          </Text>
        </View>

        <Text style={styles.kicker}>
          Domaines de vie
        </Text>

        <Text style={styles.title}>
          Vos douze maisons astrologiques
        </Text>

        <View style={styles.divider}>
          <View
            style={styles.dividerLine}
          />

          <Image
            src={ASCENDANT_ICON}
            style={styles.dividerIcon}
          />

          <View
            style={styles.dividerLine}
          />
        </View>

        <Text style={styles.lead}>
          Les maisons indiquent dans quels domaines de votre
          existence les énergies planétaires s’expriment le plus
          directement. Une maison occupée devient souvent un lieu
          important d’expérience, d’apprentissage et d’évolution.
        </Text>
      </View>

      <View style={styles.grid}>
        {HOUSE_NUMBERS.map((house) => {
          const housePlanets =
            planetsByHouse[house];

          const hasPlanets =
            housePlanets.length > 0;

          return (
            <View
              key={house}
              wrap={false}
              style={
                hasPlanets
                  ? [
                      styles.houseCard,
                      styles.houseCardActive,
                    ]
                  : styles.houseCard
              }
            >
              {hasPlanets ? (
                <View
                  style={styles.cardAccent}
                />
              ) : null}

              <View
                style={styles.houseHeader}
              >
                <View
                  style={
                    styles.houseNumberCircle
                  }
                >
                  <Text
                    style={styles.houseNumber}
                  >
                    {house}
                  </Text>
                </View>

                <View
                  style={
                    styles.houseHeaderText
                  }
                >
                  <Text
                    style={styles.houseLabel}
                  >
                    Maison {house}
                  </Text>

                  <Text
                    style={styles.houseTitle}
                  >
                    {HOUSE_TITLES[house]}
                  </Text>
                </View>
              </View>

              <Text style={styles.keywords}>
                {HOUSE_KEYWORDS[house]}
              </Text>

              <Text
                style={styles.planetCount}
              >
                {housePlanets.length === 0
                  ? "Aucune planète principale"
                  : housePlanets.length === 1
                    ? "1 planète principale"
                    : `${housePlanets.length} planètes principales`}
              </Text>

              {hasPlanets ? (
                <Text
                  style={styles.planetNames}
                >
                  {getPlanetNames(
                    housePlanets
                  )}
                </Text>
              ) : null}
            </View>
          );
        })}
      </View>

      <View
        style={styles.dominantBox}
        wrap={false}
      >
        <View
          style={
            styles.dominantAccentTop
          }
        />

        <View
          style={
            styles.dominantAccentBottom
          }
        />

        <View
          style={
            styles.dominantIconCircle
          }
        >
          <Image
            src={dominantIcon}
            style={styles.dominantIcon}
          />
        </View>

        <Image
          src={dominantIcon}
          style={
            styles.dominantWatermark
          }
        />

        <View
          style={styles.dominantContent}
        >
          <Text
            style={styles.dominantKicker}
          >
            Votre maison la plus occupée
          </Text>

          <Text
            style={styles.dominantTitle}
          >
            {dominantHouse
              ? `Maison ${dominantHouse} — ${HOUSE_TITLES[dominantHouse]}`
              : "Non déterminée"}
          </Text>

          <Text
            style={styles.dominantText}
          >
            {dominantHouse
              ? HOUSE_DESCRIPTIONS[
                  dominantHouse
                ]
              : "Aucune maison dominante n’a pu être déterminée à partir des données planétaires disponibles."}
          </Text>

          {dominantHouse ? (
            <Text
              style={
                styles.dominantPlanets
              }
            >
              Planètes présentes :{" "}
              {getPlanetNames(
                dominantPlanets
              )}
            </Text>
          ) : null}
        </View>
      </View>

      <View
        style={styles.insightBox}
        wrap={false}
      >
        <View
          style={styles.insightAccent}
        />

        <Text
          style={styles.insightTitle}
        >
          Regard Signature
        </Text>

        <Text
          style={styles.insightText}
        >
          {dominantHouse
            ? HOUSE_SIGNATURE_INSIGHTS[
                dominantHouse
              ]
            : "La répartition des planètes dans les maisons permet de comprendre où votre énergie se concentre. Une maison vide n’est pas inactive : son signe d’entrée et son maître astrologique continuent de décrire son fonctionnement."}
        </Text>
      </View>

      <View
        style={styles.note}
        wrap={false}
      >
        <View
          style={styles.noteAccent}
        />

        <Image
          src={PLANET_ICONS.Moon}
          style={styles.noteIcon}
        />

        <Text style={styles.noteText}>
          Une maison vide ne signifie pas qu’un domaine de vie est
          absent ou sans importance. Elle indique simplement qu’aucune
          des dix principales planètes n’y était placée au moment de
          votre naissance.
        </Text>
      </View>

      <PdfSignaturePageFooter />
    </Page>
  );
}
