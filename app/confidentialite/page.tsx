export const metadata = {
  title: "Politique de confidentialité — Luna Astralis",
  description:
    "Politique de confidentialité et protection des données personnelles — Luna Astralis",
};

export default function ConfidentialitePage() {
  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <h1>Politique de confidentialité</h1>

        <p>
          Luna Astralis accorde une importance particulière à la protection de la
          vie privée et au respect des données personnelles de ses utilisateurs.
          La présente politique décrit les modalités de collecte, d’utilisation
          et de protection des données personnelles, conformément au Règlement
          Général sur la Protection des Données (RGPD).
        </p>

        <h2>1. Responsable du traitement</h2>
        <p>Le responsable du traitement des données personnelles est :</p>
        <p>
          <strong>Luna Astralis</strong>
          <br />
          Email : lunaastraliss@gmail.com
        </p>

        <h2>2. Données collectées</h2>
        <p>Selon l’utilisation du service, les données suivantes peuvent être traitées :</p>
        <ul>
          <li>Données de compte (lorsqu’un compte est créé)</li>
          <li>Messages échangés avec l’outil d’exploration</li>
          <li>
            Données techniques nécessaires au fonctionnement du site (ex.
            navigateur, appareil, journaux techniques)
          </li>
        </ul>

        <h2>3. Finalité du traitement</h2>
        <p>Les données personnelles sont utilisées uniquement pour :</p>
        <ul>
          <li>Fournir et faire fonctionner le service</li>
          <li>Permettre l’accès aux fonctionnalités proposées</li>
          <li>Assurer la sécurité et la stabilité du site</li>
          <li>Améliorer l’expérience utilisateur</li>
        </ul>

        <p>
          Aucune donnée n’est utilisée à des fins de diagnostic médical,
          thérapeutique ou psychologique.
        </p>

        <h2>4. Base légale du traitement</h2>
        <p>Le traitement des données personnelles repose sur :</p>
        <ul>
          <li>Le consentement de l’utilisateur</li>
          <li>L’exécution du service demandé</li>
          <li>
            L’intérêt légitime lié au fonctionnement, à la sécurité et à
            l’amélioration du service
          </li>
        </ul>

        <h2>5. Prestataires et sous-traitants</h2>
        <p>
          Le service s’appuie sur des prestataires techniques susceptibles de
          traiter certaines données pour le compte de Luna Astralis :
        </p>
        <ul>
          <li>
            <strong>Vercel</strong> — hébergement du site
          </li>
          <li>
            <strong>Supabase</strong> — base de données et authentification
          </li>
          <li>
            <strong>Stripe</strong> — gestion des paiements
          </li>
          <li>
            <strong>OpenAI</strong> — génération des réponses de l’outil
          </li>
        </ul>

        <p>
          Ces prestataires agissent en tant que sous-traitants et appliquent
          leurs propres mesures de sécurité et de conformité réglementaire.
        </p>

        <h2>6. Transferts hors Union européenne</h2>
        <p>
          Certaines données peuvent être traitées sur des serveurs situés en
          dehors de l’Union européenne. Lorsque cela est applicable, des
          garanties appropriées sont mises en place conformément aux exigences
          du RGPD.
        </p>

        <h2>7. Conservation des données</h2>
        <p>
          Les données personnelles sont conservées uniquement pendant la durée
          nécessaire au fonctionnement du service ou afin de respecter les
          obligations légales applicables.
        </p>

        <h2>8. Droits des utilisateurs</h2>
        <p>
          Conformément au RGPD, les utilisateurs résidant dans l’Union européenne
          disposent des droits suivants :
        </p>
        <ul>
          <li>Droit d’accès</li>
          <li>Droit de rectification</li>
          <li>Droit à l’effacement</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit d’opposition</li>
          <li>Droit à la portabilité des données</li>
        </ul>

        <h2>9. Nature du service</h2>
        <p>
          Luna Astralis est un outil d’exploration personnelle à visée
          informative. Il ne constitue pas un service médical, psychologique ou
          thérapeutique et ne remplace pas l’avis d’un professionnel qualifié.
        </p>

        <p>
          <em>Dernière mise à jour : janvier 2026</em>
        </p>
      </div>
    </main>
  );
}

