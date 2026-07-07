"use client";

import { useState } from "react";

type Props = {
  planets: any[];
  translateFormatted: (value: string) => string;
  translatePlanetName: (value: string) => string;
  getPlanetGlyph: (value: string) => string;
  getSignGlyph: (value?: string) => string;
  getSignName: (value?: string) => string;
};

export default function NatalPlanetDetails({
  planets,
  translateFormatted,
  translatePlanetName,
  getPlanetGlyph,
  getSignGlyph,
  getSignName,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <section className="natal-details">
      <button
        type="button"
        className="natal-details-btn"
        onClick={() => setOpen(!open)}
      >
        {open
          ? "▲ Masquer les positions détaillées"
          : "▼ Voir les positions détaillées des planètes"}
      </button>

      {open && (
        <div className="natal-planets-grid">
          {planets.map((p: any, i: number) => (
            <div key={i} className="natal-planet-card">
              <div className="natal-planet-symbol">
                {getPlanetGlyph(p.name)}
              </div>

              <div className="natal-planet-title">
                {translatePlanetName(p.name)}
              </div>

              <div className="natal-planet-sign">
                <span>{getSignGlyph(p.signName)}</span>
                {getSignName(p.signName)}
              </div>

              <div className="natal-planet-degree">
                {translateFormatted(p.formatted)}

                {p.isRetrograde && (
                  <span className="natal-retro"> R</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
