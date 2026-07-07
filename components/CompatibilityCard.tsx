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

  const fixScoreForCapture = (clonedDoc: Document) => {
    const scoreEl = clonedDoc.querySelector(".compat-card-score") as HTMLElement | null;

    if (scoreEl) {
      scoreEl.style.background = "none";
      scoreEl.style.webkitTextFillColor = "#ffd782";
      scoreEl.style.color = "#ffd782";
    }
  };

  const captureCard = async () => {
    if (!cardRef.current) return null;

    return html2canvas(cardRef.current, {
      backgroundColor: "#0b1024",
      scale: 2,
      onclone: (clonedDoc) => fixScoreForCapture(clonedDoc),
    });
  };

  const handleDownload = async () => {
    const canvas = await captureCard();
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = `compatibilite-${result.signA.key}-${result.signB.key}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleShare = async () => {
    const canvas = await captureCard();
    if (!canvas) return;

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
          return;
        }
      } else {
        await handleDownload();
      }
    });
  };

  return (
    <div className="compat-wrap">
      <div className="compat-choice-card">
        <div className="compat-choice-top">
          <span>Choisissez deux signes</span>
          <strong>Résultat instantané</strong>
        </div>

        <div className="compat-selectors">
          <label className="compat-field">
            <span>Premier signe</span>
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
          </label>

          <div className="compat-heart">❤️</div>

          <label className="compat-field">
            <span>Deuxième signe</span>
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
          </label>
        </div>

        <button
          type="button"
          className="compat-main-btn"
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
              <span>
                {result.signA.symbol} {result.signA.label}
              </span>

              <strong>❤️</strong>

              <span>
                {result.signB.symbol} {result.signB.label}
              </span>
            </div>

            <div className="compat-score-ring">
              <div className="compat-card-score">{result.score}%</div>
            </div>

            <div className="compat-card-level">
              Compatibilité amoureuse
            </div>

            <p className="compat-card-text">{result.text}</p>

            <div className="compat-card-footer">luna-astralis.app</div>
          </div>

          <div className="compat-actions">
            <button type="button" onClick={handleShare}>
              Partager
            </button>

            <button type="button" onClick={handleDownload}>
              Télécharger
            </button>
          </div>
        </>
      )}
    </div>
  );
}
