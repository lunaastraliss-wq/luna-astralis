import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type TranslationMap =
  Record<string, string>;

const TRANSLATIONS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Point d’équilibre":
      "Balance point",

    "Respirer":
      "Breathe",

    "Ralentissez quelques instants afin de diminuer la tension et de retrouver un rythme plus naturel.":
      "Slow down for a few moments to release tension and return to a more natural rhythm.",

    "Bouger":
      "Move",

    "Un mouvement doux et régulier aide à relancer l’énergie sans vous demander un effort excessif.":
      "Gentle, regular movement helps restore your energy without requiring excessive effort.",

    "Récupérer":
      "Recover",

    "Accordez une vraie place au repos afin que le corps et l’esprit puissent se rééquilibrer.":
      "Make genuine room for rest so that your body and mind can regain their balance.",

    "Bien-être et équilibre":
      "Well-being and balance",

    "Votre vitalité intérieure":
      "Your inner vitality",

    "Équilibre de la période":
      "Balance for this period",

    "sur 100":
      "out of 100",

    "Niveau de bien-être":
      "Well-being level",

    "Énergie physique":
      "Physical energy",

    "Respectez votre rythme corporel et privilégiez une progression régulière plutôt qu’un effort trop intense ou irrégulier.":
      "Respect your body's rhythm and favor steady progress rather than overly intense or irregular effort.",

    "Équilibre émotionnel":
      "Emotional balance",

    "Protégez votre espace intérieur et accordez-vous des moments de calme lorsque les émotions deviennent plus lourdes.":
      "Protect your inner space and give yourself moments of calm when emotions become heavier.",

    "Les points d’équilibre":
      "Balance points",

    "Récupération":
      "Recovery",

    "Hydratation":
      "Hydration",

    "Équilibre":
      "Balance",

    "Conseil bien-être":
      "Well-being advice",

    "Cette section présente une lecture astrologique du bien-être et ne remplace pas un avis médical.":
      "This section provides an astrological perspective on well-being and is not a substitute for medical advice.",
  },

  es: {
    "Point d’équilibre":
      "Punto de equilibrio",

    "Respirer":
      "Respirar",

    "Ralentissez quelques instants afin de diminuer la tension et de retrouver un rythme plus naturel.":
      "Reduzca el ritmo durante unos instantes para aliviar la tensión y recuperar un ritmo más natural.",

    "Bouger":
      "Moverse",

    "Un mouvement doux et régulier aide à relancer l’énergie sans vous demander un effort excessif.":
      "Un movimiento suave y regular ayuda a recuperar la energía sin exigir un esfuerzo excesivo.",

    "Récupérer":
      "Recuperarse",

    "Accordez une vraie place au repos afin que le corps et l’esprit puissent se rééquilibrer.":
      "Reserve un verdadero espacio para el descanso para que el cuerpo y la mente puedan recuperar su equilibrio.",

    "Bien-être et équilibre":
      "Bienestar y equilibrio",

    "Votre vitalité intérieure":
      "Su vitalidad interior",

    "Équilibre de la période":
      "Equilibrio del período",

    "sur 100":
      "de 100",

    "Niveau de bien-être":
      "Nivel de bienestar",

    "Énergie physique":
      "Energía física",

    "Respectez votre rythme corporel et privilégiez une progression régulière plutôt qu’un effort trop intense ou irrégulier.":
      "Respete el ritmo de su cuerpo y priorice un progreso constante en lugar de un esfuerzo demasiado intenso o irregular.",

    "Équilibre émotionnel":
      "Equilibrio emocional",

    "Protégez votre espace intérieur et accordez-vous des moments de calme lorsque les émotions deviennent plus lourdes.":
      "Proteja su espacio interior y concédase momentos de calma cuando las emociones se vuelvan más intensas.",

    "Les points d’équilibre":
      "Los puntos de equilibrio",

    "Récupération":
      "Recuperación",

    "Hydratation":
      "Hidratación",

    "Équilibre":
      "Equilibrio",

    "Conseil bien-être":
      "Consejo de bienestar",

    "Cette section présente une lecture astrologique du bien-être et ne remplace pas un avis médical.":
      "Esta sección ofrece una interpretación astrológica del bienestar y no sustituye el consejo médico.",
  },

  de: {
    "Point d’équilibre":
      "Gleichgewichtspunkt",

    "Respirer":
      "Atmen",

    "Ralentissez quelques instants afin de diminuer la tension et de retrouver un rythme plus naturel.":
      "Nehmen Sie sich einige Augenblicke Zeit, um Anspannung abzubauen und zu einem natürlicheren Rhythmus zurückzufinden.",

    "Bouger":
      "Bewegen",

    "Un mouvement doux et régulier aide à relancer l’énergie sans vous demander un effort excessif.":
      "Sanfte und regelmäßige Bewegung hilft, neue Energie zu gewinnen, ohne den Körper übermäßig zu belasten.",

    "Récupérer":
      "Erholen",

    "Accordez une vraie place au repos afin que le corps et l’esprit puissent se rééquilibrer.":
      "Geben Sie der Erholung ausreichend Raum, damit Körper und Geist wieder ins Gleichgewicht finden können.",

    "Bien-être et équilibre":
      "Wohlbefinden und Gleichgewicht",

    "Votre vitalité intérieure":
      "Ihre innere Vitalität",

    "Équilibre de la période":
      "Gleichgewicht dieser Phase",

    "sur 100":
      "von 100",

    "Niveau de bien-être":
      "Wohlbefinden",

    "Énergie physique":
      "Körperliche Energie",

    "Respectez votre rythme corporel et privilégiez une progression régulière plutôt qu’un effort trop intense ou irrégulier.":
      "Achten Sie auf den Rhythmus Ihres Körpers und bevorzugen Sie stetige Fortschritte statt übermäßiger oder unregelmäßiger Anstrengung.",

    "Équilibre émotionnel":
      "Emotionales Gleichgewicht",

    "Protégez votre espace intérieur et accordez-vous des moments de calme lorsque les émotions deviennent plus lourdes.":
      "Schützen Sie Ihren inneren Raum und gönnen Sie sich Momente der Ruhe, wenn die Gefühle belastender werden.",

    "Les points d’équilibre":
      "Gleichgewichtspunkte",

    "Récupération":
      "Erholung",

    "Hydratation":
      "Flüssigkeitszufuhr",

    "Équilibre":
      "Gleichgewicht",

    "Conseil bien-être":
      "Rat für Ihr Wohlbefinden",

    "Cette section présente une lecture astrologique du bien-être et ne remplace pas un avis médical.":
      "Dieser Abschnitt bietet eine astrologische Betrachtung des Wohlbefindens und ersetzt keine medizinische Beratung.",
  },

  it: {
    "Point d’équilibre":
      "Punto di equilibrio",

    "Respirer":
      "Respirare",

    "Ralentissez quelques instants afin de diminuer la tension et de retrouver un rythme plus naturel.":
      "Rallenta per qualche istante per ridurre la tensione e ritrovare un ritmo più naturale.",

    "Bouger":
      "Muoversi",

    "Un mouvement doux et régulier aide à relancer l’énergie sans vous demander un effort excessif.":
      "Un movimento dolce e regolare aiuta a recuperare energia senza richiedere uno sforzo eccessivo.",

    "Récupérer":
      "Recuperare",

    "Accordez une vraie place au repos afin que le corps et l’esprit puissent se rééquilibrer.":
      "Dedica uno spazio autentico al riposo affinché corpo e mente possano ritrovare il loro equilibrio.",

    "Bien-être et équilibre":
      "Benessere ed equilibrio",

    "Votre vitalité intérieure":
      "La tua vitalità interiore",

    "Équilibre de la période":
      "Equilibrio del periodo",

    "sur 100":
      "su 100",

    "Niveau de bien-être":
      "Livello di benessere",

    "Énergie physique":
      "Energia fisica",

    "Respectez votre rythme corporel et privilégiez une progression régulière plutôt qu’un effort trop intense ou irrégulier.":
      "Rispetta il ritmo del tuo corpo e privilegia un progresso costante invece di uno sforzo troppo intenso o irregolare.",

    "Équilibre émotionnel":
      "Equilibrio emotivo",

    "Protégez votre espace intérieur et accordez-vous des moments de calme lorsque les émotions deviennent plus lourdes.":
      "Proteggi il tuo spazio interiore e concediti momenti di calma quando le emozioni diventano più pesanti.",

    "Les points d’équilibre":
      "I punti di equilibrio",

    "Récupération":
      "Recupero",

    "Hydratation":
      "Idratazione",

    "Équilibre":
      "Equilibrio",

    "Conseil bien-être":
      "Consiglio per il benessere",

    "Cette section présente une lecture astrologique du bien-être et ne remplace pas un avis médical.":
      "Questa sezione offre una lettura astrologica del benessere e non sostituisce un parere medico.",
  },

  pt: {
    "Point d’équilibre":
      "Ponto de equilíbrio",

    "Respirer":
      "Respirar",

    "Ralentissez quelques instants afin de diminuer la tension et de retrouver un rythme plus naturel.":
      "Desacelere por alguns instantes para diminuir a tensão e recuperar um ritmo mais natural.",

    "Bouger":
      "Movimentar-se",

    "Un mouvement doux et régulier aide à relancer l’énergie sans vous demander un effort excessif.":
      "Movimentos suaves e regulares ajudam a recuperar a energia sem exigir esforço excessivo.",

    "Récupérer":
      "Recuperar",

    "Accordez une vraie place au repos afin que le corps et l’esprit puissent se rééquilibrer.":
      "Reserve um espaço verdadeiro para o descanso para que o corpo e a mente possam recuperar o equilíbrio.",

    "Bien-être et équilibre":
      "Bem-estar e equilíbrio",

    "Votre vitalité intérieure":
      "Sua vitalidade interior",

    "Équilibre de la période":
      "Equilíbrio do período",

    "sur 100":
      "de 100",

    "Niveau de bien-être":
      "Nível de bem-estar",

    "Énergie physique":
      "Energia física",

    "Respectez votre rythme corporel et privilégiez une progression régulière plutôt qu’un effort trop intense ou irrégulier.":
      "Respeite o ritmo do seu corpo e priorize um progresso constante em vez de esforços excessivos ou irregulares.",

    "Équilibre émotionnel":
      "Equilíbrio emocional",

    "Protégez votre espace intérieur et accordez-vous des moments de calme lorsque les émotions deviennent plus lourdes.":
      "Proteja seu espaço interior e permita-se momentos de calma quando as emoções se tornarem mais intensas.",

    "Les points d’équilibre":
      "Pontos de equilíbrio",

    "Récupération":
      "Recuperação",

    "Hydratation":
      "Hidratação",

    "Équilibre":
      "Equilíbrio",

    "Conseil bien-être":
      "Conselho de bem-estar",

    "Cette section présente une lecture astrologique du bien-être et ne remplace pas un avis médical.":
      "Esta seção apresenta uma interpretação astrológica do bem-estar e não substitui orientação médica.",
  },
};

