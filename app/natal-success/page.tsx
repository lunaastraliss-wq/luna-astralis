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
  essential: "Rapport Essentielle",
  premium: "Rapport Premium",
  signature: "Rapport Signature",
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
        margin: "80px auto",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "70px", marginBottom: "24px" }}>✨</div>

      <h1 style={{ fontSize: "46px", marginBottom: "18px" }}>
        Merci pour votre achat !
      </h1>

      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.8,
          opacity: 0.9,
          maxWidth: "700px",
          margin: "0 auto 30px",
        }}
      >
        Votre paiement a été confirmé avec succès.
      </p>

      <div
        style={{
          maxWidth: "620px",
          margin: "0 auto 36px",
          padding: "28px",
          borderRadius: "28px",
          background: "rgba(255,255,255,.06)",
          border: "1px solid rgba(244,201,93,.28)",
        }}
      >
        <p style={{ margin: "0 0 10px", opacity: 0.75 }}>
          Rapport acheté
        </p>

        <h2
          style={{
            margin: 0,
            color: "#f4c95d",
            fontSize: "30px",
          }}
        >
          {planLabel}
        </h2>
      </div>

      <div
        style={{
          maxWidth: "620px",
          margin: "0 auto 40px",
          textAlign: "left",
          padding: "28px",
          borderRadius: "24px",
          background: "rgba(244,201,93,.08)",
          border: "1px solid rgba(244,201,93,.28)",
        }}
      >
        <p>✓ Paiement confirmé</p>
        <p>✓ Rapport sélectionné</p>
        <p>⏳ Génération du PDF à connecter</p>
      </div>

      <p
        style={{
          fontSize: "18px",
          lineHeight: 1.7,
          opacity: 0.85,
          maxWidth: "700px",
          margin: "0 auto 34px",
        }}
      >
        La prochaine étape sera de connecter cette page au générateur PDF du
        rapport Essentielle, Premium ou Signature.
      </p>

      <Link
        href="/carte-du-ciel"
        style={{
          display: "inline-block",
          padding: "16px 28px",
          borderRadius: "999px",
          background: "#f4c95d",
          color: "#0b1124",
          fontWeight: 800,
          textDecoration: "none",
        }}
      >
        Retour à la carte du ciel
      </Link>
    </main>
  );
}

function ErrorPage({ message }: { message: string }) {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "80px auto",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <h1>Une erreur est survenue</h1>

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
          color: "#f4c95d",
          fontWeight: 700,
        }}
      >
        Retour à la carte du ciel
      </Link>
    </main>
  );
}
