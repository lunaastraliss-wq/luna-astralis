import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type {
  SignatureAngles,
  SignaturePlanet,
} from "./SignaturePdfTypes";

import {
  getSignaturePlanetStrengths,
} from "./SignaturePlanetStrengths";

import { pdfStyles } from "./SignaturePdfStyles";
import PdfBrandHeader from "./PdfSignatureBrandHeader";
import PdfPageFooter from "./PdfSignaturePageFooter";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type PdfSignatureStrengthsProps = {
  planets: SignaturePlanet[];
  angles: SignatureAngles;
};

type StrengthCardData = {
  planetName: string;
  signName: string;
  strengths: string[];
};

/*
|--------------------------------------------------------------------------
| Constantes
|--------------------------------------------------------------------------
*/

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

const PLANET_NAMES: Record<string, string> = {
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

const SIGN_NAMES: Record<string, string> = {
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
  Cancer: "Cancer",
  Lion: "Lion",
  Vierge: "Vierge",
  Balance: "Balance",
  Scorpion: "Scorpion",
  Sagittaire: "Sagittaire",
  Capricorne: "Capricorne",
  Verseau: "Verseau",
  Poissons: "Poissons",
};

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingBottom: 30,
  },

  header: {
    alignItems: "center",
    marginBottom: 16,
  },

  badge: {
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 14,
    marginBottom: 9,
    borderWidth: 1,
    borderColor: "#b88b3f",
    backgroundColor: "#111a34",
  },

  badgeText: {
    color: "#f4c95d",
    fontSize: 7.5,
    letterSpacing: 1.7,
    textTransform: "uppercase",
  },

  title: {
    color: "#fff8e7",
    fontSize: 21,
    lineHeight: 1.2,
    textAlign: "center",
    marginBottom: 8,
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 9,
  },

  dividerLine: {
    width: 45,
    height: 0.7,
    backgroundColor: "#8f793c",
  },

  dividerCircle: {
    width: 15,
    height: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 9,
    borderWidth: 0.7,
    borderColor: "#f4c95d",
  },

  dividerSymbol: {
    color: "#f4c95d",
    fontSize: 7,
    lineHeight: 1,
  },

  intro: {
    width: "90%",
    color: "#c9c5bb",
    fontSize: 8.7,
    lineHeight: 1.45,
    textAlign: "center",
  },

  overviewCard: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 12,
    backgroundColor: "#0d152d",
    borderLeftWidth: 2,
    borderLeftColor: "#f4c95d",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#39415d",
    borderRightColor: "#39415d",
    borderBottomColor: "#39415d",
  },

  overviewText: {
    color: "#e9e4d8",
    fontSize: 8.4,
    lineHeight: 1.5,
    textAlign: "center",
  },

  sectionTitle: {
    color: "#f4c95d",
    fontSize: 11.5,
    textAlign: "center",
    marginBottom: 10,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  strengthCard: {
    width: "48.6%",
    minHeight: 143,
    paddingVertical: 12,
    paddingHorizontal: 13,
    marginBottom: 11,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  cardHeader: {
    marginBottom: 8,
    paddingBottom: 7,
    borderBottomWidth: 0.7,
    borderBottomColor: "#39415d",
  },

  planetName: {
    color: "#fff8e7",
    fontSize: 10.5,
    textAlign: "center",
    marginBottom: 3,
  },

  signName: {
    color: "#f4c95d",
    fontSize: 7.5,
    textAlign: "center",
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 5,
  },

  listItemLast: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  bullet: {
    width: 12,
    color: "#f4c95d",
    fontSize: 8,
    lineHeight: 1.35,
  },

  itemText: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#e9e4d8",
    fontSize: 8,
    lineHeight: 1.35,
  },

  integrationCard: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: "#161f3d",
    borderWidth: 1,
    borderColor: "#b88b3f",
  },

  integrationTitle: {
    color: "#f4c95d",
    fontSize: 10.5,
    textAlign: "center",
    marginBottom: 8,
  },

  integrationText: {
    color: "#e9e4d8",
    fontSize: 8.6,
    lineHeight: 1.55,
    textAlign: "center",
  },

  guidanceCard: {
    paddingVertical: 13,
    paddingHorizontal: 18,
    marginBottom: 10,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  guidanceTitle: {
    color: "#f4c95d",
    fontSize: 10,
    marginBottom: 7,
  },

  guidanceText: {
    color: "#e9e4d8",
    fontSize: 8.4,
    lineHeight: 1.52,
  },
});

