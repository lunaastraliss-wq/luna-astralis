export const metadata = {
  title: "Restriction d’âge — Luna Astralis",
};

export default function Age18Page() {
  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <h1>Restriction d’âge</h1>

        <p>
          Luna Astralis est réservé exclusivement aux personnes{" "}
          <strong>âgées de 18 ans ou plus</strong>.
        </p>

        <p>
          En utilisant ce service, l’utilisateur confirme avoir atteint l’âge
          légal requis.
        </p>
      </div>
    </main>
  );
}

