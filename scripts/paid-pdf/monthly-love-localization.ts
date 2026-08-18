import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type TranslationMap =
  Record<string, string>;

/* =========================================================
   TITRES DU BUILDER
========================================================= */

const LOVE_TITLES: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Un mois pour écouter votre cœur":
      "A month to listen to your heart",
    "Vos émotions prennent une nouvelle direction":
      "Your emotions are taking a new direction",
    "Une période de rapprochement et de vérité":
      "A period of closeness and truth",
    "Votre vie affective cherche son équilibre":
      "Your emotional life is seeking balance",
    "Un nouveau souffle dans votre vie sentimentale":
      "A fresh start in your love life",
    "Le cœur vous invite à plus d’authenticité":
      "Your heart invites you to greater authenticity",
    "Une période riche en prises de conscience":
      "A period rich in realizations",
    "Vos sentiments deviennent plus clairs":
      "Your feelings are becoming clearer",
  },

  es: {
    "Un mois pour écouter votre cœur":
      "Un mes para escuchar su corazón",
    "Vos émotions prennent une nouvelle direction":
      "Sus emociones toman una nueva dirección",
    "Une période de rapprochement et de vérité":
      "Un período de acercamiento y verdad",
    "Votre vie affective cherche son équilibre":
      "Su vida afectiva busca equilibrio",
    "Un nouveau souffle dans votre vie sentimentale":
      "Un nuevo impulso en su vida sentimental",
    "Le cœur vous invite à plus d’authenticité":
      "Su corazón le invita a una mayor autenticidad",
    "Une période riche en prises de conscience":
      "Un período rico en tomas de conciencia",
    "Vos sentiments deviennent plus clairs":
      "Sus sentimientos se vuelven más claros",
  },

  de: {
    "Un mois pour écouter votre cœur":
      "Ein Monat, um auf Ihr Herz zu hören",
    "Vos émotions prennent une nouvelle direction":
      "Ihre Gefühle nehmen eine neue Richtung",
    "Une période de rapprochement et de vérité":
      "Eine Zeit der Annäherung und Wahrheit",
    "Votre vie affective cherche son équilibre":
      "Ihr Gefühlsleben sucht nach Balance",
    "Un nouveau souffle dans votre vie sentimentale":
      "Neuer Schwung in Ihrem Liebesleben",
    "Le cœur vous invite à plus d’authenticité":
      "Ihr Herz lädt Sie zu mehr Authentizität ein",
    "Une période riche en prises de conscience":
      "Eine Zeit voller Erkenntnisse",
    "Vos sentiments deviennent plus clairs":
      "Ihre Gefühle werden klarer",
  },

  it: {
    "Un mois pour écouter votre cœur":
      "Un mese per ascoltare il tuo cuore",
    "Vos émotions prennent une nouvelle direction":
      "Le tue emozioni prendono una nuova direzione",
    "Une période de rapprochement et de vérité":
      "Un periodo di avvicinamento e verità",
    "Votre vie affective cherche son équilibre":
      "La tua vita affettiva cerca equilibrio",
    "Un nouveau souffle dans votre vie sentimentale":
      "Una nuova energia nella tua vita sentimentale",
    "Le cœur vous invite à plus d’authenticité":
      "Il cuore ti invita a una maggiore autenticità",
    "Une période riche en prises de conscience":
      "Un periodo ricco di consapevolezze",
    "Vos sentiments deviennent plus clairs":
      "I tuoi sentimenti diventano più chiari",
  },

  pt: {
    "Un mois pour écouter votre cœur":
      "Um mês para ouvir o seu coração",
    "Vos émotions prennent une nouvelle direction":
      "Suas emoções tomam uma nova direção",
    "Une période de rapprochement et de vérité":
      "Um período de aproximação e verdade",
    "Votre vie affective cherche son équilibre":
      "Sua vida afetiva busca equilíbrio",
    "Un nouveau souffle dans votre vie sentimentale":
      "Um novo impulso em sua vida amorosa",
    "Le cœur vous invite à plus d’authenticité":
      "Seu coração convida você a mais autenticidade",
    "Une période riche en prises de conscience":
      "Um período rico em tomadas de consciência",
    "Vos sentiments deviennent plus clairs":
      "Seus sentimentos ficam mais claros",
  },
};

