import __i18n from "../../i18n/migrated/fr/app/age-18/page.json";
export const metadata = {
  title: __i18n["restriction_d_age_luna_astralis"],
};

export default function Age18Page() {
  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <h1>{__i18n["restriction_d_age"]}</h1>

        <p>
          {__i18n["luna_astralis_est_reserve_exclusivement_aux_personnes"]}{" "}
          <strong>{__i18n["agees_de_18_ans_ou_plus"]}</strong>.
        </p>

        <p>
          {__i18n["en_utilisant_ce_service_l_utilisateur_confirme_avoir_atteint"]}</p>
      </div>
    </main>
  );
}

