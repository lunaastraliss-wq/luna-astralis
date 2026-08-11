import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  ASCENDANT_ICON,
  PLANET_ICONS,
} from "./EssentialPdfAssets";

import { pdfStyles } from "./EssentialPdfStyles";

import type {
  PdfLocale,
  SummaryProps,
} from "./EssentialPdfTypes";

import {
  getAscendantSign,
  getLocalizedSignName,
  getPlanet,
  getPlanetSignName,
} from "./EssentialPdfUtils";

import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

/*
|--------------------------------------------------------------------------
| i18n
|--------------------------------------------------------------------------
*/

import pdfSummaryFr from "../../i18n/migrated/fr/components/essentialpdf/pdfsummary.json";
import pdfSummaryEn from "../../i18n/migrated/en/components/essentialpdf/pdfsummary.json";
import pdfSummaryEs from "../../i18n/migrated/es/components/essentialpdf/pdfsummary.json";
import pdfSummaryDe from "../../i18n/migrated/de/components/essentialpdf/pdfsummary.json";
import pdfSummaryIt from "../../i18n/migrated/it/components/essentialpdf/pdfsummary.json";
import pdfSummaryPt from "../../i18n/migrated/pt/components/essentialpdf/pdfsummary.json";

type Dictionary =
  Record<string, string>;

const PDF_SUMMARY_BY_LOCALE: Record<
  PdfLocale,
  Dictionary
> = {
  fr: pdfSummaryFr,
  en: pdfSummaryEn,
  es: pdfSummaryEs,
  de: pdfSummaryDe,
  it: pdfSummaryIt,
  pt: pdfSummaryPt,
};

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 17,
  },

  kicker: {
    color: "#f4c95d",
    fontSize: 8.5,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  title: {
    color: "#fff8e7",
    fontSize: 25,
    lineHeight: 1.15,
    textAlign: "center",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 9,
  },

  dividerLine: {
    width: 50,
    height: 1,
    backgroundColor: "#8f793c",
  },

  dividerIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginHorizontal: 10,
  },

  lead: {
    maxWidth: 410,
    color: "#c9c5bb",
    fontSize: 9.4,
    lineHeight: 1.45,
    textAlign: "center",
  },

  cardsRow: {
    flexDirection: "row",
    marginBottom: 13,
  },

  card: {
    flexGrow: 1,
    flexBasis: 0,
    minHeight: 172,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  cardSpacing: {
    marginRight: 8,
  },

  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "#0b1124",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  icon: {
    width: 29,
    height: 29,
    objectFit: "contain",
  },

  cardLabel: {
    color: "#9da4b7",
    fontSize: 7.7,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 5,
    textAlign: "center",
  },

  cardValue: {
    color: "#f4c95d",
    fontSize: 15,
    lineHeight: 1.2,
    marginBottom: 8,
    textAlign: "center",
  },

  cardDivider: {
    width: 32,
    height: 1,
    backgroundColor: "#8f793c",
    marginBottom: 8,
  },

  cardMeaning: {
    color: "#fff8e7",
    fontSize: 9.5,
    lineHeight: 1.3,
    marginBottom: 6,
    textAlign: "center",
  },

  cardDescription: {
    color: "#bfc5d5",
    fontSize: 8.1,
    lineHeight: 1.4,
    textAlign: "center",
  },

  synthesis: {
    position: "relative",
    flexDirection: "row",
    paddingVertical: 13,
    paddingHorizontal: 17,
    marginBottom: 9,
    overflow: "hidden",
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  synthesisIconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    backgroundColor: "#0b1124",
    borderWidth: 1,
    borderColor: "#f4c95d",
  },

  synthesisIcon: {
    width: 26,
    height: 26,
    objectFit: "contain",
  },

  synthesisWatermark: {
    position: "absolute",
    right: 12,
    top: 7,
    width: 82,
    height: 82,
    objectFit: "contain",
    opacity: 0.035,
  },

  synthesisContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  synthesisKicker: {
    color: "#f4c95d",
    fontSize: 7.8,
    letterSpacing: 1.25,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  synthesisTitle: {
    color: "#fff8e7",
    fontSize: 13,
    lineHeight: 1.3,
    marginBottom: 8,
  },

  synthesisText: {
    color: "#d8d4ca",
    fontSize: 8.8,
    lineHeight: 1.48,
    marginBottom: 7,
  },

  synthesisTextLast: {
    color: "#bfc5d5",
    fontSize: 8.8,
    lineHeight: 1.48,
  },

  insightRow: {
    flexDirection: "row",
    marginBottom: 8,
  },

  insightBox: {
    flexGrow: 1,
    flexBasis: 0,
    minHeight: 84,
    paddingVertical: 9,
    paddingHorizontal: 13,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  insightBoxLeft: {
    marginRight: 8,
  },

  insightHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  insightIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginRight: 8,
  },

  insightTitle: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#f4c95d",
    fontSize: 8.3,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },

  insightText: {
    color: "#bfc5d5",
    fontSize: 8.2,
    lineHeight: 1.42,
  },

  note: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 13,
    marginBottom: 24,
    backgroundColor: "#141b32",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  noteIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginRight: 10,
  },

  noteText: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#bfc5d5",
    fontSize: 7.9,
    lineHeight: 1.32,
  },
});

