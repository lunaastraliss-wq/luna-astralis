import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { pdfStyles } from "./SignaturePdfStyles";
import PdfBrandHeader from "./PdfSignatureBrandHeader";
import PdfPageFooter from "./PdfSignaturePageFooter";

import type {
  SignatureLocale,
} from "./SignaturePdfTypes";

import {
  getSignatureWelcomeDictionary,
} from "./SignaturePdfI18n";

/*
|--------------------------------------------------------------------------
| Props
|--------------------------------------------------------------------------
*/

type PdfSignatureWelcomeProps = {
  firstName: string;
  locale?: SignatureLocale;
};

type DiscoveryItemProps = {
  children: string;
  last?: boolean;
};

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const styles = StyleSheet.create({
  pageContent: {
    flexGrow: 1,
    paddingBottom: 32,
  },

  header: {
    alignItems: "center",
    marginBottom: 8,
  },

  kicker: {
    color: "#f4c95d",
    fontSize: 7.4,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  title: {
    color: "#fff8e7",
    fontSize: 21,
    lineHeight: 1.15,
    textAlign: "center",
    marginBottom: 6,
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },

  dividerLine: {
    width: 46,
    height: 0.7,
    backgroundColor: "#8f793c",
  },

  dividerSymbolCircle: {
    width: 15,
    height: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 9,
    borderWidth: 0.7,
    borderColor: "#f4c95d",
  },

  dividerSymbol: {
    color: "#f4c95d",
    fontSize: 7,
    lineHeight: 1,
  },

  lead: {
    width: "88%",
    color: "#c9c5bb",
    fontSize: 8.4,
    lineHeight: 1.35,
    textAlign: "center",
  },

  contentCard: {
    paddingTop: 11,
    paddingBottom: 10,
    paddingHorizontal: 18,
    marginBottom: 8,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  paragraph: {
    color: "#e9e4d8",
    fontSize: 8.15,
    lineHeight: 1.36,
    marginBottom: 5.5,
  },

  paragraphLast: {
    color: "#e9e4d8",
    fontSize: 8.15,
    lineHeight: 1.36,
  },

  quoteCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
    backgroundColor: "#0d152d",
    borderLeftWidth: 2,
    borderLeftColor: "#f4c95d",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#39415d",
    borderRightColor: "#39415d",
    borderBottomColor: "#39415d",
  },

  quoteMarkBox: {
    width: 25,
    height: 25,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    borderWidth: 0.7,
    borderColor: "#8f793c",
  },

  quoteMark: {
    color: "#f4c95d",
    fontSize: 15,
    lineHeight: 1,
  },

  quoteContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  quoteText: {
    color: "#fff8e7",
    fontSize: 8.9,
    lineHeight: 1.34,
    marginBottom: 4,
  },

  quoteSignature: {
    color: "#f4c95d",
    fontSize: 6.8,
    letterSpacing: 1.7,
    textTransform: "uppercase",
  },

  nextSectionCard: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingHorizontal: 16,
    marginBottom: 10,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  nextSectionTitle: {
    color: "#f4c95d",
    fontSize: 9.3,
    textAlign: "center",
    marginBottom: 7,
  },

  columns: {
    flexDirection: "row",
  },

  column: {
    flexGrow: 1,
    flexBasis: 0,
  },

  leftColumn: {
    marginRight: 12,
  },

  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 4,
  },

  listItemLast: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  bullet: {
    width: 11,
    color: "#f4c95d",
    fontSize: 8,
    lineHeight: 1.28,
  },

  itemText: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#d8d4ca",
    fontSize: 7.35,
    lineHeight: 1.3,
  },
});

/*
|--------------------------------------------------------------------------
| Élément de liste
|--------------------------------------------------------------------------
*/

function DiscoveryItem({
  children,
  last = false,
}: DiscoveryItemProps) {
  return (
    <View
      style={
        last
          ? styles.listItemLast
          : styles.listItem
      }
      wrap={false}
    >
      <Text style={styles.bullet}>
        •
      </Text>

      <Text style={styles.itemText}>
        {children}
      </Text>
    </View>
  );
}

/*
|--------------------------------------------------------------------------
| Page d’introduction Signature
|--------------------------------------------------------------------------
*/

