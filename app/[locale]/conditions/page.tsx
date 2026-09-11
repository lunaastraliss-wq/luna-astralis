// app/[locale]/conditions/page.tsx

import { notFound } from "next/navigation";

import {
  isLocale,
  type Locale,
} from "@/i18n/config";

import fr from "@/i18n/migrated/fr/app/conditions/page.json";
import en from "@/i18n/migrated/en/app/conditions/page.json";
import es from "@/i18n/migrated/es/app/conditions/page.json";
import de from "@/i18n/migrated/de/app/conditions/page.json";
import it from "@/i18n/migrated/it/app/conditions/page.json";
import pt from "@/i18n/migrated/pt/app/conditions/page.json";

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

export default function ConditionsPage({ params }: Props) {
  const { locale } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const __i18n = DICTIONARIES[locale];

  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <h1>{__i18n["conditions_d_utilisation"]}</h1>

        <p>
          {
            __i18n[
              "luna_astralis_est_un_outil_d_exploration_personnelle_et_intr"
            ]
          }
        </p>

        <p>
          {
            __i18n[
              "il_ne_constitue_en_aucun_cas_un_service_medical_psychologiqu"
            ]
          }
        </p>

        <h2>{__i18n["responsabilite"]}</h2>

        <p>
          {
            __i18n[
              "l_utilisateur_reconnait_utiliser_le_service_sous_sa_seule_re"
            ]
          }
        </p>

        <h2>{__i18n["abonnements"] ?? "Abonnements"}</h2>

        <p>
          {
            __i18n[
              "certaines_fonctionnalites_peuvent_etre_payantes_les_abonneme"
            ]
          }
        </p>

        <h2>{__i18n["disponibilite"]}</h2>

        <p>
          {
            __i18n[
              "le_service_est_fourni_sans_garantie_de_disponibilite_continu"
            ]
          }
        </p>
      </div>
    </main>
  );
}
