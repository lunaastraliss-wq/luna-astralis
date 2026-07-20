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
    paddingBottom: 50,
    backgroundColor: NAVY,
    fontFamily: "Helvetica",
  },

  outerBorder: {
    position: "absolute",
    top: 18,
    right: 18,
    bottom: 18,
    left: 18,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
  },

  innerBorder: {
    position: "absolute",
    top: 23,
    right: 23,
    bottom: 23,
    left: 23,
    borderWidth: 0.25,
    borderColor: DARK_GOLD,
  },

  cornerTopLeft: {
    position: "absolute",
    top: 18,
    left: 18,
    width: 34,
    height: 34,
    borderTopWidth: 1.6,
    borderLeftWidth: 1.6,
    borderColor: GOLD,
  },

  cornerTopRight: {
    position: "absolute",
    top: 18,
    right: 18,
    width: 34,
    height: 34,
    borderTopWidth: 1.6,
    borderRightWidth: 1.6,
    borderColor: GOLD,
  },

  cornerBottomLeft: {
    position: "absolute",
    bottom: 18,
    left: 18,
    width: 34,
    height: 34,
    borderBottomWidth: 1.6,
    borderLeftWidth: 1.6,
    borderColor: GOLD,
  },

  cornerBottomRight: {
    position: "absolute",
    right: 18,
    bottom: 18,
    width: 34,
    height: 34,
    borderRightWidth: 1.6,
    borderBottomWidth: 1.6,
    borderColor: GOLD,
  },

  content: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  logo: {
    width: 104,
    height: 37,
    objectFit: "contain",
  },

  signBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 11,
    borderRadius: 18,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  signIcon: {
    width: 20,
    height: 20,
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
    marginBottom: 15,
  },

  eyebrow: {
    color: GOLD,
    fontSize: 8.5,
    letterSpacing: 2.2,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  title: {
    color: CREAM,
    fontSize: 24,
    lineHeight: 1.15,
    marginBottom: 6,
  },

  period: {
    color: MUTED_CREAM,
    fontSize: 9.5,
    marginBottom: 10,
  },

  titleDecoration: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleLine: {
    width: 62,
    height: 1,
    backgroundColor: GOLD,
  },

  titleDiamond: {
    width: 7,
    height: 7,
    marginHorizontal: 8,
    borderWidth: 0.8,
    borderColor: GOLD,
    transform: "rotate(45deg)",
  },

  titleLineSmall: {
    width: 24,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  mainCardOuter: {
    padding: 4,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    marginBottom: 13,
  },

  mainCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 17,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  mainTextColumn: {
    flex: 1,
    paddingRight: 15,
  },

  miniLabel: {
    color: SOFT_TEXT,
    fontSize: 7,
    letterSpacing: 1.25,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  sectionIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginRight: 8,
  },

  sectionTitle: {
    flex: 1,
    color: GOLD,
    fontSize: 12.5,
    lineHeight: 1.3,
  },

  introduction: {
    color: MUTED_CREAM,
    fontSize: 8.7,
    lineHeight: 1.5,
    marginBottom: 7,
  },

  mainText: {
    color: CREAM,
    fontSize: 9.3,
    lineHeight: 1.55,
    textAlign: "justify",
  },

  scoreOuter: {
    width: 78,
    height: 78,
    borderRadius: 39,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreCircle: {
    width: 66,
    height: 66,
    borderRadius: 33,
    borderWidth: 1,
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

  progressCard: {
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    marginBottom: 13,
  },

  progressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 7,
  },

  progressLabel: {
    color: CREAM,
    fontSize: 8.5,
  },

  progressValue: {
    color: GOLD,
    fontSize: 8.5,
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

  progressDescription: {
    color: SOFT_TEXT,
    fontSize: 7.2,
    lineHeight: 1.4,
    marginTop: 7,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  sectionHeaderLine: {
    width: 25,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  sectionHeaderIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
    marginRight: 8,
  },

  sectionHeaderTitle: {
    color: GOLD,
    fontSize: 9.2,
    letterSpacing: 1.35,
    textTransform: "uppercase",
  },

  highlightsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  highlightCard: {
    width: "48.5%",
    minHeight: 56,
    paddingVertical: 9,
    paddingHorizontal: 11,
    marginBottom: 8,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  highlightHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  highlightNumberCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },

  highlightNumber: {
    color: GOLD,
    fontSize: 7,
  },

  highlightIcon: {
    width: 12,
    height: 12,
    objectFit: "contain",
  },

  highlightText: {
    color: CREAM,
    fontSize: 7.8,
    lineHeight: 1.4,
  },

  guidanceAndActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  guidanceCard: {
    width: "39%",
    paddingVertical: 12,
    paddingHorizontal: 13,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  guidanceIconFrame: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  guidanceIcon: {
    width: 20,
    height: 20,
    objectFit: "contain",
  },

  guidanceLabel: {
    color: SOFT_TEXT,
    fontSize: 6.8,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  guidanceTitle: {
    color: GOLD,
    fontSize: 9.5,
    lineHeight: 1.35,
    marginBottom: 6,
  },

  guidanceText: {
    color: MUTED_CREAM,
    fontSize: 7.5,
    lineHeight: 1.43,
  },

  actionsColumn: {
    width: "58.5%",
  },

  actionCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 6,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  actionNumberCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  actionNumber: {
    color: GOLD,
    fontSize: 7,
  },

  actionContent: {
    flex: 1,
  },

  actionTitle: {
    color: GOLD,
    fontSize: 8.2,
    marginBottom: 3,
  },

  actionText: {
    color: MUTED_CREAM,
    fontSize: 7.1,
    lineHeight: 1.38,
  },

  adviceCard: {
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderTopWidth: 1.2,
    borderTopColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  adviceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  adviceIconFrame: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  adviceIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 7.5,
    letterSpacing: 1.25,
    textTransform: "uppercase",
  },

  adviceText: {
    color: CREAM,
    fontSize: 8.4,
    lineHeight: 1.48,
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
    content.opportunities.score ?? content.scores.opportunities,
  );

  const highlights = Array.isArray(content.opportunities.highlights)
    ? content.opportunities.highlights.slice(0, 4)
    : [];

  const guidance = getOpportunityGuidance(opportunityScore);

  const actionCards = [
    {
      title: "Repérer",
      text:
        "Observez les nouvelles propositions, les rencontres et les idées qui reviennent avec insistance pendant la période.",
    },
    {
      title: "Évaluer",
      text:
        "Vérifiez si l’occasion respecte vos priorités, votre énergie disponible et la direction que vous souhaitez réellement prendre.",
    },
    {
      title: "Avancer",
      text:
        "Choisissez une action simple et concrète afin de transformer une possibilité intéressante en mouvement réel.",
    },
  ];

  const sectionTitle =
    content.opportunities.title || "Vos ouvertures du moment";

  const introduction =
    content.opportunities.introduction ||
    "Cette période met en lumière les occasions, les rencontres et les mouvements capables de faire évoluer votre situation.";

  const mainText =
    content.opportunities.text ||
    "Les opportunités les plus utiles ne sont pas toujours les plus spectaculaires. Elles peuvent apparaître sous la forme d’une conversation, d’une proposition, d’une idée nouvelle ou d’un changement de perspective.";

  const advice =
    content.opportunities.advice ||
    "Restez disponible aux nouvelles possibilités, tout en prenant le temps de vérifier qu’elles correspondent vraiment à votre chemin.";

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.outerBorder} fixed />
      <View style={styles.innerBorder} fixed />
      <View style={styles.cornerTopLeft} fixed />
      <View style={styles.cornerTopRight} fixed />
      <View style={styles.cornerBottomLeft} fixed />
      <View style={styles.cornerBottomRight} fixed />

      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            src={HOROSCOPE_LOGO_URL}
            style={styles.logo}
          />

          <View style={styles.signBadge} wrap={false}>
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
            <View style={styles.titleDiamond} />
            <View style={styles.titleLineSmall} />
          </View>
        </View>

        <View style={styles.mainCardOuter}>
          <View style={styles.mainCard}>
            <View style={styles.mainTextColumn}>
              <Text style={styles.miniLabel}>
                Potentiel de la période
              </Text>

              <View style={styles.sectionTitleRow}>
                <Image
                  src={zodiacIconUrl}
                  style={styles.sectionIcon}
                />

                <Text style={styles.sectionTitle}>
                  {sectionTitle}
                </Text>
              </View>

              <Text style={styles.introduction}>
                {introduction}
              </Text>

              <Text style={styles.mainText}>
                {mainText}
              </Text>
            </View>

            <View style={styles.scoreOuter} wrap={false}>
              <View style={styles.scoreCircle}>
                <Text style={styles.scoreValue}>
                  {opportunityScore}
                </Text>

                <Text style={styles.scoreMaximum}>
                  / 100
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.progressCard} wrap={false}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>
              Niveau d’ouverture de la période
            </Text>

            <Text style={styles.progressValue}>
              {opportunityScore} %
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                { width: `${opportunityScore}%` },
              ]}
            />
          </View>

          <Text style={styles.progressDescription}>
            Cet indicateur représente le potentiel général d’évolution et de nouvelles possibilités.
          </Text>
        </View>

        {highlights.length > 0 ? (
          <>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionHeaderLine} />

              <Image
                src={zodiacIconUrl}
                style={styles.sectionHeaderIcon}
              />

              <Text style={styles.sectionHeaderTitle}>
                Opportunités à reconnaître
              </Text>
            </View>

            <View style={styles.highlightsGrid}>
              {highlights.map((highlight, index) => (
                <View
                  key={`${highlight}-${index}`}
                  style={styles.highlightCard}
                  wrap={false}
                >
                  <View style={styles.highlightHeader}>
                    <View style={styles.highlightNumberCircle}>
                      <Text style={styles.highlightNumber}>
                        {String(index + 1).padStart(2, "0")}
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

        <View style={styles.guidanceAndActions}>
          <View style={styles.guidanceCard} wrap={false}>
            <View style={styles.guidanceIconFrame}>
              <Image
                src={zodiacIconUrl}
                style={styles.guidanceIcon}
              />
            </View>

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

          <View style={styles.actionsColumn}>
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

                <View style={styles.actionContent}>
                  <Text style={styles.actionTitle}>
                    {action.title}
                  </Text>

                  <Text style={styles.actionText}>
                    {action.text}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.adviceCard} wrap={false}>
          <View style={styles.adviceHeader}>
            <View style={styles.adviceIconFrame}>
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
