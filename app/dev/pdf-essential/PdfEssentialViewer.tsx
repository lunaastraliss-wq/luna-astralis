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

import EssentialPdfDocumentFr
  from "@/paid-pdf-generated/fr/EssentialPdf/EssentialPdfDocument";

import EssentialPdfDocumentEn
  from "@/paid-pdf-generated/en/EssentialPdf/EssentialPdfDocument";

import EssentialPdfDocumentEs
  from "@/paid-pdf-generated/es/EssentialPdf/EssentialPdfDocument";

import EssentialPdfDocumentDe
  from "@/paid-pdf-generated/de/EssentialPdf/EssentialPdfDocument";

import EssentialPdfDocumentIt
  from "@/paid-pdf-generated/it/EssentialPdf/EssentialPdfDocument";

import EssentialPdfDocumentPt
  from "@/paid-pdf-generated/pt/EssentialPdf/EssentialPdfDocument";

type Locale =
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

const PDF_DOCUMENTS = {
  fr: EssentialPdfDocumentFr,
  en: EssentialPdfDocumentEn,
  es: EssentialPdfDocumentEs,
  de: EssentialPdfDocumentDe,
  it: EssentialPdfDocumentIt,
  pt: EssentialPdfDocumentPt,
};

const LANGUAGES: Locale[] = [
  "fr",
  "en",
  "es",
  "de",
  "it",
  "pt",
];

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
  value: string | null
): Locale {
  if (
    value &&
    LANGUAGES.includes(
      value as Locale
    )
  ) {
    return value as Locale;
  }

  return "fr";
}

function getAngleLongitude(
  angle: any
): number | null {
  if (
    typeof angle === "number" &&
    Number.isFinite(angle)
  ) {
    return angle;
  }

  const longitude =
    Number(
      angle?.longitude
    );

  return Number.isFinite(
    longitude
  )
    ? longitude
    : null;
}

export default function PdfEssentialViewer() {
  const searchParams =
    useSearchParams();

  const locale =
    normalizeLocale(
      searchParams.get(
        "locale"
      )
    );

  const EssentialDocument =
    PDF_DOCUMENTS[
      locale
    ];

  const pdfWheelRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const [
    chart,
    setChart,
  ] =
    useState<ChartData | null>(
      null
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
    let cancelled = false;

    async function loadChart() {
      try {
        setLoading(true);
        setError("");

        /*
        |--------------------------------------------------------------------------
        | Géocodage de Québec
        |--------------------------------------------------------------------------
        */

        const geoResponse =
          await fetch(
            `/api/geocode?city=${encodeURIComponent(
              "Québec"
            )}`,
            {
              method: "GET",
              cache: "no-store",
            }
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
              "Géocodage impossible"
          );
        }

        const latitude =
          Number(
            geoData.result.latitude
          );

        const longitude =
          Number(
            geoData.result.longitude
          );

        if (
          !Number.isFinite(
            latitude
          ) ||
          !Number.isFinite(
            longitude
          )
        ) {
          throw new Error(
            "Coordonnées invalides"
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
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              cache: "no-store",

              body:
                JSON.stringify({
                  year: 1970,
                  month: 11,
                  day: 17,
                  hour: 21,
                  minute: 36,
                  latitude,
                  longitude,
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
          throw new Error(
            chartData?.error ||
              "Calcul astrologique impossible"
          );
        }

        if (cancelled) {
          return;
        }

        const calculatedChart =
          chartData.chart;

        const planets =
          (
            calculatedChart?.planets ||
            []
          ).filter(
            (
              planet: any
            ) =>
              MAIN_PLANETS.includes(
                planet?.name
              )
          );

        setChart({
          planets,

          houses:
            calculatedChart?.houses ||
            [],

          angles:
            calculatedChart?.angles ||
            {},
        });
      } catch (
        loadError
      ) {
        console.error(
          "Erreur DEV Essential:",
          loadError
        );

        if (!cancelled) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Erreur de calcul"
          );

          setLoading(false);
        }
      }
    }

    loadChart();

    return () => {
      cancelled = true;
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | 2. Capture de la vraie roue en PNG
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!chart) {
      return;
    }

    let cancelled = false;

    async function createWheelImage() {
      try {
        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              350
            )
        );

        if (
          !pdfWheelRef.current
        ) {
          throw new Error(
            "Roue PDF introuvable"
          );
        }

        const canvas =
          await html2canvas(
            pdfWheelRef.current,
            {
              backgroundColor:
                "#0b1124",

              scale: 3,

              useCORS: true,

              logging: false,
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
            "La roue PNG n’a pas pu être créée"
          );
        }

        if (cancelled) {
          return;
        }

        setWheelImage(
          image
        );

        setLoading(
          false
        );
      } catch (
        wheelError
      ) {
        console.error(
          "Erreur génération roue Essential DEV:",
          wheelError
        );

        if (!cancelled) {
          setError(
            wheelError instanceof Error
              ? wheelError.message
              : "Erreur de génération de la roue"
          );

          setLoading(
            false
          );
        }
      }
    }

    createWheelImage();

    return () => {
      cancelled = true;
    };
  }, [
    chart,
  ]);

  /*
  |--------------------------------------------------------------------------
  | 3. Angles envoyés au PDF
  |--------------------------------------------------------------------------
  */

  const ascendantLongitude =
    getAngleLongitude(
      chart?.angles
        ?.ascendant
    );

  const midheavenLongitude =
    getAngleLongitude(
      chart?.angles
        ?.midheaven
    );

  const descendantLongitude =
    getAngleLongitude(
      chart?.angles
        ?.descendant
    );

  const imumCoeliLongitude =
    getAngleLongitude(
      chart?.angles
        ?.imumCoeli
    );

  const pdfAngles = {
    ascendant:
      ascendantLongitude,

    midheaven:
      midheavenLongitude,

    descendant:
      descendantLongitude,

    imumCoeli:
      imumCoeliLongitude,
  };

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
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
        {LANGUAGES.map(
          (
            language
          ) => (
            <Link
              key={
                language
              }

              href={
                `/dev/pdf-essential?locale=${language}`
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
                language.toUpperCase()
              }
            </Link>
          )
        )}
      </div>

      {/*
      |--------------------------------------------------------------------------
      | Roue cachée
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
          Génération du rapport Essentiel et de la roue astrologique...
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
          <EssentialDocument
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
