"use client";






import __i18n from "../../../i18n/migrated/fr/app/horoscope/premium/horoscopedailycheckoutform.json";
import {
  FormEvent,
  useState,
} from "react";

type GeocodeLocation = {
  city: string;
  country: string;
  latitude: string;
  longitude: string;
  timezone: string;
};

type CheckoutResponse = {
  url?: string;
  error?: string;
  detail?: string;
};

type GeocodeResponse = {
  ok?: boolean;

  result?: {
    city?: string;
    name?: string;
    country?: string;
    countryName?: string;
    latitude?: number | string;
    longitude?: number | string;
    timezone?: string;
    timeZone?: string;
  };

  error?: string;
  detail?: string;
};

/*
|--------------------------------------------------------------------------
| Validation de la date
|--------------------------------------------------------------------------
*/

function isValidDate(
  day: number,
  month: number,
  year: number,
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
    year > new Date().getFullYear()
  ) {
    return false;
  }

  if (
    month < 1 ||
    month > 12
  ) {
    return false;
  }

  const date = new Date(
    Date.UTC(
      year,
      month - 1,
      day,
    ),
  );

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

/*
|--------------------------------------------------------------------------
| Conversion JJ/MM/AAAA vers AAAA-MM-JJ
|--------------------------------------------------------------------------
*/

function convertDateToIso(
  dateValue: string,
): string | null {
  const parts =
    dateValue.split("/");

  if (
    parts.length !== 3
  ) {
    return null;
  }

  const [
    dayValue,
    monthValue,
    yearValue,
  ] = parts;

  const day =
    Number.parseInt(
      dayValue,
      10,
    );

  const month =
    Number.parseInt(
      monthValue,
      10,
    );

  const year =
    Number.parseInt(
      yearValue,
      10,
    );

  if (
    !isValidDate(
      day,
      month,
      year,
    )
  ) {
    return null;
  }

  return [
    String(year).padStart(
      4,
      "0",
    ),

    String(month).padStart(
      2,
      "0",
    ),

    String(day).padStart(
      2,
      "0",
    ),
  ].join("-");
}

/*
|--------------------------------------------------------------------------
| Format automatique de la date
|--------------------------------------------------------------------------
*/

function formatBirthDateInput(
  inputValue: string,
): string {
  let value =
    inputValue
      .replace(
        /\D/g,
        "",
      )
      .slice(
        0,
        8,
      );

  if (
    value.length > 4
  ) {
    value =
      `${value.slice(
        0,
        2,
      )}/${value.slice(
        2,
        4,
      )}/${value.slice(
        4,
      )}`;
  } else if (
    value.length > 2
  ) {
    value =
      `${value.slice(
        0,
        2,
      )}/${value.slice(
        2,
      )}`;
  }

  return value;
}

/*
|--------------------------------------------------------------------------
| Formulaire de commande
|--------------------------------------------------------------------------
*/

