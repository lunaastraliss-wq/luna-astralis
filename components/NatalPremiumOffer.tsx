"use client";

type Props = {
  firstName?: string;
};

export default function NatalPremiumOffer({ firstName }: Props) {
  const title = firstName
    ? `Débloquez le rapport astrologique complet de ${firstName}`
    : "Débloquez votre rapport astrologique complet";

  return (
    <section className="natal-premium-offer">
      <div className="natal-premium-badge">Rapport Premium</div>

      <h3>{title}</h3>

      <p className="natal-premium-intro">
        Recevez une interprétation complète, personnalisée et détaillée de votre
        thème astral en PDF.
      </p>

      <div className="natal-premium-list">
        <span>✓ Soleil, Lune et Ascendant</span>
        <span>✓ Les 10 planètes</span>
        <span>✓ Les 12 maisons astrologiques</span>
        <span>✓ Amour, travail et argent</span>
        <span>✓ Forces, défis et mission de vie</span>
        <span>✓ PDF téléchargeable</span>
      </div>

      <div className="natal-premium-price">19,99 $</div>

      <button type="button" className="natal-premium-btn">
        ✨ Débloquer mon rapport complet
      </button>

      <p className="natal-premium-note">
        Paiement unique. Aucun abonnement.
      </p>
    </section>
  );
}
