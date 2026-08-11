import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  SIGN_ELEMENT,
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
| i18n — PdfElements
|--------------------------------------------------------------------------
*/

import pdfElementsFr from "../../i18n/migrated/fr/components/essentialpdf/pdfelements.json";
import pdfElementsEn from "../../i18n/migrated/en/components/essentialpdf/pdfelements.json";
import pdfElementsEs from "../../i18n/migrated/es/components/essentialpdf/pdfelements.json";
import pdfElementsDe from "../../i18n/migrated/de/components/essentialpdf/pdfelements.json";
import pdfElementsIt from "../../i18n/migrated/it/components/essentialpdf/pdfelements.json";
import pdfElementsPt from "../../i18n/migrated/pt/components/essentialpdf/pdfelements.json";

/*
|--------------------------------------------------------------------------
| i18n — EssentialPdfUtils
|--------------------------------------------------------------------------
|
| Ces dictionnaires contiennent déjà les textes de dominante
| Feu / Terre / Air / Eau.
|
*/

import utilsFr from "../../i18n/migrated/fr/components/essentialpdf/essentialpdfutils.json";
import utilsEn from "../../i18n/migrated/en/components/essentialpdf/essentialpdfutils.json";
import utilsEs from "../../i18n/migrated/es/components/essentialpdf/essentialpdfutils.json";
import utilsDe from "../../i18n/migrated/de/components/essentialpdf/essentialpdfutils.json";
import utilsIt from "../../i18n/migrated/it/components/essentialpdf/essentialpdfutils.json";
import utilsPt from "../../i18n/migrated/pt/components/essentialpdf/essentialpdfutils.json";

type Dictionary =
  Record<string, string>;

const PDF_ELEMENTS_BY_LOCALE: Record<
  PdfLocale,
  Dictionary
