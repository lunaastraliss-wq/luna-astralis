import __i18n from "../../i18n/migrated/fr/app/confidentialite/page.json";
export const metadata = {
  title: __i18n["politique_de_confidentialite_luna_astralis"],
  description:
    __i18n["politique_de_confidentialite_et_protection_des_donnees_perso"],
};

export default function ConfidentialitePage() {
  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <h1>{__i18n["politique_de_confidentialite"]}</h1>

        <p>
          {__i18n["luna_astralis_accorde_une_importance_particuliere_a_la_prote"]}</p>

        <h2>{__i18n["1_responsable_du_traitement"]}</h2>
        <p>{__i18n["le_responsable_du_traitement_des_donnees_personnelles_est"]}</p>
        <p>
          <strong>{__i18n["luna_astralis"]}</strong>
          <br />
          {__i18n["email_lunaastraliss_gmail_com"]}</p>

        <h2>{__i18n["2_donnees_collectees"]}</h2>
        <p>{__i18n["selon_l_utilisation_du_service_les_donnees_suivantes_peuvent"]}</p>
        <ul>
          <li>{__i18n["donnees_de_compte_lorsqu_un_compte_est_cree"]}</li>
          <li>{__i18n["messages_echanges_avec_l_outil_d_exploration"]}</li>
          <li>
            {__i18n["donnees_techniques_necessaires_au_fonctionnement_du_site_ex"]}</li>
        </ul>

        <h2>{__i18n["3_finalite_du_traitement"]}</h2>
        <p>{__i18n["les_donnees_personnelles_sont_utilisees_uniquement_pour"]}</p>
        <ul>
          <li>{__i18n["fournir_et_faire_fonctionner_le_service"]}</li>
          <li>{__i18n["permettre_l_acces_aux_fonctionnalites_proposees"]}</li>
          <li>{__i18n["assurer_la_securite_et_la_stabilite_du_site"]}</li>
          <li>{__i18n["ameliorer_l_experience_utilisateur"]}</li>
        </ul>

        <p>
          {__i18n["aucune_donnee_n_est_utilisee_a_des_fins_de_diagnostic_medica"]}</p>

        <h2>{__i18n["4_base_legale_du_traitement"]}</h2>
        <p>{__i18n["le_traitement_des_donnees_personnelles_repose_sur"]}</p>
        <ul>
          <li>{__i18n["le_consentement_de_l_utilisateur"]}</li>
          <li>{__i18n["l_execution_du_service_demande"]}</li>
          <li>
            {__i18n["l_interet_legitime_lie_au_fonctionnement_a_la_securite_et_a"]}</li>
        </ul>

        <h2>{__i18n["5_prestataires_et_sous_traitants"]}</h2>
        <p>
          {__i18n["le_service_s_appuie_sur_des_prestataires_techniques_suscepti"]}</p>
        <ul>
          <li>
            <strong>Vercel</strong> {__i18n["hebergement_du_site"]}</li>
          <li>
            <strong>Supabase</strong> {__i18n["base_de_donnees_et_authentification"]}</li>
          <li>
            <strong>Stripe</strong> {__i18n["gestion_des_paiements"]}</li>
          <li>
            <strong>OpenAI</strong> {__i18n["generation_des_reponses_de_l_outil"]}</li>
        </ul>

        <p>
          {__i18n["ces_prestataires_agissent_en_tant_que_sous_traitants_et_appl"]}</p>

        <h2>{__i18n["6_transferts_hors_union_europeenne"]}</h2>
        <p>
          {__i18n["certaines_donnees_peuvent_etre_traitees_sur_des_serveurs_sit"]}</p>

        <h2>{__i18n["7_conservation_des_donnees"]}</h2>
        <p>
          {__i18n["les_donnees_personnelles_sont_conservees_uniquement_pendant"]}</p>

        <h2>{__i18n["8_droits_des_utilisateurs"]}</h2>
        <p>
          {__i18n["conformement_au_rgpd_les_utilisateurs_residant_dans_l_union"]}</p>
        <ul>
          <li>{__i18n["droit_d_acces"]}</li>
          <li>{__i18n["droit_de_rectification"]}</li>
          <li>{__i18n["droit_a_l_effacement"]}</li>
          <li>{__i18n["droit_a_la_limitation_du_traitement"]}</li>
          <li>{__i18n["droit_d_opposition"]}</li>
          <li>{__i18n["droit_a_la_portabilite_des_donnees"]}</li>
        </ul>

        <h2>{__i18n["9_nature_du_service"]}</h2>
        <p>
          {__i18n["luna_astralis_est_un_outil_d_exploration_personnelle_a_visee"]}</p>

        <p>
          <em>{__i18n["derniere_mise_a_jour_janvier_2026"]}</em>
        </p>
      </div>
    </main>
  );
}

