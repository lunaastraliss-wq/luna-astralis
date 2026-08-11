import {
  Page,
  Text,
  View,
} from "@react-pdf/renderer";

import { pdfStyles } from "./EssentialPdfStyles";

import type {
  PdfLocale,
} from "./EssentialPdfTypes";

import PdfBrandHeader from "./PdfBrandHeader";

/*
|--------------------------------------------------------------------------
| i18n
|--------------------------------------------------------------------------
*/

import pdfWelcomeFr from "../../i18n/migrated/fr/components/essentialpdf/pdfwelcome.json";
import pdfWelcomeEn from "../../i18n/migrated/en/components/essentialpdf/pdfwelcome.json";
import pdfWelcomeEs from "../../i18n/migrated/es/components/essentialpdf/pdfwelcome.json";
import pdfWelcomeDe from "../../i18n/migrated/de/components/essentialpdf/pdfwelcome.json";
import pdfWelcomeIt from "../../i18n/migrated/it/components/essentialpdf/pdfwelcome.json";
import pdfWelcomePt from "../../i18n/migrated/pt/components/essentialpdf/pdfwelcome.json";

type Dictionary =
  Record<string, string>;

const PDF_WELCOME_BY_LOCALE: Record<
  PdfLocale,
  Dictionary
> = {
  fr: pdfWelcomeFr,
  en: pdfWelcomeEn,
  es: pdfWelcomeEs,
  de: pdfWelcomeDe,
  it: pdfWelcomeIt,
  pt: pdfWelcomePt,
};

type PdfWelcomeProps = {
  locale?: PdfLocale;
};

function getIntroductionLabel(
  locale: PdfLocale
): string {
  switch (locale) {
    case "en":
      return "Introduction";

    case "es":
      return "Introducción";

    case "de":
      return "Einleitung";

    case "it":
      return "Introduzione";

    case "pt":
      return "Introdução";

    default:
      return "Introduction";
  }
}

export default function PdfWelcome({
  locale = "fr",
}: PdfWelcomeProps) {
  const safeLocale: PdfLocale =
    locale || "fr";

  const t =
    PDF_WELCOME_BY_LOCALE[
      safeLocale
    ] ||
    PDF_WELCOME_BY_LOCALE.fr;

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
    >
      <PdfBrandHeader />

      <View
        style={pdfStyles.centeredHeader}
      >
        <Text
          style={pdfStyles.pageKicker}
        >
          {getIntroductionLabel(
            safeLocale
          )}
        </Text>

        <Text
          style={pdfStyles.largePageTitle}
        >
          {
            t.bienvenue_dans_votre_theme_astral
          }
        </Text>

        <View
          style={
            pdfStyles.decorativeDivider
          }
        >
          <View
            style={pdfStyles.dividerLine}
          />

          <Text
            style={
              pdfStyles.dividerSymbol
            }
          >
            ✦
          </Text>

          <View
            style={pdfStyles.dividerLine}
          />
        </View>

        <Text
          style={pdfStyles.pageLead}
        >
          {
            t.une_premiere_lecture_de_votre_ciel_de_naissance_concue_pour
          }
        </Text>
      </View>

      <View
        style={pdfStyles.contentCard}
      >
        <Text
          style={pdfStyles.paragraph}
        >
          {
            t.chaque_naissance_correspond_a_un_instant_unique_au_moment_ex
          }
        </Text>

        <Text
          style={pdfStyles.paragraph}
        >
          {
            t.ce_rapport_essentiel_vous_offre_une_premiere_lecture_claire
          }
        </Text>

        <Text
          style={pdfStyles.paragraph}
        >
          {
            t.l_astrologie_ne_fige_pas_votre_destin_et_ne_remplace_pas_vot
          }
        </Text>

        <Text
          style={pdfStyles.paragraph}
        >
          {
            t.certaines_pages_vous_sembleront_immediatement_familieres_d_a
          }
        </Text>

        <Text
          style={pdfStyles.paragraphLast}
        >
          {
            t.votre_theme_natal_n_est_pas_une_limite_c_est_une_invitation
          }
        </Text>
      </View>

      <View
        style={pdfStyles.highlightQuote}
      >
        <Text
          style={pdfStyles.quoteMark}
        >
          “
        </Text>

        <View
          style={pdfStyles.quoteContent}
        >
          <Text
            style={
              pdfStyles.highlightQuoteText
            }
          >
            {
              t.votre_carte_du_ciel_ne_decide_pas_a_votre_place_elle_revele
            }
          </Text>

          <Text
            style={
              pdfStyles.quoteSignature
            }
          >
            {t.luna_astralis}
          </Text>
        </View>
      </View>

      <View
        style={pdfStyles.nextSectionCard}
      >
        <Text
          style={
            pdfStyles.nextSectionTitle
          }
        >
          {
            t.ce_que_vous_decouvrirez_dans_ce_rapport
          }
        </Text>

        <Text
          style={
            pdfStyles.nextSectionItem
          }
        >
          {
            t.vos_trois_grands_piliers_le_soleil_la_lune_et_l_ascendant
          }
        </Text>

        <Text
          style={
            pdfStyles.nextSectionItem
          }
        >
          {
            t.le_role_des_dix_planetes_et_leur_influence_sur_votre_personn
          }
        </Text>

        <Text
          style={
            pdfStyles.nextSectionItem
          }
        >
          {
            t.la_repartition_de_vos_elements_feu_terre_air_et_eau
          }
        </Text>

        <Text
          style={
            pdfStyles.nextSectionItem
          }
        >
          {
            t.vos_modalites_dominantes_et_leur_maniere_de_faconner_votre_t
          }
        </Text>

        <Text
          style={
            pdfStyles.nextSectionItem
          }
        >
          {
            t.une_synthese_de_votre_profil_astrologique_pour_mieux_compren
          }
        </Text>
      </View>
    </Page>
  );
}
