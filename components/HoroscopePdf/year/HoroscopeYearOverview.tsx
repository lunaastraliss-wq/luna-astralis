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
} from "../HoroscopePdfAssets";

import HoroscopePageFooter from "../HoroscopePageFooter";
import HoroscopeStarBackground from "../HoroscopeStarBackground";

import type {
  HoroscopeSectionProps,
} from "../HoroscopePdfTypes";

import {
  formatHoroscopePeriodLabel,
  getHoroscopeZodiacIconUrl,
  normalizeHoroscopeScore,
} from "../HoroscopePdfUtils";

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
    paddingTop: 34,
    paddingHorizontal: 40,
    paddingBottom: 54,
    backgroundColor: NAVY,
    fontFamily: "Helvetica",
    overflow: "hidden",
  },

  content: {
    position: "relative",
    zIndex: 3,
    flex: 1,
  },

  orbitLarge: {
    position: "absolute",
    top: 104,
    right: -104,
    width: 270,
    height: 270,
    borderRadius: 135,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    opacity: 0.3,
  },

  orbitMedium: {
    position: "absolute",
    top: 145,
    right: -66,
    width: 190,
    height: 190,
    borderRadius: 95,
    borderWidth: 0.45,
    borderColor: GOLD,
    opacity: 0.18,
  },

  orbitSmall: {
    position: "absolute",
    bottom: 82,
    left: -68,
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 0.45,
    borderColor: DARK_GOLD,
    opacity: 0.24,
  },

  orbitDot: {
    position: "absolute",
    top: 196,
    right: 50,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: GOLD,
    opacity: 0.72,
  },

  watermark: {
    position: "absolute",
    right: -8,
    bottom: 12,
    width: 116,
    height: 116,
    objectFit: "contain",
    opacity: 0.045,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
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
    fontSize: 8.8,
    letterSpacing: 2.3,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  title: {
    color: CREAM,
    fontSize: 24,
    lineHeight: 1.18,
    marginBottom: 6,
  },

  period: {
    color: MUTED_CREAM,
    fontSize: 9.4,
    marginBottom: 8,
  },

  titleDecoration: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleLine: {
    width: 62,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  titleIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
    marginRight: 8,
  },

  titleLineSmall: {
    width: 20,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  heroCard: {
    position: "relative",
    overflow: "hidden",
    paddingVertical: 15,
    paddingHorizontal: 17,
    borderRadius: 15,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 10,
  },

  heroGlow: {
    position: "absolute",
    top: -46,
    right: -28,
    width: 138,
    height: 138,
    borderRadius: 69,
    borderWidth: 0.65,
    borderColor: GOLD,
    opacity: 0.17,
  },

  heroTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  heroIdentity: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingRight: 14,
  },

  heroIconBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  heroIcon: {
    width: 30,
    height: 30,
    objectFit: "contain",
  },

  heroHeading: {
    flex: 1,
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
    fontSize: 13,
    lineHeight: 1.3,
  },

  scoreBadgeOuter: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreBadge: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreNumber: {
    color: GOLD,
    fontSize: 18,
  },

  scoreOutOf: {
    color: SOFT_TEXT,
    fontSize: 6.2,
    marginTop: 1,
  },

  heroDivider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  heroDividerLine: {
    width: 32,
    height: 1,
    backgroundColor: DARK_GOLD,
    marginRight: 7,
  },

  heroDividerIcon: {
    width: 11,
    height: 11,
    objectFit: "contain",
  },

  introduction: {
    color: MUTED_CREAM,
    fontSize: 8.3,
    lineHeight: 1.45,
    marginBottom: 6,
  },

  summaryText: {
    color: CREAM,
    fontSize: 8.7,
    lineHeight: 1.48,
    textAlign: "justify",
  },

  energyCard: {
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    marginBottom: 10,
  },

  energyHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 7,
  },

  energyLabelRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  energyIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
    marginRight: 7,
  },

  energyLabel: {
    color: CREAM,
    fontSize: 8.3,
  },

  energyValue: {
    color: GOLD,
    fontSize: 8.8,
  },

  energyTrack: {
    width: "100%",
    height: 7,
    borderRadius: 3.5,
    backgroundColor: TRACK,
    overflow: "hidden",
  },

  energyFill: {
    height: 7,
    borderRadius: 3.5,
    backgroundColor: GOLD,
  },

  focusHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  focusLine: {
    width: 24,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  focusIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
    marginRight: 8,
  },

  focusTitle: {
    color: GOLD,
    fontSize: 9.1,
    letterSpacing: 1.3,
    textTransform: "uppercase",
  },

  focusGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 3,
  },

  focusCard: {
    position: "relative",
    width: "48.8%",
    minHeight: 78,
    paddingVertical: 9,
    paddingHorizontal: 10,
    marginBottom: 8,
    borderRadius: 10,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    overflow: "hidden",
  },

  focusWatermark: {
    position: "absolute",
    right: -7,
    bottom: -10,
    width: 52,
    height: 52,
    objectFit: "contain",
    opacity: 0.05,
  },

  focusTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  focusIconBox: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },

  focusCardIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
  },

  focusCardTitle: {
    color: GOLD,
    fontSize: 7.8,
    lineHeight: 1.25,
  },

  focusCardText: {
    color: MUTED_CREAM,
    fontSize: 6.8,
    lineHeight: 1.38,
    paddingRight: 10,
  },

  indicatorsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  indicatorsLine: {
    width: 24,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  indicatorsIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
    marginRight: 8,
  },

  indicatorsTitle: {
    color: GOLD,
    fontSize: 9.1,
    letterSpacing: 1.3,
    textTransform: "uppercase",
  },

  scoresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 2,
  },

  scoreCard: {
    width: "31.6%",
    minHeight: 76,
    paddingVertical: 8,
    paddingHorizontal: 9,
    marginBottom: 7,
    borderRadius: 9,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  scoreTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  scoreIdentity: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingRight: 4,
  },

  scoreIconBox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },

  scoreIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
  },

  scoreLabel: {
    color: CREAM,
    fontSize: 7.1,
  },

  scoreValue: {
    color: GOLD,
    fontSize: 9.6,
  },

  scoreTrack: {
    width: "100%",
    height: 4,
    borderRadius: 2,
    backgroundColor: TRACK,
    overflow: "hidden",
    marginBottom: 5,
  },

  scoreFill: {
    height: 4,
    borderRadius: 2,
    backgroundColor: GOLD,
  },

  scoreMessage: {
    color: SOFT_TEXT,
    fontSize: 5.9,
    lineHeight: 1.28,
  },

  adviceCard: {
    position: "relative",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 58,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 11,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    borderTopWidth: 1.3,
    borderTopColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  adviceWatermark: {
    position: "absolute",
    right: -6,
    bottom: -14,
    width: 72,
    height: 72,
    objectFit: "contain",
    opacity: 0.05,
  },

  adviceIconBox: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  adviceIcon: {
    width: 21,
    height: 21,
    objectFit: "contain",
  },

  adviceBody: {
    flex: 1,
    paddingRight: 24,
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 7,
    letterSpacing: 1.15,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  adviceText: {
    color: CREAM,
    fontSize: 7.6,
    lineHeight: 1.42,
  },
});

