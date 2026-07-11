import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  ASCENDANT_ICON,
  PLANET_ICONS,
} from "./EssentialPdfAssets";

import { pdfStyles } from "./EssentialPdfStyles";
import type { SummaryProps } from "./EssentialPdfTypes";

import {
  getAscendantSign,
  getPlanet,
  getPlanetSignName,
  signFr,
  translateSigns,
} from "./EssentialPdfUtils";

import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 17,
  },

  kicker: {
    color: "#f4c95d",
    fontSize: 8.5,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  title: {
    color: "#fff8e7",
    fontSize: 25,
    lineHeight: 1.15,
    textAlign: "center",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 9,
  },

  dividerLine: {
    width: 50,
    height: 1,
    backgroundColor: "#8f793c",
  },

  dividerIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginHorizontal: 10,
  },

  lead: {
    maxWidth: 410,
    color: "#c9c5bb",
    fontSize: 9.4,
    lineHeight: 1.45,
    textAlign: "center",
  },

  cardsRow: {
    flexDirection: "row",
    marginBottom: 13,
  },

  card: {
    flexGrow: 1,
    flexBasis: 0,
    minHeight: 172,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  cardSpacing: {
    marginRight: 8,
  },

  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "#0b1124",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  icon: {
    width: 29,
    height: 29,
    objectFit: "contain",
  },

  cardLabel: {
    color: "#9da4b7",
    fontSize: 7.7,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 5,
    textAlign: "center",
  },

  cardValue: {
    color: "#f4c95d",
    fontSize: 15,
    lineHeight: 1.2,
    marginBottom: 8,
    textAlign: "center",
  },

  cardDivider: {
    width: 32,
    height: 1,
    backgroundColor: "#8f793c",
    marginBottom: 8,
  },

  cardMeaning: {
    color: "#fff8e7",
    fontSize: 9.5,
    lineHeight: 1.3,
    marginBottom: 6,
    textAlign: "center",
  },

  cardDescription: {
    color: "#bfc5d5",
    fontSize: 8.1,
    lineHeight: 1.4,
    textAlign: "center",
  },

  synthesis: {
    position: "relative",
    flexDirection: "row",
    paddingVertical: 13,
    paddingHorizontal: 17,
    marginBottom: 9,
    overflow: "hidden",
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  synthesisIconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    backgroundColor: "#0b1124",
    borderWidth: 1,
    borderColor: "#f4c95d",
  },

  synthesisIcon: {
    width: 26,
    height: 26,
    objectFit: "contain",
  },

  synthesisWatermark: {
    position: "absolute",
    right: 12,
    top: 7,
    width: 82,
    height: 82,
    objectFit: "contain",
    opacity: 0.035,
  },

  synthesisContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  synthesisKicker: {
    color: "#f4c95d",
    fontSize: 7.8,
    letterSpacing: 1.25,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  synthesisTitle: {
    color: "#fff8e7",
    fontSize: 13,
    lineHeight: 1.3,
    marginBottom: 8,
  },

  synthesisText: {
    color: "#d8d4ca",
    fontSize: 8.8,
    lineHeight: 1.48,
    marginBottom: 7,
  },

  synthesisTextLast: {
    color: "#bfc5d5",
    fontSize: 8.8,
    lineHeight: 1.48,
  },

  insightRow: {
    flexDirection: "row",
    marginBottom: 8,
  },

  insightBox: {
    flexGrow: 1,
    flexBasis: 0,
    minHeight: 84,
    paddingVertical: 9,
    paddingHorizontal: 13,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  insightBoxLeft: {
    marginRight: 8,
  },

  insightHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  insightIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginRight: 8,
  },

  insightTitle: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#f4c95d",
    fontSize: 8.3,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },

  insightText: {
    color: "#bfc5d5",
    fontSize: 8.2,
    lineHeight: 1.42,
  },

  note: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 13,
    marginBottom: 24,
    backgroundColor: "#141b32",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  noteIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginRight: 10,
  },

  noteText: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#bfc5d5",
    fontSize: 7.9,
    lineHeight: 1.32,
  },
});

function safeSign(value: string): string {
  const translated = signFr(value);

  return translated &&
    translated.trim().length > 0
    ? translated
    : "Non précisé";
}

function safeAscendant(value: string): string {
  const translated = translateSigns(value);

  return translated &&
    translated.trim().length > 0
    ? translated
    : "Non précisé";
}

