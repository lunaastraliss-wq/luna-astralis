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

const GOLD = "#F4C95D";
const CREAM = "#FFF8E7";
const MUTED_CREAM = "#DDD5C6";
const SOFT_TEXT = "#B9AE98";
const DARK_GOLD = "#8F6E35";
const DEEP_GOLD = "#4E412D";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 34,
    paddingHorizontal: 42,
    paddingBottom: 54,
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
    marginBottom: 15,
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
    marginBottom: 12,
  },

  eyebrow: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 2.4,
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
    fontSize: 9.7,
    marginBottom: 9,
  },

  titleDecoration: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleLine: {
    width: 62,
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
    minHeight: 144,
    paddingVertical: 16,
    paddingHorizontal: 17,
    marginBottom: 12,
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
    top: -62,
    left: -58,
    width: 172,
    height: 172,
    borderRadius: 86,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  heroOrbitTwo: {
    position: "absolute",
    top: -28,
    left: -27,
    width: 112,
    height: 112,
    borderRadius: 56,
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
    marginBottom: 5,
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
    paddingVertical: 11,
    paddingHorizontal: 14,
    marginBottom: 12,
    borderRadius: 10,
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
    backgroundColor: "#202C3E",
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
    marginBottom: 9,
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
    fontSize: 9.3,
    letterSpacing: 1.45,
    textTransform: "uppercase",
  },

  milestones: {
    flexDirection: "column",
    marginBottom: 11,
  },

  milestone: {
    flexDirection: "row",
    alignItems: "stretch",
    marginBottom: 8,
  },

  milestoneRail: {
    width: 46,
    alignItems: "center",
  },

  milestoneCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  milestoneIcon: {
    width: 21,
    height: 21,
    objectFit: "contain",
  },

  milestoneLine: {
    flex: 1,
    width: 1,
    backgroundColor: DARK_GOLD,
    marginTop: 4,
  },

  milestoneCard: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  milestoneTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  milestoneLabel: {
    color: SOFT_TEXT,
    fontSize: 6.4,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  milestoneNumber: {
    color: GOLD,
    fontSize: 7.2,
    letterSpacing: 0.8,
  },

  milestoneText: {
    color: CREAM,
    fontSize: 8.8,
    lineHeight: 1.45,
  },

  adviceCard: {
    position: "relative",
    flexDirection: "row",
    alignItems: "flex-start",
    minHeight: 82,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  adviceWatermark: {
    position: "absolute",
    right: 15,
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

type CareerMilestoneProps = {
  text: string;
  index: number;
  icon: string;
  isLast: boolean;
};

function CareerMilestone({
  text,
  index,
  icon,
  isLast,
}: CareerMilestoneProps) {
  return (
    <View style={styles.milestone} wrap={false}>
      <View style={styles.milestoneRail}>
        <View style={styles.milestoneCircle}>
          <Image
            src={icon}
            style={styles.milestoneIcon}
          />
        </View>

        {!isLast ? (
          <View style={styles.milestoneLine} />
        ) : null}
      </View>

      <View style={styles.milestoneCard}>
        <View style={styles.milestoneTop}>
          <Text style={styles.milestoneLabel}>
            Point de progression
          </Text>

          <Text style={styles.milestoneNumber}>
            {String(index + 1).padStart(2, "0")}
          </Text>
        </View>

        <Text style={styles.milestoneText}>
          {text}
        </Text>
      </View>
    </View>
  );
}

export default function HoroscopeCareer({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const careerScore = normalizeHoroscopeScore(
    content.career.score ?? content.scores.career,
  );

  const highlights = Array.isArray(content.career.highlights)
    ? content.career.highlights.slice(0, 4)
    : [];

  const milestoneIcons = [
    HOROSCOPE_ICONS.hiddenTalents,
    HOROSCOPE_ICONS.soulPath,
    HOROSCOPE_ICONS.jupiter,
    HOROSCOPE_ICONS.sun,
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
            Travail et ambitions
          </Text>

          <Text style={styles.title}>
            Votre évolution professionnelle
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image
              src={HOROSCOPE_ICONS.lifePurpose}
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
                src={HOROSCOPE_ICONS.lifePurpose}
                style={styles.heroIcon}
              />
            </View>
          </View>

          <View style={styles.heroContent}>
            <View style={styles.heroTopRow}>
              <View style={styles.heroHeading}>
                <Text style={styles.heroLabel}>
                  Lecture professionnelle
                </Text>

                <Text style={styles.heroTitle}>
                  {content.career.title}
                </Text>
              </View>

              <View style={styles.scoreBadge}>
                <Text style={styles.scoreValue}>
                  {careerScore}
                </Text>

                <Text style={styles.scoreMaximum}>
                  sur 100
                </Text>
              </View>
            </View>

            {content.career.introduction ? (
              <Text style={styles.heroIntroduction}>
                {content.career.introduction}
              </Text>
            ) : null}

            <Text style={styles.heroText}>
              {content.career.text}
            </Text>
          </View>
        </View>

        <View style={styles.potentialCard} wrap={false}>
          <View style={styles.potentialHeader}>
            <View style={styles.potentialLeft}>
              <Image
                src={HOROSCOPE_ICONS.hiddenTalents}
                style={styles.potentialIcon}
              />

              <Text style={styles.potentialLabel}>
                Potentiel professionnel
              </Text>
            </View>

            <Text style={styles.potentialValue}>
              {careerScore} %
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${careerScore}%`,
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
                src={HOROSCOPE_ICONS.soulPath}
                style={styles.sectionHeaderIcon}
              />

              <Text style={styles.sectionLabel}>
                Vos axes de progression
              </Text>
            </View>

            <View style={styles.milestones}>
              {highlights.map((highlight, index) => (
                <CareerMilestone
                  key={`${highlight}-${index}`}
                  text={highlight}
                  index={index}
                  icon={milestoneIcons[index] || HOROSCOPE_ICONS.hiddenTalents}
                  isLast={index === highlights.length - 1}
                />
              ))}
            </View>
          </>
        ) : null}

        {content.career.advice ? (
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
                Conseil professionnel
              </Text>

              <Text style={styles.adviceText}>
                {content.career.advice}
              </Text>
            </View>
          </View>
        ) : null}
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
