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

const SOCIAL_TITLES: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Vos relations prennent une nouvelle direction":
      "Your relationships are taking a new direction",
    "Un mois pour renforcer vos liens":
      "A month to strengthen your bonds",
    "Votre vie sociale gagne en profondeur":
      "Your social life gains depth",
    "De nouvelles connexions peuvent émerger":
      "New connections may emerge",
    "Les échanges occupent une place importante":
      "Exchanges take on an important role",
    "Votre entourage évolue avec vous":
      "Your circle evolves with you",
    "Un climat favorable au rapprochement":
      "A favorable climate for getting closer",
    "Vos relations deviennent plus claires":
      "Your relationships become clearer",
  },
  es: {
    "Vos relations prennent une nouvelle direction":
      "Sus relaciones toman una nueva dirección",
    "Un mois pour renforcer vos liens":
      "Un mes para fortalecer sus vínculos",
    "Votre vie sociale gagne en profondeur":
      "Su vida social gana profundidad",
    "De nouvelles connexions peuvent émerger":
      "Pueden surgir nuevas conexiones",
    "Les échanges occupent une place importante":
      "Los intercambios ocupan un lugar importante",
    "Votre entourage évolue avec vous":
      "Su entorno evoluciona con usted",
    "Un climat favorable au rapprochement":
      "Un clima favorable al acercamiento",
    "Vos relations deviennent plus claires":
      "Sus relaciones se vuelven más claras",
  },
  de: {
    "Vos relations prennent une nouvelle direction":
      "Ihre Beziehungen nehmen eine neue Richtung",
    "Un mois pour renforcer vos liens":
      "Ein Monat, um Ihre Bindungen zu stärken",
    "Votre vie sociale gagne en profondeur":
      "Ihr Sozialleben gewinnt an Tiefe",
    "De nouvelles connexions peuvent émerger":
      "Neue Verbindungen können entstehen",
    "Les échanges occupent une place importante":
      "Der Austausch nimmt einen wichtigen Platz ein",
    "Votre entourage évolue avec vous":
      "Ihr Umfeld entwickelt sich mit Ihnen",
    "Un climat favorable au rapprochement":
      "Ein günstiges Klima für Annäherung",
    "Vos relations deviennent plus claires":
      "Ihre Beziehungen werden klarer",
  },
  it: {
    "Vos relations prennent une nouvelle direction":
      "Le tue relazioni prendono una nuova direzione",
    "Un mois pour renforcer vos liens":
      "Un mese per rafforzare i tuoi legami",
    "Votre vie sociale gagne en profondeur":
      "La tua vita sociale acquista profondità",
    "De nouvelles connexions peuvent émerger":
      "Possono emergere nuove connessioni",
    "Les échanges occupent une place importante":
      "Gli scambi assumono un ruolo importante",
    "Votre entourage évolue avec vous":
      "Il tuo ambiente evolve con te",
    "Un climat favorable au rapprochement":
      "Un clima favorevole al riavvicinamento",
    "Vos relations deviennent plus claires":
      "Le tue relazioni diventano più chiare",
  },
  pt: {
    "Vos relations prennent une nouvelle direction":
      "Seus relacionamentos tomam uma nova direção",
    "Un mois pour renforcer vos liens":
      "Um mês para fortalecer seus vínculos",
    "Votre vie sociale gagne en profondeur":
      "Sua vida social ganha profundidade",
    "De nouvelles connexions peuvent émerger":
      "Novas conexões podem surgir",
    "Les échanges occupent une place importante":
      "As trocas ocupam um lugar importante",
    "Votre entourage évolue avec vous":
      "Seu círculo evolui com você",
    "Un climat favorable au rapprochement":
      "Um clima favorável à aproximação",
    "Vos relations deviennent plus claires":
      "Seus relacionamentos ficam mais claros",
  },
};

/* =========================================================
   BANQUE DE TEXTES
========================================================= */

