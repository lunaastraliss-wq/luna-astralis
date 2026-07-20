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
  normalizeHoroscopeScore,
} from "./HoroscopePdfUtils";

const NAVY = "#06101F";
const NAVY_CARD = "#0A1729";
const NAVY_CARD_LIGHT = "#0D1B30";
const NAVY_SOFT = "#101F35";
const TRACK = "#202C3E";

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

  mainCard: {
    paddingVertical: 19,
    paddingHorizontal: 20,
    borderRadius: 14,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 15,
  },

  mainHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  mainHeading: {
    flex: 1,
    paddingRight: 16,
  },

  mainMiniLabel: {
    color: SOFT_TEXT,
    fontSize: 7,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  sectionTitleIcon: {
    width: 17,
    height: 17,
    objectFit: "contain",
    marginRight: 8,
  },

  sectionTitle: {
    flex: 1,
    color: GOLD,
    fontSize: 13,
    lineHeight: 1.35,
  },

  scoreOuterCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1.1,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreValue: {
    color: GOLD,
    fontSize: 20,
  },

  scoreMaximum: {
    color: SOFT_TEXT,
    fontSize: 7,
    marginTop: 1,
  },

  mainDivider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 11,
  },

  mainDividerLine: {
    width: 31,
    height: 1,
    backgroundColor: DARK_GOLD,
    marginRight: 7,
  },

  mainDividerIcon: {
    width: 11,
    height: 11,
    objectFit: "contain",
  },

  introduction: {
    color: MUTED_CREAM,
    fontSize: 9.2,
    lineHeight: 1.55,
    marginBottom: 9,
  },

  mainText: {
    color: CREAM,
    fontSize: 9.8,
    lineHeight: 1.62,
    textAlign: "justify",
  },

  progressCard: {
    paddingVertical: 13,
    paddingHorizontal: 17,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    marginBottom: 15,
  },

  progressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  progressLabelRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  progressIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
    marginRight: 7,
  },

  progressLabel: {
    color: CREAM,
    fontSize: 8.8,
  },

  progressValue: {
    color: GOLD,
    fontSize: 8.8,
  },

  progressTrack: {
    width: "100%",
    height: 8,
    borderRadius: 4,
    backgroundColor: TRACK,
    overflow: "hidden",
  },

  progressFill: {
    height: 8,
    borderRadius: 4,
    backgroundColor: GOLD,
  },

  highlightsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  highlightsHeaderLine: {
    width: 24,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  highlightsHeaderIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
    marginRight: 8,
  },

  highlightsTitle: {
    color: GOLD,
    fontSize: 9.8,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },

  highlightsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  highlightCard: {
    width: "48.5%",
    minHeight: 68,
    paddingVertical: 11,
    paddingHorizontal: 12,
    marginBottom: 9,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  highlightTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  highlightNumberCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },

  highlightNumber: {
    color: GOLD,
    fontSize: 7,
  },

  highlightIcon: {
    width: 12,
    height: 12,
    objectFit: "contain",
  },

  highlightText: {
    color: CREAM,
    fontSize: 8,
    lineHeight: 1.42,
  },

  guidanceCard: {
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
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
    fontSize: 6.8,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  guidanceTitle: {
    color: GOLD,
    fontSize: 10,
    lineHeight: 1.3,
  },

  guidanceText: {
    color: MUTED_CREAM,
    fontSize: 8,
    lineHeight: 1.45,
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  actionCard: {
    width: "32%",
    minHeight: 68,
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderRadius: 9,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  actionNumberCircle: {
    width: 21,
    height: 21,
    borderRadius: 10.5,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },

  actionNumber: {
    color: GOLD,
    fontSize: 7,
  },

  actionTitle: {
    color: GOLD,
    fontSize: 8,
    marginBottom: 3,
  },

  actionText: {
    color: MUTED_CREAM,
    fontSize: 6.7,
    lineHeight: 1.35,
  },

  adviceCard: {
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    borderTopWidth: 1.4,
    borderTopColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  adviceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  adviceIconBox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  adviceIcon: {
    width: 16,
    height: 16,
    objectFit: "contain",
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 7.6,
    letterSpacing: 1.3,
    textTransform: "uppercase",
  },

  adviceText: {
    color: CREAM,
    fontSize: 8.6,
    lineHeight: 1.5,
  },
});

function getSocialGuidance(score: number) {
  if (score >= 75) {
    return {
      title: "Des échanges porteurs",
      text:
        "La période favorise la communication, les rapprochements et les rencontres constructives. Votre présence peut inspirer confiance et faciliter les liens utiles.",
    };
  }

  if (score >= 50) {
    return {
      title: "Un équilibre relationnel à entretenir",
      text:
        "Les échanges peuvent être positifs, à condition de respecter les rythmes et les sensibilités de chacun. L’écoute et la clarté feront toute la différence.",
    };
  }

  return {
    title: "Une période qui demande du recul",
    text:
      "Certaines interactions peuvent être plus exigeantes. Préservez votre énergie, évitez les réactions rapides et choisissez les échanges qui méritent réellement votre attention.",
  };
}

export default function HoroscopeSocial({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const socialScore = normalizeHoroscopeScore(
    content.social.score ??
      content.scores.social ??
      50,
  );

  const highlights = Array.isArray(content.social.highlights)
    ? content.social.highlights.slice(0, 4)
    : [];

  const guidance = getSocialGuidance(socialScore);

  const actionCards = [
    {
      title: "Écouter",
      text:
        "Accueillez les paroles importantes sans chercher immédiatement à répondre ou à corriger.",
    },
    {
      title: "Clarifier",
      text:
        "Exprimez vos attentes avec simplicité afin d’éviter les malentendus et les interprétations.",
    },
    {
      title: "Préserver",
      text:
        "Gardez du temps pour vous lorsque les échanges deviennent trop exigeants ou dispersants.",
    },
  ];

  const sectionTitle =
    content.social.title || "Votre dynamique relationnelle";

  const introduction =
    content.social.introduction ||
    "Cette période met en lumière votre façon d’entrer en relation, de communiquer et de trouver votre place auprès des autres.";

  const mainText =
    content.social.text ||
    "Votre vie sociale évolue selon la qualité de votre présence et la clarté de vos échanges. Les relations les plus constructives seront celles qui respectent vos besoins tout en laissant de la place à l’autre.";

  const advice =
    content.social.advice ||
    "Choisissez un échange important à aborder avec calme, sincérité et ouverture.";

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
            Vie sociale et entourage
          </Text>

          <Text style={styles.title}>
            Vos relations et vos échanges
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

        <View style={styles.mainCard} wrap={false}>
          <View style={styles.mainHeader}>
            <View style={styles.mainHeading}>
              <Text style={styles.mainMiniLabel}>
                Lecture relationnelle
              </Text>

              <View style={styles.sectionTitleRow}>
                <Image
                  src={zodiacIconUrl}
                  style={styles.sectionTitleIcon}
                />

                <Text style={styles.sectionTitle}>
                  {sectionTitle}
                </Text>
              </View>
            </View>

            <View style={styles.scoreOuterCircle}>
              <View style={styles.scoreCircle}>
                <Text style={styles.scoreValue}>
                  {socialScore}
                </Text>

                <Text style={styles.scoreMaximum}>
                  sur 100
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.mainDivider}>
            <View style={styles.mainDividerLine} />

            <Image
              src={zodiacIconUrl}
              style={styles.mainDividerIcon}
            />
          </View>

          <Text style={styles.introduction}>
            {introduction}
          </Text>

          <Text style={styles.mainText}>
            {mainText}
          </Text>
        </View>

        <View style={styles.progressCard} wrap={false}>
          <View style={styles.progressHeader}>
            <View style={styles.progressLabelRow}>
              <Image
                src={zodiacIconUrl}
                style={styles.progressIcon}
              />

              <Text style={styles.progressLabel}>
                Fluidité relationnelle
              </Text>
            </View>

            <Text style={styles.progressValue}>
              {socialScore} %
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${socialScore}%`,
                },
              ]}
            />
          </View>
        </View>

        {highlights.length > 0 ? (
          <>
            <View style={styles.highlightsHeader}>
              <View style={styles.highlightsHeaderLine} />

              <Image
                src={zodiacIconUrl}
                style={styles.highlightsHeaderIcon}
              />

              <Text style={styles.highlightsTitle}>
                Points relationnels
              </Text>
            </View>

            <View style={styles.highlightsGrid}>
              {highlights.map((highlight, index) => (
                <View
                  key={`${highlight}-${index}`}
                  style={styles.highlightCard}
                  wrap={false}
                >
                  <View style={styles.highlightTopRow}>
                    <View style={styles.highlightNumberCircle}>
                      <Text style={styles.highlightNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </Text>
                    </View>

                    <Image
                      src={zodiacIconUrl}
                      style={styles.highlightIcon}
                    />
                  </View>

                  <Text style={styles.highlightText}>
                    {highlight}
                  </Text>
                </View>
              ))}
            </View>
          </>
        ) : null}

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
                Tendance sociale
              </Text>

              <Text style={styles.guidanceTitle}>
                {guidance.title}
              </Text>
            </View>
          </View>

          <Text style={styles.guidanceText}>
            {guidance.text}
          </Text>
        </View>

        <View style={styles.actionsRow}>
          {actionCards.map((action, index) => (
            <View
              key={action.title}
              style={styles.actionCard}
              wrap={false}
            >
              <View style={styles.actionNumberCircle}>
                <Text style={styles.actionNumber}>
                  {String(index + 1).padStart(2, "0")}
                </Text>
              </View>

              <Text style={styles.actionTitle}>
                {action.title}
              </Text>

              <Text style={styles.actionText}>
                {action.text}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.adviceCard} wrap={false}>
          <View style={styles.adviceHeader}>
            <View style={styles.adviceIconBox}>
              <Image
                src={zodiacIconUrl}
                style={styles.adviceIcon}
              />
            </View>

            <Text style={styles.adviceLabel}>
              Conseil relationnel
            </Text>
          </View>

          <Text style={styles.adviceText}>
            {advice}
          </Text>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
