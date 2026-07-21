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
    paddingTop: 32,
    paddingHorizontal: 42,
    paddingBottom: 52,
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
    marginBottom: 12,
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
    minHeight: 142,
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
    top: -58,
    left: -54,
    width: 168,
    height: 168,
    borderRadius: 84,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  heroOrbitTwo: {
    position: "absolute",
    top: -24,
    left: -22,
    width: 106,
    height: 106,
    borderRadius: 53,
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
    fontSize: 12.3,
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

  opportunitiesList: {
    marginBottom: 9,
  },

  opportunityRow: {
    flexDirection: "row",
    alignItems: "stretch",
    marginBottom: 7,
  },

  opportunityRail: {
    width: 48,
    alignItems: "center",
  },

  opportunityCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  opportunityIcon: {
    width: 22,
    height: 22,
    objectFit: "contain",
  },

  opportunityLine: {
    flex: 1,
    width: 1,
    backgroundColor: DARK_GOLD,
    marginTop: 4,
  },

  opportunityCard: {
    flex: 1,
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  opportunityTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  opportunityHeading: {
    flex: 1,
    paddingRight: 8,
  },

  opportunityTitle: {
    color: GOLD,
    fontSize: 8.9,
    lineHeight: 1.35,
  },

  opportunityTheme: {
    color: SOFT_TEXT,
    fontSize: 6.1,
    letterSpacing: 0.9,
    textTransform: "uppercase",
    marginTop: 2,
  },

  opportunityNumber: {
    color: GOLD,
    fontSize: 7,
    letterSpacing: 0.8,
  },

  opportunityText: {
    color: CREAM,
    fontSize: 7.5,
    lineHeight: 1.38,
    marginBottom: 3,
  },

  opportunityAction: {
    color: MUTED_CREAM,
    fontSize: 6.9,
    lineHeight: 1.34,
    fontStyle: "italic",
  },

  guidanceCard: {
    position: "relative",
    flexDirection: "row",
    alignItems: "flex-start",
    minHeight: 74,
    paddingVertical: 11,
    paddingHorizontal: 14,
    marginBottom: 8,
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
    right: 12,
    top: 6,
    width: 52,
    height: 52,
    objectFit: "contain",
    opacity: 0.06,
  },

  guidanceIconCircle: {
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

  guidanceIcon: {
    width: 24,
    height: 24,
    objectFit: "contain",
  },

  guidanceContent: {
    flex: 1,
  },

  guidanceLabel: {
    color: SOFT_TEXT,
    fontSize: 6.6,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  guidanceTitle: {
    color: GOLD,
    fontSize: 9.8,
    lineHeight: 1.3,
    marginBottom: 4,
  },

  guidanceText: {
    color: MUTED_CREAM,
    fontSize: 7.9,
    lineHeight: 1.42,
  },

  actionPath: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  actionStep: {
    width: "31.5%",
    minHeight: 64,
    paddingVertical: 9,
    paddingHorizontal: 9,
    borderRadius: 9,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  actionStepHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  actionStepIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
    marginRight: 6,
  },

  actionStepTitle: {
    color: GOLD,
    fontSize: 8,
  },

  actionStepText: {
    color: MUTED_CREAM,
    fontSize: 6.8,
    lineHeight: 1.32,
  },

  adviceCard: {
    position: "relative",
    flexDirection: "row",
    alignItems: "flex-start",
    minHeight: 76,
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

function getOpportunityGuidance(score: number) {
  if (score >= 75) {
    return {
      title: "Une ouverture à saisir",
      text:
        "La période favorise les initiatives, les rencontres utiles et les occasions capables de faire évoluer un projet. Restez attentif aux signes concrets et avancez avec discernement.",
    };
  }

  if (score >= 50) {
    return {
      title: "Un potentiel à observer",
      text:
        "Des possibilités existent, mais elles demandent du tri et de la patience. Toutes les ouvertures ne méritent pas la même énergie : choisissez celles qui correspondent vraiment à vos priorités.",
    };
  }

  return {
    title: "Une période de préparation",
    text:
      "Les opportunités peuvent être plus discrètes. Utilisez ce temps pour clarifier vos objectifs, consolider vos bases et préparer le terrain avant de vous engager davantage.",
  };
}

type OpportunityItemProps = {
  title: string;
  theme?: string;
  description: string;
  action?: string;
  icon: string;
  index: number;
  isLast: boolean;
};

function OpportunityItem({
  title,
  theme,
  description,
  action,
  icon,
  index,
  isLast,
}: OpportunityItemProps) {
  return (
    <View style={styles.opportunityRow} wrap={false}>
      <View style={styles.opportunityRail}>
        <View style={styles.opportunityCircle}>
          <Image
            src={icon}
            style={styles.opportunityIcon}
          />
        </View>

        {!isLast ? (
          <View style={styles.opportunityLine} />
        ) : null}
      </View>

      <View style={styles.opportunityCard}>
        <View style={styles.opportunityTop}>
          <View style={styles.opportunityHeading}>
            <Text style={styles.opportunityTitle}>
              {title}
            </Text>

            {theme ? (
              <Text style={styles.opportunityTheme}>
                {theme}
              </Text>
            ) : null}
          </View>

          <Text style={styles.opportunityNumber}>
            {String(index + 1).padStart(2, "0")}
          </Text>
        </View>

        <Text style={styles.opportunityText}>
          {description}
        </Text>

        {action ? (
          <Text style={styles.opportunityAction}>
            {action}
          </Text>
        ) : null}
      </View>
    </View>
  );
}

export default function HoroscopeOpportunities({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const opportunityScore = normalizeHoroscopeScore(
    content.scores.career,
  );

  const opportunities = Array.isArray(content.opportunities)
    ? content.opportunities.slice(0, 4)
    : [];

  const guidance = getOpportunityGuidance(opportunityScore);

  const actionCards = [
    {
      title: "Repérer",
      text:
        "Observez les propositions, les rencontres et les idées qui reviennent avec insistance.",
      icon: HOROSCOPE_ICONS.moon,
    },
    {
      title: "Évaluer",
      text:
        "Vérifiez si l’occasion respecte vos priorités, votre énergie et votre véritable direction.",
      icon: HOROSCOPE_ICONS.innerWorld,
    },
    {
      title: "Avancer",
      text:
        "Choisissez une action simple afin de transformer une possibilité en mouvement réel.",
      icon: HOROSCOPE_ICONS.sun,
    },
  ];

  const firstOpportunity = opportunities[0];

  const sectionTitle =
    firstOpportunity?.title || "Vos ouvertures du moment";

  const introduction =
    content.opportunitiesIntroduction ||
    "Cette période met en lumière les occasions, les rencontres et les mouvements capables de faire évoluer votre situation.";

  const mainText =
    firstOpportunity?.description ||
    "Les opportunités les plus utiles ne sont pas toujours les plus spectaculaires. Elles peuvent apparaître sous la forme d’une conversation, d’une proposition ou d’une idée nouvelle.";

  const advice =
    opportunities.find((opportunity) => opportunity.action)?.action ||
    "Restez disponible aux nouvelles possibilités tout en prenant le temps de vérifier qu’elles correspondent réellement à votre chemin.";

  const opportunityIcons = [
    HOROSCOPE_ICONS.lifePurpose,
    HOROSCOPE_ICONS.hiddenTalents,
    HOROSCOPE_ICONS.jupiter,
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
            Opportunités et ouvertures
          </Text>

          <Text style={styles.title}>
            Les portes qui peuvent s’ouvrir
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
                  Potentiel de la période
                </Text>

                <Text style={styles.heroTitle}>
                  {sectionTitle}
                </Text>
              </View>

              <View style={styles.scoreBadge}>
                <Text style={styles.scoreValue}>
                  {opportunityScore}
                </Text>

                <Text style={styles.scoreMaximum}>
                  sur 100
                </Text>
              </View>
            </View>

            <Text style={styles.heroIntroduction}>
              {introduction}
            </Text>

            <Text style={styles.heroText}>
              {mainText}
            </Text>
          </View>
        </View>

        <View style={styles.potentialCard} wrap={false}>
          <View style={styles.potentialHeader}>
            <View style={styles.potentialLeft}>
              <Image
                src={HOROSCOPE_ICONS.jupiter}
                style={styles.potentialIcon}
              />

              <Text style={styles.potentialLabel}>
                Niveau d’ouverture de la période
              </Text>
            </View>

            <Text style={styles.potentialValue}>
              {opportunityScore} %
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${opportunityScore}%`,
                },
              ]}
            />
          </View>
        </View>

        {opportunities.length > 0 ? (
          <>
            <View style={styles.sectionHeaderRow}>
              <View style={styles.sectionHeaderLine} />

              <Image
                src={HOROSCOPE_ICONS.soulPath}
                style={styles.sectionHeaderIcon}
              />

              <Text style={styles.sectionLabel}>
                Opportunités à reconnaître
              </Text>
            </View>

            <View style={styles.opportunitiesList}>
              {opportunities.map((opportunity, index) => (
                <OpportunityItem
                  key={`opportunity-${index}`}
                  title={opportunity.title}
                  theme={opportunity.theme}
                  description={opportunity.description}
                  action={opportunity.action}
                  icon={
                    opportunityIcons[index] ||
                    HOROSCOPE_ICONS.lifePurpose
                  }
                  index={index}
                  isLast={index === opportunities.length - 1}
                />
              ))}
            </View>
          </>
        ) : null}

        <View style={styles.guidanceCard} wrap={false}>
          <Image
            src={HOROSCOPE_ICONS.hiddenTalents}
            style={styles.guidanceWatermark}
          />

          <View style={styles.guidanceIconCircle}>
            <Image
              src={HOROSCOPE_ICONS.hiddenTalents}
              style={styles.guidanceIcon}
            />
          </View>

          <View style={styles.guidanceContent}>
            <Text style={styles.guidanceLabel}>
              Tendance générale
            </Text>

            <Text style={styles.guidanceTitle}>
              {guidance.title}
            </Text>

            <Text style={styles.guidanceText}>
              {guidance.text}
            </Text>
          </View>
        </View>

        <View style={styles.actionPath}>
          {actionCards.map((action) => (
            <View
              key={action.title}
              style={styles.actionStep}
              wrap={false}
            >
              <View style={styles.actionStepHeader}>
                <Image
                  src={action.icon}
                  style={styles.actionStepIcon}
                />

                <Text style={styles.actionStepTitle}>
                  {action.title}
                </Text>
              </View>

              <Text style={styles.actionStepText}>
                {action.text}
              </Text>
            </View>
          ))}
        </View>

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
              Conseil pour saisir l’occasion
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
