import __i18n from "../../i18n/migrated/fr/app/conditions/page.json";
export const metadata = {
  title: __i18n["conditions_d_utilisation_luna_astralis"],
};

export default function ConditionsPage() {
  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <h1>{__i18n["conditions_d_utilisation"]}</h1>

        <p>{__i18n["luna_astralis_est_un_outil_d_exploration_personnelle_et_intr"]}</p>

        <p>
          {__i18n["il_ne_constitue_en_aucun_cas_un_service_medical_psychologiqu"]}</p>

        <h2>{__i18n["responsabilite"]}</h2>
        <p>
          {__i18n["l_utilisateur_reconnait_utiliser_le_service_sous_sa_seule_re"]}</p>

        <h2>Abonnements</h2>
        <p>
          {__i18n["certaines_fonctionnalites_peuvent_etre_payantes_les_abonneme"]}</p>

        <h2>{__i18n["disponibilite"]}</h2>
        <p>{__i18n["le_service_est_fourni_sans_garantie_de_disponibilite_continu"]}</p>
      </div>
    </main>
  );
}

