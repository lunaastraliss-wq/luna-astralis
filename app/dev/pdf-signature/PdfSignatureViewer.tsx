"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  PDFViewer,
} from "@react-pdf/renderer";

import {
  useSearchParams,
} from "next/navigation";

import Link from "next/link";
import html2canvas from "html2canvas";

import NatalChartWheel from "@/components/NatalChartWheel";

import SignaturePdfDocumentFr
  from "@/paid-pdf-generated/fr/SignaturePdf/SignaturePdfDocument";

import SignaturePdfDocumentEn
  from "@/paid-pdf-generated/en/SignaturePdf/SignaturePdfDocument";

import SignaturePdfDocumentEs
  from "@/paid-pdf-generated/es/SignaturePdf/SignaturePdfDocument";

import SignaturePdfDocumentDe
  from "@/paid-pdf-generated/de/SignaturePdf/SignaturePdfDocument";

import SignaturePdfDocumentIt
  from "@/paid-pdf-generated/it/SignaturePdf/SignaturePdfDocument";

import SignaturePdfDocumentPt
  from "@/paid-pdf-generated/pt/SignaturePdf/SignaturePdfDocument";

type SignatureLocale =
  | "fr"
  | "en"
  | "es"
  | "de"
  | "it"
  | "pt";

type ChartData = {
  planets: any[];
  houses: any;
  angles: any;
};

const SUPPORTED_LOCALES:
SignatureLocale[] = [
  "fr",
  "en",
  "es",
  "de",
  "it",
  "pt",
];

const LANGUAGE_LABELS:
Record<
  SignatureLocale,
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
  fr: SignaturePdfDocumentFr,
  en: SignaturePdfDocumentEn,
  es: SignaturePdfDocumentEs,
  de: SignaturePdfDocumentDe,
  it: SignaturePdfDocumentIt,
  pt: SignaturePdfDocumentPt,
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

function normalizeLocale(
  value:
    | string
    | null,
): SignatureLocale {
  if (
    value &&
    SUPPORTED_LOCALES.includes(
      value as SignatureLocale,
    )
  ) {
    return value as SignatureLocale;
  }

  return "fr";
}

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

export default function PdfSignatureViewer() {
  const searchParams =
    useSearchParams();

  const locale =
    normalizeLocale(
      searchParams.get(
        "locale",
      ),
    );

  const SignatureDocument =
    PDF_DOCUMENTS[
      locale
    ];

  const pdfWheelRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  const [
    chart,
    setChart,
  ] =
    useState<ChartData | null>(
      null,
    );

  const [
    wheelImage,
    setWheelImage,
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
  |--------------------------------------------------------------------------
  | 1. Calcul réel de la carte de Martine
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    let cancelled =
      false;

    async function loadChart() {
      try {
        setLoading(
          true,
        );

        setError(
          "",
        );

        /*
        |--------------------------------------------------------------------------
        | Géocodage de Québec
        |--------------------------------------------------------------------------
        */

        const geoResponse =
          await fetch(
            `/api/geocode?city=${encodeURIComponent(
              "Québec",
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
              "Géocodage impossible",
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
            "Coordonnées invalides",
          );
        }

        /*
        |--------------------------------------------------------------------------
        | Calcul natal réel
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
              "Calcul astrologique impossible",
          );
        }

        if (
          cancelled
        ) {
          return;
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

        setChart({
          planets,

          houses:
            calculatedChart
              ?.houses ||
            [],

          angles:
            calculatedChart
              ?.angles ||
            {},
        });
      } catch (
        loadError
      ) {
        console.error(
          "Erreur DEV Signature:",
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

    loadChart();

    return () => {
      cancelled =
        true;
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | 2. Capture de la vraie roue en PNG
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (
      !chart
    ) {
      return;
    }

    let cancelled =
      false;

    async function createWheelImage() {
      try {
        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              350,
            ),
        );

        if (
          !pdfWheelRef.current
        ) {
          throw new Error(
            "Roue PDF introuvable",
          );
        }

        const canvas =
          await html2canvas(
            pdfWheelRef.current,
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
          );

        const image =
          canvas.toDataURL(
            "image/png",
          );

        if (
          !image ||
          !image.startsWith(
            "data:image/png;base64,",
          )
        ) {
          throw new Error(
            "La roue PNG n’a pas pu être créée",
          );
        }

        if (
          cancelled
        ) {
          return;
        }

        setWheelImage(
          image,
        );

        setLoading(
          false,
        );
      } catch (
        wheelError
      ) {
        console.error(
          "Erreur génération roue Signature DEV:",
          wheelError,
        );

        if (
          !cancelled
        ) {
          setError(
            wheelError instanceof
            Error
              ? wheelError.message
              : "Erreur de génération de la roue",
          );

          setLoading(
            false,
          );
        }
      }
    }

    createWheelImage();

    return () => {
      cancelled =
        true;
    };
  }, [
    chart,
  ]);

  /*
  |--------------------------------------------------------------------------
  | 3. Angles utilisés par la roue
  |--------------------------------------------------------------------------
  */

  const ascendantLongitude =
    getAngleLongitude(
      chart?.angles
        ?.ascendant,
    );

  const midheavenLongitude =
    getAngleLongitude(
      chart?.angles
        ?.midheaven,
    );

  /*
  |--------------------------------------------------------------------------
  | 4. Angles complets envoyés au PDF
  |--------------------------------------------------------------------------
  */

  const pdfAngles = {
    ascendant:
      chart?.angles
        ?.ascendant ||
      null,

    midheaven:
      chart?.angles
        ?.midheaven ||
      null,

    descendant:
      chart?.angles
        ?.descendant ||
      null,

    imumCoeli:
      chart?.angles
        ?.imumCoeli ||
      null,
  };

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
      |--------------------------------------------------------------------------
      | Sélecteur des 6 langues
      |--------------------------------------------------------------------------
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
                `/dev/pdf-signature?locale=${language}`
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
      |--------------------------------------------------------------------------
      | Roue cachée identique aux autres PDF
      |--------------------------------------------------------------------------
      */}

      {chart && (
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
              locale={
                locale
              }

              planets={
                chart.planets
              }

              houses={
                chart.houses
              }

              ascendantLongitude={
                ascendantLongitude ??
                undefined
              }

              midheavenLongitude={
                midheavenLongitude ??
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
      |--------------------------------------------------------------------------
      | Chargement
      |--------------------------------------------------------------------------
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
          }}
        >
          Génération du rapport Signature et de la roue astrologique...
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

            padding:
              30,

            textAlign:
              "center",
          }}
        >
          {error}
        </div>
      ) : chart &&
        wheelImage ? (
        <PDFViewer
          key={
            `${locale}-${wheelImage.length}`
          }

          width="100%"

          height="100%"

          style={{
            border:
              "none",
          }}

          showToolbar
        >
          <SignatureDocument
            firstName="Martine"

            birthDate="17/11/1970"

            birthTime="21:36"

            birthCity="Québec"

            planets={
              chart.planets
            }

            angles={
              pdfAngles
            }

            wheelImage={
              wheelImage
            }

            locale={
              locale
            }
          />
        </PDFViewer>
      ) : null}
    </main>
  );
}
