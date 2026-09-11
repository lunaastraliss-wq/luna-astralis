// app/[locale]/mentions-legales/page.tsx

import { notFound } from "next/navigation";

import {
  isLocale,
  type Locale,
} from "@/i18n/config";

import fr from "@/i18n/migrated/fr/app/mentions-legales/page.json";
import en from "@/i18n/migrated/en/app/mentions-legales/page.json";
import es from "@/i18n/migrated/es/app/mentions-legales/page.json";
import de from "@/i18n/migrated/de/app/mentions-legales/page.json";
import it from "@/i18n/migrated/it/app/mentions-legales/page.json";
import pt from "@/i18n/migrated/pt/app/mentions-legales/page.json";

const DICTIONARIES = {
  fr,
  en,
  es,
  de,
  it,
  pt,
} satisfies Record<Locale, Record<string, string>>;

type Props = {
  params: {
    locale: string;
  };
};

export default function MentionsLegalesPage({ params }: Props) {
  const { locale } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const __i18n = DICTIONARIES[locale];

  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <h1>{__i18n["mentions_legales"]}</h1>

        <p>
          <strong>{__i18n["luna_astralis"]}</strong>
          <br />
          {
            __i18n[
              "plateforme_d_exploration_personnelle_et_introspective"
            ]
          }
        </p>

        <p>
          <strong>{__i18n["editeur"]}</strong>
          <br />
          {__i18n["nom_luna_astralis"]}
          <br />
          {__i18n["pays_canada"]}
          <br />
          {__i18n["contact_lunaastraliss_gmail_com"]}
        </p>

        <p>
          <strong>{__i18n["hebergement"]}</strong>
          <br />
          {
            __i18n[
              "service_heberge_par_un_prestataire_tiers_securise"
            ]
          }
        </p>

        <p>
          <strong>{__i18n["propriete_intellectuelle"]}</strong>
          <br />
          {
            __i18n[
              "l_ensemble_des_contenus_textes_visuels_design_est_protege_pa"
            ]
          }
        </p>
      </div>
    </main>
  );
}
