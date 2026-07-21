import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ReportType =
  | "essential"
  | "premium"
  | "signature"
  | "compatibility"
  | "horoscope-daily";

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

type CheckoutRequestBody = {
  reportType?: unknown;

  /*
   * Données utilisées par les rapports de carte du ciel :
   * essential, premium et signature.
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
   * Données utilisées par le rapport de compatibilité.
   */
  person1?: BirthPersonRequestBody;
  person2?: BirthPersonRequestBody;

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
    value === "signature" ||
    value === "compatibility" ||
    value === "horoscope-daily"
  );
}

function normalizeBirthPerson(
  person?: BirthPersonRequestBody | null
): NormalizedBirthPerson {
  return {
    firstName: s(person?.firstName),
    birthDate: s(person?.birthDate),
    birthTime:
      s(person?.birthTime) ||
      "12:00",
    birthCity: s(person?.birthCity),
    birthCountry: s(person?.birthCountry),
    latitude: s(person?.latitude),
    longitude: s(person?.longitude),
    timezone: s(person?.timezone),
    wheelImagePath: s(person?.wheelImagePath),
  };
}

function hasRequiredBirthData(
  person: NormalizedBirthPerson
): boolean {
  return Boolean(
    person.birthDate &&
      person.birthTime &&
      person.birthCity &&
      person.latitude &&
      person.longitude
  );
}

function serializeMetadataValue(
  value: unknown,
  errorName: string
): string {
  const serialized = JSON.stringify(value);

  /*
   * Stripe autorise un maximum de 500 caractères
   * par valeur de metadata.
   */
  if (serialized.length > 500) {
    throw new Error(errorName);
  }

  return serialized;
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

  compatibility: s(
    process.env.STRIPE_COMPATIBILITY_PRICE_ID
  ),

  "horoscope-daily": s(
    process.env.STRIPE_PRICE_ID_HOROSCOPE_DAILY_PREMIUM
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

    const email = s(
      body.email
    );

    /*
     * Rapport de compatibilité :
     * deux personnes et deux roues astrologiques.
     */
    if (
      reportType ===
      "compatibility"
    ) {
      const person1 =
        normalizeBirthPerson(
          body.person1
        );

      const person2 =
        normalizeBirthPerson(
          body.person2
        );

      if (
        !hasRequiredBirthData(
          person1
        ) ||
        !hasRequiredBirthData(
          person2
        )
      ) {
        return NextResponse.json(
          {
            error:
              "MISSING_COMPATIBILITY_BIRTH_DATA",

            detail:
              "La date, l’heure, la ville et les coordonnées de naissance sont requises pour les deux personnes.",
          },
          {
            status: 400,
          }
        );
      }

      if (
        !person1.wheelImagePath ||
        !person2.wheelImagePath
      ) {
        return NextResponse.json(
          {
            error:
              "MISSING_COMPATIBILITY_WHEEL_IMAGE_PATH",

            detail:
              "Les images des deux roues astrologiques sont requises.",
          },
          {
            status: 400,
          }
        );
      }

      /*
       * On sépare les deux personnes dans deux metadata
       * différentes pour respecter la limite Stripe de
       * 500 caractères par valeur.
       */
      const serializedPerson1 =
        serializeMetadataValue(
          person1,
          "PERSON_1_DATA_TOO_LARGE"
        );

      const serializedPerson2 =
        serializeMetadataValue(
          person2,
          "PERSON_2_DATA_TOO_LARGE"
        );

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

            /*
             * Permet d’inscrire ton coupon à 100 %
             * directement dans Stripe Checkout.
             */
            discounts: [
  {
    promotion_code: "promo_1Tv14nQctELy6iN1AGOhkx6G",
  },
],
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

          report_type:
            "compatibility",

          person_1_wheel_image_path:
            person1.wheelImagePath,

          person_2_wheel_image_path:
            person2.wheelImagePath,
        }
      );
    }

    /*
     * Horoscope Premium du jour :
     * une personne, sans image de roue obligatoire.
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
          birthPerson
        )
      ) {
        return NextResponse.json(
          {
            error:
              "MISSING_HOROSCOPE_BIRTH_DATA",

            detail:
              "La date, l’heure, la ville et les coordonnées de naissance sont requises pour générer l’horoscope personnalisé.",
          },
          {
            status: 400,
          }
        );
      }

      const serializedBirthData =
        serializeMetadataValue(
          birthPerson,
          "HOROSCOPE_BIRTH_DATA_TOO_LARGE"
        );

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

            discounts: [
  {
    promotion_code: "promo_1Tv14nQctELy6iN1AGOhkx6G",
  },
],

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

          report_type:
            "horoscope-daily",
        }
      );
    }

    /*
     * Rapports existants :
     * essential, premium et signature.
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
        birthPerson
      )
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
      !birthPerson.wheelImagePath
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

    const serializedBirthData =
      serializeMetadataValue(
        birthPerson,
        "BIRTH_DATA_TOO_LARGE"
      );

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

          /*
           * On conserve aussi les coupons pour les
           * trois rapports déjà existants.
           */
          discounts: [
  {
    promotion_code: "promo_1Tv14nQctELy6iN1AGOhkx6G",
  },
],
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
          birthPerson.wheelImagePath,
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
        error:
          message,
      },
      {
        status: 500,
      }
    );
  }
}
