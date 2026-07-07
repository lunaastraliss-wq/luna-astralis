"use client";

import { useState } from "react";

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
        setError("Ville introuvable. Essaie avec le nom complet (ex: Montreal, Canada).");
        setLoading(false);
        return;
      }

      const { latitude, longitude } = geoData.result;

      const [yearStr, monthStr, dayStr] = birthDate.split("-");
      const [hourStr, minuteStr] = (birthTime || "12:00").split(":");

      const chartRes = await fetch("/api/natal-chart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          year: parseInt(yearStr, 10),
          month: parseInt(monthStr, 10),
          day: parseInt(dayStr, 10),
          hour: parseInt(hourStr, 10),
          minute: parseInt(minuteStr, 10),
          latitude: latitude,
          longitude: longitude,
          timezoneOffset: 0,
        }),
      });

      const chartData = await chartRes.json();

      if (!chartData?.ok) {
        setError(chartData?.error || "Erreur lors du calcul du theme.");
        setLoading(false);
        return;
      }

      setResult(chartData.chart);
    } catch (err: any) {
      setError("Une erreur est survenue. Reessaie.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="natal-form-wrap">
      <form onSubmit={handleSubmit} className="natal-form">
        <label>
          Prenom (optionnel)
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Ton prenom"
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
          Heure de naissance (optionnel, mais recommande)
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
            placeholder="Ex: Montreal, Canada"
            required
          />
        </label>

        <button type="submit" className="btn btn-small btn-primary" disabled={loading}>
          {loading ? "Calcul en cours..." : "Creer ma carte du ciel"}
        </button>

        {error ? <p className="natal-error">{error}</p> : null}
      </form>

      {result ? (
        <div className="natal-result">
          <h3>Ta carte du ciel</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      ) : null}
    </div>
  );
}
