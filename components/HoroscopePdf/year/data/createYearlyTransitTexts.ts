import type {
  YearlyTransitTexts,
} from "./types";

/*
|--------------------------------------------------------------------------
| Banque de textes — Transits planétaires de l'année
|--------------------------------------------------------------------------
|
| Ces textes décrivent les grandes influences planétaires qui
| marqueront l'ensemble de l'année plutôt qu'un simple mois.
|
|--------------------------------------------------------------------------
*/

export function createYearlyTransitTexts(): YearlyTransitTexts {
  return {
    /*
    |--------------------------------------------------------------------------
    | Introduction
    |--------------------------------------------------------------------------
    */

    introduction: [
      "Les mouvements planétaires de cette année créent une période d’évolution, de réflexion et d’ajustement. Certaines influences agiront rapidement, tandis que d’autres transformeront progressivement votre manière d’avancer.",

      "Le ciel de l’année met en lumière plusieurs domaines de votre vie. Les transits planétaires vous invitent à observer ce qui évolue, ce qui résiste et ce qui demande une nouvelle direction.",

      "Les influences planétaires des prochains mois pourraient modifier votre rythme, vos priorités et votre perception de certaines situations.",

      "Cette année est marquée par des énergies complémentaires : certaines vous pousseront à agir, tandis que d’autres vous demanderont de ralentir et de réfléchir.",

      "Les transits de l’année favorisent une meilleure compréhension de vos désirs, de vos limites et des changements que vous êtes prêt à entreprendre.",

      "Le climat planétaire vous accompagne dans une période d’évolution durable. Une situation ancienne pourrait être abordée avec davantage de maturité.",

      "Les prochains mois seront influencés par plusieurs mouvements célestes capables d’accentuer votre intuition, votre motivation ou votre besoin de changement.",

      "Cette année vous invite à suivre les mouvements du ciel sans chercher à contrôler chaque résultat. Certaines réponses apparaîtront progressivement.",

      "Les transits planétaires pourraient révéler une occasion de croissance personnelle, relationnelle ou professionnelle.",

      "Le ciel de l’année vous encourage à avancer avec souplesse. Les changements les plus utiles pourraient d’abord sembler inconfortables.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Soleil
    |--------------------------------------------------------------------------
    */

    sun: [
      "Le Soleil renforce votre besoin d’affirmer vos priorités et de concentrer votre énergie sur ce qui compte réellement.",
      "Le passage du Soleil apporte davantage de visibilité à un projet ou une décision importante.",
      "L’énergie solaire vous encourage à reprendre pleinement votre place.",
      "Le Soleil met en lumière une situation que vous ne pourrez plus ignorer.",
      "Cette influence favorise la confiance, l’initiative et l’affirmation personnelle.",
      "Le Soleil vous pousse à reconnaître ce qui vous motive profondément.",
      "Une période de renouvellement commence sous cette influence.",
      "Le Soleil favorise les démarches où vous devez assumer davantage de responsabilités.",
      "Cette influence vous aide à clarifier la direction que vous souhaitez donner à votre année.",
      "Le passage solaire pourrait raviver votre ambition et votre créativité.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Mercure
    |--------------------------------------------------------------------------
    */

    mercury: [
      "Mercure favorise les discussions importantes, les apprentissages et les décisions réfléchies.",
      "Une conversation pourrait clarifier une situation restée ambiguë depuis longtemps.",
      "Mercure vous invite à vérifier les informations avant toute décision importante.",
      "Les échanges seront nombreux, mais les détails demanderont davantage d'attention.",
      "Cette influence soutient les projets d’écriture, de communication et de négociation.",
      "Une information inattendue pourrait modifier votre vision d'un projet.",
      "Mercure vous encourage à poser les bonnes questions.",
      "Votre esprit sera particulièrement actif durant plusieurs périodes de l'année.",
      "Les décisions rationnelles seront favorisées sans négliger votre intuition.",
      "Un déplacement ou une rencontre pourrait influencer durablement votre évolution.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Vénus
    |--------------------------------------------------------------------------
    */

    venus: [
      "Vénus adoucit le climat relationnel et favorise les rapprochements.",
      "Vous pourriez rechercher davantage d’harmonie dans vos relations.",
      "Vénus met en lumière votre besoin d’affection et de reconnaissance.",
      "Cette influence favorise les conversations sincères et les réconciliations.",
      "Vénus pourrait transformer votre rapport à l’amour, à l’argent ou à votre estime personnelle.",
      "Une rencontre pourrait prendre une importance inattendue.",
      "La créativité et les plaisirs simples seront davantage valorisés.",
      "Vous pourriez ressentir un besoin plus fort de stabilité affective.",
      "Vénus rappelle que l’harmonie ne doit jamais se construire au détriment de vos limites.",
      "Cette influence renforcera progressivement votre confiance.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Mars
    |--------------------------------------------------------------------------
    */

    mars: [
      "Mars augmente votre motivation et votre désir d’agir.",
      "Une situation pourrait demander davantage de courage et de détermination.",
      "Mars vous pousse à transformer vos intentions en actions concrètes.",
      "Cette influence pourrait accentuer votre impatience si vous manquez de préparation.",
      "Les projets exigeant énergie et persévérance seront favorisés.",
      "Vous pourriez ressentir un besoin accru d’indépendance.",
      "Mars vous encourage à défendre vos besoins avec assurance.",
      "Une énergie nouvelle pourrait relancer un projet ancien.",
      "Une meilleure gestion de votre impulsivité deviendra essentielle.",
      "Mars pourrait vous donner l’élan nécessaire pour franchir une étape importante.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Jupiter
    |--------------------------------------------------------------------------
    */

    jupiter: [
      "Jupiter favorise l’expansion, l’apprentissage et les nouvelles possibilités.",
      "Une situation pourrait évoluer plus favorablement que prévu.",
      "Jupiter vous encourage à penser plus grand tout en restant réaliste.",
      "Une occasion de croissance pourrait transformer votre trajectoire.",
      "Les voyages, études et nouveaux projets seront favorisés.",
      "Cette influence renforcera progressivement votre confiance.",
      "Une personne expérimentée pourrait jouer un rôle important.",
      "Les projets à long terme bénéficieront d’un soutien particulier.",
      "Une porte pourrait s’ouvrir si vous acceptez de sortir de votre zone de confort.",
      "Jupiter vous invite à reconnaître les occasions sans les idéaliser.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Saturne
    |--------------------------------------------------------------------------
    */

    saturn: [
      "Saturne demande davantage de discipline et de constance.",
      "Une responsabilité importante pourrait devenir plus exigeante mais aussi plus constructive.",
      "Cette influence vous invite à consolider vos bases avant d'accélérer.",
      "Un ralentissement apparent pourrait préparer une réussite plus solide.",
      "Les résultats durables demanderont patience et persévérance.",
      "Une limite deviendra plus visible afin de favoriser une meilleure organisation.",
      "Les engagements sérieux seront particulièrement favorisés.",
      "Certaines contraintes prépareront votre réussite future.",
      "Saturne vous encourage à protéger votre énergie avec davantage de discernement.",
      "Une difficulté persistante pourrait finalement devenir une force.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Planètes lentes
    |--------------------------------------------------------------------------
    */

    outerPlanets: [
      "Les planètes lentes travaillent en profondeur et transformeront progressivement votre évolution.",
      "Uranus, Neptune et Pluton accentuent un changement déjà amorcé.",
      "Une influence subtile modifiera votre intuition et votre perception.",
      "Ces planètes vous invitent à abandonner progressivement certaines habitudes.",
      "Uranus favorisera les surprises tandis que Neptune demandera davantage de discernement.",
      "Pluton accompagnera une profonde transformation intérieure.",
      "Ces influences produisent leurs effets sur plusieurs mois.",
      "Une ancienne manière de fonctionner pourrait progressivement disparaître.",
      "Les changements les plus profonds seront souvent les plus discrets.",
      "Une prise de conscience pourrait devenir le point de départ d'une nouvelle étape de vie.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Influence dominante
    |--------------------------------------------------------------------------
    */

    dominantInfluence: [
      "L’influence dominante de l’année vous pousse à trouver un meilleur équilibre entre action et réflexion.",
      "Le thème central concerne votre capacité à avancer sans perdre votre stabilité intérieure.",
      "L’énergie dominante favorise les décisions réfléchies et les ajustements durables.",
      "Cette année met particulièrement l’accent sur la confiance et la communication.",
      "La principale influence planétaire vous invite à transformer une hésitation en décision.",
      "L’énergie générale pourrait vous aider à sortir d’une longue période d’attente.",
      "Le climat astrologique favorise une évolution progressive plutôt qu’un bouleversement brutal.",
      "Votre principale leçon sera d’agir au bon moment.",
      "Le ciel vous encourage à reconnaître les ouvertures tout en restant attentif aux détails.",
      "Cette influence dominante vous aidera à clarifier vos véritables priorités.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Conseils
    |--------------------------------------------------------------------------
    */

    advice: [
      "Observez les changements de rythme sans chercher à résister automatiquement.",
      "Utilisez les périodes dynamiques pour agir et les périodes plus lentes pour préparer la suite.",
      "Ne prenez pas une émotion passagère pour une vérité définitive.",
      "Restez attentif aux rencontres et aux informations importantes.",
      "Accordez-vous du temps lorsque plusieurs influences semblent contradictoires.",
      "Certaines évolutions auront besoin de plusieurs mois avant de révéler tout leur sens.",
      "Appuyez-vous sur les faits tout en laissant une place raisonnable à votre intuition.",
      "Profitez de l’élan planétaire pour avancer sur une priorité essentielle.",
      "Acceptez de revoir une stratégie si les circonstances évoluent.",
      "Considérez les transits comme des guides plutôt que comme des certitudes absolues.",
    ],

    /*
    |--------------------------------------------------------------------------
    | Conclusion
    |--------------------------------------------------------------------------
    */

    conclusion: [
      "Les transits de cette année peuvent vous aider à avancer avec davantage de conscience, de souplesse et de confiance.",
      "Le ciel vous accompagne dans une période d’évolution capable de produire des effets durables.",
      "Vous pourriez terminer l’année avec une vision beaucoup plus claire de votre avenir.",
      "Les influences planétaires rappellent que chaque période possède son propre rythme.",
      "Une évolution importante pourrait commencer discrètement avant de devenir évidente.",
      "Cette année vous offre l’occasion d’utiliser les mouvements du ciel comme un véritable soutien.",
      "Les transits favoriseront votre progression si vous restez attentif sans perdre votre discernement.",
      "Une meilleure compréhension des énergies planétaires facilitera vos décisions importantes.",
      "Le ciel vous invite à accueillir le changement sans renoncer à votre stabilité intérieure.",
      "En avançant avec patience et lucidité, vous pourrez transformer ces influences en véritable croissance personnelle.",
    ],
  };
}
