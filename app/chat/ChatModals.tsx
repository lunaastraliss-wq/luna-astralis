"use client";





import __i18n from "../../i18n/migrated/fr/app/chat/chatmodals.json";
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
          <h3 className="paywall-title">{__i18n["continuer_la_discussion"]}</h3>

          {paywallMode === "guest" ? (
            <>
              <p className="paywall-text">
                {__i18n["tu_as_atteint_la_limite_gratuite_cree_un_compte_gratuit_pour"]}</p>

              <div className="paywall-actions">
                <a
                  className="paywall-link primary"
                  href={`/login?next=${enc(nextUrl)}`}
                >
                  {__i18n["creer_un_compte_se_connecter"]}</a>

                <a className="paywall-link" href={`/pricing?next=${enc(nextUrl)}`}>
                  {__i18n["voir_les_offres"]}</a>

                <button className="paywall-btn" type="button" onClick={onClosePaywall}>
                  Fermer
                </button>
              </div>

              <div className="paywall-footnote">
                {__i18n["astuce_le_compte_sert_a_sauvegarder_ton_historique_l_acces_c"]}</div>
            </>
          ) : (
            <>
              <p className="paywall-text">
                {__i18n["ton_compte_est_bien_connecte_mais_ce_chat_complet_est_reserv"]}</p>

              <div className="paywall-actions">
                <a className="paywall-link primary" href={`/pricing?next=${enc(nextUrl)}`}>
                  {__i18n["voir_les_offres_2"]}</a>

                <button className="paywall-btn" type="button" onClick={onClosePaywall}>
                  Fermer
                </button>
              </div>

              <div className="paywall-footnote">
                {__i18n["apres_paiement_reviens_ici_l_acces_se_debloquera_automatique"]}</div>
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
                    alt={__i18n["luna_ia"]}
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
              {__i18n["aller_au_bas"]}</button>

            <button className="paywall-btn" type="button" onClick={onClearHistoryLocal}>
              {__i18n["effacer_local"]}</button>
          </div>
        </div>
      </div>
    </>
  );
}
