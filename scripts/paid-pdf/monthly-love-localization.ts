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

  es: {
    "Votre vie sentimentale entre dans une période de clarification. Les prochaines semaines vous aideront à mieux comprendre ce que vous attendez réellement d’une relation.":
      "Su vida sentimental entra en un período de clarificación. Las próximas semanas le ayudarán a comprender mejor lo que realmente espera de una relación.",

    "Le climat affectif du mois vous invite à accorder davantage d’attention à vos besoins profonds. Certaines émotions pourraient devenir plus faciles à comprendre.":
      "El clima afectivo del mes le invita a prestar más atención a sus necesidades profundas. Algunas emociones podrían resultar más fáciles de comprender.",

    "Ce mois met en lumière votre manière d’aimer, de vous attacher et de créer de la proximité. Une évolution subtile pourrait transformer votre vision d’une relation.":
      "Este mes pone de relieve su manera de amar, de vincularse y de crear cercanía. Una evolución sutil podría transformar su visión de una relación.",

    "Votre cœur recherche davantage de sincérité et de stabilité. Les liens authentiques auront tendance à se renforcer naturellement au fil des semaines.":
      "Su corazón busca más sinceridad y estabilidad. Los vínculos auténticos tenderán a fortalecerse de forma natural a lo largo de las semanas.",

    "Une énergie de renouveau traverse votre vie sentimentale. Elle pourrait vous aider à vous libérer d’une attente, d’un doute ou d’une ancienne façon de fonctionner.":
      "Una energía de renovación atraviesa su vida sentimental. Podría ayudarle a liberarse de una expectativa, una duda o una antigua forma de actuar.",

    "Les relations prennent une place particulière ce mois-ci. Vous pourriez ressentir le besoin de savoir plus clairement où vous allez et avec qui.":
      "Las relaciones ocupan un lugar especial este mes. Podría sentir una mayor necesidad de saber con más claridad hacia dónde va y con quién.",

    "Votre sensibilité affective sera plus présente. Ce mois peut vous aider à distinguer les liens qui vous nourrissent de ceux qui vous épuisent.":
      "Su sensibilidad afectiva estará más presente. Este mes puede ayudarle a distinguir los vínculos que le nutren de aquellos que le agotan.",

    "Une période d’introspection sentimentale commence. Elle ne vous éloigne pas nécessairement de l’amour, mais vous pousse à rechercher davantage de vérité.":
      "Comienza un período de introspección sentimental. No necesariamente le aleja del amor, pero le impulsa a buscar más verdad.",

    "Le mois favorise une compréhension plus fine de vos émotions. Vous pourriez mettre des mots sur quelque chose que vous ressentiez depuis longtemps.":
      "El mes favorece una comprensión más profunda de sus emociones. Podría finalmente poner palabras a algo que siente desde hace mucho tiempo.",

    "Votre vie affective évolue vers davantage de maturité. Les gestes constants compteront plus que les promesses impressionnantes.":
      "Su vida afectiva avanza hacia una mayor madurez. Los gestos constantes contarán más que las promesas impresionantes.",

    "Les échanges sincères seront essentiels. Une conversation posée pourrait permettre de rapprocher les points de vue ou de résoudre une tension persistante.":
      "La comunicación sincera será esencial. Una conversación tranquila podría acercar los puntos de vista o resolver una tensión persistente.",

    "Vous pourriez ressentir un besoin plus fort de sécurité émotionnelle. Évitez toutefois de demander aux autres de deviner ce que vous n’exprimez pas clairement.":
      "Podría sentir una mayor necesidad de seguridad emocional. Evite esperar que los demás adivinen lo que usted no expresa con claridad.",

    "Le mois vous invite à observer la réciprocité dans vos relations. Les efforts, l’attention et la présence doivent pouvoir circuler dans les deux sens.":
      "El mes le invita a observar la reciprocidad en sus relaciones. Los esfuerzos, la atención y la presencia deben poder circular en ambas direcciones.",

    "Une situation affective pourrait évoluer progressivement. Ne cherchez pas nécessairement une réponse immédiate : certains liens ont besoin de temps pour révéler leur véritable direction.":
      "Una situación afectiva podría evolucionar gradualmente. No busque necesariamente una respuesta inmediata: algunos vínculos necesitan tiempo para revelar su verdadera dirección.",

    "Votre intuition relationnelle sera particulièrement vive. Elle vous aidera à sentir les changements d’ambiance, mais elle devra être accompagnée de faits concrets.":
      "Su intuición relacional estará especialmente aguda. Le ayudará a percibir cambios de ambiente, pero deberá apoyarse también en hechos concretos.",

    "Les prochaines semaines favorisent les rapprochements basés sur la confiance. Une relation sincère pourrait gagner en profondeur grâce à une plus grande vulnérabilité.":
      "Las próximas semanas favorecen los acercamientos basados en la confianza. Una relación sincera podría ganar profundidad gracias a una mayor vulnerabilidad.",

    "Votre façon de communiquer vos attentes jouera un rôle important. Une demande simple et précise sera mieux reçue qu’un silence rempli de frustration.":
      "La manera en que comunique sus expectativas tendrá un papel importante. Una petición sencilla y precisa será mejor recibida que un silencio lleno de frustración.",

    "Le passé pourrait momentanément influencer votre manière d’interpréter une relation actuelle. Prenez soin de ne pas attribuer à une nouvelle personne les erreurs d’une ancienne histoire.":
      "El pasado podría influir temporalmente en su manera de interpretar una relación actual. Procure no atribuir a una persona nueva los errores de una historia anterior.",

    "Une relation pourrait vous demander davantage de patience. Cela ne signifie pas que vous devez tout accepter, mais que certaines réponses apparaîtront progressivement.":
      "Una relación podría exigirle más paciencia. Esto no significa que deba aceptarlo todo, sino que algunas respuestas aparecerán gradualmente.",

    "Ce mois vous rappelle que l’amour ne doit pas constamment être compliqué pour être profond. La simplicité peut aussi être un signe de solidité.":
      "Este mes le recuerda que el amor no tiene que ser constantemente complicado para ser profundo. La sencillez también puede ser una señal de solidez.",

    "En couple, une conversation importante pourrait vous aider à mieux comprendre les attentes de votre partenaire. L’écoute aura autant de valeur que les mots.":
      "En pareja, una conversación importante podría ayudarle a comprender mejor las expectativas de su pareja. Escuchar tendrá tanto valor como las palabras.",

    "Votre relation pourrait gagner en profondeur si chacun accepte de parler honnêtement de ses besoins. Évitez de laisser les suppositions remplacer le dialogue.":
      "Su relación podría ganar profundidad si ambos aceptan hablar con honestidad de sus necesidades. Evite que las suposiciones sustituyan al diálogo.",

    "Un projet partagé pourrait renforcer votre complicité. Même une décision simple concernant le quotidien peut vous donner l’impression d’avancer dans la même direction.":
      "Un proyecto compartido podría reforzar su complicidad. Incluso una decisión sencilla sobre la vida cotidiana puede darle la sensación de avanzar en la misma dirección.",

    "Une ancienne tension peut commencer à s’apaiser. Pour y parvenir, il faudra toutefois éviter de vouloir déterminer qui avait raison ou tort.":
      "Una antigua tensión puede empezar a aliviarse. Para lograrlo, convendrá evitar intentar determinar quién tenía razón o quién estaba equivocado.",

    "Votre partenaire pourrait avoir besoin de davantage de présence. Un geste attentif ou un moment réellement disponible aura plus d’effet qu’une grande promesse.":
      "Su pareja podría necesitar más presencia. Un gesto atento o un momento de verdadera disponibilidad tendrá más efecto que una gran promesa.",

    "Le mois favorise un rapprochement émotionnel. Vous pourriez redécouvrir une facette de votre relation que la routine avait progressivement mise de côté.":
      "El mes favorece un acercamiento emocional. Podría redescubrir una faceta de su relación que la rutina había dejado de lado poco a poco.",

    "Une différence de rythme pourrait créer quelques incompréhensions. Respectez les besoins de chacun sans interpréter automatiquement la distance comme un manque d’amour.":
      "Una diferencia de ritmo podría crear algunos malentendidos. Respete las necesidades de cada persona sin interpretar automáticamente la distancia como una falta de amor.",

    "Votre couple pourrait être amené à prendre une décision concrète. Accordez-vous le temps de vérifier que cette décision respecte les priorités des deux partenaires.":
      "Su relación podría verse llevada a tomar una decisión concreta. Dense tiempo para comprobar que esa decisión respeta las prioridades de ambos.",

    "La complicité se développera grâce aux gestes simples. Une sortie, une activité partagée ou une soirée calme peut raviver un sentiment de proximité.":
      "La complicidad crecerá gracias a los gestos sencillos. Una salida, una actividad compartida o una velada tranquila pueden reavivar la sensación de cercanía.",

    "Votre lien évoluera si chacun accepte de laisser davantage de place à l’expression émotionnelle. La vulnérabilité ne fragilise pas nécessairement la relation : elle peut la rendre plus vraie.":
      "Su vínculo evolucionará si ambos aceptan dejar más espacio a la expresión emocional. La vulnerabilidad no necesariamente debilita la relación: puede hacerla más auténtica.",

    "Célibataire, une rencontre pourrait commencer par une conversation légère avant de prendre une signification plus profonde.":
      "Si está soltero, un encuentro podría comenzar con una conversación ligera antes de adquirir un significado más profundo.",

    "Une personne différente de vos habitudes pourrait attirer votre attention. Ne rejetez pas trop rapidement une connexion simplement parce qu’elle ne ressemble pas à vos histoires précédentes.":
      "Una persona diferente de su tipo habitual podría llamar su atención. No descarte demasiado rápido una conexión simplemente porque no se parece a sus relaciones anteriores.",

    "Votre pouvoir d’attraction sera plus visible lorsque vous cesserez de vouloir contrôler l’impression que vous donnez. Votre authenticité sera votre meilleur atout.":
      "Su poder de atracción será más visible cuando deje de intentar controlar la impresión que causa. Su autenticidad será su mejor fortaleza.",

    "Une nouvelle connexion pourrait évoluer lentement. Laissez les comportements réguliers vous montrer les véritables intentions de l’autre personne.":
      "Una nueva conexión podría evolucionar lentamente. Deje que los comportamientos constantes le muestren las verdaderas intenciones de la otra persona.",

    "Le passé pourrait refaire surface sous la forme d’un souvenir, d’un message ou d’une comparaison. Demandez-vous si cette énergie mérite réellement une nouvelle place dans votre vie.":
      "El pasado podría reaparecer en forma de recuerdo, mensaje o comparación. Pregúntese si esa energía merece realmente un nuevo lugar en su vida.",

    "Une rencontre progressive semble plus favorable qu’une histoire trop intense dès le départ. Ce qui se construit calmement pourrait devenir plus stable.":
      "Una conexión gradual parece más favorable que una relación demasiado intensa desde el comienzo. Lo que se construya con calma podría volverse más estable.",

    "Vous pourriez être attiré par une personne qui stimule votre curiosité intellectuelle ou émotionnelle. Prenez le temps de découvrir ce qui se cache derrière la première impression.":
      "Podría sentirse atraído por una persona que estimule su curiosidad intelectual o emocional. Tómese el tiempo de descubrir qué hay detrás de la primera impresión.",

    "Ce mois vous invite à ne pas confondre mystère et indisponibilité. Une relation prometteuse doit aussi offrir un minimum de clarté.":
      "Este mes le invita a no confundir misterio con indisponibilidad emocional. Una relación prometedora también debe ofrecer un mínimo de claridad.",

    "Une occasion de rencontre pourrait apparaître dans un contexte habituel : travail, activité, réseau social ou cercle d’amis.":
      "Una oportunidad de conocer a alguien podría aparecer en un contexto habitual: trabajo, actividad, red social o círculo de amigos.",

    "Votre intuition vous aidera à reconnaître une connexion sincère. Vérifiez cependant que les actions de la personne correspondent bien à ses paroles.":
      "Su intuición le ayudará a reconocer una conexión sincera. Sin embargo, compruebe que las acciones de la persona coincidan con sus palabras.",

    "Vos émotions pourraient être plus intenses au début du mois, puis retrouver progressivement un meilleur équilibre.":
      "Sus emociones podrían ser más intensas al principio del mes y recuperar después, poco a poco, un mejor equilibrio.",

    "Vous ressentirez probablement un besoin accru de clarté. Les situations ambiguës deviendront plus difficiles à tolérer.":
      "Probablemente sentirá una mayor necesidad de claridad. Las situaciones ambiguas podrían volverse más difíciles de tolerar.",

    "Le climat émotionnel favorise une prise de conscience. Vous pourriez enfin comprendre pourquoi une situation vous touche autant.":
      "El clima emocional favorece una toma de conciencia. Podría finalmente comprender por qué una situación le afecta tanto.",

    "Une sensibilité plus grande peut vous rendre particulièrement réceptif aux gestes d’affection, mais aussi aux silences et aux changements d’attitude.":
      "Una mayor sensibilidad puede hacerle especialmente receptivo a los gestos de afecto, pero también a los silencios y cambios de actitud.",

    "Votre cœur oscillera entre le besoin de proximité et celui de préserver votre espace personnel. Les deux besoins peuvent coexister.":
      "Su corazón podría oscilar entre la necesidad de cercanía y la de preservar su espacio personal. Ambas necesidades pueden coexistir.",

    "Le mois vous pousse à rechercher des liens plus sécurisants. Vous serez moins disposé à investir dans des relations imprévisibles.":
      "El mes le impulsa a buscar vínculos más seguros. Estará menos dispuesto a invertir en relaciones impredecibles.",

    "Une ancienne peur affective pourrait momentanément refaire surface. Considérez-la comme une information à comprendre plutôt qu’une vérité absolue.":
      "Un antiguo miedo afectivo podría reaparecer temporalmente. Considérelo una información que debe comprender, no una verdad absoluta.",

    "Votre humeur relationnelle sera influencée par la qualité des échanges. Les paroles vagues pourraient vous fatiguer davantage que d’habitude.":
      "Su estado de ánimo relacional estará influido por la calidad de los intercambios. Las palabras vagas podrían cansarle más de lo habitual.",

    "Vous pourriez ressentir un regain de confiance en vous au fil des semaines. Cette énergie modifiera positivement vos choix affectifs.":
      "Podría sentir una renovada confianza en sí mismo a medida que avanzan las semanas. Esta energía influirá positivamente en sus decisiones afectivas.",

    "Votre sensibilité vous aidera à percevoir ce qui n’est pas exprimé. Gardez toutefois une place pour la communication directe.":
      "Su sensibilidad le ayudará a percibir lo que no se expresa. Sin embargo, deje espacio para la comunicación directa.",

    "Le principal défi sera de ne pas interpréter chaque silence comme un rejet ou un changement de sentiment.":
      "El principal desafío será no interpretar cada silencio como un rechazo o un cambio de sentimientos.",

    "Évitez de chercher une réponse immédiate à une situation encore en évolution. La précipitation pourrait créer davantage de confusion.":
      "Evite buscar una respuesta inmediata a una situación que todavía está evolucionando. La precipitación podría crear más confusión.",

    "Votre besoin de sécurité pourrait vous pousser à vouloir contrôler les réactions de l’autre. Concentrez-vous plutôt sur ce que vous pouvez exprimer clairement.":
      "Su necesidad de seguridad podría llevarle a querer controlar las reacciones de la otra persona. Concéntrese, en cambio, en lo que puede expresar con claridad.",

    "Une attente non formulée pourrait provoquer de la déception. Les autres ne peuvent pas toujours deviner ce dont vous avez besoin.":
      "Una expectativa no expresada podría provocar decepción. Los demás no siempre pueden adivinar lo que usted necesita.",

    "Le passé ne doit pas décider automatiquement de votre avenir affectif. Une nouvelle relation mérite d’être observée pour ce qu’elle est réellement.":
      "El pasado no debe decidir automáticamente su futuro afectivo. Una nueva relación merece ser observada por lo que realmente es.",

    "Vous devrez distinguer l’intuition de la peur. L’intuition est généralement calme et précise, tandis que la peur crée de nombreux scénarios.":
      "Tendrá que distinguir la intuición del miedo. La intuición suele ser tranquila y precisa, mientras que el miedo crea numerosos escenarios.",

    "Le besoin de protéger votre cœur pourrait vous rendre plus distant que vous ne le souhaitez réellement. L’ouverture peut rester progressive.":
      "La necesidad de proteger su corazón podría volverle más distante de lo que realmente desea. La apertura puede seguir siendo gradual.",

    "Ne cherchez pas à obtenir une preuve d’amour par une confrontation inutile. Une discussion directe sera beaucoup plus constructive.":
      "No busque una prueba de amor mediante una confrontación innecesaria. Una conversación directa será mucho más constructiva.",

    "Une différence dans la manière de communiquer pourrait créer une incompréhension. Prenez le temps de vérifier ce que l’autre voulait réellement dire.":
      "Una diferencia en la manera de comunicarse podría crear un malentendido. Tómese el tiempo de comprobar lo que la otra persona quería decir realmente.",

    "Le défi consistera à préserver vos limites sans transformer chaque désaccord en rupture ou en remise en question complète de la relation.":
      "El desafío consistirá en preservar sus límites sin convertir cada desacuerdo en una ruptura o en un cuestionamiento completo de la relación.",

    "Exprimez vos besoins avec douceur et précision. Une demande claire évitera de nombreuses interprétations inutiles.":
      "Exprese sus necesidades con suavidad y precisión. Una petición clara evitará muchas interpretaciones innecesarias.",

    "Laissez les gestes confirmer les paroles. La régularité d’une personne vous renseignera davantage que ses promesses.":
      "Deje que los actos confirmen las palabras. La constancia de una persona le dirá más que sus promesas.",

    "Ne forcez pas une relation à avancer plus rapidement que sa capacité naturelle. Ce qui est solide n’a pas besoin d’être précipité.":
      "No fuerce una relación a avanzar más rápido que su ritmo natural. Lo que es sólido no necesita precipitarse.",

    "Accordez de la valeur à la réciprocité. Vous ne devriez pas être la seule personne à entretenir constamment le lien.":
      "Valore la reciprocidad. Usted no debería ser la única persona que mantiene constantemente el vínculo.",

    "Prenez le temps d’observer vos réactions avant de répondre sous le coup de l’émotion.":
      "Tómese el tiempo de observar sus reacciones antes de responder bajo el efecto de la emoción.",

    "Ne vous contentez pas de paroles rassurantes si les comportements demeurent incohérents.":
      "No se conforme con palabras tranquilizadoras si los comportamientos siguen siendo incoherentes.",

    "Conservez vos limites même lorsque votre attachement devient plus fort. Une relation saine ne demande pas de vous abandonner vous-même.":
      "Mantenga sus límites incluso cuando su apego se haga más fuerte. Una relación sana no le exige abandonarse a sí mismo.",

    "Faites confiance aux comportements réguliers, aux gestes simples et à la présence réelle.":
      "Confíe en los comportamientos constantes, los gestos sencillos y la presencia auténtica.",

    "Choisissez la clarté plutôt que les jeux, les suppositions ou les messages volontairement ambigus.":
      "Elija la claridad en lugar de los juegos, las suposiciones o los mensajes deliberadamente ambiguos.",

    "Permettez à la relation d’évoluer naturellement, mais ne restez pas indéfiniment dans une situation qui ne répond jamais à vos besoins.":
      "Permita que la relación evolucione de forma natural, pero no permanezca indefinidamente en una situación que nunca responde a sus necesidades.",

    "Ce mois peut transformer votre manière d’aimer en vous aidant à rechercher davantage de clarté, de stabilité et de réciprocité.":
      "Este mes puede transformar su manera de amar al ayudarle a buscar más claridad, estabilidad y reciprocidad.",

    "Une nouvelle compréhension affective pourrait vous permettre de faire des choix plus respectueux de vos véritables besoins.":
      "Una nueva comprensión afectiva podría permitirle tomar decisiones más respetuosas con sus verdaderas necesidades.",

    "Votre vie sentimentale progressera grâce à votre capacité à communiquer clairement tout en restant attentif aux actions de l’autre.":
      "Su vida sentimental avanzará gracias a su capacidad de comunicarse con claridad sin dejar de prestar atención a las acciones de la otra persona.",

    "Le mois vous rappelle que l’amour véritable ne repose pas uniquement sur l’intensité, mais aussi sur la constance et la sécurité.":
      "El mes le recuerda que el amor verdadero no se basa únicamente en la intensidad, sino también en la constancia y la seguridad.",

    "Une relation sincère gagne à évoluer dans un climat où chacun peut exprimer ses besoins sans craindre d’être jugé.":
      "Una relación sincera se beneficia de crecer en un entorno donde ambos pueden expresar sus necesidades sin miedo a ser juzgados.",

    "Vous pourriez terminer le mois avec une vision plus précise de ce que vous êtes prêt à construire et de ce que vous ne voulez plus accepter.":
      "Podría terminar el mes con una visión más clara de lo que está dispuesto a construir y de lo que ya no quiere aceptar.",

    "Votre cœur avance vers davantage de maturité. Ce changement vous aidera à reconnaître plus rapidement les relations réellement compatibles avec vous.":
      "Su corazón avanza hacia una mayor madurez. Este cambio le ayudará a reconocer más rápidamente las relaciones realmente compatibles con usted.",

    "Les semaines à venir peuvent créer un rapprochement important, à condition de laisser suffisamment de place à l’authenticité.":
      "Las próximas semanas pueden crear un acercamiento importante, siempre que haya suficiente espacio para la autenticidad.",

    "Une vérité affective pourrait enfin devenir évidente. Elle vous permettra soit de renforcer un lien, soit de vous en libérer avec davantage de sérénité.":
      "Una verdad afectiva podría finalmente hacerse evidente. Le permitirá reforzar un vínculo o liberarse de él con mayor serenidad.",

    "Votre évolution sentimentale dépendra surtout de votre capacité à choisir les relations qui vous offrent autant de présence que vous leur en donnez.":
      "Su evolución sentimental dependerá sobre todo de su capacidad para elegir relaciones que le ofrezcan tanta presencia como la que usted les brinda.",
  },

  de: {
    "Votre vie sentimentale entre dans une période de clarification. Les prochaines semaines vous aideront à mieux comprendre ce que vous attendez réellement d’une relation.":
      "Ihr Liebesleben tritt in eine Phase der Klärung ein. Die kommenden Wochen werden Ihnen helfen, besser zu verstehen, was Sie wirklich von einer Beziehung erwarten.",

    "Le climat affectif du mois vous invite à accorder davantage d’attention à vos besoins profonds. Certaines émotions pourraient devenir plus faciles à comprendre.":
      "Das emotionale Klima des Monats lädt Sie dazu ein, Ihren tiefen Bedürfnissen mehr Aufmerksamkeit zu schenken. Manche Gefühle könnten leichter zu verstehen sein.",

    "Ce mois met en lumière votre manière d’aimer, de vous attacher et de créer de la proximité. Une évolution subtile pourrait transformer votre vision d’une relation.":
      "Dieser Monat rückt Ihre Art zu lieben, Bindungen einzugehen und Nähe zu schaffen in den Mittelpunkt. Eine subtile Entwicklung könnte Ihre Sicht auf eine Beziehung verändern.",

    "Votre cœur recherche davantage de sincérité et de stabilité. Les liens authentiques auront tendance à se renforcer naturellement au fil des semaines.":
      "Ihr Herz sucht nach mehr Aufrichtigkeit und Stabilität. Authentische Bindungen können sich im Laufe der Wochen ganz natürlich festigen.",

    "Une énergie de renouveau traverse votre vie sentimentale. Elle pourrait vous aider à vous libérer d’une attente, d’un doute ou d’une ancienne façon de fonctionner.":
      "Eine erneuernde Energie durchzieht Ihr Liebesleben. Sie kann Ihnen helfen, sich von einer Erwartung, einem Zweifel oder einem alten Muster zu lösen.",

    "Les relations prennent une place particulière ce mois-ci. Vous pourriez ressentir le besoin de savoir plus clairement où vous allez et avec qui.":
      "Beziehungen nehmen in diesem Monat einen besonderen Stellenwert ein. Sie könnten stärker das Bedürfnis verspüren, klarer zu wissen, wohin Sie gehen und mit wem.",

    "Votre sensibilité affective sera plus présente. Ce mois peut vous aider à distinguer les liens qui vous nourrissent de ceux qui vous épuisent.":
      "Ihre emotionale Sensibilität wird stärker präsent sein. Dieser Monat kann Ihnen helfen, zwischen Beziehungen zu unterscheiden, die Sie nähren, und solchen, die Sie erschöpfen.",

    "Une période d’introspection sentimentale commence. Elle ne vous éloigne pas nécessairement de l’amour, mais vous pousse à rechercher davantage de vérité.":
      "Eine Phase emotionaler Selbstreflexion beginnt. Sie entfernt Sie nicht unbedingt von der Liebe, sondern ermutigt Sie, nach mehr Wahrheit zu suchen.",

    "Le mois favorise une compréhension plus fine de vos émotions. Vous pourriez mettre des mots sur quelque chose que vous ressentiez depuis longtemps.":
      "Der Monat begünstigt ein tieferes Verständnis Ihrer Gefühle. Vielleicht finden Sie endlich Worte für etwas, das Sie schon lange empfinden.",

    "Votre vie affective évolue vers davantage de maturité. Les gestes constants compteront plus que les promesses impressionnantes.":
      "Ihr Gefühlsleben entwickelt sich zu größerer Reife. Beständige Handlungen werden mehr zählen als eindrucksvolle Versprechen.",

    "Les échanges sincères seront essentiels. Une conversation posée pourrait permettre de rapprocher les points de vue ou de résoudre une tension persistante.":
      "Aufrichtige Kommunikation wird wesentlich sein. Ein ruhiges Gespräch könnte helfen, Standpunkte einander anzunähern oder eine anhaltende Spannung zu lösen.",

    "Vous pourriez ressentir un besoin plus fort de sécurité émotionnelle. Évitez toutefois de demander aux autres de deviner ce que vous n’exprimez pas clairement.":
      "Sie könnten ein stärkeres Bedürfnis nach emotionaler Sicherheit verspüren. Erwarten Sie jedoch nicht, dass andere erraten, was Sie nicht klar aussprechen.",

    "Le mois vous invite à observer la réciprocité dans vos relations. Les efforts, l’attention et la présence doivent pouvoir circuler dans les deux sens.":
      "Der Monat lädt Sie dazu ein, die Gegenseitigkeit in Ihren Beziehungen zu beobachten. Einsatz, Aufmerksamkeit und Präsenz sollten in beide Richtungen fließen können.",

    "Une situation affective pourrait évoluer progressivement. Ne cherchez pas nécessairement une réponse immédiate : certains liens ont besoin de temps pour révéler leur véritable direction.":
      "Eine emotionale Situation könnte sich schrittweise entwickeln. Suchen Sie nicht unbedingt nach einer sofortigen Antwort: Manche Beziehungen brauchen Zeit, um ihre wahre Richtung zu zeigen.",

    "Votre intuition relationnelle sera particulièrement vive. Elle vous aidera à sentir les changements d’ambiance, mais elle devra être accompagnée de faits concrets.":
      "Ihre Beziehungsintuition wird besonders ausgeprägt sein. Sie hilft Ihnen, Veränderungen in der Atmosphäre wahrzunehmen, sollte jedoch durch konkrete Fakten ergänzt werden.",

    "Les prochaines semaines favorisent les rapprochements basés sur la confiance. Une relation sincère pourrait gagner en profondeur grâce à une plus grande vulnérabilité.":
      "Die kommenden Wochen begünstigen Annäherungen, die auf Vertrauen beruhen. Eine aufrichtige Beziehung könnte durch größere Verletzlichkeit an Tiefe gewinnen.",

    "Votre façon de communiquer vos attentes jouera un rôle important. Une demande simple et précise sera mieux reçue qu’un silence rempli de frustration.":
      "Die Art, wie Sie Ihre Erwartungen kommunizieren, wird eine wichtige Rolle spielen. Eine einfache und präzise Bitte wird besser aufgenommen als ein Schweigen voller Frustration.",

    "Le passé pourrait momentanément influencer votre manière d’interpréter une relation actuelle. Prenez soin de ne pas attribuer à une nouvelle personne les erreurs d’une ancienne histoire.":
      "Die Vergangenheit könnte vorübergehend beeinflussen, wie Sie eine aktuelle Beziehung interpretieren. Achten Sie darauf, die Fehler einer früheren Geschichte nicht einer neuen Person zuzuschreiben.",

    "Une relation pourrait vous demander davantage de patience. Cela ne signifie pas que vous devez tout accepter, mais que certaines réponses apparaîtront progressivement.":
      "Eine Beziehung könnte mehr Geduld von Ihnen verlangen. Das bedeutet nicht, dass Sie alles akzeptieren müssen, sondern dass manche Antworten sich allmählich zeigen werden.",

    "Ce mois vous rappelle que l’amour ne doit pas constamment être compliqué pour être profond. La simplicité peut aussi être un signe de solidité.":
      "Dieser Monat erinnert Sie daran, dass Liebe nicht ständig kompliziert sein muss, um tief zu sein. Einfachheit kann ebenfalls ein Zeichen von Stabilität sein.",

    "En couple, une conversation importante pourrait vous aider à mieux comprendre les attentes de votre partenaire. L’écoute aura autant de valeur que les mots.":
      "In einer Partnerschaft könnte ein wichtiges Gespräch Ihnen helfen, die Erwartungen Ihres Partners besser zu verstehen. Zuhören wird ebenso wertvoll sein wie Worte.",

    "Votre relation pourrait gagner en profondeur si chacun accepte de parler honnêtement de ses besoins. Évitez de laisser les suppositions remplacer le dialogue.":
      "Ihre Beziehung könnte an Tiefe gewinnen, wenn beide bereit sind, ehrlich über ihre Bedürfnisse zu sprechen. Lassen Sie Vermutungen nicht den Dialog ersetzen.",

    "Un projet partagé pourrait renforcer votre complicité. Même une décision simple concernant le quotidien peut vous donner l’impression d’avancer dans la même direction.":
      "Ein gemeinsames Projekt könnte Ihre Verbundenheit stärken. Selbst eine einfache Entscheidung im Alltag kann Ihnen das Gefühl geben, in dieselbe Richtung zu gehen.",

    "Une ancienne tension peut commencer à s’apaiser. Pour y parvenir, il faudra toutefois éviter de vouloir déterminer qui avait raison ou tort.":
      "Eine alte Spannung kann beginnen, sich zu lösen. Dafür sollten Sie vermeiden, unbedingt feststellen zu wollen, wer recht oder unrecht hatte.",

    "Votre partenaire pourrait avoir besoin de davantage de présence. Un geste attentif ou un moment réellement disponible aura plus d’effet qu’une grande promesse.":
      "Ihr Partner könnte mehr Präsenz brauchen. Eine aufmerksame Geste oder ein wirklich verfügbarer Moment wird mehr bewirken als ein großes Versprechen.",

    "Le mois favorise un rapprochement émotionnel. Vous pourriez redécouvrir une facette de votre relation que la routine avait progressivement mise de côté.":
      "Der Monat begünstigt emotionale Nähe. Sie könnten eine Seite Ihrer Beziehung wiederentdecken, die durch die Routine allmählich in den Hintergrund geraten war.",

    "Une différence de rythme pourrait créer quelques incompréhensions. Respectez les besoins de chacun sans interpréter automatiquement la distance comme un manque d’amour.":
      "Ein unterschiedliches Tempo könnte zu einigen Missverständnissen führen. Respektieren Sie die Bedürfnisse beider Seiten, ohne Distanz automatisch als Mangel an Liebe zu deuten.",

    "Votre couple pourrait être amené à prendre une décision concrète. Accordez-vous le temps de vérifier que cette décision respecte les priorités des deux partenaires.":
      "Ihre Beziehung könnte vor einer konkreten Entscheidung stehen. Nehmen Sie sich Zeit, um sicherzustellen, dass diese Entscheidung die Prioritäten beider Partner berücksichtigt.",

    "La complicité se développera grâce aux gestes simples. Une sortie, une activité partagée ou une soirée calme peut raviver un sentiment de proximité.":
      "Verbundenheit wächst durch einfache Gesten. Ein Ausflug, eine gemeinsame Aktivität oder ein ruhiger Abend können das Gefühl von Nähe neu beleben.",

    "Votre lien évoluera si chacun accepte de laisser davantage de place à l’expression émotionnelle. La vulnérabilité ne fragilise pas nécessairement la relation : elle peut la rendre plus vraie.":
      "Ihre Bindung wird sich entwickeln, wenn beide mehr Raum für emotionalen Ausdruck zulassen. Verletzlichkeit schwächt eine Beziehung nicht zwangsläufig: Sie kann sie echter machen.",

    "Célibataire, une rencontre pourrait commencer par une conversation légère avant de prendre une signification plus profonde.":
      "Wenn Sie Single sind, könnte eine Begegnung mit einem lockeren Gespräch beginnen und später eine tiefere Bedeutung annehmen.",

    "Une personne différente de vos habitudes pourrait attirer votre attention. Ne rejetez pas trop rapidement une connexion simplement parce qu’elle ne ressemble pas à vos histoires précédentes.":
      "Jemand, der nicht Ihrem üblichen Typ entspricht, könnte Ihre Aufmerksamkeit wecken. Lehnen Sie eine Verbindung nicht vorschnell ab, nur weil sie Ihren früheren Beziehungen nicht ähnelt.",

    "Votre pouvoir d’attraction sera plus visible lorsque vous cesserez de vouloir contrôler l’impression que vous donnez. Votre authenticité sera votre meilleur atout.":
      "Ihre Ausstrahlung wird deutlicher, wenn Sie aufhören, den Eindruck kontrollieren zu wollen, den Sie hinterlassen. Ihre Authentizität wird Ihre größte Stärke sein.",

    "Une nouvelle connexion pourrait évoluer lentement. Laissez les comportements réguliers vous montrer les véritables intentions de l’autre personne.":
      "Eine neue Verbindung könnte sich langsam entwickeln. Lassen Sie beständiges Verhalten Ihnen die wahren Absichten der anderen Person zeigen.",

    "Le passé pourrait refaire surface sous la forme d’un souvenir, d’un message ou d’une comparaison. Demandez-vous si cette énergie mérite réellement une nouvelle place dans votre vie.":
      "Die Vergangenheit könnte in Form einer Erinnerung, einer Nachricht oder eines Vergleichs wieder auftauchen. Fragen Sie sich, ob diese Energie wirklich einen neuen Platz in Ihrem Leben verdient.",

    "Une rencontre progressive semble plus favorable qu’une histoire trop intense dès le départ. Ce qui se construit calmement pourrait devenir plus stable.":
      "Eine langsame Annäherung scheint günstiger als eine von Anfang an zu intensive Beziehung. Was sich ruhig entwickelt, könnte stabiler werden.",

    "Vous pourriez être attiré par une personne qui stimule votre curiosité intellectuelle ou émotionnelle. Prenez le temps de découvrir ce qui se cache derrière la première impression.":
      "Sie könnten sich zu jemandem hingezogen fühlen, der Ihre intellektuelle oder emotionale Neugier anregt. Nehmen Sie sich Zeit, um zu entdecken, was hinter dem ersten Eindruck liegt.",

    "Ce mois vous invite à ne pas confondre mystère et indisponibilité. Une relation prometteuse doit aussi offrir un minimum de clarté.":
      "Dieser Monat lädt Sie dazu ein, Geheimnis nicht mit emotionaler Unerreichbarkeit zu verwechseln. Eine vielversprechende Beziehung sollte auch ein Mindestmaß an Klarheit bieten.",

    "Une occasion de rencontre pourrait apparaître dans un contexte habituel : travail, activité, réseau social ou cercle d’amis.":
      "Eine Gelegenheit, jemanden kennenzulernen, könnte sich in einem vertrauten Umfeld ergeben: bei der Arbeit, einer Aktivität, in einem sozialen Netzwerk oder im Freundeskreis.",

    "Votre intuition vous aidera à reconnaître une connexion sincère. Vérifiez cependant que les actions de la personne correspondent bien à ses paroles.":
      "Ihre Intuition wird Ihnen helfen, eine aufrichtige Verbindung zu erkennen. Achten Sie jedoch darauf, dass die Handlungen der Person zu ihren Worten passen.",

    "Vos émotions pourraient être plus intenses au début du mois, puis retrouver progressivement un meilleur équilibre.":
      "Ihre Gefühle könnten zu Beginn des Monats intensiver sein und danach allmählich wieder zu einem besseren Gleichgewicht finden.",

    "Vous ressentirez probablement un besoin accru de clarté. Les situations ambiguës deviendront plus difficiles à tolérer.":
      "Sie werden wahrscheinlich ein stärkeres Bedürfnis nach Klarheit verspüren. Mehrdeutige Situationen könnten schwerer zu ertragen sein.",

    "Le climat émotionnel favorise une prise de conscience. Vous pourriez enfin comprendre pourquoi une situation vous touche autant.":
      "Das emotionale Klima begünstigt eine Erkenntnis. Vielleicht verstehen Sie endlich, warum eine Situation Sie so stark berührt.",

    "Une sensibilité plus grande peut vous rendre particulièrement réceptif aux gestes d’affection, mais aussi aux silences et aux changements d’attitude.":
      "Eine größere Sensibilität kann Sie besonders empfänglich für Zuneigung machen, aber auch für Schweigen und Veränderungen im Verhalten.",

    "Votre cœur oscillera entre le besoin de proximité et celui de préserver votre espace personnel. Les deux besoins peuvent coexister.":
      "Ihr Herz könnte zwischen dem Bedürfnis nach Nähe und dem Wunsch schwanken, Ihren persönlichen Raum zu bewahren. Beide Bedürfnisse können nebeneinander bestehen.",

    "Le mois vous pousse à rechercher des liens plus sécurisants. Vous serez moins disposé à investir dans des relations imprévisibles.":
      "Der Monat ermutigt Sie, nach sichereren Beziehungen zu suchen. Sie werden weniger bereit sein, in unberechenbare Verbindungen zu investieren.",

    "Une ancienne peur affective pourrait momentanément refaire surface. Considérez-la comme une information à comprendre plutôt qu’une vérité absolue.":
      "Eine alte emotionale Angst könnte vorübergehend wieder auftauchen. Betrachten Sie sie als Information, die verstanden werden will, nicht als absolute Wahrheit.",

    "Votre humeur relationnelle sera influencée par la qualité des échanges. Les paroles vagues pourraient vous fatiguer davantage que d’habitude.":
      "Ihre Beziehungsstimmung wird von der Qualität der Kommunikation beeinflusst. Vage Worte könnten Sie stärker ermüden als sonst.",

    "Vous pourriez ressentir un regain de confiance en vous au fil des semaines. Cette énergie modifiera positivement vos choix affectifs.":
      "Im Laufe der Wochen könnten Sie ein erneuertes Selbstvertrauen spüren. Diese Energie wird Ihre emotionalen Entscheidungen positiv beeinflussen.",

    "Votre sensibilité vous aidera à percevoir ce qui n’est pas exprimé. Gardez toutefois une place pour la communication directe.":
      "Ihre Sensibilität wird Ihnen helfen, wahrzunehmen, was nicht ausgesprochen wird. Lassen Sie dennoch Raum für direkte Kommunikation.",

    "Le principal défi sera de ne pas interpréter chaque silence comme un rejet ou un changement de sentiment.":
      "Die größte Herausforderung wird darin bestehen, nicht jedes Schweigen als Ablehnung oder Veränderung der Gefühle zu deuten.",

    "Évitez de chercher une réponse immédiate à une situation encore en évolution. La précipitation pourrait créer davantage de confusion.":
      "Vermeiden Sie es, sofort eine Antwort auf eine Situation zu verlangen, die sich noch entwickelt. Übereilung könnte mehr Verwirrung schaffen.",

    "Votre besoin de sécurité pourrait vous pousser à vouloir contrôler les réactions de l’autre. Concentrez-vous plutôt sur ce que vous pouvez exprimer clairement.":
      "Ihr Bedürfnis nach Sicherheit könnte Sie dazu bringen, die Reaktionen der anderen Person kontrollieren zu wollen. Konzentrieren Sie sich stattdessen auf das, was Sie klar ausdrücken können.",

    "Une attente non formulée pourrait provoquer de la déception. Les autres ne peuvent pas toujours deviner ce dont vous avez besoin.":
      "Eine unausgesprochene Erwartung könnte zu Enttäuschung führen. Andere können nicht immer erraten, was Sie brauchen.",

    "Le passé ne doit pas décider automatiquement de votre avenir affectif. Une nouvelle relation mérite d’être observée pour ce qu’elle est réellement.":
      "Die Vergangenheit sollte nicht automatisch über Ihre emotionale Zukunft entscheiden. Eine neue Beziehung verdient es, so betrachtet zu werden, wie sie wirklich ist.",

    "Vous devrez distinguer l’intuition de la peur. L’intuition est généralement calme et précise, tandis que la peur crée de nombreux scénarios.":
      "Sie müssen Intuition von Angst unterscheiden. Intuition ist meist ruhig und präzise, während Angst viele Szenarien erzeugt.",

    "Le besoin de protéger votre cœur pourrait vous rendre plus distant que vous ne le souhaitez réellement. L’ouverture peut rester progressive.":
      "Das Bedürfnis, Ihr Herz zu schützen, könnte Sie distanzierter machen, als Sie es eigentlich möchten. Offenheit kann schrittweise wachsen.",

    "Ne cherchez pas à obtenir une preuve d’amour par une confrontation inutile. Une discussion directe sera beaucoup plus constructive.":
      "Suchen Sie keinen Liebesbeweis durch unnötige Konfrontation. Ein direktes Gespräch wird wesentlich konstruktiver sein.",

    "Une différence dans la manière de communiquer pourrait créer une incompréhension. Prenez le temps de vérifier ce que l’autre voulait réellement dire.":
      "Ein unterschiedlicher Kommunikationsstil könnte ein Missverständnis verursachen. Nehmen Sie sich Zeit, um zu überprüfen, was die andere Person wirklich sagen wollte.",

    "Le défi consistera à préserver vos limites sans transformer chaque désaccord en rupture ou en remise en question complète de la relation.":
      "Die Herausforderung wird darin bestehen, Ihre Grenzen zu bewahren, ohne jede Meinungsverschiedenheit in eine Trennung oder eine vollständige Infragestellung der Beziehung zu verwandeln.",

    "Exprimez vos besoins avec douceur et précision. Une demande claire évitera de nombreuses interprétations inutiles.":
      "Drücken Sie Ihre Bedürfnisse sanft und präzise aus. Eine klare Bitte wird viele unnötige Interpretationen vermeiden.",

    "Laissez les gestes confirmer les paroles. La régularité d’une personne vous renseignera davantage que ses promesses.":
      "Lassen Sie Taten die Worte bestätigen. Die Beständigkeit einer Person wird Ihnen mehr sagen als ihre Versprechen.",

    "Ne forcez pas une relation à avancer plus rapidement que sa capacité naturelle. Ce qui est solide n’a pas besoin d’être précipité.":
      "Zwingen Sie eine Beziehung nicht dazu, schneller voranzugehen als ihr natürlicher Rhythmus. Was stabil ist, muss nicht überstürzt werden.",

    "Accordez de la valeur à la réciprocité. Vous ne devriez pas être la seule personne à entretenir constamment le lien.":
      "Schätzen Sie Gegenseitigkeit. Sie sollten nicht die einzige Person sein, die die Verbindung ständig aufrechterhält.",

    "Prenez le temps d’observer vos réactions avant de répondre sous le coup de l’émotion.":
      "Nehmen Sie sich Zeit, Ihre Reaktionen zu beobachten, bevor Sie im Affekt antworten.",

    "Ne vous contentez pas de paroles rassurantes si les comportements demeurent incohérents.":
      "Geben Sie sich nicht mit beruhigenden Worten zufrieden, wenn das Verhalten weiterhin widersprüchlich bleibt.",

    "Conservez vos limites même lorsque votre attachement devient plus fort. Une relation saine ne demande pas de vous abandonner vous-même.":
      "Bewahren Sie Ihre Grenzen, auch wenn Ihre Bindung stärker wird. Eine gesunde Beziehung verlangt nicht, dass Sie sich selbst aufgeben.",

    "Faites confiance aux comportements réguliers, aux gestes simples et à la présence réelle.":
      "Vertrauen Sie auf beständiges Verhalten, einfache Gesten und echte Präsenz.",

    "Choisissez la clarté plutôt que les jeux, les suppositions ou les messages volontairement ambigus.":
      "Wählen Sie Klarheit statt Spielchen, Vermutungen oder absichtlich mehrdeutiger Nachrichten.",

    "Permettez à la relation d’évoluer naturellement, mais ne restez pas indéfiniment dans une situation qui ne répond jamais à vos besoins.":
      "Lassen Sie die Beziehung sich natürlich entwickeln, bleiben Sie jedoch nicht unbegrenzt in einer Situation, die Ihre Bedürfnisse nie erfüllt.",

    "Ce mois peut transformer votre manière d’aimer en vous aidant à rechercher davantage de clarté, de stabilité et de réciprocité.":
      "Dieser Monat kann Ihre Art zu lieben verändern, indem er Ihnen hilft, mehr Klarheit, Stabilität und Gegenseitigkeit zu suchen.",

    "Une nouvelle compréhension affective pourrait vous permettre de faire des choix plus respectueux de vos véritables besoins.":
      "Ein neues emotionales Verständnis könnte Ihnen ermöglichen, Entscheidungen zu treffen, die Ihre wahren Bedürfnisse stärker respektieren.",

    "Votre vie sentimentale progressera grâce à votre capacité à communiquer clairement tout en restant attentif aux actions de l’autre.":
      "Ihr Liebesleben wird sich durch Ihre Fähigkeit weiterentwickeln, klar zu kommunizieren und gleichzeitig auf die Handlungen der anderen Person zu achten.",

    "Le mois vous rappelle que l’amour véritable ne repose pas uniquement sur l’intensité, mais aussi sur la constance et la sécurité.":
      "Der Monat erinnert Sie daran, dass wahre Liebe nicht nur auf Intensität beruht, sondern auch auf Beständigkeit und Sicherheit.",

    "Une relation sincère gagne à évoluer dans un climat où chacun peut exprimer ses besoins sans craindre d’être jugé.":
      "Eine aufrichtige Beziehung profitiert von einem Umfeld, in dem beide ihre Bedürfnisse ausdrücken können, ohne Angst vor Verurteilung zu haben.",

    "Vous pourriez terminer le mois avec une vision plus précise de ce que vous êtes prêt à construire et de ce que vous ne voulez plus accepter.":
      "Sie könnten den Monat mit einer klareren Vorstellung davon beenden, was Sie bereit sind aufzubauen und was Sie nicht länger akzeptieren möchten.",

    "Votre cœur avance vers davantage de maturité. Ce changement vous aidera à reconnaître plus rapidement les relations réellement compatibles avec vous.":
      "Ihr Herz bewegt sich in Richtung größerer Reife. Diese Veränderung wird Ihnen helfen, Beziehungen, die wirklich zu Ihnen passen, schneller zu erkennen.",

    "Les semaines à venir peuvent créer un rapprochement important, à condition de laisser suffisamment de place à l’authenticité.":
      "Die kommenden Wochen können eine wichtige Annäherung schaffen, sofern genügend Raum für Authentizität bleibt.",

    "Une vérité affective pourrait enfin devenir évidente. Elle vous permettra soit de renforcer un lien, soit de vous en libérer avec davantage de sérénité.":
      "Eine emotionale Wahrheit könnte schließlich deutlich werden. Sie wird Ihnen ermöglichen, entweder eine Verbindung zu stärken oder sich mit mehr Gelassenheit davon zu lösen.",

    "Votre évolution sentimentale dépendra surtout de votre capacité à choisir les relations qui vous offrent autant de présence que vous leur en donnez.":
      "Ihre emotionale Entwicklung wird vor allem davon abhängen, Beziehungen zu wählen, die Ihnen ebenso viel Präsenz geben, wie Sie ihnen schenken.",
  },

  it: {
    "Votre vie sentimentale entre dans une période de clarification. Les prochaines semaines vous aideront à mieux comprendre ce que vous attendez réellement d’une relation.":
      "La tua vita sentimentale entra in un periodo di chiarimento. Le prossime settimane ti aiuteranno a capire meglio ciò che desideri davvero da una relazione.",

    "Le climat affectif du mois vous invite à accorder davantage d’attention à vos besoins profonds. Certaines émotions pourraient devenir plus faciles à comprendre.":
      "Il clima affettivo del mese ti invita a prestare maggiore attenzione ai tuoi bisogni profondi. Alcune emozioni potrebbero diventare più facili da comprendere.",

    "Ce mois met en lumière votre manière d’aimer, de vous attacher et de créer de la proximité. Une évolution subtile pourrait transformer votre vision d’une relation.":
      "Questo mese mette in luce il tuo modo di amare, di creare legami e di costruire vicinanza. Una sottile evoluzione potrebbe trasformare la tua visione di una relazione.",

    "Votre cœur recherche davantage de sincérité et de stabilité. Les liens authentiques auront tendance à se renforcer naturellement au fil des semaines.":
      "Il tuo cuore cerca maggiore sincerità e stabilità. I legami autentici tenderanno a rafforzarsi naturalmente nel corso delle settimane.",

    "Une énergie de renouveau traverse votre vie sentimentale. Elle pourrait vous aider à vous libérer d’une attente, d’un doute ou d’une ancienne façon de fonctionner.":
      "Un'energia di rinnovamento attraversa la tua vita sentimentale. Potrebbe aiutarti a liberarti da un'aspettativa, da un dubbio o da un vecchio modo di funzionare.",

    "Les relations prennent une place particulière ce mois-ci. Vous pourriez ressentir le besoin de savoir plus clairement où vous allez et avec qui.":
      "Le relazioni assumono un'importanza particolare questo mese. Potresti sentire un bisogno più forte di sapere con maggiore chiarezza dove stai andando e con chi.",

    "Votre sensibilité affective sera plus présente. Ce mois peut vous aider à distinguer les liens qui vous nourrissent de ceux qui vous épuisent.":
      "La tua sensibilità affettiva sarà più presente. Questo mese può aiutarti a distinguere i legami che ti nutrono da quelli che ti esauriscono.",

    "Une période d’introspection sentimentale commence. Elle ne vous éloigne pas nécessairement de l’amour, mais vous pousse à rechercher davantage de vérité.":
      "Inizia un periodo di introspezione sentimentale. Non ti allontana necessariamente dall'amore, ma ti spinge a cercare maggiore verità.",

    "Le mois favorise une compréhension plus fine de vos émotions. Vous pourriez mettre des mots sur quelque chose que vous ressentiez depuis longtemps.":
      "Il mese favorisce una comprensione più profonda delle tue emozioni. Potresti finalmente trovare le parole per qualcosa che senti da molto tempo.",

    "Votre vie affective évolue vers davantage de maturité. Les gestes constants compteront plus que les promesses impressionnantes.":
      "La tua vita affettiva si muove verso una maggiore maturità. I gesti costanti conteranno più delle promesse impressionanti.",

    "Les échanges sincères seront essentiels. Une conversation posée pourrait permettre de rapprocher les points de vue ou de résoudre une tension persistante.":
      "La comunicazione sincera sarà essenziale. Una conversazione calma potrebbe aiutare ad avvicinare i punti di vista o a risolvere una tensione persistente.",

    "Vous pourriez ressentir un besoin plus fort de sécurité émotionnelle. Évitez toutefois de demander aux autres de deviner ce que vous n’exprimez pas clairement.":
      "Potresti sentire un bisogno più forte di sicurezza emotiva. Evita però di aspettarti che gli altri indovinino ciò che non esprimi con chiarezza.",

    "Le mois vous invite à observer la réciprocité dans vos relations. Les efforts, l’attention et la présence doivent pouvoir circuler dans les deux sens.":
      "Il mese ti invita a osservare la reciprocità nelle tue relazioni. Impegno, attenzione e presenza dovrebbero poter circolare in entrambe le direzioni.",

    "Une situation affective pourrait évoluer progressivement. Ne cherchez pas nécessairement une réponse immédiate : certains liens ont besoin de temps pour révéler leur véritable direction.":
      "Una situazione affettiva potrebbe evolvere gradualmente. Non cercare necessariamente una risposta immediata: alcuni legami hanno bisogno di tempo per rivelare la loro vera direzione.",

    "Votre intuition relationnelle sera particulièrement vive. Elle vous aidera à sentir les changements d’ambiance, mais elle devra être accompagnée de faits concrets.":
      "La tua intuizione relazionale sarà particolarmente forte. Ti aiuterà a percepire i cambiamenti di atmosfera, ma dovrà essere accompagnata da fatti concreti.",

    "Les prochaines semaines favorisent les rapprochements basés sur la confiance. Une relation sincère pourrait gagner en profondeur grâce à une plus grande vulnérabilité.":
      "Le prossime settimane favoriscono gli avvicinamenti basati sulla fiducia. Una relazione sincera potrebbe diventare più profonda grazie a una maggiore vulnerabilità.",

    "Votre façon de communiquer vos attentes jouera un rôle important. Une demande simple et précise sera mieux reçue qu’un silence rempli de frustration.":
      "Il modo in cui comunichi le tue aspettative avrà un ruolo importante. Una richiesta semplice e precisa sarà accolta meglio di un silenzio pieno di frustrazione.",

    "Le passé pourrait momentanément influencer votre manière d’interpréter une relation actuelle. Prenez soin de ne pas attribuer à une nouvelle personne les erreurs d’une ancienne histoire.":
      "Il passato potrebbe influenzare temporaneamente il modo in cui interpreti una relazione attuale. Fai attenzione a non attribuire a una persona nuova gli errori di una storia precedente.",

    "Une relation pourrait vous demander davantage de patience. Cela ne signifie pas que vous devez tout accepter, mais que certaines réponses apparaîtront progressivement.":
      "Una relazione potrebbe richiederti più pazienza. Questo non significa che tu debba accettare tutto, ma che alcune risposte appariranno gradualmente.",

    "Ce mois vous rappelle que l’amour ne doit pas constamment être compliqué pour être profond. La simplicité peut aussi être un signe de solidité.":
      "Questo mese ti ricorda che l'amore non deve essere continuamente complicato per essere profondo. Anche la semplicità può essere un segno di solidità.",

    "En couple, une conversation importante pourrait vous aider à mieux comprendre les attentes de votre partenaire. L’écoute aura autant de valeur que les mots.":
      "In coppia, una conversazione importante potrebbe aiutarti a capire meglio le aspettative del tuo partner. Ascoltare avrà lo stesso valore delle parole.",

    "Votre relation pourrait gagner en profondeur si chacun accepte de parler honnêtement de ses besoins. Évitez de laisser les suppositions remplacer le dialogue.":
      "La tua relazione potrebbe diventare più profonda se entrambi accettate di parlare con sincerità dei vostri bisogni. Evitate che le supposizioni sostituiscano il dialogo.",

    "Un projet partagé pourrait renforcer votre complicité. Même une décision simple concernant le quotidien peut vous donner l’impression d’avancer dans la même direction.":
      "Un progetto condiviso potrebbe rafforzare la vostra complicità. Anche una semplice decisione quotidiana può darvi la sensazione di procedere nella stessa direzione.",

    "Une ancienne tension peut commencer à s’apaiser. Pour y parvenir, il faudra toutefois éviter de vouloir déterminer qui avait raison ou tort.":
      "Una vecchia tensione può cominciare ad attenuarsi. Per riuscirci, sarà però importante evitare di voler stabilire chi aveva ragione o torto.",

    "Votre partenaire pourrait avoir besoin de davantage de présence. Un geste attentif ou un moment réellement disponible aura plus d’effet qu’une grande promesse.":
      "Il tuo partner potrebbe avere bisogno di maggiore presenza. Un gesto premuroso o un momento di vera disponibilità avrà più effetto di una grande promessa.",

    "Le mois favorise un rapprochement émotionnel. Vous pourriez redécouvrir une facette de votre relation que la routine avait progressivement mise de côté.":
      "Il mese favorisce un avvicinamento emotivo. Potresti riscoprire un aspetto della tua relazione che la routine aveva gradualmente messo da parte.",

    "Une différence de rythme pourrait créer quelques incompréhensions. Respectez les besoins de chacun sans interpréter automatiquement la distance comme un manque d’amour.":
      "Una differenza di ritmo potrebbe creare qualche incomprensione. Rispetta i bisogni di ciascuno senza interpretare automaticamente la distanza come mancanza d'amore.",

    "Votre couple pourrait être amené à prendre une décision concrète. Accordez-vous le temps de vérifier que cette décision respecte les priorités des deux partenaires.":
      "La vostra relazione potrebbe essere chiamata a prendere una decisione concreta. Prendetevi il tempo necessario per verificare che questa decisione rispetti le priorità di entrambi.",

    "La complicité se développera grâce aux gestes simples. Une sortie, une activité partagée ou une soirée calme peut raviver un sentiment de proximité.":
      "La complicità crescerà grazie ai gesti semplici. Un'uscita, un'attività condivisa o una serata tranquilla possono ravvivare il senso di vicinanza.",

    "Votre lien évoluera si chacun accepte de laisser davantage de place à l’expression émotionnelle. La vulnérabilité ne fragilise pas nécessairement la relation : elle peut la rendre plus vraie.":
      "Il vostro legame evolverà se entrambi accettate di lasciare più spazio all'espressione emotiva. La vulnerabilità non indebolisce necessariamente una relazione: può renderla più autentica.",

    "Célibataire, une rencontre pourrait commencer par une conversation légère avant de prendre une signification plus profonde.":
      "Se sei single, un incontro potrebbe iniziare con una conversazione leggera prima di assumere un significato più profondo.",

    "Une personne différente de vos habitudes pourrait attirer votre attention. Ne rejetez pas trop rapidement une connexion simplement parce qu’elle ne ressemble pas à vos histoires précédentes.":
      "Una persona diversa dal tuo tipo abituale potrebbe attirare la tua attenzione. Non respingere troppo rapidamente una connessione solo perché non assomiglia alle tue relazioni precedenti.",

    "Votre pouvoir d’attraction sera plus visible lorsque vous cesserez de vouloir contrôler l’impression que vous donnez. Votre authenticité sera votre meilleur atout.":
      "Il tuo potere di attrazione sarà più evidente quando smetterai di cercare di controllare l'impressione che dai. La tua autenticità sarà il tuo punto di forza maggiore.",

    "Une nouvelle connexion pourrait évoluer lentement. Laissez les comportements réguliers vous montrer les véritables intentions de l’autre personne.":
      "Una nuova connessione potrebbe svilupparsi lentamente. Lascia che i comportamenti costanti ti mostrino le vere intenzioni dell'altra persona.",

    "Le passé pourrait refaire surface sous la forme d’un souvenir, d’un message ou d’une comparaison. Demandez-vous si cette énergie mérite réellement une nouvelle place dans votre vie.":
      "Il passato potrebbe riaffiorare sotto forma di ricordo, messaggio o confronto. Chiediti se questa energia merita davvero un nuovo posto nella tua vita.",

    "Une rencontre progressive semble plus favorable qu’une histoire trop intense dès le départ. Ce qui se construit calmement pourrait devenir plus stable.":
      "Una connessione graduale sembra più favorevole di una relazione troppo intensa fin dall'inizio. Ciò che si costruisce con calma potrebbe diventare più stabile.",

    "Vous pourriez être attiré par une personne qui stimule votre curiosité intellectuelle ou émotionnelle. Prenez le temps de découvrir ce qui se cache derrière la première impression.":
      "Potresti sentirti attratto da una persona che stimola la tua curiosità intellettuale o emotiva. Prenditi il tempo per scoprire cosa si nasconde dietro la prima impressione.",

    "Ce mois vous invite à ne pas confondre mystère et indisponibilité. Une relation prometteuse doit aussi offrir un minimum de clarté.":
      "Questo mese ti invita a non confondere il mistero con l'indisponibilità emotiva. Una relazione promettente dovrebbe offrire anche un minimo di chiarezza.",

    "Une occasion de rencontre pourrait apparaître dans un contexte habituel : travail, activité, réseau social ou cercle d’amis.":
      "Un'occasione per conoscere qualcuno potrebbe presentarsi in un contesto abituale: lavoro, attività, social network o cerchia di amici.",

    "Votre intuition vous aidera à reconnaître une connexion sincère. Vérifiez cependant que les actions de la personne correspondent bien à ses paroles.":
      "La tua intuizione ti aiuterà a riconoscere una connessione sincera. Verifica però che le azioni della persona corrispondano alle sue parole.",

    "Vos émotions pourraient être plus intenses au début du mois, puis retrouver progressivement un meilleur équilibre.":
      "Le tue emozioni potrebbero essere più intense all'inizio del mese, per poi ritrovare gradualmente un equilibrio migliore.",

    "Vous ressentirez probablement un besoin accru de clarté. Les situations ambiguës deviendront plus difficiles à tolérer.":
      "Probabilmente sentirai un bisogno maggiore di chiarezza. Le situazioni ambigue potrebbero diventare più difficili da tollerare.",

    "Le climat émotionnel favorise une prise de conscience. Vous pourriez enfin comprendre pourquoi une situation vous touche autant.":
      "Il clima emotivo favorisce una presa di coscienza. Potresti finalmente capire perché una situazione ti tocca così profondamente.",

    "Une sensibilité plus grande peut vous rendre particulièrement réceptif aux gestes d’affection, mais aussi aux silences et aux changements d’attitude.":
      "Una maggiore sensibilità può renderti particolarmente ricettivo ai gesti d'affetto, ma anche ai silenzi e ai cambiamenti di atteggiamento.",

    "Votre cœur oscillera entre le besoin de proximité et celui de préserver votre espace personnel. Les deux besoins peuvent coexister.":
      "Il tuo cuore potrebbe oscillare tra il bisogno di vicinanza e quello di preservare il tuo spazio personale. Entrambi i bisogni possono coesistere.",

    "Le mois vous pousse à rechercher des liens plus sécurisants. Vous serez moins disposé à investir dans des relations imprévisibles.":
      "Il mese ti spinge a cercare legami più rassicuranti. Sarai meno disposto a investire in relazioni imprevedibili.",

    "Une ancienne peur affective pourrait momentanément refaire surface. Considérez-la comme une information à comprendre plutôt qu’une vérité absolue.":
      "Una vecchia paura affettiva potrebbe riaffiorare temporaneamente. Considerala un'informazione da comprendere, non una verità assoluta.",

    "Votre humeur relationnelle sera influencée par la qualité des échanges. Les paroles vagues pourraient vous fatiguer davantage que d’habitude.":
      "Il tuo stato d'animo relazionale sarà influenzato dalla qualità degli scambi. Le parole vaghe potrebbero stancarti più del solito.",

    "Vous pourriez ressentir un regain de confiance en vous au fil des semaines. Cette énergie modifiera positivement vos choix affectifs.":
      "Potresti sentire una rinnovata fiducia in te stesso con il passare delle settimane. Questa energia influenzerà positivamente le tue scelte affettive.",

    "Votre sensibilité vous aidera à percevoir ce qui n’est pas exprimé. Gardez toutefois une place pour la communication directe.":
      "La tua sensibilità ti aiuterà a percepire ciò che non viene espresso. Lascia però spazio alla comunicazione diretta.",

    "Le principal défi sera de ne pas interpréter chaque silence comme un rejet ou un changement de sentiment.":
      "La sfida principale sarà non interpretare ogni silenzio come un rifiuto o un cambiamento dei sentimenti.",

    "Évitez de chercher une réponse immédiate à une situation encore en évolution. La précipitation pourrait créer davantage de confusion.":
      "Evita di cercare una risposta immediata a una situazione ancora in evoluzione. La fretta potrebbe creare maggiore confusione.",

    "Votre besoin de sécurité pourrait vous pousser à vouloir contrôler les réactions de l’autre. Concentrez-vous plutôt sur ce que vous pouvez exprimer clairement.":
      "Il tuo bisogno di sicurezza potrebbe spingerti a voler controllare le reazioni dell'altra persona. Concentrati invece su ciò che puoi esprimere con chiarezza.",

    "Une attente non formulée pourrait provoquer de la déception. Les autres ne peuvent pas toujours deviner ce dont vous avez besoin.":
      "Un'aspettativa non espressa potrebbe provocare delusione. Gli altri non possono sempre indovinare ciò di cui hai bisogno.",

    "Le passé ne doit pas décider automatiquement de votre avenir affectif. Une nouvelle relation mérite d’être observée pour ce qu’elle est réellement.":
      "Il passato non dovrebbe decidere automaticamente il tuo futuro affettivo. Una nuova relazione merita di essere osservata per ciò che è realmente.",

    "Vous devrez distinguer l’intuition de la peur. L’intuition est généralement calme et précise, tandis que la peur crée de nombreux scénarios.":
      "Dovrai distinguere l'intuizione dalla paura. L'intuizione è generalmente calma e precisa, mentre la paura crea molti scenari.",

    "Le besoin de protéger votre cœur pourrait vous rendre plus distant que vous ne le souhaitez réellement. L’ouverture peut rester progressive.":
      "Il bisogno di proteggere il tuo cuore potrebbe renderti più distante di quanto desideri davvero. L'apertura può restare graduale.",

    "Ne cherchez pas à obtenir une preuve d’amour par une confrontation inutile. Une discussion directe sera beaucoup plus constructive.":
      "Non cercare una prova d'amore attraverso un confronto inutile. Una discussione diretta sarà molto più costruttiva.",

    "Une différence dans la manière de communiquer pourrait créer une incompréhension. Prenez le temps de vérifier ce que l’autre voulait réellement dire.":
      "Una differenza nel modo di comunicare potrebbe creare un'incomprensione. Prenditi il tempo per verificare ciò che l'altra persona voleva davvero dire.",

    "Le défi consistera à préserver vos limites sans transformer chaque désaccord en rupture ou en remise en question complète de la relation.":
      "La sfida consisterà nel preservare i tuoi limiti senza trasformare ogni disaccordo in una rottura o in una completa messa in discussione della relazione.",

    "Exprimez vos besoins avec douceur et précision. Une demande claire évitera de nombreuses interprétations inutiles.":
      "Esprimi i tuoi bisogni con dolcezza e precisione. Una richiesta chiara eviterà molte interpretazioni inutili.",

    "Laissez les gestes confirmer les paroles. La régularité d’une personne vous renseignera davantage que ses promesses.":
      "Lascia che i gesti confermino le parole. La costanza di una persona ti dirà più delle sue promesse.",

    "Ne forcez pas une relation à avancer plus rapidement que sa capacité naturelle. Ce qui est solide n’a pas besoin d’être précipité.":
      "Non forzare una relazione ad avanzare più velocemente del suo ritmo naturale. Ciò che è solido non ha bisogno di essere affrettato.",

    "Accordez de la valeur à la réciprocité. Vous ne devriez pas être la seule personne à entretenir constamment le lien.":
      "Dai valore alla reciprocità. Non dovresti essere l'unica persona a mantenere costantemente il legame.",

    "Prenez le temps d’observer vos réactions avant de répondre sous le coup de l’émotion.":
      "Prenditi il tempo di osservare le tue reazioni prima di rispondere sotto l'effetto dell'emozione.",

    "Ne vous contentez pas de paroles rassurantes si les comportements demeurent incohérents.":
      "Non accontentarti di parole rassicuranti se i comportamenti restano incoerenti.",

    "Conservez vos limites même lorsque votre attachement devient plus fort. Une relation saine ne demande pas de vous abandonner vous-même.":
      "Mantieni i tuoi limiti anche quando il tuo attaccamento diventa più forte. Una relazione sana non ti chiede di abbandonare te stesso.",

    "Faites confiance aux comportements réguliers, aux gestes simples et à la présence réelle.":
      "Fidati dei comportamenti costanti, dei gesti semplici e della presenza autentica.",

    "Choisissez la clarté plutôt que les jeux, les suppositions ou les messages volontairement ambigus.":
      "Scegli la chiarezza invece dei giochi, delle supposizioni o dei messaggi volutamente ambigui.",

    "Permettez à la relation d’évoluer naturellement, mais ne restez pas indéfiniment dans une situation qui ne répond jamais à vos besoins.":
      "Lascia che la relazione evolva naturalmente, ma non restare indefinitamente in una situazione che non risponde mai ai tuoi bisogni.",

    "Ce mois peut transformer votre manière d’aimer en vous aidant à rechercher davantage de clarté, de stabilité et de réciprocité.":
      "Questo mese può trasformare il tuo modo di amare aiutandoti a cercare maggiore chiarezza, stabilità e reciprocità.",

    "Une nouvelle compréhension affective pourrait vous permettre de faire des choix plus respectueux de vos véritables besoins.":
      "Una nuova comprensione affettiva potrebbe permetterti di fare scelte più rispettose dei tuoi veri bisogni.",

    "Votre vie sentimentale progressera grâce à votre capacité à communiquer clairement tout en restant attentif aux actions de l’autre.":
      "La tua vita sentimentale progredirà grazie alla tua capacità di comunicare con chiarezza restando attento alle azioni dell'altra persona.",

    "Le mois vous rappelle que l’amour véritable ne repose pas uniquement sur l’intensité, mais aussi sur la constance et la sécurité.":
      "Il mese ti ricorda che il vero amore non si basa soltanto sull'intensità, ma anche sulla costanza e sulla sicurezza.",

    "Une relation sincère gagne à évoluer dans un climat où chacun peut exprimer ses besoins sans craindre d’être jugé.":
      "Una relazione sincera trae beneficio dal crescere in un ambiente in cui entrambi possono esprimere i propri bisogni senza paura di essere giudicati.",

    "Vous pourriez terminer le mois avec une vision plus précise de ce que vous êtes prêt à construire et de ce que vous ne voulez plus accepter.":
      "Potresti concludere il mese con una visione più chiara di ciò che sei pronto a costruire e di ciò che non vuoi più accettare.",

    "Votre cœur avance vers davantage de maturité. Ce changement vous aidera à reconnaître plus rapidement les relations réellement compatibles avec vous.":
      "Il tuo cuore si muove verso una maggiore maturità. Questo cambiamento ti aiuterà a riconoscere più rapidamente le relazioni davvero compatibili con te.",

    "Les semaines à venir peuvent créer un rapprochement important, à condition de laisser suffisamment de place à l’authenticité.":
      "Le prossime settimane possono creare un avvicinamento importante, a condizione che ci sia abbastanza spazio per l'autenticità.",

    "Une vérité affective pourrait enfin devenir évidente. Elle vous permettra soit de renforcer un lien, soit de vous en libérer avec davantage de sérénité.":
      "Una verità affettiva potrebbe finalmente diventare evidente. Ti permetterà di rafforzare un legame oppure di liberartene con maggiore serenità.",

    "Votre évolution sentimentale dépendra surtout de votre capacité à choisir les relations qui vous offrent autant de présence que vous leur en donnez.":
      "La tua evoluzione sentimentale dipenderà soprattutto dalla tua capacità di scegliere relazioni che ti offrano tanta presenza quanta ne offri tu.",
  },

  pt: {
    "Votre vie sentimentale entre dans une période de clarification. Les prochaines semaines vous aideront à mieux comprendre ce que vous attendez réellement d’une relation.":
      "Sua vida amorosa entra em um período de esclarecimento. As próximas semanas ajudarão você a compreender melhor o que realmente espera de um relacionamento.",

    "Le climat affectif du mois vous invite à accorder davantage d’attention à vos besoins profonds. Certaines émotions pourraient devenir plus faciles à comprendre.":
      "O clima afetivo do mês convida você a prestar mais atenção às suas necessidades profundas. Algumas emoções podem se tornar mais fáceis de compreender.",

    "Ce mois met en lumière votre manière d’aimer, de vous attacher et de créer de la proximité. Une évolution subtile pourrait transformer votre vision d’une relation.":
      "Este mês destaca sua maneira de amar, criar vínculos e construir proximidade. Uma evolução sutil pode transformar sua visão de um relacionamento.",

    "Votre cœur recherche davantage de sincérité et de stabilité. Les liens authentiques auront tendance à se renforcer naturellement au fil des semaines.":
      "Seu coração busca mais sinceridade e estabilidade. Vínculos autênticos tendem a se fortalecer naturalmente ao longo das semanas.",

    "Une énergie de renouveau traverse votre vie sentimentale. Elle pourrait vous aider à vous libérer d’une attente, d’un doute ou d’une ancienne façon de fonctionner.":
      "Uma energia de renovação atravessa sua vida amorosa. Ela pode ajudar você a se libertar de uma expectativa, uma dúvida ou um antigo padrão.",

    "Les relations prennent une place particulière ce mois-ci. Vous pourriez ressentir le besoin de savoir plus clairement où vous allez et avec qui.":
      "Os relacionamentos ganham uma importância especial neste mês. Você pode sentir uma necessidade maior de saber com mais clareza para onde está indo e com quem.",

    "Votre sensibilité affective sera plus présente. Ce mois peut vous aider à distinguer les liens qui vous nourrissent de ceux qui vous épuisent.":
      "Sua sensibilidade afetiva estará mais presente. Este mês pode ajudar você a distinguir os vínculos que nutrem você daqueles que o esgotam.",

    "Une période d’introspection sentimentale commence. Elle ne vous éloigne pas nécessairement de l’amour, mais vous pousse à rechercher davantage de vérité.":
      "Começa um período de introspecção afetiva. Ele não afasta você necessariamente do amor, mas o incentiva a buscar mais verdade.",

    "Le mois favorise une compréhension plus fine de vos émotions. Vous pourriez mettre des mots sur quelque chose que vous ressentiez depuis longtemps.":
      "O mês favorece uma compreensão mais profunda das suas emoções. Você pode finalmente colocar em palavras algo que sente há muito tempo.",

    "Votre vie affective évolue vers davantage de maturité. Les gestes constants compteront plus que les promesses impressionnantes.":
      "Sua vida afetiva avança em direção a uma maior maturidade. Gestos constantes terão mais valor do que promessas impressionantes.",

    "Les échanges sincères seront essentiels. Une conversation posée pourrait permettre de rapprocher les points de vue ou de résoudre une tension persistante.":
      "A comunicação sincera será essencial. Uma conversa tranquila pode ajudar a aproximar pontos de vista ou resolver uma tensão persistente.",

    "Vous pourriez ressentir un besoin plus fort de sécurité émotionnelle. Évitez toutefois de demander aux autres de deviner ce que vous n’exprimez pas clairement.":
      "Você pode sentir uma necessidade maior de segurança emocional. Evite esperar que os outros adivinhem aquilo que você não expressa com clareza.",

    "Le mois vous invite à observer la réciprocité dans vos relations. Les efforts, l’attention et la présence doivent pouvoir circuler dans les deux sens.":
      "O mês convida você a observar a reciprocidade nos seus relacionamentos. Esforço, atenção e presença devem poder circular nos dois sentidos.",

    "Une situation affective pourrait évoluer progressivement. Ne cherchez pas nécessairement une réponse immédiate : certains liens ont besoin de temps pour révéler leur véritable direction.":
      "Uma situação afetiva pode evoluir gradualmente. Não procure necessariamente uma resposta imediata: alguns vínculos precisam de tempo para revelar sua verdadeira direção.",

    "Votre intuition relationnelle sera particulièrement vive. Elle vous aidera à sentir les changements d’ambiance, mais elle devra être accompagnée de faits concrets.":
      "Sua intuição nos relacionamentos estará especialmente aguçada. Ela ajudará você a perceber mudanças de ambiente, mas deve ser acompanhada de fatos concretos.",

    "Les prochaines semaines favorisent les rapprochements basés sur la confiance. Une relation sincère pourrait gagner en profondeur grâce à une plus grande vulnérabilité.":
      "As próximas semanas favorecem aproximações baseadas na confiança. Um relacionamento sincero pode ganhar profundidade por meio de uma maior vulnerabilidade.",

    "Votre façon de communiquer vos attentes jouera un rôle important. Une demande simple et précise sera mieux reçue qu’un silence rempli de frustration.":
      "A forma como você comunica suas expectativas terá um papel importante. Um pedido simples e preciso será melhor recebido do que um silêncio cheio de frustração.",

    "Le passé pourrait momentanément influencer votre manière d’interpréter une relation actuelle. Prenez soin de ne pas attribuer à une nouvelle personne les erreurs d’une ancienne histoire.":
      "O passado pode influenciar temporariamente a maneira como você interpreta um relacionamento atual. Tome cuidado para não atribuir a uma pessoa nova os erros de uma história antiga.",

    "Une relation pourrait vous demander davantage de patience. Cela ne signifie pas que vous devez tout accepter, mais que certaines réponses apparaîtront progressivement.":
      "Um relacionamento pode exigir mais paciência de você. Isso não significa que você deva aceitar tudo, mas que algumas respostas aparecerão gradualmente.",

    "Ce mois vous rappelle que l’amour ne doit pas constamment être compliqué pour être profond. La simplicité peut aussi être un signe de solidité.":
      "Este mês lembra você de que o amor não precisa ser constantemente complicado para ser profundo. A simplicidade também pode ser um sinal de solidez.",

    "En couple, une conversation importante pourrait vous aider à mieux comprendre les attentes de votre partenaire. L’écoute aura autant de valeur que les mots.":
      "Em um relacionamento, uma conversa importante pode ajudar você a compreender melhor as expectativas do seu parceiro. Ouvir terá tanto valor quanto falar.",

    "Votre relation pourrait gagner en profondeur si chacun accepte de parler honnêtement de ses besoins. Évitez de laisser les suppositions remplacer le dialogue.":
      "Seu relacionamento pode ganhar profundidade se ambos aceitarem falar honestamente sobre suas necessidades. Evitem deixar que suposições substituam o diálogo.",

    "Un projet partagé pourrait renforcer votre complicité. Même une décision simple concernant le quotidien peut vous donner l’impression d’avancer dans la même direction.":
      "Um projeto compartilhado pode fortalecer a cumplicidade entre vocês. Até uma decisão simples do cotidiano pode dar a sensação de que estão avançando na mesma direção.",

    "Une ancienne tension peut commencer à s’apaiser. Pour y parvenir, il faudra toutefois éviter de vouloir déterminer qui avait raison ou tort.":
      "Uma antiga tensão pode começar a diminuir. Para isso, será importante evitar a necessidade de determinar quem estava certo ou errado.",

    "Votre partenaire pourrait avoir besoin de davantage de présence. Un geste attentif ou un moment réellement disponible aura plus d’effet qu’une grande promesse.":
      "Seu parceiro pode precisar de mais presença. Um gesto atencioso ou um momento de verdadeira disponibilidade terá mais efeito do que uma grande promessa.",

    "Le mois favorise un rapprochement émotionnel. Vous pourriez redécouvrir une facette de votre relation que la routine avait progressivement mise de côté.":
      "O mês favorece uma aproximação emocional. Você pode redescobrir um aspecto do relacionamento que a rotina havia deixado de lado aos poucos.",

    "Une différence de rythme pourrait créer quelques incompréhensions. Respectez les besoins de chacun sans interpréter automatiquement la distance comme un manque d’amour.":
      "Uma diferença de ritmo pode criar alguns mal-entendidos. Respeite as necessidades de cada um sem interpretar automaticamente a distância como falta de amor.",

    "Votre couple pourrait être amené à prendre une décision concrète. Accordez-vous le temps de vérifier que cette décision respecte les priorités des deux partenaires.":
      "Seu relacionamento pode precisar tomar uma decisão concreta. Reservem um tempo para verificar se essa decisão respeita as prioridades de ambos.",

    "La complicité se développera grâce aux gestes simples. Une sortie, une activité partagée ou une soirée calme peut raviver un sentiment de proximité.":
      "A cumplicidade crescerá por meio de gestos simples. Um passeio, uma atividade compartilhada ou uma noite tranquila podem reacender a sensação de proximidade.",

    "Votre lien évoluera si chacun accepte de laisser davantage de place à l’expression émotionnelle. La vulnérabilité ne fragilise pas nécessairement la relation : elle peut la rendre plus vraie.":
      "O vínculo entre vocês evoluirá se ambos aceitarem dar mais espaço à expressão emocional. A vulnerabilidade não enfraquece necessariamente um relacionamento: ela pode torná-lo mais verdadeiro.",

    "Célibataire, une rencontre pourrait commencer par une conversation légère avant de prendre une signification plus profonde.":
      "Se você está solteiro, um encontro pode começar com uma conversa leve antes de ganhar um significado mais profundo.",

    "Une personne différente de vos habitudes pourrait attirer votre attention. Ne rejetez pas trop rapidement une connexion simplement parce qu’elle ne ressemble pas à vos histoires précédentes.":
      "Uma pessoa diferente do seu tipo habitual pode chamar sua atenção. Não descarte uma conexão rapidamente apenas porque ela não se parece com seus relacionamentos anteriores.",

    "Votre pouvoir d’attraction sera plus visible lorsque vous cesserez de vouloir contrôler l’impression que vous donnez. Votre authenticité sera votre meilleur atout.":
      "Seu poder de atração ficará mais evidente quando você parar de tentar controlar a impressão que causa. Sua autenticidade será sua maior força.",

    "Une nouvelle connexion pourrait évoluer lentement. Laissez les comportements réguliers vous montrer les véritables intentions de l’autre personne.":
      "Uma nova conexão pode se desenvolver lentamente. Deixe que comportamentos constantes mostrem as verdadeiras intenções da outra pessoa.",

    "Le passé pourrait refaire surface sous la forme d’un souvenir, d’un message ou d’une comparaison. Demandez-vous si cette énergie mérite réellement une nouvelle place dans votre vie.":
      "O passado pode reaparecer na forma de uma lembrança, uma mensagem ou uma comparação. Pergunte a si mesmo se essa energia realmente merece um novo espaço na sua vida.",

    "Une rencontre progressive semble plus favorable qu’une histoire trop intense dès le départ. Ce qui se construit calmement pourrait devenir plus stable.":
      "Uma conexão gradual parece mais favorável do que um relacionamento intenso demais desde o início. O que se constrói com calma pode se tornar mais estável.",

    "Vous pourriez être attiré par une personne qui stimule votre curiosité intellectuelle ou émotionnelle. Prenez le temps de découvrir ce qui se cache derrière la première impression.":
      "Você pode se sentir atraído por alguém que estimule sua curiosidade intelectual ou emocional. Reserve um tempo para descobrir o que existe além da primeira impressão.",

    "Ce mois vous invite à ne pas confondre mystère et indisponibilité. Une relation prometteuse doit aussi offrir un minimum de clarté.":
      "Este mês convida você a não confundir mistério com indisponibilidade emocional. Um relacionamento promissor também deve oferecer um mínimo de clareza.",

    "Une occasion de rencontre pourrait apparaître dans un contexte habituel : travail, activité, réseau social ou cercle d’amis.":
      "Uma oportunidade de conhecer alguém pode surgir em um contexto habitual: trabalho, atividade, rede social ou círculo de amigos.",

    "Votre intuition vous aidera à reconnaître une connexion sincère. Vérifiez cependant que les actions de la personne correspondent bien à ses paroles.":
      "Sua intuição ajudará você a reconhecer uma conexão sincera. No entanto, verifique se as ações da pessoa correspondem às palavras dela.",

    "Vos émotions pourraient être plus intenses au début du mois, puis retrouver progressivement un meilleur équilibre.":
      "Suas emoções podem estar mais intensas no início do mês e depois recuperar gradualmente um melhor equilíbrio.",

    "Vous ressentirez probablement un besoin accru de clarté. Les situations ambiguës deviendront plus difficiles à tolérer.":
      "Você provavelmente sentirá uma necessidade maior de clareza. Situações ambíguas podem se tornar mais difíceis de tolerar.",

    "Le climat émotionnel favorise une prise de conscience. Vous pourriez enfin comprendre pourquoi une situation vous touche autant.":
      "O clima emocional favorece uma tomada de consciência. Você pode finalmente compreender por que uma situação afeta você de forma tão profunda.",

    "Une sensibilité plus grande peut vous rendre particulièrement réceptif aux gestes d’affection, mais aussi aux silences et aux changements d’attitude.":
      "Uma sensibilidade maior pode tornar você especialmente receptivo a gestos de afeto, mas também a silêncios e mudanças de atitude.",

    "Votre cœur oscillera entre le besoin de proximité et celui de préserver votre espace personnel. Les deux besoins peuvent coexister.":
      "Seu coração pode oscilar entre a necessidade de proximidade e a necessidade de preservar seu espaço pessoal. As duas necessidades podem coexistir.",

    "Le mois vous pousse à rechercher des liens plus sécurisants. Vous serez moins disposé à investir dans des relations imprévisibles.":
      "O mês incentiva você a buscar vínculos mais seguros. Você estará menos disposto a investir em relacionamentos imprevisíveis.",

    "Une ancienne peur affective pourrait momentanément refaire surface. Considérez-la comme une information à comprendre plutôt qu’une vérité absolue.":
      "Um antigo medo afetivo pode reaparecer temporariamente. Considere-o uma informação a ser compreendida, e não uma verdade absoluta.",

    "Votre humeur relationnelle sera influencée par la qualité des échanges. Les paroles vagues pourraient vous fatiguer davantage que d’habitude.":
      "Seu estado emocional nos relacionamentos será influenciado pela qualidade das trocas. Palavras vagas podem cansar você mais do que o habitual.",

    "Vous pourriez ressentir un regain de confiance en vous au fil des semaines. Cette énergie modifiera positivement vos choix affectifs.":
      "Você pode sentir uma renovada confiança em si mesmo ao longo das semanas. Essa energia influenciará positivamente suas escolhas afetivas.",

    "Votre sensibilité vous aidera à percevoir ce qui n’est pas exprimé. Gardez toutefois une place pour la communication directe.":
      "Sua sensibilidade ajudará você a perceber o que não está sendo expresso. Ainda assim, deixe espaço para a comunicação direta.",

    "Le principal défi sera de ne pas interpréter chaque silence comme un rejet ou un changement de sentiment.":
      "O principal desafio será não interpretar cada silêncio como rejeição ou mudança de sentimentos.",

    "Évitez de chercher une réponse immédiate à une situation encore en évolution. La précipitation pourrait créer davantage de confusion.":
      "Evite buscar uma resposta imediata para uma situação que ainda está evoluindo. A pressa pode criar mais confusão.",

    "Votre besoin de sécurité pourrait vous pousser à vouloir contrôler les réactions de l’autre. Concentrez-vous plutôt sur ce que vous pouvez exprimer clairement.":
      "Sua necessidade de segurança pode levar você a querer controlar as reações da outra pessoa. Concentre-se, em vez disso, no que você pode expressar com clareza.",

    "Une attente non formulée pourrait provoquer de la déception. Les autres ne peuvent pas toujours deviner ce dont vous avez besoin.":
      "Uma expectativa não expressa pode causar decepção. Os outros nem sempre conseguem adivinhar do que você precisa.",

    "Le passé ne doit pas décider automatiquement de votre avenir affectif. Une nouvelle relation mérite d’être observée pour ce qu’elle est réellement.":
      "O passado não deve decidir automaticamente seu futuro afetivo. Um novo relacionamento merece ser observado pelo que realmente é.",

    "Vous devrez distinguer l’intuition de la peur. L’intuition est généralement calme et précise, tandis que la peur crée de nombreux scénarios.":
      "Você precisará distinguir a intuição do medo. A intuição costuma ser calma e precisa, enquanto o medo cria muitos cenários.",

    "Le besoin de protéger votre cœur pourrait vous rendre plus distant que vous ne le souhaitez réellement. L’ouverture peut rester progressive.":
      "A necessidade de proteger seu coração pode deixar você mais distante do que realmente deseja. A abertura pode acontecer gradualmente.",

    "Ne cherchez pas à obtenir une preuve d’amour par une confrontation inutile. Une discussion directe sera beaucoup plus constructive.":
      "Não procure uma prova de amor por meio de um confronto desnecessário. Uma conversa direta será muito mais construtiva.",

    "Une différence dans la manière de communiquer pourrait créer une incompréhension. Prenez le temps de vérifier ce que l’autre voulait réellement dire.":
      "Uma diferença na forma de se comunicar pode criar um mal-entendido. Reserve um tempo para verificar o que a outra pessoa realmente quis dizer.",

    "Le défi consistera à préserver vos limites sans transformer chaque désaccord en rupture ou en remise en question complète de la relation.":
      "O desafio será preservar seus limites sem transformar cada discordância em uma ruptura ou em um questionamento completo do relacionamento.",

    "Exprimez vos besoins avec douceur et précision. Une demande claire évitera de nombreuses interprétations inutiles.":
      "Expresse suas necessidades com suavidade e precisão. Um pedido claro evitará muitas interpretações desnecessárias.",

    "Laissez les gestes confirmer les paroles. La régularité d’une personne vous renseignera davantage que ses promesses.":
      "Deixe que as atitudes confirmem as palavras. A constância de uma pessoa dirá mais do que suas promessas.",

    "Ne forcez pas une relation à avancer plus rapidement que sa capacité naturelle. Ce qui est solide n’a pas besoin d’être précipité.":
      "Não force um relacionamento a avançar mais rápido do que seu ritmo natural. O que é sólido não precisa ser apressado.",

    "Accordez de la valeur à la réciprocité. Vous ne devriez pas être la seule personne à entretenir constamment le lien.":
      "Valorize a reciprocidade. Você não deve ser a única pessoa a manter constantemente o vínculo.",

    "Prenez le temps d’observer vos réactions avant de répondre sous le coup de l’émotion.":
      "Reserve um tempo para observar suas reações antes de responder sob o efeito da emoção.",

    "Ne vous contentez pas de paroles rassurantes si les comportements demeurent incohérents.":
      "Não se contente com palavras tranquilizadoras se os comportamentos continuarem incoerentes.",

    "Conservez vos limites même lorsque votre attachement devient plus fort. Une relation saine ne demande pas de vous abandonner vous-même.":
      "Mantenha seus limites mesmo quando seu apego se tornar mais forte. Um relacionamento saudável não exige que você abandone a si mesmo.",

    "Faites confiance aux comportements réguliers, aux gestes simples et à la présence réelle.":
      "Confie em comportamentos constantes, gestos simples e presença verdadeira.",

    "Choisissez la clarté plutôt que les jeux, les suppositions ou les messages volontairement ambigus.":
      "Escolha a clareza em vez de jogos, suposições ou mensagens deliberadamente ambíguas.",

    "Permettez à la relation d’évoluer naturellement, mais ne restez pas indéfiniment dans une situation qui ne répond jamais à vos besoins.":
      "Permita que o relacionamento evolua naturalmente, mas não permaneça indefinidamente em uma situação que nunca atende às suas necessidades.",

    "Ce mois peut transformer votre manière d’aimer en vous aidant à rechercher davantage de clarté, de stabilité et de réciprocité.":
      "Este mês pode transformar sua maneira de amar ao ajudar você a buscar mais clareza, estabilidade e reciprocidade.",

    "Une nouvelle compréhension affective pourrait vous permettre de faire des choix plus respectueux de vos véritables besoins.":
      "Uma nova compreensão afetiva pode permitir que você faça escolhas mais respeitosas com suas verdadeiras necessidades.",

    "Votre vie sentimentale progressera grâce à votre capacité à communiquer clairement tout en restant attentif aux actions de l’autre.":
      "Sua vida amorosa avançará graças à sua capacidade de se comunicar com clareza enquanto permanece atento às ações da outra pessoa.",

    "Le mois vous rappelle que l’amour véritable ne repose pas uniquement sur l’intensité, mais aussi sur la constance et la sécurité.":
      "O mês lembra você de que o amor verdadeiro não se baseia apenas na intensidade, mas também na constância e na segurança.",

    "Une relation sincère gagne à évoluer dans un climat où chacun peut exprimer ses besoins sans craindre d’être jugé.":
      "Um relacionamento sincero se beneficia de crescer em um ambiente no qual ambos podem expressar suas necessidades sem medo de julgamento.",

    "Vous pourriez terminer le mois avec une vision plus précise de ce que vous êtes prêt à construire et de ce que vous ne voulez plus accepter.":
      "Você pode terminar o mês com uma visão mais clara do que está disposto a construir e do que não quer mais aceitar.",

    "Votre cœur avance vers davantage de maturité. Ce changement vous aidera à reconnaître plus rapidement les relations réellement compatibles avec vous.":
      "Seu coração avança em direção a uma maior maturidade. Essa mudança ajudará você a reconhecer mais rapidamente os relacionamentos realmente compatíveis com você.",

    "Les semaines à venir peuvent créer un rapprochement important, à condition de laisser suffisamment de place à l’authenticité.":
      "As próximas semanas podem criar uma aproximação importante, desde que haja espaço suficiente para a autenticidade.",

    "Une vérité affective pourrait enfin devenir évidente. Elle vous permettra soit de renforcer un lien, soit de vous en libérer avec davantage de sérénité.":
      "Uma verdade afetiva pode finalmente se tornar evidente. Ela permitirá que você fortaleça um vínculo ou se liberte dele com mais serenidade.",

    "Votre évolution sentimentale dépendra surtout de votre capacité à choisir les relations qui vous offrent autant de présence que vous leur en donnez.":
      "Sua evolução afetiva dependerá principalmente da sua capacidade de escolher relacionamentos que ofereçam a você tanta presença quanto você oferece a eles.",
  },
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
