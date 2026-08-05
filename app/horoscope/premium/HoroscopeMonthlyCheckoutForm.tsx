"use client";

import {
  type FormEvent,
  useState,
} from "react";

import {
  useParams,
} from "next/navigation";

import fr from "../../../i18n/migrated/fr/app/horoscope/premium/horoscopemonthlycheckoutform.json";
import en from "../../../i18n/migrated/en/app/horoscope/premium/horoscopemonthlycheckoutform.json";
import es from "../../../i18n/migrated/es/app/horoscope/premium/horoscopemonthlycheckoutform.json";
import de from "../../../i18n/migrated/de/app/horoscope/premium/horoscopemonthlycheckoutform.json";
import it from "../../../i18n/migrated/it/app/horoscope/premium/horoscopemonthlycheckoutform.json";
import pt from "../../../i18n/migrated/pt/app/horoscope/premium/horoscopemonthlycheckoutform.json";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type Locale =
  | "fr"
  | "en"
  | "es"
  | "de"
  | "it"
  | "pt";

type TranslationDictionary =
  Record<string, string>;

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
| Dictionnaires
|--------------------------------------------------------------------------
*/

const DICTIONARIES: Record<
  Locale,
  TranslationDictionary
> = {
  fr,
  en,
  es,
  de,
  it,
  pt,
};

/*
|--------------------------------------------------------------------------
| Locales utilisées pour les noms des mois
|--------------------------------------------------------------------------
*/

const DATE_LOCALES: Record<
  Locale,
  string
> = {
  fr: "fr-CA",
  en: "en-CA",
  es: "es-ES",
  de: "de-DE",
  it: "it-IT",
  pt: "pt-BR",
};

/*
|--------------------------------------------------------------------------
| Textes techniques et messages
|--------------------------------------------------------------------------
*/

