<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Luna Astralis — Tarifs</title>

    <meta
      name="description"
      content="Tarifs Luna Astralis — Astro & psycho. Accès 24h/7. Prix en dollars US."
    />

    <link rel="stylesheet" href="./css/styles.css" />
    <link rel="stylesheet" href="./css/pricing.css" />

    <style>
      .pricing-msg{
        margin: 14px 0 0;
        padding: 12px 14px;
        border-radius: 14px;
        border: 1px solid rgba(255,255,255,.14);
        background: rgba(255,255,255,.06);
        color: rgba(255,255,255,.92);
        line-height: 1.35;
        display:none;
      }
      .pricing-msg.is-ok{ background: rgba(120,255,190,.10); border-color: rgba(120,255,190,.22); }
      .pricing-msg.is-err{ background: rgba(255,90,90,.10); border-color: rgba(255,90,90,.22); }
      .pricing-msg.is-info{ background: rgba(159,211,255,.10); border-color: rgba(159,211,255,.22); }

      .price-cta[aria-busy="true"]{ opacity:.75; pointer-events:none; }
    </style>
  </head>

  <body class="pricing-body">
    <!-- HEADER -->
    <header class="top" role="banner">
      <a class="brand" href="./index.html" aria-label="Accueil Luna Astralis">
        <div class="logo" aria-hidden="true">
          <img src="./logo-luna-astralis-transparent.png" alt="" />
        </div>

        <div class="brand-text">
          <div class="brand-name">LUNA ASTRALIS</div>
          <div class="brand-sub">Astro & psycho</div>
        </div>
      </a>

      <nav class="nav" aria-label="Navigation principale">
        <a href="./index.html">Accueil</a>
        <a class="active" href="./pricing.html">Tarifs</a>
        <a class="btn btn-small btn-ghost" id="loginLink" href="./login.html">Connexion</a>
        <a class="btn btn-small" id="signupLink" href="./signup.html">Créer un compte</a>
      </nav>
    </header>

    <!-- MAIN -->
    <main class="wrap" role="main">
      <!-- HERO -->
      <section class="pricing-hero" aria-label="Présentation des tarifs">
        <div class="pricing-hero-inner">
          <div class="pricing-kicker">Accès 24h/7</div>
          <div class="pricing-kicker pricing-kicker-alt">TARIFS</div>

          <h1 class="pricing-title">Choisis le forfait qui te convient</h1>

          <p class="pricing-subtitle">
            Tu peux payer tout de suite (même en invité). Si tu crées un compte, tu gardes ton historique.
          </p>

          <div class="pricing-chips" aria-label="Informations">
            <span class="chip">Prix en dollars US (USD)</span>
            <span class="chip">Annule ou change en tout temps</span>
          </div>

          <div class="pricing-msg" id="msg" role="status" aria-live="polite"></div>
        </div>
      </section>

      <!-- Confiance -->
      <section class="section" aria-label="Confiance">
        <div class="pricing-trust">
          <div class="trust-line">
            ✦ Une expérience douce, inspirée de l’astrologie, pour mieux te comprendre.
          </div>
          <div class="trust-sub">
            Paiement sécurisé • Annulation en tout temps • Aucun frais caché
          </div>
        </div>
      </section>

      <!-- GRID -->
      <section class="section" aria-label="Formules">
        <div class="pricing-grid">
          <!-- Mensuel — Essentiel -->
          <article class="price-card" aria-label="Mensuel — Essentiel">
            <div class="price-head">
              <div class="price-name">Mensuel — Essentiel</div>
              <div class="price-value">
                <span class="price-now">4,99&nbsp;$</span>
                <span class="price-period">/ mois</span>
              </div>
              <div class="price-mini">Accès 24h/7</div>
            </div>

            <ul class="price-features">
              <li>100 messages / mois</li>
              <li>Tous les signes astrologiques</li>
              <li>Astro & psycho</li>
              <li>Compatible mobile</li>
            </ul>

            <button class="price-cta" data-plan="monthly_essential" type="button">
              Commencer
            </button>
          </article>

          <!-- Mensuel — Illimité -->
          <div class="price-halo" role="group" aria-label="Mensuel — Illimité (le plus populaire)">
            <article class="price-card price-featured" aria-label="Mensuel — Illimité">
              <div class="price-badge">LE PLUS POPULAIRE</div>

              <div class="price-head">
                <div class="price-name">Mensuel — Illimité</div>
                <div class="price-value">
                  <span class="price-now">9,99&nbsp;$</span>
                  <span class="price-period">/ mois</span>
                </div>
                <div class="price-mini">Accès 24h/7</div>
              </div>

              <ul class="price-features">
                <li>Messages illimités</li>
                <li>Tous les signes astrologiques</li>
                <li>Historique des conversations</li>
                <li>Exploration approfondie</li>
              </ul>

              <button class="price-cta btn-primary" data-plan="monthly_unlimited" type="button">
                Accès illimité 24h/7
              </button>
            </article>
          </div>

          <!-- Annuel — Essentiel -->
          <article class="price-card" aria-label="Annuel — Essentiel">
            <div class="price-head">
              <div class="price-name">Annuel — Essentiel</div>
              <div class="price-value">
                <span class="price-was"><s>59,99&nbsp;$</s></span>
                <span class="price-now">49,99&nbsp;$</span>
                <span class="price-period">/ an</span>
              </div>
              <div class="price-mini">
                Accès 24h/7 • <strong>Économisez 10&nbsp;$</strong>
              </div>
            </div>

            <ul class="price-features">
              <li>100 messages / mois</li>
              <li>Tous les signes astrologiques</li>
              <li>Astro & psycho</li>
              <li>Le plus économique</li>
            </ul>

            <button class="price-cta" data-plan="yearly_essential" type="button">
              Choisir l’annuel
            </button>
          </article>

          <!-- Annuel — Illimité -->
          <article class="price-card premium" aria-label="Annuel — Illimité">
            <div class="price-badge premium">MEILLEURE VALEUR</div>

            <div class="price-head">
              <div class="price-name">Annuel — Illimité</div>
              <div class="price-value">
                <span class="price-was"><s>119,99&nbsp;$</s></span>
                <span class="price-now">99,99&nbsp;$</span>
                <span class="price-period">/ an</span>
              </div>
              <div class="price-mini">
                Accès 24h/7 • <strong>Économisez 20&nbsp;$</strong>
              </div>
            </div>

            <ul class="price-features">
              <li>Messages illimités</li>
              <li>Tous les signes astrologiques</li>
              <li>Accès prioritaire</li>
              <li>Futur : Tarot, Lune, Ascendant</li>
            </ul>

            <button class="price-cta btn-primary" data-plan="yearly_unlimited" type="button">
              Accès illimité annuel
            </button>
          </article>
        </div>
      </section>

      <!-- FOOTER -->
      <footer class="footer" role="contentinfo">
        <div>© <span id="y"></span> Luna Astralis</div>
        <div class="footer-note">Prix en USD • Accès 24h/7</div>
      </footer>
    </main>

    <script>
      document.getElementById("y").textContent = new Date().getFullYear();

      (function () {
        const msgEl = document.getElementById("msg");

        function showMsg(text, type){
          if(!msgEl) return;
          msgEl.style.display = "block";
          msgEl.textContent = text;
          msgEl.classList.remove("is-ok","is-err","is-info");
          msgEl.classList.add(type === "ok" ? "is-ok" : type === "err" ? "is-err" : "is-info");
        }

        function currentPageWithQuery(){
          const p = location.pathname.split("/").pop() || "pricing.html";
          return p + location.search;
        }

        function safeNext(next){
          if (typeof next !== "string") return "chat.html";
          const s = next.trim();
          if(!s) return "chat.html";
          if (s.includes("http://") || s.includes("https://") || s.startsWith("//")) return "chat.html";
          return s.replace(/^\//, "");
        }

        function getNextFromQuery(){
          const q = new URLSearchParams(location.search).get("next");
          return safeNext(q || "chat.html");
        }

        // Header links (garde next)
        const nextEnc = encodeURIComponent(getNextFromQuery());
        const loginLink = document.getElementById("loginLink");
        const signupLink = document.getElementById("signupLink");
        if (loginLink) loginLink.href = "./login.html?next=" + nextEnc;
        if (signupLink) signupLink.href = "./signup.html?next=" + nextEnc;

        function setBtnBusy(btn, busy, plan){
          if(!btn) return;
          if(busy){
            btn.setAttribute("aria-busy","true");
            btn.dataset._oldText = btn.textContent || "";
            btn.textContent = "Redirection…";
          }else{
            btn.removeAttribute("aria-busy");
            const old = btn.dataset._oldText;
            if(old) btn.textContent = old;
          }
        }

        // Messages paid/canceled
        const sp = new URLSearchParams(location.search);
        if(sp.get("canceled") === "1"){
          showMsg("Paiement annulé. Tu peux réessayer quand tu veux.", "info");
        }
        if(sp.get("paid") === "1"){
          showMsg("Paiement reçu. Merci ✨ Tu peux retourner au chat.", "ok");
        }

        async function startCheckout(plan, btn){
          try{
            setBtnBusy(btn, true, plan);
            showMsg("Ouverture de Stripe…", "info");

            // next = page à ouvrir après paiement (si tu veux revenir au chat, passe ?next=chat.html?signe=belier)
            const next = getNextFromQuery();

            const res = await fetch("/api/checkout", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ plan, next })
            });

            const data = await res.json().catch(() => ({}));
            if(!res.ok) throw new Error(data?.error || "Erreur checkout.");
            if(!data?.url) throw new Error("URL Stripe manquante.");

            window.location.href = data.url;
          }catch(err){
            setBtnBusy(btn, false, plan);
            showMsg("Erreur: " + (err?.message || String(err)), "err");
          }
        }

        document.querySelectorAll("button.price-cta[data-plan]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const plan = btn.getAttribute("data-plan");
            if(!plan) return;
            startCheckout(plan, btn);
          });
        });
      })();
    </script>
  </body>
</html>
