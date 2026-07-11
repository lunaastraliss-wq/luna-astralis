import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { PLANET_ICONS } from "./EssentialPdfAssets";
import { pdfStyles } from "./EssentialPdfStyles";
import type { PlanetPageProps } from "./EssentialPdfTypes";

import {
  getPlanet,
  getPlanetDegree,
  getPlanetInterpretation,
  getPlanetSignName,
  PLANET_FR,
  PLANET_MEANINGS,
  signFr,
} from "./EssentialPdfUtils";

import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

const PLANET_QUESTIONS: Record<string, string> = {
  Sun:
    "Qu’est-ce qui vous permet de rayonner pleinement ?",

  Moon:
    "De quoi avez-vous besoin pour vous sentir intérieurement en sécurité ?",

  Mercury:
    "Comment votre esprit comprend-il et transmet-il les idées ?",

  Venus:
    "Qu’est-ce qui nourrit votre manière d’aimer et de créer du lien ?",

  Mars:
    "Comment votre énergie se mobilise-t-elle lorsque vous passez à l’action ?",

  Jupiter:
    "Où trouvez-vous confiance, croissance et ouverture ?",

  Saturn:
    "Quelles expériences vous invitent à développer votre maturité ?",

  Uranus:
    "Comment exprimez-vous votre liberté et votre originalité ?",

  Neptune:
    "Comment votre intuition et votre imaginaire influencent-ils votre vie ?",

  Pluto:
    "Quelles transformations révèlent votre puissance intérieure ?",
};

const PLANET_GUIDANCE: Record<string, string> = {
  Sun:
    "Votre Soleil représente le centre de votre identité. Plus vous assumez ses qualités, plus vous développez une présence cohérente et une direction personnelle claire.",

  Moon:
    "Votre Lune décrit votre univers émotionnel. Comprendre ses besoins vous aide à créer davantage de stabilité, de douceur et de sécurité intérieure.",

  Mercury:
    "Mercure décrit votre manière de réfléchir, d’apprendre et de communiquer. Cette énergie influence votre façon d’organiser vos idées et de vous faire comprendre.",

  Venus:
    "Vénus révèle votre sensibilité relationnelle, vos valeurs et ce qui vous attire. Elle montre aussi la manière dont vous donnez et recevez de l’affection.",

  Mars:
    "Mars représente votre force d’action, votre courage et votre manière de défendre vos désirs. Bien utilisée, cette énergie devient un moteur puissant.",

  Jupiter:
    "Jupiter montre les expériences qui favorisent votre confiance et votre développement. Il indique comment vous pouvez élargir votre vision de la vie.",

  Saturn:
    "Saturne révèle les domaines où la patience, la discipline et la persévérance sont nécessaires. Ses défis deviennent souvent de véritables forces avec le temps.",

  Uranus:
    "Uranus représente votre besoin de liberté, de renouvellement et d’authenticité. Il vous encourage à sortir des modèles qui ne vous correspondent plus.",

  Neptune:
    "Neptune révèle votre imagination, votre intuition et votre sensibilité à l’invisible. Cette énergie demande de concilier inspiration et discernement.",

  Pluto:
    "Pluton représente votre capacité de transformation profonde. Il montre où vous pouvez abandonner d’anciens mécanismes afin de retrouver votre pouvoir intérieur.",
};

