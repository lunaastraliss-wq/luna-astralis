import {
  Circle,
  Image,
  Line,
  Page,
  StyleSheet,
  Svg,
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

const GOLD = "#d4af4e";
const SOFT_GOLD = "#8f6e35";
const DARK_GOLD = "#4e412d";
const PAGE_BACKGROUND = "#06101f";
const CARD_BACKGROUND = "#081426";
const CREAM = "#fff8e7";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 34,
    paddingBottom: 46,
    paddingHorizontal: 48,
    backgroundColor: PAGE_BACKGROUND,
    color: CREAM,
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
    borderColor: SOFT_GOLD,
  },

  innerBorder: {
    position: "absolute",
    top: 23,
    left: 23,
    right: 23,
    bottom: 23,
    borderWidth: 0.35,
    borderColor: DARK_GOLD,
  },

  topAccent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 5,
    backgroundColor: GOLD,
  },

  /*
   * Cartes célestes décoratives
   */
  celestialTopLeft: {
    position: "absolute",
    top: 28,
    left: 27,
    width: 120,
    height: 120,
    opacity: 0.35,
  },

  celestialBottomRight: {
    position: "absolute",
    right: 21,
    bottom: 20,
    width: 150,
    height: 150,
    opacity: 0.28,
  },

  content: {
    position: "relative",
  },

  /*
   * Logo
   */
  header: {
    alignItems: "center",
    marginBottom: 14,
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
    backgroundColor: GOLD,
  },

  /*
   * Titre
   */
  titleSection: {
    alignItems: "center",
    marginBottom: 16,
  },

  eyebrow: {
    fontSize: 8,
    letterSpacing: 2.5,
    color: "#f4c95d",
    textTransform: "uppercase",
    marginBottom: 9,
  },

  title: {
    fontSize: 33,
    lineHeight: 1.08,
    color: CREAM,
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
    width: "80%",
    fontSize: 10,
    lineHeight: 1.42,
    color: "#e8e2d7",
    textAlign: "center",
  },

  /*
   * Informations personnelles
   */
  identityCard: {
    position: "relative",
    borderWidth: 1,
    borderColor: "#b7944c",
    backgroundColor: CARD_BACKGROUND,
    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 21,
    marginBottom: 12,
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
    color: CREAM,
    textAlign: "center",
    marginBottom: 11,
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
    color: CREAM,
    textAlign: "center",
  },

  /*
   * Citation
   */
  quoteSection: {
    alignItems: "center",
    paddingHorizontal: 26,
    marginBottom: 10,
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

  /*
   * Soleil, Lune et Ascendant
   */
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
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#c89b42",
    backgroundColor: PAGE_BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },

  icon: {
    width: 28,
    height: 28,
    objectFit: "contain",
  },

  pillarTitle: {
    fontSize: 8.5,
    color: "#f4c95d",
    textTransform: "uppercase",
    marginBottom: 2,
  },

  pillarDescription: {
    fontSize: 6.5,
    lineHeight: 1.3,
    color: "#eee8dc",
    textAlign: "center",
  },

  /*
   * Introduction
   */
  introCard: {
    position: "relative",
    backgroundColor: CARD_BACKGROUND,
    borderWidth: 0.9,
    borderColor: SOFT_GOLD,
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  introAccentTop: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 100,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  introHeader: {
    alignItems: "center",
    marginBottom: 10,
  },

  introKicker: {
    fontSize: 6.8,
    letterSpacing: 2.1,
    color: "#cdbb92",
    textTransform: "uppercase",
    marginBottom: 5,
  },

  introTitle: {
    fontSize: 17,
    lineHeight: 1.2,
    color: "#f4c95d",
    textAlign: "center",
  },

  introOrnament: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },

  ornamentLine: {
    width: 48,
    height: 0.6,
    backgroundColor: "#80683d",
  },

  ornamentSymbol: {
    color: "#f4c95d",
    fontSize: 10,
    marginHorizontal: 9,
  },

  introDivider: {
    width: "100%",
    height: 0.6,
    backgroundColor: "#705a35",
    marginTop: 10,
    marginBottom: 11,
  },

  introParagraph: {
    fontSize: 8.7,
    lineHeight: 1.52,
    color: "#eee8dc",
    marginBottom: 8,
    textAlign: "justify",
  },

  introConclusion: {
    fontSize: 9,
    lineHeight: 1.5,
    color: "#f4c95d",
    textAlign: "center",
    marginTop: 3,
  },
});

function displayValue(value?: string): string {
  const cleanValue = value?.trim();
  return cleanValue || "Non précisé";
}

