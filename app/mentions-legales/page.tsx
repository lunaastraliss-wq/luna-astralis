import __i18n from "../../i18n/migrated/fr/app/mentions-legales/page.json";
export const metadata = {
  title: __i18n["mentions_legales_luna_astralis"],
};

export default function MentionsLegalesPage() {
  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <h1>{__i18n["mentions_legales"]}</h1>

        <p>
          <strong>{__i18n["luna_astralis"]}</strong>
          <br />
          {__i18n["plateforme_d_exploration_personnelle_et_introspective"]}</p>

        <p>
          <strong>{__i18n["editeur"]}</strong>
          <br />
          {__i18n["nom_luna_astralis"]}<br />
          {__i18n["pays_canada"]}<br />
          {__i18n["contact_lunaastraliss_gmail_com"]}</p>

        <p>
          <strong>{__i18n["hebergement"]}</strong>
          <br />
          {__i18n["service_heberge_par_un_prestataire_tiers_securise"]}</p>

        <p>
          <strong>{__i18n["propriete_intellectuelle"]}</strong>
          <br />
          {__i18n["l_ensemble_des_contenus_textes_visuels_design_est_protege_pa"]}</p>
      </div>
    </main>
  );
}

