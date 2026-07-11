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

/*
 * Couleurs principales
 */
const GOLD = "#d4af4e";
const BRIGHT_GOLD = "#f4c95d";
const SOFT_GOLD = "#8f6e35";
const DARK_GOLD = "#4e412d";

const PAGE_BACKGROUND = "#06101f";
const CARD_BACKGROUND = "#081426";
const CREAM = "#fff8e7";

/*
 * Taille A4 utilisée par React PDF
 */
const A4_WIDTH = 595.28;

/*
 * Noms abrégés des signes.
 * Les lettres latines sont plus fiables dans React PDF
 * que certains symboles Unicode astrologiques.
 */
const ZODIAC_LABELS = [
  "BÉL",
  "TAU",
  "GÉM",
  "CAN",
  "LIO",
  "VIE",
  "BAL",
  "SCO",
  "SAG",
  "CAP",
  "VER",
  "POI",
];

/*
 * Conversion d’un angle en coordonnées circulaires.
 *
 * L’angle 0 commence en haut de la roue.
 */
function polarPoint(
  center: number,
  radius: number,
  angleDegrees: number
) {
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

    paddingTop: 34,
    paddingBottom: 46,
    paddingHorizontal: 48,

    backgroundColor: PAGE_BACKGROUND,
    color: CREAM,
    fontFamily: "Helvetica",

    overflow: "hidden",
  },

  /*
   * Filet doré supérieur
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
   * Doubles bordures
   */
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

  /*
   * Grande roue astrologique en filigrane.
   *
   * La roue est volontairement plus large que la page.
   */
  backgroundWheel: {
    position: "absolute",

    width: 690,
    height: 690,

    left: (A4_WIDTH - 690) / 2,
    top: 42,

    opacity: 0.12,
  },

  /*
   * Petit halo central placé derrière le titre.
   */
  wheelGlow: {
    position: "absolute",

    width: 330,
    height: 330,

    left: (A4_WIDTH - 330) / 2,
    top: 210,

    borderRadius: 165,
    backgroundColor: "#0a1c34",

    opacity: 0.54,
  },

  /*
   * Le contenu reste au-dessus de la roue.
   */
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
   * Titre principal
   */
  titleSection: {
    alignItems: "center",
    marginBottom: 16,
  },

  eyebrow: {
    fontSize: 8,
    letterSpacing: 2.5,

    color: BRIGHT_GOLD,
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

    color: BRIGHT_GOLD,
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
   * Carte d’identité
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

    color: BRIGHT_GOLD,
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
   * Bloc d’introduction
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

    backgroundColor: BRIGHT_GOLD,
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

    color: BRIGHT_GOLD,
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

  dividerMoon: {
    width: 18,
    height: 18,

    objectFit: "contain",
    marginHorizontal: 10,
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
    textAlign: "justify",

    marginBottom: 8,
  },

  introConclusion: {
    fontSize: 9,
    lineHeight: 1.5,

    color: BRIGHT_GOLD,
    textAlign: "center",

    marginTop: 3,
  },
});

function displayValue(value?: string): string {
  const cleanValue = value?.trim();

  return cleanValue || "Non précisé";
}

/*
 * Grande roue astrologique décorative.
 *
 * Cette roue ne représente pas les positions personnelles
 * du client. Elle sert uniquement de fond esthétique.
 */
