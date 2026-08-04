"use client";





import fr from "../i18n/migrated/fr/components/compatibilitypremiumform.json";
import en from "../i18n/migrated/en/components/compatibilitypremiumform.json";
import es from "../i18n/migrated/es/components/compatibilitypremiumform.json";
import de from "../i18n/migrated/de/components/compatibilitypremiumform.json";
import it from "../i18n/migrated/it/components/compatibilitypremiumform.json";
import pt from "../i18n/migrated/pt/components/compatibilitypremiumform.json";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import html2canvas from "html2canvas";
import { createClient } from "@supabase/supabase-js";

import NatalChartWheel from "./NatalChartWheel";

import type { Locale } from "@/i18n/config";



type Dictionary = Record<string, string>;

type CompatibilityPremiumFormProps = {
  locale: Locale;
};

type FormTexts = {
  yourFirstName: string;
  otherFirstName: string;
  yourBirthInfo: string;
  otherBirthInfo: string;
  firstPerson: string;
  secondPerson: string;
  preparingPayment: string;
  submit: string;
  enterFirstName: (person: string) => string;
  enterBirthDate: (person: string) => string;
  enterBirthDateFormat: (person: string) => string;
  invalidBirthDate: (person: string) => string;
  enterBirthTime: (person: string) => string;
  invalidBirthTime: (person: string) => string;
  enterBirthCity: (person: string) => string;
  enterBirthCountry: (person: string) => string;
  locationNotFound: (location: string) => string;
  invalidCoordinates: (location: string) => string;
  missingCoordinates: (name: string) => string;
  chartCalculationFailed: (name: string) => string;
  invalidImageFormat: string;
  invalidImageType: string;
  wheelNotFound: (name: string) => string;
  wheelCreationFailed: (name: string) => string;
  missingSupabase: string;
  wheelUploadPreparationFailed: string;
  wheelUploadFailed: string;
  paymentError: (status: number) => string;
  unknownError: string;
};

const DICTIONARIES: Record<Locale, Dictionary> = {
  fr, en, es, de, it, pt,
};

