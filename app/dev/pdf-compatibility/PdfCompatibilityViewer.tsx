"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  PDFViewer,
} from "@react-pdf/renderer";

import html2canvas from "html2canvas";

import {
  useSearchParams,
} from "next/navigation";

import Link from "next/link";

import NatalChartWheel from "@/components/NatalChartWheel";

import CompatibilityPdfDocumentFr
  from "@/paid-pdf-generated/fr/CompatibilityPdf/CompatibilityPdfDocument";

import CompatibilityPdfDocumentEn
  from "@/paid-pdf-generated/en/CompatibilityPdf/CompatibilityPdfDocument";

import CompatibilityPdfDocumentEs
  from "@/paid-pdf-generated/es/CompatibilityPdf/CompatibilityPdfDocument";

import CompatibilityPdfDocumentDe
  from "@/paid-pdf-generated/de/CompatibilityPdf/CompatibilityPdfDocument";

import CompatibilityPdfDocumentIt
  from "@/paid-pdf-generated/it/CompatibilityPdf/CompatibilityPdfDocument";

import CompatibilityPdfDocumentPt
  from "@/paid-pdf-generated/pt/CompatibilityPdf/CompatibilityPdfDocument";

type CompatibilityLocale =
  | "fr"
  | "en"
  | "es"
  | "de"
  | "it"
  | "pt";

const SUPPORTED_LOCALES:
CompatibilityLocale[] = [
  "fr",
  "en",
  "es",
  "de",
  "it",
  "pt",
];

const LANGUAGE_LABELS:
Record<
  CompatibilityLocale,
  string
> = {
  fr: "FR",
  en: "EN",
  es: "ES",
  de: "DE",
  it: "IT",
  pt: "PT",
};

const PDF_DOCUMENTS = {
  fr: CompatibilityPdfDocumentFr,
  en: CompatibilityPdfDocumentEn,
  es: CompatibilityPdfDocumentEs,
  de: CompatibilityPdfDocumentDe,
  it: CompatibilityPdfDocumentIt,
  pt: CompatibilityPdfDocumentPt,
};

function normalizeLocale(
  value:
    | string
    | null,
): CompatibilityLocale {
  if (
    value &&
    SUPPORTED_LOCALES.includes(
      value as CompatibilityLocale,
    )
  ) {
    return value as CompatibilityLocale;
  }

  return "fr";
}

type ChartData = {
  planets: any[];
  houses: any;
  angles: any;
};

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

function getAngleLongitude(
  angle: any,
): number | null {
  if (
    typeof angle === "number" &&
    Number.isFinite(angle)
  ) {
    return angle;
  }

  const longitude =
    Number(
      angle?.longitude,
    );

  return Number.isFinite(
    longitude,
  )
    ? longitude
    : null;
}

