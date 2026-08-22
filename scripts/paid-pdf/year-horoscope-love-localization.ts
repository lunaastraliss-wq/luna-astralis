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

    /* =======================================================
     SPANISH
  ======================================================= */

  es: {
    /* INTRODUCTION */

    "Votre vie sentimentale entre dans une année de clarification et d’évolution. Les prochains mois vous aideront à mieux comprendre ce que vous attendez réellement de l’amour et des relations.":
      "Tu vida sentimental entra en un año de clarificación y evolución. Los próximos meses te ayudarán a comprender mejor lo que realmente esperas del amor y de las relaciones.",

    "Le climat affectif de l’année vous invite à accorder davantage d’attention à vos besoins profonds. Certaines émotions deviendront plus faciles à reconnaître, à exprimer et à comprendre.":
      "El clima afectivo del año te invita a prestar más atención a tus necesidades profundas. Algunas emociones serán más fáciles de reconocer, expresar y comprender.",

    "Cette année met en lumière votre manière d’aimer, de vous attacher et de créer de la proximité. Une évolution importante pourrait transformer votre vision des relations.":
      "Este año pone de relieve tu manera de amar, vincularte y crear cercanía. Una evolución importante podría transformar tu visión de las relaciones.",

    "Votre cœur recherche davantage de sincérité, de stabilité et de réciprocité. Les liens authentiques auront tendance à se renforcer progressivement au fil de l’année.":
      "Tu corazón busca más sinceridad, estabilidad y reciprocidad. Los vínculos auténticos tenderán a fortalecerse progresivamente a lo largo del año.",

    "Une énergie de renouveau traverse votre vie sentimentale. Elle pourrait vous aider à vous libérer d’une attente, d’un doute ou d’une ancienne manière de fonctionner.":
      "Una energía de renovación atraviesa tu vida sentimental. Podría ayudarte a liberarte de una expectativa, una duda o una antigua manera de relacionarte.",

    "Les relations occupent une place particulière cette année. Vous pourriez ressentir le besoin de savoir plus clairement où vous allez et avec qui vous souhaitez réellement avancer.":
      "Las relaciones ocupan un lugar especial este año. Podrías sentir la necesidad de saber con mayor claridad hacia dónde vas y con quién deseas realmente avanzar.",

    "Votre sensibilité affective sera plus présente au cours des prochains mois. Cette année vous aidera à distinguer les liens qui vous nourrissent de ceux qui vous épuisent.":
      "Tu sensibilidad afectiva estará más presente durante los próximos meses. Este año te ayudará a distinguir los vínculos que te nutren de aquellos que te agotan.",

    "Une période d’introspection sentimentale commence. Elle ne vous éloigne pas nécessairement de l’amour, mais vous pousse à rechercher davantage de vérité et de profondeur.":
      "Comienza un período de introspección sentimental. No necesariamente te aleja del amor, sino que te impulsa a buscar más verdad y profundidad.",

    "L’année favorise une compréhension plus fine de vos émotions. Vous pourriez enfin mettre des mots sur quelque chose que vous ressentez depuis longtemps.":
      "El año favorece una comprensión más profunda de tus emociones. Por fin podrías poner en palabras algo que sientes desde hace mucho tiempo.",

    "Votre vie affective évolue vers davantage de maturité. Les gestes constants compteront plus que les promesses impressionnantes ou les émotions passagères.":
      "Tu vida afectiva evoluciona hacia una mayor madurez. Los gestos constantes tendrán más valor que las promesas impresionantes o las emociones pasajeras.",

    /* GENERAL */

    "Les échanges sincères seront essentiels tout au long de l’année. Une conversation posée pourrait rapprocher les points de vue ou permettre de résoudre une tension persistante.":
      "Los intercambios sinceros serán esenciales durante todo el año. Una conversación tranquila podría acercar los puntos de vista o permitir resolver una tensión persistente.",

    "Vous pourriez ressentir un besoin plus fort de sécurité émotionnelle. Évitez toutefois de demander aux autres de deviner ce que vous n’exprimez pas clairement.":
      "Podrías sentir una mayor necesidad de seguridad emocional. Sin embargo, evita esperar que los demás adivinen lo que no expresas con claridad.",

    "L’année vous invite à observer la réciprocité dans vos relations. Les efforts, l’attention et la présence devront pouvoir circuler dans les deux sens.":
      "El año te invita a observar la reciprocidad en tus relaciones. Los esfuerzos, la atención y la presencia deberán poder fluir en ambas direcciones.",

    "Une situation affective pourrait évoluer progressivement. Ne cherchez pas nécessairement une réponse immédiate : certains liens auront besoin de plusieurs mois pour révéler leur véritable direction.":
      "Una situación afectiva podría evolucionar progresivamente. No busques necesariamente una respuesta inmediata: algunos vínculos necesitarán varios meses para revelar su verdadera dirección.",

    "Votre intuition relationnelle sera particulièrement vive. Elle vous aidera à ressentir les changements d’ambiance, mais elle devra toujours être accompagnée de faits concrets.":
      "Tu intuición en las relaciones estará especialmente despierta. Te ayudará a percibir los cambios de ambiente, pero siempre deberá estar acompañada de hechos concretos.",

    "Les prochains mois favorisent les rapprochements basés sur la confiance. Une relation sincère pourrait gagner en profondeur grâce à une plus grande vulnérabilité.":
      "Los próximos meses favorecen los acercamientos basados en la confianza. Una relación sincera podría ganar profundidad gracias a una mayor vulnerabilidad.",

    "Votre façon de communiquer vos attentes jouera un rôle important. Une demande simple et précise sera mieux reçue qu’un silence rempli de frustration.":
      "Tu manera de comunicar tus expectativas desempeñará un papel importante. Una petición sencilla y precisa será mejor recibida que un silencio lleno de frustración.",

    "Le passé pourrait influencer votre manière d’interpréter une relation actuelle. Prenez soin de ne pas attribuer à une nouvelle personne les erreurs d’une ancienne histoire.":
      "El pasado podría influir en tu manera de interpretar una relación actual. Procura no atribuir a una nueva persona los errores de una historia anterior.",

    "Une relation pourrait vous demander davantage de patience. Cela ne signifie pas que vous devez tout accepter, mais que certaines réponses apparaîtront progressivement.":
      "Una relación podría exigirte más paciencia. Esto no significa que debas aceptarlo todo, sino que algunas respuestas aparecerán progresivamente.",

    "Cette année vous rappelle que l’amour ne doit pas constamment être compliqué pour être profond. La simplicité peut aussi être un signe de solidité.":
      "Este año te recuerda que el amor no tiene que ser constantemente complicado para ser profundo. La sencillez también puede ser una señal de solidez.",

    /* COUPLE */

    "En couple, plusieurs conversations importantes pourraient vous aider à mieux comprendre les attentes de votre partenaire. L’écoute aura autant de valeur que les mots.":
      "Si estás en pareja, varias conversaciones importantes podrían ayudarte a comprender mejor las expectativas de tu pareja. Escuchar tendrá tanto valor como las palabras.",

    "Votre relation pourrait gagner en profondeur si chacun accepte de parler honnêtement de ses besoins. Évitez de laisser les suppositions remplacer le dialogue.":
      "Tu relación podría ganar profundidad si ambos aceptan hablar honestamente de sus necesidades. Eviten dejar que las suposiciones sustituyan al diálogo.",

    "Un projet partagé pourrait renforcer votre complicité. Une décision concernant le quotidien, le foyer ou l’avenir peut vous donner l’impression d’avancer dans la même direction.":
      "Un proyecto compartido podría reforzar vuestra complicidad. Una decisión relacionada con la vida cotidiana, el hogar o el futuro puede darles la sensación de avanzar en la misma dirección.",

    "Une ancienne tension peut progressivement commencer à s’apaiser. Pour y parvenir, il faudra toutefois éviter de vouloir déterminer constamment qui avait raison ou tort.":
      "Una antigua tensión puede comenzar a disminuir progresivamente. Para lograrlo, será necesario evitar intentar determinar constantemente quién tenía razón o quién estaba equivocado.",

    "Votre partenaire pourrait avoir besoin de davantage de présence à certains moments de l’année. Un geste attentif aura parfois plus d’effet qu’une grande promesse.":
      "Tu pareja podría necesitar una mayor presencia en ciertos momentos del año. Un gesto atento tendrá a veces más efecto que una gran promesa.",

    "L’année favorise un rapprochement émotionnel. Vous pourriez redécouvrir une facette de votre relation que la routine avait progressivement mise de côté.":
      "El año favorece un acercamiento emocional. Podrías redescubrir una faceta de tu relación que la rutina había ido dejando de lado.",

    "Une différence de rythme pourrait créer quelques incompréhensions. Respectez les besoins de chacun sans interpréter automatiquement la distance comme un manque d’amour.":
      "Una diferencia de ritmo podría crear algunos malentendidos. Respeten las necesidades de cada uno sin interpretar automáticamente la distancia como una falta de amor.",

    "Votre couple pourrait être amené à prendre une décision concrète. Accordez-vous le temps de vérifier qu’elle respecte les priorités des deux partenaires.":
      "La pareja podría tener que tomar una decisión concreta. Dense tiempo para comprobar que respeta las prioridades de ambos.",

    "La complicité se développera grâce aux gestes simples et réguliers. Les moments partagés renforceront davantage votre lien que les démonstrations occasionnelles.":
      "La complicidad crecerá gracias a los gestos sencillos y constantes. Los momentos compartidos fortalecerán más vuestro vínculo que las demostraciones ocasionales.",

    "Votre relation évoluera si chacun accepte de laisser davantage de place à l’expression émotionnelle. La vulnérabilité peut rendre votre lien plus sincère et plus solide.":
      "La relación evolucionará si ambos aceptan dejar más espacio a la expresión emocional. La vulnerabilidad puede hacer que vuestro vínculo sea más sincero y sólido.",

    /* SINGLE */

    "Célibataire, une rencontre pourrait commencer par une conversation légère avant de prendre une signification plus profonde au fil des mois.":
      "Si estás soltero, un encuentro podría comenzar con una conversación ligera antes de adquirir un significado más profundo con el paso de los meses.",

    "Une personne différente de vos habitudes pourrait attirer votre attention. Ne rejetez pas trop rapidement une connexion parce qu’elle ne ressemble pas à vos histoires précédentes.":
      "Una persona diferente de tu tipo habitual podría llamar tu atención. No descartes demasiado rápido una conexión simplemente porque no se parece a tus historias anteriores.",

    "Votre pouvoir d’attraction sera plus visible lorsque vous cesserez de vouloir contrôler l’impression que vous donnez. Votre authenticité sera votre meilleur atout.":
      "Tu poder de atracción será más evidente cuando dejes de intentar controlar la impresión que causas. Tu autenticidad será tu mejor ventaja.",

    "Une nouvelle connexion pourrait évoluer lentement. Laissez les comportements réguliers vous montrer les véritables intentions de l’autre personne.":
      "Una nueva conexión podría evolucionar lentamente. Deja que los comportamientos constantes te muestren las verdaderas intenciones de la otra persona.",

    "Le passé pourrait refaire surface sous la forme d’un souvenir, d’un message ou d’une comparaison. Demandez-vous si cette énergie mérite réellement une nouvelle place dans votre vie.":
      "El pasado podría reaparecer en forma de recuerdo, mensaje o comparación. Pregúntate si esa energía merece realmente un nuevo lugar en tu vida.",

    "Une rencontre progressive semble plus favorable qu’une histoire trop intense dès le départ. Ce qui se construit calmement pourrait devenir plus stable.":
      "Un encuentro que evoluciona progresivamente parece más favorable que una historia demasiado intensa desde el principio. Lo que se construye con calma podría volverse más estable.",

    "Vous pourriez être attiré par une personne qui stimule votre curiosité intellectuelle ou émotionnelle. Prenez le temps de découvrir ce qui se cache derrière la première impression.":
      "Podrías sentirte atraído por una persona que estimule tu curiosidad intelectual o emocional. Tómate el tiempo de descubrir lo que hay detrás de la primera impresión.",

    "Cette année vous invite à ne pas confondre mystère et indisponibilité. Une relation prometteuse doit aussi offrir un minimum de clarté.":
      "Este año te invita a no confundir misterio con indisponibilidad. Una relación prometedora también debe ofrecer un mínimo de claridad.",

    "Une occasion de rencontre pourrait apparaître dans un contexte habituel : travail, activité, réseau social, voyage ou cercle d’amis.":
      "Una oportunidad para conocer a alguien podría surgir en un contexto habitual: trabajo, actividad, red social, viaje o círculo de amigos.",

    "Votre intuition vous aidera à reconnaître une connexion sincère. Vérifiez toutefois que les actions de la personne correspondent bien à ses paroles.":
      "Tu intuición te ayudará a reconocer una conexión sincera. Sin embargo, comprueba que las acciones de la persona correspondan realmente con sus palabras.",

    /* EMOTIONAL CLIMATE */

    "Vos émotions pourraient traverser plusieurs phases au cours de l’année. Une période plus intense sera suivie d’un retour progressif vers davantage d’équilibre.":
      "Tus emociones podrían atravesar varias fases durante el año. Un período más intenso será seguido por un regreso progresivo hacia un mayor equilibrio.",

    "Vous ressentirez probablement un besoin accru de clarté. Les situations ambiguës deviendront de plus en plus difficiles à tolérer.":
      "Probablemente sentirás una mayor necesidad de claridad. Las situaciones ambiguas serán cada vez más difíciles de tolerar.",

    "Le climat émotionnel favorise une prise de conscience importante. Vous pourriez enfin comprendre pourquoi une situation vous touche autant.":
      "El clima emocional favorece una toma de conciencia importante. Por fin podrías comprender por qué una situación te afecta tanto.",

    "Une sensibilité plus grande peut vous rendre particulièrement réceptif aux gestes d’affection, mais aussi aux silences et aux changements d’attitude.":
      "Una mayor sensibilidad puede hacerte especialmente receptivo a los gestos de afecto, pero también a los silencios y a los cambios de actitud.",

    "Votre cœur oscillera parfois entre le besoin de proximité et celui de préserver votre espace personnel. Ces deux besoins peuvent parfaitement coexister.":
      "Tu corazón oscilará a veces entre la necesidad de cercanía y la de preservar tu espacio personal. Ambas necesidades pueden coexistir perfectamente.",

    "L’année vous pousse à rechercher des liens plus sécurisants. Vous serez progressivement moins disposé à investir dans des relations imprévisibles.":
      "El año te impulsa a buscar vínculos que te aporten mayor seguridad. Poco a poco estarás menos dispuesto a invertir en relaciones impredecibles.",

    "Une ancienne peur affective pourrait refaire surface. Considérez-la comme une information à comprendre plutôt que comme une vérité absolue.":
      "Un antiguo temor afectivo podría reaparecer. Considéralo como una información que debes comprender y no como una verdad absoluta.",

    "Votre équilibre relationnel sera influencé par la qualité des échanges. Les paroles vagues pourraient vous fatiguer davantage qu’auparavant.":
      "Tu equilibrio en las relaciones estará influido por la calidad de los intercambios. Las palabras vagas podrían agotarte más que antes.",

    "Vous pourriez ressentir un regain de confiance en vous au fil de l’année. Cette évolution modifiera positivement vos choix affectifs.":
      "Podrías experimentar una renovación de la confianza en ti mismo a lo largo del año. Esta evolución influirá positivamente en tus decisiones afectivas.",

    "Votre sensibilité vous aidera à percevoir ce qui n’est pas exprimé. Gardez toutefois toujours une place importante pour la communication directe.":
      "Tu sensibilidad te ayudará a percibir lo que no se expresa. Sin embargo, reserva siempre un lugar importante para la comunicación directa.",

    /* KEY PERIODS */

    "Le début de l’année favorise la réflexion et la clarification. Une situation sentimentale pourrait demander du temps avant de révéler son véritable potentiel.":
      "El comienzo del año favorece la reflexión y la clarificación. Una situación sentimental podría necesitar tiempo antes de revelar su verdadero potencial.",

    "Le printemps apporte une énergie de rapprochement. Les échanges deviennent plus naturels et une relation peut commencer à évoluer plus rapidement.":
      "La primavera aporta una energía de acercamiento. Los intercambios se vuelven más naturales y una relación puede comenzar a evolucionar con mayor rapidez.",

    "Le milieu de l’année mettra en lumière la réciprocité dans vos relations. Vous verrez plus clairement quels liens méritent votre attention.":
      "La mitad del año pondrá de relieve la reciprocidad en tus relaciones. Verás con mayor claridad qué vínculos merecen tu atención.",

    "L’été pourrait favoriser les rencontres, les sorties et les rapprochements spontanés. Une connexion légère peut progressivement gagner en profondeur.":
      "El verano podría favorecer los encuentros, las salidas y los acercamientos espontáneos. Una conexión ligera puede ganar profundidad progresivamente.",

    "Une période plus sensible pourrait apparaître autour du milieu de l’année. Elle vous demandera de ne pas prendre chaque réaction comme une remise en question complète du lien.":
      "Un período más sensible podría aparecer hacia la mitad del año. Te pedirá que no interpretes cada reacción como un cuestionamiento completo del vínculo.",

    "Le début de l’automne encourage les décisions importantes. Une relation pourrait se renforcer, changer de direction ou demander une clarification définitive.":
      "El comienzo del otoño favorece las decisiones importantes. Una relación podría fortalecerse, cambiar de dirección o exigir una aclaración definitiva.",

    "La fin de l’année favorise davantage de stabilité. Vous pourriez ressentir le besoin de construire quelque chose de plus concret et de plus sécurisant.":
      "El final del año favorece una mayor estabilidad. Podrías sentir la necesidad de construir algo más concreto y seguro.",

    "Une première partie d’année introspective sera suivie d’une période plus ouverte aux rapprochements et aux nouvelles expériences.":
      "Una primera parte del año introspectiva será seguida por un período más abierto a los acercamientos y a nuevas experiencias.",

    "Certaines réponses pourraient apparaître au cours du deuxième semestre. Une situation longtemps ambiguë deviendra progressivement plus facile à comprendre.":
      "Algunas respuestas podrían aparecer durante la segunda mitad del año. Una situación que ha sido ambigua durante mucho tiempo se volverá progresivamente más fácil de comprender.",

    "Les périodes les plus favorables seront celles où vous accepterez de communiquer clairement sans chercher à contrôler immédiatement le résultat.":
      "Los períodos más favorables serán aquellos en los que aceptes comunicarte con claridad sin intentar controlar inmediatamente el resultado.",

    /* CHALLENGE */

    "Le principal défi sera de ne pas interpréter chaque silence comme un rejet ou un changement de sentiment.":
      "El principal desafío será no interpretar cada silencio como un rechazo o un cambio de sentimientos.",

    "Évitez de chercher une réponse immédiate à une situation encore en évolution. La précipitation pourrait créer davantage de confusion.":
      "Evita buscar una respuesta inmediata a una situación que todavía está evolucionando. La precipitación podría crear aún más confusión.",

    "Votre besoin de sécurité pourrait vous pousser à vouloir contrôler les réactions de l’autre. Concentrez-vous plutôt sur ce que vous pouvez exprimer clairement.":
      "Tu necesidad de seguridad podría llevarte a querer controlar las reacciones de la otra persona. Concéntrate más bien en aquello que puedes expresar con claridad.",

    "Une attente non formulée pourrait provoquer de la déception. Les autres ne peuvent pas toujours deviner ce dont vous avez besoin.":
      "Una expectativa no expresada podría provocar decepción. Los demás no siempre pueden adivinar lo que necesitas.",

    "Le passé ne doit pas décider automatiquement de votre avenir affectif. Une nouvelle relation mérite d’être observée pour ce qu’elle est réellement.":
      "El pasado no debe decidir automáticamente tu futuro afectivo. Una nueva relación merece ser observada por lo que realmente es.",

    "Vous devrez distinguer l’intuition de la peur. L’intuition est généralement calme et précise, tandis que la peur crée de nombreux scénarios.":
      "Deberás distinguir la intuición del miedo. La intuición suele ser tranquila y precisa, mientras que el miedo crea numerosos escenarios.",

    "Le besoin de protéger votre cœur pourrait vous rendre plus distant que vous ne le souhaitez réellement. L’ouverture peut rester progressive.":
      "La necesidad de proteger tu corazón podría hacerte más distante de lo que realmente deseas. La apertura puede ser progresiva.",

    "Ne cherchez pas à obtenir une preuve d’amour par une confrontation inutile. Une discussion directe sera beaucoup plus constructive.":
      "No busques obtener una prueba de amor mediante una confrontación innecesaria. Una conversación directa será mucho más constructiva.",

    "Une différence dans la manière de communiquer pourrait créer une incompréhension. Prenez le temps de vérifier ce que l’autre voulait réellement dire.":
      "Una diferencia en la manera de comunicarse podría crear un malentendido. Tómate el tiempo de comprobar lo que la otra persona realmente quería decir.",

    "Le défi consistera à préserver vos limites sans transformer chaque désaccord en rupture ou en remise en question complète de la relation.":
      "El desafío consistirá en preservar tus límites sin transformar cada desacuerdo en una ruptura o en un cuestionamiento completo de la relación.",

    /* ADVICE */

    "Exprimez vos besoins avec douceur et précision. Une demande claire évitera de nombreuses interprétations inutiles.":
      "Expresa tus necesidades con suavidad y precisión. Una petición clara evitará muchas interpretaciones innecesarias.",

    "Laissez les gestes confirmer les paroles. La régularité d’une personne vous renseignera davantage que ses promesses.":
      "Deja que los actos confirmen las palabras. La constancia de una persona te dirá más que sus promesas.",

    "Ne forcez pas une relation à avancer plus rapidement que sa capacité naturelle. Ce qui est solide n’a pas besoin d’être précipité.":
      "No fuerces una relación a avanzar más rápido que su ritmo natural. Lo que es sólido no necesita ser apresurado.",

    "Accordez de la valeur à la réciprocité. Vous ne devriez pas être la seule personne à entretenir constamment le lien.":
      "Valora la reciprocidad. No deberías ser la única persona que mantiene constantemente el vínculo.",

    "Prenez le temps d’observer vos réactions avant de répondre sous le coup de l’émotion.":
      "Tómate el tiempo de observar tus reacciones antes de responder bajo el impulso de la emoción.",

    "Ne vous contentez pas de paroles rassurantes si les comportements demeurent incohérents.":
      "No te conformes con palabras tranquilizadoras si los comportamientos siguen siendo incoherentes.",

    "Conservez vos limites même lorsque votre attachement devient plus fort. Une relation saine ne demande pas de vous abandonner vous-même.":
      "Mantén tus límites incluso cuando tu apego se vuelva más fuerte. Una relación sana no exige que te abandones a ti mismo.",

    "Faites confiance aux comportements réguliers, aux gestes simples et à la présence réelle.":
      "Confía en los comportamientos constantes, los gestos sencillos y la presencia real.",

    "Choisissez la clarté plutôt que les jeux, les suppositions ou les messages volontairement ambigus.":
      "Elige la claridad en lugar de los juegos, las suposiciones o los mensajes deliberadamente ambiguos.",

    "Permettez à la relation d’évoluer naturellement, mais ne restez pas indéfiniment dans une situation qui ne répond jamais à vos besoins.":
      "Permite que la relación evolucione de manera natural, pero no permanezcas indefinidamente en una situación que nunca responde a tus necesidades.",

    /* CONCLUSION */

    "Cette année peut transformer votre manière d’aimer en vous aidant à rechercher davantage de clarté, de stabilité et de réciprocité.":
      "Este año puede transformar tu manera de amar ayudándote a buscar más claridad, estabilidad y reciprocidad.",

    "Une nouvelle compréhension affective pourrait vous permettre de faire des choix plus respectueux de vos véritables besoins.":
      "Una nueva comprensión afectiva podría permitirte tomar decisiones más respetuosas con tus verdaderas necesidades.",

    "Votre vie sentimentale progressera grâce à votre capacité à communiquer clairement tout en restant attentif aux actions de l’autre.":
      "Tu vida sentimental progresará gracias a tu capacidad para comunicarte con claridad mientras permaneces atento a las acciones de la otra persona.",

    "L’année vous rappelle que l’amour véritable ne repose pas uniquement sur l’intensité, mais aussi sur la constance et la sécurité.":
      "El año te recuerda que el amor verdadero no se basa únicamente en la intensidad, sino también en la constancia y la seguridad.",

    "Une relation sincère gagne à évoluer dans un climat où chacun peut exprimer ses besoins sans craindre d’être jugé.":
      "Una relación sincera se beneficia de evolucionar en un ambiente donde ambos puedan expresar sus necesidades sin temor a ser juzgados.",

    "Vous pourriez terminer l’année avec une vision plus précise de ce que vous êtes prêt à construire et de ce que vous ne voulez plus accepter.":
      "Podrías terminar el año con una visión más clara de lo que estás dispuesto a construir y de lo que ya no quieres aceptar.",

    "Votre cœur avance vers davantage de maturité. Cette évolution vous aidera à reconnaître plus rapidement les relations réellement compatibles avec vous.":
      "Tu corazón avanza hacia una mayor madurez. Esta evolución te ayudará a reconocer más rápidamente las relaciones realmente compatibles contigo.",

    "Les prochains mois peuvent créer un rapprochement important, à condition de laisser suffisamment de place à l’authenticité.":
      "Los próximos meses pueden favorecer un acercamiento importante, siempre que dejes suficiente espacio para la autenticidad.",

    "Une vérité affective pourrait devenir évidente. Elle vous permettra soit de renforcer un lien, soit de vous en libérer avec davantage de sérénité.":
      "Una verdad afectiva podría hacerse evidente. Te permitirá fortalecer un vínculo o liberarte de él con mayor serenidad.",

    "Votre évolution sentimentale dépendra surtout de votre capacité à choisir les relations qui vous offrent autant de présence que vous leur en donnez.":
      "Tu evolución sentimental dependerá sobre todo de tu capacidad para elegir relaciones que te ofrezcan tanta presencia como la que tú les das.",
  },
  de: {
  "Une année pour écouter votre cœur":
    "Ein Jahr, um auf Ihr Herz zu hören",

  "Votre vie affective prend une nouvelle direction":
    "Ihr Liebesleben schlägt eine neue Richtung ein",

  "Une année de rapprochement et de vérité":
    "Ein Jahr der Nähe und der Wahrheit",

  "Votre cœur recherche un nouvel équilibre":
    "Ihr Herz sucht nach einem neuen Gleichgewicht",

  "Un nouveau cycle dans votre vie sentimentale":
    "Ein neuer Zyklus in Ihrem Liebesleben",

  "L’amour vous invite à plus d’authenticité":
    "Die Liebe lädt Sie zu mehr Authentizität ein",

  "Une année riche en prises de conscience":
    "Ein Jahr voller wichtiger Erkenntnisse",

  "Vos sentiments deviennent plus clairs":
    "Ihre Gefühle werden klarer",
},
  /* =======================================================
   GERMAN
======================================================= */

