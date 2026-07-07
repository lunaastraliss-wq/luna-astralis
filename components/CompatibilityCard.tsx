"use client";

import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { SIGNS, getCompatibility, SignKey } from "@/lib/compatibility";

function getLevel(score: number) {
  if (score >= 90) return "Union exceptionnelle";
  if (score >= 80) return "Excellente compatibilité";
  if (score >= 65) return "Belle harmonie";
  if (score >= 50) return "Équilibre à construire";
  return "Relation pleine de défis";
}

export default function CompatibilityCard() {
  const [signA, setSignA] = useState<SignKey>("belier");
  const [signB, setSignB] = useState<SignKey>("lion");
  const [showCard, setShowCard] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const result = getCompatibility(signA, signB);
  const level = getLevel(result.score);

  const captureCard = async () => {
    if (!cardRef.current) return null;

    await document.fonts.ready;

    return html2canvas(cardRef.current, {
      backgroundColor: "#050816",
      scale: 2,
      useCORS: true,
      logging: false,
      onclone: (clonedDoc) => {
        const wrap = clonedDoc.querySelector(
          ".compat-result-score-wrap"
        ) as HTMLElement | null;

        const score = clonedDoc.querySelector(
          ".compat-result-score"
        ) as HTMLElement | null;

        if (wrap && score) {
          wrap.style.position = "relative";
          wrap.style.display = "block";

          score.style.position = "absolute";
          score.style.left = "50%";
          score.style.top = "50%";
          score.style.transform = "translate(-50%, -50%)";
          score.style.width = "max-content";
          score.style.height = "auto";
          score.style.display = "block";
          score.style.letterSpacing = "0";
          score.style.textAlign = "center";
        }
      },
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
          <div ref={cardRef} className="compat-result-card">
            <div className="compat-result-brand">Luna Astralis</div>

            <div className="compat-result-signs">
              <div>
                <strong className="compat-result-name">
                  {result.signA.label}
                </strong>
              </div>

              <div className="compat-result-love">❤️</div>

              <div>
                <strong className="compat-result-name">
                  {result.signB.label}
                </strong>
              </div>
            </div>

            <div className="compat-result-score-wrap">
              <div className="compat-result-score">{result.score}%</div>
            </div>

            <h3>{level}</h3>

            <div className="compat-result-analysis">
              <div>✨ Analyse</div>
              <p>{result.text}</p>
            </div>

            <div className="compat-result-footer">luna-astralis.app</div>
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
