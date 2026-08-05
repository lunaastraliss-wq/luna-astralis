"use client";

import {
  useRef,
  useState,
} from "react";

import html2canvas from "html2canvas";

import {
  createClient,
} from "@supabase/supabase-js";

import NatalChartWheel from "@/components/NatalChartWheel";
import type { Locale } from "@/i18n/config";

import "./report-checkout-form.css";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type ReportType =
  | "essential"
  | "premium"
  | "signature";

type Props = {
  reportType: ReportType;
  locale: Locale;
};

type SignedUploadResponse = {
  ok?: boolean;
  wheelImagePath?: string;
  signedUrl?: string;
  token?: string;
  error?: string;
  detail?: string;
};

type CheckoutResponse = {
  ok?: boolean;
  url?: string;
  error?: string;
  detail?: string;
};

type GeocodeResponse = {
  ok?: boolean;

  result?: {
    latitude?: number | string;
    longitude?: number | string;
    country?: string;
    timezone?: string;
  };

  error?: string;
  detail?: string;
};

type NatalChartResponse = {
  ok?: boolean;
  chart?: any;
  error?: string;
  detail?: string;
};

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "";

const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "";

const supabase =
  SUPABASE_URL &&
  SUPABASE_ANON_KEY
    ? createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY,
        {
          auth: {
            persistSession:
              false,

            autoRefreshToken:
              false,
          },
        }
      )
    : null;

/*
|--------------------------------------------------------------------------
| Information des rapports
|--------------------------------------------------------------------------
*/

type ReportInfo = {
  name: string;
  price: string;
  button: string;
};

type CheckoutTexts = {
  secureOrder: string;
  orderReport: string;
  intro: string;
  firstName: string;
  firstNamePlaceholder: string;
  birthDate: string;
  birthTime: string;
  birthTimeHelp: string;
  birthCity: string;
  birthCityPlaceholder: string;
  importantLabel: string;
  downloadNotice: string;
  preparingChart: string;
  securePayment: string;
  requiredDateAndCity: string;
  dateFormat: string;
  invalidDate: string;
  invalidTime: string;
  cityNotFound: string;
  invalidCoordinates: string;
  chartCalculationError: string;
  invalidImageFormat: string;
  invalidImageType: string;
  wheelNotReady: string;
  wheelImageFailed: string;
  missingSupabase: string;
  wheelUploadPreparationFailed: string;
  wheelUploadFailed: string;
  paymentError: (status: number) => string;
  paymentPreparationFailed: string;
};

const REPORT_INFO: Record<Locale, Record<ReportType, ReportInfo>> = {
  fr: {
    essential: { name: "Essentielle", price: "24,99 $ US", button: "Commander le rapport Essentielle" },
    premium: { name: "Premium", price: "49,99 $ US", button: "Commander le rapport Premium" },
    signature: { name: "Signature", price: "79,99 $ US", button: "Commander le rapport Signature" },
  },
  en: {
    essential: { name: "Essential", price: "US$24.99", button: "Order the Essential Report" },
    premium: { name: "Premium", price: "US$49.99", button: "Order the Premium Report" },
    signature: { name: "Signature", price: "US$79.99", button: "Order the Signature Report" },
  },
  es: {
    essential: { name: "Esencial", price: "24,99 US$", button: "Pedir el Informe Esencial" },
    premium: { name: "Premium", price: "49,99 US$", button: "Pedir el Informe Premium" },
    signature: { name: "Signature", price: "79,99 US$", button: "Pedir el Informe Signature" },
  },
  de: {
    essential: { name: "Essential", price: "24,99 US$", button: "Essential-Bericht bestellen" },
    premium: { name: "Premium", price: "49,99 US$", button: "Premium-Bericht bestellen" },
    signature: { name: "Signature", price: "79,99 US$", button: "Signature-Bericht bestellen" },
  },
  it: {
    essential: { name: "Essenziale", price: "24,99 USD", button: "Ordina il rapporto Essenziale" },
    premium: { name: "Premium", price: "49,99 USD", button: "Ordina il rapporto Premium" },
    signature: { name: "Signature", price: "79,99 USD", button: "Ordina il rapporto Signature" },
  },
  pt: {
    essential: { name: "Essencial", price: "US$ 24,99", button: "Pedir o Relatório Essencial" },
    premium: { name: "Premium", price: "US$ 49,99", button: "Pedir o Relatório Premium" },
    signature: { name: "Signature", price: "US$ 79,99", button: "Pedir o Relatório Signature" },
  },
};

