"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

import fr from "../i18n/migrated/fr/components/natalpremiumoffer.json";
import en from "../i18n/migrated/en/components/natalpremiumoffer.json";
import es from "../i18n/migrated/es/components/natalpremiumoffer.json";
import de from "../i18n/migrated/de/components/natalpremiumoffer.json";
import it from "../i18n/migrated/it/components/natalpremiumoffer.json";
import pt from "../i18n/migrated/pt/components/natalpremiumoffer.json";

import type { Locale } from "@/i18n/config";

import "@/components/natal-report/natal-report.css";

type PlanKey =
  | "essential"
  | "premium"
  | "signature";

type Dictionary = Record<string, string>;

type Props = {
  locale: Locale;
  firstName?: string;
  birthDate?: string;
  birthTime?: string;
  birthCity?: string;
  birthCountry?: string;

  latitude?:
    | string
    | number
    | null;

  longitude?:
    | string
    | number
    | null;

  timezone?: string;
  email?: string;
  getWheelImage?: () => Promise<string>;
};

type SignedUploadResponse = {
  ok?: boolean;
  wheelImagePath?: string;
  signedUrl?: string;
  token?: string;
  error?: string;
  detail?: string;
};

type CheckoutResponse = {
  url?: string;
  error?: string;
  detail?: string;
};

type Offer = {
  key: PlanKey;
  name: string;
  badge: string;
  price: string;
  description: string;
  button: string;
  previewHref: string;
  features: string[];
  featured?: boolean;
};

type OfferTexts = {
  titleWithName: (firstName: string) => string;
  titleWithoutName: string;
  reportLabel: string;
  preparingReport: string;
  invalidImageFormat: string;
  invalidImageType: string;
  missingWheelFunction: string;
  missingSupabase: string;
  wheelPreparationFailed: string;
  wheelUploadPreparationFailed: string;
  wheelUploadFailed: string;
  paymentError: (status: number) => string;
  paymentPreparationFailed: string;
};

const DICTIONARIES: Record<
  Locale,
  Dictionary
> = {
  fr,
  en,
  es,
  de,
  it,
  pt,
};

const OFFER_TEXTS: Record<
  Locale,
  OfferTexts