> = {
  fr: pdfElementsFr,
  en: pdfElementsEn,
  es: pdfElementsEs,
  de: pdfElementsDe,
  it: pdfElementsIt,
  pt: pdfElementsPt,
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
| Éléments
|--------------------------------------------------------------------------
|
| IMPORTANT :
| Ces clés restent en français parce que SIGN_ELEMENT utilise
| déjà Feu / Terre / Air / Eau.
|
*/

const ELEMENTS = [
  "Feu",
  "Terre",
  "Air",
  "Eau",
] as const;

type ElementKey =
  (typeof ELEMENTS)[number];

/*
|--------------------------------------------------------------------------
| Noms affichés selon la langue
|--------------------------------------------------------------------------
*/

const ELEMENT_LABELS: Record<
  PdfLocale,
  Record<ElementKey, string>
> = {
  fr: {
    Feu: "Feu",
    Terre: "Terre",
    Air: "Air",
    Eau: "Eau",
  },

  en: {
    Feu: "Fire",
    Terre: "Earth",
    Air: "Air",
    Eau: "Water",
  },

  es: {
    Feu: "Fuego",
    Terre: "Tierra",
    Air: "Aire",
    Eau: "Agua",
  },

  de: {
    Feu: "Feuer",
    Terre: "Erde",
    Air: "Luft",
    Eau: "Wasser",
  },

  it: {
    Feu: "Fuoco",
    Terre: "Terra",
    Air: "Aria",
    Eau: "Acqua",
  },

  pt: {
    Feu: "Fogo",
    Terre: "Terra",
    Air: "Ar",
    Eau: "Água",
  },
};

/*
|--------------------------------------------------------------------------
| Clés i18n — mots-clés
|--------------------------------------------------------------------------
*/

const ELEMENT_WORD_KEYS: Record<
  ElementKey,
  string
> = {
  Feu:
    "action_courage_inspiration",

  Terre:
    "stabilite_realisme_construction",

  Air:
    "communication_curiosite_idees",

  Eau:
    "emotions_intuition_sensibilite",
};

/*
|--------------------------------------------------------------------------
| Clés i18n — forces
|--------------------------------------------------------------------------
*/

const ELEMENT_STRENGTH_KEYS: Record<
  ElementKey,
  string
> = {
  Feu:
    "votre_force_reside_dans_votre_capacite_a_initier_a_agir_et_a",

  Terre:
    "votre_force_reside_dans_votre_stabilite_votre_sens_pratique",

  Air:
    "votre_force_reside_dans_votre_curiosite_votre_intelligence_r",

  Eau:
    "votre_force_reside_dans_votre_intuition_votre_profondeur_emo",
};

/*
|--------------------------------------------------------------------------
| Clés i18n — équilibre
|--------------------------------------------------------------------------
*/

const ELEMENT_BALANCE_KEYS: Record<
  ElementKey,
  string
> = {
  Feu:
    "prenez_le_temps_de_ralentir_d_ecouter_et_de_consolider_vos_p",

  Terre:
    "laissez_davantage_de_place_a_la_spontaneite_a_l_intuition_et",

  Air:
    "revenez_regulierement_a_vos_emotions_et_a_vos_sensations_une",

  Eau:
    "protegez_votre_sensibilite_sans_vous_isoler_des_limites_clai",
};

/*
|--------------------------------------------------------------------------
| Clés i18n — texte de dominante
|--------------------------------------------------------------------------
*/

const ELEMENT_SUMMARY_KEYS: Record<
  ElementKey,
  string
> = {
  Feu:
    "votre_dominante_de_feu_vous_pousse_a_agir_avec_passion_spont",

  Terre:
    "votre_dominante_de_terre_vous_donne_un_grand_sens_pratique_d",

  Air:
    "votre_dominante_d_air_favorise_la_reflexion_les_echanges_et",

  Eau:
    "votre_dominante_d_eau_vous_rend_particulierement_intuitive_r",
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
    minHeight: 170,
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  cardSpacing: {
    marginRight: 8,
  },

  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  elementIcon: {
    width: 27,
    height: 27,
    objectFit: "contain",
  },

  name: {
    color: "#fff8e7",
    fontSize: 13,
    marginBottom: 7,
  },

  value: {
    color: "#f4c95d",
    fontSize: 25,
    lineHeight: 1,
    marginBottom: 5,
  },

  count: {
    color: "#9da4b7",
    fontSize: 8,
    marginBottom: 10,
  },

  words: {
    color: "#bfc5d5",
    fontSize: 7.8,
    lineHeight: 1.4,
    textAlign: "center",
  },

  dominantBox: {
    position: "relative",
    flexDirection: "row",
    minHeight: 135,
    paddingVertical: 17,
    paddingHorizontal: 18,
    marginBottom: 12,
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
    minHeight: 96,
    paddingVertical: 10,
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
| Icône d’un élément
|--------------------------------------------------------------------------
*/

function getElementIcon(
  element: string
) {
  switch (element) {
    case "Feu":
      return PLANET_ICONS.Sun;

    case "Terre":
      return PLANET_ICONS.Saturn;

    case "Air":
      return PLANET_ICONS.Mercury;

    case "Eau":
      return PLANET_ICONS.Moon;

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

/*
|--------------------------------------------------------------------------
| Valeur non déterminée
|--------------------------------------------------------------------------
*/

function getUndeterminedLabel(
  locale: PdfLocale
): string {
  switch (locale) {
    case "en":
      return "Undetermined";

    case "es":
      return "No determinado";

    case "de":
      return "Nicht bestimmt";

    case "it":
      return "Non determinato";

    case "pt":
      return "Não determinado";

    default:
      return "Non déterminée";
  }
}

/*
|--------------------------------------------------------------------------
| PdfElements
|--------------------------------------------------------------------------
*/

export default function PdfElements({
  planets,
  locale = "fr",
}: PlanetsProps) {
  const safeLocale: PdfLocale =
    locale || "fr";

  const t =
    PDF_ELEMENTS_BY_LOCALE[
      safeLocale
    ] ||
    PDF_ELEMENTS_BY_LOCALE.fr;

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
    ElementKey,
    number
  > = {
    Feu: 0,
    Terre: 0,
    Air: 0,
    Eau: 0,
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

      const element =
        SIGN_ELEMENT[
          signName
        ] as ElementKey | undefined;

      if (
        element &&
        counts[element] !== undefined
      ) {
        counts[element] += 1;
      }
    }
  );

  const dominantElement =
    (
      Object.entries(
        counts
      ) as [
        ElementKey,
        number
      ][]
    ).sort(
      (a, b) =>
        b[1] - a[1]
    )[0]?.[0];

  const hasDominantElement =
    Boolean(
      dominantElement &&
      counts[
        dominantElement
      ] > 0
    );

  const dominantIcon =
    getElementIcon(
      dominantElement || ""
    );

  const dominantText =
    hasDominantElement &&
    dominantElement
      ? utils[
          ELEMENT_SUMMARY_KEYS[
            dominantElement
          ]
        ] || ""
      : "";

  const strengthText =
    hasDominantElement &&
    dominantElement
      ? t[
          ELEMENT_STRENGTH_KEYS[
            dominantElement
          ]
        ] || ""
      : t.votre_theme_reunit_plusieurs_formes_d_energie_qui_peuvent_se ||
        "";

  const balanceText =
    hasDominantElement &&
    dominantElement
      ? t[
          ELEMENT_BALANCE_KEYS[
            dominantElement
          ]
        ] || ""
      : t.observez_les_qualites_que_vous_utilisez_spontanement_et_cell ||
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
          style={styles.headerKicker}
        >
          {t.equilibre_du_theme}
        </Text>

        <Text
          style={styles.headerTitle}
        >
          {t.les_quatre_elements}
        </Text>

        <View style={styles.divider}>
          <View
            style={styles.dividerLine}
          />

          <Image
            src={PLANET_ICONS.Sun}
            style={styles.dividerIcon}
          />

          <View
            style={styles.dividerLine}
          />
        </View>

        <Text
          style={styles.headerLead}
        >
          {
            t.les_elements_montrent_comment_votre_energie_circule_naturell
          }
        </Text>
      </View>

      <View style={styles.grid}>
        {ELEMENTS.map(
          (
            element,
            index
          ) => {
            const value =
              counts[element];

            const elementIcon =
              getElementIcon(
                element
              );

            const cardStyle =
              index <
              ELEMENTS.length - 1
                ? [
                    styles.card,
                    styles.cardSpacing,
                  ]
                : styles.card;

            return (
              <View
                key={element}
                wrap={false}
                style={cardStyle}
              >
                <View
                  style={
                    styles.iconCircle
                  }
                >
                  <Image
                    src={elementIcon}
                    style={
                      styles.elementIcon
                    }
                  />
                </View>

                <Text
                  style={styles.name}
                >
                  {
                    ELEMENT_LABELS[
                      safeLocale
                    ][element]
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
                      ELEMENT_WORD_KEYS[
                        element
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
        style={styles.dominantBox}
        wrap={false}
      >
        <View
          style={styles.dominantBadge}
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
              t.votre_energie_dominante
            }
          </Text>

          <Text
            style={
              styles.dominantTitle
            }
          >
            {hasDominantElement &&
            dominantElement
              ? ELEMENT_LABELS[
                  safeLocale
                ][
                  dominantElement
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
            t.un_element_tres_present_represente_une_energie_que_vous_expr
          }
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
