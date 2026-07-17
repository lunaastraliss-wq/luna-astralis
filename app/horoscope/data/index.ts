import type { HoroscopeTextes } from "./types";

import { belier } from "./belier";
import { taureau } from "./taureau";
import { gemeaux } from "./gemeaux";
import { cancer } from "./cancer";
import { lion } from "./lion";
import { vierge } from "./vierge";
import { balance } from "./balance";
import { scorpion } from "./scorpion";
import { sagittaire } from "./sagittaire";
import { capricorne } from "./capricorne";
import { verseau } from "./verseau";
import { poissons } from "./poissons";

export const HOROSCOPE_TEXTES: Record<
  string,
  HoroscopeTextes
> = {
  belier,
  taureau,
  gemeaux,
  cancer,
  lion,
  vierge,
  balance,
  scorpion,
  sagittaire,
  capricorne,
  verseau,
  poissons,
};
