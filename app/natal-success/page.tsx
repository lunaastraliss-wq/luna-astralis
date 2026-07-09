export default function NatalSuccessPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "80px auto",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "70px",
          marginBottom: "24px",
        }}
      >
        ✨
      </div>

      <h1
        style={{
          fontSize: "46px",
          marginBottom: "18px",
        }}
      >
        Merci pour votre achat !
      </h1>

      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.8,
          opacity: 0.9,
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        Votre paiement a été accepté avec succès.
      </p>

      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.8,
          opacity: 0.9,
          maxWidth: "700px",
          margin: "20px auto 40px",
        }}
      >
        Nous préparons maintenant votre rapport astrologique personnalisé.
      </p>

      <div
        style={{
          display: "inline-block",
          padding: "16px 28px",
          borderRadius: "999px",
          background: "rgba(244,201,93,.15)",
          border: "1px solid rgba(244,201,93,.35)",
          color: "#f4c95d",
          fontWeight: 800,
        }}
      >
        Génération en cours...
      </div>
    </main>
  );
}