export default function PdfSummary({
  planets,
  angles,
}: SummaryProps) {
  const safePlanets = Array.isArray(planets)
    ? planets
    : [];

  const sun = getPlanet(
    safePlanets,
    "Sun"
  );

  const moon = getPlanet(
    safePlanets,
    "Moon"
  );

  const sunSign = safeSign(
    getPlanetSignName(sun)
  );

  const moonSign = safeSign(
    getPlanetSignName(moon)
  );

  const ascendantSign = safeAscendant(
    getAscendantSign(angles)
  );

  const sunIcon = PLANET_ICONS.Sun;
  const moonIcon = PLANET_ICONS.Moon;

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.header}>
        <Text style={styles.kicker}>
          Portrait astrologique
        </Text>

        <Text style={styles.title}>
          Vos trois grands piliers
        </Text>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />

          <Image
            src={sunIcon}
            style={styles.dividerIcon}
          />

          <View style={styles.dividerLine} />
        </View>

        <Text style={styles.lead}>
          Trois énergies fondamentales qui dessinent
          ensemble les grandes lignes de votre personnalité.
        </Text>
      </View>

      <View style={styles.cardsRow}>
        <View
          style={[
            styles.card,
            styles.cardSpacing,
          ]}
        >
          <View style={styles.iconCircle}>
            <Image
              src={sunIcon}
              style={styles.icon}
            />
          </View>

          <Text style={styles.cardLabel}>
            Votre Soleil
          </Text>

          <Text style={styles.cardValue}>
            {sunSign}
          </Text>

          <View style={styles.cardDivider} />

          <Text style={styles.cardMeaning}>
            Votre identité profonde
          </Text>

          <Text style={styles.cardDescription}>
            Ce qui vous anime, vous guide et cherche
            naturellement à s’accomplir en vous.
          </Text>
        </View>

        <View
          style={[
            styles.card,
            styles.cardSpacing,
          ]}
        >
          <View style={styles.iconCircle}>
            <Image
              src={moonIcon}
              style={styles.icon}
            />
          </View>

          <Text style={styles.cardLabel}>
            Votre Lune
          </Text>

          <Text style={styles.cardValue}>
            {moonSign}
          </Text>

          <View style={styles.cardDivider} />

          <Text style={styles.cardMeaning}>
            Votre monde émotionnel
          </Text>

          <Text style={styles.cardDescription}>
            Vos besoins affectifs, votre sensibilité et
            votre manière de retrouver un sentiment de sécurité.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <Image
              src={ASCENDANT_ICON}
              style={styles.icon}
            />
          </View>

          <Text style={styles.cardLabel}>
            Votre Ascendant
          </Text>

          <Text style={styles.cardValue}>
            {ascendantSign}
          </Text>

          <View style={styles.cardDivider} />

          <Text style={styles.cardMeaning}>
            Votre présence spontanée
          </Text>

          <Text style={styles.cardDescription}>
            Votre première impulsion face à la vie et
            l’énergie que les autres perçoivent d’abord.
          </Text>
        </View>
      </View>

      <View style={styles.synthesis}>
        <View style={styles.synthesisIconCircle}>
          <Image
            src={ASCENDANT_ICON}
            style={styles.synthesisIcon}
          />
        </View>

        <Image
          src={ASCENDANT_ICON}
          style={styles.synthesisWatermark}
        />

        <View style={styles.synthesisContent}>
          <Text style={styles.synthesisKicker}>
            La rencontre de vos trois énergies
          </Text>

          <Text style={styles.synthesisTitle}>
            Soleil en {sunSign}, Lune en {moonSign} et
            Ascendant {ascendantSign}
          </Text>

          <Text style={styles.synthesisText}>
            Le Soleil représente la personne que vous cherchez
            pleinement à devenir. La Lune révèle ce dont vous avez
            besoin pour vous sentir intérieurement en sécurité.
            L’Ascendant décrit votre manière instinctive d’aborder
            le monde et de commencer chaque nouvelle expérience.
          </Text>

          <Text style={styles.synthesisTextLast}>
            L’équilibre entre ces trois énergies constitue la
            signature centrale de votre personnalité. Certaines
            se soutiennent naturellement, tandis que d’autres
            expriment des besoins différents. Cette diversité
            révèle la richesse de votre thème natal.
          </Text>
        </View>
      </View>

      <View style={styles.insightRow}>
        <View
          style={[
            styles.insightBox,
            styles.insightBoxLeft,
          ]}
        >
          <View style={styles.insightHeader}>
            <Image
              src={sunIcon}
              style={styles.insightIcon}
            />

            <Text style={styles.insightTitle}>
              Votre direction intérieure
            </Text>
          </View>

          <Text style={styles.insightText}>
            Votre Soleil indique ce que vous cherchez à
            construire et à exprimer avec davantage de
            confiance au fil de votre évolution.
          </Text>
        </View>

        <View style={styles.insightBox}>
          <View style={styles.insightHeader}>
            <Image
              src={moonIcon}
              style={styles.insightIcon}
            />

            <Text style={styles.insightTitle}>
              Votre clé d’équilibre
            </Text>
          </View>

          <Text style={styles.insightText}>
            Écouter vos besoins émotionnels tout en assumant
            votre identité permet à votre Ascendant de devenir
            une expression plus juste de qui vous êtes.
          </Text>
        </View>
      </View>

      <View style={styles.note}>
        <Image
          src={moonIcon}
          style={styles.noteIcon}
        />

        <Text style={styles.noteText}>
          Les prochaines pages approfondissent chacune de vos
          planètes afin de révéler les nuances uniques de votre
          carte du ciel.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
    }
