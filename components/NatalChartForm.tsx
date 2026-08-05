"use client";





import fr from "../i18n/migrated/fr/components/natalchartform.json";
import en from "../i18n/migrated/en/components/natalchartform.json";
import es from "../i18n/migrated/es/components/natalchartform.json";
import de from "../i18n/migrated/de/components/natalchartform.json";
import it from "../i18n/migrated/it/components/natalchartform.json";
import pt from "../i18n/migrated/pt/components/natalchartform.json";

import type { Locale } from "@/i18n/config";
import {
  useRef,
  useState,
} from "react";

import html2canvas from "html2canvas";

import NatalChartWheel from "./NatalChartWheel";
import NatalShareCard from "./NatalShareCard";
import NatalFreeSummary from "./NatalFreeSummary";
import NatalPlanetDetails from "./NatalPlanetDetails";
import NatalPremiumOffer from "./NatalPremiumOffer";
import "@/app/carte-du-ciel/page.css";

/*
|--------------------------------------------------------------------------
| Planètes principales
|--------------------------------------------------------------------------
*/

const MAIN_PLANETS = [
  "Sun",
  "Moon",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];

type Dictionary = Record<string, string>;

type NatalChartFormProps = {
  locale: Locale;
};

type NatalFormTexts = {
  requiredBirthDateAndCity: string;
  dateFormat: string;
  invalidBirthDate: string;
  invalidBirthTime: string;
  cityNotFound: string;
  invalidCoordinates: string;
  chartCalculationError: string;
  calculationError: string;
  chartOf: (name: string) => string;
  yourChart: string;
  pngCreationError: string;
  shareCardMissing: string;
  pdfWheelMissing: string;
  imageDownloadError: string;
  calculating: string;
  createChart: string;
  ascendant: string;
  preparingImage: string;
  downloadChart: string;
};

const DICTIONARIES: Record<Locale, Dictionary> = {
  fr,
  en,
  es,
  de,
  it,
  pt,
};

