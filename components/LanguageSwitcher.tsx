// components/LanguageSwitcher.tsx

"use client";

import {
  usePathname,
  useRouter,
} from "next/navigation";

import {
  defaultLocale,
  isLocale,
  locales,
  type Locale,
} from "@/i18n/config";

import "./LanguageSwitcher.css";

/*
|--------------------------------------------------------------------------
| Codes courts affichés
|--------------------------------------------------------------------------
*/

const localeCodes: Record<
  Locale,
  string
> = {
  fr: "FR",
  en: "EN",
  es: "ES",
  de: "DE",
  it: "IT",
  pt: "PT",
};

/*
|--------------------------------------------------------------------------
| Noms affichés dans la liste
|--------------------------------------------------------------------------
*/

const localeLabels: Record<
  Locale,
  string
> = {
  fr: "Français",
  en: "English",
  es: "Español",
  de: "Deutsch",
  it: "Italiano",
  pt: "Português",
};

/*
|--------------------------------------------------------------------------
| Récupérer la langue dans l’URL
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
| Sélecteur de langue
|--------------------------------------------------------------------------
*/

export default function LanguageSwitcher() {
  const router =
    useRouter();

  const pathname =
    usePathname();

  const currentLocale =
    getLocaleFromPathname(
      pathname
    );

  function changeLanguage(
    nextLocale: Locale
  ) {
    const segments =
      pathname
        .split("/")
        .filter(Boolean);

    /*
    |--------------------------------------------------------------------------
    | Une langue existe déjà dans l’URL
    |--------------------------------------------------------------------------
    */

    if (
      segments.length > 0 &&
      isLocale(segments[0])
    ) {
      segments[0] =
        nextLocale;

      router.push(
        `/${segments.join("/")}`
      );

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | Ancienne route sans langue
    |--------------------------------------------------------------------------
    */

    router.push(
      `/${nextLocale}`
    );
  }

  return (
    <label
      className="language-switcher"
      aria-label="Choisir la langue"
    >
      <span
        className="language-switcher-code"
        aria-hidden="true"
      >
        {
          localeCodes[
            currentLocale
          ]
        }
      </span>

      <select
        value={currentLocale}
        onChange={(event) =>
          changeLanguage(
            event.target
              .value as Locale
          )
        }
        aria-label="Langue"
      >
        {locales.map(
          (availableLocale) => (
            <option
              key={
                availableLocale
              }
              value={
                availableLocale
              }
            >
              {
                localeLabels[
                  availableLocale
                ]
              }
            </option>
          )
        )}
      </select>
    </label>
  );
}
