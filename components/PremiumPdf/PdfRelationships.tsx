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

type RelationshipPlanetName =
  | "Moon"
  | "Venus"
  | "Mars";

type RelationshipInsight = {
  title: string;
  subtitle: string;
  text: string;
};

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

const SIGN_RELATIONSHIP_TEXTS: Record<
  string,
  string
> = {
  Bélier:
    "Vous recherchez une relation vivante, directe et authentique. Vous appréciez les personnes capables d’exprimer clairement leurs intentions et de respecter votre besoin d’initiative.",

  Taureau:
    "Vous avez besoin de stabilité, de constance et de preuves concrètes d’affection. La confiance se construit progressivement, grâce à la fiabilité et à la présence quotidienne.",

  Gémeaux:
    "La communication occupe une place essentielle dans vos relations. Vous avez besoin d’échanges stimulants, de curiosité et d’une certaine légèreté pour maintenir votre intérêt.",

  Cancer:
    "Vous recherchez une relation sécurisante, protectrice et profondément émotionnelle. Le sentiment de confiance et d’appartenance influence fortement votre ouverture affective.",

  Lion:
    "Vous avez besoin de chaleur, de loyauté et de reconnaissance. Vous donnez beaucoup lorsque vous vous sentez appréciée et lorsque la relation vous permet d’exprimer pleinement votre cœur.",

  Vierge:
    "Vous exprimez souvent votre affection par les gestes utiles, l’attention et la fiabilité. Vous recherchez une relation sincère, structurée et respectueuse des besoins quotidiens.",

  Balance:
    "Vous recherchez l’harmonie, le dialogue et la réciprocité. La qualité des échanges, l’équilibre et le respect mutuel sont essentiels à votre sentiment de bien-être amoureux.",

  Scorpion:
    "Vous avez besoin d’intensité, de profondeur et de loyauté. Vous vous engagez rarement à moitié et vous accordez une grande importance à la confiance émotionnelle.",

  Sagittaire:
    "Vous avez besoin de liberté, d’enthousiasme et de croissance dans vos relations. Une relation doit vous permettre d’évoluer sans vous donner l’impression d’être enfermée.",

  Capricorne:
    "Vous recherchez une relation solide, mature et durable. Vous accordez beaucoup de valeur à l’engagement, à la responsabilité et à la capacité de construire ensemble.",

  Verseau:
    "Vous avez besoin d’espace, d’authenticité et de complicité intellectuelle. Vous appréciez les relations qui respectent l’individualité et qui reposent sur une véritable amitié.",

  Poissons:
    "Vous recherchez une connexion sensible, intuitive et inspirante. Vous pouvez ressentir profondément les besoins de l’autre et avez besoin de préserver des limites émotionnelles claires.",
};

const PLANET_ROLE_TEXTS: Record<
  RelationshipPlanetName,
  string
> = {
  Moon:
    "La Lune décrit vos besoins émotionnels, vos réactions instinctives et ce qui vous permet de vous sentir en sécurité dans une relation.",

  Venus:
    "Vénus décrit votre manière d’aimer, vos valeurs affectives, ce qui vous attire et votre façon de créer l’harmonie.",

  Mars:
    "Mars décrit votre désir, votre façon d’agir, votre manière de vous affirmer et la dynamique de votre énergie relationnelle.",
};

const HOUSE_RELATIONSHIP_TEXTS: Record<
  number,
  string
