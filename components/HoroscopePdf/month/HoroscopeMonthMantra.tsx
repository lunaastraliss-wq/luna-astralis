import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import HoroscopePageFooter
  from "../HoroscopePageFooter";

import type {
  HoroscopeIdentity,
  HoroscopePeriodData,
} from "../HoroscopePdfTypes";

import type {
  MonthlyMantraResult,
} from "./data/types";

/*
|--------------------------------------------------------------------------
| Propriétés
|--------------------------------------------------------------------------
*/

type HoroscopeMonthMantraProps = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  mantra: MonthlyMantraResult;
};

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const styles = StyleSheet.create({
  page: {
    position: "relative",
    minHeight: "100%",
    paddingTop: 46,
    paddingRight: 48,
    paddingBottom: 62,
    paddingLeft: 48,
    backgroundColor: "#FBF8F2",
    color: "#2E2533",
    fontFamily: "Helvetica",
  },

  /*
  |--------------------------------------------------------------------------
  | En-tête
  |--------------------------------------------------------------------------
  */

  eyebrow: {
    marginBottom: 8,
    color: "#9B7441",
    fontSize: 8,
    fontWeight: 700,
    letterSpacing: 2.4,
    textAlign: "center",
    textTransform: "uppercase",
  },

  title: {
    color: "#3C2945",
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1.2,
    textAlign: "center",
  },

  subtitle: {
    marginTop: 7,
    color: "#776C7B",
    fontSize: 10,
    lineHeight: 1.5,
    textAlign: "center",
  },

  divider: {
    alignSelf: "center",
    width: 62,
    height: 1,
    marginTop: 17,
    marginBottom: 22,
    backgroundColor: "#CDAA6A",
  },

  /*
  |--------------------------------------------------------------------------
  | Carte principale — mantra
  |--------------------------------------------------------------------------
  */

  mantraCard: {
    paddingTop: 28,
    paddingRight: 30,
    paddingBottom: 28,
    paddingLeft: 30,
    borderWidth: 1,
    borderColor: "#D9C29A",
    borderRadius: 12,
    backgroundColor: "#F3EBDD",
  },

  mantraLabel: {
    marginBottom: 13,
    color: "#9B7441",
    fontSize: 8,
    fontWeight: 700,
    letterSpacing: 2,
    textAlign: "center",
    textTransform: "uppercase",
  },

  mantraText: {
    color: "#3B2945",
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 1.5,
    textAlign: "center",
  },

  /*
  |--------------------------------------------------------------------------
  | Sections secondaires
  |--------------------------------------------------------------------------
  */

  sections: {
    marginTop: 21,
  },

  section: {
    marginBottom: 13,
    paddingTop: 16,
    paddingRight: 18,
    paddingBottom: 16,
    paddingLeft: 18,
    borderWidth: 1,
    borderColor: "#E4D9C8",
    borderRadius: 9,
    backgroundColor: "#FFFFFF",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  sectionNumber: {
    width: 23,
    height: 23,
    marginRight: 10,
    paddingTop: 7,
    borderRadius: 12,
    backgroundColor: "#5B3C63",
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: 700,
    lineHeight: 1,
    textAlign: "center",
  },

  sectionTitle: {
    color: "#5B3C63",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 0.7,
    textTransform: "uppercase",
  },

  sectionText: {
    color: "#4F4653",
    fontSize: 10,
    lineHeight: 1.6,
  },

  /*
  |--------------------------------------------------------------------------
  | Message final
  |--------------------------------------------------------------------------
  */

  messageCard: {
    marginTop: 2,
    paddingTop: 18,
    paddingRight: 20,
    paddingBottom: 18,
    paddingLeft: 20,
    borderLeftWidth: 3,
    borderLeftColor: "#CDAA6A",
    backgroundColor: "#F7F1E8",
  },

  messageLabel: {
    marginBottom: 8,
    color: "#9B7441",
    fontSize: 8,
    fontWeight: 700,
    letterSpacing: 1.7,
    textTransform: "uppercase",
  },

  messageText: {
    color: "#4A3D4E",
    fontSize: 10,
    lineHeight: 1.65,
  },
});

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function HoroscopeMonthMantra({
  identity,
  period,
  mantra,
}: HoroscopeMonthMantraProps) {
  const personLabel =
    identity.firstName?.trim() ||
    identity.zodiacSignLabel ||
    "Votre signe";

  return (
    <Page
      size="A4"
      style={styles.page}
      wrap={false}
    >
      {/*
      |--------------------------------------------------------------------------
      | En-tête
      |--------------------------------------------------------------------------
      */}

      <Text style={styles.eyebrow}>
        Guidance intérieure
      </Text>

      <Text style={styles.title}>
        Votre mantra du mois
      </Text>

      <Text style={styles.subtitle}>
        {personLabel} • {period.label}
      </Text>

      <View style={styles.divider} />

      {/*
      |--------------------------------------------------------------------------
      | Mantra principal
      |--------------------------------------------------------------------------
      */}

      <View
        style={styles.mantraCard}
        wrap={false}
      >
        <Text style={styles.mantraLabel}>
          À répéter tout au long du mois
        </Text>

        <Text style={styles.mantraText}>
          « {mantra.mantra} »
        </Text>
      </View>

      {/*
      |--------------------------------------------------------------------------
      | Intention et affirmation
      |--------------------------------------------------------------------------
      */}

      <View style={styles.sections}>
        <View
          style={styles.section}
          wrap={false}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionNumber}>
              1
            </Text>

            <Text style={styles.sectionTitle}>
              Votre intention
            </Text>
          </View>

          <Text style={styles.sectionText}>
            {mantra.intention}
          </Text>
        </View>

        <View
          style={styles.section}
          wrap={false}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionNumber}>
              2
            </Text>

            <Text style={styles.sectionTitle}>
              Votre affirmation
            </Text>
          </View>

          <Text style={styles.sectionText}>
            {mantra.affirmation}
          </Text>
        </View>
      </View>

      {/*
      |--------------------------------------------------------------------------
      | Message Luna Astralis
      |--------------------------------------------------------------------------
      */}

      <View
        style={styles.messageCard}
        wrap={false}
      >
        <Text style={styles.messageLabel}>
          Message de Luna Astralis
        </Text>

        <Text style={styles.messageText}>
          {mantra.message}
        </Text>
      </View>

      {/*
      |--------------------------------------------------------------------------
      | Pied de page commun avec numéro de page
      |--------------------------------------------------------------------------
      */}

      <HoroscopePageFooter />
    </Page>
  );
}
