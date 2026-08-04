"use client";

import fr from "../i18n/migrated/fr/components/compatibilitycard.json";
import en from "../i18n/migrated/en/components/compatibilitycard.json";
import es from "../i18n/migrated/es/components/compatibilitycard.json";
import de from "../i18n/migrated/de/components/compatibilitycard.json";
import it from "../i18n/migrated/it/components/compatibilitycard.json";
import pt from "../i18n/migrated/pt/components/compatibilitycard.json";

import Link from "next/link";

import {
  useRef,
  useState,
} from "react";

import html2canvas from "html2canvas";

import {
  getCompatibility,
  getSigns,
  type SignKey,
} from "@/lib/compatibility";

import {
  COMPATIBILITY_PAGES,
} from "@/lib/compatibility-pages";

import {
  type Locale,
} from "@/i18n/config";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type Dictionary = Record<string, string>;

type CompatibilityCardProps = {
  locale: Locale;
};

/*
|--------------------------------------------------------------------------
| Dictionnaires
|--------------------------------------------------------------------------
*/

const DICTIONARIES: Record<
  Locale,
  Dictionary
> = {
  fr,
  en,
  es,
  de,
  it,
  pt,
};

/*
|--------------------------------------------------------------------------
| Textes de secours
|--------------------------------------------------------------------------
|
| Ces textes garantissent que les quelques libellés écrits directement
| dans le composant restent traduits même si une clé manque dans un JSON.
|
*/

const FALLBACKS: Record<
  Locale,
  {
    levels: {
      exceptional: string;
      excellent: string;
      harmony: string;
      balance: string;
      challenges: string;
    };
    and: string;
    communication: string;
    share: string;
  }
> = {
  fr: {
    levels: {
      exceptional: "Union exceptionnelle",
      excellent: "Excellente compatibilité",
      harmony: "Belle harmonie",
      balance: "Équilibre à construire",
      challenges: "Relation pleine de défis",
    },
    and: "et",
    communication: "Communication",
    share: "Partager",
  },

  en: {
    levels: {
      exceptional: "Exceptional union",
      excellent: "Excellent compatibility",
      harmony: "Beautiful harmony",
      balance: "A balance to build",
      challenges: "A relationship full of challenges",
    },
    and: "and",
    communication: "Communication",
    share: "Share",
  },

  es: {
    levels: {
      exceptional: "Unión excepcional",
      excellent: "Compatibilidad excelente",
      harmony: "Hermosa armonía",
      balance: "Un equilibrio por construir",
      challenges: "Una relación llena de desafíos",
    },
    and: "y",
    communication: "Comunicación",
    share: "Compartir",
  },

  de: {
    levels: {
      exceptional: "Außergewöhnliche Verbindung",
      excellent: "Ausgezeichnete Kompatibilität",
      harmony: "Schöne Harmonie",
      balance: "Ein Gleichgewicht, das aufgebaut werden muss",
      challenges: "Eine Beziehung voller Herausforderungen",
    },
    and: "und",
    communication: "Kommunikation",
    share: "Teilen",
  },

  it: {
    levels: {
      exceptional: "Unione eccezionale",
      excellent: "Compatibilità eccellente",
      harmony: "Bella armonia",
      balance: "Un equilibrio da costruire",
      challenges: "Una relazione piena di sfide",
    },
    and: "e",
    communication: "Comunicazione",
    share: "Condividi",
  },

  pt: {
    levels: {
      exceptional: "União excepcional",
      excellent: "Excelente compatibilidade",
      harmony: "Bela harmonia",
      balance: "Um equilíbrio a construir",
      challenges: "Uma relação cheia de desafios",
    },
    and: "e",
    communication: "Comunicação",
    share: "Compartilhar",
  },
};

/*
|--------------------------------------------------------------------------
| Niveau de compatibilité
|--------------------------------------------------------------------------
*/

