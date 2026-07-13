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

type CorePlanetName =
  | "Sun"
  | "Moon"
  | "Mercury"
  | "Venus"
  | "Mars"
  | "Jupiter"
  | "Saturn";

const SIGN_NAMES_FR: Record<string, string> = {
  Aries: "Bélier",
  Taurus: "Taureau",
  Gemini: "Gémeaux",
  Cancer: "Cancer",
  Leo: "Lion",
  Virgo: "Vierge",
  Libra: "Balance",
  Scorpio: "Scorpion",
  Sagittarius: "Sagittaire",
  Capricorn: "Capricorne",
  Aquarius: "Verseau",
  Pisces: "Poissons",

  Bélier: "Bélier",
  Taureau: "Taureau",
  Gémeaux: "Gémeaux",
  Lion: "Lion",
  Vierge: "Vierge",
  Balance: "Balance",
  Scorpion: "Scorpion",
  Sagittaire: "Sagittaire",
  Capricorne: "Capricorne",
  Verseau: "Verseau",
  Poissons: "Poissons",
};

const SIGN_ELEMENTS: Record<string, ElementName> = {
  Bélier: "Feu",
  Lion: "Feu",
  Sagittaire: "Feu",

  Taureau: "Terre",
  Vierge: "Terre",
  Capricorne: "Terre",

  Gémeaux: "Air",
  Balance: "Air",
  Verseau: "Air",

  Cancer: "Eau",
  Scorpion: "Eau",
  Poissons: "Eau",
};

const SIGN_MODALITIES: Record<
  string,
  ModalityName
> = {
  Bélier: "Cardinal",
  Cancer: "Cardinal",
  Balance: "Cardinal",
  Capricorne: "Cardinal",

  Taureau: "Fixe",
  Lion: "Fixe",
  Scorpion: "Fixe",
  Verseau: "Fixe",

  Gémeaux: "Mutable",
  Vierge: "Mutable",
  Sagittaire: "Mutable",
  Poissons: "Mutable",
};

const ELEMENT_SYNTHESIS: Record<
  ElementName,
  string
> = {
  Feu:
    "Votre thème possède une tonalité active, expressive et volontaire. Vous avancez grâce à l’inspiration, au courage et au besoin de donner une direction personnelle à votre vie.",

  Terre:
    "Votre thème possède une tonalité concrète, structurée et réaliste. Vous avancez grâce à la patience, au travail régulier et à la capacité de transformer les idées en réalisations durables.",

  Air:
    "Votre thème possède une tonalité intellectuelle, relationnelle et communicative. Vous avancez grâce aux idées, aux échanges et à votre capacité à comprendre plusieurs perspectives.",

  Eau:
    "Votre thème possède une tonalité intuitive, émotionnelle et profonde. Vous avancez grâce à votre sensibilité, à votre perception des ambiances et à votre compréhension des besoins humains.",
};

const MODALITY_SYNTHESIS: Record<
  ModalityName,
  string
> = {
  Cardinal:
    "Votre énergie cherche naturellement à commencer, décider et provoquer le mouvement.",

  Fixe:
    "Votre énergie cherche naturellement à stabiliser, approfondir et préserver ce qui possède de la valeur.",

  Mutable:
    "Votre énergie cherche naturellement à comprendre, adapter et transformer votre approche selon les circonstances.",
};

const HOUSE_MEANINGS: Record<number, string> = {
  1: "l’identité, l’affirmation personnelle et la manière dont vous vous présentez au monde",
  2: "la sécurité, les ressources et les valeurs personnelles",
  3: "la communication, les apprentissages et les échanges quotidiens",
  4: "les racines, le foyer et la sécurité intérieure",
  5: "la créativité, l’expression personnelle, les plaisirs et les amours",
  6: "le travail quotidien, l’organisation, les habitudes et le service",
  7: "les relations, les engagements et les partenariats",
  8: "les transformations, l’intimité, le pouvoir personnel et les ressources partagées",
  9: "la croissance, les croyances, les voyages et la transmission",
  10: "la vocation, la carrière, les ambitions et la reconnaissance",
  11: "les projets, les réseaux, les amitiés et la vision de l’avenir",
  12: "la vie intérieure, l’inconscient, l’intuition et le retrait",
};