export default function HoroscopeDailyCheckoutForm() {
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
    useState(
      "Canada",
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
  | Recherche de la ville de naissance
  |--------------------------------------------------------------------------
  */

  async function geocodeBirthPlace(
    city: string,
    country: string,
  ): Promise<GeocodeLocation> {
    const cleanCity =
      city.trim();

    const cleanCountry =
      country.trim();

    const query =
      [
        cleanCity,
        cleanCountry,
      ]
        .filter(Boolean)
        .join(", ");

    const response =
      await fetch(
        `/api/geocode?city=${encodeURIComponent(
          query,
        )}`,
        {
          method:
            "GET",

          cache:
            "no-store",
        },
      );

    const data =
      (await response
        .json()
        .catch(
          () => null,
        )) as
        | GeocodeResponse
        | null;

    if (
      !response.ok ||
      !data?.ok ||
      !data.result
    ) {
      throw new Error(
        data?.detail ||
          data?.error ||
          "Ville introuvable. Vérifiez le nom de la ville et le pays.",
      );
    }

    const latitude =
      Number(
        data.result.latitude,
      );

    const longitude =
      Number(
        data.result.longitude,
      );

    if (
      !Number.isFinite(
        latitude,
      ) ||
      !Number.isFinite(
        longitude,
      )
    ) {
      throw new Error(
        "Les coordonnées reçues pour cette ville sont invalides.",
      );
    }

    return {
      city:
        data.result.city?.trim() ||
        data.result.name?.trim() ||
        cleanCity,

      country:
        data.result.country?.trim() ||
        data.result.countryName?.trim() ||
        cleanCountry,

      latitude:
        String(latitude),

      longitude:
        String(longitude),

      timezone:
        data.result.timezone?.trim() ||
        data.result.timeZone?.trim() ||
        "",
    };
  }

  /*
  |--------------------------------------------------------------------------
  | Envoi vers Stripe
  |--------------------------------------------------------------------------
  */

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");

    const cleanFirstName =
      firstName.trim();

    const cleanCity =
      birthCity.trim();

    const cleanCountry =
      birthCountry.trim();

    /*
    |--------------------------------------------------------------------------
    | Validation de la date
    |--------------------------------------------------------------------------
    */

    if (
      !birthDate
    ) {
      setError(
        "Veuillez entrer votre date de naissance.",
      );

      return;
    }

    const isoBirthDate =
      convertDateToIso(
        birthDate,
      );

    if (
      !isoBirthDate
    ) {
      setError(
        "La date de naissance est invalide. Utilisez le format JJ/MM/AAAA.",
      );

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | Validation du lieu
    |--------------------------------------------------------------------------
    */

    if (
      !cleanCity
    ) {
      setError(
        "Veuillez entrer votre ville de naissance.",
      );

      return;
    }

    if (
      !cleanCountry
    ) {
      setError(
        "Veuillez entrer votre pays de naissance.",
      );

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | Heure par défaut
    |--------------------------------------------------------------------------
    */

    const effectiveBirthTime =
      birthTime ||
      "12:00";

    setLoading(true);

    try {
      /*
      |--------------------------------------------------------------------------
      | Géocodage
      |--------------------------------------------------------------------------
      */

      const location =
        await geocodeBirthPlace(
          cleanCity,
          cleanCountry,
        );

      /*
      |--------------------------------------------------------------------------
      | Création de la session Stripe
      |--------------------------------------------------------------------------
      */

      const response =
        await fetch(
          "/api/reports/checkout",
          {
            method:
              "POST",

            headers: {
              "Content-Type":
                __i18n["application_json"],
            },

            body:
              JSON.stringify({
                reportType:
                  "horoscope-daily",

                firstName:
                  cleanFirstName,

                birthDate:
                  isoBirthDate,

                birthTime:
                  effectiveBirthTime,

                birthCity:
                  location.city ||
                  cleanCity,

                birthCountry:
                  location.country ||
                  cleanCountry,

                latitude:
                  location.latitude,

                longitude:
                  location.longitude,

                timezone:
                  location.timezone,
              }),
          },
        );

      const data =
        (await response
          .json()
          .catch(
            () => null,
          )) as
          | CheckoutResponse
          | null;

      if (
        !response.ok ||
        !data?.url
      ) {
        throw new Error(
          data?.detail ||
            data?.error ||
            "La session de paiement n’a pas pu être créée.",
        );
      }

      /*
      |--------------------------------------------------------------------------
      | Redirection vers Stripe
      |--------------------------------------------------------------------------
      */

      window.location.assign(
        data.url,
      );
    } catch (
      caughtError: unknown
    ) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Une erreur est survenue. Veuillez réessayer.",
      );

      setLoading(false);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Affichage
  |--------------------------------------------------------------------------
  */

  return (
    <div className="horoscope-daily-form-card">
      <div className="horoscope-daily-form-heading">
        <span className="premium-section-kicker">
          {__i18n["votre_naissance"]}</span>

        <h2>
          {__i18n["creez_votre_horoscope_premium_du_jour"]}</h2>

        <p>
          {__i18n["votre_horoscope_est_calcule_a_partir_de_votre_date_de_votre"]}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="horoscope-daily-form"
        noValidate
      >
        {/*
        |--------------------------------------------------------------------------
        | Prénom
        |--------------------------------------------------------------------------
        */}

        <div className="horoscope-daily-field">
          <label htmlFor="firstName">
            {__i18n["prenom"]}{" "}

            <span>
              {__i18n["optionnel"]}</span>
          </label>

          <input
            id="firstName"
            name="firstName"
            type="text"
            value={firstName}
            onChange={(
              event,
            ) =>
              setFirstName(
                event.target.value,
              )
            }
            autoComplete="given-name"
            placeholder={__i18n["votre_prenom"]}
          />
        </div>

        {/*
        |--------------------------------------------------------------------------
        | Date et heure
        |--------------------------------------------------------------------------
        */}

        <div className="horoscope-daily-form-grid">
          <div className="horoscope-daily-field">
            <label htmlFor="birthDate">
              {__i18n["date_de_naissance"]}</label>

            <input
              id="birthDate"
              name="birthDate"
              type="text"
              inputMode="numeric"
              value={birthDate}
              onChange={(
                event,
              ) =>
                setBirthDate(
                  formatBirthDateInput(
                    event.target.value,
                  ),
                )
              }
              placeholder={__i18n["jj_mm_aaaa"]}
              maxLength={10}
              autoComplete="bday"
              required
            />
          </div>

          <div className="horoscope-daily-field">
            <label htmlFor="birthTime">
              {__i18n["heure_de_naissance"]}</label>

            <input
              id="birthTime"
              name="birthTime"
              type="time"
              value={birthTime}
              onChange={(
                event,
              ) =>
                setBirthTime(
                  event.target.value,
                )
              }
              autoComplete="off"
            />

            <small>
              {__i18n["optionnelle_mais_recommandee"]}</small>
          </div>
        </div>

        {/*
        |--------------------------------------------------------------------------
        | Ville et pays
        |--------------------------------------------------------------------------
        */}

        <div className="horoscope-daily-form-grid">
          <div className="horoscope-daily-field">
            <label htmlFor="birthCity">
              {__i18n["ville_de_naissance"]}</label>

            <input
              id="birthCity"
              name="birthCity"
              type="text"
              value={birthCity}
              onChange={(
                event,
              ) =>
                setBirthCity(
                  event.target.value,
                )
              }
              autoComplete="off"
              placeholder={__i18n["ex_quebec"]}
              required
            />
          </div>

          <div className="horoscope-daily-field">
            <label htmlFor="birthCountry">
              {__i18n["pays_de_naissance"]}</label>

            <input
              id="birthCountry"
              name="birthCountry"
              type="text"
              value={birthCountry}
              onChange={(
                event,
              ) =>
                setBirthCountry(
                  event.target.value,
                )
              }
              autoComplete="country-name"
              placeholder={__i18n["ex_canada"]}
              required
            />
          </div>
        </div>

        {/*
        |--------------------------------------------------------------------------
        | Erreur
        |--------------------------------------------------------------------------
        */}

        {error ? (
          <div
            className="horoscope-daily-error"
            role="alert"
          >
            {error}
          </div>
        ) : null}

        {/*
        |--------------------------------------------------------------------------
        | Avis de conservation du PDF
        |--------------------------------------------------------------------------
        */}

        <div className="horoscope-daily-download-notice">
          <span aria-hidden="true">
            📥
          </span>

          <p>
            <strong>
              {__i18n["important"]}</strong>{" "}
            {__i18n["telechargez_votre_rapport_des_qu_il_est_genere_et_conservez"]}</p>
        </div>

        {/*
        |--------------------------------------------------------------------------
        | Bouton de commande
        |--------------------------------------------------------------------------
        */}

        <button
          type="submit"
          className="premium-primary-button horoscope-daily-submit"
          disabled={loading}
        >
          {loading
            ? "Préparation du paiement…"
            : "Créer mon horoscope — 9,99 $ US"}
        </button>

        <p className="horoscope-daily-secure-note">
          {__i18n["paiement_securise_par_stripe"]}{" · "}
          {__i18n["pdf_disponible_immediatement_apres_le_paiement"]}</p>
      </form>
    </div>
  );
}
