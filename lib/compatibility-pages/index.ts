import {
  SIGNS,
  type SignKey,
} from "../compatibility";

import {
  BELIER_COMPATIBILITY_PAGES,
} from "./belier";

import type {
  CompatibilityPageData,
} from "./types";

export type {
  CompatibilityPageData,
} from "./types";

/*
|--------------------------------------------------------------------------
| Registre de toutes les pages
|--------------------------------------------------------------------------
*/

export const COMPATIBILITY_PAGES:
  CompatibilityPageData[] = [
    ...BELIER_COMPATIBILITY_PAGES,
  ];

/*
|--------------------------------------------------------------------------
| Carte d'accès rapide
|--------------------------------------------------------------------------
*/

const COMPATIBILITY_MAP = new Map<
  string,
  CompatibilityPageData
>(
  COMPATIBILITY_PAGES.map(
    (page) => [
      `${page.signA}-${page.signB}`,
      page,
    ],
  ),
);

/*
|--------------------------------------------------------------------------
| Récupérer un signe
|--------------------------------------------------------------------------
*/

export function getSignByKey(
  key: SignKey,
) {
  return SIGNS.find(
    (sign) =>
      sign.key === key,
  );
}

/*
|--------------------------------------------------------------------------
| Récupérer une compatibilité précise
|--------------------------------------------------------------------------
*/

export function getCompatibilityPage(
  signA: SignKey,
  signB: SignKey,
) {
  return COMPATIBILITY_MAP.get(
    `${signA}-${signB}`,
  );
}

/*
|--------------------------------------------------------------------------
| Vérifier une clé de signe
|--------------------------------------------------------------------------
*/

export function isSignKey(
  value: string,
): value is SignKey {
  return SIGNS.some(
    (sign) =>
      sign.key === value,
  );
}
