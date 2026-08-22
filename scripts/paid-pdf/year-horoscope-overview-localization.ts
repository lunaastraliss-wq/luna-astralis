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
    "Horoscope annuel": "Yearly Horoscope",
    "Les grandes tendances de l’année":
      "The Major Trends of the Year",
    "L’année en un regard":
      "The Year at a Glance",
    "sur 100": "out of 100",
    "Intensité énergétique de l’année":
      "Energy Intensity of the Year",
    "Votre énergie dominante":
      "Your Dominant Energy",
    "Les axes majeurs de votre année":
      "The Major Themes of Your Year",
    "Votre conseil annuel":
      "Your Yearly Guidance",
    "Votre direction":
      "Your Direction",
  },

  es: {
    "Horoscope annuel": "Horóscopo anual",
    "Les grandes tendances de l’année":
      "Las grandes tendencias del año",
    "L’année en un regard":
      "El año de un vistazo",
    "sur 100": "de 100",
    "Intensité énergétique de l’année":
      "Intensidad energética del año",
    "Votre énergie dominante":
      "Tu energía dominante",
    "Les axes majeurs de votre année":
      "Los ejes principales de tu año",
    "Votre conseil annuel":
      "Tu consejo anual",
    "Votre direction":
      "Tu dirección",
  },

  de: {
    "Horoscope annuel": "Jahreshoroskop",
    "Les grandes tendances de l’année":
      "Die großen Tendenzen des Jahres",
    "L’année en un regard":
      "Das Jahr auf einen Blick",
    "sur 100": "von 100",
    "Intensité énergétique de l’année":
      "Energetische Intensität des Jahres",
    "Votre énergie dominante":
      "Ihre dominante Energie",
    "Les axes majeurs de votre année":
      "Die Hauptthemen Ihres Jahres",
    "Votre conseil annuel":
      "Ihr Rat für das Jahr",
    "Votre direction":
      "Ihre Richtung",
  },

  it: {
    "Horoscope annuel": "Oroscopo annuale",
    "Les grandes tendances de l’année":
      "Le grandi tendenze dell’anno",
    "L’année en un regard":
      "L’anno in uno sguardo",
    "sur 100": "su 100",
    "Intensité énergétique de l’année":
      "Intensità energetica dell’anno",
    "Votre énergie dominante":
      "La tua energia dominante",
    "Les axes majeurs de votre année":
      "I temi principali del tuo anno",
    "Votre conseil annuel":
      "Il tuo consiglio annuale",
    "Votre direction":
      "La tua direzione",
  },

  pt: {
    "Horoscope annuel": "Horóscopo anual",
    "Les grandes tendances de l’année":
      "As grandes tendências do ano",
    "L’année en un regard":
      "O ano em um olhar",
    "sur 100": "de 100",
    "Intensité énergétique de l’année":
      "Intensidade energética do ano",
    "Votre énergie dominante":
      "Sua energia dominante",
    "Les axes majeurs de votre année":
      "Os principais temas do seu ano",
    "Votre conseil annuel":
      "Seu conselho anual",
    "Votre direction":
      "Sua direção",
  },
};

/* =========================================================
   LOCALIZER
========================================================= */

export function localizeYearHoroscopeOverview(
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
    output = output.split(french).join(translated);
  }

  return output;
}
