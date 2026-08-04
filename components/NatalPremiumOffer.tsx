"use client";



import __i18n from "../i18n/migrated/fr/components/natalpremiumoffer.json";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

import "@/components/natal-report/natal-report.css";

type PlanKey =
  | "essential"
  | "premium"
  | "signature";

type Props = {
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

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "";

const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY,
        {
          auth: {
            persistSession: false,
            autoRefreshToken: false,
          },
        }
      )
    : null;

/*
|--------------------------------------------------------------------------
| Rapports astrologiques
|--------------------------------------------------------------------------
*/

const OFFERS: Offer[] = [
  {
    key: "essential",

    name: "Essentielle",

    badge: __i18n["pour_commencer"],

    price: __i18n["24_99_us"],

    description:
      __i18n["une_premiere_lecture_personnalisee_de_votre_theme_natal_pour"],

    button:
      __i18n["choisir_essentielle"],

    previewHref:
      "/reports/apercu-rapport-carte-du-ciel-essentielle.pdf",

    features: [
      __i18n["votre_roue_astrologique_personnalisee"],
      __i18n["votre_soleil_votre_lune_et_votre_ascendant"],
      __i18n["vos_dix_principales_planetes"],
      __i18n["vos_elements_et_vos_modalites"],
      __i18n["rapport_pdf_personnalise_et_telechargeable"],
    ],
  },

  {
    key: "premium",

    name: "Premium",

    badge:
      __i18n["analyse_approfondie"],

    price: __i18n["49_99_us"],

    description:
      __i18n["une_exploration_complete_de_votre_personnalite_de_vos_maison"],

    button:
      __i18n["choisir_premium"],

    previewHref:
      "/reports/apercu-rapport-carte-du-ciel-premium.pdf",

    featured: true,

    features: [
      __i18n["tout_le_contenu_du_rapport_essentielle"],
      __i18n["vos_douze_maisons_astrologiques"],
      __i18n["vos_aspects_et_vos_dominantes_astrologiques"],
      __i18n["relations_carriere_forces_et_defis"],
      __i18n["rapport_pdf_detaille_et_telechargeable"],
    ],
  },

  {
    key: "signature",

    name: "Signature",

    badge:
      __i18n["le_plus_complet"],

    price: __i18n["79_99_us"],

    description:
      __i18n["l_analyse_la_plus_complete_de_votre_theme_natal_avec_vos_gra"],

    button:
      __i18n["choisir_signature"],

    previewHref:
      "/reports/apercu-rapport-carte-du-ciel-signature.pdf",

    features: [
      __i18n["tout_le_contenu_du_rapport_premium"],
      __i18n["mission_de_vie_et_chemin_de_l_ame"],
      __i18n["chiron_n_uds_lunaires_et_aspects_majeurs"],
      __i18n["talents_caches_blocages_et_guide_d_integration"],
      __i18n["synthese_signature_personnalisee"],
    ],
  },
];

/*
|--------------------------------------------------------------------------
| Conversion de la roue en fichier
|--------------------------------------------------------------------------
*/

function dataUrlToBlob(
  dataUrl: string
): Blob {
  const parts =
    dataUrl.split(",");

  if (parts.length !== 2) {
    throw new Error(
      "Le format de l’image astrologique est invalide."
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
      "Le type de l’image astrologique est invalide."
    );
  }

  const mimeType =
    mimeMatch[1];

  const binaryString =
    atob(base64Data);

  const bytes =
    new Uint8Array(
      binaryString.length
    );

  for (
    let index = 0;
    index < binaryString.length;
    index += 1
  ) {
    bytes[index] =
      binaryString.charCodeAt(index);
  }

  return new Blob(
    [bytes],
    {
      type: mimeType,
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
      error: responseText,
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
  const [
    selectedPlan,
    setSelectedPlan,
  ] =
    useState<PlanKey | null>(
      null
    );

  const title =
    props.firstName
      ? `Choisissez le rapport astrologique de ${props.firstName}`
      : "Choisissez votre rapport astrologique";

  /*
  |--------------------------------------------------------------------------
  | Envoi de la roue vers Supabase
  |--------------------------------------------------------------------------
  */

  async function uploadWheelImage(): Promise<string> {
    if (!props.getWheelImage) {
      throw new Error(
        "La fonction de création de la roue est absente."
      );
    }

    if (!supabase) {
      throw new Error(
        "La configuration publique de Supabase est absente."
      );
    }

    const wheelImage =
      await props.getWheelImage();

    if (!wheelImage) {
      throw new Error(
        "La roue astrologique n’a pas pu être préparée."
      );
    }

    const wheelBlob =
      dataUrlToBlob(
        wheelImage
      );

    const signedResponse =
      await fetch(
        "/api/reports/wheel-upload",
        {
          method: "POST",

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
          "Impossible de préparer l’envoi de la roue."
      );
    }

    const {
      error: uploadError,
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

            upsert: false,
          }
        );

    if (uploadError) {
      throw new Error(
        uploadError.message ||
          "Impossible d’enregistrer la roue astrologique."
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
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              reportType,

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
          "Erreur checkout :",
          {
            status:
              response.status,

            data,
          }
        );

        alert(
          data?.detail ||
            data?.error ||
            `Erreur de paiement (${response.status})`
        );

        return;
      }

      window.location.href =
        data.url;
    } catch (error) {
      console.error(
        "Erreur pendant la préparation du paiement :",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Impossible de préparer le paiement. Réessaie."
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
          {__i18n["rapports_astrologiques_personnalises"]}</span>

        <h3>{title}</h3>

        <p className="natal-premium-intro">
          {__i18n["votre_carte_du_ciel_est_maintenant_prete_choisissez_le_nivea"]}</p>
      </div>

      <div className="natal-offers">
        {OFFERS.map(
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
                key={offer.key}
                className={cardClassName}
              >
                {offer.featured ? (
                  <div className="natal-featured-label">
                    {__i18n["recommande"]}</div>
                ) : null}

                <div className="natal-offer-badge">
                  {offer.badge}
                </div>

                <h4>
                  Rapport{" "}
                  {offer.name}
                </h4>

                <div className="natal-premium-price">
                  {offer.price}
                </div>

                <div className="natal-offer-payment">
                  {__i18n["paiement_unique"]}</div>

                <p className="natal-offer-description">
                  {offer.description}
                </p>

                <ul className="natal-offer-features">
                  {offer.features.map(
                    (feature) => (
                      <li key={feature}>
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
                  className={buttonClassName}
                  onClick={() =>
                    handleCheckout(
                      offer.key
                    )
                  }
                  disabled={isDisabled}
                  aria-busy={isLoading}
                >
                  {isLoading
                    ? "Préparation du rapport..."
                    : offer.button}
                </button>

                <a
                  href={offer.previewHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="natal-report-preview-link"
                >
                  {__i18n["voir_un_apercu_reel_du_rapport_pdf"]}</a>
              </article>
            );
          }
        )}
      </div>

      <div className="natal-premium-note">
        <p>
          {__i18n["paiement_unique_aucun_abonnement_rapport_pdf_personnalise_et"]}</p>
      </div>
    </section>
  );
}
