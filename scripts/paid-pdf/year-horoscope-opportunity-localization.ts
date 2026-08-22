import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap =
  Record<string, string>;

/* =========================================================
   OPPORTUNITY TITLES
========================================================= */

const OPPORTUNITY_TITLES: Record<
  Exclude<PaidPdfLocale, "fr">,
  TranslationMap
> = {
  en: {
    "Les opportunités qui marqueront votre année":
      "The opportunities that will shape your year",

    "Une année d’ouverture et de possibilités":
      "A year of openness and possibilities",

    "De nouvelles portes pourraient s’ouvrir":
      "New doors could open",

    "Votre potentiel d’évolution prend de l’ampleur":
      "Your potential for growth is expanding",

    "Une année pour saisir les bonnes occasions":
      "A year to seize the right opportunities",

    "Des possibilités à reconnaître et à construire":
      "Opportunities to recognize and develop",

    "Votre année avance vers de nouvelles perspectives":
      "Your year moves toward new possibilities",

    "Les occasions porteuses de votre année":
      "The promising opportunities of your year",
  },

  es: {
    "Les opportunités qui marqueront votre année":
      "Las oportunidades que marcarán tu año",

    "Une année d’ouverture et de possibilités":
      "Un año de apertura y posibilidades",

    "De nouvelles portes pourraient s’ouvrir":
      "Nuevas puertas podrían abrirse",

    "Votre potentiel d’évolution prend de l’ampleur":
      "Tu potencial de evolución está creciendo",

    "Une année pour saisir les bonnes occasions":
      "Un año para aprovechar las buenas oportunidades",

    "Des possibilités à reconnaître et à construire":
      "Posibilidades que reconocer y desarrollar",

    "Votre année avance vers de nouvelles perspectives":
      "Tu año avanza hacia nuevas perspectivas",

    "Les occasions porteuses de votre année":
      "Las oportunidades prometedoras de tu año",
  },

  de: {
    "Les opportunités qui marqueront votre année":
      "Die Chancen, die Ihr Jahr prägen werden",

    "Une année d’ouverture et de possibilités":
      "Ein Jahr der Offenheit und Möglichkeiten",

    "De nouvelles portes pourraient s’ouvrir":
      "Neue Türen könnten sich öffnen",

    "Votre potentiel d’évolution prend de l’ampleur":
      "Ihr Entwicklungspotenzial wächst",

    "Une année pour saisir les bonnes occasions":
      "Ein Jahr, um die richtigen Chancen zu nutzen",

    "Des possibilités à reconnaître et à construire":
      "Möglichkeiten erkennen und weiterentwickeln",

    "Votre année avance vers de nouvelles perspectives":
      "Ihr Jahr entwickelt sich hin zu neuen Perspektiven",

    "Les occasions porteuses de votre année":
      "Die vielversprechenden Chancen Ihres Jahres",
  },

  it: {
    "Les opportunités qui marqueront votre année":
      "Le opportunità che segneranno il vostro anno",

    "Une année d’ouverture et de possibilités":
      "Un anno di apertura e possibilità",

    "De nouvelles portes pourraient s’ouvrir":
      "Nuove porte potrebbero aprirsi",

    "Votre potentiel d’évolution prend de l’ampleur":
      "Il vostro potenziale di crescita aumenta",

    "Une année pour saisir les bonnes occasions":
      "Un anno per cogliere le opportunità giuste",

    "Des possibilités à reconnaître et à construire":
      "Possibilità da riconoscere e sviluppare",

    "Votre année avance vers de nouvelles perspectives":
      "Il vostro anno si apre a nuove prospettive",

    "Les occasions porteuses de votre année":
      "Le opportunità promettenti del vostro anno",
  },

  pt: {
    "Les opportunités qui marqueront votre année":
      "As oportunidades que marcarão o seu ano",

    "Une année d’ouverture et de possibilités":
      "Um ano de abertura e possibilidades",

    "De nouvelles portes pourraient s’ouvrir":
      "Novas portas poderão se abrir",

    "Votre potentiel d’évolution prend de l’ampleur":
      "Seu potencial de evolução está crescendo",

    "Une année pour saisir les bonnes occasions":
      "Um ano para aproveitar as oportunidades certas",

    "Des possibilités à reconnaître et à construire":
      "Possibilidades para reconhecer e desenvolver",

    "Votre année avance vers de nouvelles perspectives":
      "Seu ano avança em direção a novas perspectivas",

    "Les occasions porteuses de votre année":
      "As oportunidades promissoras do seu ano",
  },
};

/* =========================================================
   OPPORTUNITY TEXTS
========================================================= */

const OPPORTUNITY_TEXTS: Record<
  Exclude<PaidPdfLocale, "fr">,
  TranslationMap
