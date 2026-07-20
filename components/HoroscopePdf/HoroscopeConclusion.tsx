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
    fontSize: 26,
    lineHeight: 1.18,
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

  heroCard: {
    position: "relative",
    paddingVertical: 21,
    paddingHorizontal: 21,
    borderRadius: 14,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 14,
    overflow: "hidden",
  },

  heroAccent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 4,
    height: "100%",
    backgroundColor: GOLD,
  },

  heroHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  heroIconOuter: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  heroIconInner: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  heroIcon: {
    width: 24,
    height: 24,
    objectFit: "contain",
  },

  heroHeading: {
    flex: 1,
  },

  heroLabel: {
    color: SOFT_TEXT,
    fontSize: 6.8,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  heroTitle: {
    color: GOLD,
    fontSize: 13,
    lineHeight: 1.35,
  },

  heroDivider: {
    width: 42,
    height: 1,
    backgroundColor: DARK_GOLD,
    marginBottom: 11,
  },

  heroText: {
    color: CREAM,
    fontSize: 9.7,
    lineHeight: 1.62,
    textAlign: "justify",
  },

  twoColumnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  insightCard: {
    width: "48.5%",
    minHeight: 122,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  insightHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  insightIconBox: {
    width: 29,
    height: 29,
    borderRadius: 14.5,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  insightIcon: {
    width: 16,
    height: 16,
    objectFit: "contain",
  },

  insightTitle: {
    flex: 1,
    color: GOLD,
    fontSize: 9.5,
    lineHeight: 1.3,
  },

  insightText: {
    color: MUTED_CREAM,
    fontSize: 7.9,
    lineHeight: 1.48,
  },

  finalMessageCard: {
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderTopWidth: 1.4,
    borderTopColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 14,
  },

  finalMessageHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  finalMessageIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
    marginRight: 8,
  },

  finalMessageLabel: {
    color: GOLD,
    fontSize: 7.5,
    letterSpacing: 1.3,
    textTransform: "uppercase",
  },

  finalMessageText: {
    color: CREAM,
    fontSize: 9,
    lineHeight: 1.55,
  },

  thanksCard: {
    flex: 1,
    minHeight: 230,
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 14,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  thanksDecoration: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  thanksLine: {
    width: 48,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  zodiacIconOuter: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 14,
  },

  zodiacIconInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 0.9,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
  },

  zodiacIcon: {
    width: 44,
    height: 44,
    objectFit: "contain",
  },

  thankYouTitle: {
    color: GOLD,
    fontSize: 17,
    marginBottom: 8,
    textAlign: "center",
  },

  thankYouSubtitle: {
    color: CREAM,
    fontSize: 10,
    lineHeight: 1.5,
    textAlign: "center",
    maxWidth: 390,
    marginBottom: 13,
  },

  thankYouText: {
    color: MUTED_CREAM,
    fontSize: 8.2,
    lineHeight: 1.48,
    textAlign: "center",
    maxWidth: 410,
    marginBottom: 16,
  },

  websiteCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 21,
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 10,
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
    fontSize: 7.8,
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
    <Page size="A4" style={styles.page} wrap={false}>
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

        <View style={styles.heroCard} wrap={false}>
          <View style={styles.heroAccent} />

          <View style={styles.heroHeader}>
            <View style={styles.heroIconOuter}>
              <View style={styles.heroIconInner}>
                <Image
                  src={zodiacIconUrl}
                  style={styles.heroIcon}
                />
              </View>
            </View>

            <View style={styles.heroHeading}>
              <Text style={styles.heroLabel}>
                Synthèse astrologique
              </Text>

              <Text style={styles.heroTitle}>
                {conclusionTitle}
              </Text>
            </View>
          </View>

          <View style={styles.heroDivider} />

          <Text style={styles.heroText}>
            {conclusionText}
          </Text>
        </View>

        <View style={styles.twoColumnRow}>
          <View style={styles.insightCard} wrap={false}>
            <View style={styles.insightHeader}>
              <View style={styles.insightIconBox}>
                <Image
                  src={zodiacIconUrl}
                  style={styles.insightIcon}
                />
              </View>

              <Text style={styles.insightTitle}>
                Ce que les astres révèlent
              </Text>
            </View>

            <Text style={styles.insightText}>
              Cette lecture met en lumière les tendances,
              les forces et les ajustements possibles de votre période.
              Elle vous aide à mieux comprendre ce qui se joue autour de vous.
            </Text>
          </View>

          <View style={styles.insightCard} wrap={false}>
            <View style={styles.insightHeader}>
              <View style={styles.insightIconBox}>
                <Image
                  src={zodiacIconUrl}
                  style={styles.insightIcon}
                />
              </View>

              <Text style={styles.insightTitle}>
                Ce qui vous appartient
              </Text>
            </View>

            <Text style={styles.insightText}>
              Vos décisions, votre intuition et votre expérience
              restent au centre de votre parcours. Vous demeurez libre
              de choisir la direction qui vous ressemble.
            </Text>
          </View>
        </View>

        <View style={styles.finalMessageCard} wrap={false}>
          <View style={styles.finalMessageHeader}>
            <Image
              src={zodiacIconUrl}
              style={styles.finalMessageIcon}
            />

            <Text style={styles.finalMessageLabel}>
              Votre message de clôture
            </Text>
          </View>

          <Text style={styles.finalMessageText}>
            {finalMessage}
          </Text>
        </View>

        <View style={styles.thanksCard} wrap={false}>
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

          <Text style={styles.thankYouSubtitle}>
            Que cette lecture vous apporte plus de clarté,
            de confiance et d’inspiration.
          </Text>

          <Text style={styles.thankYouText}>
            Merci d’avoir choisi Luna Astralis pour vous accompagner
            dans cette lecture astrologique. Gardez ce rapport près de vous
            et revenez-y lorsque vous aurez besoin de retrouver votre direction.
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