const CHECKOUT_TEXTS: Record<Locale, CheckoutTexts> = {
  fr: {
    secureOrder: "Commande sécurisée",
    orderReport: "Commander le rapport",
    intro: "Entrez vos informations de naissance. Votre thème astral sera calculé avant de vous rediriger vers le paiement sécurisé Stripe.",
    firstName: "Prénom",
    firstNamePlaceholder: "Votre prénom",
    birthDate: "Date de naissance",
    birthTime: "Heure de naissance",
    birthTimeHelp: "Sans heure précise, 12:00 sera utilisé.",
    birthCity: "Ville de naissance",
    birthCityPlaceholder: "Exemple : Québec",
    importantLabel: "Important :",
    downloadNotice: "Téléchargez votre rapport dès qu’il est généré et conservez-le dans un endroit sécuritaire. Luna Astralis ne conserve aucune copie de votre PDF.",
    preparingChart: "Préparation de votre thème astral...",
    securePayment: "Paiement unique • Aucun abonnement • Paiement sécurisé par Stripe",
    requiredDateAndCity: "La date et la ville de naissance sont obligatoires.",
    dateFormat: "Entre la date au format JJ/MM/AAAA.",
    invalidDate: "La date de naissance est invalide.",
    invalidTime: "L’heure de naissance est invalide.",
    cityNotFound: "Ville introuvable. Entre seulement le nom de la ville.",
    invalidCoordinates: "Les coordonnées reçues pour cette ville sont invalides.",
    chartCalculationError: "Erreur lors du calcul de la carte du ciel.",
    invalidImageFormat: "Le format de l’image astrologique est invalide.",
    invalidImageType: "Le type de l’image astrologique est invalide.",
    wheelNotReady: "La roue astrologique n’est pas encore prête.",
    wheelImageFailed: "La roue astrologique n’a pas pu être transformée en image.",
    missingSupabase: "La configuration publique de Supabase est absente.",
    wheelUploadPreparationFailed: "Impossible de préparer l’envoi de la roue astrologique.",
    wheelUploadFailed: "Impossible d’enregistrer la roue astrologique.",
    paymentError: (status) => `Erreur de paiement (${status}).`,
    paymentPreparationFailed: "Impossible de préparer le paiement. Réessaie.",
  },
  en: {
    secureOrder: "Secure order",
    orderReport: "Order the report",
    intro: "Enter your birth information. Your birth chart will be calculated before you are redirected to secure Stripe payment.",
    firstName: "First name",
    firstNamePlaceholder: "Your first name",
    birthDate: "Birth date",
    birthTime: "Birth time",
    birthTimeHelp: "If the exact time is unknown, 12:00 will be used.",
    birthCity: "Birth city",
    birthCityPlaceholder: "Example: Toronto",
    importantLabel: "Important:",
    downloadNotice: "Download your report as soon as it is generated and keep it in a safe place. Luna Astralis does not retain a copy of your PDF.",
    preparingChart: "Preparing your birth chart...",
    securePayment: "One-time payment • No subscription • Secure Stripe payment",
    requiredDateAndCity: "Birth date and birth city are required.",
    dateFormat: "Enter the date in DD/MM/YYYY format.",
    invalidDate: "The birth date is invalid.",
    invalidTime: "The birth time is invalid.",
    cityNotFound: "City not found. Enter only the city name.",
    invalidCoordinates: "The coordinates received for this city are invalid.",
    chartCalculationError: "An error occurred while calculating the birth chart.",
    invalidImageFormat: "The astrology image format is invalid.",
    invalidImageType: "The astrology image type is invalid.",
    wheelNotReady: "The astrology wheel is not ready yet.",
    wheelImageFailed: "The astrology wheel could not be converted into an image.",
    missingSupabase: "The public Supabase configuration is missing.",
    wheelUploadPreparationFailed: "Unable to prepare the astrology wheel upload.",
    wheelUploadFailed: "Unable to save the astrology wheel.",
    paymentError: (status) => `Payment error (${status}).`,
    paymentPreparationFailed: "Unable to prepare the payment. Try again.",
  },
  es: {
    secureOrder: "Pedido seguro", orderReport: "Pedir el informe",
    intro: "Introduce tus datos de nacimiento. Tu carta natal se calculará antes de redirigirte al pago seguro de Stripe.",
    firstName: "Nombre", firstNamePlaceholder: "Tu nombre", birthDate: "Fecha de nacimiento",
    birthTime: "Hora de nacimiento", birthTimeHelp: "Si no conoces la hora exacta, se utilizarán las 12:00.",
    birthCity: "Ciudad de nacimiento", birthCityPlaceholder: "Ejemplo: Madrid",
    importantLabel: "Importante:", downloadNotice: "Descarga tu informe en cuanto se genere y guárdalo en un lugar seguro. Luna Astralis no conserva ninguna copia de tu PDF.",
    preparingChart: "Preparando tu carta natal...", securePayment: "Pago único • Sin suscripción • Pago seguro con Stripe",
    requiredDateAndCity: "La fecha y la ciudad de nacimiento son obligatorias.", dateFormat: "Introduce la fecha en formato DD/MM/AAAA.",
    invalidDate: "La fecha de nacimiento no es válida.", invalidTime: "La hora de nacimiento no es válida.",
    cityNotFound: "Ciudad no encontrada. Introduce solo el nombre de la ciudad.", invalidCoordinates: "Las coordenadas recibidas para esta ciudad no son válidas.",
    chartCalculationError: "Error al calcular la carta natal.", invalidImageFormat: "El formato de la imagen astrológica no es válido.",
    invalidImageType: "El tipo de imagen astrológica no es válido.", wheelNotReady: "La rueda astrológica aún no está lista.",
    wheelImageFailed: "No se pudo convertir la rueda astrológica en una imagen.", missingSupabase: "Falta la configuración pública de Supabase.",
    wheelUploadPreparationFailed: "No se pudo preparar el envío de la rueda astrológica.", wheelUploadFailed: "No se pudo guardar la rueda astrológica.",
    paymentError: (status) => `Error de pago (${status}).`, paymentPreparationFailed: "No se pudo preparar el pago. Inténtalo de nuevo.",
  },
  de: {
    secureOrder: "Sichere Bestellung", orderReport: "Bericht bestellen",
    intro: "Geben Sie Ihre Geburtsdaten ein. Ihr Geburtshoroskop wird berechnet, bevor Sie zur sicheren Stripe-Zahlung weitergeleitet werden.",
    firstName: "Vorname", firstNamePlaceholder: "Ihr Vorname", birthDate: "Geburtsdatum",
    birthTime: "Geburtszeit", birthTimeHelp: "Wenn die genaue Zeit unbekannt ist, wird 12:00 verwendet.",
    birthCity: "Geburtsort", birthCityPlaceholder: "Beispiel: Berlin",
    importantLabel: "Wichtig:", downloadNotice: "Laden Sie Ihren Bericht direkt nach der Erstellung herunter und bewahren Sie ihn sicher auf. Luna Astralis speichert keine Kopie Ihrer PDF-Datei.",
    preparingChart: "Ihr Geburtshoroskop wird vorbereitet...", securePayment: "Einmalige Zahlung • Kein Abonnement • Sichere Stripe-Zahlung",
    requiredDateAndCity: "Geburtsdatum und Geburtsort sind erforderlich.", dateFormat: "Geben Sie das Datum im Format TT/MM/JJJJ ein.",
    invalidDate: "Das Geburtsdatum ist ungültig.", invalidTime: "Die Geburtszeit ist ungültig.",
    cityNotFound: "Stadt nicht gefunden. Geben Sie nur den Städtenamen ein.", invalidCoordinates: "Die Koordinaten für diese Stadt sind ungültig.",
    chartCalculationError: "Fehler bei der Berechnung des Geburtshoroskops.", invalidImageFormat: "Das Format des astrologischen Bildes ist ungültig.",
    invalidImageType: "Der Typ des astrologischen Bildes ist ungültig.", wheelNotReady: "Das astrologische Rad ist noch nicht bereit.",
    wheelImageFailed: "Das astrologische Rad konnte nicht in ein Bild umgewandelt werden.", missingSupabase: "Die öffentliche Supabase-Konfiguration fehlt.",
    wheelUploadPreparationFailed: "Der Upload des astrologischen Rads konnte nicht vorbereitet werden.", wheelUploadFailed: "Das astrologische Rad konnte nicht gespeichert werden.",
    paymentError: (status) => `Zahlungsfehler (${status}).`, paymentPreparationFailed: "Die Zahlung konnte nicht vorbereitet werden. Versuchen Sie es erneut.",
  },
  it: {
    secureOrder: "Ordine sicuro", orderReport: "Ordina il rapporto",
    intro: "Inserisci i tuoi dati di nascita. Il tuo tema natale verrà calcolato prima del reindirizzamento al pagamento sicuro Stripe.",
    firstName: "Nome", firstNamePlaceholder: "Il tuo nome", birthDate: "Data di nascita",
    birthTime: "Ora di nascita", birthTimeHelp: "Se l’ora esatta non è nota, verranno utilizzate le 12:00.",
    birthCity: "Città di nascita", birthCityPlaceholder: "Esempio: Roma",
    importantLabel: "Importante:", downloadNotice: "Scarica il rapporto non appena viene generato e conservalo in un luogo sicuro. Luna Astralis non conserva alcuna copia del PDF.",
    preparingChart: "Preparazione del tuo tema natale...", securePayment: "Pagamento unico • Nessun abbonamento • Pagamento sicuro con Stripe",
    requiredDateAndCity: "La data e la città di nascita sono obbligatorie.", dateFormat: "Inserisci la data nel formato GG/MM/AAAA.",
    invalidDate: "La data di nascita non è valida.", invalidTime: "L’ora di nascita non è valida.",
    cityNotFound: "Città non trovata. Inserisci solo il nome della città.", invalidCoordinates: "Le coordinate ricevute per questa città non sono valide.",
    chartCalculationError: "Errore durante il calcolo del tema natale.", invalidImageFormat: "Il formato dell’immagine astrologica non è valido.",
    invalidImageType: "Il tipo dell’immagine astrologica non è valido.", wheelNotReady: "La ruota astrologica non è ancora pronta.",
    wheelImageFailed: "Non è stato possibile convertire la ruota astrologica in un’immagine.", missingSupabase: "Manca la configurazione pubblica di Supabase.",
    wheelUploadPreparationFailed: "Impossibile preparare l’invio della ruota astrologica.", wheelUploadFailed: "Impossibile salvare la ruota astrologica.",
    paymentError: (status) => `Errore di pagamento (${status}).`, paymentPreparationFailed: "Impossibile preparare il pagamento. Riprova.",
  },
  pt: {
    secureOrder: "Pedido seguro", orderReport: "Pedir o relatório",
    intro: "Digite seus dados de nascimento. Seu mapa astral será calculado antes de você ser redirecionado para o pagamento seguro da Stripe.",
    firstName: "Nome", firstNamePlaceholder: "Seu nome", birthDate: "Data de nascimento",
    birthTime: "Hora de nascimento", birthTimeHelp: "Se a hora exata não for conhecida, será usado 12:00.",
    birthCity: "Cidade de nascimento", birthCityPlaceholder: "Exemplo: São Paulo",
    importantLabel: "Importante:", downloadNotice: "Baixe seu relatório assim que ele for gerado e guarde-o em um local seguro. A Luna Astralis não mantém nenhuma cópia do seu PDF.",
    preparingChart: "Preparando seu mapa astral...", securePayment: "Pagamento único • Sem assinatura • Pagamento seguro pela Stripe",
    requiredDateAndCity: "A data e a cidade de nascimento são obrigatórias.", dateFormat: "Digite a data no formato DD/MM/AAAA.",
    invalidDate: "A data de nascimento é inválida.", invalidTime: "A hora de nascimento é inválida.",
    cityNotFound: "Cidade não encontrada. Digite apenas o nome da cidade.", invalidCoordinates: "As coordenadas recebidas para esta cidade são inválidas.",
    chartCalculationError: "Erro ao calcular o mapa astral.", invalidImageFormat: "O formato da imagem astrológica é inválido.",
    invalidImageType: "O tipo da imagem astrológica é inválido.", wheelNotReady: "A roda astrológica ainda não está pronta.",
    wheelImageFailed: "Não foi possível converter a roda astrológica em uma imagem.", missingSupabase: "A configuração pública do Supabase está ausente.",
    wheelUploadPreparationFailed: "Não foi possível preparar o envio da roda astrológica.", wheelUploadFailed: "Não foi possível salvar a roda astrológica.",
    paymentError: (status) => `Erro de pagamento (${status}).`, paymentPreparationFailed: "Não foi possível preparar o pagamento. Tente novamente.",
  },
};

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

