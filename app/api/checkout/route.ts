// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Lang = "fr" | "en" | "es" | "de" | "it" | "pt";

type PlanId =
  | "monthly_essential"
  | "monthly_unlimited"
  | "yearly_essential"
  | "yearly_unlimited";

function s(v: unknown) {
  return v == null ? "" : String(v).trim();
}

function cleanUrl(url: string) {
  const x = s(url);
  return x.endsWith("/") ? x.slice(0, -1) : x;
}

function normalizeLang(v: unknown): Lang {
  const raw = s(v).toLowerCase().replace("_", "-");
  const base = raw.split("-")[0];

  if (
    base === "fr" ||
    base === "en" ||
    base === "es" ||
    base === "de" ||
    base === "it" ||
    base === "pt"
  ) {
    return base;
  }

  return "fr";
}

function isPlan(v: unknown): v is PlanId {
  return (
    v === "monthly_essential" ||
    v === "monthly_unlimited" ||
    v === "yearly_essential" ||
    v === "yearly_unlimited"
  );
}

function stripLocale(path: string) {
  return path.replace(
    /^\/(fr|en|es|de|it|pt)(?=\/|$)/,
    ""
  );
}

function localizePath(
  path: string,
  lang: Lang
) {
  const clean = path.startsWith("/")
    ? path
    : `/${path}`;

  const withoutLocale =
    stripLocale(clean);

  return `/${lang}${withoutLocale || ""}`;
}

function safeNext(
  next: unknown,
  lang: Lang
) {
  const fallback =
    localizePath(
      "/chat?sign=belier",
      lang
    );

  const x = s(next);

  if (!x) {
    return fallback;
  }

  if (
    x.startsWith("http://") ||
    x.startsWith("https://") ||
    x.startsWith("//")
  ) {
    return fallback;
  }

  if (
    x.includes("http://") ||
    x.includes("https://")
  ) {
    return fallback;
  }

  const path = x.startsWith("/")
    ? x
    : `/${x}`;

  return localizePath(path, lang);
}

// ENV
const STRIPE_SECRET_KEY =
  s(process.env.STRIPE_SECRET_KEY);

const SITE_URL =
  s(process.env.NEXT_PUBLIC_SITE_URL);

const PRICE: Record<PlanId, string> = {
  monthly_essential:
    s(process.env.STRIPE_PRICE_MONTHLY_ESSENTIAL),

  monthly_unlimited:
    s(process.env.STRIPE_PRICE_MONTHLY_UNLIMITED),

  yearly_essential:
    s(process.env.STRIPE_PRICE_YEARLY_ESSENTIAL),

  yearly_unlimited:
    s(process.env.STRIPE_PRICE_YEARLY_UNLIMITED),
};

const PRICING_PLAN_ID: Record<
  PlanId,
  string
> = {
  monthly_essential:
    s(process.env.PRICING_PLAN_MONTHLY_ESSENTIAL),

  monthly_unlimited:
    s(process.env.PRICING_PLAN_MONTHLY_UNLIMITED),

  yearly_essential:
    s(process.env.PRICING_PLAN_YEARLY_ESSENTIAL),

  yearly_unlimited:
    s(process.env.PRICING_PLAN_YEARLY_UNLIMITED),
};

const stripe =
  STRIPE_SECRET_KEY
    ? new Stripe(
        STRIPE_SECRET_KEY,
        {
          apiVersion: "2023-10-16",
        }
      )
    : null;

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

    const site =
      cleanUrl(SITE_URL);

    if (!site) {
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
        .catch(() => null)) as
        | {
            plan?: unknown;
            next?: unknown;
            lang?: unknown;
          }
        | null;

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

    if (!isPlan(body.plan)) {
      return NextResponse.json(
        {
          error: "INVALID_PLAN",
        },
        {
          status: 400,
        }
      );
    }

    const lang =
      normalizeLang(body.lang);

    const plan =
      body.plan;

    const stripe_price_id =
      PRICE[plan];

    const pricing_plan_id =
      PRICING_PLAN_ID[plan];

    if (
      !stripe_price_id ||
      !pricing_plan_id
    ) {
      return NextResponse.json(
        {
          error:
            "PLAN_CONFIG_MISSING",
        },
        {
          status: 500,
        }
      );
    }

    const next =
      safeNext(
        body.next,
        lang
      );

    /*
      Redirections localisées :
      /fr/checkout/success
      /en/checkout/success
      /es/checkout/success
      etc.
    */
    const successPath =
      localizePath(
        "/checkout/success",
        lang
      );

    const pricingPath =
      localizePath(
        "/pricing",
        lang
      );

    const success_url =
      `${site}${successPath}` +
      `?next=${encodeURIComponent(next)}` +
      `&lang=${encodeURIComponent(lang)}` +
      `&session_id={CHECKOUT_SESSION_ID}`;

    const cancel_url =
      `${site}${pricingPath}` +
      `?canceled=1` +
      `&lang=${encodeURIComponent(lang)}` +
      `&next=${encodeURIComponent(next)}`;

    /*
      Auth requis
    */
    const supabase =
      createRouteHandlerClient({
        cookies: () => cookies(),
      });

    const {
      data,
      error,
    } =
      await supabase.auth.getSession();

    if (error) {
      return NextResponse.json(
        {
          error:
            "SESSION_ERROR",

          detail:
            error.message,

          require_auth:
            true,

          next,
          lang,
        },
        {
          status: 401,
        }
      );
    }

    const user =
      data?.session?.user;

    const user_id =
      user?.id || "";

    const user_email =
      (
        user?.email || ""
      ).toLowerCase();

    if (
      !user_id ||
      !user_email
    ) {
      return NextResponse.json(
        {
          error:
            "AUTH_REQUIRED",

          require_auth:
            true,

          next,
          lang,
        },
        {
          status: 401,
        }
      );
    }

    /*
      Metadata commune.
      lang est maintenant disponible
      pour les webhooks et emails.
    */
    const commonMeta = {
      app: "luna-astralis",
      plan,
      lang,
      user_id,
      user_email,
      pricing_plan_id,
      stripe_price_id,
      next,
    };

    const session =
      await stripe.checkout.sessions.create({
        mode:
          "subscription",

        line_items: [
          {
            price:
              stripe_price_id,

            quantity: 1,
          },
        ],

        allow_promotion_codes:
          true,

        success_url,
        cancel_url,

        client_reference_id:
          user_id,

        customer_email:
          user_email,

        /*
          Aide Stripe à présenter
          le Checkout dans la langue
          correspondante.
        */
        locale:
          lang === "pt"
            ? "pt-BR"
            : lang,

        metadata:
          commonMeta,

        subscription_data: {
          metadata:
            commonMeta,
        },

        payment_method_collection:
          "always",
      });

    return NextResponse.json(
      {
        url:
          session.url,

        session_id:
          session.id,

        lang,
      },
      {
        status: 200,
      }
    );
  } catch (err: any) {
    console.error(
      "[checkout]",
      err
    );

    return NextResponse.json(
      {
        error:
          err?.message ||
          "CHECKOUT_ERROR",
      },
      {
        status: 500,
      }
    );
  }
}
