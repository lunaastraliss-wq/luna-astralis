import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ReportType = "essential" | "premium" | "signature";

function s(value: unknown): string {
  return value == null ? "" : String(value).trim();
}

function cleanUrl(url: string): string {
  const value = s(url);

  return value.endsWith("/")
    ? value.slice(0, -1)
    : value;
}

function isReportType(value: unknown): value is ReportType {
  return (
    value === "essential" ||
    value === "premium" ||
    value === "signature"
  );
}

const STRIPE_SECRET_KEY = s(
  process.env.STRIPE_SECRET_KEY
);

const SUPABASE_URL = s(
  process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL
);

const SUPABASE_SERVICE_ROLE_KEY = s(
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SITE_URL = cleanUrl(
  process.env.NEXT_PUBLIC_SITE_URL || ""
);

const stripe = STRIPE_SECRET_KEY
  ? new Stripe(STRIPE_SECRET_KEY, {
      apiVersion: "2023-10-16",
    })
  : null;

const supabase =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
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

const REPORT_PRICE: Record<ReportType, string> = {
  essential: s(
    process.env.STRIPE_PRICE_ESSENTIAL
  ),
  premium: s(
    process.env.STRIPE_PRICE_PREMIUM
  ),
  signature: s(
    process.env.STRIPE_PRICE_SIGNATURE
  ),
};

function decodePngDataUrl(
  dataUrl: string
): Buffer | null {
  const match = dataUrl.match(
    /^data:image\/png;base64,([A-Za-z0-9+/=\r\n]+)$/
  );

  if (!match?.[1]) {
    return null;
  }

  try {
    return Buffer.from(
      match[1].replace(/\s/g, ""),
      "base64"
    );
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  let uploadedWheelPath = "";

  try {
    if (!stripe) {
      return NextResponse.json(
        {
          error: "STRIPE_SECRET_KEY_MISSING",
        },
        { status: 500 }
      );
    }

    if (!supabase) {
      return NextResponse.json(
        {
          error: "SUPABASE_CONFIG_MISSING",
        },
        { status: 500 }
      );
    }

    if (!SITE_URL) {
      return NextResponse.json(
        {
          error: "NEXT_PUBLIC_SITE_URL_MISSING",
        },
        { status: 500 }
      );
    }

    const body = await req
      .json()
      .catch(() => null);

    if (!body) {
      return NextResponse.json(
        {
          error: "INVALID_JSON",
        },
        { status: 400 }
      );
    }

    const reportType = s(
      body.reportType
    );

    if (!isReportType(reportType)) {
      return NextResponse.json(
        {
          error: "INVALID_REPORT_TYPE",
        },
        { status: 400 }
      );
    }

    const priceId =
      REPORT_PRICE[reportType];

    if (!priceId) {
      return NextResponse.json(
        {
          error: "REPORT_PRICE_MISSING",
        },
        { status: 500 }
      );
    }

    const firstName = s(
      body.firstName
    );

    const birthDate = s(
      body.birthDate
    );

    const birthTime =
      s(body.birthTime) || "12:00";

    const birthCity = s(
      body.birthCity
    );

    const birthCountry = s(
      body.birthCountry
    );

    const latitude = s(
      body.latitude
    );

    const longitude = s(
      body.longitude
    );

    const timezone = s(
      body.timezone
    );

    if (
      !firstName ||
      !birthDate ||
      !birthTime ||
      !birthCity
    ) {
      return NextResponse.json(
        {
          error: "MISSING_BIRTH_DATA",
        },
        { status: 400 }
      );
    }

    const wheelImage = s(
      body.wheelImage
    );

    if (!wheelImage) {
      return NextResponse.json(
        {
          error: "MISSING_WHEEL_IMAGE",
          detail:
            "L’image PNG de la roue astrologique est absente.",
        },
        { status: 400 }
      );
    }

    const wheelBuffer =
      decodePngDataUrl(wheelImage);

    if (
      !wheelBuffer ||
      wheelBuffer.length === 0
    ) {
      return NextResponse.json(
        {
          error: "INVALID_WHEEL_IMAGE",
          detail:
            "Le contenu reçu n’est pas une image PNG valide.",
        },
        { status: 400 }
      );
    }

    /*
     * Protection contre une image anormalement grosse.
     * 12 Mo est largement suffisant pour la roue générée.
     */
    const maximumImageSize =
      12 * 1024 * 1024;

    if (
      wheelBuffer.length >
      maximumImageSize
    ) {
      return NextResponse.json(
        {
          error: "WHEEL_IMAGE_TOO_LARGE",
          detail:
            "L’image de la roue dépasse la taille autorisée.",
        },
        { status: 413 }
      );
    }

    const requestId =
      randomUUID();

    uploadedWheelPath =
      `pending/${requestId}/roue-astrologique.png`;

    const {
      error: wheelUploadError,
    } = await supabase.storage
      .from("rapport-pdf")
      .upload(
        uploadedWheelPath,
        wheelBuffer,
        {
          contentType: "image/png",
          upsert: false,
          cacheControl: "3600",
        }
      );

    if (wheelUploadError) {
      return NextResponse.json(
        {
          error:
            "WHEEL_IMAGE_UPLOAD_FAILED",
          detail:
            wheelUploadError.message,
        },
        { status: 500 }
      );
    }

    /*
     * L’image elle-même n’est pas placée dans Stripe.
     * On conserve seulement son chemin Supabase.
     */
    const birthData = {
      firstName,
      birthDate,
      birthTime,
      birthCity,
      birthCountry,
      latitude,
      longitude,
      timezone,
      wheelImagePath:
        uploadedWheelPath,
    };

    const serializedBirthData =
      JSON.stringify(birthData);

    /*
     * Stripe limite fortement la taille d’une valeur metadata.
     * Ce JSON demeure petit puisqu’il contient seulement le chemin.
     */
    if (
      serializedBirthData.length >
      500
    ) {
      await supabase.storage
        .from("rapport-pdf")
        .remove([
          uploadedWheelPath,
        ]);

      return NextResponse.json(
        {
          error:
            "BIRTH_DATA_TOO_LARGE",
        },
        { status: 400 }
      );
    }

    const session =
      await stripe.checkout.sessions.create(
        {
          mode: "payment",

          line_items: [
            {
              price: priceId,
              quantity: 1,
            },
          ],

          /*
           * TEMPORAIRE POUR LES TESTS.
           * Retire cette ligne lorsque les tests
           * gratuits seront terminés.
           */
          discounts: [
            {
              coupon: "GIsj9JR0",
            },
          ],

          customer_email:
            s(body.email) ||
            undefined,

          success_url:
            `${SITE_URL}/report-success` +
            `?session_id={CHECKOUT_SESSION_ID}`,

          cancel_url:
            `${SITE_URL}/carte-du-ciel` +
            `?canceled=1`,

          metadata: {
            app: "luna-astralis",
            product:
              "astrology_report",
            report_type:
              reportType,
            birth_data:
              serializedBirthData,
          },
        }
      );

    if (!session.url) {
      await supabase.storage
        .from("rapport-pdf")
        .remove([
          uploadedWheelPath,
        ]);

      return NextResponse.json(
        {
          error:
            "STRIPE_SESSION_URL_MISSING",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      url: session.url,
      session_id: session.id,
      wheel_image_path:
        uploadedWheelPath,
    });
  } catch (error: any) {
    console.error(
      "[reports checkout]",
      error
    );

    /*
     * Si Stripe échoue après le téléversement,
     * on supprime l’image temporaire.
     */
    if (
      supabase &&
      uploadedWheelPath
    ) {
      await supabase.storage
        .from("rapport-pdf")
        .remove([
          uploadedWheelPath,
        ])
        .catch(() => null);
    }

    return NextResponse.json(
      {
        error:
          error?.message ||
          "REPORT_CHECKOUT_ERROR",
      },
      { status: 500 }
    );
  }
}
