"use client";

import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { SIGNS, getCompatibility, SignKey } from "@/lib/compatibility";

export default function CompatibilityCard() {
  const [signA, setSignA] = useState<SignKey>("belier");
  const [signB, setSignB] = useState<SignKey>("lion");
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const result = getCompatibility(signA, signB);

  const handleDownload = async () => {
    if (!cardRef.current) return;

    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: "#0b1024",
      scale: 2,
    });

    const link = document.createElement("a");
    link.download = `compatibilite-${result.signA.key}-${result.signB.key}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleShare = async () => {
    if (!cardRef.current) return;

    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: "#0b1024",
      scale: 2,
    });

    canvas.toBlob(async (blob) => {
      if (!blob) return;

      const file = new File([blob], "compatibilite.png", {
        type: "image/png",
      });

      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        try {
          await navigator.share({
            files: [file],
            title: "Ma compatibilité astro - Luna Astralis",
            text: "Découvre ta compatibilité sur luna-astralis.app",
          });
        } catch {
          // Partage annulé par l'utilisateur.
        }
      } else {
        await handleDownload();
      }
    });
  };

  return (
    <div className="compat-wrap">
      <div className="compat-selectors">
        <select
          value={signA}
          onChange={(e) => setSignA(e.target.value as SignKey)}
        >
          {SIGNS.map((s) => (
            <option key={s.key} value={s.key}>
              {s.symbol} {s.label}
            </option>
          ))}
        </select>

        <span className="compat-plus">+</span>

        <select
          value={signB}
          onChange={(e) => setSignB(e.target.value as SignKey)}
        >
          {SIGNS.map((s) => (
            <option key={s.key} value={s.key}>
              {s.symbol} {s.label}
            </option>
          ))}
        </select>

        <button
          type="button"
          className="btn btn-small"
          onClick={() => setShowCard(true)}
        >
          Voir la compatibilité
        </button>
      </div>

      {showCard && (
        <>
          <div ref={cardRef} className="compat-card">
            <div className="compat-card-title">Luna Astralis</div>

            <div className="compat-card-signs">
              {result.signA.symbol} {result.signA.label} +{" "}
              {result.signB.symbol} {result.signB.label}
            </div>

            <div className="compat-card-score">{result.score}%</div>

            <p className="compat-card-text">{result.text}</p>

            <div className="compat-card-footer">luna-astralis.app</div>
          </div>

          <div className="compat-actions">
            <button type="button" className="btn btn-small" onClick={handleShare}>
              Partager
            </button>

            <button
              type="button"
              className="btn btn-small btn-ghost"
              onClick={handleDownload}
            >
              Télécharger
            </button>
          </div>
        </>
      )}
    </div>
  );
}