/* =========================================================
   BANQUE DE TEXTES
========================================================= */

const LOVE_TEXTS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Votre vie sentimentale entre dans une période de clarification. Les prochaines semaines vous aideront à mieux comprendre ce que vous attendez réellement d’une relation.":
      "Your love life is entering a period of clarification. The coming weeks will help you better understand what you truly expect from a relationship.",

    "Le climat affectif du mois vous invite à accorder davantage d’attention à vos besoins profonds. Certaines émotions pourraient devenir plus faciles à comprendre.":
      "The emotional climate of the month invites you to pay more attention to your deeper needs. Some emotions may become easier to understand.",

    "Ce mois met en lumière votre manière d’aimer, de vous attacher et de créer de la proximité. Une évolution subtile pourrait transformer votre vision d’une relation.":
      "This month highlights the way you love, form attachments, and create closeness. A subtle evolution could transform your view of a relationship.",

    "Votre cœur recherche davantage de sincérité et de stabilité. Les liens authentiques auront tendance à se renforcer naturellement au fil des semaines.":
      "Your heart is seeking greater sincerity and stability. Authentic bonds may naturally strengthen over the weeks.",

    "Une énergie de renouveau traverse votre vie sentimentale. Elle pourrait vous aider à vous libérer d’une attente, d’un doute ou d’une ancienne façon de fonctionner.":
      "A renewing energy is moving through your love life. It may help you free yourself from an expectation, a doubt, or an old pattern.",

    "Les relations prennent une place particulière ce mois-ci. Vous pourriez ressentir le besoin de savoir plus clairement où vous allez et avec qui.":
      "Relationships take on particular importance this month. You may feel a stronger need to know where you are going and with whom.",

    "Votre sensibilité affective sera plus présente. Ce mois peut vous aider à distinguer les liens qui vous nourrissent de ceux qui vous épuisent.":
      "Your emotional sensitivity will be more present. This month may help you distinguish the relationships that nourish you from those that drain you.",

    "Une période d’introspection sentimentale commence. Elle ne vous éloigne pas nécessairement de l’amour, mais vous pousse à rechercher davantage de vérité.":
      "A period of emotional introspection begins. It does not necessarily distance you from love, but encourages you to seek greater truth.",

    "Le mois favorise une compréhension plus fine de vos émotions. Vous pourriez mettre des mots sur quelque chose que vous ressentiez depuis longtemps.":
      "The month favors a deeper understanding of your emotions. You may finally put words to something you have felt for a long time.",

    "Votre vie affective évolue vers davantage de maturité. Les gestes constants compteront plus que les promesses impressionnantes.":
      "Your emotional life is moving toward greater maturity. Consistent actions will matter more than impressive promises.",

    "Les échanges sincères seront essentiels. Une conversation posée pourrait permettre de rapprocher les points de vue ou de résoudre une tension persistante.":
      "Sincere communication will be essential. A calm conversation may help bring viewpoints closer together or resolve a lingering tension.",

    "Vous pourriez ressentir un besoin plus fort de sécurité émotionnelle. Évitez toutefois de demander aux autres de deviner ce que vous n’exprimez pas clairement.":
      "You may feel a stronger need for emotional security. Avoid expecting others to guess what you do not express clearly.",

    "Le mois vous invite à observer la réciprocité dans vos relations. Les efforts, l’attention et la présence doivent pouvoir circuler dans les deux sens.":
      "The month invites you to observe reciprocity in your relationships. Effort, attention, and presence should be able to flow both ways.",

    "Une situation affective pourrait évoluer progressivement. Ne cherchez pas nécessairement une réponse immédiate : certains liens ont besoin de temps pour révéler leur véritable direction.":
      "An emotional situation may evolve gradually. Do not necessarily seek an immediate answer: some relationships need time to reveal their true direction.",

    "Votre intuition relationnelle sera particulièrement vive. Elle vous aidera à sentir les changements d’ambiance, mais elle devra être accompagnée de faits concrets.":
      "Your relational intuition will be particularly strong. It will help you sense changes in atmosphere, but it should be supported by concrete facts.",

    "Les prochaines semaines favorisent les rapprochements basés sur la confiance. Une relation sincère pourrait gagner en profondeur grâce à une plus grande vulnérabilité.":
      "The coming weeks favor connections based on trust. A sincere relationship may deepen through greater vulnerability.",

    "Votre façon de communiquer vos attentes jouera un rôle important. Une demande simple et précise sera mieux reçue qu’un silence rempli de frustration.":
      "The way you communicate your expectations will play an important role. A simple and precise request will be better received than silence filled with frustration.",

    "Le passé pourrait momentanément influencer votre manière d’interpréter une relation actuelle. Prenez soin de ne pas attribuer à une nouvelle personne les erreurs d’une ancienne histoire.":
      "The past may temporarily influence how you interpret a current relationship. Be careful not to attribute the mistakes of an old story to a new person.",

    "Une relation pourrait vous demander davantage de patience. Cela ne signifie pas que vous devez tout accepter, mais que certaines réponses apparaîtront progressivement.":
      "A relationship may require more patience from you. This does not mean you must accept everything, but that some answers will appear gradually.",

    "Ce mois vous rappelle que l’amour ne doit pas constamment être compliqué pour être profond. La simplicité peut aussi être un signe de solidité.":
      "This month reminds you that love does not need to be constantly complicated to be deep. Simplicity can also be a sign of strength.",

    "En couple, une conversation importante pourrait vous aider à mieux comprendre les attentes de votre partenaire. L’écoute aura autant de valeur que les mots.":
      "As a couple, an important conversation may help you better understand your partner's expectations. Listening will be just as valuable as words.",

    "Votre relation pourrait gagner en profondeur si chacun accepte de parler honnêtement de ses besoins. Évitez de laisser les suppositions remplacer le dialogue.":
      "Your relationship may deepen if both of you are willing to speak honestly about your needs. Avoid letting assumptions replace dialogue.",

    "Un projet partagé pourrait renforcer votre complicité. Même une décision simple concernant le quotidien peut vous donner l’impression d’avancer dans la même direction.":
      "A shared project may strengthen your connection. Even a simple everyday decision can make you feel that you are moving in the same direction.",

    "Une ancienne tension peut commencer à s’apaiser. Pour y parvenir, il faudra toutefois éviter de vouloir déterminer qui avait raison ou tort.":
      "An old tension may begin to ease. To achieve this, avoid trying to determine who was right or wrong.",

    "Votre partenaire pourrait avoir besoin de davantage de présence. Un geste attentif ou un moment réellement disponible aura plus d’effet qu’une grande promesse.":
      "Your partner may need more presence. A thoughtful gesture or a truly available moment will have more impact than a grand promise.",

    "Le mois favorise un rapprochement émotionnel. Vous pourriez redécouvrir une facette de votre relation que la routine avait progressivement mise de côté.":
      "The month favors emotional closeness. You may rediscover an aspect of your relationship that routine had gradually pushed aside.",

    "Une différence de rythme pourrait créer quelques incompréhensions. Respectez les besoins de chacun sans interpréter automatiquement la distance comme un manque d’amour.":
      "A difference in pace may create some misunderstandings. Respect each person's needs without automatically interpreting distance as a lack of love.",

    "Votre couple pourrait être amené à prendre une décision concrète. Accordez-vous le temps de vérifier que cette décision respecte les priorités des deux partenaires.":
      "Your relationship may need to make a concrete decision. Give yourselves time to ensure that this decision respects both partners' priorities.",

    "La complicité se développera grâce aux gestes simples. Une sortie, une activité partagée ou une soirée calme peut raviver un sentiment de proximité.":
      "Connection will grow through simple gestures. An outing, a shared activity, or a quiet evening can revive a sense of closeness.",

    "Votre lien évoluera si chacun accepte de laisser davantage de place à l’expression émotionnelle. La vulnérabilité ne fragilise pas nécessairement la relation : elle peut la rendre plus vraie.":
      "Your bond will evolve if both of you allow more room for emotional expression. Vulnerability does not necessarily weaken a relationship: it can make it more genuine.",

    "Célibataire, une rencontre pourrait commencer par une conversation légère avant de prendre une signification plus profonde.":
      "If you are single, a meeting may begin with a light conversation before taking on deeper meaning.",

    "Une personne différente de vos habitudes pourrait attirer votre attention. Ne rejetez pas trop rapidement une connexion simplement parce qu’elle ne ressemble pas à vos histoires précédentes.":
      "Someone different from your usual type may attract your attention. Do not dismiss a connection too quickly simply because it does not resemble your previous relationships.",

    "Votre pouvoir d’attraction sera plus visible lorsque vous cesserez de vouloir contrôler l’impression que vous donnez. Votre authenticité sera votre meilleur atout.":
      "Your attractiveness will become more visible when you stop trying to control the impression you make. Your authenticity will be your greatest strength.",

    "Une nouvelle connexion pourrait évoluer lentement. Laissez les comportements réguliers vous montrer les véritables intentions de l’autre personne.":
      "A new connection may develop slowly. Let consistent behavior show you the other person's true intentions.",

    "Le passé pourrait refaire surface sous la forme d’un souvenir, d’un message ou d’une comparaison. Demandez-vous si cette énergie mérite réellement une nouvelle place dans votre vie.":
      "The past may resurface in the form of a memory, a message, or a comparison. Ask yourself whether this energy truly deserves a new place in your life.",

    "Une rencontre progressive semble plus favorable qu’une histoire trop intense dès le départ. Ce qui se construit calmement pourrait devenir plus stable.":
      "A gradual connection appears more favorable than a relationship that is too intense from the start. What develops calmly may become more stable.",

    "Vous pourriez être attiré par une personne qui stimule votre curiosité intellectuelle ou émotionnelle. Prenez le temps de découvrir ce qui se cache derrière la première impression.":
      "You may be attracted to someone who stimulates your intellectual or emotional curiosity. Take time to discover what lies behind the first impression.",

    "Ce mois vous invite à ne pas confondre mystère et indisponibilité. Une relation prometteuse doit aussi offrir un minimum de clarté.":
      "This month invites you not to confuse mystery with emotional unavailability. A promising relationship should also offer a minimum of clarity.",

    "Une occasion de rencontre pourrait apparaître dans un contexte habituel : travail, activité, réseau social ou cercle d’amis.":
      "An opportunity to meet someone may arise in a familiar setting: work, an activity, a social network, or a circle of friends.",

    "Votre intuition vous aidera à reconnaître une connexion sincère. Vérifiez cependant que les actions de la personne correspondent bien à ses paroles.":
      "Your intuition will help you recognize a sincere connection. However, make sure the person's actions match their words.",

    "Vos émotions pourraient être plus intenses au début du mois, puis retrouver progressivement un meilleur équilibre.":
      "Your emotions may be more intense at the beginning of the month, then gradually return to a better balance.",

    "Vous ressentirez probablement un besoin accru de clarté. Les situations ambiguës deviendront plus difficiles à tolérer.":
      "You will probably feel a stronger need for clarity. Ambiguous situations may become more difficult to tolerate.",

    "Le climat émotionnel favorise une prise de conscience. Vous pourriez enfin comprendre pourquoi une situation vous touche autant.":
      "The emotional climate favors a realization. You may finally understand why a situation affects you so deeply.",

    "Une sensibilité plus grande peut vous rendre particulièrement réceptif aux gestes d’affection, mais aussi aux silences et aux changements d’attitude.":
      "Greater sensitivity may make you especially receptive to gestures of affection, but also to silence and changes in attitude.",

    "Votre cœur oscillera entre le besoin de proximité et celui de préserver votre espace personnel. Les deux besoins peuvent coexister.":
      "Your heart may alternate between the need for closeness and the need to preserve your personal space. Both needs can coexist.",

    "Le mois vous pousse à rechercher des liens plus sécurisants. Vous serez moins disposé à investir dans des relations imprévisibles.":
      "The month encourages you to seek more secure relationships. You may be less willing to invest in unpredictable connections.",

    "Une ancienne peur affective pourrait momentanément refaire surface. Considérez-la comme une information à comprendre plutôt qu’une vérité absolue.":
      "An old emotional fear may temporarily resurface. Consider it information to understand rather than an absolute truth.",

    "Votre humeur relationnelle sera influencée par la qualité des échanges. Les paroles vagues pourraient vous fatiguer davantage que d’habitude.":
      "Your relational mood will be influenced by the quality of communication. Vague words may tire you more than usual.",

    "Vous pourriez ressentir un regain de confiance en vous au fil des semaines. Cette énergie modifiera positivement vos choix affectifs.":
      "You may feel a renewed sense of self-confidence as the weeks go by. This energy will positively influence your emotional choices.",

    "Votre sensibilité vous aidera à percevoir ce qui n’est pas exprimé. Gardez toutefois une place pour la communication directe.":
      "Your sensitivity will help you perceive what is not being expressed. However, leave room for direct communication.",

    "Le principal défi sera de ne pas interpréter chaque silence comme un rejet ou un changement de sentiment.":
      "The main challenge will be not to interpret every silence as rejection or a change of feelings.",

    "Évitez de chercher une réponse immédiate à une situation encore en évolution. La précipitation pourrait créer davantage de confusion.":
      "Avoid seeking an immediate answer to a situation that is still evolving. Rushing may create more confusion.",

    "Votre besoin de sécurité pourrait vous pousser à vouloir contrôler les réactions de l’autre. Concentrez-vous plutôt sur ce que vous pouvez exprimer clairement.":
      "Your need for security may push you to control the other person's reactions. Focus instead on what you can express clearly.",

    "Une attente non formulée pourrait provoquer de la déception. Les autres ne peuvent pas toujours deviner ce dont vous avez besoin.":
      "An unspoken expectation may lead to disappointment. Others cannot always guess what you need.",

    "Le passé ne doit pas décider automatiquement de votre avenir affectif. Une nouvelle relation mérite d’être observée pour ce qu’elle est réellement.":
      "The past should not automatically decide your emotional future. A new relationship deserves to be observed for what it truly is.",

    "Vous devrez distinguer l’intuition de la peur. L’intuition est généralement calme et précise, tandis que la peur crée de nombreux scénarios.":
      "You will need to distinguish intuition from fear. Intuition is generally calm and precise, while fear creates many scenarios.",

    "Le besoin de protéger votre cœur pourrait vous rendre plus distant que vous ne le souhaitez réellement. L’ouverture peut rester progressive.":
      "The need to protect your heart may make you more distant than you truly want to be. Openness can remain gradual.",

    "Ne cherchez pas à obtenir une preuve d’amour par une confrontation inutile. Une discussion directe sera beaucoup plus constructive.":
      "Do not seek proof of love through unnecessary confrontation. A direct discussion will be much more constructive.",

    "Une différence dans la manière de communiquer pourrait créer une incompréhension. Prenez le temps de vérifier ce que l’autre voulait réellement dire.":
      "A difference in communication style may create a misunderstanding. Take time to verify what the other person really meant.",

    "Le défi consistera à préserver vos limites sans transformer chaque désaccord en rupture ou en remise en question complète de la relation.":
      "The challenge will be to preserve your boundaries without turning every disagreement into a breakup or a complete questioning of the relationship.",

    "Exprimez vos besoins avec douceur et précision. Une demande claire évitera de nombreuses interprétations inutiles.":
      "Express your needs gently and precisely. A clear request will avoid many unnecessary interpretations.",

    "Laissez les gestes confirmer les paroles. La régularité d’une personne vous renseignera davantage que ses promesses.":
      "Let actions confirm words. A person's consistency will tell you more than their promises.",

    "Ne forcez pas une relation à avancer plus rapidement que sa capacité naturelle. Ce qui est solide n’a pas besoin d’être précipité.":
      "Do not force a relationship to move faster than its natural pace. What is solid does not need to be rushed.",

    "Accordez de la valeur à la réciprocité. Vous ne devriez pas être la seule personne à entretenir constamment le lien.":
      "Value reciprocity. You should not be the only person constantly maintaining the bond.",

    "Prenez le temps d’observer vos réactions avant de répondre sous le coup de l’émotion.":
      "Take time to observe your reactions before responding in the heat of the moment.",

    "Ne vous contentez pas de paroles rassurantes si les comportements demeurent incohérents.":
      "Do not settle for reassuring words if behavior remains inconsistent.",

    "Conservez vos limites même lorsque votre attachement devient plus fort. Une relation saine ne demande pas de vous abandonner vous-même.":
      "Maintain your boundaries even when your attachment becomes stronger. A healthy relationship does not require you to abandon yourself.",

    "Faites confiance aux comportements réguliers, aux gestes simples et à la présence réelle.":
      "Trust consistent behavior, simple gestures, and genuine presence.",

    "Choisissez la clarté plutôt que les jeux, les suppositions ou les messages volontairement ambigus.":
      "Choose clarity over games, assumptions, or deliberately ambiguous messages.",

    "Permettez à la relation d’évoluer naturellement, mais ne restez pas indéfiniment dans une situation qui ne répond jamais à vos besoins.":
      "Allow the relationship to evolve naturally, but do not remain indefinitely in a situation that never meets your needs.",

    "Ce mois peut transformer votre manière d’aimer en vous aidant à rechercher davantage de clarté, de stabilité et de réciprocité.":
      "This month may transform the way you love by helping you seek greater clarity, stability, and reciprocity.",

    "Une nouvelle compréhension affective pourrait vous permettre de faire des choix plus respectueux de vos véritables besoins.":
      "A new emotional understanding may allow you to make choices that are more respectful of your true needs.",

    "Votre vie sentimentale progressera grâce à votre capacité à communiquer clairement tout en restant attentif aux actions de l’autre.":
      "Your love life will progress through your ability to communicate clearly while remaining attentive to the other person's actions.",

    "Le mois vous rappelle que l’amour véritable ne repose pas uniquement sur l’intensité, mais aussi sur la constance et la sécurité.":
      "The month reminds you that true love is not based only on intensity, but also on consistency and security.",

    "Une relation sincère gagne à évoluer dans un climat où chacun peut exprimer ses besoins sans craindre d’être jugé.":
      "A sincere relationship benefits from growing in an environment where both people can express their needs without fear of judgment.",

    "Vous pourriez terminer le mois avec une vision plus précise de ce que vous êtes prêt à construire et de ce que vous ne voulez plus accepter.":
      "You may end the month with a clearer vision of what you are ready to build and what you no longer want to accept.",

    "Votre cœur avance vers davantage de maturité. Ce changement vous aidera à reconnaître plus rapidement les relations réellement compatibles avec vous.":
      "Your heart is moving toward greater maturity. This change will help you recognize relationships that are truly compatible with you more quickly.",

    "Les semaines à venir peuvent créer un rapprochement important, à condition de laisser suffisamment de place à l’authenticité.":
      "The coming weeks may create meaningful closeness, provided there is enough room for authenticity.",

    "Une vérité affective pourrait enfin devenir évidente. Elle vous permettra soit de renforcer un lien, soit de vous en libérer avec davantage de sérénité.":
      "An emotional truth may finally become clear. It will allow you either to strengthen a bond or free yourself from it with greater peace.",

    "Votre évolution sentimentale dépendra surtout de votre capacité à choisir les relations qui vous offrent autant de présence que vous leur en donnez.":
      "Your emotional growth will depend mainly on your ability to choose relationships that offer you as much presence as you give them.",
  },

  es: {},
  de: {},
  it: {},
  pt: {},
};

/* =========================================================
   REPLACEMENT ENGINE
========================================================= */

function replaceTranslations(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "monthly-love.ts",
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
        translated &&
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

/* =========================================================
   BUILDER
========================================================= */

export function localizeMonthlyLoveBuilder(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    LOVE_TITLES[
      normalizedLocale
    ];

  if (!translations) {
    return source;
  }

  return replaceTranslations(
    source,
    translations,
  );
}

/* =========================================================
   TEXT BANK
========================================================= */

export function localizeMonthlyLoveTexts(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    LOVE_TEXTS[
      normalizedLocale
    ];

  if (!translations) {
    return source;
  }

  return replaceTranslations(
    source,
    translations,
  );
}
