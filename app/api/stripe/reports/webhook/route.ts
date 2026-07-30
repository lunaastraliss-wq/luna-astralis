import {
  NextResponse,
} from "next/server";

import Stripe
  from "stripe";

import {
  createClient,
} from "@supabase/supabase-js";

export const runtime =
  "nodejs";

export const dynamic =
  "force-dynamic";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type JsonRecord =
  Record<string, any>;

/*
|--------------------------------------------------------------------------
| Utilitaires
|--------------------------------------------------------------------------
*/

function clean(
  value: unknown,
): string {
  return value == null
    ? ""
    : String(value).trim();
}

function normalize(
  value: unknown,
): string {
  return clean(value)
    .toLowerCase()
    .replace(/-/g, "_")
    .replace(/\s+/g, "_");
}

function parseJsonMetadata(
  value:
    | string
    | null
    | undefined,
): JsonRecord {
  if (!value) {
    return {};
  }

  try {
    const parsed =
      JSON.parse(value);

    if (
      parsed &&
      typeof parsed === "object" &&
      !Array.isArray(parsed)
    ) {
      return parsed;
    }

    return {};
  } catch {
    return {};
  }
}

/*
|--------------------------------------------------------------------------
| Variables d’environnement
|--------------------------------------------------------------------------
*/

const STRIPE_SECRET_KEY =
  clean(
    process.env
      .STRIPE_SECRET_KEY,
  );

const STRIPE_REPORTS_WEBHOOK_SECRET =
  clean(
    process.env
      .STRIPE_REPORTS_WEBHOOK_SECRET,
  );

const SUPABASE_URL =
  clean(
    process.env
      .SUPABASE_URL ||
      process.env
        .NEXT_PUBLIC_SUPABASE_URL,
  );

const SUPABASE_SERVICE_ROLE_KEY =
  clean(
    process.env
      .SUPABASE_SERVICE_ROLE_KEY,
  );

/*
|--------------------------------------------------------------------------
| Stripe
|--------------------------------------------------------------------------
*/

const stripe =
  STRIPE_SECRET_KEY
    ? new Stripe(
        STRIPE_SECRET_KEY,
        {
          apiVersion:
            "2023-10-16",
        },
      )
    : null;

/*
|--------------------------------------------------------------------------
| Supabase
|--------------------------------------------------------------------------
*/

const supabase =
  SUPABASE_URL &&
  SUPABASE_SERVICE_ROLE_KEY
    ? createClient(
        SUPABASE_URL,
        SUPABASE_SERVICE_ROLE_KEY,
        {
          auth: {
            persistSession:
              false,

            autoRefreshToken:
              false,
          },
        },
      )
    : null;

/*
|--------------------------------------------------------------------------
| Route de vérification
|--------------------------------------------------------------------------
*/

export async function GET() {
  return NextResponse.json({
    ok:
      true,

    message:
      "Reports webhook is active. Stripe must call this route with POST.",
  });
}

/*
|--------------------------------------------------------------------------
| Webhook Stripe
|--------------------------------------------------------------------------
*/

