"use client";




import __i18n from "../i18n/migrated/fr/components/natalsharecard.json";
import NatalChartWheel from "./NatalChartWheel";

type Props = {
  title: string;
  birthDate: string;
  birthTime: string;
  birthCity: string;
  planets: any[];
  houses: any;
  angles: any;
};

function formatDateFR(date: string): string {
  if (!date) return "";

  if (date.includes("/")) return date;

  const [year, month, day] = date.split("-");

  if (!year || !month || !day) return date;

  return `${day}/${month}/${year}`;
}

export default function NatalShareCard({
  title,
  birthDate,
  birthTime,
  birthCity,
  planets,
  houses,
  angles,
}: Props) {
  return (
    <div className="natal-share-card">
      <div className="natal-share-stars" />

      <div className="natal-share-header">
        <div className="natal-share-brand">{__i18n["luna_astralis"]}</div>

        <h2>{title}</h2>

        <p>
          {formatDateFR(birthDate)}
          {birthTime ? ` • ${birthTime}` : ""} • {birthCity}
        </p>
      </div>

      <div className="natal-share-wheel">
        <NatalChartWheel
          planets={planets}
          houses={houses}
          ascendantLongitude={angles?.ascendant?.longitude}
          midheavenLongitude={angles?.midheaven?.longitude}
          size={700}
        />
      </div>

      <div className="natal-share-footer">
        <strong>{__i18n["votre_theme_astral_est_unique"]}</strong>
        <span>{__i18n["explorez_en_toute_la_richesse_sur_luna_astralis"]}</span>
      </div>

      <div className="natal-share-site">www.luna-astralis.app</div>
    </div>
  );
}
