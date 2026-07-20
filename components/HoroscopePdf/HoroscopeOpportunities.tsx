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
    marginBottom: 24,
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
    marginBottom: 20,
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
    paddingVertical: 21,
    paddingHorizontal: 21,
    borderRadius: 14,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 18,
  },

  mainHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
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
    marginBottom: 13,
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
    fontSize: 9.5,
    lineHeight: 1.6,
    marginBottom: 12,
  },

  mainText: {
    color: CREAM,
    fontSize: 10.3,
    lineHeight: 1.7,
    textAlign: "justify",
  },

  progressCard: {
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    marginBottom: 18,
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
    width: 13,
    height: 13,
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
    height: 9,
    borderRadius: 4.5,
    backgroundColor: TRACK,
    overflow: "hidden",
  },

  progressFill: {
    height: 9,
    borderRadius: 4.5,
    backgroundColor: GOLD,
  },

  progressDescription: {
    color: SOFT_TEXT,
    fontSize: 7.5,
    lineHeight: 1.45,
    marginTop: 9,
  },

  highlightsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
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
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },

  highlightsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  highlightCard: {
    width: "48.5%",
    minHeight: 84,
    paddingVertical: 13,
    paddingHorizontal: 14,
    marginBottom: 11,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  highlightTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  highlightNumberCircle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  highlightNumber: {
    color: GOLD,
    fontSize: 8,
  },

  highlightIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
  },

  highlightText: {
    color: CREAM,
    fontSize: 8.5,
    lineHeight: 1.5,
  },

  pageOneClosing: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  pageOneClosingIconBox: {
    width: 39,
    height: 39,
    borderRadius: 19.5,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  pageOneClosingIcon: {
    width: 24,
    height: 24,
    objectFit: "contain",
  },

  pageOneClosingText: {
    flex: 1,
    color: MUTED_CREAM,
    fontSize: 8.4,
    lineHeight: 1.55,
  },

  heroSection: {
    alignItems: "center",
    marginBottom: 21,
  },

  heroOuterCircle: {
    width: 108,
    height: 108,
    borderRadius: 54,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
  },

  heroMiddleCircle: {
    width: 94,
    height: 94,
    borderRadius: 47,
    borderWidth: 0.9,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
  },

  heroInnerCircle: {
    width: 78,
    height: 78,
    borderRadius: 39,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  heroIcon: {
    width: 52,
    height: 52,
    objectFit: "contain",
  },

  heroLabel: {
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  heroText: {
    maxWidth: 390,
    color: MUTED_CREAM,
    fontSize: 9,
    lineHeight: 1.55,
    textAlign: "center",
  },

  guidanceCard: {
    paddingVertical: 17,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 17,
  },

  guidanceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  guidanceIconBox: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  guidanceIcon: {
    width: 21,
    height: 21,
    objectFit: "contain",
  },

  guidanceHeading: {
    flex: 1,
  },

  guidanceMiniLabel: {
    color: SOFT_TEXT,
    fontSize: 7,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  guidanceTitle: {
    color: GOLD,
    fontSize: 11,
  },

  guidanceText: {
    color: CREAM,
    fontSize: 9,
    lineHeight: 1.6,
  },

  actionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  actionHeaderLine: {
    width: 24,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  actionHeaderIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
    marginRight: 8,
  },

  actionHeaderTitle: {
    color: GOLD,
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },

  actionsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 17,
  },

  actionCard: {
    width: "31.5%",
    minHeight: 137,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  actionNumberCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  actionNumber: {
    color: GOLD,
    fontSize: 8,
  },

  actionIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginBottom: 9,
  },

  actionTitle: {
    color: GOLD,
    fontSize: 9,
    lineHeight: 1.35,
    marginBottom: 7,
  },

  actionText: {
    color: MUTED_CREAM,
    fontSize: 7.7,
    lineHeight: 1.48,
  },

  adviceCard: {
    paddingVertical: 17,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 17,
  },

  adviceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  adviceIconBox: {
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

  adviceIcon: {
    width: 17,
    height: 17,
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
    fontSize: 9.4,
    lineHeight: 1.6,
  },

  reminderCard: {
    paddingVertical: 14,
    paddingHorizontal: 17,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  reminderHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  reminderIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
    marginRight: 8,
  },

  reminderLabel: {
    color: GOLD,
    fontSize: 7.5,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },

  reminderText: {
    color: MUTED_CREAM,
    fontSize: 8.3,
    lineHeight: 1.55,
  },
});

function getFinancialGuidance(score: number) {
  if (score >= 75) {
    return {
      title: "Une période favorable à consolider",
      text:
        "Votre climat financier paraît relativement porteur. Cette énergie peut soutenir une décision réfléchie, une négociation ou la consolidation d’un projet. L’objectif n’est toutefois pas de dépenser davantage, mais d’utiliser cette stabilité pour renforcer ce qui fonctionne déjà et préparer la suite avec méthode.",
    };
  }

  if (score >= 50) {
    return {
      title: "Un équilibre à préserver",
      text:
        "Votre période financière présente un potentiel intéressant, mais elle demande de la vigilance. Certaines occasions peuvent être utiles si elles restent compatibles avec vos priorités réelles. Prenez le temps de comparer, de vérifier les détails et de protéger votre marge de sécurité avant de vous engager.",
    };
  }

  return {
    title: "Une période qui demande de la prudence",
    text:
      "Votre climat financier invite à ralentir et à revenir à l’essentiel. Évitez les décisions prises sous pression et concentrez-vous sur les dépenses prioritaires. Une organisation simple, des limites claires et une meilleure visibilité sur vos ressources peuvent vous aider à retrouver progressivement un sentiment de contrôle.",
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

  const actionCards = [
    {
      title: "Observer",
      text:
        "Repérez les dépenses, les engagements ou les choix financiers qui reviennent souvent. Cette observation vous aide à distinguer les habitudes utiles de celles qui fragilisent votre équilibre.",
    },
    {
      title: "Prioriser",
      text:
        "Classez vos besoins selon leur importance réelle. Donnez la priorité à la sécurité, aux obligations essentielles et aux projets capables de soutenir votre stabilité à plus long terme.",
    },
    {
      title: "Décider",
      text:
        "Avant une décision importante, accordez-vous un délai de réflexion. Vérifiez les chiffres, les conditions et les conséquences possibles afin d’agir avec davantage de clarté.",
    },
  ];

  return (
    <>
      <Page size="A4" style={styles.page}>
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
