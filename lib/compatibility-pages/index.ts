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

export const COMPATIBILITY_PAGES:
  CompatibilityPageData[] = [
    ...BELIER_COMPATIBILITY_PAGES,
  ];

export function getSignByKey(
  key: SignKey,
) {
  return SIGNS.find(
    (sign) =>
      sign.key === key,
  );
}

export function getCompatibilityPage(
  signA: SignKey,
  signB: SignKey,
) {
  return COMPATIBILITY_PAGES.find(
    (page) =>
      page.signA === signA &&
      page.signB === signB,
  );
}

export function isSignKey(
  value: string,
): value is SignKey {
  return SIGNS.some(
    (sign) =>
      sign.key === value,
  );
}
