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
      <div className="natal-share-header">
        <div className="natal-share-brand">Luna Astralis</div>
        <h2>{title}</h2>
        <p>
          {birthDate}
          {birthTime ? ` • ${birthTime}` : ""} • {birthCity}
        </p>
      </div>

      <NatalChartWheel
        planets={planets}
        houses={houses}
        ascendantLongitude={angles?.ascendant?.longitude}
        midheavenLongitude={angles?.midheaven?.longitude}
        size={620}
      />

      <div className="natal-share-footer">
        Ta carte du ciel révèle les grandes lignes de ton énergie astrale.
      </div>
    </div>
  );
}
