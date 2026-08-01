// i18n/getDictionary.ts

import type {
  Locale,
} from "./config";

/*
|--------------------------------------------------------------------------
| Dictionnaires disponibles
|--------------------------------------------------------------------------
*/

const dictionaries = {
  fr: () =>
    import("../messages/fr.json")
      .then((module) => module.default),

  en: () =>
    import("../messages/en.json")
      .then((module) => module.default),

  es: () =>
    import("../messages/es.json")
      .then((module) => module.default),

  de: () =>
    import("../messages/de.json")
      .then((module) => module.default),

  it: () =>
    import("../messages/it.json")
      .then((module) => module.default),

  pt: () =>
    import("../messages/pt.json")
      .then((module) => module.default),
};

/*
|--------------------------------------------------------------------------
| Chargement du dictionnaire demandé
|--------------------------------------------------------------------------
*/

export async function getDictionary(
  locale: Locale
) {
  return dictionaries[locale]();
}
