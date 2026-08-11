import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { pdfStyles } from "./EssentialPdfStyles";

import {
  ASCENDANT_ICON,
  PLANET_ICONS,
} from "./EssentialPdfAssets";

import type {
  PdfLocale,
} from "./EssentialPdfTypes";

import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

/*
|--------------------------------------------------------------------------
| i18n
|--------------------------------------------------------------------------
*/

import pdfConclusionFr from "../../i18n/migrated/fr/components/essentialpdf/pdfconclusion.json";
import pdfConclusionEn from "../../i18n/migrated/en/components/essentialpdf/pdfconclusion.json";
import pdfConclusionEs from "../../i18n/migrated/es/components/essentialpdf/pdfconclusion.json";
import pdfConclusionDe from "../../i18n/migrated/de/components/essentialpdf/pdfconclusion.json";
import pdfConclusionIt from "../../i18n/migrated/it/components/essentialpdf/pdfconclusion.json";
import pdfConclusionPt from "../../i18n/migrated/pt/components/essentialpdf/pdfconclusion.json";

type Dictionary =
  Record<string, string>;

const PDF_CONCLUSION_BY_LOCALE: Record<
  PdfLocale,
  Dictionary
> = {
  fr: pdfConclusionFr,
  en: pdfConclusionEn,
  es: pdfConclusionEs,
  de: pdfConclusionDe,
  it: pdfConclusionIt,
  pt: pdfConclusionPt,
};

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },

  conclusionCard: {
    position: "relative",
    paddingTop: 22,
    paddingBottom: 22,
    paddingHorizontal: 24,
    marginTop: 8,
    marginBottom: 20,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  watermark: {
    position: "absolute",
    top: 12,
    right: 17,
    width: 48,
    height: 48,
    objectFit: "contain",
    opacity: 0.08,
  },

  paragraph: {
    color: "#e9e4d8",
    fontSize: 10.5,
    lineHeight: 1.58,
    marginBottom: 12,
    textAlign: "justify",
  },

  paragraphLast: {
    color: "#e9e4d8",
    fontSize: 10.5,
    lineHeight: 1.58,
    textAlign: "justify",
  },

  signatureBox: {
    alignItems: "center",
    paddingTop: 22,
    paddingBottom: 22,
    paddingHorizontal: 24,
    backgroundColor: "#141b32",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  signatureIcon: {
    width: 26,
    height: 26,
    objectFit: "contain",
    marginBottom: 9,
  },

  brand: {
    color: "#f4c95d",
    fontSize: 16,
    marginBottom: 10,
  },

  slogan: {
    color: "#fff8e7",
    fontSize: 14.5,
    lineHeight: 1.5,
    textAlign: "center",
  },

  bottomGroup: {
    marginTop: "auto",
    paddingTop: 22,
    paddingBottom: 34,
    alignItems: "center",
  },

  closingText: {
    color: "#bfc5d5",
    fontSize: 9.3,
    lineHeight: 1.5,
    textAlign: "center",
    marginHorizontal: 35,
    marginBottom: 18,
  },

  iconsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 36,
    marginHorizontal: 8,
  },

  bottomIcon: {
    width: 25,
    height: 25,
    objectFit: "contain",
  },

  smallDivider: {
    width: 24,
    height: 1,
    marginHorizontal: 6,
    backgroundColor: "#8f793c",
    opacity: 0.7,
  },

  dividerIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginHorizontal: 8,
  },
});

type PdfConclusionProps = {
  locale?: PdfLocale;
};

function getConclusionLabel(
  locale: PdfLocale
): string {
  switch (locale) {
    case "en":
      return "Conclusion";

    case "es":
      return "Conclusión";

    case "de":
      return "Fazit";

    case "it":
      return "Conclusione";

    case "pt":
      return "Conclusão";

    default:
      return "Conclusion";
  }
}

export default function PdfConclusion({
  locale = "fr",
}: PdfConclusionProps) {
  const safeLocale: PdfLocale =
    locale || "fr";

  const t =
    PDF_CONCLUSION_BY_LOCALE[
      safeLocale
    ] ||
    PDF_CONCLUSION_BY_LOCALE.fr;

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.content}>
        <View
          style={pdfStyles.centeredHeader}
        >
          <Text
            style={pdfStyles.pageKicker}
          >
            {getConclusionLabel(
              safeLocale
            )}
          </Text>

          <Text
            style={
              pdfStyles.largePageTitle
            }
          >
            {t.votre_ciel_interieur}
          </Text>

          <View
            style={
              pdfStyles.decorativeDivider
            }
          >
            <View
              style={pdfStyles.dividerLine}
            />

            <Image
              src={PLANET_ICONS.Sun}
              style={styles.dividerIcon}
            />

            <View
              style={pdfStyles.dividerLine}
            />
          </View>

          <Text
            style={pdfStyles.pageLead}
          >
            {
              t.chaque_theme_astral_raconte_une_histoire_unique_le_votre_ne
            }
          </Text>
        </View>

        <View
          style={styles.conclusionCard}
          wrap={false}
        >
          <Image
            src={PLANET_ICONS.Sun}
            style={styles.watermark}
          />

          <Text
            style={styles.paragraph}
          >
            {
              t.ce_rapport_essentiel_vous_a_permis_de_decouvrir_les_fondatio
            }
          </Text>

          <Text
            style={styles.paragraph}
          >
            {
              t.votre_carte_du_ciel_n_est_pas_un_destin_grave_dans_le_marbre
            }
          </Text>

          <Text
            style={styles.paragraphLast}
          >
            {
              t.elle_peut_devenir_un_outil_de_comprehension_personnelle_une
            }
          </Text>
        </View>

        <View
          style={styles.signatureBox}
          wrap={false}
        >
          <Image
            src={ASCENDANT_ICON}
            style={
              styles.signatureIcon
            }
          />

          <Text style={styles.brand}>
            {t.luna_astralis}
          </Text>

          <Text style={styles.slogan}>
            {
              t.votre_signe_n_est_pas_une_limite
            }
            {"\n"}
            {
              t.c_est_une_force_a_decouvrir
            }
          </Text>
        </View>

        <View
          style={styles.bottomGroup}
          wrap={false}
        >
          <Text
            style={
              styles.closingText
            }
          >
            {
              t.merci_d_avoir_choisi_luna_astralis_pour_decouvrir_les_premie
            }
          </Text>

          <View
            style={styles.iconsRow}
          >
            <View
              style={
                styles.iconWrapper
              }
            >
              <Image
                src={PLANET_ICONS.Sun}
                style={
                  styles.bottomIcon
                }
              />
            </View>

            <View
              style={
                styles.smallDivider
              }
            />

            <View
              style={
                styles.iconWrapper
              }
            >
              <Image
                src={PLANET_ICONS.Moon}
                style={
                  styles.bottomIcon
                }
              />
            </View>

            <View
              style={
                styles.smallDivider
              }
            />

            <View
              style={
                styles.iconWrapper
              }
            >
              <Image
                src={ASCENDANT_ICON}
                style={
                  styles.bottomIcon
                }
              />
            </View>
          </View>
        </View>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