type ScoreItem = {
  label: string;
  value: number;
  iconUrl: string;
};

type FocusItem = {
  title: string;
  text: string;
  iconUrl: string;
};

function getScoreMessage(value: number): string {
  if (value >= 85) {
    return "Un secteur très porteur à utiliser pleinement.";
  }

  if (value >= 70) {
    return "Une dynamique favorable soutient vos initiatives.";
  }

  if (value >= 55) {
    return "Un équilibre constructif demande de la constance.";
  }

  if (value >= 40) {
    return "Ce domaine demande davantage d’attention.";
  }

  return "Avancez doucement et protégez vos ressources.";
}

function getYearlyClimate(value: number) {
  if (value >= 80) {
    return {
      title: "Un mois d’expansion",
      text:
        "Votre énergie dominante favorise l’élan, la confiance et les décisions constructives. C’est le moment de faire avancer ce qui compte vraiment.",
    };
  }

  if (value >= 65) {
    return {
      title: "Un mois porteur",
      text:
        "Le climat général soutient une progression régulière. Vos meilleurs résultats viendront d’actions simples, cohérentes et bien préparées.",
    };
  }

  if (value >= 50) {
    return {
      title: "Un mois d’ajustement",
      text:
        "Les possibilités sont présentes, mais elles demandent de la mesure. Observez ce qui évolue avant de choisir votre prochaine direction.",
    };
  }

  return {
    title: "Un mois de recentrage",
    text:
      "Le rythme peut sembler plus lent, mais il vous permet de retrouver de la clarté. Protégez votre énergie et concentrez-vous sur l’essentiel.",
  };
}