de: {
  /* INTRODUCTION */

  "Votre vie sentimentale entre dans une année de clarification et d’évolution. Les prochains mois vous aideront à mieux comprendre ce que vous attendez réellement de l’amour et des relations.":
    "Ihr Liebesleben tritt in ein Jahr der Klärung und Entwicklung ein. Die kommenden Monate werden Ihnen helfen, besser zu verstehen, was Sie wirklich von Liebe und Beziehungen erwarten.",

  "Le climat affectif de l’année vous invite à accorder davantage d’attention à vos besoins profonds. Certaines émotions deviendront plus faciles à reconnaître, à exprimer et à comprendre.":
    "Die emotionale Atmosphäre des Jahres lädt Sie dazu ein, Ihren tiefsten Bedürfnissen mehr Aufmerksamkeit zu schenken. Bestimmte Gefühle werden leichter zu erkennen, auszudrücken und zu verstehen sein.",

  "Cette année met en lumière votre manière d’aimer, de vous attacher et de créer de la proximité. Une évolution importante pourrait transformer votre vision des relations.":
    "Dieses Jahr rückt Ihre Art zu lieben, Bindungen einzugehen und Nähe zu schaffen in den Mittelpunkt. Eine wichtige Entwicklung könnte Ihre Sicht auf Beziehungen verändern.",

  "Votre cœur recherche davantage de sincérité, de stabilité et de réciprocité. Les liens authentiques auront tendance à se renforcer progressivement au fil de l’année.":
    "Ihr Herz sucht nach mehr Aufrichtigkeit, Stabilität und Gegenseitigkeit. Authentische Bindungen werden im Laufe des Jahres tendenziell stärker.",

  "Une énergie de renouveau traverse votre vie sentimentale. Elle pourrait vous aider à vous libérer d’une attente, d’un doute ou d’une ancienne manière de fonctionner.":
    "Eine Energie der Erneuerung durchzieht Ihr Liebesleben. Sie könnte Ihnen helfen, sich von einer Erwartung, einem Zweifel oder einem alten Beziehungsmuster zu lösen.",

  "Les relations occupent une place particulière cette année. Vous pourriez ressentir le besoin de savoir plus clairement où vous allez et avec qui vous souhaitez réellement avancer.":
    "Beziehungen nehmen in diesem Jahr einen besonderen Stellenwert ein. Sie könnten das Bedürfnis verspüren, klarer zu wissen, wohin Sie gehen und mit wem Sie wirklich weitergehen möchten.",

  "Votre sensibilité affective sera plus présente au cours des prochains mois. Cette année vous aidera à distinguer les liens qui vous nourrissent de ceux qui vous épuisent.":
    "Ihre emotionale Sensibilität wird in den kommenden Monaten stärker spürbar sein. Dieses Jahr wird Ihnen helfen, zwischen Beziehungen zu unterscheiden, die Ihnen Kraft geben, und solchen, die Sie erschöpfen.",

  "Une période d’introspection sentimentale commence. Elle ne vous éloigne pas nécessairement de l’amour, mais vous pousse à rechercher davantage de vérité et de profondeur.":
    "Eine Phase emotionaler Selbstreflexion beginnt. Sie entfernt Sie nicht unbedingt von der Liebe, sondern ermutigt Sie, nach mehr Wahrheit und Tiefe zu suchen.",

  "L’année favorise une compréhension plus fine de vos émotions. Vous pourriez enfin mettre des mots sur quelque chose que vous ressentez depuis longtemps.":
    "Das Jahr fördert ein tieferes Verständnis Ihrer Gefühle. Vielleicht gelingt es Ihnen endlich, etwas in Worte zu fassen, das Sie schon lange empfinden.",

  "Votre vie affective évolue vers davantage de maturité. Les gestes constants compteront plus que les promesses impressionnantes ou les émotions passagères.":
    "Ihr Liebesleben entwickelt sich zu größerer Reife. Beständige Gesten werden wichtiger sein als beeindruckende Versprechen oder vorübergehende Gefühle.",

  /* GENERAL */

  "Les échanges sincères seront essentiels tout au long de l’année. Une conversation posée pourrait rapprocher les points de vue ou permettre de résoudre une tension persistante.":
    "Aufrichtige Gespräche werden das ganze Jahr über von entscheidender Bedeutung sein. Ein ruhiges Gespräch könnte unterschiedliche Standpunkte einander näherbringen oder helfen, eine anhaltende Spannung zu lösen.",

  "Vous pourriez ressentir un besoin plus fort de sécurité émotionnelle. Évitez toutefois de demander aux autres de deviner ce que vous n’exprimez pas clairement.":
    "Sie könnten ein stärkeres Bedürfnis nach emotionaler Sicherheit verspüren. Vermeiden Sie jedoch, von anderen zu erwarten, dass sie erraten, was Sie nicht klar ausdrücken.",

  "L’année vous invite à observer la réciprocité dans vos relations. Les efforts, l’attention et la présence devront pouvoir circuler dans les deux sens.":
    "Das Jahr lädt Sie dazu ein, auf die Gegenseitigkeit in Ihren Beziehungen zu achten. Bemühungen, Aufmerksamkeit und Präsenz sollten in beide Richtungen fließen können.",

  "Une situation affective pourrait évoluer progressivement. Ne cherchez pas nécessairement une réponse immédiate : certains liens auront besoin de plusieurs mois pour révéler leur véritable direction.":
    "Eine emotionale Situation könnte sich allmählich entwickeln. Suchen Sie nicht unbedingt nach einer sofortigen Antwort: Manche Verbindungen benötigen mehrere Monate, um ihre wahre Richtung zu zeigen.",

  "Votre intuition relationnelle sera particulièrement vive. Elle vous aidera à ressentir les changements d’ambiance, mais elle devra toujours être accompagnée de faits concrets.":
    "Ihre Intuition in Beziehungen wird besonders ausgeprägt sein. Sie wird Ihnen helfen, Veränderungen in der Atmosphäre wahrzunehmen, sollte jedoch immer durch konkrete Fakten ergänzt werden.",

  "Les prochains mois favorisent les rapprochements basés sur la confiance. Une relation sincère pourrait gagner en profondeur grâce à une plus grande vulnérabilité.":
    "Die kommenden Monate begünstigen Annäherungen, die auf Vertrauen beruhen. Eine aufrichtige Beziehung könnte durch größere emotionale Offenheit an Tiefe gewinnen.",

  "Votre façon de communiquer vos attentes jouera un rôle important. Une demande simple et précise sera mieux reçue qu’un silence rempli de frustration.":
    "Die Art, wie Sie Ihre Erwartungen kommunizieren, wird eine wichtige Rolle spielen. Eine einfache und klare Bitte wird besser aufgenommen als ein von Frustration erfülltes Schweigen.",

  "Le passé pourrait influencer votre manière d’interpréter une relation actuelle. Prenez soin de ne pas attribuer à une nouvelle personne les erreurs d’une ancienne histoire.":
    "Die Vergangenheit könnte beeinflussen, wie Sie eine gegenwärtige Beziehung interpretieren. Achten Sie darauf, einer neuen Person nicht die Fehler einer früheren Beziehung zuzuschreiben.",

  "Une relation pourrait vous demander davantage de patience. Cela ne signifie pas que vous devez tout accepter, mais que certaines réponses apparaîtront progressivement.":
    "Eine Beziehung könnte mehr Geduld von Ihnen verlangen. Das bedeutet nicht, dass Sie alles akzeptieren müssen, sondern dass sich manche Antworten erst nach und nach zeigen werden.",

  "Cette année vous rappelle que l’amour ne doit pas constamment être compliqué pour être profond. La simplicité peut aussi être un signe de solidité.":
    "Dieses Jahr erinnert Sie daran, dass Liebe nicht ständig kompliziert sein muss, um tief zu sein. Einfachheit kann ebenfalls ein Zeichen von Stabilität sein.",

  /* COUPLE */

  "En couple, plusieurs conversations importantes pourraient vous aider à mieux comprendre les attentes de votre partenaire. L’écoute aura autant de valeur que les mots.":
    "Wenn Sie in einer Beziehung sind, könnten mehrere wichtige Gespräche Ihnen helfen, die Erwartungen Ihres Partners besser zu verstehen. Zuhören wird ebenso wertvoll sein wie das Sprechen.",

  "Votre relation pourrait gagner en profondeur si chacun accepte de parler honnêtement de ses besoins. Évitez de laisser les suppositions remplacer le dialogue.":
    "Ihre Beziehung könnte an Tiefe gewinnen, wenn beide bereit sind, ehrlich über ihre Bedürfnisse zu sprechen. Lassen Sie Vermutungen nicht den Dialog ersetzen.",

  "Un projet partagé pourrait renforcer votre complicité. Une décision concernant le quotidien, le foyer ou l’avenir peut vous donner l’impression d’avancer dans la même direction.":
    "Ein gemeinsames Projekt könnte Ihre Verbundenheit stärken. Eine Entscheidung über den Alltag, das Zuhause oder die Zukunft kann Ihnen das Gefühl geben, in dieselbe Richtung zu gehen.",

  "Une ancienne tension peut progressivement commencer à s’apaiser. Pour y parvenir, il faudra toutefois éviter de vouloir déterminer constamment qui avait raison ou tort.":
    "Eine alte Spannung kann allmählich nachlassen. Dafür sollten Sie jedoch vermeiden, ständig feststellen zu wollen, wer recht oder unrecht hatte.",

  "Votre partenaire pourrait avoir besoin de davantage de présence à certains moments de l’année. Un geste attentif aura parfois plus d’effet qu’une grande promesse.":
    "Ihr Partner könnte zu bestimmten Zeiten des Jahres mehr Nähe und Aufmerksamkeit benötigen. Eine aufmerksame Geste kann manchmal mehr bewirken als ein großes Versprechen.",

  "L’année favorise un rapprochement émotionnel. Vous pourriez redécouvrir une facette de votre relation que la routine avait progressivement mise de côté.":
    "Das Jahr begünstigt eine emotionale Annäherung. Sie könnten eine Seite Ihrer Beziehung wiederentdecken, die durch die Routine allmählich in den Hintergrund geraten war.",

  "Une différence de rythme pourrait créer quelques incompréhensions. Respectez les besoins de chacun sans interpréter automatiquement la distance comme un manque d’amour.":
    "Ein unterschiedliches Tempo könnte zu einigen Missverständnissen führen. Respektieren Sie die Bedürfnisse des anderen, ohne Distanz automatisch als Mangel an Liebe zu interpretieren.",

  "Votre couple pourrait être amené à prendre une décision concrète. Accordez-vous le temps de vérifier qu’elle respecte les priorités des deux partenaires.":
    "Ihre Partnerschaft könnte vor einer konkreten Entscheidung stehen. Nehmen Sie sich die Zeit, sicherzustellen, dass sie die Prioritäten beider Partner berücksichtigt.",

  "La complicité se développera grâce aux gestes simples et réguliers. Les moments partagés renforceront davantage votre lien que les démonstrations occasionnelles.":
    "Ihre Verbundenheit wird durch einfache und regelmäßige Gesten wachsen. Gemeinsame Momente werden Ihre Beziehung stärker festigen als gelegentliche große Liebesbeweise.",

  "Votre relation évoluera si chacun accepte de laisser davantage de place à l’expression émotionnelle. La vulnérabilité peut rendre votre lien plus sincère et plus solide.":
    "Ihre Beziehung wird sich weiterentwickeln, wenn beide der emotionalen Ausdrucksfähigkeit mehr Raum geben. Verletzlichkeit kann Ihre Verbindung aufrichtiger und stärker machen.",

  /* SINGLE */

  "Célibataire, une rencontre pourrait commencer par une conversation légère avant de prendre une signification plus profonde au fil des mois.":
    "Wenn Sie Single sind, könnte eine Begegnung mit einem lockeren Gespräch beginnen und im Laufe der Monate eine tiefere Bedeutung gewinnen.",

  "Une personne différente de vos habitudes pourrait attirer votre attention. Ne rejetez pas trop rapidement une connexion parce qu’elle ne ressemble pas à vos histoires précédentes.":
    "Eine Person, die nicht Ihrem gewohnten Typ entspricht, könnte Ihre Aufmerksamkeit wecken. Lehnen Sie eine Verbindung nicht vorschnell ab, nur weil sie Ihren früheren Beziehungen nicht ähnelt.",

  "Votre pouvoir d’attraction sera plus visible lorsque vous cesserez de vouloir contrôler l’impression que vous donnez. Votre authenticité sera votre meilleur atout.":
    "Ihre natürliche Anziehungskraft wird deutlicher sichtbar, wenn Sie aufhören, den Eindruck kontrollieren zu wollen, den Sie hinterlassen. Ihre Authentizität wird Ihre größte Stärke sein.",

  "Une nouvelle connexion pourrait évoluer lentement. Laissez les comportements réguliers vous montrer les véritables intentions de l’autre personne.":
    "Eine neue Verbindung könnte sich langsam entwickeln. Lassen Sie sich durch beständiges Verhalten die wahren Absichten der anderen Person zeigen.",

  "Le passé pourrait refaire surface sous la forme d’un souvenir, d’un message ou d’une comparaison. Demandez-vous si cette énergie mérite réellement une nouvelle place dans votre vie.":
    "Die Vergangenheit könnte in Form einer Erinnerung, einer Nachricht oder eines Vergleichs wieder auftauchen. Fragen Sie sich, ob diese Energie wirklich einen neuen Platz in Ihrem Leben verdient.",

  "Une rencontre progressive semble plus favorable qu’une histoire trop intense dès le départ. Ce qui se construit calmement pourrait devenir plus stable.":
    "Eine sich langsam entwickelnde Begegnung scheint günstiger als eine Geschichte, die von Anfang an zu intensiv ist. Was sich in Ruhe aufbaut, könnte stabiler werden.",

  "Vous pourriez être attiré par une personne qui stimule votre curiosité intellectuelle ou émotionnelle. Prenez le temps de découvrir ce qui se cache derrière la première impression.":
    "Sie könnten sich zu einer Person hingezogen fühlen, die Ihre intellektuelle oder emotionale Neugier weckt. Nehmen Sie sich Zeit, herauszufinden, was sich hinter dem ersten Eindruck verbirgt.",

  "Cette année vous invite à ne pas confondre mystère et indisponibilité. Une relation prometteuse doit aussi offrir un minimum de clarté.":
    "Dieses Jahr lädt Sie dazu ein, Geheimnis nicht mit emotionaler Unerreichbarkeit zu verwechseln. Eine vielversprechende Beziehung sollte auch ein Mindestmaß an Klarheit bieten.",

  "Une occasion de rencontre pourrait apparaître dans un contexte habituel : travail, activité, réseau social, voyage ou cercle d’amis.":
    "Eine Gelegenheit für eine Begegnung könnte sich in einem vertrauten Umfeld ergeben: bei der Arbeit, einer Aktivität, in sozialen Netzwerken, auf einer Reise oder im Freundeskreis.",

  "Votre intuition vous aidera à reconnaître une connexion sincère. Vérifiez toutefois que les actions de la personne correspondent bien à ses paroles.":
    "Ihre Intuition wird Ihnen helfen, eine aufrichtige Verbindung zu erkennen. Achten Sie jedoch darauf, dass die Handlungen der Person tatsächlich mit ihren Worten übereinstimmen.",

  /* EMOTIONAL CLIMATE */

  "Vos émotions pourraient traverser plusieurs phases au cours de l’année. Une période plus intense sera suivie d’un retour progressif vers davantage d’équilibre.":
    "Ihre Gefühle könnten im Laufe des Jahres mehrere Phasen durchlaufen. Auf eine intensivere Zeit wird eine allmähliche Rückkehr zu mehr Gleichgewicht folgen.",

  "Vous ressentirez probablement un besoin accru de clarté. Les situations ambiguës deviendront de plus en plus difficiles à tolérer.":
    "Sie werden wahrscheinlich ein stärkeres Bedürfnis nach Klarheit verspüren. Mehrdeutige Situationen werden zunehmend schwerer zu ertragen sein.",

  "Le climat émotionnel favorise une prise de conscience importante. Vous pourriez enfin comprendre pourquoi une situation vous touche autant.":
    "Die emotionale Atmosphäre begünstigt eine wichtige Erkenntnis. Vielleicht verstehen Sie endlich, warum eine bestimmte Situation Sie so tief berührt.",

  "Une sensibilité plus grande peut vous rendre particulièrement réceptif aux gestes d’affection, mais aussi aux silences et aux changements d’attitude.":
    "Eine größere Sensibilität kann Sie besonders empfänglich für liebevolle Gesten machen, aber auch für Schweigen und Veränderungen im Verhalten.",

  "Votre cœur oscillera parfois entre le besoin de proximité et celui de préserver votre espace personnel. Ces deux besoins peuvent parfaitement coexister.":
    "Ihr Herz wird manchmal zwischen dem Bedürfnis nach Nähe und dem Wunsch schwanken, Ihren persönlichen Freiraum zu bewahren. Beide Bedürfnisse können durchaus nebeneinander bestehen.",

  "L’année vous pousse à rechercher des liens plus sécurisants. Vous serez progressivement moins disposé à investir dans des relations imprévisibles.":
    "Das Jahr ermutigt Sie, nach Beziehungen zu suchen, die Ihnen mehr Sicherheit geben. Nach und nach werden Sie weniger bereit sein, in unberechenbare Beziehungen zu investieren.",

  "Une ancienne peur affective pourrait refaire surface. Considérez-la comme une information à comprendre plutôt que comme une vérité absolue.":
    "Eine alte emotionale Angst könnte wieder auftauchen. Betrachten Sie sie als etwas, das verstanden werden möchte, und nicht als absolute Wahrheit.",

  "Votre équilibre relationnel sera influencé par la qualité des échanges. Les paroles vagues pourraient vous fatiguer davantage qu’auparavant.":
    "Ihr Beziehungsgleichgewicht wird von der Qualität Ihrer Gespräche beeinflusst. Unklare Aussagen könnten Sie stärker ermüden als früher.",

  "Vous pourriez ressentir un regain de confiance en vous au fil de l’année. Cette évolution modifiera positivement vos choix affectifs.":
    "Im Laufe des Jahres könnten Sie neues Selbstvertrauen gewinnen. Diese Entwicklung wird Ihre Entscheidungen in der Liebe positiv beeinflussen.",

  "Votre sensibilité vous aidera à percevoir ce qui n’est pas exprimé. Gardez toutefois toujours une place importante pour la communication directe.":
    "Ihre Sensibilität wird Ihnen helfen, auch das wahrzunehmen, was nicht ausgesprochen wird. Geben Sie der direkten Kommunikation dennoch immer einen wichtigen Platz.",

  /* KEY PERIODS */

  "Le début de l’année favorise la réflexion et la clarification. Une situation sentimentale pourrait demander du temps avant de révéler son véritable potentiel.":
    "Der Jahresbeginn begünstigt Reflexion und Klärung. Eine Liebessituation könnte Zeit benötigen, bevor sie ihr wahres Potenzial zeigt.",

  "Le printemps apporte une énergie de rapprochement. Les échanges deviennent plus naturels et une relation peut commencer à évoluer plus rapidement.":
    "Der Frühling bringt eine Energie der Annäherung. Der Austausch wird natürlicher, und eine Beziehung kann beginnen, sich schneller zu entwickeln.",

  "Le milieu de l’année mettra en lumière la réciprocité dans vos relations. Vous verrez plus clairement quels liens méritent votre attention.":
    "Die Jahresmitte wird die Gegenseitigkeit in Ihren Beziehungen hervorheben. Sie werden klarer erkennen, welche Verbindungen Ihre Aufmerksamkeit verdienen.",

  "L’été pourrait favoriser les rencontres, les sorties et les rapprochements spontanés. Une connexion légère peut progressivement gagner en profondeur.":
    "Der Sommer könnte Begegnungen, Unternehmungen und spontane Annäherungen begünstigen. Eine zunächst lockere Verbindung kann allmählich an Tiefe gewinnen.",

  "Une période plus sensible pourrait apparaître autour du milieu de l’année. Elle vous demandera de ne pas prendre chaque réaction comme une remise en question complète du lien.":
    "Um die Jahresmitte könnte eine sensiblere Phase auftreten. Sie wird von Ihnen verlangen, nicht jede Reaktion als vollständiges Infragestellen der Beziehung zu betrachten.",

  "Le début de l’automne encourage les décisions importantes. Une relation pourrait se renforcer, changer de direction ou demander une clarification définitive.":
    "Der Beginn des Herbstes begünstigt wichtige Entscheidungen. Eine Beziehung könnte stärker werden, ihre Richtung ändern oder eine endgültige Klärung erfordern.",

  "La fin de l’année favorise davantage de stabilité. Vous pourriez ressentir le besoin de construire quelque chose de plus concret et de plus sécurisant.":
    "Das Jahresende begünstigt mehr Stabilität. Sie könnten das Bedürfnis verspüren, etwas Konkreteres und Sichereres aufzubauen.",

  "Une première partie d’année introspective sera suivie d’une période plus ouverte aux rapprochements et aux nouvelles expériences.":
    "Auf eine introspektive erste Jahreshälfte folgt eine Phase, die offener für Annäherungen und neue Erfahrungen ist.",

  "Certaines réponses pourraient apparaître au cours du deuxième semestre. Une situation longtemps ambiguë deviendra progressivement plus facile à comprendre.":
    "Einige Antworten könnten sich in der zweiten Jahreshälfte zeigen. Eine lange Zeit unklare Situation wird allmählich leichter zu verstehen sein.",

  "Les périodes les plus favorables seront celles où vous accepterez de communiquer clairement sans chercher à contrôler immédiatement le résultat.":
    "Die günstigsten Phasen werden jene sein, in denen Sie bereit sind, klar zu kommunizieren, ohne sofort das Ergebnis kontrollieren zu wollen.",

  /* CHALLENGE */

  "Le principal défi sera de ne pas interpréter chaque silence comme un rejet ou un changement de sentiment.":
    "Die größte Herausforderung wird darin bestehen, nicht jedes Schweigen als Ablehnung oder Veränderung der Gefühle zu interpretieren.",

  "Évitez de chercher une réponse immédiate à une situation encore en évolution. La précipitation pourrait créer davantage de confusion.":
    "Vermeiden Sie es, sofort eine Antwort auf eine Situation zu suchen, die sich noch entwickelt. Übereiltes Handeln könnte noch mehr Verwirrung schaffen.",

  "Votre besoin de sécurité pourrait vous pousser à vouloir contrôler les réactions de l’autre. Concentrez-vous plutôt sur ce que vous pouvez exprimer clairement.":
    "Ihr Bedürfnis nach Sicherheit könnte Sie dazu bringen, die Reaktionen der anderen Person kontrollieren zu wollen. Konzentrieren Sie sich stattdessen auf das, was Sie klar ausdrücken können.",

  "Une attente non formulée pourrait provoquer de la déception. Les autres ne peuvent pas toujours deviner ce dont vous avez besoin.":
    "Eine unausgesprochene Erwartung könnte zu Enttäuschung führen. Andere können nicht immer erraten, was Sie brauchen.",

  "Le passé ne doit pas décider automatiquement de votre avenir affectif. Une nouvelle relation mérite d’être observée pour ce qu’elle est réellement.":
    "Die Vergangenheit sollte nicht automatisch über Ihre romantische Zukunft entscheiden. Eine neue Beziehung verdient es, so betrachtet zu werden, wie sie tatsächlich ist.",

  "Vous devrez distinguer l’intuition de la peur. L’intuition est généralement calme et précise, tandis que la peur crée de nombreux scénarios.":
    "Sie müssen zwischen Intuition und Angst unterscheiden. Intuition ist meist ruhig und klar, während Angst zahlreiche Szenarien entstehen lässt.",

  "Le besoin de protéger votre cœur pourrait vous rendre plus distant que vous ne le souhaitez réellement. L’ouverture peut rester progressive.":
    "Das Bedürfnis, Ihr Herz zu schützen, könnte Sie distanzierter wirken lassen, als Sie es eigentlich möchten. Öffnung darf schrittweise erfolgen.",

  "Ne cherchez pas à obtenir une preuve d’amour par une confrontation inutile. Une discussion directe sera beaucoup plus constructive.":
    "Versuchen Sie nicht, durch eine unnötige Konfrontation einen Liebesbeweis zu erhalten. Ein direktes Gespräch wird wesentlich konstruktiver sein.",

  "Une différence dans la manière de communiquer pourrait créer une incompréhension. Prenez le temps de vérifier ce que l’autre voulait réellement dire.":
    "Unterschiedliche Kommunikationsweisen könnten zu einem Missverständnis führen. Nehmen Sie sich die Zeit, zu klären, was die andere Person tatsächlich gemeint hat.",

  "Le défi consistera à préserver vos limites sans transformer chaque désaccord en rupture ou en remise en question complète de la relation.":
    "Die Herausforderung wird darin bestehen, Ihre Grenzen zu wahren, ohne jede Meinungsverschiedenheit in eine Trennung oder ein vollständiges Infragestellen der Beziehung zu verwandeln.",

  /* ADVICE */

  "Exprimez vos besoins avec douceur et précision. Une demande claire évitera de nombreuses interprétations inutiles.":
    "Drücken Sie Ihre Bedürfnisse freundlich und klar aus. Eine eindeutige Bitte wird viele unnötige Fehlinterpretationen vermeiden.",

  "Laissez les gestes confirmer les paroles. La régularité d’une personne vous renseignera davantage que ses promesses.":
    "Lassen Sie Taten die Worte bestätigen. Die Beständigkeit einer Person wird Ihnen mehr sagen als ihre Versprechen.",

  "Ne forcez pas une relation à avancer plus rapidement que sa capacité naturelle. Ce qui est solide n’a pas besoin d’être précipité.":
    "Zwingen Sie eine Beziehung nicht dazu, sich schneller zu entwickeln, als es ihrem natürlichen Tempo entspricht. Was stabil ist, muss nicht überstürzt werden.",

  "Accordez de la valeur à la réciprocité. Vous ne devriez pas être la seule personne à entretenir constamment le lien.":
    "Legen Sie Wert auf Gegenseitigkeit. Sie sollten nicht die einzige Person sein, die die Verbindung ständig aufrechterhält.",

  "Prenez le temps d’observer vos réactions avant de répondre sous le coup de l’émotion.":
    "Nehmen Sie sich Zeit, Ihre Reaktionen zu beobachten, bevor Sie aus einer starken Emotion heraus antworten.",

  "Ne vous contentez pas de paroles rassurantes si les comportements demeurent incohérents.":
    "Geben Sie sich nicht mit beruhigenden Worten zufrieden, wenn das Verhalten weiterhin widersprüchlich bleibt.",

  "Conservez vos limites même lorsque votre attachement devient plus fort. Une relation saine ne demande pas de vous abandonner vous-même.":
    "Bewahren Sie Ihre Grenzen, auch wenn Ihre Bindung stärker wird. Eine gesunde Beziehung verlangt nicht, dass Sie sich selbst aufgeben.",

  "Faites confiance aux comportements réguliers, aux gestes simples et à la présence réelle.":
    "Vertrauen Sie auf beständiges Verhalten, einfache Gesten und echte Präsenz.",

  "Choisissez la clarté plutôt que les jeux, les suppositions ou les messages volontairement ambigus.":
    "Entscheiden Sie sich für Klarheit statt für Spielchen, Vermutungen oder absichtlich mehrdeutige Botschaften.",

  "Permettez à la relation d’évoluer naturellement, mais ne restez pas indéfiniment dans une situation qui ne répond jamais à vos besoins.":
    "Lassen Sie die Beziehung sich natürlich entwickeln, aber bleiben Sie nicht unbegrenzt in einer Situation, die Ihre Bedürfnisse niemals erfüllt.",

  /* CONCLUSION */

  "Cette année peut transformer votre manière d’aimer en vous aidant à rechercher davantage de clarté, de stabilité et de réciprocité.":
    "Dieses Jahr kann Ihre Art zu lieben verändern, indem es Ihnen hilft, nach mehr Klarheit, Stabilität und Gegenseitigkeit zu suchen.",

  "Une nouvelle compréhension affective pourrait vous permettre de faire des choix plus respectueux de vos véritables besoins.":
    "Ein neues emotionales Verständnis könnte Ihnen ermöglichen, Entscheidungen zu treffen, die Ihre wahren Bedürfnisse stärker berücksichtigen.",

  "Votre vie sentimentale progressera grâce à votre capacité à communiquer clairement tout en restant attentif aux actions de l’autre.":
    "Ihr Liebesleben wird sich durch Ihre Fähigkeit weiterentwickeln, klar zu kommunizieren und gleichzeitig auf die Handlungen der anderen Person zu achten.",

  "L’année vous rappelle que l’amour véritable ne repose pas uniquement sur l’intensité, mais aussi sur la constance et la sécurité.":
    "Das Jahr erinnert Sie daran, dass wahre Liebe nicht nur auf Intensität beruht, sondern auch auf Beständigkeit und Sicherheit.",

  "Une relation sincère gagne à évoluer dans un climat où chacun peut exprimer ses besoins sans craindre d’être jugé.":
    "Eine aufrichtige Beziehung profitiert von einem Umfeld, in dem beide ihre Bedürfnisse ausdrücken können, ohne Angst vor Verurteilung zu haben.",

  "Vous pourriez terminer l’année avec une vision plus précise de ce que vous êtes prêt à construire et de ce que vous ne voulez plus accepter.":
    "Sie könnten das Jahr mit einer klareren Vorstellung davon beenden, was Sie bereit sind aufzubauen und was Sie nicht länger akzeptieren möchten.",

  "Votre cœur avance vers davantage de maturité. Cette évolution vous aidera à reconnaître plus rapidement les relations réellement compatibles avec vous.":
    "Ihr Herz entwickelt sich zu größerer Reife. Diese Entwicklung wird Ihnen helfen, schneller zu erkennen, welche Beziehungen wirklich zu Ihnen passen.",

  "Les prochains mois peuvent créer un rapprochement important, à condition de laisser suffisamment de place à l’authenticité.":
    "Die kommenden Monate können eine wichtige Annäherung ermöglichen, sofern genügend Raum für Authentizität bleibt.",

  "Une vérité affective pourrait devenir évidente. Elle vous permettra soit de renforcer un lien, soit de vous en libérer avec davantage de sérénité.":
    "Eine emotionale Wahrheit könnte deutlich werden. Sie wird Ihnen ermöglichen, entweder eine Verbindung zu stärken oder sich mit größerer Gelassenheit davon zu lösen.",

  "Votre évolution sentimentale dépendra surtout de votre capacité à choisir les relations qui vous offrent autant de présence que vous leur en donnez.":
    "Ihre Entwicklung in der Liebe wird vor allem von Ihrer Fähigkeit abhängen, Beziehungen zu wählen, die Ihnen ebenso viel Präsenz schenken, wie Sie selbst geben.",
},
  it: {
  "Une année pour écouter votre cœur":
    "Un anno per ascoltare il vostro cuore",

  "Votre vie affective prend une nouvelle direction":
    "La vostra vita sentimentale prende una nuova direzione",

  "Une année de rapprochement et de vérité":
    "Un anno di avvicinamento e verità",

  "Votre cœur recherche un nouvel équilibre":
    "Il vostro cuore cerca un nuovo equilibrio",

  "Un nouveau cycle dans votre vie sentimentale":
    "Un nuovo ciclo nella vostra vita sentimentale",

  "L’amour vous invite à plus d’authenticité":
    "L’amore vi invita a una maggiore autenticità",

  "Une année riche en prises de conscience":
    "Un anno ricco di importanti consapevolezze",

  "Vos sentiments deviennent plus clairs":
    "I vostri sentimenti diventano più chiari",
},
  /* =======================================================
   ITALIAN
======================================================= */