/*
|--------------------------------------------------------------------------
| Valeurs sécurisées
|--------------------------------------------------------------------------
*/

function getMissingValue(
  locale: PdfLocale
): string {
  switch (locale) {
    case "en":
      return "Not specified";

    case "es":
      return "No especificado";

    case "de":
      return "Nicht angegeben";

    case "it":
      return "Non specificato";

    case "pt":
      return "Não especificado";

    default:
      return "Non précisé";
  }
}

function safeSign(
  value: string,
  locale: PdfLocale
): string {
  const translated =
    getLocalizedSignName(
      value,
      locale
    );

  return (
    translated &&
    translated.trim().length > 0 &&
    translated !== "—"
  )
    ? translated
    : getMissingValue(locale);
}

/*
|--------------------------------------------------------------------------
| PdfSummary
|--------------------------------------------------------------------------
*/

export default function PdfSummary({
  planets,
  angles,
  locale = "fr",
}: SummaryProps) {
  const safeLocale: PdfLocale =
    locale || "fr";

  const t =
    PDF_SUMMARY_BY_LOCALE[
      safeLocale
    ] ||
    PDF_SUMMARY_BY_LOCALE.fr;

  const safePlanets =
    Array.isArray(planets)
      ? planets
      : [];

  const sun =
    getPlanet(
      safePlanets,
      "Sun"
    );

  const moon =
    getPlanet(
      safePlanets,
      "Moon"
    );

  const sunSign =
    safeSign(
      getPlanetSignName(
        sun
      ),
      safeLocale
    );

  const moonSign =
    safeSign(
      getPlanetSignName(
        moon
      ),
      safeLocale
    );

  const ascendantSign =
    safeSign(
      getAscendantSign(
        angles
      ),
      safeLocale
    );

  const sunIcon =
    PLANET_ICONS.Sun;

  const moonIcon =
    PLANET_ICONS.Moon;

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.header}>
        <Text style={styles.kicker}>
          {t.portrait_astrologique}
        </Text>

        <Text style={styles.title}>
          {t.vos_trois_grands_piliers}
        </Text>

        <View style={styles.divider}>
          <View
            style={styles.dividerLine}
          />

          <Image
            src={sunIcon}
            style={styles.dividerIcon}
          />

          <View
            style={styles.dividerLine}
          />
        </View>

        <Text style={styles.lead}>
          {
            t.trois_energies_fondamentales_qui_dessinent_ensemble_les_gran
          }
        </Text>
      </View>

      <View style={styles.cardsRow}>
        <View
          style={[
            styles.card,
            styles.cardSpacing,
          ]}
        >
          <View
            style={styles.iconCircle}
          >
            <Image
              src={sunIcon}
              style={styles.icon}
            />
          </View>

          <Text
            style={styles.cardLabel}
          >
            {t.votre_soleil}
          </Text>

          <Text
            style={styles.cardValue}
          >
            {sunSign}
          </Text>

          <View
            style={styles.cardDivider}
          />

          <Text
            style={styles.cardMeaning}
          >
            {t.votre_identite_profonde}
          </Text>

          <Text
            style={
              styles.cardDescription
            }
          >
            {
              t.ce_qui_vous_anime_vous_guide_et_cherche_naturellement_a_s_ac
            }
          </Text>
        </View>

        <View
          style={[
            styles.card,
            styles.cardSpacing,
          ]}
        >
          <View
            style={styles.iconCircle}
          >
            <Image
              src={moonIcon}
              style={styles.icon}
            />
          </View>

          <Text
            style={styles.cardLabel}
          >
            {t.votre_lune}
          </Text>

          <Text
            style={styles.cardValue}
          >
            {moonSign}
          </Text>

          <View
            style={styles.cardDivider}
          />

          <Text
            style={styles.cardMeaning}
          >
            {t.votre_monde_emotionnel}
          </Text>

          <Text
            style={
              styles.cardDescription
            }
          >
            {
              t.vos_besoins_affectifs_votre_sensibilite_et_votre_maniere_de
            }
          </Text>
        </View>

        <View style={styles.card}>
          <View
            style={styles.iconCircle}
          >
            <Image
              src={ASCENDANT_ICON}
              style={styles.icon}
            />
          </View>

          <Text
            style={styles.cardLabel}
          >
            {t.votre_ascendant}
          </Text>

          <Text
            style={styles.cardValue}
          >
            {ascendantSign}
          </Text>

          <View
            style={styles.cardDivider}
          />

          <Text
            style={styles.cardMeaning}
          >
            {t.votre_presence_spontanee}
          </Text>

          <Text
            style={
              styles.cardDescription
            }
          >
            {
              t.votre_premiere_impulsion_face_a_la_vie_et_l_energie_que_les
            }
          </Text>
        </View>
      </View>

      <View style={styles.synthesis}>
        <View
          style={
            styles.synthesisIconCircle
          }
        >
          <Image
            src={ASCENDANT_ICON}
            style={styles.synthesisIcon}
          />
        </View>

        <Image
          src={ASCENDANT_ICON}
          style={
            styles.synthesisWatermark
          }
        />

        <View
          style={
            styles.synthesisContent
          }
        >
          <Text
            style={
              styles.synthesisKicker
            }
          >
            {
              t.la_rencontre_de_vos_trois_energies
            }
          </Text>

          <Text
            style={
              styles.synthesisTitle
            }
          >
            {t.soleil_en}{" "}
            {sunSign}
            {t.lune_en}{" "}
            {moonSign}{" "}
            {t.et_ascendant}{" "}
            {ascendantSign}
          </Text>

          <Text
            style={
              styles.synthesisText
            }
          >
            {
              t.le_soleil_represente_la_personne_que_vous_cherchez_pleinemen
            }
          </Text>

          <Text
            style={
              styles.synthesisTextLast
            }
          >
            {
              t.l_equilibre_entre_ces_trois_energies_constitue_la_signature
            }
          </Text>
        </View>
      </View>

      <View
        style={styles.insightRow}
      >
        <View
          style={[
            styles.insightBox,
            styles.insightBoxLeft,
          ]}
        >
          <View
            style={
              styles.insightHeader
            }
          >
            <Image
              src={sunIcon}
              style={
                styles.insightIcon
              }
            />

            <Text
              style={
                styles.insightTitle
              }
            >
              {
                t.votre_direction_interieure
              }
            </Text>
          </View>

          <Text
            style={
              styles.insightText
            }
          >
            {
              t.votre_soleil_indique_ce_que_vous_cherchez_a_construire_et_a
            }
          </Text>
        </View>

        <View
          style={styles.insightBox}
        >
          <View
            style={
              styles.insightHeader
            }
          >
            <Image
              src={moonIcon}
              style={
                styles.insightIcon
              }
            />

            <Text
              style={
                styles.insightTitle
              }
            >
              {
                t.votre_cle_d_equilibre
              }
            </Text>
          </View>

          <Text
            style={
              styles.insightText
            }
          >
            {
              t.ecouter_vos_besoins_emotionnels_tout_en_assumant_votre_ident
            }
          </Text>
        </View>
      </View>

      <View style={styles.note}>
        <Image
          src={moonIcon}
          style={styles.noteIcon}
        />

        <Text
          style={styles.noteText}
        >
          {
            t.les_prochaines_pages_approfondissent_chacune_de_vos_planetes
          }
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
