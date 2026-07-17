import type { HoroscopeTextes } from "./types";

import { belierHoroscope } from "./belier";
import { taureauHoroscope } from "./taureau";
import { gemeauxHoroscope } from "./gemeaux";
import { cancerHoroscope } from "./cancer";
import { lionHoroscope } from "./lion";
import { viergeHoroscope } from "./vierge";
import balanceHoroscope from "./balance";
import scorpionHoroscope from "./scorpion";
import sagittaireHoroscope from "./sagittaire";
import { capricorneHoroscope } from "./capricorne";
import { verseauHoroscope } from "./verseau";
import { poissonsHoroscope } from "./poissons";

export const HOROSCOPE_TEXTES: Record<string, HoroscopeTextes> = {
  belier: belierHoroscope,
  taureau: taureauHoroscope,
  gemeaux: gemeauxHoroscope,
  cancer: cancerHoroscope,
  lion: lionHoroscope,
  vierge: viergeHoroscope,
  balance: balanceHoroscope,
  scorpion: scorpionHoroscope,
  sagittaire: sagittaireHoroscope,
  capricorne: capricorneHoroscope,
  verseau: verseauHoroscope,
  poissons: poissonsHoroscope,
};