async function loadNatalChart({
  city,
  year,
  month,
  day,
  hour,
  minute,
}: {
  city: string;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}): Promise<ChartData> {
  /*
   * Géocodage de la ville.
   */
  const geoResponse =
    await fetch(
      `/api/geocode?city=${encodeURIComponent(
        city,
      )}`,
      {
        method:
          "GET",

        cache:
          "no-store",
      },
    );

  const geoData =
    await geoResponse.json();

  if (
    !geoResponse.ok ||
    !geoData?.ok ||
    !geoData?.result
  ) {
    throw new Error(
      geoData?.error ||
        `Géocodage impossible pour ${city}`,
    );
  }

  const latitude =
    Number(
      geoData.result
        .latitude,
    );

  const longitude =
    Number(
      geoData.result
        .longitude,
    );

  if (
    !Number.isFinite(
      latitude,
    ) ||
    !Number.isFinite(
      longitude,
    )
  ) {
    throw new Error(
      `Coordonnées invalides pour ${city}`,
    );
  }

  /*
   * Calcul natal réel.
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
            latitude,
            longitude,
          }),
      },
    );

  const chartData =
    await chartResponse.json();

  if (
    !chartResponse.ok ||
    !chartData?.ok ||
    !chartData?.chart
  ) {
    throw new Error(
      chartData?.error ||
        `Calcul astrologique impossible pour ${city}`,
    );
  }

  const calculatedChart =
    chartData.chart;

  const planets =
    (
      calculatedChart
        ?.planets ||
      []
    ).filter(
      (
        planet: any,
      ) =>
        MAIN_PLANETS.includes(
          planet?.name,
        ),
    );

  return {
    planets,

    houses:
      calculatedChart
        ?.houses ||
      [],

    angles:
      calculatedChart
        ?.angles ||
      {},
  };
}

export default function PdfCompatibilityViewer() {
  const searchParams =
    useSearchParams();

  const locale =
    normalizeLocale(
      searchParams.get(
        "locale",
      ),
    );

  const CompatibilityDocument =
    PDF_DOCUMENTS[
      locale
    ];

  const person1WheelRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  const person2WheelRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  const [
    person1Chart,
    setPerson1Chart,
  ] =
    useState<ChartData | null>(
      null,
    );

  const [
    person2Chart,
    setPerson2Chart,
  ] =
    useState<ChartData | null>(
      null,
    );

  const [
    person1WheelImage,
    setPerson1WheelImage,
  ] =
    useState("");

  const [
    person2WheelImage,
    setPerson2WheelImage,
  ] =
    useState("");

  const [
    loading,
    setLoading,
  ] =
    useState(true);

  const [
    error,
    setError,
  ] =
    useState("");

  /*
   * --------------------------------------------------------------------------
   * 1. Calcul réel des deux cartes natales
   * --------------------------------------------------------------------------
   */
  useEffect(() => {
    let cancelled =
      false;

    async function loadCharts() {
      try {
        setLoading(
          true,
        );

        setError(
          "",
        );

        const [
          chart1,
          chart2,
        ] =
          await Promise.all([
            loadNatalChart({
              city:
                "Québec",

              year:
                1970,

              month:
                11,

              day:
                17,

              hour:
                21,

              minute:
                36,
            }),

            loadNatalChart({
              city:
                "Montréal",

              year:
                1988,

              month:
                5,

              day:
                12,

              hour:
                10,

              minute:
                15,
            }),
          ]);

        if (
          cancelled
        ) {
          return;
        }

        setPerson1Chart(
          chart1,
        );

        setPerson2Chart(
          chart2,
        );
      } catch (
        loadError
      ) {
        console.error(
          "Erreur DEV Compatibilité:",
          loadError,
        );

        if (
          !cancelled
        ) {
          setError(
            loadError instanceof
            Error
              ? loadError.message
              : "Erreur de calcul",
          );

          setLoading(
            false,
          );
        }
      }
    }

    loadCharts();

    return () => {
      cancelled =
        true;
    };
  }, []);

  /*
   * --------------------------------------------------------------------------
   * 2. Capture des deux vraies roues en PNG
   * --------------------------------------------------------------------------
   */
  useEffect(() => {
    if (
      !person1Chart ||
      !person2Chart
    ) {
      return;
    }

    let cancelled =
      false;

    async function createWheelImages() {
      try {
        setLoading(
          true,
        );

        setError(
          "",
        );

        setPerson1WheelImage(
          "",
        );

        setPerson2WheelImage(
          "",
        );

        /*
         * Laisse le temps aux deux roues cachées
         * de terminer leur rendu dans le DOM.
         */
        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              500,
            ),
        );

        if (
          !person1WheelRef.current ||
          !person2WheelRef.current
        ) {
          throw new Error(
            "Une des deux roues PDF est introuvable",
          );
        }

        const [
          canvas1,
          canvas2,
        ] =
          await Promise.all([
            html2canvas(
              person1WheelRef.current,
              {
                backgroundColor:
                  "#0b1124",

                scale:
                  3,

                useCORS:
                  true,

                logging:
                  false,
              },
            ),

            html2canvas(
              person2WheelRef.current,
              {
                backgroundColor:
                  "#0b1124",

                scale:
                  3,

                useCORS:
                  true,

                logging:
                  false,
              },
            ),
          ]);

        const image1 =
          canvas1.toDataURL(
            "image/png",
          );

        const image2 =
          canvas2.toDataURL(
            "image/png",
          );

        if (
          !image1 ||
          !image1.startsWith(
            "data:image/png;base64,",
          ) ||
          !image2 ||
          !image2.startsWith(
            "data:image/png;base64,",
          )
        ) {
          throw new Error(
            "Les deux roues PNG n’ont pas pu être créées",
          );
        }

        if (
          cancelled
        ) {
          return;
        }

        setPerson1WheelImage(
          image1,
        );

        setPerson2WheelImage(
          image2,
        );

        setLoading(
          false,
        );
      } catch (
        wheelError
      ) {
        console.error(
          "Erreur génération roues Compatibilité DEV:",
          wheelError,
        );

        if (
          !cancelled
        ) {
          setError(
            wheelError instanceof
            Error
              ? wheelError.message
              : "Erreur de génération des roues",
          );

          setLoading(
            false,
          );
        }
      }
    }

    createWheelImages();

    return () => {
      cancelled =
        true;
    };
  }, [
    person1Chart,
    person2Chart,
    locale,
  ]);

  /*
   * --------------------------------------------------------------------------
   * 3. Angles utilisés par les deux roues
   * --------------------------------------------------------------------------
   */
  const person1AscendantLongitude =
    getAngleLongitude(
      person1Chart
        ?.angles
        ?.ascendant,
    );

  const person1MidheavenLongitude =
    getAngleLongitude(
      person1Chart
        ?.angles
        ?.midheaven,
    );

  const person2AscendantLongitude =
    getAngleLongitude(
      person2Chart
        ?.angles
        ?.ascendant,
    );

  const person2MidheavenLongitude =
    getAngleLongitude(
      person2Chart
        ?.angles
        ?.midheaven,
    );

  /*
   * --------------------------------------------------------------------------
   * 4. Personnes envoyées au PDF
   * --------------------------------------------------------------------------
   */
  const person1 =
    person1Chart
      ? {
          firstName:
            "Martine",

          birthDate:
            "17/11/1970",

          birthTime:
            "21:36",

          birthCity:
            "Québec",

          birthCountry:
            "Canada",

          planets:
            person1Chart.planets,

          angles: {
            ascendant:
              person1Chart
                .angles
                ?.ascendant ??
              null,

            midheaven:
              person1Chart
                .angles
                ?.midheaven ??
              null,

            descendant:
              person1Chart
                .angles
                ?.descendant ??
              null,

            imumCoeli:
              person1Chart
                .angles
                ?.imumCoeli ??
              null,
          },

          wheelImage:
            person1WheelImage,
        }
      : null;

  const person2 =
    person2Chart
      ? {
          firstName:
            "Alexandre",

          birthDate:
            "12/05/1988",

          birthTime:
            "10:15",

          birthCity:
            "Montréal",

          birthCountry:
            "Canada",

          planets:
            person2Chart.planets,

          angles: {
            ascendant:
              person2Chart
                .angles
                ?.ascendant ??
              null,

            midheaven:
              person2Chart
                .angles
                ?.midheaven ??
              null,

            descendant:
              person2Chart
                .angles
                ?.descendant ??
              null,

            imumCoeli:
              person2Chart
                .angles
                ?.imumCoeli ??
              null,
          },

          wheelImage:
            person2WheelImage,
        }
      : null;

  return (
    <main
      style={{
        width:
          "100vw",

        height:
          "100vh",

        margin:
          0,

        padding:
          0,

        backgroundColor:
          "#081020",

        overflow:
          "hidden",

        position:
          "relative",
      }}
    >
      {/*
       * -----------------------------------------------------------------------
       * Sélecteur des 6 langues
       * -----------------------------------------------------------------------
       */}
      <div
        style={{
          position:
            "absolute",

          top:
            12,

          left:
            12,

          zIndex:
            20,

          display:
            "flex",

          gap:
            6,

          padding:
            7,

          backgroundColor:
            "rgba(6,16,31,0.92)",

          border:
            "1px solid #8f6e35",

          borderRadius:
            8,
        }}
      >
        {SUPPORTED_LOCALES.map(
          (
            language,
          ) => (
            <Link
              key={
                language
              }
              href={
                `/dev/pdf-compatibility?locale=${language}`
              }
              style={{
                padding:
                  "6px 9px",

                borderRadius:
                  5,

                textDecoration:
                  "none",

                fontFamily:
                  "Arial, sans-serif",

                fontSize:
                  12,

                fontWeight:
                  700,

                color:
                  locale ===
                  language
                    ? "#081020"
                    : "#fff8e7",

                backgroundColor:
                  locale ===
                  language
                    ? "#f4c95d"
                    : "#152033",
              }}
            >
              {
                LANGUAGE_LABELS[
                  language
                ]
              }
            </Link>
          ),
        )}
      </div>

      {/*
       * -----------------------------------------------------------------------
       * Roue cachée — Martine
       * -----------------------------------------------------------------------
       */}
      {person1Chart && (
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
              person1WheelRef
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
              locale={locale}
              planets={
                person1Chart.planets
              }
              houses={
                person1Chart.houses
              }
              ascendantLongitude={
                person1AscendantLongitude ??
                undefined
              }
              midheavenLongitude={
                person1MidheavenLongitude ??
                undefined
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
      )}

      {/*
       * -----------------------------------------------------------------------
       * Roue cachée — Alexandre
       * -----------------------------------------------------------------------
       */}
      {person2Chart && (
        <div
          aria-hidden="true"
          style={{
            position:
              "fixed",

            left:
              "-12000px",

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
              person2WheelRef
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
              locale={locale}
              planets={
                person2Chart.planets
              }
              houses={
                person2Chart.houses
              }
              ascendantLongitude={
                person2AscendantLongitude ??
                undefined
              }
              midheavenLongitude={
                person2MidheavenLongitude ??
                undefined
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
      )}

      {/*
       * -----------------------------------------------------------------------
       * Affichage
       * -----------------------------------------------------------------------
       */}
      {loading ? (
        <div
          style={{
            width:
              "100%",

            height:
              "100%",

            display:
              "flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            color:
              "#fff8e7",

            fontFamily:
              "Arial, sans-serif",

            fontSize:
              16,

            textAlign:
              "center",

            padding:
              30,
          }}
        >
          Génération du rapport de compatibilité et des deux roues astrologiques...
        </div>
      ) : error ? (
        <div
          style={{
            width:
              "100%",

            height:
              "100%",

            display:
              "flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            color:
              "#fff8e7",

            fontFamily:
              "Arial, sans-serif",

            fontSize:
              16,

            padding:
              30,

            textAlign:
              "center",
          }}
        >
          {error}
        </div>
      ) : person1 &&
        person2 &&
        person1WheelImage &&
        person2WheelImage ? (
        <PDFViewer
          key={
            `${locale}-${person1WheelImage.length}-${person2WheelImage.length}`
          }
          width="100%"
          height="100%"
          style={{
            border:
              "none",
          }}
          showToolbar
        >
          <CompatibilityDocument
            person1={
              person1
            }
            person2={
              person2
            }
            aspects={
              []
            }
          />
        </PDFViewer>
      ) : null}
    </main>
  );
}