const FORM_TEXTS: Record<Locale, NatalFormTexts> = {
  fr: {
    requiredBirthDateAndCity:
      "La date de naissance et la ville de naissance sont obligatoires.",
    dateFormat:
      "Entre la date au format JJ/MM/AAAA.",
    invalidBirthDate:
      "La date de naissance est invalide.",
    invalidBirthTime:
      "L’heure de naissance est invalide.",
    cityNotFound:
      "Ville introuvable. Entre seulement le nom de la ville.",
    invalidCoordinates:
      "Les coordonnées reçues pour cette ville sont invalides.",
    chartCalculationError:
      "Erreur lors du calcul de la carte du ciel.",
    calculationError:
      "Une erreur est survenue pendant le calcul. Réessaie.",
    chartOf: (name) =>
      `Le thème astral de ${name}`,
    yourChart:
      "Ta carte du ciel",
    pngCreationError:
      "L’image PNG de la carte astrologique n’a pas pu être créée.",
    shareCardMissing:
      "La carte astrologique à télécharger est introuvable.",
    pdfWheelMissing:
      "La roue astrologique destinée au rapport est introuvable.",
    imageDownloadError:
      "Impossible de télécharger l’image. Réessaie.",
    calculating:
      "Calcul en cours...",
    createChart:
      "Créer ma carte du ciel",
    ascendant:
      "Ascendant",
    preparingImage:
      "Préparation de l’image...",
    downloadChart:
      "📷 Télécharger ma carte du ciel",
  },

  en: {
    requiredBirthDateAndCity:
      "Birth date and birth city are required.",
    dateFormat:
      "Enter the date in DD/MM/YYYY format.",
    invalidBirthDate:
      "The birth date is invalid.",
    invalidBirthTime:
      "The birth time is invalid.",
    cityNotFound:
      "City not found. Enter only the city name.",
    invalidCoordinates:
      "The coordinates received for this city are invalid.",
    chartCalculationError:
      "An error occurred while calculating the birth chart.",
    calculationError:
      "An error occurred during the calculation. Try again.",
    chartOf: (name) =>
      `${name}’s birth chart`,
    yourChart:
      "Your birth chart",
    pngCreationError:
      "The PNG image of the astrology chart could not be created.",
    shareCardMissing:
      "The astrology chart to download could not be found.",
    pdfWheelMissing:
      "The astrology wheel for the report could not be found.",
    imageDownloadError:
      "Unable to download the image. Try again.",
    calculating:
      "Calculating...",
    createChart:
      "Create my birth chart",
    ascendant:
      "Ascendant",
    preparingImage:
      "Preparing the image...",
    downloadChart:
      "📷 Download my birth chart",
  },

  es: {
    requiredBirthDateAndCity:
      "La fecha y la ciudad de nacimiento son obligatorias.",
    dateFormat:
      "Introduce la fecha en formato DD/MM/AAAA.",
    invalidBirthDate:
      "La fecha de nacimiento no es válida.",
    invalidBirthTime:
      "La hora de nacimiento no es válida.",
    cityNotFound:
      "Ciudad no encontrada. Introduce solo el nombre de la ciudad.",
    invalidCoordinates:
      "Las coordenadas recibidas para esta ciudad no son válidas.",
    chartCalculationError:
      "Error al calcular la carta natal.",
    calculationError:
      "Ocurrió un error durante el cálculo. Inténtalo de nuevo.",
    chartOf: (name) =>
      `Carta natal de ${name}`,
    yourChart:
      "Tu carta natal",
    pngCreationError:
      "No se pudo crear la imagen PNG de la carta astrológica.",
    shareCardMissing:
      "No se encontró la carta astrológica para descargar.",
    pdfWheelMissing:
      "No se encontró la rueda astrológica destinada al informe.",
    imageDownloadError:
      "No se pudo descargar la imagen. Inténtalo de nuevo.",
    calculating:
      "Calculando...",
    createChart:
      "Crear mi carta natal",
    ascendant:
      "Ascendente",
    preparingImage:
      "Preparando la imagen...",
    downloadChart:
      "📷 Descargar mi carta natal",
  },

  de: {
    requiredBirthDateAndCity:
      "Geburtsdatum und Geburtsort sind erforderlich.",
    dateFormat:
      "Geben Sie das Datum im Format TT/MM/JJJJ ein.",
    invalidBirthDate:
      "Das Geburtsdatum ist ungültig.",
    invalidBirthTime:
      "Die Geburtszeit ist ungültig.",
    cityNotFound:
      "Stadt nicht gefunden. Geben Sie nur den Städtenamen ein.",
    invalidCoordinates:
      "Die empfangenen Koordinaten für diese Stadt sind ungültig.",
    chartCalculationError:
      "Fehler bei der Berechnung des Geburtshoroskops.",
    calculationError:
      "Bei der Berechnung ist ein Fehler aufgetreten. Versuchen Sie es erneut.",
    chartOf: (name) =>
      `Geburtshoroskop von ${name}`,
    yourChart:
      "Ihr Geburtshoroskop",
    pngCreationError:
      "Das PNG-Bild des astrologischen Horoskops konnte nicht erstellt werden.",
    shareCardMissing:
      "Das herunterzuladende astrologische Horoskop wurde nicht gefunden.",
    pdfWheelMissing:
      "Das astrologische Rad für den Bericht wurde nicht gefunden.",
    imageDownloadError:
      "Das Bild konnte nicht heruntergeladen werden. Versuchen Sie es erneut.",
    calculating:
      "Berechnung läuft...",
    createChart:
      "Mein Geburtshoroskop erstellen",
    ascendant:
      "Aszendent",
    preparingImage:
      "Bild wird vorbereitet...",
    downloadChart:
      "📷 Mein Geburtshoroskop herunterladen",
  },

  it: {
    requiredBirthDateAndCity:
      "La data e la città di nascita sono obbligatorie.",
    dateFormat:
      "Inserisci la data nel formato GG/MM/AAAA.",
    invalidBirthDate:
      "La data di nascita non è valida.",
    invalidBirthTime:
      "L’ora di nascita non è valida.",
    cityNotFound:
      "Città non trovata. Inserisci solo il nome della città.",
    invalidCoordinates:
      "Le coordinate ricevute per questa città non sono valide.",
    chartCalculationError:
      "Errore durante il calcolo del tema natale.",
    calculationError:
      "Si è verificato un errore durante il calcolo. Riprova.",
    chartOf: (name) =>
      `Tema natale di ${name}`,
    yourChart:
      "Il tuo tema natale",
    pngCreationError:
      "Non è stato possibile creare l’immagine PNG della carta astrologica.",
    shareCardMissing:
      "Non è stata trovata la carta astrologica da scaricare.",
    pdfWheelMissing:
      "Non è stata trovata la ruota astrologica destinata al rapporto.",
    imageDownloadError:
      "Impossibile scaricare l’immagine. Riprova.",
    calculating:
      "Calcolo in corso...",
    createChart:
      "Crea il mio tema natale",
    ascendant:
      "Ascendente",
    preparingImage:
      "Preparazione dell’immagine...",
    downloadChart:
      "📷 Scarica il mio tema natale",
  },

  pt: {
    requiredBirthDateAndCity:
      "A data e a cidade de nascimento são obrigatórias.",
    dateFormat:
      "Digite a data no formato DD/MM/AAAA.",
    invalidBirthDate:
      "A data de nascimento é inválida.",
    invalidBirthTime:
      "A hora de nascimento é inválida.",
    cityNotFound:
      "Cidade não encontrada. Digite apenas o nome da cidade.",
    invalidCoordinates:
      "As coordenadas recebidas para esta cidade são inválidas.",
    chartCalculationError:
      "Erro ao calcular o mapa astral.",
    calculationError:
      "Ocorreu um erro durante o cálculo. Tente novamente.",
    chartOf: (name) =>
      `Mapa astral de ${name}`,
    yourChart:
      "Seu mapa astral",
    pngCreationError:
      "Não foi possível criar a imagem PNG do mapa astrológico.",
    shareCardMissing:
      "O mapa astrológico para download não foi encontrado.",
    pdfWheelMissing:
      "A roda astrológica destinada ao relatório não foi encontrada.",
    imageDownloadError:
      "Não foi possível baixar a imagem. Tente novamente.",
    calculating:
      "Calculando...",
    createChart:
      "Criar meu mapa astral",
    ascendant:
      "Ascendente",
    preparingImage:
      "Preparando a imagem...",
    downloadChart:
      "📷 Baixar meu mapa astral",
  },
};

