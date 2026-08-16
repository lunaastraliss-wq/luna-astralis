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
  MonthlyMajorEnergiesResult,
} from "./buildMonthlyMajorEnergies";

/*
|--------------------------------------------------------------------------
| Propriétés
|--------------------------------------------------------------------------
*/

type HoroscopeMonthMajorEnergiesProps = {
  majorEnergies: MonthlyMajorEnergiesResult;
  zodiacSignLabel: string;
  zodiacIconUrl?: string;
};

/*
|--------------------------------------------------------------------------
| Couleurs
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 36,
    paddingHorizontal: 42,
    paddingBottom: 56,
    backgroundColor: NAVY,
    fontFamily: "Helvetica",
    overflow: "hidden",
  },

  content: {
    position: "relative",
    zIndex: 3,
    flex: 1,
  },

  /*
  |--------------------------------------------------------------------------
  | Décorations
  |--------------------------------------------------------------------------
  */

  orbitLarge: {
    position: "absolute",
    top: 112,
    right: -100,
    width: 258,
    height: 258,
    borderRadius: 129,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    opacity: 0.3,
  },

  orbitMedium: {
    position: "absolute",
    top: 148,
    right: -63,
    width: 184,
    height: 184,
    borderRadius: 92,
    borderWidth: 0.45,
    borderColor: GOLD,
    opacity: 0.18,
  },

  orbitSmall: {
    position: "absolute",
    bottom: 86,
    left: -65,
    width: 146,
    height: 146,
    borderRadius: 73,
    borderWidth: 0.45,
    borderColor: DARK_GOLD,
    opacity: 0.24,
  },

  watermark: {
    position: "absolute",
    right: -7,
    bottom: 14,
    width: 114,
    height: 114,
    objectFit: "contain",
    opacity: 0.045,
  },

  /*
  |--------------------------------------------------------------------------
  | En-tête
  |--------------------------------------------------------------------------
  */

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
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

  /*
  |--------------------------------------------------------------------------
  | Titre
  |--------------------------------------------------------------------------
  */

  titleBlock: {
    marginBottom: 13,
  },

  eyebrow: {
    color: GOLD,
    fontSize: 8.8,
    letterSpacing: 2.2,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  title: {
    color: CREAM,
    fontSize: 25,
    lineHeight: 1.15,
    marginBottom: 7,
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

  /*
  |--------------------------------------------------------------------------
  | Introduction
  |--------------------------------------------------------------------------
  */

  introductionCard: {
    position: "relative",
    overflow: "hidden",
    paddingVertical: 13,
    paddingHorizontal: 15,
    marginBottom: 11,
    borderRadius: 13,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  introductionGlow: {
    position: "absolute",
    top: -48,
    right: -30,
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 0.6,
    borderColor: GOLD,
    opacity: 0.14,
  },

  introductionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  introductionIconBox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  introductionIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
  },

  introductionLabel: {
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },

  introductionText: {
    color: MUTED_CREAM,
    fontSize: 8.3,
    lineHeight: 1.48,
    textAlign: "justify",
  },

  /*
  |--------------------------------------------------------------------------
  | Cartes des énergies
  |--------------------------------------------------------------------------
  */

  cardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 1,
  },

  card: {
    position: "relative",
    overflow: "hidden",
    width: "48.8%",
    minHeight: 140,
    paddingVertical: 11,
    paddingHorizontal: 12,
    marginBottom: 10,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  cardAccent: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 1.5,
    backgroundColor: GOLD,
  },

  cardWatermark: {
    position: "absolute",
    right: -10,
    bottom: -14,
    width: 67,
    height: 67,
    objectFit: "contain",
    opacity: 0.045,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  cardIdentity: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingRight: 8,
  },

  cardIconBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  cardIcon: {
    width: 17,
    height: 17,
    objectFit: "contain",
  },

  cardTitle: {
    flex: 1,
    color: GOLD,
    fontSize: 9.2,
    lineHeight: 1.25,
  },

  scoreBadge: {
    minWidth: 41,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  scoreText: {
    color: GOLD,
    fontSize: 8.5,
    textAlign: "center",
  },

  scoreTrack: {
    width: "100%",
    height: 4,
    marginBottom: 8,
    borderRadius: 2,
    backgroundColor: TRACK,
    overflow: "hidden",
  },

  scoreFill: {
    height: 4,
    borderRadius: 2,
    backgroundColor: GOLD,
  },

  description: {
    marginBottom: 7,
    color: MUTED_CREAM,
    fontSize: 7.35,
    lineHeight: 1.42,
    textAlign: "justify",
  },

  adviceDivider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },

  adviceLine: {
    width: 18,
    height: 1,
    marginRight: 6,
    backgroundColor: DARK_GOLD,
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 6.7,
    letterSpacing: 0.9,
    textTransform: "uppercase",
  },

  advice: {
    color: CREAM,
    fontSize: 7.1,
    lineHeight: 1.38,
  },

  /*
  |--------------------------------------------------------------------------
  | Synthèse et conseil final
  |--------------------------------------------------------------------------
  */

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  synthesisBox: {
    position: "relative",
    overflow: "hidden",
    width: "60%",
    minHeight: 94,
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderLeftWidth: 1.6,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  finalAdviceBox: {
    position: "relative",
    overflow: "hidden",
    width: "37.5%",
    minHeight: 94,
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderTopWidth: 1.6,
    borderTopColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  bottomWatermark: {
    position: "absolute",
    right: -8,
    bottom: -13,
    width: 65,
    height: 65,
    objectFit: "contain",
    opacity: 0.05,
  },

  bottomHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  bottomIconBox: {
    width: 27,
    height: 27,
    borderRadius: 13.5,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },

  bottomIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
  },

  synthesisTitle: {
    flex: 1,
    color: GOLD,
    fontSize: 8.2,
    lineHeight: 1.25,
  },

  synthesisText: {
    color: MUTED_CREAM,
    fontSize: 7.1,
    lineHeight: 1.42,
    textAlign: "justify",
    paddingRight: 5,
  },

  finalAdviceTitle: {
    flex: 1,
    color: GOLD,
    fontSize: 7.6,
    letterSpacing: 0.4,
    lineHeight: 1.25,
    textTransform: "uppercase",
  },

  finalAdviceText: {
    color: CREAM,
    fontSize: 7.1,
    lineHeight: 1.42,
  },
});

