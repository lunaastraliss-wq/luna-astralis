import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TRANSLATIONS
========================================================= */

const TRANSLATIONS: Record<
  PaidPdfLocale,
  Record<string, string>
> = {
  fr: {},

  en: {
    "Identité • Vitalité": "Identity • Vitality",
    "Émotions • Intuition": "Emotions • Intuition",
    "Réflexion • Échanges": "Thinking • Communication",
    "Relations • Harmonie": "Relationships • Harmony",
    "Action • Courage": "Action • Courage",
    "Expansion • Occasions": "Expansion • Opportunities",
    "Structure • Maturité": "Structure • Maturity",
    "Liberté • Renouveau": "Freedom • Renewal",
    "Inspiration • Sensibilité": "Inspiration • Sensitivity",
    "Transformation • Vérité": "Transformation • Truth",

    "Influence majeure": "Major Influence",
    "Influence principale": "Primary Influence",
    "Influence secondaire": "Secondary Influence",
    "Influence complémentaire": "Complementary Influence",
    "Influence dominante": "Dominant Influence",

    "Cette influence atteint une intensité de":
      "This influence reaches an intensity of",

    "Les forces dominantes": "Dominant Forces",
    "Votre climat planétaire": "Your Planetary Climate",
    "Votre trio dominant": "Your Dominant Trio",
    "Intensité :": "Intensity:",
    "Influence dans votre année": "Influence in Your Year",
    "Conseil": "Guidance",
    "Votre combinaison dominante": "Your Dominant Combination",
  },

  es: {
    "Identité • Vitalité": "Identidad • Vitalidad",
    "Émotions • Intuition": "Emociones • Intuición",
    "Réflexion • Échanges": "Reflexión • Comunicación",
    "Relations • Harmonie": "Relaciones • Armonía",
    "Action • Courage": "Acción • Valor",
    "Expansion • Occasions": "Expansión • Oportunidades",
    "Structure • Maturité": "Estructura • Madurez",
    "Liberté • Renouveau": "Libertad • Renovación",
    "Inspiration • Sensibilité": "Inspiración • Sensibilidad",
    "Transformation • Vérité": "Transformación • Verdad",

    "Influence majeure": "Influencia principal",
    "Influence principale": "Influencia primaria",
    "Influence secondaire": "Influencia secundaria",
    "Influence complémentaire": "Influencia complementaria",
    "Influence dominante": "Influencia dominante",

    "Cette influence atteint une intensité de":
      "Esta influencia alcanza una intensidad de",

    "Les forces dominantes": "Las fuerzas dominantes",
    "Votre climat planétaire": "Tu clima planetario",
    "Votre trio dominant": "Tu trío dominante",
    "Intensité :": "Intensidad:",
    "Influence dans votre année": "Influencia en tu año",
    "Conseil": "Consejo",
    "Votre combinaison dominante": "Tu combinación dominante",
  },

  de: {
    "Identité • Vitalité": "Identität • Vitalität",
    "Émotions • Intuition": "Emotionen • Intuition",
    "Réflexion • Échanges": "Denken • Austausch",
    "Relations • Harmonie": "Beziehungen • Harmonie",
    "Action • Courage": "Handeln • Mut",
    "Expansion • Occasions": "Expansion • Chancen",
    "Structure • Maturité": "Struktur • Reife",
    "Liberté • Renouveau": "Freiheit • Erneuerung",
    "Inspiration • Sensibilité": "Inspiration • Sensibilität",
    "Transformation • Vérité": "Transformation • Wahrheit",

    "Influence majeure": "Bedeutender Einfluss",
    "Influence principale": "Haupteinfluss",
    "Influence secondaire": "Sekundärer Einfluss",
    "Influence complémentaire": "Ergänzender Einfluss",
    "Influence dominante": "Dominanter Einfluss",

    "Cette influence atteint une intensité de":
      "Dieser Einfluss erreicht eine Intensität von",

    "Les forces dominantes": "Die dominanten Kräfte",
    "Votre climat planétaire": "Ihr planetarisches Klima",
    "Votre trio dominant": "Ihr dominantes Trio",
    "Intensité :": "Intensität:",
    "Influence dans votre année": "Einfluss auf Ihr Jahr",
    "Conseil": "Rat",
    "Votre combinaison dominante": "Ihre dominante Kombination",
  },

  it: {
    "Identité • Vitalité": "Identità • Vitalità",
    "Émotions • Intuition": "Emozioni • Intuizione",
    "Réflexion • Échanges": "Riflessione • Comunicazione",
    "Relations • Harmonie": "Relazioni • Armonia",
    "Action • Courage": "Azione • Coraggio",
    "Expansion • Occasions": "Espansione • Opportunità",
    "Structure • Maturité": "Struttura • Maturità",
    "Liberté • Renouveau": "Libertà • Rinnovamento",
    "Inspiration • Sensibilité": "Ispirazione • Sensibilità",
    "Transformation • Vérité": "Trasformazione • Verità",

    "Influence majeure": "Influenza principale",
    "Influence principale": "Influenza primaria",
    "Influence secondaire": "Influenza secondaria",
    "Influence complémentaire": "Influenza complementare",
    "Influence dominante": "Influenza dominante",

    "Cette influence atteint une intensité de":
      "Questa influenza raggiunge un'intensità di",

    "Les forces dominantes": "Le forze dominanti",
    "Votre climat planétaire": "Il tuo clima planetario",
    "Votre trio dominant": "Il tuo trio dominante",
    "Intensité :": "Intensità:",
    "Influence dans votre année": "Influenza nel tuo anno",
    "Conseil": "Consiglio",
    "Votre combinaison dominante": "La tua combinazione dominante",
  },

  pt: {
    "Identité • Vitalité": "Identidade • Vitalidade",
    "Émotions • Intuition": "Emoções • Intuição",
    "Réflexion • Échanges": "Reflexão • Comunicação",
    "Relations • Harmonie": "Relacionamentos • Harmonia",
    "Action • Courage": "Ação • Coragem",
    "Expansion • Occasions": "Expansão • Oportunidades",
    "Structure • Maturité": "Estrutura • Maturidade",
    "Liberté • Renouveau": "Liberdade • Renovação",
    "Inspiration • Sensibilité": "Inspiração • Sensibilidade",
    "Transformation • Vérité": "Transformação • Verdade",

    "Influence majeure": "Influência principal",
    "Influence principale": "Influência primária",
    "Influence secondaire": "Influência secundária",
    "Influence complémentaire": "Influência complementar",
    "Influence dominante": "Influência dominante",

    "Cette influence atteint une intensité de":
      "Esta influência atinge uma intensidade de",

    "Les forces dominantes": "As forças dominantes",
    "Votre climat planétaire": "Seu clima planetário",
    "Votre trio dominant": "Seu trio dominante",
    "Intensité :": "Intensidade:",
    "Influence dans votre année": "Influência no seu ano",
    "Conseil": "Conselho",
    "Votre combinaison dominante": "Sua combinação dominante",
  },
};

/* =========================================================
   LOCALIZER
========================================================= */

export function localizeYearHoroscopeDominantPlanets(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let output = source;

  for (
    const [french, translated] of
    Object.entries(TRANSLATIONS[locale])
  ) {
    output =
      output.split(french).join(translated);
  }

  return output;
}
