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


import type {
  HoroscopeCoverProps,
} from "./HoroscopePdfTypes";

import {
  formatHoroscopePeriodLabel,
  getHoroscopeZodiacIconUrl,
} from "./HoroscopePdfUtils";

const NAVY_CARD = "#0A1729";
const GOLD = "#F4C95D";
const CREAM = "#FFF8E7";
const MUTED_CREAM = "#DDD5C6";
const DARK_GOLD = "#8F6E35";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    backgroundColor: "#06101F",
    paddingHorizontal: 52,
    paddingTop: 52,
    paddingBottom: 44,
    fontFamily: "Helvetica",
  },

  content: {
    position: "relative",
    zIndex: 2,
    flex: 1,
    alignItems: "center",
  },

  logo: {
    width: 150,
    height: 54,
    objectFit: "contain",
    marginBottom: 52,
  },

  smallLabel: {
    color: GOLD,
    fontSize: 10,
    letterSpacing: 3,
    textTransform: "uppercase",
    marginBottom: 16,
  },

  title: {
    color: CREAM,
    fontSize: 28,
    lineHeight: 1.15,
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    color: MUTED_CREAM,
    fontSize: 12,
    lineHeight: 1.5,
    textAlign: "center",
    marginBottom: 34,
  },

  zodiacFrame: {
    width: 190,
    height: 190,
    borderRadius: 95,
    borderWidth: 1.2,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },

  zodiacInnerFrame: {
    width: 166,
    height: 166,
    borderRadius: 83,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
  },

  zodiacIcon: {
    width: 112,
    height: 112,
    objectFit: "contain",
  },

  zodiacName: {
    color: GOLD,
    fontSize: 24,
    marginBottom: 10,
  },

  period: {
    color: CREAM,
    fontSize: 13,
    textAlign: "center",
    marginBottom: 22,
  },

  personCard: {
    width: "84%",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 8,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
  },

  personLabel: {
    color: MUTED_CREAM,
    fontSize: 8,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  personName: {
    color: CREAM,
    fontSize: 14,
  },

  footerText: {
    position: "absolute",
    bottom: 14,
    left: 0,
    right: 0,
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1.8,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default function HoroscopeCover({
  identity,
  period,
  reportTitle,
  reportSubtitle,
  logoUrl,
  zodiacIconUrl,
}: HoroscopeCoverProps) {
  const finalLogoUrl = logoUrl || HOROSCOPE_LOGO_URL;

  const finalZodiacIconUrl =
    zodiacIconUrl ||
    getHoroscopeZodiacIconUrl(identity.zodiacSign);

  const periodLabel = formatHoroscopePeriodLabel(period);

  return (
    <Page size="A4" style={styles.page}>
      

      <View style={styles.content}>
        <Image
          src={finalLogoUrl}
          style={styles.logo}
        />

        <Text style={styles.smallLabel}>
          Luna Astralis
        </Text>

        <Text style={styles.title}>
          {reportTitle}
        </Text>

        {reportSubtitle ? (
          <Text style={styles.subtitle}>
            {reportSubtitle}
          </Text>
        ) : (
          <Text style={styles.subtitle}>
            Votre guidance astrologique personnalisée
          </Text>
        )}

        <View style={styles.zodiacFrame}>
          <View style={styles.zodiacInnerFrame}>
            <Image
              src={finalZodiacIconUrl}
              style={styles.zodiacIcon}
            />
          </View>
        </View>

        <Text style={styles.zodiacName}>
          {identity.zodiacSignLabel}
        </Text>

        <Text style={styles.period}>
          {periodLabel}
        </Text>

        {identity.firstName ? (
          <View style={styles.personCard}>
            <Text style={styles.personLabel}>
              Préparé spécialement pour
            </Text>

            <Text style={styles.personName}>
              {identity.firstName}
            </Text>
          </View>
        ) : null}
      </View>

      <Text style={styles.footerText}>
        Horoscope personnalisé
      </Text>
    </Page>
  );
}
