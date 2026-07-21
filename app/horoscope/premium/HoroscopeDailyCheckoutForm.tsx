"use client";

import { FormEvent, useState } from "react";

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

function text(value: unknown): string {
  return value == null ? "" : String(value).trim();
}

function firstObject(value: unknown): Record<string, unknown> | null {
  if (Array.isArray(value)) {
    const first = value[0];
    return first && typeof first === "object"
      ? (first as Record<string, unknown>)
      : null;
  }

  if (value && typeof value === "object") {
    const object = value as Record<string, unknown>;

    for (const key of ["results", "locations", "data", "features"]) {
      if (Array.isArray(object[key]) && object[key].length > 0) {
        const first = object[key][0];
        if (first && typeof first === "object") {
          return first as Record<string, unknown>;
        }
      }
    }

    return object;
  }

  return null;
}

function normalizeGeocodeResult(
  value: unknown,
  fallbackCity: string,
  fallbackCountry: string
): GeocodeLocation | null {
  const item = firstObject(value);

  if (!item) {
    return null;
  }

  const properties =
    item.properties && typeof item.properties === "object"
      ? (item.properties as Record<string, unknown>)
      : {};

  const geometry =
    item.geometry && typeof item.geometry === "object"
      ? (item.geometry as Record<string, unknown>)
      : {};

  const coordinates = Array.isArray(geometry.coordinates)
    ? geometry.coordinates
    : [];

  const latitude = text(
    item.latitude ??
      item.lat ??
      properties.latitude ??
      properties.lat ??
      coordinates[1]
  );

  const longitude = text(
    item.longitude ??
      item.lng ??
      item.lon ??
      properties.longitude ??
      properties.lng ??
      properties.lon ??
      coordinates[0]
  );

  if (!latitude || !longitude) {
    return null;
  }

  return {
    city: text(
      item.city ??
        item.name ??
        properties.city ??
        properties.name ??
        fallbackCity
    ),
    country: text(
      item.country ??
        properties.country ??
        properties.country_name ??
        fallbackCountry
    ),
    latitude,
    longitude,
    timezone: text(
      item.timezone ??
        item.time_zone ??
        properties.timezone ??
        properties.time_zone
    ),
  };
}

export default function HoroscopeDailyCheckoutForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthCity, setBirthCity] = useState("");
  const [birthCountry, setBirthCountry] = useState("Canada");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function geocodeBirthPlace(): Promise<GeocodeLocation> {
    const query = [birthCity, birthCountry].filter(Boolean).join(", ");

    const response = await fetch(
      `/api/geocode?q=${encodeURIComponent(query)}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(
        text(data?.detail) ||
          text(data?.error) ||
          "Impossible de trouver ce lieu de naissance."
      );
    }

    const location = normalizeGeocodeResult(
      data,
      birthCity,
      birthCountry
    );

    if (!location) {
      throw new Error(
        "La ville n’a pas pu être localisée. Vérifiez son nom et le pays."
      );
    }

    return location;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!birthDate || !birthTime || !birthCity || !birthCountry) {
      setError(
        "Veuillez remplir la date, l’heure, la ville et le pays de naissance."
      );
      return;
    }

    setLoading(true);

    try {
      const location = await geocodeBirthPlace();

      const response = await fetch("/api/reports/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reportType: "horoscope-daily",
          firstName,
          email,
          birthDate,
          birthTime,
          birthCity: location.city || birthCity,
          birthCountry: location.country || birthCountry,
          latitude: location.latitude,
          longitude: location.longitude,
          timezone: location.timezone,
        }),
      });

      const data = (await response
        .json()
        .catch(() => null)) as CheckoutResponse | null;

      if (!response.ok || !data?.url) {
        throw new Error(
          data?.detail ||
            data?.error ||
            "La session de paiement n’a pas pu être créée."
        );
      }

      window.location.assign(data.url);
    } catch (caughtError: unknown) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Une erreur est survenue. Veuillez réessayer."
      );
      setLoading(false);
    }
  }

  return (
    <div className="horoscope-daily-form-card">
      <div className="horoscope-daily-form-heading">
        <span className="premium-section-kicker">Votre naissance</span>
        <h2>Créez votre horoscope Premium du jour</h2>
        <p>
          Ces informations servent uniquement à calculer votre carte du ciel
          et vos transits personnalisés.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="horoscope-daily-form">
        <div className="horoscope-daily-field">
          <label htmlFor="firstName">Prénom</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            autoComplete="given-name"
            placeholder="Votre prénom"
          />
        </div>

        <div className="horoscope-daily-field">
          <label htmlFor="email">Courriel</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            placeholder="vous@exemple.com"
          />
        </div>

        <div className="horoscope-daily-form-grid">
          <div className="horoscope-daily-field">
            <label htmlFor="birthDate">Date de naissance *</label>
            <input
              id="birthDate"
              name="birthDate"
              type="date"
              value={birthDate}
              onChange={(event) => setBirthDate(event.target.value)}
              required
            />
          </div>

          <div className="horoscope-daily-field">
            <label htmlFor="birthTime">Heure de naissance *</label>
            <input
              id="birthTime"
              name="birthTime"
              type="time"
              value={birthTime}
              onChange={(event) => setBirthTime(event.target.value)}
              required
            />
          </div>
        </div>

        <div className="horoscope-daily-form-grid">
          <div className="horoscope-daily-field">
            <label htmlFor="birthCity">Ville de naissance *</label>
            <input
              id="birthCity"
              name="birthCity"
              type="text"
              value={birthCity}
              onChange={(event) => setBirthCity(event.target.value)}
              autoComplete="address-level2"
              placeholder="Ex. Québec"
              required
            />
          </div>

          <div className="horoscope-daily-field">
            <label htmlFor="birthCountry">Pays de naissance *</label>
            <input
              id="birthCountry"
              name="birthCountry"
              type="text"
              value={birthCountry}
              onChange={(event) => setBirthCountry(event.target.value)}
              autoComplete="country-name"
              placeholder="Ex. Canada"
              required
            />
          </div>
        </div>

        {error ? (
          <div className="horoscope-daily-error" role="alert">
            {error}
          </div>
        ) : null}

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
          🔒 Paiement sécurisé par Stripe · Téléchargement PDF après le paiement
        </p>
      </form>
    </div>
  );
}
