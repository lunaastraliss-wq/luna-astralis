// components/SignGrid.tsx

"use client";

import Link from "next/link";

import {
  useCallback,
} from "react";

import {
  usePathname,
  useRouter,
} from "next/navigation";

import {
  useAuth,
} from "./AuthProvider";

import {
  defaultLocale,
  isLocale,
  type Locale,
} from "@/i18n/config";

/*
|--------------------------------------------------------------------------
| Stockage du signe
|--------------------------------------------------------------------------
*/

const LS_SIGN_KEY =
  "la_sign";

const COOKIE_SIGN_KEY =
  "la_sign";

const SIGN_PARAM =
  "sign";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type SignDefinition = {
  key: string;
  symbol: string;
  cls: string;
};

type SignGridText = {
  title: string;
  subtitleLoggedOut: string;
  subtitleLoggedIn: string;
  elementsAria: string;
  elements: {
    fire: string;
    earth: string;
    air: string;
    water: string;
  };
  signs: Record<
    string,
    string
  >;
  account: string;
  login: string;
};

/*
|--------------------------------------------------------------------------
| Signes
|--------------------------------------------------------------------------
|
| Les clés internes restent en français afin de ne pas casser le chat,
| les cookies, le localStorage et les API déjà en place.
|
*/

const SIGNS: SignDefinition[] = [
  {
    key: "belier",
    symbol: "♈",
    cls: "sign-fire",
  },
  {
    key: "taureau",
    symbol: "♉",
    cls: "sign-earth",
  },
  {
    key: "gemeaux",
    symbol: "♊",
    cls: "sign-air",
  },
  {
    key: "cancer",
    symbol: "♋",
    cls: "sign-water",
  },
  {
    key: "lion",
    symbol: "♌",
    cls: "sign-fire",
  },
  {
    key: "vierge",
    symbol: "♍",
    cls: "sign-earth",
  },
  {
    key: "balance",
    symbol: "♎",
    cls: "sign-air",
  },
  {
    key: "scorpion",
    symbol: "♏",
    cls: "sign-water",
  },
  {
    key: "sagittaire",
    symbol: "♐",
    cls: "sign-fire",
  },
  {
    key: "capricorne",
    symbol: "♑",
    cls: "sign-earth",
  },
  {
    key: "verseau",
    symbol: "♒",
    cls: "sign-air",
  },
  {
    key: "poissons",
    symbol: "♓",
    cls: "sign-water",
  },
];

/*
|--------------------------------------------------------------------------
| Traductions
|--------------------------------------------------------------------------
*/

const SIGN_GRID_TRANSLATIONS: Record<
  Locale,
  SignGridText
