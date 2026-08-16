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
const DEEP_GOLD = "#4E412D";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 36,
    paddingHorizontal: 44,
    paddingBottom: 56,
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
    marginBottom: 17,
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
    marginBottom: 14,
  },

  eyebrow: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 2.4,
    textTransform: "uppercase",
    marginBottom: 8,
  },

  title: {
    color: CREAM,
    fontSize: 25,
    lineHeight: 1.2,
    marginBottom: 7,
  },

  period: {
    color: MUTED_CREAM,
    fontSize: 10,
    marginBottom: 10,
  },

  titleDecoration: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleLine: {
    width: 63,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 9,
  },

  titleDecorationIcon: {
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

  introductionCard: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 15,
    borderRadius: 12,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  introductionOrbitOne: {
    position: "absolute",
    top: -40,
    left: -43,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  introductionOrbitTwo: {
    position: "absolute",
    top: -20,
    left: -23,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
  },

  introductionIconCircle: {
    width: 55,
    height: 55,
    borderRadius: 28,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  introductionIcon: {
    width: 35,
    height: 35,
    objectFit: "contain",
  },

  introductionContent: {
    flex: 1,
  },

  introductionLabel: {
    color: GOLD,
    fontSize: 7.4,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  introductionText: {
    color: MUTED_CREAM,
    fontSize: 8.6,
    lineHeight: 1.5,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 11,
  },

  sectionLine: {
    width: 28,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 9,
  },

  sectionIcon: {
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

  featuredRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  featuredCard: {
    position: "relative",
    width: "48.5%",
    minHeight: 162,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    overflow: "hidden",
  },

  featuredCardGlow: {
    position: "absolute",
    top: -38,
    right: -35,
    width: 105,
    height: 105,
    borderRadius: 53,
    borderWidth: 0.6,
    borderColor: DEEP_GOLD,
  },

  featuredIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },

  featuredIcon: {
    width: 31,
    height: 31,
    objectFit: "contain",
  },

  featuredLabel: {
    color: SOFT_TEXT,
    fontSize: 6.6,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  featuredValue: {
    color: GOLD,
    fontSize: 15,
    lineHeight: 1.2,
    marginBottom: 7,
  },

  featuredDescription: {
    color: MUTED_CREAM,
    fontSize: 7.5,
    lineHeight: 1.43,
  },

  smallGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  smallCard: {
    width: "48.5%",
    minHeight: 115,
    paddingVertical: 12,
    paddingHorizontal: 13,
    marginBottom: 10,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  smallCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  smallIconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  smallIcon: {
    width: 22,
    height: 22,
    objectFit: "contain",
  },

  smallNumber: {
    color: SOFT_TEXT,
    fontSize: 6.5,
    letterSpacing: 1,
  },

  smallLabel: {
    color: SOFT_TEXT,
    fontSize: 6.5,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  smallValue: {
    color: GOLD,
    fontSize: 11,
    lineHeight: 1.25,
    marginBottom: 5,
  },

  smallDescription: {
    color: MUTED_CREAM,
    fontSize: 7.1,
    lineHeight: 1.4,
  },

  symbolicBanner: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  symbolicBannerIcon: {
    width: 26,
    height: 26,
    objectFit: "contain",
    marginRight: 11,
  },

  symbolicBannerText: {
    flex: 1,
    color: MUTED_CREAM,
    fontSize: 7.7,
    lineHeight: 1.45,
  },

  guideHero: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 115,
    paddingVertical: 15,
    paddingHorizontal: 17,
    marginBottom: 13,
    borderRadius: 13,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  guideOrbitOne: {
    position: "absolute",
    top: -55,
    left: -58,
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  guideOrbitTwo: {
    position: "absolute",
    top: -27,
    left: -30,
    width: 105,
    height: 105,
    borderRadius: 53,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
  },

  guideIconOuter: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  guideIconInner: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 0.9,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  guideIcon: {
    width: 39,
    height: 39,
    objectFit: "contain",
  },

  guideTextWrap: {
    flex: 1,
  },

  guideLabel: {
    color: GOLD,
    fontSize: 7.3,
    letterSpacing: 1.25,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  guideText: {
    color: MUTED_CREAM,
    fontSize: 8.2,
    lineHeight: 1.48,
  },

  numbersCard: {
    paddingVertical: 14,
    paddingHorizontal: 17,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  numbersHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  numbersTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  numbersIcon: {
    width: 19,
    height: 19,
    objectFit: "contain",
    marginRight: 9,
  },

  numbersTitle: {
    color: CREAM,
    fontSize: 10.3,
  },

  numbersCount: {
    color: SOFT_TEXT,
    fontSize: 6.7,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  numbersIntroduction: {
    color: MUTED_CREAM,
    fontSize: 7.8,
    lineHeight: 1.42,
    marginBottom: 10,
  },

  numbersRow: {
    flexDirection: "row",
    justifyContent: "center",
  },

  numberOuterCircle: {
    width: 45,
    height: 45,
    borderRadius: 23,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
  },

  numberCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
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
    position: "relative",
    paddingVertical: 15,
    paddingHorizontal: 22,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    overflow: "hidden",
  },

  quoteHeartBackground: {
    position: "absolute",
    right: 17,
    top: 10,
    width: 50,
    height: 50,
    objectFit: "contain",
    opacity: 0.08,
  },

  quoteHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  quoteIconCircle: {
    width: 31,
    height: 31,
    borderRadius: 16,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  quoteIcon: {
    width: 20,
    height: 20,
    objectFit: "contain",
  },

  quoteLabel: {
    color: GOLD,
    fontSize: 7.2,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },

  quoteText: {
    color: CREAM,
    fontSize: 11,
    lineHeight: 1.5,
    fontStyle: "italic",
    textAlign: "center",
  },

  ritualCard: {
    flexDirection: "row",
    paddingVertical: 13,
    paddingHorizontal: 15,
    marginBottom: 11,
    borderRadius: 12,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  ritualIconCircle: {
    width: 49,
    height: 49,
    borderRadius: 25,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  ritualIcon: {
    width: 31,
    height: 31,
    objectFit: "contain",
  },

  ritualContent: {
    flex: 1,
  },

  ritualLabel: {
    color: SOFT_TEXT,
    fontSize: 6.6,
    letterSpacing: 1.05,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  ritualTitle: {
    color: GOLD,
    fontSize: 10.2,
    marginBottom: 6,
  },

  ritualText: {
    color: CREAM,
    fontSize: 7.9,
    lineHeight: 1.45,
  },

  reminderCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  reminderIcon: {
    width: 25,
    height: 25,
    objectFit: "contain",
    marginRight: 11,
  },

  reminderContent: {
    flex: 1,
  },

  reminderLabel: {
    color: GOLD,
    fontSize: 7.2,
    letterSpacing: 1.15,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  reminderText: {
    color: MUTED_CREAM,
    fontSize: 7.7,
    lineHeight: 1.43,
  },
});

function normalizeValue(value?: string) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getElementIcon(element?: string) {
  const normalized = normalizeValue(element);

  return (
    HOROSCOPE_ICONS[normalized as keyof typeof HOROSCOPE_ICONS] ??
    HOROSCOPE_ICONS.fourElements
  );
}

function getPlanetIcon(planet?: string) {
  const normalized = normalizeValue(planet);

  return (
    HOROSCOPE_ICONS[normalized as keyof typeof HOROSCOPE_ICONS] ??
    HOROSCOPE_ICONS.sun
  );
}

type LuckyCardData = {
  label: string;
  value: string;
  description: string;
  icon: string;
};

function FeaturedLuckyCard({
  card,
}: {
  card: LuckyCardData;
}) {
  return (
    <View style={styles.featuredCard} wrap={false}>
      <View style={styles.featuredCardGlow} />

      <View style={styles.featuredIconCircle}>
        <Image
          src={card.icon}
          style={styles.featuredIcon}
        />
      </View>

      <Text style={styles.featuredLabel}>
        {card.label}
      </Text>

      <Text style={styles.featuredValue}>
        {card.value}
      </Text>

      <Text style={styles.featuredDescription}>
        {card.description}
      </Text>
    </View>
  );
}

function SmallLuckyCard({
  card,
  index,
}: {
  card: LuckyCardData;
  index: number;
}) {
  return (
    <View style={styles.smallCard} wrap={false}>
      <View style={styles.smallCardHeader}>
        <View style={styles.smallIconCircle}>
          <Image
            src={card.icon}
            style={styles.smallIcon}
          />
        </View>

        <Text style={styles.smallNumber}>
          {String(index + 1).padStart(2, "0")}
        </Text>
      </View>

      <Text style={styles.smallLabel}>
        {card.label}
      </Text>

      <Text style={styles.smallValue}>
        {card.value}
      </Text>

      <Text style={styles.smallDescription}>
        {card.description}
      </Text>
    </View>
  );
}

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

  const cards: LuckyCardData[] = [
    {
      label: "Couleur favorable",
      value: lucky.color,
      icon: HOROSCOPE_ICONS.love,
      description:
        "Une teinte à privilégier dans vos vêtements, vos accessoires ou votre environnement.",
    },
    {
      label: "Planète favorable",
      value: lucky.planet,
      icon: getPlanetIcon(lucky.planet),
      description:
        "L’influence céleste à observer plus particulièrement durant cette période.",
    },
    {
      label: "Jour favorable",
      value: lucky.day,
      icon: HOROSCOPE_ICONS.sun,
      description:
        "Une journée propice pour agir, communiquer ou prendre une initiative.",
    },
    {
      label: "Pierre symbolique",
      value: lucky.stone,
      icon: HOROSCOPE_ICONS.hiddenTalents,
      description:
        "Une pierre associée aux énergies astrologiques de votre période.",
    },
    {
      label: "Élément dominant",
      value: lucky.element,
      icon: getElementIcon(lucky.element),
      description:
        "L’énergie élémentaire qui peut soutenir votre équilibre et votre intuition.",
    },
    {
      label: "Moment favorable",
      value: lucky.time,
      icon: HOROSCOPE_ICONS.moon,
      description:
        "Une période où votre énergie pourrait être plus fluide et naturellement disponible.",
    },
  ].filter(
    (item) =>
      typeof item.value === "string" &&
      item.value.trim().length > 0,
  );

  const featuredCards = cards.slice(0, 2);
  const secondaryCards = cards.slice(2);

  return (
    <>
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
                src={HOROSCOPE_ICONS.fourElements}
                style={styles.titleDecorationIcon}
              />

              <View style={styles.titleLineSmall} />
            </View>
          </View>

          {lucky.introduction ? (
            <View
              style={styles.introductionCard}
              wrap={false}
            >
              <View style={styles.introductionOrbitOne} />
              <View style={styles.introductionOrbitTwo} />

              <View style={styles.introductionIconCircle}>
                <Image
                  src={HOROSCOPE_ICONS.fourElements}
                  style={styles.introductionIcon}
                />
              </View>

              <View style={styles.introductionContent}>
                <Text style={styles.introductionLabel}>
                  Votre énergie favorable
                </Text>

                <Text style={styles.introductionText}>
                  {lucky.introduction}
                </Text>
              </View>
            </View>
          ) : null}

          <View style={styles.sectionHeader}>
            <View style={styles.sectionLine} />

            <Image
              src={HOROSCOPE_ICONS.love}
              style={styles.sectionIcon}
            />

            <Text style={styles.sectionLabel}>
              Vos symboles de la période
            </Text>
          </View>

          {featuredCards.length > 0 ? (
            <View style={styles.featuredRow}>
              {featuredCards.map((card) => (
                <FeaturedLuckyCard
                  key={card.label}
                  card={card}
                />
              ))}
            </View>
          ) : null}

          {secondaryCards.length > 0 ? (
            <View style={styles.smallGrid}>
              {secondaryCards.map((card, index) => (
                <SmallLuckyCard
                  key={card.label}
                  card={card}
                  index={index + 2}
                />
              ))}
            </View>
          ) : null}

          <View style={styles.symbolicBanner} wrap={false}>
            <Image
              src={HOROSCOPE_ICONS.soulPath}
              style={styles.symbolicBannerIcon}
            />

            <Text style={styles.symbolicBannerText}>
              Ces repères ne prédisent pas un résultat précis.
              Ils vous invitent à remarquer les moments où votre
              intuition et votre énergie semblent plus naturellement
              disponibles.
            </Text>
          </View>
        </View>

        <HoroscopePageFooter />
      </Page>

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
                src={HOROSCOPE_ICONS.integrationGuide}
                style={styles.titleDecorationIcon}
              />

              <View style={styles.titleLineSmall} />
            </View>
          </View>

          <View style={styles.guideHero} wrap={false}>
            <View style={styles.guideOrbitOne} />
            <View style={styles.guideOrbitTwo} />

            <View style={styles.guideIconOuter}>
              <View style={styles.guideIconInner}>
                <Image
                  src={HOROSCOPE_ICONS.lifePurpose}
                  style={styles.guideIcon}
                />
              </View>
            </View>

            <View style={styles.guideTextWrap}>
              <Text style={styles.guideLabel}>
                Votre boussole symbolique
              </Text>

              <Text style={styles.guideText}>
                Observez ces symboles au fil de la période.
                Ils peuvent devenir des points de repère pour
                reconnaître les moments où votre intuition,
                votre confiance et votre capacité d’action sont
                plus naturellement accessibles. Utilisez-les
                comme une invitation à ralentir et à écouter ce
                qui résonne réellement avec vous.
              </Text>
            </View>
          </View>

          {luckyNumbers.length > 0 ? (
            <View style={styles.numbersCard} wrap={false}>
              <View style={styles.numbersHeader}>
                <View style={styles.numbersTitleRow}>
                  <Image
                    src={HOROSCOPE_ICONS.sun}
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
                Ces nombres peuvent accompagner vos choix
                personnels, vos intentions, vos dates importantes
                ou vos petits rituels de la période.
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
              <Image
                src={HOROSCOPE_ICONS.love}
                style={styles.quoteHeartBackground}
              />

              <View style={styles.quoteHeader}>
                <View style={styles.quoteIconCircle}>
                  <Image
                    src={HOROSCOPE_ICONS.love}
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
            <View style={styles.ritualIconCircle}>
              <Image
                src={HOROSCOPE_ICONS.integrationGuide}
                style={styles.ritualIcon}
              />
            </View>

            <View style={styles.ritualContent}>
              <Text style={styles.ritualLabel}>
                Rituel personnel
              </Text>

              <Text style={styles.ritualTitle}>
                Créez votre moment favorable
              </Text>

              <Text style={styles.ritualText}>
                Choisissez un moment calme de la journée.
                Entourez-vous de votre couleur favorable,
                gardez votre pierre symbolique près de vous
                et notez une intention claire liée à cette
                période. Respirez lentement, relisez votre
                phrase d’inspiration et laissez votre intuition
                vous indiquer la prochaine action juste.
              </Text>
            </View>
          </View>

          <View style={styles.reminderCard} wrap={false}>
            <Image
              src={HOROSCOPE_ICONS.lifePurpose}
              style={styles.reminderIcon}
            />

            <View style={styles.reminderContent}>
              <Text style={styles.reminderLabel}>
                À retenir
              </Text>

              <Text style={styles.reminderText}>
                Ces éléments sont des repères symboliques
                destinés à accompagner votre intuition. Ils ne
                garantissent pas un résultat précis, mais peuvent
                vous aider à rester attentive aux occasions
                favorables et à renforcer votre confiance dans
                vos propres ressentis.
              </Text>
            </View>
          </View>
        </View>

        <HoroscopePageFooter />
      </Page>
    </>
  );
}
