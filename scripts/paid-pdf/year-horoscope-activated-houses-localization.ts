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
    "Identité": "Identity",
    "Ressources": "Resources",
    "Communication": "Communication",
    "Foyer": "Home",
    "Créativité": "Creativity",
    "Quotidien": "Daily Life",
    "Relations": "Relationships",
    "Transformation": "Transformation",
    "Expansion": "Expansion",
    "Carrière": "Career",
    "Projets": "Projects",
    "Intériorité": "Inner World",
    "Évolution": "Growth",

    "Maison": "House",
    "maison": "house",
    "Intensité annuelle :": "Yearly intensity:",
    "Intensité :": "Intensity:",

    "Les secteurs de votre vie":
      "The Areas of Your Life",
    "Votre carte de l’année":
      "Your Map of the Year",
    "Vos secteurs prioritaires":
      "Your Priority Areas",
    "Occasion d’évolution":
      "Opportunity for Growth",
    "Conseil Luna Astralis":
      "Luna Astralis Guidance",
    "Votre ligne directrice":
      "Your Guiding Direction",
  },

  es: {
    "Identité": "Identidad",
    "Ressources": "Recursos",
    "Communication": "Comunicación",
    "Foyer": "Hogar",
    "Créativité": "Creatividad",
    "Quotidien": "Vida cotidiana",
    "Relations": "Relaciones",
    "Transformation": "Transformación",
    "Expansion": "Expansión",
    "Carrière": "Carrera",
    "Projets": "Proyectos",
    "Intériorité": "Mundo interior",
    "Évolution": "Evolución",

    "Maison": "Casa",
    "maison": "casa",
    "Intensité annuelle :": "Intensidad anual:",
    "Intensité :": "Intensidad:",

    "Les secteurs de votre vie":
      "Los ámbitos de tu vida",
    "Votre carte de l’année":
      "Tu mapa del año",
    "Vos secteurs prioritaires":
      "Tus áreas prioritarias",
    "Occasion d’évolution":
      "Oportunidad de evolución",
    "Conseil Luna Astralis":
      "Consejo de Luna Astralis",
    "Votre ligne directrice":
      "Tu línea directriz",
  },

  de: {
    "Identité": "Identität",
    "Ressources": "Ressourcen",
    "Communication": "Kommunikation",
    "Foyer": "Zuhause",
    "Créativité": "Kreativität",
    "Quotidien": "Alltag",
    "Relations": "Beziehungen",
    "Transformation": "Transformation",
    "Expansion": "Entfaltung",
    "Carrière": "Karriere",
    "Projets": "Projekte",
    "Intériorité": "Innere Welt",
    "Évolution": "Entwicklung",

    "Maison": "Haus",
    "maison": "Haus",
    "Intensité annuelle :": "Jährliche Intensität:",
    "Intensité :": "Intensität:",

    "Les secteurs de votre vie":
      "Die Bereiche Ihres Lebens",
    "Votre carte de l’année":
      "Ihre Jahreskarte",
    "Vos secteurs prioritaires":
      "Ihre Schwerpunktbereiche",
    "Occasion d’évolution":
      "Chance zur Entwicklung",
    "Conseil Luna Astralis":
      "Rat von Luna Astralis",
    "Votre ligne directrice":
      "Ihre Leitlinie",
  },

  it: {
    "Identité": "Identità",
    "Ressources": "Risorse",
    "Communication": "Comunicazione",
    "Foyer": "Casa",
    "Créativité": "Creatività",
    "Quotidien": "Vita quotidiana",
    "Relations": "Relazioni",
    "Transformation": "Trasformazione",
    "Expansion": "Espansione",
    "Carrière": "Carriera",
    "Projets": "Progetti",
    "Intériorité": "Mondo interiore",
    "Évolution": "Evoluzione",

    "Maison": "Casa",
    "maison": "casa",
    "Intensité annuelle :": "Intensità annuale:",
    "Intensité :": "Intensità:",

    "Les secteurs de votre vie":
      "I settori della tua vita",
    "Votre carte de l’année":
      "La tua mappa dell’anno",
    "Vos secteurs prioritaires":
      "I tuoi settori prioritari",
    "Occasion d’évolution":
      "Opportunità di evoluzione",
    "Conseil Luna Astralis":
      "Consiglio di Luna Astralis",
    "Votre ligne directrice":
      "La tua linea guida",
  },

  pt: {
    "Identité": "Identidade",
    "Ressources": "Recursos",
    "Communication": "Comunicação",
    "Foyer": "Lar",
    "Créativité": "Criatividade",
    "Quotidien": "Vida cotidiana",
    "Relations": "Relacionamentos",
    "Transformation": "Transformação",
    "Expansion": "Expansão",
    "Carrière": "Carreira",
    "Projets": "Projetos",
    "Intériorité": "Mundo interior",
    "Évolution": "Evolução",

    "Maison": "Casa",
    "maison": "casa",
    "Intensité annuelle :": "Intensidade anual:",
    "Intensité :": "Intensidade:",

    "Les secteurs de votre vie":
      "As áreas da sua vida",
    "Votre carte de l’année":
      "Seu mapa do ano",
    "Vos secteurs prioritaires":
      "Suas áreas prioritárias",
    "Occasion d’évolution":
      "Oportunidade de evolução",
    "Conseil Luna Astralis":
      "Conselho da Luna Astralis",
    "Votre ligne directrice":
      "Sua linha orientadora",
  },
};

/* =========================================================
   LOCALIZER
========================================================= */

export function localizeYearHoroscopeActivatedHouses(
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
