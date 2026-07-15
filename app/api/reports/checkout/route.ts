import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ReportType =
  | "essential"
  | "premium"
  | "signature";

type CheckoutRequestBody = {
  reportType?: unknown;
  firstName?: unknown;
  birthDate?: unknown;
  birthTime?: unknown;
  birthCity?: unknown;
  birthCountry?: unknown;
  latitude?: unknown;
  longitude?: unknown;
  timezone?: unknown;
  email?: unknown;
  wheelImagePath?: unknown;
};

function s(value: unknown): string {
  return value == null
    ? ""
    : String(value).trim();
}

function cleanUrl(url: string): string {
  const value = s(url);

  return value.endsWith("/")
    ? value.slice(0, -1)
    : value;
}

function isReportType(
  value: unknown
): value is ReportType {
  return (
    value === "essential" ||
    value === "premium" ||
    value === "signature"
  );
}

const STRIPE_SECRET_KEY = s(
  process.env.STRIPE_SECRET_KEY
);

const SITE_URL = cleanUrl(
  process.env.NEXT_PUBLIC_SITE_URL || ""
);

const stripe = STRIPE_SECRET_KEY
  ? new Stripe(STRIPE_SECRET_KEY, {
      apiVersion: "2023-10-16",
    })
  : null;

const REPORT_PRICE: Record<
  ReportType,
  string
> = {
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

export async function POST(
  req: Request
) {
  try {
    if (!stripe) {
      return NextResponse.json(
        {
          error:
            "STRIPE_SECRET_KEY_MISSING",
        },
        {
          status: 500,
        }
      );
    }

    if (!SITE_URL) {
      return NextResponse.json(
        {
          error:
            "NEXT_PUBLIC_SITE_URL_MISSING",
        },
        {
          status: 500,
        }
      );
    }

    const body =
      (await req
        .json()
        .catch(
          () => null
        )) as CheckoutRequestBody | null;

    if (!body) {
      return NextResponse.json(
        {
          error: "INVALID_JSON",
        },
        {
          status: 400,
        }
      );
    }

    const reportType = s(
      body.reportType
    );

    if (
      !isReportType(
        reportType
      )
    ) {
      return NextResponse.json(
        {
          error:
            "INVALID_REPORT_TYPE",
        },
        {
          status: 400,
        }
      );
    }

    const priceId =
      REPORT_PRICE[
        reportType
      ];

    if (!priceId) {
      return NextResponse.json(
        {
          error:
            "REPORT_PRICE_MISSING",
          detail:
            `Le prix Stripe du rapport ${reportType} est absent.`,
        },
        {
          status: 500,
        }
      );
    }

    const firstName = s(
      body.firstName
    );

    const birthDate = s(
      body.birthDate
    );

    const birthTime =
      s(body.birthTime) ||
      "12:00";

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

    const email = s(
      body.email
    );

    const wheelImagePath = s(
      body.wheelImagePath
    );

    if (
      !birthDate ||
      !birthTime ||
      !birthCity ||
      !latitude ||
      !longitude
    ) {
      return NextResponse.json(
        {
          error:
            "MISSING_BIRTH_DATA",
          detail:
            "La date, l’heure, la ville et les coordonnées de naissance sont requises.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !wheelImagePath
    ) {
      return NextResponse.json(
        {
          error:
            "MISSING_WHEEL_IMAGE_PATH",
          detail:
            "Le chemin de l’image de la roue astrologique est absent.",
        },
        {
          status: 400,
        }
      );
    }

    const birthData = {
      firstName,
      birthDate,
      birthTime,
      birthCity,
      birthCountry,
      latitude,
      longitude,
      timezone,
      wheelImagePath,
    };

    const serializedBirthData =
      JSON.stringify(
        birthData
      );

    if (
      serializedBirthData.length >
      500
    ) {
      return NextResponse.json(
        {
          error:
            "BIRTH_DATA_TOO_LARGE",
          detail:
            "Les données de naissance dépassent la taille permise par Stripe.",
        },
        {
          status: 400,
        }
      );
    }

    const session =
      await stripe.checkout.sessions.create(
        {
          mode: "payment",

          line_items: [
            {
              price:
                priceId,
              quantity: 1,
            },
          ],

          customer_email:
            email ||
            undefined,

          success_url:
            `${SITE_URL}/report-success` +
            `?session_id={CHECKOUT_SESSION_ID}`,

          cancel_url:
            `${SITE_URL}/carte-du-ciel` +
            `?canceled=1`,

          metadata: {
            app:
              "luna-astralis",
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
      return NextResponse.json(
        {
          error:
            "STRIPE_SESSION_URL_MISSING",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        url:
          session.url,
        session_id:
          session.id,
        wheel_image_path:
          wheelImagePath,
      }
    );
  } catch (error: unknown) {
    console.error(
      "[reports checkout]",
      error
    );

    const message =
      error instanceof Error
        ? error.message
        : "REPORT_CHECKOUT_ERROR";

    return NextResponse.json(
      {
        error: message,
      },
      {
        status: 500,
      }
    );
  }
}
