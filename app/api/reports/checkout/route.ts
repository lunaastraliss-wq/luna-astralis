import __i18n from "../../../../i18n/migrated/fr/app/api/reports/checkout/route.json";
import {
  NextResponse,
} from "next/server";

import Stripe
  from "stripe";

export const runtime =
  "nodejs";

export const dynamic =
  "force-dynamic";

/*
|--------------------------------------------------------------------------
| Types de rapports
|--------------------------------------------------------------------------
*/

type ReportType =
  | "essential"
  | "premium"
  | "signature"
  | "compatibility"
  | "horoscope-daily"
  | "horoscope-month"
  | "horoscope-year";

/*
|--------------------------------------------------------------------------
| Données de naissance
|--------------------------------------------------------------------------
*/

type BirthPersonRequestBody = {
  firstName?: unknown;
  birthDate?: unknown;
  birthTime?: unknown;
  birthCity?: unknown;
  birthCountry?: unknown;
  latitude?: unknown;
  longitude?: unknown;
  timezone?: unknown;
  wheelImagePath?: unknown;
};

/*
|--------------------------------------------------------------------------
| Corps de la requête Stripe
|--------------------------------------------------------------------------
*/

type CheckoutRequestBody = {
  reportType?: unknown;

  /*
  |--------------------------------------------------------------------------
  | Carte du ciel et horoscopes
  |--------------------------------------------------------------------------
  */

  firstName?: unknown;
  birthDate?: unknown;
  birthTime?: unknown;
  birthCity?: unknown;
  birthCountry?: unknown;
  latitude?: unknown;
  longitude?: unknown;
  timezone?: unknown;
  wheelImagePath?: unknown;

  /*
  |--------------------------------------------------------------------------
  | Horoscope mensuel et annuel
  |--------------------------------------------------------------------------
  */

  month?: unknown;
  year?: unknown;

  /*
  |--------------------------------------------------------------------------
  | Compatibilité
  |--------------------------------------------------------------------------
  */

  person1?: BirthPersonRequestBody;
  person2?: BirthPersonRequestBody;

  /*
  |--------------------------------------------------------------------------
  | Courriel Stripe
  |--------------------------------------------------------------------------
  */

  email?: unknown;
};

type NormalizedBirthPerson = {
  firstName: string;
  birthDate: string;
  birthTime: string;
  birthCity: string;
  birthCountry: string;
  latitude: string;
  longitude: string;
  timezone: string;
  wheelImagePath: string;
};

/*
|--------------------------------------------------------------------------
| Utilitaires
|--------------------------------------------------------------------------
*/

function s(
  value: unknown,
): string {
  return value == null
    ? ""
    : String(value).trim();
}

function cleanUrl(
  url: string,
): string {
  const value =
    s(url);

  return value.endsWith("/")
    ? value.slice(0, -1)
    : value;
}

function isReportType(
  value: unknown,
): value is ReportType {
  return (
    value === "essential" ||
    value === "premium" ||
    value === "signature" ||
    value === "compatibility" ||
    value === "horoscope-daily" ||
    value === "horoscope-month" ||
    value === "horoscope-year"
  );
}

function normalizeBirthPerson(
  person?:
    | BirthPersonRequestBody
    | null,
): NormalizedBirthPerson {
  return {
    firstName:
      s(
        person?.firstName,
      ),

    birthDate:
      s(
        person?.birthDate,
      ),

    birthTime:
      s(
        person?.birthTime,
      ) ||
      "12:00",

    birthCity:
      s(
        person?.birthCity,
      ),

    birthCountry:
      s(
        person?.birthCountry,
      ),

    latitude:
      s(
        person?.latitude,
      ),

    longitude:
      s(
        person?.longitude,
      ),

    timezone:
      s(
        person?.timezone,
      ),

    wheelImagePath:
      s(
        person?.wheelImagePath,
      ),
  };
}

function hasRequiredBirthData(
  person:
    NormalizedBirthPerson,
): boolean {
  return Boolean(
    person.birthDate &&
      person.birthTime &&
      person.birthCity &&
      person.latitude &&
      person.longitude,
  );
}

