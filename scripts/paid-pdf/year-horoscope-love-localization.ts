import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap =
  Record<string, string>;

/* =========================================================
   LOVE TITLES
========================================================= */

const LOVE_TITLES: Record<
  Exclude<PaidPdfLocale, "fr">,
  TranslationMap
> = {
  en: {
    "Une année pour écouter votre cœur":
      "A year to listen to your heart",

    "Votre vie affective prend une nouvelle direction":
      "Your love life takes a new direction",

    "Une année de rapprochement et de vérité":
      "A year of closeness and truth",

    "Votre cœur recherche un nouvel équilibre":
      "Your heart seeks a new balance",

    "Un nouveau cycle dans votre vie sentimentale":
      "A new cycle in your love life",

    "L’amour vous invite à plus d’authenticité":
      "Love invites you to greater authenticity",

    "Une année riche en prises de conscience":
      "A year filled with important realizations",

    "Vos sentiments deviennent plus clairs":
      "Your feelings become clearer",
  },

  es: {},
  de: {},
  it: {},
  pt: {},
};

/* =========================================================
   LOVE TEXTS
========================================================= */

const LOVE_TEXTS: Record<
  Exclude<PaidPdfLocale, "fr">,
  TranslationMap
> = {
  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    /* INTRODUCTION */

    "Votre vie sentimentale entre dans une année de clarification et d’évolution. Les prochains mois vous aideront à mieux comprendre ce que vous attendez réellement de l’amour et des relations.":
      "Your love life enters a year of clarification and growth. The coming months will help you better understand what you truly expect from love and relationships.",

    "Le climat affectif de l’année vous invite à accorder davantage d’attention à vos besoins profonds. Certaines émotions deviendront plus faciles à reconnaître, à exprimer et à comprendre.":
      "The emotional climate of the year invites you to pay closer attention to your deeper needs. Certain emotions will become easier to recognize, express, and understand.",

    "Cette année met en lumière votre manière d’aimer, de vous attacher et de créer de la proximité. Une évolution importante pourrait transformer votre vision des relations.":
      "This year highlights the way you love, form attachments, and create closeness. An important development could transform your view of relationships.",

    "Votre cœur recherche davantage de sincérité, de stabilité et de réciprocité. Les liens authentiques auront tendance à se renforcer progressivement au fil de l’année.":
      "Your heart seeks greater sincerity, stability, and reciprocity. Authentic bonds are likely to grow stronger gradually throughout the year.",

    "Une énergie de renouveau traverse votre vie sentimentale. Elle pourrait vous aider à vous libérer d’une attente, d’un doute ou d’une ancienne manière de fonctionner.":
      "An energy of renewal flows through your love life. It could help you free yourself from an expectation, a doubt, or an old relationship pattern.",

    "Les relations occupent une place particulière cette année. Vous pourriez ressentir le besoin de savoir plus clairement où vous allez et avec qui vous souhaitez réellement avancer.":
      "Relationships hold a special place this year. You may feel a stronger need to know where you are going and with whom you truly want to move forward.",

    "Votre sensibilité affective sera plus présente au cours des prochains mois. Cette année vous aidera à distinguer les liens qui vous nourrissent de ceux qui vous épuisent.":
      "Your emotional sensitivity will be more noticeable in the coming months. This year will help you distinguish the relationships that nourish you from those that drain you.",

    "Une période d’introspection sentimentale commence. Elle ne vous éloigne pas nécessairement de l’amour, mais vous pousse à rechercher davantage de vérité et de profondeur.":
      "A period of emotional introspection begins. It does not necessarily distance you from love, but encourages you to seek greater truth and depth.",

    "L’année favorise une compréhension plus fine de vos émotions. Vous pourriez enfin mettre des mots sur quelque chose que vous ressentez depuis longtemps.":
      "The year encourages a deeper understanding of your emotions. You may finally be able to put into words something you have been feeling for a long time.",

    "Votre vie affective évolue vers davantage de maturité. Les gestes constants compteront plus que les promesses impressionnantes ou les émotions passagères.":
      "Your love life is moving toward greater maturity. Consistent actions will matter more than impressive promises or passing emotions.",

    /* GENERAL */

    "Les échanges sincères seront essentiels tout au long de l’année. Une conversation posée pourrait rapprocher les points de vue ou permettre de résoudre une tension persistante.":
      "Honest communication will be essential throughout the year. A calm conversation could bring different perspectives closer together or help resolve a persistent tension.",

    "Vous pourriez ressentir un besoin plus fort de sécurité émotionnelle. Évitez toutefois de demander aux autres de deviner ce que vous n’exprimez pas clairement.":
      "You may feel a stronger need for emotional security. However, avoid expecting others to guess what you have not clearly expressed.",

    "L’année vous invite à observer la réciprocité dans vos relations. Les efforts, l’attention et la présence devront pouvoir circuler dans les deux sens.":
      "The year invites you to observe reciprocity in your relationships. Effort, attention, and presence should be able to flow in both directions.",

    "Une situation affective pourrait évoluer progressivement. Ne cherchez pas nécessairement une réponse immédiate : certains liens auront besoin de plusieurs mois pour révéler leur véritable direction.":
      "A romantic situation could evolve gradually. Do not necessarily seek an immediate answer: some connections may need several months to reveal their true direction.",

    "Votre intuition relationnelle sera particulièrement vive. Elle vous aidera à ressentir les changements d’ambiance, mais elle devra toujours être accompagnée de faits concrets.":
      "Your relationship intuition will be particularly strong. It will help you sense changes in the emotional atmosphere, but it should always be supported by concrete facts.",

    "Les prochains mois favorisent les rapprochements basés sur la confiance. Une relation sincère pourrait gagner en profondeur grâce à une plus grande vulnérabilité.":
      "The coming months favor connections built on trust. A sincere relationship could deepen through greater vulnerability.",

    "Votre façon de communiquer vos attentes jouera un rôle important. Une demande simple et précise sera mieux reçue qu’un silence rempli de frustration.":
      "The way you communicate your expectations will play an important role. A simple and precise request will be better received than silence filled with frustration.",

    "Le passé pourrait influencer votre manière d’interpréter une relation actuelle. Prenez soin de ne pas attribuer à une nouvelle personne les erreurs d’une ancienne histoire.":
      "The past could influence the way you interpret a current relationship. Be careful not to attribute the mistakes of a previous relationship to someone new.",

    "Une relation pourrait vous demander davantage de patience. Cela ne signifie pas que vous devez tout accepter, mais que certaines réponses apparaîtront progressivement.":
      "A relationship may require more patience from you. This does not mean that you should accept everything, but that some answers will emerge gradually.",

    "Cette année vous rappelle que l’amour ne doit pas constamment être compliqué pour être profond. La simplicité peut aussi être un signe de solidité.":
      "This year reminds you that love does not have to be constantly complicated to be deep. Simplicity can also be a sign of strength.",

    /* COUPLE */

    "En couple, plusieurs conversations importantes pourraient vous aider à mieux comprendre les attentes de votre partenaire. L’écoute aura autant de valeur que les mots.":
      "If you are in a relationship, several important conversations could help you better understand your partner’s expectations. Listening will be just as valuable as speaking.",

    "Votre relation pourrait gagner en profondeur si chacun accepte de parler honnêtement de ses besoins. Évitez de laisser les suppositions remplacer le dialogue.":
      "Your relationship could deepen if both of you are willing to speak honestly about your needs. Avoid letting assumptions replace dialogue.",

    "Un projet partagé pourrait renforcer votre complicité. Une décision concernant le quotidien, le foyer ou l’avenir peut vous donner l’impression d’avancer dans la même direction.":
      "A shared project could strengthen your bond. A decision involving daily life, your home, or the future may give you the feeling that you are moving in the same direction.",

    "Une ancienne tension peut progressivement commencer à s’apaiser. Pour y parvenir, il faudra toutefois éviter de vouloir déterminer constamment qui avait raison ou tort.":
      "An old tension may gradually begin to ease. To make this possible, however, you will need to avoid constantly trying to determine who was right or wrong.",

    "Votre partenaire pourrait avoir besoin de davantage de présence à certains moments de l’année. Un geste attentif aura parfois plus d’effet qu’une grande promesse.":
      "Your partner may need more of your presence at certain times of the year. A thoughtful gesture may sometimes have more impact than a grand promise.",

    "L’année favorise un rapprochement émotionnel. Vous pourriez redécouvrir une facette de votre relation que la routine avait progressivement mise de côté.":
      "The year favors greater emotional closeness. You may rediscover a side of your relationship that routine had gradually pushed aside.",

    "Une différence de rythme pourrait créer quelques incompréhensions. Respectez les besoins de chacun sans interpréter automatiquement la distance comme un manque d’amour.":
      "A difference in pace could create some misunderstandings. Respect each other’s needs without automatically interpreting distance as a lack of love.",

    "Votre couple pourrait être amené à prendre une décision concrète. Accordez-vous le temps de vérifier qu’elle respecte les priorités des deux partenaires.":
      "Your relationship may be called upon to make a concrete decision. Give yourselves enough time to make sure it respects both partners’ priorities.",

    "La complicité se développera grâce aux gestes simples et réguliers. Les moments partagés renforceront davantage votre lien que les démonstrations occasionnelles.":
      "Your connection will grow through simple and consistent gestures. Shared moments will strengthen your bond more than occasional grand displays.",

    "Votre relation évoluera si chacun accepte de laisser davantage de place à l’expression émotionnelle. La vulnérabilité peut rendre votre lien plus sincère et plus solide.":
      "Your relationship will evolve if both of you allow more room for emotional expression. Vulnerability can make your bond more sincere and stronger.",

    /* SINGLE */

    "Célibataire, une rencontre pourrait commencer par une conversation légère avant de prendre une signification plus profonde au fil des mois.":
      "If you are single, a new connection could begin with a light conversation before taking on deeper meaning over the months.",

    "Une personne différente de vos habitudes pourrait attirer votre attention. Ne rejetez pas trop rapidement une connexion parce qu’elle ne ressemble pas à vos histoires précédentes.":
      "Someone different from your usual type could catch your attention. Do not dismiss a connection too quickly simply because it does not resemble your previous relationships.",

    "Votre pouvoir d’attraction sera plus visible lorsque vous cesserez de vouloir contrôler l’impression que vous donnez. Votre authenticité sera votre meilleur atout.":
      "Your natural magnetism will become more noticeable when you stop trying to control the impression you make. Your authenticity will be your greatest asset.",

    "Une nouvelle connexion pourrait évoluer lentement. Laissez les comportements réguliers vous montrer les véritables intentions de l’autre personne.":
      "A new connection could develop slowly. Let consistent behavior show you the other person’s true intentions.",

    "Le passé pourrait refaire surface sous la forme d’un souvenir, d’un message ou d’une comparaison. Demandez-vous si cette énergie mérite réellement une nouvelle place dans votre vie.":
      "The past could resurface through a memory, a message, or a comparison. Ask yourself whether this energy truly deserves a new place in your life.",

    "Une rencontre progressive semble plus favorable qu’une histoire trop intense dès le départ. Ce qui se construit calmement pourrait devenir plus stable.":
      "A gradually developing connection appears more favorable than a relationship that becomes too intense from the start. What is built calmly could become more stable.",

    "Vous pourriez être attiré par une personne qui stimule votre curiosité intellectuelle ou émotionnelle. Prenez le temps de découvrir ce qui se cache derrière la première impression.":
      "You may be attracted to someone who stimulates your intellectual or emotional curiosity. Take the time to discover what lies beyond the first impression.",

    "Cette année vous invite à ne pas confondre mystère et indisponibilité. Une relation prometteuse doit aussi offrir un minimum de clarté.":
      "This year invites you not to confuse mystery with unavailability. A promising relationship should also offer a minimum of clarity.",

    "Une occasion de rencontre pourrait apparaître dans un contexte habituel : travail, activité, réseau social, voyage ou cercle d’amis.":
      "An opportunity to meet someone could arise in a familiar setting: work, an activity, social media, travel, or your circle of friends.",

    "Votre intuition vous aidera à reconnaître une connexion sincère. Vérifiez toutefois que les actions de la personne correspondent bien à ses paroles.":
      "Your intuition will help you recognize a sincere connection. However, make sure the person’s actions truly match their words.",

    /* EMOTIONAL CLIMATE */

    "Vos émotions pourraient traverser plusieurs phases au cours de l’année. Une période plus intense sera suivie d’un retour progressif vers davantage d’équilibre.":
      "Your emotions may go through several phases during the year. A more intense period will be followed by a gradual return to greater balance.",

    "Vous ressentirez probablement un besoin accru de clarté. Les situations ambiguës deviendront de plus en plus difficiles à tolérer.":
      "You will probably feel a greater need for clarity. Ambiguous situations will become increasingly difficult to tolerate.",

    "Le climat émotionnel favorise une prise de conscience importante. Vous pourriez enfin comprendre pourquoi une situation vous touche autant.":
      "The emotional climate favors an important realization. You may finally understand why a particular situation affects you so deeply.",

    "Une sensibilité plus grande peut vous rendre particulièrement réceptif aux gestes d’affection, mais aussi aux silences et aux changements d’attitude.":
      "Greater sensitivity may make you especially receptive to gestures of affection, but also to silences and changes in behavior.",

    "Votre cœur oscillera parfois entre le besoin de proximité et celui de préserver votre espace personnel. Ces deux besoins peuvent parfaitement coexister.":
      "Your heart may sometimes alternate between a need for closeness and a need to preserve your personal space. These two needs can coexist perfectly well.",

    "L’année vous pousse à rechercher des liens plus sécurisants. Vous serez progressivement moins disposé à investir dans des relations imprévisibles.":
      "The year encourages you to seek more secure relationships. You will gradually become less willing to invest in unpredictable connections.",

    "Une ancienne peur affective pourrait refaire surface. Considérez-la comme une information à comprendre plutôt que comme une vérité absolue.":
      "An old emotional fear could resurface. Consider it something to understand rather than an absolute truth.",

    "Votre équilibre relationnel sera influencé par la qualité des échanges. Les paroles vagues pourraient vous fatiguer davantage qu’auparavant.":
      "Your relationship balance will be influenced by the quality of communication. Vague words may become more draining than they were before.",

    "Vous pourriez ressentir un regain de confiance en vous au fil de l’année. Cette évolution modifiera positivement vos choix affectifs.":
      "You may experience renewed self-confidence as the year progresses. This development will positively influence your romantic choices.",

    "Votre sensibilité vous aidera à percevoir ce qui n’est pas exprimé. Gardez toutefois toujours une place importante pour la communication directe.":
      "Your sensitivity will help you perceive what is left unspoken. However, always leave an important place for direct communication.",

    /* KEY PERIODS */

    "Le début de l’année favorise la réflexion et la clarification. Une situation sentimentale pourrait demander du temps avant de révéler son véritable potentiel.":
      "The beginning of the year favors reflection and clarification. A romantic situation may need time before revealing its true potential.",

    "Le printemps apporte une énergie de rapprochement. Les échanges deviennent plus naturels et une relation peut commencer à évoluer plus rapidement.":
      "Spring brings an energy of closeness. Communication becomes more natural, and a relationship may begin to develop more quickly.",

    "Le milieu de l’année mettra en lumière la réciprocité dans vos relations. Vous verrez plus clairement quels liens méritent votre attention.":
      "The middle of the year will highlight reciprocity in your relationships. You will see more clearly which connections deserve your attention.",

    "L’été pourrait favoriser les rencontres, les sorties et les rapprochements spontanés. Une connexion légère peut progressivement gagner en profondeur.":
      "Summer could favor new encounters, outings, and spontaneous connections. A lighthearted connection may gradually develop greater depth.",

    "Une période plus sensible pourrait apparaître autour du milieu de l’année. Elle vous demandera de ne pas prendre chaque réaction comme une remise en question complète du lien.":
      "A more sensitive period could arise around the middle of the year. It will ask you not to interpret every reaction as a complete questioning of the relationship.",

    "Le début de l’automne encourage les décisions importantes. Une relation pourrait se renforcer, changer de direction ou demander une clarification définitive.":
      "Early autumn encourages important decisions. A relationship could grow stronger, change direction, or require a definitive clarification.",

    "La fin de l’année favorise davantage de stabilité. Vous pourriez ressentir le besoin de construire quelque chose de plus concret et de plus sécurisant.":
      "The end of the year favors greater stability. You may feel the need to build something more concrete and secure.",

    "Une première partie d’année introspective sera suivie d’une période plus ouverte aux rapprochements et aux nouvelles expériences.":
      "An introspective first part of the year will be followed by a period that is more open to connection and new experiences.",

    "Certaines réponses pourraient apparaître au cours du deuxième semestre. Une situation longtemps ambiguë deviendra progressivement plus facile à comprendre.":
      "Some answers may emerge during the second half of the year. A situation that has long been ambiguous will gradually become easier to understand.",

    "Les périodes les plus favorables seront celles où vous accepterez de communiquer clairement sans chercher à contrôler immédiatement le résultat.":
      "The most favorable periods will be those in which you are willing to communicate clearly without trying to control the outcome immediately.",

    /* CHALLENGE */

    "Le principal défi sera de ne pas interpréter chaque silence comme un rejet ou un changement de sentiment.":
      "The main challenge will be not to interpret every silence as rejection or a change in feelings.",

    "Évitez de chercher une réponse immédiate à une situation encore en évolution. La précipitation pourrait créer davantage de confusion.":
      "Avoid seeking an immediate answer to a situation that is still evolving. Rushing could create even more confusion.",

    "Votre besoin de sécurité pourrait vous pousser à vouloir contrôler les réactions de l’autre. Concentrez-vous plutôt sur ce que vous pouvez exprimer clairement.":
      "Your need for security could make you want to control the other person’s reactions. Focus instead on what you can express clearly.",

    "Une attente non formulée pourrait provoquer de la déception. Les autres ne peuvent pas toujours deviner ce dont vous avez besoin.":
      "An unspoken expectation could lead to disappointment. Other people cannot always guess what you need.",

    "Le passé ne doit pas décider automatiquement de votre avenir affectif. Une nouvelle relation mérite d’être observée pour ce qu’elle est réellement.":
      "The past should not automatically determine your romantic future. A new relationship deserves to be observed for what it truly is.",

    "Vous devrez distinguer l’intuition de la peur. L’intuition est généralement calme et précise, tandis que la peur crée de nombreux scénarios.":
      "You will need to distinguish intuition from fear. Intuition is generally calm and precise, while fear creates many different scenarios.",

    "Le besoin de protéger votre cœur pourrait vous rendre plus distant que vous ne le souhaitez réellement. L’ouverture peut rester progressive.":
      "The need to protect your heart could make you more distant than you truly want to be. Openness can remain gradual.",

    "Ne cherchez pas à obtenir une preuve d’amour par une confrontation inutile. Une discussion directe sera beaucoup plus constructive.":
      "Do not seek proof of love through unnecessary confrontation. A direct conversation will be much more constructive.",

    "Une différence dans la manière de communiquer pourrait créer une incompréhension. Prenez le temps de vérifier ce que l’autre voulait réellement dire.":
      "A difference in communication styles could create a misunderstanding. Take the time to verify what the other person truly meant.",

    "Le défi consistera à préserver vos limites sans transformer chaque désaccord en rupture ou en remise en question complète de la relation.":
      "The challenge will be to maintain your boundaries without turning every disagreement into a breakup or a complete questioning of the relationship.",

    /* ADVICE */

    "Exprimez vos besoins avec douceur et précision. Une demande claire évitera de nombreuses interprétations inutiles.":
      "Express your needs gently and clearly. A clear request will prevent many unnecessary misunderstandings.",

    "Laissez les gestes confirmer les paroles. La régularité d’une personne vous renseignera davantage que ses promesses.":
      "Let actions confirm words. A person’s consistency will tell you more than their promises.",

    "Ne forcez pas une relation à avancer plus rapidement que sa capacité naturelle. Ce qui est solide n’a pas besoin d’être précipité.":
      "Do not force a relationship to move faster than its natural pace. What is solid does not need to be rushed.",

    "Accordez de la valeur à la réciprocité. Vous ne devriez pas être la seule personne à entretenir constamment le lien.":
      "Value reciprocity. You should not be the only person constantly maintaining the connection.",

    "Prenez le temps d’observer vos réactions avant de répondre sous le coup de l’émotion.":
      "Take time to observe your reactions before responding in the heat of emotion.",

    "Ne vous contentez pas de paroles rassurantes si les comportements demeurent incohérents.":
      "Do not settle for reassuring words if the behavior remains inconsistent.",

    "Conservez vos limites même lorsque votre attachement devient plus fort. Une relation saine ne demande pas de vous abandonner vous-même.":
      "Maintain your boundaries even as your attachment grows stronger. A healthy relationship does not require you to abandon yourself.",

    "Faites confiance aux comportements réguliers, aux gestes simples et à la présence réelle.":
      "Trust consistent behavior, simple gestures, and genuine presence.",

    "Choisissez la clarté plutôt que les jeux, les suppositions ou les messages volontairement ambigus.":
      "Choose clarity over games, assumptions, or deliberately ambiguous messages.",

    "Permettez à la relation d’évoluer naturellement, mais ne restez pas indéfiniment dans une situation qui ne répond jamais à vos besoins.":
      "Allow the relationship to evolve naturally, but do not remain indefinitely in a situation that never meets your needs.",

    /* CONCLUSION */

    "Cette année peut transformer votre manière d’aimer en vous aidant à rechercher davantage de clarté, de stabilité et de réciprocité.":
      "This year can transform the way you love by helping you seek greater clarity, stability, and reciprocity.",

    "Une nouvelle compréhension affective pourrait vous permettre de faire des choix plus respectueux de vos véritables besoins.":
      "A new emotional understanding could help you make choices that better respect your true needs.",

    "Votre vie sentimentale progressera grâce à votre capacité à communiquer clairement tout en restant attentif aux actions de l’autre.":
      "Your love life will progress through your ability to communicate clearly while remaining attentive to the other person’s actions.",

    "L’année vous rappelle que l’amour véritable ne repose pas uniquement sur l’intensité, mais aussi sur la constance et la sécurité.":
      "The year reminds you that genuine love is not based solely on intensity, but also on consistency and security.",

    "Une relation sincère gagne à évoluer dans un climat où chacun peut exprimer ses besoins sans craindre d’être jugé.":
      "A sincere relationship benefits from developing in an environment where both people can express their needs without fear of being judged.",

    "Vous pourriez terminer l’année avec une vision plus précise de ce que vous êtes prêt à construire et de ce que vous ne voulez plus accepter.":
      "You may end the year with a clearer understanding of what you are ready to build and what you are no longer willing to accept.",

    "Votre cœur avance vers davantage de maturité. Cette évolution vous aidera à reconnaître plus rapidement les relations réellement compatibles avec vous.":
      "Your heart is moving toward greater maturity. This growth will help you recognize more quickly the relationships that are truly compatible with you.",

    "Les prochains mois peuvent créer un rapprochement important, à condition de laisser suffisamment de place à l’authenticité.":
      "The coming months may create an important emotional connection, provided that enough room is given to authenticity.",

    "Une vérité affective pourrait devenir évidente. Elle vous permettra soit de renforcer un lien, soit de vous en libérer avec davantage de sérénité.":
      "An emotional truth could become clear. It will allow you either to strengthen a bond or to let it go with greater peace of mind.",

    "Votre évolution sentimentale dépendra surtout de votre capacité à choisir les relations qui vous offrent autant de présence que vous leur en donnez.":
      "Your romantic growth will depend above all on your ability to choose relationships that offer you as much presence as you give them.",
  },

  es: {},
  de: {},
  it: {},
  pt: {},
};

/* =========================================================
   APPLY TRANSLATIONS
========================================================= */

function applyTranslations(
  source: string,
  translations: TranslationMap,
): string {
  let result = source;

  for (
    const [french, translated] of
    Object.entries(translations)
  ) {
    result =
      result.split(french).join(translated);
  }

  return result;
}

/* =========================================================
   MAIN LOCALIZER — YEAR HOROSCOPE LOVE
========================================================= */

export function localizeYearHoroscopeLove(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let localized = source;

  localized = applyTranslations(
    localized,
    LOVE_TITLES[locale],
  );

  localized = applyTranslations(
    localized,
    LOVE_TEXTS[locale],
  );

  return localized;
}