const PLANET_KEYS: Record<
  CorePlanetName,
  string
> = {
  Sun:
    "Le Soleil représente votre identité consciente et le besoin de devenir pleinement vous-même.",

  Moon:
    "La Lune révèle votre monde émotionnel, vos besoins de sécurité et vos réactions instinctives.",

  Mercury:
    "Mercure décrit votre pensée, votre communication et votre manière de comprendre les situations.",

  Venus:
    "Vénus révèle votre manière d’aimer, vos valeurs, vos goûts et votre besoin d’harmonie.",

  Mars:
    "Mars montre votre énergie d’action, votre désir et votre manière de défendre vos objectifs.",

  Jupiter:
    "Jupiter décrit votre confiance, votre croissance, vos possibilités et votre recherche de sens.",

  Saturn:
    "Saturne révèle votre discipline, vos responsabilités et ce que vous construisez dans la durée.",
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

  coreCard: {
    paddingVertical: 17,
    paddingHorizontal: 19,
    marginBottom: 14,
    backgroundColor: "#161f3d",
    borderWidth: 1,
    borderColor: "#b88b3f",
  },

  coreTitle: {
    color: "#f4c95d",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 8,
  },

  coreText: {
    color: "#e9e4d8",
    fontSize: 9.1,
    lineHeight: 1.58,
    textAlign: "center",
  },

  grid: {
    flexDirection: "row",
    marginBottom: 13,
  },

  leftColumn: {
    width: "49%",
    marginRight: "2%",
  },

  rightColumn: {
    width: "49%",
  },

  smallCard: {
    minHeight: 156,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  smallTitle: {
    color: "#f4c95d",
    fontSize: 10.2,
    textAlign: "center",
    marginBottom: 8,
  },

  smallText: {
    color: "#e9e4d8",
    fontSize: 8.6,
    lineHeight: 1.5,
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 7,
  },

  cardTitle: {
    color: "#f4c95d",
    fontSize: 10.7,
  },

  cardTag: {
    color: "#858ca0",
    fontSize: 7.1,
    textTransform: "uppercase",
  },

  cardText: {
    color: "#e9e4d8",
    fontSize: 8.9,
    lineHeight: 1.52,
  },

  directionCard: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 13,
    backgroundColor: "#161f3d",
    borderWidth: 1,
    borderColor: "#b88b3f",
  },

  directionTitle: {
    color: "#f4c95d",
    fontSize: 11.5,
    textAlign: "center",
    marginBottom: 8,
  },

  directionText: {
    color: "#e9e4d8",
    fontSize: 9,
    lineHeight: 1.56,
    textAlign: "center",
  },

  finalCard: {
    paddingVertical: 20,
    paddingHorizontal: 21,
    marginTop: 5,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#b88b3f",
  },

  finalTitle: {
    color: "#f4c95d",
    fontSize: 12.5,
    textAlign: "center",
    marginBottom: 10,
  },

  finalText: {
    color: "#fff8e7",
    fontSize: 9.3,
    lineHeight: 1.62,
    textAlign: "center",
  },

  closingText: {
    color: "#c8c1b3",
    fontSize: 8.8,
    lineHeight: 1.55,
    textAlign: "center",
    marginTop: 14,
    paddingHorizontal: 14,
  },
});

function getPlanet(
  planets: PremiumPlanet[],
  name: CorePlanetName
): PremiumPlanet | null {
  return (
    planets.find(
      (planet) => planet?.name === name
    ) || null
  );
}

function getFrenchSign(
  sign?: string
): string {
  if (!sign) {
    return "non précisé";
  }

  return SIGN_NAMES_FR[sign] || sign;
}

