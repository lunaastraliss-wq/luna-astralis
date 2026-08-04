"use client";



import __i18n from "../i18n/migrated/fr/components/natalchartform.json";
import {
  useRef,
  useState,
} from "react";

import html2canvas from "html2canvas";

import NatalChartWheel from "./NatalChartWheel";
import NatalShareCard from "./NatalShareCard";
import NatalFreeSummary from "./NatalFreeSummary";
import NatalPlanetDetails from "./NatalPlanetDetails";
import NatalPremiumOffer from "./NatalPremiumOffer";

/*
|--------------------------------------------------------------------------
| Planètes principales
|--------------------------------------------------------------------------
*/

const MAIN_PLANETS = [
  "Sun",
  "Moon",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];

const PLANET_FR: Record<string, string> = {
  Sun: "Soleil",
  Moon: "Lune",
  Mercury: "Mercure",
  Venus: __i18n["venus"],
  Mars: "Mars",
  Jupiter: "Jupiter",
  Saturn: "Saturne",
  Uranus: "Uranus",
  Neptune: "Neptune",
  Pluto: "Pluton",
};

const PLANET_GLYPH: Record<string, string> = {
  Sun: "☉",
  Moon: "☽",
  Mercury: "☿",
  Venus: "♀",
  Mars: "♂",
  Jupiter: "♃",
  Saturn: "♄",
  Uranus: "♅",
  Neptune: "♆",
  Pluto: "♇",
};

const SIGN_FR: Record<string, string> = {
  Aries: __i18n["belier"],
  Taurus: "Taureau",
  Gemini: __i18n["gemeaux"],
  Cancer: "Cancer",
  Leo: "Lion",
  Virgo: "Vierge",
  Libra: "Balance",
  Scorpio: "Scorpion",
  Sagittarius: "Sagittaire",
  Capricorn: "Capricorne",
  Aquarius: "Verseau",
  Pisces: "Poissons",
};

const SIGN_GLYPH: Record<string, string> = {
  Aries: "♈",
  Taurus: "♉",
  Gemini: "♊",
  Cancer: "♋",
  Leo: "♌",
  Virgo: "♍",
  Libra: "♎",
  Scorpio: "♏",
  Sagittarius: "♐",
  Capricorn: "♑",
  Aquarius: "♒",
  Pisces: "♓",
};

/*
|--------------------------------------------------------------------------
| Traductions
|--------------------------------------------------------------------------
*/

function translateFormatted(
  formatted: string
): string {
  if (!formatted) {
    return "";
  }

  let translated =
    formatted;

  Object.entries(
    SIGN_FR
  ).forEach(
    ([
      english,
      french,
    ]) => {
      translated =
        translated
          .split(english)
          .join(french);
    }
  );

  return translated;
}

function translatePlanetName(
  name: string
): string {
  return (
    PLANET_FR[name] ||
    name
  );
}

function getPlanetGlyph(
  name: string
): string {
  return (
    PLANET_GLYPH[name] ||
    ""
  );
}

function getSignGlyph(
  signName?: string
): string {
  if (!signName) {
    return "";
  }

  return (
    SIGN_GLYPH[signName] ||
    ""
  );
}

function getSignName(
  signName?: string
): string {
  if (!signName) {
    return "";
  }

  return (
    SIGN_FR[signName] ||
    signName
  );
}

/*
|--------------------------------------------------------------------------
| Formatage de la date
|--------------------------------------------------------------------------
*/

function formatDateFR(
  date: string
): string {
  if (!date) {
    return "";
  }

  const [
    day,
    month,
    year,
  ] =
    date.split("/");

  if (
    !day ||
    !month ||
    !year
  ) {
    return date;
  }

  return `${day}/${month}/${year}`;
}

/*
|--------------------------------------------------------------------------
| Validation
|--------------------------------------------------------------------------
*/

