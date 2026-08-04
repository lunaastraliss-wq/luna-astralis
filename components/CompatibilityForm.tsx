"use client";



import __i18n from "../i18n/migrated/fr/components/compatibilityform.json";
import { useState } from "react";

import NatalChartWheel from "./NatalChartWheel";

type BirthPersonForm = {
  firstName: string;
  birthDate: string;
  birthTime: string;
  birthCity: string;
};

type CalculatedPerson = BirthPersonForm & {
  latitude: number;
  longitude: number;
  chart: any;
};

const EMPTY_PERSON: BirthPersonForm = {
  firstName: "",
  birthDate: "",
  birthTime: "",
  birthCity: "",
};

function formatBirthDate(value: string): string {
  let cleanValue = value.replace(/\D/g, "").slice(0, 8);

  if (cleanValue.length > 4) {
    cleanValue = `${cleanValue.slice(0, 2)}/${cleanValue.slice(
      2,
      4
    )}/${cleanValue.slice(4)}`;
  } else if (cleanValue.length > 2) {
    cleanValue = `${cleanValue.slice(0, 2)}/${cleanValue.slice(2)}`;
  }

  return cleanValue;
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

function isValidTime(hour: number, minute: number): boolean {
  return (
    Number.isInteger(hour) &&
    Number.isInteger(minute) &&
    hour >= 0 &&
    hour <= 23 &&
    minute >= 0 &&
    minute <= 59
  );
}

function translateFormatted(value: string): string {
  if (!value) return "";

  const signs: Record<string, string> = {
    Aries: __i18n["belier"],
    Taurus: "Taureau",
    Gemini: __i18n["gemeaux"],
    Cancer: "Cancer",
    Leo: "Lion",
    Virgo: "Vierge",
    Libra: "Balance",
    Scorpio: "Scorpion",
    Sagittarius: "Sagittaire",
    Capricorn: "Capricorne",
    Aquarius: "Verseau",
    Pisces: "Poissons",
  };

  let translated = value;

  Object.entries(signs).forEach(([english, french]) => {
    translated = translated.split(english).join(french);
  });

  return translated;
}

async function calculatePerson(
  person: BirthPersonForm
): Promise<CalculatedPerson> {
  const cleanCity = person.birthCity.trim();

  if (!person.birthDate || !cleanCity) {
    throw new Error(
      "La date et la ville de naissance sont obligatoires pour les deux personnes."
    );
  }

  const dateParts = person.birthDate.split("/");

  if (dateParts.length !== 3) {
    throw new Error(
      "Entre les dates de naissance au format JJ/MM/AAAA."
    );
  }

  const [dayString, monthString, yearString] = dateParts;

  const day = Number.parseInt(dayString, 10);
  const month = Number.parseInt(monthString, 10);
  const year = Number.parseInt(yearString, 10);

  if (!isValidDate(day, month, year)) {
    throw new Error(
      `La date de naissance de ${
        person.firstName.trim() || "l’une des personnes"
      } est invalide.`
    );
  }

  const effectiveBirthTime = person.birthTime || "12:00";
  const [hourString, minuteString] =
    effectiveBirthTime.split(":");

  const hour = Number.parseInt(hourString, 10);
  const minute = Number.parseInt(minuteString, 10);

  if (!isValidTime(hour, minute)) {
    throw new Error(
      `L’heure de naissance de ${
        person.firstName.trim() || "l’une des personnes"
      } est invalide.`
    );
  }

  const geoResponse = await fetch(
    `/api/geocode?city=${encodeURIComponent(cleanCity)}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const geoData = await geoResponse.json();

  if (!geoResponse.ok || !geoData?.ok || !geoData?.result) {
    throw new Error(
      geoData?.error ||
        `La ville « ${cleanCity} » est introuvable.`
    );
  }

  const latitude = Number(geoData.result.latitude);
  const longitude = Number(geoData.result.longitude);

  if (
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude)
  ) {
    throw new Error(
      `Les coordonnées de la ville « ${cleanCity} » sont invalides.`
    );
  }

  const chartResponse = await fetch("/api/natal-chart", {
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
      latitude,
      longitude,
    }),
  });

  const chartData = await chartResponse.json();

  if (
    !chartResponse.ok ||
    !chartData?.ok ||
    !chartData?.chart
  ) {
    throw new Error(
      chartData?.error ||
        "Une erreur est survenue pendant le calcul astrologique."
    );
  }

  return {
    ...person,
    birthTime: effectiveBirthTime,
    birthCity: cleanCity,
    latitude,
    longitude,
    chart: chartData.chart,
  };
}

type PersonFieldsProps = {
  title: string;
  person: BirthPersonForm;
  onChange: (person: BirthPersonForm) => void;
};

function PersonFields({
  title,
  person,
  onChange,
}: PersonFieldsProps) {
  const updateField = (
    field: keyof BirthPersonForm,
    value: string
  ) => {
    onChange({
      ...person,
      [field]: value,
    });
  };

  return (
    <section className="compat-premium-person">
      <div className="compat-premium-person-heading">
        <span className="compat-premium-person-icon">
          ✦
        </span>

        <h2>{title}</h2>
      </div>

      <div className="compat-premium-fields">
        <label>
          {__i18n["prenom"]}<input
            type="text"
            value={person.firstName}
            onChange={(event) =>
              updateField("firstName", event.target.value)
            }
            placeholder={__i18n["prenom_2"]}
            autoComplete="off"
          />
        </label>

        <label>
          {__i18n["date_de_naissance"]}<input
            type="text"
            inputMode="numeric"
            value={person.birthDate}
            onChange={(event) =>
              updateField(
                "birthDate",
                formatBirthDate(event.target.value)
              )
            }
            placeholder={__i18n["jj_mm_aaaa"]}
            maxLength={10}
            autoComplete="off"
            required
          />
        </label>

        <label>
          {__i18n["heure_de_naissance"]}<input
            type="time"
            value={person.birthTime}
            onChange={(event) =>
              updateField("birthTime", event.target.value)
            }
            autoComplete="off"
          />

          <small>
            {__i18n["facultative_mais_recommandee_pour_calculer_l_ascendant_et_le"]}</small>
        </label>

        <label>
          {__i18n["ville_de_naissance"]}<input
            type="text"
            value={person.birthCity}
            onChange={(event) =>
              updateField("birthCity", event.target.value)
            }
            placeholder={__i18n["ville_de_naissance_2"]}
            autoComplete="off"
            required
          />
        </label>
      </div>
    </section>
  );
}

type PersonResultProps = {
  person: CalculatedPerson;
  fallbackName: string;
};

function PersonResult({
  person,
  fallbackName,
}: PersonResultProps) {
  const planets = person.chart?.planets || [];
  const houses = person.chart?.houses;
  const angles = person.chart?.angles || {};

  const displayName =
    person.firstName.trim() || fallbackName;

  return (
    <article className="compat-premium-result-card">
      <div className="compat-premium-result-heading">
        <span>{__i18n["theme_natal"]}</span>
        <h3>{displayName}</h3>
      </div>

      <NatalChartWheel
        planets={planets}
        houses={houses}
        ascendantLongitude={
          angles?.ascendant?.longitude
        }
        midheavenLongitude={
          angles?.midheaven?.longitude
        }
        ascendantFormatted={translateFormatted(
          angles?.ascendant?.formatted || ""
        )}
        midheavenFormatted={translateFormatted(
          angles?.midheaven?.formatted || ""
        )}
        size={420}
      />

      <div className="compat-premium-angles">
        <div>
          <span>Ascendant</span>

          <strong>
            {translateFormatted(
              angles?.ascendant?.formatted || "Non précisé"
            )}
          </strong>
        </div>

        <div>
          <span>{__i18n["milieu_du_ciel"]}</span>

          <strong>
            {translateFormatted(
              angles?.midheaven?.formatted || "Non précisé"
            )}
          </strong>
        </div>
      </div>
    </article>
  );
}

export default function CompatibilityForm() {
  const [person1, setPerson1] =
    useState<BirthPersonForm>({
      ...EMPTY_PERSON,
    });

  const [person2, setPerson2] =
    useState<BirthPersonForm>({
      ...EMPTY_PERSON,
    });

  const [result1, setResult1] =
    useState<CalculatedPerson | null>(null);

  const [result2, setResult2] =
    useState<CalculatedPerson | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setResult1(null);
    setResult2(null);
    setLoading(true);

    try {
      const [calculatedPerson1, calculatedPerson2] =
        await Promise.all([
          calculatePerson(person1),
          calculatePerson(person2),
        ]);

      setResult1(calculatedPerson1);
      setResult2(calculatedPerson2);
    } catch (submitError) {
      console.error(
        "Erreur pendant le calcul de compatibilité :",
        submitError
      );

      setError(
        submitError instanceof Error
          ? submitError.message
          : "Une erreur est survenue. Réessaie."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="compat-premium-form-wrap">
      <form
        className="compat-premium-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="compat-premium-person-grid">
          <PersonFields
            title={__i18n["premiere_personne"]}
            person={person1}
            onChange={setPerson1}
          />

          <PersonFields
            title={__i18n["deuxieme_personne"]}
            person={person2}
            onChange={setPerson2}
          />
        </div>

        <div className="compat-premium-submit">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading
              ? "Calcul des deux thèmes..."
              : "Calculer notre compatibilité"}
          </button>

          <p>
            {__i18n["les_informations_servent_uniquement_a_calculer_les_deux_them"]}</p>
        </div>

        {error && (
          <p
            className="compat-premium-error"
            role="alert"
          >
            {error}
          </p>
        )}
      </form>

      {result1 && result2 && (
        <section className="compat-premium-results">
          <div className="compat-premium-results-intro">
            <span>{__i18n["vos_deux_themes_astrologiques"]}</span>

            <h2>
              {result1.firstName.trim() || "Personne 1"}
              {" et "}
              {result2.firstName.trim() || "Personne 2"}
            </h2>

            <p>
              {__i18n["les_deux_cartes_ont_ete_calculees_la_prochaine_etape_permett"]}</p>
          </div>

          <div className="compat-premium-result-grid">
            <PersonResult
              person={result1}
              fallbackName="Personne 1"
            />

            <PersonResult
              person={result2}
              fallbackName="Personne 2"
            />
          </div>

          <div className="compat-premium-offer">
            <span className="compat-premium-offer-badge">
              {__i18n["rapport_personnalise"]}</span>

            <h2>
              {__i18n["decouvrez_votre_compatibilite_complete"]}</h2>

            <p>
              {__i18n["obtenez_une_analyse_detaillee_de_vos_emotions_de_votre_commu"]}</p>

            <button
              type="button"
              className="btn btn-primary"
              disabled
            >
              {__i18n["rapport_premium_49_99_us"]}</button>

            <small>
              {__i18n["le_paiement_stripe_sera_branche_a_la_prochaine_etape"]}</small>
          </div>
        </section>
      )}
    </div>
  );
}
