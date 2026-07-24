import type {
  MonthlyLoveTexts,
} from "./types";

/*
|--------------------------------------------------------------------------
| Banque de textes — Amour
|--------------------------------------------------------------------------
|
| Ces textes sont adaptés à un horoscope mensuel.
| Chaque catégorie contient plusieurs variantes pouvant être combinées.
|
|--------------------------------------------------------------------------
*/

export function createMonthlyLoveTexts(): MonthlyLoveTexts {
  return {
    introduction: [
      "Votre vie sentimentale entre dans une période de clarification. Les prochaines semaines vous aideront à mieux comprendre ce que vous attendez réellement d’une relation.",

      "Le climat affectif du mois vous invite à accorder davantage d’attention à vos besoins profonds. Certaines émotions pourraient devenir plus faciles à comprendre.",

      "Ce mois met en lumière votre manière d’aimer, de vous attacher et de créer de la proximité. Une évolution subtile pourrait transformer votre vision d’une relation.",

      "Votre cœur recherche davantage de sincérité et de stabilité. Les liens authentiques auront tendance à se renforcer naturellement au fil des semaines.",

      "Une énergie de renouveau traverse votre vie sentimentale. Elle pourrait vous aider à vous libérer d’une attente, d’un doute ou d’une ancienne façon de fonctionner.",

      "Les relations prennent une place particulière ce mois-ci. Vous pourriez ressentir le besoin de savoir plus clairement où vous allez et avec qui.",

      "Votre sensibilité affective sera plus présente. Ce mois peut vous aider à distinguer les liens qui vous nourrissent de ceux qui vous épuisent.",

      "Une période d’introspection sentimentale commence. Elle ne vous éloigne pas nécessairement de l’amour, mais vous pousse à rechercher davantage de vérité.",

      "Le mois favorise une compréhension plus fine de vos émotions. Vous pourriez mettre des mots sur quelque chose que vous ressentiez depuis longtemps.",

      "Votre vie affective évolue vers davantage de maturité. Les gestes constants compteront plus que les promesses impressionnantes.",
    ],

    general: [
      "Les échanges sincères seront essentiels. Une conversation posée pourrait permettre de rapprocher les points de vue ou de résoudre une tension persistante.",

      "Vous pourriez ressentir un besoin plus fort de sécurité émotionnelle. Évitez toutefois de demander aux autres de deviner ce que vous n’exprimez pas clairement.",

      "Le mois vous invite à observer la réciprocité dans vos relations. Les efforts, l’attention et la présence doivent pouvoir circuler dans les deux sens.",

      "Une situation affective pourrait évoluer progressivement. Ne cherchez pas nécessairement une réponse immédiate : certains liens ont besoin de temps pour révéler leur véritable direction.",

      "Votre intuition relationnelle sera particulièrement vive. Elle vous aidera à sentir les changements d’ambiance, mais elle devra être accompagnée de faits concrets.",

      "Les prochaines semaines favorisent les rapprochements basés sur la confiance. Une relation sincère pourrait gagner en profondeur grâce à une plus grande vulnérabilité.",

      "Votre façon de communiquer vos attentes jouera un rôle important. Une demande simple et précise sera mieux reçue qu’un silence rempli de frustration.",

      "Le passé pourrait momentanément influencer votre manière d’interpréter une relation actuelle. Prenez soin de ne pas attribuer à une nouvelle personne les erreurs d’une ancienne histoire.",

      "Une relation pourrait vous demander davantage de patience. Cela ne signifie pas que vous devez tout accepter, mais que certaines réponses apparaîtront progressivement.",

      "Ce mois vous rappelle que l’amour ne doit pas constamment être compliqué pour être profond. La simplicité peut aussi être un signe de solidité.",
    ],

    couple: [
      "En couple, une conversation importante pourrait vous aider à mieux comprendre les attentes de votre partenaire. L’écoute aura autant de valeur que les mots.",

      "Votre relation pourrait gagner en profondeur si chacun accepte de parler honnêtement de ses besoins. Évitez de laisser les suppositions remplacer le dialogue.",

      "Un projet partagé pourrait renforcer votre complicité. Même une décision simple concernant le quotidien peut vous donner l’impression d’avancer dans la même direction.",

      "Une ancienne tension peut commencer à s’apaiser. Pour y parvenir, il faudra toutefois éviter de vouloir déterminer qui avait raison ou tort.",

      "Votre partenaire pourrait avoir besoin de davantage de présence. Un geste attentif ou un moment réellement disponible aura plus d’effet qu’une grande promesse.",

      "Le mois favorise un rapprochement émotionnel. Vous pourriez redécouvrir une facette de votre relation que la routine avait progressivement mise de côté.",

      "Une différence de rythme pourrait créer quelques incompréhensions. Respectez les besoins de chacun sans interpréter automatiquement la distance comme un manque d’amour.",

      "Votre couple pourrait être amené à prendre une décision concrète. Accordez-vous le temps de vérifier que cette décision respecte les priorités des deux partenaires.",

      "La complicité se développera grâce aux gestes simples. Une sortie, une activité partagée ou une soirée calme peut raviver un sentiment de proximité.",

      "Votre lien évoluera si chacun accepte de laisser davantage de place à l’expression émotionnelle. La vulnérabilité ne fragilise pas nécessairement la relation : elle peut la rendre plus vraie.",
    ],

    single: [
      "Célibataire, une rencontre pourrait commencer par une conversation légère avant de prendre une signification plus profonde.",

      "Une personne différente de vos habitudes pourrait attirer votre attention. Ne rejetez pas trop rapidement une connexion simplement parce qu’elle ne ressemble pas à vos histoires précédentes.",

      "Votre pouvoir d’attraction sera plus visible lorsque vous cesserez de vouloir contrôler l’impression que vous donnez. Votre authenticité sera votre meilleur atout.",

      "Une nouvelle connexion pourrait évoluer lentement. Laissez les comportements réguliers vous montrer les véritables intentions de l’autre personne.",

      "Le passé pourrait refaire surface sous la forme d’un souvenir, d’un message ou d’une comparaison. Demandez-vous si cette énergie mérite réellement une nouvelle place dans votre vie.",

      "Une rencontre progressive semble plus favorable qu’une histoire trop intense dès le départ. Ce qui se construit calmement pourrait devenir plus stable.",

      "Vous pourriez être attiré par une personne qui stimule votre curiosité intellectuelle ou émotionnelle. Prenez le temps de découvrir ce qui se cache derrière la première impression.",

      "Ce mois vous invite à ne pas confondre mystère et indisponibilité. Une relation prometteuse doit aussi offrir un minimum de clarté.",

      "Une occasion de rencontre pourrait apparaître dans un contexte habituel : travail, activité, réseau social ou cercle d’amis.",

      "Votre intuition vous aidera à reconnaître une connexion sincère. Vérifiez cependant que les actions de la personne correspondent bien à ses paroles.",
    ],

    emotionalClimate: [
      "Vos émotions pourraient être plus intenses au début du mois, puis retrouver progressivement un meilleur équilibre.",

      "Vous ressentirez probablement un besoin accru de clarté. Les situations ambiguës deviendront plus difficiles à tolérer.",

      "Le climat émotionnel favorise une prise de conscience. Vous pourriez enfin comprendre pourquoi une situation vous touche autant.",

      "Une sensibilité plus grande peut vous rendre particulièrement réceptif aux gestes d’affection, mais aussi aux silences et aux changements d’attitude.",

      "Votre cœur oscillera entre le besoin de proximité et celui de préserver votre espace personnel. Les deux besoins peuvent coexister.",

      "Le mois vous pousse à rechercher des liens plus sécurisants. Vous serez moins disposé à investir dans des relations imprévisibles.",

      "Une ancienne peur affective pourrait momentanément refaire surface. Considérez-la comme une information à comprendre plutôt qu’une vérité absolue.",

      "Votre humeur relationnelle sera influencée par la qualité des échanges. Les paroles vagues pourraient vous fatiguer davantage que d’habitude.",

      "Vous pourriez ressentir un regain de confiance en vous au fil des semaines. Cette énergie modifiera positivement vos choix affectifs.",

      "Votre sensibilité vous aidera à percevoir ce qui n’est pas exprimé. Gardez toutefois une place pour la communication directe.",
    ],

    challenge: [
      "Le principal défi sera de ne pas interpréter chaque silence comme un rejet ou un changement de sentiment.",

      "Évitez de chercher une réponse immédiate à une situation encore en évolution. La précipitation pourrait créer davantage de confusion.",

      "Votre besoin de sécurité pourrait vous pousser à vouloir contrôler les réactions de l’autre. Concentrez-vous plutôt sur ce que vous pouvez exprimer clairement.",

      "Une attente non formulée pourrait provoquer de la déception. Les autres ne peuvent pas toujours deviner ce dont vous avez besoin.",

      "Le passé ne doit pas décider automatiquement de votre avenir affectif. Une nouvelle relation mérite d’être observée pour ce qu’elle est réellement.",

      "Vous devrez distinguer l’intuition de la peur. L’intuition est généralement calme et précise, tandis que la peur crée de nombreux scénarios.",

      "Le besoin de protéger votre cœur pourrait vous rendre plus distant que vous ne le souhaitez réellement. L’ouverture peut rester progressive.",

      "Ne cherchez pas à obtenir une preuve d’amour par une confrontation inutile. Une discussion directe sera beaucoup plus constructive.",

      "Une différence dans la manière de communiquer pourrait créer une incompréhension. Prenez le temps de vérifier ce que l’autre voulait réellement dire.",

      "Le défi consistera à préserver vos limites sans transformer chaque désaccord en rupture ou en remise en question complète de la relation.",
    ],

    advice: [
      "Exprimez vos besoins avec douceur et précision. Une demande claire évitera de nombreuses interprétations inutiles.",

      "Laissez les gestes confirmer les paroles. La régularité d’une personne vous renseignera davantage que ses promesses.",

      "Ne forcez pas une relation à avancer plus rapidement que sa capacité naturelle. Ce qui est solide n’a pas besoin d’être précipité.",

      "Accordez de la valeur à la réciprocité. Vous ne devriez pas être la seule personne à entretenir constamment le lien.",

      "Prenez le temps d’observer vos réactions avant de répondre sous le coup de l’émotion.",

      "Ne vous contentez pas de paroles rassurantes si les comportements demeurent incohérents.",

      "Conservez vos limites même lorsque votre attachement devient plus fort. Une relation saine ne demande pas de vous abandonner vous-même.",

      "Faites confiance aux comportements réguliers, aux gestes simples et à la présence réelle.",

      "Choisissez la clarté plutôt que les jeux, les suppositions ou les messages volontairement ambigus.",

      "Permettez à la relation d’évoluer naturellement, mais ne restez pas indéfiniment dans une situation qui ne répond jamais à vos besoins.",
    ],

    conclusion: [
      "Ce mois peut transformer votre manière d’aimer en vous aidant à rechercher davantage de clarté, de stabilité et de réciprocité.",

      "Une nouvelle compréhension affective pourrait vous permettre de faire des choix plus respectueux de vos véritables besoins.",

      "Votre vie sentimentale progressera grâce à votre capacité à communiquer clairement tout en restant attentif aux actions de l’autre.",

      "Le mois vous rappelle que l’amour véritable ne repose pas uniquement sur l’intensité, mais aussi sur la constance et la sécurité.",

      "Une relation sincère gagne à évoluer dans un climat où chacun peut exprimer ses besoins sans craindre d’être jugé.",

      "Vous pourriez terminer le mois avec une vision plus précise de ce que vous êtes prêt à construire et de ce que vous ne voulez plus accepter.",

      "Votre cœur avance vers davantage de maturité. Ce changement vous aidera à reconnaître plus rapidement les relations réellement compatibles avec vous.",

      "Les semaines à venir peuvent créer un rapprochement important, à condition de laisser suffisamment de place à l’authenticité.",

      "Une vérité affective pourrait enfin devenir évidente. Elle vous permettra soit de renforcer un lien, soit de vous en libérer avec davantage de sérénité.",

      "Votre évolution sentimentale dépendra surtout de votre capacité à choisir les relations qui vous offrent autant de présence que vous leur en donnez.",
    ],
  };
}
