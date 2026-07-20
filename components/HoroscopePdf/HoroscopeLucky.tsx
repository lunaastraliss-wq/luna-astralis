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

  introductionCard: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 19,
  },

  introductionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  introductionIconBox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  introductionIcon: {
    width: 17,
    height: 17,
    objectFit: "contain",
  },

  introductionLabel: {
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1.3,
    textTransform: "uppercase",
  },

  introductionText: {
    color: MUTED_CREAM,
    fontSize: 9,
    lineHeight: 1.6,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
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
    fontSize: 9.5,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },

  luckyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  luckyCard: {
    width: "48.5%",
    minHeight: 104,
    paddingVertical: 13,
    paddingHorizontal: 14,
    marginBottom: 11,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  cardTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  cardNumberCircle: {
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

  cardNumber: {
    color: GOLD,
    fontSize: 8,
  },

  cardIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
  },

  cardLabel: {
    color: SOFT_TEXT,
    fontSize: 6.8,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  cardValue: {
    color: GOLD,
    fontSize: 11.5,
    lineHeight: 1.3,
    marginBottom: 5,
  },

  cardDescription: {
    color: MUTED_CREAM,
    fontSize: 7.5,
    lineHeight: 1.45,
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
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  pageOneClosingIcon: {
    width: 25,
    height: 25,
    objectFit: "contain",
  },

  pageOneClosingText: {
    flex: 1,
    color: MUTED_CREAM,
    fontSize: 8.5,
    lineHeight: 1.55,
  },

  heroSection: {
    alignItems: "center",
    marginBottom: 22,
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

  heroText: {
    maxWidth: 390,
    color: MUTED_CREAM,
    fontSize: 9,
    lineHeight: 1.55,
    textAlign: "center",
  },

  numbersCard: {
    paddingVertical: 17,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 18,
  },

  numbersHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  numbersTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  numbersIcon: {
    width: 17,
    height: 17,
    objectFit: "contain",
    marginRight: 8,
  },

  numbersTitle: {
    color: CREAM,
    fontSize: 11,
  },

  numbersCount: {
    color: SOFT_TEXT,
    fontSize: 7,
    letterSpacing: 0.9,
    textTransform: "uppercase",
  },

  numbersIntroduction: {
    color: MUTED_CREAM,
    fontSize: 8.5,
    lineHeight: 1.5,
    marginBottom: 14,
  },

  numbersRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  numberOuterCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    marginBottom: 7,
  },

  numberCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  numberText: {
    color: GOLD,
    fontSize: 11,
  },

  quoteCard: {
    paddingVertical: 18,
    paddingHorizontal: 23,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 18,
    alignItems: "center",
  },

  quoteIconBox: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 9,
  },

  quoteIcon: {
    width: 24,
    height: 24,
    objectFit: "contain",
  },

  quoteLabel: {
    color: GOLD,
    fontSize: 7.5,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 9,
    textAlign: "center",
  },

  quoteText: {
    color: CREAM,
    fontSize: 11,
    lineHeight: 1.6,
    fontStyle: "italic",
    textAlign: "center",
  },

  ritualCard: {
    paddingVertical: 17,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 17,
  },

  ritualHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 11,
  },

  ritualIconBox: {
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

  ritualIcon: {
    width: 21,
    height: 21,
    objectFit: "contain",
  },

  ritualHeading: {
    flex: 1,
  },

  ritualMiniLabel: {
    color: SOFT_TEXT,
    fontSize: 7,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  ritualTitle: {
    color: GOLD,
    fontSize: 11,
  },

  ritualText: {
    color: CREAM,
    fontSize: 9,
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
    fontSize: 8.5,
    lineHeight: 1.55,
  },
});

export default function HoroscopeLucky({
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

          <View
            style={styles.pageOneClosing}
            wrap={false}
          >
            <View style={styles.pageOneClosingIconBox}>
              <Image
                src={zodiacIconUrl}
                style={styles.pageOneClosingIcon}
              />
            </View>

            <Text style={styles.pageOneClosingText}>
              Observez ces symboles au fil de la période. Ils peuvent
              devenir des points de repère pour reconnaître les
              moments où votre intuition, votre confiance et votre
              capacité d’action sont plus naturellement accessibles.
            </Text>
          </View>
        </View>

        <HoroscopePageFooter />
      </Page>

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

          <View style={styles.heroSection} wrap={false}>
            <View style={styles.heroOuterCircle}>
              <View style={styles.heroMiddleCircle}>
                <View style={styles.heroInnerCircle}>
                  <Image
                    src={zodiacIconUrl}
                    style={styles.heroIcon}
                  />
                </View>
              </View>
            </View>

            <Text style={styles.heroText}>
              Utilisez ces repères comme une invitation à ralentir,
              observer et écouter ce qui résonne réellement avec vous
              durant cette période.
            </Text>
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
                Ces nombres peuvent être utilisés comme symboles dans
                vos choix personnels, vos intentions, vos dates
                importantes ou vos petits rituels de la période.
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
              <View style={styles.quoteIconBox}>
                <Image
                  src={zodiacIconUrl}
                  style={styles.quoteIcon}
                />
              </View>

              <Text style={styles.quoteLabel}>
                Votre phrase d’inspiration
              </Text>

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
              de votre couleur favorable, gardez votre pierre
              symbolique près de vous et notez une intention claire
              liée à cette période. Respirez lentement, relisez votre
              phrase d’inspiration et laissez votre intuition vous
              indiquer la prochaine action juste.
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
              résultat précis, mais peuvent vous aider à créer un
              rituel personnel, à rester attentive aux occasions
              favorables et à renforcer votre confiance dans vos
              propres ressentis.
            </Text>
          </View>
        </View>

        <HoroscopePageFooter />
      </Page>
    </>
  );
}
