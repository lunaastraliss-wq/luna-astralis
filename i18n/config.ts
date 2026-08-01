/*
|--------------------------------------------------------------------------
| Langues offertes par Luna Astralis
|--------------------------------------------------------------------------
*/

export const locales = [
  "fr",
  "en",
  "es",
  "de",
  "it",
  "pt",
] as const;

export type Locale =
  (typeof locales)[number];

export const defaultLocale: Locale =
  "fr";

/*
|--------------------------------------------------------------------------
| Vérification d’une langue
|--------------------------------------------------------------------------
*/

export function isLocale(
  value: string
): value is Locale {
  return locales.includes(
    value as Locale
  );
}

/*
|--------------------------------------------------------------------------
| Informations affichées dans le sélecteur
|--------------------------------------------------------------------------
*/

export const localeNames: Record<
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

export const localeFlags: Record<
  Locale,
  string
> = {
  fr: "🇫🇷",
  en: "🇺🇸",
  es: "🇪🇸",
  de: "🇩🇪",
  it: "🇮🇹",
  pt: "🇵🇹",
};
