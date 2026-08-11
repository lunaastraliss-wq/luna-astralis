import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  SIGN_MODALITY,
} from "@/lib/astrology";

import {
  ASCENDANT_ICON,
  PLANET_ICONS,
} from "./EssentialPdfAssets";

import { pdfStyles } from "./EssentialPdfStyles";

import type {
  PdfLocale,
  PlanetsProps,
} from "./EssentialPdfTypes";

import {
  getPlanet,
  getPlanetSignName,
  MAIN_PLANETS,
} from "./EssentialPdfUtils";

import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

/*
|--------------------------------------------------------------------------
| i18n — PdfModalities
|--------------------------------------------------------------------------
*/

import pdfModalitiesFr from "../../i18n/migrated/fr/components/essentialpdf/pdfmodalities.json";
import pdfModalitiesEn from "../../i18n/migrated/en/components/essentialpdf/pdfmodalities.json";
import pdfModalitiesEs from "../../i18n/migrated/es/components/essentialpdf/pdfmodalities.json";
import pdfModalitiesDe from "../../i18n/migrated/de/components/essentialpdf/pdfmodalities.json";
import pdfModalitiesIt from "../../i18n/migrated/it/components/essentialpdf/pdfmodalities.json";
import pdfModalitiesPt from "../../i18n/migrated/pt/components/essentialpdf/pdfmodalities.json";

/*
|--------------------------------------------------------------------------
| i18n — EssentialPdfUtils
|--------------------------------------------------------------------------
*/

import utilsFr from "../../i18n/migrated/fr/components/essentialpdf/essentialpdfutils.json";
import utilsEn from "../../i18n/migrated/en/components/essentialpdf/essentialpdfutils.json";
import utilsEs from "../../i18n/migrated/es/components/essentialpdf/essentialpdfutils.json";
import utilsDe from "../../i18n/migrated/de/components/essentialpdf/essentialpdfutils.json";
import utilsIt from "../../i18n/migrated/it/components/essentialpdf/essentialpdfutils.json";
import utilsPt from "../../i18n/migrated/pt/components/essentialpdf/essentialpdfutils.json";

type Dictionary =
  Record<string, string>;

const PDF_MODALITIES_BY_LOCALE: Record<
  PdfLocale,
  Dictionary
> = {
  fr: pdfModalitiesFr,
  en: pdfModalitiesEn,
  es: pdfModalitiesEs,
  de: pdfModalitiesDe,
  it: pdfModalitiesIt,
  pt: pdfModalitiesPt,
};

const UTILS_BY_LOCALE: Record<
  PdfLocale,
  Dictionary
> = {
  fr: utilsFr,
  en: utilsEn,
  es: utilsEs,
  de: utilsDe,
  it: utilsIt,
  pt: utilsPt,
};

/*
|--------------------------------------------------------------------------
| Modalités internes
|--------------------------------------------------------------------------
*/

const MODALITIES = [
  "Cardinal",
  "Fixe",
  "Mutable",
] as const;

type ModalityKey =
  (typeof MODALITIES)[number];

/*
|--------------------------------------------------------------------------
| Libellés affichés
|--------------------------------------------------------------------------
*/

const MODALITY_LABELS: Record<
  PdfLocale,
  Record<ModalityKey, string>
> = {
  fr: {
    Cardinal: "Cardinal",
    Fixe: "Fixe",
    Mutable: "Mutable",
  },

  en: {
    Cardinal: "Cardinal",
    Fixe: "Fixed",
    Mutable: "Mutable",
  },

  es: {
    Cardinal: "Cardinal",
    Fixe: "Fija",
    Mutable: "Mutable",
  },

  de: {
    Cardinal: "Kardinal",
    Fixe: "Fix",
    Mutable: "Veränderlich",
  },

  it: {
    Cardinal: "Cardinale",
    Fixe: "Fissa",
    Mutable: "Mutevole",
  },

  pt: {
    Cardinal: "Cardinal",
    Fixe: "Fixa",
    Mutable: "Mutável",
  },
};