/*
|--------------------------------------------------------------------------
| Icônes des cartes
|--------------------------------------------------------------------------
*/

const ENERGY_ICONS = [
  HOROSCOPE_ICONS.sun,
  HOROSCOPE_ICONS.love,
  HOROSCOPE_ICONS.lifePurpose,
  HOROSCOPE_ICONS.innerWorld,
  HOROSCOPE_ICONS.money,
  HOROSCOPE_ICONS.hiddenTalents,
];

function formatFrenchMonthReferences(
  value: string,
): string {
  return value.replace(
    /\b(\d{4})-(0[1-9]|1[0-2])\b/g,
    (_match, year: string, month: string) => {
      const date = new Date(
        Number(year),
        Number(month) - 1,
        1,
      );

      const monthLabel =
        new Intl.DateTimeFormat(
          "fr-CA",
          {
            month: "long",
          },
        ).format(date);

      return `${
        monthLabel.charAt(0).toUpperCase() +
        monthLabel.slice(1)
      } ${year}`;
    },
  );
}

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function HoroscopeMonthMajorEnergies({
  majorEnergies,
  zodiacSignLabel,
  zodiacIconUrl,
}: HoroscopeMonthMajorEnergiesProps) {
  return (
    <Page
      size="A4"
      style={styles.page}
      wrap={false}
    >
      <HoroscopeStarBackground />

      <View style={styles.orbitLarge} />
      <View style={styles.orbitMedium} />
      <View style={styles.orbitSmall} />

      <Image
        src={HOROSCOPE_ICONS.integrationGuide}
        style={styles.watermark}
      />

      <View style={styles.content}>
        {/*
        |--------------------------------------------------------------------------
        | En-tête
        |--------------------------------------------------------------------------
        */}

        <View style={styles.header}>
          <Image
            src={HOROSCOPE_LOGO_URL}
            style={styles.logo}
          />

          <View style={styles.signBadge}>
            {zodiacIconUrl ? (
              <Image
                src={zodiacIconUrl}
                style={styles.signIcon}
              />
            ) : null}

            <Text style={styles.signName}>
              {zodiacSignLabel}
            </Text>
          </View>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Titre
        |--------------------------------------------------------------------------
        */}

        <View style={styles.titleBlock}>
          <Text style={styles.eyebrow}>
            Horoscope mensuel
          </Text>

          <Text style={styles.title}>
            Les grandes énergies du mois
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

        {/*
        |--------------------------------------------------------------------------
        | Introduction
        |--------------------------------------------------------------------------
        */}

        <View
          style={styles.introductionCard}
          wrap={false}
        >
          <View style={styles.introductionGlow} />

          <View style={styles.introductionHeader}>
            <View style={styles.introductionIconBox}>
              <Image
                src={HOROSCOPE_ICONS.sun}
                style={styles.introductionIcon}
              />
            </View>

            <Text style={styles.introductionLabel}>
              Votre climat astrologique
            </Text>
          </View>

          <Text style={styles.introductionText}>
            {formatFrenchMonthReferences(majorEnergies.introduction)}
          </Text>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Énergies
        |--------------------------------------------------------------------------
        */}

        <View style={styles.cardsGrid}>
          {majorEnergies.energies.map(
            (energy, index) => {
              const score = Math.max(
                0,
                Math.min(100, energy.score),
              );

              const iconUrl =
                ENERGY_ICONS[
                  index % ENERGY_ICONS.length
                ];

              return (
                <View
                  key={`${energy.title}-${index}`}
                  style={styles.card}
                  wrap={false}
                >
                  <View style={styles.cardAccent} />

                  <Image
                    src={iconUrl}
                    style={styles.cardWatermark}
                  />

                  <View style={styles.cardHeader}>
                    <View style={styles.cardIdentity}>
                      <View style={styles.cardIconBox}>
                        <Image
                          src={iconUrl}
                          style={styles.cardIcon}
                        />
                      </View>

                      <Text style={styles.cardTitle}>
                        {energy.title}
                      </Text>
                    </View>

                    <View style={styles.scoreBadge}>
                      <Text style={styles.scoreText}>
                        {score} %
                      </Text>
                    </View>
                  </View>

                  <View style={styles.scoreTrack}>
                    <View
                      style={[
                        styles.scoreFill,
                        {
                          width: `${score}%`,
                        },
                      ]}
                    />
                  </View>

                  <Text style={styles.description}>
                    {formatFrenchMonthReferences(energy.description)}
                  </Text>

                  <View style={styles.adviceDivider}>
                    <View style={styles.adviceLine} />

                    <Text style={styles.adviceLabel}>
                      Votre conseil
                    </Text>
                  </View>

                  <Text style={styles.advice}>
                    {formatFrenchMonthReferences(energy.advice)}
                  </Text>
                </View>
              );
            },
          )}
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Synthèse et conseil
        |--------------------------------------------------------------------------
        */}

        <View style={styles.bottomRow}>
          <View
            style={styles.synthesisBox}
            wrap={false}
          >
            <Image
              src={HOROSCOPE_ICONS.hiddenTalents}
              style={styles.bottomWatermark}
            />

            <View style={styles.bottomHeader}>
              <View style={styles.bottomIconBox}>
                <Image
                  src={HOROSCOPE_ICONS.hiddenTalents}
                  style={styles.bottomIcon}
                />
              </View>

              <Text style={styles.synthesisTitle}>
                Comment ces énergies se combinent
              </Text>
            </View>

            <Text style={styles.synthesisText}>
              {formatFrenchMonthReferences(majorEnergies.synthesis)}
            </Text>
          </View>

          <View
            style={styles.finalAdviceBox}
            wrap={false}
          >
            <Image
              src={HOROSCOPE_ICONS.integrationGuide}
              style={styles.bottomWatermark}
            />

            <View style={styles.bottomHeader}>
              <View style={styles.bottomIconBox}>
                <Image
                  src={HOROSCOPE_ICONS.integrationGuide}
                  style={styles.bottomIcon}
                />
              </View>

              <Text style={styles.finalAdviceTitle}>
                Conseil astrologique
              </Text>
            </View>

            <Text style={styles.finalAdviceText}>
              {formatFrenchMonthReferences(majorEnergies.finalAdvice)}
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