const PLANET_NAMES: Record<
  Locale,
  Record<string, string>
> = {
  fr: {
    Sun: "Soleil",
    Moon: "Lune",
    Mercury: "Mercure",
    Venus: "Vénus",
    Mars: "Mars",
    Jupiter: "Jupiter",
    Saturn: "Saturne",
    Uranus: "Uranus",
    Neptune: "Neptune",
    Pluto: "Pluton",
  },
  en: {
    Sun: "Sun",
    Moon: "Moon",
    Mercury: "Mercury",
    Venus: "Venus",
    Mars: "Mars",
    Jupiter: "Jupiter",
    Saturn: "Saturn",
    Uranus: "Uranus",
    Neptune: "Neptune",
    Pluto: "Pluto",
  },
  es: {
    Sun: "Sol",
    Moon: "Luna",
    Mercury: "Mercurio",
    Venus: "Venus",
    Mars: "Marte",
    Jupiter: "Júpiter",
    Saturn: "Saturno",
    Uranus: "Urano",
    Neptune: "Neptuno",
    Pluto: "Plutón",
  },
  de: {
    Sun: "Sonne",
    Moon: "Mond",
    Mercury: "Merkur",
    Venus: "Venus",
    Mars: "Mars",
    Jupiter: "Jupiter",
    Saturn: "Saturn",
    Uranus: "Uranus",
    Neptune: "Neptun",
    Pluto: "Pluto",
  },
  it: {
    Sun: "Sole",
    Moon: "Luna",
    Mercury: "Mercurio",
    Venus: "Venere",
    Mars: "Marte",
    Jupiter: "Giove",
    Saturn: "Saturno",
    Uranus: "Urano",
    Neptune: "Nettuno",
    Pluto: "Plutone",
  },
  pt: {
    Sun: "Sol",
    Moon: "Lua",
    Mercury: "Mercúrio",
    Venus: "Vênus",
    Mars: "Marte",
    Jupiter: "Júpiter",
    Saturn: "Saturno",
    Uranus: "Urano",
    Neptune: "Netuno",
    Pluto: "Plutão",
  },
};

