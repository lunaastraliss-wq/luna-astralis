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
  getHoroscopeFirstName,
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
    position: "relative",
    zIndex: 2,
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
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
    marginBottom: 18,
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
    fontSize: 25,
    lineHeight: 1.16,
    marginBottom: 11,
    maxWidth: 430,
  },

  intro: {
    color: MUTED_CREAM,
    fontSize: 10.2,
    lineHeight: 1.58,
    marginBottom: 13,
    maxWidth: 470,
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

  mainCard: {
    paddingVertical: 19,
    paddingHorizontal: 20,
    borderRadius: 14,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 14,
  },

  mainHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 11,
  },

  mainIconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  mainIcon: {
    width: 23,
    height: 23,
    objectFit: "contain",
  },

  mainHeading: {
    flex: 1,
  },

  cardLabel: {
    color: SOFT_TEXT,
    fontSize: 6.8,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  cardTitle: {
    color: GOLD,
    fontSize: 12.5,
    lineHeight: 1.3,
  },

  mainDivider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 11,
  },

  dividerLine: {
    width: 32,
    height: 1,
    backgroundColor: DARK_GOLD,
    marginRight: 7,
  },

  dividerIcon: {
    width: 11,
    height: 11,
    objectFit: "contain",
  },

  welcomeText: {
    color: CREAM,
    fontSize: 9.7,
    lineHeight: 1.64,
    textAlign: "justify",
  },

  quoteCard: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    marginBottom: 14,
  },

  quoteHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  quoteLine: {
    width: 24,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  quoteIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
    marginHorizontal: 8,
  },

  quote: {
    color: CREAM,
    fontSize: 10.5,
    lineHeight: 1.5,
    fontStyle: "italic",
    textAlign: "center",
  },

  detailsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  detailsHeaderLine: {
    width: 24,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  detailsHeaderIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
    marginRight: 8,
  },

  detailsHeaderTitle: {
    color: GOLD,
    fontSize: 9.6,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },

  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 13,
  },

  detailCard: {
    width: "31.5%",
    minHeight: 85,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  detailIconBox: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  detailIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
  },

  detailLabel: {
    color: SOFT_TEXT,
    fontSize: 6.7,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  detailValue: {
    color: CREAM,
    fontSize: 8.8,
    lineHeight: 1.35,
  },

  guidanceCard: {
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 10,
  },

  guidanceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  guidanceIconBox: {
    width: 29,
    height: 29,
    borderRadius: 14.5,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  guidanceIcon: {
    width: 17,
    height: 17,
    objectFit: "contain",
  },

  guidanceHeading: {
    flex: 1,
  },

  guidanceLabel: {
    color: SOFT_TEXT,
    fontSize: 6.7,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  guidanceTitle: {
    color: GOLD,
    fontSize: 9.8,
    lineHeight: 1.3,
  },

  guidanceText: {
    color: MUTED_CREAM,
    fontSize: 8,
    lineHeight: 1.45,
  },

  bottomCard: {
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    borderTopWidth: 1.4,
    borderTopColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  bottomIconBox: {
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

  bottomIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
  },

  bottomText: {
    flex: 1,
    color: MUTED_CREAM,
    fontSize: 7.9,
    lineHeight: 1.45,
  },
});

export default function HoroscopeWelcome({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const firstName = getHoroscopeFirstName(identity.firstName);
  const periodLabel = formatHoroscopePeriodLabel(period);
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const welcomeIntroduction =
    identity.firstName
      ? `${firstName}, ce rapport a été préparé pour vous accompagner durant cette période et vous aider à mieux comprendre les énergies qui vous entourent.`
      : "Ce rapport a été préparé pour vous accompagner durant cette période et vous aider à mieux comprendre les énergies qui vous entourent.";

  const welcomeText =
    content.welcomeText ||
    "Votre horoscope personnalisé vous présente les grandes tendances de cette période. Chaque section vous aidera à reconnaître les énergies les plus présentes, à mieux comprendre vos ressentis et à avancer avec davantage de clarté.";

  const openingQuote =
    content.openingQuote ||
    "Les astres éclairent le chemin, mais votre volonté choisit la direction.";

  const reportTitle =
    content.reportTitle || "Horoscope personnalisé";

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

        <View style={styles.titleBlock}>
          <Text style={styles.eyebrow}>
            Votre horoscope personnalisé
          </Text>

          <Text style={styles.title}>
            Bienvenue dans votre{"\n"}guidance astrologique
          </Text>

          <Text style={styles.intro}>
            {welcomeIntroduction}
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

        <View style={styles.mainCard} wrap={false}>
          <View style={styles.mainHeader}>
            <View style={styles.mainIconBox}>
              <Image
                src={zodiacIconUrl}
                style={styles.mainIcon}
              />
            </View>

            <View style={styles.mainHeading}>
              <Text style={styles.cardLabel}>
                Votre message d’introduction
              </Text>

              <Text style={styles.cardTitle}>
                Une guidance pensée pour votre période
              </Text>
            </View>
          </View>

          <View style={styles.mainDivider}>
            <View style={styles.dividerLine} />

            <Image
              src={zodiacIconUrl}
              style={styles.dividerIcon}
            />
          </View>

          <Text style={styles.welcomeText}>
            {welcomeText}
          </Text>
        </View>

        <View style={styles.quoteCard} wrap={false}>
          <View style={styles.quoteHeader}>
            <View style={styles.quoteLine} />

            <Image
              src={zodiacIconUrl}
              style={styles.quoteIcon}
            />

            <View style={styles.quoteLine} />
          </View>

          <Text style={styles.quote}>
            « {openingQuote} »
          </Text>
        </View>

        <View style={styles.detailsHeader}>
          <View style={styles.detailsHeaderLine} />

          <Image
            src={zodiacIconUrl}
            style={styles.detailsHeaderIcon}
          />

          <Text style={styles.detailsHeaderTitle}>
            Votre rapport
          </Text>
        </View>

        <View style={styles.detailsRow} wrap={false}>
          <View style={styles.detailCard}>
            <View style={styles.detailIconBox}>
              <Image
                src={zodiacIconUrl}
                style={styles.detailIcon}
              />
            </View>

            <Text style={styles.detailLabel}>
              Signe astrologique
            </Text>

            <Text style={styles.detailValue}>
              {identity.zodiacSignLabel}
            </Text>
          </View>

          <View style={styles.detailCard}>
            <View style={styles.detailIconBox}>
              <Image
                src={zodiacIconUrl}
                style={styles.detailIcon}
              />
            </View>

            <Text style={styles.detailLabel}>
              Période analysée
            </Text>

            <Text style={styles.detailValue}>
              {periodLabel}
            </Text>
          </View>

          <View style={styles.detailCard}>
            <View style={styles.detailIconBox}>
              <Image
                src={zodiacIconUrl}
                style={styles.detailIcon}
              />
            </View>

            <Text style={styles.detailLabel}>
              Rapport
            </Text>

            <Text style={styles.detailValue}>
              {reportTitle}
            </Text>
          </View>
        </View>

        <View style={styles.guidanceCard} wrap={false}>
          <View style={styles.guidanceHeader}>
            <View style={styles.guidanceIconBox}>
              <Image
                src={zodiacIconUrl}
                style={styles.guidanceIcon}
              />
            </View>

            <View style={styles.guidanceHeading}>
              <Text style={styles.guidanceLabel}>
                Comment lire votre horoscope
              </Text>

              <Text style={styles.guidanceTitle}>
                Une boussole, jamais une obligation
              </Text>
            </View>
          </View>

          <Text style={styles.guidanceText}>
            Les tendances décrites dans ce rapport vous invitent
            à observer, réfléchir et choisir. Elles ne remplacent
            jamais votre intuition, votre jugement ni votre libre arbitre.
          </Text>
        </View>

        <View style={styles.bottomCard} wrap={false}>
          <View style={styles.bottomRow}>
            <View style={styles.bottomIconBox}>
              <Image
                src={zodiacIconUrl}
                style={styles.bottomIcon}
              />
            </View>

            <Text style={styles.bottomText}>
              Prenez le temps de lire chaque section avec attention.
              Votre horoscope met en lumière des tendances et des
              possibilités, tout en vous laissant libre de vos décisions.
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
