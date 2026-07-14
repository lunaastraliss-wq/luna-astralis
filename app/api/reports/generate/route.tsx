import React from "react";
import { NextResponse } from "next/server";
import {
  createClient,
} from "@supabase/supabase-js";
import {
  renderToBuffer,
} from "@react-pdf/renderer";
import {
  calculateChart,
} from "celestine";
import tzlookup from "tz-lookup";

import EssentialPdfDocument from "@/components/EssentialPdf/EssentialPdfDocument";
import PremiumPdfDocument from "@/components/PremiumPdf/PremiumPdfDocument";
import SignaturePdfDocument from "@/components/SignaturePdf/SignaturePdfDocument";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/*
|--------------------------------------------------------------------------
| Nettoyage des valeurs
|--------------------------------------------------------------------------
*/

function clean(
  value: unknown
): string {
  return value == null
    ? ""
    : String(value).trim();
}

/*
|--------------------------------------------------------------------------
| Configuration Supabase
|--------------------------------------------------------------------------
*/

const SUPABASE_URL = clean(
  process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL
);

const SUPABASE_SERVICE_ROLE_KEY =
  clean(
    process.env
      .SUPABASE_SERVICE_ROLE_KEY
  );

const supabase =
  SUPABASE_URL &&
  SUPABASE_SERVICE_ROLE_KEY
    ? createClient(
        SUPABASE_URL,
        SUPABASE_SERVICE_ROLE_KEY,
        {
          auth: {
            persistSession: false,
            autoRefreshToken: false,
          },
        }
      )
    : null;

/*
|--------------------------------------------------------------------------
| Fuseau horaire
|--------------------------------------------------------------------------
*/

function getTimezoneOffsetHours(
  timeZone: string,
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number
): number {
  const utcDate = new Date(
    Date.UTC(
      year,
      month - 1,
      day,
      hour,
      minute,
      0
    )
  );

  const formatter =
    new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }
    );

  const parts =
    formatter.formatToParts(
      utcDate
    );

  const values: Record<
    string,
    string
  > = {};

  for (const part of parts) {
    if (
      part.type !== "literal"
    ) {
      values[part.type] =
        part.value;
    }
  }

  let formattedHour =
    Number(values.hour);

  if (formattedHour === 24) {
    formattedHour = 0;
  }

  const asUTC = Date.UTC(
    Number(values.year),
    Number(values.month) - 1,
    Number(values.day),
    formattedHour,
    Number(values.minute),
    Number(values.second)
  );

  return (
    (asUTC -
      utcDate.getTime()) /
    3_600_000
  );
}

/*
|--------------------------------------------------------------------------
| Lecture de la date de naissance
|--------------------------------------------------------------------------
*/

function parseBirthDate(
  date: string
) {
  const normalizedDate =
    clean(date);

  if (
    normalizedDate.includes(
      "/"
    )
  ) {
    const [
      day,
      month,
      year,
    ] = normalizedDate
      .split("/")
      .map(Number);

    return {
      year,
      month,
      day,
    };
  }

  const [
    year,
    month,
    day,
  ] = normalizedDate
    .split("-")
    .map(Number);

  return {
    year,
    month,
    day,
  };
}

/*
|--------------------------------------------------------------------------
| Lecture de l’heure de naissance
|--------------------------------------------------------------------------
*/

function parseBirthTime(
  time: string
) {
  const [
    hour,
    minute,
  ] = clean(time)
    .split(":")
    .map(Number);

  return {
    hour:
      Number.isFinite(hour)
        ? hour
        : 12,

    minute:
      Number.isFinite(minute)
        ? minute
        : 0,
  };
}

/*
|--------------------------------------------------------------------------
| Validation de la date
|--------------------------------------------------------------------------
*/

function isValidDateParts(
  year: number,
  month: number,
  day: number
): boolean {
  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day)
  ) {
    return false;
  }

  if (
    year < 1800 ||
    year > 2200
  ) {
    return false;
  }

  if (
    month < 1 ||
    month > 12
  ) {
    return false;
  }

  if (
    day < 1 ||
    day > 31
  ) {
    return false;
  }

  const testDate =
    new Date(
      Date.UTC(
        year,
        month - 1,
        day
      )
    );

  return (
    testDate.getUTCFullYear() ===
      year &&
    testDate.getUTCMonth() ===
      month - 1 &&
    testDate.getUTCDate() ===
      day
  );
}

/*
|--------------------------------------------------------------------------
| Validation de l’image de la roue
|--------------------------------------------------------------------------
*/