> = {
  fr: {
    titleWithName: (firstName) =>
      `Choisissez le rapport astrologique de ${firstName}`,
    titleWithoutName:
      "Choisissez votre rapport astrologique",
    reportLabel:
      "Rapport",
    preparingReport:
      "Préparation du rapport...",
    invalidImageFormat:
      "Le format de l’image astrologique est invalide.",
    invalidImageType:
      "Le type de l’image astrologique est invalide.",
    missingWheelFunction:
      "La fonction de création de la roue est absente.",
    missingSupabase:
      "La configuration publique de Supabase est absente.",
    wheelPreparationFailed:
      "La roue astrologique n’a pas pu être préparée.",
    wheelUploadPreparationFailed:
      "Impossible de préparer l’envoi de la roue.",
    wheelUploadFailed:
      "Impossible d’enregistrer la roue astrologique.",
    paymentError: (status) =>
      `Erreur de paiement (${status})`,
    paymentPreparationFailed:
      "Impossible de préparer le paiement. Réessaie.",
  },

  en: {
    titleWithName: (firstName) =>
      `Choose ${firstName}’s astrology report`,
    titleWithoutName:
      "Choose your astrology report",
    reportLabel:
      "Report",
    preparingReport:
      "Preparing the report...",
    invalidImageFormat:
      "The astrology image format is invalid.",
    invalidImageType:
      "The astrology image type is invalid.",
    missingWheelFunction:
      "The astrology wheel creation function is missing.",
    missingSupabase:
      "The public Supabase configuration is missing.",
    wheelPreparationFailed:
      "The astrology wheel could not be prepared.",
    wheelUploadPreparationFailed:
      "Unable to prepare the astrology wheel upload.",
    wheelUploadFailed:
      "Unable to save the astrology wheel.",
    paymentError: (status) =>
      `Payment error (${status})`,
    paymentPreparationFailed:
      "Unable to prepare the payment. Try again.",
  },

  es: {
    titleWithName: (firstName) =>
      `Elige el informe astrológico de ${firstName}`,
    titleWithoutName:
      "Elige tu informe astrológico",
    reportLabel:
      "Informe",
    preparingReport:
      "Preparando el informe...",
    invalidImageFormat:
      "El formato de la imagen astrológica no es válido.",
    invalidImageType:
      "El tipo de imagen astrológica no es válido.",
    missingWheelFunction:
      "Falta la función de creación de la rueda astrológica.",
    missingSupabase:
      "Falta la configuración pública de Supabase.",
    wheelPreparationFailed:
      "No se pudo preparar la rueda astrológica.",
    wheelUploadPreparationFailed:
      "No se pudo preparar el envío de la rueda.",
    wheelUploadFailed:
      "No se pudo guardar la rueda astrológica.",
    paymentError: (status) =>
      `Error de pago (${status})`,
    paymentPreparationFailed:
      "No se pudo preparar el pago. Inténtalo de nuevo.",
  },

  de: {
    titleWithName: (firstName) =>
      `Wählen Sie den astrologischen Bericht für ${firstName}`,
    titleWithoutName:
      "Wählen Sie Ihren astrologischen Bericht",
    reportLabel:
      "Bericht",
    preparingReport:
      "Bericht wird vorbereitet...",
    invalidImageFormat:
      "Das Format des astrologischen Bildes ist ungültig.",
    invalidImageType:
      "Der Typ des astrologischen Bildes ist ungültig.",
    missingWheelFunction:
      "Die Funktion zur Erstellung des astrologischen Rads fehlt.",
    missingSupabase:
      "Die öffentliche Supabase-Konfiguration fehlt.",
    wheelPreparationFailed:
      "Das astrologische Rad konnte nicht vorbereitet werden.",
    wheelUploadPreparationFailed:
      "Der Upload des astrologischen Rads konnte nicht vorbereitet werden.",
    wheelUploadFailed:
      "Das astrologische Rad konnte nicht gespeichert werden.",
    paymentError: (status) =>
      `Zahlungsfehler (${status})`,
    paymentPreparationFailed:
      "Die Zahlung konnte nicht vorbereitet werden. Versuchen Sie es erneut.",
  },

  it: {
    titleWithName: (firstName) =>
      `Scegli il rapporto astrologico di ${firstName}`,
    titleWithoutName:
      "Scegli il tuo rapporto astrologico",
    reportLabel:
      "Rapporto",
    preparingReport:
      "Preparazione del rapporto...",
    invalidImageFormat:
      "Il formato dell’immagine astrologica non è valido.",
    invalidImageType:
      "Il tipo di immagine astrologica non è valido.",
    missingWheelFunction:
      "Manca la funzione di creazione della ruota astrologica.",
    missingSupabase:
      "Manca la configurazione pubblica di Supabase.",
    wheelPreparationFailed:
      "Non è stato possibile preparare la ruota astrologica.",
    wheelUploadPreparationFailed:
      "Impossibile preparare l’invio della ruota.",
    wheelUploadFailed:
      "Impossibile salvare la ruota astrologica.",
    paymentError: (status) =>
      `Errore di pagamento (${status})`,
    paymentPreparationFailed:
      "Impossibile preparare il pagamento. Riprova.",
  },

  pt: {
    titleWithName: (firstName) =>
      `Escolha o relatório astrológico de ${firstName}`,
    titleWithoutName:
      "Escolha seu relatório astrológico",
    reportLabel:
      "Relatório",
    preparingReport:
      "Preparando o relatório...",
    invalidImageFormat:
      "O formato da imagem astrológica é inválido.",
    invalidImageType:
      "O tipo da imagem astrológica é inválido.",
    missingWheelFunction:
      "A função de criação da roda astrológica está ausente.",
    missingSupabase:
      "A configuração pública do Supabase está ausente.",
    wheelPreparationFailed:
      "Não foi possível preparar a roda astrológica.",
    wheelUploadPreparationFailed:
      "Não foi possível preparar o envio da roda.",
    wheelUploadFailed:
      "Não foi possível salvar a roda astrológica.",
    paymentError: (status) =>
      `Erro de pagamento (${status})`,
    paymentPreparationFailed:
      "Não foi possível preparar o pagamento. Tente novamente.",
  },
};

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "";