export async function POST(
  req: Request,
) {
  try {
    /*
    |--------------------------------------------------------------------------
    | Vérification de la configuration
    |--------------------------------------------------------------------------
    */

    if (!stripe) {
      return NextResponse.json(
        {
          error:
            "STRIPE_SECRET_KEY_MISSING",
        },
        {
          status: 500,
        },
      );
    }

    if (
      !STRIPE_REPORTS_WEBHOOK_SECRET
    ) {
      return NextResponse.json(
        {
          error:
            "STRIPE_REPORTS_WEBHOOK_SECRET_MISSING",
        },
        {
          status: 500,
        },
      );
    }

    if (!supabase) {
      return NextResponse.json(
        {
          error:
            "SUPABASE_CONFIG_MISSING",
        },
        {
          status: 500,
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Signature Stripe
    |--------------------------------------------------------------------------
    */

    const signature =
      req.headers.get(
        "stripe-signature",
      );

    if (!signature) {
      return NextResponse.json(
        {
          error:
            "MISSING_STRIPE_SIGNATURE",
        },
        {
          status: 400,
        },
      );
    }

    const rawBody =
      await req.text();

    let event:
      Stripe.Event;

    try {
      event =
        stripe.webhooks
          .constructEvent(
            rawBody,
            signature,
            STRIPE_REPORTS_WEBHOOK_SECRET,
          );
    } catch (
      error: unknown
    ) {
      const message =
        error instanceof Error
          ? error.message
          : String(error);

      return NextResponse.json(
        {
          error:
            "INVALID_STRIPE_SIGNATURE",

          detail:
            message,
        },
        {
          status: 400,
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Événements acceptés
    |--------------------------------------------------------------------------
    */

    if (
      event.type !==
      "checkout.session.completed"
    ) {
      return NextResponse.json({
        received:
          true,

        ignored:
          event.type,
      });
    }

    const session =
      event.data.object as
        Stripe.Checkout.Session;

    /*
    |--------------------------------------------------------------------------
    | Vérification du paiement
    |--------------------------------------------------------------------------
    */

    if (
      session.payment_status !==
      "paid"
    ) {
      return NextResponse.json({
        received:
          true,

        ignored:
          "PAYMENT_NOT_PAID",

        payment_status:
          session.payment_status,
      });
    }

    /*
    |--------------------------------------------------------------------------
    | Métadonnées Stripe
    |--------------------------------------------------------------------------
    */

    const metadata =
      session.metadata || {};

    const product =
      normalize(
        metadata.product,
      );

    const reportType =
      normalize(
        metadata.report_type,
      );

    /*
    |--------------------------------------------------------------------------
    | Détection du type de produit
    |--------------------------------------------------------------------------
    */

    const isNatalReport =
      product ===
        "astrology_report" ||
      [
        "essential",
        "premium",
        "signature",
      ].includes(
        reportType,
      );

    const isCompatibilityReport =
      product ===
        "compatibility_report" ||
      reportType ===
        "compatibility";

    const isHoroscopeDailyReport =
      product ===
        "horoscope_daily_report" ||
      reportType ===
        "horoscope_daily";

    const isHoroscopeMonthReport =
      product ===
        "horoscope_month_report" ||
      reportType ===
        "horoscope_month";

    const isHoroscopeYearReport =
      product ===
        "horoscope_year_report" ||
      reportType ===
        "horoscope_year";

    /*
    |--------------------------------------------------------------------------
    | Vérification du produit
    |--------------------------------------------------------------------------
    */

    const isSupportedReport =
      isNatalReport ||
      isCompatibilityReport ||
      isHoroscopeDailyReport ||
      isHoroscopeMonthReport ||
      isHoroscopeYearReport;

    if (!isSupportedReport) {
      return NextResponse.json({
        received:
          true,

        ignored:
          "NOT_SUPPORTED_REPORT",

        product,

        report_type:
          reportType,
      });
    }

    if (!reportType) {
      return NextResponse.json({
        received:
          true,

        warning:
          "MISSING_REPORT_TYPE",

        product,
      });
    }

    /*
    |--------------------------------------------------------------------------
    | Données du rapport
    |--------------------------------------------------------------------------
    */

    let birthData:
      JsonRecord = {};

    if (
      isCompatibilityReport
    ) {
      /*
      |--------------------------------------------------------------------------
      | Compatibilité
      |--------------------------------------------------------------------------
      */

      const person1 =
        parseJsonMetadata(
          metadata.person_1_data,
        );

      const person2 =
        parseJsonMetadata(
          metadata.person_2_data,
        );

      if (
        Object.keys(person1)
          .length === 0 ||
        Object.keys(person2)
          .length === 0
      ) {
        return NextResponse.json({
          received:
            true,

          warning:
            "MISSING_COMPATIBILITY_DATA",
        });
      }

      birthData = {
        person1,
        person2,
      };
    } else {
      /*
      |--------------------------------------------------------------------------
      | Carte du ciel et horoscopes
      |--------------------------------------------------------------------------
      */

      birthData =
        parseJsonMetadata(
          metadata.birth_data,
        );

      if (
        Object.keys(birthData)
          .length === 0
      ) {
        return NextResponse.json({
          received:
            true,

          warning:
            "MISSING_BIRTH_DATA",
        });
      }

      /*
      |--------------------------------------------------------------------------
      | Horoscope mensuel
      |--------------------------------------------------------------------------
      */

      if (
        isHoroscopeMonthReport
      ) {
        const reportMonth =
          clean(
            metadata.report_month,
          );

        const reportYear =
          clean(
            metadata.report_year,
          );

        if (
          !reportMonth ||
          !reportYear
        ) {
          return NextResponse.json({
            received:
              true,

            warning:
              "MISSING_HOROSCOPE_MONTH_PERIOD",
          });
        }

        birthData = {
          ...birthData,

          reportMonth,
          reportYear,

          report_month:
            reportMonth,

          report_year:
            reportYear,
        };
      }

      /*
      |--------------------------------------------------------------------------
      | Horoscope annuel
      |--------------------------------------------------------------------------
      */

      if (
        isHoroscopeYearReport
      ) {
        const reportYear =
          clean(
            metadata.report_year,
          );

        if (!reportYear) {
          return NextResponse.json({
            received:
              true,

            warning:
              "MISSING_HOROSCOPE_YEAR_PERIOD",
          });
        }

        birthData = {
          ...birthData,

          reportYear,

          report_year:
            reportYear,
        };
      }
    }

    /*
    |--------------------------------------------------------------------------
    | Courriel du client
    |--------------------------------------------------------------------------
    */

    const customerEmail =
      session
        .customer_details
        ?.email ||
      session
        .customer_email ||
      null;

    /*
    |--------------------------------------------------------------------------
    | Sauvegarde de la commande
    |--------------------------------------------------------------------------
    */

    const {
      error:
        orderError,
    } =
      await supabase
        .from(
          "orders",
        )
        .upsert(
          {
            stripe_session_id:
              session.id,

            customer_email:
              customerEmail,

            product_type:
              reportType,

            status:
              "paid",

            birth_data:
              birthData,

            pdf_path:
              null,

            updated_at:
              new Date()
                .toISOString(),
          },
          {
            onConflict:
              "stripe_session_id",
          },
        );

    if (orderError) {
      console.error(
        "ORDER_SAVE_FAILED",
        orderError,
      );

      return NextResponse.json(
        {
          received:
            true,

          warning:
            "ORDER_SAVE_FAILED",

          detail:
            orderError.message,
        },
        {
          status: 200,
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Réponse
    |--------------------------------------------------------------------------
    */

    return NextResponse.json({
      received:
        true,

      saved:
        true,

      session_id:
        session.id,

      report_type:
        reportType,

      product,

      ...(isHoroscopeMonthReport
        ? {
            report_month:
              clean(
                metadata.report_month,
              ),

            report_year:
              clean(
                metadata.report_year,
              ),
          }
        : {}),

      ...(isHoroscopeYearReport
        ? {
            report_year:
              clean(
                metadata.report_year,
              ),
          }
        : {}),
    });
  } catch (
    error: unknown
  ) {
    const message =
      error instanceof Error
        ? error.message
        : "REPORTS_WEBHOOK_ERROR";

    console.error(
      "REPORTS_WEBHOOK_ERROR",
      error,
    );

    return NextResponse.json(
      {
        error:
          message,
      },
      {
        status: 500,
      },
    );
  }
}
