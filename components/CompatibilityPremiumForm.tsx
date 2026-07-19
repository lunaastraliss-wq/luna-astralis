"use client";

import { useState } from "react";

type PersonForm = {
  firstName: string;
  birthDate: string;
  birthTime: string;
  birthCity: string;
  birthCountry: string;
  latitude: number | null;
  longitude: number | null;
};

type CompatibilityPayload = {
  person1: PersonForm;
  person2: PersonForm;
};

const EMPTY_PERSON: PersonForm = {
  firstName: "",
  birthDate: "",
  birthTime: "",
  birthCity: "",
  birthCountry: "",
  latitude: null,
  longitude: null,
};

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
  };
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
          <span>Prénom</span>

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
          <span>Date de naissance</span>

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
            placeholder="JJ/MM/AAAA"
            maxLength={10}
            autoComplete={
              number === 1 ? "bday" : "off"
            }
            required
          />
        </label>

        <label
          className="compatibility-form-field"
          htmlFor={`${prefix}-birth-time`}
        >
          <span>Heure de naissance</span>

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
            L’heure exacte permet de calculer l’Ascendant
            et les maisons.
          </small>
        </label>

        <label
          className="compatibility-form-field"
          htmlFor={`${prefix}-birth-city`}
        >
          <span>Ville de naissance</span>

          <input
            id={`${prefix}-birth-city`}
            type="text"
            value={person.birthCity}
            onChange={(event) =>
              onChange("birthCity", event.target.value)
            }
            placeholder="Ex. : Québec"
            autoComplete="off"
            required
          />
        </label>

        <label
          className="compatibility-form-field"
          htmlFor={`${prefix}-birth-country`}
        >
          <span>Pays de naissance</span>

          <input
            id={`${prefix}-birth-country`}
            type="text"
            value={person.birthCountry}
            onChange={(event) =>
              onChange("birthCountry", event.target.value)
            }
            placeholder="Ex. : Canada"
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
  const [person1, setPerson1] =
    useState<PersonForm>(EMPTY_PERSON);

  const [person2, setPerson2] =
    useState<PersonForm>(EMPTY_PERSON);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);

  const updatePerson1 = (
    field: keyof PersonForm,
    value: string
  ) => {
    setValidated(false);

    setPerson1((current) => ({
      ...current,
      [field]: value,
      latitude: null,
      longitude: null,
    }));
  };

  const updatePerson2 = (
    field: keyof PersonForm,
    value: string
  ) => {
    setValidated(false);

    setPerson2((current) => ({
      ...current,
      [field]: value,
      latitude: null,
      longitude: null,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setValidated(false);

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

      setPerson1(geocodedPerson1);
      setPerson2(geocodedPerson2);

      const compatibilityData: CompatibilityPayload = {
        person1: geocodedPerson1,
        person2: geocodedPerson2,
      };

      sessionStorage.setItem(
        "luna-astralis-compatibility-premium",
        JSON.stringify(compatibilityData)
      );

      setValidated(true);
    } catch (submitError) {
      console.error(
        "Erreur pendant la validation de la compatibilité :",
        submitError
      );

      setError(
        submitError instanceof Error
          ? submitError.message
          : "Une erreur est survenue. Vérifie les informations et réessaie."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="compatibility-premium-form-wrap">
      <div className="compatibility-premium-form-intro">
        <span>Votre rapport personnalisé</span>

        <h3>
          Entrez les informations des deux personnes
        </h3>

        <p>
          Ces renseignements permettent de calculer les
          deux thèmes astraux et leurs connexions de
          synastrie.
        </p>
      </div>

      <form
        className="compatibility-premium-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="compatibility-form-persons">
          <PersonFields
            number={1}
            title="Première personne"
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
            title="Deuxième personne"
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

        {validated && (
          <div
            className="compatibility-form-message compatibility-form-success"
            role="status"
          >
            <strong>
              ✓ Les deux lieux de naissance ont été
              trouvés.
            </strong>

            <span>
              Vos informations sont prêtes pour le
              paiement sécurisé.
            </span>
          </div>
        )}

        <div className="compatibility-form-submit-area">
          <button
            className="compatibility-form-submit"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Vérification des informations..."
              : validated
                ? "Informations vérifiées"
                : "Vérifier mes informations"}
          </button>

          <p>
            🔒 Vos informations servent uniquement à
            créer votre rapport astrologique.
          </p>
        </div>
      </form>
    </div>
  );
}