function isValidDate(
  day: number,
  month: number,
  year: number
): boolean {
  if (
    !Number.isInteger(day) ||
    !Number.isInteger(month) ||
    !Number.isInteger(year)
  ) {
    return false;
  }

  if (
    year < 1800 ||
    year >
      new Date().getFullYear()
  ) {
    return false;
  }

  if (
    month < 1 ||
    month > 12
  ) {
    return false;
  }

  const date =
    new Date(
      Date.UTC(
        year,
        month - 1,
        day
      )
    );

  return (
    date.getUTCFullYear() ===
      year &&
    date.getUTCMonth() ===
      month - 1 &&
    date.getUTCDate() ===
      day
  );
}

function isValidTime(
  hour: number,
  minute: number
): boolean {
  return (
    Number.isInteger(hour) &&
    Number.isInteger(minute) &&
    hour >= 0 &&
    hour <= 23 &&
    minute >= 0 &&
    minute <= 59
  );
}

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function NatalChartForm() {
  const shareRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const pdfWheelRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const [
    firstName,
    setFirstName,
  ] =
    useState("");

  const [
    birthDate,
    setBirthDate,
  ] =
    useState("");

  const [
    birthTime,
    setBirthTime,
  ] =
    useState("");

  const [
    birthCity,
    setBirthCity,
  ] =
    useState("");

  const [
    latitude,
    setLatitude,
  ] =
    useState<number | null>(
      null
    );

  const [
    longitude,
    setLongitude,
  ] =
    useState<number | null>(
      null
    );

  const [
    loading,
    setLoading,
  ] =
    useState(false);

  const [
    downloading,
    setDownloading,
  ] =
    useState(false);

  const [
    error,
    setError,
  ] =
    useState("");

  const [
    result,
    setResult,
  ] =
    useState<any>(null);

  /*
  |--------------------------------------------------------------------------
  | Création de la carte
  |--------------------------------------------------------------------------
  */

  const handleSubmit =
    async (
      event:
        React.FormEvent<HTMLFormElement>
    ) => {
      event.preventDefault();

      setError("");
      setResult(null);
      setLatitude(null);
      setLongitude(null);

      const cleanCity =
        birthCity.trim();

      if (
        !birthDate ||
        !cleanCity
      ) {
        setError(
          "La date de naissance et la ville de naissance sont obligatoires."
        );

        return;
      }

      const dateParts =
        birthDate.split("/");

      if (
        dateParts.length !== 3
      ) {
        setError(
          "Entre la date au format JJ/MM/AAAA."
        );

        return;
      }

      const [
        dayStr,
        monthStr,
        yearStr,
      ] =
        dateParts;

      const day =
        Number.parseInt(
          dayStr,
          10
        );

      const month =
        Number.parseInt(
          monthStr,
          10
        );

      const year =
        Number.parseInt(
          yearStr,
          10
        );

      if (
        !isValidDate(
          day,
          month,
          year
        )
      ) {
        setError(
          "La date de naissance est invalide."
        );

        return;
      }

      const effectiveBirthTime =
        birthTime ||
        "12:00";

      const [
        hourStr,
        minuteStr,
      ] =
        effectiveBirthTime.split(
          ":"
        );

      const hour =
        Number.parseInt(
          hourStr,
          10
        );

      const minute =
        Number.parseInt(
          minuteStr,
          10
        );

      if (
        !isValidTime(
          hour,
          minute
        )
      ) {
        setError(
          "L’heure de naissance est invalide."
        );

        return;
      }

      setLoading(true);

      try {
        /*
        |--------------------------------------------------------------------------
        | Géocodage
        |--------------------------------------------------------------------------
        */

        const geoResponse =
          await fetch(
            `/api/geocode?city=${encodeURIComponent(
              cleanCity
            )}`,
            {
              method:
                "GET",

              cache:
                "no-store",
            }
          );

        const geoData =
          await geoResponse.json();

        if (
          !geoResponse.ok ||
          !geoData?.ok ||
          !geoData?.result
        ) {
          setError(
            geoData?.error ||
              "Ville introuvable. Entre seulement le nom de la ville."
          );

          return;
        }

        const lat =
          Number(
            geoData.result
              .latitude
          );

        const lon =
          Number(
            geoData.result
              .longitude
          );

        if (
          !Number.isFinite(
            lat
          ) ||
          !Number.isFinite(
            lon
          )
        ) {
          setError(
            "Les coordonnées reçues pour cette ville sont invalides."
          );

          return;
        }

        setLatitude(lat);
        setLongitude(lon);

        /*
        |--------------------------------------------------------------------------
        | Calcul astrologique
        |--------------------------------------------------------------------------
        */

        const chartResponse =
          await fetch(
            "/api/natal-chart",
            {
              method:
                "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              cache:
                "no-store",

              body:
                JSON.stringify({
                  year,
                  month,
                  day,
                  hour,
                  minute,
                  latitude:
                    lat,
                  longitude:
                    lon,
                }),
            }
          );

        const chartData =
          await chartResponse.json();

        if (
          !chartResponse.ok ||
          !chartData?.ok ||
          !chartData?.chart
        ) {
          setError(
            chartData?.error ||
              "Erreur lors du calcul de la carte du ciel."
          );

          return;
        }

        setResult(
          chartData.chart
        );
      } catch (
        submitError
      ) {
        console.error(
          "Erreur pendant la création de la carte du ciel :",
          submitError
        );

        setError(
          "Une erreur est survenue pendant le calcul. Réessaie."
        );
      } finally {
        setLoading(false);
      }
    };

  /*
  |--------------------------------------------------------------------------
  | Données calculées
  |--------------------------------------------------------------------------
  */

  const planets =
    (
      result?.planets ||
      []
    ).filter(
      (
        planet: any
      ) =>
        MAIN_PLANETS.includes(
          planet?.name
        )
    );

  const angles =
    result?.angles ||
    {};

  const chartTitle =
    firstName.trim()
      ? `Le thème astral de ${firstName.trim()}`
      : "Ta carte du ciel";

  /*
  |--------------------------------------------------------------------------
  | Création des images
  |--------------------------------------------------------------------------
  */

  const captureElementAsPng =
    async (
      element:
        HTMLDivElement | null,

      errorMessage:
        string,

      backgroundColor:
        string | null,

      scale:
        number
    ): Promise<string> => {
      if (!element) {
        throw new Error(
          errorMessage
        );
      }

      const canvas =
        await html2canvas(
          element,
          {
            backgroundColor,
            scale,
            useCORS:
              true,
            logging:
              false,
          }
        );

      const image =
        canvas.toDataURL(
          "image/png"
        );

      if (
        !image ||
        !image.startsWith(
          "data:image/png;base64,"
        )
      ) {
        throw new Error(
          "L’image PNG de la carte astrologique n’a pas pu être créée."
        );
      }

      return image;
    };

  const createShareImage =
    async (): Promise<string> => {
      return captureElementAsPng(
        shareRef.current,
        "La carte astrologique à télécharger est introuvable.",
        null,
        2
      );
    };

  const createPdfWheelImage =
    async (): Promise<string> => {
      return captureElementAsPng(
        pdfWheelRef.current,
        "La roue astrologique destinée au rapport est introuvable.",
        "#0b1124",
        3
      );
    };

  /*
  |--------------------------------------------------------------------------
  | Téléchargement de la carte gratuite
  |--------------------------------------------------------------------------
  */

  const handleDownload =
    async () => {
      setError("");
      setDownloading(true);

      try {
        const wheelImage =
          await createShareImage();

        const safeName =
          firstName.trim()
            ? firstName
                .trim()
                .toLowerCase()
                .normalize(
                  "NFD"
                )
                .replace(
                  /[\u0300-\u036f]/g,
                  ""
                )
                .replace(
                  /[^a-z0-9]+/g,
                  "-"
                )
                .replace(
                  /^-+|-+$/g,
                  ""
                )
            : "luna-astralis";

        const link =
          document.createElement(
            "a"
          );

        link.download =
          `carte-du-ciel-${safeName}.png`;

        link.href =
          wheelImage;

        document.body.appendChild(
          link
        );

        link.click();
        link.remove();
      } catch (
        downloadError
      ) {
        console.error(
          "Erreur pendant le téléchargement de la carte :",
          downloadError
        );

        setError(
          downloadError instanceof
            Error
            ? downloadError.message
            : "Impossible de télécharger l’image. Réessaie."
        );
      } finally {
        setDownloading(false);
      }
    };

  /*
  |--------------------------------------------------------------------------
  | Affichage
  |--------------------------------------------------------------------------
  */

  return (
    <div className="natal-form-wrap">
      <form
        onSubmit={
          handleSubmit
        }
        className="natal-form"
        noValidate
      >
        <label>
          {__i18n["prenom_optionnel"]}<input
            type="text"
            value={
              firstName
            }
            onChange={(
              event
            ) =>
              setFirstName(
                event.target
                  .value
              )
            }
            placeholder={__i18n["ton_prenom"]}
            autoComplete="given-name"
          />
        </label>

        <label>
          {__i18n["date_de_naissance"]}<input
            type="text"
            inputMode="numeric"
            value={
              birthDate
            }
            onChange={(
              event
            ) => {
              let value =
                event.target.value
                  .replace(
                    /\D/g,
                    ""
                  )
                  .slice(
                    0,
                    8
                  );

              if (
                value.length >
                4
              ) {
                value =
                  `${value.slice(
                    0,
                    2
                  )}/${value.slice(
                    2,
                    4
                  )}/${value.slice(
                    4
                  )}`;
              } else if (
                value.length >
                2
              ) {
                value =
                  `${value.slice(
                    0,
                    2
                  )}/${value.slice(
                    2
                  )}`;
              }

              setBirthDate(
                value
              );
            }}
            placeholder={__i18n["jj_mm_aaaa"]}
            maxLength={
              10
            }
            autoComplete="bday"
            required
          />
        </label>

        <label>
          {__i18n["heure_de_naissance_optionnelle_mais_recommandee"]}<input
            type="time"
            value={
              birthTime
            }
            onChange={(
              event
            ) =>
              setBirthTime(
                event.target
                  .value
              )
            }
            autoComplete="off"
          />
        </label>

        <label>
          {__i18n["ville_de_naissance"]}<input
            type="text"
            value={
              birthCity
            }
            onChange={(
              event
            ) =>
              setBirthCity(
                event.target
                  .value
              )
            }
            placeholder={__i18n["ville_de_naissance_2"]}
            autoComplete="off"
            required
          />
        </label>

        <button
          type="submit"
          className="btn btn-small btn-primary"
          disabled={
            loading
          }
        >
          {loading
            ? "Calcul en cours..."
            : "Créer ma carte du ciel"}
        </button>

        {error && (
          <p
            className="natal-error"
            role="alert"
          >
            {error}
          </p>
        )}
      </form>

      {result && (
        <>
          <div className="natal-result">
            <h3>
              {chartTitle}
            </h3>

            <NatalChartWheel
              planets={
                planets
              }
              houses={
                result?.houses
              }
              ascendantLongitude={
                angles
                  ?.ascendant
                  ?.longitude
              }
              midheavenLongitude={
                angles
                  ?.midheaven
                  ?.longitude
              }
              ascendantFormatted={translateFormatted(
                angles
                  ?.ascendant
                  ?.formatted ||
                  ""
              )}
              midheavenFormatted={translateFormatted(
                angles
                  ?.midheaven
                  ?.formatted ||
                  ""
              )}
              size={460}
            />

            <div className="natal-angles">
              {angles?.ascendant && (
                <div className="natal-angle-item">
                  <span className="natal-label">
                    Ascendant
                  </span>

                  <span className="natal-value">
                    {translateFormatted(
                      angles
                        .ascendant
                        .formatted ||
                        ""
                    )}
                  </span>
                </div>
              )}

              {angles?.midheaven && (
                <div className="natal-angle-item">
                  <span className="natal-label">
                    {__i18n["milieu_du_ciel"]}</span>

                  <span className="natal-value">
                    {translateFormatted(
                      angles
                        .midheaven
                        .formatted ||
                        ""
                    )}
                  </span>
                </div>
              )}
            </div>

            <div className="natal-result-actions">
              <button
                type="button"
                className="natal-download-btn"
                onClick={
                  handleDownload
                }
                disabled={
                  downloading
                }
              >
                {downloading
                  ? "Préparation de l’image..."
                  : "📷 Télécharger ma carte du ciel"}
              </button>

              <a
                href="#rapports-astrologiques"
                className="natal-go-to-reports"
              >
                <span
                  aria-hidden="true"
                >
                  ✨
                </span>

                <span>
                  {__i18n["voir_les_rapports_essentielle_premium_et_signature"]}</span>

                <span
                  aria-hidden="true"
                >
                  ↓
                </span>
              </a>
            </div>

            <div className="natal-share-capture-zone">
              <div
                ref={
                  shareRef
                }
              >
                <NatalShareCard
                  title={
                    chartTitle
                  }
                  birthDate={formatDateFR(
                    birthDate
                  )}
                  birthTime={
                    birthTime ||
                    "12:00"
                  }
                  birthCity={birthCity.trim()}
                  planets={
                    planets
                  }
                  houses={
                    result?.houses
                  }
                  angles={
                    angles
                  }
                />
              </div>
            </div>

            <div
              aria-hidden="true"
              style={{
                position:
                  "fixed",

                left:
                  "-10000px",

                top:
                  0,

                width:
                  900,

                height:
                  900,

                pointerEvents:
                  "none",

                opacity:
                  1,
              }}
            >
              <div
                ref={
                  pdfWheelRef
                }
                style={{
                  width:
                    820,

                  height:
                    820,

                  display:
                    "flex",

                  alignItems:
                    "center",

                  justifyContent:
                    "center",

                  background:
                    "#0b1124",

                  color:
                    "#fff8e7",
                }}
              >
                <NatalChartWheel
                  planets={
                    planets
                  }
                  houses={
                    result?.houses
                  }
                  ascendantLongitude={
                    angles
                      ?.ascendant
                      ?.longitude
                  }
                  midheavenLongitude={
                    angles
                      ?.midheaven
                      ?.longitude
                  }
                  size={
                    760
                  }
                  showLegend={
                    false
                  }
                />
              </div>
            </div>

            <NatalFreeSummary
              planets={
                planets
              }
              angles={
                angles
              }
            />
          </div>

          <div className="natal-premium-wide">
            <NatalPremiumOffer
              firstName={firstName.trim()}
              birthDate={
                birthDate
              }
              birthTime={
                birthTime ||
                "12:00"
              }
              birthCity={birthCity.trim()}
              latitude={
                latitude
              }
              longitude={
                longitude
              }
              getWheelImage={
                createPdfWheelImage
              }
            />
          </div>

          <div className="natal-result">
            <NatalPlanetDetails
              planets={
                planets
              }
              translateFormatted={
                translateFormatted
              }
              translatePlanetName={
                translatePlanetName
              }
              getPlanetGlyph={
                getPlanetGlyph
              }
              getSignGlyph={
                getSignGlyph
              }
              getSignName={
                getSignName
              }
            />
          </div>
        </>
      )}
    </div>
  );
}
