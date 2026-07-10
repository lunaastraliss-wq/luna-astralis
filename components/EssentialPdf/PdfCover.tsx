import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  ASCENDANT_ICON,
  LOGO_URL,
  PLANET_ICONS,
} from "./EssentialPdfAssets";

import type { EssentialPdfProps } from "./EssentialPdfTypes";
import PdfPageFooter from "./PdfPageFooter";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 36,
    paddingBottom: 48,
    paddingHorizontal: 48,
    backgroundColor: "#06101f",
    color: "#fff8e7",
    fontFamily: "Helvetica",
    overflow: "hidden",
  },

  outerBorder: {
    position: "absolute",
    top: 18,
    left: 18,
    right: 18,
    bottom: 18,
    borderWidth: 0.8,
    borderColor: "#8f6e35",
  },

  innerBorder: {
    position: "absolute",
    top: 23,
    left: 23,
    right: 23,
    bottom: 23,
    borderWidth: 0.35,
    borderColor: "#4e412d",
  },

  topAccent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 5,
    backgroundColor: "#d4af4e",
  },

  /*
   * Carte céleste ancienne — coin supérieur gauche
   */
  celestialTopLeft: {
    position: "absolute",
    top: 34,
    left: 30,
    width: 128,
    height: 128,
    opacity: 0.42,
  },

  celestialTopOuterRing: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 118,
    height: 118,
    borderRadius: 59,
    borderWidth: 0.55,
    borderColor: "#a98742",
  },

  celestialTopMiddleRing: {
    position: "absolute",
    top: 18,
    left: 18,
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 0.35,
    borderColor: "#7c683f",
  },

  celestialTopInnerRing: {
    position: "absolute",
    top: 35,
    left: 35,
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 0.4,
    borderColor: "#b28b41",
  },

  celestialTopHorizontal: {
    position: "absolute",
    top: 63,
    left: 7,
    width: 112,
    height: 0.45,
    backgroundColor: "#9f8143",
  },

  celestialTopVertical: {
    position: "absolute",
    top: 7,
    left: 63,
    width: 0.45,
    height: 112,
    backgroundColor: "#9f8143",
  },

  celestialTopDiagonalOne: {
    position: "absolute",
    top: 63,
    left: 5,
    width: 116,
    height: 0.4,
    backgroundColor: "#725f3d",
    transform: "rotate(45deg)",
  },

  celestialTopDiagonalTwo: {
    position: "absolute",
    top: 63,
    left: 5,
    width: 116,
    height: 0.4,
    backgroundColor: "#725f3d",
    transform: "rotate(-45deg)",
  },

  /*
   * Carte céleste ancienne — coin inférieur droit
   */
  celestialBottomRight: {
    position: "absolute",
    right: 24,
    bottom: 28,
    width: 178,
    height: 178,
    opacity: 0.35,
  },

  celestialBottomOuterRing: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 168,
    height: 168,
    borderRadius: 84,
    borderWidth: 0.6,
    borderColor: "#a98742",
  },

  celestialBottomMiddleRing: {
    position: "absolute",
    top: 21,
    left: 21,
    width: 134,
    height: 134,
    borderRadius: 67,
    borderWidth: 0.4,
    borderColor: "#75623d",
  },

  celestialBottomInnerRing: {
    position: "absolute",
    top: 46,
    left: 46,
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 0.45,
    borderColor: "#b28b41",
  },

  celestialBottomHorizontal: {
    position: "absolute",
    top: 88,
    left: 6,
    width: 164,
    height: 0.45,
    backgroundColor: "#8f733f",
  },

  celestialBottomVertical: {
    position: "absolute",
    top: 6,
    left: 88,
    width: 0.45,
    height: 164,
    backgroundColor: "#8f733f",
  },

  celestialBottomDiagonalOne: {
    position: "absolute",
    top: 88,
    left: 4,
    width: 170,
    height: 0.4,
    backgroundColor: "#6e5c3d",
    transform: "rotate(45deg)",
  },

  celestialBottomDiagonalTwo: {
    position: "absolute",
    top: 88,
    left: 4,
    width: 170,
    height: 0.4,
    backgroundColor: "#6e5c3d",
    transform: "rotate(-45deg)",
  },

  /*
   * Étoiles et constellations
   */
  star: {
    position: "absolute",
    color: "#d4af4e",
    fontSize: 7,
    lineHeight: 1,
  },

  smallStar: {
    position: "absolute",
    color: "#b99752",
    fontSize: 4,
    lineHeight: 1,
  },

  constellationLine: {
    position: "absolute",
    height: 0.45,
    backgroundColor: "#8f733f",
  },

  content: {
    position: "relative",
  },

  header: {
    alignItems: "center",
    marginBottom: 17,
  },

  logo: {
    width: 154,
    height: 60,
    objectFit: "contain",
    marginBottom: 7,
  },

  brandDivider: {
    width: 108,
    height: 1,
    backgroundColor: "#d4af4e",
  },

  titleSection: {
    alignItems: "center",
    marginBottom: 18,
  },

  eyebrow: {
    fontSize: 8,
    letterSpacing: 2.5,
    color: "#f4c95d",
    textTransform: "uppercase",
    marginBottom: 10,
  },

  title: {
    fontSize: 33,
    lineHeight: 1.08,
    color: "#fff8e7",
    textAlign: "center",
    marginBottom: 2,
  },

  titleAccent: {
    fontSize: 36,
    lineHeight: 1.04,
    color: "#f4c95d",
    textAlign: "center",
    marginBottom: 9,
  },

  subtitle: {
    width: "78%",
    fontSize: 9.8,
    lineHeight: 1.42,
    color: "#e8e2d7",
    textAlign: "center",
  },

  identityCard: {
    position: "relative",
    borderWidth: 1,
    borderColor: "#b7944c",
    backgroundColor: "#081426",
    paddingTop: 14,
    paddingBottom: 14,
    paddingHorizontal: 21,
    marginBottom: 14,
  },

  identityAccentLeft: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 92,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  identityAccentRight: {
    position: "absolute",
    bottom: -1,
    right: 0,
    width: 70,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  preparedLabel: {
    fontSize: 6.8,
    letterSpacing: 2,
    color: "#d7ccb3",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 6,
  },

  name: {
    fontSize: 25,
    lineHeight: 1.15,
    color: "#fff8e7",
    textAlign: "center",
    marginBottom: 12,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.6,
    borderTopColor: "#705a35",
    paddingTop: 9,
  },

  infoColumn: {
    width: "31.5%",
    alignItems: "center",
  },

  infoLabel: {
    fontSize: 5.9,
    letterSpacing: 1.05,
    color: "#c8b98f",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 3,
  },

  infoValue: {
    fontSize: 9,
    lineHeight: 1.25,
    color: "#fff8e7",
    textAlign: "center",
  },

  quoteSection: {
    alignItems: "center",
    paddingHorizontal: 26,
    marginBottom: 12,
  },

  quote: {
    fontSize: 11,
    lineHeight: 1.4,
    color: "#f4efe2",
    textAlign: "center",
    marginBottom: 4,
  },

  signature: {
    fontSize: 6.5,
    letterSpacing: 2,
    color: "#d1c2a2",
    textTransform: "uppercase",
  },

  pillars: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderColor: "#80683d",
    paddingTop: 9,
    paddingBottom: 9,
    marginBottom: 12,
  },

  pillar: {
    width: "31%",
    alignItems: "center",
  },

  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#c89b42",
    backgroundColor: "#06101f",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },

  icon: {
    width: 26,
    height: 26,
    objectFit: "contain",
  },

  pillarTitle: {
    fontSize: 8.2,
    color: "#f4c95d",
    textTransform: "uppercase",
    marginBottom: 2,
  },

  pillarDescription: {
    fontSize: 6.3,
    lineHeight: 1.28,
    color: "#eee8dc",
    textAlign: "center",
  },

  introCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#081426",
    borderWidth: 0.7,
    borderColor: "#8f6e35",
    paddingVertical: 8,
    paddingHorizontal: 11,
  },

  introLabel: {
    width: 30,
    fontSize: 6.8,
    letterSpacing: 1.2,
    color: "#f4c95d",
    paddingTop: 1,
  },

  introText: {
    flexGrow: 1,
    flexBasis: 0,
    fontSize: 7.9,
    lineHeight: 1.42,
    color: "#eee8dc",
  },
});

