"use client";





import __i18n from "../i18n/migrated/fr/components/compatibilitycard.json";
import Link from "next/link";

import {
  useRef,
  useState,
} from "react";

import html2canvas from "html2canvas";

import {
  SIGNS,
  getCompatibility,
  type SignKey,
} from "@/lib/compatibility";

import {
  COMPATIBILITY_PAGES,
} from "@/lib/compatibility-pages";

/*
|--------------------------------------------------------------------------
| Niveau de compatibilité
|--------------------------------------------------------------------------
*/

function getLevel(
  score: number,
) {
  if (score >= 90) {
    return "Union exceptionnelle";
  }

  if (score >= 80) {
    return "Excellente compatibilité";
  }

  if (score >= 65) {
    return "Belle harmonie";
  }

  if (score >= 50) {
    return "Équilibre à construire";
  }

  return "Relation pleine de défis";
}

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function CompatibilityCard() {
  const [
    signA,
    setSignA,
  ] = useState<SignKey>(
    "belier",
  );

  const [
    signB,
    setSignB,
  ] = useState<SignKey>(
    "lion",
  );

  const [
    showCard,
    setShowCard,
  ] = useState(false);

  const cardRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  /*
  |--------------------------------------------------------------------------
  | Résultat
  |--------------------------------------------------------------------------
  */

  const result =
    getCompatibility(
      signA,
      signB,
    );

  const level =
    getLevel(
      result.score,
    );

  /*
  |--------------------------------------------------------------------------
  | Recherche d’une page détaillée
  |--------------------------------------------------------------------------
  */

  const detailedPage =
    COMPATIBILITY_PAGES.find(
      (page) =>
        page.signA === signA &&
        page.signB === signB,
    );

  const detailedPageUrl =
    detailedPage
      ? `/compatibilite/${signA}/${signB}`
      : null;

  /*
  |--------------------------------------------------------------------------
  | Capture de la carte
  |--------------------------------------------------------------------------
  */

  const captureCard =
    async () => {
      if (!cardRef.current) {
        return null;
      }

      await document.fonts.ready;

      return html2canvas(
        cardRef.current,
        {
          backgroundColor:
            "#050816",

          scale: 2,
          useCORS: true,
          logging: false,
        },
      );
    };

  /*
  |--------------------------------------------------------------------------
  | Téléchargement
  |--------------------------------------------------------------------------
  */

  const handleDownload =
    async () => {
      const canvas =
        await captureCard();

      if (!canvas) {
        return;
      }

      const link =
        document.createElement(
          "a",
        );

      link.download =
        `compatibilite-${result.signA.key}-${result.signB.key}.png`;

      link.href =
        canvas.toDataURL(
          "image/png",
        );

      link.click();
    };

  /*
  |--------------------------------------------------------------------------
  | Partage
  |--------------------------------------------------------------------------
  */

  const handleShare =
    async () => {
      const canvas =
        await captureCard();

      if (!canvas) {
        return;
      }

      canvas.toBlob(
        async (blob) => {
          if (!blob) {
            return;
          }

          const file =
            new File(
              [blob],
              "compatibilite.png",
              {
                type: "image/png",
              },
            );

          if (
            navigator.share &&
            navigator.canShare &&
            navigator.canShare({
              files: [file],
            })
          ) {
            try {
              await navigator.share({
                files: [file],

                title:
                  __i18n["ma_compatibilite_astro_luna_astralis"],

                text:
                  __i18n["decouvre_ta_compatibilite_sur_luna_astralis_app"],
              });
            } catch {
              return;
            }
          } else {
            await handleDownload();
          }
        },
        "image/png",
      );
    };

  /*
  |--------------------------------------------------------------------------
  | Sélection d’un signe
  |--------------------------------------------------------------------------
  */

  const handleSignAChange = (
    value: SignKey,
  ) => {
    setSignA(value);
    setShowCard(false);
  };

  const handleSignBChange = (
    value: SignKey,
  ) => {
    setSignB(value);
    setShowCard(false);
  };

  /*
  |--------------------------------------------------------------------------
  | Affichage
  |--------------------------------------------------------------------------
  */

  return (
    <div className="compat-wrap">
      <div className="compat-choice-card">
        <div className="compat-choice-top">
          <span>
            {__i18n["choisissez_deux_signes"]}</span>

          <strong>
            {__i18n["resultat_instantane"]}</strong>
        </div>

        <div className="compat-selectors">
          <label className="compat-field">
            <span>
              {__i18n["premier_signe"]}</span>

            <select
              value={signA}
              onChange={(event) =>
                handleSignAChange(
                  event.target
                    .value as SignKey,
                )
              }
            >
              {SIGNS.map(
                (sign) => (
                  <option
                    key={sign.key}
                    value={sign.key}
                  >
                    {sign.symbol}{" "}
                    {sign.label}
                  </option>
                ),
              )}
            </select>
          </label>

          <div
            className="compat-heart"
            aria-hidden="true"
          >
            ❤️
          </div>

          <label className="compat-field">
            <span>
              {__i18n["deuxieme_signe"]}</span>

            <select
              value={signB}
              onChange={(event) =>
                handleSignBChange(
                  event.target
                    .value as SignKey,
                )
              }
            >
              {SIGNS.map(
                (sign) => (
                  <option
                    key={sign.key}
                    value={sign.key}
                  >
                    {sign.symbol}{" "}
                    {sign.label}
                  </option>
                ),
              )}
            </select>
          </label>
        </div>

        <button
          type="button"
          className="compat-main-btn"
          onClick={() =>
            setShowCard(true)
          }
        >
          {__i18n["voir_la_compatibilite"]}</button>
      </div>

      {showCard && (
        <>
          <div
            ref={cardRef}
            className="compat-result-card"
          >
            <div className="compat-result-brand">
              {__i18n["luna_astralis"]}</div>

            <div className="compat-result-signs">
              <strong className="compat-result-name">
                {result.signA.symbol}{" "}
                {result.signA.label}
              </strong>

              <span className="compat-result-plus">
                +
              </span>

              <strong className="compat-result-name">
                {result.signB.symbol}{" "}
                {result.signB.label}
              </strong>
            </div>

            <div className="compat-result-score">
              {result.score}%
            </div>

            <h3>
              {level}
            </h3>

            <p className="compat-result-text">
              {result.text}
            </p>

            <div className="compat-result-footer">
              luna-astralis.app
            </div>
          </div>

          {detailedPageUrl && (
            <section className="compat-detail-card">
              <span className="compat-detail-badge">
                {__i18n["analyse_exclusive"]}</span>

              <div className="compat-detail-icon">
                💞
              </div>

              <h3>
                {__i18n["analyse_complete_disponible"]}</h3>

              <p className="compat-detail-intro">
                {__i18n["decouvrez_en_profondeur_la_compatibilite_entre"]}{" "}
                <strong>
                  {result.signA.label}
                </strong>{" "}
                et{" "}
                <strong>
                  {result.signB.label}
                </strong>
                .
              </p>

              <ul className="compat-detail-list">
                <li>
                  {__i18n["vie_amoureuse"]}</li>

                <li>
                  Communication
                </li>

                <li>
                  {__i18n["passion_et_attirance"]}</li>

                <li>
                  {__i18n["vie_quotidienne"]}</li>

                <li>
                  {__i18n["forces_de_la_relation"]}</li>

                <li>
                  {__i18n["defis_a_surmonter"]}</li>

                <li>
                  {__i18n["conseils_astrologiques"]}</li>
              </ul>

              <Link
                href={detailedPageUrl}
                className="compatibility-detail-link"
              >
                {__i18n["lire_l_analyse_complete"]}</Link>
            </section>
          )}

          <div className="compat-actions">
            <button
              type="button"
              onClick={handleShare}
            >
              Partager
            </button>

            <button
              type="button"
              onClick={handleDownload}
            >
              {__i18n["telecharger"]}</button>
          </div>
        </>
      )}
    </div>
  );
}
