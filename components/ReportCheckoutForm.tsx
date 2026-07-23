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

const REPORT_INFO: Record<
  ReportType,
  {
    name: string;
    price: string;
    button: string;
  }
> = {
  essential: {
    name:
      "Essentielle",

    price:
      "24,99 $ US",

    button:
      "Commander le rapport Essentielle",
  },

  premium: {
    name:
      "Premium",

    price:
      "49,99 $ US",

    button:
      "Commander le rapport Premium",
  },

  signature: {
    name:
      "Signature",

    price:
      "79,99 $ US",

    button:
      "Commander le rapport Signature",
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
  dataUrl: string
): Blob {
  const parts =
    dataUrl.split(",");

  if (
    parts.length !== 2
  ) {
    throw new Error(
      "Le format de l’image astrologique est invalide."
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
      "Le type de l’image astrologique est invalide."
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
}: Props) {
  const report =
    REPORT_INFO[
      reportType
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
        "La roue astrologique n’est pas encore prête."
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
        "La roue astrologique n’a pas pu être transformée en image."
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
        "La configuration publique de Supabase est absente."
      );
    }

    const wheelImage =
      await createWheelImage();

    const wheelBlob =
      dataUrlToBlob(
        wheelImage
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
          "Impossible de préparer l’envoi de la roue astrologique."
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
          "Impossible d’enregistrer la roue astrologique."
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
        "La date et la ville de naissance sont obligatoires."
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
        "Entre la date au format JJ/MM/AAAA."
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
        "La date de naissance est invalide."
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
        "L’heure de naissance est invalide."
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
            "Ville introuvable. Entre seulement le nom de la ville."
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
          "Les coordonnées reçues pour cette ville sont invalides."
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
            "Erreur lors du calcul de la carte du ciel."
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
            `Erreur de paiement (${checkoutResponse.status}).`
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
          : "Impossible de préparer le paiement. Réessaie."
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
          Commande sécurisée
        </span>

        <h2
          id={`report-checkout-${reportType}`}
        >
          Commander le rapport{" "}
          {report.name}
        </h2>

        <p className="report-checkout__price">
          {report.price}
        </p>

        <p className="report-checkout__intro">
          Entrez vos informations de naissance.
          Votre thème astral sera calculé avant
          de vous rediriger vers le paiement
          sécurisé Stripe.
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
            Prénom

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
              placeholder="Votre prénom"
              autoComplete="given-name"
            />
          </label>

          <label>
            Date de naissance

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
            Heure de naissance

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
              Sans heure précise, 12:00 sera utilisé.
            </span>
          </label>

          <label className="report-checkout__full">
            Ville de naissance

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
              placeholder="Exemple : Québec"
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
            <strong>Important :</strong> téléchargez votre rapport
            dès qu’il est généré et conservez-le dans un endroit
            sécuritaire. Luna Astralis ne conserve aucune copie
            de votre PDF.
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
      ? "Préparation de votre thème astral..."
      : report.button}
  </span>
</button>
        <p className="report-checkout__secure">
          Paiement unique • Aucun abonnement • Paiement sécurisé par Stripe
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