/*
|--------------------------------------------------------------------------
| Clés i18n
|--------------------------------------------------------------------------
*/

const MODALITY_WORD_KEYS: Record<
  ModalityKey,
  string
> = {
  Cardinal:
    "initiative_impulsion_leadership",

  Fixe:
    "perseverance_stabilite_determination",

  Mutable:
    "adaptation_evolution_souplesse",
};

const MODALITY_STRENGTH_KEYS: Record<
  ModalityKey,
  string
> = {
  Cardinal:
    "votre_force_reside_dans_votre_capacite_a_demarrer_a_prendre",

  Fixe:
    "votre_force_reside_dans_votre_perseverance_votre_fidelite_et",

  Mutable:
    "votre_force_reside_dans_votre_adaptabilite_votre_intelligenc",
};

const MODALITY_BALANCE_KEYS: Record<
  ModalityKey,
  string
> = {
  Cardinal:
    "accordez_davantage_d_attention_a_la_continuite_commencer_est",

  Fixe:
    "laissez_une_place_au_changement_et_a_l_imprevu_votre_stabili",

  Mutable:
    "veillez_a_ne_pas_disperser_votre_energie_choisir_une_directi",
};

const MODALITY_SUMMARY_KEYS: Record<
  ModalityKey,
  string
> = {
  Cardinal:
    "la_modalite_cardinale_vous_pousse_a_entreprendre_a_initier_l",

  Fixe:
    "la_modalite_fixe_vous_apporte_de_la_loyaute_de_l_endurance_e",

  Mutable:
    "la_modalite_mutable_vous_permet_de_vous_adapter_d_evoluer_et",
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

  headerKicker: {
    color: "#f4c95d",
    fontSize: 8.5,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  headerTitle: {
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

  headerLead: {
    maxWidth: 410,
    color: "#c9c5bb",
    fontSize: 9.4,
    lineHeight: 1.45,
    textAlign: "center",
  },

  grid: {
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
    marginBottom: 11,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  modalityIcon: {
    width: 29,
    height: 29,
    objectFit: "contain",
  },

  name: {
    color: "#fff8e7",
    fontSize: 14,
    marginBottom: 8,
  },

  value: {
    color: "#f4c95d",
    fontSize: 26,
    lineHeight: 1,
    marginBottom: 6,
  },

  count: {
    color: "#9da4b7",
    fontSize: 8.2,
    marginBottom: 11,
  },

  words: {
    color: "#bfc5d5",
    fontSize: 8,
    lineHeight: 1.42,
    textAlign: "center",
  },

  dominantBox: {
    position: "relative",
    flexDirection: "row",
    minHeight: 126,
    paddingVertical: 13,
    paddingHorizontal: 18,
    marginBottom: 9,
    overflow: "hidden",
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  dominantBadge: {
    width: 53,
    height: 53,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#f4c95d",
  },

  dominantIcon: {
    width: 30,
    height: 30,
    objectFit: "contain",
  },

  dominantWatermark: {
    position: "absolute",
    top: 10,
    right: 15,
    width: 90,
    height: 90,
    objectFit: "contain",
    opacity: 0.035,
  },

  dominantContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  kicker: {
    color: "#f4c95d",
    fontSize: 8,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  dominantTitle: {
    color: "#fff8e7",
    fontSize: 18,
    marginBottom: 8,
  },

  dominantText: {
    color: "#d9d4c7",
    fontSize: 9.2,
    lineHeight: 1.48,
  },

  insightRow: {
    flexDirection: "row",
    marginBottom: 8,
  },

  insightBox: {
    flexGrow: 1,
    flexBasis: 0,
    minHeight: 94,
    paddingVertical: 10,
    paddingHorizontal: 14,
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
    fontSize: 8.2,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },

  insightText: {
    color: "#bfc5d5",
    fontSize: 8.3,
    lineHeight: 1.43,
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
| Icônes
|--------------------------------------------------------------------------
*/

function getModalityIcon(
  modality: string
) {
  switch (modality) {
    case "Cardinal":
      return PLANET_ICONS.Mars;

    case "Fixe":
      return PLANET_ICONS.Saturn;

    case "Mutable":
      return PLANET_ICONS.Mercury;

    default:
      return ASCENDANT_ICON;
  }
}

/*
|--------------------------------------------------------------------------
| Nombre de planètes
|--------------------------------------------------------------------------
*/

function getPlanetCountLabel(
  value: number,
  locale: PdfLocale
): string {
  if (locale === "en") {
    return value === 1
      ? "1 planet"
      : `${value} planets`;
  }

  if (locale === "es") {
    return value === 1
      ? "1 planeta"
      : `${value} planetas`;
  }

  if (locale === "de") {
    return value === 1
      ? "1 Planet"
      : `${value} Planeten`;
  }

  if (locale === "it") {
    return value === 1
      ? "1 pianeta"
      : `${value} pianeti`;
  }

  if (locale === "pt") {
    return value === 1
      ? "1 planeta"
      : `${value} planetas`;
  }

  return value === 1
    ? "1 planète"
    : `${value} planètes`;
}

function getUndeterminedLabel(
  locale: PdfLocale
): string {
  switch (locale) {
    case "en":
      return "Undetermined";

    case "es":
      return "No determinada";

    case "de":
      return "Nicht bestimmt";

    case "it":
      return "Non determinata";

    case "pt":
      return "Não determinada";

    default:
      return "Non déterminée";
  }
}

/*
|--------------------------------------------------------------------------
| PdfModalities
|--------------------------------------------------------------------------
*/

export default function PdfModalities({
  planets,
  locale = "fr",
}: PlanetsProps) {
  const safeLocale: PdfLocale =
    locale || "fr";

  const t =
    PDF_MODALITIES_BY_LOCALE[
      safeLocale
    ] ||
    PDF_MODALITIES_BY_LOCALE.fr;

  const utils =
    UTILS_BY_LOCALE[
      safeLocale
    ] ||
    UTILS_BY_LOCALE.fr;

  const safePlanets =
    Array.isArray(planets)
      ? planets
      : [];

  const counts: Record<
    ModalityKey,
    number
  > = {
    Cardinal: 0,
    Fixe: 0,
    Mutable: 0,
  };

  MAIN_PLANETS.forEach(
    (planetName) => {
      const planet =
        getPlanet(
          safePlanets,
          planetName
        );

      const signName =
        getPlanetSignName(
          planet
        );

      if (!signName) {
        return;
      }

      const modality =
        SIGN_MODALITY[
          signName
        ] as ModalityKey | undefined;

      if (
        modality &&
        counts[modality] !== undefined
      ) {
        counts[modality] += 1;
      }
    }
  );

  const dominantModality =
    (
      Object.entries(
        counts
      ) as [
        ModalityKey,
        number
      ][]
    ).sort(
      (a, b) =>
        b[1] - a[1]
    )[0]?.[0];

  const hasDominantModality =
    Boolean(
      dominantModality &&
      counts[
        dominantModality
      ] > 0
    );

  const dominantIcon =
    getModalityIcon(
      dominantModality || ""
    );

  const dominantText =
    hasDominantModality &&
    dominantModality
      ? utils[
          MODALITY_SUMMARY_KEYS[
            dominantModality
          ]
        ] || ""
      : "";

  const strengthText =
    hasDominantModality &&
    dominantModality
      ? t[
          MODALITY_STRENGTH_KEYS[
            dominantModality
          ]
        ] || ""
      : t.votre_theme_combine_plusieurs_manieres_d_agir_de_poursuivre ||
        "";

  const balanceText =
    hasDominantModality &&
    dominantModality
      ? t[
          MODALITY_BALANCE_KEYS[
            dominantModality
          ]
        ] || ""
      : t.observez_les_moments_ou_vous_initiez_facilement_ceux_ou_vous ||
        "";

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.header}>
        <Text
          style={
            styles.headerKicker
          }
        >
          {t.rythme_interieur}
        </Text>

        <Text
          style={
            styles.headerTitle
          }
        >
          {
            t.les_modalites_astrologiques
          }
        </Text>

        <View
          style={styles.divider}
        >
          <View
            style={
              styles.dividerLine
            }
          />

          <Image
            src={ASCENDANT_ICON}
            style={
              styles.dividerIcon
            }
          />

          <View
            style={
              styles.dividerLine
            }
          />
        </View>

        <Text
          style={
            styles.headerLead
          }
        >
          {
            t.les_modalites_montrent_comment_vous_commencez_stabilisez_ou
          }
        </Text>
      </View>

      <View style={styles.grid}>
        {MODALITIES.map(
          (
            modality,
            index
          ) => {
            const value =
              counts[modality];

            const modalityIcon =
              getModalityIcon(
                modality
              );

            const cardStyle =
              index <
              MODALITIES.length - 1
                ? [
                    styles.card,
                    styles.cardSpacing,
                  ]
                : styles.card;

            return (
              <View
                key={modality}
                wrap={false}
                style={cardStyle}
              >
                <View
                  style={
                    styles.iconCircle
                  }
                >
                  <Image
                    src={modalityIcon}
                    style={
                      styles.modalityIcon
                    }
                  />
                </View>

                <Text
                  style={styles.name}
                >
                  {
                    MODALITY_LABELS[
                      safeLocale
                    ][
                      modality
                    ]
                  }
                </Text>

                <Text
                  style={styles.value}
                >
                  {value}
                </Text>

                <Text
                  style={styles.count}
                >
                  {getPlanetCountLabel(
                    value,
                    safeLocale
                  )}
                </Text>

                <Text
                  style={styles.words}
                >
                  {
                    t[
                      MODALITY_WORD_KEYS[
                        modality
                      ]
                    ]
                  }
                </Text>
              </View>
            );
          }
        )}
      </View>

      <View
        style={
          styles.dominantBox
        }
        wrap={false}
      >
        <View
          style={
            styles.dominantBadge
          }
        >
          <Image
            src={dominantIcon}
            style={
              styles.dominantIcon
            }
          />
        </View>

        <Image
          src={dominantIcon}
          style={
            styles.dominantWatermark
          }
        />

        <View
          style={
            styles.dominantContent
          }
        >
          <Text
            style={styles.kicker}
          >
            {
              t.votre_dynamique_dominante
            }
          </Text>

          <Text
            style={
              styles.dominantTitle
            }
          >
            {hasDominantModality &&
            dominantModality
              ? MODALITY_LABELS[
                  safeLocale
                ][
                  dominantModality
                ]
              : getUndeterminedLabel(
                  safeLocale
                )}
          </Text>

          <Text
            style={
              styles.dominantText
            }
          >
            {dominantText}
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
          wrap={false}
        >
          <View
            style={
              styles.insightHeader
            }
          >
            <Image
              src={dominantIcon}
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
                t.votre_force_naturelle
              }
            </Text>
          </View>

          <Text
            style={
              styles.insightText
            }
          >
            {strengthText}
          </Text>
        </View>

        <View
          style={styles.insightBox}
          wrap={false}
        >
          <View
            style={
              styles.insightHeader
            }
          >
            <Image
              src={ASCENDANT_ICON}
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
                t.votre_equilibre_a_developper
              }
            </Text>
          </View>

          <Text
            style={
              styles.insightText
            }
          >
            {balanceText}
          </Text>
        </View>
      </View>

      <View
        style={styles.note}
        wrap={false}
      >
        <Image
          src={PLANET_ICONS.Moon}
          style={styles.noteIcon}
        />

        <Text
          style={styles.noteText}
        >
          {
            t.aucune_modalite_n_est_meilleure_qu_une_autre_leur_repartitio
          }
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