function CelestialChart({
  size,
}: {
  size: number;
}) {
  const center = size / 2;

  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <Circle
        cx={center}
        cy={center}
        r={size * 0.45}
        stroke="#b88b3f"
        strokeWidth={0.7}
        fill="none"
      />

      <Circle
        cx={center}
        cy={center}
        r={size * 0.35}
        stroke="#80683d"
        strokeWidth={0.5}
        fill="none"
      />

      <Circle
        cx={center}
        cy={center}
        r={size * 0.24}
        stroke="#a9823c"
        strokeWidth={0.5}
        fill="none"
      />

      <Circle
        cx={center}
        cy={center}
        r={size * 0.1}
        stroke="#d4af4e"
        strokeWidth={0.55}
        fill="none"
      />

      <Line
        x1={center}
        y1={size * 0.05}
        x2={center}
        y2={size * 0.95}
        stroke="#80683d"
        strokeWidth={0.45}
      />

      <Line
        x1={size * 0.05}
        y1={center}
        x2={size * 0.95}
        y2={center}
        stroke="#80683d"
        strokeWidth={0.45}
      />

      <Line
        x1={size * 0.18}
        y1={size * 0.18}
        x2={size * 0.82}
        y2={size * 0.82}
        stroke="#665331"
        strokeWidth={0.4}
      />

      <Line
        x1={size * 0.82}
        y1={size * 0.18}
        x2={size * 0.18}
        y2={size * 0.82}
        stroke="#665331"
        strokeWidth={0.4}
      />

      <Line
        x1={size * 0.31}
        y1={size * 0.18}
        x2={size * 0.73}
        y2={size * 0.39}
        stroke="#c49a48"
        strokeWidth={0.65}
      />

      <Line
        x1={size * 0.73}
        y1={size * 0.39}
        x2={size * 0.59}
        y2={size * 0.72}
        stroke="#c49a48"
        strokeWidth={0.65}
      />

      <Line
        x1={size * 0.59}
        y1={size * 0.72}
        x2={size * 0.36}
        y2={size * 0.61}
        stroke="#c49a48"
        strokeWidth={0.65}
      />

      <Circle
        cx={size * 0.31}
        cy={size * 0.18}
        r={1.8}
        fill="#f4c95d"
      />

      <Circle
        cx={size * 0.73}
        cy={size * 0.39}
        r={1.5}
        fill="#f4c95d"
      />

      <Circle
        cx={size * 0.59}
        cy={size * 0.72}
        r={1.7}
        fill="#f4c95d"
      />

      <Circle
        cx={size * 0.36}
        cy={size * 0.61}
        r={1.3}
        fill="#f4c95d"
      />

      <Circle
        cx={size * 0.23}
        cy={size * 0.43}
        r={1}
        fill="#f4c95d"
      />

      <Circle
        cx={size * 0.79}
        cy={size * 0.67}
        r={1}
        fill="#f4c95d"
      />

      <Circle
        cx={size * 0.47}
        cy={size * 0.28}
        r={0.9}
        fill="#f4c95d"
      />
    </Svg>
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

      <View style={styles.celestialTopLeft} fixed>
        <CelestialChart size={120} />
      </View>

      <View style={styles.celestialBottomRight} fixed>
        <CelestialChart size={150} />
      </View>

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
          <View style={styles.introAccentTop} />

          <View style={styles.introHeader}>
            <Text style={styles.introKicker}>
              Votre voyage astrologique
            </Text>

            <Text style={styles.introTitle}>
              Avant de commencer
            </Text>

            <View style={styles.introOrnament}>
              <View style={styles.ornamentLine} />

              <Text style={styles.ornamentSymbol}>
                ✦
              </Text>

              <View style={styles.ornamentLine} />
            </View>
          </View>

          <View style={styles.introDivider} />

          <Text style={styles.introParagraph}>
            Chaque être humain naît sous un ciel unique. Les positions
            des planètes au moment précis de votre naissance forment
            une empreinte céleste qui vous est propre.
          </Text>

          <Text style={styles.introParagraph}>
            Ce rapport vous accompagne dans la découverte de vos
            principales énergies, de vos forces naturelles et des
            grands thèmes qui façonnent votre personnalité.
          </Text>

          <Text style={styles.introParagraph}>
            L’astrologie ne présente pas un destin figé. Elle offre
            plutôt un langage symbolique qui permet de mieux
            comprendre votre potentiel, vos besoins et votre manière
            d’évoluer.
          </Text>

          <Text style={styles.introConclusion}>
            Prenez le temps de parcourir les pages suivantes avec
            curiosité : votre voyage commence maintenant.
          </Text>
        </View>
      </View>

      <PdfPageFooter />
    </Page>
  );
        }