/*
|--------------------------------------------------------------------------
| Réponses API
|--------------------------------------------------------------------------
*/

async function readJsonResponse<T>(
  response: Response
): Promise<T | null> {
  const responseText =
    await response.text();

  if (!responseText) {
    return null;
  }

  try {
    return JSON.parse(
      responseText
    ) as T;
  } catch {
    return {
      error:
        responseText,
    } as T;
  }
}

/*
|--------------------------------------------------------------------------
| Validation de la date
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

/*
|--------------------------------------------------------------------------
| Validation de l’heure
|--------------------------------------------------------------------------
*/

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
| Conversion de l’image en fichier
|--------------------------------------------------------------------------
*/

function dataUrlToBlob(
  dataUrl: string,
  texts: CheckoutTexts
): Blob {
  const parts =
    dataUrl.split(",");

  if (
    parts.length !== 2
  ) {
    throw new Error(
      texts.invalidImageFormat
    );
  }

  const header =
    parts[0];

  const base64Data =
    parts[1];

  const mimeMatch =
    header.match(
      /^data:(image\/[a-zA-Z0-9.+-]+);base64$/
    );

  if (!mimeMatch) {
    throw new Error(
      texts.invalidImageType
    );
  }

  const mimeType =
    mimeMatch[1];

  const binaryString =
    atob(
      base64Data
    );

  const bytes =
    new Uint8Array(
      binaryString.length
    );

  for (
    let index = 0;
    index <
    binaryString.length;
    index += 1
  ) {
    bytes[index] =
      binaryString.charCodeAt(
        index
      );
  }

  return new Blob(
    [bytes],
    {
      type:
        mimeType,
    }
  );
}