const SIGN_NAMES: Record<
  Locale,
  Record<string, string>
> = {
  fr: {
    Aries: "Bélier",
    Taurus: "Taureau",
    Gemini: "Gémeaux",
    Cancer: "Cancer",
    Leo: "Lion",
    Virgo: "Vierge",
    Libra: "Balance",
    Scorpio: "Scorpion",
    Sagittarius: "Sagittaire",
    Capricorn: "Capricorne",
    Aquarius: "Verseau",
    Pisces: "Poissons",
  },
  en: {
    Aries: "Aries",
    Taurus: "Taurus",
    Gemini: "Gemini",
    Cancer: "Cancer",
    Leo: "Leo",
    Virgo: "Virgo",
    Libra: "Libra",
    Scorpio: "Scorpio",
    Sagittarius: "Sagittarius",
    Capricorn: "Capricorn",
    Aquarius: "Aquarius",
    Pisces: "Pisces",
  },
  es: {
    Aries: "Aries",
    Taurus: "Tauro",
    Gemini: "Géminis",
    Cancer: "Cáncer",
    Leo: "Leo",
    Virgo: "Virgo",
    Libra: "Libra",
    Scorpio: "Escorpio",
    Sagittarius: "Sagitario",
    Capricorn: "Capricornio",
    Aquarius: "Acuario",
    Pisces: "Piscis",
  },
  de: {
    Aries: "Widder",
    Taurus: "Stier",
    Gemini: "Zwillinge",
    Cancer: "Krebs",
    Leo: "Löwe",
    Virgo: "Jungfrau",
    Libra: "Waage",
    Scorpio: "Skorpion",
    Sagittarius: "Schütze",
    Capricorn: "Steinbock",
    Aquarius: "Wassermann",
    Pisces: "Fische",
  },
  it: {
    Aries: "Ariete",
    Taurus: "Toro",
    Gemini: "Gemelli",
    Cancer: "Cancro",
    Leo: "Leone",
    Virgo: "Vergine",
    Libra: "Bilancia",
    Scorpio: "Scorpione",
    Sagittarius: "Sagittario",
    Capricorn: "Capricorno",
    Aquarius: "Acquario",
    Pisces: "Pesci",
  },
  pt: {
    Aries: "Áries",
    Taurus: "Touro",
    Gemini: "Gêmeos",
    Cancer: "Câncer",
    Leo: "Leão",
    Virgo: "Virgem",
    Libra: "Libra",
    Scorpio: "Escorpião",
    Sagittarius: "Sagitário",
    Capricorn: "Capricórnio",
    Aquarius: "Aquário",
    Pisces: "Peixes",
  },
};

const SIGN_GLYPH: Record<string, string> = {
  Aries: "♈",
  Taurus: "♉",
  Gemini: "♊",
  Cancer: "♋",
  Leo: "♌",
  Virgo: "♍",
  Libra: "♎",
  Scorpio: "♏",
  Sagittarius: "♐",
  Capricorn: "♑",
  Aquarius: "♒",
  Pisces: "♓",
};

/*
|--------------------------------------------------------------------------
| Traductions
|--------------------------------------------------------------------------
*/

function translateFormatted(
  formatted: string,
  locale: Locale
): string {
  if (!formatted) {
    return "";
  }

  let translated = formatted;

  Object.entries(
    SIGN_NAMES[locale]
  ).forEach(([english, localized]) => {
    translated = translated
      .split(english)
      .join(localized);
  });

  return translated;
}

function translatePlanetName(
  name: string,
  locale: Locale
): string {
  return (
    PLANET_NAMES[locale][name] ??
    name
  );
}

const PLANET_GLYPH: Record<
  string,
  string
> = {
  Sun: "☉",
  Moon: "☽",
  Mercury: "☿",
  Venus: "♀",
  Mars: "♂",
  Jupiter: "♃",
  Saturn: "♄",
  Uranus: "♅",
  Neptune: "♆",
  Pluto: "♇",
};

