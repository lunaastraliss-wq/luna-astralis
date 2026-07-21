import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  HOROSCOPE_ICONS,
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
    lineHeight: 1.2,
    marginBottom: 7,
  },

  period: {
    color: MUTED_CREAM,
    fontSize: 9.6,
    marginBottom: 8,
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
    width: 16,
    height: 16,
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
    flexDirection: "row",
    alignItems: "center",
    minHeight: 145,
    paddingVertical: 16,
    paddingHorizontal: 17,
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
    top: -60,
    left: -56,
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  heroOrbitTwo: {
    position: "absolute",
    top: -25,
    left: -23,
    width: 108,
    height: 108,
    borderRadius: 54,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
  },

  heroIconOuter: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  heroIconInner: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 0.9,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  heroIcon: {
    width: 42,
    height: 42,
    objectFit: "contain",
  },

  heroContent: {
    flex: 1,
  },

  heroTopRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  heroHeading: {
    flex: 1,
    paddingRight: 10,
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
    fontSize: 12.4,
    lineHeight: 1.35,
  },

  scoreBadge: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreValue: {
    color: GOLD,
    fontSize: 15,
    lineHeight: 1,
  },

  scoreMaximum: {
    color: SOFT_TEXT,
    fontSize: 6.2,
    marginTop: 2,
  },

  heroIntroduction: {
    color: MUTED_CREAM,
    fontSize: 8.2,
    lineHeight: 1.45,
    marginBottom: 6,
  },

  heroText: {
    color: CREAM,
    fontSize: 8.5,
    lineHeight: 1.48,
    textAlign: "justify",
  },

  potentialCard: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
  },

  potentialHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  potentialLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  potentialIcon: {
    width: 16,
    height: 16,
    objectFit: "contain",
    marginRight: 7,
  },

  potentialLabel: {
    color: CREAM,
    fontSize: 8.6,
  },

  potentialValue: {
    color: GOLD,
    fontSize: 9,
  },

  progressTrack: {
    width: "100%",
    height: 6,
    borderRadius: 3,
    backgroundColor: TRACK,
    overflow: "hidden",
  },

  progressFill: {
    height: 6,
    borderRadius: 3,
    backgroundColor: GOLD,
  },

  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  sectionHeaderLine: {
    width: 28,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 9,
  },

  sectionHeaderIcon: {
    width: 16,
    height: 16,
    objectFit: "contain",
    marginRight: 9,
  },

  sectionLabel: {
    color: GOLD,
    fontSize: 9.2,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },

  relationshipPath: {
    marginBottom: 10,
  },

  relationshipRow: {
    flexDirection: "row",
    alignItems: "stretch",
    marginBottom: 7,
  },

  relationshipRail: {
    width: 48,
    alignItems: "center",
  },

  relationshipCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  relationshipIcon: {
    width: 22,
    height: 22,
    objectFit: "contain",
  },

  relationshipLine: {
    flex: 1,
    width: 1,
    backgroundColor: DARK_GOLD,
    marginTop: 4,
  },

  relationshipCard: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  relationshipTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  relationshipLabel: {
    color: SOFT_TEXT,
    fontSize: 6.2,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  relationshipNumber: {
    color: GOLD,
    fontSize: 7,
    letterSpacing: 0.8,
  },

  relationshipText: {
    color: CREAM,
    fontSize: 8.2,
    lineHeight: 1.42,
  },

  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  balanceCard: {
    width: "48.5%",
    minHeight: 73,
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  balanceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  balanceIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginRight: 7,
  },

  balanceTitle: {
    color: GOLD,
    fontSize: 8.4,
  },

  balanceText: {
    color: MUTED_CREAM,
    fontSize: 7.2,
    lineHeight: 1.4,
  },

  adviceCard: {
    position: "relative",
    flexDirection: "row",
    alignItems: "flex-start",
    minHeight: 80,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderTopWidth: 1.4,
    borderTopColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  adviceWatermark: {
    position: "absolute",
    right: 14,
    top: 7,
    width: 54,
    height: 54,
    objectFit: "contain",
    opacity: 0.06,
  },

  adviceIconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  adviceIcon: {
    width: 24,
    height: 24,
    objectFit: "contain",
  },

  adviceContent: {
    flex: 1,
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 7,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  adviceText: {
    color: CREAM,
    fontSize: 8.7,
    lineHeight: 1.5,
  },
});

type RelationshipPointProps = {
  text: string;
  icon: string;
  index: number;
  isLast: boolean;
};

function RelationshipPoint({
  text,
  icon,
  index,
  isLast,
}: RelationshipPointProps) {
  return (
    <View style={styles.relationshipRow} wrap={false}>
      <View style={styles.relationshipRail}>
        <View style={styles.relationshipCircle}>
          <Image
            src={icon}
            style={styles.relationshipIcon}
          />
        </View>

        {!isLast ? (
          <View style={styles.relationshipLine} />
        ) : null}
      </View>

      <View style={styles.relationshipCard}>
        <View style={styles.relationshipTop}>
          <Text style={styles.relationshipLabel}>
            Point affectif
          </Text>

          <Text style={styles.relationshipNumber}>
            {String(index + 1).padStart(2, "0")}
          </Text>
        </View>

        <Text style={styles.relationshipText}>
          {text}
        </Text>
      </View>
    </View>
  );
}

export default function HoroscopeLove({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const loveScore = normalizeHoroscopeScore(
    content.love.score ?? content.scores.love,
  );

  const highlights = Array.isArray(content.love.highlights)
    ? content.love.highlights.slice(0, 4)
    : [];

  const relationshipIcons = [
    HOROSCOPE_ICONS.love,
    HOROSCOPE_ICONS.moon,
    HOROSCOPE_ICONS.sun,
    HOROSCOPE_ICONS.soulPath,
  ];

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
            Amour et relations
          </Text>

          <Text style={styles.title}>
            Votre climat affectif
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image
              src={HOROSCOPE_ICONS.love}
              style={styles.titleIcon}
            />

            <View style={styles.titleLineSmall} />
          </View>
        </View>

        <View style={styles.heroCard} wrap={false}>
          <View style={styles.heroOrbitOne} />
          <View style={styles.heroOrbitTwo} />

          <View style={styles.heroIconOuter}>
            <View style={styles.heroIconInner}>
              <Image
                src={HOROSCOPE_ICONS.love}
                style={styles.heroIcon}
              />
            </View>
          </View>

          <View style={styles.heroContent}>
            <View style={styles.heroTopRow}>
              <View style={styles.heroHeading}>
                <Text style={styles.heroLabel}>
                  Tendance sentimentale
                </Text>

                <Text style={styles.heroTitle}>
                  {content.love.title}
                </Text>
              </View>

              <View style={styles.scoreBadge}>
                <Text style={styles.scoreValue}>
                  {loveScore}
                </Text>

                <Text style={styles.scoreMaximum}>
                  sur 100
                </Text>
              </View>
            </View>

            {content.love.introduction ? (
              <Text style={styles.heroIntroduction}>
                {content.love.introduction}
              </Text>
            ) : null}

            <Text style={styles.heroText}>
              {content.love.text}
            </Text>
          </View>
        </View>

        <View style={styles.potentialCard} wrap={false}>
          <View style={styles.potentialHeader}>
            <View style={styles.potentialLeft}>
              <Image
                src={HOROSCOPE_ICONS.moon}
                style={styles.potentialIcon}
              />

              <Text style={styles.potentialLabel}>
                Potentiel affectif
              </Text>
            </View>

            <Text style={styles.potentialValue}>
              {loveScore} %
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${loveScore}%`,
                },
              ]}
            />
          </View>
        </View>

        {highlights.length > 0 ? (
          <>
            <View style={styles.sectionHeaderRow}>
              <View style={styles.sectionHeaderLine} />

              <Image
                src={HOROSCOPE_ICONS.love}
                style={styles.sectionHeaderIcon}
              />

              <Text style={styles.sectionLabel}>
                Les mouvements du cœur
              </Text>
            </View>

            <View style={styles.relationshipPath}>
              {highlights.map((highlight, index) => (
                <RelationshipPoint
                  key={`${highlight}-${index}`}
                  text={highlight}
                  icon={
                    relationshipIcons[index] ||
                    HOROSCOPE_ICONS.love
                  }
                  index={index}
                  isLast={index === highlights.length - 1}
                />
              ))}
            </View>
          </>
        ) : null}

        <View style={styles.balanceRow}>
          <View style={styles.balanceCard} wrap={false}>
            <View style={styles.balanceHeader}>
              <Image
                src={HOROSCOPE_ICONS.moon}
                style={styles.balanceIcon}
              />

              <Text style={styles.balanceTitle}>
                Écouter vos émotions
              </Text>
            </View>

            <Text style={styles.balanceText}>
              Prenez le temps de reconnaître ce que vous ressentez avant de réagir ou de prendre une décision importante.
            </Text>
          </View>

          <View style={styles.balanceCard} wrap={false}>
            <View style={styles.balanceHeader}>
              <Image
                src={HOROSCOPE_ICONS.sun}
                style={styles.balanceIcon}
              />

              <Text style={styles.balanceTitle}>
                Faire vivre le lien
              </Text>
            </View>

            <Text style={styles.balanceText}>
              Une parole claire, une attention sincère ou un geste simple peut réchauffer une relation et rétablir la confiance.
            </Text>
          </View>
        </View>

        {content.love.advice ? (
          <View style={styles.adviceCard} wrap={false}>
            <Image
              src={HOROSCOPE_ICONS.integrationGuide}
              style={styles.adviceWatermark}
            />

            <View style={styles.adviceIconCircle}>
              <Image
                src={HOROSCOPE_ICONS.integrationGuide}
                style={styles.adviceIcon}
              />
            </View>

            <View style={styles.adviceContent}>
              <Text style={styles.adviceLabel}>
                Conseil du cœur
              </Text>

              <Text style={styles.adviceText}>
                {content.love.advice}
              </Text>
            </View>
          </View>
        ) : null}
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