> = {
  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    /* INTRODUCTION */

    "Cette année pourrait ouvrir une porte importante dans un domaine que vous cherchez à faire évoluer depuis quelque temps.":
      "This year could open an important door in an area you have been trying to develop for some time.",

    "Les prochains mois favorisent les occasions discrètes, mais prometteuses. Une proposition modeste pourrait contenir un potentiel plus grand qu’il n’y paraît.":
      "The coming months favor subtle but promising opportunities. A modest proposal could hold greater potential than it first appears.",

    "Une période d’ouverture commence. Votre capacité à reconnaître une occasion au bon moment fera une réelle différence.":
      "A period of openness begins. Your ability to recognize an opportunity at the right moment will make a real difference.",

    "Cette année vous place devant de nouvelles possibilités. Certaines demanderont une réponse rapide, tandis que d’autres devront mûrir avant d’être saisies.":
      "This year brings new possibilities before you. Some will require a quick response, while others will need time to mature before being pursued.",

    "Une occasion pourrait apparaître là où vous ne l’attendiez pas. Restez attentif aux changements, aux rencontres et aux conversations spontanées.":
      "An opportunity could appear where you least expect it. Stay attentive to changes, encounters, and spontaneous conversations.",

    "Les prochains mois vous encouragent à sortir légèrement de vos habitudes afin de découvrir une possibilité plus adaptée à vos ambitions.":
      "The coming months encourage you to step slightly outside your usual habits in order to discover an opportunity better suited to your ambitions.",

    "Votre potentiel d’évolution augmente cette année. Une décision simple pourrait produire des effets durables.":
      "Your potential for growth increases this year. A simple decision could produce lasting effects.",

    "Une nouvelle perspective pourrait modifier votre manière d’aborder un projet, une relation ou un choix personnel.":
      "A new perspective could change the way you approach a project, a relationship, or a personal decision.",

    "L’année favorise les initiatives réfléchies. Une occasion réelle pourrait se présenter si vous acceptez de faire le premier pas.":
      "The year favors thoughtful initiatives. A genuine opportunity could arise if you are willing to take the first step.",

    "Vous pourriez constater qu’une situation auparavant bloquée commence enfin à offrir davantage de possibilités.":
      "You may discover that a previously blocked situation is finally beginning to offer more possibilities.",

    /* MAIN OPPORTUNITY */

    "L’occasion principale pourrait concerner un projet que vous n’aviez pas encore osé développer pleinement.":
      "The main opportunity could involve a project you had not yet dared to develop fully.",

    "Une nouvelle responsabilité pourrait vous permettre de démontrer une compétence importante.":
      "A new responsibility could allow you to demonstrate an important skill.",

    "Une rencontre pourrait vous mettre en contact avec une personne capable d’élargir vos perspectives.":
      "An encounter could connect you with someone capable of broadening your perspective.",

    "Une proposition inattendue pourrait vous aider à avancer plus rapidement que prévu.":
      "An unexpected proposal could help you move forward faster than expected.",

    "Un changement dans votre environnement pourrait créer une possibilité jusque-là inaccessible.":
      "A change in your environment could create an opportunity that was previously out of reach.",

    "Une idée ancienne pourrait retrouver toute sa pertinence dans le contexte actuel.":
      "An old idea could become highly relevant again in the current context.",

    "Une occasion de vous faire connaître, de présenter votre travail ou de défendre une idée pourrait apparaître.":
      "An opportunity to gain visibility, present your work, or defend an idea could arise.",

    "Un choix que vous avez longtemps repoussé pourrait devenir plus simple à assumer.":
      "A decision you have postponed for a long time could become easier to make.",

    "Une amélioration progressive pourrait commencer dans un domaine qui vous préoccupait.":
      "A gradual improvement could begin in an area that has been concerning you.",

    "Une nouvelle manière d’utiliser vos compétences pourrait ouvrir une voie intéressante.":
      "A new way of using your skills could open an interesting path.",

    /* PROFESSIONAL OPPORTUNITY */

    "Une occasion professionnelle pourrait apparaître grâce à une recommandation, une discussion ou un ancien contact.":
      "A professional opportunity could arise through a recommendation, a conversation, or a former contact.",

    "Vous pourriez recevoir une proposition qui vous permettra d’élargir vos responsabilités ou votre visibilité.":
      "You could receive an offer that allows you to expand your responsibilities or visibility.",

    "Une compétence sous-estimée pourrait devenir un avantage important dans votre travail.":
      "An underestimated skill could become an important advantage in your work.",

    "L’année favorise les candidatures, les présentations, les négociations et les démarches structurées.":
      "The year favors applications, presentations, negotiations, and structured initiatives.",

    "Un projet secondaire pourrait commencer à montrer un potentiel professionnel réel.":
      "A secondary project could begin to show genuine professional potential.",

    "Une collaboration pourrait accélérer une idée qui avançait jusque-là trop lentement.":
      "A collaboration could accelerate an idea that had been progressing too slowly.",

    "Une personne pourrait reconnaître la qualité de votre travail et vous offrir une possibilité concrète.":
      "Someone could recognize the quality of your work and offer you a concrete opportunity.",

    "Une formation ou un nouvel apprentissage pourrait améliorer votre position dans les prochains mois.":
      "Training or new learning could improve your position in the coming months.",

    "Vous pourriez être amené à occuper une place plus importante dans une équipe ou un projet.":
      "You may be called upon to take on a more important role within a team or project.",

    "Une décision audacieuse, mais préparée, pourrait modifier favorablement votre trajectoire professionnelle.":
      "A bold but well-prepared decision could positively change your professional path.",

    /* FINANCIAL OPPORTUNITY */

    "Une occasion d’améliorer vos revenus pourrait apparaître sous la forme d’un mandat, d’une vente ou d’une activité complémentaire.":
      "An opportunity to improve your income could appear through a contract, a sale, or an additional activity.",

    "Une négociation pourrait vous permettre d’obtenir de meilleures conditions financières.":
      "A negotiation could help you obtain better financial terms.",

    "Une dépense réduite ou une meilleure organisation pourrait créer une marge de manœuvre bienvenue.":
      "Reducing an expense or improving your organization could create welcome financial flexibility.",

    "Vous pourriez découvrir une façon plus rentable d’utiliser une compétence ou une ressource déjà disponible.":
      "You could discover a more profitable way to use a skill or resource you already have.",

    "Une information utile pourrait vous permettre de récupérer un montant, de profiter d’un avantage ou d’éviter une dépense.":
      "Useful information could help you recover money, benefit from an advantage, or avoid an expense.",

    "Un revenu attendu pourrait enfin se concrétiser.":
      "Expected income could finally materialize.",

    "Une occasion financière pourrait demander une décision rapide, mais elle devra tout de même être vérifiée soigneusement.":
      "A financial opportunity could require a quick decision, but it should still be checked carefully.",

    "Une proposition modeste pourrait devenir plus intéressante à moyen terme.":
      "A modest proposal could become more interesting in the medium term.",

    "Vous pourriez poser une base solide pour une nouvelle source de revenu.":
      "You could establish a solid foundation for a new source of income.",

    "Une amélioration financière pourrait commencer par un choix simple et raisonnable effectué cette année.":
      "A financial improvement could begin with a simple and reasonable choice made this year.",

    /* RELATIONSHIP OPPORTUNITY */

    "Une relation pourrait s’approfondir grâce à une conversation plus sincère.":
      "A relationship could deepen through a more sincere conversation.",

    "Une nouvelle rencontre pourrait vous apporter de la légèreté, du soutien ou une perspective différente.":
      "A new encounter could bring you lightness, support, or a different perspective.",

    "Un rapprochement pourrait devenir possible après une période de distance ou d’incompréhension.":
      "A closer connection could become possible after a period of distance or misunderstanding.",

    "Vous pourriez rencontrer une personne avec qui la confiance s’installera naturellement.":
      "You could meet someone with whom trust develops naturally.",

    "Une occasion de réparer ou de clarifier une relation pourrait apparaître.":
      "An opportunity to repair or clarify a relationship could arise.",

    "Une invitation pourrait vous permettre de renforcer un lien important.":
      "An invitation could allow you to strengthen an important connection.",

    "Une personne de votre entourage pourrait se montrer plus disponible ou plus ouverte que prévu.":
      "Someone close to you could prove more available or open than expected.",

    "Une nouvelle dynamique relationnelle pourrait vous aider à vous sentir davantage compris.":
      "A new relationship dynamic could help you feel better understood.",

    "Vous pourriez découvrir qu’une relation possède plus de potentiel que vous ne l’aviez imaginé.":
      "You could discover that a relationship has more potential than you had imagined.",

    "Une conversation spontanée pourrait marquer le début d’un lien important.":
      "A spontaneous conversation could mark the beginning of an important connection.",

    /* PERSONAL OPPORTUNITY */

    "Une occasion de mieux vous connaître pourrait apparaître à travers une décision ou une expérience nouvelle.":
      "An opportunity to know yourself better could arise through a decision or a new experience.",

    "Vous pourriez retrouver une motivation que vous croyiez perdue.":
      "You could regain motivation that you thought you had lost.",

    "Un changement d’habitude pourrait améliorer plusieurs aspects de votre quotidien.":
      "A change in habit could improve several aspects of your daily life.",

    "L’année favorise une reprise progressive d’un projet personnel important.":
      "The year favors the gradual resumption of an important personal project.",

    "Vous pourriez découvrir une activité capable de vous apporter davantage de satisfaction ou d’équilibre.":
      "You could discover an activity capable of bringing you greater satisfaction or balance.",

    "Une prise de conscience pourrait vous aider à abandonner une limite devenue inutile.":
      "A realization could help you let go of a limitation that is no longer useful.",

    "Vous pourriez vous sentir prêt à essayer une approche différente dans un domaine où vous tourniez en rond.":
      "You may feel ready to try a different approach in an area where you had been going in circles.",

    "Une nouvelle routine pourrait renforcer votre confiance et votre énergie.":
      "A new routine could strengthen your confidence and energy.",

    "Un choix personnel pourrait vous rapprocher d’un mode de vie plus fidèle à vos besoins.":
      "A personal choice could bring you closer to a lifestyle that better reflects your needs.",

    "Une expérience inattendue pourrait révéler une capacité que vous n’utilisiez pas encore pleinement.":
      "An unexpected experience could reveal an ability you had not yet been using fully.",

    /* KEY PERIODS */

    "Le début de l’année favorisera la préparation des projets qui porteront leurs fruits plus tard.":
      "The beginning of the year will favor preparing projects that will bear fruit later.",

    "Le printemps pourrait apporter plusieurs nouvelles occasions professionnelles ou personnelles.":
      "Spring could bring several new professional or personal opportunities.",

    "Le milieu de l’année sera favorable aux décisions importantes et aux nouvelles collaborations.":
      "The middle of the year will be favorable for important decisions and new collaborations.",

    "L’été pourrait ouvrir une porte inattendue grâce à une rencontre ou un déplacement.":
      "Summer could open an unexpected door through an encounter or a trip.",

    "L’automne favorisera les concrétisations, les signatures et les projets mûrement préparés.":
      "Autumn will favor concrete results, signatures, and carefully prepared projects.",

    "La fin de l’année permettra de récolter les résultats de vos efforts des derniers mois.":
      "The end of the year will allow you to reap the results of your efforts from recent months.",

    "Certaines opportunités demanderont d’être saisies rapidement, tandis que d’autres exigeront davantage de patience.":
      "Some opportunities will need to be seized quickly, while others will require more patience.",

    "Le deuxième semestre pourrait devenir particulièrement favorable à votre évolution.":
      "The second half of the year could become particularly favorable for your development.",

    "Les périodes les plus porteuses seront celles où vous oserez sortir de votre zone de confort.":
      "The most promising periods will be those when you dare to step outside your comfort zone.",

    "Une succession de petites occasions pourrait produire un changement bien plus important que prévu.":
      "A series of small opportunities could produce a much greater change than expected.",

    /* ACTION */

    "Faites le premier pas au lieu d’attendre un signe parfait.":
      "Take the first step instead of waiting for a perfect sign.",

    "Préparez vos arguments, vos documents ou votre proposition avant que l’occasion ne se présente.":
      "Prepare your arguments, documents, or proposal before the opportunity presents itself.",

    "Répondez avec intérêt, mais accordez-vous le temps de vérifier les détails.":
      "Respond with interest, but give yourself time to verify the details.",

    "Parlez de votre projet aux personnes capables de vous conseiller ou de vous mettre en contact avec les bonnes ressources.":
      "Talk about your project with people who can advise you or connect you with the right resources.",

    "Acceptez une petite ouverture si elle peut mener vers une possibilité plus importante.":
      "Accept a small opening if it could lead to a more significant opportunity.",

    "Montrez clairement ce que vous savez faire au lieu de supposer que les autres le remarquent automatiquement.":
      "Clearly show what you can do instead of assuming others will automatically notice it.",

    "Choisissez l’occasion qui correspond réellement à vos priorités plutôt que celle qui semble la plus impressionnante.":
      "Choose the opportunity that truly matches your priorities rather than the one that seems most impressive.",

    "Restez disponible aux ajustements sans perdre de vue votre objectif principal.":
      "Remain open to adjustments without losing sight of your main objective.",

    "Saisissez l’occasion de poser une question, de proposer une idée ou de demander une réponse claire.":
      "Take the opportunity to ask a question, suggest an idea, or request a clear answer.",

    "Avancez avec confiance, mais évitez de vous engager avant d’avoir compris toutes les conditions.":
      "Move forward with confidence, but avoid committing before you understand all the conditions.",

    /* CAUTION */

    "Toutes les occasions ne méritent pas d’être acceptées. Vérifiez ce qu’elles exigent réellement de votre temps et de votre énergie.":
      "Not every opportunity deserves to be accepted. Check what it truly requires from your time and energy.",

    "Une proposition séduisante pourrait cacher des attentes imprécises ou trop importantes.":
      "An attractive proposal could hide unclear or excessive expectations.",

    "Évitez de confondre urgence et véritable opportunité.":
      "Avoid confusing urgency with a genuine opportunity.",

    "Une occasion pourrait être moins avantageuse si elle vous oblige à abandonner une priorité essentielle.":
      "An opportunity could be less beneficial if it requires you to abandon an essential priority.",

    "Ne vous engagez pas uniquement pour éviter de décevoir une personne.":
      "Do not commit simply to avoid disappointing someone.",

    "Une réponse rapide sera parfois nécessaire, mais elle ne devrait jamais remplacer une vérification sérieuse.":
      "A quick response may sometimes be necessary, but it should never replace careful verification.",

    "Le désir de changement pourrait vous pousser à idéaliser une possibilité encore mal définie.":
      "The desire for change could lead you to idealize an opportunity that is still poorly defined.",

    "Une occasion réelle doit également respecter vos limites et vos valeurs.":
      "A genuine opportunity must also respect your limits and values.",

    "Évitez de multiplier les engagements simplement parce que plusieurs portes s’ouvrent en même temps.":
      "Avoid multiplying commitments simply because several doors open at the same time.",

    "Une proposition prometteuse devra être évaluée selon ses effets à long terme et non seulement selon son attrait immédiat.":
      "A promising proposal should be evaluated according to its long-term effects, not only its immediate appeal.",

    /* CONCLUSION */

    "Cette année pourrait devenir une période d’ouverture importante si vous restez attentif, préparé et fidèle à vos priorités.":
      "This year could become an important period of opportunity if you remain attentive, prepared, and true to your priorities.",

    "Une occasion réelle pourrait vous permettre d’avancer vers une situation plus stimulante et plus adaptée à vos besoins.":
      "A genuine opportunity could allow you to move toward a more stimulating situation that better suits your needs.",

    "Les prochains mois vous montreront que certaines portes s’ouvrent lorsque vous acceptez enfin de vous présenter devant elles.":
      "The coming months will show you that some doors open when you finally allow yourself to stand before them.",

    "Votre capacité à reconnaître le bon moment pourrait transformer une possibilité discrète en véritable progression.":
      "Your ability to recognize the right moment could transform a subtle possibility into genuine progress.",

    "Vous pourriez terminer l’année avec une nouvelle direction, un projet relancé ou une relation enrichissante.":
      "You could end the year with a new direction, a revived project, or a rewarding relationship.",

    "Une décision prise avec discernement pourrait créer des effets positifs bien au-delà de cette année.":
      "A decision made with discernment could create positive effects far beyond this year.",

    "Cette année favorise les occasions qui demandent autant de courage que de préparation.":
      "This year favors opportunities that require both courage and preparation.",

    "Une nouvelle possibilité pourrait confirmer que vos efforts récents n’étaient pas inutiles.":
      "A new possibility could confirm that your recent efforts were not in vain.",

    "Votre ouverture au changement vous permettra de découvrir une voie plus prometteuse.":
      "Your openness to change will allow you to discover a more promising path.",

    "En restant attentif aux détails et aux rencontres, vous pourriez saisir une occasion particulièrement constructive.":
      "By remaining attentive to details and encounters, you could seize a particularly constructive opportunity.",
  },

  /* =======================================================
     SPANISH
  ======================================================= */

  es: {
    /* INTRODUCTION */

    "Cette année pourrait ouvrir une porte importante dans un domaine que vous cherchez à faire évoluer depuis quelque temps.":
      "Este año podría abrir una puerta importante en un ámbito que llevas algún tiempo intentando desarrollar.",

    "Les prochains mois favorisent les occasions discrètes, mais prometteuses. Une proposition modeste pourrait contenir un potentiel plus grand qu’il n’y paraît.":
      "Los próximos meses favorecen las oportunidades discretas pero prometedoras. Una propuesta modesta podría contener un potencial mayor de lo que parece.",

    "Une période d’ouverture commence. Votre capacité à reconnaître une occasion au bon moment fera une réelle différence.":
      "Comienza un período de apertura. Tu capacidad para reconocer una oportunidad en el momento adecuado marcará una verdadera diferencia.",

    "Cette année vous place devant de nouvelles possibilités. Certaines demanderont une réponse rapide, tandis que d’autres devront mûrir avant d’être saisies.":
      "Este año te coloca frente a nuevas posibilidades. Algunas requerirán una respuesta rápida, mientras que otras necesitarán madurar antes de ser aprovechadas.",

    "Une occasion pourrait apparaître là où vous ne l’attendiez pas. Restez attentif aux changements, aux rencontres et aux conversations spontanées.":
      "Una oportunidad podría aparecer donde menos la esperas. Mantente atento a los cambios, los encuentros y las conversaciones espontáneas.",

    "Les prochains mois vous encouragent à sortir légèrement de vos habitudes afin de découvrir une possibilité plus adaptée à vos ambitions.":
      "Los próximos meses te animan a salir un poco de tus hábitos para descubrir una posibilidad más adaptada a tus ambiciones.",

    "Votre potentiel d’évolution augmente cette année. Une décision simple pourrait produire des effets durables.":
      "Tu potencial de evolución aumenta este año. Una decisión sencilla podría producir efectos duraderos.",

    "Une nouvelle perspective pourrait modifier votre manière d’aborder un projet, une relation ou un choix personnel.":
      "Una nueva perspectiva podría cambiar tu manera de abordar un proyecto, una relación o una decisión personal.",

    "L’année favorise les initiatives réfléchies. Une occasion réelle pourrait se présenter si vous acceptez de faire le premier pas.":
      "El año favorece las iniciativas bien pensadas. Una verdadera oportunidad podría presentarse si aceptas dar el primer paso.",

    "Vous pourriez constater qu’une situation auparavant bloquée commence enfin à offrir davantage de possibilités.":
      "Podrías descubrir que una situación anteriormente bloqueada empieza por fin a ofrecer más posibilidades.",

    /* MAIN OPPORTUNITY */

    "L’occasion principale pourrait concerner un projet que vous n’aviez pas encore osé développer pleinement.":
      "La principal oportunidad podría estar relacionada con un proyecto que todavía no te habías atrevido a desarrollar plenamente.",

    "Une nouvelle responsabilité pourrait vous permettre de démontrer une compétence importante.":
      "Una nueva responsabilidad podría permitirte demostrar una habilidad importante.",

    "Une rencontre pourrait vous mettre en contact avec une personne capable d’élargir vos perspectives.":
      "Un encuentro podría ponerte en contacto con una persona capaz de ampliar tus perspectivas.",

    "Une proposition inattendue pourrait vous aider à avancer plus rapidement que prévu.":
      "Una propuesta inesperada podría ayudarte a avanzar más rápidamente de lo previsto.",

    "Un changement dans votre environnement pourrait créer une possibilité jusque-là inaccessible.":
      "Un cambio en tu entorno podría crear una posibilidad que hasta ahora era inaccesible.",

    "Une idée ancienne pourrait retrouver toute sa pertinence dans le contexte actuel.":
      "Una antigua idea podría recuperar toda su relevancia en el contexto actual.",

    "Une occasion de vous faire connaître, de présenter votre travail ou de défendre une idée pourrait apparaître.":
      "Podría surgir una oportunidad para darte a conocer, presentar tu trabajo o defender una idea.",

    "Un choix que vous avez longtemps repoussé pourrait devenir plus simple à assumer.":
      "Una decisión que has pospuesto durante mucho tiempo podría resultar más fácil de asumir.",

    "Une amélioration progressive pourrait commencer dans un domaine qui vous préoccupait.":
      "Podría comenzar una mejora progresiva en un ámbito que te preocupaba.",

    "Une nouvelle manière d’utiliser vos compétences pourrait ouvrir une voie intéressante.":
      "Una nueva manera de utilizar tus habilidades podría abrir un camino interesante.",

    /* PROFESSIONAL OPPORTUNITY */

    "Une occasion professionnelle pourrait apparaître grâce à une recommandation, une discussion ou un ancien contact.":
      "Una oportunidad profesional podría surgir gracias a una recomendación, una conversación o un antiguo contacto.",

    "Vous pourriez recevoir une proposition qui vous permettra d’élargir vos responsabilités ou votre visibilité.":
      "Podrías recibir una propuesta que te permita ampliar tus responsabilidades o tu visibilidad.",

    "Une compétence sous-estimée pourrait devenir un avantage important dans votre travail.":
      "Una habilidad subestimada podría convertirse en una ventaja importante en tu trabajo.",

    "L’année favorise les candidatures, les présentations, les négociations et les démarches structurées.":
      "El año favorece las candidaturas, las presentaciones, las negociaciones y las iniciativas estructuradas.",

    "Un projet secondaire pourrait commencer à montrer un potentiel professionnel réel.":
      "Un proyecto secundario podría comenzar a mostrar un verdadero potencial profesional.",

    "Une collaboration pourrait accélérer une idée qui avançait jusque-là trop lentement.":
      "Una colaboración podría acelerar una idea que hasta ahora avanzaba demasiado lentamente.",

    "Une personne pourrait reconnaître la qualité de votre travail et vous offrir une possibilité concrète.":
      "Alguien podría reconocer la calidad de tu trabajo y ofrecerte una oportunidad concreta.",

    "Une formation ou un nouvel apprentissage pourrait améliorer votre position dans les prochains mois.":
      "Una formación o un nuevo aprendizaje podría mejorar tu posición durante los próximos meses.",

    "Vous pourriez être amené à occuper une place plus importante dans une équipe ou un projet.":
      "Podrías llegar a ocupar un lugar más importante dentro de un equipo o proyecto.",

    "Une décision audacieuse, mais préparée, pourrait modifier favorablement votre trajectoire professionnelle.":
      "Una decisión audaz pero bien preparada podría modificar favorablemente tu trayectoria profesional.",

    /* FINANCIAL OPPORTUNITY */

    "Une occasion d’améliorer vos revenus pourrait apparaître sous la forme d’un mandat, d’une vente ou d’une activité complémentaire.":
      "Una oportunidad para mejorar tus ingresos podría aparecer en forma de un encargo, una venta o una actividad complementaria.",

    "Une négociation pourrait vous permettre d’obtenir de meilleures conditions financières.":
      "Una negociación podría permitirte obtener mejores condiciones financieras.",

    "Une dépense réduite ou une meilleure organisation pourrait créer une marge de manœuvre bienvenue.":
      "Reducir un gasto o mejorar tu organización podría crear un margen financiero muy útil.",

    "Vous pourriez découvrir une façon plus rentable d’utiliser une compétence ou une ressource déjà disponible.":
      "Podrías descubrir una manera más rentable de utilizar una habilidad o un recurso que ya tienes disponible.",

    "Une information utile pourrait vous permettre de récupérer un montant, de profiter d’un avantage ou d’éviter une dépense.":
      "Una información útil podría permitirte recuperar una cantidad, aprovechar una ventaja o evitar un gasto.",

    "Un revenu attendu pourrait enfin se concrétiser.":
      "Un ingreso esperado podría finalmente concretarse.",

    "Une occasion financière pourrait demander une décision rapide, mais elle devra tout de même être vérifiée soigneusement.":
      "Una oportunidad financiera podría requerir una decisión rápida, pero aun así deberá verificarse cuidadosamente.",

    "Une proposition modeste pourrait devenir plus intéressante à moyen terme.":
      "Una propuesta modesta podría volverse más interesante a medio plazo.",

    "Vous pourriez poser une base solide pour une nouvelle source de revenu.":
      "Podrías establecer una base sólida para una nueva fuente de ingresos.",

    "Une amélioration financière pourrait commencer par un choix simple et raisonnable effectué cette année.":
      "Una mejora financiera podría comenzar con una decisión sencilla y razonable tomada este año.",

    /* RELATIONSHIP OPPORTUNITY */

    "Une relation pourrait s’approfondir grâce à une conversation plus sincère.":
      "Una relación podría profundizarse gracias a una conversación más sincera.",

    "Une nouvelle rencontre pourrait vous apporter de la légèreté, du soutien ou une perspective différente.":
      "Un nuevo encuentro podría aportarte ligereza, apoyo o una perspectiva diferente.",

    "Un rapprochement pourrait devenir possible après une période de distance ou d’incompréhension.":
      "Un acercamiento podría hacerse posible después de un período de distancia o incomprensión.",

    "Vous pourriez rencontrer une personne avec qui la confiance s’installera naturellement.":
      "Podrías conocer a una persona con quien la confianza se establezca de manera natural.",

    "Une occasion de réparer ou de clarifier une relation pourrait apparaître.":
      "Podría aparecer una oportunidad para reparar o aclarar una relación.",

    "Une invitation pourrait vous permettre de renforcer un lien important.":
      "Una invitación podría permitirte fortalecer un vínculo importante.",

    "Une personne de votre entourage pourrait se montrer plus disponible ou plus ouverte que prévu.":
      "Una persona de tu entorno podría mostrarse más disponible o abierta de lo previsto.",

    "Une nouvelle dynamique relationnelle pourrait vous aider à vous sentir davantage compris.":
      "Una nueva dinámica en tus relaciones podría ayudarte a sentirte más comprendido.",

    "Vous pourriez découvrir qu’une relation possède plus de potentiel que vous ne l’aviez imaginé.":
      "Podrías descubrir que una relación tiene más potencial del que habías imaginado.",

    "Une conversation spontanée pourrait marquer le début d’un lien important.":
      "Una conversación espontánea podría marcar el comienzo de un vínculo importante.",

    /* PERSONAL OPPORTUNITY */

    "Une occasion de mieux vous connaître pourrait apparaître à travers une décision ou une expérience nouvelle.":
      "Una oportunidad para conocerte mejor podría surgir a través de una decisión o una experiencia nueva.",

    "Vous pourriez retrouver une motivation que vous croyiez perdue.":
      "Podrías recuperar una motivación que creías perdida.",

    "Un changement d’habitude pourrait améliorer plusieurs aspects de votre quotidien.":
      "Un cambio de hábito podría mejorar varios aspectos de tu vida cotidiana.",

    "L’année favorise une reprise progressive d’un projet personnel important.":
      "El año favorece la reanudación progresiva de un proyecto personal importante.",

    "Vous pourriez découvrir une activité capable de vous apporter davantage de satisfaction ou d’équilibre.":
      "Podrías descubrir una actividad capaz de aportarte mayor satisfacción o equilibrio.",

    "Une prise de conscience pourrait vous aider à abandonner une limite devenue inutile.":
      "Una toma de conciencia podría ayudarte a abandonar una limitación que ya no es necesaria.",

    "Vous pourriez vous sentir prêt à essayer une approche différente dans un domaine où vous tourniez en rond.":
      "Podrías sentirte preparado para probar un enfoque diferente en un ámbito donde sentías que dabas vueltas en círculo.",

    "Une nouvelle routine pourrait renforcer votre confiance et votre énergie.":
      "Una nueva rutina podría fortalecer tu confianza y tu energía.",

    "Un choix personnel pourrait vous rapprocher d’un mode de vie plus fidèle à vos besoins.":
      "Una decisión personal podría acercarte a un estilo de vida más acorde con tus necesidades.",

    "Une expérience inattendue pourrait révéler une capacité que vous n’utilisiez pas encore pleinement.":
      "Una experiencia inesperada podría revelar una capacidad que todavía no utilizabas plenamente.",

    /* KEY PERIODS */

    "Le début de l’année favorisera la préparation des projets qui porteront leurs fruits plus tard.":
      "El comienzo del año favorecerá la preparación de proyectos que darán frutos más adelante.",

    "Le printemps pourrait apporter plusieurs nouvelles occasions professionnelles ou personnelles.":
      "La primavera podría traer varias nuevas oportunidades profesionales o personales.",

    "Le milieu de l’année sera favorable aux décisions importantes et aux nouvelles collaborations.":
      "La mitad del año será favorable para las decisiones importantes y las nuevas colaboraciones.",

    "L’été pourrait ouvrir une porte inattendue grâce à une rencontre ou un déplacement.":
      "El verano podría abrir una puerta inesperada gracias a un encuentro o un desplazamiento.",

    "L’automne favorisera les concrétisations, les signatures et les projets mûrement préparés.":
      "El otoño favorecerá las concreciones, las firmas y los proyectos cuidadosamente preparados.",

    "La fin de l’année permettra de récolter les résultats de vos efforts des derniers mois.":
      "El final del año permitirá recoger los resultados de tus esfuerzos de los últimos meses.",

    "Certaines opportunités demanderont d’être saisies rapidement, tandis que d’autres exigeront davantage de patience.":
      "Algunas oportunidades deberán aprovecharse rápidamente, mientras que otras requerirán más paciencia.",

    "Le deuxième semestre pourrait devenir particulièrement favorable à votre évolution.":
      "La segunda mitad del año podría ser especialmente favorable para tu evolución.",

    "Les périodes les plus porteuses seront celles où vous oserez sortir de votre zone de confort.":
      "Los períodos más favorables serán aquellos en los que te atrevas a salir de tu zona de confort.",

    "Une succession de petites occasions pourrait produire un changement bien plus important que prévu.":
      "Una sucesión de pequeñas oportunidades podría producir un cambio mucho mayor de lo esperado.",

    /* ACTION */

    "Faites le premier pas au lieu d’attendre un signe parfait.":
      "Da el primer paso en lugar de esperar una señal perfecta.",

    "Préparez vos arguments, vos documents ou votre proposition avant que l’occasion ne se présente.":
      "Prepara tus argumentos, documentos o propuesta antes de que aparezca la oportunidad.",

    "Répondez avec intérêt, mais accordez-vous le temps de vérifier les détails.":
      "Responde con interés, pero date tiempo para verificar los detalles.",

    "Parlez de votre projet aux personnes capables de vous conseiller ou de vous mettre en contact avec les bonnes ressources.":
      "Habla de tu proyecto con personas que puedan aconsejarte o ponerte en contacto con los recursos adecuados.",

    "Acceptez une petite ouverture si elle peut mener vers une possibilité plus importante.":
      "Acepta una pequeña apertura si puede conducir a una posibilidad más importante.",

    "Montrez clairement ce que vous savez faire au lieu de supposer que les autres le remarquent automatiquement.":
      "Muestra claramente lo que sabes hacer en lugar de suponer que los demás lo notarán automáticamente.",

    "Choisissez l’occasion qui correspond réellement à vos priorités plutôt que celle qui semble la plus impressionnante.":
      "Elige la oportunidad que realmente corresponda a tus prioridades en lugar de la que parezca más impresionante.",

    "Restez disponible aux ajustements sans perdre de vue votre objectif principal.":
      "Mantente abierto a los ajustes sin perder de vista tu objetivo principal.",

    "Saisissez l’occasion de poser une question, de proposer une idée ou de demander une réponse claire.":
      "Aprovecha la oportunidad para hacer una pregunta, proponer una idea o pedir una respuesta clara.",

    "Avancez avec confiance, mais évitez de vous engager avant d’avoir compris toutes les conditions.":
      "Avanza con confianza, pero evita comprometerte antes de comprender todas las condiciones.",

    /* CAUTION */

    "Toutes les occasions ne méritent pas d’être acceptées. Vérifiez ce qu’elles exigent réellement de votre temps et de votre énergie.":
      "No todas las oportunidades merecen ser aceptadas. Comprueba lo que realmente exigen de tu tiempo y energía.",

    "Une proposition séduisante pourrait cacher des attentes imprécises ou trop importantes.":
      "Una propuesta atractiva podría ocultar expectativas poco claras o demasiado exigentes.",

    "Évitez de confondre urgence et véritable opportunité.":
      "Evita confundir urgencia con una verdadera oportunidad.",

    "Une occasion pourrait être moins avantageuse si elle vous oblige à abandonner une priorité essentielle.":
      "Una oportunidad podría ser menos beneficiosa si te obliga a abandonar una prioridad esencial.",

    "Ne vous engagez pas uniquement pour éviter de décevoir une personne.":
      "No te comprometas únicamente para evitar decepcionar a alguien.",

    "Une réponse rapide sera parfois nécessaire, mais elle ne devrait jamais remplacer une vérification sérieuse.":
      "A veces será necesaria una respuesta rápida, pero nunca debería sustituir una verificación seria.",

    "Le désir de changement pourrait vous pousser à idéaliser une possibilité encore mal définie.":
      "El deseo de cambio podría llevarte a idealizar una posibilidad que todavía no está bien definida.",

    "Une occasion réelle doit également respecter vos limites et vos valeurs.":
      "Una verdadera oportunidad también debe respetar tus límites y tus valores.",

    "Évitez de multiplier les engagements simplement parce que plusieurs portes s’ouvrent en même temps.":
      "Evita multiplicar tus compromisos simplemente porque varias puertas se abren al mismo tiempo.",

    "Une proposition prometteuse devra être évaluée selon ses effets à long terme et non seulement selon son attrait immédiat.":
      "Una propuesta prometedora deberá evaluarse según sus efectos a largo plazo y no solamente por su atractivo inmediato.",

    /* CONCLUSION */

    "Cette année pourrait devenir une période d’ouverture importante si vous restez attentif, préparé et fidèle à vos priorités.":
      "Este año podría convertirse en un período importante de apertura si permaneces atento, preparado y fiel a tus prioridades.",

    "Une occasion réelle pourrait vous permettre d’avancer vers une situation plus stimulante et plus adaptée à vos besoins.":
      "Una verdadera oportunidad podría permitirte avanzar hacia una situación más estimulante y adaptada a tus necesidades.",

    "Les prochains mois vous montreront que certaines portes s’ouvrent lorsque vous acceptez enfin de vous présenter devant elles.":
      "Los próximos meses te mostrarán que algunas puertas se abren cuando finalmente aceptas presentarte ante ellas.",

    "Votre capacité à reconnaître le bon moment pourrait transformer une possibilité discrète en véritable progression.":
      "Tu capacidad para reconocer el momento adecuado podría transformar una posibilidad discreta en un verdadero avance.",

    "Vous pourriez terminer l’année avec une nouvelle direction, un projet relancé ou une relation enrichissante.":
      "Podrías terminar el año con una nueva dirección, un proyecto reactivado o una relación enriquecedora.",

    "Une décision prise avec discernement pourrait créer des effets positifs bien au-delà de cette année.":
      "Una decisión tomada con discernimiento podría generar efectos positivos mucho más allá de este año.",

    "Cette année favorise les occasions qui demandent autant de courage que de préparation.":
      "Este año favorece las oportunidades que requieren tanto valor como preparación.",

    "Une nouvelle possibilité pourrait confirmer que vos efforts récents n’étaient pas inutiles.":
      "Una nueva posibilidad podría confirmar que tus esfuerzos recientes no fueron inútiles.",

    "Votre ouverture au changement vous permettra de découvrir une voie plus prometteuse.":
      "Tu apertura al cambio te permitirá descubrir un camino más prometedor.",

    "En restant attentif aux détails et aux rencontres, vous pourriez saisir une occasion particulièrement constructive.":
      "Manteniéndote atento a los detalles y a los encuentros, podrías aprovechar una oportunidad especialmente constructiva.",
  },

  /* =======================================================
     GERMAN
  ======================================================= */

  de: {
    /* INTRODUCTION */

    "Cette année pourrait ouvrir une porte importante dans un domaine que vous cherchez à faire évoluer depuis quelque temps.":
      "Dieses Jahr könnte eine wichtige Tür in einem Bereich öffnen, den Sie schon seit einiger Zeit weiterentwickeln möchten.",

    "Les prochains mois favorisent les occasions discrètes, mais prometteuses. Une proposition modeste pourrait contenir un potentiel plus grand qu’il n’y paraît.":
      "Die kommenden Monate begünstigen unauffällige, aber vielversprechende Chancen. Ein bescheidener Vorschlag könnte mehr Potenzial enthalten, als es zunächst scheint.",

    "Une période d’ouverture commence. Votre capacité à reconnaître une occasion au bon moment fera une réelle différence.":
      "Eine Phase der Offenheit beginnt. Ihre Fähigkeit, eine Gelegenheit im richtigen Moment zu erkennen, wird einen echten Unterschied machen.",

    "Cette année vous place devant de nouvelles possibilités. Certaines demanderont une réponse rapide, tandis que d’autres devront mûrir avant d’être saisies.":
      "Dieses Jahr stellt Sie vor neue Möglichkeiten. Manche erfordern eine schnelle Antwort, während andere erst reifen müssen, bevor Sie sie nutzen können.",

    "Une occasion pourrait apparaître là où vous ne l’attendiez pas. Restez attentif aux changements, aux rencontres et aux conversations spontanées.":
      "Eine Gelegenheit könnte dort auftauchen, wo Sie sie nicht erwartet haben. Achten Sie auf Veränderungen, Begegnungen und spontane Gespräche.",

    "Les prochains mois vous encouragent à sortir légèrement de vos habitudes afin de découvrir une possibilité plus adaptée à vos ambitions.":
      "Die kommenden Monate ermutigen Sie, Ihre gewohnten Wege etwas zu verlassen, um eine Möglichkeit zu entdecken, die besser zu Ihren Ambitionen passt.",

    "Votre potentiel d’évolution augmente cette année. Une décision simple pourrait produire des effets durables.":
      "Ihr Entwicklungspotenzial wächst in diesem Jahr. Eine einfache Entscheidung könnte langfristige Auswirkungen haben.",

    "Une nouvelle perspective pourrait modifier votre manière d’aborder un projet, une relation ou un choix personnel.":
      "Eine neue Perspektive könnte verändern, wie Sie ein Projekt, eine Beziehung oder eine persönliche Entscheidung angehen.",

    "L’année favorise les initiatives réfléchies. Une occasion réelle pourrait se présenter si vous acceptez de faire le premier pas.":
      "Das Jahr begünstigt wohlüberlegte Initiativen. Eine echte Chance könnte sich ergeben, wenn Sie bereit sind, den ersten Schritt zu machen.",

    "Vous pourriez constater qu’une situation auparavant bloquée commence enfin à offrir davantage de possibilités.":
      "Sie könnten feststellen, dass eine zuvor festgefahrene Situation endlich mehr Möglichkeiten bietet.",

    /* MAIN OPPORTUNITY */

    "L’occasion principale pourrait concerner un projet que vous n’aviez pas encore osé développer pleinement.":
      "Die wichtigste Chance könnte ein Projekt betreffen, das Sie bisher noch nicht vollständig zu entwickeln gewagt haben.",

    "Une nouvelle responsabilité pourrait vous permettre de démontrer une compétence importante.":
      "Eine neue Verantwortung könnte Ihnen ermöglichen, eine wichtige Fähigkeit unter Beweis zu stellen.",

    "Une rencontre pourrait vous mettre en contact avec une personne capable d’élargir vos perspectives.":
      "Eine Begegnung könnte Sie mit jemandem in Kontakt bringen, der Ihren Horizont erweitern kann.",

    "Une proposition inattendue pourrait vous aider à avancer plus rapidement que prévu.":
      "Ein unerwarteter Vorschlag könnte Ihnen helfen, schneller als erwartet voranzukommen.",

    "Un changement dans votre environnement pourrait créer une possibilité jusque-là inaccessible.":
      "Eine Veränderung in Ihrem Umfeld könnte eine bisher unerreichbare Möglichkeit schaffen.",

    "Une idée ancienne pourrait retrouver toute sa pertinence dans le contexte actuel.":
      "Eine frühere Idee könnte im aktuellen Kontext wieder besonders relevant werden.",

    "Une occasion de vous faire connaître, de présenter votre travail ou de défendre une idée pourrait apparaître.":
      "Eine Gelegenheit, bekannter zu werden, Ihre Arbeit zu präsentieren oder eine Idee zu vertreten, könnte sich ergeben.",

    "Un choix que vous avez longtemps repoussé pourrait devenir plus simple à assumer.":
      "Eine Entscheidung, die Sie lange aufgeschoben haben, könnte leichter zu treffen sein.",

    "Une amélioration progressive pourrait commencer dans un domaine qui vous préoccupait.":
      "In einem Bereich, der Ihnen Sorgen bereitet hat, könnte eine schrittweise Verbesserung beginnen.",

    "Une nouvelle manière d’utiliser vos compétences pourrait ouvrir une voie intéressante.":
      "Eine neue Art, Ihre Fähigkeiten einzusetzen, könnte einen interessanten Weg eröffnen.",

    /* PROFESSIONAL OPPORTUNITY */

    "Une occasion professionnelle pourrait apparaître grâce à une recommandation, une discussion ou un ancien contact.":
      "Eine berufliche Chance könnte durch eine Empfehlung, ein Gespräch oder einen früheren Kontakt entstehen.",

    "Vous pourriez recevoir une proposition qui vous permettra d’élargir vos responsabilités ou votre visibilité.":
      "Sie könnten ein Angebot erhalten, das Ihnen ermöglicht, Ihre Verantwortung oder Ihre Sichtbarkeit zu erweitern.",

    "Une compétence sous-estimée pourrait devenir un avantage important dans votre travail.":
      "Eine unterschätzte Fähigkeit könnte zu einem wichtigen Vorteil in Ihrer Arbeit werden.",

    "L’année favorise les candidatures, les présentations, les négociations et les démarches structurées.":
      "Das Jahr begünstigt Bewerbungen, Präsentationen, Verhandlungen und strukturierte Vorgehensweisen.",

    "Un projet secondaire pourrait commencer à montrer un potentiel professionnel réel.":
      "Ein Nebenprojekt könnte beginnen, echtes berufliches Potenzial zu zeigen.",

    "Une collaboration pourrait accélérer une idée qui avançait jusque-là trop lentement.":
      "Eine Zusammenarbeit könnte eine Idee beschleunigen, die bisher zu langsam vorangekommen ist.",

    "Une personne pourrait reconnaître la qualité de votre travail et vous offrir une possibilité concrète.":
      "Jemand könnte die Qualität Ihrer Arbeit erkennen und Ihnen eine konkrete Möglichkeit anbieten.",

    "Une formation ou un nouvel apprentissage pourrait améliorer votre position dans les prochains mois.":
      "Eine Weiterbildung oder neues Wissen könnte Ihre Position in den kommenden Monaten verbessern.",

    "Vous pourriez être amené à occuper une place plus importante dans une équipe ou un projet.":
      "Sie könnten eine wichtigere Rolle in einem Team oder Projekt übernehmen.",

    "Une décision audacieuse, mais préparée, pourrait modifier favorablement votre trajectoire professionnelle.":
      "Eine mutige, aber gut vorbereitete Entscheidung könnte Ihre berufliche Entwicklung positiv verändern.",

    /* FINANCIAL OPPORTUNITY */

    "Une occasion d’améliorer vos revenus pourrait apparaître sous la forme d’un mandat, d’une vente ou d’une activité complémentaire.":
      "Eine Möglichkeit zur Verbesserung Ihres Einkommens könnte sich durch einen Auftrag, einen Verkauf oder eine zusätzliche Tätigkeit ergeben.",

    "Une négociation pourrait vous permettre d’obtenir de meilleures conditions financières.":
      "Eine Verhandlung könnte Ihnen bessere finanzielle Bedingungen ermöglichen.",

    "Une dépense réduite ou une meilleure organisation pourrait créer une marge de manœuvre bienvenue.":
      "Eine reduzierte Ausgabe oder eine bessere Organisation könnte willkommenen finanziellen Spielraum schaffen.",

    "Vous pourriez découvrir une façon plus rentable d’utiliser une compétence ou une ressource déjà disponible.":
      "Sie könnten eine rentablere Möglichkeit entdecken, eine bereits vorhandene Fähigkeit oder Ressource zu nutzen.",

    "Une information utile pourrait vous permettre de récupérer un montant, de profiter d’un avantage ou d’éviter une dépense.":
      "Eine hilfreiche Information könnte Ihnen ermöglichen, Geld zurückzuerhalten, einen Vorteil zu nutzen oder eine Ausgabe zu vermeiden.",

    "Un revenu attendu pourrait enfin se concrétiser.":
      "Ein erwartetes Einkommen könnte sich endlich realisieren.",

    "Une occasion financière pourrait demander une décision rapide, mais elle devra tout de même être vérifiée soigneusement.":
      "Eine finanzielle Gelegenheit könnte eine schnelle Entscheidung erfordern, sollte aber dennoch sorgfältig geprüft werden.",

    "Une proposition modeste pourrait devenir plus intéressante à moyen terme.":
      "Ein bescheidener Vorschlag könnte mittelfristig interessanter werden.",

    "Vous pourriez poser une base solide pour une nouvelle source de revenu.":
      "Sie könnten eine solide Grundlage für eine neue Einkommensquelle schaffen.",

    "Une amélioration financière pourrait commencer par un choix simple et raisonnable effectué cette année.":
      "Eine finanzielle Verbesserung könnte mit einer einfachen und vernünftigen Entscheidung in diesem Jahr beginnen.",

    /* RELATIONSHIP OPPORTUNITY */

    "Une relation pourrait s’approfondir grâce à une conversation plus sincère.":
      "Eine Beziehung könnte sich durch ein aufrichtigeres Gespräch vertiefen.",

    "Une nouvelle rencontre pourrait vous apporter de la légèreté, du soutien ou une perspective différente.":
      "Eine neue Begegnung könnte Ihnen Leichtigkeit, Unterstützung oder eine andere Perspektive bringen.",

    "Un rapprochement pourrait devenir possible après une période de distance ou d’incompréhension.":
      "Nach einer Phase der Distanz oder des Missverständnisses könnte eine Annäherung möglich werden.",

    "Vous pourriez rencontrer une personne avec qui la confiance s’installera naturellement.":
      "Sie könnten jemanden kennenlernen, zu dem sich Vertrauen ganz natürlich entwickelt.",

    "Une occasion de réparer ou de clarifier une relation pourrait apparaître.":
      "Eine Gelegenheit, eine Beziehung zu klären oder zu verbessern, könnte sich ergeben.",

    "Une invitation pourrait vous permettre de renforcer un lien important.":
      "Eine Einladung könnte Ihnen ermöglichen, eine wichtige Verbindung zu stärken.",

    "Une personne de votre entourage pourrait se montrer plus disponible ou plus ouverte que prévu.":
      "Eine Person in Ihrem Umfeld könnte sich zugänglicher oder offener zeigen als erwartet.",

    "Une nouvelle dynamique relationnelle pourrait vous aider à vous sentir davantage compris.":
      "Eine neue Beziehungsdynamik könnte Ihnen helfen, sich besser verstanden zu fühlen.",

    "Vous pourriez découvrir qu’une relation possède plus de potentiel que vous ne l’aviez imaginé.":
      "Sie könnten erkennen, dass eine Beziehung mehr Potenzial besitzt, als Sie angenommen hatten.",

    "Une conversation spontanée pourrait marquer le début d’un lien important.":
      "Ein spontanes Gespräch könnte den Beginn einer wichtigen Verbindung markieren.",

    /* PERSONAL OPPORTUNITY */

    "Une occasion de mieux vous connaître pourrait apparaître à travers une décision ou une expérience nouvelle.":
      "Eine Gelegenheit, sich selbst besser kennenzulernen, könnte durch eine Entscheidung oder eine neue Erfahrung entstehen.",

    "Vous pourriez retrouver une motivation que vous croyiez perdue.":
      "Sie könnten eine Motivation wiederfinden, die Sie verloren glaubten.",

    "Un changement d’habitude pourrait améliorer plusieurs aspects de votre quotidien.":
      "Eine Veränderung Ihrer Gewohnheiten könnte mehrere Bereiche Ihres Alltags verbessern.",

    "L’année favorise une reprise progressive d’un projet personnel important.":
      "Das Jahr begünstigt die schrittweise Wiederaufnahme eines wichtigen persönlichen Projekts.",

    "Vous pourriez découvrir une activité capable de vous apporter davantage de satisfaction ou d’équilibre.":
      "Sie könnten eine Tätigkeit entdecken, die Ihnen mehr Zufriedenheit oder Ausgeglichenheit bringt.",

    "Une prise de conscience pourrait vous aider à abandonner une limite devenue inutile.":
      "Eine Erkenntnis könnte Ihnen helfen, eine inzwischen unnötige Begrenzung loszulassen.",

    "Vous pourriez vous sentir prêt à essayer une approche différente dans un domaine où vous tourniez en rond.":
      "Sie könnten sich bereit fühlen, in einem Bereich, in dem Sie bisher nicht weiterkamen, einen anderen Ansatz auszuprobieren.",

    "Une nouvelle routine pourrait renforcer votre confiance et votre énergie.":
      "Eine neue Routine könnte Ihr Selbstvertrauen und Ihre Energie stärken.",

    "Un choix personnel pourrait vous rapprocher d’un mode de vie plus fidèle à vos besoins.":
      "Eine persönliche Entscheidung könnte Sie einem Lebensstil näherbringen, der Ihren Bedürfnissen besser entspricht.",

    "Une expérience inattendue pourrait révéler une capacité que vous n’utilisiez pas encore pleinement.":
      "Eine unerwartete Erfahrung könnte eine Fähigkeit offenbaren, die Sie bisher noch nicht vollständig genutzt haben.",

    /* KEY PERIODS */

    "Le début de l’année favorisera la préparation des projets qui porteront leurs fruits plus tard.":
      "Der Jahresbeginn begünstigt die Vorbereitung von Projekten, die später Früchte tragen werden.",

    "Le printemps pourrait apporter plusieurs nouvelles occasions professionnelles ou personnelles.":
      "Der Frühling könnte mehrere neue berufliche oder persönliche Möglichkeiten bringen.",

    "Le milieu de l’année sera favorable aux décisions importantes et aux nouvelles collaborations.":
      "Die Jahresmitte wird für wichtige Entscheidungen und neue Kooperationen günstig sein.",

    "L’été pourrait ouvrir une porte inattendue grâce à une rencontre ou un déplacement.":
      "Der Sommer könnte durch eine Begegnung oder eine Reise eine unerwartete Tür öffnen.",

    "L’automne favorisera les concrétisations, les signatures et les projets mûrement préparés.":
      "Der Herbst begünstigt konkrete Ergebnisse, Vertragsabschlüsse und sorgfältig vorbereitete Projekte.",

    "La fin de l’année permettra de récolter les résultats de vos efforts des derniers mois.":
      "Das Jahresende ermöglicht es Ihnen, die Ergebnisse Ihrer Anstrengungen der vergangenen Monate zu ernten.",

    "Certaines opportunités demanderont d’être saisies rapidement, tandis que d’autres exigeront davantage de patience.":
      "Manche Chancen müssen schnell genutzt werden, während andere mehr Geduld erfordern.",

    "Le deuxième semestre pourrait devenir particulièrement favorable à votre évolution.":
      "Die zweite Jahreshälfte könnte für Ihre Entwicklung besonders günstig werden.",

    "Les périodes les plus porteuses seront celles où vous oserez sortir de votre zone de confort.":
      "Die vielversprechendsten Phasen werden jene sein, in denen Sie es wagen, Ihre Komfortzone zu verlassen.",

    "Une succession de petites occasions pourrait produire un changement bien plus important que prévu.":
      "Eine Reihe kleiner Chancen könnte eine wesentlich größere Veränderung bewirken als erwartet.",

    /* ACTION */

    "Faites le premier pas au lieu d’attendre un signe parfait.":
      "Machen Sie den ersten Schritt, anstatt auf ein perfektes Zeichen zu warten.",

    "Préparez vos arguments, vos documents ou votre proposition avant que l’occasion ne se présente.":
      "Bereiten Sie Ihre Argumente, Unterlagen oder Ihren Vorschlag vor, bevor sich die Gelegenheit bietet.",

    "Répondez avec intérêt, mais accordez-vous le temps de vérifier les détails.":
      "Reagieren Sie interessiert, aber nehmen Sie sich Zeit, die Details zu prüfen.",

    "Parlez de votre projet aux personnes capables de vous conseiller ou de vous mettre en contact avec les bonnes ressources.":
      "Sprechen Sie über Ihr Projekt mit Menschen, die Sie beraten oder mit den richtigen Ressourcen verbinden können.",

    "Acceptez une petite ouverture si elle peut mener vers une possibilité plus importante.":
      "Nehmen Sie eine kleine Möglichkeit an, wenn sie zu einer größeren Chance führen kann.",

    "Montrez clairement ce que vous savez faire au lieu de supposer que les autres le remarquent automatiquement.":
      "Zeigen Sie klar, was Sie können, anstatt davon auszugehen, dass andere es automatisch bemerken.",

    "Choisissez l’occasion qui correspond réellement à vos priorités plutôt que celle qui semble la plus impressionnante.":
      "Wählen Sie die Gelegenheit, die wirklich Ihren Prioritäten entspricht, statt jener, die am beeindruckendsten erscheint.",

    "Restez disponible aux ajustements sans perdre de vue votre objectif principal.":
      "Bleiben Sie offen für Anpassungen, ohne Ihr Hauptziel aus den Augen zu verlieren.",

    "Saisissez l’occasion de poser une question, de proposer une idée ou de demander une réponse claire.":
      "Nutzen Sie die Gelegenheit, eine Frage zu stellen, eine Idee vorzuschlagen oder eine klare Antwort zu verlangen.",

    "Avancez avec confiance, mais évitez de vous engager avant d’avoir compris toutes les conditions.":
      "Gehen Sie selbstbewusst voran, aber verpflichten Sie sich erst, wenn Sie alle Bedingungen verstanden haben.",

    /* CAUTION */

    "Toutes les occasions ne méritent pas d’être acceptées. Vérifiez ce qu’elles exigent réellement de votre temps et de votre énergie.":
      "Nicht jede Gelegenheit sollte angenommen werden. Prüfen Sie, was sie tatsächlich an Zeit und Energie von Ihnen verlangt.",

    "Une proposition séduisante pourrait cacher des attentes imprécises ou trop importantes.":
      "Ein attraktives Angebot könnte unklare oder überhöhte Erwartungen verbergen.",

    "Évitez de confondre urgence et véritable opportunité.":
      "Verwechseln Sie Dringlichkeit nicht mit einer echten Chance.",

    "Une occasion pourrait être moins avantageuse si elle vous oblige à abandonner une priorité essentielle.":
      "Eine Chance könnte weniger vorteilhaft sein, wenn sie Sie dazu zwingt, eine wesentliche Priorität aufzugeben.",

    "Ne vous engagez pas uniquement pour éviter de décevoir une personne.":
      "Gehen Sie keine Verpflichtung ein, nur um jemanden nicht zu enttäuschen.",

    "Une réponse rapide sera parfois nécessaire, mais elle ne devrait jamais remplacer une vérification sérieuse.":
      "Eine schnelle Antwort kann manchmal notwendig sein, sollte jedoch niemals eine gründliche Prüfung ersetzen.",

    "Le désir de changement pourrait vous pousser à idéaliser une possibilité encore mal définie.":
      "Der Wunsch nach Veränderung könnte Sie dazu verleiten, eine noch unklare Möglichkeit zu idealisieren.",

    "Une occasion réelle doit également respecter vos limites et vos valeurs.":
      "Eine echte Chance muss auch Ihre Grenzen und Werte respektieren.",

    "Évitez de multiplier les engagements simplement parce que plusieurs portes s’ouvrent en même temps.":
      "Vermeiden Sie zusätzliche Verpflichtungen nur deshalb, weil sich mehrere Türen gleichzeitig öffnen.",

    "Une proposition prometteuse devra être évaluée selon ses effets à long terme et non seulement selon son attrait immédiat.":
      "Ein vielversprechendes Angebot sollte nach seinen langfristigen Auswirkungen bewertet werden und nicht nur nach seiner unmittelbaren Attraktivität.",

    /* CONCLUSION */

    "Cette année pourrait devenir une période d’ouverture importante si vous restez attentif, préparé et fidèle à vos priorités.":
      "Dieses Jahr könnte zu einer wichtigen Phase neuer Möglichkeiten werden, wenn Sie aufmerksam, vorbereitet und Ihren Prioritäten treu bleiben.",

    "Une occasion réelle pourrait vous permettre d’avancer vers une situation plus stimulante et plus adaptée à vos besoins.":
      "Eine echte Chance könnte Ihnen ermöglichen, sich in Richtung einer anregenderen und besser zu Ihren Bedürfnissen passenden Situation zu entwickeln.",

    "Les prochains mois vous montreront que certaines portes s’ouvrent lorsque vous acceptez enfin de vous présenter devant elles.":
      "Die kommenden Monate werden Ihnen zeigen, dass sich manche Türen öffnen, wenn Sie sich endlich vor sie stellen.",

    "Votre capacité à reconnaître le bon moment pourrait transformer une possibilité discrète en véritable progression.":
      "Ihre Fähigkeit, den richtigen Moment zu erkennen, könnte eine unauffällige Möglichkeit in echten Fortschritt verwandeln.",

    "Vous pourriez terminer l’année avec une nouvelle direction, un projet relancé ou une relation enrichissante.":
      "Sie könnten das Jahr mit einer neuen Richtung, einem wiederbelebten Projekt oder einer bereichernden Beziehung beenden.",

    "Une décision prise avec discernement pourrait créer des effets positifs bien au-delà de cette année.":
      "Eine wohlüberlegte Entscheidung könnte weit über dieses Jahr hinaus positive Auswirkungen haben.",

    "Cette année favorise les occasions qui demandent autant de courage que de préparation.":
      "Dieses Jahr begünstigt Chancen, die ebenso viel Mut wie Vorbereitung erfordern.",

    "Une nouvelle possibilité pourrait confirmer que vos efforts récents n’étaient pas inutiles.":
      "Eine neue Möglichkeit könnte bestätigen, dass Ihre jüngsten Bemühungen nicht umsonst waren.",

    "Votre ouverture au changement vous permettra de découvrir une voie plus prometteuse.":
      "Ihre Offenheit für Veränderungen wird Ihnen ermöglichen, einen vielversprechenderen Weg zu entdecken.",

    "En restant attentif aux détails et aux rencontres, vous pourriez saisir une occasion particulièrement constructive.":
      "Wenn Sie auf Details und Begegnungen achten, könnten Sie eine besonders konstruktive Chance nutzen.",
  },

  /* =======================================================
     ITALIAN
  ======================================================= */

  it: {
    /* INTRODUCTION */

    "Cette année pourrait ouvrir une porte importante dans un domaine que vous cherchez à faire évoluer depuis quelque temps.":
      "Quest’anno potrebbe aprire una porta importante in un ambito che state cercando di sviluppare da qualche tempo.",

    "Les prochains mois favorisent les occasions discrètes, mais prometteuses. Une proposition modeste pourrait contenir un potentiel plus grand qu’il n’y paraît.":
      "I prossimi mesi favoriscono opportunità discrete ma promettenti. Una proposta modesta potrebbe avere un potenziale maggiore di quanto sembri.",

    "Une période d’ouverture commence. Votre capacité à reconnaître une occasion au bon moment fera une réelle différence.":
      "Inizia un periodo di apertura. La vostra capacità di riconoscere un’opportunità al momento giusto farà una vera differenza.",

    "Cette année vous place devant de nouvelles possibilités. Certaines demanderont une réponse rapide, tandis que d’autres devront mûrir avant d’être saisies.":
      "Quest’anno vi pone davanti a nuove possibilità. Alcune richiederanno una risposta rapida, mentre altre dovranno maturare prima di essere colte.",

    "Une occasion pourrait apparaître là où vous ne l’attendiez pas. Restez attentif aux changements, aux rencontres et aux conversations spontanées.":
      "Un’opportunità potrebbe presentarsi dove meno ve l’aspettate. Prestate attenzione ai cambiamenti, agli incontri e alle conversazioni spontanee.",

    "Les prochains mois vous encouragent à sortir légèrement de vos habitudes afin de découvrir une possibilité plus adaptée à vos ambitions.":
      "I prossimi mesi vi incoraggiano a uscire leggermente dalle vostre abitudini per scoprire una possibilità più adatta alle vostre ambizioni.",

    "Votre potentiel d’évolution augmente cette année. Une décision simple pourrait produire des effets durables.":
      "Il vostro potenziale di crescita aumenta quest’anno. Una semplice decisione potrebbe produrre effetti duraturi.",

    "Une nouvelle perspective pourrait modifier votre manière d’aborder un projet, une relation ou un choix personnel.":
      "Una nuova prospettiva potrebbe modificare il vostro modo di affrontare un progetto, una relazione o una scelta personale.",

    "L’année favorise les initiatives réfléchies. Une occasion réelle pourrait se présenter si vous acceptez de faire le premier pas.":
      "L’anno favorisce le iniziative ponderate. Una vera opportunità potrebbe presentarsi se accetterete di fare il primo passo.",

    "Vous pourriez constater qu’une situation auparavant bloquée commence enfin à offrir davantage de possibilités.":
      "Potreste scoprire che una situazione precedentemente bloccata comincia finalmente a offrire maggiori possibilità.",

    /* MAIN OPPORTUNITY */

    "L’occasion principale pourrait concerner un projet que vous n’aviez pas encore osé développer pleinement.":
      "L’opportunità principale potrebbe riguardare un progetto che non avevate ancora osato sviluppare pienamente.",

    "Une nouvelle responsabilité pourrait vous permettre de démontrer une compétence importante.":
      "Una nuova responsabilità potrebbe permettervi di dimostrare una competenza importante.",

    "Une rencontre pourrait vous mettre en contact avec une personne capable d’élargir vos perspectives.":
      "Un incontro potrebbe mettervi in contatto con una persona capace di ampliare le vostre prospettive.",

    "Une proposition inattendue pourrait vous aider à avancer plus rapidement que prévu.":
      "Una proposta inaspettata potrebbe aiutarvi ad avanzare più rapidamente del previsto.",

    "Un changement dans votre environnement pourrait créer une possibilité jusque-là inaccessible.":
      "Un cambiamento nel vostro ambiente potrebbe creare una possibilità fino ad ora inaccessibile.",

    "Une idée ancienne pourrait retrouver toute sa pertinence dans le contexte actuel.":
      "Una vecchia idea potrebbe ritrovare tutta la sua rilevanza nel contesto attuale.",

    "Une occasion de vous faire connaître, de présenter votre travail ou de défendre une idée pourrait apparaître.":
      "Potrebbe presentarsi un’opportunità per farvi conoscere, presentare il vostro lavoro o sostenere un’idea.",

    "Un choix que vous avez longtemps repoussé pourrait devenir plus simple à assumer.":
      "Una scelta che avete rimandato a lungo potrebbe diventare più semplice da affrontare.",

    "Une amélioration progressive pourrait commencer dans un domaine qui vous préoccupait.":
      "Potrebbe iniziare un miglioramento graduale in un ambito che vi preoccupava.",

    "Une nouvelle manière d’utiliser vos compétences pourrait ouvrir une voie intéressante.":
      "Un nuovo modo di utilizzare le vostre competenze potrebbe aprire una strada interessante.",

    /* PROFESSIONAL OPPORTUNITY */

    "Une occasion professionnelle pourrait apparaître grâce à une recommandation, une discussion ou un ancien contact.":
      "Un’opportunità professionale potrebbe presentarsi grazie a una raccomandazione, una conversazione o un vecchio contatto.",

    "Vous pourriez recevoir une proposition qui vous permettra d’élargir vos responsabilités ou votre visibilité.":
      "Potreste ricevere una proposta che vi permetta di ampliare le vostre responsabilità o la vostra visibilità.",

    "Une compétence sous-estimée pourrait devenir un avantage important dans votre travail.":
      "Una competenza sottovalutata potrebbe diventare un vantaggio importante nel vostro lavoro.",

    "L’année favorise les candidatures, les présentations, les négociations et les démarches structurées.":
      "L’anno favorisce candidature, presentazioni, negoziazioni e iniziative strutturate.",

    "Un projet secondaire pourrait commencer à montrer un potentiel professionnel réel.":
      "Un progetto secondario potrebbe iniziare a mostrare un reale potenziale professionale.",

    "Une collaboration pourrait accélérer une idée qui avançait jusque-là trop lentement.":
      "Una collaborazione potrebbe accelerare un’idea che fino ad ora procedeva troppo lentamente.",

    "Une personne pourrait reconnaître la qualité de votre travail et vous offrir une possibilité concrète.":
      "Qualcuno potrebbe riconoscere la qualità del vostro lavoro e offrirvi una possibilità concreta.",

    "Une formation ou un nouvel apprentissage pourrait améliorer votre position dans les prochains mois.":
      "Una formazione o un nuovo apprendimento potrebbe migliorare la vostra posizione nei prossimi mesi.",

    "Vous pourriez être amené à occuper une place plus importante dans une équipe ou un projet.":
      "Potreste essere chiamati a ricoprire un ruolo più importante all’interno di un team o di un progetto.",

    "Une décision audacieuse, mais préparée, pourrait modifier favorablement votre trajectoire professionnelle.":
      "Una decisione audace ma ben preparata potrebbe modificare favorevolmente il vostro percorso professionale.",

    /* FINANCIAL OPPORTUNITY */

    "Une occasion d’améliorer vos revenus pourrait apparaître sous la forme d’un mandat, d’une vente ou d’une activité complémentaire.":
      "Un’opportunità per migliorare le vostre entrate potrebbe presentarsi sotto forma di un incarico, una vendita o un’attività complementare.",

    "Une négociation pourrait vous permettre d’obtenir de meilleures conditions financières.":
      "Una negoziazione potrebbe permettervi di ottenere condizioni finanziarie migliori.",

    "Une dépense réduite ou une meilleure organisation pourrait créer une marge de manœuvre bienvenue.":
      "Una spesa ridotta o una migliore organizzazione potrebbe creare un margine finanziario utile.",

    "Vous pourriez découvrir une façon plus rentable d’utiliser une compétence ou une ressource déjà disponible.":
      "Potreste scoprire un modo più redditizio di utilizzare una competenza o una risorsa già disponibile.",

    "Une information utile pourrait vous permettre de récupérer un montant, de profiter d’un avantage ou d’éviter une dépense.":
      "Un’informazione utile potrebbe permettervi di recuperare una somma, beneficiare di un vantaggio o evitare una spesa.",

    "Un revenu attendu pourrait enfin se concrétiser.":
      "Un’entrata attesa potrebbe finalmente concretizzarsi.",

    "Une occasion financière pourrait demander une décision rapide, mais elle devra tout de même être vérifiée soigneusement.":
      "Un’opportunità finanziaria potrebbe richiedere una decisione rapida, ma dovrà comunque essere verificata attentamente.",

    "Une proposition modeste pourrait devenir plus intéressante à moyen terme.":
      "Una proposta modesta potrebbe diventare più interessante nel medio termine.",

    "Vous pourriez poser une base solide pour une nouvelle source de revenu.":
      "Potreste creare una base solida per una nuova fonte di reddito.",

    "Une amélioration financière pourrait commencer par un choix simple et raisonnable effectué cette année.":
      "Un miglioramento finanziario potrebbe iniziare con una scelta semplice e ragionevole fatta quest’anno.",

    /* RELATIONSHIP OPPORTUNITY */

    "Une relation pourrait s’approfondir grâce à une conversation plus sincère.":
      "Una relazione potrebbe approfondirsi grazie a una conversazione più sincera.",

    "Une nouvelle rencontre pourrait vous apporter de la légèreté, du soutien ou une perspective différente.":
      "Un nuovo incontro potrebbe portarvi leggerezza, sostegno o una prospettiva diversa.",

    "Un rapprochement pourrait devenir possible après une période de distance ou d’incompréhension.":
      "Un avvicinamento potrebbe diventare possibile dopo un periodo di distanza o incomprensione.",

    "Vous pourriez rencontrer une personne avec qui la confiance s’installera naturellement.":
      "Potreste incontrare una persona con cui la fiducia si svilupperà naturalmente.",

    "Une occasion de réparer ou de clarifier une relation pourrait apparaître.":
      "Potrebbe presentarsi un’occasione per riparare o chiarire una relazione.",

    "Une invitation pourrait vous permettre de renforcer un lien important.":
      "Un invito potrebbe permettervi di rafforzare un legame importante.",

    "Une personne de votre entourage pourrait se montrer plus disponible ou plus ouverte que prévu.":
      "Una persona del vostro ambiente potrebbe mostrarsi più disponibile o aperta del previsto.",

    "Une nouvelle dynamique relationnelle pourrait vous aider à vous sentir davantage compris.":
      "Una nuova dinamica relazionale potrebbe aiutarvi a sentirvi più compresi.",

    "Vous pourriez découvrir qu’une relation possède plus de potentiel que vous ne l’aviez imaginé.":
      "Potreste scoprire che una relazione possiede più potenziale di quanto immaginavate.",

    "Une conversation spontanée pourrait marquer le début d’un lien important.":
      "Una conversazione spontanea potrebbe segnare l’inizio di un legame importante.",

    /* PERSONAL OPPORTUNITY */

    "Une occasion de mieux vous connaître pourrait apparaître à travers une décision ou une expérience nouvelle.":
      "Un’opportunità per conoscervi meglio potrebbe presentarsi attraverso una decisione o una nuova esperienza.",

    "Vous pourriez retrouver une motivation que vous croyiez perdue.":
      "Potreste ritrovare una motivazione che credevate perduta.",

    "Un changement d’habitude pourrait améliorer plusieurs aspects de votre quotidien.":
      "Un cambiamento nelle abitudini potrebbe migliorare diversi aspetti della vostra vita quotidiana.",

    "L’année favorise une reprise progressive d’un projet personnel important.":
      "L’anno favorisce la ripresa graduale di un importante progetto personale.",

    "Vous pourriez découvrir une activité capable de vous apporter davantage de satisfaction ou d’équilibre.":
      "Potreste scoprire un’attività capace di offrirvi maggiore soddisfazione o equilibrio.",

    "Une prise de conscience pourrait vous aider à abandonner une limite devenue inutile.":
      "Una presa di coscienza potrebbe aiutarvi ad abbandonare un limite diventato ormai inutile.",

    "Vous pourriez vous sentir prêt à essayer une approche différente dans un domaine où vous tourniez en rond.":
      "Potreste sentirvi pronti a provare un approccio diverso in un ambito in cui vi sembrava di girare in tondo.",

    "Une nouvelle routine pourrait renforcer votre confiance et votre énergie.":
      "Una nuova routine potrebbe rafforzare la vostra fiducia e la vostra energia.",

    "Un choix personnel pourrait vous rapprocher d’un mode de vie plus fidèle à vos besoins.":
      "Una scelta personale potrebbe avvicinarvi a uno stile di vita più fedele ai vostri bisogni.",

    "Une expérience inattendue pourrait révéler une capacité que vous n’utilisiez pas encore pleinement.":
      "Un’esperienza inaspettata potrebbe rivelare una capacità che non stavate ancora utilizzando pienamente.",

    /* KEY PERIODS */

    "Le début de l’année favorisera la préparation des projets qui porteront leurs fruits plus tard.":
      "L’inizio dell’anno favorirà la preparazione di progetti che daranno i loro frutti più avanti.",

    "Le printemps pourrait apporter plusieurs nouvelles occasions professionnelles ou personnelles.":
      "La primavera potrebbe portare diverse nuove opportunità professionali o personali.",

    "Le milieu de l’année sera favorable aux décisions importantes et aux nouvelles collaborations.":
      "La metà dell’anno sarà favorevole alle decisioni importanti e alle nuove collaborazioni.",

    "L’été pourrait ouvrir une porte inattendue grâce à une rencontre ou un déplacement.":
      "L’estate potrebbe aprire una porta inaspettata grazie a un incontro o a uno spostamento.",

    "L’automne favorisera les concrétisations, les signatures et les projets mûrement préparés.":
      "L’autunno favorirà le concretizzazioni, le firme e i progetti accuratamente preparati.",

    "La fin de l’année permettra de récolter les résultats de vos efforts des derniers mois.":
      "La fine dell’anno vi permetterà di raccogliere i risultati degli sforzi compiuti negli ultimi mesi.",

    "Certaines opportunités demanderont d’être saisies rapidement, tandis que d’autres exigeront davantage de patience.":
      "Alcune opportunità dovranno essere colte rapidamente, mentre altre richiederanno maggiore pazienza.",

    "Le deuxième semestre pourrait devenir particulièrement favorable à votre évolution.":
      "La seconda metà dell’anno potrebbe diventare particolarmente favorevole alla vostra evoluzione.",

    "Les périodes les plus porteuses seront celles où vous oserez sortir de votre zone de confort.":
      "I periodi più promettenti saranno quelli in cui oserete uscire dalla vostra zona di comfort.",

    "Une succession de petites occasions pourrait produire un changement bien plus important que prévu.":
      "Una successione di piccole opportunità potrebbe produrre un cambiamento molto più importante del previsto.",

    /* ACTION */

    "Faites le premier pas au lieu d’attendre un signe parfait.":
      "Fate il primo passo invece di aspettare un segnale perfetto.",

    "Préparez vos arguments, vos documents ou votre proposition avant que l’occasion ne se présente.":
      "Preparate i vostri argomenti, i documenti o la proposta prima che si presenti l’opportunità.",

    "Répondez avec intérêt, mais accordez-vous le temps de vérifier les détails.":
      "Rispondete con interesse, ma concedetevi il tempo necessario per verificare i dettagli.",

    "Parlez de votre projet aux personnes capables de vous conseiller ou de vous mettre en contact avec les bonnes ressources.":
      "Parlate del vostro progetto con persone capaci di consigliarvi o di mettervi in contatto con le risorse giuste.",

    "Acceptez une petite ouverture si elle peut mener vers une possibilité plus importante.":
      "Accettate una piccola apertura se può condurre a una possibilità più importante.",

    "Montrez clairement ce que vous savez faire au lieu de supposer que les autres le remarquent automatiquement.":
      "Mostrate chiaramente ciò che sapete fare invece di presumere che gli altri lo notino automaticamente.",

    "Choisissez l’occasion qui correspond réellement à vos priorités plutôt que celle qui semble la plus impressionnante.":
      "Scegliete l’opportunità che corrisponde realmente alle vostre priorità invece di quella che sembra più impressionante.",

    "Restez disponible aux ajustements sans perdre de vue votre objectif principal.":
      "Rimanete aperti agli aggiustamenti senza perdere di vista il vostro obiettivo principale.",

    "Saisissez l’occasion de poser une question, de proposer une idée ou de demander une réponse claire.":
      "Cogliete l’occasione per fare una domanda, proporre un’idea o chiedere una risposta chiara.",

    "Avancez avec confiance, mais évitez de vous engager avant d’avoir compris toutes les conditions.":
      "Andate avanti con fiducia, ma evitate di impegnarvi prima di aver compreso tutte le condizioni.",

    /* CAUTION */

    "Toutes les occasions ne méritent pas d’être acceptées. Vérifiez ce qu’elles exigent réellement de votre temps et de votre énergie.":
      "Non tutte le opportunità meritano di essere accettate. Verificate ciò che richiedono realmente in termini di tempo ed energia.",

    "Une proposition séduisante pourrait cacher des attentes imprécises ou trop importantes.":
      "Una proposta allettante potrebbe nascondere aspettative poco chiare o eccessive.",

    "Évitez de confondre urgence et véritable opportunité.":
      "Evitate di confondere l’urgenza con una vera opportunità.",

    "Une occasion pourrait être moins avantageuse si elle vous oblige à abandonner une priorité essentielle.":
      "Un’opportunità potrebbe essere meno vantaggiosa se vi obbliga ad abbandonare una priorità essenziale.",

    "Ne vous engagez pas uniquement pour éviter de décevoir une personne.":
      "Non impegnatevi soltanto per evitare di deludere qualcuno.",

    "Une réponse rapide sera parfois nécessaire, mais elle ne devrait jamais remplacer une vérification sérieuse.":
      "A volte sarà necessaria una risposta rapida, ma non dovrebbe mai sostituire una verifica accurata.",

    "Le désir de changement pourrait vous pousser à idéaliser une possibilité encore mal définie.":
      "Il desiderio di cambiamento potrebbe spingervi a idealizzare una possibilità ancora poco definita.",

    "Une occasion réelle doit également respecter vos limites et vos valeurs.":
      "Una vera opportunità deve rispettare anche i vostri limiti e i vostri valori.",

    "Évitez de multiplier les engagements simplement parce que plusieurs portes s’ouvrent en même temps.":
      "Evitate di moltiplicare gli impegni semplicemente perché diverse porte si aprono contemporaneamente.",

    "Une proposition prometteuse devra être évaluée selon ses effets à long terme et non seulement selon son attrait immédiat.":
      "Una proposta promettente dovrà essere valutata in base ai suoi effetti a lungo termine e non soltanto al suo fascino immediato.",

    /* CONCLUSION */

    "Cette année pourrait devenir une période d’ouverture importante si vous restez attentif, préparé et fidèle à vos priorités.":
      "Quest’anno potrebbe diventare un importante periodo di apertura se rimarrete attenti, preparati e fedeli alle vostre priorità.",

    "Une occasion réelle pourrait vous permettre d’avancer vers une situation plus stimulante et plus adaptée à vos besoins.":
      "Una vera opportunità potrebbe permettervi di avanzare verso una situazione più stimolante e più adatta ai vostri bisogni.",

    "Les prochains mois vous montreront que certaines portes s’ouvrent lorsque vous acceptez enfin de vous présenter devant elles.":
      "I prossimi mesi vi mostreranno che alcune porte si aprono quando finalmente accettate di presentarvi davanti a esse.",

    "Votre capacité à reconnaître le bon moment pourrait transformer une possibilité discrète en véritable progression.":
      "La vostra capacità di riconoscere il momento giusto potrebbe trasformare una possibilità discreta in un vero progresso.",

    "Vous pourriez terminer l’année avec une nouvelle direction, un projet relancé ou une relation enrichissante.":
      "Potreste concludere l’anno con una nuova direzione, un progetto rilanciato o una relazione arricchente.",

    "Une décision prise avec discernement pourrait créer des effets positifs bien au-delà de cette année.":
      "Una decisione presa con discernimento potrebbe produrre effetti positivi ben oltre quest’anno.",

    "Cette année favorise les occasions qui demandent autant de courage que de préparation.":
      "Quest’anno favorisce le opportunità che richiedono tanto coraggio quanto preparazione.",

    "Une nouvelle possibilité pourrait confirmer que vos efforts récents n’étaient pas inutiles.":
      "Una nuova possibilità potrebbe confermare che i vostri recenti sforzi non sono stati inutili.",

    "Votre ouverture au changement vous permettra de découvrir une voie plus prometteuse.":
      "La vostra apertura al cambiamento vi permetterà di scoprire una strada più promettente.",

    "En restant attentif aux détails et aux rencontres, vous pourriez saisir une occasion particulièrement constructive.":
      "Rimanendo attenti ai dettagli e agli incontri, potreste cogliere un’opportunità particolarmente costruttiva.",
  },

  /* =======================================================
     PORTUGUESE — BRAZIL
  ======================================================= */

  pt: {
    /* INTRODUCTION */

    "Cette année pourrait ouvrir une porte importante dans un domaine que vous cherchez à faire évoluer depuis quelque temps.":
      "Este ano poderá abrir uma porta importante em uma área que você vem tentando desenvolver há algum tempo.",

    "Les prochains mois favorisent les occasions discrètes, mais prometteuses. Une proposition modeste pourrait contenir un potentiel plus grand qu’il n’y paraît.":
      "Os próximos meses favorecem oportunidades discretas, mas promissoras. Uma proposta modesta poderá ter um potencial maior do que parece.",

    "Une période d’ouverture commence. Votre capacité à reconnaître une occasion au bon moment fera une réelle différence.":
      "Começa um período de abertura. Sua capacidade de reconhecer uma oportunidade no momento certo fará uma diferença real.",

    "Cette année vous place devant de nouvelles possibilités. Certaines demanderont une réponse rapide, tandis que d’autres devront mûrir avant d’être saisies.":
      "Este ano coloca você diante de novas possibilidades. Algumas exigirão uma resposta rápida, enquanto outras precisarão amadurecer antes de serem aproveitadas.",

    "Une occasion pourrait apparaître là où vous ne l’attendiez pas. Restez attentif aux changements, aux rencontres et aux conversations spontanées.":
      "Uma oportunidade poderá surgir onde você menos espera. Fique atento às mudanças, aos encontros e às conversas espontâneas.",

    "Les prochains mois vous encouragent à sortir légèrement de vos habitudes afin de découvrir une possibilité plus adaptée à vos ambitions.":
      "Os próximos meses incentivam você a sair um pouco dos seus hábitos para descobrir uma possibilidade mais adequada às suas ambições.",

    "Votre potentiel d’évolution augmente cette année. Une décision simple pourrait produire des effets durables.":
      "Seu potencial de evolução aumenta neste ano. Uma decisão simples poderá produzir efeitos duradouros.",

    "Une nouvelle perspective pourrait modifier votre manière d’aborder un projet, une relation ou un choix personnel.":
      "Uma nova perspectiva poderá mudar a maneira como você aborda um projeto, um relacionamento ou uma escolha pessoal.",

    "L’année favorise les initiatives réfléchies. Une occasion réelle pourrait se présenter si vous acceptez de faire le premier pas.":
      "O ano favorece iniciativas bem pensadas. Uma verdadeira oportunidade poderá surgir se você aceitar dar o primeiro passo.",

    "Vous pourriez constater qu’une situation auparavant bloquée commence enfin à offrir davantage de possibilités.":
      "Você poderá perceber que uma situação anteriormente bloqueada finalmente começa a oferecer mais possibilidades.",

    /* MAIN OPPORTUNITY */

    "L’occasion principale pourrait concerner un projet que vous n’aviez pas encore osé développer pleinement.":
      "A principal oportunidade poderá estar relacionada a um projeto que você ainda não havia se atrevido a desenvolver plenamente.",

    "Une nouvelle responsabilité pourrait vous permettre de démontrer une compétence importante.":
      "Uma nova responsabilidade poderá permitir que você demonstre uma habilidade importante.",

    "Une rencontre pourrait vous mettre en contact avec une personne capable d’élargir vos perspectives.":
      "Um encontro poderá colocar você em contato com alguém capaz de ampliar suas perspectivas.",

    "Une proposition inattendue pourrait vous aider à avancer plus rapidement que prévu.":
      "Uma proposta inesperada poderá ajudar você a avançar mais rapidamente do que esperava.",

    "Un changement dans votre environnement pourrait créer une possibilité jusque-là inaccessible.":
      "Uma mudança em seu ambiente poderá criar uma possibilidade que antes era inacessível.",

    "Une idée ancienne pourrait retrouver toute sa pertinence dans le contexte actuel.":
      "Uma antiga ideia poderá recuperar toda a sua relevância no contexto atual.",

    "Une occasion de vous faire connaître, de présenter votre travail ou de défendre une idée pourrait apparaître.":
      "Poderá surgir uma oportunidade para você ganhar visibilidade, apresentar seu trabalho ou defender uma ideia.",

    "Un choix que vous avez longtemps repoussé pourrait devenir plus simple à assumer.":
      "Uma decisão que você adiou por muito tempo poderá se tornar mais fácil de assumir.",

    "Une amélioration progressive pourrait commencer dans un domaine qui vous préoccupait.":
      "Uma melhora gradual poderá começar em uma área que vinha preocupando você.",

    "Une nouvelle manière d’utiliser vos compétences pourrait ouvrir une voie intéressante.":
      "Uma nova maneira de utilizar suas habilidades poderá abrir um caminho interessante.",

    /* PROFESSIONAL OPPORTUNITY */

    "Une occasion professionnelle pourrait apparaître grâce à une recommandation, une discussion ou un ancien contact.":
      "Uma oportunidade profissional poderá surgir por meio de uma indicação, uma conversa ou um antigo contato.",

    "Vous pourriez recevoir une proposition qui vous permettra d’élargir vos responsabilités ou votre visibilité.":
      "Você poderá receber uma proposta que permita ampliar suas responsabilidades ou sua visibilidade.",

    "Une compétence sous-estimée pourrait devenir un avantage important dans votre travail.":
      "Uma habilidade subestimada poderá se tornar uma vantagem importante em seu trabalho.",

    "L’année favorise les candidatures, les présentations, les négociations et les démarches structurées.":
      "O ano favorece candidaturas, apresentações, negociações e iniciativas estruturadas.",

    "Un projet secondaire pourrait commencer à montrer un potentiel professionnel réel.":
      "Um projeto secundário poderá começar a mostrar um verdadeiro potencial profissional.",

    "Une collaboration pourrait accélérer une idée qui avançait jusque-là trop lentement.":
      "Uma colaboração poderá acelerar uma ideia que até agora vinha avançando lentamente demais.",

    "Une personne pourrait reconnaître la qualité de votre travail et vous offrir une possibilité concrète.":
      "Alguém poderá reconhecer a qualidade do seu trabalho e oferecer uma oportunidade concreta.",

    "Une formation ou un nouvel apprentissage pourrait améliorer votre position dans les prochains mois.":
      "Uma formação ou um novo aprendizado poderá melhorar sua posição nos próximos meses.",

    "Vous pourriez être amené à occuper une place plus importante dans une équipe ou un projet.":
      "Você poderá assumir uma posição mais importante dentro de uma equipe ou projeto.",

    "Une décision audacieuse, mais préparée, pourrait modifier favorablement votre trajectoire professionnelle.":
      "Uma decisão ousada, mas bem preparada, poderá modificar favoravelmente sua trajetória profissional.",

    /* FINANCIAL OPPORTUNITY */

    "Une occasion d’améliorer vos revenus pourrait apparaître sous la forme d’un mandat, d’une vente ou d’une activité complémentaire.":
      "Uma oportunidade de aumentar sua renda poderá surgir na forma de um trabalho, uma venda ou uma atividade complementar.",

    "Une négociation pourrait vous permettre d’obtenir de meilleures conditions financières.":
      "Uma negociação poderá permitir que você obtenha melhores condições financeiras.",

    "Une dépense réduite ou une meilleure organisation pourrait créer une marge de manœuvre bienvenue.":
      "A redução de uma despesa ou uma organização melhor poderá criar uma margem financeira bem-vinda.",

    "Vous pourriez découvrir une façon plus rentable d’utiliser une compétence ou une ressource déjà disponible.":
      "Você poderá descobrir uma forma mais rentável de utilizar uma habilidade ou um recurso que já possui.",

    "Une information utile pourrait vous permettre de récupérer un montant, de profiter d’un avantage ou d’éviter une dépense.":
      "Uma informação útil poderá permitir que você recupere um valor, aproveite um benefício ou evite uma despesa.",

    "Un revenu attendu pourrait enfin se concrétiser.":
      "Uma renda esperada poderá finalmente se concretizar.",

    "Une occasion financière pourrait demander une décision rapide, mais elle devra tout de même être vérifiée soigneusement.":
      "Uma oportunidade financeira poderá exigir uma decisão rápida, mas ainda assim deverá ser verificada com cuidado.",

    "Une proposition modeste pourrait devenir plus intéressante à moyen terme.":
      "Uma proposta modesta poderá se tornar mais interessante a médio prazo.",

    "Vous pourriez poser une base solide pour une nouvelle source de revenu.":
      "Você poderá estabelecer uma base sólida para uma nova fonte de renda.",

    "Une amélioration financière pourrait commencer par un choix simple et raisonnable effectué cette année.":
      "Uma melhora financeira poderá começar com uma escolha simples e sensata feita neste ano.",

    /* RELATIONSHIP OPPORTUNITY */

    "Une relation pourrait s’approfondir grâce à une conversation plus sincère.":
      "Um relacionamento poderá se aprofundar graças a uma conversa mais sincera.",

    "Une nouvelle rencontre pourrait vous apporter de la légèreté, du soutien ou une perspective différente.":
      "Um novo encontro poderá trazer leveza, apoio ou uma perspectiva diferente.",

    "Un rapprochement pourrait devenir possible après une période de distance ou d’incompréhension.":
      "Uma aproximação poderá se tornar possível depois de um período de distância ou incompreensão.",

    "Vous pourriez rencontrer une personne avec qui la confiance s’installera naturellement.":
      "Você poderá conhecer alguém com quem a confiança se desenvolverá naturalmente.",

    "Une occasion de réparer ou de clarifier une relation pourrait apparaître.":
      "Poderá surgir uma oportunidade para reparar ou esclarecer um relacionamento.",

    "Une invitation pourrait vous permettre de renforcer un lien important.":
      "Um convite poderá permitir que você fortaleça um vínculo importante.",

    "Une personne de votre entourage pourrait se montrer plus disponible ou plus ouverte que prévu.":
      "Uma pessoa próxima poderá se mostrar mais disponível ou aberta do que você esperava.",

    "Une nouvelle dynamique relationnelle pourrait vous aider à vous sentir davantage compris.":
      "Uma nova dinâmica nos relacionamentos poderá ajudar você a se sentir mais compreendido.",

    "Vous pourriez découvrir qu’une relation possède plus de potentiel que vous ne l’aviez imaginé.":
      "Você poderá descobrir que um relacionamento possui mais potencial do que imaginava.",

    "Une conversation spontanée pourrait marquer le début d’un lien important.":
      "Uma conversa espontânea poderá marcar o início de um vínculo importante.",

    /* PERSONAL OPPORTUNITY */

    "Une occasion de mieux vous connaître pourrait apparaître à travers une décision ou une expérience nouvelle.":
      "Uma oportunidade de se conhecer melhor poderá surgir por meio de uma decisão ou de uma nova experiência.",

    "Vous pourriez retrouver une motivation que vous croyiez perdue.":
      "Você poderá recuperar uma motivação que acreditava ter perdido.",

    "Un changement d’habitude pourrait améliorer plusieurs aspects de votre quotidien.":
      "Uma mudança de hábito poderá melhorar vários aspectos da sua vida cotidiana.",

    "L’année favorise une reprise progressive d’un projet personnel important.":
      "O ano favorece a retomada gradual de um projeto pessoal importante.",

    "Vous pourriez découvrir une activité capable de vous apporter davantage de satisfaction ou d’équilibre.":
      "Você poderá descobrir uma atividade capaz de trazer mais satisfação ou equilíbrio.",

    "Une prise de conscience pourrait vous aider à abandonner une limite devenue inutile.":
      "Uma tomada de consciência poderá ajudar você a abandonar uma limitação que deixou de ser necessária.",

    "Vous pourriez vous sentir prêt à essayer une approche différente dans un domaine où vous tourniez en rond.":
      "Você poderá se sentir pronto para experimentar uma abordagem diferente em uma área na qual parecia estar andando em círculos.",

    "Une nouvelle routine pourrait renforcer votre confiance et votre énergie.":
      "Uma nova rotina poderá fortalecer sua confiança e sua energia.",

    "Un choix personnel pourrait vous rapprocher d’un mode de vie plus fidèle à vos besoins.":
      "Uma escolha pessoal poderá aproximar você de um estilo de vida mais alinhado às suas necessidades.",

    "Une expérience inattendue pourrait révéler une capacité que vous n’utilisiez pas encore pleinement.":
      "Uma experiência inesperada poderá revelar uma capacidade que você ainda não utilizava plenamente.",

    /* KEY PERIODS */

    "Le début de l’année favorisera la préparation des projets qui porteront leurs fruits plus tard.":
      "O início do ano favorecerá a preparação de projetos que darão frutos mais adiante.",

    "Le printemps pourrait apporter plusieurs nouvelles occasions professionnelles ou personnelles.":
      "A primavera poderá trazer várias novas oportunidades profissionais ou pessoais.",

    "Le milieu de l’année sera favorable aux décisions importantes et aux nouvelles collaborations.":
      "A metade do ano será favorável a decisões importantes e novas colaborações.",

    "L’été pourrait ouvrir une porte inattendue grâce à une rencontre ou un déplacement.":
      "O verão poderá abrir uma porta inesperada graças a um encontro ou uma viagem.",

    "L’automne favorisera les concrétisations, les signatures et les projets mûrement préparés.":
      "O outono favorecerá concretizações, assinaturas e projetos cuidadosamente preparados.",

    "La fin de l’année permettra de récolter les résultats de vos efforts des derniers mois.":
      "O final do ano permitirá colher os resultados dos seus esforços dos últimos meses.",

    "Certaines opportunités demanderont d’être saisies rapidement, tandis que d’autres exigeront davantage de patience.":
      "Algumas oportunidades precisarão ser aproveitadas rapidamente, enquanto outras exigirão mais paciência.",

    "Le deuxième semestre pourrait devenir particulièrement favorable à votre évolution.":
      "O segundo semestre poderá se tornar especialmente favorável à sua evolução.",

    "Les périodes les plus porteuses seront celles où vous oserez sortir de votre zone de confort.":
      "Os períodos mais promissores serão aqueles em que você ousar sair da sua zona de conforto.",

    "Une succession de petites occasions pourrait produire un changement bien plus important que prévu.":
      "Uma sequência de pequenas oportunidades poderá produzir uma mudança muito maior do que o esperado.",

    /* ACTION */

    "Faites le premier pas au lieu d’attendre un signe parfait.":
      "Dê o primeiro passo em vez de esperar por um sinal perfeito.",

    "Préparez vos arguments, vos documents ou votre proposition avant que l’occasion ne se présente.":
      "Prepare seus argumentos, documentos ou proposta antes que a oportunidade apareça.",

    "Répondez avec intérêt, mais accordez-vous le temps de vérifier les détails.":
      "Responda com interesse, mas reserve um tempo para verificar os detalhes.",

    "Parlez de votre projet aux personnes capables de vous conseiller ou de vous mettre en contact avec les bonnes ressources.":
      "Converse sobre seu projeto com pessoas capazes de orientar você ou colocá-lo em contato com os recursos certos.",

    "Acceptez une petite ouverture si elle peut mener vers une possibilité plus importante.":
      "Aceite uma pequena abertura se ela puder levar a uma oportunidade maior.",

    "Montrez clairement ce que vous savez faire au lieu de supposer que les autres le remarquent automatiquement.":
      "Mostre claramente o que você sabe fazer em vez de presumir que os outros perceberão automaticamente.",

    "Choisissez l’occasion qui correspond réellement à vos priorités plutôt que celle qui semble la plus impressionnante.":
      "Escolha a oportunidade que realmente corresponde às suas prioridades, em vez daquela que parece mais impressionante.",

    "Restez disponible aux ajustements sans perdre de vue votre objectif principal.":
      "Permaneça aberto a ajustes sem perder de vista seu objetivo principal.",

    "Saisissez l’occasion de poser une question, de proposer une idée ou de demander une réponse claire.":
      "Aproveite a oportunidade para fazer uma pergunta, propor uma ideia ou pedir uma resposta clara.",

    "Avancez avec confiance, mais évitez de vous engager avant d’avoir compris toutes les conditions.":
      "Avance com confiança, mas evite assumir um compromisso antes de compreender todas as condições.",

    /* CAUTION */

    "Toutes les occasions ne méritent pas d’être acceptées. Vérifiez ce qu’elles exigent réellement de votre temps et de votre énergie.":
      "Nem todas as oportunidades merecem ser aceitas. Verifique o que elas realmente exigem do seu tempo e da sua energia.",

    "Une proposition séduisante pourrait cacher des attentes imprécises ou trop importantes.":
      "Uma proposta atraente poderá esconder expectativas pouco claras ou excessivas.",

    "Évitez de confondre urgence et véritable opportunité.":
      "Evite confundir urgência com uma verdadeira oportunidade.",

    "Une occasion pourrait être moins avantageuse si elle vous oblige à abandonner une priorité essentielle.":
      "Uma oportunidade poderá ser menos vantajosa se obrigar você a abandonar uma prioridade essencial.",

    "Ne vous engagez pas uniquement pour éviter de décevoir une personne.":
      "Não assuma um compromisso apenas para evitar decepcionar alguém.",

    "Une réponse rapide sera parfois nécessaire, mais elle ne devrait jamais remplacer une vérification sérieuse.":
      "Às vezes será necessária uma resposta rápida, mas ela nunca deverá substituir uma verificação cuidadosa.",

    "Le désir de changement pourrait vous pousser à idéaliser une possibilité encore mal définie.":
      "O desejo de mudança poderá levar você a idealizar uma possibilidade que ainda não está bem definida.",

    "Une occasion réelle doit également respecter vos limites et vos valeurs.":
      "Uma verdadeira oportunidade também deve respeitar seus limites e seus valores.",

    "Évitez de multiplier les engagements simplement parce que plusieurs portes s’ouvrent en même temps.":
      "Evite assumir vários compromissos apenas porque diversas portas estão se abrindo ao mesmo tempo.",

    "Une proposition prometteuse devra être évaluée selon ses effets à long terme et non seulement selon son attrait immédiat.":
      "Uma proposta promissora deverá ser avaliada por seus efeitos de longo prazo, e não apenas por sua atratividade imediata.",

    /* CONCLUSION */

    "Cette année pourrait devenir une période d’ouverture importante si vous restez attentif, préparé et fidèle à vos priorités.":
      "Este ano poderá se tornar um importante período de abertura se você permanecer atento, preparado e fiel às suas prioridades.",

    "Une occasion réelle pourrait vous permettre d’avancer vers une situation plus stimulante et plus adaptée à vos besoins.":
      "Uma verdadeira oportunidade poderá permitir que você avance em direção a uma situação mais estimulante e adequada às suas necessidades.",

    "Les prochains mois vous montreront que certaines portes s’ouvrent lorsque vous acceptez enfin de vous présenter devant elles.":
      "Os próximos meses mostrarão que algumas portas se abrem quando você finalmente aceita se apresentar diante delas.",

    "Votre capacité à reconnaître le bon moment pourrait transformer une possibilité discrète en véritable progression.":
      "Sua capacidade de reconhecer o momento certo poderá transformar uma possibilidade discreta em um verdadeiro avanço.",

    "Vous pourriez terminer l’année avec une nouvelle direction, un projet relancé ou une relation enrichissante.":
      "Você poderá terminar o ano com uma nova direção, um projeto retomado ou um relacionamento enriquecedor.",

    "Une décision prise avec discernement pourrait créer des effets positifs bien au-delà de cette année.":
      "Uma decisão tomada com discernimento poderá gerar efeitos positivos muito além deste ano.",

    "Cette année favorise les occasions qui demandent autant de courage que de préparation.":
      "Este ano favorece oportunidades que exigem tanto coragem quanto preparação.",

    "Une nouvelle possibilité pourrait confirmer que vos efforts récents n’étaient pas inutiles.":
      "Uma nova possibilidade poderá confirmar que seus esforços recentes não foram em vão.",

    "Votre ouverture au changement vous permettra de découvrir une voie plus prometteuse.":
      "Sua abertura à mudança permitirá que você descubra um caminho mais promissor.",

    "En restant attentif aux détails et aux rencontres, vous pourriez saisir une occasion particulièrement constructive.":
      "Mantendo-se atento aos detalhes e aos encontros, você poderá aproveitar uma oportunidade especialmente construtiva.",
  },
};

/* =========================================================
   APPLY TRANSLATIONS
========================================================= */

function applyTranslations(
  source: string,
  translations: TranslationMap,
): string {
  let output = source;

  for (
    const [from, to]
    of Object.entries(translations)
  ) {
    output =
      output.split(from).join(to);
  }

  return output;
}

/* =========================================================
   LOCALIZER — YEAR HOROSCOPE OPPORTUNITY
========================================================= */

export function localizeYearHoroscopeOpportunity(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let output = source;

  output =
    applyTranslations(
      output,
      OPPORTUNITY_TITLES[locale],
    );

  output =
    applyTranslations(
      output,
      OPPORTUNITY_TEXTS[locale],
    );

  return output;
}
