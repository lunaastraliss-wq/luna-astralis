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
    paddingHorizontal: 42,
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
    marginBottom: 16,
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
    lineHeight: 1.18,
    marginBottom: 7,
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
    width: 62,
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
    width: 23,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  heroCard: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 148,
    paddingVertical: 17,
    paddingHorizontal: 18,
    marginBottom: 12,
    borderRadius: 14,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2.2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  heroOrbitOne: {
    position: "absolute",
    top: -72,
    left: -74,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  heroOrbitTwo: {
    position: "absolute",
    top: -43,
    left: -45,
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
  },

  heroIconOuter: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 17,
  },

  heroIconInner: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 0.9,
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

  heroContent: {
    flex: 1,
  },

  heroLabel: {
    color: GOLD,
    fontSize: 7.4,
    letterSpacing: 1.35,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  heroTitle: {
    color: CREAM,
    fontSize: 13.2,
    lineHeight: 1.3,
    marginBottom: 7,
  },

  heroText: {
    color: MUTED_CREAM,
    fontSize: 8.25,
    lineHeight: 1.48,
    textAlign: "justify",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
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
    fontSize: 9,
    letterSpacing: 1.35,
    textTransform: "uppercase",
  },

  insightGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 11,
  },

  insightCard: {
    position: "relative",
    width: "23.5%",
    minHeight: 128,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    overflow: "hidden",
  },

  insightNumber: {
    position: "absolute",
    right: 9,
    top: 8,
    color: DEEP_GOLD,
    fontSize: 7,
    letterSpacing: 1,
  },

  insightIconCircle: {
    width: 35,
    height: 35,
    borderRadius: 18,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 9,
  },

  insightIcon: {
    width: 23,
    height: 23,
    objectFit: "contain",
  },

  insightTitle: {
    color: GOLD,
    fontSize: 8.4,
    lineHeight: 1.25,
    marginBottom: 6,
  },

  insightText: {
    color: MUTED_CREAM,
    fontSize: 6.75,
    lineHeight: 1.42,
  },

  finalMessageCard: {
    position: "relative",
    paddingVertical: 13,
    paddingHorizontal: 17,
    marginBottom: 11,
    borderRadius: 12,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    borderTopWidth: 1.5,
    borderTopColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  finalMessageWatermark: {
    position: "absolute",
    right: 15,
    top: 5,
    width: 54,
    height: 54,
    objectFit: "contain",
    opacity: 0.07,
  },

  finalMessageHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  finalMessageIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginRight: 9,
  },

  finalMessageLabel: {
    color: GOLD,
    fontSize: 7.4,
    letterSpacing: 1.3,
    textTransform: "uppercase",
  },

  finalMessageText: {
    color: CREAM,
    fontSize: 8.8,
    lineHeight: 1.52,
  },

  thanksCard: {
    position: "relative",
    flex: 1,
    minHeight: 172,
    paddingVertical: 17,
    paddingHorizontal: 22,
    borderRadius: 14,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  thanksOrbitOne: {
    position: "absolute",
    right: -62,
    bottom: -62,
    width: 165,
    height: 165,
    borderRadius: 83,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  thanksOrbitTwo: {
    position: "absolute",
    right: -33,
    bottom: -33,
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
  },

  thanksDecoration: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  thanksLine: {
    width: 44,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  zodiacIconOuter: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 13,
  },

  zodiacIconInner: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 0.9,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
  },

  zodiacIcon: {
    width: 35,
    height: 35,
    objectFit: "contain",
  },

  thankYouTitle: {
    color: GOLD,
    fontSize: 16,
    marginBottom: 6,
    textAlign: "center",
  },

  thankYouSubtitle: {
    color: CREAM,
    fontSize: 9.3,
    lineHeight: 1.45,
    textAlign: "center",
    maxWidth: 390,
    marginBottom: 9,
  },

  thankYouText: {
    color: MUTED_CREAM,
    fontSize: 7.7,
    lineHeight: 1.45,
    textAlign: "center",
    maxWidth: 410,
    marginBottom: 11,
  },

  websiteCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 18,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 8,
  },

  websiteIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
    marginRight: 8,
  },

  websiteText: {
    color: GOLD,
    fontSize: 8.7,
    letterSpacing: 0.8,
  },

  signature: {
    color: SOFT_TEXT,
    fontSize: 7.4,
    textAlign: "center",
  },
});

type InsightCardProps = {
  number: string;
  icon: string;
  title: string;
  text: string;
};

function InsightCard({
  number,
  icon,
  title,
  text,
}: InsightCardProps) {
  return (
    <View style={styles.insightCard} wrap={false}>
      <Text style={styles.insightNumber}>
        {number}
      </Text>

      <View style={styles.insightIconCircle}>
        <Image
          src={icon}
          style={styles.insightIcon}
        />
      </View>

      <Text style={styles.insightTitle}>
        {title}
      </Text>

      <Text style={styles.insightText}>
        {text}
      </Text>
    </View>
  );
}