const SOCIAL_TEXTS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Votre vie sociale pourrait prendre davantage d’importance ce mois-ci. Certaines rencontres ou conversations vous aideront à mieux comprendre la place que vous occupez dans vos relations.":
      "Your social life may become more important this month. Certain encounters or conversations will help you better understand the place you hold in your relationships.",
    "Les prochaines semaines mettent l’accent sur vos échanges, vos amitiés et votre manière de créer des liens. Vous pourriez rechercher des relations plus sincères et plus équilibrées.":
      "The coming weeks emphasize your exchanges, friendships, and the way you create connections. You may seek more sincere and balanced relationships.",
    "Ce mois vous invite à observer la qualité de votre entourage. Certaines relations vous apportent de l’énergie, tandis que d’autres pourraient vous en demander davantage.":
      "This month invites you to observe the quality of your social circle. Some relationships give you energy, while others may require more from you.",
    "Votre cercle social pourrait connaître une évolution importante. Une nouvelle proximité pourrait se créer pendant qu’une relation moins naturelle s’éloigne progressivement.":
      "Your social circle may go through an important evolution. A new closeness may develop while a less natural relationship gradually fades.",
    "Le climat relationnel favorise les conversations authentiques et les liens construits sur la confiance. Vous pourriez vous sentir plus sélectif dans vos fréquentations.":
      "The relational climate favors authentic conversations and bonds built on trust. You may become more selective about the people around you.",
    "Les prochaines semaines pourraient vous aider à reprendre contact avec une personne importante ou à approfondir une relation déjà présente.":
      "The coming weeks may help you reconnect with someone important or deepen an existing relationship.",
    "Votre besoin de partage augmente, mais vous souhaiterez surtout être entouré de personnes capables de respecter votre sensibilité et vos limites.":
      "Your need to share is growing, but above all you will want to be surrounded by people who respect your sensitivity and your boundaries.",
    "Une période plus active commence dans votre vie sociale. Les invitations, les échanges et les nouvelles connaissances pourraient se multiplier.":
      "A more active period begins in your social life. Invitations, exchanges, and new acquaintances may multiply.",
    "Ce mois vous pousse à trouver un meilleur équilibre entre votre besoin de solitude et votre envie de rester connecté aux autres.":
      "This month encourages you to find a better balance between your need for solitude and your desire to stay connected with others.",
    "Votre manière d’entrer en relation évolue. Vous pourriez rechercher moins de quantité et davantage de profondeur dans vos échanges.":
      "The way you relate to others is evolving. You may seek less quantity and more depth in your exchanges.",
    "Votre présence sera appréciée lorsque vous resterez naturel, sans chercher à répondre à toutes les attentes de votre entourage.":
      "Your presence will be appreciated when you remain natural, without trying to meet every expectation of the people around you.",
    "Une conversation spontanée pourrait vous apporter une idée, un soutien ou une nouvelle perspective.":
      "A spontaneous conversation could bring you an idea, support, or a new perspective.",
    "Vous pourriez ressentir le besoin de revoir la place occupée par certaines personnes dans votre quotidien.":
      "You may feel the need to reconsider the place certain people occupy in your daily life.",
    "Le mois favorise les échanges simples, honnêtes et sans sous-entendus inutiles.":
      "The month favors simple, honest exchanges without unnecessary hidden meanings.",
    "Une relation pourrait devenir plus fluide lorsque chacun exprimera clairement ses besoins.":
      "A relationship may become more fluid when everyone clearly expresses their needs.",
    "Vous pourriez être plus sensible à l’atmosphère d’un groupe. Choisissez les environnements dans lesquels vous vous sentez réellement à l’aise.":
      "You may be more sensitive to the atmosphere of a group. Choose environments where you genuinely feel comfortable.",
    "Votre vie sociale gagnera en qualité lorsque vous cesserez d’entretenir des liens uniquement par habitude.":
      "Your social life will gain in quality when you stop maintaining connections simply out of habit.",
    "Une personne pourrait se montrer plus présente que prévu. Prenez le temps d’observer ses intentions sans tirer de conclusion trop rapide.":
      "Someone may become more present than expected. Take time to observe their intentions without drawing conclusions too quickly.",
    "Les relations les plus solides seront celles où vous pourrez parler librement sans devoir constamment vous adapter.":
      "The strongest relationships will be those where you can speak freely without constantly having to adapt.",
    "Une nouvelle dynamique pourrait s’installer dans votre entourage et modifier certaines habitudes sociales.":
      "A new dynamic may develop in your social circle and change certain social habits.",
    "Une amitié pourrait se renforcer grâce à une conversation plus personnelle ou à une expérience partagée.":
      "A friendship could grow stronger through a more personal conversation or a shared experience.",
    "Vous pourriez reprendre contact avec une personne perdue de vue depuis quelque temps.":
      "You may reconnect with someone you have not seen for some time.",
    "Une relation amicale pourrait demander une mise au point afin d’éviter qu’un malaise ne s’installe.":
      "A friendship may require clarification to prevent discomfort from settling in.",
    "Un ami pourrait avoir besoin de votre écoute. Veillez toutefois à ne pas porter seul ses difficultés.":
      "A friend may need you to listen. However, be careful not to carry their difficulties alone.",
    "Vous pourriez découvrir une nouvelle facette d’une personne que vous connaissez déjà.":
      "You may discover a new side of someone you already know.",
    "Le mois favorise les amitiés fondées sur la loyauté, le respect et la réciprocité.":
      "The month favors friendships based on loyalty, respect, and reciprocity.",
    "Une invitation pourrait vous permettre de sortir de votre routine et de rencontrer des personnes intéressantes.":
      "An invitation could help you step out of your routine and meet interesting people.",
    "Vous pourriez vous éloigner naturellement d’une relation devenue moins compatible avec votre évolution actuelle.":
      "You may naturally distance yourself from a relationship that has become less compatible with your current growth.",
    "Un geste simple pourrait raviver une amitié que vous croyiez affaiblie.":
      "A simple gesture could revive a friendship you thought had weakened.",
    "Votre entourage pourrait vous rappeler l’importance de demander du soutien plutôt que de tout gérer seul.":
      "Your circle may remind you of the importance of asking for support instead of handling everything alone.",
    "Une situation familiale pourrait demander davantage de patience et de communication.":
      "A family situation may require more patience and communication.",
    "Une conversation importante pourrait permettre de clarifier une incompréhension ancienne.":
      "An important conversation could help clarify an old misunderstanding.",
    "Vous pourriez ressentir le besoin de protéger davantage votre espace personnel face aux attentes de votre famille.":
      "You may feel the need to protect your personal space more strongly in the face of family expectations.",
    "Un membre de votre entourage familial pourrait vous surprendre par son soutien ou sa compréhension.":
      "A family member may surprise you with their support or understanding.",
    "Une responsabilité familiale pourrait modifier temporairement votre organisation.":
      "A family responsibility may temporarily change your organization.",
    "Le mois vous invite à éviter les réactions automatiques dans une relation chargée d’émotions anciennes.":
      "The month invites you to avoid automatic reactions in a relationship charged with old emotions.",
    "Un rapprochement pourrait devenir possible si chacun accepte de parler avec plus de sincérité.":
      "A rapprochement may become possible if everyone agrees to speak more sincerely.",
    "Vous pourriez devoir rappeler une limite qui n’a pas été suffisamment respectée.":
      "You may need to restate a boundary that has not been sufficiently respected.",
    "Une activité ou un événement partagé pourrait améliorer l’ambiance familiale.":
      "A shared activity or event could improve the family atmosphere.",
    "Votre calme vous aidera à ne pas amplifier une tension qui pourrait se résoudre plus simplement que prévu.":
      "Your calm will help you avoid amplifying a tension that may resolve more simply than expected.",
    "Une nouvelle rencontre pourrait vous ouvrir à un univers, une idée ou une activité différente.":
      "A new encounter could open you to a different world, idea, or activity.",
    "Vous pourriez faire la connaissance d’une personne avec qui la conversation semblera immédiatement naturelle.":
      "You may meet someone with whom conversation immediately feels natural.",
    "Un contexte professionnel, social ou numérique pourrait favoriser une nouvelle relation intéressante.":
      "A professional, social, or digital context may encourage an interesting new relationship.",
    "Une rencontre discrète pourrait devenir plus importante avec le temps. Ne vous fiez pas uniquement à la première impression.":
      "A subtle encounter may become more important over time. Do not rely only on your first impression.",
    "Le mois favorise les liens créés autour d’un intérêt, d’un projet ou d’une valeur commune.":
      "The month favors bonds created around a shared interest, project, or value.",
    "Vous pourriez attirer des personnes qui reflètent votre évolution récente.":
      "You may attract people who reflect your recent growth.",
    "Une nouvelle connaissance pourrait vous aider à sortir d’une manière de penser devenue trop limitée.":
      "A new acquaintance could help you move beyond a way of thinking that has become too limiting.",
    "Une relation pourrait commencer lentement, mais gagner rapidement en confiance et en profondeur.":
      "A relationship may start slowly but quickly gain trust and depth.",
    "Vous pourriez être présenté à une personne capable de jouer un rôle utile dans un projet futur.":
      "You may be introduced to someone capable of playing a useful role in a future project.",
    "Une rencontre inattendue pourrait raviver votre envie de participer davantage à la vie sociale.":
      "An unexpected encounter could revive your desire to participate more actively in social life.",
    "Vos échanges gagneront en fluidité si vous exprimez directement ce que vous ressentez ou attendez.":
      "Your exchanges will become more fluid if you directly express what you feel or expect.",
    "Évitez de supposer que les autres comprennent automatiquement vos intentions.":
      "Avoid assuming that others automatically understand your intentions.",
    "Une formulation plus douce vous permettra de transmettre un message important sans diminuer sa clarté.":
      "Gentler wording will help you convey an important message without reducing its clarity.",
    "Vous pourriez être amené à corriger une information ou à clarifier une parole mal interprétée.":
      "You may need to correct information or clarify words that were misunderstood.",
    "Votre écoute jouera un rôle aussi important que vos paroles dans une conversation sensible.":
      "Your listening will play as important a role as your words in a sensitive conversation.",
    "Une discussion retardée mérite peut-être d’avoir lieu avant qu’un malaise ne s’installe davantage.":
      "A delayed discussion may deserve to happen before discomfort settles in further.",
    "Vous pourriez découvrir qu’une personne partage davantage votre point de vue que vous ne le pensiez.":
      "You may discover that someone shares your point of view more than you thought.",
    "Le mois favorise les échanges honnêtes, mais il faudra éviter les paroles prononcées sous le coup de l’impatience.":
      "The month favors honest exchanges, but words spoken out of impatience should be avoided.",
    "Un message, un appel ou une conversation pourrait modifier positivement votre perception d’une relation.":
      "A message, call, or conversation could positively change your perception of a relationship.",
    "Votre capacité à poser les bonnes questions vous aidera à mieux comprendre les motivations d’une personne.":
      "Your ability to ask the right questions will help you better understand someone's motivations.",
    "Le principal défi sera de ne pas vous épuiser à maintenir des relations qui ne sont plus réciproques.":
      "The main challenge will be not to exhaust yourself maintaining relationships that are no longer reciprocal.",
    "Vous pourriez avoir tendance à accepter une invitation ou une demande alors que vous avez réellement besoin de repos.":
      "You may tend to accept an invitation or request when you actually need rest.",
    "Une remarque pourrait vous toucher plus fortement que prévu. Prenez le temps de vérifier l’intention réelle avant de réagir.":
      "A remark may affect you more strongly than expected. Take time to verify the real intention before reacting.",
    "Le besoin d’éviter un conflit pourrait vous pousser à taire une limite pourtant importante.":
      "The need to avoid conflict may push you to remain silent about an important boundary.",
    "Vous pourriez vous sentir responsable de l’humeur ou du bien-être d’une personne de votre entourage.":
      "You may feel responsible for the mood or well-being of someone around you.",
    "Une relation pourrait devenir plus exigeante si les attentes restent implicites.":
      "A relationship may become more demanding if expectations remain implicit.",
    "Le défi consistera à ne pas vous isoler complètement après une déception relationnelle.":
      "The challenge will be not to isolate yourself completely after a relational disappointment.",
    "Vous pourriez accorder trop d’importance à l’opinion d’un groupe qui ne vous connaît pas réellement.":
      "You may give too much importance to the opinion of a group that does not truly know you.",
    "Une tension ancienne pourrait réapparaître si elle n’a jamais été véritablement réglée.":
      "An old tension may resurface if it has never been genuinely resolved.",
    "Le désir de préserver l’harmonie pourrait vous faire accepter un comportement qui ne vous convient pas.":
      "The desire to preserve harmony may lead you to accept behavior that does not suit you.",
    "Privilégiez les relations dans lesquelles vous pouvez rester vous-même sans devoir constamment vous justifier.":
      "Prioritize relationships in which you can remain yourself without constantly having to justify who you are.",
    "Exprimez vos limites dès les premiers signes d’inconfort plutôt que d’attendre l’accumulation.":
      "Express your boundaries at the first signs of discomfort instead of waiting for things to accumulate.",
    "Accordez votre temps aux personnes qui vous offrent une présence aussi sincère que la vôtre.":
      "Give your time to people who offer you a presence as sincere as your own.",
    "Ne confondez pas disponibilité et obligation permanente.":
      "Do not confuse availability with permanent obligation.",
    "Prenez l’initiative d’un échange lorsque vous sentez qu’une relation mérite d’être préservée.":
      "Take the initiative to have a conversation when you feel a relationship deserves to be preserved.",
    "Éloignez-vous temporairement d’une situation sociale lorsque votre énergie devient trop basse.":
      "Temporarily step away from a social situation when your energy becomes too low.",
    "Laissez une nouvelle relation évoluer naturellement sans chercher à définir trop rapidement sa place.":
      "Let a new relationship evolve naturally without trying to define its place too quickly.",
    "Évitez de répondre immédiatement à une parole qui vous blesse. Le recul vous aidera à choisir une réponse plus juste.":
      "Avoid responding immediately to words that hurt you. Distance will help you choose a fairer response.",
    "Soyez attentif aux actes autant qu’aux paroles lorsque vous évaluez la fiabilité d’une personne.":
      "Pay attention to actions as much as words when evaluating someone's reliability.",
    "Cherchez un équilibre entre votre besoin de proximité et votre besoin d’indépendance.":
      "Seek a balance between your need for closeness and your need for independence.",
    "Ce mois peut enrichir votre vie relationnelle si vous privilégiez les liens sincères, équilibrés et respectueux.":
      "This month can enrich your relational life if you prioritize sincere, balanced, and respectful bonds.",
    "Votre entourage évoluera favorablement lorsque vous ferez davantage de place aux relations qui correspondent à vos valeurs.":
      "Your circle will evolve favorably when you make more room for relationships that reflect your values.",
    "Les prochaines semaines pourraient renforcer une amitié, clarifier une relation ou favoriser une nouvelle rencontre importante.":
      "The coming weeks may strengthen a friendship, clarify a relationship, or encourage an important new encounter.",
    "Vous pourriez terminer le mois avec une vision plus claire des personnes sur lesquelles vous pouvez réellement compter.":
      "You may end the month with a clearer view of the people you can truly rely on.",
    "Votre vie sociale gagnera en profondeur à mesure que vous protégerez mieux votre énergie et vos limites.":
      "Your social life will gain depth as you better protect your energy and your boundaries.",
    "Une relation pourrait devenir plus solide grâce à une communication directe et bienveillante.":
      "A relationship may become stronger through direct and caring communication.",
    "Ce mois vous rappelle qu’une relation saine doit offrir autant de sécurité que de liberté.":
      "This month reminds you that a healthy relationship should offer as much security as freedom.",
    "Votre capacité à choisir votre entourage avec discernement améliorera votre équilibre émotionnel.":
      "Your ability to choose your circle with discernment will improve your emotional balance.",
    "Une nouvelle dynamique relationnelle pourrait vous apporter davantage de légèreté et de confiance.":
      "A new relational dynamic may bring you greater lightness and confidence.",
    "En restant fidèle à vos besoins, vous attirerez des échanges plus authentiques et plus satisfaisants.":
      "By staying true to your needs, you will attract more authentic and satisfying exchanges.",
  },
  es: {
    "Votre vie sociale pourrait prendre davantage d’importance ce mois-ci. Certaines rencontres ou conversations vous aideront à mieux comprendre la place que vous occupez dans vos relations.":
      "Su vida social podría adquirir mayor importancia este mes. Ciertos encuentros o conversaciones le ayudarán a comprender mejor el lugar que ocupa en sus relaciones.",
    "Les prochaines semaines mettent l’accent sur vos échanges, vos amitiés et votre manière de créer des liens. Vous pourriez rechercher des relations plus sincères et plus équilibrées.":
      "Las próximas semanas ponen el acento en sus intercambios, amistades y manera de crear vínculos. Podría buscar relaciones más sinceras y equilibradas.",
    "Ce mois vous invite à observer la qualité de votre entourage. Certaines relations vous apportent de l’énergie, tandis que d’autres pourraient vous en demander davantage.":
      "Este mes le invita a observar la calidad de su entorno. Algunas relaciones le aportan energía, mientras que otras podrían exigirle más.",
    "Votre cercle social pourrait connaître une évolution importante. Une nouvelle proximité pourrait se créer pendant qu’une relation moins naturelle s’éloigne progressivement.":
      "Su círculo social podría experimentar una evolución importante. Podría surgir una nueva cercanía mientras una relación menos natural se aleja progresivamente.",
    "Le climat relationnel favorise les conversations authentiques et les liens construits sur la confiance. Vous pourriez vous sentir plus sélectif dans vos fréquentations.":
      "El clima relacional favorece las conversaciones auténticas y los vínculos construidos sobre la confianza. Podría sentirse más selectivo con sus relaciones.",
    "Les prochaines semaines pourraient vous aider à reprendre contact avec une personne importante ou à approfondir une relation déjà présente.":
      "Las próximas semanas podrían ayudarle a retomar el contacto con una persona importante o a profundizar una relación ya existente.",
    "Votre besoin de partage augmente, mais vous souhaiterez surtout être entouré de personnes capables de respecter votre sensibilité et vos limites.":
      "Su necesidad de compartir aumenta, pero sobre todo querrá estar rodeado de personas capaces de respetar su sensibilidad y sus límites.",
    "Une période plus active commence dans votre vie sociale. Les invitations, les échanges et les nouvelles connaissances pourraient se multiplier.":
      "Comienza un período más activo en su vida social. Las invitaciones, los intercambios y las nuevas relaciones podrían multiplicarse.",
    "Ce mois vous pousse à trouver un meilleur équilibre entre votre besoin de solitude et votre envie de rester connecté aux autres.":
      "Este mes le impulsa a encontrar un mejor equilibrio entre su necesidad de soledad y su deseo de mantenerse conectado con los demás.",
    "Votre manière d’entrer en relation évolue. Vous pourriez rechercher moins de quantité et davantage de profondeur dans vos échanges.":
      "Su manera de relacionarse evoluciona. Podría buscar menos cantidad y más profundidad en sus intercambios.",
    "Votre présence sera appréciée lorsque vous resterez naturel, sans chercher à répondre à toutes les attentes de votre entourage.":
      "Su presencia será apreciada cuando se muestre natural, sin intentar responder a todas las expectativas de su entorno.",
    "Une conversation spontanée pourrait vous apporter une idée, un soutien ou une nouvelle perspective.":
      "Una conversación espontánea podría aportarle una idea, apoyo o una nueva perspectiva.",
    "Vous pourriez ressentir le besoin de revoir la place occupée par certaines personnes dans votre quotidien.":
      "Podría sentir la necesidad de revisar el lugar que ocupan ciertas personas en su vida cotidiana.",
    "Le mois favorise les échanges simples, honnêtes et sans sous-entendus inutiles.":
      "El mes favorece los intercambios sencillos, honestos y sin dobles sentidos innecesarios.",
    "Une relation pourrait devenir plus fluide lorsque chacun exprimera clairement ses besoins.":
      "Una relación podría volverse más fluida cuando cada persona exprese claramente sus necesidades.",
    "Vous pourriez être plus sensible à l’atmosphère d’un groupe. Choisissez les environnements dans lesquels vous vous sentez réellement à l’aise.":
      "Podría ser más sensible al ambiente de un grupo. Elija entornos en los que realmente se sienta cómodo.",
    "Votre vie sociale gagnera en qualité lorsque vous cesserez d’entretenir des liens uniquement par habitude.":
      "Su vida social ganará calidad cuando deje de mantener vínculos únicamente por costumbre.",
    "Une personne pourrait se montrer plus présente que prévu. Prenez le temps d’observer ses intentions sans tirer de conclusion trop rapide.":
      "Una persona podría mostrarse más presente de lo previsto. Tómese el tiempo de observar sus intenciones sin sacar conclusiones demasiado rápidas.",
    "Les relations les plus solides seront celles où vous pourrez parler librement sans devoir constamment vous adapter.":
      "Las relaciones más sólidas serán aquellas en las que pueda hablar libremente sin tener que adaptarse constantemente.",
    "Une nouvelle dynamique pourrait s’installer dans votre entourage et modifier certaines habitudes sociales.":
      "Una nueva dinámica podría instalarse en su entorno y modificar ciertos hábitos sociales.",
    "Une amitié pourrait se renforcer grâce à une conversation plus personnelle ou à une expérience partagée.":
      "Una amistad podría fortalecerse gracias a una conversación más personal o una experiencia compartida.",
    "Vous pourriez reprendre contact avec une personne perdue de vue depuis quelque temps.":
      "Podría retomar el contacto con una persona a la que no ve desde hace algún tiempo.",
    "Une relation amicale pourrait demander une mise au point afin d’éviter qu’un malaise ne s’installe.":
      "Una relación de amistad podría requerir una aclaración para evitar que se instale un malestar.",
    "Un ami pourrait avoir besoin de votre écoute. Veillez toutefois à ne pas porter seul ses difficultés.":
      "Un amigo podría necesitar que le escuche. Sin embargo, procure no cargar solo con sus dificultades.",
    "Vous pourriez découvrir une nouvelle facette d’une personne que vous connaissez déjà.":
      "Podría descubrir una nueva faceta de una persona que ya conoce.",
    "Le mois favorise les amitiés fondées sur la loyauté, le respect et la réciprocité.":
      "El mes favorece las amistades basadas en la lealtad, el respeto y la reciprocidad.",
    "Une invitation pourrait vous permettre de sortir de votre routine et de rencontrer des personnes intéressantes.":
      "Una invitación podría permitirle salir de su rutina y conocer personas interesantes.",
    "Vous pourriez vous éloigner naturellement d’une relation devenue moins compatible avec votre évolution actuelle.":
      "Podría alejarse de forma natural de una relación que se ha vuelto menos compatible con su evolución actual.",
    "Un geste simple pourrait raviver une amitié que vous croyiez affaiblie.":
      "Un gesto sencillo podría reavivar una amistad que creía debilitada.",
    "Votre entourage pourrait vous rappeler l’importance de demander du soutien plutôt que de tout gérer seul.":
      "Su entorno podría recordarle la importancia de pedir apoyo en lugar de gestionarlo todo solo.",
    "Une situation familiale pourrait demander davantage de patience et de communication.":
      "Una situación familiar podría requerir más paciencia y comunicación.",
    "Une conversation importante pourrait permettre de clarifier une incompréhension ancienne.":
      "Una conversación importante podría permitir aclarar un malentendido antiguo.",
    "Vous pourriez ressentir le besoin de protéger davantage votre espace personnel face aux attentes de votre famille.":
      "Podría sentir la necesidad de proteger más su espacio personal frente a las expectativas de su familia.",
    "Un membre de votre entourage familial pourrait vous surprendre par son soutien ou sa compréhension.":
      "Un miembro de su familia podría sorprenderle con su apoyo o comprensión.",
    "Une responsabilité familiale pourrait modifier temporairement votre organisation.":
      "Una responsabilidad familiar podría modificar temporalmente su organización.",
    "Le mois vous invite à éviter les réactions automatiques dans une relation chargée d’émotions anciennes.":
      "El mes le invita a evitar las reacciones automáticas en una relación cargada de emociones antiguas.",
    "Un rapprochement pourrait devenir possible si chacun accepte de parler avec plus de sincérité.":
      "Un acercamiento podría hacerse posible si todos aceptan hablar con mayor sinceridad.",
    "Vous pourriez devoir rappeler une limite qui n’a pas été suffisamment respectée.":
      "Podría tener que recordar un límite que no ha sido suficientemente respetado.",
    "Une activité ou un événement partagé pourrait améliorer l’ambiance familiale.":
      "Una actividad o evento compartido podría mejorar el ambiente familiar.",
    "Votre calme vous aidera à ne pas amplifier une tension qui pourrait se résoudre plus simplement que prévu.":
      "Su calma le ayudará a no amplificar una tensión que podría resolverse de forma más sencilla de lo previsto.",
    "Une nouvelle rencontre pourrait vous ouvrir à un univers, une idée ou une activité différente.":
      "Un nuevo encuentro podría abrirle a un universo, una idea o una actividad diferente.",
    "Vous pourriez faire la connaissance d’une personne avec qui la conversation semblera immédiatement naturelle.":
      "Podría conocer a una persona con quien la conversación parezca inmediatamente natural.",
    "Un contexte professionnel, social ou numérique pourrait favoriser une nouvelle relation intéressante.":
      "Un contexto profesional, social o digital podría favorecer una nueva relación interesante.",
    "Une rencontre discrète pourrait devenir plus importante avec le temps. Ne vous fiez pas uniquement à la première impression.":
      "Un encuentro discreto podría adquirir más importancia con el tiempo. No se fíe únicamente de la primera impresión.",
    "Le mois favorise les liens créés autour d’un intérêt, d’un projet ou d’une valeur commune.":
      "El mes favorece los vínculos creados alrededor de un interés, un proyecto o un valor común.",
    "Vous pourriez attirer des personnes qui reflètent votre évolution récente.":
      "Podría atraer a personas que reflejan su evolución reciente.",
    "Une nouvelle connaissance pourrait vous aider à sortir d’une manière de penser devenue trop limitée.":
      "Una nueva relación podría ayudarle a salir de una manera de pensar que se ha vuelto demasiado limitada.",
    "Une relation pourrait commencer lentement, mais gagner rapidement en confiance et en profondeur.":
      "Una relación podría comenzar lentamente, pero ganar rápidamente confianza y profundidad.",
    "Vous pourriez être présenté à une personne capable de jouer un rôle utile dans un projet futur.":
      "Podrían presentarle a una persona capaz de desempeñar un papel útil en un proyecto futuro.",
    "Une rencontre inattendue pourrait raviver votre envie de participer davantage à la vie sociale.":
      "Un encuentro inesperado podría reavivar sus ganas de participar más en la vida social.",
    "Vos échanges gagneront en fluidité si vous exprimez directement ce que vous ressentez ou attendez.":
      "Sus intercambios ganarán fluidez si expresa directamente lo que siente o espera.",
    "Évitez de supposer que les autres comprennent automatiquement vos intentions.":
      "Evite suponer que los demás comprenden automáticamente sus intenciones.",
    "Une formulation plus douce vous permettra de transmettre un message important sans diminuer sa clarté.":
      "Una formulación más suave le permitirá transmitir un mensaje importante sin reducir su claridad.",
    "Vous pourriez être amené à corriger une information ou à clarifier une parole mal interprétée.":
      "Podría tener que corregir una información o aclarar unas palabras mal interpretadas.",
    "Votre écoute jouera un rôle aussi important que vos paroles dans une conversation sensible.":
      "Su capacidad de escuchar desempeñará un papel tan importante como sus palabras en una conversación delicada.",
    "Une discussion retardée mérite peut-être d’avoir lieu avant qu’un malaise ne s’installe davantage.":
      "Una conversación aplazada quizá deba producirse antes de que el malestar se instale aún más.",
    "Vous pourriez découvrir qu’une personne partage davantage votre point de vue que vous ne le pensiez.":
      "Podría descubrir que una persona comparte más su punto de vista de lo que pensaba.",
    "Le mois favorise les échanges honnêtes, mais il faudra éviter les paroles prononcées sous le coup de l’impatience.":
      "El mes favorece los intercambios honestos, pero será importante evitar las palabras pronunciadas bajo el efecto de la impaciencia.",
    "Un message, un appel ou une conversation pourrait modifier positivement votre perception d’une relation.":
      "Un mensaje, una llamada o una conversación podría cambiar positivamente su percepción de una relación.",
    "Votre capacité à poser les bonnes questions vous aidera à mieux comprendre les motivations d’une personne.":
      "Su capacidad para formular las preguntas adecuadas le ayudará a comprender mejor las motivaciones de una persona.",
    "Le principal défi sera de ne pas vous épuiser à maintenir des relations qui ne sont plus réciproques.":
      "El principal desafío será no agotarse manteniendo relaciones que ya no son recíprocas.",
    "Vous pourriez avoir tendance à accepter une invitation ou une demande alors que vous avez réellement besoin de repos.":
      "Podría tender a aceptar una invitación o petición cuando en realidad necesita descansar.",
    "Une remarque pourrait vous toucher plus fortement que prévu. Prenez le temps de vérifier l’intention réelle avant de réagir.":
      "Un comentario podría afectarle más de lo previsto. Tómese el tiempo de comprobar la intención real antes de reaccionar.",
    "Le besoin d’éviter un conflit pourrait vous pousser à taire une limite pourtant importante.":
      "La necesidad de evitar un conflicto podría llevarle a callar un límite que, sin embargo, es importante.",
    "Vous pourriez vous sentir responsable de l’humeur ou du bien-être d’une personne de votre entourage.":
      "Podría sentirse responsable del estado de ánimo o del bienestar de una persona de su entorno.",
    "Une relation pourrait devenir plus exigeante si les attentes restent implicites.":
      "Una relación podría volverse más exigente si las expectativas permanecen implícitas.",
    "Le défi consistera à ne pas vous isoler complètement après une déception relationnelle.":
      "El desafío consistirá en no aislarse por completo después de una decepción relacional.",
    "Vous pourriez accorder trop d’importance à l’opinion d’un groupe qui ne vous connaît pas réellement.":
      "Podría dar demasiada importancia a la opinión de un grupo que en realidad no le conoce.",
    "Une tension ancienne pourrait réapparaître si elle n’a jamais été véritablement réglée.":
      "Una antigua tensión podría reaparecer si nunca se resolvió verdaderamente.",
    "Le désir de préserver l’harmonie pourrait vous faire accepter un comportement qui ne vous convient pas.":
      "El deseo de preservar la armonía podría llevarle a aceptar un comportamiento que no le conviene.",
    "Privilégiez les relations dans lesquelles vous pouvez rester vous-même sans devoir constamment vous justifier.":
      "Priorice las relaciones en las que pueda seguir siendo usted mismo sin tener que justificarse constantemente.",
    "Exprimez vos limites dès les premiers signes d’inconfort plutôt que d’attendre l’accumulation.":
      "Exprese sus límites ante los primeros signos de incomodidad en lugar de esperar a que todo se acumule.",
    "Accordez votre temps aux personnes qui vous offrent une présence aussi sincère que la vôtre.":
      "Dedique su tiempo a las personas que le ofrecen una presencia tan sincera como la suya.",
    "Ne confondez pas disponibilité et obligation permanente.":
      "No confunda disponibilidad con obligación permanente.",
    "Prenez l’initiative d’un échange lorsque vous sentez qu’une relation mérite d’être préservée.":
      "Tome la iniciativa de conversar cuando sienta que una relación merece ser preservada.",
    "Éloignez-vous temporairement d’une situation sociale lorsque votre énergie devient trop basse.":
      "Aléjese temporalmente de una situación social cuando su energía esté demasiado baja.",
    "Laissez une nouvelle relation évoluer naturellement sans chercher à définir trop rapidement sa place.":
      "Deje que una nueva relación evolucione de manera natural sin intentar definir demasiado rápido su lugar.",
    "Évitez de répondre immédiatement à une parole qui vous blesse. Le recul vous aidera à choisir une réponse plus juste.":
      "Evite responder de inmediato a unas palabras que le hieren. Tomar distancia le ayudará a elegir una respuesta más justa.",
    "Soyez attentif aux actes autant qu’aux paroles lorsque vous évaluez la fiabilité d’une personne.":
      "Preste atención tanto a los actos como a las palabras cuando evalúe la fiabilidad de una persona.",
    "Cherchez un équilibre entre votre besoin de proximité et votre besoin d’indépendance.":
      "Busque un equilibrio entre su necesidad de cercanía y su necesidad de independencia.",
    "Ce mois peut enrichir votre vie relationnelle si vous privilégiez les liens sincères, équilibrés et respectueux.":
      "Este mes puede enriquecer su vida relacional si prioriza los vínculos sinceros, equilibrados y respetuosos.",
    "Votre entourage évoluera favorablement lorsque vous ferez davantage de place aux relations qui correspondent à vos valeurs.":
      "Su entorno evolucionará favorablemente cuando dé más espacio a las relaciones que corresponden a sus valores.",
    "Les prochaines semaines pourraient renforcer une amitié, clarifier une relation ou favoriser une nouvelle rencontre importante.":
      "Las próximas semanas podrían fortalecer una amistad, aclarar una relación o favorecer un nuevo encuentro importante.",
    "Vous pourriez terminer le mois avec une vision plus claire des personnes sur lesquelles vous pouvez réellement compter.":
      "Podría terminar el mes con una visión más clara de las personas con las que realmente puede contar.",
    "Votre vie sociale gagnera en profondeur à mesure que vous protégerez mieux votre énergie et vos limites.":
      "Su vida social ganará profundidad a medida que proteja mejor su energía y sus límites.",
    "Une relation pourrait devenir plus solide grâce à une communication directe et bienveillante.":
      "Una relación podría fortalecerse gracias a una comunicación directa y amable.",
    "Ce mois vous rappelle qu’une relation saine doit offrir autant de sécurité que de liberté.":
      "Este mes le recuerda que una relación sana debe ofrecer tanta seguridad como libertad.",
    "Votre capacité à choisir votre entourage avec discernement améliorera votre équilibre émotionnel.":
      "Su capacidad para elegir su entorno con discernimiento mejorará su equilibrio emocional.",
    "Une nouvelle dynamique relationnelle pourrait vous apporter davantage de légèreté et de confiance.":
      "Una nueva dinámica relacional podría aportarle mayor ligereza y confianza.",
    "En restant fidèle à vos besoins, vous attirerez des échanges plus authentiques et plus satisfaisants.":
      "Al mantenerse fiel a sus necesidades, atraerá intercambios más auténticos y satisfactorios.",
  },
  de: {
    "Votre vie sociale pourrait prendre davantage d’importance ce mois-ci. Certaines rencontres ou conversations vous aideront à mieux comprendre la place que vous occupez dans vos relations.":
      "Ihr Sozialleben könnte diesen Monat an Bedeutung gewinnen. Bestimmte Begegnungen oder Gespräche helfen Ihnen, Ihren Platz in Ihren Beziehungen besser zu verstehen.",
    "Les prochaines semaines mettent l’accent sur vos échanges, vos amitiés et votre manière de créer des liens. Vous pourriez rechercher des relations plus sincères et plus équilibrées.":
      "Die kommenden Wochen legen den Schwerpunkt auf Ihren Austausch, Ihre Freundschaften und die Art, wie Sie Verbindungen aufbauen. Sie könnten aufrichtigere und ausgewogenere Beziehungen suchen.",
    "Ce mois vous invite à observer la qualité de votre entourage. Certaines relations vous apportent de l’énergie, tandis que d’autres pourraient vous en demander davantage.":
      "Dieser Monat lädt Sie dazu ein, die Qualität Ihres Umfelds zu beobachten. Manche Beziehungen geben Ihnen Energie, während andere mehr von Ihnen verlangen könnten.",
    "Votre cercle social pourrait connaître une évolution importante. Une nouvelle proximité pourrait se créer pendant qu’une relation moins naturelle s’éloigne progressivement.":
      "Ihr soziales Umfeld könnte eine wichtige Entwicklung durchlaufen. Neue Nähe kann entstehen, während sich eine weniger natürliche Beziehung allmählich entfernt.",
    "Le climat relationnel favorise les conversations authentiques et les liens construits sur la confiance. Vous pourriez vous sentir plus sélectif dans vos fréquentations.":
      "Das Beziehungsklima begünstigt authentische Gespräche und auf Vertrauen aufgebaute Bindungen. Sie könnten bei Ihren Kontakten wählerischer werden.",
    "Les prochaines semaines pourraient vous aider à reprendre contact avec une personne importante ou à approfondir une relation déjà présente.":
      "Die kommenden Wochen könnten Ihnen helfen, wieder Kontakt zu einer wichtigen Person aufzunehmen oder eine bestehende Beziehung zu vertiefen.",
    "Votre besoin de partage augmente, mais vous souhaiterez surtout être entouré de personnes capables de respecter votre sensibilité et vos limites.":
      "Ihr Bedürfnis nach Austausch wächst, doch vor allem möchten Sie von Menschen umgeben sein, die Ihre Sensibilität und Ihre Grenzen respektieren.",
    "Une période plus active commence dans votre vie sociale. Les invitations, les échanges et les nouvelles connaissances pourraient se multiplier.":
      "Eine aktivere Phase beginnt in Ihrem Sozialleben. Einladungen, Gespräche und neue Bekanntschaften könnten zunehmen.",
    "Ce mois vous pousse à trouver un meilleur équilibre entre votre besoin de solitude et votre envie de rester connecté aux autres.":
      "Dieser Monat bringt Sie dazu, ein besseres Gleichgewicht zwischen Ihrem Bedürfnis nach Alleinsein und Ihrem Wunsch nach Verbindung mit anderen zu finden.",
    "Votre manière d’entrer en relation évolue. Vous pourriez rechercher moins de quantité et davantage de profondeur dans vos échanges.":
      "Die Art, wie Sie Beziehungen eingehen, entwickelt sich weiter. Sie könnten weniger Quantität und mehr Tiefe in Ihrem Austausch suchen.",
    "Votre présence sera appréciée lorsque vous resterez naturel, sans chercher à répondre à toutes les attentes de votre entourage.":
      "Ihre Anwesenheit wird geschätzt, wenn Sie natürlich bleiben, ohne alle Erwartungen Ihres Umfelds erfüllen zu wollen.",
    "Une conversation spontanée pourrait vous apporter une idée, un soutien ou une nouvelle perspective.":
      "Ein spontanes Gespräch könnte Ihnen eine Idee, Unterstützung oder eine neue Perspektive bringen.",
    "Vous pourriez ressentir le besoin de revoir la place occupée par certaines personnes dans votre quotidien.":
      "Sie könnten das Bedürfnis verspüren, den Platz bestimmter Menschen in Ihrem Alltag neu zu bewerten.",
    "Le mois favorise les échanges simples, honnêtes et sans sous-entendus inutiles.":
      "Der Monat begünstigt einfachen, ehrlichen Austausch ohne unnötige versteckte Botschaften.",
    "Une relation pourrait devenir plus fluide lorsque chacun exprimera clairement ses besoins.":
      "Eine Beziehung könnte fließender werden, wenn alle Beteiligten ihre Bedürfnisse klar ausdrücken.",
    "Vous pourriez être plus sensible à l’atmosphère d’un groupe. Choisissez les environnements dans lesquels vous vous sentez réellement à l’aise.":
      "Sie könnten sensibler auf die Atmosphäre einer Gruppe reagieren. Wählen Sie Umgebungen, in denen Sie sich wirklich wohlfühlen.",
    "Votre vie sociale gagnera en qualité lorsque vous cesserez d’entretenir des liens uniquement par habitude.":
      "Ihr Sozialleben gewinnt an Qualität, wenn Sie aufhören, Verbindungen nur aus Gewohnheit aufrechtzuerhalten.",
    "Une personne pourrait se montrer plus présente que prévu. Prenez le temps d’observer ses intentions sans tirer de conclusion trop rapide.":
      "Jemand könnte präsenter werden als erwartet. Nehmen Sie sich Zeit, seine Absichten zu beobachten, ohne vorschnell Schlüsse zu ziehen.",
    "Les relations les plus solides seront celles où vous pourrez parler librement sans devoir constamment vous adapter.":
      "Die stabilsten Beziehungen sind jene, in denen Sie frei sprechen können, ohne sich ständig anpassen zu müssen.",
    "Une nouvelle dynamique pourrait s’installer dans votre entourage et modifier certaines habitudes sociales.":
      "Eine neue Dynamik könnte sich in Ihrem Umfeld entwickeln und bestimmte soziale Gewohnheiten verändern.",
    "Une amitié pourrait se renforcer grâce à une conversation plus personnelle ou à une expérience partagée.":
      "Eine Freundschaft könnte durch ein persönlicheres Gespräch oder eine gemeinsame Erfahrung stärker werden.",
    "Vous pourriez reprendre contact avec une personne perdue de vue depuis quelque temps.":
      "Sie könnten wieder Kontakt zu jemandem aufnehmen, den Sie seit einiger Zeit nicht gesehen haben.",
    "Une relation amicale pourrait demander une mise au point afin d’éviter qu’un malaise ne s’installe.":
      "Eine Freundschaft könnte eine Klärung brauchen, damit sich kein Unbehagen festsetzt.",
    "Un ami pourrait avoir besoin de votre écoute. Veillez toutefois à ne pas porter seul ses difficultés.":
      "Ein Freund könnte Ihr offenes Ohr brauchen. Achten Sie jedoch darauf, seine Schwierigkeiten nicht allein zu tragen.",
    "Vous pourriez découvrir une nouvelle facette d’une personne que vous connaissez déjà.":
      "Sie könnten eine neue Seite an jemandem entdecken, den Sie bereits kennen.",
    "Le mois favorise les amitiés fondées sur la loyauté, le respect et la réciprocité.":
      "Der Monat begünstigt Freundschaften, die auf Loyalität, Respekt und Gegenseitigkeit beruhen.",
    "Une invitation pourrait vous permettre de sortir de votre routine et de rencontrer des personnes intéressantes.":
      "Eine Einladung könnte Ihnen helfen, aus Ihrer Routine auszubrechen und interessante Menschen kennenzulernen.",
    "Vous pourriez vous éloigner naturellement d’une relation devenue moins compatible avec votre évolution actuelle.":
      "Sie könnten sich ganz natürlich von einer Beziehung entfernen, die nicht mehr zu Ihrer aktuellen Entwicklung passt.",
    "Un geste simple pourrait raviver une amitié que vous croyiez affaiblie.":
      "Eine einfache Geste könnte eine Freundschaft wiederbeleben, die Sie für geschwächt hielten.",
    "Votre entourage pourrait vous rappeler l’importance de demander du soutien plutôt que de tout gérer seul.":
      "Ihr Umfeld könnte Sie daran erinnern, wie wichtig es ist, Unterstützung zu suchen, statt alles allein zu bewältigen.",
    "Une situation familiale pourrait demander davantage de patience et de communication.":
      "Eine familiäre Situation könnte mehr Geduld und Kommunikation erfordern.",
    "Une conversation importante pourrait permettre de clarifier une incompréhension ancienne.":
      "Ein wichtiges Gespräch könnte helfen, ein altes Missverständnis zu klären.",
    "Vous pourriez ressentir le besoin de protéger davantage votre espace personnel face aux attentes de votre famille.":
      "Sie könnten das Bedürfnis verspüren, Ihren persönlichen Raum gegenüber familiären Erwartungen stärker zu schützen.",
    "Un membre de votre entourage familial pourrait vous surprendre par son soutien ou sa compréhension.":
      "Ein Familienmitglied könnte Sie mit seiner Unterstützung oder seinem Verständnis überraschen.",
    "Une responsabilité familiale pourrait modifier temporairement votre organisation.":
      "Eine familiäre Verantwortung könnte Ihre Organisation vorübergehend verändern.",
    "Le mois vous invite à éviter les réactions automatiques dans une relation chargée d’émotions anciennes.":
      "Der Monat lädt Sie dazu ein, automatische Reaktionen in einer Beziehung zu vermeiden, die von alten Emotionen geprägt ist.",
    "Un rapprochement pourrait devenir possible si chacun accepte de parler avec plus de sincérité.":
      "Eine Annäherung könnte möglich werden, wenn alle bereit sind, aufrichtiger miteinander zu sprechen.",
    "Vous pourriez devoir rappeler une limite qui n’a pas été suffisamment respectée.":
      "Sie könnten eine Grenze erneut deutlich machen müssen, die nicht ausreichend respektiert wurde.",
    "Une activité ou un événement partagé pourrait améliorer l’ambiance familiale.":
      "Eine gemeinsame Aktivität oder Veranstaltung könnte die familiäre Atmosphäre verbessern.",
    "Votre calme vous aidera à ne pas amplifier une tension qui pourrait se résoudre plus simplement que prévu.":
      "Ihre Ruhe hilft Ihnen, eine Spannung nicht größer zu machen, als sie ist, denn sie könnte sich einfacher lösen als erwartet.",
    "Une nouvelle rencontre pourrait vous ouvrir à un univers, une idée ou une activité différente.":
      "Eine neue Begegnung könnte Ihnen eine andere Welt, Idee oder Aktivität eröffnen.",
    "Vous pourriez faire la connaissance d’une personne avec qui la conversation semblera immédiatement naturelle.":
      "Sie könnten jemanden kennenlernen, mit dem sich das Gespräch sofort natürlich anfühlt.",
    "Un contexte professionnel, social ou numérique pourrait favoriser une nouvelle relation intéressante.":
      "Ein beruflicher, sozialer oder digitaler Kontext könnte eine interessante neue Beziehung begünstigen.",
    "Une rencontre discrète pourrait devenir plus importante avec le temps. Ne vous fiez pas uniquement à la première impression.":
      "Eine unauffällige Begegnung könnte mit der Zeit wichtiger werden. Verlassen Sie sich nicht nur auf den ersten Eindruck.",
    "Le mois favorise les liens créés autour d’un intérêt, d’un projet ou d’une valeur commune.":
      "Der Monat begünstigt Verbindungen, die rund um ein gemeinsames Interesse, Projekt oder einen gemeinsamen Wert entstehen.",
    "Vous pourriez attirer des personnes qui reflètent votre évolution récente.":
      "Sie könnten Menschen anziehen, die Ihre jüngste Entwicklung widerspiegeln.",
    "Une nouvelle connaissance pourrait vous aider à sortir d’une manière de penser devenue trop limitée.":
      "Eine neue Bekanntschaft könnte Ihnen helfen, eine zu begrenzte Denkweise zu verlassen.",
    "Une relation pourrait commencer lentement, mais gagner rapidement en confiance et en profondeur.":
      "Eine Beziehung könnte langsam beginnen, aber rasch an Vertrauen und Tiefe gewinnen.",
    "Vous pourriez être présenté à une personne capable de jouer un rôle utile dans un projet futur.":
      "Sie könnten jemandem vorgestellt werden, der in einem zukünftigen Projekt eine hilfreiche Rolle spielen kann.",
    "Une rencontre inattendue pourrait raviver votre envie de participer davantage à la vie sociale.":
      "Eine unerwartete Begegnung könnte Ihre Lust neu beleben, aktiver am Sozialleben teilzunehmen.",
    "Vos échanges gagneront en fluidité si vous exprimez directement ce que vous ressentez ou attendez.":
      "Ihr Austausch wird fließender, wenn Sie direkt ausdrücken, was Sie fühlen oder erwarten.",
    "Évitez de supposer que les autres comprennent automatiquement vos intentions.":
      "Gehen Sie nicht davon aus, dass andere Ihre Absichten automatisch verstehen.",
    "Une formulation plus douce vous permettra de transmettre un message important sans diminuer sa clarté.":
      "Eine sanftere Formulierung hilft Ihnen, eine wichtige Botschaft zu vermitteln, ohne ihre Klarheit zu mindern.",
    "Vous pourriez être amené à corriger une information ou à clarifier une parole mal interprétée.":
      "Sie könnten Informationen korrigieren oder missverstandene Worte klarstellen müssen.",
    "Votre écoute jouera un rôle aussi important que vos paroles dans une conversation sensible.":
      "Ihr Zuhören spielt in einem sensiblen Gespräch eine ebenso wichtige Rolle wie Ihre Worte.",
    "Une discussion retardée mérite peut-être d’avoir lieu avant qu’un malaise ne s’installe davantage.":
      "Ein aufgeschobenes Gespräch sollte vielleicht stattfinden, bevor sich das Unbehagen weiter verstärkt.",
    "Vous pourriez découvrir qu’une personne partage davantage votre point de vue que vous ne le pensiez.":
      "Sie könnten feststellen, dass jemand Ihre Sichtweise stärker teilt, als Sie dachten.",
    "Le mois favorise les échanges honnêtes, mais il faudra éviter les paroles prononcées sous le coup de l’impatience.":
      "Der Monat begünstigt ehrlichen Austausch, doch vermeiden Sie Worte, die aus Ungeduld heraus gesagt werden.",
    "Un message, un appel ou une conversation pourrait modifier positivement votre perception d’une relation.":
      "Eine Nachricht, ein Anruf oder ein Gespräch könnte Ihre Wahrnehmung einer Beziehung positiv verändern.",
    "Votre capacité à poser les bonnes questions vous aidera à mieux comprendre les motivations d’une personne.":
      "Ihre Fähigkeit, die richtigen Fragen zu stellen, hilft Ihnen, die Beweggründe einer Person besser zu verstehen.",
    "Le principal défi sera de ne pas vous épuiser à maintenir des relations qui ne sont plus réciproques.":
      "Die größte Herausforderung besteht darin, sich nicht bei der Pflege von Beziehungen zu erschöpfen, die nicht mehr gegenseitig sind.",
    "Vous pourriez avoir tendance à accepter une invitation ou une demande alors que vous avez réellement besoin de repos.":
      "Sie könnten dazu neigen, eine Einladung oder Bitte anzunehmen, obwohl Sie eigentlich Ruhe brauchen.",
    "Une remarque pourrait vous toucher plus fortement que prévu. Prenez le temps de vérifier l’intention réelle avant de réagir.":
      "Eine Bemerkung könnte Sie stärker treffen als erwartet. Nehmen Sie sich Zeit, die tatsächliche Absicht zu prüfen, bevor Sie reagieren.",
    "Le besoin d’éviter un conflit pourrait vous pousser à taire une limite pourtant importante.":
      "Das Bedürfnis, Konflikte zu vermeiden, könnte Sie dazu bringen, eine wichtige Grenze nicht auszusprechen.",
    "Vous pourriez vous sentir responsable de l’humeur ou du bien-être d’une personne de votre entourage.":
      "Sie könnten sich für die Stimmung oder das Wohlbefinden einer Person in Ihrem Umfeld verantwortlich fühlen.",
    "Une relation pourrait devenir plus exigeante si les attentes restent implicites.":
      "Eine Beziehung könnte anspruchsvoller werden, wenn Erwartungen unausgesprochen bleiben.",
    "Le défi consistera à ne pas vous isoler complètement après une déception relationnelle.":
      "Die Herausforderung besteht darin, sich nach einer Enttäuschung in einer Beziehung nicht völlig zurückzuziehen.",
    "Vous pourriez accorder trop d’importance à l’opinion d’un groupe qui ne vous connaît pas réellement.":
      "Sie könnten der Meinung einer Gruppe zu viel Bedeutung beimessen, die Sie in Wirklichkeit gar nicht kennt.",
    "Une tension ancienne pourrait réapparaître si elle n’a jamais été véritablement réglée.":
      "Eine alte Spannung könnte wieder auftauchen, wenn sie nie wirklich gelöst wurde.",
    "Le désir de préserver l’harmonie pourrait vous faire accepter un comportement qui ne vous convient pas.":
      "Der Wunsch, Harmonie zu bewahren, könnte dazu führen, dass Sie ein Verhalten akzeptieren, das Ihnen nicht entspricht.",
    "Privilégiez les relations dans lesquelles vous pouvez rester vous-même sans devoir constamment vous justifier.":
      "Bevorzugen Sie Beziehungen, in denen Sie Sie selbst bleiben können, ohne sich ständig rechtfertigen zu müssen.",
    "Exprimez vos limites dès les premiers signes d’inconfort plutôt que d’attendre l’accumulation.":
      "Äußern Sie Ihre Grenzen bei den ersten Anzeichen von Unbehagen, statt zu warten, bis sich alles ansammelt.",
    "Accordez votre temps aux personnes qui vous offrent une présence aussi sincère que la vôtre.":
      "Schenken Sie Ihre Zeit Menschen, die Ihnen ebenso aufrichtig begegnen, wie Sie ihnen.",
    "Ne confondez pas disponibilité et obligation permanente.":
      "Verwechseln Sie Verfügbarkeit nicht mit dauernder Verpflichtung.",
    "Prenez l’initiative d’un échange lorsque vous sentez qu’une relation mérite d’être préservée.":
      "Ergreifen Sie die Initiative zu einem Gespräch, wenn Sie spüren, dass eine Beziehung es wert ist, bewahrt zu werden.",
    "Éloignez-vous temporairement d’une situation sociale lorsque votre énergie devient trop basse.":
      "Ziehen Sie sich vorübergehend aus einer sozialen Situation zurück, wenn Ihre Energie zu niedrig wird.",
    "Laissez une nouvelle relation évoluer naturellement sans chercher à définir trop rapidement sa place.":
      "Lassen Sie eine neue Beziehung natürlich wachsen, ohne ihren Platz zu schnell definieren zu wollen.",
    "Évitez de répondre immédiatement à une parole qui vous blesse. Le recul vous aidera à choisir une réponse plus juste.":
      "Antworten Sie nicht sofort auf Worte, die Sie verletzen. Abstand hilft Ihnen, eine gerechtere Antwort zu wählen.",
    "Soyez attentif aux actes autant qu’aux paroles lorsque vous évaluez la fiabilité d’une personne.":
      "Achten Sie bei der Einschätzung der Zuverlässigkeit einer Person ebenso auf Taten wie auf Worte.",
    "Cherchez un équilibre entre votre besoin de proximité et votre besoin d’indépendance.":
      "Suchen Sie ein Gleichgewicht zwischen Ihrem Bedürfnis nach Nähe und Ihrem Bedürfnis nach Unabhängigkeit.",
    "Ce mois peut enrichir votre vie relationnelle si vous privilégiez les liens sincères, équilibrés et respectueux.":
      "Dieser Monat kann Ihr Beziehungsleben bereichern, wenn Sie aufrichtige, ausgewogene und respektvolle Verbindungen bevorzugen.",
    "Votre entourage évoluera favorablement lorsque vous ferez davantage de place aux relations qui correspondent à vos valeurs.":
      "Ihr Umfeld wird sich positiv entwickeln, wenn Sie Beziehungen mehr Raum geben, die Ihren Werten entsprechen.",
    "Les prochaines semaines pourraient renforcer une amitié, clarifier une relation ou favoriser une nouvelle rencontre importante.":
      "Die kommenden Wochen könnten eine Freundschaft stärken, eine Beziehung klären oder eine wichtige neue Begegnung begünstigen.",
    "Vous pourriez terminer le mois avec une vision plus claire des personnes sur lesquelles vous pouvez réellement compter.":
      "Sie könnten den Monat mit einem klareren Bild davon beenden, auf wen Sie sich wirklich verlassen können.",
    "Votre vie sociale gagnera en profondeur à mesure que vous protégerez mieux votre énergie et vos limites.":
      "Ihr Sozialleben gewinnt an Tiefe, je besser Sie Ihre Energie und Ihre Grenzen schützen.",
    "Une relation pourrait devenir plus solide grâce à une communication directe et bienveillante.":
      "Eine Beziehung könnte durch direkte und wohlwollende Kommunikation stärker werden.",
    "Ce mois vous rappelle qu’une relation saine doit offrir autant de sécurité que de liberté.":
      "Dieser Monat erinnert Sie daran, dass eine gesunde Beziehung ebenso viel Sicherheit wie Freiheit bieten sollte.",
    "Votre capacité à choisir votre entourage avec discernement améliorera votre équilibre émotionnel.":
      "Ihre Fähigkeit, Ihr Umfeld mit Urteilsvermögen zu wählen, verbessert Ihr emotionales Gleichgewicht.",
    "Une nouvelle dynamique relationnelle pourrait vous apporter davantage de légèreté et de confiance.":
      "Eine neue Beziehungsdynamik könnte Ihnen mehr Leichtigkeit und Vertrauen bringen.",
    "En restant fidèle à vos besoins, vous attirerez des échanges plus authentiques et plus satisfaisants.":
      "Wenn Sie Ihren Bedürfnissen treu bleiben, ziehen Sie authentischeren und erfüllenderen Austausch an.",
  },
  it: {
    "Votre vie sociale pourrait prendre davantage d’importance ce mois-ci. Certaines rencontres ou conversations vous aideront à mieux comprendre la place que vous occupez dans vos relations.":
      "La tua vita sociale potrebbe acquistare maggiore importanza questo mese. Alcuni incontri o conversazioni ti aiuteranno a comprendere meglio il posto che occupi nelle tue relazioni.",
    "Les prochaines semaines mettent l’accent sur vos échanges, vos amitiés et votre manière de créer des liens. Vous pourriez rechercher des relations plus sincères et plus équilibrées.":
      "Le prossime settimane mettono l'accento sui tuoi scambi, sulle amicizie e sul modo in cui crei legami. Potresti cercare relazioni più sincere ed equilibrate.",
    "Ce mois vous invite à observer la qualité de votre entourage. Certaines relations vous apportent de l’énergie, tandis que d’autres pourraient vous en demander davantage.":
      "Questo mese ti invita a osservare la qualità del tuo ambiente sociale. Alcune relazioni ti danno energia, mentre altre potrebbero richiederne di più.",
    "Votre cercle social pourrait connaître une évolution importante. Une nouvelle proximité pourrait se créer pendant qu’une relation moins naturelle s’éloigne progressivement.":
      "Il tuo circolo sociale potrebbe vivere un'evoluzione importante. Potrebbe nascere una nuova vicinanza mentre una relazione meno naturale si allontana gradualmente.",
    "Le climat relationnel favorise les conversations authentiques et les liens construits sur la confiance. Vous pourriez vous sentir plus sélectif dans vos fréquentations.":
      "Il clima relazionale favorisce conversazioni autentiche e legami costruiti sulla fiducia. Potresti diventare più selettivo nelle frequentazioni.",
    "Les prochaines semaines pourraient vous aider à reprendre contact avec une personne importante ou à approfondir une relation déjà présente.":
      "Le prossime settimane potrebbero aiutarti a riprendere contatto con una persona importante o ad approfondire una relazione già presente.",
    "Votre besoin de partage augmente, mais vous souhaiterez surtout être entouré de personnes capables de respecter votre sensibilité et vos limites.":
      "Il tuo bisogno di condivisione aumenta, ma soprattutto vorrai essere circondato da persone capaci di rispettare la tua sensibilità e i tuoi limiti.",
    "Une période plus active commence dans votre vie sociale. Les invitations, les échanges et les nouvelles connaissances pourraient se multiplier.":
      "Inizia un periodo più attivo nella tua vita sociale. Inviti, scambi e nuove conoscenze potrebbero moltiplicarsi.",
    "Ce mois vous pousse à trouver un meilleur équilibre entre votre besoin de solitude et votre envie de rester connecté aux autres.":
      "Questo mese ti spinge a trovare un equilibrio migliore tra il bisogno di solitudine e il desiderio di rimanere in contatto con gli altri.",
    "Votre manière d’entrer en relation évolue. Vous pourriez rechercher moins de quantité et davantage de profondeur dans vos échanges.":
      "Il tuo modo di entrare in relazione evolve. Potresti cercare meno quantità e maggiore profondità nei tuoi scambi.",
    "Votre présence sera appréciée lorsque vous resterez naturel, sans chercher à répondre à toutes les attentes de votre entourage.":
      "La tua presenza sarà apprezzata quando resterai naturale, senza cercare di rispondere a tutte le aspettative di chi ti circonda.",
    "Une conversation spontanée pourrait vous apporter une idée, un soutien ou une nouvelle perspective.":
      "Una conversazione spontanea potrebbe offrirti un'idea, un sostegno o una nuova prospettiva.",
    "Vous pourriez ressentir le besoin de revoir la place occupée par certaines personnes dans votre quotidien.":
      "Potresti sentire il bisogno di rivedere il posto occupato da alcune persone nella tua quotidianità.",
    "Le mois favorise les échanges simples, honnêtes et sans sous-entendus inutiles.":
      "Il mese favorisce scambi semplici, onesti e senza inutili sottintesi.",
    "Une relation pourrait devenir plus fluide lorsque chacun exprimera clairement ses besoins.":
      "Una relazione potrebbe diventare più fluida quando ciascuno esprimerà chiaramente i propri bisogni.",
    "Vous pourriez être plus sensible à l’atmosphère d’un groupe. Choisissez les environnements dans lesquels vous vous sentez réellement à l’aise.":
      "Potresti essere più sensibile all'atmosfera di un gruppo. Scegli gli ambienti in cui ti senti davvero a tuo agio.",
    "Votre vie sociale gagnera en qualité lorsque vous cesserez d’entretenir des liens uniquement par habitude.":
      "La tua vita sociale acquisterà qualità quando smetterai di mantenere legami solo per abitudine.",
    "Une personne pourrait se montrer plus présente que prévu. Prenez le temps d’observer ses intentions sans tirer de conclusion trop rapide.":
      "Una persona potrebbe essere più presente del previsto. Prenditi il tempo di osservarne le intenzioni senza trarre conclusioni troppo rapide.",
    "Les relations les plus solides seront celles où vous pourrez parler librement sans devoir constamment vous adapter.":
      "Le relazioni più solide saranno quelle in cui potrai parlare liberamente senza doverti adattare continuamente.",
    "Une nouvelle dynamique pourrait s’installer dans votre entourage et modifier certaines habitudes sociales.":
      "Una nuova dinamica potrebbe instaurarsi nel tuo ambiente e modificare alcune abitudini sociali.",
    "Une amitié pourrait se renforcer grâce à une conversation plus personnelle ou à une expérience partagée.":
      "Un'amicizia potrebbe rafforzarsi grazie a una conversazione più personale o a un'esperienza condivisa.",
    "Vous pourriez reprendre contact avec une personne perdue de vue depuis quelque temps.":
      "Potresti riprendere contatto con una persona che non vedi da qualche tempo.",
    "Une relation amicale pourrait demander une mise au point afin d’éviter qu’un malaise ne s’installe.":
      "Un rapporto di amicizia potrebbe richiedere un chiarimento per evitare che si crei un disagio.",
    "Un ami pourrait avoir besoin de votre écoute. Veillez toutefois à ne pas porter seul ses difficultés.":
      "Un amico potrebbe aver bisogno del tuo ascolto. Fai però attenzione a non portare da solo le sue difficoltà.",
    "Vous pourriez découvrir une nouvelle facette d’une personne que vous connaissez déjà.":
      "Potresti scoprire un nuovo lato di una persona che conosci già.",
    "Le mois favorise les amitiés fondées sur la loyauté, le respect et la réciprocité.":
      "Il mese favorisce le amicizie fondate su lealtà, rispetto e reciprocità.",
    "Une invitation pourrait vous permettre de sortir de votre routine et de rencontrer des personnes intéressantes.":
      "Un invito potrebbe permetterti di uscire dalla routine e conoscere persone interessanti.",
    "Vous pourriez vous éloigner naturellement d’une relation devenue moins compatible avec votre évolution actuelle.":
      "Potresti allontanarti naturalmente da una relazione diventata meno compatibile con la tua evoluzione attuale.",
    "Un geste simple pourrait raviver une amitié que vous croyiez affaiblie.":
      "Un gesto semplice potrebbe ravvivare un'amicizia che pensavi si fosse indebolita.",
    "Votre entourage pourrait vous rappeler l’importance de demander du soutien plutôt que de tout gérer seul.":
      "Il tuo ambiente potrebbe ricordarti l'importanza di chiedere sostegno invece di gestire tutto da solo.",
    "Une situation familiale pourrait demander davantage de patience et de communication.":
      "Una situazione familiare potrebbe richiedere maggiore pazienza e comunicazione.",
    "Une conversation importante pourrait permettre de clarifier une incompréhension ancienne.":
      "Una conversazione importante potrebbe chiarire un vecchio malinteso.",
    "Vous pourriez ressentir le besoin de protéger davantage votre espace personnel face aux attentes de votre famille.":
      "Potresti sentire il bisogno di proteggere maggiormente il tuo spazio personale di fronte alle aspettative della famiglia.",
    "Un membre de votre entourage familial pourrait vous surprendre par son soutien ou sa compréhension.":
      "Un familiare potrebbe sorprenderti con il suo sostegno o la sua comprensione.",
    "Une responsabilité familiale pourrait modifier temporairement votre organisation.":
      "Una responsabilità familiare potrebbe modificare temporaneamente la tua organizzazione.",
    "Le mois vous invite à éviter les réactions automatiques dans une relation chargée d’émotions anciennes.":
      "Il mese ti invita a evitare reazioni automatiche in una relazione carica di vecchie emozioni.",
    "Un rapprochement pourrait devenir possible si chacun accepte de parler avec plus de sincérité.":
      "Un riavvicinamento potrebbe diventare possibile se tutti accettano di parlare con maggiore sincerità.",
    "Vous pourriez devoir rappeler une limite qui n’a pas été suffisamment respectée.":
      "Potresti dover ribadire un limite che non è stato rispettato a sufficienza.",
    "Une activité ou un événement partagé pourrait améliorer l’ambiance familiale.":
      "Un'attività o un evento condiviso potrebbe migliorare l'atmosfera familiare.",
    "Votre calme vous aidera à ne pas amplifier une tension qui pourrait se résoudre plus simplement que prévu.":
      "La tua calma ti aiuterà a non amplificare una tensione che potrebbe risolversi più facilmente del previsto.",
    "Une nouvelle rencontre pourrait vous ouvrir à un univers, une idée ou une activité différente.":
      "Un nuovo incontro potrebbe aprirti a un mondo, un'idea o un'attività diversa.",
    "Vous pourriez faire la connaissance d’une personne avec qui la conversation semblera immédiatement naturelle.":
      "Potresti conoscere una persona con cui la conversazione sembrerà subito naturale.",
    "Un contexte professionnel, social ou numérique pourrait favoriser une nouvelle relation intéressante.":
      "Un contesto professionale, sociale o digitale potrebbe favorire una nuova relazione interessante.",
    "Une rencontre discrète pourrait devenir plus importante avec le temps. Ne vous fiez pas uniquement à la première impression.":
      "Un incontro discreto potrebbe diventare più importante con il tempo. Non affidarti soltanto alla prima impressione.",
    "Le mois favorise les liens créés autour d’un intérêt, d’un projet ou d’une valeur commune.":
      "Il mese favorisce i legami creati intorno a un interesse, un progetto o un valore comune.",
    "Vous pourriez attirer des personnes qui reflètent votre évolution récente.":
      "Potresti attirare persone che riflettono la tua evoluzione recente.",
    "Une nouvelle connaissance pourrait vous aider à sortir d’une manière de penser devenue trop limitée.":
      "Una nuova conoscenza potrebbe aiutarti a uscire da un modo di pensare diventato troppo limitante.",
    "Une relation pourrait commencer lentement, mais gagner rapidement en confiance et en profondeur.":
      "Una relazione potrebbe iniziare lentamente, ma acquisire rapidamente fiducia e profondità.",
    "Vous pourriez être présenté à une personne capable de jouer un rôle utile dans un projet futur.":
      "Potresti essere presentato a una persona capace di svolgere un ruolo utile in un progetto futuro.",
    "Une rencontre inattendue pourrait raviver votre envie de participer davantage à la vie sociale.":
      "Un incontro inatteso potrebbe ravvivare il tuo desiderio di partecipare maggiormente alla vita sociale.",
    "Vos échanges gagneront en fluidité si vous exprimez directement ce que vous ressentez ou attendez.":
      "I tuoi scambi diventeranno più fluidi se esprimerai direttamente ciò che senti o ti aspetti.",
    "Évitez de supposer que les autres comprennent automatiquement vos intentions.":
      "Evita di supporre che gli altri comprendano automaticamente le tue intenzioni.",
    "Une formulation plus douce vous permettra de transmettre un message important sans diminuer sa clarté.":
      "Una formulazione più delicata ti permetterà di trasmettere un messaggio importante senza ridurne la chiarezza.",
    "Vous pourriez être amené à corriger une information ou à clarifier une parole mal interprétée.":
      "Potresti dover correggere un'informazione o chiarire parole interpretate male.",
    "Votre écoute jouera un rôle aussi important que vos paroles dans une conversation sensible.":
      "Il tuo ascolto avrà un ruolo importante quanto le tue parole in una conversazione delicata.",
    "Une discussion retardée mérite peut-être d’avoir lieu avant qu’un malaise ne s’installe davantage.":
      "Una discussione rimandata potrebbe meritare di avvenire prima che il disagio aumenti ulteriormente.",
    "Vous pourriez découvrir qu’une personne partage davantage votre point de vue que vous ne le pensiez.":
      "Potresti scoprire che una persona condivide il tuo punto di vista più di quanto pensassi.",
    "Le mois favorise les échanges honnêtes, mais il faudra éviter les paroles prononcées sous le coup de l’impatience.":
      "Il mese favorisce scambi onesti, ma sarà importante evitare parole pronunciate sotto l'effetto dell'impazienza.",
    "Un message, un appel ou une conversation pourrait modifier positivement votre perception d’une relation.":
      "Un messaggio, una telefonata o una conversazione potrebbe cambiare positivamente la tua percezione di una relazione.",
    "Votre capacité à poser les bonnes questions vous aidera à mieux comprendre les motivations d’une personne.":
      "La tua capacità di fare le domande giuste ti aiuterà a comprendere meglio le motivazioni di una persona.",
    "Le principal défi sera de ne pas vous épuiser à maintenir des relations qui ne sont plus réciproques.":
      "La sfida principale sarà non esaurirti nel mantenere relazioni che non sono più reciproche.",
    "Vous pourriez avoir tendance à accepter une invitation ou une demande alors que vous avez réellement besoin de repos.":
      "Potresti avere la tendenza ad accettare un invito o una richiesta quando in realtà hai bisogno di riposo.",
    "Une remarque pourrait vous toucher plus fortement que prévu. Prenez le temps de vérifier l’intention réelle avant de réagir.":
      "Un'osservazione potrebbe toccarti più del previsto. Prenditi il tempo di verificare la reale intenzione prima di reagire.",
    "Le besoin d’éviter un conflit pourrait vous pousser à taire une limite pourtant importante.":
      "Il bisogno di evitare un conflitto potrebbe spingerti a tacere un limite che invece è importante.",
    "Vous pourriez vous sentir responsable de l’humeur ou du bien-être d’une personne de votre entourage.":
      "Potresti sentirti responsabile dell'umore o del benessere di una persona che ti circonda.",
    "Une relation pourrait devenir plus exigeante si les attentes restent implicites.":
      "Una relazione potrebbe diventare più esigente se le aspettative restano implicite.",
    "Le défi consistera à ne pas vous isoler complètement après une déception relationnelle.":
      "La sfida sarà non isolarti completamente dopo una delusione relazionale.",
    "Vous pourriez accorder trop d’importance à l’opinion d’un groupe qui ne vous connaît pas réellement.":
      "Potresti dare troppa importanza all'opinione di un gruppo che in realtà non ti conosce.",
    "Une tension ancienne pourrait réapparaître si elle n’a jamais été véritablement réglée.":
      "Una vecchia tensione potrebbe riapparire se non è mai stata veramente risolta.",
    "Le désir de préserver l’harmonie pourrait vous faire accepter un comportement qui ne vous convient pas.":
      "Il desiderio di preservare l'armonia potrebbe farti accettare un comportamento che non ti conviene.",
    "Privilégiez les relations dans lesquelles vous pouvez rester vous-même sans devoir constamment vous justifier.":
      "Dai priorità alle relazioni in cui puoi restare te stesso senza doverti giustificare continuamente.",
    "Exprimez vos limites dès les premiers signes d’inconfort plutôt que d’attendre l’accumulation.":
      "Esprimi i tuoi limiti ai primi segnali di disagio invece di aspettare che tutto si accumuli.",
    "Accordez votre temps aux personnes qui vous offrent une présence aussi sincère que la vôtre.":
      "Dedica il tuo tempo alle persone che ti offrono una presenza sincera quanto la tua.",
    "Ne confondez pas disponibilité et obligation permanente.":
      "Non confondere disponibilità e obbligo permanente.",
    "Prenez l’initiative d’un échange lorsque vous sentez qu’une relation mérite d’être préservée.":
      "Prendi l'iniziativa di un confronto quando senti che una relazione merita di essere preservata.",
    "Éloignez-vous temporairement d’une situation sociale lorsque votre énergie devient trop basse.":
      "Allontanati temporaneamente da una situazione sociale quando la tua energia diventa troppo bassa.",
    "Laissez une nouvelle relation évoluer naturellement sans chercher à définir trop rapidement sa place.":
      "Lascia che una nuova relazione evolva naturalmente senza cercare di definirne troppo in fretta il posto.",
    "Évitez de répondre immédiatement à une parole qui vous blesse. Le recul vous aidera à choisir une réponse plus juste.":
      "Evita di rispondere subito a parole che ti feriscono. Prendere distanza ti aiuterà a scegliere una risposta più giusta.",
    "Soyez attentif aux actes autant qu’aux paroles lorsque vous évaluez la fiabilité d’une personne.":
      "Presta attenzione alle azioni tanto quanto alle parole quando valuti l'affidabilità di una persona.",
    "Cherchez un équilibre entre votre besoin de proximité et votre besoin d’indépendance.":
      "Cerca un equilibrio tra il bisogno di vicinanza e quello di indipendenza.",
    "Ce mois peut enrichir votre vie relationnelle si vous privilégiez les liens sincères, équilibrés et respectueux.":
      "Questo mese può arricchire la tua vita relazionale se darai priorità a legami sinceri, equilibrati e rispettosi.",
    "Votre entourage évoluera favorablement lorsque vous ferez davantage de place aux relations qui correspondent à vos valeurs.":
      "Il tuo ambiente evolverà favorevolmente quando darai più spazio alle relazioni che corrispondono ai tuoi valori.",
    "Les prochaines semaines pourraient renforcer une amitié, clarifier une relation ou favoriser une nouvelle rencontre importante.":
      "Le prossime settimane potrebbero rafforzare un'amicizia, chiarire una relazione o favorire un nuovo incontro importante.",
    "Vous pourriez terminer le mois avec une vision plus claire des personnes sur lesquelles vous pouvez réellement compter.":
      "Potresti concludere il mese con una visione più chiara delle persone su cui puoi davvero contare.",
    "Votre vie sociale gagnera en profondeur à mesure que vous protégerez mieux votre énergie et vos limites.":
      "La tua vita sociale acquisterà profondità man mano che proteggerai meglio la tua energia e i tuoi limiti.",
    "Une relation pourrait devenir plus solide grâce à une communication directe et bienveillante.":
      "Una relazione potrebbe diventare più solida grazie a una comunicazione diretta e premurosa.",
    "Ce mois vous rappelle qu’une relation saine doit offrir autant de sécurité que de liberté.":
      "Questo mese ti ricorda che una relazione sana deve offrire tanta sicurezza quanta libertà.",
    "Votre capacité à choisir votre entourage avec discernement améliorera votre équilibre émotionnel.":
      "La tua capacità di scegliere con discernimento le persone che ti circondano migliorerà il tuo equilibrio emotivo.",
    "Une nouvelle dynamique relationnelle pourrait vous apporter davantage de légèreté et de confiance.":
      "Una nuova dinamica relazionale potrebbe portarti maggiore leggerezza e fiducia.",
    "En restant fidèle à vos besoins, vous attirerez des échanges plus authentiques et plus satisfaisants.":
      "Restando fedele ai tuoi bisogni, attirerai scambi più autentici e soddisfacenti.",
  },
  pt: {
    "Votre vie sociale pourrait prendre davantage d’importance ce mois-ci. Certaines rencontres ou conversations vous aideront à mieux comprendre la place que vous occupez dans vos relations.":
      "Sua vida social poderá ganhar mais importância neste mês. Alguns encontros ou conversas ajudarão você a compreender melhor o lugar que ocupa em seus relacionamentos.",
    "Les prochaines semaines mettent l’accent sur vos échanges, vos amitiés et votre manière de créer des liens. Vous pourriez rechercher des relations plus sincères et plus équilibrées.":
      "As próximas semanas destacam suas trocas, amizades e a forma como cria vínculos. Você poderá buscar relações mais sinceras e equilibradas.",
    "Ce mois vous invite à observer la qualité de votre entourage. Certaines relations vous apportent de l’énergie, tandis que d’autres pourraient vous en demander davantage.":
      "Este mês convida você a observar a qualidade de seu círculo social. Alguns relacionamentos trazem energia, enquanto outros poderão exigir mais de você.",
    "Votre cercle social pourrait connaître une évolution importante. Une nouvelle proximité pourrait se créer pendant qu’une relation moins naturelle s’éloigne progressivement.":
      "Seu círculo social poderá passar por uma evolução importante. Uma nova proximidade poderá surgir enquanto uma relação menos natural se afasta gradualmente.",
    "Le climat relationnel favorise les conversations authentiques et les liens construits sur la confiance. Vous pourriez vous sentir plus sélectif dans vos fréquentations.":
      "O clima relacional favorece conversas autênticas e vínculos construídos sobre confiança. Você poderá ficar mais seletivo em suas relações.",
    "Les prochaines semaines pourraient vous aider à reprendre contact avec une personne importante ou à approfondir une relation déjà présente.":
      "As próximas semanas poderão ajudar você a retomar contato com uma pessoa importante ou aprofundar uma relação já existente.",
    "Votre besoin de partage augmente, mais vous souhaiterez surtout être entouré de personnes capables de respecter votre sensibilité et vos limites.":
      "Sua necessidade de compartilhar aumenta, mas, acima de tudo, você desejará estar cercado de pessoas capazes de respeitar sua sensibilidade e seus limites.",
    "Une période plus active commence dans votre vie sociale. Les invitations, les échanges et les nouvelles connaissances pourraient se multiplier.":
      "Começa um período mais ativo em sua vida social. Convites, trocas e novas conexões poderão se multiplicar.",
    "Ce mois vous pousse à trouver un meilleur équilibre entre votre besoin de solitude et votre envie de rester connecté aux autres.":
      "Este mês incentiva você a encontrar um equilíbrio melhor entre sua necessidade de solidão e o desejo de permanecer conectado aos outros.",
    "Votre manière d’entrer en relation évolue. Vous pourriez rechercher moins de quantité et davantage de profondeur dans vos échanges.":
      "Sua maneira de se relacionar evolui. Você poderá buscar menos quantidade e mais profundidade em suas trocas.",
    "Votre présence sera appréciée lorsque vous resterez naturel, sans chercher à répondre à toutes les attentes de votre entourage.":
      "Sua presença será valorizada quando você permanecer natural, sem tentar corresponder a todas as expectativas de quem está ao seu redor.",
    "Une conversation spontanée pourrait vous apporter une idée, un soutien ou une nouvelle perspective.":
      "Uma conversa espontânea poderá trazer uma ideia, apoio ou uma nova perspectiva.",
    "Vous pourriez ressentir le besoin de revoir la place occupée par certaines personnes dans votre quotidien.":
      "Você poderá sentir a necessidade de rever o lugar ocupado por algumas pessoas em seu cotidiano.",
    "Le mois favorise les échanges simples, honnêtes et sans sous-entendus inutiles.":
      "O mês favorece trocas simples, honestas e sem mensagens implícitas desnecessárias.",
    "Une relation pourrait devenir plus fluide lorsque chacun exprimera clairement ses besoins.":
      "Um relacionamento poderá se tornar mais fluido quando cada pessoa expressar claramente suas necessidades.",
    "Vous pourriez être plus sensible à l’atmosphère d’un groupe. Choisissez les environnements dans lesquels vous vous sentez réellement à l’aise.":
      "Você poderá ficar mais sensível ao ambiente de um grupo. Escolha lugares onde realmente se sinta à vontade.",
    "Votre vie sociale gagnera en qualité lorsque vous cesserez d’entretenir des liens uniquement par habitude.":
      "Sua vida social ganhará qualidade quando você deixar de manter vínculos apenas por hábito.",
    "Une personne pourrait se montrer plus présente que prévu. Prenez le temps d’observer ses intentions sans tirer de conclusion trop rapide.":
      "Uma pessoa poderá se mostrar mais presente do que o esperado. Reserve tempo para observar suas intenções sem tirar conclusões precipitadas.",
    "Les relations les plus solides seront celles où vous pourrez parler librement sans devoir constamment vous adapter.":
      "Os relacionamentos mais sólidos serão aqueles em que você poderá falar livremente sem precisar se adaptar o tempo todo.",
    "Une nouvelle dynamique pourrait s’installer dans votre entourage et modifier certaines habitudes sociales.":
      "Uma nova dinâmica poderá se instalar em seu círculo e modificar alguns hábitos sociais.",
    "Une amitié pourrait se renforcer grâce à une conversation plus personnelle ou à une expérience partagée.":
      "Uma amizade poderá se fortalecer graças a uma conversa mais pessoal ou a uma experiência compartilhada.",
    "Vous pourriez reprendre contact avec une personne perdue de vue depuis quelque temps.":
      "Você poderá retomar contato com uma pessoa que não vê há algum tempo.",
    "Une relation amicale pourrait demander une mise au point afin d’éviter qu’un malaise ne s’installe.":
      "Uma amizade poderá precisar de esclarecimento para evitar que um desconforto se instale.",
    "Un ami pourrait avoir besoin de votre écoute. Veillez toutefois à ne pas porter seul ses difficultés.":
      "Um amigo poderá precisar de sua escuta. No entanto, tenha cuidado para não carregar sozinho as dificuldades dele.",
    "Vous pourriez découvrir une nouvelle facette d’une personne que vous connaissez déjà.":
      "Você poderá descobrir um novo lado de uma pessoa que já conhece.",
    "Le mois favorise les amitiés fondées sur la loyauté, le respect et la réciprocité.":
      "O mês favorece amizades baseadas em lealdade, respeito e reciprocidade.",
    "Une invitation pourrait vous permettre de sortir de votre routine et de rencontrer des personnes intéressantes.":
      "Um convite poderá permitir que você saia da rotina e conheça pessoas interessantes.",
    "Vous pourriez vous éloigner naturellement d’une relation devenue moins compatible avec votre évolution actuelle.":
      "Você poderá se afastar naturalmente de uma relação que se tornou menos compatível com sua evolução atual.",
    "Un geste simple pourrait raviver une amitié que vous croyiez affaiblie.":
      "Um gesto simples poderá reavivar uma amizade que você acreditava ter enfraquecido.",
    "Votre entourage pourrait vous rappeler l’importance de demander du soutien plutôt que de tout gérer seul.":
      "Seu círculo poderá lembrar a importância de pedir apoio em vez de administrar tudo sozinho.",
    "Une situation familiale pourrait demander davantage de patience et de communication.":
      "Uma situação familiar poderá exigir mais paciência e comunicação.",
    "Une conversation importante pourrait permettre de clarifier une incompréhension ancienne.":
      "Uma conversa importante poderá ajudar a esclarecer um mal-entendido antigo.",
    "Vous pourriez ressentir le besoin de protéger davantage votre espace personnel face aux attentes de votre famille.":
      "Você poderá sentir a necessidade de proteger melhor seu espaço pessoal diante das expectativas da família.",
    "Un membre de votre entourage familial pourrait vous surprendre par son soutien ou sa compréhension.":
      "Um familiar poderá surpreender você com apoio ou compreensão.",
    "Une responsabilité familiale pourrait modifier temporairement votre organisation.":
      "Uma responsabilidade familiar poderá modificar temporariamente sua organização.",
    "Le mois vous invite à éviter les réactions automatiques dans une relation chargée d’émotions anciennes.":
      "O mês convida você a evitar reações automáticas em uma relação carregada de emoções antigas.",
    "Un rapprochement pourrait devenir possible si chacun accepte de parler avec plus de sincérité.":
      "Uma aproximação poderá se tornar possível se todos aceitarem falar com mais sinceridade.",
    "Vous pourriez devoir rappeler une limite qui n’a pas été suffisamment respectée.":
      "Você poderá precisar reafirmar um limite que não foi respeitado o suficiente.",
    "Une activité ou un événement partagé pourrait améliorer l’ambiance familiale.":
      "Uma atividade ou evento compartilhado poderá melhorar o ambiente familiar.",
    "Votre calme vous aidera à ne pas amplifier une tension qui pourrait se résoudre plus simplement que prévu.":
      "Sua calma ajudará você a não ampliar uma tensão que poderá se resolver de forma mais simples do que o esperado.",
    "Une nouvelle rencontre pourrait vous ouvrir à un univers, une idée ou une activité différente.":
      "Um novo encontro poderá abrir você para um universo, uma ideia ou uma atividade diferente.",
    "Vous pourriez faire la connaissance d’une personne avec qui la conversation semblera immédiatement naturelle.":
      "Você poderá conhecer uma pessoa com quem a conversa parecerá imediatamente natural.",
    "Un contexte professionnel, social ou numérique pourrait favoriser une nouvelle relation intéressante.":
      "Um contexto profissional, social ou digital poderá favorecer uma nova relação interessante.",
    "Une rencontre discrète pourrait devenir plus importante avec le temps. Ne vous fiez pas uniquement à la première impression.":
      "Um encontro discreto poderá se tornar mais importante com o tempo. Não confie apenas na primeira impressão.",
    "Le mois favorise les liens créés autour d’un intérêt, d’un projet ou d’une valeur commune.":
      "O mês favorece vínculos criados em torno de um interesse, projeto ou valor comum.",
    "Vous pourriez attirer des personnes qui reflètent votre évolution récente.":
      "Você poderá atrair pessoas que refletem sua evolução recente.",
    "Une nouvelle connaissance pourrait vous aider à sortir d’une manière de penser devenue trop limitée.":
      "Uma nova conexão poderá ajudar você a sair de uma forma de pensar que se tornou limitada demais.",
    "Une relation pourrait commencer lentement, mais gagner rapidement en confiance et en profondeur.":
      "Um relacionamento poderá começar devagar, mas ganhar rapidamente confiança e profundidade.",
    "Vous pourriez être présenté à une personne capable de jouer un rôle utile dans un projet futur.":
      "Você poderá ser apresentado a uma pessoa capaz de desempenhar um papel útil em um projeto futuro.",
    "Une rencontre inattendue pourrait raviver votre envie de participer davantage à la vie sociale.":
      "Um encontro inesperado poderá reacender sua vontade de participar mais da vida social.",
    "Vos échanges gagneront en fluidité si vous exprimez directement ce que vous ressentez ou attendez.":
      "Suas trocas ficarão mais fluidas se você expressar diretamente o que sente ou espera.",
    "Évitez de supposer que les autres comprennent automatiquement vos intentions.":
      "Evite supor que os outros compreendem automaticamente suas intenções.",
    "Une formulation plus douce vous permettra de transmettre un message important sans diminuer sa clarté.":
      "Uma formulação mais suave permitirá transmitir uma mensagem importante sem diminuir sua clareza.",
    "Vous pourriez être amené à corriger une information ou à clarifier une parole mal interprétée.":
      "Você poderá precisar corrigir uma informação ou esclarecer palavras que foram mal interpretadas.",
    "Votre écoute jouera un rôle aussi important que vos paroles dans une conversation sensible.":
      "Sua capacidade de ouvir terá um papel tão importante quanto suas palavras em uma conversa delicada.",
    "Une discussion retardée mérite peut-être d’avoir lieu avant qu’un malaise ne s’installe davantage.":
      "Uma conversa adiada talvez precise acontecer antes que o desconforto aumente ainda mais.",
    "Vous pourriez découvrir qu’une personne partage davantage votre point de vue que vous ne le pensiez.":
      "Você poderá descobrir que uma pessoa compartilha mais seu ponto de vista do que imaginava.",
    "Le mois favorise les échanges honnêtes, mais il faudra éviter les paroles prononcées sous le coup de l’impatience.":
      "O mês favorece trocas honestas, mas será importante evitar palavras ditas sob o efeito da impaciência.",
    "Un message, un appel ou une conversation pourrait modifier positivement votre perception d’une relation.":
      "Uma mensagem, ligação ou conversa poderá mudar positivamente sua percepção de um relacionamento.",
    "Votre capacité à poser les bonnes questions vous aidera à mieux comprendre les motivations d’une personne.":
      "Sua capacidade de fazer as perguntas certas ajudará você a compreender melhor as motivações de uma pessoa.",
    "Le principal défi sera de ne pas vous épuiser à maintenir des relations qui ne sont plus réciproques.":
      "O principal desafio será não se esgotar mantendo relacionamentos que já não são recíprocos.",
    "Vous pourriez avoir tendance à accepter une invitation ou une demande alors que vous avez réellement besoin de repos.":
      "Você poderá ter a tendência de aceitar um convite ou pedido quando, na verdade, precisa descansar.",
    "Une remarque pourrait vous toucher plus fortement que prévu. Prenez le temps de vérifier l’intention réelle avant de réagir.":
      "Um comentário poderá afetar você mais do que o esperado. Reserve tempo para verificar a verdadeira intenção antes de reagir.",
    "Le besoin d’éviter un conflit pourrait vous pousser à taire une limite pourtant importante.":
      "A necessidade de evitar conflito poderá levar você a silenciar um limite que, no entanto, é importante.",
    "Vous pourriez vous sentir responsable de l’humeur ou du bien-être d’une personne de votre entourage.":
      "Você poderá se sentir responsável pelo humor ou bem-estar de alguém ao seu redor.",
    "Une relation pourrait devenir plus exigeante si les attentes restent implicites.":
      "Um relacionamento poderá se tornar mais exigente se as expectativas permanecerem implícitas.",
    "Le défi consistera à ne pas vous isoler complètement après une déception relationnelle.":
      "O desafio será não se isolar completamente após uma decepção relacional.",
    "Vous pourriez accorder trop d’importance à l’opinion d’un groupe qui ne vous connaît pas réellement.":
      "Você poderá dar importância demais à opinião de um grupo que não conhece você de verdade.",
    "Une tension ancienne pourrait réapparaître si elle n’a jamais été véritablement réglée.":
      "Uma tensão antiga poderá reaparecer se nunca tiver sido realmente resolvida.",
    "Le désir de préserver l’harmonie pourrait vous faire accepter un comportement qui ne vous convient pas.":
      "O desejo de preservar a harmonia poderá levar você a aceitar um comportamento que não lhe convém.",
    "Privilégiez les relations dans lesquelles vous pouvez rester vous-même sans devoir constamment vous justifier.":
      "Priorize relacionamentos nos quais você possa permanecer você mesmo sem precisar se justificar o tempo todo.",
    "Exprimez vos limites dès les premiers signes d’inconfort plutôt que d’attendre l’accumulation.":
      "Expresse seus limites aos primeiros sinais de desconforto, em vez de esperar que tudo se acumule.",
    "Accordez votre temps aux personnes qui vous offrent une présence aussi sincère que la vôtre.":
      "Dedique seu tempo às pessoas que oferecem uma presença tão sincera quanto a sua.",
    "Ne confondez pas disponibilité et obligation permanente.":
      "Não confunda disponibilidade com obrigação permanente.",
    "Prenez l’initiative d’un échange lorsque vous sentez qu’une relation mérite d’être préservée.":
      "Tome a iniciativa de conversar quando sentir que uma relação merece ser preservada.",
    "Éloignez-vous temporairement d’une situation sociale lorsque votre énergie devient trop basse.":
      "Afaste-se temporariamente de uma situação social quando sua energia ficar muito baixa.",
    "Laissez une nouvelle relation évoluer naturellement sans chercher à définir trop rapidement sa place.":
      "Deixe uma nova relação evoluir naturalmente sem tentar definir seu lugar rápido demais.",
    "Évitez de répondre immédiatement à une parole qui vous blesse. Le recul vous aidera à choisir une réponse plus juste.":
      "Evite responder imediatamente a palavras que machucam. Um pouco de distância ajudará você a escolher uma resposta mais justa.",
    "Soyez attentif aux actes autant qu’aux paroles lorsque vous évaluez la fiabilité d’une personne.":
      "Observe tanto as ações quanto as palavras ao avaliar a confiabilidade de uma pessoa.",
    "Cherchez un équilibre entre votre besoin de proximité et votre besoin d’indépendance.":
      "Busque equilíbrio entre sua necessidade de proximidade e sua necessidade de independência.",
    "Ce mois peut enrichir votre vie relationnelle si vous privilégiez les liens sincères, équilibrés et respectueux.":
      "Este mês pode enriquecer sua vida relacional se você priorizar vínculos sinceros, equilibrados e respeitosos.",
    "Votre entourage évoluera favorablement lorsque vous ferez davantage de place aux relations qui correspondent à vos valeurs.":
      "Seu círculo evoluirá favoravelmente quando você der mais espaço a relações que correspondem aos seus valores.",
    "Les prochaines semaines pourraient renforcer une amitié, clarifier une relation ou favoriser une nouvelle rencontre importante.":
      "As próximas semanas poderão fortalecer uma amizade, esclarecer um relacionamento ou favorecer um novo encontro importante.",
    "Vous pourriez terminer le mois avec une vision plus claire des personnes sur lesquelles vous pouvez réellement compter.":
      "Você poderá terminar o mês com uma visão mais clara das pessoas com quem realmente pode contar.",
    "Votre vie sociale gagnera en profondeur à mesure que vous protégerez mieux votre énergie et vos limites.":
      "Sua vida social ganhará profundidade à medida que você proteger melhor sua energia e seus limites.",
    "Une relation pourrait devenir plus solide grâce à une communication directe et bienveillante.":
      "Um relacionamento poderá se fortalecer graças a uma comunicação direta e cuidadosa.",
    "Ce mois vous rappelle qu’une relation saine doit offrir autant de sécurité que de liberté.":
      "Este mês lembra que uma relação saudável deve oferecer tanta segurança quanto liberdade.",
    "Votre capacité à choisir votre entourage avec discernement améliorera votre équilibre émotionnel.":
      "Sua capacidade de escolher seu círculo com discernimento melhorará seu equilíbrio emocional.",
    "Une nouvelle dynamique relationnelle pourrait vous apporter davantage de légèreté et de confiance.":
      "Uma nova dinâmica relacional poderá trazer mais leveza e confiança.",
    "En restant fidèle à vos besoins, vous attirerez des échanges plus authentiques et plus satisfaisants.":
      "Ao permanecer fiel às suas necessidades, você atrairá trocas mais autênticas e satisfatórias.",
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
      "monthly-social.ts",
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

export function localizeMonthlySocialBuilder(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    SOCIAL_TITLES[
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

export function localizeMonthlySocialTexts(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    SOCIAL_TEXTS[
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