function getDominantScore(scores: ScoreItem[]): ScoreItem {
  return scores.reduce((best, current) =>
    current.value > best.value ? current : best,
  );
}

function getLowestScore(scores: ScoreItem[]): ScoreItem {
  return scores.reduce((lowest, current) =>
    current.value < lowest.value ? current : lowest,
  );
}

function buildFocusItems(
  scores: ScoreItem[],
  overallScore: number,
): FocusItem[] {
  const dominant = getDominantScore(scores);
  const vigilance = getLowestScore(scores);
  const climate = getYearlyClimate(overallScore);

  return [
    {
      title: "Force de l’année",
      text: `${dominant.label} se présente comme votre secteur le plus favorable. Appuyez-vous sur cette énergie pour avancer avec davantage de confiance.`,
      iconUrl: HOROSCOPE_ICONS.sun,
    },
    {
      title: "Point de vigilance",
      text: `${vigilance.label} demande plus de patience et de discernement. Évitez de forcer les choses et privilégiez les ajustements progressifs.`,
      iconUrl: HOROSCOPE_ICONS.integrationGuide,
    },
    {
      title: "Énergie dominante",
      text: climate.text,
      iconUrl: HOROSCOPE_ICONS.innerWorld,
    },
    {
      title: "Opportunité principale",
      text:
        "Une décision claire, prise au bon moment, peut créer un effet positif durable. Choisissez une priorité et donnez-lui une place réelle.",
      iconUrl: HOROSCOPE_ICONS.jupiter,
    },
  ];
}

function ScoreCard({
  label,
  value,
  iconUrl,
}: ScoreItem) {
  const safeValue = normalizeHoroscopeScore(value);

  return (
    <View style={styles.scoreCard} wrap={false}>
      <View style={styles.scoreTopRow}>
        <View style={styles.scoreIdentity}>
          <View style={styles.scoreIconBox}>
            <Image src={iconUrl} style={styles.scoreIcon} />
          </View>

          <Text style={styles.scoreLabel}>
            {label}
          </Text>
        </View>

        <Text style={styles.scoreValue}>
          {safeValue}
        </Text>
      </View>

      <View style={styles.scoreTrack}>
        <View
          style={[
            styles.scoreFill,
            {
              width: `${safeValue}%`,
            },
          ]}
        />
      </View>

      <Text style={styles.scoreMessage}>
        {getScoreMessage(safeValue)}
      </Text>
    </View>
  );
}