const FORM_TEXTS: Record<Locale, FormTexts> = {
  fr: {
    yourFirstName: "Votre prénom", otherFirstName: "Le prénom de l’autre personne",
    yourBirthInfo: "Vos informations de naissance", otherBirthInfo: "Les informations de l’autre personne",
    firstPerson: "la première personne", secondPerson: "la deuxième personne",
    preparingPayment: "Préparation du paiement...", submit: "Obtenir mon rapport de compatibilité",
    enterFirstName: p => `Entre le prénom de ${p}.`, enterBirthDate: p => `Entre la date de naissance de ${p}.`,
    enterBirthDateFormat: p => `Entre la date de naissance de ${p} au format JJ/MM/AAAA.`, invalidBirthDate: p => `La date de naissance de ${p} est invalide.`,
    enterBirthTime: p => `Entre l’heure de naissance de ${p}.`, invalidBirthTime: p => `L’heure de naissance de ${p} est invalide.`,
    enterBirthCity: p => `Entre la ville de naissance de ${p}.`, enterBirthCountry: p => `Entre le pays de naissance de ${p}.`,
    locationNotFound: l => `Lieu introuvable : ${l}. Vérifie la ville et le pays.`, invalidCoordinates: l => `Les coordonnées reçues pour ${l} sont invalides.`,
    missingCoordinates: n => `Les coordonnées de naissance de ${n} sont absentes.`, chartCalculationFailed: n => `Impossible de calculer le thème astral de ${n}.`,
    invalidImageFormat: "Le format de l’image astrologique est invalide.",
    invalidImageType: "Le type de l’image astrologique est invalide.",
    wheelNotFound: n => `La roue astrologique de ${n} est introuvable.`,
    wheelCreationFailed: n => `La roue astrologique de ${n} n’a pas pu être créée.`,
    missingSupabase: "La configuration publique de Supabase est absente.",
    wheelUploadPreparationFailed: "Impossible de préparer l’envoi de la roue.",
    wheelUploadFailed: "Impossible d’enregistrer la roue astrologique.",
    paymentError: s => `Erreur de paiement (${s}).`,
    unknownError: "Une erreur est survenue. Vérifie les informations et réessaie.",
  },
  en: {
    yourFirstName: "Your first name", otherFirstName: "The other person’s first name",
    yourBirthInfo: "Your birth information", otherBirthInfo: "The other person’s birth information",
    firstPerson: "the first person", secondPerson: "the second person",
    preparingPayment: "Preparing payment...", submit: "Get my compatibility report",
    enterFirstName: p => `Enter the first name of ${p}.`, enterBirthDate: p => `Enter the birth date of ${p}.`,
    enterBirthDateFormat: p => `Enter the birth date of ${p} in DD/MM/YYYY format.`, invalidBirthDate: p => `The birth date of ${p} is invalid.`,
    enterBirthTime: p => `Enter the birth time of ${p}.`, invalidBirthTime: p => `The birth time of ${p} is invalid.`,
    enterBirthCity: p => `Enter the birth city of ${p}.`, enterBirthCountry: p => `Enter the birth country of ${p}.`,
    locationNotFound: l => `Location not found: ${l}. Check the city and country.`, invalidCoordinates: l => `The coordinates received for ${l} are invalid.`,
    missingCoordinates: n => `The birth coordinates for ${n} are missing.`, chartCalculationFailed: n => `Unable to calculate ${n}’s birth chart.`,
    invalidImageFormat: "The astrology image format is invalid.", invalidImageType: "The astrology image type is invalid.",
    wheelNotFound: n => `${n}’s astrology wheel could not be found.`, wheelCreationFailed: n => `${n}’s astrology wheel could not be created.`,
    missingSupabase: "The public Supabase configuration is missing.", wheelUploadPreparationFailed: "Unable to prepare the wheel upload.",
    wheelUploadFailed: "Unable to save the astrology wheel.", paymentError: s => `Payment error (${s}).`,
    unknownError: "An error occurred. Check the information and try again.",
  },
  es: {
    yourFirstName: "Tu nombre", otherFirstName: "El nombre de la otra persona", yourBirthInfo: "Tus datos de nacimiento", otherBirthInfo: "Los datos de nacimiento de la otra persona",
    firstPerson: "la primera persona", secondPerson: "la segunda persona", preparingPayment: "Preparando el pago...", submit: "Obtener mi informe de compatibilidad",
    enterFirstName: p => `Introduce el nombre de ${p}.`, enterBirthDate: p => `Introduce la fecha de nacimiento de ${p}.`, enterBirthDateFormat: p => `Introduce la fecha de nacimiento de ${p} en formato DD/MM/AAAA.`, invalidBirthDate: p => `La fecha de nacimiento de ${p} no es válida.`,
    enterBirthTime: p => `Introduce la hora de nacimiento de ${p}.`, invalidBirthTime: p => `La hora de nacimiento de ${p} no es válida.`, enterBirthCity: p => `Introduce la ciudad de nacimiento de ${p}.`, enterBirthCountry: p => `Introduce el país de nacimiento de ${p}.`,
    locationNotFound: l => `Lugar no encontrado: ${l}. Verifica la ciudad y el país.`, invalidCoordinates: l => `Las coordenadas recibidas para ${l} no son válidas.`, missingCoordinates: n => `Faltan las coordenadas de nacimiento de ${n}.`, chartCalculationFailed: n => `No se pudo calcular la carta natal de ${n}.`,
    invalidImageFormat: "El formato de la imagen astrológica no es válido.", invalidImageType: "El tipo de imagen astrológica no es válido.", wheelNotFound: n => `No se encontró la rueda astrológica de ${n}.`, wheelCreationFailed: n => `No se pudo crear la rueda astrológica de ${n}.`,
    missingSupabase: "Falta la configuración pública de Supabase.", wheelUploadPreparationFailed: "No se pudo preparar el envío de la rueda.", wheelUploadFailed: "No se pudo guardar la rueda astrológica.", paymentError: s => `Error de pago (${s}).`, unknownError: "Ocurrió un error. Verifica la información e inténtalo de nuevo.",
  },
  de: {
    yourFirstName: "Ihr Vorname", otherFirstName: "Vorname der anderen Person", yourBirthInfo: "Ihre Geburtsangaben", otherBirthInfo: "Geburtsangaben der anderen Person",
    firstPerson: "der ersten Person", secondPerson: "der zweiten Person", preparingPayment: "Zahlung wird vorbereitet...", submit: "Meinen Kompatibilitätsbericht erhalten",
    enterFirstName: p => `Geben Sie den Vornamen ${p} ein.`, enterBirthDate: p => `Geben Sie das Geburtsdatum ${p} ein.`, enterBirthDateFormat: p => `Geben Sie das Geburtsdatum ${p} im Format TT/MM/JJJJ ein.`, invalidBirthDate: p => `Das Geburtsdatum ${p} ist ungültig.`,
    enterBirthTime: p => `Geben Sie die Geburtszeit ${p} ein.`, invalidBirthTime: p => `Die Geburtszeit ${p} ist ungültig.`, enterBirthCity: p => `Geben Sie den Geburtsort ${p} ein.`, enterBirthCountry: p => `Geben Sie das Geburtsland ${p} ein.`,
    locationNotFound: l => `Ort nicht gefunden: ${l}. Prüfen Sie Stadt und Land.`, invalidCoordinates: l => `Die Koordinaten für ${l} sind ungültig.`, missingCoordinates: n => `Die Geburtskoordinaten von ${n} fehlen.`, chartCalculationFailed: n => `Das Geburtshoroskop von ${n} konnte nicht berechnet werden.`,
    invalidImageFormat: "Das Format des astrologischen Bildes ist ungültig.", invalidImageType: "Der Typ des astrologischen Bildes ist ungültig.", wheelNotFound: n => `Das astrologische Rad von ${n} wurde nicht gefunden.`, wheelCreationFailed: n => `Das astrologische Rad von ${n} konnte nicht erstellt werden.`,
    missingSupabase: "Die öffentliche Supabase-Konfiguration fehlt.", wheelUploadPreparationFailed: "Der Upload des Rads konnte nicht vorbereitet werden.", wheelUploadFailed: "Das astrologische Rad konnte nicht gespeichert werden.", paymentError: s => `Zahlungsfehler (${s}).`, unknownError: "Ein Fehler ist aufgetreten. Prüfen Sie die Angaben und versuchen Sie es erneut.",
  },
  it: {
    yourFirstName: "Il tuo nome", otherFirstName: "Il nome dell’altra persona", yourBirthInfo: "I tuoi dati di nascita", otherBirthInfo: "I dati di nascita dell’altra persona",
    firstPerson: "la prima persona", secondPerson: "la seconda persona", preparingPayment: "Preparazione del pagamento...", submit: "Ottieni il mio rapporto di compatibilità",
    enterFirstName: p => `Inserisci il nome di ${p}.`, enterBirthDate: p => `Inserisci la data di nascita di ${p}.`, enterBirthDateFormat: p => `Inserisci la data di nascita di ${p} nel formato GG/MM/AAAA.`, invalidBirthDate: p => `La data di nascita di ${p} non è valida.`,
    enterBirthTime: p => `Inserisci l’ora di nascita di ${p}.`, invalidBirthTime: p => `L’ora di nascita di ${p} non è valida.`, enterBirthCity: p => `Inserisci la città di nascita di ${p}.`, enterBirthCountry: p => `Inserisci il paese di nascita di ${p}.`,
    locationNotFound: l => `Luogo non trovato: ${l}. Verifica città e paese.`, invalidCoordinates: l => `Le coordinate ricevute per ${l} non sono valide.`, missingCoordinates: n => `Mancano le coordinate di nascita di ${n}.`, chartCalculationFailed: n => `Impossibile calcolare il tema natale di ${n}.`,
    invalidImageFormat: "Il formato dell’immagine astrologica non è valido.", invalidImageType: "Il tipo di immagine astrologica non è valido.", wheelNotFound: n => `La ruota astrologica di ${n} non è stata trovata.`, wheelCreationFailed: n => `Non è stato possibile creare la ruota astrologica di ${n}.`,
    missingSupabase: "Manca la configurazione pubblica di Supabase.", wheelUploadPreparationFailed: "Impossibile preparare l’invio della ruota.", wheelUploadFailed: "Impossibile salvare la ruota astrologica.", paymentError: s => `Errore di pagamento (${s}).`, unknownError: "Si è verificato un errore. Verifica i dati e riprova.",
  },
  pt: {
    yourFirstName: "Seu nome", otherFirstName: "O nome da outra pessoa", yourBirthInfo: "Seus dados de nascimento", otherBirthInfo: "Os dados de nascimento da outra pessoa",
    firstPerson: "a primeira pessoa", secondPerson: "a segunda pessoa", preparingPayment: "Preparando o pagamento...", submit: "Obter meu relatório de compatibilidade",
    enterFirstName: p => `Digite o nome de ${p}.`, enterBirthDate: p => `Digite a data de nascimento de ${p}.`, enterBirthDateFormat: p => `Digite a data de nascimento de ${p} no formato DD/MM/AAAA.`, invalidBirthDate: p => `A data de nascimento de ${p} é inválida.`,
    enterBirthTime: p => `Digite a hora de nascimento de ${p}.`, invalidBirthTime: p => `A hora de nascimento de ${p} é inválida.`, enterBirthCity: p => `Digite a cidade de nascimento de ${p}.`, enterBirthCountry: p => `Digite o país de nascimento de ${p}.`,
    locationNotFound: l => `Local não encontrado: ${l}. Verifique a cidade e o país.`, invalidCoordinates: l => `As coordenadas recebidas para ${l} são inválidas.`, missingCoordinates: n => `As coordenadas de nascimento de ${n} estão ausentes.`, chartCalculationFailed: n => `Não foi possível calcular o mapa astral de ${n}.`,
    invalidImageFormat: "O formato da imagem astrológica é inválido.", invalidImageType: "O tipo da imagem astrológica é inválido.", wheelNotFound: n => `A roda astrológica de ${n} não foi encontrada.`, wheelCreationFailed: n => `Não foi possível criar a roda astrológica de ${n}.`,
    missingSupabase: "A configuração pública do Supabase está ausente.", wheelUploadPreparationFailed: "Não foi possível preparar o envio da roda.", wheelUploadFailed: "Não foi possível salvar a roda astrológica.", paymentError: s => `Erro de pagamento (${s}).`, unknownError: "Ocorreu um erro. Verifique as informações e tente novamente.",
  },
};


