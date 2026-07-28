import type {
  YearlyFinanceTexts,
} from "./types";

/*
|--------------------------------------------------------------------------
| Banque de textes — Finances annuelles
|--------------------------------------------------------------------------
|
| Ces textes sont adaptés à un horoscope annuel.
| Ils couvrent la gestion des ressources, les revenus, les dépenses,
| les investissements, les occasions financières et les périodes clés.
|
|--------------------------------------------------------------------------
*/

export function createYearlyFinanceTexts(): YearlyFinanceTexts {
  return {
    /*
    |--------------------------------------------------------------------------
    | Introduction
    |--------------------------------------------------------------------------
    */

    introduction: [
      "Votre situation financière entre dans une année où la structure et la prévoyance feront une réelle différence. Plusieurs ajustements simples pourraient améliorer durablement votre sentiment de sécurité.",

      "Le climat financier de l’année vous invite à revoir certaines habitudes. Une meilleure vision de vos revenus, de vos dépenses et de vos priorités vous aidera à prendre des décisions plus sereines.",

      "Les prochains mois favorisent une gestion plus consciente de vos ressources. Vous pourriez découvrir qu’une petite correction régulière produit un effet plus important qu’une décision spectaculaire.",

      "Cette année met en lumière votre rapport à l’argent, à la sécurité et aux priorités matérielles. Une décision réfléchie pourrait alléger une pression persistante.",

      "Une période de réorganisation financière commence. Elle vous aidera à mieux distinguer les dépenses réellement utiles de celles qui répondent surtout à une impulsion ou à une inquiétude.",

      "Votre attention se porte davantage sur la stabilité financière. L’année convient bien à la planification, aux vérifications et aux choix à long terme.",

      "Une prise de conscience concernant vos finances pourrait modifier positivement votre manière de gérer les prochains mois.",

      "L’année vous encourage à reprendre le contrôle sur un aspect financier resté flou. Plus vos chiffres seront clairs, plus vos décisions deviendront simples.",

      "Votre rapport aux dépenses et à l’épargne évolue vers davantage de réalisme. Vous pourriez ressentir le besoin de protéger plus sérieusement vos ressources.",

      "Une nouvelle approche financière pourrait vous apporter davantage de tranquillité. Le but ne sera pas de tout restreindre, mais de mieux choisir.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Tendance générale
    |--------------------------------------------------------------------------
    */

    general: [
      "Votre stabilité dépendra surtout de votre capacité à suivre vos chiffres réels plutôt qu’à vous fier à une impression générale.",

      "Une planification claire vous aidera à éviter les décisions prises dans l’urgence ou sous l’effet d’une émotion passagère.",

      "Vous pourriez être amené à rééquilibrer certaines priorités. Ce qui semblait indispensable pourrait progressivement devenir secondaire.",

      "L’année favorise les décisions prudentes et progressives. Évitez les engagements financiers difficiles à modifier par la suite.",

      "Une meilleure organisation administrative pourrait vous faire gagner du temps et prévenir une erreur, un retard ou un oubli coûteux.",

      "Votre situation pourrait s’améliorer grâce à une démarche simple : comparer, négocier, réduire une dépense inutile ou revoir une échéance.",

      "Une question financière restée en suspens pourrait enfin devenir plus claire. Attendez toutefois d’avoir toutes les informations avant d’agir.",

      "Cette année vous rappelle que la sécurité se construit surtout par la constance. De petits gestes réguliers seront plus utiles qu’une transformation soudaine.",

      "Une dépense imprévue pourrait demander un ajustement temporaire. Gardez une marge de manœuvre au lieu d’utiliser toutes vos ressources immédiatement.",

      "Votre capacité à faire des choix réalistes vous permettra de traverser l’année avec davantage de confiance.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Revenus
    |--------------------------------------------------------------------------
    */

    income: [
      "Une possibilité d’augmenter vos revenus pourrait apparaître par une tâche supplémentaire, une vente, un mandat ou une nouvelle idée.",

      "Un revenu attendu pourrait demander davantage de patience. Vérifiez les délais avant de compter sur cet argent.",

      "Une compétence personnelle pourrait être mieux utilisée pour créer une source de revenu complémentaire.",

      "L’année favorise les démarches visant à mieux valoriser votre travail ou à revoir un tarif devenu trop faible.",

      "Une occasion financière pourrait naître d’un contact professionnel, d’une recommandation ou d’une ancienne relation.",

      "Vous pourriez constater qu’une activité secondaire mérite davantage d’attention. Son potentiel pourrait être supérieur à ce que vous imaginiez.",

      "Une discussion concernant votre rémunération pourrait devenir nécessaire. Préparez des arguments précis et réalistes.",

      "Un projet lent à démarrer pourrait commencer à produire des résultats. Continuez toutefois à surveiller les coûts et les délais.",

      "Une nouvelle manière d’utiliser vos ressources pourrait créer un avantage financier à moyen ou à long terme.",

      "L’année vous encourage à diversifier vos possibilités sans multiplier les risques inutiles.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Dépenses
    |--------------------------------------------------------------------------
    */

    expenses: [
      "Une dépense impulsive pourrait sembler justifiée sur le moment. Accordez-vous un délai avant de confirmer un achat important.",

      "Certains frais récurrents méritent d’être vérifiés. Vous pourriez payer pour un service peu utilisé ou devenu inutile.",

      "Une réparation, une facture ou une obligation pourrait demander plus que prévu. Évitez de reporter les vérifications importantes.",

      "L’année convient bien à la réduction des dépenses invisibles qui s’accumulent sans apporter de réelle satisfaction.",

      "Vous pourriez être tenté de dépenser pour améliorer temporairement votre humeur. Cherchez d’abord une solution qui ne fragilise pas votre budget.",

      "Une comparaison de prix ou une négociation pourrait vous permettre d’économiser davantage que prévu.",

      "Les dépenses liées au confort, aux loisirs ou aux projets personnels devront rester proportionnelles à vos autres responsabilités.",

      "Évitez de prêter ou d’avancer une somme que vous ne pourriez pas vous permettre de perdre.",

      "Une dépense importante devrait être examinée sous plusieurs angles avant d’être confirmée.",

      "Votre budget gagnera en stabilité si vous fixez une limite claire aux achats non essentiels.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Investissements et épargne
    |--------------------------------------------------------------------------
    */

    investments: [
      "Cette année favorise la constitution progressive d’une réserve de sécurité avant toute prise de risque plus importante.",

      "Un projet d’investissement mérite d’être étudié avec méthode. La qualité des informations comptera davantage que l’enthousiasme initial.",

      "Votre épargne pourrait devenir plus régulière si vous automatisez une partie de vos décisions financières.",

      "Une stratégie à long terme sera probablement plus favorable qu’une recherche de gains rapides.",

      "Vous pourriez revoir la manière dont vos ressources sont réparties entre sécurité, projets et croissance.",

      "Une décision patrimoniale ou matérielle importante demandera plusieurs vérifications avant d’être confirmée.",

      "L’année vous invite à mieux distinguer un investissement réfléchi d’une dépense présentée comme une occasion.",

      "Un projet à long terme pourrait commencer à devenir plus concret grâce à une discipline financière régulière.",

      "La diversification peut protéger vos ressources, à condition de bien comprendre chaque engagement.",

      "Votre meilleure décision pourrait être de renforcer d’abord votre stabilité avant de chercher un rendement plus élevé.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Opportunités financières
    |--------------------------------------------------------------------------
    */

    opportunities: [
      "Une occasion intéressante pourrait apparaître sous une forme discrète. Prenez le temps d’évaluer son potentiel réel.",

      "Une négociation bien préparée pourrait améliorer vos conditions financières ou réduire une dépense importante.",

      "L’année favorise la recherche de solutions plus économiques sans sacrifier la qualité.",

      "Une idée liée à vos compétences pourrait devenir une source de revenu supplémentaire.",

      "Vous pourriez recevoir une proposition qui mérite d’être étudiée, même si elle ne correspond pas exactement à votre plan initial.",

      "Une amélioration financière pourrait venir d’une meilleure organisation plutôt que d’une hausse immédiate des revenus.",

      "Une information utile pourrait vous aider à profiter d’un programme, d’un remboursement ou d’une réduction.",

      "Une vente, un remboursement ou un montant inattendu pourrait alléger temporairement votre situation.",

      "Cette année vous offre une occasion de poser une base plus solide pour les années suivantes.",

      "Un choix raisonnable fait maintenant pourrait produire un avantage financier durable.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Risques
    |--------------------------------------------------------------------------
    */

    risks: [
      "Le principal risque sera de prendre une décision financière pour calmer une émotion ou répondre à une pression extérieure.",

      "Une proposition séduisante pourrait comporter des conditions moins avantageuses qu’elles ne le paraissent.",

      "Évitez de compter sur un revenu qui n’est pas encore confirmé.",

      "Un manque de vérification pourrait entraîner une dépense évitable ou une mauvaise compréhension d’un contrat.",

      "Le désir d’aller trop vite pourrait vous pousser à accepter un engagement difficile à soutenir.",

      "Une personne pourrait minimiser les risques d’une décision. Appuyez-vous sur des faits précis et vérifiables.",

      "Le besoin de faire plaisir pourrait vous amener à dépasser vos limites financières.",

      "Une dépense répétée de faible montant pourrait devenir beaucoup plus importante à la fin de l’année.",

      "Le risque principal sera de remettre à plus tard une question financière qui exige une réponse claire.",

      "Une confiance excessive pourrait vous faire négliger un détail important. Relisez les conditions avant de signer ou de payer.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Périodes importantes
    |--------------------------------------------------------------------------
    */

    keyPeriods: [
      "Le début de l’année favorisera les bilans, les vérifications et la mise en place d’un budget plus réaliste.",

      "Le printemps pourrait apporter une occasion d’augmenter vos revenus ou de réduire une dépense importante.",

      "Le milieu de l’année demandera davantage de prudence face aux achats impulsifs ou aux engagements trop rapides.",

      "L’été pourra favoriser certains projets personnels, à condition de conserver une réserve suffisante.",

      "Le début de l’automne sera propice aux négociations, aux révisions de contrats et aux décisions administratives.",

      "La fin de l’année favorisera la consolidation, l’épargne et la préparation des objectifs futurs.",

      "Une amélioration pourrait apparaître progressivement au cours du deuxième semestre.",

      "Une période de ralentissement vous permettra de corriger une faiblesse avant qu’elle ne devienne plus coûteuse.",

      "Les meilleures périodes seront celles où vous prendrez le temps de comparer plusieurs options avant de décider.",

      "Une occasion importante pourrait demander une réponse rapide, mais elle devra tout de même être vérifiée avec soin.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Conseils
    |--------------------------------------------------------------------------
    */

    advice: [
      "Établissez des limites claires pour les dépenses non essentielles et vérifiez-les régulièrement.",

      "Examinez vos abonnements, vos prélèvements automatiques et vos dépenses récurrentes.",

      "Gardez une réserve disponible pour les imprévus plutôt que d’utiliser immédiatement chaque montant reçu.",

      "Comparez plusieurs options avant de prendre une décision financière importante.",

      "Évitez de mélanger urgence émotionnelle et urgence financière.",

      "Suivez vos dépenses assez longtemps pour identifier les habitudes qui fragilisent réellement votre budget.",

      "Ne vous engagez pas sur la base d’une promesse vague. Demandez des chiffres, des dates et des conditions précises.",

      "Concentrez-vous sur une amélioration réaliste plutôt que sur une transformation financière instantanée.",

      "Protégez votre stabilité avant de chercher un rendement plus élevé.",

      "Prenez des décisions capables de vous apporter encore de la tranquillité dans plusieurs mois.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Conclusion
    |--------------------------------------------------------------------------
    */

    conclusion: [
      "Cette année peut améliorer votre stabilité financière si vous avancez avec méthode, modération et lucidité.",

      "Votre situation évoluera favorablement grâce à des choix simples, réguliers et bien vérifiés.",

      "Une meilleure compréhension de vos priorités vous aidera à utiliser vos ressources avec davantage de confiance.",

      "Les prochains mois peuvent vous permettre de reprendre le contrôle sur un aspect financier devenu trop lourd ou trop flou.",

      "Vous pourriez terminer l’année avec une vision plus réaliste et plus rassurante de votre situation.",

      "Votre progression financière dépendra surtout de votre capacité à éviter les décisions impulsives.",

      "Cette année vous rappelle que la sécurité se construit davantage par la constance que par les solutions rapides.",

      "Une décision prudente prise cette année pourrait devenir l’un de vos choix les plus utiles.",

      "Votre rapport à l’argent évolue vers davantage de maturité et de discernement.",

      "En respectant vos limites et vos priorités, vous pourrez traverser l’année avec davantage de stabilité.",
    ],
  };
}
