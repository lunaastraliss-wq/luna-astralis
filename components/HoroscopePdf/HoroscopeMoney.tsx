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

const MONEY_ICONS = {
  money: `${ASTROLOGY_PATH}/money.png?v=2`,
  jupiter: `${ASTROLOGY_PATH}/jupiter.png?v=2`,
  lifePurpose: `${ASTROLOGY_PATH}/life-purpose.png?v=2`,
  integrationGuide: `${ASTROLOGY_PATH}/integration-guide.png?v=2`,
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
    width: 78,
    height: 78,
    borderRadius: 39,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  heroIconInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  heroIcon: {
    width: 47,
    height: 47,
    objectFit: "contain",
  },

  heroBody: {
    flex: 1,
    paddingRight: 12,
  },

  heroMiniLabel: {
    color: SOFT_TEXT,
    fontSize: 6.9,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  heroTitle: {
    color: GOLD,
    fontSize: 13,
    lineHeight: 1.35,
    marginBottom: 7,
  },

  heroIntroduction: {
    color: MUTED_CREAM,
    fontSize: 8.1,
    lineHeight: 1.45,
    marginBottom: 6,
  },

  heroText: {
    color: CREAM,
    fontSize: 8.6,
    lineHeight: 1.48,
    textAlign: "justify",
  },

  scoreBox: {
    width: 58,
    alignItems: "center",
  },

  scoreCircleOuter: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },

  scoreCircleInner: {
    width: 47,
    height: 47,
    borderRadius: 23.5,
    borderWidth: 1,
    borderColor: GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreValue: {
    color: GOLD,
    fontSize: 17,
  },

  scoreMaximum: {
    color: SOFT_TEXT,
    fontSize: 6,
  },

  scoreLabel: {
    color: MUTED_CREAM,
    fontSize: 6.2,
    textAlign: "center",
    lineHeight: 1.25,
  },

  progressCard: {
    paddingVertical: 11,
    paddingHorizontal: 14,
    marginBottom: 11,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  progressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 7,
  },

  progressLabelRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  progressIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
    marginRight: 7,
  },

  progressLabel: {
    color: CREAM,
    fontSize: 8.1,
  },

  progressValue: {
    color: GOLD,
    fontSize: 8.6,
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

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  sectionLine: {
    width: 24,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  sectionIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
    marginRight: 8,
  },

  sectionTitle: {
    color: GOLD,
    fontSize: 9.2,
    letterSpacing: 1.45,
    textTransform: "uppercase",
  },

  timeline: {
    position: "relative",
    marginBottom: 10,
    paddingLeft: 4,
  },

  timelineLine: {
    position: "absolute",
    top: 10,
    bottom: 10,
    left: 16,
    width: 1,
    backgroundColor: DEEP_GOLD,
  },

  timelineItem: {
    position: "relative",
    flexDirection: "row",
    minHeight: 42,
    marginBottom: 6,
  },

  timelineMarker: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    zIndex: 2,
  },

  timelineNumber: {
    color: GOLD,
    fontSize: 6.6,
  },

  timelineContent: {
    flex: 1,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 9,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  timelineText: {
    color: CREAM,
    fontSize: 7.5,
    lineHeight: 1.4,
  },

  guidanceCard: {
    position: "relative",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  guidanceWatermark: {
    position: "absolute",
    right: -6,
    bottom: -14,
    width: 72,
    height: 72,
    objectFit: "contain",
    opacity: 0.06,
  },

  guidanceIconCircle: {
    width: 37,
    height: 37,
    borderRadius: 18.5,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  guidanceIcon: {
    width: 25,
    height: 25,
    objectFit: "contain",
  },

  guidanceBody: {
    flex: 1,
  },

  guidanceLabel: {
    color: SOFT_TEXT,
    fontSize: 6.6,
    letterSpacing: 1.15,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  guidanceTitle: {
    color: GOLD,
    fontSize: 9.6,
    lineHeight: 1.3,
    marginBottom: 4,
  },

  guidanceText: {
    color: MUTED_CREAM,
    fontSize: 7.5,
    lineHeight: 1.42,
    paddingRight: 18,
  },

  strategyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  strategyCard: {
    position: "relative",
    width: "48.7%",
    minHeight: 76,
    paddingVertical: 10,
    paddingHorizontal: 11,
    borderRadius: 10,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    overflow: "hidden",
  },

  strategyWatermark: {
    position: "absolute",
    right: -8,
    bottom: -11,
    width: 55,
    height: 55,
    objectFit: "contain",
    opacity: 0.055,
  },

  strategyHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  strategyIconBox: {
    width: 27,
    height: 27,
    borderRadius: 13.5,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  strategyIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
  },

  strategyTitle: {
    color: GOLD,
    fontSize: 8.2,
  },

  strategyText: {
    color: MUTED_CREAM,
    fontSize: 6.8,
    lineHeight: 1.38,
    paddingRight: 7,
  },

  adviceCard: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 65,
    paddingVertical: 11,
    paddingHorizontal: 13,
    borderRadius: 11,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    borderTopWidth: 1.3,
    borderTopColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  adviceWatermark: {
    position: "absolute",
    right: -8,
    bottom: -14,
    width: 78,
    height: 78,
    objectFit: "contain",
    opacity: 0.055,
  },

  adviceIconCircle: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  adviceIcon: {
    width: 24,
    height: 24,
    objectFit: "contain",
  },

  adviceContent: {
    flex: 1,
    paddingRight: 25,
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 7,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  adviceText: {
    color: CREAM,
    fontSize: 7.8,
    lineHeight: 1.45,
  },
});

function getFinancialGuidance(score: number) {
  if (score >= 75) {
    return {
      title: "Une période favorable à consolider",
      text:
        "Votre climat financier paraît porteur. Utilisez cette stabilité pour renforcer ce qui fonctionne déjà, négocier avec méthode et préparer la suite sans céder aux dépenses impulsives.",
    };
  }

  if (score >= 50) {
    return {
      title: "Un équilibre à préserver",
      text:
        "Le potentiel est intéressant, mais il demande de la vigilance. Comparez les options, vérifiez les détails et protégez votre marge de sécurité avant de vous engager.",
    };
  }

  return {
    title: "Une période qui demande de la prudence",
    text:
      "Ralentissez et revenez à l’essentiel. Priorisez les dépenses importantes, évitez les décisions sous pression et cherchez une meilleure visibilité sur vos ressources.",
  };
}

export default function HoroscopeMoney({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const moneyScore = normalizeHoroscopeScore(
    content.money.score ?? content.scores.money,
  );

  const highlights = Array.isArray(content.money.highlights)
    ? content.money.highlights.slice(0, 4)
    : [];

  const guidance = getFinancialGuidance(moneyScore);

  const sectionTitle =
    content.money.title || "Votre climat financier";

  const introduction =
    content.money.introduction ||
    "Cette période met en lumière votre rapport à la sécurité, aux ressources et aux décisions matérielles.";

  const mainText =
    content.money.text ||
    "Votre situation financière gagne à être abordée avec méthode. Les meilleures décisions seront celles qui respectent vos priorités réelles, votre rythme et votre besoin de stabilité.";

  const advice =
    content.money.advice ||
    "Choisissez une action financière simple et concrète à accomplir pendant cette période.";

  const strategies = [
    {
      title: "Développer",
      text:
        "Repérez les possibilités capables de soutenir vos ressources, vos projets ou votre autonomie à plus long terme.",
      icon: MONEY_ICONS.jupiter,
    },
    {
      title: "Sécuriser",
      text:
        "Protégez votre marge de manœuvre en vérifiant les chiffres, les conditions et les engagements récurrents.",
      icon: MONEY_ICONS.integrationGuide,
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
            Finances et sécurité
          </Text>

          <Text style={styles.title}>
            Votre climat financier
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image
              src={MONEY_ICONS.money}
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
                src={MONEY_ICONS.money}
                style={styles.heroIcon}
              />
            </View>
          </View>

          <View style={styles.heroBody}>
            <Text style={styles.heroMiniLabel}>
              Lecture personnalisée
            </Text>

            <Text style={styles.heroTitle}>
              {sectionTitle}
            </Text>

            <Text style={styles.heroIntroduction}>
              {introduction}
            </Text>

            <Text style={styles.heroText}>
              {mainText}
            </Text>
          </View>

          <View style={styles.scoreBox}>
            <View style={styles.scoreCircleOuter}>
              <View style={styles.scoreCircleInner}>
                <Text style={styles.scoreValue}>
                  {moneyScore}
                </Text>

                <Text style={styles.scoreMaximum}>
                  / 100
                </Text>
              </View>
            </View>

            <Text style={styles.scoreLabel}>
              potentiel financier
            </Text>
          </View>
        </View>

        <View style={styles.progressCard} wrap={false}>
          <View style={styles.progressHeader}>
            <View style={styles.progressLabelRow}>
              <Image
                src={MONEY_ICONS.money}
                style={styles.progressIcon}
              />

              <Text style={styles.progressLabel}>
                Potentiel financier de la période
              </Text>
            </View>

            <Text style={styles.progressValue}>
              {moneyScore} %
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${moneyScore}%`,
                },
              ]}
            />
          </View>
        </View>

        {highlights.length > 0 ? (
          <>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionLine} />

              <Image
                src={MONEY_ICONS.money}
                style={styles.sectionIcon}
              />

              <Text style={styles.sectionTitle}>
                Points financiers importants
              </Text>
            </View>

            <View style={styles.timeline}>
              <View style={styles.timelineLine} />

              {highlights.map((highlight, index) => (
                <View
                  key={`${highlight}-${index}`}
                  style={styles.timelineItem}
                  wrap={false}
                >
                  <View style={styles.timelineMarker}>
                    <Text style={styles.timelineNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </Text>
                  </View>

                  <View style={styles.timelineContent}>
                    <Text style={styles.timelineText}>
                      {highlight}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </>
        ) : null}

        <View style={styles.guidanceCard} wrap={false}>
          <Image
            src={MONEY_ICONS.money}
            style={styles.guidanceWatermark}
          />

          <View style={styles.guidanceIconCircle}>
            <Image
              src={MONEY_ICONS.money}
              style={styles.guidanceIcon}
            />
          </View>

          <View style={styles.guidanceBody}>
            <Text style={styles.guidanceLabel}>
              Tendance financière
            </Text>

            <Text style={styles.guidanceTitle}>
              {guidance.title}
            </Text>

            <Text style={styles.guidanceText}>
              {guidance.text}
            </Text>
          </View>
        </View>

        <View style={styles.strategyRow}>
          {strategies.map((strategy) => (
            <View
              key={strategy.title}
              style={styles.strategyCard}
              wrap={false}
            >
              <Image
                src={strategy.icon}
                style={styles.strategyWatermark}
              />

              <View style={styles.strategyHeader}>
                <View style={styles.strategyIconBox}>
                  <Image
                    src={strategy.icon}
                    style={styles.strategyIcon}
                  />
                </View>

                <Text style={styles.strategyTitle}>
                  {strategy.title}
                </Text>
              </View>

              <Text style={styles.strategyText}>
                {strategy.text}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.adviceCard} wrap={false}>
          <Image
            src={MONEY_ICONS.money}
            style={styles.adviceWatermark}
          />

          <View style={styles.adviceIconCircle}>
            <Image
              src={MONEY_ICONS.money}
              style={styles.adviceIcon}
            />
          </View>

          <View style={styles.adviceContent}>
            <Text style={styles.adviceLabel}>
              Conseil de la période
            </Text>

            <Text style={styles.adviceText}>
              {advice}
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