function CoverAstrologicalWheel({
  size,
}: {
  size: number;
}) {
  const center = size / 2;

  const outerRadius = size * 0.475;
  const secondRadius = size * 0.455;

  const zodiacOuterRadius = size * 0.425;
  const zodiacInnerRadius = size * 0.345;

  const degreeOuterRadius = size * 0.335;
  const degreeInnerRadius = size * 0.305;

  const houseRadius = size * 0.245;
  const centralRadius = size * 0.09;

  /*
   * 360 graduations.
   *
   * Une graduation plus longue est utilisée :
   * - tous les 10 degrés ;
   * - tous les 5 degrés ;
   * - tous les degrés.
   */
  const degreeTicks = Array.from(
    { length: 360 },
    (_, degree) => {
      const outer = polarPoint(
        center,
        degreeOuterRadius,
        degree
      );

      let tickLength = size * 0.007;
      let strokeWidth = 0.26;

      if (degree % 10 === 0) {
        tickLength = size * 0.021;
        strokeWidth = 0.72;
      } else if (degree % 5 === 0) {
        tickLength = size * 0.014;
        strokeWidth = 0.46;
      }

      const inner = polarPoint(
        center,
        degreeOuterRadius - tickLength,
        degree
      );

      return (
        <Line
          key={`degree-${degree}`}
          x1={outer.x}
          y1={outer.y}
          x2={inner.x}
          y2={inner.y}
          stroke={GOLD}
          strokeWidth={strokeWidth}
        />
      );
    }
  );

  /*
   * Les 12 séparations zodiacales.
   */
  const zodiacDivisions = Array.from(
    { length: 12 },
    (_, index) => {
      const angle = index * 30;

      const outer = polarPoint(
        center,
        zodiacOuterRadius,
        angle
      );

      const inner = polarPoint(
        center,
        zodiacInnerRadius,
        angle
      );

      return (
        <Line
          key={`zodiac-division-${index}`}
          x1={outer.x}
          y1={outer.y}
          x2={inner.x}
          y2={inner.y}
          stroke={BRIGHT_GOLD}
          strokeWidth={0.9}
        />
      );
    }
  );

  /*
   * Les rayons des 12 maisons décoratives.
   */
  const houseDivisions = Array.from(
    { length: 12 },
    (_, index) => {
      const angle = index * 30;

      const outer = polarPoint(
        center,
        degreeInnerRadius,
        angle
      );

      const inner = polarPoint(
        center,
        houseRadius,
        angle
      );

      return (
        <Line
          key={`house-division-${index}`}
          x1={outer.x}
          y1={outer.y}
          x2={inner.x}
          y2={inner.y}
          stroke={SOFT_GOLD}
          strokeWidth={0.55}
        />
      );
    }
  );

  /*
   * Noms abrégés des signes.
   */
  const zodiacNames = ZODIAC_LABELS.map(
    (label, index) => {
      const angle = index * 30 + 15;

      const point = polarPoint(
        center,
        size * 0.388,
        angle
      );

      return (
        <Text
          key={`zodiac-label-${label}`}
          x={point.x}
          y={point.y + 3}
          fill={BRIGHT_GOLD}
          fontSize={size * 0.018}
          textAnchor="middle"
        >
          {label}
        </Text>
      );
    }
  );

  /*
   * Numéros des maisons.
   */
  const houseNumbers = Array.from(
    { length: 12 },
    (_, index) => {
      const angle = index * 30 + 15;

      const point = polarPoint(
        center,
        size * 0.277,
        angle
      );

      return (
        <Text
          key={`house-number-${index + 1}`}
          x={point.x}
          y={point.y + 3}
          fill={GOLD}
          fontSize={size * 0.016}
          textAnchor="middle"
        >
          {index + 1}
        </Text>
      );
    }
  );

  /*
   * Points servant aux aspects décoratifs.
   */
  const aspectPoint1 = polarPoint(
    center,
    size * 0.19,
    18
  );

  const aspectPoint2 = polarPoint(
    center,
    size * 0.2,
    94
  );

  const aspectPoint3 = polarPoint(
    center,
    size * 0.18,
    166
  );

  const aspectPoint4 = polarPoint(
    center,
    size * 0.21,
    236
  );

  const aspectPoint5 = polarPoint(
    center,
    size * 0.18,
    302
  );

  /*
   * Points de la rose centrale.
   */
  const starTop = polarPoint(
    center,
    size * 0.058,
    0
  );

  const starRight = polarPoint(
    center,
    size * 0.058,
    90
  );

  const starBottom = polarPoint(
    center,
    size * 0.058,
    180
  );

  const starLeft = polarPoint(
    center,
    size * 0.058,
    270
  );

  const starTopRight = polarPoint(
    center,
    size * 0.035,
    45
  );

  const starBottomRight = polarPoint(
    center,
    size * 0.035,
    135
  );

  const starBottomLeft = polarPoint(
    center,
    size * 0.035,
    225
  );

  const starTopLeft = polarPoint(
    center,
    size * 0.035,
    315
  );

  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      {/* Anneaux extérieurs */}

      <Circle
        cx={center}
        cy={center}
        r={outerRadius}
        stroke={BRIGHT_GOLD}
        strokeWidth={1.1}
        fill="none"
      />

      <Circle
        cx={center}
        cy={center}
        r={secondRadius}
        stroke={SOFT_GOLD}
        strokeWidth={0.55}
        fill="none"
      />

      <Circle
        cx={center}
        cy={center}
        r={zodiacOuterRadius}
        stroke={GOLD}
        strokeWidth={0.72}
        fill="none"
      />

      <Circle
        cx={center}
        cy={center}
        r={zodiacInnerRadius}
        stroke={GOLD}
        strokeWidth={0.72}
        fill="none"
      />

      {/* Graduations */}

      {degreeTicks}

      <Circle
        cx={center}
        cy={center}
        r={degreeInnerRadius}
        stroke={SOFT_GOLD}
        strokeWidth={0.52}
        fill="none"
      />

      {/* Signes et secteurs zodiacaux */}

      {zodiacDivisions}
      {zodiacNames}

      {/* Maisons */}

      <Circle
        cx={center}
        cy={center}
        r={houseRadius}
        stroke={SOFT_GOLD}
        strokeWidth={0.6}
        fill="none"
      />

      {houseDivisions}
      {houseNumbers}

      {/* Axes principaux */}

      <Line
        x1={center}
        y1={center - degreeInnerRadius}
        x2={center}
        y2={center + degreeInnerRadius}
        stroke={BRIGHT_GOLD}
        strokeWidth={1}
      />

      <Line
        x1={center - degreeInnerRadius}
        y1={center}
        x2={center + degreeInnerRadius}
        y2={center}
        stroke={BRIGHT_GOLD}
        strokeWidth={1}
      />

      {/* Lettres des angles */}

      <Text
        x={center}
        y={center - degreeInnerRadius - 10}
        fill={BRIGHT_GOLD}
        fontSize={size * 0.021}
        textAnchor="middle"
      >
        MC
      </Text>

      <Text
        x={center}
        y={center + degreeInnerRadius + 18}
        fill={BRIGHT_GOLD}
        fontSize={size * 0.021}
        textAnchor="middle"
      >
        IC
      </Text>

      <Text
        x={center - degreeInnerRadius - 22}
        y={center + 4}
        fill={BRIGHT_GOLD}
        fontSize={size * 0.021}
        textAnchor="middle"
      >
        ASC
      </Text>

      <Text
        x={center + degreeInnerRadius + 22}
        y={center + 4}
        fill={BRIGHT_GOLD}
        fontSize={size * 0.021}
        textAnchor="middle"
      >
        DSC
      </Text>

      {/* Aspects décoratifs */}

      <Line
        x1={aspectPoint1.x}
        y1={aspectPoint1.y}
        x2={aspectPoint3.x}
        y2={aspectPoint3.y}
        stroke={GOLD}
        strokeWidth={0.7}
      />

      <Line
        x1={aspectPoint3.x}
        y1={aspectPoint3.y}
        x2={aspectPoint5.x}
        y2={aspectPoint5.y}
        stroke={GOLD}
        strokeWidth={0.7}
      />

      <Line
        x1={aspectPoint5.x}
        y1={aspectPoint5.y}
        x2={aspectPoint2.x}
        y2={aspectPoint2.y}
        stroke={GOLD}
        strokeWidth={0.7}
      />

      <Line
        x1={aspectPoint2.x}
        y1={aspectPoint2.y}
        x2={aspectPoint4.x}
        y2={aspectPoint4.y}
        stroke={SOFT_GOLD}
        strokeWidth={0.62}
      />

      <Line
        x1={aspectPoint4.x}
        y1={aspectPoint4.y}
        x2={aspectPoint1.x}
        y2={aspectPoint1.y}
        stroke={SOFT_GOLD}
        strokeWidth={0.62}
      />

      <Line
        x1={aspectPoint1.x}
        y1={aspectPoint1.y}
        x2={aspectPoint2.x}
        y2={aspectPoint2.y}
        stroke={DARK_GOLD}
        strokeWidth={0.5}
      />

      <Line
        x1={aspectPoint3.x}
        y1={aspectPoint3.y}
        x2={aspectPoint4.x}
        y2={aspectPoint4.y}
        stroke={DARK_GOLD}
        strokeWidth={0.5}
      />

      {/* Points des aspects */}

      <Circle
        cx={aspectPoint1.x}
        cy={aspectPoint1.y}
        r={2}
        fill={BRIGHT_GOLD}
      />

      <Circle
        cx={aspectPoint2.x}
        cy={aspectPoint2.y}
        r={1.7}
        fill={BRIGHT_GOLD}
      />

      <Circle
        cx={aspectPoint3.x}
        cy={aspectPoint3.y}
        r={1.9}
        fill={BRIGHT_GOLD}
      />

      <Circle
        cx={aspectPoint4.x}
        cy={aspectPoint4.y}
        r={1.6}
        fill={BRIGHT_GOLD}
      />

      <Circle
        cx={aspectPoint5.x}
        cy={aspectPoint5.y}
        r={1.8}
        fill={BRIGHT_GOLD}
      />

      {/* Cercle central */}

      <Circle
        cx={center}
        cy={center}
        r={centralRadius}
        stroke={GOLD}
        strokeWidth={0.65}
        fill="none"
      />

      <Circle
        cx={center}
        cy={center}
        r={size * 0.022}
        stroke={BRIGHT_GOLD}
        strokeWidth={0.7}
        fill="none"
      />

      {/* Rose céleste centrale */}

      <Line
        x1={starTop.x}
        y1={starTop.y}
        x2={starBottom.x}
        y2={starBottom.y}
        stroke={BRIGHT_GOLD}
        strokeWidth={1}
      />

      <Line
        x1={starLeft.x}
        y1={starLeft.y}
        x2={starRight.x}
        y2={starRight.y}
        stroke={BRIGHT_GOLD}
        strokeWidth={1}
      />

      <Line
        x1={starTopLeft.x}
        y1={starTopLeft.y}
        x2={starBottomRight.x}
        y2={starBottomRight.y}
        stroke={GOLD}
        strokeWidth={0.7}
      />

      <Line
        x1={starTopRight.x}
        y1={starTopRight.y}
        x2={starBottomLeft.x}
        y2={starBottomLeft.y}
        stroke={GOLD}
        strokeWidth={0.7}
      />

      <Circle
        cx={center}
        cy={center}
        r={2.2}
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
}: EssentialPdfProps) {
  return (
    <Page size="A4" style={styles.page}>
      {/* Éléments fixes de fond */}

      <View style={styles.topAccent} fixed />

      <View style={styles.outerBorder} fixed />

      <View style={styles.innerBorder} fixed />

      <View style={styles.backgroundWheel} fixed>
        <CoverAstrologicalWheel size={690} />
      </View>

      <View style={styles.wheelGlow} fixed />

      {/* Contenu principal */}

      <View style={styles.content}>
        <View style={styles.header} wrap={false}>
          <Image
            src={LOGO_URL}
            style={styles.logo}
          />

          <View style={styles.brandDivider} />
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
            essentielle
          </Text>

          <Text style={styles.subtitle}>
            Une première lecture claire et personnelle des grandes
            forces qui composent votre thème natal.
          </Text>
        </View>

        <View
          style={styles.identityCard}
          wrap={false}
        >
          <View
            style={styles.identityAccentLeft}
          />

          <View
            style={styles.identityAccentRight}
          />

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

        <View
          style={styles.quoteSection}
          wrap={false}
        >
          <Text style={styles.quote}>
            Chaque naissance possède une signature céleste unique.
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

        <View
          style={styles.introCard}
          wrap={false}
        >
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

              <Image
                src="/astrology/moon.png"
                style={styles.dividerMoon}
              />

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
