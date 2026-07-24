import type {
  MonthlyTransitTexts,
} from "./types";

/*
|--------------------------------------------------------------------------
| Banque de textes — Transits planétaires du mois
|--------------------------------------------------------------------------
*/

export function createMonthlyTransitTexts(): MonthlyTransitTexts {
  return {
    introduction: [
      "Les mouvements planétaires de ce mois créent une période de transition, de réflexion et d’ajustement. Certaines influences agiront rapidement, tandis que d’autres transformeront plus lentement votre manière d’avancer.",

      "Le ciel du mois met en lumière plusieurs domaines de votre vie. Les transits planétaires vous invitent à observer ce qui évolue, ce qui résiste et ce qui demande une nouvelle direction.",

      "Les influences planétaires des prochaines semaines pourraient modifier votre rythme, vos priorités et votre perception de certaines situations.",

      "Ce mois est marqué par des énergies complémentaires : certaines vous pousseront à agir, tandis que d’autres vous demanderont de ralentir et de réfléchir.",

      "Les transits du mois favorisent une meilleure compréhension de vos désirs, de vos limites et des changements que vous êtes prêt à entreprendre.",

      "Le climat planétaire vous accompagne dans une période d’évolution. Une situation ancienne pourrait être abordée avec davantage de maturité.",

      "Les prochaines semaines seront influencées par plusieurs mouvements célestes capables d’accentuer votre intuition, votre motivation ou votre besoin de changement.",

      "Ce mois vous invite à suivre les mouvements du ciel sans chercher à contrôler chaque résultat. Certaines réponses apparaîtront progressivement.",

      "Les transits planétaires pourraient révéler une occasion de croissance personnelle, relationnelle ou professionnelle.",

      "Le ciel du mois vous encourage à avancer avec souplesse. Les changements les plus utiles pourraient d’abord sembler inconfortables.",
    ],

    sun: [
      "Le Soleil renforce votre besoin d’affirmer vos priorités et de concentrer votre énergie sur ce qui compte réellement.",

      "Le passage du Soleil apporte davantage de visibilité à un projet, une décision ou une préoccupation importante.",

      "L’énergie solaire vous encourage à reprendre votre place et à ne plus minimiser vos besoins.",

      "Le Soleil met en lumière une situation que vous ne pourrez plus ignorer. Une décision claire pourrait devenir nécessaire.",

      "Cette influence solaire favorise la confiance, l’initiative et la capacité à exprimer votre véritable volonté.",

      "Le Soleil vous pousse à reconnaître ce qui vous motive profondément plutôt que de suivre uniquement les attentes extérieures.",

      "Une période de renouvellement commence sous l’influence du Soleil. Votre énergie pourrait devenir plus stable après une phase d’hésitation.",

      "Le Soleil favorise les démarches où vous devez vous montrer, défendre une idée ou prendre une responsabilité.",

      "Cette influence vous aide à voir plus clairement la direction que vous souhaitez donner aux prochaines semaines.",

      "Le passage solaire du mois pourrait raviver votre ambition et votre envie de créer quelque chose de personnel.",
    ],

    mercury: [
      "Mercure favorise les discussions, les démarches, les apprentissages et les décisions nécessitant davantage de précision.",

      "Sous l’influence de Mercure, une conversation importante pourrait clarifier une situation restée ambiguë.",

      "Mercure vous invite à vérifier les informations avant de prendre une décision ou de transmettre un message important.",

      "Cette influence favorise les échanges rapides, mais elle pourrait aussi augmenter les malentendus si les détails sont négligés.",

      "Mercure soutient les projets d’écriture, de communication, de négociation et d’organisation.",

      "Une information inattendue pourrait modifier votre perception d’un projet ou d’une relation.",

      "Le transit de Mercure vous encourage à poser les bonnes questions plutôt qu’à tirer des conclusions trop rapidement.",

      "Votre esprit pourrait être particulièrement actif. Notez vos idées afin de ne pas les perdre dans la dispersion.",

      "Mercure favorise les décisions rationnelles, à condition de ne pas ignorer complètement votre intuition.",

      "Un déplacement, un message ou une rencontre pourrait jouer un rôle important dans l’évolution du mois.",
    ],

    venus: [
      "Vénus adoucit le climat relationnel et favorise les rapprochements, la tendresse et les plaisirs simples.",

      "Sous l’influence de Vénus, vous pourriez rechercher davantage d’harmonie dans vos relations et votre environnement.",

      "Vénus met en lumière votre besoin d’affection, de reconnaissance et de sécurité émotionnelle.",

      "Cette influence favorise les conversations sincères, les réconciliations et les gestes capables de renforcer un lien.",

      "Vénus pourrait vous inviter à revoir votre rapport au plaisir, à l’argent ou à l’image que vous avez de votre propre valeur.",

      "Une rencontre ou un rapprochement pourrait devenir plus naturel sous cette influence.",

      "Le transit de Vénus favorise la créativité, l’esthétique et les activités qui vous apportent un sentiment de bien-être.",

      "Vous pourriez ressentir un besoin plus fort de douceur et de stabilité dans vos relations.",

      "Vénus vous rappelle que l’harmonie ne doit pas être obtenue au prix de vos limites personnelles.",

      "Cette période pourrait améliorer votre confiance et votre capacité à recevoir autant qu’à donner.",
    ],

    mars: [
      "Mars augmente votre motivation et votre désir d’agir. Veillez toutefois à ne pas confondre rapidité et efficacité.",

      "Sous l’influence de Mars, une situation pourrait demander davantage de courage, d’initiative ou de fermeté.",

      "Mars vous pousse à sortir de l’attente et à transformer une intention en action concrète.",

      "Cette influence pourrait accentuer votre impatience. Prenez le temps de choisir vos combats.",

      "Le transit de Mars favorise les projets exigeant de l’énergie, de la détermination et une réponse rapide.",

      "Vous pourriez ressentir un besoin plus fort d’indépendance ou de mouvement.",

      "Mars vous encourage à défendre vos besoins sans transformer chaque désaccord en confrontation.",

      "Une énergie nouvelle pourrait vous aider à relancer un projet ou à dépasser une période de stagnation.",

      "Cette influence demande une meilleure gestion de votre colère, de votre frustration et de votre impulsivité.",

      "Mars pourrait vous donner l’élan nécessaire pour prendre une décision longtemps repoussée.",
    ],

    jupiter: [
      "Jupiter favorise l’expansion, l’apprentissage et les occasions capables d’élargir vos perspectives.",

      "Sous l’influence de Jupiter, une situation pourrait évoluer plus favorablement que prévu.",

      "Jupiter vous encourage à penser plus grand, tout en gardant un plan réaliste.",

      "Une occasion de croissance pourrait apparaître dans votre vie professionnelle, personnelle ou relationnelle.",

      "Cette influence favorise les démarches liées aux voyages, aux études, aux projets et aux nouvelles expériences.",

      "Jupiter pourrait renforcer votre confiance et votre envie de croire davantage en vos possibilités.",

      "Une personne expérimentée pourrait vous apporter un conseil ou un soutien utile.",

      "Le transit de Jupiter favorise les projets à long terme et les décisions construites sur une vision plus large.",

      "Une porte pourrait s’ouvrir, mais vous devrez accepter de sortir légèrement de votre zone de confort.",

      "Jupiter vous invite à reconnaître une occasion sans la surestimer ni la laisser passer par excès de prudence.",
    ],

    saturn: [
      "Saturne vous demande davantage de structure, de discipline et de patience dans un domaine important.",

      "Sous l’influence de Saturne, une responsabilité pourrait devenir plus lourde, mais aussi plus constructive.",

      "Saturne vous invite à consolider vos bases avant de chercher une progression rapide.",

      "Cette influence pourrait ralentir une situation afin de vous obliger à corriger un détail essentiel.",

      "Le transit de Saturne vous rappelle que les résultats durables demandent du temps et de la constance.",

      "Une limite pourrait devenir plus visible. Elle vous aidera à comprendre ce qui doit être réorganisé.",

      "Saturne favorise les décisions responsables, les engagements sérieux et les projets construits avec méthode.",

      "Vous pourriez devoir accepter un délai ou une contrainte avant de pouvoir avancer librement.",

      "Cette influence vous encourage à protéger votre énergie et à cesser de porter des responsabilités qui ne vous appartiennent pas.",

      "Saturne pourrait vous aider à transformer une difficulté persistante en structure plus solide.",
    ],

    outerPlanets: [
      "Les planètes lentes travaillent en profondeur et pourraient transformer progressivement votre rapport au changement.",

      "Uranus, Neptune et Pluton accentuent un processus d’évolution déjà commencé depuis plusieurs mois.",

      "Une influence plus subtile pourrait modifier votre intuition, vos rêves ou votre perception d’une situation.",

      "Les planètes extérieures vous invitent à abandonner progressivement une ancienne manière de fonctionner.",

      "Uranus pourrait provoquer un changement inattendu, tandis que Neptune vous demandera de distinguer intuition et illusion.",

      "Pluton met en lumière une transformation profonde qui ne pourra pas être accélérée artificiellement.",

      "Ces transits agissent surtout à long terme. Leurs effets pourraient d’abord apparaître sous la forme d’un questionnement intérieur.",

      "Une situation pourrait perdre son sens ancien afin de laisser place à une nouvelle compréhension.",

      "Les planètes lentes vous poussent à évoluer au-delà de vos habitudes les plus enracinées.",

      "Une prise de conscience discrète pourrait devenir le point de départ d’un changement majeur dans les mois à venir.",
    ],

    dominantInfluence: [
      "L’influence dominante du mois vous pousse à trouver un meilleur équilibre entre action et réflexion.",

      "Le thème central du mois concerne votre capacité à avancer sans perdre votre stabilité intérieure.",

      "L’énergie dominante favorise les décisions réfléchies, les échanges sincères et les ajustements durables.",

      "Le mois met surtout l’accent sur la confiance, la communication et la manière dont vous protégez vos limites.",

      "La principale influence planétaire vous invite à transformer une hésitation en choix concret.",

      "L’énergie du mois pourrait vous aider à sortir d’une période d’attente ou d’incertitude.",

      "Le climat dominant favorise une évolution progressive plutôt qu’un changement brutal.",

      "Votre principale leçon sera d’agir au bon moment sans forcer ce qui demande encore de la patience.",

      "Le ciel vous encourage à reconnaître les signes d’ouverture tout en restant attentif aux détails.",

      "L’influence dominante pourrait vous conduire vers une meilleure compréhension de vos véritables priorités.",
    ],

    advice: [
      "Observez les changements de rythme sans chercher à résister automatiquement à chaque imprévu.",

      "Utilisez les périodes dynamiques pour agir et les périodes plus lentes pour réfléchir et préparer la suite.",

      "Ne prenez pas une émotion passagère pour une vérité définitive.",

      "Restez attentif aux conversations, aux rencontres et aux informations qui reviennent plusieurs fois.",

      "Accordez-vous un délai lorsque plusieurs influences vous poussent dans des directions opposées.",

      "Ne cherchez pas à contrôler chaque étape. Certaines évolutions auront besoin de temps pour devenir compréhensibles.",

      "Appuyez-vous sur les faits tout en laissant une place raisonnable à votre intuition.",

      "Profitez de l’élan planétaire pour avancer sur une priorité claire plutôt que de multiplier les projets.",

      "Acceptez de revoir une stratégie si les événements vous montrent qu’une autre voie serait plus efficace.",

      "Considérez les transits comme des indications et non comme des obligations. Vos choix restent essentiels.",
    ],

    conclusion: [
      "Les transits de ce mois peuvent vous aider à avancer avec davantage de conscience, de souplesse et de confiance.",

      "Le ciel vous accompagne dans une période d’ajustement capable de produire des effets durables.",

      "Vous pourriez terminer le mois avec une meilleure compréhension de votre direction et de vos véritables besoins.",

      "Les influences planétaires vous rappellent que chaque période possède son propre rythme et sa propre utilité.",

      "Une évolution importante pourrait commencer discrètement avant de devenir plus visible dans les prochains mois.",

      "Ce mois vous offre l’occasion d’utiliser les mouvements du ciel comme un soutien à vos décisions.",

      "Les transits planétaires favoriseront votre progression si vous restez attentif aux signaux sans abandonner votre discernement.",

      "Une meilleure compréhension des énergies du mois vous permettra de choisir plus consciemment vos moments d’action et de repos.",

      "Le ciel du mois vous invite à accueillir le changement sans renoncer à votre stabilité intérieure.",

      "En avançant avec patience et lucidité, vous pourrez transformer ces influences en véritable croissance personnelle.",
    ],
  };
}