type PersonForm = {
  firstName: string;
  birthDate: string;
  birthTime: string;
  birthCity: string;
  birthCountry: string;
  latitude: number | null;
  longitude: number | null;
  timezone: string;
};

type HouseCusp = {
  house: number;
  longitude: number;
};

type NatalChart = {
  planets?: any[];
  houses?: {
    cusps?: HouseCusp[];
  };
  angles?: {
    ascendant?: {
      longitude?: number;
      formatted?: string;
    };
    midheaven?: {
      longitude?: number;
      formatted?: string;
    };
  };
};

type SignedUploadResponse = {
  ok?: boolean;
  wheelImagePath?: string;
  token?: string;
  error?: string;
  detail?: string;
};

type CheckoutResponse = {
  url?: string;
  error?: string;
  detail?: string;
};

const EMPTY_PERSON: PersonForm = {
  firstName: "",
  birthDate: "",
  birthTime: "",
  birthCity: "",
  birthCountry: "",
  latitude: null,
  longitude: null,
  timezone: "",
};

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

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "";

const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      })
    : null;

function formatBirthDate(value: string): string {
  const numbers = value.replace(/\D/g, "").slice(0, 8);

  if (numbers.length > 4) {
    return `${numbers.slice(0, 2)}/${numbers.slice(
      2,
      4
    )}/${numbers.slice(4)}`;
  }

  if (numbers.length > 2) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
  }

  return numbers;
}

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

  if (year < 1800 || year > new Date().getFullYear()) {
    return false;
  }

  if (month < 1 || month > 12) {
    return false;
  }

  const date = new Date(Date.UTC(year, month - 1, day));

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