export default function PdfSignatureWelcome({
  firstName,
  locale = "fr",
}: PdfSignatureWelcomeProps) {
  const t =
    getSignatureWelcomeDictionary(
      locale
    );

  const safeFirstName =
    typeof firstName === "string"
      ? firstName.trim()
      : "";

  const personalizedLead =
    safeFirstName
      ? `${safeFirstName}, ${
          t[
            "cette_lecture_complete_de_votre_theme_natal_a_ete_concue_pour"
          ] || ""
        }`
      : (
          t[
            "une_lecture_complete_de_votre_theme_natal_concue_pour_reveler"
          ] || ""
        );

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.pageContent}>
        <View style={styles.header}>
          <Text style={styles.kicker}>
            {
              t[
                "introduction_signature"
              ]
            }
          </Text>

          <Text style={styles.title}>
            {
              t[
                "bienvenue_dans_votre_analyse_signature"
              ]
            }
          </Text>

          <View style={styles.divider}>
            <View
              style={
                styles.dividerLine
              }
            />

            <View
              style={
                styles.dividerSymbolCircle
              }
            >
              <Text
                style={
                  styles.dividerSymbol
                }
              >
                •
              </Text>
            </View>

            <View
              style={
                styles.dividerLine
              }
            />
          </View>

          <Text style={styles.lead}>
            {personalizedLead}
          </Text>
        </View>

        <View
          style={styles.contentCard}
          wrap={false}
        >
          <Text style={styles.paragraph}>
            {
              t[
                "votre_naissance_correspond_a_un_instant_qui_ne_se_reproduira"
              ]
            }
          </Text>

          <Text style={styles.paragraph}>
            {
              t[
                "ce_rapport_signature_represente_le_niveau_d_analyse_le_plus"
              ]
            }
          </Text>

          <Text style={styles.paragraph}>
            {
              t[
                "chaque_element_apporte_une_information_differente_la_planete"
              ]
            }
          </Text>

          <Text style={styles.paragraph}>
            {
              t[
                "vous_decouvrirez_ainsi_non_seulement_certaines_qualites_natu"
              ]
            }
          </Text>

          <Text style={styles.paragraph}>
            {
              t[
                "l_astrologie_ne_determine_pas_vos_decisions_et_ne_decrit_pas"
              ]
            }
          </Text>

          <Text
            style={
              styles.paragraphLast
            }
          >
            {
              t[
                "certaines_pages_vous_sembleront_immediatement_familieres_d_a"
              ]
            }
          </Text>
        </View>

        <View
          style={styles.quoteCard}
          wrap={false}
        >
          <View
            style={
              styles.quoteMarkBox
            }
          >
            <Text
              style={
                styles.quoteMark
              }
            >
              “
            </Text>
          </View>

          <View
            style={
              styles.quoteContent
            }
          >
            <Text
              style={
                styles.quoteText
              }
            >
              {
                t[
                  "votre_theme_natal_est_une_uvre_vivante_plus_vous_en_comprene"
                ]
              }
            </Text>

            <Text
              style={
                styles.quoteSignature
              }
            >
              {
                t[
                  "luna_astralis"
                ]
              }
            </Text>
          </View>
        </View>

        <View
          style={
            styles.nextSectionCard
          }
          wrap={false}
        >
          <Text
            style={
              styles.nextSectionTitle
            }
          >
            {
              t[
                "ce_que_revele_votre_rapport_signature"
              ]
            }
          </Text>

          <View
            style={
              styles.columns
            }
          >
            <View
              style={[
                styles.column,
                styles.leftColumn,
              ]}
            >
              <DiscoveryItem>
                {
                  t[
                    "vos_trois_grands_piliers_le_soleil_la_lune_et_l_ascendant"
                  ]
                }
              </DiscoveryItem>

              <DiscoveryItem>
                {
                  t[
                    "l_expression_de_vos_dix_principales_planetes_dans_leurs_sign"
                  ]
                }
              </DiscoveryItem>

              <DiscoveryItem>
                {
                  t[
                    "les_domaines_de_vie_actives_par_vos_maisons_astrologiques"
                  ]
                }
              </DiscoveryItem>

              <DiscoveryItem last>
                {
                  t[
                    "les_aspects_majeurs_et_les_dialogues_entre_vos_differentes_e"
                  ]
                }
              </DiscoveryItem>
            </View>

            <View
              style={
                styles.column
              }
            >
              <DiscoveryItem>
                {
                  t[
                    "la_repartition_de_vos_elements_feu_terre_air_et_eau"
                  ]
                }
              </DiscoveryItem>

              <DiscoveryItem>
                {
                  t[
                    "vos_modalites_dominantes_et_votre_maniere_naturelle_d_agir"
                  ]
                }
              </DiscoveryItem>

              <DiscoveryItem>
                {
                  t[
                    "vos_forces_vos_defis_et_les_ressources_a_developper"
                  ]
                }
              </DiscoveryItem>

              <DiscoveryItem last>
                {
                  t[
                    "vos_dynamiques_relationnelles_professionnelles_et_vos_princi"
                  ]
                }
              </DiscoveryItem>
            </View>
          </View>
        </View>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