const MONTHS: Record<
  NonFrenchLocale,
  string[]
> = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],

  es: [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ],

  de: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ],

  it: [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre",
  ],

  pt: [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ],
};

const FRENCH_MONTHS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
] as const;

const ZODIAC_LABELS: Record<
  NonFrenchLocale,
  Record<string, string>
> = {
  en: {
    Bélier: "Aries",
    Taureau: "Taurus",
    Gémeaux: "Gemini",
    Cancer: "Cancer",
    Lion: "Leo",
    Vierge: "Virgo",
    Balance: "Libra",
    Scorpion: "Scorpio",
    Sagittaire: "Sagittarius",
    Capricorne: "Capricorn",
    Verseau: "Aquarius",
    Poissons: "Pisces",
  },

  es: {
    Bélier: "Aries",
    Taureau: "Tauro",
    Gémeaux: "Géminis",
    Cancer: "Cáncer",
    Lion: "Leo",
    Vierge: "Virgo",
    Balance: "Libra",
    Scorpion: "Escorpio",
    Sagittaire: "Sagitario",
    Capricorne: "Capricornio",
    Verseau: "Acuario",
    Poissons: "Piscis",
  },

  de: {
    Bélier: "Widder",
    Taureau: "Stier",
    Gémeaux: "Zwillinge",
    Cancer: "Krebs",
    Lion: "Löwe",
    Vierge: "Jungfrau",
    Balance: "Waage",
    Scorpion: "Skorpion",
    Sagittaire: "Schütze",
    Capricorne: "Steinbock",
    Verseau: "Wassermann",
    Poissons: "Fische",
  },

  it: {
    Bélier: "Ariete",
    Taureau: "Toro",
    Gémeaux: "Gemelli",
    Cancer: "Cancro",
    Lion: "Leone",
    Vierge: "Vergine",
    Balance: "Bilancia",
    Scorpion: "Scorpione",
    Sagittaire: "Sagittario",
    Capricorne: "Capricorno",
    Verseau: "Acquario",
    Poissons: "Pesci",
  },

  pt: {
    Bélier: "Áries",
    Taureau: "Touro",
    Gémeaux: "Gêmeos",
    Cancer: "Câncer",
    Lion: "Leão",
    Vierge: "Virgem",
    Balance: "Libra",
    Scorpion: "Escorpião",
    Sagittaire: "Sagitário",
    Capricorne: "Capricórnio",
    Verseau: "Aquário",
    Poissons: "Peixes",
  },
};

