import { Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import {
  HOROSCOPE_ICONS,
  HOROSCOPE_LOGO_URL,
} from "./HoroscopePdfAssets";

import HoroscopePageFooter from "./HoroscopePageFooter";
import HoroscopeStarBackground from "./HoroscopeStarBackground";

import type { HoroscopeSectionProps } from "./HoroscopePdfTypes";

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
const DEEP_GOLD = "#4E412D";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 33,
    paddingHorizontal: 42,
    paddingBottom: 53,
    backgroundColor: NAVY,
    fontFamily: "Helvetica",
    overflow: "hidden",
  },

  content: {
    position: "relative",
    zIndex: 2,
    flex: 1,
  },

  backgroundOrbitOne: {
    position: "absolute",
    right: -118,
    top: 122,
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 0.45,
    borderColor: DEEP_GOLD,
    zIndex: 0,
  },

  backgroundOrbitTwo: {
    position: "absolute",
    left: -92,
    bottom: 55,
    width: 205,
    height: 205,
    borderRadius: 102.5,
    borderWidth: 0.4,
    borderColor: DEEP_GOLD,
    zIndex: 0,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
  },

  logo: {
    width: 108,
    height: 38,
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
    marginBottom: 11,
  },

  eyebrow: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 2.35,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  title: {
    color: CREAM,
    fontSize: 24,
    lineHeight: 1.18,
    marginBottom: 7,
  },

  intro: {
    color: MUTED_CREAM,
    fontSize: 9.5,
    lineHeight: 1.5,
    marginBottom: 8,
    maxWidth: 465,
  },

  titleDecoration: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleLine: {
    width: 60,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 9,
  },

  titleIcon: {
    width: 17,
    height: 17,
    objectFit: "contain",
    marginRight: 9,
  },

  titleLineSmall: {
    width: 22,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  heroCard: {
    position: "relative",
    minHeight: 150,
    paddingVertical: 17,
    paddingHorizontal: 18,
    marginBottom: 11,
    borderRadius: 14,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2.2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  heroOrbitOne: {
    position: "absolute",
    top: -58,
    right: -48,
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  heroOrbitTwo: {
    position: "absolute",
    top: -25,
    right: -16,
    width: 105,
    height: 105,
    borderRadius: 52.5,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
  },

  heroWatermark: {
    position: "absolute",
    right: 18,
    bottom: 5,
    width: 86,
    height: 86,
    objectFit: "contain",
    opacity: 0.1,
  },

  heroHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  heroIconOuter: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  heroIconInner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
  },

  heroIcon: {
    width: 31,
    height: 31,
    objectFit: "contain",
  },

  heroHeading: {
    flex: 1,
    paddingRight: 55,
  },

  heroLabel: {
    color: SOFT_TEXT,
    fontSize: 6.8,
    letterSpacing: 1.25,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  heroTitle: {
    color: GOLD,
    fontSize: 13.2,
    lineHeight: 1.3,
  },

  heroDivider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  heroDividerLine: {
    width: 36,
    height: 1,
    backgroundColor: DARK_GOLD,
    marginRight: 8,
  },

  heroDividerIcon: {
    width: 12,
    height: 12,
    objectFit: "contain",
  },

  heroText: {
    color: CREAM,
    fontSize: 9.3,
    lineHeight: 1.58,
    textAlign: "justify",
    paddingRight: 8,
  },

  quoteCard: {
    position: "relative",
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 11,
    borderRadius: 11,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    overflow: "hidden",
  },

  quoteIcon: {
    position: "absolute",
    left: 14,
    top: 11,
    width: 24,
    height: 24,
    objectFit: "contain",
    opacity: 0.7,
  },

  quoteText: {
    color: CREAM,
    fontSize: 9.6,
    lineHeight: 1.45,
    fontStyle: "italic",
    textAlign: "center",
    paddingHorizontal: 28,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  sectionHeaderLine: {
    width: 24,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  sectionHeaderIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
    marginRight: 8,
  },

  sectionHeaderTitle: {
    color: GOLD,
    fontSize: 9.5,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },

  discoveryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  discoveryCard: {
    width: "48.6%",
    minHeight: 62,
    paddingVertical: 9,
    paddingHorizontal: 10,
    marginBottom: 8,
    borderRadius: 9,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  discoveryTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  discoveryIconBox: {
    width: 27,
    height: 27,
    borderRadius: 13.5,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  discoveryIcon: {
    width: 16,
    height: 16,
    objectFit: "contain",
  },

  discoveryTitle: {
    color: GOLD,
    fontSize: 8.2,
  },

  discoveryText: {
    color: MUTED_CREAM,
    fontSize: 6.9,
    lineHeight: 1.35,
  },

  finalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  infoCard: {
    width: "48.7%",
    minHeight: 94,
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  infoIconBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  infoIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
  },

  infoHeading: {
    flex: 1,
  },

  infoLabel: {
    color: SOFT_TEXT,
    fontSize: 6.3,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  infoTitle: {
    color: GOLD,
    fontSize: 8.8,
    lineHeight: 1.25,
  },

  infoText: {
    color: MUTED_CREAM,
    fontSize: 7.1,
    lineHeight: 1.4,
  },

  identityLine: {
    color: CREAM,
    fontSize: 7.5,
    lineHeight: 1.4,
    marginBottom: 3,
  },

  identityStrong: {
    color: GOLD,
  },
});

export default function HoroscopeWelcome({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const firstName = getHoroscopeFirstName(identity.firstName);
  const periodLabel = formatHoroscopePeriodLabel(period);
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(identity.zodiacSign);

  const welcomeIntroduction = identity.firstName
    ? `${firstName}, ce rapport a été préparé pour vous accompagner durant cette période et vous aider à mieux comprendre les énergies qui vous entourent.`
    : "Ce rapport a été préparé pour vous accompagner durant cette période et vous aider à mieux comprendre les énergies qui vous entourent.";

  const welcomeText =
    content.welcomeText ||
    "Votre horoscope personnalisé vous présente les grandes tendances de cette période. Chaque section vous aidera à reconnaître les énergies les plus présentes, à mieux comprendre vos ressentis et à avancer avec davantage de clarté.";

  const openingQuote =
    content.openingQuote ||
    "Les astres éclairent le chemin, mais votre volonté choisit la direction.";

  const reportTitle = content.reportTitle || "Horoscope personnalisé";

  const discoveryItems = [
    {
      title: "Énergie",
      text: "Comprendre votre rythme, votre vitalité et les moments les plus porteurs.",
      icon: HOROSCOPE_ICONS.sun,
    },
    {
      title: "Amour",
      text: "Décoder les émotions, les échanges et les mouvements de votre vie affective.",
      icon: HOROSCOPE_ICONS.love,
    },
    {
      title: "Finances",
      text: "Identifier les décisions, les occasions et les points de vigilance matériels.",
      icon: HOROSCOPE_ICONS.money,
    },
    {
      title: "Carrière",
      text: "Éclairer vos ambitions, vos choix professionnels et votre progression.",
      icon: HOROSCOPE_ICONS.lifePurpose,
    },
  ];

  return (
    <Page size="A4" style={styles.page} wrap={false}>
      <HoroscopeStarBackground />
      <View style={styles.backgroundOrbitOne} />
      <View style={styles.backgroundOrbitTwo} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Image src={HOROSCOPE_LOGO_URL} style={styles.logo} />

          <View style={styles.signBadge}>
            <Image src={zodiacIconUrl} style={styles.signIcon} />

            <Text style={styles.signName}>{identity.zodiacSignLabel}</Text>
          </View>
        </View>

        <View style={styles.titleBlock}>
          <Text style={styles.eyebrow}>Votre horoscope personnalisé</Text>

          <Text style={styles.title}>
            Bienvenue dans votre guidance astrologique
          </Text>

          <Text style={styles.intro}>{welcomeIntroduction}</Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image src={HOROSCOPE_ICONS.integrationGuide} style={styles.titleIcon} />

            <View style={styles.titleLineSmall} />
          </View>
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroOrbitOne} />
          <View style={styles.heroOrbitTwo} />

          <Image src={HOROSCOPE_ICONS.integrationGuide} style={styles.heroWatermark} />

          <View style={styles.heroHeader}>
            <View style={styles.heroIconOuter}>
              <View style={styles.heroIconInner}>
                <Image src={HOROSCOPE_ICONS.integrationGuide} style={styles.heroIcon} />
              </View>
            </View>

            <View style={styles.heroHeading}>
              <Text style={styles.heroLabel}>Votre point de départ</Text>

              <Text style={styles.heroTitle}>
                Une lecture conçue pour vous orienter avec clarté
              </Text>
            </View>
          </View>

          <View style={styles.heroDivider}>
            <View style={styles.heroDividerLine} />

            <Image
              src={HOROSCOPE_ICONS.integrationGuide}
              style={styles.heroDividerIcon}
            />
          </View>

          <Text style={styles.heroText}>{welcomeText}</Text>
        </View>

        <View style={styles.quoteCard}>
          <Image src={HOROSCOPE_ICONS.moon} style={styles.quoteIcon} />

          <Text style={styles.quoteText}>« {openingQuote} »</Text>
        </View>

        <View style={styles.sectionHeader}>
          <View style={styles.sectionHeaderLine} />

          <Image
            src={HOROSCOPE_ICONS.integrationGuide}
            style={styles.sectionHeaderIcon}
          />

          <Text style={styles.sectionHeaderTitle}>
            Ce que vous allez découvrir
          </Text>
        </View>

        <View style={styles.discoveryGrid}>
          {discoveryItems.map((item) => (
            <View key={item.title} style={styles.discoveryCard}>
              <View style={styles.discoveryTopRow}>
                <View style={styles.discoveryIconBox}>
                  <Image src={item.icon} style={styles.discoveryIcon} />
                </View>

                <Text style={styles.discoveryTitle}>{item.title}</Text>
              </View>

              <Text style={styles.discoveryText}>{item.text}</Text>
            </View>
          ))}
        </View>

        <View style={styles.finalRow}>
          <View style={styles.infoCard}>
            <View style={styles.infoHeader}>
              <View style={styles.infoIconBox}>
                <Image src={HOROSCOPE_ICONS.integrationGuide} style={styles.infoIcon} />
              </View>

              <View style={styles.infoHeading}>
                <Text style={styles.infoLabel}>Comment le lire</Text>

                <Text style={styles.infoTitle}>
                  Une boussole, jamais une obligation
                </Text>
              </View>
            </View>

            <Text style={styles.infoText}>
              Les tendances décrites vous invitent à observer, réfléchir et
              choisir. Elles ne remplacent jamais votre intuition, votre
              jugement ni votre libre arbitre.
            </Text>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.infoHeader}>
              <View style={styles.infoIconBox}>
                <Image src={HOROSCOPE_ICONS.innerWorld} style={styles.infoIcon} />
              </View>

              <View style={styles.infoHeading}>
                <Text style={styles.infoLabel}>Votre rapport</Text>

                <Text style={styles.infoTitle}>Une lecture personnalisée</Text>
              </View>
            </View>

            <Text style={styles.identityLine}>
              Signe :{" "}
              <Text style={styles.identityStrong}>
                {identity.zodiacSignLabel}
              </Text>
            </Text>

            <Text style={styles.identityLine}>
              Période : <Text style={styles.identityStrong}>{periodLabel}</Text>
            </Text>

            <Text style={styles.identityLine}>
              Rapport : <Text style={styles.identityStrong}>{reportTitle}</Text>
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