const styles = StyleSheet.create({
  /*
   * En-tête de la planète
   */
  header: {
    alignItems: "center",
    marginBottom: 12,
  },

  kicker: {
    color: "#f4c95d",
    fontSize: 8.3,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  title: {
    color: "#fff8e7",
    fontSize: 24,
    lineHeight: 1.12,
    textAlign: "center",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 7,
  },

  dividerLine: {
    width: 48,
    height: 1,
    backgroundColor: "#8f793c",
  },

  dividerIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginHorizontal: 10,
  },

  subtitle: {
    maxWidth: 410,
    color: "#c9c5bb",
    fontSize: 9,
    lineHeight: 1.35,
    textAlign: "center",
  },

  /*
   * Carte principale
   */
  hero: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 94,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 9,
    overflow: "hidden",
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  iconCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
    backgroundColor: "#0b1124",
    borderWidth: 1,
    borderColor: "#f4c95d",
  },

  icon: {
    width: 35,
    height: 35,
    objectFit: "contain",
  },

  heroContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  heroKicker: {
    color: "#9da4b7",
    fontSize: 7.8,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  heroName: {
    color: "#fff8e7",
    fontSize: 20,
    marginBottom: 3,
  },

  heroSign: {
    color: "#f4c95d",
    fontSize: 13.5,
    marginBottom: 4,
  },

  heroDegree: {
    color: "#aeb5c7",
    fontSize: 8.3,
  },

  watermark: {
    position: "absolute",
    top: 6,
    right: 14,
    width: 82,
    height: 82,
    objectFit: "contain",
    opacity: 0.035,
  },

  /*
   * Interprétation principale
   */
  meaningCard: {
    paddingVertical: 13,
    paddingHorizontal: 18,
    marginBottom: 8,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  cardKicker: {
    color: "#f4c95d",
    fontSize: 7.8,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  question: {
    color: "#fff8e7",
    fontSize: 14,
    lineHeight: 1.25,
    marginBottom: 7,
  },

  interpretation: {
    color: "#e9e4d8",
    fontSize: 9.45,
    lineHeight: 1.45,
  },

  /*
   * Enseignement
   */
  guidanceCard: {
    paddingVertical: 11,
    paddingHorizontal: 17,
    marginBottom: 8,
    backgroundColor: "#0d152d",
    borderLeftWidth: 2,
    borderLeftColor: "#f4c95d",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#39415d",
  },

  guidanceTitle: {
    color: "#f4c95d",
    fontSize: 7.8,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  guidanceText: {
    color: "#c9cedb",
    fontSize: 8.8,
    lineHeight: 1.4,
  },

  /*
   * Deux clés d’interprétation
   */
  keysRow: {
    flexDirection: "row",
    marginBottom: 8,
  },

  keyBox: {
    flexGrow: 1,
    flexBasis: 0,
    paddingVertical: 10,
    paddingHorizontal: 13,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  keyBoxLeft: {
    marginRight: 8,
  },

  keyHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  keyNumber: {
    width: 25,
    height: 25,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  keyNumberText: {
    color: "#f4c95d",
    fontSize: 7.2,
  },

  keyTitle: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#fff8e7",
    fontSize: 9.8,
    lineHeight: 1.18,
  },

  keyText: {
    color: "#bfc5d5",
    fontSize: 8.1,
    lineHeight: 1.35,
  },

  /*
   * Note finale
   */
  note: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 13,
    marginBottom: 25,
    backgroundColor: "#141b32",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  noteIcon: {
    width: 16,
    height: 16,
    objectFit: "contain",
    marginRight: 10,
  },

  noteText: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#bfc5d5",
    fontSize: 8,
    lineHeight: 1.32,
  },
});

export default function PdfPlanet({
  planets,
  planet,
}: PlanetPageProps) {
  const safePlanets = Array.isArray(planets)
    ? planets
    : [];

  const planetData = getPlanet(
    safePlanets,
    planet
  );

  const planetName =
    PLANET_FR[planet] || planet;

  const signName =
    getPlanetSignName(planetData);

  const translatedSign =
    signFr(signName) || "Signe non précisé";

  const degree =
    getPlanetDegree(planetData);

  const meaning =
    PLANET_MEANINGS[planet] ||
    "Une dimension importante de votre personnalité";

  const interpretation =
    getPlanetInterpretation(
      planet,
      signName
    ) ||
    `${planetName} en ${translatedSign} représente une énergie importante de votre personnalité.`;

  const question =
    PLANET_QUESTIONS[planet] ||
    "Comment cette énergie s’exprime-t-elle dans votre vie ?";

  const guidance =
    PLANET_GUIDANCE[planet] ||
    "Cette position révèle une énergie naturelle que vous pouvez apprendre à reconnaître, à comprendre et à exprimer avec davantage de conscience.";

  const icon =
    PLANET_ICONS[planet];

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.header}>
        <Text style={styles.kicker}>
          Planète natale
        </Text>

        <Text style={styles.title}>
          {planetName} en {translatedSign}
        </Text>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />

          {icon ? (
            <Image
              src={icon}
              style={styles.dividerIcon}
            />
          ) : null}

          <View style={styles.dividerLine} />
        </View>

        <Text style={styles.subtitle}>
          Une dimension essentielle de votre personnalité
          révélée par votre ciel de naissance.
        </Text>
      </View>

      <View
        style={styles.hero}
        wrap={false}
      >
        {icon ? (
          <>
            <View style={styles.iconCircle}>
              <Image
                src={icon}
                style={styles.icon}
              />
            </View>

            <Image
              src={icon}
              style={styles.watermark}
            />
          </>
        ) : null}

        <View style={styles.heroContent}>
          <Text style={styles.heroKicker}>
            Dans votre thème natal
          </Text>

          <Text style={styles.heroName}>
            {planetName}
          </Text>

          <Text style={styles.heroSign}>
            en {translatedSign}
          </Text>

          {degree ? (
            <Text style={styles.heroDegree}>
              Position astrologique : {degree}
            </Text>
          ) : null}
        </View>
      </View>

      <View
        style={styles.meaningCard}
        wrap={false}
      >
        <Text style={styles.cardKicker}>
          {meaning}
        </Text>

        <Text style={styles.question}>
          {question}
        </Text>

        <Text style={styles.interpretation}>
          {interpretation}
        </Text>
      </View>

      <View
        style={styles.guidanceCard}
        wrap={false}
      >
        <Text style={styles.guidanceTitle}>
          Ce que cette position vous enseigne
        </Text>

        <Text style={styles.guidanceText}>
          {guidance}
        </Text>
      </View>

      <View
        style={styles.keysRow}
        wrap={false}
      >
        <View
          style={[
            styles.keyBox,
            styles.keyBoxLeft,
          ]}
        >
          <View style={styles.keyHeader}>
            <View style={styles.keyNumber}>
              <Text style={styles.keyNumberText}>
                01
              </Text>
            </View>

            <Text style={styles.keyTitle}>
              L’influence du signe
            </Text>
          </View>

          <Text style={styles.keyText}>
            Placé en {translatedSign}, {planetName} exprime
            ses fonctions à travers les qualités, les besoins
            et les réflexes propres à ce signe.
          </Text>
        </View>

        <View style={styles.keyBox}>
          <View style={styles.keyHeader}>
            <View style={styles.keyNumber}>
              <Text style={styles.keyNumberText}>
                02
              </Text>
            </View>

            <Text style={styles.keyTitle}>
              Une énergie à développer
            </Text>
          </View>

          <Text style={styles.keyText}>
            Cette position ne vous enferme pas. Elle révèle
            une tendance naturelle que vous pouvez exprimer
            avec plus de conscience et de maturité.
          </Text>
        </View>
      </View>

      <View
        style={styles.note}
        wrap={false}
      >
        {icon ? (
          <Image
            src={icon}
            style={styles.noteIcon}
          />
        ) : null}

        <Text style={styles.noteText}>
          Cette position prend tout son sens lorsqu’elle est
          observée avec vos autres planètes, votre Soleil,
          votre Lune et votre Ascendant.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
