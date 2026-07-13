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
} from "./PremiumPdfAssets";

import type { PremiumPdfProps } from "./PremiumPdfTypes";
import PdfPageFooter from "./PdfPageFooter";

/*
 * Couleurs principales du rapport Premium
 */
const GOLD = "#d4af4e";
const BRIGHT_GOLD = "#c99a3d";
const SOFT_GOLD = "#8f6e35";
const DARK_GOLD = "#4e412d";

const PAGE_BACKGROUND = "#06101f";
const CARD_BACKGROUND = "#081426";
const CREAM = "#fff8e7";
const MUTED_CREAM = "#e8e2d7";

type Point = {
  x: number;
  y: number;
};

/*
 * Convertit un angle en coordonnées circulaires.
 *
 * Le degré 0 commence en haut de la roue.
 */
function polarPoint(
  center: number,
  radius: number,
  angleDegrees: number
): Point {
  const radians =
    ((angleDegrees - 90) * Math.PI) / 180;

  return {
    x: center + radius * Math.cos(radians),
    y: center + radius * Math.sin(radians),
  };
}

const styles = StyleSheet.create({
  page: {
    position: "relative",

    paddingTop: 32,
    paddingBottom: 46,
    paddingHorizontal: 48,

    backgroundColor: PAGE_BACKGROUND,
    color: CREAM,

    fontFamily: "Helvetica",

    overflow: "hidden",
  },

  /*
   * Filet supérieur
   */
  topAccent: {
    position: "absolute",

    top: 0,
    left: 0,
    right: 0,

    height: 5,

    backgroundColor: GOLD,
  },

  /*
   * Bordures de couverture
   */
  outerBorder: {
    position: "absolute",

    top: 18,
    left: 18,
    right: 18,
    bottom: 18,

    borderWidth: 0.9,
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

  /*
   * Roues astrologiques décoratives
   */
  cornerWheelLeft: {
    position: "absolute",

    top: 25,
    left: 25,

    width: 94,
    height: 94,

    opacity: 0.1,
  },

  cornerWheelRight: {
    position: "absolute",

    top: 25,
    right: 25,

    width: 94,
    height: 94,

    opacity: 0.1,
  },

  content: {
    position: "relative",
  },

  /*
   * Logo et marque
   */
  header: {
    alignItems: "center",

    marginBottom: 10,
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
   * Badge Premium
   */
  premiumBadge: {
    alignSelf: "center",

    paddingTop: 4,
    paddingBottom: 4,
    paddingHorizontal: 16,

    marginBottom: 9,

    backgroundColor: CARD_BACKGROUND,

    borderWidth: 0.8,
    borderColor: GOLD,
  },

  premiumBadgeText: {
    color: GOLD,

    fontSize: 7.2,
    letterSpacing: 2.2,

    textTransform: "uppercase",
    textAlign: "center",
  },

  /*
   * Titre principal
   */
  titleSection: {
    alignItems: "center",

    marginBottom: 13,
  },

  eyebrow: {
    fontSize: 7.7,
    letterSpacing: 2.3,

    color: "#d7c49a",

    textTransform: "uppercase",

    marginBottom: 7,
  },

  title: {
    fontSize: 32,
    lineHeight: 1.08,

    color: CREAM,

    textAlign: "center",

    marginBottom: 1,
  },

  titleAccent: {
    fontSize: 37,
    lineHeight: 1.04,

    color: BRIGHT_GOLD,

    textAlign: "center",

    marginBottom: 8,
  },

  subtitle: {
    width: "84%",

    fontSize: 9.5,
    lineHeight: 1.42,

    color: MUTED_CREAM,

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

    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 21,

    marginBottom: 10,
  },

  identityAccentLeft: {
    position: "absolute",

    top: -1,
    left: 0,

    width: 92,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  identityAccentRight: {
    position: "absolute",

    bottom: -1,
    right: 0,

    width: 70,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  preparedLabel: {
    fontSize: 6.6,
    letterSpacing: 2,

    color: "#d7ccb3",

    textTransform: "uppercase",
    textAlign: "center",

    marginBottom: 5,
  },

  name: {
    fontSize: 24,
    lineHeight: 1.15,

    color: CREAM,

    textAlign: "center",

    marginBottom: 9,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    borderTopWidth: 0.6,
    borderTopColor: "#705a35",

    paddingTop: 8,
  },

  infoColumn: {
    width: "31.5%",

    alignItems: "center",
  },

  infoLabel: {
    fontSize: 5.8,
    letterSpacing: 1.05,

    color: "#c8b98f",

    textTransform: "uppercase",
    textAlign: "center",

    marginBottom: 3,
  },

  infoValue: {
    fontSize: 8.8,
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

    marginBottom: 8,
  },

  quote: {
    fontSize: 10.5,
    lineHeight: 1.4,

    color: "#f4efe2",

    textAlign: "center",

    marginBottom: 3,
  },

  signature: {
    fontSize: 6.3,
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

    paddingTop: 8,
    paddingBottom: 8,

    marginBottom: 10,
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

    backgroundColor: PAGE_BACKGROUND,

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 5,
  },

  icon: {
    width: 27,
    height: 27,

    objectFit: "contain",
  },

  pillarTitle: {
    fontSize: 8.2,

    color: BRIGHT_GOLD,

    textTransform: "uppercase",

    marginBottom: 2,
  },

  pillarDescription: {
    fontSize: 6.3,
    lineHeight: 1.3,

    color: "#eee8dc",

    textAlign: "center",
  },

  /*
   * Introduction Premium
   */
  introCard: {
    position: "relative",

    backgroundColor: CARD_BACKGROUND,

    borderWidth: 0.9,
    borderColor: SOFT_GOLD,

    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 20,
  },

  introAccentTop: {
    position: "absolute",

    top: -1,
    left: 0,

    width: 110,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  introAccentBottom: {
    position: "absolute",

    bottom: -1,
    right: 0,

    width: 82,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  introHeader: {
    alignItems: "center",

    marginBottom: 7,
  },

  introKicker: {
    fontSize: 6.5,
    letterSpacing: 2,

    color: "#cdbb92",

    textTransform: "uppercase",

    marginBottom: 4,
  },

  introTitle: {
    fontSize: 16.5,
    lineHeight: 1.2,

    color: BRIGHT_GOLD,

    textAlign: "center",
  },

  introOrnament: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",

    marginTop: 6,
  },

  ornamentLine: {
    width: 48,
    height: 0.6,

    backgroundColor: "#80683d",
  },

  dividerMoon: {
    width: 17,
    height: 17,

    objectFit: "contain",

    marginHorizontal: 10,
  },

  introDivider: {
    width: "100%",
    height: 0.6,

    backgroundColor: "#705a35",

    marginTop: 7,
    marginBottom: 8,
  },

  introParagraph: {
    fontSize: 8.2,
    lineHeight: 1.48,

    color: "#eee8dc",

    textAlign: "justify",

    marginBottom: 6,
  },

  introConclusion: {
    fontSize: 8.5,
    lineHeight: 1.45,

    color: BRIGHT_GOLD,

    textAlign: "center",

    marginTop: 2,
  },
});

function displayValue(
  value?: string
): string {
  const cleanValue =
    typeof value === "string"
      ? value.trim()
      : "";

  return cleanValue || "Non précisé";
}

/*
 * Petite roue astrologique décorative.
 *
 * Elle contient :
 * - plusieurs anneaux;
 * - des graduations tous les 5 degrés;
 * - les divisions des 12 signes;
 * - une rose céleste centrale.
 */
function CornerAstrologicalWheel({
  size,
}: {
  size: number;
}) {
  const center = size / 2;

  const outerRadius = size * 0.47;
  const secondRadius = size * 0.435;

  const zodiacOuterRadius = size * 0.385;
  const zodiacInnerRadius = size * 0.285;

  const centerRadius = size * 0.095;

  /*
   * Une graduation tous les 5 degrés.
   */
  const degreeTicks = Array.from(
    {
      length: 72,
    },
    (_, index) => {
      const angle = index * 5;

      const outerPoint = polarPoint(
        center,
        zodiacOuterRadius,
        angle
      );

      const isMajor = index % 6 === 0;
      const isMedium = index % 3 === 0;

      let tickLength = size * 0.025;
      let strokeWidth = 0.3;

      if (isMajor) {
        tickLength = size * 0.07;
        strokeWidth = 0.75;
      } else if (isMedium) {
        tickLength = size * 0.045;
        strokeWidth = 0.5;
      }

      const innerPoint = polarPoint(
        center,
        zodiacOuterRadius - tickLength,
        angle
      );

      return (
        <Line
          key={`corner-degree-${index}`}
          x1={outerPoint.x}
          y1={outerPoint.y}
          x2={innerPoint.x}
          y2={innerPoint.y}
          stroke={GOLD}
          strokeWidth={strokeWidth}
        />
      );
    }
  );

  /*
   * Divisions des 12 signes astrologiques.
   */
  const zodiacDivisions = Array.from(
    {
      length: 12,
    },
    (_, index) => {
      const angle = index * 30;

      const outerPoint = polarPoint(
        center,
        zodiacOuterRadius,
        angle
      );

      const innerPoint = polarPoint(
        center,
        zodiacInnerRadius,
        angle
      );

      return (
        <Line
          key={`corner-zodiac-${index}`}
          x1={outerPoint.x}
          y1={outerPoint.y}
          x2={innerPoint.x}
          y2={innerPoint.y}
          stroke={BRIGHT_GOLD}
          strokeWidth={0.7}
        />
      );
    }
  );

  /*
   * Points de la rose céleste centrale.
   */
  const topPoint = polarPoint(
    center,
    size * 0.065,
    0
  );

  const rightPoint = polarPoint(
    center,
    size * 0.065,
    90
  );

  const bottomPoint = polarPoint(
    center,
    size * 0.065,
    180
  );

  const leftPoint = polarPoint(
    center,
    size * 0.065,
    270
  );

  const topRightPoint = polarPoint(
    center,
    size * 0.04,
    45
  );

  const bottomRightPoint = polarPoint(
    center,
    size * 0.04,
    135
  );

  const bottomLeftPoint = polarPoint(
    center,
    size * 0.04,
    225
  );

  const topLeftPoint = polarPoint(
    center,
    size * 0.04,
    315
  );

  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <Circle
        cx={center}
        cy={center}
        r={outerRadius}
        stroke={BRIGHT_GOLD}
        strokeWidth={0.9}
        fill="none"
      />

      <Circle
        cx={center}
        cy={center}
        r={secondRadius}
        stroke={SOFT_GOLD}
        strokeWidth={0.45}
        fill="none"
      />

      <Circle
        cx={center}
        cy={center}
        r={zodiacOuterRadius}
        stroke={GOLD}
        strokeWidth={0.55}
        fill="none"
      />

      {degreeTicks}

      {zodiacDivisions}

      <Circle
        cx={center}
        cy={center}
        r={zodiacInnerRadius}
        stroke={SOFT_GOLD}
        strokeWidth={0.5}
        fill="none"
      />

      <Circle
        cx={center}
        cy={center}
        r={centerRadius}
        stroke={GOLD}
        strokeWidth={0.55}
        fill="none"
      />

      <Line
        x1={topPoint.x}
        y1={topPoint.y}
        x2={bottomPoint.x}
        y2={bottomPoint.y}
        stroke={BRIGHT_GOLD}
        strokeWidth={0.7}
      />

      <Line
        x1={leftPoint.x}
        y1={leftPoint.y}
        x2={rightPoint.x}
        y2={rightPoint.y}
        stroke={BRIGHT_GOLD}
        strokeWidth={0.7}
      />

      <Line
        x1={topLeftPoint.x}
        y1={topLeftPoint.y}
        x2={bottomRightPoint.x}
        y2={bottomRightPoint.y}
        stroke={GOLD}
        strokeWidth={0.5}
      />

      <Line
        x1={topRightPoint.x}
        y1={topRightPoint.y}
        x2={bottomLeftPoint.x}
        y2={bottomLeftPoint.y}
        stroke={GOLD}
        strokeWidth={0.5}
      />

      <Circle
        cx={center}
        cy={center}
        r={1.2}
        fill={BRIGHT_GOLD}
      />
    </Svg>
  );
}

export default function PdfCover({
  firstName,
  birthDate,
  birthTime,
  birthCity,
}: PremiumPdfProps) {
  return (
    <Page
      size="A4"
      style={styles.page}
    >
      {/*
       * Décoration de fond
       */}

      <View
        style={styles.topAccent}
        fixed
      />

      <View
        style={styles.outerBorder}
        fixed
      />

      <View
        style={styles.innerBorder}
        fixed
      />

      {/*
       * Roue décorative gauche
       */}

      <View
        style={styles.cornerWheelLeft}
        fixed
      >
        <CornerAstrologicalWheel
          size={94}
        />
      </View>

      {/*
       * Roue décorative droite
       */}

      <View
        style={styles.cornerWheelRight}
        fixed
      >
        <CornerAstrologicalWheel
          size={94}
        />
      </View>

      {/*
       * Contenu principal
       */}

      <View style={styles.content}>
        <View
          style={styles.header}
          wrap={false}
        >
          <Image
            src={LOGO_URL}
            style={styles.logo}
          />

          <View
            style={styles.brandDivider}
          />
        </View>

        <View
          style={styles.premiumBadge}
          wrap={false}
        >
          <Text
            style={
              styles.premiumBadgeText
            }
          >
            Édition Signature
          </Text>
        </View>

        <View
          style={styles.titleSection}
          wrap={false}
        >
          <Text style={styles.eyebrow}>
            Rapport astrologique personnalisé
          </Text>

          <Text style={styles.title}>
            Votre carte du ciel
          </Text>

          <Text style={styles.titleAccent}>
            Signature
          </Text>

          <Text style={styles.subtitle}>
            L’analyse la plus complète de votre thème natal, révélant les
  interactions entre les planètes, les maisons, les aspects et les
  grandes dynamiques qui façonnent votre évolution.
          </Text>
        </View>

        <View
          style={styles.identityCard}
          wrap={false}
        >
          <View
            style={
              styles.identityAccentLeft
            }
          />

          <View
            style={
              styles.identityAccentRight
            }
          />

          <Text
            style={styles.preparedLabel}
          >
            Préparé exclusivement pour
          </Text>

          <Text style={styles.name}>
            {displayValue(firstName)}
          </Text>

          <View style={styles.infoRow}>
            <View
              style={styles.infoColumn}
            >
              <Text
                style={styles.infoLabel}
              >
                Date de naissance
              </Text>

              <Text
                style={styles.infoValue}
              >
                {displayValue(
                  birthDate
                )}
              </Text>
            </View>

            <View
              style={styles.infoColumn}
            >
              <Text
                style={styles.infoLabel}
              >
                Heure de naissance
              </Text>

              <Text
                style={styles.infoValue}
              >
                {displayValue(
                  birthTime
                )}
              </Text>
            </View>

            <View
              style={styles.infoColumn}
            >
              <Text
                style={styles.infoLabel}
              >
                Lieu de naissance
              </Text>

              <Text
                style={styles.infoValue}
              >
                {displayValue(
                  birthCity
                )}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={styles.quoteSection}
          wrap={false}
        >
          <Text style={styles.quote}>
            Votre thème natal ne révèle pas seulement qui vous êtes,
            mais aussi tout ce que vous pouvez devenir.
          </Text>

          <Text style={styles.signature}>
            Luna Astralis
          </Text>
        </View>

        <View
          style={styles.pillars}
          wrap={false}
        >
          <View style={styles.pillar}>
            <View
              style={styles.iconCircle}
            >
              <Image
                src={PLANET_ICONS.Sun}
                style={styles.icon}
              />
            </View>

            <Text
              style={styles.pillarTitle}
            >
              Soleil
            </Text>

            <Text
              style={
                styles.pillarDescription
              }
            >
              Votre identité profonde
            </Text>
          </View>

          <View style={styles.pillar}>
            <View
              style={styles.iconCircle}
            >
              <Image
                src={PLANET_ICONS.Moon}
                style={styles.icon}
              />
            </View>

            <Text
              style={styles.pillarTitle}
            >
              Lune
            </Text>

            <Text
              style={
                styles.pillarDescription
              }
            >
              Votre monde émotionnel
            </Text>
          </View>

          <View style={styles.pillar}>
            <View
              style={styles.iconCircle}
            >
              <Image
                src={ASCENDANT_ICON}
                style={styles.icon}
              />
            </View>

            <Text
              style={styles.pillarTitle}
            >
              Ascendant
            </Text>

            <Text
              style={
                styles.pillarDescription
              }
            >
              Votre présence naturelle
            </Text>
          </View>
        </View>

        <View
          style={styles.introCard}
          wrap={false}
        >
          <View
            style={styles.introAccentTop}
          />

          <View
            style={
              styles.introAccentBottom
            }
          />

          <View style={styles.introHeader}>
            <Text
              style={styles.introKicker}
            >
              Votre exploration Signature
            </Text>

            <Text
              style={styles.introTitle}
            >
              L’analyse la plus complète de votre thème natal
            </Text>

            <View
              style={styles.introOrnament}
            >
              <View
                style={styles.ornamentLine}
              />

              <Image
                src={PLANET_ICONS.Moon}
                style={styles.dividerMoon}
              />

              <View
                style={styles.ornamentLine}
              />
            </View>
          </View>

          <View
            style={styles.introDivider}
          />

          <Text
            style={styles.introParagraph}
          >
            Chaque être humain naît sous un ciel unique. Les positions
            des planètes, des angles et des maisons au moment précis de
            votre naissance forment une signature céleste qui vous
            appartient.
          </Text>

          <Text
            style={styles.introParagraph}
          >
            Ce rapport Premium vous propose une lecture plus profonde
            de votre personnalité, de votre vie émotionnelle, de vos
            relations, de vos talents et des grandes dynamiques qui
            accompagnent votre évolution.
          </Text>

          <Text
            style={styles.introParagraph}
          >
            Vous découvrirez également comment les différentes
            composantes de votre thème dialoguent entre elles. Les
            planètes ne fonctionnent jamais seules : leurs signes,
            leurs maisons et leurs aspects construisent ensemble une
            histoire personnelle beaucoup plus nuancée.
          </Text>

          <Text
            style={styles.introConclusion}
          >
            Parcourez les pages suivantes avec ouverture et curiosité :
            elles constituent une invitation à mieux comprendre votre
            nature et à reconnaître pleinement votre potentiel.
          </Text>
        </View>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
