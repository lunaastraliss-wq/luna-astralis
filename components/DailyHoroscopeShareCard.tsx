"use client";

import {
  useRef,
  useState,
} from "react";

import html2canvas from "html2canvas";

import type {
  Locale,
} from "@/i18n/config";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type Props = {
  locale: Locale;

  signName: string;
  signSymbol: string;
  date: string;

  loveTitle: string;
  loveText: string;

  workTitle: string;
  workText: string;

  moneyTitle: string;
  moneyText: string;

  wellBeingTitle: string;
  wellBeingText: string;

  adviceTitle: string;
  adviceText: string;
};

type ShareTexts = {
  cardTitle: string;
  cardSubtitle: string;
  share: string;
  download: string;
  preparing: string;
  shareTitle: string;
  shareText: string;
  error: string;
};

/*
|--------------------------------------------------------------------------
| Traductions
|--------------------------------------------------------------------------
*/

const SHARE_TEXTS: Record<
  Locale,
  ShareTexts
> = {
  fr: {
    cardTitle:
      "Mon horoscope du jour",

    cardSubtitle:
      "Les énergies de ma journée",

    share:
      "Partager",

    download:
      "Télécharger",

    preparing:
      "Préparation...",

    shareTitle:
      "Mon horoscope du jour — Luna Astralis",

    shareText:
      "Découvre ton horoscope du jour sur Luna Astralis.",

    error:
      "Impossible de créer l’image. Réessaie.",
  },

  en: {
    cardTitle:
      "My daily horoscope",

    cardSubtitle:
      "The energies of my day",

    share:
      "Share",

    download:
      "Download",

    preparing:
      "Preparing...",

    shareTitle:
      "My daily horoscope — Luna Astralis",

    shareText:
      "Discover your daily horoscope on Luna Astralis.",

    error:
      "Unable to create the image. Please try again.",
  },

  es: {
    cardTitle:
      "Mi horóscopo del día",

    cardSubtitle:
      "Las energías de mi día",

    share:
      "Compartir",

    download:
      "Descargar",

    preparing:
      "Preparando...",

    shareTitle:
      "Mi horóscopo del día — Luna Astralis",

    shareText:
      "Descubre tu horóscopo diario en Luna Astralis.",

    error:
      "No se pudo crear la imagen. Inténtalo de nuevo.",
  },

  de: {
    cardTitle:
      "Mein Tageshoroskop",

    cardSubtitle:
      "Die Energien meines Tages",

    share:
      "Teilen",

    download:
      "Herunterladen",

    preparing:
      "Vorbereitung...",

    shareTitle:
      "Mein Tageshoroskop — Luna Astralis",

    shareText:
      "Entdecke dein Tageshoroskop auf Luna Astralis.",

    error:
      "Das Bild konnte nicht erstellt werden. Bitte versuche es erneut.",
  },

  it: {
    cardTitle:
      "Il mio oroscopo del giorno",

    cardSubtitle:
      "Le energie della mia giornata",

    share:
      "Condividi",

    download:
      "Scarica",

    preparing:
      "Preparazione...",

    shareTitle:
      "Il mio oroscopo del giorno — Luna Astralis",

    shareText:
      "Scopri il tuo oroscopo del giorno su Luna Astralis.",

    error:
      "Impossibile creare l’immagine. Riprova.",
  },

  pt: {
    cardTitle:
      "Meu horóscopo do dia",

    cardSubtitle:
      "As energias do meu dia",

    share:
      "Compartilhar",

    download:
      "Baixar",

    preparing:
      "Preparando...",

    shareTitle:
      "Meu horóscopo do dia — Luna Astralis",

    shareText:
      "Descubra seu horóscopo diário no Luna Astralis.",

    error:
      "Não foi possível criar a imagem. Tente novamente.",
  },
};

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function DailyHoroscopeShareCard({
  locale,

  signName,
  signSymbol,
  date,

  loveTitle,
  loveText,

  workTitle,
  workText,

  moneyTitle,
  moneyText,

  wellBeingTitle,
  wellBeingText,

  adviceTitle,
  adviceText,
}: Props) {
  const texts =
    SHARE_TEXTS[
      locale
    ];

  const cardRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  const [
    preparing,
    setPreparing,
  ] =
    useState(false);

  const [
    error,
    setError,
  ] =
    useState("");

  /*
  |--------------------------------------------------------------------------
  | Création de l'image
  |--------------------------------------------------------------------------
  */

  const captureCard =
    async () => {
      if (!cardRef.current) {
        return null;
      }

      setError("");

      try {
        await document.fonts.ready;

        const canvas =
          await html2canvas(
            cardRef.current,
            {
              backgroundColor:
                "#050816",

              scale:
                2,

              useCORS:
                true,

              logging:
                false,
            },
          );

        return canvas;
      } catch (
        captureError
      ) {
        console.error(
          "Erreur pendant la création de la carte horoscope :",
          captureError,
        );

        setError(
          texts.error,
        );

        return null;
      }
    };

  /*
  |--------------------------------------------------------------------------
  | Nom du fichier
  |--------------------------------------------------------------------------
  */

  const getFileName =
    () => {
      const safeSign =
        signName
          .toLowerCase()
          .normalize(
            "NFD",
          )
          .replace(
            /[\u0300-\u036f]/g,
            "",
          )
          .replace(
            /[^a-z0-9]+/g,
            "-",
          )
          .replace(
            /^-+|-+$/g,
            "",
          );

      return `horoscope-${safeSign}-luna-astralis.png`;
    };

  /*
  |--------------------------------------------------------------------------
  | Télécharger
  |--------------------------------------------------------------------------
  */

  const handleDownload =
    async () => {
      setPreparing(
        true,
      );

      try {
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
          getFileName();

        link.href =
          canvas.toDataURL(
            "image/png",
          );

        document.body.appendChild(
          link,
        );

        link.click();

        link.remove();
      } finally {
        setPreparing(
          false,
        );
      }
    };

  /*
  |--------------------------------------------------------------------------
  | Partager
  |--------------------------------------------------------------------------
  */

  const handleShare =
    async () => {
      setPreparing(
        true,
      );

      try {
        const canvas =
          await captureCard();

        if (!canvas) {
          return;
        }

        const blob =
          await new Promise<Blob | null>(
            (
              resolve,
            ) => {
              canvas.toBlob(
                resolve,
                "image/png",
              );
            },
          );

        if (!blob) {
          setError(
            texts.error,
          );

          return;
        }

        const file =
          new File(
            [
              blob,
            ],
            getFileName(),
            {
              type:
                "image/png",
            },
          );

        if (
          navigator.share &&
          navigator.canShare &&
          navigator.canShare({
            files: [
              file,
            ],
          })
        ) {
          try {
            await navigator.share({
              files: [
                file,
              ],

              title:
                texts.shareTitle,

              text:
                texts.shareText,
            });

            return;
          } catch (
            shareError
          ) {
            if (
              shareError instanceof
                DOMException &&
              shareError.name ===
                "AbortError"
            ) {
              return;
            }
          }
        }

        const link =
          document.createElement(
            "a",
          );

        link.download =
          getFileName();

        link.href =
          canvas.toDataURL(
            "image/png",
          );

        document.body.appendChild(
          link,
        );

        link.click();

        link.remove();
      } finally {
        setPreparing(
          false,
        );
      }
    };

  /*
  |--------------------------------------------------------------------------
  | Affichage
  |--------------------------------------------------------------------------
  */

  return (
    <section className="daily-share-section">
      <div
        ref={
          cardRef
        }
        className="daily-share-card"
      >
        <div className="daily-share-stars">
          ✦
        </div>

        <div className="daily-share-brand">
          LUNA ASTRALIS
        </div>

        <p className="daily-share-kicker">
          {
            texts.cardTitle
          }
        </p>

        <div className="daily-share-sign">
          <span
            className="daily-share-symbol"
            aria-hidden="true"
          >
            {
              signSymbol
            }
          </span>

          <h2>
            {
              signName
            }
          </h2>
        </div>

        <p className="daily-share-date">
          {
            date
          }
        </p>

        <p className="daily-share-subtitle">
          {
            texts.cardSubtitle
          }
        </p>

        <div className="daily-share-grid">
          <article className="daily-share-item">
            <span
              className="daily-share-item-icon"
              aria-hidden="true"
            >
              ❤️
            </span>

            <div>
              <h3>
                {
                  loveTitle
                }
              </h3>

              <p>
                {
                  loveText
                }
              </p>
            </div>
          </article>

          <article className="daily-share-item">
            <span
              className="daily-share-item-icon"
              aria-hidden="true"
            >
              💼
            </span>

            <div>
              <h3>
                {
                  workTitle
                }
              </h3>

              <p>
                {
                  workText
                }
              </p>
            </div>
          </article>

          <article className="daily-share-item">
            <span
              className="daily-share-item-icon"
              aria-hidden="true"
            >
              💰
            </span>

            <div>
              <h3>
                {
                  moneyTitle
                }
              </h3>

              <p>
                {
                  moneyText
                }
              </p>
            </div>
          </article>

          <article className="daily-share-item">
            <span
              className="daily-share-item-icon"
              aria-hidden="true"
            >
              ✨
            </span>

            <div>
              <h3>
                {
                  wellBeingTitle
                }
              </h3>

              <p>
                {
                  wellBeingText
                }
              </p>
            </div>
          </article>
        </div>

        <div className="daily-share-advice">
          <span
            aria-hidden="true"
          >
            ☾
          </span>

          <div>
            <h3>
              {
                adviceTitle
              }
            </h3>

            <p>
              {
                adviceText
              }
            </p>
          </div>
        </div>

        <div className="daily-share-footer">
          luna-astralis.app
        </div>
      </div>

      <div className="daily-share-actions">
        <button
          type="button"
          onClick={
            handleShare
          }
          disabled={
            preparing
          }
        >
          {preparing
            ? texts.preparing
            : `↗ ${texts.share}`}
        </button>

        <button
          type="button"
          onClick={
            handleDownload
          }
          disabled={
            preparing
          }
        >
          {preparing
            ? texts.preparing
            : `↓ ${texts.download}`}
        </button>
      </div>

      {error ? (
        <p
          className="daily-share-error"
          role="alert"
        >
          {
            error
          }
        </p>
      ) : null}
    </section>
  );
}
