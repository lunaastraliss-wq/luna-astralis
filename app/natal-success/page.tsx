import __i18n from "../../i18n/migrated/fr/app/natal-success/page.json";
import Stripe from "stripe";
import Link from "next/link";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type Props = {
  searchParams: {
    session_id?: string;
  };
};

const PLAN_LABELS: Record<string, string> = {
  essential: __i18n["rapport_essentielle"],
  premium: __i18n["rapport_premium"],
  signature: __i18n["rapport_signature"],
};

export default async function NatalSuccessPage({ searchParams }: Props) {
  const sessionId = searchParams.session_id;

  if (!sessionId) {
    return <ErrorPage message="Session de paiement introuvable." />;
  }

  let session: Stripe.Checkout.Session;

  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return <ErrorPage message="Impossible de vérifier le paiement." />;
  }

  const isPaid = session.payment_status === "paid";
  const plan = session.metadata?.plan || "";
  const planLabel = PLAN_LABELS[plan] || "Rapport astrologique";

  if (!isPaid) {
    return <ErrorPage message="Le paiement n’a pas encore été confirmé." />;
  }

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: __i18n["80px_auto"],
        padding: __i18n["40px_24px"],
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "70px", marginBottom: "24px" }}>✨</div>

      <h1 style={{ fontSize: "46px", marginBottom: "18px" }}>
        {__i18n["merci_pour_votre_achat"]}</h1>

      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.8,
          opacity: 0.9,
          maxWidth: "700px",
          margin: __i18n["0_auto_30px"],
        }}
      >
        {__i18n["votre_paiement_a_ete_confirme_avec_succes"]}</p>

      <div
        style={{
          maxWidth: "620px",
          margin: __i18n["0_auto_36px"],
          padding: "28px",
          borderRadius: "28px",
          background: __i18n["rgba_255_255_255_06"],
          border: __i18n["1px_solid_rgba_244_201_93_28"],
        }}
      >
        <p style={{ margin: __i18n["0_0_10px"], opacity: 0.75 }}>
          {__i18n["rapport_achete"]}</p>

        <h2
          style={{
            margin: 0,
            color: __i18n["f4c95d"],
            fontSize: "30px",
          }}
        >
          {planLabel}
        </h2>
      </div>

      <div
        style={{
          maxWidth: "620px",
          margin: __i18n["0_auto_40px"],
          textAlign: "left",
          padding: "28px",
          borderRadius: "24px",
          background: __i18n["rgba_244_201_93_08"],
          border: __i18n["1px_solid_rgba_244_201_93_28_2"],
        }}
      >
        <p>{__i18n["paiement_confirme"]}</p>
        <p>{__i18n["rapport_selectionne"]}</p>
        <p>{__i18n["generation_du_pdf_a_connecter"]}</p>
      </div>

      <p
        style={{
          fontSize: "18px",
          lineHeight: 1.7,
          opacity: 0.85,
          maxWidth: "700px",
          margin: __i18n["0_auto_34px"],
        }}
      >
        {__i18n["la_prochaine_etape_sera_de_connecter_cette_page_au_generateu"]}</p>

      <Link
        href="/carte-du-ciel"
        style={{
          display: "inline-block",
          padding: __i18n["16px_28px"],
          borderRadius: "999px",
          background: __i18n["f4c95d_2"],
          color: __i18n["0b1124"],
          fontWeight: 800,
          textDecoration: "none",
        }}
      >
        {__i18n["retour_a_la_carte_du_ciel"]}</Link>
    </main>
  );
}

function ErrorPage({ message }: { message: string }) {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: __i18n["80px_auto_2"],
        padding: __i18n["40px_24px_2"],
        textAlign: "center",
      }}
    >
      <h1>{__i18n["une_erreur_est_survenue"]}</h1>

      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.7,
          opacity: 0.85,
        }}
      >
        {message}
      </p>

      <Link
        href="/carte-du-ciel"
        style={{
          display: "inline-block",
          marginTop: "30px",
          color: __i18n["f4c95d_3"],
          fontWeight: 700,
        }}
      >
        {__i18n["retour_a_la_carte_du_ciel_2"]}</Link>
    </main>
  );
}