function displayValue(value?: string): string {
  const cleanValue = value?.trim();
  return cleanValue || "Non précisé";
}

function CelestialTopLeft() {
  return (
    <View style={styles.celestialTopLeft} fixed>
      <View style={styles.celestialTopOuterRing} />
      <View style={styles.celestialTopMiddleRing} />
      <View style={styles.celestialTopInnerRing} />
      <View style={styles.celestialTopHorizontal} />
      <View style={styles.celestialTopVertical} />
      <View style={styles.celestialTopDiagonalOne} />
      <View style={styles.celestialTopDiagonalTwo} />

      <Text style={[styles.star, { top: 9, left: 60 }]}>✦</Text>
      <Text style={[styles.smallStar, { top: 26, left: 91 }]}>•</Text>
      <Text style={[styles.star, { top: 45, left: 104 }]}>✧</Text>
      <Text style={[styles.smallStar, { top: 84, left: 99 }]}>•</Text>
      <Text style={[styles.star, { top: 104, left: 62 }]}>✦</Text>
      <Text style={[styles.smallStar, { top: 88, left: 27 }]}>•</Text>
      <Text style={[styles.star, { top: 48, left: 13 }]}>✧</Text>
      <Text style={[styles.smallStar, { top: 23, left: 34 }]}>•</Text>

      <Text style={[styles.smallStar, { top: 43, left: 49 }]}>•</Text>
      <Text style={[styles.smallStar, { top: 57, left: 73 }]}>•</Text>
      <Text style={[styles.smallStar, { top: 78, left: 61 }]}>•</Text>

      <View
        style={[
          styles.constellationLine,
          {
            top: 51,
            left: 50,
            width: 27,
            transform: "rotate(29deg)",
          },
        ]}
      />

      <View
        style={[
          styles.constellationLine,
          {
            top: 69,
            left: 60,
            width: 22,
            transform: "rotate(118deg)",
          },
        ]}
      />
    </View>
  );
}