function localizeSafeLiterals(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "HoroscopeHealth.tsx",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );

  const replacements: Array<{
    start: number;
    end: number;
    value: string;
  }> = [];

  function visit(
    node: ts.Node,
  ): void {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    ) {
      const translated =
        translations[node.text];

      if (
        typeof translated === "string" &&
        translated !== node.text
      ) {
        replacements.push({
          start:
            node.getStart(sourceFile),
          end:
            node.getEnd(),
          value:
            JSON.stringify(translated),
        });
      }
    }

    if (ts.isJsxText(node)) {
      const raw =
        node.getText(sourceFile);

      const normalized =
        raw.replace(/\s+/g, " ").trim();

      const translated =
        translations[normalized];

      if (
        normalized &&
        typeof translated === "string"
      ) {
        const leading =
          raw.match(/^\s*/)?.[0] ?? "";

        const trailing =
          raw.match(/\s*$/)?.[0] ?? "";

        replacements.push({
          start:
            node.getStart(sourceFile),
          end:
            node.getEnd(),
          value:
            `${leading}${translated}${trailing}`,
        });
      }
    }

    ts.forEachChild(
      node,
      visit,
    );
  }

  visit(sourceFile);

  return replacements
    .sort(
      (a, b) =>
        b.start - a.start,
    )
    .reduce(
      (
        output,
        replacement,
      ) =>
        output.slice(
          0,
          replacement.start,
        ) +
        replacement.value +
        output.slice(
          replacement.end,
        ),
      source,
    );
}

