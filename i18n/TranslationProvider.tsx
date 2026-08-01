// i18n/TranslationProvider.tsx

"use client";

import {
  createContext,
  useContext,
} from "react";

import type {
  ReactNode,
} from "react";

import type {
  Locale,
} from "./config";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

export type Dictionary =
  Record<string, unknown>;

type TranslationValues =
  Record<
    string,
    string | number
  >;

type TranslationContextValue = {
  locale: Locale;
  dictionary: Dictionary;

  t: (
    key: string,
    values?: TranslationValues
  ) => string;
};

/*
|--------------------------------------------------------------------------
| Contexte
|--------------------------------------------------------------------------
*/

const TranslationContext =
  createContext<
    TranslationContextValue | null
  >(null);

/*
|--------------------------------------------------------------------------
| Lecture d’une traduction imbriquée
|--------------------------------------------------------------------------
|
| Exemple :
|
| t("common.home")
|
| cherchera :
|
| {
|   "common": {
|     "home": "Accueil"
|   }
| }
|
*/

function getNestedValue(
  dictionary: Dictionary,
  key: string
): unknown {
  return key
    .split(".")
    .reduce<unknown>(
      (
        currentValue,
        currentKey
      ) => {
        if (
          currentValue &&
          typeof currentValue ===
            "object" &&
          currentKey in
            currentValue
        ) {
          return (
            currentValue as Record<
              string,
              unknown
            >
          )[currentKey];
        }

        return undefined;
      },
      dictionary
    );
}

/*
|--------------------------------------------------------------------------
| Remplacement des variables
|--------------------------------------------------------------------------
|
| Exemple :
|
| "Bonjour {name}"
|
| avec :
|
| t("welcome", {
|   name: "Martine"
| })
|
*/

function replaceValues(
  text: string,
  values?: TranslationValues
): string {
  if (!values) {
    return text;
  }

  return Object.entries(
    values
  ).reduce(
    (
      translatedText,
      [key, value]
    ) =>
      translatedText.replaceAll(
        `{${key}}`,
        String(value)
      ),
    text
  );
}

/*
|--------------------------------------------------------------------------
| Fournisseur de traductions
|--------------------------------------------------------------------------
*/

type TranslationProviderProps = {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
};

export default function TranslationProvider({
  locale,
  dictionary,
  children,
}: TranslationProviderProps) {
  function t(
    key: string,
    values?: TranslationValues
  ): string {
    const translatedValue =
      getNestedValue(
        dictionary,
        key
      );

    if (
      typeof translatedValue !==
      "string"
    ) {
      /*
      |--------------------------------------------------------------------------
      | En développement, une clé manquante reste visible
      |--------------------------------------------------------------------------
      */

      if (
        process.env.NODE_ENV ===
        "development"
      ) {
        console.warn(
          `Traduction introuvable : ${key} (${locale})`
        );
      }

      return key;
    }

    return replaceValues(
      translatedValue,
      values
    );
  }

  return (
    <TranslationContext.Provider
      value={{
        locale,
        dictionary,
        t,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

/*
|--------------------------------------------------------------------------
| Hook de traduction
|--------------------------------------------------------------------------
*/

export function useTranslations() {
  const context =
    useContext(
      TranslationContext
    );

  if (!context) {
    throw new Error(
      "useTranslations doit être utilisé dans TranslationProvider."
    );
  }

  return context;
}
