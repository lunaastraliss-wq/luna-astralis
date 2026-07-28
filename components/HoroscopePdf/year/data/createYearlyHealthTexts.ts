import type {
  YearlyHealthTexts,
} from "./types";

/*
|--------------------------------------------------------------------------
| Banque de textes — Bien-être et énergie annuelle
|--------------------------------------------------------------------------
|
| Ces textes couvrent l’évolution du bien-être sur l’ensemble de l’année :
| énergie, équilibre émotionnel, repos, habitudes et périodes importantes.
|
|--------------------------------------------------------------------------
*/

export function createYearlyHealthTexts(): YearlyHealthTexts {
  return {
    /*
    |--------------------------------------------------------------------------
    | Introduction
    |--------------------------------------------------------------------------
    */

    introduction: [
      "Votre bien-être dépendra cette année de votre capacité à respecter votre rythme réel. Votre énergie pourrait évoluer par cycles au fil des mois.",

      "Les prochains mois vous invitent à mieux écouter les signaux de votre corps. Certains ralentissements ponctuels pourraient vous aider à retrouver un meilleur équilibre.",

      "Cette année met l’accent sur la récupération, la qualité du repos et la gestion plus consciente de votre énergie quotidienne.",

      "Votre équilibre physique et émotionnel demandera davantage de constance. Les petites habitudes répétées auront plus d’effet que les changements brusques.",

      "Une période de recentrage commence. Vous pourriez ressentir le besoin de mieux protéger votre sommeil, votre calme et vos moments de récupération.",

      "Votre vitalité pourrait s’améliorer si vous acceptez de simplifier certaines obligations et de réduire les sources de fatigue inutiles.",

      "L’année vous encourage à prendre soin de vous avant que la fatigue ne devienne trop importante.",

      "Votre corps pourrait vous demander davantage d’attention. Il sera utile de distinguer une baisse d’énergie passagère d’un besoin réel de repos.",

      "Une meilleure hygiène de vie pourrait progressivement améliorer votre énergie et votre humeur au cours des prochains mois.",

      "Cette année vous aide à retrouver un équilibre plus stable entre activité, repos et bien-être émotionnel.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Énergie
    |--------------------------------------------------------------------------
    */

    energy: [
      "Votre énergie pourrait être plus forte pendant certaines périodes de l’année. Profitez de ces phases pour accomplir les tâches les plus exigeantes.",

      "Une baisse de vitalité pourrait apparaître après une période trop chargée. Évitez d’attendre l’épuisement avant de ralentir.",

      "Votre niveau d’énergie sera étroitement lié à la qualité de votre sommeil et à la régularité de vos habitudes.",

      "Vous pourriez connaître des périodes d’élan suivies de moments plus calmes. Respectez cette alternance sans culpabilité.",

      "Une activité physique modérée pourrait vous aider à retrouver davantage de tonus et de clarté mentale.",

      "Votre énergie augmentera lorsque vous cesserez de vous disperser dans des tâches secondaires.",

      "Vous pourriez ressentir le besoin de bouger davantage. Choisissez une activité agréable plutôt qu’une discipline trop exigeante.",

      "Un rythme plus régulier vous permettra de conserver votre énergie plus longtemps au fil de l’année.",

      "Votre vitalité pourrait être influencée par votre environnement. Le calme, l’air frais et l’ordre vous feront du bien.",

      "Vous gagnerez à prévoir des pauses avant que votre concentration et votre patience ne diminuent.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Équilibre émotionnel
    |--------------------------------------------------------------------------
    */

    emotionalBalance: [
      "Votre sensibilité pourrait être plus forte pendant certaines périodes. Accordez-vous du recul avant de réagir à une situation chargée émotionnellement.",

      "Une émotion ancienne pourrait refaire surface afin d’être comprise différemment.",

      "Vous pourriez absorber plus facilement les tensions des autres. Protégez votre espace intérieur.",

      "Le calme reviendra lorsque vous cesserez d’essayer de résoudre immédiatement chaque inconfort.",

      "Une conversation sincère pourrait alléger une pression émotionnelle accumulée depuis quelque temps.",

      "Votre équilibre dépendra de votre capacité à exprimer vos besoins avant d’atteindre votre limite.",

      "Vous pourriez ressentir un besoin plus grand de solitude ou de silence. Respectez-le sans vous isoler complètement.",

      "Un changement d’environnement ou de rythme pourrait vous aider à retrouver une meilleure perspective.",

      "Votre humeur pourrait s’améliorer grâce à une routine simple et rassurante.",

      "L’année vous invite à faire davantage de place aux activités qui vous apaisent réellement.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Repos
    |--------------------------------------------------------------------------
    */

    rest: [
      "Votre sommeil mérite une attention particulière cette année. Une routine plus stable pourrait améliorer durablement votre récupération.",

      "Évitez de prolonger vos journées simplement pour terminer une tâche qui pourrait attendre.",

      "Votre corps pourrait avoir besoin de davantage de repos pendant certaines périodes. Ne considérez pas cela comme un manque de motivation.",

      "Une meilleure transition entre activité et sommeil pourrait réduire les tensions accumulées.",

      "L’année favorise les moments de pause planifiés plutôt que les arrêts imposés par la fatigue.",

      "Vous pourriez bénéficier d’un environnement plus calme avant le coucher.",

      "Une courte période de repos en journée pourrait être utile si elle ne perturbe pas votre sommeil nocturne.",

      "Votre récupération sera meilleure si vous limitez les stimulations tard en soirée.",

      "Le repos mental sera aussi important que le repos physique. Éloignez-vous régulièrement des écrans et des préoccupations.",

      "Une période de repos bien utilisée pourrait complètement modifier votre perception d’une situation difficile.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Habitudes
    |--------------------------------------------------------------------------
    */

    habits: [
      "Une nouvelle habitude simple pourrait améliorer votre bien-être si vous la répétez avec régularité tout au long de l’année.",

      "L’année convient bien à la reprise progressive d’une activité physique ou d’une routine de soins.",

      "Évitez de vouloir transformer toutes vos habitudes en même temps. Choisissez un seul changement prioritaire.",

      "Une meilleure hydratation et des repas plus réguliers pourraient soutenir votre énergie.",

      "Votre motivation augmentera si votre routine reste réaliste et agréable.",

      "Vous pourriez constater qu’une habitude apparemment banale influence fortement votre humeur.",

      "Une organisation plus simple de vos journées réduira la fatigue liée aux décisions répétées.",

      "L’année favorise les progrès constants plutôt que les efforts intenses de courte durée.",

      "Préparez votre environnement afin qu’il facilite les habitudes que vous souhaitez conserver.",

      "Votre bien-être s’améliorera lorsque vos gestes quotidiens correspondront davantage à vos besoins réels.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Périodes importantes
    |--------------------------------------------------------------------------
    */

    keyPeriods: [
      "Le début de l’année favorisera la mise en place de nouvelles habitudes et d’un rythme plus stable.",

      "Le printemps pourrait apporter un regain d’énergie et davantage de motivation pour bouger.",

      "Le milieu de l’année demandera un meilleur équilibre entre activité, obligations et récupération.",

      "L’été pourrait vous aider à retrouver davantage de légèreté, à condition de ne pas surcharger votre emploi du temps.",

      "L’automne favorisera la consolidation des routines et le retour à une meilleure discipline personnelle.",

      "La fin de l’année demandera davantage de repos et une meilleure protection contre l’accumulation de fatigue.",

      "Une période plus calme vous permettra de retrouver progressivement un niveau d’énergie plus stable.",

      "Les phases les plus favorables seront celles où vous respecterez vos limites avant qu’elles ne deviennent contraignantes.",

      "Un changement de rythme pourrait devenir nécessaire au cours du deuxième semestre.",

      "Certaines périodes demanderont davantage de douceur, tandis que d’autres seront idéales pour reprendre de l’élan.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Défis
    |--------------------------------------------------------------------------
    */

    challenge: [
      "Le principal défi sera de ne pas ignorer votre fatigue sous prétexte que certaines responsabilités semblent urgentes.",

      "Vous pourriez avoir tendance à dépasser vos limites puis à perdre plusieurs jours à récupérer.",

      "Une tension émotionnelle pourrait se manifester physiquement si elle reste trop longtemps contenue.",

      "Le manque de régularité pourrait rendre votre énergie plus instable.",

      "Vous pourriez vouloir retrouver trop rapidement un niveau de performance élevé.",

      "Le besoin de répondre aux attentes des autres pourrait vous faire négliger vos propres besoins.",

      "Une mauvaise qualité de sommeil pourrait diminuer votre patience et votre concentration.",

      "Le défi consistera à accepter de ralentir sans vous juger.",

      "Vous pourriez confondre repos et immobilité totale. Un mouvement doux pourrait parfois vous faire davantage de bien.",

      "Le stress accumulé pourrait vous pousser à adopter des habitudes qui soulagent sur le moment, mais fatiguent davantage ensuite.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Conseils
    |--------------------------------------------------------------------------
    */

    advice: [
      "Planifiez vos moments de repos avec autant de sérieux que vos autres obligations.",

      "Écoutez les premiers signes de fatigue au lieu d’attendre qu’ils deviennent impossibles à ignorer.",

      "Choisissez une routine simple que vous pourrez réellement maintenir pendant plusieurs mois.",

      "Réduisez les stimulations inutiles lorsque vous sentez votre énergie diminuer.",

      "Prenez quelques minutes chaque jour pour respirer, marcher ou vous éloigner du bruit.",

      "Évitez de mesurer votre valeur selon votre niveau de productivité.",

      "Respectez vos besoins physiques même lorsqu’ils ne correspondent pas au rythme des autres.",

      "Créez un environnement qui favorise le calme, le sommeil et la récupération.",

      "Cherchez la régularité plutôt que la perfection.",

      "Accordez-vous le droit de modifier votre programme lorsqu’une période demande davantage de douceur.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Conclusion
    |--------------------------------------------------------------------------
    */

    conclusion: [
      "Cette année peut vous aider à retrouver une énergie plus stable si vous respectez davantage votre rythme personnel.",

      "Votre bien-être progressera grâce à des choix simples, constants et adaptés à vos besoins réels.",

      "Les prochains mois vous rappelleront que le repos est une partie essentielle de votre équilibre.",

      "Une meilleure écoute de votre corps vous permettra de prévenir plusieurs périodes de fatigue inutile.",

      "Vous pourriez terminer l’année avec une routine plus apaisante et une meilleure compréhension de vos limites.",

      "Votre vitalité augmentera à mesure que vous réduirez les sources de stress évitables.",

      "Cette année vous offre l’occasion de reconstruire votre énergie sur des bases plus solides.",

      "Un meilleur équilibre entre action et récupération améliorera votre état général.",

      "Votre corps et votre esprit retrouveront davantage d’harmonie lorsque vous cesserez de lutter contre votre propre rythme.",

      "En prenant soin de votre énergie cette année, vous préparerez les prochaines périodes avec davantage de vitalité.",
    ],
  };
}
