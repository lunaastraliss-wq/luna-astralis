"use client";

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
        <div className="natal-share-brand">🌙 Luna Astralis</div>

        <h2>{title}</h2>

        <p>
          {birthDate}
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
        <strong>Votre thème astral est unique.</strong>
        <span>Explorez-en toute la richesse sur Luna Astralis.</span>
      </div>

      <div className="natal-share-site">www.luna-astralis.app</div>
    </div>
  );
}
