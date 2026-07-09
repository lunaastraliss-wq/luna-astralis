"use client";

type Props = {
  firstName?: string;
};

export default function NatalPremiumOffer({ firstName }: Props) {
  const title = firstName
    ? `Choisissez le rapport astrologique de ${firstName}`
    : "Choisissez votre rapport astrologique";

  return (
    <section className="natal-premium-offer">
      <div className="natal-premium-badge">Rapports astrologiques</div>

      <h3>{title}</h3>

      <p className="natal-premium-intro">
        Choisissez le niveau d'analyse qui correspond à vos besoins.
        Tous les rapports sont personnalisés selon votre date,
        votre heure et votre lieu de naissance.
      </p>

      <div className="natal-offers">

        <div className="natal-offer-card">
          <h4>🌙 Essentielle</h4>

          <div className="natal-premium-list">
            <span>✓ Soleil, Lune et Ascendant</span>
            <span>✓ Les 10 planètes</span>
            <span>✓ Résumé personnalisé</span>
            <span>✓ PDF téléchargeable</span>
          </div>

          <div className="natal-premium-price">
            24,99 $
          </div>

          <button
            type="button"
            className="natal-premium-btn"
          >
            Choisir Essentielle
          </button>
        </div>

        <div className="natal-offer-card featured">
          <div className="best-value">
            ★ Le plus populaire
          </div>

          <h4>⭐ Premium</h4>

          <div className="natal-premium-list">
            <span>✓ Soleil, Lune et Ascendant</span>
            <span>✓ Les 10 planètes</span>
            <span>✓ Les 12 maisons</span>
            <span>✓ Amour, carrière et finances</span>
            <span>✓ Forces et défis</span>
            <span>✓ Mission de vie</span>
            <span>✓ PDF détaillé</span>
          </div>

          <div className="natal-premium-price">
            49,99 $
          </div>

          <button
            type="button"
            className="natal-premium-btn"
          >
            Choisir Premium
          </button>
        </div>

        <div className="natal-offer-card">
          <h4>👑 Signature</h4>

          <div className="natal-premium-list">
            <span>✓ Rapport Premium complet</span>
            <span>✓ Tous les aspects astrologiques</span>
            <span>✓ Chiron</span>
            <span>✓ Nœuds lunaires</span>
            <span>✓ Dominantes</span>
            <span>✓ Analyse approfondie</span>
            <span>✓ Rapport haut de gamme</span>
          </div>

          <div className="natal-premium-price">
            79,99 $
          </div>

          <button
            type="button"
            className="natal-premium-btn"
          >
            Choisir Signature
          </button>
        </div>

      </div>

      <p className="natal-premium-note">
        Paiement unique • Aucun abonnement • Téléchargement immédiat
      </p>
    </section>
  );
}
