import type {
  YearlyLoveTexts,
} from "./types";

/*
|--------------------------------------------------------------------------
| Banque de textes — Amour annuel
|--------------------------------------------------------------------------
|
| Ces textes sont adaptés à un horoscope annuel.
| Chaque catégorie contient plusieurs variantes pouvant être combinées
| pour produire une lecture sentimentale personnalisée et stable.
|
| La structure reprend celle du moteur mensuel, avec l’ajout des périodes
| importantes de l’année.
|
|--------------------------------------------------------------------------
*/

export function createYearlyLoveTexts(): YearlyLoveTexts {
  return {
    /*
    |--------------------------------------------------------------------------
    | Introduction
    |--------------------------------------------------------------------------
    */

    introduction: [
      "Votre vie sentimentale entre dans une année de clarification et d’évolution. Les prochains mois vous aideront à mieux comprendre ce que vous attendez réellement de l’amour et des relations.",

      "Le climat affectif de l’année vous invite à accorder davantage d’attention à vos besoins profonds. Certaines émotions deviendront plus faciles à reconnaître, à exprimer et à comprendre.",

      "Cette année met en lumière votre manière d’aimer, de vous attacher et de créer de la proximité. Une évolution importante pourrait transformer votre vision des relations.",

      "Votre cœur recherche davantage de sincérité, de stabilité et de réciprocité. Les liens authentiques auront tendance à se renforcer progressivement au fil de l’année.",

      "Une énergie de renouveau traverse votre vie sentimentale. Elle pourrait vous aider à vous libérer d’une attente, d’un doute ou d’une ancienne manière de fonctionner.",

      "Les relations occupent une place particulière cette année. Vous pourriez ressentir le besoin de savoir plus clairement où vous allez et avec qui vous souhaitez réellement avancer.",

      "Votre sensibilité affective sera plus présente au cours des prochains mois. Cette année vous aidera à distinguer les liens qui vous nourrissent de ceux qui vous épuisent.",

      "Une période d’introspection sentimentale commence. Elle ne vous éloigne pas nécessairement de l’amour, mais vous pousse à rechercher davantage de vérité et de profondeur.",

      "L’année favorise une compréhension plus fine de vos émotions. Vous pourriez enfin mettre des mots sur quelque chose que vous ressentez depuis longtemps.",

      "Votre vie affective évolue vers davantage de maturité. Les gestes constants compteront plus que les promesses impressionnantes ou les émotions passagères.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Tendance générale
    |--------------------------------------------------------------------------
    */

    general: [
      "Les échanges sincères seront essentiels tout au long de l’année. Une conversation posée pourrait rapprocher les points de vue ou permettre de résoudre une tension persistante.",

      "Vous pourriez ressentir un besoin plus fort de sécurité émotionnelle. Évitez toutefois de demander aux autres de deviner ce que vous n’exprimez pas clairement.",

      "L’année vous invite à observer la réciprocité dans vos relations. Les efforts, l’attention et la présence devront pouvoir circuler dans les deux sens.",

      "Une situation affective pourrait évoluer progressivement. Ne cherchez pas nécessairement une réponse immédiate : certains liens auront besoin de plusieurs mois pour révéler leur véritable direction.",

      "Votre intuition relationnelle sera particulièrement vive. Elle vous aidera à ressentir les changements d’ambiance, mais elle devra toujours être accompagnée de faits concrets.",

      "Les prochains mois favorisent les rapprochements basés sur la confiance. Une relation sincère pourrait gagner en profondeur grâce à une plus grande vulnérabilité.",

      "Votre façon de communiquer vos attentes jouera un rôle important. Une demande simple et précise sera mieux reçue qu’un silence rempli de frustration.",

      "Le passé pourrait influencer votre manière d’interpréter une relation actuelle. Prenez soin de ne pas attribuer à une nouvelle personne les erreurs d’une ancienne histoire.",

      "Une relation pourrait vous demander davantage de patience. Cela ne signifie pas que vous devez tout accepter, mais que certaines réponses apparaîtront progressivement.",

      "Cette année vous rappelle que l’amour ne doit pas constamment être compliqué pour être profond. La simplicité peut aussi être un signe de solidité.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Vie de couple
    |--------------------------------------------------------------------------
    */

    couple: [
      "En couple, plusieurs conversations importantes pourraient vous aider à mieux comprendre les attentes de votre partenaire. L’écoute aura autant de valeur que les mots.",

      "Votre relation pourrait gagner en profondeur si chacun accepte de parler honnêtement de ses besoins. Évitez de laisser les suppositions remplacer le dialogue.",

      "Un projet partagé pourrait renforcer votre complicité. Une décision concernant le quotidien, le foyer ou l’avenir peut vous donner l’impression d’avancer dans la même direction.",

      "Une ancienne tension peut progressivement commencer à s’apaiser. Pour y parvenir, il faudra toutefois éviter de vouloir déterminer constamment qui avait raison ou tort.",

      "Votre partenaire pourrait avoir besoin de davantage de présence à certains moments de l’année. Un geste attentif aura parfois plus d’effet qu’une grande promesse.",

      "L’année favorise un rapprochement émotionnel. Vous pourriez redécouvrir une facette de votre relation que la routine avait progressivement mise de côté.",

      "Une différence de rythme pourrait créer quelques incompréhensions. Respectez les besoins de chacun sans interpréter automatiquement la distance comme un manque d’amour.",

      "Votre couple pourrait être amené à prendre une décision concrète. Accordez-vous le temps de vérifier qu’elle respecte les priorités des deux partenaires.",

      "La complicité se développera grâce aux gestes simples et réguliers. Les moments partagés renforceront davantage votre lien que les démonstrations occasionnelles.",

      "Votre relation évoluera si chacun accepte de laisser davantage de place à l’expression émotionnelle. La vulnérabilité peut rendre votre lien plus sincère et plus solide.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Célibat et rencontres
    |--------------------------------------------------------------------------
    */

    single: [
      "Célibataire, une rencontre pourrait commencer par une conversation légère avant de prendre une signification plus profonde au fil des mois.",

      "Une personne différente de vos habitudes pourrait attirer votre attention. Ne rejetez pas trop rapidement une connexion parce qu’elle ne ressemble pas à vos histoires précédentes.",

      "Votre pouvoir d’attraction sera plus visible lorsque vous cesserez de vouloir contrôler l’impression que vous donnez. Votre authenticité sera votre meilleur atout.",

      "Une nouvelle connexion pourrait évoluer lentement. Laissez les comportements réguliers vous montrer les véritables intentions de l’autre personne.",

      "Le passé pourrait refaire surface sous la forme d’un souvenir, d’un message ou d’une comparaison. Demandez-vous si cette énergie mérite réellement une nouvelle place dans votre vie.",

      "Une rencontre progressive semble plus favorable qu’une histoire trop intense dès le départ. Ce qui se construit calmement pourrait devenir plus stable.",

      "Vous pourriez être attiré par une personne qui stimule votre curiosité intellectuelle ou émotionnelle. Prenez le temps de découvrir ce qui se cache derrière la première impression.",

      "Cette année vous invite à ne pas confondre mystère et indisponibilité. Une relation prometteuse doit aussi offrir un minimum de clarté.",

      "Une occasion de rencontre pourrait apparaître dans un contexte habituel : travail, activité, réseau social, voyage ou cercle d’amis.",

      "Votre intuition vous aidera à reconnaître une connexion sincère. Vérifiez toutefois que les actions de la personne correspondent bien à ses paroles.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Climat émotionnel
    |--------------------------------------------------------------------------
    */

    emotionalClimate: [
      "Vos émotions pourraient traverser plusieurs phases au cours de l’année. Une période plus intense sera suivie d’un retour progressif vers davantage d’équilibre.",

      "Vous ressentirez probablement un besoin accru de clarté. Les situations ambiguës deviendront de plus en plus difficiles à tolérer.",

      "Le climat émotionnel favorise une prise de conscience importante. Vous pourriez enfin comprendre pourquoi une situation vous touche autant.",

      "Une sensibilité plus grande peut vous rendre particulièrement réceptif aux gestes d’affection, mais aussi aux silences et aux changements d’attitude.",

      "Votre cœur oscillera parfois entre le besoin de proximité et celui de préserver votre espace personnel. Ces deux besoins peuvent parfaitement coexister.",

      "L’année vous pousse à rechercher des liens plus sécurisants. Vous serez progressivement moins disposé à investir dans des relations imprévisibles.",

      "Une ancienne peur affective pourrait refaire surface. Considérez-la comme une information à comprendre plutôt que comme une vérité absolue.",

      "Votre équilibre relationnel sera influencé par la qualité des échanges. Les paroles vagues pourraient vous fatiguer davantage qu’auparavant.",

      "Vous pourriez ressentir un regain de confiance en vous au fil de l’année. Cette évolution modifiera positivement vos choix affectifs.",

      "Votre sensibilité vous aidera à percevoir ce qui n’est pas exprimé. Gardez toutefois toujours une place importante pour la communication directe.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Périodes importantes
    |--------------------------------------------------------------------------
    */

    keyPeriods: [
      "Le début de l’année favorise la réflexion et la clarification. Une situation sentimentale pourrait demander du temps avant de révéler son véritable potentiel.",

      "Le printemps apporte une énergie de rapprochement. Les échanges deviennent plus naturels et une relation peut commencer à évoluer plus rapidement.",

      "Le milieu de l’année mettra en lumière la réciprocité dans vos relations. Vous verrez plus clairement quels liens méritent votre attention.",

      "L’été pourrait favoriser les rencontres, les sorties et les rapprochements spontanés. Une connexion légère peut progressivement gagner en profondeur.",

      "Une période plus sensible pourrait apparaître autour du milieu de l’année. Elle vous demandera de ne pas prendre chaque réaction comme une remise en question complète du lien.",

      "Le début de l’automne encourage les décisions importantes. Une relation pourrait se renforcer, changer de direction ou demander une clarification définitive.",

      "La fin de l’année favorise davantage de stabilité. Vous pourriez ressentir le besoin de construire quelque chose de plus concret et de plus sécurisant.",

      "Une première partie d’année introspective sera suivie d’une période plus ouverte aux rapprochements et aux nouvelles expériences.",

      "Certaines réponses pourraient apparaître au cours du deuxième semestre. Une situation longtemps ambiguë deviendra progressivement plus facile à comprendre.",

      "Les périodes les plus favorables seront celles où vous accepterez de communiquer clairement sans chercher à contrôler immédiatement le résultat.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Défis affectifs
    |--------------------------------------------------------------------------
    */

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

    /*
    |--------------------------------------------------------------------------
    | Conseils
    |--------------------------------------------------------------------------
    */

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

    /*
    |--------------------------------------------------------------------------
    | Conclusion
    |--------------------------------------------------------------------------
    */

    conclusion: [
      "Cette année peut transformer votre manière d’aimer en vous aidant à rechercher davantage de clarté, de stabilité et de réciprocité.",

      "Une nouvelle compréhension affective pourrait vous permettre de faire des choix plus respectueux de vos véritables besoins.",

      "Votre vie sentimentale progressera grâce à votre capacité à communiquer clairement tout en restant attentif aux actions de l’autre.",

      "L’année vous rappelle que l’amour véritable ne repose pas uniquement sur l’intensité, mais aussi sur la constance et la sécurité.",

      "Une relation sincère gagne à évoluer dans un climat où chacun peut exprimer ses besoins sans craindre d’être jugé.",

      "Vous pourriez terminer l’année avec une vision plus précise de ce que vous êtes prêt à construire et de ce que vous ne voulez plus accepter.",

      "Votre cœur avance vers davantage de maturité. Cette évolution vous aidera à reconnaître plus rapidement les relations réellement compatibles avec vous.",

      "Les prochains mois peuvent créer un rapprochement important, à condition de laisser suffisamment de place à l’authenticité.",

      "Une vérité affective pourrait devenir évidente. Elle vous permettra soit de renforcer un lien, soit de vous en libérer avec davantage de sérénité.",

      "Votre évolution sentimentale dépendra surtout de votre capacité à choisir les relations qui vous offrent autant de présence que vous leur en donnez.",
    ],
  };
}