const EXTRA_TEXTS = {
  fr: {
    defaultCountry:
      "Canada",

    invalidMonth:
      "Veuillez sélectionner un mois valide.",

    invalidYear:
      "Veuillez sélectionner une année valide.",

    birthDateRequired:
      "Veuillez entrer votre date de naissance.",

    invalidBirthDate:
      "La date de naissance est invalide. Utilisez le format JJ/MM/AAAA.",

    cityRequired:
      "Veuillez entrer votre ville de naissance.",

    countryRequired:
      "Veuillez entrer votre pays de naissance.",

    cityNotFound:
      "Ville introuvable. Vérifiez le nom de la ville et le pays.",

    invalidCoordinates:
      "Les coordonnées reçues pour cette ville sont invalides.",

    checkoutError:
      "La session de paiement n’a pas pu être créée.",

    genericError:
      "Une erreur est survenue. Veuillez réessayer.",

    loading:
      "Préparation du paiement…",

    submit:
      "Créer mon horoscope — 19,99 $ US",
  },

  en: {
    defaultCountry:
      "Canada",

    invalidMonth:
      "Please select a valid month.",

    invalidYear:
      "Please select a valid year.",

    birthDateRequired:
      "Please enter your date of birth.",

    invalidBirthDate:
      "The date of birth is invalid. Use the DD/MM/YYYY format.",

    cityRequired:
      "Please enter your city of birth.",

    countryRequired:
      "Please enter your country of birth.",

    cityNotFound:
      "City not found. Check the city and country names.",

    invalidCoordinates:
      "The coordinates received for this city are invalid.",

    checkoutError:
      "The payment session could not be created.",

    genericError:
      "An error occurred. Please try again.",

    loading:
      "Preparing payment…",

    submit:
      "Create my horoscope — US$19.99",
  },

  es: {
    defaultCountry:
      "Canadá",

    invalidMonth:
      "Selecciona un mes válido.",

    invalidYear:
      "Selecciona un año válido.",

    birthDateRequired:
      "Introduce tu fecha de nacimiento.",

    invalidBirthDate:
      "La fecha de nacimiento no es válida. Utiliza el formato DD/MM/AAAA.",

    cityRequired:
      "Introduce tu ciudad de nacimiento.",

    countryRequired:
      "Introduce tu país de nacimiento.",

    cityNotFound:
      "No se encontró la ciudad. Verifica el nombre de la ciudad y del país.",

    invalidCoordinates:
      "Las coordenadas recibidas para esta ciudad no son válidas.",

    checkoutError:
      "No se pudo crear la sesión de pago.",

    genericError:
      "Se produjo un error. Inténtalo de nuevo.",

    loading:
      "Preparando el pago…",

    submit:
      "Crear mi horóscopo — 19,99 US$",
  },

  de: {
    defaultCountry:
      "Kanada",

    invalidMonth:
      "Bitte wähle einen gültigen Monat aus.",

    invalidYear:
      "Bitte wähle ein gültiges Jahr aus.",

    birthDateRequired:
      "Bitte gib dein Geburtsdatum ein.",

    invalidBirthDate:
      "Das Geburtsdatum ist ungültig. Verwende das Format TT/MM/JJJJ.",

    cityRequired:
      "Bitte gib deinen Geburtsort ein.",

    countryRequired:
      "Bitte gib dein Geburtsland ein.",

    cityNotFound:
      "Die Stadt wurde nicht gefunden. Überprüfe den Namen der Stadt und des Landes.",

    invalidCoordinates:
      "Die empfangenen Koordinaten für diese Stadt sind ungültig.",

    checkoutError:
      "Die Zahlungssitzung konnte nicht erstellt werden.",

    genericError:
      "Ein Fehler ist aufgetreten. Bitte versuche es erneut.",

    loading:
      "Zahlung wird vorbereitet…",

    submit:
      "Mein Horoskop erstellen — 19,99 US$",
  },

  it: {
    defaultCountry:
      "Canada",

    invalidMonth:
      "Seleziona un mese valido.",

    invalidYear:
      "Seleziona un anno valido.",

    birthDateRequired:
      "Inserisci la tua data di nascita.",

    invalidBirthDate:
      "La data di nascita non è valida. Usa il formato GG/MM/AAAA.",

    cityRequired:
      "Inserisci la tua città di nascita.",

    countryRequired:
      "Inserisci il tuo Paese di nascita.",

    cityNotFound:
      "Città non trovata. Verifica il nome della città e del Paese.",

    invalidCoordinates:
      "Le coordinate ricevute per questa città non sono valide.",

    checkoutError:
      "Non è stato possibile creare la sessione di pagamento.",

    genericError:
      "Si è verificato un errore. Riprova.",

    loading:
      "Preparazione del pagamento…",

    submit:
      "Crea il mio oroscopo — 19,99 USD",
  },

  pt: {
    defaultCountry:
      "Canadá",

    invalidMonth:
      "Selecione um mês válido.",

    invalidYear:
      "Selecione um ano válido.",

    birthDateRequired:
      "Informe sua data de nascimento.",

    invalidBirthDate:
      "A data de nascimento é inválida. Use o formato DD/MM/AAAA.",

    cityRequired:
      "Informe sua cidade de nascimento.",

    countryRequired:
      "Informe seu país de nascimento.",

    cityNotFound:
      "Cidade não encontrada. Verifique o nome da cidade e do país.",

    invalidCoordinates:
      "As coordenadas recebidas para esta cidade são inválidas.",

    checkoutError:
      "Não foi possível criar a sessão de pagamento.",

    genericError:
      "Ocorreu um erro. Tente novamente.",

    loading:
      "Preparando o pagamento…",

    submit:
      "Criar meu horóscopo — US$ 19,99",
  },
} satisfies Record<
  Locale,
  Record<string, string>