const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "";

const supabase =
  SUPABASE_URL &&
  SUPABASE_ANON_KEY
    ? createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY,
        {
          auth: {
            persistSession:
              false,

            autoRefreshToken:
              false,
          },
        }
      )
    : null;

/*
|--------------------------------------------------------------------------
| Création des offres
|--------------------------------------------------------------------------
*/

function createOffers(
  dictionary: Dictionary
): Offer[] {
  return [
    {
      key:
        "essential",

      name:
        dictionary["essentielle"] ||
        "Essentielle",

      badge:
        dictionary["pour_commencer"],

      price:
        dictionary["24_99_us"],

      description:
        dictionary[
          "une_premiere_lecture_personnalisee_de_votre_theme_natal_pour"
        ],

      button:
        dictionary["choisir_essentielle"],

      previewHref:
        "/reports/apercu-rapport-carte-du-ciel-essentielle.pdf",

      features: [
        dictionary[
          "votre_roue_astrologique_personnalisee"
        ],
        dictionary[
          "votre_soleil_votre_lune_et_votre_ascendant"
        ],
        dictionary[
          "vos_dix_principales_planetes"
        ],
        dictionary[
          "vos_elements_et_vos_modalites"
        ],
        dictionary[
          "rapport_pdf_personnalise_et_telechargeable"
        ],
      ],
    },

    {
      key:
        "premium",

      name:
        dictionary["premium"] ||
        "Premium",

      badge:
        dictionary["analyse_approfondie"],

      price:
        dictionary["49_99_us"],

      description:
        dictionary[
          "une_exploration_complete_de_votre_personnalite_de_vos_maison"
        ],

      button:
        dictionary["choisir_premium"],

      previewHref:
        "/reports/apercu-rapport-carte-du-ciel-premium.pdf",

      featured:
        true,

      features: [
        dictionary[
          "tout_le_contenu_du_rapport_essentielle"
        ],
        dictionary[
          "vos_douze_maisons_astrologiques"
        ],
        dictionary[
          "vos_aspects_et_vos_dominantes_astrologiques"
        ],
        dictionary[
          "relations_carriere_forces_et_defis"
        ],
        dictionary[
          "rapport_pdf_detaille_et_telechargeable"
        ],
      ],
    },

    {
      key:
        "signature",

      name:
        dictionary["signature"] ||
        "Signature",

      badge:
        dictionary["le_plus_complet"],

      price:
        dictionary["79_99_us"],

      description:
        dictionary[
          "l_analyse_la_plus_complete_de_votre_theme_natal_avec_vos_gra"
        ],

      button:
        dictionary["choisir_signature"],

      previewHref:
        "/reports/apercu-rapport-carte-du-ciel-signature.pdf",

      features: [
        dictionary[
          "tout_le_contenu_du_rapport_premium"
        ],
        dictionary[
          "mission_de_vie_et_chemin_de_l_ame"
        ],
        dictionary[
          "chiron_n_uds_lunaires_et_aspects_majeurs"
        ],
        dictionary[
          "talents_caches_blocages_et_guide_d_integration"
        ],
        dictionary[
          "synthese_signature_personnalisee"
        ],
      ],
    },
  ];
}

/*
|--------------------------------------------------------------------------
| Conversion de la roue en fichier
|--------------------------------------------------------------------------
*/

