// components/LanguageSwitcher.tsx

"use client";

import {
  usePathname,
  useRouter,
} from "next/navigation";

import {
  localeFlags,
  localeNames,
  locales,
} from "@/i18n/config";

import {
  useTranslations,
} from "@/i18n/TranslationProvider";

import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const router =
    useRouter();

  const pathname =
    usePathname();

  const {
    locale,
  } = useTranslations();

  function changeLanguage(
    nextLocale: string
  ) {
    const segments =
      pathname
        .split("/")
        .filter(Boolean);

    /*
    |--------------------------------------------------------------------------
    | Remplacer la langue déjà présente
    |--------------------------------------------------------------------------
    */

    if (
      segments.length > 0 &&
      locales.includes(
        segments[0] as
          (typeof locales)[number]
      )
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
    | Route sans langue : retourner vers l’accueil de la langue choisie
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
        className="language-switcher-flag"
        aria-hidden="true"
      >
        {localeFlags[locale]}
      </span>

      <select
        value={locale}
        onChange={(event) =>
          changeLanguage(
            event.target.value
          )
        }
        aria-label="Langue"
      >
        {locales.map(
          (availableLocale) => (
            <option
              key={availableLocale}
              value={availableLocale}
            >
              {
                localeFlags[
                  availableLocale
                ]
              }{" "}
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