function getPlanetGlyph(
  name: string
): string {
  return (
    PLANET_GLYPH[name] ??
    ""
  );
}

function getSignGlyph(
  signName?: string
): string {
  if (!signName) {
    return "";
  }

  return (
    SIGN_GLYPH[signName] ??
    ""
  );
}

function getSignName(
  signName: string | undefined,
  locale: Locale
): string {
  if (!signName) {
    return "";
  }

  return (
    SIGN_NAMES[locale][signName] ??
    signName
  );
}
/*
|--------------------------------------------------------------------------
| Formatage de la date
|--------------------------------------------------------------------------
*/

function formatDateFR(
  date: string
): string {
  if (!date) {
    return "";
  }

  const [
    day,
    month,
    year,
  ] =
    date.split("/");

  if (
    !day ||
    !month ||
    !year
  ) {
    return date;
  }

  return `${day}/${month}/${year}`;
}

/*
|--------------------------------------------------------------------------
| Validation
|--------------------------------------------------------------------------
*/

function isValidDate(
  day: number,
  month: number,
  year: number
): boolean {
  if (
    !Number.isInteger(day) ||
    !Number.isInteger(month) ||
    !Number.isInteger(year)
  ) {
    return false;
  }

  if (
    year < 1800 ||
    year >
      new Date().getFullYear()
  ) {
    return false;
  }

  if (
    month < 1 ||
    month > 12
  ) {
    return false;
  }

  const date =
    new Date(
      Date.UTC(
        year,
        month - 1,
        day
      )
    );

  return (
    date.getUTCFullYear() ===
      year &&
    date.getUTCMonth() ===
      month - 1 &&
    date.getUTCDate() ===
      day
  );
}

