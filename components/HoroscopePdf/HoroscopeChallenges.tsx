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
    minHeight: 118,
    paddingVertical: 15,
    paddingHorizontal: 17,
    marginBottom: 11,
    borderRadius: 13,
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
    left: -60,
    width: 165,
    height: 165,
    borderRadius: 83,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  heroOrbitTwo: {
    position: "absolute",
    top: -30,
    left: -32,
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
  },

  heroIconOuter: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  heroIconInner: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 0.9,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  heroIcon: {
    width: 39,
    height: 39,
    objectFit: "contain",
  },

  heroContent: {
    flex: 1,
  },

  heroLabel: {
    color: GOLD,
    fontSize: 7.3,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  heroText: {
    color: MUTED_CREAM,
    fontSize: 8.5,
    lineHeight: 1.5,
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

  challengesContainer: {
    flexDirection: "column",
  },

  challengeCard: {
    position: "relative",
    paddingVertical: 13,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 13,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    overflow: "hidden",
  },

  challengeAccent: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: GOLD,
  },

  challengeHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  challengeIconOuter: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  challengeIconInner: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
  },

  challengeIcon: {
    width: 27,
    height: 27,
    objectFit: "contain",
  },

  challengeHeading: {
    flex: 1,
  },

  challengeTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  challengeMiniLabel: {
    color: SOFT_TEXT,
    fontSize: 6.5,
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },

  challengeNumber: {
    color: GOLD,
    fontSize: 7.2,
    letterSpacing: 1,
  },

  challengeTitle: {
    color: CREAM,
    fontSize: 11.2,
    lineHeight: 1.3,
    marginBottom: 5,
  },

  challengeTheme: {
    color: GOLD,
    fontSize: 7.3,
    letterSpacing: 0.9,
    textTransform: "uppercase",
  },

  challengeDescription: {
    color: MUTED_CREAM,
    fontSize: 8.6,
    lineHeight: 1.48,
    textAlign: "justify",
    marginBottom: 9,
  },

  adviceBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 9,
    paddingHorizontal: 11,
    borderRadius: 9,
    borderTopWidth: 0.5,
    borderTopColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
  },

  adviceIconCircle: {
    width: 31,
    height: 31,
    borderRadius: 16,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  adviceIcon: {
    width: 20,
    height: 20,
    objectFit: "contain",
  },

  adviceContent: {
    flex: 1,
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 6.9,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  adviceText: {
    color: CREAM,
    fontSize: 8.2,
    lineHeight: 1.42,
  },

  emptyCard: {
    paddingVertical: 28,
    paddingHorizontal: 24,
    borderRadius: 14,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    marginBottom: 11,
  },

  emptyIcon: {
    width: 42,
    height: 42,
    objectFit: "contain",
    marginBottom: 9,
  },

  emptyTitle: {
    color: GOLD,
    fontSize: 12,
    marginBottom: 8,
  },

  emptyText: {
    color: MUTED_CREAM,
    fontSize: 9,
    lineHeight: 1.45,
    textAlign: "center",
  },

  closingCard: {
    position: "relative",
    paddingVertical: 12,
    paddingHorizontal: 17,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  closingWatermark: {
    position: "absolute",
    right: 15,
    top: 4,
    width: 56,
    height: 56,
    objectFit: "contain",
    opacity: 0.07,
  },

  closingHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  closingIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginRight: 9,
  },

  closingLabel: {
    color: GOLD,
    fontSize: 7.2,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },

  closingText: {
    color: CREAM,
    fontSize: 8.6,
    lineHeight: 1.5,
  },
});

type ChallengeCardProps = {
  challenge: HoroscopeChallenge;
  index: number;
  icon: string;
};

function ChallengeCard({
  challenge,
  index,
  icon,
}: ChallengeCardProps) {
  return (
    <View style={styles.challengeCard} wrap={false}>
      <View style={styles.challengeAccent} />

      <View style={styles.challengeHeader}>
        <View style={styles.challengeIconOuter}>
          <View style={styles.challengeIconInner}>
            <Image
              src={icon}
              style={styles.challengeIcon}
            />
          </View>
        </View>

        <View style={styles.challengeHeading}>
          <View style={styles.challengeTopRow}>
            <Text style={styles.challengeMiniLabel}>
              Défi astrologique
            </Text>

            <Text style={styles.challengeNumber}>
              {String(index + 1).padStart(2, "0")}
            </Text>
          </View>

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
          <View style={styles.adviceIconCircle}>
            <Image
              src={HOROSCOPE_ICONS.integrationGuide}
              style={styles.adviceIcon}
            />
          </View>

          <View style={styles.adviceContent}>
            <Text style={styles.adviceLabel}>
              Comment avancer
            </Text>

            <Text style={styles.adviceText}>
              {challenge.advice}
            </Text>
          </View>
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

  const challengeIcons = [
    HOROSCOPE_ICONS.hiddenTalents,
    HOROSCOPE_ICONS.innerWorld,
    HOROSCOPE_ICONS.soulPath,
    HOROSCOPE_ICONS.lifePurpose,
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
              src={HOROSCOPE_ICONS.innerWorld}
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
                src={HOROSCOPE_ICONS.hiddenTalents}
                style={styles.heroIcon}
              />
            </View>
          </View>

          <View style={styles.heroContent}>
            <Text style={styles.heroLabel}>
              Regard sur la période
            </Text>

            <Text style={styles.heroText}>
              {content.challengesIntroduction ||
                "Cette période vous invite à observer les zones de tension avec lucidité. Chaque défi peut révéler une force cachée, une limite à respecter ou une nouvelle manière d’avancer."}
            </Text>
          </View>
        </View>

        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionHeaderLine} />

          <Image
            src={HOROSCOPE_ICONS.soulPath}
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
                icon={challengeIcons[index] || HOROSCOPE_ICONS.hiddenTalents}
              />
            ))}
          </View>
        ) : (
          <View style={styles.emptyCard} wrap={false}>
            <Image
              src={HOROSCOPE_ICONS.lifePurpose}
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
          <Image
            src={HOROSCOPE_ICONS.love}
            style={styles.closingWatermark}
          />

          <View style={styles.closingHeader}>
            <Image
              src={HOROSCOPE_ICONS.integrationGuide}
              style={styles.closingIcon}
            />

            <Text style={styles.closingLabel}>
              Transformer le défi
            </Text>
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
