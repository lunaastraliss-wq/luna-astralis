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
  HoroscopeChallenge,
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
    paddingTop: 34,
    paddingHorizontal: 44,
    paddingBottom: 52,
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
    marginBottom: 17,
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
    borderRadius: 16,
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
    marginBottom: 8,
  },

  title: {
    color: CREAM,
    fontSize: 24,
    lineHeight: 1.2,
    marginBottom: 8,
  },

  period: {
    color: MUTED_CREAM,
    fontSize: 10,
    marginBottom: 8,
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
    width: 13,
    height: 13,
    objectFit: "contain",
    marginRight: 7,
  },

  titleLineSmall: {
    width: 18,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  introductionCard: {
    paddingVertical: 13,
    paddingHorizontal: 17,
    borderRadius: 11,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 8,
  },

  introductionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  introductionIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
    marginRight: 7,
  },

  introductionLabel: {
    color: GOLD,
    fontSize: 7.5,
    letterSpacing: 1.3,
    textTransform: "uppercase",
  },

  introductionText: {
    color: MUTED_CREAM,
    fontSize: 9.5,
    lineHeight: 1.5,
  },

  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  sectionHeaderLine: {
    width: 22,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  sectionHeaderIcon: {
    width: 12,
    height: 12,
    objectFit: "contain",
    marginRight: 8,
  },

  sectionLabel: {
    color: GOLD,
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },

  challengesContainer: {
    flexDirection: "column",
  },

  challengeCard: {
    paddingVertical: 13,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 13,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  challengeHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  challengeNumberOuter: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  challengeNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 0.9,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
  },

  challengeNumberText: {
    color: GOLD,
    fontSize: 9.5,
  },

  challengeHeading: {
    flex: 1,
    paddingTop: 3,
  },

  challengeMiniLabel: {
    color: SOFT_TEXT,
    fontSize: 6.5,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  challengeTitle: {
    color: CREAM,
    fontSize: 11,
    lineHeight: 1.35,
    marginBottom: 5,
  },

  challengeTheme: {
    color: GOLD,
    fontSize: 7.5,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },

  challengeDivider: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
  },

  challengeDividerLine: {
    width: 28,
    height: 1,
    backgroundColor: DARK_GOLD,
    marginRight: 7,
  },

  challengeDividerIcon: {
    width: 11,
    height: 11,
    objectFit: "contain",
  },

  challengeDescription: {
    color: MUTED_CREAM,
    fontSize: 9,
    lineHeight: 1.45,
    textAlign: "justify",
    marginBottom: 8,
  },

  adviceBox: {
    paddingTop: 8,
    paddingHorizontal: 12,
    paddingBottom: 9,
    borderRadius: 8,
    borderTopWidth: 0.5,
    borderTopColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
  },

  adviceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  adviceIcon: {
    width: 11,
    height: 11,
    objectFit: "contain",
    marginRight: 6,
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 7,
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },

  adviceText: {
    color: CREAM,
    fontSize: 8.5,
    lineHeight: 1.5,
  },

  emptyCard: {
    paddingVertical: 30,
    paddingHorizontal: 24,
    borderRadius: 14,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
  },

  emptyIcon: {
    width: 34,
    height: 34,
    objectFit: "contain",
    marginBottom: 8,
  },

  emptyTitle: {
    color: GOLD,
    fontSize: 12,
    marginBottom: 9,
  },

  emptyText: {
    color: MUTED_CREAM,
    fontSize: 9.5,
    lineHeight: 1.45,
    textAlign: "center",
  },

  closingCard: {
    marginTop: 5,
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  closingHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  closingLine: {
    width: 22,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  closingIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
    marginHorizontal: 8,
  },

  closingText: {
    color: CREAM,
    fontSize: 9,
    lineHeight: 1.45,
    textAlign: "center",
  },
});

function ChallengeCard({
  challenge,
  index,
  zodiacIconUrl,
}: {
  challenge: HoroscopeChallenge;
  index: number;
  zodiacIconUrl: string;
}) {
  return (
    <View style={styles.challengeCard} wrap={false}>
      <View style={styles.challengeHeader}>
        <View style={styles.challengeNumberOuter}>
          <View style={styles.challengeNumber}>
            <Text style={styles.challengeNumberText}>
              0{index + 1}
            </Text>
          </View>
        </View>

        <View style={styles.challengeHeading}>
          <Text style={styles.challengeMiniLabel}>
            Défi astrologique
          </Text>

          <Text style={styles.challengeTitle}>
            {challenge.title}
          </Text>

          {challenge.theme ? (
            <Text style={styles.challengeTheme}>
              {challenge.theme}
            </Text>
          ) : null}
        </View>
      </View>

      <View style={styles.challengeDivider}>
        <View style={styles.challengeDividerLine} />

        <Image
          src={zodiacIconUrl}
          style={styles.challengeDividerIcon}
        />
      </View>

      <Text style={styles.challengeDescription}>
        {challenge.description}
      </Text>

      {challenge.advice ? (
        <View style={styles.adviceBox}>
          <View style={styles.adviceHeader}>
            <Image
              src={zodiacIconUrl}
              style={styles.adviceIcon}
            />

            <Text style={styles.adviceLabel}>
              Comment avancer
            </Text>
          </View>

          <Text style={styles.adviceText}>
            {challenge.advice}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

export default function HoroscopeChallenges({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const challenges = Array.isArray(content.challenges)
    ? content.challenges.slice(0, 4)
    : [];

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
            Défis de la période
          </Text>

          <Text style={styles.title}>
            Ce qui demande votre attention
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

        {content.challengesIntroduction ? (
          <View style={styles.introductionCard} wrap={false}>
            <View style={styles.introductionHeader}>
              <Image
                src={zodiacIconUrl}
                style={styles.introductionIcon}
              />

              <Text style={styles.introductionLabel}>
                Regard sur la période
              </Text>
            </View>

            <Text style={styles.introductionText}>
              {content.challengesIntroduction}
            </Text>
          </View>
        ) : null}

        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionHeaderLine} />

          <Image
            src={zodiacIconUrl}
            style={styles.sectionHeaderIcon}
          />

          <Text style={styles.sectionLabel}>
            Vos principaux défis
          </Text>
        </View>

        {challenges.length > 0 ? (
          <View style={styles.challengesContainer}>
            {challenges.map((challenge, index) => (
              <ChallengeCard
                key={`${challenge.title}-${index}`}
                challenge={challenge}
                index={index}
                zodiacIconUrl={zodiacIconUrl}
              />
            ))}
          </View>
        ) : (
          <View style={styles.emptyCard} wrap={false}>
            <Image
              src={zodiacIconUrl}
              style={styles.emptyIcon}
            />

            <Text style={styles.emptyTitle}>
              Une période plutôt fluide
            </Text>

            <Text style={styles.emptyText}>
              Aucun défi majeur n’est mis en évidence pour cette
              période. Restez toutefois attentive aux petits signaux
              qui pourraient vous inviter à ajuster votre rythme.
            </Text>
          </View>
        )}

        <View style={styles.closingCard} wrap={false}>
          <View style={styles.closingHeader}>
            <View style={styles.closingLine} />

            <Image
              src={zodiacIconUrl}
              style={styles.closingIcon}
            />

            <View style={styles.closingLine} />
          </View>

          <Text style={styles.closingText}>
            Un défi astrologique n’annonce pas un échec. Il révèle
            plutôt un domaine dans lequel votre patience, votre
            conscience et votre capacité d’adaptation peuvent devenir
            de véritables forces.
          </Text>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
