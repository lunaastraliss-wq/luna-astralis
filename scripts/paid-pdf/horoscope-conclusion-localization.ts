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
    "Votre chemin pour cette période":
      "Your path for this period",

    "Votre message du jour":
      "Your message for today",

    "Les influences de cette période vous invitent à avancer avec conscience, confiance et discernement. Accueillez les occasions qui vous ressemblent et accordez-vous le droit d’ajuster votre direction lorsque cela devient nécessaire.":
      "The influences of this period invite you to move forward with awareness, confidence, and discernment. Welcome the opportunities that resonate with you and allow yourself to adjust your direction whenever necessary.",

    "L’astrologie éclaire les tendances, les forces et les défis possibles. Elle ne décide jamais à votre place. Vos choix, votre expérience et votre intuition restent au cœur de votre parcours.":
      "Astrology sheds light on possible trends, strengths, and challenges. It never decides for you. Your choices, experience, and intuition remain at the heart of your journey.",

    "Votre force réside aujourd’hui dans votre capacité à observer clairement et à agir au moment opportun.":
      "Your strength today lies in your ability to observe clearly and act at the right moment.",

    "Votre évolution":
      "Your growth",

    "Cette période vous invite à reconnaître ce qui demande à grandir, à changer ou à être dépassé.":
      "This period invites you to recognize what needs to grow, change, or be overcome.",

    "Votre intuition":
      "Your intuition",

    "Vos ressentis peuvent devenir un guide précieux lorsque vous leur accordez du calme et de l’espace.":
      "Your feelings can become a valuable guide when you give them calm and space.",

    "Vos ressources":
      "Your resources",

    "Vos qualités naturelles, parfois discrètes, peuvent vous aider à traverser les défis avec confiance.":
      "Your natural qualities, sometimes subtle, can help you move through challenges with confidence.",

    "Votre direction":
      "Your direction",

    "Avancez par étapes, observez les signes utiles et choisissez ce qui reste profondément juste pour vous.":
      "Move forward step by step, notice useful signs, and choose what remains deeply right for you.",

    "Conclusion":
      "Conclusion",

    "Votre lumière pour la suite":
      "Your light for the path ahead",

    "Synthèse essentielle":
      "Essential summary",

    "Ce que vous devez retenir":
      "What to remember",

    "Votre message de clôture":
      "Your closing message",

    "Merci pour votre confiance":
      "Thank you for your trust",

    "Que cette lecture vous accompagne avec clarté, confiance et inspiration.":
      "May this reading accompany you with clarity, confidence, and inspiration.",

    "Gardez ce rapport près de vous et revenez-y lorsque vous aurez besoin de prendre du recul, de retrouver votre direction ou de renouer avec ce qui compte vraiment pour vous.":
      "Keep this report close and return to it whenever you need perspective, to reconnect with your direction, or with what truly matters to you.",

    "Créé avec soin par Luna Astralis":
      "Created with care by Luna Astralis",
  },

  es: {
    "Votre chemin pour cette période":
      "Su camino para este período",

    "Votre message du jour":
      "Su mensaje del día",

    "Les influences de cette période vous invitent à avancer avec conscience, confiance et discernement. Accueillez les occasions qui vous ressemblent et accordez-vous le droit d’ajuster votre direction lorsque cela devient nécessaire.":
      "Las influencias de este período le invitan a avanzar con conciencia, confianza y discernimiento. Acoja las oportunidades que estén en sintonía con usted y permítase ajustar su dirección cuando sea necesario.",

    "L’astrologie éclaire les tendances, les forces et les défis possibles. Elle ne décide jamais à votre place. Vos choix, votre expérience et votre intuition restent au cœur de votre parcours.":
      "La astrología ilumina las tendencias, las fortalezas y los posibles desafíos. Nunca decide por usted. Sus decisiones, su experiencia y su intuición permanecen en el centro de su camino.",

    "Votre force réside aujourd’hui dans votre capacité à observer clairement et à agir au moment opportun.":
      "Su fuerza hoy reside en su capacidad para observar con claridad y actuar en el momento oportuno.",

    "Votre évolution":
      "Su evolución",

    "Cette période vous invite à reconnaître ce qui demande à grandir, à changer ou à être dépassé.":
      "Este período le invita a reconocer lo que necesita crecer, cambiar o ser superado.",

    "Votre intuition":
      "Su intuición",

    "Vos ressentis peuvent devenir un guide précieux lorsque vous leur accordez du calme et de l’espace.":
      "Sus sensaciones pueden convertirse en una guía valiosa cuando les concede calma y espacio.",

    "Vos ressources":
      "Sus recursos",

    "Vos qualités naturelles, parfois discrètes, peuvent vous aider à traverser les défis avec confiance.":
      "Sus cualidades naturales, a veces discretas, pueden ayudarle a afrontar los desafíos con confianza.",

    "Votre direction":
      "Su dirección",

    "Avancez par étapes, observez les signes utiles et choisissez ce qui reste profondément juste pour vous.":
      "Avance paso a paso, observe las señales útiles y elija lo que siga siendo profundamente adecuado para usted.",

    "Conclusion":
      "Conclusión",

    "Votre lumière pour la suite":
      "Su luz para el camino que sigue",

    "Synthèse essentielle":
      "Síntesis esencial",

    "Ce que vous devez retenir":
      "Lo que debe recordar",

    "Votre message de clôture":
      "Su mensaje final",

    "Merci pour votre confiance":
      "Gracias por su confianza",

    "Que cette lecture vous accompagne avec clarté, confiance et inspiration.":
      "Que esta lectura le acompañe con claridad, confianza e inspiración.",

    "Gardez ce rapport près de vous et revenez-y lorsque vous aurez besoin de prendre du recul, de retrouver votre direction ou de renouer avec ce qui compte vraiment pour vous.":
      "Conserve este informe cerca y vuelva a él cuando necesite tomar perspectiva, recuperar su dirección o reconectar con lo que realmente le importa.",

    "Créé avec soin par Luna Astralis":
      "Creado con dedicación por Luna Astralis",
  },

  de: {
    "Votre chemin pour cette période":
      "Ihr Weg für diese Phase",

    "Votre message du jour":
      "Ihre Botschaft für heute",

    "Les influences de cette période vous invitent à avancer avec conscience, confiance et discernement. Accueillez les occasions qui vous ressemblent et accordez-vous le droit d’ajuster votre direction lorsque cela devient nécessaire.":
      "Die Einflüsse dieser Phase laden Sie dazu ein, bewusst, zuversichtlich und mit Urteilsvermögen voranzugehen. Nehmen Sie Chancen an, die zu Ihnen passen, und erlauben Sie sich, Ihre Richtung anzupassen, wenn es notwendig wird.",

    "L’astrologie éclaire les tendances, les forces et les défis possibles. Elle ne décide jamais à votre place. Vos choix, votre expérience et votre intuition restent au cœur de votre parcours.":
      "Die Astrologie beleuchtet mögliche Tendenzen, Stärken und Herausforderungen. Sie entscheidet niemals an Ihrer Stelle. Ihre Entscheidungen, Ihre Erfahrung und Ihre Intuition bleiben im Mittelpunkt Ihres Weges.",

    "Votre force réside aujourd’hui dans votre capacité à observer clairement et à agir au moment opportun.":
      "Ihre Stärke liegt heute in Ihrer Fähigkeit, klar zu beobachten und im richtigen Moment zu handeln.",

    "Votre évolution":
      "Ihre Entwicklung",

    "Cette période vous invite à reconnaître ce qui demande à grandir, à changer ou à être dépassé.":
      "Diese Phase lädt Sie dazu ein, zu erkennen, was wachsen, sich verändern oder überwunden werden möchte.",

    "Votre intuition":
      "Ihre Intuition",

    "Vos ressentis peuvent devenir un guide précieux lorsque vous leur accordez du calme et de l’espace.":
      "Ihre Empfindungen können zu einem wertvollen Wegweiser werden, wenn Sie ihnen Ruhe und Raum geben.",

    "Vos ressources":
      "Ihre Ressourcen",

    "Vos qualités naturelles, parfois discrètes, peuvent vous aider à traverser les défis avec confiance.":
      "Ihre natürlichen, manchmal unscheinbaren Qualitäten können Ihnen helfen, Herausforderungen mit Zuversicht zu meistern.",

    "Votre direction":
      "Ihre Richtung",

    "Avancez par étapes, observez les signes utiles et choisissez ce qui reste profondément juste pour vous.":
      "Gehen Sie Schritt für Schritt vor, achten Sie auf hilfreiche Zeichen und wählen Sie, was sich für Sie zutiefst richtig anfühlt.",

    "Conclusion":
      "Fazit",

    "Votre lumière pour la suite":
      "Ihr Licht für den weiteren Weg",

    "Synthèse essentielle":
      "Wesentliche Zusammenfassung",

    "Ce que vous devez retenir":
      "Was Sie mitnehmen sollten",

    "Votre message de clôture":
      "Ihre abschließende Botschaft",

    "Merci pour votre confiance":
      "Vielen Dank für Ihr Vertrauen",

    "Que cette lecture vous accompagne avec clarté, confiance et inspiration.":
      "Möge diese Deutung Sie mit Klarheit, Zuversicht und Inspiration begleiten.",

    "Gardez ce rapport près de vous et revenez-y lorsque vous aurez besoin de prendre du recul, de retrouver votre direction ou de renouer avec ce qui compte vraiment pour vous.":
      "Bewahren Sie diesen Bericht in Ihrer Nähe auf und kehren Sie zu ihm zurück, wenn Sie Abstand gewinnen, Ihre Richtung wiederfinden oder sich erneut mit dem verbinden möchten, was Ihnen wirklich wichtig ist.",

    "Créé avec soin par Luna Astralis":
      "Mit Sorgfalt erstellt von Luna Astralis",
  },

  it: {
    "Votre chemin pour cette période":
      "Il tuo cammino per questo periodo",

    "Votre message du jour":
      "Il tuo messaggio del giorno",

    "Les influences de cette période vous invitent à avancer avec conscience, confiance et discernement. Accueillez les occasions qui vous ressemblent et accordez-vous le droit d’ajuster votre direction lorsque cela devient nécessaire.":
      "Le influenze di questo periodo ti invitano ad avanzare con consapevolezza, fiducia e discernimento. Accogli le opportunità che rispecchiano chi sei e concediti il diritto di modificare la tua direzione quando diventa necessario.",

    "L’astrologie éclaire les tendances, les forces et les défis possibles. Elle ne décide jamais à votre place. Vos choix, votre expérience et votre intuition restent au cœur de votre parcours.":
      "L'astrologia illumina le tendenze, i punti di forza e le possibili sfide. Non decide mai al posto tuo. Le tue scelte, la tua esperienza e la tua intuizione restano al centro del tuo percorso.",

    "Votre force réside aujourd’hui dans votre capacité à observer clairement et à agir au moment opportun.":
      "La tua forza oggi risiede nella capacità di osservare con chiarezza e agire al momento giusto.",

    "Votre évolution":
      "La tua evoluzione",

    "Cette période vous invite à reconnaître ce qui demande à grandir, à changer ou à être dépassé.":
      "Questo periodo ti invita a riconoscere ciò che ha bisogno di crescere, cambiare o essere superato.",

    "Votre intuition":
      "La tua intuizione",

    "Vos ressentis peuvent devenir un guide précieux lorsque vous leur accordez du calme et de l’espace.":
      "Le tue sensazioni possono diventare una guida preziosa quando concedi loro calma e spazio.",

    "Vos ressources":
      "Le tue risorse",

    "Vos qualités naturelles, parfois discrètes, peuvent vous aider à traverser les défis avec confiance.":
      "Le tue qualità naturali, a volte discrete, possono aiutarti ad affrontare le sfide con fiducia.",

    "Votre direction":
      "La tua direzione",

    "Avancez par étapes, observez les signes utiles et choisissez ce qui reste profondément juste pour vous.":
      "Procedi per gradi, osserva i segnali utili e scegli ciò che continua a sembrarti profondamente giusto.",

    "Conclusion":
      "Conclusione",

    "Votre lumière pour la suite":
      "La tua luce per il cammino futuro",

    "Synthèse essentielle":
      "Sintesi essenziale",

    "Ce que vous devez retenir":
      "Ciò che devi ricordare",

    "Votre message de clôture":
      "Il tuo messaggio finale",

    "Merci pour votre confiance":
      "Grazie per la tua fiducia",

    "Que cette lecture vous accompagne avec clarté, confiance et inspiration.":
      "Che questa lettura ti accompagni con chiarezza, fiducia e ispirazione.",

    "Gardez ce rapport près de vous et revenez-y lorsque vous aurez besoin de prendre du recul, de retrouver votre direction ou de renouer avec ce qui compte vraiment pour vous.":
      "Tieni questo rapporto vicino a te e rileggilo quando avrai bisogno di prendere le distanze, ritrovare la tua direzione o riconnetterti con ciò che conta davvero per te.",

    "Créé avec soin par Luna Astralis":
      "Creato con cura da Luna Astralis",
  },

  pt: {
    "Votre chemin pour cette période":
      "Seu caminho para este período",

    "Votre message du jour":
      "Sua mensagem do dia",

    "Les influences de cette période vous invitent à avancer avec conscience, confiance et discernement. Accueillez les occasions qui vous ressemblent et accordez-vous le droit d’ajuster votre direction lorsque cela devient nécessaire.":
      "As influências deste período convidam você a avançar com consciência, confiança e discernimento. Acolha as oportunidades que combinam com você e permita-se ajustar sua direção quando isso se tornar necessário.",

    "L’astrologie éclaire les tendances, les forces et les défis possibles. Elle ne décide jamais à votre place. Vos choix, votre expérience et votre intuition restent au cœur de votre parcours.":
      "A astrologia ilumina tendências, forças e possíveis desafios. Ela nunca decide por você. Suas escolhas, sua experiência e sua intuição permanecem no centro do seu caminho.",

    "Votre force réside aujourd’hui dans votre capacité à observer clairement et à agir au moment opportun.":
      "Sua força hoje está na capacidade de observar com clareza e agir no momento certo.",

    "Votre évolution":
      "Sua evolução",

    "Cette période vous invite à reconnaître ce qui demande à grandir, à changer ou à être dépassé.":
      "Este período convida você a reconhecer o que precisa crescer, mudar ou ser superado.",

    "Votre intuition":
      "Sua intuição",

    "Vos ressentis peuvent devenir un guide précieux lorsque vous leur accordez du calme et de l’espace.":
      "Suas sensações podem se tornar um guia valioso quando você lhes oferece calma e espaço.",

    "Vos ressources":
      "Seus recursos",

    "Vos qualités naturelles, parfois discrètes, peuvent vous aider à traverser les défis avec confiance.":
      "Suas qualidades naturais, às vezes discretas, podem ajudar você a enfrentar os desafios com confiança.",

    "Votre direction":
      "Sua direção",

    "Avancez par étapes, observez les signes utiles et choisissez ce qui reste profondément juste pour vous.":
      "Avance passo a passo, observe os sinais úteis e escolha aquilo que continua profundamente certo para você.",

    "Conclusion":
      "Conclusão",

    "Votre lumière pour la suite":
      "Sua luz para o caminho adiante",

    "Synthèse essentielle":
      "Síntese essencial",

    "Ce que vous devez retenir":
      "O que você deve lembrar",

    "Votre message de clôture":
      "Sua mensagem final",

    "Merci pour votre confiance":
      "Obrigado pela sua confiança",

    "Que cette lecture vous accompagne avec clarté, confiance et inspiration.":
      "Que esta leitura acompanhe você com clareza, confiança e inspiração.",

    "Gardez ce rapport près de vous et revenez-y lorsque vous aurez besoin de prendre du recul, de retrouver votre direction ou de renouer avec ce qui compte vraiment pour vous.":
      "Mantenha este relatório por perto e volte a ele quando precisar ganhar perspectiva, reencontrar sua direção ou se reconectar com aquilo que realmente importa para você.",

    "Créé avec soin par Luna Astralis":
      "Criado com cuidado por Luna Astralis",
  },
};

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