/*
|--------------------------------------------------------------------------
| Fonctions utilitaires
|--------------------------------------------------------------------------
*/

function normalizeSignForLookup(
  sign: string
): string {
  const reverseSignNames: Record<string, string> = {
    Bélier: "Aries",
    Taureau: "Taurus",
    Gémeaux: "Gemini",
    Cancer: "Cancer",
    Lion: "Leo",
    Vierge: "Virgo",
    Balance: "Libra",
    Scorpion: "Scorpio",
    Sagittaire: "Sagittarius",
    Capricorne: "Capricorn",
    Verseau: "Aquarius",
    Poissons: "Pisces",
  };

  return reverseSignNames[sign] || sign;
}

function getSafePlanets(
  planets: SignaturePlanet[]
): SignaturePlanet[] {
  if (!Array.isArray(planets)) {
    return [];
  }

  return planets.filter(
    (planet): planet is SignaturePlanet =>
      Boolean(
        planet &&
          typeof planet === "object" &&
          typeof planet.name === "string" &&
          MAIN_PLANETS.includes(
            planet.name as
              (typeof MAIN_PLANETS)[number]
          )
      )
  );
}

function getStrengthCards(
  planets: SignaturePlanet[]
): StrengthCardData[] {
  return MAIN_PLANETS.map(
    (planetName) => {
      const planet =
        planets.find(
          (item) =>
            item.name === planetName
        ) || null;

      const rawSign =
        typeof planet?.sign === "string"
          ? planet.sign
          : "";

      const normalizedSign =
        normalizeSignForLookup(rawSign);

      return {
        planetName:
          PLANET_NAMES[planetName] ||
          planetName,

        signName:
          SIGN_NAMES[rawSign] ||
          SIGN_NAMES[normalizedSign] ||
          rawSign ||
          "Signe non déterminé",

        strengths:
          getSignaturePlanetStrengths(
            planetName,
            normalizedSign
          ),
      };
    }
  );
}

function StrengthCard({
  card,
}: {
  card: StrengthCardData;
}) {
  return (
    <View
      style={styles.strengthCard}
      wrap={false}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.planetName}>
          {card.planetName}
        </Text>

        <Text style={styles.signName}>
          {card.signName}
        </Text>
      </View>

      {card.strengths.map(
        (strength, index) => {
          const isLast =
            index ===
            card.strengths.length - 1;

          return (
            <View
              key={`${card.planetName}-${strength}`}
              style={
                isLast
                  ? styles.listItemLast
                  : styles.listItem
              }
            >
              <Text style={styles.bullet}>
                •
              </Text>

              <Text style={styles.itemText}>
                {strength}
              </Text>
            </View>
          );
        }
      )}
    </View>
  );
}

/*
|--------------------------------------------------------------------------
| Page Forces Signature
|--------------------------------------------------------------------------
*/

