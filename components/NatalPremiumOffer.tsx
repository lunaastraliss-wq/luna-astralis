"use client";

import "@/components/natal-report/natal-report.css";

type PlanKey = "essential" | "premium" | "signature";

type Props = {
  firstName?: string;
};

const offers: {
  key: PlanKey;
  icon: string;
  name: string;
  price: string;
  button: string;
  featured?: boolean;
  features: string[];
}[] = [
  {
    key: "essential",
    icon: "🌙",
    name: "Essentielle",
    price: "24,99 $ US",
    button: "Choisir Essentielle",
    features: [
      "Soleil, Lune et Ascendant",
      "Les 10 planètes",
      "Résumé personnalisé",
      "PDF téléchargeable",
    ],
  },
  {
    key: "premium",
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
    key: "signature",
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

export default function NatalPremiumOffer({ firstName }: Props) {
  const title = firstName
    ? `Choisissez le rapport astrologique de ${firstName}`
    : "Choisissez votre rapport astrologique";

  async function handleCheckout(plan: PlanKey) {
    try {
      const res = await fetch("/api/natal-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan }),
      });

      const data = await res.json();

      if (!res.ok || !data?.url) {
        alert("Impossible de créer le paiement. Réessaie.");
        return;
      }

      window.location.href = data.url;
    } catch {
      alert("Erreur de connexion avec Stripe. Réessaie.");
    }
  }

  return (
    <section className="natal-premium-offer">
      <div className="natal-premium-badge">Rapports astrologiques</div>

      <h3>{title}</h3>

      <p className="natal-premium-intro">
        Trois niveaux d'analyse personnalisée selon votre date, votre heure
        et votre lieu de naissance.
      </p>

      <div className="natal-offers">
        {offers.map((offer) => (
          <div
            key={offer.key}
            className={
              offer.featured
                ? "natal-offer-card featured"
                : "natal-offer-card"
            }
          >
            {offer.featured && (
              <div className="best-value">⭐ Le plus populaire</div>
            )}

            <div className="natal-offer-icon">{offer.icon}</div>

            <h4>{offer.name}</h4>

            <ul className="natal-offer-features">
              {offer.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <div className="natal-premium-price">{offer.price}</div>

            <button
              type="button"
              className="natal-premium-btn"
              onClick={() => handleCheckout(offer.key)}
            >
              {offer.button}
            </button>
          </div>
        ))}
      </div>

      <p className="natal-premium-note">
        Paiement unique • Aucun abonnement • PDF téléchargeable
      </p>
    </section>
  );
}
