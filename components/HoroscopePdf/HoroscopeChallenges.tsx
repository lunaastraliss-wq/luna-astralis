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
    marginBottom: 21,
  },

  introductionCard: {
    paddingVertical: 17,
    paddingHorizontal: 19,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 20,
  },

  introductionText: {
    color: MUTED_CREAM,
    fontSize: 9.5,
    lineHeight: 1.65,
  },

  sectionLabel: {
    color: GOLD,
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 12,
  },

  challengesContainer: {
    flexDirection: "column",
  },

  challengeCard: {
    paddingVertical: 17,
    paddingHorizontal: 18,
    marginBottom: 13,
    borderRadius: 9,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  challengeHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },

  challengeNumber: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  challengeNumberText: {
    color: GOLD,
    fontSize: 9,
  },

  challengeHeading: {
    flex: 1,
    paddingTop: 2,
  },

  challengeTitle: {
    color: CREAM,
    fontSize: 11,
    lineHeight: 1.35,
    marginBottom: 4,
  },

  challengeTheme: {
    color: GOLD,
    fontSize: 7.5,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },

  challengeDescription: {
    color: MUTED_CREAM,
    fontSize: 9,
    lineHeight: 1.6,
    textAlign: "justify",
    marginBottom: 11,
  },

  adviceBox: {
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: DARK_GOLD,
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 7,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  adviceText: {
    color: CREAM,
    fontSize: 8.5,
    lineHeight: 1.5,
  },

  emptyCard: {
    paddingVertical: 30,
    paddingHorizontal: 24,
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
  },

  emptyTitle: {
    color: GOLD,
    fontSize: 12,
    marginBottom: 9,
  },

  emptyText: {
    color: MUTED_CREAM,
    fontSize: 9.5,
    lineHeight: 1.6,
    textAlign: "center",
  },

  closingCard: {
    marginTop: 7,
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  closingText: {
    color: CREAM,
    fontSize: 9,
    lineHeight: 1.55,
    textAlign: "center",
  },
});

function ChallengeCard({
  challenge,
  index,
}: {
  challenge: HoroscopeChallenge;
  index: number;
}) {
  return (
    <View style={styles.challengeCard} wrap={false}>
      <View style={styles.challengeHeader}>
        <View style={styles.challengeNumber}>
          <Text style={styles.challengeNumberText}>
            0{index + 1}
          </Text>
        </View>

        <View style={styles.challengeHeading}>
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

      <Text style={styles.challengeDescription}>
        {challenge.description}
      </Text>

      {challenge.advice ? (
        <View style={styles.adviceBox}>
          <Text style={styles.adviceLabel}>
            Comment avancer
          </Text>

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

        <Text style={styles.eyebrow}>
          Défis de la période
        </Text>

        <Text style={styles.title}>
          Ce qui demande votre attention
        </Text>

        <Text style={styles.period}>
          {periodLabel}
        </Text>

        {content.challengesIntroduction ? (
          <View style={styles.introductionCard} wrap={false}>
            <Text style={styles.introductionText}>
              {content.challengesIntroduction}
            </Text>
          </View>
        ) : null}

        <Text style={styles.sectionLabel}>
          Vos principaux défis
        </Text>

        {challenges.length > 0 ? (
          <View style={styles.challengesContainer}>
            {challenges.map((challenge, index) => (
              <ChallengeCard
                key={`${challenge.title}-${index}`}
                challenge={challenge}
                index={index}
              />
            ))}
          </View>
        ) : (
          <View style={styles.emptyCard}>
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