function isImageDataUrl(
  value: string
): boolean {
  return /^data:image\/(png|jpeg|jpg|webp);base64,/i.test(
    value
  );
}

function getImageMimeType(
  fileName: string,
  fileType?: string
): string {
  const normalizedType =
    clean(
      fileType
    ).toLowerCase();

  if (
    normalizedType.startsWith(
      "image/"
    )
  ) {
    return normalizedType;
  }

  const normalizedName =
    fileName.toLowerCase();

  if (
    normalizedName.endsWith(
      ".jpg"
    ) ||
    normalizedName.endsWith(
      ".jpeg"
    )
  ) {
    return "image/jpeg";
  }

  if (
    normalizedName.endsWith(
      ".webp"
    )
  ) {
    return "image/webp";
  }

  return "image/png";
}

/*
|--------------------------------------------------------------------------
| Téléchargement de la roue depuis Supabase
|--------------------------------------------------------------------------
*/

async function downloadWheelImageFromStorage(
  wheelPath: string
): Promise<string> {
  if (
    !supabase ||
    !wheelPath
  ) {
    return "";
  }

  const firstAttempt =
    await supabase.storage
      .from("rapport-pdf")
      .download(wheelPath);

  if (
    !firstAttempt.error &&
    firstAttempt.data
  ) {
    const arrayBuffer =
      await firstAttempt.data
        .arrayBuffer();

    const buffer =
      Buffer.from(
        arrayBuffer
      );

    const mimeType =
      getImageMimeType(
        wheelPath,
        firstAttempt.data.type
      );

    return `data:${mimeType};base64,${buffer.toString(
      "base64"
    )}`;
  }

  const secondAttempt =
    await supabase.storage
      .from(
        "rapport-images"
      )
      .download(wheelPath);

  if (
    !secondAttempt.error &&
    secondAttempt.data
  ) {
    const arrayBuffer =
      await secondAttempt.data
        .arrayBuffer();

    const buffer =
      Buffer.from(
        arrayBuffer
      );

    const mimeType =
      getImageMimeType(
        wheelPath,
        secondAttempt.data.type
      );

    return `data:${mimeType};base64,${buffer.toString(
      "base64"
    )}`;
  }

  console.warn(
    "WHEEL_IMAGE_DOWNLOAD_FAILED",
    {
      wheelPath,

      rapportPdfError:
        firstAttempt.error
          ?.message ||
        null,

      rapportImagesError:
        secondAttempt.error
          ?.message ||
        null,
    }
  );

  return "";
}

/*
|--------------------------------------------------------------------------
| Résolution de l’image de la roue
|--------------------------------------------------------------------------
*/

async function resolveWheelImage(
  order: any,
  birthData: any
): Promise<string> {
  const directWheelImage =
    clean(
      birthData?.wheelImage ||
        birthData?.wheel_image ||
        order?.wheel_image
    );

  if (directWheelImage) {
    if (
      isImageDataUrl(
        directWheelImage
      )
    ) {
      return directWheelImage;
    }

    if (
      directWheelImage.length >
        500 &&
      !directWheelImage.startsWith(
        "http"
      )
    ) {
      return `data:image/png;base64,${directWheelImage}`;
    }
  }

  const wheelImagePath =
    clean(
      order?.wheel_image_path ||
        birthData
          ?.wheelImagePath ||
        birthData
          ?.wheel_image_path
    );

  if (wheelImagePath) {
    return downloadWheelImageFromStorage(
      wheelImagePath
    );
  }

  return "";
}

/*
|--------------------------------------------------------------------------
| Génération du rapport
|--------------------------------------------------------------------------
*/

