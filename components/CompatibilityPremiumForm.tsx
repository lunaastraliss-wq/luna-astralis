"use client";





import __i18n from "../i18n/migrated/fr/components/compatibilitypremiumform.json";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import html2canvas from "html2canvas";
import { createClient } from "@supabase/supabase-js";

import NatalChartWheel from "./NatalChartWheel";

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
  personLabel: string
): string | null {
  if (!person.firstName.trim()) {
    return `Entre le prénom de ${personLabel}.`;
  }

  if (!person.birthDate.trim()) {
    return `Entre la date de naissance de ${personLabel}.`;
  }

  const dateParts = person.birthDate.split("/");

  if (dateParts.length !== 3) {
    return `Entre la date de naissance de ${personLabel} au format JJ/MM/AAAA.`;
  }

  const [dayString, monthString, yearString] = dateParts;

  const day = Number.parseInt(dayString, 10);
  const month = Number.parseInt(monthString, 10);
  const year = Number.parseInt(yearString, 10);

  if (!isValidDate(day, month, year)) {
    return `La date de naissance de ${personLabel} est invalide.`;
  }

  if (!person.birthTime) {
    return `Entre l’heure de naissance de ${personLabel}.`;
  }

  if (!isValidTime(person.birthTime)) {
    return `L’heure de naissance de ${personLabel} est invalide.`;
  }

  if (!person.birthCity.trim()) {
    return `Entre la ville de naissance de ${personLabel}.`;
  }

  if (!person.birthCountry.trim()) {
    return `Entre le pays de naissance de ${personLabel}.`;
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
  person: PersonForm
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
        `Lieu introuvable : ${locationQuery}. Vérifie la ville et le pays.`
    );
  }

  const latitude = Number(data.result.latitude);
  const longitude = Number(data.result.longitude);

  if (
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude)
  ) {
    throw new Error(
      `Les coordonnées reçues pour ${locationQuery} sont invalides.`
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
  person: PersonForm
): Promise<NatalChart> {
  if (
    person.latitude === null ||
    person.longitude === null
  ) {
    throw new Error(
      `Les coordonnées de naissance de ${person.firstName} sont absentes.`
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
        `Impossible de calculer le thème astral de ${person.firstName}.`
    );
  }

  return data.chart as NatalChart;
}

function dataUrlToBlob(dataUrl: string): Blob {
  const parts = dataUrl.split(",");

  if (parts.length !== 2) {
    throw new Error(
      "Le format de l’image astrologique est invalide."
    );
  }

  const header = parts[0];
  const base64Data = parts[1];

  const mimeMatch = header.match(
    /^data:(image\/[a-zA-Z0-9.+-]+);base64$/
  );

  if (!mimeMatch) {
    throw new Error(
      "Le type de l’image astrologique est invalide."
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
  personName: string
): Promise<string> {
  if (!element) {
    throw new Error(
      `La roue astrologique de ${personName} est introuvable.`
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
      `La roue astrologique de ${personName} n’a pas pu être créée.`
    );
  }

  return image;
}

async function uploadWheelImage(
  wheelImage: string
): Promise<string> {
  if (!supabase) {
    throw new Error(
      "La configuration publique de Supabase est absente."
    );
  }

  const wheelBlob = dataUrlToBlob(wheelImage);

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
        "Impossible de préparer l’envoi de la roue."
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
        "Impossible d’enregistrer la roue astrologique."
    );
  }

  return signedData.wheelImagePath;
}

type PersonFieldsProps = {
  number: 1 | 2;
  title: string;
  subtitle: string;
  person: PersonForm;
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
  onChange,
}: PersonFieldsProps) {
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
                ? "Votre prénom"
                : "Le prénom de l’autre personne"
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

export default function CompatibilityPremiumForm() {
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
      "la première personne"
    );

    if (person1Error) {
      setError(person1Error);
      return;
    }

    const person2Error = validatePerson(
      person2,
      "la deuxième personne"
    );

    if (person2Error) {
      setError(person2Error);
      return;
    }

    setLoading(true);

    try {
      const [geocodedPerson1, geocodedPerson2] =
        await Promise.all([
          geocodePerson(person1),
          geocodePerson(person2),
        ]);

      const [chart1, chart2] = await Promise.all([
        calculateNatalChart(geocodedPerson1),
        calculateNatalChart(geocodedPerson2),
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
            geocodedPerson1.firstName
          ),
          captureWheel(
            person2WheelRef.current,
            geocodedPerson2.firstName
          ),
        ]);

      const [wheelImagePath1, wheelImagePath2] =
        await Promise.all([
          uploadWheelImage(wheelImage1),
          uploadWheelImage(wheelImage2),
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
            `Erreur de paiement (${checkoutResponse.status}).`
        );
      }

      sessionStorage.setItem(
        "luna-astralis-compatibility-premium",
        JSON.stringify({
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
          : "Une erreur est survenue. Vérifie les informations et réessaie."
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
            subtitle="Vos informations de naissance"
            person={person1}
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
            subtitle="Les informations de l’autre personne"
            person={person2}
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
              ? "Préparation du paiement..."
              : "Obtenir mon rapport de compatibilité"}
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