const THANK_YOU_PREFIX: Record<
  NonFrenchLocale,
  string
> = {
  en: "Thank you",
  es: "Gracias",
  de: "Vielen Dank",
  it: "Grazie",
  pt: "Obrigado",
};

function localizeSafeLiterals(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "HoroscopeConclusion.tsx",
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

function replaceDynamicConclusionValues(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /const\s+periodLabel\s*=\s*formatHoroscopePeriodLabel\(\s*period\s*\);/g,
    `const periodLabel =
    __conclusionLocalizedPeriodLabel(
      period,
    );`,
  );

  /*
   * Le vrai signe astrologique est localisé
   * séparément des textes ordinaires.
   */
  output = output.replace(
    /\{identity\.zodiacSignLabel\}/g,
    "{__conclusionLocalizeZodiacSign(identity.zodiacSignLabel)}",
  );

  output = output.replace(
    /\{conclusionTitle\}/g,
    "{__conclusionLocalizeDynamicText(conclusionTitle)}",
  );

  output = output.replace(
    /\{conclusionText\}/g,
    "{__conclusionLocalizeDynamicText(conclusionText)}",
  );

  output = output.replace(
    /\{finalMessage\}/g,
    "{__conclusionLocalizeDynamicText(finalMessage)}",
  );

  /*
   * Le nom est dynamique.
   * Exemple :
   * Merci, Martine
   * devient
   * Thank you, Martine
   */
  output = output.replace(
    "`Merci, ${firstName}`",
    "__conclusionThankYou(firstName)",
  );

  return output;
}

function injectConclusionHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __conclusionLocalizeDynamicText",
    )
  ) {
    return source;
  }

  const helper = `
/* =========================================================
   HOROSCOPE CONCLUSION — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __CONCLUSION_TRANSLATIONS:
  Record<string, string> =
  ${JSON.stringify(TRANSLATIONS[locale], null, 2)};

const __CONCLUSION_ZODIAC_LABELS:
  Record<string, string> =
  ${JSON.stringify(ZODIAC_LABELS[locale], null, 2)};

const __CONCLUSION_MONTHS =
  ${JSON.stringify(MONTHS[locale], null, 2)} as const;

const __CONCLUSION_FRENCH_MONTHS =
  ${JSON.stringify(FRENCH_MONTHS, null, 2)} as const;

const __CONCLUSION_THANK_YOU_PREFIX =
  ${JSON.stringify(THANK_YOU_PREFIX[locale])};

function __conclusionLocalizeZodiacSign(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  return (
    __CONCLUSION_ZODIAC_LABELS[value] ??
    value
  );
}

function __conclusionThankYou(
  firstName?: string | null,
): string {
  if (!firstName) {
    return "";
  }

  return (
    __CONCLUSION_THANK_YOU_PREFIX +
    ", " +
    firstName
  );
}

function __conclusionLocalizeDynamicText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  let output =
    __CONCLUSION_TRANSLATIONS[value] ??
    value;

  /*
   * On traduit les mois contenus dans un texte,
   * mais PAS les signes astrologiques.
   *
   * Ainsi, un mot comme "Balance" utilisé au sens
   * d'équilibre ne sera jamais transformé en Libra.
   */
  __CONCLUSION_FRENCH_MONTHS.forEach(
    (frenchMonth, index) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${frenchMonth}\\\\b\`,
          "gi",
        ),
        __CONCLUSION_MONTHS[index],
      );
    },
  );

  return output;
}

function __conclusionFormatIsoDate(
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
    return __conclusionLocalizeDynamicText(
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
      ? 'return `${__CONCLUSION_MONTHS[month - 1]} ${day}, ${year}`;'
      : locale === "de"
        ? 'return `${day}. ${__CONCLUSION_MONTHS[month - 1]} ${year}`;'
        : locale === "es"
          ? 'return `${day} de ${__CONCLUSION_MONTHS[month - 1]} de ${year}`;'
          : locale === "pt"
            ? 'return `${day} de ${__CONCLUSION_MONTHS[month - 1]} de ${year}`;'
            : 'return `${day} ${__CONCLUSION_MONTHS[month - 1]} ${year}`;'
  }
}

function __conclusionLocalizedPeriodLabel(
  period: HoroscopeSectionProps["period"],
): string {
  if (period.type === "day") {
    return __conclusionFormatIsoDate(
      period.startDate,
    );
  }

  const match =
    period.startDate?.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __conclusionLocalizeDynamicText(
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
    return \`\${__CONCLUSION_MONTHS[
      month - 1
    ]} \${year}\`;
  }

  return String(year);
}

/* =========================================================
   END HOROSCOPE CONCLUSION — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeConclusion";

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

export function localizeHoroscopeConclusion(
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
    replaceDynamicConclusionValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectConclusionHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
