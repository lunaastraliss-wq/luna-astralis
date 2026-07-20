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
const DEEP_GOLD = "#4E412D";

const ASTROLOGY_PATH = "/astrology";

const HEALTH_ICONS = {
  innerWorld: `${ASTROLOGY_PATH}/inner-world.png?v=2`,
  sun: `${ASTROLOGY_PATH}/sun.png?v=2`,
  moon: `${ASTROLOGY_PATH}/moon.png?v=2`,
  fourElements: `${ASTROLOGY_PATH}/four-elements.png?v=2`,
  integrationGuide: `${ASTROLOGY_PATH}/integration-guide.png?v=2`,
  lifePurpose: `${ASTROLOGY_PATH}/life-purpose.png?v=2`,
  soulPath: `${ASTROLOGY_PATH}/soul-path.png?v=2`,
  hiddenTalents: `${ASTROLOGY_PATH}/hidden-talents.png?v=2`,
};

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

  heroGlow: {
    position: "absolute",
    right: -34,
    top: -32,
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
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

  wellnessCard: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
  },

  wellnessHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  wellnessLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  wellnessIcon: {
    width: 16,
    height: 16,
    objectFit: "contain",
    marginRight: 7,
  },

  wellnessLabel: {
    color: CREAM,
    fontSize: 8.6,
  },

  wellnessValue: {
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

  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  balanceCard: {
    width: "48.5%",
    minHeight: 76,
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

  healthPath: {
    marginBottom: 9,
  },

  healthRow: {
    flexDirection: "row",
    alignItems: "stretch",
    marginBottom: 7,
  },

  healthRail: {
    width: 48,
    alignItems: "center",
  },

  healthCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  healthPointIcon: {
    width: 22,
    height: 22,
    objectFit: "contain",
  },

  healthLine: {
    flex: 1,
    width: 1,
    backgroundColor: DARK_GOLD,
    marginTop: 4,
  },

  healthPointCard: {
    flex: 1,
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  healthPointTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  healthPointLabel: {
    color: SOFT_TEXT,
    fontSize: 6.2,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  healthPointNumber: {
    color: GOLD,
    fontSize: 7,
    letterSpacing: 0.8,
  },

  healthPointText: {
    color: CREAM,
    fontSize: 8.1,
    lineHeight: 1.42,
  },

  routineRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  routineCard: {
    width: "31.5%",
    minHeight: 67,
    paddingVertical: 9,
    paddingHorizontal: 9,
    borderRadius: 9,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  routineHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  routineIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
    marginRight: 6,
  },

  routineTitle: {
    color: GOLD,
    fontSize: 8,
  },

  routineText: {
    color: MUTED_CREAM,
    fontSize: 6.8,
    lineHeight: 1.34,
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
    marginBottom: 8,
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

  disclaimerCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 9,
    borderWidth: 0.4,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  disclaimerIcon: {
    width: 12,
    height: 12,
    objectFit: "contain",
    marginRight: 7,
  },

  disclaimer: {
    flex: 1,
    color: SOFT_TEXT,
    fontSize: 6.8,
    lineHeight: 1.35,
    textAlign: "center",
  },
});

type HealthPointProps = {
  text: string;
  icon: string;
  index: number;
  isLast: boolean;
};

function HealthPoint({
  text,
  icon,
  index,
  isLast,
}: HealthPointProps) {
  return (
    <View style={styles.healthRow} wrap={false}>
      <View style={styles.healthRail}>
        <View style={styles.healthCircle}>
          <Image
            src={icon}
            style={styles.healthPointIcon}
          />
        </View>

        {!isLast ? (
          <View style={styles.healthLine} />
        ) : null}
      </View>

      <View style={styles.healthPointCard}>
        <View style={styles.healthPointTop}>
          <Text style={styles.healthPointLabel}>
            Point d’équilibre
          </Text>

          <Text style={styles.healthPointNumber}>
            {String(index + 1).padStart(2, "0")}
          </Text>
        </View>

        <Text style={styles.healthPointText}>
          {text}
        </Text>
      </View>
    </View>
  );
}

export default function HoroscopeHealth({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const healthScore = normalizeHoroscopeScore(
    content.health.score ?? content.scores.health,
  );

  const highlights = Array.isArray(content.health.highlights)
    ? content.health.highlights.slice(0, 4)
    : [];

  const healthIcons = [
    HEALTH_ICONS.innerWorld,
    HEALTH_ICONS.sun,
    HEALTH_ICONS.moon,
    HEALTH_ICONS.fourElements,
  ];

  const routineCards = [
    {
      title: "Respirer",
      text:
        "Ralentissez quelques instants afin de diminuer la tension et de retrouver un rythme plus naturel.",
      icon: HEALTH_ICONS.innerWorld,
    },
    {
      title: "Bouger",
      text:
        "Un mouvement doux et régulier aide à relancer l’énergie sans vous demander un effort excessif.",
      icon: HEALTH_ICONS.sun,
    },
    {
      title: "Récupérer",
      text:
        "Accordez une vraie place au repos afin que le corps et l’esprit puissent se rééquilibrer.",
      icon: HEALTH_ICONS.moon,
    },
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
            Bien-être et équilibre
          </Text>

          <Text style={styles.title}>
            Votre vitalité intérieure
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image
              src={HEALTH_ICONS.innerWorld}
              style={styles.titleIcon}
            />

            <View style={styles.titleLineSmall} />
          </View>
        </View>

        <View style={styles.heroCard} wrap={false}>
          <View style={styles.heroOrbitOne} />
          <View style={styles.heroOrbitTwo} />
          <View style={styles.heroGlow} />

          <View style={styles.heroIconOuter}>
            <View style={styles.heroIconInner}>
              <Image
                src={HEALTH_ICONS.innerWorld}
                style={styles.heroIcon}
              />
            </View>
          </View>

          <View style={styles.heroContent}>
            <View style={styles.heroTopRow}>
              <View style={styles.heroHeading}>
                <Text style={styles.heroLabel}>
                  Équilibre de la période
                </Text>

                <Text style={styles.heroTitle}>
                  {content.health.title}
                </Text>
              </View>

              <View style={styles.scoreBadge}>
                <Text style={styles.scoreValue}>
                  {healthScore}
                </Text>

                <Text style={styles.scoreMaximum}>
                  sur 100
                </Text>
              </View>
            </View>

            {content.health.introduction ? (
              <Text style={styles.heroIntroduction}>
                {content.health.introduction}
              </Text>
            ) : null}

            <Text style={styles.heroText}>
              {content.health.text}
            </Text>
          </View>
        </View>

        <View style={styles.wellnessCard} wrap={false}>
          <View style={styles.wellnessHeader}>
            <View style={styles.wellnessLeft}>
              <Image
                src={HEALTH_ICONS.fourElements}
                style={styles.wellnessIcon}
              />

              <Text style={styles.wellnessLabel}>
                Niveau de bien-être
              </Text>
            </View>

            <Text style={styles.wellnessValue}>
              {healthScore} %
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${healthScore}%`,
                },
              ]}
            />
          </View>
        </View>

        <View style={styles.balanceRow}>
          <View style={styles.balanceCard} wrap={false}>
            <View style={styles.balanceHeader}>
              <Image
                src={HEALTH_ICONS.sun}
                style={styles.balanceIcon}
              />

              <Text style={styles.balanceTitle}>
                Énergie physique
              </Text>
            </View>

            <Text style={styles.balanceText}>
              Respectez votre rythme corporel et privilégiez une progression régulière plutôt qu’un effort trop intense ou irrégulier.
            </Text>
          </View>

          <View style={styles.balanceCard} wrap={false}>
            <View style={styles.balanceHeader}>
              <Image
                src={HEALTH_ICONS.moon}
                style={styles.balanceIcon}
              />

              <Text style={styles.balanceTitle}>
                Équilibre émotionnel
              </Text>
            </View>

            <Text style={styles.balanceText}>
              Protégez votre espace intérieur et accordez-vous des moments de calme lorsque les émotions deviennent plus lourdes.
            </Text>
          </View>
        </View>

        {highlights.length > 0 ? (
          <>
            <View style={styles.sectionHeaderRow}>
              <View style={styles.sectionHeaderLine} />

              <Image
                src={HEALTH_ICONS.fourElements}
                style={styles.sectionHeaderIcon}
              />

              <Text style={styles.sectionLabel}>
                Les points d’équilibre
              </Text>
            </View>

            <View style={styles.healthPath}>
              {highlights.map((highlight, index) => (
                <HealthPoint
                  key={`${highlight}-${index}`}
                  text={highlight}
                  icon={
                    healthIcons[index] ||
                    HEALTH_ICONS.innerWorld
                  }
                  index={index}
                  isLast={index === highlights.length - 1}
                />
              ))}
            </View>
          </>
        ) : null}

        <View style={styles.routineRow}>
          {routineCards.map((item) => (
            <View
              key={item.title}
              style={styles.routineCard}
              wrap={false}
            >
              <View style={styles.routineHeader}>
                <Image
                  src={item.icon}
                  style={styles.routineIcon}
                />

                <Text style={styles.routineTitle}>
                  {item.title}
                </Text>
              </View>

              <Text style={styles.routineText}>
                {item.text}
              </Text>
            </View>
          ))}
        </View>

        {content.health.advice ? (
          <View style={styles.adviceCard} wrap={false}>
            <Image
              src={HEALTH_ICONS.integrationGuide}
              style={styles.adviceWatermark}
            />

            <View style={styles.adviceIconCircle}>
              <Image
                src={HEALTH_ICONS.integrationGuide}
                style={styles.adviceIcon}
              />
            </View>

            <View style={styles.adviceContent}>
              <Text style={styles.adviceLabel}>
                Conseil bien-être
              </Text>

              <Text style={styles.adviceText}>
                {content.health.advice}
              </Text>
            </View>
          </View>
        ) : null}

        <View style={styles.disclaimerCard} wrap={false}>
          <Image
            src={HEALTH_ICONS.integrationGuide}
            style={styles.disclaimerIcon}
          />

          <Text style={styles.disclaimer}>
            Cette section présente une lecture astrologique du bien-être et ne remplace pas un avis médical.
          </Text>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