function serializeMetadataValue(
  value: unknown,
  errorName: string,
): string {
  const serialized =
    JSON.stringify(
      value,
    );

  /*
   * Stripe autorise un maximum de 500 caractères
   * par valeur de metadata.
   */

  if (
    serialized.length >
    500
  ) {
    throw new Error(
      errorName,
    );
  }

  return serialized;
}

function normalizeMonth(
  value: unknown,
): string {
  const month =
    Number(
      s(value),
    );

  if (
    !Number.isInteger(
      month,
    ) ||
    month < 1 ||
    month > 12
  ) {
    return "";
  }

  return String(
    month,
  );
}

function normalizeYear(
  value: unknown,
): string {
  const year =
    Number(
      s(value),
    );

  if (
    !Number.isInteger(
      year,
    ) ||
    year < 2020 ||
    year > 2100
  ) {
    return "";
  }

  return String(
    year,
  );
}

/*
|--------------------------------------------------------------------------
| Variables d’environnement
|--------------------------------------------------------------------------
*/

const STRIPE_SECRET_KEY =
  s(
    process.env
      .STRIPE_SECRET_KEY,
  );

const SITE_URL =
  cleanUrl(
    process.env
      .NEXT_PUBLIC_SITE_URL ||
      "",
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
| Prix Stripe
|--------------------------------------------------------------------------
*/

const REPORT_PRICE:
  Record<
    ReportType,
    string
  > = {
    essential:
      s(
        process.env
          .STRIPE_PRICE_ESSENTIAL,
      ),

    premium:
      s(
        process.env
          .STRIPE_PRICE_PREMIUM,
      ),

    signature:
      s(
        process.env
          .STRIPE_PRICE_SIGNATURE,
      ),

    compatibility:
      s(
        process.env
          .STRIPE_COMPATIBILITY_PRICE_ID,
      ),

    "horoscope-daily":
      s(
        process.env
          .STRIPE_PRICE_ID_HOROSCOPE_DAILY_PREMIUM,
      ),

    "horoscope-month":
      s(
        process.env
          .STRIPE_MONTHLY_HOROSCOPE_PRICE_ID,
      ),

    "horoscope-year":
      s(
        process.env
          .STRIPE_YEARLY_HOROSCOPE_PRICE_ID,
      ),
  };

/*
|--------------------------------------------------------------------------
| Code promotionnel temporaire pour les tests
|--------------------------------------------------------------------------
|
| Ce code rend actuellement les horoscopes du jour, du mois et de l’année
| gratuits dans Stripe.
|
| Lorsque les tests seront terminés, il faudra retirer les blocs
| discounts dans les deux sections concernées.
|
|--------------------------------------------------------------------------
*/

const TEST_PROMOTION_CODE =
  "promo_1Tv14nQctELy6iN1AGOhkx6G";

/*
|--------------------------------------------------------------------------
| Route POST
|--------------------------------------------------------------------------
*/

export async function POST(
  req: Request,
) {
  try {
    /*
    |--------------------------------------------------------------------------
    | Vérification de Stripe
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

    if (!SITE_URL) {
      return NextResponse.json(
        {
          error:
            "NEXT_PUBLIC_SITE_URL_MISSING",
        },
        {
          status: 500,
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Lecture du formulaire
    |--------------------------------------------------------------------------
    */

    const body =
      (
        await req
          .json()
          .catch(
            () => null,
          )
      ) as
        | CheckoutRequestBody
        | null;

    if (!body) {
      return NextResponse.json(
        {
          error:
            "INVALID_JSON",
        },
        {
          status: 400,
        },
      );
    }

    const reportType =
      s(
        body.reportType,
      );

    if (
      !isReportType(
        reportType,
      )
    ) {
      return NextResponse.json(
        {
          error:
            "INVALID_REPORT_TYPE",
        },
        {
          status: 400,
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Prix du rapport
    |--------------------------------------------------------------------------
    */

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
        },
      );
    }

    const email =
      s(
        body.email,
      );

    /*
    |--------------------------------------------------------------------------
    | Rapport de compatibilité
    |--------------------------------------------------------------------------
    */

    if (
      reportType ===
      "compatibility"
    ) {
      const person1 =
        normalizeBirthPerson(
          body.person1,
        );

      const person2 =
        normalizeBirthPerson(
          body.person2,
        );

      if (
        !hasRequiredBirthData(
          person1,
        ) ||
        !hasRequiredBirthData(
          person2,
        )
      ) {
        return NextResponse.json(
          {
            error:
              "MISSING_COMPATIBILITY_BIRTH_DATA",

            detail:
              __i18n["la_date_l_heure_la_ville_et_les_coordonnees_de_naissance_son"],
          },
          {
            status: 400,
          },
        );
      }

      if (
        !person1
          .wheelImagePath ||
        !person2
          .wheelImagePath
      ) {
        return NextResponse.json(
          {
            error:
              "MISSING_COMPATIBILITY_WHEEL_IMAGE_PATH",

            detail:
              __i18n["les_images_des_deux_roues_astrologiques_sont_requises"],
          },
          {
            status: 400,
          },
        );
      }

      const serializedPerson1 =
        serializeMetadataValue(
          person1,
          "PERSON_1_DATA_TOO_LARGE",
        );

      const serializedPerson2 =
        serializeMetadataValue(
          person2,
          "PERSON_2_DATA_TOO_LARGE",
        );

      const session =
        await stripe
          .checkout
          .sessions
          .create({
            mode:
              "payment",

            line_items: [
              {
                price:
                  priceId,

                quantity:
                  1,
              },
            ],

            customer_email:
              email ||
              undefined,

            success_url:
              `${SITE_URL}/report-success` +
              `?session_id={CHECKOUT_SESSION_ID}`,

            cancel_url:
              `${SITE_URL}/compatibilite/premium` +
              `?canceled=1`,

            metadata: {
              app:
                "luna-astralis",

              product:
                "compatibility_report",

              report_type:
                "compatibility",

              person_1_data:
                serializedPerson1,

              person_2_data:
                serializedPerson2,
            },
          });

      if (!session.url) {
        return NextResponse.json(
          {
            error:
              "STRIPE_SESSION_URL_MISSING",
          },
          {
            status: 500,
          },
        );
      }

      return NextResponse.json(
        {
          ok:
            true,

          url:
            session.url,

          session_id:
            session.id,

          report_type:
            "compatibility",

          person_1_wheel_image_path:
            person1
              .wheelImagePath,

          person_2_wheel_image_path:
            person2
              .wheelImagePath,
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Horoscope Premium du jour
    |--------------------------------------------------------------------------
    */

    if (
      reportType ===
      "horoscope-daily"
    ) {
      const birthPerson =
        normalizeBirthPerson({
          firstName:
            body.firstName,

          birthDate:
            body.birthDate,

          birthTime:
            body.birthTime,

          birthCity:
            body.birthCity,

          birthCountry:
            body.birthCountry,

          latitude:
            body.latitude,

          longitude:
            body.longitude,

          timezone:
            body.timezone,

          wheelImagePath:
            body.wheelImagePath,
        });

      if (
        !hasRequiredBirthData(
          birthPerson,
        )
      ) {
        return NextResponse.json(
          {
            error:
              "MISSING_HOROSCOPE_BIRTH_DATA",

            detail:
              __i18n["la_date_l_heure_la_ville_et_les_coordonnees_de_naissance_son_2"],
          },
          {
            status: 400,
          },
        );
      }

      const serializedBirthData =
        serializeMetadataValue(
          birthPerson,
          "HOROSCOPE_BIRTH_DATA_TOO_LARGE",
        );

      const session =
        await stripe
          .checkout
          .sessions
          .create({
            mode:
              "payment",

            line_items: [
              {
                price:
                  priceId,

                quantity:
                  1,
              },
            ],

            customer_email:
              email ||
              undefined,

            /*
             * Gratuit temporairement pour les tests.
             */

            
            success_url:
              `${SITE_URL}/report-success` +
              `?session_id={CHECKOUT_SESSION_ID}`,

            cancel_url:
              `${SITE_URL}/horoscope/premium` +
              `?canceled=1`,

            metadata: {
              app:
                "luna-astralis",

              product:
                "horoscope_daily_report",

              report_type:
                "horoscope-daily",

              birth_data:
                serializedBirthData,
            },
          });

      if (!session.url) {
        return NextResponse.json(
          {
            error:
              "STRIPE_SESSION_URL_MISSING",
          },
          {
            status: 500,
          },
        );
      }

      return NextResponse.json(
        {
          ok:
            true,

          url:
            session.url,

          session_id:
            session.id,

          report_type:
            "horoscope-daily",
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Horoscope Premium du mois
    |--------------------------------------------------------------------------
    */

    if (
      reportType ===
      "horoscope-month"
    ) {
      const birthPerson =
        normalizeBirthPerson({
          firstName:
            body.firstName,

          birthDate:
            body.birthDate,

          birthTime:
            body.birthTime,

          birthCity:
            body.birthCity,

          birthCountry:
            body.birthCountry,

          latitude:
            body.latitude,

          longitude:
            body.longitude,

          timezone:
            body.timezone,

          wheelImagePath:
            body.wheelImagePath,
        });

      if (
        !hasRequiredBirthData(
          birthPerson,
        )
      ) {
        return NextResponse.json(
          {
            error:
              "MISSING_HOROSCOPE_MONTH_BIRTH_DATA",

            detail:
              __i18n["la_date_l_heure_la_ville_et_les_coordonnees_de_naissance_son_3"],
          },
          {
            status: 400,
          },
        );
      }

      const month =
        normalizeMonth(
          body.month,
        );

      const year =
        normalizeYear(
          body.year,
        );

      if (
        !month ||
        !year
      ) {
        return NextResponse.json(
          {
            error:
              "MISSING_HOROSCOPE_MONTH_PERIOD",

            detail:
              __i18n["le_mois_et_l_annee_du_rapport_sont_requis"],
          },
          {
            status: 400,
          },
        );
      }

      const serializedBirthData =
        serializeMetadataValue(
          birthPerson,
          "HOROSCOPE_MONTH_BIRTH_DATA_TOO_LARGE",
        );

      const session =
        await stripe
          .checkout
          .sessions
          .create({
            mode:
              "payment",

            line_items: [
              {
                price:
                  priceId,

                quantity:
                  1,
              },
            ],

            customer_email:
              email ||
              undefined,

            /*
             * Gratuit temporairement pour les tests.
             */


            success_url:
              `${SITE_URL}/report-success` +
              `?session_id={CHECKOUT_SESSION_ID}`,

            cancel_url:
              `${SITE_URL}/horoscope/premium/mois` +
              `?canceled=1`,

            metadata: {
              app:
                "luna-astralis",

              product:
                "horoscope_month_report",

              report_type:
                "horoscope-month",

              birth_data:
                serializedBirthData,

              report_month:
                month,

              report_year:
                year,
            },
          });

      if (!session.url) {
        return NextResponse.json(
          {
            error:
              "STRIPE_SESSION_URL_MISSING",
          },
          {
            status: 500,
          },
        );
      }

      return NextResponse.json(
        {
          ok:
            true,

          url:
            session.url,

          session_id:
            session.id,

          report_type:
            "horoscope-month",

          report_month:
            month,

          report_year:
            year,
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Horoscope Premium de l’année
    |--------------------------------------------------------------------------
    */

    if (
      reportType ===
      "horoscope-year"
    ) {
      const birthPerson =
        normalizeBirthPerson({
          firstName:
            body.firstName,

          birthDate:
            body.birthDate,

          birthTime:
            body.birthTime,

          birthCity:
            body.birthCity,

          birthCountry:
            body.birthCountry,

          latitude:
            body.latitude,

          longitude:
            body.longitude,

          timezone:
            body.timezone,

          wheelImagePath:
            body.wheelImagePath,
        });

      if (
        !hasRequiredBirthData(
          birthPerson,
        )
      ) {
        return NextResponse.json(
          {
            error:
              "MISSING_HOROSCOPE_YEAR_BIRTH_DATA",

            detail:
              __i18n["la_date_l_heure_la_ville_et_les_coordonnees_de_naissance_son_4"],
          },
          {
            status: 400,
          },
        );
      }

      const year =
        normalizeYear(
          body.year,
        );

      if (
        !year
      ) {
        return NextResponse.json(
          {
            error:
              "MISSING_HOROSCOPE_YEAR_PERIOD",

            detail:
              __i18n["l_annee_du_rapport_est_requise"],
          },
          {
            status: 400,
          },
        );
      }

      const serializedBirthData =
        serializeMetadataValue(
          birthPerson,
          "HOROSCOPE_YEAR_BIRTH_DATA_TOO_LARGE",
        );

      const session =
        await stripe
          .checkout
          .sessions
          .create({
            mode:
              "payment",

            line_items: [
              {
                price:
                  priceId,

                quantity:
                  1,
              },
            ],

            customer_email:
              email ||
              undefined,

            /*
             * Gratuit temporairement pour les tests.
             */

            success_url:
              `${SITE_URL}/report-success` +
              `?session_id={CHECKOUT_SESSION_ID}`,

            cancel_url:
              `${SITE_URL}/horoscope/premium/annee` +
              `?canceled=1`,

            metadata: {
              app:
                "luna-astralis",

              product:
                "horoscope_year_report",

              report_type:
                "horoscope-year",

              birth_data:
                serializedBirthData,

              report_year:
                year,
            },
          });

      if (!session.url) {
        return NextResponse.json(
          {
            error:
              "STRIPE_SESSION_URL_MISSING",
          },
          {
            status: 500,
          },
        );
      }

      return NextResponse.json(
        {
          ok:
            true,

          url:
            session.url,

          session_id:
            session.id,

          report_type:
            "horoscope-year",

          report_year:
            year,
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Carte du ciel : Essentielle, Premium et Signature
    |--------------------------------------------------------------------------
    */

    const birthPerson =
      normalizeBirthPerson({
        firstName:
          body.firstName,

        birthDate:
          body.birthDate,

        birthTime:
          body.birthTime,

        birthCity:
          body.birthCity,

        birthCountry:
          body.birthCountry,

        latitude:
          body.latitude,

        longitude:
          body.longitude,

        timezone:
          body.timezone,

        wheelImagePath:
          body.wheelImagePath,
      });

    if (
      !hasRequiredBirthData(
        birthPerson,
      )
    ) {
      return NextResponse.json(
        {
          error:
            "MISSING_BIRTH_DATA",

          detail:
            __i18n["la_date_l_heure_la_ville_et_les_coordonnees_de_naissance_son_5"],
        },
        {
          status: 400,
        },
      );
    }

    if (
      !birthPerson
        .wheelImagePath
    ) {
      return NextResponse.json(
        {
          error:
            "MISSING_WHEEL_IMAGE_PATH",

          detail:
            __i18n["le_chemin_de_l_image_de_la_roue_astrologique_est_absent"],
        },
        {
          status: 400,
        },
      );
    }

    const serializedBirthData =
      serializeMetadataValue(
        birthPerson,
        "BIRTH_DATA_TOO_LARGE",
      );

    const session =
      await stripe
        .checkout
        .sessions
        .create({
          mode:
            "payment",

          line_items: [
            {
              price:
                priceId,

              quantity:
                1,
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
        });

    if (!session.url) {
      return NextResponse.json(
        {
          error:
            "STRIPE_SESSION_URL_MISSING",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json(
      {
        ok:
          true,

        url:
          session.url,

        session_id:
          session.id,

        wheel_image_path:
          birthPerson
            .wheelImagePath,
      },
    );
  } catch (
    error: unknown
  ) {
    console.error(
      "[reports checkout]",
      error,
    );

    const message =
      error instanceof Error
        ? error.message
        : "REPORT_CHECKOUT_ERROR";

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
