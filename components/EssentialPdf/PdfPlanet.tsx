import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { PLANET_ICONS } from "./EssentialPdfAssets";
import { pdfStyles } from "./EssentialPdfStyles";
import type {
  PdfLocale,
  PlanetPageProps,
} from "./EssentialPdfTypes";

import {
  getPlanet,
  getPlanetDegree,
  getPlanetInterpretation,
  getPlanetSignName,
  getLocalizedPlanetName,
  getLocalizedPlanetMeaning,
  getLocalizedSignName,
  getPdfPlanetTranslations,
} from "./EssentialPdfUtils";

import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

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
  locale = "fr",
}: PlanetPageProps) {
  const safeLocale: PdfLocale = locale || "fr";

  const t = getPdfPlanetTranslations(
    safeLocale
  );

  const safePlanets = Array.isArray(planets)
    ? planets
    : [];

  const planetData = getPlanet(
    safePlanets,
    planet
  );

  const planetName =
    getLocalizedPlanetName(
      planet,
      safeLocale
    );

  const signName =
    getPlanetSignName(planetData);

  const translatedSign =
    getLocalizedSignName(
      signName,
      safeLocale
    );

  const degree =
    getPlanetDegree(planetData);

  const meaning =
    getLocalizedPlanetMeaning(
      planet,
      safeLocale
    );

  const interpretation =
    getPlanetInterpretation(
      planet,
      signName,
      safeLocale
    );

  const question =
    t.questions[planet] ||
    t.defaultQuestion;

  const guidance =
    t.guidance[planet] ||
    t.defaultGuidance;

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
          {t.natalPlanet}
        </Text>

        <Text style={styles.title}>
          {planetName} {t.inWord}{" "}
          {translatedSign}
        </Text>

        <View style={styles.divider}>
          <View
            style={styles.dividerLine}
          />

          {icon ? (
            <Image
              src={icon}
              style={styles.dividerIcon}
            />
          ) : null}

          <View
            style={styles.dividerLine}
          />
        </View>

        <Text style={styles.subtitle}>
          {t.subtitle}
        </Text>
      </View>

      <View
        style={styles.hero}
        wrap={false}
      >
        {icon ? (
          <>
            <View
              style={styles.iconCircle}
            >
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
            {t.inNatalChart}
          </Text>

          <Text style={styles.heroName}>
            {planetName}
          </Text>

          <Text style={styles.heroSign}>
            {t.inWord} {translatedSign}
          </Text>

          {degree ? (
            <Text style={styles.heroDegree}>
              {t.astrologicalPosition}{" "}
              {degree}
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

        <Text
          style={styles.interpretation}
        >
          {interpretation}
        </Text>
      </View>

      <View
        style={styles.guidanceCard}
        wrap={false}
      >
        <Text
          style={styles.guidanceTitle}
        >
          {t.whatPositionTeaches}
        </Text>

        <Text
          style={styles.guidanceText}
        >
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
          <View
            style={styles.keyHeader}
          >
            <View
              style={styles.keyNumber}
            >
              <Text
                style={
                  styles.keyNumberText
                }
              >
                01
              </Text>
            </View>

            <Text
              style={styles.keyTitle}
            >
              {t.signInfluence}
            </Text>
          </View>

          <Text style={styles.keyText}>
            {t.placedIn}{" "}
            {translatedSign},{" "}
            {planetName}{" "}
            {t.signInfluenceText}
          </Text>
        </View>

        <View style={styles.keyBox}>
          <View
            style={styles.keyHeader}
          >
            <View
              style={styles.keyNumber}
            >
              <Text
                style={
                  styles.keyNumberText
                }
              >
                02
              </Text>
            </View>

            <Text
              style={styles.keyTitle}
            >
              {t.energyToDevelop}
            </Text>
          </View>

          <Text style={styles.keyText}>
            {t.energyToDevelopText}
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
          {t.finalNote}
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