function isValidTime(value: string): boolean {
  const [hourString, minuteString] = value.split(":");

  const hour = Number.parseInt(hourString, 10);
  const minute = Number.parseInt(minuteString, 10);

  return (
    Number.isInteger(hour) &&
    Number.isInteger(minute) &&
    hour >= 0 &&
    hour <= 23 &&
    minute >= 0 &&
    minute <= 59
  );
}

function validatePerson(
  person: PersonForm,
  personLabel: string,
  texts: FormTexts
): string | null {
  if (!person.firstName.trim()) {
    return texts.enterFirstName(personLabel);
  }

  if (!person.birthDate.trim()) {
    return texts.enterBirthDate(personLabel);
  }

  const dateParts = person.birthDate.split("/");

  if (dateParts.length !== 3) {
    return texts.enterBirthDateFormat(personLabel);
  }

  const [dayString, monthString, yearString] = dateParts;

  const day = Number.parseInt(dayString, 10);
  const month = Number.parseInt(monthString, 10);
  const year = Number.parseInt(yearString, 10);

  if (!isValidDate(day, month, year)) {
    return texts.invalidBirthDate(personLabel);
  }

  if (!person.birthTime) {
    return texts.enterBirthTime(personLabel);
  }

  if (!isValidTime(person.birthTime)) {
    return texts.invalidBirthTime(personLabel);
  }

  if (!person.birthCity.trim()) {
    return texts.enterBirthCity(personLabel);
  }

  if (!person.birthCountry.trim()) {
    return texts.enterBirthCountry(personLabel);
  }

  return null;
}

