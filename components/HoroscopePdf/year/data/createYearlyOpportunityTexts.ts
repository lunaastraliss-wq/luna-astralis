import type {
  YearlyOpportunityTexts,
} from "./types";

/*
|--------------------------------------------------------------------------
| Banque de textes — Opportunités de l'année
|--------------------------------------------------------------------------
|
| Ces textes couvrent les principales opportunités susceptibles
| d'apparaître au cours de l'année : carrière, finances,
| relations, développement personnel et périodes favorables.
|
|--------------------------------------------------------------------------
*/

export function createYearlyOpportunityTexts(): YearlyOpportunityTexts {
  return {
    /*
    |--------------------------------------------------------------------------
    | Introduction
    |--------------------------------------------------------------------------
    */

    introduction: [
      "Cette année pourrait ouvrir une porte importante dans un domaine que vous cherchez à faire évoluer depuis quelque temps.",

      "Les prochains mois favorisent les occasions discrètes, mais prometteuses. Une proposition modeste pourrait contenir un potentiel plus grand qu’il n’y paraît.",

      "Une période d’ouverture commence. Votre capacité à reconnaître une occasion au bon moment fera une réelle différence.",

      "Cette année vous place devant de nouvelles possibilités. Certaines demanderont une réponse rapide, tandis que d’autres devront mûrir avant d’être saisies.",

      "Une occasion pourrait apparaître là où vous ne l’attendiez pas. Restez attentif aux changements, aux rencontres et aux conversations spontanées.",

      "Les prochains mois vous encouragent à sortir légèrement de vos habitudes afin de découvrir une possibilité plus adaptée à vos ambitions.",

      "Votre potentiel d’évolution augmente cette année. Une décision simple pourrait produire des effets durables.",

      "Une nouvelle perspective pourrait modifier votre manière d’aborder un projet, une relation ou un choix personnel.",

      "L’année favorise les initiatives réfléchies. Une occasion réelle pourrait se présenter si vous acceptez de faire le premier pas.",

      "Vous pourriez constater qu’une situation auparavant bloquée commence enfin à offrir davantage de possibilités.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Opportunité principale
    |--------------------------------------------------------------------------
    */

    mainOpportunity: [
      "L’occasion principale pourrait concerner un projet que vous n’aviez pas encore osé développer pleinement.",

      "Une nouvelle responsabilité pourrait vous permettre de démontrer une compétence importante.",

      "Une rencontre pourrait vous mettre en contact avec une personne capable d’élargir vos perspectives.",

      "Une proposition inattendue pourrait vous aider à avancer plus rapidement que prévu.",

      "Un changement dans votre environnement pourrait créer une possibilité jusque-là inaccessible.",

      "Une idée ancienne pourrait retrouver toute sa pertinence dans le contexte actuel.",

      "Une occasion de vous faire connaître, de présenter votre travail ou de défendre une idée pourrait apparaître.",

      "Un choix que vous avez longtemps repoussé pourrait devenir plus simple à assumer.",

      "Une amélioration progressive pourrait commencer dans un domaine qui vous préoccupait.",

      "Une nouvelle manière d’utiliser vos compétences pourrait ouvrir une voie intéressante.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Opportunité professionnelle
    |--------------------------------------------------------------------------
    */

    professionalOpportunity: [
      "Une occasion professionnelle pourrait apparaître grâce à une recommandation, une discussion ou un ancien contact.",

      "Vous pourriez recevoir une proposition qui vous permettra d’élargir vos responsabilités ou votre visibilité.",

      "Une compétence sous-estimée pourrait devenir un avantage important dans votre travail.",

      "L’année favorise les candidatures, les présentations, les négociations et les démarches structurées.",

      "Un projet secondaire pourrait commencer à montrer un potentiel professionnel réel.",

      "Une collaboration pourrait accélérer une idée qui avançait jusque-là trop lentement.",

      "Une personne pourrait reconnaître la qualité de votre travail et vous offrir une possibilité concrète.",

      "Une formation ou un nouvel apprentissage pourrait améliorer votre position dans les prochains mois.",

      "Vous pourriez être amené à occuper une place plus importante dans une équipe ou un projet.",

      "Une décision audacieuse, mais préparée, pourrait modifier favorablement votre trajectoire professionnelle.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Opportunité financière
    |--------------------------------------------------------------------------
    */

    financialOpportunity: [
      "Une occasion d’améliorer vos revenus pourrait apparaître sous la forme d’un mandat, d’une vente ou d’une activité complémentaire.",

      "Une négociation pourrait vous permettre d’obtenir de meilleures conditions financières.",

      "Une dépense réduite ou une meilleure organisation pourrait créer une marge de manœuvre bienvenue.",

      "Vous pourriez découvrir une façon plus rentable d’utiliser une compétence ou une ressource déjà disponible.",

      "Une information utile pourrait vous permettre de récupérer un montant, de profiter d’un avantage ou d’éviter une dépense.",

      "Un revenu attendu pourrait enfin se concrétiser.",

      "Une occasion financière pourrait demander une décision rapide, mais elle devra tout de même être vérifiée soigneusement.",

      "Une proposition modeste pourrait devenir plus intéressante à moyen terme.",

      "Vous pourriez poser une base solide pour une nouvelle source de revenu.",

      "Une amélioration financière pourrait commencer par un choix simple et raisonnable effectué cette année.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Opportunité relationnelle
    |--------------------------------------------------------------------------
    */

    relationshipOpportunity: [
      "Une relation pourrait s’approfondir grâce à une conversation plus sincère.",

      "Une nouvelle rencontre pourrait vous apporter de la légèreté, du soutien ou une perspective différente.",

      "Un rapprochement pourrait devenir possible après une période de distance ou d’incompréhension.",

      "Vous pourriez rencontrer une personne avec qui la confiance s’installera naturellement.",

      "Une occasion de réparer ou de clarifier une relation pourrait apparaître.",

      "Une invitation pourrait vous permettre de renforcer un lien important.",

      "Une personne de votre entourage pourrait se montrer plus disponible ou plus ouverte que prévu.",

      "Une nouvelle dynamique relationnelle pourrait vous aider à vous sentir davantage compris.",

      "Vous pourriez découvrir qu’une relation possède plus de potentiel que vous ne l’aviez imaginé.",

      "Une conversation spontanée pourrait marquer le début d’un lien important.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Opportunité personnelle
    |--------------------------------------------------------------------------
    */

    personalOpportunity: [
      "Une occasion de mieux vous connaître pourrait apparaître à travers une décision ou une expérience nouvelle.",

      "Vous pourriez retrouver une motivation que vous croyiez perdue.",

      "Un changement d’habitude pourrait améliorer plusieurs aspects de votre quotidien.",

      "L’année favorise une reprise progressive d’un projet personnel important.",

      "Vous pourriez découvrir une activité capable de vous apporter davantage de satisfaction ou d’équilibre.",

      "Une prise de conscience pourrait vous aider à abandonner une limite devenue inutile.",

      "Vous pourriez vous sentir prêt à essayer une approche différente dans un domaine où vous tourniez en rond.",

      "Une nouvelle routine pourrait renforcer votre confiance et votre énergie.",

      "Un choix personnel pourrait vous rapprocher d’un mode de vie plus fidèle à vos besoins.",

      "Une expérience inattendue pourrait révéler une capacité que vous n’utilisiez pas encore pleinement.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Périodes importantes
    |--------------------------------------------------------------------------
    */

    keyPeriods: [
      "Le début de l’année favorisera la préparation des projets qui porteront leurs fruits plus tard.",

      "Le printemps pourrait apporter plusieurs nouvelles occasions professionnelles ou personnelles.",

      "Le milieu de l’année sera favorable aux décisions importantes et aux nouvelles collaborations.",

      "L’été pourrait ouvrir une porte inattendue grâce à une rencontre ou un déplacement.",

      "L’automne favorisera les concrétisations, les signatures et les projets mûrement préparés.",

      "La fin de l’année permettra de récolter les résultats de vos efforts des derniers mois.",

      "Certaines opportunités demanderont d’être saisies rapidement, tandis que d’autres exigeront davantage de patience.",

      "Le deuxième semestre pourrait devenir particulièrement favorable à votre évolution.",

      "Les périodes les plus porteuses seront celles où vous oserez sortir de votre zone de confort.",

      "Une succession de petites occasions pourrait produire un changement bien plus important que prévu.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Action recommandée
    |--------------------------------------------------------------------------
    */

    action: [
      "Faites le premier pas au lieu d’attendre un signe parfait.",

      "Préparez vos arguments, vos documents ou votre proposition avant que l’occasion ne se présente.",

      "Répondez avec intérêt, mais accordez-vous le temps de vérifier les détails.",

      "Parlez de votre projet aux personnes capables de vous conseiller ou de vous mettre en contact avec les bonnes ressources.",

      "Acceptez une petite ouverture si elle peut mener vers une possibilité plus importante.",

      "Montrez clairement ce que vous savez faire au lieu de supposer que les autres le remarquent automatiquement.",

      "Choisissez l’occasion qui correspond réellement à vos priorités plutôt que celle qui semble la plus impressionnante.",

      "Restez disponible aux ajustements sans perdre de vue votre objectif principal.",

      "Saisissez l’occasion de poser une question, de proposer une idée ou de demander une réponse claire.",

      "Avancez avec confiance, mais évitez de vous engager avant d’avoir compris toutes les conditions.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Prudence
    |--------------------------------------------------------------------------
    */

    caution: [
      "Toutes les occasions ne méritent pas d’être acceptées. Vérifiez ce qu’elles exigent réellement de votre temps et de votre énergie.",

      "Une proposition séduisante pourrait cacher des attentes imprécises ou trop importantes.",

      "Évitez de confondre urgence et véritable opportunité.",

      "Une occasion pourrait être moins avantageuse si elle vous oblige à abandonner une priorité essentielle.",

      "Ne vous engagez pas uniquement pour éviter de décevoir une personne.",

      "Une réponse rapide sera parfois nécessaire, mais elle ne devrait jamais remplacer une vérification sérieuse.",

      "Le désir de changement pourrait vous pousser à idéaliser une possibilité encore mal définie.",

      "Une occasion réelle doit également respecter vos limites et vos valeurs.",

      "Évitez de multiplier les engagements simplement parce que plusieurs portes s’ouvrent en même temps.",

      "Une proposition prometteuse devra être évaluée selon ses effets à long terme et non seulement selon son attrait immédiat.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Conclusion
    |--------------------------------------------------------------------------
    */

    conclusion: [
      "Cette année pourrait devenir une période d’ouverture importante si vous restez attentif, préparé et fidèle à vos priorités.",

      "Une occasion réelle pourrait vous permettre d’avancer vers une situation plus stimulante et plus adaptée à vos besoins.",

      "Les prochains mois vous montreront que certaines portes s’ouvrent lorsque vous acceptez enfin de vous présenter devant elles.",

      "Votre capacité à reconnaître le bon moment pourrait transformer une possibilité discrète en véritable progression.",

      "Vous pourriez terminer l’année avec une nouvelle direction, un projet relancé ou une relation enrichissante.",

      "Une décision prise avec discernement pourrait créer des effets positifs bien au-delà de cette année.",

      "Cette année favorise les occasions qui demandent autant de courage que de préparation.",

      "Une nouvelle possibilité pourrait confirmer que vos efforts récents n’étaient pas inutiles.",

      "Votre ouverture au changement vous permettra de découvrir une voie plus prometteuse.",

      "En restant attentif aux détails et aux rencontres, vous pourriez saisir une occasion particulièrement constructive.",
    ],
  };
}