> = {
  fr: {
    title: "Choisir un signe",
    subtitleLoggedOut:
      "Choisissez votre signe. Si vous n’êtes pas connectée, vous serez redirigée vers la connexion.",
    subtitleLoggedIn:
      "Choisissez votre signe pour commencer votre discussion avec Luna.",
    elementsAria:
      "Éléments astrologiques",
    elements: {
      fire: "Feu",
      earth: "Terre",
      air: "Air",
      water: "Eau",
    },
    signs: {
      belier: "Bélier",
      taureau: "Taureau",
      gemeaux: "Gémeaux",
      cancer: "Cancer",
      lion: "Lion",
      vierge: "Vierge",
      balance: "Balance",
      scorpion: "Scorpion",
      sagittaire: "Sagittaire",
      capricorne: "Capricorne",
      verseau: "Verseau",
      poissons: "Poissons",
    },
    account: "Mon compte →",
    login: "Se connecter →",
  },

  en: {
    title: "Choose a zodiac sign",
    subtitleLoggedOut:
      "Choose your zodiac sign. If you are not signed in, you will be redirected to the sign-in page.",
    subtitleLoggedIn:
      "Choose your zodiac sign to start your conversation with Luna.",
    elementsAria:
      "Astrological elements",
    elements: {
      fire: "Fire",
      earth: "Earth",
      air: "Air",
      water: "Water",
    },
    signs: {
      belier: "Aries",
      taureau: "Taurus",
      gemeaux: "Gemini",
      cancer: "Cancer",
      lion: "Leo",
      vierge: "Virgo",
      balance: "Libra",
      scorpion: "Scorpio",
      sagittaire: "Sagittarius",
      capricorne: "Capricorn",
      verseau: "Aquarius",
      poissons: "Pisces",
    },
    account: "My account →",
    login: "Sign in →",
  },

  es: {
    title: "Elegir un signo",
    subtitleLoggedOut:
      "Elige tu signo. Si no has iniciado sesión, serás redirigida a la página de acceso.",
    subtitleLoggedIn:
      "Elige tu signo para comenzar tu conversación con Luna.",
    elementsAria:
      "Elementos astrológicos",
    elements: {
      fire: "Fuego",
      earth: "Tierra",
      air: "Aire",
      water: "Agua",
    },
    signs: {
      belier: "Aries",
      taureau: "Tauro",
      gemeaux: "Géminis",
      cancer: "Cáncer",
      lion: "Leo",
      vierge: "Virgo",
      balance: "Libra",
      scorpion: "Escorpio",
      sagittaire: "Sagitario",
      capricorne: "Capricornio",
      verseau: "Acuario",
      poissons: "Piscis",
    },
    account: "Mi cuenta →",
    login: "Iniciar sesión →",
  },

  de: {
    title: "Tierkreiszeichen auswählen",
    subtitleLoggedOut:
      "Wählen Sie Ihr Tierkreiszeichen. Wenn Sie nicht angemeldet sind, werden Sie zur Anmeldung weitergeleitet.",
    subtitleLoggedIn:
      "Wählen Sie Ihr Tierkreiszeichen, um Ihr Gespräch mit Luna zu beginnen.",
    elementsAria:
      "Astrologische Elemente",
    elements: {
      fire: "Feuer",
      earth: "Erde",
      air: "Luft",
      water: "Wasser",
    },
    signs: {
      belier: "Widder",
      taureau: "Stier",
      gemeaux: "Zwillinge",
      cancer: "Krebs",
      lion: "Löwe",
      vierge: "Jungfrau",
      balance: "Waage",
      scorpion: "Skorpion",
      sagittaire: "Schütze",
      capricorne: "Steinbock",
      verseau: "Wassermann",
      poissons: "Fische",
    },
    account: "Mein Konto →",
    login: "Anmelden →",
  },

  it: {
    title: "Scegli un segno",
    subtitleLoggedOut:
      "Scegli il tuo segno. Se non hai effettuato l’accesso, verrai reindirizzata alla pagina di accesso.",
    subtitleLoggedIn:
      "Scegli il tuo segno per iniziare la conversazione con Luna.",
    elementsAria:
      "Elementi astrologici",
    elements: {
      fire: "Fuoco",
      earth: "Terra",
      air: "Aria",
      water: "Acqua",
    },
    signs: {
      belier: "Ariete",
      taureau: "Toro",
      gemeaux: "Gemelli",
      cancer: "Cancro",
      lion: "Leone",
      vierge: "Vergine",
      balance: "Bilancia",
      scorpion: "Scorpione",
      sagittaire: "Sagittario",
      capricorne: "Capricorno",
      verseau: "Acquario",
      poissons: "Pesci",
    },
    account: "Il mio account →",
    login: "Accedi →",
  },

  pt: {
    title: "Escolher um signo",
    subtitleLoggedOut:
      "Escolha seu signo. Se você não estiver conectada, será redirecionada para a página de acesso.",
    subtitleLoggedIn:
      "Escolha seu signo para começar sua conversa com Luna.",
    elementsAria:
      "Elementos astrológicos",
    elements: {
      fire: "Fogo",
      earth: "Terra",
      air: "Ar",
      water: "Água",
    },
    signs: {
      belier: "Áries",
      taureau: "Touro",
      gemeaux: "Gêmeos",
      cancer: "Câncer",
      lion: "Leão",
      vierge: "Virgem",
      balance: "Libra",
      scorpion: "Escorpião",
      sagittaire: "Sagitário",
      capricorne: "Capricórnio",
      verseau: "Aquário",
      poissons: "Peixes",
    },
    account: "Minha conta →",
    login: "Entrar →",
  },
};

