import {
  SIGNS,
  type SignKey,
} from "../compatibility";

import {
  BELIER_COMPATIBILITY_PAGES,
} from "./belier";

import {
  TAUREAU_COMPATIBILITY_PAGES,
} from "./taureau";

import {
  GEMEAUX_COMPATIBILITY_PAGES,
} from "./gemeaux";

import {
  CANCER_COMPATIBILITY_PAGES,
} from "./cancer";

import {
  LION_COMPATIBILITY_PAGES,
} from "./lion";

import {
  VIERGE_COMPATIBILITY_PAGES,
} from "./vierge";

import {
  BALANCE_COMPATIBILITY_PAGES,
} from "./balance";

import {
  SCORPION_COMPATIBILITY_PAGES,
} from "./scorpion";

import {
  SAGITTAIRE_COMPATIBILITY_PAGES,
} from "./sagittaire";

import {
  CAPRICORNE_COMPATIBILITY_PAGES,
} from "./capricorne";

import {
  VERSEAU_COMPATIBILITY_PAGES,
} from "./verseau";

import {
  POISSONS_COMPATIBILITY_PAGES,
} from "./poissons";

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
    ...TAUREAU_COMPATIBILITY_PAGES,
    ...GEMEAUX_COMPATIBILITY_PAGES,
    ...CANCER_COMPATIBILITY_PAGES,
    ...LION_COMPATIBILITY_PAGES,
    ...VIERGE_COMPATIBILITY_PAGES,
    ...BALANCE_COMPATIBILITY_PAGES,
    ...SCORPION_COMPATIBILITY_PAGES,
    ...SAGITTAIRE_COMPATIBILITY_PAGES,
    ...CAPRICORNE_COMPATIBILITY_PAGES,
    ...VERSEAU_COMPATIBILITY_PAGES,
    ...POISSONS_COMPATIBILITY_PAGES,
  ];

/*
|--------------------------------------------------------------------------
| Créer la clé d’une compatibilité
|--------------------------------------------------------------------------
*/

function createCompatibilityKey(
  signA: SignKey,
  signB: SignKey,
) {
  return `${signA}-${signB}`;
}

/*
|--------------------------------------------------------------------------
| Carte d’accès rapide
|--------------------------------------------------------------------------
*/

const COMPATIBILITY_MAP = new Map<
  string,
  CompatibilityPageData
>(
  COMPATIBILITY_PAGES.map(
    (page) => [
      createCompatibilityKey(
        page.signA,
        page.signB,
      ),
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
    createCompatibilityKey(
      signA,
      signB,
    ),
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
