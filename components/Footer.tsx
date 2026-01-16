export default function Footer() {
  return (
    <footer
      style={{
        padding: "18px 16px",
        borderTop: "1px solid rgba(212,175,55,0.25)",
        color: "rgba(243,244,246,0.85)",
        fontSize: 13,
        textAlign: "center",
      }}
    >
      Support :{" "}
      <a
        href="mailto:contact@luna-astralis.app"
        style={{ color: "inherit", textDecoration: "underline" }}
      >
        contact@luna-astralis.app
      </a>
      <span style={{ opacity: 0.8 }}> · Réponse sous 24h</span>
    </footer>
  );
}
