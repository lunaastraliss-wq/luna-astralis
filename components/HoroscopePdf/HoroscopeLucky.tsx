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

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 34,
    paddingHorizontal: 44,
    paddingBottom: 52,
    backgroundColor: NAVY,
    fontFamily: "Helvetica",
    overflow: "hidden",
  },

  content: {
    flex: 1,
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
    marginBottom: 13,
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
    fontSize: 25,
    lineHeight: 1.2,
    marginBottom: 6,
  },

  period: {
    color: MUTED_CREAM,
    fontSize: 10,
    marginBottom: 9,
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

  introductionCard: {
    paddingVertical: 13,
    paddingHorizontal: 17,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 13,
  },

  introductionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  introductionIconBox: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  introductionIcon: {
    width: 16,
    height: 16,
    objectFit: "contain",
  },

  introductionLabel: {
    color: GOLD,
    fontSize: 7.8,
    letterSpacing: 1.3,
    textTransform: "uppercase",
  },

  introductionText: {
    color: MUTED_CREAM,
    fontSize: 8.7,
    lineHeight: 1.52,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  sectionLine: {
    width: 25,
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

  sectionLabel: {
    color: GOLD,
    fontSize: 9.3,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },

  luckyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  luckyCard: {
    width: "48.5%",
    minHeight: 102,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  cardTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  cardNumberCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  cardNumber: {
    color: GOLD,
    fontSize: 7.8,
  },

  cardIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
  },

  cardLabel: {
    color: SOFT_TEXT,
    fontSize: 6.7,
    letterSpacing: 1.05,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  cardValue: {
    color: GOLD,
    fontSize: 11.3,
    lineHeight: 1.25,
    marginBottom: 4,
  },

  cardDescription: {
    color: MUTED_CREAM,
    fontSize: 7.35,
    lineHeight: 1.4,
  },

  guideLeadCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 12,
  },

  guideLeadIconOuter: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  guideLeadIconInner: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  guideLeadIcon: {
    width: 31,
    height: 31,
    objectFit: "contain",
  },

  guideLeadTextWrap: {
    flex: 1,
  },

  guideLeadLabel: {
    color: GOLD,
    fontSize: 7.4,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  guideLeadText: {
    color: MUTED_CREAM,
    fontSize: 8.3,
    lineHeight: 1.48,
  },

  numbersCard: {
    paddingVertical: 13,
    paddingHorizontal: 17,
    borderRadius: 12,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 11,
  },

  numbersHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 7,
  },

  numbersTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  numbersIcon: {
    width: 16,
    height: 16,
    objectFit: "contain",
    marginRight: 8,
  },

  numbersTitle: {
    color: CREAM,
    fontSize: 10.5,
  },

  numbersCount: {
    color: SOFT_TEXT,
    fontSize: 6.8,
    letterSpacing: 0.9,
    textTransform: "uppercase",
  },

  numbersIntroduction: {
    color: MUTED_CREAM,
    fontSize: 8,
    lineHeight: 1.42,
    marginBottom: 9,
  },

  numbersRow: {
    flexDirection: "row",
    justifyContent: "center",
  },

  numberOuterCircle: {
    width: 43,
    height: 43,
    borderRadius: 21.5,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
  },

  numberCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  numberText: {
    color: GOLD,
    fontSize: 10.5,
  },

  quoteCard: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 11,
    alignItems: "center",
  },

  quoteHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  quoteIconBox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  quoteIcon: {
    width: 17,
    height: 17,
    objectFit: "contain",
  },

  quoteLabel: {
    color: GOLD,
    fontSize: 7.3,
    letterSpacing: 1.25,
    textTransform: "uppercase",
  },

  quoteText: {
    color: CREAM,
    fontSize: 10.3,
    lineHeight: 1.48,
    fontStyle: "italic",
    textAlign: "center",
  },

  ritualCard: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 10,
  },

  ritualHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  ritualIconBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  ritualIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
  },

  ritualHeading: {
    flex: 1,
  },

  ritualMiniLabel: {
    color: SOFT_TEXT,
    fontSize: 6.7,
    letterSpacing: 1.05,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  ritualTitle: {
    color: GOLD,
    fontSize: 10.2,
  },

  ritualText: {
    color: CREAM,
    fontSize: 8.2,
    lineHeight: 1.46,
  },

  reminderCard: {
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  reminderHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  reminderIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
    marginRight: 8,
  },

  reminderLabel: {
    color: GOLD,
    fontSize: 7.3,
    letterSpacing: 1.15,
    textTransform: "uppercase",
  },

  reminderText: {
    color: MUTED_CREAM,
    fontSize: 7.9,
    lineHeight: 1.44,
  },
});