/*
|--------------------------------------------------------------------------
| Attente du rendu React
|--------------------------------------------------------------------------
*/

function waitForNextPaint(): Promise<void> {
  return new Promise(
    (resolve) => {
      requestAnimationFrame(
        () => {
          requestAnimationFrame(
            () => {
              resolve();
            }
          );
        }
      );
    }
  );
}

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function ReportCheckoutForm({
  reportType,
  locale,
}: Props) {
  const report =
    REPORT_INFO[
      locale
    ][
      reportType
    ];

  const texts =
    CHECKOUT_TEXTS[
      locale
    ];

  const wheelRef =
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
    birthCountry,
    setBirthCountry,
  ] =
    useState("");

  const [
    timezone,
    setTimezone,
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
    chart,
    setChart,
  ] =
    useState<any>(
      null
    );

  const [
    loading,
    setLoading,
  ] =
    useState(false);

  const [
    error,
    setError,
  ] =
    useState("");

  /*
  |--------------------------------------------------------------------------
  | Création de la roue PNG
  |--------------------------------------------------------------------------
  */

  async function createWheelImage(): Promise<string> {
    if (
      !wheelRef.current
    ) {
      throw new Error(
        texts.wheelNotReady
      );
    }

    const canvas =
      await html2canvas(
        wheelRef.current,
        {
          backgroundColor:
            "#0b1124",

          scale:
            3,

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
        texts.wheelImageFailed
      );
    }

    return image;
  }

  /*
  |--------------------------------------------------------------------------
  | Envoi de la roue vers Supabase
  |--------------------------------------------------------------------------
  */

  async function uploadWheelImage(): Promise<string> {
    if (!supabase) {
      throw new Error(
        texts.missingSupabase
      );
    }

    const wheelImage =
      await createWheelImage();

    const wheelBlob =
      dataUrlToBlob(
        wheelImage,
        texts
      );

    const signedResponse =
      await fetch(
        "/api/reports/wheel-upload",
        {
          method:
            "POST",

          headers: {
            "Content-Type":
              "application/json",
          },
        }
      );

    const signedData =
      await readJsonResponse<SignedUploadResponse>(
        signedResponse
      );

    if (
      !signedResponse.ok ||
      !signedData?.wheelImagePath ||
      !signedData?.token
    ) {
      throw new Error(
        signedData?.detail ||
          signedData?.error ||
          texts.wheelUploadPreparationFailed
      );
    }

    const {
      error:
        uploadError,
    } =
      await supabase.storage
        .from(
          "rapport-images"
        )
        .uploadToSignedUrl(
          signedData.wheelImagePath,
          signedData.token,
          wheelBlob,
          {
            contentType:
              "image/png",

            upsert:
              false,
          }
        );

    if (
      uploadError
    ) {
      throw new Error(
        uploadError.message ||
          texts.wheelUploadFailed
      );
    }

    return signedData.wheelImagePath;
  }

  /*
  |--------------------------------------------------------------------------
  | Soumission
  |--------------------------------------------------------------------------
  */

  async function handleSubmit(
    event:
      React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (loading) {
      return;
    }

    setError("");
    setChart(null);
    setLatitude(null);
    setLongitude(null);
    setBirthCountry("");
    setTimezone("");

    const cleanFirstName =
      firstName.trim();

    const cleanCity =
      birthCity.trim();

    if (
      !birthDate ||
      !cleanCity
    ) {
      setError(
        texts.requiredDateAndCity
      );

      return;
    }

    const dateParts =
      birthDate.split(
        "/"
      );

    if (
      dateParts.length !==
      3
    ) {
      setError(
        texts.dateFormat
      );

      return;
    }

    const [
      dayString,
      monthString,
      yearString,
    ] =
      dateParts;

    const day =
      Number.parseInt(
        dayString,
        10
      );

    const month =
      Number.parseInt(
        monthString,
        10
      );

    const year =
      Number.parseInt(
        yearString,
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
        texts.invalidDate
      );

      return;
    }

    const effectiveBirthTime =
      birthTime ||
      "12:00";

    const [
      hourString,
      minuteString,
    ] =
      effectiveBirthTime.split(
        ":"
      );

    const hour =
      Number.parseInt(
        hourString,
        10
      );

    const minute =
      Number.parseInt(
        minuteString,
        10
      );

    if (
      !isValidTime(
        hour,
        minute
      )
    ) {
      setError(
        texts.invalidTime
      );

      return;
    }

    setLoading(
      true
    );

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
        await readJsonResponse<GeocodeResponse>(
          geoResponse
        );

      if (
        !geoResponse.ok ||
        !geoData?.ok ||
        !geoData?.result
      ) {
        throw new Error(
          geoData?.detail ||
            geoData?.error ||
            texts.cityNotFound
        );
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
        throw new Error(
          texts.invalidCoordinates
        );
      }

      const country =
        String(
          geoData.result
            .country ||
            ""
        ).trim();

      const detectedTimezone =
        String(
          geoData.result
            .timezone ||
            ""
        ).trim();

      setLatitude(
        lat
      );

      setLongitude(
        lon
      );

      setBirthCountry(
        country
      );

      setTimezone(
        detectedTimezone
      );

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
        await readJsonResponse<NatalChartResponse>(
          chartResponse
        );

      if (
        !chartResponse.ok ||
        !chartData?.ok ||
        !chartData?.chart
      ) {
        throw new Error(
          chartData?.detail ||
            chartData?.error ||
            texts.chartCalculationError
        );
      }

      setChart(
        chartData.chart
      );

      /*
       * On attend que la roue cachée soit réellement
       * affichée par React avant de la capturer.
       */
      await waitForNextPaint();

      /*
      |--------------------------------------------------------------------------
      | Envoi de la roue
      |--------------------------------------------------------------------------
      */

      const wheelImagePath =
        await uploadWheelImage();

      /*
      |--------------------------------------------------------------------------
      | Création de la session Stripe
      |--------------------------------------------------------------------------
      */

      const checkoutResponse =
        await fetch(
          "/api/reports/checkout",
          {
            method:
              "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify({
                reportType,
                locale,

                firstName:
                  cleanFirstName,

                birthDate,

                birthTime:
                  effectiveBirthTime,

                birthCity:
                  cleanCity,

                birthCountry:
                  country,

                latitude:
                  lat,

                longitude:
                  lon,

                timezone:
                  detectedTimezone,

                wheelImagePath,
              }),
          }
        );

      const checkoutData =
        await readJsonResponse<CheckoutResponse>(
          checkoutResponse
        );

      if (
        !checkoutResponse.ok ||
        !checkoutData?.url
      ) {
        throw new Error(
          checkoutData?.detail ||
            checkoutData?.error ||
            texts.paymentError(
              checkoutResponse.status
            )
        );
      }

      window.location.href =
        checkoutData.url;
    } catch (
      checkoutError
    ) {
      console.error(
        "Erreur pendant la commande du rapport :",
        checkoutError
      );

      setError(
        checkoutError instanceof
          Error
          ? checkoutError.message
          : texts.paymentPreparationFailed
      );
    } finally {
      setLoading(
        false
      );
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Données de la roue cachée
  |--------------------------------------------------------------------------
  */

  const planets =
    (
      chart?.planets ||
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
    chart?.angles ||
    {};

  /*
  |--------------------------------------------------------------------------
  | Affichage
  |--------------------------------------------------------------------------
  */

  return (
    <section
      className="report-checkout"
      aria-labelledby={`report-checkout-${reportType}`}
    >
      <div className="report-checkout__header">
        <span className="report-checkout__badge">
          {texts.secureOrder}
        </span>

        <h2
          id={`report-checkout-${reportType}`}
        >
          {texts.orderReport}{" "}
          {report.name}
        </h2>

        <p className="report-checkout__price">
          {report.price}
        </p>

        <p className="report-checkout__intro">
          {texts.intro}
        </p>
      </div>

      <form
        className="report-checkout__form"
        onSubmit={
          handleSubmit
        }
        noValidate
      >
        <div className="report-checkout__grid">
          <label>
            {texts.firstName}

            <input
              type="text"
              value={
                firstName
              }
              onChange={(
                event
              ) =>
                setFirstName(
                  event.target.value
                )
              }
              placeholder={texts.firstNamePlaceholder}
              autoComplete="given-name"
            />
          </label>

          <label>
            {texts.birthDate}

            <input
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
              placeholder="JJ/MM/AAAA"
              maxLength={
                10
              }
              autoComplete="bday"
              required
            />
          </label>

          <label>
            {texts.birthTime}

            <input
              type="time"
              value={
                birthTime
              }
              onChange={(
                event
              ) =>
                setBirthTime(
                  event.target.value
                )
              }
              autoComplete="off"
            />

            <span className="report-checkout__help">
              {texts.birthTimeHelp}
            </span>
          </label>

          <label className="report-checkout__full">
            {texts.birthCity}

            <input
              type="text"
              value={
                birthCity
              }
              onChange={(
                event
              ) =>
                setBirthCity(
                  event.target.value
                )
              }
              placeholder={texts.birthCityPlaceholder}
              autoComplete="off"
              required
            />
          </label>
        </div>

        {error ? (
          <p
            className="report-checkout__error"
            role="alert"
          >
            {error}
          </p>
        ) : null}

        <div className="report-checkout__download-note">
          <span aria-hidden="true">
            📥
          </span>

          <p>
            <strong>{texts.importantLabel}</strong>{" "}
            {texts.downloadNotice}
          </p>
        </div>

       <button
  type="submit"
  className="report-checkout__button"
  disabled={loading}
  aria-busy={loading}
>
  <span className="report-checkout__button-text">
    {loading
      ? texts.preparingChart
      : report.button}
  </span>
</button>
        <p className="report-checkout__secure">
          {texts.securePayment}
        </p>
      </form>

      {/*
       * Roue cachée utilisée uniquement pour créer
       * l’image destinée au rapport PDF.
       */}
      {chart ? (
        <div
          aria-hidden="true"
          className="report-checkout__hidden-wheel"
        >
          <div
            ref={
              wheelRef
            }
            className="report-checkout__wheel-canvas"
          >
            <NatalChartWheel
              planets={
                planets
              }
              houses={
                chart?.houses
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
      ) : null}

      {/*
       * Ces valeurs ne sont pas affichées.
       * Elles restent ici pour faciliter le débogage
       * et éviter qu’elles soient supprimées par erreur.
       */}
      <input
        type="hidden"
        value={
          latitude ??
          ""
        }
        readOnly
      />

      <input
        type="hidden"
        value={
          longitude ??
          ""
        }
        readOnly
      />

      <input
        type="hidden"
        value={
          birthCountry
        }
        readOnly
      />

      <input
        type="hidden"
        value={
          timezone
        }
        readOnly
      />
    </section>
  );
}
