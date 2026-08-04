// components/LanguageSwitcher.tsx

"use client";



import __i18n from "../i18n/migrated/fr/components/languageswitcher.json";
import {
  usePathname,
  useRouter,
} from "next/navigation";

import {
  defaultLocale,
  isLocale,
  localeNames,
  locales,
  type Locale,
} from "@/i18n/config";

import "./LanguageSwitcher.css";

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
      aria-label={__i18n["choisir_la_langue"]}
    >
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
                localeNames[
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
