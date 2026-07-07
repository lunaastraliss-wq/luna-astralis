"use client";

import { useState } from "react";
import NatalChartWheel from "./NatalChartWheel";

const PLANET_FR: Record<string, string> = {
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
  Chiron: "Chiron",
  "North Node": "Nœud Nord",
  "South Node": "Nœud Sud",
  Lilith: "Lilith",
};

const SIGN_FR: Record<string, string> = {
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
};

function translateFormatted(formatted: string): string {
  if (!formatted) return formatted;

  let out = formatted;

  Object.keys(SIGN_FR).forEach((en) => {
    out = out.replace(new RegExp(en, "g"), SIGN_FR[en]);
  });

  return out;
}

function translatePlanetName(name: string): string {
  return PLANET_FR[name] || name;
}

export default function NatalChartForm() {
  const [firstName, setFirstName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthCity, setBirthCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setResult(null);

    if (!birthDate || !birthCity) {
      setError("La date de naissance et la ville sont obligatoires.");
      return;
    }

    setLoading(true);

    try {
      const geoRes = await fetch(
        "/api/geocode?city=" + encodeURIComponent(birthCity)
      );

      const geoData = await geoRes.json();

      if (!geoData?.ok || !geoData?.result) {
        setError(
          "Ville introuvable. Essaie avec le nom complet, par exemple : Montréal, Canada."
        );
        setLoading(false);
        return;
      }

      const { latitude, longitude } = geoData.result;

      const [yearStr, monthStr, dayStr] = birthDate.split("-");
      const [hourStr, minuteStr] = (birthTime || "12:00").split(":");

      const chartRes = await fetch("/api/natal-chart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          year: parseInt(yearStr, 10),
          month: parseInt(monthStr, 10),
          day: parseInt(dayStr, 10),
          hour: parseInt(hourStr, 10),
          minute: parseInt(minuteStr, 10),
          latitude,
          longitude,
          timezoneOffset: 0,
        }),
      });

      const chartData = await chartRes.json();

      if (!chartData?.ok) {
        setError(chartData?.error || "Erreur lors du calcul du thème.");
        setLoading(false);
        return;
      }

      setResult(chartData.chart);
    } catch (err: any) {
      setError("Une erreur est survenue. Réessaie.");
    } finally {
      setLoading(false);
    }
  };

  const planets = result?.planets || [];
  const angles = result?.angles || {};

  return (
    <div className="natal-form-wrap">
      <form onSubmit={handleSubmit} className="natal-form">
        <label>
          Prénom (optionnel)
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Ton prénom"
          />
        </label>

        <label>
          Date de naissance
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </label>

        <label>
          Heure de naissance (optionnelle, mais recommandée)
          <input
            type="time"
            value={birthTime}
            onChange={(e) => setBirthTime(e.target.value)}
          />
        </label>

        <label>
          Ville de naissance
          <input
            type="text"
            value={birthCity}
            onChange={(e) => setBirthCity(e.target.value)}
            placeholder="Ex. : Montréal, Canada"
            required
          />
        </label>

        <button
          type="submit"
          className="btn btn-small btn-primary"
          disabled={loading}
        >
          {loading ? "Calcul en cours..." : "Créer ma carte du ciel"}
        </button>

        {error && <p className="natal-error">{error}</p>}
      </form>

      {result && (
        <div className="natal-result">
          <h3>
            {firstName
              ? `Le thème astral de ${firstName}`
              : "Ta carte du ciel"}
          </h3>

          <NatalChartWheel
            planets={planets}
            houses={result?.houses}
            ascendantLongitude={angles?.ascendant?.longitude}
            midheavenLongitude={angles?.midheaven?.longitude}
            ascendantFormatted={translateFormatted(
              angles?.ascendant?.formatted || ""
            )}
            midheavenFormatted={translateFormatted(
              angles?.midheaven?.formatted || ""
            )}
            size={420}
          />

          <div className="natal-angles">
            {angles?.ascendant && (
              <div className="natal-angle-item">
                <span className="natal-label">Ascendant</span>
                <span className="natal-value">
                  {translateFormatted(angles.ascendant.formatted)}
                </span>
              </div>
            )}

            {angles?.midheaven && (
              <div className="natal-angle-item">
                <span className="natal-label">Milieu du ciel</span>
                <span className="natal-value">
                  {translateFormatted(angles.midheaven.formatted)}
                </span>
              </div>
            )}
          </div>

          <div className="natal-planets">
            {planets.map((p: any, i: number) => (
              <div key={i} className="natal-planet-row">
                <span className="natal-planet-name">
                  {translatePlanetName(p.name)}
                </span>

                <span className="natal-planet-pos">
                  {translateFormatted(p.formatted)}
                </span>

                {p.isRetrograde && <span className="natal-retro">R</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
