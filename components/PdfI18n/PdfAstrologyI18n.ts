import type {
  PdfLocale,
} from "../EssentialPdf/EssentialPdfTypes";

import {
  SUN,
  MOON,
  MERCURY,
  VENUS,
  MARS,
  JUPITER,
  SATURN,
  URANUS,
  NEPTUNE,
  PLUTO,
} from "@/lib/astrology";

/*
|--------------------------------------------------------------------------
| JSON astrologiques — FR
|--------------------------------------------------------------------------
*/

import sunFr from "../../i18n/migrated/fr/lib/astrology/sun.json";
import moonFr from "../../i18n/migrated/fr/lib/astrology/moon.json";
import mercuryFr from "../../i18n/migrated/fr/lib/astrology/mercury.json";
import venusFr from "../../i18n/migrated/fr/lib/astrology/venus.json";
import marsFr from "../../i18n/migrated/fr/lib/astrology/mars.json";
import jupiterFr from "../../i18n/migrated/fr/lib/astrology/jupiter.json";
import saturnFr from "../../i18n/migrated/fr/lib/astrology/saturn.json";
import uranusFr from "../../i18n/migrated/fr/lib/astrology/uranus.json";
import neptuneFr from "../../i18n/migrated/fr/lib/astrology/neptune.json";
import plutoFr from "../../i18n/migrated/fr/lib/astrology/pluto.json";

/*
|--------------------------------------------------------------------------
| JSON astrologiques — EN
|--------------------------------------------------------------------------
*/

import sunEn from "../../i18n/migrated/en/lib/astrology/sun.json";
import moonEn from "../../i18n/migrated/en/lib/astrology/moon.json";
import mercuryEn from "../../i18n/migrated/en/lib/astrology/mercury.json";
import venusEn from "../../i18n/migrated/en/lib/astrology/venus.json";
import marsEn from "../../i18n/migrated/en/lib/astrology/mars.json";
import jupiterEn from "../../i18n/migrated/en/lib/astrology/jupiter.json";
import saturnEn from "../../i18n/migrated/en/lib/astrology/saturn.json";
import uranusEn from "../../i18n/migrated/en/lib/astrology/uranus.json";
import neptuneEn from "../../i18n/migrated/en/lib/astrology/neptune.json";
import plutoEn from "../../i18n/migrated/en/lib/astrology/pluto.json";

/*
|--------------------------------------------------------------------------
| JSON astrologiques — ES
|--------------------------------------------------------------------------
*/

import sunEs from "../../i18n/migrated/es/lib/astrology/sun.json";
import moonEs from "../../i18n/migrated/es/lib/astrology/moon.json";
import mercuryEs from "../../i18n/migrated/es/lib/astrology/mercury.json";
import venusEs from "../../i18n/migrated/es/lib/astrology/venus.json";
import marsEs from "../../i18n/migrated/es/lib/astrology/mars.json";
import jupiterEs from "../../i18n/migrated/es/lib/astrology/jupiter.json";
import saturnEs from "../../i18n/migrated/es/lib/astrology/saturn.json";
import uranusEs from "../../i18n/migrated/es/lib/astrology/uranus.json";
import neptuneEs from "../../i18n/migrated/es/lib/astrology/neptune.json";
import plutoEs from "../../i18n/migrated/es/lib/astrology/pluto.json";

/*
|--------------------------------------------------------------------------
| JSON astrologiques — DE
|--------------------------------------------------------------------------
*/

import sunDe from "../../i18n/migrated/de/lib/astrology/sun.json";
import moonDe from "../../i18n/migrated/de/lib/astrology/moon.json";
import mercuryDe from "../../i18n/migrated/de/lib/astrology/mercury.json";
import venusDe from "../../i18n/migrated/de/lib/astrology/venus.json";
import marsDe from "../../i18n/migrated/de/lib/astrology/mars.json";
import jupiterDe from "../../i18n/migrated/de/lib/astrology/jupiter.json";
import saturnDe from "../../i18n/migrated/de/lib/astrology/saturn.json";
import uranusDe from "../../i18n/migrated/de/lib/astrology/uranus.json";
import neptuneDe from "../../i18n/migrated/de/lib/astrology/neptune.json";
import plutoDe from "../../i18n/migrated/de/lib/astrology/pluto.json";

/*
|--------------------------------------------------------------------------
| JSON astrologiques — IT
|--------------------------------------------------------------------------
*/

import sunIt from "../../i18n/migrated/it/lib/astrology/sun.json";
import moonIt from "../../i18n/migrated/it/lib/astrology/moon.json";
import mercuryIt from "../../i18n/migrated/it/lib/astrology/mercury.json";
import venusIt from "../../i18n/migrated/it/lib/astrology/venus.json";
import marsIt from "../../i18n/migrated/it/lib/astrology/mars.json";
import jupiterIt from "../../i18n/migrated/it/lib/astrology/jupiter.json";
import saturnIt from "../../i18n/migrated/it/lib/astrology/saturn.json";
import uranusIt from "../../i18n/migrated/it/lib/astrology/uranus.json";
import neptuneIt from "../../i18n/migrated/it/lib/astrology/neptune.json";
import plutoIt from "../../i18n/migrated/it/lib/astrology/pluto.json";

