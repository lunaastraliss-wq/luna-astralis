import type {
  YearlyCareerTexts,
} from "./types";

/*
|--------------------------------------------------------------------------
| Banque de textes — Travail et carrière annuelle
|--------------------------------------------------------------------------
|
| Ces textes sont adaptés à un horoscope annuel.
| Ils couvrent l'évolution professionnelle sur plusieurs mois et permettent
| de construire une lecture plus approfondie qu'un simple horoscope mensuel.
|
|--------------------------------------------------------------------------
*/

export function createYearlyCareerTexts(): YearlyCareerTexts {
  return {
    /*
    |--------------------------------------------------------------------------
    | Introduction
    |--------------------------------------------------------------------------
    */

    introduction: [
      "Votre vie professionnelle entre dans une année où la vision à long terme jouera un rôle déterminant. Les prochains mois vous aideront à construire des bases plus solides.",

      "Cette année favorise une progression réfléchie dans votre carrière. Certaines décisions prises récemment commenceront progressivement à produire leurs effets.",

      "Le climat professionnel vous invite à revoir votre manière d'investir votre temps, votre énergie et vos priorités. Une meilleure organisation pourrait transformer votre efficacité.",

      "Votre carrière pourrait connaître une évolution importante. Il ne s'agira pas forcément d'un changement spectaculaire, mais d'une progression durable.",

      "Une année de consolidation commence. Vous serez amené à protéger ce qui fonctionne tout en améliorant les aspects qui limitent encore votre évolution.",

      "Cette période met en lumière vos ambitions profondes. Vous pourriez ressentir le besoin de construire un projet davantage aligné avec vos valeurs.",

      "Votre environnement professionnel demandera parfois de l'adaptation. Votre souplesse deviendra un véritable atout face aux changements.",

      "Les prochains mois vous encouragent à mieux reconnaître la valeur de vos compétences. Votre travail mérite d'être présenté avec davantage d'assurance.",

      "Une nouvelle dynamique pourrait progressivement s'installer dans votre quotidien professionnel. Les efforts passés commenceront à devenir plus visibles.",

      "Cette année vous pousse à réfléchir à la direction que vous souhaitez réellement donner à votre carrière pour les années à venir.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Tendance générale
    |--------------------------------------------------------------------------
    */

    general: [
      "Votre efficacité dépendra principalement de votre capacité à distinguer les tâches urgentes des objectifs réellement importants.",

      "Une meilleure organisation vous permettra d'avancer avec davantage de constance. La régularité produira plus de résultats que les efforts ponctuels.",

      "Votre travail pourrait être remarqué par une personne capable d'influencer positivement votre évolution professionnelle.",

      "Une évolution dans vos méthodes pourrait améliorer considérablement votre productivité. Restez ouvert aux nouvelles façons de travailler.",

      "Vous pourriez ressentir un besoin croissant d'autonomie. Cherchez davantage de liberté tout en respectant vos engagements.",

      "Votre progression sera progressive mais solide. Chaque étape préparera naturellement la suivante.",

      "Certaines responsabilités demanderont davantage de concentration. Une approche structurée évitera une fatigue inutile.",

      "Votre capacité à résoudre des problèmes complexes renforcera progressivement votre crédibilité.",

      "Cette année vous invite à travailler avec davantage de stratégie plutôt qu'avec davantage d'efforts.",

      "Une situation professionnelle deviendra progressivement plus claire grâce à une meilleure compréhension de votre environnement.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Projets
    |--------------------------------------------------------------------------
    */

    projects: [
      "Un projet qui avançait lentement pourrait finalement prendre de l'ampleur au cours de l'année.",

      "Une idée ancienne mérite probablement d'être développée davantage. Les prochains mois sont favorables à sa structuration.",

      "Vous pourriez modifier certains éléments de votre plan initial. Cette adaptation renforcera vos chances de réussite.",

      "L'année favorise les projets demandant de la patience, de la méthode et une vision à long terme.",

      "Une collaboration pourrait accélérer votre progression. Choisissez des partenaires partageant vos objectifs.",

      "Un projet personnel pourrait progressivement prendre une place plus importante dans votre quotidien.",

      "Une réponse longtemps attendue pourrait enfin arriver. Préparez-vous à agir rapidement lorsque l'occasion se présentera.",

      "Une nouvelle responsabilité pourrait modifier votre organisation, mais aussi ouvrir une évolution positive.",

      "L'année convient particulièrement à la réalisation de projets ambitieux demandant plusieurs étapes.",

      "Votre créativité pourrait devenir l'un de vos meilleurs leviers de progression.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Évolution professionnelle
    |--------------------------------------------------------------------------
    */

    professionalEvolution: [
      "Votre carrière pourrait évoluer plus rapidement que vous ne l'imaginez actuellement si vous acceptez de sortir progressivement de votre zone de confort.",

      "Une nouvelle compétence acquise cette année pourrait ouvrir des portes importantes dans les années suivantes.",

      "Votre crédibilité continuera de grandir grâce à votre constance et à votre sérieux.",

      "Une évolution de poste, de responsabilités ou de statut pourrait devenir envisageable.",

      "Cette année favorise les décisions construites sur une vision durable plutôt que sur des résultats immédiats.",

      "Vous développerez progressivement davantage de confiance dans vos capacités professionnelles.",

      "Votre expérience deviendra un véritable avantage compétitif face à de nouveaux défis.",

      "Les prochains mois pourraient modifier votre façon de définir la réussite professionnelle.",

      "Vous pourriez découvrir une nouvelle orientation correspondant davantage à vos aspirations profondes.",

      "Chaque étape franchie renforcera progressivement votre indépendance professionnelle.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Relations professionnelles
    |--------------------------------------------------------------------------
    */

    relationships: [
      "Les échanges professionnels gagneront à rester simples, précis et transparents.",

      "Une personne expérimentée pourrait devenir un mentor ou un allié précieux.",

      "Une tension pourrait être résolue grâce à une communication directe.",

      "Votre diplomatie vous aidera à défendre vos idées sans créer de conflits inutiles.",

      "Une collaboration importante pourrait naître d'une rencontre apparemment anodine.",

      "Votre professionnalisme renforcera naturellement votre réputation.",

      "Un collègue ou un partenaire pourrait jouer un rôle déterminant dans votre progression.",

      "Votre réseau professionnel gagnera progressivement en importance.",

      "Une ancienne relation professionnelle pourrait réapparaître sous une forme favorable.",

      "Le dialogue restera votre meilleur outil pour résoudre les désaccords.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Opportunités
    |--------------------------------------------------------------------------
    */

    opportunities: [
      "Une évolution importante pourrait prendre la forme d'un nouveau mandat, d'une promotion ou d'un partenariat.",

      "Une compétence rarement utilisée pourrait devenir votre principal avantage.",

      "Cette année favorise les candidatures, les négociations et les nouvelles initiatives.",

      "Une opportunité modeste au départ pourrait produire des effets durables.",

      "Vous pourriez participer à un projet augmentant votre visibilité professionnelle.",

      "Une amélioration de vos conditions de travail deviendra possible grâce à une meilleure communication.",

      "Une nouvelle source de revenus pourrait progressivement apparaître.",

      "Une formation ou un apprentissage stratégique pourrait accélérer votre évolution.",

      "Votre capacité à prendre une initiative au bon moment fera la différence.",

      "Une rencontre pourrait transformer positivement votre vision de votre avenir professionnel.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Périodes importantes
    |--------------------------------------------------------------------------
    */

    keyPeriods: [
      "Le début de l'année favorisera la préparation et la planification des grands projets.",

      "Le printemps pourrait accélérer plusieurs dossiers restés en attente.",

      "Le milieu de l'année favorisera les collaborations et les décisions importantes.",

      "L'été permettra de consolider les progrès déjà réalisés.",

      "L'automne sera particulièrement favorable aux nouveaux projets et aux responsabilités accrues.",

      "La fin de l'année favorisera les bilans, les récompenses et les nouvelles perspectives.",

      "Certaines occasions demanderont une réaction rapide au cours du deuxième semestre.",

      "Les périodes les plus favorables seront celles où vous resterez fidèle à votre stratégie.",

      "Une phase de ralentissement apparent permettra finalement de préparer une évolution plus importante.",

      "La patience deviendra votre meilleur allié lorsque les résultats sembleront tarder.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Défis
    |--------------------------------------------------------------------------
    */

    challenge: [
      "Le principal défi sera d'éviter la dispersion.",

      "Vous pourriez accepter davantage de responsabilités que nécessaire.",

      "L'impatience pourrait vous pousser à modifier trop rapidement une stratégie efficace.",

      "Veillez à ne pas confondre activité et réelle progression.",

      "Une critique pourrait temporairement affecter votre confiance.",

      "Le besoin de tout contrôler pourrait ralentir certains projets.",

      "Des situations ambiguës demanderont davantage de communication.",

      "Votre concentration devra être protégée des nombreuses distractions.",

      "Le perfectionnisme pourrait retarder la finalisation de certains objectifs.",

      "Le défi principal sera de préserver votre équilibre tout en poursuivant vos ambitions.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Conseils
    |--------------------------------------------------------------------------
    */

    advice: [
      "Définissez des objectifs réalistes pour chaque trimestre.",

      "Présentez vos idées avec confiance et méthode.",

      "Construisez votre progression étape par étape.",

      "Investissez votre énergie dans les projets ayant un véritable potentiel.",

      "Développez continuellement vos compétences.",

      "Acceptez les ajustements sans perdre votre objectif principal.",

      "N'hésitez pas à demander conseil aux personnes expérimentées.",

      "Prenez le temps de reconnaître les progrès déjà accomplis.",

      "Préservez un bon équilibre entre ambition et qualité de vie.",

      "Faites preuve de constance : les résultats les plus durables demandent du temps.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Conclusion
    |--------------------------------------------------------------------------
    */

    conclusion: [
      "Cette année peut renforcer durablement votre position professionnelle si vous avancez avec méthode et confiance.",

      "Votre progression dépendra davantage de votre constance que de la rapidité de vos résultats.",

      "Une nouvelle étape importante pourrait commencer dans votre carrière.",

      "Vous développerez progressivement une vision beaucoup plus claire de votre avenir professionnel.",

      "Cette année pourrait devenir un véritable tournant dans votre évolution.",

      "Vos compétences gagneront progressivement en reconnaissance.",

      "Votre carrière évoluera favorablement si vous restez fidèle à vos objectifs.",

      "Les décisions prises cette année auront des effets positifs pendant plusieurs années.",

      "Une progression discrète mais solide représentera votre plus grande réussite.",

      "Votre avenir professionnel gagnera en stabilité à mesure que vous construirez sur des bases durables.",
    ],
  };
}
