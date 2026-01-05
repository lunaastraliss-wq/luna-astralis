"use client";

import React from "react";

type ThreadMsg = { role: "user" | "ai"; text: string };

function enc(nextUrl: string) {
  return encodeURIComponent(nextUrl || "/chat");
}

export default function ChatModals(props: {
  paywallOpen: boolean;
  paywallMode: "guest" | "premium";
  historyOpen: boolean;
  thread: ThreadMsg[];
  onClosePaywall: () => void;
  onCloseHistory: () => void;
  onClearHistoryLocal: () => void;
  nextUrl: string;
}) {
  const {
    paywallOpen,
    paywallMode,
    historyOpen,
    thread,
    onClosePaywall,
    onCloseHistory,
    onClearHistoryLocal,
    nextUrl,
  } = props;

  return (
    <>
      {/* PAYWALL */}
      <div
        className={"paywall " + (paywallOpen ? "is-open" : "")}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClosePaywall();
        }}
      >
        <div className="paywall-card" role="dialog" aria-modal="true">
          <h3 className="paywall-title">Continuer la discussion</h3>

          {paywallMode === "guest" ? (
            <>
              <p className="paywall-text">
                Tu as atteint la limite gratuite. Crée un compte (gratuit) pour continuer et
                retrouver tes échanges.
              </p>

              <div className="paywall-actions">
                <a
                  className="paywall-link primary"
                  href={`/login?next=${enc(nextUrl)}`}
                >
                  Créer un compte / Se connecter
                </a>

                <a className="paywall-link" href={`/pricing?next=${enc(nextUrl)}`}>
                  Voir les offres
                </a>

                <button className="paywall-btn" type="button" onClick={onClosePaywall}>
                  Fermer
                </button>
              </div>

              <div className="paywall-footnote">
                Astuce : le compte sert à sauvegarder ton historique. L’accès complet est
                disponible via une offre.
              </div>
            </>
          ) : (
            <>
              <p className="paywall-text">
                Ton compte est bien connecté, mais ce chat complet est réservé aux abonnés.
                Choisis une offre pour continuer.
              </p>

              <div className="paywall-actions">
                <a className="paywall-link primary" href={`/pricing?next=${enc(nextUrl)}`}>
                  Voir les offres
                </a>

                <button className="paywall-btn" type="button" onClick={onClosePaywall}>
                  Fermer
                </button>
              </div>

              <div className="paywall-footnote">
                Après paiement, reviens ici : l’accès se débloquera automatiquement.
              </div>
            </>
          )}
        </div>
      </div>

      {/* HISTORIQUE */}
      <div
        className={"history " + (historyOpen ? "is-open" : "")}
        onClick={(e) => {
          if (e.target === e.currentTarget) onCloseHistory();
        }}
      >
        <div className="history-card" role="dialog" aria-modal="true">
          <div className="history-top">
            <div className="history-title">Historique</div>
            <button className="history-close" type="button" onClick={onCloseHistory}>
              Fermer
            </button>
          </div>

          <div className="history-body">
            {thread.map((m, idx) => (
              <div
                key={idx}
                className={"history-item " + (m.role === "user" ? "user" : "ai")}
              >
                {m.role !== "user" ? (
                  <img
                    className="history-avatar"
                    src="/ia-luna-astralis.png"
                    alt="Luna (IA)"
                  />
                ) : (
                  <div style={{ width: 34, height: 34 }} />
                )}

                <div className="history-bubble">{m.text}</div>
              </div>
            ))}
          </div>

          <div className="history-foot">
            <button
              className="paywall-btn"
              type="button"
              onClick={() => {
                const el = document.querySelector(".history-body") as HTMLDivElement | null;
                if (el) el.scrollTop = el.scrollHeight;
              }}
            >
              Aller au bas
            </button>

            <button className="paywall-btn" type="button" onClick={onClearHistoryLocal}>
              Effacer (local)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