export default function PdfSignatureStrengths({
  planets,
  angles,
}: PdfSignatureStrengthsProps) {
  const safePlanets =
    getSafePlanets(planets);

  const strengthCards =
    getStrengthCards(safePlanets);

  const firstPageCards =
    strengthCards.slice(0, 5);

  const secondPageCards =
    strengthCards.slice(5, 10);

  const hasAngles =
    Boolean(
      angles &&
      typeof angles === "object"
    );

  return (
    <>
      <Page
        size="A4"
        style={pdfStyles.page}
        wrap={false}
      >
        <PdfBrandHeader />

        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                Analyse Signature
              </Text>
            </View>

            <Text style={styles.title}>
              Vos forces naturelles
            </Text>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />

              <View style={styles.dividerCircle}>
                <Text style={styles.dividerSymbol}>
                  •
                </Text>
              </View>

              <View style={styles.dividerLine} />
            </View>

            <Text style={styles.intro}>
              Les forces de votre thème représentent
              les qualités sur lesquelles vous pouvez
              vous appuyer naturellement. Elles ne
              s’expriment pas toutes de la même manière,
              mais elles composent ensemble votre
              potentiel personnel.
            </Text>
          </View>

          <View
            style={styles.overviewCard}
            wrap={false}
          >
            <Text style={styles.overviewText}>
              Chaque planète décrit une fonction
              intérieure différente. Son signe révèle
              les qualités qui soutiennent son
              expression et la manière dont cette
              énergie peut devenir une ressource dans
              votre parcours.
            </Text>
          </View>

          <Text style={styles.sectionTitle}>
            Vos ressources personnelles
          </Text>

          <View style={styles.grid}>
            {firstPageCards.map(
              (card) => (
                <StrengthCard
                  key={card.planetName}
                  card={card}
                />
              )
            )}
          </View>
        </View>

        <PdfPageFooter />
      </Page>

      <Page
        size="A4"
        style={pdfStyles.page}
        wrap={false}
      >
        <PdfBrandHeader />

        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                Analyse Signature
              </Text>
            </View>

            <Text style={styles.title}>
              Vos ressources d’accomplissement
            </Text>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />

              <View style={styles.dividerCircle}>
                <Text style={styles.dividerSymbol}>
                  •
                </Text>
              </View>

              <View style={styles.dividerLine} />
            </View>

            <Text style={styles.intro}>
              Certaines qualités se développent avec
              l’expérience, la maturité et les choix
              conscients. Elles peuvent devenir des
              appuis puissants dans vos relations, vos
              projets et votre évolution personnelle.
            </Text>
          </View>

          <View style={styles.grid}>
            {secondPageCards.map(
              (card) => (
                <StrengthCard
                  key={card.planetName}
                  card={card}
                />
              )
            )}
          </View>

          <View
            style={styles.integrationCard}
            wrap={false}
          >
            <Text style={styles.integrationTitle}>
              L’union de vos forces
            </Text>

            <Text style={styles.integrationText}>
              Votre véritable puissance ne repose pas
              sur une seule qualité. Elle apparaît
              lorsque vos différentes ressources
              collaborent : la sensibilité soutient
              l’action, la réflexion éclaire les
              décisions et la persévérance permet à vos
              idées de devenir concrètes.
              {hasAngles
                ? " Vos angles astrologiques donnent également une direction visible à ces forces et influencent la manière dont elles s’expriment dans votre vie."
                : ""}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
            wrap={false}
          >
            <Text style={styles.guidanceTitle}>
              Comment utiliser vos forces
            </Text>

            <Text style={styles.guidanceText}>
              • Reconnaissez les qualités que vous
              utilisez déjà naturellement, même si elles
              vous semblent ordinaires.
              {"\n\n"}
              • Observez les situations dans lesquelles
              vous vous sentez le plus confiante,
              efficace ou alignée.
              {"\n\n"}
              • Appuyez-vous sur vos forces dominantes
              pour développer les qualités qui demandent
              davantage de temps ou de pratique.
              {"\n\n"}
              • Évitez de transformer une qualité en
              exigence permanente. Une force reste plus
              constructive lorsqu’elle demeure souple et
              consciente.
            </Text>
          </View>
        </View>

        <PdfPageFooter />
      </Page>
    </>
  );
}