it: {
  /* INTRODUCTION */

  "Votre vie sentimentale entre dans une année de clarification et d’évolution. Les prochains mois vous aideront à mieux comprendre ce que vous attendez réellement de l’amour et des relations.":
    "La vostra vita sentimentale entra in un anno di chiarimento e di evoluzione. I prossimi mesi vi aiuteranno a comprendere meglio ciò che vi aspettate realmente dall’amore e dalle relazioni.",

  "Le climat affectif de l’année vous invite à accorder davantage d’attention à vos besoins profonds. Certaines émotions deviendront plus faciles à reconnaître, à exprimer et à comprendre.":
    "Il clima affettivo dell’anno vi invita a prestare maggiore attenzione ai vostri bisogni più profondi. Alcune emozioni diventeranno più facili da riconoscere, esprimere e comprendere.",

  "Cette année met en lumière votre manière d’aimer, de vous attacher et de créer de la proximité. Une évolution importante pourrait transformer votre vision des relations.":
    "Quest’anno mette in luce il vostro modo di amare, di creare legami e di costruire vicinanza. Un’evoluzione importante potrebbe trasformare la vostra visione delle relazioni.",

  "Votre cœur recherche davantage de sincérité, de stabilité et de réciprocité. Les liens authentiques auront tendance à se renforcer progressivement au fil de l’année.":
    "Il vostro cuore cerca maggiore sincerità, stabilità e reciprocità. I legami autentici tenderanno a rafforzarsi progressivamente nel corso dell’anno.",

  "Une énergie de renouveau traverse votre vie sentimentale. Elle pourrait vous aider à vous libérer d’une attente, d’un doute ou d’une ancienne manière de fonctionner.":
    "Un’energia di rinnovamento attraversa la vostra vita sentimentale. Potrebbe aiutarvi a liberarvi da un’aspettativa, da un dubbio o da un vecchio modo di vivere le relazioni.",

  "Les relations occupent une place particulière cette année. Vous pourriez ressentir le besoin de savoir plus clairement où vous allez et avec qui vous souhaitez réellement avancer.":
    "Le relazioni occupano un posto particolare quest’anno. Potreste sentire il bisogno di capire più chiaramente dove state andando e con chi desiderate realmente proseguire il vostro cammino.",

  "Votre sensibilité affective sera plus présente au cours des prochains mois. Cette année vous aidera à distinguer les liens qui vous nourrissent de ceux qui vous épuisent.":
    "La vostra sensibilità affettiva sarà più presente nei prossimi mesi. Quest’anno vi aiuterà a distinguere i legami che vi nutrono da quelli che vi esauriscono.",

  "Une période d’introspection sentimentale commence. Elle ne vous éloigne pas nécessairement de l’amour, mais vous pousse à rechercher davantage de vérité et de profondeur.":
    "Inizia un periodo di introspezione sentimentale. Non vi allontana necessariamente dall’amore, ma vi spinge a cercare maggiore verità e profondità.",

  "L’année favorise une compréhension plus fine de vos émotions. Vous pourriez enfin mettre des mots sur quelque chose que vous ressentez depuis longtemps.":
    "L’anno favorisce una comprensione più profonda delle vostre emozioni. Potreste finalmente riuscire a esprimere a parole qualcosa che provate da molto tempo.",

  "Votre vie affective évolue vers davantage de maturité. Les gestes constants compteront plus que les promesses impressionnantes ou les émotions passagères.":
    "La vostra vita affettiva evolve verso una maggiore maturità. I gesti costanti conteranno più delle promesse impressionanti o delle emozioni passeggere.",

  /* GENERAL */

  "Les échanges sincères seront essentiels tout au long de l’année. Une conversation posée pourrait rapprocher les points de vue ou permettre de résoudre une tension persistante.":
    "Gli scambi sinceri saranno essenziali durante tutto l’anno. Una conversazione tranquilla potrebbe avvicinare i diversi punti di vista o permettere di risolvere una tensione persistente.",

  "Vous pourriez ressentir un besoin plus fort de sécurité émotionnelle. Évitez toutefois de demander aux autres de deviner ce que vous n’exprimez pas clairement.":
    "Potreste sentire un bisogno più forte di sicurezza emotiva. Evitate tuttavia di aspettarvi che gli altri indovinino ciò che non esprimete chiaramente.",

  "L’année vous invite à observer la réciprocité dans vos relations. Les efforts, l’attention et la présence devront pouvoir circuler dans les deux sens.":
    "L’anno vi invita a osservare la reciprocità nelle vostre relazioni. Gli sforzi, l’attenzione e la presenza dovranno poter fluire in entrambe le direzioni.",

  "Une situation affective pourrait évoluer progressivement. Ne cherchez pas nécessairement une réponse immédiate : certains liens auront besoin de plusieurs mois pour révéler leur véritable direction.":
    "Una situazione affettiva potrebbe evolvere progressivamente. Non cercate necessariamente una risposta immediata: alcuni legami avranno bisogno di diversi mesi per rivelare la loro vera direzione.",

  "Votre intuition relationnelle sera particulièrement vive. Elle vous aidera à ressentir les changements d’ambiance, mais elle devra toujours être accompagnée de faits concrets.":
    "La vostra intuizione nelle relazioni sarà particolarmente intensa. Vi aiuterà a percepire i cambiamenti nell’atmosfera, ma dovrà sempre essere accompagnata da fatti concreti.",

  "Les prochains mois favorisent les rapprochements basés sur la confiance. Une relation sincère pourrait gagner en profondeur grâce à une plus grande vulnérabilité.":
    "I prossimi mesi favoriscono gli avvicinamenti basati sulla fiducia. Una relazione sincera potrebbe acquistare maggiore profondità grazie a una maggiore vulnerabilità.",

  "Votre façon de communiquer vos attentes jouera un rôle important. Une demande simple et précise sera mieux reçue qu’un silence rempli de frustration.":
    "Il modo in cui comunicate le vostre aspettative avrà un ruolo importante. Una richiesta semplice e precisa sarà accolta meglio di un silenzio carico di frustrazione.",

  "Le passé pourrait influencer votre manière d’interpréter une relation actuelle. Prenez soin de ne pas attribuer à une nouvelle personne les erreurs d’une ancienne histoire.":
    "Il passato potrebbe influenzare il modo in cui interpretate una relazione attuale. Fate attenzione a non attribuire a una nuova persona gli errori di una storia precedente.",

  "Une relation pourrait vous demander davantage de patience. Cela ne signifie pas que vous devez tout accepter, mais que certaines réponses apparaîtront progressivement.":
    "Una relazione potrebbe richiedervi maggiore pazienza. Questo non significa che dobbiate accettare tutto, ma che alcune risposte emergeranno progressivamente.",

  "Cette année vous rappelle que l’amour ne doit pas constamment être compliqué pour être profond. La simplicité peut aussi être un signe de solidité.":
    "Quest’anno vi ricorda che l’amore non deve essere costantemente complicato per essere profondo. Anche la semplicità può essere un segno di solidità.",

  /* COUPLE */

  "En couple, plusieurs conversations importantes pourraient vous aider à mieux comprendre les attentes de votre partenaire. L’écoute aura autant de valeur que les mots.":
    "Se siete in coppia, diverse conversazioni importanti potrebbero aiutarvi a comprendere meglio le aspettative del vostro partner. Ascoltare avrà lo stesso valore delle parole.",

  "Votre relation pourrait gagner en profondeur si chacun accepte de parler honnêtement de ses besoins. Évitez de laisser les suppositions remplacer le dialogue.":
    "La vostra relazione potrebbe acquistare maggiore profondità se entrambi accetterete di parlare onestamente dei vostri bisogni. Evitate che le supposizioni sostituiscano il dialogo.",

  "Un projet partagé pourrait renforcer votre complicité. Une décision concernant le quotidien, le foyer ou l’avenir peut vous donner l’impression d’avancer dans la même direction.":
    "Un progetto condiviso potrebbe rafforzare la vostra complicità. Una decisione riguardante la vita quotidiana, la casa o il futuro può darvi la sensazione di procedere nella stessa direzione.",

  "Une ancienne tension peut progressivement commencer à s’apaiser. Pour y parvenir, il faudra toutefois éviter de vouloir déterminer constamment qui avait raison ou tort.":
    "Una vecchia tensione può iniziare gradualmente ad attenuarsi. Per riuscirci, sarà tuttavia necessario evitare di voler stabilire continuamente chi aveva ragione o torto.",

  "Votre partenaire pourrait avoir besoin de davantage de présence à certains moments de l’année. Un geste attentif aura parfois plus d’effet qu’une grande promesse.":
    "Il vostro partner potrebbe avere bisogno di una maggiore presenza in alcuni momenti dell’anno. Un gesto premuroso avrà talvolta più effetto di una grande promessa.",

  "L’année favorise un rapprochement émotionnel. Vous pourriez redécouvrir une facette de votre relation que la routine avait progressivement mise de côté.":
    "L’anno favorisce un avvicinamento emotivo. Potreste riscoprire un aspetto della vostra relazione che la routine aveva progressivamente messo da parte.",

  "Une différence de rythme pourrait créer quelques incompréhensions. Respectez les besoins de chacun sans interpréter automatiquement la distance comme un manque d’amour.":
    "Una differenza di ritmo potrebbe creare qualche incomprensione. Rispettate i bisogni di entrambi senza interpretare automaticamente la distanza come una mancanza d’amore.",

  "Votre couple pourrait être amené à prendre une décision concrète. Accordez-vous le temps de vérifier qu’elle respecte les priorités des deux partenaires.":
    "La vostra coppia potrebbe trovarsi a dover prendere una decisione concreta. Concedetevi il tempo necessario per verificare che rispetti le priorità di entrambi.",

  "La complicité se développera grâce aux gestes simples et réguliers. Les moments partagés renforceront davantage votre lien que les démonstrations occasionnelles.":
    "La complicità crescerà grazie a gesti semplici e costanti. I momenti condivisi rafforzeranno il vostro legame più delle dimostrazioni occasionali.",

  "Votre relation évoluera si chacun accepte de laisser davantage de place à l’expression émotionnelle. La vulnérabilité peut rendre votre lien plus sincère et plus solide.":
    "La vostra relazione evolverà se entrambi accetterete di lasciare più spazio all’espressione emotiva. La vulnerabilità può rendere il vostro legame più sincero e più solido.",

  /* SINGLE */

  "Célibataire, une rencontre pourrait commencer par une conversation légère avant de prendre une signification plus profonde au fil des mois.":
    "Se siete single, un incontro potrebbe iniziare con una conversazione leggera prima di assumere un significato più profondo nel corso dei mesi.",

  "Une personne différente de vos habitudes pourrait attirer votre attention. Ne rejetez pas trop rapidement une connexion parce qu’elle ne ressemble pas à vos histoires précédentes.":
    "Una persona diversa dal vostro tipo abituale potrebbe attirare la vostra attenzione. Non scartate troppo rapidamente un legame solo perché non assomiglia alle vostre storie precedenti.",

  "Votre pouvoir d’attraction sera plus visible lorsque vous cesserez de vouloir contrôler l’impression que vous donnez. Votre authenticité sera votre meilleur atout.":
    "Il vostro potere di attrazione sarà più evidente quando smetterete di cercare di controllare l’impressione che date. La vostra autenticità sarà il vostro punto di forza migliore.",

  "Une nouvelle connexion pourrait évoluer lentement. Laissez les comportements réguliers vous montrer les véritables intentions de l’autre personne.":
    "Un nuovo legame potrebbe evolvere lentamente. Lasciate che i comportamenti costanti vi mostrino le vere intenzioni dell’altra persona.",

  "Le passé pourrait refaire surface sous la forme d’un souvenir, d’un message ou d’une comparaison. Demandez-vous si cette énergie mérite réellement une nouvelle place dans votre vie.":
    "Il passato potrebbe riaffiorare sotto forma di un ricordo, di un messaggio o di un confronto. Chiedetevi se questa energia merita davvero un nuovo posto nella vostra vita.",

  "Une rencontre progressive semble plus favorable qu’une histoire trop intense dès le départ. Ce qui se construit calmement pourrait devenir plus stable.":
    "Un incontro che si sviluppa gradualmente sembra più favorevole di una storia troppo intensa fin dall’inizio. Ciò che viene costruito con calma potrebbe diventare più stabile.",

  "Vous pourriez être attiré par une personne qui stimule votre curiosité intellectuelle ou émotionnelle. Prenez le temps de découvrir ce qui se cache derrière la première impression.":
    "Potreste sentirvi attratti da una persona che stimola la vostra curiosità intellettuale o emotiva. Prendetevi il tempo necessario per scoprire ciò che si nasconde dietro la prima impressione.",

  "Cette année vous invite à ne pas confondre mystère et indisponibilité. Une relation prometteuse doit aussi offrir un minimum de clarté.":
    "Quest’anno vi invita a non confondere il mistero con l’indisponibilità emotiva. Una relazione promettente deve offrire anche un minimo di chiarezza.",

  "Une occasion de rencontre pourrait apparaître dans un contexte habituel : travail, activité, réseau social, voyage ou cercle d’amis.":
    "Un’occasione di incontro potrebbe presentarsi in un contesto abituale: lavoro, attività, social network, viaggio o cerchia di amici.",

  "Votre intuition vous aidera à reconnaître une connexion sincère. Vérifiez toutefois que les actions de la personne correspondent bien à ses paroles.":
    "La vostra intuizione vi aiuterà a riconoscere un legame sincero. Verificate tuttavia che le azioni della persona corrispondano davvero alle sue parole.",

  /* EMOTIONAL CLIMATE */

  "Vos émotions pourraient traverser plusieurs phases au cours de l’année. Une période plus intense sera suivie d’un retour progressif vers davantage d’équilibre.":
    "Le vostre emozioni potrebbero attraversare diverse fasi nel corso dell’anno. A un periodo più intenso seguirà un graduale ritorno verso un maggiore equilibrio.",

  "Vous ressentirez probablement un besoin accru de clarté. Les situations ambiguës deviendront de plus en plus difficiles à tolérer.":
    "Probabilmente sentirete un bisogno crescente di chiarezza. Le situazioni ambigue diventeranno sempre più difficili da tollerare.",

  "Le climat émotionnel favorise une prise de conscience importante. Vous pourriez enfin comprendre pourquoi une situation vous touche autant.":
    "Il clima emotivo favorisce una presa di coscienza importante. Potreste finalmente comprendere perché una determinata situazione vi tocca così profondamente.",

  "Une sensibilité plus grande peut vous rendre particulièrement réceptif aux gestes d’affection, mais aussi aux silences et aux changements d’attitude.":
    "Una maggiore sensibilità può rendervi particolarmente ricettivi ai gesti d’affetto, ma anche ai silenzi e ai cambiamenti di atteggiamento.",

  "Votre cœur oscillera parfois entre le besoin de proximité et celui de préserver votre espace personnel. Ces deux besoins peuvent parfaitement coexister.":
    "Il vostro cuore oscillerà talvolta tra il bisogno di vicinanza e quello di preservare il vostro spazio personale. Questi due bisogni possono coesistere perfettamente.",

  "L’année vous pousse à rechercher des liens plus sécurisants. Vous serez progressivement moins disposé à investir dans des relations imprévisibles.":
    "L’anno vi spinge a cercare legami che offrano maggiore sicurezza. Progressivamente sarete meno disposti a investire in relazioni imprevedibili.",

  "Une ancienne peur affective pourrait refaire surface. Considérez-la comme une information à comprendre plutôt que comme une vérité absolue.":
    "Una vecchia paura affettiva potrebbe riaffiorare. Consideratela come un’informazione da comprendere piuttosto che come una verità assoluta.",

  "Votre équilibre relationnel sera influencé par la qualité des échanges. Les paroles vagues pourraient vous fatiguer davantage qu’auparavant.":
    "Il vostro equilibrio nelle relazioni sarà influenzato dalla qualità degli scambi. Le parole vaghe potrebbero stancarvi più di quanto accadesse in passato.",

  "Vous pourriez ressentir un regain de confiance en vous au fil de l’année. Cette évolution modifiera positivement vos choix affectifs.":
    "Potreste ritrovare una maggiore fiducia in voi stessi nel corso dell’anno. Questa evoluzione influenzerà positivamente le vostre scelte sentimentali.",

  "Votre sensibilité vous aidera à percevoir ce qui n’est pas exprimé. Gardez toutefois toujours une place importante pour la communication directe.":
    "La vostra sensibilità vi aiuterà a percepire ciò che non viene espresso. Lasciate tuttavia sempre uno spazio importante alla comunicazione diretta.",

  /* KEY PERIODS */

  "Le début de l’année favorise la réflexion et la clarification. Une situation sentimentale pourrait demander du temps avant de révéler son véritable potentiel.":
    "L’inizio dell’anno favorisce la riflessione e il chiarimento. Una situazione sentimentale potrebbe richiedere tempo prima di rivelare il suo vero potenziale.",

  "Le printemps apporte une énergie de rapprochement. Les échanges deviennent plus naturels et une relation peut commencer à évoluer plus rapidement.":
    "La primavera porta un’energia di avvicinamento. Gli scambi diventano più naturali e una relazione può iniziare a evolvere più rapidamente.",

  "Le milieu de l’année mettra en lumière la réciprocité dans vos relations. Vous verrez plus clairement quels liens méritent votre attention.":
    "La metà dell’anno metterà in evidenza la reciprocità nelle vostre relazioni. Vedrete più chiaramente quali legami meritano la vostra attenzione.",

  "L’été pourrait favoriser les rencontres, les sorties et les rapprochements spontanés. Une connexion légère peut progressivement gagner en profondeur.":
    "L’estate potrebbe favorire gli incontri, le uscite e gli avvicinamenti spontanei. Un legame inizialmente leggero può acquisire progressivamente maggiore profondità.",

  "Une période plus sensible pourrait apparaître autour du milieu de l’année. Elle vous demandera de ne pas prendre chaque réaction comme une remise en question complète du lien.":
    "Un periodo più delicato potrebbe presentarsi intorno alla metà dell’anno. Vi chiederà di non interpretare ogni reazione come una messa in discussione completa del legame.",

  "Le début de l’automne encourage les décisions importantes. Une relation pourrait se renforcer, changer de direction ou demander une clarification définitive.":
    "L’inizio dell’autunno favorisce le decisioni importanti. Una relazione potrebbe rafforzarsi, cambiare direzione o richiedere un chiarimento definitivo.",

  "La fin de l’année favorise davantage de stabilité. Vous pourriez ressentir le besoin de construire quelque chose de plus concret et de plus sécurisant.":
    "La fine dell’anno favorisce una maggiore stabilità. Potreste sentire il bisogno di costruire qualcosa di più concreto e rassicurante.",

  "Une première partie d’année introspective sera suivie d’une période plus ouverte aux rapprochements et aux nouvelles expériences.":
    "Una prima parte dell’anno più introspettiva sarà seguita da un periodo più aperto agli avvicinamenti e alle nuove esperienze.",

  "Certaines réponses pourraient apparaître au cours du deuxième semestre. Une situation longtemps ambiguë deviendra progressivement plus facile à comprendre.":
    "Alcune risposte potrebbero emergere durante la seconda metà dell’anno. Una situazione rimasta a lungo ambigua diventerà progressivamente più facile da comprendere.",

  "Les périodes les plus favorables seront celles où vous accepterez de communiquer clairement sans chercher à contrôler immédiatement le résultat.":
    "I periodi più favorevoli saranno quelli in cui accetterete di comunicare con chiarezza senza cercare di controllare immediatamente il risultato.",

  /* CHALLENGE */

  "Le principal défi sera de ne pas interpréter chaque silence comme un rejet ou un changement de sentiment.":
    "La sfida principale sarà non interpretare ogni silenzio come un rifiuto o un cambiamento nei sentimenti.",

  "Évitez de chercher une réponse immédiate à une situation encore en évolution. La précipitation pourrait créer davantage de confusion.":
    "Evitate di cercare una risposta immediata a una situazione ancora in evoluzione. La fretta potrebbe creare maggiore confusione.",

  "Votre besoin de sécurité pourrait vous pousser à vouloir contrôler les réactions de l’autre. Concentrez-vous plutôt sur ce que vous pouvez exprimer clairement.":
    "Il vostro bisogno di sicurezza potrebbe spingervi a voler controllare le reazioni dell’altra persona. Concentratevi invece su ciò che potete esprimere chiaramente.",

  "Une attente non formulée pourrait provoquer de la déception. Les autres ne peuvent pas toujours deviner ce dont vous avez besoin.":
    "Un’aspettativa non espressa potrebbe provocare delusione. Gli altri non possono sempre indovinare ciò di cui avete bisogno.",

  "Le passé ne doit pas décider automatiquement de votre avenir affectif. Une nouvelle relation mérite d’être observée pour ce qu’elle est réellement.":
    "Il passato non deve decidere automaticamente il vostro futuro sentimentale. Una nuova relazione merita di essere osservata per ciò che è realmente.",

  "Vous devrez distinguer l’intuition de la peur. L’intuition est généralement calme et précise, tandis que la peur crée de nombreux scénarios.":
    "Dovrete distinguere l’intuizione dalla paura. L’intuizione è generalmente calma e precisa, mentre la paura crea numerosi scenari.",

  "Le besoin de protéger votre cœur pourrait vous rendre plus distant que vous ne le souhaitez réellement. L’ouverture peut rester progressive.":
    "Il bisogno di proteggere il vostro cuore potrebbe rendervi più distanti di quanto desideriate realmente. L’apertura può avvenire gradualmente.",

  "Ne cherchez pas à obtenir une preuve d’amour par une confrontation inutile. Une discussion directe sera beaucoup plus constructive.":
    "Non cercate di ottenere una prova d’amore attraverso un confronto inutile. Una conversazione diretta sarà molto più costruttiva.",

  "Une différence dans la manière de communiquer pourrait créer une incompréhension. Prenez le temps de vérifier ce que l’autre voulait réellement dire.":
    "Una differenza nel modo di comunicare potrebbe creare un malinteso. Prendetevi il tempo necessario per verificare ciò che l’altra persona voleva realmente dire.",

  "Le défi consistera à préserver vos limites sans transformer chaque désaccord en rupture ou en remise en question complète de la relation.":
    "La sfida consisterà nel preservare i vostri limiti senza trasformare ogni disaccordo in una rottura o in una messa in discussione completa della relazione.",

  /* ADVICE */

  "Exprimez vos besoins avec douceur et précision. Une demande claire évitera de nombreuses interprétations inutiles.":
    "Esprimete i vostri bisogni con gentilezza e precisione. Una richiesta chiara eviterà molte interpretazioni inutili.",

  "Laissez les gestes confirmer les paroles. La régularité d’une personne vous renseignera davantage que ses promesses.":
    "Lasciate che i gesti confermino le parole. La costanza di una persona vi dirà più delle sue promesse.",

  "Ne forcez pas une relation à avancer plus rapidement que sa capacité naturelle. Ce qui est solide n’a pas besoin d’être précipité.":
    "Non forzate una relazione ad avanzare più rapidamente del suo ritmo naturale. Ciò che è solido non ha bisogno di essere affrettato.",

  "Accordez de la valeur à la réciprocité. Vous ne devriez pas être la seule personne à entretenir constamment le lien.":
    "Date valore alla reciprocità. Non dovreste essere l’unica persona a mantenere costantemente vivo il legame.",

  "Prenez le temps d’observer vos réactions avant de répondre sous le coup de l’émotion.":
    "Prendetevi il tempo di osservare le vostre reazioni prima di rispondere sotto l’impulso dell’emozione.",

  "Ne vous contentez pas de paroles rassurantes si les comportements demeurent incohérents.":
    "Non accontentatevi di parole rassicuranti se i comportamenti rimangono incoerenti.",

  "Conservez vos limites même lorsque votre attachement devient plus fort. Une relation saine ne demande pas de vous abandonner vous-même.":
    "Mantenete i vostri limiti anche quando il vostro attaccamento diventa più forte. Una relazione sana non vi chiede di rinunciare a voi stessi.",

  "Faites confiance aux comportements réguliers, aux gestes simples et à la présence réelle.":
    "Fidatevi dei comportamenti costanti, dei gesti semplici e della presenza autentica.",

  "Choisissez la clarté plutôt que les jeux, les suppositions ou les messages volontairement ambigus.":
    "Scegliete la chiarezza invece dei giochi, delle supposizioni o dei messaggi volutamente ambigui.",

  "Permettez à la relation d’évoluer naturellement, mais ne restez pas indéfiniment dans une situation qui ne répond jamais à vos besoins.":
    "Permettete alla relazione di evolvere naturalmente, ma non rimanete indefinitamente in una situazione che non risponde mai ai vostri bisogni.",

  /* CONCLUSION */

  "Cette année peut transformer votre manière d’aimer en vous aidant à rechercher davantage de clarté, de stabilité et de réciprocité.":
    "Quest’anno può trasformare il vostro modo di amare aiutandovi a cercare maggiore chiarezza, stabilità e reciprocità.",

  "Une nouvelle compréhension affective pourrait vous permettre de faire des choix plus respectueux de vos véritables besoins.":
    "Una nuova comprensione affettiva potrebbe permettervi di fare scelte più rispettose dei vostri reali bisogni.",

  "Votre vie sentimentale progressera grâce à votre capacité à communiquer clairement tout en restant attentif aux actions de l’autre.":
    "La vostra vita sentimentale progredirà grazie alla vostra capacità di comunicare con chiarezza rimanendo attenti alle azioni dell’altra persona.",

  "L’année vous rappelle que l’amour véritable ne repose pas uniquement sur l’intensité, mais aussi sur la constance et la sécurité.":
    "L’anno vi ricorda che il vero amore non si basa soltanto sull’intensità, ma anche sulla costanza e sulla sicurezza.",

  "Une relation sincère gagne à évoluer dans un climat où chacun peut exprimer ses besoins sans craindre d’être jugé.":
    "Una relazione sincera trae beneficio da un clima in cui entrambi possono esprimere i propri bisogni senza temere di essere giudicati.",

  "Vous pourriez terminer l’année avec une vision plus précise de ce que vous êtes prêt à construire et de ce que vous ne voulez plus accepter.":
    "Potreste concludere l’anno con una visione più chiara di ciò che siete disposti a costruire e di ciò che non volete più accettare.",

  "Votre cœur avance vers davantage de maturité. Cette évolution vous aidera à reconnaître plus rapidement les relations réellement compatibles avec vous.":
    "Il vostro cuore avanza verso una maggiore maturità. Questa evoluzione vi aiuterà a riconoscere più rapidamente le relazioni realmente compatibili con voi.",

  "Les prochains mois peuvent créer un rapprochement important, à condition de laisser suffisamment de place à l’authenticité.":
    "I prossimi mesi possono favorire un avvicinamento importante, a condizione di lasciare abbastanza spazio all’autenticità.",

  "Une vérité affective pourrait devenir évidente. Elle vous permettra soit de renforcer un lien, soit de vous en libérer avec davantage de sérénité.":
    "Una verità affettiva potrebbe diventare evidente. Vi permetterà di rafforzare un legame oppure di liberarvene con maggiore serenità.",

  "Votre évolution sentimentale dépendra surtout de votre capacité à choisir les relations qui vous offrent autant de présence que vous leur en donnez.":
    "La vostra evoluzione sentimentale dipenderà soprattutto dalla capacità di scegliere relazioni che vi offrano tanta presenza quanta ne date voi.",
},
  pt: {
  "Une année pour écouter votre cœur":
    "Um ano para ouvir o seu coração",

  "Votre vie affective prend une nouvelle direction":
    "Sua vida amorosa toma uma nova direção",

  "Une année de rapprochement et de vérité":
    "Um ano de aproximação e verdade",

  "Votre cœur recherche un nouvel équilibre":
    "Seu coração busca um novo equilíbrio",

  "Un nouveau cycle dans votre vie sentimentale":
    "Um novo ciclo em sua vida amorosa",

  "L’amour vous invite à plus d’authenticité":
    "O amor convida você a viver com mais autenticidade",

  "Une année riche en prises de conscience":
    "Um ano repleto de importantes tomadas de consciência",

  "Vos sentiments deviennent plus clairs":
    "Seus sentimentos se tornam mais claros",
},
  /* =======================================================
   PORTUGUESE — BRAZIL
======================================================= */