>;

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

  const date =
    new Date(
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
| Génération des mois traduits
|--------------------------------------------------------------------------
*/

function createMonths(
  locale: Locale,
) {
  return Array.from(
    {
      length:
        12,
    },
    (
      _,
      index,
    ) => {
      const monthNumber =
        index + 1;

      const monthDate =
        new Date(
          Date.UTC(
            2026,
            index,
            1,
          ),
        );

      const rawLabel =
        new Intl.DateTimeFormat(
          DATE_LOCALES[locale],
          {
            month:
              "long",

            timeZone:
              "UTC",
          },
        ).format(
          monthDate,
        );

      const label =
        rawLabel.charAt(0).toUpperCase() +
        rawLabel.slice(1);

      return {
        value:
          monthNumber,

        label,
      };
    },
  );
}

/*
|--------------------------------------------------------------------------
| Formulaire de commande
|--------------------------------------------------------------------------
*/

export default function HoroscopeMonthlyCheckoutForm() {
  const params =
    useParams<{
      locale?: string;
    }>();

  const rawLocale =
    params?.locale;

  const locale: Locale =
    rawLocale === "en" ||
    rawLocale === "es" ||
    rawLocale === "de" ||
    rawLocale === "it" ||
    rawLocale === "pt"
      ? rawLocale
      : "fr";

  const text =
    DICTIONARIES[locale];

  const extra =
    EXTRA_TEXTS[locale];

  const months =
    createMonths(
      locale,
    );

  const now =
    new Date();

  const currentMonth =
    now.getMonth() + 1;

  const currentYear =
    now.getFullYear();

  const availableYears = [
    currentYear,
    currentYear + 1,
    currentYear + 2,
  ];

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
      extra.defaultCountry,
    );

  const [
    reportMonth,
    setReportMonth,
  ] =
    useState(
      String(
        currentMonth,
      ),
    );

  const [
    reportYear,
    setReportYear,
  ] =
    useState(
      String(
        currentYear,
      ),
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
      (
        await response
          .json()
          .catch(
            () => null,
          )
      ) as
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
          extra.cityNotFound,
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
        extra.invalidCoordinates,
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
    event:
      FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");

    const cleanFirstName =
      firstName.trim();

    const cleanCity =
      birthCity.trim();

    const cleanCountry =
      birthCountry.trim();

    const month =
      Number(
        reportMonth,
      );

    const year =
      Number(
        reportYear,
      );

    /*
    |--------------------------------------------------------------------------
    | Validation de la période
    |--------------------------------------------------------------------------
    */

    if (
      !Number.isInteger(
        month,
      ) ||
      month < 1 ||
      month > 12
    ) {
      setError(
        extra.invalidMonth,
      );

      return;
    }

    if (
      !Number.isInteger(
        year,
      ) ||
      year < currentYear ||
      year > currentYear + 2
    ) {
      setError(
        extra.invalidYear,
      );

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | Validation de la naissance
    |--------------------------------------------------------------------------
    */

    if (
      !birthDate
    ) {
      setError(
        extra.birthDateRequired,
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
        extra.invalidBirthDate,
      );

      return;
    }

    if (
      !cleanCity
    ) {
      setError(
        extra.cityRequired,
      );

      return;
    }

    if (
      !cleanCountry
    ) {
      setError(
        extra.countryRequired,
      );

      return;
    }

    const effectiveBirthTime =
      birthTime ||
      "12:00";

    setLoading(true);

    try {
      const location =
        await geocodeBirthPlace(
          cleanCity,
          cleanCountry,
        );

      const response =
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
                reportType:
                  "horoscope-month",

                locale,

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

                month,

                year,
              }),
          },
        );

      const data =
        (
          await response
            .json()
            .catch(
              () => null,
            )
        ) as
          | CheckoutResponse
          | null;

      if (
        !response.ok ||
        !data?.url
      ) {
        throw new Error(
          data?.detail ||
            data?.error ||
            extra.checkoutError,
        );
      }

      window.location.assign(
        data.url,
      );
    } catch (
      caughtError: unknown
    ) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : extra.genericError,
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
          {
            text[
              "votre_mois_personnalise"
            ]
          }
        </span>

        <h2>
          {
            text[
              "creez_votre_horoscope_premium_du_mois"
            ]
          }
        </h2>

        <p>
          {
            text[
              "selectionnez_le_mois_a_analyser_puis_entrez_votre_date_votre"
            ]
          }
        </p>
      </div>

      <form
        onSubmit={
          handleSubmit
        }
        className="horoscope-daily-form"
        noValidate
      >
        {/*
        |--------------------------------------------------------------------------
        | Mois et année
        |--------------------------------------------------------------------------
        */}

        <div className="horoscope-daily-form-grid">
          <div className="horoscope-daily-field">
            <label htmlFor="reportMonth">
              {
                text[
                  "mois_du_rapport"
                ]
              }
            </label>

            <select
              id="reportMonth"
              name="reportMonth"
              value={
                reportMonth
              }
              onChange={(
                event,
              ) =>
                setReportMonth(
                  event.target.value,
                )
              }
              required
            >
              {months.map(
                (
                  month,
                ) => (
                  <option
                    key={
                      month.value
                    }
                    value={
                      month.value
                    }
                  >
                    {
                      month.label
                    }
                  </option>
                ),
              )}
            </select>
          </div>

          <div className="horoscope-daily-field">
            <label htmlFor="reportYear">
              {
                text[
                  "annee_du_rapport"
                ]
              }
            </label>

            <select
              id="reportYear"
              name="reportYear"
              value={
                reportYear
              }
              onChange={(
                event,
              ) =>
                setReportYear(
                  event.target.value,
                )
              }
              required
            >
              {availableYears.map(
                (
                  year,
                ) => (
                  <option
                    key={
                      year
                    }
                    value={
                      year
                    }
                  >
                    {year}
                  </option>
                ),
              )}
            </select>
          </div>
        </div>

        {/*
        |--------------------------------------------------------------------------
        | Prénom
        |--------------------------------------------------------------------------
        */}

        <div className="horoscope-daily-field">
          <label htmlFor="monthlyFirstName">
            {
              text[
                "prenom"
              ]
            }{" "}

            <span>
              {
                text[
                  "optionnel"
                ]
              }
            </span>
          </label>

          <input
            id="monthlyFirstName"
            name="firstName"
            type="text"
            value={
              firstName
            }
            onChange={(
              event,
            ) =>
              setFirstName(
                event.target.value,
              )
            }
            autoComplete="given-name"
            placeholder={
              text[
                "votre_prenom"
              ]
            }
          />
        </div>

        {/*
        |--------------------------------------------------------------------------
        | Date et heure de naissance
        |--------------------------------------------------------------------------
        */}

        <div className="horoscope-daily-form-grid">
          <div className="horoscope-daily-field">
            <label htmlFor="monthlyBirthDate">
              {
                text[
                  "date_de_naissance"
                ]
              }
            </label>

            <input
              id="monthlyBirthDate"
              name="birthDate"
              type="text"
              inputMode="numeric"
              value={
                birthDate
              }
              onChange={(
                event,
              ) =>
                setBirthDate(
                  formatBirthDateInput(
                    event.target.value,
                  ),
                )
              }
              placeholder={
                text[
                  "jj_mm_aaaa"
                ]
              }
              maxLength={
                10
              }
              autoComplete="bday"
              required
            />
          </div>

          <div className="horoscope-daily-field">
            <label htmlFor="monthlyBirthTime">
              {
                text[
                  "heure_de_naissance"
                ]
              }
            </label>

            <input
              id="monthlyBirthTime"
              name="birthTime"
              type="time"
              value={
                birthTime
              }
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
              {
                text[
                  "optionnelle_mais_recommandee"
                ]
              }
            </small>
          </div>
        </div>

        {/*
        |--------------------------------------------------------------------------
        | Ville et pays
        |--------------------------------------------------------------------------
        */}

        <div className="horoscope-daily-form-grid">
          <div className="horoscope-daily-field">
            <label htmlFor="monthlyBirthCity">
              {
                text[
                  "ville_de_naissance"
                ]
              }
            </label>

            <input
              id="monthlyBirthCity"
              name="birthCity"
              type="text"
              value={
                birthCity
              }
              onChange={(
                event,
              ) =>
                setBirthCity(
                  event.target.value,
                )
              }
              autoComplete="off"
              placeholder={
                text[
                  "ex_quebec"
                ]
              }
              required
            />
          </div>

          <div className="horoscope-daily-field">
            <label htmlFor="monthlyBirthCountry">
              {
                text[
                  "pays_de_naissance"
                ]
              }
            </label>

            <input
              id="monthlyBirthCountry"
              name="birthCountry"
              type="text"
              value={
                birthCountry
              }
              onChange={(
                event,
              ) =>
                setBirthCountry(
                  event.target.value,
                )
              }
              autoComplete="country-name"
              placeholder={
                text[
                  "ex_canada"
                ]
              }
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
        | Avis PDF
        |--------------------------------------------------------------------------
        */}

        <div className="horoscope-daily-download-notice">
          <span aria-hidden="true">
            📥
          </span>

          <p>
            <strong>
              {
                text[
                  "important"
                ]
              }
            </strong>{" "}

            {
              text[
                "telechargez_votre_rapport_des_qu_il_est_genere_et_conservez"
              ]
            }
          </p>
        </div>

        {/*
        |--------------------------------------------------------------------------
        | Bouton
        |--------------------------------------------------------------------------
        */}

        <button
          type="submit"
          className="premium-primary-button horoscope-daily-submit"
          disabled={
            loading
          }
        >
          {
            loading
              ? extra.loading
              : extra.submit
          }
        </button>

        <p className="horoscope-daily-secure-note">
          {
            text[
              "paiement_securise_par_stripe"
            ]
          }

          {" · "}

          {
            text[
              "pdf_disponible_immediatement_apres_le_paiement"
            ]
          }
        </p>
      </form>
    </div>
  );
}