export default function HoroscopeYearOverview({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const scores: ScoreItem[] = [
    {
      label: "Énergie",
      value: normalizeHoroscopeScore(content.scores.energy),
      iconUrl: HOROSCOPE_ICONS.sun,
    },
    {
      label: "Amour",
      value: normalizeHoroscopeScore(content.scores.love),
      iconUrl: HOROSCOPE_ICONS.love,
    },
    {
      label: "Travail",
      value: normalizeHoroscopeScore(content.scores.career),
      iconUrl: HOROSCOPE_ICONS.lifePurpose,
    },
    {
      label: "Finances",
      value: normalizeHoroscopeScore(content.scores.money),
      iconUrl: HOROSCOPE_ICONS.money,
    },
    {
      label: "Bien-être",
      value: normalizeHoroscopeScore(content.scores.health),
      iconUrl: HOROSCOPE_ICONS.innerWorld,
    },
    {
      label: "Vie sociale",
      value: normalizeHoroscopeScore(
        typeof content.scores.social === "number"
          ? content.scores.social
          : 50,
      ),
      iconUrl: HOROSCOPE_ICONS.soulPath,
    },
  ];

  const overallScore = Math.round(
    scores.reduce(
      (total, score) => total + score.value,
      0,
    ) / scores.length,
  );

  const yearlyClimate = getYearlyClimate(overallScore);
  const focusItems = buildFocusItems(scores, overallScore);

  const summaryTitle =
    content.summary.title ||
    yearlyClimate.title;

  const summaryIntroduction =
    content.summary.introduction ||
    "Cette année ouvre une nouvelle séquence et met en lumière les domaines dans lesquels votre énergie peut évoluer avec le plus de force.";

  const summaryText =
    content.summary.text ||
    "Les premières semaines favorisent l’observation et les ajustements, tandis que la suite de l’année encourage des actions plus affirmées. Votre progression dépendra moins de la vitesse que de la qualité de vos choix et de votre capacité à préserver vos priorités.";

  const advice =
    content.summary.advice ||
    "Choisissez une priorité essentielle pour cette année et protégez-lui du temps, de l’énergie et une place concrète dans votre quotidien.";

  return (
    <Page size="A4" style={styles.page} wrap={false}>
      <HoroscopeStarBackground />

      <View style={styles.orbitLarge} />
      <View style={styles.orbitMedium} />
      <View style={styles.orbitSmall} />
      <View style={styles.orbitDot} />

      <Image
        src={HOROSCOPE_ICONS.integrationGuide}
        style={styles.watermark}
      />

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
            Horoscope annuel
          </Text>

          <Text style={styles.title}>
            Les grandes tendances de l’année
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image
              src={HOROSCOPE_ICONS.integrationGuide}
              style={styles.titleIcon}
            />

            <View style={styles.titleLineSmall} />
          </View>
        </View>

        <View style={styles.heroCard} wrap={false}>
          <View style={styles.heroGlow} />

          <View style={styles.heroTopRow}>
            <View style={styles.heroIdentity}>
              <View style={styles.heroIconBox}>
                <Image
                  src={HOROSCOPE_ICONS.integrationGuide}
                  style={styles.heroIcon}
                />
              </View>

              <View style={styles.heroHeading}>
                <Text style={styles.heroLabel}>
                  L’année en un regard
                </Text>

                <Text style={styles.heroTitle}>
                  {summaryTitle}
                </Text>
              </View>
            </View>

            <View style={styles.scoreBadgeOuter}>
              <View style={styles.scoreBadge}>
                <Text style={styles.scoreNumber}>
                  {overallScore}
                </Text>

                <Text style={styles.scoreOutOf}>
                  sur 100
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.heroDivider}>
            <View style={styles.heroDividerLine} />

            <Image
              src={HOROSCOPE_ICONS.integrationGuide}
              style={styles.heroDividerIcon}
            />
          </View>

          <Text style={styles.introduction}>
            {summaryIntroduction}
          </Text>

          <Text style={styles.summaryText}>
            {summaryText}
          </Text>
        </View>

        <View style={styles.energyCard} wrap={false}>
          <View style={styles.energyHeader}>
            <View style={styles.energyLabelRow}>
              <Image
                src={HOROSCOPE_ICONS.sun}
                style={styles.energyIcon}
              />

              <Text style={styles.energyLabel}>
                Intensité énergétique de l’année
              </Text>
            </View>

            <Text style={styles.energyValue}>
              {overallScore} %
            </Text>
          </View>

          <View style={styles.energyTrack}>
            <View
              style={[
                styles.energyFill,
                {
                  width: `${overallScore}%`,
                },
              ]}
            />
          </View>
        </View>

        <View style={styles.focusHeader}>
          <View style={styles.focusLine} />

          <Image
            src={HOROSCOPE_ICONS.hiddenTalents}
            style={styles.focusIcon}
          />

          <Text style={styles.focusTitle}>
            Les clés de votre mois
          </Text>
        </View>

        <View style={styles.focusGrid}>
          {focusItems.map((item) => (
            <View
              key={item.title}
              style={styles.focusCard}
              wrap={false}
            >
              <Image
                src={item.iconUrl}
                style={styles.focusWatermark}
              />

              <View style={styles.focusTopRow}>
                <View style={styles.focusIconBox}>
                  <Image
                    src={item.iconUrl}
                    style={styles.focusCardIcon}
                  />
                </View>

                <Text style={styles.focusCardTitle}>
                  {item.title}
                </Text>
              </View>

              <Text style={styles.focusCardText}>
                {item.text}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.indicatorsHeader}>
          <View style={styles.indicatorsLine} />

          <Image
            src={HOROSCOPE_ICONS.integrationGuide}
            style={styles.indicatorsIcon}
          />

          <Text style={styles.indicatorsTitle}>
            Les domaines à surveiller
          </Text>
        </View>

        <View style={styles.scoresGrid}>
          {scores.map((score) => (
            <ScoreCard
              key={score.label}
              label={score.label}
              value={score.value}
              iconUrl={score.iconUrl}
            />
          ))}
        </View>

        <View style={styles.adviceCard} wrap={false}>
          <Image
            src={HOROSCOPE_ICONS.integrationGuide}
            style={styles.adviceWatermark}
          />

          <View style={styles.adviceIconBox}>
            <Image
              src={HOROSCOPE_ICONS.integrationGuide}
              style={styles.adviceIcon}
            />
          </View>

          <View style={styles.adviceBody}>
            <Text style={styles.adviceLabel}>
              Votre priorité pour cette année
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