function CelestialBottomRight() {
  return (
    <View style={styles.celestialBottomRight} fixed>
      <View style={styles.celestialBottomOuterRing} />
      <View style={styles.celestialBottomMiddleRing} />
      <View style={styles.celestialBottomInnerRing} />
      <View style={styles.celestialBottomHorizontal} />
      <View style={styles.celestialBottomVertical} />
      <View style={styles.celestialBottomDiagonalOne} />
      <View style={styles.celestialBottomDiagonalTwo} />

      <Text style={[styles.star, { top: 12, left: 85 }]}>✦</Text>
      <Text style={[styles.smallStar, { top: 31, left: 128 }]}>•</Text>
      <Text style={[styles.star, { top: 62, left: 151 }]}>✧</Text>
      <Text style={[styles.smallStar, { top: 122, left: 145 }]}>•</Text>
      <Text style={[styles.star, { top: 148, left: 86 }]}>✦</Text>
      <Text style={[styles.smallStar, { top: 131, left: 41 }]}>•</Text>
      <Text style={[styles.star, { top: 75, left: 13 }]}>✧</Text>
      <Text style={[styles.smallStar, { top: 32, left: 48 }]}>•</Text>

      <Text style={[styles.smallStar, { top: 57, left: 68 }]}>•</Text>
      <Text style={[styles.smallStar, { top: 76, left: 108 }]}>•</Text>
      <Text style={[styles.smallStar, { top: 109, left: 93 }]}>•</Text>
      <Text style={[styles.smallStar, { top: 123, left: 119 }]}>•</Text>

      <View
        style={[
          styles.constellationLine,
          {
            top: 67,
            left: 70,
            width: 45,
            transform: "rotate(25deg)",
          },
        ]}
      />

      <View
        style={[
          styles.constellationLine,
          {
            top: 96,
            left: 88,
            width: 37,
            transform: "rotate(112deg)",
          },
        ]}
      />

      <View
        style={[
          styles.constellationLine,
          {
            top: 117,
            left: 95,
            width: 30,
            transform: "rotate(28deg)",
          },
        ]}
      />
    </View>
  );
}