/*
|--------------------------------------------------------------------------
| Détection de la langue dans l’URL
|--------------------------------------------------------------------------
*/

function getLocaleFromPathname(
  pathname: string
): Locale {
  const firstSegment =
    pathname.split("/")[1];

  if (
    firstSegment &&
    isLocale(firstSegment)
  ) {
    return firstSegment;
  }

  return defaultLocale;
}

/*
|--------------------------------------------------------------------------
| Cookie
|--------------------------------------------------------------------------
*/

function setCookie(
  name: string,
  value: string,
  maxAgeSeconds = 31536000
) {
  if (
    typeof document ===
    "undefined"
  ) {
    return;
  }

  document.cookie =
    `${encodeURIComponent(name)}=` +
    `${encodeURIComponent(value)}; ` +
    `Path=/; ` +
    `Max-Age=${maxAgeSeconds}; ` +
    "SameSite=Lax";
}

/*
|--------------------------------------------------------------------------
| Enregistrer le signe
|--------------------------------------------------------------------------
*/

function storeSign(
  signKey: string
) {
  if (
    typeof window ===
    "undefined"
  ) {
    return;
  }

  try {
    localStorage.setItem(
      LS_SIGN_KEY,
      signKey
    );
  } catch {
    /*
    |--------------------------------------------------------------------------
    | Le cookie sera tout de même enregistré si localStorage est indisponible
    |--------------------------------------------------------------------------
    */
  }

  setCookie(
    COOKIE_SIGN_KEY,
    signKey
  );
}

/*
|--------------------------------------------------------------------------
| Grille des signes
|--------------------------------------------------------------------------
*/

export default function SignGrid() {
  const router =
    useRouter();

  const pathname =
    usePathname();

  const {
    isAuth,
  } = useAuth();

  const locale =
    getLocaleFromPathname(
      pathname
    );

  const text =
    SIGN_GRID_TRANSLATIONS[
      locale
    ];

  const onPickSign =
    useCallback(
      (
        signKey: string
      ) => {
        storeSign(
          signKey
        );

        /*
        |--------------------------------------------------------------------------
        | Les routes /chat et /login restent sans préfixe pendant la migration
        |--------------------------------------------------------------------------
        */

        const next =
          `/chat?${SIGN_PARAM}=` +
          encodeURIComponent(
            signKey
          );

        if (isAuth) {
          router.push(
            next
          );

          return;
        }

        router.push(
          `/login?next=${encodeURIComponent(
            next
          )}`
        );
      },
      [
        router,
        isAuth,
      ]
    );

  return (
    <section
      id="signes"
      className="section"
    >
      <div className="section-head">
        <h2>
          {text.title}
        </h2>

        <p className="section-sub">
          {isAuth
            ? text.subtitleLoggedIn
            : text.subtitleLoggedOut}
        </p>
      </div>

      <div
        className="signs signs-grid"
        role="list"
      >
        {SIGNS.map(
          (sign) => (
            <button
              key={sign.key}
              type="button"
              role="listitem"
              className={`sign ${sign.cls}`}
              onClick={() =>
                onPickSign(
                  sign.key
                )
              }
              aria-label={
                text.signs[
                  sign.key
                ]
              }
            >
              <span
                aria-hidden="true"
              >
                {sign.symbol}
              </span>{" "}
              {
                text.signs[
                  sign.key
                ]
              }
            </button>
          )
        )}
      </div>

      <div
        className="elements"
        aria-label={
          text.elementsAria
        }
      >
        <span className="el sign-fire">
          {
            text.elements.fire
          }
        </span>

        <span className="el sign-earth">
          {
            text.elements.earth
          }
        </span>

        <span className="el sign-air">
          {
            text.elements.air
          }
        </span>

        <span className="el sign-water">
          {
            text.elements.water
          }
        </span>
      </div>

      <div
        className="note-center"
        style={{
          marginTop: 14,
        }}
      >
        <Link
          className="btn btn-small"
          href="/login"
        >
          {isAuth
            ? text.account
            : text.login}
        </Link>
      </div>
    </section>
  );
}
