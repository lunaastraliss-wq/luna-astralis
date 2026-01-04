// app/signup/page.tsx
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Luna Astralis — Créer un compte",
  description: "Créer un compte Luna Astralis.",
};

export default function SignupPage() {
  return (
    <div className="auth-body">
      <header className="top" role="banner">
        <a className="brand" href="/" aria-label="Accueil Luna Astralis">
          <div className="logo" aria-hidden="true">
            <img src="/logo-luna-astralis-transparent.png" alt="" />
          </div>

          <div className="brand-text">
            <div className="brand-name">LUNA ASTRALIS</div>
            <div className="brand-sub">Astro & psycho</div>
          </div>
        </a>

        <nav className="nav" aria-label="Navigation">
          <a className="btn btn-small btn-ghost" id="loginLink" href="/login">
            Mon compte
          </a>
        </nav>
      </header>

      <main className="wrap auth-wrap" role="main">
        <section className="auth-card" aria-label="Créer un compte">
          <h1 className="auth-title">Créer un compte</h1>
          <p className="auth-sub">
            Sauvegarde tes échanges et continue après les messages gratuits.
          </p>

          {/* message */}
          <div
            id="msg"
            className="auth-msg"
            role="status"
            aria-live="polite"
            style={{ display: "none" as any }}
          />

          {/* Déjà connecté */}
          <div id="already" style={{ display: "none", marginTop: 12 }}>
            <p className="auth-sub" style={{ margin: "0 0 10px 0" }}>
              Tu es déjà connectée.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as any }}>
              <a className="btn" id="goNextBtn" href="/chat">
                Continuer
              </a>
              <a className="btn btn-ghost" id="goAccountBtn" href="/login">
                Mon compte
              </a>
              <button type="button" className="btn btn-ghost" id="logoutBtn">
                Se déconnecter
              </button>
            </div>

            <div className="auth-sep" aria-hidden="true" style={{ marginTop: 14 }}>
              <span>ou</span>
            </div>
          </div>

          {/* Google */}
          <button type="button" className="btn auth-google" id="googleSignup">
            <img
              src="/google-g.png"
              alt=""
              className="google-icon"
              aria-hidden="true"
            />
            Continuer avec Google
          </button>

          <div className="auth-sep" aria-hidden="true">
            <span>ou</span>
          </div>

          {/* Email / password */}
          <form className="auth-form" id="signupForm" autoComplete="on" noValidate>
            <label className="auth-label" htmlFor="email">
              Email
            </label>
            <input
              className="auth-input"
              id="email"
              name="email"
              type="email"
              placeholder="ex. toi@email.com"
              required
              autoComplete="email"
              inputMode="email"
            />

            <label className="auth-label" htmlFor="password">
              Mot de passe
            </label>
            <input
              className="auth-input"
              id="password"
              name="password"
              type="password"
              placeholder="Minimum 8 caractères"
              minLength={8}
              required
              autoComplete="new-password"
            />

            <button className="btn auth-submit" id="submitBtn" type="submit">
              Créer mon compte
            </button>

            <p className="auth-legal">
              En créant un compte, tu acceptes que cet outil soit une exploration
              personnelle (non thérapeutique) et ne remplace pas un professionnel.
            </p>

            <p className="auth-switch">
              Déjà un compte ?{" "}
              <a className="auth-link" id="loginLink2" href="/login">
                Se connecter
              </a>
            </p>
          </form>
        </section>
      </main>

      {/* Supabase JS (UMD v2) */}
      <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  const SUPABASE_URL = "https://auxhexhkrfyizqjvnpvn.supabase.co";
  const SUPABASE_KEY = "sb_publishable_jSrj1sEIrDuu73hJHhrnXw_vK7mlQeg";

  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    const el = document.getElementById("msg");
    if (el) {
      el.style.display = "block";
      el.textContent = "Erreur: la librairie Supabase ne s'est pas chargée (CDN bloqué / offline).";
      el.classList.add("is-err");
    }
    return;
  }

  const supabase =
    window.__LA_SUPABASE__ ||
    (window.__LA_SUPABASE__ = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storage: window.localStorage,
      },
    }));

  const msgEl = document.getElementById("msg");
  const submitBtn = document.getElementById("submitBtn");
  const googleBtn = document.getElementById("googleSignup");
  const form = document.getElementById("signupForm");

  const alreadyBox = document.getElementById("already");
  const goNextBtn = document.getElementById("goNextBtn");
  const goAccountBtn = document.getElementById("goAccountBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  const loginLink = document.getElementById("loginLink");
  const loginLink2 = document.getElementById("loginLink2");

  function showMsg(text, type = "info") {
    if (!msgEl) return;
    msgEl.style.display = "block";
    msgEl.textContent = text;
    msgEl.classList.remove("is-ok", "is-err", "is-info");
    msgEl.classList.add(type === "ok" ? "is-ok" : type === "err" ? "is-err" : "is-info");
  }
  function clearMsg() {
    if (!msgEl) return;
    msgEl.style.display = "none";
    msgEl.textContent = "";
    msgEl.classList.remove("is-ok", "is-err", "is-info");
  }
  function setLoading(v) {
    if (submitBtn) submitBtn.disabled = v;
    if (googleBtn) googleBtn.disabled = v;
    if (submitBtn) submitBtn.style.opacity = v ? "0.7" : "1";
    if (googleBtn) googleBtn.style.opacity = v ? "0.7" : "1";
  }

  function origin() {
    return window.location.origin;
  }

  function getNext() {
    const p = new URLSearchParams(location.search).get("next");
    return p && p.trim() ? p.trim() : "/chat";
  }

  function safeNext(next) {
    if (!next || next.includes("http://") || next.includes("https://") || next.startsWith("//")) {
      return "/chat";
    }
    // Allow query/hash. Ensure leading slash
    return next.startsWith("/") ? next : "/" + next;
  }

  function nextUrl() {
    return safeNext(getNext());
  }

  function setAlreadyConnectedUI(isConnected) {
    if (!alreadyBox) return;
    alreadyBox.style.display = isConnected ? "block" : "none";
    if (isConnected) {
      const n = nextUrl();
      if (goNextBtn) goNextBtn.href = n;
      if (goAccountBtn) goAccountBtn.href = "/login?next=" + encodeURIComponent(n);
    }
  }

  // keep next on login links
  const n = nextUrl();
  const nEnc = encodeURIComponent(n);
  if (loginLink) loginLink.href = "/login?next=" + nEnc;
  if (loginLink2) loginLink2.href = "/login?next=" + nEnc;

  // Boot: no auto redirect, just show "already connected"
  (async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        showMsg("Erreur session: " + error.message, "err");
        return;
      }
      if (data?.session) {
        setAlreadyConnectedUI(true);
        showMsg("Tu es déjà connectée.", "ok");
      } else {
        setAlreadyConnectedUI(false);
      }
    } catch (e) {
      showMsg("Erreur JS: " + (e?.message || String(e)), "err");
    }
  })();

  // Signup email/password
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearMsg();

      const email = (document.getElementById("email")?.value || "").trim();
      const password = document.getElementById("password")?.value || "";

      if (!email || !email.includes("@")) return showMsg("Entre un email valide.", "err");
      if (!password || password.length < 8) return showMsg("Mot de passe : minimum 8 caractères.", "err");

      setLoading(true);
      showMsg("Création du compte…", "info");

      const next = nextUrl();

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: origin() + "/login?next=" + encodeURIComponent(next),
        },
      });

      if (error) {
        setLoading(false);
        return showMsg(error.message, "err");
      }

      // If email confirmation is OFF => immediate session
      if (data?.session) {
        showMsg("Compte créé. Redirection…", "ok");
        window.location.href = next;
        return;
      }

      setLoading(false);
      showMsg("Compte créé ! Vérifie ton email pour confirmer, puis reviens te connecter.", "ok");
    });
  }

  // Google OAuth (go back to /login)
  if (googleBtn) {
    googleBtn.addEventListener("click", async () => {
      clearMsg();
      setLoading(true);
      showMsg("Ouverture de Google…", "info");

      const next = nextUrl();

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: origin() + "/login?next=" + encodeURIComponent(next),
        },
      });

      if (error) {
        setLoading(false);
        showMsg(error.message, "err");
      }
    });
  }

  // Logout (if already connected)
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      clearMsg();
      setLoading(true);
      showMsg("Déconnexion…", "info");

      const { error } = await supabase.auth.signOut();
      setLoading(false);

      if (error) return showMsg(error.message, "err");

      setAlreadyConnectedUI(false);
      showMsg("Déconnectée.", "ok");
    });
  }

  // Auth state change => UI only
  supabase.auth.onAuthStateChange((_event, session) => {
    if (session) {
      setAlreadyConnectedUI(true);
      setLoading(false);
    } else {
      setAlreadyConnectedUI(false);
    }
  });
})();
          `,
        }}
      />
    </div>
  );
}