function longitudeToSign(
  longitude?: number
): string | null {
  if (
    typeof longitude !== "number" ||
    !Number.isFinite(longitude)
  ) {
    return null;
  }

  const signs = [
    "Bélier",
    "Taureau",
    "Gémeaux",
    "Cancer",
    "Lion",
    "Vierge",
    "Balance",
    "Scorpion",
    "Sagittaire",
    "Capricorne",
    "Verseau",
    "Poissons",
  ];

  const normalized =
    ((longitude % 360) + 360) % 360;

  return signs[
    Math.floor(normalized / 30)
  ];
}

function countElements(
  planets: PremiumPlanet[]
): Record<ElementName, number> {
  const counts: Record<ElementName, number> = {
    Feu: 0,
    Terre: 0,
    Air: 0,
    Eau: 0,
  };

  planets.forEach((planet) => {
    const sign = getFrenchSign(
      planet.sign
    );

    const element =
      SIGN_ELEMENTS[sign];

    if (element) {
      counts[element] += 1;
    }
  });

  return counts;
}

function countModalities(
  planets: PremiumPlanet[]
): Record<ModalityName, number> {
  const counts: Record<ModalityName, number> = {
    Cardinal: 0,
    Fixe: 0,
    Mutable: 0,
  };

  planets.forEach((planet) => {
    const sign = getFrenchSign(
      planet.sign
    );

    const modality =
      SIGN_MODALITIES[sign];

    if (modality) {
      counts[modality] += 1;
    }
  });

  return counts;
}

function getDominantCategory<T extends string>(
  counts: Record<T, number>
): T {
  const entries = Object.entries(
    counts
  ) as [T, number][];

  return entries.reduce(
    (best, current) =>
      current[1] > best[1]
        ? current
        : best
  )[0];
}

function getDominantHouse(
  planets: PremiumPlanet[]
): number | null {
  const counts: Record<number, number> = {};

  planets.forEach((planet) => {
    if (
      typeof planet.house !== "number" ||
      !Number.isFinite(planet.house)
    ) {
      return;
    }

    const house = Math.round(
      planet.house
    );

    if (house < 1 || house > 12) {
      return;
    }

    counts[house] =
      (counts[house] || 0) + 1;
  });

  const entries = Object.entries(
    counts
  );

  if (entries.length === 0) {
    return null;
  }

  return Number(
    entries.reduce(
      (best, current) =>
        current[1] > best[1]
          ? current
          : best
    )[0]
  );
}

function createCoreIdentityText(
  sun: PremiumPlanet | null,
  moon: PremiumPlanet | null,
  ascendantSign: string | null
): string {
  const sunSign =
    getFrenchSign(sun?.sign);

  const moonSign =
    getFrenchSign(moon?.sign);

  const ascendant =
    ascendantSign || "non précisé";

  return (
    `Votre identité astrologique repose sur un Soleil en ${sunSign}, une Lune en ${moonSign} et un Ascendant en ${ascendant}. ` +
    "Le Soleil décrit la direction que vous cherchez à donner à votre vie. La Lune montre ce dont vous avez besoin pour vous sentir intérieurement en sécurité. L’Ascendant révèle votre manière d’entrer dans le monde et la première énergie que vous exprimez. " +
    "Votre équilibre devient plus solide lorsque ces trois dimensions ne se combattent pas, mais se soutiennent."
  );
}

function createDominantText(
  element: ElementName,
  modality: ModalityName
): string {
  return (
    `${ELEMENT_SYNTHESIS[element]} ` +
    `${MODALITY_SYNTHESIS[modality]} ` +
    `L’association de l’élément ${element} et de la modalité ${modality.toLowerCase()} forme l’une des signatures les plus visibles de votre thème.`
  );
}