function isValidTime(
  hour: number,
  minute: number
): boolean {
  return (
    Number.isInteger(hour) &&
    Number.isInteger(minute) &&
    hour >= 0 &&
    hour <= 23 &&
    minute >= 0 &&
    minute <= 59
  );
}

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function NatalChartForm({
  locale,
}: NatalChartFormProps) {
  const __i18n =
    DICTIONARIES[locale];

  const texts =
    FORM_TEXTS[locale];

  const shareRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const pdfWheelRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const [
    firstName,
    setFirstName,
  ] =
    useState("");

  const [
    birthDate,
    setBirthDate,
  ] =
    useState("");

  const [
    birthTime,
    setBirthTime,
  ] =
    useState("");

  const [
    birthCity,
    setBirthCity,
  ] =
    useState("");

  const [
    latitude,
    setLatitude,
  ] =
    useState<number | null>(
      null
    );

  const [
    longitude,
    setLongitude,
  ] =
    useState<number | null>(
      null
    );

  const [
    loading,
    setLoading,
  ] =
    useState(false);

  const [
    downloading,
    setDownloading,
  ] =
    useState(false);

  const [
    error,
    setError,
  ] =
    useState("");

  const [
    result,
    setResult,
  ] =
    useState<any>(null);

  /*
  |--------------------------------------------------------------------------
  | Création de la carte
  |--------------------------------------------------------------------------
  */

  const handleSubmit =
    async (
      event:
        React.FormEvent<HTMLFormElement>
    ) => {
      event.preventDefault();

      setError("");
      setResult(null);
      setLatitude(null);
      setLongitude(null);

      const cleanCity =
        birthCity.trim();

      if (
        !birthDate ||
        !cleanCity
      ) {
        setError(
          texts.requiredBirthDateAndCity
        );

        return;
      }

      const dateParts =
        birthDate.split("/");

      if (
        dateParts.length !== 3
      ) {
        setError(
          texts.dateFormat
        );

        return;
      }

      const [
        dayStr,
        monthStr,
        yearStr,
      ] =
        dateParts;

      const day =
        Number.parseInt(
          dayStr,
          10
        );

      const month =
        Number.parseInt(
          monthStr,
          10
        );

      const year =
        Number.parseInt(
          yearStr,
          10
        );

      if (
        !isValidDate(
          day,
          month,
          year
        )
      ) {
        setError(
          texts.invalidBirthDate
        );

        return;
      }

      const effectiveBirthTime =
        birthTime ||
        "12:00";

      const [
        hourStr,
        minuteStr,
      ] =
        effectiveBirthTime.split(
          ":"
        );

      const hour =
        Number.parseInt(
          hourStr,
          10
        );

      const minute =
        Number.parseInt(
          minuteStr,
          10
        );

      if (
        !isValidTime(
          hour,
          minute
        )
      ) {
        setError(
          texts.invalidBirthTime
        );

        return;
      }

      setLoading(true);

      try {
        /*
        |--------------------------------------------------------------------------
        | Géocodage
        |--------------------------------------------------------------------------
        */

        const geoResponse =
          await fetch(
            `/api/geocode?city=${encodeURIComponent(
              cleanCity
            )}`,
            {
              method:
                "GET",

              cache:
                "no-store",
            }
          );

        const geoData =
          await geoResponse.json();

        if (
          !geoResponse.ok ||
          !geoData?.ok ||
          !geoData?.result
        ) {
          setError(
            geoData?.error ||
              texts.cityNotFound
          );

          return;
        }

        const lat =
          Number(
            geoData.result
              .latitude
          );

        const lon =
          Number(
            geoData.result
              .longitude
          );

        if (
          !Number.isFinite(
            lat
          ) ||
          !Number.isFinite(
            lon
          )
        ) {
          setError(
            texts.invalidCoordinates
          );

          return;
        }

        setLatitude(lat);
        setLongitude(lon);

        /*
        |--------------------------------------------------------------------------
        | Calcul astrologique
        |--------------------------------------------------------------------------
        */

        const chartResponse =
          await fetch(
            "/api/natal-chart",
            {
              method:
                "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              cache:
                "no-store",

              body:
                JSON.stringify({
                  year,
                  month,
                  day,
                  hour,
                  minute,
                  latitude:
                    lat,
                  longitude:
                    lon,
                }),
            }
          );

        const chartData =
          await chartResponse.json();

        if (
          !chartResponse.ok ||
          !chartData?.ok ||
          !chartData?.chart
        ) {
          setError(
            chartData?.error ||
              texts.chartCalculationError
          );

          return;
        }

        setResult(
          chartData.chart
        );
      } catch (
        submitError
      ) {
        console.error(
          "Erreur pendant la création de la carte du ciel :",
          submitError
        );

        setError(
          texts.calculationError
        );
      } finally {
        setLoading(false);
      }
    };

  /*
  |--------------------------------------------------------------------------
  | Données calculées
  |--------------------------------------------------------------------------
  */

  const planets =
    (
      result?.planets ||
      []
    ).filter(
      (
        planet: any
      ) =>
        MAIN_PLANETS.includes(
          planet?.name
        )
    );

  const angles =
    result?.angles ||
    {};

  const chartTitle =
    firstName.trim()
      ? texts.chartOf(
          firstName.trim()
        )
      : texts.yourChart;

  /*
  |--------------------------------------------------------------------------
  | Création des images
  |--------------------------------------------------------------------------
  */

  const captureElementAsPng =
    async (
      element:
        HTMLDivElement | null,

      errorMessage:
        string,

      backgroundColor:
        string | null,

      scale:
        number
    ): Promise<string> => {
      if (!element) {
        throw new Error(
          errorMessage
        );
      }

      const canvas =
        await html2canvas(
          element,
          {
            backgroundColor,
            scale,
            useCORS:
              true,
            logging:
              false,
          }
        );

      const image =
        canvas.toDataURL(
          "image/png"
        );

      if (
        !image ||
        !image.startsWith(
          "data:image/png;base64,"
        )
      ) {
        throw new Error(
          texts.pngCreationError
        );
      }

      return image;
    };

  const createShareImage =
    async (): Promise<string> => {
      return captureElementAsPng(
        shareRef.current,
        texts.shareCardMissing,
        null,
        2
      );
    };

  const createPdfWheelImage =
    async (): Promise<string> => {
      return captureElementAsPng(
        pdfWheelRef.current,
        texts.pdfWheelMissing,
        "#0b1124",
        3
      );
    };

  /*
  |--------------------------------------------------------------------------
  | Téléchargement de la carte gratuite
  |--------------------------------------------------------------------------
  */

  const handleDownload =
    async () => {
      setError("");
      setDownloading(true);

      try {
        const wheelImage =
          await createShareImage();

        const safeName =
          firstName.trim()
            ? firstName
                .trim()
                .toLowerCase()
                .normalize(
                  "NFD"
                )
                .replace(
                  /[\u0300-\u036f]/g,
                  ""
                )
                .replace(
                  /[^a-z0-9]+/g,
                  "-"
                )
                .replace(
                  /^-+|-+$/g,
                  ""
                )
            : "luna-astralis";

        const link =
          document.createElement(
            "a"
          );

        link.download =
          `birth-chart-${safeName}.png`;

        link.href =
          wheelImage;

        document.body.appendChild(
          link
        );

        link.click();
        link.remove();
      } catch (
        downloadError
      ) {
        console.error(
          "Erreur pendant le téléchargement de la carte :",
          downloadError
        );

        setError(
          downloadError instanceof
            Error
            ? downloadError.message
            : texts.imageDownloadError
        );
      } finally {
        setDownloading(false);
      }
    };

  /*
  |--------------------------------------------------------------------------
  | Affichage
  |--------------------------------------------------------------------------
  */

  return (
    <div className="natal-form-wrap">
      <form
        onSubmit={
          handleSubmit
        }
        className="natal-form"
        noValidate
      >
        <label>
          {__i18n["prenom_optionnel"]}<input
            type="text"
            value={
              firstName
            }
            onChange={(
              event
            ) =>
              setFirstName(
                event.target
                  .value
              )
            }
            placeholder={__i18n["ton_prenom"]}
            autoComplete="given-name"
          />
        </label>

        <label>
          {__i18n["date_de_naissance"]}<input
            type="text"
            inputMode="numeric"
            value={
              birthDate
            }
            onChange={(
              event
            ) => {
              let value =
                event.target.value
                  .replace(
                    /\D/g,
                    ""
                  )
                  .slice(
                    0,
                    8
                  );

              if (
                value.length >
                4
              ) {
                value =
                  `${value.slice(
                    0,
                    2
                  )}/${value.slice(
                    2,
                    4
                  )}/${value.slice(
                    4
                  )}`;
              } else if (
                value.length >
                2
              ) {
                value =
                  `${value.slice(
                    0,
                    2
                  )}/${value.slice(
                    2
                  )}`;
              }

              setBirthDate(
                value
              );
            }}
            placeholder={__i18n["jj_mm_aaaa"]}
            maxLength={
              10
            }
            autoComplete="bday"
            required
          />
        </label>

        <label>
          {__i18n["heure_de_naissance_optionnelle_mais_recommandee"]}<input
            type="time"
            value={
              birthTime
            }
            onChange={(
              event
            ) =>
              setBirthTime(
                event.target
                  .value
              )
            }
            autoComplete="off"
          />
        </label>

        <label>
          {__i18n["ville_de_naissance"]}<input
            type="text"
            value={
              birthCity
            }
            onChange={(
              event
            ) =>
              setBirthCity(
                event.target
                  .value
              )
            }
            placeholder={__i18n["ville_de_naissance_2"]}
            autoComplete="off"
            required
          />
        </label>

        <button
          type="submit"
          className="btn btn-small btn-primary"
          disabled={
            loading
          }
        >
          {loading
            ? texts.calculating
            : texts.createChart}
        </button>

        {error && (
          <p
            className="natal-error"
            role="alert"
          >
            {error}
          </p>
        )}
      </form>

      {result && (
        <>
          <div className="natal-result">
            <h3>
              {chartTitle}
            </h3>

            <NatalChartWheel
              planets={
                planets
              }
              houses={
                result?.houses
              }
              ascendantLongitude={
                angles
                  ?.ascendant
                  ?.longitude
              }
              midheavenLongitude={
                angles
                  ?.midheaven
                  ?.longitude
              }
              ascendantFormatted={translateFormatted(
                angles
                  ?.ascendant
                  ?.formatted ||
                  "",
                locale
              )}
              midheavenFormatted={translateFormatted(
                angles
                  ?.midheaven
                  ?.formatted ||
                  "",
                locale
              )}
              size={460}
            />

            <div className="natal-angles">
              {angles?.ascendant && (
                <div className="natal-angle-item">
                  <span className="natal-label">
                    {texts.ascendant}
                  </span>

                  <span className="natal-value">
                    {translateFormatted(
                      angles
                        .ascendant
                        .formatted ||
                        "",
                      locale
                    )}
                  </span>
                </div>
              )}

              {angles?.midheaven && (
                <div className="natal-angle-item">
                  <span className="natal-label">
                    {__i18n["milieu_du_ciel"]}</span>

                  <span className="natal-value">
                    {translateFormatted(
                      angles
                        .midheaven
                        .formatted ||
                        "",
                      locale
                    )}
                  </span>
                </div>
              )}
            </div>

            <div className="natal-result-actions">
              <button
                type="button"
                className="natal-download-btn"
                onClick={
                  handleDownload
                }
                disabled={
                  downloading
                }
              >
                {downloading
                  ? texts.preparingImage
                  : texts.downloadChart}
              </button>

              <a
                href="#rapports-astrologiques"
                className="natal-go-to-reports"
              >
                <span
                  aria-hidden="true"
                >
                  ✨
                </span>

                <span>
                  {__i18n["voir_les_rapports_essentielle_premium_et_signature"]}</span>

                <span
                  aria-hidden="true"
                >
                  ↓
                </span>
              </a>
            </div>

            <div className="natal-share-capture-zone">
              <div
                ref={
                  shareRef
                }
              >
                <NatalShareCard
                  locale={locale}
                  title={
                    chartTitle
                  }
                  birthDate={formatDateFR(
                    birthDate
                  )}
                  birthTime={
                    birthTime ||
                    "12:00"
                  }
                  birthCity={birthCity.trim()}
                  planets={
                    planets
                  }
                  houses={
                    result?.houses
                  }
                  angles={
                    angles
                  }
                />
              </div>
            </div>

            <div
              aria-hidden="true"
              style={{
                position:
                  "fixed",

                left:
                  "-10000px",

                top:
                  0,

                width:
                  900,

                height:
                  900,

                pointerEvents:
                  "none",

                opacity:
                  1,
              }}
            >
              <div
                ref={
                  pdfWheelRef
                }
                style={{
                  width:
                    820,

                  height:
                    820,

                  display:
                    "flex",

                  alignItems:
                    "center",

                  justifyContent:
                    "center",

                  background:
                    "#0b1124",

                  color:
                    "#fff8e7",
                }}
              >
                <NatalChartWheel
                  planets={
                    planets
                  }
                  houses={
                    result?.houses
                  }
                  ascendantLongitude={
                    angles
                      ?.ascendant
                      ?.longitude
                  }
                  midheavenLongitude={
                    angles
                      ?.midheaven
                      ?.longitude
                  }
                  size={
                    760
                  }
                  showLegend={
                    false
                  }
                />
              </div>
            </div>

            <NatalFreeSummary
               locale={locale}
              planets={
                planets
              }
              angles={
                angles
              }
            />
          </div>

          <div className="natal-premium-wide">
            <NatalPremiumOffer
              locale={locale}
              firstName={firstName.trim()}
              birthDate={
                birthDate
              }
              birthTime={
                birthTime ||
                "12:00"
              }
              birthCity={birthCity.trim()}
              latitude={
                latitude
              }
              longitude={
                longitude
              }
              getWheelImage={
                createPdfWheelImage
              }
            />
          </div>

          <div className="natal-result">
            <NatalPlanetDetails
              planets={
                planets
              }
              translateFormatted={(
                value: string
              ) =>
                translateFormatted(
                  value,
                  locale
                )
              }
              translatePlanetName={(
                name: string
              ) =>
                translatePlanetName(
                  name,
                  locale
                )
              }
              getPlanetGlyph={
                getPlanetGlyph
              }
              getSignGlyph={
                getSignGlyph
              }
              getSignName={(
                signName?: string
              ) =>
                getSignName(
                  signName,
                  locale
                )
              }
            />
          </div>
        </>
      )}
    </div>
  );
}
