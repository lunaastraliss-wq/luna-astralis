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
  getSignaturePlanetChallenges,
} from "./SignaturePlanetChallenges";

import { pdfStyles } from "./SignaturePdfStyles";
import PdfBrandHeader from "./PdfSignatureBrandHeader";
import PdfPageFooter from "./PdfSignaturePageFooter";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type PdfSignatureChallengesProps = {
  planets: SignaturePlanet[];
  angles: SignatureAngles;
};

type ChallengeCardData = {
  planetKey: string;
  planetName: string;
  signName: string;
  challenges: string[];
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
    marginBottom: 15,
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

  challengeCard: {
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

  guidanceHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  guidanceTitle: {
    color: "#f4c95d",
    fontSize: 10,
  },

  guidanceTag: {
    color: "#c9c5bb",
    fontSize: 6.8,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  guidanceText: {
    color: "#e9e4d8",
    fontSize: 8.3,
    lineHeight: 1.5,
  },

  finalCard: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginTop: 2,
    marginBottom: 10,
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

  finalTitle: {
    color: "#f4c95d",
    fontSize: 10.5,
    textAlign: "center",
    marginBottom: 8,
  },

  finalText: {
    color: "#fff8e7",
    fontSize: 8.6,
    lineHeight: 1.55,
    textAlign: "center",
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

function getChallengeCards(
  planets: SignaturePlanet[]
): ChallengeCardData[] {
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
        planetKey: planetName,

        planetName:
          PLANET_NAMES[planetName] ||
          planetName,

        signName:
          SIGN_NAMES[rawSign] ||
          SIGN_NAMES[normalizedSign] ||
          rawSign ||
          "Signe non déterminé",

        challenges:
          getSignaturePlanetChallenges(
            planetName,
            normalizedSign
          ),
      };
    }
  );
}

function ChallengeCard({
  card,
}: {
  card: ChallengeCardData;
}) {
  return (
    <View
      style={styles.challengeCard}
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

      {card.challenges.map(
        (challenge, index) => {
          const isLast =
            index ===
            card.challenges.length - 1;

          return (
            <View
              key={`${card.planetKey}-${challenge}`}
              style={
                isLast
                  ? styles.listItemLast
                  : styles.listItem
              }
              wrap={false}
            >
              <Text style={styles.bullet}>
                •
              </Text>

              <Text style={styles.itemText}>
                {challenge}
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
| Page Défis Signature
|--------------------------------------------------------------------------
*/

export default function PdfSignatureChallenges({
  planets,
  angles,
}: PdfSignatureChallengesProps) {
  const safePlanets =
    getSafePlanets(planets);

  const challengeCards =
    getChallengeCards(safePlanets);

  const firstPageCards =
    challengeCards.slice(0, 5);

  const secondPageCards =
    challengeCards.slice(5, 10);

  const ascendantIsAvailable =
    typeof angles?.ascendant === "number" &&
    Number.isFinite(angles.ascendant);

  const midheavenIsAvailable =
    typeof angles?.midheaven === "number" &&
    Number.isFinite(angles.midheaven);

  const hasAngles =
    ascendantIsAvailable ||
    midheavenIsAvailable;

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
              Vos défis d’évolution
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
              Les défis de votre thème ne représentent
              ni des défauts ni des limites définitives.
              Ils révèlent les réactions qui peuvent
              devenir répétitives ainsi que les
              qualités qui gagnent à être développées
              avec davantage de conscience.
            </Text>
          </View>

          <View
            style={styles.overviewCard}
            wrap={false}
          >
            <Text style={styles.overviewText}>
              Chaque planète possède une manière plus
              fluide de s’exprimer et une zone de
              vigilance. Reconnaître ces mécanismes vous
              permet de choisir une réponse plus adaptée
              plutôt que de reproduire automatiquement
              les mêmes réactions.
            </Text>
          </View>

          <Text style={styles.sectionTitle}>
            Vos principaux points d’attention
          </Text>

          <View style={styles.grid}>
            {firstPageCards.map(
              (card) => (
                <ChallengeCard
                  key={card.planetKey}
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
              Vos axes de transformation
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
              Les influences plus lentes de votre thème
              décrivent des apprentissages qui se
              construisent au fil du temps. Elles
              montrent comment l’expérience peut
              transformer une difficulté en maturité,
              en discernement et en force intérieure.
            </Text>
          </View>

          <View style={styles.grid}>
            {secondPageCards.map(
              (card) => (
                <ChallengeCard
                  key={card.planetKey}
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
              Transformer les tensions en ressources
            </Text>

            <Text style={styles.integrationText}>
              Les tensions de votre thème deviennent
              constructives lorsque vous pouvez
              reconnaître le besoin qu’elles cherchent
              à protéger. Une réaction excessive cache
              souvent une recherche de sécurité, de
              reconnaissance, de liberté ou de
              cohérence intérieure. En identifiant ce
              besoin, vous pouvez choisir une manière
              plus consciente de l’exprimer.
              {hasAngles
                ? " Vos angles astrologiques indiquent aussi les domaines dans lesquels certains apprentissages peuvent devenir particulièrement visibles dans votre parcours."
                : ""}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
            wrap={false}
          >
            <View style={styles.guidanceHeader}>
              <Text style={styles.guidanceTitle}>
                Comment accompagner vos défis
              </Text>

              <Text style={styles.guidanceTag}>
                Clés pratiques
              </Text>
            </View>

            <Text style={styles.guidanceText}>
              • Observez les situations qui déclenchent
              régulièrement les mêmes réactions. Elles
              signalent souvent un besoin important qui
              demande à être reconnu.
              {"\n\n"}
              • Évitez de vous juger lorsque vous
              identifiez une difficulté. La conscience
              d’un mécanisme constitue déjà une étape
              essentielle de transformation.
              {"\n\n"}
              • Appuyez-vous sur vos forces naturelles
              pour traverser les zones plus exigeantes
              de votre thème.
              {"\n\n"}
              • Accordez-vous le droit d’évoluer
              progressivement. Certaines qualités
              demandent du temps, de l’expérience et
              plusieurs essais avant de devenir
              pleinement disponibles.
            </Text>
          </View>

          <View
            style={styles.finalCard}
            wrap={false}
          >
            <Text style={styles.finalTitle}>
              Une invitation à évoluer
            </Text>

            <Text style={styles.finalText}>
              Votre thème natal ne vous demande pas
              d’effacer vos contradictions. Il vous
              invite à comprendre ce qu’elles révèlent,
              à reconnaître les besoins qui les
              traversent et à développer des réponses
              plus libres. Vos défis les plus profonds
              peuvent ainsi devenir les lieux où votre
              maturité, votre confiance et votre
              discernement se construisent avec le plus
              de force.
            </Text>
          </View>
        </View>

        <PdfPageFooter />
      </Page>
    </>
  );
}
