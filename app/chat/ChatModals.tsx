"use client";

import React, { useCallback, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import fr from "../../i18n/migrated/fr/app/chat/chatmodals.json";
import en from "../../i18n/migrated/en/app/chat/chatmodals.json";
import es from "../../i18n/migrated/es/app/chat/chatmodals.json";
import de from "../../i18n/migrated/de/app/chat/chatmodals.json";
import it from "../../i18n/migrated/it/app/chat/chatmodals.json";
import pt from "../../i18n/migrated/pt/app/chat/chatmodals.json";

type ThreadMsg = {
  role: "user" | "ai";
  text: string;
};

type Lang = "fr" | "en" | "es" | "de" | "it" | "pt";

const DICTS: Record<Lang, Record<string, string>> = {
  fr: fr as Record<string, string>,
  en: en as Record<string, string>,
  es: es as Record<string, string>,
  de: de as Record<string, string>,
  it: it as Record<string, string>,
  pt: pt as Record<string, string>,
};

const UI_TEXT: Record<
  Lang,
  {
    continueDiscussion: string;
    guestLimitText: string;
    createAccount: string;
    seeOffers: string;
    close: string;
    guestFootnote: string;
    premiumRequiredText: string;
    premiumFootnote: string;
    history: string;
    lunaAI: string;
    goBottom: string;
    clearLocal: string;
  }
> = {
  fr: {
    continueDiscussion: "Continuer la discussion",
    guestLimitText:
      "Tu as atteint la limite gratuite. Crée un compte gratuit ou découvre les offres pour continuer.",
    createAccount: "Créer un compte / Se connecter",
    seeOffers: "Voir les offres",
    close: "Fermer",
    guestFootnote:
      "Astuce : ton compte permet de conserver ton accès et ton historique selon ton forfait.",

    premiumRequiredText:
      "Ton compte est bien connecté, mais cette fonctionnalité nécessite un accès premium.",
    premiumFootnote:
      "Après paiement, reviens ici : l’accès devrait se débloquer automatiquement.",

    history: "Historique",
    lunaAI: "Luna IA",
    goBottom: "Aller au bas",
    clearLocal: "Effacer localement",
  },

  en: {
    continueDiscussion: "Continue the conversation",
    guestLimitText:
      "You’ve reached the free limit. Create a free account or view the plans to continue.",
    createAccount: "Create account / Log in",
    seeOffers: "View plans",
    close: "Close",
    guestFootnote:
      "Tip: your account helps preserve your access and history according to your plan.",

    premiumRequiredText:
      "Your account is connected, but this feature requires premium access.",
    premiumFootnote:
      "After payment, come back here and access should unlock automatically.",

    history: "History",
    lunaAI: "Luna AI",
    goBottom: "Go to bottom",
    clearLocal: "Clear locally",
  },

  es: {
    continueDiscussion: "Continuar la conversación",
    guestLimitText:
      "Has alcanzado el límite gratuito. Crea una cuenta gratuita o consulta los planes para continuar.",
    createAccount: "Crear cuenta / Iniciar sesión",
    seeOffers: "Ver planes",
    close: "Cerrar",
    guestFootnote:
      "Consejo: tu cuenta permite conservar tu acceso y tu historial según tu plan.",

    premiumRequiredText:
      "Tu cuenta está conectada, pero esta función requiere acceso premium.",
    premiumFootnote:
      "Después del pago, vuelve aquí y el acceso debería desbloquearse automáticamente.",

    history: "Historial",
    lunaAI: "Luna IA",
    goBottom: "Ir al final",
    clearLocal: "Borrar localmente",
  },

  de: {
    continueDiscussion: "Unterhaltung fortsetzen",
    guestLimitText:
      "Du hast das kostenlose Limit erreicht. Erstelle ein kostenloses Konto oder sieh dir die Tarife an, um fortzufahren.",
    createAccount: "Konto erstellen / Anmelden",
    seeOffers: "Tarife ansehen",
    close: "Schließen",
    guestFootnote:
      "Tipp: Dein Konto hilft dabei, deinen Zugang und Verlauf entsprechend deinem Tarif zu erhalten.",

    premiumRequiredText:
      "Dein Konto ist verbunden, aber diese Funktion erfordert Premium-Zugang.",
    premiumFootnote:
      "Nach der Zahlung kannst du hierher zurückkehren; der Zugang sollte automatisch freigeschaltet werden.",

    history: "Verlauf",
    lunaAI: "Luna KI",
    goBottom: "Nach unten",
    clearLocal: "Lokal löschen",
  },

  it: {
    continueDiscussion: "Continua la conversazione",
    guestLimitText:
      "Hai raggiunto il limite gratuito. Crea un account gratuito o consulta i piani per continuare.",
    createAccount: "Crea account / Accedi",
    seeOffers: "Vedi piani",
    close: "Chiudi",
    guestFootnote:
      "Suggerimento: il tuo account consente di conservare accesso e cronologia in base al tuo piano.",

    premiumRequiredText:
      "Il tuo account è connesso, ma questa funzione richiede un accesso premium.",
    premiumFootnote:
      "Dopo il pagamento, torna qui: l’accesso dovrebbe sbloccarsi automaticamente.",

    history: "Cronologia",
    lunaAI: "Luna IA",
    goBottom: "Vai in fondo",
    clearLocal: "Cancella localmente",
  },

  pt: {
    continueDiscussion: "Continuar a conversa",
    guestLimitText:
      "Você atingiu o limite gratuito. Crie uma conta gratuita ou veja os planos para continuar.",
    createAccount: "Criar conta / Entrar",
    seeOffers: "Ver planos",
    close: "Fechar",
    guestFootnote:
      "Dica: sua conta ajuda a manter seu acesso e histórico de acordo com o seu plano.",

    premiumRequiredText:
      "Sua conta está conectada, mas este recurso exige acesso premium.",
    premiumFootnote:
      "Após o pagamento, volte aqui e o acesso deverá ser liberado automaticamente.",

    history: "Histórico",
    lunaAI: "Luna IA",
    goBottom: "Ir para o final",
    clearLocal: "Apagar localmente",
  },
};

function isLang(
  value: string | null | undefined
): value is Lang {
  return (
    value === "fr" ||
    value === "en" ||
    value === "es" ||
    value === "de" ||
    value === "it" ||
    value === "pt"
  );
}

function getLangFromPath(
  pathname: string | null
): Lang {
  if (pathname) {
    const firstSegment = pathname
      .split("/")
      .filter(Boolean)[0]
      ?.toLowerCase();

    if (isLang(firstSegment)) {
      return firstSegment;
    }
  }

  if (typeof document !== "undefined") {
    const htmlLang = document.documentElement.lang
      ?.toLowerCase()
      .split("-")[0];

    if (isLang(htmlLang)) {
      return htmlLang;
    }
  }

  return "fr";
}

function enc(nextUrl: string) {
  return encodeURIComponent(nextUrl || "/chat");
}

function localizePath(
  path: string,
  lang: Lang
) {
  const clean = path.startsWith("/")
    ? path
    : `/${path}`;

  return `/${lang}${clean}`;
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

  const pathname = usePathname();
  const searchParams = useSearchParams();

  /*
   * IMPORTANT :
   *
   * Le chat utilise des URLs comme :
   *
   * /chat?lang=en&sign=scorpion
   *
   * La langue se trouve donc dans ?lang=.
   *
   * On donne priorité à ?lang=.
   *
   * Si ?lang= n'existe pas, on utilise ensuite
   * la langue présente dans le pathname :
   *
   * /fr/chat
   * /en/chat
   * /es/chat
   * /de/chat
   * /it/chat
   * /pt/chat
   */

  const lang = useMemo(() => {
    const queryLang = searchParams
      .get("lang")
      ?.toLowerCase();

    if (isLang(queryLang)) {
      return queryLang;
    }

    return getLangFromPath(pathname);
  }, [pathname, searchParams]);

  const dict = DICTS[lang];
  const ui = UI_TEXT[lang];

  const t = useCallback(
    (
      key: string,
      fallback: string
    ) => {
      return dict?.[key] || fallback;
    },
    [dict]
  );

  const loginHref =
    `${localizePath("/login", lang)}` +
    `?next=${enc(nextUrl)}`;

  const pricingHref =
    `${localizePath("/pricing", lang)}` +
    `?next=${enc(nextUrl)}`;

  return (
    <>
      {/* =====================================================
          PAYWALL
      ===================================================== */}

      <div
        className={
          "paywall " +
          (paywallOpen ? "is-open" : "")
        }
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClosePaywall();
          }
        }}
      >
        <div
          className="paywall-card"
          role="dialog"
          aria-modal="true"
          aria-label={t(
            "continuer_la_discussion",
            ui.continueDiscussion
          )}
        >
          <div className="paywall-title">
            {t(
              "continuer_la_discussion",
              ui.continueDiscussion
            )}
          </div>

          {paywallMode === "guest" ? (
            <>
              <p className="paywall-text">
                {t(
                  "tu_as_atteint_la_limite_gratuite_cree_un_compte_gratuit_pour",
                  ui.guestLimitText
                )}
              </p>

              <div className="paywall-actions">
                <a
                  className="paywall-link primary"
                  href={loginHref}
                >
                  {t(
                    "creer_un_compte_se_connecter",
                    ui.createAccount
                  )}
                </a>

                <a
                  className="paywall-link"
                  href={pricingHref}
                >
                  {t(
                    "voir_les_offres",
                    ui.seeOffers
                  )}
                </a>

                <button
                  className="paywall-btn"
                  type="button"
                  onClick={onClosePaywall}
                >
                  {ui.close}
                </button>
              </div>

              <div className="paywall-footnote">
                {t(
                  "astuce_le_compte_sert_a_sauvegarder_ton_historique_l_acces_c",
                  ui.guestFootnote
                )}
              </div>
            </>
          ) : (
            <>
              <p className="paywall-text">
                {t(
                  "ton_compte_est_bien_connecte_mais_ce_chat_complet_est_reserv",
                  ui.premiumRequiredText
                )}
              </p>

              <div className="paywall-actions">
                <a
                  className="paywall-link primary"
                  href={pricingHref}
                >
                  {t(
                    "voir_les_offres_2",
                    ui.seeOffers
                  )}
                </a>

                <button
                  className="paywall-btn"
                  type="button"
                  onClick={onClosePaywall}
                >
                  {ui.close}
                </button>
              </div>

              <div className="paywall-footnote">
                {t(
                  "apres_paiement_reviens_ici_l_acces_se_debloquera_automatique",
                  ui.premiumFootnote
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* =====================================================
          HISTORIQUE
      ===================================================== */}

      <div
        className={
          "history " +
          (historyOpen ? "is-open" : "")
        }
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onCloseHistory();
          }
        }}
      >
        <div
          className="history-card"
          role="dialog"
          aria-modal="true"
          aria-label={ui.history}
        >
          <div className="history-top">
            <div className="history-title">
              {ui.history}
            </div>

            <button
              className="history-close"
              type="button"
              onClick={onCloseHistory}
            >
              {ui.close}
            </button>
          </div>

          <div className="history-body">
            {thread.map((m, idx) => (
              <div
                key={idx}
                className={
                  "history-item " +
                  (m.role === "user"
                    ? "user"
                    : "ai")
                }
              >
                {m.role !== "user" ? (
                  <img
                    className="history-avatar"
                    src="/ia-luna-astralis.png"
                    alt={t(
                      "luna_ia",
                      ui.lunaAI
                    )}
                  />
                ) : (
                  <div
                    style={{
                      width: 34,
                      height: 34,
                    }}
                  />
                )}

                <div className="history-bubble">
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="history-foot">
            <button
              className="paywall-btn"
              type="button"
              onClick={() => {
                const el =
                  document.querySelector(
                    ".history-body"
                  ) as HTMLDivElement | null;

                if (el) {
                  el.scrollTop =
                    el.scrollHeight;
                }
              }}
            >
              {t(
                "aller_au_bas",
                ui.goBottom
              )}
            </button>

            <button
              className="paywall-btn"
              type="button"
              onClick={
                onClearHistoryLocal
              }
            >
              {t(
                "effacer_local",
                ui.clearLocal
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
