"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "@/components/natal-report/natal-report.css";

type PlanKey = "essential" | "premium" | "signature";

type Props = {
  firstName?: string;
  birthDate?: string;
  birthTime?: string;
  birthCity?: string;
  birthCountry?: string;
  latitude?: string | number | null;
  longitude?: string | number | null;
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

const offers = [
  {
    key: "essential" as PlanKey,
    icon: "🌙",
    name: "Essentielle",
    price: "24,99 $ US",
    button: "Choisir Essentielle",
    features: [
      "Roue astrologique personnalisée",
      "Soleil, Lune et Ascendant",
      "Les 10 planètes",
      "Résumé personnalisé",
      "PDF téléchargeable",
    ],
  },
  {
    key: "premium" as PlanKey,
    icon: "⭐",
    name: "Premium",
    price: "49,99 $ US",
    button: "Choisir Premium",
    featured: true,
    features: [
      "Tout le rapport Essentielle",
      "Les 12 maisons astrologiques",
      "Amour, carrière et finances",
      "Forces, défis et mission de vie",
      "PDF détaillé",
    ],
  },
  {
    key: "signature" as PlanKey,
    icon: "👑",
    name: "Signature",
    price: "79,99 $ US",
    button: "Choisir Signature",
    features: [
      "Tout le rapport Premium",
      "Aspects astrologiques majeurs",
      "Chiron et nœuds lunaires",
      "Dominantes du thème",
      "Analyse haut de gamme",
    ],
  },
];

function dataUrlToBlob(dataUrl: string): Blob {
  const parts = dataUrl.split(",");

  if (parts.length !== 2) {
    throw new Error(
      "Le format de l’image astrologique est invalide."
    );
  }

  const header = parts[0];
  const base64Data = parts[1];

  const mimeMatch = header.match(
    /^data:(image\/[a-zA-Z0-9.+-]+);base64$/
  );

  if (!mimeMatch) {
    throw new Error(
      "Le type de l’image astrologique est invalide."
    );
  }

  const mimeType = mimeMatch[1];
  const binaryString = atob(base64Data);
  const bytes = new Uint8Array(binaryString.length);

  for (
    let index = 0;
    index < binaryString.length;
    index += 1
  ) {
    bytes[index] = binaryString.charCodeAt(index);
  }

  return new Blob([bytes], {
    type: mimeType,
  });
}

async function readJsonResponse(
  response: Response
): Promise<any> {
  const responseText = await response.text();

  if (!responseText) {
    return null;
  }

  try {
    return JSON.parse(responseText);
  } catch {
    return {
      error: responseText,
    };
  }
}

export default function NatalPremiumOffer(
  props: Props
) {
  const [selectedPlan, setSelectedPlan] =
    useState<PlanKey | null>(null);

  const title = props.firstName
    ? `Choisissez le rapport astrologique de ${props.firstName}`
    : "Choisissez votre rapport astrologique";

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
      dataUrlToBlob(wheelImage);

    const signedResponse = await fetch(
      "/api/reports/wheel-upload",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const signedData =
      (await readJsonResponse(
        signedResponse
      )) as SignedUploadResponse | null;

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

    const { error: uploadError } =
      await supabase.storage
        .from("rapport-images")
        .uploadToSignedUrl(
          signedData.wheelImagePath,
          signedData.token,
          wheelBlob,
          {
            contentType: "image/png",
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

  async function handleCheckout(
    reportType: PlanKey
  ) {
    if (selectedPlan) return;

    setSelectedPlan(reportType);

    try {
      const wheelImagePath =
        await uploadWheelImage();

      const res = await fetch(
        "/api/reports/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            reportType,
            firstName: props.firstName,
            birthDate: props.birthDate,
            birthTime:
              props.birthTime ||
              "12:00",
            birthCity: props.birthCity,
            birthCountry:
              props.birthCountry,
            latitude: props.latitude,
            longitude: props.longitude,
            timezone: props.timezone,
            email: props.email,
            wheelImagePath,
          }),
        }
      );

      const data =
        await readJsonResponse(res);

      if (!res.ok || !data?.url) {
        console.error(
          "Erreur checkout :",
          {
            status: res.status,
            data,
          }
        );

        alert(
          data?.detail ||
            data?.error ||
            `Erreur de paiement (${res.status})`
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
      setSelectedPlan(null);
    }
  }

  return (
    <section className="natal-premium-offer">
      <div className="natal-premium-badge">
        Rapports astrologiques
      </div>

      <h3>{title}</h3>

      <p className="natal-premium-intro">
        Trois niveaux d’analyse personnalisée selon votre date,
        votre heure et votre lieu de naissance.
      </p>

      <div className="natal-offers">
        {offers.map((offer) => {
          const isLoading =
            selectedPlan === offer.key;

          const isDisabled =
            selectedPlan !== null;

          return (
            <div
              key={offer.key}
              className={
                offer.featured
                  ? "natal-offer-card featured"
                  : "natal-offer-card"
              }
            >
              {offer.featured && (
                <div className="best-value">
                  ⭐ Le plus populaire
                </div>
              )}

              <div className="natal-offer-icon">
                {offer.icon}
              </div>

              <h4>{offer.name}</h4>

              <ul className="natal-offer-features">
                {offer.features.map(
                  (feature) => (
                    <li key={feature}>
                      ✓ {feature}
                    </li>
                  )
                )}
              </ul>

              <div className="natal-premium-price">
                {offer.price}
              </div>

              <button
                type="button"
                className="natal-premium-btn"
                onClick={() =>
                  handleCheckout(
                    offer.key
                  )
                }
                disabled={isDisabled}
              >
                {isLoading
                  ? "Préparation du rapport..."
                  : offer.button}
              </button>
            </div>
          );
        })}
      </div>

      <p className="natal-premium-note">
        Paiement unique • Aucun abonnement • PDF téléchargeable
      </p>
    </section>
  );
}
