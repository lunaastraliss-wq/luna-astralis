import type { HoroscopeTextes } from "./types";

import { belierHoroscope } from "./belier";
import { taureauHoroscope } from "./taureau";
import { gemeauxHoroscope } from "./gemeaux";
import { cancerHoroscope } from "./cancer";
import { lionHoroscope } from "./lion";
import { viergeHoroscope } from "./vierge";

import balance from "./balance";
import scorpion from "./scorpion";
import sagittaire from "./sagittaire";
import capricorne from "./capricorne";
import verseau from "./verseau";
import poissons from "./poissons";

export const HOROSCOPE_TEXTES: Record<string, HoroscopeTextes> = {
  belier: belierHoroscope,
  taureau: taureauHoroscope,
  gemeaux: gemeauxHoroscope,
  cancer: cancerHoroscope,
  lion: lionHoroscope,
  vierge: viergeHoroscope,
  balance,
  scorpion,
  sagittaire,
  capricorne,
  verseau,
  poissons,
};
