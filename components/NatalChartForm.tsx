"use client";

import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import NatalChartWheel from "./NatalChartWheel";
import NatalShareCard from "./NatalShareCard";
import NatalFreeSummary from "./NatalFreeSummary";
import NatalPlanetDetails from "./NatalPlanetDetails";
import NatalPremiumOffer from "./NatalPremiumOffer";

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
};

const PLANET_GLYPH: Record<string, string> = {
  Sun: "☉",
  Moon: "☽",
  Mercury: "☿",
  Venus: "♀",
  Mars: "♂",
  Jupiter: "♃",
  Saturn: "♄",
  Uranus: "♅",
  Neptune: "♆",
  Pluto: "♇",
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

const SIGN_GLYPH: Record<string, string> = {
  Aries: "♈",
  Taurus: "♉",
  Gemini: "♊",
  Cancer: "♋",
  Leo: "♌",
  Virgo: "♍",
  Libra: "♎",
  Scorpio: "♏",
  Sagittarius: "♐",
  Capricorn: "♑",
  Aquarius: "♒",
  Pisces: "♓",
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

function getPlanetGlyph(name: string): string {
  return PLANET_GLYPH[name] || "";
}

function getSignGlyph(signName?: string): string {
  if (!signName) return "";
  return SIGN_GLYPH[signName] || "";
}

function getSignName(signName?: string): string {
  if (!signName) return "";
  return SIGN_FR[signName] || signName;
}

function formatDateFR(date: string): string {
  if (!date) return "";

  const [day, month, year] = date.split("/");

  if (!year || !month || !day) return date;

  return `${day}/${month}/${year}`;
}

export default function NatalChartForm() {
  const shareRef = useRef<HTMLDivElement | null>(null);

  const [firstName, setFirstName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthCity, setBirthCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
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

    const [dayStr, monthStr, yearStr] = birthDate.split("/");

    if (!dayStr || !monthStr || !yearStr) {
      setError("Entre la date au format JJ/MM/AAAA.");
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
    } catch {
      setError("Une erreur est survenue. Réessaie.");
    } finally {
      setLoading(false);
    }
  };

  const planets = (result?.planets || []).filter((p: any) =>
    MAIN_PLANETS.includes(p.name)
  );

  const angles = result?.angles || {};

  const chartTitle = firstName
    ? `Le thème astral de ${firstName}`
    : "Ta carte du ciel";

  const handleDownload = async () => {
    if (!shareRef.current) return;

    setError("");
    setDownloading(true);

    try {
      const canvas = await html2canvas(shareRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
      });

      const safeName = firstName
        ? firstName.toLowerCase().replace(/[^a-z0-9-]/gi, "-")
        : "luna-astralis";

      const link = document.createElement("a");
      link.download = `carte-du-ciel-${safeName}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch {
      setError("Impossible de télécharger l'image. Réessaie.");
    } finally {
      setDownloading(false);
    }
  };

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
            type="text"
            value={birthDate}
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, "").slice(0, 8);

              if (value.length > 4) {
                value = `${value.slice(0, 2)}/${value.slice(
                  2,
                  4
                )}/${value.slice(4)}`;
              } else if (value.length > 2) {
                value = `${value.slice(0, 2)}/${value.slice(2)}`;
              }

              setBirthDate(value);
            }}
            placeholder="JJ/MM/AAAA"
            maxLength={10}
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
        <>
          <div className="natal-result">
            <h3>{chartTitle}</h3>

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
              size={460}
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

            <button
              type="button"
              className="natal-download-btn"
              onClick={handleDownload}
              disabled={downloading}
            >
              {downloading
                ? "Préparation de l'image..."
                : "📷 Télécharger ma carte du ciel"}
            </button>

            <div className="natal-share-capture-zone">
              <div ref={shareRef}>
                <NatalShareCard
                  title={chartTitle}
                  birthDate={formatDateFR(birthDate)}
                  birthTime={birthTime}
                  birthCity={birthCity}
                  planets={planets}
                  houses={result?.houses}
                  angles={angles}
                />
              </div>
            </div>

            <NatalFreeSummary planets={planets} angles={angles} />
          </div>

          <div className="natal-premium-wide">
            <NatalPremiumOffer firstName={firstName} />
          </div>

          <div className="natal-result">
            <NatalPlanetDetails
              planets={planets}
              translateFormatted={translateFormatted}
              translatePlanetName={translatePlanetName}
              getPlanetGlyph={getPlanetGlyph}
              getSignGlyph={getSignGlyph}
              getSignName={getSignName}
            />
          </div>
        </>
      )}
    </div>
  );
}