pt: {
  /* INTRODUCTION */

  "Votre vie sentimentale entre dans une année de clarification et d’évolution. Les prochains mois vous aideront à mieux comprendre ce que vous attendez réellement de l’amour et des relations.":
    "Sua vida amorosa entra em um ano de esclarecimento e evolução. Os próximos meses ajudarão você a compreender melhor o que realmente espera do amor e dos relacionamentos.",

  "Le climat affectif de l’année vous invite à accorder davantage d’attention à vos besoins profonds. Certaines émotions deviendront plus faciles à reconnaître, à exprimer et à comprendre.":
    "O clima afetivo do ano convida você a prestar mais atenção às suas necessidades mais profundas. Algumas emoções se tornarão mais fáceis de reconhecer, expressar e compreender.",

  "Cette année met en lumière votre manière d’aimer, de vous attacher et de créer de la proximité. Une évolution importante pourrait transformer votre vision des relations.":
    "Este ano destaca sua maneira de amar, criar vínculos e construir proximidade. Uma evolução importante poderá transformar sua visão dos relacionamentos.",

  "Votre cœur recherche davantage de sincérité, de stabilité et de réciprocité. Les liens authentiques auront tendance à se renforcer progressivement au fil de l’année.":
    "Seu coração busca mais sinceridade, estabilidade e reciprocidade. Os vínculos autênticos tenderão a se fortalecer progressivamente ao longo do ano.",

  "Une énergie de renouveau traverse votre vie sentimentale. Elle pourrait vous aider à vous libérer d’une attente, d’un doute ou d’une ancienne manière de fonctionner.":
    "Uma energia de renovação atravessa sua vida amorosa. Ela poderá ajudar você a se libertar de uma expectativa, de uma dúvida ou de uma antiga maneira de se relacionar.",

  "Les relations occupent une place particulière cette année. Vous pourriez ressentir le besoin de savoir plus clairement où vous allez et avec qui vous souhaitez réellement avancer.":
    "Os relacionamentos ocupam um lugar especial neste ano. Você poderá sentir a necessidade de compreender com mais clareza para onde está indo e com quem realmente deseja seguir em frente.",

  "Votre sensibilité affective sera plus présente au cours des prochains mois. Cette année vous aidera à distinguer les liens qui vous nourrissent de ceux qui vous épuisent.":
    "Sua sensibilidade afetiva estará mais presente nos próximos meses. Este ano ajudará você a distinguir os vínculos que lhe fazem bem daqueles que esgotam sua energia.",

  "Une période d’introspection sentimentale commence. Elle ne vous éloigne pas nécessairement de l’amour, mais vous pousse à rechercher davantage de vérité et de profondeur.":
    "Começa um período de introspecção sentimental. Ele não necessariamente afasta você do amor, mas incentiva a busca por mais verdade e profundidade.",

  "L’année favorise une compréhension plus fine de vos émotions. Vous pourriez enfin mettre des mots sur quelque chose que vous ressentez depuis longtemps.":
    "O ano favorece uma compreensão mais profunda de suas emoções. Você poderá finalmente encontrar palavras para expressar algo que sente há muito tempo.",

  "Votre vie affective évolue vers davantage de maturité. Les gestes constants compteront plus que les promesses impressionnantes ou les émotions passagères.":
    "Sua vida afetiva evolui em direção a uma maior maturidade. Gestos consistentes terão mais valor do que promessas impressionantes ou emoções passageiras.",

  /* GENERAL */

  "Les échanges sincères seront essentiels tout au long de l’année. Une conversation posée pourrait rapprocher les points de vue ou permettre de résoudre une tension persistante.":
    "Conversas sinceras serão essenciais ao longo de todo o ano. Um diálogo tranquilo poderá aproximar diferentes pontos de vista ou ajudar a resolver uma tensão persistente.",

  "Vous pourriez ressentir un besoin plus fort de sécurité émotionnelle. Évitez toutefois de demander aux autres de deviner ce que vous n’exprimez pas clairement.":
    "Você poderá sentir uma necessidade maior de segurança emocional. No entanto, evite esperar que os outros adivinhem aquilo que você não expressa claramente.",

  "L’année vous invite à observer la réciprocité dans vos relations. Les efforts, l’attention et la présence devront pouvoir circuler dans les deux sens.":
    "O ano convida você a observar a reciprocidade em seus relacionamentos. Esforço, atenção e presença precisam existir dos dois lados.",

  "Une situation affective pourrait évoluer progressivement. Ne cherchez pas nécessairement une réponse immédiate : certains liens auront besoin de plusieurs mois pour révéler leur véritable direction.":
    "Uma situação afetiva poderá evoluir gradualmente. Não procure necessariamente uma resposta imediata: alguns vínculos precisarão de vários meses para revelar sua verdadeira direção.",

  "Votre intuition relationnelle sera particulièrement vive. Elle vous aidera à ressentir les changements d’ambiance, mais elle devra toujours être accompagnée de faits concrets.":
    "Sua intuição nos relacionamentos estará particularmente aguçada. Ela ajudará você a perceber mudanças no ambiente emocional, mas deverá sempre ser acompanhada por fatos concretos.",

  "Les prochains mois favorisent les rapprochements basés sur la confiance. Une relation sincère pourrait gagner en profondeur grâce à une plus grande vulnérabilité.":
    "Os próximos meses favorecem aproximações baseadas na confiança. Um relacionamento sincero poderá ganhar profundidade graças a uma maior abertura emocional.",

  "Votre façon de communiquer vos attentes jouera un rôle important. Une demande simple et précise sera mieux reçue qu’un silence rempli de frustration.":
    "A maneira como você comunica suas expectativas terá um papel importante. Um pedido simples e claro será melhor recebido do que um silêncio carregado de frustração.",

  "Le passé pourrait influencer votre manière d’interpréter une relation actuelle. Prenez soin de ne pas attribuer à une nouvelle personne les erreurs d’une ancienne histoire.":
    "O passado poderá influenciar sua maneira de interpretar um relacionamento atual. Tome cuidado para não atribuir a uma nova pessoa os erros de uma história anterior.",

  "Une relation pourrait vous demander davantage de patience. Cela ne signifie pas que vous devez tout accepter, mais que certaines réponses apparaîtront progressivement.":
    "Um relacionamento poderá exigir mais paciência de sua parte. Isso não significa que você deva aceitar tudo, mas que algumas respostas surgirão gradualmente.",

  "Cette année vous rappelle que l’amour ne doit pas constamment être compliqué pour être profond. La simplicité peut aussi être un signe de solidité.":
    "Este ano lembra você de que o amor não precisa ser constantemente complicado para ser profundo. A simplicidade também pode ser um sinal de solidez.",

  /* COUPLE */

  "En couple, plusieurs conversations importantes pourraient vous aider à mieux comprendre les attentes de votre partenaire. L’écoute aura autant de valeur que les mots.":
    "Se você está em um relacionamento, várias conversas importantes poderão ajudar a compreender melhor as expectativas de seu parceiro ou parceira. Saber ouvir terá tanto valor quanto as palavras.",

  "Votre relation pourrait gagner en profondeur si chacun accepte de parler honnêtement de ses besoins. Évitez de laisser les suppositions remplacer le dialogue.":
    "Seu relacionamento poderá ganhar profundidade se ambos aceitarem falar honestamente sobre suas necessidades. Evitem deixar que suposições substituam o diálogo.",

  "Un projet partagé pourrait renforcer votre complicité. Une décision concernant le quotidien, le foyer ou l’avenir peut vous donner l’impression d’avancer dans la même direction.":
    "Um projeto compartilhado poderá fortalecer a cumplicidade entre vocês. Uma decisão relacionada à rotina, ao lar ou ao futuro poderá trazer a sensação de que estão avançando na mesma direção.",

  "Une ancienne tension peut progressivement commencer à s’apaiser. Pour y parvenir, il faudra toutefois éviter de vouloir déterminer constamment qui avait raison ou tort.":
    "Uma antiga tensão poderá começar a diminuir gradualmente. Para isso, porém, será importante evitar a necessidade constante de determinar quem estava certo ou errado.",

  "Votre partenaire pourrait avoir besoin de davantage de présence à certains moments de l’année. Un geste attentif aura parfois plus d’effet qu’une grande promesse.":
    "Seu parceiro ou parceira poderá precisar de mais presença em determinados momentos do ano. Um gesto atencioso poderá ter mais efeito do que uma grande promessa.",

  "L’année favorise un rapprochement émotionnel. Vous pourriez redécouvrir une facette de votre relation que la routine avait progressivement mise de côté.":
    "O ano favorece uma aproximação emocional. Você poderá redescobrir um aspecto de seu relacionamento que a rotina havia deixado gradualmente de lado.",

  "Une différence de rythme pourrait créer quelques incompréhensions. Respectez les besoins de chacun sans interpréter automatiquement la distance comme un manque d’amour.":
    "Uma diferença de ritmo poderá provocar alguns mal-entendidos. Respeitem as necessidades de cada um sem interpretar automaticamente a distância como falta de amor.",

  "Votre couple pourrait être amené à prendre une décision concrète. Accordez-vous le temps de vérifier qu’elle respecte les priorités des deux partenaires.":
    "Vocês poderão precisar tomar uma decisão concreta como casal. Reservem tempo para verificar se ela respeita as prioridades de ambos.",

  "La complicité se développera grâce aux gestes simples et réguliers. Les moments partagés renforceront davantage votre lien que les démonstrations occasionnelles.":
    "A cumplicidade crescerá por meio de gestos simples e constantes. Os momentos compartilhados fortalecerão mais o vínculo do que demonstrações ocasionais.",

  "Votre relation évoluera si chacun accepte de laisser davantage de place à l’expression émotionnelle. La vulnérabilité peut rendre votre lien plus sincère et plus solide.":
    "Seu relacionamento evoluirá se ambos aceitarem dar mais espaço à expressão emocional. A vulnerabilidade pode tornar o vínculo mais sincero e mais sólido.",

  /* SINGLE */

  "Célibataire, une rencontre pourrait commencer par une conversation légère avant de prendre une signification plus profonde au fil des mois.":
    "Se você está solteiro ou solteira, um encontro poderá começar com uma conversa leve antes de adquirir um significado mais profundo ao longo dos meses.",

  "Une personne différente de vos habitudes pourrait attirer votre attention. Ne rejetez pas trop rapidement une connexion parce qu’elle ne ressemble pas à vos histoires précédentes.":
    "Uma pessoa diferente do seu padrão habitual poderá chamar sua atenção. Não descarte rapidamente uma conexão apenas porque ela não se parece com suas histórias anteriores.",

  "Votre pouvoir d’attraction sera plus visible lorsque vous cesserez de vouloir contrôler l’impression que vous donnez. Votre authenticité sera votre meilleur atout.":
    "Seu poder de atração ficará mais evidente quando você deixar de tentar controlar a impressão que causa. Sua autenticidade será seu maior trunfo.",

  "Une nouvelle connexion pourrait évoluer lentement. Laissez les comportements réguliers vous montrer les véritables intentions de l’autre personne.":
    "Uma nova conexão poderá evoluir lentamente. Deixe que comportamentos consistentes revelem as verdadeiras intenções da outra pessoa.",

  "Le passé pourrait refaire surface sous la forme d’un souvenir, d’un message ou d’une comparaison. Demandez-vous si cette énergie mérite réellement une nouvelle place dans votre vie.":
    "O passado poderá ressurgir na forma de uma lembrança, de uma mensagem ou de uma comparação. Pergunte a si mesmo se essa energia realmente merece um novo espaço em sua vida.",

  "Une rencontre progressive semble plus favorable qu’une histoire trop intense dès le départ. Ce qui se construit calmement pourrait devenir plus stable.":
    "Um encontro que evolui gradualmente parece mais favorável do que uma história intensa demais desde o início. Aquilo que é construído com calma poderá se tornar mais estável.",

  "Vous pourriez être attiré par une personne qui stimule votre curiosité intellectuelle ou émotionnelle. Prenez le temps de découvrir ce qui se cache derrière la première impression.":
    "Você poderá se sentir atraído por alguém que desperta sua curiosidade intelectual ou emocional. Reserve um tempo para descobrir o que existe além da primeira impressão.",

  "Cette année vous invite à ne pas confondre mystère et indisponibilité. Une relation prometteuse doit aussi offrir un minimum de clarté.":
    "Este ano convida você a não confundir mistério com indisponibilidade emocional. Um relacionamento promissor também precisa oferecer um mínimo de clareza.",

  "Une occasion de rencontre pourrait apparaître dans un contexte habituel : travail, activité, réseau social, voyage ou cercle d’amis.":
    "Uma oportunidade de conhecer alguém poderá surgir em um contexto habitual: trabalho, atividade, rede social, viagem ou círculo de amigos.",

  "Votre intuition vous aidera à reconnaître une connexion sincère. Vérifiez toutefois que les actions de la personne correspondent bien à ses paroles.":
    "Sua intuição ajudará você a reconhecer uma conexão sincera. No entanto, verifique se as atitudes da pessoa realmente correspondem às suas palavras.",

  /* EMOTIONAL CLIMATE */

  "Vos émotions pourraient traverser plusieurs phases au cours de l’année. Une période plus intense sera suivie d’un retour progressif vers davantage d’équilibre.":
    "Suas emoções poderão passar por várias fases ao longo do ano. Um período mais intenso será seguido por um retorno gradual a um maior equilíbrio.",

  "Vous ressentirez probablement un besoin accru de clarté. Les situations ambiguës deviendront de plus en plus difficiles à tolérer.":
    "Você provavelmente sentirá uma necessidade maior de clareza. Situações ambíguas se tornarão cada vez mais difíceis de tolerar.",

  "Le climat émotionnel favorise une prise de conscience importante. Vous pourriez enfin comprendre pourquoi une situation vous touche autant.":
    "O clima emocional favorece uma importante tomada de consciência. Você poderá finalmente compreender por que determinada situação afeta tanto você.",

  "Une sensibilité plus grande peut vous rendre particulièrement réceptif aux gestes d’affection, mais aussi aux silences et aux changements d’attitude.":
    "Uma sensibilidade maior poderá tornar você particularmente receptivo aos gestos de carinho, mas também aos silêncios e às mudanças de comportamento.",

  "Votre cœur oscillera parfois entre le besoin de proximité et celui de préserver votre espace personnel. Ces deux besoins peuvent parfaitement coexister.":
    "Seu coração poderá oscilar entre a necessidade de proximidade e a vontade de preservar seu espaço pessoal. Essas duas necessidades podem coexistir perfeitamente.",

  "L’année vous pousse à rechercher des liens plus sécurisants. Vous serez progressivement moins disposé à investir dans des relations imprévisibles.":
    "O ano incentiva você a buscar vínculos que ofereçam mais segurança. Gradualmente, você estará menos disposto a investir em relacionamentos imprevisíveis.",

  "Une ancienne peur affective pourrait refaire surface. Considérez-la comme une information à comprendre plutôt que comme une vérité absolue.":
    "Um antigo medo afetivo poderá ressurgir. Considere-o como uma informação a ser compreendida, e não como uma verdade absoluta.",

  "Votre équilibre relationnel sera influencé par la qualité des échanges. Les paroles vagues pourraient vous fatiguer davantage qu’auparavant.":
    "Seu equilíbrio nos relacionamentos será influenciado pela qualidade das conversas. Palavras vagas poderão cansar você mais do que antes.",

  "Vous pourriez ressentir un regain de confiance en vous au fil de l’année. Cette évolution modifiera positivement vos choix affectifs.":
    "Você poderá recuperar a confiança em si mesmo ao longo do ano. Essa evolução influenciará positivamente suas escolhas afetivas.",

  "Votre sensibilité vous aidera à percevoir ce qui n’est pas exprimé. Gardez toutefois toujours une place importante pour la communication directe.":
    "Sua sensibilidade ajudará você a perceber aquilo que não é expresso. Ainda assim, mantenha sempre um espaço importante para a comunicação direta.",

  /* KEY PERIODS */

  "Le début de l’année favorise la réflexion et la clarification. Une situation sentimentale pourrait demander du temps avant de révéler son véritable potentiel.":
    "O início do ano favorece a reflexão e o esclarecimento. Uma situação amorosa poderá precisar de tempo antes de revelar seu verdadeiro potencial.",

  "Le printemps apporte une énergie de rapprochement. Les échanges deviennent plus naturels et une relation peut commencer à évoluer plus rapidement.":
    "A primavera traz uma energia de aproximação. As conversas se tornam mais naturais e um relacionamento poderá começar a evoluir mais rapidamente.",

  "Le milieu de l’année mettra en lumière la réciprocité dans vos relations. Vous verrez plus clairement quels liens méritent votre attention.":
    "A metade do ano destacará a reciprocidade em seus relacionamentos. Você verá com mais clareza quais vínculos merecem sua atenção.",

  "L’été pourrait favoriser les rencontres, les sorties et les rapprochements spontanés. Une connexion légère peut progressivement gagner en profondeur.":
    "O verão poderá favorecer encontros, passeios e aproximações espontâneas. Uma conexão inicialmente leve poderá ganhar profundidade gradualmente.",

  "Une période plus sensible pourrait apparaître autour du milieu de l’année. Elle vous demandera de ne pas prendre chaque réaction comme une remise en question complète du lien.":
    "Um período mais sensível poderá surgir por volta da metade do ano. Ele exigirá que você não interprete cada reação como um questionamento completo do vínculo.",

  "Le début de l’automne encourage les décisions importantes. Une relation pourrait se renforcer, changer de direction ou demander une clarification définitive.":
    "O início do outono favorece decisões importantes. Um relacionamento poderá se fortalecer, mudar de direção ou exigir um esclarecimento definitivo.",

  "La fin de l’année favorise davantage de stabilité. Vous pourriez ressentir le besoin de construire quelque chose de plus concret et de plus sécurisant.":
    "O final do ano favorece uma maior estabilidade. Você poderá sentir a necessidade de construir algo mais concreto e seguro.",

  "Une première partie d’année introspective sera suivie d’une période plus ouverte aux rapprochements et aux nouvelles expériences.":
    "Uma primeira parte do ano mais introspectiva será seguida por um período mais aberto a aproximações e novas experiências.",

  "Certaines réponses pourraient apparaître au cours du deuxième semestre. Une situation longtemps ambiguë deviendra progressivement plus facile à comprendre.":
    "Algumas respostas poderão surgir durante o segundo semestre. Uma situação que permaneceu ambígua por muito tempo se tornará gradualmente mais fácil de compreender.",

  "Les périodes les plus favorables seront celles où vous accepterez de communiquer clairement sans chercher à contrôler immédiatement le résultat.":
    "Os períodos mais favoráveis serão aqueles em que você aceitar se comunicar com clareza sem tentar controlar imediatamente o resultado.",

  /* CHALLENGE */

  "Le principal défi sera de ne pas interpréter chaque silence comme un rejet ou un changement de sentiment.":
    "O principal desafio será não interpretar cada silêncio como uma rejeição ou uma mudança de sentimentos.",

  "Évitez de chercher une réponse immédiate à une situation encore en évolution. La précipitation pourrait créer davantage de confusion.":
    "Evite buscar uma resposta imediata para uma situação que ainda está evoluindo. A pressa poderá criar ainda mais confusão.",

  "Votre besoin de sécurité pourrait vous pousser à vouloir contrôler les réactions de l’autre. Concentrez-vous plutôt sur ce que vous pouvez exprimer clairement.":
    "Sua necessidade de segurança poderá levar você a querer controlar as reações da outra pessoa. Concentre-se, em vez disso, naquilo que você pode expressar com clareza.",

  "Une attente non formulée pourrait provoquer de la déception. Les autres ne peuvent pas toujours deviner ce dont vous avez besoin.":
    "Uma expectativa não expressa poderá provocar decepção. Os outros nem sempre podem adivinhar aquilo de que você precisa.",

  "Le passé ne doit pas décider automatiquement de votre avenir affectif. Une nouvelle relation mérite d’être observée pour ce qu’elle est réellement.":
    "O passado não deve decidir automaticamente seu futuro amoroso. Um novo relacionamento merece ser observado pelo que realmente é.",

  "Vous devrez distinguer l’intuition de la peur. L’intuition est généralement calme et précise, tandis que la peur crée de nombreux scénarios.":
    "Você precisará distinguir a intuição do medo. A intuição geralmente é tranquila e precisa, enquanto o medo cria inúmeros cenários.",

  "Le besoin de protéger votre cœur pourrait vous rendre plus distant que vous ne le souhaitez réellement. L’ouverture peut rester progressive.":
    "A necessidade de proteger seu coração poderá fazer com que você pareça mais distante do que realmente deseja. A abertura pode acontecer gradualmente.",

  "Ne cherchez pas à obtenir une preuve d’amour par une confrontation inutile. Une discussion directe sera beaucoup plus constructive.":
    "Não tente obter uma prova de amor por meio de um confronto desnecessário. Uma conversa direta será muito mais construtiva.",

  "Une différence dans la manière de communiquer pourrait créer une incompréhension. Prenez le temps de vérifier ce que l’autre voulait réellement dire.":
    "Uma diferença na maneira de se comunicar poderá gerar um mal-entendido. Reserve um tempo para verificar o que a outra pessoa realmente quis dizer.",

  "Le défi consistera à préserver vos limites sans transformer chaque désaccord en rupture ou en remise en question complète de la relation.":
    "O desafio será preservar seus limites sem transformar cada desacordo em uma ruptura ou em um questionamento completo do relacionamento.",

  /* ADVICE */

  "Exprimez vos besoins avec douceur et précision. Une demande claire évitera de nombreuses interprétations inutiles.":
    "Expresse suas necessidades com gentileza e clareza. Um pedido claro evitará muitas interpretações desnecessárias.",

  "Laissez les gestes confirmer les paroles. La régularité d’une personne vous renseignera davantage que ses promesses.":
    "Deixe que as atitudes confirmem as palavras. A consistência de uma pessoa dirá mais a você do que suas promessas.",

  "Ne forcez pas une relation à avancer plus rapidement que sa capacité naturelle. Ce qui est solide n’a pas besoin d’être précipité.":
    "Não force um relacionamento a avançar mais rapidamente do que seu ritmo natural. Aquilo que é sólido não precisa ser apressado.",

  "Accordez de la valeur à la réciprocité. Vous ne devriez pas être la seule personne à entretenir constamment le lien.":
    "Valorize a reciprocidade. Você não deveria ser a única pessoa a manter constantemente o vínculo.",

  "Prenez le temps d’observer vos réactions avant de répondre sous le coup de l’émotion.":
    "Reserve um tempo para observar suas reações antes de responder sob o impulso da emoção.",

  "Ne vous contentez pas de paroles rassurantes si les comportements demeurent incohérents.":
    "Não se contente com palavras tranquilizadoras se os comportamentos continuarem incoerentes.",

  "Conservez vos limites même lorsque votre attachement devient plus fort. Une relation saine ne demande pas de vous abandonner vous-même.":
    "Mantenha seus limites mesmo quando seu vínculo emocional se tornar mais forte. Um relacionamento saudável não exige que você abandone a si mesmo.",

  "Faites confiance aux comportements réguliers, aux gestes simples et à la présence réelle.":
    "Confie em comportamentos consistentes, em gestos simples e na presença verdadeira.",

  "Choisissez la clarté plutôt que les jeux, les suppositions ou les messages volontairement ambigus.":
    "Escolha a clareza em vez de jogos, suposições ou mensagens propositalmente ambíguas.",

  "Permettez à la relation d’évoluer naturellement, mais ne restez pas indéfiniment dans une situation qui ne répond jamais à vos besoins.":
    "Permita que o relacionamento evolua naturalmente, mas não permaneça indefinidamente em uma situação que nunca atende às suas necessidades.",

  /* CONCLUSION */

  "Cette année peut transformer votre manière d’aimer en vous aidant à rechercher davantage de clarté, de stabilité et de réciprocité.":
    "Este ano pode transformar sua maneira de amar, ajudando você a buscar mais clareza, estabilidade e reciprocidade.",

  "Une nouvelle compréhension affective pourrait vous permettre de faire des choix plus respectueux de vos véritables besoins.":
    "Uma nova compreensão afetiva poderá permitir que você faça escolhas mais alinhadas às suas verdadeiras necessidades.",

  "Votre vie sentimentale progressera grâce à votre capacité à communiquer clairement tout en restant attentif aux actions de l’autre.":
    "Sua vida amorosa avançará graças à sua capacidade de se comunicar com clareza, permanecendo atento às atitudes da outra pessoa.",

  "L’année vous rappelle que l’amour véritable ne repose pas uniquement sur l’intensité, mais aussi sur la constance et la sécurité.":
    "O ano lembra você de que o amor verdadeiro não se baseia apenas na intensidade, mas também na constância e na segurança.",

  "Une relation sincère gagne à évoluer dans un climat où chacun peut exprimer ses besoins sans craindre d’être jugé.":
    "Um relacionamento sincero se fortalece em um ambiente no qual ambos podem expressar suas necessidades sem medo de serem julgados.",

  "Vous pourriez terminer l’année avec une vision plus précise de ce que vous êtes prêt à construire et de ce que vous ne voulez plus accepter.":
    "Você poderá terminar o ano com uma visão mais clara daquilo que está disposto a construir e daquilo que não deseja mais aceitar.",

  "Votre cœur avance vers davantage de maturité. Cette évolution vous aidera à reconnaître plus rapidement les relations réellement compatibles avec vous.":
    "Seu coração avança em direção a uma maior maturidade. Essa evolução ajudará você a reconhecer mais rapidamente os relacionamentos realmente compatíveis com você.",

  "Les prochains mois peuvent créer un rapprochement important, à condition de laisser suffisamment de place à l’authenticité.":
    "Os próximos meses podem favorecer uma aproximação importante, desde que haja espaço suficiente para a autenticidade.",

  "Une vérité affective pourrait devenir évidente. Elle vous permettra soit de renforcer un lien, soit de vous en libérer avec davantage de sérénité.":
    "Uma verdade afetiva poderá se tornar evidente. Ela permitirá que você fortaleça um vínculo ou se liberte dele com mais serenidade.",

  "Votre évolution sentimentale dépendra surtout de votre capacité à choisir les relations qui vous offrent autant de présence que vous leur en donnez.":
    "Sua evolução amorosa dependerá principalmente de sua capacidade de escolher relacionamentos que ofereçam a você tanta presença quanto você oferece a eles.",
},
  };

/* =========================================================
   APPLY TRANSLATIONS
========================================================= */

function applyTranslations(
  source: string,
  translations: TranslationMap,
): string {
  let output = source;

  for (
    const [from, to]
    of Object.entries(translations)
  ) {
    output =
      output.split(from).join(to);
  }

  return output;
}

/* =========================================================
   LOCALIZER
========================================================= */

export function localizeYearHoroscopeLove(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let output = source;

  output =
    applyTranslations(
      output,
      LOVE_TITLES[locale],
    );

  output =
    applyTranslations(
      output,
      LOVE_TEXTS[locale],
    );

  return output;
}