> = {
  1:
    "Votre vie relationnelle est étroitement liée à votre identité. Vous avez besoin de rester vous-même et de conserver une présence forte dans le couple.",

  2:
    "La confiance, la sécurité et les valeurs partagées occupent une place majeure. Les questions matérielles et la stabilité peuvent influencer vos choix affectifs.",

  3:
    "La communication quotidienne est essentielle. Vous avez besoin d’échanger, de comprendre et de pouvoir parler librement de ce que vous vivez.",

  4:
    "Le couple est lié au foyer, aux racines et au sentiment d’appartenance. Vous recherchez souvent une relation qui donne une véritable impression de famille.",

  5:
    "L’amour, la séduction, la créativité et le plaisir occupent une place importante. Vous avez besoin de spontanéité et d’expression affective.",

  6:
    "Vous accordez beaucoup d’importance aux gestes du quotidien, au soutien mutuel et au partage des responsabilités.",

  7:
    "Les relations constituent un axe central de votre vie. Vous apprenez beaucoup sur vous-même à travers le couple, les partenariats et la recherche d’équilibre.",

  8:
    "Vous recherchez une relation profonde, transformatrice et intime. La confiance, la vulnérabilité et le partage émotionnel sont déterminants.",

  9:
    "Vous avez besoin d’une relation qui ouvre votre horizon. Les voyages, les croyances, les projets et la croissance commune peuvent rapprocher le couple.",

  10:
    "Votre vie affective peut être liée à vos ambitions, à votre image publique ou à vos objectifs de long terme.",

  11:
    "L’amitié, les projets communs et la liberté sont essentiels. Vous avez besoin de partager une vision de l’avenir avec votre partenaire.",

  12:
    "Votre vie relationnelle peut être très intuitive et intérieure. Vous avez besoin de clarté pour éviter les non-dits, les projections ou les sacrifices excessifs.",
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

  card: {
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginBottom: 12,
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
    fontSize: 11,
  },

  cardSubtitle: {
    color: "#858ca0",
    fontSize: 7.3,
    textTransform: "uppercase",
  },

  cardText: {
    color: "#e9e4d8",
    fontSize: 8.9,
    lineHeight: 1.52,
  },

  emphasisCard: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 13,
    backgroundColor: "#161f3d",
    borderWidth: 1,
    borderColor: "#b88b3f",
  },

  emphasisTitle: {
    color: "#f4c95d",
    fontSize: 11.5,
    textAlign: "center",
    marginBottom: 8,
  },

  emphasisText: {
    color: "#e9e4d8",
    fontSize: 9,
    lineHeight: 1.56,
    textAlign: "center",
  },

  twoColumns: {
    flexDirection: "row",
    marginBottom: 12,
  },

  leftColumn: {
    width: "49%",
    marginRight: "2%",
  },

  rightColumn: {
    width: "49%",
  },

  smallCard: {
    minHeight: 155,
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

  synthesisCard: {
    paddingVertical: 17,
    paddingHorizontal: 19,
    marginTop: 5,
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

function getPlanet(
  planets: PremiumPlanet[],
  name: RelationshipPlanetName
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

function getPlanetHouseText(
  planet: PremiumPlanet | null
): string {
  if (
    !planet ||
    typeof planet.house !== "number"
  ) {
    return "";
  }

  const house = Math.round(planet.house);

  const interpretation =
    HOUSE_RELATIONSHIP_TEXTS[house];

  if (!interpretation) {
    return "";
  }

  return ` Sa position en maison ${house} ajoute une importance particulière : ${interpretation}`;
}

function createPlanetInsight(
  planets: PremiumPlanet[],
  planetName: RelationshipPlanetName
): RelationshipInsight {
  const planet = getPlanet(
    planets,
    planetName
  );

  const translatedName =
    PLANET_NAMES[planetName] ||
    planetName;

  if (!planet) {
    return {
      title: translatedName,
      subtitle: "Donnée indisponible",
      text:
        `Les données disponibles ne permettent pas d’analyser précisément ${translatedName}.`,
    };
  }

  const frenchSign =
    getFrenchSign(planet.sign);

  const signText =
    SIGN_RELATIONSHIP_TEXTS[
      frenchSign
    ] ||
    "Cette position décrit une manière personnelle d’entrer en relation et d’exprimer vos besoins affectifs.";

  return {
    title: `${translatedName} en ${frenchSign}`,
    subtitle:
      PLANET_ROLE_TEXTS[planetName],
    text:
      `${signText}${getPlanetHouseText(
        planet
      )}`,
  };
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

function getDescendantSign(
  descendant?: number,
  ascendant?: number
): string | null {
  if (
    typeof descendant === "number" &&
    Number.isFinite(descendant)
  ) {
    return longitudeToSign(descendant);
  }

  if (
    typeof ascendant === "number" &&
    Number.isFinite(ascendant)
  ) {
    return longitudeToSign(
      ascendant + 180
    );
  }

  return null;
}

function getDescendantText(
  sign: string | null
): string {
  if (!sign) {
    return (
      "Le signe du Descendant ne peut pas être déterminé avec les données disponibles. " +
      "Le Descendant décrit pourtant les qualités que vous recherchez souvent chez les autres et les apprentissages réalisés dans le couple."
    );
  }

  const signText =
    SIGN_RELATIONSHIP_TEXTS[sign];

  return (
    `Votre Descendant se trouve en ${sign}. ` +
    `${signText || ""} ` +
    "Cette énergie peut apparaître chez les partenaires qui vous attirent ou dans les qualités que vous développez à travers les relations."
  ).trim();
}

function getRelationshipStrength(
  moon: PremiumPlanet | null,
  venus: PremiumPlanet | null
): string {
  const moonSign =
    getFrenchSign(moon?.sign);

  const venusSign =
    getFrenchSign(venus?.sign);

  return (
    `Votre force affective repose sur la rencontre entre votre Lune en ${moonSign} et votre Vénus en ${venusSign}. ` +
    "Lorsque vos besoins émotionnels et votre manière d’aimer sont respectés simultanément, vous pouvez construire des liens profonds, sincères et durables."
  );
}

function getRelationshipChallenge(
  venus: PremiumPlanet | null,
  mars: PremiumPlanet | null
): string {
  const venusSign =
    getFrenchSign(venus?.sign);

  const marsSign =
    getFrenchSign(mars?.sign);

  return (
    `Vénus en ${venusSign} décrit ce que vous recherchez dans l’amour, tandis que Mars en ${marsSign} montre votre manière d’agir et de réagir. ` +
    "Votre défi consiste à accorder le besoin d’harmonie avec l’expression claire de vos désirs, de vos limites et de vos frustrations."
  );
}

function createRelationshipSynthesis(
  moon: PremiumPlanet | null,
  venus: PremiumPlanet | null,
  mars: PremiumPlanet | null,
  descendantSign: string | null
): string {
  const moonSign =
    getFrenchSign(moon?.sign);

  const venusSign =
    getFrenchSign(venus?.sign);

  const marsSign =
    getFrenchSign(mars?.sign);

  const descendantText =
    descendantSign
      ? `Votre Descendant en ${descendantSign} complète cette dynamique en révélant les qualités relationnelles que vous êtes appelée à rencontrer ou à développer.`
      : "";

  return (
    `Votre fonctionnement relationnel associe une Lune en ${moonSign}, une Vénus en ${venusSign} et un Mars en ${marsSign}. ` +
    "La Lune montre ce dont vous avez besoin pour vous sentir en sécurité, Vénus révèle votre langage affectif et Mars décrit votre manière de poursuivre vos désirs ou de défendre vos limites. " +
    `${descendantText} ` +
    "Une relation équilibrée vous permet d’être aimée sans renoncer à votre identité, de communiquer vos besoins avec honnêteté et de préserver une réciprocité réelle."
  ).trim();
}

export default function PdfRelationships({
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

  const moon = getPlanet(
    safePlanets,
    "Moon"
  );

  const venus = getPlanet(
    safePlanets,
    "Venus"
  );

  const mars = getPlanet(
    safePlanets,
    "Mars"
  );

  const descendantSign =
    getDescendantSign(
      typeof safeAngles.descendant ===
        "number"
        ? safeAngles.descendant
        : undefined,
      typeof safeAngles.ascendant ===
        "number"
        ? safeAngles.ascendant
        : undefined
    );

  const insights = [
    createPlanetInsight(
      safePlanets,
      "Moon"
    ),
    createPlanetInsight(
      safePlanets,
      "Venus"
    ),
    createPlanetInsight(
      safePlanets,
      "Mars"
    ),
  ];

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
            Votre vie relationnelle
          </Text>

          <Text style={styles.intro}>
            Votre manière d’aimer ne dépend pas
            seulement de votre signe solaire. La Lune,
            Vénus, Mars et le Descendant décrivent vos
            besoins affectifs, vos attirances, votre
            désir et les apprentissages que vous faites
            à travers les relations.
          </Text>

          {insights.map(
            (insight) => (
              <View
                key={insight.title}
                style={styles.card}
                wrap={false}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>
                    {insight.title}
                  </Text>

                  <Text
                    style={styles.cardSubtitle}
                  >
                    {insight.subtitle}
                  </Text>
                </View>

                <Text style={styles.cardText}>
                  {insight.text}
                </Text>
              </View>
            )
          )}

          <View
            style={styles.emphasisCard}
            wrap={false}
          >
            <Text
              style={styles.emphasisTitle}
            >
              Votre Descendant
            </Text>

            <Text
              style={styles.emphasisText}
            >
              {getDescendantText(
                descendantSign
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
            Vos besoins amoureux
          </Text>

          <Text style={styles.intro}>
            Une relation satisfaisante respecte à la
            fois votre sécurité émotionnelle, vos
            valeurs affectives, votre désir et votre
            besoin de rester fidèle à vous-même.
          </Text>

          <View style={styles.twoColumns}>
            <View style={styles.leftColumn}>
              <View
                style={styles.smallCard}
                wrap={false}
              >
                <Text
                  style={styles.smallTitle}
                >
                  Votre force relationnelle
                </Text>

                <Text
                  style={styles.smallText}
                >
                  {getRelationshipStrength(
                    moon,
                    venus
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.rightColumn}>
              <View
                style={styles.smallCard}
                wrap={false}
              >
                <Text
                  style={styles.smallTitle}
                >
                  Votre défi relationnel
                </Text>

                <Text
                  style={styles.smallText}
                >
                  {getRelationshipChallenge(
                    venus,
                    mars
                  )}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>
                Communication et limites
              </Text>

              <Text style={styles.cardSubtitle}>
                Équilibre
              </Text>
            </View>

            <Text style={styles.cardText}>
              La qualité de vos relations dépend de
              votre capacité à exprimer vos besoins
              avant que l’insatisfaction ne s’accumule.
              Une limite claire n’est pas un rejet :
              elle permet à la relation de rester
              honnête, équilibrée et respectueuse.
            </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>
                Réciprocité affective
              </Text>

              <Text style={styles.cardSubtitle}>
                Besoin essentiel
              </Text>
            </View>

            <Text style={styles.cardText}>
              Vous avez besoin d’une relation dans
              laquelle l’attention, l’engagement et les
              efforts circulent dans les deux sens.
              Donner beaucoup ne doit pas vous obliger
              à ignorer vos propres besoins ou à porter
              seule la stabilité du lien.
            </Text>
          </View>

          <View
            style={styles.synthesisCard}
            wrap={false}
          >
            <Text
              style={styles.synthesisTitle}
            >
              Synthèse relationnelle
            </Text>

            <Text
              style={styles.synthesisText}
            >
              {createRelationshipSynthesis(
                moon,
                venus,
                mars,
                descendantSign
              )}
            </Text>
          </View>
        </View>

        <PdfPageFooter />
      </Page>
    </>
  );
}