function createHouseText(
  house: number | null
): string {
  if (!house) {
    return (
      "Les données disponibles ne permettent pas d’identifier une maison nettement dominante. " +
      "Votre énergie semble se répartir entre plusieurs domaines de vie."
    );
  }

  return (
    `La maison ${house} concentre une part importante de votre énergie. ` +
    `Elle concerne ${HOUSE_MEANINGS[house]}. ` +
    "Les expériences associées à cette maison peuvent revenir régulièrement et jouer un rôle majeur dans votre évolution."
  );
}

function createPlanetCardText(
  planet: PremiumPlanet | null,
  name: CorePlanetName
): string {
  const translatedName =
    PLANET_NAMES[name] || name;

  if (!planet) {
    return (
      `Les données disponibles ne permettent pas d’analyser précisément ${translatedName}.`
    );
  }

  const sign =
    getFrenchSign(planet.sign);

  const houseText =
    typeof planet.house === "number"
      ? ` en maison ${Math.round(
          planet.house
        )}`
      : "";

  return (
    `${PLANET_KEYS[name]} ` +
    `${translatedName} se trouve en ${sign}${houseText}. ` +
    "Cette position montre comment cette fonction psychologique s’exprime concrètement dans votre thème."
  );
}

function createLifeDirectionText(
  midheavenSign: string | null,
  dominantHouse: number | null
): string {
  const mcText =
    midheavenSign
      ? `Votre Milieu du Ciel en ${midheavenSign} indique la direction dans laquelle votre vocation et votre reconnaissance peuvent se développer.`
      : "Le signe du Milieu du Ciel n’est pas disponible dans les données analysées.";

  const houseText =
    dominantHouse
      ? `La maison ${dominantHouse} ajoute une importance particulière au domaine de ${HOUSE_MEANINGS[dominantHouse]}.`
      : "";

  return (
    `${mcText} ${houseText} ` +
    "Votre trajectoire gagne en cohérence lorsque vos ambitions extérieures restent fidèles à vos besoins intérieurs et à vos valeurs personnelles."
  ).trim();
}

function createFinalSynthesis(
  sun: PremiumPlanet | null,
  moon: PremiumPlanet | null,
  venus: PremiumPlanet | null,
  mars: PremiumPlanet | null,
  saturn: PremiumPlanet | null,
  element: ElementName,
  modality: ModalityName
): string {
  const sunSign =
    getFrenchSign(sun?.sign);

  const moonSign =
    getFrenchSign(moon?.sign);

  const venusSign =
    getFrenchSign(venus?.sign);

  const marsSign =
    getFrenchSign(mars?.sign);

  const saturnSign =
    getFrenchSign(saturn?.sign);

  return (
    `Votre thème réunit un Soleil en ${sunSign}, une Lune en ${moonSign}, une Vénus en ${venusSign}, un Mars en ${marsSign} et un Saturne en ${saturnSign}. ` +
    `Votre dominante ${element} vous donne la substance principale de votre énergie, tandis que votre modalité ${modality.toLowerCase()} décrit votre manière naturelle d’avancer. ` +
    "Votre potentiel ne dépend pas d’une seule planète ou d’un seul signe. Il naît de la manière dont toutes ces dimensions collaborent. " +
    "Vos qualités deviennent plus puissantes lorsque vous les utilisez consciemment, et vos défis deviennent des forces lorsque vous acceptez de les travailler plutôt que de les subir. " +
    "Votre carte du ciel ne fixe pas votre avenir : elle met en lumière vos tendances, vos ressources et les chemins par lesquels vous pouvez devenir plus pleinement vous-même."
  );
}

