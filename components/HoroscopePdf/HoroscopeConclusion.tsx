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

import type {
  HoroscopeSectionProps,
} from "./HoroscopePdfTypes";

import {
  formatHoroscopePeriodLabel,
  getHoroscopeZodiacIconUrl,
} from "./HoroscopePdfUtils";

const NAVY = "#06101F";
const NAVY_CARD = "#0A1729";
const NAVY_CARD_LIGHT = "#0D1B30";
const NAVY_SOFT = "#101F35";

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
    backgroundColor: NAVY,
    fontFamily: "Helvetica",
  },

  content: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
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
    paddingHorizontal: 12,
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

  titleBlock: {
    marginBottom: 22,
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
    marginBottom: 13,
  },

  titleDecoration: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleLine: {
    width: 64,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  titleIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
    marginRight: 8,
  },

  titleLineSmall: {
    width: 20,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  conclusionCard: {
    paddingVertical: 23,
    paddingHorizontal: 23,
    borderRadius: 14,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 18,
  },

  conclusionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
  },

  conclusionHeaderIconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  conclusionHeaderIcon: {
    width: 22,
    height: 22,
    objectFit: "contain",
  },

  conclusionHeading: {
    flex: 1,
  },

  conclusionMiniLabel: {
    color: SOFT_TEXT,
    fontSize: 7,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  conclusionTitle: {
    color: GOLD,
    fontSize: 13,
    lineHeight: 1.35,
  },

  conclusionDivider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
  },

  conclusionDividerLine: {
    width: 30,
    height: 1,
    backgroundColor: DARK_GOLD,
    marginRight: 7,
  },

  conclusionDividerIcon: {
    width: 11,
    height: 11,
    objectFit: "contain",
  },

  conclusionText: {
    color: CREAM,
    fontSize: 10,
    lineHeight: 1.75,
    textAlign: "justify",
  },

  messageCard: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    marginBottom: 18,
  },

  messageHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  messageIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
    marginRight: 8,
  },

  messageLabel: {
    color: GOLD,
    fontSize: 7.5,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },

  messageText: {
    color: MUTED_CREAM,
    fontSize: 9.5,
    lineHeight: 1.65,
  },

  freeWillCard: {
    paddingVertical: 17,
    paddingHorizontal: 19,
    borderRadius: 12,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 18,
  },

  freeWillHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  freeWillIconBox: {
    width: 27,
    height: 27,
    borderRadius: 13.5,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  freeWillIcon: {
    width: 16,
    height: 16,
    objectFit: "contain",
  },

  freeWillTitle: {
    color: GOLD,
    fontSize: 10,
  },

  freeWillText: {
    color: MUTED_CREAM,
    fontSize: 8.7,
    lineHeight: 1.6,
  },

  thanksSection: {
    alignItems: "center",
    paddingTop: 15,
  },

  thanksDecoration: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  thanksLine: {
    width: 42,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  zodiacIconOuter: {
    width: 78,
    height: 78,
    borderRadius: 39,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 14,
  },

  zodiacIconInner: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 0.9,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  zodiacIcon: {
    width: 48,
    height: 48,
    objectFit: "contain",
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
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
    paddingHorizontal: 22,
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  websiteIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
    marginRight: 8,
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

        <View style={styles.titleBlock}>
          <Text style={styles.eyebrow}>
            Conclusion
          </Text>

          <Text style={styles.title}>
            Un dernier regard sur votre période
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image
              src={zodiacIconUrl}
              style={styles.titleIcon}
            />

            <View style={styles.titleLineSmall} />
          </View>
        </View>

        <View style={styles.conclusionCard} wrap={false}>
          <View style={styles.conclusionHeader}>
            <View style={styles.conclusionHeaderIconBox}>
              <Image
                src={zodiacIconUrl}
                style={styles.conclusionHeaderIcon}
              />
            </View>

            <View style={styles.conclusionHeading}>
              <Text style={styles.conclusionMiniLabel}>
                Synthèse astrologique
              </Text>

              <Text style={styles.conclusionTitle}>
                {conclusionTitle}
              </Text>
            </View>
          </View>

          <View style={styles.conclusionDivider}>
            <View style={styles.conclusionDividerLine} />

            <Image
              src={zodiacIconUrl}
              style={styles.conclusionDividerIcon}
            />
          </View>

          <Text style={styles.conclusionText}>
            {conclusionText}
          </Text>
        </View>

        <View style={styles.messageCard} wrap={false}>
          <View style={styles.messageHeader}>
            <Image
              src={zodiacIconUrl}
              style={styles.messageIcon}
            />

            <Text style={styles.messageLabel}>
              Votre message de clôture
            </Text>
          </View>

          <Text style={styles.messageText}>
            {finalMessage}
          </Text>
        </View>

        <View style={styles.freeWillCard} wrap={false}>
          <View style={styles.freeWillHeader}>
            <View style={styles.freeWillIconBox}>
              <Image
                src={zodiacIconUrl}
                style={styles.freeWillIcon}
              />
            </View>

            <Text style={styles.freeWillTitle}>
              Votre libre arbitre reste essentiel
            </Text>
          </View>

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
          <View style={styles.thanksDecoration}>
            <View style={styles.thanksLine} />

            <View style={styles.zodiacIconOuter}>
              <View style={styles.zodiacIconInner}>
                <Image
                  src={zodiacIconUrl}
                  style={styles.zodiacIcon}
                />
              </View>
            </View>

            <View style={styles.thanksLine} />
          </View>

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
            <Image
              src={zodiacIconUrl}
              style={styles.websiteIcon}
            />

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