export async function POST(
  req: Request
) {
  try {
    /*
    |--------------------------------------------------------------------------
    | Vérification Supabase
    |--------------------------------------------------------------------------
    */

    if (!supabase) {
      return NextResponse.json(
        {
          error:
            "SUPABASE_CONFIG_MISSING",

          detail:
            "SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY est absent.",
        },
        {
          status: 500,
        }
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Lecture de la requête
    |--------------------------------------------------------------------------
    */

    const body =
      await req
        .json()
        .catch(() => null);

    const sessionId =
      clean(
        body?.session_id
      );

    if (!sessionId) {
      return NextResponse.json(
        {
          error:
            "MISSING_SESSION_ID",
        },
        {
          status: 400,
        }
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Lecture de la commande
    |--------------------------------------------------------------------------
    */

    const {
      data: order,
      error: orderError,
    } = await supabase
      .from("orders")
      .select("*")
      .eq(
        "stripe_session_id",
        sessionId
      )
      .single();

    if (
      orderError ||
      !order
    ) {
      return NextResponse.json(
        {
          error:
            "ORDER_NOT_FOUND",

          detail:
            orderError?.message ||
            null,
        },
        {
          status: 404,
        }
      );
    }

    /*
     * Le retour automatique d’un ancien PDF
     * reste désactivé afin que chaque test
     * utilise le code actuel.
     */

    /*
    |--------------------------------------------------------------------------
    | Données de naissance
    |--------------------------------------------------------------------------
    */

    const birthData =
      order.birth_data &&
      typeof order.birth_data ===
        "object"
        ? order.birth_data
        : {};

    const firstName =
      clean(
        birthData.firstName ||
          birthData.first_name ||
          order.first_name
      );

    const birthDate =
      clean(
        birthData.birthDate ||
          birthData.birth_date ||
          order.birth_date
      );

    const birthTime =
      clean(
        birthData.birthTime ||
          birthData.birth_time ||
          order.birth_time
      );

    const birthCity =
      clean(
        birthData.birthCity ||
          birthData.birth_city ||
          order.birth_city
      );

    const latitude =
      Number(
        birthData.latitude ??
          order.latitude
      );

    const longitude =
      Number(
        birthData.longitude ??
          order.longitude
      );

    if (
      !birthDate ||
      !birthTime ||
      !Number.isFinite(
        latitude
      ) ||
      !Number.isFinite(
        longitude
      )
    ) {
      return NextResponse.json(
        {
          error:
            "INVALID_BIRTH_DATA",

          birth_data:
            birthData,
        },
        {
          status: 400,
        }
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Validation de la date et de l’heure
    |--------------------------------------------------------------------------
    */

    const {
      year,
      month,
      day,
    } = parseBirthDate(
      birthDate
    );

    const {
      hour,
      minute,
    } = parseBirthTime(
      birthTime
    );

    if (
      !isValidDateParts(
        year,
        month,
        day
      )
    ) {
      return NextResponse.json(
        {
          error:
            "INVALID_BIRTH_DATE",

          birthDate,
        },
        {
          status: 400,
        }
      );
    }

    if (
      !Number.isInteger(
        hour
      ) ||
      !Number.isInteger(
        minute
      ) ||
      hour < 0 ||
      hour > 23 ||
      minute < 0 ||
      minute > 59
    ) {
      return NextResponse.json(
        {
          error:
            "INVALID_BIRTH_TIME",

          birthTime,
        },
        {
          status: 400,
        }
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Calcul du fuseau horaire
    |--------------------------------------------------------------------------
    */

    let timeZone = "";

    try {
      timeZone =
        tzlookup(
          latitude,
          longitude
        );
    } catch (
      timezoneError: any
    ) {
      return NextResponse.json(
        {
          error:
            "TIMEZONE_LOOKUP_FAILED",

          detail:
            timezoneError
              ?.message ||
            null,
        },
        {
          status: 400,
        }
      );
    }

    const timezoneOffset =
      getTimezoneOffsetHours(
        timeZone,
        year,
        month,
        day,
        hour,
        minute
      );

    /*
    |--------------------------------------------------------------------------
    | Calcul astrologique
    |--------------------------------------------------------------------------
    */

    const chart =
      calculateChart({
        year,
        month,
        day,
        hour,
        minute,
        second: 0,
        timezone:
          timezoneOffset,
        latitude,
        longitude,
      });

    console.log(
      "CELESTINE_HOUSES",
      JSON.stringify(
        (chart as any)
          ?.houses,
        null,
        2
      )
    );

    console.log(
      "FIRST_PLANET",
      JSON.stringify(
        (chart as any)
          ?.planets?.[0],
        null,
        2
      )
    );

    const planets =
      (chart as any)
        ?.planets || [];

    console.log(
      "PLANETS",
      JSON.stringify(
        planets,
        null,
        2
      )
    );

    const angles =
      (chart as any)
        ?.angles || {};

    /*
    |--------------------------------------------------------------------------
    | Image de la roue
    |--------------------------------------------------------------------------
    */

    const wheelImage =
      await resolveWheelImage(
        order,
        birthData
      );

    /*
    |--------------------------------------------------------------------------
    | Type de rapport acheté
    |--------------------------------------------------------------------------
    */

    const productType =
      clean(
        order.product_type ||
          order.report_type ||
          "essential"
      ).toLowerCase();

    console.log(
      "REPORT_GENERATION",
      {
        sessionId,
        productType,
        firstName,
        birthDate,
        birthTime,
        birthCity,
        timeZone,
        timezoneOffset,

        planetsCount:
          Array.isArray(
            planets
          )
            ? planets.length
            : 0,

        hasAngles:
          Boolean(
            angles &&
              Object.keys(
                angles
              ).length
          ),

        hasWheelImage:
          Boolean(
            wheelImage
          ),
      }
    );

    /*
    |--------------------------------------------------------------------------
    | Choix du document PDF
    |--------------------------------------------------------------------------
    */

    let pdfDocument:
      React.ReactElement;

    if (
      productType ===
      "signature"
    ) {
      pdfDocument = (
        <SignaturePdfDocument
          firstName={
            firstName
          }
          birthDate={
            birthDate
          }
          birthTime={
            birthTime
          }
          birthCity={
            birthCity
          }
          planets={
            planets
          }
          angles={
            angles
          }
          wheelImage={
            wheelImage
          }
        />
      );
    } else if (
      productType ===
      "premium"
    ) {
      pdfDocument = (
        <PremiumPdfDocument
          firstName={
            firstName
          }
          birthDate={
            birthDate
          }
          birthTime={
            birthTime
          }
          birthCity={
            birthCity
          }
          planets={
            planets
          }
          angles={
            angles
          }
          wheelImage={
            wheelImage
          }
        />
      );
    } else {
      pdfDocument = (
        <EssentialPdfDocument
          firstName={
            firstName
          }
          birthDate={
            birthDate
          }
          birthTime={
            birthTime
          }
          birthCity={
            birthCity
          }
          planets={
            planets
          }
          angles={
            angles
          }
          wheelImage={
            wheelImage
          }
        />
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Génération du fichier PDF
    |--------------------------------------------------------------------------
    */

    const pdfBuffer =
      await renderToBuffer(
        pdfDocument
      );

    /*
    |--------------------------------------------------------------------------
    | Chemin du fichier
    |--------------------------------------------------------------------------
    */

    const safeProductType =
      productType.replace(
        /[^a-zA-Z0-9-_]/g,
        "-"
      );

    const filePath =
      `${sessionId}/rapport-${safeProductType}.pdf`;

    /*
    |--------------------------------------------------------------------------
    | Téléversement dans Supabase
    |--------------------------------------------------------------------------
    */

    const {
      error: uploadError,
    } = await supabase.storage
      .from("rapport-pdf")
      .upload(
        filePath,
        pdfBuffer,
        {
          contentType:
            "application/pdf",

          upsert: true,
        }
      );

    if (uploadError) {
      return NextResponse.json(
        {
          error:
            "PDF_UPLOAD_FAILED",

          detail:
            uploadError.message,
        },
        {
          status: 500,
        }
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Mise à jour de la commande
    |--------------------------------------------------------------------------
    */

    const {
      error: updateError,
    } = await supabase
      .from("orders")
      .update({
        status: "generated",

        pdf_path:
          filePath,

        updated_at:
          new Date()
            .toISOString(),
      })
      .eq(
        "stripe_session_id",
        sessionId
      );

    if (updateError) {
      return NextResponse.json(
        {
          error:
            "ORDER_UPDATE_FAILED",

          detail:
            updateError.message,
        },
        {
          status: 500,
        }
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Création du lien signé
    |--------------------------------------------------------------------------
    */

    const {
      data: signed,
      error: signedError,
    } = await supabase.storage
      .from("rapport-pdf")
      .createSignedUrl(
        filePath,
        60 * 60
      );

    if (signedError) {
      return NextResponse.json(
        {
          error:
            "SIGNED_URL_FAILED",

          detail:
            signedError.message,

          pdf_path:
            filePath,
        },
        {
          status: 500,
        }
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Réponse
    |--------------------------------------------------------------------------
    */

    return NextResponse.json({
      ok: true,
      generated: true,

      product_type:
        productType,

      pdf_path:
        filePath,

      pdf_url:
        signed?.signedUrl ||
        null,

      wheel_included:
        Boolean(
          wheelImage
        ),
    });
 } catch (err: any) {
  console.error("REPORT_GENERATE_ERROR");
  console.error("Message:", err?.message);
  console.error("Stack:", err?.stack);
  console.error("Erreur complète:", err);

  return NextResponse.json(
    {
      error:
        err?.message ||
        "REPORT_GENERATE_ERROR",
    },
    {
      status: 500,
    }
  );
}
}