function getBirthParts(person: PersonForm) {
  const [dayString, monthString, yearString] =
    person.birthDate.split("/");

  const [hourString, minuteString] =
    person.birthTime.split(":");

  return {
    day: Number.parseInt(dayString, 10),
    month: Number.parseInt(monthString, 10),
    year: Number.parseInt(yearString, 10),
    hour: Number.parseInt(hourString, 10),
    minute: Number.parseInt(minuteString, 10),
  };
}

async function readJsonResponse<T>(
  response: Response
): Promise<T | null> {
  const responseText = await response.text();

  if (!responseText) {
    return null;
  }

  try {
    return JSON.parse(responseText) as T;
  } catch {
    return {
      error: responseText,
    } as T;
  }
}

async function geocodePerson(
  person: PersonForm,
  texts: FormTexts
): Promise<PersonForm> {
  const locationQuery = [
    person.birthCity.trim(),
    person.birthCountry.trim(),
  ]
    .filter(Boolean)
    .join(", ");

  const response = await fetch(
    `/api/geocode?city=${encodeURIComponent(locationQuery)}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const data = await response.json();

  if (!response.ok || !data?.ok || !data?.result) {
    throw new Error(
      data?.error ||
        texts.locationNotFound(locationQuery)
    );
  }

  const latitude = Number(data.result.latitude);
  const longitude = Number(data.result.longitude);

  if (
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude)
  ) {
    throw new Error(
      texts.invalidCoordinates(locationQuery)
    );
  }

  return {
    ...person,
    firstName: person.firstName.trim(),
    birthCity: person.birthCity.trim(),
    birthCountry: person.birthCountry.trim(),
    latitude,
    longitude,
    timezone:
      typeof data.result.timezone === "string"
        ? data.result.timezone.trim()
        : "",
  };
}

async function calculateNatalChart(
  person: PersonForm,
  texts: FormTexts
): Promise<NatalChart> {
  if (
    person.latitude === null ||
    person.longitude === null
  ) {
    throw new Error(
      texts.missingCoordinates(person.firstName)
    );
  }

  const { day, month, year, hour, minute } =
    getBirthParts(person);

  const response = await fetch("/api/natal-chart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({
      year,
      month,
      day,
      hour,
      minute,
      latitude: person.latitude,
      longitude: person.longitude,
    }),
  });

  const data = await response.json();

  if (!response.ok || !data?.ok || !data?.chart) {
    throw new Error(
      data?.error ||
        texts.chartCalculationFailed(person.firstName)
    );
  }

  return data.chart as NatalChart;
}

function dataUrlToBlob(
  dataUrl: string,
  texts: FormTexts
): Blob {
  const parts = dataUrl.split(",");

  if (parts.length !== 2) {
    throw new Error(
      texts.invalidImageFormat
    );
  }

  const header = parts[0];
  const base64Data = parts[1];

  const mimeMatch = header.match(
    /^data:(image\/[a-zA-Z0-9.+-]+);base64$/
  );

  if (!mimeMatch) {
    throw new Error(
      texts.invalidImageType
    );
  }

  const binaryString = atob(base64Data);
  const bytes = new Uint8Array(binaryString.length);

  for (
    let index = 0;
    index < binaryString.length;
    index += 1
  ) {
    bytes[index] = binaryString.charCodeAt(index);
  }

  return new Blob([bytes], {
    type: mimeMatch[1],
  });
}

async function captureWheel(
  element: HTMLDivElement | null,
  personName: string,
  texts: FormTexts
): Promise<string> {
  if (!element) {
    throw new Error(
      texts.wheelNotFound(personName)
    );
  }

  const canvas = await html2canvas(element, {
    backgroundColor: "#0b1124",
    scale: 3,
    useCORS: true,
    logging: false,
  });

  const image = canvas.toDataURL("image/png");

  if (!image.startsWith("data:image/png;base64,")) {
    throw new Error(
      texts.wheelCreationFailed(personName)
    );
  }

  return image;
}

async function uploadWheelImage(
  wheelImage: string,
  texts: FormTexts
): Promise<string> {
  if (!supabase) {
    throw new Error(
      texts.missingSupabase
    );
  }

  const wheelBlob = dataUrlToBlob(wheelImage, texts);

  const signedResponse = await fetch(
    "/api/reports/wheel-upload",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

  const { error: uploadError } =
    await supabase.storage
      .from("rapport-images")
      .uploadToSignedUrl(
        signedData.wheelImagePath,
        signedData.token,
        wheelBlob,
        {
          contentType: "image/png",
          upsert: false,
        }
      );

  if (uploadError) {
    throw new Error(
      uploadError.message ||
        texts.wheelUploadFailed
    );
  }

  return signedData.wheelImagePath;
}

type PersonFieldsProps = {
  number: 1 | 2;
  title: string;
  subtitle: string;
  person: PersonForm;
  dictionary: Dictionary;
  texts: FormTexts;
  onChange: (
    field: keyof PersonForm,
    value: string
  ) => void;
};

function PersonFields({
  number,
  title,
  subtitle,
  person,
  dictionary,
  texts,
  onChange,
}: PersonFieldsProps) {
  const __i18n = dictionary;
  const prefix = `compatibility-person-${number}`;

  return (
    <fieldset className="compatibility-form-person">
      <legend className="compatibility-form-person-heading">
        <span className="compatibility-form-person-number">
          {number}
        </span>

        <span>
          <strong>{title}</strong>
          <small>{subtitle}</small>
        </span>
      </legend>

      <div className="compatibility-form-fields">
        <label
          className="compatibility-form-field compatibility-form-field-full"
          htmlFor={`${prefix}-first-name`}
        >
          <span>{__i18n["prenom"]}</span>

          <input
            id={`${prefix}-first-name`}
            type="text"
            value={person.firstName}
            onChange={(event) =>
              onChange("firstName", event.target.value)
            }
            placeholder={
              number === 1
                ? texts.yourFirstName
                : texts.otherFirstName
            }
            autoComplete={
              number === 1 ? "given-name" : "off"
            }
            required
          />
        </label>

        <label
          className="compatibility-form-field"
          htmlFor={`${prefix}-birth-date`}
        >
          <span>{__i18n["date_de_naissance"]}</span>

          <input
            id={`${prefix}-birth-date`}
            type="text"
            inputMode="numeric"
            value={person.birthDate}
            onChange={(event) =>
              onChange(
                "birthDate",
                formatBirthDate(event.target.value)
              )
            }
            placeholder={__i18n["jj_mm_aaaa"]}
            maxLength={10}
            autoComplete={number === 1 ? "bday" : "off"}
            required
          />
        </label>

        <label
          className="compatibility-form-field"
          htmlFor={`${prefix}-birth-time`}
        >
          <span>{__i18n["heure_de_naissance"]}</span>

          <input
            id={`${prefix}-birth-time`}
            type="time"
            value={person.birthTime}
            onChange={(event) =>
              onChange("birthTime", event.target.value)
            }
            autoComplete="off"
            required
          />

          <small>
            {__i18n["l_heure_exacte_permet_de_calculer_l_ascendant_et_les_maisons"]}</small>
        </label>

        <label
          className="compatibility-form-field"
          htmlFor={`${prefix}-birth-city`}
        >
          <span>{__i18n["ville_de_naissance"]}</span>

          <input
            id={`${prefix}-birth-city`}
            type="text"
            value={person.birthCity}
            onChange={(event) =>
              onChange("birthCity", event.target.value)
            }
            placeholder={__i18n["ex_quebec"]}
            autoComplete="off"
            required
          />
        </label>

        <label
          className="compatibility-form-field"
          htmlFor={`${prefix}-birth-country`}
        >
          <span>{__i18n["pays_de_naissance"]}</span>

          <input
            id={`${prefix}-birth-country`}
            type="text"
            value={person.birthCountry}
            onChange={(event) =>
              onChange("birthCountry", event.target.value)
            }
            placeholder={__i18n["ex_canada"]}
            autoComplete={
              number === 1 ? "country-name" : "off"
            }
            required
          />
        </label>
      </div>
    </fieldset>
  );
}

export default function CompatibilityPremiumForm({
  locale,
}: CompatibilityPremiumFormProps) {
  const __i18n = DICTIONARIES[locale];
  const texts = FORM_TEXTS[locale];
  const person1WheelRef =
    useRef<HTMLDivElement | null>(null);

  const person2WheelRef =
    useRef<HTMLDivElement | null>(null);

  const [person1, setPerson1] =
    useState<PersonForm>(EMPTY_PERSON);

  const [person2, setPerson2] =
    useState<PersonForm>(EMPTY_PERSON);

  const [person1Chart, setPerson1Chart] =
    useState<NatalChart | null>(null);

  const [person2Chart, setPerson2Chart] =
    useState<NatalChart | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updatePerson1 = (
    field: keyof PersonForm,
    value: string
  ) => {
    setPerson1Chart(null);

    setPerson1((current) => ({
      ...current,
      [field]: value,
      latitude: null,
      longitude: null,
      timezone: "",
    }));
  };

  const updatePerson2 = (
    field: keyof PersonForm,
    value: string
  ) => {
    setPerson2Chart(null);

    setPerson2((current) => ({
      ...current,
      [field]: value,
      latitude: null,
      longitude: null,
      timezone: "",
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    setError("");

    const person1Error = validatePerson(
      person1,
      texts.firstPerson,
      texts
    );

    if (person1Error) {
      setError(person1Error);
      return;
    }

    const person2Error = validatePerson(
      person2,
      texts.secondPerson,
      texts
    );

    if (person2Error) {
      setError(person2Error);
      return;
    }

    setLoading(true);

    try {
      const [geocodedPerson1, geocodedPerson2] =
        await Promise.all([
          geocodePerson(person1, texts),
          geocodePerson(person2, texts),
        ]);

      const [chart1, chart2] = await Promise.all([
        calculateNatalChart(geocodedPerson1, texts),
        calculateNatalChart(geocodedPerson2, texts),
      ]);

      flushSync(() => {
        setPerson1(geocodedPerson1);
        setPerson2(geocodedPerson2);
        setPerson1Chart(chart1);
        setPerson2Chart(chart2);
      });

      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => resolve());
        });
      });

      const [wheelImage1, wheelImage2] =
        await Promise.all([
          captureWheel(
            person1WheelRef.current,
            geocodedPerson1.firstName,
            texts
          ),
          captureWheel(
            person2WheelRef.current,
            geocodedPerson2.firstName,
            texts
          ),
        ]);

      const [wheelImagePath1, wheelImagePath2] =
        await Promise.all([
          uploadWheelImage(wheelImage1, texts),
          uploadWheelImage(wheelImage2, texts),
        ]);

      const checkoutResponse = await fetch(
        "/api/reports/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reportType: "compatibility",
            locale,
            person1: {
              ...geocodedPerson1,
              wheelImagePath: wheelImagePath1,
            },
            person2: {
              ...geocodedPerson2,
              wheelImagePath: wheelImagePath2,
            },
          }),
        }
      );

      const checkoutData =
        await readJsonResponse<CheckoutResponse>(
          checkoutResponse
        );

      if (!checkoutResponse.ok || !checkoutData?.url) {
        throw new Error(
          checkoutData?.detail ||
            checkoutData?.error ||
            texts.paymentError(checkoutResponse.status)
        );
      }

      sessionStorage.setItem(
        "luna-astralis-compatibility-premium",
        JSON.stringify({
          locale,
          person1: {
            ...geocodedPerson1,
            wheelImagePath: wheelImagePath1,
          },
          person2: {
            ...geocodedPerson2,
            wheelImagePath: wheelImagePath2,
          },
        })
      );

      window.location.href = checkoutData.url;
    } catch (submitError) {
      console.error(
        "Erreur pendant la préparation du rapport de compatibilité :",
        submitError
      );

      setError(
        submitError instanceof Error
          ? submitError.message
          : texts.unknownError
      );

      setLoading(false);
    }
  };

  const person1Planets = (
    person1Chart?.planets || []
  ).filter((planet: any) =>
    MAIN_PLANETS.includes(planet?.name)
  );

  const person2Planets = (
    person2Chart?.planets || []
  ).filter((planet: any) =>
    MAIN_PLANETS.includes(planet?.name)
  );

  return (
    <div className="compatibility-premium-form-wrap">
      <div className="compatibility-premium-form-intro">
        <span>{__i18n["votre_rapport_personnalise"]}</span>

        <h3>
          {__i18n["entrez_les_informations_des_deux_personnes"]}</h3>

        <p>
          {__i18n["ces_renseignements_permettent_de_calculer_les_deux_themes_as"]}</p>
      </div>

      <form
        className="compatibility-premium-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="compatibility-form-persons">
          <PersonFields
            number={1}
            title={__i18n["premiere_personne"]}
            subtitle={texts.yourBirthInfo}
            person={person1}
            dictionary={__i18n}
            texts={texts}
            onChange={updatePerson1}
          />

          <div
            className="compatibility-form-connection"
            aria-hidden="true"
          >
            <span>♥</span>
          </div>

          <PersonFields
            number={2}
            title={__i18n["deuxieme_personne"]}
            subtitle={texts.otherBirthInfo}
            person={person2}
            dictionary={__i18n}
            texts={texts}
            onChange={updatePerson2}
          />
        </div>

        {error && (
          <p
            className="compatibility-form-message compatibility-form-error"
            role="alert"
          >
            {error}
          </p>
        )}

        <div className="compatibility-form-submit-area">
          <button
            className="compatibility-form-submit"
            type="submit"
            disabled={loading}
            aria-busy={loading}
          >
            {loading
              ? texts.preparingPayment
              : texts.submit}
          </button>

          <p>
  {__i18n["paiement_unique_et_securise"]}<br />
  {__i18n["apres_le_paiement_telechargez_immediatement_votre_rapport_pd"]}<br />
  {__i18n["aucun_compte_client_n_est_cree_et_luna_astralis_ne_conserve"]}</p>
        </div>
      </form>

      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          left: "-20000px",
          top: 0,
          width: 900,
          height: 1800,
          pointerEvents: "none",
          opacity: 1,
        }}
      >
        {person1Chart && (
          <div
            ref={person1WheelRef}
            style={{
              width: 820,
              height: 820,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#0b1124",
              color: "#fff8e7",
            }}
          >
            <NatalChartWheel
              planets={person1Planets}
              houses={person1Chart.houses}
              ascendantLongitude={
                person1Chart.angles?.ascendant?.longitude
              }
              midheavenLongitude={
                person1Chart.angles?.midheaven?.longitude
              }
              size={760}
              showLegend={false}
            />
          </div>
        )}

        {person2Chart && (
          <div
            ref={person2WheelRef}
            style={{
              width: 820,
              height: 820,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#0b1124",
              color: "#fff8e7",
              marginTop: 40,
            }}
          >
            <NatalChartWheel
              planets={person2Planets}
              houses={person2Chart.houses}
              ascendantLongitude={
                person2Chart.angles?.ascendant?.longitude
              }
              midheavenLongitude={
                person2Chart.angles?.midheaven?.longitude
              }
              size={760}
              showLegend={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