export default function HoroscopeLucky_v2({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);
  const lucky = content.lucky;

  const luckyNumbers = Array.isArray(lucky.numbers)
    ? lucky.numbers.slice(0, 6)
    : [];

  const cards = [
    {
      label: "Couleur favorable",
      value: lucky.color,
      description:
        "Une teinte à privilégier dans vos vêtements, vos accessoires ou votre environnement.",
    },
    {
      label: "Jour favorable",
      value: lucky.day,
      description:
        "Une journée propice pour agir, communiquer ou prendre une initiative.",
    },
    {
      label: "Pierre symbolique",
      value: lucky.stone,
      description:
        "Une pierre associée aux énergies astrologiques de votre période.",
    },
    {
      label: "Élément dominant",
      value: lucky.element,
      description:
        "L’énergie élémentaire qui peut soutenir votre équilibre et votre intuition.",
    },
    {
      label: "Planète favorable",
      value: lucky.planet,
      description:
        "L’influence céleste à observer plus particulièrement durant cette période.",
    },
    {
      label: "Moment favorable",
      value: lucky.time,
      description:
        "Un moment de la journée où votre énergie pourrait être plus fluide.",
    },
  ].filter(
    (item) =>
      typeof item.value === "string" &&
      item.value.trim().length > 0,
  );

  return (
    <>
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
              Vos repères favorables
            </Text>

            <Text style={styles.title}>
              Chance, intuition et symboles
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

          {lucky.introduction ? (
            <View
              style={styles.introductionCard}
              wrap={false}
            >
              <View style={styles.introductionHeader}>
                <View style={styles.introductionIconBox}>
                  <Image
                    src={zodiacIconUrl}
                    style={styles.introductionIcon}
                  />
                </View>

                <Text style={styles.introductionLabel}>
                  Votre énergie favorable
                </Text>
              </View>

              <Text style={styles.introductionText}>
                {lucky.introduction}
              </Text>
            </View>
          ) : null}

          <View style={styles.sectionHeader}>
            <View style={styles.sectionLine} />

            <Image
              src={zodiacIconUrl}
              style={styles.sectionIcon}
            />

            <Text style={styles.sectionLabel}>
              Vos symboles de la période
            </Text>
          </View>

          <View style={styles.luckyGrid}>
            {cards.map((card, index) => (
              <View
                key={card.label}
                style={styles.luckyCard}
                wrap={false}
              >
                <View style={styles.cardTopRow}>
                  <View style={styles.cardNumberCircle}>
                    <Text style={styles.cardNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </Text>
                  </View>

                  <Image
                    src={zodiacIconUrl}
                    style={styles.cardIcon}
                  />
                </View>

                <Text style={styles.cardLabel}>
                  {card.label}
                </Text>

                <Text style={styles.cardValue}>
                  {card.value}
                </Text>

                <Text style={styles.cardDescription}>
                  {card.description}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <HoroscopePageFooter />
      </Page>

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
              Votre guide symbolique
            </Text>

            <Text style={styles.title}>
              Nombres, inspiration et rituel
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

          <View style={styles.guideLeadCard} wrap={false}>
            <View style={styles.guideLeadIconOuter}>
              <View style={styles.guideLeadIconInner}>
                <Image
                  src={zodiacIconUrl}
                  style={styles.guideLeadIcon}
                />
              </View>
            </View>

            <View style={styles.guideLeadTextWrap}>
              <Text style={styles.guideLeadLabel}>
                Votre boussole symbolique
              </Text>

              <Text style={styles.guideLeadText}>
                Observez ces symboles au fil de la période. Ils peuvent
                devenir des points de repère pour reconnaître les moments
                où votre intuition, votre confiance et votre capacité
                d’action sont plus naturellement accessibles. Utilisez-les
                comme une invitation à ralentir et à écouter ce qui résonne
                réellement avec vous.
              </Text>
            </View>
          </View>

          {luckyNumbers.length > 0 ? (
            <View style={styles.numbersCard} wrap={false}>
              <View style={styles.numbersHeader}>
                <View style={styles.numbersTitleRow}>
                  <Image
                    src={zodiacIconUrl}
                    style={styles.numbersIcon}
                  />

                  <Text style={styles.numbersTitle}>
                    Vos nombres favorables
                  </Text>
                </View>

                <Text style={styles.numbersCount}>
                  {luckyNumbers.length} repères
                </Text>
              </View>

              <Text style={styles.numbersIntroduction}>
                Ces nombres peuvent accompagner vos choix personnels,
                vos intentions, vos dates importantes ou vos petits
                rituels de la période.
              </Text>

              <View style={styles.numbersRow}>
                {luckyNumbers.map((number, index) => (
                  <View
                    key={`${number}-${index}`}
                    style={styles.numberOuterCircle}
                  >
                    <View style={styles.numberCircle}>
                      <Text style={styles.numberText}>
                        {number}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ) : null}

          {lucky.quote ? (
            <View style={styles.quoteCard} wrap={false}>
              <View style={styles.quoteHeader}>
                <View style={styles.quoteIconBox}>
                  <Image
                    src={zodiacIconUrl}
                    style={styles.quoteIcon}
                  />
                </View>

                <Text style={styles.quoteLabel}>
                  Votre phrase d’inspiration
                </Text>
              </View>

              <Text style={styles.quoteText}>
                « {lucky.quote} »
              </Text>
            </View>
          ) : null}

          <View style={styles.ritualCard} wrap={false}>
            <View style={styles.ritualHeader}>
              <View style={styles.ritualIconBox}>
                <Image
                  src={zodiacIconUrl}
                  style={styles.ritualIcon}
                />
              </View>

              <View style={styles.ritualHeading}>
                <Text style={styles.ritualMiniLabel}>
                  Rituel personnel
                </Text>

                <Text style={styles.ritualTitle}>
                  Créez votre moment favorable
                </Text>
              </View>
            </View>

            <Text style={styles.ritualText}>
              Choisissez un moment calme de la journée. Entourez-vous
              de votre couleur favorable, gardez votre pierre symbolique
              près de vous et notez une intention claire liée à cette
              période. Respirez lentement, relisez votre phrase
              d’inspiration et laissez votre intuition vous indiquer la
              prochaine action juste.
            </Text>
          </View>

          <View style={styles.reminderCard} wrap={false}>
            <View style={styles.reminderHeader}>
              <Image
                src={zodiacIconUrl}
                style={styles.reminderIcon}
              />

              <Text style={styles.reminderLabel}>
                À retenir
              </Text>
            </View>

            <Text style={styles.reminderText}>
              Ces éléments sont des repères symboliques destinés à
              accompagner votre intuition. Ils ne garantissent pas un
              résultat précis, mais peuvent vous aider à rester attentive
              aux occasions favorables et à renforcer votre confiance dans
              vos propres ressentis.
            </Text>
          </View>
        </View>

        <HoroscopePageFooter />
      </Page>
    </>
  );
}
