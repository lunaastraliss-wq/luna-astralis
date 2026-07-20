import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  HOROSCOPE_LOGO_URL,
} from "./HoroscopePdfAssets";

import HoroscopePageFooter from "./HoroscopePageFooter";
import HoroscopeStarBackground from "./HoroscopeStarBackground";

import type {
  HoroscopeSectionProps,
} from "./HoroscopePdfTypes";

import {
  formatHoroscopePeriodLabel,
  getHoroscopeZodiacIconUrl,
} from "./HoroscopePdfUtils";

const NAVY_CARD = "#0A1729";
const NAVY_CARD_LIGHT = "#0D1B30";

const GOLD = "#F4C95D";
const CREAM = "#FFF8E7";
const MUTED_CREAM = "#DDD5C6";
const SOFT_TEXT = "#B9AE98";
const DARK_GOLD = "#8F6E35";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 40,
    paddingHorizontal: 44,
    paddingBottom: 58,
    backgroundColor: "#06101F",
    fontFamily: "Helvetica",
  },

  content: {
    position: "relative",
    zIndex: 2,
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 27,
  },

  logo: {
    width: 110,
    height: 40,
    objectFit: "contain",
  },

  signBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 11,
    borderRadius: 18,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  signIcon: {
    width: 22,
    height: 22,
    objectFit: "contain",
    marginRight: 7,
  },

  signName: {
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  eyebrow: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 2.4,
    textTransform: "uppercase",
    marginBottom: 10,
  },

  title: {
    color: CREAM,
    fontSize: 26,
    lineHeight: 1.2,
    marginBottom: 8,
  },

  period: {
    color: MUTED_CREAM,
    fontSize: 10,
    marginBottom: 22,
  },

  conclusionCard: {
    paddingVertical: 24,
    paddingHorizontal: 23,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 18,
  },

  conclusionTitle: {
    color: GOLD,
    fontSize: 13,
    lineHeight: 1.35,
    marginBottom: 13,
  },

  conclusionText: {
    color: CREAM,
    fontSize: 10,
    lineHeight: 1.75,
    textAlign: "justify",
  },

  messageCard: {
    paddingVertical: 20,
    paddingHorizontal: 22,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    marginBottom: 18,
  },

  messageLabel: {
    color: GOLD,
    fontSize: 7.5,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    marginBottom: 9,
  },

  messageText: {
    color: MUTED_CREAM,
    fontSize: 9.5,
    lineHeight: 1.65,
  },

  freeWillCard: {
    paddingVertical: 17,
    paddingHorizontal: 19,
    borderRadius: 9,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 18,
  },

  freeWillTitle: {
    color: GOLD,
    fontSize: 10,
    marginBottom: 8,
  },

  freeWillText: {
    color: MUTED_CREAM,
    fontSize: 8.7,
    lineHeight: 1.6,
  },

  thanksSection: {
    alignItems: "center",
    paddingTop: 17,
  },

  zodiacIcon: {
    width: 66,
    height: 66,
    objectFit: "contain",
    marginBottom: 14,
  },

  thankYouTitle: {
    color: GOLD,
    fontSize: 16,
    marginBottom: 9,
    textAlign: "center",
  },

  thankYouText: {
    color: CREAM,
    fontSize: 9.5,
    lineHeight: 1.6,
    textAlign: "center",
    maxWidth: 390,
    marginBottom: 17,
  },

  websiteCard: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  websiteText: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 0.8,
  },

  signature: {
    color: SOFT_TEXT,
    fontSize: 8,
    marginTop: 13,
    textAlign: "center",
  },
});

export default function HoroscopeConclusion({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const firstName =
    typeof identity.firstName === "string" &&
    identity.firstName.trim().length > 0
      ? identity.firstName.trim()
      : null;

  const conclusionTitle =
    content.conclusionTitle?.trim() ||
    "Votre chemin pour cette période";

  const conclusionText =
    content.conclusion?.trim() ||
    "Les influences de cette période vous invitent à avancer avec conscience, confiance et discernement. Accueillez les occasions qui vous ressemblent et accordez-vous le droit d’ajuster votre direction lorsque cela devient nécessaire.";

  const finalMessage =
    content.finalMessage?.trim() ||
    "L’astrologie éclaire les tendances, les forces et les défis possibles. Elle ne décide jamais à votre place. Vos choix, votre expérience et votre intuition restent au cœur de votre parcours.";

  return (
    <Page size="A4" style={styles.page}>
      <HoroscopeStarBackground />

      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            src={HOROSCOPE_LOGO_URL}
            style={styles.logo}
          />

          <View style={styles.signBadge}>
            <Image
              src={zodiacIconUrl}
              style={styles.signIcon}
            />

            <Text style={styles.signName}>
              {identity.zodiacSignLabel}
            </Text>
          </View>
        </View>

        <Text style={styles.eyebrow}>
          Conclusion
        </Text>

        <Text style={styles.title}>
          Un dernier regard sur votre période
        </Text>

        <Text style={styles.period}>
          {periodLabel}
        </Text>

        <View style={styles.conclusionCard} wrap={false}>
          <Text style={styles.conclusionTitle}>
            {conclusionTitle}
          </Text>

          <Text style={styles.conclusionText}>
            {conclusionText}
          </Text>
        </View>

        <View style={styles.messageCard} wrap={false}>
          <Text style={styles.messageLabel}>
            Votre message de clôture
          </Text>

          <Text style={styles.messageText}>
            {finalMessage}
          </Text>
        </View>

        <View style={styles.freeWillCard} wrap={false}>
          <Text style={styles.freeWillTitle}>
            Votre libre arbitre reste essentiel
          </Text>

          <Text style={styles.freeWillText}>
            Cet horoscope présente des tendances astrologiques et des
            pistes de réflexion. Il ne constitue pas une prédiction
            certaine et ne remplace pas votre jugement personnel,
            professionnel, médical ou financier. Vous restez libre de
            vos décisions et de la manière dont vous choisissez de
            vivre cette période.
          </Text>
        </View>

        <View style={styles.thanksSection} wrap={false}>
          <Image
            src={zodiacIconUrl}
            style={styles.zodiacIcon}
          />

          <Text style={styles.thankYouTitle}>
            {firstName
              ? `Merci, ${firstName}`
              : "Merci pour votre confiance"}
          </Text>

          <Text style={styles.thankYouText}>
            Merci d’avoir choisi Luna Astralis pour vous accompagner
            dans cette lecture astrologique. Que cette période vous
            apporte plus de clarté, de confiance et d’inspiration.
          </Text>

          <View style={styles.websiteCard}>
            <Text style={styles.websiteText}>
              luna-astralis.app
            </Text>
          </View>

          <Text style={styles.signature}>
            Créé avec soin par Luna Astralis
          </Text>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
