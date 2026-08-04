// components/SignGrid.tsx

"use client";




import __i18n from "../i18n/migrated/fr/components/signgrid.json";
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
    title: __i18n["choisir_un_signe"],
    subtitleLoggedOut:
      __i18n["choisissez_votre_signe_si_vous_n_etes_pas_connectee_vous_ser"],
    subtitleLoggedIn:
      __i18n["choisissez_votre_signe_pour_commencer_votre_discussion_avec"],
    elementsAria:
      __i18n["elements_astrologiques"],
    elements: {
      fire: "Feu",
      earth: "Terre",
      air: "Air",
      water: "Eau",
    },
    signs: {
      belier: __i18n["belier"],
      taureau: "Taureau",
      gemeaux: __i18n["gemeaux"],
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
    account: __i18n["mon_compte"],
    login: __i18n["se_connecter"],
  },

  en: {
    title: __i18n["choose_a_zodiac_sign"],
    subtitleLoggedOut:
      __i18n["choose_your_zodiac_sign_if_you_are_not_signed_in_you_will_be"],
    subtitleLoggedIn:
      __i18n["choose_your_zodiac_sign_to_start_your_conversation_with_luna"],
    elementsAria:
      __i18n["astrological_elements"],
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
    account: __i18n["my_account"],
    login: __i18n["sign_in"],
  },

  es: {
    title: __i18n["elegir_un_signo"],
    subtitleLoggedOut:
      __i18n["elige_tu_signo_si_no_has_iniciado_sesion_seras_redirigida_a"],
    subtitleLoggedIn:
      __i18n["elige_tu_signo_para_comenzar_tu_conversacion_con_luna"],
    elementsAria:
      __i18n["elementos_astrologicos"],
    elements: {
      fire: "Fuego",
      earth: "Tierra",
      air: "Aire",
      water: "Agua",
    },
    signs: {
      belier: "Aries",
      taureau: "Tauro",
      gemeaux: __i18n["geminis"],
      cancer: __i18n["cancer"],
      lion: "Leo",
      vierge: "Virgo",
      balance: "Libra",
      scorpion: "Escorpio",
      sagittaire: "Sagitario",
      capricorne: "Capricornio",
      verseau: "Acuario",
      poissons: "Piscis",
    },
    account: __i18n["mi_cuenta"],
    login: __i18n["iniciar_sesion"],
  },

  de: {
    title: __i18n["tierkreiszeichen_auswahlen"],
    subtitleLoggedOut:
      __i18n["wahlen_sie_ihr_tierkreiszeichen_wenn_sie_nicht_angemeldet_si"],
    subtitleLoggedIn:
      __i18n["wahlen_sie_ihr_tierkreiszeichen_um_ihr_gesprach_mit_luna_zu"],
    elementsAria:
      __i18n["astrologische_elemente"],
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
      lion: __i18n["lowe"],
      vierge: "Jungfrau",
      balance: "Waage",
      scorpion: "Skorpion",
      sagittaire: __i18n["schutze"],
      capricorne: "Steinbock",
      verseau: "Wassermann",
      poissons: "Fische",
    },
    account: __i18n["mein_konto"],
    login: __i18n["anmelden"],
  },

  it: {
    title: __i18n["scegli_un_segno"],
    subtitleLoggedOut:
      __i18n["scegli_il_tuo_segno_se_non_hai_effettuato_l_accesso_verrai_r"],
    subtitleLoggedIn:
      __i18n["scegli_il_tuo_segno_per_iniziare_la_conversazione_con_luna"],
    elementsAria:
      __i18n["elementi_astrologici"],
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
    account: __i18n["il_mio_account"],
    login: __i18n["accedi"],
  },

  pt: {
    title: __i18n["escolher_um_signo"],
    subtitleLoggedOut:
      __i18n["escolha_seu_signo_se_voce_nao_estiver_conectada_sera_redirec"],
    subtitleLoggedIn:
      __i18n["escolha_seu_signo_para_comecar_sua_conversa_com_luna"],
    elementsAria:
      __i18n["elementos_astrologicos_2"],
    elements: {
      fire: "Fogo",
      earth: "Terra",
      air: "Ar",
      water: __i18n["agua"],
    },
    signs: {
      belier: __i18n["aries"],
      taureau: "Touro",
      gemeaux: __i18n["gemeos"],
      cancer: __i18n["cancer_2"],
      lion: __i18n["leao"],
      vierge: "Virgem",
      balance: "Libra",
      scorpion: __i18n["escorpiao"],
      sagittaire: __i18n["sagitario"],
      capricorne: __i18n["capricornio"],
      verseau: __i18n["aquario"],
      poissons: "Peixes",
    },
    account: __i18n["minha_conta"],
    login: __i18n["entrar"],
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
