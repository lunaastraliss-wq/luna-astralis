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
    paddingTop: 40,
    paddingHorizontal: 44,
    paddingBottom: 58,
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
    fontSize: 25,
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
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 14,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 14,
  },

  mainHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 11,
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
    fontSize: 12.8,
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
    marginBottom: 10,
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
    fontSize: 8.9,
    lineHeight: 1.5,
    marginBottom: 8,
  },

  mainText: {
    color: CREAM,
    fontSize: 9.4,
    lineHeight: 1.55,
    textAlign: "justify",
  },

  progressCard: {
    paddingVertical: 12,
    paddingHorizontal: 17,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    marginBottom: 14,
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
    fontSize: 8.7,
  },

  progressValue: {
    color: GOLD,
    fontSize: 8.7,
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
    marginBottom: 9,
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
    fontSize: 9.6,
    letterSpacing: 1.45,
    textTransform: "uppercase",
  },

  opportunitiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  opportunityCard: {
    width: "48.5%",
    minHeight: 90,
    paddingVertical: 10,
    paddingHorizontal: 11,
    marginBottom: 9,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  opportunityTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  opportunityNumberCircle: {
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

  opportunityNumber: {
    color: GOLD,
    fontSize: 7,
  },

  opportunityIcon: {
    width: 12,
    height: 12,
    objectFit: "contain",
  },

  opportunityTitle: {
    color: GOLD,
    fontSize: 8.2,
    lineHeight: 1.3,
    marginBottom: 3,
  },

  opportunityTheme: {
    color: SOFT_TEXT,
    fontSize: 6.3,
    letterSpacing: 0.9,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  opportunityText: {
    color: CREAM,
    fontSize: 7.2,
    lineHeight: 1.35,
    marginBottom: 4,
  },

  opportunityAction: {
    color: MUTED_CREAM,
    fontSize: 6.7,
    lineHeight: 1.32,
    fontStyle: "italic",
  },

  guidanceCard: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 9,
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
    fontSize: 7.8,
    lineHeight: 1.42,
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  actionCard: {
    width: "32%",
    minHeight: 62,
    paddingVertical: 8,
    paddingHorizontal: 9,
    borderRadius: 9,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  actionNumberCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },

  actionNumber: {
    color: GOLD,
    fontSize: 7,
  },

  actionTitle: {
    color: GOLD,
    fontSize: 7.9,
    marginBottom: 3,
  },

  actionText: {
    color: MUTED_CREAM,
    fontSize: 6.5,
    lineHeight: 1.32,
  },

  adviceCard: {
    paddingVertical: 12,
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
    fontSize: 8.4,
    lineHeight: 1.45,
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
    },
    {
      title: "Évaluer",
      text:
        "Vérifiez si l’occasion respecte vos priorités, votre énergie et votre véritable direction.",
    },
    {
      title: "Avancer",
      text:
        "Choisissez une action simple afin de transformer une possibilité en mouvement réel.",
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

  return (
    <Page size="A4" style={styles.page} wrap={false}>
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
                Potentiel de la période
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
                  {opportunityScore}
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
                Niveau d’ouverture de la période
              </Text>
            </View>

            <Text style={styles.progressValue}>
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
            <View style={styles.highlightsHeader}>
              <View style={styles.highlightsHeaderLine} />

              <Image
                src={zodiacIconUrl}
                style={styles.highlightsHeaderIcon}
              />

              <Text style={styles.highlightsTitle}>
                Opportunités à reconnaître
              </Text>
            </View>

            <View style={styles.opportunitiesGrid}>
              {opportunities.map((opportunity, index) => (
                <View
                  key={`opportunity-${index}`}
                  style={styles.opportunityCard}
                  wrap={false}
                >
                  <View style={styles.opportunityTopRow}>
                    <View style={styles.opportunityNumberCircle}>
                      <Text style={styles.opportunityNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </Text>
                    </View>

                    <Image
                      src={zodiacIconUrl}
                      style={styles.opportunityIcon}
                    />
                  </View>

                  <Text style={styles.opportunityTitle}>
                    {opportunity.title}
                  </Text>

                  {opportunity.theme ? (
                    <Text style={styles.opportunityTheme}>
                      {opportunity.theme}
                    </Text>
                  ) : null}

                  <Text style={styles.opportunityText}>
                    {opportunity.description}
                  </Text>

                  {opportunity.action ? (
                    <Text style={styles.opportunityAction}>
                      {opportunity.action}
                    </Text>
                  ) : null}
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
                Tendance générale
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
              Conseil pour saisir l’occasion
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