/*
|--------------------------------------------------------------------------
| JSON astrologiques — PT
|--------------------------------------------------------------------------
*/

import sunPt from "../../i18n/migrated/pt/lib/astrology/sun.json";
import moonPt from "../../i18n/migrated/pt/lib/astrology/moon.json";
import mercuryPt from "../../i18n/migrated/pt/lib/astrology/mercury.json";
import venusPt from "../../i18n/migrated/pt/lib/astrology/venus.json";
import marsPt from "../../i18n/migrated/pt/lib/astrology/mars.json";
import jupiterPt from "../../i18n/migrated/pt/lib/astrology/jupiter.json";
import saturnPt from "../../i18n/migrated/pt/lib/astrology/saturn.json";
import uranusPt from "../../i18n/migrated/pt/lib/astrology/uranus.json";
import neptunePt from "../../i18n/migrated/pt/lib/astrology/neptune.json";
import plutoPt from "../../i18n/migrated/pt/lib/astrology/pluto.json";

type Dictionary =
  Record<string, string>;

type PlanetDictionaryMap =
  Record<
    string,
    Record<
      PdfLocale,
      Dictionary
    >
  >;

/*
|--------------------------------------------------------------------------
| Texte français source
|--------------------------------------------------------------------------
*/

const FRENCH_PLANET_TEXTS: Record<
  string,
  Record<string, string>
> = {
  Sun: SUN,
  Moon: MOON,
  Mercury: MERCURY,
  Venus: VENUS,
  Mars: MARS,
  Jupiter: JUPITER,
  Saturn: SATURN,
  Uranus: URANUS,
  Neptune: NEPTUNE,
  Pluto: PLUTO,
};

/*
|--------------------------------------------------------------------------
| Dictionnaires par planète et langue
|--------------------------------------------------------------------------
*/

const PLANET_DICTIONARIES: PlanetDictionaryMap = {
  Sun: {
    fr: sunFr,
    en: sunEn,
    es: sunEs,
    de: sunDe,
    it: sunIt,
    pt: sunPt,
  },

  Moon: {
    fr: moonFr,
    en: moonEn,
    es: moonEs,
    de: moonDe,
    it: moonIt,
    pt: moonPt,
  },

  Mercury: {
    fr: mercuryFr,
    en: mercuryEn,
    es: mercuryEs,
    de: mercuryDe,
    it: mercuryIt,
    pt: mercuryPt,
  },

  Venus: {
    fr: venusFr,
    en: venusEn,
    es: venusEs,
    de: venusDe,
    it: venusIt,
    pt: venusPt,
  },

  Mars: {
    fr: marsFr,
    en: marsEn,
    es: marsEs,
    de: marsDe,
    it: marsIt,
    pt: marsPt,
  },

  Jupiter: {
    fr: jupiterFr,
    en: jupiterEn,
    es: jupiterEs,
    de: jupiterDe,
    it: jupiterIt,
    pt: jupiterPt,
  },

  Saturn: {
    fr: saturnFr,
    en: saturnEn,
    es: saturnEs,
    de: saturnDe,
    it: saturnIt,
    pt: saturnPt,
  },

  Uranus: {
    fr: uranusFr,
    en: uranusEn,
    es: uranusEs,
    de: uranusDe,
    it: uranusIt,
    pt: uranusPt,
  },

  Neptune: {
    fr: neptuneFr,
    en: neptuneEn,
    es: neptuneEs,
    de: neptuneDe,
    it: neptuneIt,
    pt: neptunePt,
  },

  Pluto: {
    fr: plutoFr,
    en: plutoEn,
    es: plutoEs,
    de: plutoDe,
    it: plutoIt,
    pt: plutoPt,
  },
};

/*
|--------------------------------------------------------------------------
| Recherche de la clé i18n
|--------------------------------------------------------------------------
*/

function findTranslationKey(
  frenchDictionary: Dictionary,
  frenchText: string
): string | null {
  const entry =
    Object.entries(
      frenchDictionary
    ).find(
      ([, value]) =>
        value === frenchText
    );

  return entry?.[0] ?? null;
}

/*
|--------------------------------------------------------------------------
| Interprétation localisée
|--------------------------------------------------------------------------
*/

export function getLocalizedPlanetInterpretation(
  planetName: string,
  signName?: string,
  locale: PdfLocale = "fr"
): string {
  if (!signName) {
    return "";
  }

  const frenchPlanetTexts =
    FRENCH_PLANET_TEXTS[
      planetName
    ];

  if (!frenchPlanetTexts) {
    return "";
  }

  const frenchText =
    frenchPlanetTexts[
      signName
    ];

  if (!frenchText) {
    return "";
  }

  if (locale === "fr") {
    return frenchText;
  }

  const planetDictionaries =
    PLANET_DICTIONARIES[
      planetName
    ];

  if (!planetDictionaries) {
    return frenchText;
  }

  const frenchDictionary =
    planetDictionaries.fr;

  const localizedDictionary =
    planetDictionaries[
      locale
    ];

  if (
    !frenchDictionary ||
    !localizedDictionary
  ) {
    return frenchText;
  }

  const key =
    findTranslationKey(
      frenchDictionary,
      frenchText
    );

  if (!key) {
    return frenchText;
  }

  return (
    localizedDictionary[
      key
    ] ||
    frenchText
  );
}
