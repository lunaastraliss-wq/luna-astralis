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
    paddingTop: 34,
    paddingHorizontal: 42,
    paddingBottom: 52,
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
    marginBottom: 18,
  },

  logo: {
    width: 104,
    height: 36,
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
    marginBottom: 14,
  },

  eyebrow: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 2.4,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  title: {
    color: CREAM,
    fontSize: 24,
    lineHeight: 1.2,
    marginBottom: 6,
  },

  period: {
    color: MUTED_CREAM,
    fontSize: 10,
    marginBottom: 9,
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

  energyCard: {
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderRadius: 14,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 12,
  },

  energyHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
  },

  energyHeading: {
    flex: 1,
    paddingRight: 16,
  },

  energyMiniLabel: {
    color: SOFT_TEXT,
    fontSize: 7,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  energyTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  energyTitleIcon: {
    width: 17,
    height: 17,
    objectFit: "contain",
    marginRight: 8,
  },

  energyTitle: {
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
    fontSize: 21,
  },

  scoreMaximum: {
    color: SOFT_TEXT,
    fontSize: 7,
    marginTop: 1,
  },

  energyDivider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  energyDividerLine: {
    width: 31,
    height: 1,
    backgroundColor: DARK_GOLD,
    marginRight: 7,
  },

  energyDividerIcon: {
    width: 11,
    height: 11,
    objectFit: "contain",
  },

  introduction: {
    color: MUTED_CREAM,
    fontSize: 9.5,
    lineHeight: 1.55,
    marginBottom: 8,
  },

  mainText: {
    color: CREAM,
    fontSize: 10.2,
    lineHeight: 1.6,
    textAlign: "justify",
  },

  progressCard: {
    paddingVertical: 15,
    paddingHorizontal: 17,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    marginBottom: 12,
  },

  progressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  progressLabelRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  progressIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
    marginRight: 7,
  },

  progressLabel: {
    color: CREAM,
    fontSize: 9,
  },

  progressValue: {
    color: GOLD,
    fontSize: 9,
  },

  progressTrack: {
    width: "100%",
    height: 7,
    borderRadius: 3.5,
    backgroundColor: TRACK,
    overflow: "hidden",
  },

  progressFill: {
    height: 7,
    borderRadius: 3.5,
    backgroundColor: GOLD,
  },

  highlightHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  highlightHeaderLine: {
    width: 24,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  highlightHeaderIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
    marginRight: 8,
  },

  highlightTitle: {
    color: GOLD,
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },

  highlightsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  highlightCard: {
    width: "48.5%",
    minHeight: 78,
    paddingVertical: 13,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  highlightTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  highlightNumberCircle: {
    width: 27,
    height: 27,
    borderRadius: 13.5,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  highlightNumber: {
    color: GOLD,
    fontSize: 8.5,
  },

  highlightIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
  },

  highlightText: {
    color: CREAM,
    fontSize: 9.2,
    lineHeight: 1.5,
  },

  adviceCard: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  adviceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  adviceIconBox: {
    width: 23,
    height: 23,
    borderRadius: 11.5,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  adviceIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },

  adviceText: {
    color: CREAM,
    fontSize: 9.5,
    lineHeight: 1.55,
  },
});

export default function HoroscopeEnergy({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const energyScore = normalizeHoroscopeScore(
    content.energy.score ?? content.scores.energy,
  );

  const highlights = Array.isArray(content.energy.highlights)
    ? content.energy.highlights.slice(0, 4)
    : [];

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.content} wrap={false}>
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
            Énergie générale
          </Text>

          <Text style={styles.title}>
            Votre climat énergétique
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

        <View style={styles.energyCard} wrap={false}>
          <View style={styles.energyHeader}>
            <View style={styles.energyHeading}>
              <Text style={styles.energyMiniLabel}>
                Tendance dominante
              </Text>

              <View style={styles.energyTitleRow}>
                <Image
                  src={zodiacIconUrl}
                  style={styles.energyTitleIcon}
                />

                <Text style={styles.energyTitle}>
                  {content.energy.title}
                </Text>
              </View>
            </View>

            <View style={styles.scoreOuterCircle}>
              <View style={styles.scoreCircle}>
                <Text style={styles.scoreValue}>
                  {energyScore}
                </Text>

                <Text style={styles.scoreMaximum}>
                  sur 100
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.energyDivider}>
            <View style={styles.energyDividerLine} />

            <Image
              src={zodiacIconUrl}
              style={styles.energyDividerIcon}
            />
          </View>

          {content.energy.introduction ? (
            <Text style={styles.introduction}>
              {content.energy.introduction}
            </Text>
          ) : null}

          <Text style={styles.mainText}>
            {content.energy.text}
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
                Niveau d’énergie
              </Text>
            </View>

            <Text style={styles.progressValue}>
              {energyScore} %
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${energyScore}%`,
                },
              ]}
            />
          </View>
        </View>

        {highlights.length > 0 ? (
          <>
            <View style={styles.highlightHeader}>
              <View style={styles.highlightHeaderLine} />

              <Image
                src={zodiacIconUrl}
                style={styles.highlightHeaderIcon}
              />

              <Text style={styles.highlightTitle}>
                Points à retenir
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
                        0{index + 1}
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

        {content.energy.advice ? (
          <View style={styles.adviceCard} wrap={false}>
            <View style={styles.adviceHeader}>
              <View style={styles.adviceIconBox}>
                <Image
                  src={zodiacIconUrl}
                  style={styles.adviceIcon}
                />
              </View>

              <Text style={styles.adviceLabel}>
                Conseil énergétique
              </Text>
            </View>

            <Text style={styles.adviceText}>
              {content.energy.advice}
            </Text>
          </View>
        ) : null}
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
