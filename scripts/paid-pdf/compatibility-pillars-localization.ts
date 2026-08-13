import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type LocaleData = {
  text: Record<string, string>;
  planets: Record<string, string>;
  signs: Record<string, string>;
  elements: Record<string, string>;
  inWord: string;
};

const TRANSLATIONS: Record<
  NonFrenchLocale,
  LocaleData
> = {
  en: {
    text: {
      "Non précisé": "Not specified",
      "Soleil et Soleil": "Sun and Sun",
      "Identité et expression": "Identity and expression",
      "Le Soleil représente la personnalité consciente, la vitalité, les ambitions et la manière de rayonner.":
        "The Sun represents conscious personality, vitality, ambitions, and the way each person shines.",
      "Cette comparaison montre comment vos identités se reconnaissent, se soutiennent ou se stimulent.":
        "This comparison shows how your identities recognize, support, or stimulate one another.",
      "Lune et Lune": "Moon and Moon",
      "Émotions et intimité": "Emotions and intimacy",
      "La Lune décrit les besoins affectifs, les habitudes émotionnelles et la manière de rechercher la sécurité.":
        "The Moon describes emotional needs, emotional habits, and the way each person seeks security.",
      "Cette comparaison révèle la facilité avec laquelle vous comprenez et accueillez les émotions de l’autre.":
        "This comparison reveals how easily you understand and receive each other's emotions.",
      "Ascendant et Ascendant": "Ascendant and Ascendant",
      "Rencontre et quotidien": "Connection and daily life",
      "L’Ascendant représente la manière spontanée d’entrer en relation, de réagir et de se présenter au monde.":
        "The Ascendant represents the spontaneous way each person relates, reacts, and presents themselves to the world.",
      "Cette comparaison montre comment vos rythmes, vos attitudes et vos comportements naturels s’accordent.":
        "This comparison shows how your rhythms, attitudes, and natural behaviors align.",
      "Première personne": "First person",
      "Deuxième personne": "Second person",
      "Les données disponibles ne permettent pas encore de produire une comparaison entièrement personnalisée pour ce pilier.":
        "The available data does not yet allow a fully personalized comparison for this pillar.",
      "Votre dynamique": "Your dynamic",
      "Sur le plan personnel": "On a personal level",
      "Dans la relation": "In the relationship",
      "Fondations relationnelles": "Relationship foundations",
      "Les trois piliers de votre lien": "The three pillars of your connection",
      "Le Soleil, la Lune et l’Ascendant révèlent vos identités, vos besoins émotionnels et votre manière naturelle d’entrer en relation.":
        "The Sun, Moon, and Ascendant reveal your identities, emotional needs, and natural way of relating to one another.",
      "Votre fondation relationnelle": "Your relationship foundation",
      "Ces trois comparaisons offrent une première lecture de votre relation, mais elles ne suffisent pas à elles seules pour déterminer toute la compatibilité. Les interactions entre Mercure, Vénus, Mars, Saturne et les autres planètes préciseront ensuite la communication, l’attirance, la stabilité et les principaux défis de votre lien.":
        "These three comparisons offer an initial reading of your relationship, but they are not enough on their own to determine your overall compatibility. The interactions between Mercury, Venus, Mars, Saturn, and the other planets will further clarify communication, attraction, stability, and the main challenges of your connection.",
      "À retenir": "Key takeaway",
      "Une différence entre deux signes n’est pas nécessairement un obstacle. Elle peut devenir une véritable complémentarité lorsque chacun comprend et respecte la manière naturelle de fonctionner de l’autre.":
        "A difference between two signs is not necessarily an obstacle. It can become a genuine source of complementarity when each person understands and respects the other's natural way of functioning.",
      "Luna Astralis • Rapport de synastrie": "Luna Astralis • Synastry Report",
    },
    planets: {
      Sun: "Sun",
      Moon: "Moon",
      Ascendant: "Ascendant",
    },
    signs: {
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
    elements: {
      Feu: "Fire",
      Terre: "Earth",
      Air: "Air",
      Eau: "Water",
    },
    inWord: "in",
  },

  es: {
    text: {
      "Non précisé": "No especificado",
      "Soleil et Soleil": "Sol y Sol",
      "Identité et expression": "Identidad y expresión",
      "Le Soleil représente la personnalité consciente, la vitalité, les ambitions et la manière de rayonner.":
        "El Sol representa la personalidad consciente, la vitalidad, las ambiciones y la manera de irradiar la propia energía.",
      "Cette comparaison montre comment vos identités se reconnaissent, se soutiennent ou se stimulent.":
        "Esta comparación muestra cómo sus identidades se reconocen, se apoyan o se estimulan.",
      "Lune et Lune": "Luna y Luna",
      "Émotions et intimité": "Emociones e intimidad",
      "La Lune décrit les besoins affectifs, les habitudes émotionnelles et la manière de rechercher la sécurité.":
        "La Luna describe las necesidades afectivas, los hábitos emocionales y la manera de buscar seguridad.",
      "Cette comparaison révèle la facilité avec laquelle vous comprenez et accueillez les émotions de l’autre.":
        "Esta comparación revela la facilidad con la que comprenden y acogen las emociones del otro.",
      "Ascendant et Ascendant": "Ascendente y Ascendente",
      "Rencontre et quotidien": "Encuentro y vida cotidiana",
      "L’Ascendant représente la manière spontanée d’entrer en relation, de réagir et de se présenter au monde.":
        "El Ascendente representa la manera espontánea de relacionarse, reaccionar y presentarse ante el mundo.",
      "Cette comparaison montre comment vos rythmes, vos attitudes et vos comportements naturels s’accordent.":
        "Esta comparación muestra cómo armonizan sus ritmos, actitudes y comportamientos naturales.",
      "Première personne": "Primera persona",
      "Deuxième personne": "Segunda persona",
      "Les données disponibles ne permettent pas encore de produire une comparaison entièrement personnalisée pour ce pilier.":
        "Los datos disponibles todavía no permiten producir una comparación completamente personalizada para este pilar.",
      "Votre dynamique": "Su dinámica",
      "Sur le plan personnel": "En el plano personal",
      "Dans la relation": "En la relación",
      "Fondations relationnelles": "Fundamentos de la relación",
      "Les trois piliers de votre lien": "Los tres pilares de su vínculo",
      "Le Soleil, la Lune et l’Ascendant révèlent vos identités, vos besoins émotionnels et votre manière naturelle d’entrer en relation.":
        "El Sol, la Luna y el Ascendente revelan sus identidades, sus necesidades emocionales y su manera natural de relacionarse.",
      "Votre fondation relationnelle": "La base de su relación",
      "Ces trois comparaisons offrent une première lecture de votre relation, mais elles ne suffisent pas à elles seules pour déterminer toute la compatibilité. Les interactions entre Mercure, Vénus, Mars, Saturne et les autres planètes préciseront ensuite la communication, l’attirance, la stabilité et les principaux défis de votre lien.":
        "Estas tres comparaciones ofrecen una primera lectura de su relación, pero no bastan por sí solas para determinar toda la compatibilidad. Las interacciones entre Mercurio, Venus, Marte, Saturno y los demás planetas precisarán después la comunicación, la atracción, la estabilidad y los principales desafíos de su vínculo.",
      "À retenir": "Para recordar",
      "Une différence entre deux signes n’est pas nécessairement un obstacle. Elle peut devenir une véritable complémentarité lorsque chacun comprend et respecte la manière naturelle de fonctionner de l’autre.":
        "Una diferencia entre dos signos no es necesariamente un obstáculo. Puede convertirse en una verdadera complementariedad cuando cada persona comprende y respeta la manera natural de funcionar de la otra.",
      "Luna Astralis • Rapport de synastrie": "Luna Astralis • Informe de sinastría",
    },
    planets: {
      Sun: "Sol",
      Moon: "Luna",
      Ascendant: "Ascendente",
    },
    signs: {
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
    elements: {
      Feu: "Fuego",
      Terre: "Tierra",
      Air: "Aire",
      Eau: "Agua",
    },
    inWord: "en",
  },

  de: {
    text: {
      "Non précisé": "Nicht angegeben",
      "Soleil et Soleil": "Sonne und Sonne",
      "Identité et expression": "Identität und Ausdruck",
      "Le Soleil représente la personnalité consciente, la vitalité, les ambitions et la manière de rayonner.":
        "Die Sonne steht für die bewusste Persönlichkeit, Vitalität, Ambitionen und die Art, wie ein Mensch seine Ausstrahlung entfaltet.",
      "Cette comparaison montre comment vos identités se reconnaissent, se soutiennent ou se stimulent.":
        "Dieser Vergleich zeigt, wie Ihre Identitäten einander erkennen, unterstützen oder anregen.",
      "Lune et Lune": "Mond und Mond",
      "Émotions et intimité": "Emotionen und Intimität",
      "La Lune décrit les besoins affectifs, les habitudes émotionnelles et la manière de rechercher la sécurité.":
        "Der Mond beschreibt emotionale Bedürfnisse, Gefühlsgewohnheiten und die Art, Sicherheit zu suchen.",
      "Cette comparaison révèle la facilité avec laquelle vous comprenez et accueillez les émotions de l’autre.":
        "Dieser Vergleich zeigt, wie leicht Sie die Gefühle des anderen verstehen und annehmen.",
      "Ascendant et Ascendant": "Aszendent und Aszendent",
      "Rencontre et quotidien": "Begegnung und Alltag",
      "L’Ascendant représente la manière spontanée d’entrer en relation, de réagir et de se présenter au monde.":
        "Der Aszendent steht für die spontane Art, Beziehungen einzugehen, zu reagieren und sich der Welt zu zeigen.",
      "Cette comparaison montre comment vos rythmes, vos attitudes et vos comportements naturels s’accordent.":
        "Dieser Vergleich zeigt, wie Ihre Rhythmen, Haltungen und natürlichen Verhaltensweisen miteinander harmonieren.",
      "Première personne": "Erste Person",
      "Deuxième personne": "Zweite Person",
      "Les données disponibles ne permettent pas encore de produire une comparaison entièrement personnalisée pour ce pilier.":
        "Die verfügbaren Daten reichen noch nicht aus, um für diese Säule einen vollständig personalisierten Vergleich zu erstellen.",
      "Votre dynamique": "Ihre Dynamik",
      "Sur le plan personnel": "Auf persönlicher Ebene",
      "Dans la relation": "In der Beziehung",
      "Fondations relationnelles": "Beziehungsgrundlagen",
      "Les trois piliers de votre lien": "Die drei Säulen Ihrer Verbindung",
      "Le Soleil, la Lune et l’Ascendant révèlent vos identités, vos besoins émotionnels et votre manière naturelle d’entrer en relation.":
        "Sonne, Mond und Aszendent zeigen Ihre Identitäten, emotionalen Bedürfnisse und Ihre natürliche Art, miteinander in Beziehung zu treten.",
      "Votre fondation relationnelle": "Das Fundament Ihrer Beziehung",
      "Ces trois comparaisons offrent une première lecture de votre relation, mais elles ne suffisent pas à elles seules pour déterminer toute la compatibilité. Les interactions entre Mercure, Vénus, Mars, Saturne et les autres planètes préciseront ensuite la communication, l’attirance, la stabilité et les principaux défis de votre lien.":
        "Diese drei Vergleiche bieten eine erste Einschätzung Ihrer Beziehung, reichen allein jedoch nicht aus, um die gesamte Kompatibilität zu bestimmen. Die Wechselwirkungen zwischen Merkur, Venus, Mars, Saturn und den anderen Planeten werden anschließend Kommunikation, Anziehung, Stabilität und die wichtigsten Herausforderungen Ihrer Verbindung genauer beleuchten.",
      "À retenir": "Wichtig",
      "Une différence entre deux signes n’est pas nécessairement un obstacle. Elle peut devenir une véritable complémentarité lorsque chacun comprend et respecte la manière naturelle de fonctionner de l’autre.":
        "Ein Unterschied zwischen zwei Zeichen ist nicht zwangsläufig ein Hindernis. Er kann zu einer echten Ergänzung werden, wenn beide die natürliche Art des anderen verstehen und respektieren.",
      "Luna Astralis • Rapport de synastrie": "Luna Astralis • Synastrie-Bericht",
    },
    planets: {
      Sun: "Sonne",
      Moon: "Mond",
      Ascendant: "Aszendent",
    },
    signs: {
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
    elements: {
      Feu: "Feuer",
      Terre: "Erde",
      Air: "Luft",
      Eau: "Wasser",
    },
    inWord: "in",
  },

  it: {
    text: {
      "Non précisé": "Non specificato",
      "Soleil et Soleil": "Sole e Sole",
      "Identité et expression": "Identità ed espressione",
      "Le Soleil représente la personnalité consciente, la vitalité, les ambitions et la manière de rayonner.":
        "Il Sole rappresenta la personalità consapevole, la vitalità, le ambizioni e il modo di esprimere la propria energia.",
      "Cette comparaison montre comment vos identités se reconnaissent, se soutiennent ou se stimulent.":
        "Questo confronto mostra come le vostre identità si riconoscono, si sostengono o si stimolano.",
      "Lune et Lune": "Luna e Luna",
      "Émotions et intimité": "Emozioni e intimità",
      "La Lune décrit les besoins affectifs, les habitudes émotionnelles et la manière de rechercher la sécurité.":
        "La Luna descrive i bisogni affettivi, le abitudini emotive e il modo di cercare sicurezza.",
      "Cette comparaison révèle la facilité avec laquelle vous comprenez et accueillez les émotions de l’autre.":
        "Questo confronto rivela quanto facilmente comprendete e accogliete le emozioni dell'altro.",
      "Ascendant et Ascendant": "Ascendente e Ascendente",
      "Rencontre et quotidien": "Incontro e quotidianità",
      "L’Ascendant représente la manière spontanée d’entrer en relation, de réagir et de se présenter au monde.":
        "L'Ascendente rappresenta il modo spontaneo di entrare in relazione, reagire e presentarsi al mondo.",
      "Cette comparaison montre comment vos rythmes, vos attitudes et vos comportements naturels s’accordent.":
        "Questo confronto mostra come i vostri ritmi, atteggiamenti e comportamenti naturali si armonizzano.",
      "Première personne": "Prima persona",
      "Deuxième personne": "Seconda persona",
      "Les données disponibles ne permettent pas encore de produire une comparaison entièrement personnalisée pour ce pilier.":
        "I dati disponibili non consentono ancora di produrre un confronto completamente personalizzato per questo pilastro.",
      "Votre dynamique": "La vostra dinamica",
      "Sur le plan personnel": "Sul piano personale",
      "Dans la relation": "Nella relazione",
      "Fondations relationnelles": "Fondamenti della relazione",
      "Les trois piliers de votre lien": "I tre pilastri del vostro legame",
      "Le Soleil, la Lune et l’Ascendant révèlent vos identités, vos besoins émotionnels et votre manière naturelle d’entrer en relation.":
        "Il Sole, la Luna e l'Ascendente rivelano le vostre identità, i bisogni emotivi e il vostro modo naturale di entrare in relazione.",
      "Votre fondation relationnelle": "Le fondamenta della vostra relazione",
      "Ces trois comparaisons offrent une première lecture de votre relation, mais elles ne suffisent pas à elles seules pour déterminer toute la compatibilité. Les interactions entre Mercure, Vénus, Mars, Saturne et les autres planètes préciseront ensuite la communication, l’attirance, la stabilité et les principaux défis de votre lien.":
        "Questi tre confronti offrono una prima lettura della vostra relazione, ma da soli non bastano a determinare l'intera compatibilità. Le interazioni tra Mercurio, Venere, Marte, Saturno e gli altri pianeti chiariranno poi la comunicazione, l'attrazione, la stabilità e le principali sfide del vostro legame.",
      "À retenir": "Da ricordare",
      "Une différence entre deux signes n’est pas nécessairement un obstacle. Elle peut devenir une véritable complémentarité lorsque chacun comprend et respecte la manière naturelle de fonctionner de l’autre.":
        "Una differenza tra due segni non è necessariamente un ostacolo. Può diventare una vera complementarità quando ciascuno comprende e rispetta il modo naturale di funzionare dell'altro.",
      "Luna Astralis • Rapport de synastrie": "Luna Astralis • Rapporto di sinastria",
    },
    planets: {
      Sun: "Sole",
      Moon: "Luna",
      Ascendant: "Ascendente",
    },
    signs: {
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
    elements: {
      Feu: "Fuoco",
      Terre: "Terra",
      Air: "Aria",
      Eau: "Acqua",
    },
    inWord: "in",
  },

  pt: {
    text: {
      "Non précisé": "Não especificado",
      "Soleil et Soleil": "Sol e Sol",
      "Identité et expression": "Identidade e expressão",
      "Le Soleil représente la personnalité consciente, la vitalité, les ambitions et la manière de rayonner.":
        "O Sol representa a personalidade consciente, a vitalidade, as ambições e a forma de expressar a própria energia.",
      "Cette comparaison montre comment vos identités se reconnaissent, se soutiennent ou se stimulent.":
        "Esta comparação mostra como as suas identidades se reconhecem, se apoiam ou se estimulam.",
      "Lune et Lune": "Lua e Lua",
      "Émotions et intimité": "Emoções e intimidade",
      "La Lune décrit les besoins affectifs, les habitudes émotionnelles et la manière de rechercher la sécurité.":
        "A Lua descreve as necessidades afetivas, os hábitos emocionais e a forma de procurar segurança.",
      "Cette comparaison révèle la facilité avec laquelle vous comprenez et accueillez les émotions de l’autre.":
        "Esta comparação revela a facilidade com que compreendem e acolhem as emoções um do outro.",
      "Ascendant et Ascendant": "Ascendente e Ascendente",
      "Rencontre et quotidien": "Encontro e quotidiano",
      "L’Ascendant représente la manière spontanée d’entrer en relation, de réagir et de se présenter au monde.":
        "O Ascendente representa a forma espontânea de entrar em relação, reagir e apresentar-se ao mundo.",
      "Cette comparaison montre comment vos rythmes, vos attitudes et vos comportements naturels s’accordent.":
        "Esta comparação mostra como os seus ritmos, atitudes e comportamentos naturais se harmonizam.",
      "Première personne": "Primeira pessoa",
      "Deuxième personne": "Segunda pessoa",
      "Les données disponibles ne permettent pas encore de produire une comparaison entièrement personnalisée pour ce pilier.":
        "Os dados disponíveis ainda não permitem produzir uma comparação totalmente personalizada para este pilar.",
      "Votre dynamique": "A sua dinâmica",
      "Sur le plan personnel": "No plano pessoal",
      "Dans la relation": "Na relação",
      "Fondations relationnelles": "Fundamentos da relação",
      "Les trois piliers de votre lien": "Os três pilares da sua ligação",
      "Le Soleil, la Lune et l’Ascendant révèlent vos identités, vos besoins émotionnels et votre manière naturelle d’entrer en relation.":
        "O Sol, a Lua e o Ascendente revelam as suas identidades, necessidades emocionais e a sua forma natural de entrar em relação.",
      "Votre fondation relationnelle": "A base da sua relação",
      "Ces trois comparaisons offrent une première lecture de votre relation, mais elles ne suffisent pas à elles seules pour déterminer toute la compatibilité. Les interactions entre Mercure, Vénus, Mars, Saturne et les autres planètes préciseront ensuite la communication, l’attirance, la stabilité et les principaux défis de votre lien.":
        "Estas três comparações oferecem uma primeira leitura da sua relação, mas não são suficientes, por si só, para determinar toda a compatibilidade. As interações entre Mercúrio, Vênus, Marte, Saturno e os outros planetas irão depois esclarecer a comunicação, a atração, a estabilidade e os principais desafios da sua ligação.",
      "À retenir": "A reter",
      "Une différence entre deux signes n’est pas nécessairement un obstacle. Elle peut devenir une véritable complémentarité lorsque chacun comprend et respecte la manière naturelle de fonctionner de l’autre.":
        "Uma diferença entre dois signos não é necessariamente um obstáculo. Pode tornar-se uma verdadeira complementaridade quando cada pessoa compreende e respeita a forma natural de funcionar da outra.",
      "Luna Astralis • Rapport de synastrie": "Luna Astralis • Relatório de sinastria",
    },
    planets: {
      Sun: "Sol",
      Moon: "Lua",
      Ascendant: "Ascendente",
    },
    signs: {
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
    elements: {
      Feu: "Fogo",
      Terre: "Terra",
      Air: "Ar",
      Eau: "Água",
    },
    inWord: "em",
  },
};

type Replacement = {
  start: number;
  end: number;
  value: string;
};

function normalizeVisibleText(
  value: string,
): string {
  return value
    .replace(/\s+/g, " ")
    .trim();
}

function applyReplacements(
  source: string,
  replacements: Replacement[],
): string {
  const sorted =
    [...replacements].sort(
      (a, b) => b.start - a.start,
    );

  let output = source;

  for (const replacement of sorted) {
    output =
      output.slice(0, replacement.start) +
      replacement.value +
      output.slice(replacement.end);
  }

  return output;
}

function localizeCompleteLiterals(
  source: string,
  translations: Record<string, string>,
): string {
  const sourceFile =
    ts.createSourceFile(
      "CompatibilityPillars.tsx",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );

  const replacements:
    Replacement[] = [];

  const visit = (
    node: ts.Node,
  ): void => {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(node)
    ) {
      const exact = node.text;
      const normalized =
        normalizeVisibleText(exact);

      const translated =
        translations[exact] ??
        translations[normalized];

      if (
        typeof translated === "string" &&
        translated !== exact
      ) {
        replacements.push({
          start: node.getStart(sourceFile),
          end: node.getEnd(),
          value: JSON.stringify(translated),
        });
      }
    }

    if (ts.isJsxText(node)) {
      const original =
        normalizeVisibleText(
          node.getText(sourceFile),
        );

      const translated =
        translations[original];

      if (
        typeof translated === "string" &&
        translated !== original
      ) {
        replacements.push({
          start: node.getStart(sourceFile),
          end: node.getEnd(),
          value: `{${JSON.stringify(
            translated,
          )}}`,
        });
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);

  return applyReplacements(
    source,
    replacements,
  );
}

function buildHelpers(
  data: LocaleData,
): string {
  return `
const __PILLARS_PLANETS = ${JSON.stringify(data.planets, null, 2)} as Record<string, string>;
const __PILLARS_SIGNS = ${JSON.stringify(data.signs, null, 2)} as Record<string, string>;
const __PILLARS_ELEMENTS = ${JSON.stringify(data.elements, null, 2)} as Record<string, string>;
const __PILLARS_IN_WORD = ${JSON.stringify(data.inWord)};

function localizePillarPlanet(
  planet: string,
): string {
  return __PILLARS_PLANETS[planet] ?? planet;
}

function localizePillarSign(
  sign: string,
): string {
  const safeSign =
    typeof sign === "string"
      ? sign.trim()
      : "";

  return __PILLARS_SIGNS[safeSign] ?? safeSign;
}

function localizePillarElement(
  element: string,
): string {
  return __PILLARS_ELEMENTS[element] ?? element;
}

function getLocalizedPlacementLabel(
  pillar: PillarName,
  sign: string,
): string {
  const localizedSign =
    localizePillarSign(sign);

  if (pillar === "Ascendant") {
    return \`\${localizePillarPlanet("Ascendant")} \${localizedSign}\`;
  }

  return \`\${localizePillarPlanet(pillar)} \${__PILLARS_IN_WORD} \${localizedSign}\`;
}
`;
}

function injectHelpers(
  source: string,
  data: LocaleData,
): string {
  const marker =
    "function getPlacementLabel(";

  if (!source.includes(marker)) {
    return source;
  }

  return source.replace(
    marker,
    `${buildHelpers(data)}\n${marker}`,
  );
}

function replaceTargetedCode(
  source: string,
): string {
  let localized = source;

  /*
   * On conserve les signes français pour les calculs
   * d'éléments et pour CompatibilityPlanetTextSelector.
   * Seul l'affichage du placement est localisé.
   */
  localized =
    localized.replace(
      /\{getPlacementLabel\(pillar\.key,\s*sign1\)\}/g,
      "{getLocalizedPlacementLabel(pillar.key, sign1)}",
    );

  localized =
    localized.replace(
      /\{getPlacementLabel\(pillar\.key,\s*sign2\)\}/g,
      "{getLocalizedPlacementLabel(pillar.key, sign2)}",
    );

  return localized;
}

export function localizeCompatibilityPillars(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const data =
    TRANSLATIONS[
      locale as NonFrenchLocale
    ];

  if (!data) {
    return source;
  }

  let localized =
    localizeCompleteLiterals(
      source,
      data.text,
    );

  localized =
    injectHelpers(
      localized,
      data,
    );

  localized =
    replaceTargetedCode(
      localized,
    );

  return localized;
}