function dataUrlToBlob(
  dataUrl: string,
  texts: OfferTexts
): Blob {
  const parts =
    dataUrl.split(",");

  if (
    parts.length !== 2
  ) {
    throw new Error(
      texts.invalidImageFormat
    );
  }

  const header =
    parts[0];

  const base64Data =
    parts[1];

  const mimeMatch =
    header.match(
      /^data:(image\/[a-zA-Z0-9.+-]+);base64$/
    );

  if (!mimeMatch) {
    throw new Error(
      texts.invalidImageType
    );
  }

  const mimeType =
    mimeMatch[1];

  const binaryString =
    atob(
      base64Data
    );

  const bytes =
    new Uint8Array(
      binaryString.length
    );

  for (
    let index = 0;
    index <
    binaryString.length;
    index += 1
  ) {
    bytes[index] =
      binaryString.charCodeAt(
        index
      );
  }

  return new Blob(
    [bytes],
    {
      type:
        mimeType,
    }
  );
}

/*
|--------------------------------------------------------------------------
| Lecture sécurisée des réponses API
|--------------------------------------------------------------------------
*/

async function readJsonResponse<T>(
  response: Response
): Promise<T | null> {
  const responseText =
    await response.text();

  if (!responseText) {
    return null;
  }

  try {
    return JSON.parse(
      responseText
    ) as T;
  } catch {
    return {
      error:
        responseText,
    } as T;
  }
}

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function NatalPremiumOffer(
  props: Props
) {
  const localeDictionary =
  DICTIONARIES[props.locale];

const dictionary: Dictionary = {
  ...fr,
  ...localeDictionary,
};

  const texts =
    OFFER_TEXTS[
      props.locale
    ];

  const offers =
    createOffers(
      dictionary
    );

  const [
    selectedPlan,
    setSelectedPlan,
  ] =
    useState<PlanKey | null>(
      null
    );

  const title =
    props.firstName
      ? texts.titleWithName(
          props.firstName
        )
      : texts.titleWithoutName;

  /*
  |--------------------------------------------------------------------------
  | Envoi de la roue vers Supabase
  |--------------------------------------------------------------------------
  */

  async function uploadWheelImage(): Promise<string> {
    if (
      !props.getWheelImage
    ) {
      throw new Error(
        texts.missingWheelFunction
      );
    }

    if (!supabase) {
      throw new Error(
        texts.missingSupabase
      );
    }

    const wheelImage =
      await props.getWheelImage();

    if (!wheelImage) {
      throw new Error(
        texts.wheelPreparationFailed
      );
    }

    const wheelBlob =
      dataUrlToBlob(
        wheelImage,
        texts
      );

    const signedResponse =
      await fetch(
        "/api/reports/wheel-upload",
        {
          method:
            "POST",

          headers: {
            "Content-Type":
              "application/json",
          },
        }
      );

    const signedData =
      await readJsonResponse<SignedUploadResponse>(
        signedResponse
      );

    if (
      !signedResponse.ok ||
      !signedData?.wheelImagePath ||
      !signedData?.token
    ) {
      throw new Error(
        signedData?.detail ||
          signedData?.error ||
          texts.wheelUploadPreparationFailed
      );
    }

    const {
      error:
        uploadError,
    } =
      await supabase.storage
        .from(
          "rapport-images"
        )
        .uploadToSignedUrl(
          signedData.wheelImagePath,
          signedData.token,
          wheelBlob,
          {
            contentType:
              "image/png",

            upsert:
              false,
          }
        );

    if (uploadError) {
      throw new Error(
        uploadError.message ||
          texts.wheelUploadFailed
      );
    }

    return signedData.wheelImagePath;
  }

  /*
  |--------------------------------------------------------------------------
  | Redirection vers Stripe
  |--------------------------------------------------------------------------
  */

  async function handleCheckout(
    reportType: PlanKey
  ): Promise<void> {
    if (selectedPlan) {
      return;
    }

    setSelectedPlan(
      reportType
    );

    try {
      const wheelImagePath =
        await uploadWheelImage();

      const response =
        await fetch(
          "/api/reports/checkout",
          {
            method:
              "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify({
                reportType,
                locale:
                  props.locale,

                firstName:
                  props.firstName,

                birthDate:
                  props.birthDate,

                birthTime:
                  props.birthTime ||
                  "12:00",

                birthCity:
                  props.birthCity,

                birthCountry:
                  props.birthCountry,

                latitude:
                  props.latitude,

                longitude:
                  props.longitude,

                timezone:
                  props.timezone,

                email:
                  props.email,

                wheelImagePath,
              }),
          }
        );

      const data =
        await readJsonResponse<CheckoutResponse>(
          response
        );

      if (
        !response.ok ||
        !data?.url
      ) {
        console.error(
          "Checkout error:",
          {
            status:
              response.status,

            data,
          }
        );

        alert(
          data?.detail ||
            data?.error ||
            texts.paymentError(
              response.status
            )
        );

        return;
      }

      window.location.href =
        data.url;
    } catch (error) {
      console.error(
        "Payment preparation error:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : texts.paymentPreparationFailed
      );
    } finally {
      setSelectedPlan(
        null
      );
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Affichage
  |--------------------------------------------------------------------------
  */

  return (
    <section
      id="rapports-astrologiques"
      className="natal-premium-offer"
    >
      <div className="natal-reports-head">
        <span className="natal-premium-badge">
          {
            dictionary[
              "rapports_astrologiques_personnalises"
            ]
          }
        </span>

        <h3>
          {title}
        </h3>

        <p className="natal-premium-intro">
          {
            dictionary[
              "votre_carte_du_ciel_est_maintenant_prete_choisissez_le_nivea"
            ]
          }
        </p>
      </div>

      <div className="natal-offers">
        {offers.map(
          (offer) => {
            const isLoading =
              selectedPlan ===
              offer.key;

            const isDisabled =
              selectedPlan !==
              null;

            const cardClassName =
              [
                "natal-offer-card",

                offer.featured
                  ? "natal-offer-card--featured"
                  : "",
              ]
                .filter(Boolean)
                .join(" ");

            const buttonClassName =
              [
                "natal-premium-btn",

                offer.featured
                  ? "natal-premium-btn--featured"
                  : "",
              ]
                .filter(Boolean)
                .join(" ");

            return (
              <article
                key={
                  offer.key
                }
                className={
                  cardClassName
                }
              >
                {offer.featured ? (
                  <div className="natal-featured-label">
                    {
                      dictionary[
                        "recommande"
                      ]
                    }
                  </div>
                ) : null}

                <div className="natal-offer-badge">
                  {offer.badge}
                </div>

                <h4>
                  {texts.reportLabel}{" "}
                  {offer.name}
                </h4>

                <div className="natal-premium-price">
                  {offer.price}
                </div>

                <div className="natal-offer-payment">
                  {
                    dictionary[
                      "paiement_unique"
                    ]
                  }
                </div>

                <p className="natal-offer-description">
                  {offer.description}
                </p>

                <ul className="natal-offer-features">
                  {offer.features.map(
                    (
                      feature
                    ) => (
                      <li
                        key={
                          feature
                        }
                      >
                        <span
                          className="natal-feature-check"
                          aria-hidden="true"
                        >
                          ✓
                        </span>

                        <span>
                          {feature}
                        </span>
                      </li>
                    )
                  )}
                </ul>

                <button
                  type="button"
                  className={
                    buttonClassName
                  }
                  onClick={
                    () =>
                      handleCheckout(
                        offer.key
                      )
                  }
                  disabled={
                    isDisabled
                  }
                  aria-busy={
                    isLoading
                  }
                >
                  {isLoading
                    ? texts.preparingReport
                    : offer.button}
                </button>

                <a
                  href={
                    offer.previewHref
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="natal-report-preview-link"
                >
                  {
                    dictionary[
                      "voir_un_apercu_reel_du_rapport_pdf"
                    ]
                  }
                </a>
              </article>
            );
          }
        )}
      </div>

      <div className="natal-premium-note">
        <p>
          {
            dictionary[
              "paiement_unique_aucun_abonnement_rapport_pdf_personnalise_et"
            ]
          }
        </p>
      </div>
    </section>
  );
}