export default function HoroscopeConclusion({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const firstName =
    typeof identity.firstName === "string" &&
    identity.firstName.trim().length > 0
      ? identity.firstName.trim()
      : null;

  const conclusionTitle =
    content.conclusionTitle?.trim() ||
    "Votre chemin pour cette période";

  const conclusionText =
    content.conclusion?.trim() ||
    "Les influences de cette période vous invitent à avancer avec conscience, confiance et discernement. Accueillez les occasions qui vous ressemblent et accordez-vous le droit d’ajuster votre direction lorsque cela devient nécessaire.";

  const finalMessage =
    content.finalMessage?.trim() ||
    "L’astrologie éclaire les tendances, les forces et les défis possibles. Elle ne décide jamais à votre place. Vos choix, votre expérience et votre intuition restent au cœur de votre parcours.";

  const insightCards: InsightCardProps[] = [
    {
      number: "01",
      icon: HOROSCOPE_ICONS.soulPath,
      title: "Votre évolution",
      text:
        "Cette période vous invite à reconnaître ce qui demande à grandir, à changer ou à être dépassé.",
    },
    {
      number: "02",
      icon: HOROSCOPE_ICONS.innerWorld,
      title: "Votre intuition",
      text:
        "Vos ressentis peuvent devenir un guide précieux lorsque vous leur accordez du calme et de l’espace.",
    },
    {
      number: "03",
      icon: HOROSCOPE_ICONS.hiddenTalents,
      title: "Vos ressources",
      text:
        "Vos qualités naturelles, parfois discrètes, peuvent vous aider à traverser les défis avec confiance.",
    },
    {
      number: "04",
      icon: HOROSCOPE_ICONS.integrationGuide,
      title: "Votre direction",
      text:
        "Avancez par étapes, observez les signes utiles et choisissez ce qui reste profondément juste pour vous.",
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
            Conclusion
          </Text>

          <Text style={styles.title}>
            Votre lumière pour la suite
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
            <Text style={styles.heroLabel}>
              Synthèse essentielle
            </Text>

            <Text style={styles.heroTitle}>
              {conclusionTitle}
            </Text>

            <Text style={styles.heroText}>
              {conclusionText}
            </Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <View style={styles.sectionLine} />

          <Image
            src={HOROSCOPE_ICONS.integrationGuide}
            style={styles.sectionIcon}
          />

          <Text style={styles.sectionLabel}>
            Ce que vous devez retenir
          </Text>
        </View>

        <View style={styles.insightGrid}>
          {insightCards.map((card) => (
            <InsightCard
              key={card.number}
              number={card.number}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </View>

        <View style={styles.finalMessageCard} wrap={false}>
          <Image
            src={HOROSCOPE_ICONS.love}
            style={styles.finalMessageWatermark}
          />

          <View style={styles.finalMessageHeader}>
            <Image
              src={HOROSCOPE_ICONS.love}
              style={styles.finalMessageIcon}
            />

            <Text style={styles.finalMessageLabel}>
              Votre message de clôture
            </Text>
          </View>

          <Text style={styles.finalMessageText}>
            {finalMessage}
          </Text>
        </View>

        <View style={styles.thanksCard} wrap={false}>
          <View style={styles.thanksOrbitOne} />
          <View style={styles.thanksOrbitTwo} />

          <View style={styles.thanksDecoration}>
            <View style={styles.thanksLine} />

            <View style={styles.zodiacIconOuter}>
              <View style={styles.zodiacIconInner}>
                <Image
                  src={zodiacIconUrl}
                  style={styles.zodiacIcon}
                />
              </View>
            </View>

            <View style={styles.thanksLine} />
          </View>

          <Text style={styles.thankYouTitle}>
            {firstName
              ? `Merci, ${firstName}`
              : "Merci pour votre confiance"}
          </Text>

          <Text style={styles.thankYouSubtitle}>
            Que cette lecture vous accompagne avec clarté,
            confiance et inspiration.
          </Text>

          <Text style={styles.thankYouText}>
            Gardez ce rapport près de vous et revenez-y lorsque vous
            aurez besoin de prendre du recul, de retrouver votre direction
            ou de renouer avec ce qui compte vraiment pour vous.
          </Text>

          <View style={styles.websiteCard}>
            <Image
              src={HOROSCOPE_ICONS.integrationGuide}
              style={styles.websiteIcon}
            />

            <Text style={styles.websiteText}>
              luna-astralis.app
            </Text>
          </View>

          <Text style={styles.signature}>
            Créé avec soin par Luna Astralis
          </Text>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
