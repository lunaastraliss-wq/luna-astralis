"use client";

import { useState } from "react";
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

export default function NatalPremiumOffer(props: Props) {
  const [selectedPlan, setSelectedPlan] = useState<PlanKey | null>(
    null
  );

  const title = props.firstName
    ? `Choisissez le rapport astrologique de ${props.firstName}`
    : "Choisissez votre rapport astrologique";

  async function handleCheckout(reportType: PlanKey) {
    if (selectedPlan) return;

    setSelectedPlan(reportType);

    try {
      let wheelImage = "";

      if (props.getWheelImage) {
        wheelImage = await props.getWheelImage();
      }

      if (!wheelImage) {
        alert(
          "La roue astrologique n’a pas pu être préparée. Réessaie."
        );
        return;
      }

      const res = await fetch("/api/reports/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reportType,
          firstName: props.firstName,
          birthDate: props.birthDate,
          birthTime: props.birthTime || "12:00",
          birthCity: props.birthCity,
          birthCountry: props.birthCountry,
          latitude: props.latitude,
          longitude: props.longitude,
          timezone: props.timezone,
          email: props.email,

          // PNG de la roue envoyé à la création de la commande
          wheelImage,
        }),
      });

     const responseText = await res.text();

let data: any = null;

try {
  data = responseText
    ? JSON.parse(responseText)
    : null;
} catch {
  data = null;
}

if (!res.ok || !data?.url) {
  console.error("Erreur checkout :", {
    status: res.status,
    responseText,
    data,
  });

  alert(
    data?.detail ||
      data?.error ||
      responseText ||
      `Erreur de paiement (${res.status})`
  );

  return;
}
      window.location.href = data.url;
    } catch (error) {
      console.error(
        "Erreur de connexion avec Stripe :",
        error
      );

      alert("Erreur de connexion avec Stripe. Réessaie.");
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
          const isLoading = selectedPlan === offer.key;
          const isDisabled = selectedPlan !== null;

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
                {offer.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <div className="natal-premium-price">
                {offer.price}
              </div>

              <button
                type="button"
                className="natal-premium-btn"
                onClick={() => handleCheckout(offer.key)}
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