export default function PdfCover({
  firstName,
  birthDate,
  birthTime,
  birthCity,
}: EssentialPdfProps) {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.topAccent} fixed />
      <View style={styles.outerBorder} fixed />
      <View style={styles.innerBorder} fixed />

      <CelestialTopLeft />
      <CelestialBottomRight />

      <View style={styles.content}>
        <View style={styles.header} wrap={false}>
          <Image
            src={LOGO_URL}
            style={styles.logo}
          />

          <View style={styles.brandDivider} />
        </View>

        <View style={styles.titleSection} wrap={false}>
          <Text style={styles.eyebrow}>
            Rapport astrologique personnalisé
          </Text>

          <Text style={styles.title}>
            Votre carte du ciel
          </Text>

          <Text style={styles.titleAccent}>
            essentielle
          </Text>

          <Text style={styles.subtitle}>
            Une première lecture claire et personnelle des grandes
            forces qui composent votre thème natal.
          </Text>
        </View>

        <View style={styles.identityCard} wrap={false}>
          <View style={styles.identityAccentLeft} />
          <View style={styles.identityAccentRight} />

          <Text style={styles.preparedLabel}>
            Préparé exclusivement pour
          </Text>

          <Text style={styles.name}>
            {displayValue(firstName)}
          </Text>

          <View style={styles.infoRow}>
            <View style={styles.infoColumn}>
              <Text style={styles.infoLabel}>
                Date de naissance
              </Text>

              <Text style={styles.infoValue}>
                {displayValue(birthDate)}
              </Text>
            </View>

            <View style={styles.infoColumn}>
              <Text style={styles.infoLabel}>
                Heure de naissance
              </Text>

              <Text style={styles.infoValue}>
                {displayValue(birthTime)}
              </Text>
            </View>

            <View style={styles.infoColumn}>
              <Text style={styles.infoLabel}>
                Lieu de naissance
              </Text>

              <Text style={styles.infoValue}>
                {displayValue(birthCity)}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.quoteSection} wrap={false}>
          <Text style={styles.quote}>
            Chaque naissance possède une signature céleste unique.
          </Text>

          <Text style={styles.signature}>
            Luna Astralis
          </Text>
        </View>

        <View style={styles.pillars} wrap={false}>
          <View style={styles.pillar}>
            <View style={styles.iconCircle}>
              <Image
                src={PLANET_ICONS.Sun}
                style={styles.icon}
              />
            </View>

            <Text style={styles.pillarTitle}>
              Soleil
            </Text>

            <Text style={styles.pillarDescription}>
              Votre identité profonde
            </Text>
          </View>

          <View style={styles.pillar}>
            <View style={styles.iconCircle}>
              <Image
                src={PLANET_ICONS.Moon}
                style={styles.icon}
              />
            </View>

            <Text style={styles.pillarTitle}>
              Lune
            </Text>

            <Text style={styles.pillarDescription}>
              Votre monde émotionnel
            </Text>
          </View>

          <View style={styles.pillar}>
            <View style={styles.iconCircle}>
              <Image
                src={ASCENDANT_ICON}
                style={styles.icon}
              />
            </View>

            <Text style={styles.pillarTitle}>
              Ascendant
            </Text>

            <Text style={styles.pillarDescription}>
              Votre présence naturelle
            </Text>
          </View>
        </View>

        <View style={styles.introCard} wrap={false}>
          <Text style={styles.introLabel}>
            01
          </Text>

          <Text style={styles.introText}>
            Ce rapport Essentiel vous guide à travers vos trois grands
            piliers astrologiques, vos planètes natales, vos éléments
            dominants et votre rythme intérieur.
          </Text>
        </View>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
