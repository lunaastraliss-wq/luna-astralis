import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type TranslationMap =
  Record<string, string>;

/*
|--------------------------------------------------------------------------
| MONTHLY MANTRA TEXTS — DYNAMIC CONTENT
|--------------------------------------------------------------------------
|
| Ce localizer s'applique à createMonthlyMantraTexts.ts.
| Il complète month-horoscope-mantra-localization.ts,
| qui continue de gérer l'interface visuelle de la page.
|
| Langues :
| fr / en / es / de / it / pt
|
*/

/*
|--------------------------------------------------------------------------
| SCORPION — textes actuellement observés dans le PDF
|--------------------------------------------------------------------------
|
| Ces traductions couvrent les valeurs dynamiques qui restaient en français
| sur la page 26 du PDF de contrôle.
|
*/

const TRANSLATIONS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Transformer une peur en compréhension plus profonde. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation et observez les moments où il devient nécessaire de ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités. Votre progression se consolidera grâce à une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir.":
      "Transform a fear into deeper understanding. This intention does not ask you to change everything immediately, but to make a more conscious choice in your daily life. Draw on your depth, your clarity, and your exceptional capacity for transformation, and notice the moments when it becomes necessary not to let fear, distrust, or the need for control close off possibilities. Your progress will become stronger through a truth you fully accept, an emotion you welcome, and an action that restores your power.",

    "Je mérite une confiance qui se construit dans la vérité.":
      "I deserve trust that is built on truth.",
  },

  es: {
    "Transformer une peur en compréhension plus profonde. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation et observez les moments où il devient nécessaire de ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités. Votre progression se consolidera grâce à une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir.":
      "Transforme un miedo en una comprensión más profunda. Esta intención no le pide que lo cambie todo de inmediato, sino que tome una decisión más consciente en su vida cotidiana. Apóyese en su profundidad, su lucidez y su excepcional capacidad de transformación, y observe los momentos en que sea necesario no permitir que el miedo, la desconfianza o la necesidad de control cierren las posibilidades. Su progreso se consolidará gracias a una verdad asumida, una emoción acogida y una acción que le devuelva su poder.",

    "Je mérite une confiance qui se construit dans la vérité.":
      "Merezco una confianza que se construye sobre la verdad.",
  },

  de: {
    "Transformer une peur en compréhension plus profonde. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation et observez les moments où il devient nécessaire de ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités. Votre progression se consolidera grâce à une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir.":
      "Verwandeln Sie eine Angst in ein tieferes Verständnis. Diese Intention verlangt nicht, dass Sie sofort alles verändern, sondern dass Sie in Ihrem Alltag eine bewusstere Entscheidung treffen. Stützen Sie sich auf Ihre Tiefe, Ihre Klarheit und Ihre außergewöhnliche Fähigkeit zur Transformation und achten Sie auf die Momente, in denen es wichtig wird, Angst, Misstrauen oder das Bedürfnis nach Kontrolle nicht die Möglichkeiten verschließen zu lassen. Ihr Fortschritt wird sich durch eine angenommene Wahrheit, ein willkommen geheißenes Gefühl und eine Handlung festigen, die Ihnen Ihre Kraft zurückgibt.",

    "Je mérite une confiance qui se construit dans la vérité.":
      "Ich verdiene Vertrauen, das auf Wahrheit aufgebaut ist.",
  },

  it: {
    "Transformer une peur en compréhension plus profonde. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation et observez les moments où il devient nécessaire de ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités. Votre progression se consolidera grâce à une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir.":
      "Trasforma una paura in una comprensione più profonda. Questa intenzione non ti chiede di cambiare tutto immediatamente, ma di compiere una scelta più consapevole nella vita quotidiana. Fai affidamento sulla tua profondità, sulla tua lucidità e sulla tua eccezionale capacità di trasformazione e osserva i momenti in cui diventa necessario non lasciare che la paura, la diffidenza o il bisogno di controllo chiudano le possibilità. Il tuo progresso si consoliderà grazie a una verità accolta, un'emozione accettata e un'azione che ti restituisce il tuo potere.",

    "Je mérite une confiance qui se construit dans la vérité.":
      "Merito una fiducia che si costruisce sulla verità.",
  },

  pt: {
    "Transformer une peur en compréhension plus profonde. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation et observez les moments où il devient nécessaire de ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités. Votre progression se consolidera grâce à une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir.":
      "Transforme um medo em uma compreensão mais profunda. Esta intenção não pede que você transforme tudo imediatamente, mas que faça uma escolha mais consciente no seu dia a dia. Apoie-se na sua profundidade, na sua lucidez e na sua capacidade excepcional de transformação e observe os momentos em que se torna necessário não deixar que o medo, a desconfiança ou a necessidade de controle fechem as possibilidades. Seu progresso se fortalecerá por meio de uma verdade assumida, de uma emoção acolhida e de uma ação que devolve seu poder.",

    "Je mérite une confiance qui se construit dans la vérité.":
      "Eu mereço uma confiança construída sobre a verdade.",
  },
};

/*
|--------------------------------------------------------------------------
| AST SAFE REPLACEMENT
|--------------------------------------------------------------------------
*/

function localizeStringLiterals(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "createMonthlyMantraTexts.ts",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS,
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
            node.getStart(
              sourceFile,
            ),
          end:
            node.getEnd(),
          value:
            JSON.stringify(
              translated,
            ),
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

/*
|--------------------------------------------------------------------------
| MAIN LOCALIZER
|--------------------------------------------------------------------------
*/

export function localizeMonthlyMantraTexts(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  if (
    !source.includes(
      "createMonthlyMantraTexts",
    )
  ) {
    return source;
  }

  const translations =
    TRANSLATIONS[
      locale as NonFrenchLocale
    ];

  if (!translations) {
    return source;
  }

  return localizeStringLiterals(
    source,
    translations,
  );
}