function replaceDynamicHealthValues(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /const\s+periodLabel\s*=\s*formatHoroscopePeriodLabel\(\s*period\s*\);/g,
    `const periodLabel =
    __healthLocalizedPeriodLabel(
      period,
    );`,
  );

  /*
   * IMPORTANT :
   * Le vrai signe astrologique est traité
   * séparément des textes ordinaires.
   */
  output = output.replace(
    /\{identity\.zodiacSignLabel\}/g,
    "{__healthLocalizeZodiacSign(identity.zodiacSignLabel)}",
  );

  output = output.replace(
    /\{content\.health\.title\}/g,
    "{__healthLocalizeDynamicText(content.health.title)}",
  );

  output = output.replace(
    /\{content\.health\.introduction\}/g,
    "{__healthLocalizeDynamicText(content.health.introduction)}",
  );

  output = output.replace(
    /\{content\.health\.text\}/g,
    "{__healthLocalizeDynamicText(content.health.text)}",
  );

  output = output.replace(
    /\btext=\{highlight\}/g,
    "text={__healthLocalizeDynamicText(highlight)}",
  );

  output = output.replace(
    /\{content\.health\.advice\}/g,
    "{__healthLocalizeDynamicText(content.health.advice)}",
  );

  return output;
}

function injectHealthHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __healthLocalizeDynamicText",
    )
  ) {
    return source;
  }

  const helper = `
/* =========================================================
   HOROSCOPE HEALTH — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __HEALTH_MONTHS =
  ${JSON.stringify(MONTHS[locale], null, 2)} as const;

const __HEALTH_FRENCH_MONTHS =
  ${JSON.stringify(FRENCH_MONTHS, null, 2)} as const;

const __HEALTH_ZODIAC_LABELS:
  Record<string, string> =
  ${JSON.stringify(ZODIAC_LABELS[locale], null, 2)};

const __HEALTH_TRANSLATIONS:
  Record<string, string> =
  ${JSON.stringify(TRANSLATIONS[locale], null, 2)};

function __healthLocalizeZodiacSign(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  return (
    __HEALTH_ZODIAC_LABELS[value] ??
    value
  );
}

function __healthLocalizeDynamicText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  let output =
    __HEALTH_TRANSLATIONS[value] ??
    value;

  /*
   * On peut traduire les mois contenus
   * dans un texte dynamique.
   *
   * On ne traduit PAS les signes ici.
   * Ainsi :
   *
   * Équilibre -> Balance
   *
   * reste Balance et ne devient jamais Libra.
   */
  __HEALTH_FRENCH_MONTHS.forEach(
    (frenchMonth, index) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${frenchMonth}\\\\b\`,
          "gi",
        ),
        __HEALTH_MONTHS[index],
      );
    },
  );

  return output;
}

function __healthFormatIsoDate(
  isoDate?: string | null,
): string {
  if (!isoDate) {
    return "";
  }

  const match =
    isoDate.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __healthLocalizeDynamicText(
      isoDate,
    );
  }

  const year =
    Number(match[1]);

  const month =
    Number(match[2]);

  const day =
    Number(match[3]);

  ${
    locale === "en"
      ? 'return `${__HEALTH_MONTHS[month - 1]} ${day}, ${year}`;'
      : locale === "de"
        ? 'return `${day}. ${__HEALTH_MONTHS[month - 1]} ${year}`;'
        : locale === "es"
          ? 'return `${day} de ${__HEALTH_MONTHS[month - 1]} de ${year}`;'
          : locale === "pt"
            ? 'return `${day} de ${__HEALTH_MONTHS[month - 1]} de ${year}`;'
            : 'return `${day} ${__HEALTH_MONTHS[month - 1]} ${year}`;'
  }
}

function __healthLocalizedPeriodLabel(
  period: HoroscopeSectionProps["period"],
): string {
  if (period.type === "day") {
    return __healthFormatIsoDate(
      period.startDate,
    );
  }

  const match =
    period.startDate?.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __healthLocalizeDynamicText(
      period.label ||
      period.startDate ||
      "",
    );
  }

  const year =
    Number(match[1]);

  const month =
    Number(match[2]);

  if (period.type === "month") {
    return \`\${__HEALTH_MONTHS[
      month - 1
    ]} \${year}\`;
  }

  return String(year);
}

/* =========================================================
   END HOROSCOPE HEALTH — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeHealth";

  const index =
    source.indexOf(marker);

  if (index < 0) {
    return source;
  }

  return (
    source.slice(0, index) +
    helper +
    source.slice(index)
  );
}

export function localizeHoroscopeHealth(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    TRANSLATIONS[normalizedLocale];

  if (!translations) {
    return source;
  }

  let localized =
    replaceDynamicHealthValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectHealthHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