export default function PdfPremiumSynthesis({
  planets,
  angles,
}: PremiumPdfSummaryProps) {
  const safePlanets = Array.isArray(planets)
    ? planets
    : [];

  const safeAngles =
    angles &&
    typeof angles === "object"
      ? angles
      : {};

  const sun = getPlanet(
    safePlanets,
    "Sun"
  );

  const moon = getPlanet(
    safePlanets,
    "Moon"
  );

  const mercury = getPlanet(
    safePlanets,
    "Mercury"
  );

  const venus = getPlanet(
    safePlanets,
    "Venus"
  );

  const mars = getPlanet(
    safePlanets,
    "Mars"
  );

  const jupiter = getPlanet(
    safePlanets,
    "Jupiter"
  );

  const saturn = getPlanet(
    safePlanets,
    "Saturn"
  );

  const ascendantSign =
    longitudeToSign(
      typeof safeAngles.ascendant ===
        "number"
        ? safeAngles.ascendant
        : undefined
    );

  const midheavenSign =
    longitudeToSign(
      typeof safeAngles.midheaven ===
        "number"
        ? safeAngles.midheaven
        : undefined
    );

  const elementCounts =
    countElements(safePlanets);

  const modalityCounts =
    countModalities(safePlanets);

  const dominantElement =
    getDominantCategory(
      elementCounts
    );

  const dominantModality =
    getDominantCategory(
      modalityCounts
    );

  const dominantHouse =
    getDominantHouse(
      safePlanets
    );

  return (
    <>
      <Page size="A4" style={styles.page}>
        <PdfBrandHeader />

        <View style={styles.content}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Synthèse Premium
            </Text>
          </View>

          <Text style={styles.title}>
            La signature de votre thème
          </Text>

          <Text style={styles.intro}>
            Cette synthèse rassemble les principales
            informations de votre carte du ciel afin
            de faire ressortir les grandes lignes de
            votre fonctionnement, de vos besoins et de
            votre potentiel.
          </Text>

          <View
            style={styles.coreCard}
            wrap={false}
          >
            <Text style={styles.coreTitle}>
              Votre identité centrale
            </Text>

            <Text style={styles.coreText}>
              {createCoreIdentityText(
                sun,
                moon,
                ascendantSign
              )}
            </Text>
          </View>

          <View style={styles.grid}>
            <View style={styles.leftColumn}>
              <View
                style={styles.smallCard}
                wrap={false}
              >
                <Text style={styles.smallTitle}>
                  Votre énergie dominante
                </Text>

                <Text style={styles.smallText}>
                  {createDominantText(
                    dominantElement,
                    dominantModality
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.rightColumn}>
              <View
                style={styles.smallCard}
                wrap={false}
              >
                <Text style={styles.smallTitle}>
                  Votre domaine central
                </Text>

                <Text style={styles.smallText}>
                  {createHouseText(
                    dominantHouse
                  )}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>
                Soleil et Lune
              </Text>

              <Text style={styles.cardTag}>
                Conscience et émotions
              </Text>
            </View>

            <Text style={styles.cardText}>
              Le Soleil montre ce que vous cherchez à
              devenir, tandis que la Lune révèle ce
              dont vous avez besoin pour rester
              émotionnellement stable. Votre équilibre
              dépend de votre capacité à respecter ces
              deux dimensions simultanément.
            </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>
                Ascendant et présence
              </Text>

              <Text style={styles.cardTag}>
                Expression extérieure
              </Text>
            </View>

            <Text style={styles.cardText}>
              Votre Ascendant en{" "}
              {ascendantSign || "non précisé"} décrit
              votre manière de réagir spontanément,
              d’aborder les situations nouvelles et de
              vous présenter aux autres.
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
              Synthèse Premium
            </Text>
          </View>

          <Text style={styles.title}>
            Votre chemin d’accomplissement
          </Text>

          <Text style={styles.intro}>
            Votre thème natal devient réellement utile
            lorsqu’il vous aide à reconnaître vos
            forces, à comprendre vos réactions et à
            choisir une direction plus consciente.
          </Text>

          <View style={styles.grid}>
            <View style={styles.leftColumn}>
              <View
                style={styles.smallCard}
                wrap={false}
              >
                <Text style={styles.smallTitle}>
                  Pensée et communication
                </Text>

                <Text style={styles.smallText}>
                  {createPlanetCardText(
                    mercury,
                    "Mercury"
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.rightColumn}>
              <View
                style={styles.smallCard}
                wrap={false}
              >
                <Text style={styles.smallTitle}>
                  Amour et valeurs
                </Text>

                <Text style={styles.smallText}>
                  {createPlanetCardText(
                    venus,
                    "Venus"
                  )}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.grid}>
            <View style={styles.leftColumn}>
              <View
                style={styles.smallCard}
                wrap={false}
              >
                <Text style={styles.smallTitle}>
                  Action et volonté
                </Text>

                <Text style={styles.smallText}>
                  {createPlanetCardText(
                    mars,
                    "Mars"
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.rightColumn}>
              <View
                style={styles.smallCard}
                wrap={false}
              >
                <Text style={styles.smallTitle}>
                  Expansion et maturité
                </Text>

                <Text style={styles.smallText}>
                  {createPlanetCardText(
                    jupiter,
                    "Jupiter"
                  )}{" "}
                  {createPlanetCardText(
                    saturn,
                    "Saturn"
                  )}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={styles.directionCard}
            wrap={false}
          >
            <Text
              style={styles.directionTitle}
            >
              Votre direction de vie
            </Text>

            <Text
              style={styles.directionText}
            >
              {createLifeDirectionText(
                midheavenSign,
                dominantHouse
              )}
            </Text>
          </View>

  <View
  style={styles.card}
  wrap={false}
>
  <View style={styles.cardHeader}>
    <Text style={styles.cardTitle}>
      Vos grands équilibres
    </Text>

    <Text style={styles.cardTag}>
      Synthèse personnelle
    </Text>
  </View>

  <Text style={styles.cardText}>
    • Votre thème révèle une personnalité qui progresse en conciliant
    profondeur, intuition et détermination. Ces qualités deviennent vos
    plus grandes forces lorsqu'elles s'expriment avec confiance.

    {"\n\n"}

    • Les défis rencontrés au cours de votre vie ne constituent pas des
    limites, mais des occasions de mieux comprendre vos besoins et
    d'affirmer votre véritable identité.

    {"\n\n"}

    • Votre équilibre se construit lorsque vos émotions, votre réflexion
    et vos décisions avancent dans une même direction, sans qu'aucune de
    ces dimensions ne prenne systématiquement le dessus.

    {"\n\n"}

    • Votre carte du ciel met en lumière un potentiel d'évolution durable.
    En restant fidèle à vos valeurs tout en accueillant les changements,
    vous développez progressivement la version la plus accomplie de
    vous-même.
  </Text>
</View>

<View
  style={styles.finalCard}
  wrap={false}
>
  <Text style={styles.finalTitle}>
    Votre portrait Premium
  </Text>

  <Text style={styles.intro}>
    Au fil des pages, votre thème natal s'est révélé sous différents
    angles : votre personnalité, votre sensibilité, vos talents, vos
    relations, vos défis et vos aspirations profondes. Pris séparément,
    chacun de ces éléments apporte un éclairage précieux. Réunis, ils
    composent une signature astrologique unique où chaque énergie trouve
    sa place dans un ensemble cohérent. Cette synthèse rassemble les
    principaux enseignements de votre carte du ciel afin de vous offrir
    une vision globale de votre potentiel, de vos ressources naturelles
    et des chemins qui peuvent accompagner votre évolution.
  </Text>

  <Text style={styles.finalText}>
    {createFinalSynthesis(
      sun,
      moon,
      venus,
      mars,
      saturn,
      dominantElement,
      dominantModality
    )}
  </Text>
</View>

<Text style={styles.closingText}>
  Relisez ce rapport à différents moments de votre vie. Certaines
  interprétations prendront davantage de sens au fil de vos expériences,
  de vos décisions et de votre évolution personnelle.
</Text>
        </View>

        <PdfPageFooter />
      </Page>
    </>
  );
}
