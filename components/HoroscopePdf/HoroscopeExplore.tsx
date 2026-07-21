import {
  Image,
  Link,
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

const WEBSITE_URL = "https://luna-astralis.app";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 33,
    paddingHorizontal: 42,
    paddingBottom: 53,
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
    marginBottom: 13,
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
    minHeight: 112,
    paddingVertical: 14,
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
    top: -60,
    left: -56,
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  heroOrbitTwo: {
    position: "absolute",
    top: -25,
    left: -23,
    width: 108,
    height: 108,
    borderRadius: 54,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
  },

  heroIconOuter: {
    width: 66,
    height: 66,
    borderRadius: 33,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  heroIconInner: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 0.9,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  heroIcon: {
    width: 36,
    height: 36,
    objectFit: "contain",
  },

  heroContent: {
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
    fontSize: 12.4,
    lineHeight: 1.35,
    marginBottom: 6,
  },

  heroText: {
    color: CREAM,
    fontSize: 8.2,
    lineHeight: 1.48,
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

  freeGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 11,
  },

  freeCard: {
    position: "relative",
    width: "32%",
    minHeight: 102,
    paddingVertical: 11,
    paddingHorizontal: 10,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    overflow: "hidden",
  },

  premiumGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  premiumCard: {
    position: "relative",
    width: "48.5%",
    minHeight: 82,
    paddingVertical: 10,
    paddingHorizontal: 11,
    marginBottom: 8,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  premiumCardFeatured: {
    borderWidth: 1,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  cardTopRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: 22,
    height: 22,
    objectFit: "contain",
  },

  badge: {
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
  },

  badgeText: {
    color: GOLD,
    fontSize: 5.8,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },

  cardTitle: {
    color: GOLD,
    fontSize: 8.6,
    lineHeight: 1.3,
    marginBottom: 4,
  },

  cardText: {
    color: MUTED_CREAM,
    fontSize: 6.7,
    lineHeight: 1.4,
  },

  signatureBadge: {
    position: "absolute",
    right: 8,
    top: 8,
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: GOLD,
    backgroundColor: NAVY,
  },

  signatureBadgeText: {
    color: GOLD,
    fontSize: 5.5,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },

  websiteCard: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 58,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 11,
    borderWidth: 0.7,
    borderTopWidth: 1.4,
    borderColor: DARK_GOLD,
    borderTopColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  websiteWatermark: {
    position: "absolute",
    right: 13,
    top: 2,
    width: 56,
    height: 56,
    objectFit: "contain",
    opacity: 0.06,
  },

  websiteIconCircle: {
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

  websiteIcon: {
    width: 24,
    height: 24,
    objectFit: "contain",
  },

  websiteContent: {
    flex: 1,
  },

  websiteLabel: {
    color: SOFT_TEXT,
    fontSize: 6.3,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  websiteTitle: {
    color: GOLD,
    fontSize: 10.5,
    marginBottom: 3,
  },

  websiteText: {
    color: MUTED_CREAM,
    fontSize: 6.8,
    lineHeight: 1.35,
  },

  websiteButton: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 15,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    textDecoration: "none",
  },

  websiteButtonText: {
    color: GOLD,
    fontSize: 7.2,
    letterSpacing: 0.5,
  },
});

type OfferCardProps = {
  title: string;
  text: string;
  icon: string;
  badge: string;
  featured?: boolean;
  signature?: boolean;
};

function OfferCard({
  title,
  text,
  icon,
  badge,
  featured = false,
  signature = false,
}: OfferCardProps) {
  return (
    <View
      style={[
        styles.premiumCard,
        featured ? styles.premiumCardFeatured : {},
      ]}
      wrap={false}
    >
      {signature ? (
        <View style={styles.signatureBadge}>
          <Text style={styles.signatureBadgeText}>
            Expérience complète
          </Text>
        </View>
      ) : null}

      <View style={styles.cardTopRow}>
        <View style={styles.iconCircle}>
          <Image
            src={icon}
            style={styles.icon}
          />
        </View>

        {!signature ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {badge}
            </Text>
          </View>
        ) : null}
      </View>

      <Text style={styles.cardTitle}>
        {title}
      </Text>

      <Text style={styles.cardText}>
        {text}
      </Text>
    </View>
  );
}

type FreeCardProps = {
  title: string;
  text: string;
  icon: string;
};

function FreeCard({
  title,
  text,
  icon,
}: FreeCardProps) {
  return (
    <View style={styles.freeCard} wrap={false}>
      <View style={styles.cardTopRow}>
        <View style={styles.iconCircle}>
          <Image
            src={icon}
            style={styles.icon}
          />
        </View>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            Gratuit
          </Text>
        </View>
      </View>

      <Text style={styles.cardTitle}>
        {title}
      </Text>

      <Text style={styles.cardText}>
        {text}
      </Text>
    </View>
  );
}

export default function HoroscopeExplore({
  identity,
  period,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

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
            L’univers Luna Astralis
          </Text>

          <Text style={styles.title}>
            Continuez votre voyage astrologique
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image
              src={HOROSCOPE_ICONS.jupiter}
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
                src={HOROSCOPE_ICONS.jupiter}
                style={styles.heroIcon}
              />
            </View>
          </View>

          <View style={styles.heroContent}>
            <Text style={styles.heroLabel}>
              Une astrologie qui vous accompagne
            </Text>

            <Text style={styles.heroTitle}>
              Découvrez les autres expériences Luna Astralis
            </Text>

            <Text style={styles.heroText}>
              Explorez gratuitement votre univers astrologique ou
              approfondissez votre chemin grâce à nos rapports
              personnalisés, conçus pour éclairer vos choix, vos
              relations et les grandes étapes de votre vie.
            </Text>
          </View>
        </View>

        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionHeaderLine} />

          <Image
            src={HOROSCOPE_ICONS.sun}
            style={styles.sectionHeaderIcon}
          />

          <Text style={styles.sectionLabel}>
            Vos outils gratuits
          </Text>
        </View>

        <View style={styles.freeGrid}>
          <FreeCard
            title="Horoscope quotidien"
            text="Découvrez chaque jour les tendances de votre signe dans les domaines essentiels de votre vie."
            icon={HOROSCOPE_ICONS.sun}
          />

          <FreeCard
            title="Carte du ciel"
            text="Obtenez votre roue astrologique et découvrez votre Soleil, votre Lune et votre Ascendant."
            icon={HOROSCOPE_ICONS.innerWorld}
          />

          <FreeCard
            title="Compatibilité amoureuse"
            text="Comparez deux signes et obtenez un premier aperçu de leur potentiel amoureux."
            icon={HOROSCOPE_ICONS.love}
          />
        </View>

        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionHeaderLine} />

          <Image
            src={HOROSCOPE_ICONS.lifePurpose}
            style={styles.sectionHeaderIcon}
          />

          <Text style={styles.sectionLabel}>
            Vos rapports personnalisés
          </Text>
        </View>

        <View style={styles.premiumGrid}>
          <OfferCard
            title="Horoscope du jour"
            text="Une lecture détaillée de vos énergies, de vos relations, de votre carrière et de vos opportunités."
            icon={HOROSCOPE_ICONS.sun}
            badge="Premium"
          />

          <OfferCard
            title="Horoscope du mois"
            text="Une vision complète des tendances, des périodes favorables et des défis des prochaines semaines."
            icon={HOROSCOPE_ICONS.moon}
            badge="Premium"
          />

          <OfferCard
            title="Horoscope de l’année"
            text="Votre feuille de route astrologique pour comprendre les grands cycles et les moments importants de votre année."
            icon={HOROSCOPE_ICONS.jupiter}
            badge="Premium"
          />

          <OfferCard
            title="Compatibilité Premium"
            text="Une analyse approfondie du lien amoureux, des émotions, de la communication et du potentiel du couple."
            icon={HOROSCOPE_ICONS.love}
            badge="Premium"
          />

          <OfferCard
            title="Carte du ciel Essentielle"
            text="Les fondements de votre thème astral, vos planètes principales, vos éléments et vos grandes tendances."
            icon={HOROSCOPE_ICONS.innerWorld}
            badge="Essentielle"
          />

          <OfferCard
            title="Carte du ciel Premium"
            text="Une exploration approfondie de vos planètes, maisons, aspects, forces, défis, relations et carrière."
            icon={HOROSCOPE_ICONS.hiddenTalents}
            badge="Premium"
            featured
          />

          <OfferCard
            title="Carte du ciel Signature"
            text="L’expérience Luna Astralis la plus complète pour explorer votre personnalité, votre chemin de vie et votre potentiel."
            icon={HOROSCOPE_ICONS.soulPath}
            badge="Signature"
            featured
            signature
          />

          <OfferCard
            title="Votre univers astrologique"
            text="Retrouvez l’ensemble de vos outils gratuits et de vos rapports personnalisés sur Luna Astralis."
            icon={HOROSCOPE_ICONS.integrationGuide}
            badge="En ligne"
          />
        </View>

        <View style={styles.websiteCard} wrap={false}>
          <Image
            src={HOROSCOPE_ICONS.integrationGuide}
            style={styles.websiteWatermark}
          />

          <View style={styles.websiteIconCircle}>
            <Image
              src={HOROSCOPE_ICONS.integrationGuide}
              style={styles.websiteIcon}
            />
          </View>

          <View style={styles.websiteContent}>
            <Text style={styles.websiteLabel}>
              Découvrez Luna Astralis
            </Text>

            <Text style={styles.websiteTitle}>
              luna-astralis.app
            </Text>

            <Text style={styles.websiteText}>
              Retrouvez gratuitement vos outils astrologiques et
              choisissez le rapport personnalisé qui correspond à
              votre chemin.
            </Text>
          </View>

          <Link
            src={WEBSITE_URL}
            style={styles.websiteButton}
          >
            <Text style={styles.websiteButtonText}>
              Visiter le site
            </Text>
          </Link>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