function getLevel(
  score: number,
  locale: Locale,
): string {
  const levels =
    FALLBACKS[locale].levels;

  if (score >= 90) {
    return levels.exceptional;
  }

  if (score >= 80) {
    return levels.excellent;
  }

  if (score >= 65) {
    return levels.harmony;
  }

  if (score >= 50) {
    return levels.balance;
  }

  return levels.challenges;
}

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function CompatibilityCard({
  locale,
}: CompatibilityCardProps) {
  const __i18n =
    DICTIONARIES[locale];

  const signs =
    getSigns(locale);

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
      locale,
    );

  const level =
    getLevel(
      result.score,
      locale,
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
      ? `/${locale}/compatibilite/${signA}/${signB}`
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

          scale:
            2,

          useCORS:
            true,

          logging:
            false,
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
                type:
                  "image/png",
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
                  __i18n[
                    "ma_compatibilite_astro_luna_astralis"
                  ] ??
                  "Luna Astralis",

                text:
                  __i18n[
                    "decouvre_ta_compatibilite_sur_luna_astralis_app"
                  ] ??
                  "Luna Astralis",
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
            {
              __i18n[
                "choisissez_deux_signes"
              ]
            }
          </span>

          <strong>
            {
              __i18n[
                "resultat_instantane"
              ]
            }
          </strong>
        </div>

        <div className="compat-selectors">
          <label className="compat-field">
            <span>
              {
                __i18n[
                  "premier_signe"
                ]
              }
            </span>

            <select
              value={signA}
              onChange={(event) =>
                handleSignAChange(
                  event.target
                    .value as SignKey,
                )
              }
            >
              {signs.map(
                (sign) => (
                  <option
                    key={sign.key}
                    value={sign.key}
                  >
                    {sign.symbol}
                    {" "}
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
              {
                __i18n[
                  "deuxieme_signe"
                ]
              }
            </span>

            <select
              value={signB}
              onChange={(event) =>
                handleSignBChange(
                  event.target
                    .value as SignKey,
                )
              }
            >
              {signs.map(
                (sign) => (
                  <option
                    key={sign.key}
                    value={sign.key}
                  >
                    {sign.symbol}
                    {" "}
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
          {
            __i18n[
              "voir_la_compatibilite"
            ]
          }
        </button>
      </div>

      {showCard && (
        <>
          <div
            ref={cardRef}
            className="compat-result-card"
          >
            <div className="compat-result-brand">
              {
                __i18n[
                  "luna_astralis"
                ]
              }
            </div>

            <div className="compat-result-signs">
              <strong className="compat-result-name">
                {result.signA.symbol}
                {" "}
                {result.signA.label}
              </strong>

              <span className="compat-result-plus">
                +
              </span>

              <strong className="compat-result-name">
                {result.signB.symbol}
                {" "}
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
                {
                  __i18n[
                    "analyse_exclusive"
                  ]
                }
              </span>

              <div className="compat-detail-icon">
                💞
              </div>

              <h3>
                {
                  __i18n[
                    "analyse_complete_disponible"
                  ]
                }
              </h3>

              <p className="compat-detail-intro">
                {
                  __i18n[
                    "decouvrez_en_profondeur_la_compatibilite_entre"
                  ]
                }
                {" "}
                <strong>
                  {result.signA.label}
                </strong>
                {" "}
                {FALLBACKS[locale].and}
                {" "}
                <strong>
                  {result.signB.label}
                </strong>
                .
              </p>

              <ul className="compat-detail-list">
                <li>
                  {
                    __i18n[
                      "vie_amoureuse"
                    ]
                  }
                </li>

                <li>
                  {
                    __i18n[
                      "communication"
                    ] ??
                    FALLBACKS[
                      locale
                    ].communication
                  }
                </li>

                <li>
                  {
                    __i18n[
                      "passion_et_attirance"
                    ]
                  }
                </li>

                <li>
                  {
                    __i18n[
                      "vie_quotidienne"
                    ]
                  }
                </li>

                <li>
                  {
                    __i18n[
                      "forces_de_la_relation"
                    ]
                  }
                </li>

                <li>
                  {
                    __i18n[
                      "defis_a_surmonter"
                    ]
                  }
                </li>

                <li>
                  {
                    __i18n[
                      "conseils_astrologiques"
                    ]
                  }
                </li>
              </ul>

              <Link
                href={detailedPageUrl}
                className="compatibility-detail-link"
              >
                {
                  __i18n[
                    "lire_l_analyse_complete"
                  ]
                }
              </Link>
            </section>
          )}

          <div className="compat-actions">
            <button
              type="button"
              onClick={handleShare}
            >
              {
                __i18n[
                  "partager"
                ] ??
                FALLBACKS[
                  locale
                ].share
              }
            </button>

            <button
              type="button"
              onClick={handleDownload}
            >
              {
                __i18n[
                  "telecharger"
                ]
              }
            </button>
          </div>
        </>
      )}
    </div>
  );
}
